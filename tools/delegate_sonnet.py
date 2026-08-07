#!/usr/bin/env python3
"""
delegate_sonnet.py — delegate a subtask to Claude Sonnet via Anthropic's
Messages API.

REQUIRES A SEPARATE ANTHROPIC **API** CREDENTIAL. This is not covered by a
Claude Max subscription: Max covers Claude Code's own usage over OAuth, while
this script calls api.anthropic.com directly and bills per token against a
Console organization. Set ANTHROPIC_API_KEY, or run `ant auth login` and export
a token (see below). Without one, every call fails at the auth check.

  Sonnet 5 pricing at time of writing: $3 / $15 per million tokens
  (introductory $2 / $10 through 2026-08-31).

BEFORE REACHING FOR THIS, consider a Claude Code subagent running Sonnet
instead (the Agent tool takes a `model` parameter). That runs under the Max
plan, and unlike this script the subagent can actually read the repo — every
delegate.py failure in this project traced back to it being text-in/text-out
with no file access.

Usage (mirrors tools/delegate.py):
    python delegate_sonnet.py "<prompt text>"
    python delegate_sonnet.py --prompt-file path/to/prompt.txt
    echo "some prompt" | python delegate_sonnet.py -

Exit codes (same contract as delegate.py):
    0   success
    2   output truncated at the token limit (partial output WAS printed)
    3   empty content, or the model declined the request
    1   hard failure (auth, bad status, retries exhausted)
"""

import argparse
import json
import os
import sys
import time

import requests

API_URL = "https://api.anthropic.com/v1/messages"
API_VERSION = "2023-06-01"

# Sonnet 5 is the current Sonnet. Haiku is here as the cheap fallback for
# mechanical work; both take the same request shape.
MODELS = {
    "sonnet": "claude-sonnet-5",
    "haiku": "claude-haiku-4-5",
}
DEFAULT_MODEL = "sonnet"

RETRYABLE_STATUS_CODES = {429, 500, 502, 503, 504}
# Not every 429 is a rate limit -- quota/billing 429s never succeed on retry.
# Same lesson as delegate.py, which burned 4.5 minutes on a suspended account.
PERMANENT_429_MARKERS = (
    "credit balance",
    "insufficient",
    "quota",
    "billing",
    "suspended",
)
MAX_RETRIES = 5
RETRY_DELAY_SECONDS = 20


class ProviderUnavailable(Exception):
    """Retryable failure (rate limit, capacity, transient network error)."""


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Delegate a subtask to Claude Sonnet (requires an Anthropic API key)."
    )
    parser.add_argument(
        "--model", default=DEFAULT_MODEL, choices=sorted(MODELS),
        help=f"Which model to call (default: {DEFAULT_MODEL})",
    )
    prompt_group = parser.add_mutually_exclusive_group(required=True)
    prompt_group.add_argument("prompt", nargs="?", help='Prompt text, or "-" for stdin')
    prompt_group.add_argument("--prompt-file", help="Path to a file containing the prompt")
    parser.add_argument("--system", default=None, help="Optional system prompt")
    parser.add_argument("--max-tokens", type=int, default=4096, help="Max output tokens (default: 4096)")
    parser.add_argument(
        "--thinking", action="store_true",
        help="Enable adaptive thinking. OFF by default: thinking tokens count "
             "against --max-tokens, which is what starved every reasoning-model "
             "call in delegate.py. Leave off for extraction and drafting.",
    )
    parser.add_argument("--timeout", type=int, default=180, help="Request timeout in seconds (default: 180)")
    return parser


def resolve_prompt(args: argparse.Namespace) -> str:
    if args.prompt_file:
        with open(args.prompt_file, "r", encoding="utf-8") as f:
            return f.read()
    if args.prompt == "-":
        return sys.stdin.read()
    return args.prompt


def auth_headers() -> dict:
    """
    Anthropic accepts either an API key or an OAuth bearer token. The two use
    DIFFERENT headers -- swapping one for the other is a header change, not just
    a value swap, and a bearer token additionally needs the oauth beta flag.
    """
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if api_key:
        return {"x-api-key": api_key}

    token = os.environ.get("ANTHROPIC_AUTH_TOKEN")
    if token:
        return {
            "Authorization": f"Bearer {token}",
            "anthropic-beta": "oauth-2025-04-20",
        }

    raise SystemExit(
        "Error: no Anthropic API credential found.\n"
        "  Set ANTHROPIC_API_KEY, or run `ant auth login` and then:\n"
        "    export ANTHROPIC_AUTH_TOKEN=$(ant auth print-credentials --access-token)\n"
        "  Note: a Claude Max subscription does NOT grant API access -- this needs a\n"
        "  Console organization with credits. For Max-covered delegation, use a\n"
        "  Claude Code subagent with model: sonnet instead."
    )


def call_model(model_key: str, prompt: str, system: str | None,
               max_tokens: int, thinking: bool, timeout: int) -> dict:
    headers = {
        "anthropic-version": API_VERSION,
        "content-type": "application/json",
        **auth_headers(),
    }

    payload = {
        "model": MODELS[model_key],
        "max_tokens": max_tokens,
        "messages": [{"role": "user", "content": prompt}],
    }
    # `system` is a TOP-LEVEL parameter here, not a message with role "system"
    # -- unlike the OpenAI-compatible shape delegate.py uses.
    if system:
        payload["system"] = system
    # Sonnet 5 runs adaptive thinking when `thinking` is omitted, and thinking
    # shares the max_tokens budget with the answer. Disable it explicitly unless
    # asked for, so a 4096-token budget buys 4096 tokens of actual output.
    payload["thinking"] = {"type": "adaptive"} if thinking else {"type": "disabled"}
    # NOTE: temperature/top_p/top_k are deliberately absent. Sonnet 5 rejects
    # non-default values with a 400 -- delegate.py's `--temperature 0.3` default
    # would fail outright here.

    try:
        response = requests.post(API_URL, headers=headers, json=payload, timeout=timeout)
    except requests.exceptions.RequestException as exc:
        raise ProviderUnavailable(f"request failed: {exc}")

    if response.status_code == 429 and any(
        m in response.text.lower() for m in PERMANENT_429_MARKERS
    ):
        raise SystemExit(
            f"Error: HTTP 429 for a quota/billing reason, which retrying cannot fix:\n{response.text.strip()}"
        )
    if response.status_code in RETRYABLE_STATUS_CODES:
        raise ProviderUnavailable(f"HTTP {response.status_code}: {response.text}")
    if response.status_code != 200:
        raise SystemExit(f"Error: HTTP {response.status_code}\n{response.text}")

    data = response.json()

    # The response `content` is a LIST of blocks, not a single string. With
    # thinking enabled the first block is a thinking block whose text is empty
    # by default -- indexing content[0].text blindly returns nothing. Collect
    # every text block instead.
    try:
        text = "".join(b.get("text", "") for b in data["content"] if b.get("type") == "text")
    except (KeyError, TypeError):
        raise SystemExit(f"Error: unexpected response shape: {json.dumps(data)[:500]}")

    usage = data.get("usage") or {}
    return {
        "content": text,
        "stop_reason": data.get("stop_reason"),
        "stop_details": data.get("stop_details"),
        "model": data.get("model", MODELS[model_key]),
        "input_tokens": usage.get("input_tokens"),
        "output_tokens": usage.get("output_tokens"),
    }


def call_with_retries(model_key: str, prompt: str, system: str | None,
                      max_tokens: int, thinking: bool, timeout: int) -> dict:
    last_error = None
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            return call_model(model_key, prompt, system, max_tokens, thinking, timeout)
        except ProviderUnavailable as exc:
            last_error = exc
            if attempt < MAX_RETRIES:
                print(
                    f"[delegate_sonnet.py: attempt {attempt}/{MAX_RETRIES} failed — {exc} "
                    f"— retrying in {RETRY_DELAY_SECONDS}s]",
                    file=sys.stderr,
                )
                time.sleep(RETRY_DELAY_SECONDS)
    raise SystemExit(f"Error: failed after {MAX_RETRIES} attempts. Last error: {last_error}")


def main() -> None:
    # Windows redirects stdout as cp1252; an en-dash in the response would then
    # kill print() *after* the call was billed. Same fix as delegate.py.
    for stream in (sys.stdout, sys.stderr):
        try:
            stream.reconfigure(encoding="utf-8")
        except (AttributeError, ValueError):
            pass

    args = build_parser().parse_args()
    prompt = resolve_prompt(args)
    if not prompt or not prompt.strip():
        raise SystemExit("Error: empty prompt.")

    result = call_with_retries(
        model_key=args.model,
        prompt=prompt,
        system=args.system,
        max_tokens=args.max_tokens,
        thinking=args.thinking,
        timeout=args.timeout,
    )

    content = result["content"]
    if content:
        print(content)

    budget = f" (in: {result['input_tokens']}, out: {result['output_tokens']} tokens)"

    # A refusal is a successful HTTP 200 with stop_reason "refusal" -- not an
    # error status. Check stop_reason before trusting the content.
    if result["stop_reason"] == "refusal":
        details = result.get("stop_details") or {}
        print(
            f"[delegate_sonnet.py: the model DECLINED this request "
            f"(category: {details.get('category')}){budget}.]",
            file=sys.stderr,
        )
        raise SystemExit(3)

    if not content.strip():
        print(
            f"[delegate_sonnet.py: EMPTY content, stop_reason="
            f"{result['stop_reason']!r}{budget}. Nothing was written.]",
            file=sys.stderr,
        )
        raise SystemExit(3)

    if result["stop_reason"] == "max_tokens":
        print(
            f"[delegate_sonnet.py: output was TRUNCATED at the token limit{budget}. "
            f"What was printed is incomplete — do not use it as-is. "
            f"Raise --max-tokens{'' if args.thinking else ', or note that thinking is already off'}.]",
            file=sys.stderr,
        )
        raise SystemExit(2)


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
delegate.py — call a cheaper model for a subtask, from inside a Claude Code
session that itself stays on OAuth/Max Plan billing.

This script never touches Anthropic's API. Claude Code just runs it like any
other tool/bash command; the model call happens entirely inside this process
using the target provider's own API key.

Usage:
    python delegate.py <model> "<prompt text>"
    python delegate.py <model> --prompt-file path/to/prompt.txt
    echo "some prompt" | python delegate.py <model> -

Available <model> values (see MODEL_VARIANTS below):
    deepseek-flash   deepseek-pro
    kimi-2.7         kimi-k3
    nim-nano         nim-super

Required environment variables (only the one for the provider(s) you use):
    DEEPSEEK_API_KEY
    MOONSHOT_API_KEY
    NVIDIA_NIM_API_KEY

Exit codes:
    0   success
    2   output truncated at the token limit (partial output WAS printed)
    3   model returned empty content (nothing printed)
    1   hard failure (all retries and fallbacks exhausted, bad HTTP status)

Codes 2 and 3 exist because reasoning models spend max_tokens on internal
thinking before emitting anything, so a call can come back 200 OK with a
well-formed body and no usable content. Check the exit code when scripting a
batch -- do not assume a written file means a good result.
"""

import argparse
import os
import sys
import time

import requests

# Provider-level connection info (endpoint + which env var holds the key).
PROVIDER_ENDPOINTS = {
    "deepseek": {
        "url": "https://api.deepseek.com/v1/chat/completions",
        "key_env": "DEEPSEEK_API_KEY",
    },
    "kimi": {
        "url": "https://api.moonshot.ai/v1/chat/completions",
        "key_env": "MOONSHOT_API_KEY",
    },
    "nim": {
        "url": "https://integrate.api.nvidia.com/v1/chat/completions",
        "key_env": "NVIDIA_NIM_API_KEY",
    },
}

# Individual model variants, each tied to a provider above. This is the set
# of values you pass as the first CLI argument.
MODEL_VARIANTS = {
    "deepseek-flash": {"provider": "deepseek", "model": "deepseek-v4-flash"},
    "deepseek-pro":   {"provider": "deepseek", "model": "deepseek-v4-pro"},
    "kimi-2.7":       {"provider": "kimi",     "model": "kimi-k2.7-code"},
    "kimi-k3":        {"provider": "kimi",     "model": "kimi-k3"},
    "nim-nano":       {"provider": "nim",      "model": "nvidia/nemotron-3-nano-30b-a3b"},
    "nim-super":      {"provider": "nim",      "model": "nvidia/nemotron-3-super-120b-a12b"},
}

# If the requested model fails (rate limit, capacity, network error), try
# these model variants next, in order. Cheapest/free options fall back to
# paid, reliable ones; each family also falls back to its own sibling first.
FALLBACK_CHAIN = {
    "nim-nano":       ["nim-super", "deepseek-flash", "kimi-2.7"],
    "nim-super":      ["nim-nano", "deepseek-flash", "kimi-2.7"],
    "deepseek-flash": ["deepseek-pro", "kimi-2.7"],
    "deepseek-pro":   ["deepseek-flash", "kimi-2.7"],
    "kimi-2.7":       ["kimi-k3", "deepseek-flash"],
    "kimi-k3":        ["kimi-2.7", "deepseek-flash"],
}

# HTTP status codes worth retrying on rather than failing outright
# (rate limit / capacity / transient server errors).
RETRYABLE_STATUS_CODES = {429, 500, 502, 503, 504}

# Retry behaviour for the PRIMARY (requested/cheapest) model only. Each call
# always starts on the requested model from scratch — there is no
# "stickiness" to a fallback across calls, so the next task automatically
# tries the cheapest model again, exactly as intended.
PRIMARY_MAX_RETRIES = 10
PRIMARY_RETRY_DELAY_SECONDS = 30


class ProviderUnavailable(Exception):
    """Raised when a model call fails in a way that's worth trying a fallback for."""


class ProviderMisconfigured(Exception):
    """Raised when a model's provider has no API key set — also worth falling back on."""


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Delegate a subtask to a cheaper model (bypasses Claude Code's own billing entirely)."
    )
    parser.add_argument(
        "model",
        choices=sorted(MODEL_VARIANTS.keys()),
        help="Which model to call, e.g. deepseek-flash, deepseek-pro, kimi-2.7, kimi-k3, nim-nano, nim-super",
    )
    prompt_group = parser.add_mutually_exclusive_group(required=True)
    prompt_group.add_argument(
        "prompt",
        nargs="?",
        help='Prompt text directly, or "-" to read from stdin',
    )
    prompt_group.add_argument(
        "--prompt-file",
        help="Path to a file containing the prompt",
    )
    parser.add_argument("--system", default=None, help="Optional system prompt to prepend")
    parser.add_argument("--max-tokens", type=int, default=4096, help="Max output tokens (default: 4096)")
    parser.add_argument(
        "--temperature", type=float, default=0.3,
        help="Sampling temperature (default: 0.3 — steadier output for structured/data tasks)",
    )
    parser.add_argument("--timeout", type=int, default=120, help="Request timeout in seconds (default: 120)")
    return parser


def resolve_prompt(args: argparse.Namespace) -> str:
    if args.prompt_file:
        with open(args.prompt_file, "r", encoding="utf-8") as f:
            return f.read()
    if args.prompt == "-":
        return sys.stdin.read()
    return args.prompt


def call_model(variant_name: str, prompt: str, system: str | None,
                max_tokens: int, temperature: float, timeout: int) -> str:
    variant = MODEL_VARIANTS[variant_name]
    provider = PROVIDER_ENDPOINTS[variant["provider"]]

    api_key = os.environ.get(provider["key_env"])
    if not api_key:
        raise ProviderMisconfigured(
            f"{provider['key_env']} is not set for model '{variant_name}'"
        )

    messages = []
    if system:
        messages.append({"role": "system", "content": system})
    messages.append({"role": "user", "content": prompt})

    payload = {
        "model": variant["model"],
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": temperature,
    }

    try:
        response = requests.post(
            provider["url"],
            headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
            json=payload,
            timeout=timeout,
        )
    except requests.exceptions.RequestException as exc:
        raise ProviderUnavailable(f"request for '{variant_name}' failed: {exc}")

    if response.status_code in RETRYABLE_STATUS_CODES:
        raise ProviderUnavailable(f"'{variant_name}' returned HTTP {response.status_code}: {response.text}")
    if response.status_code != 200:
        raise SystemExit(f"Error: '{variant_name}' returned HTTP {response.status_code}\n{response.text}")

    data = response.json()
    try:
        choice = data["choices"][0]
        content = choice["message"]["content"]
    except (KeyError, IndexError):
        raise SystemExit(f"Error: unexpected response shape from '{variant_name}': {data}")

    # Reasoning models spend max_tokens on internal thinking before emitting
    # anything, so a call can return truncated or completely empty content while
    # still being a 200 with a well-formed body. Carry the metadata that
    # distinguishes those cases back to main() instead of discarding it.
    usage = data.get("usage") or {}
    details = usage.get("completion_tokens_details") or {}
    return {
        "content": content or "",
        "finish_reason": choice.get("finish_reason"),
        "model": variant_name,
        "completion_tokens": usage.get("completion_tokens"),
        "reasoning_tokens": details.get("reasoning_tokens"),
    }


def call_with_fallback(variant_name: str, prompt: str, system: str | None,
                        max_tokens: int, temperature: float, timeout: int) -> str:
    fallbacks = FALLBACK_CHAIN.get(variant_name, [])
    last_error = None

    for attempt in range(1, PRIMARY_MAX_RETRIES + 1):
        try:
            return call_model(variant_name, prompt, system, max_tokens, temperature, timeout)
        except ProviderMisconfigured as exc:
            print(f"[delegate.py: '{variant_name}' misconfigured — {exc} — skipping retries]", file=sys.stderr)
            last_error = exc
            break
        except ProviderUnavailable as exc:
            last_error = exc
            if attempt < PRIMARY_MAX_RETRIES:
                print(
                    f"[delegate.py: '{variant_name}' attempt {attempt}/{PRIMARY_MAX_RETRIES} "
                    f"failed — {exc} — retrying in {PRIMARY_RETRY_DELAY_SECONDS}s]",
                    file=sys.stderr,
                )
                time.sleep(PRIMARY_RETRY_DELAY_SECONDS)
            else:
                print(
                    f"[delegate.py: '{variant_name}' failed after {PRIMARY_MAX_RETRIES} attempts "
                    f"— {exc} — moving to fallback]",
                    file=sys.stderr,
                )

    for name in fallbacks:
        try:
            result = call_model(name, prompt, system, max_tokens, temperature, timeout)
            print(f"[delegate.py: fell back to '{name}' after '{variant_name}' failed]", file=sys.stderr)
            return result
        except (ProviderUnavailable, ProviderMisconfigured) as exc:
            print(f"[delegate.py: fallback '{name}' also unavailable — {exc}]", file=sys.stderr)
            last_error = exc
            continue

    raise SystemExit(
        f"Error: '{variant_name}' failed after {PRIMARY_MAX_RETRIES} retries, and all "
        f"fallbacks {fallbacks} also failed. Last error: {last_error}"
    )


def main() -> None:
    # On Windows, a redirected stdout defaults to the ANSI codepage (cp1252),
    # so printing a model response containing an en-dash, curly quote or
    # non-breaking hyphen dies with UnicodeEncodeError *after* the API call has
    # already been paid for. Force UTF-8 before any output happens.
    for stream in (sys.stdout, sys.stderr):
        try:
            stream.reconfigure(encoding="utf-8")
        except (AttributeError, ValueError):
            pass

    parser = build_parser()
    args = parser.parse_args()
    prompt = resolve_prompt(args)

    if not prompt or not prompt.strip():
        raise SystemExit("Error: empty prompt.")

    result = call_with_fallback(
        variant_name=args.model,
        prompt=prompt,
        system=args.system,
        max_tokens=args.max_tokens,
        temperature=args.temperature,
        timeout=args.timeout,
    )

    content = result["content"]
    if content:
        print(content)

    # A truncated or empty completion is a 200 with a well-formed body, so
    # without this the caller sees exit 0 and a silently unusable file. Both
    # are usually the reasoning-tokens-ate-max_tokens failure: raising
    # --max-tokens can make it WORSE, since more headroom means more thinking.
    spent = result.get("reasoning_tokens")
    budget = (
        f" (reasoning tokens: {spent}, completion tokens: {result.get('completion_tokens')})"
        if spent is not None else
        f" (completion tokens: {result.get('completion_tokens')})"
    )

    if not content.strip():
        print(
            f"[delegate.py: '{result['model']}' returned EMPTY content, "
            f"finish_reason={result['finish_reason']!r}{budget}. Nothing was written. "
            f"Try a lower --max-tokens, or a non-reasoning model.]",
            file=sys.stderr,
        )
        raise SystemExit(3)

    if result["finish_reason"] == "length":
        print(
            f"[delegate.py: '{result['model']}' output was TRUNCATED at the token "
            f"limit{budget}. What was printed is incomplete — do not use it as-is.]",
            file=sys.stderr,
        )
        raise SystemExit(2)


if __name__ == "__main__":
    main()
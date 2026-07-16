---
description: Research and write a knowledge card for one SID player family, then adversarially audit it
argument-hint: <player family name, e.g. DMC or GoatTracker>
---

<task>
Build a knowledge card for the player family: **$1**

If no family was named, read `knowledge/COVERAGE.md` and report the top five
uncarded families by file count, then stop and ask which to do. Do not pick one
yourself — the ranking is a cost signal, not a priority order, and the choice is
the user's.
</task>

<workflow>
1. Delegate to the `sid-card-research` subagent with the family name. It reads the
   local data, researches provenance, writes `knowledge/players/<id>.md`, and
   returns a short report.

2. Relay its report. Do NOT read the card into this context — the whole point of
   the subagent is that the research never enters the main session.

3. Delegate to the `sid-card-falsify` subagent to audit the card it just wrote.

4. Relay the audit verdict.

5. If the audit found REFUTED, UNSUPPORTED, or MISCITED facts, present them and
   ask whether to correct the card. Do not auto-fix — a fact the falsifier
   rejected may need a human judgement call about what the truth actually is.

6. Once the card is settled, remind the user to re-ingest it into the
   `tdz-c64-knowledge` MCP server (`add_document`, tagged `sid-player-kb` plus
   the card's id) — the same way `graph.json` is regenerated after an edit.
</workflow>

<constraints>
Run the two subagents sequentially, not in parallel — the falsifier needs the
card the researcher writes.

Never set `status: verified` on the user's behalf. Verification requires an actual
`sidm2-siddump` / `mcp-c64` trace, which neither subagent performs.

Keep this session's context clean. Both subagents return short reports by design;
do not defeat that by reading the card, the source data, or the research back into
the main thread.
</constraints>

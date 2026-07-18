---
description: Attempt to move one SID player card closer to verified via a real disassemble + reassemble + trace-diff pass
argument-hint: <player card id, e.g. jch-newplayer or rob-hubbard>
---

<task>
Attempt to verify (or move closer to verifying) the player card: **$1**

If no card id was given, ask which card to target rather than picking one
yourself — this is expensive, uncertain-payoff work (see below), so the choice
of target should be deliberate. Good candidates: a card already `in-progress`
with a documented "known gap" in its Verification section (check
`rob-hubbard.md` and `martin-galway.md` for the shape of that), or the next
entry on `docs/SIDM2-INTEGRATION.md`'s KB-driven priority list.
</task>

<workflow>
1. Delegate to the `sid-player-verify` subagent with the card id. It reads
   the card, disassembles a real file, reassembles it, byte-diffs and
   (if warranted) trace-diffs against the original, and updates the card's
   Verification section with the real result.

2. Relay its report. Do NOT read the card or any trace output back into this
   context — the whole point of the subagent is keeping the heavy tool
   output (disassembly text, trace JSON) out of the main session.

3. If the subagent reports a new gotcha or tool quirk it had to work through,
   remind the user it should be appended to
   `.claude/agents/sid-player-verify.md`'s `<lessons_learned>` section (the
   subagent may already have done this itself — check before duplicating).
</workflow>

<constraints>
This is genuinely hard, uncertain-payoff work — three attempts in the session
that built this command (JCH NewPlayer, Martin Galway, Rob Hubbard) reached
98.1%, no-match, and 99.1% byte-exactness respectively, none closing to a full
`verified` in one pass. Set expectations accordingly rather than treating a
partial result as a failure — a precisely-characterized 90%+ match with a
named next lead is the normal, valuable outcome of one pass, not a consolation
prize.

Never claim `verified` was reached unless the subagent's report says so
explicitly with a cited exact-or-near-exact trace match. If the report is
ambiguous, ask rather than rounding up.

Keep this session's context clean — same discipline as `/sid-card`. The
subagent returns a short report by design; do not defeat that by reading the
disassembly, the `.prg` files, or trace output back into the main thread.
</constraints>

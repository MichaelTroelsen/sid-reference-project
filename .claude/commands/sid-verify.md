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

4. If several cards were targeted at once (in parallel), diff each subagent's
   *returned report* against `sid-player-verify.md` afterward — parallel runs
   each read-then-overwrite the whole file, so whichever finishes last wins
   and earlier runs' lessons can be silently lost (this happened the first
   time three cards ran in parallel: one run's discovery had to be re-added
   by hand from its report). Don't assume the file already has everything
   every parallel run found.
</workflow>

<constraints>
This is genuinely hard, uncertain-payoff work, but not hopeless — six attempts
across two sessions (JCH NewPlayer, Martin Galway, Rob Hubbard, then GoatTracker,
Music Assembler, Future Composer) reached results from "no match" up through
one full close: Music Assembler hit an exact register-write match and flipped
to `verified`. Set expectations accordingly rather than treating a partial
result as a failure — a precisely-characterized 90%+ match with a named next
lead is a normal, valuable outcome of one pass, and picking targets with real
public source (a GPL tracker, a composer's own published code) measurably
raises the odds of a full close over blind disassembly of a closed player.

Never claim `verified` was reached unless the subagent's report says so
explicitly with a cited exact-or-near-exact trace match. If the report is
ambiguous, ask rather than rounding up.

Keep this session's context clean — same discipline as `/sid-card`. The
subagent returns a short report by design; do not defeat that by reading the
disassembly, the `.prg` files, or trace output back into the main thread.
</constraints>

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

3. The subagent never edits `.claude/agents/sid-player-verify.md` itself —
   it reports a `new_lesson_learned` value in its output instead (a prose
   "New lesson: ..." line for a single direct run, or a named schema field
   for a `Workflow` batch). If that value isn't `none`/absent, append it
   yourself, in THIS session: read the file, find the current highest
   numbered `<lessons_learned>` entry, and append the new one as `<N+1>` via
   Edit, verbatim (don't paraphrase or shorten it — these are meant to be as
   precise as the existing entries).

4. If several cards were targeted at once (in parallel, e.g. via `Workflow`),
   wait for ALL subagents to finish and collect every one's
   `new_lesson_learned` first, then append them yourself one at a time, in a
   single deterministic order (e.g. the order the targets were listed) —
   never let a subagent write to the shared file directly. This is what
   removes the old race entirely: since only this session ever edits
   `<lessons_learned>`, there is nothing for parallel runs to overwrite. (The
   race used to happen because each subagent read-then-overwrote the whole
   file itself — see that file's entry 12 for the history.)
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

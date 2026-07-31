<original_task>
Session opened with `ls tools`, then "can we run tools/delegate on a batch".
No batch was specified, so the work was a chain of narrowing asks:

  "can we run tools/delegate on a batch" -> "uncarded" -> "do the per stub
  card" -> "yes make delegate work on batch 29 and main thread sub task the
  blocking task" -> "only run 1 retrodebugger session at the time. make this
  a rule." [mid-turn] -> "how can we follow the progress of delegate.py?" ->
  "the harness should notify on each exit" -> "yes" [add finish_reason
  detection] -> "refresh whats-next.md" -> "update docs. push and commmit.
  make delegate work on batch 30 and main thread sub task the blocking task"
  -> "for now just run the blockers that can only be fixed by model opus" ->
  "yes. keep fixing the blockers" -> "commit and push. what next" -> "do
  defmon" [mid-turn] -> "update what-next as subtask. what should we work
  on".

The through-line: put `tools/delegate.py` to real work on a batch. The first
two targets turned out not to exist. Batches 29-32 then ran against the
`/sid-verify` blocker backlog, and the delegation experiment produced two
genuine bug fixes in delegate.py plus a clear verdict on its usefulness.
Session ran on Opus throughout.
</original_task>

<work_completed>
## Six batches, six PRs, all merged and CI-green

**PR #191 — batch29: `4753-softcopy` in-progress -> verified (183 -> 184).**
The card had been written off by a prior full pass as structurally
unverifiable, because `sidm2-sid-trace.exe` refused it with "self-installing
IRQ vector never resolved after 2000000 steps". That is a property of the
*tracer*, not the file. `scripts/dev/vsid-trace.js` (VICE `vsid`, no vector
handshake) traced it first try. Evidence re-verified on the main thread
before accepting the flip: native reassembly 0 bytes different (tautological,
excluded), relocation control 20 bytes different, own 600-frame trace-diff
151,939 writes per side, 0 divergences including cycle. Three card facts were
wrong and were corrected, incl. the volume LUT (`$03c0-$03c3`, not `$03bc`),
checked against raw file bytes.

**PR #192 — batch30: `reflextracker` unblocked.** Highest-usage in-progress
card (131 files, 21 composers). SIDdecompiler hangs on every file. RetroDebugger
disassembled it first try. Confirmed `$C006` as the real entry, confirmed the
`$D7` ZP busy-poll that the card had recorded as an *unverified* hex-level
read, and found evidence against the card's interrupt-driven alternative
(`$DD0D <- #$7F` masks CIA2 interrupts OFF before the timer starts). Status
deliberately unchanged.

**PR #193 — batch31: the whole SIDdecompiler-hang class.** `defmon`,
`assassin-sample-mixer`, `c64-speech-system` all disassembled first try. The
shared symptom has **two unrelated causes**: (1) self-modified immediate
operands (`defmon` init at `$14FE` explicitly zeroes seven operand slots
inside its own play routine); (2) an init that never returns
(`c64-speech-system`'s `$1210` is `JSR $0A00 / JMP $1210`, correct by design
for an RSID with `play=$0000`, so hanging is the *right* tool behaviour).
Notably, `defmon`'s live disassembly independently confirmed every fact a
prior pass had derived by hand-reading payload bytes without a disassembler.

**PR #194 — batch32: `4753-softcopy`'s three undisassembled outliers.**
Resolved a question the card had carried, correctly unasserted, across several
passes. All three are the same player. The two `$080d` outliers use the same
`$033B,X` copy destination and the same `$038F`/`$039F`/`$03A5` operands, just
172 bytes copied instead of 160. The cross-composer `James_Brown_Is_Dead.sid`
(Denis Knitter/'Bad') genuinely reuses the routine, relocated a flat `+$600` —
`$033C`->`$093C`, `$039F`->`$099F`, `$03A5`->`$09A5`, `$03C5`->`$09C5`,
`$03BA`->`$09BA`, SID-clear loop byte-identical.

**PR #195 — batch33: tracing half opened for all four unblocked cards.**
Batches 30-31 opened their *disassembly* half; this opens the *tracing* half.
All four trace first try with `vsid-trace.js`, including `c64-speech-system`
whose never-returning init defeats `sidm2-sid-trace.exe` outright — lesson 92
confirmed on a second, independent player. The substantive result:
`c64-speech-system`'s `Cocaine.sid` produced **62,893 writes over 300 frames,
every one to `$D418`**, with the histogram taking exactly four evenly-spaced
values (`$00` 13.3%, `$05` 17.9%, `$0A` 54.0%, `$0F` 14.9%) — a 2-bit sample
across the 4-bit volume range, recovered by observation. That card's "2-bit
digitizer, 4 samples/byte" had come only from a third-party `STRUCTURE.md`.
Profiles for the rest: `reflextracker` 26,514 writes / ~133 per frame / all 25
registers; `assassin-sample-mixer` 20,450 / ~102 / 20 of 25; `defmon` 4,828 /
~24 / all 25. No status moved — single-sided observations of the originals.

**PR #196 — batch34: byte-exact disassembly of `defmon`; it uses undocumented
opcodes.** No status change. Added `scripts/dev/dis6502.js`, a static
recursive-descent 6502 disassembler emitting 64tass source plus a `.map.json`
of instruction starts — written because `SIDdecompiler.exe` hangs on
self-modifying players and a static pass has no dynamic trace state to
diverge. Seeded from defmon's entry points `$1000`/`$1003`/`$1006`: 1,562 code
bytes (32.9% of the 4,741-byte payload), 3,179 data bytes, 86 labels; 64tass
reassembles to 4,741 bytes at `$1000-$2284`, 0 diffs, 100.000000%.
**That 100% figure is not evidence.** Everything not classified as code is
emitted as `.byte`, so a run that misidentified *all* code as data would also
report 100.000000% — it tests self-consistency, not the code/data split.
The split was validated independently against the addresses `retro_code_map`
reports as actually executed (79 addresses, from one init call plus two play
calls), and that found a real defect: defMON executes the **undocumented
opcode `$CB` (AXS/SBX)** at `$14C3` and `$154A`. Without `$CB` in the opcode
table the walker stopped dead there and silently classified everything
downstream as data — 8 of 79 executed addresses landed in `.byte` runs —
while the byte-diff still read 100.000000%. After adding undocumented opcodes
all 79 are covered and classification rose 1,410 -> 1,562 bytes. Undocumented
opcodes are *decoded* by the walker (so control flow continues) but *emitted*
as raw `.byte` with the decode in a comment, because 64tass rejects several
mnemonic spellings (`ALR #$7f`) outright. All four previously-blocked players
reassemble byte-exact from the tool, but **only defmon's split is validated**:
`defmon` 1,562 bytes/32.9%, `reflextracker` 1,289/3.4%,
`assassin-sample-mixer` 387/0.8%, `c64-speech-system` 471/0.9%. The sub-5%
figures are consistent with sample-heavy payloads *and* with having missed
copied routines or computed jumps — indistinguishable from the byte-diff — so
no claim is made for the other three. `dis6502.js` is documented in
`scripts/dev/README.md`.

## Straight-to-master commits

- **`148c667`** — `docs/SID-HISTORY.md` said "55 edges across 19 clusters";
  real figures 53 and 18. Also made `build-graph.js` print the cluster count:
  the prose points readers at that command for the live figure, but it only
  ever printed nodes and edges, so half the pointer was unusable and the
  cluster figure rotted unchecked. This is `DOC-AUDIT.md` recommendation #3's
  surface — still not closed (figures remain hand-written prose), but both
  numbers a reader is told to verify are now actually printed.
- **`4d65715`, `2a08d22`** — two delegate.py fixes, see below.

## The RetroDebugger singleton rule, written down

User asked mid-turn to make it a rule. It existed in the `sid-player-verify`
agent definition and in session memory but not in `CLAUDE.md`. Added there —
the checked-in file every session and subagent reads. Three places now agree.
Also corrected the memory's blocked-card list (`blackbird` had reached
`verified` without RetroDebugger).

## `tools/delegate.py` — three bugs found by actually using it

1. **UTF-8 stdout** (in #191). On Windows a redirected stdout defaults to
   cp1252, so `print(result)` died with `UnicodeEncodeError` on a U+2011 —
   *after* the API call was paid for, leaving an empty file.
2. **Truncated/empty completions exited 0** (`4d65715`). It read
   `choices[0].message.content` and ignored `finish_reason`. Now exits **2**
   on truncation (partial output still printed) and **3** on empty, with a
   stderr line naming model, finish reason and the reasoning/completion token
   split. Paid for itself immediately: batch31's failure reported
   `reasoning tokens: 3000, completion tokens: 3000` instead of a silent
   empty file.
3. **Non-retryable 429s were retried 10x** (`2a08d22`). A quota/billing 429
   ("account suspended, insufficient balance") can never succeed, but cost
   `10 x 30s` = 4.5 minutes before the fallback chain was tried. Now
   fast-fails to fallback via the existing ProviderMisconfigured path.
   Verified live: 1s instead of 4.5 minutes. Also fixed the final error
   message, which hardcoded "failed after 10 retries" and so lied whenever
   retries were skipped.

## Lessons 92-98 appended to `.claude/agents/sid-player-verify.md`

All written by me, never by a subagent, per the standing rule. 92: the
tracer's error message is a tool property misreported as a file property.
93: the `-r` trap fires on copy destinations *below* the load address, and a
self-copying routine gives a free correctness check. 94: a SIDdecompiler hang
is not a dead end — RetroDebugger disassembles the same file, and
RetroDebugger is main-thread only. 95: one hang symptom, two causes, and the
diagnostic that separates them. 96: self-modified operand addresses make
excellent relocation fingerprints. 97: trace the original early as cheap
triage — the register profile alone characterises a player, and the value
histogram recovers a digi routine's sample bit depth. 98: a 100% byte-exact
reassembly proves nothing about a code/data split when unclassified bytes are
emitted as `.byte`; validate the split against actually-executed addresses,
decode undocumented opcodes even if you don't emit them, and treat a low code
percentage as a warning rather than a result.

## Two dead ends, both real findings

**Uncarded backlog is empty** — `coverage.js` reports 100.0% carded, one
leftover unidentifiable digi tag (`?Unknown_Digi_3`, 1 file). **All 283 stubs
are already research-complete** — checked the whole set; none is in the
"facts gathered, prose missing" state that drafting helps. Every stub is
blocked on disassembly or on facts that do not publicly exist. Do not retry
either without new external data.
</work_completed>

<work_remaining>
Nothing is blocked or half-finished. `master` is clean at `53436aa`, CI green.

1. **`defmon` relocation control — the single highest-value next task.** It is
   the only path to moving the verified count (184 -> 185) and every tool now
   exists. Relocate defmon by a deliberately non-page-aligned delta, reassemble
   with 64tass, and require a cycle-identical `$D400-$D418` match against the
   original via `scripts/dev/vsid-trace.js`. This is the batch29 methodology
   that produced the session's only `verified` flip. Succeeding also validates
   `dis6502.js` end-to-end, which is what would justify trusting it on the
   other three.
2. **Same treatment for the remaining three unblocked cards** —
   `reflextracker` (131 files, the biggest prize), then `c64-speech-system`
   (24) and `assassin-sample-mixer` (14). Each needs its code/data split
   validated against executed addresses first, since only defmon's is.
3. **Extend `4753-softcopy`'s verified scope from 32/34 to all 35 files.**
   Batch32 established structural identity for the three outliers but
   deliberately did not extend `verified`, which requires a register-write
   match. The reconstruct-and-trace path is now unblocked and the relocation
   delta (`+$600`) is known, so this is bounded, well-specified work.
4. **Generate `SID-HISTORY.md`'s narrative statistics** (`DOC-AUDIT.md` rec
   #3, still open — the only unguarded doc surface left). Prose figures with no
   generator behind them; they drifted again this session (batch: 55/19 ->
   53/18). Either a `--check` script diffing prose against `graph.json`, or a
   generated block following `gen-sidm2-worklist.js`'s
   `<!-- BEGIN/END GENERATED -->` convention.
5. **TDZ (`tdz-c64-knowledge` MCP) sync drift** — carried over, still not
   investigated. Now also stale for batches 29-32's card edits. Needs the MCP
   connected (`/mcp`) before it can be assessed.
6. **Moonshot billing** (user action). The account is suspended for
   insufficient balance, so `kimi-2.7` and `kimi-k3` are both unavailable —
   see attempted_approaches, this matters because kimi-2.7 was the only model
   that produced usable delegated output all session.
</work_remaining>

<attempted_approaches>
- **Delegating uncarded-player research, then stub-card prose** — the
  session's first two targets. Both abandoned before spending anything, for
  the reasons in work_completed. Padding factless cards would violate
  `_template.md`'s explicit "NEVER invent" rule.
- **Delegation for PR bodies: 1 usable result from 7 calls.** nim-nano leaked
  its chain of thought as the answer, then truncated; deepseek-flash truncated
  mid-word at 2000 tokens and returned *entirely empty* at 5000 and 3000
  (reasoning tokens consumed the whole budget); kimi-2.7 produced one clean,
  accurate document first try (batch30) and was then unavailable for batch31
  because of the account suspension. I wrote batch31's and batch32's bodies
  myself. **Verdict: on current evidence delegation does not earn its place
  for document drafting here.** Worth revisiting only once Moonshot billing is
  restored, since kimi-2.7 is the one model that worked.
- **Raising `--max-tokens` to fix truncated delegate output** — actively
  counterproductive. 2000 -> 5000 turned a good-but-truncated document into an
  empty response. If output is truncated, try a *lower* budget or a
  non-reasoning model. Now documented in delegate.py's own stderr message.
- **Dispatching the blocking task to a `sid-player-verify` subagent**
  (batch29) — worked, but only by luck. **Subagents in this project get no MCP
  tools at all**, confirmed directly when the batch29 agent reported having
  none. It succeeded because RetroDebugger turned out not to be needed. From
  batch30 on, all RetroDebugger work ran on the main thread. Recorded in
  lesson 94.
- **Expecting `vsid-trace.js` to unblock the remaining blocked cards the way
  it did batch29** — I wrote this into the previous handoff and it was wrong.
  `reflextracker`, `defmon` and `assassin-sample-mixer` are blocked by the
  *disassembler*, not the tracer; `defmon`'s card even records a successful
  trace run. Check what a card's blocker actually is before assuming a lesson
  transfers.
- **`4753-softcopy`'s "patch the never-returning init to `$60`" workaround** —
  proposed by an earlier pass, never tested, and turned out unnecessary rather
  than wrong: RetroDebugger disassembles all three files as-is. Left on the
  card marked superseded rather than deleted.
</attempted_approaches>

<critical_context>
- **The unblocking recipe, now proven on 7 files across 5 players:**
  `node scripts/dev/sid2prg.js <in.sid> <out.prg>` -> `retro_load` ->
  `retro_disassemble` at the header's init address. Handles the
  `loadAddr === 0` embedded-address case. This routed around every
  SIDdecompiler hang tried this session, first attempt each time.
- **RetroDebugger is main-thread only and a singleton.** Subagents have no MCP
  tools; `delegate.py` has none either. Any card whose next step needs the live
  debugger must be driven by the orchestrating session, one at a time. The rule
  is in `CLAUDE.md`, the agent definition, and memory.
- **`scripts/dev/vsid-trace.js` is the tracer of choice**, not
  `sidm2-sid-trace.exe`. The latter's "self-installing IRQ vector never
  resolved" is a tool limitation phrased as a file property — treat it as
  "switch tracer", never "untraceable".
- **The relocation control is the real verification test.** A byte-identical
  reassembly's trace match is tautological. Relocate by a deliberately
  non-page-aligned delta and require a cycle-identical match.
- **`scripts/dev/dis6502.js` exists and works, but its byte-exact output is
  structural, not evidence.** Unclassified bytes are emitted as `.byte`, so
  100.000000% byte-exactness is reported even when the code/data split is
  badly wrong. Validate any split against the addresses `retro_code_map`
  reports as actually executed before trusting it — that is what exposed the
  missing undocumented opcode `$CB` in defmon.
- **`delegate.py` exit codes are load-bearing**: 0 ok, 2 truncated (partial
  output printed), 3 empty (nothing printed), 1 hard failure. A written output
  file is no longer evidence of success. Per-item background launch gives
  per-exit harness notification — but **never append `; echo "exit=$?"`**, it
  masks the real exit code (happened once this session).
- **`knowledge/graph.json` is gitignored.** Regenerate with
  `node knowledge/build-graph.js`; never `git add -f` it.
- **The pre-commit hook will block on a stale SIDMS worklist** after any status
  flip. `npm run knowledge:worklist` then stage `docs/SIDM2-INTEGRATION.md`.
- **PR cadence is bimodal**: card-status/knowledge work goes branch -> PR ->
  checks -> merge (four times this session, no confirmation prompts per the
  standing memory); docs/tooling goes straight to master.
- **Falsification stays on the main thread.** Batch29's subagent was right on
  every claim I checked — but the checking is what made the flip trustworthy.
- **The `rtk` banner lies.** Every Bash call prints "No hook installed"; the
  hook is installed and working. Do not "fix" it by adding a duplicate entry.
</critical_context>

<current_state>
- **Repo**: `C:\Users\mit\claude\sid-reference-project`, branch `master`, HEAD
  `53436aa` (merge of PR #196), in sync with origin. Working tree **clean** —
  this file is now committed and tracked in git, no longer untracked.
- **Knowledge base**: 520 cards — **184 verified / 53 in-progress / 283 stub**,
  53 edges, 18 connected clusters over 54 linked cards.
  `node scripts/dev/check-cards.js`: 520 cards, 0 failures.
- **Lessons**: highest is now **98** in `.claude/agents/sid-player-verify.md`.
- **New this session and committed**: `scripts/dev/sid2prg.js` and
  `scripts/dev/dis6502.js` (both documented in `scripts/dev/README.md`),
  `knowledge/artifacts/siddecompiler-hang-class.txt`,
  `knowledge/artifacts/reflextracker.txt`,
  `knowledge/artifacts/4753-softcopy-outliers.txt`,
  `knowledge/artifacts/unblocked-trace-profiles.txt`, and this handoff file.
- **PRs merged**: #191, #192, #193, #194, #195, #196 — all CI-green, all
  branches deleted.
- **RetroDebugger**: C64 platform running throughout; used from batch30 on.
- **Provider status**: Moonshot suspended (insufficient balance) — kimi-2.7
  and kimi-k3 both unavailable. DeepSeek returned a transient 503 "service is
  too busy" during testing. nim-nano works.
- **Scratchpad** (gitignored): per-player `.prg` extracts, batch29's traces
  (`verify_orig.json`, `verify_reloc.json`, ~27MB each, safe to delete),
  delegate prompts and outputs under `prompts/`, `out/`, `err/`.
- **No open questions, no pending decisions, nothing half-applied.**
</current_state>

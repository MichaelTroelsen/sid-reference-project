# `scripts/dev/` — developer tools

Ad-hoc tooling for reverse-engineering work. Nothing here is part of
`npm run all`; these are run by hand.

**Two exceptions:** `gen-coverage.js --check` and `gen-sidm2-worklist.js --check`
both run automatically from `.githooks/pre-commit`, which `npm install` installs
via `core.hooksPath` (`npm run hooks:install` to do it manually) — they guard
`knowledge/COVERAGE.md` and the generated table in `docs/SIDM2-INTEGRATION.md`
respectively, both of which have rotted in practice. Each fires only when a
commit stages something it derives from — a card (`knowledge/players/*.md`) or
the generator itself for either check, plus `knowledge/COVERAGE.md` for the
first and `knowledge/sidm2-ports.json`/`docs/SIDM2-INTEGRATION.md` for the
second — and both skip with a notice on a clone that has no fetched
`data/composers/`. Bypass with `git commit --no-verify`. They are hooks rather
than CI steps because `data/composers/*.json` is gitignored, so neither check
can run on a fresh CI checkout at all.

**Two further checks, `check-cards.js` and `check-docs-index.js`, also run from
the hook** — but *before* the `data/composers/` guard, since neither needs
fetched data, so a fresh clone can still catch a malformed card or an
unindexed doc. Both are **also wired into `.github/workflows/ci.yml`** (which
runs `build-graph.js` first, so `check-cards.js` gets its count reconciliation
there too). CI is the real backstop: `--no-verify` bypasses the hook, not CI.

- `find-uncarded-tags.js` — player tags with no knowledge card yet.
- `coverage.js` — file-level carding coverage: what fraction of tagged SID files
  resolve to a knowledge card, and where the remaining mass sits. Its
  uncarded-tag ranking is what drives the carding backlog (several cards exist
  because a tag topped this list). Two caveats the cards themselves already
  record: it keys "carded" off each card's `aliases[]` with no separate
  exclusion mechanism, so a genuine non-tool meta-tag can only be cleared by
  claiming it with a documenting card; and its `[RSID?]`/digi grouping hint is a
  bare filename regex (`/digi|sample|mixer/i`), not a read of any flag or
  routine — never treat it as evidence of sample playback.
- `check-docs-index.js` — keeps `README.md`'s architecture block honest about
  `docs/`, both directions: every `docs/*.md` is mentioned in README, and every
  `docs/...` path README mentions exists. Deliberately checks "mentioned
  anywhere in README" rather than "listed inside the fenced tree" — the tree is
  the right place and the failure message says so, but pinning the check to a
  fenced block would break the build on a harmless reorder, and a gate that
  fails on formatting is one people learn to `--no-verify`. Top-level
  `docs/*.md` only; `docs/legacy/` is excluded as frozen material README
  describes as a directory. Two audits filed the same missing-doc finding before
  this existed.
- `check-cards.js` — three card checks `build-graph.js` deliberately does not do:
  (1) JSON validity of every card's ```json block — `build-graph.js` **silently
  skips** an unparseable card and still exits 0, so a malformed card can sit
  unnoticed (caught for real: a dropped trailing comma in `oliver-kirwa.md`
  showed up only as "nodes: 199" against 200 files); (2) count reconciliation,
  cards on disk vs nodes in the graph, which is what surfaces (1); (3) broken
  prose `[[links]]`, which `build-graph.js` never looks at. Exits non-zero, and
  is wired into both `.githooks/pre-commit` and CI (see above). Measured on a
  deliberately corrupted card: `build-graph.js` prints a warning but **exits 0**,
  reports `nodes: 519` against 520 cards, drops an edge, recounts `verified` as
  153 instead of 154, and lists the broken card's dependents as "next
  candidates" to write — so the failure is survivable-looking in isolation and
  quietly corrupts every derived statistic. That is what this check exists for.
- `find-connections.js` — candidate player<->player connections from
  composer-overlap over `data/composers/*.json` + card `edges[]`. Surfaces
  bridge composers, high-overlap card pairs with no curated edge (with the
  actual shared composers), and the curated lineage clusters. Confirmed pairs
  become prose `[[links]]`, never machine edges — see the script header for the
  discipline that separates real scene cohorts from popular-tool/omnivore noise.
- `find-group-tools.js` — CSDb-group companion to `find-connections.js`. Uses
  scene-group membership (`data/csdb/*.json`) instead of composer overlap to find
  "house tools" (a tool whose usage concentrates in one group). Flags
  author-dominated false positives with ⚠; the script header documents the
  verification rule (rule out author-domination / self-named group before
  believing a finding). Confirmed finds become prose notes, never edges.
- `find-eras.js` — temporal analysis. Reads each carded file's PSID/RSID header
  `released` year from the local HVSC collection (~97% parse) and produces a
  production-by-decade timeline plus a per-tool usage-year-vs-card-release
  validity check. Needs HVSC locally (see the `HVSC` env var in the header). The
  header year is the WORK's year (covers carry the original's date) — the tool
  uses medians, not extremes; read the header caveat before trusting a span.
- `gen-sidm2-worklist.js` — regenerates the joint SIDM2 worklist table inside
  `docs/SIDM2-INTEGRATION.md` (between `<!-- BEGIN/END GENERATED: sidm2-worklist -->`
  markers). `npm run knowledge:worklist`, or `:check` to gate on freshness.
  Derives files/edge-degree/TODO-count/status from local data and joins them with
  `knowledge/sidm2-ports.json` — the **hand-maintained** record of SIDM2's own
  reported port accuracy, which cannot be derived here. Add a newly-ported player
  by editing that JSON and re-running. Exists because the hand-written table it
  replaced rotted completely: it listed six players as "tackle next" after all six
  had reached `verified`.
- `check-tdz-sync.js` — detects drift between `knowledge/players/*.md` and the
  copies ingested into the `tdz-c64-knowledge` MCP server. Takes a saved
  `list_docs` output as its argument (the script has no MCP access; it is a pure
  comparator):

  ```
  node scripts/dev/check-tdz-sync.js <list_docs-output.txt> [--check] [--ids]
  ```

  Re-ingest what it names with TDZ's `update_document` — **never `add_document`
  or `add_documents_bulk`**, which risk a second live copy per card and flatten
  the per-card id tags. Written after an audit found 158 cards whose TDZ copy
  predated their current content by up to two batch rounds, undetected because
  nothing compared the two. Read the script header before trusting or changing
  its logic: it encodes three traps that were hit for real (match on `Card ID`
  not tags; a date difference is not a content difference — 227 date-flagged vs
  158 genuinely changed; and TDZ's copy can legitimately be newer where SIDM2
  authored the card).
- `vsid-trace.js` — VICE-based SID register-write tracer (below).
- `sid2prg.js` — extract a PSID/RSID payload to a `.prg` (below).
- `instrument-map.js` — observed instrument map from a register trace, and a
  cheap falsifier for a card's instrument-table layout (below).

---

## `sid2prg.js` — payload to `.prg`, for loading into a live debugger

```
node scripts/dev/sid2prg.js <in.sid> [out.prg]
```

Prints the header facts as JSON (magic, header load address, real load
address, init, play, payload size, end address) and, when given an output
path, writes `[load_lo, load_hi] + payload` — the plain `.prg` layout
RetroDebugger's `retro_load` expects.

**Why it exists.** `SIDdecompiler.exe` hangs indefinitely on some players, and
four cards in `knowledge/players/` had each recorded that as a terminal
blocker. RetroDebugger disassembles those same files without complaint, but it
loads `.prg`, not `.sid` — so this four-line conversion was the only thing
standing between "blocked" and "disassembled". See
`knowledge/artifacts/siddecompiler-hang-class.txt` and lesson 95 in
`.claude/agents/sid-player-verify.md`.

It honours the `loadAddr === 0` case, where the real load address lives in the
first two little-endian bytes of the payload rather than the header — get that
wrong and everything lands two bytes off with no error.

---

## `vsid-trace.js` — tracing RSID files that the other tracers can't drive

### Why it exists

`sidm2-sid-trace.exe` drives a tune by calling the **PSID-declared play
address** once per frame. RSID files that install their own IRQ declare
`playAddress = $0000` — there is nothing to call, so that tracer honestly
returns `write_count: 0`. `SIDwinder.exe` refuses RSID outright.

`vsid` runs a full emulated C64 with autonomous VIC/CIA interrupt delivery, so
a self-installing-IRQ player is driven by the machine itself. That is the whole
point of this wrapper.

**Validated result:** every previously-blocked tag now traces —
`Music_Processor` (64/64 files, 0 failures), `Cycleburner_Digi`,
`Toaster_Digi`, `Assassin_Sample_Mixer`, `OmegaSupreme_Digi`,
`Faith_Sample_Mixer`, `Zod_Digi`. All are RSID with `play=$0000`, and all
returned 0 writes from `sidm2-sid-trace.exe`.

### Usage

```
node scripts/dev/vsid-trace.js <file.sid> [--frames 50] [--json] [--out <path>]
```

Key options (`--help` for all):

| option | meaning |
| --- | --- |
| `--frames <n>` | frames to trace (default 50 ≈ 1 second) |
| `--song <n>` | subtune (passes vsid's `-tune`) |
| `--json` | machine-readable output |
| `--changed-only` | drop writes that don't change the register — matches `sidm2-sid-trace.exe` semantics |
| `--keep-dump <path>` | keep the raw vsid dump instead of deleting it |
| `--keep-preamble` | retain VICE's own pre-init write (see below) |
| `--cycles-per-frame <n>` | override frame length |
| `--vsid <path>` | path to `vsid.exe` |

`vsid.exe` is looked up at `C:\winvice\bin\vsid.exe`, overridable via the
`VSID` env var or `--vsid`. It is **not on PATH**.

### The underlying vsid invocation

```
vsid.exe -console -sounddev dump -soundarg <out.txt> -limitcycles <N> -pal <file.sid>
```

- `-console` suppresses the GUI.
- `-limitcycles <N>` forces a clean exit after N CPU cycles.
- `-pal` / `-ntsc` pins the sync factor so the cycles→frames maths is right.
  The wrapper picks this from the SID header's clock flag.
- **`vsid` exits with status 1 on a normal `-limitcycles` termination.** The
  exit code says nothing about success — check that the dump file exists.
  (A missing input file exits 127.)
- `-soundarg` accepts an absolute path.

PAL is 19656 cycles/frame (63 × 312); NTSC is 17095 (65 × 263).

## The dump format (reverse-engineered)

There is **no header and no trailer**. The file interleaves two kinds of line.

### 1. Register writes — `<delta_cycles> <reg> <value>`

All three fields are **decimal**.

```
342 24 15
1294 2 0
25 3 8
25 4 64
99584 4 64
```

- **field 1 is a DELTA** — CPU cycles since the *previous* write, not an
  absolute timestamp. Accumulate to get absolute time. (Confirmed: the deltas
  over a `-limitcycles 1000000` run sum to 991,059 — i.e. the whole run, with
  the remainder being the tail after the last write.)
- **field 2 is the register offset from `$D400`** (0–24). `24` = `$D418`.
  Offsets > 24 (2nd/3rd SID) are ignored by this wrapper.
- **field 3 is the byte written** (0–255).

Every write is recorded, **including redundant ones** (writing a register's
current value again). This is a real difference from `sidm2-sid-trace.exe`,
which only records value-*changing* writes — see below.

### 2. Full SID-state snapshots — repeating 7-line blocks

```
FREQ:   0000 0000 0000
PULSE:  0000 0000 0000
CTRL:     00   00   00
ADSR:   0000 0000 0000
FILTER: 0000 RES: 00 MODE/VOL: 0f
ADC: ff ff
OSC3: 00 ENV3: a4
```

These are a periodic rendering of current chip state, **not writes**. They
dominate the file by volume (~15,872 blocks vs 37 writes in one real sample)
and carry no timing the deltas don't already give. The wrapper discards them.

A robust parse rule is "a line is a write iff it matches `^\d+\s+\d+\s+\d+$`" —
snapshot lines always start with a letter.

### VICE's pre-init write

Every dump observed begins with:

```
342 24 15
```

`$D418 = $0F` at cycle 342 — the *identical* cycle across PSID and RSID and
across unrelated players (Hubbard, Galway, Daglish, Music_Processor). That
consistency is what identifies it as VICE's own write rather than any tune's.
Left in, it reads as "this player sets volume to $0F", which is wrong, so the
wrapper strips exactly this one write (`--keep-preamble` retains it).

**It strips nothing else, deliberately.** VICE may emit a few more pre-init
writes (e.g. Commando shows gate-clears `$D404=0 / $D40B=0 / $D412=0` before
its init runs), but those are indistinguishable from a player's own
register-clearing prologue — Wizball and Cobra open their real inits with very
similar-looking descending clears. An earlier "strip everything before the
first big inter-write gap" rule ate the entire 20-write init of every
`Music_Processor` RSID. Under `--changed-only` these extra writes mostly
vanish anyway, since they are `0 → 0` no-ops.

## Cross-check against `sidm2-sid-trace.exe`

On `Hubbard_Rob/Commando.sid` (PSID, which both tools can drive), 50 frames:

| | writes |
| --- | --- |
| `sidm2-sid-trace.exe` | 374 |
| `vsid-trace.js` raw | 532 |
| `vsid-trace.js` `--changed-only` | **374** |

The raw 532 → 374 gap is entirely the redundant-write difference. Modelling the
SID's reset state as `$00` on every register (which is what `sidm2-sid-trace`
does) and dropping VICE's one preamble write, the two tools produce an
**identical `(register, value)` sequence over all 374 writes — zero
divergences.** `REG_NAMES` here matches `sidm2-sid-trace`'s vocabulary exactly
(`filter_freq_lo/hi`, `filter_res_control`, `filter_mode_volume`) so traces can
be diffed without a translation table.

**Cycle timings are not comparable between the two tools** and should not be
diffed. `sidm2-sid-trace` calls play at synthetic frame boundaries; vsid runs a
real machine where the IRQ fires at a raster position, so absolute cycles
differ by roughly a frame. The write *sequence* is the thing that agrees.

### Known definitional difference at the window edge

`sidm2-sid-trace`'s "50 frames" means *init + 50 play calls*. This wrapper's
means *50 frames of emulated time from the tune's first SID write* — and the
machine spends ~1 frame reaching init, so the wrapper captures init + ~49 play
calls. On Commando that shows up as 372 vs 374 under `--changed-only`. It is a
window-boundary artifact, not a disagreement about what the player does. Ask
for a frame or two more if you need an exact-length window.

## Reading the output

`cadence` is a heuristic over how many frames contained writes:

- `per-frame (~50Hz, conventional player)` — ≥90% of frames had writes.
- `sparse (writes only on note/state changes)` — <40%. Normal for primitive
  editors: `Music_Processor` writes only when a note changes (e.g.
  `All_My_Love.sid` gates a note off at frame 14 and on at frame 15, a steady
  15-frame / 0.3s note period). Sparse output here is the player being simple,
  not the trace failing.

Digi players are the opposite extreme — `Hero/Digi_Dreams_01.sid`
(`OmegaSupreme_Digi`) touches **only `$D418`**, ~77 writes/frame, values
tracing a smooth waveform (`03 03 04 05 06 08 08 09 09 09 08 07 06 05 04 03`):
4-bit PCM pushed through the volume register.

Note for scripted use: digi traces are large. `child_process.execFileSync`'s
default 1 MB `maxBuffer` overflows (`ENOBUFS`) on them — raise it or use
`--out`.

---

## `instrument-map.js` — instruments read from the trace, not the disassembly

```
node scripts/dev/instrument-map.js <file.sid> [--card <id>] [--frames 500] [--stdout]
node scripts/dev/instrument-map.js --index        # regenerate the maps index
node scripts/dev/instrument-map.js --self-test    # offset math + onset detection
```

Every other instrument-level fact in this project comes from the player's own
instrument table: bytes located by a disassembly, then argued about. This reads
the other end — what `$D400-$D418` holds on the frame each note begins — and
groups those onsets by **ADSR**.

The technique is borrowed from [h2g](https://github.com/MichaelTroelsen/h2g)'s
`instrmap.py`, and rests on one property: in many players ADSR
(`$D405`/`$D406`) is a verbatim per-instrument copy of the instrument record,
so it identifies an instrument where waveform cannot (several instruments share
one) and pulse cannot (a swept width has no single value). h2g measured that at
"0 of 1635 corpus records differ" — **on one player family**. It is not a
general law, which is why the first thing the tool does is decide whether the
key holds at all:

| verdict | meaning |
|---|---|
| `reliable` | few distinct ADSR values, none modulated mid-note — key holds |
| `degenerate` | ONE value covers every note: stable, but separates nothing |
| `suspect` | usable, but treat instruments seen once or twice as unconfirmed |
| `insufficient-data` | under 30 onsets — includes digi players, which never gate |
| `unusable` | the sample never leaves the hard restart, or ADSR is computed per note / modulated mid-note; **no table is emitted** |

Across a 27-file spread sample (subtune 1, 500 frames): 12 `reliable`, 5
`degenerate`, 3 `suspect`, 7 `insufficient-data`, 0 `unusable`. `unusable` is
rare but real — Stinsen's `Last_Night.sid` (Laxity/JCH NewPlayer) trips it, just
not from that sample.

### Which frame gets sampled

h2g samples onset+1, on the reasoning that the onset frame itself can still hold
the player's transition. That is tuned to one player, and taking it literally
produces confident garbage elsewhere. Laxity/JCH NewPlayer runs a **multi-frame
hard restart** — frequency driven to `$FFFF`, waveform cleared, a restart
envelope written — and on Stinsen's `Last_Night.sid` a fixed onset+1 sampled the
restart on **96 of 96 notes**. The result was four tidy, perfectly stable
"instruments", graded `reliable`, whose ADSR values appear **nowhere in the
payload** — because the player synthesised them.

So the sample frame is the first *settled* frame within 4 of the onset: gate
still on, a real waveform selected, frequency off the `$0000`/`$FFFF` sentinels.
A player with no hard restart settles at +1 and nothing changes (all four
`colin-davies` files still settle at +1, same values, still `confirmed`). A
larger number is that player's restart length, reported in the `sampled at`
column because it is a fact worth having. When more than half the notes never
settle, the file is `unusable` — checked *before* the distinct-value tests,
since a hard restart yields exactly the small tidy value set those tests reward.

`--card <id>` cross-checks against that card's optional
`data_format.instrument_layout` — a machine-readable restatement of the
`instruments` prose:

```json
"instrument_layout": { "base_address": "$9000", "stride": 16, "count": 16,
                       "adsr_offsets": [0, 1], "derived_from": "Bad_Toon.sid" }
```

Every observed ADSR must appear in the declared table; one that does not is a
real falsification of the card. The verdicts:

| verdict | meaning |
|---|---|
| `confirmed` | every observed value found, against a declared table not much bigger than the observed set |
| `confirmed-weakly` | every observed value found, but off too few values or against a table large enough that the match is close to free |
| `layout-wrong` | an observed value appears nowhere in the declared table |
| `out-of-range` | the declared address is outside this file's image — usual for a relocatable player, not a card error |
| `unverifiable` | the card declares no layout |

`confirmed-weakly` exists because one observed value landing somewhere in a
32-record table says nothing at all, and SoundMonitor's `Cool.sid` "confirmed" a
layout that way before the downgrade existed.

Seven cards carry a layout so far:

| card | file(s) | result |
|---|---|---|
| `colin-davies` | 4 files, 3 load addresses | `confirmed` ×3, `confirmed-weakly` ×1 |
| `dmc` | `Great_Tune.sid` | `confirmed` |
| `marco-scheepers` | `Beat_Box_II_tune_1.sid` | `confirmed` (AD/SR reversed, as the prose says) |
| `john-player` | 3 V1.4 files | **`layout-wrong` ×3** — see below |
| `soundmonitor` | `Cool.sid` | `confirmed-weakly` (1 value, 21 onsets) |
| `rockmonitor` | `Pull.sid` | `out-of-range` — `$14AA` is one build's relocated address |
| `laxity-newplayer` | `Be_What_You_Is.sid` | `out-of-range` — relocatable; declared base is from a file not in HVSC |

**The `john-player` result is a real falsification, and the code settles which
half of the card is wrong.** The card puts `SoundTab` at `$1420` with `[0]=AD,
[1]=SR`. Across three independently traced V1.4 files every observed ADSR value
is absent there and present at `+1/+2` of the same stride-11 grid, and the
candidate search independently lands on `$1421`.

Disassembling `Music_Test_2` says which half to blame. `$100F` is
`b9 20 14 8d 05 d4` — `LDA $1420,Y / STA $D405` — and `$1015` is
`b9 21 14 8d 06 d4` — `LDA $1421,Y / STA $D406`, so **`[0]=AD, [1]=SR` is
confirmed by the code** and is not the error. The player reads nine parallel
field bases `$1420-$1428` under one `Y`, and `Y` is not computed: `$1003` is
`LDY $42 / BEQ`, and `$126E` reads `$42` straight out of the pattern stream
(`INY / LDA ($48),Y / BEQ / STA $42`). The pattern byte *is* the `Y` offset, with
`$00` reserved as "no instrument this row" — which forces the stored index to be
`(instr*11)+1`, since `instr*11` would encode instrument 0 as `$00` and make it
unreachable. Record `n`'s AD byte therefore sits at `$1421+11n`, and the search
agrees: `$1421` in the two files that sound record 0, `$142C` in the one that
starts at record 1.

So `$1420` is right as the *assembler label the code indexes from* and wrong as
*the address of record 0*. The prose is misleading rather than false.

Worth dwelling on as a method note: the trace found the discrepancy, but only the
disassembly could say which of two possible errors it was, and only the pattern
decode explained *why* the offset exists. **A register trace localises; it does
not adjudicate.** The card's prose is left as written and the finding recorded in
its `instrument_layout.note` — `sid-card-falsify`'s call, not this tool's.

Where the card declares no layout — or declares one that fails — the tool instead
*proposes* candidates, in both table shapes this repo's cards actually document:

- **row-major**, adjacent `AD`/`SR` bytes at a constant stride (`colin-davies`,
  `dmc`, `john-player`, `marco-scheepers`, …);
- **column-major**, `AD` and `SR` in separate parallel arrays a constant delta
  apart (`stinsen-newplayer`'s `$1808`/`$181C`, `sid-factory-ii-driver-11`'s 6
  columns of 32, `cadaver-musicdriver`'s 6 parallel arrays).

The column-major search exists because the row-major one is blind to all three
of those, and returned nothing at all on the first file that needed it. Its
`width` column — how far apart the matched `AD` bytes sit — is the thing to
judge it by: a real column is tight, and `$00`/`$0F` are common enough to line
up by luck across a whole payload.

**The offset math is printed in every report, and that is not decoration.** When
a PSID header's `loadAddress` field is `$0000` the real load address is the
first two bytes of the data block, and those two bytes are **not** part of the
loaded image. Nearly every HVSC file is this case (0 of 2935 files sampled under
`MUSICIANS/A` used the header form). A probe that failed to skip them read every
instrument record two bytes early, found a coherent-looking layout at `+2` of
each record, and reported a *correct* card as falsified. `--self-test` covers
both branches for that reason.

Output goes to `knowledge/instrument-maps/<card-id>/<file>.md`, committed as
evidence. Generated on demand — never from `npm run all`, since each map costs
one VICE run per subtune.

---

## `dis6502.js` — static recursive-descent disassembler for stuck payloads

```
node scripts/dev/dis6502.js <in.prg> <org-hex> <entry,entry,...> <out.asm>
```

Emits 64tass source plus a `<out>.map.json` recording every instruction-start
and covered address. Pair it with `sid2prg.js` to go from a `.sid` straight to
assemblable source.

**Why it exists.** `SIDdecompiler.exe` hangs on self-modifying players (lesson
95). It is a hybrid static/dynamic tool whose trace state diverges when a
player writes into its own code. A purely static recursive-descent pass has no
such state — it reads whatever bytes are present, which are exactly the bytes
that must be reproduced. All four previously-blocked players reassemble
byte-exact from its output.

**Read this before trusting its output.** A 100% byte-exact reassembly proves
*nothing at all* about whether the code/data split is right, because everything
not classified as code is emitted as `.byte` and round-trips perfectly. A run
that misidentifies all code as data still reports 100.000000%. The split has to
be validated separately — cross-check against addresses RetroDebugger's
`retro_code_map` reports as actually executed. Doing exactly that on `defmon`
found a real defect: the player executes the **undocumented opcode `$CB`**
(AXS/SBX) at `$14C3` and `$154A`, which stopped the walker dead and silently
turned everything downstream into `.byte` while the byte-diff still read 100%.

Undocumented opcodes are therefore decoded by the walker (so control flow
continues) but emitted as raw `.byte` with the decode in a comment, because
64tass rejects several of the mnemonic spellings outright (`ALR #$7f`).

A low code percentage is a warning sign, not a result: sample-heavy players
legitimately sit under 5%, but so does a run that missed code reachable only
through a copied routine or a computed jump.

### `--symbolic` and `rewrap_reloc.js` — building a relocation control

`dis6502.js --symbolic` emits every in-range absolute operand as `ORG + $offset`
and defines `ORG` once at the top, so changing that single line relocates the
whole player. This handles addresses that land *mid-instruction*, which a
label-based scheme cannot name at all — necessary because self-modifying players
write into their own operand bytes.

`rewrap_reloc.js <orig.sid> <reloc.bin> <delta-hex> <out.sid>` wraps the result
back into the original header, shifting the embedded load address and the
header's init/play by the same delta. This is deliberately different from a
same-address rebuild's own header-wrapping step, which preserves the original
load address unchanged — correct there, but wrong for a relocation control:
leaving init pointing at the old address makes the player jump into whatever
now occupies it, failing for a reason unrelated to the disassembly.

**Why bother**: a byte-identical rebuild's trace match is tautological
(lesson 92) and a 100% byte-diff proves nothing about the split (lesson 98). A
*relocated* rebuild that still traces cycle-identically is the real evidence.

**Known limitation, and it matters when a control fails**: only operands of
decoded instructions are rewritten. Absolute addresses stored inside data —
pointer tables, or address bytes loaded as immediates — are not. So a failed
relocation control has two possible causes (wrong code/data split, or
unrelocated address data) and they must be told apart before concluding
anything. On `defmon` the data-side explanations were checked and came back
negative, which points at the split.

# Jason Page Music Editor / Jay's Music Routine

```json
{
  "id": "jason-page-jay",
  "name": "Jason Page Music Editor / Jay's Music Routine",
  "aliases": ["Jason_Page/Jay"],
  "authors": ["Jason Page ('Jay')"],
  "released": "1988 (Newforce / Breakpoint Hacking Techniques)",
  "status": "in-progress",
  "platform": "A THIRD, distinct Jason Page tool — confirmed as a genuinely publicly-released 1988 scene editor ('Jay's Music Routine V1', alt. title 'Jason Page Music Editor'), squarely inside the same window as his already-carded [[jason-page]] original Graftgold-era driver, but released as a standalone product via UK groups Newforce and Breakpoint Hacking Techniques under his 'Jay' alias. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": 43956,

  "memory": { "load_address": "Confirmed across all 3 tagged files' PSID headers: load $c000, init $c9ab, play $c612 (same engine binary, per-file song data). Disassembly-covered range (SIDdecompiler -v2 Start/End, even at -t200000): Automatic.sid $c000-$cec7 (92.4% of its 4096-byte payload); Jays_Editor_2.sid $c000-$cd9a (85.1% of 4095 bytes); Jays_Editor_3.sid $c000-$ce73 (90.4% of 4095 bytes) — see Verification for why the remainder is uncovered and the structural evidence it's genuinely unreferenced, not under-traced.", "zero_page": "TODO (no annotated disassembly pass yet)", "layout": "Not fully annotated, but the pattern-storage architecture is now established (2026-08-07 pass): a small header/song-parameter block at load ($c000-~$c047), a fixed-capacity per-instrument record table starting ~$c06d (16-byte-ish records, only the first N of many reserved slots populated per song, remainder zero-filled), a pair of 256-entry hi/lo pattern-pointer tables (~$c2a8 hi, ~$c3a9 lo — only 6-21 of 256 slots populated per file, the rest zero and confirmed never dereferenced), and the pattern data itself starting ~$cc00, each pattern a variable-length run of note/marker bytes terminated by $ff." },
  "entry": { "init": "Sample trace: $c9ab.", "play": "Sample trace: $c612 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO (not yet localized separately from the per-instrument/pattern tables below)", "patterns": "Pattern data is a variable-length byte stream per pattern, terminated by $ff; interspersed marker/note bytes (observed markers include $c1/$c3/$c5/$c7/$8x/$cb/$d3/$d6/$d7/$db/$cf/$df, note-like values roughly $11-$4a) — full encoding not yet decoded. Reached via a pair of parallel 256-entry hi/lo pointer tables (one byte per possible pattern number, split lo/hi arrays, both fully symbolic in the disassembly — no gotcha-72(b)-style unresolved entries). Only a small subset of the 256 reserved slots is populated per song (6 on Jays_Editor_2, ~14 on Jays_Editor_3, 21 on Automatic); the rest are zero and SIDdecompiler's own trace confirms they're never read.", "instruments": "A fixed-capacity instrument-record table starting ~$c06d, records ~16 bytes each judging by boundary spacing; only the first several slots per file are populated, remainder zero-filled — not yet fully decoded field-by-field.", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a dense 205-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED AS A REAL, PUBLICLY-DISTRIBUTED SCENE TOOL, not just an internal in-game routine: CSDb release id=43956, 'Jay's Music Routine V1' (alt. title 'Jason Page Music Editor'), classified as a C64 Tool, released 1988, credited solely to 'Jay (of Breakpoint Hacking Techniques and Newforce)' for both code and music. The bundled demo tune, `JAYSMUSICROUTINEV1.prg`, is exactly this project's own traced 'Automatic.sid' file — a direct, confirmed match, not an inference.",
    "SIDId INDEPENDENTLY CORROBORATES: `sidid.nfo` lists this exact tag with name 'Jays Music Routine,' author 'Jason Page (Jay),' released 1988, pointing at the same CSDb release id.",
    "THE 'JAY' ALIAS IS ALREADY CONFIRMED ELSEWHERE IN THIS KB, not a new finding: Jason Page's own CSDb scener profile (id=4121, already cited in [[robtracker]]'s card) lists handle 'Jay' and Compunet ID 'JP22' — this CSDb release is additional first-party corroboration of the same alias tied to a specific dated product.",
    "THE 'JAYS_EDITOR_2'/'JAYS_EDITOR_3' FILE NAMES PLAUSIBLY REFLECT LATER VERSIONS of this same editor's engine-test tunes, but NO CSDb release for a V2 or V3 was found — explicitly left UNCONFIRMED whether those version numbers were ever separately distributed, or are just Page's own internal naming for later test tunes.",
    "TIMELINE PLACEMENT IS PLAUSIBLE BUT NOT PROVEN to be the 'spare-time routine' [[jason-page]]'s own card already documents from his Remix64 interview ('at Graftgold... I was also writing my own routine in my spare time') — this 1988 release, squarely inside that card's dated 1988-90 window and packaged for scene distribution under a different alias via different groups (Newforce/Breakpoint Hacking Techniques) than any Graftgold credit, is a strong circumstantial match, but no source directly states the equivalence. Treated as two distinct, possibly-related-but-unproven routines from the same short window, not conflated.",
    "GROUP CONTEXT: CSDb's Newforce group page (id=1819, United Kingdom, active 1987-88, 24 releases) lists 'Jay' as an ex-member (1988, Coder), alongside Asmodis, Bizzmo, Einstein, Greeny, Huddy, and Mr.Foc. A possible-but-unconfirmed connection was checked and left open: Newforce's 'Bizzmo' MAY or MAY NOT be the same 'Bizzmo' already documented in [[nigel-grieve]]'s card (there identified as Doug Roberts/Relax Designs, a one-off reuser of Grieve's driver) — that card explicitly notes no group overlap with Grieve's own circle was found AT THE TIME, but didn't specifically check Newforce; treat as a common-handle coincidence unless independently verified further. Newforce's 'Einstein' member is very likely an unrelated handle collision with the 'Einstein' aliases already documented elsewhere in this KB for other composers/eras — not a real link.",
    "Not confirmed beyond the CSDb/SIDId entries already cited (no separate SIDId author lookup needed — same record). Direct relationship to [[jason-page]] (same composer, plausibly-related third routine) — cross-referenced in that card. No confirmed relationship to [[steve-turner]] or Graftgold specifically for THIS tag (unlike the original jason-page.md tag). No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found beyond the possible Bizzmo coincidence)."
  ],
  "sources": [
    "CSDb release id=43956 ('Jay's Music Routine V1' / 'Jason Page Music Editor'): https://csdb.dk/release/?id=43956",
    "SIDId sidid.nfo (github.com/cadaver/sidid) — 'Jason_Page/Jay' entry, name 'Jays Music Routine', author 'Jason Page (Jay)'",
    "CSDb group id=1819 (Newforce, ex-member roster including Jay): https://csdb.dk/group/?id=1819",
    "CSDb scener id=4121 (Jason Page, handle 'Jay', Compunet 'JP22' — already cited in robtracker.md)",
    "Remix64 — Jason Page interview (already cited in jason-page.md, the 'spare-time routine' quote): https://remix64.com/interviews/interview-jason-page.html",
    "Existing KB cards: knowledge/players/jason-page.md, knowledge/players/robtracker.md, knowledge/players/steve-turner.md, knowledge/players/nigel-grieve.md",
    "Local dataset: 3 files tagged Jason_Page/Jay, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jason_Page/Jay` tag is a THIRD, distinct Jason Page tool —
'Jay's Music Routine'/'Jason Page Music Editor,' a genuinely
publicly-released 1988 scene editor via UK groups Newforce and Breakpoint
Hacking Techniques. Squarely inside the same window as his already-carded
[[jason-page]] original driver, but distributed separately under his
'Jay' alias. Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **direct CSDb
confirmation**: the tag's own traced demo tune matches the exact
distributable file bundled with a dated, named, publicly-released tool,
not an inference from a generic pattern. A plausible but explicitly
unproven link to [[jason-page]]'s own 'spare-time routine' quote is
reported honestly as circumstantial.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Original
disassemblies (via `SIDdecompiler.exe -r`) now exist in scratchpad for
all 3 tagged files (Automatic.sid, Jays_Editor_2.sid, Jays_Editor_3.sid)
— see Verification for byte-diff/trace-diff/structural results. Not yet
used to settle whether this shares any code with [[jason-page]]'s
original driver (no direct comparison attempted).

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Jason_Page/Jay` `.sid` (Automatic, the tool's own
bundled demo tune): load `$c000`, init `$c9ab`, play `$c612`, **205
register writes / 50 frames** (0 filter writes — dense). Internals
undocumented; memory map/format/effects are `TODO`.

**Disassembly + byte-diff + relocation-invariance trace-diff (2026-08-01)
— `status` remains `in-progress`, strong partial result.** Disassembled
two of the three tagged real HVSC files with `SIDdecompiler.exe -a49152
-z -d -c -v2 -r` (all three files share load `$c000` / init `$c9ab` /
play `$c612` — same engine binary, different song data; `-v2`'s own
`Start:` line matches the PSID load address exactly, so gotcha 40 does
not apply here):

- `Automatic.sid` (4096-byte payload): `-v2` map reports `Start: $c000
  End: $cec8` — even at `-t 200000` (vs. the tool's ~30000 default) the
  covered range does not grow, so the trailing 311 bytes (`$cec8-$cfff`,
  7.6% of the file) are genuinely never touched by any trace window the
  tool can run, not an under-tracing artifact (lesson 9's exact
  precedent). The reassembled `.prg` over the **covered** range
  (3785/4096 bytes = 92.4% of the file) is **100.0000% byte-exact**
  against the original payload. The uncovered tail is raw binary (not
  ASCII/PETSCII text, not all-zero padding) — plausibly unused
  pattern/instrument data the demo's own playback path never reaches;
  hex-dumped and confirmed non-trivial (varied byte values), not a
  padding block.
- `Jays_Editor_2.sid` (4095-byte payload): `-v2` map `Start: $c000 End:
  $cd9b` — 3484/4095 bytes covered (85.1%), also **100.0000% byte-exact**
  over the covered range.

Because `-r` (lesson 63) forces the reassembly byte-identical to the
original wherever it's covered, a native-address trace-diff would be
tautological (lesson 69/72) — proves nothing. Ran the real,
non-tautological check instead: rebuilt **each** file's disassembly a
second time at a shifted, non-page-aligned base (`-a53267`, i.e. load
`$c000`+`$1013` = `$d013`; init/play shift the same `+$1013` to
`$d9be`/`$d625`) and confirmed the rebuild genuinely differs from the
native build at the byte level first (`Automatic`: 482/3785 bytes differ
at matching offsets; `Jays_Editor_2`: 468/3484 differ) — i.e. this is a
real structural test, not another tautology. Traced both native and
relocated builds for 60 frames via `sidm2-sid-trace.exe` and diffed
`(frame, register, old_val, new_val)` (cycle column stripped per lesson
70a, since a different base can legitimately shift page-crossing cycle
counts):

- `Automatic.sid`: native 307 writes, relocated 307 writes, **0
  divergences**.
- `Jays_Editor_2.sid`: native 345 writes, relocated 345 writes, **0
  divergences**.

This is a genuinely strong, structurally-verified result — the engine
code that SIDdecompiler's own trace reaches reconstructs 100%
byte-exact and passes a real non-tautological relocation-invariance
control on two independent files with zero register-write divergence.
**Status is not raised to `verified`**, however: full-file byte coverage
is only 92.4% (Automatic) / 85.1% (Jays_Editor_2) — a genuine 7.6%/14.9%
of each file's own bytes were never reconstructed at all (not wrong,
simply absent from the `.asm`/`.prg`), which falls well short of this
project's `verified` precedent (laxity-newplayer ~99.9% full-file). Also
still open: `Jays_Editor_3.sid` (the third tagged file) was not
disassembled this pass; memory map/zero-page/data-format/effects fields
remain `TODO` — this pass established byte/trace fidelity, not an
annotated format description.

**Third file + structural dead-tail analysis (2026-08-07) — `status`
still `in-progress`, coverage gap now well-characterized but not fully
closed.** RetroDebugger was not available this pass (this run's tool set
carried no `mcp__retrodebugger__*` tools at all — consistent with prior
passes' finding, see lesson 101, that a solo-dispatched subagent can lack
them even when a parent session has the MCP server connected). Pursued
the two alternatives the dispatch brief suggested instead:

1. **Disassembled the third tagged file, `Jays_Editor_3.sid`**, with the
   identical recipe (`-a49152 -z -d -c -v2 -r -t200000`). `-v2` map:
   `Start: $c000 End: $ce74` (3701/4095 bytes = 90.4% coverage, same
   shape as the other two). Reassembly is **100.0000% byte-exact** over
   the covered range (0 diffs / 3701 bytes), and the file assembles with
   zero 64tass warnings. Ran the same non-tautological
   relocation-invariance control as the other two files (rebuild at
   `-a53267`, i.e. `+$1013`; init/play shift to `$d9be`/`$d625`) —
   confirmed genuinely non-tautological first (464/3701 bytes differ
   between native and relocated builds at matching offsets), then traced
   both 60 frames via `sidm2-sid-trace.exe` and diffed
   `(frame, register, old_val, new_val)` with the cycle column stripped:
   native 419 writes, relocated 419 writes, **0 divergences**. All three
   tagged files now carry the identical strong result: 100.0000%
   byte-exact over their covered range, 0-divergence relocation-invariance
   control.

2. **Structural (static) analysis of the uncovered tail, in place of a
   live memory-access trace.** For each of the three files, extracted
   every `<label`/`>label` pointer reference anywhere in the disassembly
   (not just the known pattern table — the whole file) and computed the
   single highest address any of them ever resolves to:
   - `Automatic.sid`: max referenced address `$ce95`, vs. `-v2` End
     `$cec8` — the pattern block at `$ce95` is the LAST populated pattern
     table entry, and it disassembles as a clean, complete, `$ff`-terminated
     pattern record ending right at the End boundary.
   - `Jays_Editor_2.sid`: max referenced address `$cd6b` vs. End `$cd9b`
     — same shape, last pattern block terminates in `$ff` right at End.
   - `Jays_Editor_3.sid`: max referenced address `$ce37` vs. End `$ce74`
     — same shape again.

   In other words: across all three independent files, **every single
   pointer in the entire reconstructed program — not just the pattern
   table, the whole disassembly — stays strictly below the uncovered
   tail**, and the last thing any pointer reaches is always a
   structurally complete, correctly-terminated record. This is on top of
   the previously-recorded finding that `-t 200000` (200,000 play-routine
   calls ≈ 66 minutes of simulated real-time playback, roughly two orders
   of magnitude beyond any plausible loop length for a demo tune this
   size) does not grow the covered range at all.

   The pattern-pointer table itself turned out to be a discoverable,
   citable format fact (previously `TODO`): a pair of parallel 256-entry
   hi/lo pointer arrays (one slot per possible pattern number 0-255),
   of which only 6 (Jays_Editor_2), ~14 (Jays_Editor_3), or 21 (Automatic)
   slots are actually populated per file — the rest are `$00,$00` and
   SIDdecompiler's own `-v2` map confirms they are read zero times. A
   similar fixed-capacity, mostly-zero-filled record table exists for
   instruments starting around `$c06d`. This is consistent with an
   editor's fixed-maximum-capacity save format (reserve slots for up to
   256 patterns/many instruments; a given song only uses a fraction),
   which independently explains why raw byte coverage is naturally well
   under 100% for a small demo tune, structurally distinct from a
   reconstruction defect.

   As one further corroborating (not conclusive) check: the uncovered
   tail's own raw bytes were hex-dumped and searched for `$ff` bytes
   (the pattern format's own terminator). `Automatic.sid`'s 312-byte tail
   contains 12 of them, at gaps of 2-85 bytes — squarely inside the same
   size range as the file's own confirmed, referenced pattern records
   (roughly 6-90 bytes each). This is consistent with the tail being
   **orphaned pattern data in the same encoding**, not random garbage,
   not code, and not simple padding — i.e. plausibly leftover
   editor-buffer content from earlier edits of the demo tune that was
   never repacked out of the file, though this remains an inference from
   byte shape, not a runtime-confirmed fact.

**Where this leaves the card:** the combination of (a) 100.0000%
byte-exact reconstruction over the covered range on all three files, (b)
a genuine, non-tautological 0-divergence relocation-invariance control on
all three, (c) exhaustive confirmation that no pointer anywhere in the
disassembled program ever addresses the uncovered tail, and (d) a
200,000-call/~66-minute trace budget that never grows coverage, is about
as strong a case as static analysis can build that the tail is inert,
structurally-unreachable leftover data rather than a reconstruction
defect. It is still **not** the same class of evidence as a live,
runtime-observed confirmation, and full-file byte coverage (85.1-92.4%
depending on file) remains well short of this project's `verified`
precedent (~99.9% full-file, e.g. `laxity-newplayer`). Per this agent's
own constraints, that gap is reported honestly rather than closed by
redefining the denominator — `status` stays `in-progress`.

**Next lead, if picked up again:** the one thing this pass could not do
is a live memory-access trace. If RetroDebugger becomes available in a
future solo session (not a parallel batch — see the singleton constraint),
a warp-speed run of tens of thousands of frames with a read/write
breakpoint on each file's own uncovered tail range would be the
conclusive version of the structural argument already built here. Absent
that, the structural case above is unlikely to be strengthened further by
more static analysis — the natural next increment (fully decoding the
pattern-record and instrument-record byte formats) would fill in
`data_format`'s remaining TODOs but would not by itself change the
coverage percentage or move the status.

## Sources

See the `sources` array — CSDb (2 entries), SIDId's sidid.nfo, Remix64,
and 4 related KB cards.

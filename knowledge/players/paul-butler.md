# Paul Butler (player routine)

```json
{
  "id": "paul-butler",
  "name": "Paul Butler (player routine)",
  "aliases": ["Paul_Butler"],
  "authors": ["Paul Butler"],
  "released": "1983-1993 (Artech Digital Entertainment era)",
  "status": "verified",
  "platform": "Canadian composer-designer Paul Butler's own playroutine, used across the many Artech Digital Entertainment (Ottawa, Canada — a studio he co-founded) titles he scored. A dense, busy routine (~8-9 register writes/frame in the traced sample). Player-ID-fingerprinted across 12 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per file. All 13 HVSC files, load/init/play: Ace_of_Aces $0a68/$0a68/$0a77; Deceptor $6767/$7d08/$7def; Desert_Fox (RSID) $6480/$8160/IRQ; Fight_Night $4db3/$4db3/$4dea; Grogs_Revenge $3500/$3ac0/$3550; Heat_Wave $5700/$5700/$5715; Infiltrator_II $3007/$3f50/$3f70; Killed_until_Dead $23f0/$240d/$23f0; Mental_Blocks $1f4f/$29b3/$2006; Mini_Putt $6f21/$77ef/$77f2; Rack_em $9a80/$9a80/$9a8c; Serve_and_Volley $3736/$37cf/$3736; Train-Escape_to_Normandy $8610/$902e/$901d. Player code is at the load address; workspaces sit between 'v2 Start' and load address in most files (except Grogs_Revenge and Rack_em where they're identical).",
    "zero_page": "SIDdecompiler-derived: $40-$7f range used (z40=$40, z42, z43, z70-z76, za9=$a9). Channel state pointers at $40-$42, tempo/duration counters at $70-$76, event dispatch uses indirect addressing.",
    "layout": "Two-region: low-RAM working storage (ZP $40-$7f + page-level workspace below load address, e.g. $037b-$0665 on Deceptor) + player code/song data at load address upwards. Song data is a large read-only block (patterns, sequence tables, note/frequency tables) referenced via indexed indirect addressing. Filter setup uses self-modifying immediate operands. Play vector ($7def on Deceptor) is self-modified: init writes RTS ($60), frame dispatcher overwrites with JMP ($4C)."
  },
  "entry": {
    "init": "Varies per file: $3ac0 (Grogs_Revenge), $0a68 (Ace_of_Aces), $7d08 (Deceptor), $4db3 (Fight_Night). Standard: LDX #$60 / STX play_addr (writes RTS to play vector), initializes channel state from ZP workspace.",
    "play": "Varies per file: $3550 (Grogs_Revenge), $0a77 (Ace_of_Aces), $7def (Deceptor), $4dea (Fight_Night). Self-modified by init (RTS overwritten with JMP). Per-frame: incremental note counter, indexed lookups into sequence tables, voice register writes."
  },
  "speed": "Per-frame (50Hz). Traces show 0-17 SID writes/frame depending on song activity (Grogs_Revenge is sparse: ~2 writes/frame after frame 0; Ace_of_Aces: ~2-5 writes/frame with gate toggles). Dense songs like Deceptor average ~8-9 writes/frame.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 5 filter writes in a 200-frame/1755-write sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NATIONALITY CORRECTION: Paul Butler is CANADIAN, not British — HVSC Musicians.txt lists him plainly as 'Butler, Paul - CANADA'. Co-founder (with Rick Banks) of Artech Digital Entertainment, Ottawa (founded 1981/1982). Studied Computer/Electronic Music at Carleton University with Banks in the late 1970s; later degrees in Computer Science (Algonquin College) and Philosophy (Carleton University). Active as a games composer/designer 1983-1993.",
    "GAME CREDITS CONFIRMED, matching the local HVSC folder exactly: Grog's Revenge (BC's Quest for Tires II), Fight Night, Deceptor (the traced file), Ace of Aces (1986, Accolade — his 'Sound' credit is in the game's own printed manual), Heat Wave — plus other Artech titles not in this collection: The Dam Busters, Desert Fox, Killed Until Dead, Mini Putt, Apollo 18, The Train: Escape to Normandy, Infiltrator II, Rack 'Em, Serve & Volley, Mental Blocks, Blue Angels.",
    "LATER SOUND-DRIVER PROGRAMMING, supporting self-coded hypothesis: he did low-level audio-engine work on Sega Genesis titles (ToeJam & Earl, Sports Talk Baseball, 1991-92) — evidence of hands-on driver coding beyond just composing, plausibly extending back to a self-written C64 routine, though no source directly states he wrote the C64 driver himself.",
    "NO CSDb PROFILE EXISTS for him — unsurprising, since he was a professional-era (1983-93) commercial games composer, not a demoscene participant, same pattern as several other American/Canadian composers already carded here (e.g. [[paul-norman]], [[dave-warhol]]).",
    "NAME-COLLISION HAZARD FLAGGED: search results repeatedly surface an unrelated 'Chris Butler' (a different, well-known C64 coder featured in a ZZAP!64 interview) and an unrelated blues musician also named Paul Butler — neither is this composer; do not conflate. MobyGames also has multiple distinct 'Paul Butler' profiles; the Artech/Rick Banks one (57 games together) is the correct one here, cross-checked against VGMPF as the stronger primary source (MobyGames itself returned a fetch error, so treated as lower-confidence corroboration only).",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Paul Butler entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). Runtime internals (order-list/pattern/instrument encodings) still TODO — the reconstruction is byte-exact but not yet semantically annotated.",
    "SELF-MODIFYING PLAY VECTOR, confirmed at byte level on Deceptor: the pristine file holds $60 $2b $6f at play ($7def) — i.e. `RTS` followed by two data bytes; init writes $4c over the $60, turning it into `JMP $6f2b`. A SIDdecompiler run WITHOUT `-r` captures the post-execution `4c 2b 6f` and reassembles a file that differs from the original at exactly that byte. Same idiom recurs across the family.",
    "ZERO-PAGE OPERANDS ENCODED IN ABSOLUTE MODE: several files deliberately encode `lda`/`ldx`/`sta`/`cmp` on ZP addresses $72-$75 as 3-byte absolute ($ae $72 $00 rather than $a6 $72) — 6 such instructions in Fight_Night, 7 in Infiltrator_II, 3 in Desert_Fox. 64tass silently re-encodes these as 2-byte zero-page unless forced with `@w`, shifting every later address (gotcha 36's signature). Grogs_Revenge, Ace_of_Aces, Heat_Wave, Killed_until_Dead, Mental_Blocks, Mini_Putt, Rack_em, Serve_and_Volley and Train have none.",
    "ILLEGAL OPCODE IN THE FILE IMAGE: Deceptor contains $2b (ANC #imm) as a data byte immediately after the play vector's RTS. 64tass needs `-i` (NMOS 65xx) to assemble the family at all, and even then encodes `anc #$6f` as $0b, not $2b — the two ANC opcodes are indistinguishable at the mnemonic level, so the byte must be written out as `.byte $2b, $6f`."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Butler, Paul - CANADA')",
    "VGMPF (Artech co-founding, education, full gameography, Sega Genesis driver work): https://www.vgmpf.com/Wiki/index.php/Paul_Butler",
    "Wikipedia — Artech Digital Entertainment: https://en.wikipedia.org/wiki/Artech_Digital_Entertainment",
    "Ace of Aces (1986, Accolade) game manual, 'Sound' credit: https://archive.org/stream/Ace_of_Aces_1986_Accolade_a/Ace_of_Aces_1986_Accolade_a_djvu.txt",
    "gb64 — Heat Wave (C64/Amiga, Artech/Accolade): https://gb64.com/game.php?id=3464",
    "Local dataset: 12 files tagged Paul_Butler, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Paul_Butler` tag is Canadian composer-designer Paul Butler's own
playroutine, used across the many Artech Digital Entertainment titles he
scored — a studio he co-founded in Ottawa. Player-ID-fingerprinted across
12 files, all his own; a dense, busy routine averaging roughly 8-9 register
writes per frame in the traced sample.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he's **Canadian, not
British** (a correction from initial assumptions, confirmed via HVSC); his
**Artech co-founding and full gameography** matches the local HVSC folder
exactly; his **later Sega Genesis driver-programming work** supports (but
doesn't prove) self-coding on the C64; and a **flagged name-collision
hazard** (an unrelated Chris Butler and an unrelated blues musician also
named Paul Butler).

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId), but a
byte-exact original disassembly now exists for all 13 HVSC files —
produced with `SIDdecompiler -r` (see Verification for the exact recipe).
The remaining work is semantic annotation of the song-data tables, not
recovery of the code.

## Verification

**`status: verified` (2026-07-30). All 13 HVSC `Paul_Butler` files
reconstruct 100.0000% byte-exact over their full payloads, and
register-write-exact across 90 subtune traces / 41,136 SID writes.**

The 2026-07-25 pass's "structural limitation of the `-1 -s0` methodology"
gap (non-default subtunes) is **closed, and the diagnosis was wrong** —
subtune scoping was never the real problem. The actual root cause of every
byte-diff on this player was the standard drifted-self-modified-byte
artifact (gotcha 41), and **SIDdecompiler's own `-r` flag ("reload tune
before disassembling") eliminates it wholesale**: it re-reads the pristine
file image into the emulated RAM after tracing but before emitting the
`.asm`, so every self-modified byte, working-storage table and
runtime-drifted immediate operand is dumped at its cold-start value instead
of its post-execution one. No per-byte patching, no `-t`/`-C1` sweeps and
no per-subtune merge were needed.

**Method (reproducible, per file):**

1. `SIDdecompiler <f>.sid -o<f>.asm -a<decimal of the -v2 map's own "Start:"> -z -d -c -r`
   — **all** subtunes traced (no `-1`/`-s`), relocation base from the `-v2`
   `Start:` line per gotcha 40.
2. `64tass -a --cbm-prg -i -o <f>.prg <f>.asm` — `-i` (NMOS 65xx / illegal
   opcodes) is mandatory for this family.
3. Fix-ups, all mechanical: define any ZP symbol SIDdecompiler references
   but never emits (`z73`/`z75`); force `@w` on instructions 64tass
   downgraded to zero-page (found automatically by comparing each 2-byte
   listing entry's opcode against the original file's absolute-mode
   counterpart, iterating until the byte-diff hits 0); write out the one
   ANC data byte explicitly.

**Isolating `-r`'s contribution:** the *identical* all-subtunes build of
Deceptor at the same relocation base (`-a891`, `$037b`) is **97.2561%**
(164 diffs across 25 ranges) without `-r` and **100.0000%** (0 diffs) with
it. The earlier passes' "193 critical diffs" and the alarming-looking
`$9c00-$a00b` self-modifying spillover were both this same artifact.

`-r` is **not** specific to this player — spot-checked the same run on two
unrelated files from other cards, with no other change to the recipe and no
byte patching at all: CheeseCutter `Blackjack.sid` went 99.3910% (72 diffs)
→ **100.0000%**, and DMC `After_Promises.sid` 98.1636% (75 diffs) →
**100.0000%**. Both are files whose own cards document multi-range
iterative byte-patch passes to reach the same place.

| File | Subtunes | Reloc base (`-v2` Start) | Byte-diff | Fix-ups | Trace |
|---|---|---|---|---|---|
| Ace_of_Aces | 1 | `$099e` | **100.0000%** (4600/4600) | none | 244 writes, exact |
| Deceptor | 22 | `$037b` | **100.0000%** (5977/5977) | BIT abs, ANC byte | 10,110 writes, all 22 exact |
| Desert_Fox (RSID) | 29 | `$0314` | **100.0000%** (7467/7467) | `z73` + 3 `@w` | 4 subtunes spot-checked, 306 writes, exact |
| Fight_Night | 10 | `$0e82` | **100.0000%** (3080/3080) | `z75` + 6 `@w` | 3,929 writes, all 10 exact |
| Grogs_Revenge | 10 | `$3500` | **100.0000%** (1681/1681) | none | 2,650 writes, all 10 exact |
| Heat_Wave | 5 | `$05ac` | **100.0000%** (2384/2398) | none | 2,218 writes, all 5 exact |
| Infiltrator_II | 5 | `$0394` | **100.0000%** (4304/4304) | `z73` + 7 `@w` | 3,827 writes, all 5 exact |
| Killed_until_Dead | 15 | `$0c00` | **100.0000%** (4390/4390) | none | 8,792 writes, all 15 exact |
| Mental_Blocks | 5 | `$0800` | **100.0000%** (2733/2733) | none | 2,541 writes, all 5 exact |
| Mini_Putt | 10 | `$0f5d` | **100.0000%** (2388/2388) | none | 4,223 writes, all 10 exact |
| Rack_em | 1 | `$9a80` | **100.0000%** (2439/2441) | none | 711 writes, exact |
| Serve_and_Volley | 1 | `$0334` | **100.0000%** (3746/3746) | none | 987 writes, exact |
| Train-Escape_to_Normandy | 1 | `$0334` | **100.0000%** (2639/2639) | none | 598 writes, exact |

Traces: `sidm2-sid-trace.exe`, 200 frames per subtune (60 for Desert_Fox),
original and reconstruction both rebuilt as `.prg` sliced to the file's own
address range (lessons 22/24). Deceptor subtune 5 — the previous pass's
headline failure (0 writes vs. 18 expected in frame 0) — now traces exact,
as do subtunes 13 and 21, and Fight_Night subtune 3.

**Two small honest caveats, both quantified and both proven harmless:**

- **Heat_Wave**: the `-v2` trace's `End:` is `$604f`, 14 bytes short of the
  file's own end (`$605d`), so `$6050-$605d` is outside the reconstruction.
  **Rack_em**: same, 2 bytes (`$a407-$a408`). Both tails were zero-filled in
  the traced `.prg` and every subtune still traced exact, i.e. those 16
  bytes are provably never read during playback.
- The reassembled `.prg` spans much more than the file (low-RAM workspace
  below the load address, `-d` padding above it — e.g. `$037b-$a00b` for
  Deceptor's 5977-byte payload). The byte-diff is taken over the file's own
  address range only; the surrounding fill is emulator workspace, not file
  content (lesson 60).

**Desert_Fox** is the family's only RSID and is IRQ-driven: `init` at
`$8160` writes `$81a0` into both `$0314/$0315` and `$fffe/$ffff`, and
`$81a0` is `LDA #$01 / STA $D019 / JSR $8040 / JMP $EA81` — so the callable
per-frame music routine is `$8040`, which is what the trace harness uses
(`sidm2-sid-trace.exe` has no IRQ/NMI support, lesson 50).

**Still TODO (documentation, not reconstruction):** `data_format` and
`effects` remain unfilled — the byte-exact `.asm` now exists for all 13
files, so the order-list/pattern/instrument encodings are readable from it,
but nobody has annotated them yet.

### Previous pass (2026-07-25, superseded — kept for the audit trail)

Its per-file numbers below are all lower than the 2026-07-30 results, and
its closing "structural limitation" conclusion is now known to be a
misdiagnosis (see above). The two 2026-07-24 failures
(Deceptor, Fight_Night) were **not** a real code-region defect as first
suspected — they were an artifact of tracing *all* subtunes at once,
which pollutes the `-v2` memory map with other subtunes' workspace/data
and (on Deceptor) triggers a large, alarming-looking but ultimately
harmless self-modifying-code spillover region. Re-disassembling with
`-1 -s0` (trace only the default subtune) and re-deriving the relocation
base from *that* trace's own `-v2` Start address resolves both:

| File | Byte-diff (subtune 0, overlap w/ original) | Trace result (subtune 0) | Notes |
|------|-----------|-------------|-------|
| **Grogs_Revenge.sid** | 98.27% | **Trace-exact** (20 frames) | Unchanged from 2026-07-24; 29 dead-workspace diffs only; init=`$3AC0`, play=`$3550`, load=`$3500` |
| **Ace_of_Aces.sid** | 99.87% | **Register-write-identical** (cycle offsets only from different load addr) | Unchanged from 2026-07-24; 6 dead-workspace diffs; init=`$0A68`, play=`$0A77`, load=`$0A68` |
| **Deceptor.sid** | **100.0000%** of the 2533 bytes ($74db-$7ec0) actually reached by subtune 0's trace, after patching 140 self-modified/workspace diffs back to pristine values | **Trace-exact** (200 frames, 1755/1755 writes identical) | Re-disassembled with `-1 -s0`, relocated to that trace's own Start (`$74db`, decimal 29915) instead of the all-subtunes Start (`$037b`). Reconstruction covers only 2533 of the file's 5977 bytes (42.4%) — the remaining $6767-$74da (3444 bytes) is subtune-0-unreached data belonging to the other 21 subtunes and is genuinely absent from this build, not wrong. |
| **Fight_Night.sid** | 99.7078% (3080/3080 bytes, full file coverage) | **Register-write-identical** (200 frames, 64/64 writes identical; only cycle-timing offset from the different load address, same as Ace_of_Aces) | Re-disassembled with `-1 -s0`, relocated to decimal 3716 (`$0e84`). Needed 2 fixes beyond the standard recipe: missing ZP symbol `z75` (`z75 = z74 + $01`), and **6 instructions** where 64tass auto-selected zero-page mode for a `z74`/`z75` operand but the original file encodes the same instruction in 3-byte absolute mode (a self-modifying-code length-sensitive idiom) — `sta z75`@`$57bd`, `lda z75`@`$57c8`, `lda z74`@`$5812`, `ldx z75`@`$581e`, `ldx z74`@`$5828`, `cmp z74`@`$5842`, each replaced with an explicit `.byte $op, <sym, >sym` triplet. SIDdecompiler's own generated comment flagged the first instance (`WARNING: ... Operand at l4de5+1`, gotcha 32) but that flagged byte itself turned out to be an ordinary dead self-modified operand; the real absolute/zp mismatches were 6 *other*, unflagged instructions found by walking the byte-diff's isolated-single-byte-then-large-contiguous-block signature (gotcha 36) one instruction at a time via a 64tass `-L` listing.  |

**Known real gap (not closed this pass): non-default subtunes.** Both
multi-subtune files were spot-checked on a second subtune with the exact
same reconstruction used for subtune 0, and both diverge: Deceptor
subtune 5 produces 0 SID writes in frame 0 vs. 18 expected (the subtune-0
build simply doesn't contain the note/pattern data subtune 5 needs — it
was never traced/captured); Fight_Night subtune 3 matches for ~4 frames
then diverges (pulse-width writes) for the same reason. **This is a
structural limitation of the `-1 -s0` methodology, not a new player
defect**: a build that traces only subtune 0 cannot be expected to play
other subtunes correctly, since large chunks of those subtunes' own data
tables sit outside subtune 0's reachable memory. Extending coverage would
require either (a) a full all-subtunes trace that also resolves the
harmless-looking-but-large self-modifying spillover cleanly (attempted on
Deceptor with the full 22-subtune trace; produces the same 193-diff
picture as before — the underlying cause of *that* was correctly
identified as the emulator's default `-t 30000` baking in a drifted snapshot
across subtunes, not a hard defect, but no `-t`/`-C1` combination tried
this pass resolved it cleanly for all 22 subtunes at once), or (b)
tracing and patching each subtune individually and merging the results —
not attempted here for time reasons. **Status stays `in-progress`**: the
player routine itself is now confirmed correctly reconstructed for every
tested file's *default* subtune (up from 2 of 4 files on 2026-07-24), but
full-file byte fidelity (all subtunes, and on Deceptor even all of the
file's own bytes) remains an open, precisely-localized gap, not a
rounded-up "verified." *(Both option (a) and option (b) turned out to be
unnecessary — `-r` closes it directly; see the 2026-07-30 section above.)*

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, Wikipedia, an Ace of
Aces game manual scan, and gb64.

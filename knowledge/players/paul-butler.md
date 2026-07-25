# Paul Butler (player routine)

```json
{
  "id": "paul-butler",
  "name": "Paul Butler (player routine)",
  "aliases": ["Paul_Butler"],
  "authors": ["Paul Butler"],
  "released": "1983-1993 (Artech Digital Entertainment era)",
  "status": "in-progress",
  "platform": "Canadian composer-designer Paul Butler's own playroutine, used across the many Artech Digital Entertainment (Ottawa, Canada — a studio he co-founded) titles he scored. A dense, busy routine (~8-9 register writes/frame in the traced sample). Player-ID-fingerprinted across 12 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per file — Grogs_Revenge: $3500 (init $3ac0, play $3550); Ace_of_Aces: $0a68 (init $0a68, play $0a77); Deceptor: $6767 (init $7d08, play $7def); Fight_Night: $4db3 (init $4db3, play $4dea). Player code is at the load address; workspaces sit between 'v2 Start' and load address in most files (except Grogs_Revenge where they're identical).",
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
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
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

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Paul_Butler`-tagged `.sid` +
trace.

## Verification

**SIDdecompiler disassembly + trace-diff across 4 files (2026-07-24, updated 2026-07-25) — `status: in-progress`.**

All 4 tested files now trace-match (or register-write-match) **for their
default/start subtune (subtune 0)**. The two 2026-07-24 failures
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
picture as before — the underlying cause of *that* is now understood to
be the emulator's default `-t 30000` baking in a runtime-drifted snapshot
across subtunes, not a hard defect, but no `-t`/`-C1` combination tried
this pass resolved it cleanly for all 22 subtunes at once), or (b)
tracing and patching each subtune individually and merging the results —
not attempted here for time reasons. **Status stays `in-progress`**: the
player routine itself is now confirmed correctly reconstructed for every
tested file's *default* subtune (up from 2 of 4 files on 2026-07-24), but
full-file byte fidelity (all subtunes, and on Deceptor even all of the
file's own bytes) remains an open, precisely-localized gap, not a
rounded-up "verified."

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, Wikipedia, an Ace of
Aces game manual scan, and gb64.

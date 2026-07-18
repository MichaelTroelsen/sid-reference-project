# SID-Wizard

```json
{
  "id": "sidwizard",
  "name": "SID-Wizard",
  "aliases": ["SidWizard", "Hermit/SidWizard_V1.x", "SID-Wizard", "SWM", "SWP", "(SidWizard_2SID)"],
  "authors": ["Mihály Horváth (Hermit) / Hermit Software"],
  "released": "2012",
  "status": "stub",
  "platform": "Native C64 tracker/editor + its own relocatable/exported 6502 replay (open source)",
  "csdb_release": 255544,

  "memory": {
    "load_address": "Relocatable / exported (SWP export carries the music-data base in X/Y at init). TODO: no fixed absolute map documented in fetched source excerpts.",
    "zero_page": "Base `PLAYERZP` (2 pointer locations); the routine SAVES/RESTORES those 2 ZP locations so it can overlap other code. TODO: the concrete address of PLAYERZP.",
    "layout": "SWM module: 64-byte fixed tune header, then Sequences (orderlist), Patterns, Instruments. Per-instrument wave/pulse/filter program tables begin at instrument offset $10. TODO: absolute table addresses (relocatable)."
  },
  "entry": {
    "init": "`inisub` (jump-table entry) — tune/subtune number in A; for the SWP exported format, X/Y carry the music-data base address.",
    "play": "`playsub` — per-frame play. Also `mulpsub` (multispeed call), `volusub` (set volume), `SFXsub` (init SFX on channel 3). All via a fixed PLAYER_JUMPTABLE."
  },
  "speed": "1x-8x framespeed (multispeed) via `mulpsub`; frame-speed field `FSPEEDPOS`. Tick 0 = read pattern row, tick 1 = advance sequence, tick 2+ = continuous effects; `SPDCNT` handles frame timing.",

  "data_format": {
    "order_list": "Sequences: orderlist with delimiters $FE (end) / $FF (loop). Up to 32 subtunes.",
    "patterns": "Row-indexed; packed NOP compression in the $70-$77 range. Up to 128 patterns.",
    "instruments": "Up to 37 instruments. 16-byte base: control byte (hard-restart type, vibrato type), HR-ADSR, ADSR, vibrato freq/amp/delay, arpeggio/chord speed, octave transpose, relative pointers to PW-table / filter-table / gate-off pointers, first-frame waveform. Program tables start at offset $10.",
    "wavetable": "Per-instrument wave program starting at offset $10, own position counter (WFTPOS), control bytes $FE (jump) / $FF (terminate).",
    "pulsetable": "Per-instrument PW program, position counter PWTPOS, same $FE/$FF control bytes.",
    "filtertable": "Per-instrument filter program, position counter FLTPOSI, same $FE/$FF control bytes."
  },
  "effects": {
    "encoding": "Hardwired effect-value ranges (notes $00-$5F below them). Anchors confirmed from source: VIBRATOFX=$60, PORTAMFX=$78, GATEONFX=$7D, GATEOFFX=$7E; sync/ring, filter, legato/volume effects in separate ranges; chord/tempo tables use $7E/$7F sentinels. TODO: the full effect-value table (read native/sources/SWM-spec.src).",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Own original engine (Hermit's SWM/SWP format + player.asm), NOT derived from the JCH NewPlayer or Laxity families — a distinct, independently authored tracker/replay.",
    "The play loop iterates channels in a fixed INTERLEAVED order (3,6,9,12 / 2,5,8,11 / 1,4,7,10) via DOTRACK, then COMMONREGS writes shared filter/volume — worth knowing if diffing its register-write order against other players.",
    "Flexible per-instrument 'SID-table' program approach: wave/pulse/filter each run as an independent program with its own position counter and $FE jump / $FF terminate control bytes.",
    "The replay saves/restores its 2 ZP pointer locations, so it deliberately overlaps other code's ZP usage.",
    "LICENSE CONFLICT to resolve before treating source as reusable: forks' README say WTFPL-style 'do what you want'; SourceForge metadata says Public Domain. Confirm from the tree's own LICENSE file.",
    "Long-lived and actively maintained (v1.0 2012 -> v1.7 2021 -> v1.93 2025); the anarkiwi fork (Vessel) tracks a 1.97 line. Hermit also authored related tools (3SID, FlexSID, 1RasterTracker) that tag separately."
  ],
  "sources": [
    "Source tree (player.asm, SWM-spec.src, README/license): https://github.com/anarkiwi/sid-wizard (full-tree mirror); canonical http://hermit.sidrip.com and github.com/hermitsoft/ (exact repo name TODO — direct path 404'd during research)",
    "SID-Wizard 1.4 User Manual (PDF): https://www.c64.cz/data2/download/x11/113614/SID-Wizard-1.4-UserManual.pdf",
    "CSDb release + author: https://csdb.dk/release/?id=255544 , https://csdb.dk/scener/?id=18806",
    "sidid:Hermit/SidWizard_V1.x (author Mihály Horváth (Hermit); v1.0 2012, CSDb release 110942)",
    "Local dataset: 988 files tagged Hermit/SidWizard_V1.x (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

SID-Wizard is a native C64 SID tracker/editor by Mihály Horváth (Hermit),
open source from its first 2012 release and still maintained. It uses its own
engine — the SWM module format and a jump-table-driven 6502 replay
(`native/sources/include/player.asm`) — rather than any JCH/Laxity lineage.
It's a notable modern player (988 tagged files) known for its flexible
per-instrument "SID-table" programs (independent wave/pulse/filter programs
with their own position counters and jump/terminate control bytes).

## Quirks & gotchas

See the `quirks` array. The load-bearing ones: **it's its own engine** (not
JCH/Laxity-derived); the **interleaved channel order** (3,6,9,12 / 2,5,8,11 /
1,4,7,10) in the play loop, which matters if comparing its register-write
sequence against other players; the **save/restore-ZP** overlap trick; and a
**license conflict** (WTFPL vs Public Domain across sources) to resolve from
the repo's own LICENSE before treating the source as reusable.

## Disassembly notes

Not disassembled/traced here. The engine is documented by its own source:
`native/sources/include/player.asm` (the `PLAYER_JUMPTABLE` entries
`inisub`/`playsub`/`mulpsub`/`volusub`/`SFXsub`, the DOTRACK/COMMONREGS play
loop, tick-phase logic) and `native/sources/SWM-spec.src` (the SWM data
layout and the full effect-value table). Absolute addresses are relocatable
and left `TODO`; the exact effect-value table beyond the confirmed anchors
($60/$78/$7D/$7E) needs a direct read of `SWM-spec.src`.

## Verification

**Not verified locally — `status: stub`.** Facts come from the public source
tree (`player.asm`, `SWM-spec.src`) and the cached SIDId entry, not a local
assemble/trace pass. Because the source is public, it's a candidate for
promotion via a `sidm2-siddump` verification pass. Left `TODO`: exact license
text, absolute memory map, the `PLAYERZP` address, the full effect-value
table, and the exact `hermitsoft` repo name.

## Sources

See the `sources` array — primary is the SID-Wizard source tree
(`player.asm` + `SWM-spec.src`) and the 1.4 user manual, corroborated by the
cached SIDId entry (`Hermit/SidWizard_V1.x`, Mihály Horváth / Hermit, 2012).

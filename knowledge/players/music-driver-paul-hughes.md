# Music Driver (Paul Hughes / Ocean Software)

```json
{
  "id": "music-driver-paul-hughes",
  "name": "Music Driver",
  "aliases": ["MusDriver/Paul_Hughes", "Paul_Hughes"],
  "authors": ["Paul Hughes"],
  "released": "1987-1988 (Ocean Software in-house; earliest confirmed use Daley Thompson's Olympic Challenge, C64, 1988; developed after Martin Galway left Ocean, c. 1986-87)",
  "status": "in-progress",
  "platform": "Native C64 sound driver, hand-written 6502 assembly, developed in-house at Ocean Software (with an Imagine Software credit on at least one game) — not a standalone GUI editor/tracker. Composers wrote note/pattern data as assembler tables alongside the driver and assembled the two together per game.",
  "csdb_release": null,

  "memory": {
    "load_address": "$4000 (16384 decimal) in the published Daley Thompson's Olympic Challenge source (`ORG $4000`); matches the author's own site instruction to run it via `SYS 16384`. Per-game load address may differ (this is one game's build).",
    "zero_page": "$20-$3A (`ZP EQU $20` through `SY EQU ZP+26`). Per source comment: 'All zero page usage for speed, although only the PC's require ZP.' Holds IA/IX/IY (IRQ A/X/Y save), PC.A/PC.B/PC.C (16-bit program counters, one per voice), READ_A/READ_B/READ_C (indirect data pointers, one per voice), FROM, FRM ('USED BY TESTER'), TO, TO2, SA/SX/SY.",
    "layout": "Driver code and song/tune data are assembled together as one block (`DRIVER.START`/`DRIVER.END`, `DATA.START`/`DATA.END`, sized against an `ALLOCATION EQU 5*1024+512`-byte budget). A `TUNETABLE` holds per-tune start addresses for up to `NUM_OF_TUNES` (6 in the DT88 build) tunes, indexed by tune number."
  },
  "entry": {
    "init": "`START` (`SEI` first instruction), placed immediately after `ORG $4000` in the published source — i.e. $4000 in this build. `TUNE` is a second entry point that resets driver variables and loads voice program counters from `TUNETABLE` for a tune selected via `LDX #tune_number` / `JSR TUNE`.",
    "play": "`REFRESH` — called once per raster interrupt from the game's IRQ handler (`JSR REFRESH` every frame, per the source's own header comment). Exact address not extracted (would require assembling the source; not done here)."
  },
  "speed": "Single-speed: REFRESH is called once per raster interrupt (video frame rate). Duration/tempo is table-driven via note-length constants (`TEMPO EQU 5`, `SQ`/`QV`/`CR`/`MN` = semiquaver/quaver/crotchet/minim as multiples of TEMPO) rather than a multispeed CIA scheme.",

  "data_format": {
    "order_list": "TODO: not extracted beyond the per-tune `TUNETABLE` (tune-select table); per-voice sequence/pattern layout not read from source.",
    "patterns": "Music data is a byte stream per voice read via PC.A/PC.B/PC.C and indirect pointers READ_A/READ_B/READ_C. Documented control bytes: REST EQU 94, JUMP EQU $80, CALL EQU $81, VIBON EQU $88, ARPON EQU $8A, PATCH EQU $86, BARS EQU $44 ('bars to skip'), BARLENGTH EQU 96 ('beats per bar'). Full opcode table not transcribed here.",
    "instruments": "TODO: referred to as 'PATCH' in the control-byte table; instrument/patch table layout not read.",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: VIBON/ARPON/PATCH/JUMP/CALL are named control-byte constants in the published source; their operand layout and full effect set are not transcribed here.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "PUBLIC SOURCE, but NOT open-source: the author himself hosts the 6502 assembly source for at least two builds (`DT88MusicSrc_dasm.asm` — Daley Thompson's Olympic Challenge '88 driver+data, ported to DASM syntax by Hughes in 2004; `LoadingMusic.asm` — driver + Ocean Loader V5 music data) on pauliehughes.com's downloads page. Both carry an explicit 1988 copyright notice ('(c) Copyright Ocean Software / Imagine Software / Paul Hughes 1988') with no separate reuse license — treat as public-for-study, not open-source, same caveat as odintracker.md/deflemask.md.",
    "COLLABORATIVE LINEAGE, not a solo tool: Paul Hughes wrote the driver after Martin Galway left Ocean ('I thought it might be a nice idea to write something for the new guys to use'), working first with musician Gari Biasillo to design the format, prioritizing small data size and fast updates. Jonathan Dunn then joined and built extensive post-modulation/drum effects on top of it (Hughes: 'I still call the drum code Dunny Drums'); per a c64.com summary, Dunn and Matthew Cannon 'ran with the code, modifying it to suit their needs... to the point that it really became their own.' This matches the in-dataset composer spread below — not a single personal routine, but not a wide, independently-published tool either.",
    "COMPOSER CONCENTRATION in this project's dataset (37 files across the two related tags, `MusDriver/Paul_Hughes` [36] + bare `Paul_Hughes` [1]): Jonathan Dunn 22, Matthew Cannon 9, Keith Tinman 4, Gary Biasillo 1, Peter Clarke 1. Jonathan Dunn alone accounts for ~59% — consistent with the documented history that Dunn was the one who most extensively developed/reused the driver after Hughes handed it off.",
    "The DT88 source's own credit line names Jonathan Dunn as 'Orchestration' and Paul Hughes as 'programming' for that specific game — direct primary-source confirmation that the driver/composer split matches the SIDId author attribution (Paul Hughes as the driver's technical author, not necessarily every tune's composer).",
    "Matthew Cannon reportedly built an NMI-based drum sub-player used with this driver on at least one title (Run the Gauntlet, per the Remix64 interview) — a plausible source of subtle per-composer variation in .sid files still fingerprinted under the same Player-ID tag.",
    "No CSDb release entry found for 'Music Driver' as a standalone tool — unlike editor/tracker products, this shipped embedded in individual Ocean/Imagine game .sid rips, so csdb_release is null by design, not an oversight."
  ],
  "sources": [
    "sidid:MusDriver/Paul_Hughes (name 'Music Driver', author Paul Hughes; comment points to http://www.pauliehughes.com/page22/page22.html)",
    "sidid:Paul_Hughes (bare tag, author Paul Hughes only — treated here as the same underlying driver, tracked as a separate raw tag in knowledge/COVERAGE.md)",
    "Author's own site, driver history/technical page: http://www.pauliehughes.com/sidmusic.htm",
    "Author's own site, downloads page (source archive listing): http://www.pauliehughes.com/downloads.htm",
    "PUBLISHED SOURCE (primary, used for the memory/entry/speed facts above): http://www.pauliehughes.com/index_htm_files/DT88MusicSrc_dasm.asm (D.Thompson '88 Soundtrack driver+data, 6502 asm, ported to DASM by the author 2004; original 1988)",
    "Remix64 interview with Paul Hughes (development history, Gari Biasillo/Jonathan Dunn/Matthew Cannon/Peter Clarke roles, 'Dunny Drums' quote): https://remix64.com/interviews/an-interview-with-paul-hughes.html",
    "c64.com interview with Paul Hughes: https://www.c64.com/interviews/hughes.html",
    "VGMPF — Paul Hughes biography/credits (Double Take 1987, Repton 3 1987, Daley Thompson's Olympic Challenge 1988): https://www.vgmpf.com/Wiki/index.php/Paul_Hughes",
    "Local dataset: 36 files tagged MusDriver/Paul_Hughes + 1 file tagged bare Paul_Hughes, 5 composers (Jonathan Dunn, Matthew Cannon, Keith Tinman, Gary Biasillo, Peter Clarke) — see knowledge/COVERAGE.md and data/composers/*.json"
  ]
}
```

## Overview

"Music Driver" is the C64 sound driver Paul Hughes wrote in-house at Ocean
Software after Martin Galway left the company (c. 1986-87), intended as a
fresh, fast, compact-data driver "for the new guys to use." It first shows up
confirmed in Ocean/Imagine titles from 1987-1988 (Daley Thompson's Olympic
Challenge is the best-documented, with its source published by the author).
Rather than staying Hughes's own tool, composer Jonathan Dunn (and later
Matthew Cannon) extended it heavily with their own post-modulation and drum
effects until, by contemporary accounts, it "really became their own" — which
matches this project's dataset: of 37 files carrying the `MusDriver/Paul_Hughes`
family of tags, Jonathan Dunn alone accounts for ~59%, with Matthew Cannon,
Keith Tinman, Gary Biasillo, and Peter Clarke making up the rest. It is
included here because — unusually for an in-house 1980s game driver — the
author has personally published 6502 assembly source for at least two builds
on his own site, giving real (if partial) grounding for the memory/entry/speed
facts above, short of full disassembly.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) **public source,
not open-source** — the author's own site hosts working 6502 source
(`DT88MusicSrc_dasm.asm`, `LoadingMusic.asm`) but under an explicit 1988
Ocean/Imagine/Hughes copyright notice, not a reuse license; and (2) this is a
**collaboratively evolved driver, not a static personal routine** — Hughes
designed the core format, then Jonathan Dunn (and Matthew Cannon) built
substantial new functionality on top of it, which is consistent with Dunn
dominating the composer breakdown in this project's data.

## Disassembly notes

Not disassembled here (per this agent's Tier 1+2 scope) — but the published
`DT88MusicSrc_dasm.asm` is real 6502 assembly source, not a decompile, so the
facts pulled from it (load address `$4000`, ZP range `$20`-`$3A`, `START`/
`TUNE`/`REFRESH` entry labels, single-speed per-raster-IRQ call, and the
REST/JUMP/CALL/VIBON/ARPON/PATCH control-byte constants) are read directly
from source comments/EQUs, not inferred. What's still missing: the exact
`REFRESH`/opcode-handler addresses (would need assembling the source with
DASM), the full pattern-byte opcode table, and the instrument/PATCH table
layout. A future pass could assemble `DT88MusicSrc_dasm.asm` with DASM and
trace it through `sidm2-siddump` against a real `MusDriver/Paul_Hughes`-tagged
`.sid` from the HVSC collection to move this card toward `verified`.

## Verification

**Not verified — `status: in-progress`.** Promoted past `stub` because a
public source (the author's own `DT88MusicSrc_dasm.asm`) plainly documents
real memory-map/entry-point/speed facts (load address, ZP range, `START`/
`TUNE`/`REFRESH` labels, single-speed raster-driven playback), each cited
above. No assembly, execution, or `sidm2-siddump` trace was performed — the
data-format/effects tables and exact runtime addresses remain `TODO`.

## Sources

See the `sources` array — the cached SIDId entries (`MusDriver/Paul_Hughes`
and bare `Paul_Hughes`), the author's own site (history page, downloads page,
and the published `DT88MusicSrc_dasm.asm` source itself), the Remix64 and
c64.com interviews, and VGMPF's Paul Hughes biography/credits page.

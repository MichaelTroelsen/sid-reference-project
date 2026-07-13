# Roland Hermans (Wijnhoven driver)

```json
{
  "id": "roland-hermans",
  "name": "Roland Hermans (Wijnhoven driver)",
  "aliases": ["Roland_Hermans", "NEO"],
  "authors": ["Roland Hermans (driver code)", "Joachim Wijnhoven (music)"],
  "released": "~1990-1991 (Dragon-Fly Soft era)",
  "status": "in-progress",
  "platform": "A custom C64 replay routine coded by Roland Hermans, used exclusively for Joachim Wijnhoven's compositions. Player-ID-fingerprinted across 66 files (all in one composer folder).",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-file. Sample HVSC file traced: load $1000 (init $1000, play $1003).",
    "zero_page": "TODO (no disassembly)",
    "layout": "TODO"
  },
  "entry": {
    "init": "Per-file (sample trace: $1000).",
    "play": "Per-file (sample trace: $1003)."
  },
  "speed": "TODO",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The `Roland_Hermans` tag is a DRIVER, not a composer: it is a custom replay routine CODED by Roland Hermans for the MUSIC of Joachim Wijnhoven. All 66 tagged files sit in one HVSC folder (/MUSICIANS/W/Wijnhoven_Joachim/); many carry author 'Joachim Wijnhoven & R. Hermans' — Wijnhoven composed, Hermans coded. Fits the 'one composer + one coder = personal routine' pattern exactly.",
    "Roland Hermans: Dutch scener (handles NEO/RGJ/Smidas/Einstein), coder + musician, groups Dragon-Fly Soft (1990) / Revive (2012). Best known for authoring PSID64 (2001-2023).",
    "DO NOT conflate with PSID64: that is a SEPARATE public tool by Hermans (a SID→PRG converter embedding a relocatable playback driver; source at github.com/hermansr/psid64). This card's routine is the per-composer Wijnhoven driver, NOT PSID64. Whether they share any code is UNKNOWN — TODO.",
    "Joachim Wijnhoven (b.1971, NL; handles Yogibear/Banana Joachim; later Protovision game composer) — Dragon-Fly Soft games (Forester, Arabian Nights) + later scene work.",
    "Driver internals (memory map, ZP, format, effects, multispeed), signature techniques, and lineage all UNKNOWN — no disassembly of this per-composer routine. TODO."
  ],
  "sources": [
    "CSDb Roland Hermans / Revive (scener 13338 — identity, groups, roles): https://csdb.dk/scener/?id=13338",
    "github.com/hermansr/psid64 — his SEPARATE public driver tool (PSID64), NOT this routine",
    "DeepSID Wijnhoven_Joachim folder (the 66 files): https://deepsid.chordian.net/?file=MUSICIANS/W/Wijnhoven_Joachim/Advanced_Space_Battle.sid",
    "Local dataset: 66 files tagged Roland_Hermans (all Joachim Wijnhoven's music) — see knowledge/COVERAGE.md"
  ]
}
```

## Overview

The `Roland_Hermans` tag is a custom C64 replay **driver** coded by Roland
Hermans (Dutch scener, later the author of PSID64) for the music of **Joachim
Wijnhoven** — Wijnhoven composed, Hermans coded. All 66 tagged files are
Wijnhoven's Dragon-Fly Soft-era tunes.

## Quirks & gotchas

See the `quirks` array — the load-bearing items: **driver ≠ composer** (Hermans
coded, Wijnhoven composed), and **don't conflate with PSID64** (Hermans's
separate public SID→PRG tool). Per-file memory map.

## Disassembly notes

None of this per-composer routine; internals `TODO`. (Hermans's separate PSID64
driver is open source, but that's a different, generic playback driver.)

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC Roland_Hermans `.sid`: load `$1000`, init `$1000`, play
`$1003`, **223 register writes / 50 frames**. Authorship (Hermans-codes /
Wijnhoven-composes) is sourced; all driver internals are `TODO`.

## Sources

See the `sources` array — CSDb scener 13338, the PSID64 repo (as the *separate*
tool), and the DeepSID Wijnhoven folder.

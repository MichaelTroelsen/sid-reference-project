# Stephen Ruddy (Follin driver)

```json
{
  "id": "stephen-ruddy",
  "name": "Stephen Ruddy (Follin driver)",
  "aliases": ["Stephen_Ruddy"],
  "authors": ["Stephen Ruddy (driver code)"],
  "released": "~1989+ (Software Creations era)",
  "status": "in-progress",
  "platform": "A 6502 sound DRIVER coded by Stephen Ruddy, used for the compositions of Tim & Geoff Follin (Ruddy = driver code; Follins = the music data). Player-ID-fingerprinted across 37 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Sample HVSC file traced: load $1000 (init $1000, play $1003).",
    "zero_page": "TODO (no disassembly)",
    "layout": "TODO"
  },
  "entry": {
    "init": "Per-game (sample trace: $1000).",
    "play": "Per-game (sample trace: $1003)."
  },
  "speed": "TODO",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The `Stephen_Ruddy` tag is a DRIVER, not a composer: Ruddy (British audio programmer at Software Creations) WROTE the 6502 sound drivers; Tim & Geoff Follin DESIGNED the driver and arranged the music by typing directly into an assembler ('Mikes Assembler' on Einstein machines). So this tag marks the famous Follin C64 soundtracks — the driver is Ruddy's, the music is Follin's.",
    "In the local data, the 37 files span composers tim-follin, geoff-follin, and deadman — all riding Ruddy's driver.",
    "Ruddy's drivers form a CROSS-PLATFORM family (NES 6502 → Game Boy port; also CPC, ST, C64, Master System, Spectrum). The C64 replay is one member. Independent commercial-games lineage — no relation to Laxity/JCH/scene drivers.",
    "Active ~1989-1999; later co-authored the N64 Sound Tools (folded into the N64 SDK). No CSDb scener/handle (a commercial coder, not a scene member). A c64.com interview exists ('Steve Ruddy').",
    "Driver internals (memory map, ZP, format, effects, multispeed) all UNKNOWN — no published disassembly. SIDId holds only AUTHOR, no technique comment. TODO: disassemble a Stephen_Ruddy SID (e.g. L.E.D. Storm)."
  ],
  "sources": [
    "VGMPF Stephen Ruddy (bio, driver list, platforms): https://www.vgmpf.com/Wiki/index.php/Stephen_Ruddy",
    "c64.com interview (Steve Ruddy): https://www.c64.com/interviews/ruddy.html",
    "Wikipedia Tim Follin (Ruddy-codes / Follin-designs-and-arranges workflow): https://en.wikipedia.org/wiki/Tim_Follin",
    "Local dataset: 37 files tagged Stephen_Ruddy (composers Tim/Geoff Follin, Deadman) — see knowledge/COVERAGE.md"
  ]
}
```

## Overview

The `Stephen_Ruddy` tag is the 6502 sound **driver** coded by Stephen Ruddy
(Software Creations) that carries **Tim & Geoff Follin's** famous C64
soundtracks — Ruddy wrote the replay, the Follins designed it and hand-typed
the music into an assembler. 37 files here (Tim/Geoff Follin, Deadman). Part of
a cross-platform driver family.

## Quirks & gotchas

See the `quirks` array — the load-bearing item is **driver ≠ composer** (this
tag is Ruddy's code behind Follin's music), plus the cross-platform driver
family and its independent commercial-games lineage. Per-game memory map.

## Disassembly notes

None published; internals `TODO`. Disassemble a `Stephen_Ruddy` SID (e.g.
L.E.D. Storm) to recover the layout.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC Stephen_Ruddy `.sid`: load `$1000`, init `$1000`, play
`$1003`, **405 register writes / 50 frames**. The Ruddy-codes/Follin-arranges
workflow is sourced; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — VGMPF, the c64.com Ruddy interview, and Wikipedia's
Tim Follin article.

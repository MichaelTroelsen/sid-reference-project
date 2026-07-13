# Barry Leitch (player routine)

```json
{
  "id": "barry-leitch",
  "name": "Barry Leitch (player routine)",
  "aliases": ["Barry_Leitch", "The Jackal", "Bazza"],
  "authors": ["Barry Leitch (music)", "programmer collaborator / Imagitec Design (driver code)"],
  "released": "~1987+ (custom driver era; Imagitec unified driver from 1988)",
  "status": "in-progress",
  "platform": "A custom C64 in-game driver used for Barry Leitch's music — coded by a programmer friend / Imagitec Design, NOT by Leitch (who couldn't program). Player-ID-fingerprinted across 24 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Sample HVSC file traced: load $0CF0 (init $0CF0, play $0D94).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Imagitec's driver used a UNIFIED cross-format data structure; exact layout not documented."
  },
  "entry": {
    "init": "Per-game (sample trace: $0CF0).",
    "play": "Per-game (sample trace: $0D94)."
  },
  "speed": "TODO",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "RESOLVES this project's Electrosound observation: Barry Leitch (Scottish composer, b.1970; handles The Jackal/Bazza/B.L.A.S.T.) COULD NOT PROGRAM, so early on he used the commercial ELECTROSOUND package (why he was a top Electrosound user). Later 'a programmer friend created a custom driver specifically for him'; at Imagitec (1988) 'we had developed our own music drivers across all formats, sharing a unified data structure.' So the Barry_Leitch tag = that custom/Imagitec routine; his Electrosound-era tunes are a SEPARATE earlier body of work.",
    "The routine was written by a COLLABORATOR / Imagitec, not by Leitch himself. He entered note data (often authored on Amiga trackers) into the driver.",
    "Best-known works (Top Gear SNES, Lotus, Rush) are Amiga/ST/SNES, NOT C64. His C64 credits include Impossamole, Xenophobe, ICUPS, Marauder, Switchblade, Silkworm, Double Dragon, HeroQuest, Space Crusade. (Rainbow Islands/Chaos Engine/Horace are NOT confirmed C64 Leitch credits — TODO.)",
    "REJECTED as unverified: a Grokipedia (AI-generated) claim that his drivers were tuned to 424 Hz (briefly 434 Hz in 1988) and assembled with Turbo Ass — no primary source; not recorded.",
    "Driver internals all UNKNOWN — no published disassembly. TODO."
  ],
  "sources": [
    "Game Developer / c64.com interview (driver origin & Electrosound — primary): https://www.gamedeveloper.com/audio/interviewing-veteran-composer-barry-leitch-part-i-sound-chips-from-zx-81-to-the-snes-",
    "Wikipedia (bio, C64 credits): https://en.wikipedia.org/wiki/Barry_Leitch ; CSDb scener https://csdb.dk/scener/?id=17012",
    "remix64 interview: https://remix64.com/interviews/interview-barry-leitch.html",
    "Local dataset: 24 files tagged Barry_Leitch (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Barry_Leitch` tag is the custom C64 driver used for Scottish composer
Barry Leitch's music — coded by a programmer friend / Imagitec Design (Leitch
couldn't program). It's the sequel to his **Electrosound** era: he used the
commercial Electrosound package early (why he was a top Electrosound user),
then got a custom driver. 24 files here.

## Quirks & gotchas

See the `quirks` array — the load-bearing item **resolves the project's
Electrosound observation** (Leitch used Electrosound early, then a custom
driver), that the routine was **coded by a collaborator/Imagitec** not Leitch,
and a rejected AI-sourced tuning claim.

## Disassembly notes

None published; internals `TODO`. Per-game/Imagitec unified data structure.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC Barry_Leitch `.sid`: load `$0CF0`, init `$0CF0`, play
`$0D94`, **215 register writes / 50 frames**. The Electrosound→custom-driver
history is sourced; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — the Game Developer interview (the Electrosound/driver
account), Wikipedia, CSDb, remix64.

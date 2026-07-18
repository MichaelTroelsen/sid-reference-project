# Martin_Wheeler

```json
{
  "id": "martin-wheeler",
  "name": "Martin_Wheeler",
  "aliases": ["Martin_Wheeler"],
  "authors": ["Martin Wheeler"],
  "released": "TODO: no tool-release date found; locally tagged files ('Action Force', 'Rebel') are 1987-era Virgin Games titles",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house, game-embedded composing routine, not a released standalone editor (unconfirmed)",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "No sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). The tag name matches the composer's own name exactly, a personal-routine naming pattern seen elsewhere in this batch.",
    "100% single-composer concentration: both locally-tagged files ('Action Force', 'Rebel') belong to Martin Wheeler alone (data/composers/martin-wheeler.json). HVSC records him as a 'PRO' composer affiliated with Virgin Games, England, active from 1987.",
    "Consistent with an in-house composing/playback routine embedded directly in his own Virgin Games soundtracks rather than a distributed editor — no CSDb tool/release entry was found."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Martin_Wheeler' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged Martin_Wheeler, both by composer 'Martin Wheeler' — data/composers/martin-wheeler.json; see knowledge/COVERAGE.md",
    "HVSC composer profile: Martin Wheeler, England, affiliation Virgin Games, active 1987 — data/composers/martin-wheeler.json"
  ]
}
```

## Overview

Martin_Wheeler is a SIDId Player-ID tag with no `sidid.nfo` entry of its
own (checked, absent). It matches the name of **Martin Wheeler**, an HVSC
"PRO" composer affiliated with **Virgin Games** (England, active from
1987). Both locally-tagged files ("Action Force", "Rebel") are by him
alone, consistent with an in-house composing routine embedded in his own
game soundtracks rather than a published, titled tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for this
tag; (2) tag name is a direct match to the composer's own name — a
personal-routine pattern; (3) 100% single-composer, 2-file usage.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/martin-wheeler.json` and
`data/sidid.json` (checked, absent). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent) and the local
composer aggregation/HVSC profile for Martin Wheeler.

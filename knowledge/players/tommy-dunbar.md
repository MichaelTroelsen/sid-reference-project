# Tommy_Dunbar

```json
{
  "id": "tommy-dunbar",
  "name": "Tommy_Dunbar",
  "aliases": ["Tommy_Dunbar"],
  "authors": ["Tommy V. Dunbar (Thomas V. Dunbar)"],
  "released": "TODO: no tool-release date found; locally tagged files are Archon (1983) and Archon II: Adept (1984), both Electronic Arts / Free Fall Associates titles",
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
    "No sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). The tag name matches the composer's own name, a personal-routine naming pattern seen elsewhere in this batch.",
    "100% single-composer concentration: both locally-tagged files ('Archon', 'Archon II: Adept') belong to Tommy Dunbar alone (data/composers/tommy-dunbar.json). HVSC records him as a 'PRO' composer, USA, affiliation Electronic Arts, active 1986. Archon (1983) is a well-known Free Fall Associates / EA title co-designed by Dunbar; the SID soundtrack routine here is presumably his own in-game composing/playback code for those two titles specifically.",
    "Consistent with an in-house composing/playback routine embedded directly in the Archon games rather than a distributed editor — no CSDb tool/release entry was found."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Tommy_Dunbar' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged Tommy_Dunbar, both by composer 'Tommy Dunbar' — data/composers/tommy-dunbar.json; see knowledge/COVERAGE.md",
    "HVSC composer profile: Thomas V. Dunbar, USA, affiliation Electronic Arts, active 1986 — data/composers/tommy-dunbar.json"
  ]
}
```

## Overview

Tommy_Dunbar is a SIDId Player-ID tag with no `sidid.nfo` entry of its own
(checked, absent). It matches the name of **Tommy Dunbar** (Thomas V.
Dunbar), an HVSC "PRO" composer affiliated with **Electronic Arts** (USA).
Both locally-tagged files — "Archon" and "Archon II: Adept", the classic
Free Fall Associates / EA titles — are by him alone, consistent with an
in-house composing/playback routine embedded directly in those two games.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for this
tag; (2) tag matches the composer's own name — personal-routine pattern;
(3) 100% single-composer, 2-file usage, both from the same game series
(Archon).

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/tommy-dunbar.json` and
`data/sidid.json` (checked, absent). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent) and the local
composer aggregation/HVSC profile for Tommy Dunbar.

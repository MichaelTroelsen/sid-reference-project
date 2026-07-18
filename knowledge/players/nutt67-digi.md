# Nutt67_Digi

```json
{
  "id": "nutt67-digi",
  "name": "Nutt67_Digi",
  "aliases": ["Nutt67_Digi"],
  "authors": ["Ben Hayes (Nutt'67)"],
  "released": "TODO: no explicit tool-release year in SIDId",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be a personal digi routine embedded in Nutt'67's own tracks (unconfirmed)",
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
    "SIDId's entry for this tag has only an AUTHOR line — no NAME, RELEASED, REFERENCE, or COMMENT (data/sidid.json byTag['Nutt67_Digi']) — no playback-technique claim, so per this project's rule ('digi by name is not evidence') no technique is asserted here.",
    "100% single-composer concentration: both locally-tagged files ('Back to Life', 'Green Onions') belong to composer 'ben-hayes' (David Hayes, handle 'Nutt '67' / Ben Hayes) alone (data/composers/ben-hayes.json).",
    "David Hayes (handles 'Nutt '67', Ben Hayes) is a Welsh scener/composer (data/composers/ben-hayes.json, country Wales, csdb_id 14250); no CSDb tool/release page for a standalone editor under this name was found."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no other fields): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['Nutt67_Digi']",
    "Local dataset: 2 files tagged Nutt67_Digi, both by composer 'ben-hayes' — data/composers/ben-hayes.json; see knowledge/COVERAGE.md rank 92",
    "CSDb scener profile, David Hayes / Nutt '67 / Ben Hayes: https://csdb.dk/scener/?id=14250"
  ]
}
```

## Overview

Nutt67_Digi is a SIDId-fingerprinted digi routine attributed to **Ben Hayes**
(real name David Hayes, originally handled "Nutt '67"), a Welsh composer/
scener. SIDId's record carries only an author line, no technique claim. Both
locally-tagged files belong to him alone, consistent with a personal, never-
packaged routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId's record is author-only (no
technique claim); 100% single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/ben-hayes.json` and SIDId.
`status: stub`.

## Sources

See the `sources` array — SIDId, the local composer aggregation, and CSDb.

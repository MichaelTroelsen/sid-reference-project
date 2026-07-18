# Jer_Digi

```json
{
  "id": "jer-digi",
  "name": "Jer_Digi",
  "aliases": ["Jer_Digi"],
  "authors": ["Jari Tuominen (Jer)"],
  "released": "TODO: no explicit tool-release year in SIDId",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be a personal digi routine embedded in Jer's own tracks (unconfirmed)",
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
    "No SIDId sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). No playback-technique claim from any source; per this project's rule ('digi by name is not evidence') none is asserted here.",
    "100% single-composer concentration: both locally-tagged files ('Dexter', 'Music') belong to composer 'jer' (Jari Tuominen, originally handled 'Jarzenegger') alone (data/composers/jer.json).",
    "Jari Tuominen (Jer) is a Finnish scener/composer (data/composers/jer.json, country Finland, csdb_id 628); no CSDb tool/release page for a standalone editor under this name was found."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Jer_Digi': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged Jer_Digi, both by composer 'jer' — data/composers/jer.json; see knowledge/COVERAGE.md rank 103",
    "CSDb scener profile, Jari Tuominen / Jer: https://csdb.dk/scener/?id=628"
  ]
}
```

## Overview

Jer_Digi is a SIDId Player-ID tag with no upstream SIDId documentation (no
`sidid.nfo` entry at all). Locally it appears in only 2 files, both by the
Finnish composer **Jari Tuominen**, handle **Jer**, consistent with a
personal, never-packaged routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: no SIDId record exists at all; 100%
single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/jer.json` and a confirmed-
absent SIDId check. `status: stub`.

## Sources

See the `sources` array — SIDId (checked, absent), the local composer
aggregation, and CSDb.

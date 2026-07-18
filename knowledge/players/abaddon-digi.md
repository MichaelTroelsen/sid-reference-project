# Abaddon_Digi

```json
{
  "id": "abaddon-digi",
  "name": "Abaddon_Digi",
  "aliases": ["Abaddon_Digi"],
  "authors": ["Timo Taipalus (Abaddon)"],
  "released": "TODO: no explicit tool-release year in SIDId",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be a personal digi routine embedded in Abaddon's own tracks (unconfirmed)",
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
    "SIDId's entry for this tag has only an AUTHOR line — no NAME, RELEASED, REFERENCE, or COMMENT (data/sidid.json byTag['Abaddon_Digi']) — no playback-technique claim of any kind, so per this project's rule ('digi by name is not evidence') no technique is asserted here.",
    "100% single-composer concentration: both locally-tagged files ('Vaakataso', 'Out of Contex' tune 4) belong to composer 'abaddon' (Timo Taipalus) alone (data/composers/abaddon.json) — the strongest available personal-routine signal.",
    "Timo Taipalus (Abaddon) is a Finnish scener/composer (data/composers/abaddon.json, country Finland, csdb_id 292); no CSDb tool/release page for a standalone editor under this name was found."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no other fields): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['Abaddon_Digi']",
    "Local dataset: 2 files tagged Abaddon_Digi, both by composer 'abaddon' — data/composers/abaddon.json; see knowledge/COVERAGE.md rank 90",
    "CSDb scener profile, Timo Taipalus / Abaddon: https://csdb.dk/scener/?id=292"
  ]
}
```

## Overview

Abaddon_Digi is a SIDId-fingerprinted digi routine attributed to **Timo
Taipalus**, handle **Abaddon**, a Finnish composer/scener. SIDId's record for
the tag carries only an author line — no name, release date, reference, or
technique comment. Both locally-tagged files belong to Abaddon himself,
consistent with a personal, never-packaged routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId's record is the thinnest possible
(author-only, no technique claim at all); 100% single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/abaddon.json` and SIDId.
`status: stub`.

## Sources

See the `sources` array — SIDId, the local composer aggregation, and CSDb.

# JITT64_1.x

```json
{
  "id": "jitt64",
  "name": "JITT64_1.x",
  "aliases": ["JITT64_1.x"],
  "authors": ["Stefano Tognon (Ice00)"],
  "released": "2008 Ice Team",
  "status": "stub",
  "platform": "TODO: platform/tool nature not confirmed beyond the SIDId release credit (Ice Team, 2008) — no further documentation found",
  "csdb_release": 74136,

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
    "SIDId's sidid.nfo gives AUTHOR 'Stefano Tognon (Ice00)', RELEASED '2008 Ice Team', and a REFERENCE to CSDb release 74136 — more complete than most tags in this batch, but still no NAME or COMMENT field, so the tool's actual title (if any beyond the tag itself) and playback technique are unconfirmed.",
    "100% single-composer concentration: all 5 locally-tagged files belong to the composer 'Stefano Tognon' himself (handle Ice00, Italy — data/composers/stefano-tognon.json), consistent with a personal routine credited to his own group 'Ice Team' rather than a widely distributed tool.",
    "The '_1.x' version suffix implies an internal versioning scheme; no sibling tags (e.g. 'JITT64_2.x') were found in this project's coverage data."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "SIDId REFERENCE — CSDb release 74136 (Ice Team, 2008): https://csdb.dk/release/?id=74136",
    "Local dataset: 5 files tagged JITT64_1.x, all by composer 'Stefano Tognon' — data/composers/stefano-tognon.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, Stefano Tognon / Ice00 (Italy): https://csdb.dk/scener/?id=8082"
  ]
}
```

## Overview

JITT64_1.x is a SIDId Player-ID tag credited to **Stefano Tognon**, handle
**Ice00**, an Italian scener, released in 2008 under his group **Ice
Team** (SIDId REFERENCE points to CSDb release 74136). It is the
best-documented tag in this batch (author + release year/publisher +
CSDb reference all present), though SIDId gives no title beyond the tag
itself and no comment on the playback technique. Locally it appears in
**5 files, all by Stefano Tognon himself** (data/composers/stefano-tognon.json).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's release/reference fields
are populated (unusually complete for this batch), but NAME/COMMENT are
still absent; (2) 100% single-composer usage points to a personal routine
credited under his own group's banner rather than a distributed tool.

## Disassembly notes

None done here. The CSDb release page (74136) was not deep-dived for
technical content beyond confirming the release/author/year. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/stefano-tognon.json`,
`data/sidid.json`, and CSDb release/scener pages. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (with populated release/reference
fields), the CSDb release page for 74136, the local composer aggregation,
and the CSDb scener profile for Stefano Tognon.

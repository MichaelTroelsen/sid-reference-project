# TheTracker/Hitmen

```json
{
  "id": "thetracker-hitmen",
  "name": "TheTracker/Hitmen",
  "aliases": ["TheTracker/Hitmen"],
  "authors": ["Groepaz"],
  "released": "1998 Hitmen",
  "status": "stub",
  "platform": "TODO: platform/tool nature not confirmed beyond the SIDId release credit (Hitmen, 1998) — no further documentation found",
  "csdb_release": 3385,

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
    "SIDId's sidid.nfo gives AUTHOR 'Groepaz', RELEASED '1998 Hitmen', and REFERENCE to CSDb release 3385 — a fuller record than most in this batch, but still no NAME or COMMENT field, so the tool's own title (if distinct from the generic tag 'TheTracker') and playback technique are unconfirmed.",
    "Groepaz is an independently well-known, prolific C64 scene coder (Hitmen group) credited on many other, separately-named/carded tools and cracking/demo productions; this tag/signature is treated as its own distinct entry, NOT assumed related to any of his other work without direct evidence.",
    "Single-file, single-composer locally: the one tagged file ('Sulfo 64') is by 'Groepaz' himself (data/composers/groepaz.json) — i.e. the author and the sole local user are the same person, consistent with either a personal tool or simply the only HVSC-archived tune known to use it."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "SIDId REFERENCE — CSDb release 3385 (Hitmen, 1998): https://csdb.dk/release/?id=3385",
    "Local dataset: 1 file tagged TheTracker/Hitmen ('Sulfo 64'), by composer 'Groepaz' — data/composers/groepaz.json; see knowledge/COVERAGE.md"
  ]
}
```

## Overview

TheTracker/Hitmen is a SIDId Player-ID tag credited to **Groepaz**, a
well-known C64 scener and member of **Hitmen**, released in 1998 (SIDId
REFERENCE points to CSDb release 3385). SIDId gives no title beyond the
tag itself and no playback-technique comment. Locally it appears in only
**1 file**, "Sulfo 64", by Groepaz himself (data/composers/groepaz.json).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's release/reference fields
are populated, but NAME/COMMENT are absent; (2) Groepaz has many other,
separately-carded/named credits in the scene — this tag is NOT assumed
related to any of them; (3) single-file, single-composer local usage.

## Disassembly notes

None done here. The CSDb release page (3385) was not deep-dived for
technical content beyond confirming release/author/year. All Tier 3 fields
are `TODO`.

## Verification

Not verified. Seeded from `data/composers/groepaz.json`, `data/sidid.json`,
and the CSDb release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (with populated release/reference
fields), the CSDb release page for 3385, and the local composer
aggregation.

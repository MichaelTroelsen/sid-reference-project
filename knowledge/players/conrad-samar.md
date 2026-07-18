# Conrad/Samar

```json
{
  "id": "conrad-samar",
  "name": "Conrad/Samar",
  "aliases": ["Conrad/Samar"],
  "authors": ["Owen Crowley (Conrad)"],
  "released": "TODO: no tool-release date found",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house routine tied to the group 'Samar', not a released standalone editor (unconfirmed)",
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
    "SIDId's sidid.nfo carries only an AUTHOR line — 'Owen Crowley (Conrad)' — no NAME/RELEASED/REFERENCE/COMMENT. 'Samar' in the tag is a group affiliation folded into the tag name rather than a tool title (not independently confirmed as a CSDb group in this research pass — TODO).",
    "Single-file, single-composer locally: the one tagged file ('Bomberland') is by 'Owen Crowley' himself, handle Conrad (England, active 2025 per HVSC — data/composers/owen-crowley.json), consistent with a personal, in-house routine."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 1 file tagged Conrad/Samar ('Bomberland'), by composer 'Owen Crowley' — data/composers/owen-crowley.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, Conrad / Owen Crowley (England): https://csdb.dk/scener/?id=21879"
  ]
}
```

## Overview

Conrad/Samar is a SIDId Player-ID tag attributed to **Owen Crowley**,
handle **Conrad**, an English scener, with "Samar" folded into the tag
name as a group affiliation (not independently confirmed as a specific
CSDb group in this pass). SIDId's record is author-only, with no title,
release date, or CSDb reference. Locally it appears in only **1 file**,
"Bomberland", by Owen Crowley himself (data/composers/owen-crowley.json).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's record is author-only;
(2) "Samar" group affiliation not independently confirmed; (3) single-file,
single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/owen-crowley.json`,
`data/sidid.json`, and a CSDb scener-page check. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer aggregation,
and the CSDb scener profile for Conrad/Owen Crowley.

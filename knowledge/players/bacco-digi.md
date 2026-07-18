# Bacco_Digi

```json
{
  "id": "bacco-digi",
  "name": "Bacco_Digi",
  "aliases": ["Bacco_Digi"],
  "authors": ["TODO: tag names 'Bacco' — a plausible match is Stefan Albes (CSDb scener 'Bacco', Germany), co-programmer of Turrican II — but no source confirms he coded this specific routine (see quirks); not asserted as fact"],
  "released": "TODO: no explicit tool-release year in SIDId",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house digi routine used by two unrelated composers (unconfirmed)",
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
    "The tag name 'Bacco' most plausibly refers to CSDb scener #12044 'Bacco' — real name Stefan Albes, a German coder/graphician active 1988-1991 (groups Arcade, Steel), notable as co-programmer of the C64 game Turrican II with Manfred Trenz (https://csdb.dk/scener/?id=12044). This is a NAME MATCH only — no source states Bacco/Albes coded a digi routine used by either locally-tagged composer, so this is flagged as a plausible candidate, not an established fact.",
    "Unlike most tags in this batch, usage is NOT single-composer: 2 files split across TWO different composers, 'markus-siebold' (Markus Siebold, Germany) and 'thomas-detert' (Thomas Detert, Germany) — data/composers/markus-siebold.json, data/composers/thomas-detert.json. Both are German, matching Bacco/Albes's own country, but neither composer profile documents any direct link to Bacco/Albes or to each other's group. A 2-composer spread is too small to read as a 'genuinely published tool' per this project's concentration heuristic, but it is at least not a single personal routine.",
    "No CSDb tool/release page for a standalone 'Bacco_Digi' editor was found."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Bacco_Digi': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener #12044 'Bacco' (real name Stefan Albes, Germany, groups Arcade/Steel, Turrican II co-programmer): https://csdb.dk/scener/?id=12044",
    "Local dataset: 2 files tagged Bacco_Digi — 'Beat of Violence' tune 3 (markus-siebold), 'Quadrant' (thomas-detert) — data/composers/markus-siebold.json, data/composers/thomas-detert.json; see knowledge/COVERAGE.md rank 110"
  ]
}
```

## Overview

Bacco_Digi is a SIDId Player-ID tag with no upstream SIDId documentation (no
`sidid.nfo` entry at all). The tag name plausibly refers to **Stefan Albes**,
CSDb handle **Bacco**, a German coder/graphician (co-programmer of Turrican
II) — but no source confirms he wrote this specific routine, so the
attribution is recorded as a candidate, not a fact. Locally the tag spans 2
files by 2 different German composers (Markus Siebold, Thomas Detert),
neither directly documented as connected to Bacco/Albes or to each other.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the "Bacco" name match to Stefan Albes
is unconfirmed as authorship; usage spans 2 (not 1) composers, both German,
matching the candidate's country but nothing more.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local composer data, a confirmed-absent SIDId
check, and one CSDb scener-page lookup for a name-match candidate.
`status: stub`.

## Sources

See the `sources` array — SIDId (checked, absent), CSDb, and the local
composer aggregation.

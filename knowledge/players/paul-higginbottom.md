# Paul_Higginbottom

```json
{
  "id": "paul-higginbottom",
  "name": "Paul_Higginbottom",
  "aliases": ["?Paul_Higginbottom"],
  "authors": ["Paul Higginbottom"],
  "released": "TODO: no tool-release date found",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house, personal composing routine, not a released standalone editor (unconfirmed)",
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
    "The leading '?' in the SIDId tag marks it as a scanner-flagged/uncertain signature match. No sidid.nfo entry exists for this tag at all (checked data/sidid.json byTag — absent). The tag name matches the composer's own name exactly, consistent with a personal-routine naming pattern seen elsewhere in this batch.",
    "100% single-composer concentration: both locally-tagged files ('The Entertainer', 'Invention #8' — both classical-music arrangement titles) belong to Paul Higginbottom alone (data/composers/paul-higginbottom.json). HVSC records almost no metadata for him: no country, no CSDb scener id (csdb_id: 0), active year 1984.",
    "Given the thin HVSC record and classical-arrangement titles, this reads as an early (1984-era), personal, in-house routine rather than a distributed editor — no CSDb tool/release entry was found."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Paul_Higginbottom' or '?Paul_Higginbottom' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged ?Paul_Higginbottom, both by composer 'Paul Higginbottom' — data/composers/paul-higginbottom.json; see knowledge/COVERAGE.md",
    "HVSC composer profile: Paul Higginbottom, active 1984, no country/CSDb id recorded — data/composers/paul-higginbottom.json"
  ]
}
```

## Overview

Paul_Higginbottom is a SIDId Player-ID tag (`?`-prefixed, i.e.
scanner-flagged/uncertain) with no `sidid.nfo` entry of its own (checked,
absent). It matches the name of composer **Paul Higginbottom**, an early
(active 1984) HVSC entry with almost no other recorded metadata (no
country, no CSDb scener id). Both locally-tagged files — "The Entertainer"
and "Invention #8", both classical-arrangement titles — are by him alone,
consistent with a personal, in-house composing routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for this
tag; (2) HVSC's own record for this composer is unusually thin (no
country, no CSDb id); (3) 100% single-composer, 2-file usage.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/paul-higginbottom.json` and
`data/sidid.json` (checked, absent). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent) and the local
composer aggregation/HVSC profile for Paul Higginbottom.

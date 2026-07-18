# Cyrion_Digi

```json
{
  "id": "cyrion-digi",
  "name": "Cyrion_Digi",
  "aliases": ["Cyrion_Digi"],
  "authors": ["Cyrion (real name and country not disclosed on CSDb)"],
  "released": "TODO: no explicit tool-release date found; CSDb credits an explicit 'Sampling' role in 1993",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine embedded in Cyrion's own tracks, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null). Everything here comes from this project's own composer aggregation plus CSDb's scener page for Cyrion.",
    "Real corroborating evidence for the 'digi' label: CSDb explicitly credits Cyrion with a 'Sampling' role (alongside 'Code') on two 1993 releases — 'Tekkno Fun' and 'Tekktikkz'. Those titles are not identical to the 3 locally-tagged files ('Everybody in the Place', 'Night in Motion', 'Outta Space'), but are the same techno/rave-themed genre and era, consistent with the same author's sampling work.",
    "3 files, 1 composer: Cyrion himself. A personal routine by usage pattern.",
    "Cyrion is credited on CSDb as ex-founder of the group 'Device', functions Coder and Musician; no country is listed on his CSDb profile."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"Cyrion_Digi\"",
    "CSDb scener Cyrion (ex-founder of Device; 'Sampling' credits on 'Tekkno Fun' and 'Tekktikkz', 1993): https://csdb.dk/scener/?id=7571",
    "Local dataset: 3 files tagged Cyrion_Digi, 1 composer (Cyrion) — data/composers/cyrion.json",
    "data/composers/cyrion.json (csdb id 7571, no country listed)"
  ]
}
```

## Overview

Cyrion_Digi is the raw Player-ID tag for a digi/sample-playback routine
attributed to **Cyrion**, ex-founder of the group **Device** (real name and
country not disclosed on CSDb). It appears in only **3 files, all by
Cyrion himself** — a personal routine by usage pattern. No SIDId entry
exists for the tag, but CSDb does corroborate the "digi" label: Cyrion is
explicitly credited with a "Sampling" role (distinct from plain "Code") on
two 1993 releases, "Tekkno Fun" and "Tekktikkz" — different titles from
the 3 locally-tagged files, but same genre/era, consistent with the same
sampling work.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry, so identity comes
entirely from CSDb; (2) CSDb's "Sampling" role credit is genuine
corroboration, though on different-titled releases than the locally-tagged
files; (3) extreme concentration (3 files/1 composer) marks this as a
personal routine, not a published tool.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId byTag (no entry), CSDb scener page for
Cyrion, and the local composer aggregation.

# Musicodec

```json
{
  "id": "musicodec",
  "name": "Musicodec",
  "aliases": ["Musicodec"],
  "authors": ["Fabian Rosenschein"],
  "released": "TODO: no explicit tool-release date found; used in at least the C64 port of Pink Panther (1988, per VGMPF)",
  "status": "stub",
  "platform": "In-house C64 music driver personally programmed by Fabian Rosenschein while working for Gehrmann's companies Golden Games and reLINE Software (active 1986-1992 per VGMPF) — not confirmed as a standalone released editor; no dedicated CSDb tool/release entry found under this name.",
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
    "SIDId gives a PARTIAL entry: name 'Musicodec', author 'Fabian Rosenschein' — but no released date, reference, or comment field (data/sidid.json byTag['Musicodec']).",
    "VGMPF's Fabian Rosenschein biography independently confirms the driver's existence and name by the composer's own naming: 'Rosenschein programmed a driver he eventually called \"Musicodec\"', used for at least the C64 version of Pink Panther (1988). VGMPF's own article flags its Musicodec section as needing improvement — technical detail beyond the name/attribution is not available there either.",
    "100% single-composer concentration: both locally tagged files ('Pink Panther', 'Reactor Run') belong to Rosenschein himself (data/composers/fabian-rosenschein.json) — 'Pink Panther' matches the VGMPF-cited game exactly.",
    "Composer profile: Germany, DeepSID focus1 'PRO', active from 1988 (data/composers/fabian-rosenschein.json) — worked for Golden Games and reLINE Software 1986-1992 per VGMPF.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo (name + author, no reference/comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag['Musicodec'] = {\"name\":\"Musicodec\",\"author\":\"Fabian Rosenschein\"}",
    "VGMPF, Fabian Rosenschein (driver name/origin, Golden Games/reLINE employment, Pink Panther C64 credit): https://www.vgmpf.com/Wiki/index.php?title=Fabian_Rosenschein",
    "data/composers/fabian-rosenschein.json (profile: full_name Fabian Rosenschein, country Germany, focus1 PRO, active 1988)",
    "Local dataset: 2 files tagged Musicodec, single composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Musicodec is an in-house C64 music driver personally written by **Fabian
Rosenschein**, a German composer/programmer who worked for Golden Games and
reLINE Software (1986-1992). VGMPF's own biography of Rosenschein confirms
the driver's name and origin in the composer's own words, and cites its use
in at least the C64 port of Pink Panther (1988) — which matches one of the
2 locally tagged files exactly (the other, "Reactor Run", is also his own).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId gives name+author but no
further detail; (2) VGMPF independently corroborates the driver's name and
at least one real game credit (Pink Panther), matching local data; (3)
100% single-composer usage, consistent with a personal in-house driver.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/fabian-rosenschein.json`, `data/sidid.json`) plus VGMPF.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, VGMPF, and the local composer
profile.

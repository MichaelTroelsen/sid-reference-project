# Cope / Omicron

```json
{
  "id": "cope-omicron",
  "name": "Cope / Omicron",
  "aliases": ["Cope/Omicron"],
  "authors": ["Cope (Nik)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/editor release found under this name — appears to be a personal in-house routine (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Cope/Omicron' (checked) — Player-ID-only signature. Local composer profile for 'Cope' (full name 'Nik', Denmark, CSDb scener 9103) has an EMPTY affiliation field (data/composers/cope.json) — 'Omicron' in the tag is not corroborated as a group/product name by the locally cached profile; likely a Player-ID-internal label (author/routine label), not independently confirmed.",
    "Single-composer, single-country concentration: all 3 locally tagged files are by Cope himself (Denmark) — 'At Last!', 'Interlude 2', 'Interlude 3' — consistent with a personal routine, not a widely used tool."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Cope/Omicron': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Cope / Nik (Denmark): https://csdb.dk/scener/?id=9103",
    "Local dataset: 3 files tagged Cope/Omicron, all by Cope — see data/composers/cope.json"
  ]
}
```

## Overview

`Cope/Omicron` is a raw Player-ID tag for a routine attributed to **Cope**
(full name Nik, Denmark, CSDb scener 9103). All 3 locally-tagged files are
by Cope himself. SIDId has no entry for this tag, and the locally cached
composer profile's affiliation field is empty, so "Omicron" is not
independently corroborated as a group/product name in this pass.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer, single-country
concentration (3/3 files by Cope) marks this as a personal routine; the
"Omicron" half of the tag is unconfirmed by any locally cached field.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/cope.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb scener
page, and the local composer aggregation.

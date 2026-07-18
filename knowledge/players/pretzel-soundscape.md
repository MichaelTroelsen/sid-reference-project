# Soundscape (Pretzel Logic)

```json
{
  "id": "pretzel-soundscape",
  "name": "Soundscape (Pretzel Logic)",
  "aliases": ["Pretzel/Soundscape"],
  "authors": ["Fredrik Blom"],
  "released": "1990, Pretzel Logic",
  "status": "stub",
  "platform": "TODO: native C64 tool per SIDId's CSDb reference, exact editor/player split unconfirmed",
  "csdb_release": 33643,

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
    "SIDId gives a sourced entry: name 'Soundscape', author Fredrik Blom, released 1990 by group 'Pretzel Logic', CSDb reference release 33643 (deepsid_dl/sidid.nfo) — no technique/comment field, so no digi/sample claim is made here.",
    "The tag's 'Pretzel/' prefix is the group name (Pretzel Logic), not part of the product name itself — SIDId's own NAME field is just 'Soundscape'.",
    "Small local footprint: 2 files, both by Fredrik Blom himself (Sweden, CSDb scener 873) — 'Soundscape Sample 1' and 'Soundscape sample 2', titled as if demo/sample showcase tracks for the tool rather than general-purpose adoption by other composers."
  ],
  "sources": [
    "SIDId sidid.nfo (name, author, year, group, CSDb reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 33643 (Soundscape, Fredrik Blom, 1990 Pretzel Logic): https://csdb.dk/release/?id=33643",
    "CSDb scener Fredrik Blom (Sweden): https://csdb.dk/scener/?id=873",
    "Local dataset: 2 files tagged Pretzel/Soundscape, both by Fredrik Blom — see data/composers/fredrik-blom.json"
  ]
}
```

## Overview

Soundscape is a C64 tool by **Fredrik Blom**, released in 1990 via the
group **Pretzel Logic** (CSDb release 33643), per a sourced SIDId entry.
Locally it appears in only 2 files, both Fredrik Blom's own "Soundscape
Sample" demo tracks.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId's own product NAME is just
"Soundscape" — "Pretzel/" in the raw tag is the releasing group, not part
of the tool's name. No digi/sample technique is claimed (SIDId has no
comment field for this entry).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/fredrik-blom.json`, `data/sidid.json`) plus the CSDb
release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 33643, CSDb scener
page, and the local composer aggregation.

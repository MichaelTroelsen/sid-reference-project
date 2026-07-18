# Jeff Minter

```json
{
  "id": "jeff-minter",
  "name": "Jeff Minter",
  "aliases": ["Jeff_Minter"],
  "authors": ["Jeff Minter"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 music routine used on Llamasoft's own game conversions, credited directly to Llamasoft founder Jeff Minter — no dedicated CSDb tool/editor release found under this name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Jeff_Minter' (checked) — Player-ID-only signature. Jeff Minter, England/Wales, CSDb scener 9435, is Llamasoft's founder — local composer profile confirms affiliation 'Llamasoft' (data/composers/jeff-minter.json).",
    "DISTINCT from the separately-tagged, separately-carded 'Llamasoft/James_Lisney' tag (knowledge/players/llamasoft-james-lisney.md) by another Llamasoft-credited composer — no evidence the two tags share a routine; Player-ID resolved them as different signatures.",
    "Single file, single composer: 'Syncro' (CSDb sid entry 54288) is the only locally tagged file — a true one-off personal routine, not a widely used tool. Do not inflate this to a 'Llamasoft house engine' claim beyond what the data shows."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Jeff_Minter': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local composer profile confirming affiliation 'Llamasoft': data/composers/jeff-minter.json",
    "CSDb scener Jeff Minter (England, Wales, Llamasoft): https://csdb.dk/scener/?id=9435",
    "Local dataset: 1 file tagged Jeff_Minter — 'Syncro', by Jeff Minter"
  ]
}
```

## Overview

`Jeff_Minter` is a raw Player-ID tag for a single locally-tagged file
("Syncro") credited directly to **Jeff Minter**, founder of Llamasoft
(England/Wales, CSDb scener 9435). SIDId has no entry for this tag; no
dedicated CSDb tool/release page was found. This is a true one-file,
one-composer personal routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single file/single composer — do not
inflate into a claim about a broader "Llamasoft engine"; distinct from the
separately-tagged `Llamasoft/James_Lisney` tag by another composer.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/jeff-minter.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), local composer
profile, CSDb scener page, and the local file aggregation.

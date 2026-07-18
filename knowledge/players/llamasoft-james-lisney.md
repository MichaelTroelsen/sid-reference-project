# Llamasoft / James Lisney

```json
{
  "id": "llamasoft-james-lisney",
  "name": "Llamasoft / James Lisney",
  "aliases": ["Llamasoft/James_Lisney"],
  "authors": ["James Lisney"],
  "released": "TODO: no explicit tool-release date found; locally tagged titles are Llamasoft C64 games (unconfirmed exact years per file)",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 music routine used on Llamasoft's own game conversions, credited to composer James Lisney — no dedicated CSDb tool/editor release found under this name (unconfirmed)",
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
    "The tag combines a publisher (Llamasoft, Jeff Minter's studio) and composer (James Lisney). Local composer profile confirms James Lisney's affiliation field is literally 'Llamasoft' (data/composers/james-lisney.json). SIDId's sidid.nfo has NO entry for 'Llamasoft/James_Lisney' (checked) — Player-ID-only signature.",
    "DISTINCT from the separately-tagged, separately-carded 'Jeff_Minter' tag (knowledge/players/jeff-minter.md) — Jeff Minter is Llamasoft's founder and is credited separately (and only) on 'Syncro', while James Lisney is credited on 4 different Llamasoft titles here. No evidence the two tags share a routine; both are in-house Llamasoft-affiliated but attributed to different named composers by Player-ID.",
    "All 4 locally tagged files are classic Llamasoft C64 titles: Hover Bovver, Mama Llama, Revenge of the Mutant Camels, Sheep in Space — all by James Lisney, England, CSDb scener 14023."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Llamasoft/James_Lisney': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local composer profile confirming affiliation 'Llamasoft': data/composers/james-lisney.json",
    "CSDb scener James Lisney (England, Llamasoft): https://csdb.dk/scener/?id=14023",
    "Local dataset: 4 files tagged Llamasoft/James_Lisney, all by James Lisney — Hover Bovver, Mama Llama, Revenge of the Mutant Camels, Sheep in Space"
  ]
}
```

## Overview

`Llamasoft/James_Lisney` is a raw Player-ID tag credited to composer
**James Lisney**, whose affiliation is recorded locally as **Llamasoft**
(Jeff Minter's UK games studio). All 4 locally-tagged files are classic
Llamasoft C64 titles (Hover Bovver, Mama Llama, Revenge of the Mutant
Camels, Sheep in Space). SIDId has no entry for this exact tag; no
dedicated CSDb tool/release page was found.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this tag is distinct from the
separately-tagged `Jeff_Minter` tag (also carded) — different named
composer, no evidence of a shared routine between the two despite both
being Llamasoft-affiliated.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/james-lisney.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), local composer
profile, CSDb scener page, and the local file aggregation.

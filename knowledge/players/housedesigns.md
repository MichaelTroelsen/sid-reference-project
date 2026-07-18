# HouseDesigns

```json
{
  "id": "housedesigns",
  "name": "HouseDesigns",
  "aliases": ["HouseDesigns"],
  "authors": ["TODO: no individual coder credited — SIDId names only the group 'House Designs'"],
  "released": "TODO: no date found — SIDId has no RELEASED field for this tag",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 replay routine used by the demo group House Designs — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId's entry for this tag has ONLY a COMMENT field: 'Player used by the group House Designs' — no author, no name, no released date, no reference. This is the sole documented fact about the tag beyond the local dataset.",
    "House Designs is a real, identifiable C64 demo group: CSDb hosts its 1991 demo 'Alcolado 1' (archived on the Internet Archive), and two CSDb scener pages cross-reference membership as 'Scan/Desire/House Designs' (scener 3364) and 'No-XS/Desire/House Designs/Toondichters' (scener 787) — i.e. House Designs shared members with the group Desire. This corroborates the SIDId comment: a real, named Dutch-scene-era group, not a placeholder.",
    "Both locally-tagged composers are Dutch: JVD (Jurgen van Dongen, b. 1974, CSDb scener 1193, handles '<del>Mode 2</del>, JVD') and Slide (Udo Gorissen, CSDb scener 4595, handles '<del>Udo</del>, Slide') — both active from ~1992-1994, consistent with the group's early-1990s CSDb footprint. Neither composer's own CSDb scener page (per the profile data cached locally) explicitly lists 'House Designs' as a group membership, so their connection to the group is inferred from the SIDId comment plus matching nationality/era rather than independently confirmed on their own profiles — flagged as a gap for a future pass.",
    "Small, tight usage: 5 files across exactly 2 composers, both plausibly tied to the same small Dutch group — consistent with an in-house routine rather than a widely distributed tool."
  ],
  "sources": [
    "sidid:HouseDesigns (comment 'Player used by the group House Designs', no author/name/released/reference) — data/sidid.json",
    "Internet Archive, 'Alcolado 1 (1991)(House Designs)': https://archive.org/details/Alcolado_1_1991_House_Designs",
    "CSDb scener 'Scan/Desire/House Designs': https://csdb.dk/scener/?id=3364",
    "CSDb scener 'No-XS/Desire/House Designs/Toondichters': https://csdb.dk/scener/?id=787",
    "Local dataset: 5 files tagged 'HouseDesigns' across 2 composers — JVD, Slide (Udo Gorissen) — data/composers/jvd.json, data/composers/slide-gorissen-udo.json",
    "data/composers/jvd.json (HVSC profile: full name Jurgen van Dongen, Netherlands, b. 1974-06-15, CSDb scener 1193)",
    "data/composers/slide-gorissen-udo.json (HVSC profile: full name Udo Gorissen, Netherlands, CSDb scener 4595)"
  ]
}
```

## Overview

`HouseDesigns` is the SIDId tag for a replay routine SIDId itself describes
only as "Player used by the group House Designs" — no author, name, or date.
House Designs is a real, identifiable early-1990s Dutch C64 demo group (its
1991 demo "Alcolado 1" is archived, and CSDb cross-references members shared
with the group Desire). Locally the tag appears on only 5 files, split
between two Dutch composers, JVD (Jurgen van Dongen) and Slide (Udo
Gorissen), both active in the group's era — though neither's own cached CSDb
profile explicitly lists House Designs membership, so the group connection
rests on the SIDId comment plus matching nationality/era.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag is corroborated as a real
group's in-house player (not just a SIDId placeholder), but individual
authorship within the group is unknown, and the two composers' own profiles
don't independently confirm House Designs membership.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus CSDb/Internet Archive
research for group corroboration. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, the Internet Archive listing for
House Designs' 1991 demo, two CSDb scener pages, and the local composer
aggregation.

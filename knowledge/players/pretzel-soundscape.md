# Soundscape (Pretzel Logic)

```json
{
  "id": "pretzel-soundscape",
  "name": "Soundscape (Pretzel Logic)",
  "aliases": ["Pretzel/Soundscape"],
  "authors": ["Fredrik Blom"],
  "released": "1990, Pretzel Logic",
  "status": "stub",
  "platform": "Native C64 tool. CSDb release 33643 ('Soundscape 1.0') is classified Type 'C64 Tool', coded by 'Rico' (= Fredrik Blom, CSDb scener 873) for group Pretzel Logic — https://csdb.dk/release/?id=33643",
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
    "Small local footprint: 2 files, both by Fredrik Blom himself (Sweden, CSDb scener 873) — 'Soundscape Sample 1' (CSDb sid id 39809) and 'Soundscape sample 2' (CSDb sid id 39798), titled as if demo/sample showcase tracks for the tool rather than general-purpose adoption by other composers. Full census of both tagged files confirms this — no other composer or file uses this tag locally.",
    "CSDb's XML webservice (release 33643, depth=2) confirms Type 'C64 Tool' and Code credit to handle 'Rico' = Fredrik Blom, group Pretzel Logic — this is the basis for the platform field.",
    "The same author/group released 'C64 Composer V1.0' one year earlier (CSDb release 27453, 1989-07-09, also Type 'C64 Tool', same coder 'Rico'). No source/manual states Soundscape derives from or replaces C64 Composer, so no `edges.derives_from` is asserted — recorded here only as an observed adjacency for a future researcher to check.",
    "Discarded lead: HVSC's STIL.txt has an unrelated 'Soundscape' hit (Vaca_Ramiro/Amiga_Sound.sid, a cover of an Amiga sound/MIDI program also named Soundscape) — confirmed unrelated to this C64 tool, not used as evidence for anything here."
  ],
  "sources": [
    "SIDId sidid.nfo (name, author, year, group, CSDb reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 33643 (Soundscape 1.0, Fredrik Blom/'Rico', 1990 Pretzel Logic, Type: C64 Tool): https://csdb.dk/release/?id=33643",
    "CSDb release 27453 (C64 Composer V1.0, same author, 1989, Type: C64 Tool): https://csdb.dk/release/?id=27453",
    "CSDb scener Fredrik Blom (Sweden): https://csdb.dk/scener/?id=873",
    "Local dataset: 2 files tagged Pretzel/Soundscape, both by Fredrik Blom — see data/composers/fredrik-blom.json (censused in full)"
  ]
}
```

## Overview

Soundscape is a native C64 tool by **Fredrik Blom** (handle "Rico"),
released in 1990 via the group **Pretzel Logic** (CSDb release 33643,
"Soundscape 1.0", categorized `Type: C64 Tool`, coded by Rico), per a
sourced SIDId entry and confirmed by CSDb's own webservice. Locally it
appears in only 2 files (full census, not a sample), both Fredrik Blom's
own "Soundscape Sample" demo tracks — no other composer uses this player
tag. The same author released an earlier tool, "C64 Composer V1.0"
(CSDb release 27453, 1989), also a `C64 Tool`, but no source states a
derivation between the two so no lineage edge is asserted.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId's own product NAME is just
"Soundscape" — "Pretzel/" in the raw tag is the releasing group, not part
of the tool's name. No digi/sample technique is claimed (SIDId has no
comment field for this entry). Platform is now confirmed native C64 (not
TODO): CSDb classifies release 33643 as `Type: C64 Tool`.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/fredrik-blom.json`, `data/sidid.json`) plus the CSDb
release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 33643 (fetched via
`scripts/lib/csdb-client.js`'s XML webservice, depth=2), CSDb release
27453, CSDb scener page, and the local composer aggregation
(`data/composers/fredrik-blom.json`, fully censused).

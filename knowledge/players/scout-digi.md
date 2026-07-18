# Scout_Digi

```json
{
  "id": "scout-digi",
  "name": "Scout_Digi",
  "aliases": ["Scout_Digi"],
  "authors": ["Scout (real name not disclosed on CSDb)"],
  "released": "TODO: no explicit tool-release date found; earliest corroborated 'Sampling' credit is 1990 ('Scout's House', 'Snap Hap')",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine embedded in Scout's own tracks, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null). Everything here comes from this project's own composer aggregation plus CSDb's scener page for Scout.",
    "EXACT-TITLE, STRONG evidence for the 'digi' label: CSDb credits Scout with an explicit 'Code, Sampling' role on 'Rave Da Scene' (1993 Demo) and 'Scout's House' (1990 Music) — BOTH are direct title matches to 2 of the 3 locally-tagged files ('Rave da Scene (part 1)'/'(part 2)', 'Scout's House'). A third CSDb-credited 'Sampling' release, 'Snap Hap' (1990), is not among the locally-tagged files but corroborates a repeated, genuine sampling role. This is one of the strongest-evidenced tags in this batch — 2 of 3 tagged files match named, Sampling-credited CSDb releases exactly.",
    "3 files, 1 composer: Scout — 'Rave da Scene (part 1)', 'Rave da Scene (part 2)', \"Scout's House\".",
    "Scout is Dutch, current group Silicon Limited (since Nov 1990), founder of the group Stun, formerly Eurasia/Silicon Forces/Dekadence/Fantastic 4 Cracking Group/Onslaught; CSDb notes he became a 'semi-professional electronic music producer' by 1997, consistent with a strong sampling/production background."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"Scout_Digi\"",
    "CSDb scener Scout (Netherlands; 'Code, Sampling' credits on 'Rave Da Scene' 1993 and 'Scout's House' 1990, also 'Snap Hap' 1990 and 'Got the Time' 1991): https://csdb.dk/scener/?id=3930",
    "Local dataset: 3 files tagged Scout_Digi, 1 composer (Scout) — data/composers/scout.json",
    "data/composers/scout.json (profile country Netherlands, csdb id 3930)"
  ]
}
```

## Overview

Scout_Digi is a raw Player-ID tag attributed to **Scout**, a Dutch scener
(Silicon Limited, founder of Stun; real name not disclosed on CSDb). It
appears in only **3 files, all by Scout himself** — "Rave da Scene (part
1)"/"(part 2)" and "Scout's House". No SIDId entry exists, but this is one
of the strongest-corroborated tags in this batch: CSDb credits Scout with
an explicit "Code, Sampling" role on both "Rave Da Scene" (1993) and
"Scout's House" (1990) — exact title matches to 2 of the 3 locally-tagged
files — plus a third, differently-titled "Sampling" credit ("Snap Hap",
1990) confirming a repeated, genuine sampling role.

## Quirks & gotchas

See the `quirks` array. Load-bearing: 2 of the 3 locally-tagged files
match, by exact title, CSDb releases explicitly credited to Scout with a
"Sampling" role — an unusually direct level of corroboration for this
batch, where most tags rely only on author-name or genre/era-level
inference.

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
Scout, and the local composer aggregation.

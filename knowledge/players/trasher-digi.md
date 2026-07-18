# Trasher_Digi

```json
{
  "id": "trasher-digi",
  "name": "Trasher_Digi",
  "aliases": ["Trasher_Digi"],
  "authors": ["Preben Vindholmen (Trasher)"],
  "released": "TODO: no explicit tool-release date found in SIDId; earliest corroborated 'Sampling' credit is 1990 ('Booze'n'Rockets')",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine embedded in Trasher's own tracks, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId (data/sidid.json) has an entry for this tag with an AUTHOR line only — 'Preben Vindholmen (Trasher)' — no NAME, reference, or comment. The absence of a NAME field is a signal this was never packaged as a titled, released tool.",
    "STRONG, TITLE-MATCHING evidence for the 'digi' label: CSDb credits Trasher with an explicit 'Sampling' role (plus Code) on 'Flexible' (1997 Demo) — and one of the 3 locally-tagged files is 'Flexible II (part 2)', clearly the same demo series. Also credited 'Sampling' on 'Familiegudstjeneste' (1994) and 'Booze'n'Rockets' (1990, Code/Graphics/Sampling), showing a repeated, genuine sampling role across nearly a decade, not a one-off.",
    "3 files, 1 composer: Preben Vindholmen (Trasher) — 'Flexible II (part 2)', 'Immerswimmel', 'Kalle Kanon'. A personal routine by usage pattern.",
    "Trasher (also known as 'The Trasher' / 'Bandit') is Norwegian, groups Impulse (1989-), Megastyle, Offence, SHAPE (1990)."
  ],
  "sources": [
    "data/sidid.json byTag: Trasher_Digi — author 'Preben Vindholmen (Trasher)', no name/reference/comment",
    "CSDb scener Trasher (Norway; 'Sampling' credits on 'Flexible' 1997, 'Familiegudstjeneste' 1994, 'Booze'n'Rockets' 1990): https://csdb.dk/scener/?id=4978",
    "Local dataset: 3 files tagged Trasher_Digi, 1 composer (Preben Vindholmen) — data/composers/preben-vindholmen.json",
    "data/composers/preben-vindholmen.json (profile country Norway, csdb id 4978)"
  ]
}
```

## Overview

Trasher_Digi is the SIDId tag for a digi/sample-playback routine
attributed to **Preben Vindholmen**, handle **Trasher** (also "The
Trasher"/"Bandit"), a Norwegian scener (Impulse, Megastyle, Offence,
SHAPE). SIDId's entry carries only an `AUTHOR` line. It appears in only
**3 files, all by Trasher himself**. This is well-corroborated for this
batch: CSDb credits Trasher with a repeated, explicit "Sampling" role
across releases spanning 1990-1997, including "Flexible" (1997) — a
direct title match to the locally-tagged "Flexible II (part 2)".

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId names the author but no
titled product; (2) CSDb's "Sampling" credit on "Flexible" is a genuine
title match to one of the 3 locally-tagged files, and the role recurs
across multiple releases over ~7 years, making this one of the better-
corroborated tags in this batch.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page for Trasher,
and the local composer aggregation.

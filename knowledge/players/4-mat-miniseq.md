# 4-Mat MiniSEQ

```json
{
  "id": "4-mat-miniseq",
  "name": "4-Mat MiniSEQ",
  "aliases": ["4-Mat/MiniSeq"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: filenames ('MiniSEQ Demo Songs', 'MiniSEQ Loop Song') suggest a small dedicated sequencer/routine by 4-Mat — no dedicated CSDb tool/release entry found under this exact name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for '4-Mat/MiniSeq' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "Do NOT conflate with the separately-tagged, separately-carded '4-Mat_tiny_1' / '4-Mat_tiny_2' family (knowledge/players/4-mat-tiny-1.md) by the same author — different raw tag, no evidence of a shared routine between them.",
    "Only 2 locally tagged files, both by 4-Mat himself, both explicitly 'MiniSEQ'-titled ('MiniSEQ Demo Songs', 'MiniSEQ Loop Song') — a small, self-contained demo/showcase for what the name implies is a minimal sequencer, not a widely distributed tool."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for '4-Mat/MiniSeq': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged 4-Mat/MiniSeq, both by 4-Mat (Matt Simmonds) — see data/composers/4-mat.json"
  ]
}
```

## Overview

`4-Mat/MiniSeq` is a raw Player-ID tag for a small sequencer/routine by
**Matt Simmonds**, handle **4-Mat**. Only 2 locally-tagged files exist,
both explicitly "MiniSEQ"-titled demo/loop songs, both by 4-Mat himself.
No CSDb tool/release page or SIDId entry was found for it.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId has no entry for this tag; it
is distinct from the separately-tagged `4-Mat_tiny_1`/`_2` family by the
same author (no evidence of shared code between the two tags).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/4-mat.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer aggregation.

# 4-Mat Tiny 1

```json
{
  "id": "4-mat-tiny-1",
  "name": "4-Mat Tiny 1",
  "aliases": ["4-Mat_tiny_1"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be one of several small in-house/experimental replay routines by 4-Mat (a sibling raw tag '4-Mat_tiny_2' is also present in the local dataset) — no dedicated CSDb tool/release entry found under this exact name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for '4-Mat_tiny_1' (checked) — this is a Player-ID-only signature, not a documented/published tool. A related composer-tagged file in the same local dataset ('And Again') carries a SIBLING raw tag '4-Mat_tiny_2', indicating a small family of numbered 'tiny' routines by the same author rather than one fixed product — treat '_1' as one variant among at least two, not the whole family.",
    "4-Mat is Matt Simmonds, a long-running and prolific UK SID composer; also see the separately-tagged, separately-carded 'MiniSeq' routine (knowledge/players/4-mat-miniseq.md) by the same author — a DIFFERENT tag with its own SIDId absence, not confirmed to be the same code.",
    "Single-composer concentration: all 5 locally tagged files are by 4-Mat himself (per data/composers/4-mat.json) — consistent with a personal/experimental routine, likely used for quick tune sketches ('Menutune (new player test)', 'Mini Melodies Compilation') rather than a released, titled tool."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for '4-Mat_tiny_1' or '4-Mat_tiny_2': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 5 files tagged 4-Mat_tiny_1, all by 4-Mat (Matt Simmonds); sibling tag 4-Mat_tiny_2 also observed on 'And Again' — see data/composers/4-mat.json"
  ]
}
```

## Overview

`4-Mat_tiny_1` is a raw Player-ID tag for one of several small, likely
experimental replay routines by **Matt Simmonds**, handle **4-Mat**, a
long-running UK SID composer. A sibling tag `4-Mat_tiny_2` appears on
another file in the same dataset, indicating a small numbered family of
"tiny" routines rather than one fixed product. All 5 locally-tagged files
are by 4-Mat himself; titles like "Menutune (new player test)" suggest
quick tune sketches rather than a released, titled tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has no entry for this tag
at all; (2) a sibling `_tiny_2` variant exists, so this is one of a family,
not the whole picture; (3) do not conflate with the separately-tagged
`4-Mat/MiniSeq` (also by 4-Mat, also carded separately, no evidence of a
shared routine).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/4-mat.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer aggregation.

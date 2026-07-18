# 4-Mat Tiny 2

```json
{
  "id": "4-mat-tiny-2",
  "name": "4-Mat Tiny 2",
  "aliases": ["4-Mat_tiny_2"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be one of several small in-house/experimental replay routines by 4-Mat (a sibling raw tag '4-Mat_tiny_1' is also present in the local dataset and already carded separately) — no dedicated CSDb tool/release entry found under this exact name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for '4-Mat_tiny_2' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "SIBLING TAG, kept SEPARATE: '4-Mat_tiny_1' is already carded at knowledge/players/4-mat-tiny-1.md (that card notes '4-Mat_tiny_2' as a sibling it found but did not investigate). This card is that follow-up. The two are numbered variants of a small family of 'tiny' routines by the same author — not proven to share code, so NOT merged into one card/alias set; each keeps its own id per this project's evidence rule.",
    "Also distinct from '4-Mat/MiniSeq' (knowledge/players/4-mat-miniseq.md) and '4-Mat/TEDplay' (knowledge/players/4-mat-tedplay.md), two further separately-tagged, separately-carded personal routines by the same author — no evidence connects any of these four tags to each other.",
    "Single-composer concentration: all 3 locally-tagged files are by 4-Mat himself, one of them ('And Again') titled plainly — consistent with a personal/experimental routine rather than a released, titled tool (per data/composers/4-mat.json)."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for '4-Mat_tiny_2': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 3 files tagged 4-Mat_tiny_2, all by 4-Mat (Matt Simmonds) — data/composers/4-mat.json",
    "Sibling card knowledge/players/4-mat-tiny-1.md — first flagged this tag's existence without carding it",
    "Sibling cards knowledge/players/4-mat-miniseq.md, knowledge/players/4-mat-tedplay.md — other separately-tagged personal routines by the same author"
  ]
}
```

## Overview

`4-Mat_tiny_2` is a raw Player-ID tag for one of several small, likely
experimental replay routines by **Matt Simmonds**, handle **4-Mat**, a
long-running UK SID composer. It is the numbered sibling of the already-carded
`4-Mat_tiny_1` (knowledge/players/4-mat-tiny-1.md), which flagged this tag's
existence but did not investigate it. All 3 locally-tagged files are by 4-Mat
himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has no entry for this tag at
all; (2) it is kept as a separate card from `4-Mat_tiny_1` despite the shared
naming scheme, since no evidence proves shared code between the two; (3) two
further distinct 4-Mat personal-routine tags exist in this project
(`4-Mat/MiniSeq`, `4-Mat/TEDplay`) with no known connection to this one.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/4-mat.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer aggregation, and the sibling `4-mat-tiny-1.md` card.

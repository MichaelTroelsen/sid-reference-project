# 4-Mat Tiny 3

```json
{
  "id": "4-mat-tiny-3",
  "name": "4-Mat Tiny 3",
  "aliases": ["4-Mat_tiny_3"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be one of several small in-house/experimental replay routines by 4-Mat — sibling raw tags '4-Mat_tiny_1' (already carded, knowledge/players/4-mat-tiny-1.md) and '4-Mat_tiny_2' (present in the local dataset, not yet carded as of this pass) are also present — no dedicated CSDb tool/release entry found under this exact name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for '4-Mat_tiny_3' (checked) — this is a Player-ID-only signature, not a documented/published tool. Mirrors the already-carded sibling knowledge/players/4-mat-tiny-1.md, which found the same absence for '4-Mat_tiny_1' and '4-Mat_tiny_2'.",
    "Part of a small numbered family of 'tiny' routines by 4-Mat in the local dataset: 4-Mat_tiny_1 (5 files, carded separately), 4-Mat_tiny_2 (3 files: 'And Again', 'Mus1k', 'Spy vs. Spy 3 Cover' — NOT yet carded as of this pass), and this tag, 4-Mat_tiny_3 (2 files). Following the established precedent in knowledge/players/4-mat-tiny-1.md, each numbered variant is kept as a SEPARATE card rather than merged, since no evidence establishes whether they are the same code or genuinely distinct routines.",
    "100% single-composer concentration: both locally tagged files ('Type Mismatch', 'Type Mismatch (Remix)') belong to 4-Mat himself (data/composers/4-mat.json). 4-Mat is Matt Simmonds, a long-running, prolific UK SID composer also documented elsewhere in this dataset via GoatTracker, Music_Assembler, the separately-carded 4-Mat/MiniSeq (knowledge/players/4-mat-miniseq.md), and the Michael_Delaney driver (per knowledge/players/michael-delaney.md, which notes 4-Mat as one of its two credited users).",
    "'Type Mismatch' and its remix suggest a demo/compo-scene 4K- or size-limited context, consistent with the 'tiny' family being quick experimental/size-coding routines rather than a released, titled tool."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for '4-Mat_tiny_3': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/4-mat.json (folder[] listing all 4-Mat_tiny_1/2/3 and other player tags for this composer)",
    "Sibling KB card, cross-checked for precedent (separate-card-per-variant, no forced merge): knowledge/players/4-mat-tiny-1.md",
    "Local dataset: 2 files tagged 4-Mat_tiny_3, single composer (4-Mat) — see data/composers/4-mat.json folder[]"
  ]
}
```

## Overview

`4-Mat_tiny_3` is a raw Player-ID tag for one of several small, likely
experimental replay routines by **Matt Simmonds**, handle **4-Mat**, a
long-running UK SID composer. It is the third numbered variant found in
the local dataset, alongside `4-Mat_tiny_1` (5 files, already carded as
[4-mat-tiny-1](4-mat-tiny-1.md)) and `4-Mat_tiny_2` (3 files, not yet
carded as of this pass). Both locally tagged files ("Type Mismatch" and
its remix) are 4-Mat's own.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has no entry for this tag
at all, matching the sibling `_tiny_1` card's finding; (2) this is one of
at least three numbered "tiny" variants, kept as separate cards per the
established precedent rather than merged without evidence; (3) do not
conflate with the separately-tagged `4-Mat/MiniSeq` or `Michael_Delaney`
tags also used by this composer.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/4-mat.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer aggregation, and the sibling `4-mat-tiny-1` card for precedent.

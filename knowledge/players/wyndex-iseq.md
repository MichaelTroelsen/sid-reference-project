# ISEQ (Wyndex)

```json
{
  "id": "wyndex-iseq",
  "name": "ISEQ (Wyndex)",
  "aliases": ["Wyndex/ISEQ"],
  "authors": ["Stephen L. Judd (Wyndex)"],
  "released": "2001 (SIDId); CSDb release 'Iseq' (id 113028) is dated 31 May 2002",
  "status": "stub",
  "platform": "TODO: native C64 tool, classified by CSDb only as a generic 'C64 Tool' with no further description found. Distinct from this same author's earlier 'Blahtune' (1997, see [[wyndex-blahtune]]) — different SIDId entry, different release year, different CSDb reference. No source states whether ISEQ shares any code with Blahtune's replay routine or is an unrelated, later tool.",
  "csdb_release": 113028,

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
    "SIDId carries 'Wyndex/ISEQ' as its OWN entry, separate from 'Wyndex/Blahtune' — different release year (2001/2002 vs 1997) and a different CSDb reference (113028 vs no CSDb entry for Blahtune, per wyndex-blahtune.md). DELIBERATELY NOT MERGED into [[wyndex-blahtune]] despite being the same author: this KB already applies the 'same author/name prefix is not evidence of one tool' caution elsewhere (e.g. antony-crowther vs antony-crowther-v3), and here SIDId itself treats them as two distinct signatures.",
    "Extremely concentrated: all 3 locally-tagged files (Commando Cover, Examples, Snood (Blockhead's Revenge)) are by Wyndex himself — even narrower than Blahtune's 9-of-10 composer split (see [[wyndex-blahtune]]).",
    "CSDb classifies the release only as a generic 'C64 Tool' with no further description found in this pass; the name 'ISEQ' (plausibly 'instrument sequencer') is not expanded upon anywhere located."
  ],
  "sources": [
    "sidid:Wyndex/ISEQ (author Stephen L. Judd (Wyndex), released 2001, reference https://csdb.dk/release/?id=113028) — data/sidid.json",
    "CSDb release 113028 ('Iseq', 31 May 2002): https://csdb.dk/release/?id=113028",
    "Local dataset: data/composers/wyndex.json — 3 files (Commando Cover, Examples, Snood (Blockhead's Revenge)); knowledge/COVERAGE.md rank #59",
    "Sibling KB card: knowledge/players/wyndex-blahtune.md (same author, different SIDId entry, deliberately not merged)"
  ]
}
```

## Overview

`Wyndex/ISEQ` is a raw Player-ID / SIDId tag naming **Stephen L. Judd
(Wyndex)**'s tool "ISEQ", released 2001-2002 per SIDId and a dedicated
CSDb release page (classified only as a generic "C64 Tool", no further
description found). This is a DIFFERENT SIDId signature from the same
author's earlier, better-documented "Blahtune" (1997, already carded as
[[wyndex-blahtune]], sourced from the author's own published manual and
memory map) — no source states any relationship between the two, so this
card is kept separate rather than folded in. In this dataset it is used
exclusively by Wyndex himself: 3 files, 100%.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a genuinely distinct SIDId
entry from Blahtune (different year, different CSDb reference), so it is
NOT treated as an alias despite the shared author — consistent with this
KB's standing rule that name/author overlap alone isn't evidence of one
tool.

## Disassembly notes

None done here. Unlike Blahtune, no author-published manual or memory map
was found for ISEQ specifically; every Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release year, CSDb reference, local usage) are confirmed via SIDId and
CSDb. No runtime fact was guessed.

## Sources

See the `sources` array — SIDId, the CSDb release page, local composer
data, and the sibling `wyndex-blahtune.md` card.

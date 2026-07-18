# 4-Mat/Patchwork

```json
{
  "id": "4-mat-patchwork",
  "name": "4-Mat/Patchwork",
  "aliases": ["4-Mat/Patchwork"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "TODO: no year found anywhere for this tag",
  "status": "stub",
  "platform": "TODO: appears to be 4-Mat's own personal C64 tool/routine named 'Patchwork' — one of several size/name-suffixed raw tags attributed to 4-Mat in this dataset (4-Mat_tiny, 4-Mat/TEDplay, 4-Mat/1k_Play, 4-Mat/MiniSeq — none in scope for this card and NOT folded in here, see quirks). No SIDId entry or CSDb tool/release page found under 'Patchwork' specifically.",
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
    "4 files, 2 composers: 4-Mat himself (3 — Patchwork Demotrack 1/2/3) and Maak (Akira Shiozawa, Japan; 1 — 'Illuminate Patchwork Edit'). The Japanese composer's own file title explicitly includes 'Patchwork Edit', real evidence this reads as a named format/tool at least one outside composer adopted, not a purely private routine kept to 4-Mat alone.",
    "knowledge/COVERAGE.md lists several OTHER 4-Mat-prefixed raw tags not included in this card's scope: '4-Mat_tiny' (10 files), '4-Mat/TEDplay' (4), '4-Mat/1k_Play' (2), '4-Mat/MiniSeq' (2) — each presumably a differently-named micro-tool or mode by the same composer. None are confirmed identical to Patchwork and none are folded into this card; a future pass covering those tags should decide independently whether any belong together.",
    "No SIDId entry exists for '4-Mat/Patchwork' (checked data/sidid.json directly)."
  ],
  "sources": [
    "Local dataset: data/composers/4-mat.json (3 files), data/composers/maak.json (1 file); knowledge/COVERAGE.md rank #34 (and rows for the sibling 4-Mat tags, out of scope here)",
    "data/sidid.json byTag — checked, no entry for '4-Mat/Patchwork'"
  ]
}
```

## Overview

`4-Mat/Patchwork` is a raw Player-ID tag covering 4 files, naming British
composer **Matt Simmonds (4-Mat)**'s own tool or format, "Patchwork". No
SIDId entry or CSDb tool page was found for it, but a Japanese composer's
own file ("Illuminate Patchwork Edit", by Maak/Akira Shiozawa) explicitly
uses "Patchwork Edit" in its title — real evidence of at least one outside
adopter, not a purely private routine. This dataset's raw tags include
several other 4-Mat-prefixed variants (`4-Mat_tiny`, `4-Mat/TEDplay`,
`4-Mat/1k_Play`, `4-Mat/MiniSeq`) that are deliberately out of scope for
this card and not folded in.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the outside-adopter evidence (Maak's
own file title) is the strongest signal in this card, and the explicit
non-merge with 4-Mat's other same-prefix tags follows this KB's standing
"shared name prefix is not evidence of one tool" caution.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data is
confirmed; no SIDId entry or CSDb tool page exists for this tag. No
runtime fact was guessed.

## Sources

See the `sources` array — local composer data and `knowledge/COVERAGE.md`.

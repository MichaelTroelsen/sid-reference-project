# TFX

```json
{
  "id": "tfx",
  "name": "TFX",
  "aliases": ["TFX"],
  "authors": ["Ray (Area Team / Unreal)"],
  "released": "1995 (V1.0, Unreal); V1.2 1996",
  "status": "stub",
  "platform": "Native C64 music editor (the .prg/.d64 embeds a playroutine). Closed; binaries only.",
  "csdb_release": 110111,

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
    "A music editor by 'Ray' (of Area Team and Unreal), released by Unreal — V1.0 (1995), V1.2 (1996). Co-created with Pseudografx (music/design/charset/docs); idea by Ray + Pseudografx. A V1.1 is implied by numbering but not found (TODO).",
    "What 'TFX' stands for is UNKNOWN — neither the CSDb releases nor SIDId document an expansion. TODO.",
    "Signature note: the SIDId entry carries NO magic-byte signature for TFX (only author/year/reference) — so SIDId/Player-ID cannot fingerprint TFX by content; the DeepSID 'TFX' tag originates from DeepSID's own metadata, not automatic byte-detection. (Worth knowing when trusting the tag's precision.)",
    "Very concentrated: 268 files across only 7 composers (Sad, Jaymz Julian, PCH, Factor6) — a small in-group tool. Note Unreal also released DMC V7.0 (1995), but no stated relationship to TFX.",
    "Replay internals (memory map, ZP, init/play, data format, effect set), source/license, and lineage all UNKNOWN — TODO (would require disassembling a TFX-tagged .sid or the editor binary)."
  ],
  "sources": [
    "CSDb TFX V1.0 (Unreal, 1995, full credits): https://csdb.dk/release/?id=110111",
    "CSDb TFX V1.2 (Unreal, 1996): https://csdb.dk/release/?id=38900",
    "SIDId sidid.nfo (author Ray, 1995; note: no byte-signature): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "sidid:TFX (author Ray, 1995 Unreal, CSDb 110111)",
    "Local dataset: 268 files tagged TFX across 7 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

TFX is a native C64 music editor by **Ray** (of Area Team and Unreal), released
by Unreal — V1.0 in 1995, V1.2 in 1996 (co-created with Pseudografx). It's a
small, concentrated tool: 268 files across only 7 composers. What "TFX" stands
for isn't documented anywhere found.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **SIDId has no byte-signature for TFX**
(so its DeepSID tag comes from DeepSID metadata, not content-fingerprinting —
relevant to how much to trust the tag); the **unknown acronym**; and the small
7-composer footprint. Internals `TODO`.

## Disassembly notes

None done here; no published internals. Disassembling a TFX-tagged `.sid` or
the editor `.prg` is the route to memory/format facts.

## Verification

**Not verified — `status: stub`.** Author, releasing group, and versions are
CSDb/SIDId-sourced; all runtime fields, the acronym, and lineage are `TODO`.

## Sources

See the `sources` array — the CSDb V1.0/V1.2 releases and the SIDId entry
(which notably lacks a byte-signature).

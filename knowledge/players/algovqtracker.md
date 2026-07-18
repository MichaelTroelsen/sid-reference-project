# AlgoVQTracker

```json
{
  "id": "algovqtracker",
  "name": "AlgoVQTracker",
  "aliases": ["AlgoVQTracker_V1"],
  "authors": ["Naveed Khugiani (Algorithm)"],
  "released": "TODO: no explicit tool-release year found; earliest locally-tagged file 'Kaos 64' is CSDb sid entry 55064, credited '2017 Algotech' per web search snippet (unconfirmed as the tool's own release date)",
  "status": "stub",
  "platform": "TODO: name suggests a vector-quantization-based (VQ) sample/tracker technique by Naveed Khugiani ('Algorithm'), a known C64 demo coder — no dedicated CSDb tool/editor release page found under this name in this pass (unconfirmed)",
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
    "SIDId's sidid.nfo has an entry with only an AUTHOR line — 'Naveed Khugiani (Algorithm)' — no NAME/reference/comment (deepsid_dl/sidid.nfo).",
    "'DIGI BY NAME IS NOT EVIDENCE': the 'VQ' in the tag name plausibly stands for 'vector quantization', a real technique Naveed Khugiani ('Algorithm') is independently documented (per web search of INC $D020 coder's digest and demo credits) as using for graphics/video compression in his C64 demos (e.g. 'TileVQ 2x2'). Whether AlgoVQTracker applies VQ to AUDIO/sample data specifically is NOT confirmed by any source found in this pass — left TODO, not asserted.",
    "Author Naveed Khugiani, England (b. 1976), CSDb scener 10879, a well-documented, active modern C64 demo coder — this is a real, named tool ('AlgoVQTracker_V1' implies a version-1 release, and the tag naming convention itself, distinct from a bare handle, suggests a genuine titled product) even though no CSDb release page was located for it directly.",
    "Small local footprint: 2 files, both by Naveed Khugiani himself — 'Kaos 64' (CSDb sid entry 55064) and 'That Can't be in 50k' (CSDb sid entry 59244)."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Naveed Khugiani / Algorithm (England, b. 1976): https://csdb.dk/scener/?id=10879",
    "CSDb sid entry 55064 ('Kaos 64', Naveed Khugiani, credited '2017 Algotech' per web search): https://csdb.dk/sid/?id=55064",
    "Web search corroborating Khugiani's documented use of vector-quantization ('TileVQ') techniques in his C64 demo work (graphics, not confirmed for audio)",
    "Local dataset: 2 files tagged AlgoVQTracker_V1, both by Naveed Khugiani — see data/composers/naveed-khugiani.json"
  ]
}
```

## Overview

AlgoVQTracker is a C64 tool attributed to **Naveed Khugiani** ("Algorithm"),
a well-documented modern C64 demo coder (England, CSDb scener 10879). SIDId
confirms only the author; no CSDb tool/release page was located. The "VQ"
in the name plausibly references vector quantization — a technique
Khugiani is independently documented using for graphics compression — but
whether it applies to audio data here is unconfirmed. 2 locally tagged
files, both by Khugiani himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the VQ/vector-quantization
association is corroborated for Khugiani's GRAPHICS work, not confirmed for
this AUDIO tool — do not conflate the two without a direct source.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/naveed-khugiani.json`, `data/sidid.json`) plus a web
search for provenance context. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page, CSDb sid entry
55064, web search, and the local composer aggregation.

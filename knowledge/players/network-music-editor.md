# Network Music Editor V1.4

```json
{
  "id": "network-music-editor",
  "name": "Network Music Editor V1.4",
  "aliases": ["Network"],
  "authors": ["TODO: no credited coder found — CSDb release page lists no credits, SIDId's entry has no AUTHOR field"],
  "released": "TODO: no date found on CSDb release page or in SIDId",
  "status": "stub",
  "platform": "TODO: catalogued on CSDb as a 'C64 Tool' (also listed there as NME V1.4 / NMC V1.4); no further platform detail found",
  "csdb_release": 207305,

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
    "SIDId's entry for this tag has ONLY a NAME field ('Network Music Editor V1.4') and a REFERENCE (CSDb release 207305) — no AUTHOR, no RELEASED. CSDb's own release page likewise lists 'no credits found' for id=207305, so no coder is confirmed anywhere despite the tool having a clear title and version number (unusual: most named/versioned tools in this project's cards do have a credited author).",
    "Small, split usage: 6 files across exactly 2 composers in this dataset — Christoph Albert (Germany, handle previously 'Sharky', now 'Judy', CSDb scener 3293) and Dokmatik (Metin Göktay, Turkey, CSDb scener 18497). Both composers are listed as active from 1993, and neither has any other CSDb tool/coder credit found, so there is no local lead pointing at either of them as the editor's author.",
    "Not one of DeepSID's curated 129 players.json entries — this card is seeded from SIDId's fingerprint plus the CSDb release page alone."
  ],
  "sources": [
    "sidid:Network (name 'Network Music Editor V1.4', reference https://csdb.dk/release/?id=207305, no author/released/comment) — data/sidid.json",
    "CSDb release 207305 'Network Music Editor V1.4' (C64 Tool, aka NME V1.4/NMC V1.4, no credits found): https://csdb.dk/release/?id=207305",
    "Local dataset: 6 files tagged 'Network' across 2 composers — Christoph Albert, Dokmatik — data/composers/christoph-albert.json, data/composers/dokmatik.json",
    "data/composers/christoph-albert.json (HVSC profile: Germany, CSDb scener 3293)",
    "data/composers/dokmatik.json (HVSC profile: Turkey, real name Metin Göktay, CSDb scener 18497)"
  ]
}
```

## Overview

`Network` is the SIDId tag for **Network Music Editor V1.4**, a named,
versioned C64 tool cross-referenced on CSDb (release 207305) but with no
credited coder found anywhere — neither SIDId's own entry nor CSDb's release
page names an author. In this dataset it appears on only 6 files, split
between two composers active from 1993: Christoph Albert (Germany) and
Dokmatik (Metin Göktay, Turkey). Neither composer has any other tool-coding
credit found locally, so the author's identity remains an open question.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a titled, versioned tool with a
CSDb release page, yet genuinely author-less in every source checked — not a
research gap so much as a real absence of a public credit; usage is small and
split across two otherwise-unconnected composers.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus the CSDb release page.
`status: stub` — no runtime fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, the CSDb release page for
Network Music Editor V1.4, and the local composer aggregation.

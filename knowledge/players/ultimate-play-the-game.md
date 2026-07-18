# Ultimate (Dave Thomas / Ultimate Play the Game)

```json
{
  "id": "ultimate-play-the-game",
  "name": "Ultimate (Dave Thomas / Ultimate Play the Game)",
  "aliases": ["Ultimate"],
  "authors": ["Dave Thomas"],
  "released": "TODO: no explicit tool-release date found; locally tagged titles are Ultimate Play the Game C64 conversions (unconfirmed exact years)",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 music routine used across Ultimate Play the Game's C64 game conversions, credited to composer Dave Thomas — no dedicated CSDb tool/editor release found under this name (unconfirmed)",
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
    "The tag name matches the publisher, not a person: SIDId's entry for 'Ultimate' gives only an author line 'Dave Thomas <?>' — no NAME/reference/comment (deepsid_dl/sidid.nfo). The local composer profile confirms Dave Thomas's affiliation field is literally 'Ultimate' (data/composers/dave-thomas.json), i.e. Ultimate Play the Game, the UK publisher/developer (Sabreman/Jetpac/Knight Lore-era studio, later Rare).",
    "All 5 locally tagged files are Ultimate Play the Game C64 game titles credited to Dave Thomas: Blackwyche, Dragon Skulle, Entombed, Outlaws, The Staff of Karnath — consistent with an in-house driver used across the studio's C64 conversions rather than a standalone released editor/tool.",
    "A web search for 'Dave Thomas Ultimate Play the Game C64 sound driver' found only that Dave Thomas was a programmer/author for Ultimate and that outsourced 6502 conversion work was common for the company, but turned up NO dedicated technical writeup of a driver/engine by this name — treat the 'in-house routine' framing as inference from tag/affiliation, not a sourced technical claim."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local composer profile confirming affiliation 'Ultimate': data/composers/dave-thomas.json",
    "Local dataset: 5 files tagged Ultimate, all by Dave Thomas — Blackwyche, Dragon Skulle, Entombed, Outlaws, The Staff of Karnath"
  ]
}
```

## Overview

`Ultimate` is a raw Player-ID tag credited to composer **Dave Thomas**,
whose affiliation is recorded locally as **Ultimate** (Ultimate Play the
Game, the UK publisher/developer). All 5 locally-tagged files are Ultimate
Play the Game C64 titles (Blackwyche, Dragon Skulle, Entombed, Outlaws, The
Staff of Karnath). SIDId's entry for the tag has only an author line, no
name/reference/comment — no dedicated CSDb tool/release page or technical
writeup was found for a driver by this name.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag name is the **publisher**,
not a tool product name; all usage is by one composer across that
publisher's own C64 conversions; no independent technical documentation of
the routine itself was found in this pass.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/dave-thomas.json`, `data/sidid.json`) plus a web search for
provenance context. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, local composer profile, and the
local file aggregation.

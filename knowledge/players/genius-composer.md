# Genius Composer

```json
{
  "id": "genius-composer",
  "name": "Dr. Zoom's Genius Composer",
  "aliases": ["GeniusComposer"],
  "authors": ["Tobias Erbsland (Dr. Zoom)"],
  "released": "1994 (V2.3, 4 Feb 1994)",
  "status": "stub",
  "platform": "Native C64 music editor + its own C64 replay routine. Closed scene tool by a single author (no group/team credited beyond Dr. Zoom himself for code/music/graphics).",
  "csdb_release": 94332,

  "memory": {
    "load_address": "TODO: not disassembled",
    "zero_page": "TODO: not disassembled. DeepSID's players database estimates 'Approx 2-4 bytes' for this player, but gives no addresses — too vague to record as a confirmed range (see quirks/sources)",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "TODO: not disassembled",
    "play": "TODO: not disassembled"
  },
  "speed": "TODO: not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Re-released as 'Atlantis Composer V3.0' (CSDb release 103727, 5 March 1994, one month after Genius Composer V2.3) under the Atlantis group's own name — same author (Dr. Zoom), same credits (Code/Music/Graphics all Dr. Zoom). SIDId's comment field records this rebrand explicitly. No separate Player-ID tag for the Atlantis Composer release was found in this project's dataset (only 'GeniusComposer' appears in knowledge/COVERAGE.md), so treat Atlantis Composer as the same engine under a different release name rather than a distinct player — not confirmed by a byte-level comparison, just the shared authorship/date/credits.",
    "PERSONAL TOOL, not a widely-adopted scene tracker: of the 34 files tagged 'GeniusComposer' in this project's dataset (knowledge/COVERAGE.md, rank 9 by file count), the one composer profile cached locally with full player-tag detail (data/composers/zoom-dr.json) shows all 34 as composed by Dr. Zoom himself — i.e. the author appears to be the tool's only user in this collection. This is the classic 'small-scene/personal routine' signature described in the extraction template, not evidence of wider adoption.",
    "No source code, disassembly, manual, or format-spec write-up was found on CSDb, Codebase64, or general web search — every runtime field stays TODO. DeepSID's players database (data/players.json, local cache) does carry an unusually specific-looking 'zero_pages: Approx 2-4 bytes' estimate for this player, but with no addresses and no stated methodology; it is cited here as a lead for a future disassembly pass, not recorded as a confirmed memory-map fact.",
    "Author Dr. Zoom (Tobias Erbsland, Switzerland) also released other C64 tools of his own (e.g. 'Universal-Player V1.0', 1995, and the D4/D42 Adventure Systems) — no evidence was found that any of them share code with Genius Composer, so no edge is asserted."
  ],
  "sources": [
    "sidid:GeniusComposer (author Tobias Erbsland (Dr. Zoom), 1994, reference https://csdb.dk/release/?id=94332, comment 'Also released as Atlantis Composer') — https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release, Dr. Zoom's Genius Composer V2.3 (credits, 4 Feb 1994, 362 downloads): https://csdb.dk/release/?id=94332",
    "CSDb release, Atlantis Composer V3.0 (5 March 1994, same author/credits): https://csdb.dk/release/?id=103727",
    "Cached CSDb release metadata (credits/date/download link) for release 94332: data/csdb/players.json (local cache, keyed by CSDb release id)",
    "C64-Wiki, Dr. Zoom (Tobias Erbsland) biography: https://www.c64-wiki.de/wiki/Dr._Zoom",
    "Composer profile (Zoom Dr / Tobias Erbsland, Switzerland, CSDb scener id 480): data/composers/zoom-dr.json",
    "DeepSID players database, 'Genius Composer' entry (zero_pages estimate, developer link): data/players.json (local cache)",
    "Local dataset: 34 files tagged GeniusComposer, all by Dr. Zoom per the one cached composer profile (see knowledge/COVERAGE.md rank 9, and data/composers/zoom-dr.json)"
  ]
}
```

## Overview

Dr. Zoom's Genius Composer is a native C64 music editor + replay routine by
**Tobias Erbsland ("Dr. Zoom")**, a Swiss scener (Atlantis / Black Code Design
/ Digital Talk / Equinoxe). Version 2.3 was released 4 February 1994; a month
later the same author re-released it under the Atlantis group's name as
"Atlantis Composer V3.0". It ranks 9th in this project's `GeniusComposer`
Player-ID tag group with 34 files (`knowledge/COVERAGE.md`), and — per the
one composer profile cached locally with full player-tag detail
(`data/composers/zoom-dr.json`) — all 34 appear to be Dr. Zoom's own
compositions, the classic signature of a personal tool rather than a
widely-adopted scene tracker.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) the Atlantis
Composer rebrand is real and documented (same author/credits/era) but not
confirmed byte-identical to Genius Composer — no separate Player-ID tag for
it appears in this dataset; (2) this looks like a single-composer personal
tool, not a broadly-used editor, based on the one cached composer's file
breakdown.

## Disassembly notes

None. No public source, disassembly, or format write-up was located. A
future pass would need to pull a representative `GeniusComposer`-tagged
`.sid` from HVSC, disassemble its init/play routines, and trace them through
`sidm2-siddump` to fill the memory/entry/format fields.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release dates, CSDb credits, the Atlantis Composer rebrand, and the
composer-concentration reading) are confirmed, from the cached SIDId entry,
CSDb, C64-Wiki, and this project's local composer/player caches. Every
runtime field is `TODO`; DeepSID's vague "Approx 2-4 bytes" zero-page
estimate is cited as a lead, not recorded as a confirmed fact.

## Sources

See the `sources` array — SIDId (`sidid.nfo`), the two CSDb releases (Genius
Composer V2.3 and Atlantis Composer V3.0), this project's cached CSDb release
metadata and composer profile, and C64-Wiki's Dr. Zoom biography.

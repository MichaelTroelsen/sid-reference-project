# MrWarp_Digi

```json
{
  "id": "mrwarp-digi",
  "name": "MrWarp_Digi",
  "aliases": ["MrWarp_Digi"],
  "authors": ["Markus Peter (Mr. Warp)"],
  "released": "TODO: no explicit tool-release year in SIDId; composer's active year is 1993 per composer profile",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be a personal digi routine embedded in Mr. Warp's own tracks (unconfirmed); SIDId's own comment speculates it derives from C64_Speech_System (see quirks)",
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
    "SIDId's own comment field for this tag reads 'Probably derived from C64_Speech_System' (data/sidid.json byTag['MrWarp_Digi']) — a speculative, hedged claim by the SIDId author, not a sourced derivation (no header/manual states it). The already-carded [[c64-speech-system]] card independently notes this exact claim (and the same claim on two other, still-uncarded tags, '(Mahoney_Digi)' and 'TGS_Digi') and DELIBERATELY declines to assert a `derives_from` graph edge from it, per this project's 'no similar-names/speculation as evidence' rule. This card follows the same precedent: the possible lineage is recorded here as a citation, not as an `edges` entry.",
    "100% single-composer concentration: all 3 locally-tagged files ('Bladerunner Theme', 'Enter Sandman', 'We Will Rock You' — all cover/tribute-style titles) belong to composer 'warp-mr' (Markus Peter) alone (data/composers/warp-mr.json).",
    "Markus Peter (Mr. Warp) is a German scener/composer (data/composers/warp-mr.json, country Germany, csdb_id 1089); no CSDb tool/release page for a standalone 'MrWarp_Digi' editor was found."
  ],
  "sources": [
    "SIDId sidid.nfo (author + 'Probably derived from C64_Speech_System' comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['MrWarp_Digi']",
    "knowledge/players/c64-speech-system.md — independently records the same 'probably derived' claim and its precedent of not asserting a formal edge from it",
    "Local dataset: 3 files tagged MrWarp_Digi, all by composer 'warp-mr' — data/composers/warp-mr.json; see knowledge/COVERAGE.md rank 84",
    "CSDb scener profile, Markus Peter / Mr. Warp: https://csdb.dk/scener/?id=1089"
  ]
}
```

## Overview

MrWarp_Digi is a SIDId-fingerprinted digi routine attributed to **Markus
Peter**, handle **Mr. Warp**, a German composer/scener. SIDId's own comment
field speculates it is "probably derived from C64_Speech_System" (the 1986
64'er type-in already carded at [[c64-speech-system]]) — but that card itself
treats the same claim (repeated across three separate tags) as unconfirmed
SIDId speculation, not a sourced derivation, and deliberately does not assert
a graph edge from it. This card follows that same precedent. Locally the tag
appears in only 3 files, all by Mr. Warp himself — cover/tribute titles
("Bladerunner Theme," "Enter Sandman," "We Will Rock You") — consistent with
a personal routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the "probably derived from
C64_Speech_System" claim is SIDId's own hedge, not evidence, and is recorded
as a citation only, following the precedent already set on
[[c64-speech-system]]'s own card; 100% single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/warp-mr.json`, SIDId, and the
sibling `c64-speech-system` card's prior research. `status: stub`.

## Sources

See the `sources` array — SIDId, the sibling C64 Speech System card, the
local composer aggregation, and CSDb.

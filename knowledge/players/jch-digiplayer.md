# JCH_DigiPlayer

```json
{
  "id": "jch-digiplayer",
  "name": "JCH_DigiPlayer",
  "aliases": ["JCH_DigiPlayer"],
  "authors": ["Jens-Christian Huus (JCH)"],
  "released": "1991 (CSDb release 129499, \"Digi Editor V2.56\")",
  "status": "stub",
  "platform": "Native C64 tool: JCH's own digi/sample editor, distinct from his NewPlayer/OldPlayer/Protracker tracker line — a real, titled CSDb tool release, not merely an in-house tag",
  "csdb_release": 129499,

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
    "NOT the same player as JCH NewPlayer/OldPlayer/Protracker (see jch-newplayer.md, jch-oldplayer.md) — checked carefully before deciding whether to merge. SIDId's sidid.nfo has no entry for 'JCH_DigiPlayer' at all (checked data/sidid.json byTag — null), and it is a SEPARATE, TITLED CSDb tool release ('Digi Editor V2.56', 1991, CSDb 129499, programmer JCH, groups Dominators/Ikari/Vibrants) — a real digi/sample editor distinct from the NewPlayer/Editor line documented on jch-newplayer.md. Kept as its own stub card rather than merged, since no evidence ties its code/format to NewPlayer.",
    "STRONG, DIRECT EVIDENCE this tag's files ARE that tool's output: CSDb's own release page for 'Digi Editor V2.56' carries a user comment (submitted by 'Fred') stating 'The following tunes are using the player of this editor', listing three files under /MUSICIANS/J/JCH/ — Easy_does_it.sid, Little_Test.sid, Shift.sid. All THREE match, by title, three of the four locally-tagged JCH_DigiPlayer files ('Easy Does It', 'Little Test', 'Shift') — a rare case in this batch where the CSDb source names the exact tagged files, not just a plausible-sounding author match.",
    "4 files, 1 composer: JCH himself — 'Better Late Than Never', 'Easy Does It', 'Little Test', 'Shift'. The 4th file ('Better Late Than Never') is not named in the CSDb comment but is reasonably assumed to be the same tool given identical tag/author.",
    "Do not confuse with the JCH Editor v2.x/v3.x curated players (data/players.json) that front-end NewPlayer — 'Digi Editor V2.56' is a distinctly-named, distinctly-CSDb-ID'd release, not a version of that editor line."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"JCH_DigiPlayer\"",
    "CSDb scener JCH/Vibrants — release list includes 'Digi Editor V2.56' (1991): https://csdb.dk/scener/?id=626",
    "CSDb release 'Digi Editor V2.56' (JCH, 1991, groups Dominators/Ikari/Vibrants; user comment naming Easy_does_it.sid/Little_Test.sid/Shift.sid as using this editor's player): https://csdb.dk/release/?id=129499",
    "Local dataset: 4 files tagged JCH_DigiPlayer, 1 composer (JCH) — data/composers/jch.json",
    "data/composers/jch.json (profile country Denmark, csdb id 626)"
  ]
}
```

## Overview

JCH_DigiPlayer is the raw Player-ID tag for **Jens-Christian Huus's** (JCH)
digi/sample editor, a real, titled CSDb tool release — **"Digi Editor
V2.56"** (1991, CSDb release 129499) — separate from his much better
documented NewPlayer/OldPlayer/Protracker tracker line ([[jch-newplayer]],
[[jch-oldplayer]]). This is one of the strongest-evidenced cards in this
batch: CSDb's own release page for the tool carries a user comment naming
the exact SID files that use its player, and three of those four filenames
match, by title, three of the four locally-tagged `JCH_DigiPlayer` files
exactly. All 4 files belong to JCH himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is deliberately **not**
merged into `jch-newplayer` — it is a separate, titled tool with its own
CSDb release id and no evidence of shared code; (2) the CSDb source
directly names three of the four locally-tagged files as using this
editor's player, which is unusually strong corroboration for this batch.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found for
"Digi Editor V2.56" itself.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus the CSDb release page for
"Digi Editor V2.56". `status: stub` — no runtime fact has been confirmed by
disassembly or trace.

## Sources

See the `sources` array — CSDb scener page for JCH, the "Digi Editor
V2.56" release page (129499) with its file-naming user comment, and the
local composer aggregation.

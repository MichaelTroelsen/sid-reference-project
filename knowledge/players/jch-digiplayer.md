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
    "Do not confuse with the JCH Editor v2.x/v3.x curated players (data/players.json) that front-end NewPlayer — 'Digi Editor V2.56' is a distinctly-named, distinctly-CSDb-ID'd release, not a version of that editor line.",
    "Full census (4/4 files) re-confirmed directly against data/composers/jch.json: 'Better Late Than Never', 'Easy Does It', 'Little Test', 'Shift' — exactly the count and titles already on this card. No additional JCH_DigiPlayer-tagged files exist anywhere in data/composers/*.json (single-file grep across the whole directory).",
    "CSDb webservice record for release 129499 re-verified directly (not just the HTML page): Name 'Digi Editor V2.56', AKA 'Digi Editor V2.56/01.D4', Type 'C64 Tool', ReleaseYear 1991, sole Code credit JCH (handle 626); the 2014 user comment from 'Fred'/Wilfred Bos quoted verbatim matches this card's existing claim word-for-word.",
    "No open-source repository or written format spec for 'Digi Editor V2.56' was found (targeted web search across Codebase64, Lemon64, Forum64, and general web — only the unrelated JCH Editor V3.04/NewPlayer line and unrelated third-party digi players like Jeff-Birt/C64_DIGI turned up). The only artifact CSDb hosts is the original compiled tool as a D64 disk image download (see sources) — freeware distribution of the binary, not source code; licence otherwise unstated."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"JCH_DigiPlayer\"",
    "CSDb scener JCH/Vibrants — release list includes 'Digi Editor V2.56' (1991): https://csdb.dk/scener/?id=626",
    "CSDb release 'Digi Editor V2.56' (JCH, 1991, groups Dominators/Ikari/Vibrants; user comment naming Easy_does_it.sid/Little_Test.sid/Shift.sid as using this editor's player): https://csdb.dk/release/?id=129499",
    "CSDb webservice record for release 129499 (queried via scripts/lib/csdb-client.js, type=release, depth=2): confirms Name/AKA/Type/ReleaseYear/Credits/DownloadLinks/Comments fields used in this card",
    "D64 disk image of the original tool, hosted by CSDb: https://csdb.dk/getinternalfile.php/128385/Digi_Editor_V2_56-JCH.d64 (296 downloads at time of check) — the only distribution artifact found; no source code",
    "Web search (2026-08-01) for a format spec / source repo across Codebase64, Lemon64, Forum64 — no results for 'Digi Editor' by JCH; only the unrelated JCH Editor/NewPlayer line and unrelated third-party C64 digi tools surfaced",
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
"Digi Editor V2.56" itself (re-checked 2026-08-01 across Codebase64, Lemon64,
Forum64, and general web — nothing found beyond the unrelated JCH
Editor/NewPlayer line). The only distribution artifact located is CSDb's own
hosted D64 disk image of the compiled tool — a binary, not source.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus the CSDb release page for
"Digi Editor V2.56". `status: stub` — no runtime fact has been confirmed by
disassembly or trace.

## Sources

See the `sources` array — CSDb scener page for JCH, the "Digi Editor
V2.56" release page (129499) with its file-naming user comment, and the
local composer aggregation.

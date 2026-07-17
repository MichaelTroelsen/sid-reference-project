# Mac Music

```json
{
  "id": "mac-music",
  "name": "Mac Music",
  "aliases": ["MacMusic"],
  "authors": ["Phil Stone", "Jim Lombardo"],
  "released": "TODO: exact year unknown. DeepSID players.json gives start_year/end_year \"0000\" (unset); HVSC lists composer Phil Stone's active year as 1986; Wikipedia places his Passport Designs C64 work in the MIDI/2-MIDI/4 era (Passport's first MIDI products, following the 1983 MIDI spec) — consistent with a mid-1980s tool, but no exact release date was found on CSDb or elsewhere.",
  "status": "stub",
  "platform": "Native C64 music editor/tool. Built in-house at Passport Designs (a California MIDI/music-software company) — Wikipedia states Passport hired composer Phil Stone \"first to develop audio for games on the Commodore 64, and then to port MIDI applications from Apple II to Commodore\", so this looks like Stone's own C64 editor from that role rather than a scene-published tracker. DeepSID's players.json lists distribution as \"Commercial\". No evidence found either way on whether \"Mac\" in the name refers to Macintosh (i.e. a cross-platform Mac/C64 tool) or is just a name — not asserted either way.",
  "csdb_release": 44979,

  "memory": {
    "load_address": "TODO: no public source/disassembly located",
    "zero_page": "DeepSID players.json field 'zero_pages': \"28 bytes in the $60-$7F range\" — cited as-is, not independently verified via disassembly",
    "layout": "TODO: order list / patterns / table addresses — not documented publicly"
  },
  "entry": {
    "init": "TODO: per-file (would need a PSID header read or disassembly) — an earlier automated web fetch produced specific load/init/play numbers for this release but could not be reproduced on a second, more targeted fetch of the same CSDb page, so those figures were discarded as unreliable rather than recorded",
    "play": "TODO: per-file (PSID header); no aggregate figure found"
  },
  "speed": "TODO: no public source/disassembly located",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public source/disassembly located",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Composer concentration in this dataset (HVSC MUSICIANS\\ tree only, per data/composers/*.json): 20 files, ALL by a single composer, Phil Stone — 100% concentration, the strongest possible personal/in-house-tool signal (cf. the family's own rule of thumb: ≤~12 composers or one dominant name means a small-scene or personal routine, not a widely-adopted tool).",
    "All 20 files are cover versions of famous 1980s pop/rock songs (Billie Jean, Every Breath You Take, Hey Jude, Chariots of Fire, Hungry Like the Wolf, etc. — see data/hvsc/STIL.txt, /MUSICIANS/S/Stone_Phil/), consistent with demo/promotional tunes for a commercial editor rather than scene compositions.",
    "Two distinct CSDb entries exist for what is apparently the same physical disk: release id 44979, titled \"Mac Music\" (type \"C64 Tool\", also known as \"isepic Mac Music\", authorship \"Phil Stone & Jim Lombardo\" per text inside the program, containing exactly these same 10 tune titles), and release id 117250, also titled \"Mac Music\" but typed as a \"C64 Crack\" credited to the group \"Antisoft Inc.\" — almost certainly a warez crack/redistribution of the same tool disk. SIDId's sidid.nfo `reference` field points at 117250 (the crack), not 44979 (the tool entry); this card's `csdb_release` instead points at 44979 since it is the actual tool/editor release.",
    "HVSC's Musicians.txt lists the composer as \"Stone, Phil / Passport Designs - USA\" (data/hvsc/Musicians.txt) — a real, independently-documented company affiliation, not a scene group. Wikipedia's Passport Designs article corroborates this: Passport hired Phil Stone to develop Commodore 64 game audio and to port its MIDI applications from Apple II to Commodore 64.",
    "No public source code, format documentation, manual, or Codebase64/scene article was found anywhere searched (CSDb, Codebase64, Wikipedia, general web) — every runtime fact (memory map, entry points, data format, effects) remains genuinely unknown rather than guessed.",
    "An earlier CSDb-page fetch briefly returned a plausible-looking SID technical table (load 39424 / init 39424 / play 39474, 6581/NTSC) for this release; a second, more targeted fetch of the same page found no such table present at all. Treated as a fabrication of the fetch tool's summarizer, not a real fact, and deliberately NOT recorded in `entry`/`memory` above."
  ],
  "sources": [
    "DeepSID players.json curated entry 'Mac Music' (search 'macmusic', developer 'Phil Stone|Jim Lombardo', csdb_id 44979, platform 'Native / C64 emulator', distribution 'Commercial', zero_pages '28 bytes in the $60-$7F range') — data/players.json",
    "sidid:MacMusic (reference https://csdb.dk/release/?id=117250; no name/author/released fields present) — data/sidid.json",
    "CSDb release 'Mac Music' (C64 Tool, AKA 'isepic Mac Music', 10 attached tunes, credited Phil Stone & Jim Lombardo): https://csdb.dk/release/?id=44979",
    "CSDb release 'Mac Music' (C64 Crack, group Antisoft Inc.): https://csdb.dk/release/?id=117250",
    "HVSC Musicians.txt: 'Stone, Phil / Passport Designs - USA' — data/hvsc/Musicians.txt (line ~1591)",
    "HVSC STIL.txt: /MUSICIANS/S/Stone_Phil/ section, 10+ cover-song titles — data/hvsc/STIL.txt (line ~92833)",
    "Wikipedia, 'Passport Designs': https://en.wikipedia.org/wiki/Passport_Designs — \"Composer Phil Stone was also hired at this time, first to develop audio for games on the Commodore 64, and then to port MIDI applications from Apple II to Commodore.\"",
    "Local dataset: 20 files tagged 'MacMusic', all by composer Phil Stone (data/composers/phil-stone.json)"
  ]
}
```

## Overview

Mac Music is a native Commodore 64 music editor/tool credited to Phil Stone and
Jim Lombardo, distributed on a disk (also containing 10 demo tunes) that
surfaces on CSDb both as the original "C64 Tool" release (id 44979) and as a
later warez crack by "Antisoft Inc." (id 117250). Composer Phil Stone is
independently documented by HVSC's Musicians.txt as affiliated with "Passport
Designs", a real California MIDI/music-software company — and Wikipedia's
Passport Designs article confirms Passport hired Stone specifically to
develop Commodore 64 game audio and to port its MIDI applications from Apple
II to Commodore 64. In this project's local HVSC-derived dataset, all 20
`MacMusic`-tagged files are by Phil Stone alone (100% composer concentration)
and are all cover versions of well-known 1980s pop/rock songs — the profile of
a personal/in-house demo tool built for one composer's own use, not a widely
adopted scene tracker.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: **100% single-composer
concentration** (20/20 files, Phil Stone) is the strongest possible signal
this is a personal or company-internal tool rather than a published one; the
CSDb presence **splits across a genuine tool release (44979) and a later
crack (117250)**, and SIDId's own reference points at the crack, not the
tool entry; and a real, citable **Passport Designs connection** (Wikipedia)
explains who built this and why, even though no format documentation exists.
One negative result is also recorded: an early web fetch produced a
plausible-looking PSID technical-data table for this release that could not
be reproduced on a second, more careful fetch — treated as unreliable and
discarded rather than written into the card.

## Disassembly notes

None. No public source, format documentation, or disassembly of Mac Music was
located. A future pass would need to obtain a representative `MacMusic`-tagged
`.sid` (init/play addresses from its PSID header) and disassemble/trace it
through `sidm2-siddump` — the only route to real memory-map/format facts,
since no source or manual exists.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (authors,
CSDb releases, the Passport Designs company affiliation, commercial
distribution, local usage stats) are confirmed, from DeepSID's curated
`players.json`, SIDId's `sidid.nfo`, CSDb, HVSC's Musicians.txt/STIL.txt, and
Wikipedia. Every Tier 3 runtime field is `TODO` except one DeepSID-sourced
approximate figure (zero-page footprint), which is cited but not
independently verified — an honest gap rather than a guessed memory map.

## Sources

See the `sources` array — DeepSID's curated `players.json` entry, SIDId's
`sidid.nfo`, two CSDb release pages (tool + crack), HVSC's `Musicians.txt` and
`STIL.txt`, the Wikipedia article on Passport Designs, and this project's own
local composer-file aggregate (`data/composers/phil-stone.json`,
`knowledge/COVERAGE.md`).

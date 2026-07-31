# Anvil

<!--
  Player-ID / SIDId tag: "Anvil" — Petri Reiman's own hand-coded personal
  routine (100% self-authored in this dataset), not a distributed tool.
-->

```json
{
  "id": "anvil",
  "name": "Anvil",
  "aliases": ["Anvil"],
  "authors": ["Petri Reiman (Anvil)"],
  "released": "TODO: no release year documented for the tool itself (no distinct player/tool release exists on CSDb). Earliest attested use, from a 2026-07-31 census of the CSDb SID entry for all 20 Anvil-tagged files' own `Released` field (not UsedIn-release years): 1990 (\"Undead\", CSDb SID 45151, Released \"1990 Anvil\" — https://csdb.dk/sid/?id=45151). Latest attested use: 1993 (\"Fresh'n Sticky #7 (tune 10)\", CSDb SID 45152, and \"Graveyard Blues 3\" tunes 3/5, CSDb SID 7887/7888, all \"1993 Topaz Beerline\"). One file's own Released field is unresolved (\"Words by d'Arc\", CSDb SID 7899, literally \"19?? Topaz Beerline\"). So the routine was in use 1990-1993, per the tunes' own CSDb-recorded release dates, not the tool's own (undocumented) release date.",
  "status": "stub",
  "platform": "Native C64 playback routine, embedded in-sit-in each SID file — not a separately distributed tracker or editor. The 100% single-composer concentration (all 20 Anvil-tagged files are by Petri Reiman himself) strongly suggests a personal hand-coded routine rather than a published tool. A 2005 CSDb forum post (Twoflower, \"Music Editors - The Holy Grail\") refers to it as one of the \"stranger systems\" and \"odd ones gathering dust\" that the poster had heard of but never examined — consistent with a personal routine that was known to exist but never publicly released as a standalone tool.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no public disassembly or source found",
    "zero_page": "TODO: no public disassembly or source found",
    "layout": "TODO: no public disassembly or source found"
  },
  "entry": {
    "init": "TODO: no public disassembly or source found",
    "play": "TODO: no public disassembly or source found"
  },
  "speed": "TODO: no public disassembly or source found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public disassembly or source found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "100% personal-routine concentration: all 20 files in the collection tagged player \"Anvil\" are composed by Petri Reiman (Anvil) himself — the tool's own author — per data/composers/anvil.json. No other composer in the dataset uses this tag. Textbook signal (per this project's own heuristic in CLAUDE.md/COVERAGE.md) for a composer's own hand-coded playback routine rather than a published, widely-adopted tracker.",
    "SIDId's sidid.nfo entry for this tag is minimal: only `AUTHOR: Petri Reiman (Anvil)` — no `released`, `reference` (CSDb release id), or `comment` field, unlike ~66 other SIDId-documented tags that carry a playback-technique note.",
    "Do not confuse with unrelated files that happen to share the title \"Anvil\": data/composers/andrew-rodger.json has a tune literally named \"Anvil.sid\" (by Drew Rodger, 1990, CSDb release 139475, tagged player \"Matt_Gray\"), and data/composers/josstintimberlake.json has \"Anvil_of_Doom.sid\" tagged \"GoatTracker_V1.x\" — coincidental title matches, not the Petri Reiman playback tool.",
    "No CSDb release entry, Codebase64 article, or format documentation found for the tool itself; CSDb does have a scener profile and release credits for Petri Reiman/Anvil as a composer (id 318), but nothing describing an \"Anvil\" player/editor as a distinct released tool. A 2005 CSDb forum post (Twoflower, \"Music Editors - The Holy Grail\" thread) describes it as one of the \"stranger systems\" the poster had heard about but never examined — the only external mention of the routine found.",
    "DeepSID's curated players.json has no entry for \"Anvil\" — it is an inferred player (from raw file tags), not one of the 129 curated DeepSID entries.",
    "Composer Petri Reiman was also active under the handle \"Usurper\" (per his CSDb scener profile, id 318). 19 of his other 39 files in this dataset use \"FutureComposer_V1.0\" as player — he used multiple tools; the Anvil routine is one of at least two playback systems he employed.",
    "Re-research pass, 2026-07-31: censused all 20 Anvil-tagged files' own CSDb SID-entry `Released` field (not a UsedIn-release year) via scripts/lib/csdb-client.js `type=sid`. Corrects a prior-pass error: the original card text said the tunes 'span 1992 ... through at least 1997 (Undead, CSDb SID 45151)' — CSDb SID 45151's own Released field is actually \"1990 Anvil\", not 1997; there is no 1997 file in this set. Full span per the census: 1990 (Undead, SID 45151, \"1990 Anvil\") through 1993 (three files tagged \"1993 Topaz Beerline\": Fresh'n Sticky #7 tune 10/SID 45152, Graveyard Blues 3 tunes 3 and 5/SID 7887,7888); one file (Words by d'Arc, SID 7899) has an unresolved year in CSDb itself (\"19?? Topaz Beerline\"). Note the 1990 \"Anvil\" credit on Undead is the release's own author-attribution field (matching the composer's own handle, no separate CSDb group id resolved for it) — not evidence of a CSDb group distinct from the composer. Also checked: CSDb group search and web search (Lemon64, Forum64) for an \"Anvil\" C64 music editor/player turned up nothing beyond what the original pass found (the 2005 Twoflower forum post, and Reiman's own composer credits); no new lineage or release evidence surfaced. csdb_release remains null — no CSDb release entry describes the tool itself, only music/demo releases crediting Reiman as composer."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag.\"Anvil\" (author only, no release/reference/comment)",
    "knowledge/COVERAGE.md: Anvil family is fully carded (20 files), removed from the uncarded table once the original card was written",
    "data/composers/anvil.json: composer profile (Petri Reiman, Finland, active 1993, CSDb scener id 318) and per-file player tags — confirms all 20 Anvil-tagged files are self-authored",
    "data/composers/andrew-rodger.json, data/composers/josstintimberlake.json: confirm the two title-coincidence files use different players (Matt_Gray, GoatTracker_V1.x)",
    "SIDId raw source (sidid.nfo), fetched directly: https://github.com/cadaver/sidid/blob/master/sidid.nfo — entry is exactly \"Anvil / AUTHOR: Petri Reiman (Anvil)\", no other fields",
    "CSDb scener profile for Petri Reiman (Anvil): https://csdb.dk/scener/?id=318 — lists group memberships (Topaz Beerline, Motion, Death Sector, Sodom, founder of Overdrive) and music credits 1989-2012, but no mention of an authored player/routine. Also confirms the \"Usurper\" handle.",
    "CSDb forum post by Twoflower (2005-08-25, \"Music Editors - The Holy Grail\"): https://csdb.dk/forums/index.php?roomid=14&topicid=17384&showallposts=1 — refers to \"the player used by Anvil/Topaz\" as one of the \"stranger systems\" and \"odd ones gathering dust\" worth examining; the only known external reference to the routine.",
    "CSDb music release \"Anvil\" (id 139475): https://csdb.dk/release/?id=139475 — NOT the Anvil player/routine, but a C64 Music tune by Drew Rodger (1990, player: Matt Gray); confirmed as a title-coincidence, not the Petri Reiman tool.",
    "CSDb search for an \"Anvil\" player/tool release: no result — only music/demo releases crediting Petri Reiman as composer",
    "2026-07-31 census (CSDb webservice, type=sid, all 20 Anvil-tagged CSDb SID ids: 7883,7884,7885,7887,7888,7889,7890,7891,7892,7893,7894,7896,7897,7898,7899,37787,39097,45151,45152,49078) via scripts/lib/csdb-client.js — each entry's own `Released` field read directly, not a UsedIn-release year; earliest 1990 (SID 45151 \"Undead\"), latest 1993 (SID 45152, 7887, 7888), one unresolved (SID 7899 \"19??\")",
    "WebSearch, 2026-07-31: \"Anvil\" player/editor + Petri Reiman, queried against Lemon64 and Forum64 by name as required — no results beyond generic C64-music-editor forum threads and the composer's own tune credits; no new lineage evidence found"
  ]
}
```

## Overview

"Anvil" is the SIDId/Player-ID signature name for a playback routine that
appears exclusively in the 20 HVSC-tagged tunes composed by Petri Reiman,
better known by his scene handle Anvil — a Finnish scener (CSDb id 318,
active since the late 1980s/1990s, member of Topaz Beerline, Motion, Death
Sector, and Sodom, and founder of Overdrive, also using the handle Usurper).
Every single file carrying this player tag in the local dataset is his own
composition (`data/composers/anvil.json`), which is the strongest available
signal that this is a composer's own hand-written C64-native playback
routine rather than a distributed tracker or editor used by other musicians.

No CSDb release, manual, or source repository documents the tool itself, and
SIDId's own entry carries only the author's name. A 2005 CSDb forum post
(by Twoflower, in the "Music Editors - The Holy Grail" thread) refers to it
as one of the "stranger systems" the poster had heard about but never examined
— the only known external mention of the routine, and itself evidence of the
player's obscurity. DeepSID's curated players.json has no entry.

A 2026-07-31 census of all 20 Anvil-tagged CSDb SID entries' own `Released`
fields (not UsedIn-release years) puts the routine's attested use span at
1990 (Undead, CSDb SID 45151, "1990 Anvil") through 1993 (three tunes marked
"1993 Topaz Beerline"); one file's own CSDb record has an unresolved year
("19??"). This corrects an earlier pass's error, which had misread SID
45151's release year as 1997. Petri Reiman also used FutureComposer V1.0 for
19 other tunes in his composer folder; the Anvil routine was one of at least
two playback systems he worked with.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) 100% single-composer
concentration is direct evidence this is a personal routine, not a
published tool; (2) two unrelated files elsewhere in the collection happen
to be *titled* "Anvil" but use completely different players (`Matt_Gray`,
`GoatTracker_V1.x`) — do not let a title match stand in for a player-tag
match; (3) SIDId's own record for this tag is the bare minimum (author
name only), consistent with no public documentation existing; (4) a 2005
CSDb forum post confirms the routine was known to exist among scene
musicians (as "the player used by Anvil/Topaz") but was considered obscure
even then — nobody in that thread had examined it either.

## Disassembly notes

None. No source or public disassembly was found for this routine, and none
was attempted here (Tier 2 provenance research only, per this card's scope).
A future pass could pick a representative Anvil-tagged `.sid` (e.g.
`Assembly_92_Compotune.sid`) and disassemble its init/play from the PSID
header the way native players are handled — that is the only route to real
memory/format facts, since no source is available.

## Verification

**Not verified — `status: stub`.** Only identity facts (author, the
composer's CSDb/HVSC profile, and the 100%-self-use concentration) are
confirmed, from `data/composers/anvil.json`, `data/sidid.json`, and CSDb.
Every runtime field is honestly `TODO`: no memory map, entry point, or data
format was found or guessed.

## Sources

See the `sources` array — the local SIDId import, `knowledge/COVERAGE.md`,
the composer JSON records that establish the 100% self-use concentration,
the raw `sidid.nfo` source, the CSDb scener profile and forum post, and a
CSDb search confirming no distinct tool release exists for this tag.

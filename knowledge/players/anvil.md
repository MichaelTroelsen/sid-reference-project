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
  "released": "TODO: no release year documented for the tool itself. SIDId's sidid.nfo entry has no `released` field; the composer's HVSC/CSDb profile lists `active: 1993` (Finland), but that is the composer's scene-activity marker, not a dated player release. His earliest CSDb music credit is 1989; the Anvil-tagged files span 1992 (Assembly'92 Compotune, CSDb SID 7883) through at least 1997 (Undead, CSDb SID 45151), so the routine was in active use by 1992.",
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
    "Composer Petri Reiman was also active under the handle \"Usurper\" (per his CSDb scener profile, id 318). 19 of his other 39 files in this dataset use \"FutureComposer_V1.0\" as player — he used multiple tools; the Anvil routine is one of at least two playback systems he employed."
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
    "CSDb search for an \"Anvil\" player/tool release: no result — only music/demo releases crediting Petri Reiman as composer"
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

The 20 Anvil-tagged tunes span at least 1992 (Assembly'92 Compotune) through
roughly 1997 (Undead). Petri Reiman also used FutureComposer V1.0 for 19 other
tunes in his composer folder; the Anvil routine was one of at least two
playback systems he worked with.

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

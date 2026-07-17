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
  "released": "TODO: no release year documented for the tool itself. SIDId's sidid.nfo entry has no `released` field; the composer's HVSC/CSDb profile lists `active: 1993` (Finland), but that is the composer's scene-activity marker, not a dated player release.",
  "status": "stub",
  "platform": "TODO: not documented. All 20 Anvil-tagged files in the dataset are authored by Petri Reiman himself (see quirks) — consistent with a composer's own hand-coded C64-native playback routine rather than a published/distributed tracker, but no source, manual, or author statement confirms this.",
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
    "SIDId's sidid.nfo entry for this tag is minimal: only `AUTHOR: Petri Reiman (Anvil)` — no `released`, `reference` (CSDb release id), or `comment` field, unlike ~66 other SIDId-documented tags that carry a playback-technique note. Confirmed by fetching the raw sidid.nfo source directly.",
    "Do not confuse with unrelated files that happen to share the title \"Anvil\": data/composers/andrew-rodger.json has a tune literally named \"Anvil.sid\" but tagged player \"Matt_Gray\", and data/composers/josstintimberlake.json has \"Anvil_of_Doom.sid\" tagged \"GoatTracker_V1.x\" — coincidental title matches, not the same playback tool.",
    "No CSDb release entry, Codebase64 article, or format documentation found for the tool itself (searched csdb.dk directly); CSDb does have a scener profile and release credits for Petri Reiman/Anvil as a composer (id 318), but nothing describing an \"Anvil\" player/editor as a distinct released tool."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag.\"Anvil\" (author only, no release/reference/comment)",
    "knowledge/COVERAGE.md row 12: 20 files, raw tag \"Anvil\", uncarded at time of writing",
    "data/composers/anvil.json: composer profile (Petri Reiman, Finland, active 1993, CSDb scener id 318) and per-file player tags — confirms all 20 Anvil-tagged files are self-authored",
    "data/composers/andrew-rodger.json, data/composers/josstintimberlake.json: confirm the two title-coincidence files use different players (Matt_Gray, GoatTracker_V1.x)",
    "SIDId raw source (sidid.nfo), fetched directly: https://github.com/cadaver/sidid/blob/master/sidid.nfo — entry is exactly \"Anvil / AUTHOR: Petri Reiman (Anvil)\", no other fields",
    "CSDb scener profile for Petri Reiman (Anvil): https://csdb.dk/scener/?id=318 — lists group memberships (Topaz Beerline, Motion, Death Sector, Sodom, founder of Overdrive) and music credits 1989-2012, but no mention of an authored player/routine",
    "CSDb search for an \"Anvil\" player/tool release: no result (https://csdb.dk/search/) — only music/demo releases crediting him as composer (e.g. \"Best of Anvil\" by Death Sector, 1991, https://csdb.dk/release/?id=23598)"
  ]
}
```

## Overview

"Anvil" is the SIDId/Player-ID signature name for a playback routine that
appears exclusively in the 20 HVSC-tagged tunes composed by Petri Reiman,
better known by his scene handle Anvil — a Finnish scener (CSDb id 318,
active since the late 1980s/1990s, member of Topaz Beerline, Motion, Death
Sector, and Sodom, and founder of Overdrive). Every single file carrying
this player tag in the local dataset is his own composition
(`data/composers/anvil.json`), which is the strongest available signal that
this is a composer's own hand-written C64-native playback routine rather
than a distributed tracker or editor used by other musicians. No CSDb
release, manual, or source repository documents the tool itself, and
SIDId's own entry carries only the author's name.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) 100% single-composer
concentration is direct evidence this is a personal routine, not a
published tool; (2) two unrelated files elsewhere in the collection happen
to be *titled* "Anvil" but use completely different players (`Matt_Gray`,
`GoatTracker_V1.x`) — do not let a title match stand in for a player-tag
match; (3) SIDId's own record for this tag is the bare minimum (author
name only), consistent with no public documentation existing.

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
the raw `sidid.nfo` source, and the CSDb scener profile / search confirming
no distinct tool release exists for this tag.

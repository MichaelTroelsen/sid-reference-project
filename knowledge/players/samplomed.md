# Samplomed

```json
{
  "id": "samplomed",
  "name": "Samplomed",
  "aliases": ["Samplomed"],
  "authors": ["TODO: no author credited anywhere found — see quirks"],
  "released": "TODO: year unknown (files in the collection are dated 1997 (Astovel solo) and later Astovel & Ksin co-productions; not a confirmed tool release date)",
  "status": "stub",
  "platform": "TODO: not documented anywhere found — presumed native C64 (files play as .sid), but no source/manual located",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly done",
    "zero_page": "TODO: no disassembly done",
    "layout": "TODO: no disassembly done"
  },
  "entry": {
    "init": "TODO: no disassembly done",
    "play": "TODO: no disassembly done"
  },
  "speed": "TODO: no disassembly done",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly done",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Not in SIDId's sidid.nfo (data/sidid.json byTag has no 'Samplomed' key — checked directly) and not in the curated data/players.json (129 DeepSID entries) — this is a raw DeepSID-dump player tag with zero cross-referenced metadata anywhere in this project's local data.",
    "Extreme composer concentration: ALL 11 tagged files in the collection are by a single composer, Astovel (Piotr Wojciechowski, Poland, HVSC MUSICIANS/A/Astovel — see data/composers/astovel.json). 5 are solo, 6 are co-credited 'Astovel & Ksin'. Per the project's concentration heuristic (single-composer families are 'likely a personal/small-scene routine'), this reads as Astovel's own routine rather than a published, widely-adopted tool.",
    "One tagged file is explicitly titled 'Trance (digi)' and DeepSID's per-file player_type is the constant 'Normal built-in' for all of them (uninformative — see CLAUDE.md note on this field) — consistent with, but not proof of, a sample/digi-playback player rather than a tone-only tracker; the name 'Samplomed' itself plausibly reads as sample-related but no source ties the name to a documented tool, so this is not asserted as fact.",
    "Extensive web research (CSDb full-text search, WebSearch, Player-ID's own README on GitHub) found zero hits for the string 'Samplomed' anywhere outside this project's dataset. Astovel's CSDb scener page (id 3911) lists real tool credits — 'Music Toolz' (1995 and 1997, Tengu), 'Total Sinus Editor', 'Raster Master V2.0', 'Font Designer V1.0' — but none of those release titles or descriptions mention 'Samplomed', so no edge is asserted to any of them.",
    "The 11 tagged .sid files themselves (e.g. csdb.dk/sid/?id=55815 'Breathe') carry no player/tool credit on their own CSDb SID-entry pages either — checked directly."
  ],
  "sources": [
    "Local dataset: data/composers/astovel.json — 11 files tagged 'Samplomed', all by Astovel (solo or with Ksin); knowledge/COVERAGE.md rank #15, 11 files, single grouped raw tag 'Samplomed'",
    "data/sidid.json byTag — checked, no 'Samplomed' entry (negative result, cited as a fact above)",
    "data/players.json — checked, no 'Samplomed' curated entry; the only 'samplomed' string in that file is an unrelated search-exclusion regex on 'The Advanced Music Programmer' entry (excludes false 'amp' substring matches)",
    "CSDb scener profile, Astovel (Piotr Wojciechowski), id 3911: https://csdb.dk/scener/?id=3911 — full release/tool credit list checked, no 'Samplomed' mention",
    "CSDb SID entry, 'Breathe' by Astovel, id 55815: https://csdb.dk/sid/?id=55815 — no player credited",
    "CSDb search (https://csdb.dk/search/) for 'Samplomed': zero results",
    "Player-ID project README (github.com/WilfredC64/player-id): zero mentions of 'Samplomed'"
  ]
}
```

## Overview

Samplomed is a raw DeepSID-dump player-identification tag with no corroborating
metadata anywhere: it is absent from SIDId's `sidid.nfo`, absent from the
curated `data/players.json` (DeepSID's 129-entry player list), and no web
search (CSDb full-text search, general web search, the Player-ID tool's own
README) turned up the string anywhere outside this project. What IS known
comes entirely from the local dataset: all 11 tagged files in the HVSC-derived
collection belong to a single composer, Astovel (Piotr Wojciechowski, Poland,
CSDb scener id 3911), five solo and six co-credited "Astovel & Ksin" — a
concentration pattern this project's own heuristic reads as a personal or
small-scene routine rather than a widely-published tool. Astovel's CSDb
profile lists real tool-coding credits (Music Toolz 1995/1997, Total Sinus
Editor, Raster Master, Font Designer) but none of their titles or on-CSDb
descriptions mention "Samplomed", so no lineage edge is asserted.

## Quirks & gotchas

See the `quirks` array. The load-bearing point: this card exists to record a
genuine dead end honestly, not to guess one. Every avenue this project's
Tier 2 process normally uses (SIDId, curated players.json, CSDb release/scener
pages, general search) came back empty for the name itself; the only solid
ground is the Tier 1 usage data (composer, file count, dates) already in this
repo.

## Disassembly notes

None. No source or public disassembly was located to read. A future pass
could disassemble one of the 11 tagged `.sid` files directly (e.g. "Breathe",
csdb.dk/sid/?id=55815) via its PSID header init/play addresses and trace it
through `sidm2-siddump` — that is the only remaining route to real memory/
format facts, since no name-based documentation exists.

## Verification

**Not verified — `status: stub`.** Not even a platform claim is confirmed;
"native C64" is a reasonable presumption (the files are playable `.sid`s) but
not backed by any source or manual, so it is marked `TODO` rather than
asserted. Only the Tier 1 usage facts (composer, file count, co-credits) are
solid, cited directly from `data/composers/astovel.json`.

## Sources

See the `sources` array — the local dataset (`data/composers/astovel.json`,
`data/sidid.json`, `data/players.json`, `knowledge/COVERAGE.md`) and the CSDb
pages checked (scener 3911, sid entry 55815, and a direct CSDb search), all of
which are negative results for the name "Samplomed" itself, cited as such.

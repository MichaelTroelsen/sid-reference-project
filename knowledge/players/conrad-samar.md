# Conrad/Samar

```json
{
  "id": "conrad-samar",
  "name": "Conrad/Samar",
  "aliases": ["Conrad/Samar"],
  "authors": ["Owen Crowley (Conrad)"],
  "released": "2013 (per the tagged SID's own CSDb Released field: \"2013 Samar Productions\" — https://csdb.dk/sid/?id=49348; this is the tune's attested release year, not a documented tool/editor release date)",
  "status": "stub",
  "platform": "Native C64, in-house/custom routine embedded in a single game — not a released standalone editor/tool. \"Samar\" = Samar Productions (group SMR), the C64 game studio that made the Bomberland game; Conrad (Owen Crowley) is credited as Music on its CSDb release page (Code/Graphics: Skull). No CSDb tool/player entry exists for \"Conrad/Samar\" itself. Confirmed via https://csdb.dk/release/?id=113464 and https://csdb.dk/sid/?id=49348",
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
    "SIDId's sidid.nfo carries only an AUTHOR line — 'Owen Crowley (Conrad)' — no NAME/RELEASED/REFERENCE/COMMENT.",
    "Single-file, single-composer locally: the one tagged file ('Bomberland', CSDb sid id 49348) is by 'Owen Crowley' himself, handle Conrad (England, active 2025 per HVSC — data/composers/owen-crowley.json), consistent with a personal, in-house routine.",
    "'Samar' now confirmed (not just folded-in text) — Samar Productions (group tag SMR) is a real CSDb-registered C64 group, credited on the CSDb release page for the game Bomberland (https://csdb.dk/release/?id=113464): Code/Graphics by Skull (FanCA, Samar Productions), Music by Conrad (Onslaught, Samar Productions, Viruz). So 'Conrad/Samar' names the composer + the group/game he wrote it for, not a distributed tool.",
    "Bomberland is a Bomberman-style C64 game: Samar Productions released a 'Bomberland Preview' on 2012-12-08 (CSDb release 113464), and the finished game was subsequently distributed as scene 'cracks' by other groups (Genesis Project, Onslaught, Triad, Master) through 2013-2014 (found via https://csdb.dk/search/?search=Bomberland — no single canonical 'full game' release by Samar Productions itself was found).",
    "The tagged file 'Bomberland.sid' (final game, 18 subtunes, CSDb id 49348) is NOT the same file as 'Bomberland_preview.sid' (CSDb id 47814) in the local dataset — the preview build is tagged GoatTracker_V2.x, while only the final game's soundtrack carries the 'Conrad/Samar' Player-ID tag. This is consistent with the final game embedding a bespoke/in-house routine rather than shipping GoatTracker's own player.",
    "csdb_release intentionally left null: no 'Used in' release listing could be confirmed for CSDb sid id 49348 via WebFetch, and none of the crack releases found could be tied to this specific file/routine without guessing — recording null rather than picking a plausible-looking release id."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 1 file tagged Conrad/Samar ('Bomberland'), by composer 'Owen Crowley' — data/composers/owen-crowley.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, Conrad / Owen Crowley (England): https://csdb.dk/scener/?id=21879",
    "CSDb webservice, SID entry id 49348 ('Bomberland'): https://csdb.dk/sid/?id=49348 — Released: '2013 Samar Productions', LoadAddr $1000, 18 subtunes (queried via scripts/lib/csdb-client.js getSidRelease)",
    "CSDb release id 113464 ('Bomberland Preview', Samar Productions, 2012-12-08 — credits Code/Graphics: Skull, Music: Conrad): https://csdb.dk/release/?id=113464",
    "CSDb search for 'Bomberland' releases (game preview + crack chain 2012-2014): https://csdb.dk/search/?search=Bomberland"
  ]
}
```

## Overview

Conrad/Samar is a SIDId Player-ID tag attributed to **Owen Crowley**,
handle **Conrad**, an English scener. "Samar" is confirmed as **Samar
Productions** (group tag SMR), the C64 group behind the Bomberman-style
game *Bomberland* — Conrad is credited as its Music on CSDb
(release 113464), alongside Skull as Code/Graphics. SIDId's own record is
author-only, with no title, release date, or CSDb reference. Locally the
tag appears in only **1 file**, "Bomberland" (CSDb sid id 49348, the
finished game's 18-subtune soundtrack, Released "2013 Samar Productions"
per CSDb), by Owen Crowley himself (data/composers/owen-crowley.json).
The tag reads as "the routine Conrad wrote for Samar['s game]", i.e. a
bespoke in-house routine for one production, not a released standalone
editor — no CSDb tool/player entry exists under this name.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's record is author-only;
(2) "Samar" is now confirmed as Samar Productions (SMR), credited on
CSDb release 113464, not just an unverified guess; (3) single-file,
single-composer usage, and that file is specifically the finished game's
soundtrack (id 49348) — a companion "preview" file for the same game
(id 47814) is tagged GoatTracker instead, showing the bespoke routine
was introduced later, in the shipped game.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/owen-crowley.json`,
`data/sidid.json`, a CSDb scener-page check, and CSDb webservice/release
lookups for the tagged file and the Bomberland game (see `sources`).
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer aggregation,
and the CSDb scener profile for Conrad/Owen Crowley.

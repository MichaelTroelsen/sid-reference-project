# Hörnell/Players (Karl Hörnell's in-house driver for Interceptor's "Players" label)

```json
{
  "id": "hoernell-players",
  "name": "Hörnell/Players (Karl Hörnell's in-house driver for Interceptor's \"Players\" label)",
  "aliases": ["?Hoernell/Players"],
  "authors": ["Karl Hörnell — inferred from the tag name; not independently confirmed as the routine's actual author"],
  "released": "1986 — all 5 census files carry CSDb's own SID-header 'Released' field '1986 Players' (SID ids 14249, 14252, 14253, 14254, 30092, queried via csdb.dk/webservice type=sid)",
  "status": "stub",
  "platform": "Native C64 in-house game-music driver, not a distributed editor or separately released tool. Confirmed two ways: (1) English Wikipedia's Karl Hörnell article states 'He started from scratch with each game, besides the code for playing music, which he reused for convenience' — a direct statement of a reused, non-distributed in-house routine; (2) CSDb's own SID metadata shows PlayAddr=49232 identical across 4 of the 5 census files (Ronald Rubberduck, Velocipede, Velocipede II, Fungus — only Clean Up Time differs, PlayAddr=37376), consistent with the same driver binary reused near-verbatim across titles. 'Players' in the tag name is Interceptor Software's budget publishing label he released through, not a music-tracker product — c64-wiki.de and en.wikipedia.org both name it explicitly.",
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
    "5 files, 2 composers: Karl Hörnell himself (4 — Clean Up Time, Ronald Rubberduck, Velocipede, Velocipede II) and Johan Vessby (1 — Fungus, credited jointly 'Johan Vessby & Karl Hörnell' in the local author field). c64-wiki.de's Karl Hörnell biography lists Clean-Up (Time), the two Velocipede games, Ronald Rubberduck, and Fungus among his published titles — a title-for-title match to this dataset's file list.",
    "c64-wiki.de states Hörnell's games were published through 'Players', Interceptor Software's budget label — he and a friend sent Interceptor fan mail with a game demo around age 14-15, leading to the publishing deal — direct, sourced corroboration for the 'Players' half of this tag's name, independent of SIDId (which has no entry for this tag at all).",
    "Johan Vessby's single co-credited file ('Fungus') suggests informal collaboration on that one title rather than Vessby independently adopting a separately published tool.",
    "No SIDId entry exists for '?Hoernell/Players' (checked data/sidid.json directly) — the '?' prefix marks this as one of DeepSID/SIDId's own low-confidence tag matches, the same convention documented on [[msb]] and [[unknown-c64-driver]].",
    "csdb_release deliberately left null, not just unfilled: no SIDId entry exists to supply a reference id, and there is no separate CSDb 'release' for the driver itself — only per-game release entries for the titles it powers (Clean Up Time id 14249, Ronald Rubberduck id 14252, Velocipede id 14253, Velocipede II id 14254, Fungus id 30092, each a CSDb *sid* id, not a release id). An in-house per-game driver has nothing to point csdb_release at.",
    "CSDb's own SID-header 'Released' field reads '1986 Players' identically on all 5 census files (via csdb.dk/webservice type=sid) — direct corroboration, independent of c64-wiki.de, for both the 1986 date and the 'Players' publisher name.",
    "PlayAddr is identical (49232) across 4 of the 5 census files — Ronald Rubberduck, Velocipede, Velocipede II, Fungus — per CSDb's SID metadata; only Clean Up Time differs (37376). This is PSID header metadata, not a disassembly fact, but it corroborates 'reused driver' rather than 'per-game bespoke code'.",
    "English Wikipedia's Karl Hörnell article states directly: 'He started from scratch with each game, besides the code for playing music, which he reused for convenience' — a primary-source confirmation that the music code was a genuine reused in-house routine, not independently written per title."
  ],
  "sources": [
    "c64-wiki.de — Karl Hörnell (biography, 'Players'/Interceptor Software publishing deal, gameography matching Clean-Up, Velocipede x2, Ronald Rubberduck, Fungus, Toadforce, Fruity, Rocket Smash): https://www.c64-wiki.de/wiki/Karl_H%C3%B6rnell",
    "English Wikipedia — Karl Hörnell (Interceptor's 'Players' budget label starting with Fruity; 'reused' music code across games): https://en.wikipedia.org/wiki/Karl_H%C3%B6rnell",
    "CSDb webservice, type=sid, depth=3, ids 14249/14252/14253/14254/30092 (Released field, LoadAddr/InitAddr/PlayAddr header metadata): https://csdb.dk/webservice/?type=sid&id=14249 (and 14252, 14253, 14254, 30092)",
    "Local dataset: data/composers/karl-hoernell.json (4 files), data/composers/johan-vessby.json (1 file); knowledge/COVERAGE.md rank #26",
    "data/sidid.json byTag — checked, no entry for '?Hoernell/Players'"
  ]
}
```

## Overview

`?Hoernell/Players` is a raw Player-ID tag covering 5 files, naming
Swedish game developer **Karl Hörnell** and referencing "Players",
Interceptor Software's budget publishing label he released his games
through — confirmed independently by c64-wiki.de's Karl Hörnell biography
and by English Wikipedia, whose gameography (Clean-Up Time, the two
Velocipede games, Ronald Rubberduck, Fungus) matches this dataset's tagged
files title-for-title. No SIDId entry exists for this tag, so identification
rests on the c64-wiki.de/Wikipedia biographies plus CSDb's own SID-header
metadata (all 5 census files carry `Released: "1986 Players"`, giving a
directly-sourced release year and independent confirmation of the "Players"
name) and this project's local composer data. It is used almost entirely by
Hörnell himself (4 of 5 files), with one collaboration credit shared with
fellow Swedish composer Johan Vessby ("Fungus"). Wikipedia states plainly
that Hörnell "started from scratch with each game, besides the code for
playing music, which he reused for convenience" — a primary-source
confirmation this is a genuine reused in-house driver, corroborated by
CSDb showing an identical PlayAddr (49232) on 4 of the 5 census files. This
is a native C64, closed, unreleased-as-a-product driver: it has no CSDb
"release" of its own (only the games it powers do), so `csdb_release`
stays `null` by deliberate finding, not omission.

## Quirks & gotchas

See the `quirks` array. The load-bearing point: this is one of the
stronger-evidenced "personal in-house driver" cards in this batch, because
an independent, citable biography (not SIDId, not CSDb) directly names both
the composer and the publishing label the tag references — a rare case of
external confirmation for a `?`-prefixed, SIDId-absent tag.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Composer/publisher identity, release
year (1986), and platform (native in-house reused driver) are confirmed via
c64-wiki.de, English Wikipedia, and CSDb's own SID-header metadata; no
SIDId entry exists, `csdb_release` is deliberately `null` (no CSDb release
exists for the driver itself), and no runtime fact was guessed.

## Sources

See the `sources` array — c64-wiki.de's Karl Hörnell page and this
project's local composer data.

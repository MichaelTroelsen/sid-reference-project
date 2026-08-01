# Tommy_Dunbar

```json
{
  "id": "tommy-dunbar",
  "name": "Tommy_Dunbar",
  "aliases": ["Tommy_Dunbar"],
  "authors": ["Tommy V. Dunbar (Thomas V. Dunbar)"],
  "released": "No standalone-tool release date exists (in-house game routine, not a distributed editor). Per-tune dates, confirmed via CSDb webservice type=sid: Archon (SID id 10685) 'Released: 1983 FFA/Electronic Arts'; Archon II: Adept (SID id 10686) 'Released: 1984 FFA/Electronic Arts'. Both are Free Fall Associates / Electronic Arts titles.",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house, game-embedded composing routine, not a released standalone editor. Corroborated by CSDb webservice type=scener: Tommy Dunbar has csdb_id 0 in the local composer profile (data/composers/tommy-dunbar.json), i.e. no CSDb scener/tool-author page exists for him at all",
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
    "No sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). The tag name matches the composer's own name, a personal-routine naming pattern seen elsewhere in this batch.",
    "100% single-composer concentration: both locally-tagged files ('Archon', 'Archon II: Adept') belong to Tommy Dunbar alone (data/composers/tommy-dunbar.json) — a full census of the 2 tagged files, not a sample. HVSC records him as a 'PRO' composer, USA, affiliation Electronic Arts, active 1986. Archon and Archon II: Adept are well-known Free Fall Associates / EA titles co-designed by Dunbar; the SID soundtrack routine here is presumably his own in-game composing/playback code for those two titles specifically.",
    "Consistent with an in-house composing/playback routine embedded directly in the Archon games rather than a distributed editor — no CSDb tool/release entry was found, and Tommy Dunbar's own composer profile carries csdb_id 0 (no CSDb scener page at all).",
    "CSDb webservice type=sid confirms per-file release dates directly from each tune's own 'Released' field (not read off a title or a UsedIn compilation): Archon (CSDb SID id 10685) 'Released: 1983 FFA/Electronic Arts'; Archon II: Adept (CSDb SID id 10686) 'Released: 1984 FFA/Electronic Arts'. Both tunes' 'UsedIn' also lists a 2020 'Archon Compilation Cartridge' re-release (CSDb release id 212701) — that is a later hardware re-release, not the tune's own date."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Tommy_Dunbar' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged Tommy_Dunbar, both by composer 'Tommy Dunbar' — full census, data/composers/tommy-dunbar.json; see knowledge/COVERAGE.md",
    "HVSC composer profile: Thomas V. Dunbar, USA, affiliation Electronic Arts, active 1986, csdb_id 0 — data/composers/tommy-dunbar.json",
    "CSDb webservice (scripts/lib/csdb-client.js getSidRelease): type=sid&id=10685 -> Released '1983 FFA/Electronic Arts' — https://csdb.dk/webservice/?type=sid&id=10685&depth=2",
    "CSDb webservice: type=sid&id=10686 -> Released '1984 FFA/Electronic Arts' — https://csdb.dk/webservice/?type=sid&id=10686&depth=2",
    "Checked for a CSDb scener/tool-author page and a public source or Codebase64/Lemon64/Forum64 mention of an Archon C64 music driver by Tommy Dunbar: none found (Wikipedia's Archon article also credits no C64 audio programmer) — https://en.wikipedia.org/wiki/Archon:_The_Light_and_the_Dark"
  ]
}
```

## Overview

Tommy_Dunbar is a SIDId Player-ID tag with no `sidid.nfo` entry of its own
(checked, absent). It matches the name of **Tommy Dunbar** (Thomas V.
Dunbar), an HVSC "PRO" composer affiliated with **Electronic Arts** (USA).
A full census of both locally-tagged files — "Archon" (CSDb SID id 10685,
released 1983, FFA/Electronic Arts) and "Archon II: Adept" (CSDb SID id
10686, released 1984, FFA/Electronic Arts), confirmed directly from each
tune's own CSDb `Released` field — are by him alone, consistent with an
in-house composing/playback routine embedded directly in those two games
rather than a distributed editor. No CSDb tool/release entry exists for
this name, and Tommy Dunbar's own composer profile carries CSDb scener id
0 (no scener page at all), reinforcing that this is not a published,
CSDb-catalogued tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for this
tag; (2) tag matches the composer's own name — personal-routine pattern;
(3) 100% single-composer, 2-file usage (full census), both from the same
game series (Archon), with per-tune release years (1983/1984) confirmed
directly from CSDb rather than inferred.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/tommy-dunbar.json` and
`data/sidid.json` (checked, absent). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent) and the local
composer aggregation/HVSC profile for Tommy Dunbar.

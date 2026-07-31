# Jim_Simmons/Capcom

```json
{
  "id": "jim-simmons-capcom",
  "name": "Jim_Simmons/Capcom",
  "aliases": ["?Jim_Simmons/Capcom"],
  "authors": ["Jim Simmons (James Simmons)"],
  "released": "Not a tool/editor release; no such date exists. Earliest tune attested: 1988 (Designasaurus, CSDb sid/?id=38286, publisher DesignWare; Rocket Ranger, CSDb sid/?id=1809, publisher Cinemaware). Latest: 1990 (TV Sports Football, CSDb sid/?id=38287, publisher Cinemaware). Census of all 3 tagged files confirms this range; no 4th file exists locally.",
  "status": "stub",
  "platform": "Native C64, in-house/game-embedded composing+playback routine, not a released standalone editor. CSDb site search for both 'Jim_Simmons/Capcom' and 'Capcom' (as a player/routine) returns zero release or tool entries (https://csdb.dk/search/?search=Jim_Simmons%2FCapcom , https://csdb.dk/search/?search=Capcom). Scener page for Jim Simmons (CSDb ID 25362) states he 'was not actually a scener, was a musician for Cinemaware, added for documentation only' and lists no Capcom affiliation or group (https://csdb.dk/scener/?id=25362).",
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
    "The leading '?' in the SIDId tag marks it as a scanner-flagged/uncertain signature match, but the local dataset gives a confident, matching author identity: 'Jim Simmons' (James Simmons, USA, HVSC-listed affiliation 'Cinemaware' — data/composers/jim-simmons.json). No SIDId sidid.nfo entry exists for this tag at all (checked data/sidid.json — absent), so the 'Capcom' half of the tag name is NOT independently corroborated by SIDId; it is unconfirmed whether it refers to a specific game, publisher relationship, or something else.",
    "100% single-composer concentration: all 3 locally-tagged files ('Designasaurus', 'Rocket Ranger', 'TV Sports Football') belong to Jim Simmons alone. Per-file CSDb 'Released' fields (censused, not sampled) give: Designasaurus 1988/DesignWare (sid/?id=38286), Rocket Ranger 1988/Cinemaware (sid/?id=1809), TV Sports Football 1990/Cinemaware (sid/?id=38287). Neither publisher is Capcom — the tag's 'Capcom' component matches none of the three attested publishers (unresolved discrepancy, not asserted as fact either way). Be careful not to conflate this tag with the real Japanese game publisher Capcom, which has no attested connection to Jim Simmons or these three files.",
    "Consistent with a personal, in-house composing/playback routine embedded directly in his own game soundtracks rather than a distributed editor. Confirmed by direct CSDb site search (not just absence from SIDId): searching csdb.dk for both 'Jim_Simmons/Capcom' and bare 'Capcom' returns no matching release/tool/group entry; the one CSDb scener record for 'Jim Simmons' (ID 25362) is explicitly marked as added for documentation only (not a scener) and lists only a Cinemaware musician credit, no Capcom affiliation.",
    "CSDb PSID header fields (from the webservice, not a disassembly) differ file to file: Designasaurus load $3000/init $3E78; Rocket Ranger load=init $3700; TV Sports Football load $0803/init $0803/play $0806. This spread across 3 files (all supposedly one 'player') is itself consistent with a per-game embedded routine rather than a single shared, versioned driver — recorded here as header metadata only, not as Tier 3 memory/entry facts."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Jim_Simmons/Capcom' or '?Jim_Simmons/Capcom' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 3 files tagged ?Jim_Simmons/Capcom, all by composer 'Jim Simmons' — data/composers/jim-simmons.json; see knowledge/COVERAGE.md",
    "HVSC composer profile: Jim Simmons / James Simmons, USA, affiliation Cinemaware — data/composers/jim-simmons.json",
    "CSDb webservice, type=sid, censused all 3 files (ids 38286, 1809, 38287) via scripts/lib/csdb-client.js: https://csdb.dk/sid/?id=38286 https://csdb.dk/sid/?id=1809 https://csdb.dk/sid/?id=38287",
    "CSDb site search, no result for the player/tool name: https://csdb.dk/search/?search=Jim_Simmons%2FCapcom and https://csdb.dk/search/?search=Capcom",
    "CSDb scener record, Jim Simmons (ID 25362), 'not actually a scener, was a musician for Cinemaware, added for documentation only': https://csdb.dk/scener/?id=25362"
  ]
}
```

## Overview

Jim_Simmons/Capcom is a SIDId Player-ID tag (`?`-prefixed, i.e. a
scanner-flagged/uncertain signature match) with no `sidid.nfo` entry of its
own. Local data confidently attributes it to **Jim Simmons** (James
Simmons, USA), an HVSC "PRO" composer whose recorded affiliation is
**Cinemaware**. A full census of all 3 locally-tagged files against CSDb's
own per-file `Released` field gives: Designasaurus (1988, DesignWare),
Rocket Ranger (1988, Cinemaware), TV Sports Football (1990, Cinemaware) —
three different attested publishers, none of them Capcom. There is no
CSDb release/tool entry for "Jim_Simmons/Capcom" or a bare "Capcom"
player, and Jim Simmons's own CSDb scener record notes he was added for
documentation only, with no Capcom affiliation. The "Capcom" component of
the tag is therefore not corroborated by any source checked, and should
not be conflated with the real Japanese game publisher Capcom, which has
no attested tie to Jim Simmons or these files. All 3 files are by Jim
Simmons alone, consistent with an in-house, game-embedded composing
routine rather than a published, titled tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for this
tag at all; (2) a full census of all 3 files' CSDb `Released` fields shows
three different publishers (DesignWare, Cinemaware x2), none "Capcom" —
unresolved, not asserted; (3) 100% single-composer usage; (4) direct CSDb
site search for the player name and for "Capcom" both return no
release/tool/group entry, ruling out a dedicated published editor under
this name.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/jim-simmons.json`,
`data/sidid.json` (checked, absent), and a full census of all 3 tagged
files against CSDb's webservice (`type=sid`) plus site search and the
composer's CSDb scener record. `status: stub` (Tier 1+2 only, no Tier 3
disassembly).

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent), and the local
composer aggregation/HVSC profile for Jim Simmons.

# ChristopherJam

```json
{
  "id": "christopherjam",
  "name": "ChristopherJam",
  "aliases": ["ChristopherJam"],
  "authors": ["Christopher Phillips (ChristopherJam / CJAM)"],
  "released": "No dedicated tool-release date exists; earliest attested use of the tag is 2004-08-01 (DrillTastic, Effluvious, Escher Victorious, Jolly Julia — all four premiered together in the demo 'Effluvium' at LCP 2004); the 5th tagged file, Teradyne Warrior, follows on 2007-01-28 in 'Teradyne Warrior Preview' (dates per CSDb webservice `Released`/`UsedIn` fields for each SID id, censused across all 5 tagged files).",
  "status": "stub",
  "platform": "Native C64 hand-coded replay routine, not a distributable player engine: each of the 5 tagged files has its own distinct load address (11607/32768/9300/3279/12012 decimal, with init=load in every case) rather than a shared fixed base, consistent with a bespoke per-tune routine coded by the composer himself rather than a reusable tool (confirmed via CSDb webservice for all 5 files). No dedicated CSDb tool/release entry exists under this name (CSDb search for 'ChristopherJam' returns 'No result').",
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
    "SIDId's sidid.nfo has NO entry for 'ChristopherJam' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "100% single-composer concentration: all 5 locally tagged files ('DrillTastic', 'Effluvious', 'Escher Victorious', 'Jolly Julia', 'Teradyne Warrior') belong to ChristopherJam himself (data/composers/christopherjam.json).",
    "CSDb scener profile (id 8958) identifies the handle as 'ChristopherJam (CJAM)', a member of the Fantastic 4 Cracking Group (joined 16 Nov 2022), credited as coder/graphician/musician active since 1989, with an extensive C64 portfolio (1991-2025) and a 9.6/10 coder rating; also noted as the brother of scener 'Silicon'. The local DeepSID composer profile lists his country as Sweden and 'active: 2022' — a discrepancy with CSDb's 1989-onward activity window. This pass adds a real data point: the earliest attested use of the ChristopherJam tag (across a full census of all 5 tagged files, via CSDb webservice) is 2004-08-01 — between both stated windows, still not fully resolving the discrepancy.",
    "No dedicated CSDb tool/release entry: querying CSDb's search webservice for 'ChristopherJam' returns 'No result' — confirms csdb_release stays null (not merely unfound).",
    "Each of the 5 tagged files has a distinct load address (per CSDb webservice LoadAddr: 11607, 32768, 9300, 3279, 12012) with InitAddr == LoadAddr in every case — the routine is reassembled/relocated per tune, not a fixed-address shared binary.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'ChristopherJam': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener, ChristopherJam/Fantastic 4 Cracking Group: https://csdb.dk/scener/?id=8958",
    "data/composers/christopherjam.json (profile: full_name Christopher Phillips, handles ChristopherJam, country Sweden, active 2022, csdb_id 8958)",
    "Local dataset: 5 files tagged ChristopherJam, single composer (see knowledge/COVERAGE.md)",
    "CSDb webservice, full census of all 5 tagged SID entries (Released/LoadAddr/InitAddr/UsedIn fields): https://csdb.dk/webservice/?type=sid&id=6009 (DrillTastic), https://csdb.dk/webservice/?type=sid&id=6006 (Effluvious), https://csdb.dk/webservice/?type=sid&id=6008 (Escher Victorious), https://csdb.dk/webservice/?type=sid&id=6007 (Jolly Julia), https://csdb.dk/webservice/?type=sid&id=37293 (Teradyne Warrior)",
    "CSDb release, 'Effluvium' demo (LCP 2004, 1 Aug 2004): https://csdb.dk/release/?id=13893",
    "CSDb release, 'Teradyne Warrior Preview' (28 Jan 2007): https://csdb.dk/release/?id=46119",
    "CSDb webservice search for 'ChristopherJam' returns no tool/release entry: https://csdb.dk/webservice/?type=search&search=ChristopherJam&approve_only=1"
  ]
}
```

## Overview

ChristopherJam is the Player-ID tag for a C64 replay routine used
exclusively by its namesake, **Christopher Phillips** (handle
**ChristopherJam**, CSDb "CJAM"), a coder/graphician/musician and member of
the Fantastic 4 Cracking Group, active in the scene since 1989 per CSDb. All
5 locally tagged files are his own. SIDId has no entry for this tag,
consistent with a personal, unreleased routine. It is a native C64
hand-coded routine rather than a distributable tool: a full census of all 5
tagged files (via CSDb webservice) shows each has its own distinct load
address with init==load, i.e. the routine is assembled per tune, not shipped
as a fixed-address shared binary. There is no dedicated CSDb tool/release
entry for the name (search returns "No result"), so `csdb_release` stays
`null`. The tag's earliest attested use is 2004-08-01, when four of the five
tagged tunes (DrillTastic, Effluvious, Escher Victorious, Jolly Julia)
premiered together in the demo "Effluvium" at LCP 2004; the fifth,
Teradyne Warrior, follows in "Teradyne Warrior Preview" (2007-01-28).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage; (2)
SIDId has no entry for this tag; (3) an unresolved country/activity-window
discrepancy between the local DeepSID profile (Sweden, active 2022) and
CSDb's bio (active since 1989) — the newly-found 2004 earliest-use date sits
between both windows and doesn't fully resolve it; (4) no dedicated CSDb
tool/release entry exists (search returns "No result"); (5) each tagged
file has a distinct load address with init==load, indicating a per-tune
assembled routine rather than a shared binary.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This pass adds a full census of all 5 tagged files against
CSDb's XML webservice (Released/LoadAddr/InitAddr/UsedIn per SID id) plus a
CSDb search-webservice check confirming no dedicated tool/release entry
exists. No disassembly was performed. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb scener
page, the local composer profile, and a full CSDb webservice census of all
5 tagged SID entries plus their `UsedIn` release pages.

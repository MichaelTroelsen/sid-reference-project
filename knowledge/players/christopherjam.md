# ChristopherJam

```json
{
  "id": "christopherjam",
  "name": "ChristopherJam",
  "aliases": ["ChristopherJam"],
  "authors": ["Christopher Phillips (ChristopherJam / CJAM)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be a personal C64 replay routine used exclusively by its namesake composer, a coder/graphician/musician active in the modern scene — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "CSDb scener profile (id 8958) identifies the handle as 'ChristopherJam (CJAM)', a member of the Fantastic 4 Cracking Group (joined 16 Nov 2022), credited as coder/graphician/musician active since 1989, with an extensive C64 portfolio (1991-2025) and a 9.6/10 coder rating; also noted as the brother of scener 'Silicon'. The local DeepSID composer profile lists his country as Sweden and 'active: 2022' — a discrepancy with CSDb's 1989-onward activity window, unresolved in this pass (not investigated further).",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'ChristopherJam': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener, ChristopherJam/Fantastic 4 Cracking Group: https://csdb.dk/scener/?id=8958",
    "data/composers/christopherjam.json (profile: full_name Christopher Phillips, handles ChristopherJam, country Sweden, active 2022, csdb_id 8958)",
    "Local dataset: 5 files tagged ChristopherJam, single composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

ChristopherJam is the Player-ID tag for a C64 replay routine used
exclusively by its namesake, **Christopher Phillips** (handle
**ChristopherJam**, CSDb "CJAM"), a coder/graphician/musician and member of
the Fantastic 4 Cracking Group, active in the scene since 1989 per CSDb. All
5 locally tagged files are his own. SIDId has no entry for this tag,
consistent with a personal, unreleased routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage; (2)
SIDId has no entry for this tag; (3) an unresolved country/activity-window
discrepancy between the local DeepSID profile (Sweden, active 2022) and
CSDb's bio (active since 1989) — flagged, not investigated further.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/christopherjam.json`, `data/sidid.json`) plus a CSDb
scener page lookup. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb scener
page, and the local composer profile.

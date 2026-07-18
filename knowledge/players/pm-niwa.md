# PM/Niwa

```json
{
  "id": "pm-niwa",
  "name": "PM/Niwa",
  "aliases": ["PM/Niwa"],
  "authors": ["PM"],
  "released": "TODO: no explicit tool-release date found; composer's HVSC profile lists 'active: 1986'",
  "status": "stub",
  "platform": "TODO: appears to be a personal C64 replay routine used exclusively by its namesake Italian composer, tagged with the name of an Italian scene circle ('Niwa') — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'PM/Niwa' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "100% single-composer concentration: all 5 locally tagged files ('Buon Natale', 'Niwa Intro', 'Piersoft Intro 1', 'Star Wars', 'Maksoft Group Intro') belong to composer 'PM' himself (real name unrecorded — data/composers/pm.json full_name field is '?'), Italy, active from 1986.",
    "One of PM's own tagged files is literally titled 'Niwa Intro', directly corroborating the tag's group-name element. 'Niwa' is independently attested as a real early-1980s Italian software scene point: per a Ready64.org history article (citing Commodore Gazette 6, Sept 1987), Niwa was a Milan-based newsstand that served as a meeting point for the Italian C64 unprotection/exchange scene from 1983 onward, alongside groups like '2703'. No direct confirmation that PM's routine originated from or was distributed by that specific circle — the connection rests on the tag name and the matching file title, not a primary statement.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'PM/Niwa': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Ready64.org, 'C64 & Pirateria #04: Dossier Speciale - I Pirati in Italia' (Commodore Gazette 6, Sept 1987) — describes Niwa as a Milan-based scene/exchange point: https://ready64.org/articoli/leggi/idart/73/c64-pirateria-04-dossier-speciale-i-pirati-in-italia-commodore-gazette-6-1987-settembre-",
    "data/composers/pm.json (profile: handle PM, full_name unrecorded, country Italy, active 1986)",
    "Local dataset: 5 files tagged PM/Niwa, single composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

PM/Niwa is the Player-ID tag for a C64 replay routine used exclusively by
its namesake Italian composer, handle **PM** (real name unrecorded), active
from 1986. All 5 locally tagged files are his own, including one literally
titled "Niwa Intro". "Niwa" is independently attested as a real early
Italian C64 scene meeting point (a Milan newsstand active from 1983, per a
Ready64.org history piece), though the tag's precise connection to that
circle is inferred from the file title, not a primary source statement.
SIDId has no entry for this tag.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage; (2)
SIDId has no entry for this tag; (3) the "Niwa" name is independently
attested as a real Italian scene point, but the link between that circle
and PM's specific routine is inferential (tag name + matching file title),
not confirmed by a primary statement.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/pm.json`, `data/sidid.json`) plus a general historical
source for the "Niwa" name. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the Ready64.org
history article, and the local composer profile.

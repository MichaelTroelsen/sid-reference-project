# Commodore/Andy_Finkel

```json
{
  "id": "commodore-andy-finkel",
  "name": "Commodore/Andy_Finkel",
  "aliases": ["Commodore/Andy_Finkel"],
  "authors": ["Andy Finkel"],
  "released": "1983 (Commodore-published launch-era C64 titles)",
  "status": "stub",
  "platform": "In-house Commodore music routine embedded in early first-party C64 titles Andy Finkel worked on while employed at Commodore (1983-1990) — not a standalone released editor; no dedicated CSDb tool/release entry found under this name.",
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
    "SIDId's sidid.nfo has NO entry for 'Commodore/Andy_Finkel' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "100% single-composer concentration: all 3 locally tagged files — 'Blueprint', 'Dragons Den', 'Lazarian' — belong to Andy Finkel himself (data/composers/andy-finkel.json). These titles match his confirmed, real 1983 Commodore-published C64 launch-era games (Blueprint, Dragon's Den, Lazarian) per web sources (Lemon64 game database, a period interview) — a strong, independently corroborated identity match, not just a name coincidence.",
    "data/composers/andy-finkel.json's DeepSID profile records employment '[ds-W]Commodore|1983-1990, [ds-X]|1990-' and affiliation 'Commodore' — consistent with Finkel's own account (per a period interview hosted on geocities.ws) of being part of Commodore's original C64 launch team and later helping form Commodore's internal games group. This supports reading the tag as an in-house Commodore routine rather than a personal/scene tool.",
    "Country USA per local profile. No public disassembly or source found for the routine itself — all runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Commodore/Andy_Finkel': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/andy-finkel.json (profile: full_name Andy Finkel, country USA, employment Commodore 1983-1990, affiliation Commodore, brand commodore.png)",
    "Lemon64 game database, Andy Finkel titles (Blueprint 1983, Dragon's Den 1983, Lazarian 1983): https://www.lemon64.com/games/list.php?list_individual=andy-finkel",
    "Andy Finkel period interview (Commodore launch team, internal games group): http://www.geocities.ws/rmelick/12.htm",
    "Local dataset: 3 files tagged Commodore/Andy_Finkel, single composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Commodore/Andy_Finkel is the Player-ID tag for an in-house Commodore music
routine used in early, first-party C64 launch-era titles that **Andy
Finkel** worked on while employed directly by Commodore (1983-1990). The 3
locally tagged files — "Blueprint", "Dragons Den", "Lazarian" — match his
confirmed real 1983 Commodore-published games exactly, corroborated by an
independent game database and a period interview describing his role on
Commodore's original C64 launch team.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage,
matching his confirmed real games by title; (2) SIDId has no entry for this
tag; (3) the local DeepSID employment field (Commodore, 1983-1990)
independently corroborates the in-house-routine reading, rather than being
inferred from the tag name alone.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/andy-finkel.json`, `data/sidid.json`) plus web
corroboration of Finkel's real Commodore employment and game credits.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer profile, Lemon64's game database, and a period interview.

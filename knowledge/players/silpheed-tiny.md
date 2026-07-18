# Silpheed_tiny

```json
{
  "id": "silpheed-tiny",
  "name": "Silpheed_tiny",
  "aliases": ["Silpheed_tiny"],
  "authors": ["Silpheed"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be a minimal/personal replay routine (the '_tiny' naming convention seen elsewhere in this dataset denotes a composer's own small routine) used exclusively by its namesake composer — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Silpheed_tiny' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "100% single-composer concentration: all 3 locally tagged files ('Rain', 'Until Late', 'Blue Sunday') belong to composer Silpheed himself (data/composers/silpheed.json); a 4th file by the same composer ('Morning Star') carries no player tag.",
    "Composer profile: handle 'Silpheed', country Australia, CSDb scener id 11713 (data/composers/silpheed.json) — real name not recorded.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Silpheed_tiny': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/silpheed.json (profile: handle Silpheed, country Australia, csdb_id 11713, csdb_type scener)",
    "Local dataset: 3 files tagged Silpheed_tiny, single composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Silpheed_tiny is the Player-ID tag for a small C64 replay routine used
exclusively by its namesake composer, handle **Silpheed** (Australia, real
name unrecorded). All 3 locally tagged files are his own. SIDId has no
entry for this tag, consistent with a personal, never-packaged routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage; (2)
SIDId has no entry for this tag; (3) the "_tiny" naming convention matches
other personal/minimal routines already documented in this KB.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/silpheed.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer profile.

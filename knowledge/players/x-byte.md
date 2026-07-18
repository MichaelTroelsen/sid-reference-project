# X-Byte

```json
{
  "id": "x-byte",
  "name": "X-Byte",
  "aliases": ["X-Byte"],
  "authors": ["Patrick Schildkamp (X-Byte)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be a personal C64 replay routine used exclusively by its namesake composer — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'X-Byte' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "100% single-composer concentration: both locally tagged files ('Doolittle (part 5)', 'No.13 Baby (part 3)') belong to X-Byte himself (data/composers/x-byte.json); a third file by the same composer ('No.13 Baby (intro)') carries no player tag.",
    "Composer profile: Patrick Schildkamp, handle X-Byte, Netherlands, died 2020-10-07, CSDb scener id 1191 (data/composers/x-byte.json).",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'X-Byte': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/x-byte.json (profile: full_name Patrick Schildkamp, handles X-Byte, country Netherlands, date_death 2020-10-07, csdb_id 1191, csdb_type scener)",
    "Local dataset: 2 files tagged X-Byte, single composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

X-Byte is the Player-ID tag for a small C64 replay routine used exclusively
by its namesake composer, **Patrick Schildkamp**, handle **X-Byte**
(Netherlands, d. 2020). Both locally tagged files are his own. SIDId has no
entry for this tag, consistent with a personal, never-packaged routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage; (2)
SIDId has no entry for this tag; (3) no dedicated CSDb tool/release page
was found.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/x-byte.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer profile.

# Carmine_TSM

```json
{
  "id": "carmine-tsm",
  "name": "Carmine_TSM",
  "aliases": ["Carmine_TSM"],
  "authors": ["Carmine Migliaccio (TSM)"],
  "released": "TODO: no date found — SIDId has no entry for this tag at all",
  "status": "stub",
  "platform": "TODO: appears to be a personal C64 replay routine by TSM, self-referentially named after his own real first name plus handle — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Carmine_TSM' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "SELF-REFERENTIAL NAME: the tag combines the composer's own real first name (Carmine) with his own scene handle (TSM) — per data/composers/tsm.json, TSM's full real name is Carmine Migliaccio (Italy). This is a strong, direct match confirming the tag names the composer's own personal routine, not a third party or a coincidence.",
    "Single-composer concentration: both locally-tagged files are by TSM himself (Carmine Migliaccio, Italy, active from 2012, CSDb scener 15664) — entirely expected for a self-named personal routine."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Carmine_TSM': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged 'Carmine_TSM', both by TSM — data/composers/tsm.json",
    "data/composers/tsm.json (HVSC profile: full name Carmine Migliaccio, Italy, active 2012, CSDb scener 15664)"
  ]
}
```

## Overview

`Carmine_TSM` is a raw Player-ID tag for a personal replay routine used
exclusively by **Carmine Migliaccio**, handle **TSM**, an Italian scener. The
tag name is self-referential — the composer's own real first name plus his
own handle — a direct match confirming this is his own routine rather than a
third-party tool. SIDId has no entry for the tag. Both locally-tagged files
are his own.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag name is a direct self-reference
(real first name + handle), not a coincidence or a third-party tool name;
usage is 100% by the composer himself.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/tsm.json`, `data/sidid.json`). `status: stub` — no runtime
fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer aggregation.

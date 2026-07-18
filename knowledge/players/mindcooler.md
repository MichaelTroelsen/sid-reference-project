# Mindcooler

```json
{
  "id": "mindcooler",
  "name": "Mindcooler",
  "aliases": ["Mindcooler"],
  "authors": ["Mindcooler"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name (unconfirmed) — the tag names the composer himself, not a distinct branded tool, consistent with a personal hand-coded routine",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent). No CSDb tool/release page or corroborating web hit was found under this name during this research pass beyond DeepSID's own composer listing for 'Mindcooler' (which documents his tunes, not a distinct player/tool).",
    "The tag is exactly the composer's own handle ('Mindcooler') — self-titled Player-ID tags are the strongest local signal of a personal, hand-coded, never-distributed routine (matching this project's convention seen elsewhere, e.g. Mark_Wilson, Russell_Lieblich).",
    "Both locally-tagged files ('Acid Lindgren', 'MSP430G2202 Greatest Hits') are by Mindcooler himself — single-composer concentration, 2/2."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged Mindcooler, 1 composer (Mindcooler) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Mindcooler` is a Player-ID-only tag (no SIDId entry, no CSDb tool page
found) that is itself the composer's own handle — the strongest available
local signal of a personal, hand-coded, never-distributed routine. Both
locally-tagged files are by Mindcooler himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry, no CSDb tool page
found; (2) self-titled tag naming convention strongly suggests a personal
routine; (3) single-composer concentration (2/2 files).

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check) and
`data/composers/*.json`. `status: stub`.

## Sources

See the `sources` array — SIDId absence check and the local composer
aggregation.

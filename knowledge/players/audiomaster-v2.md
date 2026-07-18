# Audiomaster 2

```json
{
  "id": "audiomaster-v2",
  "name": "Audiomaster 2",
  "aliases": ["Audiomaster_V2"],
  "authors": ["Ruben Spaans (Scroll)"],
  "released": "1989, Megastyle (Jolly Poppers)",
  "status": "stub",
  "platform": "Native C64 tool, per CSDb — released by the Megastyle group.",
  "csdb_release": 7072,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId and CSDb agree cleanly: SIDId gives author 'Ruben Spaans (Scroll)', released '1989 Megastyle', reference CSDb release 7072. CSDb's own page confirms: title 'Audiomaster 2', C64 Tool, 1989, group Megastyle, code+music by 'Scroll of Jolly Poppers and Megastyle' — i.e. Scroll was a member of both Jolly Poppers and Megastyle. 979 downloads recorded on CSDb.",
    "CSDb bundles the SID 'Piece of Cake 2 (part 7)' as the release's example tune — matching one of the 2 locally-tagged files here directly (the other being 'Piece of Cake 2 (part 2)', a different part of the same multi-part tune).",
    "Both locally-tagged files are by the same composer, Scroll (the author) — single-composer concentration in this dataset, despite being a real, named, dated tool release."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Audiomaster_V2'])",
    "CSDb release 'Audiomaster 2' (Scroll, 1989, Megastyle/Jolly Poppers): https://csdb.dk/release/?id=7072",
    "Local dataset: 2 files tagged Audiomaster_V2, 1 composer (Scroll) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Audiomaster_V2` is SIDId's tag for **Audiomaster 2**, a native C64 tool
released in 1989 by the Megastyle group — coded and scored by **Ruben
Spaans**, handle **Scroll**, a member of both Megastyle and Jolly Poppers.
SIDId and CSDb agree cleanly on authorship and date. Both locally-tagged
files ("Piece of Cake 2", parts 2 and 7) are by Scroll himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) clean SIDId/CSDb agreement, a
genuinely named/dated/grouped release; (2) CSDb's own bundled example tune
matches one of the two locally-tagged files directly; (3) still
single-composer concentration locally despite real tool status.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo was found (a disk-image/download
exists on CSDb but was not inspected here).

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, and
the CSDb release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 7072, and the local
composer aggregation.

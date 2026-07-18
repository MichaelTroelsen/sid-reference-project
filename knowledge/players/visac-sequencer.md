# Sequencer V1.0 (Visac)

```json
{
  "id": "visac-sequencer",
  "name": "Sequencer V1.0",
  "aliases": ["Visac_Sequencer"],
  "authors": ["Visac"],
  "released": "1995, Citadel",
  "status": "stub",
  "platform": "Native C64 tool, described by CSDb as a 'digi player tool'.",
  "csdb_release": 61269,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent), but IS a real, named, dated CSDb tool release: 'Sequencer V1.0' by Citadel, 1995, code+music credited to 'Visac' (of Cult and The IDE64 project). Its own CSDb page describes it as a 'digi player tool' — i.e. sample/digi playback, not a conventional note tracker.",
    "The release bundles a demo tune titled 'Sequencer Demo Tune' — matching one of the 2 locally-tagged files here directly (the other, 'Black Angle', is a much lower CSDb SID-entry id, 144 vs 53072, suggesting it may be an earlier or separately-catalogued tune using the same routine).",
    "Visac (real biography per CSDb scener profile) is a Czech scener, founder of 'The IDE64 project' (an IDE-hard-disk-interface project for the C64), also a member of Cult — i.e. a hardware-and-software-both figure in the scene, not purely a musician.",
    "Both locally-tagged files are by Visac himself — single-composer concentration, 2/2."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 'Sequencer V1.0' (Visac, 1995, Citadel, described as a 'digi player tool'): https://csdb.dk/release/?id=61269",
    "CSDb scener profile, Visac (Cult, The IDE64 project, Czech Republic): https://csdb.dk/scener/?id=1080",
    "Local dataset: 2 files tagged Visac_Sequencer, 1 composer (Visac) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Visac_Sequencer` is the Player-ID tag for **Sequencer V1.0**, a native C64
"digi player tool" (per CSDb's own description) released in 1995 by
Citadel — coded and scored by **Visac**, a Czech scener, founder of "The
IDE64 project" and member of Cult. Not in SIDId, but has a clean, real CSDb
tool page. Both locally-tagged files are by Visac himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) absent from SIDId but a real,
dated, named CSDb tool with an explicit "digi player tool" description
(sample playback, not pattern/note tracking); (2) CSDb's bundled example
tune matches one of the two locally-tagged files directly; (3)
single-composer concentration despite real tool status.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), `data/composers/*.json`,
and two CSDb pages. `status: stub`.

## Sources

See the `sources` array — SIDId absence check, CSDb release 61269, CSDb
scener 1080, and the local composer aggregation.

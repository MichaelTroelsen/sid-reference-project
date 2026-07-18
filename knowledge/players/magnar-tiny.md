# Magnar/Tiny

```json
{
  "id": "magnar-tiny",
  "name": "Magnar/Tiny",
  "aliases": ["Magnar/Tiny"],
  "authors": ["Magnar Harestad — inferred from the tag name; not independently confirmed as the routine's actual author"],
  "released": "TODO: no year found anywhere for this tag",
  "status": "stub",
  "platform": "TODO: no SIDId entry or CSDb tool/release page found under this name. Reads as a size-category ('Tiny') personal/micro replay routine, the same naming pattern as other '_tiny'/'/Tiny'-suffixed raw Player-ID tags elsewhere in this dataset (4-Mat_tiny, Krill_tiny — neither confirmed related).",
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
    "6 files across 2 composers: Magnar Harestad (5 files — Bella Ciao, Magnificent, SOS, Breakdance, Aura 2) and Roy Johan Widding (1 file — Jumpin' Jalopies), per data/composers/magnar.json and data/composers/widding-roy-johan.json. The tag names Magnar, but a second composer also uses it — consistent with a small, informally-shared personal routine rather than a strictly single-author one.",
    "Local composer profile data disagrees on country: Magnar's own composer record lists country 'Sweden', while Widding_Roy_Johan's lists 'Norway' — both Scandinavian, but not the same country, despite the tag naming Magnar specifically. Not resolved here; recorded as read from the data, not corrected or guessed.",
    "No SIDId entry exists for 'Magnar/Tiny' (checked data/sidid.json directly)."
  ],
  "sources": [
    "Local dataset: data/composers/magnar.json (5 files), data/composers/widding-roy-johan.json (1 file); knowledge/COVERAGE.md rank #13",
    "data/sidid.json byTag — checked, no entry for 'Magnar/Tiny'"
  ]
}
```

## Overview

`Magnar/Tiny` is a raw Player-ID tag covering 6 files in this dataset,
naming Norwegian(/Swedish, per conflicting local country data) composer
**Magnar Harestad**. No SIDId entry, CSDb tool page, or other independent
documentation was found for it — it reads as a personal, small-scale
in-house routine (the "Tiny" suffix following the same size-category naming
convention seen elsewhere in this dataset, e.g. `4-Mat_tiny`, `Krill_tiny`,
though no relationship to either is confirmed). It is used by Magnar
himself (5 of 6 files) and one other composer, Roy Johan Widding (1 file).

## Quirks & gotchas

See the `quirks` array — the two load-bearing points are the shared usage
across 2 composers (not purely single-author) and a genuine, unresolved
country discrepancy between the two composers' own HVSC-derived profile
data (Sweden vs Norway).

## Disassembly notes

None done here. No source, format spec, or memory map was found anywhere;
every Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data was
confirmed; no SIDId entry, CSDb tool page, or other external documentation
exists for this tag. No runtime fact was guessed.

## Sources

See the `sources` array — this project's own local composer data
(`data/composers/magnar.json`, `data/composers/widding-roy-johan.json`) and
`data/sidid.json` (checked, no entry).

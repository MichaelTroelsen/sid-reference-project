# Proton_tiny

```json
{
  "id": "proton-tiny",
  "name": "Proton_tiny",
  "aliases": ["Proton_tiny"],
  "authors": ["Sami Louko (Proton)"],
  "released": "TODO: no date found — SIDId has no entry for this tag at all",
  "status": "stub",
  "platform": "TODO: appears to be a small personal/experimental C64 replay routine by Proton — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Proton_tiny' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "The '_tiny' suffix follows the same naming pattern this project has already seen for other personal-routine families (e.g. '4-Mat_tiny_1'/'4-Mat_tiny_2', knowledge/players/4-mat-tiny-1.md/4-mat-tiny-2.md) — plausibly a deliberately minimal/small-footprint variant of a fuller routine, but no sibling '(non-tiny) Proton' tag was found in this dataset to compare against, and no source confirms the naming convention's meaning for this specific tag.",
    "Single-composer concentration: both locally-tagged files are by Proton himself (Sami Louko, Finland, b. 1973-11-14, CSDb scener 4616, former handles include 'SJL Cracking Service', 'The Merp', 'Xybots') — consistent with a personal/experimental routine, matching the pattern of other '_tiny'-suffixed tags in this project."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Proton_tiny': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged 'Proton_tiny', both by Proton — data/composers/proton.json",
    "data/composers/proton.json (HVSC profile: full name Sami Louko, Finland, b. 1973-11-14, CSDb scener 4616)",
    "Sibling cards with the same '_tiny' naming pattern: knowledge/players/4-mat-tiny-1.md, knowledge/players/4-mat-tiny-2.md — pattern comparison only, no code relationship implied"
  ]
}
```

## Overview

`Proton_tiny` is a raw Player-ID tag for a small replay routine used
exclusively by **Sami Louko**, handle **Proton**, a Finnish scener. SIDId has
no entry for the tag. Both locally-tagged files are his own. The `_tiny`
naming convention echoes other personal-routine families already carded in
this project (e.g. 4-Mat's `_tiny_1`/`_tiny_2`), but no non-tiny "Proton"
sibling tag exists locally to compare against, so the suffix's meaning here
is unconfirmed.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId has no entry for this tag; usage
is 100% by the composer himself; the naming pattern resembles but is not
proven related to other `_tiny`-suffixed tags elsewhere in this project.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/proton.json`, `data/sidid.json`). `status: stub` — no
runtime fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer aggregation.

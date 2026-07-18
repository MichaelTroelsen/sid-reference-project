# Danko/Shadi

```json
{
  "id": "danko-shadi",
  "name": "Danko/Shadi",
  "aliases": ["Danko/Shadi"],
  "authors": ["Tomas Danko (Gaunt) — inferred from the tag name; not independently confirmed as the routine's actual author"],
  "released": "TODO: no year found anywhere for this tag",
  "status": "stub",
  "platform": "TODO: appears to be Tomas Danko's own personal in-house routine. 'Shadi' names 2 of the 4 locally-tagged files directly ('Shadi Demo 7 (part 3)', 'Shadi-Music'), suggesting it may denote a demo/production series rather than a separately published tool or group name — not confirmed. No SIDId entry or CSDb tool/release page found.",
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
    "4 files, 1 composer (100% Tomas Danko, handle Gaunt, Sweden) — a textbook personal/in-house routine, not a published tool.",
    "Two of the four tagged files carry 'Shadi' directly in their own title ('Shadi Demo 7 (part 3)', 'Shadi-Music'), which plausibly explains the tag's second half as a demo/production series name rather than a group or separate tool — inference from file titles only, not a sourced claim.",
    "No SIDId entry exists for 'Danko/Shadi' (checked data/sidid.json directly)."
  ],
  "sources": [
    "Local dataset: data/composers/tomas-danko.json — 4 files (Shadi Demo 7 part 3 csdb_id 43906, Zyntomix csdb_id 55368, Exploding Fist Demo csdb_id 64190, Shadi-Music csdb_id 64188); knowledge/COVERAGE.md rank #46",
    "data/sidid.json byTag — checked, no entry for 'Danko/Shadi'"
  ]
}
```

## Overview

`Danko/Shadi` is a raw Player-ID tag covering 4 files, all by a single
Swedish composer, **Tomas Danko** (handle Gaunt). No SIDId entry or CSDb
tool page was found for it. Two of the four tagged files carry "Shadi" in
their own titles, suggesting the tag's second half names a demo/production
series rather than a distinct tool — an inference from the local data, not
an externally sourced fact.

## Quirks & gotchas

See the `quirks` array — the main point is the 100% single-composer
concentration, a textbook personal routine, plus the unconfirmed but
plausible "Shadi = demo series name" reading from the files' own titles.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data is
confirmed; no SIDId entry or CSDb tool page exists. No runtime fact was
guessed.

## Sources

See the `sources` array — local composer data only; SIDId checked with no
match.

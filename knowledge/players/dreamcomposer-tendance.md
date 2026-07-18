# DreamComposer/Tendance

```json
{
  "id": "dreamcomposer-tendance",
  "name": "DreamComposer/Tendance",
  "aliases": ["DreamComposer/Tendance"],
  "authors": ["Márton Feldman (Marcy) — inferred from tag/composer identity; not independently confirmed as the tool's actual author"],
  "released": "TODO: no year found anywhere for this tag",
  "status": "stub",
  "platform": "TODO: no SIDId entry, CSDb tool/release page, or other independent documentation found for a tool named 'DreamComposer' or a group named 'Tendance'. CSDb's own SID-entry page for one tagged file ('Another Style') lists only composer + releasing group (Smash Designs, 1995), with no mention of either name.",
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
    "3 files, 1 composer (100% Márton Feldman / Marcy, Hungary) — a textbook personal/in-house routine, not a published tool.",
    "CSDb's SID-entry page for 'Another Style' (csdb.dk/sid/?id=19712) shows the file was released in 1995 by the group Smash Designs — NOT a group called 'Tendance'. The 'Tendance' half of the tag name is unexplained by anything found: possibly an earlier or different group/production Marcy was otherwise associated with, not confirmed.",
    "No SIDId entry exists for 'DreamComposer/Tendance' (checked data/sidid.json directly)."
  ],
  "sources": [
    "Local dataset: data/composers/marcy.json — 3 files (Another Style csdb_id 19712, Boom csdb_id 19728, Doorway csdb_id 19716); knowledge/COVERAGE.md rank #52",
    "CSDb sid entry 19712 ('Another Style', Smash Designs, 1995): https://csdb.dk/sid/?id=19712",
    "data/sidid.json byTag — checked, no entry for 'DreamComposer/Tendance'"
  ]
}
```

## Overview

`DreamComposer/Tendance` is a raw Player-ID tag covering 3 files, all by a
single Hungarian composer, **Márton Feldman (Marcy)**. No SIDId entry or
CSDb tool page was found for it, and CSDb's own record for one of the three
tagged files shows a releasing group ("Smash Designs") that does not match
the tag's own "Tendance" half — that discrepancy is unresolved.

## Quirks & gotchas

See the `quirks` array — the load-bearing point is the 100%
single-composer concentration (personal routine) combined with the
unexplained "Tendance" name mismatch against the actual releasing group
found on CSDb.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data and one
CSDb SID-entry page are confirmed; no SIDId entry exists. No runtime fact
was guessed.

## Sources

See the `sources` array — local composer data, one CSDb SID-entry page,
and SIDId (checked, no match).

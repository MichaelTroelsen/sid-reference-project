# WizPlayer 1.0

```json
{
  "id": "wizplayer-v1",
  "name": "WizPlayer 1.0",
  "aliases": ["WizPlayer_1.0"],
  "authors": ["Piotr Kuciapski (Wizard)"],
  "released": "TODO: SIDId gives no year for this tag",
  "status": "stub",
  "platform": "TODO: native C64 player/tool by Piotr Kuciapski (handle Wizard). SIDId also lists a separate 'WizPlayer_2.0' entry by the same author (not in scope for this card, not merged/aliased here) implying a versioned tool line, but no release dates or version-history documentation was found for either.",
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
    "1 file, 1 composer (Oxygen Wizard, Poland) locally tagged 'WizPlayer_1.0' — matches the SIDId-credited author (Piotr Kuciapski / Wizard) directly: this composer IS the credited author, unlike most other 1-file tags in this batch, which merely borrow or reuse a third party's tool.",
    "SIDId's entry for this tag has only an AUTHOR field — no name, released year, reference, or comment — the same 'thin' entry shape as e.g. [[toaster-digi]]'s SIDId record, consistent with an unpackaged/informally distributed tool.",
    "A sibling SIDId entry 'WizPlayer_2.0' exists for the same author but is NOT in this card's scope (not in the source chunk being carded) and is deliberately not folded in or aliased here."
  ],
  "sources": [
    "sidid:WizPlayer_1.0 (author 'Piotr Kuciapski (Wizard)', no name/released/reference/comment) — data/sidid.json",
    "Local dataset: data/composers/oxygen-wizard.json — 1 file; knowledge/COVERAGE.md rank #17 (combined with sibling WizPlayer_2.0 in the raw grouping)"
  ]
}
```

## Overview

`WizPlayer_1.0` is a SIDId-attested tag naming **Piotr Kuciapski (Wizard)**
as its author. Unusually for a 1-file tag in this batch, the sole locally
tagged file's composer (Oxygen Wizard) directly matches SIDId's credited
author — the tool's own creator is the one using it here, not a third
party. SIDId's entry is otherwise minimal (author only, no name/year/
reference/comment). A separate `WizPlayer_2.0` SIDId entry exists for the
same author but is out of scope for this card.

## Quirks & gotchas

See the `quirks` array — the composer-equals-author match is the notable
point; otherwise this is a minimal-evidence stub.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts (SIDId
author, local composer match) are confirmed. No runtime fact was guessed.

## Sources

See the `sources` array — SIDId and local composer data.

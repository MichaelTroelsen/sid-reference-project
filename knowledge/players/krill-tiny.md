# Krill_tiny

```json
{
  "id": "krill-tiny",
  "name": "Krill_tiny",
  "aliases": ["Krill_tiny"],
  "authors": ["Thomas Egeskov Petersen (Krill) — inferred from the tag name; not independently confirmed as the routine's actual author, and NEITHER locally-tagged composer is Krill himself (see quirks)"],
  "released": "TODO: no year found anywhere for this tag",
  "status": "stub",
  "platform": "TODO: appears to be a size-category ('_tiny') micro replay routine, following the same naming convention as other '_tiny'/'/Tiny'-suffixed raw Player-ID tags in this dataset (4-Mat_tiny, Magnar/Tiny — neither confirmed related). No SIDId entry or CSDb tool page found under this name.",
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
    "2 files, 2 composers — NEITHER is Krill himself: Dalezy (Ronny Engmann, 'Softwired') and Fanta (Alexander Rotzsch, 'Artefacts'), both Germany. The tag names a THIRD party — presumably the well-known Danish composer/coder Thomas Egeskov Petersen ('Krill') — whose micro-player was apparently reused by these two, a 'tool named after its author but used by others' pattern rather than a typical single-composer personal routine.",
    "Not independently confirmed: the local dataset never attributes any file to Krill himself under this tag, so the identification of 'Krill' as Thomas Egeskov Petersen and as the tool's actual author rests entirely on name-matching, not a citation.",
    "No SIDId entry exists for 'Krill_tiny' (checked data/sidid.json directly)."
  ],
  "sources": [
    "Local dataset: data/composers/dalezy.json (Softwired, csdb_id 59106), data/composers/fanta.json (Artefacts, csdb_id 12050); knowledge/COVERAGE.md rank #66",
    "data/sidid.json byTag — checked, no entry for 'Krill_tiny'"
  ]
}
```

## Overview

`Krill_tiny` is a raw Player-ID tag covering 2 files, apparently naming a
micro/'tiny' replay routine attributed to Danish composer/coder
**Thomas Egeskov Petersen (Krill)** — but notably, neither locally-tagged
file is by Krill himself: both are by other German composers (Dalezy,
Fanta), suggesting a small routine that circulated beyond its presumed
author rather than a typical single-composer personal tool. No SIDId entry
or CSDb tool page was found to confirm this identification independently.

## Quirks & gotchas

See the `quirks` array — the load-bearing point is that this reads as a
named-after-its-author tool used by OTHERS, not by Krill himself, in this
local dataset — an inversion of the usual "personal routine = same
composer" pattern seen elsewhere in this batch.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data is
confirmed; the Krill/Thomas Egeskov Petersen attribution is unconfirmed
name-matching, not a citation. No SIDId entry exists. No runtime fact was
guessed.

## Sources

See the `sources` array — local composer data only; SIDId checked with no
match.

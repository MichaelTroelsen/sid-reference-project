# Input64 (player routine)

```json
{
  "id": "input64",
  "name": "Input64 (player routine)",
  "aliases": ["Input64"],
  "authors": ["Holger Gehrmann"],
  "released": "TODO: no RELEASED/REFERENCE field; data/sidid.json has no entry for this tag. The magazine itself, INPUT 64, ran monthly in Germany 1985-1988 (Heise Verlag) — see quirks for why this is not the same as the routine's own release date.",
  "status": "stub",
  "platform": "TODO: no CSDb tool/editor release found under this name. Reads as a routine tied to Holger Gehrmann's music contributions for the INPUT 64 diskmag/magazine, not a distributed standalone editor.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG NAMED AFTER A REAL MAGAZINE: both locally-tagged files ('Input 64 Issue 01/85', 'Input 64 Issue 02/85', data/composers/holger-gehrmann.json) are credited solely to Holger Gehrmann. INPUT 64 was a real, well-documented German C64 magazine/diskmag published monthly 1985-1988 by Heise Verlag, and Gehrmann composed its intro/theme music — independently corroborated (c64-wiki.com, retro-commodore.eu, VGMPF, 8bitlegends.com) outside SIDId.",
    "No SIDId entry exists for this tag (data/sidid.json checked, absent) — the 'Input64' tag name matches the magazine title, not necessarily a named player-routine product; this is Gehrmann's own embedded driver for his magazine-intro compositions, not a general-purpose tool credited elsewhere.",
    "Gehrmann is independently notable beyond this tag: per web research he also created 'Soundcontrol' and a sound-programming language called 'SOPROL' on the C64 (the Amiga version of SOPROL reportedly used in early games 'Hollywood Poker' and 'Space Port') — none of which are confirmed to be the same routine as this 'Input64' tag; recorded as background only, not asserted as the same code."
  ],
  "sources": [
    "data/sidid.json: no entry for 'Input64' (checked, absent)",
    "Local dataset: data/composers/holger-gehrmann.json — 2 files tagged 'Input64' ('Input 64 Issue 01/85' csdb id 43606, 'Input 64 Issue 02/85' csdb id 41403); see knowledge/COVERAGE.md row #71 (2 files)",
    "c64-wiki.com, INPUT 64 (German C64 magazine/diskmag, monthly 1985-1988, Heise Verlag): https://www.c64-wiki.com/wiki/INPUT_64",
    "VGMPF wiki, Holger Gehrmann: https://www.vgmpf.com/Wiki/index.php?title=Holger_Gehrmann",
    "8bitlegends.com, Holger Gehrmann: https://8bitlegends.com/holger-gehrmann/",
    "retro-commodore.eu, Input 64 magazine category: https://www.retro-commodore.eu/category/magazines/german-magazine/input-64/"
  ]
}
```

## Overview

`Input64` is a bare-name SIDId signature tag for a routine credited to
**Holger Gehrmann**, matching 2 locally-tagged files that are his own intro
compositions for **INPUT 64**, a real German C64 diskmag/magazine published
monthly by Heise Verlag from 1985-1988. No SIDId fingerprint entry exists for
this tag; identity rests on strong external corroboration (c64-wiki,
retro-commodore.eu, VGMPF) that Gehrmann scored the magazine's intro music.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer concentration tied to a
real, well-documented magazine; Gehrmann's other, unrelated C64/Amiga sound
tools (Soundcontrol, SOPROL) are noted as background, not asserted as the
same code.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from local composer data and external magazine/biography research.

## Sources

See the `sources` array — local composer-file aggregation and four external
provenance pages.

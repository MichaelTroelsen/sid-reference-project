# Input64 (player routine)

```json
{
  "id": "input64",
  "name": "Input64 (player routine)",
  "aliases": ["Input64"],
  "authors": ["Holger Gehrmann"],
  "released": "1985. Both of the 2 tagged files' own CSDb SID-entry `Released` field reads '1985 Input 64/Verlag Heinz Heise' (csdb.dk sid id 43606 and 41403, queried via CSDb webservice) — a per-issue attestation, not an inferred one; no SIDId RELEASED/REFERENCE field exists for the tag itself.",
  "status": "stub",
  "platform": "Native C64, built-in (not a distributed standalone editor). Both tagged files carry `player_type: \"Normal built-in\"` in the local dataset (data/composers/holger-gehrmann.json) — i.e. Gehrmann's own embedded playback code shipped inside the INPUT 64 magazine-disk programs, not an external/cross-platform tool. A CSDb site search for 'Input 64' tools (via WebFetch) surfaced only unrelated same-named crack-scene utilities (Input-Calc 64, INPUT 64-Knacker, Input Cruncher) — no editor/player release of this name exists on CSDb.",
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
    "Gehrmann is independently notable beyond this tag: per web research he also created 'Soundcontrol' and a sound-programming language called 'SOPROL' on the C64 (the Amiga version of SOPROL reportedly used in early games 'Hollywood Poker' and 'Space Port') — none of which are confirmed to be the same routine as this 'Input64' tag; recorded as background only, not asserted as the same code.",
    "CENSUS NOTE: the same composer file (data/composers/holger-gehrmann.json) has a THIRD 1985 magazine-issue file, 'Input 64 Issue 03/85' (csdb id 13307) — but it is tagged player 'Holger_Gehrmann', not 'Input64'. It is correctly excluded from this card's census (only the 2 files actually tagged 'Input64' count), but confirms the 'Input64' tag is not applied uniformly to every INPUT-64-issue tune this composer wrote — signature detection, not a magazine-wide convention.",
    "PSID header metadata (not a disassembly fact — recorded here only, never promoted to Tier 3): both tagged files share LoadAddr $5000 (20480), InitAddr $5233 (21043), PlayAddr $523A (21050), SID model 6581, PAL clock — per CSDb SID-entry webservice records for id 43606 and 41403. Identical addresses across both files are consistent with (but do not prove) a shared embedded routine."
  ],
  "sources": [
    "data/sidid.json: no entry for 'Input64' (checked, absent)",
    "Local dataset: data/composers/holger-gehrmann.json — 2 files tagged 'Input64' ('Input 64 Issue 01/85' csdb id 43606, 'Input 64 Issue 02/85' csdb id 41403); see knowledge/COVERAGE.md row #71 (2 files). Both carry player_type 'Normal built-in'.",
    "CSDb webservice, type=sid, id=43606 (https://csdb.dk/webservice/?type=sid&id=43606&depth=3): Released '1985 Input 64/Verlag Heinz Heise', LoadAddr 20480, InitAddr 21043, PlayAddr 21050, SIDModel 6581, PAL",
    "CSDb webservice, type=sid, id=41403 (https://csdb.dk/webservice/?type=sid&id=41403&depth=3): Released '1985 Input 64/Verlag Heinz Heise', same addresses/model/clock",
    "CSDb site search for 'Input 64' (https://csdb.dk/search/?seinf=1&search=Input+64&type=list), fetched via WebFetch: no tool/editor/player release of this name found; only unrelated same-named crack-scene utilities and the 4 known Gehrmann/Rosenschein 1985 SID tunes",
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
Both tagged files' own CSDb records date them to **1985** ("1985 Input 64/Verlag
Heinz Heise") and carry `player_type: "Normal built-in"`, i.e. this reads as a
built-in playback routine Gehrmann embedded directly in the magazine-disk
programs, not a distributed/standalone editor — no CSDb tool or player release
of this name was found (checked via CSDb site search). Single-composer
concentration (both files, one composer): consistent with a personal/in-house
routine rather than a published tool with wider uptake.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer concentration tied to a
real, well-documented magazine; Gehrmann's other, unrelated C64/Amiga sound
tools (Soundcontrol, SOPROL) are noted as background, not asserted as the
same code.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from local composer data, CSDb webservice records for both tagged files (a
full census, not a sample), and external magazine/biography research. No
CSDb release exists for this player/routine as a distributed tool, so
`csdb_release` stays `null`.

## Sources

See the `sources` array — local composer-file aggregation and four external
provenance pages.

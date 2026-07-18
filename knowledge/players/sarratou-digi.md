# Sarratou_Digi

```json
{
  "id": "sarratou-digi",
  "name": "Sarratou_Digi",
  "aliases": ["Sarratou_Digi"],
  "authors": ["Pierre Sarratou"],
  "released": "TODO: no tool-release date documented; sampled local file (Evil Garden 2 (Title), CSDb sid id 52898) is dated 1989, Demonware label",
  "status": "stub",
  "platform": "TODO: appears to be a personal digi/sample-playback routine embedded in Pierre Sarratou's own tracks — no CSDb scener profile or tool/release entry was locatable to confirm platform details",
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
    "No SIDId entry exists for this tag at all (data/sidid.json byTag lookup for 'Sarratou_Digi' returns undefined).",
    "No CSDb scener profile was locatable for Pierre Sarratou during this research pass: the local composer profile (data/composers/pierre-sarratou.json) records csdb_id 0 and a blank country field, and a direct CSDb search for 'Pierre Sarratou' returned no matching scener result. As a result, no independent scene-credit corroboration (a 'Sampling' role or otherwise) could be checked for this tag — identity here rests solely on the local HVSC composer-folder attribution and the PSID header author field.",
    "Fully single-composer usage: all 5 locally-tagged files belong to Pierre Sarratou (data/composers/pierre-sarratou.json), and all four distinct titles follow the pattern 'Evil Garden N (...)' (Title/Game Complete/Game Over, etc.) — reading as one game or production's soundtrack subtunes/variants rather than a spread across unrelated works."
  ],
  "sources": [
    "CSDb SID-file entry 'Evil Garden 2 (Title)' (Pierre Sarratou, 1989 Demonware label, PSID header): https://csdb.dk/sid/?id=52898",
    "Local dataset: 5 files tagged 'Sarratou_Digi', all under composer Pierre Sarratou — data/composers/pierre-sarratou.json",
    "data/sidid.json (checked: no 'Sarratou_Digi' entry exists in byTag, confirming the absence noted above)",
    "CSDb scener search for 'Pierre Sarratou' (no matching result returned, confirming the absence noted above): https://csdb.dk/search/?seinsel=6&search=Pierre+Sarratou"
  ]
}
```

## Overview

Sarratou_Digi is the local raw tag for a digi/sample-playback routine
attributed to **Pierre Sarratou**, whose HVSC composer profile records no
CSDb scener id and no country. No SIDId entry exists for this tag either, so
identity here rests solely on the local HVSC composer-folder attribution and
the sampled PSID header's author field. All 5 locally-tagged files belong to
Sarratou himself, and their titles ("Evil Garden 2/3/4 (...)") suggest one
game or production's soundtrack subtunes rather than a spread of unrelated
works.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry exists for this tag;
(2) no CSDb scener profile could be located for the author, so no
independent scene-credit corroboration was possible — an unusually thin
provenance trail even by this batch's standards; (3) 100% single-composer
usage, apparently one game's soundtrack.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`, and thinner than its siblings in
this batch: identity is local-dataset- and PSID-header-sourced only, with no
SIDId or CSDb scener corroboration found. No runtime fact has been
disassembled or traced.

## Sources

See the `sources` array — one sampled CSDb SID-file entry, local
composer-file aggregation, and the negative results of SIDId/CSDb-scener
lookups (recorded so a future pass doesn't repeat the same search).

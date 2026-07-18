# Nick_Scarim (player routine)

```json
{
  "id": "nick-scarim",
  "name": "Nick_Scarim (player routine)",
  "aliases": ["Nick_Scarim"],
  "authors": ["Nick Scarim"],
  "released": "1984 (per First Star Software's 'Spy vs Spy', the game both locally-tagged files belong to — see quirks; this is the game's release year, not a confirmed tool/routine release date)",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or format documentation found under this name. Reads as Scarim's own in-game music driver for the 'Spy vs Spy' series, not a distributed general-purpose editor.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG NAMED AFTER A REAL, NOTABLE GAME COMPOSER: both locally-tagged files ('Spy vs Spy', 'Spy vs Spy II: The Island Caper', data/composers/nick-scarim.json) are by Nick Scarim, who composed the C64 music for First Star Software's original 'Spy vs. Spy' (1984) — a well-documented, historically notable soundtrack (OC ReMix, VGMPF, multiple remix communities). One web summary noted 'confusion about whether Mike Riedel or Nick Scarim wrote the music' for the original game, with Mike Riedel credited as the programmer who implemented it while Scarim composed — the two roles are sometimes conflated in secondary sources.",
    "No SIDId entry exists for this tag (data/sidid.json checked, absent). This is a self-titled personal/in-game driver, not a documented standalone tool — no CSDb tool release or format spec was found."
  ],
  "sources": [
    "data/sidid.json: no entry for 'Nick_Scarim' (checked, absent)",
    "Local dataset: data/composers/nick-scarim.json — 2 files tagged 'Nick_Scarim' ('Spy vs Spy' csdb id 26125, 'Spy vs Spy II: The Island Caper' csdb id 26126); see knowledge/COVERAGE.md row #83 (2 files)",
    "VGMPF wiki, Spy Vs Spy (C64): https://www.vgmpf.com/Wiki/index.php/Spy_Vs_Spy_(C64)",
    "OC ReMix, Spy vs. Spy (C64, 1984, First Star Software): https://ocremix.org/game/835/spy-vs-spy-c64"
  ]
}
```

## Overview

`Nick_Scarim` is a self-titled SIDId signature tag matching both locally
tagged files, by **Nick Scarim**, composer of the historically notable C64
soundtrack for First Star Software's original "Spy vs. Spy" (1984). No SIDId
fingerprint entry exists; identity rests on strong external corroboration of
Scarim as a real, documented game composer.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a real, historically notable
composer with a well-attested game credit, but the *routine itself* has no
release documentation beyond the game it ships in.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established.

## Sources

See the `sources` array — local composer-file aggregation, VGMPF, and OC
ReMix.

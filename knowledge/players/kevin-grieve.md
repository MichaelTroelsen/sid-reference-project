# Kevin_Grieve (player routine)

```json
{
  "id": "kevin-grieve",
  "name": "Kevin_Grieve (player routine)",
  "aliases": ["Kevin_Grieve"],
  "authors": ["Kevin Grieve (per tag name/SIDId absence — see quirks: the file's own composer credit is his brother Nigel Grieve, not Kevin)"],
  "released": "1987 (per the 'Zolo' game release, Ocean/Italvideo — see quirks; this is the game's release year, not a confirmed routine release date)",
  "status": "stub",
  "platform": "TODO: no CSDb tool release or source repo found under this name. Reads as an in-house driver embedded in the C64 game 'Zolo'.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "TAG NAME NAMES THE PROGRAMMER, NOT THE COMPOSER: the sole locally-tagged file is 'Zolo' (data/composers/nigel-grieve.json, csdb id 13421), composed by Nigel Grieve — but the SIDId-style tag is 'Kevin_Grieve'. Web research confirms Kevin Grieve was Nigel Grieve's brother and the game's programmer/copyright holder (per Internet Archive's d64 listing 'd64_Zolo_1987_Kevin_Grieve') — i.e. this player-routine tag credits the CODER who wrote the playback driver, while the composer of the music itself was his brother Nigel. This is a real, sourced identity split, not a data error.",
    "No SIDId entry exists for this tag (data/sidid.json checked, absent). Kevin Grieve also worked on other Ocean Software titles the year before Zolo ('V - The Computer Game', 'Knight Rider', 'Super Bowl'), per web research — none confirmed to use the same driver.",
    "Single-file tag — the minimal personal/in-game-driver signature; not inflated beyond what the one file supports."
  ],
  "sources": [
    "data/sidid.json: no entry for 'Kevin_Grieve' (checked, absent)",
    "Local dataset: data/composers/nigel-grieve.json — 1 file tagged 'Kevin_Grieve' ('Zolo', csdb id 13421); see knowledge/COVERAGE.md row #123 (1 file)",
    "GamesThatWerent, Zolo (C64, 1987 Ocean/Italvideo): https://www.gamesthatwerent.com/gtw64/zolo/",
    "Internet Archive, 'Zolo [h FP+The Fifth Dimension]' credited to Kevin Grieve: https://archive.org/details/d64_Zolo_1987_Kevin_Grieve_h_FPThe_Fifth_Dimension",
    "Demozoo, Nigel Grieve: https://demozoo.org/sceners/79546/",
    "CSDb scener, Nigel Grieve: https://csdb.dk/scener/?id=13662"
  ]
}
```

## Overview

`Kevin_Grieve` is a SIDId-style tag naming the *programmer*, not the
*composer*, of a single locally-tagged file: "Zolo" (1987, Ocean/Italvideo),
whose music was written by **Nigel Grieve** but whose driver/code is
attributed by this tag to his brother **Kevin Grieve**, per an Internet
Archive game listing crediting Kevin Grieve as the game's copyright
holder/programmer. This composer/coder split is real and sourced, not a data
error to be smoothed over.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag names the programmer of the
embedded driver, while the actual music composer (credited separately in this
project's own composer data) is a different person — his brother.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from local composer data and external game-credit research.

## Sources

See the `sources` array — local composer-file aggregation, GamesThatWerent,
Internet Archive, Demozoo, and CSDb.

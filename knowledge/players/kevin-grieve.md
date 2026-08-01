# Kevin_Grieve (player routine)

```json
{
  "id": "kevin-grieve",
  "name": "Kevin_Grieve (player routine)",
  "aliases": ["Kevin_Grieve"],
  "authors": ["Kevin Grieve (per tag name/SIDId absence — see quirks: the file's own composer credit is his brother Nigel Grieve, not Kevin)"],
  "released": "1987 (CSDb's own SID entry for 'Zolo', id 13421, states 'Released: 1987 Kevin Grieve' — https://csdb.dk/sid/?id=13421 — corroborated by the earliest scene crack of the game, Future Projects, dated August 1987, https://csdb.dk/release/?id=40159; still the game's release year, not a separately-attested routine release date)",
  "status": "stub",
  "platform": "Native C64, in-house driver embedded in the game 'Zolo' — DeepSID's own local dataset classifies it player_type: 'Normal built-in' (data/composers/nigel-grieve.json), and no standalone CSDb tool/editor release or source repo was found under this name (CSDb search for 'Zolo' returns only the SID entry and scene cracks of the game itself, no player/tool release: https://csdb.dk/search/?seinsel=all&search=Zolo)",
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
    "Single-file tag — the minimal personal/in-game-driver signature; not inflated beyond what the one file supports.",
    "CSDb's own SID entry (id 13421, https://csdb.dk/sid/?id=13421) independently states 'Released: 1987 Kevin Grieve' on the same line as the release year — corroborating the composer/coder split from an authoritative source, not just game-credit sites. Local dataset also records this file's player_type as 'Normal built-in' (data/composers/nigel-grieve.json), consistent with an in-game driver rather than a distributed editor/tool.",
    "PSID header metadata only (not a disassembly fact — per CSDb's SID entry page, https://csdb.dk/sid/?id=13421): load $0E00, init $1200, play $1633, data size 3840 bytes, 1 subtune. Recorded here as a lead for a future Tier 3 pass, not written into the entry/memory fields.",
    "The earliest known scene crack of the game ('Zolo', Future Projects) is dated August 1987 (https://csdb.dk/release/?id=40159), consistent with the CSDb SID entry's 1987 release year; CSDb also lists later re-cracks/re-releases (ACID/Triad; FP+The Fifth Dimension) all still dated 1987, with no publisher/developer credit line visible on the fetched release page itself."
  ],
  "sources": [
    "data/sidid.json: no entry for 'Kevin_Grieve' (checked, absent)",
    "Local dataset: data/composers/nigel-grieve.json — 1 file tagged 'Kevin_Grieve' ('Zolo', csdb id 13421, player_type 'Normal built-in'); see knowledge/COVERAGE.md row #123 (1 file)",
    "GamesThatWerent, Zolo (C64, 1987 Ocean/Italvideo): https://www.gamesthatwerent.com/gtw64/zolo/",
    "Internet Archive, 'Zolo [h FP+The Fifth Dimension]' credited to Kevin Grieve: https://archive.org/details/d64_Zolo_1987_Kevin_Grieve_h_FPThe_Fifth_Dimension",
    "Demozoo, Nigel Grieve: https://demozoo.org/sceners/79546/",
    "CSDb scener, Nigel Grieve: https://csdb.dk/scener/?id=13662",
    "CSDb SID entry, 'Zolo' (id 13421) — 'Released: 1987 Kevin Grieve', PSID header fields: https://csdb.dk/sid/?id=13421",
    "CSDb release search for 'Zolo' — only the SID entry and scene cracks of the game found, no standalone player/tool release: https://csdb.dk/search/?seinsel=all&search=Zolo",
    "CSDb release, 'Zolo' crack by Future Projects, August 1987: https://csdb.dk/release/?id=40159"
  ]
}
```

## Overview

`Kevin_Grieve` is a SIDId-style tag naming the *programmer*, not the
*composer*, of a single locally-tagged file: "Zolo" (1987, Ocean/Italvideo),
whose music was written by **Nigel Grieve** but whose driver/code is
attributed by this tag to his brother **Kevin Grieve**, per an Internet
Archive game listing crediting Kevin Grieve as the game's copyright
holder/programmer. CSDb's own SID entry for the file independently states
"Released: 1987 Kevin Grieve" on its release line, and the earliest scene
crack of the game is dated August 1987 — both corroborate the year. Local
dataset marks the driver's `player_type` as "Normal built-in", i.e. a native
C64 in-house routine embedded in the game, not a distributed editor/tool;
no standalone CSDb tool release or source repo exists under this name. This
composer/coder split is real and sourced, not a data error to be smoothed
over.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag names the programmer of the
embedded driver, while the actual music composer (credited separately in this
project's own composer data) is a different person — his brother.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts and provenance
(release year, platform classification) are established, from local composer
data, CSDb's SID-entry page and release search, and external game-credit
research. No source repo or tool release exists to research further, and no
disassembly was performed — all Tier 3 fields remain `TODO`.

## Sources

See the `sources` array — local composer-file aggregation, GamesThatWerent,
Internet Archive, Demozoo, and CSDb (SID entry, release search, and the
game's earliest scene-crack release page).

# SoundBooster

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "soundbooster",
  "name": "SoundBooster",
  "aliases": ["Soundbooster", "SoundBooster"],
  "authors": ["Stephan Swertvaegher (Midas)"],
  "released": "1990 (V1.0, 23 July 1990, group Legend)",
  "status": "stub",
  "platform": "Native C64 tool (DeepSID players.json lists platform \"Native / C64 emulator\" for the SoundBooster entry; CSDb catalogues the release as type \"C64 Tool\")",
  "csdb_release": 7536,

  "memory": {
    "load_address": "TODO: no public source/disassembly found",
    "zero_page": "3 bytes, $F7-$F9 (DeepSID players.json field `zero_pages` on the \"SoundBooster\" entry) — not independently verified by disassembly here",
    "layout": "TODO: no public source/disassembly found"
  },
  "entry": {
    "init": "TODO: no public source/disassembly found",
    "play": "TODO: no public source/disassembly found"
  },
  "speed": "TODO: no public source/disassembly found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public source/disassembly found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "TWO CSDb RELEASES for the same tool, both dated/grouped identically (Legend, V1.0, 1990): csdb.dk/release/?id=7536 (the plain version, credits Code/Graphics/Design/Idea/Concept: Midas, Music+Testing: Lyon) and csdb.dk/release/?id=130186 (a variant \"with an intro and different example tunes\", per a CSDb user comment on 7536; credits Code/Design/Idea/Concept: Midas, Music+Testing: Lyon, Graphics: Spook). SIDId's `reference` points at 7536; DeepSID's players.json `csdb_id` points at 130186. Both are recorded in `sources`; 7536 is used as the card's canonical `csdb_release` since that is what SIDId cites.",
    "Composer-level corroboration: the CSDb release's credited musician, Lyon (of group Legend), matches this dataset's composer \"Legend Lyon\", who has 4 files tagged Soundbooster — independent confirmation the tag maps to the right tool. The author Midas is also a user of his own tool (6 of Midas's 10 catalogued files use Soundbooster).",
    "Small, concentrated usage: 31 files across only 6 composers (Gerpsnot 12 — 100% of Gerpsnot's own catalogued files; Midas 6; G-Fellow 4; L Mr 4; Legend Lyon 4; Madaco 1). Consistent with a small-scene tool tied to the Legend group's circle rather than a widely-published editor.",
    "No public source code or disassembly was found (searched CSDb, Codebase64, GitHub) — every Tier 3 runtime field is honestly TODO except the single `zero_pages` fact DeepSID's own players.json curated database states outright."
  ],
  "sources": [
    "data/sidid.json byTag: Soundbooster — name \"Soundbooster\", author \"Stephan Swertvaegher (Midas)\", released \"1990\", reference https://csdb.dk/release/?id=7536 (sourced from deepsid_dl/sidid.nfo, https://github.com/cadaver/sidid/blob/master/sidid.nfo)",
    "data/players.json entry \"SoundBooster\" — developer Midas, start_year 1990, csdb_id 130186, platform \"Native / C64 emulator\", zero_pages \"3 bytes ($F7-$F9)\" (DeepSID players export)",
    "CSDb release 7536: https://csdb.dk/release/?id=7536 (Soundbooster V1.0, group Legend, 23 July 1990, C64 Tool; credits Code/Graphics/Design/Idea/Concept: Midas, Music+Testing: Lyon; 397 downloads)",
    "CSDb release 130186: https://csdb.dk/release/?id=130186 (Soundbooster V1.0 variant with intro + different example tunes, group Legend; credits Code/Design/Idea/Concept: Midas, Music+Testing: Lyon, Graphics: Spook)",
    "Local dataset: 31 files across 6 composers (G-Fellow, Gerpsnot, L Mr, Legend Lyon, Madaco, Midas) tagged Soundbooster, aggregated from data/composers/*.json — matches knowledge/COVERAGE.md's rank #12, 31 files"
  ]
}
```

## Overview

SoundBooster is a native C64 music editor by **Stephan Swertvaegher (Midas)**
of the group **Legend**, released 23 July 1990. It shipped in (at least) two
CSDb-catalogued forms — a plain release (csdb.dk/release/?id=7536, the one
SIDId cites) and a variant with an intro and different example tunes
(csdb.dk/release/?id=130186, the one DeepSID's own curated `players.json`
entry cites) — both crediting Code/Design to Midas and Music/Testing to
**Lyon**. That credit is independently corroborated by this project's own
data: composer "Legend Lyon" in the dataset is a SoundBooster user. Usage is
small and concentrated — 31 files across 6 composers, over a third from one
composer (Gerpsnot) — consistent with a tool that stayed mostly inside the
Legend group's own circle rather than becoming a widely-published editor. No
public source or disassembly was found, so every runtime fact is `TODO`
except a single zero-page fact DeepSID's own curated database states
outright.

## Quirks & gotchas

See the `quirks` array — load-bearing points: (1) two distinct CSDb release
IDs for the same tool/version, cited by different sources (SIDId → 7536,
DeepSID players.json → 130186), both recorded rather than silently picking
one; (2) the composer-level cross-check (Legend Lyon in this dataset matches
the CSDb-credited musician Lyon) as real corroboration the tag resolves to
the right tool, not just a name-string guess; (3) the small, concentrated
composer spread as signal this was a small-scene tool.

## Disassembly notes

None. No public source, disassembly, or format-spec document was found for
SoundBooster. A future pass would need to start from a representative
`.sid`'s PSID header (init/play addresses) and disassemble from there — the
only route to real memory-map/format facts for this player.

## Verification

**Not verified — `status: stub`.** Identity (author, release date, CSDb
releases), platform, and usage/composer-concentration facts come from SIDId,
DeepSID's `players.json`, and this project's own per-composer data; the CSDb
release pages independently corroborate the Midas/Lyon credit split. The one
runtime-shaped fact recorded (`zero_page`, 3 bytes $F7-$F9) is DeepSID's own
stated value, not independently confirmed by disassembly here. No other
runtime fact (memory map, entry points, data format, effects) is confirmed —
all left `TODO` rather than guessed.

## Sources

See the `sources` array — SIDId (`sidid.nfo`), DeepSID's `players.json`
export, and two CSDb release pages (7536 and 130186) fetched directly.

# Android (Andrew Craigie player routine)

```json
{
  "id": "android",
  "name": "Android (Andrew Craigie player routine)",
  "aliases": ["Android"],
  "authors": ["Andrew Craigie (Android)"],
  "released": "TODO: no single release date found; tune dates in this dataset cluster 1986-1987 (per YouTube upload sourcing, not a primary release record)",
  "status": "stub",
  "platform": "Appears to be a composer's own hand-coded 6502 tune-playing routine, not a distributed editor/tool — Player-ID fingerprints his personal routine byte-pattern rather than a released product. No CSDb tool/editor release or public source found for it.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly performed",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: not researched (would come from each file's PSID header, not a fixed constant, since no distributed tool/version exists)",
    "play": "TODO: not researched"
  },
  "speed": "TODO: not researched",

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
    "Composer concentration is total: all 14 files tagged 'Android' in this dataset are by a single composer, Andrew Craigie, who used the handle 'Android' — no other composer in the dataset carries this tag (data/composers/android.json holds 15 records total: 14 tagged 'Android' plus 1, 'Band_Aid.sid', tagged 'Electrosound' instead; knowledge/COVERAGE.md ranks the family #21 uncarded, 14 files, single grouped raw tag 'Android'). This is the textbook 'personal routine, not a published tool' case flagged in the extraction template.",
    "SIDId's sidid.nfo entry for this tag has only an AUTHOR line ('Andrew Craigie (Android)') — no released/reference/comment fields (github.com/cadaver/sidid/blob/master/sidid.nfo, fetched 2026-07-17), consistent with no distributed release to cite.",
    "HVSC's Musicians.txt confirms identity and location: 'Android (Craigie, Andrew) - UNITED KINGDOM (SCOTLAND)' (data/hvsc/Musicians.txt line 121).",
    "HVSC's STIL.txt has biographical/production comments on two of his tunes but nothing about the player routine itself: Blown_Fuse.sid was used in the 'Willy the Worm 2' loader of Hades Nebula, and Mystery_of_Arkham_Manor.sid was written for an unreleased Melbourne House game ('Andrew was paid but then nothing of the game ever surfaced' - Frank Gasking) (data/hvsc/STIL.txt, MUSICIANS/A/Android section).",
    "No CSDb scener profile, tool/editor release, or public source repository was located for 'Android' as a player/routine during this research pass (web search + CSDb search, 2026-07-17) — could not confirm a release year, load address, or any runtime fact. Left as TODO rather than guessed."
  ],
  "sources": [
    "Local dataset: sidid.json byTag.Android (author only, no reference/comment) — data/sidid.json",
    "knowledge/COVERAGE.md — family rank #21, 14 files, single raw tag 'Android'",
    "data/composers/android.json — all 14 'player':'Android' file records, one composer",
    "SIDId source (matches local import): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "HVSC Musicians.txt (identity/country): data/hvsc/Musicians.txt, line 121 ('Android (Craigie, Andrew) - UNITED KINGDOM (SCOTLAND)')",
    "HVSC STIL.txt (production notes on two tunes, no player detail): data/hvsc/STIL.txt, MUSICIANS/A/Android section",
    "Web search confirming identity/era (no primary CSDb tool release found): https://www.youtube.com/watch?v=cRRJQSefZ_I (Cherry Pink, 1987), https://www.youtube.com/watch?v=9zjdmnkKVHs (March of Robots, 1987)"
  ]
}
```

## Overview

"Android" is the Player-ID tag for tunes by Andrew Craigie (handle "Android"),
a Scottish C64 musician active c.1986-1987. Unlike most carded families, this
one shows **zero composer spread**: all 14 files tagged `Android` in this
dataset (`data/composers/android.json`) are by Craigie himself — the textbook
signal (per the extraction template's composer-concentration rule) that this
is a personal, hand-coded tune-playing routine rather than a published editor
or tool other composers picked up. No CSDb tool/editor release, no source
repository, and no disassembly were found; SIDId's own entry for this tag
carries only an author name, no reference or comment. This card is therefore
identity-only.

## Quirks & gotchas

See the `quirks` array — the load-bearing facts are the **total single-
composer concentration** (14/14 files, strong "personal routine" signal) and
the **absence of any findable CSDb release, source, or technical writeup** for
the routine itself, despite Craigie's tunes themselves being documented in
HVSC's STIL.txt (loader/game-soundtrack production notes, not player internals).

## Disassembly notes

None performed. No public source or prior disassembly was found to seed Tier 3
facts from, so every runtime field is honestly `TODO` per the project's
"never invent a memory map" rule.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are populated,
sourced from this repo's cached SIDId import, HVSC's Musicians.txt/STIL.txt,
and a web/CSDb search pass that found no tool release, source, or technical
documentation of the routine. Every Tier 3 (runtime) field remains `TODO`.

## Sources

See the `sources` array — the local SIDId cache, `knowledge/COVERAGE.md`,
`data/composers/android.json`, the upstream SIDId GitHub source, HVSC's
Musicians.txt and STIL.txt, and web search results used only to confirm
composer identity/era (no primary player-tool source was located).

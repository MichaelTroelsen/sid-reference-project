# Drumtex (player routine)

```json
{
  "id": "drumtex",
  "name": "Drumtex (player routine)",
  "aliases": ["Drumtex"],
  "authors": ["Vidar Bang (Drumtex)"],
  "released": "TODO: year — no RELEASED/REFERENCE field in the SIDId entry",
  "status": "stub",
  "platform": "TODO: no CSDb release, source repo, or documentation found for a distributed 'Drumtex' tool. The composer-concentration pattern (below) suggests this is a composer's own hand-coded/embedded music driver rather than a published editor, but that is an inference, not a confirmed fact.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not researched",
    "zero_page": "TODO: not researched",
    "layout": "TODO: not researched"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
  },
  "speed": "TODO: no disassembly performed",

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
    "Composer concentration: of the 9 files in this project's dataset tagged 'Drumtex', 7 are by the composer Drumtex (Vidar Bang) himself and 2 are by Widding_Roy_Johan (Roy Johan Widding, handle 'Rotteroy') — see knowledge/COVERAGE.md rank #34 and the local composers/*.json aggregation. Only 2 composers total, one clearly dominant, is the project's own 'likely a personal routine' signal (cf. the Rob Hubbard card's much larger 51-composer spread for a genuinely reused driver).",
    "CIRCUMSTANTIAL, NOT ASSERTED AS AN EDGE: both credited composers (Vidar Bang/Drumtex and Roy Johan Widding/Rotteroy) are members of the Megastyle (Inc.) group per their CSDb scener pages, which is a plausible reason a second composer's files would carry the same Player-ID signature (shared/borrowed in-group code) — but no source, credit line, or manual was found stating this explicitly, so no `derives_from`/`shares_routine_with` edge is recorded.",
    "The SIDId nfo entry (deepsid_dl/sidid.nfo, 'Drumtex' section) has only an AUTHOR line — no RELEASED or REFERENCE (CSDb release id) field, unlike most other entries in the same file. No CSDb release page for a 'Drumtex' tool/routine was found via web search either. Do not assume a specific year or CSDb id."
  ],
  "sources": [
    "SIDId database (deepsid_dl/sidid.nfo, 'Drumtex' entry: AUTHOR only, no RELEASED/REFERENCE) — parsed into data/sidid.json byTag.Drumtex = {\"author\":\"Vidar Bang (Drumtex)\"}",
    "knowledge/COVERAGE.md: rank #34, 9 files, grouped raw tag 'Drumtex', source column blank (no public source known)",
    "Local aggregation of data/composers/*.json per-file `player` tags: 9 files total — 7 by composer 'Drumtex', 2 by 'Widding_Roy_Johan'",
    "CSDb scener profile, Drumtex (Vidar Bang), handle history dmx/Lloyd/Flashman, Norway, groups Megastyle Inc. + Jolly Poppers (founder): https://csdb.dk/scener/?id=5623",
    "Local dataset file example confirming the tag in use: 'Self Control', one of the 7 Drumtex-tagged files in data/composers/drumtex.json (exact on-disk filename not recorded in this project's cached data, so no DeepSID file URL is constructed here) — a prior draft of this card incorrectly cited 'Frightness.sid', which is actually tagged 'SoedeSoft/Soundmaster_V1.0' in this dataset, not 'Drumtex'; corrected.",
    "DeepSID file by the second composer using the same tag: https://deepsid.chordian.net/?file=MUSICIANS%2FW%2FWidding_Roy_Johan%2FMancave.sid",
    "Demozoo scener profile for Roy Johan Widding ('Rotteroy', Megastyle) corroborating group overlap: https://demozoo.org/sceners/59230/"
  ]
}
```

## Overview

"Drumtex" is a Player-ID signature tag, not a documented editor or released tool
— no CSDb release page, source repository, manual, or Codebase64 article for a
"Drumtex" music system was found. It resolves in this project's dataset to 9
files (`knowledge/COVERAGE.md` rank #34), 7 of them by the composer Drumtex
(Vidar Bang, Norwegian scener active in Megastyle Inc. and Jolly Poppers) and 2
by Widding_Roy_Johan (Roy Johan Widding, "Rotteroy", also Megastyle). The
SIDId database (`sidid.nfo`) only records an `AUTHOR` field for this tag — no
release year or CSDb reference, unusual compared to most other entries in the
same file. The composer concentration (2 composers, one dominant) matches this
project's "likely a personal/hand-coded routine" pattern rather than a widely
published tool, though that reading is an inference from the data, not a
sourced fact.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) only 2 composers use
this tag and one (Drumtex himself) accounts for most of the files — a personal-
routine signal, not proof; (2) the second composer sharing the tag (Widding_Roy_Johan)
is in the same demoscene group (Megastyle) as Drumtex, which is a plausible but
*unconfirmed* explanation for the shared signature — no `edges` relationship is
asserted from this alone.

## Disassembly notes

None performed. No public source or documentation was located to seed a
disassembly target, and Tier 3 reverse-engineering is out of scope for this
pass — see the constraints in `knowledge/EXTRACTION-TEMPLATE.md`.

## Verification

Not verified. This card is seeded entirely from Tier 1 local data
(`data/sidid.json`, `data/composers/*.json`, `knowledge/COVERAGE.md`) plus
Tier 2 web/CSDb provenance research (scener profiles, DeepSID file listings).
No runtime fact was disassembled or traced. `status: stub` is honest here —
there is currently no known public source to even attempt a Tier 3 pass on.

## Sources

See the `sources` array — SIDId's `sidid.nfo`, this project's own
`data/composers/*.json` aggregation, `knowledge/COVERAGE.md`, the CSDb scener
page for Drumtex, and DeepSID file listings for both credited composers.

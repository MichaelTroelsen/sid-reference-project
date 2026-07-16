# Power Music

```json
{
  "id": "power-music",
  "name": "Power Music",
  "aliases": ["Power_Music"],
  "authors": ["Michael Kukat (Raster Buster)"],
  "released": "1989 (V1.0, group Matrix); V1.6 17 Sep 1989 (group ACT 501); DeepSID lists active 1989-1990",
  "status": "stub",
  "platform": "Native C64 tool (type-in listing published in the German magazine 64'er, per DeepSID's players.json description and a corroborating CSDb user comment — NOT from a SIDId comment field, since this tag's sidid.json entry has no comment field at all)",
  "csdb_release": 61127,

  "memory": {
    "load_address": "TODO: not documented publicly, no disassembly done",
    "zero_page": "DeepSID's player spec lists 4 bytes ($FC-$FF), plus sometimes $02, as the zero-page footprint (data/players.json, no further detail on which routine uses which byte)",
    "layout": "TODO: no disassembly done"
  },
  "entry": {
    "init": "TODO: no disassembly done",
    "play": "TODO: no disassembly done"
  },
  "speed": "TODO: not documented. A 2008 CSDb user comment on the V1.6 release notes the player's rastertime 'sucks pretty much compared to what the player can do' — a usability complaint, not a measured speed model",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly done",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Type-in listing, not a distributed binary release in the usual scene sense: DeepSID's description says 'This was written as a type-in listing for the German magazine 64'er' (data/players.json), and a CSDb user comment on the V1.6 release corroborates this first-hand ('I remember typing this one in from a magazine, possibly 64'er... I did use it for several tunes'). This explains why usage in the dataset is concentrated on a handful of composers rather than spread widely like a scene-distributed tracker.",
    "Two distinct CSDb releases exist for the same author/tool: V1.0 (csdb.dk/release/?id=61127, group Matrix, 1989, code by Raster Buster / music demos by Michael Winterberg) and V1.6 (csdb.dk/release/?id=61126, group 'ACT 501', 17 September 1989). SIDId's single 'Power_Music' tag does not distinguish between them, and the local dataset only carries the one unversioned raw tag — so the two releases cannot currently be told apart from file data alone.",
    "Composer concentration in this dataset (39 files, 8 composers) is heavy: 'Syndrom The' alone accounts for 16/39 files (41%), and the top two composers ('Syndrom The' + 'Sonki') account for 26/39 (67%). Combined with the type-in-listing origin, this reads as a small handful of people who typed the listing in and kept using it, not a widely-adopted scene tool (see data/composers/*.json aggregation).",
    "No source code, disassembly, or format documentation was found in this research pass — searches for a Power Music source repo, Codebase64 article, or format writeup came up empty. Every runtime field is left TODO rather than guessed."
  ],
  "sources": [
    "SIDId database entry (data/sidid.json byTag['Power_Music']): author 'Michael Kukat (Raster Buster)', released '1989 Matrix', reference https://csdb.dk/release/?id=61127",
    "DeepSID player spec (data/players.json, title 'Power Music v1.x'): developer 'Michael Kukat', start_year 1989, end_year 1990, csdb_id 61126, distribution 'Type-in listing + Freeware', zero_pages '4 bytes ($FC-$FF) + sometimes also $02'",
    "CSDb release V1.0: https://csdb.dk/release/?id=61127 (group Matrix, code: Raster Buster, music: Michael Winterberg; includes demo SIDs Axel-F, Delta-Music, Musique Nonstop)",
    "CSDb release V1.6: https://csdb.dk/release/?id=61126 (group ACT 501, 17 September 1989; user comments confirm type-in-listing origin and note poor rastertime efficiency)",
    "Local dataset: 39 files tagged 'Power_Music' across 8 composers (composer counts derived from data/composers/*.json for this card)"
  ]
}
```

## Overview

Power Music is a native C64 music editor written by Michael Kukat, active under
the handle "Raster Buster," first released in 1989. DeepSID's spec entry
states plainly that it began life as a type-in listing published in the German
computer magazine *64'er* — a first-hand CSDb comment from 2008 corroborates
this ("I remember typing this one in from a magazine, possibly 64'er"). Two
CSDb releases exist: V1.0 (group Matrix, 1989, bundled with demo tunes
including a Michael Winterberg piece) and V1.6 (group "ACT 501," 17 September
1989). In the local dataset it accounts for 39 files across only 8 composers,
with usage heavily concentrated in two of them — consistent with a
magazine-listing tool that a small number of people typed in and kept using,
rather than a widely-distributed scene tracker.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: it's a **type-in listing**
(explains the narrow, concentrated usage), there are **two distinct CSDb
releases** (V1.0/Matrix and V1.6/ACT 501) that the single unversioned SIDId/
Player-ID tag cannot distinguish between, and **no source or documentation
was found** — every runtime fact stays `TODO`.

## Disassembly notes

None done. No public source, disassembly, or format writeup was located for
Power Music in this research pass. A future pass would need to disassemble a
representative `Power_Music`-tagged `.sid` from the dataset (init/play read
from its PSID header) to fill any Tier 3 field — the only concrete lead is
DeepSID's zero-page note ($FC-$FF, sometimes $02).

## Verification

**Not verified — `status: stub`.** Only identity facts (author, release
years, the two CSDb releases, the type-in-listing origin, and DeepSID's
zero-page note) are confirmed, from data/sidid.json, data/players.json, and
the two CSDb release pages. No memory map, entry point, speed model, or data
format has been reverse-engineered; all such fields are left `TODO` rather
than guessed.

## Sources

See the `sources` array — the cached SIDId entry, the cached DeepSID player
spec, both CSDb release pages (V1.0 id=61127, V1.6 id=61126), and the local
composer-file aggregation from `data/composers/*.json`.

# ID_3.x

```json
{
  "id": "id-3x",
  "name": "ID_3.x",
  "aliases": ["ID_3.x"],
  "authors": ["Danjel Nyberg (Amadeus)"],
  "released": "TODO: no tool-release date found; local files carry the composer's active year 2003",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house routine embedded in Amadeus's own tracks, not a released standalone editor (unconfirmed)",
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
    "SIDId's sidid.nfo carries only an AUTHOR line for this tag — no NAME, RELEASED, REFERENCE, or COMMENT — the same thin-record pattern seen on other personal/in-house routines in this project (e.g. toaster-digi). No independent web search turned up a tool named 'ID 3.x' or similar; the tag is otherwise unattested outside SIDId and the local dataset.",
    "100% single-composer concentration: all 6 locally-tagged files belong to the composer 'Amadeus_Meka_Design' (Danjel Nyberg, handle Amadeus, a Swedish scener) — data/composers/amadeus-meka-design.json. This, plus the absent NAME/reference fields, points to a personal routine rather than a published, titled editor.",
    "The '_3.x' version-style suffix in the tag name suggests at least an internal versioning scheme existed, but no sibling tags (e.g. 'ID_1.x', 'ID_2.x') were found in this project's coverage data or in sidid.nfo, so the version history itself is unconfirmed."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 6 files tagged ID_3.x, all by composer 'Amadeus_Meka_Design' — data/composers/amadeus-meka-design.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, Amadeus / Danjel Nyberg (Sweden): https://csdb.dk/scener/?id=7848"
  ]
}
```

## Overview

ID_3.x is a SIDId Player-ID tag attributed only to an author, **Danjel
Nyberg**, handle **Amadeus** (a Swedish scener), with no title, release date,
or CSDb reference recorded by SIDId. Locally it appears in only **6 files,
all by Amadeus himself** (data/composers/amadeus-meka-design.json). No
dedicated CSDb tool/release entry or independent documentation was found
under this name during web research, consistent with an in-house routine
that was never packaged as a titled, distributed editor.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's record is author-only —
no name/reference/comment; (2) 100% single-composer usage; (3) the version-
style suffix ("_3.x") implies an internal versioning scheme with no
attested siblings found.

## Disassembly notes

None done here. No public source, manual, or CSDb entry was found. All Tier
3 fields are `TODO`.

## Verification

Not verified. Seeded entirely from `data/composers/amadeus-meka-design.json`,
`data/sidid.json`, and a CSDb scener-page check. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer aggregation,
and the CSDb scener profile for Amadeus/Danjel Nyberg.

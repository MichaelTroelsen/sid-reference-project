# StreetTuff_4K

```json
{
  "id": "street-tuff-4k",
  "name": "StreetTuff_4K",
  "aliases": ["StreetTuff_4K"],
  "authors": ["Frank Fenske (Street Tuff)"],
  "released": "TODO: no tool-release date found; local files include titles referencing 4KB-intro compo entries",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house routine associated with 4KB-size-constrained productions, not a released standalone editor (unconfirmed)",
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
    "DISTINCT from the already-carded 'StreetTuff_Digi' tag ([[street-tuff-digi]]) — same composer/author (Frank Fenske / Street Tuff) but a DIFFERENT SIDId Player-ID byte signature. No merge is asserted between the two without direct code/signature evidence; treat as sibling but separate routines/tags.",
    "No sidid.nfo entry exists for 'StreetTuff_4K' (checked data/sidid.json byTag — absent), same as its 'StreetTuff_Digi' sibling.",
    "100% single-composer concentration: all 3 locally-tagged files ('1 Kilobyte of GOA', '4Krawall', 'Bendingbars') belong to Frank Fenske alone (data/composers/tuff-street.json). The '4K' in the tag and file titles ('4Krawall', '1 Kilobyte of GOA') strongly suggest association with 4-kilobyte size-constrained demo/intro compo entries — a size-category naming convention, not confirmation of the routine's playback mechanism.",
    "Street Tuff = Frank Fenske, a German scener best known as the driving force of Tristar & Red Sector Inc.'s (TRSI) C64 division (ex-member Digital Sounds System). He passed away in early 2025 (TRSI tribute post cited below)."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'StreetTuff_4K' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 3 files tagged StreetTuff_4K, all by composer 'tuff-street' — data/composers/tuff-street.json; see knowledge/COVERAGE.md rank 58",
    "CSDb scener profile, Street Tuff / Frank Fenske (groups Digital Sounds System, TRSI): https://csdb.dk/scener/?id=2491",
    "TRSI tribute post confirming real name and TRSI role: https://8bitlegends.com/2025/03/31/street-tuff-trsi-has-left-us-so-early/",
    "Sibling card for the same composer's other, distinct tag: knowledge/players/street-tuff-digi.md"
  ]
}
```

## Overview

StreetTuff_4K is a SIDId Player-ID tag with no `sidid.nfo` documentation of
its own (checked, absent). It is credited by local data to **Frank
Fenske**, handle **Street Tuff**, a German scener best known for driving
TRSI's C64 division (he passed away in early 2025). It is a DISTINCT tag
from the same composer's already-carded `StreetTuff_Digi` — same author,
different byte signature, no merge asserted. All **3** locally-tagged
files (titles including "1 Kilobyte of GOA" and "4Krawall") point to
association with 4KB size-constrained demo/intro compo entries, but that
is a naming-convention inference, not confirmation of a specific playback
mechanism.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) distinct from, and not merged
with, the sibling `street-tuff-digi` card despite the same author; (2) no
SIDId record exists for this tag; (3) 100% single-composer usage; (4) "4K"
naming implies size-compo association, not a confirmed technique.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/tuff-street.json` and
`data/sidid.json` (checked, absent), plus the existing `street-tuff-digi`
card for composer-identity cross-reference. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent), local composer
aggregation, CSDb scener profile, and the TRSI tribute post for Frank
Fenske's identity.

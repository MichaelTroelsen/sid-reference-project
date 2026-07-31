# StreetTuff_4K

```json
{
  "id": "street-tuff-4k",
  "name": "StreetTuff_4K",
  "aliases": ["StreetTuff_4K"],
  "authors": ["Frank Fenske (Street Tuff)"],
  "released": "Not a tool release; earliest attested tune use 2013-03-31 ('4Krawall', CSDb SID id 48257, Released field '2013 Tristar & Red Sector Inc.', shown at Revision 2013 4K-intro compo). Census of all 3 tagged files' own CSDb `Released` fields: '4Krawall' 2013-03-31, '1 Kilobyte of GOA' 2013-12-07 (NorthCon 2013), 'Bendingbars' 2021-11-19 (ECM Compo 2021, one-file demo) — https://csdb.dk/webservice/?type=sid&id=48257 / id=49619 / id=59815",
  "status": "stub",
  "platform": "No dedicated CSDb tool/release entry exists for a 'StreetTuff_4K' player or editor — checked Street Tuff's CSDb scener profile, which lists only ad-hoc size-coding routines (e.g. '14 byte soundroutine' 2012, '11b Vocoder' / '12b vocoder' 256b intros 2012) and demo/dev tools ('Ptoingview', SPO256 speech work), nothing matching this tag name: https://csdb.dk/scener/?id=2491 . Consistent with an in-house, per-production sound routine embedded in size-constrained (4K-intro / one-file-demo) C64 releases, not a released standalone editor. Native C64 machine code (no cross-platform tooling found).",
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
    "Street Tuff = Frank Fenske, a German scener best known as the driving force of Tristar & Red Sector Inc.'s (TRSI) C64 division (ex-member Digital Sounds System). He passed away in early 2025 (TRSI tribute post cited below).",
    "PSID header LoadAddr/InitAddr/PlayAddr differ across all 3 tagged files (4Krawall: $15F1/$1670/$1633; 1 Kilobyte of GOA: $0800/$0800/$0803; Bendingbars: $8800/$8800/$8849 — CSDb webservice `sid` records for ids 48257/49619/59815). Different load addresses per file is consistent with a routine hand-embedded per production rather than one fixed player loaded at a stable address; this is PSID header metadata, not a disassembly fact, and is not promoted into the Tier 3 `memory`/`entry` fields.",
    "Frank Fenske was a size-coding specialist (per his CSDb scener profile: '14 byte soundroutine', '11b'/'12b Vocoder' 256-byte intros, all 2012) — consistent with StreetTuff_4K being a small, purpose-built routine for 4K/1-file-demo compo entries rather than a general-purpose tracker.",
    "Census of all 3 tagged files' own CSDb `Released` fields (not tune titles, not UsedIn release years read loosely): 4Krawall 2013-03-31 (Revision 2013, 4K-intro compo, 1st place), 1 Kilobyte of GOA 2013-12-07 (NorthCon 2013, Mixed Music compo, 1st place), Bendingbars 2021-11-19 (ECM Compo 2021, C64 Demo compo, 1st place)."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'StreetTuff_4K' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 3 files tagged StreetTuff_4K, all by composer 'tuff-street' — data/composers/tuff-street.json; see knowledge/COVERAGE.md rank 58",
    "CSDb scener profile, Street Tuff / Frank Fenske (groups Digital Sounds System, TRSI), checked for any 'StreetTuff_4K' tool/release entry — none found, only size-coding soundroutines listed: https://csdb.dk/scener/?id=2491",
    "CSDb webservice SID records (own `Released`/`LoadAddr`/`InitAddr`/`PlayAddr`/`UsedIn` fields, all 3 tagged files individually queried): https://csdb.dk/webservice/?type=sid&id=48257 (4Krawall), https://csdb.dk/webservice/?type=sid&id=49619 (1 Kilobyte of GOA), https://csdb.dk/webservice/?type=sid&id=59815 (Bendingbars)",
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
files were individually censused against CSDb's own `sid`-record
`Released` field (not tune titles, not `UsedIn` release years): "4Krawall"
(2013-03-31, Revision 2013 4K-intro compo), "1 Kilobyte of GOA"
(2013-12-07, NorthCon 2013 mixed-music compo), and "Bendingbars"
(2021-11-19, ECM Compo 2021 one-file-demo). This is not a tool release —
Street Tuff's CSDb scener profile lists no tool/editor entry named
`StreetTuff_4K` (or anything resembling it), only ad-hoc size-coding
soundroutines (a 14-byte soundroutine, 256-byte vocoders, both 2012),
supporting the reading that this is an in-house routine hand-fitted to
each size-constrained production rather than a released standalone
editor. The 3 files' own PSID headers carry three different
load/init/play addresses, consistent with per-production embedding.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) distinct from, and not merged
with, the sibling `street-tuff-digi` card despite the same author; (2) no
SIDId record exists for this tag; (3) 100% single-composer usage; (4) "4K"
naming implies size-compo association, not a confirmed technique; (5) all
3 tagged files carry different PSID load/init/play addresses — per-file
census via CSDb webservice, not a promoted memory-map fact; (6) Frank
Fenske's own CSDb profile shows him doing byte-level size-coding
soundroutines elsewhere, corroborating "in-house per-production routine"
over "released tool".

## Disassembly notes

None done here. No public source or CSDb tool/editor entry was found under
this tag name. All Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/tuff-street.json`,
`data/sidid.json` (checked, absent), a full census of all 3 tagged files'
CSDb `sid`-record fields via the CSDb webservice, and the Street Tuff CSDb
scener profile (checked for any matching tool entry — none found). The
`street-tuff-digi` card was used for composer-identity cross-reference
only, not as a source of shared facts. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent), local composer
aggregation, CSDb scener profile (checked, no matching tool entry), CSDb
webservice `sid`-type records for all 3 tagged files individually, and the
TRSI tribute post for Frank Fenske's identity.

# ID_3.x

```json
{
  "id": "id-3x",
  "name": "ID_3.x",
  "aliases": ["ID_3.x"],
  "authors": ["Danjel Nyberg (Amadeus)"],
  "released": "TODO: no confirmed tool/editor release date. Census of all 6 ID_3.x-tagged files' own CSDb `Released` fields (csdb.dk webservice, type=sid) shows a 1993-2003 span, not the single 2003 'active' year previously recorded from the composer profile: Groovy id=7682 and Honey id=7686 both 1993, Bamse_Tramse id=7671 1994, Test_Song_3 id=7706 1998, Bungalow id=7673 and Newstart id=7694 both 2003. This is per-tune composition/release data, not a tool release date — no such date exists for the player itself.",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house routine embedded in Amadeus's own tracks, not a released standalone editor (unconfirmed). Additional check this pass: 'Meka Design' (the tag appended to this composer's HVSC folder name, and the publisher string on all 6 files' CSDb entries) is not a registered CSDb group — a site:csdb.dk search for a 'Meka Design' group returns nothing — consistent with it being Amadeus's personal/solo tag rather than a real team with a released tool.",
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
    "100% single-composer concentration: all 6 locally-tagged files belong to the composer 'Amadeus_Meka_Design' (Danjel Nyberg, handle Amadeus, a Swedish scener) — data/composers/amadeus-meka-design.json. This, plus the absent NAME/reference fields, points to a personal routine rather than a published, titled editor. Full census of all 6 (Bamse_Tramse, Bungalow, Groovy, Honey, Newstart, Test_Song_3) confirms this — no ID_3.x file was found for any other composer.",
    "The '_3.x' version-style suffix in the tag name suggests at least an internal versioning scheme existed, but no sibling tags (e.g. 'ID_1.x', 'ID_2.x') were found in this project's coverage data or in sidid.nfo, so the version history itself is unconfirmed.",
    "PSID header census (csdb.dk webservice, type=sid, all 6 files): every ID_3.x-tagged file shares an IDENTICAL LoadAddr=$1000 (4096), InitAddr=$1000 (4096), PlayAddr=$1003 (4099) — consistent with a single fixed-address in-house routine reused unchanged across tunes rather than a relocatable editor build. This is PSID header metadata, not a disassembly finding, so it is recorded here and NOT written into the Tier 3 `memory`/`entry` fields, which remain TODO.",
    "CORRECTION (2026-07-31 census pass): the composer profile's 'active: 2003' field had been read as this player's approximate era, but the 6 tagged files' own CSDb `Released` fields actually span 1993-2003 (see `released` field) — 1993, not 2003, is the earliest attested use. A single profile-level 'active' year is not a reliable proxy for a tag's usage span; the per-file `Released` field is."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 6 files tagged ID_3.x, all by composer 'Amadeus_Meka_Design' — data/composers/amadeus-meka-design.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, Amadeus / Danjel Nyberg (Sweden): https://csdb.dk/scener/?id=7848",
    "CSDb webservice (type=sid), queried for all 6 ID_3.x-tagged files this pass for Released/LoadAddr/InitAddr/PlayAddr: https://csdb.dk/webservice/?type=sid&id=7671 (Bamse_Tramse), &id=7673 (Bungalow), &id=7682 (Groovy), &id=7686 (Honey), &id=7694 (Newstart), &id=7706 (Test_Song_3)",
    "Negative search this pass: no 'Meka Design' CSDb group found (site:csdb.dk search); no 'ID_3.x' mentions on Lemon64 or Forum64; no independent tool documentation located anywhere on the web"
  ]
}
```

## Overview

ID_3.x is a SIDId Player-ID tag attributed only to an author, **Danjel
Nyberg**, handle **Amadeus** (a Swedish scener), with no title, release date,
or CSDb reference recorded by SIDId. Locally it appears in only **6 files,
all by Amadeus himself** (data/composers/amadeus-meka-design.json; census
confirmed — Bamse_Tramse, Bungalow, Groovy, Honey, Newstart, Test_Song_3). No
dedicated CSDb tool/release entry or independent documentation was found
under this name during web research (including targeted Lemon64/Forum64/
site:csdb.dk searches), consistent with an in-house routine that was never
packaged as a titled, distributed editor. Per-file CSDb `Released` fields put
its earliest attested use at 1993, not the 2003 figure a composer-profile
'active' field alone would suggest — the six files actually span 1993-2003.
All six also share an identical PSID load/init/play address ($1000/$1000/
$1003), consistent with one fixed-address in-house routine reused unchanged.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's record is author-only —
no name/reference/comment; (2) 100% single-composer usage, census-confirmed
across all 6 files; (3) the version-style suffix ("_3.x") implies an internal
versioning scheme with no attested siblings found; (4) identical PSID
load/init/play addresses across all 6 files (header metadata, not written
into Tier 3); (5) the "active: 2003" profile field is not a reliable proxy
for usage span — actual per-file `Released` years run 1993-2003.

## Disassembly notes

None done here. No public source, manual, or CSDb entry was found. All Tier
3 fields are `TODO`.

## Verification

Not verified. Seeded entirely from `data/composers/amadeus-meka-design.json`,
`data/sidid.json`, a CSDb scener-page check, and this pass's CSDb `type=sid`
webservice census of all 6 tagged files plus negative Lemon64/Forum64/
csdb.dk group searches. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer aggregation,
the CSDb scener profile for Amadeus/Danjel Nyberg, and this pass's CSDb
`type=sid` webservice queries for all 6 tagged files.

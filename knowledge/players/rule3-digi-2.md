# Rule3_Digi_2

```json
{
  "id": "rule3-digi-2",
  "name": "Rule3_Digi_2",
  "aliases": ["Rule3_Digi_2"],
  "authors": ["Marcin Jędrusik (Helios)"],
  "released": "TODO: no explicit tool-release year in SIDId",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house digi routine of the Polish group Rule3, embedded in member Helios's own tracks (unconfirmed)",
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
    "SIDId's entry for this tag has only an AUTHOR line — no NAME, RELEASED, REFERENCE, or COMMENT (data/sidid.json byTag['Rule3_Digi_2']) — no playback-technique claim, so per this project's rule ('digi by name is not evidence') none is asserted here.",
    "'Rule3' in the tag name is a real Polish C64 group (CSDb group #746), not a version/revision number — the composer's own local profile id combines group+handle as 'rule3-helios' (data/composers/rule3-helios.json), matching SIDId's credited author Marcin Jędrusik (Helios) exactly. The '_2' suffix (vs. a presumed 'Rule3_Digi' tag not present in this batch/COVERAGE.md) most likely denotes a second routine/revision, but no source states this explicitly.",
    "100% single-composer concentration: both locally-tagged files ('5...4...Fasta!', 'Das Boot') belong to composer 'rule3-helios' (Marcin Jędrusik) alone (data/composers/rule3-helios.json) — direct match to SIDId's named author, unlike several other tags in this batch where the SIDId author and the local file composer diverge.",
    "Marcin Jędrusik (Helios) is a Polish scener/composer (data/composers/rule3-helios.json, country Poland, csdb_id 15843); no CSDb tool/release page for a standalone editor under this name was found."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no other fields): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['Rule3_Digi_2']",
    "CSDb group #746, Rule3 (Poland): https://csdb.dk/group/?id=746",
    "Local dataset: 2 files tagged Rule3_Digi_2, both by composer 'rule3-helios' — data/composers/rule3-helios.json; see knowledge/COVERAGE.md rank 121",
    "CSDb scener profile, Marcin Jędrusik / Helios: data/composers/rule3-helios.json profile.csdb_id 15843"
  ]
}
```

## Overview

Rule3_Digi_2 is a SIDId-fingerprinted digi routine attributed to **Marcin
Jędrusik**, handle **Helios**, a member of the Polish group **Rule3** (CSDb
group #746). Unlike several other tags in this batch, SIDId's named author
matches the local file composer exactly. Both locally-tagged files belong to
Helios alone, consistent with a personal, in-house routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId's record is author-only (no
technique claim); the direct author/composer match is stronger identity
evidence than most of this batch's other tags; the `_2` suffix's meaning is
unconfirmed.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/rule3-helios.json`, SIDId,
and CSDb. `status: stub`.

## Sources

See the `sources` array — SIDId, the local composer aggregation, and CSDb.

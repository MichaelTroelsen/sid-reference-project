# StreetTuff_Digi

```json
{
  "id": "street-tuff-digi",
  "name": "StreetTuff_Digi",
  "aliases": ["StreetTuff_Digi"],
  "authors": ["Frank Fenske (Street Tuff)"],
  "released": "TODO: no tool-release date found; local files span the composer's later output (active year 2021 per composer profile)",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house digi/sample routine embedded in Street Tuff's own tracks, not a released standalone editor (unconfirmed)",
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
    "No SIDId sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). This is a bare Player-ID byte-signature with no author/release/comment field from SIDId itself, distinct from the sibling tag 'StreetTuff_4K' (rank 82 in knowledge/COVERAGE.md, also uncarded here, not investigated as part of this batch).",
    "100% single-composer concentration: all 3 locally-tagged files ('Acid Preview', 'Calling Earth', 'G-Spot (tinitus remix)') belong to the composer 'Street Tuff' himself (data/composers/tuff-street.json) — the strongest available personal-routine signal, consistent with an in-house digi routine rather than a distributed tool.",
    "Street Tuff = Frank Fenske, a German scener best known as the driving force of Tristar & Red Sector Inc.'s (TRSI) C64 division (also ex-member of Digital Sounds System). He passed away in early 2025; TRSI's tribute post is cited below. Nothing in the sources checked documents the digi routine's mechanism or origin beyond the tag name — 'digi by name' is not itself confirmation of a specific playback technique (project rule), so no technique claim is made here.",
    "The '_Digi' suffix by itself is not evidence of a specific sample-playback mechanism — no independent confirmation (SIDId comment, CSDb credit, manual) of what technique this routine actually uses was found."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'StreetTuff_Digi' (author-only or absent tags are recorded in data/sidid.json; this tag is absent): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 3 files tagged StreetTuff_Digi, all by composer 'tuff-street' — data/composers/tuff-street.json; see knowledge/COVERAGE.md rank 83",
    "CSDb scener profile, Street Tuff / Frank Fenske (groups Digital Sounds System, TRSI): https://csdb.dk/scener/?id=2491",
    "TRSI tribute post confirming real name and TRSI role: https://8bitlegends.com/2025/03/31/street-tuff-trsi-has-left-us-so-early/"
  ]
}
```

## Overview

StreetTuff_Digi is a SIDId Player-ID byte-signature tag with no upstream
SIDId documentation (no `sidid.nfo` entry at all — checked `data/sidid.json`).
Locally it appears in only **3 files, all by a single composer**: **Frank
Fenske**, handle **Street Tuff**, a German scener best known for driving
TRSI's C64 division (he passed away in early 2025). The 100% single-composer
concentration and complete absence of any SIDId record point to an in-house,
personal digi routine rather than a published tool — but no source actually
confirms the playback mechanism, so per this project's rule that "digi by
name is not evidence," no technique claim is made.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry exists at all for
this tag (a thinner record than most in this batch); (2) 100% single-composer
usage; (3) do not conflate with the separate, uncarded 'StreetTuff_4K' tag;
(4) the name implies sample playback but nothing confirms the actual
technique.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded entirely from local `data/composers/tuff-street.json`
and CSDb scener/tribute research. `status: stub`.

## Sources

See the `sources` array — SIDId (checked, absent), the local composer
aggregation, and CSDb/8bitlegends for Frank Fenske's identity.

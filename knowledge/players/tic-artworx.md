# TIC/Artworx (player routine)

```json
{
  "id": "tic-artworx",
  "name": "TIC/Artworx (player routine)",
  "aliases": ["TIC/Artworx"],
  "authors": ["Rolf Nooteboom (The Invincible Cracker / TIC)"],
  "released": "TODO: no RELEASED/REFERENCE field; data/sidid.json has no entry for this tag",
  "status": "stub",
  "platform": "TODO: no CSDb tool release or source repo found under this name. Reads as an in-house routine tied to the group Artworx / composer's own handle.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG: all 3 locally-tagged files (each titled '<?>' — no track name recorded, csdb ids 37931/37932/37933) are credited to composer 'The_Invincible_Cracker', author string 'Rolf Nooteboom (TIC)' (data/composers/the-invincible-cracker.json).",
    "No SIDId entry exists for this tag (data/sidid.json checked, absent). CSDb corroborates 'The Artworx' and 'The Invincible Cracker' collaborating on C64 releases in 1987 ('Hot Chocolate', 'Hi Tech Hero') — consistent with the tag's group suffix — but no player/tool-specific documentation was found beyond that group-collaboration evidence.",
    "The tag suffix 'Artworx' likely refers to the demo/crack group 'The Artworx', distinct from the composer's own handle 'TIC' — but no source explicitly states this routine was authored jointly or shared beyond Nooteboom's own files in this dataset."
  ],
  "sources": [
    "data/sidid.json: no entry for 'TIC/Artworx' (checked, absent)",
    "Local dataset: data/composers/the-invincible-cracker.json — 3 files tagged 'TIC/Artworx', all authored 'Rolf Nooteboom (TIC)'; see knowledge/COVERAGE.md row #57 (3 files)",
    "CSDb release, 'Hot Chocolate' by The Artworx and The Invincible Cracker (1987): https://csdb.dk/release/?id=75365",
    "CSDb release, 'Hi Tech Hero' by The Artworx and The Invincible Cracker (1987): https://csdb.dk/release/?id=220318"
  ]
}
```

## Overview

`TIC/Artworx` is a bare-signature SIDId tag matching all 3 locally-tagged
files, each by composer **Rolf Nooteboom**, handle **The Invincible Cracker
("TIC")**. No SIDId fingerprint entry exists for this tag. CSDb corroborates
Nooteboom's group, "The Artworx," collaborating with "The Invincible Cracker"
on 1987 C64 releases — consistent with the tag's naming — but no
tool/format-specific documentation was found.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer concentration, no
SIDId corroboration, only general group-collaboration evidence from CSDb.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established.

## Sources

See the `sources` array — local composer-file aggregation and two CSDb
release pages.

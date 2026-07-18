# Sanyo_Digi

```json
{
  "id": "sanyo-digi",
  "name": "Sanyo_Digi",
  "aliases": ["Sanyo_Digi"],
  "authors": ["Stephane Martel (Sanyo)"],
  "released": "TODO: no explicit tool-release date found in SIDId; earliest corroborated 'Sampling' credit is 1990 ('Digi House')",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine embedded in Sanyo's own tracks, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId (data/sidid.json) has an entry for this tag with an AUTHOR line only — 'Stephane Martel (Sanyo)' — no NAME, reference, or comment. The absence of a NAME field is a signal this was never packaged as a titled, released tool.",
    "Real corroborating evidence for the 'digi' label: CSDb credits Sanyo with an explicit 'Text, Sampling' role on 'Digi House' (1990 Music release) — a title-level match to the general theme, and CSDb also lists his handle alternative as 'Digital Sanyo', reinforcing the association. His other credits ('Tropical Storm' 1992, 'Evolution' 1991 — both Optic Vision demos) are listed as 'Music, Idea' rather than Sampling, but those exact titles match 2 of the 3 locally-tagged files ('Evolution (tune 3)'/'(tune 5)', 'Tropical Storm (tune 6)'), so the composer/production link is solid even where the specific credited role on those pages is 'Music' rather than 'Sampling'.",
    "3 files, 1 composer: Sanyo — 'Evolution (tune 3)', 'Evolution (tune 5)', 'Tropical Storm (tune 6)'.",
    "Sanyo is Canadian, group Optic Vision (since 1-5-1991), function Musician."
  ],
  "sources": [
    "data/sidid.json byTag: Sanyo_Digi — author 'Stephane Martel (Sanyo)', no name/reference/comment",
    "CSDb scener Sanyo (Canada, aka 'Digital Sanyo'; group Optic Vision; 'Text, Sampling' credit on 'Digi House' 1990; 'Music, Idea' on 'Tropical Storm'/'Evolution'): https://csdb.dk/scener/?id=7418",
    "Local dataset: 3 files tagged Sanyo_Digi, 1 composer (Sanyo) — data/composers/sanyo.json",
    "data/composers/sanyo.json (profile country Canada, csdb id 7418)"
  ]
}
```

## Overview

Sanyo_Digi is the SIDId tag for a digi/sample-playback routine attributed
to **Stephane Martel**, handle **Sanyo** (aka "Digital Sanyo"), a Canadian
scener (Optic Vision). SIDId's entry carries only an `AUTHOR` line. It
appears in only **3 files, all by Sanyo himself** — "Evolution (tune
3)"/"(tune 5)" and "Tropical Storm (tune 6)", both from Optic Vision
demos. Corroboration: CSDb credits Sanyo with an explicit "Text, Sampling"
role on "Digi House" (1990), and his alternate handle "Digital Sanyo"
reinforces the digi association, though the exact locally-tagged
productions ("Tropical Storm", "Evolution") are themselves credited
"Music, Idea" on CSDb rather than "Sampling".

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId names the author but no
titled product; (2) the "Sampling" role credit is on a differently-titled
release ("Digi House") than the 3 locally-tagged files, though the
composer/production link to "Tropical Storm"/"Evolution" is a direct
title match via the "Music, Idea" credit; (3) the "Digital Sanyo" alt-
handle is corroborating context, not a technique confirmation by itself.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page for Sanyo,
and the local composer aggregation.

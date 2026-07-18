# Madhacker_Digi

```json
{
  "id": "madhacker-digi",
  "name": "Madhacker_Digi",
  "aliases": ["Madhacker_Digi"],
  "authors": ["David (Madhacker)"],
  "released": "TODO: no tool-release date documented; sampled local file (Fine Time, CSDb sid id 42388) is dated 1990, Ikon Visual",
  "status": "stub",
  "platform": "TODO: appears to be a personal digi/sample-playback routine embedded in Madhacker's own tracks, not a released standalone tool — no dedicated CSDb tool/release entry found under this exact tag name (unconfirmed)",
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
    "SIDId (data/sidid.json byTag.\"Madhacker_Digi\") records only 'AUTHOR: David (Madhacker)' — no name, released date, or comment.",
    "CSDb's scener page for Madhacker (id 4745; ex-Cobra [founder], ex-Ikon Visual [founder], ex-NATO; Australia) lists real 'Sampling'-role credits on several of his own productions: 'Sucker DJ Mix' (1991, Code/Music/Graphics/Sampling), 'U Can't Touch This!' (1990, Code/Graphics/Sampling), 'Sonic Youth' (1990, Code/Graphics/Text/Sampling), 'Contact IKV Now' (1991, Code/Sampling), 'Can't Touch IKV!' (1990, Code/Sampling), 'Demo of the Year 1990' (Code/Text/Sampling) — genuine, scene-attested sampling work. None of those titles directly match the 6 locally-tagged music filenames (Fine Time, Get Up, Helyom Halib, etc.), so this is corroborating biography (he genuinely did sampling work around 1990-91) rather than a confirmed disassembly of THESE 6 specific files.",
    "Do not confuse with a different, separately-named thing: CSDb also credits Madhacker with coding a standalone tool called 'Digi-Mixer' (1990, credited 'Code' only) — distinct from both this SIDId tag ('Madhacker_Digi') and from Gyula Szalai/Jules's unrelated 'Digimixer V2.0' (Fun Factory, 1993 — see knowledge/players/digimixer-funfactory.md). No evidence ties Madhacker's own embedded routine (this tag) to his 'Digi-Mixer' tool release; flagged only to prevent conflating three similarly-named but distinct things.",
    "Fully single-composer usage: all 6 locally-tagged files belong to Madhacker himself (data/composers/madhacker.json)."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): data/sidid.json byTag.\"Madhacker_Digi\"",
    "CSDb scener profile, Madhacker (groups Cobra/Ikon Visual/NATO, Australia, multiple 'Sampling'-role credits 1990-91): https://csdb.dk/scener/?id=4745",
    "CSDb SID-file entry 'Fine Time' (David/Madhacker, 1990 Ikon Visual, PSID header): https://csdb.dk/sid/?id=42388",
    "Local dataset: 6 files tagged 'Madhacker_Digi', all under composer Madhacker — data/composers/madhacker.json"
  ]
}
```

## Overview

Madhacker_Digi is the local/SIDId tag for a digi/sample-playback routine
attributed to **David**, handle **Madhacker**, an Australian scener
(founder of Cobra and Ikon Visual, later NATO). SIDId's index carries only an
author line, no release date or reference. Locally it covers 6 files, all by
Madhacker himself. CSDb independently and genuinely credits Madhacker with a
"Sampling" role on several of his own 1990-91 productions — real
corroboration that he did sampling work — though none of those specific
credited titles match the 6 locally-tagged filenames, so this remains
biographical corroboration rather than a confirmed disassembly of these
particular files.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) genuine CSDb "Sampling" credits
exist for Madhacker but on different titles than the locally-tagged files;
(2) a separate CSDb-documented tool, "Digi-Mixer" (1990, his own code), must
not be confused with this tag or with the unrelated "Digimixer V2.0" by
Jules/Fun Factory; (3) 100% single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found
specifically for this SIDId tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity is SIDId-sourced, scene
corroboration from CSDb's scener page, composer concentration from local
dataset aggregation. No runtime fact has been disassembled or traced.

## Sources

See the `sources` array — SIDId's sidid.nfo, CSDb's Madhacker scener profile,
one sampled CSDb SID-file entry, and local composer-file aggregation.

# Maxx_Digi

```json
{
  "id": "maxx-digi",
  "name": "Maxx_Digi",
  "aliases": ["Maxx_Digi"],
  "authors": ["Zana Bela (Maxx)"],
  "released": "TODO: no tool-release date documented; sampled local file (Acid Party, CSDb sid id 47871) is dated 199?, Alien Destruction",
  "status": "stub",
  "platform": "TODO: appears to be a personal digi/sample-playback routine embedded in Maxx's own tracks, not a released standalone tool — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId (data/sidid.json byTag.\"Maxx_Digi\") records only 'AUTHOR: Zana Bela (Maxx)' — no name, released date, or comment.",
    "CSDb's scener page for Maxx (id 18888; ex-Alien Destruction, ex-Axis; Hungary) lists one 'Sampling'-role credit ('Dream World', 1997 Music Collection, Alien Destruction) that DOES partially match a locally-tagged filename — one of the 5 tagged files is 'Dream World (intro)', the intro variant of the same production. This is real, if imprecise (title variant, not an exact match), corroboration that Maxx did sampling work on this specific piece.",
    "Fully single-composer usage: all 5 locally-tagged files belong to Maxx himself (data/composers/maxx.json)."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): data/sidid.json byTag.\"Maxx_Digi\"",
    "CSDb scener profile, Maxx / Zana Bela (groups Alien Destruction/Axis, Hungary; 'Sampling' credit on 'Dream World'): https://csdb.dk/scener/?id=18888",
    "CSDb SID-file entry 'Acid Party' (Zana Bela/Maxx, 199? Alien Destruction, PSID header): https://csdb.dk/sid/?id=47871",
    "Local dataset: 5 files tagged 'Maxx_Digi', all under composer Maxx — data/composers/maxx.json (includes 'Dream World (intro)', matching CSDb's 'Sampling' credit on 'Dream World')"
  ]
}
```

## Overview

Maxx_Digi is the local/SIDId tag for a digi/sample-playback routine
attributed to **Zana Bela**, handle **Maxx**, a Hungarian scener (groups
Alien Destruction, Axis). SIDId carries only an author line. Locally it
covers 5 files, all by Maxx himself, including "Dream World (intro)" — a
title variant of "Dream World", the exact production CSDb credits Maxx with
a "Sampling" role on. This is real, if imprecise, corroboration for this
specific piece of work.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has author only, no
release/reference; (2) CSDb's "Sampling" credit on "Dream World" partially
matches the locally-tagged "Dream World (intro)" — a title-variant match,
genuine but not exact; (3) 100% single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity from SIDId, scene context
from CSDb with a partial title match, composer concentration from local
dataset aggregation. No runtime fact has been disassembled or traced.

## Sources

See the `sources` array — SIDId's sidid.nfo, CSDb's Maxx scener profile, one
sampled CSDb SID-file entry, and local composer-file aggregation.

# Mcee_Digi

```json
{
  "id": "mcee-digi",
  "name": "Mcee_Digi",
  "aliases": ["Mcee_Digi"],
  "authors": ["Mcee"],
  "released": "TODO: no tool-release date documented; sampled local file (Break the Chain, CSDb sid id 40798) header shows '199? Bad Karma' (year uncertain)",
  "status": "stub",
  "platform": "TODO: appears to be a personal digi/sample-playback routine embedded in Mcee's own tracks, not a released standalone tool — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "No SIDId entry exists for this tag at all (data/sidid.json byTag lookup for 'Mcee_Digi' returns undefined).",
    "Unusually strong CSDb corroboration despite the missing SIDId entry: CSDb's scener page for Mcee (id 17820; group Bad Karma; Australia) lists explicit 'Sampling'-role credits on releases whose titles directly match locally-tagged files — 'Finally I-Play' (credited 'Music, Sampling') and 'Break the Chain' (credited 'Code, Music, Sampling') are BOTH among the 6 files tagged Mcee_Digi in this dataset. This is a rare case in this batch where the scene credit matches the exact tagged filename, not just the general author.",
    "Fully single-composer usage: all 6 locally-tagged files belong to Mcee (data/composers/mcee.json)."
  ],
  "sources": [
    "CSDb scener profile, Mcee (group Bad Karma, Australia; 'Sampling'-role credits on 'Finally I-Play' and 'Break the Chain', among others): https://csdb.dk/scener/?id=17820",
    "CSDb SID-file entry 'Break the Chain' (Mcee, 199? Bad Karma, PSID header): https://csdb.dk/sid/?id=40798",
    "Local dataset: 6 files tagged 'Mcee_Digi', all under composer Mcee — data/composers/mcee.json",
    "data/sidid.json (checked: no 'Mcee_Digi' entry exists in byTag, confirming the absence noted above)"
  ]
}
```

## Overview

Mcee_Digi is the local raw tag for a digi/sample-playback routine attributed
to **Mcee**, an Australian scener (group Bad Karma). No SIDId entry exists
for this tag, but CSDb independently corroborates the "digi"/sampling
association more directly than most tags in this batch: Mcee's own scener
page lists a "Sampling" role credit on both "Finally I-Play" and "Break the
Chain" — titles that match two of the 6 locally-tagged files exactly. All 6
files belong to Mcee himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry exists for this tag;
(2) despite that, CSDb's "Sampling" credits directly match two of the
locally-tagged filenames — stronger, more specific corroboration than most
other tags in this batch, which typically only match the author, not the
title; (3) 100% single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity/corroboration from CSDb's
scener profile with direct title matches, composer concentration from local
dataset aggregation. No runtime fact has been disassembled or traced.

## Sources

See the `sources` array — CSDb's Mcee scener profile, one sampled CSDb
SID-file entry, and local composer-file aggregation.

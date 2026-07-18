# ?Tork/Pulsar

```json
{
  "id": "tork-pulsar",
  "name": "?Tork/Pulsar",
  "aliases": ["?Tork/Pulsar"],
  "authors": ["Nick Torkington (Tork) — inferred from tag/composer identity; not independently confirmed as the routine's actual author"],
  "released": "TODO: no year found anywhere for this tag",
  "status": "stub",
  "platform": "TODO: 'Pulsar' names one of the two locally-tagged files directly ('Pulsar Intro') — plausibly a demo/production title reused in the tag name rather than a separate tool or group name; not confirmed. No SIDId entry or CSDb tool page found.",
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
    "2 files, 1 composer (100% Nick Torkington, HVSC composer folder 'Tork_and_Torky', England) — a personal routine. HVSC's own author field flags one file's authorship as uncertain ('Nick Torkington (Tork) <?>').",
    "One of the two files is titled 'Pulsar Intro', plausibly explaining the tag's second half as a specific demo/intro name rather than a group or tool — inference from the file title only, not sourced independently.",
    "No SIDId entry exists for '?Tork/Pulsar' (checked data/sidid.json directly)."
  ],
  "sources": [
    "Local dataset: data/composers/tork-and-torky.json — 2 files (Circus Games csdb_id 1262, Pulsar Intro csdb_id 41428); knowledge/COVERAGE.md rank #92",
    "data/sidid.json byTag — checked, no entry for '?Tork/Pulsar'"
  ]
}
```

## Overview

`?Tork/Pulsar` is a raw Player-ID tag covering 2 files, both by English
composer **Nick Torkington (Tork)**. No SIDId entry or CSDb tool page
exists for it. One of the two files is titled "Pulsar Intro", plausibly
explaining the tag's second half, though this is inference from the file
title alone.

## Quirks & gotchas

See the `quirks` array — a minimal, single-composer personal routine; the
leading `?` marks it as one of DeepSID/SIDId's own low-confidence tag
matches, the same convention documented on [[msb]] and
[[unknown-c64-driver]].

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data is
confirmed. No SIDId entry exists. No runtime fact was guessed.

## Sources

See the `sources` array — local composer data only; SIDId checked with no
match.

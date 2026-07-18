# Andy Wilson

```json
{
  "id": "andy-wilson",
  "name": "Andy Wilson",
  "aliases": ["Andy_Wilson"],
  "authors": ["Andy Wilson"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/editor release found under this name — appears to be a personal/in-house routine (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Andy_Wilson' (checked) — Player-ID-only signature.",
    "The single locally tagged file — 'Dan Dare - Pilot of the Future' — is attributed in the LOCAL COMPOSER dataset to composer 'BOGG' (Graham Marsh, England, CSDb scener 7729), NOT to 'Andy Wilson' — i.e. Player-ID's identified routine author ('Andy Wilson') differs from the HVSC-catalogued composer ('BOGG') for this file. This is a real, load-bearing discrepancy: it plausibly means BOGG's tune reuses/covers a playback routine originally written by a person or credited-as 'Andy Wilson' (a separate, uninvestigated identity — no CSDb scener match was searched for in this pass), rather than BOGG composing his own routine. Left unresolved (TODO) — do not assume these are the same person.",
    "Single-file, single-composer-in-catalogue tag — a very narrow signature, consistent with either a personal routine or a one-off reused/covered player."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Andy_Wilson': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener BOGG / Graham Marsh (England, HVSC-catalogued composer of the one tagged file, distinct from tag's 'Andy Wilson' attribution): https://csdb.dk/scener/?id=7729",
    "Local dataset: 1 file tagged Andy_Wilson — 'Dan Dare - Pilot of the Future', catalogued composer BOGG — see data/composers/bogg.json"
  ]
}
```

## Overview

`Andy_Wilson` is a raw Player-ID tag with a single locally tagged file,
"Dan Dare - Pilot of the Future" — catalogued under composer **BOGG**
(Graham Marsh, England) in the local HVSC-derived dataset, but the
Player-ID-identified routine author is a DIFFERENT name, "Andy Wilson".
SIDId has no entry for this tag. No dedicated CSDb tool/editor release page
was found.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag's author name ("Andy
Wilson") and the file's catalogued HVSC composer ("BOGG") do not match —
plausibly BOGG's tune reuses a routine by a separate person named/credited
Andy Wilson, but this is unresolved and NOT further investigated in this
pass (no CSDb scener search performed for "Andy Wilson" specifically).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/bogg.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb scener page
for the catalogued composer BOGG, and the local file aggregation.

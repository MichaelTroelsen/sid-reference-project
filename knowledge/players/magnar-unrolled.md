# Magnar / Unrolled

```json
{
  "id": "magnar-unrolled",
  "name": "Magnar / Unrolled",
  "aliases": ["Magnar/Unrolled"],
  "authors": ["Magnar (Magnar Harestad)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: 'Unrolled' plausibly describes the code technique (loop-unrolled 6502 playback) rather than a product name — no dedicated CSDb tool/editor release found under this name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Magnar/Unrolled' (checked) — Player-ID-only signature. Author Magnar Harestad, Sweden, CSDb scener 16913, per local composer profile (data/composers/magnar.json).",
    "The name 'Unrolled' is speculative but plausible shorthand for an unrolled (non-looping, straight-line) 6502 playback routine — a real, documented C64 optimization technique in general — but this specific tag's mechanism is NOT confirmed by any source found in this pass; left as an open, unconfirmed reading of the tag name, not a technical claim.",
    "Both locally tagged files are the SAME tune in two regional variants — 'Cherry Pepsi (NTSC)' and 'Cherry Pepsi (PAL)' — both by Magnar. This is 1 tune / 2 encodings, not 2 independent compositions; treat the file count as effectively n=1 for adoption purposes."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Magnar/Unrolled': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Magnar / Magnar Harestad (Sweden): https://csdb.dk/scener/?id=16913",
    "Local dataset: 2 files tagged Magnar/Unrolled (NTSC+PAL variants of one tune, 'Cherry Pepsi'), both by Magnar — see data/composers/magnar.json"
  ]
}
```

## Overview

`Magnar/Unrolled` is a raw Player-ID tag for a routine attributed to
**Magnar Harestad** (Sweden, CSDb scener 16913). Both locally tagged files
are NTSC/PAL variants of the same tune, "Cherry Pepsi" — effectively one
composition, not independent adoption. SIDId has no entry for this tag; the
"Unrolled" name plausibly hints at an unrolled 6502 playback loop, but that
reading is unconfirmed.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is effectively n=1 (two regional
encodings of one tune), a strongly personal-routine signature; the
"unrolled code" reading of the tag name is speculative, not sourced.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/magnar.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb scener
page, and the local composer aggregation.

# MicroRhythm

```json
{
  "id": "microrhythm",
  "name": "MicroRhythm",
  "aliases": ["MicroRhythm"],
  "authors": ["Simon Pick"],
  "released": "1986, Firebird",
  "status": "stub",
  "platform": "Native C64 drum-machine/sample-playback tool using real sampled sounds (per SIDId), by Simon Pick; released via Firebird 1986",
  "csdb_release": 49637,

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
    "SIDId gives a full, well-sourced entry (unlike most tags in this batch): author Simon Pick, released 1986 Firebird, CSDb release 49637, comment 'MicroRhythm uses real sampled sounds and was essentially a drum-machine' (deepsid_dl/sidid.nfo). This is genuine confirmed digi/sample usage — not an inferred 'digi-by-name' guess.",
    "All 5 locally tagged files are titled 'Micro*' (Microdisco, Microlatin, Microrhythm, Microtuned, Microvocals) and are all by Simon Pick himself, England, CSDb scener 17045 (also affiliated with The Sales Curve per local composer profile) — consistent with a small suite of sample-based demo tracks showcasing the drum-machine tool rather than a widely-adopted tracker used by other composers."
  ],
  "sources": [
    "SIDId sidid.nfo (name, author, year, publisher, CSDb reference, sampled-drum-machine comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 49637 (MicroRhythm, Simon Pick, 1986 Firebird): https://csdb.dk/release/?id=49637",
    "CSDb scener Simon Pick (England, The Sales Curve): https://csdb.dk/scener/?id=17045",
    "Local dataset: 5 files tagged MicroRhythm, all by Simon Pick — see data/composers/simon-pick.json"
  ]
}
```

## Overview

MicroRhythm is a C64 drum-machine/sample-playback tool by **Simon Pick**
(England), released via **Firebird in 1986** (CSDb release 49637). SIDId
explicitly confirms it "uses real sampled sounds and was essentially a
drum-machine" — genuine, sourced digi/sample-technique evidence rather than
an inferred name-based guess. All 5 locally tagged files are Simon Pick's
own "Micro*"-titled demo tracks.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the sample/drum-machine claim is
directly SIDId-sourced, not inferred from the tag's name; usage is entirely
concentrated in Simon Pick's own showcase tracks, suggesting this may not
have circulated as a widely-used tracker among other composers.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/simon-pick.json`, `data/sidid.json`) plus CSDb release/
scener pages researched for provenance. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 49637, CSDb scener
page for Simon Pick, and the local composer aggregation.

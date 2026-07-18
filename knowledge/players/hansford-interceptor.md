# Hansford/Interceptor

```json
{
  "id": "hansford-interceptor",
  "name": "Hansford/Interceptor",
  "aliases": ["Hansford/Interceptor"],
  "authors": ["Graham Hansford"],
  "released": "TODO: no date found — SIDId has no RELEASED field for this tag",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 in-game music player written by Graham Hansford for games at Interceptor Software (later Interceptor Micros Players) — no dedicated CSDb tool/release entry found under this name; likely per-game hand-coded rather than a distributed editor (unconfirmed)",
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
    "SIDId's entry for this tag has ONLY an AUTHOR field ('Graham Hansford') — no name, no released date, no reference/comment. The absence of a NAME field is consistent with this being an in-house/in-game routine rather than a titled, published tool.",
    "Direct match to the composer's own profile: Graham Hansford's HVSC/DeepSID profile lists focus 'PRO' and affiliation 'Interceptor Software' (data/composers/graham-hansford.json) — i.e. the tag name 'Hansford/Interceptor' exactly matches the composer plus his professional employer, strongly consistent with this being a company in-house player he wrote for Interceptor Software's own C64 games rather than a scene-distributed editor.",
    "Single-composer concentration: all 4 locally-tagged files are by Graham Hansford himself (England, active from 1984, CSDb scener 13854) — expected for a professional in-game player tied to one studio's output.",
    "Not investigated: which specific Interceptor Software titles used this exact player, or whether it differs from any other Hansford-authored in-game routine — no per-game breakdown was researched for this card."
  ],
  "sources": [
    "sidid:Hansford/Interceptor (author 'Graham Hansford', no name/released/reference/comment) — data/sidid.json",
    "Local dataset: 4 files tagged 'Hansford/Interceptor', all by Graham Hansford — data/composers/graham-hansford.json",
    "data/composers/graham-hansford.json (HVSC profile: England, focus PRO, affiliation 'Interceptor Software', active 1984, CSDb scener 13854)"
  ]
}
```

## Overview

`Hansford/Interceptor` is the SIDId tag for a replay routine credited solely
to **Graham Hansford**, a professional UK composer whose own HVSC/DeepSID
profile lists his affiliation as **Interceptor Software** — an exact match to
the tag's name. This strongly suggests an in-house player Hansford wrote for
his employer's own C64 games, rather than a scene-distributed editor. SIDId's
entry has only an author field, no title, consistent with an unreleased,
in-game-only routine. All 4 locally-tagged files are his own.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag name is a direct match to the
composer's own documented professional affiliation (Interceptor Software),
which is the strongest evidence in this card; no specific game titles or
version history were researched.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/graham-hansford.json`, `data/sidid.json`). `status: stub` —
no runtime fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo and the local composer profile.

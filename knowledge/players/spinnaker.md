# Spinnaker

```json
{
  "id": "spinnaker",
  "name": "Spinnaker",
  "aliases": ["Spinnaker"],
  "authors": ["Nick Scarim (Nicholas Scarim)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 music routine used on a Spinnaker Software-published game, credited to composer Nick Scarim — no dedicated CSDb tool/editor release found under this name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Spinnaker' (checked) — Player-ID-only signature.",
    "NAME MISMATCH WORTH FLAGGING: the tag 'Spinnaker' matches the US educational/games publisher Spinnaker Software (publisher of the single locally tagged game, 'Grandma's House'), but the local composer profile's AFFILIATION field for Nick Scarim reads 'First Star Software', a DIFFERENT US publisher (data/composers/nick-scarim.json) — i.e. the tag names the game's publisher, not the composer's primary catalogued studio affiliation. Left unresolved; do not assume Scarim was a Spinnaker staff composer beyond this one credit.",
    "Single locally tagged file: 'Grandma's House', by Nick Scarim (USA, CSDb scener 4093) — a narrow, single-title signature."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Spinnaker': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local composer profile (affiliation 'First Star Software', distinct from the tag's 'Spinnaker' publisher name): data/composers/nick-scarim.json",
    "CSDb scener Nick Scarim (USA): https://csdb.dk/scener/?id=4093",
    "Local dataset: 1 file tagged Spinnaker — 'Grandma's House', by Nick Scarim"
  ]
}
```

## Overview

`Spinnaker` is a raw Player-ID tag for a single locally tagged file,
"Grandma's House", credited to composer **Nick Scarim** (USA, CSDb scener
4093). The tag name matches Spinnaker Software, the game's publisher — but
Scarim's own catalogued affiliation is recorded as a different US
publisher, First Star Software. SIDId has no entry for this tag; no
dedicated CSDb tool/release page was found.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag's publisher name (Spinnaker)
does not match the composer's own catalogued affiliation (First Star
Software) — a discrepancy left unresolved, not smoothed over.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/nick-scarim.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), local composer
profile, CSDb scener page, and the local file aggregation.

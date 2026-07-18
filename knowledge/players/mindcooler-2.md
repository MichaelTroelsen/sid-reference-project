# Mindcooler_2

```json
{
  "id": "mindcooler-2",
  "name": "Mindcooler_2",
  "aliases": ["Mindcooler_2"],
  "authors": ["Jens Björnhager (Mindcooler)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be a personal C64 replay routine used exclusively by its namesake composer — a distinct raw tag from the bare 'Mindcooler' tag also present in the local dataset on this same composer's other files — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Mindcooler_2' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "100% single-composer concentration: both locally tagged files ('Borderline Jitterbug', 'Borderline Waltz') belong to Mindcooler himself (data/composers/mindcooler.json).",
    "A DISTINCT, bare 'Mindcooler' tag (no '_2' suffix) is ALSO present in the local dataset, on 2 OTHER files by the same composer ('Acid Lindgren', 'MSP430G2202 Greatest Hits') — i.e. this composer has at least two differently-fingerprinted routines/builds. The bare 'Mindcooler' tag is NOT covered by this card and was not confirmed carded elsewhere as of this pass — flagged for a future pass, not claimed as done here.",
    "Composer profile: Jens Björnhager, handle Mindcooler, Sweden, born 1981-08-24, CSDb scener id 14259 (data/composers/mindcooler.json).",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Mindcooler_2': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/mindcooler.json (profile: full_name Jens Björnhager, handles Mindcooler, country Sweden, born 1981-08-24, csdb_id 14259) and its folder[] listing (shows both 'Mindcooler' and 'Mindcooler_2' as distinct raw tags)",
    "Local dataset: 2 files tagged Mindcooler_2, single composer (Mindcooler himself) — see data/composers/mindcooler.json folder[]"
  ]
}
```

## Overview

Mindcooler_2 is a Player-ID tag for a small C64 replay routine used
exclusively by its namesake composer, **Jens Björnhager**, handle
**Mindcooler** (Sweden). All locally tagged files are his own. A separate,
bare "Mindcooler" tag (without the "_2" suffix) also appears in the local
dataset on two other files by the same composer, indicating at least two
differently-fingerprinted personal routines/builds — only this "_2" variant
is covered by this card.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage; (2)
SIDId has no entry for this exact tag; (3) a sibling bare "Mindcooler" tag
exists on other files by the same composer and is explicitly NOT covered
here — a future pass should check whether it has its own card.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/mindcooler.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer profile.

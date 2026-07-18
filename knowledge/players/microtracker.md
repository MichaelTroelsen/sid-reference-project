# Microtracker

```json
{
  "id": "microtracker",
  "name": "Microtracker",
  "aliases": ["Microtracker"],
  "authors": ["Matthias Hartung (The Syndrom)"],
  "released": "TODO: no explicit year found in the Codebase64 reference; V1.0 is the earliest documented version",
  "status": "stub",
  "platform": "TODO: Codebase64 documents 'Microtracker V1.0' as a real, named C64 tracker — platform details (native editor+player, source availability) not confirmed in this pass",
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
    "UNLIKE most tags in this batch, this is confirmed as a genuinely named, documented tool: SIDId cites a direct Codebase64 article — 'Microtracker_v1.0' — as its reference (deepsid_dl/sidid.nfo), i.e. it has a real wiki page distinct from a bare filename-based inference. The article's actual content (format spec, memory map, etc.) was not read in this pass — Tier 3 fields remain TODO pending that read.",
    "Author: Matthias Hartung, handle 'The Syndrom' / 'Syndrom The' (per local composer data), Germany, CSDb scener 1028.",
    "Small local footprint: 3 files, all by Matthias Hartung himself (Cyclemania, Micromania, Size Matters) — despite being a genuinely documented/named tool, it does not appear to have been adopted by other composers in this dataset."
  ],
  "sources": [
    "SIDId sidid.nfo (author + Codebase64 reference URL): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Codebase64 article (not yet read for technical content): https://codebase64.org/doku.php?id=base:microtracker_v1.0",
    "CSDb scener Matthias Hartung / Syndrom The (Germany): https://csdb.dk/scener/?id=1028",
    "Local dataset: 3 files tagged Microtracker, all by Syndrom The — see data/composers/syndrom-the.json"
  ]
}
```

## Overview

Microtracker is a genuinely named, documented C64 tracker by **Matthias
Hartung** ("The Syndrom" / "Syndrom The"), Germany. SIDId cites a real
Codebase64 wiki article ("Microtracker_v1.0") as its reference — unlike most
tags in this batch, this is corroborated as an actual product, not just an
inferred author signature. The article's technical content was not read in
this pass, so runtime facts remain TODO. Local usage is small: 3 files, all
by the author himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this tag has a real Codebase64
reference (confirmed named tool), but its content was not read here — a
clear next step for whoever picks this card up. Despite being documented,
adoption in the local dataset is limited to the author's own tracks.

## Disassembly notes

None done here. The Codebase64 article (https://codebase64.org/doku.php?id=base:microtracker_v1.0)
is the obvious next source to read for a memory map/format spec before any
disassembly is attempted.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/syndrom-the.json`, `data/sidid.json`) plus the SIDId
Codebase64 citation, not yet fetched/read. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the cited Codebase64 article,
CSDb scener page, and the local composer aggregation.

# Golem

```json
{
  "id": "golem",
  "name": "Golem",
  "aliases": ["Golem"],
  "authors": ["Paul H. (Golem)"],
  "released": "TODO: no explicit tool-release date found; composer's HVSC profile lists 'active: 1987'",
  "status": "stub",
  "platform": "TODO: appears to be an in-house/personal C64 replay routine used exclusively by its namesake composer — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId's entry for this tag has only an AUTHOR line ('Paul H. (Golem)') — no NAME, reference, or comment field (deepsid_dl/sidid.nfo / data/sidid.json byTag['Golem']) — the absence of a NAME field is itself a signal this was never packaged as a titled, released tool, consistent with a personal in-house routine.",
    "100% single-composer concentration: all 6 locally tagged files ('The Darker Side', 'Minuet in Echo', 'Sonatina 4', 'Sweet Dreams', 'Thoughts of Life', 'Musical Life') belong to Golem himself (data/composers/golem.json) — no other musician in the local dataset uses this signature. A 7th file by Golem ('Salute') carries no player tag at all.",
    "HVSC Musicians.txt / DeepSID profile identifies Golem as Paul H., England, active from 1987 (data/composers/golem.json profile) — no other biographical detail (CSDb scener id 14484 per the same local profile, not independently web-verified in this pass).",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag['Golem'] = {\"author\": \"Paul H. (Golem)\"}",
    "data/composers/golem.json (profile: full_name Paul H., handles Golem, country England, active 1987, csdb_id 14484, csdb_type scener)",
    "Local dataset: 6 files tagged Golem, single composer (Golem himself) — see data/composers/golem.json folder[]"
  ]
}
```

## Overview

Golem is the SIDId/Player-ID tag for a C64 replay routine attributed to
**Paul H.**, handle **Golem**, an English composer active from 1987
(per HVSC/DeepSID). Locally it appears in **6 files, all by Golem himself**
(data/composers/golem.json) — no other musician in the collection uses this
signature. SIDId's entry for the tag carries only an `AUTHOR` line, no
`NAME`, `reference`, or `comment` — consistent with a personal, never-
packaged routine rather than a released, titled tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage marks
this as a personal routine, not a published tool; (2) SIDId's sparse
author-only entry corroborates that reading; (3) no CSDb tool/release
entry was found under this name.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/golem.json`, `data/sidid.json`). `status: stub` — no
runtime fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer profile, and
the local file aggregation.

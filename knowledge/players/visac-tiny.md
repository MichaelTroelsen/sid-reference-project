# Visac_tiny

```json
{
  "id": "visac-tiny",
  "name": "Visac_tiny",
  "aliases": ["Visac_tiny"],
  "authors": ["Josef Souček (Visac)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be a minimal/compact personal replay routine (the '_tiny' naming convention seen elsewhere in this dataset, e.g. mermaid-tiny.md, 4-mat-tiny-1.md, denotes a composer's own small routine) — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Visac_tiny' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "Named after Visac (Josef Souček, Czech Republic, data/composers/visac.json), but usage is NOT exclusive to him: 6 files span 3 composers — PCH (Petr Chlud, Czech Republic, 3 files: '1k Marble', 'Microture', 'Oje Balstrom'), Secret Top (Rastislav Smutný / 'Top Secret', Slovakia, 2 files: \"LHS's Olympics\", 'V-GAS'), and Visac himself (1 file: 'Solneni'). All three composers are geographically clustered in the Czech/Slovak scene (per data/composers/pch.json, secret-top.json, visac.json profiles) — reads as a small routine shared within a nearby regional circle, similar to the 'concentrated but not exclusive' pattern seen in virtuoso.md, rather than a purely private tool used only by its namesake.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Visac_tiny': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/visac.json (profile: full_name Josef Souček, handles Visac, country Czech Republic, csdb_id 1080)",
    "data/composers/pch.json (profile: full_name Petr Chlud, country Czech Republic, csdb_id 3538)",
    "data/composers/secret-top.json (profile: full_name Rastislav Smutný, handles 'Top Secret', country Slovakia, csdb_id 1046)",
    "Local dataset: 6 files tagged Visac_tiny across 3 composers — PCH (3), Secret Top (2), Visac (1) — see data/composers/*.json aggregation"
  ]
}
```

## Overview

Visac_tiny is the Player-ID tag for a small C64 replay routine named after
**Josef Souček**, handle **Visac** (Czech Republic). Despite the naming, its
6 locally tagged files span **3 composers** — PCH (3), Secret Top (2), and
Visac himself (1) — all geographically clustered in the Czech/Slovak scene.
SIDId has no entry for this tag at all, consistent with an informally
circulated, unreleased routine rather than a packaged tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has no entry for this exact
tag; (2) usage spans 3 nearby Czech/Slovak composers, not just its
namesake, suggesting informal regional sharing rather than a purely private
routine; (3) the "_tiny" naming convention matches other personal/minimal
routines already documented in this KB.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer profiles for PCH, Secret Top, and Visac.

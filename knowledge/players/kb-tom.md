# KB/TOM

```json
{
  "id": "kb-tom",
  "name": "KB/TOM",
  "aliases": ["KB/TOM"],
  "authors": ["Tammo Hinrichs (kb) of The Obsessed Maniacs (TOM)"],
  "released": "TODO: no tool-release date found",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house routine, not a released standalone editor (unconfirmed)",
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
    "SIDId's sidid.nfo carries only an AUTHOR line — 'Tammo Hinrichs (kb) of The Obsessed Maniacs (TOM)' — no NAME/RELEASED/REFERENCE/COMMENT. TOM ('The Obsessed Maniacs') is a group affiliation baked into the tag itself, not a tool title.",
    "Tammo Hinrichs (handle kb, German) is independently well known in the scene as a co-author of other, separately named/carded SID tools (e.g. Reflextracker, with Matthias Kramm and Zorc — see web research) and of TinySID; this tag is a DIFFERENT, unrelated signature from those and must not be conflated with them absent direct evidence.",
    "Usage is concentrated but not single-composer: 6 files across 2 composers — 'PVCF' (Kai Walter, Germany, 5 files) does most of the tagged output, kb himself only 1 (data/composers/kb.json, pvcf.json). Both composers are German but their HVSC profiles list no shared group affiliation, so why Kai Walter's tunes carry kb's tag is unresolved — plausibly an informally shared/adapted routine (TODO: unconfirmed)."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 6 files tagged KB/TOM across composers 'KB' (1) and 'PVCF' (5) — data/composers/kb.json, data/composers/pvcf.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, kb / Tammo Hinrichs: https://csdb.dk/scener/?id=655",
    "CSDb scener profile, PVCF / Kai Walter: https://csdb.dk/scener/?id=836",
    "Web research on Tammo Hinrichs's other, separately named tools (Reflextracker, TinySID) — confirms he is a known SID-tool author generally, but does not identify what 'KB/TOM' itself is: https://github.com/kebby"
  ]
}
```

## Overview

KB/TOM is a SIDId Player-ID tag attributed to **Tammo Hinrichs**, handle
**kb**, credited "of The Obsessed Maniacs (TOM)" — a group affiliation
folded into the tag name rather than a standalone tool title. SIDId's
record is author-only, with no NAME, release date, or CSDb reference.
Locally it spans **6 files across 2 composers**: kb himself (1 file) and
**PVCF** / Kai Walter (5 files) — both German, but not sharing a recorded
CSDb group. Hinrichs is independently known for other, separately-tagged
tools (Reflextracker, TinySID), so this signature should not be assumed
related to those without direct evidence.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) author-only SIDId record, no
title/reference; (2) usage skews to a second composer (PVCF, 5 of 6 files)
rather than the named author himself; (3) do not conflate with Hinrichs's
other, separately-named/carded tools.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/kb.json`, `data/composers/pvcf.json`,
`data/sidid.json`, and CSDb scener-page checks. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, local composer aggregation, and
CSDb scener pages for kb and PVCF.

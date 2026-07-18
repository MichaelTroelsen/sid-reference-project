# Modulator

```json
{
  "id": "modulator",
  "name": "Modulator",
  "aliases": ["Modulator"],
  "authors": ["Thomas Krätzig"],
  "released": "1985 (64'er / Markt & Technik magazine)",
  "status": "stub",
  "platform": "Native C64 tool, apparently published as a type-in listing in the German computer magazine 64'er (Markt & Technik) — consistent with adoption by more than one German composer rather than a purely private routine.",
  "csdb_release": 129802,

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
    "SIDId gives a full entry for this tag: name 'Modulator', author Thomas Krätzig, released '1985 64'er/Markt & Technik', reference to CSDb release 129802 (data/sidid.json byTag['Modulator']).",
    "CSDb release 129802 ('Modulator [german]') confirms: code by Thomas Krätzig, released by Krätzig himself (no group), dated 1985, categorized as a 'C64 Tool' — checked directly via CSDb (https://csdb.dk/release/?id=129802). No further functional description is given on the release page itself.",
    "AUTHORSHIP VS USAGE SPLIT: SIDId credits only Thomas Krätzig as author, but the local dataset shows the tag used by TWO German composers — Bernhard Arenz (3 files: 'Der Ring der Nibelungen', 'Hotel', 'Sereamis') and Thomas Kraetzig himself (1 file: 'Quiwi') — both with a DeepSID profile 'focus1: PRO' and country Germany (data/composers/bernhard-arenz.json, thomas-kraetzig.json). A magazine type-in listing (64'er, a widely-circulated German C64 magazine published by Markt & Technik) plausibly explains multi-composer adoption: readers could type in and reuse the published routine, unlike the many single-composer 'personal routine' tags seen elsewhere in this project's uncarded tail.",
    "No public disassembly or source found. All runtime internals unknown — 1985 vintage, predates most documented C64 music-tool source releases."
  ],
  "sources": [
    "SIDId sidid.nfo (name, author, year, CSDb reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag['Modulator'] = {\"name\":\"Modulator\",\"author\":\"Thomas Krätzig\",\"released\":\"1985 64'er/Markt & Technik\",\"reference\":\"https://csdb.dk/release/?id=129802\"}",
    "CSDb release 129802, 'Modulator [german]' (Thomas Krätzig, 1985, C64 Tool): https://csdb.dk/release/?id=129802",
    "data/composers/bernhard-arenz.json, data/composers/thomas-kraetzig.json (both profile focus1 'PRO', country Germany)",
    "Local dataset: 4 files tagged Modulator across 2 composers — Bernhard Arenz (3), Thomas Kraetzig (1) — see data/composers/*.json aggregation"
  ]
}
```

## Overview

Modulator is a native C64 tool by **Thomas Krätzig**, published in 1985
via the German computer magazine **64'er** (Markt & Technik) — CSDb release
129802 confirms code, author, and year. Unlike most tags in this
family-of-small-tags batch, it shows genuine cross-composer adoption: 4
files split between Bernhard Arenz (3) and Krätzig himself (1), both
German "PRO"-focus composers — plausibly explained by the magazine
type-in-listing origin, which would have made the routine available to any
reader rather than keeping it a private tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId gives a full, well-sourced
identity (name/author/year/CSDb reference) — unusually complete for this
batch; (2) usage splits across 2 composers despite SIDId crediting only
Krätzig, consistent with a magazine-published routine rather than a
private one; (3) no functional/technical description survives on the CSDb
release page itself.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. A 1985 vintage magazine tool is a plausible future
disassembly candidate given the CSDb release exists and a specific file is
identifiable.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb release lookup.
`status: stub` — no runtime fact has been confirmed by disassembly or
trace.

## Sources

See the `sources` array — SIDId sidid.nfo, the CSDb release page, and the
local composer profiles/aggregation.

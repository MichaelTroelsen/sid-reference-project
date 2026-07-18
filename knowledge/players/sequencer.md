# Sequencer

```json
{
  "id": "sequencer",
  "name": "Sequencer",
  "aliases": ["Sequencer"],
  "authors": ["Thomas Krätzig"],
  "released": "1985 64'er/Markt & Technik",
  "status": "stub",
  "platform": "TODO: likely a type-in listing published in the German computer magazine 64'er (Markt & Technik) — not independently confirmed beyond the SIDId release credit",
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
    "SIDId's sidid.nfo gives a full record for this tag: NAME 'Sequencer', AUTHOR 'Thomas Krätzig', RELEASED '1985 64'er/Markt & Technik', REFERENCE CSDb release 129802 — the most complete SIDId record in this batch, and a NAME field, which is a signal (per this project's convention) that it WAS packaged/published as a titled tool, likely a magazine type-in listing (the '64'er/Markt & Technik' publisher is a well-known German C64 computer magazine of that era), not a personal in-house routine.",
    "Do NOT conflate with the differently-named, differently-ranked SIDId tag 'Visac_Sequencer' (knowledge/COVERAGE.md rank 94, 2 files) — a separate signature, not investigated as part of this batch.",
    "Single-file, single-composer locally: the one tagged file ('Kobold') is by Thomas Krätzig himself (Germany, HVSC 'PRO' composer, affiliation '64er', active 1986 — data/composers/thomas-kraetzig.json), i.e. the tool's own author is also its sole locally-archived user."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "SIDId REFERENCE — CSDb release 129802 (64'er/Markt & Technik, 1985): https://csdb.dk/release/?id=129802",
    "Local dataset: 1 file tagged Sequencer ('Kobold'), by composer 'Thomas Krätzig' — data/composers/thomas-kraetzig.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, Thomas Krätzig (Germany, affiliation 64er): https://csdb.dk/scener/?id=26412"
  ]
}
```

## Overview

Sequencer is a SIDId Player-ID tag with the fullest SIDId record in this
batch — NAME "Sequencer", AUTHOR **Thomas Krätzig**, RELEASED "1985
64'er/Markt & Technik", and a CSDb REFERENCE (129802). The publisher
credit points to the German computer magazine **64'er** (Markt & Technik),
suggesting this was a published type-in listing rather than a personal
in-house routine — the presence of a NAME field is itself signal per this
project's convention. Locally it appears in only **1 file**, "Kobold", by
Thomas Krätzig himself (data/composers/thomas-kraetzig.json).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) fullest SIDId record in this
batch, suggesting a published tool/listing, not a personal routine; (2) do
not conflate with the separate, differently-ranked tag "Visac_Sequencer";
(3) single-file usage, by the credited author himself.

## Disassembly notes

None done here. The CSDb release page (129802) was not deep-dived for
technical content beyond confirming release/author/year/publisher. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/thomas-kraetzig.json`,
`data/sidid.json`, and the CSDb release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (fully populated), the CSDb
release page for 129802, and the local composer aggregation.

# Rastelin/Bones (player routine)

```json
{
  "id": "rastelin-bones",
  "name": "Rastelin/Bones (player routine)",
  "aliases": ["Rastelin/Bones"],
  "authors": ["Jacob Surland (Rastelin)"],
  "released": "TODO: no RELEASED/REFERENCE field in the SIDId entry",
  "status": "stub",
  "platform": "TODO: no CSDb tool release or source repo found under this name. 'Bones' reads as a routine/composition name tied to the composer's handle, not a documented standalone tool.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG: all 3 locally-tagged files ('The Larch (tune 5)', 'Neagox 2092 Terrorforce (032)', 'Tillsammans (part 4)') are by Jacob Surland (data/composers/jacob-surland.json), handle 'Rastelin' on two files and 'Top' on the third (per the per-file author string) — same person, Danish scener, associated with The Supply Team per public musician listings.",
    "SIDId's byTag entry gives only an AUTHOR line ('Jacob Surland (Rastelin)') — no NAME, RELEASED, or REFERENCE field — consistent with an unpackaged personal routine rather than a titled, released tool.",
    "A web search summary surfaced an unsourced claim of specific load/init/play addresses for a file named 'Bones' — this was NOT independently verified against a primary source (no CSDb SID-entry page or STIL record was checked to confirm it), so it is deliberately NOT recorded here. Per this project's rule against inventing/accepting unverified memory-map facts, all Tier 3 fields remain TODO."
  ],
  "sources": [
    "data/sidid.json byTag['Rastelin/Bones']: author 'Jacob Surland (Rastelin)', no other fields",
    "Local dataset: data/composers/jacob-surland.json — 3 files tagged 'Rastelin/Bones'; see knowledge/COVERAGE.md row #50 (3 files)"
  ]
}
```

## Overview

`Rastelin/Bones` is SIDId's byte-signature tag for a routine credited to
Danish composer **Jacob Surland**, handle **Rastelin** (also credited as "Top"
on one file). All 3 locally-tagged files are his own. SIDId's entry carries
only an `AUTHOR` line, no name/release/reference — consistent with an
unpackaged personal routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer concentration, no
release metadata in SIDId; an unverified memory-map claim surfaced during web
research was deliberately excluded rather than recorded on trust.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no confirmed public source or
disassembly located. A web-search summary surfaced specific address claims for
a same-named file that could not be traced to a checkable primary source; not
used.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts from cached
SIDId and local composer data are established.

## Sources

See the `sources` array — the cached SIDId entry and local composer-file
aggregation.

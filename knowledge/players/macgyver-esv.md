# Expanded SID Voice (MacGyver/ESV)

```json
{
  "id": "macgyver-esv",
  "name": "Expanded SID Voice",
  "aliases": ["MacGyver/ESV"],
  "authors": ["Mac Gyver (code)", "April7 (documentation)"],
  "released": "11 December 1988, Digitize Design Group",
  "status": "stub",
  "platform": "Native C64 tool. Also released/known under alternate names 'ESV Digimix', 'Samplemon V2', and 'ESV-Digitizer-Mixer' per CSDb — a sample/digitize-and-mix utility, not a conventional note-based music editor.",
  "csdb_release": 129556,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId gives a clean name/author/release match: 'Expanded SID Voice', author 'Mac Gyver', released '1988 Digitize Design Group', reference CSDb release 129556 — one of the cleaner-attributed tags in this batch.",
    "CSDb's own release page (id 129556) confirms the multiple alternate names — 'ESV Digimix', 'Samplemon V2', 'ESV-Digitizer-Mixer' — and describes it as a sample-manipulation/mixing tool, not a pattern/tracker-style music editor; per CSDb, the original release included instructions, samples, and utilities.",
    "6 locally-tagged files split across 2 composer names, 'Deadbeat' (4 files) and 'Gyver Mac' (2 files) — very plausibly the same person (author handle 'Mac Gyver' vs. the composer-name spelling 'Gyver Mac' is an obvious near-match), but this is NOT independently confirmed via a CSDb scener cross-reference here — treat as a strong lead, not a fact (TODO: verify via CSDb scener page)."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['MacGyver/ESV'])",
    "CSDb release 'Expanded SID Voice' (Digitize Design Group, 11 Dec 1988, code: Mac Gyver, docs: April7): https://csdb.dk/release/?id=129556",
    "Local dataset: 6 files tagged MacGyver/ESV, 2 composer names (Deadbeat 4, Gyver Mac 2) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`MacGyver/ESV` is SIDId's tag for **Expanded SID Voice**, a native C64
sample-digitize/mix tool released 11 December 1988 by the Digitize Design
Group — coded by "Mac Gyver", documentation by "April7". CSDb records
several alternate names for the same release (ESV Digimix, Samplemon V2,
ESV-Digitizer-Mixer), consistent with it being a sample-manipulation utility
rather than a note/pattern music editor. Locally used across 6 files split
between two composer names, "Deadbeat" and "Gyver Mac" — plausibly the same
person as the author, though not independently confirmed here.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is a real, named, dated
release with clean SIDId + CSDb agreement; (2) it's described as a
sample/mix tool with several alternate release names, not a conventional
tracker; (3) the "Deadbeat"/"Gyver Mac" composer split is a plausible
same-person alias match, left as an open TODO rather than asserted.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, and
the CSDb release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 129556, and the
local composer aggregation.

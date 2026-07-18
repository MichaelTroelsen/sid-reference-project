# XPMCK (Cross Platform Music Compiler Kit)

```json
{
  "id": "xpmck",
  "name": "Cross Platform Music Compiler Kit",
  "aliases": ["XPMCK"],
  "authors": ["Mic"],
  "released": "SIDId gives '2008'; the specific CSDb release cross-referenced by SIDId's reference link ('Xpmck V32') is dated 24 June 2011 — likely a later version release under the same ongoing project, not a contradiction (see quirks)",
  "status": "stub",
  "platform": "Cross-platform music compiler ('MML'-style compile-to-multiple-chiptune-formats tool per the name), with a C64/SID output target — hosted at the author's own site jiggawatt.org per CSDb. Not a native-only C64 tool.",
  "csdb_release": 135624,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId gives name 'Cross Platform Music Compiler Kit', author 'Mic', released '2008', reference CSDb release 135624 — but the CSDb page at that id is actually titled 'Xpmck V32' and dated 24 June 2011, code+music by 'Mic', no group. This is consistent with XPMCK being an actively-versioned ongoing project (first released ~2008, still being updated by V32 in 2011) rather than a data error — SIDId's 'released' year likely reflects the tool's original debut, while the specific CSDb release id it references happens to be a later version snapshot. Not independently resolved beyond this inference (TODO: check for an earlier CSDb release specifically dated 2008).",
    "CSDb's page for 'Xpmck V32' links to the author's own site, jiggawatt.org, and lists two SID files ('Paperboy', 'We Wish You a Merry Xmas') bundled with the release, with 316 downloads recorded.",
    "'MCK' in the name strongly suggests kinship with the 'Music Macro Language Compiler Kit' (MCK) family of tools common in the chiptune/famitracker-adjacent cross-platform scene (NES/Famicom MCK, etc.) — i.e. XPMCK ('Cross Platform' MCK) is plausibly a portable MML-to-multiple-sound-chip compiler that added a C64/SID backend, not a C64-native tracker. This is a naming-convention inference, not sourced from a page that states it directly — flagged, not asserted as fact.",
    "Only 2 locally-tagged files, both by the same composer, 'Djmaximum' — single-composer concentration in THIS dataset, though the tool itself is plausibly used more widely across other 8-bit/retro platforms outside the C64/HVSC scope this project tracks."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['XPMCK'])",
    "CSDb release 'Xpmck V32' (Mic, 24 Jun 2011, links to jiggawatt.org): https://csdb.dk/release/?id=135624",
    "Local dataset: 2 files tagged XPMCK, 1 composer (Djmaximum) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`XPMCK` is SIDId's tag for the **Cross Platform Music Compiler Kit**, a
cross-platform music compiler by an author known as "Mic", hosted at
jiggawatt.org. SIDId dates it to 2008; the specific CSDb release its
`reference` link points to ("Xpmck V32") is dated 2011, consistent with an
actively-versioned ongoing tool rather than a data conflict. Its "MCK"
naming suggests kinship with the wider Music Macro Language Compiler Kit
family used across multiple retro platforms, though this C64/SID connection
was not independently confirmed beyond the naming convention. Only 2
locally-tagged files, both by the same composer.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's 2008 release year and its
2011-dated CSDb reference are plausibly reconciled as debut-vs-later-version,
not a contradiction, but this wasn't independently confirmed; (2) the "MCK"
naming convention suggests a cross-platform MML compiler heritage, an
inference not a sourced fact; (3) single-composer concentration locally,
though the tool's real user base may extend beyond this project's C64/HVSC
scope.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. The author's own site (jiggawatt.org) was not fetched
during this research pass and may hold documentation/source — a lead for a
future pass.

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, and
the CSDb release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 135624, and the
local composer aggregation.

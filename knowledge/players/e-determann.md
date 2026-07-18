# E_Determann (player routine)

```json
{
  "id": "e-determann",
  "name": "E_Determann (player routine)",
  "aliases": ["E_Determann"],
  "authors": ["TODO: SIDId has no entry for this tag and no web-searchable biography for a coder named 'Determann' was found; local composer credits do not name a 'Determann' at all (see quirks)"],
  "released": "TODO: no RELEASED/REFERENCE field; data/sidid.json has no entry for this tag",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or biography found under this name.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY OF 'DETERMANN' IS UNCONFIRMED: neither of the 2 locally-tagged files' own author credits mentions anyone named Determann — 'Deranged' (data/composers/marco-scheepers.json) is credited solely to Marco Scheepers, and 'Digital Tangram' (data/composers/markus-siebold.json) solely to Markus Siebold (Sons of Sound). Web search for 'Determann' in connection with either title or with C64 music drivers returned no results. No SIDId entry exists either (data/sidid.json checked, absent). This card intentionally leaves `authors` as TODO rather than guessing who 'E. Determann' is or asserting a real-name match to either credited composer.",
    "2 files, 2 different composers, neither of whom is named Determann in their own credit line — this does not fit the usual 'personal routine, tag = composer's own handle' pattern seen elsewhere in this batch; it may be a third party's routine (a coder credited on both games but not in this dataset's author strings) or an unresolved SIDId misattribution. Not established either way."
  ],
  "sources": [
    "data/sidid.json: no entry for 'E_Determann' (checked, absent)",
    "Local dataset: data/composers/marco-scheepers.json ('Deranged', csdb id 26565), data/composers/markus-siebold.json ('Digital Tangram', csdb id 26131) — 2 files tagged 'E_Determann'; see knowledge/COVERAGE.md row #78 (2 files)"
  ]
}
```

## Overview

`E_Determann` is a locally-observed SIDId signature tag (no entry in the
cached `sidid.json`) spanning 2 files by 2 different composers — Marco
Scheepers ("Deranged") and Markus Siebold ("Digital Tangram") — neither of
whose own credit lines mentions anyone named Determann. No biography, CSDb
identity, or corroborating source for a coder named "Determann" was found.
`authors` is left `TODO` rather than guessed.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is one of the few tags in this
batch where the tag name does NOT match either credited composer — identity
is genuinely unresolved, not merely undocumented.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Even Tier 1 identity is incomplete here —
recorded honestly as unresolved rather than filled with a guess.

## Sources

See the `sources` array — local composer-file aggregation only; no SIDId or
external corroboration found.

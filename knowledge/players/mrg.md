# MRG (player routine)

```json
{
  "id": "mrg",
  "name": "MRG (player routine)",
  "aliases": ["MRG"],
  "authors": ["Mark R. (MRG)"],
  "released": "TODO: no RELEASED/REFERENCE field; data/sidid.json has no entry for this tag",
  "status": "stub",
  "platform": "TODO: no CSDb tool release or source repo found. Composer concentration (below) suggests a personal routine.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG: all 4 locally-tagged files ('187.5', 'Make It Real', 'The Zoo', and one untitled '<?>' file, csdb ids 40735/40736/40737/44152) are credited to composer 'MRG', author string 'Mark R. (MRG)' (data/composers/mrg.json) — the tag name is simply the composer's own handle, the classic self-titled personal-routine signature.",
    "No SIDId entry exists for this tag (data/sidid.json checked, absent) and no biographical or CSDb identity beyond the bare handle 'Mark R. (MRG)' / 'MRG' was found via web search — real name and nationality remain unconfirmed beyond what the local HVSC-derived author string states."
  ],
  "sources": [
    "data/sidid.json: no entry for 'MRG' (checked, absent)",
    "Local dataset: data/composers/mrg.json — 4 files tagged 'MRG', all authored 'Mark R. (MRG)'; see knowledge/COVERAGE.md row #45 (4 files)"
  ]
}
```

## Overview

`MRG` is a bare-handle SIDId signature tag matching all 4 locally-tagged files
by composer **Mark R. ("MRG")** — a self-titled personal routine with no
SIDId fingerprint entry and no biographical detail found beyond the local
HVSC-derived author string.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer concentration, no
external identity corroboration found.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Identity rests entirely on local composer
data; nothing else confirmed.

## Sources

See the `sources` array — local composer-file aggregation only.

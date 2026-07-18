# ?Juergen_Jost

```json
{
  "id": "juergen-jost",
  "name": "?Juergen_Jost",
  "aliases": ["?Juergen_Jost"],
  "authors": ["Unconfirmed — the tag names 'Juergen Jost', but the sole locally-tagged composer is Jörg Sieslack (see quirks); no source resolves this discrepancy"],
  "released": "TODO: no year found anywhere for this tag",
  "status": "stub",
  "platform": "TODO: no SIDId entry or CSDb tool page found. Reads as a personal/in-house routine of unclear authorship — see quirks for the name/composer mismatch.",
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
    "2 files, 1 composer — filed under Jörg Sieslack (HVSC folder Sieslack_Joerg), NOT 'Jürgen Jost'. The tag's name does not match the credited composer, and no source was found explaining the discrepancy: a co-author named Jürgen Jost, a scanner mis-identification, or an unrelated third party's routine reused by Sieslack are all equally plausible readings, none confirmed.",
    "The leading '?' marks this as one of DeepSID/SIDId's own low-confidence tag matches, the same convention documented on [[msb]] and [[unknown-c64-driver]].",
    "No SIDId entry exists for '?Juergen_Jost' (checked data/sidid.json directly)."
  ],
  "sources": [
    "Local dataset: data/composers/joerg-sieslack.json — 2 files (Balloon Raid csdb_id 45237, OHG csdb_id 37840); knowledge/COVERAGE.md rank #73",
    "data/sidid.json byTag — checked, no entry for '?Juergen_Jost'"
  ]
}
```

## Overview

`?Juergen_Jost` is a raw Player-ID tag covering 2 files, both credited to
composer **Jörg Sieslack** — a discrepancy with the tag's own name
("Juergen Jost") that no source found here explains. No SIDId entry or
CSDb tool page exists for it. It is documented as a genuine open question
rather than silently corrected or guessed.

## Quirks & gotchas

See the `quirks` array — the entire card is really one load-bearing fact:
the tag name does not match its sole credited composer, and the reason is
unresolved.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data is
confirmed; the name/composer mismatch is recorded, not resolved. No SIDId
entry exists. No runtime fact was guessed.

## Sources

See the `sources` array — local composer data only; SIDId checked with no
match.

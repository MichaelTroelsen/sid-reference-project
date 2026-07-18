# HCL/BoozeDesign (player routine)

```json
{
  "id": "hcl-boozedesign",
  "name": "HCL/BoozeDesign (player routine)",
  "aliases": ["HCL/BoozeDesign"],
  "authors": ["David Malmborg (HCL) of Booze Design"],
  "released": "TODO: no RELEASED/REFERENCE field in the SIDId entry",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or standalone download found under this name — reads as HCL's own in-house player routine used within Booze Design productions, not a released standalone editor.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId credits the author as David Malmborg ('HCL'), a well-known Swedish C64 coder/musician and core member of Booze Design (credited with most of the code on the acclaimed demo 'Edge of Disgrace' — Demozoo, pouet.net). Only 1 of the 5 locally-tagged files (data/composers/hcl.json, 'Bonustrack', csdb id 14377) is actually authored by HCL himself; the other 4 are by different composers — Agemixer (2 files: 'Burp!', 'Dark Space'), Glenn Rune Gallefoss (1: 'Yeah! (Royal Arte version)'), and Vincent Merken/Mindflow (1: 'Wet Jazz') — none of whom are documented Booze Design members in this dataset.",
    "This is a real spread-usage tag, not a single-author personal routine: 5 files across 4 composers, only one of whom is the credited author. No source found explains why unrelated composers' files carry HCL's signature — plausibly the routine circulated informally in the scene (HCL is a prolific, widely-respected coder), but this is inference, not a sourced claim.",
    "Booze Design is a real, long-running Swedish C64 demo group (active since at least 1992; 'Edge of Disgrace' is widely regarded as one of the greatest C64 demos — pouet.net, Demozoo). The player tag's group suffix ('BoozeDesign') is consistent with this identity, but no CSDb tool/release page was found for a standalone 'HCL/BoozeDesign' music editor — treat the tag as an embedded routine, not a packaged tool."
  ],
  "sources": [
    "data/sidid.json byTag['HCL/BoozeDesign']: author 'David Malmborg (HCL)', no other fields",
    "Local dataset: data/composers/hcl.json, agemixer.json, glenn-gallefoss.json (or equivalent), vincent-merken.json — 5 files tagged 'HCL/BoozeDesign' across 4 composers; see knowledge/COVERAGE.md row #18 (5 files)",
    "Demozoo — HCL / Booze Design scener profile: https://demozoo.org/sceners/1545/",
    "Demozoo — Booze Design group profile: https://demozoo.org/groups/1287/",
    "pouet.net — 'Edge of Disgrace' by Booze Design (credits HCL for most of the code): https://www.pouet.net/prod.php?which=51983",
    "CSDb SID entry, 'Totally Stoned II' / David Malmborg (HCL) / 1993 Booze Design: https://csdb.dk/sid/?id=14402"
  ]
}
```

## Overview

`HCL/BoozeDesign` is SIDId's byte-signature tag for a routine credited to
**David Malmborg ("HCL")**, a well-known coder and musician in the Swedish demo
group **Booze Design** (credited with most of the code on "Edge of Disgrace,"
widely regarded as one of the greatest C64 demos ever made). Locally the tag
spans only **5 files across 4 composers** — HCL himself on just one of them
("Bonustrack"), plus Agemixer, Glenn Rune Gallefoss, and Vincent Merken, none
documented as Booze Design members. No CSDb tool release or source repo was
found for a standalone editor under this name; it reads as an embedded player
routine rather than a packaged tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the author (HCL) accounts for only 1 of
5 tagged files — the tag spread to unrelated composers for reasons not
documented anywhere found.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source or
disassembly located.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from cached SIDId data and CSDb/Demozoo provenance research.

## Sources

See the `sources` array — the cached SIDId entry, local composer-file
aggregation, Demozoo profiles for HCL and Booze Design, pouet.net, and one
CSDb SID entry.

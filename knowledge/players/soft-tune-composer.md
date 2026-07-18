# Soft Tune Composer

```json
{
  "id": "soft-tune-composer",
  "name": "Soft Tune Composer",
  "aliases": ["Soft_Tune_Composer"],
  "authors": ["Melih Küçükçalik"],
  "released": "1989 (SIDId; CSDb's own cracked release of it is dated October 1989)",
  "status": "stub",
  "platform": "Native C64 tool. SIDId's cited reference (CSDb release 101769) is a 1989 CRACK of the tool by 'The Joker Crew' (type: C64 Crack), not the original tool release itself — see quirks.",
  "csdb_release": 101769,

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
    "REFERENCE IS A CRACK, NOT THE ORIGINAL TOOL: SIDId's `reference` field (https://csdb.dk/release/?id=101769) points at a release titled 'Softtune Composer' (aka 'Soft Tune Composer' / 'ST. Composer'), catalogued on CSDb as type 'C64 Crack', released October 1989 by 'The Joker Crew', bundling 'The Joker Crew Intro' plus a sample SID tune. SIDId's `author` field names 'Melih Küçükçalik' as the tool's actual creator — a different person from whoever is credited on this specific crack release. This project has already hit the identical crack-vs-original-tool trap once before (see knowledge/players/tfmx-timecomposer.md's resolved authorship discrepancy) — flagged here in case a future pass finds the true original-tool CSDb release and needs to update `csdb_release`.",
    "COMPOSER MATCH IS STRIKING: the sole locally-tagged composer using 'Soft_Tune_Composer' is Babyface — real name Kagan Demir, Turkey (data/composers/babyface.json) — and the CSDb crack release (101769) itself credits its bundled sample tune's music specifically to 'Kagan Demir'. This is a strong, self-consistent link: Babyface's own tune is very plausibly the exact demo/example SID bundled with this crack, even though he is not the credited author of the tool itself (that is Melih Küçükçalik, per SIDId).",
    "Both the tool's actual author (Melih Küçükçalik) and its sole local user (Kagan Demir/Babyface) are independently confirmed Turkish, consistent with a small, nationally-concentrated circle of use.",
    "Only 1 file locally tagged with this signature — a small footprint despite the tool having a real title, a real credited author, and a dated CSDb entry, which is why this earns a card at all rather than being treated as unnamed noise."
  ],
  "sources": [
    "sidid:Soft_Tune_Composer (author 'Melih Küçükçalik', released '1989', reference https://csdb.dk/release/?id=101769, no comment) — data/sidid.json",
    "CSDb release 101769 'Softtune Composer' (aka Soft Tune Composer/ST. Composer, C64 Crack, The Joker Crew, October 1989, bundled music credited to Kagan Demir): https://csdb.dk/release/?id=101769",
    "Local dataset: 1 file tagged 'Soft_Tune_Composer', by composer Babyface — data/composers/babyface.json",
    "data/composers/babyface.json (HVSC profile: full name Kagan Demir, Turkey, active 1992, CSDb scener 3103)",
    "Sibling card knowledge/players/tfmx-timecomposer.md — precedent for the same crack-vs-original-release research trap"
  ]
}
```

## Overview

`Soft_Tune_Composer` is the SIDId tag for **Softtune Composer**, a 1989 C64
music tool credited by SIDId to **Melih Küçükçalik**. The only CSDb release
page found for it (id 101769) is actually a **crack** of the tool by The
Joker Crew, not the original release — its bundled demo tune is credited to
"Kagan Demir," who is exactly the sole locally-tagged composer using this
tag (handle Babyface). That match is a strong, self-consistent link between
the crack's example music and this dataset's one tagged file, even though the
tool's actual author is a different, also-Turkish person. Only 1 file carries
the tag locally.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the cited CSDb release is a **crack**,
not the tool's original release — the same trap this project already
resolved once for `TFMX/TimeComposer`; a future pass should look for the
true original release before trusting `csdb_release` here as final.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/babyface.json`, `data/sidid.json`) plus one CSDb release
page. `status: stub` — no runtime fact has been confirmed by disassembly or
trace.

## Sources

See the `sources` array — SIDId sidid.nfo, the CSDb crack release page, the
local composer profile for Babyface, and the sibling `tfmx-timecomposer.md`
card for the crack-vs-original precedent.

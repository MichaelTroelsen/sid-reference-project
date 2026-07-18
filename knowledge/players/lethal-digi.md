# Lethal_Digi

```json
{
  "id": "lethal-digi",
  "name": "Lethal_Digi",
  "aliases": ["Lethal_Digi"],
  "authors": ["Lead (real name not disclosed on CSDb; group Lethal)"],
  "released": "1992 (CSDb-credited releases 'No Women Allowed', 'Paradise', 'Poing' by the group Lethal)",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine used within the group Lethal's own productions, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null). Everything here comes from this project's own composer aggregation plus CSDb's scener page for Lead.",
    "STRONG, EXACT-TITLE evidence for the 'digi' label: CSDb credits Lead with 'Code, Graphics, Sampling' on THREE 1992 releases by the group 'Lethal' — 'No Women Allowed', 'Paradise', 'Poing' — and all three titles are an EXACT match to all 3 locally-tagged files for this composer. This is one of the strongest-evidenced tags in this batch: the tag name 'Lethal_Digi' plausibly derives from the GROUP name 'Lethal', not a personal nickname, and CSDb corroborates both the group and the explicit Sampling role on the exact same tracks.",
    "3 files, 1 composer: Lead — 'No Women Allowed', 'Paradise', 'Poing'.",
    "Lead is Dutch, current group House Designs (since Aug 1991), formerly Sense Designs; CSDb also lists a 'Lethal' group affiliation implied by the 1992 credits (not listed among his named former groups on the summary fetched, but the release credits themselves name the group 'Lethal' directly) — worth confirming the exact CSDb group id in a future pass. Later became a 'Product specialist for Pioneer DJ' per his CSDb trivia."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"Lethal_Digi\"",
    "CSDb scener Lead (Netherlands; 'Code, Graphics, Sampling' credit on 'No Women Allowed'/'Paradise'/'Poing', group Lethal, 1992): https://csdb.dk/scener/?id=2666",
    "Local dataset: 3 files tagged Lethal_Digi, 1 composer (Lead) — data/composers/lead.json",
    "data/composers/lead.json (profile country Netherlands, csdb id 2666)"
  ]
}
```

## Overview

Lethal_Digi is a raw Player-ID tag attributed to **Lead**, a Dutch scener
(House Designs, ex-Sense Designs; real name not disclosed on CSDb). The
tag name likely derives from the group **Lethal** rather than a personal
handle. It appears in only **3 files, all by Lead** — a personal/small-
group routine by usage pattern. No SIDId entry exists, but this is one of
the strongest-corroborated tags in this batch: CSDb credits Lead with an
explicit "Code, Graphics, Sampling" role on the group Lethal's 1992
releases "No Women Allowed", "Paradise", and "Poing" — an exact title
match to all 3 locally-tagged files.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) unusually strong evidence —
CSDb's Sampling credit matches the exact 3 tagged files by title, not just
a plausible author link; (2) the tag name most likely names the group
Lethal, not a personal alias, though the exact CSDb group id for "Lethal"
was not independently confirmed in this pass (TODO for a future check).

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId byTag (no entry), CSDb scener page for
Lead, and the local composer aggregation.

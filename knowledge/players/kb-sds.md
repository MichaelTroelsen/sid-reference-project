# KB/SDS (player routine)

```json
{
  "id": "kb-sds",
  "name": "KB/SDS (player routine)",
  "aliases": ["KB/SDS"],
  "authors": ["Tammo Hinrichs (kb) of Smash Designs (SDS)"],
  "released": "TODO: no RELEASED/REFERENCE field in the SIDId entry",
  "status": "stub",
  "platform": "TODO: no CSDb tool release or source repo found under this specific tag name. Tammo Hinrichs ('kb') is a well-documented, prolific C64 coder — separately confirmed as co-author of the released tool Reflex-Tracker (1995, knowledge/players/reflextracker.md) — but this earlier/different-named 'KB/SDS' signature is not confirmed to be that same tool.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'SDS' = SMASH DESIGNS, a real, well-documented German C64 demo group founded 4 October 1992 by 'Dcp', 'AEG' (André Bürger), 'Igor', and 'Ivan' (c64-wiki.de). Tammo Hinrichs ('kb') was a later, major member (also of Reflex, The Obsessed Maniacs, and co-founder of the PC demogroup Farbrausch) — c64-wiki.de and Demozoo both confirm his 'kb' handle and Smash Designs membership, corroborating SIDId's author string exactly.",
    "BOTH LOCALLY-TAGGED FILES ARE BY SMASH DESIGNS FOUNDING/CORE MEMBERS: 'C64 303 Emulator' (csdb id 16706) by KB himself, and '4K Power' (csdb id 50338) by AEG (André Buerger) — one of the group's 4 founders per c64-wiki.de. Unlike several other tags in this batch, this is NOT a signature that spread to unrelated outsiders — both users are core Smash Designs members, a plausible and well-evidenced reason for a shared in-group signature (though no source explicitly states shared/borrowed code, only shared group membership).",
    "DISTINCT FROM THE ALREADY-CARDED 'Reflextracker' TAG (knowledge/players/reflextracker.md, status in-progress): that card documents Tammo Hinrichs as co-author (with Matthias Kramm/Quiss and Zorc) of the released 1995 tool 'Reflex-Tracker V1.1' for the group Reflex — a DIFFERENT group (Reflex, not Smash Designs) and a different, named, released tool. SIDId fingerprints 'KB/SDS' as a separate signature from 'Reflextracker'. No source connects the two as the same code; no `edges` relationship is asserted here.",
    "No RELEASED or REFERENCE field in the SIDId entry for 'KB/SDS' — unlike the well-documented Reflextracker release, this earlier/personal signature has no known CSDb tool page."
  ],
  "sources": [
    "data/sidid.json byTag['KB/SDS']: author 'Tammo Hinrichs (kb) of Smash Designs (SDS)', no other fields",
    "Local dataset: data/composers/kb.json, aeg.json — 2 files tagged 'KB/SDS' (one per composer); see knowledge/COVERAGE.md row #64 (2 files)",
    "c64-wiki.de, Smash Designs (founded 4 Oct 1992 by Dcp/AEG/Igor/Ivan; members incl. Tammo Hinrichs): https://www.c64-wiki.de/wiki/Smash_Designs",
    "c64-wiki.de, Tammo Hinrichs: https://www.c64-wiki.de/wiki/Tammo_Hinrichs",
    "CSDb SID entry, '2nd Reality (part 4)' / Tammo Hinrichs (KB) / 1997 Smash Designs: https://csdb.dk/sid/?id=16701",
    "Demozoo, kb / FR ^ JML ^ RFX ^ SDS: https://demozoo.org/sceners/557/",
    "knowledge/players/reflextracker.md (status: in-progress) — sibling card for the same person's later, different, released tool; cited for corroborating identity context, not edited"
  ]
}
```

## Overview

`KB/SDS` is SIDId's byte-signature tag for a routine credited to **Tammo
Hinrichs ("kb")** of the German demo group **Smash Designs** ("SDS"), founded
1992. Both locally-tagged files are by core Smash Designs members — Hinrichs
himself and AEG (André Bürger), one of the group's four founders — a
well-evidenced in-group usage pattern, unlike several other tags in this
batch that spread to unrelated outsiders. Hinrichs is independently confirmed
as co-author of the later, released 1995 tool Reflex-Tracker (see
`knowledge/players/reflextracker.md`) for a *different* group (Reflex) — this
earlier "KB/SDS" signature is recorded as a distinct, unreleased/undocumented
routine, not the same tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: strong group-membership evidence for
both users (Smash Designs), and an explicit non-merge with the sibling
Reflex-Tracker card for the same person's later, different, released tool.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source or
disassembly located for this specific tag.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from cached SIDId data, c64-wiki, Demozoo, and CSDb provenance research.

## Sources

See the `sources` array — the cached SIDId entry, c64-wiki pages for Smash
Designs and Tammo Hinrichs, one CSDb SID entry, Demozoo, and the sibling
`reflextracker.md` card (cited, not edited).

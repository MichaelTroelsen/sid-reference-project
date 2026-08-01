# KB/SDS (player routine)

```json
{
  "id": "kb-sds",
  "name": "KB/SDS (player routine)",
  "aliases": ["KB/SDS"],
  "authors": ["Tammo Hinrichs (kb) of Smash Designs (SDS)"],
  "released": "No dedicated player/tool release date exists (this is a SIDId byte-signature, not a named CSDb tool). Per-tune CSDb `Released` fields for the two actual tagged files, fetched directly from the CSDb XML webservice (type=sid) 2026-08-01: csdb sid id 16706 'C64 303 Emulator' (KB) = 'Released: 1997 The Obsessed Maniacs'; csdb sid id 50338 '4K Power' (AEG) = 'Released: 1999 Smash Designs'. These are each tune's own credited release, not a shared tool's release date — record as earliest/latest attested use (1997-1999), not a `released` fact about the routine itself.",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release page or source repo found under this tag name, confirmed again this pass by checking both tagged files' own CSDb release credits (id 2560 'Triage 2' and id 8357 '4K Power') and the c64-wiki.de Smash Designs group page directly — none list a music-editor/tool credit, only Code/Music/Graphics roles. Tammo Hinrichs ('kb') is a well-documented, prolific C64 coder — separately confirmed as co-author of the released tool Reflex-Tracker (1995, knowledge/players/reflextracker.md) — but this earlier/different-named 'KB/SDS' signature is not confirmed to be that same tool.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'SDS' = SMASH DESIGNS, a real, well-documented German C64 demo group founded 4 October 1992 by 'Dcp', 'AEG' (André Bürger), 'Igor', and 'Ivan' (c64-wiki.de). Tammo Hinrichs ('kb') was a later, major member (also of Reflex, The Obsessed Maniacs, and co-founder of the PC demogroup Farbrausch) — c64-wiki.de and Demozoo both confirm his 'kb' handle and Smash Designs membership, corroborating SIDId's author string exactly.",
    "BOTH LOCALLY-TAGGED FILES ARE BY SMASH DESIGNS FOUNDING/CORE MEMBERS: 'C64 303 Emulator' (csdb id 16706) by KB himself, and '4K Power' (csdb id 50338) by AEG (André Buerger) — one of the group's 4 founders per c64-wiki.de. Unlike several other tags in this batch, this is NOT a signature that spread to unrelated outsiders — both users are core Smash Designs members, a plausible and well-evidenced reason for a shared in-group signature.",
    "A NAMED CSDb USER DIRECTLY CORROBORATES THE SHARED-ROUTINE GROUPING: on the '4K Power' release page (csdb.dk/release/?id=8357), user iAN CooG commented (15 May 2014, quoted verbatim): \"I assume also the tune here is by AEG. Or it's by KB perhaps? Same player as in KB/C64_303_Emulator.sid\" — i.e. an independent human listener/researcher noticed the two locally-tagged files share a player before this project's own SIDId-derived grouping, and even floated the same authorship ambiguity (AEG vs KB) that the group-membership evidence above discusses. This is real evidence of shared code, not just shared group membership, though it remains a forum-style comment, not a disassembly.",
    "DISTINCT FROM THE ALREADY-CARDED 'Reflextracker' TAG (knowledge/players/reflextracker.md, status in-progress): that card documents Tammo Hinrichs as co-author (with Matthias Kramm/Quiss and Zorc) of the released 1995 tool 'Reflex-Tracker V1.1' for the group Reflex — a DIFFERENT group (Reflex, not Smash Designs) and a different, named, released tool. SIDId fingerprints 'KB/SDS' as a separate signature from 'Reflextracker'. No source connects the two as the same code; no `edges` relationship is asserted here.",
    "No RELEASED or REFERENCE field in the SIDId entry for 'KB/SDS' — unlike the well-documented Reflextracker release, this earlier/personal signature has no known CSDb tool page. Both tagged files' own CSDb `Released` fields ('1997 The Obsessed Maniacs', '1999 Smash Designs' — see `released`) are per-tune credited releases, confirming Tammo Hinrichs' cross-group membership (also c64-wiki.de) but not a tool's own release."
  ],
  "sources": [
    "data/sidid.json byTag['KB/SDS']: author 'Tammo Hinrichs (kb) of Smash Designs (SDS)', no other fields",
    "Local dataset: data/composers/kb.json, aeg.json — 2 files tagged 'KB/SDS' (one per composer), confirmed by direct census of both composer caches 2026-08-01: 'C64 303 Emulator' (csdb id 16706, kb.json) and '4K Power' (csdb id 50338, aeg.json); see knowledge/COVERAGE.md row #64 (2 files)",
    "c64-wiki.de, Smash Designs (founded 4 Oct 1992 by Dcp/AEG/Igor/Ivan; members incl. Tammo Hinrichs): https://www.c64-wiki.de/wiki/Smash_Designs — re-checked 2026-08-01, no music-editor/tool credit for the group",
    "c64-wiki.de, Tammo Hinrichs: https://www.c64-wiki.de/wiki/Tammo_Hinrichs — re-checked 2026-08-01, no mention of a 'KB/SDS' routine or any self-authored music tool",
    "CSDb webservice (type=sid, depth=2), fetched 2026-08-01 via scripts/lib/csdb-client.js: https://csdb.dk/sid/?id=16706 (Released: '1997 The Obsessed Maniacs') and https://csdb.dk/sid/?id=50338 (Released: '1999 Smash Designs')",
    "CSDb release page, 'Triage 2' (1997), credits Code/Graphics to AEG, Music to kb/SoNiC/Wacek: https://csdb.dk/release/?id=2560",
    "CSDb release page, '4K Power' (1999), credits Code to AEG; user comment by iAN CooG (15 May 2014) explicitly ties the two tagged files to the same player, quoted in quirks: https://csdb.dk/release/?id=8357",
    "CSDb SID entry, '2nd Reality (part 4)' / Tammo Hinrichs (KB) / 1997 Smash Designs (tagged 'KB/TOM', not 'KB/SDS' — cited only as corroborating identity context, not one of the 2 census files): https://csdb.dk/sid/?id=16701",
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
batch that spread to unrelated outsiders. A named CSDb commenter (iAN CooG,
2014) independently noticed the two files share a player, strengthening this
beyond mere group-membership inference (see quirks). The two files' own CSDb
`Released` credits span 1997 ("C64 303 Emulator", The Obsessed Maniacs) to
1999 ("4K Power", Smash Designs) — attested tune release years, not a tool
release, since no dedicated player/editor page exists for this tag (confirmed
again this pass: neither release's credits, nor the Smash Designs group page,
list a music-editor/tool). Hinrichs is independently confirmed as co-author of
the later, released 1995 tool Reflex-Tracker (see
`knowledge/players/reflextracker.md`) for a *different* group (Reflex) — this
earlier "KB/SDS" signature is recorded as a distinct, unreleased/undocumented
routine, not the same tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: strong group-membership evidence for
both users (Smash Designs) now reinforced by a named CSDb user's own
"same player" observation on the 4K Power release page, and an explicit
non-merge with the sibling Reflex-Tracker card for the same person's later,
different, released tool.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source or
disassembly located for this specific tag.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from cached SIDId data, c64-wiki, Demozoo, and CSDb provenance research
(including a direct CSDb webservice query of both tagged files' own release
metadata, 2026-08-01).

## Sources

See the `sources` array — the cached SIDId entry, c64-wiki pages for Smash
Designs and Tammo Hinrichs, the CSDb webservice records for both tagged SID
files plus their parent release pages (Triage 2, 4K Power — including a
corroborating user comment), Demozoo, and the sibling `reflextracker.md` card
(cited, not edited).

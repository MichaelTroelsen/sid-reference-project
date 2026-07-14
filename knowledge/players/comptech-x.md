# Comptech-X (Geir Tjelta)

```json
{
  "id": "comptech-x",
  "name": "Comptech-X (Geir Tjelta)",
  "aliases": ["Geir_Tjelta/Comptech-X"],
  "authors": ["Geir Tjelta"],
  "released": "~2019 (private, per SIDId)",
  "status": "in-progress",
  "platform": "A THIRD, much later C64 music tool by Geir Tjelta ('GT') — following his earlier SID Systems (1990, already carded as [[sidsys]]) and SID Duzz'It (1992, already carded as [[sidduzzit]]). Essentially undocumented outside this project's own SIDId import, which describes it as 'probably private, for X-Ample Architectures members' — but Tjelta himself has NO confirmed X-Ample affiliation on CSDb or Demozoo, making the described audience genuinely puzzling, not just under-documented. Player-ID-fingerprinted across 6 files: 4 by Markus Schneider (X-Ample Architectures), 1 by Tjelta himself, 1 by Thomas Detert (also X-Ample Architectures).",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (VandaliSID, composed by Markus Schneider): load $a000 (init $a000, play $a003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $a000.", "play": "Sample trace: $a003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 65 filter writes in a dense 336-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": ["sidsys", "sidduzzit"], "same_effect_encoding_as": [] },

  "quirks": [
    "ESSENTIALLY UNDOCUMENTED OUTSIDE THIS PROJECT'S OWN SIDId IMPORT — confirmed via a direct CSDb site search returning ZERO results for 'Comptech-X' (no release, group, or scener match anywhere), and confirmed absent from Geir Tjelta's own CSDb scener page, Markus Schneider's, and the X-Ample Architectures group page. Treat SIDId's own comment as the sole textual source for this tool's existence and context.",
    "NAMING TRAP, EXPLICITLY FLAGGED: do NOT confuse this with 'Compotech' — a REAL, documented X-Ample Architectures tool (C64 Tool, July 1992, plus a 'Compotech V2.1' in August 1995) that appears in CSDb search results for similar terms. These are ~27 years earlier than Comptech-X's 2019 SIDId date, and Geir Tjelta is NOT credited on X-Ample's page in connection with either Compotech release. No evidence links the two beyond superficial name similarity.",
    "THE 'FOR X-AMPLE MEMBERS' DESCRIPTION IS GENUINELY PUZZLING, not just under-documented: Tjelta's own confirmed CSDb group history (Moz(IC)art, Offence, Paradize, SHAPE, Maniacs of Noise) shows NO X-Ample Architectures affiliation at all, yet both of this tag's dominant users (Markus Schneider and Thomas Detert) ARE confirmed X-Ample Architectures members. This reads as a genuinely private, informal arrangement between an outside coder and a group he wasn't part of — not an official group tool — left as an open, unresolved situation rather than guessed at.",
    "MARKUS SCHNEIDER (dominant user, 4/6 files) — German, active since 1987, handles Diflex/Synth-Man, joined X-Ample Architectures March 1989 (ongoing), also founded Lords of Sonics (1988) and was in Elite. Confirmed both CODER and musician.",
    "THOMAS DETERT (1 file) — German, joined X-Ample Architectures July 1988 (still listed active), earlier handles B.U.C.K./Stephen Taylor, musician role, brother of Michael Detert (now 'Michael Satzer', also an X-Ample founder).",
    "X-AMPLE ARCHITECTURES itself: German demo/game group, founded July 1988 by Stephen Taylor, Takashi, General X, and Chap Bizarre; 92 releases 1988-2017.",
    "GT'S BROADER GROUP HISTORY, per CSDb: Moz(IC)art (Nov 1989-Oct 1992), Offence (Jan 1990-Oct 1991, rejoined Jun 2018-Mar 2019), Paradize (Nov 1991-Nov 1992), SHAPE (2009-2010, and Dec 2010-present), Maniacs of Noise (since Jul 2009). Demozoo separately lists additional groups (Oxyron, Legion, Megastyle, Panoramic Designs, Scoop, The Suppliers) not shown on CSDb — a source discrepancy noted but not resolved. No source found explaining why he returned to C64 music-tool authorship in 2019, roughly 27 years after SID Duzz'It (1992) — a genuinely large gap left unexplained.",
    "EDGE ADDED: `shares_routine_with: [\"sidsys\", \"sidduzzit\"]` — reflects the confirmed same-author lineage (all three are Geir Tjelta tools), not a confirmed shared CODE relationship between the three tools themselves, which remains undocumented and unverified."
  ],
  "sources": [
    "This project's SIDId import (sole source for the tool's existence, name, author, approximate date, and 'private/X-Ample' description)",
    "CSDb search — confirms ZERO results for 'Comptech-X': https://csdb.dk/search/?search=Comptech-X&type=all",
    "CSDb search — 'Compotech' (the real, unrelated, similarly-named X-Ample tool — naming trap): https://csdb.dk/search/?search=Compotech&type=all",
    "CSDb scener — Geir Tjelta (id=1266, group history, NO X-Ample affiliation): https://csdb.dk/scener/?id=1266",
    "Demozoo — Geir Tjelta (additional group listings, discrepancy with CSDb): https://demozoo.org/sceners/949/",
    "CSDb scener — Markus Schneider (id=6003, X-Ample Architectures since 1989): https://csdb.dk/scener/?id=6003",
    "CSDb scener — Thomas Detert (id=1312, X-Ample Architectures since 1988): https://csdb.dk/scener/?id=1312",
    "CSDb group — X-Ample Architectures (id=245, founding, 92 releases): https://csdb.dk/group/?id=245",
    "Existing KB cards: knowledge/players/sidsys.md, knowledge/players/sidduzzit.md (Tjelta's two earlier, better-documented tools)",
    "Local dataset: 6 files tagged Geir_Tjelta/Comptech-X, 3 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Geir_Tjelta/Comptech-X` tag is a third, much later C64 music tool by
Geir Tjelta (following the already-carded [[sidsys]] and [[sidduzzit]]) —
but almost entirely undocumented outside this project's own SIDId import.
Player-ID-fingerprinted across 6 files, mostly by two X-Ample
Architectures members, a group Tjelta himself has no confirmed affiliation
with — a genuinely unresolved puzzle, not just a documentation gap.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: this tool has **zero CSDb
footprint whatsoever**, confirmed by direct search; an explicitly flagged
**naming trap** against the real, unrelated X-Ample tool 'Compotech'; and
the **genuinely puzzling audience mismatch** — its users are X-Ample
members, but its author has no documented X-Ample tie at all.

## Disassembly notes

None published. A future `verified` needs an original disassembly of a
`Geir_Tjelta/Comptech-X`-tagged `.sid` + trace — which could also help
test the plausible-but-unconfirmed lineage to Tjelta's earlier SID
Systems/SID Duzz'It tools.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Geir_Tjelta/Comptech-X` `.sid` (VandaliSID, composed
by Markus Schneider): load `$a000`, init `$a000`, play `$a003`, **336
register writes / 50 frames** (65 filter writes — very filter-heavy).
Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — this project's SIDId import, CSDb (4 entries),
Demozoo, and the two related Tjelta cards.

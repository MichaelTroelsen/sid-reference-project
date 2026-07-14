# Tonal Kaos (player routine)

```json
{
  "id": "tonal-kaos",
  "name": "Tonal Kaos (player routine)",
  "aliases": ["Tonal_Kaos"],
  "authors": ["Tonal Kaos"],
  "released": "1990-1991 (Atlantis Software era)",
  "status": "in-progress",
  "platform": "A playroutine used by musician 'Tonal Kaos' across a confirmed run of Atlantis Software budget titles (via the Shaw Brothers → Pantheon Software conversion pipeline). Player-ID-fingerprinted across 7 files: 5 by Tonal Kaos, 2 by Matt Gray (already carded and VERIFIED in this KB, [[matt-gray]]) — a genuinely UNEXPLAINED cross-composer co-occurrence, deliberately left as an open question rather than a resolved connection (see quirks).",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Cavemania, composed by Tonal Kaos): load $3110 (init $3110, play $3490).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $3110.", "play": "Sample trace: $3490 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 52 filter writes in a dense 571-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "TONAL KAOS'S IDENTITY IS ALMOST TOTALLY UNDOCUMENTED, explicitly flagged: HVSC Musicians.txt has a bare entry ('Tonal, Kaos', no realname/country/group — unusually sparse compared to neighboring entries). No CSDb scener or group profile page exists for this handle at all — it appears only as a music credit, never as a demoscene participant. Real name, nationality, and any coding credit are genuinely absent from every source checked.",
    "GAME LIST FULLY CONFIRMED (5 games, all Atlantis Software, matching CSDb's own 5-credit count for this handle): Cavemania (1991, the traced file), Moontorc (1991), Skatin' USA (1990), Superkid (1990), Superkid in Space (1991) — all via the same production pipeline: developed by The Shaw Brothers, converted by Pantheon Software, published by Atlantis Software, with Chris Edwards consistently credited as graphics artist across the whole run.",
    "THE MATT GRAY CONNECTION IS DELIBERATELY LEFT UNRESOLVED, NOT ASSERTED: Matt Gray's own 2 files under this tag (Mean Streak, 1987, Mirrorsoft/Dalali Software; Yogi Bear, 1987, Piranha/Dalali Software) trace to an ENTIRELY DIFFERENT production pipeline (Dalali Software → Mirrorsoft/Piranha, 1987) than Tonal Kaos's confirmed Atlantis Software run (Shaw Brothers → Pantheon → Atlantis, 1990-91) — no shared personnel, publisher, or developer found connecting the two chains, and no source anywhere ties Tonal Kaos to Dalali, Mean Streak, or Yogi Bear directly. Given this project's own established precedent that a DeepSID/HVSC player tag identifies a PLAYBACK-ROUTINE SIGNATURE, not necessarily a consistent single composer (the already-documented [[rob-hubbard]] tag spreads across 51 different composers per that card's own research), the most defensible reading is that Dalali's own 1987 player routine happens to structurally match whatever generic driver Tonal Kaos's later Atlantis titles used — but this is EXPLICITLY SPECULATION, not a confirmed fact, and is flagged as an open question rather than resolved.",
    "MATT GRAY'S OWN ACCOUNT OF MEAN STREAK is relevant context (already partially documented via his existing verified card): he states Dalali's own programmers 'had to rewrite the player... left out all the modulation and pitch bend routines' for that specific game, meaning the actual in-game driver differs from his own original composition tool — a real, first-party-sourced reason the tag/routine identity for his 2 files here could differ from his usual signature.",
    "No known relationship found to any other composer/tool already in this KB beyond the Matt Gray co-occurrence discussed above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Tonal, Kaos' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb search — Tonal Kaos (5 credits, all Atlantis Software, no scener/group page): https://csdb.dk/search/?search=Kaos+Tonal",
    "Lemon64 — Superkid (1990, Atlantis/Pantheon, Tonal Kaos musician credit): https://www.lemon64.com/game/superkid",
    "Lemon64 — Cavemania (1991, same pipeline): https://www.lemon64.com/game/cavemania",
    "Lemon64 — Mean Streak (1987, Dalali Software, Matt Gray's own account of the driver rewrite): https://www.lemon64.com/game/mean-streak",
    "Lemon64 — Yogi Bear (1987, Dalali Software, Piranha): https://www.lemon64.com/game/yogi-bear",
    "MobyGames — Atlantis Software Limited (company credits, corroborates the 5-game set): https://www.mobygames.com/company/5412/atlantis-software-limited/",
    "MobyGames — Pantheon Software (conversion house): https://www.mobygames.com/company/4055/pantheon-software/",
    "CSDb scener — Matt Gray (id=8134, group Matt & Chaz — no Tonal Kaos connection found there): https://csdb.dk/scener/?id=8134",
    "Existing KB card: knowledge/players/matt-gray.md (VERIFIED, the sibling composer whose 2 files here remain unexplained)",
    "Local dataset: 7 files tagged Tonal_Kaos, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Tonal_Kaos` tag is a playroutine used by musician 'Tonal Kaos' across
a confirmed run of Atlantis Software budget titles — but 2 of the 7 files
under this tag are by VERIFIED composer Matt Gray, on games from a
completely different, unrelated 1987 production pipeline. This
cross-composer co-occurrence is real but genuinely unexplained, and this
card deliberately reports it as an open question rather than a solved
mystery.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: Tonal Kaos's **near-total
lack of documentation** (no CSDb profile at all); the **fully confirmed
Atlantis Software game list**; and the **Matt Gray connection left
explicitly unresolved**, with a plausible-but-unproven hypothesis offered
(a shared player-routine SIGNATURE rather than a shared composer) rather
than a fabricated explanation.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Tonal_Kaos`-tagged `.sid` +
trace — which would also be the only way to settle whether Matt Gray's 2
files here genuinely share code with Tonal Kaos's routine or merely
resemble it by coincidence.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Tonal_Kaos` `.sid` (Cavemania, composed by Tonal
Kaos): load `$3110`, init `$3110`, play `$3490`, **571 register writes /
50 frames** (52 filter writes — very filter-heavy, a dense trace).
Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 entries), Lemon64
(4 pages), MobyGames (2 pages), and the existing matt-gray card.

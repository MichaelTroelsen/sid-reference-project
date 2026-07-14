# Bo Mellberg / Boone (player routine)

```json
{
  "id": "bo-mellberg",
  "name": "Bo Mellberg / Boone (player routine)",
  "aliases": ["Bo_Mellberg"],
  "authors": ["Bo Mellberg ('Boone')"],
  "released": "1987-1990 (Powersoft / Game On / CP Verlag era)",
  "status": "in-progress",
  "platform": "Swedish composer Bo Mellberg's ('Boone') own playroutine — a freelance commercial musician across multiple European publishers (Powersoft, Game On/CP Verlag/Double Density), with a CSDb-listed Coder function though no specific coding credit was independently confirmed. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Motorhead, 1989, Game On/Double Density): load $4000 (init $4000, play $4003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $4000.", "play": "Sample trace: $4003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 50 filter writes in a dense 324-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC CONFIRMS: 'Mellberg, Bo (Boone) - SWEDEN' — handle 'Boone,' no group listed in this file.",
    "THREE CONFIRMED GAME CREDITS, ALL REAL C64 GAMES, NOT BAND-REFERENCE DEMO TUNES (the 'Motorhead' title was checked and IS a real game, not just a tune named after the band): Motorhead (1989, publisher Game On, copyright CP Verlag/Double Density — programmer Joakim Axmon, graphics Jens Hultgren; Mellberg composed tracks 3-12, John Keding tracks 1-2, and Mellberg is also credited for sound effects — the traced file), Point X (1987, publisher Powersoft — coders Jimmy Carlsson & Magnus Strand, graphics/box art Lloyd/Christer Wallentin), and Ryshka (1990, publisher Game On/CP Verlag/Double Density — programmer Måns Näsman, graphics Jens Hultgren; Lemon64 notes the traced tune was UNUSED in the shipped game).",
    "A FOURTH, UNCONFIRMED TITLE SURFACED: 'Sky Twice' (1987, American Action) also credited to Mellberg per a CSDb search — flagged as UNCONFIRMED, sourced only from a search-tool summary, not independently fetched.",
    "CSDb LISTS HIS FUNCTIONS AS 'Coder, Musician' (scener id=13827), but no specific coding credit (i.e. which release he coded) was independently located in any source checked — this is reported as UNCONFIRMED-IN-DETAIL: the function tag exists on his profile, but no named coding credit corroborates it beyond that tag.",
    "NO FORMAL GROUP MEMBERSHIP is populated on his CSDb profile — he appears to have worked as a freelance/commercial musician across multiple publishers rather than being a member of a scene group, though scattered one-off music/rip credits exist across several groups (Excellence Crew, Floppy Cracking Team, Twentieth Century Crackers, Defence, Cookie Crew, Mr. Fritt, Xades Society, Softbreaker) — the nature of each (formal membership vs. one-off) is UNCONFIRMED. A possible additional alias 'Cobra' surfaced only via an AI-generated page summary, NOT cross-checked against a second source — explicitly flagged, not asserted as fact.",
    "'GAME ON'/'CP VERLAG' RECURS AS A PUBLISHER THREAD ACROSS THIS KB: the same German disk-magazine/budget-label ecosystem (Double Density, Golden Disk 64) that published Motorhead and Ryshka also appears in [[martijn-schutten]], [[audio-effect-editor]], and [[twice-effect-editor]]'s own cards — this is circumstantial context (a shared publisher across different, unrelated teams), not a personal connection to Mellberg specifically.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — checked against the KB's other Swedish/Nordic composers ([[jonas-hulten]], [[skyline-editor]]) with no overlap found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Mellberg, Bo (Boone) - SWEDEN'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Motorhead (full credits, traced file): https://www.lemon64.com/game/motorhead",
    "Lemon64 — Point X: https://www.lemon64.com/game/point-x",
    "Lemon64 — Ryshka (unused-tune note): https://www.lemon64.com/game/ryshka",
    "CSDb scener id=13827 (Bo Mellberg, Coder/Musician functions): https://csdb.dk/scener/?id=13827",
    "Existing KB cards: knowledge/players/martijn-schutten.md, knowledge/players/audio-effect-editor.md, knowledge/players/twice-effect-editor.md (Game On/CP Verlag publisher context)",
    "Local dataset: 3 files tagged Bo_Mellberg, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Bo_Mellberg` tag is Swedish composer Bo Mellberg's ('Boone') own
playroutine — a freelance commercial musician across multiple European
publishers, with confirmed credits on real 1987-1990 C64 games including
one whose tune went unused in the final release. Player-ID-fingerprinted
across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **checked-and-
confirmed 'Motorhead' game title**: verified as a real commercial C64
game with full credits, not a tune merely named after the band as an
initial research premise wondered. Also notable: a recurring 'Game
On/CP Verlag' publisher thread already appearing in 3 other KB cards,
noted as shared context rather than a personal connection.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Bo_Mellberg`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Bo_Mellberg` `.sid` (Motorhead): load `$4000`, init
`$4000`, play `$4003`, **324 register writes / 50 frames** (50 filter
writes — very dense, filter-heavy). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages), CSDb,
and 3 related KB cards.

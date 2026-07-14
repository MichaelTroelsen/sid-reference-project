# Jonas Hultén / Hypnosis (player routine)

```json
{
  "id": "jonas-hulten",
  "name": "Jonas Hultén / Hypnosis (player routine)",
  "aliases": ["Jonas_Hulten"],
  "authors": ["Jonas Hultén ('Hypnosis')"],
  "released": "2014-2021 (Kollektivet / Svenska Commodoreklubben era)",
  "status": "in-progress",
  "platform": "Swedish coder-composer Jonas Hultén's (demoscene handle 'Hypnosis') own playroutine — CONFIRMED both coder and musician, professionally a programmer since 1998 (Chalmers University EE graduate). Player-ID-fingerprinted across 3 files, all his own. HVSC itself has NO record of this composer at all — a genuinely rare gap for this KB.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Bruce Lee II, 2015): load $e081 (init $e081, play $e0ef).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $e081.", "play": "Sample trace: $e0ef (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 52 filter writes in a dense 276-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO ENTRY AT ALL FOR THIS COMPOSER, confirmed via direct grep of the raw Musicians.txt file (checked both the full H-alphabetical block and every 'Jonas' occurrence) — a genuinely rare, explicit gap for this KB, meaning no HVSC-sourced country/group cross-reference exists; country (Sweden) comes entirely from CSDb instead.",
    "'BRUCE LEE II' (the traced file) IS NOT A 1987 DATASOFT SEQUEL, an incorrect premise in the original research brief EXPLICITLY CORRECTED: the original 'Bruce Lee' (1984, Datasoft) never had an official sequel. What exists is a 2013 spiritual-successor freeware game for PC/Linux by Spanish developer Bruno R. Marcos (with a retro 'C64 mode' built in); Hultén then did a genuine, from-scratch C64 PORT of Marcos's game, started April 2014, released 7 April 2015 (v1.9 update later). Credits: code — Jonas Hultén, music — Jonas Hultén, graphics — 'Mase.'",
    "'SCK INTRO' CONFIRMS DEMOSCENE GROUP MEMBERSHIP: SCK = Svenska Commodoreklubben (Swedish Commodore Club, still active). 'SCK Intro' (March 2021) is a multiplatform intro (C16/Plus4, C64, C128, VIC-20) with Hultén credited for Code, Music, AND Graphics under his handle 'Hypnosis.'",
    "CONFIRMED BOTH CODER AND MUSICIAN via his own CSDb scener profile (id=26400): roles Coder/Graphician/Musician, handle Hypnosis, country Sweden, groups 'Hultén Brothers,' 'Kollektivet' (which he founded), and Svenska Commodoreklubben (joined 28 January 2021, currently its finance/membership officer per the club's own site). C64-Wiki adds real-world biography: Chalmers University of Technology EE degree, professional programmer since 1998, career at Kongsberg Devotek, Tieto, AH Automation, currently Tenstar Simulation — a coder by trade who also does his own music, consistent with the dense, hand-rolled-feeling trace (276 writes/50 frames, filter=52).",
    "A POSSIBLE, EXPLICITLY UNCONFIRMED EARLIER CREDIT: Demozoo lists a much older production, 'Veni Vidi Vic!' (December 1996, VIC-20 demo, music credit, with Jens Schönfeld and Marko Mäkelä) under the same 'Hypnosis' handle — suggesting his scene involvement may go back to the mid-1990s rather than only the 2010s. Plausible given the shared alias and VIC-20 focus, but NOT independently confirmed as definitely the same person.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — his Swedish circle (Kollektivet, Hultén Brothers, Svenska Commodoreklubben) does not overlap with any other Scandinavian composer already carded (checked against Olav Mørkrid, Henning Rokling, Henning Andersen, and all others: Ben Daglish, Adam Gilmore, David Dunn, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (checked directly, confirmed NO entry exists for Jonas Hultén): https://hvsc.sannic.nl/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb release id=137540 (Bruce Lee II, full credits, traced file): https://csdb.dk/release/?id=137540",
    "C64-Wiki — Bruce Lee II: https://www.c64-wiki.com/wiki/Bruce_Lee_II",
    "CSDb scener id=26400 (Jonas Hultén / Hypnosis, full role/group history): https://csdb.dk/scener/?id=26400",
    "C64-Wiki (DE) — Jonas Hultén (biography, professional programming career): https://www.c64-wiki.com/wiki/Jonas_Hult%C3%A9n",
    "Demozoo — Jonas Hultén / SCK Intro, Veni Vidi Vic!: https://demozoo.org/sceners/60878/",
    "Svenska Commodoreklubben (SCK), Hultén's current role: https://www.commodore.se/",
    "Local dataset: 3 files tagged Jonas_Hulten, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jonas_Hulten` tag is Swedish coder-composer Jonas Hultén's ('Hypnosis')
own playroutine — a professional programmer since 1998 who also does his
own C64 music. HVSC has no record of him at all, a rare gap in this KB.
Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **complete absence
from HVSC's own composer index**, explicitly checked rather than assumed;
and a **corrected premise** on 'Bruce Lee II,' which is a 2015 fan-game
C64 port, not an official 1987 Datasoft sequel as an initial research
assumption guessed.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Jonas_Hulten`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Jonas_Hulten` `.sid` (Bruce Lee II): load `$e081`,
init `$e081`, play `$e0ef`, **276 register writes / 50 frames** (52
filter writes — dense, filter-heavy). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — CSDb (2 entries), C64-Wiki (2 pages), Demozoo,
and Svenska Commodoreklubben's own site.

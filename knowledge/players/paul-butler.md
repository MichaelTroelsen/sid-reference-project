# Paul Butler (player routine)

```json
{
  "id": "paul-butler",
  "name": "Paul Butler (player routine)",
  "aliases": ["Paul_Butler"],
  "authors": ["Paul Butler"],
  "released": "1983-1993 (Artech Digital Entertainment era)",
  "status": "in-progress",
  "platform": "Canadian composer-designer Paul Butler's own playroutine, used across the many Artech Digital Entertainment (Ottawa, Canada — a studio he co-founded) titles he scored. A dense, busy routine (~8-9 register writes/frame in the traced sample). Player-ID-fingerprinted across 12 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Deceptor): load $6767 (init $7d08, play $7def).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $7d08.",
    "play": "Sample trace: $7def (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 5 filter writes in a 200-frame/1755-write sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NATIONALITY CORRECTION: Paul Butler is CANADIAN, not British — HVSC Musicians.txt lists him plainly as 'Butler, Paul - CANADA'. Co-founder (with Rick Banks) of Artech Digital Entertainment, Ottawa (founded 1981/1982). Studied Computer/Electronic Music at Carleton University with Banks in the late 1970s; later degrees in Computer Science (Algonquin College) and Philosophy (Carleton University). Active as a games composer/designer 1983-1993.",
    "GAME CREDITS CONFIRMED, matching the local HVSC folder exactly: Grog's Revenge (BC's Quest for Tires II), Fight Night, Deceptor (the traced file), Ace of Aces (1986, Accolade — his 'Sound' credit is in the game's own printed manual), Heat Wave — plus other Artech titles not in this collection: The Dam Busters, Desert Fox, Killed Until Dead, Mini Putt, Apollo 18, The Train: Escape to Normandy, Infiltrator II, Rack 'Em, Serve & Volley, Mental Blocks, Blue Angels.",
    "LATER SOUND-DRIVER PROGRAMMING, supporting self-coded hypothesis: he did low-level audio-engine work on Sega Genesis titles (ToeJam & Earl, Sports Talk Baseball, 1991-92) — evidence of hands-on driver coding beyond just composing, plausibly extending back to a self-written C64 routine, though no source directly states he wrote the C64 driver himself.",
    "NO CSDb PROFILE EXISTS for him — unsurprising, since he was a professional-era (1983-93) commercial games composer, not a demoscene participant, same pattern as several other American/Canadian composers already carded here (e.g. [[paul-norman]], [[dave-warhol]]).",
    "NAME-COLLISION HAZARD FLAGGED: search results repeatedly surface an unrelated 'Chris Butler' (a different, well-known C64 coder featured in a ZZAP!64 interview) and an unrelated blues musician also named Paul Butler — neither is this composer; do not conflate. MobyGames also has multiple distinct 'Paul Butler' profiles; the Artech/Rick Banks one (57 games together) is the correct one here, cross-checked against VGMPF as the stronger primary source (MobyGames itself returned a fetch error, so treated as lower-confidence corroboration only).",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Paul Butler entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Butler, Paul - CANADA')",
    "VGMPF (Artech co-founding, education, full gameography, Sega Genesis driver work): https://www.vgmpf.com/Wiki/index.php/Paul_Butler",
    "Wikipedia — Artech Digital Entertainment: https://en.wikipedia.org/wiki/Artech_Digital_Entertainment",
    "Ace of Aces (1986, Accolade) game manual, 'Sound' credit: https://archive.org/stream/Ace_of_Aces_1986_Accolade_a/Ace_of_Aces_1986_Accolade_a_djvu.txt",
    "gb64 — Heat Wave (C64/Amiga, Artech/Accolade): https://gb64.com/game.php?id=3464",
    "Local dataset: 12 files tagged Paul_Butler, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Paul_Butler` tag is Canadian composer-designer Paul Butler's own
playroutine, used across the many Artech Digital Entertainment titles he
scored — a studio he co-founded in Ottawa. Player-ID-fingerprinted across
12 files, all his own; a dense, busy routine averaging roughly 8-9 register
writes per frame in the traced sample.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he's **Canadian, not
British** (a correction from initial assumptions, confirmed via HVSC); his
**Artech co-founding and full gameography** matches the local HVSC folder
exactly; his **later Sega Genesis driver-programming work** supports (but
doesn't prove) self-coding on the C64; and a **flagged name-collision
hazard** (an unrelated Chris Butler and an unrelated blues musician also
named Paul Butler).

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Paul_Butler`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Paul_Butler` `.sid` (Deceptor): load `$6767`, init
`$7d08`, play `$7def`, **1755 register writes / 200 frames** (5 filter
writes) — a dense, busy routine. Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, Wikipedia, an Ace of
Aces game manual scan, and gb64.

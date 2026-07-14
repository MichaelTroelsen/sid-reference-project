# Music Works (Simulmondo)

```json
{
  "id": "music-works",
  "name": "Music Works (Simulmondo)",
  "aliases": ["Music_Works"],
  "authors": ["Simulmondo (in-house)"],
  "released": "1991 (Simulmondo)",
  "status": "in-progress",
  "platform": "A real, named product — 'Music Works,' Simulmondo's own in-house C64 music-composition tool (1991) — CONFIRMED via SIDId's own entry and a matching CSDb crack release, used across their sports-simulation game catalog. Ivan Venturi, one of the two credited composers, was actually Simulmondo's LEAD PROGRAMMER, not primarily a musician — a coder writing his own in-house game music. Player-ID-fingerprinted across 3 files: 2 by Venturi, 1 by Stefano Palmonari.",
  "csdb_release": 92082,

  "memory": { "load_address": "Sample HVSC file traced (500cc Motomanager, composed by Ivan Venturi): load $6000 (init $9000, play $c040).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $9000.", "play": "Sample trace: $c040 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 5 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'MUSIC WORKS' IS A REAL, NAMED PRODUCT, not a generic label: SIDId's `sidid.nfo` has an entry with `RELEASED: 1991 Simulmondo`. CSDb release id=92082 independently confirms a C64 program titled 'Music Works,' released/cracked in 1991 by the Fantastic 4 Cracking Group. Combined, this strongly indicates it was Simulmondo's own in-house music-composition tool, matching that all 3 tagged files are Simulmondo titles — though no independent documentation of its internal workings was found beyond the crack listing.",
    "ALL THREE GAMES CONFIRMED PUBLISHED BY SIMULMONDO (Bologna, Italy's first software house): 500cc Motomanager (1991/92, the traced file), I Play: Football Champ (1991, a sequel to I Play 3D Soccer, Venturi credited with graphics and music), and 1000 Miglia: 1927-1933 Volume I (1992, Palmonari credited with the C64 soundtrack).",
    "IVAN VENTURI, THE PRIMARY COMPOSER, WAS ACTUALLY SIMULMONDO'S LEAD PROGRAMMER, well-documented independently of the music credit: per a detailed company retrospective (genesistemple.com, 'Once we were giants: the history of Simulmondo'), he coded the C64 port of Italy '90 Soccer and Formula 1 Manager, and by 1991 was director of production. He's ALSO independently credited as composer on a SECOND SID — F1 Manager (1989, CSDb id=45234) — meaning a coder wrote his own in-house game music, consistent with Music Works being an internal studio tool rather than a public scene editor, not merely inferred from the credit pattern alone.",
    "STEFANO PALMONARI'S SCENE-IDENTITY OVERLAP IS EXPLICITLY FLAGGED AS UNCONFIRMED, NOT ASSERTED: his only CSDb hit under a matching handle ('Dustbin,' group Hokuto Force) is credited on 'The Wrong Funky' (2012) — TWENTY YEARS after the 1992 Simulmondo credit. This could be the same person resurfacing in the demoscene decades later, or HVSC/CSDb may have coincidentally merged a same-named later scener's handle onto the original musician's page. A SoundCloud profile ('Stefano Palmonari a.k.a. DustBin') exists but was not independently cross-checked further — left open, not resolved.",
    "IVAN VENTURI'S OWN CSDb IDENTITY IS SIMILARLY UNCONFIRMED: CSDb hits under that exact name are 2019 graphics releases ('Spiral Demon,' 'Monk') — likely a DIFFERENT, modern Ivan Venturi, not verified either way as connected to the 1991-era Simulmondo programmer.",
    "NO CONNECTION FOUND TO [[daniele-liverani]] despite both being Italian C64 composers already/newly in this KB — specifically checked given the shared nationality, but Liverani's own known C64 work (GENIUS — Into the Toy Warehouse) is unrelated to Simulmondo per every source checked; explicitly ruled out, not just unmentioned.",
    "Not confirmed in SIDId beyond the entry already cited. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found beyond the ruled-out Liverani check)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Venturi, Ivan - ITALY'; 'Palmonari, Stefano (Dustbin) / Hokuto Force - ITALY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "SIDId sidid.nfo (github.com/cadaver/sidid) — 'Music_Works' entry, RELEASED 1991 Simulmondo",
    "CSDb release id=92082 ('Music Works', 1991 crack): https://csdb.dk/release/?id=92082",
    "Lemon64 — 500cc Motomanager (traced file): https://www.lemon64.com/game/500cc-motomanager",
    "Lemon64 — I Play Football Champ: https://www.lemon64.com/game/i-play-football-champ",
    "Lemon64 — 1000 Miglia: https://www.lemon64.com/game/1000-miglia",
    "genesistemple.com — 'Once we were giants: the history of Simulmondo, Italy's first software house': https://genesistemple.com/once-we-were-giants-the-history-of-simulmondo-italys-first-software-house-part-i",
    "CSDb sid id=45234 (F1 Manager, 1989, Ivan Venturi composer credit): https://csdb.dk/sid/?id=45234",
    "Local dataset: 3 files tagged Music_Works, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Music_Works` tag is a real, named product — Simulmondo's own
in-house C64 music-composition tool (1991), confirmed via SIDId and a
matching CSDb crack release. Composer Ivan Venturi was actually
Simulmondo's lead programmer, a coder scoring his own in-house games.
Player-ID-fingerprinted across 3 files: 2 by Venturi, 1 by Stefano
Palmonari.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
coder-composer identity**: Ivan Venturi's role as Simulmondo's lead
programmer is independently documented (a company history, plus a
second solo composer credit on another game), directly explaining why
this tool exists as an in-house studio product rather than a public
editor.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Music_Works`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Music_Works` `.sid` (500cc Motomanager): load `$6000`,
init `$9000`, play `$c040`, **155 register writes / 50 frames** (5 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, SIDId's sidid.nfo, CSDb (2
entries), Lemon64 (3 pages), and genesistemple.com.

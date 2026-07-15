# KMS - Kris' Music System (Kris Hatlelid)

```json
{
  "id": "kris-hatlelid",
  "name": "KMS - Kris' Music System (Kris Hatlelid)",
  "aliases": ["Kris_Hatlelid"],
  "authors": ["Kris Hatlelid"],
  "released": "~1988-1991 (Distinctive Software era)",
  "status": "in-progress",
  "platform": "Canadian coder-composer Kris Hatlelid's own sound-driver format, 'KMS' ('Kris' Music System'), written at Distinctive Software where he did both music/SFX AND game programming. Player-ID-fingerprinted across 10 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Castlevania, a licensed Konami port arrangement — see quirks): load $0f00 (init $5400, play $54b0).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $5400.", "play": "Sample trace: $54b0 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED CODER, self-named driver format: CSDb lists his function as Coder (not musician-only); MobyGames and VGMPF both independently confirm he wrote his own sound driver, 'KMS' ('Kris' Music System'), while working at Distinctive Software — he did both music/SFX AND game programming there, distinct from being purely a musician using a third-party engine.",
    "CAREER STARTED 1983 as designer/programmer of Frantic Freddie, his first credit. Left Distinctive Software in 1993; later career (not music-industry) — president/CTO of ICE Online, then Electronic Arts (senior producer, through 2002), then Microsoft (engineering director).",
    "AN EARLIER, PRE-KMS DRIVER IS NOW SEPARATELY CARDED as [[gregor-larson]] (tag `Gregor_Larson`, 2 files: Frantic Freddie, Interlude 1 - The Firing Squad) — confirmed via CSDb, Wikipedia, and VGMPF that Frantic Freddie (1983) was CO-DESIGNED with a second person, Gregor Larson, who VGMPF states 'programmed a music driver' jointly with Hatlelid, who then 'arranged in hex.' This is the genuine pre-KMS tool his own career started on — KMS itself only dates to ~1988, five years later.",
    "CASTLEVANIA.SID IS A LICENSED ARRANGEMENT, NOT AN ORIGINAL COMPOSITION — worth flagging clearly since it affects how to read the trace: this is a genuine, officially licensed Konami tie-in (C64 conversion, 1990, converted by Unlimited Software Inc., programming by Alan Stewart), and Hatlelid ADAPTED/PORTED Konami Kukeiha Club's original NES score ('Vampire Killer', 'Stalker', etc.) to the SID chip — not a fan cover, not an original Hatlelid composition. This may explain trace characteristics (e.g. 0 filter writes) differently than a from-scratch composition would.",
    "'CYCLES' RESOLVED: refers to 'The Cycles: International Grand Prix Racing' — a Distinctive Software motorcycle racing sim, published by Accolade 1989 (Amiga/DOS), C64 port 1991. NOT the 1982 Tron-style light-cycle game, a genuinely unrelated title despite the name similarity.",
    "Other confirmed C64 credits (Lemon64, 13 titles total): Frantic Freddie (1983), Grand Prix Circuit (1989), Test Drive II + scenery disks (1989), Power at Sea (1988), Thud Ridge (1988), Metal Gear (1990, another licensed port arrangement), Teenage Mutant Hero/Ninja Turtles (1990), Wings of Fury (1990). CSDb also lists him ex-member of the group Piratebusters, active into 1990s demoscene credits (Actual Trading Generation, Clique, Alpha Flight).",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Hatlelid, Kris - CANADA')",
    "CSDb scener (id=32451, handles Kristjan/Mad Hatter, Coder, Piratebusters): https://csdb.dk/scener/?id=32451",
    "MobyGames — Kris Hatlelid (79 credits, KMS driver, Distinctive Software, post-C64 career): https://www.mobygames.com/person/157/kris-hatlelid/",
    "VGMPF — KMS driver: https://www.vgmpf.com/Wiki/index.php?title=KMS",
    "Lemon64 — 13 C64 titles credited to Kris Hatlelid: https://www.lemon64.com/games/list.php?list_individual=kris-hatlelid",
    "Lemon64 — Castlevania (Konami/Unlimited Software Inc. licensed port): https://www.lemon64.com/game/castlevania",
    "Lemon64 — The Cycles: International Grand Prix Racing: https://www.lemon64.com/game/cycles-international-grand-prix-racing",
    "Wikipedia — The Cycles: International Grand Prix Racing: https://en.wikipedia.org/wiki/The_Cycles:_International_Grand_Prix_Racing",
    "Local dataset: 10 files tagged Kris_Hatlelid, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Kris_Hatlelid` tag is Canadian coder-composer Kris Hatlelid's own
sound driver, 'KMS' ('Kris' Music System'), written while he worked at
Distinctive Software doing both game programming and music. Player-ID-
fingerprinted across 10 files, all his own — including a licensed
arrangement of Konami's Castlevania score for the C64 port.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **confirmed self-named
driver format** ('KMS'), sourced independently by MobyGames and VGMPF; the
**Castlevania trace is a licensed arrangement**, not an original
composition — flagged so the trace isn't misread; and **'Cycles' resolved**
to a specific 1989/1991 racing game, unrelated to the Tron-style game of
the same generic name.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Kris_Hatlelid`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Kris_Hatlelid` `.sid` (Castlevania): load `$0f00`,
init `$5400`, play `$54b0`, **184 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, MobyGames, VGMPF, and
Lemon64 (3 pages).

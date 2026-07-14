# Dave Kelly (player routine)

```json
{
  "id": "dave-kelly",
  "name": "Dave Kelly (player routine)",
  "aliases": ["Dave_Kelly"],
  "authors": ["Dave Kelly"],
  "released": "1988-1990 (Consult Software / TV Games era)",
  "status": "in-progress",
  "platform": "English composer Dave Kelly's own playroutine — a contract composer across two distinct UK dev-house relationships (Consult Software's Domark arcade-license conversions, and a recurring TV Games British-game-show-tie-in team), never credited as a coder on any confirmed title. Player-ID-fingerprinted across 6 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Dragon Spirit, 1989): load $a800 (init $a800, play $a803).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $a800.", "play": "Sample trace: $a803 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "TWO DISTINCT, CONFIRMED WORKING RELATIONSHIPS: (1) with Consult Software (Domark's own arcade-license conversion house) on Dragon Spirit (1989, the traced file — a C64 conversion of Namco's 1987 arcade original, adapting Shinji Hosoe's 'Area 1 (Paleozoic Era)' theme; programmer Keith A. Purkiss) and Vindicators (1990, Atari Games/Tengen license; developer Consult Software, programmer Ian Cognito, adapting Brad Fuller & Hal Canon's arcade 'Theme 3'); (2) a recurring TV Games team on two consecutive British game-show tie-ins in 1988 — Every Second Counts (design Richard Naylor, programming Colin Pimlott, graphics David Howcroft) and The Krypton Factor (same programmer/artist, design Richard Naylor & Richard Whelan).",
    "'EVERY SECOND COUNTS' CONFIRMED to be exactly the TV game-show tie-in the research brief hypothesized — a licensed C64/Spectrum/Amstrad adaptation of the real British quiz show, published by TV Games (a small UK label specializing in TV tie-ins) in 1988.",
    "NO EVIDENCE HE WAS A CODER: every credit list found separates 'Programming'/'Programmer' from 'Music'/'Musician', always naming a DIFFERENT person for each role across all 4 confirmed titles — unlike several other composers in this KB, no coding credit was ever found for him.",
    "NAME-COLLISION RISK EXPLICITLY CHECKED AND RULED OUT: Wikipedia's 'Dave Kelly (musician)' is a DIFFERENT person (a British blues guitarist, b. 1947) — confirmed distinct, not conflated with this card's subject.",
    "CSDb COVERAGE FLAGGED AS UNVERIFIED, not confirmed either way: a CSDb search surfaced what looked like a plausible release list for him, but a direct fetch of one supposed release ID from that list resolved to an unrelated crack page ('Passing Shot') — those specific CSDb IDs are explicitly NOT trusted and are omitted from this card pending a manual re-check.",
    "The single-composer 'Dave_Kelly' tag (6/6 files) across two separate dev-house relationships, never crediting a shared distributed player tool, is consistent with a personal/hand-coded routine — a late-1980s UK contract-composer pattern, though not directly proven via disassembly.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Kelly, Dave - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Dragon Spirit (full credits, arcade-theme adaptation source): https://www.lemon64.com/game/dragon-spirit",
    "Lemon64 — Vindicators (full credits): https://www.lemon64.com/game/vindicators",
    "Lemon64 — Every Second Counts (full credits, confirms TV show tie-in): https://www.lemon64.com/game/every-second-counts",
    "Lemon64 — The Krypton Factor (full credits): https://www.lemon64.com/game/krypton-factor",
    "Local dataset: 6 files tagged Dave_Kelly, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Dave_Kelly` tag is English composer Dave Kelly's own playroutine —
used across two distinct dev-house relationships: Consult Software's
Domark arcade-license conversions, and a recurring TV Games British
game-show tie-in team. Player-ID-fingerprinted across 6 files, all his
own; no coding credit was found on any of his confirmed titles.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **two distinct, confirmed
dev-house relationships**, each independently sourced across 4 game
credits; a **resolved name-collision risk** against an unrelated blues
guitarist of the same name; and **flagged, unverified CSDb coverage**
explicitly not trusted after a direct check found a mismatched release ID.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Dave_Kelly`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Dave_Kelly` `.sid` (Dragon Spirit): load `$a800`, init
`$a800`, play `$a803`, **74 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt and Lemon64 (4 game pages).

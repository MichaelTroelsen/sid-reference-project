# Stephen Legg (player routine)

```json
{
  "id": "stephen-legg",
  "name": "Stephen Legg (player routine)",
  "aliases": ["Stephen_Legg"],
  "authors": ["Stephen Legg"],
  "released": "1988-1989 (Martech/Screen 7/Mindscape era)",
  "status": "in-progress",
  "platform": "English musician Stephen Legg's playroutine, used across confirmed credits at three different UK publishers (Martech, Screen 7, Mindscape via developer Animated Pixels) — on every title where a separate programmer is named, Legg's role is exclusively music, suggesting a shared/studio-provided routine rather than a self-coded one. Player-ID-fingerprinted across 6 files, all his own (2 co-credited with Danny Marsh).",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (The Fury, 1988, Martech): load $6400 (init $6400, play $6449).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $6400.", "play": "Sample trace: $6449 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 26 filter writes in a dense 263-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIX CONFIRMED GAME CREDITS, EXACTLY MATCHING CSDb's own 6-result search count for this composer: The Fury (1988, Martech, the traced file — programmer Jas Austin, graphics Dave Dew, music Legg solo), Hellfire (1988, Martech — programmer David George Wainwright, graphics Mark Kevin Jones, music Danny Marsh & Legg), Jaws (1989, Screen 7 — programmer Robert Henderson, music Legg solo), Steigar (1989, Screen 7 — music Danny Marsh & Legg, no separately-listed programmer/graphics credit on this one title, see caveat below), Gangster (1989, Mindscape/Animated Pixels — programmer Charlie Robson, graphics Paul Robinson & Simon Beal, music Legg solo), Time Traveller (1989, Mindscape/Animated Pixels — same team as Gangster, music Legg solo).",
    "ON EVERY TITLE WHERE A SEPARATE PROGRAMMER IS NAMED, Legg's credit is EXCLUSIVELY music — a distinct person always holds the programmer role. Best-supported reading: he was purely a musician, not a coder, making a shared/studio-provided routine (rather than self-written) the more likely origin for this tag's driver.",
    "ONE GENUINE, EXPLICITLY UNRESOLVED CAVEAT: on 'Steigar' specifically, Lemon64 lists only 'Creator: Danny Marsh, Stephen Legg' with no separately-named programmer/graphics credit, unlike every other title in his catalog. This COULD imply a broader role on that one game, but no second source corroborates it (MobyGames 403'd, World of Spectrum unreachable) — left explicitly as unresolved, not treated as evidence he coded.",
    "TWO TITLES (Hellfire, Steigar) ARE CO-CREDITED WITH DANNY MARSH, a recurring collaborator — Marsh has no separate CSDb/HVSC profile found in this research pass and is not currently a card in this KB.",
    "NO CSDb SCENER PROFILE EXISTS — site search returns only the 6 SID release entries, no scener page, no group membership, no other (non-commercial) productions. Consistent with a commercial-only, non-demoscene UK composer, matching the plain (no-group) HVSC entry ('Legg, Stephen - UNITED KINGDOM (ENGLAND)').",
    "A LOW-QUALITY SEARCH-ENGINE ARTIFACT WAS EXPLICITLY CAUGHT AND DISCARDED: a LaunchBox-sourced claim that Time Traveller was co-developed by 'Adam Marlik, Pawel Smolka' looked like a garbled/mismatched auto-summary and directly contradicts the clean, internally-consistent Lemon64 credits (Charlie Robson/Robinson/Beal) — not included as fact.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Legg, Stephen - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — The Fury (full credits, traced file): https://www.lemon64.com/game/fury",
    "Lemon64 — Hellfire (full credits): https://www.lemon64.com/game/hellfire",
    "Lemon64 — Gangster (full credits): https://www.lemon64.com/game/gangster-mindscape",
    "Lemon64 — Time Traveller (full credits): https://www.lemon64.com/game/time-traveller-mindscape",
    "Lemon64 — Steigar (Creator field caveat): https://www.lemon64.com/game/steigar",
    "CSDb sid/?id=17420 (The Fury): https://csdb.dk/sid/?id=17420",
    "CSDb sid/?id=17422 (Hellfire): https://csdb.dk/sid/?id=17422",
    "Local dataset: 6 files tagged Stephen_Legg, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Stephen_Legg` tag is English musician Stephen Legg's playroutine,
used across confirmed credits at three UK publishers (Martech, Screen 7,
Mindscape). On every title with a separately-named programmer, his role
is exclusively music — pointing toward a shared/studio routine rather
than a self-coded one. Player-ID-fingerprinted across 6 files, all his
own (2 co-credited with Danny Marsh).

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **consistent
musician-only role** across 5 of 6 confirmed titles, with one genuinely
unresolved exception (Steigar's ambiguous 'Creator' credit) flagged
rather than smoothed over or guessed at.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Stephen_Legg`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Stephen_Legg` `.sid` (The Fury): load `$6400`, init
`$6400`, play `$6449`, **263 register writes / 50 frames** (26 filter
writes — dense, filter-heavy). Internals undocumented; memory map/format/
effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (5 pages), and CSDb
(2 entries).

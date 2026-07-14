# Andreas Bauernfeind (CCP driver)

```json
{
  "id": "andreas-bauernfeind",
  "name": "Andreas Bauernfeind (CCP driver)",
  "aliases": ["Andreas_Bauernfeind"],
  "authors": ["Andreas Bauernfeind"],
  "released": "1986-1989 (Construction Computer Players era)",
  "status": "in-progress",
  "platform": "German composer-graphic-artist Andreas Bauernfeind, house musician for a small hobbyist team called Construction Computer Players (C.C.P.), alongside coder Marcus Wagner — described by the team's own fan history as 'ALWAYS the number one for the acoustic coloring.' NOT a coder on C64 (his coding talent surfaced later, on Amiga). Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Block'n'Bubble, 1986/87, 64'er magazine): load $9006 (init $92c1, play $925d).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $92c1.", "play": "Sample trace: $925d (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HOUSE MUSICIAN FOR A SMALL HOBBYIST TEAM, CONFIRMED via GamesThatWerent (GTW64) and a dedicated CCP fan-history site: Construction Computer Players (C.C.P.) was a duo/trio of coder Marcus Wagner and graphics-and-music man Andreas Bauernfeind (spelled 'Bauerfeind' in GTW64's own credits — treat as the same person, HVSC's 'Bauernfeind' spelling used as the card's authoritative one). Games traced to the pair: Paratron (1987, graphics only, no sound credited), Jupple Dust (1986, graphics + sound, unfinished — later restored to a playable preview by [[laxity-newplayer]]'s own scener Laxity in 2016), Wizerior 2 (1991, graphics + sound — also debugged/released by Laxity in late 2016), and Block'n'Bubble (1986/87, 64'er magazine, the traced file — 'graphics, music and levels by Andreas Bauernfeind' per a CSDb-indexed snippet).",
    "THE CCP FAN-HISTORY SITE ITSELF DESCRIBES HIM DIRECTLY: 'was ALWAYS the number one for the acoustic coloring' (house musician) and a 'graphic all-rounder,' but explicitly states his true programming skill only emerged LATER, on the AMIGA (Buxom Bull series, Alase, Silent Goblet, Flood Manoeuvres, Tygard, Traffic, Gadget, 'countless pieces of music') — he 'stayed almost entirely out of' coding on the C64. This directly answers the coder-vs-musician question: NOT a coder on C64, confirmed rather than assumed.",
    "A GENUINE PRESERVATION-CREDIT LINK TO [[laxity-newplayer]]'S OWN SCENER exists but is CIRCUMSTANTIAL, not technical: Laxity personally restored/debugged two of Bauernfeind's unfinished C64 games (Jupple Dust, Wizerior 2) in 2016 and cracked a 2026 Block'n'Bubble re-release — this is a preservation/release credit, not a shared player-driver or SIDId link, and is explicitly noted as such rather than overstated into a technical connection.",
    "NO CSDb SCENER PROFILE OR DEMOSCENE GROUP MEMBERSHIP EXISTS for either Bauernfeind or Marcus Wagner — CCP appears to have been a 64'er-magazine hobbyist listing-game duo/trio, not a registered demoscene group, so there's genuinely no CSDb scener page to link, not a research gap.",
    "TWO NAME-COLLISION RISKS EXPLICITLY FLAGGED, NOT INCLUDED AS FACT: (1) name spelling varies across sources — HVSC 'Bauernfeind,' GTW64 'Bauerfeind,' one CSDb snippet 'Bavernfeind' — treated as the same person here, but the variance is real; (2) a same-named 'Andreas Bauernfeind' credited as music composer on the 2026 indie C64 release 'Vault of Seraphim' (Natthrafn) is VERY LIKELY an unrelated contemporary musician coincidentally sharing the name — explicitly NOT conflated with this 1980s CCP composer.",
    "Not confirmed in SIDId (no entry for this tag). Circumstantial preservation-credit link to Laxity (already carded as [[laxity-newplayer]]) noted above, not encoded as a technical edge. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Bauernfeind, Andreas - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "GamesThatWerent — Paratron: http://www.gamesthatwerent.com/gtw64/paratron/",
    "GamesThatWerent — Jupple Dust: http://www.gamesthatwerent.com/gtw64/jupple-dust/",
    "GamesThatWerent — Wizerior 2: https://www.gamesthatwerent.com/gtw64/wizerior-2/",
    "CCP fan-history site (biography, 'acoustic coloring' quote, Amiga career): https://sites.google.com/site/ccpcommodore64/ccpinfo",
    "CSDb release id=261540 (Block'n'Bubble +4DT, 2026 Laxity re-release): https://csdb.dk/release/?id=261540",
    "Existing KB card: knowledge/players/laxity-newplayer.md (the preservation-credit connection noted above)",
    "Local dataset: 3 files tagged Andreas_Bauernfeind, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Andreas_Bauernfeind` tag is German composer Andreas Bauernfeind's
work as house musician for hobbyist team Construction Computer Players
(C.C.P.), alongside coder Marcus Wagner — confirmed not to have coded on
C64 himself, though his programming skill later emerged on Amiga. Player-
ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **direct
first-party-adjacent confirmation** (a dedicated CCP fan-history site)
that he was music/graphics only on C64, not a coder — a clean, sourced
answer rather than an inference. Also notable: a real **preservation-
credit link** to already-carded [[laxity-newplayer]], explicitly kept
circumstantial rather than overstated into a technical connection.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Andreas_Bauernfeind`-
tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Andreas_Bauernfeind` `.sid` (Block'n'Bubble): load
`$9006`, init `$92c1`, play `$925d`, **36 register writes / 50 frames**
(0 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, GamesThatWerent (3 pages),
the CCP fan-history site, CSDb, and the related laxity-newplayer card.

# Neil Bate (Elite Systems driver)

```json
{
  "id": "neil-bate",
  "name": "Neil Bate (Elite Systems driver)",
  "aliases": ["Neil_Bate"],
  "authors": ["Neil A. Bate"],
  "released": "1985 (Elite Systems)",
  "status": "in-progress",
  "platform": "English programmer Neil A. Bate's own C64 driver, built at Elite Systems — CONFIRMED as the pre-Bomb-Jack driver already-carded [[mark-cooksey]] 'learned on... arranging only, 434 Hz' before writing his own tool. Not a data mismatch: the driver name travels with Cooksey across games regardless of who coded them, matching the pattern already established in this KB for driver tags vs. composer credits. Player-ID-fingerprinted across 3 files, all composed by Mark Cooksey.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (911 Tiger Shark, 1985, composed by Mark Cooksey): load $e950 (init $fc00, play $fc10).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $fc00.", "play": "Sample trace: $fc10 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a sparse 38-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED: Neil A. Bate was Elite Systems' '6502 programmer' during the mid-1980s (VGMPF), credited on 5 titles per Lemon64's own list: Kokotoni Wilf (1984), The Fall Guy (1984), Airwolf (1985), Frank Bruno's Boxing (1985), and Paperboy (1986).",
    "THIS IS THE EXACT PRE-BOMB-JACK PHASE ALREADY FLAGGED IN [[mark-cooksey]]'S OWN CARD, sourced from VGMPF: Cooksey '(1) learned on Neil Bate's driver (1985, arranging only, 434 Hz); (2) his FIRST own driver debuted ~Bomb Jack.' This card is the concrete file-level evidence of exactly that transition — [[mark-cooksey]]'s own card has been updated in this same batch to cross-reference it.",
    "TWO OF THE THREE FILES UNDER THIS TAG WERE CODED BY BATE HIMSELF: Airwolf (1985 — coder Neil A. Bate, graphics Chris Harvey, music Mark Cooksey, described by VGMPF/c64-wiki as Cooksey's professional debut, arranging the Airwolf theme on Bate's own driver as an Elite job-interview task) and Frank Bruno's Boxing (1985 — same coder/graphics/music team). This makes the driver credit unambiguous for these two.",
    "THE THIRD FILE, '911 Tiger Shark' (1985, the traced file), WAS ACTUALLY CODED BY CHRIS HARVEY, NOT BATE — confirmed via Lemon64's own credits — yet is still tagged with Bate's driver. This is NOT a contradiction: it shows the driver traveling WITH Cooksey across whichever game he scored that year, independent of who wrote the game's code, matching the same pattern already established in this KB for [[rene-romijn]] and [[gavin-graham]] (a tag naming a driver/toolchain rather than the credited composer) — but UNLIKE Rene_Romijn, this one is FULLY RESOLVED: Neil Bate is a real, identifiable Elite Systems programmer, corroborated by three independent sources (VGMPF, Lemon64, C64-Wiki), and SIDId's own author field for this exact tag ('Neil Bate') lines up perfectly.",
    "NO DOCUMENTED NAME FOR THE DRIVER ITSELF, no CSDb scener profile for Bate, and no disassembly exist anywhere checked — only the 'Elite's 6502 programmer, 434 Hz tuning' facts above are sourced. Internals genuinely unknown, not just unresearched.",
    "Not confirmed in SIDId beyond the author-name match already noted (no name field). Direct, confirmed relationship to [[mark-cooksey]] as the pre-existing driver he learned on — cross-referenced in both directions. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "Lemon64 — Neil A. Bate game list (5 titles): https://www.lemon64.com/games/list.php?list_individual=neil-a-bate",
    "C64-Wiki — Airwolf (credits Neil A. Bate as developer/programmer): https://www.c64-wiki.com/wiki/Airwolf",
    "Lemon64 — Frank Bruno's Boxing (Coder: Neil A. Bate; Musician/SFX: Mark Cooksey): https://www.lemon64.com/game/frank-brunos-boxing",
    "Lemon64 — 911 Tiger Shark (Coder: Chris Harvey, not Bate; Musician: Mark Cooksey): https://www.lemon64.com/games/details.php?ID=33",
    "VGMPF — Mark Cooksey (source of the 'Neil Bate's driver, 434 Hz' claim): https://www.vgmpf.com/Wiki/index.php/Mark_Cooksey",
    "Existing KB card: knowledge/players/mark-cooksey.md (the composer this driver was learned by, updated in this same batch)",
    "Local dataset: 3 files tagged Neil_Bate, 1 composer (Mark Cooksey) (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Neil_Bate` tag is English programmer Neil A. Bate's own driver, built
at Elite Systems — confirmed as the exact pre-Bomb-Jack tool already-
carded [[mark-cooksey]] learned to arrange on before writing his own
routine. Player-ID-fingerprinted across 3 files, all composed by Mark
Cooksey (2 of which Bate himself also coded).

## Quirks & gotchas

See the `quirks` array — the load-bearing one is that this **fully
resolves** an open thread already flagged in [[mark-cooksey]]'s own card:
a real, cross-sourced Elite Systems programmer whose driver Cooksey used
before developing his own, now given a proper card and cross-referenced
back.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Neil_Bate`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Neil_Bate` `.sid` (911 Tiger Shark): load `$e950`,
init `$fc00`, play `$fc10`, **38 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — Lemon64 (4 pages), C64-Wiki, VGMPF, and the
related mark-cooksey card.

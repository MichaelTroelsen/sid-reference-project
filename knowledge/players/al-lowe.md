# Al Lowe (Sierra Disney driver)

```json
{
  "id": "al-lowe",
  "name": "Al Lowe (Sierra Disney driver)",
  "aliases": ["Al_Lowe"],
  "authors": ["Al Lowe"],
  "released": "1984 (Sierra On-Line)",
  "status": "in-progress",
  "platform": "CONFIRMED to be the SAME Al Lowe who later created the Leisure Suit Larry series at Sierra On-Line — VGMPF's own composer-credit pages for two of these titles cite 'verification from composer' (i.e. directly confirmed with Lowe himself, since none of these 1984 Disney-licensed educational games shipped with in-game credits). A self-taught programmer (former public-school music teacher) who wrote his own bespoke SID driver for these three titles before becoming a designer. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Donald Duck's Playground, 1984, Sierra On-Line): load $c000 (init $c751, play $c75e).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $c751.", "play": "Sample trace: $c75e (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED WITH HIGH CONFIDENCE — a rare case of the strongest possible sourcing in this KB: VGMPF's composer-credit pages for 'Donald Duck's Playground' and 'Mickey's Space Adventure' explicitly cite their source as 'verification from composer; game lacks credits' — meaning VGMPF directly confirmed the credit WITH Al Lowe himself, since none of these three 1984 Sierra titles shipped with any in-game credits at all.",
    "ALL THREE TITLES ARE 1984 SIERRA ON-LINE DISNEY-LICENSED EDUCATIONAL GAMES, all originally written for the C64: Donald Duck's Playground (the traced file), Mickey's Space Adventure, and Winnie the Pooh in the Hundred Acre Wood. On 'Winnie the Pooh' specifically, VGMPF credits THREE composers via the same 'verification from composer' sourcing — Al Lowe plus Robert B. and Richard M. Sherman (the famous Disney songwriting duo) — coherently explained as Lowe doing the SID arrangement/programming of the Sherman Brothers' own pre-existing Pooh songs, not a contradiction. An earlier, lower-quality search summary oversimplified this to 'the composer was Richard M. Sherman' alone — explicitly discarded in favor of VGMPF's actual three-way credit.",
    "CONFIRMED BOTH CODER AND MUSICIAN, and specifically a SELF-TAUGHT ONE: per Lowe's own biography (allowe.com, Wikipedia), he taught public-school music for 15 years, self-taught programming, and sold Sierra his early educational games in 1982-83, becoming a Sierra 'jack of all trades' — credited as composer on King's Quest II and Space Quest II, and lead programmer on King's Quest III and Police Quest I, before creating Leisure Suit Larry. A secondary-sourced Hardcore Gaming 101 interview quote has him saying he wrote the C64 music himself 'very quickly because they had no budget for another person to do it,' hand-transcribing it in assembly into his own SID driver.",
    "THE TRACE PROFILE IS CONSISTENT WITH A BESPOKE, ONE-OFF DRIVER, not a widely-reused engine: MobyGames credits (relayed via Sierra Gamers, MobyGames itself 403'd on direct fetch) list Lowe with MULTIPLE roles across these titles (Design, Programming/Engineering, Audio) — a self-taught programmer's own hand-rolled routine for exactly these three games, matching the total absence of a SIDId entry for this tag (no widely-catalogued/reused player routine exists to index).",
    "NO CSDb SCENER PROFILE EXISTS — expected and unremarkable: a purely US commercial-studio composer/programmer, never part of the European demoscene.",
    "IMPORTANT: NOT to be confused with the already-carded, unrelated [[dave-lowe]] — different first name, different person, adjacent alphabetically in HVSC's own Musicians.txt (the very next line after 'Lowe, Al - USA' is 'Lowe, Dave (Uncle Art) - UNITED KINGDOM (ENGLAND)').",
    "Not confirmed in SIDId (no entry for this tag). No documented connection found to [[ed-bogas-accolade]]/[[ed-bogas-hakansson]] or any other commercial-studio/educational-software composer already in this KB, despite the adjacent era and genre — checked directly and explicitly, none found. No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Lowe, Al - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "VGMPF — Donald Duck's Playground (composer credit, 'verification from composer'): https://www.vgmpf.com/Wiki/index.php?title=Donald_Duck%27s_Playground",
    "VGMPF — Mickey's Space Adventure (C64) (composer credit): https://www.vgmpf.com/Wiki/index.php?title=Mickey%27s_Space_Adventure_(C64)",
    "VGMPF — Winnie the Pooh in the Hundred Acre Wood (C64) (three-way composer credit): https://vgmpf.com/Wiki/index.php?title=Winnie_the_Pooh_in_the_Hundred_Acre_Wood_(C64)",
    "Wikipedia — Al Lowe: https://en.wikipedia.org/wiki/Al_Lowe",
    "Al Lowe's own bio site: https://allowe.com/al/bio2.html",
    "Wikipedia — Donald Duck's Playground: https://en.wikipedia.org/wiki/Donald_Duck's_Playground",
    "Lemon64 — Donald Duck's Playground; Mickey's Space Adventure; Winnie the Pooh: https://www.lemon64.com/game/donald-ducks-playground",
    "Local dataset: 3 files tagged Al_Lowe, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Al_Lowe` tag is confirmed, via VGMPF's own 'verification from
composer' sourcing, to be Al Lowe — the future creator of Leisure Suit
Larry — scoring three 1984 Sierra On-Line Disney-licensed educational
C64 games on his own bespoke, self-taught driver. Player-ID-
fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **rare, strongest-
possible-tier sourcing**: VGMPF didn't infer this credit from a database,
it verified it directly with Al Lowe himself, since none of these
uncredited-in-game titles left any other trail. Also notable: a genuine,
first-person account of writing the music himself under a tight budget,
before his design career took off.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Al_Lowe`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Al_Lowe` `.sid` (Donald Duck's Playground): load
`$c000`, init `$c751`, play `$c75e`, **35 register writes / 50 frames**
(0 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF (3 pages), Wikipedia
(2 pages), Al Lowe's own site, and Lemon64.

# Magic Man / Stephan Schloepke (Mamba diskmag driver)

```json
{
  "id": "magic-man",
  "name": "Magic Man / Stephan Schloepke (Mamba diskmag driver)",
  "aliases": ["Magic_Man/Crazy"],
  "authors": ["Stephan Schloepke ('Magic Man')"],
  "released": "1989-1992 (Crazy, diskmag \"Mamba\")",
  "status": "in-progress",
  "platform": "German demoscener Stephan Schloepke's ('Magic Man,' group Crazy) own hand-coded playroutine — CONFIRMED via HVSC's own parenthetical notation and independently corroborated by his CSDb profile. Used within 'Mamba,' one of the most popular C64 disk magazines of its era (released via the commercial diskmag 'Game On'), which Schloepke himself coded. Player-ID-fingerprinted across 2 files, both his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Mamba issue 15, composed by Magic Man): load $1000 (init $1000, play $1003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 48 filter writes in a very dense 345-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED DIRECTLY: HVSC's own entry reads 'Magic Man (Schloepke, Stephan) / Crazy - GERMANY' — matching the SIDId author field exactly. CSDb scener profile (Magic Man/MgM, id=702) independently corroborates: German scener, active 1988-2014ish, roles Coder, Cracker, Logo Graphician, Musician, Swapper.",
    "GROUP 'CRAZY' CONFIRMED, MATCHES THE TAG SUFFIX EXACTLY: CSDb group Crazy (Switzerland, id=353), founded by Martin & Stingray 6 December 1988, dissolved March 1991, a Demo/Cracker/Magazine-Staff/Import/Fixing group with 483 total releases. Schloepke's membership there ran 20 May 1989 through March 1991 — precisely the group the '/Crazy' tag suffix refers to. His being German while the group was Swiss-based/international is unremarkable for this era's scene groups.",
    "'MAMBA' CONFIRMED, EXPLAINS BOTH FILE TITLES: both Crazy's own CSDb profile and Magic Man's individual credits name him as 'programmer... of the disc-magazine Mamba,' issues #01-#25 credited to his coding/music work 1989-1992 — one of the most popular C64 diskmags of its era, released regularly via the commercial diskmag 'Game On' (the same German disk-magazine ecosystem already appearing on several other cards in this KB, e.g. [[twice-effect-editor]], [[audio-effect-editor]], [[mega-player]]). Both traced files ('Mamba issue 15,' 'Mamba Tune plus Digi') are music embedded in/for this diskmag, consistent with the dense, hand-rolled 345-write/50-frame trace — a personal in-diskmag routine, not a general-purpose distributed tracker. A minor UNCONFIRMED nuance: sources aren't fully consistent on whether Magic Man alone coded the Mamba engine, or whether it was a joint effort also crediting handles 'Ikari' and 'Talent/Enigma' — treat him as the primary coder, not necessarily sole author.",
    "CONFIRMED BOTH CODER AND MUSICIAN: CSDb explicitly lists Coder/Cracker among his roles, with a specific coding credit on the demo 'That's Design' (Crazy, 1990) in addition to the Mamba diskmag itself — directly supporting the working theory that this tag is his own hand-coded personal player routine embedded in his diskmag work, not a general tracker.",
    "GROUP HISTORY BEYOND CRAZY IS NOTED BUT NOT FULLY ENUMERATED: his CSDb profile mentions he also joined Enigma (from May 1991) plus 'seven additional groups spanning 1988-1997' — the full ~9-group roster was NOT independently verified in this research pass, flagged as an area for future follow-up rather than asserted complete.",
    "A NAME-COLLISION CHECK WAS EXPLICITLY PERFORMED against this KB's own roster: 'Crazy'/'Mamba'/'Magic Man'/'Schloepke' surfaced only THREE coincidental hits already flagged as unrelated in their own cards ([[steve-bak]]'s unrelated game 'Crazy Painter,' [[synth-executor]] and [[frank-hammer]]'s unrelated track titled 'Crazy Balls' on a different composer's compilation) — none are genuine connections.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB beyond the checked-and-ruled-out coincidental hits above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Magic Man (Schloepke, Stephan) / Crazy - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener id=702 (Magic Man/MgM, full role/group history): https://csdb.dk/scener/?id=702",
    "CSDb group id=353 (Crazy, Switzerland, founding history, member roster): https://csdb.dk/group/?id=353",
    "Existing KB card: knowledge/players/steve-bak.md (unrelated coincidental 'Crazy Painter' name hit, already flagged there)",
    "Existing KB card: knowledge/players/synth-executor.md, knowledge/players/frank-hammer.md (unrelated coincidental 'Crazy Balls' track hits)",
    "Local dataset: 2 files tagged Magic_Man/Crazy, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Magic_Man/Crazy` tag is German demoscener Stephan Schloepke's own
hand-coded playroutine, confirmed via HVSC's own parenthetical
notation — used within 'Mamba,' one of the most popular C64 disk
magazines of its era, which he himself coded. Player-ID-fingerprinted
across 2 files, both his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **directly
confirmed identity and group affiliation** via HVSC's own real-name
notation, independently corroborated by CSDb. Also notable: an
**explicit name-collision check** against this KB's own roster,
finding only coincidental, already-flagged hits — no genuine
connections.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Magic_Man/Crazy`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Magic_Man/Crazy` `.sid` (Mamba issue 15): load
`$1000`, init `$1000`, play `$1003`, **345 register writes / 50 frames**
(48 filter writes — very dense, filter-heavy). Internals undocumented;
memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 entries), and 3
related KB cards.

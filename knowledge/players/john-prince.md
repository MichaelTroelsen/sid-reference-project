# John Prince (player routine)

```json
{
  "id": "john-prince",
  "name": "John Prince (player routine)",
  "aliases": ["John_Prince"],
  "authors": ["John Prince"],
  "released": "1984-1986 (Artic Computing / US Gold era)",
  "status": "in-progress",
  "platform": "English coder-composer John Prince's own playroutine — a confirmed programmer who also did his own in-game music across at least 4 UK commercial titles (Artic Computing, Tynesoft, Virgin Games, US Gold). He went on to co-found Tiertex Design Studios, a prolific Manchester arcade-conversion house, with fellow ex-Artic Computing developer Donald Campbell in 1987. Player-ID-fingerprinted across 4 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (FA Cup Football, 1986, Virgin Games): load $1c00 (init $1e80, play $1e47).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1e80.", "play": "Sample trace: $1e47 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a very sparse 6-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO METADATA AT ALL for this composer — a bare 'Prince, John' entry, confirmed via direct grep of the raw file (not a fetch error); unlike a neighboring, unrelated 'Prince (Zygowski, Maciej) / Vaudeville - POLAND' entry, which is a different person. No CSDb scener profile exists either.",
    "FOUR CONFIRMED GAME CREDITS, all as coder-composer or musician: FA Cup Football (1986, Virgin Games, the traced file — developer credited as 'Kerian UK'), Mutant Monty (1984, Artic Computing — credited as creator/musician, implying he coded it too), Super Gran (1985, Tynesoft — programmer Michael Woodroffe, musician John Prince, a licensed UK children's TV tie-in), and World Cup Carnival: Mexico '86 (1985, US Gold, © Sport-Billy Productions — credited as BOTH coder AND musician). The trace profile (a very sparse 6 register writes/50 frames, no filter) is consistent with a minimal, programmer-written routine rather than a dedicated specialist composer's player.",
    "'MUTANT MONTY' HAS NO CONFIRMED CONNECTION TO GREMLIN GRAPHICS' 'MONTY MOLE' SERIES — explicitly investigated and ruled out: Mutant Monty was published by Artic Computing (also ported to CPC/Spectrum via Amsoft/Artic), an entirely separate company from Gremlin Graphics (publisher of 'Wanted: Monty Mole,' coded/composed by [[antony-crowther]]). No source ties the two titles, companies, or people together — the shared 'Monty' name appears to be pure coincidence, a common mole/character-naming trend in early-80s UK platformers.",
    "CO-FOUNDED TIERTEX DESIGN STUDIOS (Manchester) with Donald Campbell in 1987, per Wikipedia and the German C64-Wiki — Tiertex became a prolific US Gold-contracted arcade-conversion house (720°, Thunder Blade, Indiana Jones and the Last Crusade, later Disney/THQ licensed titles). Donald Campbell's own C64-Wiki bio states he ALSO worked at Artic Computing, and made a 'World Cup' game there in 1984 — plausibly a predecessor to Prince's own 'World Cup Carnival'/'World Cup 2' for US Gold the following years, though direct collaboration on those specific titles is UNCONFIRMED, not stated outright by any source. Campbell is not currently carded in this KB but is flagged here as a strong future-card candidate given this direct, sourced link.",
    "GAME-CREDIT WORDING SHOULD BE TREATED AS MODERATE CONFIDENCE, EXPLICITLY FLAGGED BY THE RESEARCH ITSELF: the four credit lists above were extracted from Lemon64 pages via automated fetching, not a manual spot-check — the composer/coder attribution itself is consistent across all four independently-fetched pages (high confidence), but exact wording of secondary credits (programmer names, publisher details) carries lower confidence and would benefit from a manual verification pass in a future session.",
    "No interviews or first-person material found. Not confirmed in SIDId (no entry for this tag). No known relationship found to [[antony-crowther]] (explicitly ruled out above) or any other composer/tool already in this KB — a strong, sourced link exists to Donald Campbell (not yet carded), noted above for future reference (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin — none beyond Campbell found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Prince, John', bare entry): https://hvsc.sannic.nl/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — FA Cup Football (traced file): https://www.lemon64.com/game/fa-cup-football",
    "Lemon64 — Mutant Monty: https://www.lemon64.com/game/mutant-monty",
    "Lemon64 — Super Gran: https://www.lemon64.com/game/super-gran",
    "Lemon64 — World Cup Carnival: Mexico '86: https://www.lemon64.com/game/world-cup-carnival-mexico-86",
    "Wikipedia — Tiertex Design Studios (co-founding with Donald Campbell, 1987): https://en.wikipedia.org/wiki/Tiertex_Design_Studios",
    "C64-Wiki (DE) — Donald Campbell (Artic Computing background, World Cup 1984): https://www.c64-wiki.de/wiki/Donald_Campbell",
    "Existing KB card: knowledge/players/antony-crowther.md (the Monty Mole connection explicitly ruled out)",
    "Local dataset: 4 files tagged John_Prince, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `John_Prince` tag is English coder-composer John Prince's own
playroutine — a confirmed programmer who also scored at least 4 UK
commercial titles (Artic Computing, Tynesoft, Virgin Games, US Gold),
before co-founding Tiertex Design Studios, a prolific Manchester
arcade-conversion house, in 1987. Player-ID-fingerprinted across 4 files,
all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **ruled-out Monty Mole
connection**, investigated and explicitly dismissed rather than assumed
from the shared name; and a **genuine, sourced link to Donald Campbell**
(Tiertex co-founder, shared Artic Computing background) — a strong future
card candidate flagged for a later session.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `John_Prince`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `John_Prince` `.sid` (FA Cup Football): load `$1c00`,
init `$1e80`, play `$1e47`, **6 register writes / 50 frames** (0 filter
writes — very sparse). Internals undocumented; memory map/format/effects
are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (4 pages),
Wikipedia, C64-Wiki (DE), and the related antony-crowther card.

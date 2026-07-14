# Kyle Johnson (Incredible Technologies / DDTSS user)

```json
{
  "id": "kyle-johnson",
  "name": "Kyle Johnson (Incredible Technologies / DDTSS user)",
  "aliases": ["Kyle_Johnson"],
  "authors": ["Kyle Johnson"],
  "released": "1987-1990 (Incredible Technologies era)",
  "status": "in-progress",
  "platform": "American composer-programmer Kyle Johnson, of Incredible Technologies (Illinois) — CONFIRMED, per VGMPF, to have used [[david-thiel]]'s already-carded DDTSS driver for his own C64 scoring work, a direct technical reuse link between two composers already in this KB. Also credited as both coder and musician on at least one title. Player-ID-fingerprinted across 4 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (DuckTales: The Quest for Gold, 1990, Disney/Titus): load $11e8 (init $2f00, play $c0f7).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $2f00.", "play": "Sample trace: $c0f7 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 1 filter write in a dense 95-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "A DIRECT, SOURCED TECHNICAL LINK TO AN ALREADY-CARDED KB COMPOSER: VGMPF states his C64 work used 'the DDTSS driver, designed by David Thiel' — i.e. Johnson didn't build his own routine, he used [[david-thiel]]'s already-carded 'David Dwyer Thiel Sound System.' This is a genuine, sourced case of a driver being reused by a SECOND composer at the same studio (Incredible Technologies), not merely an inference from shared employer — [[david-thiel]]'s own card has been updated in this same batch with this cross-reference.",
    "THE TWO COMPOSERS ALSO SHIPPED A TITLE TOGETHER, directly corroborating the driver-reuse finding: 'The Three Stooges' (Cinemaware, 1987/88) lists David Thiel as a programmer and Kyle Johnson as musician on the same C64 release, per Lemon64's own credits — a real, credited collaboration, not just a shared-employer coincidence.",
    "FOUR CONFIRMED GAME CREDITS, all Incredible Technologies productions: DuckTales: The Quest for Gold (1990, Walt Disney Computer Software/Titus in Europe — the traced file; Lemon64's own C64 credits list music as 'Kyle Johnson, Leif Marwede,' though Wikipedia's infobox instead lists 'Kyle Johnson, David Thiel' — an UNRESOLVED conflict between two sourced credit lists, possibly a per-platform-version difference, not smoothed over), Grave Yardage (1990, Activision — music/sound: Kyle Johnson solo), Snow Strike (1990 — CREDITED AS BOTH PROGRAMMER AND MUSICIAN, directly confirming he was a coder too, not just a composer-for-hire), and The Three Stooges (see above).",
    "AN EARLIER SEARCH SUMMARY CLAIMING 'SWEDEN' AS HIS HVSC COUNTRY WAS EXPLICITLY CAUGHT AND DISCARDED as a misread of a nearby, unrelated HVSC line ('Joker... SWEDEN') — HVSC's actual entry for 'Johnson, Kyle' carries NO country field at all, confirmed via direct grep of the downloaded file. His American/Illinois affiliation is inferred circumstantially from Incredible Technologies' location, not an HVSC fact.",
    "PER VGMPF (single-sourced, later-career items not independently cross-checked, flagged accordingly): worked primarily at Incredible Technologies, part of a group called 'Byte Size Sound,' began at Westwood Studios on Apple IIgs titles, aliases 'IT'/'KLJ'. Later credits include Street Fighter: The Movie (arcade), the Golden Tee series, various pinball titles (South Park), and some Sims 2/Escape Goat 2 guitar work — treated as probable but not independently verified beyond VGMPF.",
    "NO CSDb SCENER PROFILE EXISTS — consistent with a purely US commercial-studio composer with zero demoscene footprint, the same absence pattern already established for [[david-thiel]] and several other purely-commercial composers in this KB.",
    "Not confirmed in SIDId (no entry for this tag). Direct, sourced relationship to [[david-thiel]] noted above (driver reuse plus a shared game credit). No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Johnson, Kyle', bare entry, no country): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "VGMPF — Kyle Johnson (biography, DDTSS driver confirmation): https://www.vgmpf.com/Wiki/index.php/Kyle_Johnson",
    "VGMPF — David Thiel (DDTSS driver page): https://www.vgmpf.com/Wiki/index.php?title=David_Thiel",
    "Lemon64 — DuckTales: The Quest for Gold (traced file, full credits): https://www.lemon64.com/game/duck-tales",
    "Wikipedia — DuckTales: The Quest for Gold (conflicting Kyle Johnson/David Thiel composer credit): https://en.wikipedia.org/wiki/DuckTales:_The_Quest_for_Gold",
    "Lemon64 — Grave Yardage: https://www.lemon64.com/game/grave-yardage",
    "Lemon64 — Snow Strike (coder AND musician credit): https://www.lemon64.com/game/snow-strike",
    "Lemon64 — The Three Stooges (shared credit with David Thiel): https://www.lemon64.com/game/three-stooges",
    "Existing KB card: knowledge/players/david-thiel.md (the driver this composer used, updated in this same batch)",
    "Local dataset: 4 files tagged Kyle_Johnson, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Kyle_Johnson` tag is American composer-programmer Kyle Johnson's C64
work at Incredible Technologies — CONFIRMED to run on [[david-thiel]]'s
already-carded DDTSS driver, a genuine, sourced case of driver reuse
between two composers now both in this KB, corroborated by a shared game
credit on 'The Three Stooges.' Player-ID-fingerprinted across 4 files,
all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed driver
reuse**: a rare case in this KB where one composer is directly documented
using another already-carded composer's own driver, not just working at
the same studio. Also notable: an **honestly-preserved credit conflict**
on DuckTales' second composer (Leif Marwede vs. David Thiel across two
sources), left unresolved rather than silently picking one.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Kyle_Johnson`-tagged `.sid`
+ trace — which could directly confirm or refute the DDTSS driver-reuse
claim at the code level.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Kyle_Johnson` `.sid` (DuckTales: The Quest for Gold):
load `$11e8`, init `$2f00`, play `$c0f7`, **95 register writes / 50
frames** (1 filter write). Internals undocumented; memory map/format/
effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF (2 pages), Lemon64
(4 pages), Wikipedia, and the related david-thiel card.

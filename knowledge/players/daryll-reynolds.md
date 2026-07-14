# Daryll Reynolds / Gameworx (player routine)

```json
{
  "id": "daryll-reynolds",
  "name": "Daryll Reynolds / Gameworx (player routine)",
  "aliases": ["Daryll_Reynolds"],
  "authors": ["Daryll Reynolds"],
  "released": "1984-1985 (Gameworx Software / SoftGold era)",
  "status": "in-progress",
  "platform": "Australian (Melbourne, Victoria) solo, self-taught composer-coder Daryll Reynolds's own playroutine — he ran a cottage-industry game business from home, trading as Gameworx Software and later SoftGold, with local distribution via DotSoft (department stores) and UK/European distribution through Severn Software. Confirmed both coder and musician across his catalog. Player-ID-fingerprinted across 4 files, all his own (2 of which are self-installing RSID files this project's tracer could not resolve).",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Nuclear War Games, 1984, Gameworx/Softgold — used since 'Alien.sid' and 'Skull_Island.sid' are both untraceable RSID files): load $c000 (init $c000, play $c149).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $c000.", "play": "Sample trace: $c149 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED SOLO COTTAGE-INDUSTRY DEVELOPER: HVSC lists 'Reynolds, Daryll - AUSTRALIA' with no group field. He ran a home-based game business trading as 'Gameworx Software' and later 'SoftGold,' distributed locally in Australia via DotSoft (sold through Coles/Woolworths/Myers department stores) and internationally through the UK's Severn Software.",
    "FOUR CONFIRMED TITLES: 'Nuclear War Games' (1984, the traced file — based on the film WarGames), 'The Search for King Solomon's Mines' (marketed as 'Part 1' with no sequel produced; UNCONFIRMED whether tied to the H. Rider Haggard literary property beyond the title, dates conflict across sources at 1984 vs 1986), 'Skull Island' (1985 — Reynolds reportedly hand-modified the C64's font-set for the game's stone-carved logo look, a nice small technical/artistic detail), and 'Alien.' Other, non-HVSC-tagged titles per an Australian games-heritage research project ('Play It Again,' affiliated with ACMI) include The Secret of Bastow Manor, The Case of the Mad Mummy, Ninja, Murder on the Waterfront, Castle of Mydor, Dark Planet, Himalayan Odyssey, Lost City, Mystery Island, Oasis of Shalimar — ported across VIC-20, C64, Sega SC-3000, Amiga, MSX, and Amstrad.",
    "CONFIRMED BOTH CODER AND MUSICIAN, primarily known for coding/graphics rather than music specifically: a Lemon64 forum post praises him as 'a genius where c64 character graphics were concerned' — his own solo-shop output (code, graphics, music together) is consistent with the one-man-band pattern already seen on several other cards in this KB, though the specific praise found centers on his visual work, not his composing.",
    "NO CSDb SCENER PROFILE EXISTS — consistent with operating entirely within Australia's small-scale commercial market (Gameworx/SoftGold/DotSoft/Severn Software), outside any demoscene or cracking-group ecosystem.",
    "TWO BIOGRAPHICAL (NOT DIRECTLY-QUOTED) PROFILES were found via the 'Play It Again' Australasian games-history project (ourdigitalheritage.org and a mirrored playitagainproject.com page): Melbourne-based, self-taught, started on a TRS-80 then VIC-20 before C64, sold hint solutions by mail for a dollar. These read as third-person research summaries rather than a verbatim interview — no direct quote transcript was located.",
    "A MINOR SPELLING INCONSISTENCY was found and resolved, not treated as a different person: sources render his first name as both 'Daryll' (this project's tag/HVSC) and 'Darryl' (the Play It Again project's own pages) — confirmed the same person by matching games and company names across both spellings.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — his entire documented career is Australia's small-scale 1980s commercial software market, with zero overlap found against the UK/US/European composers already carded here (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Reynolds, Daryll - AUSTRALIA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Nuclear War Games (full credits, traced file): https://www.lemon64.com/game/nuclear-war-games",
    "Lemon64 — The Search for King Solomon's Mines: https://www.lemon64.com/game/search-for-king-solomons-mines",
    "Lemon64 — Skull Island: https://www.lemon64.com/game/skull-island",
    "Lemon64 forum — praise for his C64 character-graphics skill: https://www.lemon64.com/forum/viewtopic.php?t=22112",
    "Play It Again project — Daryll (Darryl) Reynolds biography: https://ourdigitalheritage.org/hostedArchives/playitagain/creators/darryl-reynolds/index.html",
    "Play It Again project (mirror): https://playitagainproject.com/darryl-reynolds/",
    "Local dataset: 4 files tagged Daryll_Reynolds, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Daryll_Reynolds` tag is Australian solo developer Daryll Reynolds's
own playroutine — a self-taught, home-run cottage-industry game business
(Gameworx Software/SoftGold) distributed via DotSoft in Australia and
Severn Software in the UK. Confirmed both coder and musician. Player-ID-
fingerprinted across 4 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **well-documented
Australian cottage-industry profile**, sourced via a dedicated
games-heritage research project (Play It Again/ACMI) rather than the
usual Lemon64/CSDb combination — a useful, less-common source type for
this KB. Also notable: 2 of his 4 tagged files are self-installing RSID
files this project's tracer could not resolve.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Daryll_Reynolds`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Daryll_Reynolds` `.sid` (Nuclear War Games): load
`$c000`, init `$c000`, play `$c149`, **24 register writes / 50 frames**
(0 filter writes). Internals undocumented; memory map/format/effects are
`TODO`. Note: 2 other files in his own folder ('Alien.sid', 'Skull_
Island.sid') are self-installing RSIDs untraceable with this project's
standard tool.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (4 pages), and the
Play It Again project (2 pages).

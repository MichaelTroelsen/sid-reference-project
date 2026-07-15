# Tom Snyder (Tom Snyder Productions driver)

```json
{
  "id": "tom-snyder",
  "name": "Tom Snyder (Tom Snyder Productions driver)",
  "aliases": ["Tom_Snyder"],
  "authors": ["Thomas F. F. Snyder"],
  "released": "1984-1986 (Tom Snyder Productions / Windham Classics)",
  "status": "in-progress",
  "platform": "CONFIRMED, with high confidence, to be Thomas F. F. Snyder — the actual FOUNDER of Tom Snyder Productions (TSP), an American educational-software company — composing music for his own company's games rather than a coincidentally-named different person. A former teacher, not the C64 programmer on any of his titles (Leonard Bertoni handled all 3 conversions). Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Agent USA, 1984, Scholastic Wizware/TSP): load $3a00 (init $3f68, play $3a15).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $3f68.", "play": "Sample trace: $3a15 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "FOUNDER-VS-COMPOSER IDENTITY RESOLVED WITH HIGH CONFIDENCE, though via name-and-role matching rather than one single source stating both facts jointly: the distinctive full name 'Thomas F.F. Snyder,' credited as composer on all three traced titles (per Lemon64/MobyGames), matches EXACTLY the well-documented founder biography of Tom Snyder Productions — a Shady Hill School teacher and Swarthmore graduate who founded 'Computer Learning Connection' in 1980, renamed Tom Snyder Productions in 1983. MobyGames' own person page (id 14930, 'Thomas F. F. Snyder') independently describes him as 'composer, rock musician, and teacher.' No contradicting source suggesting two different people was found in this research.",
    "THREE CONFIRMED GAME CREDITS, all TSP-family titles: Agent USA (1984, Scholastic Wizware/Tom Snyder Productions — 'written by Tom Snyder and Omar Khudari,' C64 version developed by Leonard Bertoni, 'music by Tom Snyder,' the traced file), The Halley Project (1985/86, Mindscape — Lemon64 explicitly credits 'Composer: Thomas F.F. Snyder,' 'Programmer: Leonard Bertoni'; design credited to Snyder and Omar Khudari), and Swiss Family Robinson (1984, Windham Classics — a TSP imprint — Lemon64 explicitly states 'Music/Sound: Thomas F.F. Snyder composed the music,' design by David Dockterman, Gabrielle Savage, and Thomas F.F. Snyder himself, C64 conversion again by Leonard Bertoni).",
    "NOT THE C64 PROGRAMMER ON ANY TITLE — Leonard Bertoni handled ALL THREE C64 conversions/coding credits. Snyder's own role was consistently design/writing + music composition, matching the 'non-technical founder' pattern rather than the coder-composer pattern already seen on several other cards in this KB (e.g. [[al-lowe]], who WAS both coder and composer).",
    "SAME OVERALL PATTERN AS [[al-lowe]] IN THIS KB, a self-taught teacher-turned-industry-figure composing his own company's/employer's game music — Al Lowe's own card notes 'No documented connection found to any other commercial-studio/educational-software composer,' and the same absence check applies here.",
    "NO CSDb SCENER PROFILE EXISTS — expected for a pure US commercial/educational-studio composer, never demoscene-adjacent.",
    "MOBYGAMES' PERSON PAGE COULD NOT BE FULLY FETCHED (HTTP 403) — his complete ~18-title credit list beyond the three confirmed here was not independently enumerated; treat the 3-title scope as this project's own local dataset boundary, not necessarily his full career output.",
    "Not confirmed in SIDId (no entry for this tag). No documented connection found to [[paul-mudra]], [[rick-cardinali]], or [[steven-baumrucker-1]]/[[steven-baumrucker-2]] despite categorical similarity (US educational/commercial-software composers of the same era) — explicitly checked, no shared credit, collaborator, or company link found (Bertoni, Windham Classics, and Scholastic did not surface in any of those other cards). No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Snyder, Tom - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "MobyGames — Agent USA: https://www.mobygames.com/game/8950/agent-usa/",
    "Lemon64 — Agent USA (traced file): https://www.lemon64.com/game/agent-usa",
    "Wikipedia — Agent USA: https://en.wikipedia.org/wiki/Agent_USA",
    "Lemon64 — The Halley Project (composer credit): https://www.lemon64.com/game/halley-project",
    "Wikipedia — The Halley Project: https://en.wikipedia.org/wiki/The_Halley_Project",
    "Lemon64 — Swiss Family Robinson (music/sound credit): https://www.lemon64.com/game/swiss-family-robinson",
    "MobyGames — Thomas F. F. Snyder person page (fetch blocked 403, existence/name confirmed via search): https://www.mobygames.com/person/14930/thomas-f-f-snyder/",
    "Existing KB card: knowledge/players/al-lowe.md (the parallel founder/composer identity pattern)",
    "Local dataset: 3 files tagged Tom_Snyder, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Tom_Snyder` tag is Thomas F. F. Snyder's own driver — confirmed
with high confidence to be the actual founder of Tom Snyder Productions,
a former teacher composing music for his own company's games. Not the
C64 programmer on any title (Leonard Bertoni handled all three
conversions). Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **resolved founder-
vs-composer identity question**, established via a distinctive full-name
match plus a role-match (founder + credited composer on his own
company's titles), the same pattern already validated on [[al-lowe]]'s
card in this KB.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Tom_Snyder`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Tom_Snyder` `.sid` (Agent USA): load `$3a00`, init
`$3f68`, play `$3a15`, **32 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, MobyGames (2 pages),
Lemon64 (3 pages), Wikipedia (2 pages), and the related al-lowe card.

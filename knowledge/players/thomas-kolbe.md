# Thomas Kolbe (player routine)

```json
{
  "id": "thomas-kolbe",
  "name": "Thomas Kolbe (player routine)",
  "aliases": ["Thomas_Kolbe"],
  "authors": ["Thomas H. Kolbe"],
  "released": "1986-1989",
  "status": "in-progress",
  "platform": "German coder-composer Thomas H. Kolbe's own playroutine — a confirmed dual-role coder/musician who consistently co-developed his titles with Zuheir Urwani, both working on Markt & Technik/64'er-magazine-adjacent releases. Now a research assistant at the University of Bonn's Institute for Cartography and Geoinformation. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Das Schwarze Schloss): load $7a66 (init $a34c, play $a3fc).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $a34c.", "play": "Sample trace: $a3fc (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC CONFIRMS 'Kolbe, Thomas - GERMANY,' no group listed — consistent with a games-industry rather than demoscene composer.",
    "FULL BIOGRAPHY FOUND: Thomas H. Kolbe, born 1968, Germany — described on C64-Wiki (DE) as 'Programmierer, Musiker, Grafiker' (programmer/musician/graphic artist). Married with two children; since 1999 a research assistant at the Institute for Cartography and Geoinformation, University of Bonn — a genuinely notable, well-documented later academic career for a 1980s C64 composer.",
    "THREE CONFIRMED TITLES, all co-developed with Zuheir Urwani: Hyperrace (1987, Ariolasoft — a top-view scrolling shooter with split-screen two-player mode; Kolbe credited as BOTH programmer AND composer, title screen music/level-transition themes/SFX), Omidar (1986 per C64-Wiki, though other sources give 1987 — an Amidar-clone maze game published via Markt & Technik/Happy Computer/64'er magazine type-in or budget line; which of the two composed the music is UNCONFIRMED), and Das Schwarze Schloß ('The Black Castle,' the traced file — an action-RPG/adventure, publishers Markt & Technik Verlag/Profiteam Software, dates conflict across sources between 1987 and 1989 — a magazine type-in program with a later disk release, both years plausible depending on which format is meant).",
    "DAS SCHWARZE SCHLOSS'S MUSICIAN CREDIT IS EXPLICITLY CONTESTED ACROSS SOURCES, reported honestly rather than picking one: CSDb's own SID entry (id=51323) lists BOTH 'Zuheir Urwani & Thomas Kolbe' as composers of the traced file, but C64-Wiki's own game page marks the musician credit as 'unbekannt' (unknown) rather than confirming Kolbe specifically. Left explicitly unresolved.",
    "CONFIRMED DUAL CODER/COMPOSER ROLE ON HYPERRACE SPECIFICALLY — likely true for the other two titles as well given the consistent two-person Urwani/Kolbe team pattern, but the exact coding-vs-music split for Omidar and Das Schwarze Schloß specifically is UNCONFIRMED (Urwani is co-credited as composer on at least one SID entry, suggesting the two may have split music duties differently per title).",
    "A LATER, POST-C64 COLLABORATION WAS FOUND: with Urwani, an Amiga music program called 'Soundfactory' (1989-1991), self-published — sourced only from a single C64-Wiki mention, UNCONFIRMED beyond that.",
    "NO CSDb SCENER PROFILE EXISTS — a CSDb search for 'Kolbe' returns zero scener/group matches, consistent with him being a commercial games-industry figure, not a demoscene participant.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other German composer already carded in this KB — checked against [[andreas-bauernfeind]], [[christoph-bergmann]], [[georg-brandt]], [[georg-brandt-rhythm-cs]], [[ulrich-muehl]] — no direct collaborator, publisher, or group overlap surfaced beyond incidental shared years (1987/1989), which is not treated as a real connection. No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Kolbe, Thomas - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "C64-Wiki (DE) — Thomas H. Kolbe (biography, later academic career): https://www.c64-wiki.de/wiki/Thomas_H._Kolbe",
    "C64-Wiki (DE) — Hyperrace (full credits): https://www.c64-wiki.de/wiki/Hyperrace",
    "MobyGames — Hyperrace: https://www.mobygames.com/game/70184/hyperrace/",
    "GB64 — Hyperrace: https://gamebase64.com/game.php?d=24&h=0&id=3671",
    "Lemon64 — Omidar: https://www.lemon64.com/game/omidar",
    "CSDb sid id=51323 (Das Schwarze Schloß, dual composer credit): https://csdb.dk/sid/?id=51323",
    "C64-Wiki (DE) — Das Schwarze Schloß (musician credit marked unknown): https://www.c64-wiki.de/wiki/Das_Schwarze_Schlo%C3%9F",
    "Local dataset: 3 files tagged Thomas_Kolbe, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Thomas_Kolbe` tag is German coder-composer Thomas H. Kolbe's own
playroutine — a dual-role coder/musician who consistently co-developed
his titles with Zuheir Urwani. Now a research assistant at the
University of Bonn. Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **well-documented,
notable later career** as a university research assistant, a rare depth
of biographical detail for a small 1980s German type-in composer. Also
notable: an **honestly-preserved credit conflict** on the traced file's
own musician attribution, left unresolved between two sources rather
than picking one arbitrarily.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Thomas_Kolbe`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Thomas_Kolbe` `.sid` (Das Schwarze Schloss): load
`$7a66`, init `$a34c`, play `$a3fc`, **180 register writes / 50 frames**
(0 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, C64-Wiki (DE, 3 pages),
MobyGames, GB64, and CSDb.

# Will Harvey's Music Construction Set

```json
{
  "id": "music-construction-set",
  "name": "Will Harvey's Music Construction Set",
  "aliases": ["Music_Construction_Set"],
  "authors": ["Will Harvey"],
  "released": "1984 (Electronic Arts)",
  "status": "in-progress",
  "platform": "One of the first commercial WYSIWYG/graphical sheet-music editors for home computers — drag notes onto a staff, play back, print. Written by Will Harvey as a teenager (age reported as either 15 or 17 depending on source — see quirks), originally for Apple II, published by Electronic Arts 1984, ported to Atari 8-bit, Commodore 64, IBM PC, and Atari ST, later (1986) Apple IIGS; sold over a million units. Harvey later created The Immortal (1990) and Zany Golf (1988), earned a CS PhD from Stanford, and co-founded There, Inc. and IMVU. Player-ID-fingerprinted across 19 files, ALL by a different person — Douglas Fulton — who composed the bundled demo tunes for the C64 port; Harvey himself wrote the tool, not these tunes.",
  "csdb_release": 185248,

  "memory": { "load_address": "Sample HVSC file traced (Allegro, composed by Fulton): load $40fe (init $40fe, play $41b1).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $40fe.", "play": "Sample trace: $41b1 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 3 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "TOOL-BUILT-BY-X, TUNES-COMPOSED-BY-Y — unlike most single-author player cards in this KB: Will Harvey wrote the tool itself; Douglas Fulton, a separate and otherwise almost entirely undocumented person, composed the demo tunes bundled with the C64 port (his only clean CSDb credit is exactly this release, tagged Music role). All 19 locally traced files are Fulton's demo tunes, not Harvey's own work — the tag correctly represents the PLAYBACK ROUTINE (Harvey's), but every composer credit under it belongs to Fulton.",
    "WILL HARVEY'S AGE WHEN WRITING THIS IS UNRESOLVED between two conflicting sources: Wikipedia and VGMPF both say 15; a contemporary 1984 San Francisco Examiner profile ('17-year-old's \"note\"worthy software') says 17. No source reconciles the discrepancy (plausibly: started at 15, EA published when he was 17) — left as an open discrepancy rather than picking one.",
    "ORIGIN STORY: Harvey wanted to add music to his own Apple II game 'Lancaster', learned music theory basics from his high-school choir, then consulted professional musicians on what composition software should offer.",
    "COMMERCIALLY SIGNIFICANT: sold over a million units, ranked #3 in Apple II educational software sales by late 1985; later rebranded 'Deluxe Music Construction Set' on Amiga/Mac.",
    "HARVEY'S LATER CAREER, well documented: ported Marble Madness for EA (1986); wrote Zany Golf (1988) and The Immortal (1990) for Apple IIGS; earned BS/MS/PhD in Computer Science, all from Stanford; founded There, Inc. (1998, an early 3D virtual social world) and IMVU (2003, avatar-based IM) — a long, well-known career trajectory well beyond this one C64 tool.",
    "Douglas Fulton has essentially NO other documented footprint: no CSDb group affiliation, country, or real-name detail beyond the name itself — reads as a one-off EA-commissioned demo composer, not a demoscene figure. A second CSDb credit search result ('Thief Sample II' by Gandalf, 1985) surfaced but is FLAGGED AS UNCONFIRMED/possibly a different person or database mis-link — not included as fact. A minor, unexplained discrepancy: CSDb's release page lists 18 SID files for this tag while this project's own local count is 19 — not investigated further, likely a filename/release mapping quirk, not a contradiction.",
    "Not confirmed in SIDId beyond the metadata already used above. No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Ed Bogas/Russell Lieblich [[music-studio]] — none found)."
  ],
  "sources": [
    "Wikipedia — Music Construction Set (origin story, ports, sales figures): https://en.wikipedia.org/wiki/Music_Construction_Set",
    "Wikipedia — Will Harvey (later career, education, There/IMVU): https://en.wikipedia.org/wiki/Will_Harvey",
    "VGMPF — Music Construction Set: https://www.vgmpf.com/Wiki/index.php/Music_Construction_Set",
    "CSDb release 185248 (C64 port, 18 SID files credited to Fulton): https://csdb.dk/release/?id=185248",
    "CSDb scener — Douglas Fulton (id=14019): https://csdb.dk/scener/?id=14019",
    "Wikipedia — The Immortal (video game): https://en.wikipedia.org/wiki/The_Immortal_(video_game)",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 19 files tagged Music_Construction_Set, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Music_Construction_Set` tag is one of the first commercial WYSIWYG
music editors for home computers, written by teenage programmer Will
Harvey (Electronic Arts, 1984) — a tool with a long commercial afterlife
and a famous author who went on to found There, Inc. and IMVU. All 19
locally traced files, however, are demo tunes composed by a separate,
almost entirely undocumented person, Douglas Fulton — a genuine
tool-vs-tune-author split, unusual for this KB.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **tool-author/tune-
author split** (Harvey wrote it, Fulton composed everything traced here);
Harvey's **unresolved reported age** (15 vs. 17) when he wrote it; and his
**well-documented, famous later career**, in sharp contrast to Fulton's
near-total obscurity.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Music_Construction_Set`-
tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Music_Construction_Set` `.sid` (Allegro, composed by
Fulton): load `$40fe`, init `$40fe`, play `$41b1`, **125 register writes /
50 frames** (3 filter writes). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — Wikipedia (2 pages), VGMPF, CSDb (release +
scener), and HVSC Musicians.txt.

# The Music Studio (Bogas / Lieblich)

```json
{
  "id": "music-studio",
  "name": "The Music Studio (Bogas / Lieblich)",
  "aliases": ["Music_Studio/Lieblich"],
  "authors": ["Ed Bogas", "Russell Lieblich"],
  "released": "1985 (Activision)",
  "status": "in-progress",
  "platform": "Native C64 music-notation editor, published by Activision — one of the notable cross-platform music editors of the era, later ported to Atari 8-bit, Atari ST (1986, first version with real MIDI support), Amiga, and Apple IIGS. Player-ID-fingerprinted across 34 files: 19 by film/TV composer Ed Bogas (Activision's bundled demo compositions), 15 by fellow Activision composer-programmer Russell Lieblich, who is documented writing custom sound drivers elsewhere in Activision's catalog — the tag's own naming ('/Lieblich') plus his programmer credentials suggest he likely wrote the embedded playback engine, while Bogas contributed compositions (see quirks — this specific division of labor is inference, not directly confirmed by any source found).",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Aisle Dance, composed by Bogas): load $0fad (init $0fad, play $1013).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $0fad.", "play": "Sample trace: $1013 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 11 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "ED BOGAS is a notable American film/TV composer: succeeded Vince Guaraldi on Peanuts specials from 1977 ('It's Your First Kiss, Charlie Brown') through 1989, was the primary composer for all 121 half-hours of Garfield and Friends, and scored Ralph Bakshi's Fritz the Cat and Heavy Traffic. Wikipedia explicitly credits him as 'Composer of software's demo songs' for The Music Studio (Amiga/Apple IIGS editions listed in his discography). Also composed C64 game music separately: Hardball!, Jukebox, Beanstalk, Murder on the Mississippi, Park Patrol, and many others across a long career (Road Riot 4WD, Wordtris, even Action 52/Cheetahmen II).",
    "RUSSELL LIEBLICH (2 March 1953 - 26 January 2005, heart attack, Coram NY) — Master's in Music from UC San Diego, one of Activision's lead C64 composers in the 1980s AND a genuine programmer: VGMPF documents him writing CUSTOM SOUND DRIVERS for multiple Activision titles, a distinct credential from pure composing. Did the C64 music translation of LucasArts' Ballblazer; composed for Little Computer People, Aliens, MechWarrior, Master of the Lamps, Web Dimension (which he also designed), Stealth ATF (NES); 30+ titles across Intellivision, C64, Amiga, NES/SNES/Genesis.",
    "NO SOURCE FOUND explicitly states 'Bogas and Lieblich co-created The Music Studio' as a stated fact — one search-engine-aggregated author list (naming several unrelated people) was checked and DISCARDED as likely cross-contaminated from an unrelated multi-game roster page, not a real credit line. MobyGames' credits page (the best likely source) was inaccessible (bot-blocked) in this research pass. The Bogas/Lieblich authorship split used on this card rests on: (1) Bogas's own Wikipedia page explicitly crediting him with the software's bundled demo songs, and (2) Lieblich's documented sound-driver-programming role elsewhere in Activision's catalog, combined with the tag itself being named '/Lieblich' — this is a REASONABLE INFERENCE about division of labor, not a directly sourced fact. Flagged accordingly.",
    "A SEPARATE, uncarded tag 'Russell_Lieblich' (11 files) also exists in this project's data — plausibly one of Lieblich's OTHER custom in-game sound drivers (documented across several different Activision titles), distinct from this shared editor tag. Which specific game it's from is not confirmed.",
    "Ported widely beyond the C64: Atari 8-bit, Atari ST (1986 — the first version with real MIDI support via the ST's built-in ports), Amiga, and Apple IIGS — a notably long-lived, cross-platform product for its era.",
    "Both HVSC Musicians.txt entries are minimal ('Bogas, Ed - USA', 'Lieblich, Russell - USA', no group/alias/comment fields). No known relationship found to any other composer/tool already in this KB — different scene entirely (US commercial/Activision vs. this KB's mostly UK/European composer-driver cards; checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt (both entries): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Wikipedia — Ed Bogas (Peanuts/Garfield career, Music Studio demo-song credit): https://en.wikipedia.org/wiki/Ed_Bogas",
    "Wikipedia — Russell Lieblich (biography, death, career, custom driver work): https://en.wikipedia.org/wiki/Russell_Lieblich",
    "VGMPF — Ed Bogas (full gameography): https://vgmpf.com/Wiki/index.php/Ed_Bogas",
    "VGMPF — Russell Lieblich (full gameography, sound-driver credits): https://vgmpf.com/Wiki/index.php/Russell_Lieblich",
    "Atari Magazines — The Music Studio (Atari ST) review, MIDI support: https://www.atarimagazines.com/compute/issue78/028_1_Reviews_The_Music_Studio.php",
    "CSDb release 90711 (C64 crack of The Music Studio, no credits filled in): https://csdb.dk/release/?id=90711",
    "gb64.com — The Music Studio description: https://gb64.com/oldsite/gameofweek/melodymakers/util_musicstudio.htm",
    "Local dataset: 34 files tagged Music_Studio/Lieblich, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Music_Studio/Lieblich` tag is Activision's 1985 cross-platform C64
music-notation editor, "The Music Studio". Player-ID-fingerprinted across
34 files by its two credited people: film/TV composer Ed Bogas (bundled
demo songs) and programmer-composer Russell Lieblich, who separately wrote
custom sound drivers elsewhere in Activision's catalog — plausibly, though
not directly confirmed, the actual author of this tool's playback engine.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **Ed Bogas's notable
separate career** (Peanuts, Garfield and Friends); **Russell Lieblich's
documented sound-driver-programming credentials**, the basis for an
inferred (not directly sourced) division of labor between the two; and a
**separate, uncarded 'Russell_Lieblich' tag** (11 files) plausibly
representing one of his other Activision drivers.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Music_Studio/Lieblich`-
tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Music_Studio/Lieblich` `.sid` (Aisle Dance, composed by
Bogas): load `$0fad`, init `$0fad`, play `$1013`, **43 register writes /
50 frames** (11 filter writes). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Wikipedia (2 pages), VGMPF
(2 pages), Atari Magazines, CSDb, and gb64.com.

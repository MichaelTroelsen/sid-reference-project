# Sound Programming Language / SPL (Chris Grigg)

```json
{
  "id": "chris-grigg",
  "name": "Sound Programming Language / SPL (Chris Grigg)",
  "aliases": ["Chris_Grigg"],
  "authors": ["Chris Grigg"],
  "released": "1987-1991 (Epyx)",
  "status": "in-progress",
  "platform": "Epyx's internal 'Sound Programming Language' (SPL), built by American composer-tool-builder Chris Grigg — CONFIRMED both coder and musician, directly matching this project's hypothesis. Supported the SID's built-in filter, which Grigg knew varied between individual chips and deliberately used sparingly, on shakers and noise sound effects. Grigg went on to build the Atari Lynx sound driver and GEMS (later used for Sega Genesis/Mega Drive audio, including Andre Agassi Tennis). Player-ID-fingerprinted across 5 files, all by Grigg himself.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (California Games, 1987): load $4000 (init $75b1, play $7603).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $75b1.", "play": "Sample trace: $7603 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample — consistent with Grigg's own documented sparing use of the filter, per VGMPF, though this specific tune not being filter-heavy is not itself confirmation of that stated philosophy)." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED COMPOSER-TOOL-BUILDER, not just a composer using someone else's tool: VGMPF states Grigg 'developed SPL (sound programming language)' at Epyx, that it 'supported SID's built-in filter', and that he 'knew that the filter varied between chips and used it sparingly, on shakers and noise sound effects' — a genuine first-party-sourced technical design philosophy, directly matching the initial research hypothesis. He also built the Atari Lynx sound driver and GEMS (later used for Sega Genesis/Mega Drive audio, e.g. Andre Agassi Tennis).",
    "BIOGRAPHY: American, b. ~1960/61. C64 developer at Waveform Corporation 1983-85; after it folded, co-founded Future Arts, introduced to Lucasfilm Games via an Atari-developer contact. Freelanced for Electronic Arts and Epyx starting 1987; became Epyx's 'music and sound director' after his first game there. Left Epyx 1991; later sound designer for Pixar, then Line 6 (guitar amps). Currently chairman of the MIDI Manufacturers Association / works at MIPI Alliance — a long, well-documented professional career.",
    "CALIFORNIA GAMES (1987, Epyx/US Gold, the traced file) — CONFIRMED via Wikipedia: 'The sound design for the original version of California Games was done by Chris Grigg, a member of the band Negativland.' A retrospective source gives the fuller credit 'Music by Christopher Grigg and Gil Freeman.'",
    "'GAMES_SUMMER_EDITION' IDENTIFIED PRECISELY: this is 'The Games: Summer Edition' (1988, Epyx/US Gold) — NOT the earlier Summer Games (1984) or Summer Games II (1985), both of which PREDATE Grigg's 1987 arrival at Epyx (no credit ties him to either, and any such claim should be treated as unverified/likely wrong). Lemon64 credits Music/Sound on Summer Edition to Bob Vieira, Chris Ebert, and Chris Grigg — a recurring collaborator, Chris Ebert, also appears alongside Grigg elsewhere (per an unverified search-summary, not directly fetched) on the Amiga ports of California Games and Winter Games; Ebert is not currently carded in this KB.",
    "A PLAUSIBLE, UNCONFIRMED additional SPL-scored title: DeepSID hosts 'Legend_of_Blacksilver.sid' in his composer folder — The Legend of Blacksilver (1988, Epyx RPG) fits his tenure there, but no explicit music-credit text was independently confirmed for it (search-only evidence, not page-verified). Treated as probable, not confirmed.",
    "TWO CLAIMS EXPLICITLY DISCARDED AS UNVERIFIED: a claimed NES-version music-arrangement credit for David Wise (adapting Grigg's tunes) and a 'Louie Louie' title-track claim both appeared only in AI-search-synthesized snippets, never confirmed via a direct primary-source fetch — NOT included as fact.",
    "Not confirmed beyond the bare SIDId name/author fields already used above. No known relationship found to any other composer/tool already in this KB — Grigg was a US Epyx in-house tool-builder/composer, entirely separate from the UK/European demoscene lineage most of this KB's other composers come from (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Grigg, Chris - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "VGMPF — Chris Grigg (biography, SPL description, Lynx/GEMS work): https://www.vgmpf.com/Wiki/index.php/Chris_Grigg",
    "Wikipedia — California Games (sound design credit): https://en.wikipedia.org/wiki/California_Games",
    "FRGCB retrospective — California Games (full music credit): http://frgcb.blogspot.com/2017/06/california-games-epyxus-gold-1987-part-1.html",
    "Lemon64 — The Games: Summer Edition (1988, full Music/Sound credits): https://www.lemon64.com/game/games-summer-edition",
    "DeepSID — Chris Grigg composer folder (Legend of Blacksilver lead): https://deepsid.chordian.net/?file=MUSICIANS%2FG%2FGrigg_Chris%2FLegend_of_Blacksilver.sid",
    "Local dataset: 5 files tagged Chris_Grigg, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Chris_Grigg` tag is Epyx's internal 'Sound Programming Language'
(SPL), built by American composer-tool-builder Chris Grigg — confirmed
both a genuine coder and musician, with a documented technical philosophy
(sparing filter use, since he knew it varied between individual SID
chips). Grigg's other work includes the Atari Lynx sound driver and GEMS
(later used on Sega Genesis). Player-ID-fingerprinted across 5 files,
including California Games (1987), all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **confirmed, first-
party-sourced design philosophy** for filter use, directly matching the
research hypothesis; his **long, well-documented career** beyond the C64
(Pixar, Line 6, MIDI Manufacturers Association); and a **precisely
identified 'Games_Summer_Edition'** title, with the earlier Summer Games
titles explicitly ruled out as predating his Epyx tenure.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Chris_Grigg`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Chris_Grigg` `.sid` (California Games): load `$4000`,
init `$75b1`, play `$7603`, **32 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, Wikipedia, a
retrospective blog, Lemon64, and DeepSID.

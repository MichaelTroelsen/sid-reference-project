# Arti Haroutunian (Tronix driver)

```json
{
  "id": "arti-haroutunian",
  "name": "Arti Haroutunian (Tronix driver)",
  "aliases": ["Arti_Haroutunian"],
  "authors": ["Arti Haroutunian"],
  "released": "1983 (Tronix Publishing)",
  "status": "in-progress",
  "platform": "American programmer-composer Arti Haroutunian's own driver — primarily a coder (MS in Computer Engineering, self-taught on a TRS-80 from 1978) at Tronix Publishing, who ported his own Atari 8-bit games to C64 himself; music appears to have been a personal hobby he also hand-coded, not a specialist role. HVSC has NO entry for him at all. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Slalom, 1983, Tronix Publishing): load $8ac0 (init $8ac0, play $92b7).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $8ac0.", "play": "Sample trace: $92b7 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO ENTRY AT ALL for this composer — checked directly across two independent HVSC mirrors, confirming a genuine absence, not a fetch error. The folder path (`MUSICIANS/H/Haroutunian_Arti/`) is his only identity anchor within this project's data.",
    "PRIMARILY A PROGRAMMER, CONFIRMED FIRST-PARTY: an interview reprinted at atarimagazines.com (ROM magazine) is the best source — MS in Computer Engineering, self-taught on a TRS-80 Model I from 1978, first commercial release a 1980 TRS-80 text adventure ('MicroWorld'). He wrote 'Kid Grid' (1982, Tronix, sole programmer) in 2 months and 'Juice!' (1983, Tronix, sole programmer) in 4.5 months on Atari 8-bit using the Atari Assembler Editor cartridge, THEN PORTED BOTH TO C64 HIMSELF. Music is mentioned only as a personal hobby in the interview ('listen to music, play the piano, and read'), not a stated specialty — he reads as primarily a coder who also did his own sound, matching the total absence of any SIDId match for this tag.",
    "THREE CONFIRMED C64 GAMES, all Tronix Publishing (founded September 1982 by John Reece), all with Haroutunian as the sole programmer and likely composer given his self-taught, solo-porting workflow: Kid Grid (1982/83), Juice! (1983), and Slalom (1983, the traced file, a skiing game). CSDb independently confirms his composer credit on 'Waterline' (1983/84, also Tronix — id=2026, load $9000/init $9992/play $99B4, 3 subtunes) and 'Suicide Strike' (1983, a shoot-em-up, but published by System 3, NOT Tronix — a different publisher for this one title).",
    "'RIVER RAID' (a C64 port, 1984, Activision — Carol Shaw wrote the original Atari 5200 version) turns up in his credited catalog as a PROGRAMMER credit, but with NO SID/CSDb corroboration of a music role — flagged explicitly as programmer-only, not carried forward as a composer credit.",
    "NO CSDb SCENER PROFILE EXISTS — expected for a US commercial games programmer of this early era (1982-84), pre-dating the organized demoscene CSDb primarily documents. Only a bare CSDb release-credit page (`sid/?id=2026`) exists, no scener profile page.",
    "PERSONAL BIOGRAPHICAL DETAILS (approximate birth year 1957/58, 'Salt Lake City, UT') found only via low-confidence people-search aggregator sites (mylife.com, nuwber.com) — EXPLICITLY NOT INCLUDED as verified fact, flagged as unreliable/unverifiable sourcing rather than repeated as biography.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — pre-dates the 1990s-era demoscene tools (SF2/JCH/Laxity-family) most of this KB otherwise centers on, and no shared studio/publisher overlap found with other US commercial composers already carded (Ed Bogas, David Thiel, Kyle Johnson, Al Lowe, Paul Mudra, Rick Cardinali, Kenneth Arnold — all checked, none found). No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Twice Effect Editor)."
  ],
  "sources": [
    "Lemon64 — Arti Haroutunian game list: https://www.lemon64.com/games/list.php?list_individual=arti-haroutunian",
    "MobyGames — Arti Haroutunian (fetch blocked, indexed by search): https://www.mobygames.com/person/5632/arti-haroutunian/",
    "Internet Archive — Kid Grid (Tronix) manual: https://archive.org/details/KidGridTronix",
    "Internet Archive — Juice! (Tronix) manual: https://archive.org/details/juice-tronix",
    "ROM Magazine interview (biography, first-person quotes): https://www.atarimagazines.com/rom/issue5/interview.php",
    "CSDb sid id=2026 (Waterline, composer confirmation): https://csdb.dk/sid/?id=2026",
    "Local dataset: 3 files tagged Arti_Haroutunian, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Arti_Haroutunian` tag is American programmer-composer Arti
Haroutunian's own driver — primarily a coder at Tronix Publishing who
ported his own Atari 8-bit games to C64 himself, with music appearing to
be a personal hobby he also hand-coded. HVSC has no entry for him at all.
Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **first-person-
sourced coder identity**: a rare, genuine interview confirming he was
primarily a programmer (2-4.5 month solo dev cycles, self-taught
assembly) who ported his own games to C64, rather than a dedicated
composer-for-hire.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Arti_Haroutunian`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Arti_Haroutunian` `.sid` (Slalom): load `$8ac0`, init
`$8ac0`, play `$92b7`, **20 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — Lemon64, MobyGames, Internet Archive (2 pages),
ROM Magazine, and CSDb.

# Steve Bak (player routine)

```json
{
  "id": "steve-bak",
  "name": "Steve Bak (player routine)",
  "aliases": ["Steve_Bak"],
  "authors": ["Steve Bak"],
  "released": "1984-1986 (Microdeal/Interdisc/Pocket Money Software era)",
  "status": "in-progress",
  "platform": "English bedroom-coder Steve Bak's (1952-2019) own C64 driver — CONFIRMED via multiple sources as a lone-developer routine, since he programmed, drew graphics for, AND composed the music on all 6 of his credited C64 titles himself. He later became a well-regarded Atari ST/Amiga programmer (Goldrunner, Star Ray, James Pond 2: Robocod) — Goldrunner's own soundtrack was composed by KB-verified [[rob-hubbard]], a genuine, sourced cross-platform link. Player-ID-fingerprinted across 6 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Hercules, 1984, Interdisc): load $8c00 (init $8ceb, play $8d60).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $8ceb.", "play": "Sample trace: $8d60 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED SOLO ONE-MAN-BAND DEVELOPER on all 6 C64 titles (Hercules 1984, Gods & Heroes 1986, Cuthbert in the Jungle 1984, Cuthbert in the Tombs 1984, Lands of Havoc 1985, Crazy Painter 1984) — Lemon64/Wikipedia credits list Bak as programmer, graphics, AND musician on every one, a self-taught bedroom coder of the classic 1983-86 UK budget-software mould. He built ~70 games total across Dragon 32, Tandy CoCo, C64/C16, Enterprise, Sinclair QL, and later Atari ST/Amiga (21 titles on 16-bit systems).",
    "GENUINELY WELL-DOCUMENTED FIRST-PERSON MATERIAL: an ST News Vol.4 Iss.4 interview (direct quotes, e.g. on his proudest achievement: 'getting to grips with the computer at all, because when I wrote the first games there wasn't any proper documentation') plus a detailed obituary give real biographical depth rare for this era's budget-software composers — born 4 April 1952, Nottingham; worked 16 years as a coal miner; lost a fingertip in a mining accident and used the compensation to buy an Acorn Atom, teaching himself assembler from there; died 6 February 2019 (age 66, diabetes complications).",
    "A GENUINE, SOURCED CROSS-PLATFORM LINK TO A KB-VERIFIED COMPOSER: Bak programmed 'Goldrunner' (Microdeal, 1987, Atari ST) with the score composed by [[rob-hubbard]] — confirmed via Wikipedia's infobox and its 'Video games scored by Rob Hubbard' category. The sequel 'Goldrunner II' (1988) had music by [[david-whittaker]] instead ('kind of keeping it in the family,' per a c64audio.com retrospective interview with Hubbard). This is a coder-and-composer collaboration on a DIFFERENT platform (Atari ST, not C64) — not a shared C64 driver, but a real, directly documented working relationship between this card's subject and two already-VERIFIED composers in this KB.",
    "AN UNCONFIRMED SUB-CLAIM WAS EXPLICITLY CAUGHT AND FLAGGED, NOT INCLUDED AS FACT: an earlier AI search-summary suggested David Whittaker supplied Rob Hubbard's original Atari ST sound driver for the first Goldrunner — this could not be corroborated in the actual c64audio.com article text and is left out.",
    "NAME-COLLISION RISK CHECKED AND RESOLVED: CSDb has an unrelated, differently-spelled scener 'Steve Bakke' (id=24594) — NOT this composer. No CSDb scener profile exists for 'Steve Bak' himself at all, consistent with him being a commercial-industry, pre-scene-era programmer rather than a demoscener. MobyGames' person page for him could not be directly verified (403 Forbidden on fetch) — findings rely on Lemon64/Wikipedia/ST News/obituary corroboration instead.",
    "'CRAZY PAINTER' ALSO EXISTS AS AN UNRELATED SAME-TITLED GAME on other 1980s platforms (Dragon 32/TRS-80/BBC Micro, likely different developers on those ports) — the C64 version specifically, the one relevant to this tag, is confirmed credited to Bak.",
    "Not confirmed in SIDId (no entry for this tag). Direct, sourced relationship to [[rob-hubbard]] and [[david-whittaker]] (both VERIFIED cards) via the Atari ST Goldrunner series — not encoded as a technical `shares_routine_with` edge since it's a cross-platform coder/composer collaboration, not shared C64 driver code. No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Bak, Steve - UNITED KINGDOM (ENGLAND)'): https://hvsc.de/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Hercules (full credits, traced file): https://www.lemon64.com/game/hercules",
    "Wikipedia — Hercules (1984 video game), confirms C64 design/programming credit: https://en.wikipedia.org/wiki/Hercules_(1984_video_game)",
    "Lemon64 — Gods & Heroes: https://www.lemon64.com/games/details.php?ID=1064",
    "Lemon64 — Cuthbert in the Jungle: https://www.lemon64.com/games/details.php?ID=1944",
    "uvlist — Cuthbert in the Tombs: https://www.uvlist.net/game-35872-Cuthbert+In+The+Tombs",
    "Lemon64 — Lands of Havoc: https://www.lemon64.com/game/lands-of-havoc",
    "Lemon64 — Crazy Painter: https://www.lemon64.com/game/crazy-painter",
    "ST News Volume 4 Issue 4 — Steve Bak interview (direct quotes, biography): https://st-news.com/issues/st-news-volume-4-issue-4/week-two/steve-bak/",
    "Vintage is the New Old — Steve Bak obituary: https://www.vintageisthenewold.com/amiga-atari-st-programmer-steve-bak-dies-at-66",
    "Wikipedia — Goldrunner (confirms Rob Hubbard score, Bak programming): https://en.wikipedia.org/wiki/Goldrunner",
    "c64audio.com — Rob Hubbard on the Atari 8-bit and ST platforms (Goldrunner II/Whittaker note): https://c64audio.com/blogs/news/rob-tari-rob-hubbard-on-the-atari-8-bit-and-st-platforms",
    "Local dataset: 6 files tagged Steve_Bak, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Steve_Bak` tag is English bedroom-coder Steve Bak's own C64 driver —
he programmed, drew graphics for, and composed music on all 6 of his
credited titles himself. He later became a notable Atari ST/Amiga
programmer, and his 'Goldrunner' was scored by KB-verified
[[rob-hubbard]] — a real, documented cross-platform link. Player-ID-
fingerprinted across 6 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **confirmed solo
one-man-band pattern** across all 6 titles; **unusually rich first-person
biographical material** (an ST News interview plus a detailed obituary);
and a **genuine, sourced link to two already-VERIFIED KB composers**
(Rob Hubbard, David Whittaker) via his later Atari ST Goldrunner series.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Steve_Bak`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Steve_Bak` `.sid` (Hercules): load `$8c00`, init
`$8ceb`, play `$8d60`, **57 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.
Note: one file in this composer's own folder, `Cuthbert_in_the_Jungle.sid`,
is an RSID (self-installing-interrupt format) and is untraceable with
this project's standard tool — the trace above uses `Hercules.sid`
instead, a standard PSID.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (5 pages),
Wikipedia (2 pages), uvlist, ST News, an obituary, and c64audio.com.

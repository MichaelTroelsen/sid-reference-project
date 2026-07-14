# Jason Page (original driver)

```json
{
  "id": "jason-page",
  "name": "Jason Page (original driver)",
  "aliases": ["Jason_Page"],
  "authors": ["Jason Page"],
  "released": "1988-1990 (Graftgold era)",
  "status": "in-progress",
  "platform": "Composer Jason Page's ORIGINAL 1980s C64 playroutine, written during his time at Graftgold — DISTINCT from the already-carded [[robtracker]] card, which documents his unrelated 2018 Kickstarter-funded 'Jason_Page/RobTracker' tool built decades later. Player-ID-fingerprinted across 5 files, all his own, filter-heavy.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Head the Ball, 1989, Hewson): load $4374 (init $4374, play $437a).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $4374.", "play": "Sample trace: $437a (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 99 filter writes in a dense 365-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED BY PAGE HIMSELF, IN HIS OWN WORDS, that this tag documents a genuinely SEPARATE tool from Turner's: 'At Graftgold, I used the routine which Steve Turner wrote, and at this point, I was also writing my own routine in my spare time' (Remix64 interview) — i.e. he inherited/used [[steve-turner]]'s driver professionally at Graftgold WHILE independently developing his own playroutine on the side. Which specific HVSC files use Turner's routine vs. his own is not stated in any source found; this tag's 5 files are the closest available evidence of which is which.",
    "TWO CONFIRMED GAME CREDITS with full credit lists: Head the Ball (1989, Hewson — a C64 conversion of the Cybadyne-developed ZX Spectrum original; Page programmed the C64 version, did some graphics, AND wrote the music — one of his named favorite game tunes) and Ivan 'Ironman' Stewart's Super Off Road (1990, Virgin Mastertronic — C64 conversion of the Leland arcade coin-op; credits list Page as both a coder AND the musician, and he confirms directly: 'I wrote the C64 version of Super Offroad Racer, amongst other things').",
    "PAGE WAS HIS OWN CODER on both known credits — unusual among the composers in this KB, most of whom relied on a separate programmer. This is consistent with, and likely explains, why he'd have both used Turner's shared studio routine AND maintained his own independent one: as a coder himself he had the ability to write and integrate his own playback code directly.",
    "A SOUND-TOOL LINEAGE IS DOCUMENTED IN HIS OWN WORDS (Remix64 interview) predating this driver: 'I started with Sound Monitor and then Rock Monitor... that Maniacs Of Noise rip-off thing... ElectroSound! ...The code for running their audio data had bugs in it though' — suggesting dissatisfaction with existing tools' data-playback code as a plausible motivation for writing his own routine, though this is inference, not a stated fact.",
    "IMPORTANT DISAMBIGUATION, EXPLICITLY NOT THIS TAG: a well-documented anecdote about Page hand-converting Super Off Road's arcade score using SoundTracker and a Korg M1, then copying note data by hand into 'hex data, used by our Graftgold music player,' is EXPLICITLY THE AMIGA VERSION (VGMPF), not the C64 one — do not conflate. Likewise a later macro-based, TFMX-like driver spanning 'Amiga, ST, Megadrive and SNES' is a separate, later, non-C64 tool.",
    "NO CSDb 1980s scene-group membership found — his CSDb scener profile (id=4121) is dominated by MODERN (2015-2021, MultiStyle Labs) demoscene releases, not period activity; treat his C64-era footprint as commercial-industry only, same absence pattern as several other purely-commercial composers already carded in this KB.",
    "Not confirmed in SIDId (no entry for this tag). Strong, directly-confirmed relationship to [[steve-turner]] (shared driver use at Graftgold, professional collaboration on Super Off Road) — not encoded as a technical `shares_routine_with` edge since Page's OWN tag (this card) is explicitly the driver he wrote himself, separate from Turner's; the relationship is a personnel/career one, not a code-sharing one. Admired influences named in interviews (Ben Daglish, Martin Galway, Rob Hubbard, Jeroen Tel, Richard Joseph, Fred Gray, Chris Hülsbeck) are admiration only, not technical collaboration, and are not encoded as edges. No other KB relationship found (checked against Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Matt Gray, Jeroen Kimmel)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Page, Jason'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Jason Page game list: https://www.lemon64.com/games/list.php?list_individual=jason-page",
    "gb64 — Head the Ball: https://gb64.com/game.php?id=3456",
    "Lemon64 — Ivan 'Ironman' Stewart's Super Off Road (full credits): https://www.lemon64.com/game/ironman-super-off-road",
    "Retro Video Gamer — Jason Page interview (his own quote on Super Off Road coding, and 'his own routine in my spare time'): https://www.retrovideogamer.co.uk/rvg-interviews-jason-page/",
    "Remix64 — Jason Page interview (tool lineage, Amiga TFMX-like driver disambiguation): https://remix64.com/interviews/interview-jason-page.html",
    "VGMPF — Jason Page (Amiga Super Off Road SoundTracker/Korg M1 anecdote, explicitly Amiga not C64): https://www.vgmpf.com/Wiki/index.php/Jason%20Page",
    "WhoSampled — Rainbow Islands (C64 Version) credit: https://www.whosampled.com/album/Jason-Page/Rainbow-Islands-(C64-Version)/",
    "Existing KB card: knowledge/players/robtracker.md (his unrelated, decades-later 2018 tool, same person)",
    "Existing KB card: knowledge/players/steve-turner.md (the Graftgold driver he used alongside this one)",
    "Local dataset: 5 files tagged Jason_Page, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jason_Page` tag is composer Jason Page's ORIGINAL 1980s C64
playroutine, written in his spare time while at Graftgold — where he also
used labelmate [[steve-turner]]'s driver professionally. This is entirely
distinct from the already-carded [[robtracker]], his unrelated 2018
Kickstarter tool of the same surname. Player-ID-fingerprinted across 5
files, all his own, and notably filter-heavy.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is **Page's own words**
confirming he maintained two separate routines at once (Turner's shared
one, and his own) — a rare case in this KB where a composer directly
explains, in an interview, exactly why a tag/driver distinction like this
one exists.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Jason_Page`-tagged `.sid` +
trace — likely the first technical documentation of this driver, per the
research agent's own finding.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Jason_Page` `.sid` (Head the Ball): load `$4374`,
init `$4374`, play `$437a`, **365 register writes / 50 frames** (99
filter writes — very filter-heavy). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (2 pages), gb64,
Retro Video Gamer, Remix64, VGMPF, WhoSampled, and 2 related KB cards.

# Steve Turner (player routine)

```json
{
  "id": "steve-turner",
  "name": "Steve Turner (player routine)",
  "aliases": ["Steve_Turner"],
  "authors": ["Steve Turner"],
  "released": "~1985-1989 (Graftgold era)",
  "status": "in-progress",
  "platform": "Confirmed to be Graftgold co-founder Steve Turner's own sound driver — built on his own SFX routines with a sequencer added, first written for Gribbly's Day Out. This is the SAME Steve Turner who co-founded Graftgold with Andrew Braybrook in 1983 and designed Avalon/Quazatron/Paradroid, not a namesake — confirmed via three independent sources converging on his documented C64 music credits matching this tag's own files exactly (Alleykat, 3D Lunattack). Player-ID-fingerprinted across 10 files: 9 by Turner, 1 by a different composer, Nigel Grieve, on a file titled 'Zynaps_pre-release' — likely reuse of Turner's driver (a tool-name tag, not strictly sole-authorship, the same pattern as this KB's [[rob-hubbard]] card), provenance unresolved.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (3D Lunattack): load $9500 (init $b010, play $b020).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $b010.", "play": "Sample trace: $b020 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 3 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY RESOLVED, CONFIRMED via THREE independent sources: this is Graftgold co-founder Steve Turner (b. 1954, real name Steven Turner), NOT an unrelated namesake — C64-Wiki's Turner page lists Alleykat (1986) and 3D Lunattack among his music credits (matching this tag's own local files exactly), VGMPF independently confirms Alleykat and Uridium (1986) as his C64 credits and his Graftgold co-founding with Andrew Braybrook in 1983, and Lemon64/Remix64 interviews have him personally discussing composing for Graftgold. His broader C64 music credits (per C64-Wiki): Gribbly's Day Out (1985), Lunaattack (1985), Alleykat (1986), Uridium (1986), Morpheus (1987), Ranarama (1987), Sky Shark (1987), Zynaps (1987), Intensity (1988), Magnetron (1988), Soldier of Fortune (1988), Bushido (1989), Gribbly's Special Day Out (1989), Rainbow Islands (1990).",
    "CONFIRMED SELF-WRITTEN DRIVER, first-party sourced: per a Lemon64 interview, Turner 'did not write a music driver until Andrew was doing Gribbly's Day Out on the C64... based the music driver on his SFX routines and just added a sequencer.' He composed on guitar/keyboard, then hand-encoded the tunes — eventually specializing into programming and handing Graftgold's music duties to Jason Page.",
    "THIS TAG IS LIKELY A DRIVER/TOOL NAME, not strictly sole-authorship attribution — mirrors the pattern already established in this KB's [[rob-hubbard]] card (a personal in-game routine reused by other composers at the same studio). This directly explains the Nigel Grieve outlier file.",
    "NIGEL GRIEVE / 'ZYNAPS_PRE-RELEASE' — GENUINELY UNRESOLVED, flagged rather than guessed at: sources conflict on who composed the FINAL official C64 Zynaps soundtrack (C64-Wiki lists it under Turner without specifying platform; VGMPF lists Zynaps only under Turner's Spectrum credits; other search results describe Grieve as 'the musician' for the C64 version). Whether 'Zynaps_pre-release' is a documented, verified beta build using Turner's driver/tune before a final Grieve version replaced it is INFERENCE, not sourced fact — no CSDb release page matching that exact title was found. Grieve's own CSDb scener profile (id=13662) shows numerous Zynaps-tune credits across several cracking groups (1987-1991), which looks like normal scene re-release/rip activity, not direct evidence of original authorship either way.",
    "No CSDb scener profile for Turner himself was located (only his indirect presence via game-credit citations) — despite being a well-documented public figure through interviews, he apparently has no direct CSDb demoscene entry.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB beyond the Graftgold context above (his documented working relationships were with Andrew Braybrook and successor composer Jason Page, neither currently carded) — checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found."
  ],
  "sources": [
    "HVSC Musicians.txt ('Turner, Steve - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "C64-Wiki — Steve Turner (full C64 music credit list): https://www.c64-wiki.com/wiki/Steve_Turner",
    "VGMPF — Steve Turner (biography, Graftgold co-founding, Alleykat/Uridium credits): https://vgmpf.com/Wiki/index.php/Steve_Turner",
    "Lemon64 interview (own-words account of writing the music driver from his SFX routines): https://www.lemon64.com/interviews/steve_turner.php",
    "Remix64 interview: https://remix64.com/interviews/interview-steve-turner.html",
    "CSDb scener — Nigel Grieve (id=13662, Zynaps-tune credits across multiple groups 1987-1991): https://csdb.dk/scener/?id=13662",
    "Existing KB card: knowledge/players/rob-hubbard.md (the analogous tool-reused-by-others pattern)",
    "Local dataset: 10 files tagged Steve_Turner, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Steve_Turner` tag is Graftgold co-founder Steve Turner's own sound
driver — built on his SFX routines with a sequencer added, first written
for Gribbly's Day Out. Confirmed via three independent sources to be the
SAME Steve Turner who designed Avalon/Quazatron/Paradroid, not a
namesake. Player-ID-fingerprinted across 10 files, mostly his own, plus
one unresolved-provenance outlier by Nigel Grieve.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **identity is fully
resolved** across three independent sources (a real risk given how common
the name is, and given Turner's fame as a game designer rather than a
composer); a **first-party account** of the driver's origin (built from
his own SFX code); and the **genuinely unresolved Zynaps provenance
question**, left honestly unanswered rather than guessed at.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Steve_Turner`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Steve_Turner` `.sid` (3D Lunattack): load `$9500`,
init `$b010`, play `$b020`, **46 register writes / 50 frames** (3 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, C64-Wiki, VGMPF, 2
interviews, and CSDb.

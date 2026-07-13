# Dave Warhol (player routine)

```json
{
  "id": "dave-warhol",
  "name": "Dave Warhol (player routine)",
  "aliases": ["Dave_Warhol"],
  "authors": ["Dave Warhol"],
  "released": "~1984-1990 (Electronic Arts / Interplay / SSI era)",
  "status": "in-progress",
  "platform": "American composer-coder David Warhol's own hand-coded 6502 sound driver, written in Merlin assembler, purpose-built per-game rather than a reusable third-party engine. Player-ID-fingerprinted across 13 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Bard's Tale II: Destiny Knight): load $0dba (init $0dd9, play $0e3a).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $0dd9.",
    "play": "Sample trace: $0e3a (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 1 filter write in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "David Warhol (b. 15 July 1959, Hibbing, Minnesota) — a RARE US-based, self-taught coder-composer in this mostly-British-scene KB, and one of the more thoroughly documented composers carded so far. First job out of college: Mattel Electronics (Intellivision era) as audio engineer/game designer/programmer, one of the 'Blue Sky Rangers'. After Mattel folded, went independent, doing music/sound/programming for Electronic Arts, Interplay, Strategic Simulations Inc. (SSI), and Lucasfilm Games.",
    "CONFIRMED SELF-WRITTEN DRIVER, first-party sourced: per his own Remix64 interview account, he hand-wrote his own C64 sound driver in Merlin assembler — composing at a keyboard, then manually reducing notes to `.byte` statements, compiled into a compact (~4-6KB) binary driver. Directly confirms the single-composer-tag hypothesis rather than leaving it circumstantial.",
    "Games: Bard's Tale II: Destiny Knight, Pool of Radiance, Curse of the Azure Bonds, Neuromancer, Adventure Construction Set (won EA's 'Audio of the Year' for this one, matching the HVSC folder), The Bard's Tale: Tales of the Unknown Vol. I, Tass Times in Tonetown, Skyfox II: The Cygnus Conflict, Zak McKracken and the Alien Mindbenders, Heart of Africa, Ali Baba and the 40 Thieves.",
    "POST-C64 CAREER, clear documented continuity: founded Realtime Associates in 1986, still operating under his direction, 80+ published games across NES-through-PlayStation-era consoles. Later won the 12th Annual G.A.N.G. (Game Audio Network Guild) Lifetime Achievement Award.",
    "No CSDb scener profile found (he's a commercial US games-industry figure, not a demoscene participant — consistent with the pattern of most other American composers in this KB, e.g. [[paul-norman]]).",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Warhol entry; consistent with a personal, uncatalogued routine). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Warhol, David - USA')",
    "VGMPF biography (Mattel/Blue Sky Rangers, EA/Interplay/SSI, Realtime Associates, G.A.N.G. award): https://www.vgmpf.com/Wiki/index.php/David_Warhol",
    "Remix64 interview (Merlin assembler driver, Adventure Construction Set award): https://remix64.com/interviews/interview-david-warhol.html",
    "DeepSID composer folder (confirms scene-tag identity matches games-industry David Warhol): https://deepsid.chordian.net/?file=%2FMUSICIANS%2FW%2FWarhol_Dave%2FPool_of_Radiance.sid",
    "Local dataset: 13 files tagged Dave_Warhol, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Dave_Warhol` tag is American composer-coder David Warhol's own
hand-written, per-game sound driver, coded in Merlin assembler. Player-ID-
fingerprinted across 13 files, all his own — one of the most thoroughly
documented self-authored routines in this KB, confirmed by his own
first-party interview account of writing it.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **confirmed first-party
account** of hand-coding the driver himself in Merlin assembler; the
**Mattel/Blue Sky Rangers origin story**; and a **clear, documented
continuity** into his later career founding Realtime Associates (still
operating).

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Dave_Warhol`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Dave_Warhol` `.sid` (Bard's Tale II: Destiny Knight):
load `$0dba`, init `$0dd9`, play `$0e3a`, **155 register writes / 50
frames** (1 filter write). Internals undocumented; memory map/format/
effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, the Remix64 interview
(primary source for the self-written driver), and DeepSID.

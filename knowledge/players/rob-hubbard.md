# Rob Hubbard (player routine)

```json
{
  "id": "rob-hubbard",
  "name": "Rob Hubbard (player routine)",
  "aliases": ["Rob_Hubbard", "RH6"],
  "authors": ["Rob Hubbard"],
  "released": "~1985 (first used late 1984/early 1985)",
  "status": "stub",
  "platform": "A composer's hand-coded 6502 in-game music DRIVER (~900-1000 bytes), embedded per-game — NOT a distributed editor/tool. Player-ID fingerprints the routine's byte-pattern, so tunes by anyone who reused Hubbard's driver resolve to this tag.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies PER GAME — not fixed (the routine was relocated/modified per title). The documented Monty on the Run rip loads at $8000 (routine + data $8000-~$9554).",
    "zero_page": "TODO: varies per game; not a single fixed map.",
    "layout": "TODO: per-game. See the McSweeney commented disassembly for the Monty layout specifically."
  },
  "entry": {
    "init": "music+0 (init)",
    "play": "music+3 (play, per frame / VBlank IRQ)",
    "stop": "music+6 (stop/silence). Three-entry-point convention, offsets from the load base."
  },
  "speed": "Multi-speed (note length counted in routine calls; e.g. length $1F = 64 calls). Effects driven off VBlank interrupts.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO (per-game; see disassembly)",
    "commands": {
      "(signature techniques, not a byte table)": "logarithmic vibrato; pulse-width modulation (~50%→88% sweep); octave arpeggios; portamento; noise-channel drums with fast frequency sweeps; 'skydive' descents; later 4-bit PCM sample playback via the SID volume-register trick."
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "THE CORE INSIGHT (why this tag spans ~51 composers, only ~28% by Hubbard himself): Hubbard's driver was widely reverse-engineered, hacked, and REUSED by other scene musicians — often without permission. VGMPF names Jeroen Tel, Johannes Bjerregaard, Jeroen Kimmel, Neil Baldwin, Giulio Zicchi, Pablo Toledo and Thomas Petersen (Laxity) as reusers. So this tag legitimately marks a ROUTINE FAMILY, not authorship. (This project's Players-tab analysis independently flagged the same spread.)",
    "Hubbard reportedly scrambled his code/data through much of 1987 after Jeroen Kimmel used it; he also accidentally leaked source fragments in compiled soundtracks and lost his own pre-EA source (spring 1997).",
    "Not a released tool: no editor, no fixed load address — the driver was embedded and tweaked per game ('change the music data and a few lines of code'). Do NOT assert a single memory map.",
    "A famous commented disassembly exists (Anthony McSweeney, 'Rob Hubbard's Music: Disassembled, Commented and Explained', ripped from Monty on the Run, $8000). A modern JS reimplementation is luxocrates/js-robb-player. These make Hubbard's routine one of the better-documented classic drivers — a strong RE/verification target despite the per-game variance.",
    "Rob Hubbard: British composer (b.1956), the defining C64 game musician of 1983-88 (Monty on the Run, Commando, Delta, Sanxion, Thing on a Spring), later at Electronic Arts 1988-2002. Compunet handle 'RH6'."
  ],
  "sources": [
    "McSweeney commented disassembly (Monty on the Run; $8000; entry +0/+3/+6; multi-speed): https://www.1xn.org/text/C64/rob_hubbards_music.txt",
    "VGMPF Rob Hubbard C64 Driver (names the reusers — the routine-family story): https://www.vgmpf.com/Wiki/index.php?title=Rob_Hubbard_(C64_Driver)",
    "ChipMusic.org driver thread (reuse/scrambling history): https://chipmusic.org/forums/topic/1488/rob-hubbards-music-driver-c64/",
    "Modern JS reimplementation: https://github.com/luxocrates/js-robb-player",
    "sidid:Rob_Hubbard (author Rob Hubbard); CSDb scener https://csdb.dk/scener/?id=8131",
    "Local dataset: 256 files tagged Rob_Hubbard across 51 composers (~28% by Hubbard) — see knowledge/COVERAGE.md"
  ]
}
```

## Overview

The "Rob_Hubbard" tag is not a tool — it's **Rob Hubbard's hand-coded in-game
music driver**, fingerprinted by Player-ID's byte-signature. Hubbard was the
defining C64 game composer of 1983-88, and his ~1KB 6502 driver was so
influential that it was **reverse-engineered and reused by dozens of other
composers** (Jeroen Tel, Bjerregaard, Kimmel, Neil Baldwin, Laxity…). That's why
256 files across **51 composers** resolve here with only ~28% actually by
Hubbard — the tag marks a routine *family*.

## Quirks & gotchas

See the `quirks` array — the load-bearing item is the **routine-family reuse
story** (the reason for the 51-composer spread), plus the fact that there is
**no fixed memory map** (per-game embedded/tweaked) and that a **published
commented disassembly** (McSweeney's, from Monty on the Run) exists.

## Disassembly notes

Unusually well-documented for a classic driver: McSweeney's commented
disassembly gives the Monty layout ($8000, entry `music+0/+3/+6`, multi-speed
by call-count) and the js-robb-player reimplementation encodes the behaviour.
Per-game variance means addresses aren't universal, but a verification pass on
one representative rip (assemble/trace via `sidm2-siddump`) is very feasible.

## Verification

**Not verified locally — `status: stub`.** The reuse story, entry-point
convention (`+0/+3/+6`), and signature techniques are well-sourced (McSweeney,
VGMPF); the data-format internals are per-game and `TODO`.

## Sources

See the `sources` array — the McSweeney disassembly, VGMPF's driver page (the
reuser list), the ChipMusic thread, and the js-robb-player reimplementation.

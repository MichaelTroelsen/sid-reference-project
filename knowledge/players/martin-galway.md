# Martin Galway (player routine)

```json
{
  "id": "martin-galway",
  "name": "Martin Galway (player routine)",
  "aliases": ["Martin_Galway"],
  "authors": ["Martin Galway"],
  "released": "~1985-1987 (per-game; e.g. Wizball source dated Feb-Apr 1987, (C) Ocean)",
  "status": "in-progress",
  "platform": "Martin Galway's own hand-coded 6502 in-game music driver (Ocean-era), embedded/relocated per game. Player-ID-fingerprinted across ~54 files. His own ORIGINAL assembly sources are published by the author.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Wizball: the music is ORG $4600 (the full source also has a demo wrapper at ORG $1000); the HVSC Wizball rip loads $4600.",
    "zero_page": "Wizball source reserves ZP via ORG ZERO0/ZERO1/ZERO2 ($0004/$0029/$0087). Exact per-variable map: TODO (read the source).",
    "layout": "Wizball: split lo/hi note-frequency tables (LoFrq via DFL / HiFrq via DFH), a per-tune 'letter' table (B..I → tune# * speed), per-voice routines. Per-game."
  },
  "entry": {
    "init": "InitSound (called OUTSIDE interrupts). HVSC Wizball rip: PSID init $63AC.",
    "play": "Music0/Music1/Music2 + Sound0-2 (called INSIDE interrupts). HVSC Wizball rip: PSID play $6391 (218 register writes / 50 frames — confirmed playing). Some tunes are MULTISPEED (Wizball's title/bonus tunes run 100-200Hz)."
  },
  "speed": "1x + multispeed per tune (Wizball has 50Hz, 100Hz and 200Hz tunes — see the source's LETTER/TUNE/SPEED table).",

  "data_format": {
    "order_list": "Per-voice sequence/pattern structures (per-game).",
    "patterns": "TODO (per-game; documented in his own source).",
    "instruments": "TODO",
    "wavetable": "Split lo/hi frequency tables (LoFrq/HiFrq). Full instrument/wave format: TODO (in the source).",
    "pulsetable": "TODO",
    "filtertable": "TODO (Galway is famous for expressive filter + PWM 'FM-like' synthesis; RefFilter routine in the Wizball source)."
  },
  "effects": { "encoding": "TODO (documented in his own published source; not yet decoded here).", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Legendary Ocean composer (Wizball, Arkanoid, Green Beret, Rambo, Game Over, Comic Bakery, Times of Lore, Parallax, Ocean Loader). A composer-personal routine like rob-hubbard/david-whittaker — memory map varies per game.",
    "AUTHORITATIVE SOURCE PUBLISHED BY THE AUTHOR: Martin Galway released his own original commented assembly sources on github.com/MartinGalway/C64_music (arkanoid.asm, gameover.asm, greenberet.asm, rambload.asm, wizball.asm), written in the 1987 'Ocean' assembler. So — unlike most classic players — this card's facts can be checked against the composer's OWN code, and a byte-exact reconstruction is achievable (see Verification).",
    "Ocean assembler directive key (decoded here for future reassembly): ORG=*=; EQU=label=value; DFB/DFL='.byte <(expr)' (low byte, wraps); DFH='.byte >(expr)' (high byte); DFW='.word'; DFS=.fill; DFM=.text; ENT=entry label; and operators &X = char literal ('X'), ^expr = high byte, '.' = program counter.",
    "Wizball's source is the FULL interactive music demo (screen/keyscan at ORG $1000 + music at ORG $4600); the HVSC .sid is just the extracted music portion. A byte-diff should target the $4600 music region.",
    "Don't confuse with SIDM2's `drivers_src/galway/galway_driver.asm` — that is SIDM2's OWN from-scratch SF2 reconstruction for Galway conversion, NOT Galway's original code."
  ],
  "sources": [
    "Martin Galway's OWN published sources (authoritative): https://github.com/MartinGalway/C64_music (wizball.asm etc. + ocean_assembler_directives.txt)",
    "HVSC Wizball.sid (traced: load $4600, init $63AC, play $6391, 218 writes/50f)",
    "sidid / DeepSID tag Martin_Galway; SIDM2 galway.md KB card + drivers_src/galway (SF2 reconstruction, NOT the original)",
    "Local dataset: ~54 files tagged Martin_Galway (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Martin_Galway` tag is legendary Ocean composer Martin Galway's own C64
music driver (Wizball, Arkanoid, Rambo, Comic Bakery…), Player-ID-fingerprinted
across ~54 files. Uniquely, **Galway published his own original commented
sources** (github.com/MartinGalway/C64_music), so this card is grounded in the
composer's authoritative code, and a byte-exact `verified` reconstruction is
genuinely achievable.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **the author's own source is
public** (the path to `verified`); the **Ocean assembler directive key** (decoded
here); Wizball's source is a **full demo** (music at `$4600`, the HVSC rip is
just that region); and **don't confuse it with SIDM2's SF2 reconstruction**.

## Disassembly notes

Galway's `wizball.asm` (his own, (C) Ocean 1987) documents the entry table
(InitSound OUT of IRQ; Music0-2/Sound0-2 IN IRQ; Effect; Tune), the per-tune
LETTER/SPEED table, split lo/hi frequency tables (DFL/DFH), and a RefFilter
routine. Music at `ORG $4600`.

## Verification

**Facts confirmed against the author's own source + playback confirmed
(2026-07-13) — `status: in-progress`.** Two checks:
1. **Source-confirmed:** Galway's own `wizball.asm` (published by him) confirms
   the entry-point convention (InitSound / Music0-2), the multispeed tune table,
   `$4600` music origin, and the split-frequency-table structure.
2. **Playback confirmed:** the HVSC `Wizball.sid` traces with init `$63AC`, play
   `$6391`, **218 register writes / 50 frames**.

**Toward `verified` (bounded follow-up):** a full reassemble-and-diff was
attempted — translated Ocean→64tass (directive key in `quirks`) and got the
assembly from 99 → 25 errors; the remainder are Ocean-operator quirks (`^`
high-byte, `#`-truncation, immediate wrapping) in the demo-WRAPPER code, not the
music. Finishing that port + diffing the `$4600` music region against the HVSC
rip would make this the first composer-driver `verified` from the author's own
source. Data-format internals (instruments/effects) are `TODO`.

## Sources

See the `sources` array — Galway's own published sources (the authoritative
reference), the HVSC Wizball trace, and the DeepSID/SIDM2 pointers (the latter's
driver being a separate SF2 reconstruction).

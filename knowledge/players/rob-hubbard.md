# Rob Hubbard (player routine)

```json
{
  "id": "rob-hubbard",
  "name": "Rob Hubbard (player routine)",
  "aliases": ["Rob_Hubbard", "RH6"],
  "authors": ["Rob Hubbard"],
  "released": "~1985 (first used late 1984/early 1985)",
  "status": "verified",
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

**Core claims LOCALLY VERIFIED (2026-07-13) — `status: verified`.** Traced 4
real HVSC `.sid` files with `sidm2-sid-trace` (init/play from each PSID header,
50 PAL frames):
- **Rob Hubbard's own Monty on the Run loads at `$8000`** — matches McSweeney's
  commented disassembly. Plays (354 register writes). Commando (load $5000) also
  plays (374 writes).
- **The routine-family reuse is CONFIRMED empirically**: `Double_Dragon_3` by
  Andy Taylor (load $0800) and `New_Tune_1` by Adam Gilmore (load $8000) — both
  by *different composers* yet tagged `Rob_Hubbard` — both play (87 / 271
  writes). This is direct evidence for the card's central "routine used by ~50
  other composers" insight.
- **PSID play vectors vary per rip** ($8012/+$12 for Monty & Commando; $8006/+$6
  for Gilmore; $1E00 for Taylor) — confirming the "no fixed memory map,
  per-game" statement. The `+0/+3/+6` in `entry` is Hubbard's DRIVER-internal
  convention (from the disassembly), NOT the per-file PSID entry, which varies.

**RECONSTRUCTION VERIFIED (2026-07-13):** downloaded Anthony McSweeney's
published commented disassembly (`1xn.org/text/C64/rob_hubbards_music.txt`,
`.org $8000`), translated its directives to 64tass (`.org`→`*=`, `.byt`→
`.byte`, `label =*`→`label = *`, dropped the old `.obj`/`.end`) and assembled
it clean ($8000-$911E, 4383 bytes). Traced the result: the `$8000` jmp table
is `JMP $8009 / JMP $8042 / JMP $803C` (init/play/off — the documented
`+0/+3/+6` convention), and calling init `$8000` / play `$8003` produced **314
register writes / 50 frames** — a working reconstruction. So the published
disassembly assembles and plays, confirming the driver convention and
playability.

**Scope (honest):** McSweeney's listing is a reconstructed *generic* Hubbard
routine with a clean `+0/+3/+6` jmp table — it is NOT byte-identical to any one
game rip (the HVSC Monty rip, e.g., declares play at `$8012`), so this verifies
the driver CONVENTION + that the published reconstruction works, not a
byte-for-byte diff against a single original. Combined with the HVSC
routine-family traces above (Monty $8000, plus reused-by-Taylor/Gilmore files
all playing), the card's core claims — entry convention, playability, and
cross-composer reuse — are verified. Per-game data-format internals still vary
and are not decoded here.

**Independent near-byte-exact reconstruction (2026-07-18), via a different
route.** Rather than McSweeney's generic listing, disassembled the real HVSC
`Hubbard_Rob/Monty_on_the_Run.sid` directly with SIDdecompiler.exe (load
`$8000`, init `$8000`, play `$8012` — confirmed from the PSID header itself),
reassembled with 64tass, and byte-diffed against the original payload: **only
49 of 5,568 bytes differ (99.1% exact)**, clustered in two small regions
(`$84c4`-`$84fa`, ~35 bytes, and a handful near `$8566`/`$93b5`-`$9415`) —
almost certainly one or two instrument/pulse-parameter table(s) the
disassembler's default trace pass didn't fully resolve, not a wrong entry
point or memory-map error. Tracing both (50 frames): the real rip produces
354 register writes, the reconstruction 342 — nearly the same shape and cycle
timing throughout, diverging only on `osc2`/`osc3` frequency and
pulse-width values in exactly the frames where the ~49 differing bytes would
be read. This is markedly closer than McSweeney's generic reconstruction (that
one is not byte-aligned with this rip at all) and is the strongest lead yet
for a future pass to actually close: identify what belongs in the `$84c4`-
`$84fa` region (likely by comparing against Commando's real rip, already
locally available, to see if the same table exists there with different
values) and the trace should converge to an exact match.

## Sources

See the `sources` array — the McSweeney disassembly, VGMPF's driver page (the
reuser list), the ChipMusic thread, and the js-robb-player reimplementation.

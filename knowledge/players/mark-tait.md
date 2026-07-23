# Mark Tait (player routine)

```json
{
  "id": "mark-tait",
  "name": "Mark Tait (player routine)",
  "aliases": ["Mark_Tait"],
  "authors": ["Mark Tait"],
  "released": "~1987-1990 (per-game; Tiertex era)",
  "status": "verified",
  "platform": "Mark Tait's own hand-coded 6502 in-game sound driver (Tiertex in-house), per-game. Player-ID-fingerprinted across 31 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game (driver relinked/reloaded per title, not a fixed base). Confirmed via disassemble/reassemble/trace round-trip on 2 real files: 1943.sid loads/inits at $E000 (play $E012); Strider.sid loads/inits at $6BD0 (play $6C12). PSID header load address always equals the true SIDdecompiler-emulation Start address on both files (no hidden low-RAM workspace/dropped leading byte, per this project's gotcha 40/41 checks).",
    "zero_page": "TODO (not independently mapped this pass — the round-trip verified playback parity, not ZP usage).",
    "layout": "Per-game; the 2 verified files show a mostly-contiguous code+data block from load address to end-of-file, with a small drifted self-modified working-storage/table region tens of bytes into the file (see Verification) — same class of table found in many other players' disassemblies (JCH NewPlayer, DMC, CheeseCutter etc.), not otherwise documented per-field."
  },
  "entry": {
    "init": "Per-game (2 files confirmed via trace round-trip: 1943.sid $E000; Strider.sid $6BD0).",
    "play": "Per-game (2 files confirmed: 1943.sid $E012; Strider.sid $6C12, called in IRQ)."
  },
  "speed": "TODO (single vs multispeed not documented).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Mark Tait — English composer (handle 'Snoopy'; CSDb scener 4164; Compunet mailbox MT21). Active ~1987-1990. In-house SID composer at TIERTEX (English arcade-conversion house working US Gold / Capcom licences); hired full-time after his conversion of Capcom's 1943. Self-stated influences: Rob Hubbard and Martin Galway.",
    "Works (all Tiertex arcade ports, under the Mark_Tait tag): 1943: The Battle of Midway, Black Tiger, Human Killing Machine, Last Duel, Strider, Thunder Blade, Thunder Hawk, Dynasty Wars (1990), Indiana Jones and the Last Crusade, E-Motion, Superman, Spacebike, Protector, GTI Simulator, Dominion; Rolling Thunder (1987, he ARRANGED Junko Ozawa's arcade score).",
    "Hand-coded per-game 6502 driver of his own authorship, POSSIBLY written in Zeus assembler (qualified in his c64.com interview — treat as tentative). NOT a named/public editor; HVSC classes every file 'Normal built-in'. Later he composed on the Atari ST with Steinberg Pro-24 (MIDI) and coded his OWN utility to convert the MIDI into his C64 driver's format. Not in SIDId.",
    "JOHN HANCOCK link: Hancock was a separate English Tiertex composer. The 1 non-Tait file under the tag is Mercs.sid — HVSC says Mercs runs in Tait's driver (the other Hancock soundtracks use an unknown driver). So Hancock reused/was given Tait's Tiertex driver for Mercs — a shared STUDIO routine, not the same author. (HVSC cites no source for the Hancock credits — caveat.)",
    "No public disassembly or source (the realdmx RE repo has NO Tait folder; not in SIDId) — this project's own 2026-07-23 disassemble/reassemble/trace pass (see Verification) is the only one that exists. Entry points and playback are now register-write-verified on 2 real files; data-format/effects/ZP fields are still TODO (not attempted this pass, playback parity only)."
  ],
  "sources": [
    "c64.com interview #54 (primary bio/driver source): https://www.c64.com/gt_display_interview.php?interview=54",
    "VGMPF — Mark Tait: https://vgmpf.com/Wiki/index.php/Mark_Tait ; John Hancock (Mercs-in-Tait's-driver): https://vgmpf.com/Wiki/index.php/John_Hancock",
    "VGMPF — Tiertex: https://www.vgmpf.com/Wiki/index.php?title=Tiertex ; CSDb scener: https://csdb.dk/scener/?id=4164",
    "Lemon64 gameography: https://www.lemon64.com/games/list.php?list_individual=mark-tait",
    "Local dataset: 31 files tagged Mark_Tait, 2 composers (see knowledge/COVERAGE.md); the cross file is John_Hancock/Mercs.sid"
  ]
}
```

## Overview

The `Mark_Tait` tag is composer Mark Tait's ('Snoopy') own C64 sound driver,
written in-house at Tiertex for their arcade conversions (1943, Strider, Thunder
Blade, Rolling Thunder…), Player-ID-fingerprinted across 31 files.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he was **Tiertex's in-house
composer** (hired after his 1943 conversion; influences Rob Hubbard & Martin
Galway); the driver was **hand-coded, possibly in Zeus assembler** (tentative),
and he later drove it from Atari ST MIDI via his own converter; and the **John
Hancock / Mercs** link (Hancock's one file runs in Tait's studio driver — shared
routine, not same author).

## Disassembly notes

No public source (the realdmx RE repo doesn't cover Tait; not in SIDId).
This pass (2026-07-23) produced the project's own first disassembly, via
`SIDdecompiler.exe` + `64tass` on 2 real HVSC files — see Verification for
the full round-trip. One reusable gotcha hit and fixed: Strider.sid's
disassembly emitted `bit za9` for an undefined zero-page symbol at `$70da` —
same class of bug as this agent's gotcha 36/`hard_won_gotchas` — the real
bytes are a 3-byte absolute-mode `BIT $00A9` (`2C A9 00`) whose operand is
self-modified elsewhere; SIDdecompiler mislabeled it as a zero-page
reference. Fixed by replacing the symbolic line with an explicit
`.byte $2c, $a9, $00` (not by defining the symbol), which reassembled to the
exact original byte length. Effect encoding, order-list/pattern/instrument
formats, and ZP layout were NOT reverse-engineered this pass — see the
`data_format`/`zero_page` `TODO`s.

## Verification

**Full disassemble/reassemble/byte-diff/trace-diff pass (2026-07-23) —
`status` raised to `verified`.** Used `SIDdecompiler.exe -a<decimal load>
-z -d -c -v2` + `64tass` on 2 independent real HVSC `Mark_Tait` files (of
31 total), confirming the `-v2` map's own `Start:` address matches each
file's PSID-header load address exactly (no relocation trap, gotcha 40/41):

- **1943.sid** (load/init `$E000`, play `$E012`, 5 subtunes, 4,104-byte
  payload). Reassembled cleanly (no 64tass warnings) to **3,918 bytes**
  covering `$E000-$EF4D` — `SIDdecompiler`'s own trace-emulation window
  (default `-t 30000`, all 5 subtunes, and separately re-checked with `-C1`
  speculative mode) never touched the file's trailing **186 bytes
  ($EF4E-$EFC7)**, which hex-dump as genuine 6502 code (not padding) but are
  simply absent from the reassembly — a real, quantified, localized gap
  (matches this agent's entry-9 "silent truncation" pattern), not a
  reconstruction error. Byte-diff on the 3,918-byte covered region: initially
  **98.26% (68/3918 bytes differ)**, all 68 in a single cluster
  `$E083-$E084` + `$E35E-$E3EB` + `$E5F9`, every diverging byte marked
  read+write (`+`) or write-only (`w`) in the `-v2` map — the same
  drifted-working-storage pattern as `dmc`/`cheesecutter`/others. Traced
  BOTH the un-patched and patched builds (`sidm2-sid-trace.exe`, all 5
  subtunes, up to 150 frames/subtune ≈3s PAL) to confirm rather than assume
  deadness (gotcha 41): un-patched, frame-0 `osc3_pw_lo`/`osc3_pw_hi` and
  subsequent frames' oscillator writes genuinely diverged (e.g. `$B9,$09` in
  the real file vs `$E0,$06` in the reassembly) — **not dead**. Patched all
  68 bytes directly into the assembled `.prg` (original PSID payload bytes,
  not the decompiler's post-execution snapshot) → **byte-diff 100.0000%
  exact on the covered region**; re-traced all 5 subtunes at 150 frames each
  — **every trace identical to the original except the tool's own echoed
  filename** (1,483 register writes/150 frames on subtune 0 alone, checked
  byte-for-byte via `diff`, not `diff_traces` — the MCP tool wasn't
  registered this session, see gotcha 8's substitute method).
- **Strider.sid** (load/init `$6BD0`, play `$6C12`, 11 subtunes, 5,256-byte
  payload, a different game/load-address entirely from 1943 — a real
  cross-file check, not the same build). Reassembled to the **full original
  5,256 bytes** at `$6BD0-$8057` (after the `bit za9` fix above — no
  under-coverage this time). Byte-diff before patching: **98.42%
  (83/5256 bytes differ)**, again entirely in `+`/`w`-marked working-storage
  clusters (`$6CA7-$71DF`, `$7EB4-$7EC0`). Traced un-patched vs. original:
  genuinely diverged from frame 0 (`osc3_freq_lo` `$73`→real vs `$46`→recon,
  etc.) — confirmed not dead, same as 1943. Patched all 83 bytes into the
  assembled `.prg` → **byte-diff 100.0000% exact, full file** (5,256/5,256).
  Re-traced 5 subtunes (0,1,2,5,10) at up to 150 frames each — **every trace
  identical to the original** (905 writes/150 frames on subtune 0 alone).
- **Conclusion**: Strider.sid is a complete, 100.0000% byte-exact and
  register-write-exact reconstruction — meets this project's `verified` bar
  outright (matches `dmc`/`roland-hermans` precedent). 1943.sid is
  byte-exact and trace-exact for the **95.5% of its payload
  (3,918/4,104 bytes)** that any traced control flow (5 subtunes × 30,000
  play calls, plus `-C1` speculative) ever reaches; the remaining 186 bytes
  ($EF4E-$EFC7) are real code SIDdecompiler's emulation simply never
  executed and could not be reconstructed or tested — left `TODO`, not
  guessed. Given one of two independently-verified files (different games,
  different load addresses) is a complete, exact match, and the per-game
  entry-point convention + working-storage-table quirk are now confirmed
  facts (not assumptions) on both, `status` is raised to `verified` with
  this gap explicitly carried forward. Scratchpad build files (not checked
  in): `1943.asm`/`1943.prg`, `Strider.asm`/`Strider.prg`,
  `1943_patched.prg`/`Strider_patched.prg`, trace logs — in this session's
  scratchpad directory, not durably saved to the repo.
- **Next step for a future pass**: (1) identify the 186-byte untouched tail
  of 1943.sid ($EF4E-$EFC7) — likely reachable only via a specific in-game
  event this trace window never triggers (e.g. a rarely-used subtune-select
  or restart path); (2) do the ZP/data-format walk (order list, patterns,
  instruments, effect encoding) — this pass established playback parity
  only, per `disassemble-a-player.md`'s step 6 vs. steps 3-5.

## Sources

See the `sources` array — the c64.com interview (primary), VGMPF (Tait, Hancock,
Tiertex), CSDb, and Lemon64.

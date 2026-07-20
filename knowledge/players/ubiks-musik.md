# Ubik's Musik

```json
{
  "id": "ubiks-musik",
  "name": "Ubik's Musik",
  "aliases": ["Ubik's_Musik", "Ubik's Music", "Ubiks Music"],
  "authors": ["Dave Korn (Ubik)"],
  "released": "1987 (Firebird)",
  "status": "in-progress",
  "platform": "Native C64, UK commercial budget product (Firebird, £2.99). Later spread widely in the PD scene. Closed source.",
  "csdb_release": 39950,

  "memory": {
    "load_address": "Relocatable; compiled tunes default to running the player via jmp $C600 (SYS 50688).",
    "zero_page": "TODO",
    "layout": "TODO. A typical game soundtrack is ~7 KB."
  },
  "entry": {
    "init": "TODO (compiled tunes often lack a cleanly separated init/play — prg2sid / manual PSID-header work is needed to package them).",
    "play": "Player entry at ~$C600 (SYS 50688), relocatable. LOCALLY CONFIRMED: a real HVSC Ubik's file traced with init=$C601, play=$C64E, 269 register writes/50 frames — the player does live at $C600 as documented."
  },
  "speed": "TODO. Uses heavy raster time.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "Up to 32 instruments; up to 26 songs. A song can double as a sound effect (play a song on two voices + SFX on the third).",
    "wavetable": "Present (wavetable drums). TODO: format.",
    "pulsetable": "TODO (has PWM oscillator).",
    "filtertable": "TODO (HBL filter, ADSR)."
  },
  "effects": {
    "encoding": "TODO",
    "commands": {
      "(feature-level, per VGMPF)": "PWM oscillator, HBL filter, ADSR, logarithmic vibrato, waveform swaps, wavetable drums, sustain-based echo."
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Commercial budget product: written by Dave Korn (handle 'Ubik', from the 1969 Philip K. Dick novel; his Compunet avatar), published by Firebird in 1987 for £2.99 — later widely used in the PD scene. Korn worked alongside Rob Hubbard at Firebird and scored Thrust II (1988).",
    "TECHNIQUE LINEAGE to Rob Hubbard (not shared code): at release it was 'closest to Rob Hubbard's driver' and reportedly the FIRST editor to support Hubbard's logarithmic vibrato, waveform swaps and wavetable drums. A stylistic/technique link to [[rob-hubbard]], not a code derivation (unverified) — noted in prose, not wired as a hard edge.",
    "SOURCE CAVEAT: the CSDb id SIDId references (39950) is a CRACK ('Ubiks Music' by Hotline, cracked by Sledgehammer, 3 Oct 1987), not a first-party Firebird release page. Usable as the tool's CSDb anchor but describe it accurately.",
    "Packaging gotcha: many compiled Ubik's tunes lack a clean separated init/play, so converting them to standalone .sid needs prg2sid or manual PSID-header work.",
    "Version history UNKNOWN (no versioned releases documented). Replay memory map / ZP / data format / effect encoding: TODO. 263 files across 28 composers."
  ],
  "sources": [
    "VGMPF Ubik's Musik (author, Firebird, £2.99, capacity 26 songs/32 instr, synthesis features): https://www.vgmpf.com/Wiki/index.php?title=Ubik's_Musik",
    "Lemon64 'ubik's music tracker to sid' (player mechanics: jmp $C600, packaging): https://www.lemon64.com/forum/viewtopic.php?t=39350",
    "Mancunian1001 'Sultans of SID' Ubik profile (Dave Korn / handle origin): https://mancunian1001.wordpress.com/2016/12/20/the-sultans-of-sid-20-ubik/",
    "sidid:Ubik's_Musik (author Dave Korn (Ubik), 1987 Firebird, CSDb 39950 — a crack)",
    "Local dataset: 263 files tagged Ubik's_Musik (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Ubik's Musik is a native C64 music editor by **Dave Korn ("Ubik")**, published
by **Firebird** in 1987 as a £2.99 budget product (and later a PD-scene
staple). Korn worked alongside Rob Hubbard at Firebird, and Ubik's Musik was
notable as the first editor to bring Hubbard-style synthesis (logarithmic
vibrato, waveform swaps, wavetable drums) to a general tool. 263 files here
across 28 composers.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **Hubbard technique lineage** (a
style link to [rob-hubbard](rob-hubbard.md), not shared code); the **crack CSDb
link** caveat; and the **packaging gotcha** (compiled tunes lack clean init/play).
The one firm replay fact is the default `jmp $C600` player entry.

## Disassembly notes

Little published beyond the default `jmp $C600` (SYS 50688) entry and the
capacity/feature list. Disassembling a Ubik's-tagged `.sid` and tracing via
`sidm2-siddump` is the route to the ZP/format facts.

## Verification

**Player location LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.**
Traced a real HVSC Ubik's Musik `.sid` with `sidm2-sid-trace`: init `$C601`,
play `$C64E`, **269 register writes / 50 frames** — confirming the documented
`~$C600` (SYS 50688) player entry and that it plays.

**Disassembly/reassembly pass (2026-07-20).** Target file:
`MUSICIANS/S/Stone_James/Jax_Music_Demo.sid`. PSID header: load `$B134`
(decimal 45364), init `$C600`, play `$C603`, subtunes 5. Disassembled with
`SIDdecompiler.exe ... -a45364 -z -d -c -v1`; reassembled with `64tass.exe
-a --cbm-prg`. Byte-diff: **98.97%** (7612/7691 bytes match), 79 bytes
diverge in the single contiguous region `$C71B-$C7B1`. The `-v2` memory map
marks that region read+write (`+`) — a per-voice working table that
SIDdecompiler captured as post-execution values rather than cold-start bytes.

Trace-diff on the unpatched reassembly: **diverges at index 0** — the
original writes `osc1_*` at frame 0, the reassembly writes `osc3_*`, and
totals differ (85 vs 82 writes/50 frames). After patching all 79 differing
bytes in the rebuilt `.prg` back to the original cold values, the trace
became **register-write exact** (85/85 writes, `diff_traces` reports `match:
true`). This confirms the disassembly itself is structurally correct and the
only load-bearing gap is the drifted working table.

Status remains **`in-progress`** because the reassembly is not yet byte-exact
without manual patching. ZP map, data format, and effect encoding remain
`TODO`.

**Next step:** patch the `.asm` source for the `$C71B-$C7B2` drifted table
back to pristine cold-start bytes (the 3-voice working table output by
`SIDdecompiler`) and reassemble, confirming a standalone trace-exact build;
then repeat on a second Ubik's file to check whether the drift pattern is
player-family-wide or file-specific.
- Exact byte-level patch table for `Jax_Music_Demo.sid` (durable, not scratchpad): `knowledge/players/reconstructions/ubiks-musik.md`.

## Sources

See the `sources` array — VGMPF, the Lemon64 conversion thread, the Sultans of
SID profile, and the cached SIDId entry (a crack).

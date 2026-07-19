# soundmonitor — reconstruction manifest

See `knowledge/players/soundmonitor.md` for the full Verification narrative
(the relocation-target discovery is the valuable finding — read that first,
and see `lessons_learned` entry 31 in `.claude/agents/sid-player-verify.md`).
This file records the residual byte-level diff, recomputed directly from the
original HVSC payloads and the surviving reassembled `.prg` files.

All three files were disassembled relocated to `-a704` (decimal for `$02C0`
— the `-v2` map's own lowest-touched-address "Start:" line, NOT the PSID
header's own load address) because this player keeps ~20 bytes of fixed
low-RAM workspace below the song data's load address; relocating to the
PSID load address directly produces a 64K-wrapped, silently-corrupted
reassembly (see the card and lessons_learned #31).

## File 1: `MUSICIANS/F/Fun_Fun/Fun_Mix.sid`

PSID load `$a000`, init `$c000`, play `$c475`, payload 11,220 bytes.

**Reassembly vs. pristine payload (compared at each byte's true absolute
address, since the reassembly's own base is `$02c0` not `$a000`): 0/11220
bytes differ (100.0000%).**

## File 2: `MUSICIANS/F/Fun_Fun/Dance_at_Night_remix.sid`

PSID load `$7000`, init `$c000`, play `$c475`, payload 23,546 bytes.

**Reassembly vs. pristine payload: 0/23546 bytes differ (100.0000%).**

## File 3: `MUSICIANS/T/Taxim/Soundmonitor_Projekt_1.sid`

PSID load `$a000`, init `$c000`, play `$c020` (this file's alternate
bank-switch-wrapper play entry, distinct from the other two files' direct
`$c475` dispatcher), payload 11,220 bytes.

**Reassembly vs. pristine payload: 1/11220 bytes differ (99.9911%):**

```
$c00f: pristine=$01  decompiler-drifted=$00
```

Confirmed dead: this is the init routine's own "ready" flag, unconditionally
overwritten to `$01` at cold start before `play` ever reads it — the
trace-diff (20 frames, including this file's distinct `$c020` entry) is
nonetheless exact.

All three figures recomputed directly from the surviving `Fun_Mix_orig.prg`/
`Fun_Mix_id.prg`, `Dance_orig.prg`/`Dance.prg`, and `Taxim1_orig.prg`/
`Taxim1.prg` scratchpad files, matching the card's own reported percentages
exactly.

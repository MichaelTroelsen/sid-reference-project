# soundcontrol — reconstruction manifest

See `knowledge/players/soundcontrol.md` for the full Verification narrative.
This file records the exact commands, relocation addresses, and (for
Graffiti_Man) the exact zeroed byte range used to reach a
register-write-exact trace-diff on 3 independent real HVSC files.

The key discovery this card added: SIDdecompiler's own `-v2` memory map
reports a fixed low-page scratch-RAM workspace (`Start:` ~`$033d`-`$0340`)
BELOW every tested file's own PSID load address — the gotcha-40 class trap
(relocate to that Start address, not the PSID load address, or 64tass
silently wraps). One extra wrinkle specific to this player: SIDdecompiler's
reassembly bakes its own last-observed runtime snapshot of that below-load
workspace into the output, even though that workspace was never part of the
real file's payload at all — so it should genuinely start at zero (as the
trace tool's own memory model already assumes for any address no loaded
file ever touches). This mattered for one of the three files.

## Commands (same shape for all three files)

```
SIDdecompiler.exe <file>.sid -o<file>.asm -a<decimal Start addr> -z -d -c -v2 > <file>_v2.log
64tass.exe -a --cbm-prg -o <file>.prg <file>.asm
```

`<decimal Start addr>` is `-v2`'s own reported "Start:" line for that file,
converted to decimal (gotcha 1) — NOT the PSID header's load address
(gotcha 40).

## File 1: `MUSICIANS/G/Gehrmann_Holger/Graffiti_Man.sid`

PSID load `$3000`, init `$3400` (JMP stub → `$3c3d`), play `$3403` (JMP stub
→ `$3c58`), payload 3,177 bytes. SIDdecompiler `-v2` Start: `$0340` (decimal
`832`), End: `$3ea3`.

- Byte-diff of the reassembled `.prg`'s `[$3000, $3000+3177)` range against
  the pristine payload: **100.0000% (0/3177 diffs)** — no patching needed
  for the payload itself.
- Trace-diff (50 frames, init `$3400`/play `$3403`): the UNPATCHED
  reassembly (SIDdecompiler's own captured workspace bytes at `$0340-$2fff`
  and `$3c69-$3ea3`, i.e. everything outside the real payload range, left
  as-is) diverges starting frame 3 (extra/wrong `osc3_freq_hi`/`osc3_freq_lo`
  writes — a false failure from stale runtime-snapshot seed data, not a
  real code difference).
- Fix: zero every byte of the reassembled `.prg` OUTSIDE `[$3000, $3c69)`
  (i.e. `$0340-$2fff` and `$3c69-$3ea3`) before tracing — this is exactly
  the memory a real cold-boot / the trace tool's own model would already
  hold as zero, since no loaded file ever puts real data there. After
  zeroing: **register-write-exact, 0 diff lines over 50 frames.**

## File 2: `MUSICIANS/G/Gehrmann_Holger/Soundcontrol_2.sid`

PSID load `$9000`, init `$9000` (== load), play `$9a32`, payload 3,292
bytes. SIDdecompiler `-v2` Start: `$0340` (decimal `832`), End: `$c418`
(a second workspace block at `$c3xx-$c418`, free RAM under BASIC ROM,
holding a per-voice pitch-slide accumulator at `$c400-$c403,X` plus 2 flag/
counter bytes at `$c417`/`$c418`).

- Byte-diff of `[$9000, $9000+3292)`: **100.0000% (0/3292 diffs)**.
- Trace-diff (50 frames, init `$9000`/play `$9a32`): register-write-exact
  **even without zeroing** the below-load/above-payload workspace — this
  file's own `init` fully sets up that workspace before it's ever read, so
  SIDdecompiler's captured snapshot happened to already be correct (or at
  least not load-bearing-wrong). Zeroing `[$0340,$9000)` + `[$9cdc,$c418)`
  as a matched control also traces exact, confirming the workspace isn't
  read before write here.

## File 3: `MUSICIANS/G/Gehrmann_Holger/Top_Secret.sid`

PSID load `$9800`, init `$9f80`, play `$9a32` (same absolute play address
as file 2, despite a different load address and only ~93.6% of the
`$9a00-$c418` driver region being byte-identical between the two files —
see `soundcontrol.md`'s `memory.layout` note). Payload 1,945 bytes.
SIDdecompiler `-v2` Start: `$033d` (decimal `829`, 3 bytes earlier than
files 1/2 — a small per-build variance in the same workspace region),
End: `$c418`.

- Byte-diff of `[$9800, $9800+1945)`: **100.0000% (0/1945 diffs)**.
- Trace-diff (50 frames, init `$9f80`/play `$9a32`): register-write-exact
  **even without zeroing**, same as file 2.

## Net result

3/3 files: 100.0000% byte-exact on payload, register-write-exact trace
over 50 frames. No patch table needed (unlike `digitalizer.md`/
`cheesecutter.md`) — the only correction required was the relocation-base
fix (gotcha 40) plus, for one of three files, zeroing non-payload workspace
bytes before tracing (a methodology fix, not a code patch).

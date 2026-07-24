# music-magic — reconstruction manifest

See `knowledge/players/music-magic.md` for the full Verification narrative.
This file records the exact byte-level facts, recomputed directly from the
original HVSC payloads and the reassembled `.prg` files.

## Method (identical for all 9 files)

- Disassemble: `SIDdecompiler.exe <file>.sid -o<f>.asm -a4516 -z -d -c -v1`
  (`-a4516` = decimal for the shared PSID load address `$11a4`).
- Reassemble: `64tass.exe -a --cbm-prg -o <f>.prg <f>.asm`.
- Trace: `sidm2-sid-trace.exe <prg> 600 11a4 19e2` (init `$11a4`, play `$19e2`),
  compared against the same trace of a `.prg` rebuilt from the pristine SID
  payload.

All 9 files share the exact same player: load `$11a4`, init `$11a4`,
play `$19e2`, SID base `$d400`, single subtune. Zero-page workspace spans
`$14-$8e`.

## Byte-diff summary (raw reassembly vs pristine payload)

| file | payload | reasm | diffs | match |
|------|--------:|------:|------:|------:|
| Africa | 4296 | 4296 | 26 | 99.3948% |
| Eleanor_Rigby | 4466 | 4365 | 36 | 99.1753% |
| Maniac | 4394 | 4394 | 25 | 99.4310% |
| Nut_Cracker | 4261 | 4261 | 23 | 99.4602% |
| Money | 4240 | 4240 | 23 | 99.4575% |
| Rami_Tune1 | 4192 | 4137 | 23 | 99.4440% |
| Super_Bunny_Theme | 4170 | 4170 | 22 | 99.4724% |
| Every_Breath | 4505 | 4439 | 28 | 99.3692% |
| Andy_Griffith_Show | 4732 | 4732 | 26 | 99.4505% |

Every diverging byte falls inside a `-v2`-map `+`-marked (read+write /
self-modified) address. Patching the diffs back to their pristine cold-start
values makes every file **100.0000% byte-exact** (over the reassembled code
region) and **register-write-exact over 600 frames**.

## Self-modified workspace addresses (union across all 9 files)

```
$1b3d  $1ba3  $2015  $206c-$2074  $2077  $2084-$208c  $208f
$209f-$20a4  $20b5  $20b7-$20c2
```

`$1ba3` and `$1b3d` are self-modified **instruction operands** inside the
play routine; the rest (`$2015`, `$206c`-`$20c2`) is a contiguous per-voice
working-state table that `init` sets up and `play` rewrites each frame.

### The two operand bytes that actually affect a trace

- `$1ba3` — operand of `lda $1ba3` / `inc $1ba3` (a frame-parity flag,
  `and #$01`). Pristine cold value `$31` on all 9 files.
- `$1b3d` — operand of `eor #$ff` at `$1b3c`, self-toggled between `$ff`/`$00`
  via `lda $1b3d+1 / eor #$ff / sta $1b3d+1`. Pristine cold value `$ff` on all
  9 files. SIDdecompiler captured a drifted `$00` here for **Rami_Tune1** and
  **Super_Bunny_Theme** only; for the other 7 files it happened to capture the
  correct `$ff`.

Patch-isolation confirmed `$1b3d` is the *sole* cause of trace divergence on
those two files: patching `$1b3d` alone → trace-exact; patching everything
*except* `$1b3d` → still fully divergent. All other diverging bytes are dead
workspace (overwritten before first read), which is why 7 of 9 files traced
register-write-exact with no patching at all.

## Trailing unreferenced data (SIDdecompiler coverage shortfall)

Three files reassemble shorter than the original payload — a trailing block
SIDdecompiler's emulation never touched (`-v2` map `End:` equals the
reassembly end; all tail bytes marked `?`), confirmed harmless by the
600-frame trace being exact regardless:

```
Eleanor_Rigby  $22b1-$2315  (101 bytes)
Every_Breath   $22fb-$233c  ( 66 bytes)
Rami_Tune1     $21cd-$2203  ( 55 bytes)
```

This is the same class of genuinely-never-accessed tail data documented in
the agent's `lessons_learned` entry 9 — not a disassembly defect.

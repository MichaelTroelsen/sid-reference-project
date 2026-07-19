# roland-hermans — reconstruction manifest

See `knowledge/players/roland-hermans.md` for the full Verification
narrative. This file records the byte-level patch data recomputed directly
from the original HVSC payloads and the surviving reassembled `.prg` files.

## File: `Advanced_Space_Battle.sid`

load `$1000`, init `$1780`, play `$1783`, 8 subtunes, payload 27,641 bytes.

**Unpatched first-pass reassembly: 106/27641 bytes differ.** The pattern is
the exact `lessons_learned` #19 signature (a `<label>+1`-suffixed operand
renamed in place instead of given a proper anchor+offset assignment — every
downstream reference then resolves to the OPCODE's address, one byte too
low, instead of the operand's): every single diff below is the decompiler's
value minus exactly 1 from the pristine byte, and the same ~14-entry pattern
repeats 8 times at a fixed stride (once per subtune's copy of the same
routine):

```
$1980: pristine=$2b  decompiler(-1 bug)=$2a
$1986: pristine=$c7  decompiler(-1 bug)=$c6
$198c: pristine=$bb  decompiler(-1 bug)=$ba
$1996: pristine=$d5  decompiler(-1 bug)=$d4
$19c3: pristine=$d5  decompiler(-1 bug)=$d4
$19de: pristine=$e3  decompiler(-1 bug)=$e2
$1a46: pristine=$3d  decompiler(-1 bug)=$3c
$1a4c: pristine=$3e  decompiler(-1 bug)=$3d
$1ae3: pristine=$d5  decompiler(-1 bug)=$d4
$1b0a: pristine=$c7  decompiler(-1 bug)=$c6
$1bca: pristine=$d7  decompiler(-1 bug)=$d6
$1bdc: pristine=$d7  decompiler(-1 bug)=$d6
$1be2: pristine=$70  decompiler(-1 bug)=$6f
$1d7d: pristine=$72  decompiler(-1 bug)=$71
$1d89: pristine=$70  decompiler(-1 bug)=$6f
```
...and the same pattern repeats verbatim (same relative offsets within each
copy) at base addresses `$2767`, `$35d1`, `$4524`, `$5363`, `$6227`, `$6f9c`
— 6 more of the 8 subtune copies (one subtune's copy starts mid-list above;
see the full 106-address dump in this project's git history / re-derivable
directly from `original.prg` vs a fresh `asb.prg` reassembly if ever needed
again). Fixed by giving each of the 10 renamed `+1` symbols a proper
`<name>_1 = <anchor> + 1` assignment instead of a bare rename (see the
card's own `quirks` array and `lessons_learned` #19 for the full mechanism).

**Final reassembly (`asb3.prg`) vs. pristine payload: 0/27641 bytes differ
(100.0000%)** — confirmed by direct byte-diff (compared over the
original-file-length region only; the reassembly is longer, 40,787 bytes,
because of untouched high-RAM workspace the driver's own execution model
extends into — harmless for byte-diffing per the card's own note).

## File: `Sleepwalker.sid`

load `$1000`, init `$1000`, play `$1003`, 4 subtunes, payload 5,601 bytes.

**Unpatched first-pass reassembly: 64/5601 bytes differ (98.8573%)**, a
single contiguous cluster `$103f-$10a2` (a per-subtune init/state table):

```
$103f: pristine=$00  decompiler-drifted=$04
$1042: pristine=$01  decompiler-drifted=$02
$1043: pristine=$00  decompiler-drifted=$0b
$1044: pristine=$00  decompiler-drifted=$09
$1045: pristine=$00  decompiler-drifted=$08
```
(full 64-entry list re-derivable directly by byte-diffing `sleep_original.prg`
against a fresh `sleep.asm`/`sleep.prg` reassembly at `-a4096`, same command
as the card documents — only the first 5 shown here, the rest follow the
same cluster through `$10a2`).

**After patching the whole `$103f-$10a2` cluster: 99.8750% (7 bytes
remained)** — these 7 are the ones that mattered: patching them closed a
real trace divergence (`filter_mode_volume` desynced to `$3F` instead of
`$0F` from cycle 1279 onward, all 4 subtunes) that the big-cluster patch
alone did NOT fix — proof that not all self-modified-looking bytes in this
cluster were dead, unlike the same category on `Advanced_Space_Battle.sid`.

**Final reassembly (`sleep_patched2.prg`) vs. pristine payload: 0/5601
bytes differ (100.0000%)** — confirmed by direct byte-diff.

Both files' final reassemblies trace register-write-identical to the
original — `Advanced_Space_Battle.sid` across all 8 subtunes, `Sleepwalker.sid`
across all 4 — recomputed directly from the surviving scratchpad files, not
transcribed from a report.

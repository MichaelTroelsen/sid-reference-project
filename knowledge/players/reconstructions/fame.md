# fame — reconstruction manifest

See `knowledge/players/fame.md` for the full Verification narrative. This
file records the exact byte-level divergences, recomputed directly from the
original HVSC payloads and the reassembled `.prg` files built this pass.

## File 1: `MUSICIANS/F/FAME/Hendriks_Michael/Sound_Routine_f_4_1_0.sid`

PSID load/init `$104c`, play `$10ef`, payload 2,836 bytes (after stripping the
embedded 2-byte load-address word — the header's own `load address` field is
0). `SIDdecompiler`'s own `-v2` map reported `Start: $0236` — 3,606 bytes
below the real load address — even though only 2 bytes in that whole gap
($0236-$0237) were ever touched (read-only, most likely incidental/noise, not
a real fixed workspace). Relocating with `-a<decimal for $104c>` (the naive,
by-the-book choice) produces a `.asm` whose origin pseudo-op is right but
whose **body** is the tool's full captured range starting at `$0236` — i.e.
3,606 bytes of leading zero-fill get emitted as if they belonged at the
declared origin, pushing every real byte (including `init`) 3,606 bytes past
where it needs to land. Fix: relocate with `-a<decimal for $0236>` (566)
instead — this makes the `.asm`'s declared origin match the tool's own
internal capture start, and `init`/`play` land exactly on `$104c`/`$10ef`
after reassembly.

76 bytes differ between the pristine payload and the reassembled `.prg`
(match 97.3202%, 2760/2836) — **all 76 fall on `-v2`-map write-touched
(`_`/`B`/`+`) addresses**, and a 300-frame `sidm2-sid-trace.exe` trace of the
reassembly is **register-write-identical to the original with zero patching**
(1,523 SID writes, byte-for-byte and cycle-for-cycle exact) — i.e. all 76 are
confirmed dead (self-modified operands/working-storage overwritten before
ever being read, for this file's own execution path). Full byte list:

```
$1207: pristine=$ff  decompiler-drifted=$01
$1211: pristine=$ff  decompiler-drifted=$e0
$126e: pristine=$00  decompiler-drifted=$f2
$1273: pristine=$00  decompiler-drifted=$01
$127c: pristine=$00  decompiler-drifted=$08
$12a1: pristine=$ff  decompiler-drifted=$58
$12a4: pristine=$00  decompiler-drifted=$f8
$15c7: pristine=$00  decompiler-drifted=$27
$15d0: pristine=$00  decompiler-drifted=$16
$15d9: pristine=$00  decompiler-drifted=$03
$16f1: pristine=$00  decompiler-drifted=$10
$16f2: pristine=$00  decompiler-drifted=$7b
$16f3: pristine=$00  decompiler-drifted=$b8
$16f4: pristine=$00  decompiler-drifted=$27
$16f5: pristine=$00  decompiler-drifted=$05
$16f6: pristine=$00  decompiler-drifted=$41
$16f7: pristine=$00  decompiler-drifted=$3e
$16f8: pristine=$00  decompiler-drifted=$1c
$16f9: pristine=$00  decompiler-drifted=$43
$16fa: pristine=$00  decompiler-drifted=$78
$16fb: pristine=$00  decompiler-drifted=$28
$16fc: pristine=$00  decompiler-drifted=$40
$16fd: pristine=$00  decompiler-drifted=$03
$16fe: pristine=$00  decompiler-drifted=$03
$1700: pristine=$00  decompiler-drifted=$04
$1701: pristine=$00  decompiler-drifted=$04
$1702: pristine=$00  decompiler-drifted=$02
$1703: pristine=$00  decompiler-drifted=$05
$1704: pristine=$00  decompiler-drifted=$06
$1705: pristine=$00  decompiler-drifted=$05
$1709: pristine=$00  decompiler-drifted=$86
$170a: pristine=$00  decompiler-drifted=$86
$170b: pristine=$00  decompiler-drifted=$53
$170c: pristine=$00  decompiler-drifted=$ff
$170d: pristine=$00  decompiler-drifted=$ff
$170e: pristine=$00  decompiler-drifted=$f0
$170f: pristine=$00  decompiler-drifted=$09
$1710: pristine=$00  decompiler-drifted=$09
$1711: pristine=$00  decompiler-drifted=$41
$1712: pristine=$00  decompiler-drifted=$80
$1713: pristine=$00  decompiler-drifted=$80
$1714: pristine=$00  decompiler-drifted=$20
$1715: pristine=$00  decompiler-drifted=$04
$1716: pristine=$00  decompiler-drifted=$04
$1717: pristine=$00  decompiler-drifted=$02
$171a: pristine=$00  decompiler-drifted=$36
$171b: pristine=$00  decompiler-drifted=$05
$171c: pristine=$00  decompiler-drifted=$05
$171d: pristine=$00  decompiler-drifted=$05
$171e: pristine=$00  decompiler-drifted=$40
$171f: pristine=$00  decompiler-drifted=$41
$1720: pristine=$00  decompiler-drifted=$40
$1721: pristine=$00  decompiler-drifted=$fe
$1722: pristine=$00  decompiler-drifted=$ff
$1723: pristine=$00  decompiler-drifted=$fe
$1724: pristine=$00  decompiler-drifted=$ff
$1725: pristine=$00  decompiler-drifted=$01
$1726: pristine=$00  decompiler-drifted=$fd
$1727: pristine=$00  decompiler-drifted=$ef
$1728: pristine=$00  decompiler-drifted=$15
$1729: pristine=$00  decompiler-drifted=$47
$172a: pristine=$00  decompiler-drifted=$1a
$172b: pristine=$00  decompiler-drifted=$1b
$172c: pristine=$00  decompiler-drifted=$1b
$1730: pristine=$00  decompiler-drifted=$06
$1731: pristine=$00  decompiler-drifted=$02
$1732: pristine=$00  decompiler-drifted=$14
$1733: pristine=$00  decompiler-drifted=$3d
$1734: pristine=$00  decompiler-drifted=$0c
$1735: pristine=$00  decompiler-drifted=$09
$173d: pristine=$00  decompiler-drifted=$02
$173f: pristine=$00  decompiler-drifted=$01
$1740: pristine=$00  decompiler-drifted=$03
$1741: pristine=$00  decompiler-drifted=$01
$1747: pristine=$00  decompiler-drifted=$04
$1748: pristine=$00  decompiler-drifted=$05
```

No patch was needed to close the trace on this file — listed for completeness
and as a baseline to compare File 2's (load-bearing) divergence against.

## File 2: `MUSICIANS/F/FAME/Hendriks_Michael/Sphinx_2.sid`

PSID load/init `$1047`, play `$107f`, payload 2,417 bytes. `-v2` Start here
equals the real load address ($1047) — no leading-gap issue on this file.
Reassembly came out 2 bytes short (2,415 vs 2,417 — SIDdecompiler's default
30,000-call trace window never touched the file's final 2 bytes, `$19b6-$19b7`
= `fd 00`; a small, explicitly-localized, unresolved tail gap, not patched).

37 bytes differ inside the 2,415-byte overlap (match 98.4679% before patch).
Unlike File 1, **patching was required** — one byte (`$1588`) is the
self-modified immediate operand of `lda #$3c`/pristine `lda #$74` in the
filter-slope routine (`SIDdecompiler` prints the label `l1588` one byte off
from where 64tass actually resolves it — the true opcode is at `$1587`, the
label marks the operand; confirm via `64tass --labels=`, don't trust the
printed label text) and is read *before* it is first written on this file's
own init/first-play path — the classic "same table, different file, this one
actually reads the drifted default" case (cf. `dmc.md`'s File 2). The other 36
bytes are a contiguous working-storage/table block at `$1690-$16e7` (same
relative table shape as File 1's `$16f1-$1748` cluster, offset by the 5-byte
load-address difference between the two files — same underlying table).
Patching all 37 bytes back to pristine and re-tracing closed the trace to
**zero diff** against the original (300 frames, `sidm2-sid-trace.exe`,
`diff <(tail -n +2 orig.csv) <(tail -n +2 patched.csv)` empty). Full list:

```
$1588: pristine=$74  decompiler-drifted=$3c
$1690: pristine=$01  decompiler-drifted=$05
$1692: pristine=$02  decompiler-drifted=$08
$1695: pristine=$86  decompiler-drifted=$e4
$1697: pristine=$e8  decompiler-drifted=$b4
$1698: pristine=$3f  decompiler-drifted=$26
$169a: pristine=$06  decompiler-drifted=$08
$169b: pristine=$45  decompiler-drifted=$36
$169e: pristine=$09  decompiler-drifted=$01
$16a1: pristine=$2d  decompiler-drifted=$12
$16a4: pristine=$00  decompiler-drifted=$01
$16a7: pristine=$0a  decompiler-drifted=$f0
$16ac: pristine=$20  decompiler-drifted=$24
$16ad: pristine=$48  decompiler-drifted=$44
$16ae: pristine=$03  decompiler-drifted=$00
$16af: pristine=$03  decompiler-drifted=$00
$16b0: pristine=$0f  decompiler-drifted=$08
$16b1: pristine=$03  decompiler-drifted=$01
$16b4: pristine=$03  decompiler-drifted=$0f
$16b5: pristine=$13  decompiler-drifted=$08
$16b6: pristine=$07  decompiler-drifted=$12
$16b7: pristine=$ff  decompiler-drifted=$fe
$16b8: pristine=$ff  decompiler-drifted=$fe
$16c1: pristine=$05  decompiler-drifted=$01
$16c4: pristine=$d6  decompiler-drifted=$58
$16c5: pristine=$a1  decompiler-drifted=$66
$16c7: pristine=$0f  decompiler-drifted=$0b
$16c8: pristine=$0f  decompiler-drifted=$05
$16cf: pristine=$6e  decompiler-drifted=$6d
$16d0: pristine=$82  decompiler-drifted=$84
$16d5: pristine=$01  decompiler-drifted=$05
$16d7: pristine=$01  decompiler-drifted=$03
$16de: pristine=$03  decompiler-drifted=$01
$16df: pristine=$03  decompiler-drifted=$01
$16e0: pristine=$0f  decompiler-drifted=$17
$16e4: pristine=$01  decompiler-drifted=$00
$16e7: pristine=$05  decompiler-drifted=$01
```

Both trace-diffs (File 1 unpatched, File 2 after the 37-byte patch) are
register-write-identical to their respective originals over 300 frames —
recomputed directly from the surviving scratchpad `.prg`/`.csv` files this
pass, not transcribed from a report.

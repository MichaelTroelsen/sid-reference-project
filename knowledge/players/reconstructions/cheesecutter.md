# cheesecutter — reconstruction manifest

See `knowledge/players/cheesecutter.md` for the full Verification narrative.
This file records the byte-level patch data recomputed directly from the
original HVSC payloads and the surviving reassembled `.prg` files.

## File: `MUSICIANS/A/Abaddon/Ants.sid`

load `$1000`, init `$1000`, play `$1003`, payload 5,484 bytes. Card reports
91 bytes patched across 21 ranges in `$15E7-$1688` (unpatched → 98.34%). The
intermediate unpatched reassembly was not among the surviving scratchpad
files this pass — only the final reassembly survived, confirmed here by
direct byte-diff against the pristine payload:

```
final reassembly vs. pristine payload: 0/5484 bytes differ (100.0000%)
```

## File: `MUSICIANS/A/Abaddon/Blackjack.sid`

load `$1000`, init `$1000`, play `$1003`, payload 11,823 bytes. This is the
file that caught the near-miss (see the card's own account — the same
address range that looked dead on `Ants.sid` held a load-bearing 3-voice
init table here; naively trusting it silenced all 3 voices). Two stages
survived on disk:

**Stage 1 (the initial 6-byte spot patch, insufficient — 68/11823 bytes
still differ, 99.4248%):**

```
$100c: pristine=$6e  decompiler-drifted=$eb
$100d: pristine=$1c  decompiler-drifted=$6a
$100e: pristine=$70  decompiler-drifted=$ed
$100f: pristine=$12  decompiler-drifted=$15
$1010: pristine=$04  decompiler-drifted=$03
$1011: pristine=$12  decompiler-drifted=$15
$1014: pristine=$25  decompiler-drifted=$28
$1015: pristine=$0b  decompiler-drifted=$09
$1016: pristine=$25  decompiler-drifted=$28
$101b: pristine=$fe  decompiler-drifted=$ff
$101f: pristine=$68  decompiler-drifted=$70
$172d: pristine=$0b  decompiler-drifted=$2e
$172e: pristine=$ce  decompiler-drifted=$fb
$172f: pristine=$ce  decompiler-drifted=$50
$1730: pristine=$ce  decompiler-drifted=$a5
$1731: pristine=$20  decompiler-drifted=$1b
$1732: pristine=$24  decompiler-drifted=$1c
$1733: pristine=$28  decompiler-drifted=$1c
$1734: pristine=$cb  decompiler-drifted=$a7
$1735: pristine=$cb  decompiler-drifted=$fc
$1736: pristine=$cb  decompiler-drifted=$51
$1737: pristine=$20  decompiler-drifted=$1b
$1738: pristine=$24  decompiler-drifted=$1b
$1739: pristine=$28  decompiler-drifted=$1c
$1746: pristine=$02  decompiler-drifted=$03
$1749: pristine=$00  decompiler-drifted=$01
$174a: pristine=$00  decompiler-drifted=$01
$174f: pristine=$00  decompiler-drifted=$01
$1751: pristine=$24  decompiler-drifted=$00
$1752: pristine=$24  decompiler-drifted=$00
$1753: pristine=$24  decompiler-drifted=$00
$1756: pristine=$00  decompiler-drifted=$80
$175f: pristine=$41  decompiler-drifted=$21
$1769: pristine=$01  decompiler-drifted=$02
$176a: pristine=$03  decompiler-drifted=$00
$1775: pristine=$01  decompiler-drifted=$00
$1778: pristine=$dd  decompiler-drifted=$00
$1779: pristine=$0b  decompiler-drifted=$f2
$177b: pristine=$ff  decompiler-drifted=$00
$177c: pristine=$00  decompiler-drifted=$ff
$1783: pristine=$20  decompiler-drifted=$38
$1784: pristine=$1a  decompiler-drifted=$17
$1785: pristine=$1b  decompiler-drifted=$17
$1786: pristine=$3a  decompiler-drifted=$03
$1787: pristine=$98  decompiler-drifted=$64
$1788: pristine=$54  decompiler-drifted=$64
$1789: pristine=$60  decompiler-drifted=$2c
$178a: pristine=$02  decompiler-drifted=$03
$178b: pristine=$02  decompiler-drifted=$03
$178c: pristine=$02  decompiler-drifted=$08
$178f: pristine=$00  decompiler-drifted=$80
$1797: pristine=$bb  decompiler-drifted=$7c
$179a: pristine=$00  decompiler-drifted=$02
$179d: pristine=$00  decompiler-drifted=$02
$17a8: pristine=$00  decompiler-drifted=$c0
$17ab: pristine=$00  decompiler-drifted=$ff
$17b2: pristine=$a8  decompiler-drifted=$70
$17b3: pristine=$25  decompiler-drifted=$28
$17b4: pristine=$0d  decompiler-drifted=$09
$17b5: pristine=$24  decompiler-drifted=$28
$17b7: pristine=$00  decompiler-drifted=$01
$17bc: pristine=$ff  decompiler-drifted=$fe
$17be: pristine=$ff  decompiler-drifted=$fe
$17c0: pristine=$f0  decompiler-drifted=$03
$17c3: pristine=$f0  decompiler-drifted=$96
$17c4: pristine=$32  decompiler-drifted=$24
$17c5: pristine=$48  decompiler-drifted=$26
$17c7: pristine=$77  decompiler-drifted=$24
```

Note the very first entries, `$1006-$100B` (the specific 6-byte
"initializes 3 voices from a `songsets` table" region the card calls out as
the one that silenced all 3 voices), are **not** in this list — they were
already fixed by the initial spot patch. What's still wrong at this stage
is the SECOND, larger table the follow-up pass found (`$100C-$1020` and the
147-byte destination block `$172D-$17C7`).

**Stage 2 (final, full-region patch): 0/11823 bytes differ (100.0000%)** —
confirmed by direct byte-diff of the surviving final `.prg` against the
pristine payload.

Both files' final reassemblies trace register-write-identical to the
original at 300 and 1000 frames (`sidm2-sid-trace.exe`) — recomputed
directly from the surviving scratchpad files, not transcribed from a report.

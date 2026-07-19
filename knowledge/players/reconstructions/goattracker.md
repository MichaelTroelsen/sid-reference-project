# goattracker — reconstruction manifest

See `knowledge/players/goattracker.md` for the full Verification narrative.
This file records the exact byte-level patch table, recomputed directly from
the original HVSC payload and the surviving reassembled `.prg` files.

## File: `MUSICIANS/C/Cadaver/GoatTracker_Classical_Example.sid`

load `$1000`, init `$1000`, play `$1003`, payload 2,016 bytes.

**Unpatched first-pass reassembly: 49/2016 bytes differ (97.5694%)**, all 13
address ranges confirmed self-modified/workspace via the `-v2` map:

```
$1043: pristine=$00  decompiler-drifted=$ff
$113a: pristine=$8c  decompiler-drifted=$7b
$11f9: pristine=$ba  decompiler-drifted=$c1
$1395: pristine=$00  decompiler-drifted=$36
$1396: pristine=$00  decompiler-drifted=$33
$1397: pristine=$00  decompiler-drifted=$12
$1398: pristine=$00  decompiler-drifted=$01
$139c: pristine=$00  decompiler-drifted=$1b
$139d: pristine=$00  decompiler-drifted=$7f
$139e: pristine=$00  decompiler-drifted=$03
$139f: pristine=$00  decompiler-drifted=$01
$13a3: pristine=$00  decompiler-drifted=$3c
$13a4: pristine=$00  decompiler-drifted=$a0
$13a5: pristine=$00  decompiler-drifted=$22
$13a6: pristine=$00  decompiler-drifted=$e9
$13a9: pristine=$08  decompiler-drifted=$18
$146a: pristine=$08  decompiler-drifted=$21
$146d: pristine=$00  decompiler-drifted=$81
$146e: pristine=$00  decompiler-drifted=$fe
$146f: pristine=$00  decompiler-drifted=$fe
$1470: pristine=$00  decompiler-drifted=$04
$1471: pristine=$08  decompiler-drifted=$21
$1474: pristine=$00  decompiler-drifted=$81
$1475: pristine=$00  decompiler-drifted=$fe
$1476: pristine=$00  decompiler-drifted=$fe
$1477: pristine=$00  decompiler-drifted=$04
$1478: pristine=$08  decompiler-drifted=$11
$147b: pristine=$00  decompiler-drifted=$01
$147c: pristine=$00  decompiler-drifted=$fe
$147d: pristine=$00  decompiler-drifted=$fe
$147e: pristine=$00  decompiler-drifted=$04
$147f: pristine=$00  decompiler-drifted=$ce
$1480: pristine=$00  decompiler-drifted=$14
$1481: pristine=$00  decompiler-drifted=$5b
$1482: pristine=$00  decompiler-drifted=$03
$1483: pristine=$00  decompiler-drifted=$05
$1484: pristine=$00  decompiler-drifted=$06
$1486: pristine=$00  decompiler-drifted=$d5
$1487: pristine=$00  decompiler-drifted=$14
$1488: pristine=$00  decompiler-drifted=$7b
$1489: pristine=$00  decompiler-drifted=$04
$148a: pristine=$00  decompiler-drifted=$05
$148b: pristine=$00  decompiler-drifted=$06
$148d: pristine=$00  decompiler-drifted=$dc
$148e: pristine=$00  decompiler-drifted=$14
$148f: pristine=$00  decompiler-drifted=$03
$1490: pristine=$00  decompiler-drifted=$09
$1491: pristine=$00  decompiler-drifted=$05
$1492: pristine=$00  decompiler-drifted=$06
```

**Patched reassembly (`goat_patched.prg`) vs. pristine payload: 0/2016 bytes
differ (100.0000%)** — confirmed by direct byte-diff. Trace-diff (init
`$1000`, play `$1003`, 50 frames): 19/19 register writes exact — recomputed
directly from the surviving scratchpad files, matching the card's own
reported figures exactly.

**Confidence scope** (per the card): verified against this one, small
(2016-byte) example file — a second, larger GoatTracker file would be a
reasonable next check to confirm the "13 self-modifying locations" pattern
generalizes.

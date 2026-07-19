# sidbang64 — reconstruction manifest

See `knowledge/players/sidbang64.md` for the full Verification narrative
(including the two distinct PSID/RSID export conventions and the
`SIDdecompiler` hang on most RSID files — real findings, not just this
patch data). This file records the exact residual byte-level diffs,
recomputed directly from the original HVSC payloads and the surviving
reassembled `.prg` files.

## File: `Secam.sid`

PSID, load/init `$1000`, play `$1003`, payload 8,197 bytes.

**Final reassembly vs. pristine payload: 5/8197 bytes differ (99.9390%) —
reported `verified` at this residual, not 100.0000%**, because the trace-diff
is exact (these 5 bytes are confirmed dead self-modified workspace, not a
remaining defect):

```
$1029: pristine=$88  decompiler-drifted=$a5
$1058: pristine=$a0  decompiler-drifted=$7a
$1059: pristine=$15  decompiler-drifted=$17
$1087: pristine=$b8  decompiler-drifted=$92
$1088: pristine=$18  decompiler-drifted=$1a
```

## File: `Boilerplate.sid`

PSID, load/init `$e000`, play `$e003`, payload 7,858 bytes.

**Final reassembly vs. pristine payload: 52/7858 bytes differ (99.3383%)** —
per the card, these correspond to 3 real, audible-but-transient extra
register writes confined to frame 0 (self-correcting by frame 1), the same
underlying self-modified-table-drift class as Secam.sid but NOT fully dead
here (unlike Secam.sid, where the analogous bytes were fully inert):

```
$e004: pristine=$00  decompiler-drifted=$75
$e006: pristine=$00  decompiler-drifted=$06
$e00e: pristine=$00  decompiler-drifted=$67
$e010: pristine=$00  decompiler-drifted=$11
$e018: pristine=$00  decompiler-drifted=$41
$e01d: pristine=$00  decompiler-drifted=$b0
$e01f: pristine=$00  decompiler-drifted=$06
$e027: pristine=$00  decompiler-drifted=$ce
$e029: pristine=$00  decompiler-drifted=$22
$e031: pristine=$00  decompiler-drifted=$45
$e036: pristine=$00  decompiler-drifted=$c4
$e038: pristine=$00  decompiler-drifted=$03
$e040: pristine=$00  decompiler-drifted=$b2
$e042: pristine=$00  decompiler-drifted=$08
$e04a: pristine=$00  decompiler-drifted=$40
$e05f: pristine=$f3  decompiler-drifted=$29
$e060: pristine=$e7  decompiler-drifted=$ed
$e072: pristine=$45  decompiler-drifted=$7b
$e073: pristine=$e9  decompiler-drifted=$ee
$e078: pristine=$45  decompiler-drifted=$81
$e079: pristine=$e9  decompiler-drifted=$ee
$e087: pristine=$f5  decompiler-drifted=$2b
$e088: pristine=$e7  decompiler-drifted=$ed
$e08d: pristine=$9d  decompiler-drifted=$d3
$e08e: pristine=$e8  decompiler-drifted=$ed
$e0a3: pristine=$ab  decompiler-drifted=$47
$e0a4: pristine=$f3  decompiler-drifted=$f5
$e0b6: pristine=$b1  decompiler-drifted=$e1
$e0b7: pristine=$f3  decompiler-drifted=$f5
$e0bc: pristine=$b1  decompiler-drifted=$e4
$e0bd: pristine=$f3  decompiler-drifted=$f5
$e0cb: pristine=$ad  decompiler-drifted=$49
$e0cc: pristine=$f3  decompiler-drifted=$f5
$e0d1: pristine=$af  decompiler-drifted=$95
$e0d2: pristine=$f3  decompiler-drifted=$f5
$e0e7: pristine=$20  decompiler-drifted=$70
$e0e8: pristine=$fa  decompiler-drifted=$fb
$e0fa: pristine=$b0  decompiler-drifted=$00
$e0fb: pristine=$fa  decompiler-drifted=$fc
$e100: pristine=$e0  decompiler-drifted=$30
$e101: pristine=$fa  decompiler-drifted=$fc
$e10f: pristine=$50  decompiler-drifted=$a0
$e110: pristine=$fa  decompiler-drifted=$fb
$e115: pristine=$80  decompiler-drifted=$d0
$e116: pristine=$fa  decompiler-drifted=$fb
$e130: pristine=$2b  decompiler-drifted=$6b
$e131: pristine=$f1  decompiler-drifted=$f2
$e18a: pristine=$ab  decompiler-drifted=$eb
$e1d6: pristine=$a0  decompiler-drifted=$20
$e1d7: pristine=$f7  decompiler-drifted=$f9
$e230: pristine=$20  decompiler-drifted=$60
$e27c: pristine=$2c  decompiler-drifted=$6c
```

Both figures (5/8197 and 52/7858) were recomputed directly from the
surviving `secam_orig.prg`/`secam.prg` and `boilerplate_orig.prg`/
`boilerplate.prg` scratchpad files, matching the card's own reported
percentages exactly.

`Str8.sid` (the third, RSID-convention file) has no comparable manifest —
per the card, it was only byte-diffed, never trace-confirmed (the RSID
convention's `SIDdecompiler` hang and a subsequent tracer crash left it an
honest, explicitly-flagged gap, not a silent omission).

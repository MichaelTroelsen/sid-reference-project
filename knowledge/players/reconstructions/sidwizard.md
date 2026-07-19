# sidwizard — reconstruction manifest

See `knowledge/players/sidwizard.md` for the full Verification narrative
(the binary-search story is the most valuable part — read that first). This
file records the complete byte-level patch table, recomputed directly from
the original HVSC payload and the surviving reassembled `.prg` files.

## File: `MUSICIANS/H/Hermit/Border_Odyssey.sid`

load `$1000`, init `$1000`, play `$1003`, payload 3,427 bytes.

**Unpatched first-pass reassembly: 96/3427 bytes differ (97.1987%).** Full
list (pristine byte, then the decompiler's drifted value):

```
$1021: pristine=$53  decompiler=$4e     [ $1021-$1089: the embedded ASCII credit
$1022: pristine=$57  decompiler=$02       string "HERMIT: SPACE ODYSSEY BORDERLINE
$1023: pristine=$4d  decompiler=$00       COMPO" and surrounding tune-header bytes.
$1024: pristine=$31  decompiler=$06       ALL of $1021-$1089 is proven CONFIRMED
$1025: pristine=$01  decompiler=$40       INERT: init's own clear loop
$1026: pristine=$04  decompiler=$fe       (lda #$00 / ldy #$68 / sta l1021,Y)
$1027: pristine=$01  decompiler=$18       unconditionally zeroes this whole range
$1028: pristine=$01  decompiler=$80       before anything ever reads it. This was
$1029: pristine=$ff  decompiler=$93       the PRIOR SESSION's suspected fix region —
$102a: pristine=$ff  decompiler=$00       binary search proved patching it changes
$102b: pristine=$ff  decompiler=$06       NOTHING about the trace. Listed in full
$102c: pristine=$20  decompiler=$40       here for completeness, not because any of
$102d: pristine=$03  decompiler=$fe       these addresses matter for playback.
$102f: pristine=$05  decompiler=$27
$1030: pristine=$00  decompiler=$2e
$1032: pristine=$00  decompiler=$06
$1033: pristine=$00  decompiler=$40
$1034: pristine=$00  decompiler=$fe
$1035: pristine=$00  decompiler=$18
$1037: pristine=$00  decompiler=$01
$1038: pristine=$00  decompiler=$08
$1039: pristine=$48  decompiler=$13   ('H')
$103a: pristine=$45  decompiler=$13   ('E')
$103b: pristine=$52  decompiler=$1a   ('R')
$103c: pristine=$4d  decompiler=$00   ('M')
$103d: pristine=$49  decompiler=$00   ('I')
$103e: pristine=$54  decompiler=$01   ('T')
$103f: pristine=$3a  decompiler=$08   (':')
$1040: pristine=$20  decompiler=$1a
$1041: pristine=$53  decompiler=$16
$1042: pristine=$50  decompiler=$1d
$1043: pristine=$41  decompiler=$00
$1044: pristine=$43  decompiler=$00
$1045: pristine=$45  decompiler=$01
$1046: pristine=$20  decompiler=$08
$1047: pristine=$4f  decompiler=$1a
$1048: pristine=$44  decompiler=$16
$1049: pristine=$59  decompiler=$26
$104a: pristine=$53  decompiler=$00
$104b: pristine=$53  decompiler=$16
$104c: pristine=$45  decompiler=$00
$104d: pristine=$59  decompiler=$0e
$104e: pristine=$20  decompiler=$00
$104f: pristine=$42  decompiler=$01
$1050: pristine=$4f  decompiler=$00
$1051: pristine=$52  decompiler=$00
$1052: pristine=$44  decompiler=$17
$1053: pristine=$45  decompiler=$00
$1054: pristine=$52  decompiler=$56
$1055: pristine=$4c  decompiler=$00
$1056: pristine=$49  decompiler=$03
$1057: pristine=$4e  decompiler=$00
$1058: pristine=$45  decompiler=$00
$1059: pristine=$20  decompiler=$18
$105a: pristine=$43  decompiler=$00
$105b: pristine=$4f  decompiler=$42
$105c: pristine=$4d  decompiler=$00
$105d: pristine=$50  decompiler=$05
$105e: pristine=$4f  decompiler=$00
$105f: pristine=$20  decompiler=$00
$1060: pristine=$20  decompiler=$10
$1061: pristine=$00  decompiler=$04
$1063: pristine=$00  decompiler=$ff
$1064: pristine=$00  decompiler=$08
$1065: pristine=$00  decompiler=$06
$1067: pristine=$00  decompiler=$10
$1068: pristine=$00  decompiler=$38
$1069: pristine=$00  decompiler=$01
$106a: pristine=$00  decompiler=$ff
$106b: pristine=$00  decompiler=$08
$106c: pristine=$00  decompiler=$02
$106e: pristine=$00  decompiler=$10
$106f: pristine=$00  decompiler=$27
$1071: pristine=$00  decompiler=$ff
$1072: pristine=$00  decompiler=$08
$1073: pristine=$00  decompiler=$04
$1079: pristine=$00  decompiler=$01
$1080: pristine=$00  decompiler=$01
$1085: pristine=$00  decompiler=$02
$1087: pristine=$00  decompiler=$01
```

```
$110a: pristine=$00  decompiler=$01     <- CONFIRMED INERT (adjacent to the two below, not needed)
$110c: pristine=$00  decompiler=$f0     <- *** THE ACTUAL FIX ***: ora #imm operand,
                                            filter_res_control ($D417) path. Real value
                                            is $00 (always overwritten before first
                                            use); decompiler baked in the drifted $f0.
$1113: pristine=$00  decompiler=$10     <- CONFIRMED INERT (adjacent, not needed)
$1127: pristine=$00  decompiler=$08     <- *** THE ACTUAL FIX ***: adc #imm operand,
                                            filter_freq_hi ($D416) path. Real value $00;
                                            decompiler baked in the drifted $08.
```

```
$1363: pristine=$3f  decompiler=$ff     (and #$ff -> and #$3f, self-modified operand)
$136d: pristine=$00  decompiler=$1a     (lda #$1a -> lda #$00, self-modified operand)
$14a6: pristine=$00  decompiler=$24     (ldy #$24 -> ldy #$00, self-modified operand)
$16ad: pristine=$61  decompiler=$57     (lda addr,Y pointer-table entry -> $1061 target)
$16ae: pristine=$10  decompiler=$1a
$16b1: pristine=$e1  decompiler=$62     (-> $10e1 target)
$16b2: pristine=$10  decompiler=$1a
$16b5: pristine=$61  decompiler=$6d     (-> $1161 target)
$16b6: pristine=$11  decompiler=$1a
$181a: pristine=$00  decompiler=$2b     (bcc branch operand -> relative offset $00)
$18ab: pristine=$00  decompiler=$62     (lda #$62 -> lda #$00, self-modified operand)
$18b1: pristine=$00  decompiler=$04     (ora #$04 -> ora #$00, self-modified operand)
```

**Result of patching only `$110c` + `$1127`** (confirmed by binary search —
patching either alone, or any other subset, does not close it): 300-frame
trace becomes byte-for-byte identical to the real file. **Result of patching
all bytes listed above** (full parity, including the confirmed-inert ones,
done for completeness): byte-diff 0/3427 (100.0000%), trace-diff exact over
1500 frames — both recomputed directly from the surviving `patched_all.prg`
/ `border_odyssey_fixed2.prg` scratchpad files against the real payload, not
transcribed from a report.

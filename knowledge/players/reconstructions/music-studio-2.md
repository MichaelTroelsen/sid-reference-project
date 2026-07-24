# music-studio-2 — reconstruction manifest

See `knowledge/players/music-studio-2.md` for the full Verification
narrative. This file records the exact byte-level divergences between each
original HVSC payload and the `SIDdecompiler` + `64tass` reassembly, computed
directly from the surviving `.prg` files in the scratchpad. Unlike several
other reconstructions in this directory (e.g. `dmc.md`, `cheesecutter.md`),
**no patching was required to close the trace** — all three files traced
register-write-EXACT against the unpatched reassembly over 300 frames
(`sidm2-sid-trace.exe`, diffed with plain `diff`; only the echoed input
filename differed). The byte-level divergences below are recorded purely for
documentation/future-reference, not because they needed fixing.

Command line used for all three: `SIDdecompiler.exe <file> -o out.asm
-a<decimal load addr> -z -d -c -v2`, then `64tass.exe -a --cbm-prg -o out.prg
out.asm`. Each file's `-v2` "Start:" address matched its PSID-header load
address exactly (no gotcha-40 drop/offset trap). All three real payload
lengths reassembled exactly (no `-Wwrap-pc`/`-Wwrap-mem`).

## File 1: `MUSICIANS/C/Chabee/Loopz_Musix.sid`

load/init `$0900`, play `$0903`, payload 2,446 bytes. 69/2446 bytes differ
(97.1791% raw match); all fall inside the per-voice note-duration-counter /
gate-waveform working storage that `MusicPlayerInit` unconditionally
seeds at cold start (per-file `.asm` disassembly confirms this region sits
immediately after the leading `init`/`play`/`stop` jump table), plus 3 bytes
in a self-modified `jmp (l0999)` indirect-jump operand region ($c48-$c75,
flagged by SIDdecompiler's own "May have alignment issues" warning) and one
isolated byte at $1054. Register-write trace over 300 frames: **identical**
to the original.

```
$0909: pristine=$00  decompiler-drifted=$03
$090a: pristine=$00  decompiler-drifted=$03
$090b: pristine=$00  decompiler-drifted=$02
$090c: pristine=$00  decompiler-drifted=$03
$090d: pristine=$00  decompiler-drifted=$03
$090e: pristine=$00  decompiler-drifted=$03
$0915: pristine=$00  decompiler-drifted=$23
$0917: pristine=$00  decompiler-drifted=$23
$0918: pristine=$00  decompiler-drifted=$d0
$0919: pristine=$00  decompiler-drifted=$ad
$091a: pristine=$00  decompiler-drifted=$43
$091b: pristine=$00  decompiler-drifted=$40
$091c: pristine=$00  decompiler-drifted=$45
$091d: pristine=$00  decompiler-drifted=$40
$091e: pristine=$00  decompiler-drifted=$0b
$091f: pristine=$00  decompiler-drifted=$06
$0920: pristine=$00  decompiler-drifted=$0a
$0921: pristine=$00  decompiler-drifted=$20
$0922: pristine=$00  decompiler-drifted=$20
$0923: pristine=$00  decompiler-drifted=$20
$0924: pristine=$00  decompiler-drifted=$30
$0925: pristine=$00  decompiler-drifted=$30
$0926: pristine=$00  decompiler-drifted=$30
$0927: pristine=$00  decompiler-drifted=$a0
$0928: pristine=$00  decompiler-drifted=$a0
$0929: pristine=$00  decompiler-drifted=$60
$0930: pristine=$00  decompiler-drifted=$98
$0931: pristine=$00  decompiler-drifted=$31
$0932: pristine=$00  decompiler-drifted=$31
$0933: pristine=$00  decompiler-drifted=$05
$0934: pristine=$00  decompiler-drifted=$1c
$0935: pristine=$00  decompiler-drifted=$1c
$0936: pristine=$00  decompiler-drifted=$0a
$0937: pristine=$00  decompiler-drifted=$0c
$0938: pristine=$00  decompiler-drifted=$0e
$093a: pristine=$00  decompiler-drifted=$18
$093b: pristine=$00  decompiler-drifted=$20
$0941: pristine=$00  decompiler-drifted=$02
$094c: pristine=$00  decompiler-drifted=$99
$094f: pristine=$00  decompiler-drifted=$99
$0952: pristine=$00  decompiler-drifted=$99
$0959: pristine=$00  decompiler-drifted=$47
$095c: pristine=$00  decompiler-drifted=$02
$095f: pristine=$00  decompiler-drifted=$04
$0962: pristine=$00  decompiler-drifted=$07
$0963: pristine=$00  decompiler-drifted=$1d
$0964: pristine=$00  decompiler-drifted=$39
$0965: pristine=$00  decompiler-drifted=$39
$0969: pristine=$00  decompiler-drifted=$cf
$096a: pristine=$00  decompiler-drifted=$4c
$096b: pristine=$00  decompiler-drifted=$20
$096c: pristine=$00  decompiler-drifted=$7d
$096d: pristine=$00  decompiler-drifted=$7d
$096e: pristine=$00  decompiler-drifted=$45
$096f: pristine=$00  decompiler-drifted=$18
$0970: pristine=$00  decompiler-drifted=$18
$0971: pristine=$00  decompiler-drifted=$18
$0972: pristine=$00  decompiler-drifted=$04
$0973: pristine=$00  decompiler-drifted=$04
$0974: pristine=$00  decompiler-drifted=$04
$097b: pristine=$00  decompiler-drifted=$0f
$097c: pristine=$00  decompiler-drifted=$01
$09a6: pristine=$00  decompiler-drifted=$05
$09a9: pristine=$00  decompiler-drifted=$05
$09ac: pristine=$00  decompiler-drifted=$06
$0c48: pristine=$34  decompiler-drifted=$74
$0c49: pristine=$12  decompiler-drifted=$10
$0c75: pristine=$8b  decompiler-drifted=$99
$1054: pristine=$00  decompiler-drifted=$01
```

## File 2: `MUSICIANS/P/Piper_Martin/Gun_Shooty_Game.sid`

load/init `$4000`, play `$4003`, payload 2,256 bytes. 53/2256 bytes differ
(97.6507% raw match); same pattern — a cluster right after the entry jump
table ($4010-$4134) plus a small self-modified-operand cluster near $4449
and $4476 (SIDdecompiler flagged `l4476+1` and `l46a8+1` as alignment-issue
operands — same `jmp (indirect)` self-modification pattern as file 1, just
at different addresses since this file's code was trimmed differently per
tune, per ReadMe.txt's "unused portions of the player routine are removed").
Register-write trace over 300 frames: **identical** to the original.

```
$4010: pristine=$00  decompiler-drifted=$33
$4012: pristine=$00  decompiler-drifted=$04
$4013: pristine=$00  decompiler-drifted=$ff
$4014: pristine=$00  decompiler-drifted=$fe
$4015: pristine=$00  decompiler-drifted=$ff
$40b9: pristine=$00  decompiler-drifted=$03
$40bb: pristine=$00  decompiler-drifted=$03
$40cc: pristine=$00  decompiler-drifted=$ff
$40cd: pristine=$00  decompiler-drifted=$81
$40cf: pristine=$00  decompiler-drifted=$06
$40d0: pristine=$00  decompiler-drifted=$f8
$40d1: pristine=$00  decompiler-drifted=$f0
$40d2: pristine=$00  decompiler-drifted=$6a
$40d3: pristine=$00  decompiler-drifted=$11
$40d4: pristine=$00  decompiler-drifted=$09
$40d5: pristine=$00  decompiler-drifted=$41
$40d8: pristine=$00  decompiler-drifted=$05
$40db: pristine=$00  decompiler-drifted=$50
$40dc: pristine=$00  decompiler-drifted=$80
$40de: pristine=$00  decompiler-drifted=$80
$40e1: pristine=$00  decompiler-drifted=$04
$40e4: pristine=$00  decompiler-drifted=$04
$40e5: pristine=$00  decompiler-drifted=$11
$40e6: pristine=$00  decompiler-drifted=$09
$40e7: pristine=$00  decompiler-drifted=$41
$40f9: pristine=$00  decompiler-drifted=$47
$40fc: pristine=$00  decompiler-drifted=$07
$4109: pristine=$00  decompiler-drifted=$02
$410b: pristine=$00  decompiler-drifted=$02
$410c: pristine=$00  decompiler-drifted=$da
$410d: pristine=$00  decompiler-drifted=$0c
$410e: pristine=$00  decompiler-drifted=$da
$410f: pristine=$00  decompiler-drifted=$0b
$4110: pristine=$00  decompiler-drifted=$01
$4111: pristine=$00  decompiler-drifted=$0b
$4112: pristine=$00  decompiler-drifted=$05
$4114: pristine=$00  decompiler-drifted=$23
$4117: pristine=$00  decompiler-drifted=$01
$4120: pristine=$00  decompiler-drifted=$af
$4121: pristine=$00  decompiler-drifted=$2a
$4123: pristine=$00  decompiler-drifted=$2a
$4124: pristine=$00  decompiler-drifted=$63
$4126: pristine=$00  decompiler-drifted=$e9
$4127: pristine=$00  decompiler-drifted=$60
$4129: pristine=$00  decompiler-drifted=$0a
$412a: pristine=$00  decompiler-drifted=$30
$412c: pristine=$00  decompiler-drifted=$02
$412e: pristine=$00  decompiler-drifted=$fd
$4133: pristine=$00  decompiler-drifted=$0f
$4134: pristine=$00  decompiler-drifted=$01
$4449: pristine=$34  decompiler-drifted=$33
$444a: pristine=$12  decompiler-drifted=$47
$4476: pristine=$ab  decompiler-drifted=$b7
```

## File 3: `MUSICIANS/B/Bayliss_Richard/Border_Blast.sid`

load/init `$6100`, play `$6103`, payload 3,216 bytes. 81/3216 bytes differ
(97.4813% raw match); same pattern again — clusters at $610d-$6222 (entry
jump table + per-voice workspace) plus small self-modified-operand bytes at
$62e3, $6532-$6533, $655f, $6737 (SIDdecompiler flagged `l655f+1` and
`l6737+1`). Register-write trace over 300 frames: **identical** to the
original.

```
$610d: pristine=$00  decompiler-drifted=$03
$610e: pristine=$00  decompiler-drifted=$03
$610f: pristine=$00  decompiler-drifted=$03
$6110: pristine=$00  decompiler-drifted=$fe
$6111: pristine=$00  decompiler-drifted=$fe
$6112: pristine=$00  decompiler-drifted=$fe
$619e: pristine=$00  decompiler-drifted=$07
$619f: pristine=$00  decompiler-drifted=$07
$61a0: pristine=$00  decompiler-drifted=$07
$61a1: pristine=$00  decompiler-drifted=$0e
$61a3: pristine=$00  decompiler-drifted=$07
$61a4: pristine=$00  decompiler-drifted=$ee
$61a5: pristine=$00  decompiler-drifted=$aa
$61a6: pristine=$00  decompiler-drifted=$77
$61a7: pristine=$00  decompiler-drifted=$41
$61a8: pristine=$00  decompiler-drifted=$16
$61a9: pristine=$00  decompiler-drifted=$41
$61aa: pristine=$00  decompiler-drifted=$08
$61ab: pristine=$00  decompiler-drifted=$08
$61ac: pristine=$00  decompiler-drifted=$09
$61ae: pristine=$00  decompiler-drifted=$08
$61af: pristine=$00  decompiler-drifted=$cb
$61b0: pristine=$00  decompiler-drifted=$80
$61b1: pristine=$00  decompiler-drifted=$80
$61b2: pristine=$00  decompiler-drifted=$80
$61b9: pristine=$00  decompiler-drifted=$41
$61ba: pristine=$00  decompiler-drifted=$17
$61bb: pristine=$00  decompiler-drifted=$41
$61bc: pristine=$00  decompiler-drifted=$03
$61bf: pristine=$00  decompiler-drifted=$ce
$61c0: pristine=$00  decompiler-drifted=$0f
$61c2: pristine=$00  decompiler-drifted=$cf
$61c3: pristine=$00  decompiler-drifted=$aa
$61c4: pristine=$00  decompiler-drifted=$2f
$61cb: pristine=$00  decompiler-drifted=$03
$61cd: pristine=$00  decompiler-drifted=$09
$61ce: pristine=$00  decompiler-drifted=$08
$61d0: pristine=$00  decompiler-drifted=$01
$61d1: pristine=$00  decompiler-drifted=$48
$61d2: pristine=$00  decompiler-drifted=$48
$61d3: pristine=$00  decompiler-drifted=$92
$61d4: pristine=$00  decompiler-drifted=$48
$61d5: pristine=$00  decompiler-drifted=$48
$61d6: pristine=$00  decompiler-drifted=$55
$61d7: pristine=$00  decompiler-drifted=$05
$61e0: pristine=$00  decompiler-drifted=$0c
$61e1: pristine=$00  decompiler-drifted=$63
$61e2: pristine=$00  decompiler-drifted=$d2
$61e3: pristine=$00  decompiler-drifted=$07
$61e4: pristine=$00  decompiler-drifted=$38
$61e5: pristine=$00  decompiler-drifted=$0f
$61e6: pristine=$00  decompiler-drifted=$0c
$61e7: pristine=$00  decompiler-drifted=$12
$61e8: pristine=$00  decompiler-drifted=$11
$61ea: pristine=$00  decompiler-drifted=$05
$61eb: pristine=$00  decompiler-drifted=$04
$6200: pristine=$00  decompiler-drifted=$03
$6203: pristine=$00  decompiler-drifted=$07
$6204: pristine=$00  decompiler-drifted=$21
$6205: pristine=$00  decompiler-drifted=$45
$6206: pristine=$00  decompiler-drifted=$2f
$6207: pristine=$00  decompiler-drifted=$78
$6208: pristine=$00  decompiler-drifted=$78
$6209: pristine=$00  decompiler-drifted=$38
$620a: pristine=$00  decompiler-drifted=$06
$620b: pristine=$00  decompiler-drifted=$06
$620c: pristine=$00  decompiler-drifted=$06
$620d: pristine=$00  decompiler-drifted=$03
$620e: pristine=$00  decompiler-drifted=$03
$620f: pristine=$00  decompiler-drifted=$03
$6216: pristine=$00  decompiler-drifted=$0f
$6217: pristine=$00  decompiler-drifted=$01
$6219: pristine=$00  decompiler-drifted=$52
$6220: pristine=$59  decompiler-drifted=$52
$6221: pristine=$59  decompiler-drifted=$52
$6222: pristine=$59  decompiler-drifted=$73
$62e3: pristine=$0f  decompiler-drifted=$1f
$6532: pristine=$34  decompiler-drifted=$d9
$6533: pristine=$12  decompiler-drifted=$67
$655f: pristine=$90  decompiler-drifted=$94
$6737: pristine=$13  decompiler-drifted=$81
```

All three patched-free reassembled `.prg`s trace register-write-identical
to their originals over 300 frames (`sidm2-sid-trace.exe`, diffed with plain
`diff` — only the echoed input filename ever differed), recomputed directly
from the surviving scratchpad `.prg`/trace-log files, not transcribed from a
report.

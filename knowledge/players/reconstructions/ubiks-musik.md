# ubiks-musik — reconstruction manifest

See `knowledge/players/ubiks-musik.md` for the current Verification narrative.
This file records the exact byte-level patches from the one file examined so far,
recomputed directly from the original HVSC payload and the surviving reassembled
`.prg` file.

`ubiks-musik` is **not yet `verified`** — the disassembly is structurally
correct and the reassembly traces register-write-exact after patching, but the
patch has not yet been applied at the `.asm` source level and tested on a second
independent file. This manifest preserves the decision (which 79 bytes are
drifted and what their pristine values are) so the next pass does not have to
re-derive it.

## File 1: `MUSICIANS/S/Stone_James/Jax_Music_Demo.sid`

load `$B134`, init `$C600`, play `$C603`, subtunes 5, payload 7,691 bytes. 79
bytes patched (unpatched reassembly → 98.97%; patched → trace-exact over 50
frames). All patched addresses fall in the `-v2` read+write (`+`) region
`$C71B-$C7B1`, a per-voice working table captured by SIDdecompiler as
post-execution values:

```
$c71b: pristine=$90  decompiler-drifted=$d0
$c71c: pristine=$c4  decompiler-drifted=$eb
$c71d: pristine=$00  decompiler-drifted=$02
$c71e: pristine=$00  decompiler-drifted=$0e
$c71f: pristine=$03  decompiler-drifted=$ff
$c721: pristine=$00  decompiler-drifted=$01
$c724: pristine=$fc  decompiler-drifted=$d1
$c725: pristine=$00  decompiler-drifted=$50
$c726: pristine=$f1  decompiler-drifted=$9d
$c727: pristine=$dc  decompiler-drifted=$9a
$c728: pristine=$c7  decompiler-drifted=$65
$c729: pristine=$be  decompiler-drifted=$bf
$c72a: pristine=$be  decompiler-drifted=$bf
$c72b: pristine=$be  decompiler-drifted=$bf
$c73e: pristine=$00  decompiler-drifted=$60
$c73f: pristine=$20  decompiler-drifted=$88
$c740: pristine=$88  decompiler-drifted=$20
$c745: pristine=$41  decompiler-drifted=$40
$c746: pristine=$40  decompiler-drifted=$41
$c747: pristine=$97  decompiler-drifted=$eb
$c748: pristine=$97  decompiler-drifted=$67
$c749: pristine=$67  decompiler-drifted=$97
$c74a: pristine=$11  decompiler-drifted=$5c
$c74b: pristine=$11  decompiler-drifted=$09
$c74c: pristine=$0b  decompiler-drifted=$11
$c74d: pristine=$01  decompiler-drifted=$00
$c74e: pristine=$01  decompiler-drifted=$00
$c750: pristine=$6c  decompiler-drifted=$62
$c751: pristine=$12  decompiler-drifted=$02
$c752: pristine=$14  decompiler-drifted=$34
$c753: pristine=$fa  decompiler-drifted=$33
$c754: pristine=$e4  decompiler-drifted=$00
$c755: pristine=$00  decompiler-drifted=$7c
$c756: pristine=$f6  decompiler-drifted=$09
$c757: pristine=$0b  decompiler-drifted=$08
$c758: pristine=$08  decompiler-drifted=$04
$c759: pristine=$0f  decompiler-drifted=$3f
$c75c: pristine=$0c  decompiler-drifted=$00
$c75d: pristine=$0b  decompiler-drifted=$08
$c75e: pristine=$08  decompiler-drifted=$0b
$c75f: pristine=$03  decompiler-drifted=$00
$c760: pristine=$01  decompiler-drifted=$00
$c761: pristine=$00  decompiler-drifted=$01
$c762: pristine=$60  decompiler-drifted=$9a
$c765: pristine=$04  decompiler-drifted=$00
$c766: pristine=$04  decompiler-drifted=$00
$c767: pristine=$00  decompiler-drifted=$04
$c769: pristine=$20  decompiler-drifted=$40
$c76a: pristine=$40  decompiler-drifted=$20
$c76e: pristine=$00  decompiler-drifted=$40
$c76f: pristine=$00  decompiler-drifted=$40
$c770: pristine=$40  decompiler-drifted=$00
$c771: pristine=$ff  decompiler-drifted=$00
$c772: pristine=$ff  decompiler-drifted=$00
$c773: pristine=$00  decompiler-drifted=$ff
$c774: pristine=$2c  decompiler-drifted=$00
$c775: pristine=$06  decompiler-drifted=$00
$c776: pristine=$00  decompiler-drifted=$06
$c778: pristine=$0e  decompiler-drifted=$ff
$c779: pristine=$ff  decompiler-drifted=$0e
$c77b: pristine=$02  decompiler-drifted=$f2
$c77c: pristine=$f2  decompiler-drifted=$02
$c77e: pristine=$ff  decompiler-drifted=$00
$c784: pristine=$24  decompiler-drifted=$44
$c785: pristine=$6c  decompiler-drifted=$2c
$c78c: pristine=$00  decompiler-drifted=$9f
$c78f: pristine=$00  decompiler-drifted=$74
$c795: pristine=$2e  decompiler-drifted=$23
$c796: pristine=$2e  decompiler-drifted=$3d
$c797: pristine=$03  decompiler-drifted=$44
$c79b: pristine=$80  decompiler-drifted=$00
$c79c: pristine=$80  decompiler-drifted=$00
$c7a1: pristine=$09  decompiler-drifted=$00
$c7a7: pristine=$06  decompiler-drifted=$ff
$c7a8: pristine=$06  decompiler-drifted=$ff
$c7aa: pristine=$03  decompiler-drifted=$01
$c7ab: pristine=$03  decompiler-drifted=$01
$c7ac: pristine=$01  decompiler-drifted=$03
$c7b1: pristine=$00  decompiler-drifted=$ff
```

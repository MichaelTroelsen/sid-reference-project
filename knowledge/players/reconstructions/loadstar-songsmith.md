# loadstar-songsmith — reconstruction manifest

See `knowledge/players/loadstar-songsmith.md` for the full Verification narrative.
This file records the exact byte-level patches, recomputed directly from the
original HVSC payloads and the surviving reassembled `.prg` files.

The key finding this card added is that SIDdecompiler can emit a `play rts` at
the declared play address because the entry byte is self-modified (`PHA` in the
pristine file, `RTS` in the post-execution snapshot). The reassembly still traces
exactly because `init` restores the pristine opcode, so a byte-diff at the entry
point is a false alarm that only trace-diff can resolve.

## File 1: `MUSICIANS/B/Beggerow_Alan/After_the_Ball.sid`

load `$C100`, init `$CC00`, play `$CC48`, payload 3,868 bytes. 10 bytes patched
(unpatched reassembly → 99.7383%; patched → 100.0000% byte-exact, trace-exact
over 50 frames):

```
$cf55: pristine=$0e  decompiler-drifted=$00
$cf56: pristine=$4e  decompiler-drifted=$00
$cf57: pristine=$4e  decompiler-drifted=$00
$cf58: pristine=$4e  decompiler-drifted=$00
$cf59: pristine=$41  decompiler-drifted=$21
$cf5c: pristine=$08  decompiler-drifted=$00
$cf5d: pristine=$0c  decompiler-drifted=$0e
$cf5e: pristine=$16  decompiler-drifted=$14
$cf5f: pristine=$18  decompiler-drifted=$1a
$cf60: pristine=$25  decompiler-drifted=$33
```

## File 2: `MUSICIANS/C/Cruz_Debby/Battle_Cry_of_Freedom.sid`

load `$C200`, init `$CC00`, play `$CC48`, payload 3,600 bytes. 9 bytes patched
(unpatched reassembly → 99.7470%; patched → 100.0000% byte-exact, trace-exact
over 50 frames):

```
$cc48: pristine=$48  decompiler-drifted=$60
$cf59: pristine=$00  decompiler-drifted=$81
$cf5a: pristine=$00  decompiler-drifted=$81
$cf5b: pristine=$00  decompiler-drifted=$81
$cf5c: pristine=$00  decompiler-drifted=$08
$cf5d: pristine=$00  decompiler-drifted=$1c
$cf5e: pristine=$00  decompiler-drifted=$1e
$cf5f: pristine=$00  decompiler-drifted=$36
$cf60: pristine=$00  decompiler-drifted=$3d
```

Note the `$CC48` divergence: pristine `PHA` ($48) vs decompiler-drifted `RTS` ($60).
This is the self-modified play-entry byte; `init` restores `$48` at runtime, so
the trace matches exactly despite the byte-diff.

## File 3: `MUSICIANS/M/Marquis_Dave/Air_on_the_G_String.sid`

load `$C200`, init `$CC00`, play `$CC48`, payload 3,468 bytes. 11 bytes patched
(unpatched reassembly → 99.6800%; this file is identically silent / 0 SID writes
under the declared play vector, so trace-diff is trivially identical):

```
$cf55: pristine=$0e  decompiler-drifted=$00
$cf56: pristine=$4e  decompiler-drifted=$00
$cf57: pristine=$4e  decompiler-drifted=$00
$cf58: pristine=$4e  decompiler-drifted=$00
$cf5a: pristine=$21  decompiler-drifted=$41
$cf5b: pristine=$21  decompiler-drifted=$41
$cf5c: pristine=$08  decompiler-drifted=$00
$cf5d: pristine=$0c  decompiler-drifted=$0a
$cf5e: pristine=$16  decompiler-drifted=$0c
$cf5f: pristine=$18  decompiler-drifted=$0e
$cf60: pristine=$25  decompiler-drifted=$84
```

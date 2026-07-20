# digitalizer — reconstruction manifest

See `knowledge/players/digitalizer.md` for the full Verification narrative.
This file records the exact byte-level patches, recomputed directly from the
original HVSC payloads and the surviving reassembled `.prg` files.

The key discovery this card added is that SIDdecompiler can emit
*runtime-computed* immediate operands when the operand byte is itself the
target of a self-modifying `sta label+1` / `stx label+1`. Patching those
operand bytes back to their cold-start `$00` value is what makes the
reconstruction byte-for-byte and trace-for-trace identical to the original.

## File 1: `MUSICIANS/B/Blues_Muz/Roestoeen_Kristian/Budget.sid`

load `$1000`, init `$1003`, play `$1006`, payload 2,447 bytes. 3 bytes patched
(unpatched reassembly → 99.8774%; patched → 100.0000%, confirmed by direct
byte-diff against the pristine payload):

```
$143a: pristine=$00  decompiler-drifted=$01
$1463: pristine=$00  decompiler-drifted=$20
$1466: pristine=$00  decompiler-drifted=$e0
```

## File 2: `MUSICIANS/B/Blues_Muz/Roestoeen_Kristian/Calm.sid`

load `$1000`, init `$1003`, play `$1006`, payload 2,339 bytes. 4 bytes patched
(unpatched reassembly → 99.8290%; patched → 100.0000%):

```
$143a: pristine=$00  decompiler-drifted=$02
$1444: pristine=$00  decompiler-drifted=$04
$146d: pristine=$00  decompiler-drifted=$09
$1470: pristine=$00  decompiler-drifted=$ef
```

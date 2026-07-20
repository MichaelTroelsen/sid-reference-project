# master-composer — reconstruction manifest

See `knowledge/players/master-composer.md` for the full Verification narrative.
This file records the exact byte-level patches, recomputed directly from the
original HVSC payloads and the surviving reassembled `.prg` files.

The key finding this card added is that Master Composer's driver is **relocatable
in load address but fixed in runtime entry points** (`init $7580`, `play $7587` in
the sampled rips). The diverging bytes are all in the driver's runtime
working-state block at `$7940-$794A`, initialized/overwritten before being read.

## File 1: `MUSICIANS/0-9/2121/Troop.sid`

load/init `$7580`, play `$7587`, payload 5,116 bytes. 6 bytes patched
(unpatched reassembly → 99.8827%; patched → 100.0000% byte-exact, trace-exact
over 50 frames):

```
$7940: pristine=$01  decompiler-drifted=$07
$7941: pristine=$01  decompiler-drifted=$05
$7942: pristine=$05  decompiler-drifted=$25
$7943: pristine=$0b  decompiler-drifted=$0d
$7945: pristine=$04  decompiler-drifted=$06
$7948: pristine=$81  decompiler-drifted=$89
```

## File 2: `MUSICIANS/0-9/2121/Allegro_Nr_19.sid`

load/init `$7580`, play `$7587`, payload 4,022 bytes. 3 bytes patched
(unpatched reassembly → 99.9254%; patched → 100.0000% byte-exact, trace-exact
over 50 frames):

```
$7941: pristine=$02  decompiler-drifted=$06
$7942: pristine=$11  decompiler-drifted=$14
$7947: pristine=$3f  decompiler-drifted=$ff
```

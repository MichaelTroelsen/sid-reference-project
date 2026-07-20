# hardtrack-composer — reconstruction manifest

See `knowledge/players/hardtrack-composer.md` for the full Verification narrative.
This file records the exact byte-level patches, recomputed directly from the
original HVSC payloads and the surviving reassembled `.prg` files.

## File 1: `MUSICIANS/B/Bzyk/2_Unlimited.sid`

load/init `$1000`, play `$1003`, payload 3,146 bytes. 38 bytes patched
(unpatched reassembly → 98.79%; patched → 100.0000%, confirmed by direct
byte-diff against the pristine payload):

```
$1107: pristine=$d0  decompiler-drifted=$18
$1110: pristine=$2b  decompiler-drifted=$a9
$1111: pristine=$fd  decompiler-drifted=$3e
$1113: pristine=$1a  decompiler-drifted=$19
$1114: pristine=$1a  decompiler-drifted=$1b
$1116: pristine=$02  decompiler-drifted=$05
$1117: pristine=$02  decompiler-drifted=$05
$1118: pristine=$02  decompiler-drifted=$05
$1119: pristine=$14  decompiler-drifted=$30
$111a: pristine=$14  decompiler-drifted=$30
$111b: pristine=$14  decompiler-drifted=$30
$111f: pristine=$f0  decompiler-drifted=$f1
$11fb: pristine=$05  decompiler-drifted=$02
$166f: pristine=$da  decompiler-drifted=$12
$1754: pristine=$00  decompiler-drifted=$40
$1755: pristine=$28  decompiler-drifted=$c4
$1757: pristine=$38  decompiler-drifted=$fc
$1758: pristine=$07  decompiler-drifted=$06
$1760: pristine=$61  decompiler-drifted=$60
$1761: pristine=$60  decompiler-drifted=$15
$176d: pristine=$ff  decompiler-drifted=$00
$1770: pristine=$80  decompiler-drifted=$40
$1771: pristine=$00  decompiler-drifted=$14
$1773: pristine=$6f  decompiler-drifted=$36
$1774: pristine=$69  decompiler-drifted=$06
$1775: pristine=$f5  decompiler-drifted=$b6
$1779: pristine=$2e  decompiler-drifted=$f5
$177b: pristine=$f8  decompiler-drifted=$b9
$177c: pristine=$04  decompiler-drifted=$02
$177d: pristine=$08  decompiler-drifted=$06
$178e: pristine=$01  decompiler-drifted=$ff
$179a: pristine=$fe  decompiler-drifted=$ff
$17a9: pristine=$00  decompiler-drifted=$01
$17aa: pristine=$01  decompiler-drifted=$00
$17b3: pristine=$00  decompiler-drifted=$01
$17b9: pristine=$ff  decompiler-drifted=$00
$1c48: pristine=$00  decompiler-drifted=missing
$1c49: pristine=$00  decompiler-drifted=missing
```

## File 2: `MUSICIANS/B/Bzyk/Absolute.sid`

load/init `$1000`, play `$1003`, payload 4,252 bytes. 80 bytes patched
(unpatched → 98.12%; patched → 100.0000%). All divergences are in the same
runtime-overwritten subtune/working-storage regions as file 1:

```
$1007: pristine=$3c  decompiler-drifted=$30
$1008: pristine=$3c  decompiler-drifted=$37
$1009: pristine=$18  decompiler-drifted=$32
$100a: pristine=$9c  decompiler-drifted=$7c
$100b: pristine=$9c  decompiler-drifted=$af
$100c: pristine=$9c  decompiler-drifted=$df
$100d: pristine=$1c  decompiler-drifted=$19
$100e: pristine=$1d  decompiler-drifted=$19
$100f: pristine=$1e  decompiler-drifted=$19
$1010: pristine=$80  decompiler-drifted=$1e
$1011: pristine=$00  decompiler-drifted=$df
$1012: pristine=$80  decompiler-drifted=$54
$1013: pristine=$5b  decompiler-drifted=$1b
$1014: pristine=$68  decompiler-drifted=$1b
$1015: pristine=$74  decompiler-drifted=$1d
$1016: pristine=$02  decompiler-drifted=$16
$1017: pristine=$02  decompiler-drifted=$13
$1018: pristine=$02  decompiler-drifted=$13
$1019: pristine=$0c  decompiler-drifted=$20
$101a: pristine=$0c  decompiler-drifted=$20
$101b: pristine=$0c  decompiler-drifted=$20
$101c: pristine=$3c  decompiler-drifted=$29
$101d: pristine=$3c  decompiler-drifted=$30
$101e: pristine=$18  decompiler-drifted=$32
$101f: pristine=$f4  decompiler-drifted=$f1
$10fb: pristine=$00  decompiler-drifted=$02
$154c: pristine=$0f  decompiler-drifted=$04
$156f: pristine=$06  decompiler-drifted=$23
$1572: pristine=$00  decompiler-drifted=$f0
$1648: pristine=$f7  decompiler-drifted=$03
$1649: pristine=$02  decompiler-drifted=$00
$164a: pristine=$05  decompiler-drifted=$02
$164b: pristine=$ff  decompiler-drifted=$b9
$164c: pristine=$3a  decompiler-drifted=$6a
$164d: pristine=$8b  decompiler-drifted=$7a
$164e: pristine=$29  decompiler-drifted=$11
$164f: pristine=$22  decompiler-drifted=$1a
$1650: pristine=$04  decompiler-drifted=$13
$1651: pristine=$5e  decompiler-drifted=$68
$1652: pristine=$f3  decompiler-drifted=$13
$1653: pristine=$66  decompiler-drifted=$48
$1654: pristine=$10  decompiler-drifted=$50
$1655: pristine=$60  decompiler-drifted=$f0
$1656: pristine=$10  decompiler-drifted=$e0
$1657: pristine=$05  decompiler-drifted=$04
$1658: pristine=$05  decompiler-drifted=$02
$166d: pristine=$ff  decompiler-drifted=$00
$166f: pristine=$e6  decompiler-drifted=$01
$1670: pristine=$00  decompiler-drifted=$30
$1671: pristine=$20  decompiler-drifted=$30
$1672: pristine=$30  decompiler-drifted=$20
$1673: pristine=$06  decompiler-drifted=$f9
$1674: pristine=$16  decompiler-drifted=$06
$1675: pristine=$e5  decompiler-drifted=$2a
$1679: pristine=$00  decompiler-drifted=$fa
$167a: pristine=$01  decompiler-drifted=$00
$167c: pristine=$01  decompiler-drifted=$05
$167d: pristine=$02  decompiler-drifted=$0c
$167e: pristine=$05  decompiler-drifted=$02
$167f: pristine=$00  decompiler-drifted=$f7
$1682: pristine=$00  decompiler-drifted=$ca
$168e: pristine=$00  decompiler-drifted=$ff
$168f: pristine=$ff  decompiler-drifted=$00
$169d: pristine=$00  decompiler-drifted=$07
$169e: pristine=$00  decompiler-drifted=$07
$16a7: pristine=$02  decompiler-drifted=$01
$16a8: pristine=$01  decompiler-drifted=$02
$16aa: pristine=$00  decompiler-drifted=$01
$16ac: pristine=$0e  decompiler-drifted=$03
$16ad: pristine=$03  decompiler-drifted=$0c
$16ae: pristine=$03  decompiler-drifted=$2b
$16b6: pristine=$03  decompiler-drifted=$00
$16b7: pristine=$04  decompiler-drifted=$02
$16bc: pristine=$23  decompiler-drifted=$33
$16bd: pristine=$04  decompiler-drifted=$40
$16be: pristine=$15  decompiler-drifted=$14
$16bf: pristine=$02  decompiler-drifted=$05
$16c0: pristine=$11  decompiler-drifted=$06
$16c1: pristine=$00  decompiler-drifted=$03
$16c2: pristine=$00  decompiler-drifted=$05
```

# dmc — reconstruction manifest

See `knowledge/players/dmc.md` for the full Verification narrative. This file
records the exact byte-level patches, recomputed directly from the original
HVSC payloads and the surviving reassembled `.prg` files.

## File 1: `MUSICIANS/C/CHR_142/Autocomposer_for_ZX81.sid`

load/init `$1000`, play `$1003`, payload 3,095 bytes. 48 bytes patched
(unpatched reassembly → 98.4491%; patched → 100.0000%, confirmed by direct
byte-diff against the pristine payload):

```
$100f: pristine=$ff  decompiler-drifted=$fe
$1010: pristine=$ff  decompiler-drifted=$fe
$1011: pristine=$ff  decompiler-drifted=$fe
$1012: pristine=$1b  decompiler-drifted=$1e
$1013: pristine=$3b  decompiler-drifted=$3e
$1014: pristine=$32  decompiler-drifted=$34
$1016: pristine=$0c  decompiler-drifted=$06
$1718: pristine=$01  decompiler-drifted=$00
$1720: pristine=$00  decompiler-drifted=$01
$1727: pristine=$03  decompiler-drifted=$01
$1729: pristine=$09  decompiler-drifted=$06
$172a: pristine=$08  decompiler-drifted=$0b
$172b: pristine=$0e  decompiler-drifted=$09
$172f: pristine=$2d  decompiler-drifted=$27
$1730: pristine=$db  decompiler-drifted=$12
$1731: pristine=$89  decompiler-drifted=$00
$1732: pristine=$05  decompiler-drifted=$06
$1733: pristine=$20  decompiler-drifted=$27
$1734: pristine=$13  decompiler-drifted=$01
$1736: pristine=$00  decompiler-drifted=$b8
$173b: pristine=$06  decompiler-drifted=$01
$173c: pristine=$06  decompiler-drifted=$07
$173d: pristine=$06  decompiler-drifted=$01
$173f: pristine=$06  decompiler-drifted=$0c
$174a: pristine=$ff  decompiler-drifted=$00
$174b: pristine=$ff  decompiler-drifted=$00
$174c: pristine=$ff  decompiler-drifted=$00
$174e: pristine=$84  decompiler-drifted=$42
$174f: pristine=$21  decompiler-drifted=$58
$1751: pristine=$f8  decompiler-drifted=$5a
$1754: pristine=$02  decompiler-drifted=$0c
$175d: pristine=$af  decompiler-drifted=$8f
$1763: pristine=$02  decompiler-drifted=$01
$1766: pristine=$00  decompiler-drifted=$01
$1769: pristine=$00  decompiler-drifted=$01
$176b: pristine=$00  decompiler-drifted=$0a
$176d: pristine=$00  decompiler-drifted=$0a
$176f: pristine=$00  decompiler-drifted=$01
$1775: pristine=$00  decompiler-drifted=$04
$1778: pristine=$00  decompiler-drifted=$01
$177b: pristine=$01  decompiler-drifted=$31
$177c: pristine=$12  decompiler-drifted=$0c
$177e: pristine=$10  decompiler-drifted=$80
$177f: pristine=$01  decompiler-drifted=$11
$1782: pristine=$81  decompiler-drifted=$10
$1783: pristine=$1d  decompiler-drifted=$1e
$1784: pristine=$39  decompiler-drifted=$3e
$1793: pristine=$00  decompiler-drifted=$5c
```

## File 2: `MUSICIANS/A/Abee/After_Promises.sid`

load/init `$1000`, play `$1003`, payload 4,084 bytes. 75 bytes patched
(unpatched → 98.1636%; patched → 100.0000%), the same two table regions as
file 1, confirming this is a stable player-internal table, not per-file noise:

```
$1012: pristine=$1c  decompiler-drifted=$0c
$1013: pristine=$34  decompiler-drifted=$30
$1014: pristine=$58  decompiler-drifted=$39
$1015: pristine=$00  decompiler-drifted=$07
$1016: pristine=$03  decompiler-drifted=$04
$1017: pristine=$06  decompiler-drifted=$02
$1719: pristine=$01  decompiler-drifted=$00
$171a: pristine=$64  decompiler-drifted=$4e
$171b: pristine=$00  decompiler-drifted=$30
$171c: pristine=$78  decompiler-drifted=$06
$171f: pristine=$22  decompiler-drifted=$01
$1721: pristine=$01  decompiler-drifted=$00
$1724: pristine=$1e  decompiler-drifted=$1f
$1725: pristine=$19  decompiler-drifted=$15
$1726: pristine=$02  decompiler-drifted=$0a
$1727: pristine=$02  decompiler-drifted=$0a
$1728: pristine=$02  decompiler-drifted=$0b
$1729: pristine=$09  decompiler-drifted=$05
$172a: pristine=$04  decompiler-drifted=$09
$172b: pristine=$12  decompiler-drifted=$5b
$172c: pristine=$0c  decompiler-drifted=$f4
$172f: pristine=$47  decompiler-drifted=$18
$1730: pristine=$1f  decompiler-drifted=$c3
$1731: pristine=$fa  decompiler-drifted=$31   <- the frame-0 osc3_freq_lo divergence (register-write level)
$1732: pristine=$05  decompiler-drifted=$02
$1733: pristine=$15  decompiler-drifted=$10
$1734: pristine=$a8  decompiler-drifted=$1c   <- the frame-0 osc3_freq_hi divergence (register-write level)
$1735: pristine=$f4  decompiler-drifted=$00
$1738: pristine=$ff  decompiler-drifted=$00
$173b: pristine=$06  decompiler-drifted=$11
$173c: pristine=$06  decompiler-drifted=$01
$173d: pristine=$02  decompiler-drifted=$01
$173e: pristine=$1a  decompiler-drifted=$20
$173f: pristine=$20  decompiler-drifted=$10
$1740: pristine=$04  decompiler-drifted=$01
$1746: pristine=$00  decompiler-drifted=$3f
$1749: pristine=$00  decompiler-drifted=$40
$174d: pristine=$00  decompiler-drifted=$4d
$174e: pristine=$21  decompiler-drifted=$2c
$174f: pristine=$42  decompiler-drifted=$16
$1750: pristine=$20  decompiler-drifted=$3a
$1751: pristine=$e0  decompiler-drifted=$00
$1752: pristine=$a0  decompiler-drifted=$60
$1753: pristine=$09  decompiler-drifted=$05
$1754: pristine=$07  decompiler-drifted=$08
$1755: pristine=$09  decompiler-drifted=$08
$1756: pristine=$00  decompiler-drifted=$04
$1759: pristine=$0f  decompiler-drifted=$0b
$175c: pristine=$20  decompiler-drifted=$47
$175f: pristine=$00  decompiler-drifted=$07
$1762: pristine=$01  decompiler-drifted=$04
$1765: pristine=$01  decompiler-drifted=$00
$1766: pristine=$00  decompiler-drifted=$01
$176b: pristine=$01  decompiler-drifted=$4e
$176d: pristine=$0d  decompiler-drifted=$00
$176e: pristine=$01  decompiler-drifted=$00
$1773: pristine=$00  decompiler-drifted=$25
$1774: pristine=$04  decompiler-drifted=$00
$1776: pristine=$00  decompiler-drifted=$02
$1777: pristine=$01  decompiler-drifted=$00
$1779: pristine=$00  decompiler-drifted=$01
$177a: pristine=$01  decompiler-drifted=$1d
$177b: pristine=$0e  decompiler-drifted=$13
$177c: pristine=$1b  decompiler-drifted=$09
$177d: pristine=$b0  decompiler-drifted=$28
$177f: pristine=$00  decompiler-drifted=$10
$1780: pristine=$41  decompiler-drifted=$21
$1782: pristine=$51  decompiler-drifted=$41
$1783: pristine=$1c  decompiler-drifted=$0c
$1784: pristine=$34  decompiler-drifted=$30
$1785: pristine=$58  decompiler-drifted=$39
$1792: pristine=$0c  decompiler-drifted=$00
$1794: pristine=$00  decompiler-drifted=$44
$17b4: pristine=$00  decompiler-drifted=$04
$17b5: pristine=$00  decompiler-drifted=$03
```

Both patched `.prg`s byte-diff at 0/N against their respective pristine
payloads, and both re-trace byte-for-byte identical to the original (50
frames, `sidm2-sid-trace.exe`) — recomputed directly from the surviving
scratchpad `.prg` files, not transcribed from a report.

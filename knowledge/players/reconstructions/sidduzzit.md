# sidduzzit — reconstruction manifest

See `knowledge/players/sidduzzit.md` for the current Verification narrative.
This file records the exact byte-level patches from the one file examined so
far, recomputed directly from the original HVSC payload and the surviving
reassembled `.prg` file.

`sidduzzit` is **not yet `verified`** — the disassembly is code-correct and the
reassembly reaches 100% byte-exact / trace-exact after patching, but the patch
has not yet been applied at the `.asm` source level and tested on a second
independent file. This manifest preserves the decision (which 113 bytes are
drifted and what their pristine values are) so that next pass does not have to
re-derive it.

## File 1: `MUSICIANS/T/Tjelta_Geir/Bahia_Funk.sid`

load `$0FFF` (real load read from payload LE header), init `$0FFF`, play
`$1003`, payload 2,974 bytes. 113 bytes patched (unpatched reassembly → 96.20%;
patched → 100.0000% byte-exact, confirmed by direct byte-diff against the
pristine payload). All patched addresses fall in `-v2` write-touched regions.

```
$102a: pristine=$00  decompiler-drifted=$07
$104b: pristine=$00  decompiler-drifted=$01
$104f: pristine=$00  decompiler-drifted=$02
$1408: pristine=$00  decompiler-drifted=$07
$141f: pristine=$00  decompiler-drifted=$01
$154a: pristine=$00  decompiler-drifted=$30
$15fc: pristine=$00  decompiler-drifted=$3b
$1604: pristine=$00  decompiler-drifted=$02
$163b: pristine=$00  decompiler-drifted=$07
$1660: pristine=$00  decompiler-drifted=$01
$1669: pristine=$00  decompiler-drifted=$02
$1679: pristine=$00  decompiler-drifted=$03
$16ae: pristine=$00  decompiler-drifted=$c5
$16af: pristine=$90  decompiler-drifted=$b0
$16b6: pristine=$00  decompiler-drifted=$b0
$16c0: pristine=$00  decompiler-drifted=$b0
$16df: pristine=$00  decompiler-drifted=$01
$16e1: pristine=$00  decompiler-drifted=$d0
$16e8: pristine=$00  decompiler-drifted=$30
$17f5: pristine=$00  decompiler-drifted=$25
$17f6: pristine=$00  decompiler-drifted=$2e
$17f7: pristine=$00  decompiler-drifted=$37
$17f9: pristine=$00  decompiler-drifted=$1a
$17fa: pristine=$00  decompiler-drifted=$1a
$17fb: pristine=$00  decompiler-drifted=$1a
$1801: pristine=$00  decompiler-drifted=$2b
$1802: pristine=$00  decompiler-drifted=$34
$1803: pristine=$00  decompiler-drifted=$45
$1805: pristine=$00  decompiler-drifted=$1a
$1806: pristine=$00  decompiler-drifted=$1a
$1807: pristine=$00  decompiler-drifted=$1a
$180b: pristine=$00  decompiler-drifted=$fb
$180d: pristine=$00  decompiler-drifted=$03
$180e: pristine=$00  decompiler-drifted=$05
$180f: pristine=$00  decompiler-drifted=$01
$1811: pristine=$00  decompiler-drifted=$01
$1812: pristine=$00  decompiler-drifted=$01
$1813: pristine=$00  decompiler-drifted=$ff
$1814: pristine=$00  decompiler-drifted=$f0
$1817: pristine=$00  decompiler-drifted=$ff
$1818: pristine=$00  decompiler-drifted=$0a
$1819: pristine=$00  decompiler-drifted=$13
$181a: pristine=$00  decompiler-drifted=$0f
$181c: pristine=$00  decompiler-drifted=$03
$181e: pristine=$00  decompiler-drifted=$02
$181f: pristine=$00  decompiler-drifted=$03
$1821: pristine=$00  decompiler-drifted=$01
$1823: pristine=$00  decompiler-drifted=$03
$1825: pristine=$00  decompiler-drifted=$02
$1826: pristine=$00  decompiler-drifted=$35
$1827: pristine=$00  decompiler-drifted=$33
$1828: pristine=$00  decompiler-drifted=$13
$1829: pristine=$00  decompiler-drifted=$37
$182a: pristine=$00  decompiler-drifted=$33
$182b: pristine=$00  decompiler-drifted=$22
$182d: pristine=$00  decompiler-drifted=$37
$182e: pristine=$00  decompiler-drifted=$33
$182f: pristine=$00  decompiler-drifted=$27
$1833: pristine=$00  decompiler-drifted=$a0
$1834: pristine=$00  decompiler-drifted=$60
$1835: pristine=$00  decompiler-drifted=$60
$1836: pristine=$00  decompiler-drifted=$ff
$1837: pristine=$00  decompiler-drifted=$ff
$1838: pristine=$00  decompiler-drifted=$ff
$183e: pristine=$00  decompiler-drifted=$04
$183f: pristine=$00  decompiler-drifted=$09
$1840: pristine=$00  decompiler-drifted=$0b
$1843: pristine=$00  decompiler-drifted=$01
$1845: pristine=$00  decompiler-drifted=$01
$1847: pristine=$00  decompiler-drifted=$c0
$184a: pristine=$00  decompiler-drifted=$40
$184e: pristine=$00  decompiler-drifted=$37
$1850: pristine=$00  decompiler-drifted=$54
$1851: pristine=$00  decompiler-drifted=$35
$1852: pristine=$00  decompiler-drifted=$33
$1853: pristine=$00  decompiler-drifted=$13
$1854: pristine=$00  decompiler-drifted=$3b
$1857: pristine=$00  decompiler-drifted=$02
$185a: pristine=$00  decompiler-drifted=$bd
$185c: pristine=$00  decompiler-drifted=$01
$1860: pristine=$00  decompiler-drifted=$01
$1866: pristine=$00  decompiler-drifted=$80
$1868: pristine=$00  decompiler-drifted=$80
$1875: pristine=$00  decompiler-drifted=$04
$1876: pristine=$00  decompiler-drifted=$01
$1877: pristine=$00  decompiler-drifted=$09
$187b: pristine=$00  decompiler-drifted=$02
$187c: pristine=$00  decompiler-drifted=$02
$187d: pristine=$00  decompiler-drifted=$01
$1881: pristine=$00  decompiler-drifted=$80
$1882: pristine=$00  decompiler-drifted=$d0
$1887: pristine=$00  decompiler-drifted=$06
$1888: pristine=$00  decompiler-drifted=$03
$1889: pristine=$00  decompiler-drifted=$08
$188d: pristine=$00  decompiler-drifted=$41
$188e: pristine=$00  decompiler-drifted=$41
$188f: pristine=$00  decompiler-drifted=$81
$1894: pristine=$00  decompiler-drifted=$ff
$1895: pristine=$00  decompiler-drifted=$ff
$1896: pristine=$00  decompiler-drifted=$01
$189e: pristine=$08  decompiler-drifted=$ff
$189f: pristine=$08  decompiler-drifted=$fe
$18a0: pristine=$08  decompiler-drifted=$fe
$18a1: pristine=$00  decompiler-drifted=$13
$18a2: pristine=$00  decompiler-drifted=$05
$18a3: pristine=$00  decompiler-drifted=$0f
$18a4: pristine=$80  decompiler-drifted=$83
$18a5: pristine=$80  decompiler-drifted=$00
$18a6: pristine=$80  decompiler-drifted=$82
$18a7: pristine=$80  decompiler-drifted=$83
$18a8: pristine=$80  decompiler-drifted=$00
$18a9: pristine=$80  decompiler-drifted=$81
$18ac: pristine=$00  decompiler-drifted=$80
```

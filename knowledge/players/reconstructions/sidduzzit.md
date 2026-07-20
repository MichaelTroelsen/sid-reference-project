# sidduzzit — reconstruction manifest

See `knowledge/players/sidduzzit.md` for the current Verification narrative.
This file records the exact byte-level patches from the one file examined so
far, recomputed directly from the original HVSC payload and the surviving
reassembled `.prg` file.

`sidduzzit` is now **`verified`** — the source-level 113-byte patch was applied to
`Bahia_Funk.sid`, reassembled, and confirmed 100% byte-exact and trace-exact;
the same methodology was then repeated on a second independent file
(`MUSICIANS/B/Bolleman/Geisha_Gong.sid`, 107 song-specific drifted bytes) with
identical results. This manifest records the original patch table for file 1.

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

## File 2: `MUSICIANS/B/Bolleman/Geisha_Gong.sid`

load `$0FFF` (real load read from payload LE header), init `$0FFF`, play
`$1003`, payload 2,795 bytes. 107 bytes patched at source level (unpatched
reassembly → 96.17%; patched → 100.0000% byte-exact, trace-exact over 50 frames).
The addresses differ from file 1 because the song-specific data tables are
laid out differently, but the drift mechanism is the same:

```
$101f: pristine=$00  decompiler-drifted=$b1
$1020: pristine=$00  decompiler-drifted=$1a
$1022: pristine=$00  decompiler-drifted=$02
$1026: pristine=$00  decompiler-drifted=$b5
$1027: pristine=$00  decompiler-drifted=$1a
$1029: pristine=$00  decompiler-drifted=$02
$102d: pristine=$00  decompiler-drifted=$b9
$102e: pristine=$00  decompiler-drifted=$1a
$1030: pristine=$00  decompiler-drifted=$02
$1034: pristine=$00  decompiler-drifted=$bd
$1035: pristine=$00  decompiler-drifted=$1a
$1037: pristine=$00  decompiler-drifted=$03
$103b: pristine=$00  decompiler-drifted=$1d
$103c: pristine=$00  decompiler-drifted=$19
$103e: pristine=$00  decompiler-drifted=$06
$103f: pristine=$00  decompiler-drifted=$fe
$1042: pristine=$00  decompiler-drifted=$1d
$1043: pristine=$00  decompiler-drifted=$19
$1045: pristine=$00  decompiler-drifted=$07
$1046: pristine=$00  decompiler-drifted=$5f
$1049: pristine=$00  decompiler-drifted=$0b
$104a: pristine=$00  decompiler-drifted=$05
$104b: pristine=$00  decompiler-drifted=$03
$104c: pristine=$00  decompiler-drifted=$08
$104d: pristine=$00  decompiler-drifted=$3b
$1050: pristine=$00  decompiler-drifted=$1f
$1051: pristine=$00  decompiler-drifted=$19
$1054: pristine=$00  decompiler-drifted=$fe
$1055: pristine=$00  decompiler-drifted=$ff
$1058: pristine=$00  decompiler-drifted=$08
$105c: pristine=$00  decompiler-drifted=$fe
$105e: pristine=$00  decompiler-drifted=$01
$105f: pristine=$00  decompiler-drifted=$08
$1063: pristine=$00  decompiler-drifted=$ff
$1065: pristine=$00  decompiler-drifted=$02
$1066: pristine=$00  decompiler-drifted=$08
$106c: pristine=$00  decompiler-drifted=$04
$106e: pristine=$00  decompiler-drifted=$fe
$1071: pristine=$80  decompiler-drifted=$86
$1074: pristine=$00  decompiler-drifted=$06
$1075: pristine=$00  decompiler-drifted=$31
$1076: pristine=$00  decompiler-drifted=$fe
$1078: pristine=$80  decompiler-drifted=$87
$107b: pristine=$00  decompiler-drifted=$07
$107c: pristine=$00  decompiler-drifted=$39
$107d: pristine=$00  decompiler-drifted=$fe
$107f: pristine=$80  decompiler-drifted=$88
$1082: pristine=$00  decompiler-drifted=$08
$1083: pristine=$00  decompiler-drifted=$3b
$1084: pristine=$00  decompiler-drifted=$ff
$1086: pristine=$00  decompiler-drifted=$7f
$108c: pristine=$00  decompiler-drifted=$e7
$108d: pristine=$00  decompiler-drifted=$ff
$1090: pristine=$00  decompiler-drifted=$60
$1093: pristine=$00  decompiler-drifted=$06
$109a: pristine=$00  decompiler-drifted=$0c
$109d: pristine=$00  decompiler-drifted=$05
$109f: pristine=$00  decompiler-drifted=$08
$10a0: pristine=$00  decompiler-drifted=$0d
$10a1: pristine=$00  decompiler-drifted=$0b
$10a2: pristine=$00  decompiler-drifted=$ff
$10a4: pristine=$00  decompiler-drifted=$06
$10a6: pristine=$00  decompiler-drifted=$0a
$10a7: pristine=$00  decompiler-drifted=$0a
$10a8: pristine=$00  decompiler-drifted=$04
$10a9: pristine=$00  decompiler-drifted=$ff
$10ab: pristine=$00  decompiler-drifted=$06
$10ad: pristine=$00  decompiler-drifted=$0a
$10ae: pristine=$00  decompiler-drifted=$0a
$10af: pristine=$00  decompiler-drifted=$03
$10b0: pristine=$00  decompiler-drifted=$ff
$10bb: pristine=$00  decompiler-drifted=$80
$10c2: pristine=$00  decompiler-drifted=$80
$10c8: pristine=$00  decompiler-drifted=$08
$10db: pristine=$00  decompiler-drifted=$11
$10dc: pristine=$00  decompiler-drifted=$23
$10df: pristine=$00  decompiler-drifted=$68
$10e0: pristine=$00  decompiler-drifted=$ff
$10e2: pristine=$00  decompiler-drifted=$15
$10e3: pristine=$00  decompiler-drifted=$28
$10e6: pristine=$00  decompiler-drifted=$20
$10e7: pristine=$00  decompiler-drifted=$ff
$10e9: pristine=$00  decompiler-drifted=$15
$10ea: pristine=$00  decompiler-drifted=$28
$10ed: pristine=$00  decompiler-drifted=$20
$10ee: pristine=$00  decompiler-drifted=$ff
$10f0: pristine=$00  decompiler-drifted=$01
$117f: pristine=$00  decompiler-drifted=$01
$1183: pristine=$00  decompiler-drifted=$02
$1363: pristine=$00  decompiler-drifted=$0c
$13c3: pristine=$00  decompiler-drifted=$0c
$141f: pristine=$00  decompiler-drifted=$5f
$14eb: pristine=$90  decompiler-drifted=$b0
$14fd: pristine=$00  decompiler-drifted=$09
$1514: pristine=$00  decompiler-drifted=$08
$1734: pristine=$00  decompiler-drifted=$4f
$173c: pristine=$00  decompiler-drifted=$ff
$175e: pristine=$00  decompiler-drifted=$02
$1763: pristine=$00  decompiler-drifted=$08
$176d: pristine=$00  decompiler-drifted=$01
$177d: pristine=$00  decompiler-drifted=$06
$17c7: pristine=$00  decompiler-drifted=$28
$17cf: pristine=$00  decompiler-drifted=$30
$17db: pristine=$00  decompiler-drifted=$10
$17fe: pristine=$00  decompiler-drifted=$07
$1800: pristine=$00  decompiler-drifted=$f0
$1807: pristine=$00  decompiler-drifted=$10
```

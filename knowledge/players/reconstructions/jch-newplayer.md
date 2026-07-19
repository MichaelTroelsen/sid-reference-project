# jch-newplayer — reconstruction manifest

See `knowledge/players/jch-newplayer.md` for the full Verification narrative
(this closes JCH NewPlayer V13 specifically — the tracker-dynasty hub, top
of SIDM2's own disassembly priority list). This file records the exact
byte-level patch table, recomputed directly from the original HVSC payloads
and the surviving reassembled `.prg` files.

## File 1: `MUSICIANS/A/Abaddon/Apina.sid` (JCH_NewPlayer_V13)

load/init `$1000`, play `$1003`, payload 3,921 bytes.

**Unpatched first-pass reassembly: 73/3915 bytes differ (98.1354%)** — note
the reassembly's own modeled range is 3,915 bytes, 6 short of the file's
3,921; the file's own last 6 bytes (`$1f4b-$1f50`, all `$FF`) sit outside
SIDdecompiler's touched-memory model entirely and are a separate,
non-blocking tail-padding gap, not part of this patch:

```
$100b: pristine=$0d  decompiler-drifted=$07
$100c: pristine=$d0  decompiler-drifted=$c1
$100d: pristine=$d1  decompiler-drifted=$39
$100e: pristine=$d2  decompiler-drifted=$be
$100f: pristine=$22  decompiler-drifted=$07
$1010: pristine=$22  decompiler-drifted=$31
$1011: pristine=$22  decompiler-drifted=$52
$1014: pristine=$30  decompiler-drifted=$16
$1015: pristine=$30  decompiler-drifted=$2b
$1016: pristine=$30  decompiler-drifted=$37
$1017: pristine=$18  decompiler-drifted=$1e
$1018: pristine=$18  decompiler-drifted=$1e
$1019: pristine=$18  decompiler-drifted=$1e
$101c: pristine=$fe  decompiler-drifted=$ff
$101e: pristine=$10  decompiler-drifted=$20
$101f: pristine=$38  decompiler-drifted=$18
$172c: pristine=$3e  decompiler-drifted=$5c
$172d: pristine=$6e  decompiler-drifted=$8c
$172e: pristine=$9a  decompiler-drifted=$b9
$1744: pristine=$03  decompiler-drifted=$0c
$1745: pristine=$03  decompiler-drifted=$07
$1746: pristine=$0b  decompiler-drifted=$0a
$1747: pristine=$00  decompiler-drifted=$02
$1749: pristine=$00  decompiler-drifted=$02
$174f: pristine=$01  decompiler-drifted=$00
$1751: pristine=$10  decompiler-drifted=$20
$1752: pristine=$38  decompiler-drifted=$18
$1753: pristine=$5f  decompiler-drifted=$05
$1754: pristine=$5f  decompiler-drifted=$0b
$1758: pristine=$00  decompiler-drifted=$41
$1759: pristine=$31  decompiler-drifted=$05
$175a: pristine=$31  decompiler-drifted=$05
$175c: pristine=$30  decompiler-drifted=$16
$175d: pristine=$30  decompiler-drifted=$2b
$175e: pristine=$30  decompiler-drifted=$37
$175f: pristine=$18  decompiler-drifted=$1e
$1760: pristine=$18  decompiler-drifted=$1e
$1761: pristine=$18  decompiler-drifted=$1e
$1764: pristine=$ff  decompiler-drifted=$01
$1767: pristine=$00  decompiler-drifted=$02
$176b: pristine=$22  decompiler-drifted=$07
$176c: pristine=$2b  decompiler-drifted=$29
$176d: pristine=$0d  decompiler-drifted=$72
$1776: pristine=$00  decompiler-drifted=$09
$1779: pristine=$00  decompiler-drifted=$78
$1781: pristine=$02  decompiler-drifted=$04
$1785: pristine=$0c  decompiler-drifted=$08
$1787: pristine=$20  decompiler-drifted=$40
$1789: pristine=$01  decompiler-drifted=$00
$178b: pristine=$00  decompiler-drifted=$01
$178e: pristine=$00  decompiler-drifted=$08
$178f: pristine=$51  decompiler-drifted=$7a
$1790: pristine=$02  decompiler-drifted=$0b
$1791: pristine=$68  decompiler-drifted=$0c
$1792: pristine=$80  decompiler-drifted=$40
$1793: pristine=$20  decompiler-drifted=$00
$1794: pristine=$c0  decompiler-drifted=$40
$1795: pristine=$08  decompiler-drifted=$05
$1797: pristine=$09  decompiler-drifted=$07
$1799: pristine=$10  decompiler-drifted=$90
$179a: pristine=$01  decompiler-drifted=$0d
$179c: pristine=$08  decompiler-drifted=$04
$179d: pristine=$1b  decompiler-drifted=$00
$179e: pristine=$10  decompiler-drifted=$73
$179f: pristine=$02  decompiler-drifted=$00
$17a0: pristine=$08  decompiler-drifted=$13
$17a1: pristine=$27  decompiler-drifted=$0b
$17a3: pristine=$07  decompiler-drifted=$10
$17a4: pristine=$1c  decompiler-drifted=$0b
$17a7: pristine=$00  decompiler-drifted=$40
$17ad: pristine=$00  decompiler-drifted=$80
$17b6: pristine=$00  decompiler-drifted=$80
$17b9: pristine=$00  decompiler-drifted=$fb
```

**Patched reassembly vs. pristine payload: 0/3915 (100.0000%, full coverage
region).** Trace-diff (300 PAL frames, init `$1000`/play `$1003`): 2,603
register-write lines, exact match.

## File 2: `MUSICIANS/D/DRAX/Church.sid` (JCH_NewPlayer_V13)

load/init `$1000`, play `$1003`, payload 4,062 bytes.

**Unpatched first-pass reassembly: 68/4062 bytes differ**, the same two
address ranges as file 1 — confirms this is a stable player-internal table,
not per-file noise:

```
$100b: pristine=$05  decompiler-drifted=$07
$100c: pristine=$ce  decompiler-drifted=$85
$100e: pristine=$ca  decompiler-drifted=$0a
$100f: pristine=$05  decompiler-drifted=$06
$1011: pristine=$b9  decompiler-drifted=$3e
$1014: pristine=$09  decompiler-drifted=$0b
$1016: pristine=$51  decompiler-drifted=$32
$1019: pristine=$10  decompiler-drifted=$28
$101a: pristine=$ff  decompiler-drifted=$fe
$101c: pristine=$ff  decompiler-drifted=$fe
$101d: pristine=$48  decompiler-drifted=$00
$101e: pristine=$20  decompiler-drifted=$08
$101f: pristine=$50  decompiler-drifted=$30
$172c: pristine=$7b  decompiler-drifted=$76
$172d: pristine=$a5  decompiler-drifted=$a0
$172e: pristine=$d0  decompiler-drifted=$ca
$1744: pristine=$05  decompiler-drifted=$07
$1746: pristine=$04  decompiler-drifted=$14
$174d: pristine=$01  decompiler-drifted=$00
$174f: pristine=$01  decompiler-drifted=$00
$1750: pristine=$48  decompiler-drifted=$00
$1751: pristine=$20  decompiler-drifted=$08
$1752: pristine=$50  decompiler-drifted=$30
$1753: pristine=$0e  decompiler-drifted=$02
$1754: pristine=$17  decompiler-drifted=$2f
$1758: pristine=$17  decompiler-drifted=$41
$1759: pristine=$0e  decompiler-drifted=$02
$175a: pristine=$15  decompiler-drifted=$02
$175c: pristine=$09  decompiler-drifted=$0b
$175e: pristine=$51  decompiler-drifted=$32
$1761: pristine=$10  decompiler-drifted=$28
$1764: pristine=$ff  decompiler-drifted=$01
$1767: pristine=$00  decompiler-drifted=$02
$176b: pristine=$15  decompiler-drifted=$17
$176d: pristine=$b9  decompiler-drifted=$5e
$1774: pristine=$08  decompiler-drifted=$05
$1776: pristine=$00  decompiler-drifted=$09
$1779: pristine=$00  decompiler-drifted=$08
$1781: pristine=$04  decompiler-drifted=$02
$1784: pristine=$0c  decompiler-drifted=$03
$1787: pristine=$30  decompiler-drifted=$20
$1788: pristine=$30  decompiler-drifted=$40
$178a: pristine=$01  decompiler-drifted=$00
$178d: pristine=$04  decompiler-drifted=$08
$178e: pristine=$04  decompiler-drifted=$10
$178f: pristine=$0f  decompiler-drifted=$08
$1790: pristine=$0f  decompiler-drifted=$52
$1791: pristine=$0f  decompiler-drifted=$08
$1792: pristine=$00  decompiler-drifted=$b0
$1793: pristine=$00  decompiler-drifted=$e0
$1794: pristine=$00  decompiler-drifted=$80
$1795: pristine=$0c  decompiler-drifted=$0a
$1796: pristine=$0c  decompiler-drifted=$02
$1797: pristine=$0c  decompiler-drifted=$0a
$1799: pristine=$50  decompiler-drifted=$90
$179a: pristine=$0a  decompiler-drifted=$0c
$179c: pristine=$14  decompiler-drifted=$08
$179d: pristine=$09  decompiler-drifted=$02
$179e: pristine=$60  decompiler-drifted=$54
$179f: pristine=$43  decompiler-drifted=$04
$17a0: pristine=$1f  decompiler-drifted=$08
$17a1: pristine=$46  decompiler-drifted=$31
$17a2: pristine=$41  decompiler-drifted=$00
$17a3: pristine=$1d  decompiler-drifted=$05
$17a4: pristine=$44  decompiler-drifted=$2d
$17b4: pristine=$b0  decompiler-drifted=$50
$17b6: pristine=$c0  decompiler-drifted=$40
$17b9: pristine=$02  decompiler-drifted=$01
```

**Patched reassembly vs. pristine payload: 0/4062 (100.0000%, full payload,
no tail caveat).** Trace-diff (300 PAL frames): 2,829 register-write lines,
exact match.

Both figures recomputed directly from the surviving `apina_orig.prg`/
`apina2.prg`/`apina_v2_patched.prg` and `church_orig.prg`/`church_v2.prg`/
`church_v2_patched.prg` scratchpad files, matching the card's own reported
percentages exactly.

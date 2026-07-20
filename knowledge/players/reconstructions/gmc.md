# gmc — reconstruction manifest

See `knowledge/players/gmc.md` for the full Verification narrative. This file records the exact byte-level patches, recomputed directly from the original HVSC payload and the surviving reassembled `.prg` files.

## File 1: `MUSICIANS/A/Akadem/Boogie.sid`

load `$1000` (PSID header load address `$0000`, real load address taken from payload), init `$18EA`, play `$14EA`, subtunes 1, payload 4,553 bytes. The `-v2` memory-touch map reported `Start: $1014`, so the disassembly was relocated to `$1014`; the first 20 bytes (`$1000-$1013`) are runtime-unaccessed and were omitted from the reassembly. 45 bytes patched in the self-modified working-storage table `$1026-$10B8` (unpatched reassembly → 99.0020%; patched → 100.0000%, confirmed by direct byte-diff against the pristine payload):

```
$1026: pristine=$c3  decompiler-drifted=$0f
$1028: pristine=$00  decompiler-drifted=$0c
$1029: pristine=$10  decompiler-drifted=$43
$102c: pristine=$fe  decompiler-drifted=$00
$102f: pristine=$fe  decompiler-drifted=$00
$1035: pristine=$c1  decompiler-drifted=$0f
$1037: pristine=$00  decompiler-drifted=$0c
$1038: pristine=$0f  decompiler-drifted=$43
$103a: pristine=$03  decompiler-drifted=$07
$1041: pristine=$10  decompiler-drifted=$07
$1042: pristine=$24  decompiler-drifted=$0b
$1043: pristine=$24  decompiler-drifted=$0b
$1044: pristine=$5b  decompiler-drifted=$0e
$1045: pristine=$1a  decompiler-drifted=$13
$1046: pristine=$18  decompiler-drifted=$12
$1047: pristine=$00  decompiler-drifted=$08
$1055: pristine=$11  decompiler-drifted=$41
$1058: pristine=$02  decompiler-drifted=$07
$105b: pristine=$02  decompiler-drifted=$07
$1062: pristine=$30  decompiler-drifted=$48
$1068: pristine=$80  decompiler-drifted=$00
$1069: pristine=$50  decompiler-drifted=$00
$106a: pristine=$00  decompiler-drifted=$c0
$106b: pristine=$59  decompiler-drifted=$55
$106c: pristine=$05  decompiler-drifted=$07
$1070: pristine=$00  decompiler-drifted=$30
$1073: pristine=$00  decompiler-drifted=$08
$107d: pristine=$01  decompiler-drifted=$00
$107e: pristine=$01  decompiler-drifted=$00
$107f: pristine=$01  decompiler-drifted=$00
$1080: pristine=$36  decompiler-drifted=$03
$108e: pristine=$02  decompiler-drifted=$00
$1092: pristine=$01  decompiler-drifted=$00
$1096: pristine=$01  decompiler-drifted=$03
$1098: pristine=$01  decompiler-drifted=$00
$109b: pristine=$04  decompiler-drifted=$00
$109f: pristine=$00  decompiler-drifted=$01
$10a6: pristine=$06  decompiler-drifted=$00
$10aa: pristine=$f3  decompiler-drifted=$ee
$10af: pristine=$00  decompiler-drifted=$02
$10b3: pristine=$01  decompiler-drifted=$00
$10b5: pristine=$03  decompiler-drifted=$33
$10b6: pristine=$20  decompiler-drifted=$81
$10b7: pristine=$01  decompiler-drifted=$05
$10b8: pristine=$7d  decompiler-drifted=$94
```

After patching, the reassembled `.prg` byte-diffs at 0/4,509 against the pristine payload and re-traces byte-for-byte identically to the original (50 frames, `sidm2-sid-trace.exe`, init `$18EA`, play `$14EA`).

## File 2: `MUSICIANS/N/NecroPolo/GMC-Brandnew.sid`

load `$0A00`, init `$18EA`, play `$14EA`, subtunes 1, payload 11,224 bytes. The `-v2` map `Start:` matched the PSID load address, so the disassembly was relocated to `$0A00` and reassembled to the full file length. **Unpatched byte-diff: 99.2694% (82/11,224 bytes differ)**, all in the same player-internal drifted-table region around `$1018-$1053` (the same mechanism as file 1, at slightly different absolute bounds because this file's player code is preceded by song data at `$0A00-$0FFF`). **Trace-diff: exact — 251/251 register writes identical** over 50 frames. The 82 drifted bytes were not hand-patched; the exact-trace result confirms the table values are overwritten before being read, matching the file-1 conclusion.

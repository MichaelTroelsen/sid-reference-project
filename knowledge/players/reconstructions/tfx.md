# tfx — reconstruction manifest

See `knowledge/players/tfx.md` for the full Verification narrative. This file
records the exact byte-level patches, recomputed directly from the original HVSC
payload and the surviving reassembled `.prg` file.

**Scope caveat:** this manifest is based on a **single** examined file
(`MUSICIANS/P/PCH/TFX_Test.sid`). The reconstruction reached 100% byte-exact and
trace-exact after patching; a second independent TFX file should still be tested
to confirm the drift pattern generalizes across the family.

## File 1: `MUSICIANS/P/PCH/TFX_Test.sid`

PSID header: `loadAddr` field `$0000` → real load `$1000`, init `$1000`, play
`$1003`, subtunes 1, payload 4,281 bytes. 64 bytes patched (unpatched reassembly
→ 98.5050%; patched → 100.0000% byte-exact, trace-exact over 50 frames):

```
$11b9: pristine=$00  decompiler-drifted=$60
$11be: pristine=$00  decompiler-drifted=$f1
$11c5: pristine=$00  decompiler-drifted=$f0
$16d2: pristine=$00  decompiler-drifted=$80
$18ed: pristine=$00  decompiler-drifted=$fe
$18ee: pristine=$00  decompiler-drifted=$20
$18f0: pristine=$00  decompiler-drifted=$f1
$18f1: pristine=$00  decompiler-drifted=$19
$18f2: pristine=$00  decompiler-drifted=$03
$18f3: pristine=$00  decompiler-drifted=$06
$18f5: pristine=$00  decompiler-drifted=$01
$18f9: pristine=$00  decompiler-drifted=$03
$18fa: pristine=$00  decompiler-drifted=$06
$18fb: pristine=$00  decompiler-drifted=$18
$18fc: pristine=$00  decompiler-drifted=$01
$18fd: pristine=$00  decompiler-drifted=$1d
$18fe: pristine=$00  decompiler-drifted=$fd
$1900: pristine=$00  decompiler-drifted=$03
$1901: pristine=$00  decompiler-drifted=$0f
$1903: pristine=$00  decompiler-drifted=$01
$191b: pristine=$00  decompiler-drifted=$03
$1921: pristine=$00  decompiler-drifted=$08
$1923: pristine=$00  decompiler-drifted=$a8
$1928: pristine=$00  decompiler-drifted=$08
$192f: pristine=$00  decompiler-drifted=$08
$1932: pristine=$00  decompiler-drifted=$0f
$1935: pristine=$00  decompiler-drifted=$0c
$1936: pristine=$00  decompiler-drifted=$14
$1937: pristine=$00  decompiler-drifted=$66
$1939: pristine=$00  decompiler-drifted=$0f
$193c: pristine=$00  decompiler-drifted=$0c
$193d: pristine=$00  decompiler-drifted=$14
$193e: pristine=$00  decompiler-drifted=$70
$1940: pristine=$00  decompiler-drifted=$0f
$1943: pristine=$00  decompiler-drifted=$12
$1944: pristine=$00  decompiler-drifted=$41
$1945: pristine=$00  decompiler-drifted=$26
$194a: pristine=$00  decompiler-drifted=$04
$194b: pristine=$00  decompiler-drifted=$02
$1951: pristine=$00  decompiler-drifted=$04
$1952: pristine=$00  decompiler-drifted=$02
$1954: pristine=$00  decompiler-drifted=$10
$1958: pristine=$00  decompiler-drifted=$06
$1959: pristine=$00  decompiler-drifted=$04
$195d: pristine=$00  decompiler-drifted=$4e
$195e: pristine=$00  decompiler-drifted=$06
$195f: pristine=$00  decompiler-drifted=$01
$1960: pristine=$00  decompiler-drifted=$01
$1964: pristine=$00  decompiler-drifted=$58
$1965: pristine=$00  decompiler-drifted=$06
$1966: pristine=$00  decompiler-drifted=$01
$1967: pristine=$00  decompiler-drifted=$01
$196b: pristine=$00  decompiler-drifted=$26
$196c: pristine=$00  decompiler-drifted=$03
$196d: pristine=$00  decompiler-drifted=$03
$196e: pristine=$00  decompiler-drifted=$01
$1973: pristine=$00  decompiler-drifted=$02
$1981: pristine=$00  decompiler-drifted=$01
$1989: pristine=$00  decompiler-drifted=$06
$198a: pristine=$00  decompiler-drifted=$08
$1990: pristine=$00  decompiler-drifted=$06
$1991: pristine=$00  decompiler-drifted=$08
$1997: pristine=$00  decompiler-drifted=$11
$1998: pristine=$00  decompiler-drifted=$18
```

The first four patched bytes (`$11B9`, `$11BE`, `$11C5`, `$16D2`) are
self-modified immediate operands; the rest (`$18ED-$18FE`, `$1900-$1903`, etc.)
are a read/write working-storage table that SIDdecompiler captured as
post-execution values. All pristine bytes are `$00`.

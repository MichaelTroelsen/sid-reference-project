# jch-newplayer-v20 — reconstruction manifest

See `knowledge/players/jch-newplayer-v20.md` for the full Verification
narrative. This is the FIRST real disassembly pass on JCH NewPlayer V20 —
previously a `status: stub` card seeded entirely from one external,
never-cross-checked Codebase64 spec page. Method: identical to
`jch-newplayer.md`'s V13 closure (same project, same session precedent) —
`SIDdecompiler.exe -a4096 -z -d -c -v2`, `64tass.exe -a --cbm-prg`, byte-diff
against the pristine PSID payload, cross-reference every diverging address
against the `-v2` memory-touch map, patch, re-diff, then trace-diff
(`sidm2-sid-trace.exe`, 300 PAL frames).

## File 1: `MUSICIANS/A/Agemixer/Eternal_Light.sid` (JCH_NewPlayer_V20)

PSID header: load `$1000`, init `$1000`, play `$1003` (the same "packed"
convention as V13 — init/play vectors *at* the load address). Payload 3,616
bytes.

**Unpatched first-pass reassembly: 56/3616 bytes differ (98.4513%)**, all in
two address clusters structurally identical in *location* to V13's own two
drifted-table regions (`$100b-$101f`, `$172c-$17c0` there vs. `$1007-$101d`,
`$172e-$1966` here — engine layout shifted slightly, same two-region shape):

```
$1007: pristine=$01  decompiler-drifted=$02
$1008: pristine=$01  decompiler-drifted=$04
$100c: pristine=$ce  decompiler-drifted=$42
$100d: pristine=$83  decompiler-drifted=$05
$100e: pristine=$15  decompiler-drifted=$0b
$100f: pristine=$05  decompiler-drifted=$03
$1010: pristine=$0f  decompiler-drifted=$1f
$1011: pristine=$1a  decompiler-drifted=$0d
$1014: pristine=$11  decompiler-drifted=$07
$1015: pristine=$1b  decompiler-drifted=$1f
$1016: pristine=$2b  decompiler-drifted=$1f
$101b: pristine=$fe  decompiler-drifted=$ff
$101d: pristine=$08  decompiler-drifted=$00
$172e: pristine=$db  decompiler-drifted=$21
$172f: pristine=$db  decompiler-drifted=$6a
$1730: pristine=$e9  decompiler-drifted=$c8
$1731: pristine=$20  decompiler-drifted=$1a
$1732: pristine=$24  decompiler-drifted=$1a
$1733: pristine=$28  decompiler-drifted=$1a
$1734: pristine=$cb  decompiler-drifted=$07
$1735: pristine=$cb  decompiler-drifted=$4c
$1736: pristine=$cb  decompiler-drifted=$99
$1737: pristine=$20  decompiler-drifted=$1a
$1738: pristine=$24  decompiler-drifted=$1a
$1739: pristine=$28  decompiler-drifted=$1a
$1746: pristine=$02  decompiler-drifted=$01
$1749: pristine=$01  decompiler-drifted=$00
$1751: pristine=$00  decompiler-drifted=$1b
$1752: pristine=$00  decompiler-drifted=$03
$1753: pristine=$00  decompiler-drifted=$11
$1758: pristine=$00  decompiler-drifted=$0f
$175b: pristine=$00  decompiler-drifted=$02
$176a: pristine=$04  decompiler-drifted=$00
$1776: pristine=$01  decompiler-drifted=$00
$1779: pristine=$0c  decompiler-drifted=$12
$177c: pristine=$02  decompiler-drifted=$03
$1781: pristine=$04  decompiler-drifted=$00
$1782: pristine=$20  decompiler-drifted=$1c
$1785: pristine=$0a  decompiler-drifted=$0f
$1787: pristine=$86  decompiler-drifted=$2a
$1788: pristine=$1b  decompiler-drifted=$23
$178a: pristine=$eb  decompiler-drifted=$03
$178b: pristine=$00  decompiler-drifted=$01
$178d: pristine=$80  decompiler-drifted=$00
$178e: pristine=$80  decompiler-drifted=$00
$1791: pristine=$69  decompiler-drifted=$04
$1792: pristine=$8f  decompiler-drifted=$67
$1796: pristine=$29  decompiler-drifted=$03
$1797: pristine=$4e  decompiler-drifted=$4f
$1799: pristine=$00  decompiler-drifted=$01
$17b3: pristine=$05  decompiler-drifted=$07
$17b4: pristine=$1b  decompiler-drifted=$1f
$17b5: pristine=$1f  decompiler-drifted=$2b
$17bd: pristine=$fe  decompiler-drifted=$ff
$1965: pristine=$26  decompiler-drifted=$03
$1966: pristine=$26  decompiler-drifted=$03
```

Every one of these 56 addresses is marked `+` (read+write) in the `-v2`
memory-touch map — the same drifted-working-storage pattern already closed
on `dmc`, `cheesecutter`, `roland-hermans`, `sidwizard`, and V13 of this same
player. Patched the `.asm`'s `.byte` lines back to pristine values (script
tracks both labeled lines and unlabeled continuation `.byte` lines by
running address — see `patch_asm.js` below): **0/3616 (100.0000% byte-exact)
after patching.**

Trace-diff (300 PAL frames, init `$1000`/play `$1003`): 2,002 lines
identical between original and patched reconstruction (only the tool's own
echoed input filename differs).

## File 2: `MUSICIANS/B/Balboa/Beach_Party_1988_tune_1.sid` (JCH_NewPlayer_V20)

PSID header: load `$1000`, init `$1000`, play `$1003`. Payload 2,964 bytes.
Different composer, same player version — confirms the pattern is
player-internal, not per-file noise.

**Unpatched: 47/2964 bytes differ (98.4143%)**, identical two address
clusters (`$100b-$101f`, `$172d-$17c7`):

```
$100b: pristine=$01  decompiler-drifted=$00
$100c: pristine=$b8  decompiler-drifted=$ce
$100d: pristine=$00  decompiler-drifted=$42
$100e: pristine=$00  decompiler-drifted=$d2
$100f: pristine=$49  decompiler-drifted=$05
$1010: pristine=$00  decompiler-drifted=$37
$1011: pristine=$20  decompiler-drifted=$22
$1014: pristine=$1a  decompiler-drifted=$18
$1015: pristine=$18  decompiler-drifted=$38
$1017: pristine=$18  decompiler-drifted=$0a
$101e: pristine=$10  decompiler-drifted=$30
$101f: pristine=$10  decompiler-drifted=$18
$172d: pristine=$66  decompiler-drifted=$75
$172e: pristine=$a0  decompiler-drifted=$bf
$172f: pristine=$d2  decompiler-drifted=$e2
$1730: pristine=$f2  decompiler-drifted=$0b
$1733: pristine=$19  decompiler-drifted=$1a
$1746: pristine=$04  decompiler-drifted=$03
$1751: pristine=$09  decompiler-drifted=$06
$1752: pristine=$13  decompiler-drifted=$06
$1753: pristine=$14  decompiler-drifted=$0c
$1758: pristine=$03  decompiler-drifted=$01
$175a: pristine=$01  decompiler-drifted=$00
$175b: pristine=$01  decompiler-drifted=$00
$175c: pristine=$01  decompiler-drifted=$00
$175d: pristine=$81  decompiler-drifted=$41
$175e: pristine=$09  decompiler-drifted=$10
$175f: pristine=$81  decompiler-drifted=$10
$1773: pristine=$59  decompiler-drifted=$1d
$1776: pristine=$00  decompiler-drifted=$01
$1779: pristine=$66  decompiler-drifted=$7b
$177c: pristine=$01  decompiler-drifted=$ff
$1781: pristine=$04  decompiler-drifted=$08
$1784: pristine=$01  decompiler-drifted=$7a
$178a: pristine=$01  decompiler-drifted=$03
$1795: pristine=$02  decompiler-drifted=$03
$1796: pristine=$14  decompiler-drifted=$25
$1797: pristine=$0f  decompiler-drifted=$18
$17ad: pristine=$18  decompiler-drifted=$0a
$17b1: pristine=$10  decompiler-drifted=$30
$17b2: pristine=$10  decompiler-drifted=$18
$17b3: pristine=$1a  decompiler-drifted=$18
$17b4: pristine=$18  decompiler-drifted=$38
$17c3: pristine=$f9  decompiler-drifted=$db
$17c4: pristine=$f9  decompiler-drifted=$a8
$17c6: pristine=$f9  decompiler-drifted=$db
$17c7: pristine=$f9  decompiler-drifted=$a8
```

All 47 addresses `+`-marked in `-v2`. **Patched: 0/2964 (100.0000%
byte-exact).** Trace-diff (300 PAL frames): 1,439 lines identical
(filename-only difference).

## File 3: `MUSICIANS/A/Agemixer/Dash_It.sid` (JCH_NewPlayer_V20) — variant build

PSID header: load `$1000`, **init `$2170`, play `$2182`** — NOT the packed
convention (entry vectors deep in memory, not at the load address). The
core player engine is still present at `$1000`/`$1003` (`jmp $1040`/
`jmp $10c1`, byte-identical code layout to files 1/2), but this file adds a
~48-byte wrapper/wrapper-dispatcher at `$216f-$219e` that the PSID header's
own init/play vectors actually point at — it maintains a small state byte
(`$216f`) and JSRs into the core engine's routines via a **self-modified
JSR target** (`sta l2196+1` writes the low byte of a `jsr $10xx` at
`$2195-$2197`, selecting between `$1003` and `$1006` depending on state).
This is a distinct "per-game/per-release wrapper" convention, not a
different player build — worth flagging for anyone who assumes V20's entry
point is always the load address.

**Unpatched: 72/4511 bytes differ (98.4039%)** — same two core-engine
clusters (now at `$100c-$101f`, `$1755-$17eb`, shifted because this build's
data layout differs slightly) **plus two additional bytes outside the core
clusters**: `$216f` (the wrapper's own working state byte, `+`-marked) and
`$2196` (the self-modified JSR operand low byte, marked `_` = operand+write
in the `-v2` map — i.e. self-modifying code, not a `.byte` table entry):

```
$1009: pristine=$0f  decompiler-drifted=$0e
$100c: pristine=$74  decompiler-drifted=$08
$100d: pristine=$09  decompiler-drifted=$21
$100e: pristine=$60  decompiler-drifted=$22
$100f: pristine=$03  decompiler-drifted=$3e
$1010: pristine=$3e  decompiler-drifted=$4e
$1011: pristine=$29  decompiler-drifted=$4e
$1014: pristine=$09  decompiler-drifted=$34
$1015: pristine=$2f  decompiler-drifted=$2b
$1016: pristine=$28  decompiler-drifted=$2b
$1019: pristine=$16  decompiler-drifted=$08
$101a: pristine=$ff  decompiler-drifted=$fe
$101d: pristine=$88  decompiler-drifted=$78
$101e: pristine=$08  decompiler-drifted=$28
$101f: pristine=$90  decompiler-drifted=$28
$1755: pristine=$12  decompiler-drifted=$8a
$1756: pristine=$9e  decompiler-drifted=$d4
$1757: pristine=$e4  decompiler-drifted=$17
$175a: pristine=$1a  decompiler-drifted=$1b
$176d: pristine=$08  decompiler-drifted=$05
$176e: pristine=$0b  decompiler-drifted=$05
$176f: pristine=$00  decompiler-drifted=$01
$1770: pristine=$10  decompiler-drifted=$00
$1778: pristine=$03  decompiler-drifted=$0d
$1779: pristine=$15  decompiler-drifted=$0c
$177b: pristine=$80  decompiler-drifted=$00
$177c: pristine=$00  decompiler-drifted=$80
$177e: pristine=$0f  decompiler-drifted=$00
$1781: pristine=$06  decompiler-drifted=$00
$1784: pristine=$41  decompiler-drifted=$10
$1785: pristine=$10  decompiler-drifted=$41
$1786: pristine=$11  decompiler-drifted=$41
$17a9: pristine=$04  decompiler-drifted=$14
$17aa: pristine=$10  decompiler-drifted=$14
$17ab: pristine=$00  decompiler-drifted=$69
$17ac: pristine=$0c  decompiler-drifted=$07
$17ad: pristine=$6c  decompiler-drifted=$07
$17ae: pristine=$40  decompiler-drifted=$10
$17af: pristine=$21  decompiler-drifted=$c0
$17b0: pristine=$00  decompiler-drifted=$c0
$17b1: pristine=$81  decompiler-drifted=$0e
$17b2: pristine=$09  decompiler-drifted=$0d
$17b3: pristine=$08  decompiler-drifted=$0d
$17b6: pristine=$09  decompiler-drifted=$93
$17b9: pristine=$0e  decompiler-drifted=$5d
$17ba: pristine=$07  decompiler-drifted=$26
$17bb: pristine=$69  decompiler-drifted=$26
$17bc: pristine=$01  decompiler-drifted=$03
$17bd: pristine=$01  decompiler-drifted=$00
$17be: pristine=$03  decompiler-drifted=$00
$17bf: pristine=$04  decompiler-drifted=$08
$17c0: pristine=$01  decompiler-drifted=$00
$17c1: pristine=$05  decompiler-drifted=$00
$17d3: pristine=$16  decompiler-drifted=$08
$17d4: pristine=$88  decompiler-drifted=$78
$17d5: pristine=$08  decompiler-drifted=$28
$17d6: pristine=$90  decompiler-drifted=$28
$17d7: pristine=$09  decompiler-drifted=$34
$17d8: pristine=$2f  decompiler-drifted=$2b
$17d9: pristine=$28  decompiler-drifted=$2b
$17e0: pristine=$ff  decompiler-drifted=$fe
$17e3: pristine=$c9  decompiler-drifted=$00
$17e4: pristine=$01  decompiler-drifted=$03
$17e5: pristine=$00  decompiler-drifted=$03
$17e6: pristine=$7b  decompiler-drifted=$1a
$17e7: pristine=$27  decompiler-drifted=$9a
$17e8: pristine=$49  decompiler-drifted=$9a
$17e9: pristine=$7b  decompiler-drifted=$1a
$17ea: pristine=$27  decompiler-drifted=$9a
$17eb: pristine=$49  decompiler-drifted=$9a
$216f: pristine=$ff  decompiler-drifted=$03
$2196: pristine=$03  decompiler-drifted=$06
```

71 of 72 were patchable via the `.asm`-level `.byte` patch (same script);
`$2196` is inside a real instruction (`jsr` operand low byte), not a `.byte`
line, so it needed a **direct byte patch on the assembled `.prg`** at file
offset `(0x2196 - loadAddr)` instead — set to the pristine value `$03`
(confirmed by reading the raw payload bytes at `$2195-$2197`:
`$20 $03 $10` = `JSR $1003` in the real file, vs. the decompiler's
drifted `$20 $06 $10` = `JSR $1006`). **Patched: 0/4511 (100.0000%
byte-exact).**

Trace-diff (300 PAL frames, init `$2170`/play `$2182`): 980 lines identical
(filename-only difference) — confirming the wrapper wiring and the
self-modified JSR both reconstruct correctly. As a side note: re-tracing
with the `$2196` byte left unpatched (i.e. the 71-of-72 partial patch)
produced an **identical** 300-frame trace to the fully-patched version —
that one byte is dead in this particular file's playback (never read before
being overwritten), the same "drifted-but-harmless" outcome as most of
V13's own patch set, not evidence the byte doesn't matter in general.

## Tooling used

- `SIDdecompiler.exe <file>.sid -o<file>.asm -a4096 -z -d -c -v2`
- `64tass.exe -a --cbm-prg -o <file>.prg <file>.asm`
- `bytediff.js` / `bytediff_detail.js` — byte-diff the reassembled `.prg`
  payload against the pristine PSID payload (handles `loadAddr === 0`
  header convention).
- `patch_asm.js` — patches `.asm` `.byte` directives back to pristine
  values by walking both labeled lines (`lXXXX .byte ...`) AND unlabeled
  continuation `.byte` lines (tracking a running address that resets on any
  non-`.byte` line) — needed here because SIDdecompiler emits many
  single-byte-per-line `.byte` continuations (each commented
  "Unreferenced data") that a label-only patcher would silently miss.
- `checkmap.js` — cross-references a list of hex addresses against the
  `-v2` memory-touch-map log lines.
- `sidm2-sid-trace.exe <file>.prg <frames> <init_hex> <play_hex>` — direct
  binary invocation (no MCP tool needed); a proper `.prg` was built for the
  *original* SID payload too (2-byte real load address + stripped payload),
  never handing a raw `.sid` path to the tracer directly (see this
  project's own lesson about that).

All scratchpad files (`.asm`/`.prg`/patch JSON/trace logs for all three
files) live under this session's scratchpad `np20/` subdirectory — not
committed, per project convention (scratchpad is ephemeral/session-local).

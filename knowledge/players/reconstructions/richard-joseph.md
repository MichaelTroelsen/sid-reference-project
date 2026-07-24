# richard-joseph — reconstruction manifest

See `knowledge/players/richard-joseph.md` for the full Verification narrative.
This file records the exact byte-level patches and relocation notes,
recomputed directly from the original HVSC payloads and the surviving
reassembled `.prg` files.

## Relocation note (applies to all 3 files)

`SIDdecompiler.exe`'s own `-v2` memory-access map reports `Start: $0200` for
all 3 files below, far below each file's real PSID load address. This is a
genuine, separate low-RAM scratch block the player touches at runtime
(read+write counters/accumulators), disjoint from the loaded code/data block
— NOT the usual "dropped leading byte" trap. Relocating to the PSID header's
own load address produces a plausible-looking but 16-bit-wrapped reassembly
(64tass emits `-Wwrap-pc`/`-Wwrap-mem` and a two-disjoint-`Data:`-range
report) because SIDdecompiler emits one continuous byte stream spanning its
entire captured range (`$0200` to the file's real end address), with no gap
for the large genuinely-untouched region in between. Fix: always relocate
with `-a512` (decimal for `$0200`), regardless of the file's own load
address — this produced a clean, non-wrapping, contiguous `.asm`/`.prg` for
all 3 files, with the real code landing exactly on its header-confirmed
load/init/play addresses (zero further shift needed, since `$0200` requires
no additional delta itself in this case).

Disassemble command used (per file, decimal 512 = `$0200`):
```
SIDdecompiler.exe <file>.sid -o<file>.asm -a512 -z -d -c -v2
```

## File 1: `MUSICIANS/J/Joseph_Richard/Barbarian.sid`

load `$97c0`, init `$b527`, play `$b470`, subtunes 12, payload 7,616 bytes.
4 bytes patched (unpatched reassembly -> 99.9475%; patched -> 100.0000%,
confirmed by direct byte-diff against the pristine payload). All 4 are a
small self-modified 4-byte working-storage block (`l97c2`-`l97c3`,
`l97c6`-`l97c7`, both read+written by the `play` routine) that
SIDdecompiler's default trace window baked in at a post-execution runtime
value rather than the cold-load value (which is `$00` throughout):

```
$97c2: pristine=$00  decompiler-drifted=$d5
$97c3: pristine=$00  decompiler-drifted=$14
$97c6: pristine=$00  decompiler-drifted=$d4
$97c7: pristine=$00  decompiler-drifted=$30
```

Trace-diff (`sidm2-sid-trace.exe`, 50 frames, init `$b527`/play `$b470`):
subtunes 0, 1, 5, 11 all 0 diff lines against the original file's trace.

## File 2: `MUSICIANS/J/Joseph_Richard/Cauldron_II.sid`

load `$9f20`, init `$a760`, play `$a78d`, subtunes 17, payload 3,776 bytes.
2 bytes patched (unpatched reassembly -> 99.9470%; patched -> 100.0000%).
Both are self-modified *immediate-operand* bytes (the `lda #$xx` at the
very start of `play`, and at `la794`, both later targets of an `sty
la794+1`-style self-modification) — same class of drift as
`digitalizer.md`'s case, localized to an instruction operand rather than a
data table:

```
$a78e: pristine=$00  decompiler-drifted=$f0   (operand of `play  lda #$xx`)
$a794: pristine=$00  decompiler-drifted=$1b   (operand of `la794 lda #$xx`)
```

Trace-diff (50 frames, init `$a760`/play `$a78d`): subtunes 0, 8, 16 all 0
diff lines against the original file's trace.

## File 3: `MUSICIANS/J/Joseph_Richard/Sacred_Armour_of_Antiriad.sid`

load `$a36e`, init `$c411`, play `$c3ac`, subtunes 24, payload 8,369 bytes.
Reassembly first failed with `error: not defined symbol 'lc2a1'` — two
self-modified-accumulator instructions referenced `lc2a1+2` and (separately,
correctly) `lc2b7-22`, both arithmetically the same true address (`$c2a1`),
but SIDdecompiler never emitted an `lc2a1` label because that byte is the
*operand* of a `lda #$04` sitting mid-instruction, not a disassembly-unit
boundary the tool labels. Fixed by adding a plain equate immediately after
the `* = $0200` origin line:
```
lc2a1 = $c2a1
```
(deliberately a numeric constant, not an attempt to force a label onto that
byte position — see gotcha 19's caution about labels vs. numeric equates.)

After that fix, 3 bytes were self-modified/drifted working storage
(unpatched reassembly -> 99.9642%; patched -> 100.0000%):

```
$afb2: pristine=$00  decompiler-drifted=$58
$afb3: pristine=$00  decompiler-drifted=$02
$c214: pristine=$36  decompiler-drifted=$17   (NOTE: pristine is $36, not $00 —
                                                confirmed by direct read of the
                                                original payload before
                                                assuming a zero/dead value)
```

Trace-diff (50 frames, init `$c411`/play `$c3ac`): subtunes 0, 1, 23 all 0
diff lines against the original file's trace.

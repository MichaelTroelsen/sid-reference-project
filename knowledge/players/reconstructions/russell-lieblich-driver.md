# russell-lieblich-driver — reconstruction manifest

See `knowledge/players/russell-lieblich-driver.md` for the full Verification
narrative. This file records the exact reconstruction method and the byte-level
divergence between the original HVSC payloads and the reassembled `.prg` files.

## Method (identical for all files below)

```
SIDdecompiler.exe <file>.sid -o<file>.asm -a<decimal load addr> -z -d -c -v1
64tass.exe -a --cbm-prg -o <file>.prg <file>.asm
```

For every file the `-v2` memory-map `Start:` address equalled the PSID header
load address exactly (no gotcha-40 relocation shift needed). The relocation
base is the PSID load address.

## What the byte-diffs are

Every mismatched byte is a **post-execution snapshot** SIDdecompiler captured
of either (a) driver working storage that is unconditionally written before
being read, or (b) a self-modifying-code operand byte. Patching the whole
diff set back to the pristine cold-start SID-payload values yields a
**register-write-exact** trace (`trace-diff = 0` over 100 frames) on every
file. Confirmed on Star_Rank_Boxing_II by a per-byte isolation test: all 212
diverging bytes are *individually* dead (leaving any single one unpatched
still traced identically to the original), and all-dead-together is
trace-exact.

The diffs cluster in two places on every file:
- a contiguous state/table block immediately after the load address (the
  cold-boot working area the init routine overwrites), and
- scattered single self-modified operand bytes inside the play routine
  (e.g. Top_Fuel `l40dc lda #$33` fed by `sta l40dc+1`; `l40f4 lda #$30`
  fed by `inc l40f4+1`) — the entry-43 immediate-operand class.

## Per-file results (all 100-frame traces via `sidm2-sid-trace.exe`)

| File | load | init | play | payload | byte-match (as-emitted) | trace after patch-to-pristine |
|------|------|------|------|---------|------------------------|-------------------------------|
| Gee_Bee_Air_Rally | `$9de0` | `$a440` | `$a443` | 3372 | 98.2503% (59 diff) | exact, all 4 subtunes |
| Top_Fuel_Eliminator | `$4000` | `$40d0` | `$40d3` | 2141 | 96.9640% (65 diff) | exact |
| Transformers | `$0a90` | `$1398` | `$139c` | 2626 | 96.8393% (83 diff) | exact |
| GFL_Championship_Football | `$4000` | `$40eb` | `$4106` | 2280 | 91.9525% (183 diff) | exact |
| Star_Rank_Boxing_II | `$c000` | `$c87c` | `$c885` | 2199 | 90.3593% (212 diff) | exact |

Diverging address ranges (all patched to pristine → trace-exact):

```
Gee_Bee:   $9dfe $9e7b $a02d-$a02e $a237-$a238 $a444 $a44c $a44e $a464
           $a582-$a645 (state block + operands)
Top_Fuel:  $4002-$40c5 (state block) $40d4 $40dc $40de $40f4 $41ad $41af $41b1
Transformers: $ba5-$f90 (scattered operands) $139d-$14d1 (state block + operands)
GFL:       $4000-$40c3 (state block) $419a-$419b $42a2-$42a3 $4327-$4328 $4511-$4512
Star_Rank: $c000-$c0c7 (state block) $c150-$c4c8 (scattered) $c896
```

## Known tool blocker

`Aliens.sid` (the card's original 2026-07-14 reference file: load `$2437`,
init `$3100`, play `$312e`, 3 subtunes) reproducibly **crashes SIDdecompiler
v0.8** (exit 127) during the output-generation phase — the `-v2` emulation
memory-map prints in full (`Start: $2437 End: $345f`), then the tool exits
without writing the `.asm`. Persists across `-1`, `-S1`, `-t`, `-C` variations.
Not pursued further (RetroDebugger unavailable this pass — singleton). The 5
files above are independent of it.

## Not attempted this pass

- 3 RSID files (`Little_Computer_People`, `Master_of_the_Lamps`,
  `Master_of_the_Lamps_PAL`) have `play=$0000` (IRQ-installed RSID) — need the
  entry-13 `-P` override or a live trace to locate the real per-frame entry.
- `Howard_the_Duck` and `Web_Dimension` (both PSID) untraced. `Web_Dimension`
  additionally shows a `-v2` `Start:$42b0` vs load `$73df` mismatch — a
  gotcha-40 relocation case to handle before diffing it.

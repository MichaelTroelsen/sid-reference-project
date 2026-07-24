# kris-hatlelid — reconstruction manifest

See `knowledge/players/kris-hatlelid.md` for the full Verification narrative.
This file records the exact byte-level patch tables, recomputed directly
from the original HVSC payload and the surviving reassembled `.prg`, for
both files carried to `status: verified`.

## File 1: `MUSICIANS/H/Hatlelid_Kris/Castlevania.sid`

PSID, load `$0f00` (embedded in the payload's own first 2 bytes — PSID
header load-address field is `$0000`), init `$5400`, play `$54b0`,
40 subtunes. Disassembled with
`SIDdecompiler.exe Castlevania.sid -oCastlevania.asm -a3840 -z -d -c -v2`
(3840 decimal = `$0f00`). The `-v2` map's own "Start:" address matched
`$0f00` exactly — no relocation-shift gotcha needed for this file.
Reassembled clean with `64tass.exe`, no warnings.

**Raw reassembly vs. pristine payload: 132/23002 bytes differ (99.4261%).**
All differing bytes cluster in a per-voice working-storage block right
after the play routine (`$54c8-$5680`, ~108 of the 132 bytes) plus a
handful of scattered single self-modified bytes further out (`$578c`,
`$57a7`, `$57b8`, `$58ba`, `$599c`, `$5c2f`, `$5f5e`, `$5f62`).

**Patch test (subtune-sampled, per agent lessons_learned entry 28/42-style
verification):** traced subtunes 0, 1, 5, 20, 39 of the UNPATCHED
reassembly against the original. Subtunes 0, 1, 20 were already
register-write-exact (0 diff lines) despite the byte-diff — but subtunes
5 and 39 showed real, substantial divergence (508 and 78 differing trace
lines respectively, pulse-width-modulation values wrong from frame 1
onward). This is the confirmed counter-example to assuming a same-file
"dead in one subtune -> dead everywhere in that file" pattern (this
project's `hard_won_gotchas` 41) — the working-storage block IS
load-bearing for at least 2 of Castlevania's 40 subtunes.

Patched all 132 differing bytes directly in the assembled `.prg` (131 of
132 were `$00`, one was `$ff` at `$5c2f`):

```
$54c9: reassembled=$ff real=$00      $551e-$551f: reassembled=$8c,$89 real=$00,$00
$54e1: reassembled=$01 real=$00      $5564: reassembled=$01 real=$00
$54f4-$54f9: reassembled=$b2,$90,    $5566: reassembled=$01 real=$00
  $b5,$90,$bb,$90 real=$00 (x6)      $5568: reassembled=$01 real=$00
$54fe-$54ff: reassembled=$ba,$8b     $5574: reassembled=$01 real=$00
  real=$00,$00                      $5576: reassembled=$01 real=$00
$5504-$5509: reassembled=$cf,$90,    $55a4-$55b9: per-voice pointer/table
  $cf,$90,$cf,$90 real=$00 (x6)       bytes, all real=$00 (18 bytes)
$550e-$550f: reassembled=$84,$8c     $55be-$55bf: reassembled=$ae,$1a
  real=$00,$00                        real=$00,$00
$5514-$5519: reassembled=$46,$89,    $55c4-$55d1: pointer/table bytes,
  $46,$89,$23,$89 real=$00 (x6)        all real=$00 (12 bytes)
                                     $55dc-$5680: further per-voice
                                       table bytes, all real=$00
                                       (~70 bytes across this range)
$578c: reassembled=$7f real=$00
$57a7: reassembled=$1a real=$00
$57b8: reassembled=$01 real=$00
$58ba: reassembled=$37 real=$00
$599c: reassembled=$aa real=$00
$5c2f: reassembled=$05 real=$ff       <- the one non-$00 real value
$5f5e: reassembled=$9f real=$00
$5f62: reassembled=$90 real=$00
```

(Full 132-line table generated at `scratchpad/kris-hatlelid/castlevania_patch_table.txt`
this session — not guaranteed to persist; see this directory's own
`README.md`.)

**Patched reassembly vs. pristine payload: 0/23002 bytes differ
(100.0000%).** All 40 subtunes (30 frames each) traced register-write-exact
against the original — 0 mismatches across the full subtune sweep.

Surviving scratchpad files (this session's scratchpad; not guaranteed to
persist): `Castlevania.sid`, `Castlevania.asm`, `Castlevania.prg`,
`Castlevania_orig.prg`, `Castlevania_patched.prg`,
`castlevania_patch_table.txt`, `trace_orig*.txt`, `trace_reasm*.txt`,
`trace_patched_*.txt`, `to_*.txt`, `tp_*.txt`.

## File 2: `MUSICIANS/H/Hatlelid_Kris/Teenage_Mutant_Ninja_Turtles.sid`

PSID, load `$474e`, init `$5560`, play `$5563`, 14 subtunes. First
relocation attempt at `-a18254` (decimal for `$474e`, the PSID load
address) produced a `-v2` memory map whose own "Start:" address was
`$0a80` — well below the load address (this player's driver keeps a fixed
low-page runtime scratch area that is NOT part of the file's own payload
at all). Re-disassembled at `-a2688` (decimal for `$0a80`) per this
project's `hard_won_gotchas` 40.

The disassembly also emitted 30 distinct `l<hex>+1`-suffixed labels
(e.g. `l940b+1 beq l9424`) that 64tass rejects as invalid label syntax —
self-modified-operand addresses the disassembler names relative to an
adjacent instruction's own address rather than minting an independent
label. Fixed via the project's standard remedy: for each base `lXXXX`,
left an anchor label on the instruction itself (`lXXXX_anc`), added a
separate assignment `lXXXX_1 = lXXXX_anc + 1`, and replaced every other
`lXXXX+1` reference in the file with `lXXXX_1` (script:
`scratchpad/kris-hatlelid/fix_labels.js`, applied programmatically to all
30 base labels: `l0e96`, `l0e9a`, `l0e9c`, `l0e9e`, `l0f78`, `l120b`,
`l8f28`, `l8f4c`, `l8f72`, `l9080`, `l9084`, `l9086`, `l9088`, `l909e`,
`l90d1`, `l90e7`, `l9133`, `l919d`, `l91af`, `l91f7`, `l9259`, `l932f`,
`l93b3`, `l93f5`, `l940b`, `l9473`, `l9487`, `l948b`, `l95f1`, `l963a`).
Reassembled clean after the fix.

**Raw reassembly vs. pristine payload: 117/16210 bytes differ (99.2782%).**
114 of 117 diffs cluster in a per-voice working-storage block right after
the file's own load address (`$474e-$490e`); the remaining 3
(`$4a71`, `$4b53`, `$4de6`) and 4 more (`$5564-$5565`, `$55cb-$55d0`) are
scattered self-modified bytes further into the code.

**Patch test (subtune-sampled):** traced subtunes 0, 1, 5, 10, 13 of the
UNPATCHED reassembly against the original. All 5 showed only a 2-line
diff, confined entirely to the trace harness's cold-memory preamble dump
of `Mem[$5563..]` (a self-modified jump-table target the harness prints
before executing anything) — never in the actual traced register-write
CSV body. I.e. this file was already register-write-exact pre-patch for
every subtune sampled; the byte-diff cluster's runtime effect is fully
absorbed/overwritten before any SID register write occurs, at least for
the 5 subtunes tested.

Patched all 117 differing bytes directly in the assembled `.prg` (116 of
117 were `$00`, one was `$ff` at `$4de6`; the harness-preamble bytes
`$5564-$5565` and `$55cb`/`$55cc` were also `$ff` in the pristine file):

```
$474e: reassembled=$ff real=$00       $4880-$4885: reassembled=$c4,$09,
$4750-$4752: reassembled=$ff,$ff,       $c4,$09,$dc,$05 real=$00 (x6)
  $ff real=$00 (x3)                   $4890-$4895: reassembled=$e1,$32,
$4760-$4762: reassembled=$01,$01,       $3e,$26,$97,$0c real=$00 (x6)
  $01 real=$00 (x3)                   $48d9-$48fc: further per-voice
$4770-$4772: reassembled=$24,$24,       table bytes, all real=$00
  $18 real=$00 (x3)                     (~29 bytes across this range)
$4778-$477d: reassembled=$22,$52,     $490d-$490e: reassembled=$01,$01
  $07,$52,$ef,$51 real=$00 (x6)         real=$00,$00
$4788-$478d: reassembled=$19,$54,
  $41,$53,$45,$52 real=$00 (x6)       $4a71: reassembled=$37 real=$00
$4798-$479d: reassembled=$2f,$55,     $4b53: reassembled=$78 real=$00
  $2f,$55,$0c,$55 real=$00 (x6)       $4de6: reassembled=$6a real=$ff  <- non-$00
$47a8-$47bc: table/flag bytes,        $5564-$5565: reassembled=$ea,$8f
  all real=$00 (9 bytes)                real=$ff,$ff  <- non-$00 (x2, preamble-only)
$47e8-$47fa: table/flag bytes,        $55cb-$55cc: reassembled=$1b,$6a
  all real=$00 (6 bytes)                real=$ff,$ff  <- non-$00 (x2, preamble-only)
$481a: reassembled=$0d real=$00       $55ce: reassembled=$88 real=$00
$4828-$482d: reassembled=$5f,$32,     $55d0: reassembled=$90 real=$00
  $bc,$25,$97,$0c real=$00 (x6)
$4838-$483d: same pattern, real=$00 (x6)
$4848-$484a: reassembled=$3a,$35,$22 real=$00 (x3)
$4850-$4855: reassembled=$d6,$06,$4d,$08,$dc,$05 real=$00 (x6)
$4860-$4865: reassembled=$dc,$05,$dc,$05,$f4,$01 real=$00 (x6)
$4870-$4875: reassembled=$dd,$31,$3a,$25,$97,$0c real=$00 (x6)
```

(Full 117-line table generated at `scratchpad/kris-hatlelid/tmnt_patch_table.txt`
this session — not guaranteed to persist.)

**Patched reassembly vs. pristine payload: 0/16210 bytes differ
(100.0000%).** All 14 subtunes (30 frames each) traced register-write-exact
against the original — 0 mismatches across the full subtune sweep.

Surviving scratchpad files (this session's scratchpad; not guaranteed to
persist): `Teenage_Mutant_Ninja_Turtles.sid`, `TMNT.asm`, `TMNT_fixed.asm`,
`fix_labels.js`, `TMNT_fixed.prg`, `TMNT_orig.prg`, `TMNT_patched.prg`,
`tmnt_patch_table.txt`, `tmnt_o_*.txt`, `tmnt_p_*.txt`, `tmnt_to_*.txt`,
`tmnt_tf_*.txt`.

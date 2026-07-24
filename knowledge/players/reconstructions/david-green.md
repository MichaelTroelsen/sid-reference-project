# david-green — reconstruction manifest

See `knowledge/players/david-green.md` for the full Verification narrative.
This file records the exact byte-level patches and tooling quirks needed to
get all three tested `David_Green`-tagged files to a register-write-exact
reconstruction.

Three independent findings this pass added, beyond the standard
drifted-working-storage pattern already documented elsewhere in this KB:

1. **`SIDdecompiler`'s emulation touches unrelated default-state memory
   ($0400-ish screen RAM, read-only) well below the file's own load
   address on every file in this family** — its own `-v2` map reports
   this as `Start:` and invites the gotcha-40 "relocate to Start" fix,
   but doing so here is a trap: the low-memory reads are KERNAL/screen-
   clear boilerplate the tool's own reset emulation performs, wholly
   unconnected to the file's actual code, which genuinely does start at
   the header's own load address every time (confirmed: the printed
   memory map always shows clean `x`/`o` execute/operand markers exactly
   at the header's load address, contiguous through to the real end of
   the file, with only `?`/`r` in between). The fix that actually works:
   relocate with `-a<decimal for the SAME address the -v2 map reports as
   Start>` when Start ≠ load address (giving an identity map, offset 0) —
   for `Advert.sid` and `Reckless_Rufus.sid` that Start was $0400 (decimal
   1024); for `Boing.sid` it was $a000 (decimal 40960, coincidentally
   equal to that file's own load address). Always use the tool's own
   reported Start, not a fixed assumption — it varies file to file even
   within one player family.
2. **`Reckless_Rufus.sid` needs `-M` (multi-instance Hubbard-driver
   parsing) despite never being flagged `Rob_Hubbard` in this project's
   own player tag** — `SIDdecompiler` prints `"1 Rob Hubbard driver
   instance(s) found."` for this file on its own heuristic, and without
   `-M` the tool silently traces only subtune 0 (ignoring `-s`/`-S`
   entirely — passing `-s1`/`-s3` produced no change in behavior, still
   "Emulating subtune 0 play") and under-captures the tail 1,348 bytes of
   the real 5,426-byte payload (`-v2` End stuck at $efed vs the header's
   real end $f531), producing a misleadingly bad 74.1% byte-diff that
   looks like genuinely different code (per gotcha 4) but is actually
   just an under-traced file. Adding `-M` alone (no other flag change)
   fixed `Subtunes: 4` correctly, extended End to the true $f531, and
   raised the byte-diff to 98.6% before any patching — the single biggest
   lever in this pass, the same shape of discovery as the `music-assembler`
   run-stub and FutureComposer vector-table cases already logged
   elsewhere in this KB. `Boing.sid` and `Advert.sid` did not need `-M`.
3. **A self-modified pointer-table ALIAS (not a literal `.byte` value) can
   drift too, and 64tass will happily reassemble the wrong `<label`/
   `>label` reference with no warning** — found on `Reckless_Rufus.sid`:
   a 6-byte "current song" pointer table (`song00`) that in the pristine
   file holds `<lee48,<lee81,<lef0c,>lee48,>lee81,>lef0c` (subtune 0's own
   track-data addresses) was captured by the disassembler holding
   `<song00trk00,<song00trk01,<song00trk02,...` instead — the addresses of
   a DIFFERENT, later-defined data block that happens to be subtune 3's
   (the last subtune played during the tool's internal 30,000-play-call
   trace) own track pointers. Both labels exist and both resolve to valid,
   assemblable addresses, so nothing about the reassembly looks wrong
   until the byte-diff is checked — a scattered-single-byte diff pattern
   at the pointer bytes themselves (not the pointed-to data) is the tell.
   Same underlying mechanism as every other drifted-workspace case in this
   KB, just manifesting through a symbolic alias rather than a raw byte.

## File 1: `MUSICIANS/G/Green_David/Advert.sid`

load `$a400`, init `$a400`, play `$a441`, payload 3,830 bytes, 1 subtune.
Relocated with `-a1024` (Start: $0400, per finding 1 above). 33 bytes
patched, all plain `.byte` literals in a working-storage block right after
`init` (all `+`-marked read+write in the `-v2` map — cold-boot pitch/pulse-
width/filter-setup table read once during INIT and never rewritten before
that first read, i.e. load-bearing, not dead — see the Verification section
of the main card for the actual frame-0-divergent trace this caused before
patching):

```
$ab05-$ab09, $ab0d-$ab0f, $ab13-$ab15, $ab1b-$ab1c, $ab24-$ab26,
$ab2e-$ab2f, $ab80-$ab82, $abc0-$abc2, $abc9, $abd0, $abd2,
$abd6-$abd7, $acb1-$acb3, $acb7
```

Unpatched reassembly → 99.1384% byte-exact, trace **diverges** at frame 0
(15 SID writes in the original vs 13, with wrong oscillator
frequency/pulse-width values — a real, audible difference, not dead
workspace). Patched → 100.0000% byte-exact, trace register-write-exact
over 50 frames / 1 subtune.

## File 2: `MUSICIANS/G/Green_David/Reckless_Rufus.sid`

load `$e000`, init `$e000`, play `$e041`, payload 5,426 bytes, 4 subtunes.
Required `-M` (see finding 2). Relocated with `-a1024` (Start: $0400).
74 raw byte-diffs patched across four distinct mechanisms:

Plain `.byte` literals (65 of 74 raw byte-diffs, all `+`/`w`-marked
working storage, mostly in the $e700-$e8e2 range plus two scattered
singles):

```
$e040, $e704-$e705, $e707-$e708, $e70d-$e70e, $e710-$e711, $e713-$e714,
$e71a-$e71c, $e724-$e726, $e72c-$e72f, $e780-$e782, $e7c0-$e7c2, $e7cd,
$e7d0, $e7d2-$e7d5, $e7d7-$e7d8, $e8a8-$e8aa, $e8ac, $e8ae, $e8b0-$e8b4,
$e8b7, $e8ba, $e8bc, $e8bf, $e8d4-$e8d8, $e8da-$e8e2, $ea68-$ea69
```

Self-modified immediate operands (instruction text patched directly,
since 64tass would otherwise assemble the *decompiler's drifted snapshot*
value as a literal `#$xx`):

```
$e1a1: pristine=$82  decompiler-drifted=$c1   ("lda #$c1" -> "lda #$82")
$e26c: pristine=$00  decompiler-drifted=$02   ("cmp #$02" -> "cmp #$00")
$e30b: pristine=$05  decompiler-drifted=$02   ("sbc #$02" -> "sbc #$05")
```

Self-modified absolute-address operand (low byte only; high byte already
matched):

```
$e432-$e433: pristine target=$e700  decompiler-drifted target=$e789
  ("sta le789" -> "sta le700")
```

Self-modified pointer-table alias (finding 3 above; 5 of the 6 bytes of
the `song00` label's own definition line differ — the 6th byte, the high
byte of the third track pointer, coincidentally matches between the
pristine and drifted values):

```
song00 .byte <song00trk00, <song00trk01, <song00trk02,
             >song00trk00, >song00trk01, >song00trk02
  -->
song00 .byte <lee48, <lee81, <lef0c, >lee48, >lee81, >lef0c
```

Unpatched reassembly (after adding `-M`) → 98.6362% byte-exact. Patched →
100.0000% byte-exact, register-write-exact trace on all 4 subtunes
(50 frames each).

## File 3: `MUSICIANS/G/Green_David/Boing.sid`

load `$a000`, init `$afb0` (NOT equal to load — the only tested file in
this family where init isn't load or load+offset-from-a-fixed-convention),
play `$a041`, payload 4,031 bytes, 7 subtunes. Relocated with `-a40960`
(Start: $a000, coincidentally equal to load here). No `-M` needed.
54 bytes patched:

51 plain `.byte` literals (`+`/`w`-marked working storage, same
$a700-$a8ba-shaped cluster as Reckless_Rufus, plus scattered singles at
$a705-$a728 and one at $aa1b).

3 self-modified operands, same class as file 2:

```
$a277: pristine=$12  decompiler-drifted=$fe   ("cmp #$fe" -> "cmp #$12")
$a448: pristine target=$d416  decompiler-drifted target=$d4ff
  ("sta $d4ff" -> "sta $d416")
$a44e: pristine target=$d417  decompiler-drifted target=$d4ff
  ("sta $d4ff" -> "sta $d417")
```

Unpatched reassembly → 98.6604% byte-exact. Patched → 100.0000%
byte-exact, register-write-exact trace on all 7 subtunes (50 frames each).

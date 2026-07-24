# oliver-klaewer — reconstruction manifest

See `knowledge/players/oliver-klaewer.md` for the full Verification narrative.
This file records the exact byte-level patch tables, recomputed directly from
each original HVSC payload and its surviving reassembled `.prg`.

Both files disassembled with `SIDdecompiler.exe -a<decimal load addr> -z -d -c
-v2` and reassembled with `64tass.exe -a --cbm-prg`. Both files' `-v2` map
"Start:" address matched the PSID header's own load address exactly — no
relocation-shift issue (gotcha 40) on either file.

## File: `MUSICIANS/K/Klaewer_Oliver/Emerald_Mine.sid`

PSID load `$c000`, init `$c000` (`jmp lc9ee`), play `$c003` (`jmp lca47`),
payload 4096 bytes, 1 subtune.

Reassembly: 4092 bytes ($c000-$cffb) — 4 bytes short of the real 4096
(`$cffc-$cfff` never touched by SIDdecompiler's default trace, silently
dropped; confirmed genuinely unreferenced across a 50-frame direct trace of
the original file too — not merely under-traced).

**Raw reassembly vs. pristine payload (compared region only): 55/4092 bytes
differ (98.6559%).** All 55 fall inside `+`/`w`-marked (self-modified)
regions of the `-v2` memory map — a per-voice pulse-width sweep accumulator
table. `init` (`lc9ee`) explicitly zeros several of these same addresses at
cold start (`lcfb6`,`lcfb7`,`lcfb8`,`lcfb9`,`lcfba`,`lcfbb`,`lcfdf`,`lcfe0`,
`lcfe1`,`lcfc1-lcfc6`), confirming this is live working storage the play
routine both reads and writes every frame (`ldx #$18` / `lda lcda7,X` loop in
`lca47`), not constant data — the classic drifted-workspace pattern (this
KB's gotchas 40/41).

Patch table (pristine bytes, from the original payload):

```
$cda7-$cda8 : 3a 04
$cdab-$cdab : 40
$cdad-$cdb2 : fa e4 29 30 09 42
$cdb4-$cdb6 : cb 9d 45
$cdb8-$cdb9 : 08 11
$cdbb-$cdbf : c5 00 00 f1 1f
$cfb6-$cfb6 : 00
$cfb9-$cfbb : 00 00 00
$cfc0-$cfcc : 10 00 00 00 00 00 00 02 5a 17 02 36 13
$cfce-$cfce : 04
$cfd0-$cfd0 : f1
$cfd3-$cfd3 : 1f
$cfd9-$cfda : 20 10
$cfdc-$cfdc : 07
$cfde-$cfe2 : 01 00 00 00 09
$cfe5-$cfe5 : 01
$cfe7-$cfe9 : 18 3f 3c
$cfeb-$cfeb : 40
$cff8-$cff8 : 00
$cffa-$cffb : 01 09
```

Patched directly into the assembled `.prg` at each address (offset = addr −
load + 2, per this KB agent's gotcha 26/32 direct-binary-patch technique —
simpler than editing `.asm` labels since every diff here is a plain single
byte, no multi-byte pointer operands involved).

**Patched reassembly vs. pristine payload: 0/4092 bytes differ (100% of the
compared region).**

**Trace test** (`sidm2-sid-trace.exe`, init `$c000`/play `$c003`, 50 frames):
- Unpatched: diverges from frame 0 (`osc2_pw_lo`/`osc2_pw_hi` written to
  wrong values — confirmed by direct diff against the real file's trace).
- Patched: **register-write-identical to the original file over all 50
  frames** (`diff` of the two trace logs, header line excluded, is empty).

## File: `MUSICIANS/K/Klaewer_Oliver/Emerald_Mine_II.sid`

PSID load `$c000`, init `$c000`, play `$c726` (a much deeper play entry than
Emerald Mine I — same driver mechanism, different game's data/dispatch
layout), payload 3328 bytes, 1 subtune.

Reassembly: 3313 bytes ($c000-$ccf0) — 15 bytes short of the real 3328
(`$ccf1-$ccff` never touched, same never-accessed-tail pattern as Emerald
Mine I).

**Raw reassembly vs. pristine payload (compared region only): 64/3313 bytes
differ (98.0682%).** Same mechanism as Emerald Mine I: a self-modified
per-voice pulse-width sweep table, at a different address range for this
build (`$ca9c-$cab4`, `$ccab-$ccef`).

Patch table (pristine bytes, from the original payload):

```
$ca9c-$caa0 : 16 01 00 00 00
$caa2-$caa7 : 00 76 2e 20 0a 42
$caa9-$caac : f9 45 1d 70
$caae-$caae : 80
$cab2-$cab4 : 80 00 0f
$ccab-$ccb0 : 02 04 07 03 0e 1a
$ccb6-$ccb9 : ff 01 04 ff
$ccbb-$ccc3 : 04 00 1b 06 00 1a 02 00 0a
$ccc5-$ccc5 : 00
$ccc8-$ccc8 : 0f
$cccb-$cccb : 00
$cccd-$cccd : 00
$cccf-$cccf : 00
$ccd1-$ccda : 02 0a 0a 00 07 02 06 02 13 01
$ccdc-$ccdc : 00
$ccde-$cce1 : 2d 00 10 00
$cce3-$cce4 : f6 01
$cce6-$cce7 : 00 01
$cced-$cced : 00
$ccef-$ccef : 03
```

**Patched reassembly vs. pristine payload: 0/3313 bytes differ (100% of the
compared region).**

**Trace test** (`sidm2-sid-trace.exe`, init `$c000`/play `$c726`, 50 frames):
- Unpatched: diverges from frame 0 (`osc3_pw_lo`/`osc2_pw_lo`/`osc1_pw_lo`
  written to wrong values).
- Patched: **register-write-identical to the original file over all 50
  frames**.

## Scope note

Only these two files (both 1988, Emerald Mine I/II) were disassembled. The
other 8 `Oliver_Klaewer`-tagged files (`Floating_Point_Action`,
`Great_Compactor_Sampler`, `Introcoder_1_1`, `K_A_O_S`, `Maniax`,
`Soul_Crystal`, `Tronic`, `Zero_Gravity`) have visibly different load/init/
play addresses and were not attempted — they may be one of the composer's
other two self-written drivers (1986 or 1992), not necessarily the same
mechanism confirmed here.

Surviving scratchpad files (this session's scratchpad; not guaranteed to
persist): `em1.asm`, `em1.prg`, `em1_orig.prg`, `em1_patched.prg`, `em2.asm`,
`em2.prg`, `em2_orig.prg`, `em2_patched.prg`, `trace_orig50.txt`,
`trace_patched.txt`, `trace2_orig.txt`, `trace2_patched.txt`,
`trace2_unpatched.txt`, `v2map.txt`, `diffaddrs_em1.json`,
`diffaddrs_em2.json`, `diff.js`, `diff_bytes.js`, `patch.js`, `patch2.js`,
`mapcheck.js`.

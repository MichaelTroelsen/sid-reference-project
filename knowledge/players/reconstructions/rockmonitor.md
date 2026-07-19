# rockmonitor — reconstruction manifest

See `knowledge/players/rockmonitor.md` for the full Verification narrative.
This file records the exact byte-level patch table, recomputed directly from
the original HVSC payload and the surviving reassembled `.prg`.

## File: `MUSICIANS/M/MC/Rockmonitor_5_Intromusic.sid`

The **only** real HVSC RockMon file found to be a plain PSID with a direct
(non-IRQ) play address — every other real DUSAT-line file sampled
(`OPM/Rockmonitor_3.sid`, `MC/Rockmonitor_2.sid`, `MC/Rockmonitor_4.sid`,
`OPM/Rockmonitor_5_Demosong.sid`, `Amaze/Rockmon_IV_plus_Drum_Sample_Demo.sid`,
`Max_F3H/Rockmonitor_4_Tester.sid`, `SIDwave/First_Rockmon.sid`,
`SIDwave/Rockmon_Tech.sid`, `The_Future_Cracker/Rockmonitor_5.sid`,
`The_Future_Cracker/Rockmonitor_VIII.sid`, `The_Insomniac/Rockmonitor_6.sid`)
is an RSID with PSID play address `$0000` (IRQ-driven — matches the card's
own pre-existing "VERIFICATION LIMITATION" quirk). This file's own author
tag in the disassembly is "Marco Swagerman (MC)" — a genuine DUSAT-original
build, not a third-party crack.

PSID load `$0d00`, init `$0d00`, play `$0de3`, payload 3,674 bytes.
Disassembled with `SIDdecompiler.exe -a3328 -z -d -c -v2` (3328 decimal =
`$0d00`; the `-v2` map's own "Start:" address is `$0d00`, matching the PSID
load address exactly — no gotcha 18/27/31-style relocation shift needed
here). Reassembled with `64tass`.

**Raw reassembly vs. pristine payload: 33/3674 bytes differ (99.1018%).**
All 33 differing bytes cluster in two spots: one single byte (`$de4`, the
self-modified immediate operand of `play`'s own countdown `lda #$02` /
`dec play+1` — a divide-down counter driving how often part of the engine
reloads) and a 32-byte block at `$10f5-$115b` (a per-voice, 3-entries-wide
working-storage region — `l10f4`/`l10f7`/`l10fa`/`l1102`/`l1105`/.../`l115c`
— read AND written every step by the per-voice step-fetch routine).

**Patch test (binary-search style, per agent lessons_learned entry 28-style
verification — never assume a cluster's cause without testing):**
- Patching only `$de4` back to the pristine value ($02): **trace still
  diverges identically** (osc PW / filter values wrong from frame 0) — this
  byte is NOT the cause.
- Patching every diff EXCEPT `$de4`: **trace becomes fully exact** over 200
  frames (only the `Mem[]` cold-start dump differs, at `$de4` itself) — the
  32-byte table block is the entire real cause; `$de4` is dead (a countdown
  value the engine never actually reads within a 200-frame window, or whose
  effect converges/cancels — confirmed dead for playback purposes, not
  merely assumed).

**Patch applied via `.asm` labels** (not raw `.prg` offset patching — see
agent lessons_learned entry 26): walked every `l<hex> .byte ...` line plus
its unlabeled continuation `.byte` lines (a first attempt that only tracked
labeled lines under-patched by 2 bytes, `$1142`/`$112d` — the second byte
sits on an UNLABELED continuation line inside a multi-line `.byte` block,
which is exactly the failure mode entry 26 warns about; fixed by tracking a
running address across contiguous `.byte` lines regardless of whether each
individual line carries its own label).

**Patched reassembly vs. pristine payload: 1/3674 bytes differ (99.9728%)**
— the single residual byte:

```
$de4: pristine=$02  decompiler-drifted=$01
```

Confirmed dead by direct trace test (above): trace-exact over 200 frames
with this one byte still wrong.

Surviving scratchpad files (this session's scratchpad; not guaranteed to
persist — see this directory's own `README.md`):
`Rockmon5_Intro.sid`, `Rockmon5_Intro_orig.prg`, `Rockmon5_Intro.asm`,
`Rockmon5_Intro.prg`, `Rockmon5_Intro_patched2.asm`,
`Rockmon5_Intro_patched2.prg`, `trace_rm5_orig_200.log`,
`trace_rm5_patched2_200.log`.

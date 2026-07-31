# $4753 Softcopy (player routine)

```json
{
  "id": "4753-softcopy",
  "name": "$4753 Softcopy (player routine)",
  "aliases": ["4753_Softcopy"],
  "authors": ["$4753 (Softcopy) - Germany"],
  "released": "~1987-1988 (earliest dated tracks 1987-1988; CSDb's release list for this scener only confirms activity through 1988)",
  "status": "verified",
  "platform": "Native C64 — appears to be German scener $4753's ('Softcopy') own hand-coded player routine, not a general-purpose released tool. Player-ID-fingerprinted across 35 files in this dataset, 34 of which are his own tunes (see composer-concentration note below).",
  "csdb_release": null,

  "memory": {
    "load_address": "CONFIRMED for 32 of 34 real HVSC files under MUSICIANS/0-9/4753_Softcopy/: PSID/RSID load=init=$1000 (verified by reading all 34 real headers directly, not just the two previously cited on CSDb). 2 outliers use load=init=$080d (A_New_Love.sid, Jack_Your_Body.sid); SIDdecompiler hangs on both, but as of 2026-07-31 (batch38) both are reconstructed byte-exact via scripts/dev/dis6502.js and VERIFIED by a relocation control (0 divergences including cycle) — they run the same copied $033C routine with a longer copy, so `verified` covers all 34 of $4753's own files (and, as of batch39 below, all 35 files under the tag). The cross-composer file James_Brown_Is_Dead.sid (Denis Knitter/'Bad') uses a third address, load=$0810/init=$0838, and also hangs SIDdecompiler; it DOES share the routine — relocated a flat +$600 and running in-place at $093C rather than being copied — established structurally in batch32 and VERIFIED by an in-place relocation control in batch39 (0 divergences including cycle). The earlier 'consistent with, but not proof of, it NOT sharing the routine' reading is disproven.",
    "zero_page": "CONFIRMED (disassembly, $1000-convention files): $FD/$FE (a 16-bit pointer walking the current sample segment's raw PCM data) and $02 (the order-list read index). Small, sample-player-shaped ZP usage, not a tracker's usual wide ZP table.",
    "layout": "CONFIRMED (disassembly, $1000-convention files, e.g. Paid_in_Fuff.sid): the file's own $1000+ payload holds (a) a small init/dispatch routine, (b) an order-list byte-stream at $1200 (terminated $FF), (c) a 4-byte-tuple segment table at $1120 ([start_hi,start_lo,end_hi,end_lo] per entry, indexed by order-byte<<2), and (d) the raw PCM sample data itself, scattered through the payload (segments observed starting at $1380/$2300/$2a00/$3100/$3300/$4100/$bf00 in Paid_in_Fuff.sid). CRITICALLY: SIDdecompiler's own '-v2' memory-touch map reports the actual lowest touched address as $033c, NOT $1000 — the real decode/playback subroutine executes from the C64 cassette buffer, at exactly $033c-$03db (160 bytes). It is NOT part of the loaded image at that address: init copies it there from the payload's own $1003-$10a2 with `ldx #$a0 / lda $1002,X / sta $033b,X / dex / bne` (X counts $a0 down to $01, so $1003 lands on $033c), then calls it with `jsr $033c`. Relocating to this Start address (not the PSID header's $1000 load address) was required for a byte-exact reassembly — see gotcha 40/emitted lesson below. Within the copied routine: $038f = the busy-wait delay constant (operand of `ldx #imm` at $038e); $039f/$03a5 = the segment end-address lo/hi `cmp #imm` operands; $03bb = the current source byte scratch; $03bc-$03bf = per-segment working storage written by the dispatcher; $03c0-$03c3 = the constant 4-entry volume LUT ($09,$06,$03,$00); $03c4/$03c5 = saved $d015/A; $03ba = an RTI byte used as the NMI landing pad."
  },
  "entry": {
    "init": "$1000, confirmed for 32/34 real files by direct PSID header read + disassembly of 2 of them (Paid_in_Fuff.sid, Push_It.sid). Init sets zero page/border, then falls into the order-list dispatch loop (no separate 'ready and wait' phase).",
    "play": "$0000 per RSID header convention on every file (no separate PSID play vector) — but disassembly reveals this does NOT mean an installed IRQ/NMI handler drives per-frame playback, contrary to this card's prior inference. It means there is no play phase at all: the entire track (an order-list-driven sequence of PCM sample segments) is decoded and written to $D418 synchronously, inside a single blocking call from init, with interrupts disabled (SEI at entry, CLI at return). It does write the NMI vector ($FFFA/$FFFB <- $03BA, an RTI byte, i.e. RESTORE-key protection) at the top of every segment, but never $FFFE/$FFFF — there is no IRQ handler at all. CONFIRMED by a full VICE trace this pass: over 2000 frames of Paid_in_Fuff.sid, 513,532 of 514,078 register writes are $D418; the other 546 are 26 repetitions of a 21-register `lda #$00 / ldy #$14 / sta $d400,Y` SID clear, one at the top of each played segment."
  },
  "speed": "CONFIRMED (disassembly): not frame-driven at all — the prior card's 'custom IRQ setup' inference was wrong. Sample-rate timing is a hand-tuned busy-wait delay loop (`ldx #<patchable>; dex; bpl`) between each $D418 write, executed with SEI held the whole time. The delay constant is itself patchable per order-list entry: order-list bytes $80-$FF set it to (byte-$80) before continuing; bytes $00-$7F select and play a sample segment via the segment table.",

  "data_format": {
    "order_list": "CONFIRMED (Paid_in_Fuff.sid): byte stream at $1200, terminated by $FF, read sequentially via a ZP index ($02). Two commands only: byte<$80 selects and plays segment N = (byte<<2) indexed into the segment table at $1120; byte>=$80 sets the playback speed constant to (byte-$80) without playing anything, then continues to the next order-list byte. This is a segment-sequencer for a PCM/digi player, not a multi-voice tracker order list.",
    "patterns": "N/A — not a tracker-format player. See order_list/segment table instead: this is a one-shot, order-list-driven digi (PCM sample) player, not a multi-channel music engine.",
    "instruments": "N/A — no instrument concept; see the segment table (data_format notes above / memory.layout) for the closest analogue (each segment = one raw PCM data range).",
    "wavetable": "N/A — playback is direct PCM sample data (2-bit/4-level nibble-unpacked), not a waveform table. The 4-level output LUT is 4 constant bytes at $03c0-$03c3 = $09,$06,$03,$00 (CONFIRMED: byte-identical in both disassembled files and never written at runtime).",
    "pulsetable": "N/A — no pulse-width modulation used; SID is driven purely via $D418 (volume/filter register) pokes for the digi-via-volume trick.",
    "filtertable": "N/A — $D418 is written directly as the sample-level output register (the classic 'digi via volume register' technique), not used for filter sweeps."
  },
  "effects": {
    "encoding": "N/A — no music 'effect' command set exists; the only per-order-list-entry control is the 2-command order-list micro-language documented in data_format.order_list (segment-select / set-speed).",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "COMPOSER-CONCENTRATION SIGNAL: 34 of the 35 files tagged '4753_Softcopy' in this dataset belong to the composer '$4753 (Softcopy)' himself; only 1 file belongs to another composer (Denis Knitter/'Bad' of Fantasia). Per the extraction-template rule of thumb, this level of concentration marks it as a personal/small-scene routine rather than a genuinely published, widely-adopted tool (aggregated from data/composers/*.json; see also knowledge/COVERAGE.md rank #6, 35 files).",
    "CSDb credits scener '$4753' (id=10627) with functions 'Coder and Swapper' in addition to musician — consistent with him having hand-written his own playback routine rather than using someone else's editor: https://csdb.dk/scener/?id=10627",
    "HVSC Musicians.txt lists the handle as '$4753 Softcopy / The 2nd Society - GERMANY' (no real name given): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb lists two German group memberships for $4753: 'Main Underground Service in Commodore' and 'The Second Society' (both ex-member) — the release DJ Collection 1 (1988) crediting '$4753' for sampling work was published by The Second Society: https://csdb.dk/release/?id=104706 and https://csdb.dk/scener/?id=10627",
    "The one cross-composer file (James_Brown_Is_Dead.sid, Denis Knitter/'Bad', 1992, group Fantasia) has a different PSID load/init address than $4753's own Paid_in_Fuff.sid — whether this reflects genuine reuse of the same hand-written routine (relocated/reassembled) or a looser Player-ID/tag match was NOT independently confirmed here; flagged, not asserted.",
    "No entry for this tag in data/sidid.json (SIDId's sidid.nfo) — checked directly, confirmed absent. No CSDb release exists representing this 'player' as a distributed product (csdb_release left null for that reason, not merely unresearched).",
    "Paid_in_Fuff.sid is unusually large for a SID (PSID data size 52,736 / $CE00 bytes) — fits the 'DJ Collection' concept (sampled dance-mix snippets/'digi' audio) referenced in its parent release title. CONFIRMED by disassembly (not just inferred from size/context any more): this is genuinely a one-shot, order-list-driven PCM/digi sample player, not a conventional multi-channel tracker engine — see data_format.order_list.",
    "DISASSEMBLED THIS PASS: SIDdecompiler + 64tass reconstruction of 2 real files (Paid_in_Fuff.sid, Push_It.sid), both using the $1000-load convention, reached 100.0000% byte-exact reassembly (one required patching 23 explained bytes — see Verification). 32 of the 34 real HVSC files under this tag use this same $1000 load/init convention (checked all 34 headers directly this pass); the remaining 2 (A_New_Love.sid, Jack_Your_Body.sid, load/init=$080d) plus the one cross-composer file (James_Brown_Is_Dead.sid, load=$0810/init=$0838) could not be disassembled — SIDdecompiler hangs indefinitely on all three (confirmed via process-still-alive check, not just a slow run) regardless of the '-t' trace-count flag. Genuinely unresolved, not investigated further this pass. SUPERSEDED 2026-07-31: all three were disassembled via RetroDebugger/dis6502.js (batch32, batch38); the two $080d files are now verified by relocation control, the cross-composer file is structurally identified but not verified.",
    "sidm2-sid-trace.exe CANNOT trace this player, but that is a tracer-model mismatch, not a code mystery, and it is NOT a blocker — it was worked around this pass. That tracer fails with 'self-installing IRQ vector never resolved after 2000000 steps (installed=false, handler=$0000)' because its completion heuristic waits for an interrupt vector to be written, which this player never does (it plays the whole track synchronously inside init with SEI held, never touching $FFFE/$FFFF). The project's own VICE wrapper scripts/dev/vsid-trace.js has no such handshake requirement — it runs a real emulated machine and simply logs $D400-$D418 — and traced both disassembled files without complaint (see Verification). Reach for vsid-trace.js, not sidm2-sid-trace.exe, for any file in this family.",
    "DO NOT use SIDdecompiler's -r flag on this player, even though it makes the byte-diff look easier. -r reaches 100.000000% byte-exact on Paid_in_Fuff.sid with no hand patching (vs. 23 bytes needed without it), which is tempting — but it simultaneously DESTROYS the disassembly of the actual decode routine: because that routine's runtime home ($033c-$03db) is below and outside the file's own $1000-$ddff load range, -r resets it to the pristine on-disk image, i.e. to nothing. Measured: in the -r build only 20 of the routine's 160 bytes still match the file's own copy source at $1003-$10a2, versus 152 of 160 in the default build (and those 8 are exactly the self-modified/workspace bytes $038f/$039f/$03a5/$03bb/$03bc-$03bf/$03c4). The byte-diff cannot detect this, because the copy SOURCE at $1003 is genuine file data and passes through verbatim either way."
  ],
  "sources": [
    "Local dataset aggregation: data/composers/*.json (34 files under composer 'Softcopy 4753', 1 under composer 'Bad'); knowledge/COVERAGE.md (rank #6, 35 files, raw tag 4753_Softcopy)",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('$4753 Softcopy / The 2nd Society - GERMANY')",
    "CSDb scener id=10627 ($4753 / Softcopy — handle, country, groups, functions, releases): https://csdb.dk/scener/?id=10627",
    "CSDb sid id=51164 (Paid in Fuff — PSID load/init/play, data size): https://csdb.dk/sid/?id=51164",
    "CSDb sid id=43736 (James Brown Is Dead — PSID load/init, composer Denis Knitter/'Bad'): https://csdb.dk/sid/?id=43736",
    "CSDb release id=104706 (DJ Collection 1, The Second Society, 1988, sampling credit to $4753): https://csdb.dk/release/?id=104706",
    "Checked data/sidid.json — no byTag entry for '4753_Softcopy' (confirmed absent, not just unresearched)",
    "This pass: real files from local HVSC collection, MUSICIANS/0-9/4753_Softcopy/ (all 34 headers read directly) and MUSICIANS/B/Bad/James_Brown_Is_Dead.sid; SIDdecompiler.exe + 64tass.exe disassembly/reassembly of Paid_in_Fuff.sid and Push_It.sid; sidm2-sid-trace.exe attempted on Paid_in_Fuff.sid (blocked, see quirks)",
    "Trace pass (batch29): VICE vsid via scripts/dev/vsid-trace.js, run on Paid_in_Fuff.sid and Push_It.sid — original vs. re-wrapped native reassembly vs. a relocated control build (decode routine moved $033c -> $035c). Full numbers in Verification."
  ]
}
```

## Overview

`4753_Softcopy` is a Player-ID tag matching 35 files in this collection, 34 of
which belong to a single composer: German scener **$4753** (handle also
written "$4753 Softcopy"), a member of Main Underground Service in Commodore
and The Second Society, credited by CSDb with both musician and "Coder and
Swapper" functions. That concentration, plus the coder credit, makes this
very likely his own hand-coded player routine rather than a distributed tool
— there is no CSDb release representing it as a product, and it never
surfaced in the SIDId player index. Active roughly 1987-1988 per his CSDb
release history, with tracks appearing in the group release "DJ Collection 1"
(1988). One file by a
different composer (Denis Knitter/"Bad") also carries the tag, but its PSID
header addresses differ from $4753's own file, so genuine routine-sharing
vs. a loose tag match is unconfirmed.

Disassembly this pass confirmed it is genuinely a hand-written, one-shot
digi/PCM sample player, not a conventional tracker engine: an order-list of
segment-select/set-speed commands drives playback of raw 2-bit (4-level)
nibble-packed sample data through the SID's $D418 volume register, decoded
entirely inside a single blocking `init` call with interrupts disabled — see
`data_format` and Disassembly notes below.

## Quirks & gotchas

See the `quirks` array. Load-bearing points (note: the 32-of-34 split below is superseded — as of batch38 `verified` covers all 34 of $4753's own files): **32 of the 34
real files use a shared $1000 load/init convention** (checked all 34 headers
directly, not just the two originally cited from CSDb) and reassemble
byte-exact from a real disassembly; **2 outlier files (+ the 1 cross-composer
file) use a different load address and hang SIDdecompiler entirely**, an
unresolved, genuine tool limitation, not investigated further; and
**register-write trace verification is now DONE** (batch29) — the previous
pass's "structurally blocked" finding was specific to
`sidm2-sid-trace.exe`, whose completion heuristic waits for an interrupt
vector this player never installs. VICE's `vsid`, driven by the project's
own `scripts/dev/vsid-trace.js`, has no such requirement and traced both
files exactly (see Verification).

## Disassembly notes

Performed this pass on 2 real files (`Paid_in_Fuff.sid`, `Push_It.sid`, both
using the $1000-load convention), via `SIDdecompiler.exe` + `64tass.exe`.

Key finding: SIDdecompiler's own `-v2` memory-touch map reports the true
lowest-touched address as `$033c` (the C64's standard cassette/tape buffer),
NOT the PSID header's `$1000` load address — the real sample-decode/playback
subroutine executes from there. Relocating with `-a828` (decimal for
`$033c`, not `-a4096`/`$1000`) was required to get a non-wrapped, byte-exact
reassembly (see gotcha 40/lesson below); relocating to the header's own load
address produced a full-length but silently address-shifted, badly wrong
reassembly.

Structure confirmed by reading the resulting `.asm` (`Paid_in_Fuff.sid`):
`init` ($1000) is `jmp $10a0`, which first copies 160 bytes from the
payload's own `$1003-$10a2` down to `$033c-$03db` (the cassette buffer) with
`ldx #$a0 / lda $1002,X / sta $033b,X / dex / bne`, then sets up zero
page/border and falls into a dispatch loop at
`$10bf` that reads an order-list byte stream at `$1200` (terminated `$ff`);
each byte either selects a 4-byte segment-table entry at `$1120`
(`[start_hi,start_lo,end_hi,end_lo]`, index = `order_byte<<2`) and calls the
copied decode routine with `jsr $033c` to play that PCM segment, or (if
`byte>=$80`) patches the decode routine's busy-wait delay constant at `$038f`
to `byte-$80` (a speed/pause control) without playing anything. The decode
routine at `$033c` unpacks 4 samples (2 bits/4 levels each) per source byte,
maps each through a 4-entry volume lookup table at `$03c0-$03c3`
(`$09,$06,$03,$00` — constant, never written at runtime; an earlier pass of
this card put the LUT at `$03bc-$03bf`, which is actually the dispatcher's
per-segment working storage), and pokes
the result to `$d418` (SID volume/filter — the classic 'digi via volume
register' technique), with a busy-wait delay loop between writes for sample-
rate timing. The whole thing runs with `SEI` held from `init` entry to
`CLI`/`RTS` at the very end — genuinely no per-frame play phase, matching
the PSID header's `play=$0000`. The routine also toggles the CPU port `$01`
between `$34` (all-RAM, hides `$d000-$dfff` I/O) and `$35` (I/O visible)
around each sample read, because the file's own >48KB payload legitimately
spans across the `$d000-$dfff` address range and must be read there as plain
data, not misinterpreted as live SID/VIC registers.

Byte-diff result (reassembled `.prg`, correctly relocated, vs. original PSID
payload, same address range):

- `Paid_in_Fuff.sid`: 52,713 of 52,736 bytes exact (99.9564%). All 23
  mismatches fall inside `$d011` (1 byte) and `$d400-$d418` (22 bytes) — i.e.
  exactly the SID/VIC I/O-shadow addresses, and exactly where the file's own
  payload happens to store real PCM sample data at those addresses (the
  `$34`/`$35` port-banking mechanism above). SIDdecompiler's memory model
  captured the *live register value* at trace-end for those 23 addresses
  instead of the pristine underlying RAM/data byte. Patching those 23 bytes
  back to the original file's own values (a legitimate fix — the correct
  value is directly known from the file itself, not guessed) reached
  **100.000000% byte-exact**.
- `Push_It.sid`: **100.000000% byte-exact on the first attempt, no patching
  needed** (this file's payload is smaller and never reaches the
  `$d000-$dfff` range, so the above mechanism never triggers).

Two files sharing the $1000 convention, one requiring an explained/patched
23-byte fix and one clean, is a solid, quantified basis for the `memory`/
`entry`/`data_format` facts above — but is NOT, on its own, sufficient for
`status: verified` per this project's register-write-match bar. That match
was produced in batch29; see Verification.

A free internal cross-check on the disassembly, available because this file
carries the decode routine twice (once as executable code at `$033c`, once
as the byte-for-byte copy source at `$1003`): in both files' reassemblies,
152 of those 160 bytes are identical between the two copies, and the 8 that
differ are exactly the runtime self-modified/workspace bytes
(`$038f`, `$039f`, `$03a5`, `$03bb`, `$03bc-$03bf`, `$03c4`; the exact set
differs slightly per file depending on which segment was playing when
SIDdecompiler's trace ended). That confirms the instruction decode of the
routine independently of the byte-diff, which only ever sees the `$1003`
copy as pass-through data.

## Verification

**Verified (batch29) — byte-exact AND register-write-exact on 2 real files,
with a non-tautological relocation control.**

### Byte-diff

Reproduced from scratch this pass, at the correct `$033c` relocation base
(`-a828`), comparing the reassembled `.prg` against the original payload
over `$1000`-`payload end` (both files have PSID header `loadAddress = 0`
with the real `$1000` embedded as the payload's own first 2 LE bytes — strip
those first, or the diff lands 2 bytes off):

| file | payload | byte-diff | notes |
|---|---|---|---|
| `Paid_in_Fuff.sid` | 52,736 bytes (`$1000-$ddff`) | 23 diffs -> **100.000000%** after patch | the 23 are `$d011` + `$d400-$d418`, i.e. exactly the I/O-shadow addresses where this file's payload stores real PCM data; patched back from the file's own bytes |
| `Push_It.sid` | 40,448 bytes (`$1000-$adff`) | **100.000000%**, 0 diffs | never reaches `$d000-$dfff`, so the shadow mechanism never triggers |

### Trace-diff

The previous pass's blocker was real but tool-specific. Re-confirmed
first-hand this pass: `sidm2-sid-trace.exe` fails identically whether given
the real `init=$1000` or the decode routine's `init=$033c`
(`FAILED: self-installing IRQ vector never resolved after 2000000 steps
(installed=false, handler=$0000)`), because its completion heuristic waits
for an interrupt vector this player never writes. **VICE's `vsid`, via this
project's own `scripts/dev/vsid-trace.js`, has no such handshake
requirement** and traced every build first time. No live debugger was
needed.

Three builds were traced per file and compared programmatically on the full
`(frame, cycle, register, value)` tuple:

1. **original** `.sid` from HVSC;
2. **native reassembly**, re-wrapped into the original file's own PSID
   header (lesson 67) — this comes out **byte-identical to the original**
   (0 bytes differ), so its trace match is *tautological by construction*
   and is reported only as a pipeline sanity check, not as evidence;
3. **relocated control** — the same disassembly with the decode routine
   moved from `$033c` to `$035c` (delta `+$20`, deliberately not
   page-aligned) by changing the origin, the init copy loop's destination
   (`sta $033b,X` -> `sta $035b,X`) and the hardcoded NMI-vector immediate
   (`#$ba` -> `#$da`). Everything else relocates automatically, because
   SIDdecompiler already emits the `$1003` copy-source blob with symbolic
   `<l03xx, >l03xx` halves. This build's payload genuinely differs from the
   original in **20 bytes** on both files, so an exact trace is a real
   structural test of the disassembly, not a byte-for-byte replay.

| file | frames | writes (original) | native reassembly | relocated control |
|---|---|---|---|---|
| `Paid_in_Fuff.sid` | 2000 (~40 s) | **514,078** | 0 divergences (tautological) | **0 divergences** incl. cycle timing |
| `Push_It.sid` | 600 (~12 s) | **137,199** | 0 divergences (tautological) | **0 divergences** incl. cycle timing |

Cycle timestamps matched exactly as well as the write values — expected
here, since the relocation changes only operand bytes and crosses no page
boundary in any indexed access (`lda $03bc,X`/`lda $03c0,X` with `X<=3`).

One useful negative result along the way: the *first* control build was
assembled from the un-patched `.asm` and diverged in 82 of 74,300 writes
(frames 184 and 199-200 only), every one on `$D418`, at *identical frames
and identical cycles* with different values — lesson 86's "same cycle,
different value = data, not code" signature. The cause was exactly the 23
missing I/O-shadow bytes: with `$d400-$d414` left as SIDdecompiler's
captured register values instead of the file's PCM data, the player reads
zeros there and emits a constant `$09` (LUT index 0) for that stretch. This
is independent confirmation that those 23 bytes really are load-bearing
sample data, audible in the output, not dead workspace.

### 2026-07-31 (batch38) — the two `$080d` outliers VERIFIED; scope 32/34 -> 34/34

**Both `$080d`-convention files pass a real relocation control, so `verified`
now covers all 34 of $4753's own files, not 32.**

SIDdecompiler hangs on both. Reconstructed instead with
`scripts/dev/dis6502.js`: `A_New_Love.sid` and `Jack_Your_Body.sid` both
reassemble **100.000000% byte-exact** (62,195 and 56,622 bytes, 0 diffs).

The payload disassembly alone only reaches 0.2-0.3% code, and that is correct
rather than a failure: the descent stops at `JSR $033C`, which is outside the
payload. **The decode routine exists in the payload only as copy-source bytes**
and becomes code once copied. Extracting it and disassembling at its runtime
address gives 126 code bytes of 172 (73.3%), matching this card's documented
mechanics exactly — `$D020`->`$03C5`, `$D015`->`$03C4`, the SID clear, the
`$FFFA/$FFFB <- $03BA` NMI pad, and the `$01` port toggling `$34`/`$35` around
each sample read with `$03BB` as scratch.

Relocation control, the same `+$20` non-page-aligned move batch29 used on the
`$1000` files (`$033C -> $035C`). Two edit sites are needed and no others: the
routine's own absolute self-references, which live in the copy-source bytes,
and the loader's references to it (the `$033b,X` copy destination, the `JSR`
target, and the per-segment operand pokes `$038F`/`$039F`/`$03A5`). Operands
were patched only inside identified instructions — a blind 16-bit scan would
fire constantly inside 60KB of PCM.

| file | copy loop | bytes changed | writes/side | divergences incl. cycle |
|---|---|--:|--:|--:|
| `A_New_Love.sid` | `ldx #$ac / lda $089e,X / sta $033b,X` | 23 | 148,932 | **0** |
| `Jack_Your_Body.sid` | `ldx #$aa / lda $08c9,X / sta $033b,X` | 23 | 148,932 | **0** |

**The identical write count is a property of the player, not an error** — it is
a fixed-rate `$D418` digi loop, so 500 frames yields the same number of writes
regardless of content. Verified by diffing the two *originals* against each
other: 140,419 divergences, i.e. genuinely different tunes producing the same
write count. All four files confirmed distinct by MD5.

### 2026-07-31 (batch39) — the cross-composer file VERIFIED too; coverage now 35/35

**`James_Brown_Is_Dead.sid` (Denis Knitter/'Bad', Fantasia) passes a relocation
control as well, so every one of the 35 files tagged `4753_Softcopy` is now
covered by a register-write-exact match.** Batch32 established that it reuses
$4753's routine structurally, relocated `+$600`; this proves it at the register
level.

It needed a different control because it differs mechanically: the routine sits
**in-place at `$093C`** rather than being copied to the tape buffer, so the
control is a **physical move** rather than a copy-source patch. Extracted and
disassembled at `$093C` it is 126 code bytes of 172 (73.3%) — the identical
proportion to the `$080d` files, further confirming one routine.

Delta constraint, measured rather than assumed: the routine ends at `$09E7` and
real code resumes at `$0A00` (`LDA #$3B / STA $D011`), leaving only **24 bytes
of zero padding**. The `+$20` used for the other files would have overwritten
live code, so this used **`+$10`** (`$094C..$09F7`), still non-page-aligned.

| | value |
|---|--:|
| routine self-references patched | 9 |
| loader references patched | 12 |
| bytes differing from original | 148 |
| writes per side (500 frames) | 165,976 |
| **divergences including cycle** | **0** |

Its volume LUT is `$00,$05,$0A,$0F` (ascending) where $4753's own files use
`$09,$06,$03,$00` (descending) — a per-tune data difference inside the same
routine, not a code difference.

**This settles the question this card carried unasserted across several
passes.** The cross-composer file does not merely resemble $4753's routine: it
is that routine, relocated, and its reconstruction is register-write-exact.

### RESOLVED 2026-07-31 (batch32) — all three outliers are the same player

The three files SIDdecompiler could not touch were disassembled via
RetroDebugger (`scripts/dev/sid2prg.js` -> `retro_load` -> `retro_disassemble`,
no SIDdecompiler). Full excerpts: `knowledge/artifacts/4753-softcopy-outliers.txt`.

**The 2 `$080d` outliers are the same routine with a longer copy.**
`A_New_Love.sid` writes `#$01` to **`$038F`** (the delay constant) at its very
first instruction, sets **`$03A5`** and **`$039F`** (the two segment-end `cmp`
operands) per segment, and calls **`JSR $033C`** — every one of those the same
address this card already documents. Its copy loop is
`ldx #$ac / lda $089e,X / sta $033b,X`: the **same `$033B,X` destination base**
as the `$1000` convention's `ldx #$a0 / lda $1002,X / sta $033b,X`, just 172
bytes instead of 160. The copied block's head saves `$D020`->`$03C5` and
`$D015`->`$03C4` and writes the `$03BA` NMI pad, all identical. These are not a
different build — same player, larger copied block, different loader wrapper.

**The cross-composer file genuinely reuses the routine, relocated `+$600`.**
This card previously flagged, and deliberately did not assert, whether
`James_Brown_Is_Dead.sid` (Denis Knitter/'Bad', Fantasia) shares the routine or
was a looser Player-ID tag match. It shares it. Every landmark sits at exactly
its `$03xx` address plus `$600`: `$033C`->`$093C`, `$039F`->`$099F`,
`$03A5`->`$09A5`, `$03C5`->`$09C5`, `$03C6`->`$09C6`, and the NMI pad
`$03BA`->`$09BA`. The SID-clear loop (`LDY #$14 / STA $D400,Y / DEY / BPL`) is
byte-identical. Its order-list walker counts 32 segments (`CMP #$20`) against
table pages at `$0C00`/`$0D00`/`$0E00`.

**The `verified` status was NOT extended by batch32** (batch38 later extended it to 34/34 for the two $080d files; see above). At the time of batch32 it covered the 32-of-34
`$1000`-convention files, of which 2 were reconstructed and trace-diffed. What
these three now have is established *structural identity* from a static
disassembly — `isExecuted=false` throughout, nothing reassembled, no byte-diff,
no trace-diff. Extending `verified` to them needs the same reconstruct-and-trace
treatment the other two got, which is now unblocked and straightforward.

**Superseded 2026-07-31 — kept for the record.** The lead below guessed the
hang was lesson 90's never-returning-`init` shape and proposed a patch-to-`$60`
workaround. It was never tested, and it turned out to be unnecessary rather
than wrong: RetroDebugger disassembles all three files as-is, no patching, no
diagnosis of the hang required. Recorded because "plausible workaround that
became moot once a better tool was tried" is itself worth seeing next time.

~~**Best next lead for those 3**~~: the hang is very likely lesson 90's shape —
a never-returning `init`. Dump ~$60 bytes at each file's own PSID init
address and walk it to the first `rts`; if it reaches a `jmp` to itself, or
a `cmp $dc01 / bne` key-wait, patch that one byte to `$60` in a working
copy, disassemble, then restore the byte in the reassembly before
byte-diffing. Given this player already plays its entire track inside a
blocking `init`, a variant that additionally waits on something is a very
plausible cause. Note that `vsid-trace.js` traces all three fine as-is
(they are ordinary RSIDs to a real machine), so their *behaviour* is already
observable even while their disassembly is not — CONFIRMED this pass, 60
frames each: `A_New_Love.sid` and `Jack_Your_Body.sid` both produce exactly
17,884 raw writes (identical count, consistent with the same routine at
`$080d`), `James_Brown_Is_Dead.sid` produces 19,922.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb scener/sid/release pages,
the local dataset aggregation (`data/composers`, `knowledge/COVERAGE.md`),
and (new this pass) direct disassembly/reassembly of 2 real files from the
local HVSC collection plus a full header read of all 34
`MUSICIANS/0-9/4753_Softcopy/` files and the 1 cross-composer file. Checked
and confirmed absent from `data/sidid.json`.

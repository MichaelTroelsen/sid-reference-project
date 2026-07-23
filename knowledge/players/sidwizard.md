# SID-Wizard

```json
{
  "id": "sidwizard",
  "name": "SID-Wizard",
  "aliases": ["SidWizard", "Hermit/SidWizard_V1.x", "SID-Wizard", "SWM", "SWP", "(SidWizard_2SID)"],
  "authors": ["Mihály Horváth (Hermit) / Hermit Software"],
  "released": "2012",
  "status": "verified",
  "platform": "Native C64 tracker/editor + its own relocatable/exported 6502 replay (open source)",
  "csdb_release": 255544,

  "memory": {
    "load_address": "Relocatable / exported (SWP export carries the music-data base in X/Y at init). TODO: no fixed absolute map documented in fetched source excerpts.",
    "zero_page": "PLAYERZP = $FE (base, from player.asm comment `PLAYERZP = $FE` at line 10 — the replay saves/restores 2 bytes at $FE-$FF via PHA/PLA when ZEROPAGESAVE_ON is set). Additional ZP allocation descends from $FC downward: per-SID-channel sequence pointers, JumpTarget, SWP_OFFSET (if SWP export), and further per-channel state — exact depth compile-time dependent on subtune/2SID/3SID/SWP/CHORD_SUPPORT/TEMPO_PRG/FASTSPEED_BIND options.",
    "layout": "SWM module: 64-byte fixed tune header, then Sequences (orderlist), Patterns, Instruments. Per-instrument wave/pulse/filter program tables begin at instrument offset $10. TODO: absolute table addresses (relocatable)."
  },
  "entry": {
    "init": "`inisub` (jump-table entry) — tune/subtune number in A; for the SWP exported format, X/Y carry the music-data base address.",
    "play": "`playsub` — per-frame play. Also `mulpsub` (multispeed call), `volusub` (set volume), `SFXsub` (init SFX on channel 3). All via a fixed PLAYER_JUMPTABLE."
  },
  "speed": "1x-8x framespeed (multispeed) via `mulpsub`; frame-speed field `FSPEEDPOS`. Tick 0 = read pattern row, tick 1 = advance sequence, tick 2+ = continuous effects; `SPDCNT` handles frame timing.",

  "data_format": {
    "order_list": "Sequences: orderlist with delimiters $FE (end) / $FF (loop). Up to 32 subtunes.",
    "patterns": "Row-indexed; packed NOP compression in the $70-$77 range. Up to 128 patterns.",
    "instruments": "Up to 37 instruments. 16-byte base: control byte (hard-restart type, vibrato type), HR-ADSR, ADSR, vibrato freq/amp/delay, arpeggio/chord speed, octave transpose, relative pointers to PW-table / filter-table / gate-off pointers, first-frame waveform. Program tables start at offset $10.",
    "wavetable": "Per-instrument wave program starting at offset $10, own position counter (WFTPOS), control bytes $FE (jump) / $FF (terminate).",
    "pulsetable": "Per-instrument PW program, position counter PWTPOS, same $FE/$FF control bytes.",
    "filtertable": "Per-instrument filter program, position counter FLTPOSI, same $FE/$FF control bytes."
  },
  "effects": {
    "encoding": "**Note column** (hardwired, per SWM-spec.src): $00-$5F = notes (SWM_NOTE_MAX=$5F); $60-$6F = vibrato effect values (VIBRATOFX base=$60); $70-$77 = packed NOP compression (PACKEDMIN=$70 = 2 NOPs, PACKEDMAX=$77 = 9 NOPs); $78 = auto-portamento (PORTAMFX, DEFAULTPORTA=110); $79 = sync-on (SYNCONFX); $7A = sync-off (SYNCOFFX); $7B = ring-on (RINGONFX); $7C = ring-off (RINGOFFX); $7D = gate-on / note-start (GATEONFX); $7E = gate-off / note-mute (GATEOFFX). **Other columns** (InstrumentFX, SmallFX, BigFX): see user manual; key sentinels from spec: SWM_VOLUME_SMALLFX=$50, SWM_LEGATO_INSFX=$3F, SWM_VIBRATO_BIGFX=8, SWM_DETUNE_FX=$0D, SWM_NOTEDELAY_FX=$1E. Chord table uses $7E/$7F as separators; tempo table uses bit7=ON bytes as separators.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Own original engine (Hermit's SWM/SWP format + player.asm), NOT derived from the JCH NewPlayer or Laxity families — a distinct, independently authored tracker/replay.",
    "The play loop iterates channels in a fixed INTERLEAVED order (3,6,9,12 / 2,5,8,11 / 1,4,7,10) via DOTRACK, then COMMONREGS writes shared filter/volume — worth knowing if diffing its register-write order against other players.",
    "Flexible per-instrument 'SID-table' program approach: wave/pulse/filter each run as an independent program with its own position counter and $FE jump / $FF terminate control bytes.",
    "The replay saves/restores its 2 ZP pointer locations, so it deliberately overlaps other code's ZP usage.",
    "Licensed WTFPL per author's README.txt (`let's declare SID-Wizard as a WTF-licensed tool, so you can do WTF you want with it`). SourceForge's 'Public Domain' metadata predates the author's departure from that platform; the authoritative statement is the README in the actively maintained source tree. No separate LICENSE file exists in the repo.",
    "Long-lived and actively maintained (v1.0 2012 -> v1.7 2021 -> v1.93 2025); the anarkiwi fork (Vessel) tracks a 1.97 line. Hermit also authored related tools (3SID, FlexSID, 1RasterTracker) that tag separately."
  ],
  "sources": [
    "Source tree (player.asm, SWM-spec.src, README): https://github.com/anarkiwi/sid-wizard (full-tree fork tracking upstream 1.97; `native/sources/include/player.asm`, `native/sources/SWM-spec.src`). Upstream author: http://hermit.sidrip.com ; GitHub profile https://github.com/hermitsoft/ (SID-Wizard source repo not found at the obvious `hermitsoft/SID-Wizard` path — may be private/renamed; SourceForge https://sourceforge.net/projects/sid-wizard/ has abandoned 1.7 binary only)",
    "SID-Wizard 1.4 User Manual (PDF): https://www.c64.cz/data2/download/x11/113614/SID-Wizard-1.4-UserManual.pdf",
    "CSDb release + author: https://csdb.dk/release/?id=255544 , https://csdb.dk/scener/?id=18806",
    "sidid:Hermit/SidWizard_V1.x (author Mihály Horváth (Hermit); v1.0 2012, CSDb release 110942)",
    "Local dataset: 989 files tagged Hermit/SidWizard_V1.x across 156 composers"
  ]
}
```

## Overview

SID-Wizard is a native C64 SID tracker/editor by Mihály Horváth (Hermit),
open source from its first 2012 release and still maintained. It uses its own
engine — the SWM module format and a jump-table-driven 6502 replay
(`native/sources/include/player.asm`) — rather than any JCH/Laxity lineage.
It's a notable modern player (989 tagged files) known for its flexible
per-instrument "SID-table" programs (independent wave/pulse/filter programs
with their own position counters and jump/terminate control bytes).

## Quirks & gotchas

See the `quirks` array. The load-bearing ones: **it's its own engine** (not
JCH/Laxity-derived); the **interleaved channel order** (3,6,9,12 / 2,5,8,11 /
1,4,7,10) in the play loop, which matters if comparing its register-write
sequence against other players; the **save/restore-ZP** overlap trick
(PLAYERZP=$FE, saves/restores $FE-$FF via PHA/PLA); and the
**WTFPL license** (author's README.txt, no separate LICENSE file -
SourceForge's "Public Domain" metadata is stale/abandoned).

## Disassembly notes

**Disassembled 2026-07-18** from a real HVSC rip,
`MUSICIANS/H/Hermit/Border_Odyssey.sid` (PSID: `load=$1000 init=$1000
play=$1003`, 1 subtune, payload 3427 bytes, load-address-in-payload
convention not used here — header's own load field is non-zero `$1000`).
`SIDdecompiler.exe Border_Odyssey.sid -oborder_odyssey.asm -a4096 -z -d -c -v2`
(4096 decimal = `$1000`; no `-e`), reassembled clean with
`64tass.exe -a --cbm-prg -o border_odyssey.prg border_odyssey.asm` to the
exact same length (`$1000-$1d62`, 3427 bytes).

This concretely confirms the card's `PLAYER_JUMPTABLE` description for this
file's relocation: `$1000: JMP $109f` (init), `$1003: JMP $10f4` (play),
followed immediately by 3 more `JMP` entries the decompiler correctly left
as "Unreferenced data" (this subtune's trace never called
`mulpsub`/`volusub`/`SFXsub`) — `$1006: 4C 39 11` / `$1009: 4C 2C 19` /
`$100C: 4C 38 11`. Right after the 5-entry, 15-byte jump table sits an
embedded ASCII signature, `" SID-WIZARD 1.8 "` (bytes `$100F-$101F`) — a
concrete, file-confirmed detail not previously in the card. The 64-byte
tune header described in `data_format.layout` then begins around `$1020`.
Absolute addresses remain relocatable/per-file as documented. The complete
effect-value table is now transcribed from `SWM-spec.src` in
`effects.encoding` above — notes $00-$5F, vibrato $60-$6F, packed NOP
$70-$77, portamento $78, sync/ring on/off $79-$7C, gate on/off $7D-$7E.

**2026-07-19 follow-up — the init routine at `$109f` explicitly zeroes the
whole `$1021-$1089` tune-header region before using it**: `jsr l1664 / lda
#$00 / ldy #$68 / sta l1021,Y (loop, dey/bpl) / ldy #$17 / sta $d400,Y (loop)`
— a 0x68+1=105-byte clear starting at `$1021`, then all 24 SID registers.
This is why the file's *compiled* header bytes there (which include an
embedded ASCII credit string, `"HERMIT: SPACE ODYSSEY BORDERLINE COMPO"`,
plainly visible in the raw payload at `$1039-$1060` — presumably a compo
name baked in by the tracker at export time, not meant to be read back at
runtime) are provably irrelevant to playback: they are unconditionally
overwritten with `$00` at the very first instructions of `init`, before
anything in that range is ever read. See Verification below — this
directly overturns the previous session's lead pointing at `$1021-$1090` as
the source of the filter-ramp divergence.

## Verification

**Disassembly + reassembly + trace attempted (2026-07-18) — `status`
promoted `stub` -> `in-progress` (a real, quantified, mostly-explained
match, not yet clean enough to call `verified`).** No reusable prior
scratchpad work was found for this player (searched all session
`scratchpad/` folders for `sidwizard`/`sid-wizard`/`hermit` — nothing).
File: `MUSICIANS/H/Hermit/Border_Odyssey.sid` (PSID `load=$1000 init=$1000
play=$1003`, 1 subtune, payload 3427 bytes).

*Byte-diff*: reassembled `.prg` is the **exact same length** as the
original payload (3427 bytes, `$1000-$1d62`) — **96 of 3427 bytes differ
(97.20% exact match)**, in 25 small clustered ranges between `$1021` and
`$18b1`. Cross-referencing every one of those 96 differing addresses
against `SIDdecompiler -v2`'s own memory-touch map: **100% of them land on
a write-tagged marker** (`+` read+write, `w` write-only, `_`
operand+write/self-modifying, or the `B` other-combination code) — none
fall on a pure `r`/`x`/`o`/unwritten `?` byte. This is the same pattern
previously confirmed on `future-composer`: the disassembly is dumping the
*post-execution* value of working-storage/self-modified bytes inside the
64-byte tune header (see Disassembly notes), not the file's pristine
initial byte — consistent with, not contradicting, a correct
reconstruction.

*Trace-diff* (`sidm2-sid-trace.exe` directly — the `mcp__sidm2-siddump__*`
MCP tools were not registered in this session; see `lessons_learned` #8;
the tracer needs a raw load-address+payload `.prg`, not a PSID file
directly, so the original payload was re-packaged with its own 2-byte
load-address header before tracing): traced both `init=$1000 play=$1003`
at 50 and 300 frames. **Result: 406 total register writes on both sides at
300 frames (77 at 50 frames), and every frame from 3 onward (297 of 300,
99% of frames traced) is byte-for-byte identical.** The one real,
localized divergence: at frames 0-2, the reassembly sets
`filter_res_control`/`filter_freq_hi` for one instrument 1-3 frames
*earlier* than the original (`$00->$F0` then `$F0->$F1` in the reassembly
vs. `$00->$01` then `$01->$F1` in the original) — both converge to the
identical final value (`filter_res_control=$F1`, `filter_freq_hi=$08`) by
frame 3, and the divergence does not recur later in the 300-frame trace.
This is consistent with one of the write-tagged "dead" bytes above not
being fully inert but instead an initial ramp/counter value inside the
per-instrument filter-table program (see `data_format.filtertable`) that
the decompiler's dump got slightly wrong — a real, small, well-localized
gap, not a structural mismatch.

**Why this stayed `in-progress`, not `verified`, until the 2026-07-19
follow-up below.** The reconstruction was byte-complete (same length,
97.2% exact) and the register-write trace converged to fully exact for
the overwhelming majority of frames, but there was a genuine, reproducible
3-frame transient divergence in one instrument's filter setup that this
pass could not yet close — not merely a "dead byte," since it visibly
changed trace timing for 2 registers before self-correcting.

**2026-07-19 — divergence localized and closed; `status` promoted
`in-progress` -> `verified`.** Re-disassembled/reassembled the same file
(`Border_Odyssey.sid`, same `-a4096 -z -d -c -v2` invocation) fresh in a
new scratchpad, reproduced the identical 97.20%-byte-match / 3-frame
trace-transient starting point exactly as described above, then used
`sidm2-sid-trace.exe`-based binary-search patching (patch a candidate byte
range in the reassembled `.prg` back to the real file's own byte, re-trace,
diff against the real file's own 300-frame trace) to find the *minimal*
set of bytes whose correction closes the divergence — per this project's
own `lessons_learned` #20/21, verified by re-tracing after each patch
rather than trusting the disassembly text or label positions.

**Result: patching the entire previously-suspected `$1021-$1090` tune-header
region back to pristine values does NOT close the divergence at all** —
confirmed by direct test (reassembled trace is bit-identical whether that
whole range is patched or left alone). This is because (see Disassembly
notes above) `init` unconditionally zeroes all of `$1021-$1089` before
anything reads it — the region's compiled byte values (including the
embedded `"HERMIT: SPACE ODYSSEY BORDERLINE COMPO"` credit-string data) are
providing dead at cold start, exactly as hypothesized, but they were never
the cause of the observed divergence; the previous session's "next step"
lead pointed at the wrong region.

**The actual two bytes responsible, found by bisection: `$110c` and
`$1127`** (both physically the *operand* byte of a self-modified immediate
instruction — `SIDdecompiler`'s printed label sits on the operand address
here, not the opcode, i.e. the true opcode is one byte earlier, `$1109`/
`$1126` — same cosmetic label-position quirk as `lessons_learned` #21, not
a byte-stream misalignment). Real code path (`$14f3-$1512`, the per-note
filter-value setup called from the play routine): it reads two nibbles
from the current row's instrument/note data and self-modifies these two
operands — `sta l110c+1` -> `$110d` is actually the *opcode*'s neighbor,
confirmed via raw hex dump the operand itself is `$110c`, feeding
`ORA #imm / STA $D417` (`filter_res_control`), and `sta l1127+1` feeding
`ADC #imm / STA $D416` (`filter_freq_hi`). Both bytes are `$00` in the
pristine file (zeroed by the same `init` clear-loop above, since `$110c`/
`$1127` sit in the *code* segment, not the header — they are self-modified
operand bytes whose compiled `$00` placeholder is always overwritten before
first use in real play, but `SIDdecompiler`'s emulation-window dump baked
in the already-self-modified values `$F0` and `$08` respectively (matching
exactly the wrong "too early" values the trace-diff observed). Confirmed
by exhaustive binary search over all 25 originally-differing byte ranges:
patching *only* `$110c` + `$1127` together (and nothing else) reproduces a
300-frame register-write trace **byte-for-byte identical** to the real
file; patching either one alone, or any other subset/combination not
containing both, does not.

**Two more self-modified operand bytes in the same instruction sequence
(`$110a`, `$1113`) also byte-diff but are confirmed genuinely inert** — the
binary search showed the divergence closes with `$110c`/`$1127` alone,
without needing these; they are true "dead" bytes in the sense of
`lessons_learned` #10, just adjacent to the two that matter.

**Fix applied and reassembled clean, full parity achieved.** Edited the
disassembled `.asm` directly: (1) restored the true pristine bytes for the
entire `$1006-$109e` region (the zeroed-at-init header block, written back
as literal `.byte` data matching the original file, labels unchanged) —
this is the `$1021-$1090` region previously suspected, now confirmed inert
and restored purely for byte parity, not because it affects playback; (2)
corrected the two load-bearing self-modified operands `$110c`
(`ora #$f0` -> `ora #$00`) and `$1127` (`adc #$08` -> `adc #$00`), plus the
two adjacent dead ones `$110a`/`$1113` for full-cluster parity; (3)
corrected the remaining 10 self-modified/dead bytes elsewhere in the file
(`$1363` `and #$ff`->`and #$3f`, `$136d` `lda #$1a`->`lda #$00`, `$14a6`
`ldy #$24`->`ldy #$00`, three `lda addr,Y` self-modified pointer operands
at `$16ad`/`$16b1`/`$16b5` restored to their pristine target addresses
`$1061`/`$10e1`/`$1161`, the branch operand at `$181a` restored to `bcc
*+2` i.e. relative offset `$00`, and `$18ab`/`$18b1` `lda #$62`/`ora #$04`
-> `#$00`) — all 10 confirmed by the same binary-search method to be
uninvolved in the observed divergence, restored purely for completeness
since their true values are directly known from the file, not guessed.

Reassembled with `64tass.exe -a --cbm-prg` to the identical `$1000-$1d62`
(3427 bytes) length. **Byte-diff: 0 of 3427 bytes differ — 100.0000% exact
match.** **Trace-diff: `init=$1000 play=$1003`, traced 1500 frames (~30
seconds of playback) — byte-for-byte register-write-identical to the real
file at every frame, 0 divergences.** This meets and exceeds this
project's `verified` precedent (`laxity-newplayer` ~99.9%). Exact byte-level
patch table (durable, not scratchpad): `knowledge/players/reconstructions/sidwizard.md`.

**2026-07-20 — second-file confirmation (Hermyth.sid, gotcha 41).** To
validate that the Border_Odyssey result generalizes beyond a single file,
repeated the full pipeline on a different Hermit export:
`MUSICIANS/H/Hermit/Hermyth.sid` (PSID `load=$0fd0 init=$0fd0 play=$0fe2`,
1 subtune, payload 3957 bytes, no undocumented opcodes — clean disassembly).
Re-disassembled fresh with `-a4048 -z -d -c -v2` (4048 decimal = `$0fd0`;
`Start: $0fd0` matches the PSID load address — no gotcha 40 trap),
reassembled to the identical 3957-byte length at `$0fd0-$1f44`.

*Byte-diff*: 3864/3957 identical = **97.65% exact match**. All 93 differing
bytes land on write-touched `-v2` markers: 80 `+` (read+write working
storage at `$10ef-$117b`), 7 `_` (SMC operand bytes at `$1258`/`$125a`/
`$125f`/`$1264`/`$1797`/`$17c8`/`$1819`), 3 `B`, 3 `w`. Same pattern as
Border_Odyssey — SIDdecompiler captures post-execution values.

*Trace-diff* (50/300 frames): reassembled trace diverges from original in
frame 0 (different osc frequency initialization values, and osc3_control
`$40` vs `$20`) and has an extra frame 3 event (3 writes absent from the
original). Both converge by frame 16 — from frame 16 through 300 the
register writes are byte-for-byte identical to the original.

*Binary-search patch-isolation* (gotcha 41): tested four patch variants —
(1) full 93-byte patch → trace-exact; (2) WS cluster only (83 bytes at
`$10ef-$117b`) → trace-exact; (3) SMC bytes only (10 bytes) → still
diverges (frame 3 anomaly persists); (4) WS cluster excluded, SMC only →
diverges. **Conclusion: the 83-byte working-storage cluster at `$10ef-$117b`
contains load-bearing initial state** (channel frequency/timing defaults,
not dead as on Border_Odyssey's zeroed header). The 10 SMC operand bytes are
genuinely dead (entry 10 pattern). Finer bisection within the WS cluster
shows both halves carry load-bearing state for different channels —
full WS patch needed for 3-channel trace-exact.

**Full WS-patched trace-diff: 0 diffs at 300 frames (64 writes).** Confirms
the same methodology (SIDdecompiler disassembly + reassembly + dead-byte
restoration) works across files, but the *extent* of load-bearing working
storage is file-dependent — 2 bytes on Border_Odyssey vs 83 bytes on
Hermyth. Both files trace-exact after patching. `status` remains `verified`.

**2026-07-23 — provenance TODOs resolved from source tree.** The four
remaining Tier 2 TODOs from the 2026-07-20 pass are now filled:

- **PLAYERZP**: `$FE` (base, per `player.asm` comment `PLAYERZP = $FE` at line 10).
  The replay saves/restores 2 bytes at `$FE-$FF`. Additional ZP allocation
  descends from `$FC` downward, compile-time dependent.
- **Effect-value table**: fully transcribed from `SWM-spec.src` into
  `effects.encoding` — notes `$00-$5F`, vibrato `$60-$6F`, packed NOP
  `$70-$77`, portamento/sync/ring/gate `$78-$7E` (hardwired, not to be modified).
- **License**: WTFPL per author's README.txt (`"let's declare SID-Wizard as a
  WTF-licensed tool"`). No separate LICENSE file exists. SourceForge's "Public
  Domain" metadata is from the abandoned pre-1.7 era — not authoritative.
- **Repo name**: Active fork is `anarkiwi/sid-wizard`. Upstream author's
  GitHub is `github.com/hermitsoft/` but the SID-Wizard source repo was not
  found at the obvious paths (404 at `hermitsoft/SID-Wizard`); SourceForge
  has abandoned 1.7 binary only.
  
The one remaining TODO is the absolute/universal memory map — that is
genuinely relocatable per-file by design, not a gap in analysis.

## Sources

See the `sources` array — primary is the SID-Wizard source tree
(`player.asm` + `SWM-spec.src`) and the 1.4 user manual, corroborated by the
cached SIDId entry (`Hermit/SidWizard_V1.x`, Mihály Horváth / Hermit, 2012).

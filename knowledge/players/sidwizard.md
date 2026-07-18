# SID-Wizard

```json
{
  "id": "sidwizard",
  "name": "SID-Wizard",
  "aliases": ["SidWizard", "Hermit/SidWizard_V1.x", "SID-Wizard", "SWM", "SWP", "(SidWizard_2SID)"],
  "authors": ["Mihály Horváth (Hermit) / Hermit Software"],
  "released": "2012",
  "status": "in-progress",
  "platform": "Native C64 tracker/editor + its own relocatable/exported 6502 replay (open source)",
  "csdb_release": 255544,

  "memory": {
    "load_address": "Relocatable / exported (SWP export carries the music-data base in X/Y at init). TODO: no fixed absolute map documented in fetched source excerpts.",
    "zero_page": "Base `PLAYERZP` (2 pointer locations); the routine SAVES/RESTORES those 2 ZP locations so it can overlap other code. TODO: the concrete address of PLAYERZP.",
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
    "encoding": "Hardwired effect-value ranges (notes $00-$5F below them). Anchors confirmed from source: VIBRATOFX=$60, PORTAMFX=$78, GATEONFX=$7D, GATEOFFX=$7E; sync/ring, filter, legato/volume effects in separate ranges; chord/tempo tables use $7E/$7F sentinels. TODO: the full effect-value table (read native/sources/SWM-spec.src).",
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
    "LICENSE CONFLICT to resolve before treating source as reusable: forks' README say WTFPL-style 'do what you want'; SourceForge metadata says Public Domain. Confirm from the tree's own LICENSE file.",
    "Long-lived and actively maintained (v1.0 2012 -> v1.7 2021 -> v1.93 2025); the anarkiwi fork (Vessel) tracks a 1.97 line. Hermit also authored related tools (3SID, FlexSID, 1RasterTracker) that tag separately."
  ],
  "sources": [
    "Source tree (player.asm, SWM-spec.src, README/license): https://github.com/anarkiwi/sid-wizard (full-tree mirror); canonical http://hermit.sidrip.com and github.com/hermitsoft/ (exact repo name TODO — direct path 404'd during research)",
    "SID-Wizard 1.4 User Manual (PDF): https://www.c64.cz/data2/download/x11/113614/SID-Wizard-1.4-UserManual.pdf",
    "CSDb release + author: https://csdb.dk/release/?id=255544 , https://csdb.dk/scener/?id=18806",
    "sidid:Hermit/SidWizard_V1.x (author Mihály Horváth (Hermit); v1.0 2012, CSDb release 110942)",
    "Local dataset: 988 files tagged Hermit/SidWizard_V1.x (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

SID-Wizard is a native C64 SID tracker/editor by Mihály Horváth (Hermit),
open source from its first 2012 release and still maintained. It uses its own
engine — the SWM module format and a jump-table-driven 6502 replay
(`native/sources/include/player.asm`) — rather than any JCH/Laxity lineage.
It's a notable modern player (988 tagged files) known for its flexible
per-instrument "SID-table" programs (independent wave/pulse/filter programs
with their own position counters and jump/terminate control bytes).

## Quirks & gotchas

See the `quirks` array. The load-bearing ones: **it's its own engine** (not
JCH/Laxity-derived); the **interleaved channel order** (3,6,9,12 / 2,5,8,11 /
1,4,7,10) in the play loop, which matters if comparing its register-write
sequence against other players; the **save/restore-ZP** overlap trick; and a
**license conflict** (WTFPL vs Public Domain across sources) to resolve from
the repo's own LICENSE before treating the source as reusable.

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
Absolute addresses remain relocatable/per-file as documented; the exact
effect-value table beyond the confirmed anchors ($60/$78/$7D/$7E) still
needs a direct read of `SWM-spec.src`.

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

**Why this stays `in-progress`, not `verified`.** The reconstruction is
byte-complete (same length, 97.2% exact) and the register-write trace
converges to fully exact for the overwhelming majority of frames, but
there is a genuine, reproducible 3-frame transient divergence in one
instrument's filter setup that this pass could not close — not merely a
"dead byte," since it visibly changes trace timing for 2 registers before
self-correcting. Per this project's precedent (`laxity-newplayer` ~99.9%
exact with the divergence fully resolved), a transient-but-real trace
divergence — even a small, converging one — does not meet the `verified`
bar. Left `TODO`, same as before: exact license text, absolute/universal
memory map (still genuinely relocatable), the `PLAYERZP` address, the full
effect-value table, and the exact `hermitsoft` repo name.

**Next step**: identify the exact byte inside `$1021-$1090` (the tune-header
region marked `+`/`w`/`_` in the `-v2` map) that drives the filter-table
ramp's first few frames, and check whether `SIDdecompiler`'s dumped value
there is off by a small, explicable amount (e.g. a start-position pointer
into the filter program vs. a different starting index) — that would
localize this from "somewhere in a 96-byte diff" to one specific address
and one specific fix, which is what would be needed to actually reach
`verified`.

## Sources

See the `sources` array — primary is the SID-Wizard source tree
(`player.asm` + `SWM-spec.src`) and the 1.4 user manual, corroborated by the
cached SIDId entry (`Hermit/SidWizard_V1.x`, Mihály Horváth / Hermit, 2012).

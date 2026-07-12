# SID Factory II — Driver 11

```json
{
  "id": "sid-factory-ii-driver-11",
  "name": "SID Factory II Driver 11",
  "aliases": ["Driver 11", "SF2 Driver 11", "Driver11", "driver11"],
  "authors": ["Thomas Egeskov Petersen (Laxity)"],
  "released": "2019 (11.00 baseline, shipped with SID Factory II's first public release); 11.01-11.05 are later point releases adding features",
  "status": "in-progress",
  "platform": "Native C64 player routine — SID Factory II's default, full-feature 'luxury' driver (one of several swappable drivers; see the parent card)",
  "csdb_release": 210571,

  "memory": {
    "load_address": "Configurable at pack time (SF2 Utilities menu -> Pack lets the author choose memory location + zero page) — NOT fixed. SIDM2's own tooling targets a canonical/template build whose data tables sit at the fixed offsets below (driver code + header blocks occupy the region below $0900).",
    "zero_page": "Not enumerated by SIDM2 — SIDM2 treats Driver 11 as a table-writing TARGET FORMAT (it packs data into the template SF2, it does not disassemble the driver's own ZP usage). Cross-check against the public source (github.com/chordian/sidfactory2) when this card reaches 'verified'.",
    "layout": "Canonical/template addresses SIDM2 emits: Sequence pointers+sequences $0903 (SEQ); Instruments $0A03 (INST, 32 x 6 bytes, COLUMN-MAJOR: all-AD, then all-SR, all-Flags, all-FilterIdx, all-PulseIdx, all-WaveIdx); Wave table $0B03 (WAVE, 128 entries x 2 bytes, row-major [waveform,note-offset] pairs); Pulse table $0D03 (PULSE, 64 entries x 4 bytes); Filter table $0F03 (FILTER, 64 entries x 4 bytes, global/one-register-for-all-voices). Header blocks (block-typed config: 1=Descriptor,2=Driver Common,3=Driver Tables,4=Instrument Descriptor,5=Music Data,6=Table Color Rules,7=Insert/Delete Rules,8=Action Rules,9=Instrument Data Descriptor,255=End) sit at $0800-$08FF. File is identified by a $1337 magic word. Aux-data vector (5 bytes) sits at $0FFB, described by SIDM2's format spec as '5 bytes before init address' with the IRQ vector occupying the last 2 of those 5 bytes ($0FFE-$0FFF)."
  },
  "entry": {
    "init": "Canonical/template build: $1000 (derived from the aux-vector convention above: $0FFB + 5 = $1000). Real address is pack-time-configurable per exported file, so treat $1000 as the SIDM2-template value, not a hardware constant. SIDM2's format-spec doc also notes exported PRGs are commonly run via 'SYS 4093' ($0FFD) on a stock template.",
    "play": "$1006 — the real per-frame dispatcher, LOCALLY TRACE-CONFIRMED 2026-07-12 (see Verification). Stock Driver 11 has a THREE-vector stub header: $1000 = JMP $15E4 (init), $1003 = JMP $15ED (which does LDA #$40 / STA $16CC / RTS — a flag-setter), $1006 = LDA #$00 / BIT $16CC / BMI... (reads that flag and runs the per-frame update). $16CC is a command-FLAG byte, not a routine (it holds $40=RTI). Tracing the real stock file for 50 PAL frames: play=$1006 -> 193 register writes (real playback); play=$1003 or $16CC -> ZERO writes. A stock export's PSID header declares play=$16CC (the flag address), so a naive 'JSR the PSID play vector' headless trace yields silence — the stock driver is IRQ-driven; a headless tracer must call $1006. This CONFIRMS SIDM2's native-driver-authoring methodology doc (previously flagged here as an unverified lead) and supersedes the earlier '$1003 / called once per frame after init' convention text. Multispeed is Tempo-table driven, not a separate play-rate."
  },
  "speed": "50Hz PAL / 60Hz NTSC, frame-driven. Per-song speed comes from a Tempo table: value = frames-per-row ($02-$FE), $7F XX = wrap to row XX, $00 = terminator for shorter chains (e.g. `02 03 7F 00` = alternating 2/3 for a shuffle feel). Driver 11.04+ adds a per-command note-event delay (the command's 'T' nibble 0-f becomes a tick delay).",
  "data_format": {
    "order_list": "4 hex digits per entry: transpose byte + sequence-index byte. $A0 = no transpose ($94 = -12 semitones, $AC = +12). Max 256 entries/track; packed with a loop-index marker at the end.",
    "patterns": "Sequences at $0903+, EXPLICIT gate model (unlike Laxity NewPlayer's implicit one): 3 columns per row — instrument ($80=no-change/'--', $A0-$BF=instrument+$A0), command ($80=no-change, $C0+=command-index+$C0), note ($00-$5D=notes C-0..B-7, $7E='+++' gate-on/sustain, $7F=end-of-sequence, $80='---' gate-off/release). Persistence-encoded: repeating the previous instrument/command writes $80 instead of the value. Sequences of different lengths stack per track ('contiguous sequence stacking', the JCH track-system lineage the parent card documents).",
    "instruments": "32 instruments x 6 bytes, column-major at $0A03. Columns: 0=AD, 1=SR, 2=Flags (bit7 $80=hard-restart enable, bit6 $40=filter on, bit5 $20=filter-enable/togglable, bit4 $10=oscillator-reset enable, bits0-3=HR-table index), 3=Filter table index, 4=Pulse table index, 5=Wave table index. Rows can't be inserted/deleted, only edited in place. (Contrast: Laxity NewPlayer is 8 instruments x 8 bytes, ROW-major — a deliberate format difference, not a bug.)",
    "wavetable": "128 entries x 2 bytes at $0B03, row-major (waveform-byte, note-offset-byte) pairs — the inverse column order of Laxity's dual note/waveform arrays. Waveform byte: $11/$21/$41/$81=triangle/saw/pulse/noise+gate ($10/$20/$40/$80 = same without gate), $7F=jump-to-row-index (col1=target). Note-offset byte: $00=no transpose, $01-$7D=semitone offset, $80+=absolute note (drums). Arpeggio (separate Arp table, semitone offsets, $7F XX=jump) only affects wave rows where the note-offset column is exactly $00.",
    "pulsetable": "64 entries x 4 bytes at $0D03: [0]=pulse value or $FF=keep, [1]=16-bit add/sub delta-per-frame, [2]=duration(bits0-6)+direction(bit7: 0=add,1=sub), [3]=next-entry absolute index. 12-bit pulse width (0-4095), most audible near 2048. Direct absolute indices (Laxity NewPlayer pre-multiplies by 4 / Y*4).",
    "filtertable": "64 entries x 4 bytes at $0F03: [0]=cutoff or $FF=keep, [1]=count/delta, [2]=duration, [3]=next-entry index. Global — one filter register shared by all 3 voices; a voice bitmask (bit0/1/2 = voice1/2/3, e.g. 3=voices1+2, 7=all) routes it. 11-bit cutoff (0-2047), all values unique (no pulse-style mirroring)."
  },
  "effects": {
    "encoding": "Sequence command column ($C0+ = command-index + $C0) indexes a separate Commands table (also can't insert/delete rows): 3 columns [command byte 0x0-0xf ('Tx' in the editor), param1, param2]. Simple/single-purpose per command (contrast Laxity's packed multi-param 'super-commands', e.g. Laxity's one $60 xy vibrato byte vs Driver 11's dedicated T1 XX YY).",
    "commands": {
      "T0 (0x00) Slide": "XX YY = 16-bit slide speed (up/down)",
      "T1 (0x01) Vibrato": "XX=frequency, YY=amplitude (smaller YY = stronger)",
      "T2 (0x02) Portamento": "XX YY = 16-bit speed (02 80 00 disables)",
      "T3 (0x03) Arpeggio": "XX=speed, YY=Arp table index",
      "T4 (0x04) Fret slide [11.01-11.04 only, removed in 11.05]": "XX=00-7f up/80-ff down, YY=semitones",
      "T8 (0x08) Local ADSR": "set AD/SR until the next note",
      "T9 (0x09) Instrument ADSR": "set AD/SR persistently until a different instrument",
      "Ta (0x0a) Filter program": "XX = Filter table index",
      "Tb (0x0b) Wave program": "XX = Wave table index",
      "Tc (0x0c) Pulse program [11.02+]": "XX = Pulse table index",
      "Td (0x0d) Tempo program [11.02+]": "XX = Tempo table index",
      "Te (0x0e) Main volume [11.02+]": "low nibble = 0-f volume",
      "Tf (0x0f) Demo-value increase": "XX = amount",
      "hard_restart": "Per-instrument, via Flags bit7 + the HR-table index in Flags bits0-3; HR table gates off 2 frames before the next note and applies a fast-decay ADSR (default $0F00) to defeat the SID ADSR-bug 'school band effect'. HR table is 16 rows in 11.00-11.04, 8 rows from 11.05 (which also adds a skip-pulse-reset flag)."
    }
  },

  "edges": {
    "derives_from": ["sid-factory-ii"],
    "successor_of": [],
    "shares_routine_with": ["sid-factory-ii"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This card fulfils the TODO left by the parent 'sid-factory-ii' card, which explicitly deferred driver-specific memory/entry facts to a split-out Driver 11 card.",
    "Load address and zero page are PACK-TIME CONFIGURABLE (SF2's own Utilities -> Pack dialog), not hardware-fixed — the addresses in this card are SIDM2's canonical/template values, used because SIDM2's own converter targets this exact template.",
    "Do NOT confuse this with SIDM2's separate custom 'Laxity driver' (SIDM2's own from-scratch SF2 driver for native Laxity NewPlayer v21 round-trips, which SIDM2 docs describe as relocating to $0E00). That is a DIFFERENT, SIDM2-authored driver used only for native-Laxity conversion accuracy — it is not Driver 11 and not part of the stock sidfactory2 distribution. 'SidFactory_II/Laxity' (SF2-exported BY author Laxity) uses Driver 11 like any other SF2 export; only native 'Laxity_NewPlayer_V21' rips get SIDM2's separate Laxity driver.",
    "Column-major instrument table (32x6) vs Laxity NewPlayer's row-major (8x8) is a deliberate format difference SIDM2 had to transpose across, not an inconsistency within Driver 11 itself.",
    "Point releases 11.00-11.05 change the command/HR-table semantics (fret-slide command added in 11.01 then REMOVED in 11.05; pulse/tempo/volume commands only from 11.02; HR table shrinks 16->8 rows in 11.05) — a given SF2's exact command meaning depends on which point-version driver .prg it references (`bin/drivers/sf2driver11_0X.prg` in SIDM2's tooling).",
    "Arpeggio only applies to wave-table rows whose note-offset column is exactly $00 — a documented gotcha, not a bug, when a wave program's transpose column is nonzero.",
    "SF2's own optimizer (F6 -> Optimize) can renumber instruments/commands on pack — a diff between two exports of 'the same' song can be a pure renumbering, not a content change.",
    "RESOLVED 2026-07-12 by local tracing (was: an unreconciled entry-point contradiction). SIDM2's native-driver-authoring methodology doc — stock Driver 11's $1000/$1003 are stub jumps and $1006 is the real per-frame dispatcher — is CONFIRMED. Traced the real stock file (SIDSF2player/Driver 11 Test - Arpeggio.sid) with sidm2-sid-trace: $1000=JMP $15E4 (init), $1003=JMP $15ED (LDA #$40 / STA $16CC / RTS, sets the flag), $1006=the dispatcher (LDA #$00 / BIT $16CC / ... reads it); play=$1006 gave 193 writes over 50 frames, play=$1003 and $16CC gave zero. $16CC is a command-flag byte, not code. The stock driver is IRQ-driven, so its PSID play=$16CC vector is a flag address, not a callable routine — headless tracers must call $1006, not the PSID play vector."
  ],
  "sources": [
    "SIDM2:docs/players/DRIVER11.md",
    "SIDM2:CLAUDE.md (Essential Constants: 'SF2 Driver 11: SEQ=0x0903, INST=0x0A03, WAVE=0x0B03, PULSE=0x0D03, FILTER=0x0F03'; 'Control: END=0x7F, GATE_ON=0x7E, GATE_OFF=0x80, TRANSPOSE=0xA0'; ACCURACY_MATRIX rows for Driver 11 as target)",
    "SIDM2:docs/reference/SF2_FORMAT_SPEC.md (table offsets, header block IDs, command reference, control bytes, file structure, based on the official SF2 user manual 2023-09-30 + source analysis)",
    "SIDM2:docs/guides/LAXITY_TO_SF2_GUIDE.md (Laxity-vs-Driver-11 memory layout comparison)",
    "SIDM2:sidm2/sf2_packer.py, sidm2/galway_table_injector.py, sidm2/sf2_aux_bodies.py (table-offset and aux-vector constants as implemented in code)",
    "Public source: https://github.com/chordian/sidfactory2 (GPL) — the canonical ground truth, not yet cross-checked here via mcp-c64",
    "Parent card: sid-factory-ii",
    "Imported into sid-reference-project's knowledge base 2026-07-12 from tdz-c64-knowledge doc 9ffc2f48aa44 (SIDM2's own separately-ingested KB card of the same content), which this project's own sid-factory-ii.md had already flagged as the natural next sub-card to write."
  ]
}
```

## Overview

Driver 11 is SID Factory II's default, full-featured "luxury" native player routine — the reference driver most SF2 songs ship with, and the one the SF2 editor's own manual documents in depth. It reads six programmable table types (sequences, instruments, wave, pulse, filter, plus a tempo/HR table pair) laid out at fixed template offsets ($0903/$0A03/$0B03/$0D03/$0F03) and interprets them with explicit gate-on/gate-off semantics, per-instrument hard restart, and separate single-parameter effect commands — contrasted throughout this card with [Laxity NewPlayer](laxity-newplayer.md)'s implicit gates and packed multi-parameter "super-commands." For SIDM2 (the sponsoring project that originally wrote this card), Driver 11 is both the safe fallback for unidentified players and the primary, best-understood **output** target: SF2-exported files round-trip through it at 100% fidelity, and it is the first-stage ("Stage A") transpile target for several from-scratch native-driver ports of other players before those projects build their own purpose-built drivers.

This card was imported into `sid-reference-project`'s knowledge base from a near-identical card already present in the `tdz-c64-knowledge` MCP server (SIDM2's own separate, independent knowledge-base effort) — content is reproduced verbatim except for one entry-point caveat noted in `quirks` and this paragraph.

## Quirks & gotchas

See the `quirks` array above — the load-bearing ones: **addresses here are SIDM2's canonical template**, not hardware constants (SF2's own Pack dialog lets an author relocate everything); **this is NOT the same as SIDM2's separate custom "Laxity driver"** (a different, SIDM2-authored SF2 driver used only for native Laxity NewPlayer v21 round-trips, which relocates to $0E00 — that fact belongs on the [laxity-newplayer](laxity-newplayer.md) card, not here); **driver point-version matters** (11.00-11.05 add/remove commands and resize the HR table); and an **unreconciled entry-point contradiction** with a separate SIDM2 methodology document (see the last quirks entry).

## Disassembly notes

SIDM2 has not disassembled Driver 11's own 6502 code — it treats Driver 11 as a **target data format** it packs music into (via `sidm2/sf2_packer.py` and related table-injector modules), not a player it reverse-engineers. What SIDM2 does know concretely, confirmed by both its own format-spec doc and its packer code: the canonical table bases (`SEQ=$0903, INST=$0A03, WAVE=$0B03, PULSE=$0D03, FILTER=$0F03`), the header-block scheme ($0800-$08FF, block IDs 1-9 + 255=end, $1337 magic), the aux-data vector at $0FFB (5 bytes before the init entry, with the IRQ vector occupying the vector's last 2 bytes), and the control-byte set (`END=$7F, GATE_ON=$7E, GATE_OFF=$80, TRANSPOSE=$A0`). For an actual disassembly, the GPL source at `github.com/chordian/sidfactory2` is the straightforward next step.

## Verification

**Entry points and playback behavior are now LOCALLY TRACE-CONFIRMED (2026-07-12); the data-format sub-fields are not, so `status: in-progress` is kept.**

Method: traced the real stock-template file `SIDM2:SIDSF2player/Driver 11 Test - Arpeggio.sid` (PSID load $0000 / init $1000 / play $16CC) with the `sidm2-siddump` tracer (`sidm2-sid-trace.exe`, zig64-based — the same tool the `sidm2-siddump` MCP server wraps, proven live via the MCP surface this session on the laxity card) for 50 PAL frames, probing candidate play addresses.

Result — the three-vector stub header and IRQ-driven design were confirmed by execution:
- `play=$1006` → **193 register writes** (correct 3-voice playback: ADSR envelopes, gate on/off, arpeggio frequency stepping).
- `play=$1003` → 0 writes (`$1003` is `JMP $15ED`, which does `LDA #$40 / STA $16CC / RTS` — a flag-setter).
- `play=$16CC` → 0 writes (`$16CC` is a command-*flag* byte the init/stub write and `$1006` reads, not a routine; it holds `$40`=RTI).

This resolves the card's previously-flagged entry-point contradiction in favour of SIDM2's methodology doc (`$1000/$1003` stubs, real dispatcher `$1006`) — see `entry.play` and `quirks`.

**Scope, stated honestly**: this confirms the entry vectors and that the stock driver produces correct playback — it does NOT independently verify the table offsets (`$0903/$0A03/…`), the column-major instrument layout, or the command-table semantics; those still rest on SIDM2's format-spec + packer code, not on independent reconstruction here.

**Why there is no full reassemble-and-diff round-trip (unlike the laxity card):** SIDwinder's disassembly of this file (`Driver 11 Test - Arpeggio_original_sidwinder.asm`) is **lossy at the stub/dispatcher header** — it renders `$1003-$10FF` as a zero `.byte` block (`$1000` reassembles to `4C E4 15 00 00 00 …`), dropping the real `$1003` stub and `$1006` dispatcher (`… 4C ED 15 A9 00 2C CC 16 …` in the original). Reassembled and traced at `$1006` it produces 0 writes, so it cannot serve as the register-identical reconstruction the laxity SIDwinder disassembly could. The confirmations above therefore come from tracing the **real original binary directly**, not a reassembled copy. A true round-trip would need a complete disassembly or the GPL source at `github.com/chordian/sidfactory2`.

## Sources

See the `sources` array — primary is SIDM2's `docs/players/DRIVER11.md` and `docs/reference/SF2_FORMAT_SPEC.md`, cross-checked against `CLAUDE.md`'s Essential Constants and the literal offset/aux-vector constants in `sidm2/sf2_packer.py` / `sidm2/sf2_aux_bodies.py`. The parent card is [sid-factory-ii](sid-factory-ii.md); the public GPL source is <https://github.com/chordian/sidfactory2>.

# FlexSID

```json
{
  "id": "flexsid",
  "name": "FlexSID",
  "aliases": ["Hermit/FlexSID", "Hermit/FlexSID-Bare", "FlexSID"],
  "authors": ["Mihály Horváth (Hermit) / Samar Productions, SIDRIP Alliance, Singular"],
  "released": "2022",
  "status": "in-progress",
  "platform": "Native C64 tool AND cross-platform editor from the same source: written in C plus some ca65 assembly, compiled with cc65 (C64) and gcc (Windows/Linux) on top of a quasi-emulated SDL1.2 layer, so the editor runs identically on all three. The exported player itself is always native 6502/SID code embedded in the produced .prg/.sid. Source is public (a source zip ships with every CSDb release); license is Hermit's own informal clause in FlexSID.c: 'License:WTF - Do what you want with the code but mention the source if you release.'",
  "csdb_release": 214694,

  "memory": {
    "load_address": "Relocatable. Assembled with RELOC_TARGETADDRESS=$1000 as the default placement constant (playerspec.asm: '0 means no relocation'), and player.asm exports a RelocTable of every absolute-addressing operand so the C exporter can re-target the player+musicdata block to wherever it ends up in the final .prg/.sid. Source: assembly/playerspec.asm line 113; assembly/player.asm lines 559-575 (FlexSID-1.0-source.zip, downloaded and read directly).",
    "zero_page": "Ends at PLAYER_ZEROPAGE_END=$100 (assembly/playerspec.asm line 112). Exact byte count is compile-time, per the 5 player-type variants: Bare/Light=64 bytes, Medium=65 bytes, Normal/Extra=67 bytes (FlexSID-User-Manual.txt's 'player zeropage-usage' table; also printed by player.asm's own build-time .out message). Chained VARBLOCK1/2/3 zero-page groups hold per-channel 'ghost registers' (FreqLo/Hi, PWlow/high, WaveCtrl, Note, Octave-or-HardRestart) spaced by SID_CHANNEL_SPACING=7 bytes each; a shared _ChannelIndex and the InsFx-engine target bytes sit at the top of the block. Source: assembly/player.asm lines 29-94.",
    "layout": "MUSICDATA block (playmemory.asm), fixed order (author's comment: 'needed for proper decompression of reloaded tunes'): MusicHeader ($20 bytes, FLX-format only) -> SubtunePointers/Subtune_ChannelIndexes (only if FLX-format or >1 subtune) -> PatternPointersH/L -> TempoTable -> InsFxTable + ParameterTable (255 entries max each, IFXTABLE_SIZE_MAX) -> OrderLists (80-byte flat table per SID channel, ORDERLIST_SIZE_MAX) -> Patterns (up to 92 slots, PATTERN_SIZE_MAX=$C0 bytes + 4-byte safety margin each) -> InsFXnames. Source: assembly/playmemory.asm (full file read); assembly/playerspec.asm lines 137-148 (size constants)."
  },
  "entry": {
    "init": "_player_init = initEntry, at the PLAYER: label itself (offset 0 of the exported player block). Clears the player's zero-page block (and, on player-types with SID_INIT_SUPPORT, $D400-$D418 too) and sets main volume to max unless MAINVOLUME_INIT_SUPPORT is off (the Bare variant has neither — the manual warns Bare stays silent until you set volume yourself via an InsFX $B8 command). Source: assembly/player.asm lines 9, 109-130.",
    "play": "_player_play = playEntry, immediately after the init clear-loop (exact byte offset is player-type-variant-dependent since the init routine's size differs). Called once per frame; iterates the 3 SID channels via an X-indexed loop (X=14,7,0), handling the tempo/duration counters, order-list stepping, and up to 3 concurrent per-channel InsFX 'engines'. Source: assembly/player.asm lines 9, 133-224."
  },
  "speed": "IRQ-driven via CIA #1 Timer A, not the raster IRQ, in the standalone .prg/.exe export path (assembly/runexe.asm): CIA2 IRQ is disabled ($dd0d), CIA1 TimerA IRQ enabled ($dc0d), and the raster IRQ is explicitly turned off ($d01a/$d019). A per-multispeed 8-entry CIA reload table (CiaFrameHiPAL/CiaFrameLoPAL, 'replaced by exporter to PAL or NTSC values') implements '1x..8x framespeed (multispeed) playback', a feature present in all 5 player types per the User Manual's feature matrix. Source: assembly/runexe.asm lines 110-145, 226-228; FlexSID-User-Manual.txt line 34.",

  "data_format": {
    "order_list": "One flat 80-byte table per SID channel (ORDERLIST_SIZE_MAX). $00 = NOP/alignment (not exported); $01-$5B = pattern numbers 1-91; $80-$BF = jump/loop to orderlist position (value-$80); $C0-$FF = call into the Instrument/FX table (e.g. transpose). Source: FlexSID-User-Manual.txt lines 190-196; assembly/playerspec.asm line 138.",
    "patterns": "Row data packed into a variable-length byte stream (not fixed-width per row): column 1 is a note as a diatonic scale-degree in duodecimal (base-12) encoding, or a rest; columns 2-3 are InsFX-table calls executed left-to-right ($00-$1F = set the running EngineA instrument, $20-$3F = call InsFX entry $00-$1F as a 1-frame subroutine — RunIFX-capable player-types only, i.e. not Bare). The exporter packs note+duration and note+InsFX-call combinations into a single byte where it can (e.g. $C0-$FF = note/rest + duration 1-4 in one byte). Up to 92 pattern slots (2 reserved), $C0 (192) usable bytes + 4-byte safety margin per slot. Source: FlexSID-User-Manual.txt lines 198-226, 208-211; assembly/playerspec.asm lines 139-212.",
    "instruments": "No separate instrument table — a single shared 255-entry Instrument/FX ('InsFX') table doubles as both instruments and effects, addressed by up to 3 independent per-channel program counters ('Engines'): EngineA (waveform+pitch, always present), EngineB (e.g. pulsewidth-mod; Medium/Normal/Extra only), and one channel-shared EngineC (e.g. filter/volume; Normal/Extra only). Source: FlexSID-User-Manual.txt lines 28-49 (feature matrix), 229-247; assembly/playmemory.asm (InsFxTable/ParameterTable, IFXTABLE_SIZE_MAX=255).",
    "wavetable": "Folded into the InsFX table: command bytes $01-$88 set the SID waveform/control register directly, parameter is a relative (arpeggio, base-12) or absolute pitch; $8D repeats the following EngineA command N times. No dedicated wavetable structure. Source: FlexSID-User-Manual.txt lines 278-319.",
    "pulsetable": "Folded into the InsFX table via EngineB ($8E sets EngineB position, $8F repeats the next EngineB command) plus the shared $A0-$FF direct/ghost/sweep register-write commands ($A2/$A3 = PW lo/hi, $E2/$E3 = PW sweep). No dedicated pulse table; not present at all on Light/Bare (no EngineB). Source: FlexSID-User-Manual.txt lines 321-326, 333-372.",
    "filtertable": "Folded into the InsFX table via the shared EngineC ($9E/$97/$90 = per-channel-offset set, $9F/$98/$91 = repeat) plus $B5-$B8 direct filter/volume register writes and $F5/$F6 sweep. No dedicated filter table; EngineC only exists on Normal/Extra. Source: FlexSID-User-Manual.txt lines 328-347, 366-372."
  },
  "effects": {
    "encoding": "InsFX-table command byte ($00-$FF) + 1 parameter byte, in a shared 255-entry table walked by up to 3 concurrent per-channel program counters (see data_format.instruments). Source: FlexSID-User-Manual.txt lines 263-384; assembly/playerspec.asm lines 219-234 (IFXTABLE_* range constants).",
    "commands": {
      "$00": "Jump to InsFX table position given by the parameter; jump-to-$00 with parameter $00 too = END (stop/return from FX)",
      "$01-$88": "Waveform+Pitch: command byte is the SID waveform-control value; parameter is pitch — $0x-$7x relative note (1st digit octave-shift 0-7, 2nd digit chromatic arpeggio-shift 0-B), $8x-$Fx absolute pitch (waits 1 frame)",
      "$89": "Tempo-table program-call (tempo change)",
      "$8A": "Set music key + mode (major if 1st digit >= 8; 1st digit low bits = octave; 2nd digit = key/transpose)",
      "$8B": "Set EngineA table-position and remember it as the channel's 'instrument' for future notes",
      "$8C": "Set EngineA table-position for the current call only (not remembered) — interim/one-off instrument",
      "$8D": "Repeat the following EngineA command N times (parameter+1 repeats)",
      "$8E": "Set EngineB table-position (e.g. a concurrently running pulsewidth-sweep program)",
      "$8F": "Repeat the next EngineB command",
      "$90/$97/$9E": "Set the shared EngineC table-position (channel-offset addressing: ch1=$9E, ch2=$97, ch3=$90)",
      "$91/$98/$9F": "Repeat the next EngineC command",
      "$A0-$B8": "Direct (non-waiting) SID register write: $A0/$A1=freq lo/hi, $A2/$A3=PW lo/hi, $A4=waveform+control, $A5/$A6=AD/SR; $B5-$B8 are the shared filter/volume registers, offset by -7/-14 on channel 2/3",
      "$C0-$D8": "Same register map as $A0-$B8 but also sets a ghost-register (needed for slides) and waits 1 frame; $C6 additionally performs Hard-Restart (gate-off + SR write) on player-types with HARDRESTART_SUPPORT",
      "$E0-$F8": "Add/subtract to/from a SID+ghost register (pitch/pulsewidth/filter slide-sweep); 16-bit pair on Medium/Normal/Extra players (SWEEP_16BIT_SUPPORT), independent 8-bit on Light/Bare"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Five compile-time player-type variants (Extra/Normal/Medium/Light/Bare, selected by the Makefile's PLAYERTYPE define) share one player.asm gated by a PlayerFeatures scope of on/off flags. In this dataset's raw player tags, 'Hermit/FlexSID' vs 'Hermit/FlexSID-Bare' is exactly this split: Bare is literally PLAYERTYPE_BARE, not a separate tool — same engine, same data format, fewer runtime features.",
    "The Bare player has SID_INIT_SUPPORT=0 and MAINVOLUME_INIT_SUPPORT=0, so it does NOT initialize main volume at init — the user manual explicitly warns 'bare player doesn't initialize main volume so you won't hear any sound unless you set it in InsFX table (command $B8 on channel1)'.",
    "Pitch is diatonic-scale-degree + duodecimal (base-12), not a chromatic semitone table — a deliberate compression choice explained at length in the manual's History section (statistics gathered from 37 SID-Wizard tunes via a modified SWMconvert drove the design).",
    "Player code uses illegal/undocumented 6502 opcodes extensively (LAX, ALR, ANC, ISC, AXS/SBX all appear in player.asm) — the manual warns that 'emulation frameworks that don't support them will likely fail to play the tunes'.",
    "Standalone .prg/.exe playback (runexe.asm) is CIA #1 Timer A IRQ-driven, not raster — it explicitly disables the raster IRQ ($d01a/$d019) and reloads CIA1 from an 8-entry per-multispeed table.",
    "License is Hermit's own informal clause stated directly in FlexSID.c ('License:WTF - Do what you want with the code but mention the source if you release'), adopted specifically because SDL 1.2's LGPL forced him to publish source he says he otherwise intended to keep private ('I didn't want to go open-source with this project which I created for myself in the first place, but the restriction with SDL-1.2 LGPL requires to share the source-code'). Not a standard OSI license.",
    "Author's own History section names FlexSID's real inspirations — his own earlier 1RasterTracker (rejected as unsuitable: uncompressed 16-bit-frequency pattern data), Ninjatracker, Cadaver's mini-player, and Geir Tjelta's Macro-player ('threaded code' command-table idea) — explicitly as sources of ideas, not code. No `derives_from` edge is asserted here for that reason.",
    "Composer concentration in this dataset: 17 files (14 tagged 'Hermit/FlexSID' + 3 tagged 'Hermit/FlexSID-Bare') across 7 composers; Hermit himself contributes 6/17 (35%). Three of the other composers — Chabee, NecroPolo, and Jerusalem_Spider (Spider Jerusalem) — are exactly the CSDb release's credited music/testing team for FlexSID 1.0; freqvibez and Laurikka are later, independent adopters not in the original credits."
  ],
  "sources": [
    "CSDb release (FlexSID 1.0, 21 Feb 2022 — credits, description, source-zip download link): https://csdb.dk/release/?id=214694",
    "CSDb release (FlexSID 1.1, 21 Mar 2022): https://csdb.dk/release/?id=215599",
    "Source archive downloaded and read directly (FlexSID.c, assembly/player.asm, assembly/playerspec.asm, assembly/playmemory.asm, assembly/runexe.asm, Makefile, FlexSID-User-Manual.txt): https://csdb.dk/getinternalfile.php/225395/FlexSID-1.0-source.zip",
    "sidid: Hermit/FlexSID and Hermit/FlexSID-Bare (author Mihály Horváth (Hermit); released 2022; reference https://csdb.dk/release/?id=214694) — data/sidid.json",
    "data/players.json curated entry 'FlexSID v1.x' (developer, platform, distribution, player-size/zeropage/rastertime feature matrix, csdb_id 215599)",
    "Local dataset: 14 files tagged Hermit/FlexSID (rank 22) + 3 files tagged Hermit/FlexSID-Bare (rank 138) across 7 composers total (see knowledge/COVERAGE.md and data/composers/*.json)"
  ]
}
```

## Overview

FlexSID is a native-plus-cross-platform C64 music tool by Mihály Horváth
(Hermit), first released 21 February 2022, built specifically to make SID
tunes with a very small memory footprint (the author's stated target was
500-1000 bytes of music data plus 16-20 rasterlines, for use in 4k-footprint
intros). It compiles the same C/ca65-assembly source natively for C64,
Windows, and Linux via cc65/gcc on an SDL1.2 compatibility layer. Its
replay engine is entirely its own — not derived from JCH/Laxity or from
Hermit's other tools — built around a single 255-entry command-oriented
"Instrument/FX" table walked by up to 3 concurrent per-channel program
counters ("Engines A/B/C") instead of separate waveform/pulse/filter
tables, plus a diatonic-scale-degree/duodecimal note encoding chosen after
the author statistically analysed 37 SID-Wizard tunes for compressibility.
It ships in 5 compile-time-selected player-type variants (Extra/Normal/
Medium/Light/Bare, 325-430 bytes of code, 64-67 bytes of zero page) trading
features for size; this dataset's two raw tags, "Hermit/FlexSID" and
"Hermit/FlexSID-Bare", map onto that same variant split rather than two
different tools. In this project's dataset it has 17 files across 7
composers (rank 22 and 138 by file count respectively per
`knowledge/COVERAGE.md`) — Hermit himself at 35%, with three of the other
composers matching the CSDb release's own credited testing/music team.

## Quirks & gotchas

See the `quirks` array in the JSON block. The load-bearing ones: the Bare/
Light/Medium/Normal/Extra split is a single source file gated by compile-time
feature flags, and this dataset's "-Bare" tag is exactly that split, not a
separate tool; the Bare player stays silent unless main volume is set
manually; pitch is diatonic/duodecimal, not chromatic-semitone; the player
leans on illegal 6502 opcodes; standalone playback is CIA1-Timer-A-IRQ driven,
not raster; the license is an informal author-stated clause forced into
existence by SDL1.2's LGPL, not a real open-source license choice; and the
author's own History section names real inspirations (1RasterTracker,
Ninjatracker, Cadaver's mini-player, Geir Tjelta's Macro-player) that are
explicitly ideas, not shared code — so no `derives_from` edge is recorded.

## Disassembly notes

Not independently disassembled — everything above (memory layout, zero page,
entry points, speed model, data format, effect-command table) was read
directly out of the publicly available FlexSID-1.0-source.zip (fetched from
CSDb's own internal-file host), specifically `assembly/player.asm` (the whole
replay engine, ~576 lines including the included `playermemory.asm` data
layout and `playerspec.asm` constants) and `FlexSID-User-Manual.txt` (the
authoritative InsFX command-table reference, ~850 lines). `playadapter.asm`
and `special.asm` (the editor's live self-modifying-code layer used for
jamming/mute/solo) were not read in depth — they patch `player.asm` at
runtime inside the editor only, not in exported tunes.

## Verification

**Attempted, genuinely blocked — `status` remains `in-progress`.** A real
disassemble/reassemble/trace-diff pass was run against two real HVSC files
(picked to cover both compile-time variants tagged in this dataset):
`MUSICIANS/H/Hermit/HeheHaha.sid` (tagged `Hermit/FlexSID`, PSID load/init=
`$1000`, play=`$1010`, payload 1073 bytes) and
`MUSICIANS/H/Hermit/MajomTanc.sid` (tagged `Hermit/FlexSID-Bare`, load/init=
`$1000`, play=`$100a`, payload 510 bytes), both single-subtune. Tools:
`SIDdecompiler.exe` (reports itself as version 0.8) at
`C:\Users\mit\claude\c64server\SIDM2\tools\SIDdecompiler.exe`, relocated with
`-a4096` (matches the PSID header's own load address — no `-v2` Start:/load
mismatch here, gotcha 40 doesn't apply); `64tass.exe` for reassembly.

**Root cause of the block, confirmed directly, not inferred from the user
manual's warning:** `SIDdecompiler`'s disassembler-labeling logic correctly
recognizes and prints the mnemonics for the illegal/undocumented opcodes this
player's own source uses (`lax`, `isc`, `axs`, `alr` all appear correctly
named in the generated `.asm` where reached), but its internal 6502
*emulator* — the one that actually walks the code at trace time to discover
what's code vs. data — cannot execute them: every run logged repeated
`Unimplemented opcode: <hex> at address <addr>` lines, one per attempted
play-routine call, with the **same address repeating for the entire trace
budget** (confirmed at both the default `-t 30000` and an inflated
`-t 500000`) — the emulated PC never advances past that one instruction, so
no downstream code or data is ever discovered by tracing. For `HeheHaha.sid`
this happens at `$1020` (opcode `$f7` = `ISC zp,X`), only 16 bytes into
`play`; for `MajomTanc.sid` at `$1043`/`$107a` (`$cb` = `AXS #imm`, `$4b` =
`ALR #imm`), 57/112 bytes into its `play`. Tried `-C1` (speculative static
disassembly) plus the inflated `-t`: identical final coverage boundary in
both files, byte-for-byte — confirming the shortfall is a hard execution
block, not an under-traced-length issue fixable per entry 9's `-t` playbook.

**Consequence: SIDdecompiler can only capture the file bytes from the load
address up to wherever its (very short) successful trace/static scan
reached, and drops everything after that boundary entirely** — not marked
"unreferenced data" (that would still be included), just absent from the
`.asm`/`.prg` output. `HeheHaha.sid`: captured 442 of 1073 bytes (`$1000`-
`$11b9`, **41.19%** of the file). `MajomTanc.sid`: captured 441 of 510 bytes
(`$1000`-`$11b8`, **86.47%**). Within the captured range, the raw byte
values (whether printed as real instructions or as `.byte "Unreferenced
data"`) reassemble **100.0000% byte-exact** against the original payload in
both files — 64tass with `--m6502` (NMOS 65xx target, required for `lax`/
`isc`/`axs`/`alr` to assemble at all; the default `--m65xx` target rejects
them as invalid mnemonics) reproduces every captured byte correctly. But
this partial match is not meaningful on its own: the missing 58.8%
(HeheHaha) / 13.5% (MajomTanc) of each file is almost entirely the
InsFxTable/OrderList/Pattern music data (see `memory.layout`) that the real
play routine reads via table lookups a few instructions past the illegal
opcode — table data no static/speculative scan can discover without first
executing past the block. A reassembly built from this output has no
complete `play` routine to trace at all (everything past the first ~16-112
bytes of `play` is either missing outright or mislabeled data, never real
instructions) — running `trace_prg`/`sidm2-sid-trace.exe` against it would
not produce a meaningful comparison, so no trace-diff was attempted.

This directly and concretely confirms this card's own `quirks` entry
("Player code uses illegal/undocumented 6502 opcodes extensively... the
manual warns emulation frameworks that don't support them will likely fail
to play the tunes") — it's true of `SIDdecompiler`'s own built-in trace
emulator specifically, not just of end-user playback frameworks, and it
blocks this project's standard disassemble→reassemble→trace-diff pipeline
structurally, on **every** file of this player (the illegal opcode sits in
the first few bytes of `play` on both tested files/variants, not a rare
deep-code edge case). No `SIDdecompiler` flag exists to work around it (full
`-h`/`--help` output checked; no illegal-opcode-emulation toggle). A live,
interrupt- and illegal-opcode-capable emulator (RetroDebugger) is the only
tool in this project's kit that could plausibly get past this, and it is
explicitly off-limits for this dispatch (parallel-batch singleton
restriction) — left for a solo-session follow-up. Leaving `status` as
`in-progress`, not regressing it: the source-derived facts above are
unaffected by this finding, only the reassembly/trace-diff verification step
remains blocked.

Left `TODO`/unconfirmed (unchanged from before this pass, since the block
prevented any progress toward closing them): the concrete absolute zero-page
addresses for a specific built variant (the VARBLOCK1/2/3 chain in
player.asm resolves them at assemble time, not read out numerically here),
the exact byte offset of `playEntry` relative to `PLAYER` for each of the 5
variants, and whether PSID-embedded (as opposed to standalone .prg/.exe)
tunes use the same CIA1-timer IRQ setup or rely on the host player's own call
convention instead.

**Next step for whoever picks this up:** a solo (non-parallel-batch) session
with RetroDebugger access is the concrete unblock — set a breakpoint at the
PSID play address and single-step through the illegal-opcode instructions a
real/accurate emulator handles correctly, to manually recover the
instruction-by-instruction control flow SIDdecompiler's own emulator cannot
trace through, then hand-annotate the `.asm` before reassembling. Don't
retry with different `SIDdecompiler` flags — `-C1` and a 16x-inflated `-t`
were both tried here and neither moved the coverage boundary at all.

## Sources

See the `sources` array — primary is the public FlexSID-1.0 source archive
(`FlexSID.c`, `assembly/player.asm`, `assembly/playerspec.asm`,
`assembly/playmemory.asm`, `assembly/runexe.asm`, `Makefile`,
`FlexSID-User-Manual.txt`), corroborated by the CSDb release pages (214694,
215599), the cached SIDId entries (`Hermit/FlexSID`, `Hermit/FlexSID-Bare`),
and this project's curated `data/players.json` entry ("FlexSID v1.x").

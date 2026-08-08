# defMON

```json
{
  "id": "defmon",
  "name": "defMON",
  "aliases": ["DefMon"],
  "authors": ["Frantic / Hack'n'Trade (Mats, per SIDId)"],
  "released": "2013 (built 2008, per SIDId); latest release V20201008, 8 Oct 2020",
  "status": "in-progress",
  "platform": "Native C64 tool: an on-C64 tracker/editor with its own hand-written 6502 replay routine. A third-party Python harness (defmon-driver) drives it inside VICE for automation purposes but is not defMON itself.",
  "csdb_release": 120965,

  "memory": {
    "load_address": "$1000 (default PRG load address for exported standalone player; confirmed by defMONRelocator tool which assumes $1000 base, and defmon-driver smoke_checkpoint_cpuhistory.py docstring: 'defMON's player loads at $1000+ per the wiki callingtheplayer page')",
    "zero_page": "$FB, $FC, $96 (default; confirmed by defMONRelocator C# source which patches these three ZP addresses across 18+6+9 offset tables within the player code); also sometimes $02 (per DeepSID players.json, unconfirmed by other sources)",
    "layout": "Player code: $1000-$131C, $1321-$1577, $16B0-$17A7 (three blocks; independently confirmed both by defMONRelocator's C# `Relocate()` call sites AND this project's own recursive-descent disassembly of a real file, see Verification 2026-08-07). **CORRECTED 2026-08-07 (was wrong on this card since its creation): the pattern-base LUT is NOT $1900-$19FF (lo) / $1A80-$1AFF (hi), 384 bytes apart.** Direct disassembly of Antispeed.sid, cross-validated byte-for-byte against defMONRelocator's own compiled/run source, shows there are TWO SEPARATE split hi-byte tables (defMON's own relocator only ever patches the HIGH byte of an address, because it supports page-aligned relocation only — see `quirks`): (1) pattern-base LUT, lo=$1A00 hi=$1A80, CONTIGUOUS 128-byte pages, X-indexed by pattern number (X comes from the per-voice arranger tables), used at $10F8-$1112 to resolve each voice's current pattern-data address into self-modified workspace ($1165/$1166 etc.); entries are NOT evenly spaced 128 bytes apart as the `patterns` field below still claims -- e.g. entry0=$1F00, entry1=$1F07, entry2=$1F1F on Antispeed.sid, i.e. genuinely variable-length/packed pattern storage, not fixed 128-byte slots (TODO: re-derive the real packing scheme). (2) sound-program-row pointer table, lo=$1800 hi=$1900, 256 entries (matches the 256-row count elsewhere on this card), Y-indexed by sound-program-row number, with CHAINING: hi==0 means the row is an alias and lo holds a REDIRECT row index (re-read both tables at the new index) rather than being part of an address -- this is why relocation must skip any hi==0 entry (defMONRelocator's own code does exactly this: `if (_file[i] > 0) _file[i] += diffRelocate`). Both tables' LOW-byte halves ($1A00-$1A7F, $1800-$18FF) never need touching under defMON's own page-aligned-only relocation model, which is presumably why the pre-2026-08-07 version of this card conflated the untouched low table with an adjacent unrelated block and mis-stated its address. Arranger tables (row→pattern, one per voice): $1B00 (V0), $1C00 (V1), $1D00 (V2) — SID#1; $6E00 (V3), $6F00 (V4), $7000 (V5) — SID#2; each 128 entries, max row index 0x7F (from defmon-driver field_setter.py). Pattern data starts at $1F00+ (PATTERN_BASE) but is NOT fixed 128 bytes/pattern -- see correction above. In the full editor, the player band is at $8000-$9FFF (from defmon-driver smoke_coverage.py PLAYER_BAND constant). Editor state variables in $7000-$73FF region include mode dispatch at $7167, voice selector at $71CD, cursor/step/page variables at $71CE-$71D2 (from defmon-driver defmon.py + field_setter.py)."
  },
  "entry": {
    "init": "$1000 (standard; accepted subtune number in A per Codebase64 wiki example using defMON-like $1000/$1003 init/play, and consistent with $1000 base load address from defMONRelocator)",
    "play": "$1003 (full play: sequence parsing + sound parsing); alternate entry $1006 (sound-only, skips sequence parsing; internally calls $1022 for the sound engine). Per iAN CooG's reverse-engineering analysis on CSDb release 203665 (Anticitizen 64 review): calling $1003 runs both sequence and sound; calling $1006 runs sound only; alternating $1003/$1006 at the same rasterline produces 0.5x sequence speed while sound stays 1x. Per Frantic (author, same thread): 'By default both sequence parsing and sound parsing is 1x.'"
  },
  "speed": "1x to 8x (per DeepSID players.json). Speed is NOT a global song command — each pattern step carries its own tick-duration nibble (4-5 bits, per Frantic on CSDb forums topic 131839) specifying how many frames until the next step. Multispeed is achieved by editing these per-step tick values; there is no separate speed table. A non-coder can achieve 0.5x sequence speed by alternating $1003 and $1006 calls (see entry.play).",

  "data_format": {
    "order_list": "Arranger tables (one per voice): 128-entry arrays mapping row index to pattern number. SID#1: $1B00 (V0), $1C00 (V1), $1D00 (V2). SID#2: $6E00 (V3), $6F00 (V4), $7000 (V5). Max row index 0x7F. (From defmon-driver field_setter.py ARRANGER_MAX_STEP + arranger table addresses.)",
    "patterns": "128 patterns max, each fixed at 32 steps × 12 bytes (4 bytes/voice × 3 voices) = 128 bytes per pattern. Per-step layout (12 bytes, 4 per voice): byte 0 = speed nibble (bits 3-0) + gate flag (bit 4); byte 1 = sidcall1 (sound program row index, enabled by flag bit 6); byte 2 = sidcall2 (sound program row index, enabled by flag bit 5); byte 3 = note pitch byte. Pattern→base address LUT at $1900 (lo) / $1A80 (hi) — 128 entries each. PATTERN_BASE = $1F00. (From defmon-driver field_setter.py — PATTERN_BASE, BYTES_PER_STEP=12, BYTES_PER_VOICE=4, VOICES_PER_STEP=3; from defMONRelocator — LUT addresses; from CSDb forums topic 131839 — 32 steps + 4-5 bit duration nibble.)",
    "instruments": "No separate instrument table. 256 'sound program' rows (chunks) in a shared table, each a snippet of SID register settings. Two chunks can be triggered per step (sidcall1/sidcall2). This is defMON's distinctive design: instruments, effects, wavetables, pulse tables, and filter settings all funnel through this single table rather than separate tables. (From DeepSID players.json description + electro.pizza independent description + CSDb forums discussion; chunk count 256 from players.json '256 sound program rows'.)",
    "wavetable": "TODO: part of the sound program chunk system — individual wavetable parameters are set within sound program rows, not in a separate table. Exact byte format of a sound program row is undocumented in public sources.",
    "pulsetable": "TODO: part of the sound program chunk system, same as wavetable.",
    "filtertable": "TODO: part of the sound program chunk system, same as wavetable."
  },
  "effects": {
    "encoding": "TODO: no public documentation of the sound program row byte format. Known to be edited via the sidTAB editor (hex-digit entry per column), but the binary encoding of each row is not documented in public sources.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's `reference` for the `DefMon` tag (CSDb release 120965, 'Defmon &D') is NOT defMON's own tool-release page — it's a 2013 leak/repack of an early build, distributed and cracked by Genesis Project (crack: Zyron; original supply: Sixx), per the CSDb release page itself. The canonical, actively-maintained tool entry is CSDb release 196474 ('defMON V20201008', Hack'n'Trade, 8 Oct 2020). Both are cited under `sources`; `csdb_release` in this card follows SIDId's own reference (120965) since that is what SIDId's comment/dataset link is keyed to, but readers wanting the current tool page should use 196474.",
    "SIDId's comment for this tag is 'Made in 2008, released in 2013' — a 5-year gap between when Frantic built it and when a build became publicly available (via the Genesis Project leak, not an official release by Frantic).",
    "Design is unusual among C64 trackers: defMON does not use separate instrument/wavetable/effect tables — everything funnels through one shared 'sound program' table of 256 reusable chunks, with two chunks executable per sequence step (sidcall1/sidcall2). All traditional effects (arpeggio, vibrato, filtering, etc.) must be constructed manually from sound program rows rather than selected from a fixed effects menu. This gives maximum flexibility but means there are no pre-built classic effect commands.",
    "No public source code exists for the C64 replay/editor (players.json: `source_code: 'No'`; no GitHub/CSDb source archive found). Distribution is freeware ('Freeware (?)' per players.json). This is a public-but-closed tool like DefleMask — runtime fields come from third-party reverse-engineering (defmon-driver, defMONRelocator, iAN CooG's CSDb analysis), not from author-published specs.",
    "Composer concentration: of 102 files tagged `DefMon` across 10 composers, goto80 (Anders Carlsson) alone accounts for 46 (~45%) and Martin Demsky 26 (~25%) — together ~70%. This matches external sources: an interview (atlantis-prophecy.org) describes goto80 relocating to the same city as Frantic and running weekly 'defJAMS' test/performance sessions with him. Signal that this is a small-scene tool built around a specific circle of live-performance chip musicians.",
    "Speed model is per-step tick duration, not a global song speed. Each step in every pattern carries its own tick-duration nibble (4-5 bits). Changing the global tempo requires editing every step in every pattern individually — defMON 'solves' this with vim-like edit modes that can apply operations (clear, edit every Nth line, etc.) across the whole song at once. (Per Frantic on CSDb forums topic 131839.)",
    "The play routine supports two entry points: $1003 (full: sequence + sound parsing) and $1006 (sound-only). Alternating calls between them at the same rasterline produces 0.5x sequence speed while keeping sound at 1x — a non-standard multispeed mechanism discovered by iAN CooG's RE of Anticitizen 64. The author Frantic confirmed this and noted sequence parsing is 1x by default.",
    "The `defmon-driver` GitHub project (github.com/anarkiwi/defmon-driver) is a third-party Python automation framework that drives defMON headlessly inside VICE (`asid-vice`). Its source code (particularly field_setter.py, defmon.py, keycode_table.py, smoke_coverage.py) is the primary public documentation of defMON's memory layout, editor state structure, and data format — it is NOT defMON's own source code but a reverse-engineered automation layer. The defMONRelocator (github.com/dkt64/defMONRelocator, by DKT/Samar) independently confirms the player code layout and ZP usage.",
    "The two official defMON wikis (toolsforscholars.com/defmon and defmon.vandervecken.com) are both down as of July 2026 — the toolsforscholars instance returns 404s and the vandervecken instance crashes with a DokuWiki TypeError. This means the 'callingtheplayer' wiki page referenced by defmon-driver source is inaccessible for now. The defmon-driver and defMONRelocator repositories are the best surviving technical documentation.",
    "defMON tunes are relocatable ONLY to page-aligned (multiple-of-$100) destination addresses, and this is a documented design property of the format, not a limitation of any one tool: defMONRelocator's own C# source (`Program.cs`, fetched and compiled from https://github.com/dkt64/defMONRelocator this session) computes `_diffRelocate = ((_addDest - _pc) >> 8) & 0xff` -- a HIGH-BYTE-ONLY delta -- and its own usage banner states 'HINT: Relocation aligned to page only allowed.' Every absolute-mode instruction operand and both split-table entries (see `memory.layout`) are patched by adding this high-byte-only delta to their existing high byte; low bytes are never touched anywhere in the tool. This directly explains (and generalizes) this project's own repeated 'page-aligned control passes, non-page-aligned control fails' pattern (cf. sid-player-verify agent lessons 79/87/91/103/110/119/125) for this specific player: it is not an emergent empirical pattern here, it is the literal algorithm.",
    "CRITICAL, newly-confirmed 2026-08-07: even defMONRelocator itself -- compiled fresh from its own cited GitHub source (dotnet build, net6.0) and run unmodified against a real tagged file (Antispeed.sid) -- FAILS to reproduce a byte-exact register-write trace after relocation, on every axis tested. Three independent tests, each isolating one variable: (a) address-only relocation to a page-aligned destination ($1000->$2000, zero page left at its native $FB/$FC/$96); (b) zero-page-only relocation using the tool's OWN documented example values ($FB->$02, $FC->$03, $96->$04), code left at native $1000; (c) zero-page-only relocation to a different, unrelated triple ($F7/$F8/$F9), ruling out a coincidental collision with $02-$04. All three diverge from the real file's trace at the EXACT SAME point: write #148 of 9628 (frame 5, first on osc1_pw_lo), despite each test touching a completely different, non-overlapping set of bytes (33 zero-page-operand bytes for (b)/(c); code+table high-byte deltas for (a)). A from-scratch independent reimplementation of the relocator's own stated algorithm (this project's `dis6502.js --symbolic` plus a hand-written high-byte-only patcher for the two split tables) reproduces the SAME frame-5 divergence, and its relocated binary differs from the official tool's own relocated output by only 41 of 4741 bytes (all inside blocks the naive linear byte-scanning relocator likely misclassifies, since -- unlike this project's recursive-descent disassembly -- it decodes fixed PC ranges byte-by-byte assuming every byte is an instruction, with no control-flow awareness, so it can misinterpret embedded `.byte` filler/workspace-init blocks within its own declared code ranges as fake instructions). Both the code/data-table structure (see corrected `memory.layout`) AND the $FB/$FC/$96 reference count (a direct grep of this project's own real-file disassembly finds exactly 18+6+9=33 memory-operand references to $FB/$FC/$96 -- matching defMONRelocator's hardcoded `TabFb`/`TabFc`/`Tab96` offset-table sizes exactly) are independently cross-validated as correct. The frame-5 root cause itself is NOT resolved this pass (would need RetroDebugger to watch what specifically reads a stale value at that point) -- but the headline finding stands on its own: relocation-invariance is not a usable verification method for this player, confirmed by testing the real, author-endorsed relocator tool directly rather than inferring it from this project's own reimplementation attempts (batches 35-37) alone.",
    "SIDdecompiler.exe (SIDM2's disassembler) cannot process real defMON exports — confirmed on 3 independent real HVSC files across 2 composers (Antispeed.sid and Automatas.sid by goto80; Cave.sid by Martin Demsky), tried at relocation $1000 (-a4096) with default flags, -z -d -c -v2, -v1, -v0, -t1, -t100, and explicit -I4096 -P4099 overrides matching the PSID header. Two distinct, reproducible failure signatures, neither a fluke: (1) Antispeed.sid crashes immediately with exit code 1 and zero output — no usage banner, no error text; (2) Automatas.sid and Cave.sid hang indefinitely, still running and actively burning CPU past 120s (confirmed via `wmic process ... get UserModeTime` showing CPU time still growing between two successive checks — genuinely spinning, not deadlocked). This held even at -t1 (one play call), ruling out a runaway play-loop trace as the cause — the hang begins during INIT or the very first PLAY call. Likely mechanism (not directly confirmed, since the tool never produces inspectable output): the play routine at $1022 is a per-note SID-register-write template whose immediate operands (LDA #$05 / #$1A / #$17 / ... at $1022-$1053) match a real traced frame-0 write burst — osc1_pw_hi/osc1_freq_lo/osc1_freq_hi etc. — strongly suggesting those operand bytes are self-modified per note/sound-program-row before each call, the class of self-modifying-immediate-operand code known to blow up a hybrid static/dynamic disassembler's internal trace state (cf. lessons_learned 43 in the sid-player-verify agent). A second, smaller self-modifying trick was hand-confirmed by direct byte inspection at the $1006 alternate entry: it temporarily patches the opcode at $10D8 from $AD (LDA absolute) to $60 (RTS), JSRs into $1022, then restores $AD — an early-return trick that on its own looks bounded, but corroborates the routine is genuinely self-modified at runtime, not just data-driven. Separately confirmed the rip itself is not corrupted: `sidm2-sid-trace.exe` on the raw original .prg (built from the PSID payload per this project's own `psid_header` convention) plays cleanly and produces real, non-trivial SID writes at frame 0 (12 changes) and frame 1 (2 changes) before going quiet — this is a disassembler-tool limitation, not a bad file. No successful disassembly, byte-diff, or register-write trace-diff was possible this pass as a direct result."
  ],
  "sources": [
    "sidid:DefMon (author 'Mats (Frantic of Hack'n'Trade)', released 2013, comment 'Made in 2008, released in 2013', reference https://csdb.dk/release/?id=120965) — data/sidid.json",
    "CSDb release 120965 ('Defmon &D', Genesis Project leak/crack, 7 Aug 2013): https://csdb.dk/release/?id=120965",
    "CSDb release 196474 ('defMON V20201008', Hack'n'Trade, 8 Oct 2020 — the canonical current tool page): https://csdb.dk/release/?id=196474",
    "DeepSID player spec box (data/players.json, title 'defMON'): developer Frantic, start_year 2013, end_year 2020, site http://toolsforscholars.com/defmon/doku.php?id=download:download, source_code 'No', distribution 'Freeware (?)', player_size 'Less than 2100 bytes', zero_pages '3 ($96 + $FB-$FC) + sometimes also $02', speeds '1x to 8x', instruments '256 sound program rows', patterns '128; each up to 32 rows'",
    "defmon-driver (third-party Python automation; primary source for memory layout, data format, and editor state): https://github.com/anarkiwi/defmon-driver — specifically field_setter.py (PATTERN_BASE=$1F00, per-step layout, arranger table addresses, LUT addresses, editor cursor/state variables), defmon.py (mode dispatch bytes, stereo/SID state), keycode_table.py ($0E44/$0E41/$0E42 keycode registers), smoke_coverage.py (PLAYER_BAND=$80-$9F), smoke_checkpoint_cpuhistory.py ('player loads at $1000+' docstring)",
    "defMONRelocator (third-party CLI tool by DKT/Samar; confirms player code layout, LUT addresses, ZP defaults, and $1000 base load address): https://github.com/dkt64/defMONRelocator — C# source (`Program.cs`, fetched and read in full 2026-08-07, see Verification) documents player code blocks ($1000-$131C, $1321-$1577, $16B0-$17A7), two hi-byte-only lookup tables patched under page-aligned relocation ($1900-$19FF, 256 entries; $1A80-$1AFF, 128 entries — NOT a paired lo/hi table 384 bytes apart as this card previously stated; see corrected `memory.layout`), and ZP offset tables for $FB (18 offsets), $FC (6 offsets), $96 (9 offsets) — the latter independently cross-checked 2026-08-07 against a direct grep of this project's own disassembly (exact match, 18+6+9=33)",
    "iAN CooG's reverse-engineering analysis of defMON play entry points, on CSDb release 203665 (Anticitizen 64 review): $1003 = sequence+sound; $1006 = sound-only (calls $1022 internally); alternating $1003/$1006 produces 0.5x sequence speed. Author Frantic confirmed. https://csdb.dk/release/?id=203665&show=review",
    "CSDb forums topic 131839 (Frantic discussing defMON format: 32-step patterns, 4-5 bit duration nibble, tick-based DUR representation, per-step speed, vim-like edit modes, no global speed command): https://csdb.dk/forums/index.php?roomid=11&topicid=131839",
    "Codebase64 wiki 'Very Short SID Playroutine' — uses defMON-like $1000 init / $1003 play as the standard example: https://codebase64.c64.org/doku.php?id=base:very_short_sid_playroutine",
    "Independent description of the chunk-based instrument/effect design and goto80's heavy use: electro.pizza (2019) — https://electro.pizza/2019/07/defmon-vice-chip/",
    "Interview with goto80 describing defMON's origin, Frantic building it solo for years, and the weekly 'defJAMS' testing sessions: Recollection interviews — https://www.atlantis-prophecy.org/recollection/?load=interviews&id_interview=189",
    "Pouet.net prod entry (leak framing, 'The best music-editor for C64 ever made'): https://www.pouet.net/prod.php?which=62178",
    "Local dataset: 102 files tagged `DefMon` across 10 composers (see knowledge/COVERAGE.md; composer breakdown computed from data/composers/*.json in this research pass)",
    "2026-07-23 verification attempt: real HVSC files examined -- MUSICIANS/G/Goto80/Antispeed.sid, MUSICIANS/G/Goto80/Automatas.sid, MUSICIANS/D/Demsky_Martin/Cave.sid. Hand-disassembly of Antispeed.sid's payload bytes (this pass, not a public source) confirmed entry-point structure. SIDdecompiler.exe (C:/Users/mit/claude/c64server/SIDM2/tools/SIDdecompiler.exe) fails on all three -- see quirks array and Disassembly notes.",
    "2026-08-07 verification attempt: fetched defMONRelocator's Program.cs directly (https://raw.githubusercontent.com/dkt64/defMONRelocator/master/defmonrelocator/Program.cs, 373 lines, read in full -- previously only cited, never actually read line-by-line by this project), compiled it with `dotnet build -c Release` (net6.0 target, dotnet SDK 10.0.302 on this machine), and ran the resulting defmonrelocator.dll directly against Antispeed.sid's extracted payload for 3 independent relocation tests (address-only, ZP-only x2). See quirks array for the full result -- corrects the pattern-base LUT address on this card and definitively rules out relocation-invariance as a viable verification method for this player, confirmed via the real tool rather than inferred."
  ]
}
```

## Overview

defMON is a native C64 music tracker/editor by Frantic of Hack'n'Trade (Mats, per SIDId),
built solo starting around 2008 and first surfacing publicly via a 2013 Genesis Project
leak/crack (CSDb release 120965), with development continuing under Hack'n'Trade's own
releases through at least October 2020 (CSDb release 196474). It is notable for a
design that departs from the usual C64 tracker layout -- no separate instrument,
wavetable, or effects tables, but a single shared table of 256 reusable "sound program"
chunks with two chunks triggerable per sequence step -- and for MIDI/DIN-sync/
Gameboy-sync support aimed at live chiptune performance. Usage in this dataset
(102 files, 10 composers) is dominated by goto80 (Anders Carlsson) and Martin Demsky
(~70% combined), consistent with goto80's documented close involvement in the tool's
development and testing. It is closed-source freeware, but its memory layout, entry
points, and data format have been extensively reverse-engineered by third parties
(defmon-driver, defMONRelocator, iAN CooG), allowing this card to reach `in-progress`
with credible (though not independently verified) Tier 3 facts.

## Quirks & gotchas

See the `quirks` array. Key load-bearing points: (1) SIDId's CSDb reference points at a
third-party leak/crack, not defMON's own canonical tool page -- both are cited. (2) The
tool's chunk-based design means there's no conventional effects command table; everything
is built from sound program rows. (3) Speed is per-step tick duration, not a global
command -- changing global tempo requires editing every step. (4) The dual play entry
points ($1003/$1006) are an unusual multispeed mechanism. (5) The official wikis are
both down; defmon-driver and defMONRelocator are the best surviving technical docs.

## Disassembly notes

No own disassembly performed. All Tier 3 facts come from third-party reverse-engineering:
- Entry points ($1000/$1003/$1006) from iAN CooG's CSDb analysis (release 203665)
  and Codebase64 wiki convention.
- Memory layout (player code blocks, LUTs, arranger tables, PATTERN_BASE, editor
  state structure) from the defmon-driver Python source (field_setter.py, defmon.py,
  keycode_table.py, smoke_coverage.py, smoke_checkpoint_cpuhistory.py).
- Player code layout and ZP usage independently confirmed by defMONRelocator C# source.
- Data format (per-step byte layout: speed/gate nibble, sidcall1, sidcall2, note)
  from field_setter.py constants.

The sound program row (chunk) binary format remains undocumented in all public sources --
this is the most significant gap. The official defMON wikis are both down as of
July 2026, so the wiki page "callingtheplayer" referenced by defmon-driver source
is inaccessible.

**2026-07-23 verification attempt (this pass):** picked three real HVSC files
(Antispeed.sid, Automatas.sid -- goto80; Cave.sid -- Martin Demsky), read PSID
headers directly (all: loadAddr=0 -> real load address is the payload's own
first 2 LE bytes = $1000; init=$1000, play=$1003, subtunes=1 -- matching the
card's existing entry-point claims). Hand-disassembled the first ~150 bytes of
Antispeed.sid's payload byte-by-byte (no tool needed for this much):
- `$1000: 4C FE 14` = `JMP $14FE` (init jumps out to the real init body).
- `$1003: 4C 22 10` = `JMP $1022` (play, direct jump into the per-note SID
  write routine).
- `$1006: AD D8 10 / 48 / A9 60 / 8D D8 10 / 20 22 10 / 68 / 8D D8 10 / 4C BE 12`
  = the alternate "sound-only" entry: save the byte at $10D8, patch it to
  `$60` (RTS), `JSR $1022`, restore the saved byte, then `JMP $12BE`. Since
  $10D8 originally holds `AD` (the opcode byte of `LDA $10CE`, confirmed by
  reading $10D8 directly), this is a genuine self-modifying early-return
  trick that truncates $1022's execution mid-routine -- directly confirms the
  card's existing claim that $1006 "internally calls $1022 for the sound
  engine".
- `$14FE`: a 24-iteration `DEY`/`BPL` loop zeroing SID registers $D400-$D417,
  ordinary init code, not itself infinite.
- `$1022` onward: a sequence of `LDX #imm` / `LDA #imm` / `STA $D4xx` triples
  writing pulse-width/frequency/waveform per voice, with immediate operands
  (`#$05`, `#$1A`, `#$17`, `#$04`, `#$16`, `#$0D`, ...) that match, byte for
  byte, a real traced frame-0 SID write burst (see below) -- strong
  circumstantial evidence these operands are self-modified per note before
  each call (defMON's "sound program row" mechanism), not fixed constants.

Attempted `SIDdecompiler.exe -a4096` (decimal for $1000, per gotcha 1) with a
sweep of flags (default, `-z -d -c -v2`, `-v1`, `-v0`, `-t1`, `-t100`,
`-I4096 -P4099`). **All three files failed disassembly**, in one of two
reproducible ways: Antispeed.sid crashes instantly (exit 1, zero output, no
error text); Automatas.sid and Cave.sid hang indefinitely, confirmed via
`wmic process where "name='SIDdecompiler.exe'" get UserModeTime` showing CPU
time still actively growing between two checks (genuinely spinning, not
deadlocked) -- reproduced with clean process isolation (no stray/orphaned
processes) to rule out a Windows-signal-handling false hang. `-t1` (a single
play call) still hangs, ruling out an unbounded play-loop trace as the cause;
the failure begins in INIT or the very first PLAY call.

Separately confirmed the files themselves are not corrupted: built a raw
`.prg` from Antispeed.sid's PSID payload (per this project's `psid_header`
convention) and ran it through `sidm2-sid-trace.exe` directly (20 frames,
init=$1000, play=$1003) -- it played cleanly, producing 12 real SID register
changes in frame 0 (osc1/2/3 pulse-width and frequency, osc3 waveform,
filter mode/volume, filter cutoff) and 2 more in frame 1 (osc3 frequency
updating), then going quiet for the remaining 18 frames traced. The frame-0
values line up exactly with the immediate operands read at $1022-$1053
above.

**No disassembly, byte-diff, or trace-diff was possible this pass** -- the
blocker is `SIDdecompiler.exe` itself, not a missing fact. The most likely
cause (not directly provable without inspecting the tool's own source or
using a live emulator instead) is that $1022's self-modified per-note
immediate operands create a combinatorial explosion in the disassembler's
internal static/dynamic trace state across the many distinct note values a
real song's 256 sound-program rows would produce.

A future verification pass should not retry `SIDdecompiler` with more flag
combinations (exhausted this pass) -- the next real lever is either (a) a
live emulator with single-stepping (RetroDebugger, see the sid-player-verify
agent's escalation tier) to manually trace INIT/PLAY register writes without
requiring a static disassembly at all, or (b) hand-writing a minimal
from-scratch reconstruction of the $1000/$1003/$1006/$1022 entry-point shell
(now byte-confirmed above) and trace-diffing *that* against the real file,
without attempting a full disassembly of the self-modified sound engine.

## Verification

### 2026-08-07 — relocation-invariance definitively closed off (tested the real defMONRelocator, not just our own reimplementation); memory-map correction; status unchanged

**This session had no RetroDebugger access** (dispatched solo per this project's singleton rule, but the MCP tools were not present in this session's own tool set -- see `new_lesson_learned`). Pursued option 1 from the dispatch brief (implement the relocator's own table patching) using pure static tooling: `dis6502.js --symbolic`, `64tass`, `vsid-trace.js`, plus, newly, the actual `defMONRelocator` C# source fetched from GitHub and compiled locally with `dotnet build`.

**Correction to `memory.layout` (was wrong since this card's creation):** direct disassembly of Antispeed.sid shows the pattern-base LUT is NOT the "$1900-$19FF lo / $1A80-$1AFF hi" table batch37 diagnosed and this card previously stated. There are two SEPARATE contiguous hi-byte-only tables (`$1A00`/`$1A80` pattern-base, X-indexed; `$1800`/`$1900` sound-program-row pointers, Y-indexed with chaining) -- full detail in `memory.layout`. This was caught by reading the actual disassembly line-by-line rather than trusting the batch37 diagnosis's un-verified address claim (batch37 itself flagged its own scan as having a blind spot for split lo/hi layouts 384 bytes apart -- the real layout doesn't have that shape at all).

**Root confirmation: defMON is relocatable ONLY to page-aligned addresses, and this is now directly documented from source, not inferred.** `defMONRelocator`'s `Program.cs` computes `_diffRelocate = ((_addDest - _pc) >> 8) & 0xff` (high-byte-only) and prints "Relocation aligned to page only allowed." Re-ran the relocation-invariance control at a page-aligned delta (`+$1000`) with the two split-table high bytes correctly patched per this model: **still diverges**, first mismatch at write #148/9628 (frame 5).

**The decisive new test: compiled and ran the ACTUAL defMONRelocator tool** (not a reimplementation) against the real file, three ways:
| test | what changed | result |
|---|---|---|
| address reloc ($1000->$2000, page-aligned, ZP unchanged) | code+table high bytes | diverges at write #148 (frame 5) |
| ZP reloc only ($FB/$FC/$96 -> $02/$03/$04, the tool's OWN example) | 33 operand bytes, code untouched | diverges at write #148 (frame 5) |
| ZP reloc only ($FB/$FC/$96 -> $F7/$F8/$F9, different values) | 33 operand bytes, code untouched | diverges at write #148 (frame 5) |

All three fail at the identical point despite touching disjoint byte sets. A from-scratch reimplementation of the relocator's own algorithm (this session's `patch_hionly.js`) reproduces the same frame-5 divergence and differs from the official tool's own relocated binary by only 41/4741 bytes. Ruled out: non-determinism (re-traced the untouched original twice, 0 diffs including cycle timing); a rewrap-pipeline artifact (repackaged the untouched payload through the identical pipeline at delta 0, 0 diffs); a ZP-value collision (two unrelated ZP triples both fail identically); an incomplete $FB/$FC/$96 reference count (grepped the full disassembly for every real memory-operand reference to $FB/$FC/$96: exactly 18+6+9=33, matching defMONRelocator's own hardcoded table sizes exactly).

**Conclusion: relocation-invariance is not a viable verification method for this player, and this is now proven rather than merely repeatedly-attempted-and-failed.** Batches 35-37 struggled to get this project's OWN reimplementation to pass; this session shows the author-endorsed tool itself doesn't pass either, on any axis. Per the dispatch brief's option 2, this closes off further relocation-control attempts as a productive direction for this player.

**Status stays `in-progress`.** The corrected memory map and the definitive relocation finding are real progress and are independently cross-validated (defMONRelocator's own $FB/$FC/$96 table sizes match this project's disassembly exactly; the 3 code-block ranges match), but neither constitutes the register-write match this project's `verified` bar requires -- native reconstruction remains byte-identical-hence-tautological (lessons 63/69/98), and the frame-5 root cause itself is not resolved (would need RetroDebugger to watch a live memory read at that exact point; not available this session). Not claiming `verified` on cross-validated static evidence alone, per this agent's own constraints.

**Next step, concretely scoped:** with RetroDebugger, load Antispeed.sid natively, single-step frames 0-5, and watch what reads a stale/wrong value at the point osc1_pw_lo (register 2) first diverges under either relocation axis -- since the divergence is IDENTICAL regardless of which axis was touched, the actual trigger is very likely a specific memory location neither this project's own reimplementation nor defMONRelocator's own patch table currently accounts for. This is a narrower, better-scoped question than anything previous passes had (a single named write, a single named frame), not a repeat of "get the relocation control to pass."

**RetroDebugger attempt (2026-08-08) — confirmed the write mechanism live,
did not reach the specific frame-5 divergence, `status` unchanged.** Run
directly in the main session (platform confirmed idle first). Loaded
`Antispeed.sid` natively (`sid2prg.js`, load/init `$1000`, play `$1003`),
built a call trampoline outside the payload range, set a write breakpoint
on `$D402` (osc1_pw_lo), and hit it on the very first `play` call: PC
`$1022` (`ldx #$00 / lda #$05`, both self-modified immediates, exactly as
this card's static reading predicted) → `stx $d402 / sta $d403` (pulse
width lo/hi) → `ldx #$17 / lda #$1a / stx $d400 / sta $d401` (freq
lo/hi). This is a genuine, first-ever *live* confirmation of the
self-modified per-note SID-write template's exact mechanism.

**Did not reach write #148/frame 5 specifically**: the call trampoline
used here (a raw `jsr play` loop, the same pattern successful on other
cards this session) has no frame-timing/IRQ pacing, so it hammers `play`
far faster than real hardware would and never advances whatever internal
note-sequence state a properly-paced run would — every iteration hit the
identical self-modified values (X=0/A=5 unchanged), consistent with this
being note-index-0's template on every call, not progressing to later
notes. **New methodological lesson for this player specifically**: closing
this blocker needs either a proper raster-IRQ-paced driver (matching how
`vsid`/real hardware actually calls `play`, once per frame) or many more
loop iterations with real frame synchronization — a bare fast call-loop
trampoline is insufficient for a card whose blocker is tied to a specific
frame/write index, unlike the other cards this session where the loop
trampoline's timing didn't matter. Not attempted further this pass (time
budget within a 9-card batch).

### 2026-07-31 (batch37) — RESOLVED: the relocation control is inapplicable to defMON

**The relocation control never could have passed, and the reason was documented
on this card the whole time. Both batch35's and batch36's diagnoses were wrong,
and the disassembly is not implicated.**

Adjudicating the 84 unexecuted instruction starts (batch36's bounded target)
gave 78 fall-through-only, 3 genuine branch/call targets from executed code, 3
inherited. The decisive test was a **partial relocation control**: rewrite only
the 572 confirmed-executed sites and leave the 84 as literals, so misclassified
data would stay intact and genuinely cold code would never run. If the 84 were
the problem, that build should have traced clean.

It traced **worse** — 3,364 writes against the original's 9,628. So the 84 are
not simply data; at least some are real code reached in contexts the
11,143-frame capture never hit (`$10D1` is a confirmed branch target from
executed code). That falsifies "the 84 are the problem".

**The actual cause, from this card's own `data_format` section:** defMON stores
pattern base addresses as a **split lo/hi byte table in data** — `$1900-$19FF`
lo bytes, `$1A80-$1AFF` hi bytes, 128 entries. Verified directly against the
payload: **39 of those 128 entries resolve to addresses inside the payload**
(e.g. `$1F21`). Symbolic relocation rewrites operands of *instructions* only, so
those table entries kept their original values and the relocated player read
pattern data from the pre-relocation addresses — precisely the observed
symptom (first value divergence at frame 2 was a data-sourced register value,
not a control-flow crash).

This is also why `defMONRelocator` exists as a separate third-party tool, which
this card already recorded as patching "three ZP addresses across **18+6+9
offset tables within the player code**". **defMON tunes are not naively
relocatable by construction.**

**Why the earlier scan missed it**: batch35 searched data for **16-bit
little-endian pairs** pointing in-range and found none, which was reported as
ruling out pointer tables. A *split lo/hi byte array* is structurally invisible
to that search — the lo and hi halves live 384 bytes apart. The scan was not
wrong so much as asking a question that could not detect this layout.

**Consequences.** (1) The relocation control is **not a valid verification
route for this player** without first implementing the relocator's table
patching. (2) Nothing observed across batches 34-37 is evidence against the
disassembly: all 572 executed addresses check out as instruction starts, and
the relocation failures are fully explained by unpatched data tables.
(3) `status` stays `in-progress` — this clears an obstacle and corrects the
record, it does not produce a register-write match.

**Genuinely next**: either implement the lo/hi + offset-table patching (the
`$1900`/`$1A80` LUT is known and bounded; the "18+6+9 offset tables" would need
reading `defMONRelocator`'s C# source, already cited in `sources`), or drop
relocation for this player and verify a different way.

### 2026-07-31 (batch36) — broad runtime coverage; batch35's diagnosis was wrong

**Batch35 concluded the relocation failure was most likely an imperfect code/data
split. With 7× more runtime evidence that conclusion does not hold, and the real
risk surface is now measured rather than guessed.**

Method for the coverage that was missing: `retro_step_subroutine` returns
immediately on defmon's `JMP`-based play entry, which is why batch34 only ever
had 79 executed addresses. Instead, install a real IRQ — write
`JSR $1003 / JMP $EA31` at `$C000`, point `$0314/$0315` at it, park the CPU in a
`CLI / JMP *` idle loop, and run under warp. That produced **11,143 frames**
(~3.7 minutes of playback) and **572 executed code bytes**, spanning `$1000-$177E`
including a `$168C-$177E` region the earlier passes never reached.

**Cross-check result: all 572 executed addresses are covered by the static map,
and every one of them is an instruction start. Zero mismatches.**

**The asymmetry that matters**, and which batch35 missed: an executed-address
check can only catch **false negatives** (real code classified as data). It is
structurally incapable of catching **false positives** (data classified as
code) — and false positives are exactly what breaks a relocation control,
because `--symbolic` rewrites the "operands" of anything it believes is an
instruction.

Measured false-positive surface:

| | count |
|---|--:|
| code-classified instruction starts | 656 |
| confirmed executed | 572 (87.2%) |
| **never executed — unvalidated** | **84** |
| of those, carrying an in-range absolute operand | **51** |

So relocation rewrote **51 operand sites on bytes with no runtime evidence they
are instructions at all**. If some of those 84 are really data, that is enough
to corrupt playback while leaving the byte-diff at 100.000000% — which is
precisely what was observed.

**Status stays `in-progress`.** This does not fix the reconstruction; it
replaces a vague suspicion with a specific, bounded target. The next step is no
longer "get more coverage" — it is to adjudicate those 84 unexecuted
instruction starts individually: reachable-but-cold code (a rare effect branch)
versus recursive descent having walked into data. A relocation control that
rewrites only the 572 confirmed-executed sites and leaves the 84 untouched would
separate the two cleanly.

### 2026-07-31 (batch35) — relocation control FAILED; the disassembly is not trustworthy yet

**Attempted the relocation control described as the next step below. It failed,
and that is the honest headline: `defmon` is further from `verified` than the
100.000000% byte-diff made it look.**

Method (the batch29 methodology that produced this session's only `verified`
flip): added a `--symbolic` mode to `scripts/dev/dis6502.js` that emits every
in-range absolute operand as `ORG + $offset`, so changing one `ORG` definition
relocates the whole player — including addresses landing mid-instruction, which
matters here because this player writes into its own operand bytes.

- **Transformation is lossless**: at delta `$0000` the symbolic build reassembles
  to 4,741 bytes, 0 diffs, 100.000000% — identical to the original.
- **Relocated build at `+$120`** (deliberately not page-aligned): assembles to
  4,741 bytes at `$1120-$23A4`, **596 bytes differing (12.6%)** from the
  original, so it is a genuinely different binary and not a cosmetic change.
- Both wrapped into the original PSID header with load/init/play shifted by the
  same delta (`$1000->$1120`, `$1003->$1123`) via a relocation-aware rewrap.

Trace-diff over 400 frames, `(frame, cycle, register, value)`:

| comparison | writes | divergences |
|---|--:|--:|
| original vs native rebuild (delta `$0000`) | 9,628 / 9,628 | **0** — and tautological, the binaries are identical |
| original vs **relocated** (delta `$120`) | 9,628 / 9,628 | **8,956 including cycle, 7,598 ignoring cycle** |

First 52 writes match, then it diverges. First value divergence is frame 2,
register 16 (voice 3 pulse-width lo): original writes `$00`, relocated writes
`111`. That is a data-sourced value going wrong, not a control-flow crash.

**Diagnosis attempted and inconclusive.** Three candidate mechanisms were
checked and all three came back negative: (a) in-payload pointer tables in data
that relocation would not rewrite — the 404 apparent hits were an artifact of
reading one ascending *byte* table as overlapping 16-bit values, not a pointer
table; (b) `LDA #<hi-byte>` immediates stored to zero page as pointer setup — 0
occurrences; (c) address-byte immediates written into the player's own code
operands — 0 occurrences.

**What this most likely means.** With those ruled out, the leading explanation
is that the code/data split is genuinely imperfect: bytes that are really data
were classified as code, so `--symbolic` rewrote their "operands" during
relocation and corrupted them. That is the control doing its job — falsifying a
reconstruction that the byte-diff scored at 100.000000%. The split was only ever
validated against 79 executed addresses (one init call plus two play calls),
which the batch34 note already flagged as a spot check rather than coverage.

**Status stays `in-progress`, and the batch34 disassembly should not be treated
as verified-quality.** It is byte-exact and it round-trips, but it has now
failed the one test that could have shown the split was right. Next leads, in
order: get much broader runtime coverage (a real IRQ-driven run rather than
`retro_step_subroutine`, which returns immediately on a `JMP` play entry) and
re-check every executed address against the map; then re-run this control. A
relocation control that fails is more informative than a byte-diff that passes.

### 2026-07-31 (batch34) — byte-exact reassemblable disassembly; uses undocumented opcodes

**`Antispeed.sid` now has a full disassembly that reassembles byte-exact**, via
a new static recursive-descent disassembler (`scripts/dev/dis6502.js`) seeded
from the three entry points `$1000`/`$1003`/`$1006`. 1,562 code bytes (32.9% of
the 4,741-byte payload), 3,179 data bytes, 86 labels. 64tass reassembles it to
**4,741 bytes at `$1000-$2284`, 0 diffs, 100.000000%**.

**Read that figure correctly: on its own it proves nothing.** Everything not
classified as code is emitted as `.byte`, so a run that misidentified *all*
code as data would also report 100.000000%. The byte-diff tests self-consistency,
not the code/data split.

**The split was validated independently**, against the addresses RetroDebugger's
`retro_code_map` reports as actually executed (init plus play, 79 addresses).
That cross-check found a real defect on the first pass: **defMON executes the
undocumented opcode `$CB` (AXS/SBX) at `$14C3` and `$154A`.** With `$CB` absent
from the opcode table the walker stopped dead at it and silently classified
everything downstream as data — 8 of 79 executed addresses landed in `.byte`
runs — while the byte-diff still read 100.000000%. After adding the
undocumented opcodes, **all 79 executed addresses are covered**, and code
classification rose from 1,410 to 1,562 bytes.

Decoded around the first occurrence:

```
$14C2:  8a        TXA
$14C3:  cb 31     AXS #$31      ; undocumented
$14C5:  30 03     BMI $14CA
$14C7:  4c e6 13  JMP $13E6
$14CA:  60        RTS
```

**Status stays `in-progress`.** Two things are missing for `verified`. (1) There
is no trace-diff of a *reconstruction*: the reassembly is byte-identical to the
original, so tracing it and comparing is tautological — the batch29 lesson
applies exactly. (2) The code/data split is validated on 79 executed addresses
only, which is one init call plus two play calls, not broad coverage. **What
would close it**: a relocation control, as used for `4753-softcopy` — relocate
the player by a deliberately non-page-aligned delta, reassemble, and require a
cycle-identical `$D400-$D418` write match against the original via
`vsid-trace.js`. That is now a well-specified piece of work with every tool in
place, rather than anything blocked.

### 2026-07-31 (batch33) — tracing confirmed open

`scripts/dev/vsid-trace.js` traces `Antispeed.sid` first try: 200 frames,
**4,828 register writes across all 25 SID registers**, ~24 per frame — the
profile of a conventional three-voice synth tracker, consistent with the
per-note SID-register-write template at `$1022` described below. Combined with
the batch31 disassembly note, **both halves of the
disassemble-reassemble-trace-diff workflow are now open for this card.**

Single-sided observation of the original file — nothing reconstructed or
diffed — so status is unchanged. Profile and cross-player comparison:
`knowledge/artifacts/unblocked-trace-profiles.txt`.

### 2026-07-31 (batch31) — SIDdecompiler block routed around; hand-read confirmed

**The SIDdecompiler blocker below is no longer terminal.** RetroDebugger
disassembled `Antispeed.sid` on the first attempt (payload extracted to `.prg`,
`retro_load`, `retro_disassemble` — no SIDdecompiler involvement). Full excerpts
in `knowledge/artifacts/siddecompiler-hang-class.txt`.

**This independently confirms the prior pass's hand-derived facts, all of them.**
That pass read payload bytes by hand, without a working disassembler, and
predicted: the `$1006` alternate entry patches `$10D8` from `$AD` to `$60` (RTS),
`JSR $1022`, then restores it; the play routine at `$1022` is a per-note SID
write template whose immediate operands (`#$05`, `#$1A`, `#$17`) are
self-modified; and self-modified immediate operands are the likely mechanism
killing the disassembler. The live disassembly shows all three exactly as
predicted, and settles the third: init at `$14FE` explicitly zeroes **seven
operand slots inside the play routine** (`$10B6`, `$10BE`, `$10B9`, `$10C0`,
`$10CA`, `$10AA`, `$10AF`) before starting, and writes the subtune number into
the code at `$10EB`. Entry structure confirmed: `$1000 -> JMP $14FE` (init),
`$1003 -> JMP $1022` (play).

**Status stays `in-progress`.** Static disassembly of one file only — code never
executed (`isExecuted=false` throughout), nothing reassembled, no byte-diff, no
trace-diff. The sound-program row binary format remains undocumented. What
changed is that the disassembly route is open, so the next attempt no longer has
to "route around SIDdecompiler entirely" as an unsolved problem.

### 2026-07-23 — the original SIDdecompiler block

**Not verified -- `status: in-progress` (unchanged this pass).** Tier 1 (identity) and
Tier 2 (provenance) facts are confirmed from SIDId, two CSDb release pages, DeepSID's
cached player spec box, and external web sources. Tier 3 (runtime) facts come from
credible third-party reverse-engineering (defmon-driver, defMONRelocator, iAN CooG)
plus this pass's own hand-disassembly of Antispeed.sid's first ~150 bytes (entry
points $1000/$1003/$1006, the $10D8 self-modifying early-return trick, and $1022's
per-note SID-write template) and a real `sidm2-sid-trace.exe` run confirming the
file plays and produces sane register writes -- but a full disassemble-reassemble-
byte-diff-trace-diff pass, the bar this project requires for `verified`, was
**not achievable this pass**: `SIDdecompiler.exe` fails on every one of 3 real
DefMon files tried (2 composers), either crashing instantly with no output or
hanging indefinitely under active CPU load, across a full sweep of relocation/
verbosity/trace-count/entry-override flags. This is a genuine tooling blocker,
not a knowledge gap or an insufficiently-thorough attempt -- see "Disassembly
notes" above for the full flag sweep and evidence, and the new quirks-array entry
for a concise summary. The sound program row binary format also remains entirely
undocumented, and (with the disassembler unusable on this player) is not close to
resolvable via the static-disassembly route this project's other cards use.
Promotion to `verified` still requires a full disassembly+trace pass; the next
attempt should route around `SIDdecompiler` entirely (live emulator tracing via
RetroDebugger, or a minimal hand-written entry-point-shell reconstruction) rather
than retrying it.

## Sources

See the `sources` array for the complete list with URLs -- SIDId's DefMon entry, CSDb
releases 120965 and 196474, DeepSID's cached player spec box, the defmon-driver
repository (primary technical source), the defMONRelocator repository (independent
confirmation), iAN CooG's CSDb RE analysis, Frantic's CSDb forum posts, the Codebase64
wiki, an electro.pizza writeup, a Recollection interview with goto80, and the
Pouet.net prod entry.

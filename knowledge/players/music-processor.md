# Music Processor

```json
{
  "id": "music-processor",
  "name": "The Music Processor",
  "aliases": ["Music_Processor"],
  "authors": ["M. Peter Engelbrite"],
  "released": "1984 (Sight & Sound Music Software)",
  "status": "in-progress",
  "platform": "Native C64 program sold on disk by Sight & Sound Music Software — a BASIC-extension music notation editor/player, not a demoscene tracker. Marketing copy: \"This software creates an in-home recording studio. Three voice compositions can be written, edited, recorded, and printed\" (99 preset instrument/effect presets, joystick-selectable). Every .sid file in the collection is an RSID rip of one tune's data extracted from the original program, not output from a separate composer's tracker/editor.",
  "csdb_release": 150058,

  "memory": {
    "load_address": "$10AC — read directly from the PSID/RSID header's data payload (header `load_address` field is $0000, meaning the real load address is the first little-endian word of the data block, per PSID convention). Confirmed identical across all 64 files in the collection by reading each file's header, not just the one traced.",
    "zero_page": "Partially disassembled this session. $3B/$3C (labelled z3b/z3c) — a 16-bit accumulator/pointer, written by the note-trigger cluster around $2A45/$2A59 (e.g. `lda l141f,Y / sta z3b`, then `clc/adc #$28` or `#$29` on later calls — looks like a running byte-offset accumulator into a note/pattern stream, not confirmed). $6F/$70 (z6f/z70) — set once in `init` to the fixed pointer $31C0 (`lda #$c0/sta $6f`, `lda #$31/sta $70`); purpose of $31C0 itself not disassembled (outside the traced/covered engine range). Full ZP map beyond these two pairs remains TODO — no systematic ZP scan was done, these are just the addresses the disassembled engine code happened to touch.",
    "layout": "Refined this session, still partial. $10AC-$1BDF (2867 bytes) — fixed engine code, unchanged from the earlier pass's finding. $1BDF-$1BF9 (~26 bytes) — the real `init` routine: sets ZP pointer $6F/$70=$31C0, `jsr $15D8` (not disassembled), zeroes low workspace $0D41/$0D49 and sets $0D4B=$04 (this workspace sits BELOW the loaded payload, at addresses the RSID file never covers — real writes to genuinely fixed/external RAM, not song data), then `jsr $28DC` to install the NMI player (see `entry.play`). Critically, **`init` never returns via RTS** — control falls straight through into an infinite foreground loop at $1BFA (`jsr $1FA2 / jsr $1B75 / jmp $1BFA`, repeated forever) that was NOT disassembled (see quirks — SIDdecompiler hangs trying to trace through it). $28E1-$2917 (~0x36 bytes) — a small cluster of NMI vector install/save/restore routines, confirmed byte-identical across 2 independently-checked files (All_My_Love.sid, Andante.sid) despite very different total payload sizes (9862 vs 11931 bytes) — genuinely fixed engine, not per-file coincidence. $2917-$2B4A — the real per-frame NMI dispatcher + per-voice envelope-timer engine (see `entry.play`/`data_format`). $2A27-$2A59-ish — a 'note trigger' code cluster whose PRISTINE (cold, never-executed) bytes contain literal `$EA` (NOP) placeholder slots interleaved with real instructions (confirmed identical in both checked files) — strong evidence of self-modifying code that some other routine (most likely the still-undisassembled $1FA2/$1B75 foreground loop, or a first pass through this cluster itself) patches with real opcodes before the note-trigger logic works correctly; NOT yet identified what patches it or with what. Roughly $2F8A onward (in All_My_Love.sid; end of payload is $3732) — never touched even after a 30000-simulated-play-call trace (~10 minutes of emulated playback), so likely genuine per-song note/pattern data, but the precise boundary between fixed engine and variable song data past $2B4A was not pinned down. The earlier pass's guess that `song data` begins right at $1BDF was wrong — $1BDF is the `init` entry, and a substantial further stretch of FIXED engine code (NMI install, per-voice engine, note-trigger cluster) runs from roughly $28E1 to at least $2B4A before any per-song data plausibly begins."
  },
  "entry": {
    "init": "$1BDF — identical across all 64 files in the collection (read directly from each RSID header, not just the traced sample). Real cold-start behaviour: runs a short (~26-byte) one-time setup then falls into an infinite foreground loop and NEVER returns via RTS — see `memory.layout`. For disassembly/tracing purposes this session patched a scratch copy of the RSID payload with an `RTS` at $1BFA (right where the foreground loop begins) to make SIDdecompiler's emulation terminate; this is a diagnostic workaround, not a claim about the real program's behaviour.",
    "play": "Confirmed this session: NOT an IRQ — it's an **NMI**, installed by `init`'s `jsr $28DC` call. That routine (at $28E1) does `lda #$17/sta $0318` + `lda #$29/sta $0319` (installs $2917 as the KERNAL NMI vector), then `lda #$81/sta $DD0D` + `lda #$51/sta $DD0E` (enables CIA #2 Timer A underflow interrupt and starts the timer) — CIA #2's interrupt line is wired to the 6502 NMI input on a real C64, which is why the RSID header's `play` field is $0000 (self-installed via a hardware vector swap, not the PSID play-vector convention) and non-maskable (SEI in the foreground loop can't block it). $2917 is the true per-frame handler: pushes A/X/Y, sets CLD/SEI, then calls the per-voice engine at $2B4A three times with A=0,1,2 (one call per SID voice), re-enables/acks the CIA2 interrupt, restores registers, RTI. Confirmed byte-identical (both the vector-install code and $2917/$2B4A) across 2 independently-checked files."
  },
  "speed": "Frame-driven, appears to run at the PAL 50Hz IRQ cadence, but writes are emitted only on note/state changes, not every frame — a real trace of `All_My_Love.sid` (50 frames, `vsid-trace.js --frames 50 --json`) recorded 33 writes across only 7 of 50 frames (`cadence: sparse`). A concrete note-on/note-off pair was observed: frame 20 sets voice-1 control to $41 (gate on) with a new frequency, frame 34 sets it back to $40 (gate off), frame 35 immediately starts the next note — a 14-frame (~0.28s) note-gate period, consistent with quantized playback of manually-transcribed sheet music rather than fine-grained tracker timing. Confirmed this session: the underlying interrupt is CIA #2 Timer A (NMI), not raster — see `entry.play`. Exact tick rate (the CIA timer latch/reload value) was not located in the disassembled range, so the real Hz is still TODO.",

  "data_format": {
    "order_list": "TODO — not disassembled. Likely not applicable in the tracker sense: this is a notation editor storing a score, not a pattern/order-list sequencer (unconfirmed).",
    "patterns": "TODO",
    "instruments": "TODO. Marketing copy states \"99 preset instrument and special effects sounds\", joystick-selectable (usermanual.wiki C64/128 Music Software Guide) — not verified against the binary.",
    "wavetable": "TODO",
    "pulsetable": "TODO — init frame of the traced file sets all three voices' pulse width to $0800 and control to $40 (pulse waveform, gate off) identically, but this is one observed init snapshot, not a confirmed table format.",
    "filtertable": "TODO — init frame sets $D417 (filter resonance/routing) to $F0 (max resonance; low nibble $0 means NO voice is routed through the filter) and $D418 (volume/mode) to $58 (high-pass + low-pass combined, i.e. notch-adjacent, NOT band-pass alone — $20/band-pass bit is unset; volume 8) in the one traced file; not confirmed as a general table.",
    "envelope_gate_timing": "New this session, from disassembly of $2B4A (the per-voice engine called 3x per NMI, A=voice index 0-2). Two 3-byte-per-voice countdown tables: $2BB0 ('primary' counter — real cold values in All_My_Love.sid: voice0=$05, voice1=$05, voice2=$25) and $2BB3 ('secondary' counter — real cold values: voice0=$02, voice1=$02, voice2=$02, the last inferred from the adjacent unlabelled byte at $2BB5). Each NMI call decrements the primary counter for that voice; when it reaches zero, the engine reads a per-voice SID-control shadow byte from a table at $0E04 (indexed by a per-voice offset read from a table at $2F89), ANDs it with a per-voice gate-clear mask at $2BBA (cold values $FE,$FE — clears bit 0, the SID gate bit), writes the result back to both the $0E04 shadow AND the real SID control register ($D404 + per-voice offset), then calls the note-trigger routine at $2A59 unconditionally. This mechanism was confirmed via byte-diff (99.9873%, 7902/7903 bytes exact against the real file in the disassembled $10AC-$2F8A range) but NOT confirmed via a register-write trace — see Verification."
  },
  "effects": {
    "encoding": "TODO: not disassembled. The note-trigger cluster around $2A27-$2A59 is disassembled at the byte level but contains literal NOP placeholder slots in its pristine form (self-modifying code — see `memory.layout` and quirks), so its real behaviour is not understood.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is the first knowledge card sourced from `scripts/dev/vsid-trace.js`, the VICE-based RSID tracer (see `scripts/dev/README.md`). Music_Processor was chosen as the proving case because it was the tag that motivated building the tool: `sidm2-sid-trace.exe` (PSID-only, calls the declared play address) returns 0 writes for every one of its 64 files since RSID declares `play=$0000`. `vsid-trace.js` runs a full emulated C64 via `vsid.exe -console -sounddev dump`, so the self-installed IRQ actually fires and gets captured. All 64/64 files traced successfully with 0 failures per the README.",
    "The 'self-installed IRQ' framing from the earlier pass was imprecise: it's an NMI, not an IRQ (CIA #2 Timer A, wired to the 6502 NMI line) — see `entry.play`. Corrected this session.",
    "SIDdecompiler.exe reproducibly HANGS (confirmed via `tasklist`: constant ~31MB memory, no progress, indefinitely — same structural signature as an existing gotcha for other custom-IRQ/NMI players) trying to disassemble this player directly from its real PSID/RSID init address ($1BDF), because the real `init` never returns — it falls straight from its ~26-byte one-time NMI-install setup into an infinite foreground 'wait for input' loop (`jsr $1FA2 / jsr $1B75 / jmp` back) that SIDdecompiler's call-and-expect-RTS emulation model cannot terminate. Worked around by patching a SCRATCH COPY of the RSID payload with an `RTS` opcode at $1BFA (the exact byte where the foreground loop begins) before feeding it to SIDdecompiler — this let the tool complete, but it also means the foreground loop's own routines ($1FA2, $1B75) were never visited/disassembled at all, not even partially.",
    "SIDdecompiler's `-a` relocation flag needed to target the tool's own `-v2` 'Start:' address ($0318, decimal 792) rather than the file's real PSID load address ($10AC, decimal 4268) — a NEW variant of an existing project gotcha about Start-vs-load-address mismatches: in every previously-seen case the mismatch was the player's OWN low-page workspace; here it's because `init` writes to the universal, fixed KERNAL NMI-vector RAM location $0318/$0319 via plain absolute addressing, and SIDdecompiler's memory-touch tracking sweeps that fixed OS address into the same captured span as the player's own relocatable code, anchoring its relabeling offset to it. Using the real load address as `-a` instead produced a full-length reassembly with no wrap warnings that LOOKED plausible but was silently offset by $0D94 bytes end-to-end (confirmed by byte-diffing against the original payload before catching this).",
    "Register-write trace-diff attempt FAILED, and the failure is itself the most useful finding of this pass. Confirmed the real per-frame handler address ($2917) via static disassembly (see `entry.play`), built a JSR-callable harness (patched the handler's closing `RTI` to `RTS`), and called it 500 times via `sidm2-sid-trace.exe All_My_Love_harness.prg 500 1bdf 2917` — result: 0 SID register changes, vs 22 real changes over just 50 real frames when the SAME unmodified original file is driven by `vsid-trace.js` (full-machine VICE emulation with autonomous NMI delivery and continuous foreground execution). Root cause, diagnosed via disassembly: the note-trigger cluster around $2A59 contains literal `$EA` (NOP) placeholder bytes interleaved with real instructions IN ITS PRISTINE COLD FORM (confirmed identical in 2 independently-checked files, so not tool corruption or a one-off) — near-certain evidence of self-modifying code that some other routine patches with real opcodes before first use. The likeliest patcher is the undisassembled foreground loop ($1FA2/$1B75) — which this project's standard init-then-play call harness structurally cannot exercise, since it assumes a short init that returns, followed by an independently-callable play routine, and this player's real architecture instead requires the foreground loop to run (and apparently self-modify code) concurrently with/before the NMI-driven engine works correctly.",
    "Despite the trace-diff failure, the FIXED ENGINE CODE that was disassembled round-tripped almost perfectly: reassembling via 64tass and byte-diffing against the real file's payload in the covered range ($10AC-$2F8A of All_My_Love.sid, 7903 of 9862 total payload bytes) gave 99.9873% (7902/7903) exact — the single remaining difference is the deliberate init-truncation patch byte itself (self-inflicted and explained, not a mystery divergence). A further ~1959 bytes ($2F8A-$3732, ~20% of this file's payload) were never touched even after a 30000-simulated-play-call trace (~10 minutes of emulated playback) — likely real per-song note/pattern data lying past the fixed engine, an honest coverage gap rather than a tool failure (matches an existing project precedent for 'genuinely never touched' vs 'under-traced').",
    "All 64 files in the collection share byte-identical `load=$10AC` / `init=$1BDF` header addresses (verified directly from every file's PSID/RSID header, not just the traced sample), despite payload sizes ranging 8,418-33,825 bytes — strong evidence these are rips of the same fixed player/editor engine with different song data appended, not 64 independently-compiled programs.",
    "Extremely sparse write cadence in the trace (33 writes over 50 frames, only 7 frames touched) is the software being simple, not the trace failing — matches the pattern `scripts/dev/README.md` already documented for this exact tag (\"writes only when a note changes\").",
    "Composer concentration: all 64 files in the local dataset belong to a single composer, Dick van Riemsdijk (Netherlands) — a 100%-concentration case. That does NOT mean this is a personal/bespoke player routine, though: SIDId identifies it as a specific commercial, boxed product (`The Music Processor`, Sight & Sound, 1984, CSDb release 150058) with its own marketing copy and reviews. The 100% concentration instead just reflects that HVSC happens to preserve only one person's output from this particular editor.",
    "Filenames in the collection are entirely classical/standards repertoire (Blue Moon, Ballade Pour Adeline, Die Schoene Blaue Donau, Cats in the Cradle, ...) — consistent with the software's advertised purpose as a notation-based \"in-home recording studio\" for transcribing existing sheet music, per a Lemon64 thread describing it as \"Notation based (staff with notes)\" with an animated title screen where notes danced to the music.",
    "IS present in the curated `data/players.json` (129-entry DeepSID player list) — {title: 'The Music Processor', developer: 'M. Peter Engelbrite', start_year: '1984', csdb_id: 150058, distribution: 'Commercial'} — so this is a curated, not an inferred/synthetic, player; identity is corroborated independently by DeepSID's curated entry, `data/sidid.json`'s `byTag` entry, and CSDb, not sourced from SIDId alone."
  ],
  "sources": [
    "sidid:Music_Processor (author M. Peter Engelbrite, 1984 Sight & Sound, CSDb release 150058) — data/sidid.json",
    "CSDb release: https://csdb.dk/release/?id=150058 (\"The Music Processor\", 1984, C64 tool, d64 download)",
    "Commodore 64 and 128 Music Software Guide (usermanual.wiki), Music Processor entry: \"This software creates an in-home recording studio. Three voice compositions can be written, edited, recorded, and printed\" / 99 preset instrument & effects sounds, joystick-selectable, $29.95, Sight and Sound Music Software — https://usermanual.wiki/Document/Commodore64and128MusicSoftwareGuide.1468320925/help",
    "Lemon64 forum, software identified as \"The Music Processor\" by Sight & Sound, described as staff-notation-based with an animated splash screen: https://www.lemon64.com/forum/viewtopic.php?t=56360",
    "Lemon64 forum, Sight & Sound Computer Song Albums (context on the Sight & Sound product line): https://www.lemon64.com/forum/viewtopic.php?t=27266",
    "Local dataset: 64 files, all tagged Music_Processor, all by one composer (van_Riemsdijk_Dick) — see knowledge/COVERAGE.md (rank 4, 64 files) and data/composers/van-riemsdijk-dick.json",
    "Own trace, this session: `node scripts/dev/vsid-trace.js <HVSC>/MUSICIANS/V/van_Riemsdijk_Dick/All_My_Love.sid --frames 50 --json`, plus direct PSID/RSID header inspection of all 64 files in that folder for load/init address consistency — not a disassembly, a black-box runtime + header observation only",
    "This session (verification pass): `SIDdecompiler.exe` disassembly of a patched scratch copy of All_My_Love.sid (RTS-patched at $1BFA to work around a confirmed real hang; relocated with `-a792` to the tool's own `-v2` Start: address; `-P10519` to override the play address to the statically-discovered real NMI handler $2917), reassembled via `64tass.exe`, byte-diffed against the true original payload (custom Node script), and a failed register-write trace-diff attempt via `sidm2-sid-trace.exe` (JSR-callable harness, RTI patched to RTS) compared against a fresh `vsid-trace.js` trace of the unmodified original. Cross-checked the fixed-engine address findings ($28E1-$2917 NMI install, $2A59 NOP-placeholder pattern) against a second file (Andante.sid) via raw hexdump, confirming byte-identical engine code across both. All raw work (patched .sid, .asm, .prg, trace logs, byte-diff/patch scripts) left in scratchpad for the next pass."
  ]
}
```

## Overview

The Music Processor is a commercial C64 music **notation editor and player**
published by Sight & Sound Music Software in 1984, credited to M. Peter
Engelbrite ([SIDId](https://csdb.dk/release/?id=150058)). It's a "BASIC
extension" style product, not a demoscene tracker: it presented a musical
staff, let a user transcribe (or select from 99 preset instrument/effects
sounds) a three-voice composition, and played it back with an animated
title screen (Lemon64 forum reports). All 64 files tagged `Music_Processor`
in the local HVSC-derived dataset belong to one composer, Dick van Riemsdijk
of the Netherlands — a 100%-concentration case, but one that reflects
preservation scope (only his rips survive in HVSC), not a bespoke/personal
routine: SIDId ties the tag to a real boxed retail product with contemporary
reviews. This is also the **first card sourced from `scripts/dev/vsid-trace.js`**,
the project's new VICE-based RSID tracer — Music_Processor was the exact tag
that motivated building it, since every one of its files is RSID with
`play=$0000` (self-installed NMI, not IRQ — corrected in the verification
pass below), which the existing PSID-only `sidm2-sid-trace.exe` cannot drive
at all.

## Quirks & gotchas

See the `quirks` array. Headline items from the identity/runtime-trace pass:
(1) all 64 files share byte-identical `load=$10AC`/`init=$1BDF` addresses
despite very different payload sizes, strong evidence of one fixed engine
binary with appended song data; (2) the tracer shows genuinely sparse,
event-driven register writes (not a trace failure); (3) 100% single-composer
concentration in the local dataset is a preservation-coverage artifact, not
evidence this is a personal/bespoke routine. New headline items from the
verification pass: (4) it's an NMI (CIA #2 Timer A), not an IRQ; (5)
SIDdecompiler.exe reproducibly hangs disassembling this player's real `init`
because it never returns (falls into an infinite foreground loop) — worked
around with a scratch-copy RTS patch; (6) the note-trigger code cluster
around $2A59 contains literal NOP placeholder bytes in its pristine form —
self-modifying code that a register-write trace-diff attempt could not
exercise, which is why verification did not close.

## Disassembly notes

**Verification pass (this session), real 6502 source read for the first
time.** Disassembled with `SIDdecompiler.exe` against a scratch-patched copy
of `All_My_Love.sid` (see quirks for why the patch was necessary), relocated
with `-a792` (decimal for the tool's own `-v2`-reported Start: address
$0318, NOT the file's PSID load address — see quirks), `-P10519` (decimal
for $2917, the real per-frame NMI handler, statically located by hand before
running the disassembler). Reassembled cleanly via `64tass.exe` with no
wrap/relocation warnings. This successfully identified and byte-verified
(99.9873% exact against the true file, single self-inflicted diff) the FIXED
ENGINE code from $10AC-$2F8A: the `init` setup sequence, the NMI
vector-install/save/restore routines, the per-frame dispatcher ($2917), and
the per-voice envelope/gate-timing engine ($2B4A) with its supporting tables
($2BB0, $2BB3, $2BBA, $0E04). It did NOT resolve: the foreground loop
routines $1FA2/$1B75 (never visited by the tool at all, since the RTS patch
sits right before them), the real behaviour of the self-modifying
note-trigger cluster around $2A59 (disassembled at the byte level, but its
pristine form contains NOP placeholders whose real patched content is
unknown), or the ~1959-byte song-data tail past $2F8A. See `memory`/`entry`/
`data_format` fields for the full breakdown, and quirks for the specific
tool workarounds used.

## Verification

**Still not verified — `status: in-progress`, unchanged.** This session
attempted the full verify workflow (disassemble → reassemble → byte-diff →
trace-diff) and made real progress but did not reach a register-write-exact
match, so `status` stays `in-progress` per this project's hard rule.

Numbers, precisely:
- **Byte-diff**: 99.9873% (7902/7903 bytes exact) across the disassembled
  $10AC-$2F8A range of `All_My_Love.sid` (80% of that file's 9862-byte
  payload). The single remaining diff ($1BFA) is the deliberate
  init-truncation patch byte itself — self-inflicted and explained, not a
  real divergence. The remaining ~1959 bytes of the payload ($2F8A-$3732)
  were never captured by the disassembler even after a 30000-simulated-call
  trace (~10 minutes of emulated playback) — an honest gap, not attempted
  further.
- **Cross-file check**: the fixed-engine bytes ($28E1-$2917 NMI install,
  and the $2A59 NOP-placeholder pattern) were confirmed byte-identical via
  raw hexdump in a second file, `Andante.sid` (11931-byte payload vs
  All_My_Love.sid's 9862) — real corroboration, not a one-file fluke.
- **Trace-diff: FAILED.** Built a JSR-callable harness (patched the real
  NMI handler's closing `RTI` to `RTS`) and called it via
  `sidm2-sid-trace.exe All_My_Love_harness.prg 500 1bdf 2917` — **0 SID
  register changes over 500 calls**. The same unmodified original file,
  driven by `vsid-trace.js` (full VICE machine emulation), produces **22
  real register changes over just 50 frames**. Diagnosed root cause: the
  note-trigger cluster's NOP-placeholder self-modifying code (see above) is
  almost certainly patched by the undisassembled foreground loop
  ($1FA2/$1B75) before it does anything useful, and the standard
  init-then-play call harness this project uses cannot exercise that
  loop — it assumes a short init that returns, which does not hold for this
  player.

**Concrete next step for whoever continues this**: disassemble $1FA2 and
$1B75 (the foreground loop) — SIDdecompiler cannot trace through them
without hanging, so this needs either a live continuously-running debugger
(VICE's monitor, e.g. via `-remotemonitor`/`-moncommands` — both were tried
briefly this session with mixed results, see scratchpad notes) or a manual
static disassembly starting from the known addresses $1FA2/$1B75. Once
whatever patches the $2A59 NOP slots is found, either (a) extend the
init-truncation patch point further (to right after that one-time patching
happens) and retry the JSR-callable harness, or (b) build a full RSID-style
wrapper around the reconstruction and trace-diff via `vsid-trace.js` instead
of the call-based harness, since that tool does not require init to return.

Tooling note for future passes: `vsid-trace.js` worked exactly as documented
on the first real card-writing attempt. `vsid.exe` (`C:\winvice\bin\vsid.exe`)
ran headless via `-console -sounddev dump`, exit code was 1 as documented
(status code is not meaningful — checked the dump file instead), and the
`--json` output's `initAddress`/`playAddress`/`cadence`/per-frame write list
were all directly usable without modification. No problems hit.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the CSDb release page,
a period C64/128 music-software buyer's guide with a direct product
description, two Lemon64 forum threads, the local HVSC composer dataset,
this session's own `vsid-trace.js` run plus direct header inspection of all
64 files in `MUSICIANS/V/van_Riemsdijk_Dick/`, and the verification pass's
own `SIDdecompiler.exe`/`64tass.exe`/`sidm2-sid-trace.exe` round-trip
(scripts and intermediate files left in `scratchpad/music-processor/`).

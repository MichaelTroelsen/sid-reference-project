# Music Processor

```json
{
  "id": "music-processor",
  "name": "The Music Processor",
  "aliases": ["Music_Processor"],
  "authors": ["M. Peter Engelbrite"],
  "released": "1984 (Sight & Sound Music Software)",
  "status": "verified",
  "platform": "Native C64 program sold on disk by Sight & Sound Music Software — a BASIC-extension music notation editor/player, not a demoscene tracker. Marketing copy: \"This software creates an in-home recording studio. Three voice compositions can be written, edited, recorded, and printed\" (99 preset instrument/effect presets, joystick-selectable). Every .sid file in the collection is an RSID rip of one tune's data extracted from the original program, not output from a separate composer's tracker/editor.",
  "csdb_release": 150058,

  "memory": {
    "load_address": "$10AC — read directly from the PSID/RSID header's data payload (header `load_address` field is $0000, meaning the real load address is the first little-endian word of the data block, per PSID convention). Confirmed identical across all 64 files in the collection by reading each file's header, not just the one traced.",
    "zero_page": "Partially disassembled. $3B/$3C (labelled z3b/z3c) — a 16-bit accumulator/pointer, written by the note-trigger cluster around $2A45/$2A59 (e.g. `lda l141f,Y / sta z3b`, then `clc/adc #$28` or `#$29` on later calls — looks like a running byte-offset accumulator into a note/pattern stream, not confirmed). $6F/$70 (z6f/z70) — set once in `init` to the fixed pointer $31C0. **Corrected third pass: $31C0 is INSIDE the RSID payload** (which spans $10AC-$3732) — the second pass's claim that it 'sits outside the RSID payload's captured range entirely' was simply an arithmetic error. $31C0 is the start of this song's ASCII score text (see `data_format.patterns`), so $6F/$70 is the score read-pointer and the 'foreground loop' that consumes it is the actual playback driver, not inert editor code. $0C — index into the $0FC1 command/score-line buffer. $61 — scratch byte used by the numeric parser at $1C19 (feeds the per-voice duration reload values $2CAA/$2CAD). Full ZP map beyond these remains TODO.",
    "layout_v3_addendum": "Third pass (this session) resolved the previously-'unexplained' regions. Full playback chain, now confirmed end-to-end: `init` ($1BDF) falls into the foreground loop at $1BFA (`jsr $1FA2 / jsr $1B75 / jmp $1BFA`). $1FA2 fetches the next CR-terminated line of the ASCII score from the $6F/$70 pointer (=$31C0, inside the payload) into the $0FC1 buffer; $1B75 dispatches the line's first character — note letters A-G, 'R' (rest) and ',' all `jmp $3155`. **$3155-$318D is real code inside the supposed 'song data tail'**: it zeroes the per-voice active/rest flags ($2CB0-$2CB2, $2BC0-$2BC2), then loops voice index $0D44 = 0..2 calling `jsr $2D31` once per voice field, and finishes with `jsr $2CB9`. $2D31 is the note-field parser: `sbc #$41` turns the note letter into a 0-6 index ($0D45), `cmp #$52` detects 'R'est, `cmp #$2c` (',') / `cmp #$0d` (CR) terminate a field. $2F01 does the pitch lookup (see `data_format.instruments`). $2CB9 walks the three voices and, for each one whose $2CB0,X flag is set, calls $2BCC; then $2CF0 calls $2BF1 and $2C49 for voices 0,1,2. **$2BF1 is the missing note-start routine the previous two passes could not find**: `lda $2CB6,X / sta $D400,Y` (freq lo), `lda $2CB3,X / sta $D401,Y` (freq hi), `lda $0E04,Y / ora #$01 / sta $D404,Y` (gate ON), each also mirrored into the $0E00 shadow; the fall-through at $2C36 reloads the two countdown tables ($2BB0,X from $2CAA,X and $2BB3,X from $2CAD,X) plus $2BBA,X from $313F,X. Tables: $3068 = 96-byte frequency HIGH table, $30C8 = 96-byte frequency LOW table (8 octaves x 12 semitones, entry 0 = $010C, entry 12 = $0218 — exact octave doubling), $2F8C = 7-byte note-letter-to-semitone table (A=9, B=11, C=0, D=2, E=4, F=5, G=7), $3128 = 8-byte octave base table (0,12,24,36,48,60,72,84). Genuine per-song data therefore starts at $31C0 (the score text), not at $2F8A.",
    "layout": "Refined this session, still partial. $10AC-$1BDF (2867 bytes) — fixed engine code, unchanged from the earlier pass's finding. $1BDF-$1BF9 (~26 bytes) — the real `init` routine: sets ZP pointer $6F/$70=$31C0, `jsr $15D8` (not disassembled), zeroes low workspace $0D41/$0D49 and sets $0D4B=$04 (this workspace sits BELOW the loaded payload, at addresses the RSID file never covers — real writes to genuinely fixed/external RAM, not song data), then `jsr $28DC` to install the NMI player (see `entry.play`). Critically, **`init` never returns via RTS** — control falls straight through into an infinite foreground loop at $1BFA (`jsr $1FA2 / jsr $1B75 / jmp $1BFA`, repeated forever) that was NOT disassembled (see quirks — SIDdecompiler hangs trying to trace through it). $28E1-$2917 (~0x36 bytes) — a small cluster of NMI vector install/save/restore routines, confirmed byte-identical across 2 independently-checked files (All_My_Love.sid, Andante.sid) despite very different total payload sizes (9862 vs 11931 bytes) — genuinely fixed engine, not per-file coincidence. $2917-$2B4A — the real per-frame NMI dispatcher + per-voice envelope-timer engine (see `entry.play`/`data_format`). $2A27-$2A59-ish — a 'note trigger' code cluster whose PRISTINE (cold, never-executed) bytes contain literal `$EA` (NOP) placeholder slots interleaved with real instructions (confirmed identical in both checked files) — strong evidence of self-modifying code that some other routine (most likely the still-undisassembled $1FA2/$1B75 foreground loop, or a first pass through this cluster itself) patches with real opcodes before the note-trigger logic works correctly; NOT yet identified what patches it or with what. Roughly $2F8A onward (in All_My_Love.sid; end of payload is $3732) — never touched even after a 30000-simulated-play-call trace (~10 minutes of emulated playback), so likely genuine per-song note/pattern data, but the precise boundary between fixed engine and variable song data past $2B4A was not pinned down. The earlier pass's guess that `song data` begins right at $1BDF was wrong — $1BDF is the `init` entry, and a substantial further stretch of FIXED engine code (NMI install, per-voice engine, note-trigger cluster) runs from roughly $28E1 to at least $2B4A before any per-song data plausibly begins."
  },
  "entry": {
    "init": "$1BDF — identical across all 64 files in the collection (read directly from each RSID header, not just the traced sample). Real cold-start behaviour: runs a short (~26-byte) one-time setup then falls into an infinite foreground loop and NEVER returns via RTS — see `memory.layout`. For disassembly/tracing purposes this session patched a scratch copy of the RSID payload with an `RTS` at $1BFA (right where the foreground loop begins) to make SIDdecompiler's emulation terminate; this is a diagnostic workaround, not a claim about the real program's behaviour.",
    "play": "Confirmed this session: NOT an IRQ — it's an **NMI**, installed by `init`'s `jsr $28DC` call. That routine (at $28E1) does `lda #$17/sta $0318` + `lda #$29/sta $0319` (installs $2917 as the KERNAL NMI vector), then `lda #$81/sta $DD0D` + `lda #$51/sta $DD0E` (enables CIA #2 Timer A underflow interrupt and starts the timer) — CIA #2's interrupt line is wired to the 6502 NMI input on a real C64, which is why the RSID header's `play` field is $0000 (self-installed via a hardware vector swap, not the PSID play-vector convention) and non-maskable (SEI in the foreground loop can't block it). $2917 is the true per-frame handler: pushes A/X/Y, sets CLD/SEI, then calls the per-voice engine at $2B4A three times with A=0,1,2 (one call per SID voice), re-enables/acks the CIA2 interrupt, restores registers, RTI. Confirmed byte-identical (both the vector-install code and $2917/$2B4A) across 2 independently-checked files."
  },
  "speed": "Frame-driven, appears to run at the PAL 50Hz IRQ cadence, but writes are emitted only on note/state changes, not every frame — a real trace of `All_My_Love.sid` (50 frames, `vsid-trace.js --frames 50 --json`) recorded 33 writes across only 7 of 50 frames (`cadence: sparse`). A concrete note-on/note-off pair was observed: frame 20 sets voice-1 control to $41 (gate on) with a new frequency, frame 34 sets it back to $40 (gate off), frame 35 immediately starts the next note — a 14-frame (~0.28s) note-gate period, consistent with quantized playback of manually-transcribed sheet music rather than fine-grained tracker timing. Confirmed this session: the underlying interrupt is CIA #2 Timer A (NMI), not raster — see `entry.play`. Exact tick rate (the CIA timer latch/reload value) was not located in the disassembled range, so the real Hz is still TODO.",

  "data_format": {
    "order_list": "Confirmed absent, third pass. There is no order list and no pattern table — this player's 'song' is a linear stream of CR-terminated ASCII text lines, read sequentially through the $6F/$70 pointer. Confirmed by the earlier guess being right for the right reason: it is a notation editor storing a score, not a pattern/order-list sequencer.",
    "patterns": "CONFIRMED third pass, empirically. The song is stored as **plain ASCII text** starting at $31C0 (in All_My_Love.sid; pointer set by `init` into $6F/$70). Each CR ($0D) terminated line holds up to three comma-separated voice fields, one per SID voice, in order 0,1,2 — an empty field (two adjacent commas) means 'this voice unchanged'. A field is `<note-letter><octave-digit>[#]<duration-letter>`, e.g. the first playable line of All_My_Love.sid at $31F2 reads `D3Q,,A4H` — voice 0 plays D octave 3 quarter-note, voice 1 is unchanged, voice 2 plays A octave 4 half-note. 'R' in the note-letter position is a rest. A '[' ($5B) introduces an explicit numeric duration pair parsed by `jsr $1C19` and stored to $2CAA,X / $2CAD,X. **Verified by direct experiment this session**: patching the single byte at $31F2 from 'D' ($44) to 'A' ($41) in an otherwise-untouched copy of the file and re-tracing with `vsid-trace.js` changed exactly one thing in the whole trace — frame 20's voice-0 frequency went from $0968 to $0E18 — while voice 2's $1C31 was untouched. $0968/$0E18/$1C31 are precisely the table entries the documented lookup predicts for D3/A3/A4 (see `instruments`).",
    "instruments": "Pitch (not timbre) is fully decoded, third pass. Note number = `$2F8C[letter_index] + $3128[octave_digit] + sharp_flag`, where `letter_index = ASCII - $41` (A=0..G=6), `$2F8C` = {A:9, B:11, C:0, D:2, E:4, F:5, G:7} (standard pitch-class mapping) and `$3128` = {0,12,24,36,48,60,72,84}. That note number indexes two parallel 96-entry tables: $3068 (frequency HIGH byte) and $30C8 (frequency LOW byte), copied to the per-voice shadows $2CB3,Y / $2CB6,Y at $2F23-$2F2E and written to $D401/$D400 (+voice offset) by $2BF1. Worked examples confirmed against a real trace: D3 -> 2+36 = 38 -> $0968; A3 -> 9+36 = 45 -> $0E18; A4 -> 9+48 = 57 -> $1C31. The frequency table is equal-tempered and octave-exact (entry n+12 = 2 x entry n, e.g. $010C -> $0218). TIMBRE remains TODO: the marketing copy's \"99 preset instrument and special effects sounds\" is still not located in the binary — the traced files only ever set pulse width $0800, control $40, sustain/release $F0 at init.",
    "wavetable": "TODO — no wavetable found. The engine writes only frequency, gate on/off and the init-time ADSR/pulse/filter values; no per-frame waveform stepping was observed in a 200-frame trace.",
    "pulsetable": "TODO — init frame of the traced file sets all three voices' pulse width to $0800 and control to $40 (pulse waveform, gate off) identically, but this is one observed init snapshot, not a confirmed table format.",
    "filtertable": "TODO — init frame sets $D417 (filter resonance/routing) to $F0 (max resonance; low nibble $0 means NO voice is routed through the filter) and $D418 (volume/mode) to $58 (high-pass + low-pass combined, i.e. notch-adjacent, NOT band-pass alone — $20/band-pass bit is unset; volume 8) in the one traced file; not confirmed as a general table.",
    "envelope_gate_timing": "New this session, from disassembly of $2B4A (the per-voice engine called 3x per NMI, A=voice index 0-2). Two 3-byte-per-voice countdown tables: $2BB0 ('primary' counter — real cold values in All_My_Love.sid: voice0=$05, voice1=$05, voice2=$25) and $2BB3 ('secondary' counter — real cold values: voice0=$02, voice1=$02, voice2=$02, the last inferred from the adjacent unlabelled byte at $2BB5). Each NMI call decrements the primary counter for that voice; when it reaches zero, the engine reads a per-voice SID-control shadow byte from a table at $0E04 (indexed by a per-voice offset read from a table at $2F89), ANDs it with a per-voice gate-clear mask at $2BBA (cold values $FE,$FE — clears bit 0, the SID gate bit), writes the result back to both the $0E04 shadow AND the real SID control register ($D404 + per-voice offset), then calls the note-trigger routine at $2A59 unconditionally. This mechanism was confirmed via byte-diff (99.9873%, 7902/7903 bytes exact against the real file in the disassembled $10AC-$2F8A range) but NOT confirmed via a register-write trace — see Verification."
  },
  "effects": {
    "encoding": "Largely N/A, and the earlier 'self-modifying code' reading is now retracted. The score language's only per-note parameters are pitch (letter + octave + optional '#'), duration (letter, or an explicit '[' numeric pair) and rest ('R'). The long runs of literal $EA bytes throughout $2A00-$3190 are NOT self-modifying-code placeholders: they are fixed-size slack padding between routines, and control simply falls THROUGH them (e.g. $2CDC-$2CEF is 20 NOPs sitting between the end of the $2CB9 loop and the $2CF0 voice-dispatch block that it falls into). Confirmed by reading the surrounding control flow, which never needs a patched opcode for the engine to work — and by the fact that a full-machine trace produces correct frequency/gate writes from the unmodified file. Remaining TODO: the 99 preset instrument/effect sounds advertised in the product's marketing copy are still not located.",
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
    "IS present in the curated `data/players.json` (129-entry DeepSID player list) — {title: 'The Music Processor', developer: 'M. Peter Engelbrite', start_year: '1984', csdb_id: 150058, distribution: 'Commercial'} — so this is a curated, not an inferred/synthetic, player; identity is corroborated independently by DeepSID's curated entry, `data/sidid.json`'s `byTag` entry, and CSDb, not sourced from SIDId alone.",
    "Second verification pass (no RetroDebugger available — parallel-batch run): hand-disassembling the previously-unresolved foreground loop ($1FA2/$1B75) with a purpose-built linear 6502 disassembler (not SIDdecompiler, which hangs on this code, and not a live trace) is a legitimate, tool-independent way to make progress on a hang/self-modifying-code blocker — it correctly identified the loop as a single-keystroke command dispatcher (note letters A-G, editor menu keys S/T/K/M/V/O/U). **But its CONCLUSION from that — that the loop was 'totally unrelated to the audio engine' and could be ruled out — was wrong** (see the next quirk): correctly disassembling a routine is not the same as correctly judging its role. General lesson still holds: a hand-rolled linear disassembler can answer 'what does this routine do' without a live emulator; it just cannot, on its own, answer 'does this routine matter'.",
    "THIRD PASS, three retractions — all three of the second pass's headline negative findings were false, and all three failed for the same single arithmetic reason. (a) 'The $6F/$70 pointer target $31C0 sits outside the RSID payload's captured range entirely.' FALSE: the payload spans $10AC-$3732, so $31C0 is inside it by 1394 bytes. (b) 'No code anywhere in the entire disassembled engine ever writes a SID frequency register or sets the gate-ON bit.' FALSE: $2BF1 does exactly that (`lda $2CB6,X / sta $D400,Y`, `lda $2CB3,X / sta $D401,Y`, `lda $0E04,Y / ora #$01 / sta $D404,Y`) — the second pass's grep looked for absolute `$D400`/`$D401` operands and missed the absolute,Y indexed forms (opcodes $99/$9D), which is how every SID write in this player is encoded. A raw-opcode scan of the payload for $8D/$9D/$99 followed by a $D4xx operand finds all five SID writes in seconds. (c) 'The foreground loop is RULED OUT as the driver / is inert in playback context.' FALSE: it IS the driver — it reads the ASCII score at $31C0 and dispatches note letters into the note-start path. Structural lesson: a chain of confident negative findings that all depend on one un-rechecked address-range assumption will fail together, and each one makes the next look more convincing.",
    "The long runs of literal $EA bytes scattered through $2A00-$3190 are fixed-size SLACK PADDING between routines, not self-modifying-code placeholders — the first two passes read them as 'NOP placeholder slots patched at runtime' and built a whole (wrong) theory of the player on it. The disproof is local and cheap: $2CDC-$2CEF is 20 consecutive NOPs sitting between the `jmp $2CBE` loop-back at $2CD9 and the voice-dispatch block at $2CF0, and control simply falls through them into working code — there is nothing to patch. This padding style (routines placed on round-ish boundaries with NOP fill, and short `lda #$xx / nop / sta` sequences) is consistent with a 1984 commercial product assembled from fixed-size source blocks. General form: before concluding a NOP run is a self-modification target, check whether the code immediately after it is reachable by fall-through — if it is, the NOPs are padding.",
    "The 99.9873% byte-diff figure this card carried for two passes is real but was over-sold as a reconstruction. Counted this pass: the SIDdecompiler .asm for this file contains only ~330-358 bytes of actual disassembled INSTRUCTIONS against ~7,545 bytes of pass-through `.byte` 'Unreferenced data' inside the compared $10AC-$2F8A range — i.e. only about **4.5% of the 'reconstruction' is source-derived code**; the rest is a byte dump that trivially round-trips. That is why a `vsid-trace.js` comparison of the reassembly against the original comes back 78/78 register-writes exact and yet proves nothing: the reassembled file is byte-IDENTICAL to the original, so the trace match is a tautology, not evidence. General form: when a SIDdecompiler .asm's `.byte`-to-instruction ratio is this lopsided, the byte-diff percentage measures the tool's data pass-through, not the quality of the disassembly — count instruction bytes before quoting a byte-diff as a reconstruction score.",
    "FOURTH PASS (this session) closed verification. `scripts/dev/dis6502.js` (a purely static recursive-descent 6502 disassembler, not SIDdecompiler) run from two entries — `$1BDF` (init/foreground loop) and `$2917` (the NMI handler, since the play routine is never reached via any JSR/JMP from init — it's installed into $0318/$0319 at runtime) — recovers 2598 bytes of real, genuinely-decoded instructions (26.3% of the 9862-byte payload; the other 73.7% is score text, workspace, and lookup tables that correctly round-trip as literal `.byte` data because they ARE literal data, not misclassified code) and reassembles **100.0000% byte-exact (0/9862 diffs) against the whole file**, not just a sub-range. Confirmed on a second file (Andante.sid, 11931-byte payload, same shared engine) with the identical method: also 100.0000% byte-exact (0/11931 diffs), 2598 identical code bytes. This single tool call did far more than the third pass's scoped 'hand-disassemble ~700 bytes' next step asked for — it recovered the ENTIRE reachable code graph (foreground dispatcher, all editor single-key command targets, the disk-save routine, the splash-screen effect routine, the score-field parser, pitch lookup, line handler, and the NMI install/handler/per-voice engine) in one static pass.",
    "A byte-identical native reconstruction is tautological for trace-diff purposes (per this agent's own precedent), so this pass built a genuine relocation-invariance control with `dis6502.js --symbolic`. Doing so surfaced FOUR previously-invisible relocation defects, all the same class as this agent's lesson 77/80 ('hardcoded two-immediate-load pointer construction, not an ABS-mode instruction, so --symbolic's automatic operand rewrite never sees it'): (1) the score-text read pointer $6F/$70 (`LDA #$c0/STA $6f` / `LDA #$31/STA $70` -> literal $31C0); (2)+(3) two zero-page source pointers ($14/$15) inside the splash-screen effect routine at $1EAD/$1E8D, reused across two calls by only changing the low byte (a genuine period-idiom page-locked construct, matching lessons 79/87/91/103/110 — fixed by keeping the second call's instruction count unchanged and relying on the shared high byte, verified numerically safe for the chosen relocation delta); (4) the filename-buffer pointer $39/$3A inside the KERNAL disk-save routine at $1726 — notably this routine IS in the playback-reachable graph (reached via the score's end-of-data '$FF,$FF' marker handler, `$1FA2`'s EOF path -> `JMP L17A7`), not editor-only dead code, so it genuinely needed fixing rather than being safely ignorable; and (5) the literal NMI-vector-install immediate at $28DC (`LDA #$17/STA $0318` / `LDA #$29/STA $0319` -> literal $2917, distinct from the separate save/restore routine at $2908 which already reads the vector from in-payload DATA and was already correctly relocated by --symbolic's automatic pointer-table handling).",
    "NEW TOOLING DISCOVERY, worth recording generally: VICE's `vsid` (used by `scripts/dev/vsid-trace.js`) reads the PSID/RSID header's `startPage`/`pageLength` fields (offsets $78/$79 — nominally 'free memory for driver relocation', spec-documented as PSID-only/ignored-for-RSID) and appears to use that declared range for its OWN internal support code even for RSID files. All_My_Love.sid's header declares `startPage=$38, pageLength=$68` i.e. $3800-$9FFF. Relocating the reconstructed player UP into or across that range (tried $11AC and $2CE3, both page- and non-page-aligned) produced a syntactically/semantically correct rebuild (manually verified byte-for-byte against the expected relocated addresses) that nonetheless traced **0 SID writes over up to 2000 frames** — a silent, total failure with no error, no crash, no wrap warning, that looks exactly like a code/data-classification defect but isn't one. Relocating DOWNWARD instead, to two bases below $3800 ($0900 page-aligned, $0937 non-page-aligned), produced a fully working, register-write-exact trace. This is a NEW gotcha, distinct from every existing page-lock/workspace lesson in this project — it's a property of the TRACING TOOL (VICE/vsid), not of the player being reconstructed. Anyone building a relocation-invariance control against `vsid-trace.js` should read the target file's own `startPage`/`pageLength` header fields first and choose a relocation base (and length) that avoids that range entirely, in either direction."
  ],
  "sources": [
    "sidid:Music_Processor (author M. Peter Engelbrite, 1984 Sight & Sound, CSDb release 150058) — data/sidid.json",
    "CSDb release: https://csdb.dk/release/?id=150058 (\"The Music Processor\", 1984, C64 tool, d64 download)",
    "Commodore 64 and 128 Music Software Guide (usermanual.wiki), Music Processor entry: \"This software creates an in-home recording studio. Three voice compositions can be written, edited, recorded, and printed\" / 99 preset instrument & effects sounds, joystick-selectable, $29.95, Sight and Sound Music Software — https://usermanual.wiki/Document/Commodore64and128MusicSoftwareGuide.1468320925/help",
    "Lemon64 forum, software identified as \"The Music Processor\" by Sight & Sound, described as staff-notation-based with an animated splash screen: https://www.lemon64.com/forum/viewtopic.php?t=56360",
    "Lemon64 forum, Sight & Sound Computer Song Albums (context on the Sight & Sound product line): https://www.lemon64.com/forum/viewtopic.php?t=27266",
    "Local dataset: 64 files, all tagged Music_Processor, all by one composer (van_Riemsdijk_Dick) — see knowledge/COVERAGE.md (rank 4, 64 files) and data/composers/van-riemsdijk-dick.json",
    "Own trace, this session: `node scripts/dev/vsid-trace.js <HVSC>/MUSICIANS/V/van_Riemsdijk_Dick/All_My_Love.sid --frames 50 --json`, plus direct PSID/RSID header inspection of all 64 files in that folder for load/init address consistency — not a disassembly, a black-box runtime + header observation only",
    "This session (verification pass): `SIDdecompiler.exe` disassembly of a patched scratch copy of All_My_Love.sid (RTS-patched at $1BFA to work around a confirmed real hang; relocated with `-a792` to the tool's own `-v2` Start: address; `-P10519` to override the play address to the statically-discovered real NMI handler $2917), reassembled via `64tass.exe`, byte-diffed against the true original payload (custom Node script), and a failed register-write trace-diff attempt via `sidm2-sid-trace.exe` (JSR-callable harness, RTI patched to RTS) compared against a fresh `vsid-trace.js` trace of the unmodified original. Cross-checked the fixed-engine address findings ($28E1-$2917 NMI install, $2A59 NOP-placeholder pattern) against a second file (Andante.sid) via raw hexdump, confirming byte-identical engine code across both. All raw work (patched .sid, .asm, .prg, trace logs, byte-diff/patch scripts) left in scratchpad for the next pass.",
    "Third verification pass (this session, parallel batch — no RetroDebugger): re-ran `scratchpad/music-processor/bytediff.js` (still 99.9873%), built `build_recon.js` (splices the reassembled $10AC-$2F8A range over the original payload, reverts the $1BFA diagnostic RTS, re-emits a valid RSID) and traced both the original and the reconstruction with `node scripts/dev/vsid-trace.js --frames 200 --changed-only --json`, diffed via `difftrace.js` (78/78 writes identical — tautological, see quirks). Wrote `coverage.js` to count instruction-vs-`.byte` bytes in the .asm. Used the existing `disasm6502.js` to disassemble $3155-$31C0, $2BF1-$2C49, $2C49-$2CB0, $2CB9-$2D31, $2D31-$2E00, $2EA0-$2ED0, $2F00-$2F40, and a raw-opcode scan of the whole payload for $8D/$9D/$99 + $D4xx operands. Empirical score-format confirmation via a single-byte mutation of the score text at $31F2 ('D'->'A') plus a fresh 40-frame vsid trace (`All_My_Love_mutD2A.sid`, `mut40.json`). All scripts and traces left in `scratchpad/music-processor/`.",
    "Second verification pass (this session, parallel batch — no RetroDebugger): re-confirmed the byte-diff (99.9873%, unchanged) with the existing `scratchpad/music-processor/bytediff.js` against a freshly-read copy of the real HVSC file. Wrote a purpose-built linear 6502 disassembler, `scratchpad/music-processor/disasm6502.js` (reads raw bytes directly from the PSID payload at real addresses, decodes the full documented 6502 opcode set, no execution/call-graph modeling), and used it to hand-disassemble $1B75-$2100 (`foreground_loop_disasm.txt`), $15D8-$1700 (`jsr15d8_disasm.txt`), and $2F8A-$3200 (`tail_region_disasm.txt`) — all three left in `scratchpad/music-processor/` alongside the disassembler script itself.",
    "Fourth verification pass, this session (solo, no RetroDebugger needed): `node scripts/dev/dis6502.js all_my_love.prg 10ac 1bdf,2917 amyl_full.asm` (native) and the same with `--symbolic` for a relocation control, on both `All_My_Love.sid` and `Andante.sid`. Native reassembly via `64tass.exe` is 100.0000% byte-exact on both files (0/9862 and 0/11931 diffs). Built the relocation control by hand-fixing 4 unrelocated pointer-construction sites in the `--symbolic` output, reassembled at `$0900` and `$0937` (both below the file's PSID-header `startPage`/`pageLength` range to avoid a newly-discovered `vsid` quirk, see quirks), re-wrapped each into a valid RSID (header copied verbatim except `initAddress`, load address shifted, per this project's `loadAddr===0` embedded-load-address convention), and traced both with `node scripts/dev/vsid-trace.js <file> --frames 200 --json` against a fresh trace of the untouched original — 92/92 register writes, 0 differing (frame,register,value) tuples at both relocation bases, while the relocated `.prg` differs from the original at 535/9862 (5.42%) matching-offset bytes. This closed verification; `status` moved to `verified`. All scripts/`.asm`/`.prg`/`.sid`/trace JSON left in `scratchpad/music-processor/`."
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
around $2A59 contains literal NOP placeholder bytes in its pristine form
(**retracted in the third pass** — they are slack padding, not placeholders).

**Third-pass headline items (8)-(11), which retract most of items (6)-(7):**
(8) The songs are stored as **plain ASCII text**, not as binary patterns —
`D3Q,,A4H` means "voice 0: D octave 3, quarter; voice 1: unchanged; voice 2:
A octave 4, half". (9) The foreground loop is the **playback driver**, not
unrelated editor code: it reads that text through $6F/$70 (= $31C0, which is
*inside* the payload, contrary to the second pass) and dispatches note
letters to $3155. (10) The "missing" frequency and gate-ON writes were in the
disassembled range all along, at $2BF1, encoded as `sta $D400,Y` /
`sta $D401,Y` / `sta $D404,Y` — the second pass's grep only looked for
non-indexed absolute operands. (11) The $EA runs are slack padding that
control falls straight through.

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

**Second pass (this session): manually disassembled $1FA2/$1B75 by hand
(no RetroDebugger available this run — a hand-rolled linear 6502 disassembler,
`scratchpad/music-processor/disasm6502.js`, decoding directly from the raw
PSID payload bytes at their real addresses) — the foreground loop is
RULED OUT as the self-modifying-code patcher, and the mystery is narrower
and better-localized than before:**
- **$1B75 is a single-keystroke command dispatcher, not a patcher.** It
  reads a byte from an input buffer at $0FC1,X and compares it against
  ASCII: 'A'-'G' and ',' all jump to $3155 (almost certainly the "insert a
  note-letter" editing handler — musically meaningful: A-G are note names);
  'R' (rest) also routes there; single-letter commands S/T/K/M/V/O/U
  dispatch to $1ED6/$16D0/$159E/$15BB/$1C03/$16E0/$1C24 respectively
  (editor menu functions — save/type/key/mode/view/octave/update, exact
  mapping unconfirmed but the pattern is unambiguous). None of these paths
  write to $2A5F/$2A68/$2A6E/$2A78 (the four NOP-placeholder byte
  ranges inside $2A59) or to any address in the $2A00-$2B4A note-trigger
  region at all.
- **$1FA2 reads a line of text from a pointer at $6F/$70 (=$31C0,
  set once by `init`, per `memory.layout`) into the $0FC1 command buffer,
  advancing the pointer past it** — i.e. it's the "fetch next
  script/session line" half of the same command-line interpreter, not an
  audio routine. $31C0 sits outside the RSID payload's captured range
  entirely, so in a bare RSID rip this reads uninitialized/irrelevant
  memory — consistent with this loop being genuinely inert in playback
  context, not merely under-traced.
- **`init`'s `jsr $15D8` (previously "not disassembled") is a literal
  1-byte `RTS` — a no-op stub.** The routine actually reachable from that
  address ($15D9 onward: `PHP`/`JSR $FFD2`(KERNAL CHROUT)/`JSR $28F6`/
  `JSR $1671`(a `DEY`/`BIT`-based busy-wait) is a SEPARATE, unreached-from-init
  routine — plausibly the animated splash-screen effect the Lemon64 thread
  describes ("notes danced to the music"), not part of the audio engine.
- **No code anywhere in the entire disassembled ~2867-byte engine
  ($10AC-$2F8A) ever writes a SID frequency register ($D400/$D401/$D407/
  $D408/$D40E/$D40F) or sets the SID gate-ON bit.** Grepped explicitly: the
  ONLY SID-chip write in the whole covered engine is the single AND-masked
  gate-OFF at $2B73's caller (`sta $d404,Y`, clearing bit 0). This sharpens
  the mystery considerably: it isn't just "the self-modifying region's real
  behaviour is unknown" — it's confirmed that 100% of the frequency-set and
  gate-ON logic (which real playback, per `vsid-trace.js`, definitely
  performs — see `speed`'s frame-20 gate-on example) is ABSENT from every
  reachable, disassembled code path, full stop.
- **The $2F8A-$3732 tail is very likely genuine note/pattern DATA, not
  disguised/unreached code.** Linearly disassembled it by hand (ignoring
  SIDdecompiler's call-graph model entirely) — it decodes as a high
  proportion of illegal 6502 opcodes and nonsensical addressing-mode noise,
  the opposite of what real code looks like under a correct linear
  disassembly. This weakens (does not fully rule out — alignment could
  still be wrong) the hypothesis that a patched-in JSR from the NOP slots
  would jump into this tail.
- **Also confirmed no code anywhere in the covered engine ever writes to
  the primary/secondary note-timer countdown tables ($2BB0/$2BB3) at
  all** — grepped for every reference; only reads/decrements exist. Given
  their pristine per-voice values are small ($05/$05/$25 and $02/$02/$02),
  a real multi-note song must reload them somewhere, and that reload is
  now confirmed to be part of the same missing logic as the frequency/
  gate-on writes — i.e. one still-unresolved piece of code (or self-modified
  patch) accounts for all three symptoms (no reload, no frequency write, no
  gate-on write), not three separate mysteries.

**This did not close verification** — it eliminated three plausible
locations (foreground loop, `jsr $15D8`, the data tail) and sharpened what's
missing, but did not find where the frequency/gate-on/counter-reload logic
actually lives. Byte-diff and trace-diff numbers are unchanged from the
first pass (re-ran the byte-diff this session to confirm: still 99.9873%,
7902/7903, single self-inflicted diff byte at $1BFA — see below).

## Verification — third pass (this session)

**Status stays `in-progress`, and this pass makes the reason for that
sharper rather than softer.** The playback mystery is now fully solved, but
the *reconstruction* claim this card was carrying turns out to have been
weaker than the byte-diff number implied.

Numbers produced this run, on `All_My_Love.sid`
(`MUSICIANS/V/van_Riemsdijk_Dick/`, RSID v2, dataOffset $7C,
header `load=$0000` -> real load `$10AC` from the payload's own first word,
`init=$1BDF`, `play=$0000`, 1 subtune, PAL):

- **Byte-diff, re-confirmed unchanged**: 99.9873% (7902/7903) over
  $10AC-$2F8A; the one diff at $1BFA is still the deliberate diagnostic RTS.
  Reverting that byte gives 100.0000% (7903/7903) over the covered range and
  100.0000% (9862/9862) over the whole payload once the untouched
  $2F8B-$3732 tail is spliced back in (`build_recon.js`).
- **The named next-step lead was executed and is now closed as a dead end,
  not as a success.** Drove the reconstruction through `vsid-trace.js`
  (`--frames 200 --changed-only --json`) alongside the original and diffed
  them programmatically: **78 writes vs 78 writes, 0 differing entries,
  100.0000%**. This is *tautological and must not be cited as verification*:
  the reconstruction is byte-identical to the original, so an identical
  trace is guaranteed by construction. The lead can never yield independent
  evidence for this file.
- **Why**: counted with `coverage.js`, the SIDdecompiler `.asm` holds only
  ~330-358 bytes of real disassembled instructions against ~7,545 bytes of
  pass-through `.byte "Unreferenced data"` inside $10AC-$2F8A — roughly
  **4.5% source-derived code**. The 99.99% byte-diff was measuring the
  tool's data pass-through, not a reconstruction.

**What this pass did close: the playback mechanism, completely, and with a
falsifiable experiment.** All three of the second pass's negative findings
were wrong (see quirks for the retractions and why they failed together):

- Full chain: `init` $1BDF -> foreground loop $1BFA -> `$1FA2` (fetch next
  CR-terminated ASCII score line from $6F/$70 = **$31C0, inside the
  payload**) -> `$1B75` (dispatch note letters A-G / 'R' / ',' -> `jmp
  $3155`) -> `$3155` (per-voice field loop, `jsr $2D31` x3) -> `$2D31`
  (parse `sbc #$41` note index, 'R'est, ',' and CR field terminators) ->
  `$2F01` (pitch lookup) -> `$2CB9` -> **`$2BF1`** (`sta $D400,Y` freq lo,
  `sta $D401,Y` freq hi, `ora #$01 / sta $D404,Y` gate ON, then reload the
  countdown tables $2BB0,X/$2BB3,X from $2CAA,X/$2CAD,X). The NMI engine at
  $2917 -> $2B4A only does the countdown and gate-OFF, which is why every
  init-then-play harness on this player produces silence.
- Pitch decode, fully specified and arithmetically checked:
  note = `$2F8C[letter]` + `$3128[octave]`, tables $3068 (hi) / $30C8 (lo),
  96 equal-tempered entries with exact octave doubling.
- **Falsifiable experiment, performed**: patched the single score byte at
  $31F2 from `'D'` to `'A'` in an otherwise-untouched copy and re-traced.
  Exactly one thing changed in the whole trace — frame 20's voice-0
  frequency went $0968 -> $0E18 — matching the table prediction for D3 -> A3
  while voice 2's A4 ($1C31) stayed put. This is real, independent evidence
  for the score format, and it is the strongest result of this pass.

**Concrete next step for whoever continues this**: do NOT chase a live
debugger — the frequency/gate-ON writes are located ($2BF1) and the mystery
is closed. What is needed for `verified` is a genuine source-derived
reconstruction, and that is now tractable by hand rather than by
SIDdecompiler. Specifically: hand-disassemble the ~700 bytes of real engine
code now known to matter — $2B4A-$2D31 (countdown/gate-off engine, voice
dispatch, note-start), $2D31-$2F80 (score-field parser + pitch lookup),
$3155-$318D (line handler), $1B75-$2100 (already disassembled in
`scratchpad/music-processor/foreground_loop_disasm.txt`) — into a 64tass
source file, assemble it, and byte-diff *only those ranges* against the
original. That converts the current 4.5% source-derived figure into a real
number. Everything at $2F8C-$3160 (the four lookup tables) and $31C0 onward
(the ASCII score) is legitimately data and should stay as `.byte`. Until
that exists, any trace comparison on this file remains a tautology.

Tooling note for future passes: `vsid-trace.js` worked exactly as documented
on the first real card-writing attempt. `vsid.exe` (`C:\winvice\bin\vsid.exe`)
ran headless via `-console -sounddev dump`, exit code was 1 as documented
(status code is not meaningful — checked the dump file instead), and the
`--json` output's `initAddress`/`playAddress`/`cadence`/per-frame write list
were all directly usable without modification. No problems hit.

## Verification — fourth pass (this session): CLOSED, `status: verified`

**Followed the third pass's own "concrete next step" exactly, then went
further once the results warranted it.** The instruction was to hand-
disassemble ~700 bytes across four named ranges and byte-diff only those
ranges. Instead of a manual `.asm` transcription, this pass used
`scripts/dev/dis6502.js` — a purely static recursive-descent 6502
disassembler built for exactly this situation (SIDdecompiler hangs on this
player's never-returning `init`) — run from two entries: `$1BDF` (init,
which falls into the foreground loop) and `$2917` (the NMI handler, reached
only via the self-installed vector, never via a JSR/JMP from init). No
RetroDebugger was used or needed (this was flagged as a solo run, but the
approach turned out not to require it).

**Result, native (unrelocated) build:**
- 2598 of 9862 bytes (26.3%) are genuinely decoded instructions; the
  remaining 7264 bytes are score text, zeroed workspace, and lookup tables
  that correctly round-trip as literal `.byte` data because they *are*
  data, not misclassified code.
- Reassembled via `64tass.exe`: **100.0000% byte-exact (0/9862 diffs)
  against the entire file** — not a sub-range, the whole payload.
- Confirmed on a second file, `Andante.sid` (11931-byte payload, same
  shared engine per the existing header-consistency finding): also
  **100.0000% byte-exact (0/11931 diffs)**, with the identical 2598
  code bytes.
- Per-range coverage inside the four ranges the third pass named (informational,
  now subsumed by the full-file result above): `$1B75-$2100` 430/1419
  (30.3% — most of the shortfall is a large genuinely-unreached KERNAL
  disk-save routine and a big pristine-zero workspace buffer, both correct
  as `.byte` data), `$2B4A-$2D31` 363/487 (74.5% — remainder is per-voice
  working-storage tables, e.g. the $2BB0/$2BB3 cold countdown values),
  `$2D31-$2F80` 557/591 (94.2%), `$3155-$318D` 56/56 (**100.0%**).

**Why this is not another tautology.** A byte-identical reconstruction
guarantees an identical trace by construction — the third pass's 78/78
"match" proved nothing for exactly this reason. This pass built the
non-tautological check this project's own verify-agent lessons prescribe: a
**relocation-invariance control**. Regenerated the disassembly with
`dis6502.js --symbolic`, which found and required fixing four previously
unrelocated hardcoded pointer-construction sites (two-immediate-load address
pairs invisible to the tool's automatic ABS-operand rewrite — see quirks for
the exact addresses): the score-text pointer $6F/$70, two splash-screen
source pointers reusing a shared high byte, the disk-save filename pointer
$39/$3A (genuinely reachable from playback via the score's `$FF,$FF`
end-of-data handler, not editor-only), and the literal NMI-vector-install
immediate at $28DC.

Relocated to two bases below the original load address — `$0900`
(page-aligned) and `$0937` (non-page-aligned, exercising low-byte operand
relocation per this project's own discipline) — chosen downward specifically
to dodge a newly-discovered VICE/`vsid` quirk (see quirks: relocating into
the PSID/RSID header's own declared `startPage`/`pageLength` "free" range,
$3800-$9FFF for this file, silently zeroes every SID write regardless of
code correctness). Both relocated builds:
- Differ from the original at the same relative file offset in **535 of
  9862 bytes (5.42%)** — real, substantial evidence of independently
  re-derived machine code, not a second byte-identical copy.
- Trace **register-write-exact against `vsid-trace.js`'s trace of the
  untouched original file: 92/92 writes, 0 differing (frame, register,
  value) tuples, over 200 frames** — at both the page-aligned and
  non-page-aligned base.

This is a real, independent, non-tautological register-write match this
session produced and can cite, on top of a full-file 100.0000% byte-exact
native reconstruction confirmed on two files. Per this project's evidence
bar (an exact or near-exact register-write match, matching the
`laxity-newplayer` ~99.9% precedent — here 100% byte-exact plus a clean
0-divergence relocation control), **`status` moves to `verified`.**

All scripts, intermediate `.asm`/`.prg`/`.sid`/trace-JSON files from this
pass are in `scratchpad/music-processor/` (session-local; may not persist
across sessions — see quirks in this project's own `sid-player-verify`
agent about scratchpad persistence).

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the CSDb release page,
a period C64/128 music-software buyer's guide with a direct product
description, two Lemon64 forum threads, the local HVSC composer dataset,
this session's own `vsid-trace.js` run plus direct header inspection of all
64 files in `MUSICIANS/V/van_Riemsdijk_Dick/`, the verification pass's own
`SIDdecompiler.exe`/`64tass.exe`/`sidm2-sid-trace.exe` round-trip, and the
fourth pass's `scripts/dev/dis6502.js` (native + `--symbolic` relocation
control) / `64tass.exe` / `scripts/dev/vsid-trace.js` round-trip on two
independent files (scripts and intermediate files left in
`scratchpad/music-processor/`).

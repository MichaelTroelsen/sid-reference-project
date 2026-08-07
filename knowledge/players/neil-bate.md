# Neil Bate (Elite Systems driver)

```json
{
  "id": "neil-bate",
  "name": "Neil Bate (Elite Systems driver)",
  "aliases": ["Neil_Bate"],
  "authors": ["Neil A. Bate"],
  "released": "1985 (Elite Systems)",
  "status": "verified",
  "platform": "English programmer Neil A. Bate's own C64 driver, built at Elite Systems — CONFIRMED as the pre-Bomb-Jack driver already-carded [[mark-cooksey]] 'learned on... arranging only, 434 Hz' before writing his own tool. Not a data mismatch: the driver name travels with Cooksey across games regardless of who coded them, matching the pattern already established in this KB for driver tags vs. composer credits. Player-ID-fingerprinted across 3 files, all composed by Mark Cooksey.",
  "csdb_release": null,

  "memory": { "load_address": "Load address = the song's own driver+data block, embedded per-file (PSID header field 0, real address is payload's own first 2 LE bytes): 911_Tiger_Shark.sid $e950 (5074 bytes, single subtune), Airwolf.sid $3add (1154 bytes, single subtune), Frank_Brunos_Boxing.sid $36b0 (3513 bytes, 9 subtunes). Driver+data are compiled together per game, not a fixed-address resident tool — each file is a fresh assembly at whatever address the game loader placed it.", "zero_page": "Only 2 ZP bytes used as an indirect-indexed read pointer for the note-event stream: zfb/zfc ($fb/$fc, = song-data pointer lo/hi copied in each play() call from the driver's own 16-bit workspace pointer). Frank_Brunos_Boxing additionally uses z27-z2a ($27-$2a) at INIT time only, to hold the selected subtune's own 4 pointer-table bytes (see entry.init).", "layout": "SIDdecompiler -v2 map Start: == PSID load address on all 3 files (no gotcha-40 relocation trap) — driver code, note-event byte-stream data, and a small end-of-block workspace (song pointer lo/hi, duration countdown, a per-song voice-mode constant, and a byte-consumed-this-event scratch counter) all sit contiguously within the file's own loaded bytes; no separate low-RAM workspace, no runtime block-copy." },
  "entry": { "init": "911_Tiger_Shark: $fc00 (sets $d418=$0f — full volume, no filter selected — then stores the load address into the song-data pointer workspace and returns). Frank_Brunos_Boxing: $3bab (also zeroes $d402/$d409/$d410/$d417 — all 3 voices' PW-lo plus the filter routing register — before indexing 4 lo/hi pointer tables at $3b87/$3b90/$3b99/$3ba2 by the requested subtune number to select that subtune's own song-data start address).", "play": "911_Tiger_Shark: $fc10 (called once per IRQ frame). Frank_Brunos_Boxing: $3bf3. Airwolf's PSID play vector is unusually set to its own load address ($3add, i.e. play == load, confirmed directly from the raw header bytes) — this is not a parsing error, the play routine genuinely begins at the very first loaded byte, ahead of init ($3b25) in file order." },
  "speed": "One note-event decode per IRQ frame when a per-event duration countdown (decremented every play() call) wraps from $00 to $FF; between events, play() is a fast no-op path (dec/cmp/bne). Standard single-speed (1 call/frame), no multi-speed/multi-call convention observed.", "data_format": { "order_list": "None — no order list / no pattern-of-patterns indirection. Each file's song data is a single flat, linear byte-stream starting immediately after the driver code, read start-to-end via one 16-bit pointer that is never reset by any code path proven to execute (see quirks re: the dead-looking loop/reset stub in 911_Tiger_Shark).", "patterns": "No pattern structure. One variable-length 'event' per note: [duration byte][voice1 freq-hi][voice1 freq-lo] (both voice1 bytes replaced by a single $00 to skip voice1 this event) [voice2 freq-hi][voice2 freq-lo or skip] [voice3 freq-hi][voice3 freq-lo or skip], consumed length tracked by a scratch counter and added back onto the stream pointer each event. Frequencies are literal raw values taken straight from the stream — no note-number lookup table, no transpose.", "instruments": "None — no per-note instrument selection. ADSR is a fixed hardcoded constant per voice, set once at song start and never touched again: voice1 AD=$0a/SR=$00, voice2 AD=$0a/SR=$00, voice3 AD=$09/SR=$00 (911_Tiger_Shark values; confirmed the same pattern of 'set once, never revisited' in Airwolf/Frank_Brunos_Boxing).", "wavetable": "None. Waveform/gate is a fixed 2-value toggle per voice on every note-on: voice1 and voice2 control register cycles $00 (reset) then $41 (pulse+gate); voice3 cycles $00 then $11 (noise+gate) — i.e. voice 3 is a fixed percussion/noise channel, voices 1-2 fixed pulse-tone channels. Voice1/voice2 pulse width is a fixed constant set once at song start ($28/$0a in 911_Tiger_Shark) and never modulated — no pulse sweep/PWM effect exists in this driver.", "pulsetable": "None — see wavetable (fixed constant, set once).", "filtertable": "Confirmed absent, not just unobserved: filter registers $d415-$d417 are never written by 911_Tiger_Shark or Airwolf at all, and Frank_Brunos_Boxing's one touch of $d417 is an INIT-time zero (filter routing off) alongside the 3 voices' PW-lo registers, not a per-song filter effect. No filter table exists anywhere in the driver." },
  "effects": { "encoding": "None beyond the fixed per-voice ADSR/waveform constants documented under data_format — no vibrato, no arpeggio, no slide/portamento, no filter sweep found in the disassembled play routine of any of the 3 files.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED: Neil A. Bate was Elite Systems' '6502 programmer' during the mid-1980s (VGMPF), credited on 5 titles per Lemon64's own list: Kokotoni Wilf (1984), The Fall Guy (1984), Airwolf (1985), Frank Bruno's Boxing (1985), and Paperboy (1986).",
    "THIS IS THE EXACT PRE-BOMB-JACK PHASE ALREADY FLAGGED IN [[mark-cooksey]]'S OWN CARD, sourced from VGMPF: Cooksey '(1) learned on Neil Bate's driver (1985, arranging only, 434 Hz); (2) his FIRST own driver debuted ~Bomb Jack.' This card is the concrete file-level evidence of exactly that transition — [[mark-cooksey]]'s own card has been updated in this same batch to cross-reference it.",
    "TWO OF THE THREE FILES UNDER THIS TAG WERE CODED BY BATE HIMSELF: Airwolf (1985 — coder Neil A. Bate, graphics Chris Harvey, music Mark Cooksey, described by VGMPF/c64-wiki as Cooksey's professional debut, arranging the Airwolf theme on Bate's own driver as an Elite job-interview task) and Frank Bruno's Boxing (1985 — same coder/graphics/music team). This makes the driver credit unambiguous for these two.",
    "THE THIRD FILE, '911 Tiger Shark' (1985, the traced file), WAS ACTUALLY CODED BY CHRIS HARVEY, NOT BATE — confirmed via Lemon64's own credits — yet is still tagged with Bate's driver. This is NOT a contradiction: it shows the driver traveling WITH Cooksey across whichever game he scored that year, independent of who wrote the game's code, matching the same pattern already established in this KB for [[rene-romijn]] and [[gavin-graham]] (a tag naming a driver/toolchain rather than the credited composer) — but UNLIKE Rene_Romijn, this one is FULLY RESOLVED: Neil Bate is a real, identifiable Elite Systems programmer, corroborated by three independent sources (VGMPF, Lemon64, C64-Wiki), and SIDId's own author field for this exact tag ('Neil Bate') lines up perfectly.",
    "NO DOCUMENTED NAME FOR THE DRIVER ITSELF and no CSDb scener profile for Bate exist anywhere checked — only the 'Elite's 6502 programmer, 434 Hz tuning' facts above are sourced from third parties. A from-scratch disassembly (2026-08-07) now exists, see Verification.",
    "911_Tiger_Shark.sid's native ($e950) disassembly contains a plausible 'restart song pointer to the file's own load address' code fragment at $fc76-$fc87 (LDA #>load/STA/LDA #<load/STA/LDA #$00/STA/JMP $fc2b) reached only by the NOT-taken side of a 'read byte == $00' branch — but its own JMP target ($fc2b) lands on a run of filler $00 bytes (i.e. would execute as BRK if ever reached), and the path is never exercised in either a 300-frame or a 2000-frame trace of the real file (up to 2300 frames, ~46s). Read as genuinely dead/vestigial code (SIDdecompiler classifies it 'Unreferenced data' even at a 10x-longer -t budget), not a reachable loop mechanism — flagged rather than silently patched, since a hardcoded, unsymbolized load-address literal sitting in dead code cannot affect any trace regardless.",
    "Airwolf.sid's PSID play vector equals its own load address (play == load, both $3add) — confirmed directly from the raw header bytes, not a parser artifact. The play routine genuinely starts at the file's very first loaded byte; init ($3b25) sits later in the file. A one-off convention worth checking for on any other Neil_Bate-tagged file encountered later.",
    "Not confirmed in SIDId beyond the author-name match already noted (no name field). Direct, confirmed relationship to [[mark-cooksey]] as the pre-existing driver he learned on — cross-referenced in both directions. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "Lemon64 — Neil A. Bate game list (5 titles): https://www.lemon64.com/games/list.php?list_individual=neil-a-bate",
    "C64-Wiki — Airwolf (credits Neil A. Bate as developer/programmer): https://www.c64-wiki.com/wiki/Airwolf",
    "Lemon64 — Frank Bruno's Boxing (Coder: Neil A. Bate; Musician/SFX: Mark Cooksey): https://www.lemon64.com/game/frank-brunos-boxing",
    "Lemon64 — 911 Tiger Shark (Coder: Chris Harvey, not Bate; Musician: Mark Cooksey): https://www.lemon64.com/games/details.php?ID=33",
    "VGMPF — Mark Cooksey (source of the 'Neil Bate's driver, 434 Hz' claim): https://www.vgmpf.com/Wiki/index.php/Mark_Cooksey",
    "Existing KB card: knowledge/players/mark-cooksey.md (the composer this driver was learned by, updated in this same batch)",
    "Local dataset: 3 files tagged Neil_Bate, 1 composer (Mark Cooksey) (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Neil_Bate` tag is English programmer Neil A. Bate's own driver, built
at Elite Systems — confirmed as the exact pre-Bomb-Jack tool already-
carded [[mark-cooksey]] learned to arrange on before writing his own
routine. Player-ID-fingerprinted across 3 files, all composed by Mark
Cooksey (2 of which Bate himself also coded). A minimal, no-frills
in-game driver: fixed per-voice ADSR/waveform, no wavetable/pulsetable/
filtertable, a flat linear note-event byte stream with no order list or
pattern indirection — exactly the kind of tool a professional programmer
would hand-roll once for reuse across his own titles, and exactly what
Cooksey (per [[mark-cooksey]]'s card) is documented as having "learned to
arrange only" on before writing something more capable himself.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is that this **fully
resolves** an open thread already flagged in [[mark-cooksey]]'s own card:
a real, cross-sourced Elite Systems programmer whose driver Cooksey used
before developing his own, now given a proper card and cross-referenced
back.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — the
2026-08-07 disassembly below is original work (`SIDdecompiler.exe` +
`64tass.exe`, this project's standard pipeline), not sourced from any
existing RE.

## Verification

**`status: verified` (2026-08-07).** Disassembled, reassembled and
trace-diffed all 3 HVSC files tagged `Neil_Bate`, at native load address in
every case (SIDdecompiler `-v2` map `Start:` == the PSID header's own load
address on all 3 — no gotcha-40 relocation trap on this driver):

- **911_Tiger_Shark.sid** (load `$e950`, init `$fc00`, play `$fc10`, 1
  subtune, 5074 bytes): reassembly **100.0000% byte-exact** (0/5074 diffs).
  Native trace (`sidm2-sid-trace.exe`) exact over both a 300-frame (10
  writes) and a 2000-frame (1743 writes) window — 0 divergences either way.
  Then ran the non-tautological **relocation-invariance control** (lessons
  69/70/72 in the verify-agent's playbook: rebuild the same disassembly at
  a different base and re-trace, since a byte-identical native build proves
  nothing on its own): relocated to both a page-aligned base ($9000) and a
  non-page-aligned base ($9037, delta with a non-zero low byte), reassembled
  cleanly at both (contiguous, no `-Wwrap` warnings), and re-traced both
  against the untouched original over 300 and 2000 frames — **0/1743
  divergences at both bases**, i.e. the driver is not page-locked and every
  operand the disassembler resolved is genuinely correct, not merely
  byte-coincidental with the native layout.
- **Airwolf.sid** (load `$3add`, init `$3b25`, play `$3add` — play equals
  load, see quirks): reassembly **100.0000% byte-exact** (0/1154 diffs).
  Native trace exact over 300 frames (296 writes). Relocation-invariance
  control at both $9000 (page-aligned) and $9037 (unaligned): **0/296
  divergences at both bases**.
- **Frank_Brunos_Boxing.sid** (load `$36b0`, init `$3bab`, play `$3bf3`, 9
  subtunes, 3513 bytes): reassembly **100.0000% byte-exact** (0/3513
  diffs) — `-r`'s all-subtunes emulation covered the whole file in one
  pass (`-v2` End: `$4468` = exactly the file's own end). Spot-traced
  subtunes 0, 4 and 8 (200 frames each) natively: 88/88, 70/70, 88/88
  writes, 0 divergences on all three.

This clears this project's `verified` bar on all three axes this agent's
constraints require: an exact byte-diff, a register-write trace match, and
(going beyond the minimum) a genuine non-tautological structural check via
relocation, confirmed on 2 of the 3 files. Full memory map, entry points,
data format and effects are now documented from this disassembly — see
the `memory`/`entry`/`speed`/`data_format`/`effects` fields above. The
"911_Tiger_Shark restart-pointer dead code" and "Airwolf play==load"
findings are recorded as quirks; neither blocks verification (the first
never executes in any trace tried, the second is just an unusual but
fully mechanical entry-point convention that traced correctly).

## Sources

See the `sources` array — Lemon64 (4 pages), C64-Wiki, VGMPF, and the
related mark-cooksey card.

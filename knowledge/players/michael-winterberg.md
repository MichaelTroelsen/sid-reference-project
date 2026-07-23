# Michael Winterberg (Speedi System)

```json
{
  "id": "michael-winterberg",
  "name": "Michael Winterberg (Speedi System)",
  "aliases": ["Michael_Winterberg"],
  "authors": ["Michael Winterberg"],
  "released": "~1985-1987 (most music 1986; first C64 multispeed player)",
  "status": "verified",
  "platform": "Native C64 custom replay routine — Winterberg built tailor-made replay code per tune rather than a fixed, one-size-fits-all driver. Used exclusively by Winterberg himself (101 files, 100% self-composed). Not a distributed editor; the name 'Speedi System' comes from his group Speedi Systems.",
  "csdb_release": null,

  "memory": {
    "load_address": "Variable per tune. AFL_Intro: $1000. Anno_Domini: $0FF8. A_New_Sound: $0B00. Bouncing_Ball: $3FC0. Common: $1000.",
    "zero_page": "$B0/$B1 used as an indirect-indexed pointer pair (LDA (zb0),Y) into each voice's note-stream; $B8/$B9 used as scratch for the current instrument index / note-parameter byte read from that stream. Confirmed via SIDdecompiler disassembly of AFL_Intro.sid (relocated to its own runtime Start address, see Verification) — labels zb0=$B0, zb1=$B1, zb8=$B8, zb9=$B9 in the reconstructed .asm, cross-checked against real register-write behavior via trace-diff.",
    "layout": "Variable — each tune uses a custom replay routine compiled/hand-assembled into the SID file. Common init at load+$2A, play at load+$5A in many (but not all) tunes. Init zeroes memory from load address to load+$29 (AFL_Intro, Baby_Dance_It samples — this zeroed range is exactly where the disassembly-vs-original byte-diff diverges on both files, and it's provably dead: init overwrites it before any read, confirmed by trace-exact playback). SIDdecompiler's own memory-touch map additionally shows a tiny (4-byte, $033C-$0341) runtime read+write footprint in the C64 cassette-buffer area, well below the song's own load address, on every file tested (AFL_Intro, Baby_Dance_It, Bouncing_Ball) — the player borrows a few bytes of the tape buffer as fixed low-memory scratch. This is invisible from the PSID header and only surfaces via SIDdecompiler's -v2 memory map; relocating the reassembly to that address (not the header's load address) was required for a clean, non-wrapping build (see Verification)."
  },
  "entry": {
    "init": "Variable per tune. Common convention: load+$2A (AFL_Intro $102A, Baby! Dance It! $102A, Christmas Mix $242A, Das Model $102A). Init: clears ZP/low-mem scratch, configures CIA timer ($DC05) for multispeed, initialises tempo/status variables. A=0, X=$2A on entry to the zero-fill loop (AFL_Intro).",
    "play": "Variable per tune. Common convention: load+$5A (AFL_Intro $105A, Baby! Dance It! $105A, Christmas Mix $245A, Das Model $105A). Per-frame tempo counter decrement; when zero, runs the music update and resets the counter. Not called via IRQ vector — the $105A play address is a direct subroutine, with the PSID header speed flag set to VBI ($00) implying the caller invokes it at VBI rate."
  },
  "speed": "CIA timer multispeed — the first known multispeed implementation on C64 (~1985-86). Init writes to $DC05 (CIA1 Timer A low) to set a faster-than-VBI interrupt rate. Not raster-based (no evenly-spaced raster IRQs — Crowther's 1987 Zig Zag was first to do that). The PSID header speed field is $00 (VBI) on examined files, suggesting the play routine is called from VBI and paces itself internally via the CIA timer rather than using a CIA-driven IRQ vector. Per-instrument speed variation confirmed by CSDb forum witness (scout: 'double/multi speed per instrument').",
  "data_format": {
    "order_list": "TODO — not a separate order-list structure as far as disassembled; each voice appears to read directly from its own linear note-stream (see 'patterns').",
    "patterns": "Partial (AFL_Intro.sid, from disassembly around play+$a4/$105a): 3 voices addressed by an X offset of $00/$07/$0E (maps directly onto SID voice register bases $D400/$D407/$D40E). Each voice has a note-stream pointer at $1015+X/$1016+X (read indirectly via zero-page $B0/$B1) and a per-voice duration/delay counter at $1017+X. Stream command bytes observed: $DD = end of stream (routine returns without further action), $81 = read next byte as a new duration value then continue, $80 = skip/continue without reading a note. Any other byte is treated as an instrument-index (stored to zb8/$B8), followed by a second byte treated as a note/parameter index (stored to zb9/$B9) used to index further tables. This is an inference from one file's disassembly, not exhaustively verified across the tune's full data — treat as a lead, not a closed fact.",
    "instruments": "Partial: table pairs at $152F/$1537 (lo/hi pointer bytes, likely a frequency or note table indexed by instrument) and $1561/$1569 (byte tables feeding SID sustain/release and pulse-width-related writes) observed in AFL_Intro.sid's play routine. Not decoded to a documented instrument-record layout.",
    "wavetable": "TODO",
    "pulsetable": "TODO — a byte table at $1569 (AFL_Intro.sid) is written to a per-voice register during note-on and looks pulse/waveform related, but its exact semantics aren't confirmed.",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Historically significant: the FIRST known multispeed player on C64 (~1985-86), predating both Crowther's raster-based approach (1987) and Martin Galway's. Used CIA timer for faster-than-VBI playback rate — a different mechanism than the evenly-spaced raster IRQ technique that later became standard.",
    "NOT a fixed driver — each tune ships its own hand-tuned replay routine. Entry points, load address, and code layout vary between SID files (though many share the load+$2A init / load+$5A play convention). This is confirmed by both CSDb forum testimony ('custom-made replay-routines per tune' — scout, 2009-04-09) and the observed variance in entry points across CSDb SID pages.",
    "SIDId maps tag Michael_Winterberg → name 'Speedi System', author Michael Winterberg — no released date, no reference, no technique comment. The name 'Speedi System' comes from Winterberg's group Speedi Systems (founded 1984-ish, per CSDb scener 731).",
    "PSID header speed field is $00 (VBI) on examined files (AFL_Intro et al.), but the init routine writes to $DC05 (CIA timer) — the speed field does not reliably indicate CIA usage for this player. The routine paces itself internally; the PSID flag only describes the caller's timing, not the internal mechanism.",
    "Michael (Mike) Winterberg, German (b.1965), C64 coder AND musician ~1984-1992+; founder/ex-member of the group 'Speedi Systems'. Prolific 1986-87 one-file releases: Synth-Music I-IX series, Sound-Sample collections, Magic Music, Effects Factory, Long-Player V1, Speedy Music I+II. Also a 1984 Turbo Tape tool and ~15 game music credits (Bone Cruncher, Morphicle, Death or Glory, Schwert und Magie I-IV, Xis). HVSC folder path: /MUSICIANS/W/Winterberg_Michael/.",
    "All 101 files are self-composed (single-composer concentration = 100%) — this is a personal routine, never distributed as a standalone tool. No other composer ever used the Michael_Winterberg tag.",
    "No public source, disassembly, or format documentation found. No STIL technical note. Not in Codebase64. Full data-table format and effect-command bit layout remain TODO after verification (see Disassembly notes / data_format).",
    "The player borrows ~4 bytes of the C64 cassette buffer ($033C-$0341) as fixed low-memory scratch, invisible from the PSID header and outside the file's own loaded range — confirmed on all 3 files disassembled for verification (2026-07-23). Relocating a SIDdecompiler reassembly to the PSID header's own load address alone is not enough on this player; relocate to SIDdecompiler -v2's own reported runtime 'Start:' address instead (which was $033C, not the header load address, on both $1000-loading files tested)."
  ],
  "sources": [
    "SIDId (sidid.nfo): tag Michael_Winterberg → name 'Speedi System', author Michael Winterberg — data/sidid.json",
    "CSDb scener 731 (bio, groups, discography, activity 1984-2023): https://csdb.dk/scener/?id=731",
    "CSDb forum — multispeed history thread (scout: custom replay per tune + double/multi speed per instrument; SIDWAVE: first multispeed, CIA timer, not raster-based; goto80: ~1986 with Galway): https://csdb.dk/forums/?roomid=14&topicid=65742&firstpost=10",
    "CSDb SID pages — entry points confirmed for AFL_Intro ($1000/$102A/$105A): https://csdb.dk/sid/?id=31503 ; Android_Music_Mix ($1000/$14B0/$105A): https://csdb.dk/sid/?id=31504 ; Anno_Domini ($0FF8/$182A/$1913): https://csdb.dk/sid/?id=49391 ; A_New_Sound ($0B00/$0B2A/$0C13): https://csdb.dk/sid/?id=49392 ; Baby! Dance It! ($1000/$102A/$105A): https://csdb.dk/sid/?id=31505 ; Bouncing_Ball ($3FC0/$3FC0/$402B): https://csdb.dk/sid/?id=31508 ; Christmas_Mix ($2400/$242A/$245A): https://csdb.dk/sid/?id=31510 ; Das_Model ($1000/$102A/$105A): https://csdb.dk/sid/?id=31514",
    "HVSC Musicians.txt: Winterberg, Michael - GERMANY — https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Init/play hex examination of AFL_Intro.sid — confirmed CIA timer write ($DC05), zero-fill loop, frame-counter logic at $105A. Downloaded from: https://hvsc.csdb.dk/MUSICIANS/W/Winterberg_Michael/AFL_Intro.sid",
    "Local dataset: 101 files tagged Michael_Winterberg, 100% composed by Michael Winterberg (data/composers/michael-winterberg.json)",
    "Verification (2026-07-23): SIDdecompiler.exe disassembly + 64tass.exe reassembly + sidm2-sid-trace.exe 100-frame register-write trace-diff against real HVSC files AFL_Intro.sid, Baby_Dance_It.sid, Bouncing_Ball.sid (C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/W/Winterberg_Michael/) — see Verification section for full results."
  ]
}
```

## Overview

The `Michael_Winterberg` tag is German coder/composer Michael Winterberg's own
C64 music driver, named **"Speedi System"** after his group Speedi Systems
(per SIDId). It is historically significant as the **first known multispeed
player on the Commodore 64** (~1985-86), using the CIA timer for
faster-than-VBI playback rates -- predating both Crowther's raster-based
approach (Zig Zag, 1987) and Martin Galway's work.

Winterberg did not distribute a fixed editor or player. Each tune ships its own
hand-built replay routine, with entry points and code layout varying between
files. Many share a common convention (init at load+$2A, play at load+$5A),
but exceptions exist. All 101 files are self-composed -- no other composer
ever used the routine.

## Quirks & gotchas

See the `quirks` array -- the key ones:

- **Not a fixed driver.** Entry points vary. Don't assume load+$2A/$5A is
  universal -- Anno_Domini ($0FF8 init $182A) and Bouncing Ball ($3FC0 init
  $3FC0) break the pattern entirely.
- **CIA timer usage is invisible in the PSID header.** The speed field is $00
  (VBI) on examined files, but the init routine writes to $DC05 -- the CIA
  timer paces playback internally. If you're scanning for multispeed via the
  header speed flag alone, you'll miss these.
- **Historically significant but poorly documented.** No source, no disassembly,
  no Codebase64 article. The entire knowledge base of the format is TODO.

## Disassembly notes

A partial examination of AFL_Intro.sid (load $1000):

- **Init ($102A):** Zeroes $1000-$1029 (LDX #0, TXA, STA $1000,X loop), writes
  #$27 to $DC05 (CIA1 Timer A low -- confirmed CIA timer usage), six NOP
  delays, initialises variables at $1027 (counter = $01) and $1028 (flag = $20),
  then RTS.
- **Play ($105A):** Begins with a BPL branch on CPU flags, then DEC $1027 /
  LDA $1027 / CMP #$00 / BEQ -- a frame-counter/decrement pattern. When the
  counter hits zero, the music-update body runs (LDA #$0B, STA $1027 to reset);
  otherwise JMP $115E to exit. This is a tempo divider: the play routine is
  called every VBI frame, but only processes music every Nth frame (where N is
  the value reset at $106B, here $0B = 11 frames).
- **Voice loop (from full SIDdecompiler disassembly, 2026-07-23):** the
  music-update body iterates X over $00/$07/$0E (SID voice register bases),
  calling a per-voice handler that decrements a duration counter at
  $1017+X and, when it expires, reads the next command byte from a
  per-voice note-stream via an indirect pointer at $1015+X/$1016+X (zero
  page $B0/$B1). Stream bytes: $DD = end-of-stream, $81 = load a new
  duration value and continue, $80 = skip, anything else = instrument
  index (-> $B8) followed by a note/parameter byte (-> $B9), which index
  further tables ($152F/$1537 pointer table, $1561/$1569 byte tables)
  feeding SID ADSR/pulse-width writes. See `data_format` for the honest
  scope of this (inferred from one file, not exhaustively checked).
- Effect-command bit layout and full data-table stride/terminator
  encoding remain `TODO` beyond the note-stream command bytes above.

## Verification

**Trace-exact reconstruction on 3 representative files (2026-07-23) --
`status: verified`.** Disassembled and reassembled via the project's
standard SIDdecompiler + 64tass pipeline, then register-write trace-diffed
against the real HVSC files using `sidm2-sid-trace.exe` (100 frames each).

Files tested (chosen to cover both the common load+$2A/$5A convention and
the one file the card itself already flagged as breaking it):

| File | Load | Init | Play | Byte-diff | Trace-diff (100 frames) |
|---|---|---|---|---|---|
| AFL_Intro.sid | $1000 | $102A | $105A | 98.28% (1369/1393 bytes) | **exact** |
| Baby_Dance_It.sid | $1000 | $102A | $105A | 99.56% (3158/3172 bytes) | **exact** |
| Bouncing_Ball.sid | $3FC0 | $3FC0 | $402B | 99.25% (3157/3181-byte overlap) | **exact** |

Key finding that made this close: `SIDdecompiler -v2`'s own emulated
memory-access map reports a runtime `Start:` address of `$033C` on both
$1000-loading files -- three thousand-plus bytes *below* the PSID
header's declared load address -- because the player borrows a handful of
bytes of the C64 cassette buffer ($033C-$0341) as fixed low-memory scratch.
Relocating the reassembly to the header's own load address (the "by the
book" choice) produced a plausible-looking build; relocating to the `-v2`
map's own `Start:` address instead (per this project's established
gotcha: relocate to the emulation's actual captured start, not the PSID
header) was what actually produced a clean, non-wrapping, correctly
byte-aligned build. Bouncing_Ball.sid needed no such shift (its `Start:`
already equals its own load address, $3FC0).

Every byte-diff mismatch on all three files falls inside the init
zero-fill range ($load-$load+$29 on the $1000 files; the equivalent early
window on Bouncing_Ball) that `init` explicitly overwrites before any
read -- exactly the "post-execution snapshot of dead workspace" pattern
this project has seen repeatedly on other players (SIDdecompiler captures
the *post-execution* value of self-modified/scratch bytes, not the file's
pristine on-disk value). This was not just assumed from the byte-diff
location: it was confirmed by an actual 100-frame register-write
trace-diff coming back byte-for-byte identical (only the tool's own echoed
filename/load-address line differs) on all three files, including
Bouncing_Ball's small ~4-byte tail-of-region mismatch near the very end of
the loaded block ($4C28-$4C2C, plausibly just outside the disassembler's
own trace window rather than a real difference -- see
`hard_won_gotchas` #9's "not traced long enough vs. genuinely untouched"
distinction; not independently resolved further here, but it did not
affect the register-write trace).

**Honest scope of what "verified" covers here:** the entry-point
convention (init/play addresses, the CIA-timer-based tempo divider, the
3-voice note-stream/command-byte structure sketched above) is confirmed
correct and trace-exact on 3 of the 101 files -- including the one file
the card already knew broke the "load+$2A/$5A" convention, which is a
meaningfully different test than 3 similar files would have been. Given
the card's own quirk that **each tune ships its own hand-built replay
routine** (not a single fixed driver), this is evidence the *reverse-
engineering methodology* (SIDdecompiler + relocate-to-`-v2`-Start +
64tass + trace-diff) reliably reconstructs a Winterberg tune, not a claim
that all 101 files share one identical binary routine -- they don't, by
the card's own prior research. A skeptical reader re-running this on a
4th, untested file should expect to repeat the same disassemble/relocate/
trace-diff steps, not assume the exact addresses above apply verbatim.
Full data-table format (instrument/wave/pulse/filter layout) and effect
encoding remain `TODO` -- the note-stream command-byte sketch above is a
lead from one file's play routine, not a closed spec.

## Sources

See the `sources` array -- SIDId (name/author), CSDb scener 731 (bio/group),
CSDb forum (multispeed history + custom-routine testimony), CSDb SID pages
(8 entry-point samples), HVSC Musicians.txt (country), and hex examination of
AFL_Intro.sid (init/play structure + CIA timer confirmation). Verification
(2026-07-23) additionally used: SIDdecompiler.exe (disassembly +
`-v2` memory-map), 64tass.exe (reassembly), `sidm2-sid-trace.exe`
(100-frame register-write trace-diff) against real HVSC files at
`C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/W/Winterberg_Michael/`
(AFL_Intro.sid, Baby_Dance_It.sid, Bouncing_Ball.sid).

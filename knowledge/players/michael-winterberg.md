# Michael Winterberg (Speedi System)

```json
{
  "id": "michael-winterberg",
  "name": "Michael Winterberg (Speedi System)",
  "aliases": ["Michael_Winterberg"],
  "authors": ["Michael Winterberg"],
  "released": "~1985-1987 (most music 1986; first C64 multispeed player)",
  "status": "in-progress",
  "platform": "Native C64 custom replay routine — Winterberg built tailor-made replay code per tune rather than a fixed, one-size-fits-all driver. Used exclusively by Winterberg himself (101 files, 100% self-composed). Not a distributed editor; the name 'Speedi System' comes from his group Speedi Systems.",
  "csdb_release": null,

  "memory": {
    "load_address": "Variable per tune. AFL_Intro: $1000. Anno_Domini: $0FF8. A_New_Sound: $0B00. Bouncing_Ball: $3FC0. Common: $1000.",
    "zero_page": "TODO: not yet disassembled.",
    "layout": "Variable — each tune uses a custom replay routine compiled/hand-assembled into the SID file. Common init at load+$2A, play at load+$5A in many (but not all) tunes. Init zeroes memory from load address to load+$29 (AFL_Intro sample)."
  },
  "entry": {
    "init": "Variable per tune. Common convention: load+$2A (AFL_Intro $102A, Baby! Dance It! $102A, Christmas Mix $242A, Das Model $102A). Init: clears ZP/low-mem scratch, configures CIA timer ($DC05) for multispeed, initialises tempo/status variables. A=0, X=$2A on entry to the zero-fill loop (AFL_Intro).",
    "play": "Variable per tune. Common convention: load+$5A (AFL_Intro $105A, Baby! Dance It! $105A, Christmas Mix $245A, Das Model $105A). Per-frame tempo counter decrement; when zero, runs the music update and resets the counter. Not called via IRQ vector — the $105A play address is a direct subroutine, with the PSID header speed flag set to VBI ($00) implying the caller invokes it at VBI rate."
  },
  "speed": "CIA timer multispeed — the first known multispeed implementation on C64 (~1985-86). Init writes to $DC05 (CIA1 Timer A low) to set a faster-than-VBI interrupt rate. Not raster-based (no evenly-spaced raster IRQs — Crowther's 1987 Zig Zag was first to do that). The PSID header speed field is $00 (VBI) on examined files, suggesting the play routine is called from VBI and paces itself internally via the CIA timer rather than using a CIA-driven IRQ vector. Per-instrument speed variation confirmed by CSDb forum witness (scout: 'double/multi speed per instrument').",
  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
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
    "No public source, disassembly, or format documentation found. No STIL technical note. Not in Codebase64. Runtime data format / effect encoding / ZP usage all TODO."
  ],
  "sources": [
    "SIDId (sidid.nfo): tag Michael_Winterberg → name 'Speedi System', author Michael Winterberg — data/sidid.json",
    "CSDb scener 731 (bio, groups, discography, activity 1984-2023): https://csdb.dk/scener/?id=731",
    "CSDb forum — multispeed history thread (scout: custom replay per tune + double/multi speed per instrument; SIDWAVE: first multispeed, CIA timer, not raster-based; goto80: ~1986 with Galway): https://csdb.dk/forums/?roomid=14&topicid=65742&firstpost=10",
    "CSDb SID pages — entry points confirmed for AFL_Intro ($1000/$102A/$105A): https://csdb.dk/sid/?id=31503 ; Android_Music_Mix ($1000/$14B0/$105A): https://csdb.dk/sid/?id=31504 ; Anno_Domini ($0FF8/$182A/$1913): https://csdb.dk/sid/?id=49391 ; A_New_Sound ($0B00/$0B2A/$0C13): https://csdb.dk/sid/?id=49392 ; Baby! Dance It! ($1000/$102A/$105A): https://csdb.dk/sid/?id=31505 ; Bouncing_Ball ($3FC0/$3FC0/$402B): https://csdb.dk/sid/?id=31508 ; Christmas_Mix ($2400/$242A/$245A): https://csdb.dk/sid/?id=31510 ; Das_Model ($1000/$102A/$105A): https://csdb.dk/sid/?id=31514",
    "HVSC Musicians.txt: Winterberg, Michael - GERMANY — https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Init/play hex examination of AFL_Intro.sid — confirmed CIA timer write ($DC05), zero-fill loop, frame-counter logic at $105A. Downloaded from: https://hvsc.csdb.dk/MUSICIANS/W/Winterberg_Michael/AFL_Intro.sid",
    "Local dataset: 101 files tagged Michael_Winterberg, 100% composed by Michael Winterberg (data/composers/michael-winterberg.json)"
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
- Full disassembly (ZP usage, register writes, data tables) remains TODO.

## Verification

**Entry points and partial init/play confirmed (2026-07-23) -- `status:
in-progress`.** Entry points sourced from CSDb SID pages (PSID header fields)
across 8 representative files. Init and play hex examined for AFL_Intro.sid,
confirming CIA timer configuration and frame-counter structure. Speed model
(CIA timer multispeed) corroborated by CSDb forum testimony (scout, SIDWAVE)
and the $DC05 write in init. Memory layout, data format, effect encoding, and
ZP usage are all `TODO` pending a full disassembly.

## Sources

See the `sources` array -- SIDId (name/author), CSDb scener 731 (bio/group),
CSDb forum (multispeed history + custom-routine testimony), CSDb SID pages
(8 entry-point samples), HVSC Musicians.txt (country), and hex examination of
AFL_Intro.sid (init/play structure + CIA timer confirmation).

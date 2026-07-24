# LFT (Linus Akesson hand-coded routines)

```json
{
  "id": "lft",
  "name": "LFT (Linus Akesson hand-coded routines)",
  "aliases": ["LFT"],
  "authors": ["Linus Akesson (lft)"],
  "released": "~2001-2014 in this dataset (per-tune hand-coded routines, predating Blackbird 2017; earliest dated file: 'Forkladd Gud (alpha)', 2001)",
  "status": "in-progress",
  "platform": "NOT a distributed tool or editor. Player-ID's bare 'LFT' tag fingerprints assorted per-tune, hand-written 6502 player routines that composer Linus Akesson (lft) wrote for his own tunes before consolidating his workflow into the native tracker Blackbird (2017, see blackbird.md). Unlike Blackbird, there is no single fixed player binary -- load/init/play addresses differ per file (see memory/entry below), consistent with ad hoc, tune-specific code rather than one reusable engine. HOWEVER, the Forkladd Gud septet (7 of the 18 tagged files) is confirmed to share a single player engine from the author's own public domain source code (a cmdtable-driven bytecode interpreter -- see effects.encoding and data_format); those 7 files are NOT independently hand-written, just independently assembled copies of the same engine with different sequence data. The other 11 files (Summer Cloud, Scene Spirit, Specular Highlight, etc.) have different load addresses and their engines remain unexamined.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies: $4000 for the Forkladd Gud septet (alpha-zeta, confirmed by author's source code alpha.s: *=$4000, and also by CSDb/PSID headers); $0817 (Summer Cloud, CSDb sid id 38178); $1000 (A Chipful of Love for You, id 48653; Specular Highlight, id 50400); $0900 (Scene Spirit, id 50759).",
    "zero_page": "Forkladd Gud engine (7 files): $90-$91 (seqptr, pointer into the command-sequence byte stream), $92-$93 (tmpjmp, used for command dispatch via jmp (tmpjmp)). 4 bytes total. Confirmed from author's source (alpha.s lines 51-52). No ZP usage documented for the other 11 files.",
    "layout": "Forkladd Gud engine (7 files): the player occupies a contiguous block at the load address. Layout: [+0] jmp initroutine (3 bytes), [+3] playroutine entry, then command handlers (c_note, c_ad, etc.), write_sid (register-output routine), sidreset, and the cmdtable (46 entries of 2-byte handler addresses). After the code: song-specific data -- sequence (the interleaved command/delay byte stream), freq tables (lofreq/hifreq), vibrato table (sinvibr), and per-song variables (timeleft, playflag, vibrdepth, basefreq, etc.). The initroutine zeroes all 25 SID registers ($d400-$d418) via sidreset, then sets volume ($d418=$0f) and CIA timer 2 latch ($dc04/$dc05). Source: author's alpha.s through zeta.s, all confirmed to share this structure. Layout of the other 11 files is unexamined."
  },
  "entry": {
    "init": "Forkladd Gud engine (7 files): load+0 (the 'jmp initroutine' trampoline at the load address). Init sets seqptr to point at the song's 'sequence:' data, calls sidreset (zeroes $d400-$d418), sets volume to $0f, and configures CIA timer 2 to $005c for ~60Hz PAL frame timing. Source: alpha.s lines 478-493. Other 11 files: init addresses from CSDb SID-entry pages vary ($4000, $152B, $0900, $1000).",
    "play": "Forkladd Gud engine (7 files): load+3 (immediately after the 3-byte jmp trampoline). Called once per frame. Checks playflag -- if zero, skips straight to write_sid. Otherwise decrements timeleft; if still non-zero, skips to write_sid. When timeleft hits zero, reads the next command byte from the (seqptr) stream, dispatches via cmdtable jump table, then postcmd reads a delay byte (0 = process next command immediately, non-zero = set timeleft for that many frames). Source: alpha.s lines 56-81. Other 11 files: play addresses from CSDb vary ($4003, $0817, $1200, $0903, $1003)."
  },
  "speed": "Forkladd Gud engine (7 files): 1x (one play call per frame). Timing is CIA-timer-2-driven: init sets $dc04/$dc05 to $005c (PAL ~60Hz). The play routine itself just uses a frame-counted 'timeleft' variable -- it is NOT a CIA-interrupt-driven design (no IRQ handler in the source); the play routine is called once per frame by whatever hosts it (likely a VBI or main-loop call, but the calling convention is external to the player). Source: alpha.s initroutine and playroutine. Other 11 files: speed model unconfirmed.",

  "data_format": {
    "order_list": "Forkladd Gud engine: NO conventional order list. The song is a single linear byte-stream pointed to by seqptr, with backward jumps only via the c_jump command (which uses a compile-time label, not a dynamic address -- each tune hardcodes its own loop point). No song-position table, no pattern-order array. Source: alpha.s initroutine (sets seqptr to sequence: label) and c_jump handler (loads hardcoded jumphere label).",
    "patterns": "Forkladd Gud engine: NO pattern grid. The runtime format is an interleaved [command_byte] [parameter(s)] [delay_byte] stream read sequentially by getbyte via (seqptr),y. Each command handler reads 0-3 parameter bytes, then postcmd reads 1 delay byte. The byte stream is effectively a bytecode program: the musician hand-assembled a sequence of command/delay pairs (e.g. '.byt _VOL,$43 / .byt 20,_FILTER,$46' -- set volume to $43, wait 20 frames, then set filter). Source: alpha.s sequence: label and getbyte routine (lines 467-475, 529+).",
    "instruments": "Forkladd Gud engine: NO instrument table. Timbral parameters (AD, SR, waveform, pulse width, filter routing, cutoff) are set inline via explicit commands in the byte-stream. There are separate command handlers for each voice (voice 1: _AD/$03, _SR/$04, _CR/$05, _SAW/$06; voice 2: _2AD/$08, _2SR/$09, _2CR/$10, _2SAW/$11, _2TRI/$16; voice 3/bass: _3AD/$32, _3SR/$33, _3SAW/$34, _3CR/$45, _BSAW/$42, _BSR/$44, _BREL/$43) plus _TRI/$37, _PUL/$18, _2PUL/$19, _FILTER/$21, _CUTO/$22. Source: alpha.s cmdtable (lines 197-212) and individual command handlers.",
    "wavetable": "Forkladd Gud engine: lofreq/hifreq tables (probably standard 96-note lookup) plus sinvibr (sine table for vibrato). No 'wave table' in the arpeggio sense -- the _3ARP command takes 3 absolute note indices as parameters, not a table index. Source: alpha.s write_sid references lofreq/hifreq and sinvibr.",
    "pulsetable": "Forkladd Gud engine: NO dedicated pulse-width table. Pulse width is set by _PW/$20 (writes pulse width msb/lsb for voices 1+2), with optional per-frame slide via _PWD/$26 (adds a delta each frame). Source: alpha.s c_pw and c_pwd handlers and write_sid pulse section.",
    "filtertable": "Forkladd Gud engine: NO dedicated filter table. Filter cutoff is set by _CUTO/$22 (absolute value), with optional per-frame slide via _CUTOD/$23 (adds a delta each frame). Filter routing/type is set by _FILTER/$21. Source: alpha.s c_filter, c_cuto, c_cutod handlers and write_sid filter section."
  },
  "effects": {
    "encoding": "Forkladd Gud engine (7 files): command-driven bytecode interpreter. Each command byte (0-45) indexes into a 46-entry cmdtable of 16-bit handler addresses (cmdtable base at a fixed offset from load address, entries in order of the _XXX constants declared at the top of alpha.s). The byte-stream format is: command_byte [0-3 parameter bytes, depending on command] delay_byte. The delay byte is read by postcmd after every command: 0 = immediately dispatch next command; non-zero = set timeleft to that many frames (the playroutine decrements timeleft each call and skips command dispatch until it reaches zero). The initial startup delay is hardcoded (20 frames in alpha.s). c_end (command 1) sets playflag to 0, terminating playback. c_jump (command 39) rewinds seqptr to a compile-time label for looping -- it is NOT a dynamic index or offset. Source: alpha.s getcmd/postcmd/getbyte flow (lines 56-81, 467-475), cmdtable (lines 197-212), and the _XXX constant table (lines 4-49).",
    "commands": {
      "0 (_NOP)": "No operation -- jumps to postcmd to read next delay byte.",
      "1 (_END)": "Sets playflag to 0, terminating playback (write_sid continues to run but no new commands are dispatched).",
      "2 (_NOTE)": "Sets voice 1 base frequency from the parameter byte (note index into lofreq/hifreq tables).",
      "3 (_AD)": "Sets voice 1 attack/decay ($d405) to the parameter byte.",
      "4 (_SR)": "Sets voice 1 sustain/release ($d406) to the parameter byte.",
      "5 (_CR)": "Sets voice 1 control register ($d404) to the parameter byte (waveform + gate).",
      "6 (_SAW)": "Sets voice 1 waveform to sawtooth ($21) unconditionally (no parameter).",
      "7 (_2NOTE)": "Sets voice 2 base frequency from parameter byte.",
      "8 (_2AD)": "Sets voice 2 attack/decay ($d40c) to the parameter byte.",
      "9 (_2SR)": "Sets voice 2 sustain/release ($d40d) to the parameter byte.",
      "10 (_2CR)": "Sets voice 2 control register ($d40b) to the parameter byte.",
      "11 (_2SAW)": "Sets voice 2 waveform to sawtooth ($21).",
      "12 (_DEPTH)": "Sets voice 1 vibrato depth from parameter byte.",
      "13 (_VRESTART)": "Resets voice 1 gate bit (hard-restart workaround -- writes $d404 with gate cleared, then again with gate set).",
      "14 (_REL)": "Triggers voice 1 release phase (writes SR with release nibble set from parameter).",
      "15 (_2REL)": "Triggers voice 2 release phase.",
      "16 (_2TRI)": "Sets voice 2 waveform to triangle ($11).",
      "17 (_VOL)": "Sets master volume / filter mode ($d418) to the parameter byte.",
      "18 (_PUL)": "Sets voice 1 waveform to pulse ($41).",
      "19 (_2PUL)": "Sets voice 2 waveform to pulse ($41).",
      "20 (_PW)": "Sets pulse width for voices 1+2 ($d402/$d403, $d409/$d40a) -- reads 2 parameter bytes (LSB then MSB).",
      "21 (_FILTER)": "Sets filter routing/mode byte ($d417) from the parameter byte (determines which voices pass through the filter).",
      "22 (_CUTO)": "Sets filter cutoff ($d415/$d416) -- reads 2 parameter bytes (LSB then MSB).",
      "23 (_CUTOD)": "Sets filter-cutoff per-frame slide delta -- reads 2 byte parameters (LSB then MSB) added to cutoff in write_sid each frame.",
      "24 (_VSPEED)": "Sets vibrato speed (added to vibrpos each frame in write_sid).",
      "25 (_RESET)": "Resets all SID registers via sidreset.",
      "26 (_PWD)": "Sets pulse-width per-frame slide delta -- reads 2 byte parameters, added to pwidth in write_sid each frame.",
      "27 (_TRANSPH)": "Sets voice 1 transpose offset (MSB from parameter).",
      "28 (_TRANSPDH)": "Sets transpose-delta MSB (per-frame pitch bend MSB for voices 1+2).",
      "29 (_TRANSPDL)": "Sets transpose-delta LSB (per-frame pitch bend LSB for voices 1+2).",
      "30 (_TRANSPL)": "Sets voice 1 transpose offset (LSB from parameter).",
      "31 (_3ARP)": "Sets voice 3 arpeggio -- reads 3 note-index bytes (low, mid, high). In write_sid, arppos cycles through them at the frame rate.",
      "32 (_3AD)": "Sets voice 3 attack/decay ($d412) to the parameter byte.",
      "33 (_3SR)": "Sets voice 3 sustain/release ($d413) to the parameter byte.",
      "34 (_3SAW)": "Sets voice 3 waveform to sawtooth ($21).",
      "35 (_3REL)": "Triggers voice 3 release phase.",
      "36 (_3TRI)": "Sets voice 3 waveform to triangle ($11).",
      "37 (_TRI)": "Sets voice 1 waveform to triangle ($11).",
      "38 (_2DEPTH)": "Sets voice 2 vibrato depth from parameter byte.",
      "39 (_JUMP)": "Jumps seqptr to a compile-time hardcoded address (jumphere label) for song looping -- NOT a dynamic parameter.",
      "40 (_TEMPO)": "Writes the parameter byte to CIA timer 2 latch LSB ($dc05), changing the frame rate.",
      "41 (_BNOTE)": "Sets voice 3/bass base frequency from parameter byte.",
      "42 (_BSAW)": "Sets voice 3/bass waveform to sawtooth ($21).",
      "43 (_BREL)": "Triggers voice 3/bass release phase.",
      "44 (_BSR)": "Sets voice 3/bass sustain/release ($d414) to the parameter byte.",
      "45 (_3CR)": "Sets voice 3 control register ($d40b -- note: voice 3 CR share) to the parameter byte."
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is almost certainly NOT the same thing as the 'Blackbird/LFT' tag already carded at knowledge/players/blackbird.md. Blackbird is a named, versioned, publicly released native tracker (CSDb releases 153555/161554, 2017-2018) with its own SIDId entry (name 'Blackbird 1.0', a reference URL, a comment). The bare 'LFT' tag's SIDId entry, by contrast, has ONLY an author field ('Linus Akesson (LFT)') -- no name, no release, no reference -- consistent with Player-ID fingerprinting a family of unnamed, non-identical routines rather than one product. All 18 locally-tagged 'LFT' files date to CSDb release years 2001-2014, entirely BEFORE Blackbird's 2017 debut.",
    "The Forkladd Gud septet (7 of the 18 files) is confirmed by the author's own source code to share a single player engine -- a cmdtable-driven bytecode interpreter -- that was independently assembled per tune with different sequence data. This is NOT per-tune-from-scratch code; it's one engine copied and customized. The author's README explicitly states the source code is 'public domain - do what thou wilt' (larsson-sids.tgz README). The remaining 11 files use different load addresses and their engines are unexamined.",
    "This strongly matches Blackbird's own author description of his prior workflow: 'For some time, I've been making my C64 music using hacked-together cross-platform tools. Here the various features of those tools have been brought together into a polished native tracker' (quoted already in blackbird.md). No source or manual explicitly says 'the LFT tag = those prior tools', so per this project's edge-evidence rule this is recorded here as a strong circumstantial hypothesis, NOT as a derives_from/successor_of edge.",
    "Extreme composer concentration: all 18 locally-tagged files are by Lft himself (100%, 1/1 composers) -- the tightest possible concentration, consistent with genuinely personal, uncirculated per-tune code rather than a tool anyone else could have adopted.",
    "The Forkladd Gud engine has NO instrument table, NO pattern grid, and NO order list -- it is a single linear byte-stream with a compile-time-hardcoded loop point (c_jump reads a label, not a dynamic address). The musician literally hand-assembled a sequence of '.byt _VOL,$43 / .byt 20,_NOTE,35' directives, making the .s file itself the 'score.' This is fundamentally different from every tracker-based player in this knowledge base and explains why lft later built Blackbird.",
    "A separate, unrelated raw tag '256bytes/LFT' (1 file in this dataset) is already carded at knowledge/players/256bytes-lft.md -- almost certainly tied to Akesson's 256-byte C64 demo 'A Mind Is Born' (2017), not to music playback. Out of scope here; flagged so a future pass doesn't conflate it with this tag."
  ],
  "sources": [
    "sidid:LFT (author 'Linus Akesson (LFT)', no name/released/reference fields) -- data/sidid.json",
    "Local dataset: 18 files tagged 'LFT', all by composer 'Lft' (100% concentration) -- aggregated from data/composers/Lft.json folder[] records",
    "CSDb SID entry 7493 'Forkladd Gud (alpha)' (2001, load/init $4000, play $4003): https://csdb.dk/sid/?id=7493",
    "CSDb SID entry 38178 'Summer Cloud' (2007, load/play $0817): https://csdb.dk/sid/?id=38178",
    "CSDb SID entry 48653 'A Chipful of Love for You' (2013, load $1000, init $152B, play $1200): https://csdb.dk/sid/?id=48653",
    "CSDb SID entry 50759 'Scene Spirit' (2014, load/init $0900, play $0903): https://csdb.dk/sid/?id=50759",
    "CSDb SID entry 50400 'Specular Highlight' (2014, load/init $1000, play $1003): https://csdb.dk/sid/?id=50400",
    "Forkladd Gud source code tarball (7 .s files, 11,141 lines total, public domain): https://www.linusakesson.net/music/sidstuff/larsson-sids.tgz",
    "Forkladd Gud README: 'This is public domain - do what thou wilt' -- https://www.linusakesson.net/music/sidstuff/forkladdgud.php",
    "Composer's own page on Forkladd Gud ('handcrafted in 6502 assembler', source available): https://www.linusakesson.net/music/sidstuff/forkladdgud.php",
    "Composer's SID music index (tune list): https://www.linusakesson.net/music/sidstuff/index.php",
    "Composer's software page (confirms Blackbird 2017 as his first named/released tracker; pre-2017 tools listed are Sidreloc, Spindle -- no pre-Blackbird music editor): https://www.linusakesson.net/software/",
    "knowledge/players/blackbird.md -- sibling card for the later, named, publicly released tracker by the same author",
    "knowledge/players/256bytes-lft.md -- sibling card for the unrelated 256-byte demo tag"
  ]
}
```

## Overview

"LFT" is a bare Player-ID tag that fingerprints a handful of **hand-written,
per-tune 6502 player routines** by C64 musician Linus Akesson (lft), not a
distributed tool. In this dataset it covers 18 files, all by Lft himself
(100% concentration), spanning CSDb release years 2001-2014. That timeframe
predates Akesson's first named, publicly released, versioned tracker,
**Blackbird** (2017 -- already carded separately at `blackbird.md`).

Unlike Blackbird, there is no single fixed player binary -- load/init/play
addresses differ across the 18 files. However, the **Forkladd Gud septet**
(7 files: alpha through zeta, 2001) shares a single engine, confirmed by the
author's own public-domain source code. That engine is a **command-driven
bytecode interpreter**: the musician hand-assembled sequences of command and
delay bytes into the .s file itself (e.g. `.byt _NOTE,35` for "play note 35"),
with no pattern grid, no instrument table, and no conventional order list.
The byte-stream is walked sequentially by a small player that reads one
command per variable number of frames and writes SID registers each frame.
The other 11 files (Summer Cloud 2007, Scene Spirit 2014, Specular Highlight
2014, etc.) have different load addresses and their engines are unexamined.

The composer himself describes the Forkladd Gud parts as "handcrafted in 6502
assembler," and his software page lists no pre-Blackbird music editor (only
Sidreloc and Spindle). The "LFT" tag thus represents Akesson's pre-tracker
era -- a personal toolkit of hand-tweaked, tune-specific routines that he
eventually consolidated into Blackbird (2017).

## Quirks & gotchas

See the `quirks` array for the load-bearing points:

- This is **not** the `Blackbird/LFT` tag already carded (different SIDId entry shape, different years, no single fixed load address).
- The Forkladd Gud septet shares a single engine (confirmed by source code), not seven independently written routines -- but that engine is a unique bytecode-interpreter design with no instrument table, no pattern grid, and no conventional order list. The `.s` source file IS the score.
- The Forkladd Gud engine is public domain ("do what thou wilt" per the README), but only covers 7 of 18 files.
- Usage is 100% by the author himself.
- The connection to Blackbird is circumstantial (strongly suggested by the timeline and Blackbird's own author description of his prior workflow) but is NOT asserted as a formal `edges` relationship -- there is no citable statement linking the two by name.

## Disassembly notes

**No disassembly performed.** The Forkladd Gud engine facts above come from
reading the author's own 6502 assembly source (alpha.s, 1,927 lines; 11,141
lines total across all 7 parts). Key observations from the source:

- `*=$4000` (line 2) -- all seven parts assemble to the same base address.
- `seqptr =$90`, `tmpjmp =$92` (lines 51-52) -- only 4 bytes of ZP used.
- `jmp initroutine` at +0, `playroutine` starts at +3 (lines 54-56).
- `cmdtable` (lines 197-212) declares 46 command handlers as `.word` entries; the command byte (0-45) is doubled via `asl` / `tax` then dispatched via `jmp (tmpjmp)`.
- `getbyte` (lines 467-475) reads `(seqptr),y`, auto-increments seqptr -- the player walks the byte-stream linearly.
- `write_sid` (lines 82-196) runs every frame: applies vibrato (sine table lookup), transposition (per-frame pitch bend), arpeggio cycling (_3ARP), pulse-width slide (_PWD), and filter-cutoff slide (_CUTOD) to the SID registers.
- `sequence:` (line 529+) is the song data -- a flat list of `.byt` directives encoding the command/delay stream.
- `c_jump` (line 455) uses compile-time labels (`jumphere`), not dynamic addresses -- the loop point is baked into each tune's source, not configurable at runtime.
- `timeleft` (initial value 20 in alpha.s, line 1857) controls the startup silence before the first command fires.
- CIA timer 2 is set to `$005c` in initroutine (lines 486-489), but there is no IRQ handler in the player -- it is called once per frame by an external host.

The other 11 files were not disassembled and their engines remain unknown.

## Verification

**Not verified -- `status: in-progress`.** The Tier 3 facts for the Forkladd
Gud engine are sourced from the author's own public-domain source code
(larsson-sids.tgz, 11,141 lines of 6502 assembly), which is more
authoritative than a third-party disassembly. However:

- No reassembly-and-trace pass through `sidm2-siddump` / `mcp-c64` has been
  performed (required for `status: verified`).
- The Forkladd Gud engine only covers 7 of the 18 tagged files. The remaining
  11 files use different load addresses and their engines have not been
  examined.
- No memory map or effect encoding is claimed for any non-Forkladd-Gud file.
- No edges have been asserted (no source links this player to any other by name).

## Sources

See the `sources` array for the full list. Key additions from this research
pass: the Forkladd Gud source tarball at linusakesson.net (public domain,
README states "do what thou wilt"), the composer's software page confirming
no pre-Blackbird music editor, and the sibling 256bytes-lft.md card.

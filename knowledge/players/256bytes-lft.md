# 256bytes/LFT (player routine)

```json
{
  "id": "256bytes-lft",
  "name": "256bytes/LFT (player routine)",
  "aliases": ["256bytes/LFT"],
  "authors": ["Linus Åkesson (lft)"],
  "released": "2017 (Oldskool 4K Intro compo, Revision 2017 — 1st place)",
  "status": "in-progress",
  "platform": "Not a distributed tool or editor — a single, extreme-size-constrained (256-byte) C64 demo, 'A Mind Is Born', by Linus Åkesson (lft), in the same '256bytes/*' Player-ID tag family as the already-carded knowledge/players/agemixer-256bytes.md and knowledge/players/ice00-256bytes.md. Unlike those, this one is unusually well documented by the author himself (annotated hex dump + code snippets on his own site), which is why several runtime facts below are populated rather than left TODO.",
  "csdb_release": null,

  "memory": {
    "load_address": "$0801 (BASIC-line load address, compo-mandated) — per CSDb SID entry https://csdb.dk/sid/?id=54005 and author's own page.",
    "zero_page": "CORRECTED (2026-07-31 disassembly pass): the copy loop is exactly as the author's own listing shows ('ldx #$fd / initloop / lda $802,x / sta $02,x / dex / bne initloop'), but its actual destination range is $03-$FF (253 bytes), not $00-$FD as this card previously paraphrased it — X counts down from $FD to $01 inclusive (loop exits when X reaches 0, DEX/BNE), so dest=$02+X spans $03 (X=$01) through $FF (X=$FD). $00/$01 (6510 I/O port + DDR) and $02 are never touched by the copy. Several fixed zero-page cells the play routine references ($0A, $0B, $0C, $13, $1C, $20, $22, $CC) are themselves inside the copied range — their file-space source bytes (at addr+$800, e.g. $13's source is $0813) double as cold-start values, confirmed byte-for-byte against the payload (e.g. source $081C = $61, matching the code's own 'LDA #$61 / STA $1C' at $0839). This also means the code is NOT freely relocatable to a different zero-page window without rewriting every one of these hardcoded operand bytes by hand.",
    "layout": "No order-list/pattern/instrument tables in the conventional tracker sense. The melody is generated in real time by an 8-bit linear-feedback shift register (LFSR) seeded at file offset $15 (seed value $41, retuned through the piece), whose output indexes a small frequency table; SID register values for the 3 voices (kick/bass, melody, ducking drone) are computed procedurally each frame rather than read from pattern data. Per the author's own technical writeup (see sources)."
  },
  "entry": {
    "init": "$08B2 (per CSDb SID entry https://csdb.dk/sid/?id=54005), reached via the BASIC bootstrap line '54271 SYS2225'; copies the program to zero page and sets up IRQ (per author's page).",
    "play": "$0000 in the PSID header (no callable PSID play vector — this is an RSID-style self-installing-IRQ player). RESOLVED (2026-07-31 disassembly pass): the real play routine is at file address $0831 (executes from the zero-page copy at $0031 after relocation, per the copy-loop mapping dest=src-$800). Reached only via the hardware IRQ vector: init does 'LDA #$31 / STA $0314' then, after the copy loop, 'STX $0315' with X=0 (X reaches 0 at loop exit), setting $0314/$0315 = $0031. CONFIRMED: this is the plain CIA1-driven system IRQ, not a raster split — a full scan of all 254 payload bytes found zero writes to $D019 or $D01A (raster IRQ enable/latch) anywhere in the file. The play routine ends with 'JMP $EA7E', jumping directly into KERNAL ROM's default IRQ-exit code to get RTI for free (valid since $01/$00 — the CPU port/DDR — are never touched, so KERNAL ROM stays banked in throughout)."
  },
  "speed": "Single-speed, one play-routine call per 60Hz (PAL) interrupt tick. CONFIRMED (2026-07-31): this is the KERNAL's default CIA1 'jiffy clock' IRQ, redirected via the standard $0314/$0315 CINV vector — no raster-IRQ setup ($D019/$D01A) appears anywhere in the payload, settling this card's prior TODO.",

  "data_format": {
    "order_list": "N/A — no order list; the piece has no song-position table at all, per the author's description of real-time LFSR-driven generation.",
    "patterns": "N/A — no pattern data; notes are generated algorithmically each frame rather than read from stored patterns.",
    "instruments": "TODO — no instrument-table concept found; SID envelope/pulse values appear to be computed procedurally rather than looked up (author's page discusses per-voice behaviour but no discrete 'instrument' data structure).",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "N/A — no command-byte effect system found; this is procedural/generative code, not a table-driven player. TODO if a future disassembly finds otherwise.",
    "commands": {}
  },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE '256 BYTES' LABEL IS ALMOST EXACTLY TRUE HERE (unlike the Ice00 sibling tag, where one of two files measured 263 bytes): CSDb lists this SID's data size as 254 ($00FE) bytes, and the production itself is a genuine 256-byte intro (the BASIC loader + 254-byte payload total 256 bytes) that won the Oldskool 4K Intro compo at Revision 2017. Source: https://csdb.dk/sid/?id=54005 and https://linusakesson.net/scene/a-mind-is-born/.",
    "THIS IS NOT THE SAME THING AS THE BARE 'LFT' TAG already carded at knowledge/players/lft.md. That card covers ~18 files of Åkesson's conventional (if hand-assembled) per-tune player routines from 2001-2014, predating his Blackbird tracker; this tag covers exactly 1 file — 'A Mind Is Born' (2017) — a fundamentally different kind of artifact: a competition-winning 256-byte demo whose 'player' is a real-time LFSR-driven procedural generator with no pattern data at all, executing entirely from zero page. lft.md's own quirks array already flagged this tag as out of scope for that card and pointed here.",
    "Music generation technique is genuinely notable and citable: melody comes from an 8-bit LFSR (not a composed sequence), voice 3 implements a sidechain-style 'ducking' drone that dips on every beat to mimic a compression effect, and the whole 254-byte payload relocates itself into zero page during init — all per the author's own annotated writeup, not assumed.",
    "Explicit license from the author: Creative Commons BY-NC-SA 4.0 ('For commercial use, please get in touch') — https://linusakesson.net/scene/a-mind-is-born/. No public disassembled/commented source (.asm) was published by the author; only the compiled .prg, an MP3, and the .sid file are offered for download. A third-party reconstructed assembly listing was referenced in that page's comments (external, unverified by this project).",
    "Extreme composer concentration: the sole locally-tagged file is by Lft himself (100%, 1/1), consistent with a personal, one-off, non-reusable size-coding entry rather than a shared tool.",
    "SIDId (data/sidid.json) has NO entry for '256bytes/LFT' — fingerprinted by this project's own Player-ID tooling only, same as the Agemixer and Ice00 sibling tags.",
    "SIDdecompiler.exe (this project's standard disassembler) HANGS INDEFINITELY on this file, unfixable by any flag combination tried (-r, -t, -1 -s0, -P/-I overrides) — root-caused (2026-07-31) to the undocumented 6502 opcode ALR/ASR ($4B), which the play routine uses at least 3 times (file addresses $0852, $087E, $08DB) as part of its LFSR/ducking logic. SIDdecompiler's emulator doesn't implement this opcode and its trace never advances past the first occurrence (observed as an infinite repeat of 'Unimplemented opcode: 4b at address $0052'). A from-scratch recursive-descent hand disassembler (custom Node script, not committed to this repo) was built instead, decoding from both real control-flow roots — init ($08B2) and the hardware-IRQ-installed play routine ($0831, i.e. zero-page $0031 post-relocation) — and correctly handling the illegal-opcode set SIDdecompiler chokes on. It reached 201 of 254 payload bytes (79.1%) as identified instructions; the remainder (48 bytes at $0801-$0830 — BASIC bootstrap + likely LFSR seed/frequency-table data per the author's own description, and 7 trailing bytes at $08F8-$08FE) is unclassified data, left as TODO rather than guessed.",
    "Reassembling the hand disassembly (64tass, fixed at the file's own $0801 — this program is NOT relocatable, see memory.zero_page) reproduced the original 254-byte payload 100.0000% byte-exact (0/254 diffs). This is a genuine, non-trivial check for the 201 bytes decoded as real instructions (a single misidentified instruction length anywhere would have misaligned every subsequent byte and failed the diff) but is NOT itself a strong verification per this project's own precedent: no non-tautological register-write trace-diff was achievable, because the code is not meaningfully relocatable (see memory.zero_page — dozens of hardcoded zero-page operand bytes reference specific fixed cells whose own cold-start values are baked into the file's data region at addr+$800) and a byte-identical reassembly traces identically to the original by construction, proving nothing. See Verification section for the full reasoning."
  ],
  "sources": [
    "Local dataset: data/composers/lft.json — 1 file tagged '256bytes/LFT' ('A Mind Is Born', csdb_id 54005); see knowledge/COVERAGE.md row #9 (1 file)",
    "data/sidid.json: no entry for '256bytes/LFT' (checked, absent)",
    "CSDb SID entry 54005 'A Mind Is Born': load $0801, init $08B2, play $0000, data size 254 ($00FE) bytes, SID model 8580, PAL, dated 2017: https://csdb.dk/sid/?id=54005",
    "Author's own technical writeup (annotated hex dump + code snippets: LFSR melody generation, zero-page relocation/execution, 60Hz timer-driven playback, CC BY-NC-SA 4.0 license): https://linusakesson.net/scene/a-mind-is-born/",
    "Hackaday coverage (2021-05-19), corroborates '256 bytes', 1st place at Revision 2017 Oldskool 4K Intro compo: https://hackaday.com/2021/05/19/linus-akessons-a-mind-is-born-commodore-64-demo-in-just-256-bytes/",
    "Boing Boing coverage (2017-04-21), contemporaneous coverage of the release: https://boingboing.net/2017/04/21/a-mind-is-born-computer-demo.html",
    "knowledge/players/lft.md — sibling card for the unrelated bare 'LFT' tag; its own quirks array already flags this '256bytes/LFT' tag as out of scope and points here (cited, not edited)",
    "knowledge/players/ice00-256bytes.md and knowledge/players/agemixer-256bytes.md — sibling '256bytes/*' cards establishing the tag-family evaluation methodology (cited, not edited)"
  ]
}
```

## Overview

`256bytes/LFT` is a Player-ID tag covering exactly one file in this dataset:
**"A Mind Is Born"**, Linus Åkesson's (lft) 256-byte C64 demo that won 1st
place in the Oldskool 4K Intro competition at Revision 2017. Unlike the bare
`LFT` tag (already carded at `knowledge/players/lft.md`, covering ~18 files of
conventional hand-assembled per-tune player routines from 2001-2014), this is
a fundamentally different artifact: a real-time, LFSR-driven procedural music
generator with no pattern data at all, whose entire 254-byte payload relocates
itself into and executes from zero page. It is unusually well documented for
a one-off size-coding entry — the author published an annotated hex dump and
technical breakdown of the melody-generation algorithm, memory layout, and
IRQ-driven playback — which is why this card reaches `status: in-progress`
rather than a bare identity stub.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is **not** the bare `LFT` tag
(different kind of artifact entirely — procedural/generative, not a
conventional player); the "256 bytes" label is essentially accurate here
(254-byte payload, unlike the Ice00 sibling tag where one file exceeded 256);
the melody is LFSR-generated, not composed/stored data; and the whole program
relocates to and runs from zero page after init.

## Disassembly notes

**Updated 2026-07-31.** An independent disassembly WAS performed this pass —
`SIDdecompiler.exe`, this project's standard tool, cannot process this file
at all (hangs indefinitely, root cause identified: the undocumented opcode
ALR/$4B, used in the play routine's LFSR/ducking logic — see the `quirks`
array for the full finding). A from-scratch recursive-descent hand
disassembler was written instead, seeded from the file's two real
control-flow roots (init at $08B2, and the hardware-IRQ play routine at
$0831/zero-page $0031), correctly handling the illegal-opcode set
(LAX/SAX/DCP/ISC/RLA/SLO/SRE/RRA/ALR/ANC/etc.) that defeats SIDdecompiler.
201 of 254 payload bytes (79.1%) were identified as real instructions this
way; the previously-TODO memory-map facts (zero-page destination range,
CIA-vs-raster IRQ source) are now resolved from the raw bytes directly, not
from author prose (see `memory.zero_page` and `entry.play`/`speed`).
`data_format`/`effects` remain N/A/TODO for the same reason as before — no
discrete pattern/instrument/effect-command tables were found in either the
disassembled or the still-unclassified regions.

## Verification

**Still `status: in-progress` — closer, but not verified.** This pass:

1. Confirmed `SIDdecompiler.exe` cannot disassemble this file (hangs on the
   undocumented ALR opcode at $0852/$087E/$08DB — see `quirks`), a genuine
   tool limitation, not a flag/workaround issue.
2. Built an independent recursive-descent hand disassembly (79.1% code
   coverage; remaining 48 bytes at $0801-$0830 and 7 bytes at $08F8-$08FE
   left as unclassified data — TODO, not guessed).
3. Reassembled it with 64tass at the file's own fixed load address ($0801 —
   this program is not relocatable) and byte-diffed against the original
   payload: **100.0000% byte-exact, 0/254 diffs.**
4. Could NOT produce a non-tautological register-write trace-diff. The
   standard workflow's "cure" for a byte-identical reassembly (lessons
   69/70/72 in the verification agent's own accumulated notes: rebuild the
   same disassembly at a different address and confirm the register-write
   stream still matches) does not apply here, because this program is not
   meaningfully relocatable — the copy loop's destination ($02-$FF) and the
   IRQ vector low byte ($31) are both literal constants baked into the file,
   and dozens of instructions elsewhere reference specific fixed zero-page
   cells (e.g. $13, $1C, $20, $22, $0A, $0B, $0C, $CC) by hardcoded absolute
   operand — not via any relocatable base register. A "control" build would
   require hand-rewriting every one of those operand bytes with no
   independent way to check the rewrite is correct short of live execution.
5. Confirmed via this project's VICE wrapper (`scripts/dev/vsid-trace.js`)
   that the ORIGINAL file, run as a real self-installing-IRQ RSID, produces
   continuous, actively-varying SID register writes across all 25 registers
   over a 30-frame sample — i.e. the file is a genuinely playing tune, not
   silent or broken, which is useful context but (being a trace of the
   original alone, with nothing independently reconstructed to diff it
   against) is not itself a verification step.

**What would close this to `verified`:** a live 6502 debugger (RetroDebugger)
session, single-stepping or code-mapping the ORIGINAL file's actual
execution, to (a) independently confirm the 79.1%-coverage hand disassembly
against real runtime behaviour rather than static-only control-flow
following, and (b) attempt to classify the remaining 55 unclassified data
bytes ($0801-$0830, $08F8-$08FE) by watching which addresses the LFSR/table
lookups actually read at runtime. This agent does not have RetroDebugger
tool access this run — flagging it as the concrete next step rather than
guessing at those bytes' meaning.

## Sources

See the `sources` array — local composer-file aggregation, a CSDb SID-entry
lookup, the author's own annotated technical writeup, two contemporary press
pieces (Hackaday, Boing Boing), and the sibling `lft.md`/`ice00-256bytes.md`/
`agemixer-256bytes.md` cards (cited, not edited).

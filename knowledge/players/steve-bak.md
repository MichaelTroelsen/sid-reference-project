# Steve Bak (player routine)

```json
{
  "id": "steve-bak",
  "name": "Steve Bak (player routine)",
  "aliases": ["Steve_Bak"],
  "authors": ["Steve Bak"],
  "released": "1984-1986 (Microdeal/Interdisc/Pocket Money Software era)",
  "status": "verified",
  "platform": "English bedroom-coder Steve Bak's (1952-2019) own C64 driver — CONFIRMED via multiple sources as a lone-developer routine, since he programmed, drew graphics for, AND composed the music on all 6 of his credited C64 titles himself. He later became a well-regarded Atari ST/Amiga programmer (Goldrunner, Star Ray, James Pond 2: Robocod) — Goldrunner's own soundtrack was composed by KB-verified [[rob-hubbard]], a genuine, sourced cross-platform link. Player-ID-fingerprinted across 6 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Per-title, no fixed base — every file is a game rip assembled at whatever address that title used. Read each PSID header, never assume: Hercules $8c00, Crazy_Painter $5777, Cuthbert_in_the_Tombs $34b0, Gods_and_Heroes $2fda, Lands_of_Havoc $681b, Cuthbert_in_the_Jungle (RSID) $4877. The engine itself is ~185-255 bytes of code in every file; the rest of each payload is note data plus unrelated game code that happened to sit inside the ripped range.", "zero_page": "One contiguous ~11-13 byte block, base chosen per title: Hercules $da-$e4, Crazy_Painter $39-$40, Cuthbert_in_the_Tombs $55-$5c, Gods_and_Heroes $c5-$cc, Lands_of_Havoc $4d-$53 (+$74), Cuthbert_in_the_Jungle $38-$43. Layout within the block is invariant: 2 bytes scratch pointer for the note-lookup subroutine, then 3 x 2-byte per-voice sequence pointers, then 3 x 1-byte per-voice duration counters. The master tempo counter lives in ZP on some titles (Crazy_Painter $3f, Lands_of_Havoc $53) and in absolute RAM on others (Hercules $91b4, Cuthbert_in_the_Jungle $57e2).", "layout": "Three blocks: (1) an 8-entry word pointer table, stride $18, pointing at 8 octave frequency tables of 12 words each (24 bytes = $18, hence the stride); (2) the engine (note-lookup subroutine, init, play); (3) three flat per-voice note streams. Table locations: Hercules $8c00, Crazy_Painter $5826, Cuthbert_in_the_Tombs $34b0, Gods_and_Heroes $2fed, Lands_of_Havoc $68f0, Cuthbert_in_the_Jungle $4a02." },
  "entry": { "init": "Hercules $8ceb, Crazy_Painter $5777, Cuthbert_in_the_Tombs $359b, Gods_and_Heroes $2fda, Lands_of_Havoc $681b. Cuthbert_in_the_Jungle is an RSID whose header init ($5a60) is a subtune dispatcher that installs a raster IRQ at $0314/$0315 and then falls into `jmp *` at $5a22 — the real music init is $5166 (see quirks).", "play": "Hercules $8d60, Crazy_Painter $57a9, Cuthbert_in_the_Tombs $35c3, Gods_and_Heroes $3100, Lands_of_Havoc $6851, Cuthbert_in_the_Jungle $5198 (header declares $0000). Gods_and_Heroes' declared play is an IRQ-handler-style wrapper that acks $d019/$dc0d/$dd0d before running the music body; the rest enter the music body directly." },
  "speed": "1x (one play call per frame), with an internal frame divider: play opens `dec <tempo> / beq body / jmp <rts>`, so the whole engine body only runs every N frames. N is a per-title constant reloaded on each tick — Lands_of_Havoc 2, Crazy_Painter 3, Cuthbert_in_the_Jungle 4, Hercules and Gods_and_Heroes 5. Cuthbert_in_the_Tombs is the one variant that varies it at runtime (7 or 8, chosen from a ZP flag) and also has a mute flag that skips the body entirely.",
  "data_format": { "order_list": "None. Each voice has ONE flat sequence, whose 16-bit start address is stored as a word in the file and copied into that voice's ZP pointer by init. There is no pattern/order indirection at all.", "patterns": "3-byte events, read via `lda (ptr),Y` after the pointer is advanced by `clc / adc #$03`: byte 0 = duration in tempo ticks, byte 1 = octave (0-7, index into the octave pointer table), byte 2 = note as a PETSCII/ASCII LETTER. The note byte is decoded by `sec / sbc #$41 / asl / tay`, i.e. 'A' = semitone 0 through 'L' = semitone 11 — the tune data is literally readable as letters in a hex dump. A duration byte of $00 terminates: the engine does `jsr init` and restarts the whole tune, resyncing all three voices.", "instruments": "None. init block-copies a fixed 25-byte image of $D400-$D418 (`ldx #$18 / lda tbl,X / sta $d400,X / dex / bpl`), which sets ADSR, pulse width, filter and volume once for the entire tune. Nothing after init ever writes those registers again.", "wavetable": "None.", "pulsetable": "None.", "filtertable": "None. The filter registers are set once from the 25-byte init image and never touched again, which is why the earlier 50-frame sample showed zero filter writes." },
  "effects": { "encoding": "None — there is no effect/command channel. The only per-tick behaviour beyond the note event is the gate: on the tick a new note starts the engine writes $21 (pulse waveform + gate on) to that voice's control register; on every other tick of the note it writes $20 (gate off). Frequency is written as hi then lo (`sta $d401 / stx $d400`) straight from the octave table, with no vibrato, portamento, arpeggio or pulse sweep anywhere in the code.", "commands": { "$00 duration": "end of sequence -> jsr init (whole-tune restart)" } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NOTES ARE STORED AS ASCII/PETSCII LETTERS, NOT SEMITONE NUMBERS — the single most distinctive thing about this driver, confirmed byte-exact in all 6 tagged files. The note byte of each 3-byte event is decoded by `sec / sbc #$41 / asl / tay`, so 'A' ($41) is semitone 0 and 'L' ($4c) is semitone 11; the octave comes from a separate byte indexing an 8-entry pointer table of 12-word frequency tables (stride $18). The tune data is therefore literally legible as letters in a hex dump. `sbc #$41` is present, identically, in every one of the 6 files.",
    "NO EFFECTS ENGINE AT ALL, AND ONE-TICK GATES. There is no wavetable, pulsetable, filtertable, arpeggio, vibrato or portamento — the entire per-frame job is: decrement a tempo divider; if it fires, for each voice decrement a duration counter and either start a new note (write freq hi/lo, then $21 = pulse + gate on) or write $20 (gate off). The gate is therefore high for exactly ONE tempo tick at note start and low for the rest of the note, which is what gives these tunes their clipped, plucked character. All ADSR/pulse-width/filter/volume state is set once by init from a fixed 25-byte $D400-$D418 register image and never written again. Whole engine: ~185-255 bytes of code and 94-131 instructions per file.",
    "EVERY TAGGED FILE IS A GAME RIP, SO THE PAYLOAD CONTAINS UNRELATED GAME CODE. Only 12-25% of each payload is engine code plus note data; the rest is whatever else sat in the ripped address range. Hercules is the clearest case (533 bytes of untouched game routines writing to $be00/$bf00/$da00/$db00 screen and colour RAM), and Cuthbert_in_the_Tombs even carries a fragment of the original ASSEMBLER'S SYMBOL TABLE at $3fcf-$3fff — readable PETSCII names ('TRANS', 'THOUS', 'DEFL1', 'DEFLT', 'DNO') each followed by an address. Don't mistake either for player data.",
    "THE RSID (Cuthbert_in_the_Jungle) HANGS SIDdecompiler UNLESS YOU OVERRIDE BOTH ENTRY POINTS, and the reason is worth recording because it looks like a tool defect: the file's header init ($5a60) is a subtune dispatcher that sets $0314/$0315 to a raster IRQ handler at $5a25, enables $d01a, CLIs, and then executes `jmp *` at $5a22 — a deliberate idle loop, so init NEVER RETURNS and the emulation spins forever (no error, no output, just a hang). The real music routines are init $5166 and play $5198; passing `-I20838 -P20888` (decimal, per the usual flag convention) makes the file disassemble cleanly in seconds. Its header dispatcher also only handles subtune 0 and subtune 4 correctly — the `bne` for any other value branches into the middle of an instruction at $5a06 — and subtune 4 works by block-copying $4877-$4976/$4900-$49ff down to $3a77/$3b00 and running from the copy, patching the end-of-sequence `jsr` target at $51c0-$51c2 to suit.",
    "CONFIRMED SOLO ONE-MAN-BAND DEVELOPER on all 6 C64 titles (Hercules 1984, Gods & Heroes 1986, Cuthbert in the Jungle 1984, Cuthbert in the Tombs 1984, Lands of Havoc 1985, Crazy Painter 1984) — Lemon64/Wikipedia credits list Bak as programmer, graphics, AND musician on every one, a self-taught bedroom coder of the classic 1983-86 UK budget-software mould. He built ~70 games total across Dragon 32, Tandy CoCo, C64/C16, Enterprise, Sinclair QL, and later Atari ST/Amiga (21 titles on 16-bit systems).",
    "GENUINELY WELL-DOCUMENTED FIRST-PERSON MATERIAL: an ST News Vol.4 Iss.4 interview (direct quotes, e.g. on his proudest achievement: 'getting to grips with the computer at all, because when I wrote the first games there wasn't any proper documentation') plus a detailed obituary give real biographical depth rare for this era's budget-software composers — born 4 April 1952, Nottingham; worked 16 years as a coal miner; lost a fingertip in a mining accident and used the compensation to buy an Acorn Atom, teaching himself assembler from there; died 6 February 2019 (age 66, diabetes complications).",
    "A GENUINE, SOURCED CROSS-PLATFORM LINK TO A KB-VERIFIED COMPOSER: Bak programmed 'Goldrunner' (Microdeal, 1987, Atari ST) with the score composed by [[rob-hubbard]] — confirmed via Wikipedia's infobox and its 'Video games scored by Rob Hubbard' category. The sequel 'Goldrunner II' (1988) had music by [[david-whittaker]] instead ('kind of keeping it in the family,' per a c64audio.com retrospective interview with Hubbard). This is a coder-and-composer collaboration on a DIFFERENT platform (Atari ST, not C64) — not a shared C64 driver, but a real, directly documented working relationship between this card's subject and two already-VERIFIED composers in this KB.",
    "A SECOND, DIRECT MICRODEAL COLLEAGUE LINK (found via research on [[keith-wood]]'s own card): Wikipedia's Microdeal article names its in-house programmers as Steve Bak, 'Rita Jay' (= [[keith-wood]], already carded in this KB), and Ed Scio — placing Bak and Wood at the same small company in the same era. No specific joint credit was found, just shared employer/period, but it's a real, sourced connection preserved here for cross-reference.",
    "AN UNCONFIRMED SUB-CLAIM WAS EXPLICITLY CAUGHT AND FLAGGED, NOT INCLUDED AS FACT: an earlier AI search-summary suggested David Whittaker supplied Rob Hubbard's original Atari ST sound driver for the first Goldrunner — this could not be corroborated in the actual c64audio.com article text and is left out.",
    "NAME-COLLISION RISK CHECKED AND RESOLVED: CSDb has an unrelated, differently-spelled scener 'Steve Bakke' (id=24594) — NOT this composer. No CSDb scener profile exists for 'Steve Bak' himself at all, consistent with him being a commercial-industry, pre-scene-era programmer rather than a demoscener. MobyGames' person page for him could not be directly verified (403 Forbidden on fetch) — findings rely on Lemon64/Wikipedia/ST News/obituary corroboration instead.",
    "'CRAZY PAINTER' ALSO EXISTS AS AN UNRELATED SAME-TITLED GAME on other 1980s platforms (Dragon 32/TRS-80/BBC Micro, likely different developers on those ports) — the C64 version specifically, the one relevant to this tag, is confirmed credited to Bak.",
    "Not confirmed in SIDId (no entry for this tag). Direct, sourced relationship to [[rob-hubbard]] and [[david-whittaker]] (both VERIFIED cards) via the Atari ST Goldrunner series — not encoded as a technical `shares_routine_with` edge since it's a cross-platform coder/composer collaboration, not shared C64 driver code. No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Bak, Steve - UNITED KINGDOM (ENGLAND)'): https://hvsc.de/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Hercules (full credits, traced file): https://www.lemon64.com/game/hercules",
    "Wikipedia — Hercules (1984 video game), confirms C64 design/programming credit: https://en.wikipedia.org/wiki/Hercules_(1984_video_game)",
    "Lemon64 — Gods & Heroes: https://www.lemon64.com/games/details.php?ID=1064",
    "Lemon64 — Cuthbert in the Jungle: https://www.lemon64.com/games/details.php?ID=1944",
    "uvlist — Cuthbert in the Tombs: https://www.uvlist.net/game-35872-Cuthbert+In+The+Tombs",
    "Lemon64 — Lands of Havoc: https://www.lemon64.com/game/lands-of-havoc",
    "Lemon64 — Crazy Painter: https://www.lemon64.com/game/crazy-painter",
    "ST News Volume 4 Issue 4 — Steve Bak interview (direct quotes, biography): https://st-news.com/issues/st-news-volume-4-issue-4/week-two/steve-bak/",
    "Vintage is the New Old — Steve Bak obituary: https://www.vintageisthenewold.com/amiga-atari-st-programmer-steve-bak-dies-at-66",
    "Wikipedia — Goldrunner (confirms Rob Hubbard score, Bak programming): https://en.wikipedia.org/wiki/Goldrunner",
    "c64audio.com — Rob Hubbard on the Atari 8-bit and ST platforms (Goldrunner II/Whittaker note): https://c64audio.com/blogs/news/rob-tari-rob-hubbard-on-the-atari-8-bit-and-st-platforms",
    "Local dataset: 6 files tagged Steve_Bak, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Steve_Bak` tag is English bedroom-coder Steve Bak's own C64 driver —
he programmed, drew graphics for, and composed music on all 6 of his
credited titles himself. He later became a notable Atari ST/Amiga
programmer, and his 'Goldrunner' was scored by KB-verified
[[rob-hubbard]] — a real, documented cross-platform link. Player-ID-
fingerprinted across 6 files, all his own.

## Quirks & gotchas

See the `quirks` array. Technically the load-bearing ones are: **notes are
stored as ASCII letters** ('A'-'L', decoded by `sbc #$41`), making the tune
data legible in a hex dump; **there is no effects engine at all** and gates
are held high for exactly one tempo tick; **every tagged file is a game rip**
so most of each payload is unrelated game code (one even carries a fragment
of the original assembler's symbol table); and **the RSID hangs
SIDdecompiler** until you override both entry points past its
`jmp *` IRQ-installer stub.

Historically: a **confirmed solo one-man-band pattern** across all 6 titles;
**unusually rich first-person biographical material** (an ST News interview
plus a detailed obituary); and a **genuine, sourced link to two
already-VERIFIED KB composers** (Rob Hubbard, David Whittaker) via his later
Atari ST Goldrunner series.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). Everything in
the `memory`/`entry`/`speed`/`data_format`/`effects` fields above is
derived from an original SIDdecompiler disassembly of all 6 tagged files,
done in the 2026-07-30 pass below.

The complete engine, in Hercules' labelling (124 instructions, 255 bytes):

- `$8cd0` note lookup — `pha / txa / asl / tax / lda tbl,X / sta $da /
  lda tbl+1,X / sta $db / pla / sec / sbc #$41 / asl / tay /
  lda ($da),Y / tax / iny / lda ($da),Y / rts`. Enters with X = octave and
  A = note letter; returns A = freq hi, X = freq lo.
- `init` — copy 25 bytes to `$d400-$d418`, load the three voice sequence
  pointers from words in the file, set all three duration counters to 1.
- `play` — `dec` the tempo counter, `jmp` to an `rts` unless it hits 0;
  otherwise run the same 20-instruction block three times (once per voice,
  with `$d400`/`$d407`/`$d40e` and `$d404`/`$d40b`/`$d412`).

## Verification

**VERIFIED (2026-07-30) — full disassemble -> reassemble -> byte-diff ->
trace-diff -> relocation-invariance pass on all 6 tagged HVSC files.**
Method: `SIDdecompiler.exe -a<decimal of the -v2 map's own Start: address>
-z -d -c -r`, then `64tass.exe -a --cbm-prg`. No hand-patching of
self-modified/drifted bytes was needed on any file (`-r` handles it).

| file | load / init / play | payload | reconstructed | byte-diff | writes / 300 frames |
|---|---|---|---|---|---|
| Hercules.sid | $8c00 / $8ceb / $8d60 | 1944 | $8c00-$9397 (1944, 100%) | **100.0000%** | 217 |
| Crazy_Painter.sid | $5777 / $5777 / $57a9 | 1468 | $5777-$5d32 (1468, 100%) | **100.0000%** | 18 |
| Gods_and_Heroes.sid | $2fda / $2fda / $3100 | 1571 | $2fda-$35fc (1571, 100%) | **100.0000%** | 140 |
| Lands_of_Havoc.sid | $681b / $681b / $6851 | 983 | $681b-$6be9 (975, 99.2%) | **100.0000%** | 249 |
| Cuthbert_in_the_Tombs.sid | $34b0 / $359b / $35c3 | 2896 | $34b4-$3fb6 (2819, 97.3%) | **100.0000%** | 131 |
| Cuthbert_in_the_Jungle.sid (RSID) | $4877 / $5166* / $5198* | 4639 | $4a06-$59d0 (4043, 87.2%) | **100.0000%** | 209 (x5 subtunes) |

`*` the RSID's header declares init `$5a60` / play `$0000`; `$5166`/`$5198`
are the real music routines found by hand (see quirks). Every trace above
is the reconstruction against the ORIGINAL payload, compared on full
`frame,cycle,register,old,new` tuples — 0 differing lines on all six,
including cycle counts.

**Non-tautological evidence (the tautology requirement).** Four of the six
reconstructions are byte-identical to the original, so their traces prove
nothing on their own. Each file was therefore ALSO rebuilt at a different
base with a non-zero low-byte delta (−$1234; Hercules additionally at
−$468b) and re-traced at the shifted init/play:

| file | relocated base | bytes differing at the same offsets | register-write diffs (frame,reg,old,new) |
|---|---|---|---|
| Hercules | $8c00 -> $4575 | 66 / 1944 | 0 / 217 |
| Crazy_Painter | $5777 -> $4543 | 40 / 1468 | 0 / 18 |
| Gods_and_Heroes | $2fda -> $1da6 | 68 / 1571 | 0 / 140 |
| Lands_of_Havoc | $681b -> $55e7 | 46 / 975 | 0 / 249 |
| Cuthbert_in_the_Tombs | $34b4 -> $2280 | 60 / 2819 | 0 / 131 |
| Cuthbert_in_the_Jungle | $4a06 -> $37d2 | 62 / 4043 | 0 / 209 x5 subtunes |

Cycle timestamps drift by −4..−6 on the non-page-aligned rebuilds, from
page-crossing penalties on the indexed `lda tbl,X` accesses. Confirmed as
page-crossing and not behavioural by a page-aligned control: Hercules
rebuilt at $8c00 -> $4c00 traces 217/217 writes identical INCLUDING every
cycle count (lesson 72a).

**Two relocation defects had to be repaired for that test, both of the
lesson-72(b)/77 class.** SIDdecompiler symbolises only the octave-pointer
table entries its own trace actually dereferenced and leaves the rest as
hardcoded page constants (`.byte $a0, $8c, $b8, $8c`), and it cannot
symbolise the `lda $8c00,X` / `lda $8c01,X` table-base operands at all
because the table base sits BELOW the disassembled Start address. Both are
invisible at the native base (byte-diff is a clean 100%) and only surface
on relocation. Fixed by re-emitting all 8 table entries and both operands
base-relative (in the `.asm` for Hercules, as a post-assembly binary patch
for the other five: 1-5 table entries and 0-2 code operands per file).

**Coverage gaps — the only part not closed.** Three files reconstruct less
than their full payload, and in each case the shortfall is a region
SIDdecompiler's trace never reached, not a region it got wrong:

- `Cuthbert_in_the_Tombs.sid`: $34b0-$34b3 (octave-table entries 0-1, never
  read) and $3fb7-$3fff (73 bytes = one unreached 24-byte voice-3 gate-off
  routine ending in `rts`, then the assembler symbol-table fragment).
- `Lands_of_Havoc.sid`: $6bea-$6bf1 (8 bytes, an unreached
  `lda #$20 / sta $d412 / jmp $6bcc` gate-off tail).
- `Cuthbert_in_the_Jungle.sid`: $4877-$4a05 (399 bytes: an alternate tune's
  init at $4882 plus its data) and $59d1-$5a95 (197 bytes: the RSID IRQ
  installer and subtune dispatcher).
- `Hercules.sid`: $8c00-$8c01 and $9397 were outside the traced range; both
  were restored by hand (base-relative pointer + one $00 byte), which is
  why Hercules reads 100% of 1944 rather than 1941.

**Family test (lesson 68) — all 6 files share one driver.** Longest-common-
substring is useless here (each title is assembled at a different base with
a different ZP block), so four operand-free opcode patterns were matched
instead: `48 8a 0a aa bd` (pha/txa/asl/tax/lda tbl,X), `68 38 e9 41 0a a8
b1` (pla/sec/sbc #$41/asl/tay/lda (zp),Y), `9d 00 d4 ca 10 f7` (the init SID
block-copy, hardware-fixed operand per lesson 76) and `aa c8 b1 ?? 60`. All
four hit in all 6 files, and the relative offsets from the first pattern are
IDENTICAL in every file: B at +$0e, D at +$16. Zero hits in the negative
controls (Hubbard's Monty_on_the_Run.sid, Galway's Wizball.sid). Every file
also carries the same 8-entry / $18-stride octave pointer table.

Superseded by this pass: the earlier 2026-07-14 note that
`Cuthbert_in_the_Jungle.sid` is "untraceable with this project's standard
tool". It is traceable — `sidm2-sid-trace.exe` drives it fine once you call
`$5166`/`$5198` directly instead of the header's IRQ-installing stub. The
earlier "57 register writes / 50 frames" figure for Hercules is also
reproduced exactly by the reconstruction.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (5 pages),
Wikipedia (2 pages), uvlist, ST News, an obituary, and c64audio.com.

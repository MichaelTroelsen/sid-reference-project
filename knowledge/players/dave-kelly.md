# Dave Kelly (player routine)

```json
{
  "id": "dave-kelly",
  "name": "Dave Kelly (player routine)",
  "aliases": ["Dave_Kelly"],
  "authors": ["Dave Kelly"],
  "released": "1988-1990 (Consult Software / TV Games era)",
  "status": "verified",
  "platform": "English composer Dave Kelly's own playroutine — a contract composer across two distinct UK dev-house relationships (Consult Software's Domark arcade-license conversions, and a recurring TV Games British-game-show-tie-in team), never credited as a coder on any confirmed title. Player-ID-fingerprinted across 6 files, all his own; 7 .sid files sit in HVSC's MUSICIANS/K/Kelly_Dave/.",
  "csdb_release": null,

  "memory": { "load_address": "Read from each file's own PSID header (never assume one value): Dragon_Spirit $a800, Kenny_Dalglish_Soccer $9800, Krypton_Factor $b000, Little_Puff $3af8, Every_Second_Counts $3686, Return_of_the_Jedi $c200, Vindicators $f000. The routine is assembled fresh per title at whatever base that title had free — nothing is position-independent and nothing is shared at a fixed address.", "zero_page": "ROUTINE A, verified on Dragon_Spirit ($80-$8d; the base differs per title): +$00 scratch (target of the $30/$35 bank idiom, written never read), +$01 row/phase counter, +$02 row index (the shared 8-bit Y for all three streams), +$03 tempo, +$04 written $01 at init and never read in this file, +$08/+$09 voice-1 stream pointer, +$0a/+$0b voice-2, +$0c/+$0d voice-3. ROUTINE B (Krypton_Factor) uses $d0-$e5 instead: a per-voice block of note-pointer / duration / gate-off counters.", "layout": "ROUTINE A (Dragon_Spirit, the reference build): $a800 init JMP, $a803 play JMP, $a806-$a816 stop routine, $a817-$a83e init body, $a83f-$a8e6 play body (214 bytes of code total), $a8e7-$a8ff 25-byte $d400-$d418 register image, $a900-$a946 frequency lo table, $a947-$a98d frequency hi table (71 entries each, only indices $00-$34 reachable), $a98e-$a993 three 16-bit stream pointers, $a994/$ab4e/$ad08 the three parallel note streams. Only ~12% of the payload is code. ROUTINE B (Krypton_Factor) additionally uses $0400-$045f / $0460-$04bf as a 96-entry frequency table BUILT AT RUNTIME by init — that region is write-then-read workspace, is not part of the .sid payload, and is what SIDdecompiler's -v2 map reports as Start: $0400, well below the file's $b000 load address." },
  "entry": { "init": "Per file, from the PSID header: $a800 / $9800 / $b4a0 / $3af8 / $3bb0 / $cf20 / $f016.", "play": "Per file: $a803 / $9803 / $b4a3 / $3b03 / $36dd / $ce33 / $f057 (called once per frame).", "stop": "THREE entry points, not two — there is an undeclared third routine the PSID header never references: it patches the play routine's first opcode to $60 (RTS), writes $20 to $d404/$d40b/$d412 to gate all three voices off, and (in some builds) zeroes $d418. Verified at $a806 on Dragon_Spirit (just past the two JMPs) and at $f000 on Vindicators (BEFORE init, which is why that file's -v2 Start is $f016, 22 bytes past its $f000 load address). init undoes it: Dragon_Spirit's init ends `lda #$c6 / sta $a83f`, restoring the DEC opcode the stop routine clobbered." },
  "speed": "1x (single play call per frame) on all 7 files. Vindicators adds a self-modified frame divider at the top of play (`inc <operand> / cmp #$05 / beq skip`) that discards 1 frame in 5, giving an effective 40 Hz update rate — a way to reach a tempo between two integer frame counts.",
  "data_format": { "order_list": "None. There is no order list, no pattern table and no indirection: each voice is ONE flat, linear byte stream, one byte per row. All three streams are indexed by a single shared 8-bit row counter (ZP+$02); when it wraps $ff->$00 the play routine INCs the high byte of all three pointers, so the three streams advance in exact lockstep for the whole tune.", "patterns": "N/A — see order_list. The three stream base pointers are copied at init from a 6-byte table of <lo,>hi pairs.", "instruments": "None. There is no instrument table. init block-copies a fixed 25-byte image over $d400-$d418: per voice PW=$0000, control=$20 (sawtooth), AD=$04, SR=$aa; filter registers 0; volume $0f. Every note on every voice for the whole tune uses that one sound. Every_Second_Counts is the only file that varies it, via a fourth 'control' stream (see effects).", "wavetable": "None.", "pulsetable": "None (pulse width is never written after init).", "filtertable": "None. No file writes $d415-$d417 and only Krypton_Factor writes $d418 after init." },
  "effects": { "encoding": "ROUTINE A: one byte per voice per row, tested in this order. $3f = restart (voice-1 stream only: JSR init, then re-read row 0 — this is the loop point). >= $35 = do nothing, i.e. the voice stays gated off for this row (rest/hold; the player treats the whole $35-$3e span identically even though the data clearly distinguishes $35 from $3e, so the editor's rest/tie distinction is lost in the player). < $35 = note index into the frequency lo/hi tables, then write $20 followed by $21 to that voice's control register (gate on, sawtooth). Row timing: at row start the counter is set to $80 | (tempo>>1); each frame DECs it; on reaching exactly $80 the player gates all three voices off ($20 to $d404/$d40b/$d412) and reloads the counter with tempo; on reaching 0 it starts the next row. With Dragon_Spirit's tempo of 5 that is 2 frames gate-on + 5 frames gate-off = 7 frames per row, i.e. a hard-staccato attack on every note.", "commands": { "$00-$34": "note index into the 71-entry frequency table (equal-tempered, base $0460, doubling every 12 entries; only $00-$34 = 53 semitones are reachable)", "$35-$3e": "rest / no retrigger (all values in this range behave identically)", "$3f": "restart tune from row 0 (JSR init) — voice-1 stream only" } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "TWO DISTINCT ROUTINES UNDER ONE TAG, both disassembled and byte-verified this pass. ROUTINE A (6 of 7 HVSC files: Dragon_Spirit, Kenny_Dalglish_Soccer, Little_Puff, Vindicators, Every_Second_Counts, Return_of_the_Jedi) is the flat parallel-note-stream player documented in data_format — ~214 bytes of code, one byte per voice per row, no instruments. ROUTINE B (Krypton_Factor alone) is a different and more capable design: note+DURATION byte PAIRS (so rows are not fixed-length), a per-voice ZP state block at $d0-$e5 with its own gate-off counter, and a 96-entry frequency table BUILT AT RUNTIME into $0400-$04bf by init rather than stored in the file. Both are 1988-era, and Every_Second_Counts (routine A) and Krypton_Factor (routine B) are the SAME publisher, SAME year, SAME programmer/artist team — so the two designs co-existed rather than one replacing the other.",
    "THE ROUTINE BANKS $01 TO READ ITS OWN NOTE DATA — and this is the single most useful fingerprint. Around every `lda (ptr),Y` stream fetch, routine A does `lda #$30 / sta $01` then `ldx #$35 / stx $01`, i.e. it switches ALL of $a000-$bfff/$d000-$ffff to RAM, reads one byte, and switches I/O back on. Confirmed intact on Return_of_the_Jedi, whose note streams genuinely live at $d420-$d680, underneath the I/O page. On three other files the HVSC rip has NEUTERED the operand to a harmless zero-page scratch address instead — Dragon_Spirit writes $80, Kenny_Dalglish_Soccer writes $40, Little_Puff writes $90 — because their data was relocated out from under I/O and leaving the real `sta $01` would have made $d400 invisible to the subsequent SID writes. Every_Second_Counts and Vindicators omit the idiom entirely. Do not read the $80/$40/$90 writes as meaningful state: they are dead writes in those files.",
    "NO ORDER LIST, NO PATTERNS, NO INSTRUMENTS — this is about as small as a three-voice player gets. The whole engine is 214 bytes on the reference build; ~88% of every .sid payload is raw note bytes and the frequency table. There is exactly one sound (sawtooth, AD $04, SR $aa) for the entire tune, and the only per-note parameter is pitch.",
    "AN UNDECLARED THIRD ENTRY POINT (stop) sits next to init/play in every routine-A file and is never referenced by the PSID header — see entry.stop. On Vindicators it sits BEFORE init, which is why that file's SIDdecompiler -v2 Start ($f016) lands 22 bytes past its PSID load address ($f000); relocating to the header's load address there produces a misaligned build (hard_won_gotcha 40).",
    "$3f IS ONLY CHECKED ON VOICE 1. Voices 2 and 3 test only `cmp #$35 / bcs`, so a $3f byte in their streams reads as an ordinary rest. The loop point of the tune is therefore defined by the voice-1 stream alone.",
    "TWO DISTINCT, CONFIRMED WORKING RELATIONSHIPS: (1) with Consult Software (Domark's own arcade-license conversion house) on Dragon Spirit (1989, the reference file — a C64 conversion of Namco's 1987 arcade original, adapting Shinji Hosoe's 'Area 1 (Paleozoic Era)' theme; programmer Keith A. Purkiss) and Vindicators (1990, Atari Games/Tengen license; developer Consult Software, programmer Ian Cognito, adapting Brad Fuller & Hal Canon's arcade 'Theme 3'); (2) a recurring TV Games team on two consecutive British game-show tie-ins in 1988 — Every Second Counts (design Richard Naylor, programming Colin Pimlott, graphics David Howcroft) and The Krypton Factor (same programmer/artist, design Richard Naylor & Richard Whelan).",
    "'EVERY SECOND COUNTS' CONFIRMED to be exactly the TV game-show tie-in the research brief hypothesized — a licensed C64/Spectrum/Amstrad adaptation of the real British quiz show, published by TV Games (a small UK label specializing in TV tie-ins) in 1988.",
    "NO EVIDENCE HE WAS A CODER: every credit list found separates 'Programming'/'Programmer' from 'Music'/'Musician', always naming a DIFFERENT person for each role across all 4 confirmed titles — unlike several other composers in this KB, no coding credit was ever found for him. The disassembly does not settle this either way: routine A is simple enough for a musician to have written, but nothing in it identifies its author.",
    "NAME-COLLISION RISK EXPLICITLY CHECKED AND RULED OUT: Wikipedia's 'Dave Kelly (musician)' is a DIFFERENT person (a British blues guitarist, b. 1947) — confirmed distinct, not conflated with this card's subject.",
    "CSDb COVERAGE FLAGGED AS UNVERIFIED, not confirmed either way: a CSDb search surfaced what looked like a plausible release list for him, but a direct fetch of one supposed release ID from that list resolved to an unrelated crack page ('Passing Shot') — those specific CSDb IDs are explicitly NOT trusted and are omitted from this card pending a manual re-check.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Kelly, Dave - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Own disassembly (2026-07-30) of all 7 HVSC files in MUSICIANS/K/Kelly_Dave/ via SIDdecompiler 0.8 + 64tass — see Verification.",
    "Lemon64 — Dragon Spirit (full credits, arcade-theme adaptation source): https://www.lemon64.com/game/dragon-spirit",
    "Lemon64 — Vindicators (full credits): https://www.lemon64.com/game/vindicators",
    "Lemon64 — Every Second Counts (full credits, confirms TV show tie-in): https://www.lemon64.com/game/every-second-counts",
    "Lemon64 — The Krypton Factor (full credits): https://www.lemon64.com/game/krypton-factor",
    "Local dataset: 6 files tagged Dave_Kelly, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Dave_Kelly` tag covers **two** hand-written playroutines, both now
disassembled and byte-verified. **Routine A** (6 of the 7 HVSC files) is a
minimal three-voice player: ~214 bytes of code, three parallel flat note
streams advanced in lockstep by one shared 8-bit row index, one hardcoded
sawtooth sound for the entire tune, and no order list, patterns, instruments,
wavetable, pulse table or filter. **Routine B** (Krypton Factor only) is a
different design — note+duration pairs and a runtime-built frequency table.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones for a reconstructor: the
**`sta $01` banking idiom** around every stream fetch (intact on Return of the
Jedi, whose note data really does live under the I/O page at `$d420-$d680`;
neutered to a scratch ZP address on three other rips); the **undeclared third
`stop` entry point**, which on Vindicators sits *before* `init` and shifts the
usable base 22 bytes past the PSID load address; and the fact that **`$3f`
(restart) is only tested on voice 1**.

## Disassembly notes

Reference build is Dragon Spirit, `$a800-$aec0`:

- `$a800 jmp init` / `$a803 jmp play` / `$a806` stop.
- init: copy 6 bytes of stream pointers into ZP, set tempo `$05`, block-copy
  the 25-byte `$d400-$d418` image, zero the row index, restore the `dec`
  opcode at the head of play.
- play: `dec` the phase counter; `beq` -> new row; `cmp #$80` -> gate-off half
  (gate all three voices, reload counter with tempo, `inc` row index, carry
  into the three pointer high bytes).
- new row: counter = `$80 | tempo>>1`, then for each voice fetch
  `(ptr),Y` and dispatch on the byte (`$3f` restart / `>= $35` rest /
  `< $35` note -> freq lo+hi, `$20` then `$21` to the control register).

## Verification

**VERIFIED (2026-07-30) — `status: verified`.** All **7** HVSC files in
`MUSICIANS/K/Kelly_Dave/` were disassembled, reassembled and trace-diffed this
pass. Recipe, identical for every file and with **no hand-patching anywhere**:

    SIDdecompiler.exe <file.sid> -o out.asm -a<decimal of the -v2 map's Start:> -z -d -c -r
    64tass.exe -a --cbm-prg -o out.prg out.asm

### Byte-diff (reassembly vs. the original PSID payload)

| File | load / init / play | subtunes | `-v2` Start | reassembled region | byte-diff |
|---|---|---|---|---|---|
| Dragon_Spirit | `$a800` / `$a800` / `$a803` | 1 | `$a800` | `$a800-$aec0` (1729 B) | **100.0000%** |
| Kenny_Dalglish_Soccer | `$9800` / `$9800` / `$9803` | 1 | `$9800` | `$9800-$9ed3` (1748 B) | **100.0000%** |
| Little_Puff | `$3af8` / `$3af8` / `$3b03` | 2 | `$3af8` | `$3af8-$3f1c` (1061 B) | **100.0000%** |
| Vindicators | `$f000` / `$f016` / `$f057` | 1 | `$f016` | `$f016-$f551` (1340 B) | **100.0000%** |
| Every_Second_Counts | `$3686` / `$3bb0` / `$36dd` | 3 | `$3686` | `$3686-$3bb7` (1330 B) | **100.0000%** |
| Return_of_the_Jedi | `$c200` / `$cf20` / `$ce33` | 3 | `$c200` | `$c200-$cf27` (3368 B) | **100.0000%** |
| Krypton_Factor | `$b000` / `$b4a0` / `$b4a3` | 1 | `$0400` | `$b000-$b724` (1829 B) | **100.0000%** |

Regions SIDdecompiler's emulation never touched and therefore did not emit
(pure data, no code): Dragon_Spirit 12 B, Kenny_Dalglish_Soccer 300 B,
Little_Puff 1 B, Vindicators 22 B (the `stop` routine, *before* the load
address), Every_Second_Counts 8 B, Return_of_the_Jedi 1881 B
(`$cf28-$d680` — the subtune 1/2 note streams, reached only through the
hardcoded pointer table at `$cef1`), Krypton_Factor 0 B. Overlaying each
reassembly onto its original payload and re-diffing gives **100.0000% of the
full payload on all 7 files**, and those full-payload builds trace
register-write- **and cycle-exact against the original on all 12 subtunes**
(300 frames each; 388 / 222 / 209 + 230 / 284 / 332 + 394 + 227 / 152 + 107 +
234 / 386 writes).

### Non-tautological evidence (relocation-invariance, lessons 69/70/72)

A 100% byte-exact build makes any trace against the original identical by
construction, so each file was **also rebuilt from the same disassembly at a
different base** and traced there. A relocated build is materially different
machine code (every absolute operand and pointer-table byte is re-emitted from
symbols), so an exact register-write match is a real structural test:

| File | relocated base | bytes differing from the native build | trace result |
|---|---|---|---|
| Dragon_Spirit | `$5100` | 16 / 1729 | **0 divergences over 750 writes / 600 frames, cycles included** |
| Kenny_Dalglish_Soccer | `$5000` | 24 / 1748 | 0 / 149 writes, cycle-exact |
| Little_Puff | `$50f8` | 22 / 1061 | 0 / 138 (sub 0) and 0 / 160 (sub 1), cycle-exact |
| Vindicators | `$5016` | 18 / 1340 | 0 / 192 writes, cycle-exact |
| Every_Second_Counts | `$5686` | 31 / 1330 | 0 / 224, 0 / 263, 0 / 150 (all 3 subtunes), cycle-exact |
| Return_of_the_Jedi | `$5200` | 20 / 3368 | 0 / 152 on subtune 0, cycle-exact |
| Krypton_Factor | `$1400` | 53 / 1829 | 0 / 386 writes / 300 frames, cycle-exact |

A second Dragon_Spirit rebuild at a *non*-page-aligned base (`$5123`, 32 / 1729
bytes differing) also matched all 139 writes on `(frame, register, value)` with
a uniform +1 cycle offset from one extra page-crossing — consistent with
lesson 70(a), not a behavioural difference.

**One stated limit.** Return_of_the_Jedi subtunes 1 and 2 are *not*
relocation-testable: their note streams live in the `$cf28-$d680` region
SIDdecompiler never traced, and the pointer table that reaches them (at
`$cef1`) is emitted as literal `.byte $20, $d4` constants rather than symbols,
so it does not relocate (the lesson 72(b) shape). Those two subtunes are
verified only by the full-payload byte-exact + trace-exact result above.

### Player-identity scan (lesson 68)

Longest-common-substring is useless here (each title is assembled fresh at a
different base with a different ZP block). Instead, five operand-free opcode
patterns from the verified disassembly were matched across all 7 payloads —
`a9 20 8d 04 d4 8d 0b d4 8d 12 d4` (gate-off triple), `4a 09 80` (row-counter
build), `c9 3f d0` (restart test), `c9 35 b0` (note/rest threshold),
`09 01 8d 04 d4` (gate-on). Six files hit the set with the diagnostic inner
spacings preserved (`BANK->BANK2` +$6, `BANK2->RESTART` +$4,
`NOTECMP->GATEON` +$16 identical in every one; Dragon_Spirit and Little_Puff
are offset-identical throughout, i.e. the same build). Krypton_Factor hits
**0 of 5** — which is what led to finding routine B.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (4 game pages), and this
pass's own disassembly of all 7 HVSC files.

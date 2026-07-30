# Frank Tout (player routine)

```json
{
  "id": "frank-tout",
  "name": "Frank Tout (player routine)",
  "aliases": ["Frank_Tout"],
  "authors": ["Frank G. Tout"],
  "released": "1984-1988 (Your Commodore magazine era)",
  "status": "verified",
  "platform": "British bedroom-coder Frank G. Tout's own playroutine — confirmed, on every title where credits could be found, as the SOLE author of code, graphics, AND music, a classic one-man-band type-in-listing profile. Mostly published via the UK magazine Your Commodore, later on budget labels (Nationsoft, Super Sparklers/Creative Sparks). Player-ID-fingerprinted across 6 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Read directly from all 9 HVSC PSID/RSID headers (2026-07-30). The 6 PSID files carrying the routine load at $9200 (Cherry_Picker, Four_Crowns_of_Adelim, Gator, Lady_Bug), $91f8 (Enclave) or $91d0 (Zenith); payloads run 629-2352 bytes, ending $9474-$9aff. The 3 remaining `_BASIC` files (Dog_Fight, Sammy_the_Slug, Scramble) are RSID at $801 with init=play=$0000 — BASIC type-in listings, and a masked opcode-pattern scan finds none of the routine in them. SIDdecompiler's -v2 'Start:' equals the PSID load address on all 6 PSID files (no gotcha-40 case here).", "zero_page": "NONE. Verified across all 6 disassemblies: not one zero-page addressing mode is used anywhere in init or play. All state lives in absolute locations inside the payload.", "layout": "Uniform and hardcoded across all 6 files: play routine at a FIXED absolute $9200; two state bytes at $9300 (sequence position, used as the Y index) and $9301 (frame countdown to the next note); note tables page-aligned from $9400 up. 1-voice variant: 3 tables (freq-hi -> $d401, freq-lo -> $d400, duration -> $9301) at $9400/$9500/$9600 (Cherry_Picker, Four_Crowns, Gator) or $9280/$9380/$9400 (Lady_Bug, the smallest file). 3-voice variant (Enclave, Zenith): 7 tables at $9400/$9500 (v1 hi/lo -> $d401/$d400), $9600/$9700 (v2 -> $d408/$d407), $9800/$9900 (v3 -> $d40f/$d40e), $9a00 (duration). Code is tiny: 86-88 bytes in the 1-voice files, 170 (Enclave) / 210 (Zenith) bytes in the 3-voice ones; everything else is note tables plus $00/$ff padding." },
  "entry": { "init": "Read from the PSID headers; two conventions. 1-voice files place init immediately AFTER the play routine: $924c (Cherry_Picker), $924c (Four_Crowns), $9250 (Gator), $924a (Lady_Bug). 3-voice files place init AT the load address, ahead of play: $91f8 (Enclave), $91d0 (Zenith). Init is minimal — Enclave is literally `lda #$1f / sta $d418 / jmp <restart>`; Zenith additionally zeroes $d400-$d417 in a loop, presets per-voice AD/SR ($d405=$0e, $d40c=$0f, $d413=$1f), writes $dc05=$26, then $d418=$0f.", "play": "$9200 on ALL SIX files — a fixed absolute address, not load+N (the two 3-voice files load below $9200 specifically so that play still lands there). Called once per frame from the game's IRQ." },
  "speed": "1x (single speed). One play call per frame; note length is a per-note frame count decremented at $9301. Zenith's init writes $dc05=$26 (CIA1 timer A high byte) but the PSID play call rate is unaffected by it.",
  "data_format": { "order_list": "None. There is no order list, no pattern indirection and no per-voice sequencing — a single global byte at $9300 indexes straight into flat, parallel, page-aligned note tables, incremented once per note event for all voices at once.", "patterns": "None. The whole tune is one flat linear sequence. The end is a hardcoded terminator index compared with `cpy #imm`: $9d (Cherry_Picker), $9c (Four_Crowns), $54 (Gator), $75 (Lady_Bug), $ff (Enclave, Zenith); on match the routine resets $9300=0, gates all voices off and loops the tune forever.", "instruments": "None. Waveform and ADSR are per-tune constants written inline as `lda #imm / sta $d4xx` on every note event, identical for every note — e.g. Cherry_Picker gates off with $d404=$00, sets $d405=$0e / $d406=$0f, then $d404=$11 (triangle + gate). Enclave/Zenith do the same three times, once per voice, with per-voice constants.", "wavetable": "None.", "pulsetable": "None (Zenith writes fixed pulse-width constants $d402=$03/$d40a=$02/$d411=$03 inline per note; Enclave writes $d403; neither modulates them).", "filtertable": "None. $d415-$d417 are never written by any of the six files. Enclave's init sets $d418=$1f, i.e. volume 15 with the low-pass bit on, but since no voice is ever routed into the filter via $d417 that bit is inert." },
  "effects": { "encoding": "None — the routine has no effect engine at all. Per note event it writes only: gate-off, ADSR constants, gate-on with a fixed waveform, then the 16-bit frequency for each voice and the new duration. There is no arpeggio, vibrato, portamento, slide, pulse sweep or filter sweep anywhere in the code. Frequencies are stored as raw 16-bit SID values split across two byte tables, not as note numbers, so all pitch is table-literal.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED SOLE AUTHOR OF EVERYTHING on every title where full credits could be found: Cherry Picker (the traced file, a single-screen platformer, Your Commodore magazine, March 1985 issue — Programmer, Graphics, AND Music all credited to Frank G. Tout) and Zenith (a horizontal-scrolling shoot-em-up, 'Super Sparklers'/Creative Sparks budget tape label, 1988, £2.99 — again Programmer/Graphics/Music all Tout). This one-man-band pattern strongly supports the working theory that 'Frank_Tout' is genuinely his own hand-rolled playroutine, not a shared third-party tool.",
    "'ENCLAVE' (a file in his folder) is confirmed as a real 1987 Nationsoft vertically-scrolling shoot-em-up, with Tout as CSDb's credited SID composer — though a full original credits page could not be located (only a later crack release page, with no original credits listed, was found).",
    "A LEMON64 FORUM POST (2013) independently corroborates his profile as a recurring Your Commodore magazine type-in-listing contributor: a user recalls 'Anyone remember F.G.Tout? I think he had a listing in every edition of Your Commodore' — consistent with an amateur/hobbyist-turned-budget-developer trajectory rather than a commercial-studio composer.",
    "9 TOTAL CSDb-CATALOGUED COMPOSITIONS found, 1984-1988: The Four Crowns of Adelim, Gator, Sammy the Slug (1984); Cherry Picker, Dog Fight, Lady Bug, Scramble (1985); Enclave (1987, Nationsoft); Zenith (1988, Creative Sparks) — most tied to Your Commodore magazine specifically.",
    "NO CSDb SCENER PROFILE OR MOBYGAMES PAGE FOUND for him at all — searched both name and musician-search types, only unrelated results ('Toutatis', 'Adrian Pertout') matched. Consistent with a magazine-listing hobbyist rather than a demoscene or commercial-studio figure.",
    "COUNTRY NOT CONFIRMED BEYOND CIRCUMSTANTIAL INFERENCE: HVSC Musicians.txt has no country field for him at all; nationality is inferred ONLY from Your Commodore being a UK publication — deliberately NOT asserted as a confirmed fact on this card.",
    "DISASSEMBLY CONFIRMS THE SELF-WRITTEN-ROUTINE HYPOTHESIS (2026-07-30): the routine is 86-210 bytes of straight-line code with no zero page, no order list, no patterns, no instrument table and no effect engine — a flat parallel-table sequencer that gates a note, writes raw 16-bit frequencies from byte tables and counts down frames. Nothing about it resembles a distributable third-party editor; it is exactly the shape of a hand-rolled magazine-listing routine.",
    "PLAY IS HARDCODED AT ABSOLUTE $9200 ON ALL SIX PSID FILES — including the two 3-voice ones (Enclave, Zenith) that deliberately load LOWER ($91f8/$91d0) so that their extra init code fits in front while play still lands exactly on $9200. Likewise $9300/$9301 are always the position/duration state bytes and the note tables always start on a page boundary at or above $9280. Tout evidently kept one fixed memory map and re-assembled it per game.",
    "TWO VARIANTS, CONFIRMED BY A MASKED-OPCODE SIGNATURE SCAN (relative offsets, per lessons-learned 68 — longest-common-substring does not work here because every absolute operand differs per file). A 1-voice variant (Cherry_Picker, Four_Crowns_of_Adelim, Gator, Lady_Bug) matches the play-entry skeleton at $9200 with the voice-1 frequency block at +$2b and the tune-restart block at +$40 — identical offsets in all four. A 3-voice variant (Enclave, Zenith) matches the same skeleton with those blocks at +$5f/+$8a. Both variants share the identical `ldy $9300 / cpy #term / beq restart / dec $9301 / lda $9301 / cmp #$00 / bne exit` header byte-for-byte modulo operands. Two unrelated control files (Hubbard's Monty_on_the_Run, Galway's Wizball) and the three Frank_Tout `_BASIC` RSID files match none of the patterns.",
    "THE THREE `_BASIC` FILES ARE NOT THIS ROUTINE. Dog_Fight_BASIC, Sammy_the_Slug_BASIC and Scramble_BASIC are RSID, load $801, init=play=$0000 — BASIC type-in listings that presumably POKE the SID from BASIC. They carry the Frank_Tout composer tag but contain none of the player's opcode signatures, and cannot be traced through the PSID init/play convention at all.",
    "NO WRITE TO $D415-$D417 IN ANY FILE — the filter is genuinely unused. Enclave's init writes $d418=$1f (volume 15 plus the low-pass bit) but never routes a voice into the filter via $d417, so the low-pass bit is inert. A naive reading of that single byte would wrongly suggest the routine has filter support.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Tout, Frank G.', no country field): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Cherry Picker (full solo credits): https://www.lemon64.com/game/cherry-picker",
    "Lemon64 — Zenith (full solo credits): https://www.lemon64.com/game/zenith",
    "CSDb release 114041 — a later crack of Enclave (no original credits listed): https://csdb.dk/release/?id=114041",
    "emurom.net — Enclave (1987, Nationsoft): https://www.emurom.net/us/emulation/commodore-64-roms/detail-76563-enclave.html",
    "Lemon64 forum — recollection of his Your Commodore magazine listings: https://www.lemon64.com/forum/viewtopic.php?t=45925&start=15",
    "Local dataset: 6 files tagged Frank_Tout, 1 composer (see knowledge/COVERAGE.md)",
    "Original disassembly (this project, 2026-07-30): SIDdecompiler 0.8 + 64tass 1.60 against HVSC/MUSICIANS/T/Tout_Frank/*.sid; 6/6 PSID files 100.0000% byte-exact, relocated builds register-write- and cycle-exact (see Verification)"
  ]
}
```

## Overview

The `Frank_Tout` tag is British bedroom-coder Frank G. Tout's own
playroutine — a classic 1980s magazine type-in-listing one-man-band,
confirmed as the sole author of code, graphics, AND music on every title
checked. Player-ID-fingerprinted across 6 files, all his own, mostly
published via the UK magazine Your Commodore.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones are now the **disassembly
findings**: play hardcoded at absolute `$9200` on every file, `$9300`/
`$9301` as the only state, flat parallel note tables with no order list
or effect engine, and a clean 1-voice / 3-voice split confirmed by
relative opcode-pattern offsets. These directly corroborate the
**confirmed solo-author-on-everything pattern**, which was the original
basis for the self-written-routine hypothesis. Also note the **honestly unconfirmed nationality**
(inferred only circumstantially from the magazine's UK origin, not
asserted as fact) and a **corroborating forum recollection** of his
recurring magazine presence.

## Disassembly notes

Nothing published anywhere (not in the realdmx RE repo, no STIL note) —
the disassembly recorded on this card is original, produced 2026-07-30
with `SIDdecompiler` + `64tass` against the HVSC files themselves.

The whole player, in one paragraph: `play` reads the sequence index from
`$9300` into Y; if it equals the tune's hardcoded terminator it resets to
0, gates every voice off and returns. Otherwise it decrements the frame
counter at `$9301` and returns immediately unless it hit zero. On a note
event it advances `$9300`, writes a fixed gate-off / ADSR / gate-on-with-
waveform sequence of `lda #imm / sta $d4xx` pairs per voice, then loads
`tableN,Y` into each SID frequency register and the new duration into
`$9301`. That is the entire engine — 88 bytes on Cherry Picker.

## Verification

**`status: verified` (2026-07-30). All 6 `Frank_Tout` PSID files
reconstructed 100.0000% byte-exact, with a non-tautological relocated
build tracing register-write- AND cycle-exact on every one.**

Recipe (identical for all six, first pass, **no hand-patching**):

```
SIDdecompiler.exe <file>.sid -o<f>.asm -a<decimal of the -v2 map's Start:> -z -d -c -r
64tass.exe -a --cbm-prg -o <f>.prg <f>.asm
```

`-v2` reported `Start:` exactly equal to the PSID load address on all six
files, so no gotcha-40 relocation correction was needed. `-r` was used
throughout; zero self-modified/drifted bytes had to be restored.

| File | load / init / play | payload | reassembled | byte-diff |
|---|---|---|---|---|
| Cherry_Picker | $9200 / $924c / $9200 | 1181 | 1181 | **100.0000%** (0 diffs) |
| Four_Crowns_of_Adelim | $9200 / $924c / $9200 | 1180 | 1180 | **100.0000%** (0 diffs) |
| Gator | $9200 / $9250 / $9200 | 1112 | 1108 | **100.0000%** (0 diffs over 1108) |
| Lady_Bug | $9200 / $924a / $9200 | 629 | 629 | **100.0000%** (0 diffs) |
| Enclave | $91f8 / $91f8 / $9200 | 2312 | 2311 | **100.0000%** (0 diffs over 2311) |
| Zenith | $91d0 / $91d0 / $9200 | 2352 | 2351 | **100.0000%** (0 diffs over 2351) |

All 6 are single-subtune. Three files reassemble a few bytes short of the
original payload, and those bytes are accounted for exactly: `Gator`
`$9654-$9657` = `$00 $00 $00 $00`, `Enclave` `$9aff` = `$0f`, `Zenith`
`$9aff` = `$14` — trailing bytes of the final duration table that sit past
the tune's terminator index and are therefore never read (`-v2`'s `End:`
stops one byte earlier on each). They are not a gap in the disassembly of
any reachable code.

**Non-tautological check (the point of this run).** A byte-identical
rebuild makes the trace-diff true by construction, so each file was ALSO
re-emitted at a different base with a non-zero low-byte delta
(`-$40c0`: $9200 -> $5140, $91f8 -> $5138, $91d0 -> $5110) and traced at
the correspondingly shifted init/play. Each relocated binary is
materially different from the original at the same offsets — 22 (Cherry
Picker, Gator, Lady_Bug), 24 (Four_Crowns) and 30 (Enclave, Zenith)
bytes, i.e. every absolute operand in the player — and every one still
reproduced the original's register-write stream **exactly, including the
cycle column**:

| File | frames | writes (orig = reasm = relocated) | diffs vs original |
|---|---|---|---|
| Cherry_Picker | 100 | 49 | 0 |
| Four_Crowns_of_Adelim | 100 | 52 | 0 |
| Lady_Bug | 100 | 29 | 0 |
| Gator | 1500 | 183 | 0 |
| Zenith | 1500 | 766 | 0 |
| Enclave | 1500 | 945 | 0 |

(Gator/Zenith/Enclave were re-traced at 1500 frames because they are slow
starters — 10 and 16 writes respectively in the first 100 frames.) Traces
via `sidm2-sid-trace.exe` on `.prg` files rebuilt from the PSID payload
(never on the `.sid` directly, per lessons-learned 22); compared
programmatically on `frame,register,old,new` tuples and separately with
the cycle column included — both gave 0 divergences.

Cherry Picker's earlier figure on this card (27 writes / 50 frames) is
consistent with the 49 writes / 100 frames measured here.

**Honest scope.** By byte count these reconstructions are mostly data
pass-through (Cherry Picker: 88 code bytes vs 1093 table/padding bytes),
so the byte-diff alone would be weak evidence per lessons-learned 65 —
but the code region is fully resolved into instructions (nothing
reachable is left as `Unreferenced data`), and the relocation test is
what carries the verification: a single byte misclassified as data, or
one operand left hardcoded, would have broken the relocated build
immediately. The three `_BASIC` RSID files are explicitly out of scope
(they do not contain this routine — see quirks).

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages), CSDb,
and emurom.net.

# Sound Programming Language / SPL (Chris Grigg)

```json
{
  "id": "chris-grigg",
  "name": "Sound Programming Language / SPL (Chris Grigg)",
  "aliases": ["Chris_Grigg"],
  "authors": ["Chris Grigg"],
  "released": "1987-1991 (Epyx)",
  "status": "verified",
  "platform": "Epyx's internal 'Sound Programming Language' (SPL), built by American composer-tool-builder Chris Grigg — CONFIRMED both coder and musician, directly matching this project's hypothesis. Supported the SID's built-in filter, which Grigg knew varied between individual chips and deliberately used sparingly, on shakers and noise sound effects. Grigg went on to build the Atari Lynx sound driver and GEMS (later used for Sega Genesis/Mega Drive audio, including Andre Agassi Tennis). Player-ID-fingerprinted across 5 files, all by Grigg himself.",
  "csdb_release": null,

  "memory": { "load_address": "Per-title, no fixed base — read each file's own PSID header (all 5 verified 2026-07-30): California_Games $4000/$809a, Games_Summer_Edition $0860/$965e, Games_Winter_Edition $2b88/$9dc8, L_A_Crackdown $b000/$c309, Legend_of_Blacksilver $e000/$fc47. The ENGINE base is not always the load address: in Games_Winter_Edition the file front is song data and the engine block sits at $6800; in Games_Summer_Edition/L_A_Crackdown/California_Games the engine base coincides with the load address.", "zero_page": "Very light and contiguous, allocated from $02 upward — L_A_Crackdown uses $02-$05 only; California_Games $02-$06; Games_Summer_Edition $02-$09; Legend_of_Blacksilver $02-$09 plus a $80-$83 copy-loop pointer block; Games_Winter_Edition $02-$05 plus $0f/$f0. No fixed zero-page map across titles.", "layout": "The engine block opens with a JMP dispatch table (>=8 entries) that is the game-facing API; all offsets below are relative to the ENGINE base (not the PSID load address) and are byte-identical across the California_Games/L_A_Crackdown/Games_Winter_Edition revision: +$00 init ($625 or $630), +$03 play (+$9f), +$06 (+$21, JSRs the three routines below in sequence), +$09 (+$50, silence all 3 voices), +$0c (+$65, silence one voice, voice index in X), +$0f (+$2b, set mode flag = 2), +$12 (+$31), +$15 (+$4a, set mode flag = 1). Games_Summer_Edition/Legend_of_Blacksilver use a later, larger revision with the same table shape but different offsets (+$235/+$156/+$188/+$19d/+$160/+$166/+$182 and +$712/+$60a/+$63c/+$651/+$614/+$61a/+$636 respectively — identical inter-vector deltas +$32/+$47/+$a/+$10/+$2c in both, vs +$2f/+$44/+$a/+$10/+$29 in the earlier revision)." },
  "entry": { "init": "Per-file, taken from the PSID header: California_Games $75b1, Games_Summer_Edition $27cb, Games_Winter_Edition $3fef, L_A_Crackdown $b700, Legend_of_Blacksilver $f31f. Note the PSID init/play vectors are per-title wrappers, NOT the engine's own dispatch table — e.g. L_A_Crackdown's PSID play $b003 is engine-base+$03, which JMPs to the real play at +$9f.", "play": "Per-file: California_Games $7603, Games_Summer_Edition $2861, Games_Winter_Edition $404a, L_A_Crackdown $b003, Legend_of_Blacksilver $f2e0. Called from the VBI (single-speed)." },
  "speed": "Single-speed 50Hz on all 5 files — PSID speed field is 0x00000000 in every one (verified 2026-07-30).",
  "data_format": { "order_list": "TODO (not decoded)", "patterns": "TODO (not decoded)", "instruments": "TODO (not decoded)", "wavetable": "TODO (not decoded)", "pulsetable": "TODO (not decoded)", "filtertable": "No per-frame filter table. Filter registers are touched once, at init, and then never modulated: over 120-200 frame traces the whole family writes $d415-$d418 at most 4 times total per subtune (L_A_Crackdown: 1 write, filter_res_control=$F0 with zero voices routed; Games_Summer_Edition: 4, one each of filter_freq_lo/hi/res/mode; Games_Winter_Edition: 2, both filter_mode_volume i.e. master volume only; California_Games and Legend_of_Blacksilver: 0). This is now a MEASURED confirmation of Grigg's own documented 'used it sparingly' philosophy rather than a single-tune inference, though what remains is that SPL barely uses the filter at all in these five tunes, not that it lacks the capability." },
  "effects": { "encoding": "TODO (not decoded)", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "RECONSTRUCTED AND VERIFIED 2026-07-30 — all 5 tagged HVSC files reassemble 100.0000% byte-exact from an original SIDdecompiler disassembly (`-a<decimal of the -v2 map's own Start:> -z -d -c -r`), and every one of them also passes a NON-TAUTOLOGICAL relocation/ZP-relocation trace test (see Verification). Two files needed a non-default relocation base per hard_won_gotcha 40: Games_Winter_Edition's -v2 Start ($2b91) is 9 bytes ABOVE its PSID load address ($2b88), and Legend_of_Blacksilver's Start ($c700) is $1900 BELOW its load address ($e000).",
    "SPL EMBEDS A PRE-ASSEMBLED SECOND COPY OF ITSELF IN Legend_of_Blacksilver: the file's init contains a 9-page block copy (`lda #$c7 / sta z83 / lda (z80),Y / sta (z82),Y`) that moves a code image stored at $f348.. down to $c700, then runs it. This is why SIDdecompiler's -v2 Start reports $c700 — a copy DESTINATION below the load address, i.e. lessons_learned 62's case rather than the fixed-low-RAM-workspace case of lessons 31/38/60. The distinguishing tell was exactly lesson 62's: an obvious page-copy loop is present, and the map marks $c700-$d418 `#`/`_` (execute+write), not plain `w`. With `-r` the whole destination region emits as $00 (lesson 78), which is harmless — byte-diff and trace only the $e000-$fc47 payload window.",
    "ALL SID WRITES GO THROUGH TWO PER-VOICE REGISTER-OFFSET TABLES, which is why every SPL SID access is `STA $d40x,Y` ($99) rather than a literal `STA $d4xx` — a raw-opcode scan that only looks for $8D would find nothing (lessons_learned 65's trap). In L_A_Crackdown the tables are at $b44d = {$00,$07,$0e} (voice base offset) and $b44a = {$04,$0b,$12} (that voice's control-register offset); the voice-silence routine does `LDX voice / LDY $b44d,X / LDA #$00 / STA $d400,Y / STA $d401,Y / LDY $b44a,X / STA $d401,Y / STA $d402,Y` — i.e. it clears freq lo/hi via the base offset and attack_decay/sustain_release via the control offset, in 8 instructions with no per-voice code duplication.",
    "THE 5 TAGGED FILES ARE ONE ENGINE IN (AT LEAST) TWO REVISIONS, established by lessons_learned 68's offset-signature method (62 masked opcode patterns auto-derived from one file's decoded play routine, operands wildcarded except immediates/branches/hardware $d4xx, then required to hit at a CONSISTENT relative offset). Scanning from L_A_Crackdown: L_A_Crackdown 62/62 and Games_Winter_Edition 62/62 (60 at one modal offset) — same build; California_Games 39/62; Games_Summer_Edition and Legend_of_Blacksilver 26/62. Scanning from Games_Summer_Edition: Games_Summer_Edition 62/62, Legend_of_Blacksilver 50/62, the other three 19-24/62. So the grouping is {L_A_Crackdown, Games_Winter_Edition} == {California_Games, close} as one revision, {Games_Summer_Edition, Legend_of_Blacksilver} as a later/larger one — corroborated independently by the engine JMP-table inter-vector deltas quoted in `memory.layout`.",
    "LONGEST-COMMON-SUBSTRING WOULD HAVE GIVEN THE WRONG ANSWER HERE, exactly as lessons_learned 68 predicts: the longest run of identical bytes around the shared engine anchor between any two SPL files is only 9-10 bytes (below lesson 66's own 14-byte noise floor), because each title was assembled at a different base with different data-table addresses, so essentially every absolute operand differs. Whole-block aligned identity from the anchor is only 3-14% for four of the five pairs (74-88% for the one same-revision pair, L_A_Crackdown vs Games_Winter_Edition). Only the masked-pattern + relative-offset test separates 'same source' from noise.",
    "THE SIBLING CARD'S DRIVER IS CONFIRMED GENUINELY DISTINCT, NOT A RELABELLED SPL: all three [[chris-grigg-lucasfilm]] files (Habitat, Maniac_Mansion, PHM_Pegasus) score 0/62 on the SPL signature in all three scan directions (from L_A_Crackdown, from California_Games, from Games_Summer_Edition) — the same score as the negative controls (Hubbard's Monty_on_the_Run, Galway's Wizball). Structural corroboration: the Lucasfilm files' SID stores are $8D/$9D absolute and absolute,X into $d415-$d418 and $d400/$d401, with no per-voice offset table and no engine JMP dispatch table at all. The two cards should stay separate; no `shares_routine_with` edge is warranted.",
    "CONFIRMED COMPOSER-TOOL-BUILDER, not just a composer using someone else's tool: VGMPF states Grigg 'developed SPL (sound programming language)' at Epyx, that it 'supported SID's built-in filter', and that he 'knew that the filter varied between chips and used it sparingly, on shakers and noise sound effects' — a genuine first-party-sourced technical design philosophy, directly matching the initial research hypothesis. He also built the Atari Lynx sound driver and GEMS (later used for Sega Genesis/Mega Drive audio, e.g. Andre Agassi Tennis).",
    "BIOGRAPHY: American, b. ~1960/61. C64 developer at Waveform Corporation 1983-85; after it folded, co-founded Future Arts, introduced to Lucasfilm Games via an Atari-developer contact. Freelanced for Electronic Arts and Epyx starting 1987; became Epyx's 'music and sound director' after his first game there. Left Epyx 1991; later sound designer for Pixar, then Line 6 (guitar amps). Currently chairman of the MIDI Manufacturers Association / works at MIPI Alliance — a long, well-documented professional career.",
    "CALIFORNIA GAMES (1987, Epyx/US Gold, the traced file) — CONFIRMED via Wikipedia: 'The sound design for the original version of California Games was done by Chris Grigg, a member of the band Negativland.' A retrospective source gives the fuller credit 'Music by Christopher Grigg and Gil Freeman.'",
    "'GAMES_SUMMER_EDITION' IDENTIFIED PRECISELY: this is 'The Games: Summer Edition' (1988, Epyx/US Gold) — NOT the earlier Summer Games (1984) or Summer Games II (1985), both of which PREDATE Grigg's 1987 arrival at Epyx (no credit ties him to either, and any such claim should be treated as unverified/likely wrong). Lemon64 credits Music/Sound on Summer Edition to Bob Vieira, Chris Ebert, and Chris Grigg — a recurring collaborator, Chris Ebert, also appears alongside Grigg elsewhere (per an unverified search-summary, not directly fetched) on the Amiga ports of California Games and Winter Games; Ebert is not currently carded in this KB.",
    "A PLAUSIBLE, UNCONFIRMED additional SPL-scored title: DeepSID hosts 'Legend_of_Blacksilver.sid' in his composer folder — The Legend of Blacksilver (1988, Epyx RPG) fits his tenure there, but no explicit music-credit text was independently confirmed for it (search-only evidence, not page-verified). Treated as probable, not confirmed.",
    "TWO CLAIMS EXPLICITLY DISCARDED AS UNVERIFIED: a claimed NES-version music-arrangement credit for David Wise (adapting Grigg's tunes) and a 'Louie Louie' title-track claim both appeared only in AI-search-synthesized snippets, never confirmed via a direct primary-source fetch — NOT included as fact.",
    "A SECOND, EARLIER, GENUINELY DISTINCT DRIVER EXISTS FOR THIS SAME COMPOSER, now carded separately as [[chris-grigg-lucasfilm]] (tag `Chris_Grigg_2`): before Epyx, Grigg worked at Lucasfilm Games (~1985-87), co-designing the sound driver for 'Habitat' (Lucasfilm's pioneering graphical MMO) alongside Randy Farmer, which was then adapted by Aric Wilmunder into early SCUMM's own music driver — used on 'Maniac Mansion' (1987), on which Grigg is credited for arranging the music data into the SCUMM engine. This SPL card's own 5 files (all Epyx-era, from 1987 onward) are unaffected by this finding, but the two drivers should not be conflated — see the Lucasfilm-era card for full detail.",
    "Not confirmed beyond the bare SIDId name/author fields already used above. Direct relationship to [[chris-grigg-lucasfilm]] noted above (same composer, different employer/driver/era). No other known relationship found to any composer/tool already in this KB — Grigg was a US Epyx in-house tool-builder/composer, entirely separate from the UK/European demoscene lineage most of this KB's other composers come from (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Grigg, Chris - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "VGMPF — Chris Grigg (biography, SPL description, Lynx/GEMS work): https://www.vgmpf.com/Wiki/index.php/Chris_Grigg",
    "Wikipedia — California Games (sound design credit): https://en.wikipedia.org/wiki/California_Games",
    "FRGCB retrospective — California Games (full music credit): http://frgcb.blogspot.com/2017/06/california-games-epyxus-gold-1987-part-1.html",
    "Lemon64 — The Games: Summer Edition (1988, full Music/Sound credits): https://www.lemon64.com/game/games-summer-edition",
    "DeepSID — Chris Grigg composer folder (Legend of Blacksilver lead): https://deepsid.chordian.net/?file=MUSICIANS%2FG%2FGrigg_Chris%2FLegend_of_Blacksilver.sid",
    "Local dataset: 5 files tagged Chris_Grigg, 1 composer (see knowledge/COVERAGE.md)",
    "Own disassembly/reassembly/trace pass, 2026-07-30: SIDdecompiler 0.8 + 64tass 1.60 + sidm2-sid-trace, on all 5 HVSC MUSICIANS/G/Grigg_Chris Chris_Grigg-tagged files"
  ]
}
```

## Overview

The `Chris_Grigg` tag is Epyx's internal 'Sound Programming Language'
(SPL), built by American composer-tool-builder Chris Grigg — confirmed
both a genuine coder and musician, with a documented technical philosophy
(sparing filter use, since he knew it varied between individual SID
chips). Grigg's other work includes the Atari Lynx sound driver and GEMS
(later used on Sega Genesis). Player-ID-fingerprinted across 5 files,
including California Games (1987), all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **confirmed, first-
party-sourced design philosophy** for filter use, directly matching the
research hypothesis; his **long, well-documented career** beyond the C64
(Pixar, Line 6, MIDI Manufacturers Association); and a **precisely
identified 'Games_Summer_Edition'** title, with the earlier Summer Games
titles explicitly ruled out as predating his Epyx tenure.

## Disassembly notes

No published source (not in the realdmx RE repo, no STIL note). An
original disassembly of all 5 tagged files now exists (2026-07-30, this
project's own pass) — see Verification. Recipe that worked, first try, no
hand-patching, on every file:

```
SIDdecompiler.exe <file>.sid -o<f>.asm -a<DECIMAL of the -v2 map's Start:> -z -d -c -r -v1
64tass.exe -a --cbm-prg -o <f>.prg <f>.asm
```

Relocation bases used: California_Games `-a16384` ($4000),
Games_Summer_Edition `-a2144` ($0860), Games_Winter_Edition `-a11153`
($2b91 — the map's Start, 9 bytes above the PSID load address),
L_A_Crackdown `-a45056` ($b000), Legend_of_Blacksilver `-a50944` ($c700 —
the map's Start, $1900 *below* the load address, because it is a runtime
copy destination). Code fraction is healthy (L_A_Crackdown: 771
instruction lines / ~1776 instruction bytes vs 3098 data bytes, ~36%
code), so this is a real disassembly and not lessons_learned 65/78's
pass-through case.

## Verification

**`status: verified` (2026-07-30) — full disassemble → reassemble →
byte-diff → trace-diff pass on all 5 tagged HVSC files, plus a
non-tautological relocation control for each.**

Byte-diff of the reassembled payload against the original PSID payload:

| File | load / init / play | subtunes | compared | match |
|---|---|---|---|---|
| California_Games.sid | $4000 / $75b1 / $7603 | 68 | 16536 of 16539 | **100.0000%** |
| Games_Summer_Edition.sid | $0860 / $27cb / $2861 | 33 | 36351 of 36351 | **100.0000%** |
| Games_Winter_Edition.sid | $2b88 / $3fef / $404a | 82 | 29240 of 29249 | **100.0000%** |
| L_A_Crackdown.sid | $b000 / $b700 / $b003 | 1 | 4874 of 4874 | **100.0000%** |
| Legend_of_Blacksilver.sid | $e000 / $f31f / $f2e0 | 27 | 7240 of 7240 | **100.0000%** |

Zero differing bytes anywhere. Two files are covered slightly short of
their full payload, and both shortfalls are named rather than glossed:
California_Games `$8098-$809a` (3 trailing bytes, never touched by the
emulated trace) and Games_Winter_Edition `$2b88-$2b90` (9 leading bytes,
`01 01 fe 02 02 fe 03 03 fe`, below the -v2 map's own Start and never
accessed). Legend_of_Blacksilver's reassembly additionally carries a
$c700-$dfff block that is *not* file content — it is the runtime copy
destination, zero-filled by `-r`; the table's "compared" column is the
$e000-$fc47 payload window only.

**Because `-r` makes the native reassembly byte-identical, a trace
against the original at the native base proves nothing.** Each file was
therefore ALSO rebuilt at a different base (delta `+$123`, deliberately
non-page-aligned so low-byte operand relocation is exercised too) and
traced against the original, comparing `(frame, register, old_val,
new_val)` tuples with the cycle column stripped:

- L_A_Crackdown → $4123: relocated build differs from the original in
  **770 of 4874 bytes (15.80%)**, 200 frames, **803 / 803 writes
  identical, 0 divergences**.
- California_Games → $4123: 7 subtunes (0/1/5/17/33/50/67), 120 frames
  each — 48/268/226/36/11/6/11 writes, **0 divergences**.
- Games_Summer_Edition → $0983: 6 subtunes (0/1/7/16/25/32) —
  339/605/33/85/434/564 writes, **0 divergences**.
- Games_Winter_Edition → $2cb4: 6 subtunes (0/1/9/30/55/81) —
  468/69/300/732/657/168 writes, **0 divergences**.
- Legend_of_Blacksilver: the `+$123` address relocation FAILS (0 writes),
  for a fully explained reason — SIDdecompiler only partially symbolises
  the embedded pre-assembled $c700 code image at $f348 (it emits a mix of
  `<lc789, >lc789` symbolic entries and raw `$c7` page constants), so on
  relocation the copied image is internally inconsistent. This is
  lessons_learned 70(b)/72(b): a failed relocation test is one-directional
  evidence only. A **zero-page relocation** (`-Z32`) was used instead as
  the non-tautological control — it produces a build differing in **104 of
  13640 bytes** that still traces **0 divergences** across 6 subtunes
  (0/1/6/13/20/26 — 396/47/31/8/32/11 writes).

Cycle timestamps do drift on the address-relocated builds (e.g.
L_A_Crackdown frame 0 write 0 at cycle 4969 vs 4844) — page-crossing
penalties from the changed intra-page offset, exactly lessons_learned
70(a); the write *sequence* is identical.

Prior pass's figure of "32 register writes / 50 frames, 0 filter writes"
for California_Games is consistent with what was measured here (48 writes
/ 120 frames on subtune 0, 0 filter writes); the wider sweep shows the
family is not uniformly sparse — Games_Winter_Edition subtune 30 writes
732 registers in 120 frames.

**Sibling-card question, answered.** The `chris-grigg-lucasfilm`
(`Chris_Grigg_2`) files are a genuinely different engine, not the same
code under another tag — 0/62 signature hits in all three scan directions,
identical to the Hubbard/Galway negative controls. Details and method in
the `quirks` array.

**Not closed:** the song data format itself. `data_format.order_list` /
`patterns` / `instruments` / `wavetable` / `pulsetable` and
`effects.encoding` remain `TODO` — the reconstruction is byte- and
trace-exact but the pattern/sequence byte encoding has not been decoded.
Best next lead: L_A_Crackdown is the tractable file (1 subtune, 4874
bytes, engine base = load address $b000); the per-voice state block sits
at `$b43e-$b4b0` (mode flag $b43e, voice-state $b486,X, note/duration
$b49a,X and $b4ad,X, all indexed by voice 0-2), and the sequence fetch is
reached via `jsr $b152` from the play routine at `$b09f`.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, Wikipedia, a
retrospective blog, Lemon64, and DeepSID.

# Shaun Southern (Mr Chip driver)

```json
{
  "id": "shaun-southern",
  "name": "Shaun Southern (Mr Chip driver)",
  "aliases": ["Shaun_Southern"],
  "authors": ["Shaun Richard Southern"],
  "released": "1983-1987 (Mr Chip Software era; earliest reconstructed file Jackpot 64, 1983)",
  "status": "verified",
  "platform": "CONFIRMED to be the SAME Shaun Southern who later became famous for Lotus Esprit Turbo Challenge, Trailblazer, and Super Cars at Magnetic Fields (formerly Mr Chip Software) on Amiga/ST — this tag documents his EARLIER, C64-era work (1984-87), where he was a true one-man band: coder, graphic artist, AND musician on nearly all his own titles. Player-ID-fingerprinted across 5 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "VARIES PER TITLE - there is no fixed base. All 23 PSID/RSID headers read directly (2026-07-30): $0800 Hummdinger, $0840 Labyrinth, $0c00 Trailblazer, $1000 Kikstart/Otherworld/Project_X, $1180 Rollaround, $1828 Laserwheel, $1ba8 Kikstart_II, $1c00 Pacmania, $2700 Hero_of_the_Golden_Talisman, $28db Proof_of_Destruction, $2b00 Video_Meanies, $2b20 Ad_Infinitum/Dizasterblaster, $2db7 Super_Snake_Simulator, $5de0 Jackpot_64, $6316 Operation_Fireball, $7100 Duck_Shoot, $9000 Cosmic_Causeway, $9480 Olympic_Skier_1986, $9600 Olympic_Skier_1984, $b6a0 Super_Scramble_Simulator. Every header carries load-address 0, i.e. the real base is the payload's own first two LE bytes.", "zero_page": "ALSO VARIES PER TITLE, which is itself the strongest evidence these are separate hand-written drivers rather than one engine: Dizasterblaster $11/$30/$31/$32; Ad_Infinitum $22/$23; Pacmania $08/$09; Otherworld $13-$1a; Trailblazer $61-$66; Labyrinth $b9-$bd+$fb; Hero_of_the_Golden_Talisman $b9-$bd/$c0/$c1/$fb; Hummdinger $94-$9c/$fc-$ff; Kikstart $f0-$f3 (block-copy pointers); Jackpot_64 $fb-$fd; Cosmic_Causeway ~30 locations across $04-$d8.", "layout": "Typical shape (Dizasterblaster, 1984, 698B): note-frequency lo table at the load address itself, hi table at load+$28, four per-voice step tables at load+$50/$d0/$170/$f0-ish, engine last ($2d00-$2dd9, ~218 instruction bytes). Larger titles (Hero, 6400B) instead put freq lo/hi tables at $3080/$30c0 and three parallel per-voice byte streams at $3100/$3600/$3b00, with the engine at the FRONT ($2700-$29xx)." },
  "entry": { "init": "Per title, from the PSID header - $2db2 Dizasterblaster, $2e80 Ad_Infinitum, $2900 Hero, $1c7b Labyrinth, $1180 Hummdinger, $a900 Cosmic_Causeway, $bcc7 Super_Scramble, $1000 Kikstart/Otherworld, $28db Proof_of_Destruction, $7200 Duck_Shoot. init is frequently NOT at the load address and is often ABOVE play.", "play": "Per title - $2d00 Dizasterblaster, $2e00 Ad_Infinitum, $27d7 Hero, $1c90 Labyrinth, $1262 Hummdinger, $a903 Cosmic_Causeway, $bd30 Super_Scramble, $32aa Kikstart (OUTSIDE the payload - see quirks), $7100 Duck_Shoot (== load address). Two RSIDs declare play $0000: Olympic_Skier_1986's real per-frame routine is $9a34 (recovered this run from the $0314/$0315 vector its init installs, confirmed by a 400-frame trace: 294-297 writes/subtune); Jackpot_64 has NO play routine at all (see quirks)." },
  "speed": "1x (single-speed, per-frame play call) on every traced file, but the ENGINE work is frame-divided by a zero-page counter and most of the play calls are an immediate RTS: Dizasterblaster steps every 10th frame (inc $30 / cmp #$0a), Hero every 9th (inc $b9 / cmp #$09), Labyrinth every 12th (cmp #$0c). Measured write density over 400 frames therefore ranges from 137 writes (Ad_Infinitum) to ~1,100 (Hummdinger, Rollaround, Super_Scramble).",
  "data_format": { "order_list": "Mostly ABSENT - the simpler drivers have no order list at all. Dizasterblaster uses a 16-bit-ish free-running position: $31 counts 0..$bf then wraps and adds $20 to a section offset $32 (wrapping at $80), so the 'song' is one long linear sweep through 4 step tables. Hero/Labyrinth use a 16-bit index in $ba/$bb added to a fixed table base to form an indirect pointer in $bc/$bd - again linear, no pattern indirection.", "patterns": "One byte per step per voice, in PARALLEL streams (one contiguous table per voice), not interleaved rows. The byte is a note index into the frequency tables; a reserved value means rest/hold ($00 in Dizasterblaster, $01 in Hero).", "instruments": "NONE. There is no instrument table anywhere in the traced engines - ADSR is a single hardcoded constant written to every voice at the top of play (AD=$09 Dizasterblaster/Kikstart_II/Super_Scramble, $0a Ad_Infinitum, $0b Hero/Labyrinth, $0f Hero's alternate entry; SR=$00 in all of them), and the waveform is a hardcoded $21 (sawtooth+gate) with a $00-then-$21 gate reset on every note start.", "wavetable": "None.", "pulsetable": "None (no $d402/$d403 writes in the small drivers; Super_Scramble writes a fixed $d402/$d409 pair once at init).", "filtertable": "None. No $d415-$d417 writes in Dizasterblaster/Hero/Labyrinth; a few titles (Super_Scramble, Kikstart_II) write $d417 once with a fixed constant at init and never again." },
  "effects": { "encoding": "There is no effect-command byte and no effect column anywhere in these drivers. The only per-note event is the hardcoded gate-off/gate-on retrigger.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THERE IS NO 'MR CHIP DRIVER' - the single most load-bearing finding of the 2026-07-30 reconstruction pass. All 23 HVSC files in MUSICIANS/S/Southern_Shaun were disassembled and reassembled; they do NOT share a playroutine. Lesson-68's shared-routine test (match short opcode patterns with NO address operands, then require their RELATIVE OFFSETS to agree) FAILS across the family: the zero-page layout is different in essentially every file (see memory.zero_page), and the anchor-to-anchor offsets disagree even between the two most similar files. Concretely: the 'sta $d405 / sta $d40c' AD-setup anchor is followed by the SR-setup anchor at +8 bytes in Dizasterblaster/Kikstart_II/Super_Scramble/Super_Snake, at +11 in Ad_Infinitum/Labyrinth, and at +304 in Hero_of_the_Golden_Talisman; the 3-voice AD/SR form is absent entirely from 16 of 23 files. This is a solo developer re-writing a small sequencer per title, not a reusable driver - which matches the documented one-man-band working pattern rather than contradicting it.",
    "THE CLOSEST THING TO A LINEAGE is Labyrinth <-> Hero_of_the_Golden_Talisman: identical zero-page allocation ($b9 frame divider, $ba/$bb 16-bit step index, $bc/$bd indirect data pointer), the same 'lda #$0b / sta $d405 / sta $d40c / sta $d413' opener, and the same 'a9 00 85 b9 / e6 ba / a6 ba / bd ..' step-advance sequence. But their relative offsets differ (step-advance is at +19 from the AD anchor in Hero, +30 in Labyrinth; the frame-divider test is at +256 vs +22), so by this project's own criterion they are an EVOLVED VARIANT PAIR, not one build of one source. Do not record a shares_routine_with edge on the strength of the shared idioms alone.",
    "PAGE-RELOCATABLE ONLY, and this is a property of Southern's own code rather than a reconstruction defect - established this run by a delta sweep, not by inference. Hero_of_the_Golden_Talisman and Cosmic_Causeway keep a table of LOW BYTES ONLY ('l27f7 .byte <l27a2, <l27b0, <l27be, <l27d3') which the engine pokes into the operand of a JSR whose HIGH byte stays in the instruction ('sta l27eb+1 / sta l27e8+1'), so every dispatch target must stay on the page the JSR was assembled for. Sweeping the relocation delta's low byte shows the break to the exact byte: Hero traces register-write-exact at deltas +$2000/+$2008/+$200c/+$2020/+$202c and breaks at +$2030 (its highest target low byte is $d3, and $d3+$30 crosses the page); Cosmic_Causeway is exact through +$1028 and breaks at +$102a ($d6+$2a crosses). Any relocation control on these files must therefore use a whole-page delta.",
    "KIKSTART IS A BLOCK-COPY LOADER, NOT A RESIDENT PLAYER - the one file whose relocation control cannot pass at any base. Its PSID play address ($32aa) sits outside its own 2069-byte payload ($1000-$1814) because init runs four passes of a copy loop ('jsr l1019' x4) that reads source/destination pointer pairs out of a raw byte table at $1054-$105b and moves four blocks into place via (zf2),Y -> (zf0),Y before 'jmp $180d'. Those pointers are plain data, so SIDdecompiler cannot relocate them; the reassembly is byte-exact and traces exactly at the native address, but a relocated build produces 0 SID writes on both subtunes. This is the lesson-66(2)/78 shape, and the tell is the same: play address outside [load, load+len).",
    "JACKPOT_64 (1983) IS A BLOCKING BUSY-WAIT PLAYER with no play routine whatsoever - the earliest and most primitive thing in the catalogue, and the reason its RSID header declares play $0000. init calls $5f00, which plays the ENTIRE tune inline inside one loop: for each step it writes $d407/$d408/$d40b, then burns time in six chained 'iny / bne' delay loops with an outer 'dex / bne', gate-offs, six NOPs, and repeats until the step counter reaches its end marker. It is untraceable in any frame-based model (sidm2-sid-trace included) not because of a tool limitation but because there is no per-frame entry point to call.",
    "ONE VOICE, THEN TWO, THEN THREE - the catalogue reads as a visible skills progression: Jackpot_64 (1983) drives voice 2 only from a blocking loop; Dizasterblaster (1984) drives voices 1+2 from a proper play routine with note tables; Ad_Infinitum/Labyrinth/Hero add voice 3 and a 16-bit song position. None of them ever grew an instrument table, an effect column, or a filter - ADSR and waveform stay hardcoded constants in every single file (AD $09-$0f, SR $00, waveform $21 sawtooth+gate) across the whole 1983-1987 span.",
    "IDENTITY CONFIRMED WITH HIGH CONFIDENCE, a genuinely notable find: this is the SAME Shaun Southern (full name Shaun Richard Southern, b. 1967/68, England) who co-founded Mr Chip Software (Llandudno, Wales, with Andrew Morris, ~1983), which was renamed Magnetic Fields (Software Design) Ltd. in 1988 and went on to build Lotus Esprit Turbo Challenge (1990), Super Cars, Kikstart, and Trailblazer on Amiga/ST/C64. The C64-era material this tag documents clearly PREDATES and is DISTINCT from that later racing-game fame.",
    "CONFIRMED SOLO ONE-MAN-BAND, and notably NOT primarily a dedicated musician like most composers in this KB: on 'Dizasterblaster' (Americana/Mastertronic 1984, originally released as 'Ad Infinitum' by Mr Chip Software), Lemon64's credits list Southern for ALL THREE roles — Coder, Graphics, AND Musician. C64-Wiki (German) confirms the same solo pattern held across Pacmania, Trailblazer, and Lotus Esprit Turbo Challenge — his SID work is a side-effect of solo/small-team game development, not a dedicated composing career, which may plausibly explain unusual/idiosyncratic driver code compared to specialist-composer tags in this KB.",
    "A LARGE, WELL-DOCUMENTED CATALOG under his own credited name (23 SID-music matches on CSDb spanning 1983-2012, though most files fall outside this project's own 5-file local dataset): Kikstart: Off-Road Simulator, Trailblazer, Cosmic Causeway: Trailblazer II, Super Scramble Simulator, P.O.D.: Proof of Destruction, Speed King, F1 Simulator, Operation Fireball, Pacmania, Kwazy Kwaks, Hero of the Golden Talisman, Kikstart II, Laserwheel (1987, MAD/Mastertronic).",
    "A CSDb SCENER-PROFILE SEARCH RETURNED NOTHING, but a Demozoo profile (id=59614, 'Shaun Southern / Magnetic Fields') DOES exist, crediting him with the C64 demo 'Musicblast 1.0' (Mad Cracking Agency, Jan 1987) plus later, non-C64 productions (a Super Cars 2 playable demo, a 2002 GBA intro, Lotus Esprit Turbo Challenge Amiga tracks) — a thin but real demoscene footprint alongside his commercial career.",
    "LATER CAREER: after Magnetic Fields, worked at Playdemic Ltd; per VGMPF, no longer composes.",
    "Not confirmed in SIDId (no entry for this tag). Documented professional collaborators are Andrew Morris (Mr Chip/Magnetic Fields co-founder, coder) and, later, Barry Leitch (Lotus Turbo Challenge 2, Top Gear arrangement) — neither is currently in this KB. No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Southern, Shaun - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Dizasterblaster (full credits, traced file): https://www.lemon64.com/games/details.php?ID=3039",
    "Mastertronic Collectors Archive — Dizasterblaster review: https://mastertronic.co.uk/game-review-dizasterblaster-commodore-64-americana/",
    "Lemon64 — Shaun Southern game list: https://www.lemon64.com/games/list.php?list_individual=shaun-southern",
    "CSDb — Laserwheel (1987, MAD/Mastertronic): https://csdb.dk/sid/?id=26313",
    "VGMPF — Shaun Southern (full career table, birth details): https://www.vgmpf.com/Wiki/index.php/Shaun%20Southern",
    "C64-Wiki (DE) — Shaun Southern (Mr Chip/Magnetic Fields history): https://www.c64-wiki.de/wiki/Shaun_Southern",
    "MobyGames — Shaun Southern: https://www.mobygames.com/person/2641/shaun-southern/",
    "Demozoo — Shaun Southern / Magnetic Fields (id=59614): https://demozoo.org/sceners/59614/",
    "Local dataset: 5 files tagged Shaun_Southern, 1 composer (see knowledge/COVERAGE.md)",
    "Primary technical source for everything above: original disassembly of all 23 files in HVSC MUSICIANS/S/Southern_Shaun/ (SIDdecompiler 0.8 -r + 64tass 1.60), 2026-07-30 — see Verification"
  ]
}
```

## Overview

The `Shaun_Southern` tag documents the EARLY, C64-era work (1984-87) of
Shaun Southern — CONFIRMED to be the same person who later became famous
for Lotus Esprit Turbo Challenge and Trailblazer at Magnetic Fields
(formerly Mr Chip Software) on Amiga/ST. On the C64 he was a genuine
one-man band: coder, graphic artist, and musician all at once. Player-
ID-fingerprinted across 5 files, all his own.

## Quirks & gotchas

See the `quirks` array. Two load-bearing ones now, from different kinds
of evidence:

- **There is no single "Mr Chip driver."** The 2026-07-30 reconstruction
  disassembled all 23 HVSC files and they do not share a playroutine —
  different zero-page layouts, different data layouts, disagreeing
  anchor-to-anchor offsets. The card title is retained as the tag name,
  but it names a *body of work*, not an engine.
- **The confirmed cross-era identity**: this is a rare case in this KB
  where a composer's C64-era work predates a much more widely-recognized
  later career (Lotus Esprit Turbo Challenge, Trailblazer), and where he
  was notably NOT a dedicated musician but a solo developer whose music
  was one of three roles he filled himself. The reconstruction is
  *consistent* with that: no instrument table, no effect column, no
  filter, ADSR and waveform hardcoded, in every file across 1983-1987.

## Disassembly notes

Nothing published anywhere (not in the realdmx RE repo, no STIL note, no
author source). Everything in the `memory`/`entry`/`speed`/`data_format`/
`effects` fields above is derived from an original disassembly produced in
this project on 2026-07-30 — see Verification.

The engines are tiny. Dizasterblaster's whole player is 103 instruction
lines / ~218 bytes at `$2d00-$2dd9`; the other ~480 bytes of the file are
note tables. The core loop is worth quoting because every later title is a
variation on it:

```
play    inc z30 / lda z30 / cmp #$0a / beq step / rts   ; work every 10th frame
step    ... advance z31 (0..$bf), z32 (+$20, wrap $80)
        lda #$09 / sta $d405 / sta $d40c                ; AD, both voices
        lda #$00 / sta $d406 / sta $d40d                ; SR, both voices
        ... lda <steptable>,X / tay / beq skip
        lda $2b20,Y / sta $d400                         ; freq lo table
        lda l2b48,Y / sta $d401                         ; freq hi table
        lda #$00 / sta $d404 / lda #$21 / sta $d404     ; gate reset, saw+gate
```

Note `lda $2b20,Y` — the frequency-lo table is deliberately based four
bytes BELOW the file's own load address region that the disassembler
reaches, because note indices 0-3 are never played and Southern simply
did not store them (this is why SIDdecompiler's `-v2` map reports
`Start: $2b24` against a `$2b20` load address). The same trick appears in
Ad_Infinitum (`Start: $2b33`), Project_X, Trailblazer, Kikstart_II,
Video_Meanies and Olympic_Skier_1984.

## Verification

**Byte-exact + relocation-controlled register-write match (2026-07-30) —
`status: verified`, with the scope stated precisely below.**

Method (this project's standard recipe):
`SIDdecompiler.exe <file> -a<DECIMAL of the -v2 map's own "Start:" address> -z -d -c -r -v1`
then `64tass.exe -a --cbm-prg -o out.prg out.asm`. The `-r` flag did all
the work — **zero hand-patching was needed on any of the 23 files**, no
self-modified-byte restoration, no `bit`/zero-page re-encoding fixes.

**Byte-diff — all 23 HVSC files in `MUSICIANS/S/Southern_Shaun/`:**
`100.0000%` exact, `0` differing bytes, over **59,287 compared bytes =
99.37% of the 59,665-byte total payload**. The uncovered 378 bytes are
regions SIDdecompiler's emulation never touched, and every one of them
lies at the head or tail of a file: `Ad_Infinitum` 19B `$2b20-$2b32`;
`Dizasterblaster` 4B `$2b20-$2b23`; `Kikstart_II` 1B `$1ba8`;
`Olympic_Skier_1984` 5B `$9b05-$9b09`; `Olympic_Skier_1986` 13B
`$9b93-$9b9f`; `Operation_Fireball` 16B `$6ab0-$6abf`; `Project_X` 11B
`$1000-$100a`; `Proof_of_Destruction` 147B `$3410-$34a2`;
`Super_Scramble_Simulator` 80B `$cfb0-$cfff`; `Trailblazer` 2B
`$0c00-$0c01`; `Video_Meanies` 80B `$2b00-$2b4f`.

**The tautology problem, and the control that answers it.** Because `-r`
made every reassembly byte-identical to its original, a trace of the
native build against the original is guaranteed to match by construction
and proves nothing. So each file was ALSO rebuilt from the same
disassembly at a different base and traced there, with any absolute
literal SIDdecompiler left unrelocated (the below-load-address frequency
table base — lesson 77) rewritten by the same delta. Two control bases
were built per file: **A** = page-aligned delta (usually `+$2000`), **B**
= delta with a non-zero low byte (`+$2037`).

**Control A result: 20 of 23 files pass — 62 subtunes, 400 frames each,
31,576 register writes, 0 divergences.** Cycle timestamps are identical
too (the delta is page-aligned, so there is no page-crossing drift).
Passing files: Ad_Infinitum, Cosmic_Causeway-Trailblazer_II (5 subtunes),
Dizasterblaster, Duck_Shoot, Hero_of_the_Golden_Talisman (4), Hummdinger
(6), Kikstart_II (2), Labyrinth (2), Laserwheel (3), Olympic_Skier_1984
(6), Operation_Fireball (3), Otherworld, Pacmania, Project_X,
Proof_of_Destruction (4), Rollaround, Super_Scramble_Simulator (12),
Super_Snake_Simulator (6), Trailblazer, Video_Meanies. The relocated
binaries differ from the originals at 2-61 byte positions each (e.g.
Cosmic_Causeway 53, Laserwheel 61, Super_Scramble 61, Dizasterblaster 9,
Pacmania only 2), so the strength of the control varies by file — it is
weakest on Pacmania and Duck_Shoot, which are almost pure data.

**Control B result: 18 of 20 pass on register writes.** The two failures
(Hero_of_the_Golden_Talisman, Cosmic_Causeway subtune 1) are NOT a
reconstruction defect — they are the page-relative self-modified-JSR
constraint in Southern's own code, localised to the exact delta by a
sweep (see the third quirk). Cycle counts drift on Control B as expected
from page-crossing penalties on indexed addressing.

**Explicitly NOT closed by a relocation control — 3 of 23 files, each for
a documented structural reason, all still 100.0000% byte-exact:**
- `Kikstart.sid` — block-copy loader with raw pointer data (quirk 4).
  Native build traces exactly (523 + 60 writes / 400 frames, 2 subtunes);
  relocated builds produce 0 writes at both bases.
- `Olympic_Skier_1986.sid` — RSID whose engine writes the KERNAL IRQ
  vector at `$0314/$0315`, which sits inside SIDdecompiler's captured
  range and cannot be relocated. Real play routine `$9a34` was recovered
  from that install code and the native build traced 6/6 subtunes exact
  (294-297 writes each) — a genuine new fact, but a tautological trace.
- `Jackpot_64.sid` — blocking busy-wait player, no per-frame entry point
  to trace at all (quirk 5). Byte-diff only.

**Two smaller findings worth carrying forward.** (1) The card's previous
figure of "40 register writes / 50 frames" for Dizasterblaster is
consistent with what was measured here (260 writes / 400 frames) once the
10-frame divider is accounted for. (2) The local dataset's "5 tagged
files" figure is a player-ID tag count, not a catalogue count — the HVSC
composer folder holds 23 files and all 23 were reconstructed.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (2 pages),
Mastertronic Collectors Archive, CSDb, VGMPF, C64-Wiki (DE), MobyGames,
and Demozoo.

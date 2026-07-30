# Jason Briggs (ECP driver)

```json
{
  "id": "jason-briggs",
  "name": "Jason Briggs (ECP driver)",
  "aliases": ["Jason_Briggs"],
  "authors": ["Jason J. Briggs"],
  "released": "1987-1989 (ECP era)",
  "status": "verified",
  "platform": "Australian one-man-band developer Jason J. Briggs's own driver — he programmed, drew the graphics for, AND composed the music on all 5 of his confirmed C64 games, all published by ECP (Entertainment & Computer Products Pty. Ltd., a Gold Coast, Australia publisher/distributor). No SIDId entry exists for this tag, consistent with a self-written, never-catalogued routine. Player-ID-fingerprinted across 5 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Per-file, read from each PSID header (all 5 use load address 0 in the header field, real address embedded as the payload's first 2 LE bytes): Bert_the_Bug_Bites_Back $3b80-$40b4, Bojo $1964-$1d00, Electro_World $3398-$39e6, Poga $39c0-$3f7c, Tiger_Tank $1b80-$1fff. Each file is one self-contained blob: ~$b0-$1d0 bytes of player code plus 6 (or 9) hardcoded parallel data tables.", "zero_page": "NONE. Confirmed zero zero-page references in all 5 disassemblies (SIDdecompiler -z, which labels every ZP access, emitted no z-labels in any file). All working state lives in ABSOLUTE low RAM: $0340-$0343 on Bert/Bojo/Poga (extended to $0356 by Poga's init and $0347 by Tiger_Tank), i.e. the C64 tape buffer; Electro_World instead parks its state at $9c3c-$9c5d. This is why SIDdecompiler's -v2 map reports Start: $0340 (or $9c3c) — plain fixed workspace below/above the load address, not a copy destination (no page-copy loop exists in any file).", "layout": "Bert (representative): $3b80 voice-1 freq-hi table (213 entries), $3c54 voice-1 freq-lo, $3d28 voice-1 duration; $3dfc voice-2 freq-hi (171 entries), $3ea6 voice-2 freq-lo, $3f50 voice-2 duration; $3ffa play; $4081 init; ends $40b4. Bojo tables $1964/$19bf/$1a1a (0x5c) and $1a75/$1b10/$1bab (0x9c). Poga $3a47/$3b26/$3c05 (0xe0) and $3ce4/$3d7c/$3e14 (0x99). Tiger_Tank $1ce4/$1d71/$1dfe (0x8e) and $1e8b/$1f07/$1f83 (0x7d). Electro_World $3398/$341c/$34a0 (0x85) for voice 1, then TWO sequential voice-2 phases: $3524/$3636/$3748 (open-ended intro) followed by $3624/$3736/$3848 (0x12, looping)." },
  "entry": { "init": "PSID init vector, always real code, always the LAST routine in the file: Bert $4081, Bojo $1ccd, Electro_World $3871, Poga $3ec8, Tiger_Tank $1b80. Sets $d418=$0f, per-voice ADSR and (on the pulse-waveform files) pulse width, then zeroes the sequence indices and sets each voice's duration counter to 1 so the first play call immediately starts a note.", "play": "PSID play vector, immediately precedes init in the file: Bert $3ffa, Bojo $1c46, Electro_World $3918, Poga $39c0, Tiger_Tank $1bca. Note that on 4 of 5 files play < init (Electro_World is the exception, init $3871 < play $3918)." },
  "speed": "1x. PSID speed word = 1 on all 5 files (CIA-timer flagged), clock flag PAL. The routine itself contains no multispeed or sub-frame logic — one linear pass per call, unconditional rts.",
  "data_format": { "order_list": "None. There is no order list, no pattern indirection and no pointer table anywhere. Each voice is ONE flat sequence read linearly by a Y index that only ever increments, wrapping at a hardcoded `cpy #<length>` immediate compiled into the play routine.", "patterns": "Three PARALLEL byte arrays per voice, all indexed by the same Y: [0] SID freq-hi, [1] SID freq-lo, [2] duration in frames. Note-on writes freq-hi then freq-lo then loads the duration byte into that voice's countdown at $034x. Table base addresses are hardcoded absolute operands (`lda $3b80,Y`), so the data cannot be moved without reassembling.", "instruments": "None — there is no instrument concept. ADSR and pulse width are written ONCE in init and never touched again: Bert/Bojo/Poga AD=$09 SR=$3c on both voices, PW=$143c on both voices, waveform $40/$41 (pulse, gate off/on). Tiger_Tank AD=$09, SR=$30 (v1)/$03 (v2), waveform $20/$21 (sawtooth, no PW). Electro_World AD=$0a SR=$50, waveform $20/$21.", "wavetable": "None.", "pulsetable": "None — pulse width is a single init-time constant.", "filtertable": "None. $d415-$d418 are written only once at init ($d418=$0f, volume only); the filter is never enabled and $d417 is never written by any of the 5 files. Confirmed by 300-frame register traces: the only registers touched during playback are osc1/osc2 freq_lo, freq_hi and control." },
  "effects": { "encoding": "None. There is no effect column, no command nibble and no per-frame modulation of any kind. The ONLY per-frame work is decrementing a duration counter; on expiry the routine writes gate-off (waveform with bit 0 clear), the new frequency, then gate-on (bit 0 set) in the same play call — i.e. every note is a hard ADSR restart, and between notes nothing is written at all. This is a step-sequencer, not a tracker.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "ONE DRIVER, FIVE GAMES — CONFIRMED BY DISASSEMBLY (2026-07-30), not inferred. All 5 tagged files reassemble from the same ~$b0-$1d0-byte step-sequencer. Verified with a lesson-68-style relocation-immune signature scan: a 32-byte structural pattern `A9 ?? 8D ?? D4 B9 ?? ?? 8D ?? D4 B9 ?? ?? 8D ?? D4 B9 ?? ?? 8D ?? ?? A9 ?? 8D ?? D4 C8 C0 ?? F0` (the whole per-voice note-on block, every address operand wildcarded) hits TWICE in every one of the 5 files and ZERO times in Hubbard's Monty_on_the_Run, Galway's Wizball or Daglish's Gauntlet. Relative offsets between the two hits are IDENTICAL ($0 and +$42) on Bert/Bojo/Poga/Tiger_Tank, and the duration-countdown pattern `E0 01 F0 ?? CA 8E` sits at exactly -$e from the first hit in all 5. Electro_World is the same driver with a third block appended (+$7d), giving voice 2 a two-phase intro-then-loop sequence.",
    "NO ZERO PAGE AT ALL, AND THE WORKSPACE IS THE TAPE BUFFER. Four of the five files keep every byte of runtime state in $0340-$0356 — the C64 cassette buffer — addressed absolutely (`ldx $0340`), never via ZP. Electro_World uses $9c3c-$9c5d instead. Practical consequence for anyone re-deriving this: SIDdecompiler's -v2 map reports Start: $0340 (or, for Electro_World, End: $9c5d) far outside the file's own payload, which looks like lessons 62/77's copy-destination or below-load-table cases but is neither — there is no copy loop and no table base below the load address, just fixed absolute workspace (the lesson 31/38/54/60 shape). Relocating with `-a<decimal of the -v2 Start>` is the correct move and gives a zero net shift.",
    "VOICE 3 IS NEVER USED. Across 300-frame traces of all 5 files the only SID registers ever written during playback are $d400/$d401/$d404 (voice 1) and $d407/$d408/$d40b (voice 2). $d40e-$d412 are untouched even at init. Two-voice music on a three-voice chip, in a game context where the third voice was presumably left free for sound effects — Tiger_Tank's and Poga's init routines do initialise extra $034x/$9c4x bytes their play routine never reads, consistent with an SFX layer that lives in the game and not in the .sid rip.",
    "WRITE DENSITY IS EXTREMELY LOW because nothing happens between notes: 300-frame traces give Bert 212 writes, Tiger_Tank 189, Poga 178, Electro_World 116, Bojo 101 — i.e. 0.3-0.7 writes/frame, against tens per frame for a typical tracker. The card's earlier 40-writes-per-50-frames figure for Bert is exactly reproduced (40).",
    "HAND-ASSEMBLED FINGERPRINTS: the code is littered with `nop nop` immediately before `rts` and runs of 6-9 consecutive `nop`s inside init, and Tiger_Tank's play opens with a four-way `lda $034x / cmp #$01 / beq` dispatch whose branch targets SIDdecompiler resolves to bare `jmp` bytes — the signature of in-place patching of a hand-assembled routine rather than output from a music editor. Consistent with the self-written-driver hypothesis: there is no editor here to have generated this.",
    "CONFIRMED SOLO ONE-MAN-BAND DEVELOPER: on ALL 5 of his C64 games (Bert the Bug Bites Back 1987, Bojo, Electro World, Poga, Tiger Tank — all 1989), Lemon64's structured per-game credit pages consistently list Jason J. Briggs as Programmer, Graphics, AND Musician/Composer simultaneously — a genuinely rare pattern in this KB, where composers usually rely on a separate coder. Strongly supports a self-written driver, consistent with the total absence of a SIDId entry for this tag.",
    "ALL 5 GAMES PUBLISHED BY THE SAME SMALL PUBLISHER, ECP (Entertainment & Computer Products Pty. Ltd.), an Australian (Gold Coast) budget-software house active in the late 1980s — a tight, single-publisher output pattern. A Lemon64 forum comment (informal, not the structured database) independently corroborates his reputation as ECP's in-house one-man-band, sarcastically addressing him directly: 'I'm looking at you, Mr Jason J Briggs!'",
    "HVSC HAS NO COUNTRY/GROUP DATA AT ALL for this composer (a bare 'Briggs, Jason' entry) — but this project's own cached DeepSID profile separately carries `full_name: 'Jason J. Briggs'`, `affiliation: 'ECP'`, confirming the fuller identity even though HVSC's own record is sparse.",
    "NO CSDb SCENER PROFILE EXISTS — no resolvable CSDb scener ID, no demoscene group membership found. Consistent with a purely commercial (non-scene) Australian budget-developer profile, the same absence pattern already established for several purely-commercial composers already carded in this KB.",
    "'POGA' (1989) IS A CONFIRMED COVER: its music is an arrangement of Scott Joplin's 'The Entertainer' — a genuine, sourced detail about at least one of his 5 tunes' origin, though the traced sample file (Bert the Bug Bites Back) is an original composition, not this cover.",
    "MINOR, UNRESOLVED YEAR DISCREPANCIES exist across sources for Bojo/Bert (1987 vs 1988/1989 depending on source) — not resolved to a single authoritative date, flagged rather than guessed at. An AI-search-summary claim about an 'ECP Red Ribbon Game Pak' bundling all 4 games could NOT be corroborated in the actual source text and is explicitly NOT included as fact.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB — his entire documented career is one small Australian commercial publisher with zero overlap found against the UK/US/European composers already carded here (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Briggs, Jason', bare entry, no country/group): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Bert the Bug Bites Back (full credits): https://www.lemon64.com/game/bert-the-bug-bites-back",
    "Internet Archive — Bert the Bug Bites Back (title embeds '1987, Jason Briggs'): https://archive.org/details/Bert_the_Bug_Bites_Back_1987_Jason_Briggs_cr_Contex",
    "Lemon64 — Bojo: https://www.lemon64.com/game/bojo",
    "Lemon64 — Electro World: https://www.lemon64.com/game/electro-world",
    "Lemon64 — Poga (music: Scott Joplin 'The Entertainer' arrangement): https://www.lemon64.com/game/poga",
    "Lemon64 — Tiger Tank: https://www.lemon64.com/game/tiger-tank",
    "MobyGames — Bert the Bug Bites Back: https://www.mobygames.com/game/36547/bert-the-bug-bites-back/",
    "MobyGames — Tiger Tank: https://www.mobygames.com/game/34552/tiger-tank/",
    "CSDb webservice (project's own API, composer='Jason J. Briggs', group='ECP'): https://csdb.dk/webservice/?type=sid",
    "Local dataset: 5 files tagged Jason_Briggs, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jason_Briggs` tag is Australian one-man-band developer Jason J.
Briggs's own driver — he programmed, drew graphics for, and composed the
music on all 5 of his confirmed C64 games, all published by the small
Gold Coast publisher ECP. Player-ID-fingerprinted across 5 files, all his
own, with no SIDId entry consistent with a self-written routine.

## Quirks & gotchas

See the `quirks` array. Two load-bearing ones now:

- **One driver across all 5 games, confirmed by disassembly** — no longer
  an inference from the solo-developer credit pattern. The same 32-byte
  per-voice note-on block appears at identical relative offsets in every
  tagged file and in none of three unrelated control files.
- **The confirmed solo one-man-band pattern** — a rare case in this KB
  where the same person coded, drew, and composed every credited title.
  The disassembly independently corroborates it: hand-assembled `nop`
  padding, hardcoded absolute table addresses and zero editor-generated
  structure are what a self-written in-game routine looks like, not what
  a music editor emits.

## Disassembly notes

None published anywhere (not in the realdmx RE repo, no STIL note). The
memory map, data format and effect facts in the JSON block above are
**this project's own**, derived from a fresh disassembly of all 5 tagged
HVSC files on 2026-07-30 (see Verification).

The whole driver, in full, is the following shape — repeated once per
voice, twice per file:

```
play    ldx dur_ctr          ; $0340 (voice 1) / $0342 (voice 2)
        cpx #$01
        beq  note_on
        dex
        stx  dur_ctr
        jmp  next_voice      ; nothing else happens this frame
note_on ldy  seq_idx         ; $0341 / $0343
        lda #$40 : sta $d404 ; gate OFF (waveform, bit 0 clear)
        lda freqhi_tbl,Y : sta $d401
        lda freqlo_tbl,Y : sta $d400
        lda dur_tbl,Y    : sta dur_ctr
        lda #$41 : sta $d404 ; gate ON  -> hard restart every note
        iny
        cpy #<seq_length>    ; hardcoded immediate
        beq  wrap
        sty  seq_idx
        jmp  next_voice
```

`init` writes `$d418 = $0f`, per-voice ADSR (and pulse width on the
`$40`-waveform files), zeroes both sequence indices and sets both
duration counters to `1` so the first `play` call starts a note
immediately. There is no order list, no pattern indirection, no pointer
table, no wavetable, no effect column and no filter usage anywhere.

## Verification

**VERIFIED (2026-07-30) — all 5 tagged HVSC files, 100.0000% byte-exact
plus a non-tautological relocation-invariance trace test.**

Method (the standard recipe; `-r` worked first try on every file, no
hand-patching of any kind was needed):

```
SIDdecompiler.exe <file>.sid -o<f>.asm -a<DECIMAL of the -v2 map "Start:"> -z -d -c -r -v1
64tass.exe -a --cbm-prg -o <f>.prg <f>.asm
```

Relocation base is the `-v2` map's own `Start:` (gotcha 40): `$0340`
(`-a832`) for Bert/Bojo/Poga/Tiger_Tank, `$3398` (`-a13208`) for
Electro_World. Byte-diff compares only the real payload window
(`loadAddr .. loadAddr+len-1`); the reassembly legitimately spans the
workspace gap as well.

| file | PSID load / init / play | payload | byte-diff |
|---|---|---|---|
| Bert_the_Bug_Bites_Back | $3b80 / $4081 / $3ffa | 1333 | **100.0000%** (0 diffs) |
| Bojo | $1964 / $1ccd / $1c46 | 925 | **100.0000%** (0 diffs) |
| Electro_World | $3398 / $3871 / $3918 | 1615 | **100.0000%** (0 diffs) |
| Poga | $39c0 / $3ec8 / $39c0 | 1469 | **100.0000%** (0 diffs) |
| Tiger_Tank | $1b80 / $1b80 / $1bca | 1152 | **100.0000%** (0 diffs) |

All five headers carry load address 0 with the real address embedded as
the payload's first two LE bytes; all are PSID v2, 1 subtune, speed
word 1, PAL.

**Non-tautological check (required, since `-r` makes the native build
byte-identical to the original).** Each file was ALSO re-emitted from the
same disassembly at a different base with a non-zero-low-byte delta of
`+$1234`, and both builds traced 300 frames with `sidm2-sid-trace.exe`,
comparing `(frame, register, old_value, new_value)`:

| file | relocated build differs from native in | writes (orig vs relocated) | divergences |
|---|---|---|---|
| Bert | 54 bytes | 212 vs 212 | **0** |
| Bojo | 54 bytes | 101 vs 101 | **0** |
| Electro_World | 108 bytes | 116 vs 116 | **0** |
| Poga | 126 bytes | 178 vs 178 | **0** |
| Tiger_Tank | 66 bytes | 189 vs 189 | **0** |

Cycle timestamps drift on Bert/Poga/Tiger_Tank (0 to −60 cycles
*cumulative* over 300 frames, ≈0.2 cycles/frame) — page-crossing
penalties on the relocated `lda table,Y` reads, exactly the lesson-70/72
pattern; Bojo and Electro_World came back cycle-exact as well. Register
writes are identical in all five cases.

Reconstruction quality is genuine, not `.byte` pass-through (lesson 65):
the disassemblies contain 77 (Bert), 77 (Bojo), 106 (Tiger_Tank), 127
(Electro_World) and 130 (Poga) real instruction lines, which is the
entire code region of each file — everything else in the payload is
music data by construction (three parallel byte tables per voice).
Bert's earlier 40-writes-per-50-frames measurement is exactly reproduced.

Scratch artifacts (asm/prg/traces for all 5 files, both bases):
`C:\Users\mit\AppData\Local\Temp\claude\C--Users-mit-claude-sid-reference-project\54363ab5-4f49-4f93-99ab-27aa24abc3b8\scratchpad\jason-briggs\`

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (5 pages), Internet
Archive, MobyGames (2 pages), and the CSDb webservice.

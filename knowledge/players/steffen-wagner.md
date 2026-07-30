# Steffen Wagner (player routine)

```json
{
  "id": "steffen-wagner",
  "name": "Steffen Wagner (player routine)",
  "aliases": ["Steffen_Wagner"],
  "authors": ["Steffen Wagner"],
  "released": "1990",
  "status": "verified",
  "platform": "German composer Steffen Wagner's playroutine — a genuinely thin trail: 5 standalone (non-game, non-demo) SID tunes from 1990, no CSDb scener identity, no group affiliation, no interviews. CSDb itself marks his composer credit with a '<?>' unresolved-identity marker on all 5 releases. Player-ID-fingerprinted across 5 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "$1a80 on ALL 5 tagged files (RSID, PSID load-address field 0 with the real address embedded as the payload's own first 2 LE bytes). Verified layout, identical across all 5: $1a80-$1af2 bootstrap + raster IRQ handler; $1b00-$1cff foreground 2-bit digi mixer (block-copied to $ce00-$cfff at boot); $1d00-$3fff 2-bit PCM sample banks (copied to $d000-$f2ff, read with I/O banked out via $01=$34); $4000-$45ff SID melodic player; $45fc-$45ff per-tune parameter bytes; $4600-$4aff instrument/effect tables (32 entries, $20 stride); $4b00-EOF pattern/sequence data in 2-page (512-byte) units. Runtime workspace at $0340-$03cf (below the load address, not part of the file).", "zero_page": "SID player: $80 master volume nibble (bit7 = pause), $81 filter-mode/voice-3-off bits OR'd into $d418, $a4/$a5 current voice X/Y stride, $aa/$ab/$ac + $ae/$af secondary track pointers, $f8/$f9 sequence pointer, $fa instrument index, $fb effect-select (0-3), $fc-$ff scratch/filter-restore. Digi mixer: $82/$83 + $84/$85 the two sample-stream pointers, $88/$89 their end pages, $86/$87 the two decoded 2-bit sample values. Bootstrap copy loop uses $fb-$fe.", "layout": "Voice workspace is 3 x 48 bytes at $0340 (X = $00/$30/$60), cleared by init with `cpx #$90`; SID register base per voice via Y = $00/$07/$0e. Offset $2f in each voice block ($036f/$039f/$03cf) is the note-duration countdown." },
  "entry": { "init": "$4000 (`jmp $454b`), called by the bootstrap as `lda #$00 / jsr $4000`. The PSID/RSID header's own init vector is $1a80 (the bootstrap), which installs a raster IRQ at $0314/$0315 and then enters an endless foreground loop — SIDdecompiler HANGS on it (confirmed, 240s timeout, no output); disassemble with -I16384 -P17888 instead.", "play": "$45e0 = `jsr $4003 / jmp $ce00`. $4003 is the per-frame SID melodic player; $ce00 is the digi sequencer tick (writes the next sample-id mailbox at $cdfe/$cdff). Called from the raster IRQ at $1ae0 ($d012=$33). The actual digi MIXER ($ce22) runs in the FOREGROUND main loop, not in the IRQ." },
  "speed": "1x, raster IRQ at line $33 ($d012=$33, $d01a=$01). Pattern grid is fixed-tempo: every event resets the voice duration counter to the global tick divider at $45fe (e.g. $08 on Can't Stop), and the digi sequencer advances on the same grid ($ce00 compares $036f against $45fe).",
  "data_format": { "order_list": "Init computes each stream's page from `A*2 + $4b` — i.e. sequence streams live at $4b00+ in 2-page (512-byte) units, page-granular with a hardcoded $00 low byte. $45fd/$45fc select the secondary stream pages; $45ff is the initial master-volume/filter byte loaded into ZP $80.", "patterns": "2 bytes per event, read via `(zf8),Y` with Y=0/1. Byte 0 = note (`and #$7f`); $7d/$7e/$7f are commands (see effects), bit 7 set routes to a further handler at $4a68. Byte 1: bits 4-0 (`and #$1f`) = instrument index 0-31; bits 6-5 (`and #$60`, >>5) = effect-table select 0-3.", "instruments": "Parallel 32-entry tables at $20 stride, all indexed by the instrument number: $4600, $4620, $4640, $4660 (low nibble), $469d (high nibble), $4680, $46a0, $46c0 -> $d405 attack/decay, $46e0 -> $d406 sustain/release, $4700, $4720. Waveform/control goes to $d404 via the routine at $45dc.", "wavetable": "Arpeggio/wave table at $4a20, indexed by (l034b*8 + l034c). $ff = jump (restart index taken from $036b,X via the pointer table at $45f4), $fe = end/hold. Value is added to the current note before frequency lookup.", "pulsetable": "Per-instrument pulse sweep: mode 0-3 in $034d,X, speed in $034e,X, 16-bit accumulator in $0344/$0345,X, written to $d402/$d403. Effect-select 1 sources it from $47c0/$47e0/$4800/$4820/$48c0; effect-select 2-3 from $4840/$4860/$4880/$48a0/$48e0.", "filtertable": "Per-instrument filter sweep: cutoff accumulator $0346/$0347,X, speed $0351,X, direction/limit flags in $0350/$0352/$0353,X, resonance/routing restored from ZP $fe/$ff into $d417. Sparse in practice (1-2 filter writes per 50 frames)." },
  "effects": { "encoding": "Two-byte pattern events; the 2-bit field in byte 1 bits 6-5 selects which of two parallel effect-parameter table sets the instrument's pulse/filter/arpeggio parameters are loaded from (0 = none, 1 = set A at $47c0.., 2-3 = set B at $4840..).", "commands": { "$00-$7c": "note number -> $0348,X; triggers a full note-start (clears the per-voice accumulators, reloads all instrument tables, writes $d404/$d405/$d406)", "$7d": "tie + slide: sets $036d,X = $fe and reloads the control byte from $4720,Y; continues the existing note and steps the $035b,X slide accumulator up (adc $035f,X) or down (sbc, when $0360,X is negative)", "$7e": "tie/hold: sets $036d,X = $ff and reloads the control byte from $4700,Y", "$7f": "note off: stores $7f into $0348,X and zeroes $d400,Y (frequency lo); the main loop then also zeroes $d401,Y at $45a7", "bit7 set": "extended command dispatched to $4a68 (region left as raw data by SIDdecompiler on all 5 files — never exercised by any of them in a 400-frame trace)" } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IT IS A HYBRID: A 3-VOICE SID MELODIC PLAYER *PLUS* A FOREGROUND 2-CHANNEL 2-BIT PCM DIGI MIXER, AND THE DIGI IS THE MAJORITY OF THE FILE. Verified by disassembly on all 5 files. The raster IRQ ($d012=$33) runs the SID player at $4003 and ticks the digi sequencer at $ce00; the actual sample mixing happens in the MAIN LOOP (`jsr $ce22` at $1ac3), busy-waiting on $d012 between output samples. Two independent sample streams are read via ($82)/($84), each byte packing FOUR 2-bit samples (bits 1-0, 3-2, 5-4, 7-6, unpacked by successive LSRs); the two channels' 2-bit values are ADDED and used to index a 7-entry mix table at $cfc0 ($0f,$0d,$0a,$08,$05,$03,$00) written to $d418 (OR'd with ZP $81). Sample banks live under I/O at $d000-$f2ff with $01 set to $34 during playback. Sample id $fe is the stream terminator.",
    "THE FILE IS SELF-RELOCATING AT BOOT AND THE INTERESTING HALF NEVER RUNS WHERE IT IS STORED: $1a80-$1af2 copies $25 pages from $1b00 up to $ce00 (`lda #$1b/sta $fc / lda #$ce/sta $fe / ldx #$25` with an `(fb),y -> (fd),y` loop) before calling init. So $1b00-$1cff is the digi mixer CODE and $1d00-$3fff is 8,957 bytes of PCM SAMPLE data, neither of which is ever executed or read at its stored address. Consequence for tooling: SIDdecompiler traced from $4000/$45e0 leaves that whole 9,472-byte block as `.byte` pass-through, and traced from the header's own $1a80 entry it HANGS outright (endless foreground loop after CLI — confirmed, killed at 240s).",
    "PAGE-GRANULAR SEQUENCE POINTERS MAKE NON-PAGE-ALIGNED RELOCATION STRUCTURALLY IMPOSSIBLE: init computes stream pointers as `A*2 + #$4b` for the high byte with a hardcoded `lda #$00` low byte. The `#$4b` page constant is an immediate, so no disassembler symbolises it — a relocated build silently reads the old $4b00 page and starts every voice's notes on frame 1 instead of the correct grid. Fixing it (`adc #>SONGBASE`) restores exact playback for PAGE-ALIGNED deltas only; a delta with a non-zero low byte cannot work at all without also rewriting the `#$00` low-byte stores.",
    "TABLE-INDEX ODDITY AT $469d, PRESENT IN ALL 5 FILES: the instrument loader reads its low-nibble field from `$4660,Y & $0f` but its high-nibble field from `$469d,Y & $f0` — literally encoded as `b9 9d 46` (verified against raw file bytes, not a disassembler label artifact). Every other table in the block sits on a clean $20 boundary ($4600/$4620/$4640/$4660/$4680/$46a0/$46c0/$46e0/$4700/$4720), so $469d is $1d bytes into the $4680 table. Reads as an author-side source bug that survived into all five released tunes rather than a deliberate design.",
    "ALL 5 FILES ARE STANDALONE COMPOSITIONS, NOT GAME OR DEMO CREDITS: 'Can't Stop', 'Get Higher', 'Go On', 'The Race', 'The Space' — all dated 1990, all confirmed via direct CSDb SID-entry lookups (ids 30579-30583) as independent SID rips, none matching any known C64 game title. No game titled 'Can't Stop' or similar exists in Lemon64/gb64/MobyGames under his name.",
    "CSDb ITSELF FLAGS HIS COMPOSER CREDIT AS UNRESOLVED: each of the 5 CSDb SID entries marks the composer name with a '<?>' notation — CSDb's own convention for 'no confirmed/linked musician profile', meaning CSDb is just relaying the HVSC filename/credit with no independent identity record behind it.",
    "NO CSDb SCENER PROFILE EXISTS AT ALL — a direct CSDb scener search for 'Wagner' returned zero results, ruling out membership in any of the well-known German demoscene groups of the era (Triad, Vision Factory, Rebels, etc.) that might otherwise be assumed for a German 1990 composer. Best read: an amateur/hobbyist composer working entirely outside the organized demoscene, not merely under-documented within it.",
    "NO INTERVIEWS OR FIRST-PERSON MATERIAL FOUND. Web searches for 'Steffen Wagner' surface only unrelated modern namesakes (a KPMG partner, a statistics professor, a graphic designer, various unrelated LinkedIn/SoundCloud profiles) — explicitly checked and discarded as irrelevant, not this composer.",
    "THE OLD '13 WRITES / 50 FRAMES' FIGURE WAS AN ARTEFACT AND IS SUPERSEDED. It came from driving the RSID's own $1a80 entry; driving the real per-frame entry ($45e0, recovered from the bootstrap) gives 142 writes/50 frames on Can't Stop and 138-278 across the five files. The lesson generalises: on an RSID whose header play vector is $0000, a 'succeeded but suspiciously sparse' trace is a sign the handler was only partly resolved, not evidence the tune is sparse.",
    "ONE DRIVER, FIVE FILES, BYTE-IDENTICAL: $1a80-$45ff is 100% byte-identical across all 5 tagged files EXCEPT three per-tune parameter bytes at $45fd/$45fe/$45ff (stream-page selector, tick divider, initial volume/filter). $4600-$4aff (instrument tables) is 94-95% identical and $4b00+ (sequence data) 51-61%. No cross-file byte-pattern search was needed — the engine regions match exactly.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — no co-credits, shared groups, or cross-references discovered (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Wagner, Steffen - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb sid/?id=30579 (Can't Stop, traced file) and sibling ids 30580-30583 (Get Higher, Go On, The Race, The Space) — all marked '<?>' unresolved composer: https://csdb.dk/sid/?id=30579",
    "CSDb scener search for 'Wagner' (zero results, confirming no scener profile): https://csdb.dk/search/?seinsel=scener&search=Wagner",
    "Local dataset: 5 files tagged Steffen_Wagner, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Steffen_Wagner` tag is German composer Steffen Wagner's playroutine
— 5 standalone 1990 SID tunes, no game or demo credits, no CSDb scener
identity, no interviews. Player-ID-fingerprinted across 5 files, all his
own.

Technically it is a **hybrid**: a conventional 3-voice raster-IRQ SID
melodic player (`$4000-$45ff`, ~1.5 KB) bolted to a **foreground
2-channel 2-bit PCM digi mixer** (`$ce00-$cfff` after a boot-time copy)
whose sample banks occupy 8,957 bytes under I/O at `$d000-$f2ff`. The
digi is roughly half of every file. All 5 files share one byte-identical
driver, differing only in three per-tune parameter bytes at
`$45fd-$45ff`, the instrument tables, and the sequence data.

## Quirks & gotchas

See the `quirks` array. The technically load-bearing ones are the
**hybrid SID + 2-bit digi architecture**, the **boot-time self-
relocation** (which makes both the header's own `$1a80` entry point and
the file's stored layout misleading — SIDdecompiler hangs on the former
and leaves 9.5 KB as pass-through under the latter), and the
**page-granular sequence pointers** that make non-page-aligned
relocation impossible. Biographically the load-bearing quirk remains the
**honest sparse-biography flag**: CSDb itself marks his composer credit
as unresolved, and no scene, game, or interview trail exists.

## Disassembly notes

No published source (not in the realdmx RE repo, no STIL note). The
memory map, entry points, ZP map, data format and effect commands
recorded in the JSON block above are all derived from an original
SIDdecompiler disassembly produced in this project (2026-07-30), not
from any external documentation.

Working recipe (all 5 files, identical):

    SIDdecompiler.exe <file>.sid -o out.asm -a832 -I16384 -P17888 -z -d -c -r -C1
    64tass.exe -a --cbm-prg -o out.prg out.asm

`-a832` is decimal for `$0340`, the `-v2` map's own `Start:` address (the
runtime voice workspace, which sits BELOW the file's own `$1a80` load
address and is not part of the file) — this is the gotcha-40 case and
gives a zero net shift. `-I16384`/`-P17888` are `$4000`/`$45e0`, the
real init/play recovered by hand-reading the bootstrap; the header's own
`$1a80` init hangs the tool. `-C1` is needed: without it the play
routine is only 76% disassembled and the untraced conditional branches
survive as raw `.byte` blocks containing hardcoded workspace addresses,
which silently breaks any relocation. With `-C1` the play routine
reaches 98.96% real instructions.

## Verification

**`status: verified` (2026-07-30) — full disassemble -> reassemble ->
byte-diff -> relocation-controlled trace-diff pass on all 5 tagged HVSC
files.**

PSID/RSID headers (read directly, identical on all five): RSID v2,
load `$1a80` (header field 0, address embedded as the payload's own
first 2 LE bytes), init `$1a80`, play `$0000`, 1 subtune, start song 1.
Payload lengths 17,026-23,170 bytes.

**Byte-diff — 100.0000% on all 5 files, first pass, no hand-patching:**

| file | payload | compared | diffs | match |
|---|---|---|---|---|
| Cant_Stop.sid  | `$1a80-$7101` (22,146 B) | 22,146 | 0 | 100.0000% |
| Get_Higher.sid | `$1a80-$6101` (18,050 B) | 18,050 | 0 | 100.0000% |
| Go_On.sid      | `$1a80-$6701` (19,586 B) | 19,586 | 0 | 100.0000% |
| Race.sid       | `$1a80-$5d01` (17,026 B) | 17,026 | 0 | 100.0000% |
| Space.sid      | `$1a80-$7501` (23,170 B) | 23,170 | 0 | 100.0000% |

**The tautology control.** Because `-r` makes the reassembly
byte-identical to the original, a trace against it proves nothing (it
was run anyway and is exact: 1,842/1,842 writes, cycle-exact, 400
frames on Can't Stop). The real evidence is a RELOCATED rebuild of the
same disassembly, `-a1088` (`$0440`, delta +`$100`), which differs from
the native build in **309-360 of 51,905 bytes** yet must reproduce the
identical register-write stream. It does, on all 5 files, **including
cycle timestamps**, over 400 frames:

| file | writes / 400 frames | diffs vs original | bytes changed by relocation |
|---|---|---|---|
| Cant_Stop  | 1,842 | 0 | 360 |
| Get_Higher | 1,983 | 0 | 360 |
| Go_On      | 2,740 | 0 | 309 |
| Race       | 1,347 | 0 | 360 |
| Space      | 1,990 | 0 | 322 |

A second page-aligned base (`-a576` = `$0240`, delta −`$100`) was also
run on Can't Stop: 360 bytes changed, 0 trace diffs, cycle-exact.

The relocated builds need exactly one manual fixup, and finding it was
the substance of this pass: `adc #$4b` (x3, in init) -> `adc #>SONGBASE`.
That immediate is the high byte of the pattern-stream base page; no
disassembler symbolises an immediate, so unfixed the relocated player
reads the old `$4b00` page and starts all three voices on frame 1
instead of the correct grid (488 writes vs 418 over 100 frames). This
is lesson 77's class of defect, but in immediate rather than
absolute-operand form.

**Non-page-aligned relocation is structurally impossible for this
player** and was confirmed so, not merely skipped: `-a1143` (`$0477`,
delta +`$137`) fails even with the page fixup, because the stream
pointers are built with a hardcoded `lda #$00` low byte. Per lesson 79's
diagnostic this is the "clean aligned / dirty unaligned" split, and here
it has a real cause in the player's own design rather than in the
reconstruction.

**Honest scope / known gap.** Everything above exercises the SID melodic
engine reached through play `$45e0`. Two things it does not cover:

1. **Instruction coverage.** Of the ~2,176 bytes in this file that are
   genuinely executable code, 1,838 (84.5%) are real disassembled
   instructions: `$4000-$45ff` is 98.96% instructions (1,520 B), and the
   digi mixer is 61.75% (318 B of `$ce00-$cfff`). The remaining ~128 B
   bootstrap at `$1a80-$1af2` was hand-read (documented above) but never
   machine-disassembled, because SIDdecompiler hangs on it. Measured per
   lesson 65; the other ~20 KB of each file is genuinely sample and
   sequence DATA, not undisassembled code.
2. **The digi mixer is byte-verified but NOT relocation-controlled and
   NOT register-trace-covered.** To disassemble it at all, a synthetic
   image was built (original payload + the bootstrap's own `$1b00-$3fff`
   -> `$ce00` copy pre-applied, plus a 7-byte play stub at `$7800` doing
   `jsr $45e0 / jsr $ce22 / rts`, since `$ce22` is reached only from the
   foreground loop). That disassembly reassembles to bytes **100.0000%
   identical (9,472/9,472) to the original file's own `$1b00-$3fff`** —
   a real check, since the copy is exact — but the mixer is position-
   fixed at `$ce00` by construction so no relocation control is
   meaningful for it, and its `$d418` output happens in the main loop,
   outside the PSID play model, so it does not appear in any of the
   register-write traces above. Someone continuing here should drive
   `$ce22` under VICE (`scripts/dev/vsid-trace.js`) or RetroDebugger to
   get the digi's own write stream; that is the one remaining
   unmeasured behaviour.

Tools: `SIDdecompiler.exe` 0.8, `64tass` 1.60.3243,
`sidm2-sid-trace.exe`. Traces compared programmatically on
`frame,cycle,register,old,new` tuples.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (SID entries + scener
search).

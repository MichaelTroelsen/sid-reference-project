# Marco Scheepers / Brain (Beat Box driver)

```json
{
  "id": "marco-scheepers",
  "name": "Marco Scheepers / Brain (Beat Box driver)",
  "aliases": ["Marco_Scheepers"],
  "authors": ["Marco Scheepers (Brain)"],
  "released": "1987-1989 (The Terrible Two era)",
  "status": "verified",
  "platform": "Dutch demoscener Marco Scheepers's (handle 'Brain', founder of The Terrible Two) own driver — CONFIRMED via his own CSDb scener profile to be a genuine triple-threat: coder, graphician, AND musician, credited with code+music+graphics on his own 'Beat Box'/'Beat Box II' series specifically. Player-ID-fingerprinted across 5 files (of 12 total in his full HVSC folder), all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Per-title, no fixed base — read every file's own PSID header. Verified 2026-07-30 across the 5 tagged files: Beat_Box_II_tune_1 $0837 (len 1993), Beat_Box_II_tune_2 $e000 (1536), Cut_Creator $6000 (2138), Dossier_Commodore $4800 (1520), Sprightly_Spidey $c7f7 (2095). All PSID v2, speed word 0 (single-speed 50 Hz), 1 subtune each. SIDdecompiler's -v2 'Start:' equals the PSID load address on all five — no leading-stub/workspace gotcha (hard_won_gotcha 40 does not fire on this player).", "zero_page": "Two bytes only. Beat Box engine: $fb/$fc, a single 16-bit scratch pointer reloaded per voice per frame (order-list pointer, then pattern pointer). Cut_Creator's separate engine uses $fd/$fe for the same purpose. No other ZP touched.", "layout": "Beat Box engine (Beat_Box_II_tune_1, native $0837): $0837 init (jsr <initsub>) falling straight through to $083a play; $083c-$0aed the 3-voice player loop; $0aee-$0b1d the init subroutine; $0b1e-$0b70 the per-voice state block (parallel 3-byte arrays, X = voice 0..2); $0b71-$0c2e the 95-entry note-frequency table (lo at $0b71, hi at $0bd0); $0c2f/$0c32 order-list pointer lo/hi (3 entries, one per voice); $0c35/$0c4a pattern pointer lo/hi (21 entries); $0c5f 4-byte waveform table ($10 tri, $20 saw, $40 pulse, $80 noise); $0c63 voice SID offsets ($00,$07,$0e); $0c66+ 8-byte instrument records; $0cdf+ order lists, $0d3d+ pattern data. Instruction bytes ~735 of 1993 (36.9% code, rest tables/song data)." },
  "entry": { "init": "Two conventions in use, BOTH present in the tagged set — read the header, do not assume. init=load, play=load+3 (Beat_Box_II_tune_1 $0837/$083a, Cut_Creator $6000/$6003, Dossier_Commodore $4800/$4803); init=load+3, play=load (Beat_Box_II_tune_2 $e003/$e000, Sprightly_Spidey $c7fa/$c7f7). In the Beat Box engine the two entry points are physically adjacent — `init: jsr <initsub>` at load, immediately followed by `play:` — so init falls through into the first play call.", "play": "Called once per frame; play sets X=0 and loops X=0,1,2 over the three voices, ending in `inx / cpx #$03 / bne / rts`." },
  "speed": "Single speed, 50 Hz. PSID speed word is $00000000 on all 5 tagged files; no CIA timer is programmed by the player itself.",
  "data_format": { "order_list": "One order list per voice, addressed via the lo/hi pointer pair at $0c2f/$0c32 (3 entries). Stream bytes: $ff = end, reset position to 0 (loop); $80|n = set transpose to n (added to every subsequent note); anything else = pattern number, used to index the pattern pointer table.", "patterns": "Pointer lo/hi tables ($0c35/$0c4a, 21 patterns in the reference file). Stream bytes: $ff = end of pattern (advance the order list); $7f = tie/continue (keep the current note and instrument, read only a new duration); $80|n = set instrument to n & $1f; anything else = note index (note + transpose indexes the 95-entry frequency table) followed by a 1-byte duration in frames. So a note event is 2 bytes (note, duration); instrument and transpose are 1-byte bit7-set prefix commands.", "instruments": "8-byte records, base $0c66, stride 8 (instr<<3), 7 bytes used: +0 sustain/release ($d406); +1 attack/decay ($d405); +2 pulse-width lo ($d402); +3 low nibble = pulse-width hi ($d403), high nibble = pulse-sweep speed; +4 control/flags byte (see effects.encoding); +5 gate length in frames; +6 low nibble = vibrato step, bits 4-6 = vibrato half-period, bit 7 = vibrato depth-ramp enable.", "wavetable": "No general wavetable. Instead a fixed 4-entry waveform table at $0c5f ($10 triangle, $20 sawtooth, $40 pulse, $80 noise) selected twice per instrument: bits 0-1 of the flags byte pick the primary waveform, bits 5-6 pick an alternate. The player flips between the two every frame (`eor #$01` on a per-voice toggle), giving a fixed 2-step 50 Hz waveform alternation rather than a programmable table.", "pulsetable": "No table — an algorithmic ping-pong sweep. The 12-bit pulse width ($d402/$d403) is stepped by (flags+3 high nibble) << 3 each frame; on reaching $0fff it clamps to $0fff and reverses, on underflowing past 0 it clamps to 0 and reverses.", "filtertable": "None. The filter is set once in init and never touched again: $d415=$80, $d416=$80 (cutoff), $d417=$04 (voice 3 routed to filter, resonance 0), $d418=$1f (low-pass, volume 15). This is why a play-routine trace shows zero filter writes." },
  "effects": { "encoding": "All per-note effects come from instrument byte +4 (the flags byte) plus bytes +3/+5/+6; there are no in-pattern effect commands beyond the transpose/instrument/tie prefixes.", "commands": { "flags bits 0-1": "primary waveform index into the 4-entry table at $0c5f", "flags bits 2-3": "downward note slide — decrement the note-table index by this many steps per frame (0 = off)", "flags bit 4": "hard restart / test bit — while the note is younger than 2 frames, force $80 (TEST) into $d404 instead of the waveform", "flags bits 5-6": "alternate waveform index, swapped in every other frame", "instr +5": "gate length in frames — the gate bit is ORed into $d404 while this counter is non-zero, then released", "instr +6 low nibble": "vibrato step added to / subtracted from a 16-bit pitch offset each frame", "instr +6 bits 4-6": "vibrato half-period in frames (0 disables vibrato); direction flips at each half-period, giving a triangle vibrato", "instr +6 bit 7": "vibrato depth ramp — adds 8 to the vibrato step at each half-cycle, saturating at $ff (a swelling vibrato)", "instr +3 high nibble": "pulse-sweep speed (<<3 per frame), ping-ponging across the full 12-bit range" } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE TAG COVERS (AT LEAST) TWO DISTINCT ENGINES, CONFIRMED BY DISASSEMBLY 2026-07-30 — do not treat 'Marco_Scheepers' as one routine. Four of the five tagged files (Beat_Box_II_tune_1, Beat_Box_II_tune_2, Dossier_Commodore, Sprightly_Spidey) run the same 'Beat Box' engine documented in this card's memory/data_format/effects fields. Cut_Creator runs a structurally different routine: it emits SID values from self-modified immediate operands (`lda #$00 / sta $d405,Y` with the $00 patched at runtime) instead of `lda <table>,X`, writes the registers in a different order, and uses $fd/$fe rather than $fb/$fc for its pointer. It was reconstructed and trace-verified to the same standard, but its internals are NOT the ones described here.",
    "TWO REVISIONS OF THE BEAT BOX ENGINE, separated by lesson-68 opcode-pattern offsets (patterns chosen with no address operands; SID register addresses used as relocation-immune anchors). Rev A (Beat_Box_II_tune_1, Dossier_Commodore): gate-output anchor `BC ?? ?? F0 ?? DE ?? ?? 09 01 BC ?? ?? 99 04 D4` with the duration-countdown pattern at +$15, the test-bit block at -$13 and `sta $d401,Y` at -$4d — and, notably, the anchor sits at the SAME file offset $1b0 from the load address in both files, i.e. the same source assembled at a different base. Rev B (Beat_Box_II_tune_2, Sprightly_Spidey): same +$15 duration offset, but adds an `asl / bcs / lda abs,X / and #$01` branch (at -$1b / -$1a) and moves the $d405/$d406 ADSR writes, so the test-bit and $d401 offsets shift to -$44/-$6d and -$31/-$4e. The same scan returns ZERO hits on all 7 untagged files in Scheepers's HVSC folder and on both negative controls (Hubbard's Monty_on_the_Run, Galway's Wizball) — the patterns are specific, not generic 6502.",
    "THREE VOICES, NOT ONE — the earlier '151 writes concentrated almost entirely on osc1' note was a property of that one tune's first 50 frames, not of the driver. The player loops X=0..2 and indexes SID via a 3-entry offset table ($00/$07/$0e) with `sta $d400,Y`; a 100-frame trace of Sprightly_Spidey gives 269/291/232 writes across osc1/osc2/osc3.",
    "NO FILTER WRITES DURING PLAY, BY DESIGN — the filter is configured once in init ($d415=$80, $d416=$80, $d417=$04, $d418=$1f) and never revisited. A trace of the play routine alone will always report zero filter activity for this player; that is not a missing feature to go looking for.",
    "CONFIRMED SELF-CODED, VIA HIS OWN CSDb SCENER PROFILE (id=6508, handle 'Brain', real name Marco Scheepers, listed professions Coder/Graphician/Musician): his credited CSDb releases include 'The Beat Box' series (1988, code/music/graphics/text all credited to him), directly supporting a self-written driver for this tag — a genuinely strong, primary-source confirmation rather than an inference from absence.",
    "GROUP MEMBERSHIPS CONFIRMED: Anti Ronny Kuysters Club, Le Squadron Dominant (8/1987-11/1987), Riffs, The Supersonics (2/1988-5/1988), and **The Terrible Two (1987-1989, which he FOUNDED)** — matching HVSC Musicians.txt's own entry exactly ('Scheepers, Marco (Brain) / The Supersonics / The Terrible Two - NETHERLANDS').",
    "AN IMPORTANT DISAMBIGUATION, EXPLICITLY RULED OUT: a separate, unrelated release also called 'Beat-Box Collection' (CSDb id=16309, by the group Science 451, credited to Karl XII and Wally Beben, Dec 1987) is NOT this composer's work despite the shared name — his own 'Beat Box' series is separately, explicitly self-credited on his own CSDb profile.",
    "ONE COMMERCIAL GAME CREDIT FOUND, GRAPHICS ONLY: '5th Gear' (1988, Rack-It/Hewson, a C64 racing game) — programming/graphics by Jeroen Leijten, ADDITIONAL graphics by Scheepers, but the MUSIC on that specific title was by Renier & Theo Hongens, not Scheepers. This is the one credit where his usual triple-role pattern doesn't hold — flagged, not smoothed over.",
    "A WEAK, TANGENTIAL LINK TO BEN DAGLISH FOUND AND EXPLICITLY FLAGGED AS NOT A REAL COLLABORATION: CSDb release 'The Mudman' (Le Squadron Dominant/The Terrible Two, 1987) credits code+graphics to 'Brain' (Scheepers) but its MUSIC is Ben Daglish's 'The Last Ninja' SID tune, evidently reused/ripped for the demo rather than freshly composed for it — a shared-credit-line on one release, not a documented working relationship.",
    "A POSSIBLE BUT UNCONFIRMED SECOND CREDIT flagged, not asserted: an unreleased Activision preview 'Rampage V1' credits a 'Marco Scheepers' as graphic artist alongside main developer Bart Meeuwissen — the associated group ('The Judges') doesn't match any of his confirmed CSDb group memberships, so this is left explicitly unconfirmed as possibly a different person of the same name, not folded into the main profile.",
    "Not confirmed in SIDId (no entry for this tag). Weak/tangential link to [[ben-daglish]] noted above (shared release credit, not shared code — not encoded as a technical edge). No other known relationship found to any composer/tool already in this KB (checked against Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Scheepers, Marco (Brain) / The Supersonics / The Terrible Two - NETHERLANDS'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "HVSC folder listing (12 total files, confirms the 5-file local dataset is a subset): https://www.prg.dtu.dk/HVSC/C64Music/MUSICIANS/S/Scheepers_Marco/",
    "CSDb scener id=6508 ('Brain'/Marco Scheepers, full role/group/release list): https://csdb.dk/scener/?id=6508",
    "CSDb release id=17871 ('The Mudman', Ben Daglish music reuse): https://csdb.dk/release/?id=17871",
    "CSDb release id=16309 ('Beat-Box Collection' by Science 451, explicitly a DIFFERENT, unrelated release): https://csdb.dk/release/?id=16309",
    "Lemon64 — 5th Gear (full credits): https://www.lemon64.com/game/5th-gear",
    "gamesthatwerent.com — Rampage V1 (unconfirmed second credit, flagged not folded in): https://www.gamesthatwerent.com/gtw64/rampage-v1/",
    "Local dataset: 5 files tagged Marco_Scheepers, 1 composer (see knowledge/COVERAGE.md)",
    "Original disassembly + reassembly + trace of all 5 tagged HVSC files, produced in this project 2026-07-30 (SIDdecompiler 0.8 -a<v2 Start> -z -d -c -r, 64tass 1.60, sidm2-sid-trace) — see the Verification section for per-file numbers"
  ]
}
```

## Overview

The `Marco_Scheepers` tag is Dutch demoscener Marco Scheepers's ('Brain,'
founder of The Terrible Two) own driver — confirmed via his own CSDb
profile as a genuine coder/graphician/musician who built his 'Beat
Box'/'Beat Box II' series himself. Player-ID-fingerprinted across 5 files
(a subset of 12 total in his HVSC folder), all his own.

## Quirks & gotchas

See the `quirks` array. The two load-bearing technical ones are that the
tag spans **two different engines** (Cut_Creator is not the Beat Box
driver) and that the Beat Box engine itself exists in **two revisions**
with different internal offsets — so a signature or memory offset lifted
from one tagged file will not necessarily locate the same code in
another. On provenance, the load-bearing quirk is the **primary-source
self-coding confirmation** via his own CSDb profile, a rare case in this
KB where the composer's own scener page directly credits code+music+
graphics together on the exact tool this card documents. A weak,
explicitly-flagged tangential link to [[ben-daglish]] (a shared demo
release, not a collaboration) is also noted rather than overstated.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). The
`memory`/`data_format`/`effects` fields above are from an original
SIDdecompiler disassembly of `Beat_Box_II_tune_1.sid` produced 2026-07-30
in this project, cross-read against the other four tagged files.

## Verification

**`status: verified` (2026-07-30) — reconstructed all 5 tagged HVSC files
to 100.0000% byte-exactness and confirmed each with a non-tautological
relocated-control trace.**

Recipe (identical for every file, first pass, **no hand-patching of any
kind**):

    SIDdecompiler.exe <file>.sid -o<f>.asm -a<DECIMAL of the -v2 "Start:"> -z -d -c -r -v1
    64tass.exe -a --cbm-prg -o <f>.prg <f>.asm

`-v2`'s reported `Start:` equals the PSID load address on all five files,
so no relocation gotcha applies here. `-r` alone was sufficient — no
drifted self-modified bytes needed restoring, including on Cut_Creator,
whose engine is built almost entirely out of self-modified immediate
operands.

| file | load / init / play | payload | compared | byte-diff |
|---|---|---|---|---|
| Beat_Box_II_tune_1 | $0837 / $0837 / $083a | 1993 | 1993 | **100.0000%** |
| Beat_Box_II_tune_2 | $e000 / $e003 / $e000 | 1536 | 1536 | **100.0000%** |
| Cut_Creator | $6000 / $6000 / $6003 | 2138 | 2138 | **100.0000%** |
| Dossier_Commodore | $4800 / $4800 / $4803 | 1520 | 1520 | **100.0000%** |
| Sprightly_Spidey | $c7f7 / $c7fa / $c7f7 | 2095 | 2057 | **100.0000%** |

**One honest coverage gap:** Sprightly_Spidey's payload runs to `$d025`
but SIDdecompiler's emulated map ends at `$cfff` (the file overlaps I/O
space), so the reassembly is 38 bytes short and the trailing
**`$d000-$d025`** is unverified. The 2057 bytes that were compared
(98.19% of the payload) matched exactly, and those 38 bytes are never
read in a 30,000-call trace.

**Non-tautological check (the point of the exercise).** A `-r` build that
is byte-identical to the original makes a trace against the original
match by construction, so each file was ALSO rebuilt from the same
disassembly at a different base with a **non-zero low-byte delta** and
traced there. Comparing `frame,register,old,new` tuples over 100 frames:

| file | relocated base | bytes differing from native build | writes | divergences |
|---|---|---|---|---|
| Beat_Box_II_tune_1 | $4123 | 360 / 1993 | 299 | **0** |
| Beat_Box_II_tune_2 | $3123 | 334 / 1536 | 678 | **0** |
| Cut_Creator | $3123 | 482 / 2138 | 146 | **0** |
| Dossier_Commodore | $2145 | 338 / 1520 | 351 | **0** |
| Sprightly_Spidey | $3211 | 354 / 2057 | 793 | **0** |

Cycle timestamps drift in these builds (12 cycles at frame 0 on tune 1)
because the intra-page offset changes. Confirmed that is page-crossing
penalty and not behaviour, per lesson 72(a), with a second control build
of tune 1 at **$4837** (same low byte as native $0837): that one is
**cycle-exact as well as write-exact, 299/299, 0 divergences**.

The prior pass's figure for tune 1 reproduces exactly: **151 register
writes in the first 50 frames**, 0 filter writes during play.

**Scope statement.** This verifies every file carrying the
`Marco_Scheepers` tag in the local dataset (5 of the 12 files in his HVSC
folder — the other 7 are untagged and, per the pattern scan above,
contain none of this engine's signatures). It does NOT claim one routine:
4 files are the Beat Box engine in two revisions, and Cut_Creator is a
separate engine that happens to carry the same tag. The documented
`data_format`/`effects` describe the Beat Box engine only.

## Sources

See the `sources` array — HVSC Musicians.txt, HVSC folder listing, CSDb
(3 entries), Lemon64, and gamesthatwerent.com.

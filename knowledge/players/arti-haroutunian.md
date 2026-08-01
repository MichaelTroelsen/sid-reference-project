# Arti Haroutunian (Tronix driver)

```json
{
  "id": "arti-haroutunian",
  "name": "Arti Haroutunian (Tronix driver)",
  "aliases": ["Arti_Haroutunian"],
  "authors": ["Arti Haroutunian"],
  "released": "1983 (Tronix Publishing)",
  "status": "verified",
  "platform": "American programmer-composer Arti Haroutunian's own driver — primarily a coder (MS in Computer Engineering, self-taught on a TRS-80 from 1978) at Tronix Publishing, who ported his own Atari 8-bit games to C64 himself; music appears to have been a personal hobby he also hand-coded, not a specialist role. HVSC has NO entry for him at all. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Per-file, driver is reassembled at a different absolute address for each title (a plain hand-written routine, not relocated/packed): Slalom $8ac0 (init $8ac0, play $92b7), Waterline $9000 (init $9992, play $99b4), Suicide_Strike $b4f0 (init $b4f0, play $b6ed). SIDdecompiler's `-v2` Start: address equals the file's own PSID load address on all 3 files — no relocation-gap trap (gotcha 40).", "zero_page": "$b0-$b5 (6 bytes, `zb0`-`zb5` in the disassembly): three 16-bit indirect pointers, one per voice, each pointing into that voice's own note-stream in the song data (`(zb0,X)`=voice1, `(zb2,X)`=voice2, `(zb4,X)`=voice3). Confirmed identical on all 3 files.", "layout": "Driver code + inline data occupy one contiguous block per file (2136-2809 bytes). No filter table, no wavetable/pulsetable in the traced sense — see data_format." },
  "entry": { "init": "= load address on all 3 files. X register on entry = subtune index; init self-modifies a `JMP $0000` at a fixed offset (`sta <jmp>+1`/`+2` from an X-indexed `<label,>label` table) to dispatch to one of N per-subtune setup routines (N = subtune count: 2 for Slalom, 3 each for Waterline/Suicide_Strike). Each setup routine loads the 3 voice pointers (zb0-zb5) for that subtune, sets a handful of counters (voice-loop count, tempo divisor), and sets a phase flag to 1.", "play": "Fixed offset per file (called in IRQ, confirmed by original card's trace). Phase flag ($9a-offset byte): 0=idle, 1=one-time per-subtune init (zeroes SID, sets waveform/gate nibble per voice, phase->2), 2=normal per-tempo-tick playback (dec tempo counter, on reaching 0 advance all 3 voices one stream byte each)." },
  "speed": "Single global tempo divisor per subtune (a small constant, e.g. 3), all 3 voices advance in lockstep on the same tempo tick — no per-voice/per-note duration field found; per-note timing is entirely via the tempo divisor plus repeated $00-nibble 'silence' stream bytes.", "data_format": { "order_list": "None — each subtune's 3 voice pointers are set once at subtune-init to fixed addresses in that subtune's own inline data block; no separate order/pattern-list indirection layer.", "patterns": "Per-voice byte stream, one byte consumed per tempo tick: bit7 clear -> note byte, bits0-3 = note index into an 8-entry base-frequency table (`l929d`/`l92aa` in Slalom's build, 2 parallel 8-byte LE-frequency-halves arrays), bits4-6 = octave-shift count (0-7), applied via a repeated `asl`/`rol` doubling loop against the looked-up base frequency (classic note-in-octave + octave-doubling encoding, not a full chromatic table). Note index 0 (nibble=0) is a rest/hold: the byte is instead stored into a per-voice hold counter. bit7 set -> command byte: `$FF` = end-of-stream (stops that voice, clears phase to 0 after the last active voice); `(byte & $70) == $10` = 'set Attack/Decay', consuming one more stream byte as the new AD value; other `$70`-masked values fall through to unreferenced/dead code in all 3 traced files (never observed executed, so their meaning is undetermined, if they exist at all).", "instruments": "No separate instrument/voice-parameter table — waveform+gate nibble is set once at subtune-init per voice (from a template constant OR'd with the gate bit) and never touched again in the traced files; AD is the only per-note-settable synth parameter observed.", "wavetable": "N/A (no wavetable indirection; waveform fixed per voice per subtune, see instruments).", "pulsetable": "TODO — a `$d405,Y`-write-adjacent code path exists (see patterns' AD command) but no pulse-width write was ever observed in the traced 50-frame windows on any of the 3 files; not ruled in or out.", "filtertable": "TODO (no filter writes observed in the traced sample)" },
  "effects": { "encoding": "See data_format.patterns for the full note-byte/command-byte bit layout.", "commands": { "0x1x (bit7 set, (byte&0x70)==0x10)": "Set Attack/Decay from the following stream byte.", "0xFF": "End of voice's stream (stop)." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO ENTRY AT ALL for this composer — checked directly across two independent HVSC mirrors, confirming a genuine absence, not a fetch error. The folder path (`MUSICIANS/H/Haroutunian_Arti/`) is his only identity anchor within this project's data.",
    "PRIMARILY A PROGRAMMER, CONFIRMED FIRST-PARTY: an interview reprinted at atarimagazines.com (ROM magazine) is the best source — MS in Computer Engineering, self-taught on a TRS-80 Model I from 1978, first commercial release a 1980 TRS-80 text adventure ('MicroWorld'). He wrote 'Kid Grid' (1982, Tronix, sole programmer) in 2 months and 'Juice!' (1983, Tronix, sole programmer) in 4.5 months on Atari 8-bit using the Atari Assembler Editor cartridge, THEN PORTED BOTH TO C64 HIMSELF. Music is mentioned only as a personal hobby in the interview ('listen to music, play the piano, and read'), not a stated specialty — he reads as primarily a coder who also did his own sound, matching the total absence of any SIDId match for this tag.",
    "THREE CONFIRMED C64 GAMES, all Tronix Publishing (founded September 1982 by John Reece), all with Haroutunian as the sole programmer and likely composer given his self-taught, solo-porting workflow: Kid Grid (1982/83), Juice! (1983), and Slalom (1983, the traced file, a skiing game). CSDb independently confirms his composer credit on 'Waterline' (1983/84, also Tronix — id=2026, load $9000/init $9992/play $99B4, 3 subtunes) and 'Suicide Strike' (1983, a shoot-em-up, but published by System 3, NOT Tronix — a different publisher for this one title).",
    "'RIVER RAID' (a C64 port, 1984, Activision — Carol Shaw wrote the original Atari 5200 version) turns up in his credited catalog as a PROGRAMMER credit, but with NO SID/CSDb corroboration of a music role — flagged explicitly as programmer-only, not carried forward as a composer credit.",
    "NO CSDb SCENER PROFILE EXISTS — expected for a US commercial games programmer of this early era (1982-84), pre-dating the organized demoscene CSDb primarily documents. Only a bare CSDb release-credit page (`sid/?id=2026`) exists, no scener profile page.",
    "PERSONAL BIOGRAPHICAL DETAILS (approximate birth year 1957/58, 'Salt Lake City, UT') found only via low-confidence people-search aggregator sites (mylife.com, nuwber.com) — EXPLICITLY NOT INCLUDED as verified fact, flagged as unreliable/unverifiable sourcing rather than repeated as biography.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — pre-dates the 1990s-era demoscene tools (SF2/JCH/Laxity-family) most of this KB otherwise centers on, and no shared studio/publisher overlap found with other US commercial composers already carded (Ed Bogas, David Thiel, Kyle Johnson, Al Lowe, Paul Mudra, Rick Cardinali, Kenneth Arnold — all checked, none found). No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Twice Effect Editor)."
  ],
  "sources": [
    "Lemon64 — Arti Haroutunian game list: https://www.lemon64.com/games/list.php?list_individual=arti-haroutunian",
    "MobyGames — Arti Haroutunian (fetch blocked, indexed by search): https://www.mobygames.com/person/5632/arti-haroutunian/",
    "Internet Archive — Kid Grid (Tronix) manual: https://archive.org/details/KidGridTronix",
    "Internet Archive — Juice! (Tronix) manual: https://archive.org/details/juice-tronix",
    "ROM Magazine interview (biography, first-person quotes): https://www.atarimagazines.com/rom/issue5/interview.php",
    "CSDb sid id=2026 (Waterline, composer confirmation): https://csdb.dk/sid/?id=2026",
    "Local dataset: 3 files tagged Arti_Haroutunian, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Arti_Haroutunian` tag is American programmer-composer Arti
Haroutunian's own driver — primarily a coder at Tronix Publishing who
ported his own Atari 8-bit games to C64 himself, with music appearing to
be a personal hobby he also hand-coded. HVSC has no entry for him at all.
Player-ID-fingerprinted across 3 files, all his own; all 3 verified
byte-exact against a from-scratch disassembly (see Verification).

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **first-person-
sourced coder identity**: a rare, genuine interview confirming he was
primarily a programmer (2-4.5 month solo dev cycles, self-taught
assembly) who ported his own games to C64, rather than a dedicated
composer-for-hire.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this card's
own disassembly (below) is the only source. `SIDdecompiler` needs two
manual fixes on every file of this player: (1) zero-page equates
`zb2`-`zb5` are never emitted by the tool (only `zb0`/`zb1` get defined,
since only those two are ever read; `zb2`-`zb5` are write-only) — add
`zbN = zb0 + N` manually; (2) all 12-18 `sta zbN` self-modifying stores
must be forced to absolute/3-byte mode with 64tass's `@w` prefix
(`sta @w zbN`), or 64tass silently re-encodes them 1 byte shorter in
zero-page mode (lesson 36), producing a plausible-looking reassembly
that is 12+ bytes short and ~69-77% byte-diff instead of the true 100%.

## Verification

**`status: verified` (2026-07-31).** Disassembled and reconstructed all
3 tagged HVSC files (Slalom, Waterline, Suicide_Strike — every file
this player is fingerprinted across) with `SIDdecompiler -r` (pristine
byte reload, needed since this driver keeps a load-bearing
never-init'd tempo counter (`l9299` in Slalom's build) whose on-disk
value the tool's default drifted-trace snapshot gets wrong — see
disassembly notes for the other 2 required fixes).

- **Slalom.sid** (load/init `$8ac0`, play `$92b7`, 2 subtunes): 2809/2809
  bytes byte-exact (100.0000%). Native trace (both subtunes, 50 frames):
  register-write- and cycle-exact against the original (only the echoed
  filename differs).
- **Waterline.sid** (load `$9000`, init `$9992`, play `$99b4`, 3
  subtunes): 2503/2503 bytes byte-exact (100.0000%).
- **Suicide_Strike.sid** (load/init `$b4f0`, play `$b6ed`, 3 subtunes,
  published by System 3 rather than Tronix but same driver): 2136/2136
  bytes byte-exact (100.0000%).

**Non-tautological structural control (lessons 69/70/72):** a
byte-identical reassembly makes a same-address trace-diff prove
nothing by construction, so each file was also rebuilt at a different
base (`+$1037`, chosen for a non-zero low byte) and traced there. This
initially failed on all 3 files — SIDdecompiler leaves each voice's
2nd/3rd pointer (`zb2/zb3`, `zb4/zb5`) as raw two-byte-immediate
literal constants rather than symbolic `<label`/`>label`, because they
are built from two separate `lda #$xx` loads rather than a lo/hi table
pair (only the first pointer, `zb0/zb1`, is symbolized) — the exact
class in lesson 80. Fixed by decoding each literal pair back to an
offset from its data table's own label (e.g. `#<(l8b24+209)`) and
re-emitting symbolically: 4 pointer-pairs on Slalom (2 subtune-setup
routines x 2 extra pointers), 2 on Waterline (1 routine), 6 on
Suicide_Strike (3 routines) — 12 total fixes across the 3 files. After
the fix, the relocated control's register-write stream (cycle column
stripped, since page-crossing timing legitimately drifts on
relocation) matched the original **exactly on all 8 subtunes across
the 3 files** (156/2809, 235/2503, and 216/2136 bytes genuinely
differing at matching offsets between native and relocated builds —
real, non-trivial controls, not near-identical binaries).

This is the strongest result this card can currently support: 100%
byte-exact reconstruction of every tagged file plus a real relocation
round-trip proving the disassembly's code/data split and operand
resolution are structurally correct, not just byte-coincidentally
correct at one address.

## Sources

See the `sources` array — Lemon64, MobyGames, Internet Archive (2 pages),
ROM Magazine, and CSDb.

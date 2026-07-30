# Tonal Kaos (player routine)

```json
{
  "id": "tonal-kaos",
  "name": "Tonal Kaos (player routine)",
  "aliases": ["Tonal_Kaos"],
  "authors": ["Tonal Kaos"],
  "released": "1990-1991 (Atlantis Software era)",
  "status": "verified",
  "platform": "A playroutine used by musician 'Tonal Kaos' across a confirmed run of Atlantis Software budget titles (via the Shaw Brothers → Pantheon Software conversion pipeline). Player-ID-fingerprinted across 7 files: 5 by Tonal Kaos, 2 by Matt Gray (already carded and VERIFIED in this KB, [[matt-gray]]) — a genuinely UNEXPLAINED cross-composer co-occurrence, deliberately left as an open question rather than a resolved connection (see quirks).",
  "csdb_release": null,

  "memory": { "load_address": "Per-file, no fixed base — the routine is fully position-dependent but each game links it wherever it fits. Verified builds: Cavemania $3110-$3edd, Moontorc $2c00-$390f, Skatin' USA $2770-$323f, Superkid $2cf0-$37ff, Superkid in Space $3200-$3fff. In every file init == load address and play == load + a small fixed offset; the player never copies or relocates itself at runtime (SIDdecompiler's -v2 map Start/End equals the PSID payload extent exactly on all 5 files).", "zero_page": "$e0-$fe only. $e0-$f4 is per-voice state, 7 bytes/voice, addressed as base+X with X = 0/7/14: +0/+1 sequence pointer lo/hi, +2 note-duration countdown, +3 transpose, +4 current note, +5 voice-active flag, +6 wavetable index. $f5-$fe are globals: $f5/$f6 command-handler jump pointer (target of a `jmp ($f5)`), $f7 tempo reload, $f8 tempo countdown, $f9/$fa AND/OR operand scratch for the two read-modify-write filter commands, $fb/$fc/$fd/$fe filter-preset target / step / countdown / countdown-reload.", "layout": "Addresses below are the Cavemania $3110 build; the other four files have the identical structure shifted to their own base. $3110-$311a init stub; $311b subtune -> track-index table; $3124/$314e track-start pointer lo/hi (42 slots, 18 in range, the remaining 24 point past EOF and are dead); $3178/$3184 track-jump target table (12); $3190/$3196 sub-sequence call target table (6); $319c-$31ef seven parallel 12-entry instrument tables ($319c control/waveform, $31a8 attack/decay, $31b4 sustain/release, $31c0 pulse-width hi, $31cc pulse-width sweep delta, $31d8 wavetable start index, $31e4 vibrato delay); $31f0 wavetable; $3211/$3215/$3219 filter-preset target/step/rate; $321d/$322d 16-entry command-handler jump table lo/hi; then four 97-entry note tables back to back — $323d frequency lo, $329e frequency hi, $32ff vibrato depth lo, $3360 vibrato depth hi; $33c9-$33f9 shadow/work registers (stride 7 per voice: freq lo/hi, pw lo/hi, control, AD, SR, plus $33e0 $d417 shadow, $33e1 $d418 shadow, $33e6 instrument, $33e7/$33e8 sub-sequence return pointer, $33f8 vibrato delay counter, $33f9 vibrato phase); $340f-$343b init body; $3490-$3789 play routine and command handlers; $378a-$3edd song data." },
  "entry": { "init": "$3110 in Cavemania — always equal to the file's load address on all 5 verified files. Takes the subtune number in A; `tax / ldy subtune_table,X / jmp init_body`, then seeds the three voices with `jsr` calls at X = 0, 7, 14.", "play": "$3490 in Cavemania (load+$380); load+$516 Moontorc, load+$90 Skatin' USA, load+$94 Superkid, load+$a0 Superkid in Space — the offset is per-build, not a family constant. Called once per frame from the game's own IRQ." },
  "speed": "1x (50Hz) on every file — PSID speed field is 0x00000000 in all five. Tempo is software: a global countdown at ZP $f8 reloaded from $f7, decremented once per play call; voice sequence advance only happens on the frame that counter wraps.",
  "data_format": { "order_list": "Per-voice track pointer held in ZP $e0/$e1 (+7 per voice), seeded at init from the $3124/$314e lo/hi table via the $311b subtune index. There is no separate order-list layer — the track stream itself carries both notes and commands, and structure is expressed with the jump/call/return commands (1/2/3) rather than a pattern index list.", "patterns": "Single interleaved byte stream per voice, fetched with `lda ($e0,X)` and a manual 16-bit pointer increment. Bit 7 set = note: `and #$7f`; a value of 0 after masking is a rest/tie, otherwise the note is transposed by ZP $e3 and used to index the frequency tables. Bit 7 clear = command: `and #$1f` indexes the 16-entry handler jump table at $321d/$322d, dispatched through `jmp ($f5)`. Note bytes are followed by a duration byte (loaded into $e2) unless the per-voice legato flag $33e2 is set.", "instruments": "12 instruments, stored as seven parallel single-byte arrays indexed by the instrument number in $33e6,X (set by command 9). On note-on the handler writes control/waveform, AD and SR straight to $d404/$d405/$d406, sets pulse-width hi from $31c0, and loads the wavetable start index ($31d8) and vibrato delay ($31e4) into the voice's working state.", "wavetable": "Single table at $31f0, walked one entry per frame from the per-voice index at ZP $e6 (0 = wavetable off). Entries are signed note offsets added to the base note. Bit 7 set marks a loop: `and #$7f` gives the index to jump back to, which is written back into $e6 and immediately re-read, so a wavetable can loop to any earlier point. Value $7f is a hold/terminator.", "pulsetable": "No table — pulse width is a per-instrument linear sweep. Each frame the routine does `clc / lda pw_lo_shadow,X / adc $31cc,Y / sta pw_lo_shadow,X / sta $d402,X`, i.e. the instrument's $31cc byte is a fixed per-frame delta added to the 8-bit pulse-width low byte; the high nibble at $d403 is set once at note-on from $31c0 and never swept.", "filtertable": "Two independent global mechanisms, which is why the traces are so filter-dense (52 of Cavemania subtune 0's 571 writes). (1) A free-running cutoff ramp in the play routine's prologue: $d415 is written 0 every frame, then a pair of self-modified operands act as accumulator and step — `lda #<step> / adc #<cutoff> / sta <cutoff operand> / sta $d416`, with the step negated via `eor #$fe` on its own operand byte whenever the accumulator wraps to zero, producing a continuous triangle sweep of $d416. (2) A preset-driven $d418 ramp selected by command 15, which loads target/step/rate from $3211/$3215/$3219 into ZP $fb/$fc/$fd/$fe and then walks the $d418 low nibble toward the target at that rate. Resonance/routing at $d417 is set only by command 14." },
  "effects": { "encoding": "Command bytes are stream bytes with bit 7 clear; the low 5 bits index a 16-entry jump table of real 6502 handler addresses stored lo/hi at $321d/$322d and entered via `jmp ($f5)`. Handlers read their own inline operand bytes from the sequence stream, so commands are variable length (0, 1 or 2 operand bytes). Slots 5/6/7 all point at a bare `rts` and are unused.", "commands": { "0": "Stop voice — clears the active flag at ZP $e5.", "1": "Track jump: next byte indexes the $3178/$3184 table, whose entry replaces the voice's sequence pointer.", "2": "Sub-sequence call: saves the current pointer to $33e7/$33e8,X, then jumps via the $3190/$3196 table indexed by the next byte.", "3": "Return from sub-sequence — restores the pointer from $33e7/$33e8,X.", "4": "Repeat/loop counter driven from $33e3/$33e4,X (handler at $3621; reached only on subtunes outside the traced set, so present in the payload but emitted as data by SIDdecompiler).", "8": "Volume / filter-mode: reads two operand bytes into $f9/$fa, then `lda $33e1 / and $f9 / ora $fa / sta $33e1 / sta $d418` — a masked read-modify-write of the $d418 shadow.", "9": "Set instrument (writes $33e6,X) and resets the pulse-width low shadow to 0.", "10": "Set the per-voice legato/gate flag $33e2,X from the next byte.", "11": "Set tempo — next byte becomes the global reload value at ZP $f7.", "12": "Self-modifies the instrument wavetable-start table ($31d8,Y) for the current instrument from the next byte.", "13": "Set per-voice transpose (ZP $e3,X).", "14": "Filter resonance/routing: same masked read-modify-write shape as command 8 but against the $d417 shadow at $33e0.", "15": "Select filter preset — next byte indexes $3211/$3215/$3219 into ZP $fb/$fc/$fd/$fe.", "5,6,7": "Unused — the jump table points all three at the same `rts`." } },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "TONAL KAOS'S IDENTITY IS ALMOST TOTALLY UNDOCUMENTED, explicitly flagged: HVSC Musicians.txt has a bare entry ('Tonal, Kaos', no realname/country/group — unusually sparse compared to neighboring entries). No CSDb scener or group profile page exists for this handle at all — it appears only as a music credit, never as a demoscene participant. Real name, nationality, and any coding credit are genuinely absent from every source checked.",
    "GAME LIST FULLY CONFIRMED (5 games, all Atlantis Software, matching CSDb's own 5-credit count for this handle): Cavemania (1991, the traced file), Moontorc (1991), Skatin' USA (1990), Superkid (1990), Superkid in Space (1991) — all via the same production pipeline: developed by The Shaw Brothers, converted by Pantheon Software, published by Atlantis Software, with Chris Edwards consistently credited as graphics artist across the whole run.",
    "THE MATT GRAY CONNECTION IS NOW RESOLVED BY DISASSEMBLY (2026-07-30): the 2 Matt Gray files are NOT this routine. Measured three independent ways. (a) Structure: all 5 Tonal Kaos files run in place (SIDdecompiler's -v2 Start/End equals the PSID payload extent exactly, init == load address), whereas Mean_Streak copies itself to $b1c0 through a `lda #$36 / sta $01` bank-switch loop (map End: $babf, far past its $371b payload end) and Yogi_Bear dispatches through a self-modified indirect vector (`play jmp ($2d46)`, map End: $9eff) — neither convention appears anywhere in the Tonal Kaos family. (b) Opcode-stream similarity (mnemonic + addressing-mode tokens, which is load-address independent, unlike a raw byte diff): the 5 Tonal Kaos files share runs of 42-96 identical consecutive instructions with each other, Mean_Streak and Yogi_Bear share a 63-instruction run with each other, but Tonal-Kaos-vs-Matt-Gray tops out at 27 — and that 27-run is a generic `lda (ptr,X) / tay / lda table,Y / sta shadow,X` register-shadow idiom with no distinguishing structure. (c) The largest raw shared byte run (181 bytes, at $323d in Cavemania) is the standard 12-note-per-octave frequency table `00 0c 1c 2d 3e 51 66 7b 91 a9 c3 dd ...`, used verbatim by dozens of unrelated C64 players — a classic cross-player false positive. Conclusion: the co-occurrence under one tag is a player-identification false positive, most plausibly driven by the shared stock frequency table and/or that generic shadow-write idiom, exactly as the original speculation guessed. Note the tag is NOT a SIDId signature — 'Tonal Kaos' does not appear in sidid.nfo at all, nor in DeepSID's curated players.json; it is one of the ~496 synthetic tags derived from the DeepSID dump's raw player field. The original unresolved-question text is preserved below for provenance. PRIOR TEXT: Matt Gray's own 2 files under this tag (Mean Streak, 1987, Mirrorsoft/Dalali Software; Yogi Bear, 1987, Piranha/Dalali Software) trace to an ENTIRELY DIFFERENT production pipeline (Dalali Software → Mirrorsoft/Piranha, 1987) than Tonal Kaos's confirmed Atlantis Software run (Shaw Brothers → Pantheon → Atlantis, 1990-91) — no shared personnel, publisher, or developer found connecting the two chains, and no source anywhere ties Tonal Kaos to Dalali, Mean Streak, or Yogi Bear directly. Given this project's own established precedent that a DeepSID/HVSC player tag identifies a PLAYBACK-ROUTINE SIGNATURE, not necessarily a consistent single composer (the already-documented [[rob-hubbard]] tag spreads across 51 different composers per that card's own research), the most defensible reading is that Dalali's own 1987 player routine happens to structurally match whatever generic driver Tonal Kaos's later Atlantis titles used — but this is EXPLICITLY SPECULATION, not a confirmed fact, and is flagged as an open question rather than resolved.",
    "MATT GRAY'S OWN ACCOUNT OF MEAN STREAK is relevant context (already partially documented via his existing verified card): he states Dalali's own programmers 'had to rewrite the player... left out all the modulation and pitch bend routines' for that specific game, meaning the actual in-game driver differs from his own original composition tool — a real, first-party-sourced reason the tag/routine identity for his 2 files here could differ from his usual signature.",
    "No known relationship found to any other composer/tool already in this KB beyond the Matt Gray co-occurrence discussed above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Tonal, Kaos' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb search — Tonal Kaos (5 credits, all Atlantis Software, no scener/group page): https://csdb.dk/search/?search=Kaos+Tonal",
    "Lemon64 — Superkid (1990, Atlantis/Pantheon, Tonal Kaos musician credit): https://www.lemon64.com/game/superkid",
    "Lemon64 — Cavemania (1991, same pipeline): https://www.lemon64.com/game/cavemania",
    "Lemon64 — Mean Streak (1987, Dalali Software, Matt Gray's own account of the driver rewrite): https://www.lemon64.com/game/mean-streak",
    "Lemon64 — Yogi Bear (1987, Dalali Software, Piranha): https://www.lemon64.com/game/yogi-bear",
    "MobyGames — Atlantis Software Limited (company credits, corroborates the 5-game set): https://www.mobygames.com/company/5412/atlantis-software-limited/",
    "MobyGames — Pantheon Software (conversion house): https://www.mobygames.com/company/4055/pantheon-software/",
    "CSDb scener — Matt Gray (id=8134, group Matt & Chaz — no Tonal Kaos connection found there): https://csdb.dk/scener/?id=8134",
    "Existing KB card: knowledge/players/matt-gray.md (VERIFIED, the sibling composer whose 2 files here remain unexplained)",
    "Local dataset: 7 files tagged Tonal_Kaos, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Tonal_Kaos` tag is a playroutine used by musician 'Tonal Kaos' across
a confirmed run of five Atlantis Software budget titles. It is a compact
(~690 bytes of code) three-voice byte-stream sequencer with a 16-entry
command jump table, 12 instruments held as seven parallel byte arrays, a
looping wavetable, a per-instrument linear pulse-width sweep, per-note
vibrato, and two independent global filter sweeps that make its traces
unusually filter-dense.

Two of the 7 files carrying this tag are by VERIFIED composer Matt Gray,
on games from a completely different 1987 production pipeline. That
co-occurrence used to be this card's headline open question; the 2026-07-30
disassembly pass **settled it** — those 2 files are a different routine
entirely, and the tag match is a false positive driven by a stock
frequency table both players happen to use. See the quirks array and
Verification.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: Tonal Kaos's **near-total
lack of documentation** (no CSDb profile at all); the **fully confirmed
Atlantis Software game list**; and the **Matt Gray connection, now
resolved by disassembly** as a tag false positive rather than shared code.

Two gotchas for anyone rebuilding this player:

- **`SIDdecompiler` relocates it incorrectly without help.** Its split
  lo/hi pointer tables are only partly symbolised, so a relocated build
  loses voices 2 and 3 while still byte-diffing 100% at the native
  address. Re-emit all four table pairs from the original bytes — see
  Verification for the exact addresses.
- **Use `-r`.** The global filter cutoff sweep stores its accumulator and
  its step in self-modified immediate operands, so without `-r` the
  disassembly captures drifted mid-playback values instead of the file's
  cold-start ones.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). The memory
map, ZP map, data format and command table in the JSON block above are
all derived from this project's own disassembly of the five files (see
Verification), not from any external source.

The routine is small — about **690 bytes of code** (300 instructions) in
the Cavemania build; the remaining ~2,850 bytes of that file are tables
and song data. It is a straightforward per-voice byte-stream sequencer:
three voices at a 7-byte ZP stride, a 16-entry command jump table, a
12-slot instrument table set, one wavetable, a per-instrument linear
pulse-width sweep, per-note vibrato, and two independent global filter
sweeps.

Two handler blocks (the command-4 repeat counter at `$3621` and the
`$d418` preset ramp at `$34e9`) are real code that SIDdecompiler emits as
`.byte` data because no traced subtune reaches them — they were decoded
by hand from the raw bytes and are described in the JSON block, but they
are not exercised by any trace below.

## Verification

**`status: verified` (2026-07-30)** — byte-exact reconstruction and an
exact register-write match on a build that is *not* byte-identical to the
original.

**Method.** `SIDdecompiler` with `-r` (reload pristine tune before
emitting, which removes the whole self-modified/drifted-byte problem
class this player would otherwise hit — its filter sweep keeps its state
in self-modified immediate operands), `-z -d -c`, relocated to each
file's own `-v2` map `Start:` address, reassembled with `64tass -a
--cbm-prg`, then traced with `sidm2-sid-trace.exe` at 50 frames.

**Byte-diff, all 5 Tonal Kaos files, first pass, no patching:**

| file | load | init / play | payload | reassembled | byte match |
|---|---|---|---|---|---|
| Cavemania | `$3110` | `$3110` / `$3490` | 3534 | 3534 | **100.0000%** |
| Moontorc | `$2c00` | `$2c00` / `$3116` | 3344 | 3344 | **100.0000%** |
| Skatin' USA | `$2770` | `$2770` / `$2800` | 2768 | 2718 | **100.0000%** over 2718 |
| Superkid | `$2cf0` | `$2cf0` / `$2d84` | 2832 | 2774 | **100.0000%** over 2774 |
| Superkid in Space | `$3200` | `$3200` / `$32a0` | 3584 | 3483 | **100.0000%** over 3483 |

**Trace-diff, all 20 subtunes across the 5 files:** every subtune matches
the original register-write-for-register-write *and* cycle-for-cycle — 0
divergences. Cavemania's five subtunes are 571 / 552 / 534 / 575 / 565
writes over 50 frames (the 571 figure reproduces the 2026-07-14 pass
exactly); Moontorc 539 / 539; Skatin' USA 511 / 511 / 511 / 464 / 512;
Superkid 719 / 595 / 719 / 633; Superkid in Space 617 / 597 / 521 / 595.

**The non-tautological test.** The five results above are byte-identical
reconstructions, so an identical trace is guaranteed by construction and
proves nothing on its own. The real test was a **relocation round-trip**:
rebuild the player at a different address and check it still produces the
same register writes. This exercises every code/data boundary decision
and every address reference in the disassembly — a single byte
misclassified as data (or vice versa) breaks it.

- Cavemania relocated `$3110` → `$5000` (354 of 3534 bytes differ from
  the original): **all 5 subtunes register-write-exact, 0 divergences**
  (571 / 552 / 534 / 575 / 565 writes, same as native). Cycle timestamps
  drift by about 6 cycles/frame, entirely from page-crossing penalties —
  `$3110` and `$5000` have different intra-page offsets.
- Moontorc relocated `$2c00` → `$5000`: **both subtunes register-write-
  exact AND cycle-exact, 0 divergences** (539 / 539). Both addresses are
  page-aligned, which is exactly why the cycle drift disappears here —
  confirming the Cavemania drift is a page-crossing artefact and not a
  behavioural difference.

**One real defect found in the tooling, and the fix.** SIDdecompiler's
relocation output is *incomplete* for this player. The routine stores its
pointers as split lo/hi byte tables, and the tool only symbolises the
entries its trace actually dereferenced, leaving the sibling entries as
hardcoded page constants — e.g. it emits `.byte >l378a, $37, $37, >l37d2,
$37, $37`, where those `$37`s are the high bytes of pointers whose low
bytes it *did* symbolise. At the native address this is invisible (the
constants are correct there, hence the 100% byte-diff), but on relocation
the symbolised entries move and the constants don't, so voices 2 and 3
silently read garbage: the unpatched relocated build produced 237 writes
instead of 571, with only voice 1 alive. Fix: decode all four lo/hi table
pairs from the original file's own bytes and re-emit every entry
symbolically as `<(RB+offset)` / `>(RB+offset)`. For Cavemania those pairs
are `$3124`/`$314e` (42 slots, 18 in range — the other 24 point to
`$3ede-$3fb7`, past EOF, and are dead), `$3178`/`$3184` (12),
`$3190`/`$3196` (6) and `$321d`/`$322d` (16, the command jump table); for
Moontorc `$2c25`/`$2c46` (33), `$2c67`/`$2c6a` (3), `$2c6d`/`$2c78` (11).
That patch changed 110 bytes and closed the relocated trace completely.

**Honest scope / known gap.** Three of the five files reassemble slightly
short — Skatin' USA by 50 bytes (`$320e-$323f`), Superkid by 58
(`$37c6-$37ff`), Superkid in Space by 101 (`$3f9b-$3fff`). These are
trailing regions SIDdecompiler's emulation never touched (the gotcha-9
class), and every subtune of each file traces exact without them, so they
are dead as far as playback goes — but they are genuinely absent from the
reconstruction rather than reproduced, and the 100% figures for those
three files are over the covered range only. The relocation round-trip
was run on two files (Cavemania, Moontorc), not all five.

Scratch work:
`C:\Users\mit\AppData\Local\Temp\claude\C--Users-mit-claude-sid-reference-project\54363ab5-4f49-4f93-99ab-27aa24abc3b8\scratchpad\tonal-kaos\`

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 entries), Lemon64
(4 pages), MobyGames (2 pages), and the existing matt-gray card.

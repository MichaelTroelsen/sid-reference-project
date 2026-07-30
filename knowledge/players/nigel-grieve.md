# Nigel Grieve (player routine)

```json
{
  "id": "nigel-grieve",
  "name": "Nigel Grieve (player routine)",
  "aliases": ["Nigel_Grieve"],
  "authors": ["Nigel Grieve"],
  "released": "1987 (Rack-It/Hewson era)",
  "status": "verified",
  "platform": "English musician Nigel Grieve's playroutine, used on a confirmed run of Rack-It/Hewson budget game credits and demoscene work (Fairlight, Dexion, Megaforce). Player-ID-fingerprinted across 6 files: 5 by Grieve, 1 by 'Bizzmo' (Doug Roberts/Relax Designs, an unrelated group) reusing the routine for a single track. Also relevant to the still-open Zynaps composer question in [[steve-turner]]'s card — see quirks.",
  "csdb_release": null,

  "memory": { "load_address": "FULLY RELOCATABLE — every file assembles at its own base; read each file's own PSID header, do NOT assume a family constant. Verified 2026-07-30 by disassembly+reassembly of 6 HVSC files: Anarchy $1e00-$2ba9 (init $1e00, play $1e06), Herobotix $5828-$6343 (init $582b, play $582e), Zynaps $08f0-$1c55 (init $08f0, play $0b86), Super_Cup_Football $0dbb-$1e2b (init $1e23, play $106a), Sunburst $3000-$3dc7 (init $300f, play $3009), Zolo $0e00-$1cff (init $1200, play $1633).", "zero_page": "NONE. Confirmed empirically: SIDdecompiler run with -z (create labels for every ZP address touched) emitted ZERO zero-page labels in all six reassembled builds. All state lives in a contiguous absolute-addressed workspace inside the module (see layout) — this is unusual for a 1987 driver and is the single most distinctive structural trait of the routine.", "layout": "Verified on Anarchy ($1e00 build; offsets are load-relative and hold across the family's main variant). load+$000: 5-entry JMP dispatch table (init / song-data init / play / subtune-select / one more). load+$00f-$01a: three 3-byte per-voice constant tables (voice bit masks $01/$02/$04, SID register offsets $00/$08/$10, workspace strides $00/$04/$08). load+$01b-$0eb: 16-bit little-endian note frequency table (~8 octaves), BUT indexed from a base of load-$12 (see quirks) so its first 9 entries lie outside the file. load+$0ec: song/voice pointer setup. load+$13c: per-subtune song pointer table, 6 bytes per subtune (3 voices x 16-bit lo/hi split into two interleaved .byte streams). load+$16d-$188: SID shadow-register block, copied to $d400-$d418 every frame ($16d-$171 voice1 regs, $172-$173 voice1 AD/SR, $175-$179 + $17a-$17b voice2, $17d-$181 + $182-$183 voice3, $185-$186 filter cutoff, $187 res/filt, $188 mode/volume). load+$16d..$261 (245 bytes) is zeroed wholesale by init — all runtime working storage. load+$787/$7a1: two interleaved lo/hi effect-command dispatch pointer tables, 13 slots each." },
  "entry": { "init": "Per file, from the PSID header — NOT a fixed convention. Anarchy $1e00 (== load), Herobotix $582b (load+3), Zynaps $08f0 (== load), Super_Cup_Football $1e23, Sunburst $300f, Zolo $1200. On Anarchy the header init lands on a routine that JSRs the load+3 dispatch entry (song-data init) then JMPs the load+9 entry (subtune select).", "play": "Per file: Anarchy $1e06 (load+6), Herobotix $582e (load+6), Zynaps $0b86, Super_Cup_Football $106a, Sunburst $3009, Zolo $1633. Single JSR per frame; play copies a shadow-register block to $d400-$d418 as its last act." },
  "speed": "Single-speed (50 Hz / one play call per frame) on 5 of 6 verified files — PSID speed field 0x00000000 on Anarchy, Herobotix, Sunburst, Super_Cup_Football, Zynaps. Zolo declares speed 0x1 (CIA-timed) for its single subtune. The unreconstructed Starglider declares 0x1fff (all 13 subtunes CIA-timed) and a play address of $0000 (installs its own IRQ) — the family's only non-standard case.",
  "data_format": { "order_list": "Per-subtune entry is a 3-voice pointer triple in the table at load+$13c, stored as two interleaved .byte streams (all low bytes, then the corresponding high bytes at +1), indexed by subtune*6. init copies the triple into the three per-voice live sequence pointers in workspace.", "patterns": "Per-voice byte stream read through a self-modified absolute LDA (operand held in the workspace sequence-pointer pair, incremented after each fetch). Command bytes are range-checked against #$0f before dispatch; values below the command range are note/duration data.", "instruments": "8-byte records, read through a self-modified LDA whose operand is computed as (table_base + instrument*8) with the multiply done as three ASLs plus a ROL into the operand high byte — i.e. instrument index is the raw 5-bit-ish value from the stream.", "wavetable": "Not a separate table — waveform/control lives in the per-voice instrument record and the SID shadow block; gate on/off is done by AND #$f7 / ORA on the shadow control byte.", "pulsetable": "Pulse width is maintained as a 16-bit accumulator in the workspace (ADC/ADC chain into the shadow $d402/$d403 pair per voice); no separate indexed pulse table.", "filtertable": "No indexed filter table. Filter cutoff lo/hi are plain shadow bytes at load+$185/$186; resonance/routing at load+$187 is rebuilt each frame as (previous AND #$0f) ORA (a workspace nibble shifted left 4); master volume at load+$188 is (previous AND #$f0) ORA (workspace volume nibble). Filter writes are therefore emitted every frame regardless of use, which is why a 50-frame trace shows so few filter *changes*." },
  "effects": { "encoding": "Dual-dispatch: a command byte c (checked against #$0f) indexes TWO parallel 13-slot pointer tables at load+$787 (lo/hi interleaved) and load+$7a1. The first table's entry is the command's one-shot 'start' handler, invoked when the command is first read from the stream; the second is its per-frame 'update' handler, re-invoked every frame while the command is active. Both are called through a single self-modified JMP instruction at load+$57f whose operand is patched from the table before each call. Slot 0 is a null pointer ($0000) in both tables, so commands are effectively 1-12.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "USES NO ZERO PAGE AT ALL (verified 2026-07-30 across six independently reassembled files, via SIDdecompiler -z which labels every ZP address the emulation touches — zero labels emitted in every build). All per-voice state, sequence pointers and SID shadow registers live in a single 245-byte absolute-addressed block inside the module (load+$16d..$261) that init zeroes wholesale. Practically: this driver can be dropped into a game with no ZP budget negotiation at all, which is a plausible reason a credited-musician-not-coder like Grieve could reuse it across unrelated publishers' engines.",
    "THE NOTE FREQUENCY TABLE IS ADDRESSED FROM A BASE *BELOW* THE FILE'S OWN LOAD ADDRESS (Anarchy: `lda $1def,Y` / `lda $1dee,Y` where load = $1e00, i.e. base = load-$12; Herobotix: $5817/$5818 = load-$11). The table's first ~9 entries (the lowest, unusable octave) therefore lie outside the .sid payload entirely and are never read. Two consequences: (a) SIDdecompiler's -v2 map reports Start: BELOW the PSID load address on files that happen to index low enough (Herobotix Start $5819, Zolo Start $033a) and emits the gap as zero bytes — this is out-of-file RAM, NOT a copy destination and NOT workspace to be patched from the original (cf. lessons 60/62); (b) those two literal operands are the ONLY thing in the whole player that breaks under relocation, because they fall outside the disassembled range and SIDdecompiler leaves them as absolute constants.",
    "TWO ENGINE SUB-VARIANTS ARE PRESENT UNDER THE ONE TAG, measurable without disassembly. Scanning raw payloads for address-operand-free opcode patterns (lesson-68 method) and comparing RELATIVE offsets from the init anchor `a9 08 8d 04 d4 8d 0b d4 8d 12 d4`: Anarchy ($1eec), Zynaps ($09fe), Herobotix ($5915) and Bizzmo's Shield ($b1eb) put the shadow-copy loop `9d 00 d4 ca 10` at anchor+$12, while Super_Cup_Football ($0f2f) and Starglider ($c0e2) put it at anchor+$0f. Sunburst, Zolo and Zynaps_pre-release miss the anchor entirely and use a visibly different SID-output idiom (`sta $d400,Y` with Y as the voice offset, no `ldx #$1c` clear loop) — i.e. an earlier/simpler engine, or in Zynaps_pre-release's case a different author's driver. Two Bizzmo control files (Riff_89, Drivin) also miss every pattern, so the Shield hit is specific, not generic 6502.",
    "ZYNAPS_PRE-RELEASE IS STRUCTURALLY NOT THIS ROUTINE (verified 2026-07-30): it misses all five opcode signatures that the verified Grieve builds share, and its SID output idiom differs. This is independent code-level support for the platform-split hypothesis already argued from secondary sources below — the pre-release file and the shipped Zynaps.sid are genuinely different drivers, not two builds of one.",
    "CSDb SCENER PROFILE CONFIRMS 'Musician' function (id=13662), NOT coder — a personal/hand-coded-by-Grieve-himself routine is therefore unlikely on current evidence; profile spans 1986-2021 (densest 1987-1991), Zynaps rips/Anarchy/Herobotix/Starglider/Super Cup Football/Sunburst plus compilation appearances. Demozoo (id=79546) additionally lists demoscene group memberships 1986-1987: Fairlight, Dexion, Megaforce, Reflex Cracking Squad, Cracking Team of Darkness, 69'ers — cracking-scene intro/demo tunes, separate from his commercial game credits.",
    "TWO CONFIRMED COMMERCIAL GAME CREDITS, both Rack-It (Hewson's budget label): Anarchy (the traced file — creator Michael Sentinella, musician Nigel Grieve, 1987 — NOT 1988/Martech as an initial research assumption guessed; the PSID metadata's 1988 date is likely just a compile/release-date mismatch against the actual 1987 game ship date, publisher corrected to Rack-It/Hewson) and Herobotix (1987, creator Steven Collins, musician Nigel Grieve — a commercial shoot-em-up, not a demo, confirming the same credited-musician pattern as Anarchy).",
    "THE ZYNAPS QUESTION (raised in [[steve-turner]]'s card as an unresolved open question) HAS NEW, MODERATE-CONFIDENCE EVIDENCE POINTING TO A PER-PLATFORM RESOLUTION, not a head-to-head conflict: two independent secondary sources (an FRGCB blog retrospective and C64-Wiki's own Zynaps game page, the latter citing the exact HVSC path MUSICIANS/G/Grieve_Nigel/Zynaps.sid) both credit the C64 version's music solely to Grieve, while the FRGCB source separately states Steve Turner composed the SPECTRUM version. Neither source mentions the other composer for the opposite platform. This suggests 'Zynaps_pre-release' (documented on Turner's own card) may be a genuine prototype/beta using Turner's driver before Grieve's tune shipped in the final C64 release, rather than the two composers competing for the same platform's soundtrack — plausible and consistent with both cards, but still only two secondary sources with no primary/interview confirmation, so this is reported as 'probable, not proven,' not as a settled fact.",
    "'BIZZMO' (the tag's sole non-Grieve composer, 1 file: 'Shield') is independently identified as Doug Roberts of Relax Designs, England (HVSC: 'Bizzmo (Roberts, Doug) / Relax Designs') — no group overlap found with Grieve's own circle (Fairlight/Dexion/Megaforce/Reflex/CTOD/69'ers), so this reads as an unrelated composer reusing Grieve's routine for a single track, the same one-off-reuse pattern already seen on other tags in this KB (e.g. Rob_Hubbard, Steve_Turner).",
    "A MobyGames person entry (id 151396) spells the surname 'Nigel GREAVE' rather than 'Grieve' — confirmed to be the SAME person via an identical Anarchy credit match, not a different-person risk; flagged as a spelling variant only.",
    "NO VGMPF PAGE EXISTS for Nigel Grieve — checked explicitly to rule out a common cross-contamination source used elsewhere in this KB. No real name field, birth year, or first-person interview was found anywhere.",
    "Relationship to [[steve-turner]] noted above (Zynaps platform-split hypothesis) but NOT encoded as a technical edge — it concerns which composer's tune shipped on which platform, not shared code between the two drivers. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found; critical-review comparisons to Daglish/Galway in the FRGCB piece are praise, not a documented working relationship, and are not treated as one)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Grieve, Nigel - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Nigel Grieve (id=13662, function Musician, full credit list): https://csdb.dk/scener/?id=13662",
    "Demozoo — Nigel Grieve (id=79546, group memberships 1986-1987): https://demozoo.org/sceners/79546/",
    "Lemon64 — Anarchy (full credits, 1987 Rack-It/Hewson correction): https://www.lemon64.com/game/anarchy",
    "Lemon64 — Herobotix (full credits): https://www.lemon64.com/game/herobotix",
    "uvlist — Herobotix: https://www.uvlist.net/game-19876-Herobotix",
    "FRGCB blog — 'Zynaps (Hewson Consultants Ltd, 1987)' (C64 music credited to Grieve, Spectrum to Turner): http://frgcb.blogspot.com/2024/03/zynaps-hewson-consultants-ltd-1987.html",
    "C64-Wiki — Zynaps (credits Grieve, cites HVSC path MUSICIANS/G/Grieve_Nigel/Zynaps.sid): https://www.c64-wiki.com/wiki/Zynaps",
    "HVSC Musicians.txt — Bizzmo entry ('Bizzmo (Roberts, Doug) / Relax Designs - UNITED KINGDOM (ENGLAND)')",
    "Existing KB card: knowledge/players/steve-turner.md (the Zynaps open question this card provides new evidence toward)",
    "Local dataset: 6 files tagged Nigel_Grieve, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Nigel_Grieve` tag is English musician Nigel Grieve's playroutine,
used across confirmed Rack-It/Hewson game credits (Anarchy, Herobotix)
and mid-1980s demoscene work. Player-ID-fingerprinted across 6 files, 5
by Grieve and 1 by an unrelated one-off reuser ('Bizzmo'). New evidence
found here bears directly on [[steve-turner]]'s open Zynaps question.

## Quirks & gotchas

See the `quirks` array. Technically the load-bearing ones are **zero
zero-page usage** and the **note table indexed from below the load
address**; historically it is the **Zynaps per-platform-split evidence**
(two independent sources credit Grieve with the C64 version and Turner
with the Spectrum version), which the 2026-07-30 disassembly pass now
supports at code level: `Zynaps_pre-release.sid` shares none of the
verified routine's opcode signatures, so it is a different driver rather
than an earlier build of the shipped one.

## Disassembly notes

No published source exists (not in the realdmx RE repo, no STIL note). The
memory map, entry conventions, data format and effect encoding recorded in
the JSON block above are all derived from an original disassembly produced
2026-07-30 (see Verification) — `SIDdecompiler` + `64tass` round-trip of
six HVSC files, cross-checked against each other.

Highlights worth knowing before touching this player: it uses **no zero
page whatsoever**; its note table is indexed from a base *below* the load
address; and effect commands are dispatched through **two** parallel
13-slot pointer tables (a one-shot start handler and a per-frame update
handler) via a single self-modified `JMP`.

## Verification

**`status: verified` (2026-07-30).** Six of the eight HVSC
`Grieve_Nigel` files were disassembled, reassembled **100.0000%
byte-exact**, and then proven non-tautologically by a **relocation-
invariance** trace test (lessons 69/70/72): each build was re-emitted from
the same disassembly at a different base address — producing a materially
different binary — and traced against the original.

Recipe (batch25 default, no hand-patching of drifted bytes needed —
`-r` was sufficient on every file):

```
SIDdecompiler.exe <file>.sid -o out.asm -a<DECIMAL of the -v2 map's Start:> -z -d -c -r
64tass.exe -a --cbm-prg -o out.prg out.asm
```

| File | PSID load / init / play | Payload | Byte-diff | Subtunes traced | Register writes | Trace diff |
|---|---|---|---|---|---|---|
| Anarchy | $1e00 / $1e00 / $1e06 | 3498 B | **100.0000%** (0/3498) | 5 | 189+309+213+273+191 = **1175** | **0** |
| Herobotix | $5828 / $582b / $582e | 2844 B | **100.0000%** (0/2844) | 1 | **373** | **0** |
| Zynaps | $08f0 / $08f0 / $0b86 | 4966 B | **100.0000%** (0/4966) | 1 | **185** | **0** |
| Super_Cup_Football | $0dbb / $1e23 / $106a | 4209 B | **100.0000%** (0/4209) | 5 | 205+205+290+306+215 = **1221** | **0** |
| Sunburst | $3000 / $300f / $3009 | 3528 B | **100.0000%** over the 3111 B covered ($3009-$3c2f, 88.2%) | 1 | **140** | **0** |
| Zolo | $0e00 / $1200 / $1633 | 3840 B | **100.0000%** over the 3780 B covered (98.4%) | 1 | **85** | **0** |

**3,179 register writes compared, 0 divergences**, at 50 frames per
subtune. Diffs were computed programmatically on `frame,register,
old_value,new_value` tuples (never by eye).

**Why this is not tautological.** A `-r` build of a clean player comes out
byte-identical to the original, so tracing it against the original proves
nothing by construction. Each file was therefore *also* rebuilt at a
different base from the same disassembly and traced there:

- Anarchy $1e00 -> $5e00 (page-aligned): **354 of 3498 bytes differ**,
  trace **cycle-exact**, 0 diffs on all 5 subtunes.
- Anarchy $1e00 -> $4123 (deliberately *not* page-aligned, to exercise
  low-byte operand relocation): **708 of 3498 bytes differ**, all 5
  subtunes **register-write-exact**; cycle timestamps drift only from
  page-crossing penalties on indexed addressing, as expected.
- Zynaps -> $48f0 (369/4966 bytes differ), Super_Cup_Football -> $4dbb
  (296/4209), Herobotix -> $6819 (310/2859), Sunburst -> $700f, Zolo ->
  $433a: all **cycle-exact, 0 diffs**.

**Two relocation-only defects found and fixed** (neither affects the
native byte-exact builds; both are needed only to make the relocated
control build run):

1. `SIDdecompiler` leaves the note-table base operands as absolute
   literals because they point *below* the disassembled range — Anarchy
   `lda $1def,Y` / `lda $1dee,Y` (= load-$12/-$11), Herobotix
   `$5818`/`$5817`. Rewritten as `RB-$11` / `RB-$12` against a base
   equate. Until this was fixed the relocated Anarchy build read a
   zeroed note table and produced garbage frequencies (184 vs 189
   writes on subtune 0, 239 diffs on subtune 1).
2. Six entries in the two effect-dispatch pointer tables at $2587/$25a1
   were left as hardcoded page constants (`.byte $d6,$25`, `$c6,$26`,
   `$05,$27`, `$ea,$25`, `$c7,$26`, `$11,$27`) because the trace never
   dereferenced those slots — the exact shape of lesson 72(b). Re-emitted
   base-relative. (These slots are unreached in the first 50 frames, so
   patching them changed 12 bytes but not the trace; kept for
   correctness.)

**The one open gap: `Starglider.sid`.** Not reconstructed. Its PSID header
declares `play = $0000` (the tune installs its own IRQ; speed field
`0x1fff`, all 13 subtunes CIA-timed) and `SIDdecompiler` returns
**1 TraceNode pair** — lesson 13's "traces to essentially nothing"
signature — with the `-v2` map spanning `$0314-$cb8d` (i.e. it captured
the IRQ vector write and stopped). A `-P49152` override on the front
jump-table entry `$c000` did **not** help (still 1 TraceNode pair), even
though `sidm2-sid-trace.exe` itself produces 120 writes/20 frames when
handed `init $cb7e / play $c000`. **Specific next lead:** the file's first
15 bytes are a 5-entry `JMP` table (`$c000->$c794`, `$c003->$c0e2`,
`$c006->$c1c5`, `$c009->$c1b5`, `$c00c->$c16f`) and init at `$cb7e` ends
with `jsr $c00c / jmp $c00f`; disassemble by hand from `$c794` (or with
`-I` *and* `-P` set together, and `-1 -s0`) to find which entry the
installed IRQ actually calls, then rerun the standard recipe.
`Zynaps_pre-release.sid` is deliberately out of scope — it is a different
driver (see quirks).

Scratch work (asm, prg, traces, byte-diff/pattern scripts):
`C:\Users\mit\AppData\Local\Temp\claude\C--Users-mit-claude-sid-reference-project\54363ab5-4f49-4f93-99ab-27aa24abc3b8\scratchpad\nigel-grieve\`

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Demozoo, Lemon64 (2
pages), uvlist, FRGCB blog, C64-Wiki, and the related steve-turner card.

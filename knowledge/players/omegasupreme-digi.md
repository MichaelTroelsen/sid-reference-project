# OmegaSupreme_Digi

```json
{
  "id": "omegasupreme-digi",
  "name": "OmegaSupreme_Digi",
  "aliases": ["OmegaSupreme_Digi"],
  "authors": ["Olav Mørkrid (Omega Supreme)"],
  "released": "1990 (earliest known file: Hero's Digi Dreams #01/#02, CSDb release via The Ruling Company/Royalty)",
  "status": "in-progress",
  "platform": "Native C64 RSID (all 11 files are RSID v2, play=$0000 — NMI-driven, no conventional JSR play address). Not a standalone editor/tracker — no CSDb release, no in-program UI found.",
  "csdb_release": null,

  "memory": {
    "load_address": "Relocatable per file. Hero files: $0900. Metal_Maniac files vary: Arla_tune_1=$4B00, Smells_Like_Teen_Spirits=$1000, Seek_and_Destroy=$0A93. The player code is structure-identical across all variants, just relocated.",
    "zero_page": "$FB/$FC = sample data fetch pointer (LDA ($FB),Y). $FD/$FE = block-table pointer (points to 3-byte block entries). Both per composer/variant — values set during init.",
    "layout": "Tiny code footprint (~180 bytes total: init stub ~14 bytes, second init stage ~50 bytes, two-phase NMI handler ~120 bytes). Vast majority of file size is raw digi sample data in a block-chained format (3-byte block table entries: next-PC-hi, end-check-CMP-byte, CIA2-Timer-A-hi). Accessed via bank switching ($01=$36 during sample fetch, $01=$37 otherwise)."
  },
  "entry": {
    "init": "Per-file, listed in RSID header. Hero: $09D0. Metal_Maniac Arla_tune_1: $4C80. Two-stage init: (1) entry stub sets C64 IRQ vector ($0314/$0315) to an acknowledge-only handler, then JMPs to (2) second stage that sets C64 NMI vector ($0318/$0319) to the two-phase digi handler, configures CIA2 Timer A as NMI source ($DD04-DD0E), initializes ZP pointers ($FB-$FE), and RTS.",
    "play": "NONE — play=$0000 in every file's RSID header. Playback is NMI-driven via CIA2 Timer A underflow, not via a conventional JSR play call. The NMI handler alternates between Phase 1 ($092F+offset) which outputs the top nibble, and Phase 2 ($095A+offset) which outputs the bottom nibble and advances the sample pointer. Timer rate (and thus playback speed) varies per data-block — Phase 2 self-modifies $DD04 (CIA2 Timer A hi) from the block table."
  },
  "speed": "Per-block variable, determined by CIA2 Timer A hi byte ($DD04). Default values differ per file: Hero uses $A000 (40960 cycles / ~2.08 PAL frames), Metal_Maniac Arla_tune_1 uses $8800 (~1.77 frames). Timer rate is self-modified from the 3-byte block table during Phase 2. Each Timer A underflow produces one 4-bit nibble write to $D418; two underflows = one sample byte = one SID register update every ~1-2 frames depending on timer value.",

  "data_format": {
    "order_list": "Block-chained format. No pattern/order concept — raw digi. A block-table pointer ($FD/$FE) points to 3-byte entries: byte[0]=next $FC hi, byte[1]=end-check CMP value (self-modified into a CMP #imm instruction at runtime), byte[2]=CIA2 Timer A hi (playback rate for this block). $FC reaches the CMP value → next block loaded. A zero byte[0] signals end-of-song / loop restart.",
    "patterns": "N/A — digi sample playback, not pattern-based music",
    "instruments": "N/A — no instrument/synthesis model. Output is pure 4-bit PCM via SID volume register $D418.",
    "wavetable": "Raw 4-bit PCM samples. Each byte in the sample data block encodes two nibbles: top nibble (Phase 1 output) and bottom nibble (Phase 2 output). Data bank-switched via $01=$36.",
    "pulsetable": "N/A",
    "filtertable": "N/A"
  },
  "effects": {
    "encoding": "4-bit PCM via SID volume register $D418. Per-frame write sequence: Phase 1 (top nibble via 4x LSR) → Phase 2 (bottom nibble via AND #$0F) → advance pointer. No tracker-style effect commands.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "CONFIRMED digi/sample routine — unlike its likely namesake Digitalizer (see below), this one is not merely suggestively named. SIDId's byte-signature detection pattern for this tag (sidid.cfg) decodes as: STA $01 / LDY #$00 / LDA ($FB),Y / LSR A / LSR A / LSR A / LSR A / STA $D418 / LDA #imm — a classic 4-bit-sample-via-volume-register playback trick (read a byte through a ZP pointer, shift the top nibble into the low nibble, write it straight to SID's volume/filter register $D418). This is the same general class of technique as the 'Mahoney 8-bit via volume register' trick already noted in this project's SIDId comments. Source: cadaver/sidid `sidid.cfg`, entry `OmegaSupreme_Digi` (raw bytes quoted above).",
    "Author per SIDId is 'Olav Mørkrid (Omega Supreme)' — the SAME person who wrote Digitalizer (see knowledge/players/digitalizer.md) — but the two are BYTE-LEVEL DISTINCT routines, not variants of one program. Digitalizer_V2.x's own SIDId signature (`9D ?? ?? 0A 90 ?? B9`) shares no bytes with OmegaSupreme_Digi's; Digitalizer_V3.0's (`FE 3A 03 B1 FB C8 C9 80 90 22 C9 C0 B0 1E 69 80 9D 3D 03 9D 40 03 C9 3F D0 0C FE 3A 03 B1 FB C8`) DOES share the 2-byte sequence `B1 FB` (LDA ($FB),Y sample fetch) — but that is a single common instruction, not a shared routine, and the $FB/$FC ZP fetch pointer is therefore NOT a distinguishing feature between them. What is distinguishing: NEITHER Digitalizer signature contains OmegaSupreme's output stage — the `LSR A` x4 into `STA $D418` nibble-write to the volume register — nor any $D418 write at all. This is real evidence bearing on Digitalizer's own open question ('does Digitalizer do digi playback? unverified') — it does NOT resolve it, because these are provably different code. What it DOES establish: Mørkrid separately wrote (or at least is credited with) a genuine, confirmable digi routine, tagged distinctly from his tracker product. The two should NOT be merged into one card.",
    "SAME-AUTHOR CLUSTER (author-level connection, NOT a code edge): Olav Mørkrid has THREE separately-carded routines/tools in this KB — this one (his digi routine), the [[digitalizer]] editor (his released tracker; distinct byte-signature, see above), and [[olav-morkrid]] (his personal general playroutine, tag Olav_Moerkrid, used mostly by Panoramic Designs bandmate Henning Rokling). All three are the same coder's work but are separate tags; no `shares_routine_with` edge is asserted between any of them, because none has been disassembled-and-matched to another — the only cross-comparison actually performed (this card vs Digitalizer, via sidid.cfg bytes) came out DISTINCT. Surfaced by a composer-overlap connection scan; recorded as a same-author navigational link, not a routine relationship.",
    "SIDId's own entry for this tag has ONLY an `AUTHOR` line — no `RELEASED` year and no `REFERENCE` CSDb link (contrast with both Digitalizer entries, which have both). Mørkrid's own CSDb scener page (id 8158) lists his releases — Digitalizer V2.2 through V3.5, Equalizer, Turbo-Ass+, Zoomatic, Block Editor, Turbo-Assembler — and NONE of them is titled 'OmegaSupreme_Digi' or an obvious variant. This was never a packaged/released tool with its own CSDb entry; it reads as an unreleased or informally-shared routine, identified by SIDId only from its code signature.",
    "Used by only 2 composers, both Swedish, NEITHER of whom is Mørkrid himself (Norwegian, Panoramic Designs): Hero (Johan Åkerberg, ex-member of Royalty/The Ruling Company/Triad/Success/Baboons/Byterapers/Light/Rebels/The Zaints/The Hacking Computer Team) and Maniac Metal (Mattias Pihlström). No shared group with Panoramic Designs was found for either. Hero's own CSDb scener credits for the 'Digi Dreams #01/#02' release (Royalty/The Ruling Company, 1990) list Hero himself under 'Code, Sampling' — i.e. Hero is credited as a co-coder/sampler on the release the routine appears in, not a passive user of a Mørkrid-distributed binary. This is consistent with a small digi playback snippet that circulated informally in the Scandinavian scene (BBS/diskmag code-sharing was routine in this era) and got adapted/recoded by whoever used it, rather than a maintained, versioned tool — the inverse pattern of Digitalizer, which stayed inside Mørkrid's own group (12 composers, all attributable to Panoramic Designs' orbit per its card).",
    "Only 11 files, 2 composers, in the local dataset (data/composers/hero.json: 4 files; data/composers/maniac-metal.json: 7 files) — a genuinely tiny footprint. Titles are suggestive of deliberate digi/sample demos: Hero's 'Digi Dreams #01' and '#02', and covers/tributes like Metal Maniac's 'Smells Like Teen Spirits' (Nirvana) and 'Seek & Destroy' (Metallica), consistent with sample-heavy novelty tunes of the early-90s scene rather than a general-purpose music tracker output.",
    "No HVSC STIL.txt comment found for any of the 11 files (checked data/composers/*.json's cross-referenced comment field — all empty)."
  ],
  "sources": [
    "SIDId sidid.nfo entry 'OmegaSupreme_Digi' (author only, no year/reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "SIDId sidid.cfg byte-signature entries for OmegaSupreme_Digi / Digitalizer_V2.x / Digitalizer_V3.0 (used for the byte-level distinctness finding above): https://github.com/cadaver/sidid/blob/master/sidid.cfg",
    "CSDb SID entry 'Digi Dreams #01' (Hero, 1990, The Ruling Company/Royalty): https://csdb.dk/sid/?id=43255",
    "CSDb SID entry 'Arla (tune 1)' (Metal Maniac, Dual Crew, 1993): https://csdb.dk/sid/?id=41508",
    "CSDb scener 'Hero' (id 9462) — groups and 'Code, Sampling' credit on Digi Dreams: https://csdb.dk/scener/?id=9462",
    "CSDb scener 'Olav Mørkrid / Omega Supreme' (id 8158) — his full release list, no 'OmegaSupreme_Digi' entry: https://csdb.dk/scener/?id=8158",
    "Local dataset: data/composers/hero.json (4 files tagged OmegaSupreme_Digi), data/composers/maniac-metal.json (7 files tagged OmegaSupreme_Digi) — 11 files, 2 composers total",
    "See knowledge/players/digitalizer.md for the related-but-distinct Digitalizer card (same author, different routine — do not merge)"
  ]
}
```

## Overview

`OmegaSupreme_Digi` is a small, apparently unreleased C64 digi-sample
playback routine attributed by SIDId to **Olav Mørkrid**, the Norwegian
scener known as **Omega Supreme** (Panoramic Designs) — the same person who
wrote the tracker **Digitalizer** (see `knowledge/players/digitalizer.md`).
Despite the shared author, the two are **confirmed byte-level distinct**
routines (no overlapping signature bytes), so this is its own card, not a
Digitalizer variant. Unlike Digitalizer's own unresolved "does it do
digi/sample playback?" question, this tag's SIDId detection signature
decodes cleanly as a genuine 4-bit-via-volume-register digi playback
snippet (`LSR A` x4 into `STA $D418`) — a real, sourced confirmation that
this routine plays samples. It has no CSDb release of its own and shows up
in only 11 files across 2 composers (Hero and Maniac Metal, both Swedish),
neither of whom is Mørkrid himself — most consistent with a small routine
that circulated informally in the scene rather than a maintained, versioned
tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **confirmed digi-via-$D418
technique** (sourced to the actual SIDId signature bytes, decoded above);
the **byte-level proof that this is NOT the same code as Digitalizer**,
despite the shared author — direct, citable evidence relevant to
Digitalizer's own open question, without resolving it; and the **usage
pattern** (2 non-author composers, no group overlap with Panoramic Designs)
that argues for informal circulation rather than a personal routine kept
in-house, the opposite pattern from Digitalizer's tightly-held 12 composers.

## Disassembly notes

No full disassembly performed. The only code evidence available is the
13-byte fragment embedded in SIDId's detection signature (`sidid.cfg`),
quoted and decoded in the `quirks` array. That fragment is enough to
identify the playback *technique* (nibble-extract into the volume
register) but not enough to reconstruct init/play addresses, ZP layout, or
speed — all remain `TODO`. A real disassembly would need to start from one
of the 11 tagged `.sid` files (e.g. HVSC `MUSICIANS/H/Hero/Digi_Dreams_01.sid`)
and locate the full routine around the signature match.

## Verification

**Not verified.** Full byte-exact disassembly/reassembly is blocked by
fundamental tool limitations (see below). However, the player structure
has been confirmed through manual disassembly of the code and patched
trace verification on two files.

### Manual disassembly (Digi_Dreams_01.sid, Hero)

Two-stage init, two-phase NMI handler confirmed:

**Init stage 1 ($09D0):** SEI / LDA #$2F / STA $0314 / LDA #$09 / STA $0315
(set C64 IRQ vector to $092F — an acknowledge-only stub: INC $D019 / JMP
$EA31) / JMP $0900 (stage 2).

**Init stage 2 ($0900):** SEI / set NMI vector ($0318/$0319) to $092F /
CIA2 ICR=$81 (enable Timer A NMI) / CIA2 CRA=$01 (start continuous) /
Timer A=$A000 / init ZP: $FB=0, $FC=$4D, $FD=0, $FE=$0A / CLI / RTS.

**NMI Phase 1 ($092F):** Save A/X/Y / $01=$36 (bank switch) / LDY #0 /
LDA ($FB),Y / 4x LSR (top nibble) / STA $D418 (volume register) / set
NMI vector to Phase 2 ($095A) / INC $DD0D (acknowledge) / $01=$37
(restore bank) / restore Y/X/A / RTI.

**NMI Phase 2 ($095A):** Save A/X/Y / $01=$36 / LDY #0 / LDA ($FB),Y /
AND #$0F (bottom nibble) / STA $D418 / INC $FB (advance pointer, carry
to $FC if zero) / check $FC against block-end CMP value (self-modified at
runtime — Phase 2 at $0986 writes `STA $0975`, modifying the operand of
the CMP #imm at $0974-$0975) — if not at end: set NMI to Phase 1, RTI.
If at end: read next 3-byte block entry from ($FD),Y: byte[0]=new $FC,
byte[1]=new CMP value, byte[2]=CIA2 Timer A hi (new speed), advance $FD
by 3, set NMI to Phase 1, RTI.

Key instruction confirming the SIDId signature:
```
0934: A9 36     LDA #$36
0936: 85 01     STA $01
0938: A0 00     LDY #$00
093A: B1 FB     LDA ($FB),Y
093C: 4A        LSR A
093D: 4A        LSR A
093E: 4A        LSR A
093F: 4A        LSR A
0940: 8D 18 D4  STA $D418
```
This matches the SIDId signature fragment `85 01 A0 00 B1 FB 4A 4A 4A 4A
8D 18 D4` exactly.

### Trace verification (patched workaround)

Both SIDdecompiler and sidm2-sid-trace.exe cannot handle this player
natively because:
1. **SIDdecompiler**: RSID play=$0000 causes "Unimplemented opcode: 2f at
   address $0000" — the tool tries to execute code at $0000 (where the
   init set NMI vector low byte $2F lives). The `-P` override flag does
   not help because the handler uses RTI (expects interrupt stack frame),
   not RTS, so JSR-calling it crashes the emulated stack.
2. **sidm2-sid-trace.exe**: The tracer's play=$0 mode follows the IRQ
   chain ($FFFE → $0314/$0315 = $09DE, which just does INC $D019 / JMP
   $EA31 — 0 SID writes). The real playback is on the NMI chain ($FFFA →
   KERNAL NMI handler → $0318/$0319 = $092F), which the tracer does not
   follow. This is a structural limitation, not a per-file issue.

**Workaround**: Patched the C64 vectors so the IRQ chain points to the
NMI handler code (changed $0314/$0315 writes from $09DE to $092F, and
the handler's own $0318/$0319 self-rewrites to $0314/$0315). This
preserves 100% of the handler code — only the vector targets change.

Results with patched .prg (20 frames each):
- **Digi_Dreams_01**: 19 writes to filter_mode_volume ($D418), values
  ranging $01-$0A, alternating ~1-write-per-frame cadence.
- **Digi_Dreams_02**: 3 writes to filter_mode_volume ($D418), slower
  cadence (~1 write per 4-6 frames, consistent with this file's longer
  sample blocks and default timer rate).

Both files produce genuine 4-bit PCM writes to $D418, confirming the
digi routine is live and functional.

### Metal_Maniac variant (Arla_tune_1.sid)

Structurally identical to Hero, relocated:
- Load=$4B00, Init=$4C80
- NMI handler at $4B31 (Phase 1) / $4B5A (Phase 2)
- Timer A default=$8800 instead of $A000
- ZP pointers: $FB/$FC=$4D00, $FD/$FE=$4C00
- Same two-phase nibble extraction, same block-chained data format,
  same bank-switch technique ($01=$36 for fetch, $01=$37 otherwise)

### Honest scope / known gap

This is an honest in-progress status. The player structure is fully
understood through manual disassembly, and trace output from patched
files confirms the digi playback works. What cannot be done with
current tools:
1. **Byte-exact disassembly/reassembly**: SIDdecompiler cannot handle
   RSID play=$0 files. A byte-exact .asm → reassembled .prg → byte-diff
   against original is impossible without fixing the tool.
2. **Trace-diff against original**: The original file produces 0 SID
   writes in the tracer (IRQ vs NMI mismatch). The patched trace
   produces correct writes but at slightly different timing.

Potential next steps if someone wants to close this:
- Fix SIDdecompiler or sidm2-sid-trace.exe to handle NMI-driven players
  (CIA2 Timer A → NMI chain via $FFFA → KERNAL → $0318/$0319)
- Or use a different disassembly tool that can handle this architecture
- Or hand-write a minimal .asm reconstruction from the manual disassembly
  above, treating the sample data as raw .byte blobs — the code is only
  ~180 bytes, so a hand-verified .asm that assembles and traces correctly
  would constitute a verified reconstruction even without byte-diff
  against the full 30-49KB original (since the data is all sample bytes)

## Sources

See the `sources` array — SIDId `sidid.nfo`/`sidid.cfg`, two CSDb SID
entries, two CSDb scener pages, and the local per-composer dataset.

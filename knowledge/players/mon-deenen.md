# MoN/Deenen

<!--
  Player-ID / SIDId tag: "MoN/Deenen" — Charles Deenen's in-house Maniacs of
  Noise music driver, distinct from the later, GUI-wrapped "MoN/FutureComposer"
  AND from the separate Jeroen Tel MoN engine (Hawkeye/Cybernoid).

  REVISED 2026-07-16: the first version of this card (this repo, batch 16)
  described `data_format.order_list` as one fixed table of byte-class
  boundaries. That was wrong — SIDM2's disassembly (external project, see
  sources) found the grammar is PER-FILE: each rip bakes its own thresholds
  in as immediates in its orderlist-fetch routine. This revision corrects
  that field and adds the rest of SIDM2's disassembly-derived facts; nothing
  else from the original identity/provenance research below was affected.
-->

```json
{
  "id": "mon-deenen",
  "name": "MoN/Deenen (Maniacs of Noise game replay routine, Charles Deenen)",
  "aliases": ["MoN/Deenen", "Maniacs_of_Noise/Deenen", "Charles_Deenen"],
  "authors": ["Charles Deenen"],
  "released": "TODO: exact year of first version not documented; VGMPF dates Deenen writing 'a C64 sound-driver' to circa 1985, in use as the house driver of Maniacs of Noise from the group's 1987 founding. SIDM2's disassembled corpus centers on ~1988 releases.",
  "status": "in-progress",
  "platform": "Native C64 in-house replay driver, hand-coded in 6502 assembly (Turbo Assembler) — NOT a GUI editor. Composers arranged music by typing hexadecimal note/label data directly into the driver's own assembly source and reassembling it. Embedded per-game and relocated per rip; per SIDM2's disassembly, each rip is effectively RECOMPILED with its own orderlist class-boundary constants (see data_format.order_list and quirks) rather than sharing one build.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per rip; several relocated (e.g. Eye_to_Eye load $4000 / PSID play $0000 with a self-installing IRQ; Zamzara $bd70). All table addresses must be recovered from code operands, never assumed fixed.",
    "zero_page": "Variant-dependent, indexed by X (per-voice state). Measured on Constant_Runner: $d7,X = orderlist index, $e3,X = pattern row index, $da,X = note transpose, $dd,X = A-transpose, $e0,X = pattern loop counter, $d5/$d6 = live pattern pointer. Not confirmed identical across other rips.",
    "layout": "Two-level: per-voice orderlist -> pattern. Pointer tables are located from code operands, not fixed offsets — a table's apparent size is a lie, it ends where code begins, and an out-of-range index silently reads instruction bytes as a pointer (see quirks)."
  },
  "entry": {
    "init": "Per-rip, from the PSID header.",
    "play": "Per-frame; some rips declare PSID play=$0000 and install their own IRQ instead (e.g. Eye_to_Eye)."
  },
  "speed": "Single-speed frame call, but note-duration timing runs on a per-file GROOVE CLOCK: duration counters advance only on a fraction of frames, and the exact rate varies per rip (measured by aligning decoded onsets to real gate-rises, not by ratio-of-medians which gives the wrong answer): B_A_T 3, Lord_of_the_Rings 2, Ding_van_Charles 2.5 alternating, Astro 2, After_the_War 2.5.",

  "data_format": {
    "order_list": "THE GRAMMAR IS PER-FILE — corrected 2026-07-16, see the quirks entry with the worked example. Each rip's own orderlist-fetch routine encodes its class-boundary constants as immediates; canonical shape: LDA ord,Y ; CMP #$FE (stop) ; CMP #$FF (either segment-advance OR restart-to-index-0, per rip) ; CMP #thr / BCC -> pattern index ; then a chain of CMP/SBC class blocks for note-transpose, A-transpose, and pattern-loop-count. Branch polarity also differs between rips (some use BCS where others use BCC) so a byte-scan for the chain is unreliable — it must be flow-walked per file. Measured per-rip thresholds: Ding_van_Charles $12A6 thr=$5F, $FF=segment-advance, note base $82; After_the_War $0E94 thr=$6F, $FF=segment-advance, note base $84 (via SBC #$80/CLC/ADC #$FC); Soldier_of_Light $0CDC thr=$50, $FF=restart, uses AND #$1F not SBC; Constant_Runner $13F3 thr=$40, $FF=restart, $40-$5F=loop count (A-$40), $60-$7F=A-transpose (A-$60), >=$80=note transpose (A-$80).",
    "patterns": "Row = prefix bytes then a note: $C0-$DF set instrument (+A-transpose); $80-$BF default duration (value - $81, accumulates); $60-$7F arp parameter; <$60 note; $E0-$FA rest (length+1); $FD/$FC/$FB/$FE slide/enable/gate/speed. Quoted from the Ding-class rip only — pattern-row classes have NOT been audited per-rip the way the orderlist grammar now has; given what the orderlist turned out to be, assume these vary per file too until checked.",
    "instruments": "8-byte record at INSTR + i*8: [0] packed pulse width, [1] waveform, [2] AD, [3] SR, [4] flags (bit3 = filter routing), [7] flags. Bytes [5]/[6] not decoded.",
    "wavetable": "Frequency tables are SPLIT: FREQ_LO and FREQ_HI, 95 entries each, hi_base - lo_base = $5F (recovered from the LDA abs,Y operand pair whose bases differ by that offset).",
    "pulsetable": "TODO — only a per-instrument packed PW byte identified so far.",
    "filtertable": "TODO — instrument byte[4] bit3 flags filter use, but the filter path itself (a $14D8-class routine in the B_A_T rip) is not decoded."
  },
  "effects": {
    "encoding": "Dispatch signature `C9 60 B0 03 4C` (CMP #$60 / BCS +3 / JMP note-handler), present in 15 of 19 located replay files.",
    "commands": {
      "$FD / $FC / $FB / $FE (pattern prefix)": "slide / enable / gate / speed",
      "$60-$7F (pattern prefix)": "arp parameter",
      "porta / vibrato / filter (B_A_T $12A1 / $13xx / $14D8)": "mapped, not decoded"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["future-composer"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "*** THE ORDERLIST GRAMMAR IS PER-FILE — the reason this card was revised 2026-07-16. *** The class boundaries are immediates in each rip's own fetch routine and genuinely differ (pattern threshold observed at $40, $50, $5F, $6F; $FF meaning either segment-advance or restart-to-0; note-transpose base $80/$82/$84). A decoder hardcoding one rip's constants will decode any file that doesn't exercise the differences at a clean 100% and silently mangle the rest — that is precisely the trap this correction exists to flag.",
    "WORKED EXAMPLE: Constant_Runner's orderlist contains bytes $43 and $4E. Under Ding_van_Charles's threshold (<$5F) those read as pattern indices 67 and 78 — index 67 lands on $13F3, which is the FETCH CODE ITSELF, yielding an out-of-file garbage pointer. Under Constant_Runner's own real threshold (<$40) they are instead PATTERN LOOP COUNTS (A-$40), confirmed by a DEC $e0,X at $145B. The failure mode is not a crash, it's a confident wrong decode.",
    "A pointer table's apparent size is a lie: it ends where CODE begins, and an out-of-range index silently reads instruction bytes as a pointer. Bound any such table by the next known code address before trusting an entry — a general C64 RE hazard, not specific to this driver.",
    "SIDM2's own 40-file corpus of everything credited 'Charles Deenen / 1988 Maniacs of Noise' (a different, narrower selection than this card's 126-file Player-ID-tag population below — do not conflate the two counts) turned out to be FIVE different players, not one: 19 files are this MoN/Deenen game-replay routine, 15 are MoN/FutureComposer (a different tag, see future-composer.md — NOT the $1800 FC variant), 3 are stock SoundMonitor behind a play-wrapper, 2 are Rob_Hubbard V1, and 1 is an SFX bank. Classify by Player-ID tag before reverse-engineering a 'Deenen' file — composer credit alone is not enough.",
    "THE GROOVE (note-duration) RATE VARIES PER FILE — measured by emulation, not assumed. A naive ratio-of-medians approach gives the WRONG tempo (skewed by decode over-generation); what works is picking the single global scalar that best aligns decoded onsets to real SID gate-rises under a monotonic 1-1 match.",
    "THREE OF THE 'DEENEN' FILES ARE STOCK SOUND MONITOR behind a bank-switch play wrapper (play $C020 -> JSR $C475, a 2-byte prefix) that shifts the play-routine signature by +2 bytes — an exact-offset SoundMonitor detector will reject them; accepting the signature at offsets +0..+3 recovers all three.",
    "SUBTUNE 0, NOT THE DEFAULT, for at least one file family: three MoN 'TTWII' files decode correctly only at subtune 0 — the nominal default subtune 3 is a mis-located speed table that produces a confident-looking but wrong parse.",
    "AT LEAST ONE MORE ORDERLIST ENGINE VARIANT EXISTS beyond the class-boundary differences above: Astro_Marine_Corps and Mr_Heli use a ZP nested-loop variant ($88,X loop counters) instead of the linear segment-step structure described in data_format.order_list.",
    "This is NOT an editor/tracker — it is Charles Deenen's own hand-written replay driver ('Musicfile'), coded in Turbo Assembler. VGMPF: 'Deenen, Donné, Tel and Ouwehand arranged by typing hexadecimal numbers and labels into the driver's source code.' There is no GUI, order-list editor, or pattern grid in the conventional sense — every tune is a hand-assembled variant of the driver source.",
    "Supported 4-bit sample ('digi') playback per VGMPF's Maniacs of Noise article: 'Deenen sent Bjerregaard a disk with Turbo Ass, his music driver, and some 4-bit samples.'",
    "DO NOT CONFLATE with 'MoN/FutureComposer' (see future-composer.md) — that is a later, separate, GUI-wrapped tool (editor by Juha Granberg/Finnish Gold) built around a Maniacs-of-Noise player routine. SIDId's own 'MoN/FutureComposer' entry comment ('Editor made for the player of /MUSICIANS/T/Tel_Jeroen/Noisy_Pillars_tune_1.sid') ties that editor's origin to a Jeroen Tel tune from the same MoN driver lineage this card covers — evidence for a routine relationship, not proof of byte-identical code, hence the conservative `shares_routine_with` edge rather than `derives_from`.",
    "DO NOT CONFLATE with 'MoN/Bjerregaard' (Johannes Bjerregaard's own, separate driver) either — VGMPF states plainly Bjerregaard was offered Deenen's driver and declined: 'Deenen sent Bjerregaard a disk with Turbo Ass, his music driver, and some 4-bit samples, but Bjerregaard preferred his own driver. Petersen also used his own.' Same source group (Maniacs of Noise circle), three genuinely distinct player routines/tags.",
    "Nor with the separate Jeroen Tel MoN engine (Hawkeye / Cybernoid I+II / Myth / Supremacy) — same 'Maniacs of Noise' banner, different routine, per SIDM2.",
    "After Charles Deenen relocated to the USA around late 1990/1991, VGMPF states 'Tel programmed himself' — implying Jeroen Tel moved to his own driver after that point, so this tag's usage window is effectively bounded to Deenen's Netherlands-era MoN tenure (1987-1990/91).",
    "No dedicated CSDb release exists for the driver itself — Charles Deenen's CSDb scener page (id 1040) lists his tool credits as 'Future Composer V3.1' (release 7775), 'MON SFX Editor V1.00' (release 7936), and 'Sound Machine V1.1' (release 122536), but nothing titled 'Musicfile' or matching this Player-ID tag. Unlike Future Composer, this was never packaged/released as a standalone product.",
    "126 files across 13 composers in this collection's Player-ID-tag population (rank 6 by file count per knowledge/COVERAGE.md) — the broader set this card's identity research covers, distinct from SIDM2's own 40-file classification corpus above. Composer concentration: Jeroen Tel 64 files (51%), Charles Deenen 17 (13%), Reyn Ouwehand 16 (13%), Francois Prijt 8, JVD 7, remaining 8 composers 1-3 each. This matches VGMPF's account of who directly used the driver (Deenen, Tel, Ouwehand, and 'Donné') — a genuinely shared in-house commercial tool among a small team, not one person's personal routine, but also never a publicly released/adopted tool the way Future Composer was.",
    "SIDId's 'MoN/Deenen' entry has only an `author` field — no `released` or `reference` (CSDb release id), unlike most SIDId entries — consistent with there being no formal release to point at."
  ],
  "sources": [
    "SIDM2 project RE (external, c64server/SIDM2 — see docs/SIDM2-INTEGRATION.md): docs/players/DEENEN.md; parser sidm2/deenen_parser.py (DeenenGrammar); emulation probe bin/_deenen_vb.py (memory-bus-instrumented py65, watches orderlist stream reads with the PC that made them); tests pyscript/test_deenen_grammar.py. Commits 7ad0b1b (engine map + locate + freebies), 36341bf (decoder blockers), 2905e9e (segment-seed + per-file groove), 62f4243 (the per-file grammar finding that prompted this revision).",
    "SIDM2 corpus: SID/deenen/ (40 .sid, all credited 'Charles Deenen / 1988 Maniacs of Noise'); classified via tools/player-id.exe -m with tools/sidid.cfg.",
    "data/sidid.json byTag['MoN/Deenen'] — author: Charles Deenen (no release/reference field)",
    "data/sidid.json byTag['MoN/FutureComposer'] — comment tying the FutureComposer editor's origin to /MUSICIANS/T/Tel_Jeroen/Noisy_Pillars_tune_1.sid",
    "knowledge/COVERAGE.md — rank 6, 126 files tagged 'MoN/Deenen'",
    "Local aggregate over data/composers/*.json: 126 files / 13 composers (Jeroen Tel 64, Charles Deenen 17, Reyn Ouwehand 16, Francois Prijt 8, JVD 7, Barry Leitch 2, Hein Holt 2, Joachim Wijnhoven 3, No-XS 2, Trugoy 2, DRAX 1, Marc Francois 1, Yavin 1)",
    "VGMPF, Charles Deenen — https://vgmpf.com/Wiki/index.php/Charles_Deenen (driver origin c.1985, MoN formation)",
    "VGMPF, Maniacs of Noise — https://vgmpf.com/Wiki/index.php/Maniacs_of_Noise ('Musicfile' driver name, Turbo Ass authorship, hex-in-source arranging method, 4-bit samples, Bjerregaard/Petersen declining it, Tel taking over after Deenen left)",
    "CSDb scener page, Charles Deenen (id 1040) — https://csdb.dk/scener/?id=1040 (tool credits checked: no standalone 'Musicfile'/driver release found)",
    "CSDb group page, Maniacs of Noise (id 448) — https://csdb.dk/group/?id=448",
    "data/composers/charles-deenen.json, data/composers/jeroen-tel.json, data/composers/reyn-ouwehand.json — per-file player tag evidence"
  ]
}
```

## Overview

MoN/Deenen is the Player-ID tag for Charles Deenen's original Commodore 64
music replay driver — internally called "Musicfile" per VGMPF — written in
Turbo Assembler and used as the house sound engine of **Maniacs of Noise**
(MoN), the Dutch game-audio company Deenen co-founded with Jeroen Tel in 1987.
Unlike a conventional tracker, there was no separate GUI editor: composers
(Deenen, Tel, Reyn Ouwehand, and "Donné" per VGMPF) arranged tunes by typing
hexadecimal note/label data directly into the driver's own assembly source
and reassembling it. It is closely related to, but must not be conflated
with, two other Player-ID tags — **MoN/FutureComposer** (a later, GUI-wrapped
tool built by Juha Granberg's Finnish Gold circle around a MoN player
routine — see `future-composer.md`) and **MoN/Bjerregaard** (Johannes
Bjerregaard's own separate driver, which he used instead of Deenen's after
being offered it) — nor with the unrelated Jeroen Tel MoN engine (Hawkeye/
Cybernoid) that shares only the "Maniacs of Noise" banner. In this
collection's Player-ID population it accounts for 126 files across 13
composers, dominated by Jeroen Tel (51%) — evidence of a real shared
commercial tool within a small team, not a single composer's personal
routine, but also never released/documented as a standalone product the way
Future Composer was.

**Disassembly-derived facts added 2026-07-16** (external SIDM2 project, see
`sources`), grounded on a separate, narrower 40-file corpus of everything
CSDb-credited to "Charles Deenen / 1988 Maniacs of Noise" — which turned out
to be five different players under one credit, only 19 of which are this
driver. Those facts are per-rip anchors (memory map, ZP, orderlist grammar),
not universal constants — see `data_format.order_list` and the quirks below.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a **hand-coded asm
driver edited by typing hex directly into its own source**, individually
recompiled per game rip rather than one shared build; the **orderlist
grammar is per-file**, not one fixed table (the reason this card was
revised — a decoder using one rip's constants produces a *confident wrong
decode* on another, not a crash, per the Constant_Runner worked example);
and it must be kept **distinct from MoN/FutureComposer, MoN/Bjerregaard, and
the separate Jeroen Tel MoN engine**, none of which share code with this
routine despite the shared "Maniacs of Noise" credit or banner.

## Disassembly notes

Grounded by SIDM2 on **Ding_van_Charles** and **Constant_Runner** via
memory-bus-instrumented py65 (`bin/_deenen_vb.py`, which watches the
orderlist stream reads together with the PC that issued them, so the
grammar is observed rather than inferred), plus direct disassembly of each
rip's fetch site. All addresses recorded here are **per-rip anchors, not
universal** — table addresses are recovered from code operands (frequency
table from the `LDA abs,Y` pair whose bases differ by `$5F`; instrument
table from the consecutive-operand `LDA abs,Y` cluster; orderlist/pattern/
relocation tables from `LDA ..,X/Y` plus the trailing `ADC reloc`), never
assumed fixed. Flow-anchoring from init/play took SIDM2 from 5/19 to 10/19
replay files located within its 40-file corpus.

## Verification

**`status: in-progress`** (upgraded 2026-07-16 from `stub` on real
disassembly evidence, per this project's rule that a genuine tracer/
disassembly measurement — not a from-scratch reconstruction run through
`mcp-c64` — can justify `in-progress`). Identity/provenance facts are
sourced from the cached SIDId entry, this project's local composer data, and
VGMPF's narrative history of Maniacs of Noise (unchanged from the original
research). The per-file orderlist grammar is disassembly-verified on four
rips (Ding `$12A6`, Constant_Runner `$13F3`, After_the_War `$0E94`,
Soldier_of_Light `$0CDC`) and corroborated by emulation — the real player
never fetches the out-of-range indices the wrong grammar would produce.
Decode fidelity against `siddump` (onset+pitch, monotonic 1-1 alignment) on
files that happen not to exercise the per-rip differences: Ding_van_Charles
100/100, B_A_T 100/100, Lord_of_the_Rings 100/100, After_the_War 100/98.1.

**Scope (honest) — this remains a PARTIALLY decoded engine, not `verified`:**
SIDM2's own decoder still hardcodes Ding's constants rather than the
per-file grammar it discovered (the `DeenenGrammar` parser exists but isn't
wired in yet) — so the clean decode-fidelity numbers above were obtained
*with* the wrong constants, on files that simply don't exercise the
differences; that is exactly the trap this revision warns about. 9 of 19
replay files in SIDM2's corpus are not yet located; 5 more are located but
refused by a plausibility gate rather than emitted as garbage. The ZP
`$88,X` nested-loop orderlist variant (Astro/Mr_Heli) is identified but not
decoded. Vibrato, portamento, and the filter sub-engine are mapped, not
decoded. Instrument bytes [5]/[6] are unknown. No from-scratch
reconstruction has been assembled and run through `mcp-c64`.

## Sources

See the `sources` array — SIDId's `MoN/Deenen` and `MoN/FutureComposer`
entries, `knowledge/COVERAGE.md`, local `data/composers/*.json` aggregation,
VGMPF's Charles Deenen and Maniacs of Noise wiki pages, Charles Deenen's
CSDb scener page (checked for, and finding no, a standalone driver release),
and — new in this revision — the external **SIDM2** project's disassembly
(`docs/players/DEENEN.md`, `sidm2/deenen_parser.py`, commits 7ad0b1b through
62f4243) over its own 40-file "Charles Deenen"-credited corpus.

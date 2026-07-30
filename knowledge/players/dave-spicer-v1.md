# Dave Spicer V1 (1992 Hi-Tec)

```json
{
  "id": "dave-spicer-v1",
  "name": "Dave Spicer V1 (1992 Hi-Tec)",
  "aliases": ["Dave_Spicer_V1"],
  "authors": ["UNCONFIRMED — Spicer or the game's coder (Nick Taylor). See quirks; do not assert self-coded."],
  "released": "1992",
  "status": "verified",
  "platform": "Native C64. Despite the name, NOT part of a version line with [[dave-spicer-v15]] — see quirks.",
  "csdb_release": null,

  "memory": {
    "load_address": "Black_Hornet $8378; Wacky_Races $F8F8. The two files are BYTE-IDENTICAL across the driver region except absolute address operands — same source, re-assembled.",
    "zero_page": "TODO — not disassembled beyond the entry/init structure. Not guessed.",
    "layout": "init == load, play == load+8. Signature: A2 17 9D 00 D4 CA 10 FA A9 08 8D 12 D4 8D 0B D4 — clear 24 SID regs, TEST bit on voices 3/2, continuing 8D 04 D4 for voice 1."
  },
  "entry": {
    "init": "== load ($8378 Black_Hornet; $F8F8 Wacky_Races). Init is CLC / ADC #$81 / STA <ctrl> / RTS — it writes NO SID registers. See the deferred-init quirk.",
    "play": "== load+8 ($8380 Black_Hornet; $F900 Wacky_Races)."
  },
  "speed": "TODO — not determined. Traced at 241 writes / 50 frames.",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "CONFIRMED by disassembly (both files). A stepped cutoff-sweep engine, not a per-instrument filter table. A byte table (Black_Hornet $87DF; Wacky_Races $FCBF) is walked by a Y index that advances TWO bytes per step: [step-delta-hi, step-delta-lo] pairs added to a 16-bit cutoff accumulator each frame. $D415 is written as accumulator-lo >>5 (five LSRs), $D416 as accumulator-hi; $D417 is `ora #$F0` over a routing byte, $D418 fixed $1F. A per-step repeat counter (`inc <operand>` / `cmp table,Y`) controls how many frames each step lasts; on expiry Y advances and a `$80` sentinel in the table means 'next byte is the new Y value' (loop/jump). ALL of this engine's runtime state lives in self-modified immediate operands, not in RAM variables or zero page." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE VERSION NUMBERING IS A LIE — AND THIS CARD IS THE KB'S COUNTER-EXAMPLE TO ITS OWN SPLIT PRECEDENT. A sibling tag Dave_Spicer_V15 exists (verbatim in cadaver/sidid's sidid.cfg lines 460-464), but it is NOT a later version of V1. They are two STRUCTURALLY UNRELATED DRIVERS, and THE CHRONOLOGY IS INVERTED versus the numbering: V15 = 1989, V1 = 1992. No V2-V14 exist anywhere. Contrast the established pattern cited on robert-westgate-v1 (and Ozzy/Cadaver): those are CLEAN CHRONOLOGICAL SPLITS OF ONE EVOLVING DRIVER. This is not that. Two cards here are justified more strongly than usual — they aren't even the same driver. See [[dave-spicer-v15]].",
    "WHY 'V15' IS UNKNOWABLE — do not invent a version history. There are no V2-V14 anywhere; whether it is a typo for V1.5/V2 or intentional cannot be determined. WilfredC64/player-id (SIDId's maintained successor) carries BOTH names unchanged.",
    "DEFERRED INIT — a real behavioural quirk. Init writes NO SID registers at all (CLC / ADC #$81 / STA <ctrl> / RTS). The FIRST PLAY CALL does the clear + TEST via a bit7/bit6 state machine (BIT <ctrl> / BPL / BVS). Confirmed by trace: frame 0 has only the 3 TEST writes; the real setup lands frame 1.",
    "THE BUBBLE BUS / STARQUAKE LEAD IS WRONG — RULED OUT. Starquake was Stephen Crow. No source links any Spicer to Bubble Bus. His actual publishers are Martech, SNK/Electrocoin and Hi-Tec. Do NOT cross-reference [[bubble-bus-love-r]].",
    "HE IS A PROGRAMMER — OF ZX SPECTRUM VERSIONS, not of C64 code. GTW64's Push-A-Block page: 'C64: Nick Taylor / Spectrum: David Spicer', plus his own quote: 'C64 coding was 100% by Nick, with no involvement from myself.' On all three C64 SIDs he is credited MUSICIAN ONLY, with a different coder each time. So the brief's 'he's a programmer, so a self-coded routine is plausible' reasoning does not transfer to the C64.",
    "AUTHORSHIP IS GENUINELY CONFOUNDED — two hypotheses fit the evidence EQUALLY well. (a) It is HIS routine: it follows him across two different coders and companies. (b) It is the CODER'S routine: V1 and V15 are unrelated drivers mapping 1:1 onto a different C64 coder each — 1989 SNK (Paul Rogers) -> V15; 1992 Rave/Hi-Tec (Nick Taylor) -> V1. SIDId often names a routine after the MUSICIAN for want of a better name. The KB's composer-concentration heuristic is USELESS here: 100%/1 composer is forced by him only having 3 tagged files at all. Report unconfirmed.",
    "THE FILTER SWEEP KEEPS ALL ITS STATE IN SELF-MODIFIED IMMEDIATE OPERANDS — and this is what makes the two files behave differently under reconstruction even though their code is identical. Exactly three operand bytes hold the whole engine's cold-start state: the table Y-index seed, the cutoff-hi accumulator, and the step repeat counter, at the SAME relative spacing in both files (deltas +12 and +16 bytes): Black_Hornet $86AF/$86BB/$86CB, Wacky_Races $FBB1/$FBBD/$FBCD. Black_Hornet's cold-start path rewrites all three before first read, so a disassembler's drifted snapshot of them is harmless there; Wacky_Races reads all three before first write, so the same drift produces a WRONG filter sweep from frame 1 on (filter_freq_hi $D0 vs $01). Verified by patch-isolation: patching any one or two of the three is NOT enough on Wacky_Races — all three are jointly load-bearing. NOTE also that SIDdecompiler prints these labels one byte high (lesson-21 cosmetic quirk): the real LDY/LDA opcode sits at label-1 and the self-modified operand at the label address itself.",
    "FINGERPRINT IS EXACT: a scan of all 61,157 HVSC 85 files matches V1 to exactly Black_Hornet + Wacky_Races, and V15 to exactly Time_Soldier. Zero false positives, zero cross-composer leakage.",
    "THE COMPOSER HAS 4 FILES, not 2 — '2 files' is correct for the _V1 TAG specifically. The four: Black_Hornet (Dave_Spicer_V1, 1992 Hi-Tec, 2 subtunes); Wacky_Races (Dave_Spicer_V1, 1992 Hi-Tec, 1 subtune); Time_Soldier (Dave_Spicer_V15, 1989 SNK Electrocoin, 7 subtunes); Pizza_Delivery_Game_preview (UNTAGGED, 1989, load $4000 / init $40E3 / play $4121 — unlike BOTH drivers; possibly a third routine or Martech house code).",
    "IDENTITY: David Spicer, English. HVSC Musicians.txt:1557 'Spicer, David - UNITED KINGDOM (ENGLAND)' — a bare entry with no handle/group, i.e. a real name, not a scene handle. Era 1989-1992. No CSDb scener profile (csdb_id: 0, search empty) — purely commercial, no demoscene footprint. GTW64's Pizza Delivery page has direct quotes from him: Martech, 1989, his first industry job — 'I only did 1 week's work for the company before being made redundant (last in, first out).'",
    "COLLISIONS: Troy Spicer (CGSC composer, 3 .mus files 1987-88, in the DeepSID dump) — different person/collection, RULED OUT. 'David Alan Spicer' / Sparcade — British author of DASARcade (1995) -> Sparcade, pre-dating MAME. Same name, same nationality, adjacent era: PLAUSIBLE BUT UNCONFIRMED, no source links them. DO NOT MERGE. David Spicer the comedy writer (IMDb/Wikipedia), the Eisenhower Foundation soldier, and david-spicer.com are unrelated.",
    "DATA GAPS: DeepSID's active: '1992' is INCOMPLETE — his output spans 1989-1992. Its affiliation: 'Hi-Tec' covers only the 1992 titles; Martech and SNK/Electrocoin are missing. No STIL.txt entry for ANY Spicer file — no song notes, no cover info. No SIDId .nfo entry (confirmed absent upstream AND in the local bundle) — the tags come from sidid.cfg's signatures."
  ],
  "sources": [
    "cadaver/sidid sidid.cfg lines 460-464 (BOTH Dave_Spicer_V1 and Dave_Spicer_V15 signatures, verbatim): https://github.com/cadaver/sidid/blob/master/sidid.cfg · sidid.nfo (no Spicer entry): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "WilfredC64/player-id (SIDId's maintained successor — carries both names unchanged): https://github.com/WilfredC64/player-id",
    "HVSC Musicians.txt line 1557: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "DeepSID profile: https://deepsid.chordian.net/api/v1.php?profile=/MUSICIANS/S/Spicer_David/ · CSDb SID 26321: https://csdb.dk/sid/?id=26321",
    "Lemon64 — Black Hornet (Nick Taylor / David Spicer / Jason Brashill): https://www.lemon64.com/game/black-hornet · Time Soldier (Paul Rogers / David Spicer): https://www.lemon64.com/game/time-soldier · his index (3 games): https://www.lemon64.com/games/list.php?list_individual=david-spicer",
    "GTW64 — Pizza Delivery (Martech; his own quotes): https://www.gamesthatwerent.com/gtw64/pizza-delivery/ · Wacky Races V1: https://www.gamesthatwerent.com/gtw64/wacky-races-v1/ · Block Game / Push-A-Block (the Spectrum credit + 'C64 coding was 100% by Nick' quote): https://www.gamesthatwerent.com/gtw64/block-game/",
    "Wikipedia — Starquake (rules out the Bubble Bus lead: Stephen Crow): https://en.wikipedia.org/wiki/Starquake_(video_game)",
    "Local: data/composers/david-spicer.json; deepsid_dl/DeepSID_Database/hvsc_files.sql:42582-42585; HVSC 85 binaries; sidm2-siddump traces"
  ]
}
```

## Overview

`Dave_Spicer_V1` is the 1992 driver behind two Hi-Tec titles — *Black Hornet* and
*Wacky Races* — scored by **David Spicer**, an English musician (and ZX Spectrum
programmer) active 1989-92.

Its main value to the KB is as a **counter-example**. The `_V1` suffix invites the
assumption of a version line, and this project has real precedent for splitting
those (Westgate, Ozzy, Cadaver — all clean chronological splits of one evolving
driver). **That pattern does not apply here.** The sibling `_V15` is a different
driver *and* three years older.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **V1 (1992) is newer than V15 (1989)**, and they share no code. The numbering
  carries no chronological or lineage information at all.
- **Authorship is confounded, not merely unknown** — two hypotheses fit equally,
  and the KB's usual composer-concentration heuristic is useless here because the
  100%/1-composer figure is forced by a 3-file sample.
- **He coded Spectrum versions, not C64** — in his own words, *"C64 coding was
  100% by Nick, with no involvement from myself."*

## Disassembly notes

Reconstruction is byte/trace-exact (see Verification), but only the filter
engine has been read in detail — the song-data/sequencer side is still TODO.

The **deferred init** is the interesting structural find:
init touches no SID registers at all, and the first *play* call performs the
clear + TEST through a bit7/bit6 state machine. The trace confirms it — frame 0
carries only the three TEST writes.

Black Hornet and Wacky Races are byte-identical across the driver region except
for absolute operands: one source, re-assembled per game.

## Verification

`status: verified` — **CLOSED 2026-07-30** (batch24). Both tagged files now
reconstruct **register-write-exact over 200 frames** (originally: Black_Hornet
already exact, Wacky_Races diverging). Earlier passes: first disassembly
2026-07-25; reproduced without patching 2026-07-30 (batch23).

Method for both files: SIDdecompiler `-a<decimal load addr> -z -d -c -v2`
(`-v2` Start: == PSID load address on both — no gotcha-40 relocation trap),
reassembled with 64tass `-a --cbm-prg`, traced with `sidm2-sid-trace.exe`
against a `.prg` built from the stripped PSID payload (never the raw `.sid` —
lesson 22).

### Black_Hornet.sid (load $8378, init $8378, play $8380, 2 subtunes, start=2)

`-a33656`. Reassembly is 2233 bytes, $8378-$8C30 — same length as the payload.

- **Byte-diff (unpatched)**: 2211/2233 = **99.0148%**. 22 bytes differ, all
  inside the `+`-marked self-modified region $86AF-$872D: $86AF, $86BB, $86CB,
  $86F3, $86F9-$86FC, $8700-$8702, $8712, $8714, $8720-$8721, $8724-$8726,
  $8728-$8729, $872C-$872D.
- **Trace-diff subtune 0**: **exact** — 20 frames (104/104 writes) and 200
  frames (1275/1275 writes), zero differing lines including cycle timing.
- **Trace-diff subtune 1**: **exact** — 20 frames and 200 frames
  (1574/1574 writes), zero differing lines.
- All 22 byte diffs are therefore **confirmed dead** on this file (always
  overwritten before being read). Patching all 22 back to pristine yields
  **100.0000% byte-exact** (2233/2233) and, trivially, the same exact trace.

### Wacky_Races.sid (load $F8F8, init $F8F8, play $F900, 1 subtune)

`-a63736`. Reassembly is 1600 bytes, $F8F8-$FF37.

- **Byte-diff (unpatched)**: 1560/1600 = **97.5000%**. 40 bytes differ, all in
  the `+`-marked self-modified region $F9F3-$FC27.
- **Trace-diff (unpatched)**: diverges from write index 18 (frame 1
  filter_freq_hi: original $D0 vs reassembly $01); 165 vs 155 writes / 20
  frames.
- **Patch-isolation (gotcha 41 / lesson 37), run this pass.** The 40 diffs were
  split into four groups and each group traced both alone and as the complement:

  | patched set | trace vs original |
  |---|---|
  | $F9F3 only | diverges |
  | $FBB1,$FBBD,$FBCD only | **exact** |
  | $FBE9-$FBFE only (15 bytes) | diverges |
  | $FC05-$FC27 only (21 bytes) | diverges |
  | everything EXCEPT $FBB1/$FBBD/$FBCD (37 bytes) | diverges |

  Narrowed further inside the winning group: $FBB1 alone, $FBBD alone, $FBCD
  alone, and all three pairs each still diverge — **all three bytes are jointly
  load-bearing, and the other 37 are dead.**
- **Result with the 3-byte patch** ($FBB1 $10→$01, $FBBD $01→$D0,
  $FBCD $04→$0D): byte-diff 1563/1600 = 97.6875%, **trace-diff exact at both 20
  frames and 200 frames (1569/1569 writes, zero differing lines).**
- Patching all 40 gives **100.0000% byte-exact** (1600/1600), also trace-exact.

### What the three bytes are

They are the entire cold-start state of the filter cutoff-sweep engine, held in
self-modified immediate operands rather than RAM (see the filter quirk and
`data_format.filtertable`): the sweep table's Y index seed, the cutoff-hi
accumulator (the $D0 the original writes to filter_freq_hi on frame 1), and the
per-step repeat counter. The identical three operands exist at the identical
relative spacing in Black_Hornet ($86AF/$86BB/$86CB, deltas +12/+16 — same as
$FBB1/$FBBD/$FBCD), which is the cleanest same-driver/same-pass demonstration of
the lesson-42/51 point yet recorded here: **the byte-diff shape is pixel-
identical across the two files, and the deadness verdict is opposite** —
Black_Hornet's cold path rewrites all three before reading them, Wacky_Races'
reads them first.

### Residual gap (honest scope)

Nothing outstanding on register-write fidelity. Still open, and unrelated to
verification: `zero_page`, `speed`, and the song-data side of `data_format`
(order list / patterns / instruments / wavetable / pulsetable) and `effects` —
only the filter engine was disassembled in detail. Anyone continuing should
start from the pattern/sequencer code reached from the play routine's
`jmp l8408` path in Black_Hornet.

## Sources

See the `sources` array above.

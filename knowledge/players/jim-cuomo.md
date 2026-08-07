# Jim Cuomo (composer label, >=2 house drivers)

```json
{
  "id": "jim-cuomo",
  "name": "Jim Cuomo (composer label, >=2 house drivers)",
  "aliases": ["Jim_Cuomo"],
  "authors": ["UNKNOWN — Cuomo is the COMPOSER, a jazz saxophonist. No evidence he wrote 6502. See quirks."],
  "released": "1985-1988",
  "status": "verified",
  "platform": "Native C64. NOT a single driver — the tag is a composer-named bucket spanning at least two unrelated house drivers.",
  "csdb_release": null,

  "memory": {
    "load_address": "Raging_Beast $ac00 (5283 B payload); Cage_Match $4f00 (3218 B payload); Slam_Dunk $8000 (2862 B payload). All three PSID headers carry loadAddr=0 with the real address embedded as the payload's own first 2 LE bytes.",
    "zero_page": "Cage_Match/Slam_Dunk (Sculptured driver): identical ZP block $a5,$a7,$a8,$f7-$fa — confirmed byte-identical between the two disassemblies, independent corroboration of the card's existing 'same driver, $F7 code delta' claim. Raging_Beast (different driver): only $ae/$af used, as a 16-bit table pointer.",
    "layout": "Cage_Match: code+data $4f00-$5b8f, clean (SIDdecompiler -v2 Start == PSID load address, no relocation trap). Slam_Dunk: code+data $8000-$8b2d, equally clean. Raging_Beast is structurally different: in addition to its own $ac00-load code, INIT block-copies two runtime workspace blocks from FIXED LOW RAM outside the loaded payload — `lda $ac00,X / sta $0c80,X` and `lda $ac80,X / sta $0d00,X` (256 bytes each, populating $0c80-$0dff) plus a `lda #$00 / sta $3f00,X`-style zero-fill of $3f00-$3fff. SIDdecompiler's own -v2 map reports Start:$0c80 (below the $ac00 load address) for exactly this reason — the gotcha-40/lesson-60 pattern (fixed low-RAM workspace, not a dropped byte or an engine self-copy) — confirmed by the region carrying only w/+ (write/read-write) markers and zero x/o (execute) markers in the -v2 map."
  },
  "entry": {
    "init": "Raging_Beast $ad80; Cage_Match $4fb0; Slam_Dunk $8b00.",
    "play": "Raging_Beast $ae34; Cage_Match $5037; Slam_Dunk $8006 — note Slam_Dunk's play is BELOW its init, so the layout differs despite carrying identical code to Cage_Match."
  },
  "speed": "TODO — not determined.",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE LUCASFILM STORY IS A RED HERRING — RULED OUT, and the real explanation found. No source connects Jim Cuomo to Lucasfilm Games; three separate targeted searches found zero evidence, and none of his three files touch Lucasfilm. The confusion almost certainly comes from PETER LANGSTON — Lucasfilm Games' FIRST HIRE, who genuinely was 'an experienced jazz, rock, and folk musician' and did Ballblazer's music. THAT is the jazz-musician-at-Lucasfilm. Cuomo's game-music career is CINEMAWARE (Defender of the Crown, S.D.I., both 1986) plus UK/French budget labels. Do not add a Cuomo-Lucasfilm edge.",
    "THE JAZZ-MUSICIAN IDENTIFICATION IS CORRECT (high confidence, not certain) — but the strongest argument is not the obvious one. fr.wikipedia calls him a 'saxophoniste, clarinettiste et musicien de jazz americain... connu dans le monde de l'informatique pour avoir compose la musique du jeu Defender of the Crown' — BUT that page carries NO CITATIONS, so it is not load-bearing alone. KSPC 88.7FM (2011) corroborates. The decisive argument: he performs 'Mikro Music' nights across Europe BLENDING CHIPTUNE WITH HIS REED INSTRUMENTS — the jazz identity and the game-composer identity are the same SELF-IDENTIFYING person, not two namesakes who happen to share a name.",
    "THE TAG SPANS AT LEAST TWO UNRELATED DRIVERS — it is not one player. Cage_Match and Slam_Dunk are the SAME player relocated by exactly $F7: 8 shared code runs (33/24/20/16/14/14/14 bytes) ALL at constant delta 0xF7, and traces agree (identical frame-0 init — all three voices AD=$33, SR=$F3, ctrl=$21 — with identical cycle deltas +18, +197, +377 repeating). Raging_Beast is a DIFFERENT player: it shares only a note table plus one 14-byte fragment, and its init is structurally different.",
    "CONTROL TEST A — THE NOTE TABLE IS WORTHLESS AS EVIDENCE, and this is exactly the trap that would have produced a false 'shared driver across all 3' claim. The 190-byte shared block between Raging_Beast and the other two is a standard note-frequency table (96 hi + 96 lo bytes). It appears in 1,421 of 61,157 HVSC files across 136 composer directories — 2.3% of the entire collection. DO NOT cite a shared note table as a driver link, here or anywhere.",
    "CONTROL TEST B — THE SHARED CODE IS A SCULPTURED SOFTWARE HOUSE DRIVER. Scanning all 61,157 HVSC files for a RELOCATION-INVARIANT 33-byte code run returns exactly 3 hits: Cage_Match, Slam_Dunk, and /GAMES/G-L/Los_Angeles_SWAT.sid — whose header reads 'Los Angeles SWAT / <?> / 1986 Entertainment USA', i.e. COMPOSER UNKNOWN, NOT CUOMO. LA SWAT is confirmed Sculptured Software (Wikipedia infobox). So all three files carrying that driver are Sculptured Software titles (1986-88), and the one Cuomo game NOT by Sculptured (Raging Beast, by Jawx) uses a different player. THE DRIVER FOLLOWS THE STUDIO, NOT THE COMPOSER.",
    "HONEST AMBIGUITY on the above: LA SWAT's composer is unattributed, so it MIGHT also be an uncredited Cuomo tune (right era, right label). But both readings converge on the same conclusion — Raging Beast is unambiguously Cuomo and does NOT use the driver, so the studio explanation holds either way.",
    "HE COMPOSED, HE DID NOT CODE. No evidence anywhere that Cuomo wrote 6502 — he is a jazz saxophonist. This card is the same pattern as [[ken-lagace]] and [[silas-warner]]: a composer-named HVSC tag over code the composer did not write.",
    "HIS THREE HVSC FILES ARE HIS COMPLETE C64 OUTPUT. Lemon64's Cuomo list is exactly these (4 entries; Advanced Basketball Simulator is the 1989 EU re-release of Slam-Dunk). Checked and EXCLUDED: GAMES/S-Z/Sinbad_and_the_Throne_of_the_Falcon.sid is Tom Jeffries (Singing Electrons), 1988 Cinemaware — STIL credits the Amiga original to Bill Williams, NOT Cuomo, despite fr.wikipedia listing Sinbad as a Cuomo credit. No C64 Defender of the Crown rip exists in HVSC.",
    "HIS BEST-KNOWN WORK ISN'T HERE. HVSC/STIL independently credits ARTIST: Jim Cuomo on 18 lines as the ORIGINAL composer of Defender of the Crown — covered by 8+ C64 scene musicians (A-Man, Dr Rox, Factor6, Richard Joseph, Adam Morton, NecroPolo, Divertigo, Kyle Johnson). The C64 scene knows him as a source to cover, not as a C64 composer.",
    "OBSERVATION NEEDING CONFIRMATION, not an assertion: the Sculptured driver uses waveforms $21 (saw+gate), $41 (pulse+gate), $81 (noise+gate), and NO $D418, filter, or pulse-width writes were observed in the traced windows — which would imply the caller sets volume. Traced windows only; not proven absent.",
    "VERIFIED THIS PASS (disassemble+reassemble+trace-diff, not just byte-window scanning): all three files reconstruct 100.0000% byte-exact (in the SIDdecompiler-covered range — see the two small uncovered trailing gaps below) and 100% register-write+cycle-exact against a direct trace of the true original .sid, across every subtune (Cage_Match 4, Raging_Beast 3, Slam_Dunk 1 — 740 total register writes, 0 divergences). Method: `SIDdecompiler -a<decimal load addr> -z -d -c -v2 -r`, `64tass`, byte-diff, then `sidm2-sid-trace.exe` on both the reassembled .prg and a directly-repackaged original-payload .prg (2-byte load header + payload, no disassembly involved) at the PSID's own init/play addresses. Uncovered trailing bytes never touched by SIDdecompiler's own trace and therefore not diffable: Cage_Match $5b90-$5b91 (2 bytes, file's literal last 2 bytes `$fa $ff`); Raging_Beast $bffa-$c092 (153 bytes, past the -v2 map's own End:$bff9). Both are lesson-9-class 'genuinely never touched by this file's own playback' gaps, not disassembly failures — left as an explicit TODO, not patched or guessed.",
    "RELOCATION-INVARIANCE CONTROL (non-tautological check, since -r makes the native byte-diff trivially 100%): rebuilding each disassembly at a different SIDdecompiler -a base and re-tracing at the shifted init/play addresses reproduces the original register-write stream exactly for Cage_Match (all 4 subtunes) and Slam_Dunk. Raging_Beast is PAGE-RELOCATABLE ONLY: a non-page-aligned control delta ($1137) diverges by 4 of 102 writes on subtune 2 only (osc2 frequency, frames 122/148), while a page-aligned control delta ($1100) at the same base is 0/102 exact — confirmed cause is an `asl / bcc.. / lsr / tay` odd/even-split note-frequency table (labels l0d21/l0d80) that lives inside the block-copied low-RAM workspace above, i.e. a genuine property of the original driver's address arithmetic (the same class as this project's lessons 87/91/103/110), not a defect in the reconstruction — the native (zero-shift, true-address) build that was actually byte/trace-verified against the original file never exercises this constraint.",
    "Biography: American (HVSC Musicians.txt:387 'Cuomo, Jim - USA'; DeepSID country USA), born 7 March 1945, resident in PARIS. North Texas State (BA 1966), Univ. of Illinois (MMus 1970). C64 era 1985-1988 (DeepSID active: 1988)."
  ],
  "sources": [
    "fr.wikipedia — Jim Cuomo (NOTE: carries no citations; corroborating only): https://fr.wikipedia.org/wiki/Jim_Cuomo",
    "KSPC 88.7FM interview/announcement (2011; jazz + chiptune, Paris, Pigeon Music label): https://kspc.org/in-studio-video-game-composer-jim-cuomo-on-the-video-game-music-show-this-friday-101411/",
    "Lemon64 — Raging Beast: https://www.lemon64.com/game/raging-beast · Intergalactic Cage Match: https://www.lemon64.com/game/intergalactic-cage-match · Slam-Dunk: https://www.lemon64.com/game/slam-dunk · his game list: https://www.lemon64.com/games/list.php?list_individual=jim-cuomo",
    "Wikipedia — Los Angeles SWAT (confirms Sculptured Software; the control-test third hit): https://en.wikipedia.org/wiki/Los_Angeles_SWAT",
    "CSDb SID entry 5817 (Raging Beast): https://csdb.dk/sid/?id=5817",
    "Local: HVSC 85 Musicians.txt:387, STIL.txt:30895, data/composers/jim-cuomo.json. CONFIRMED ABSENT: no SIDId entry in data/sidid.json.",
    "NOT treated as primary (all returned HTTP 403 to fetch; search snippets only): MobyGames, uvlist, GDRI, Discogs.",
    "Verification pass (this run): SIDdecompiler.exe + 64tass.exe + sidm2-sid-trace.exe disassembly/reassembly/byte-diff/trace-diff of Cage_Match.sid, Raging_Beast.sid and Slam_Dunk.sid directly from C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/C/Cuomo_Jim/ — see the two 'VERIFIED THIS PASS'/'RELOCATION-INVARIANCE CONTROL' quirks entries for exact numbers."
  ]
}
```

## Overview

`Jim_Cuomo` is **not a driver**. It's a composer-named bucket sitting over **at
least two unrelated house drivers**, named for **Jim Cuomo** — an American jazz
saxophonist and clarinettist (b. 7 March 1945, resident in Paris) best known in
games for **Cinemaware**'s *Defender of the Crown*.

The irony worth recording: his most famous game music **isn't in HVSC as his
own** — *Defender of the Crown* has no C64 rip, and he appears in STIL 18 times
as the *original artist* being covered by C64 scene musicians. His three actual
C64 files are budget-label conversion work.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **The Lucasfilm lead is false** — it's Peter Langston's story, not Cuomo's.
  (Langston has no card; he'd be a good one.)
- **The driver follows the studio, not the composer** — Cage Match and Slam Dunk
  carry a **Sculptured Software** house routine that also turns up in *Los
  Angeles SWAT*, a game Cuomo has nothing to do with.
- **Two control tests are what make that conclusion trustworthy**, and one of
  them is a warning: the shared note table between all three files appears in
  **2.3% of all of HVSC**. It proves nothing. A naive read would have called
  this one driver across three files.

## Disassembly notes

A real disassembly now exists for all three files (`SIDdecompiler -r`, see
Verification below), confirming the earlier opcode/byte-window scan's
conclusions rather than superseding them:

- Cage Match ↔ Slam Dunk: 8 code runs at a constant `$F7` relocation delta,
  confirmed by identical trace cycle deltas — and now independently
  reconfirmed by byte-identical zero-page allocation ($a5, $a7, $a8,
  $f7-$fa) between the two disassemblies.
- The Sculptured fingerprint is a **relocation-invariant 33-byte run** scanned
  across all 61,157 HVSC files → exactly 3 hits.
- Raging Beast's driver keeps a small ($ae/$af) ZP pointer, no other ZP use,
  and copies two workspace blocks ($0c80-$0dff, $3f00-$3fff) from fixed low
  RAM at INIT time — see `memory.layout`.

Trace volumes (this run, full register-write count against the real file, not
an earlier estimate): Raging Beast 78+94+102 = 274 writes/3 subtunes; Cage
Match 91+88+111+97 = 387 writes/4 subtunes; Slam Dunk 79 writes/1 subtune.

## Verification

`status: verified`. All three tagged files were disassembled
(`SIDdecompiler.exe -a<decimal load> -z -d -c -v2 -r`), reassembled
(`64tass`), byte-diffed against the true PSID payload, and trace-diffed
(`sidm2-sid-trace.exe`) against a direct trace of the **original** .sid file
(not the reassembly against itself) at the file's own PSID init/play
addresses, across every subtune:

- **Byte-diff**: 100.0000% exact in the SIDdecompiler-covered range for all
  three files (Cage_Match 3216/3218 compared bytes, 2 uncovered trailing
  bytes; Slam_Dunk 2862/2862, full file, no gap; Raging_Beast 5114/5283
  code-region bytes compared — its remaining payload bytes are the
  low-RAM-workspace copy *source*, correctly excluded from the diff per this
  project's own convention, plus 153 uncovered trailing bytes). See the
  `quirks` array for the exact uncovered address ranges.
- **Trace-diff**: 0 divergences over 740 total register writes across all 8
  subtunes (4 + 3 + 1), comparing `(frame, cycle, register, old, new)`
  between the reassembly and a direct trace of the real HVSC file.
- **Relocation-invariance control** (needed because `-r` makes the native
  byte-diff tautologically exact — see this project's own tooling lessons):
  passes cleanly for Cage_Match and Slam_Dunk at a non-page-aligned base.
  Raging_Beast is page-relocatable-only (explained, localized, not a defect
  in the verified native-address reconstruction — see `quirks`).

This upgrades the two-driver split and the Sculptured attribution from
"measured against controls" to **directly reconstructed and register-exact**.
Identity (Jim Cuomo the jazz musician) remains high-confidence via independent
sources, unaffected by this disassembly pass.

**Still open, correctly left as TODO, not guessed**: `data_format` (order
list/pattern/instrument/wavetable/pulsetable/filtertable encodings) and
`effects.encoding` were not reverse-engineered this pass — the verification
above establishes that the byte layout and runtime behavior are now fully
accounted for, not that the composed-data format has been mapped. Also still
undetermined: who coded either driver (the Sculptured routine has no name;
François Lionet is only *inferred* for Raging Beast as its game's coder);
whether *Los Angeles SWAT* is an uncredited Cuomo tune.

## Sources

See the `sources` array above.

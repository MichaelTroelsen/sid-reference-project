# Jim Cuomo (composer label, >=2 house drivers)

```json
{
  "id": "jim-cuomo",
  "name": "Jim Cuomo (composer label, >=2 house drivers)",
  "aliases": ["Jim_Cuomo"],
  "authors": ["UNKNOWN — Cuomo is the COMPOSER, a jazz saxophonist. No evidence he wrote 6502. See quirks."],
  "released": "1985-1988",
  "status": "in-progress",
  "platform": "Native C64. NOT a single driver — the tag is a composer-named bucket spanning at least two unrelated house drivers.",
  "csdb_release": null,

  "memory": {
    "load_address": "Raging_Beast 5409 B; Cage_Match 3344 B; Slam_Dunk 2988 B.",
    "zero_page": "TODO — no disassembly performed. Not guessed.",
    "layout": "TODO — no disassembly performed."
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
    "Biography: American (HVSC Musicians.txt:387 'Cuomo, Jim - USA'; DeepSID country USA), born 7 March 1945, resident in PARIS. North Texas State (BA 1966), Univ. of Illinois (MMus 1970). C64 era 1985-1988 (DeepSID active: 1988)."
  ],
  "sources": [
    "fr.wikipedia — Jim Cuomo (NOTE: carries no citations; corroborating only): https://fr.wikipedia.org/wiki/Jim_Cuomo",
    "KSPC 88.7FM interview/announcement (2011; jazz + chiptune, Paris, Pigeon Music label): https://kspc.org/in-studio-video-game-composer-jim-cuomo-on-the-video-game-music-show-this-friday-101411/",
    "Lemon64 — Raging Beast: https://www.lemon64.com/game/raging-beast · Intergalactic Cage Match: https://www.lemon64.com/game/intergalactic-cage-match · Slam-Dunk: https://www.lemon64.com/game/slam-dunk · his game list: https://www.lemon64.com/games/list.php?list_individual=jim-cuomo",
    "Wikipedia — Los Angeles SWAT (confirms Sculptured Software; the control-test third hit): https://en.wikipedia.org/wiki/Los_Angeles_SWAT",
    "CSDb SID entry 5817 (Raging Beast): https://csdb.dk/sid/?id=5817",
    "Local: HVSC 85 Musicians.txt:387, STIL.txt:30895, data/composers/jim-cuomo.json. CONFIRMED ABSENT: no SIDId entry in data/sidid.json.",
    "NOT treated as primary (all returned HTTP 403 to fetch; search snippets only): MobyGames, uvlist, GDRI, Discogs."
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

None. The findings above are **opcode/byte-window comparison plus traces**, not
disassembly:

- Cage Match ↔ Slam Dunk: 8 code runs at a constant `$F7` relocation delta,
  confirmed by identical trace cycle deltas.
- The Sculptured fingerprint is a **relocation-invariant 33-byte run** scanned
  across all 61,157 HVSC files → exactly 3 hits.

Trace volumes: Raging Beast 121 writes/300 frames; Cage Match 91/200; Slam Dunk
79/200.

## Verification

`status: in-progress`. Identity is high-confidence (converging independent
sources, with the self-identifying chiptune-plus-saxophone performances as the
strongest single argument). The two-driver split and the Sculptured attribution
are **measured against controls**.

**Not verified**: memory map, ZP, data format and effect encoding are all unknown
— no disassembly was done and nothing was guessed.

Also undetermined: who coded either driver (the Sculptured routine has no name;
François Lionet is only *inferred* for Raging Beast as its game's coder);
whether *Los Angeles SWAT* is an uncredited Cuomo tune.

## Sources

See the `sources` array above.

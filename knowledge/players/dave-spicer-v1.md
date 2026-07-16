# Dave Spicer V1 (1992 Hi-Tec)

```json
{
  "id": "dave-spicer-v1",
  "name": "Dave Spicer V1 (1992 Hi-Tec)",
  "aliases": ["Dave_Spicer_V1"],
  "authors": ["UNCONFIRMED — Spicer or the game's coder (Nick Taylor). See quirks; do not assert self-coded."],
  "released": "1992",
  "status": "in-progress",
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

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE VERSION NUMBERING IS A LIE — AND THIS CARD IS THE KB'S COUNTER-EXAMPLE TO ITS OWN SPLIT PRECEDENT. A sibling tag Dave_Spicer_V15 exists (verbatim in cadaver/sidid's sidid.cfg lines 460-464), but it is NOT a later version of V1. They are two STRUCTURALLY UNRELATED DRIVERS, and THE CHRONOLOGY IS INVERTED versus the numbering: V15 = 1989, V1 = 1992. No V2-V14 exist anywhere. Contrast the established pattern cited on robert-westgate-v1 (and Ozzy/Cadaver): those are CLEAN CHRONOLOGICAL SPLITS OF ONE EVOLVING DRIVER. This is not that. Two cards here are justified more strongly than usual — they aren't even the same driver. See [[dave-spicer-v15]].",
    "WHY 'V15' IS UNKNOWABLE — do not invent a version history. There are no V2-V14 anywhere; whether it is a typo for V1.5/V2 or intentional cannot be determined. WilfredC64/player-id (SIDId's maintained successor) carries BOTH names unchanged.",
    "DEFERRED INIT — a real behavioural quirk. Init writes NO SID registers at all (CLC / ADC #$81 / STA <ctrl> / RTS). The FIRST PLAY CALL does the clear + TEST via a bit7/bit6 state machine (BIT <ctrl> / BPL / BVS). Confirmed by trace: frame 0 has only the 3 TEST writes; the real setup lands frame 1.",
    "THE BUBBLE BUS / STARQUAKE LEAD IS WRONG — RULED OUT. Starquake was Stephen Crow. No source links any Spicer to Bubble Bus. His actual publishers are Martech, SNK/Electrocoin and Hi-Tec. Do NOT cross-reference [[bubble-bus-love-r]].",
    "HE IS A PROGRAMMER — OF ZX SPECTRUM VERSIONS, not of C64 code. GTW64's Push-A-Block page: 'C64: Nick Taylor / Spectrum: David Spicer', plus his own quote: 'C64 coding was 100% by Nick, with no involvement from myself.' On all three C64 SIDs he is credited MUSICIAN ONLY, with a different coder each time. So the brief's 'he's a programmer, so a self-coded routine is plausible' reasoning does not transfer to the C64.",
    "AUTHORSHIP IS GENUINELY CONFOUNDED — two hypotheses fit the evidence EQUALLY well. (a) It is HIS routine: it follows him across two different coders and companies. (b) It is the CODER'S routine: V1 and V15 are unrelated drivers mapping 1:1 onto a different C64 coder each — 1989 SNK (Paul Rogers) -> V15; 1992 Rave/Hi-Tec (Nick Taylor) -> V1. SIDId often names a routine after the MUSICIAN for want of a better name. The KB's composer-concentration heuristic is USELESS here: 100%/1 composer is forced by him only having 3 tagged files at all. Report unconfirmed.",
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

Not fully disassembled. The **deferred init** is the interesting structural find:
init touches no SID registers at all, and the first *play* call performs the
clear + TEST through a bit7/bit6 state machine. The trace confirms it — frame 0
carries only the three TEST writes.

Black Hornet and Wacky Races are byte-identical across the driver region except
for absolute operands: one source, re-assembled per game.

## Verification

`status: in-progress`. Entry points, the relocation-free layout, the deferred-init
behaviour and the exact fingerprint (2 hits in 61,157) are all verified.

**Not verified**: nothing reconstructed. Order list, patterns, instruments and
effects are `TODO` — no published disassembly, and outside SIDM2's Laxity scope.

Not determined: why "V15"; whether Spicer wrote either driver; whether the C64
Spicer is the Sparcade author; what the untagged *Pizza Delivery* driver is.

## Sources

See the `sources` array above.

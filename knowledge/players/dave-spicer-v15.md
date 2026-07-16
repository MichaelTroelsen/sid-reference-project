# Dave Spicer V15 (1989 SNK/Electrocoin)

```json
{
  "id": "dave-spicer-v15",
  "name": "Dave Spicer V15 (1989 SNK/Electrocoin)",
  "aliases": ["Dave_Spicer_V15"],
  "authors": ["UNCONFIRMED — Spicer or the game's coder (Paul Rogers). See quirks; do not assert self-coded."],
  "released": "1989",
  "status": "in-progress",
  "platform": "Native C64. Despite the number, OLDER than [[dave-spicer-v1]] and structurally unrelated to it.",
  "csdb_release": null,

  "memory": {
    "load_address": "Time_Soldier: $1000 visible, but THE PLAYER LIVES IN RAM UNDER THE KERNAL AT $EC00 — banked in via $01 = $35 around every call (saved/restored through a self-modified operand).",
    "zero_page": "TODO — not disassembled beyond the entry/relocation structure. Not guessed.",
    "layout": "init $1000 / play $1003 (a JMP table). Init BLOCK-COPIES A PER-SONG BUNDLE to $EC00. Five parallel 7-entry tables at $516C/$5173/$517A/$5181/$5188. The block layout CLOSES EXACTLY: $105E -> $1FFD -> $2C11 -> $369A -> $40F8 -> $4BC5 -> $516C (= the table base). SIX bundles for SEVEN songs — songs 0 and 1 share a bundle, differing only by the subsong byte. Each bundle opens with an identical 5-byte dual-entry stub A9 00 4C xx EC, so $EC00 = play and $EC02 = init. EVERY BUNDLE CARRIES ITS OWN PLAYER COPY — the V15 signature appears 6x, once per bundle."
  },
  "entry": {
    "init": "$1000 (JMP table) -> the relocator. Per-bundle real init at $EC02 once copied.",
    "play": "$1003 (JMP table). Per-bundle real play at $EC00 once copied."
  },
  "speed": "TODO — not determined. Traced at 390 writes / 50 frames; first write at frame 0 cycle 46017, consistent with the $0F9F-byte init copy eating most of frame 1.",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IT IS OLDER THAN 'V1', NOT NEWER — the numbering is inverted and carries no lineage information. V15 = 1989 (Time Soldier, SNK/Electrocoin); [[dave-spicer-v1]] = 1992 (Hi-Tec). They are STRUCTURALLY UNRELATED DRIVERS, not two points on one line. NO V2-V14 EXIST ANYWHERE. This pair is the KB's counter-example to its own Westgate/Ozzy/Cadaver split precedent, which assumes clean chronological splits of ONE evolving driver.",
    "WHY 'V15' IS UNKNOWABLE — DO NOT INVENT A VERSION HISTORY. Typo for V1.5/V2, or intentional, cannot be determined. WilfredC64/player-id (SIDId's maintained successor) carries the name unchanged.",
    "THE PLAYER RUNS UNDER THE KERNAL ROM at $EC00, banked in via $01 = $35 around every call, with the bank value saved/restored through a SELF-MODIFIED OPERAND. That is why the SID's visible load address tells you nothing about where the code actually executes.",
    "SIX BUNDLES FOR SEVEN SONGS, EACH WITH ITS OWN PLAYER COPY — an unusual architecture worth the card. Init block-copies a per-song bundle to $EC00; the V15 signature therefore appears SIX TIMES in the file, once per bundle. The block chain closes exactly onto the table base ($105E -> $1FFD -> $2C11 -> $369A -> $40F8 -> $4BC5 -> $516C), which is what confirms the reading. Songs 0 and 1 share a bundle and differ only by the subsong byte.",
    "SIGNATURE: AA A0 17 99 00 D4 88 10 FA BD — the same SID-clear idiom as V1 but Y-INDEXED, preserving the song number in X. V1's is X-indexed (A2 17 9D 00 D4 CA 10 FA). Similar idiom, different code — do not read the resemblance as shared lineage.",
    "FINGERPRINT IS EXACT: a scan of all 61,157 HVSC 85 files matches V15 to exactly Time_Soldier, and V1 to exactly Black_Hornet + Wacky_Races. Zero false positives, zero cross-composer leakage.",
    "AUTHORSHIP IS GENUINELY CONFOUNDED — two hypotheses fit EQUALLY well. (a) It is Spicer's routine, following him across coders and companies. (b) It is the CODER'S routine: V1 and V15 map 1:1 onto a different C64 coder each — 1989 SNK (PAUL ROGERS) -> V15; 1992 Rave/Hi-Tec (Nick Taylor) -> V1. SIDId often names a routine after the MUSICIAN for want of a better name. The KB's composer-concentration heuristic is useless here (100%/1 composer is forced by a 3-file sample). Report unconfirmed; do not assert self-coded.",
    "HE IS A PROGRAMMER OF ZX SPECTRUM VERSIONS, NOT C64 CODE — so 'he's a coder, therefore probably self-coded' does not transfer. His own words via GTW64: 'C64 coding was 100% by Nick, with no involvement from myself.' On all three C64 SIDs he is credited MUSICIAN ONLY, with a different coder each time.",
    "IDENTITY: David Spicer, English. HVSC Musicians.txt:1557 'Spicer, David - UNITED KINGDOM (ENGLAND)' — bare entry, no handle/group, i.e. a real name. Era 1989-1992. No CSDb scener profile (csdb_id: 0) — purely commercial, no demoscene footprint. Time Soldier has 7 subtunes, the most of any Spicer file.",
    "COLLISIONS (shared with [[dave-spicer-v1]]): Troy Spicer (CGSC, 3 .mus files 1987-88) — different person/collection, ruled out. 'David Alan Spicer' / Sparcade (DASARcade 1995, pre-dating MAME) — same name, same nationality, adjacent era: PLAUSIBLE BUT UNCONFIRMED, no source links them, DO NOT MERGE.",
    "No SIDId .nfo entry (confirmed absent upstream and in the local bundle) — the tag comes from sidid.cfg's signature. No STIL.txt entry for any Spicer file."
  ],
  "sources": [
    "cadaver/sidid sidid.cfg lines 460-464 (the Dave_Spicer_V15 signature, verbatim): https://github.com/cadaver/sidid/blob/master/sidid.cfg · sidid.nfo (no Spicer entry): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "WilfredC64/player-id (SIDId's maintained successor — carries the name unchanged): https://github.com/WilfredC64/player-id",
    "HVSC Musicians.txt line 1557: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Time Soldier (Paul Rogers / David Spicer): https://www.lemon64.com/game/time-soldier · his index: https://www.lemon64.com/games/list.php?list_individual=david-spicer",
    "GTW64 — Block Game / Push-A-Block (the 'C64 coding was 100% by Nick' quote): https://www.gamesthatwerent.com/gtw64/block-game/ · Pizza Delivery (Martech; his own quotes): https://www.gamesthatwerent.com/gtw64/pizza-delivery/",
    "DeepSID profile: https://deepsid.chordian.net/api/v1.php?profile=/MUSICIANS/S/Spicer_David/",
    "Local: data/composers/david-spicer.json; deepsid_dl/DeepSID_Database/hvsc_files.sql:42582-42585; HVSC 85 binaries; sidm2-siddump traces"
  ]
}
```

## Overview

`Dave_Spicer_V15` is the **1989** driver behind *Time Soldier* (SNK/Electrocoin),
scored by **David Spicer**. Despite the number, it is **three years older** than
[[dave-spicer-v1]] and shares no code with it.

Architecturally it's the more interesting of the pair: the player executes from
**RAM under the KERNAL ROM at `$EC00`**, and the file ships **six separate copies
of it** — one bundled with each song's data.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **V15 (1989) predates V1 (1992).** The version numbers mean nothing.
- **The visible load address is misleading** — the code runs at `$EC00` under the
  KERNAL, banked via a self-modified `$01` store.
- **Six player copies, one per bundle** — which is why the signature appears six
  times in a single file.
- **The signatures resemble each other but aren't related**: same SID-clear
  idiom, X-indexed in V1, Y-indexed here. Don't read that as lineage.

## Disassembly notes

Not fully disassembled. The bundle structure is the solid find, and it's solid
because **the block chain closes exactly** onto the table base:
`$105E → $1FFD → $2C11 → $369A → $40F8 → $4BC5 → $516C`, with five parallel
7-entry tables there. Six bundles for seven songs; songs 0 and 1 share one.

Each bundle opens with the same 5-byte dual-entry stub (`A9 00 4C xx EC`), giving
`$EC00` = play and `$EC02` = init after relocation.

The trace corroborates the copy: first write at frame 0 cycle 46017, consistent
with a `$0F9F`-byte init copy consuming most of a frame.

## Verification

`status: in-progress`. The relocation, bundle layout, entry points and exact
fingerprint (1 hit in 61,157) are verified.

**Not verified**: nothing reconstructed. Data format is `TODO` — no published
disassembly, outside SIDM2's Laxity scope.

Not determined: why "V15"; whether Spicer or Paul Rogers wrote it; whether the
C64 Spicer is the Sparcade author.

## Sources

See the `sources` array above.

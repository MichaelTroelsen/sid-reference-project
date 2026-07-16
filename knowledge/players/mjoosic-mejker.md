# Mjoosic Mejker

```json
{
  "id": "mjoosic-mejker",
  "name": "Mjoosic Mejker",
  "aliases": ["Mjoosic_Mejker", "Mjoosmaker"],
  "authors": ["Fredrik Ademar (Ade, later Phred)"],
  "released": "1988 (V0.99 only — released TWICE, see quirks)",
  "status": "in-progress",
  "platform": "Native C64 music editor ('composer') with integrated replay routine. One of DeepSID's curated players.",
  "csdb_release": 43954,

  "memory": {
    "load_address": "Editor PRG 'MJOOSIC 0.99/ADE': $0801-$3681 (11,907 bytes). Ripped tunes: $4200. Driver + tables occupy $4200-$4FFF; song data origin $5000 (established by byte-diff, see quirks).",
    "zero_page": "8 bytes ($35-$3A + $FB-$FC) — from DeepSID's curated players.json, the authoritative source. This is the ONLY populated spec field there; every other field (player_size, cpu_time, patterns, speeds) is an empty string.",
    "layout": "2-entry JMP table at $48A0: 4C A6 48 / 4C AF 48 = JMP $48A6 (init) / JMP $48AF (play). $48A6 does JSR $48C5; JSR $4200; JMP $42B9 — so $4200 is the driver core's own init, wrapped by the $48A0 stub. A driver control block sits around $4D00 (the documented tempo byte $4D22 lives there; demo_tune_2's play stub writes STA $4D30)."
  },
  "entry": {
    "init": "$48A0 (the three editor-ripped tunes). Mindblast_tune_2 differs: $4200 (JSR $421D / JMP $42AE) — a hand-built wrapper.",
    "play": "$48A3 (the three editor-ripped tunes). Mindblast_tune_2: $4209 (LDA #$01 / STA $4933 / JMP $4900)."
  },
  "speed": "VBI on three of four files. X-Mas_Night has flags 0x02 = song 2 is CIA-driven. All PSID v2, 6581, PAL.",

  "data_format": {
    "order_list": "TODO — no disassembly performed",
    "patterns": "Pattern-based with an arpeggio table (from the editor's own key bindings: P = change pattern, A = arpeggio no., F5 = loop first pattern, F7 = play patterns in order). Encoding TODO.",
    "instruments": "Parameter set read verbatim from the editor's UI field labels: ATTACK/DECAY, SUSTAIN/REL., WAVEFORM1, WAVEFORM2, W.E(MOD/SPD), PULSEWIDTH, P.E(MOD/SPD), EFFECT-RANGE, EFF(MOD/SPD), V.DEL/V.SPD, FLT(RES/MOD). I.e. ADSR, dual waveform, waveform envelope, pulse + pulse envelope, effect + effect envelope, vibrato delay/speed, filter res/mod. On-disk BINARY encoding TODO.",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE NAME IS EXACTLY THE JOKE IT LOOKS LIKE — and this is sourced, not merely plausible: CSDb's own AKA field for the release is literally 'Mjoosmaker'. Swedish phonetic spelling of English 'Music Maker'.",
    "RELEASED TWICE, SAME VERSION NUMBER, DIFFERENT BUILDS. Both are 'Mjoosic Mejker V0.99', 1988: CSDb 43954 released by Crackers & Programmers Unlimited (credited 'Ade of CPU, Lunds Cracking Team') and CSDb 177136 released by Fairlight (credited 'Phred of Fairlight/Oneway', internal copyright '(c) 1988 AD Phred of FLT.'). These are NOT the same binary: demo_tune_1 (CPU) vs demo_tune_2 (FLT) differ in 422 bytes across $4200-$4FFF, first divergence at $4206 — despite identical version number and identical entry points. SIDId's REFERENCE points only at the CPU edition (43954).",
    "V0.99 IS AN UNFINISHED PREVIEW THAT CANNOT EXPORT STANDALONE MUSIC — stated by the author in the tool's own Swedish note file: 'mojlighet att kora musiken separat saknas tyvarr i denna preview' ('the ability to run the music separately is unfortunately missing in this preview'), and 'mer ingaende instruktioner, fler ljudfunktioner samt storre anvandarvanlighet kommer i den fardiga vers.' NO EVIDENCE A FINISHED V1.0 EVER SHIPPED — only V0.99 exists on CSDb, in the two editions above.",
    "THIS EXPLAINS THE ODD FILE OUT (inference, clearly labelled — well-supported but stated by no source): because V0.99 explicitly cannot export standalone music, Phred must have hand-integrated the routine into Fairlight's 'Mindblast - the Movie' demo. That is exactly why Mindblast_tune_2 carries a different entry layout ($4200/$4209) from the three editor-ripped tunes ($48A0/$48A3), and why 2,386 bytes differ from demo1 in $4200-$4FFF.",
    "THE HANDLE CHANGE IS VISIBLE IN THE SID HEADERS THEMSELVES — a self-corroborating detail. Mjoosic_Mejker_demo_tune_1.sid: author 'Fredrik Ademar (Ade)', released '1988 Crackers&Programmers Unltd.'. The other three: author 'Fredrik Ademar (Phred)', released '1988 FairLight'. HVSC Musicians.txt:88 records it compactly: 'Ademar, Fredrik (Phred {Ade}) / Fairlight / CPU - SWEDEN'.",
    "Ade and Phred are ONE PERSON, proven structurally rather than inferred: CSDb's webservice (type=scener&id=4206&depth=2) returns both handle IDs — Ade (28271, CurrentlyUsedHandle=false) and Phred (4206, true) — under one shared <Scener><ID>4196</ID>. Roles: Coder, Graphician, Musician. He CODED the Mindblast demo too (CSDb 27669 credits Code: Phred + Woodo), consistent with the Coder role.",
    "GROUP TIMELINE (mutually corroborating across four sources): ~1988 Crackers & Programmers Unlimited (CPU) + Lunds Cracking Team as 'Ade' -> Oneway (1-12 Dec 1988) -> Fairlight from 13 Dec 1988 as 'Phred'. CPU was itself a RENAME of Lunds Cracking Team (Bacchus' breakout from LCT), Sweden, founded 12/1987, dissolved 12/1988 — so the group dissolving in Dec 1988 and Phred joining Fairlight on 13 Dec 1988 fit exactly.",
    "DATA-QUALITY NOTE: CSDb's group list for him is INCOMPLETE — it records Oneway and Fairlight but NOT CPU or Lunds Cracking Team, even though release 43954's own credit line and HVSC's Musicians.txt both name CPU.",
    "GREP FALSE POSITIVE, RECORDED SO IT IS NOT RE-OPENED: searching the card set for 'Ademar' hits [[david-thiel]] — but the match is the SUBSTRING 'trADEMARk', from that card's Q*bert quirk ('the game's trademark alien gibberish'). A word-boundary grep returns zero hits across all cards. There is NO relationship (Thiel = US commercial-studio composer; Ademar = Swedish 1988 demoscener). Do not add a cross-reference.",
    "IDENTITY COLLISION — REAL, AND RULED OUT: a CSDb SID search for 'Phred' returns tunes by 'Lee Hyatt (Phred)' (For_Fee_on_Fiji.sid, Toona.sid, 1997, group Bad Coders International). DIFFERENT PERSON, ruled out on four independent grounds: different real name; 1997 vs 1988; both files sit in HVSC DEMOS/ not MUSICIANS/A/Ademar_Fredrik/; and a different player entirely (init=$1000 play=$1003 vs Mjoosic's $48A0/$48A3). Lee Hyatt has no Musicians.txt entry. Also checked and excluded: CSDb Phred 814 (US, aka Phredator/Just_Phred), Phred 24032 (US), Phreaking Phred 20519.",
    "CORRECTION TO A COMMON ASSUMPTION: Mjoosic Mejker IS one of DeepSID's CURATED players — data/players.json carries title 'Mjoosic Mejker', developer 'Fredrik Ademar', start_year 1988, csdb_id 43954. It appears in COVERAGE.md only because it lacked a knowledge CARD, which is a different axis from DeepSID curation. Practical effect: treat DeepSID's zero_pages as authoritative spec data, and the player qualifies for a csdbRelease box via csdb_id 43954.",
    "DOCUMENTED RUNTIME CONTROLS (the author's own words, from the tool's note file): POKE 19746,N (= $4D22), N>4, default 5 -> tempo/speed ('Andrar hastighet'). SYS 49152 (= $C000) -> restart. CAVEAT: these are documented for the EDITOR's runtime; it is NOT verified that they hold identically inside the ripped SIDs (the STA $4D30 sighting suggests the control block persists, but that is suggestive, not proof).",
    "NEGATIVE CHECKS, CONFIRMED (not merely unchecked): no player source exists in the realdmx repo (github.com/realdmx/c64_6581_sid_players, 37 entries — no Mjoosic/Ademar/Phred/Mejker entry). And it is absent from Chordian's own 'Comparison of C64 Music Editors' blog table — notable, since Chordian IS DeepSID's author.",
    "Both surviving non-demo-tune works are CHRISTMAS MUSIC: X-Mas_Night, and Mindblast_tune_2 — whose STIL entry gives TITLE 'One Horse Open Sleigh' / ARTIST 'James Lord Pierpont', i.e. 'Jingle Bells', a cover."
  ],
  "sources": [
    "DeepSID curated data/players.json (the authoritative zero_pages spec; title/developer/start_year/csdb_id)",
    "SIDId sidid.nfo:968-972 (name, author, '1988 Crackers & Programmers Unlimited', reference 43954): https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo",
    "CSDb release 43954 (CPU edition; user comment 'Best music composer tool EVER! 10/10'): https://csdb.dk/release/?id=43954",
    "CSDb release 177136 (Fairlight edition; comment 'a different version with other demo tunes'): https://csdb.dk/release/?id=177136",
    "CSDb release 27669 ('Mindblast - the Movie', Fairlight, Dec 1988; Code: Phred + Woodo; Music: David Hanlon and Phred; Text: Bacchus): https://csdb.dk/release/?id=27669",
    "CSDb scener webservice (Ade/Phred sharing one Scener ID 4196): https://csdb.dk/webservice/?type=scener&id=4206&depth=2",
    "CSDb collision checks: https://csdb.dk/webservice/?type=scener&id=814 · id=24032 · id=20519",
    "HVSC Musicians.txt:88; STIL.txt:14219-14229 ('Played slower as the demo tune in the Mjoosic Mejker composer'); Update58.hvs:759, Update71.hvs:218/1658, Update74.hvs:405: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/",
    "The D64 itself (directory parsed, BASIC note file detokenized): http://csdb.dk/getinternalfile.php/34765/MjoosicMejker.d64",
    "Negative checks: https://github.com/realdmx/c64_6581_sid_players · https://blog.chordian.net/2018/02/24/comparison-of-c64-music-editors/"
  ]
}
```

## Overview

**Mjoosic Mejker** — Swedish phonetic English for *Music Maker* — is a C64 music
editor written in 1988 by **Fredrik Ademar**, a Swedish coder/graphician/musician
who went by **Ade** and then **Phred**. It is one of DeepSID's curated players,
and it survives only as **V0.99, an explicitly unfinished preview**, released
twice in the same year under two different group banners as two different
builds.

Its most interesting property is a limitation: V0.99 **cannot export standalone
music** — the author says so himself in the disk's note file. That single fact
explains the shape of the surviving evidence, including why one of the four
HVSC files has a completely different entry layout from the other three.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **Two builds, one version number.** CSDb 43954 (CPU) and 177136 (Fairlight)
  are both "V0.99" but differ by 422 bytes in the driver region. Don't assume a
  tag maps to one binary.
- **The preview can't export music**, which is almost certainly why
  `Mindblast_tune_2` is hand-integrated and structurally unlike its siblings.
- **`Ademar` greps hit [[david-thiel]] via `trADEMARk`.** A false positive,
  recorded here so nobody re-investigates it.
- **A real "Phred" collision exists** (Lee Hyatt, 1997) and is ruled out four
  ways, including by player fingerprint.

## Disassembly notes

No disassembly performed. What's recorded above is **light static analysis plus
the author's own documentation**, and is labelled as such:

- `demo_tune_2` vs `X-Mas_Night` are **byte-identical across `$4200-$4FFF`** and
  diverge from exactly `$5000` — which is what establishes driver+tables at
  `$4200-$4FFF` and song data origin at `$5000`.
- The `$48A0` JMP table and the `$48A6` init chain (`JSR $48C5; JSR $4200;
  JMP $42B9`) were read directly from the bytes and match the SID headers.
- A naive linear opcode scan of `$4200-$4FFF` found all 8 of DeepSID's claimed
  ZP bytes present (`$35-$3A`, `$FB`, `$FC`). **This is a heuristic, not a
  disassembly — it is corroboration, not verification.**

## Verification

`status: in-progress`. Identity, group timeline, dual release, and the preview
limitation are all confirmed from multiple independent sources (CSDb webservice
structure, HVSC docs, the SID headers themselves, and the tool's own note file
— which agree). Memory layout and entry points are **measured**.

**Not verified**: no disassembly, so order-list format, pattern encoding, effect
encoding and the wave/pulse/filter table layouts are all `TODO`. The instrument
parameter list above is the editor's **UI labels**, not its on-disk format.
DeepSID's `zero_pages` is taken on authority, corroborated only heuristically.

Also undetermined: any biography beyond name/nationality/groups (DeepSID's
profile thumbnail has `image_source: "LINKEDIN"`, implying Chordian found a
LinkedIn profile — **not located or verified here, and no claim is made from
it**); and whether a finished version ever existed.

## Sources

See the `sources` array above.

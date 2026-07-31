# Mjoosic Mejker

```json
{
  "id": "mjoosic-mejker",
  "name": "Mjoosic Mejker",
  "aliases": ["Mjoosic_Mejker", "Mjoosmaker"],
  "authors": ["Fredrik Ademar (Ade, later Phred)"],
  "released": "1988 (V0.99 only — released TWICE, see quirks)",
  "status": "verified",
  "platform": "Native C64 music editor ('composer') with integrated replay routine. One of DeepSID's curated players.",
  "csdb_release": 43954,

  "memory": {
    "load_address": "Editor PRG 'MJOOSIC 0.99/ADE': $0801-$3681 (11,907 bytes). Ripped tunes: $4200. Driver + tables occupy $4200-$4FFF; song data origin $5000 (established by byte-diff, see quirks).",
    "zero_page": "8 bytes ($35-$3A + $FB-$FC) — from DeepSID's curated players.json, the authoritative source. This is the ONLY populated spec field there; every other field (player_size, cpu_time, patterns, speeds) is an empty string.",
    "layout": "2-entry JMP table at $48A0: 4C A6 48 / 4C AF 48 = JMP $48A6 (init) / JMP $48AF (play). $48A6 does JSR $48C5; JSR $4200; JMP $42B9 — so $4200 is the driver core's own init, wrapped by the $48A0 stub. CONFIRMED by full disassembly (see Verification): $48AF (play) does JSR $4209 (voice/effect tick); JSR $4203; INC zfb / BNE +2 / INC zfc; CMP #$0D; BNE +2 / JSR $48A6 — i.e. play re-runs the FULL init chain every 13th call (a 16-bit zfb/zfc tick counter, zeroed by $48C5). A driver control block sits around $4D00 (the documented tempo byte $4D22 lives there; demo_tune_2's play stub writes STA $4D30). Arpeggio/portamento table at $5D00 (4 bytes/entry, page-aligned) is read via a self-modified pointer at l4251 whose low byte is built by repeated `adc #<l5d04` (no high-byte carry) — this makes the table access PAGE-LOCKED: correct only when $5D00 stays page-aligned. See quirks."
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
    "Both surviving non-demo-tune works are CHRISTMAS MUSIC: X-Mas_Night, and Mindblast_tune_2 — whose STIL entry gives TITLE 'One Horse Open Sleigh' / ARTIST 'James Lord Pierpont', i.e. 'Jingle Bells', a cover.",
    "THE DRIVER'S ARPEGGIO/GLIDE TABLE LOOKUP ($5D00, routine at $4251) IS DELIBERATELY PAGE-LOCKED, CONFIRMED BY DISASSEMBLY: it computes a table pointer's low byte via a loop of `adc #<l5d04` (repeatedly adding the 4-byte entry stride) with NO carry propagation into the high byte, which is set once, unconditionally, to `>l5d00`. This only produces correct results if `low(l5d00) + 4*max_index` never crosses 256 — true in the shipped file because $5D00 is itself page-aligned. Confirmed empirically: a relocation-invariance trace control at a PAGE-ALIGNED base (delta +$2000) reproduces every register write with 0 divergences on all 4 HVSC files; a control at a NON-page-aligned base (delta +$1E11) diverges on 2 of 4 files (X-Mas_Night both subtunes, Mjoosic_Mejker_demo_tune_2) at the exact point their song data drives a large enough arpeggio-table index to wrap past the page boundary, while Mjoosic_Mejker_demo_tune_1 and Mindblast_tune_2 stay clean because their song data never reaches that index range within the traced window. This is a genuine property of the ORIGINAL 6502 code, not a defect introduced by disassembly/reassembly — see Verification for the full methodology (project lesson 87's pattern)."
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

The player code itself is now **reconstructed and verified**: all 4 tagged
HVSC files disassemble/reassemble byte-exact and reproduce the real files'
register-write streams exactly under a non-tautological relocation control —
see Verification below. The on-disk song-data format (order list, pattern and
instrument encoding) is a separate, still-open question.

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

Full disassembly performed this pass with `SIDdecompiler.exe` (`-r`, pristine
reload — see project lesson 63) on all 4 tagged HVSC files, reassembled with
`64tass`, byte-diffed, and trace-diffed against the real files:

- All four files load at `$4200` (embedded in the payload's own first 2 LE
  bytes — PSID header `load_address` field is 0 on all four, per project
  gotcha/lesson 75). `SIDdecompiler`'s own `-v2` memory map "Start:" address
  matches the PSID load address exactly on every file — no relocation-base
  correction needed (contrast with the many players in this project's own
  lessons where Start: and load address diverge).
- `demo_tune_2` and `X-Mas_Night` reassemble to **byte-identical machine code
  across `$4200-$4FFF`** (confirmed by diffing the two `.prg`s directly — first
  divergence at exactly `$5000`), confirming the card's driver/song-data split.
- The `$48A0` 2-entry JMP table, the `$48A6` init chain (`JSR $48C5; JSR $4200;
  JMP $42B9`), and — newly confirmed — the `$48AF` play chain (`JSR $4209; JSR
  $4203; INC zfb; BNE +2; INC zfc; CMP #$0D; BNE +2; JSR $48A6`, i.e. a
  16-bit `zfb`/`zfc` frame counter that re-triggers the init chain every
  13th play call) were read directly from the disassembled `.asm`.
- All 8 of DeepSID's claimed ZP bytes (`z35`-`z3a`, `zfb`, `zfc`) appear as
  real operands in the disassembly — upgraded from the prior pass's heuristic
  opcode scan to a genuine confirmation.
- `Mindblast_tune_2` (`$4200`/`$4209` entry, per the card's "hand-built
  wrapper" inference) disassembles/reassembles cleanly on its own, independent
  of the other three files' `$48A0` stub.
- Order-list format, pattern/instrument binary encoding, and the wave/pulse/
  filter table layouts remain `TODO` — this pass verified that the
  **reconstructed code reproduces the real player's register writes**, which
  is a different (and narrower) claim than having reverse-engineered the
  on-disk song-data format. The instrument parameter list is still the
  editor's UI labels, not a confirmed binary layout.

## Verification

`status: verified`, as of this pass. Byte-diff and trace-diff were both run
against real HVSC files; identity/group/timeline claims were already
independently confirmed from multiple sources in a prior pass (unchanged).

**Byte-diff** (`SIDdecompiler -r` + `64tass`, relocated to the file's own
native load address `$4200`), all 4 tagged HVSC files:

| File | Payload | Diffs | Match |
|---|---|---|---|
| Mjoosic_Mejker_demo_tune_1.sid (CPU ed.) | 6283 bytes | 0 | 100.0000% |
| Mjoosic_Mejker_demo_tune_2.sid (FLT ed.) | 7563 bytes | 0 | 100.0000% |
| X-Mas_Night.sid (FLT ed., 2 subtunes) | 7563 bytes | 0 | 100.0000% |
| Mindblast_tune_2.sid (FLT ed., hand wrapper) | 5269 bytes | 0 | 100.0000% |

A native-address byte-diff of 100% is tautological on its own (`-r` reproduces
pristine on-disk bytes by construction — project lesson 69/72), so it alone
would not justify `verified`. To get a genuine, non-tautological check, each
file was **also** reassembled at a different relocation base (`-a<decimal>`)
and traced with `sidm2-sid-trace.exe` against the real file's register-write
stream, comparing `(frame, register, old_value, new_value)` with the cycle
column stripped (page-crossing cycle drift is expected and not a defect —
project lesson 70).

**Relocation-invariance trace control, page-aligned base (`$4200`→`$6200`,
delta `+$2000`)** — all 4 files, 300 frames (600 for X-Mas_Night's 2
subtunes): **0 register-write divergences** against the real files.

| File | Writes compared | Divergences |
|---|---|---|
| demo_tune_1 | 1448 | 0 |
| demo_tune_2 | 2011 | 0 |
| X-Mas_Night subtune 0 | 2501 | 0 |
| X-Mas_Night subtune 1 | 2501 | 0 |
| Mindblast_tune_2 | 2233 | 0 |

The relocated build genuinely differs from the original at the byte level
(585 of 6283 bytes differ on demo_tune_1's relocated build, for example) —
this is not a byte-identical retrace; it is symbolic re-derivation from the
disassembled source, so a single mis-parsed instruction boundary anywhere
would have broken it. It didn't.

**A second control at a non-page-aligned base (`+$1E11`) diverges on 2 of the
4 files** (X-Mas_Night both subtunes: 88/525 writes differ from frame 33; and
demo_tune_2 at longer trace lengths: diverges from frame 161 at 300 frames) —
root-caused to the driver's own arpeggio-table lookup at `$4251`/`$5D00`
(see quirks), which is provably page-locked by design, not a reconstruction
defect: the page-aligned control on the exact same files is fully clean, and
demo_tune_1/Mindblast_tune_2 pass the unaligned control too (their song data
never drives the arpeggio index high enough to hit the wrap in the traced
window). This matches this project's own documented pattern (see
`sid-player-verify` agent lesson 87) for players whose original code contains
alignment-dependent self-modified pointer arithmetic.

**Not verified**: order-list format, pattern encoding, effect encoding and the
wave/pulse/filter table binary layouts are still `TODO` — reproducing the
player's register-write behavior does not require decoding its song-data
format, and that reverse-engineering was out of scope for this pass.

Also undetermined: any biography beyond name/nationality/groups (DeepSID's
profile thumbnail has `image_source: "LINKEDIN"`, implying Chordian found a
LinkedIn profile — **not located or verified here, and no claim is made from
it**); and whether a finished version ever existed.

## Sources

See the `sources` array above.

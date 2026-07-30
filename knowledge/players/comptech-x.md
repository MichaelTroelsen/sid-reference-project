# Comptech-X (Geir Tjelta)

```json
{
  "id": "comptech-x",
  "name": "Comptech-X (Geir Tjelta)",
  "aliases": ["Geir_Tjelta/Comptech-X"],
  "authors": ["Geir Tjelta"],
  "released": "Engine self-identifies as 'COMPTECH MUSIC PLAYER BY X-AMPLE'; embedded version history reads v2.0 (Markus Schneider) -> v2.2 (Schneider) -> v2.3 (Geir Tjelta) -> v2.4 (Schneider). Embedded per-tune YEAR fields across the 6 HVSC files span 2019-2025.",
  "status": "verified",
  "platform": "An X-Ample Architectures music player, NOT primarily a Geir Tjelta tool — corrected 2026-07-30 from a plain-text credit block embedded at load+$06 in 4 of the 6 tagged files: 'COMPTECH MUSIC PLAYER BY X-AMPLE ... VERSION 2.4 UPGRADE PLAYER AND EDITOR BY MARKUS SCHNEIDER / VERSION 2.3 UPGRADE PLAYER AND EDITOR BY GEIR TJELTA / VERSION 2.2 UPGRADE PLAYER BY MARKUS SCHNEIDER / VERSION 2.0 PLAYER BY MARKUS SCHNEIDER, ADDITIONAL CODE BY HELGE KOZIELEK, EDITOR BY JOACHIM MULTERMANN'. SIDId's 'Geir_Tjelta/Comptech-X' tag therefore misattributes authorship: Schneider is the original author, Tjelta contributed the v2.3 upgrade. Player-ID-fingerprinted across 6 files: 4 by Markus Schneider (X-Ample), 1 by Tjelta, 1 by Thomas Detert (X-Ample).",
  "csdb_release": null,

  "memory": { "load_address": "Load address is per-file, NOT fixed: $a000 (VandaliSID), $1000 (Move, Legacy, X-Rated_Red_Wine_GT_Remix, Spectrum), $8000 (Harmony). All 6 read directly from their PSID headers; payloads 5524-9046 bytes.", "zero_page": "Only $fb-$ff (5 bytes), all scratch: $fc/$fd is the working (zp),Y sequence-data pointer, $fb/$fe/$ff are temporaries in the filter and note-decode paths. Nothing else in ZP is touched.", "layout": "Uniform per-file layout: [load+$00] 3-byte JMP init, [load+$03] 3-byte JMP play, [load+$06] either a plain-ASCII credit/tune-info string (Move, Legacy, Harmony, Spectrum) or ~$80 bytes of zeroed per-voice working storage (VandaliSID, X-Rated) — the string's presence shifts the whole engine forward by its length. Engine is ~1.8-2.0 KB of real code in every file (1820/1873/1915/1920/1934/2049 bytes measured from 64tass listings); remainder is song data. Harmony additionally appends a 6-byte trampoline at EOF ($a350: JMP $8000 / JMP $8003) which is what its PSID header points at." },
  "entry": { "init": "JMP at the player block's base (load+$00). A = subtune number; init does ASL x3 / TAY and indexes an 8-bytes-per-subtune header table (at $aa44 in VandaliSID), then writes ~30 self-modified instruction operands across the engine. Harmony's PSID init ($a350) is an appended trampoline to load+$00.", "play": "JMP at load+$03. First real instruction is a self-modified gate byte (`lda #imm` at play_target+1); init seeds it with $80, meaning 'skip this frame, then resume' — a one-frame hard-restart gap. Called once per frame from the caller's IRQ." },
  "speed": "Single speed, 50 Hz. All 6 files have PSID speed dword = 0 and flags = 0x24; measured 213-459 register writes over 50 frames.",
  "data_format": { "order_list": "Per-track sequence: a lo/hi pointer table (interleaved lo,hi pairs indexed by X) is loaded into $fc/$fd, byte 0 of the sequence is its entry count, and entries are 2 bytes each (index*2+1 addressing). Bit 7 of an entry byte flags a command rather than a plain step.", "patterns": "Note/parameter bytes are nibble-split: hi nibble is stored into one self-modified operand and lo nibble (masked #$0f, compared against #$08) selects a voice/parameter slot. Full encoding not exhaustively decoded.", "instruments": "ADSR is written per voice from self-modified immediate pairs (`lda #imm / ora #imm / sta $d405,$d40c,$d413` then the same for $d406,$d40d,$d414) — i.e. attack/decay and sustain/release are each an OR of two runtime-patched nibble fields.", "wavetable": "Not separately decoded.", "pulsetable": "Not separately decoded.", "filtertable": "Filter is a FIRST-CLASS SEQUENCED TRACK with its own pointer table, step index, and 6-bit repeat counter (`and #$3f`), separate from the three voices — this is what makes the player so filter-heavy (51-75 of 213-459 writes per 50-frame sample). Cutoff is maintained as an 8.3 fixed-point value slid up or down each step (bit 6 of the command byte selects direction, via `bit $fe` / `bvc`), written as `stx $d415` (3-bit low) + `sta $d416` (8-bit high); resonance/routing ($d417) and mode/volume ($d418) are likewise `lda #imm / ora #imm` self-modified pairs." },
  "effects": { "encoding": "Almost all engine state lives in self-modified instruction operands rather than RAM variables — init patches ~30 of them and the play routine patches more each frame (`sta la0d1+1`, `inc la0d1+1`, `sta la156+1`, `stx la14f+1`, ...). The engine writes all 25 SID registers with UNROLLED ABSOLUTE stores (sta/stx/sty $d400-$d418, 26 distinct instruction sites in VandaliSID) rather than an indexed voice loop.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "AUTHORSHIP CORRECTED FROM THE BINARY (2026-07-30) — the engine carries a plain-ASCII credit block at load+$06 in 4 of the 6 tagged files (Move, Legacy, Harmony, Spectrum) reading 'COMPTECH MUSIC PLAYER BY X-AMPLE'. Move and Harmony carry the long form with a full version history: v2.4 upgrade player+editor by Markus Schneider, v2.3 upgrade player+editor by Geir Tjelta, v2.2 upgrade player by Markus Schneider, v2.0 player by Markus Schneider with additional code by Helge Kozielek and editor by Joachim Multermann. Legacy and Spectrum carry the short form 'PLAYER BY MS, HK & GT. ED BY JM'. SIDId's 'Geir_Tjelta/Comptech-X' tag therefore MISATTRIBUTES the tool: Schneider is the original author, Tjelta contributed one intermediate upgrade. VandaliSID and X-Rated_Red_Wine_GT_Remix are the two builds WITHOUT the string (that region is zeroed working storage instead).",
    "TWO NEW NAMES this project had no record of, both from the same credit block: HELGE KOZIELEK ('additional code', v2.0) and JOACHIM MULTERMANN (editor). Neither appears anywhere else in this knowledge base or in the SIDId comment.",
    "THE 'NAMING TRAP' QUIRK PREVIOUSLY ON THIS CARD IS NOW LIKELY BACKWARDS. It asserted 'no evidence links the two beyond superficial name similarity' against CSDb's documented X-Ample tool 'Compotech' (C64 Tool July 1992, 'Compotech V2.1' August 1995). The embedded string self-describes as an X-AMPLE player at VERSION 2.0/2.2/2.3/2.4 — a numbering that continues directly from CSDb's Compotech V2.1, same group. Treat these as very probably the same tool line, with the caveats that the in-binary spelling is COMPTECH (no second 'O') and that CSDb was NOT re-queried in this verification run — the link is strongly supported by the binary, not independently reconfirmed against CSDb.",
    "THE 'FOR X-AMPLE MEMBERS' PUZZLE IS RESOLVED: the tool IS an X-Ample Architectures tool, written by X-Ample member Markus Schneider, which is exactly why its users are X-Ample members. Tjelta's lack of X-Ample affiliation is no longer a contradiction — he was an outside contributor to one version, not the author. The card's earlier framing (an outside coder writing a private tool for a group he wasn't in) was an artefact of trusting SIDId's tag as an authorship claim.",
    "NOT RELATED TO TJELTA'S OWN PLAYERS AT CODE LEVEL — disproven this run, not assumed. Comptech-X writes all 25 SID registers with UNROLLED ABSOLUTE stores (26 distinct sta/stx/sty $d4xx sites in VandaliSID); Geir_Tjelta/SIDSys_1.0 (ADF.sid) and Geir_Tjelta/SIDDuzz'It (Artillery.sid) both use INDEXED voice loops (sta $d4xx,X / sta $d4xx,Y) and contain none of the five Comptech-X engine signatures. Same-author lineage only.",
    "SELF-MODIFYING CODE THROUGHOUT — nearly all engine state is held in instruction operands, not RAM variables (init alone patches ~30 of them). Consequence for reconstruction: SIDdecompiler MUST be run with -r, otherwise it snapshots drifted post-execution operand values. With -r no byte patching was needed on any of the 6 files.",
    "ONE ASSEMBLY FIX IS REQUIRED IN 5 OF 6 FILES: SIDdecompiler emits `bit za9` for the classic 3-byte skip-2 trick (`2c a9 00` = BIT $00a9, branched over as `a9 00` = LDA #$00). 64tass rejects the undefined symbol; per lessons-learned 36 the fix is an explicit `.byte $2c, $a9, $00` on the same label, NOT defining za9 = $a9 (which 64tass would re-encode as 2-byte zero-page BIT and shift everything after it). Move.sid is the one file without this construct.",
    "MARKUS SCHNEIDER (dominant user, 4/6 files) — German, active since 1987, handles Diflex/Synth-Man, joined X-Ample Architectures March 1989 (ongoing), also founded Lords of Sonics (1988) and was in Elite. Confirmed both CODER and musician.",
    "THOMAS DETERT (1 file) — German, joined X-Ample Architectures July 1988 (still listed active), earlier handles B.U.C.K./Stephen Taylor, musician role, brother of Michael Detert (now 'Michael Satzer', also an X-Ample founder).",
    "X-AMPLE ARCHITECTURES itself: German demo/game group, founded July 1988 by Stephen Taylor, Takashi, General X, and Chap Bizarre; 92 releases 1988-2017.",
    "GT'S BROADER GROUP HISTORY, per CSDb: Moz(IC)art (Nov 1989-Oct 1992), Offence (Jan 1990-Oct 1991, rejoined Jun 2018-Mar 2019), Paradize (Nov 1991-Nov 1992), SHAPE (2009-2010, and Dec 2010-present), Maniacs of Noise (since Jul 2009). Demozoo separately lists additional groups (Oxyron, Legion, Megastyle, Panoramic Designs, Scoop, The Suppliers) not shown on CSDb — a source discrepancy noted but not resolved. No source found explaining why he returned to C64 music-tool authorship in 2019, roughly 27 years after SID Duzz'It (1992) — a genuinely large gap left unexplained.",
    "EDGE `shares_routine_with: [\"sidsys\", \"sidduzzit\"]` REMOVED (2026-07-30) — it was a same-author placeholder, and the same-author premise itself is now wrong (Schneider, not Tjelta, wrote this engine). The code relationship is separately disproven above."
  ],
  "sources": [
    "This project's SIDId import (sole source for the tool's existence, name, author, approximate date, and 'private/X-Ample' description)",
    "CSDb search — confirms ZERO results for 'Comptech-X': https://csdb.dk/search/?search=Comptech-X&type=all",
    "CSDb search — 'Compotech' (the real, unrelated, similarly-named X-Ample tool — naming trap): https://csdb.dk/search/?search=Compotech&type=all",
    "CSDb scener — Geir Tjelta (id=1266, group history, NO X-Ample affiliation): https://csdb.dk/scener/?id=1266",
    "Demozoo — Geir Tjelta (additional group listings, discrepancy with CSDb): https://demozoo.org/sceners/949/",
    "CSDb scener — Markus Schneider (id=6003, X-Ample Architectures since 1989): https://csdb.dk/scener/?id=6003",
    "CSDb scener — Thomas Detert (id=1312, X-Ample Architectures since 1988): https://csdb.dk/scener/?id=1312",
    "CSDb group — X-Ample Architectures (id=245, founding, 92 releases): https://csdb.dk/group/?id=245",
    "Existing KB cards: knowledge/players/sidsys.md, knowledge/players/sidduzzit.md (Tjelta's two earlier tools — code relationship to this player disproven 2026-07-30)",
    "Local dataset: 6 files tagged Geir_Tjelta/Comptech-X, 3 composers (see knowledge/COVERAGE.md)",
    "PRIMARY, 2026-07-30: the engine's own embedded credit block at load+$06 in MUSICIANS/S/Schneider_Markus/{Move,Legacy,Harmony}.sid and MUSICIANS/D/Detert_Thomas/Spectrum.sid — outranks the SIDId comment on authorship",
    "PRIMARY, 2026-07-30: original disassembly of all 6 tagged HVSC files (SIDdecompiler 0.8 -r + 64tass 1.60), 100.0000% byte-exact, register-write-exact"
  ]
}
```

## Overview

The `Geir_Tjelta/Comptech-X` tag identifies the **Comptech music player by
X-Ample Architectures** — not, as the tag and this card previously said, a
third Geir Tjelta tool. The engine names itself in plain ASCII inside four
of the six tagged files: original player by **Markus Schneider** (v2.0,
additional code by **Helge Kozielek**, editor by **Joachim Multermann**),
with **Geir Tjelta** credited only for the v2.3 upgrade and Schneider again
for v2.2 and v2.4. That single string resolves the "puzzling X-Ample
audience" question the card had left open (its users are X-Ample members
because it is an X-Ample tool) and makes the previously-flagged "Compotech
naming trap" look backwards — the version numbering continues straight on
from CSDb's `Compotech V2.1` (X-Ample, 1995).

## Quirks & gotchas

See the `quirks` array. The load-bearing ones: the **embedded credit block**
(authorship, version history, two names new to this project); the engine's
pervasive **self-modifying code**, which makes SIDdecompiler's `-r` flag
mandatory; the **`bit za9` skip-2 construct** that needs a `.byte` fix in 5
of 6 files; and the **disproven code link** to [[sidsys]]/[[sidduzzit]].

## Disassembly notes

Full original disassembly produced this run (see Verification). Structure:
6-byte `JMP init` / `JMP play` header, then either the credit string or
~$80 bytes of zeroed working storage, then ~1.9 KB of engine, then song
data. Only ZP `$fb-$ff` is used. All 25 SID registers are written by
unrolled absolute stores. Notably the **filter is a fully independent
sequenced track** with its own pointer table, step index, 6-bit repeat
counter and 8.3 fixed-point bidirectional cutoff slide — separate from the
three voices, which is why these tunes are so filter-dense.

## Verification

**Full reconstruction, `status: verified` (2026-07-30).** All **6** tagged
HVSC files disassembled with `SIDdecompiler 0.8 -a<decimal of the -v2 map's
own Start:> -z -d -c -r` and reassembled with `64tass 1.60 -a --cbm-prg`.
The `-v2` Start address equals the PSID load address in every file, so no
gotcha-40 relocation correction was needed. One manual fix per file (5 of
6): `bit za9` -> `.byte $2c, $a9, $00`. **No byte patching was required at
all** — `-r` alone produced pristine values for every self-modified operand.

| file | composer | load / init / play | payload | byte-diff |
|---|---|---|---|---|
| VandaliSID.sid | Schneider | `$a000` / `$a000` / `$a003` | 6118 | **100.0000%** (0/6118) |
| Move.sid | Schneider | `$1000` / `$1000` / `$1003` | 6782 | **100.0000%** over 6781 of 6782 |
| Legacy.sid | Schneider | `$1000` / `$1000` / `$1003` | 5524 | **100.0000%** (0/5524) |
| Harmony.sid | Schneider | `$8000` / `$a350` / `$a353` | 9046 | **100.0000%** (0/9046) |
| X-Rated_Red_Wine_GT_Remix.sid | Tjelta | `$1000` / `$1000` / `$1003` | 5642 | **100.0000%** (0/5642) |
| Spectrum.sid | Detert | `$1000` / `$1000` / `$1003` | 6477 | **100.0000%** (0/6477) |

Move's `-v2` End is `$2a7c`, one byte below its payload end, so the final
untouched data byte (`$2a7d` = `$14`) is not emitted; the 6781 bytes that
are emitted match exactly. That is the only byte in the whole family not
reproduced.

**Non-tautological trace evidence (the byte-exact builds alone prove
nothing).** For each file a second, structurally different build was
produced from the same disassembly at a different base and traced against
the original with `sidm2-sid-trace.exe`, 50 frames, comparing
`frame,cycle,register,old,new`:

| file | reloc base | bytes differing from native build | writes | diffs (incl. cycle) |
|---|---|---|---|---|
| VandaliSID | `$4000` | 360 / 6118 | 336 / 336 | **0** |
| VandaliSID | `$4380` | 720 / 6118 | 336 / 336 | 0 excl. cycle (329 cycle-only, page-crossing) |
| Move | `$4000` | 371 / 6781 | 269 / 269 | **0** |
| Legacy | `$4000` | 377 / 5524 | 213 / 213 | **0** |
| Harmony | `$4000` (init `$6350`) | 371 / 9046 | 375 / 375 | **0** |
| X-Rated | `$4000` | 410 / 5642 | 412 / 412 | **0** |
| Spectrum | `$4000` | 413 / 6477 | 459 / 459 | **0** |

The page-aligned `$4000` rebuilds are cycle-exact; the deliberately
non-page-aligned `$4380` VandaliSID rebuild (chosen to exercise low-byte
operand relocation, per lessons-learned 69/72) reproduces every register
write and diverges only on cycle timestamps, which is the expected
page-crossing effect and is confirmed as such by the cycle-exact
page-aligned control on the same file.

VandaliSID's **336 writes / 50 frames** reproduces the figure recorded on
this card on 2026-07-14 exactly. Filter-register writes per 50 frames:
VandaliSID 65, Harmony 66, Spectrum 75, Move 55, X-Rated 51, Legacy 2.

**Family relationship, tested rather than assumed** (lessons-learned 68
method — short opcode patterns with no address operands, requiring matching
relative offsets, since longest-common-substring fails on per-title
rebuilds). Five signatures — the 3-voice ADSR block `a9 .. 09 .. 8d 05 d4
a9 .. 09 .. 8d 0c d4 a9 .. 09 .. 8d 13 d4`, `0a 69 01 a8 b1 fc`, `c8 b1 fc
2c a9 .. 9d`, `0a d0 03 8d`, and `85 fc bd .. .. 85 fd a0 00` — hit in all
6 files at identical relative offsets (`-$40`, `-$4e`, `-$0f` from the
`0a 69 01 a8 b1 fc` anchor), confirming one shared engine. The fifth offset
(`bit`-trick) varies by 13 bytes (`+$7ba` to `+$7c7`), consistent with the
minor per-version code differences the embedded version history describes.
The same five patterns score **zero hits** in `ADF.sid` (SIDSys 1.0),
`Famestyle.sid` (SIDSys 18.6), `Artillery.sid` (SID Duzz'It),
`Pal_sine_hoener_tune_2.sid` (MacroPlay2) and `Echoes.sid` (Echo); a raw
opcode scan for `{8d,9d,99,8e,8c} .. d4` shows SIDSys and Duzz'It use
indexed voice loops where Comptech uses unrolled absolute stores. The
`shares_routine_with` edge was therefore removed rather than left as a
same-author placeholder.

## Sources

See the `sources` array — now led by two primary sources produced this run:
the engine's own embedded credit block, and the byte-exact disassembly of
all 6 tagged files. The older CSDb/Demozoo/SIDId entries remain, but SIDId's
authorship attribution is superseded by the binary.

# Neil Crossley (player routine)

```json
{
  "id": "neil-crossley",
  "name": "Neil Crossley (player routine)",
  "aliases": ["Neil_Crossley"],
  "authors": ["Neil Crossley"],
  "released": "1990-1992 (Images Software conversion era)",
  "status": "verified",
  "platform": "English composer Neil Crossley's own playroutine — likely in-house at Images Software/Images Design, a UK studio specializing in Epyx/US Gold/Ocean/Grandslam C64 conversions, based on recurring shared personnel across nearly all his known credits. Credited as a PROGRAMMER (not just musician) on at least one title. Player-ID-fingerprinted across 7 files, all his own, matching his 7 known game credits exactly.",
  "csdb_release": null,

  "memory": { "load_address": "Per-title, no fixed base — every rip is a different absolute build. Confirmed from PSID headers of all 7 HVSC files: Amazing Spider-Man load $5d4d, Chips Challenge $1000, G-Loc R360 $a248, Hunt for Red October $0e00, Last Battle $1000, Shadow Dancer $2000, Space Gun $55f8.", "zero_page": "Small and per-title, NOT a fixed allocation: Amazing Spider-Man uses only $66-$69 and $6e-$6f (6 bytes); Chips Challenge uses $f0-$fe plus a JMP vector at $0003 installed by init; G-Loc R360 uses $f0-$fa. Confirmed from the reassembled disassemblies' own ZP label sets.", "layout": "Amazing Spider-Man (disassembled + reassembled 100% byte-exact this run), from SIDdecompiler's -v2 memory-access map: $5d4d-$5e40 init; $5e41 play entry; contiguous player code $5d4d-$649e (executed/operand-marked, with small never-reached islands at $5e47-$5e57, $5e84-$5e92, $5ff9-$5ffb, $6037-$60b8, $6386-$6393); driver working storage $6506-$65bf (read+write); read-only song/table data $65c0-$717f. Final payload byte $7180 is never accessed. Chips Challenge is structurally different: init BLOCK-COPIES the driver out of the payload into under-KERNAL RAM (map End: $fbdf, driver body ~$e200-$fbdf) and the PSID play address is only a bank-switch stub." },
  "entry": { "init": "No fixed convention. Amazing Spider-Man init == load ($5d4d); G-Loc R360 init $b1e0 sits at the END of the file with play $a3a9 near the front; Chips Challenge init $1e58 / play $1eb3; Last Battle $58b6/$58b9; Shadow Dancer $b900/$b903; Space Gun $8aa0/$8b00; Hunt for Red October $1c30/$1c40.", "play": "5 of 7 files expose a THIN BANK-SWITCH WRAPPER as their PSID play address, not the driver itself: Chips Challenge `lda #$35 / sta $01 / jsr $0003 / jmp $1eae`, Last Battle and Shadow Dancer `... sta $01 / jsr $fce2`, Space Gun `jsr $f5a7`, Hunt for Red October `jsr $f803` — i.e. ROM is banked out and the real per-frame routine is called at an address patched in (or copied to) at init. Only Amazing Spider-Man ($5e41) and G-Loc R360 ($a3a9) expose the driver's own play routine directly." },
  "speed": "PSID speed field is 0 (VBI/50 Hz) on 6 of 7 files; G-Loc R360 alone declares speed 1 (CIA timer) for subtune 0. All 7 are PSID v2. Shadow Dancer and Space Gun set flags $0004.",
  "data_format": { "order_list": "TODO (not decoded — the reconstruction is byte- and trace-exact but the sequence/pattern encoding was not reverse-engineered this run)", "patterns": "TODO (not decoded)", "instruments": "TODO (not decoded)", "wavetable": "TODO (not decoded)", "pulsetable": "TODO (not decoded)", "filtertable": "Not used by the traced tunes: the Amazing Spider-Man disassembly writes only $d400-$d406 with literal operands plus $d418, and reaches voices 2/3 via `sta $d400,X`; no $d415/$d416/$d417 write appears anywhere in the reassembled listing.", "note_table": "SHARED ACROSS TITLES and the strongest cross-file fingerprint found: a 208-byte block is byte-for-byte identical in 5 of the 7 files — Amazing Spider-Man $65a9, Chips Challenge $16b6, Last Battle $1716, Shadow Dancer $26ac, Hunt for Red October $14b1 — 15 leading $00s then a monotonically rising frequency low-byte table ($0c $1c $2d $3e $51 $66 $7b $91 $a9 $c3 $dd $fa $18 ...), whose tail the -v2 map marks read-only. G-Loc R360 and Space Gun (both 1992) instead share a DIFFERENT 285-byte table with each other (G-Loc $aa27 / Space Gun $88f6, starting $17 $27 $39 $4c $5f $74 $8a $a2 ...) and share only 122 bytes with the 1990-91 group." },
  "effects": { "encoding": "TODO (not decoded)", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NOT ONE DRIVER REUSED VERBATIM — measured, not assumed. A pairwise longest-common-byte-substring scan over all 7 HVSC payloads (2026-07-30) splits the tag into two generations by shared note-table: the 1990-91 group (Amazing Spider-Man, Chips Challenge, Last Battle, Shadow Dancer, Hunt for Red October) shares one 208-byte frequency table byte-for-byte, while the 1992 group (G-Loc R360, Space Gun) shares a different 285-byte table with each other and only ~122 bytes with the older group. The CODE itself never shares a long byte run between any two files because every rip is a different absolute build (different load address, different entry-point layout, different zero-page allocation: $66-$69/$6e-$6f on Spider-Man vs $f0-$fe on Chips Challenge vs $f0-$fa on G-Loc). So the 'one driver modulo relocation' pattern that held for oliver-kirwa and dave-spicer does NOT hold here — this is a hand-maintained routine re-assembled per title, and each file needs its own disassembly.",
    "FIVE OF SEVEN FILES HIDE THE DRIVER BEHIND A BANK-SWITCH STUB, and one of them (Chips Challenge, confirmed by disassembly) block-copies the driver into under-KERNAL RAM at init: its SIDdecompiler -v2 map reports End: $fbdf even though the payload is only $1000-$389f, and its PSID play address is just `lda #$35 / sta $01 / jsr $0003 / jmp $1eae` — the real per-frame routine is reached through a JMP vector at zero page $0003 that init installs. Last Battle and Shadow Dancer JSR $fce2, Space Gun JSR $f5a7, Hunt for Red October JSR $f803, all under a banked-out KERNAL. Practical consequence: byte-diff and trace only the file's own payload window, never the full 60KB SIDdecompiler emits (see docs/lessons: this is the same shape as Metal_Warrior_3's runtime copy).",
    "G-LOC R360 TRIPS THE 'v2 Start BELOW the PSID load address' TRAP: SIDdecompiler reports Start: $0c05 against a load address of $a248. Investigated rather than assumed — only 2 bytes ($0c05-$0c06) are marked, both read-only with no write and no page-copy loop anywhere in the file, so this is an external-workspace read (a leftover game variable), not a copy destination. Relocating to the header's load address wraps the payload and byte-diffs at 9.1%; relocating to `-a3077` (decimal for Start: $0c05, i.e. zero net shift) gives 100.0000%.",
    "SIDdecompiler EMITS DUPLICATE LABEL NAMES on Chips Challenge's copy-destination region ($e200-$e800), 10 of them (le235, le23c, le26f, le276, le383, le433, le482, le650, le664, le717), each printed twice on consecutive addresses. Deduping by keeping the FIRST definition silently makes every downstream `<label`/`>label` pointer-table byte resolve exactly 1 too low (10 diffs, all orig-1). Keeping the LAST definition is correct and takes the file to 100.0000% byte-exact. Also needs `z03 = $03` injected by hand (SIDdecompiler references `z03` for the `jsr $0003` vector without defining it).",
    "GAME LIST FULLY CONFIRMED, exactly matching the tag's own 7-file count (a strong cross-check with this project's own data): Chip's Challenge (Epyx/US Gold, 1990 — a GENUINE C64 port of the well-known Lynx/Windows puzzle game exists, confirmed via Lemon64), The Amazing Spider-Man (Empire Software EU/Paragon US, 1990, the traced file), Shadow Dancer (US Gold, 1991, a Sega conversion), Last Battle (Elite, 1991), G-Loc R360 (US Gold, 1992), Space Gun (Ocean, 1992), and The Hunt for Red October (shoot-em-up version, Grandslam, 1990 — on THIS title he is credited as a PROGRAMMER, alongside Greg Modern, with music co-credited to Allister Brimble, already carded in this KB as [[michael-delaney]]'s dominant user).",
    "STRONG, THOUGH NOT INDEPENDENTLY SOURCED, IN-HOUSE STUDIO PATTERN: across 5+ of his 7 games, the same personnel recur — graphics by Steve Bedser/Chris Edwards/Andrew Pang, coding by Tom Pinnock/Jon Williams/James Smart, and 'Images Software'/'Images Design' as the recurring conversion house for Epyx/US Gold/Ocean/Grandslam ports. This strongly suggests Crossley was Images Software's in-house musician, though this specific employer relationship was inferred from repeated personnel co-occurrence across Lemon64 credit pages, not independently confirmed via a company history source.",
    "HVSC/EMPLOYER-NAME DISCREPANCY, deliberately flagged rather than reconciled: HVSC Musicians.txt lists his group as 'JVM Design', which differs from 'Images Software'/'Images Design' seen on his actual game credits — left as an unresolved naming discrepancy, not guessed at.",
    "AT LEAST PARTLY A CODER, confirmed via the Hunt for Red October programmer credit — not purely a musician, similar to several other composers in this KB who also coded.",
    "NAME-COLLISION RISK FLAGGED AND RESOLVED: a contemporary, unrelated UK music journalist/musician also named 'Neil Crossley' (neilcrossley.com, MusicRadar contributor, Royal Welsh College of Music & Drama staff) surfaced repeatedly in general web search — explicitly confirmed as a DIFFERENT person with no C64/games connection; not conflated with this card's subject.",
    "MobyGames and CSDb were both inaccessible during research (403 Forbidden / inconsistent search results) — could not confirm or rule out profiles on either platform; treated as genuinely unverified rather than assumed absent.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB beyond the Allister Brimble/Michael Delaney co-credit note above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Crossley, Neil / JVM Design - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Chip's Challenge (1990, confirms a genuine C64 port exists): https://www.lemon64.com/game/chips-challenge",
    "Lemon64 — The Amazing Spider-Man (1990): https://www.lemon64.com/game/amazing-spider-man",
    "Lemon64 — Shadow Dancer (1991): https://www.lemon64.com/game/shadow-dancer",
    "Lemon64 — Last Battle (1991): https://www.lemon64.com/game/last-battle",
    "Lemon64 — G-Loc R360 (1992): https://www.lemon64.com/games/details.php?ID=1060",
    "Lemon64 — Space Gun (1992): https://www.lemon64.com/games/details.php?ID=2386",
    "Lemon64 — The Hunt for Red October, shoot-em-up version (1990, Crossley credited as programmer): https://www.lemon64.com/game/hunt-for-red-october-shoot-em-up",
    "Local dataset: 7 files tagged Neil_Crossley, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Neil_Crossley` tag is English composer Neil Crossley's own
playroutine, used across a confirmed run of Epyx/US Gold/Ocean/Grandslam
C64 conversions — including a genuine, real port of the well-known puzzle
game Chip's Challenge. Player-ID-fingerprinted across 7 files, exactly
matching his 7 known game credits, at least one of which also credits him
as a programmer.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **all 7 game credits
independently confirmed**, matching the tag's file count exactly; a
**strong in-house-studio pattern** (Images Software) inferred from
repeated shared personnel, though not independently sourced; and a
**resolved name-collision risk** against an unrelated contemporary music
journalist of the same name.

## Disassembly notes

No published source (not in the realdmx RE repo, no STIL note). Three
files were disassembled from scratch this run with `SIDdecompiler` and
reassembled with `64tass` — see Verification for the exact recipes.

Structural summary from the Amazing Spider-Man reconstruction: ~1,541
bytes of genuinely disassembled instructions, ~2,901 bytes of
read-referenced song/table data, and 729 bytes of never-executed
pass-through code (effect handlers this tune's data never triggers, so
they are byte-exact but not trace-covered). The player writes only
`$d400-$d406` with literal operands plus `$d418`, reaching voices 2 and 3
through `sta $d400,X`; there are no SID-mirror writes, so the standard
`sidm2-sid-trace.exe` path works without the VICE re-wrap.

## Verification

**Reconstructed and register-write-verified on 3 of 7 HVSC files
(2026-07-30) — `status: verified`.** All three reach **100.0000%
byte-exact** reassembly and **0 register-write divergences**.

| File | PSID load / init / play / subtunes | Recipe | Byte-diff | Trace-diff |
|---|---|---|---|---|
| `Amazing_Spider-Man.sid` | `$5d4d` / `$5d4d` / `$5e41` / 1 | `-a23885 -z -d -c -r` | **100.0000%** (5171/5171; payload byte `$7180` never accessed, not emitted) | **0 diffs**, 219 writes / 100 frames |
| `Chips_Challenge.sid` | `$1000` / `$1e58` / `$1eb3` / 4 | `-a4096 -z -d -c -r` + 2 source fixes (below) | **100.0000%** (10400/10400) | **0 diffs on all 4 subtunes**, 282/291/363/264 writes per 100 frames (1,200 total) |
| `G-Loc_R360.sid` | `$a248` / `$b1e0` / `$a3a9` / 1 | `-a3077` (= `-v2` Start `$0c05`, **not** the load address) `-z -d -c -r` | **100.0000%** (3999/3999) | **0 diffs**, 266 writes / 100 frames |

`SIDdecompiler.exe <file> -o<out.asm> -a<decimal> -z -d -c -r -v2`, then
`64tass.exe -a --cbm-prg -o out.prg out.asm`. The `-r` (reload) flag was
used throughout and no self-modified-byte patching was needed on any of
the three — a clean confirmation of the `-r` finding.

**Non-tautological corroboration (the byte-identical traces above prove
nothing on their own).** Two independent checks:

1. **Relocation-invariance, Amazing Spider-Man.** Re-emitted the same
   disassembly at `-a16384` (`$4000-$5432`, byte-different machine code)
   and traced it at `init $4000 / play $40f4`. All **219/219** writes
   reproduce the original's `(frame, register, old_value, new_value)`
   tuples exactly; only cycle counts drift (−3 to +62, consistent with
   changed page-crossing penalties on indexed addressing). This is real
   evidence the reconstruction is symbolic source, not a byte dump.
2. **A source-level change flipped behaviour, Chips Challenge.** The
   first build (keeping the first of each duplicate label) traced
   **88 writes vs the original's 282** on subtunes 0-2 while matching on
   subtune 3, with 10 single-byte diffs each exactly `orig − 1`.
   Correcting the label choice in the `.asm` — not patching the binary —
   closed both the byte-diff and all four subtune traces.

**Honest scope / known gaps.**

- **4 of 7 files not reconstructed**: `Last_Battle.sid`,
  `Shadow_Dancer.sid`, `Space_Gun.sid`, `Hunt_for_Red_October.sid`. All
  four use the bank-switch-stub + under-KERNAL-JSR entry shape and are
  larger (18-40 KB); they are expected to need the same
  payload-window-only diff/trace treatment as Chips Challenge, plus
  possibly a `-P` override for the real dispatcher.
- **Data format is still `TODO`.** The reconstruction is exact but the
  order-list / pattern / instrument encoding was not decoded; only the
  note-frequency table was identified (and used as the cross-file
  fingerprint).
- **729 bytes of Spider-Man's payload (~14%) are never-executed
  pass-through** — byte-exact, but no trace covers them.
- **G-Loc R360 fails the relocation-invariance check** (diverges from
  frame 31, voice-1 frequency only, when rebuilt at `+$1000`) because
  SIDdecompiler does not translate the traced runtime sequence-pointer
  values on relocation. This is a known tool limitation, not a defect of
  the native-address build, which is byte- and trace-exact.
- Prior pass's figure of "117 register writes / 50 frames" is consistent
  with the 219/100 frames measured here.

## Sources

See the `sources` array — HVSC Musicians.txt and Lemon64 (7 game pages).

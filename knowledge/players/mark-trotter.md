# Mark Trotter

```json
{
  "id": "mark-trotter",
  "name": "Mark Trotter",
  "aliases": ["Mark_Trotter"],
  "authors": ["Mark Trotter (INFERRED — he coded the games; no source states he wrote the driver)"],
  "released": "1983-1984",
  "status": "verified",
  "platform": "Native C64. A primitive hand-coded 1983-84 game routine — not an editor product.",
  "csdb_release": null,

  "memory": {
    "load_address": "Monster_Munch $4000-$4727 (untagged, see quirks); Connect_4 $1C00-$2FFF; Sams_Jam $4000-$64FF (relocates to $AF00-$B2FF).",
    "zero_page": "RESOLVED by full disassembly (SIDdecompiler, this verification pass). Connect_4: $CB (zcb), $FB/$FC (zfb/zfc, a note-sequence indirect pointer). Sam's Jam: $71/$72 (z71/z72, same role — the per-voice note-sequence indirect pointer used inside the relocated play routine) PLUS the previously-documented $03C6/$03C7 low-RAM flag pair (page 3, not zero page, outside the file's own load range).",
    "layout": "Connect_4 and Sams_Jam share a byte-identical 194-byte equal-tempered note table at $2E41 / $63A2 — 97 entries = a $0000 rest sentinel + exactly 96 notes / 8.00 octaves; mean successive ratio 1.05947 (equal temperament = 1.05946); entry1=268 -> 15.74 Hz (~C0); entry13 exactly 2.0000x. THAT is the shared-driver fingerprint justifying the tag over exactly those two."
  },
  "entry": {
    "init": "Monster_Munch $4714; Connect_4 $2CD4; Sams_Jam $6496 (a rip BANKING WRAPPER — real init $6474, see quirks).",
    "play": "Monster_Munch $4725 (a SELF-MODIFYING vector, see quirks); Connect_4 $2D48; Sams_Jam $AF03 (outside the load range — resolved, see quirks)."
  },
  "speed": "Monster_Munch VBI (speed $00000000); Connect_4 VBI; Sams_Jam $0000000F = all 4 subtunes CIA-timed.",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "BRITISH, NOT AMERICAN — resolved on two independent sources plus publisher context. HVSC Musicians.txt: 'Trotter, Mark - UNITED KINGDOM'. DeepSID: country England, active 1984, affiliation Atlantis Software, focus1 PRO, csdb_id 0. Both publishers are UK: Atlantis Software (London, founded Jan 1984, budget cassette house) and Abrasco Ltd. NOT a scener — csdb_id 0 and no CSDb entry, consistent with focus1 PRO.",
    "HE CODED THE GAMES HIMSELF, so this is genuinely NOT the 'composer-named tag that's really a reused tool' pattern that dominates this KB. Lemon64: Monster Munch (Atlantis, dev 1983/pub 1984) = creator + musician; Connect Four (Atlantis, 1984) = creator + musician; Sam's Jam (Abrasco, 1984) = coder + graphics + musician (SOLE developer). Wikipedia: 'Monster Munch is a clone of Pac-Man programmed by Mark Trotter for the Commodore 64.' CAVEAT: no source explicitly says he wrote his own MUSIC DRIVER — that is inferred from him coding the games plus the absence of any editor signature.",
    "THE TAG COVERS 2 OF HIS 3 FILES, AND THE EXCLUSION IS CORRECT — verified at byte level rather than assumed. Monster_Munch.sid has an EMPTY player tag, and the reason is real: Connect 4 and Sam's Jam share a byte-identical 194-byte note table, while MONSTER MUNCH SHARES ONLY 10 BYTES with either — a different, earlier codebase. All three do share the 10-byte idiom 8D 05 D4 8D 0C D4 8D 13 D4 A9 (STA $D405/$D40C/$D413 — same attack/decay to all three voices), a same-hand signature, but that is weak alone.",
    "REGISTER PROFILE IS IDENTICAL ACROSS ALL THREE and shows how primitive this is: SAWTOOTH ONLY ($20 <-> $21 gate toggle), freq_hi/lo only. NO filter, NO pulse-width, NO ADSR modulation during play, volume pinned $0F. All three are PSID v2, PAL/MOS6581, 3 voices.",
    "MONSTER MUNCH'S PLAY IS A SELF-MODIFYING VECTOR: $4725 decodes to JMP $0000. Init dispatches on A ($464E for 0 / $44F3 for 1 / $453C for 2) and each branch PATCHES THE OPERAND — STA $4726 at $44F6/$454C/$4651, STA $4727 at $44FB/$4551/$4656. Traced OK (16 writes / 100 frames). Compare [[laxity-newplayer]], the only other card here documenting self-modifying code — precedent and contrast.",
    "SAM'S JAM'S play=$AF03 IS OUTSIDE ITS LOAD RANGE — resolved, not a bug. Init $6496 is a RIP BANKING WRAPPER (LDX #$36 / STX $01 / JSR $6474 / LDX #$37 / STX $01 / RTS). The real init $6474 relocates 4 pages $6100-$64FF -> $AF00-$B2FF (RAM under BASIC ROM), then JMP $AF00. Relocated: $AF00 = JMP $AF37 (init), $AF03 = play, opening LDA #$0F / STA $D418 (volume max every frame). Traced OK (65 writes / 120 frames).",
    "A LATENT ENVIRONMENT DEPENDENCY worth flagging: the RELOCATED player never touches $01 — only the wrapper does, and it RESTORES $37 (BASIC ROM IN). So play at $AF03 requires the host to leave BASIC banked OUT. It plays fine under the sidm2 tracer; what HVSC's reference players do could not be determined.",
    "DATE DISCREPANCY RESOLVED: the '1983 Atlantis Software' copyright string predates Atlantis's Jan-1984 founding. 1983 = development year, 1984 = publication. Lemon64 states exactly this. DeepSID's active: 1984 should be 1983-1984.",
    "COLLISIONS RULED OUT: a CSDb search for 'Trotter' returns 22 hits, ALL 'Globetrotter' — including GlobeTrotter, a 1990 ATLANTIS SOFTWARE C64 game (same publisher — a real trap, pure coincidence). There is NO scener named Mark Trotter, matching DeepSID csdb_id 0. Modern namesakes ruled out: Mark Trotter of Lonely The Brave (Cambridge guitarist, 2010s), a US French-horn player, an IMDb composer.",
    "DO NOT CITE THE GIANT LIST for this. Wikipedia's programmer credit cites James Hague's 'Giant List of Classic Game Programmers', but NO Trotter entry exists in two mirrors (retroisle, 1000bit) and dadgum's letter pages 404. The credit is independently corroborated by Lemon64, so it STANDS — but its stated citation does not check out.",
    "No SIDId entry (verified against the local deepsid_dl/sidid.nfo)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Trotter, Mark - UNITED KINGDOM'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb SID entries: https://csdb.dk/webservice/?type=sid&id=1282 (Connect 4) · id=1834 (Sam's Jam) · id=61252 (Monster Munch)",
    "Wikipedia — Monster Munch (video game): https://en.wikipedia.org/wiki/Monster_Munch_(video_game) · Atlantis Software: https://en.wikipedia.org/wiki/Atlantis_Software",
    "Lemon64: https://www.lemon64.com/game/monster-munch · https://www.lemon64.com/game/connect-four · https://www.lemon64.com/game/sams-jam · Atlantis catalogue: https://www.lemon64.com/games/list.php?list_company=atlantis-software",
    "MobyGames — Sam's Jam (403 on fetch; via search only): https://www.mobygames.com/game/73051/sams-jam/",
    "Local: data/composers/mark-trotter.json; HVSC 85 MUSICIANS/T/Trotter_Mark/{Connect_4,Monster_Munch,Sams_Jam}.sid; deepsid_dl/sidid.nfo (no Trotter)"
  ]
}
```

## Overview

`Mark_Trotter` is the hand-coded routine of **Mark Trotter**, an English
programmer-musician active 1983-84 who wrote his own games *and* their music for
two UK budget cassette houses — Atlantis Software and Abrasco. On *Sam's Jam* he
was the sole developer: code, graphics and music.

It's a rare case in this KB where the composer-named tag genuinely belongs to the
person, and where the **tag's exclusions are demonstrably correct**: it covers
exactly the two files that share a note table, and correctly leaves out the third.

## Quirks & gotchas

See the `quirks` array. The load-bearing ones:

- **The untagged third file is right** — Monster Munch shares only 10 bytes with
  the other two. Different, earlier codebase.
- **Sam's Jam's out-of-range `play`** is a relocation into RAM under BASIC ROM,
  and it carries a **latent dependency**: the relocated player never touches
  `$01`, so it needs BASIC left banked out by the host.
- **The Giant List citation doesn't check out** — the credit survives on Lemon64,
  but don't cite Wikipedia's stated source.

## Disassembly notes

Connect_4 and Sam's Jam now have a full working disassembly (this pass,
`SIDdecompiler.exe` + `64tass`, see Verification below for exact results).
Monster Munch still has no full disassembly — only header facts, byte-run
comparison and traces (it is untagged and out of scope for the tag being
verified here).

Monster Munch's `play` decoding to `JMP $0000` is the nice one — init patches the
operand per subtune (`STA $4726` / `STA $4727`), making the vector self-modifying.
[[laxity-newplayer]] is the only other card documenting self-modifying code.

Sam's Jam's own self-modifying mechanism, now disassembled: the header's
`init` ($6496) is purely a banking wrapper (`LDX #$36/STX $01/JSR $6474/
LDX #$37/STX $01/RTS`); the real init at `$6474` runs a 4-page indexed copy
loop (`LDA $6100,X / STA $af00,X`, and the same for `$6200->$b000`,
`$6300->$b100`, `$6400->$b200`) that block-copies the whole player+data image
from RAM under BASIC ROM's normal load range into RAM under BASIC ROM proper
— the PSID header's `play=$af03` only becomes real, executable code *after*
this copy runs once at INIT. Per-voice note playback reads through a single
indirect zero-page pointer (`z71`/`z72` = `$71`/`$72`), refilled per voice
from workspace tables (`lb197,X`/`lb19a,X`) — a plausible site for the
relocation-control failure noted below, though this was not traced further.

## Verification

`status: verified` (raised this pass from `in-progress` — a real disassemble
-> reassemble -> byte-diff -> trace-diff round trip was completed on both of
the two tagged files, not just header/byte-run comparison).

**Method**: `SIDdecompiler.exe` disassembled each file at a **zero-shift**
relocation base — `-a<decimal for the tool's own `-v2` "Start:" address>`,
not the PSID header's load address — because both files' emulated memory-touch
map reports a Start address *below* the header's own load address (Connect_4:
map Start `$02fc` vs. header load `$1c00`; Sam's Jam: map Start `$03c6` vs.
header load `$4000`). Per this KB's own gotcha 40/lesson 60, that gap is
runtime low-RAM workspace, not missing file content, so the comparison below
is over the file's real payload range only (`$1c00-$2fff` / `$4000-$64ff`),
and using the map's own Start as `-a`'s target keeps a single, non-wrapping
contiguous block with no 64tass `-Wwrap-pc`/`-Wwrap-mem` warnings.

**Connect_4.sid** (load `$1c00`, init `$2cd4`, play `$2d48`, 1 subtune):
- Byte-diff of the reassembled `.prg` against the pristine PSID payload,
  `$1c00-$2ef4` (the code+data region `SIDdecompiler`'s own trace actually
  covers — the trailing `$2ef5-$2fff`, 267 bytes, is bitmap-shaped
  `$00`/`$ff` run data the trace never touches at any `-t` budget tried up to
  500000, almost certainly unrelated game-graphics data tacked onto the SID
  rip's tail, not player code): **100.0000% byte-exact, 0/4853 bytes
  differ.**
- Register-write trace-diff (`sidm2-sid-trace.exe`, 100 frames, subtune 0)
  against the original: **exact** — identical `frame,cycle,register,
  old_val,new_val` sequence, 38/38 writes, only the tool's own echoed
  input-filename line differs.
- Non-tautological control (lessons 69/70/72): the same disassembly
  reassembled at two *different* relocation bases (`$5000`, page-aligned,
  and the deliberately non-page-aligned `$5037`) produced binaries that
  genuinely differ from the original at 95 of 4853 same-offset bytes, yet
  **both** still reproduce the original's exact 38-write register sequence
  with 0 divergences — real evidence the disassembly's instruction/operand
  boundaries are correct, not an artifact of byte-for-byte pass-through.

**Sam's Jam.sid** (load `$4000`, header init `$6496` banking wrapper -> real
init `$6474`, play `$af03` after the runtime relocation copy, 4 subtunes):
- Byte-diff of the reassembled `.prg` against the pristine PSID payload,
  the full `$4000-$64ff` (9472 bytes, no truncation this time — the whole
  file, including the copy-loop and rip-banking-wrapper code, is covered):
  **100.0000% byte-exact, 0/9472 bytes differ.**
- Register-write trace-diff against the original, **all 4 subtunes**
  (subtune 0: 120 frames; subtunes 1-3: 80 frames each): **exact** on every
  one — identical write sequences including cycle counts. The only textual
  diff lines are the tool's echoed filename and a pre-INIT `Mem[$af03]`
  dump that legitimately differs (the original file's real RAM at `$af03`
  is genuinely all-zero before INIT's runtime copy runs; the reassembly's
  `.prg` embeds the disassembled *post-copy* bytes at that address as part
  of the file image, which is expected and doesn't affect the post-INIT
  trace). This is a real, non-tautological result specifically *because*
  the copy loop itself (`l6474`/`l6477`, symbolic `sta laf01,X` / `sta
  lb000,X` / `sta lb101,X` / `sta lb200,X`) lives inside the byte-verified
  `$4000-$64ff` region — the destination bytes had to be correctly derived
  from correctly-disassembled source, not hand-copied from a trace snapshot.
- The same relocation-invariance control **fails** on Sam's Jam (tried at a
  page-aligned `+$1000` delta): the relocated build produces 0 SID writes
  where the original produces 65. This was **not chased down further** —
  the driver's per-voice note-sequence pointer setup (`z71`/`z72` fed from
  workspace tables `lb197,X`/`lb19a,X` at `lb144-lb154`) is a plausible
  candidate (matching this KB's lessons 86/87/91/103 pattern of a
  self-relocating/page-locked driver that legitimately cannot tolerate a
  non-native base), but this was not confirmed byte-by-byte. It does not
  affect the native-address verification above: the real HVSC file is never
  relocated by any real player, and the native byte-diff already covers
  100% of the file's own bytes exactly, not just the bytes the trace
  happened to execute.

**Monster_Munch.sid was not reconstructed this pass** — it correctly carries
no player tag (see quirks: it shares only 10 bytes with the other two, a
different, earlier codebase), so it is out of scope for verifying *this*
tag. Its self-modifying `play` vector remains header-facts-only.

Not determined: any biography beyond nationality (no birth date, interview, photo
or later career — he appears to leave no trace after 1984); whether he made games
beyond these three; whether DeepSID's tag was hand-assigned or signature-derived
(no SIDId entry to match against); which `$01` HVSC's reference players use at
play time.

## Sources

See the `sources` array above.

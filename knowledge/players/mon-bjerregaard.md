# MoN/Bjerregaard

<!--
  Player-ID / SIDId tag: "MoN/Bjerregaard" — Johannes Bjerregaard's third and
  final personal C64 music driver, written in Turbo Ass during his Maniacs of
  Noise (MoN) tenure. Distinct from the plain "Bjerregaard" raw tag (65 files,
  researched separately) — see the Overview/Quirks for the file-level evidence
  that these are two DIFFERENT driver-era signatures by the same author, not
  one routine split across two export tags. Do not merge without new evidence.
-->

```json
{
  "id": "mon-bjerregaard",
  "name": "MoN/Bjerregaard (Johannes Bjerregaard's third driver, Maniacs of Noise era)",
  "aliases": ["MoN/Bjerregaard"],
  "authors": ["Johannes Bjerregaard"],
  "released": "TODO: no exact date documented. VGMPF places it after Bjerregaard joined Maniacs of Noise in October 1988 (Charles Deenen gave him Turbo Ass and requested a faster driver); its earliest known use is the game Stormlord, released 1989 by Hewson/Maniacs of Noise. Both ACME reconstructions in the realdmx/c64_6581_sid_players repo carry a '1989 Johannes Bjerregaard' PSID copyright string.",
  "status": "verified",
  "platform": "Native C64 in-house replay driver, hand-coded in 6502 assembly using Turbo Ass (the same assembler Deenen used at Maniacs of Noise) — NOT a GUI editor/tracker. Per VGMPF: 'From thereon, Bjerregaard arranged by typing hexadecimal numbers,' i.e. composers wrote note/label data directly rather than using a pattern-grid editor.",
  "csdb_release": null,

  "memory": {
    "load_address": "FILE-DEPENDENT, not a fixed $1000 — corrected by this pass's own disassembly of two real HVSC rips (see Verification). The realdmx/c64_6581_sid_players repo's claim of a uniform load address $1000 is an artifact of that reconstructor's own synthetic PSID header for their two example builds, not a property of the driver itself: real game/demo rips place the driver wherever the host program loaded it (confirmed load $0faa for Myth_Demo.sid, $1000 for Stormlord_V2.sid — and in the Stormlord_V2 case the true driver vector table sits at $1065, not $1000, because $1000-$1064 is a separate demo-harness stub — SEI/IRQ-install/KERNAL-GETIN polling loop — that precedes the driver in that particular build and is never called by the PSID init/play convention).",
    "zero_page": "$fc/$fd ('zp'/'zp+1' in the source) — confirmed independently in this pass's own disassembly of both Myth_Demo.sid and Stormlord_V2.sid (`zfc = $fc` / `zfd = zfc + $01` emitted by SIDdecompiler at each file's own driver base), matching the realdmx/c64_6581_sid_players repo's claim exactly.",
    "layout": "TODO: table layout beyond the ZP pointer pair not fully mapped by this pass. The source (Myth.sid) shows labelled wave/pulse/filter/note data blocks (w0-wa, p0-p5, f0-f2, n0-nf, fqdatlo/fqdathi) but their absolute addresses/sizes were not extracted. This pass's own disassembly additionally located a per-voice self-modified working-storage table right after the vector table on both real files (Myth_Demo.sid: $2015-$20ba; Stormlord_V2.sid: $1798-$183d — see Verification) that the pristine SID file always ships zeroed/near-zeroed and the driver's own init routine fills in at runtime — this is very likely the same 'per-voice state tables (gate/transp/seqno/glide/...)' the repo's source names, not a newly-discovered structure, but its exact absolute layout still isn't mapped byte-by-byte here."
  },
  "entry": {
    "init": "Three-vector jump table (init/musoff/play, in that order) confirmed present at the start of the driver in BOTH real files disassembled this pass, matching the repo's SETMUS/MUSOFF/PLAY structure exactly — but the table's absolute address is file-dependent (see load_address). Myth_Demo.sid: vector table at $0faa, init entry at $0fae -> real init code at $1538. Stormlord_V2.sid: vector table at $1065 (== the PSID header's own declared init address), init entry -> real init code at $15df.",
    "play": "Same three-vector table's third entry. Myth_Demo.sid: play vector at $0fb4 -> real play code at $0fb8 (PSID header's own play address, $fb4, points AT the vector-table jmp instruction, not the target — confirmed by disassembly). Stormlord_V2.sid: play vector at $106b (== PSID header's play address) -> real play code at $106f. Source comment 'jsr in irq-interrupt' (IRQ-driven, not polled) is consistent with both files' structure though this pass did not independently trace the IRQ-installation code itself (Stormlord_V2.sid's $1000-$1064 harness does install a raster IRQ, but that harness is a demo-specific bootstrap, not part of the driver proper)."
  },
  "speed": "IRQ-driven per source comment ('play: jsr in irq-interrupt'); tempo is governed by a per-call 'tempocnt' countdown compared against a per-song 'temposet' value (`dec tempocnt` / reload from `temposet` when it goes negative), i.e. a software tempo divider rather than raw 1x/Nx call-rate switching. No CIA-vs-raster trigger is documented in the source comments. VGMPF separately notes the driver was tuned to a 441 Hz reference pitch 'except on Fruitbank' — a tuning detail, not a speed fact.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO: no conventional pattern/table format documented — VGMPF describes the workflow as typing hex numbers/labels directly, similar in spirit to MoN/Deenen's driver (see mon-deenen.md)",
    "instruments": "TODO: source shows per-voice state arrays (gate/transp/seqno/glide/notsetyet/vibdir/vibrate/pwtimes/ftms etc., indexed 0-2 for 3 voices) but no single fixed-width 'instrument record' was identified in this pass.",
    "wavetable": "TODO: labelled table block exists (w0-wa in Bjerregaard_J_Myth.asm) but its byte layout was not extracted in this pass.",
    "pulsetable": "TODO: labelled table block exists (p0-p5 in Bjerregaard_J_Myth.asm) but its byte layout was not extracted in this pass.",
    "filtertable": "TODO: labelled table block exists (f0-f2 in Bjerregaard_J_Myth.asm) but its byte layout was not extracted in this pass."
  },
  "effects": {
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is Johannes Bjerregaard's THIRD and final personal driver, per VGMPF's career chronology: an early ripped David Whittaker driver used for The Vikings (1987, pre-personal-driver ripped work, not one of his own three); his own first driver (Tiger Mission, 1987); his second own driver (1987-88, evolved from Rob Hubbard's and programmed via his own 'DMC Edit'/Profi-Ass 64); and THIS, his third driver — after joining Maniacs of Noise in October 1988, Charles Deenen supplied Turbo Ass and requested a faster driver, which Bjerregaard wrote himself rather than adopting Deenen's own ('MoN/Bjerregaard' — see mon-deenen.md's quirks for the explicit VGMPF quote that he declined Deenen's driver).",
    "DIRECT FILE-LEVEL EVIDENCE this is a genuinely different SIDId signature from the plain 'Bjerregaard' raw tag (65 files, researched as a separate family in this same batch), not the same routine under two export shapes: in this project's own data/composers/johannes-bjerregaard.json, the 15 files by Bjerregaard himself tagged 'MoN/Bjerregaard' are exactly the titles VGMPF attributes to his MoN-era Turbo Ass driver — Stormlord, Stormlord V2, Fruitbank, Flimbo's Quest (main), plus Kamikaze/Music Demo/Myth Demo/Slimbo4/STII8/Street Cred Boxing/Alf TV Theme/Deel 1/Deel 2/Domino Dancing/Test — while his 61 files tagged plain 'Bjerregaard' are dominated by his earlier 1987-88 Danish Music Company demo-scene output (multiple 'DMC Demo IV' tunes, cover versions like Billie Jean, Blue Monday '88, Depeche Mode Songs) consistent with his second, pre-MoN driver. Two different SIDId byte signatures, two different eras of his own driver work — kept as SEPARATE cards, not merged, per this evidence. (Contrast the CyberTracker/CyberTracker_exe case, which was confirmed to be one engine under two export shapes — no equivalent confirmation exists here.)",
    "Composer concentration is the opposite of the plain 'Bjerregaard' tag: 77 files across 15 composers, and Bjerregaard himself is NOT the top user (15 files, 19%) — Fozzie leads with 17 (22%), then ELA 9, Dokken 6, Joachim Wijnhoven 6, Widding Roy Johan 5, Drumtex 4, Rage 4, Zipper 3, Lynx 2, Scroll 2, and five more with 1 each. This spread indicates the driver circulated and was reused within the Scandinavian demoscene after its commercial debut, much like Rob Hubbard's driver did — not a routine that stayed personal (compare the plain 'Bjerregaard' tag, 94% himself).",
    "SIDId documents a direct lineage from THIS driver to a separate, later editor: the '(Audiomaster_V1)' entry (Ruben Spaans/Scroll, 1989, Megastyle, CSDb release id 7071) has the comment 'Editor that is based on the player of /MUSICIANS/B/Bjerregaard_Johannes/Stormlord.sid' — and Stormlord.sid is itself tagged 'MoN/Bjerregaard' in this dataset. As of 2026-07-18 that editor has its own card ([[audiomaster-v1]]), so the directional edge now lives THERE as `audiomaster-v1 derives_from mon-bjerregaard` (editor built on this driver). This card's earlier placeholder `shares_routine_with: ['audiomaster-v1']` was therefore removed to avoid a redundant second edge for the same relationship — the lineage claim is unchanged, just hosted directionally on the correct card.",
    "No standalone CSDb release exists for the driver itself, mirroring MoN/Deenen. Bjerregaard's CSDb scener page (id 8138) lists a tool credit for a 'Bjerregaard DMC Editor' (2012, released under his own group Danish Music Company), but that is a much later item and its relationship (if any) to this 1988-89 in-game driver is unconfirmed — not assumed to be the same thing here. Also do not confuse 'DMC' in that later tool's name, or in VGMPF's phrase 'arranged in his DMC Edit' for the SECOND driver, with the unrelated, coincidentally-named 'DMC (Demo Music Creator)' by Brian/Graffity already carded at knowledge/players/dmc.md — 'DMC' here stands for Bjerregaard's own group Danish Music Company, a completely separate lineage.",
    "77 files across 15 composers in this collection (rank 5 by file count per knowledge/COVERAGE.md among uncarded families).",
    "A public, MIT-licensed source repo exists after all: github.com/realdmx/c64_6581_sid_players ('Original and reverse-engineered music players for the C64') carries a Bjerregaard_Johannes_MON folder with two files, Bjerregaard_J_Myth.asm ('Myth', 1989) and Bjerregaard_J_James_Bond_3.asm ('James Bond 3 Demo', 1989, 'probably made for Maniacs of Noise'), each headed '; Converted from TurboAssembler to ACME by dmx87' — i.e. a third party's TurboAss->ACME conversion, not this project's own disassembly. That repo's own synthetic PSID header claims a uniform load address $1000 for both example builds; this pass's own disassembly of two REAL HVSC rips found that fact does not generalize (see memory.load_address) — the repo's $1000 is specific to `dmx87`'s own re-packaging, not a property of the driver.",
    "VERIFIED this pass by this project's own disassemble/reassemble/trace-diff pipeline (not just source-documented): SIDdecompiler.exe on two real HVSC files (Myth_Demo.sid, load $0faa, 2 subtunes; Stormlord_V2.sid, load $1000/real driver base $1065, 1 subtune), reassembled with 64tass, byte-diffed against the pristine SID payload, and trace-diffed against the original file with sidm2-sid-trace.exe. Both files raw-reassemble to 97.2%/97.4% byte-identical; the entire remaining gap in both files is the SAME mechanism — a per-voice self-modified working-storage table (Myth_Demo.sid: $2015-$20ba, 122 bytes; Stormlord_V2.sid: $1798-$183d, 83 bytes) plus, in Myth_Demo.sid only, one self-modified immediate-operand byte at $0fb9 (the play-vector's own LDA #imm target, written via `sty l0fb9+1` elsewhere in the code) — SIDdecompiler captures the post-execution runtime value of these bytes rather than the pristine cold-start value shipped in the file, the same class of divergence documented for many other players (see the shared agent's `hard_won_gotchas` 41 / `lessons_learned` 10/16/17/20/25/29/37/42/43). Patching every one of those bytes back to the file's own pristine value (direct .prg binary patch, not .asm text) closes BOTH files to 100.0000% byte-exact over the SIDdecompiler-emulated region, and BOTH files then trace register-write-identical against the real .sid over 100-200 frames covering every subtune (Myth_Demo.sid subtunes 0 and 1; Stormlord_V2.sid's only subtune) — status raised to `verified`."
  ],
  "sources": [
    "data/sidid.json byTag['MoN/Bjerregaard'] — author: Johannes Bjerregaard only, no released/reference/comment fields",
    "data/sidid.json byTag['(Audiomaster_V1)'] — comment naming /MUSICIANS/B/Bjerregaard_Johannes/Stormlord.sid as the player this editor is based on",
    "knowledge/COVERAGE.md — rank 5, 77 files tagged 'MoN/Bjerregaard'; separately rank 13, 65 files tagged 'Bjerregaard'",
    "Local aggregate over data/composers/*.json: 77 files / 15 composers (Fozzie 17, Johannes Bjerregaard 15, ELA 9, Dokken 6, Joachim Wijnhoven 6, Widding Roy Johan 5, Drumtex 4, Rage 4, Zipper 3, Lynx 2, Scroll 2, Art 1, Glenn Gallefoss 1, JO 1, Trurl 1)",
    "data/composers/johannes-bjerregaard.json — per-file player tag breakdown: 61 files 'Bjerregaard', 15 files 'MoN/Bjerregaard', with titles cross-checked against VGMPF's driver chronology",
    "VGMPF, Johannes Bjerregaard — https://www.vgmpf.com/Wiki/index.php?title=Johannes_Bjerregaard (three-driver chronology: ripped Whittaker driver / Rob-Hubbard-derived second driver in Profi-Ass 64 arranged via 'DMC Edit' / third Turbo Ass driver at MoN, tuned 441 Hz except Fruitbank, arranged by typing hex directly)",
    "VGMPF, Maniacs of Noise — https://vgmpf.com/Wiki/index.php/Maniacs_of_Noise (Bjerregaard joined Oct 1988, declined Deenen's driver, wrote his own faster Turbo Ass driver at Deenen's request)",
    "CSDb SID entry, Stormlord — https://csdb.dk/sid/?id=4055 (Johannes Bjerregaard & J. Tel, 1989, Hewson/Maniacs of Noise — earliest confirmed use of this driver)",
    "CSDb scener page, Johannes Bjerregaard (id 8138) — https://csdb.dk/scener/?id=8138 (tool credits checked: no standalone driver release found for the 1988-89 driver; a 2012 'Bjerregaard DMC Editor' under Danish Music Company exists but is not assumed to be the same tool)",
    "CSDb release, Audiomaster V1 (Ruben Spaans/Scroll, 1989, Megastyle) — https://csdb.dk/release/?id=7071",
    "knowledge/players/mon-deenen.md — sibling card documenting Charles Deenen's own MoN driver and the explicit VGMPF quote that Bjerregaard declined it",
    "knowledge/players/dmc.md — sibling card for the unrelated, coincidentally-named Graffity 'DMC (Demo Music Creator)' tool, noted here only to rule out conflation",
    "cadaver/sidid project (source of sidid.nfo / SIDId data): https://github.com/cadaver/sidid",
    "GitHub, realdmx/c64_6581_sid_players — https://github.com/realdmx/c64_6581_sid_players (MIT licence; 'Original and reverse-engineered music players for the C64')",
    "GitHub, Bjerregaard_J_Myth.asm — https://raw.githubusercontent.com/realdmx/c64_6581_sid_players/main/Bjerregaard_Johannes_MON/Bjerregaard_J_Myth.asm (load $1000, init 'setmus', play 'play', zp=$fc/$fd, IRQ-driven play call, per-file comment header)",
    "GitHub, Bjerregaard_J_James_Bond_3.asm — https://raw.githubusercontent.com/realdmx/c64_6581_sid_players/main/Bjerregaard_Johannes_MON/Bjerregaard_J_James_Bond_3.asm (load $1000, init SETMUS, play PLAY, zp=$fc, header comment 'JB demo music, probably made for Maniacs of Noise')",
    "This project's own disassembly/reassembly/trace-diff verification pass: C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/B/Bjerregaard_Johannes/Myth_Demo.sid and .../Stormlord_V2.sid, disassembled with SIDdecompiler.exe, reassembled with 64tass.exe, byte-diffed and trace-diffed with sidm2-sid-trace.exe — both files reached 100.0000% byte-exact (after patching self-modified working-storage bytes back to pristine) and register-write-exact traces over multiple frame counts/subtunes; see Verification section for full numbers"
  ]
}
```

## Overview

MoN/Bjerregaard is the Player-ID/SIDId tag for the third and final personal
music driver written by Danish composer **Johannes Bjerregaard**, coded in
Turbo Ass after he joined **Maniacs of Noise** (MoN) in October 1988. Per
VGMPF, Charles Deenen supplied Turbo Ass and asked for a faster driver;
Bjerregaard declined to use Deenen's own driver (`mon-deenen.md`) and wrote
his own instead — used first on the 1989 Hewson/MoN game **Stormlord**, and
later on **Fruitbank** and **Flimbo's Quest**. In this collection it accounts
for 77 files across 15 composers (rank 5 among uncarded families per
`knowledge/COVERAGE.md`); unlike Bjerregaard's own earlier "Bjerregaard"-tagged
work (94% himself), this driver spread into the wider Scandinavian scene —
Fozzie alone outranks Bjerregaard as the top user. A separate SIDId entry
documents that Ruben Spaans' 1989 **Audiomaster V1** editor was built directly
on top of this driver's Stormlord code — now carded as [[audiomaster-v1]], which
hosts the directional `derives_from` edge to this driver (a genuine, if
one-sided, lineage claim). A follow-up pass found a public, MIT-licensed
source repo (github.com/realdmx/c64_6581_sid_players) containing two
TurboAssembler->ACME conversions of this exact driver ("Myth" and "James Bond 3
Demo", both 1989); the two files independently agree on init/play/musoff entry
vectors and zero-page usage ($fc/$fd), which was enough to promote several
Tier 3 fields from `TODO` to source-documented and move `status` to
`in-progress`. A further pass then disassembled two REAL HVSC files
(`Myth_Demo.sid`, `Stormlord_V2.sid`) with this project's own tooling
(SIDdecompiler/64tass/sidm2-sid-trace), confirmed the ZP pair and three-vector
structure directly, corrected the repo's claimed load address (file-dependent,
not a fixed $1000), traced down the entire remaining byte-diff gap to one
well-understood class of self-modified working-storage bytes, and reached a
100.0000% byte-exact, register-write-exact reconstruction on both files —
`status` is now `verified`.

## Quirks & gotchas

See the `quirks` array. The load-bearing point: **this is NOT the same
raw tag/routine as plain "Bjerregaard"** (65 files, a separate family
researched in this same batch). Direct file-title evidence — this tag's
Bjerregaard-authored files are exactly the MoN-era commercial titles VGMPF
lists for his third driver, while the plain "Bjerregaard" tag's files are
his earlier 1987-88 Danish Music Company demo/cover-tune output — supports
treating these as two genuinely different driver-era signatures by the same
author, not one engine split across two export tags. They are kept as
separate cards accordingly. Also do not confuse "DMC" here (Bjerregaard's own
group, Danish Music Company) with the unrelated Graffity "DMC (Demo Music
Creator)" tracker already carded at `dmc.md`.

## Disassembly notes

CSDb still has no standalone release for this driver (only in-game/demo
usage), consistent with it being an in-house, hand-assembled tool rather than
a distributed product. A public third-party reconstruction exists —
`github.com/realdmx/c64_6581_sid_players` (MIT licence), ACME-format
conversions of two Bjerregaard/MoN-era tunes, `Bjerregaard_J_Myth.asm` and
`Bjerregaard_J_James_Bond_3.asm`, each headed "Converted from TurboAssembler
to ACME by dmx87" — and this project has now independently disassembled two
REAL HVSC files of its own (`Myth_Demo.sid`, `Stormlord_V2.sid`) with
SIDdecompiler/64tass, cross-checking the repo's claims directly against real
bytes rather than trusting the third-party conversion's own header. Findings:

- **Zero page usage `zp`/`zp+1` = `$fc`/`$fd` — CONFIRMED** in both real
  files' own disassembly (`zfc = $fc` / `zfd = zfc + $01` at each file's own
  driver base). Matches the repo exactly.
- **Three-vector jump table (init/musoff/play) at the driver's own base —
  CONFIRMED** in both real files, in that order, matching the repo's
  SETMUS/MUSOFF/PLAY structure. The vector table's own address is
  file-dependent, however (see below), not a fixed offset from the SID's
  load address.
- **Load address `$1000` — NOT a general fact, corrected this pass.** The
  repo's claim is an artifact of `dmx87`'s own synthetic PSID header for
  their two example rebuilds, not a property of the driver. Real files place
  it wherever the host program's own loader put it:
  - `Myth_Demo.sid`: PSID load address `$0faa`. The `-v2` memory-touch map's
    own "Start:" address matches exactly (`$0faa`), i.e. no leading dropped
    byte (gotcha 40/33 checked and clean). The 3-vector table sits directly
    at `$0faa`; init entry (`$fae`) jumps to the real init code at `$1538`;
    play entry (`$fb4`) jumps to `$0fb8` for the real play code — note the
    PSID header's own declared play address (`$fb4`) points AT the
    vector-table `jmp` instruction, not its target.
  - `Stormlord_V2.sid`: PSID load address `$1000`, but the `-v2` map's own
    "Start:" address is `$1065` — one more instance of gotcha 40/33's
    Start-vs-load-address check. Investigating directly: `$1000-$1064` is
    real code, but it's a demo-specific bootstrap harness (`SEI`, raster-IRQ
    install, a KERNAL `$ffe4` GETIN polling loop) that precedes the driver
    in this particular build and is never reached via the PSID init/play
    calling convention. The driver's own 3-vector table sits at `$1065`,
    exactly matching the PSID header's own declared init address; play
    vector `$106b` also matches the header exactly. Relocating
    SIDdecompiler's `-a` target to `$1065` (not the header's `$1000`) was
    required to get a non-misaligned reassembly — relocating to `$1000`
    instead silently mislabeled the captured driver bytes as if they began
    at `$1000`, per gotcha 33's mechanism.
- **Tempo divider / per-voice state tables** — not independently
  re-verified at the field/label level this pass (the repo's own
  `tempocnt`/`temposet`/`gate`/`transp`/etc. names were not cross-checked
  symbol-by-symbol against this project's own disassembly, which uses
  SIDdecompiler's auto-generated `lXXXX` labels throughout), but the
  self-modified working-storage table this pass DID locate and patch
  (`$2015-$20ba` in Myth_Demo.sid, `$1798-$183d` in Stormlord_V2.sid, both
  read+written per-frame right after the vector table) is very likely the
  same per-voice state block the repo names, given the position and access
  pattern — not confirmed byte-for-byte against the repo's own field
  boundaries, so `data_format.*` stays `TODO` rather than promoted further.

## Verification

**VERIFIED — `status: verified`.** Two real HVSC files, this project's own
disassemble/reassemble/byte-diff/trace-diff pipeline (SIDdecompiler.exe ->
64tass.exe -> sidm2-sid-trace.exe), full methodology below.

**File 1: `Myth_Demo.sid`** (PSID, load `$0faa`, init `$0fae`, play `$0fb4`,
2 subtunes). Disassembled with `-a4010 -z -d -c -v2` (decimal for `$0faa`,
which the `-v2` map's own "Start:" confirmed matched the load address
exactly — no relocation-base correction needed here). Reassembled cleanly
with 64tass (`Data: 4378 $0faa-$20c3`, no wrap warnings). Raw byte-diff
against the pristine SID payload: **97.2133%** (4378 bytes compared, 122
differing, all inside `$0fb9` (1 byte) and `$2015-$20ba` (121 bytes); a
trailing 12 bytes beyond the emulated region, `$20c4-$20cf`, are absent from
the reassembly but confirmed all-zero padding in the original — harmless).
Root-caused: `$0fb9` is a self-modified immediate operand of the play
vector's own `LDA #imm` (written via `sty l0fb9+1` elsewhere in the driver);
`$2015-$20ba` is a per-voice self-modified working-storage table, both
classes SIDdecompiler captures post-execution rather than pristine. Patched
all 122 bytes directly in the assembled `.prg` (not the `.asm` text, per this
agent's own gotcha 26) back to the file's pristine cold-start values ->
**100.0000% byte-exact**. Traced both the pristine original and the patched
reconstruction with `sidm2-sid-trace.exe` (explicit hex `init=fae`,
`play=fb4`) for both subtunes: subtune 0 at 20 and 200 frames, subtune 1 at
20 frames — **all three runs register-write-identical** (the only diff line
in every run was the tool's own echoed input filename).

**File 2: `Stormlord_V2.sid`** (PSID, load `$1000`, init `$1065`, play
`$106b`, 1 subtune). Disassembled with `-a4197` (decimal for `$1065`, the
`-v2` map's "Start:" address — NOT the header's `$1000`, see Disassembly
notes above for why). Reassembled cleanly (`Data: 3167 $1065-$1cc3`, no wrap
warnings). Raw byte-diff against the pristine payload at the correct offset:
**97.3792%** (3167 bytes compared, 83 differing, entirely inside
`$1798-$183d`, the same class of per-voice self-modified table as file 1, at
a different absolute address). Patched all 83 bytes directly in the `.prg`
-> **100.0000% byte-exact**. Traced both original and patched reconstruction
(`init=1065`, `play=106b`, 100 frames, its only subtune) — **register-write-
identical** (only the echoed filename line differed).

Both real files independently converge on the same divergence mechanism
(self-modified per-voice working storage, plus one self-modified immediate
operand in file 1 only) and both close to exact once that's patched — strong
enough agreement across two files, per this project's own precedent
(`laxity-newplayer.md`), to set `status: verified`. Data-format fields (order
list, pattern, instrument, wave/pulse/filter table absolute layout/byte
widths) remain honestly `TODO` — this pass confirmed runtime structure
(entry points, ZP, the working-storage table's existence and address) but did
not map the composer-facing data formats.

## Sources

See the `sources` array — SIDId's `MoN/Bjerregaard` and `(Audiomaster_V1)`
entries, `knowledge/COVERAGE.md`, local `data/composers/*.json` aggregation
(including per-title cross-checking against VGMPF), VGMPF's Johannes
Bjerregaard and Maniacs of Noise wiki pages, the CSDb Stormlord SID entry and
Bjerregaard's CSDb scener page, the sibling `mon-deenen.md`/`dmc.md`
cards this one cross-references to rule out conflation, and the newly-found
public source repo `github.com/realdmx/c64_6581_sid_players` (MIT licence)
with its two Bjerregaard/MoN-era ACME reconstructions.

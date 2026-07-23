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
  "status": "in-progress",
  "platform": "Native C64 in-house replay driver, hand-coded in 6502 assembly using Turbo Ass (the same assembler Deenen used at Maniacs of Noise) — NOT a GUI editor/tracker. Per VGMPF: 'From thereon, Bjerregaard arranged by typing hexadecimal numbers,' i.e. composers wrote note/label data directly rather than using a pattern-grid editor.",
  "csdb_release": null,

  "memory": {
    "load_address": "$1000 — per two independent ACME reconstructions (Myth.sid, James_Bond_3 Demo.sid) in the public realdmx/c64_6581_sid_players repo, both with PSID load address $1000. Third-party TurboAssembler->ACME conversion by 'dmx87', not this project's own disassembly — treat as source-documented, not independently verified here.",
    "zero_page": "$fc/$fd ('zp'/'zp+1' in the source) — same repo, both files declare `zp = $fc ;zp+1 used as well` immediately before the entry vectors.",
    "layout": "TODO: table layout beyond the ZP pointer pair not fully mapped by this pass. The source (Myth.sid) shows labelled wave/pulse/filter/note data blocks (w0-wa, p0-p5, f0-f2, n0-nf, fqdatlo/fqdathi) but their absolute addresses/sizes were not extracted."
  },
  "entry": {
    "init": "$1000, jumps to label SETMUS/setmus — source comment 'init(.a=music no)' implies A = subtune/song number, per realdmx/c64_6581_sid_players (see load_address citation).",
    "play": "Label PLAY/play, reached via `jmp play` from the $1000 vector table — source comment states 'jsr in irq-interrupt', i.e. called from an IRQ handler rather than polled by the host; no explicit call-rate/CIA-vs-raster statement is given in the source comments. Same repo also exposes a third vector, MUSOFF/musoff ('stops playing tune')."
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
    "A public, MIT-licensed source repo exists after all: github.com/realdmx/c64_6581_sid_players ('Original and reverse-engineered music players for the C64') carries a Bjerregaard_Johannes_MON folder with two files, Bjerregaard_J_Myth.asm ('Myth', 1989) and Bjerregaard_J_James_Bond_3.asm ('James Bond 3 Demo', 1989, 'probably made for Maniacs of Noise'), each headed '; Converted from TurboAssembler to ACME by dmx87' — i.e. a third party's TurboAss->ACME conversion, not this project's own disassembly, and not confirmed byte-for-byte against a real .sid via sidm2-siddump here. Both independently agree on load address $1000, init label SETMUS/setmus (A = song number), play label PLAY/play (called from an IRQ handler per its own comment), and zero-page pair zp/zp+1 = $fc/$fd — enough agreement across two separate files to record as source-documented Tier 3 facts and move status to in-progress, per this project's rule that a public source repo which plainly documents a runtime fact earns in-progress even without independent verification. 'Myth' also corroborates the earlier composer-data-only evidence: it lines up with the 'Myth Demo' title already listed among Bjerregaard's MoN/Bjerregaard-tagged files (see the file-level-evidence quirk above)."
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
    "GitHub, Bjerregaard_J_James_Bond_3.asm — https://raw.githubusercontent.com/realdmx/c64_6581_sid_players/main/Bjerregaard_Johannes_MON/Bjerregaard_J_James_Bond_3.asm (load $1000, init SETMUS, play PLAY, zp=$fc, header comment 'JB demo music, probably made for Maniacs of Noise')"
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
Demo", both 1989); the two files independently agree on load address $1000,
init/play/musoff entry vectors, and zero-page usage, which is enough to
promote several Tier 3 fields from `TODO` to source-documented and move
`status` to `in-progress`.

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

None done here. No public disassembly, source dump, or format writeup for
this driver was found — CSDb has no standalone release for it (only in-game
usage), consistent with it being an in-house, hand-assembled driver rather
than a distributed product. A future pass would need to disassemble a
representative `.sid` carrying this tag (e.g. Stormlord.sid or Fruitbank.sid)
and trace it through `sidm2-siddump` to get real load-address/init/play/ZP
facts, and to actually confirm or refute the relationship to plain
"Bjerregaard" and to Audiomaster V1 at the byte level.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
recorded, sourced from the cached SIDId entry, this project's local composer
data, and VGMPF's narrative history of Johannes Bjerregaard and Maniacs of
Noise. No runtime fact (memory map, entry points, speed model, data format)
has been confirmed by disassembly; all are honestly `TODO`.

## Sources

See the `sources` array — SIDId's `MoN/Bjerregaard` and `(Audiomaster_V1)`
entries, `knowledge/COVERAGE.md`, local `data/composers/*.json` aggregation
(including per-title cross-checking against VGMPF), VGMPF's Johannes
Bjerregaard and Maniacs of Noise wiki pages, the CSDb Stormlord SID entry and
Bjerregaard's CSDb scener page, and the sibling `mon-deenen.md`/`dmc.md`
cards this one cross-references to rule out conflation.

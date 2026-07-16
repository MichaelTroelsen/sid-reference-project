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
  "released": "TODO: no exact date documented. VGMPF places it after Bjerregaard joined Maniacs of Noise in October 1988 (Charles Deenen gave him Turbo Ass and requested a faster driver); its earliest known use is the game Stormlord, released 1989 by Hewson/Maniacs of Noise.",
  "status": "stub",
  "platform": "Native C64 in-house replay driver, hand-coded in 6502 assembly using Turbo Ass (the same assembler Deenen used at Maniacs of Noise) — NOT a GUI editor/tracker. Per VGMPF: 'From thereon, Bjerregaard arranged by typing hexadecimal numbers,' i.e. composers wrote note/label data directly rather than using a pattern-grid editor.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO: VGMPF notes the driver was tuned to a 441 Hz reference pitch 'except on Fruitbank' — a tuning detail, not a speed/timing fact; no CIA-vs-raster or multispeed information is documented.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO: no conventional pattern/table format documented — VGMPF describes the workflow as typing hex numbers/labels directly, similar in spirit to MoN/Deenen's driver (see mon-deenen.md)",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["audiomaster-v1"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is Johannes Bjerregaard's THIRD and final personal driver, per VGMPF's career chronology: an early ripped David Whittaker driver used for The Vikings (1987, pre-personal-driver ripped work, not one of his own three); his own first driver (Tiger Mission, 1987); his second own driver (1987-88, evolved from Rob Hubbard's and programmed via his own 'DMC Edit'/Profi-Ass 64); and THIS, his third driver — after joining Maniacs of Noise in October 1988, Charles Deenen supplied Turbo Ass and requested a faster driver, which Bjerregaard wrote himself rather than adopting Deenen's own ('MoN/Bjerregaard' — see mon-deenen.md's quirks for the explicit VGMPF quote that he declined Deenen's driver).",
    "DIRECT FILE-LEVEL EVIDENCE this is a genuinely different SIDId signature from the plain 'Bjerregaard' raw tag (65 files, researched as a separate family in this same batch), not the same routine under two export shapes: in this project's own data/composers/johannes-bjerregaard.json, the 15 files by Bjerregaard himself tagged 'MoN/Bjerregaard' are exactly the titles VGMPF attributes to his MoN-era Turbo Ass driver — Stormlord, Stormlord V2, Fruitbank, Flimbo's Quest (main), plus Kamikaze/Music Demo/Myth Demo/Slimbo4/STII8/Street Cred Boxing/Alf TV Theme/Deel 1/Deel 2/Domino Dancing/Test — while his 61 files tagged plain 'Bjerregaard' are dominated by his earlier 1987-88 Danish Music Company demo-scene output (multiple 'DMC Demo IV' tunes, cover versions like Billie Jean, Blue Monday '88, Depeche Mode Songs) consistent with his second, pre-MoN driver. Two different SIDId byte signatures, two different eras of his own driver work — kept as SEPARATE cards, not merged, per this evidence. (Contrast the CyberTracker/CyberTracker_exe case, which was confirmed to be one engine under two export shapes — no equivalent confirmation exists here.)",
    "Composer concentration is the opposite of the plain 'Bjerregaard' tag: 77 files across 15 composers, and Bjerregaard himself is NOT the top user (15 files, 19%) — Fozzie leads with 17 (22%), then ELA 9, Dokken 6, Joachim Wijnhoven 6, Widding Roy Johan 5, Drumtex 4, Rage 4, Zipper 3, Lynx 2, Scroll 2, and five more with 1 each. This spread indicates the driver circulated and was reused within the Scandinavian demoscene after its commercial debut, much like Rob Hubbard's driver did — not a routine that stayed personal (compare the plain 'Bjerregaard' tag, 94% himself).",
    "SIDId documents a direct lineage from THIS driver to a separate, later editor: the '(Audiomaster_V1)' entry (Ruben Spaans/Scroll, 1989, Megastyle, CSDb release id 7071) has the comment 'Editor that is based on the player of /MUSICIANS/B/Bjerregaard_Johannes/Stormlord.sid' — and Stormlord.sid is itself tagged 'MoN/Bjerregaard' in this dataset. Recorded as a `shares_routine_with` edge to the (not-yet-carded) 'audiomaster-v1' id — a genuine lineage claim from SIDId's own data, kept as the non-directional 'shares_routine_with' type since no card exists yet to host a directional 'derives_from' the other way.",
    "No standalone CSDb release exists for the driver itself, mirroring MoN/Deenen. Bjerregaard's CSDb scener page (id 8138) lists a tool credit for a 'Bjerregaard DMC Editor' (2012, released under his own group Danish Music Company), but that is a much later item and its relationship (if any) to this 1988-89 in-game driver is unconfirmed — not assumed to be the same thing here. Also do not confuse 'DMC' in that later tool's name, or in VGMPF's phrase 'arranged in his DMC Edit' for the SECOND driver, with the unrelated, coincidentally-named 'DMC (Demo Music Creator)' by Brian/Graffity already carded at knowledge/players/dmc.md — 'DMC' here stands for Bjerregaard's own group Danish Music Company, a completely separate lineage.",
    "77 files across 15 composers in this collection (rank 5 by file count per knowledge/COVERAGE.md among uncarded families)."
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
    "cadaver/sidid project (source of sidid.nfo / SIDId data): https://github.com/cadaver/sidid"
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
on top of this driver's Stormlord code, a genuine (if one-sided) lineage claim
recorded as a `shares_routine_with` edge.

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

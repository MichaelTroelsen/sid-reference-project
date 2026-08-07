# SoundBox (MDA)

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "soundbox-mda",
  "name": "SoundBox",
  "aliases": ["SoundBox/MDA", "Soundbox"],
  "authors": ["Tim Kleinert"],
  "released": "1991 (Modern Arts)",
  "status": "stub",
  "platform": "Native C64 tool: Tim Kleinert's own SID synthesizer/sequencer, coded in 6502 assembler. No evidence of a cross-platform editor.",
  "csdb_release": 112576,

  "memory": {
    "load_address": "TODO: no disassembly or public source located",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO: $xxxx",
    "play": "TODO: $xxxx"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Extreme composer concentration: 9 files in this collection are tagged SoundBox/MDA, and 8 of them are by Tim Kleinert himself — the tool's own author — with the 9th co-authored between Kleinert and fellow Modern Arts coder Matthias Hillebrand (source: grep of data/composers/tim-kleinert.json and data/composers/matthias-hillebrand.json). This is the classic signature of a personal/in-house tool rather than a widely published one, not a guess about intent.",
    "Same author (Tim Kleinert) also has a separate SIDId-tagged tool 'Symphonica/MDA' (\"Symphonica Music System V1.0\"), and fellow Modern Arts coder Matthias Hillebrand has his own separately-tagged tools ('Mat/MDA', 'Mat/MDA_Digi'). No source, header, or author statement was found establishing code sharing or derivation between any of these three — treat them as siblings from the same demo group (Modern Arts), NOT an asserted lineage. That is why `edges` is empty here despite the shared group.",
    "CSDb's release page for id 112576 DOES have a downloadable disk image (Soundbox.d64, 359 downloads per the CSDb webservice as of this pass, Status \"Ok\") — the compiled tool binary is a real, obtainable disassembly target. What was NOT found anywhere is 6502 assembler source code or a format manual — do not conflate 'no source archive' with 'no binary to read'.",
    "Confirmed via CSDb webservice (type=release, id=112576) that release 112576 is `Type: C64 Tool` (not a crack) — the SIDId reference-points-at-a-crack trap does NOT apply here; this is the original tool release itself.",
    "'MDA' is confirmed as the group's own short code, not a guess: CSDb webservice returns group ID 1012 with `Name: Modern Arts`, `AKA: The Modern Arts Empire`, `Short: MDA`, Switzerland, founded 1987, dissolved 1991.",
    "CSDb's own catalogued PSID headers for the two SoundBox-authored SIDs directly tied to release 112576 (sid IDs 47511 'Demo Tune' and 47510 'Soundbox (note)', both /MUSICIANS/K/Kleinert_Tim/) show IDENTICAL Load $1000 (4096) / Init $1908 (6408) / Play $1540 (5440) — consistent with both being compiled from the same tool binary. This is PSID header metadata only, not a disassembly fact, so it stays here in quirks rather than in the Tier 3 entry/memory fields, per the extraction template's rule.",
    "CSDb scener record for handle 'Tim' (scener ID 6080, handle ID 6596, credited 'Code' on release 112576) carries trivia: \"Famous Swiss freelancer jazz musician and teacher at the Zurich University of Arts - music department\" — independently corroborates C64-Wiki's identification of Tim Kleinert as a musician rather than just a coder handle."
  ],
  "sources": [
    "SIDId (data/sidid.json byTag['SoundBox/MDA']): author Tim Kleinert, released 1991 Modern Arts, reference https://csdb.dk/release/?id=112576",
    "CSDb release page — https://csdb.dk/release/?id=112576 (title \"Soundbox\", type C64 Tool, credit \"Tim of Modern Arts (Code)\", 1991, group Modern Arts)",
    "CSDb webservice, type=release&id=112576 (queried via scripts/lib/csdb-client.js): Type=\"C64 Tool\", group Short=\"MDA\", UsedSIDs 47511/47510 with matching Load/Init/Play addresses, scener 6080 trivia",
    "C64-Wiki, Tim Kleinert — https://www.c64-wiki.de/wiki/Tim_Kleinert (\"programmierte seinen eigenen Synthesizer und Sequencer für den SID 6581\" — self-taught 6502 assembler as a teenager, programmed his own synthesizer/sequencer for the SID; associates him with Modern Arts)",
    "CSDb scener page — https://csdb.dk/scener/?id=6080 (handle \"Tim\", Switzerland; webservice trivia field confirms jazz-musician/teacher background)",
    "Local dataset: 9 files tagged SoundBox/MDA, all distinct csdb_id values (no duplicate over-count) — 8 in data/composers/tim-kleinert.json (lines with csdb_id 47511 and 7 others), 1 in data/composers/matthias-hillebrand.json (csdb_id 16862, 'Disko', authored 'M. Hillebrand & Tim Kleinert')"
  ]
}
```

## Overview

SoundBox is a native Commodore 64 music tool — a custom SID synthesizer and
sequencer — written by Swiss musician/coder Tim Kleinert and released in 1991
under the Modern Arts label (CSDb group 1012, "The Modern Arts Empire",
Switzerland, active 1987-1991; `Short: MDA` per CSDb's own webservice record,
confirming the alias suffix is the group's short code, not a guess). CSDb's
webservice confirms release 112576 itself is `Type: C64 Tool` — the original
tool, not a crack of it. It appears in this collection almost entirely
through Kleinert's own tunes: 8 of the 9 SoundBox/MDA-tagged files are by him,
with the ninth co-authored with fellow Modern Arts member Matthias Hillebrand
(who has his own, separately-tagged tools, `Mat/MDA` and `Mat/MDA_Digi`).
Kleinert also produced a related but distinctly-tagged tool, `Symphonica/MDA`
("Symphonica Music System V1.0"). Nothing found so far documents whether
SoundBox, Symphonica, and Hillebrand's Mat/MDA share any code — they are best
understood as sibling tools out of the same small demo group rather than a
proven derivation chain. CSDb's scener record for Kleinert's handle "Tim"
independently corroborates C64-Wiki's account of him as a musician (trivia:
"Famous Swiss freelancer jazz musician and teacher at the Zurich University
of Arts").

## Quirks & gotchas

See the `quirks` array. The headline fact is composer concentration: this is
essentially a one-author tool used almost exclusively by its own creator —
strong evidence it never spread beyond Modern Arts, consistent with the
absence of any public source, manual, or format documentation.

## Disassembly notes

None performed here, but a real target exists: CSDb release 112576 has a
downloadable disk image (`Soundbox.d64`, 359 downloads) — no assembler source
or format manual was found, but the compiled binary itself is publicly
obtainable. A future pass could disassemble it directly and trace a
representative SoundBox-tagged `.sid` through `sidm2-siddump`. CSDb's own
catalogue already records matching PSID header addresses (Load $1000 / Init
$1908 / Play $1540) for the two SoundBox-authored SIDs it has indexed under
this release — a useful starting point for that future disassembly, but
header metadata only, so it is recorded in `quirks`, not written into the
Tier 3 `entry`/`memory` fields. Every Tier 3 runtime field here is `TODO`,
not guessed, because that disassembly has not been done yet.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
year, releasing group, CSDb release id, file/composer counts) are confirmed,
from the cached SIDId entry, the CSDb release page, and C64-Wiki's Tim
Kleinert biography. No memory map, entry point, or data format has been
extracted — not because there is nothing to disassemble (CSDb's `Soundbox.d64`
disk image is publicly downloadable), but because that disassembly has not
been attempted in this pass.

## Sources

See the `sources` array — the cached SIDId entry (`SoundBox/MDA`), the CSDb
release page and webservice record (https://csdb.dk/release/?id=112576),
CSDb's scener record for handle "Tim" (https://csdb.dk/scener/?id=6080),
C64-Wiki's Tim Kleinert page, and this project's own composer-file
aggregation (census, not sample — all 9 tagged files checked).

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
    "CSDb's release page for id 112576 DOES have a downloadable disk image (Soundbox.d64, 356 downloads per the CSDb webservice) — the compiled tool binary is a real, obtainable disassembly target. What was NOT found anywhere is 6502 assembler source code or a format manual — do not conflate 'no source archive' with 'no binary to read'."
  ],
  "sources": [
    "SIDId (data/sidid.json byTag['SoundBox/MDA']): author Tim Kleinert, released 1991 Modern Arts, reference https://csdb.dk/release/?id=112576",
    "CSDb release page — https://csdb.dk/release/?id=112576 (title \"Soundbox\", type C64 Tool, credit \"Tim of Modern Arts (Code)\", 1991, group Modern Arts)",
    "C64-Wiki, Tim Kleinert — https://www.c64-wiki.de/wiki/Tim_Kleinert (\"programmierte seinen eigenen Synthesizer und Sequencer für den SID 6581\" — self-taught 6502 assembler as a teenager, programmed his own synthesizer/sequencer for the SID; associates him with Modern Arts)",
    "Local dataset: 9 files tagged SoundBox/MDA (see knowledge/COVERAGE.md, rank #20 of uncarded families) — 8 in data/composers/tim-kleinert.json, 1 in data/composers/matthias-hillebrand.json"
  ]
}
```

## Overview

SoundBox is a native Commodore 64 music tool — a custom SID synthesizer and
sequencer — written by Swiss musician/coder Tim Kleinert and released in 1991
under the Modern Arts label. It appears in this collection almost entirely
through Kleinert's own tunes: 8 of the 9 SoundBox/MDA-tagged files are by him,
with the ninth co-authored with fellow Modern Arts member Matthias Hillebrand
(who has his own, separately-tagged tools, `Mat/MDA` and `Mat/MDA_Digi`).
Kleinert also produced a related but distinctly-tagged tool, `Symphonica/MDA`
("Symphonica Music System V1.0"). Nothing found so far documents whether
SoundBox, Symphonica, and Hillebrand's Mat/MDA share any code — they are best
understood as sibling tools out of the same small demo group rather than a
proven derivation chain.

## Quirks & gotchas

See the `quirks` array. The headline fact is composer concentration: this is
essentially a one-author tool used almost exclusively by its own creator —
strong evidence it never spread beyond Modern Arts, consistent with the
absence of any public source, manual, or format documentation.

## Disassembly notes

None performed here, but a real target exists: CSDb release 112576 has a
downloadable disk image (`Soundbox.d64`, 356 downloads) — no assembler source
or format manual was found, but the compiled binary itself is publicly
obtainable. A future pass could disassemble it directly and trace a
representative SoundBox-tagged `.sid` through `sidm2-siddump`. Every Tier 3
runtime field here is `TODO`, not guessed, because that disassembly has not
been done yet.

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
release page (https://csdb.dk/release/?id=112576), C64-Wiki's Tim Kleinert
page, and this project's own composer-file aggregation.

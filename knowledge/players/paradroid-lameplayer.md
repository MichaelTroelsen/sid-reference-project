# Lameplayer

```json
{
  "id": "paradroid-lameplayer",
  "name": "Lameplayer",
  "aliases": ["Paradroid/Lameplayer", "Lameplayer V3.02"],
  "authors": ["Ralf Wilhelm (Paradroid)"],
  "released": "1990 (SIDId) or March 1991 (CSDb release date for 'Lameplayer V3.02'; a comment on the CSDb page notes 'Lameplayer V0.99 also mentions the same date', implying an earlier V0.99 existed) — kept as TODO-flagged uncertainty rather than picking one",
  "status": "stub",
  "platform": "Native C64 tool (data/players.json: platform 'Native / C64 emulator'; CSDb catalogues release 101595 as type 'C64 Tool')",
  "csdb_release": 101595,

  "memory": {
    "load_address": "TODO: $xxxx — not disassembled",
    "zero_page": "DeepSID players.json field 'zero_pages': \"3 bytes ($FA-$FC)\" — cited as-is, not independently verified via disassembly",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "TODO: $xxxx — not disassembled",
    "play": "TODO: $xxxx — not disassembled"
  },
  "speed": "TODO: not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "In this project's local dataset (data/composers/paradroid.json), all 21 files tagged Paradroid/Lameplayer belong to ONE composer: Paradroid himself (Ralf Wilhelm, Germany). 100% concentration on the tool's own author — despite being released publicly (CSDb 101595, 321 downloads of the zip), in this collection it reads as a personal routine that never got adopted by other musicians.",
    "DeepSID's curated players.json entry (title 'Lameplayer') notes: 'It can convert VoiceTracker songs to its own format.' That is an import/conversion feature of the editor, not evidence the replay routine itself derives from VoiceTracker's code — no `derives_from` edge is asserted from this alone.",
    "Same author (Paradroid) also released a second, separately-tagged tool: 'Paradroid/HubbardEd' aka 'The Rob Hubbard Soundeditor V1.3' (CSDb release 101594, May 1991) — bundled example songs are stated conversions/derivatives of real Rob Hubbard tunes (Bangkok Knights, I-Ball, Monty on the Run, Flash Gordon, Thanatos) at 76-90% similarity per the CSDb page. This is a DIFFERENT Player-ID family from Lameplayer; no evidence was found that the two tools share a replay routine, so they are documented separately and no edge is asserted here.",
    "Release-date conflict, left unresolved rather than guessed: SIDId's sidid.nfo records 'released: 1990' for this tag, but the CSDb release page for 'Lameplayer V3.02' (id 101595) is dated March 1991, with a page comment noting an earlier 'Lameplayer V0.99' carries the same March-1991 date — suggesting a version history (V0.99 -> V3.02) that isn't fully pinned down by either source.",
    "The one runtime fact available (zero_pages '3 bytes ($FA-$FC)') comes from DeepSID's own curated players.json, not from any disassembly done for this card — recorded as a citation only."
  ],
  "sources": [
    "sidid:Paradroid/Lameplayer (author 'Paradroid', released '1990', reference https://csdb.dk/release/?id=101595) — data/sidid.json",
    "CSDb release 101595, 'Lameplayer V3.02': https://csdb.dk/release/?id=101595 (type C64 Tool, code+music by Paradroid of Online/Producing Cracking Service, dated March 1991, download Lameplayer.3.02-PAD.zip, 321 downloads, no source code linked; page comment flags a V0.99 with the same date)",
    "CSDb release 101594, sibling tool 'The Rob Hubbard Soundeditor V1.3' by the same author: https://csdb.dk/release/?id=101594 (May 1991, download Hubbard.Edit.1.3-PAD.zip, 377 downloads)",
    "DeepSID players.json curated entry 'Lameplayer' (developer Paradroid, csdb_id 101595, start_year 1991, platform 'Native / C64 emulator', description 'It can convert VoiceTracker songs to its own format.', zero_pages '3 bytes ($FA-$FC)') — data/players.json",
    "CSDb scener page for Paradroid: https://csdb.dk/scener/?id=1020 (Germany, active since 1986 per CSDb, groups include Online / Producing Cracking Service among others; the real name 'Ralf Wilhelm' comes from this project's own composer profile, not from this CSDb page) — cross-checked against data/composers/paradroid.json profile",
    "Local dataset: 21 files tagged Paradroid/Lameplayer, all by composer Paradroid (see knowledge/COVERAGE.md and data/composers/paradroid.json)"
  ]
}
```

## Overview

Lameplayer is a native Commodore 64 music editor/tool by Ralf Wilhelm
("Paradroid", of Online / Producing Cracking Service, Germany), released as
"Lameplayer V3.02" (CSDb release 101595). SIDId dates it 1990; the CSDb
release page itself is dated March 1991 and notes an earlier V0.99 carrying
the same date, so the exact version history is left as an open question here
rather than guessed. DeepSID's curated `players.json` entry adds one useful
note — it can convert VoiceTracker songs to its own format — and one
uncorroborated runtime fact (`zero_pages: 3 bytes ($FA-$FC)`). In this
project's local HVSC-derived dataset it is a small, single-composer family:
all 21 tagged files belong to Paradroid himself, making this, despite its
public CSDb release, effectively a personal tool in practice.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) 100% composer
concentration on the tool's own author; (2) a sibling tool by the same
author, "Paradroid/HubbardEd" (The Rob Hubbard Soundeditor), is a separate
Player-ID family with no confirmed code relationship to Lameplayer, so no
edge is asserted between them; (3) a release-date conflict between SIDId
(1990) and the CSDb release page (March 1991, with a V0.99 note) is recorded
rather than resolved; (4) the only runtime fact available at all is DeepSID's
own unverified `zero_pages` note.

## Disassembly notes

None. No public source or disassembly of Lameplayer was located during this
research pass. A future pass would need to disassemble a representative
Paradroid/Lameplayer-tagged `.sid` (init/play from its PSID header, e.g. one
of Paradroid's 21 files in `data/composers/paradroid.json`) and trace it
through `sidm2-siddump` — that is the only route to real memory-map/entry-
point/format facts here.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
CSDb release, releasing group, the one curated `zero_pages` note, and this
project's local composer-concentration data) are confirmed, from SIDId, the
CSDb release page, and DeepSID's curated `players.json`. Every runtime field
is `TODO` because no disassembly has been done.

## Sources

See the `sources` array — the cached SIDId entry, the CSDb release pages for
Lameplayer (101595) and the same-author sibling tool HubbardEd (101594),
DeepSID's curated `players.json` entry, the CSDb scener page for Paradroid /
Ralf Wilhelm, and this project's local per-composer file aggregate
(`data/composers/paradroid.json`).

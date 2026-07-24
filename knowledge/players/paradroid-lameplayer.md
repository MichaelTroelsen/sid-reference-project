# Lameplayer

```json
{
  "id": "paradroid-lameplayer",
  "name": "Lameplayer",
  "aliases": ["Paradroid/Lameplayer", "Lameplayer V3.02"],
  "authors": ["Ralf Wilhelm (Paradroid)"],
  "released": "1990 (SIDId) / March 1991 (CSDb releases 101595 'Lameplayer V3.02' and 156926 'Lameplayer V0.99' — both CSDb pages carry the same March 1991 date; see Quirks for the conflict)",
  "status": "stub",
  "platform": "Native C64 tool",
  "csdb_release": 101595,

  "memory": {
    "load_address": "TODO: $xxxx — not disassembled",
    "zero_page": "3 bytes ($FA-$FC) — from DeepSID curated players.json; cited as-is, not independently verified via disassembly",
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
    "Closed source — no public source code was located for Lameplayer on GitHub, CSDb, Lemon64, Forum64, Codebase64, or any other site during this research pass (2026-07-24). The only available artifact is the binary .zip/.d64 download from CSDb releases 101595 and 156926.",
    "100% composer concentration on the author: in this project's local dataset (data/composers/paradroid.json), all 21 files tagged Paradroid/Lameplayer belong to Paradroid himself (Ralf Wilhelm, Germany). Despite being released publicly on CSDb (322 downloads of V3.02, 130 of V0.99), it reads as a personal routine in practice — no other composer adopted it.",
    "Release-date conflict: SIDId records 'released: 1990' for this tag, but CSDb release 101595 ('Lameplayer V3.02') is dated March 1991, and CSDb release 156926 ('Lameplayer V0.99') carries the same March 1991 date. The CSDb comment by 'Fred' (25 June 2017) notes this discrepancy — suggesting the V3.02 date may not be accurate, or that both versions were uploaded together. Neither source is definitive; the conflict is recorded here rather than resolved.",
    "DeepSID's curated players.json entry notes Lameplayer 'can convert VoiceTracker songs to its own format.' This is an editor import/conversion feature — no code-level derivation from VoiceTracker is claimed or evidenced, so no derives_from edge is asserted.",
    "Same author (Paradroid) also released 'The Rob Hubbard Soundeditor V1.3' (CSDb 101594, May 1991) — a separate Player-ID family tagged 'Paradroid/HubbardEd'. That tool bundled example songs that are stated conversions of real Rob Hubbard tunes at 76-90% similarity per a CSDb comment by iAN CooG (Aug 2011). No evidence links the two tools' replay routines, so they are documented separately and no edge is asserted.",
    "The only runtime fact available (zero_page: 3 bytes at $FA-$FC) comes from DeepSID's own curated players.json, not from any disassembly done for this card — recorded as a citation only."
  ],
  "sources": [
    "sidid:Paradroid/Lameplayer (author 'Paradroid', released '1990', reference https://csdb.dk/release/?id=101595) — data/sidid.json",
    "CSDb release 101595, 'Lameplayer V3.02': https://csdb.dk/release/?id=101595 (type C64 Tool, code+music by Paradroid of Online/Producing Cracking Service, dated March 1991, download Lameplayer.3.02-PAD.zip, 322 downloads, no source code linked)",
    "CSDb release 156926, 'Lameplayer V0.99': https://csdb.dk/release/?id=156926 (type C64 Tool, code by Paradroid, dated March 1991, download in D64 format, 130 downloads, no source code linked)",
    "CSDb release 101594, sibling tool 'The Rob Hubbard Soundeditor V1.3': https://csdb.dk/release/?id=101594 (May 1991, code by Paradroid, 377 downloads, example songs are Hubbard conversions per iAN CooG comment)",
    "CSDb scener page for Paradroid: https://csdb.dk/scener/?id=1020 (Ralf Wilhelm, Germany, coder/cracker, groups include Online and Producing Cracking Service, active 1986-1994)",
    "DeepSID players.json curated entry 'Lameplayer' (developer Paradroid, csdb_id 101595, start_year 1991, platform 'Native / C64 emulator', description 'It can convert VoiceTracker songs to its own format.', zero_pages '3 bytes ($FA-$FC)') — data/players.json",
    "Local dataset: 21 files tagged Paradroid/Lameplayer, all by composer Paradroid (see data/composers/paradroid.json)",
    "Web search (2026-07-24): no public source code, documentation, or discussion found on GitHub, Lemon64, Forum64, or Codebase64 for Lameplayer"
  ]
}
```

## Overview

Lameplayer is a native Commodore 64 music editor/tool by Ralf Wilhelm
("Paradroid", of Online / Producing Cracking Service, Germany), released as
"Lameplayer V3.02" (CSDb release 101595, March 1991) with an earlier "Lameplayer
V0.99" (CSDb release 156926, same date). SIDId dates it 1990, creating a minor
date conflict (see Quirks). DeepSID's curated entry adds one useful note — it
can convert VoiceTracker songs to its own format — and one uncorroborated
runtime fact (`zero_pages: 3 bytes ($FA-$FC)`).

In this project's local HVSC-derived dataset it is a small, single-composer
family: all 21 tagged files belong to Paradroid himself, making this, despite
its public CSDb release, effectively a personal tool in practice. No other
composer adopted Lameplayer for their own music.

No public source code, documentation, or format specification was located for
Lameplayer during this research pass (2026-07-24). The only available artifacts
are the binary downloads on CSDb.

## Quirks & gotchas

See the `quirks` array. The load-bearing points:

- **Closed source** — no source code has ever been published. A thorough web
  search (CSDb, Lemon64, Forum64, Codebase64, GitHub) turned up nothing beyond
  the two CSDb binary releases. This puts a hard ceiling on what this card can
  say about the player's internals.
- **100% composer concentration** on the tool's own author — despite being
  publicly released on CSDb, only Paradroid himself ever used it (21 files,
  0 by any other composer). This reads as a personal routine in practice.
- **Sibling tool** — Paradroid also released "The Rob Hubbard Soundeditor V1.3"
  (CSDb 101594, May 1991), a separate Player-ID family ("Paradroid/HubbardEd")
  with no confirmed code relationship to Lameplayer. No edge is asserted.
- **Date conflict** between SIDId (1990) and CSDb (March 1991 for both V0.99
  and V3.02) — recorded rather than resolved.
- **The only runtime fact** (`zero_page: $FA-$FC`) is from DeepSID's curated
  `players.json`, not from any disassembly.

## Disassembly notes

None. No public source or disassembly of Lameplayer was located during this
research pass. A future pass would need to disassemble a representative
Paradroid/Lameplayer-tagged `.sid` (init/play from its PSID header, e.g. one
of Paradroid's 21 files in `data/composers/paradroid.json`) and trace it
through `sidm2-siddump` — that is the only route to real memory-map/entry-
point/format facts here.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
CSDb releases, releasing group, the one curated `zero_pages` note, and this
project's local composer-concentration data) are confirmed, from SIDId, the
CSDb release pages, and DeepSID's curated `players.json`. Every runtime field
is `TODO` because no disassembly has been done and no public source exists.

## Sources

See the `sources` array — the cached SIDId entry, the CSDb release pages for
Lameplayer V3.02 (101595) and V0.99 (156926), the same-author sibling tool
HubbardEd (101594), the CSDb scener page for Paradroid / Ralf Wilhelm, DeepSID's
curated `players.json` entry, this project's local per-composer file aggregate
(`data/composers/paradroid.json`), and a web search confirming no public source
code or documentation exists elsewhere.

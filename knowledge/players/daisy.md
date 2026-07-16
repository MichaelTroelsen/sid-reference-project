# D.A.I.S.Y.

```json
{
  "id": "daisy",
  "name": "D.A.I.S.Y.",
  "aliases": ["D.A.I.S.Y."],
  "authors": ["Computertechnik Rosenplänter (Göttingen, West Germany)"],
  "released": "1987",
  "status": "stub",
  "platform": "NOT a music tracker. D.A.I.S.Y. (\"Digital Audio Interface SYstem\") was a commercial 4-bit hardware audio digitizer/sampler cartridge for the C64/C128 expansion port (38 kHz sampling ADC), sold by Computertechnik Rosenplänter of Göttingen in 1987. The 'player' tag in this dataset identifies the standalone playback routine bundled with the digitizer's software so that recorded samples could be replayed on any C64/C128 without the hardware module attached.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per file — CSDb SID entries observed at $0A5A (Patrick Becher tunes) and $0A40 (Hucky tune), so there is no single canonical load address; each release appears hand-relocated rather than sharing one fixed binary layout",
    "zero_page": "TODO: no public disassembly found",
    "layout": "TODO: no public disassembly found"
  },
  "entry": {
    "init": "TODO: per-file (PSID header); observed identical to load address in the two CSDb entries checked ($0A5A / $0A40), consistent with a self-relocating/self-installing routine, not confirmed as a fixed constant",
    "play": "TODO: CSDb lists Play Address $0000 on the entries checked (e.g. csdb.dk/sid/?id=4618, csdb.dk/sid/?id=61778) — suggests the routine installs its own IRQ during init rather than exposing a separate PSID play vector, typical of raw digi-sample players of this era; not independently confirmed by disassembly"
  },
  "speed": "TODO: no public disassembly found",

  "data_format": {
    "order_list": "TODO: likely not applicable — this is a raw digitized-sample player, not a pattern/sequence music format",
    "patterns": "TODO: likely not applicable, see order_list",
    "instruments": "TODO: likely not applicable, see order_list",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: likely not applicable — no evidence this is a music engine with pattern/effect commands",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is a hardware product, not a tracker/editor. The HVSC/DeepSID 'player' tag 'D.A.I.S.Y.' groups files that use the digitizer's sample-playback routine, not a composed-music engine — expect the tagged .sid files to be digitized/sampled audio clips, not pattern-based tunes. Titles in this dataset (e.g. 'Computersound', 'Digi Guitar', 'Drumming Special', 'Squaler') read as sample/demo names rather than song titles, consistent with this.",
    "No entry in SIDId's sidid.nfo and no entry in this project's curated data/players.json — this family was entirely uncarded/unidentified beyond the raw HVSC player tag before this card.",
    "Composer concentration is small and geographically tight: 30 files across only 6 composers in the local dataset (Patrick Becher/\"Bug\" 13, ISM/Dirk 6, Twilight 6, Hucky 3, Jan Albartus 1, Sascha Nagie 1) — source: this project's data/composers/*.json aggregation. Five of six are credited from Germany (data/composers profiles), matching the digitizer's West German origin (Computertechnik Rosenplänter, Göttingen); Jan Albartus is the one Netherlands-credited outlier. Small, regionally clustered usage is exactly the signal expected for a real but commercially limited hardware add-on rather than a widely-adopted tool.",
    "Two CSDb SID entries checked show Load Address = Init Address ($0A5A and $0A40, differing between composers) and Play Address = $0000 — consistent with a self-installing IRQ player with no distinct PSID play vector, but this is PSID-header observation only, not a disassembly, and was checked on only 2 of the 30 files.",
    "No public source code, disassembly, or format documentation was found for the playback routine itself; only the hardware product (digitizer) is documented, on German-language retro-hardware sites."
  ],
  "sources": [
    "C64-Wiki (German): Audiodigitizer overview, D.A.I.S.Y. section — https://www.c64-wiki.de/wiki/Audiodigitizer (manufacturer Computertechnik Rosenplänter, Göttingen, 1987; \"D.A.I.S.Y.\" = \"Digital Audio Interface SYstem\"; 4-bit ADC, 38 kHz; samples playable on any C64/C128 without the module)",
    "CSDb search for 'D.A.I.S.Y.': https://csdb.dk/search/?search=D.A.I.S.Y. (no dedicated release/tool page found under this exact name)",
    "CSDb SID entries checked for header fields: https://csdb.dk/sid/?id=4615 (Computersound, Patrick Becher), https://csdb.dk/sid/?id=4618 (Digi Guitar, Patrick Becher, load/init $0A5A, play $0000), https://csdb.dk/sid/?id=61778 (Hells Bells tune 3, Hucky, load/init $0A40, play $0000), https://csdb.dk/sid/?id=61780 (Heino-Mix, Hucky)",
    "Local dataset: 30 files tagged 'D.A.I.S.Y.' across 6 composers — see knowledge/COVERAGE.md (rank 15, 30 files) and data/composers/*.json",
    "Checked and NOT found: data/sidid.json byTag (no D.A.I.S.Y. entry), data/players.json (no D.A.I.S.Y. entry) — confirming this had no prior curated identification"
  ]
}
```

## Overview

D.A.I.S.Y. — "Digital Audio Interface SYstem" — was a commercial 4-bit audio
digitizer/sampler cartridge for the C64/C128 expansion port, sold in 1987 by
Computertechnik Rosenplänter of Göttingen, West Germany, at roughly 180 DM
(source: [C64-Wiki's Audiodigitizer article](https://www.c64-wiki.de/wiki/Audiodigitizer)).
It is **not a music tracker**. The `D.A.I.S.Y.` tag seen in this dataset's HVSC
files identifies the standalone playback routine that shipped with the
digitizer's software, so recorded samples could be replayed on a plain
C64/C128 without the hardware attached. In this project's local data it
covers 30 files across 6 composers (`knowledge/COVERAGE.md` rank 15),
concentrated among German scene musicians of the late 1980s — Patrick Becher
("Bug"), ISM/Dirk, Twilight, Hucky, Sascha Nagie — plus one Dutch composer,
Jan Albartus. That geography and small, tight composer set line up with a
real but commercially limited West German hardware product rather than a
widely distributed editor. It has no entry in SIDId's `sidid.nfo` and no
entry in this project's curated `data/players.json`, so this card is the
first identification of the family beyond the raw player tag.

## Quirks & gotchas

- Treat files tagged `D.A.I.S.Y.` as **digitized/sampled audio clips**, not
  composed pattern-based tunes — the routine's job is sample playback, not
  music sequencing. Track titles in the dataset ("Computersound", "Digi
  Guitar", "Drumming Special") read as sample-demo names, not song titles.
- The two CSDb SID entries inspected both show `Load Address == Init Address`
  and `Play Address = $0000` — but the load/init address itself differs
  between composers ($0A5A vs $0A40), so there is no single fixed player load
  address to record; each captured tune looks hand-relocated rather than
  sharing one binary.
- No public source, disassembly, or software-side documentation of the
  playback routine was found — only the hardware product is documented, and
  only on German-language sites. A future pass would need to disassemble a
  representative `.sid` from scratch; there is no source to start from.

## Disassembly notes

None performed. No public source or prior disassembly exists for the
playback routine to build on; only two files' PSID headers were inspected via
CSDb (see `sources`), not a real trace or reconstruction.

## Verification

**Not verified — `status: stub`.** This card is Tier 1 (local dataset
aggregation) + Tier 2 (web/CSDb provenance for the hardware product and two
PSID-header spot-checks) only. Every Tier 3 runtime field is honestly `TODO`:
no memory map, entry points, or data format were reverse-engineered, and none
should be guessed for what looks like a raw sample-playback routine with no
surviving public documentation.

## Sources

See the `sources` array — C64-Wiki's Audiodigitizer article (manufacturer,
year, acronym expansion), CSDb search and four spot-checked SID entries, and
this project's local dataset (`knowledge/COVERAGE.md`, `data/composers/*.json`,
`data/sidid.json`, `data/players.json`).

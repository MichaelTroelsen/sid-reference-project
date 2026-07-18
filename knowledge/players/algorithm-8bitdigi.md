# Algorithm/8bitDigi

```json
{
  "id": "algorithm-8bitdigi",
  "name": "Algorithm/8bitDigi",
  "aliases": ["Algorithm/8bitDigi"],
  "authors": ["Naveed Khugiani (Algorithm)"],
  "released": "TODO: no explicit tool-release year in SIDId",
  "status": "stub",
  "platform": "Native C64. Appears to be a personal audio-technique routine of Naveed Khugiani's, a sibling to his other fingerprinted technique tag [[algorithm-frodigi]] (Algorithm/Frodigi) — not a packaged, distributed tool; no dedicated CSDb tool/release entry was found under this name.",
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
    "SIDId's own comment for this tag reads 'Uses the same technique to play 8-bit samples as in OxyMod/THCM.' (data/sidid.json byTag['Algorithm/8bitDigi']) — a direct, sourced statement that this routine uses the SAME 8-bit sample technique already documented on the [[oxymod4bit-thcm]] card (waveform $00 + test-bit + frequency-register writes, discovered by Otto Järvinen/SounDemoN in 2006, per OxyMod/THCM's own SIDId comment). This is a TECHNIQUE-level claim, not a code-sharing/authorship claim — Algorithm (Naveed Khugiani, UK) and THCM (Uwe Anfang, Germany, Oxyron) are different, unrelated people, so no `shares_routine_with` or `derives_from` edge is asserted here; the technique itself is documented as a known, independently-reusable trick (see [[oxymod4bit-thcm]]'s own sources on the technique's origin/prior art), and multiple unrelated coders using the same publicly-described trick is not the same as one player deriving from another's code.",
    "Sibling tag: 'Algorithm/8bitDigi' is a SEPARATE SIDId signature from 'Algorithm/Frodigi' (already carded — [[algorithm-frodigi]], 'uses the free running SID oscillators... and a master volume'), despite the same author. SIDId's own comments describe DIFFERENT mechanisms for the two tags (free-running-oscillator DAC vs. the waveform-$00/test-bit/frequency-register technique), so they are read as two distinct routines by the same person, not aliases of each other. No `shares_routine_with` edge is asserted between the two Algorithm tags either, absent a source stating they share code.",
    "100% single-composer concentration: both locally-tagged files ('Boing Boom Tschak', 'Channels') belong to composer 'naveed-khugiani' (Algorithm) alone (data/composers/naveed-khugiani.json) — consistent with [[algorithm-frodigi]]'s own finding that Algorithm produces multiple personal one-off audio-technique demos rather than packaged tools.",
    "CSDb's scener profile for Algorithm (id 10879; groups Algotech [founder], ex-Offence, ex-Onslaught, ex-svenonacid; country United Kingdom) independently lists several one-off PCM/DAC-technique productions by the same person (SSDPCM2, VF-SSDPCM1, KAOS 64, Bad Apple 64, spadpcm1, Audiovq Test), corroborating that this is one more entry in a personal technique-demo series, not a released tool — same reading as the Frodigi sibling card."
  ],
  "sources": [
    "SIDId sidid.nfo (author + 'same technique as OxyMod/THCM' comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['Algorithm/8bitDigi']",
    "knowledge/players/oxymod4bit-thcm.md — the OxyMod/THCM card documenting the referenced 8-bit sample technique and its own sourced origin (SounDemoN 2006 / Chris Brenner 1993 prior art)",
    "knowledge/players/algorithm-frodigi.md — the sibling Algorithm tag (Frodigi), same author, different documented mechanism",
    "Local dataset: 2 files tagged Algorithm/8bitDigi, both by composer 'naveed-khugiani' — data/composers/naveed-khugiani.json; see knowledge/COVERAGE.md rank 114",
    "CSDb scener profile, Algorithm / Naveed Khugiani (groups Algotech/Offence/Onslaught/svenonacid, UK): https://csdb.dk/scener/?id=10879"
  ]
}
```

## Overview

Algorithm/8bitDigi is a second SIDId-fingerprinted audio-technique tag by
**Naveed Khugiani**, handle **Algorithm** (UK), sibling to his already-carded
[[algorithm-frodigi]] tag. SIDId's comment for this tag is unusually specific:
it states the routine "uses the same technique to play 8-bit samples as in
OxyMod/THCM" — directly naming the technique already documented on the
[[oxymod4bit-thcm]] card (SounDemoN's 2006 waveform-$00/test-bit/frequency-
register trick). This is read as independent reuse of a known, publicly
describable technique by a different, unrelated coder — not code lineage — so
no graph edge is asserted. Both locally-tagged files are Algorithm's own,
consistent with his pattern (per the Frodigi card) of producing multiple
personal one-off audio-technique demos.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId directly names the shared
*technique* with OxyMod/THCM — sourced, but deliberately not turned into a
`shares_routine_with`/`derives_from` edge, since the two authors are unrelated
people independently using the same known trick; (2) this is a genuinely
different routine from the Frodigi sibling tag, per SIDId's own differing
mechanism descriptions; (3) 100% single-composer usage, consistent with
Algorithm's broader pattern of personal technique demos.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/naveed-khugiani.json`, SIDId,
the sibling `algorithm-frodigi` and `oxymod4bit-thcm` cards, and one CSDb
scener-page lookup. `status: stub`.

## Sources

See the `sources` array — SIDId, the two sibling player cards, the local
composer aggregation, and CSDb.

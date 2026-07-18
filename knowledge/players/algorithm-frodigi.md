# Free Running Oscillator Digi (Algorithm/Frodigi)

```json
{
  "id": "algorithm-frodigi",
  "name": "Free Running Oscillator Digi (Algorithm/Frodigi)",
  "aliases": ["Algorithm/Frodigi"],
  "authors": ["Naveed Khugiani (Algorithm)"],
  "released": "TODO: no tool-release date documented; earliest/sampled local file (FRODIGI, CSDb sid id 50332) is dated 2014 Onslaught",
  "status": "stub",
  "platform": "Native C64. Appears to be a personal audio-technique routine embedded in Naveed Khugiani's own \"Frodigi\" series of SID compositions (FRODIGI, FRODIGI 2, FRODIGI 3, ...) rather than a packaged, distributed tool — no dedicated CSDb tool/release entry was found under this name.",
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
    "Unlike most _Digi-tagged personal routines in this batch, SIDId's own comment field for this tag is unusually informative and actually describes a playback mechanism (not just a bare author line): 'Uses the free running sid oscillators on the sid chip in 3 channels and a master volume to recreate the audio.' (data/sidid.json, tag 'Algorithm/Frodigi'). This is SIDId's own documentation of the technique, not this project's disassembly/register-trace — no frame-by-frame confirmation has been performed here, so Tier 3 fields remain TODO, but the mechanism claim itself is directly sourced (not guessed).",
    "Extremely concentrated, single-composer usage: 7 files, all by Naveed Khugiani (Algorithm) himself (data/composers/naveed-khugiani.json), and the files are literally titled FRODIGI, FRODIGI 2, FRODIGI 3, etc. — reading as a personal technique-demo series, not a tool released for others to use.",
    "CSDb's scener profile for Algorithm (id 10879; groups Algotech [founder], ex-Offence, ex-Onslaught, ex-svenonacid; country United Kingdom) lists the 'Frodigi' series alongside many other one-off audio/PCM-technique productions by the same person (e.g. 'SSDPCM2 V3 - 16khz', 'VF-SSDPCM1 Super Plus', 'KAOS 64', 'Bad Apple 64', 'Channels - spadpcm1', 'Audiovq Test') — corroborating that Algorithm is a real, prolific individual developer of one-off SID audio-playback techniques, consistent with Frodigi being one of several personal PCM/DAC-technique demos rather than a single packaged product.",
    "Sampled PSID header for 'FRODIGI' (CSDb sid id 50332): load/init address $0800, 2014 Onslaught, SID model 8580 — cited only as this one file's own metadata, not a documented tool-release date. The page's reported play address ($0000) is not trusted as fact (the same artifact recurs across every CSDb sid-entry page fetched in this research batch and is not distinguishable from a fetch/parsing quirk vs a real header value) and is deliberately left out of the `entry` field."
  ],
  "sources": [
    "SIDId sidid.nfo (name, author, and mechanism comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag.\"Algorithm/Frodigi\"",
    "Local dataset: 7 files tagged 'Algorithm/Frodigi', all under composer Naveed Khugiani — data/composers/naveed-khugiani.json",
    "CSDb scener profile, Algorithm / Naveed Khugiani (groups Algotech/Offence/Onslaught/svenonacid, UK, Frodigi series + other audio-technique productions listed): https://csdb.dk/scener/?id=10879",
    "CSDb SID-file entry 'FRODIGI' (Naveed Khugiani, 2014 Onslaught, PSID load/init $0800, 8580/PAL): https://csdb.dk/sid/?id=50332"
  ]
}
```

## Overview

Free Running Oscillator Digi (local/SIDId tag `Algorithm/Frodigi`) is a personal
SID audio-playback technique by **Naveed Khugiani**, handle **Algorithm**, a UK
scener (founder of Algotech; ex-Offence, ex-Onslaught, ex-svenonacid). Unlike
most tiny `_Digi` tags in this batch, SIDId's own index carries a real
technical description of the mechanism — "uses the free running SID
oscillators on the SID chip in 3 channels and a master volume to recreate the
audio" — rather than just an author name. It appears in only 7 files locally,
all composed by Algorithm himself, titled FRODIGI/FRODIGI 2/FRODIGI 3/etc.,
consistent with a personal technique-demo series rather than a distributed
tool. CSDb's scener profile for Algorithm independently lists several other
one-off PCM/DAC-technique productions by the same person, supporting that
reading.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's comment field is unusually
substantive here (a real mechanism description, not just an author line) —
still not verified by this project's own disassembly/trace; (2) 100% single-
composer usage across all 7 files; (3) CSDb corroborates Algorithm as a
prolific individual developer of similar one-off audio techniques, supporting
that this is a personal series, not a packaged tool.

## Disassembly notes

None done here. No public source or CSDb release/tool entry was found to seed
runtime facts from — all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity and the mechanism
description are SIDId-sourced (cited above), composer concentration and
lineage-adjacent context from CSDb; no runtime fact has been disassembled or
traced through `sidm2-siddump`.

## Sources

See the `sources` array — SIDId's sidid.nfo, local composer-data aggregation,
CSDb's Algorithm scener profile, and one sampled CSDb SID-file entry (PSID
header only, not a disassembly).

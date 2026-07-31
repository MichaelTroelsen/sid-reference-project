# AlgoVQTracker

```json
{
  "id": "algovqtracker",
  "name": "AlgoVQTracker",
  "aliases": ["AlgoVQTracker_V1"],
  "authors": ["Naveed Khugiani (Algorithm)"],
  "released": "No dedicated tool-release date exists (no CSDb release page for 'AlgoVQTracker' itself — CSDb site search for the name returns zero results, confirmed https://csdb.dk/search/?search=AlgoVQTracker). Census of both locally-tagged files (complete, 2/2): earliest attested use is 'Kaos 64', CSDb sid id 55064, PSID Released field '2017 Algotech', used in release 'KAOS 64' (CSDb release id 158726, released 2017-09-06); latest is 'That Can't be in 50k', CSDb sid id 59244, PSID Released field '2020 Algotech', used in release 'TCBI50k' (CSDb release id 198458, released 2020-12-27). Both files carry the same 'AlgoVQTracker_V1' tag across the 2017-2020 span — a single, unversioned personal routine, not a tool with a release history.",
  "status": "stub",
  "platform": "Native C64 player embedded in two self-produced one-file demos, not a released standalone tool/editor. CSDb's release notes for 'TCBI50k' (id 198458, https://csdb.dk/release/?id=198458) describe an 'encoder' with adjustable preprocessing, overlap, and lookahead settings that synthesizes vocal/instrumental audio via sine-wave synthesis in 20ms steps — implying an offline (likely PC-side) encoder producing the compressed data, with the C64 side being the decompressor/player only. No encoder/editor source or binary was found publicly (GitHub search for 'AlgoVQTracker' returns zero repositories, checked https://github.com/search?q=AlgoVQTracker&type=repositories).",
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
    "SIDId's sidid.nfo has an entry with only an AUTHOR line — 'Naveed Khugiani (Algorithm)' — no NAME/reference/comment (deepsid_dl/sidid.nfo).",
    "'DIGI BY NAME IS NOT EVIDENCE': the 'VQ' in the tag name plausibly stands for 'vector quantization', a real technique Naveed Khugiani ('Algorithm') is independently documented as using for graphics/video compression (his own CSDb bio: the handle 'Algorithm' came from 'working on video compression algorithms for a demo', https://csdb.dk/scener/?id=10879). Whether the AUDIO routine specifically implements VQ is still not directly confirmed — CSDb's description of the actual technique (see next quirk) talks about sine-wave synthesis, not literal vector quantization, so this remains an open naming question, not a confirmed fact.",
    "CSDb's release notes for 'TCBI50k' (id 198458) describe the audio technique in Algorithm's own words: an 'encoder' with adjustable preprocessing/overlap/lookahead that synthesizes vocal and instrumental content via sine-wave synthesis in 20ms steps, working best on source material with minimal reverb. This is an offline-encoder + C64-decompressor architecture, consistent with typical PC-side sample-compression tools of this kind (https://csdb.dk/release/?id=198458).",
    "Author Naveed Khugiani, England (b. 1976), CSDb scener 10879, founder of his own one-man-adjacent group 'Algotech' (CSDb group 3038, founded 2001) — both AlgoVQTracker_V1 productions are self-released under that group, with 'Code' as the only credit on 'Kaos 64' (CSDb release 158726). No dedicated CSDb tool/release page for 'AlgoVQTracker' exists — a direct CSDb site search for the name returns zero results.",
    "Census complete: exactly 2 files carry the 'AlgoVQTracker_V1' tag in this collection, both by Naveed Khugiani himself — 'Kaos 64' (CSDb sid entry 55064, PSID Released '2017 Algotech', used in release KAOS 64 / AKA 'vqtrackerdemo', 2017-09-06) and 'That Can't be in 50k' (CSDb sid entry 59244, PSID Released '2020 Algotech', used in release TCBI50k, 2020-12-27). Same 'V1' tag across both — a single unversioned personal routine spanning 3+ years, not evidence of a v1/v2 release chain."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Naveed Khugiani / Algorithm (England, b. 1976), group memberships and handle-story bio: https://csdb.dk/scener/?id=10879",
    "CSDb webservice, sid entry 55064 ('Kaos 64', Released '2017 Algotech', UsedIn release 158726): https://csdb.dk/sid/?id=55064",
    "CSDb webservice, sid entry 59244 ('That Can't be in 50k', Released '2020 Algotech', UsedIn release 198458): https://csdb.dk/sid/?id=59244",
    "CSDb release 158726 'KAOS 64' (AKA 'vqtrackerdemo', released 2017-09-06 by group Algotech, sole credit 'Code' to Algorithm): https://csdb.dk/release/?id=158726",
    "CSDb release 198458 'TCBI50k' (released 2020-12-27 by group Algotech; release notes describe an offline sine-wave-synthesis encoder with adjustable overlap/lookahead): https://csdb.dk/release/?id=198458",
    "CSDb site search for 'AlgoVQTracker' returns zero results (confirms no dedicated tool/release page): https://csdb.dk/search/?search=AlgoVQTracker",
    "GitHub search for 'AlgoVQTracker' returns zero repositories (no public source found): https://github.com/search?q=AlgoVQTracker&type=repositories",
    "Local dataset: 2 files tagged AlgoVQTracker_V1, both by Naveed Khugiani, census complete — see data/composers/naveed-khugiani.json"
  ]
}
```

## Overview

AlgoVQTracker is a personal audio-compression routine by **Naveed Khugiani**
("Algorithm"), a well-documented modern C64 demo coder (England, CSDb scener
10879, founder of the group "Algotech"). It is not a released, titled tool —
a direct CSDb site search for "AlgoVQTracker" returns zero results, and no
public source repo exists. SIDId confirms only the author. CSDb's release
notes for the second production describe the actual technique as an offline
encoder (adjustable preprocessing/overlap/lookahead) doing sine-wave
synthesis of vocal/instrumental audio in 20ms steps — an encoder+decompressor
architecture — but whether "VQ" (vector quantization) is literally what's
used is still unconfirmed; Khugiani's own bio ties the "Algorithm" handle to
video-compression work, not audio. Census of both locally tagged files is
complete: "Kaos 64" (2017, CSDb sid 55064) and "That Can't be in 50k" (2020,
CSDb sid 59244), both self-released one-file demos under his own group,
both by Khugiani himself, both carrying the same unversioned "V1" tag.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the VQ/vector-quantization
association is corroborated for Khugiani's GRAPHICS work, not confirmed for
this AUDIO tool — do not conflate the two without a direct source.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/naveed-khugiani.json`, `data/sidid.json`) plus CSDb
webservice queries (both tagged sid entries and both `UsedIn` release pages,
depth 2-3) and CSDb/GitHub site-search checks confirming no dedicated tool
page or source repo exists. Both of the family's 2 tagged files were
censused directly — no sampling. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page, CSDb webservice
sid entries 55064 and 59244, CSDb release pages 158726 and 198458, CSDb and
GitHub search-result checks, and the local composer aggregation.

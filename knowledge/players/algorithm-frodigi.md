# Free Running Oscillator Digi (Algorithm/Frodigi)

```json
{
  "id": "algorithm-frodigi",
  "name": "Free Running Oscillator Digi (Algorithm/Frodigi)",
  "aliases": ["Algorithm/Frodigi"],
  "authors": ["Naveed Khugiani (Algorithm)"],
  "released": "TODO: no tool-release date documented (no dedicated CSDb tool/release entry exists for the technique itself). Full census of all 7 tagged files' own CSDb SID entries: earliest is FRODIGI, 2014-05-27, Onslaught (sid id 50332, used in release id 131019); latest is Journey into Space, 2016-11-13, Algotech (sid id 53625, used in release id 151630). These are tune-attestation dates, not a tool release date.",
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
    "Sampled PSID header for 'FRODIGI' (CSDb sid id 50332): load/init address $0800, 2014 Onslaught, SID model 8580 — cited only as this one file's own metadata, not a documented tool-release date. The page's reported play address ($0000) is not trusted as fact (the same artifact recurs across every CSDb sid-entry page fetched in this research batch and is not distinguishable from a fetch/parsing quirk vs a real header value) and is deliberately left out of the `entry` field.",
    "Full census (via CSDb's XML webservice, `type=sid`) of all 7 tagged files confirms one-composer, single-file, no-tool-release reading and gives the complete release chain: FRODIGI (id 50332, 2014-05-27, Onslaught, used-in release 131019), FRODIGI 2 (id 50829, 2014-07-23, Onslaught, release 132003), FRODIGI 3 (id 50828, 2014-09-29, Onslaught, release 133293), FRODIGI 4 tune 1 & tune 2 (ids 50827/50826, both 2014-11-12, Onslaught, sharing one release 134447 as two subtunes of the same one-file demo), Taylortest (id 50825, 2014-11-23, Onslaught, release 134809 — released at the standalone event 'SID Waveform Digi Compo', 2014-11-17 to 12-25), and Journey into Space (id 53625, 2016-11-13, Algotech, release 151630, part of the demo 'Algo Dreams'). No 8th file or earlier date exists among the tagged set; earliest and latest bracket 2014-05-27 to 2016-11-13. Journey into Space is the only one of the 7 not literally titled 'FRODIGI*' and the only one under Algotech (which Algorithm himself founded) rather than Onslaught.",
    "PSID load/init addresses are not uniform across the 7 files (header metadata only, not a disassembly fact, so deliberately excluded from `memory`/`entry`): $0800 for FRODIGI/FRODIGI2/FRODIGI3/FRODIGI4(x2), $0810 for Taylortest, and load $1000/init $C000 (the only file with distinct load vs init addresses) for Journey into Space — consistent with a hand-placed personal routine rather than a fixed-address distributed tool.",
    "Taylortest's CSDb release record shows it was submitted to a standalone scene event, 'SID Waveform Digi Compo' (CSDb event id 2294, 2014-11-17 to 2014-12-25) — the technique had at least one compo outing, not purely private, though this doesn't change the 'no packaged/distributed tool' reading.",
    "A Lemon64 thread ('Frodigi 6/Algorithm (2015)', lemon64.com/forum/viewtopic.php?t=57673) discusses a further 2015 entry in the series not present among this project's 7 tagged files, confirming the series continued beyond the locally-tagged set; the two replies call it 'an interesting experiment' and note it 'doesn't sound very well' — scene reception, not technical documentation. No new provenance fact came from this thread beyond corroborating the personal-experiment reading already established.",
    "SIDId's own tag entry ('Algorithm/Frodigi' in data/sidid.json) carries only `name`, `author`, and `comment` — no `reference` field — so there genuinely is no SIDId-supplied CSDb release id to populate `csdb_release` from; it is confirmed absent, not merely unresearched."
  ],
  "sources": [
    "SIDId sidid.nfo (name, author, and mechanism comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag.\"Algorithm/Frodigi\"",
    "Local dataset: 7 files tagged 'Algorithm/Frodigi', all under composer Naveed Khugiani — data/composers/naveed-khugiani.json (full census, not sampled)",
    "CSDb scener profile, Algorithm / Naveed Khugiani (groups Algotech/Offence/Onslaught/svenonacid, UK, Frodigi series + other audio-technique productions listed): https://csdb.dk/scener/?id=10879",
    "CSDb XML webservice, `type=sid` (censused all 7 tagged files' own entries for Released/UsedIn/PSID header fields): https://csdb.dk/sid/?id=50332, ?id=50829, ?id=50828, ?id=50827, ?id=50826, ?id=53625, ?id=50825",
    "CSDb release entries referenced above (used-in demos): https://csdb.dk/release/?id=131019, ?id=132003, ?id=133293, ?id=134447, ?id=134809, ?id=151630",
    "Lemon64 forum thread, 'Frodigi 6/Algorithm (2015)': https://www.lemon64.com/forum/viewtopic.php?t=57673 (scene reception only, no new provenance)"
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
audio" — rather than just an author name. It appears in only 7 files locally (a full census, not a sample), all
composed by Algorithm himself, spanning 2014-05-27 (FRODIGI, Onslaught) to
2016-11-13 (Journey into Space, Algotech), six of the seven literally titled
FRODIGI/FRODIGI 2/FRODIGI 3/etc. — consistent with a personal technique-demo
series rather than a distributed tool. No dedicated CSDb tool/release entry
or SIDId `reference` id exists for the technique itself, only per-tune
release records for the demos each file appeared in. CSDb's scener profile
for Algorithm independently lists several other one-off PCM/DAC-technique
productions by the same person, supporting that reading, and a Lemon64
thread on a later (2015, untagged) entry in the series treats it as an
"experiment" rather than a tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's comment field is unusually
substantive here (a real mechanism description, not just an author line) —
still not verified by this project's own disassembly/trace; (2) 100% single-
composer usage across all 7 files, confirmed by a full census (not a sample)
of every tagged file's own CSDb entry, bracketing 2014-05-27 to 2016-11-13;
(3) CSDb corroborates Algorithm as a prolific individual developer of similar
one-off audio techniques, supporting that this is a personal series, not a
packaged tool; (4) `csdb_release` is confirmed absent (SIDId's tag entry
carries no `reference` field), not merely unresearched.

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

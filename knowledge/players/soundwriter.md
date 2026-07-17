# SoundWriter (Sound Writer V2.0)

```json
{
  "id": "soundwriter",
  "name": "SoundWriter (Sound Writer V2.0)",
  "aliases": ["SoundWriter_2.0"],
  "authors": ["Thorsten Klose"],
  "released": "1992 (64'er/Markt & Technik, per SIDId; CSDb catalogues the same-year release under group 'Extreme', release id 17422)",
  "status": "stub",
  "platform": "Native C64 tool — own editor + its own C64 replay routine (DeepSID players.json lists platform as \"Native / C64 emulator\"; CSDb classifies the release as a \"C64 Tool\")",
  "csdb_release": 17422,

  "memory": {
    "load_address": "TODO: not documented in surveyed sources",
    "zero_page": "TODO: DeepSID players.json field 'zero_pages': \"$A2 + Approx 3-8 bytes in $F7-$FF range\" — cited as-is, not independently verified via disassembly here",
    "layout": "TODO: not documented; no public source/disassembly found"
  },
  "entry": {
    "init": "TODO: per-file (PSID header); no fixed address documented",
    "play": "TODO: per-file (PSID header); DeepSID players.json gives no play-routine address"
  },
  "speed": "TODO: DeepSID players.json lists supported speeds as \"1x\" — documented by DeepSID, not independently verified here via disassembly",

  "data_format": {
    "order_list": "TODO: not documented",
    "patterns": "TODO: not documented",
    "instruments": "TODO: DeepSID players.json states instrument count \"16\", saved data described as \"Instruments and samples\" — not independently verified here",
    "wavetable": "TODO: not documented",
    "pulsetable": "TODO: not documented",
    "filtertable": "TODO: not documented"
  },
  "effects": {
    "encoding": "TODO: no public source/disassembly found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "EXTREMELY CONCENTRATED USAGE: only 8 files tagged 'SoundWriter_2.0' in this project's local dataset (knowledge/COVERAGE.md), and all 8 are by Thorsten Klose himself — the tool's own author (data/composers aggregate, confirmed 2026-07-17: 'Beat It', 'Big in Japan', 'Heavy Beat', 'The House...', 'Mazed', 'Megablast Remix', 'Sleeper in Metro', 'Vienna', all under MUSICIANS/K/Klose_Thorsten/). This is a textbook personal-routine signature despite being a formally packaged/named editor — DeepSID's own 'example_tunes' field for this player also reads '8', matching exactly.",
    "MAGAZINE VS SCENE PROVENANCE DIFFER SLIGHTLY: SIDId's sidid.nfo dates it '1992 64'er/Markt & Technik' (i.e. published via the German 64'er computer magazine / its Markt & Technik publisher), while the CSDb release (id 17422) catalogues the same tool+tunes package under the demo-scene group 'Extreme' (1992), crediting 'Concept: The Syndicate' and 'Music: Kopkilla, Thorsten Klose'. Both likely describe the same 1992 artifact reaching the scene through two channels (magazine coverdisk material getting re-packaged/distributed by a group) — not independently confirmed as two separate releases.",
    "DeepSID's players.json marks 'distribution: Exclusive; released in 2005' — read as: the tool was originally exclusive/private, and only became publicly archived in 2005, independent of its 1992 authorship date. Not further corroborated here.",
    "DeepSID's players.json marks 'source_code: No' and no GitHub/SourceForge/CSDb source-zip was found in this research — treat as closed-source, no disassembly available beyond what a from-scratch .sid teardown would provide.",
    "DeepSID's players.json spec table (zero_pages, instrument count, speeds, digi support) is a third-party-documented estimate, not a disassembly performed for this card — recorded above as hedged TODOs per this project's convention (cf. ariston.md, asterion.md, artlace.md)."
  ],
  "sources": [
    "SIDId (sidid.nfo, via data/sidid.json byTag['SoundWriter_2.0']): author Thorsten Klose, released '1992 64'er/Markt & Technik', reference https://csdb.dk/release/?id=17422",
    "DeepSID curated player database (data/players.json, title 'Sound Writer v2.0'): developer Thorsten Klose, start_year 1990, end_year 1992, csdb_id 17422, platform 'Native / C64 emulator', distribution 'Exclusive; released in 2005', source_code 'No', digi 'Yes', speeds '1x', sid_chip_count '1SID', channels_visible '3', instruments '16', zero_pages '$A2 + Approx 3-8 bytes in $F7-$FF range', load_save_snd 'Instruments and samples', example_tunes '8'",
    "CSDb release: https://csdb.dk/release/?id=17422 (group 'Extreme', 1992, C64 Tool; credits: Concept - The Syndicate; Music - Kopkilla, Thorsten Klose)",
    "Local dataset: knowledge/COVERAGE.md row 34 ('SoundWriter_2.0', 8 files, no public-source flag); data/composers/*.json aggregate confirms all 8 files are by Thorsten Klose (2026-07-17)"
  ]
}
```

## Overview

SoundWriter (DeepSID/SIDId tag `SoundWriter_2.0`, DeepSID's own catalogue title
"Sound Writer v2.0") is a native C64 music editor by German composer **Thorsten
Klose**, dated 1992 by both SIDId (crediting `64'er/Markt & Technik`, the
magazine/publisher) and CSDb (release id 17422, catalogued under the demo
group "Extreme"). It is a tiny, single-composer signature in this project's
dataset: **all 8 files tagged with it in `data/composers/*.json` are Thorsten
Klose's own tunes** — the strongest possible composer-concentration signal
that this was Klose's personal tool, even though it was named, versioned
("V2.0"), and distributed as if a general-purpose editor. DeepSID's curated
spec table (not independently verified here) describes a 1SID/3-voice, 1x-
speed, 16-instrument editor with digi/sample support.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **100% composer concentration** (8/8
files by the author himself) despite the tool having a formal name/version
and a magazine + scene release chain; and the **closed-source** status
(`source_code: No` in DeepSID, no public repo found), so every runtime field
below stays honestly `TODO`.

## Disassembly notes

None performed for this card. No public source or existing disassembly was
found (checked DeepSID's players.json, CSDb's release page, and general web
search). A future pass would need to start from a representative `.sid`'s
PSID header (init/play addresses) and disassemble from there — DeepSID's
`zero_pages`/`instruments`/`speeds` spec fields are recorded above only as
citations to that third party, not confirmed independently.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
year, CSDb release, DeepSID's spec-table estimates, and this project's own
composer-concentration count) are confirmed, each cited to its source. No
memory map, entry point, or data format has been reverse-engineered; all
Tier 3 fields are `TODO` per this project's rule against guessing them.

## Sources

See the `sources` array — SIDId's `sidid.nfo`, DeepSID's curated
`players.json` entry, the CSDb release page (id 17422), and this project's
own local dataset aggregate (`knowledge/COVERAGE.md` + `data/composers/*.json`).

# SIDStep2

```json
{
  "id": "sidstep2",
  "name": "SIDStep2",
  "aliases": ["SidStep2"],
  "authors": ["deathybrs (GitHub handle)"],
  "released": "2022-06-21 (first GitHub release, tag 2022_06_20.21_56b, described in its own release notes as 'the first beta release of SIDStep 2') through at least 2022-07-28 (tag 2022.07.28.02.32, latest release found). Confirmed via the GitHub Releases API, not a CSDb release date — this is a VSTi tool's own version history, not a C64 scene release chain.",
  "status": "stub",
  "platform": "Cross-platform: a VSTi (VST instrument) plugin emulating the SID chip via reSID, for composing on a modern DAW (Bitwig Studio initially, later releases add support for other DAW hosts). The project's stated purpose is exporting compositions for playback on real C64 hardware (games/demos) — release notes for tag 2022.07.07.22.54b add 'final Mega65 export capabilities, completing core functionality for both C64 and Mega65 platforms', confirming a native C64-binary export path exists alongside the VSTi front end. This is plausibly how SIDId's/DeepSID's Player-ID scanner fingerprints its generated C64 replay code under this tag, though that link is inferred from the name match, not independently confirmed. Open source, GPL-3.0 licensed.",
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
    "Rare in this batch: a tag with a real, open, licensed public source repository — github.com/deathybrs/SIDStep2, C++/C, GPL-3.0, 27 stars/3 forks/34 commits as observed. Most sibling tags in this chunk have no source at all.",
    "Only 1 file / 1 composer locally (Demosic, Sweden; the tune itself titled 'Step into the Sid' and credited in-file to 'That8BitChiptuneGuy') — too small a sample to independently confirm the GitHub repo is definitely the SOURCE of this exact C64 binary's replay routine rather than a same-named but unrelated tool. Treated as a strong but unconfirmed identity match, given the exact name match and the tune's own self-referential title ('Step into the Sid').",
    "No SIDId entry exists for 'SidStep2' (checked data/sidid.json directly) — identity here rests on the GitHub project name match, not a curated player database entry.",
    "No CSDb entry (release, group, or SID) matches 'SIDStep2'/'SidStep2' — csdb.dk search returned zero results, so csdb_release stays null rather than TODO.",
    "GitHub release history is short and fully within 2022 (first beta 2022-06-21, latest found release 2022-07-28, 6 tagged releases via the GitHub Releases API) — this is the VSTi tool's own version history, not evidence of when the one locally-tagged tune was authored."
  ],
  "sources": [
    "GitHub — deathybrs/SIDStep2 (VSTi, reSID-based, GPL-3.0): https://github.com/deathybrs/SIDStep2",
    "GitHub Releases API — https://api.github.com/repos/deathybrs/SIDStep2/releases (6 releases, 2022-06-21 through 2022-07-28, tag notes confirm C64 + Mega65 export)",
    "Local dataset: data/composers/demosic.json — full 55-file census of this composer's folder; exactly 1 file tagged SidStep2 (Step_into_the_Sid.sid, csdb_id 59742)",
    "data/sidid.json byTag — checked, no entry for 'SidStep2'",
    "csdb.dk site search for 'SIDStep2'/'SidStep2' — no release/group/SID entry found: https://csdb.dk/search/?search=SIDStep2"
  ]
}
```

## Overview

`SidStep2` is a raw Player-ID tag matching **SIDStep2**, an open-source
(GPL-3.0) VSTi plugin by GitHub user **deathybrs** that emulates the SID
chip via reSID for composing in a modern DAW, with stated support for
exporting playable C64 (and, from its second release onward, Mega65)
output. Its GitHub release history is short and entirely within 2022: a
first beta on 2022-06-21, five further tagged releases, the last found
dated 2022-07-28 (confirmed via the GitHub Releases API). This is one of
the few tags in this batch backed by a real, public, licensed source
repository rather than pure inference — though the link between the
GitHub project and this exact local tag/file is a name match, not
independently confirmed. No CSDb entry exists for it under either
spelling (site search checked directly). A full census of composer
Demosic's (Sweden) 55-file folder confirms exactly 1 file carries this
tag: "Step into the Sid" — a self-referential title that supports the
identification.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the source repository is real and
licensed (GPL-3.0), a genuine exception in this batch, but the sample size
(1 file) is too small to fully confirm the exported C64 code is what
SIDId's scanner is actually fingerprinting under this tag versus some
other, unrelated same-named tool.

## Disassembly notes

None done here. The GitHub source was not opened/reviewed in this pass; a
future session could pull the repo directly to confirm the exported
replay-routine memory map and entry points rather than leaving them
`TODO`.

## Verification

**Not verified — `status: stub`.** Identity is a plausible, sourced name
match (GitHub project + local composer/file data), not confirmed by
opening the repo's C64-export code. No runtime fact was guessed.

## Sources

See the `sources` array — the GitHub repository and local composer data.

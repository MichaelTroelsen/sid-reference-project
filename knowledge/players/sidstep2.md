# SIDStep2

```json
{
  "id": "sidstep2",
  "name": "SIDStep2",
  "aliases": ["SidStep2"],
  "authors": ["deathybrs (GitHub handle)"],
  "released": "TODO: exact first-release date not confirmed; GitHub activity observed through at least July 2022",
  "status": "stub",
  "platform": "Cross-platform: a VSTi (VST instrument) plugin emulating the SID chip via reSID, for composing on a modern DAW. The project's stated purpose is exporting compositions for playback on real C64 hardware (games/demos) — plausibly how SIDId's/DeepSID's Player-ID scanner fingerprints its generated C64 replay code under this tag, though that link is inferred from the name match, not independently confirmed. Open source, GPL-3.0 licensed.",
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
    "No SIDId entry exists for 'SidStep2' (checked data/sidid.json directly) — identity here rests on the GitHub project name match, not a curated player database entry."
  ],
  "sources": [
    "GitHub — deathybrs/SIDStep2 (VSTi, reSID-based, GPL-3.0): https://github.com/deathybrs/SIDStep2",
    "Local dataset: data/composers/demosic.json — 1 file (Step into the Sid, csdb_id not confirmed in this pass); knowledge/COVERAGE.md rank #106",
    "data/sidid.json byTag — checked, no entry for 'SidStep2'"
  ]
}
```

## Overview

`SidStep2` is a raw Player-ID tag matching **SIDStep2**, an open-source
(GPL-3.0) VSTi plugin by GitHub user **deathybrs** that emulates the SID
chip via reSID for composing in a modern DAW, with stated support for
exporting playable C64 output. This is one of the few tags in this batch
backed by a real, public, licensed source repository rather than pure
inference — though the link between the GitHub project and this exact
local tag/file is a name match, not independently confirmed. Locally it
appears on only 1 file, by composer Demosic (Sweden), itself titled "Step
into the Sid" — a self-referential title that supports the identification.

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

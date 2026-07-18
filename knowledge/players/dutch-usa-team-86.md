# Dutch-USA_Team/86

```json
{
  "id": "dutch-usa-team-86",
  "name": "Dutch-USA_Team/86",
  "aliases": ["Dutch-USA_Team/86"],
  "authors": ["Marco Swagerman (MC), The Dutch USA-Team"],
  "released": "TODO: the '86' in the tag name suggests 1986, but no source independently confirms this as a release date for this specific driver",
  "status": "stub",
  "platform": "TODO: native C64, presumably an earlier or otherwise different Dutch USA-Team (DUSAT) routine than the same team's later, better-documented 'Pro-Drum' (see [[dutch-usa-team-prodrum]], SIDId tag Dutch-USA_Team/ProDrum). No source states these two tags are the same code, and DUSAT's other carded tools (Rock Monitor, Music Assembler) already establish this team built multiple, distinct tools with different credited coders. Not merged.",
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
    "2 files, 1 composer, both by MC (Marco Swagerman) himself: 'Convincing' and 'Galdrumway'.",
    "Sibling DUSAT tools already carded in this KB: [[dutch-usa-team-prodrum]] (Pro-Drum, coded by MC, tag 'Dutch-USA_Team/ProDrum'), knowledge/players/rockmonitor.md (Rock Monitor, coded by OPM/Oscar Giesen), knowledge/players/music-assembler.md (Music Assembler, coded by MC+OPM jointly) — same team-link caveat as those cards apply here: no source confirms shared code between any of these DUSAT tools.",
    "SIDId has an entry for 'Dutch-USA_Team/ProDrum' but NONE for 'Dutch-USA_Team/86' (checked data/sidid.json directly) — this tag is a distinct, less-documented signature from the same team."
  ],
  "sources": [
    "Local dataset: data/composers/mc.json — 2 files (Convincing csdb_id 37977, Galdrumway csdb_id 37975); knowledge/COVERAGE.md rank #80",
    "Existing KB card: knowledge/players/dutch-usa-team-prodrum.md (team context, sibling tools, deliberately not merged)",
    "data/sidid.json byTag — checked, entry exists for 'Dutch-USA_Team/ProDrum' but NOT 'Dutch-USA_Team/86'"
  ]
}
```

## Overview

`Dutch-USA_Team/86` is a raw Player-ID tag covering 2 files, both by
**Marco Swagerman (MC)** of **The Dutch USA-Team (DUSAT)** — the same
Dutch scene team behind two other tools already carded in this KB,
[Pro-Drum](dutch-usa-team-prodrum.md) (also coded by MC, under the
separate tag `Dutch-USA_Team/ProDrum`) and [Rock
Monitor](rockmonitor.md)/[Music Assembler](music-assembler.md) (coded by
Oscar Giesen, alone or with MC). No source confirms this tag is the same
code as Pro-Drum or either sibling tool; it is kept as its own card. SIDId
carries an entry for `Dutch-USA_Team/ProDrum` but has none at all for this
`/86` tag.

## Quirks & gotchas

See the `quirks` array — the load-bearing point is the team link (same
composer, same scene circle as two other carded DUSAT tools) without any
confirmed code-sharing evidence, the same caution already documented on
`dutch-usa-team-prodrum.md` for its own sibling relationships.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only local composer/usage data and the
DUSAT team link are confirmed. No SIDId entry exists for this exact tag.
No runtime fact was guessed.

## Sources

See the `sources` array — local composer data, the sibling
`dutch-usa-team-prodrum.md` card, and SIDId (checked, no match for this
tag).

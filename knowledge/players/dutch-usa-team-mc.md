# Dutch-USA_Team/MC

```json
{
  "id": "dutch-usa-team-mc",
  "name": "Dutch-USA_Team/MC",
  "aliases": ["Dutch-USA_Team/MC"],
  "authors": ["Marco Swagerman (MC)"],
  "released": "TODO: no date found — SIDId has no entry for this exact tag",
  "status": "stub",
  "platform": "TODO: appears to be a personal/in-house C64 replay routine by Marco Swagerman (MC) of The Dutch USA-Team, distinct from his own better-known team tools Music Assembler and Rock Monitor and Pro-Drum (all already carded separately) — no dedicated CSDb tool/release entry found under this exact tag name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for the exact tag 'Dutch-USA_Team/MC' (checked) — this is a Player-ID-only signature, distinct from the well-documented 'Music_Assembler' tag (6,127 files, already carded at music-assembler.md, SIDId authors MC & OPM) and the separately-tagged 'Dutch-USA_Team/ProDrum' (9 files, already carded at dutch-usa-team-prodrum.md, SIDId author 'The Dutch USA-Team'). This tag is neither of those — a third, much smaller, uncarded MC-attributed signature.",
    "SAME TEAM, SAME PERSON, NOT A CONFIRMED SHARED ROUTINE: the composer profile for 'MC' (data/composers/mc.json) states directly: 'Created Music Assembler and RockMon with Oscar Giesen (OPM)' — confirming Marco Swagerman as the real person behind the 'MC' handle and his role in the team's two flagship tools. But no source found here states that THIS tag's routine is the same code as Music Assembler, RockMon, or Pro-Drum — it could equally be an earlier personal routine, a stripped-down variant, or something else entirely. No `edges` entry is asserted for this reason, matching the same caution already applied in dutch-usa-team-prodrum.md for the sibling ProDrum tag.",
    "Single-composer concentration: both locally-tagged files are by 'MC' himself (Marco Swagerman, Netherlands, b. 1968-06-19, CSDb scener 4074) — consistent with a personal/pre-release routine rather than the team's widely-distributed Music Assembler (352 composers) or Pro-Drum (4 composers)."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Dutch-USA_Team/MC': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged 'Dutch-USA_Team/MC', both by composer MC — data/composers/mc.json",
    "data/composers/mc.json (HVSC profile: full name Marco Swagerman, Netherlands, b. 1968-06-19, CSDb scener 4074, notable: 'Created Music Assembler and RockMon with Oscar Giesen (OPM)')",
    "Sibling cards for the same person/team: knowledge/players/music-assembler.md, knowledge/players/rockmonitor.md, knowledge/players/dutch-usa-team-prodrum.md — team/person link only, no confirmed routine sharing with this tag"
  ]
}
```

## Overview

`Dutch-USA_Team/MC` is a raw Player-ID tag for a replay routine used
exclusively by **Marco Swagerman**, handle **MC**, of the Dutch group **The
Dutch USA-Team**. This is the same person credited elsewhere as co-author of
the team's flagship tools **Music Assembler** and **Rock Monitor**, and as
sole coder of **Pro-Drum** — all three already carded separately in this
project. This tag, however, is a distinct SIDId signature from all three,
with no SIDId entry of its own and only 2 locally-tagged files, both by MC
himself — plausibly an earlier or personal routine, but not confirmed to
share code with any of his other named tools.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is neither the `Music_Assembler`
nor `Dutch-USA_Team/ProDrum` tag — a third, smaller, uncarded MC signature;
the team/person link to his other tools is real (same composer, same team)
but NOT asserted as a shared-routine edge, since nothing states the code is
the same.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/mc.json`, `data/sidid.json`) plus cross-reference to sibling
cards for the same author/team. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer profile for MC, and the three sibling DUSAT-team cards.

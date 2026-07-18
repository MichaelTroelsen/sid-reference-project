# Jim_Simmons/Capcom

```json
{
  "id": "jim-simmons-capcom",
  "name": "Jim_Simmons/Capcom",
  "aliases": ["?Jim_Simmons/Capcom"],
  "authors": ["Jim Simmons (James Simmons)"],
  "released": "TODO: no tool-release date found; locally tagged files include Rocket Ranger (1988) and Designasaurus (1988)",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house, game-embedded composing routine, not a released standalone editor (unconfirmed)",
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
    "The leading '?' in the SIDId tag marks it as a scanner-flagged/uncertain signature match, but the local dataset gives a confident, matching author identity: 'Jim Simmons' (James Simmons, USA, HVSC-listed affiliation 'Cinemaware' — data/composers/jim-simmons.json). No SIDId sidid.nfo entry exists for this tag at all (checked data/sidid.json — absent), so the 'Capcom' half of the tag name is NOT independently corroborated by SIDId; it is unconfirmed whether it refers to a specific game, publisher relationship, or something else.",
    "100% single-composer concentration: all 3 locally-tagged files ('Designasaurus', 'Rocket Ranger', 'TV Sports Football') belong to Jim Simmons alone. HVSC lists his affiliation as 'Cinemaware', not Capcom — 'Rocket Ranger' and 'Designasaurus' are both known Cinemaware-published titles, not Capcom ones, so the tag's 'Capcom' component does not match the affiliation recorded for this composer in local data (unresolved discrepancy, not asserted as fact either way).",
    "Consistent with a personal, in-house composing/playback routine embedded directly in his own game soundtracks rather than a distributed editor — no CSDb tool/release entry was found."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Jim_Simmons/Capcom' or '?Jim_Simmons/Capcom' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 3 files tagged ?Jim_Simmons/Capcom, all by composer 'Jim Simmons' — data/composers/jim-simmons.json; see knowledge/COVERAGE.md",
    "HVSC composer profile: Jim Simmons / James Simmons, USA, affiliation Cinemaware — data/composers/jim-simmons.json"
  ]
}
```

## Overview

Jim_Simmons/Capcom is a SIDId Player-ID tag (`?`-prefixed, i.e. a
scanner-flagged/uncertain signature match) with no `sidid.nfo` entry of its
own. Local data confidently attributes it to **Jim Simmons** (James
Simmons, USA), an HVSC "PRO" composer whose recorded affiliation is
**Cinemaware**, not Capcom — so the tag's "Capcom" component is not
corroborated by local data and its meaning is unconfirmed. All **3**
locally-tagged files (Designasaurus, Rocket Ranger, TV Sports Football) are
by Jim Simmons alone, consistent with an in-house, game-embedded composing
routine rather than a published, titled tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for this
tag at all; (2) the "Capcom" component conflicts with the composer's
HVSC-recorded "Cinemaware" affiliation — unresolved, not asserted; (3) 100%
single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/jim-simmons.json` and
`data/sidid.json` (checked, absent). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent), and the local
composer aggregation/HVSC profile for Jim Simmons.

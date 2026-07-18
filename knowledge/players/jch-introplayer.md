# JCH IntroPlayer

```json
{
  "id": "jch-introplayer",
  "name": "JCH IntroPlayer",
  "aliases": ["JCH IntroPlayer"],
  "authors": ["Jens-Christian Huus (JCH)"],
  "released": "TODO: no date found — SIDId has no entry for this exact tag",
  "status": "stub",
  "platform": "TODO: appears to be a small/specialised JCH-authored player variant, plausibly used for demo intros specifically (as distinct from his numerous full-song NewPlayer/OldPlayer/DigiPlayer/Protracker variants, all already carded) — no dedicated CSDb tool/release entry found under this exact name (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'JCH IntroPlayer' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "NOT already covered by any of this project's five existing carded JCH families: 'JCH_NewPlayer' (knowledge/players/jch-newplayer.md, aliases include JCH_NewPlayer_V0x through V19), 'JCH_NewPlayer_V20' (jch-newplayer-v20.md), 'JCH_OldPlayer' (jch-oldplayer.md), 'JCH_DigiPlayer' (jch-digiplayer.md), and 'JCH_Protracker' (jch-protracker.md) — checked each card's `aliases` array directly; none lists 'JCH IntroPlayer' or an 'IntroPlayer' variant. This is a genuinely distinct, sixth, uncarded JCH-attributed signature.",
    "JCH (Jens-Christian Huus) is the creator of DeepSID itself (per his own HVSC profile, 'notable: Created this web site') and one of the most prolific, best-documented C64 composers/tool authors in this whole collection — the sibling NewPlayer family alone spans at least 21 versions. The 'IntroPlayer' name plausibly denotes a cut-down variant specifically for demo intros (a common scene pattern: intros often use a stripped-down player to save memory/loading time versus a full in-game/tracker player), but no source confirms this interpretation for this specific tag — recorded as a plausible reading of the name only.",
    "Single file, single composer (JCH himself) — the smallest possible footprint, consistent with either a one-off intro-specific build or simply an unreleased experimental variant."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'JCH IntroPlayer': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 1 file tagged 'JCH IntroPlayer', by composer JCH — data/composers/jch.json",
    "data/composers/jch.json (HVSC profile: real name Jens-Christian Huus, Denmark, notable 'Created this web site' [DeepSID], CSDb scener 626)",
    "Sibling cards checked for overlap (none list this tag as an alias): knowledge/players/jch-newplayer.md, jch-newplayer-v20.md, jch-oldplayer.md, jch-digiplayer.md, jch-protracker.md"
  ]
}
```

## Overview

`JCH IntroPlayer` is a raw Player-ID tag for a replay routine by **JCH**
(Jens-Christian Huus), the Danish composer, tool author, and creator of
DeepSID itself. It is a sixth, genuinely distinct JCH-attributed signature in
this project — checked directly against all five already-carded JCH
families (NewPlayer, NewPlayer V20, OldPlayer, DigiPlayer, Protracker), none
of which list it as an alias. SIDId has no entry for the tag. Only 1 file
locally carries it, by JCH himself — plausibly a cut-down variant built
specifically for demo intros, though that reading of the name is not
independently confirmed.

## Quirks & gotchas

See the `quirks` array. Load-bearing: confirmed NOT an alias of any of the
five existing JCH cards (checked each one's `aliases` array directly); the
"intro-specific stripped-down player" interpretation of the name is
plausible scene convention but unconfirmed for this exact tag.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/jch.json`, `data/sidid.json`) plus a direct alias check
against all five sibling JCH cards. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer profile for JCH, and the five sibling JCH player cards checked for
overlap.

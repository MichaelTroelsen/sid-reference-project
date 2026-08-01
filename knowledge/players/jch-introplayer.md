# JCH IntroPlayer

```json
{
  "id": "jch-introplayer",
  "name": "JCH IntroPlayer",
  "aliases": ["JCH IntroPlayer"],
  "authors": ["Jens-Christian Huus (JCH)"],
  "released": "1989",
  "status": "stub",
  "platform": "Native C64, embedded/built-in play routine, not a distributed standalone editor/tool. The sole tagged file's own DeepSID metadata classifies it player_type 'Normal built-in' (data/composers/jch.json) — the same inference pattern used across sibling stub cards (golem.md, cope-omicron.md, colin-porch.md). No dedicated CSDb release or SIDId documentation exists under this name (see csdb_release note and sources) — plausibly a small/specialised variant used for a single demo intro, as distinct from JCH's numerous full-song NewPlayer/OldPlayer/DigiPlayer/Protracker families (all already carded), but that reading of the name is not independently confirmed.",
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
    "The sole tagged file is 'Fooled.sid' (CSDb SID-entry id 15774, HVSC path /MUSICIANS/J/JCH/Fooled.sid). CSDb webservice (type=sid, id=15774) gives the tune's own 'Released' field as '1989 Vibrants' — Vibrants being the music group JCH co-founded with Link in 1989 per JCH's own CSDb scener trivia (id 610). This is the tune's own attestation, not a separate tool-release date; recorded in `released` as the year only, since no dedicated player/tool release exists.",
    "The CSDb SID-entry id for this file (15774) is a sid/?id= namespace id, NOT a release/?id= id — per this project's own csdbId landmine (see CLAUDE.md). It must not be written into `csdb_release`. No separate CSDb release entry for a 'JCH IntroPlayer' tool/driver was found (checked the SID's own webservice record and its UsedIn/Credits; no such release listed) — csdb_release is correctly left null.",
    "PSID header metadata from the same CSDb webservice record: LoadAddr $1000 (4096), InitAddr $1000 (4096), PlayAddr $1003 (4099) — header metadata only, not a disassembly fact; NOT written into the Tier 3 `entry`/`memory` fields per this project's own rule.",
    "SIDId's sidid.nfo has NO entry for 'JCH IntroPlayer' (checked, re-verified against the live GitHub file) — this is a Player-ID-only signature, not a documented/published tool.",
    "NOT already covered by any of this project's five existing carded JCH families: 'JCH_NewPlayer' (knowledge/players/jch-newplayer.md, aliases include JCH_NewPlayer_V0x through V19), 'JCH_NewPlayer_V20' (jch-newplayer-v20.md), 'JCH_OldPlayer' (jch-oldplayer.md), 'JCH_DigiPlayer' (jch-digiplayer.md), and 'JCH_Protracker' (jch-protracker.md) — checked each card's `aliases` array directly; none lists 'JCH IntroPlayer' or an 'IntroPlayer' variant. This is a genuinely distinct, sixth, uncarded JCH-attributed signature.",
    "JCH (Jens-Christian Huus) is the creator of DeepSID itself (per his own HVSC profile, 'notable: Created this web site') and one of the most prolific, best-documented C64 composers/tool authors in this whole collection — the sibling NewPlayer family alone spans at least 21 versions. The 'IntroPlayer' name plausibly denotes a cut-down variant specifically for demo intros (a common scene pattern: intros often use a stripped-down player to save memory/loading time versus a full in-game/tracker player), but no source confirms this interpretation for this specific tag — recorded as a plausible reading of the name only.",
    "Single file, single composer (JCH himself) — the smallest possible footprint, consistent with either a one-off intro-specific build or simply an unreleased experimental variant."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'JCH IntroPlayer': https://github.com/cadaver/sidid/blob/master/sidid.nfo (re-verified 2026-08)",
    "Local dataset: 1 file tagged 'JCH IntroPlayer' (census complete, 1 of 1), by composer JCH — data/composers/jch.json (Fooled.sid, csdb_id 15774)",
    "CSDb webservice, type=sid id=15774 (https://csdb.dk/webservice/?type=sid&id=15774&depth=3, queried via scripts/lib/csdb-client.js): Released '1989 Vibrants'; LoadAddr/InitAddr/PlayAddr $1000/$1000/$1003 (header metadata); UsedIn release 'Timewaster 1' (CSDb release id 8001, 1990 demo by X-Factor/Imagination Developments) — this UsedIn year is NOT the tune's own release year, per this project's own rule",
    "https://csdb.dk/sid/?id=15774 (WebFetch, corroborates the webservice record: title 'Fooled', composer Jens-Christian Huus)",
    "CSDb webservice scener record for JCH (id 610, embedded in the SID record's Credits): 'In 1989, he formed the music group Vibrants together with [Link]' — corroborates the 1989 Vibrants attribution",
    "data/composers/jch.json (HVSC profile: real name Jens-Christian Huus, Denmark, notable 'Created this web site' [DeepSID], CSDb scener 626)",
    "Sibling cards checked for overlap (none list this tag as an alias): knowledge/players/jch-newplayer.md, jch-newplayer-v20.md, jch-oldplayer.md, jch-digiplayer.md, jch-protracker.md",
    "data/players.json checked directly: no entry for 'JCH IntroPlayer' or similar (no curated DeepSID player-tool record)"
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
locally carries it — 'Fooled.sid' by JCH himself, CSDb SID-entry id 15774,
with the tune's own CSDb `Released` field reading '1989 Vibrants' (Vibrants
being the group JCH co-founded in 1989) — plausibly a cut-down variant built
specifically for demo intros, though that reading of the name is not
independently confirmed. The file's `player_type` is DeepSID's 'Normal
built-in', consistent with a native C64 embedded routine rather than a
distributed tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: confirmed NOT an alias of any of the
five existing JCH cards (checked each one's `aliases` array directly); the
"intro-specific stripped-down player" interpretation of the name is
plausible scene convention but unconfirmed for this exact tag. The file's own
CSDb SID-entry id (15774) is deliberately NOT written into `csdb_release` —
it is a sid/?id= record, not a release/?id= tool release, per this project's
own csdbId namespace landmine.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/jch.json`, `data/sidid.json`), a fresh CSDb webservice query
(`type=sid&id=15774`, the sole tagged file's own record) for `released` and
PSID header metadata, and a direct alias check against all five sibling JCH
cards. `status: stub` — no runtime fact has been confirmed by disassembly or
trace; PSID header load/init/play values are recorded only as quirks, never
as Tier 3 facts.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check, re-verified),
CSDb webservice `type=sid` record for the sole tagged file (id 15774) and its
embedded JCH scener/Vibrants corroboration, the local composer profile for
JCH, `data/players.json` (absence check), and the five sibling JCH player
cards checked for overlap.

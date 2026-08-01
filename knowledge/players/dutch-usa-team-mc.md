# Dutch-USA_Team/MC

```json
{
  "id": "dutch-usa-team-mc",
  "name": "Dutch-USA_Team/MC",
  "aliases": ["Dutch-USA_Team/MC"],
  "authors": ["Marco Swagerman (MC)"],
  "released": "1988 (both of the 2 tagged files' own CSDb `Released` fields say 1988: 'Ode to Galway' = '1988 Trilogic', 'Rockmonitor 5 Intromusic' = '1988 Dutch USA Team'; the tool release that embeds the latter, 'Rock Monitor V5', is dated 1988-05-14 on CSDb — https://csdb.dk/release/?id=10632 . No dedicated tool/version release exists for this tag itself, so this is earliest-attested-file evidence, not a publisher release date)",
  "status": "stub",
  "platform": "Native C64, in-house/team routine, NOT a distributed music editor: CSDb shows the 'Rockmonitor 5 Intromusic' tune (one of this tag's 2 files) reused as embedded intro music across THREE separate Dutch USA-Team C64 Tool releases — Rock Monitor V5 (https://csdb.dk/release/?id=10632, 1988-05-14), Pro-Drum 1 (https://csdb.dk/release/?id=20672) and Pro-Drum 2 (https://csdb.dk/release/?id=33854) — all released by group Dutch USA-Team (https://csdb.dk/group/?id=1392). This confirms the tag is a native C64 team-internal intro-tune routine baked into their own tools, distinct from Music Assembler/RockMon/Pro-Drum's actual song-playback routines (already carded separately). No cross-platform editor or external tool found for this tag.",
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
    "Single-composer concentration: both locally-tagged files are by 'MC' himself (Marco Swagerman, Netherlands, b. 1968-06-19, CSDb scener 4074) — consistent with a personal/pre-release routine rather than the team's widely-distributed Music Assembler (352 composers) or Pro-Drum (4 composers).",
    "CENSUS CONFIRMED (2026-08-01): grepped every composer cache in data/composers/*.json for the literal tag 'Dutch-USA_Team/MC' — exactly 2 hits, both in data/composers/mc.json: 'Ode to Galway' (CSDb sid id 19162) and 'Rockmonitor 5 Intromusic' (CSDb sid id 19175). No other composer file carries this tag. Matches the count already recorded.",
    "PSID header data (metadata only, NOT a disassembly fact — recorded here per extraction-template guidance) differs between the two tagged files, which is worth flagging rather than assuming a shared binary layout: 'Ode to Galway' loads at $E000, init $E1BC, PSID play vector $E000 (== load addr, an odd value worth treating with suspicion); 'Rockmonitor 5 Intromusic' loads at $0D00, init $0D00 (== load addr), PSID play vector $0DE3. Different load addresses across the two files tagged with the same Player-ID signature — consistent with a small in-house routine relocated per-release, but not proof the two are byte-identical code. Source: CSDb webservice type=sid, ids 19162 and 19175 (https://csdb.dk/sid/?id=19162, https://csdb.dk/sid/?id=19175).",
    "Rock Monitor V5's own CSDb release credits list 'Code: OPM' and 'Music: MC' for the release as a whole (https://csdb.dk/release/?id=10632) — this covers the whole tool package, not confirmed to specifically mean OPM coded the embedded intro-tune player. Authors field is left as 'Marco Swagerman (MC)' only, matching the composer attribution on both tagged files' own CSDb SID entries; OPM's role is noted here as an open question, not asserted as co-authorship of this specific routine.",
    "CSDb Dutch USA-Team group trivia (https://csdb.dk/group/?id=1392) confirms unrelated fact for context: the *Rockmonitor music editors* (a different, already-carded tag family) 'were modified versions of Sound Monitor by Chris Huelsbeck with added digital sample playback' — this lineage claim is about RockMon's own song-player, not about this tag, and is NOT asserted as an edge here."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Dutch-USA_Team/MC': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged 'Dutch-USA_Team/MC', both by composer MC — data/composers/mc.json (grep-confirmed census across all of data/composers/*.json, 2026-08-01)",
    "data/composers/mc.json (HVSC profile: full name Marco Swagerman, Netherlands, b. 1968-06-19, CSDb scener 4074, notable: 'Created Music Assembler and RockMon with Oscar Giesen (OPM)')",
    "CSDb webservice (scripts/lib/csdb-client.js, type=sid): https://csdb.dk/sid/?id=19162 ('Ode to Galway', Released '1988 Trilogic') and https://csdb.dk/sid/?id=19175 ('Rockmonitor 5 Intromusic', Released '1988 Dutch USA Team', UsedIn Rock Monitor V5/Pro-Drum 1/Pro-Drum 2)",
    "CSDb webservice (type=release, id=10632): Rock Monitor V5, released 1988-05-14 by Dutch USA-Team, Code: OPM, Music: MC — https://csdb.dk/release/?id=10632",
    "CSDb Dutch USA-Team group page (id=1392) for group trivia/founding year 1986: https://csdb.dk/group/?id=1392",
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
with no SIDId entry of its own and only 2 locally-tagged files (census
confirmed 2026-08-01), both by MC himself — plausibly an earlier or personal
routine, but not confirmed to share code with any of his other named tools.

CSDb's own SID/release records for both tagged files pin `released` to 1988
and clarify `platform`: one of the two files, "Rockmonitor 5 Intromusic", is
the embedded intro tune baked directly into three of the team's own C64 Tool
releases (Rock Monitor V5, Pro-Drum 1, Pro-Drum 2) — this is a native,
team-internal routine used to soundtrack their own tools' startup, not a
distributed/published music editor in its own right.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is neither the `Music_Assembler`
nor `Dutch-USA_Team/ProDrum` tag — a third, smaller, uncarded MC signature;
the team/person link to his other tools is real (same composer, same team)
but NOT asserted as a shared-routine edge, since nothing states the code is
the same. Also load-bearing: the two tagged files have different PSID load
addresses ($E000 vs $0D00) — flagged as header metadata, not proof of a
shared binary, and Rock Monitor V5's release credits list a separate coder
(OPM) alongside MC without confirming who wrote this specific intro routine.

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
composer profile for MC (grep-confirmed census of all 2 tagged files), CSDb's
webservice (`type=sid` for both files, `type=release` for Rock Monitor V5,
`type=group` for Dutch USA-Team), and the three sibling DUSAT-team cards.

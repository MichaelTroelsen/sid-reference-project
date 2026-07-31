# TrackPlayer

```json
{
  "id": "trackplayer",
  "name": "TrackPlayer",
  "aliases": ["TrackPlayer"],
  "authors": ["Marceli Rzepka (Lyon)"],
  "released": "TODO: no release date for the tool itself found anywhere (CSDb release 90076 and the Motiv 8 group's full release catalogue both list no date, and no other TrackPlayer version/release entry exists on CSDb). A full census of all 23 tagged tunes' own CSDb SID-entry 'Released' fields (not a UsedIn release year) shows first-use in 1995 (19 files, credited to Feniks, Feniks/Accept, or Motiv 8) through 1996 (4 files, credited to Feniks/Motiv8) — an earliest-attested-use range for MHD's own tunes, not a release date for the tool",
  "status": "stub",
  "platform": "Native C64 tool (data/players.json: platform 'Native / C64 emulator'; CSDb catalogues the release as type 'C64 Tool')",
  "csdb_release": 90076,

  "memory": {
    "load_address": "TODO: $xxxx — not disassembled",
    "zero_page": "DeepSID players.json field 'zero_pages': \"2 bytes ($03-$04)\" — cited as-is, not independently verified via disassembly",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "TODO: $xxxx — not disassembled",
    "play": "TODO: $xxxx — not disassembled"
  },
  "speed": "TODO: not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "In this project's local dataset (data/composers/*.json), all 23 TrackPlayer-tagged files belong to ONE composer: MHD (Maciej Licbarski, Poland, handles Holn/Skynet/MHD). 100% concentration on a single composer — strong signal this is a small-scene/personal-use tool in practice, even though it was released as a standalone downloadable C64 utility rather than hand-written in-game code. One of the 23 filenames is literally \"Lyon on the Pass\", i.e. MHD named a tune after the tool's author.",
    "The tool's author (Lyon / Marceli Rzepka, credited on CSDb as 'of Airwolf-Team and Arise') and MHD are NOT strangers: MHD's own CSDb scener profile lists him as an ex-member of Airwolf-Team (1993-June 1995) and later of Motiv 8 (June 1996 onwards) — the same two groups credited on the TrackPlayer release itself (coder's groups Airwolf-Team/Arise; releasing group Motiv 8). They were groupmates before MHD became TrackPlayer's near-exclusive user, which better explains the 100% single-composer concentration than a coincidence.",
    "Released by the group Motiv 8 as 'Trackplayer V03.c' (download filename TrackplayerV0.3c-M8.zip, 450 downloads on CSDb) bundled with a 'Motiv 8 Intro'. CSDb's own Motiv 8 group page (csdb.dk/group/?id=182) lists this tool's release date as literally '???' (unknown), matching the release page itself showing no date. No source code link is present on either page.",
    "Circumstantial dating, revised by the 2026-07-31 full census below: MHD's CSDb scener profile (depth=4) also lists an 'ex' membership in Feniks (Poland, founded March 1991, dissolved 1996; no join/leave dates recorded for MHD specifically) in addition to the previously-noted Airwolf-Team (1993-June 1995) and Motiv 8 (June 1996 onward). Because the earliest attested TrackPlayer tunes (1995) are credited to Feniks or Feniks/Accept, not Motiv 8, MHD was already using the tool before his Motiv 8 membership began in June 1996 — this weakens (does not eliminate) the earlier hypothesis that Motiv 8 groupmateship with Lyon explains his adoption of it. Airwolf-Team (1993-1995, a group MHD and Lyon shared) remains the more plausible bridge given the 1995 dates; still not asserted as an `edges` fact, only as circumstantial quirk commentary.",
    "PSID header metadata (LoadAddr/InitAddr/PlayAddr), read directly from CSDb's own `type=sid` webservice entries for all 23 files, not from any disassembly: 21 of 23 files share LoadAddr $1000/InitAddr $1140/PlayAddr $1287. Two outliers: Night_Club.sid (LoadAddr $0FF3, InitAddr $1140, PlayAddr $0FF3 — play vector equals load address) and Constellation_Betha.sid (LoadAddr $1000, InitAddr $2480, PlayAddr $2489 — an entirely different memory range). Recorded here as header metadata only, per this pass's instructions — never promoted to the Tier 3 `entry`/`memory` fields, which stay `TODO`.",
    "DeepSID's curated players.json entry (search key 'trackplayer', title 'Track Player') has almost every spec field blank except platform and 'zero_pages: 2 bytes ($03-$04)' — recorded here as a citation only, not confirmed by any disassembly done for this card.",
    "Re-research pass, 2026-07-31 (identity/provenance gap-fill, targeting the `released` TODO): censused all 23 TrackPlayer-tagged files' own CSDb SID-entry 'Released' fields via the webservice (`csdb.dk/webservice/?type=sid&id=<id>`) rather than sampling — 19 attest 1995, 4 attest 1996, none earlier and none later. Confirmed via `type=group&id=182&depth=2` that Motiv 8's full release catalogue contains exactly one TrackPlayer entry ('Trackplayer V03.c', id 90076, no date) — no V01/V02 or any other version exists as a separate CSDb release. Re-fetched MHD's CSDb scener profile at depth=4 (previous pass used depth=2) and found the additional Feniks membership noted above. Negative results: CSDb's `type=search` webservice endpoint returned 'No result' for a 'trackplayer' query (not a usable discovery path here); no source code, manual, or Codebase64/Lemon64/Forum64 discussion of TrackPlayer was found in this pass (not separately re-searched beyond a repeat CSDb sweep, since the card's gap was specifically the `released` date and CSDb's `sid`/`group` data fully resolved what evidence exists). `released` stays `TODO` by design: the evidence supports 'earliest attested use 1995, no release date exists for the tool', which is what the field now says, not a forced year."
  ],
  "sources": [
    "sidid:TrackPlayer (author 'Marceli Rzepka (Lyon)', released 'Motiv 8', reference https://csdb.dk/release/?id=90076) — data/sidid.json",
    "CSDb release 90076, 'Trackplayer V03.c': https://csdb.dk/release/?id=90076 (type C64 Tool, code by Lyon of Airwolf-Team and Arise, released by Motiv 8, download TrackplayerV0.3c-M8.zip, no source code linked, no date given)",
    "CSDb group 182, 'Motiv 8': https://csdb.dk/group/?id=182 (country Denmark; lists 'Trackplayer V03.c' among its tool releases with release date '???' / unknown)",
    "CSDb scener 730, 'MHD': https://csdb.dk/scener/?id=730 (country Poland; ex-member of Airwolf-Team 1993-June 1995 and Motiv 8 from June 1996 — the same groups credited on the TrackPlayer release)",
    "DeepSID players.json curated entry 'Track Player' (developer 'Lyon', csdb_id 90076, platform 'Native / C64 emulator', zero_pages '2 bytes ($03-$04)') — data/players.json",
    "Local dataset: 23 files tagged TrackPlayer, all by composer MHD (see knowledge/COVERAGE.md and data/composers/mhd.json)",
    "CSDb webservice, all 23 TrackPlayer-tagged SID entries (https://csdb.dk/webservice/?type=sid&id=<id>, ids 20628, 50143, 20633, 20637, 20638, 20639, 20640, 20647, 20652, 20653, 20654, 20666, 20668, 20669, 20674, 20675, 20680, 20681, 20682, 20683, 20693, 20694, 20696) — each file's own 'Released' field, censused 2026-07-31: 19 read 1995 (Feniks or Feniks/Accept, except 20674 = Motiv 8), 4 read 1996 (Feniks/Motiv8)",
    "CSDb webservice, Motiv 8 group full release catalogue (https://csdb.dk/webservice/?type=group&id=182&depth=2), checked 2026-07-31 — confirms exactly one TrackPlayer release (id 90076, no date) in the group's entire output, no other version",
    "CSDb webservice, MHD scener profile at depth=4 (https://csdb.dk/webservice/?type=scener&id=730&depth=4), checked 2026-07-31 — adds a Feniks (Poland, founded March 1991, dissolved 1996) 'ex' membership not visible at the previous pass's depth=2"
  ]
}
```

## Overview

TrackPlayer is a native Commodore 64 music tool credited to Marceli Rzepka
("Lyon", of the groups Airwolf-Team and Arise), released as "Trackplayer
V03.c" through the group Motiv 8 (CSDb release 90076). It has no dedicated
name in SIDId beyond the raw Player-ID tag `TrackPlayer`; DeepSID's own
curated `players.json` lists it under the title "Track Player" with almost
every spec field blank. In this project's local HVSC-derived dataset it is a
small family — 23 files — and, unusually, every one of those files belongs to
a single composer, MHD (Maciej Licbarski, Poland). That 100%-one-composer
concentration is the strongest signal available here: whatever TrackPlayer's
intended reach as a released scene tool, its actual footprint in this
collection is essentially one musician's routine. That concentration is not a
coincidence: MHD's own CSDb scener profile shows he was a groupmate of the
tool's author, Lyon, in Airwolf-Team (1993-June 1995) and (per the 2026-07-31
depth=4 re-fetch) also an ex-member of Feniks (Poland, 1991-1996) before both
he and Lyon were later associated with Motiv 8 — Lyon as the tool's releasing
group, MHD as a Motiv 8 member from June 1996 onwards. A full census of all 23
tunes' own CSDb "Released" fields shows MHD's earliest attested TrackPlayer
tunes are 1995, credited to Feniks/Feniks-Accept — i.e. before his Motiv 8
membership started, so Airwolf-Team (shared with Lyon 1993-1995) is the more
plausible bridge for his adoption of the tool than Motiv 8 groupmateship.
TrackPlayer reads as a tool one scener wrote and a close associate then
adopted, not a widely-picked-up editor.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) full composer
concentration on MHD despite the tool being authored and released by someone
else (Lyon/Motiv 8) — best explained by MHD and Lyon's shared Airwolf-Team
membership (1993-1995), consistent with MHD's earliest attested TrackPlayer
tunes (1995) predating his own Motiv 8 membership (June 1996 onward); (2) CSDb
itself records the tool's own release date as unknown ('???' on the Motiv 8
group page) and no source code link was found anywhere, so `released` stays
honestly `TODO` — but as of the 2026-07-31 pass this is now backed by a full
census of all 23 tagged files' own CSDb "Released" fields (19 read 1995, 4
read 1996, none earlier/later) rather than a partial check, so the field
records "earliest attested use 1995" as the strongest fact actually available;
(3) the only runtime-adjacent facts available at all are DeepSID's unverified
`zero_pages` note and the raw PSID header addresses read from CSDb's `sid`
entries — both citations, not disassembly findings, and never promoted into
the Tier 3 `entry`/`memory` fields.

## Disassembly notes

None. No public source or disassembly of TrackPlayer was located during this
research pass. A future pass would need to disassemble a representative
TrackPlayer-tagged `.sid` (init/play from its PSID header, e.g. one of MHD's
23 files) and trace it through `sidm2-siddump` — that is the only route to
real memory-map/entry-point/format facts here.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
CSDb release, releasing group, the one curated `zero_pages` note, and this
project's local composer-concentration data) are confirmed, from SIDId, the
CSDb release page, and DeepSID's curated `players.json`. Every runtime field
is `TODO` because no disassembly has been done.

## Sources

See the `sources` array — the cached SIDId entry, the CSDb release page
(https://csdb.dk/release/?id=90076), the CSDb Motiv 8 group page
(https://csdb.dk/group/?id=182), MHD's CSDb scener profile
(https://csdb.dk/scener/?id=730), DeepSID's curated `players.json` entry,
this project's local per-composer file aggregate (`data/composers/mhd.json`,
cross-checked against `knowledge/COVERAGE.md`), and — added in the 2026-07-31
pass — a full CSDb webservice census of all 23 tagged files' own SID entries
(`csdb.dk/webservice/?type=sid&id=<id>`), Motiv 8's complete release catalogue
via the webservice (`?type=group&id=182&depth=2`), and MHD's scener profile
re-fetched at `depth=4` (`?type=scener&id=730&depth=4`).

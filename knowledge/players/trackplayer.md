# TrackPlayer

```json
{
  "id": "trackplayer",
  "name": "TrackPlayer",
  "aliases": ["TrackPlayer"],
  "authors": ["Marceli Rzepka (Lyon)"],
  "released": "TODO: no year found. SIDId's 'released' field for this tag holds the releasing group ('Motiv 8'), not a date; the CSDb release page itself lists no date either",
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
    "Circumstantial dating only (not asserted as `released` — no source states a date): MHD's CSDb profile places his Motiv 8 membership as starting June 1996, which is consistent with (but does not prove) a mid/late-1996-or-later release for the tool he used almost exclusively.",
    "DeepSID's curated players.json entry (search key 'trackplayer', title 'Track Player') has almost every spec field blank except platform and 'zero_pages: 2 bytes ($03-$04)' — recorded here as a citation only, not confirmed by any disassembly done for this card."
  ],
  "sources": [
    "sidid:TrackPlayer (author 'Marceli Rzepka (Lyon)', released 'Motiv 8', reference https://csdb.dk/release/?id=90076) — data/sidid.json",
    "CSDb release 90076, 'Trackplayer V03.c': https://csdb.dk/release/?id=90076 (type C64 Tool, code by Lyon of Airwolf-Team and Arise, released by Motiv 8, download TrackplayerV0.3c-M8.zip, no source code linked, no date given)",
    "CSDb group 182, 'Motiv 8': https://csdb.dk/group/?id=182 (country Denmark; lists 'Trackplayer V03.c' among its tool releases with release date '???' / unknown)",
    "CSDb scener 730, 'MHD': https://csdb.dk/scener/?id=730 (country Poland; ex-member of Airwolf-Team 1993-June 1995 and Motiv 8 from June 1996 — the same groups credited on the TrackPlayer release)",
    "DeepSID players.json curated entry 'Track Player' (developer 'Lyon', csdb_id 90076, platform 'Native / C64 emulator', zero_pages '2 bytes ($03-$04)') — data/players.json",
    "Local dataset: 23 files tagged TrackPlayer, all by composer MHD (see knowledge/COVERAGE.md and data/composers/mhd.json)"
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
tool's author, Lyon, in Airwolf-Team (1993-June 1995) before both were
associated with Motiv 8 — Lyon as the tool's releasing group, MHD as a member
from June 1996 onwards. TrackPlayer reads as a tool one scener wrote and a
close associate then adopted, not a widely-picked-up editor.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) full composer
concentration on MHD despite the tool being authored and released by someone
else (Lyon/Motiv 8) — explained by MHD and Lyon sharing Airwolf-Team and
Motiv 8 group membership, per MHD's CSDb scener profile, not mere coincidence;
(2) CSDb itself records the release date as unknown ('???' on the Motiv 8
group page) and no source code link was found anywhere, so `released` stays
honestly `TODO` rather than a guess, even though MHD's June-1996 Motiv 8
membership start is circumstantially consistent with a similar-era release;
(3) the only runtime fact available at all is DeepSID's own unverified
`zero_pages` note, carried over as a citation, not a disassembly finding.

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
and this project's local per-composer file aggregate
(`data/composers/mhd.json`, cross-checked against `knowledge/COVERAGE.md`).

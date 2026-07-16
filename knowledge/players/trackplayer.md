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
    "The tool's author (Lyon / Marceli Rzepka, credited on CSDb as 'of Airwolf-Team and Arise') is a DIFFERENT person from MHD, the sole composer using it here — the player was written by one scener and (in this collection) used almost exclusively by another.",
    "Released by the group Motiv 8 as 'Trackplayer V03.c' (download filename TrackplayerV0.3c-M8.zip, 449 downloads on CSDb) bundled with a 'Motiv 8 Intro'. No release date is recorded on the CSDb page, and no source code link is present there.",
    "DeepSID's curated players.json entry (search key 'trackplayer', title 'Track Player') has almost every spec field blank except platform and 'zero_pages: 2 bytes ($03-$04)' — recorded here as a citation only, not confirmed by any disassembly done for this card."
  ],
  "sources": [
    "sidid:TrackPlayer (author 'Marceli Rzepka (Lyon)', released 'Motiv 8', reference https://csdb.dk/release/?id=90076) — data/sidid.json",
    "CSDb release 90076, 'Trackplayer V03.c': https://csdb.dk/release/?id=90076 (type C64 Tool, code by Lyon of Airwolf-Team and Arise, released by Motiv 8, download TrackplayerV0.3c-M8.zip, no source code linked, no date given)",
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
collection is essentially one musician's routine.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) full composer
concentration on MHD despite the tool being authored and released by someone
else (Lyon/Motiv 8) — a published tool that in practice reads like a personal
routine; (2) no CSDb release date and no source code link were found, so
`released` is honestly `TODO` rather than a guess; (3) the only runtime fact
available at all is DeepSID's own unverified `zero_pages` note, carried over
as a citation, not a disassembly finding.

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
(https://csdb.dk/release/?id=90076), DeepSID's curated `players.json` entry,
and this project's local per-composer file aggregate
(`data/composers/mhd.json`, cross-checked against `knowledge/COVERAGE.md`).

# GMC (Game Music Creator)

```json
{
  "id": "gmc",
  "name": "GMC (Game Music Creator)",
  "aliases": ["GMC/Superiors", "GMC", "Game Music Creator"],
  "authors": ["Brian (Balázs Farkas) / Graffity", "Jay (co-code)"],
  "released": "1990 (V1.0, 8 Dec 1990)",
  "status": "in-progress",
  "platform": "Native C64 music editor + replay (Graffity). Closed scene tool.",
  "csdb_release": 7268,

  "memory": {
    "load_address": "TODO (DMC successor packs to $1000; whether GMC V1.0 already did is UNCONFIRMED)",
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
    "GMC is the direct PREDECESSOR of DMC (Demo Music Creator), same author Brian of Graffity — a well-attested lineage (a CSDb comment on the GMC release even says 'they should have called this DMC V1.0'). The dmc card carries the graph edge (derives_from / successor_of gmc).",
    "SIDId also lists a 'GMC_V2.0/Superiors' tag with the identical NAME/AUTHOR fields but no CSDb reference and no confirmed matching release (only V1.0 here and a 'V1.6' are catalogued on CSDb) — carded separately as gmc-v2.md, which carries the derives_from/successor_of edge back to this card.",
    "'Superiors' in the DeepSID tag 'GMC/Superiors' is a SCENE GROUP that USED the GMC player, NOT the developer or a publisher. The developer group is Graffity. SIDId's comment: 'Player used by the group Superiors.'",
    "Only V1.0 is documented on CSDb (8 Dec 1990); development effectively continued as DMC. Code credited to Brian and Jay; music by Andy and Brian; graphics by Jay (all Graffity).",
    "A '.gmc' data-format entry reportedly exists on the ArchiveTeam File Formats wiki (unreachable during research — TODO to verify).",
    "Replay internals (load address, ZP, init/play, format, effect set, whether it shares DMC's testbit hard-restart) are all UNKNOWN. Best RE path: disassemble a GMC .sid (428 files / 43 composers) and compare its register trace against DMC, since the two are said to share 'similar elements'."
  ],
  "sources": [
    "CSDb GMC V1.0 (credits/date/downloads): https://csdb.dk/release/?id=7268",
    "SIDId sidid.nfo (author, year, 'used by Superiors' note): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "TND64 Music Scene (GMC→DMC lineage prose): http://tnd64.unikat.sk/music_scene.html ; DMC context https://csdb.dk/release/?id=2596",
    "sidid:GMC/Superiors (author Balázs Farkas (Brian), 1990, CSDb 7268)",
    "Local dataset: 428 files tagged GMC/Superiors (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

GMC (Game Music Creator) is a native C64 music editor+replay by **Brian
(Balázs Farkas) of Graffity**, released as V1.0 on 8 December 1990. Its main
significance is lineage: it is the **direct predecessor of [DMC](dmc.md)**, the
most-used uncarded player in the collection — same author, and DMC is
essentially GMC improved and renamed. 428 files here are tagged GMC (via the
"GMC/Superiors" tag, where *Superiors* is a group that used the player).

## Quirks & gotchas

See the `quirks` array. Load-bearing: **GMC→DMC** (the [dmc](dmc.md) card holds
the edge); **"Superiors" is a user group, not the developer** (Graffity is); and
all replay internals are `TODO` — the best RE route is to disassemble a GMC
`.sid` and diff it against DMC, since the two reportedly share components.

## Disassembly notes

None done here. Internals undocumented online. Comparison-based RE against DMC
is the promising path (both by Brian/Graffity, "similar elements").

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC GMC `.sid` (load $1000, init $18EA, play $14EA, 231 register writes / 50 frames) — the replay runs; entry addresses are per-file. Author, year, and the DMC lineage are
CSDb/SIDId/TND64-sourced; every runtime field is `TODO`.

## Sources

See the `sources` array — CSDb release, SIDId, and TND64's Music Scene history.

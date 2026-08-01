# TheTracker/Hitmen

```json
{
  "id": "thetracker-hitmen",
  "name": "TheTracker/Hitmen",
  "aliases": ["TheTracker/Hitmen"],
  "authors": ["Groepaz"],
  "released": "1998 Hitmen — CSDb release 3385 'Tracker Preview 0e' dated October 1998; the sole tagged tune 'Sulfo 64' was performed ~3 weeks earlier at the X'98 party (18-20 Sep 1998, Hengelo NL), placing 7th in the C64 Music compo",
  "status": "stub",
  "platform": "Native C64 tool: a preview build of an in-development C64 music tracker/editor by Groepaz/Hitmen, self-described in the release's own included readme as 'the player I am working on' with 'the editor ... kinda crippled still' — not a cross-platform editor",
  "csdb_release": 3385,

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
    "SIDId's sidid.nfo gives AUTHOR 'Groepaz', RELEASED '1998 Hitmen', and REFERENCE to CSDb release 3385 — a fuller record than most in this batch, but still no NAME or COMMENT field, so the tool's own canonical title is only known via the CSDb release itself: 'Tracker Preview 0e' (a C64 Tool, Oct 1998, credited to Groepaz for Code/Music/Idea).",
    "CSDb release 3385's own download (tracker.zip, csdb.dk/release/download.php?id=30914) contains two PRGs: TRACKER_PRV_HIT.PRG and NOTE_TO_TRACKER.PRG. The note (a PETSCII readme, read directly from the .PRG bytes) is Groepaz's own primary-source description: 'THIS IS JUST SOMEWHAT OF AN EARLY [VERSION] ... TEST TUNE I MADE IN THE PLAYER I AM WORKING ON ... CHECK THE TUNE PRESS SPACE IN THE MAIN SCREEN - OR - F1 - PLAY IT.... DON'T TAKE THIS TOO SERIOUS ANYWAY, THA EDITOR IS KINDA CRIPPLED STILL. X98 - GROEPAZ/HITMEN' — confirms this is an unfinished, in-development native C64 tracker preview, not a polished/published release.",
    "Per CSDb's webservice (type=sid, id=13779), the tagged file 'Sulfo 64' was itself performed at the X'98 demo party (18-20 Sep 1998, Hengelo, Netherlands), placing 7th in the C64 Music competition (release 3457) — about 3 weeks before the 'Tracker Preview 0e' tool build (release 3385, Oct 1998) that the SIDId tag names. The tune predates the named tool release; both are Groepaz/Hitmen X'98-era productions.",
    "Groepaz is an independently well-known, prolific C64 scene coder (Hitmen group) credited on many other, separately-named/carded tools and cracking/demo productions; this tag/signature is treated as its own distinct entry, NOT assumed related to any of his other work without direct evidence.",
    "Single-file, single-composer locally: the one tagged file ('Sulfo 64') is by 'Groepaz' himself (data/composers/groepaz.json) — i.e. the author and the sole local user are the same person, consistent with either a personal tool or simply the only HVSC-archived tune known to use it.",
    "No public source code found for the tracker/editor itself — only the compiled PRG preview build is distributed via the CSDb release download."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "SIDId REFERENCE — CSDb release 3385 (Hitmen, 1998): https://csdb.dk/release/?id=3385",
    "CSDb webservice type=release id=3385 (Name 'Tracker Preview 0e', Type 'C64 Tool', ReleaseMonth/Year 10/1998, ReleasedBy Hitmen, Credits: Groepaz Code/Music/Idea): https://csdb.dk/webservice/?type=release&id=3385",
    "CSDb webservice type=sid id=13779 ('Sulfo 64', UsedIn releases 3457 'Sulfo 64' [X'98 C64 Music compo, place 7] and 3385 'Tracker Preview 0e'): https://csdb.dk/webservice/?type=sid&id=13779",
    "Release 3385 download zip (tracker.zip): http://csdb.dk/getinternalfile.php/15119/tracker.zip — contains TRACKER_PRV_HIT.PRG and NOTE_TO_TRACKER.PRG, the latter read directly (PETSCII) for the Groepaz readme text quoted above",
    "Local dataset: 1 file tagged TheTracker/Hitmen ('Sulfo 64'), by composer 'Groepaz' — data/composers/groepaz.json; see knowledge/COVERAGE.md"
  ]
}
```

## Overview

TheTracker/Hitmen is a SIDId Player-ID tag credited to **Groepaz**, a
well-known C64 scener and member of **Hitmen**. It names a native C64
music tracker/editor **preview build** — CSDb release 3385, titled
"Tracker Preview 0e" (Type: C64 Tool), released October 1998 by Hitmen,
credited to Groepaz for Code/Music/Idea. The release's own download
contains a PETSCII readme (`NOTE_TO_TRACKER.PRG`) in which Groepaz
describes it directly as an early, unfinished build: "the player I am
working on" with "the editor ... kinda crippled still" — this is a
preview snapshot, not a finished/published tool. Locally it appears in
only **1 file**, "Sulfo 64" (CSDb SID id 13779), by Groepaz himself
(data/composers/groepaz.json); that tune was itself performed a few
weeks earlier at the X'98 demo party (Hengelo, NL, Sep 1998), placing
7th in the C64 Music competition — both are Groepaz/Hitmen X'98-era
productions.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the tool's real title comes
from the CSDb release record, not SIDId (which carries no NAME/COMMENT);
(2) Groepaz's own included readme confirms native-C64, in-development
preview status in his own words; (3) the tagged tune predates the named
tool build by ~3 weeks; (4) no public source code found, only the
compiled preview PRG; (5) Groepaz has many other, separately-carded
credits in the scene — this tag is NOT assumed related to any of them;
(6) single-file, single-composer local usage.

## Disassembly notes

None done here. The release's PRG binaries were fetched only to read the
plain-text PETSCII readme for provenance; no disassembly of
`TRACKER_PRV_HIT.PRG` was performed. All Tier 3 fields remain `TODO`.

## Verification

Not verified. Seeded from `data/composers/groepaz.json`, `data/sidid.json`,
the CSDb webservice (`type=release&id=3385`, `type=sid&id=13779`), and the
release's own download archive (readme text only). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the CSDb webservice records for
release 3385 and SID 13779, the release's download zip (readme text), and
the local composer aggregation.

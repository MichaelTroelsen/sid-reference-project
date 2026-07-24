# Music-Composer

```json
{
  "id": "music-composer",
  "name": "Music-Composer",
  "aliases": ["MusicComposer_V4.0/Flash_Inc", "MusicComposer_V3.0/Flash_Inc", "MusicComposer_V2.0/Flash_Inc", "MusicComposer/FlashInc"],
  "authors": ["Fredrik Karlsson (Zodiac)", "Anders Elmén (Moon)"],
  "released": "1991 (SIDId dates the family to 1991; the surviving CSDb release is V3.0, 1992)",
  "status": "stub",
  "platform": "Native C64 tool (tracker/editor + its own replay routine, run on the C64 itself)",
  "csdb_release": 10755,

  "memory": {
    "load_address": "TODO: no public disassembly found",
    "zero_page": "DeepSID players.json lists 'Approx 6-12 bytes' of zero-page use, but does not give addresses — treat as an unverified secondhand estimate, not a real range",
    "layout": "TODO: no public disassembly found"
  },
  "entry": {
    "init": "TODO: no public disassembly found",
    "play": "TODO: no public disassembly found"
  },
  "speed": "TODO: no public disassembly found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public disassembly found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Versioned family (V2.0/V3.0/V4.0), all tagged '.../Flash_Inc' by Player-ID, i.e. Player-ID does not distinguish by author within the tag, only by version. Local dataset: V4.0=27 files, V3.0=8 files, V2.0=4 files (39 total across 3 raw tags; source: data/composers/*.json 'player' field aggregation, cross-checked against knowledge/COVERAGE.md).",
    "Extreme composer concentration: in this project's dataset every single Music-Composer-tagged file belongs to only two composers, 'Moon' and 'Shade' (V4.0 only), and Moon — one of the tool's two co-authors — accounts for the overwhelming majority. This reads as a personal/small-group tool built and used almost exclusively by its own author within Flash Inc., not a widely adopted third-party tracker (source: local data/composers/*.json aggregation).",
    "SIDId's comment records that 'All programming by Zodiac with assistance by Moon' — i.e. Zodiac wrote the code, Moon (the near-exclusive user in this dataset) was the composer/co-designer, not the primary coder. Don't assume the dominant composer is also the player's author (source: data/sidid.json byTag['MusicComposer/FlashInc'].comment).",
    "DeepSID's players.json entry is titled 'Flash Music Composer v3.0' (csdb_id 10755) and lists developer as 'Zodiac|Moon' and start_year 1992 — one year later than SIDId's '1991 Flash Inc.' released string for the family. Both are cited rather than silently picking one (source: data/players.json vs data/sidid.json).",
    "A second, later CSDb entry (release id 176616, 'Music-Composer V3.0 by Flash Inc. and War Deal Lamers') exists for what appears to be the same V3.0 tool bundled/re-released with a group's crack intro and two extra SID tunes on a .d64 — this is a re-release/repackaging, not evidence of a distinct version or a different author; not asserted as an edge."
  ],
  "sources": [
    "SIDId (data/sidid.json byTag 'MusicComposer/FlashInc'): name 'Music-Composer', authors 'Fredrik Karlsson (Zodiac) & Anders Elmén (Moon)', released '1991 Flash Inc.', comment 'All programming by Zodiac with assistance by Moon'",
    "DeepSID players.json (data/players.json): 'Flash Music Composer v3.0', developer 'Zodiac|Moon', start_year 1992, csdb_id 10755, platform 'Native / C64 emulator', zero_pages 'Approx 6-12 bytes'",
    "CSDb release (V3.0, credits Moon+Zodiac of Flash Inc.; alt title 'Music Editor'; re-verified 2026-07-24): https://csdb.dk/release/?id=10755",
    "CSDb release (V3.0 re-release bundled by Flash Inc. and War Deal Lamers, with crack intro + 2 extra SIDs): https://csdb.dk/release/?id=176616",
    "Demozoo — Flash Inc. group profile (Zodiac co-founder, Moon primary composer, formed June 1989): https://demozoo.org/groups/5028/",
    "Local dataset aggregation: knowledge/COVERAGE.md (ranks #19 at 27 files for V4.0, #91 at 8 files for V3.0, #160 at 4 files for V2.0) and data/composers/*.json per-file 'player' tags",
    "No public source code, disassembly, or format documentation found (web search: CSDb, Codebase64, general web) — every Tier 3 field below is left TODO rather than guessed.",
    "Re-checked 2026-07-24: CSDb release id 10755 lists an alternate title 'Music Editor' for the same V3.0 release, and confirms 'Code: Moon of Flash Inc.' and 'Code: Zodiac of Flash Inc.' credits (both listed as coders, not just Zodiac) — a fresh WebSearch/Codebase64 pass again found no source archive, disassembly, or format write-up anywhere: https://csdb.dk/release/?id=10755"
  ]
}
```

## Overview

Music-Composer is a native C64 music editor/tracker written by Fredrik
"Zodiac" Karlsson (code) with Anders "Moon" Elmén (assistance/composition) of
the Swedish demo group Flash Inc., first appearing around 1991-1992. Player-ID
tags files with it by version (`MusicComposer_V2.0` through `V4.0`,
`.../Flash_Inc`); in this project's dataset it is a small, heavily
self-used family — 39 files total, almost all by Moon himself (one of the
tool's two co-authors), plus a handful by "Shade" on V4.0. That concentration,
together with SIDId's note that Zodiac did "all programming" while Moon only
assisted, points to an in-house Flash Inc. tool rather than a widely
distributed third-party tracker. No source code, disassembly, or technical
write-up of its data format or replay routine was found anywhere searched
(CSDb, Codebase64, general web), so every runtime fact stays `TODO`.

## Quirks & gotchas

See the `quirks` array in the JSON block — version tagging granularity,
extreme composer concentration around co-author Moon, the Zodiac(code)/
Moon(assist) split, the two-CSDb-release situation (10755 vs the later
176616 repackage), and the 1991-vs-1992 release-year discrepancy between
SIDId and DeepSID.

## Disassembly notes

None performed. No public source or disassembly of Music-Composer was found
during this research pass; a future pass would need to start from a
representative `.sid` file (e.g. one of Moon's V4.0 tunes) and disassemble
its init/play from the PSID header, then trace through `sidm2-siddump` — the
only route to real memory-map/entry-point/format facts here.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed, from SIDId's cached `sidid.nfo` entry, DeepSID's `players.json`
curated entry, and two CSDb release pages. No Tier 3 runtime fact (memory
map, entry points, speed model, data formats, effect encoding) has been
confirmed by disassembly — all are honestly `TODO`. The single non-TODO
memory note (DeepSID's "Approx 6-12 bytes" zero-page estimate) is flagged in
the JSON as a secondhand, unverified figure, not a disassembly result.

Re-checked 2026-07-24 (local-data aggregation re-run against
`data/composers/*.json`, plus a fresh CSDb/Codebase64/general-web pass):
the 39-file / 3-tag / 2-composer picture is unchanged and confirmed still
current, and no source code, disassembly, or format documentation has
surfaced anywhere since the original pass. Still `stub` — nothing found
that clears the bar for `in-progress` (a public source documenting a
runtime fact outright).

## Sources

See the `sources` array — SIDId, DeepSID `players.json`, the two CSDb
release pages (10755, 176616), the Demozoo Flash Inc. group profile, and
this project's own `data/composers/*.json` aggregation for file/composer
counts.

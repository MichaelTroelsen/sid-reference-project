# SidTracker64

```json
{
  "id": "sidtracker64",
  "name": "SidTracker64",
  "aliases": ["SidTracker64", "SidTracker 64"],
  "authors": ["Daniel Larsson (Pernod / Horizon, Booze Design; ex-Fairlight, ex-Absolut Vodka Team)"],
  "released": "2015 (announced/released June 2015)",
  "status": "in-progress",
  "platform": "NOT a native C64 tool. Commercial iOS (iPad) app with its own proprietary SID emulation for the editor/preview; on export it generates a native C64 replay routine and writes PRG + SID + AAC files that run on real hardware. Closed source (no public repo found).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not documented publicly; exported PRG's load address is not stated in the DeepSID spec",
    "zero_page": "8 bytes, $F0-$F7 (documented in DeepSID's player database, not from a local disassembly)",
    "layout": "TODO: order-list/pattern/table addresses not documented. Player code itself is reported as under ~2500 bytes total (DeepSID spec)."
  },
  "entry": {
    "init": "TODO: no address documented",
    "play": "TODO: no address documented; DeepSID spec reports CPU cost ~20-24 rasterlines/frame (29 rasterlines measured in Jason Page's 'Ninth')"
  },
  "speed": "Frame-driven; PAL/NTSC timing and tempo both set via an author-configurable 'ticks per second' value (not a classic multispeed/CIA scheme) — per DeepSID's player spec.",

  "data_format": {
    "order_list": "TODO: exact byte layout undocumented. DeepSID describes the sequencer as 'single-channel patterns' referenced from a vertical order list (see track_cmds below).",
    "patterns": "128 patterns max, each up to 128 rows, single-channel (per-voice) — per DeepSID player spec. Exact row/byte encoding TODO.",
    "instruments": "32 instruments max — per DeepSID player spec. Field-level layout (ADSR/waveform/etc.) TODO.",
    "wavetable": "Arpeggio implemented via a wave table (per DeepSID player spec); exact structure TODO.",
    "pulsetable": "Programmable pulse width plus range-sweeping (per DeepSID player spec); exact structure TODO.",
    "filtertable": "Programmable filter cutoff plus range-sweeping, one hard-restart mode (on/off) (per DeepSID player spec); exact structure TODO."
  },
  "effects": {
    "encoding": "TODO: no command-byte layout documented. DeepSID's spec table describes commands generically as 'values in a vertical order list' rather than a classic per-row effect column — not enough to reconstruct the encoding.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Platform mismatch trap: this is an iPad app (Commercial, closed source, proprietary in-app SID emulation), not a C64-native tracker or a desktop cross-platform editor. It only touches real C64 hardware at export time, when it generates a native replay + PRG/SID/AAC. Source: data/players.json 'SidTracker 64' entry (platform 'iPad (using proprietary SID emulation)', distribution 'Commercial', source_code 'No').",
    "Author Daniel Larsson (handle Pernod) is a Swedish demoscener currently in Horizon and Booze Design (ex-Fairlight, ex-Absolut Vodka Team) — confirmed via his CSDb scener profile (https://csdb.dk/scener/?id=809) — but SidTracker64 itself has NO CSDb release entry of its own (a CSDb site search for 'SidTracker64'/'SidTracker 64' returns zero results, 2026-07-16). Only individual tunes made with it get CSDb SID-entry pages (e.g. the promo tune discussed in the CSDb forum thread 'True Survivor - SidTracker 64', https://csdb.dk/forums/?roomid=7&topicid=110169). sidid.nfo's own SidTracker64 entry likewise has no `reference` field, unlike most other entries.",
    "The official product site, sidtracker64.com, no longer resolves (DNS lookup failed as of 2026-07-16) — treat as likely discontinued/delisted; verify current App Store availability separately before citing it as 'currently sold'.",
    "Composer concentration in this dataset (HVSC MUSICIANS/ tree only, per data/composers/*.json): 228 files across 36 composers, no single composer dominant (top users: acrouzet 36 files ≈16%, Jason Page 33 ≈14%, lula 20, los-pat-moritas 19, vaz 18). Spread this wide across composers is evidence of a genuinely adopted commercial tool, not a personal/small-scene routine.",
    "The DeepSID player-database entry (data/players.json) documents several runtime characteristics (zero page $F0-$F7, player size under ~2500 bytes, ~20-24 rasterlines/frame CPU cost, 32 instruments, 128 patterns) that read like real reverse-engineering results, but no local disassembly or source was consulted to confirm them here — they are cited to DeepSID's own public spec table, one step removed from a primary disassembly. Treat memory/data_format fields above as 'documented elsewhere', not verified in this repo.",
    "One of its most consistent users per DeepSID's own description field is Jason Page (33 files in this dataset) — notable because Page is a veteran 1980s C64 game composer, illustrating that a 2015 iPad app found real adoption among original-era musicians, not just newer composers."
  ],
  "sources": [
    "Local dataset: data/players.json 'SidTracker 64' curated entry (full spec table: platform, distribution, source_code, zero_pages, player_size, cpu_time, instruments, patterns, arpeggio/pulsating/filtering, track_system, track_cmds, etc.) — DeepSID's player database, https://deepsid.chordian.net/",
    "Local dataset: data/sidid.json byTag.SidTracker64 (SIDId project sidid.nfo import): author 'Daniel Larsson (Pernod)', released '2015'",
    "Local dataset: 228 files across 36 composers tagged 'SidTracker64' in data/composers/*.json (matches knowledge/COVERAGE.md rank #2 uncarded family, 228 files)",
    "CSDb scener profile, Pernod/Booze Design/Horizon (real groups, handle confirmed; real name not disclosed on the page): https://csdb.dk/scener/?id=809",
    "CSDb group profile, Horizon (Sweden): https://csdb.dk/group/?id=2315",
    "CSDb forum thread 'True Survivor - SidTracker 64' (author confirms: 'Programmed by Pernod from the group Horizon for the iPad'; 'The tracker can export C64 .prg files, the tune in the video takes about 15 rasterlines'): https://csdb.dk/forums/?roomid=7&topicid=110169",
    "Synthtopia, 'New App, SidTracker64, Turns Your iPad Into A Commodore 64 Chiptunes Music System On Steroids' (2015-06-18): https://www.synthtopia.com/content/2015/06/18/sidtracker64-ipad-chiptunes-production-system/",
    "CDM (Create Digital Music), 'SidTracker 64 Puts Retro Chip Music Creation on Your iPad' (2015-06): https://cdm.link/2015/06/sidtracker-64-puts-retro-chip-music-creation-ipad/",
    "Apple App Store listing (app id 955421205): https://apps.apple.com/us/app/sidtracker64/id955421205",
    "CSDb site search for 'SidTracker64'/'SidTracker 64' returning zero release/group results, checked 2026-07-16: https://csdb.dk/search/?seinsel=all&search=SidTracker64",
    "Official site sidtracker64.com — DNS resolution failed (ENOTFOUND) as of 2026-07-16, likely discontinued"
  ]
}
```

## Overview

SidTracker64 is a commercial iPad app by Daniel Larsson (handle "Pernod", a
Swedish demoscener currently in Horizon and Booze Design), first released in
June 2015. Unlike the classic native C64 trackers this knowledge base mostly
covers, it is a closed-source iOS chiptune production tool with its own
proprietary SID emulation for editing/preview; only at export time does it
generate a native C64 replay routine and write out a PRG/SID/AAC. It ranks
#2 by file count among this project's uncarded player families (228 files
in the HVSC `MUSICIANS/` tree, per `knowledge/COVERAGE.md`), spread across 36
composers with no single dominant user — including veteran 1980s C64
composer Jason Page — which reads as genuine adoption of a real commercial
tool rather than a personal or small-scene routine.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) this is an **iPad
app, not a C64-native or desktop-cross-platform tracker** — its "player" only
exists as generated C64 code at export time; and (2) **it has no CSDb release
of its own** (only tunes made with it get CSDb SID-entry pages), and its
official site (`sidtracker64.com`) no longer resolves — so provenance here
leans on secondary sources (DeepSID's player database, CSDb forum/scener
pages, contemporary music-tech press) rather than a primary CSDb release page
or a manual.

## Disassembly notes

None performed here. DeepSID's own player database (`data/players.json`)
already documents several runtime characteristics (zero page `$F0-$F7`,
player size under ~2500 bytes, ~20-24 rasterlines/frame CPU cost, 32
instruments, 128 single-channel patterns of up to 128 rows) — these are
recorded in the JSON block above with that citation, but they were not
independently confirmed by a disassembly in this repo, so `entry`/exact
`data_format` byte layouts and `effects.encoding` remain `TODO`. A future
pass would need a representative exported `.sid`/`.prg` (e.g. from Jason
Page's HVSC folder) to disassemble and confirm these against DeepSID's
figures.

## Verification

**Not verified — `status: in-progress`.** Identity, authorship, platform, and
usage facts are confirmed from CSDb (scener/group pages, a forum thread with
the author's own description), contemporary press coverage, and this
project's local dataset. `status` is bumped past `stub` (rather than staying
there) only because DeepSID's public player-spec table plainly documents
several concrete runtime facts (zero-page range, player size, CPU cost,
pattern/instrument counts) with a clear citation — but none of that has been
independently confirmed by disassembly or an `mcp-c64`/`sidm2-siddump` trace,
so `verified` is not warranted.

## Sources

See the `sources` array — the cached DeepSID player-database entry and SIDId
entry in this repo, CSDb's scener/group pages for Pernod/Horizon, a CSDb
forum thread with the author's own description, and 2015-era music-tech press
(Synthtopia, CDM) plus the Apple App Store listing.

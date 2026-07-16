# The Music Shop (Don Williams / Brøderbund)

```json
{
  "id": "music-shop",
  "name": "The Music Shop (Don Williams / Brøderbund)",
  "aliases": ["MusicShop"],
  "authors": ["Don Williams"],
  "released": "1984 (Brøderbund Software; disk dated 27 Sep 1984 per Internet Archive scan)",
  "status": "stub",
  "platform": "Native C64 (\"Native / C64 emulator\" per DeepSID players.json), a staff-notation music editor — not a step-sequencer/tracker. Commercial, published by Brøderbund Software.",
  "csdb_release": 23970,

  "memory": {
    "load_address": "TODO: no public source/disassembly located",
    "zero_page": "DeepSID players.json field 'zero_pages': \"3 bytes ($3F-$41)\" — cited as-is, not independently verified via disassembly",
    "layout": "TODO: order list / pattern / instrument table addresses not documented publicly"
  },
  "entry": {
    "init": "TODO: per-file (would need a PSID header read or disassembly)",
    "play": "TODO: per-file (PSID header); DeepSID players.json gives an aggregate play-routine cost of 'Approx 6-14 rasterlines [SD]' but no address"
  },
  "speed": "TODO: no disassembly-confirmed speed model found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO — DeepSID players.json describes the track system as 'Multi-channel notes in measures', with '20 pages; each 4 beats (vanilla)' as the pattern/page structure; not independently verified",
    "instruments": "TODO — DeepSID's description notes instrument parameters labelled 'cmf' (course/medium/fine — large/moderate/small-scale adjustments), per its own player description text",
    "wavetable": "TODO",
    "pulsetable": "TODO — DeepSID players.json: 'pulsating: No; fixed values'",
    "filtertable": "TODO — DeepSID players.json: 'filtering: No; fixed values'"
  },
  "effects": {
    "encoding": "TODO — DeepSID players.json notes 'arpeggio: No', 'vibrato: Yes', 'hard_restart: No'; no command-byte encoding documented",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "One of the earliest C64 music composition tools — released 1984 by Brøderbund, predating most of the tracker-style editors in this collection. It is a musical-staff notation editor (traditional notes/measures, 'Get Notes' note-picker, one- or two-staff layout, key-signature selection), not a step-sequencer/tracker like GoatTracker or SoundTracker/SoundMonitor descendants — DeepSID's own description says it has 'no special effects except vibrato'.",
    "DeepSID's players.json spec box (developer, csdb_id 23970, zero_pages, cpu_time, track_system, patterns fields) is a curated third-party description, not a disassembly done for this card — every field sourced from it is recorded as a hedged TODO with attribution, per this project's Tier 3 rule.",
    "Two different CSDb release entries exist for 'The Music Shop', both are C64 cracks (not the original US commercial release, which predates the demoscene crack-release convention): id 23970 (Agent 16 / The Dark Knight, dated 26 Jan 1985 — this is the id DeepSID's players.json cites) and id 82453 (Garcisoft Ltd. crack, dated 10 Jul 1988 — this is the id SIDId's sidid.nfo cites as 'reference'). Both confirmed via CSDb webservice as the same underlying program; card uses the DeepSID-curated id (23970) as `csdb_release` since that is what the curated players.json entry keys on, and notes the SIDId-cited id (82453) separately here rather than silently picking one.",
    "No public source code, format specification, or third-party disassembly was located (CSDb, Codebase64, general web search). A forum discussion (Lemon64) on converting Music Shop files describes the on-disk format as proprietary and space-optimized for 170KB floppies, requiring real reverse-engineering to decode — consistent with no format doc existing. Every Tier 3 runtime field is an honest TODO for that reason.",
    "Local dataset: 56 files tagged 'MusicShop' across only 5 composers, and just 2 of those (Don Williams himself, the tool's author, 28 files/50%; Mehdi Safavy, 20 files/36%) account for 86% of tagged files. This is a strongly concentrated usage pattern — consistent with a commercial editor whose HVSC footprint is mostly the author's own bundled/demo compositions plus one prolific adopter, not a widely-spread scene tool (contrast e.g. GoatTracker's broad composer spread).",
    "Later ported/updated with MIDI output support (per contemporary web sources); this MIDI-capable revision's relationship (if any) to the C64-native playback routine tagged 'MusicShop' here is unconfirmed and not asserted as an edge."
  ],
  "sources": [
    "sidid:MusicShop (name 'The Music Shop', author 'Don Williams', released '1984 Brøderbund Software', reference https://csdb.dk/release/?id=82453) — data/sidid.json",
    "DeepSID players.json curated entry 'The Music Shop' (developer Don Williams, start_year 1984, csdb_id 23970, platform 'Native / C64 emulator', distribution 'Commercial', zero_pages '3 bytes ($3F-$41)', cpu_time 'Approx 6-14 rasterlines [SD]', track_system 'Multi-channel notes in measures', patterns '20 pages; each 4 beats (vanilla)', vibrato 'Yes', arpeggio 'No', pulsating/filtering 'No; fixed values', hard_restart 'No', note_input 'Dragging to lines') — data/players.json",
    "CSDb release 23970 ('The Music Shop', crack by Agent 16 / The Dark Knight, 1985): https://csdb.dk/release/?id=23970",
    "CSDb release 82453 ('The Music Shop', Garcisoft Ltd. crack, 1988): https://csdb.dk/release/?id=82453",
    "Internet Archive disk scan confirming author/publisher/date ('The Music Shop', Don Williams, Brøderbund Software, 27 Sep 1984): https://archive.org/details/The_Music_Shop_Don_Williams_Broderbund_09-27-1984",
    "Lemon64 forum thread on The Music Shop's proprietary/space-optimized file format and lack of conversion tooling: https://www.lemon64.com/forum/viewtopic.php?t=45281",
    "Local dataset: 56 files tagged 'MusicShop' across 5 composers (see knowledge/COVERAGE.md line 31; verified by aggregating data/composers/*.json)"
  ]
}
```

## Overview

"The Music Shop" is a 1984 C64 music composition program by Don Williams,
published commercially by Brøderbund Software — one of the earliest dedicated
C64 music tools in this collection, predating the tracker-style editors that
came to dominate the demoscene later in the decade. It presents music as
traditional staff notation rather than a step sequencer, and DeepSID
describes it as having no special effects beyond vibrato. In the local
dataset it is a small, concentrated tag: 56 files across only 5 composers,
86% of them by the author himself (Don Williams) and one prolific adopter
(Mehdi Safavy) — signal of a commercial editor whose HVSC footprint is mostly
its own bundled output rather than broad scene uptake.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: this is a **staff-notation
editor, not a tracker**; **two different CSDb release ids exist** for the
same underlying program (23970 used by DeepSID's players.json, 82453 used by
SIDId's sidid.nfo) — both confirmed as legitimate crack releases of the same
tool, neither is "wrong", just two different scene release events; and the
**strongly concentrated composer usage** (2 of 5 composers = 86% of files).

## Disassembly notes

None. No public source code, format specification, or third-party
disassembly was located for this player. DeepSID's players.json spec box
(zero-page usage, CPU cost, pattern/track structure) is curated third-party
description data, not a disassembly done for this card, and is recorded with
attribution rather than treated as verified. A future pass would need an
original disassembly of a `MusicShop`-tagged `.sid`'s init/play routines
(read from its PSID header) to fill any Tier 3 field honestly.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
publisher, release year, both CSDb release ids, composer-usage concentration)
are confirmed, from SIDId's `sidid.nfo`, DeepSID's curated `players.json`,
CSDb's webservice, and an Internet Archive disk scan. Every runtime field is
`TODO` because no public source or disassembly exists to found them.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), DeepSID `players.json`,
two CSDb release pages (23970, 82453), an Internet Archive disk scan, a
Lemon64 forum thread on the file format, and the local per-composer file
aggregation (`knowledge/COVERAGE.md` / `data/composers/*.json`).

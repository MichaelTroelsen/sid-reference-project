# Blackbird (Lft)

```json
{
  "id": "blackbird",
  "name": "Blackbird",
  "aliases": ["Blackbird/LFT"],
  "authors": ["Linus Åkesson (lft) / Kryo"],
  "released": "2017 (v1.0, Datastorm 2017, 12 Feb 2017); v1.1; v1.2, 19 Jan 2018",
  "status": "stub",
  "platform": "Native C64 tracker/editor — runs and is composed on the C64 itself (\"Native / C64 emulator\" per DeepSID players.json), not a cross-platform editor. Freeware.",
  "csdb_release": 161554,

  "memory": {
    "load_address": "TODO: no public source/disassembly located",
    "zero_page": "DeepSID players.json field 'zero_pages': \"16; can be user defined\" — cited as-is, not independently verified via disassembly",
    "layout": "TODO: order list / pattern / instrument table addresses not documented publicly. DeepSID players.json: player_size 'Less than 1400 bytes'; track_system 'Same size sequence stacking'; patterns '255; each up to 32 rows'"
  },
  "entry": {
    "init": "TODO: per-file (would need a PSID header read or disassembly)",
    "play": "TODO: per-file (PSID header); DeepSID players.json / HVSC news item both describe a CPU-cost guarantee ('Max 18 rasterlines' / 'guaranteed maximum of 18 raster lines, often less') but give no address"
  },
  "speed": "1x per DeepSID players.json ('speeds': '1x', 'digi': 'No'); no CIA-vs-raster confirmation found. A compact resident streaming player (9-12 pages) exists for embedding playback in other C64 programs, per the HVSC news announcement.",

  "data_format": {
    "order_list": "TODO — DeepSID players.json describes the track system as 'Same size sequence stacking' with up to 255 patterns, each up to 32 rows",
    "patterns": "TODO — DeepSID players.json: 'track_cmds': 'A word (XXYY) by each sequence'; note entry described as 'Protracker'-style (piano-roll-like note input)",
    "instruments": "TODO — DeepSID players.json: 48 instruments ('instruments': '48')",
    "wavetable": "TODO — DeepSID players.json: 'arpeggio': 'Wave table (relative) + Chord table'",
    "pulsetable": "TODO — DeepSID players.json: 'pulsating': 'Programmable'",
    "filtertable": "TODO — DeepSID players.json: 'filtering': 'Programmable'; 'hard_restart': 'Three modes'; 'vibrato': 'Can be simulated'"
  },
  "effects": {
    "encoding": "TODO: no command-byte encoding documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The author's own page frames Blackbird as a consolidation, not a from-scratch design: \"For some time, I've been making my C64 music using hacked-together cross-platform tools. Here the various features of those tools have been brought together into a polished native tracker.\" No specific prior tool is named with a CSDb id or a Player-ID tag of its own, so this is recorded as a quirk, NOT asserted as a `derives_from` edge — there is nothing concrete to point the edge at.",
    "TWO different CSDb release ids are in play for this family, same pattern as other cards in this KB: DeepSID's curated players.json cites csdb_id 161554 ('Blackbird 1.2', 19 Jan 2018), while SIDId's sidid.nfo cites reference https://csdb.dk/release/?id=153555 ('Blackbird 1.0', 12 Feb 2017). Both confirmed via CSDb as legitimate releases of the same tool at different versions; this card uses the DeepSID-curated (later) id as `csdb_release`, per the same convention used in music-shop.md.",
    "DeepSID's players.json spec box (developer, csdb_id, zero_pages, cpu_time, track_system, patterns, instruments, arpeggio/pulsating/filtering/hard_restart fields) is a curated third-party description, not a disassembly done for this card — every field sourced from it is recorded as a hedged TODO with attribution, per this project's Tier 3 rule.",
    "'Only the player source' (DeepSID players.json 'source_code' field) — i.e. the distributed zip is understood to include the compact resident streaming-player's assembly source (for embedding playback in other programs), NOT the full tracker/editor's own source. No explicit license text was located on the author's site or in web search for this streaming-player source; treat as unstated/unconfirmed, same caution as odintracker.md.",
    "The replay routine reportedly uses undocumented/illegal 6502 opcodes for size/speed optimization, per third-party forum commentary (not the author's own site) — noted here as an unverified claim, not confirmed by disassembly.",
    "Local dataset: 40 files tagged 'Blackbird/LFT' across only 3 composers, and one of those — Lft himself, the tool's author — accounts for 37 of the 40 (92.5%); the remaining 3 files split between Freqvibez (2) and Rytone (1). This is an extremely concentrated usage pattern, consistent with a personal/showcase tool with a polished manual and real releases but almost no adoption beyond its own author (contrast e.g. GoatTracker's broad composer spread)."
  ],
  "sources": [
    "sidid:Blackbird/LFT (name 'Blackbird 1.0', author 'Linus Åkesson (lft)', released '2017 lft', reference https://csdb.dk/release/?id=153555) — data/sidid.json",
    "DeepSID players.json curated entry 'Blackbird' (developer Lft, start_year 2017, end_year 2018, csdb_id 161554, platform 'Native / C64 emulator', distribution 'Freeware', source_code 'Only the player source', docs 'Built-in + PDF manual', zero_pages '16; can be user defined', player_size 'Less than 1400 bytes', cpu_time 'Max 18 rasterlines', instruments '48', patterns '255; each up to 32 rows', track_system 'Same size sequence stacking', track_cmds 'A word (XXYY) by each sequence', arpeggio/pulsating/filtering/hard_restart/vibrato fields, note_input 'Protracker') — data/players.json",
    "Author's official page (description, versions, downloads): https://www.linusakesson.net/software/blackbird/index.php",
    "Blackbird User's Guide (PDF manual): https://hd0.linusakesson.net/files/BlackbirdUsersGuide.pdf",
    "CSDb release 161554 ('Blackbird 1.2', Lft/Kryo, 19 Jan 2018): https://csdb.dk/release/?id=161554",
    "CSDb release 153555 ('Blackbird 1.0', Lft/Kryo, 12 Feb 2017): https://csdb.dk/release/?id=153555",
    "HVSC news announcement (streaming player size/CPU cost, version-history notes): https://www.hvsc.c64.org/download/files/news/20170624.txt",
    "Local dataset: 40 files tagged 'Blackbird/LFT' across 3 composers (verified by aggregating data/composers/*.json)"
  ]
}
```

## Overview

Blackbird is a 2017-2018 native C64 music tracker/editor by Linus Åkesson
(Lft) of Kryo, released at Datastorm 2017 and distributed as freeware with a
polished ~50-page PDF user's guide. The author describes it as a
consolidation of features from his own earlier "hacked-together cross-platform
tools" into one native C64 tracker, rather than a derivative of any other
scene player. In the local dataset it is a small, extremely concentrated tag:
40 files across only 3 composers, 92.5% of them by the author himself — a
polished, well-documented tool that nonetheless saw almost no adoption beyond
its own creator.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the author's own "brought
together into a polished native tracker" framing is NOT enough evidence for a
`derives_from` edge (no named prior tool with an id exists to point at); **two
different CSDb release ids** are in play (161554 for v1.2 per DeepSID,
153555 for v1.0 per SIDId); the distributed archive apparently includes
**only the compact resident player's source**, not the full editor, and its
license is unstated; and usage in this collection is **almost entirely the
author's own** (37/40 files).

## Disassembly notes

None. No public disassembly or full editor source was located. DeepSID's
players.json spec box (zero-page usage, player size, CPU cost, pattern/track
structure, instrument/effect capability fields) is curated third-party
description data — likely sourced from the author's own manual — not a
disassembly done for this card, and is recorded with attribution rather than
treated as verified. A future pass would need a `Blackbird/LFT`-tagged `.sid`'s
init/play routines read from its PSID header (or the "player source" inside
the distributed zip, if it is in fact the runtime replay and not just an
example/demo routine) to fill any Tier 3 field honestly.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release chain/versions, both CSDb release ids, platform, distribution,
composer-usage concentration) are confirmed, from SIDId's `sidid.nfo`,
DeepSID's curated `players.json`, the author's own site/manual, CSDb, and the
HVSC news archive. Every runtime field is `TODO` because no disassembly or
fully public editor source was read for this card.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), DeepSID `players.json`,
the author's official page and PDF manual, two CSDb release pages (161554,
153555), the HVSC news announcement, and the local per-composer file
aggregation (`knowledge/COVERAGE.md` / `data/composers/*.json`).

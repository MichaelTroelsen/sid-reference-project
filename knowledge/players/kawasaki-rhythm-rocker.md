# Kawasaki Rhythm Rocker (Ryo Kawasaki)

```json
{
  "id": "kawasaki-rhythm-rocker",
  "name": "Kawasaki Rhythm Rocker (Ryo Kawasaki)",
  "aliases": ["Kawasaki_Rhythm_Rocker"],
  "authors": ["Ryo Kawasaki"],
  "released": "1984 (developed March 1984, released June 1984) — Wikipedia's dedicated 'Kawasaki Synthesizer' article, Kawasaki_Rhythm_Rocker subsection; corroborated by CSDb sid-entry id 51333 ('Satellite Station'), which independently records 'Released: 1984 Sight&Sound Music Software'",
  "status": "stub",
  "platform": "Native C64 music/rhythm tool — one of FOUR C64 programs personally written by real-world jazz-fusion guitarist and guitar-synthesizer pioneer Ryo Kawasaki (Kawasaki Synthesizer, Kawasaki Rhythm Rocker, Kawasaki Magical Musicquill, Kawasaki MIDI Workstation), 'distributed by Sight and Sound Music' per his own Wikipedia biography. Per Wikipedia's dedicated Kawasaki_Rhythm_Rocker subsection: keyboard-input synthesizer-style composition tool with 'space sounds and high-resolution graphics', letting the player alter tempo/dub/bass and record compositions — 'noted to be considerably different from Kawasaki Synthesizer' despite similar keyboard input. A confirmed, non-coincidental celebrity identity — see the already-carded sibling knowledge/players/kawasaki-synthesizer.md.",
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
    "SIDId has NO entry at all for 'Kawasaki_Rhythm_Rocker' (checked directly) — unlike 'Kawasaki_Synthesizer', which also has no SIDId NAME/reference/comment but at least resolves via this project's own composer-tag matching; this tag has zero SIDId presence.",
    "CONFIRMED IDENTITY (same sourcing as the sibling card): the C64-scene 'Ryo Kawasaki' (HVSC lists country JAPAN/Estonia) is the same person as the real jazz-fusion guitarist and guitar-synth pioneer Ryo Kawasaki (1947-2020) — his own Wikipedia biography explicitly lists FOUR self-written C64 programs including 'Kawasaki Rhythm Rocker', 'distributed by Sight and Sound Music'. See knowledge/players/kawasaki-synthesizer.md for the full sourcing of this identity match (Wikipedia bio + a dedicated 'Kawasaki Synthesizer' Wikipedia article + Billboard obituary).",
    "TITLE/PRODUCT DISCREPANCY, reproduced here rather than silently resolved: Wikipedia's dedicated 'Kawasaki Synthesizer' article states plainly that 'Satellite Station' is a techno track bundled with the ORIGINAL Kawasaki Synthesizer product ('The program came with a software version of a techno track by Kawasaki entitled Satellite Station'), and its Kawasaki_Rhythm_Rocker subsection makes NO mention of that track at all — yet this project's own local tag data files the exact file 'Satellite Station' under THIS tag, 'Kawasaki_Rhythm_Rocker', not 'Kawasaki_Synthesizer'. Directly re-verified this pass (fetched both Wikipedia sections verbatim). Either a Wikipedia/product conflation, or genuine shared engine/branding — left unresolved; no edge asserted between kawasaki-rhythm-rocker and kawasaki-synthesizer absent a disassembly.",
    "Census confirmed this pass: exactly 1 file across the whole local dataset carries the 'Kawasaki_Rhythm_Rocker' tag — 'Satellite Station', by Ryo Kawasaki (data/composers/ryo-kawasaki.json, CSDb sid-entry id 51333). All other Kawasaki/Ryo_Kawasaki files in that composer's folder resolve to the 'Kawasaki_Synthesizer' or 'Ryo_Kawasaki' tags instead, not this one.",
    "PSID header metadata (NOT a disassembly fact, recorded here only): CSDb's sid-entry for 'Satellite Station' (id 51333, fetched via scripts/lib/csdb-client.js) reports LoadAddr=InitAddr=$C265 (49765), PlayAddr=$C267 (49767), 1 subtune, SID model 6581, NTSC clock, DataSize 3109 bytes. This is PSID header data, not a verified entry-point disassembly — left out of the Tier 3 `entry`/`memory` fields per this project's own extraction rules.",
    "No CSDb release-type entry (product/group release) found for 'Kawasaki Rhythm Rocker' as a tool — only the single sid-type music-file entry above. csdb_release left TODO rather than filled with the sid id, which is a different CSDb namespace (see this project's CLAUDE.md csdbId landmine note).",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Kawasaki_Rhythm_Rocker': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Wikipedia — Ryo Kawasaki (biography; lists 'Kawasaki Rhythm Rocker (1984)' among four self-written C64 programs, 'distributed by Sight and Sound Music'): https://en.wikipedia.org/wiki/Ryo_Kawasaki",
    "Wikipedia — 'Kawasaki Synthesizer' article, Kawasaki_Rhythm_Rocker subsection (release date, platform, feature description, quoted verbatim this pass): https://en.wikipedia.org/wiki/Kawasaki_Synthesizer",
    "CSDb webservice, type=sid id=51333 (queried via scripts/lib/csdb-client.js, depth=4): 'Satellite Station' by Ryo Kawasaki, Released '1984 Sight&Sound Music Software' — https://csdb.dk/sid/?id=51333",
    "Sibling KB card (identity sourcing shared with this card): knowledge/players/kawasaki-synthesizer.md",
    "data/composers/ryo-kawasaki.json (profile: full_name Ryo Kawasaki, born 1947-02-25, died 2020-04-13, country Japan/Estonia, affiliation Sight & Sound; folder census: 1 file tagged Kawasaki_Rhythm_Rocker, csdb_id 51333)"
  ]
}
```

## Overview

Kawasaki Rhythm Rocker is one of four C64 music programs personally written
by real-world jazz-fusion guitarist and guitar-synth pioneer **Ryo
Kawasaki** (1947-2020), per his own Wikipedia biography, alongside the
already-carded [Kawasaki Synthesizer](kawasaki-synthesizer.md). Wikipedia's
"Kawasaki Synthesizer" article carries a dedicated Kawasaki_Rhythm_Rocker
subsection: "developed in March 1984 and released in June of the same
year", a keyboard-input, synthesizer-style composition tool with "space
sounds and high-resolution graphics" letting the player alter tempo, dub
and bass, "noted to be considerably different from Kawasaki Synthesizer"
despite similar keyboard input. Census-confirmed this pass: only 1 file is
locally tagged with this exact signature — "Satellite Station" (CSDb
sid-entry id 51333, independently dated "1984 Sight&Sound Music Software")
— which notably is the SAME title Wikipedia's "Kawasaki Synthesizer"
article says was bundled with THAT other product, not this one; a
discrepancy re-verified verbatim this pass and left unresolved rather than
silently corrected.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the celebrity identity match is
confirmed via the same sourcing as the sibling card, not re-derived here;
(2) the "Satellite Station" title/product discrepancy between this tag and
Kawasaki_Synthesizer is explicitly unresolved — no edge asserted between
the two cards; (3) SIDId has zero presence for this exact tag; (4) CSDb has
no release-type entry for this title as a tool, only the one sid-type
music-file entry, so `csdb_release` stays TODO.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. PSID header values (load/init/play addresses) were
read off CSDb's sid-entry during this pass but are recorded only as a
`quirks` entry, not written into `entry`/`memory`, per this project's
extraction rules distinguishing header metadata from a real disassembly.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/ryo-kawasaki.json`, `data/sidid.json`) plus Wikipedia and
CSDb research (this pass filled `released` and `platform`; `csdb_release`
remains TODO — no release-type CSDb entry exists for this title).
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), two Wikipedia
articles (biography + the dedicated Kawasaki_Rhythm_Rocker subsection),
CSDb's webservice sid-entry 51333, the sibling kawasaki-synthesizer.md
card, and the local composer profile.

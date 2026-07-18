# Kawasaki Rhythm Rocker (Ryo Kawasaki)

```json
{
  "id": "kawasaki-rhythm-rocker",
  "name": "Kawasaki Rhythm Rocker (Ryo Kawasaki)",
  "aliases": ["Kawasaki_Rhythm_Rocker"],
  "authors": ["Ryo Kawasaki"],
  "released": "TODO: no exact date found for this specific title; distributed by Sight and Sound Music alongside 'Kawasaki Synthesizer' (1983) per Wikipedia's Ryo Kawasaki biography",
  "status": "stub",
  "platform": "Native C64 music/rhythm tool — one of FOUR C64 programs personally written by real-world jazz-fusion guitarist and guitar-synthesizer pioneer Ryo Kawasaki (Kawasaki Synthesizer, Kawasaki Rhythm Rocker, Kawasaki Magical Musicquill, Kawasaki MIDI Workstation), 'distributed by Sight and Sound Music' per his own Wikipedia biography. A confirmed, non-coincidental celebrity identity — see the already-carded sibling knowledge/players/kawasaki-synthesizer.md.",
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
    "TITLE/PRODUCT DISCREPANCY, reproduced here rather than silently resolved: the sibling kawasaki-synthesizer.md card's own research found that Wikipedia's dedicated 'Kawasaki Synthesizer' article states THAT product bundled a bonus techno track titled 'Satellite Station' — but this project's own local tag data instead files the exact file 'Satellite Station' under THIS tag, 'Kawasaki_Rhythm_Rocker', not 'Kawasaki_Synthesizer'. This is either a Wikipedia conflation of Kawasaki's two products, or genuine shared engine/branding between them — left unresolved by both cards; no edge asserted between kawasaki-rhythm-rocker and kawasaki-synthesizer absent a disassembly.",
    "Single locally tagged file: 'Satellite Station', by Ryo Kawasaki himself (data/composers/ryo-kawasaki.json).",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Kawasaki_Rhythm_Rocker': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Wikipedia — Ryo Kawasaki (biography; lists 'Kawasaki Rhythm Rocker' among four self-written C64 programs, 'distributed by Sight and Sound Music'): https://en.wikipedia.org/wiki/Ryo_Kawasaki",
    "Sibling KB card (full identity sourcing, and the 'Satellite Station' title discrepancy first identified there): knowledge/players/kawasaki-synthesizer.md",
    "data/composers/ryo-kawasaki.json (profile: full_name Ryo Kawasaki, born 1947-02-25, died 2020-04-13, country Japan/Estonia, affiliation Sight & Sound)",
    "Local dataset: 1 file tagged Kawasaki_Rhythm_Rocker — 'Satellite Station', by Ryo Kawasaki"
  ]
}
```

## Overview

Kawasaki Rhythm Rocker is one of four C64 music programs personally written
by real-world jazz-fusion guitarist and guitar-synth pioneer **Ryo
Kawasaki** (1947-2020), per his own Wikipedia biography, alongside the
already-carded [Kawasaki Synthesizer](kawasaki-synthesizer.md). Only 1 file
is locally tagged with this exact signature — "Satellite Station" — which
notably is the SAME title Wikipedia's "Kawasaki Synthesizer" article claims
was bundled with THAT product, an unresolved discrepancy first flagged in
the sibling card and reproduced here rather than silently corrected.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the celebrity identity match is
confirmed via the same sourcing as the sibling card, not re-derived here;
(2) the "Satellite Station" title/product discrepancy between this tag and
Kawasaki_Synthesizer is explicitly unresolved — no edge asserted between
the two cards; (3) SIDId has zero presence for this exact tag.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/ryo-kawasaki.json`, `data/sidid.json`) plus the Wikipedia
sourcing already established in the sibling kawasaki-synthesizer.md card.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), Wikipedia, the
sibling kawasaki-synthesizer.md card, and the local composer profile.

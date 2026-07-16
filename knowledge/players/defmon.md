# defMON

```json
{
  "id": "defmon",
  "name": "defMON",
  "aliases": ["DefMon"],
  "authors": ["Frantic / Hack'n'Trade (given name Mats, per SIDId)"],
  "released": "Made 2008, first public release Aug 2013 (leaked); latest CSDb entry V20201008, 8 Oct 2020",
  "status": "stub",
  "platform": "Native C64 tool: an on-C64 editor with its own hand-written 6502 replay routine, not a cross-platform host tool. (A Python automation harness, defmon-driver on GitHub, drives it inside the VICE emulator for tooling purposes — that project's own 'cross-platform' framing describes the harness, not defMON itself.)",
  "csdb_release": 120965,

  "memory": {
    "load_address": "TODO: $xxxx (closed source; no public disassembly found)",
    "zero_page": "TODO: DeepSID's spec box (data/players.json) says '3 ($96 + $FB-$FC) + sometimes also $02' but this is DeepSID's own field, not independently confirmed by a disassembly here",
    "layout": "TODO: DeepSID describes the design as NOT using separate instrument/effect tables like most C64 editors, but a single flexible 'sound program' table of 256 rows ('chunks') referenced from a vertical order list of up to 128 patterns (32 rows each) — exact addresses not confirmed"
  },
  "entry": {
    "init": "TODO: $xxxx (source-available? no — closed, per players.json source_code:'No')",
    "play": "TODO: $xxxx; DeepSID's spec box states player CPU time as 'approx 16-20 rasterlines' but that is not a verified entry point"
  },
  "speed": "TODO: DeepSID's spec box lists '1x to 8x' but the actual multispeed signalling mechanism is not documented publicly",

  "data_format": {
    "order_list": "TODO: DeepSID describes a vertical order list of pattern bytes; format unconfirmed",
    "patterns": "TODO: DeepSID describes 128 patterns of up to 32 rows each; format unconfirmed",
    "instruments": "TODO: DeepSID describes 256 'sound program' rows shared for instruments+effects ('chunks', two per sequence step) instead of the usual separate instrument table; format unconfirmed",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: closed source; no public disassembly or format spec found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's `reference` for the `DefMon` tag (CSDb release 120965, 'Defmon &D') is NOT defMON's own tool-release page — it's a 2013 leak/repack of an early build, distributed and cracked by Genesis Project (crack: Zyron; original supply: Sixx), per the CSDb release page itself. The canonical, actively-maintained tool entry is a separate CSDb release, 196474 ('defMON V20201008', Hack'n'Trade, 8 Oct 2020) — cited in data/players.json. Both are recorded under `sources` below; `csdb_release` in this card follows SIDId's own reference (120965) since that is what SIDId's comment/dataset link is keyed to, but readers wanting the current tool page should use 196474.",
    "SIDId's comment for this tag is 'Made in 2008, released in 2013' — i.e. a 5-year gap between when Frantic built it and when a build became publicly available (via the Genesis Project leak, not an official release by Frantic).",
    "Design is unusual among C64 trackers: per DeepSID's spec box (data/players.json) and an independent description (electro.pizza, 2019), defMON does not use separate instrument/wavetable/effect tables — everything funnels through one 'sound program' table of reusable chunks, with two chunks executable per sequence step. Treat any card field describing 'instruments' as an approximation until a real disassembly confirms it.",
    "No public source code was found for the C64 replay/editor (players.json: `source_code: \"No\"`; no GitHub/CSDb source archive turned up in this pass) — distribution is freeware ('Freeware (?)' per players.json, i.e. even that is not stated with full certainty). This is a public-but-closed tool like DefleMask (see deflemask.md), not an open-source one like CheeseCutter/GoatTracker — keep runtime fields TODO rather than guessing.",
    "Composer concentration in this dataset is heavy: of 102 files tagged `DefMon` across 10 composers, goto80 (Anders 'Goto80' Carlsson) alone accounts for 46 (~45%) and Martin Demsky 26 (~25%) — together ~70%. This matches external sources: an interview (atlantis-prophecy.org) describes goto80 relocating to the same city as Frantic and running weekly 'defJAMS' test/performance sessions with him, and electro.pizza (2019) independently calls out goto80 as a heavy defMON user for recordings and live performance. Signal that this is a small-scene tool built around a specific circle of live-performance chip musicians (also DIN-sync/MIDI/Gameboy-sync aimed) rather than a broadly adopted general tracker.",
    "The `defmon-driver` GitHub project (github.com/anarkiwi/defmon-driver) is a third-party Python automation framework that drives defMON headlessly inside VICE (`asid-vice`) — useful as an *external* reference for how the tool behaves under emulation, but it is not defMON's own source and doesn't document the replay's internals."
  ],
  "sources": [
    "sidid:DefMon (author 'Mats (Frantic of Hack'n'Trade)', released 2013, comment 'Made in 2008, released in 2013', reference https://csdb.dk/release/?id=120965) — data/sidid.json",
    "CSDb release 120965 ('Defmon &D', Genesis Project leak/crack, 7 Aug 2013): https://csdb.dk/release/?id=120965",
    "CSDb release 196474 ('defMON V20201008', Hack'n'Trade, 8 Oct 2020 — the canonical current tool page): https://csdb.dk/release/?id=196474",
    "DeepSID player spec box (data/players.json, title 'defMON'): developer Frantic, start_year 2013, end_year 2020, site http://toolsforscholars.com/defmon/doku.php?id=download:download, source_code 'No', distribution 'Freeware (?)'",
    "Independent description of the chunk-based instrument/effect design and goto80's heavy use: electro.pizza (2019) — https://electro.pizza/2019/07/defmon-vice-chip/",
    "Interview with goto80 describing defMON's origin, Frantic building it solo for years, and the weekly 'defJAMS' testing sessions: Recollection interviews — https://www.atlantis-prophecy.org/recollection/?load=interviews&id_interview=189",
    "Pouet.net prod entry (leak framing, 'The best music-editor for C64 ever made'): https://www.pouet.net/prod.php?which=62178",
    "Third-party automation harness (not defMON's own source): https://github.com/anarkiwi/defmon-driver",
    "Local dataset: 102 files tagged `DefMon` across 10 composers (see knowledge/COVERAGE.md rank #12; composer breakdown computed from data/composers/*.json in this research pass)"
  ]
}
```

## Overview

defMON is a native C64 music tracker/editor by Frantic of Hack'n'Trade, built
solo starting around 2008 and first surfacing publicly via a 2013 Genesis
Project leak/crack (CSDb release 120965), with development continuing under
Hack'n'Trade's own releases through at least 2020 (CSDb release 196474). It is
notable for a design that departs from the usual C64 tracker layout — no
separate instrument/wavetable/effects tables, but a single shared table of
reusable "sound program" chunks — and for MIDI/DIN-sync/Gameboy-sync support
aimed squarely at live chiptune performance. Usage in this dataset (102 files,
10 composers) is dominated by goto80 (Anders Carlsson) and Martin Demsky
(~70% combined), consistent with goto80's own documented close involvement in
the tool's development and testing. It is closed-source freeware, so this
card is identity/provenance only — no runtime facts are asserted.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) SIDId's CSDb
`reference` for this tag points at a third-party leak/crack release, not
defMON's own canonical tool page — both are cited so a future reader isn't
misled; (2) the tool's design (a single chunk table instead of separate
instrument/effect tables) is described consistently by two independent public
sources but has not been confirmed by disassembly here, so every
`data_format`/`effects` field stays `TODO` rather than restating those
descriptions as verified fact.

## Disassembly notes

None. No public source code or disassembly of defMON's C64 replay routine was
located in this research pass (closed source, per DeepSID's `source_code: No`
and no GitHub/CSDb source archive found). A future pass would need to
disassemble a representative `DefMon`-tagged `.sid` (e.g. from goto80's or
Martin Demsky's catalogue, the two dominant composers in this dataset) from
its PSID header and trace it through `sidm2-siddump` — the only route to real
memory-map/entry-point/format facts, since no source exists to read instead.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release chain, composer usage, closed-source status) are confirmed, from
SIDId, two CSDb release pages, DeepSID's cached player spec box, and two
independent web sources (an interview and a blog writeup) that corroborate
each other on the chunk-based design and goto80's involvement. Every
`memory`/`entry`/`speed`/`data_format`/`effects` field is `TODO` because no
source or disassembly was available to confirm it — an honest stub beats a
guessed memory map.

## Sources

See the `sources` array — SIDId's `DefMon` entry, CSDb releases 120965 and
196474, DeepSID's cached player spec box (`data/players.json`), an
electro.pizza writeup, a Recollection interview with goto80, the Pouet.net
prod entry, and the third-party `defmon-driver` automation project (cited as
context, not as defMON's own source).

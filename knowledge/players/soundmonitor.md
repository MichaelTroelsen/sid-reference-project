# SoundMonitor

```json
{
  "id": "soundmonitor",
  "name": "SoundMonitor",
  "aliases": ["SoundMonitor/MusicMaster_1", "SoundMonitor/MusicMaster_2", "Soundmonitor", "MusicMaster (replay routine)"],
  "authors": ["Chris Hülsbeck"],
  "released": "1986 (v1.0 Oct 1986; v1.1 1986; v1.3 1987)",
  "status": "in-progress",
  "platform": "Native C64 SID editor. Published as a type-in listing in 64'er magazine 10/1986 (so its source was public by design; formal license unclear).",
  "csdb_release": 59929,

  "memory": {
    "load_address": "Editor init at $1000 (SYS 4096). Standalone replay ('MusicMaster') at $C000 (SYS 49152).",
    "zero_page": "TODO: not documented in surveyed sources",
    "layout": "TODO: pattern/data layout not documented (would need disassembly of a SoundMonitor .sid or the 64'er listing)"
  },
  "entry": {
    "init": "$1000 (SYS 4096) in the editor context.",
    "play": "~$C000 (SYS 49152) — the detachable 'MusicMaster' playback routine. LOCALLY CONFIRMED: a real HVSC SoundMonitor file traced with init=$C000, play=$C020, 472 register writes/50 frames. So the replay does live at $C000 as documented (the exact play entry is $C020 in that build)."
  },
  "speed": "TODO: single-speed assumed (era-typical). Uses arpeggio to simulate chords beyond the SID's 3 voices.",

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
    "'MusicMaster' is NOT a separate rival tool — it is SoundMonitor's own detachable replay routine (Hülsbeck wrote the MusicMaster playback routine before the editor; songs saved with it play independently). The DeepSID tag 'SoundMonitor/MusicMaster' lumps one engine + its detachable player. CAUTION: there is an UNRELATED 1983 'MusicMaster' (Chris Metcalf & Marc Sugiyama, Compute! #37) — do not conflate.",
    "HISTORICALLY LOAD-BEARING: SoundMonitor is the acknowledged ancestor of the tracker paradigm — Karsten Obarski used it on the C64 and reused its layout for the Amiga Ultimate Soundtracker (1987), adding samples and a 4th channel. German Wikipedia calls it 'gewissermaßen den Ursprung' of tracker software. (Cross-platform lineage — not wired as a C64 graph edge.)",
    "Published as a 64'er magazine type-in listing (10/1986, 'Listing des Monats'), originating from a 64'er music competition Hülsbeck won with 'Shades'. So the 6502 source was public by design — a rare case where the listing itself is the primary technical source (license/rights nonetheless unclear).",
    "Downstream C64 derivative: 'Rockmonitor' (adds keyboard control + samples). The Dutch USA-Team's 'Rock Monitor' (this project's DUSAT/RockMon tag) is also a SoundMonitor derivative — a lineage to wire when RockMon is carded.",
    "Tags _1/_2 plausibly track versions, but the exact mapping is UNKNOWN. 1,922 files / 229 composers — consistent with being the most popular C64 editor of the late-1980s European scene."
  ],
  "sources": [
    "C64-Wiki (DE): https://www.c64-wiki.de/wiki/Soundmonitor (versions, SYS $1000/$C000 addresses, 64'er publication)",
    "Wikipedia (DE): https://de.wikipedia.org/wiki/Soundmonitor (MusicMaster-before-editor; tracker-origin claim)",
    "CSDb release: https://csdb.dk/release/?id=59929",
    "Soundtracker origins (Obarski/SoundMonitor lineage): https://xavier.borderie.net/blog/2021/09/22/soundtracker-origins-part-1-where-in-the-world-is-karsten-obarski/",
    "Primary technical source (not yet read here): the original 64'er 10/1986 type-in listing (pp. 53-64)",
    "Local dataset: 1,922 files tagged SoundMonitor/MusicMaster (see knowledge/COVERAGE.md). No SIDId entry."
  ]
}
```

## Overview

SoundMonitor is a native C64 SID editor by **Chris Hülsbeck**, published as a
**type-in listing in 64'er magazine 10/1986**. It is one of the most important
tools in SID history: the most popular C64 editor of the late-1980s European
scene (1,922 files / 229 composers here) and the **acknowledged ancestor of the
tracker paradigm** — Karsten Obarski reused its layout for the Amiga Ultimate
Soundtracker (1987). Its detachable replay routine, **MusicMaster**, is what the
DeepSID tag pairs with it (not a separate tool).

## Quirks & gotchas

See the `quirks` array. Load-bearing: **MusicMaster is SoundMonitor's own
replay routine** (and beware the unrelated 1983 Compute! "MusicMaster"); its
**tracker-ancestor lineage** to Ultimate Soundtracker; and that it was a
**published type-in listing**, so the source is public by design (the 64'er
10/1986 listing is the primary technical source, not yet read here).

## Disassembly notes

None done here, but unusually, the primary source is a **published magazine
listing** (64'er 10/1986), not a closed binary — reading that listing (or
disassembling a SoundMonitor `.sid`) is the route to memory/format facts. The
firm runtime hooks are init `$1000` (SYS 4096) and the detachable replay at
`$C000` (SYS 49152); arpeggio is used to fake chords.

## Verification

**Replay location LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.**
Traced a real HVSC SoundMonitor `.sid` with `sidm2-sid-trace`: init `$C000`,
play `$C020`, **472 register writes / 50 frames** — confirming the documented
`$C000` (SYS 49152) MusicMaster replay location and that it plays. ZP, data
format, and effect set remain `TODO` (pending the 64'er listing or a
disassembly), so it stays in-progress rather than verified.

## Sources

See the `sources` array — C64-Wiki, German Wikipedia, CSDb, the Soundtracker-
origins writeup, and the original 64'er 10/1986 listing as the primary
technical source. No SIDId entry.

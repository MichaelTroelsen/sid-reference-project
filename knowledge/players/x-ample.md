# X-Ample (Music Player)

```json
{
  "id": "x-ample",
  "name": "X-Ample (Music Player)",
  "aliases": ["X-Ample", "X-Ample Music Player", "XAP"],
  "authors": ["Helge Kozieleck & Markus Schneider (routine)", "Joachim Fräder (editor)", "Mario van Zeist (CPU optimizations)"],
  "released": "~1986-1988 (developed for Thomas Detert; no dated tool release found)",
  "status": "stub",
  "platform": "Native C64 in-house replay routine used by composer Thomas Detert (of the German group X-Ample Architectures) — NOT a publicly released standalone editor.",
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
  "speed": "TODO (CPU-optimized for low usage in games/demos — that was the design goal)",

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
    "The 'X-Ample' tag = the in-house replay routine of composer Thomas Detert, not a released editor. Per Detert: 'Helge Kozieleck and Markus Schneider did program a music routine for me. Joachim Fräder did the editor. Mario van Zeist (programmer of Hawkeye) did some improvements on the routine for less CPU-usage.'",
    "ORIGIN: Detert first used Chris Hülsbeck's SoundMonitor (~1986/87) but its replay ate too much CPU for games/demos — prompting this custom, CPU-light routine. So it's a from-scratch REPLACEMENT motivated by SoundMonitor's cost, NOT a derivative of it (no code edge).",
    "Shares its name with the German group X-Ample Architectures (XAP, 'example'; founded Jul 1988, closed 1997), of which Kozieleck/Schneider/Fräder/Detert were members. Do NOT conflate with the group's separate, later 'Compotech' editor (X-Ample & Lords of Sonic, ~1992-95).",
    "Mario van Zeist (Hawkeye's coder) optimized the routine — a loose link to the Hawkeye lineage (Future Composer later also gained a 'better driver from Hawkeye').",
    "Concentrated: 385 files across only 15 composers (Sonic, Thomas Detert, A-Man, Markus Schneider) — a tight German-scene cluster, consistent with a group-internal personal routine. Detert appears under other DeepSID tags too — TODO: confirm which of his files use X-Ample vs other routines. Replay internals all UNKNOWN — TODO."
  ],
  "sources": [
    "Recollection interview with Thomas Detert (direct authorship quote): http://www.atlantis-prophecy.org/recollection/?load=interviews&id_interview=173",
    "Remix64 interview with Thomas Detert (SoundMonitor origin, context): https://remix64.com/interviews/interview-thomas-detert.html",
    "CSDb X-Ample Architectures group: https://csdb.dk/group/?id=245 ; C64-Wiki (DE): https://www.c64-wiki.de/wiki/X-ample_Architectures",
    "Local dataset: 385 files tagged X-Ample across 15 composers (see knowledge/COVERAGE.md). No SIDId entry."
  ]
}
```

## Overview

The "X-Ample" tag is the **in-house C64 replay routine used by composer Thomas
Detert** — coded for him by Helge Kozieleck & Markus Schneider, with an editor
by Joachim Fräder and CPU optimizations by Mario van Zeist (coder of Hawkeye).
It shares its name with the German group X-Ample Architectures. It was a
CPU-light, from-scratch replacement for SoundMonitor, not a public tool. 385
files here across just 15 composers.

## Quirks & gotchas

See the `quirks` array. Load-bearing: it's a **group-internal routine, not a
released editor**; it was a **from-scratch replacement for SoundMonitor** (design
goal: less CPU — so *inspired by dissatisfaction with* SoundMonitor, not derived
from it); and it must not be confused with the group's later **Compotech**
editor. Internals `TODO`.

## Disassembly notes

None done here; only interview-level provenance exists. A disassembly of a
`MUSICIANS/D/Detert_Thomas/*.sid` (traced via `sidm2-siddump`) is the route to
memory/format facts — after confirming which of Detert's files actually use
X-Ample vs his other routines.

## Verification

**Not verified — `status: stub`.** Authorship, group, and origin are
interview-sourced (Recollection, Remix64); all runtime fields are `TODO`.

## Sources

See the `sources` array — the Recollection and Remix64 Detert interviews and
the X-Ample Architectures group pages. No SIDId entry.

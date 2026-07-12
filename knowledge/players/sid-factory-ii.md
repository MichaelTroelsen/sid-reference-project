# SID Factory II

```json
{
  "id": "sid-factory-ii",
  "name": "SID Factory II",
  "aliases": ["SF2", "SidFactory_II"],
  "authors": [
    "Thomas Egeskov Petersen (Laxity)",
    "JCH (assistance)",
    "Michel de Bree (assistance)"
  ],
  "released": "2019",
  "status": "in-progress",
  "platform": "Cross-platform editor (Windows / Mac / Linux, reSID preview) + native C64 player ('drivers')",
  "csdb_release": 210571,

  "memory": {
    "load_address": "TODO: driver-dependent — read from the chosen driver's source/build",
    "zero_page": "Approx 1-2 bytes, depends on driver (DeepSID spec) — exact addresses: TODO per driver",
    "layout": "TODO: driver-dependent; order lists / tables / sequences laid out by the driver"
  },
  "entry": {
    "init": "TODO: driver-dependent — see driver source (github.com/chordian/sidfactory2)",
    "play": "TODO: driver-dependent; single play call per frame, multispeed per driver"
  },
  "speed": "TODO: per-driver (1x + multispeed variants)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "JCH-style contiguous sequence stacking (see track_system)",
    "instruments": "32 instruments",
    "wavetable": "Wave table + arpeggio-only table (in driver 11)",
    "pulsetable": "Programmable (in driver 11)",
    "filtertable": "Programmable (in driver 11)"
  },
  "effects": {
    "encoding": "TODO: per-driver command encoding",
    "commands": {
      "vibrato": "Yes; via a command",
      "hard_restart": "Per-instrument (driver 11)"
    }
  },

  "edges": {
    "derives_from": ["sid-factory"],
    "successor_of": ["sid-factory"],
    "shares_routine_with": ["jch-newplayer"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Driver-based: the C64 player is a swappable 'driver' (e.g. driver 11), so memory map, ZP usage, CPU time and even the feature set depend on the driver — there is no single 'SF2 player'.",
    "Open source: full editor + driver source at github.com/chordian/sidfactory2 (GPL) — disassembly is usually unnecessary; read the driver .asm directly.",
    "Track system is JCH 'Contiguous sequence stacking' (JCH co-authored) — same sequence model as X-SID and the JCH NewPlayer line.",
    "Subtunes not supported yet (planned)."
  ],
  "sources": [
    "deepsid:players.json (SID Factory II)",
    "sidid:SidFactory_II/Laxity (released 2020, csdb release 210571)",
    "source:https://github.com/chordian/sidfactory2"
  ]
}
```

## Overview

SID Factory II (SF2) is Laxity's cross-platform SID music editor (2019, GPL),
built with assistance from JCH and Michel de Bree. Unlike a fixed player, SF2
separates the *editor* from swappable C64 **drivers** — the driver is the
actual player routine, and its capabilities (ZP footprint, CPU time, feature
set) vary. It descends from the original **SID Factory** (Laxity, 2006) and
uses JCH's "contiguous sequence stacking" track system, shared with X-SID and
the JCH NewPlayer lineage.

## Quirks & gotchas

- **There is no single "SF2 player."** Everything memory/CPU-related is
  *per driver* (driver 11 is the reference full-feature one). Any card fact
  about load address, ZP, or entry points must be qualified by which driver.
- **Source is public**, so for SF2 specifically you can skip disassembly and
  read `github.com/chordian/sidfactory2` — a rare luxury. Use it to *seed*
  the driver-level cards, then verify with `mcp-c64`.
- Arpeggio/pulse/filter are programmable **tables** (driver 11); hard-restart
  is per-instrument.

## Disassembly notes

TODO. For SF2, prefer the driver source over disassembly. When a specific
driver is documented, split it into its own card (e.g.
`sid-factory-ii-driver-11.md`) with concrete `memory`/`entry` values and link
it here via `edges.shares_routine_with`.

## Verification

Seeded from cached DeepSID `players.json`, SIDId (`SidFactory_II/Laxity`), and
the public source repo — **not yet** assembled/run through `mcp-c64`, so
`status: in-progress`. To reach `verified`: build a specific driver, confirm
its init/play entry points and ZP usage against the running program.

## Sources

- DeepSID `data/players.json` → "SID Factory II" (developer, platform, tables,
  instruments, track system).
- SIDId `sidid.nfo` → `SidFactory_II/Laxity` (author, released 2020, CSDb
  release 210571) and `SidFactory/Laxity` (the 2006 predecessor).
- Public source: <https://github.com/chordian/sidfactory2>.

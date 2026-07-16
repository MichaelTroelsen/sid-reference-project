# SID Factory II

```json
{
  "id": "sid-factory-ii",
  "name": "SID Factory II",
  "aliases": ["SF2", "SidFactory_II", "SidFactory_II/Laxity"],
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
    "layout": "Driver-dependent for tables/entry points (see sid-factory-ii-driver-11.md), but the CONTAINER format is editor-level and driver-independent: every .sf2 file is a C64 PRG with a $1337 magic word at the load address, followed by a TLV header-block chain (block IDs 1=Descriptor,2=DriverCommon,3=DriverTables,4=InstrumentDescriptor,5=MusicData,6-9=optional,255=End; blocks 1/2/3/4/5 are required or the file is rejected), then the driver binary + music-data tables, then an auxiliary-data chain (song names, instrument/command text, SID model/region) located via a pointer at C64 $0FFB — hardcoded, NOT pack-time-relocatable, unlike everything else. The whole block-chain parser is TopAddress-relative (block_address = load_address + 2), so an .sf2 can load anywhere above a hard floor of $0100 and under $D000 (music-data ceiling), and stay valid."
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
    "shares_routine_with": ["jch-newplayer", "sid-factory-ii-driver-11"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Driver-based: the C64 player is a swappable 'driver' (e.g. driver 11), so memory map, ZP usage, CPU time and even the feature set depend on the driver — there is no single 'SF2 player'.",
    "Open source: full editor + driver source at github.com/chordian/sidfactory2 (GPL) — disassembly is usually unnecessary; read the driver .asm directly.",
    "Track system is JCH 'Contiguous sequence stacking' (JCH co-authored) — same sequence model as X-SID and the JCH NewPlayer line.",
    "Subtunes not supported yet (planned).",
    "The driver-11 sub-card this card called for now exists: sid-factory-ii-driver-11.md. SIDM2 also ships (or evaluated) 5 other stock drivers (12-16, each a different size/feature tradeoff) plus a driver template for JCH NewPlayer V20 and its own custom from-scratch driver for native Laxity NewPlayer round-trips — none of those have their own sub-cards yet, only summarized where relevant on the players they target.",
    "SF2's editor architecture is genuinely open to new drivers: SIDM2 reverse-engineered the requirement as 'descriptor type 0x00, declared init/stop/update entry points, declared playback-state variable addresses, declared table addresses' — a new native driver needs zero SF2 source changes, only a conforming 6502 binary + header blocks. This is why SIDM2 was able to build working native drivers for several other players (Galway, ROMUZAK/MoN/Hubbard/DMC/Sound Monitor via a shared engine) without touching SF2 itself."
  ],
  "sources": [
    "deepsid:players.json (SID Factory II)",
    "sidid:SidFactory_II/Laxity (released 2020, csdb release 210571)",
    "source:https://github.com/chordian/sidfactory2",
    "tdz-c64-knowledge:doc 7f75330d7a4d 'SID Factory II Driver Family Comparison' (SIDM2) — full driver-11-through-16 + NP20 + custom-Laxity-driver feature matrix, found 2026-07-12",
    "tdz-c64-knowledge:doc f742a4d03d0c 'SF2 File Format (SID Factory II container)' (SIDM2) — the container/TLV/aux-chain facts pulled into memory.layout above",
    "tdz-c64-knowledge:doc 57738c395f16 'Authoring a Native SID Factory II Driver (SIDM2 method)' — the descriptor-genericity fact in quirks above; a full methodology doc, not a player card, not imported wholesale"
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

For SF2, prefer the driver source over disassembly. [Driver 11](sid-factory-ii-driver-11.md)
now has its own card, imported from SIDM2's separate knowledge-base effort
(also ingested into `tdz-c64-knowledge`) — concrete table offsets, command
encoding, and version history for the reference "luxury" driver. Any other
driver worth documenting (12-16, NP20, SIDM2's custom Laxity driver) should
get its own card the same way, linked here via `edges.shares_routine_with`.

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

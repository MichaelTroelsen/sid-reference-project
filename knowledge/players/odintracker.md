# Odin Tracker

```json
{
  "id": "odintracker",
  "name": "Odin Tracker",
  "aliases": ["OdinTracker", "Odin Tracker"],
  "authors": ["Zoltán Konyha (Zed)"],
  "released": "2000 (v1.13 dated 2001-04-17)",
  "status": "stub",
  "platform": "Native C64 tracker + its own C64 replay routine (source published; tunes need external packing to a runnable PRG)",
  "csdb_release": 12577,

  "memory": {
    "load_address": "TODO: $xxxx (native tracker; assemble from OdinTracker113src.zip)",
    "zero_page": "TODO: read the published 6502 source",
    "layout": "TODO: order list / patterns / table addresses (source-available, not yet read)"
  },
  "entry": {
    "init": "TODO: $xxxx (source-available, not yet disassembled)",
    "play": "TODO: $xxxx"
  },
  "speed": "TODO: frame-driven; multispeed unknown",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: read the published source (OdinTracker113src.zip)",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SOURCE IS AVAILABLE but not yet read: CSDb hosts `OdinTracker113src.zip` (6502 assembly source) alongside the binary. LICENSE is UNSTATED — the author published the source but no explicit license text was found; confirm permission before treating it as reusable.",
    "Native C64 tracker: its tunes use Odin Tracker's own replay routine and typically need an external packer to produce a standalone runnable PRG/SID.",
    "This card is a near-empty stub on purpose: the low-level engine facts (memory map, entry points, format) were NOT extracted — the source zip was located but not opened. Everything below the identity line is TODO, not guessed. The natural next step is to unzip and read OdinTracker113src.zip."
  ],
  "sources": [
    "Source archive (6502 asm, license unstated): OdinTracker113src.zip on CSDb — https://csdb.dk/release/?id=2628",
    "sidid:OdinTracker (author Zoltán Konyha (Zed), 2000, CSDb release 12577 — https://csdb.dk/release/?id=12577)",
    "Local dataset: 156 files tagged OdinTracker (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Odin Tracker is a native C64 SID tracker by Zoltán Konyha (Zed), circa
2000-2001 (v1.13 dated 2001-04-17). It's included here because — unusually
for a classic-era tracker — its **6502 source is published** on CSDb
(`OdinTracker113src.zip`), making it a genuine open-source (source-available)
candidate rather than a closed binary. 156 files in the collection use it.

## Quirks & gotchas

See the `quirks` array. The honest state of this card: the **source exists
but hasn't been read**, and the **license is unstated**. So every low-level
field is `TODO` rather than filled from a guess — this is a deliberate stub,
not a completed card. Confirm the license/permission before treating the
published source as reusable.

## Disassembly notes

None yet. The concrete next step is to fetch and unzip
`OdinTracker113src.zip` (CSDb release 2628) and read the replay routine —
entry points, memory map, order-list/pattern/table layout — then fill the
`memory`/`entry`/`data_format`/`effects` fields and, ideally, assemble +
trace it through `sidm2-siddump` to promote past `stub`.

## Verification

**Not verified, and not yet even sourced at the engine level — `status:
stub`.** Only the identity facts (author, year, CSDb release, source-archive
existence) are confirmed, from the cached SIDId entry and CSDb. All
memory/entry/format fields are `TODO` pending a read of the published source.

## Sources

See the `sources` array — the published `OdinTracker113src.zip` (CSDb 2628)
and the cached SIDId entry (`OdinTracker`, Zoltán Konyha / Zed, 2000).

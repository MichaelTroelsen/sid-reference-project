# SID Factory

```json
{
  "id": "sid-factory",
  "name": "SID Factory",
  "aliases": ["SF1", "SidFactory", "SidFactory/Laxity"],
  "authors": ["Thomas Egeskov Petersen (Laxity)"],
  "released": "2005",
  "status": "in-progress",
  "platform": "Native C64 (editor + player run on the C64)",
  "csdb_release": 39519,

  "memory": {
    "load_address": "TODO: driver-dependent — needs disassembly (source is NOT public)",
    "zero_page": "Approx 1-5 bytes, depends on driver (DeepSID spec) — exact addresses: TODO",
    "layout": "TODO: driver-dependent"
  },
  "entry": {
    "init": "TODO: driver-dependent — needs disassembly",
    "play": "TODO: driver-dependent; multispeed 1x-4x on driver 5"
  },
  "speed": "1x to 4x (driver 5 only)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "125/128 patterns, each up to 64 rows (editor limit)",
    "instruments": "32 instruments",
    "wavetable": "Wave table + arpeggio-only table (driver 5)",
    "pulsetable": "Programmable",
    "filtertable": "Programmable"
  },
  "effects": {
    "encoding": "TODO: per-driver command encoding",
    "commands": {
      "vibrato": "Yes; calculated in driver 5",
      "hard_restart": "Per-instrument"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["jch-newplayer", "laxity-newplayer"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Driver-based: like SF2, the C64 player is a swappable driver — 'Driver 5 is luxury; Driver 6 is fast' (DeepSID). ZP (1-5 bytes) and CPU (26-32 rasterlines) are per-driver.",
    "Native C64 editor (runs ON the C64) — the predecessor to SID Factory II, which moved the editor to Windows/Mac/Linux.",
    "Source is NOT public (unlike SF2) — so SF1's drivers genuinely require disassembly to document.",
    "Uses JCH 'Contiguous sequence stacking' track system; Laxity also released Laxity NewPlayer V21 the same year (2006) — whether SF1's drivers share code with it is a hypothesis worth checking (candidate: laxity-newplayer)."
  ],
  "sources": [
    "deepsid:players.json (SID Factory) — developer, 2005-2006, drivers, tables, 125/128 patterns",
    "sidid:SidFactory/Laxity (released 2006, csdb release 39519)",
    "csdb:release/39519 — 'SID Factory 0.5 (alpha 1)', 2006-09-02, Code+Music by Laxity"
  ]
}
```

## Overview

SID Factory (SF1) is Laxity's native-C64 SID music editor (2005–2006, Vibrants),
the direct predecessor of [SID Factory II](sid-factory-ii.md). Like SF2 it is
driver-based (the player is a swappable "driver"; driver 5 is the full-feature
one, driver 6 the fast one) and uses JCH's "contiguous sequence stacking" track
system. Unlike SF2 it runs entirely on the C64 and its source is not public.

## Quirks & gotchas

- **Per-driver everything.** DeepSID's own spec already qualifies ZP (≈1–5
  bytes) and CPU (26–32 rasterlines) as "driver 5" figures; other drivers
  differ. Split a specific driver into its own facts once disassembled.
- **No public source** — SF1 is a real disassembly target (SF2 was a shortcut
  because its source is on GitHub; that shortcut does not exist here).
- Editor limits: 125/128 patterns, up to 64 rows; 32 instruments; multispeed
  1×–4× on driver 5.

## Disassembly notes

TODO. Start from the `.sid` header (load/init/play), then follow the
[disassemble-a-player playbook](../playbooks/disassemble-a-player.md). Compare
the driver's sequence/table walk against SF2's public driver source — the
track system is shared, so the data-format is a strong lead even though the
code differs.

## Verification

Seeded from cached DeepSID `players.json`, SIDId (`SidFactory/Laxity`), and
CSDb release 39519 — **not** yet assembled/run through `mcp-c64`. `status:
in-progress`. To reach `verified`: disassemble a specific driver, confirm its
init/play + ZP against the running program.

## Sources

- DeepSID `data/players.json` → "SID Factory" (Laxity, 2005–2006, drivers 5/6,
  32 instruments, 125/128 patterns, JCH track system).
- SIDId `sidid.nfo` → `SidFactory/Laxity` (released 2006, CSDb 39519).
- CSDb release 39519 → "SID Factory 0.5 (alpha 1)", 2006-09-02, Code+Music by
  Laxity.

# Master Composer

```json
{
  "id": "master-composer",
  "name": "Master Composer",
  "aliases": ["Master_Composer", "Master Composer"],
  "authors": ["Paul Kleimeyer"],
  "released": "1983 (written); ~1984 (published, Access Software Inc.)",
  "status": "in-progress",
  "platform": "Native C64, early US COMMERCIAL boxed product (Access Software). Closed source.",
  "csdb_release": 128699,

  "memory": {
    "load_address": "TODO (driver is RELOCATABLE per VGMPF; exact map unknown)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO (VGMPF confirms only: relocatable driver, does background playback)"
  },
  "speed": "TODO (tempo is per-block; multispeed unknown)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO (editor model: up to 127 bars x 16 notes; bars → 64 programmable blocks → 23 pages — editor structure, not confirmed replay format)",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {
      "(none built in)": "VGMPF notes Master Composer had NO built-in effects; users bolted on PWM etc. externally."
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "One of the EARLIEST C64 music tools: written 1983 by Paul Kleimeyer, published ~1984 by Access Software Inc. (a US commercial publisher). VGMPF calls it 'the first popular Commodore 64 music editor' — a commercial boxed product, not a scene tool. Marketed then-rare features: embedding songs in BASIC/machine code, background playback, a relocatable driver.",
    "SOURCE CAVEAT: the Tier-1 CSDb id 128699 is NOT the Access Software original — it is a CRACK by scener 'MST' (a .d64, 'the only Master Composer crack with a working Dealer Demo'). Cite it as a preservation dump. Paul Kleimeyer's CSDb scener page lists him only as a musician and does NOT document his Master Composer authorship — that attribution rests on VGMPF/SIDId, not CSDb.",
    "No built-in effects (users added PWM externally); known 'decaying hum' bug; default tuning 450 Hz NTSC / 433.5 PAL.",
    "By ~1986 (USA) it was superseded by Sidplayer — market succession, NOT a code-derivation claim.",
    "Replay internals (memory map, ZP, init/play, on-disk/in-memory song format) all UNKNOWN — the only firm facts are 'relocatable driver' + 'background playback'. Best RE path: disassemble the driver from the CSDb .d64. 508 files across 51 composers."
  ],
  "sources": [
    "VGMPF Master Composer (richest source: author, publisher, features, history): https://www.vgmpf.com/Wiki/index.php?title=Master_Composer",
    "CSDb crack/preservation dump (a .d64 to disassemble): https://csdb.dk/release/?id=128699",
    "Commodore 64 & 128 Music Software Guide (archive.org): https://archive.org/stream/commodore-64-and-128-music-software-guide/Commodore64And128MusicSoftwareGuide_djvu.txt",
    "sidid:Master_Composer (author Paul Kleimeyer, 1983 Access Software Inc.)",
    "Local dataset: 508 files tagged Master_Composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Master Composer is one of the earliest C64 music tools — written **1983** by
**Paul Kleimeyer** and published ~1984 by **Access Software Inc.** as a
commercial boxed product. VGMPF calls it "the first popular Commodore 64 music
editor." It featured a relocatable driver and background playback (rare for its
day) but **no built-in effects**. 508 files here across 51 composers; by ~1986
it was superseded by Sidplayer.

## Quirks & gotchas

See the `quirks` array. Load-bearing: it's an **early US commercial product**
(not a scene tool); the **CSDb id is a crack, not the original**; and its
authorship rests on VGMPF/SIDId (CSDb's scener page doesn't document it).
Internals `TODO` beyond "relocatable driver + background playback."

## Disassembly notes

None done here. The only route to real replay facts is disassembling the driver
from the CSDb `.d64` preservation dump (then trace via `sidm2-siddump`). The
editor's bar/block/page structure is documented (VGMPF) but is not the same as
the replay's in-memory format.

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC Master_Composer `.sid` (load $7580, init $7580, play $7587, 12 register writes / 50 frames — sparse but nonzero) — the relocatable driver runs; entry addresses are per-file. Author, publisher, year, feature set, and
succession history are VGMPF/SIDId-sourced; all runtime fields `TODO`.

## Sources

See the `sources` array — VGMPF (primary), the CSDb crack dump, the C64/128
Music Software Guide, and the cached SIDId entry.

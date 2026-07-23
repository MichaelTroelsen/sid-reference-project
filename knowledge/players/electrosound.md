# Electrosound

```json
{
  "id": "electrosound",
  "name": "Electrosound 64",
  "aliases": ["Electrosound", "Electrosound 64", "Leccysound"],
  "authors": ["Geoff Phillips (Orpheus Ltd.)", "Steven Mellin (also associated)"],
  "released": "1985 (Orpheus Ltd.)",
  "status": "verified",
  "platform": "Native C64, early UK COMMERCIAL boxed product (Orpheus Ltd., £14.95). Closed source.",
  "csdb_release": 27433,

  "memory": {
    "load_address": "User-chosen at compile time (examples use $1000); data runs to ~$53FF.",
    "zero_page": "Documented control bytes (from Waz's conversion notes): tune number at $02AB, speed at $02FF, a flag at $02F9, live tempo byte at $02AD. Full ZP map: TODO.",
    "layout": "Standard-layout builds (LOCALLY VERIFIED, see Verification): init = load+$0B00, play = load+$0A65. Full data layout: TODO. Waz's conversion notes mention load+$0518 as part of the init sequence — that appears to be an INTERNAL sub-call, not the PSID init vector."
  },
  "entry": {
    "init": "load+$0B00 (PSID init vector) — LOCALLY VERIFIED across real HVSC files at load $1000 and $4000. Before/within init: tune # at $02AB, speed at $02FF, flag at $02F9 (from Waz). NOTE: the card previously said load+$0518 (from Waz's notes) — real PSID headers show load+$0B00; $0518 is likely an internal routine. Relocated/repacked builds may put init elsewhere (some real files have init = load-start).",
    "play": "load+$0A65 — LOCALLY VERIFIED (exact) across multiple real HVSC files. IRQ-driven; live tempo byte at $02AD changes during playback (so it doesn't map to a fixed CIA speed)."
  },
  "speed": "Single-speed. Non-standard tuning 423.9 Hz. Driver does NOT loop.",

  "data_format": {
    "order_list": "MOD-like sequence→track chaining. Up to 20 sequences × 240 notes.",
    "patterns": "TODO (see order_list)",
    "instruments": "Up to 10 instruments.",
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
    "Unusually WELL-DOCUMENTED replay for a closed commercial tool, thanks to Warren 'Waz' Pilkington's conversion notes (Lemon64): user-chosen load ($1000 examples), init at load+$0518 (tune#/$02AB, speed/$02FF, flag/$02F9), play at load+$0A65, live tempo at $02AD. A COMPILER QUIRK: the emitted 'JMP $EA31' (at $1A7B/$1A84 for $1000 builds) must be patched to RTS before it works as a standalone player. This makes Electrosound one of the more RE-ready cards in the batch.",
    "Widely called 'poorly coded and the slowest known [player] on the C64' (VGMPF) — single-speed, doesn't loop, odd 423.9 Hz tuning.",
    "Early UK commercial product: Orpheus Ltd. (British software house, ex-Tansoft staff, led by Paul Kaufman, ~1985-88), sold boxed for £14.95. Ease of use drove adoption by British game composers — matching the top users (Barry Leitch, Jonathan Dunn, John Stormont).",
    "Author was UNKNOWN in the baseline, now found: Geoff Phillips (at Orpheus 1983-87); Steven Mellin is also associated. CSDb webservice returned junk during research, so the Phillips/Mellin attribution should be re-cross-checked against CSDb credits (TODO).",
    "Largely superseded by SoundMonitor by ~1987. Zero-page/effect encoding beyond the documented control bytes: TODO."
  ],
  "sources": [
    "VGMPF Electrosound 64 (author, price, driver limits, specs): https://www.vgmpf.com/Wiki/index.php?title=Electrosound_64",
    "Lemon64 conversion thread (Waz — the replay addresses: init load+$0518, play load+$0A65, control bytes, JMP $EA31→RTS patch): https://www.lemon64.com/forum/viewtopic.php?t=19807",
    "C64-Wiki Geoff Phillips / Orpheus: https://www.c64-wiki.de/wiki/Geoff_Phillips",
    "CSDb release: https://csdb.dk/release/?id=27433 (credits unverified — re-fetch)",
    "sidid:Electrosound (1985, Orpheus, CSDb 27433)",
    "Local dataset: 249 files tagged Electrosound across 33 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Electrosound (Electrosound 64, nicknamed "Leccysound") is an early UK
commercial C64 music package by **Geoff Phillips** for **Orpheus Ltd.**, 1985,
sold boxed for £14.95. Its ease of use made it popular with British game
composers (Barry Leitch, Jonathan Dunn, John Stormont) — 249 files here across
33 composers — though it's widely remembered as one of the slowest, most
awkwardly-coded C64 replays.

## Quirks & gotchas

See the `quirks` array. Load-bearing: it's **unusually well-documented** (Waz's
conversion notes give real init/play addresses and control bytes), including a
must-know **compiler quirk** (`JMP $EA31` → patch to `RTS`); and its reputation
as "the slowest known C64 player" (single-speed, non-looping, 423.9 Hz).

## Disassembly notes

The best-documented card in batch 3. Waz's notes give: user-chosen load
($1000 examples), init `JSR load+$0518` (with `$02AB`/`$02FF`/`$02F9` control
bytes), play `load+$0A65`, live tempo `$02AD`, and the `JMP $EA31`→`RTS` patch.
That's enough to attempt an assemble/trace verification pass via `sidm2-siddump`.

## Verification

**Verified — `status: verified` (2026-07-23).** Disassembled with `SIDdecompiler`,
reassembled with 64tass, patched, and trace-diffed by `sid-player-verify` subagent.

| File | PSID header | Byte-diff | Trace result |
|---|---|---|---|
| `Gilmore/Liberty.sid` (4 subtunes) | load=$1000, init=$1B00, play=$1A65 | 100% (after patching 44 drifted bytes at $1D02-$1D71) | **Exact** (90/90 writes, 20 frames) |
| `Rodger/Canned.sid` | — | 99.28% (same pattern, 36 diffs in $1D02-$1D71 range) | pending: needs same patch applied |

The 44-byte divergence at $1D02-$1D71 is drifted song-data workspace —
the identical address range, same mechanism across both files. File 1 trace-
exact after patching. The card's earlier trace pass (2026-07-13) confirmed
init=load+$0B00, play=load+$0A65 across 7 files — this reconstruction
confirms the player code itself is identical to the original.

## Sources

See the `sources` array — VGMPF, Waz's Lemon64 conversion thread (the replay
addresses), C64-Wiki (Geoff Phillips/Orpheus), and the cached SIDId entry.

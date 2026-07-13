# Matt Gray (player routine)

```json
{
  "id": "matt-gray",
  "name": "Matt Gray (player routine)",
  "aliases": ["Matt_Gray"],
  "authors": ["Matt (Matthew) Gray"],
  "released": "~mid-late 1980s (per-game; his own driver, refined game-to-game)",
  "status": "stub",
  "platform": "Matt Gray's own hand-coded 6502 in-game music driver (built from scratch, refined per game). Player-ID-fingerprinted across 68 files. NOT distinct from himself as a tool.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Driller build: init ~$15E0, play $0E46, IRQ handler $0E29.",
    "zero_page": "Driller build: $FB/$FC track_ptr, $FD/$FE pattern_ptr; control bytes $FA instrument, $FB/$FC effects 1/2, $FD extended cmd.",
    "layout": "Driller build: note tables frq_lo/hi @ $0D53/$0DB3 (96 notes); 22 instruments @ $0EA5+ (8-byte ADSR/modulation structs); 42 patterns; tempo @ $0D10/$0D12. (Single-game snapshot — other games likely differ.)"
  },
  "entry": {
    "init": "music_init @ $15E0 (Driller build).",
    "play": "music_play @ $0E46, calling play_voice @ $0900 3x (X = $00/$07/$0E); IRQ install setup_irq @ $0E13, vector $0314/$15 → play_irq @ $0E29. Single-speed (one IRQ/frame) in Driller."
  },
  "speed": "1x/single-speed in the Driller build; per-game multispeed status otherwise UNKNOWN.",

  "data_format": {
    "order_list": "Track/sequence tables → patterns.",
    "patterns": "Encoded note + duration + command bytes; $FF pattern end, $FE tune end.",
    "instruments": "22 instruments, 8-byte ADSR/modulation structs (Driller).",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "Control bytes $FA (instrument), $FB/$FC (effects 1/2), $FD (extended command). Exact semantics beyond Driller: TODO.",
    "commands": {}
  },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "British composer (b.1970), System 3/Codemasters. C64 credits: Last Ninja 2 (13 tracks, his most ambitious), Quedex, Driller, Hunter's Moon, Dominator, Stormlord II, Treasure Island Dizzy. Later dance-music (Motiv8/Xenomania), then the crowdfunded Reformation remakes (2016-).",
    "OWN from-scratch driver, NOT derived from Hubbard/Galway. Music entered as raw data via a 6502 assembler; sounds designed inside the driver ('nothing much existed unless you coded it'). Early exceptions: Mean Streak used someone else's player; early on he used SoundMonitor and the 'Ariston driver' before writing his own.",
    "The 'Gavin Raeburn driver' reference applies to his NES work, not C64 — do not conflate.",
    "The Driller memory map above is from a COMMUNITY reverse-engineered 'rough disassembly' (Codebase64) of ONE game — a single snapshot; other games' builds likely differ (per-game). No official/verified source disassembly exists.",
    "VERIFICATION PATH: trace a real Matt_Gray HVSC SID vs the Driller reconstruction; the Codebase64 disassembly is the artifact."
  ],
  "sources": [
    "Codebase64 Driller disassembly (only technical source, real addresses): https://codebase64.net/doku.php?id=base:matt_gray_-_driller",
    "Retro Gamesmaster interview (his own words on the player): http://www.retrogamesmaster.co.uk/matt-gray-interview/",
    "VGMPF (bio, games, driver lineage): https://www.vgmpf.com/Wiki/index.php/Matt_Gray ; CSDb https://csdb.dk/scener/?id=8134",
    "Local dataset: 68 files tagged Matt_Gray (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Matt_Gray` tag is composer Matt Gray's own from-scratch C64 music driver
(Last Ninja 2, Driller, Hunter's Moon…), Player-ID-fingerprinted across 68
files. A community reverse-engineered "rough disassembly" of the Driller build
gives concrete addresses (init `$15E0`, play `$0E46`, 3 voices, 22 instruments)
— but as a single-game snapshot, not a canonical map.

## Quirks & gotchas

See the `quirks` array — **own from-scratch driver** (not Hubbard/Galway-derived;
early SoundMonitor/"Ariston driver" use aside), the **Driller map is one snapshot**
(per-game variance), and the NES "Gavin Raeburn driver" is a different platform.

## Disassembly notes

Codebase64 hosts a rough Driller disassembly: ZP `$FB-$FE` track/pattern ptrs,
control bytes `$FA/$FB/$FC/$FD`, note tables `$0D53/$0DB3`, instruments `$0EA5+`,
IRQ `$0E29`. A future `verified` needs a trace of a real Matt_Gray SID vs a
reassembly.

## Verification

**Not verified — `status: stub`.** The Driller architecture is from a community
RE (Codebase64), not our own trace; per-game variance and full effect semantics
are `TODO`.

## Sources

See the `sources` array — the Codebase64 Driller disassembly, the Retro
Gamesmaster interview, and VGMPF.

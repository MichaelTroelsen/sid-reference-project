# Mark Cooksey (player routine)

```json
{
  "id": "mark-cooksey",
  "name": "Mark Cooksey (player routine)",
  "aliases": ["Mark_Cooksey"],
  "authors": ["Mark Cooksey"],
  "released": "~1985+ (his first own driver debuted around Bomb Jack)",
  "status": "in-progress",
  "platform": "Mark Cooksey's own hand-coded 6502 in-game music driver (self-contained per game). Player-ID-fingerprinted across 37 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Sample HVSC file traced: load $2400 (init $3FD0, play $2D6E).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Per-game/likely varies; not documented."
  },
  "entry": {
    "init": "Per-game (sample trace: $3FD0).",
    "play": "Per-game (sample trace: $2D6E). Voice-muting: SFX can play over the 3-track music."
  },
  "speed": "TODO (single vs multispeed not documented).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "Uses WAVETABLES — 'months before Rob Hubbard popularized them' (VGMPF). Format: TODO.",
    "pulsetable": "TODO", "filtertable": "TODO"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "British composer (b.1966), Elite Systems trainee 1985 then freelance. Best-known C64 scores: Ghosts'n Goblins, Paperboy, Bomb Jack; also Commando, 1942, Frogger, Buggy Boy, Space Harrier, Overlander.",
    "Driver EVOLUTION (VGMPF): (1) learned on Neil Bate's driver (1985, arranging only, 434 Hz); (2) his FIRST own driver debuted ~Bomb Jack (first 3 games at 424 Hz); (3) a unified CROSS-PLATFORM driver from ~Overlander (also used on Spectrum/CPC). His original driver had VOICE-MUTING (SFX over 3-track music) and WAVETABLES early; later added samples (drums).",
    "Cross-platform quirk: the NES port driver (Hoppin' Mad, Cybernoid) is 'a mod of his second C64 driver … even has a leftover output to the C64's master volume'.",
    "OWN from-scratch (learned on Neil Bate's driver); NOT derived from Hubbard/Galway/SoundMonitor — his wavetable use was independent/early. Signature sound: pulsating instruments + pronounced vibrato.",
    "No published disassembly (the realdmx RE repo covers Hubbard/Galway/Whittaker/Tel/F.Gray but NOT Cooksey). Path to verified: original disassembly (SIDdecompiler/JC64dis) + siddump trace. Memory/format fields stay TODO."
  ],
  "sources": [
    "VGMPF (richest: driver evolution, tuning, wavetables, samples): https://www.vgmpf.com/Wiki/index.php/Mark_Cooksey",
    "Wikipedia (bio/games): https://en.wikipedia.org/wiki/Mark_Cooksey ; remix64 interview: https://remix64.com/interviews/interview-mark-cooksey.html",
    "Chordian blog (signature sound): https://blog.chordian.net/2018/01/03/sid-musicians/",
    "Local dataset: 37 files tagged Mark_Cooksey (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Mark_Cooksey` tag is composer Mark Cooksey's own C64 in-game driver
(Ghosts'n Goblins, Paperboy, Bomb Jack…), Player-ID-fingerprinted across 37
files. Notable historically: his own driver had **voice-muting and wavetables
"months before Rob Hubbard popularized them"** (VGMPF), and it evolved across
four systems into a unified cross-platform engine.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: his **early independent
wavetable use**, the **four-system driver evolution**, voice-muting, and that
he learned on **Neil Bate's** driver (not Hubbard/Galway-derived). Per-game
memory map.

## Disassembly notes

None published (the realdmx RE repo doesn't cover Cooksey). A future `verified`
needs an original disassembly of a Cooksey `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC Mark_Cooksey `.sid`: load `$2400`, init `$3FD0`, play
`$2D6E`, **237 register writes / 50 frames**. Driver architecture (VGMPF) is
sourced but not our own disassembly; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — VGMPF (primary), Wikipedia, remix64, Chordian.

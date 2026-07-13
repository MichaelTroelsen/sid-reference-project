# Mark Tait (player routine)

```json
{
  "id": "mark-tait",
  "name": "Mark Tait (player routine)",
  "aliases": ["Mark_Tait"],
  "authors": ["Mark Tait"],
  "released": "~1987-1990 (per-game; Tiertex era)",
  "status": "in-progress",
  "platform": "Mark Tait's own hand-coded 6502 in-game sound driver (Tiertex in-house), per-game. Player-ID-fingerprinted across 31 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Sample HVSC file traced (1943): load $E000 (init $E000, play $E012).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Per-game; not documented."
  },
  "entry": {
    "init": "Per-game (sample trace: $E000).",
    "play": "Per-game (sample trace: $E012, called in IRQ)."
  },
  "speed": "TODO (single vs multispeed not documented).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Mark Tait — English composer (handle 'Snoopy'; CSDb scener 4164; Compunet mailbox MT21). Active ~1987-1990. In-house SID composer at TIERTEX (English arcade-conversion house working US Gold / Capcom licences); hired full-time after his conversion of Capcom's 1943. Self-stated influences: Rob Hubbard and Martin Galway.",
    "Works (all Tiertex arcade ports, under the Mark_Tait tag): 1943: The Battle of Midway, Black Tiger, Human Killing Machine, Last Duel, Strider, Thunder Blade, Thunder Hawk, Dynasty Wars (1990), Indiana Jones and the Last Crusade, E-Motion, Superman, Spacebike, Protector, GTI Simulator, Dominion; Rolling Thunder (1987, he ARRANGED Junko Ozawa's arcade score).",
    "Hand-coded per-game 6502 driver of his own authorship, POSSIBLY written in Zeus assembler (qualified in his c64.com interview — treat as tentative). NOT a named/public editor; HVSC classes every file 'Normal built-in'. Later he composed on the Atari ST with Steinberg Pro-24 (MIDI) and coded his OWN utility to convert the MIDI into his C64 driver's format. Not in SIDId.",
    "JOHN HANCOCK link: Hancock was a separate English Tiertex composer. The 1 non-Tait file under the tag is Mercs.sid — HVSC says Mercs runs in Tait's driver (the other Hancock soundtracks use an unknown driver). So Hancock reused/was given Tait's Tiertex driver for Mercs — a shared STUDIO routine, not the same author. (HVSC cites no source for the Hancock credits — caveat.)",
    "No public disassembly or source (the realdmx RE repo has NO Tait folder; not in SIDId). Byte-exact reconstruction would require disassembling a .sid from scratch — memory/format fields stay TODO."
  ],
  "sources": [
    "c64.com interview #54 (primary bio/driver source): https://www.c64.com/gt_display_interview.php?interview=54",
    "VGMPF — Mark Tait: https://vgmpf.com/Wiki/index.php/Mark_Tait ; John Hancock (Mercs-in-Tait's-driver): https://vgmpf.com/Wiki/index.php/John_Hancock",
    "VGMPF — Tiertex: https://www.vgmpf.com/Wiki/index.php?title=Tiertex ; CSDb scener: https://csdb.dk/scener/?id=4164",
    "Lemon64 gameography: https://www.lemon64.com/games/list.php?list_individual=mark-tait",
    "Local dataset: 31 files tagged Mark_Tait, 2 composers (see knowledge/COVERAGE.md); the cross file is John_Hancock/Mercs.sid"
  ]
}
```

## Overview

The `Mark_Tait` tag is composer Mark Tait's ('Snoopy') own C64 sound driver,
written in-house at Tiertex for their arcade conversions (1943, Strider, Thunder
Blade, Rolling Thunder…), Player-ID-fingerprinted across 31 files.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he was **Tiertex's in-house
composer** (hired after his 1943 conversion; influences Rob Hubbard & Martin
Galway); the driver was **hand-coded, possibly in Zeus assembler** (tentative),
and he later drove it from Atari ST MIDI via his own converter; and the **John
Hancock / Mercs** link (Hancock's one file runs in Tait's studio driver — shared
routine, not same author).

## Disassembly notes

None published (the realdmx RE repo doesn't cover Tait). A future `verified`
needs an original disassembly of a Tait `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Mark_Tait` `.sid` (1943): load `$E000`, init `$E000`, play
`$E012`, **509 register writes / 50 frames**. Driver internals are undocumented;
memory map/format/effects are `TODO`.

## Sources

See the `sources` array — the c64.com interview (primary), VGMPF (Tait, Hancock,
Tiertex), CSDb, and Lemon64.

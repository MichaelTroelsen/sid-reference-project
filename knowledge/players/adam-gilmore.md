# Adam Gilmore (player routine)

```json
{
  "id": "adam-gilmore",
  "name": "Adam Gilmore (player routine)",
  "aliases": ["Adam_Gilmore"],
  "authors": ["Adam Gilmore"],
  "released": "~1988-1994 (per-game)",
  "status": "in-progress",
  "platform": "Adam Gilmore's ('Gizmo') own hand-coded 6502 in-game music driver, per-game. Player-ID-fingerprinted across 46 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Sample HVSC file traced (After Burner): load $80F9 (init $9C74, play $AD57).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Per-game; not documented."
  },
  "entry": {
    "init": "Per-game (sample trace: $9C74).",
    "play": "Per-game (sample trace: $AD57, called in IRQ)."
  },
  "speed": "TODO (single vs multispeed not documented).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter register writes observed in the trace)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Adam Gilmore (scene handle 'Gizmo'), English composer/coder from Newcastle-upon-Tyne. Started on C64 in 1986 (CompuNet demos); game music ~1988-1994 (stopped 1994 for DK Publishing; resumed 2024). Best-known scores (mostly Tynesoft/Zeppelin Games): Zybex, Draconus, Time Scanner, After Burner (PAL C64 conversion), Sabotage (first published, Zeppelin 1988). ~40 games on Lemon64. Also a demo-scene coder (Horizon-affiliated).",
    "Hand-coded personal 6502 routine (he was a coder as well as a musician — CSDb function 'Coder'). VGMPF references it as a distinct engine ('Adam Gilmore (C64 Driver)'). No published technical write-up (no memory map/ZP/effect encoding). Not in SIDId.",
    "ROB HUBBARD LINEAGE — REFUTED / UNPROVEN. No source states Gilmore's routine derives from Rob Hubbard's. Any Rob_Hubbard-tagged Gilmore tunes elsewhere are most plausibly a player-DETECTION artifact (both are CompuNet-era hand-coded routines with structurally similar replay cores), not documented code reuse. The only real shared context is the CompuNet community both emerged from (which also launched Matt Gray, Jonathan Dunn, Wally Beben). Do NOT assert a Hubbard derivation.",
    "The 1 Wally Beben file in the 46-file set is SHARED TUNE DATA, not a player relationship: HVSC notes Gilmore's Slalom.sid was reused in Beben's Winter_Olympiad_88.sid 'with digi drums added by someone else'.",
    "No published disassembly or source (the realdmx RE repo has NO Gilmore/Gizmo folder). Byte-exact reconstruction would require disassembling a .sid from scratch — memory/format fields stay TODO."
  ],
  "sources": [
    "VGMPF (driver stub 'Adam Gilmore (C64 Driver)'): https://www.vgmpf.com/Wiki/index.php?title=Adam_Gilmore",
    "CSDb scener: https://csdb.dk/scener/?id=10562 ; Demozoo: https://demozoo.org/sceners/5051/",
    "MobyGames: https://www.mobygames.com/person/5192/adam-gilmore/ ; Remix64: https://remix64.com/composer/adam-gilmore/",
    "'Sultans of SID #23: Adam Gilmore': https://mancunian1001.wordpress.com/2016/12/23/the-sultans-of-sid-23-adam-gilmore/",
    "Local dataset: 46 files tagged Adam_Gilmore, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Adam_Gilmore` tag is composer/coder Adam Gilmore's ('Gizmo') own C64
in-game driver (Zybex, Draconus, After Burner…), Player-ID-fingerprinted across
46 files. A composer-personal routine like [[rob-hubbard]]/[[mark-cooksey]] —
per-game memory map.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he was a **coder as well as a
musician** (own routine, not a public editor); the **Rob Hubbard "lineage" is
refuted** (a detection artifact, not code reuse — both are CompuNet-era hand-coded
routines); and the **Wally Beben file is shared tune data** (Slalom reused in
Winter Olympiad), not a player link. No public source.

## Disassembly notes

None published (the realdmx RE repo doesn't cover Gilmore). A future `verified`
needs an original disassembly of a Gilmore `.sid` + trace — no prior art to seed
it beyond the raw binary.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Adam_Gilmore` `.sid` (After Burner): load `$80F9`, init
`$9C74`, play `$AD57`, **263 register writes / 50 frames** (filter writes
present). Driver internals are undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — VGMPF, CSDb, Demozoo, MobyGames, Remix64, and the
Sultans of SID feature.

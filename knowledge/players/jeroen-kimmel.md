# Jeroen Kimmel (player routine)

```json
{
  "id": "jeroen-kimmel",
  "name": "Jeroen Kimmel (player routine)",
  "aliases": ["Jeroen_Kimmel", "Red"],
  "authors": ["Jeroen Kimmel (Red)"],
  "released": "1986+ (his music in Rob Hubbard's player, 1986)",
  "status": "stub",
  "platform": "A composer's in-game 6502 music driver — originated as an ADAPTATION of Rob Hubbard's player, later evolved into his own routine. Player-ID-fingerprinted across 42 files.",
  "csdb_release": null,

  "memory": { "load_address": "TODO (per-game/relocatable)", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO. Tuned to 424 Hz (per VGMPF).",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": ["rob-hubbard"], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE HEADLINE (confirmed lineage to [[rob-hubbard]]): Jeroen Kimmel ('Red', The Judges) was 'the first scener to create his own music in Rob Hubbard's player' (1986, per Recollection's Brief History of SID). Rob Hubbard was 'furious at him (being first) and scrambled his code and data in most of 1987' (VGMPF Rob Hubbard Driver page) — the very code-scrambling the rob-hubbard card documents. So the Jeroen_Kimmel driver is HUBBARD-DERIVED in origin → derives_from rob-hubbard.",
    "NUANCE (don't discard): VGMPF's Kimmel page also says 'On games, Kimmel always used his own driver' and quotes him wondering 'why anyone would rip his driver instead of Rob Hubbard's'. Reading: his personal driver BEGAN as an adaptation of Hubbard's player, then evolved into his own. Derived-from Hubbard (historically confirmed) with later independent evolution.",
    "REJECTED as unverified: a commonly-cited claim that 'Kimmel converted the Commando driver back into source' — Recollection attributes that Commando-disassembly act to LAXITY, not Kimmel. Not recorded as fact.",
    "Jeroen W. P. Kimmel (b. 1968, NL), co-founder of The Judges (~1985-86); later commercial work for Radarsoft/Cascade/Sega/The Edge (Alien Syndrome, TRAZ, Frightmare, Disposable Hero). His demo 'Red Hubbard' (in HVSC) is explicitly the Hubbard routine reused.",
    "Driver internals (memory map, ZP, init/play, format, effects) all UNKNOWN — per-game. TODO: disassemble a Jeroen_Kimmel-tagged SID and compare against the rob-hubbard card to characterise how far his fork diverged."
  ],
  "sources": [
    "Recollection 'The Brief History of SID' (first scener in Hubbard's player): https://www.atlantis-prophecy.org/recollection/?load=articles&id=TheBriefHistoryofSID",
    "VGMPF Rob Hubbard (C64 Driver) — the scrambling/Kimmel quote (lineage): https://www.vgmpf.com/Wiki/index.php?title=Rob_Hubbard_(C64_Driver)",
    "VGMPF Jeroen Kimmel (bio, own-driver nuance, 424 Hz): https://www.vgmpf.com/Wiki/index.php?title=Jeroen_Kimmel ; CSDb https://csdb.dk/sid/?id=24377",
    "Local dataset: 42 files tagged Jeroen_Kimmel (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jeroen_Kimmel` tag is composer Jeroen Kimmel's ("Red", of The Judges)
in-game music driver — historically the **first scene reuse of Rob Hubbard's
player** (1986), which literally prompted Hubbard to scramble his code in 1987.
So it's a documented **Hubbard-derived** routine that later evolved into
Kimmel's own. 42 files.

## Quirks & gotchas

See the `quirks` array — the load-bearing item is the **confirmed Hubbard
lineage** (the `derives_from rob-hubbard` edge), with the nuance that his driver
*began* as Hubbard's and evolved. One reused-driver-attribution myth (the
"Commando source" claim) is rejected as actually Laxity's, not Kimmel's.

## Disassembly notes

None here; internals are per-game and undocumented. The productive move is to
disassemble a `Jeroen_Kimmel` SID and diff its structure against the (verified)
`rob-hubbard` card to see how much of Hubbard's driver survives.

## Verification

**Not verified — `status: stub`.** The Hubbard lineage is well-sourced
(Recollection + VGMPF); all runtime internals are `TODO` (per-game, no
disassembly).

## Sources

See the `sources` array — Recollection's SID history, VGMPF's Rob Hubbard
driver page (the lineage), and VGMPF's Kimmel bio.

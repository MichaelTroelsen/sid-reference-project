# Jason Brooke (player routine)

```json
{
  "id": "jason-brooke",
  "name": "Jason Brooke (player routine)",
  "aliases": ["Jason_Brooke", "Jas.C.Brooke"],
  "authors": ["Jason C. Brooke"],
  "released": "1986 (his rewrite of Whittaker's driver); used on C64 until ~1991",
  "status": "in-progress",
  "platform": "A rewritten/optimized SUCCESSOR to David Whittaker's C64 music driver, coded by Jason Brooke. Player-ID-fingerprinted across 23 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Sample HVSC file traced: load $F000 (init $F09F, play $F000).",
    "zero_page": "TODO (no disassembly)",
    "layout": "TODO"
  },
  "entry": {
    "init": "Per-game (sample trace: $F09F).",
    "play": "Per-game (sample trace: $F000)."
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": { "(feature-level, from the rewrite description)": "flexible chords, envelopes, pitch-bends combined with chords; optional SID band-pass filter (from May 1988). Exact encoding: TODO." }
  },

  "edges": { "derives_from": ["david-whittaker"], "successor_of": ["david-whittaker"], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE HEADLINE (lineage to [[david-whittaker]]): David Whittaker's C64/CPC drivers (late 1985) were too slow, so Whittaker asked Brooke to write new ones. In June 1986 Brooke rewrote the CPC driver 'much shorter, faster, more flexible' (flexible chords/envelopes/pitch-bends); 'one of them converted it back to the C64, and he used it (without real updates) until 1991.' So the Jason_Brooke tag is Brooke's optimized SUCCESSOR to Whittaker's engine → derives_from / successor_of david-whittaker.",
    "NUANCE: the source-lineage is confirmed (Brooke rewrote Whittaker's driver family); whether every one of the 23 tagged files is that exact rewritten engine vs Brooke's own later variants is NOT individually verified — TODO.",
    "Jason C. Brooke (b. late 1960s, England; 'Jas.C.Brooke' from 1986), sound programmer at Binary Design/Musicon; Binary's musician across platforms after Whittaker left (~1987). 100+ credits ~1987-91. On C64 used 'Mikes Assembler' on an Einstein wired to a C64.",
    "A dedicated 'Jas C. Brooke Music Ripper' (Beastie Boys, 1987, CSDb 121588) exists — confirms the format was recognizable/rippable, a starting artifact for future disassembly.",
    "Driver internals (memory map, ZP, format, effect encoding) all UNKNOWN — no disassembly obtained. TODO."
  ],
  "sources": [
    "VGMPF Jason Brooke (bio, career, driver-rewrite): https://www.vgmpf.com/Wiki/index.php/Jason_Brooke",
    "VGMPF David Whittaker (the rewrite quotes: slowness, June 1986, chords/envelopes/pitch-bends, 'converted back to C64, used until 1991'): https://www.vgmpf.com/Wiki/index.php/David%20Whittaker",
    "Wikipedia David Whittaker (corroborates the rewrite lineage): https://en.wikipedia.org/wiki/David_Whittaker_(video_game_composer) ; CSDb ripper https://csdb.dk/release/?id=121588",
    "Local dataset: 23 files tagged Jason_Brooke (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jason_Brooke` tag is Jason Brooke's **rewritten successor to David
Whittaker's C64 music driver**: Whittaker's own 1985 drivers were too slow, so
he commissioned Brooke, who rewrote them (June 1986) faster and more flexible;
the C64 port stayed in use until 1991. So it's a documented lineage from the
[david-whittaker](david-whittaker.md) engine. 23 files here.

## Quirks & gotchas

See the `quirks` array — the load-bearing item is the **Whittaker-rewrite
lineage** (the `derives_from / successor_of david-whittaker` edges), with the
nuance that not every tagged file is individually confirmed as that exact
engine. A dedicated Brooke music ripper exists.

## Disassembly notes

None obtained; internals `TODO`. The "Jas C. Brooke Music Ripper" (CSDb 121588)
and a tagged `.sid` are the artifacts for a future disassembly/verified pass.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC Jason_Brooke `.sid`: load `$F000`, init `$F09F`, play
`$F000`, **386 register writes / 50 frames**. The Whittaker-rewrite lineage is
well-sourced; memory map/format/effect encoding are `TODO`.

## Sources

See the `sources` array — VGMPF (Brooke + Whittaker pages, the rewrite quotes),
Wikipedia, and the CSDb ripper.

# Fred Gray (per-game routines)

```json
{
  "id": "fred-gray",
  "name": "Fred Gray (per-game routines)",
  "aliases": ["Fred_Gray"],
  "authors": ["Fred Gray"],
  "released": "1984-1990 (per-game)",
  "status": "stub",
  "platform": "A COMPOSER tag over per-game in-game routines — NOT a single reusable driver (see quirks). Player-ID-fingerprinted across 49 files.",
  "csdb_release": null,

  "memory": { "load_address": "TODO (per-game)", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NOT a unified driver: strong evidence Fred Gray did NOT have a single reusable engine in the 1980s — 'in the beginning of 1989 Fred started making his own music routine, but unfortunately it wasn't finished and he lost it.' So his in-game tunes ran on PER-GAME routines coded by the games' programmers, and the `Fred_Gray` tag groups his in-game music, not a distributable player.",
    "English composer (b.1954), EXPLICITLY not related to Matt Gray (a separate C64 composer — don't conflate). In-house at Imagine Software, then freelance for Ocean/Denton Designs/Special FX/Thor. 70+ titles 1984-90: Shadowfire, Enigma Force, Mutants, Madballs, Transformers, Road Runner, Batman: The Caped Crusader, Frankie Goes to Hollywood.",
    "Signature techniques: among the first on C64 to use full CHORDS and unusual time signatures (12/8); heavy RING MODULATION; deliberately AVOIDED the SID filter ('only ever used it once, in the FGTH game') due to chip-to-chip variance.",
    "'Shadow Skimmer' and 'Frightmare' attributions were NOT confirmed in the checked sources — TODO to verify.",
    "Driver internals all UNKNOWN — likely per-game, coded by others. No published disassembly/source found."
  ],
  "sources": [
    "VGMPF (bio, 'not Matt Gray', gameography): https://www.vgmpf.com/Wiki/index.php/Fred_Gray",
    "Wikipedia: https://en.wikipedia.org/wiki/Fred_Gray_(composer)",
    "Remix64 interview (his own SID technique — chords, ring-mod, no filter): https://remix64.com/interviews/interview-fred-gray.html ; CSDb https://csdb.dk/scener/?id=2483",
    "Local dataset: 49 files tagged Fred_Gray (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

`Fred_Gray` is a **composer tag**, not a driver: Fred Gray (b.1954, no relation
to Matt Gray) composed 70+ C64 game soundtracks 1984-90, but on **per-game
routines coded by the games' programmers** — his own unified music routine was
only attempted in 1989 and lost. 49 files here. Notable for early full chords,
odd time signatures, and ring-mod.

## Quirks & gotchas

See the `quirks` array — the load-bearing item is that this is a **composer tag
over per-game routines** (no single driver to document), plus the **not-Matt-Gray**
disambiguation and his signature technique (chords, ring-mod, deliberately no
filter).

## Disassembly notes

None; no unified driver exists to disassemble. Any technical facts would be
per-game and per-programmer.

## Verification

**Not verified — `status: stub`, and structurally thin.** Bio/technique are
VGMPF/Wikipedia/Remix64-sourced; there is no single driver, so runtime fields
are `TODO`/N-A per game.

## Sources

See the `sources` array — VGMPF, Wikipedia, and the Remix64 Fred Gray interview.

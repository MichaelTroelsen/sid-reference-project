# Michael Winterberg (Speedi System)

```json
{
  "id": "michael-winterberg",
  "name": "Michael Winterberg (Speedi System)",
  "aliases": ["Michael_Winterberg", "Speedi System"],
  "authors": ["Michael Winterberg"],
  "released": "1986+ (prolific 1986-87; active ~1984-1992)",
  "status": "stub",
  "platform": "Michael Winterberg's own C64 music driver, named 'Speedi System' after his group Speedi Systems. A personal/in-house player, not a distributed editor. Player-ID-fingerprinted across 101 files.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The only HARD fact about the routine itself is its NAME: SIDId maps tag `Michael_Winterberg` → name 'Speedi System', author Michael Winterberg — i.e. 'Speedi System' is the name of his own music driver (after his group Speedi Systems). The SIDId entry has no released/reference/technique comment, so there's no author-published note beyond the name.",
    "Michael (Mike) Winterberg, German (b.1965), C64 coder AND musician ~1984-1992; founder/ex-member of the group 'Speedi Systems'. Prolific 1986-87 one-file releases: the Synth-Music I-IX series, Sound-Sample collections, Magic Music, Effects Factory, Long-Player V1, a 1984 Turbo Tape tool. ~15 game credits (Bone Cruncher, Morphicle, Death or Glory, the Schwert und Magie I-IV series, Xis).",
    "Driver internals (memory map, ZP, init/play, format, effects, multispeed) ALL UNKNOWN — no published disassembly or source. TODO: disassemble one of the 101 Michael_Winterberg SIDs.",
    "Lineage UNKNOWN — no import_from or derivation note anywhere."
  ],
  "sources": [
    "CSDb scener 731 (bio, group, discography): https://csdb.dk/scener/?id=731",
    "Lemon64 games list (b.1965, German, credits): https://www.lemon64.com/games/list.php?list_people=Michael+Winterberg",
    "Local data/sidid.json — authoritative that the driver name is 'Speedi System' by Michael Winterberg; data/hvsc/Musicians.txt (GERMANY)",
    "Local dataset: 101 files tagged Michael_Winterberg (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Michael_Winterberg` tag is German coder/composer Michael Winterberg's own
C64 music driver — named **"Speedi System"** (after his group Speedi Systems),
per SIDId. 101 files here. It's a personal/in-house player; beyond the name,
nothing about the routine's internals is documented.

## Quirks & gotchas

See the `quirks` array — the only hard fact about the routine is its **name
("Speedi System")**; everything else (memory map, format, effects) is `TODO`,
recoverable only by disassembling one of the 101 tagged SIDs. Don't guess a map.

## Disassembly notes

None; no published disassembly. Disassemble a `Michael_Winterberg` SID to
recover init/play + format.

## Verification

**Not verified — `status: stub`.** Only identity + the driver's name are
sourced (CSDb/SIDId/HVSC); all runtime internals are `TODO`.

## Sources

See the `sources` array — CSDb scener 731, Lemon64, and the local SIDId/HVSC
data (the source for the "Speedi System" name).

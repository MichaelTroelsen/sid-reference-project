# Nordic Beat Editor

```json
{
  "id": "nordic-beat-editor",
  "name": "Nordic Beat Editor",
  "aliases": ["NordicBeat_Editor", "Nordic Beat V1.64"],
  "authors": ["Daniel Hansson (Matrix)"],
  "released": "1991 (v1.64)",
  "status": "stub",
  "platform": "Native C64 music editor (DeepSID players.json field: \"Native / C64 emulator\") — no cross-platform component found",
  "csdb_release": 33642,

  "memory": {
    "load_address": "TODO: $xxxx (no source/disassembly located)",
    "zero_page": "7 bytes ($38-$3B + $FA-$FC) — per DeepSID players.json curated entry; not independently verified by disassembly here",
    "layout": "TODO: order list / patterns / table addresses — not documented, not disassembled"
  },
  "entry": {
    "init": "TODO: $xxxx",
    "play": "TODO: $xxxx"
  },
  "speed": "TODO: not documented",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not documented, no source available",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Extremely concentrated usage: of the 36 files tagged NordicBeat_Editor in this dataset, they split across only 4 composer folders — Matrix (23, 64%, the tool's own author), Evony (7), Quan (1), and a 'Beat Nordic' folder (5) that is actually the group's generic /MUSICIANS/N/Nordic_Beat/ HVSC path, not a 4th musician. Matrix, Evony and Quan are the only three listed members of the Nordic Beat group on CSDb (csdb.dk/group/?id=3380) — this editor appears to have essentially never left its own three-person crew, a strong personal/small-scene-tool signal (cf. the Rob_Hubbard case in README.md).",
    "DeepSID's players.json has a curated entry for this tool with one real spec field filled in (zero_pages) but every other spec field (load address, entry points, speed, instrument/effect tables, docs, source_code) is blank — it looks like the entry was created from a Player-ID identification pass, not a full write-up.",
    "No public source code, disassembly, or format-spec document was found anywhere (CSDb, Codebase64, HVSC docs, SID Preservation's tracker list) — the CSDb release only offers the compiled binary (NordicBeatEditor_1.64.zip) and a d64 with 6 bundled demo songs. Every runtime field here is an honest TODO, not an oversight.",
    "CSDb credits Code+Design to Matrix (Zone 45) and Music to Deek (Crest/Digital Syndicate/Genesis Project/Vibrants) for the demo-song disk — Deek is not a co-author of the editor itself, just contributed one of the bundled demo tunes ('Ostfriesland Games')."
  ],
  "sources": [
    "CSDb release (Nordic Beat V1.64, 1991): https://csdb.dk/release/?id=33642",
    "CSDb group (Nordic Beat, Sweden — members Evony, Matrix [founder], Quan; 5 releases 1991-1994): https://csdb.dk/group/?id=3380",
    "sidid:NordicBeat_Editor (author \"Daniel Hansson (Matrix)\", released \"1991 Nordic Beat\", reference csdb.dk/release/?id=33642) — data/sidid.json",
    "DeepSID players.json curated entry \"Nordic Beat Editor v1.64\" (platform, zero_pages fields) — data/players.json",
    "HVSC Musicians.txt: 'Matrix (Hansson, Daniel {The Pelican}) / Zone 45 / Nordic Beat - SWEDEN', 'Evony (Dahlquist, Kaspar) / Nordic Beat - SWEDEN', 'Quan (Mellander, Jakob) / Nordic Beat - SWEDEN' — data/hvsc/Musicians.txt",
    "Local dataset: 36 files tagged NordicBeat_Editor across 4 composer folders (Matrix 23, Evony 7, \"Beat Nordic\"/group-folder 5, Quan 1) — see knowledge/COVERAGE.md and data/composers/*.json"
  ]
}
```

## Overview

Nordic Beat Editor (CSDb: "Nordic Beat V1.64") is a native C64 music
composition tool released in 1991 by Daniel Hansson ("Matrix", also of Zone
45), coded and designed by him for the Swedish three-person group Nordic
Beat. It is included here because it has 36 files in the collection tagged
with its own Player-ID signature (`NordicBeat_Editor`), but no prior
knowledge card. Tier 1 composer aggregation shows the tool's use is almost
entirely internal to its own crew: of the 4 composer folders that use it,
3 correspond to the group's only 3 listed members (Matrix, Evony, Quan per
CSDb), with Matrix himself accounting for 64% of the tagged files — a
classic small-scene/personal-tool signature rather than a widely adopted
editor.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) usage is essentially
confined to the tool's own three-person originating group, and (2) no
source, disassembly, or format documentation exists anywhere that was
found — DeepSID's own curated `players.json` entry has only a single real
spec field (`zero_pages`) populated, with every other field left blank,
suggesting even DeepSID never got further than a Player-ID identification
pass on this one.

## Disassembly notes

None. No public source archive or prior disassembly of Nordic Beat Editor
was located (CSDb only hosts the compiled binary and a demo-song d64). A
future pass would need to start from a representative `NordicBeat_Editor`
`.sid`'s PSID header (init/play addresses) and disassemble from there —
the only route to real memory-map/format facts, since there is no source
to read.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release year, CSDb release/group, composer usage pattern) are confirmed,
from the cached SIDId entry, DeepSID's `players.json`, CSDb, and HVSC's
`Musicians.txt`. The one runtime-adjacent fact present (`memory.zero_page`)
is carried through from DeepSID's curated data, not independently
disassembled here. Every other Tier 3 field is `TODO` because no source or
disassembly exists to confirm it — an honest stub, not a guessed memory
map.

## Sources

See the `sources` array — the CSDb release and group pages, the cached
SIDId entry, DeepSID's `players.json` curated entry, HVSC's
`Musicians.txt`, and this project's own `data/composers/*.json` usage
aggregation.

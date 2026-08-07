# C64 Composer (Pretzel Logic)

```json
{
  "id": "pretzel-c64composer",
  "name": "C64 Composer",
  "aliases": ["Pretzel/C64Composer"],
  "authors": ["Fredrik Blom (Coq Rouge)"],
  "released": "9 July 1989, Pretzel Logic",
  "status": "stub",
  "platform": "Native C64 music composition tool, per CSDb.",
  "csdb_release": 27453,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId and CSDb agree cleanly: SIDId gives name 'C64 Composer', author 'Fredrik Blom (Coq Rouge)', released '1989 Pretzel Logic', reference CSDb release 27453. CSDb's own page confirms: title 'C64 Composer V1.0', 9 July 1989, group Pretzel Logic, code by Coq Rouge, music by Coq Rouge PLUS two other credited musicians on the bundled demo songs, 'Future Freak' (of Dexion) and 'Laxity' (of Starion, The Flexible Arts).",
    "That third co-credited musician name, 'Laxity', is the same handle as the already-carded Laxity NewPlayer family (knowledge/players/laxity-newplayer.md) — but this is a MUSIC credit on a demo song bundled with C64 Composer's release, not a code/authorship credit on the tool itself, and there is no source stating C64 Composer's own replay routine is related to Laxity's NewPlayer work. Recorded here as a notable co-incidence, explicitly NOT as an `edges` relationship — no evidence of shared code.",
    "CSDb describes the demo song as 'a cover version of ALF title theme' per a user comment; the release bundles two SID files (Demotune, DNA Warrior) and is downloadable as both disk image and VSF emulator formats.",
    "Only 1 locally-tagged file ('Demotune', by Fredrik Blom) despite being a real, named, three-composer-credited tool release — too small a local sample to reflect the tool's actual real-world reach. Census confirmed via a full glob of data/composers/*.json for the tag 'Pretzel/C64Composer': exactly 1 match, fredrik-blom.json's 'Demotune' entry — no other composer file carries this tag.",
    "Demotune.sid's own PSID header (per CSDb webservice type=sid id=50255, not a disassembly): LoadAddr 49152 ($C000), InitAddr 50496 ($C540), PlayAddr 49153 ($C001), 1 subtune. Header metadata only — not a substitute for Tier 3 entry/memory facts, which remain TODO.",
    "CSDb's Pretzel Logic group release list (type=group id=16, depth=3) shows exactly one 'C64 Composer' release — V1.0 (id 27453) — no later/reworked version exists on CSDb. The composer's own alt-editor 'Soundscape' (tagged 'Pretzel/Soundscape' locally, CSDb release 33643, 1990) is a separate SIDId tag/tool, out of this card's scope.",
    "Coq Rouge's CSDb Handle ID 4993 resolves to Scener ID 857, whose handle list includes 'Rico' (Handle ID 873) — matching Fredrik Blom's local composer profile csdb_id 873 (data/composers/fredrik-blom.json) exactly. Cross-confirms the SIDId author attribution independently of the sidid.nfo text.",
    "No manual, format spec, or Codebase64/HVSC documentation was found for C64 Composer's data format or replay routine (targeted web search, 2026-08-07); CSDb's only downloads are a .d64 disk image and a .vsf VICE snapshot of the bundled demo song — neither inspected here."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Pretzel/C64Composer'])",
    "CSDb release 'C64 Composer V1.0' (Coq Rouge/Pretzel Logic, 9 Jul 1989, co-music credits Future Freak/Dexion and Laxity/Starion+The Flexible Arts), verified live via csdb.dk webservice type=release id=27453: https://csdb.dk/release/?id=27453",
    "CSDb webservice type=sid id=50255 (Demotune.sid PSID header fields): https://csdb.dk/webservice/?type=sid&id=50255&depth=2",
    "CSDb webservice type=group id=16 depth=3 (Pretzel Logic release list, confirms only one C64 Composer release exists): https://csdb.dk/webservice/?type=group&id=16&depth=3",
    "Sibling card (same-named musician credited on the bundled demo song, no code relationship asserted): knowledge/players/laxity-newplayer.md",
    "Local dataset: 1 file tagged Pretzel/C64Composer, 1 composer (Fredrik Blom) — full glob census of data/composers/*.json, 2026-08-07"
  ]
}
```

## Overview

`Pretzel/C64Composer` is SIDId's tag for **C64 Composer**, a native C64
music composition tool released 9 July 1989 by the Pretzel Logic group —
coded by **Fredrik Blom** ("Coq Rouge"). SIDId and CSDb agree cleanly on
authorship and date. Notably, CSDb credits the bundled demo song's music to
three people, including a musician handled "Laxity" — the same handle as
the already-carded Laxity NewPlayer family — but this is only a music
credit on a bundled song, not evidence the tool's own code is related, so
no lineage edge is recorded.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) clean SIDId/CSDb agreement on a
real, named, dated tool, cross-confirmed via CSDb's live webservice (release
27453 and the composer's own Scener/Handle graph, ID 857/873 matching the
local profile's `csdb_id`); (2) a co-incidental "Laxity" music credit on the
bundled demo song, explicitly NOT treated as a code-lineage edge to the
existing laxity-newplayer.md card — no source states such a link; (3) only 1
local file despite the tool having a real, multi-credited release — confirmed
by a full glob census of `data/composers/*.json`, not a sample; (4) no later
version of C64 Composer exists on CSDb (checked the full Pretzel Logic group
release list) — V1.0 is the only release; (5) no manual, format spec, or
Codebase64/HVSC documentation was found anywhere for this tool.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo was found (disk-image/VSF
downloads exist on CSDb but were not inspected here). Demotune.sid's raw
PSID header (load/init/play addresses) was read via CSDb's webservice and is
recorded as a quirk only — per the extraction template's own rule, PSID
header metadata is not a disassembly fact and must never be promoted into
Tier 3 `entry`/`memory` fields, so those remain TODO here.

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, and
the CSDb release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 27453, the sibling
laxity-newplayer.md card, and the local composer aggregation.

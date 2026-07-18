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
    "Only 1 locally-tagged file ('Demotune', by Fredrik Blom) despite being a real, named, three-composer-credited tool release — too small a local sample to reflect the tool's actual real-world reach."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Pretzel/C64Composer'])",
    "CSDb release 'C64 Composer V1.0' (Coq Rouge/Pretzel Logic, 9 Jul 1989, co-music credits Future Freak/Dexion and Laxity/Starion+The Flexible Arts): https://csdb.dk/release/?id=27453",
    "Sibling card (same-named musician credited on the bundled demo song, no code relationship asserted): knowledge/players/laxity-newplayer.md",
    "Local dataset: 1 file tagged Pretzel/C64Composer, 1 composer (Fredrik Blom) — data/composers/*.json aggregation"
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
real, named, dated tool; (2) a co-incidental "Laxity" music credit on the
bundled demo song, explicitly NOT treated as a code-lineage edge to the
existing laxity-newplayer.md card — no source states such a link; (3) only
1 local file despite the tool having a real, multi-credited release.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo was found (disk-image/VSF
downloads exist on CSDb but were not inspected here).

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, and
the CSDb release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 27453, the sibling
laxity-newplayer.md card, and the local composer aggregation.

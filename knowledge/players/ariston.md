# Ariston (Music Editor)

```json
{
  "id": "ariston",
  "name": "Ariston (Music Editor)",
  "aliases": ["Ariston"],
  "authors": ["Ian Crabtree", "Philip Brabbin", "Wally Beben"],
  "released": "1987-1988 (Ian Crabtree's original driver, ~1987; an improved version co-credited to Philip Brabbin and Wally Beben, released 1988)",
  "status": "stub",
  "platform": "Native C64 tool — a commercial UK games-industry music editor/driver (DeepSID distribution: \"Commercial\"), not a scene-published tracker. No public source code or format documentation was found.",
  "csdb_release": 119920,

  "memory": {
    "load_address": "TODO: no public source/disassembly located",
    "zero_page": "DeepSID players.json field 'zero_pages': \"Approx 4-6 bytes\" — cited as-is, not independently verified via disassembly",
    "layout": "TODO: order list / patterns / table addresses — not documented publicly"
  },
  "entry": {
    "init": "TODO: per-file (would need a PSID header read or disassembly)",
    "play": "TODO: per-file (PSID header); DeepSID players.json gives an aggregate play-routine cost of 'Approx 35-42 rasterlines [SD]' but no address"
  },
  "speed": "TODO: no public source/disassembly located",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public source/disassembly located",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Composer concentration in this dataset (HVSC MUSICIANS\\ tree only, per data/composers/*.json): 137 files across 14 composers, no single composer dominant — Wally Beben 30, Steve Barrett 27, Ian Crabtree 21, Mark Wilson 19, Neil Scales 10, Perdita 10, Allister Brimble 5, Lyndon Sharp 3, Matt Gray 3, Barry Leitch 2, Denis Harris 2, Jonathan Dunn 2, Kendal 2, Deadman 1. Several of these are known 1980s-90s UK C64 games-industry composers (Wally Beben, Steve Barrett, Mark Wilson, Allister Brimble, Matt Gray), so the spread reads as a genuinely used in-house/commercial tool rather than one person's personal routine.",
    "Distributed commercially, not as a scene-native tracker release: the two CSDb entries titled 'Ariston Music Editor' (id 119920, Criminals in Computers, 1988; id 29914, Criminals in Computers + Illusion, 24 Jun 1988) are both warez CRACKS of the editor disk, not original scene productions. No public source code, GitHub repo, or format/manual documentation was located (CSDb, Codebase64, general web search).",
    "SIDId's sidid.nfo lists three further signature variants for this driver family — '(Ian_Crabtree_V1)', '(Ian_Crabtree_V2)', and '(Wally_Beben)' (the last documented as 'an improved version of the player/editor by Ian Crabtree', authors Ian Crabtree, Philip Brabbin & Wally Beben, CSDb release 119920) — but none of the three appear as a raw player tag anywhere in this project's local HVSC-derived dataset (0 files each). Only the bare 'Ariston' tag does (137 files), so this card's usage numbers cover just that one signature cluster, not the full SIDId family.",
    "Cross-reference: composer Matt Gray's knowledge card (matt-gray.md) notes he used SoundMonitor and 'the Ariston driver' early in his career before writing his own from-scratch driver — real evidence of adoption by another composer, but not a technical derivation of Ariston itself, so no `edges` entry was asserted from it.",
    "DeepSID's curated players.json spec entry supplies two runtime-flavored figures — 'zero_pages: Approx 4-6 bytes' and 'cpu_time: Approx 35-42 rasterlines [SD]' — recorded here purely as citations to that source, not confirmed by any disassembly done for this card."
  ],
  "sources": [
    "sidid:Ariston (author Ian Crabtree) and sidid:(Wally_Beben) (name 'Ariston Music Editor', authors Ian Crabtree/Philip Brabbin/Wally Beben, released 1988, reference https://csdb.dk/release/?id=119920) — data/sidid.json",
    "DeepSID players.json curated entry 'Ariston' (developer Ian Crabtree, start_year 1987, end_year 1988, csdb_id 119920, platform 'Native / C64 emulator', distribution 'Commercial', zero_pages 'Approx 4-6 bytes', cpu_time 'Approx 35-42 rasterlines [SD]') — data/players.json",
    "Local dataset: 137 files tagged 'Ariston' across 14 composers (knowledge/COVERAGE.md line 14; verified by grep of data/composers/*.json)",
    "CSDb release 'Ariston Music Editor' (Criminals in Computers, 1988): https://csdb.dk/release/?id=119920",
    "CSDb release 'Ariston Music Editor' (Criminals in Computers + Illusion, 24 Jun 1988, import credit 'Black Beard'): https://csdb.dk/release/?id=29914",
    "SIDId project sidid.nfo (GitHub, cadaver/sidid): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "VGMPF wiki, 'Ian Crabtree' (notes he 'created the Ariston driver and arranged in The Ariston Music Editor'; tuning at 433.5 Hz PAL / 450 Hz NTSC): https://www.vgmpf.com/Wiki/index.php?title=Ian_Crabtree",
    "Sibling card cross-reference: knowledge/players/matt-gray.md (notes early use of the 'Ariston driver')"
  ]
}
```

## Overview

Ariston (Music Editor) is a commercial C64 music-composition tool/driver
written by British programmer Ian Crabtree, originating around 1987, with an
improved version co-credited to Philip Brabbin and Wally Beben released in
1988 (SIDId). It is not a scene-published tracker — DeepSID's own spec table
lists its distribution as "Commercial" — and the only public traces of it are
two CSDb crack releases of the editor disk (119920, 29914) rather than an
original scene production. In this project's local HVSC-derived dataset it
covers 137 files spread across 14 composers, several of them known 1980s-90s
UK games-industry names (Wally Beben, Steve Barrett, Mark Wilson, Allister
Brimble, Matt Gray) — a spread consistent with a real in-house/commercial
tool rather than one person's personal routine.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a **commercial,
closed tool** with no public source code or format documentation found
anywhere searched (CSDb, Codebase64, general web); its CSDb presence is
**warez cracks of the editor disk**, not scene releases; SIDId documents
**three further signature variants** of this driver family that simply don't
occur in this project's local dataset; and composer Matt Gray's own card
notes he used "the Ariston driver" early on, which is interesting usage
evidence but not a technical lineage claim about Ariston itself.

## Disassembly notes

None. No public source or disassembly of the Ariston driver/editor was
located. A future pass would need to disassemble a representative
Ariston-tagged `.sid` from its PSID header (init/play addresses) and trace it
through `sidm2-siddump` — the only route to real memory-map/format facts,
since there is no source to read.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (authors,
release years, CSDb releases, commercial distribution, local usage stats) are
confirmed, from SIDId, DeepSID's curated players.json, CSDb, and this
project's own composer data. Every Tier 3 runtime field is `TODO` except two
DeepSID-sourced approximate figures (zero-page footprint, play-routine
raster cost), which are cited but not independently verified — an honest gap
rather than a guessed memory map.

## Sources

See the `sources` array — SIDId's `sidid.nfo`, DeepSID's curated
`players.json` entry, this project's local composer-file aggregate
(`data/composers/*.json`, `knowledge/COVERAGE.md`), two CSDb crack-release
pages, and the VGMPF wiki page on Ian Crabtree.

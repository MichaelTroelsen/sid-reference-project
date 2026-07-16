# Garry Kitchen's GameMaker (GKGM)

```json
{
  "id": "gkgm",
  "name": "Garry Kitchen's GameMaker (GKGM)",
  "aliases": ["GKGM"],
  "authors": ["Alex DeMeo", "Stephen Gaboury"],
  "released": "1985 (Activision)",
  "status": "stub",
  "platform": "Not a standalone tracker/editor — the built-in SoundMaker/MusicMaker music modules of 'Garry Kitchen's GameMaker', a consumer game-construction-kit product (sprite/sound/music/scene editors + assembler-free game engine) for C64, Apple II, and IBM PC, published by Activision in 1985 and designed by Garry Kitchen. Music made with MusicMaker and embedded in GameMaker-built games is what SIDId's Player-ID fingerprints as the 'GKGM' tag.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly performed",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
  },
  "speed": "TODO: no disassembly performed",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "NOT A DEDICATED MUSIC TOOL — it is one component (MusicMaker, paired with a separate SoundMaker for sound effects) of a 5-tool game-construction kit (SpriteMaker, SoundMaker, MusicMaker, SceneMaker, Editor) aimed at non-programmer consumers. Source: Wikipedia — https://en.wikipedia.org/wiki/Garry_Kitchen's_GameMaker",
    "AUTHORED BY ALEX DEMEO WITH STEPHEN GABOURY, not by Garry Kitchen himself — Kitchen designed/led the overall GameMaker product, but the Video Game Music Preservation Foundation credits 'DeMeo developed and used SoundMaker and MusicMaker, parts of Garry Kitchen's GameMaker' with Stephen Gaboury on the C64 version, 1985. Source: VGMPF — https://www.vgmpf.com/Wiki/index.php/Alex_DeMeo",
    "DeMeo also composed music WITH the tool (e.g. a file titled 'The William Tell Overture' in this dataset, alex-demeo.json), so 'author of the player' and 'a composer in this dataset' (19 of the 50 tagged files) are the same person — expected for an in-house demo-content author, not evidence the tool was widely adopted by outside musicians. Source: local dataset (data/composers/alex-demeo.json), not VGMPF — VGMPF's Alex DeMeo page does not mention this specific tune.",
    "COMPOSER CONCENTRATION: 50 tagged files across only 7 composer entities (data/composers/*.json): alex-demeo (19, 38%), del-priore-fabian (15, 30%), inc-imagineering (6), mark-darin (3), reitz-jennifer-diane (4), alan-bond (2), scroll (1). Two composers account for 68% of files — consistent with a bundled consumer product used mainly by its own author plus a handful of people who built games/demos with the retail kit, not a broadly-adopted scene tool.",
    "NO SIDID `reference`/CSDb release id in data/sidid.json's GKGM entry (only name/author/released) — the CSDb release id in this card's `csdb_release` field is intentionally left null rather than borrowing the unrelated CSDb entry for the cracked GameMaker product disk itself (id 116982, Eagle Soft Incorporated release, 'no credits found' on CSDb) — that page documents a scene crack/distribution, not player authorship, and CSDb's own credits field there is empty. See knowledge-project note on the analogous games-creator.md card for the same pitfall (crack-group credits vs. tool authorship) that was flagged there.",
    "NO PUBLIC SOURCE OR DISASSEMBLY FOUND for the C64 SoundMaker/MusicMaker sound engine specifically — GameMaker itself is a commercial retail product (still sold in reissue/emulation form), not released as open source. All Tier 3 runtime fields are honestly TODO."
  ],
  "sources": [
    "SIDId (sidid.nfo, byTag['GKGM']): name 'Garry Kitchen's GameMaker', author Alex DeMeo, released 1985 Activision — data/sidid.json",
    "Wikipedia — Garry Kitchen's GameMaker: https://en.wikipedia.org/wiki/Garry_Kitchen's_GameMaker",
    "Video Game Music Preservation Foundation — Alex DeMeo (credits Stephen Gaboury as co-developer of SoundMaker/MusicMaker on the C64 port): https://www.vgmpf.com/Wiki/index.php/Alex_DeMeo",
    "MobyGames — Garry Kitchen's GameMaker: https://www.mobygames.com/game/211918/garry-kitchens-gamemaker/",
    "Garry Kitchen's own site, product history page: https://www.garrykitchen.com/product_history/garry_kitchens_gamemaker.html",
    "CSDb release (C64 cracked-disk release by Eagle Soft Incorporated, 1985 — crack/distribution credit only, not player authorship): https://csdb.dk/release/?id=116982",
    "Local dataset: 50 files tagged GKGM across 7 composer entities (see knowledge/COVERAGE.md and data/composers/*.json)"
  ]
}
```

## Overview

`GKGM` is the Player-ID signature name for the music engine (MusicMaker,
paired with a separate SoundMaker sound-effects module) inside **Garry
Kitchen's GameMaker**, a 1985 Activision consumer game-construction kit for
C64/Apple II/IBM PC designed by Garry Kitchen. The sound/music code itself
was written by Alex DeMeo with Stephen Gaboury, not by Kitchen. In this
project's dataset it is a small, concentrated family — 50 tagged files
across just 7 composer entities, with the tool's own co-author (Alex DeMeo)
and one other composer (Del Priore Fabian) together accounting for over
two-thirds of the files — consistent with a bundled product used mostly by
its own creators and a handful of people who built games with the retail
kit, rather than a broadly-adopted independent scene tool.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **authorship is DeMeo/
Gaboury, not Garry Kitchen** (Kitchen designed the overall product); the
**composer list is dominated by the tool's own author**, which is expected
for embedded demo content, not evidence of wide scene adoption; and the
**CSDb release id was deliberately left null** rather than borrowing the
unrelated cracked-disk release page (116982), whose credits field is empty
and documents scene distribution, not player authorship — the same trap
already flagged on the analogous `games-creator.md` card.

## Disassembly notes

None performed. No public disassembly or source release for the C64
SoundMaker/MusicMaker engine was found; GameMaker is a commercial retail
product, not open source. A future pass would need a representative
`GKGM`-tagged `.sid` (this project does not store the HVSC audio archive
itself, only metadata) to read a PSID header and, ideally, trace it via
`sidm2-siddump` before any Tier 3 field could move out of TODO.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed here (SIDId's cached entry, Wikipedia, VGMPF, MobyGames, Garry
Kitchen's own site, and the local per-composer file counts). Every runtime
field (memory map, entry points, speed, data formats, effects) is honestly
`TODO` — no disassembly or trace was performed.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), Wikipedia, VGMPF,
MobyGames, garrykitchen.com, the CSDb crack-release page (credits caveat
noted), and the local dataset counts in `knowledge/COVERAGE.md` /
`data/composers/*.json`.

# Garry Kitchen's GameMaker (GKGM)

```json
{
  "id": "gkgm",
  "name": "Garry Kitchen's GameMaker (GKGM)",
  "aliases": ["GKGM"],
  "authors": ["Alex DeMeo", "Stephen Gaboury"],
  "released": "1985 (Activision)",
  "status": "stub",
  "platform": "Not a standalone tracker/editor — the built-in SoundMaker/MusicMaker music modules of 'Garry Kitchen's GameMaker', a consumer game-construction-kit product (sprite/sound/music/scene editors + assembler-free game engine) for C64, Apple II, and IBM PC, published by Activision in 1985 and designed by Garry Kitchen. Music made with MusicMaker and embedded in GameMaker-built games is what SIDId's Player-ID fingerprints as the 'GKGM' tag. The C64/128 edition's MusicMaker is note-based, not pattern/tracker-based: a 'Music Sheet' UI with three musical staves (one per SID voice — 'The Commodore 64 or 128 computers have three voices'), a joystick-driven Note Selection Box, Editing Column, and Scrolling Arrows, per-channel choice of one of 13 instruments, a 'tie' command for slurring notes, and a numeric tempo dial. SoundMaker (sound effects, separate from MusicMaker) is frame-based, up to 511 frames per effect, three wave types (noise/pulse/slide). Source: C64/128 GameMaker manual (Activision, 1985), full text — https://archive.org/details/7btv-98wqvt-698qwvt-698bwvq-6t-98wbv-76",
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
    "NO PUBLIC SOURCE OR DISASSEMBLY FOUND for the C64 SoundMaker/MusicMaker sound engine specifically — GameMaker itself is a commercial retail product (still sold in reissue/emulation form), not released as open source. All Tier 3 runtime fields are honestly TODO.",
    "THE C64/128 MANUAL (Activision, 1985) IS PLATFORM-SPECIFIC AND DIFFERS FROM THE APPLE II ONE — an easy mix-up: the Apple II manual (archive.org item 'A2_Garry_Kitchens_GameMaker_manual') describes 2 voices and 4 instruments per channel (Apple II's sound hardware), while the C64/128 manual explicitly states 'The Commodore 64 or 128 computers have three voices... you can choose one of 13 instruments to be played on each channel.' Only the C64/128 manual's numbers apply to files tagged GKGM in this dataset. Source: https://archive.org/details/7btv-98wqvt-698qwvt-698bwvq-6t-98wbv-76",
    "MULTIPLE CSDb RELEASE ENTRIES EXIST FOR THE GAMEMAKER PRODUCT DISK ITSELF, ALL CRACKS — none is player-authorship documentation: id 116982 (Eagle Soft Incorporated, 1985, cited as csdb_release=null rationale above), plus id 133712 (The Crack Team, 1986) and id 20050 (Indiana Jones 1933, 1985), found during this pass. All three are scene crack/distribution credits, reinforcing rather than changing the existing null csdb_release decision.",
    "THE TOOL WAS STILL BEING USED FOR NEW RELEASES DECADES LATER, OUTSIDE THIS DATASET — CSDb release id 257395, 'Lunadia' by Commodore Spain (21 Nov 2025), whose own release notes say 'Made with gkgm with a twist.' This confirms GKGM/GameMaker retained a small hobbyist user base long after 1985, though Lunadia is not one of the 50 HVSC-tagged files this card's composer counts are drawn from (its music is credited to Narcisound and Zyron, not composers already in data/composers/*.json under the GKGM tag). Source: https://csdb.dk/release/?id=257395"
  ],
  "sources": [
    "SIDId (sidid.nfo, byTag['GKGM']): name 'Garry Kitchen's GameMaker', author Alex DeMeo, released 1985 Activision — data/sidid.json",
    "Wikipedia — Garry Kitchen's GameMaker: https://en.wikipedia.org/wiki/Garry_Kitchen's_GameMaker",
    "Video Game Music Preservation Foundation — Alex DeMeo (credits Stephen Gaboury as co-developer of SoundMaker/MusicMaker on the C64 port): https://www.vgmpf.com/Wiki/index.php/Alex_DeMeo",
    "MobyGames — Garry Kitchen's GameMaker: https://www.mobygames.com/game/211918/garry-kitchens-gamemaker/",
    "Garry Kitchen's own site, product history page: https://www.garrykitchen.com/product_history/garry_kitchens_gamemaker.html",
    "CSDb release (C64 cracked-disk release by Eagle Soft Incorporated, 1985 — crack/distribution credit only, not player authorship): https://csdb.dk/release/?id=116982",
    "CSDb release (The Crack Team, 1986, GameMaker product disk crack): https://csdb.dk/release/?id=133712",
    "CSDb release (Indiana Jones 1933, 1985, GameMaker product disk crack): https://csdb.dk/release/?id=20050",
    "CSDb release (Lunadia by Commodore Spain, 2025 — 'Made with gkgm with a twist', evidence of continued hobbyist use decades after 1985): https://csdb.dk/release/?id=257395",
    "Manual for Garry Kitchen's GameMaker for the Commodore 64/128 (Activision, 1985), full text via Internet Archive — MusicMaker/SoundMaker sections (3 voices, 13 instruments/channel, note-based Music Sheet UI, tie/tempo commands; SoundMaker's frame-based sound-effect model, up to 511 frames): https://archive.org/details/7btv-98wqvt-698qwvt-698bwvq-6t-98wbv-76",
    "Local dataset: 50 files tagged GKGM across 7 composer entities (see knowledge/COVERAGE.md and data/composers/*.json) — verified against data/composers/*.json's raw folder[].player field during this research pass: alan-bond (2), alex-demeo (19), del-priore-fabian (15), inc-imagineering (6), mark-darin (3), reitz-jennifer-diane (4), scroll (1)"
  ]
}
```

## Overview

`GKGM` is the Player-ID signature name for the music engine (MusicMaker,
paired with a separate SoundMaker sound-effects module) inside **Garry
Kitchen's GameMaker**, a 1985 Activision consumer game-construction kit for
C64/Apple II/IBM PC designed by Garry Kitchen. The sound/music code itself
was written by Alex DeMeo with Stephen Gaboury, not by Kitchen. On the C64/128
edition specifically, MusicMaker is a note-based "Music Sheet" editor (three
staves, one per SID voice, joystick-driven note entry, 13 selectable
instruments per channel) rather than a pattern/tracker interface — a UI
paradigm confirmed directly from the C64/128 product manual's full text. In
this project's dataset it is a small, concentrated family — 50 tagged files
across just 7 composer entities, with the tool's own co-author (Alex DeMeo)
and one other composer (Del Priore Fabian) together accounting for over
two-thirds of the files — consistent with a bundled product used mostly by
its own creators and a handful of people who built games with the retail
kit, rather than a broadly-adopted independent scene tool. The tool did find
at least one much later hobbyist use outside this dataset: a CSDb release
from November 2025 ("Lunadia" by Commodore Spain) states it was "Made with
gkgm with a twist."

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **authorship is DeMeo/
Gaboury, not Garry Kitchen** (Kitchen designed the overall product); the
**composer list is dominated by the tool's own author**, which is expected
for embedded demo content, not evidence of wide scene adoption; the
**CSDb release id was deliberately left null** rather than borrowing any of
the three cracked-disk release pages found for the product (116982, 133712,
20050), none of which carry player-authorship credits — the same trap
already flagged on the analogous `games-creator.md` card; and **the Apple II
and C64/128 manuals disagree on voice/instrument counts** (2 voices/4
instruments vs. 3 voices/13 instruments) — only the C64/128 numbers apply to
GKGM-tagged files here.

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
MobyGames, garrykitchen.com, three CSDb crack-release pages for the product
disk (credits caveat noted on all), a 2025 CSDb release citing continued
hobbyist use, the full-text C64/128 product manual (Internet Archive), and
the local dataset counts in `knowledge/COVERAGE.md` / `data/composers/*.json`
(re-verified against the raw per-file `player` field during this pass).

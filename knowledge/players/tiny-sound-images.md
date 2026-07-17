# Tiny/Sound Images

<!--
  Player-ID / SIDId tag: "Tiny/Sound_Images" — the in-house C64 sound driver
  of British game-audio studio Sound Images (Tony "Tiny" Williams + Paul
  Tonge), not a scene tool.
-->

```json
{
  "id": "tiny-sound-images",
  "name": "Tiny/Sound Images",
  "aliases": ["Tiny/Sound_Images"],
  "authors": ["Tony Williams (\"Tiny\")", "Paul Tonge (composer, some tracks)"],
  "released": "TODO: no single release date — a proprietary in-house driver used across UK commercial game conversions, c. 1988-1994 per the games it appears in (Bob's Full House 1988 to NARC/Turtles 1990-91)",
  "status": "stub",
  "platform": "Native C64 sound driver, hand-written by Tony Williams for the British game-audio company Sound Images (Williams + Paul Tonge) — not a scene tracker/editor, a proprietary in-house driver embedded per game by a commercial studio. No standalone editor is known.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per game (e.g. Judge Dredd .sid loads at $ECE0) — not a fixed engine constant; not disassembled",
    "zero_page": "TODO: not disassembled",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "TODO: per-file, read from each .sid's PSID header (e.g. Judge Dredd play address $ED00) — not a fixed convention; not disassembled",
    "play": "TODO: not disassembled"
  },
  "speed": "TODO: not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The Player-ID/SIDId tag 'Tiny/Sound_Images' resolves to two real people, not a scene tool: 'Tiny' is Tony Williams' nickname (several composer credits in the dataset literally read 'Tony Williams (Tiny)'), and 'Sound Images' is the British game-audio company Williams co-founded with Paul Tonge in 1989 (active roughly 1989-1994, per VGMPF). No SIDId entry exists for this tag (checked data/sidid.json — absent), so name/author/year/reference here come from cross-referencing the composer credits already in this dataset against VGMPF, not from SIDId.",
    "This is a commercial game-industry sound driver, not a demoscene tracker: Sound Images specialised in composing music and PORTING other composers' scores across platforms with weaker audio hardware (VGMPF's Sound Images company page: 'converting other composers' songs to another platform, usually with lesser audio capabilities'). Paul Tonge's C64 credits (Xenon, Pang, Saint Dragon, N.A.R.C., Demons Kiss, Pro Mountain Bike Simulator) are documented on his VGMPF gameography, but the specific 'converted by Tony Williams to sound driver by Sound Images' phrasing appears on VGMPF's Paul Tonge page only under his Sega Genesis/Mega Drive credits, not the C64 section — so whether Williams' C64 driver specifically underlies Tonge's C64-credited tracks (as opposed to just the shared Sound Images business model) is inferred from the company's general practice, not a C64-specific citation.",
    "Composer concentration is total: exactly 2 composers in this dataset use the tag (Paul Tonge, 7 files; Tony Williams, 9 files, one shared: 'Psycho Hopper' credited to both) — 16 files total, all released commercial C64 game conversions (Xenon, Pang!, N.A.R.C., Saint Dragon, Judge Dredd, Ninja Warriors, Shinobi, Octoplex, Kendo Warrior, Micro Mouse, Bob's Full House, Great Courts, etc.), none of them demos. This is the single-team/in-house-tool pattern the extraction template calls out, at its most extreme: not a personal scene routine either, but a closed commercial studio's private engine.",
    "No public source, disassembly, format spec, or CSDb group/release page was found for the driver itself (CSDb site search for 'Sound Images' returns no groups/releases/sceners) — every runtime field here is honestly TODO. The two .sid PSID headers checked on CSDb (Judge Dredd: load $ECE0/play $ED00) show typical game-conversion relocation, not a fixed engine address, so even that fact can't be generalised without checking more files."
  ],
  "sources": [
    "Local dataset: 16 files tagged Tiny/Sound_Images across 2 composers (see knowledge/COVERAGE.md, rank rows around 16 occurrences; data/composers/paul-tonge.json, data/composers/tony-williams.json)",
    "data/sidid.json checked directly — no 'Tiny/Sound_Images', 'Tiny', or 'Sound_Images' entry exists in SIDId's byTag index",
    "VGMPF — Sound Images (company overview: founders, 1989-1994, cross-platform game-audio outsourcing): https://www.vgmpf.com/Wiki/index.php/Sound_Images",
    "VGMPF — Paul Tonge (C64 gameography, credited titles; the 'converted by Tony Williams to sound driver by Sound Images' phrasing on this page applies to his Genesis/Mega Drive credits, not the C64 section — cited here only for the C64 game list): https://www.vgmpf.com/Wiki/index.php/Paul_Tonge",
    "VGMPF — Tony Williams (aliases incl. 'Tiny Williams'; C64/DOS/Genesis driver work): https://www.vgmpf.com/Wiki/index.php/Tony_Williams",
    "CSDb SID entry, Judge Dredd / Tony Williams (Tiny) / 1991 Virgin Mastertronic — load $ECE0, play $ED00, 5 songs: https://csdb.dk/sid/?id=46373",
    "CSDb site search for 'Sound Images' (no groups/releases/sceners found — checked and confirmed empty): https://csdb.dk/search/?search=Sound+Images&type=all"
  ]
}
```

## Overview

"Tiny/Sound Images" is the Player-ID/SIDId tag for the in-house C64 sound
driver of Sound Images, a British game-audio company founded in 1989 by
Tony Williams ("Tiny") and Paul Tonge, active roughly 1989-1994 (VGMPF).
It is not a demoscene tracker or a tool with any public editor — it is a
commercial studio's proprietary replay engine, embedded per-game across a
run of licensed C64 conversions (Xenon, Pang!, N.A.R.C., Saint Dragon, Judge
Dredd, Ninja Warriors, Shinobi, and others). Williams wrote the sound
driver; some tracks were composed by Tonge, and Sound Images' general
business model (per VGMPF's company page) was converting other composers'
scores to the studio's own driver — though the specific "converted by Tony
Williams" phrasing on VGMPF's Paul Tonge page describes his Genesis credits,
not his C64 ones, so the C64-specific version of this claim is an inference
from the company's practice, not a direct citation. In this dataset it is used by
exactly two composers, 16 files total, with no crossover into scene
releases — the most concentrated, single-studio pattern the extraction
template describes.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) the tag decodes to two
real people (Tony "Tiny" Williams + the Sound Images company), not a scene
tool name — don't confuse it with an unrelated "Tiny" tracker; (2) it has no
SIDId entry at all, so this card's identity facts come from cross-referencing
VGMPF against the composer credits already in `data/composers/*.json`, not
from the usual `sidid.json` lookup; (3) no public source, disassembly, or
CSDb group/release page exists for the driver — CSDb site search for "Sound
Images" returns nothing — so every Tier 3 field is honestly `TODO`.

## Disassembly notes

None performed. No public source is known. A future pass could disassemble
one of the 16 tagged `.sid` files directly from its PSID header (e.g. Judge
Dredd: load $ECE0, play $ED00, per CSDb) and trace it through
`sidm2-siddump` — that is the only route to real memory/format facts here,
since this is a closed commercial driver with no published listing.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed (company founders and dates from VGMPF, composer/author
attribution from this dataset's own composer records and matching CSDb SID
entries). No runtime engine fact (memory map, entry points, data format,
effect encoding) has been examined; all are `TODO` rather than guessed.

## Sources

See the `sources` array — VGMPF's Sound Images / Paul Tonge / Tony Williams
pages, the CSDb Judge Dredd SID entry, this project's own composer records
for Paul Tonge and Tony Williams, and a confirmed-empty SIDId/CSDb-group
search.

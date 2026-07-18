# 4-Mat/TEDplay

```json
{
  "id": "4-mat-tedplay",
  "name": "4-Mat/TEDplay",
  "aliases": ["4-Mat/TEDplay"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "TODO: no date found — SIDId has no entry for this tag at all",
  "status": "stub",
  "platform": "TODO: appears to be a personal C64 replay routine by 4-Mat, plausibly related to his documented work exploring TED (Commodore Plus/4) sound synthesis on other platforms — no dedicated CSDb tool/release entry found under this name, and NOT confirmed to be the same thing as the unrelated open-source 'tedplay' PC/Plus-4-emulator project (see quirks)",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

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
    "SIDId's sidid.nfo has NO entry for '4-Mat/TEDplay' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "DO NOT CONFLATE with 'tedplay' the open-source project (github.com/calmopyrin/tedplay) — that is a PC media player built on a stripped-down Commodore Plus/4 emulator for playing TED/PSID files, unrelated code, not a C64-native player routine. The name overlap is coincidental as far as this research pass could determine; no evidence connects the two.",
    "4-Mat (Matt Simmonds) is independently documented as having explored TED (Plus/4), AY, and Atari chip-sound synthesis techniques alongside SID, per a ChipMusic.org forum thread titled '4mat's WIP c64 projects (AY/TED/ATARI/REMIX/FM+SID MUSIC)' — this is plausible context for why a C64 .sid file of his might carry a 'TEDplay'-named routine (e.g. a personal experiment emulating/referencing TED-style sound on the SID chip), but the forum thread itself could not be read during this pass (403 Forbidden) and no sentence explicitly describing a 'TEDplay' player was found — recorded as circumstantial context only, not a confirmed explanation.",
    "Single-composer concentration: all 4 locally-tagged files are by 4-Mat himself (per data/composers/4-mat.json) — consistent with a personal/experimental routine.",
    "4-Mat is also the author of two other separately-carded personal-routine tags in this project, '4-Mat_tiny_1'/'4-Mat_tiny_2' (knowledge/players/4-mat-tiny-1.md, 4-mat-tiny-2.md) and '4-Mat/MiniSeq' (knowledge/players/4-mat-miniseq.md) — no evidence connects any of these to this tag or to each other; each is its own distinct SIDId signature."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for '4-Mat/TEDplay': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "GitHub, calmopyrin/tedplay ('tedplay is media player based on a stripped down Commodore plus/4 emulator...') — checked and ruled out as unrelated: https://github.com/calmopyrin/tedplay",
    "ChipMusic.org forum, \"4mat's WIP c64 projects (AY/TED/ATARI/REMIX/FM+SID MUSIC)\" — title/existence only, page content not retrievable (403): https://chipmusic.org/forums/topic/14027/4mats-wip-c64-projects-aytedatariremixfmsid-music/",
    "Local dataset: 4 files tagged '4-Mat/TEDplay', all by 4-Mat (Matt Simmonds) — data/composers/4-mat.json",
    "Sibling cards by the same author: knowledge/players/4-mat-tiny-1.md, 4-mat-tiny-2.md, 4-mat-miniseq.md"
  ]
}
```

## Overview

`4-Mat/TEDplay` is a raw Player-ID tag for a replay routine used exclusively
by **Matt Simmonds**, handle **4-Mat**, a long-running UK SID composer. SIDId
has no entry for the tag. It is explicitly NOT the same thing as the
unrelated open-source PC "tedplay" project (a Plus/4-emulator-based media
player). 4-Mat is independently documented as having explored TED (Plus/4)
chip-sound techniques in his wider body of work, which is plausible but
unconfirmed context for the tag's name. All 4 locally-tagged files are his
own.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) do not confuse this tag with the
unrelated open-source `tedplay` PC project — checked and ruled out; (2) the
TED-chip-exploration context is circumstantial, not a confirmed explanation
of the routine; (3) usage is 100% by the composer himself, and this is one of
several distinct, uncorrelated personal-routine tags by the same author
already carded separately.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/4-mat.json`, `data/sidid.json`) plus web research to rule
out a name collision. `status: stub` — no runtime fact has been confirmed by
disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the unrelated
`tedplay` GitHub project (ruled out), a ChipMusic.org forum thread title, and
the local composer aggregation.

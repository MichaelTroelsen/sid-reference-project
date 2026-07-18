# Longhair

```json
{
  "id": "longhair",
  "name": "Longhair",
  "aliases": ["Longhair"],
  "authors": ["Miłosz Ignatowski (Longhair)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be a personal C64 replay routine used exclusively by its namesake composer — a DIFFERENT, distinct Player-ID signature from 'HardTrack_Composer' (the co-authored tool this same person is credited on, already carded as knowledge/players/hardtrack-composer.md) — no dedicated CSDb tool/release entry found under this exact name (unconfirmed)",
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
    "SIDId gives only an AUTHOR line for this exact tag: 'Milosz Ignatowski (Longhair)' (data/sidid.json byTag['Longhair']) — no NAME/reference/comment.",
    "SAME PERSON as the already-carded HardTrack Composer's player-code author (knowledge/players/hardtrack-composer.md, 1,126 files, Polish scene tool released 1992 with Brush). This 'Longhair' tag is a SEPARATE, smaller signature (2 files, both Longhair's own: 'Music Collection intro', 'Potwor 3' — data/composers/longhair.json) used alongside his HardTrack_Composer, JCH_NewPlayer_V14, Music_Assembler, Digitalizer_V2.x, and SidFactory_II/Laxity tags in the same composer's file list. No evidence establishes whether this is an earlier personal routine, a stray/individual build of HardTrack, or something unrelated — no edge asserted to hardtrack-composer.md absent a real disassembly comparison.",
    "Composer profile: Miłosz Ignatowski, handle Longhair, Poland, born 1975-05-02, CSDb scener id 3539 (data/composers/longhair.json) — matches the co-author identity already documented in hardtrack-composer.md.",
    "No public disassembly or source found for this specific tag. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag['Longhair'] = {\"author\": \"Milosz Ignatowski (Longhair)\"}",
    "data/composers/longhair.json (profile: full_name Milosz Ignatowski, handles Longhair, country Poland, born 1975-05-02, csdb_id 3539) and its folder[] listing (all raw player tags used by this composer, including HardTrack_Composer, JCH_NewPlayer_V14, Music_Assembler, Digitalizer_V2.x, SidFactory_II/Laxity, and this 'Longhair' tag)",
    "Sibling KB card, cross-checked for same-person authorship (no code-sharing evidence found): knowledge/players/hardtrack-composer.md",
    "Local dataset: 2 files tagged Longhair, single composer (Longhair himself) — see data/composers/longhair.json folder[]"
  ]
}
```

## Overview

Longhair is a Player-ID tag for a small C64 replay routine used exclusively
by **Miłosz Ignatowski**, handle **Longhair** (Poland) — the same person
credited as player-code co-author of the much larger, already-carded
[Hardtrack Composer](hardtrack-composer.md) (1992, 1,126 files, with
Brush). This "Longhair" tag is a distinct, much smaller signature (2 files,
both his own), and SIDId records only his author name for it, with no
NAME/reference/comment — unlike the fully-documented HardTrack Composer
entry.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) same real person as HardTrack
Composer's player-code author, but this is a SEPARATE Player-ID signature
— no code-sharing edge asserted without a disassembly; (2) 100%
single-composer usage; (3) his composer profile also uses several other
already-known player tags (JCH_NewPlayer_V14, Music_Assembler,
SidFactory_II/Laxity), showing he worked across multiple tools over time,
not just his own.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/longhair.json`, `data/sidid.json`) plus cross-reference
against the sibling hardtrack-composer.md card. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer profile, and
the sibling hardtrack-composer.md card.

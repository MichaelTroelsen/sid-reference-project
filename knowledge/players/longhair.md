# Longhair

```json
{
  "id": "longhair",
  "name": "Longhair",
  "aliases": ["Longhair"],
  "authors": ["Miłosz Ignatowski (Longhair)"],
  "released": "1992 (earliest-tune-attestation only, NOT a tool-release date — both of the 2 tagged files independently carry CSDb 'Released: 1992' fields: 'Music Collection intro' = '1992 Parados' at csdb.dk/webservice/?type=sid&id=18054, 'Potwor 3' = '1992 Elysium' at csdb.dk/webservice/?type=sid&id=18059; no separate 'Longhair' tool/editor release exists to date, see platform)",
  "status": "stub",
  "platform": "Native C64 — an embedded per-tune routine, not a distributed editor/tool: both tagged files are self-contained .sid binaries (PSID header: load=init=$1000, play=$1003, 6581/PAL for both — csdb.dk sid ids 18054, 18059) with no companion CSDb tool/release entry. data/players.json's only 'Longhair' hit is as a co-author credit line on the unrelated, already-carded HardTrack Composer entry (csdb_id 74928: developer field lists 'Brush|Longhair|Cruise') — confirms no dedicated 'Longhair' product/release page exists in the local players dataset either. Search-engine web search for a dedicated 'Longhair' C64 player/editor page (CSDb, Lemon64, Forum64) turned up nothing beyond the HardTrack Composer co-author credit before this session's WebSearch quota was exhausted; treat 'no tool exists' as unconfirmed-but-unsupported rather than proven absent.",
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
    "No public disassembly or source found for this specific tag. All runtime internals unknown.",
    "Census of all 2 tagged files (data/composers/longhair.json folder[], player=='Longhair'): 'Music Collection intro' (csdb_id 18054) and 'Potwor 3' (csdb_id 18059). Both independently CSDb-attested to 1992 ('1992 Parados' and '1992 Elysium' respectively) and both share identical PSID header shape — load=init=$1000, play=$1003, 6581/PAL, sizes 2945/3328 bytes — consistent with (but not proof of) a single shared small routine. This is header metadata only, not a disassembly fact; Tier 3 stays TODO.",
    "'Music Collection intro' was used in the composer's own 'Music Collection' release (CSDb release id 34745, dated 1992-01-31) — a self-published music-disk-style collection, reinforcing the personal-routine reading over a published tool."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag['Longhair'] = {\"author\": \"Milosz Ignatowski (Longhair)\"}",
    "data/composers/longhair.json (profile: full_name Milosz Ignatowski, handles Longhair, country Poland, born 1975-05-02, csdb_id 3539) and its folder[] listing (all raw player tags used by this composer, including HardTrack_Composer, JCH_NewPlayer_V14, Music_Assembler, Digitalizer_V2.x, SidFactory_II/Laxity, and this 'Longhair' tag)",
    "CSDb webservice, full census of both tagged files: https://csdb.dk/webservice/?type=sid&id=18054 (Music Collection intro — Released '1992 Parados', load/init $1000, play $1003) and https://csdb.dk/webservice/?type=sid&id=18059 (Potwor 3 — Released '1992 Elysium', same header shape)",
    "data/players.json (single 'Longhair' hit: HardTrack Composer entry, csdb_id 74928, developer 'Brush|Longhair|Cruise') — confirms no separate 'Longhair' tool/product entry exists in the local dataset",
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

Both tagged files census clean: "Music Collection intro" (CSDb id 18054,
`Released: 1992 Parados`) and "Potwor 3" (CSDb id 18059, `Released: 1992
Elysium`) — both independently attested to 1992, and both share an
identical PSID header shape (load=init=$1000, play=$1003, 6581/PAL). No
dedicated CSDb tool/release entry or `data/players.json` entry exists for
"Longhair" as a product; its only appearance there is as a co-author
credit on HardTrack Composer. `released` is recorded as an earliest-tune
attestation, not a tool-release date, and `platform`/`csdb_release` are
filled to the extent evidence allows — this session's WebSearch quota
was exhausted before a Lemon64/Forum64-specific search could be run, so
"no dedicated tool page exists" should be read as unconfirmed rather than
proven.

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

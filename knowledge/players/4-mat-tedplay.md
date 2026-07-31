# 4-Mat/TEDplay

```json
{
  "id": "4-mat-tedplay",
  "name": "4-Mat/TEDplay",
  "aliases": ["4-Mat/TEDplay"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "2017 — CSDb: all 4 tagged SID entries' own 'Released' field reads '2017 Orb' (checked directly via CSDb webservice type=sid, ids 58039/58041/58042/58043), matching the CSDb release they were used in, 'fUJi' (C64 Music Collection by Orb, release id 155811, released 2017-04-28). SIDId still has no entry for this tag at all.",
  "status": "stub",
  "platform": "Native C64 — a personal built-in play routine embedded directly in 4-Mat's own SID data (local dataset's player_type for all 4 files is 'Normal built-in', i.e. not a recognized/named driver signature). Used exclusively across 4 files that make up his music for Orb's 2017 demoscene release 'fUJi' (csdb.dk/release/?id=155811); CSDb credits 4-Mat as Code+Graphician+Musician on that release. No dedicated CSDb tool/release entry exists for '4-Mat/TEDplay' as a distributed product, and it is NOT confirmed to be the same thing as the unrelated open-source 'tedplay' PC/Plus-4-emulator project (see quirks).",
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
    "4-Mat is also the author of two other separately-carded personal-routine tags in this project, '4-Mat_tiny_1'/'4-Mat_tiny_2' (knowledge/players/4-mat-tiny-1.md, 4-mat-tiny-2.md) and '4-Mat/MiniSeq' (knowledge/players/4-mat-miniseq.md) — no evidence connects any of these to this tag or to each other; each is its own distinct SIDId signature.",
    "Census of all 4 tagged files (fUJi_Intro_1..4.sid, CSDb SID ids 58039/58043/58042/58041) via CSDb webservice: identical PSID header metadata across all four — LoadAddr=$F000, InitAddr=$F000, PlayAddr=$F003, SIDModel=8580, ClockSpeed=PAL, DataSize=3859 bytes. Header metadata only, NOT a disassembly fact — do not treat as Tier 3 entry/memory data.",
    "All 4 files were used in the same CSDb release, 'fUJi' (C64 Music Collection, csdb.dk/release/?id=155811, by group Orb, released 2017-04-28, rating 9.86). CSDb credits for that release: Ultra (Text, Code), 4-Mat (Code, Graphician, Musician), Mafiosino (Loader). No separate CSDb release exists for '4-Mat/TEDplay' as a distributed tool/driver — csdb_release is left null deliberately, not merely unresearched: id 155811 is the demo the tunes were used IN, not a release of the player itself (per this project's csdb_id-namespace landmine, documented in CLAUDE.md).",
    "A follow-up websearch pass (2026-07-31) targeting csdb.dk, Lemon64, and Forum64 explicitly for '4-Mat' + 'TEDplay' found no page connecting the two beyond what was already ruled out (the unrelated open-source tedplay project) — no new lineage or naming evidence surfaced."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for '4-Mat/TEDplay': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "GitHub, calmopyrin/tedplay ('tedplay is media player based on a stripped down Commodore plus/4 emulator...') — checked and ruled out as unrelated: https://github.com/calmopyrin/tedplay",
    "ChipMusic.org forum, \"4mat's WIP c64 projects (AY/TED/ATARI/REMIX/FM+SID MUSIC)\" — title/existence only, page content not retrievable (403): https://chipmusic.org/forums/topic/14027/4mats-wip-c64-projects-aytedatariremixfmsid-music/",
    "Local dataset: 4 files tagged '4-Mat/TEDplay', all by 4-Mat (Matt Simmonds) — data/composers/4-mat.json",
    "CSDb webservice, type=sid, ids 58039/58041/58042/58043 (all 4 tagged files, full census) — each entry's own Released field: 'https://csdb.dk/sid/?id=58039' (fUJi Intro 1), 'https://csdb.dk/sid/?id=58043' (fUJi Intro 2), 'https://csdb.dk/sid/?id=58042' (fUJi Intro 3), 'https://csdb.dk/sid/?id=58041' (fUJi Intro 4)",
    "CSDb release page for 'fUJi': https://csdb.dk/release/?id=155811 (Orb, C64 Music Collection, 2017-04-28) — confirms UsedIn linkage and credits (4-Mat: Code/Graphician/Musician)",
    "Sibling cards by the same author: knowledge/players/4-mat-tiny-1.md, 4-mat-tiny-2.md, 4-mat-miniseq.md"
  ]
}
```

## Overview

`4-Mat/TEDplay` is a raw Player-ID tag for a personal, built-in replay
routine used exclusively by **Matt Simmonds**, handle **4-Mat**, a
long-running UK SID composer. SIDId has no entry for the tag, and the local
dataset's own `player_type` classification for all 4 files is "Normal
built-in" (i.e. an unrecognized/unnamed driver, not a catalogued signature).
It is explicitly NOT the same thing as the unrelated open-source PC
"tedplay" project (a Plus/4-emulator-based media player). All 4 tagged files
(`fUJi_Intro_1`–`4.sid`) are 4-Mat's own music for Orb's 2017 demoscene
release "fUJi" (CSDb release id 155811, 2017-04-28), where CSDb credits him
as Code, Graphician, and Musician alongside Ultra (Text/Code) and Mafiosino
(Loader).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) do not confuse this tag with the
unrelated open-source `tedplay` PC project — checked and ruled out; (2) the
TED-chip-exploration context is circumstantial, not a confirmed explanation
of the routine; (3) usage is 100% by the composer himself, and this is one of
several distinct, uncorrelated personal-routine tags by the same author
already carded separately; (4) `csdb_release` is deliberately left null even
though a real CSDb release (155811, "fUJi") was found and censused — that
release is what the tunes were USED IN, not a release of the player/tool
itself, so populating the field from it would misuse the `csdb_release`
namespace (see this project's CLAUDE.md landmine on `csdb_id` namespaces).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/4-mat.json`, `data/sidid.json`), a full census of all 4
tagged files' PSID headers and `Released` fields via the CSDb webservice
(`scripts/lib/csdb-client.js`, `type=sid`), and web research to rule out a
name collision. `status: stub` — no runtime fact has been confirmed by
disassembly or trace; the CSDb data fills identity/provenance (Tier 1/2)
only, not Tier 3.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb webservice
lookups for all 4 tagged SID entries and the "fUJi" release, the unrelated
`tedplay` GitHub project (ruled out), a ChipMusic.org forum thread title, and
the local composer aggregation.

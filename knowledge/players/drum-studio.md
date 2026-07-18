# Drum Studio

```json
{
  "id": "drum-studio",
  "name": "Drum Studio",
  "aliases": ["DrumStudio"],
  "authors": ["Mark Wilson"],
  "released": "1989-1990, Players Software (per SIDId); the CSDb page cross-referenced by SIDId's reference is a 1990 crack by the 'Legend' group, which quotes a user comment giving '(c) 1989-1990 Mark Wilson' — see quirks",
  "status": "stub",
  "platform": "Native C64 drum-programming/music application, per SIDId's name 'Drum Studio' and CSDb's description as a music/drum application.",
  "csdb_release": 59864,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId gives name 'Drum Studio', author 'Mark Wilson', released '1990 Players Software', reference CSDb release 59864. Fetching that CSDb page directly shows it is actually a 'C64 Crack' page (group: Legend, cracker: TMBC) — i.e. the reference points at a crack of the original release, not the original release itself; the page's own user comments note the software carries the copyright string '(c) 1989-1990 Mark Wilson', which is consistent with SIDId's attribution.",
    "POSSIBLE (not confirmed) SAME-PERSON LEAD: this project already has a card for a DIFFERENT Player-ID tag, 'Mark_Wilson' (knowledge/players/mark-wilson.md), covering a confirmed Scottish coder+musician (CSDb scener id 5989) active 1987-1990, with a traced sample file. The name, active years (1987-1990 there vs. 1989-1990 copyright here), and nationality context (UK-scene) all plausibly line up with this being the SAME Mark Wilson — but no CSDb scener page or other source directly cross-references 'Drum Studio' to scener id 5989 specifically, so this is recorded as a lead only. No `edges` entry is added (edges in this KB describe code/routine lineage between players, not composer identity), and the two cards are kept separate per this project's evidence rule.",
    "Only 1 locally-tagged file ('Volfied', composer credited as 'Mark Wilson' in this project's dataset) — too small a sample for concentration analysis, but consistent with either reading (a personal tool used once, or a real released tool that happens to have only 1 file surviving in this collection)."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['DrumStudio'])",
    "CSDb release id 59864 ('Drum Studio', C64 Crack, group Legend, cracker TMBC, user comment quoting '(c) 1989-1990 Mark Wilson'): https://csdb.dk/release/?id=59864",
    "Sibling card, same author name, different (already-carded, confirmed-distinct-person-pending) tag: knowledge/players/mark-wilson.md",
    "Local dataset: 1 file tagged DrumStudio ('Volfied'), composer Mark Wilson — data/composers/*.json aggregation"
  ]
}
```

## Overview

`DrumStudio` is SIDId's tag for **Drum Studio**, a native C64 drum/music
application credited to **Mark Wilson**, released via Players Software
around 1989-1990. The CSDb release SIDId references is actually a crack
page (group Legend), whose own user comments corroborate the "(c)
1989-1990 Mark Wilson" copyright string. This project already has a
separate card for a "Mark_Wilson" Player-ID tag (a confirmed Scottish
coder+musician, CSDb scener id 5989) — the names, dates, and UK-scene
context are plausibly the same person, but no source directly cross-links
the two, so they are kept as separate cards with no asserted `edges`
relationship.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's reference resolves to a
crack page, not the original release, but its comments corroborate the
claimed author/date; (2) a plausible-but-unconfirmed same-person link to
the existing `mark-wilson.md` card — explicitly not merged or edged without
direct evidence; (3) only 1 local file.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. If this does turn out to be the same Mark Wilson as
`mark-wilson.md`, that card's traced sample (Augie Doggie and Doggie Daddy,
load $9866/init $a296/play $a293) would be a natural comparison point for a
future disassembly of a `DrumStudio`-tagged file.

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, one
CSDb release page, and cross-reference against the sibling card.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 59864, the sibling
mark-wilson.md card, and the local composer aggregation.

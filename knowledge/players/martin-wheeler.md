# Martin_Wheeler

```json
{
  "id": "martin-wheeler",
  "name": "Martin_Wheeler",
  "aliases": ["Martin_Wheeler"],
  "authors": ["Martin Wheeler"],
  "released": "1987, Virgin Games — census of both tagged files: CSDb SID entries #1114 (Action Force) and #1794 (Rebel) each carry their own Released field '1987 Virgin Games' (not a UsedIn/title-year read). No separate tool/driver release exists; this is the game soundtracks' own release year, not an editor version date.",
  "status": "stub",
  "platform": "Native C64, in-house game-audio routine embedded per-title — not a released standalone editor. Confirmed: CSDb search for 'Martin Wheeler' returns only the scener profile and 3 SID entries, no release of type music editor/tool (https://csdb.dk/search/?search=Martin+Wheeler); his CSDb scener credits list him solely under FreelanceFunction 'Musician', never coder/programmer, across all releases 1987-2011 (https://csdb.dk/scener/?id=24189)",
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
    "No sidid.nfo entry exists for this tag (checked data/sidid.json byTag — absent). The tag name matches the composer's own name exactly, a personal-routine naming pattern seen elsewhere in this batch.",
    "100% single-composer concentration: both locally-tagged files ('Action Force', 'Rebel') belong to Martin Wheeler alone (data/composers/martin-wheeler.json). HVSC records him as a 'PRO' composer affiliated with Virgin Games, England, active from 1987.",
    "Consistent with an in-house composing/playback routine embedded directly in his own Virgin Games soundtracks rather than a distributed editor — no CSDb tool/release entry was found (search confirmed empty).",
    "A third file by the same composer, 'Falcon - The Renegade Lord' (CSDb SID #1383), is tagged player Dave_Lee, not Martin_Wheeler — so his output is not uniformly under this player tag; only 2 of his 3 catalogued tunes use it.",
    "PSID header metadata (not disassembled, informational only): Action Force load/init $1900/init $1900/play $1903, SIDModel 6581, PAL, 895 bytes; Rebel load/init $1200/play $1203, SIDModel 6581, clock unknown, 922 bytes — via CSDb webservice type=sid, ids 1114 and 1794."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Martin_Wheeler' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged Martin_Wheeler, both by composer 'Martin Wheeler' — data/composers/martin-wheeler.json; see knowledge/COVERAGE.md",
    "HVSC composer profile: Martin Wheeler, England, affiliation Virgin Games, active 1987 — data/composers/martin-wheeler.json",
    "CSDb webservice, type=sid, id=1114 (Action Force): Released '1987 Virgin Games' — https://csdb.dk/sid/?id=1114",
    "CSDb webservice, type=sid, id=1794 (Rebel): Released '1987 Virgin Games' — https://csdb.dk/sid/?id=1794",
    "CSDb site search 'Martin Wheeler': only scener profile + 3 SID entries, no tool/editor release — https://csdb.dk/search/?search=Martin+Wheeler",
    "CSDb webservice, type=scener, id=24189 (Martin Wheeler): FreelanceFunction 'Musician' on every credit, 1987-2011, no coder/tool credit — https://csdb.dk/scener/?id=24189",
    "Lemon64 forum search attempted for a driver/routine credit; blocked by anonymous-search permission restriction, not completed — https://www.lemon64.com/forum/"
  ]
}
```

## Overview

Martin_Wheeler is a SIDId Player-ID tag with no `sidid.nfo` entry of its
own (checked, absent). It matches the name of **Martin Wheeler**, an HVSC
"PRO" composer affiliated with **Virgin Games** (England, active from
1987). Both locally-tagged files ("Action Force", "Rebel") are by him
alone — a full census of both tagged files — consistent with an in-house
composing routine embedded in his own game soundtracks rather than a
published, titled tool. Both files' own CSDb `Released` field reads
"1987 Virgin Games" (not a range, not a title-year guess), so `released`
is now recorded as a real, cited fact rather than TODO. A CSDb site
search for "Martin Wheeler" turns up only his scener profile and the 3
SID entries under his authorship (2 tagged with this player, 1 tagged
`Dave_Lee`) — no music-editor/tool release — and his CSDb credit list
shows `FreelanceFunction: Musician` on every entry from 1987 to 2011,
never coder/programmer. That combination (no tool page, musician-only
role, 2-file personal use) is the evidence for `platform` now describing
this as a native, in-house, per-title routine rather than a distributed
editor.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for this
tag; (2) tag name is a direct match to the composer's own name — a
personal-routine pattern; (3) 100% single-composer, 2-file usage census
(a 3rd Martin Wheeler tune, "Falcon", is tagged `Dave_Lee` instead); (4)
PSID header addresses differ between the two files ($1900/$1900/$1903 vs
$1200/$1200/$1203) — informational only, not evidence of a shared code
routine.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/martin-wheeler.json`,
`data/sidid.json` (checked, absent), and CSDb webservice queries for both
tagged SID entries plus the scener profile. `status: stub` — Tier 1+2
only, no disassembly performed.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent), the local
composer aggregation/HVSC profile for Martin Wheeler, CSDb webservice
`type=sid` records for both tagged files, a CSDb site search confirming
no tool/editor entry, and the CSDb scener credit list. A Lemon64 forum
search was attempted but blocked by an anonymous-search restriction —
not completed, and not needed given the CSDb evidence already gathered.

# Howard Boles (in-game music routine)

```json
{
  "id": "howard-boles",
  "name": "Howard Boles (in-game music routine)",
  "aliases": ["?Howard_Boles"],
  "authors": ["Howard Boles"],
  "released": "1984-1985 (Telarium/Windham Classics text-adventure games)",
  "status": "stub",
  "platform": "Native C64, hand-written in-game sound routine embedded per-game — not a standalone editor/tracker/tool. No CSDb tool release, no SIDId entry; the raw Player-ID tag carries a leading '?', SIDId's convention for an unconfirmed/inferred identification (the tool only knows the routine is distinct and associates it with this composer's files, not what it actually is).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not fixed — differs per game as ripped into HVSC. CSDb SID-entry data (not a disassembly) shows Amazon load/init at $7700 (https://csdb.dk/sid/?id=41181) vs Dragonworld at $5E00 (https://csdb.dk/sid/?id=41177), consistent with a routine reassembled/relocated per title rather than a shared fixed-address engine — but this has not been confirmed by disassembly, so treat as an observation, not a proven fact about the routine's structure.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO as a general fact — per-file only, read from PSID headers via CSDb: Amazon $7700, Dragonworld $5E00 (see citations above). No A/X/Y calling convention documented.",
    "play": "TODO as a general fact — per-file only: Amazon $7703, Dragonworld $5E03 (CSDb SID entries). Call rate not documented."
  },
  "speed": "TODO: not documented (no disassembly)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly performed",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "100% single-composer tag: all 8 files in this project's dataset tagged '?Howard_Boles' belong to the composer Howard Boles (data/composers/howard-boles.json) — a textbook 'personal/in-house routine' case per the composer-concentration heuristic, not a widely-published tool.",
    "The 8 tagged files match exactly the 8 Commodore 64 games Lemon64 credits to Howard Boles: Amazon (1984), Dragonworld (1984), Fahrenheit 451 (1984), Rendezvous with Rama (1984), Nine Princes in Amber (1985), Perry Mason: The Case of the Mandarin Murder (1985) — all Telarium — plus Treasure Island (1985) and The Wizard of Oz (1985), published by Windham Classics (Telarium's sister imprint, both under Spinnaker Software). All are literary text/graphic adventures. Source: https://www.lemon64.com/games/list.php?list_individual=howard-boles",
    "Load/init addresses differ between titles (Amazon $7700 vs Dragonworld $5E00, per CSDb SID entries) — the routine is reassembled/relocated per game rather than shipping as a fixed-address shared engine, though whether the underlying code is identical across titles has not been checked (no disassembly).",
    "No SIDId (sidid.nfo) entry and no CSDb tool/release page exists for this as a named player — it is only visible as a Player-ID fingerprint distinct from other known players, hence the leading '?' in the raw tag."
  ],
  "sources": [
    "Local dataset: data/composers/howard-boles.json — 8 files, all authored by Howard Boles, raw player tag '?Howard_Boles' (see knowledge/COVERAGE.md rank #26, 8 files)",
    "CSDb scener profile (function: Musician): https://csdb.dk/scener/?id=14742",
    "CSDb SID entry, Amazon (load/init $7700, play $7703, 16 subtunes): https://csdb.dk/sid/?id=41181",
    "CSDb SID entry, Dragonworld (load/init $5E00, play $5E03, 38 subtunes): https://csdb.dk/sid/?id=41177",
    "Lemon64 game list for Howard Boles (8 C64 titles, Telarium/Windham Classics, 1984-1985): https://www.lemon64.com/games/list.php?list_individual=howard-boles",
    "No sidid.nfo entry found for '?Howard_Boles' (checked data/sidid.json byTag) and no entry in data/players.json — confirms this is an inferred/synthetic player, not a curated one"
  ]
}
```

## Overview

"?Howard_Boles" is a Player-ID fingerprint for the in-game sound routine used
across the eight Commodore 64 text/graphic adventure games Howard Boles wrote
music for at Telarium and its sister imprint Windham Classics (both part of
Spinnaker Software), released 1984-1985: *Amazon*, *Dragonworld*,
*Fahrenheit 451*, *Rendezvous with Rama*, *Nine Princes in Amber*, *Perry
Mason: The Case of the Mandarin Murder*, *Treasure Island*, and *The Wizard of
Oz*. Every file in this project's dataset tagged with this raw tag belongs to
Howard Boles alone — the textbook case of a personal, in-house game-music
routine rather than a published, independently-distributed tool. It has no
CSDb tool/release page and no SIDId (`sidid.nfo`) entry, which is why the raw
tag carries SIDId's "unconfirmed identification" `?` prefix; it exists only as
a signature Player-ID recognizes as distinct.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a 100%
single-composer tag (a personal routine, not a tool), the file set maps
exactly onto Howard Boles's known Telarium/Windham Classics game
discography, and the (PSID-header-derived, CSDb-sourced) load/init addresses
differ per game — so even the loosest "where does it live in memory" fact is
per-file, not a property of a shared engine, absent an actual disassembly.

## Disassembly notes

None performed (out of scope for this pass). A future pass could disassemble
one or more of the eight `.sid` files (init/play addresses are known per-file
from CSDb, see `sources`) and trace them through `sidm2-siddump` to establish
whether the routine is truly identical code reused across titles or a
per-game rewrite — that would be the only way to fill any Tier 3 field here
honestly.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts (composer,
game discography, per-file load/init addresses as observed on CSDb, the
absence of any SIDId or CSDb tool-release entry) are confirmed, each cited
above. No memory map, zero-page usage, data format, or effect encoding is
known; all are left `TODO` rather than guessed.

## Sources

See the `sources` array — the local dataset (`data/composers/howard-boles.json`,
`knowledge/COVERAGE.md`), Howard Boles's CSDb scener profile, two CSDb SID
entries used only for their PSID-header load/init addresses, and Lemon64's
game list confirming the discography matches the tagged files exactly.

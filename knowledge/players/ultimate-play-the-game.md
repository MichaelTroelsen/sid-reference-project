# Ultimate (Dave Thomas / Ultimate Play the Game)

```json
{
  "id": "ultimate-play-the-game",
  "name": "Ultimate (Dave Thomas / Ultimate Play the Game)",
  "aliases": ["Ultimate"],
  "authors": ["Dave Thomas"],
  "released": "1984-1985 (per-file CSDb SID 'Released' field, census of all 5 tagged files: The Staff of Karnath 1984, Blackwyche/Dragon Skulle/Entombed/Outlaws 1985 — https://csdb.dk/sid/?id=1904, 1176, 1342, 1369, 1715). Not a tool-release date: this is each game's own release year, since no standalone editor/tool release exists under this name.",
  "status": "stub",
  "platform": "Native C64, in-house per-title music routine embedded in Ultimate Play the Game's own game conversions, not a distributed standalone editor/tool. Evidence: all 5 tagged SIDs carry a distinct Load/Init/Play address (e.g. Blackwyche $27ec/$2800/$27ec vs Entombed $0fe0/$1000/$0fe0 vs Staff of Karnath $2fe0/$3000/$2fe2 — https://csdb.dk/sid/?id=1176, 1369, 1904), i.e. the routine is compiled/relocated per game rather than a fixed shared library; local composer profile also records DeepSID `player_type: \"Normal built-in\"` for all 5 (data/composers/dave-thomas.json). No CSDb tool/release page, GitHub repo, or Codebase64/HVSC article for a driver by this name was found (web search across csdb.dk, Lemon64, general web, 2026-07-31).",
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
    "The tag name matches the publisher, not a person: SIDId's entry for 'Ultimate' gives only an author line 'Dave Thomas <?>' — no NAME/reference/comment (deepsid_dl/sidid.nfo). The local composer profile confirms Dave Thomas's affiliation field is literally 'Ultimate' (data/composers/dave-thomas.json), i.e. Ultimate Play the Game, the UK publisher/developer (Sabreman/Jetpac/Knight Lore-era studio, later Rare).",
    "All 5 locally tagged files are Ultimate Play the Game C64 game titles credited to Dave Thomas: Blackwyche, Dragon Skulle, Entombed, Outlaws, The Staff of Karnath — a full census of the family (not a sample). Consistent with an in-house driver used across the studio's C64 conversions rather than a standalone released editor/tool.",
    "PSID header Load/Init/Play addresses differ per file (header metadata, not disassembly — recorded here, not in the Tier 3 fields): Blackwyche $27ec/$2800/$27ec, Dragon Skulle $47e0/$4800/$47e0, Entombed $0fe0/$1000/$0fe0, Outlaws $9401/$9640/$9c73, Staff of Karnath $2fe0/$3000/$2fe2 (CSDb SID entries, ids 1176/1342/1369/1715/1904). Each game embeds its own relocated copy rather than calling a fixed shared library.",
    "A web search for 'Dave Thomas Ultimate Play the Game C64 sound driver' (general web, csdb.dk, Lemon64) found only that Dave Thomas was a programmer/author for Ultimate and that outsourced 6502 conversion work was common for the company, but turned up NO dedicated technical writeup of a driver/engine by this name, and no CSDb tool/release page or GitHub repo — treat the 'in-house routine' framing as inference from tag/affiliation plus the per-file relocation pattern, not a sourced technical writeup.",
    "`released` here is each game's own CSDb SID 'Released' year, not a tool-release date — there is no standalone editor/tool release to date."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local composer profile confirming affiliation 'Ultimate' and player_type 'Normal built-in': data/composers/dave-thomas.json",
    "Local dataset: 5 files tagged Ultimate, all by Dave Thomas — Blackwyche, Dragon Skulle, Entombed, Outlaws, The Staff of Karnath (full census)",
    "CSDb SID entries (Released field + Load/Init/Play addresses) via scripts/lib/csdb-client.js getSidRelease: https://csdb.dk/sid/?id=1176 https://csdb.dk/sid/?id=1342 https://csdb.dk/sid/?id=1369 https://csdb.dk/sid/?id=1715 https://csdb.dk/sid/?id=1904",
    "data/players.json (DeepSID curated player list) checked — no entry for 'Ultimate' found, confirming no curated tool page exists"
  ]
}
```

## Overview

`Ultimate` is a raw Player-ID tag credited to composer **Dave Thomas**,
whose affiliation is recorded locally as **Ultimate** (Ultimate Play the
Game, the UK publisher/developer). All 5 locally-tagged files — a full
census, not a sample — are Ultimate Play the Game C64 titles (Blackwyche,
Dragon Skulle, Entombed, Outlaws, The Staff of Karnath), each credited to
Dave Thomas as the sole composer. SIDId's entry for the tag has only an
author line, no name/reference/comment, and no curated entry exists in
`data/players.json` — no dedicated CSDb tool/release page or technical
writeup was found for a driver by this name.

Per-file CSDb `Released` fields (all 5 checked directly against CSDb's SID
webservice) give 1984 for The Staff of Karnath and 1985 for the other four
— these are each game's own release year, not a tool-release date, since
no standalone editor was ever released. The PSID header's Load/Init/Play
addresses differ across all 5 files, consistent with a per-title, relocated
in-house routine rather than a fixed shared library — this is the strongest
evidence found for the `platform` framing.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag name is the **publisher**,
not a tool product name; all usage is by one composer across that
publisher's own C64 conversions (a full census of all 5 tagged files); the
PSID header addresses differ per file, which is evidence for (not proof of)
an in-house per-title routine; no independent technical documentation of
the routine itself was found in this pass.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. The PSID Load/Init/Play addresses recorded in
`quirks` are header metadata gathered during the census, not disassembly
facts, and must not be read as Tier 3 confirmation.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/dave-thomas.json`, `data/sidid.json`, `data/players.json`)
plus CSDb's SID webservice (queried directly per-file for all 5 tagged
files, via `scripts/lib/csdb-client.js`) and web searches (general web,
csdb.dk, Lemon64) for provenance context. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, local composer profile, the
local file aggregation (full census), and CSDb SID entries for all 5 files.

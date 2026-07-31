# Bappalander/Spacelab1

```json
{
  "id": "bappalander-spacelab1",
  "name": "Bappalander/Spacelab1",
  "aliases": ["Bappalander/Spacelab1"],
  "authors": ["Ove Kjell Gustav Oldberg (Bappalander)"],
  "released": "No dedicated player-tool release date exists (no CSDb tool/release entry under this name — see platform note). Earliest attested tune date, from CSDb's per-file `Released` field (not a player release date): 1991, group Light — 4 of the 5 tagged files (A Bit Odd, Brutality 5, FX, Run to You, csdb.dk/sid ids 4473-4476) all read \"1991 Light\"; the 5th (Last Traktor III intro, id 4477) reads \"1992 Horizon\". Full census of all 5 tagged files via CSDb webservice.",
  "status": "stub",
  "platform": "Native C64 replay routine embedded per-tune (inherent to the SID/PSID format itself, not a separate claim). No dedicated CSDb tool/release/editor entry found under 'Bappalander/Spacelab1' or 'Spacelab', and 'Spacelab1' does not match any of Bappalander's known group memberships (Light/Horizon/Fairlight) — unconfirmed whether it names a tool at all. PSID header Load/Init addresses differ across the 5 tagged files (0x9000 for 3 of them, 0x1000 for one, 0xE000 for one — see quirks), consistent with code assembled inline per tune rather than a fixed-address reusable driver distributed as a tool; this is header metadata from CSDb's webservice, not a disassembly finding.",
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
    "SIDId's sidid.nfo has NO entry for 'Bappalander/Spacelab1' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "'Spacelab1' does NOT match any of Bappalander's own CSDb group memberships (Light 1991-1993, Horizon 1993, Fairlight Jul 1993-Jan 1994, per his CSDb scener page) — no group, demo, or game called 'Spacelab' or 'Spacelab1' was found associated with him during this research pass. Bappalander does have several CSDb 'Tool' category credits (Noice Driver V2.5p/V3.8c, Noter Pack 2, SEQ Shower, a $FFE4/$DC00/$DC01-Checker, Level Editor V1.3) but CSDb lists him on all of these for MUSIC, not code — so even those don't explain a personally-coded player. The meaning of 'Spacelab1' in the tag name is unresolved.",
    "Single-composer concentration: all 5 locally-tagged files are by Bappalander himself (Ove Oldberg, Sweden, b. 1970-08-31, CSDb scener 2098) — consistent with a personal/experimental routine rather than a released, titled tool.",
    "Full census (all 5 tagged files, via csdb.dk webservice type=sid): A Bit Odd (id 4474, LoadAddr 0x9000), Brutality 5 (id 4476, LoadAddr 0x9000), FX (id 4475, LoadAddr 0x1000), Run to You (id 4473, LoadAddr 0xE000) all carry CSDb's own `Released: 1991 Light`; Last Traktor III (intro) (id 4477, LoadAddr 0x9000) carries `Released: 1992 Horizon`. These are per-tune composition/first-use dates from CSDb, not a player/tool release date — no such date exists for this tag.",
    "PSID Load/Init addresses vary across the 5 files (0x9000 x3, 0x1000 x1, 0xE000 x1) with Play always Init+24 ($18) — header metadata only (CSDb webservice), not a disassembly finding, but consistent with per-tune inline assembly rather than a fixed reusable driver.",
    "No dedicated CSDb tool/release page, Codebase64 article, or Lemon64/Forum64 thread found for 'Bappalander/Spacelab1' or 'Spacelab' during this research pass (2026-07-31) — checked CSDb webservice, docsnyderspage.com's Bappalander scener page, and web search targeted at lemon64.com/forum64.de specifically."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Bappalander/Spacelab1': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Bappalander / Ove Oldberg (groups Light/Horizon/Fairlight, Sweden, tool credits all for music not code): https://csdb.dk/scener/?id=2098",
    "CSDb webservice, type=sid, ids 4473-4477 (per-tune Released/LoadAddr/InitAddr/PlayAddr, full census of all 5 tagged files): https://csdb.dk/webservice/?type=sid&id=4473 (and 4474-4477)",
    "docsnyderspage.com Bappalander scener page, checked for 'Spacelab'/tool credits, none found: https://www.docsnyderspage.com/sceners/b/602e1450047c013dd1e60050562ead2a/bappalander",
    "Local dataset: 5 files tagged 'Bappalander/Spacelab1', all by Bappalander — data/composers/bappalander.json",
    "data/composers/bappalander.json (HVSC profile: full name Ove Kjell Gustav Oldberg, Sweden, b. 1970-08-31, CSDb scener 2098)"
  ]
}
```

## Overview

`Bappalander/Spacelab1` is a raw Player-ID tag for a replay routine used
exclusively by **Ove Oldberg**, handle **Bappalander**, a Swedish scener
(member of Light, Horizon, and Fairlight between 1991-1994). All 5
locally-tagged files are his own. SIDId has no entry for the tag at all, and
the "Spacelab1" element of the name does not match any known group, demo, or
game associated with him — its meaning is unresolved. Treated here as a
likely personal/experimental routine rather than a released tool. A full
census of the 5 tagged files (CSDb webservice) shows 4 attested "1991 Light"
and 1 "1992 Horizon" (per-tune dates, not a tool release date — see the
`released` field), and PSID Load/Init addresses that differ per file,
consistent with a routine hand-assembled per tune rather than a distributed
fixed-address driver. No dedicated tool page, source, or forum discussion of
"Spacelab" turned up on CSDb, Codebase64, docsnyderspage.com, or targeted
searches of Lemon64/Forum64.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId has no entry for this tag; the
"Spacelab1" name element does not correspond to any of Bappalander's known
CSDb affiliations; usage is 100% by the composer himself.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/bappalander.json`, `data/sidid.json`) plus a CSDb scener
page. `status: stub` — no runtime fact has been confirmed by disassembly or
trace.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the CSDb scener
page for Bappalander, and the local composer aggregation.

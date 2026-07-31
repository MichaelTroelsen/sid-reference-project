# MrWarp_Digi

```json
{
  "id": "mrwarp-digi",
  "name": "MrWarp_Digi",
  "aliases": ["MrWarp_Digi"],
  "authors": ["Markus Peter (Mr. Warp)"],
  "released": "1993 (earliest attested; census of all 3 tagged files' own CSDb `Released` fields: 'Enter Sandman' and 'We Will Rock You' both read '1993 Equinoxe', 'Bladerunner Theme' reads '199? Equinoxe' — uncertain month/day but same group/era, so not earlier). Consistent with Equinoxe (EQX) being founded October 1993 by wARp (Mr. Warp) per the group's own CSDb trivia, though CSDb's own 'Fuel' demo release date (1993-07-08, which used two of these tracks) predates that founding claim — an internal CSDb inconsistency, left unresolved, that doesn't affect the year.",
  "status": "stub",
  "platform": "No dedicated C64 tool/editor — a personal digi routine embedded directly in Mr. Warp's own music files. Evidence: all 3 census files carry `player_type: 'Normal built-in'` (data/composers/warp-mr.json), the author's CSDb freelance functions are 'Coder, Cracker' (not 'Musician') per csdb.dk webservice type=scener id=1089, and none of Equinoxe's 113 CSDb-listed releases (type=group id=147) is a standalone player/tool named MrWarp_Digi or similar. SIDId's own comment additionally speculates it derives from C64_Speech_System (see quirks).",
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
    "SIDId's own comment field for this tag reads 'Probably derived from C64_Speech_System' (data/sidid.json byTag['MrWarp_Digi']) — a speculative, hedged claim by the SIDId author, not a sourced derivation (no header/manual states it). The already-carded [[c64-speech-system]] card independently notes this exact claim (and the same claim on two other, still-uncarded tags, '(Mahoney_Digi)' and 'TGS_Digi') and DELIBERATELY declines to assert a `derives_from` graph edge from it, per this project's 'no similar-names/speculation as evidence' rule. This card follows the same precedent: the possible lineage is recorded here as a citation, not as an `edges` entry.",
    "100% single-composer concentration: all 3 locally-tagged files ('Bladerunner Theme', 'Enter Sandman', 'We Will Rock You' — all cover/tribute-style titles) belong to composer 'warp-mr' (Markus Peter) alone (data/composers/warp-mr.json).",
    "Markus Peter (Mr. Warp) is a German scener/composer (data/composers/warp-mr.json, country Germany, csdb_id 1089); no CSDb tool/release page for a standalone 'MrWarp_Digi' editor was found (checked all 113 releases credited to his group Equinoxe via csdb.dk webservice type=group id=147).",
    "Census of all 3 tagged files' CSDb `sid` entries (type=sid, ids 41595/41584/44154 via csdb.dk webservice): all 3 carry `player_type: 'Normal built-in'`, i.e. an embedded/inline routine rather than a shared standalone driver — consistent with a personal, non-distributed digi trick rather than a published tool.",
    "Mr. Warp co-founded the scene group Equinoxe (EQX) in October 1993 together with Traitor, per Equinoxe's own CSDb group trivia (csdb.dk webservice type=group id=147) — the year matches the earliest attested MrWarp_Digi usage (1993) in the 3 tagged files."
  ],
  "sources": [
    "SIDId sidid.nfo (author + 'Probably derived from C64_Speech_System' comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['MrWarp_Digi']",
    "knowledge/players/c64-speech-system.md — independently records the same 'probably derived' claim and its precedent of not asserting a formal edge from it",
    "Local dataset: 3 files tagged MrWarp_Digi, all by composer 'warp-mr' — data/composers/warp-mr.json; see knowledge/COVERAGE.md rank 84",
    "CSDb scener profile, Markus Peter / Mr. Warp: https://csdb.dk/scener/?id=1089 (webservice type=scener id=1089: FreelanceFunctions Coder, Cracker; MemberOf Viper, Equinoxe)",
    "CSDb sid entries (webservice type=sid): id=41595 'Bladerunner Theme' (Released '199? Equinoxe'), id=41584 'Enter Sandman' (Released '1993 Equinoxe'), id=44154 'We Will Rock You' (Released '1993 Equinoxe') — https://csdb.dk/sid/?id=41595, https://csdb.dk/sid/?id=41584, https://csdb.dk/sid/?id=44154",
    "CSDb group entry, Equinoxe (EQX): https://csdb.dk/group/?id=147 (webservice type=group id=147; trivia states founding October 1993 by wARp and Traitor; 113 releases checked, none a standalone MrWarp_Digi tool)"
  ]
}
```

## Overview

MrWarp_Digi is a SIDId-fingerprinted digi routine attributed to **Markus
Peter**, handle **Mr. Warp**, a German coder/cracker/scener (CSDb freelance
functions: Coder, Cracker — not Musician). SIDId's own comment field
speculates it is "probably derived from C64_Speech_System" (the 1986 64'er
type-in already carded at [[c64-speech-system]]) — but that card itself
treats the same claim (repeated across three separate tags) as unconfirmed
SIDId speculation, not a sourced derivation, and deliberately does not assert
a graph edge from it. This card follows that same precedent. Locally the tag
appears in only 3 files, all by Mr. Warp himself — cover/tribute titles
("Bladerunner Theme," "Enter Sandman," "We Will Rock You") — consistent with
a personal routine. All 3 files (a full census) are marked `player_type:
"Normal built-in"` and carry a 1993 CSDb `Released` date credited to
Equinoxe, the group Mr. Warp co-founded in October 1993; no standalone
MrWarp_Digi tool/editor release exists among Equinoxe's 113 CSDb releases,
supporting the reading that this is an embedded personal routine rather than
a distributed tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the "probably derived from
C64_Speech_System" claim is SIDId's own hedge, not evidence, and is recorded
as a citation only, following the precedent already set on
[[c64-speech-system]]'s own card; 100% single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/warp-mr.json`, SIDId, and the
sibling `c64-speech-system` card's prior research. `status: stub`.

## Sources

See the `sources` array — SIDId, the sibling C64 Speech System card, the
local composer aggregation, and CSDb.

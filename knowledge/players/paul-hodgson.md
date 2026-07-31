# Paul Hodgson's player (?Paul_Hodgson)

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "paul-hodgson",
  "name": "Paul Hodgson's player",
  "aliases": ["?Paul_Hodgson"],
  "authors": ["Paul Hodgson (Taskset)"],
  "released": "TODO: no single dated release — an in-game routine, not a distributed tool. All 8 tagged files censused via CSDb webservice (type=sid), per-file 'Released' fields: Super Pipeline 1983 Taskset (csdb.dk/sid/?id=14247), Jammin' 1983 Taskset (id=13317), Bozo's Night Out 1984 Taskset (id=14243), Gyropod 1984 Taskset (id=14245), Poster Paster 1984 Taskset (id=14246), Seaside Special 1984 Taskset (id=38693), Super Pipeline II 1985 Taskset (id=14248), Uchi Mata 1986 Martech (id=14244, publisher change from Taskset). Confirmed range 1983-1986, publisher Taskset except the last (Martech).",
  "status": "stub",
  "platform": "Native C64 in-game music routine, not a distributed standalone tracker/editor or player tool. Embedded directly inside Taskset's own game binaries; each .sid in the collection was ripped from a different game.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per file — NOT a fixed/relocatable player (see quirks: Super Pipeline II loads at $2000, Gyropod at $081A, Bozo's Night Out at $AB00)",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: per-file (varies by game — e.g. Super Pipeline II $2023, Gyropod $083E, Bozo's Night Out $B980, per CSDb PSID header data)",
    "play": "TODO: per-file (e.g. Super Pipeline II $30B6, Gyropod $081A, Bozo's Night Out $AB03)"
  },
  "speed": "TODO: no disassembly performed",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled. Only the Player-ID detection signature is known: `C9 00 F0 17 18 AD ?? ?? 6A 29 7F 8D` (12 bytes, 2 wildcard bytes) from WilfredC64/player-id and cadaver/sidid's sidid.cfg.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The leading '?' in the tag is DeepSID/SIDId's own low-confidence marker: the Player-ID signature is a short 12-byte pattern with 2 wildcard bytes, not a long/unique fingerprint, so matches are flagged uncertain. Source: WilfredC64/player-id config/sidid.cfg (https://github.com/WilfredC64/player-id/blob/master/config/sidid.cfg), same pattern also present in the upstream cadaver/sidid.cfg.",
    "Unlike most SIDId-tagged entries, this tag has NO metadata card in cadaver/sidid's sidid.nfo (no author/released/reference fields) — checked https://github.com/cadaver/sidid/blob/master/sidid.nfo directly, no 'Hodgson' match. That's why data/sidid.json's byTag has no entry for it either: DeepSID only knows the detection signature and a hand-written display name ('Paul Hodgson's player', from Chordian/deepsid php/pretty_player_names.php), not full provenance.",
    "Despite being named for one composer, 2 of the 8 tagged files in this collection are credited to a DIFFERENT composer, Tony Gibson (Jammin', Seaside_Special) — both, like Hodgson, credited to Taskset (CSDb scener profiles: Hodgson id 17488, Gibson id 17486; neither page states a country — 'England' was an earlier unverified assumption, corrected). Consistent with a shared in-house Taskset routine rather than something used by Hodgson alone.",
    "Not a portable/relocatable player: load, init, and play addresses vary wildly file-to-file, confirmed from CSDb's per-file PSID header data — Super Pipeline II (load $2000 / init $2023 / play $30B6, https://csdb.dk/sid/?id=14248), Gyropod (load $081A / init $083E / play $081A, https://csdb.dk/sid/?id=14245), Bozo's Night Out (load $AB00 / init $B980 / play $AB03, https://csdb.dk/sid/?id=14243). This is the signature of an in-game routine assembled wherever each individual game happened to place it, not a standalone tool with a fixed footprint.",
    "Composer concentration: only 2 composers across 8 files, both Taskset staff — a textbook 'personal/small-scene routine', not a published tool (per this project's own composer-concentration heuristic in CLAUDE.md).",
    "Full census of all 8 tagged files (CSDb webservice, type=sid, 2026-07-31) confirms a 1983-1986 date range and Taskset as publisher for 7 of 8 — the exception is Uchi Mata (1986), published by Martech rather than Taskset, the only file in the set NOT credited to Hodgson's home publisher. Per-file: Super Pipeline 1983, Jammin' 1983, Bozo's Night Out 1984, Gyropod 1984, Poster Paster 1984, Seaside Special 1984, Super Pipeline II 1985, Uchi Mata 1986 (Martech)."
  ],
  "sources": [
    "Player-ID detection signature: https://github.com/WilfredC64/player-id/blob/master/config/sidid.cfg (search 'Paul_Hodgson')",
    "Same signature, upstream project: https://github.com/cadaver/sidid/blob/master/sidid.cfg",
    "No metadata entry (checked, absent): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "DeepSID display-name mapping ('Paul Hodgson's player'): https://github.com/Chordian/deepsid/blob/master/php/pretty_player_names.php",
    "CSDb composer profile, Paul Hodgson (Taskset; page does not state a country): https://csdb.dk/scener/?id=17488",
    "CSDb composer profile, Tony Gibson (Synthia, Taskset; page does not state a country): https://csdb.dk/scener/?id=17486",
    "CSDb SID entries, full census of all 8 tagged files via csdb.dk webservice (type=sid) 2026-07-31: Super Pipeline 1983 Taskset https://csdb.dk/sid/?id=14247, Jammin' 1983 Taskset https://csdb.dk/sid/?id=13317, Bozo's Night Out 1984 Taskset https://csdb.dk/sid/?id=14243, Gyropod 1984 Taskset https://csdb.dk/sid/?id=14245, Poster Paster 1984 Taskset https://csdb.dk/sid/?id=14246, Seaside Special 1984 Taskset https://csdb.dk/sid/?id=38693, Super Pipeline II 1985 Taskset https://csdb.dk/sid/?id=14248, Uchi Mata 1986 Martech https://csdb.dk/sid/?id=14244",
    "Local dataset: 8 files / 2 composers (Paul Hodgson: 6, Tony Gibson: 2) — knowledge/COVERAGE.md, data/composers/paul-hodgson.json, data/composers/tony-gibson.json"
  ]
}
```

## Overview

"?Paul_Hodgson" is a Player-ID/SIDId detection signature for an in-game music
routine found in several 1983-1986 Taskset C64 games, named after their
composer Paul Hodgson (Taskset; CSDb does not state a country for him). It has 8 tagged files across 2
composers in this project's dataset: 6 by Hodgson himself (Bozo's Night Out,
Gyropod, Poster Paster, Super Pipeline, Super Pipeline II, Uchi Mata) and 2 by
fellow Taskset musician Tony Gibson (Jammin', Seaside Special), suggesting a
routine shared in-house rather than Hodgson's alone. A full census of all 8
files' own CSDb `Released` fields (not a sample) confirms the 1983-1986 range
exactly: earliest is 1983 (Super Pipeline, Jammin'), latest is 1986 (Uchi
Mata) — and Uchi Mata is also the one file published by Martech rather than
Taskset, the outlier in an otherwise single-publisher set. There is no known
standalone release, no source, and no public documentation beyond the
detection signature itself — this is an identity-only stub built entirely from
Tier 1/2 evidence.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a low-confidence
("?"-prefixed) signature match with no SIDId metadata card at all (unlike the
majority of inferred players enriched via SIDId per CLAUDE.md); it is used by
two different composers at the same company; and it is demonstrably not a
fixed/relocatable player — load/init/play addresses differ per game, which is
exactly what you'd expect from an in-game routine hand-placed by each game's
own build rather than a portable tool.

## Disassembly notes

None performed. No public source or prior disassembly was found. A future
pass could disassemble one of the CSDb-hosted .sid files (e.g. Super Pipeline
II, load $2000/init $2023/play $30B6) and trace it through `sidm2-siddump`,
but that would only establish facts about that one game's copy of the
routine — given the address variance already observed, a single disassembly
should not be assumed to generalize to the other 7 files without checking.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(the detection signature, the composer/file list, the address variance across
files), all from cached local data (`data/composers/*.json`,
`data/csdb/paul-hodgson.json`) and public GitHub/CSDb sources. No memory map,
entry point, or data format has been confirmed by disassembly — every Tier 3
field is honestly `TODO`.

## Sources

See the `sources` array — the Player-ID/SIDId detection signature (two repos,
identical pattern), the absence of a SIDId metadata entry (checked directly),
DeepSID's display-name mapping, CSDb composer profiles for both credited
composers, and CSDb per-file PSID header data for the address-variance
finding.

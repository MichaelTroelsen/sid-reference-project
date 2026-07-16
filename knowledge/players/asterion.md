# Asterion Sid-Tracker

```json
{
  "id": "asterion",
  "name": "Asterion Sid-Tracker",
  "aliases": ["Asterion_V1.x"],
  "authors": ["Rafal Kazimierski (Asterion)"],
  "released": "2004 (V1.0: 26 Jan 2004; V1.1: 31 May 2004)",
  "status": "stub",
  "platform": "Native C64 tracker/editor + its own C64 replay routine embedded in exported tunes. No cross-platform component found.",
  "csdb_release": 11576,

  "memory": {
    "load_address": "TODO: no public source/disassembly found",
    "zero_page": "TODO: DeepSID's players.json spec notes \"Sometimes 2 bytes ($FB-$FC)\" — documented by DeepSID, NOT independently verified here via disassembly; do not treat as confirmed",
    "layout": "TODO: no public source/disassembly found"
  },
  "entry": {
    "init": "TODO: no public source/disassembly found",
    "play": "TODO: no public source/disassembly found"
  },
  "speed": "TODO: precise model unconfirmed. DeepSID's players.json lists supported speeds as \"1x, 2x, 4x\" and CPU cost as \"Approx 27-36 rasterlines [SD]\" — documented by DeepSID, not independently verified here.",

  "data_format": {
    "order_list": "TODO: DeepSID's players.json describes track_system as \"Order list with three patterns side by side\" — not independently verified here",
    "patterns": "TODO: DeepSID's players.json states \"127 patterns; each up to 63 rows\" — not independently verified here",
    "instruments": "TODO: DeepSID's players.json states \"31\" instruments, with hard restart \"For each instrument\" — not independently verified here",
    "wavetable": "TODO: DeepSID's players.json notes \"Independent wave/arpeggio tables\" — not independently verified here",
    "pulsetable": "TODO: DeepSID's players.json marks pulse as \"Programmable\" — not independently verified here",
    "filtertable": "TODO: DeepSID's players.json marks filter as \"Programmable\" — not independently verified here"
  },
  "effects": {
    "encoding": "TODO: no public source/disassembly found. DeepSID's players.json says commands are stored as \"Bytes in vertical order list\" and vibrato is supported \"Yes\" — not independently verified here",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "No public source code or disassembly was located for this tool (searched CSDb, GitHub, the author's own site). Treat as closed/undocumented at the runtime level — every memory/entry/format field below is TODO rather than guessed.",
    "The author's own site (http://tinnitus.prv.pl, credited on both CSDb releases as the tool's home) is dead — a Polish free-hosting placeholder page as of this research pass, no archived content about the tracker found.",
    "Two known CSDb releases exist under this SIDId tag family: V1.0 (csdb.dk/release/?id=11576, 26 Jan 2004, credited to Samar Productions and Tinnitus) and V1.1 (csdb.dk/release/?id=13228, 31 May 2004, credited to Tinnitus). SIDId's 'Asterion_V1.x' tag and this card's csdb_release point at the earlier V1.0 release; DeepSID's players.json entry for the tool instead cites csdb_id 13228 (V1.1) — the two sources disagree on which release id represents \"the\" tool, most likely because V1.1 is the refined/canonical version. Not resolved further here.",
    "Composer concentration is a strong 'personal/small-scene routine, not a widely published tool' signal: of 67 files in the local dataset tagged Asterion_V1.x, 52 (78%) are by Asterion himself, 13 by Trompkins, and 2 by Tinnitus (the group account) — all three are members of the Polish group Tinnitus / Samar Productions, the tool's own credited authors/publishers. No use outside that circle was found in this dataset.",
    "DeepSID's players.json carries a fuller technical spec table (instrument count, pattern/order-list shape, speed options, ZP usage note, CPU cost estimate) than SIDId does. These are recorded above as hedged TODOs, attributed to DeepSID, because they are documented by a third party rather than confirmed by a disassembly here — do not treat them as verified facts."
  ],
  "sources": [
    "sidid: Asterion_V1.x (author Rafal Kazimierski (Asterion); released 2004; reference https://csdb.dk/release/?id=11576) — data/sidid.json / github.com/cadaver/sidid sidid.nfo",
    "CSDb release V1.0: https://csdb.dk/release/?id=11576 (\"Asterion Sid-Tracker V1.0\", 26 Jan 2004, Samar Productions + Tinnitus)",
    "CSDb release V1.1: https://csdb.dk/release/?id=13228 (\"Asterion Sid-Tracker V1.1\", 31 May 2004, Tinnitus)",
    "DeepSID players database entry \"Asterion Sid-Tracker v1.x\" (data/players.json, developer Asterion, start_year 2004, csdb_id 13228, site http://tinnitus.prv.pl) — full spec table used above for hedged TODO notes only",
    "CSDb sid entry confirming real name: https://csdb.dk/sid/?id=28523 (\"Caer Aisling\" / Rafal Kazimierski (Asterion) / 2006 HVSC)",
    "Local dataset: 67 files tagged Asterion_V1.x across 3 composers (asterion.json 52, trompkins.json 13, tinnitus.json 2) — see knowledge/COVERAGE.md (rank 10, 67 files)"
  ]
}
```

## Overview

Asterion Sid-Tracker is a native C64 music tracker by Rafal Kazimierski
("Asterion"), a member of the Polish group Tinnitus (also released under
Samar Productions). Two versions are documented on CSDb: V1.0 (26 Jan 2004)
and V1.1 (31 May 2004). It is a small, group-internal tool rather than a
widely-adopted one: in this project's local dataset it accounts for 67 files
across only 3 composers, 78% of them by Asterion himself, with the rest by
his two Tinnitus/Samar Productions groupmates (Trompkins, and the Tinnitus
group account) — the composer-concentration signal described in
`knowledge/EXTRACTION-TEMPLATE.md` for a personal/small-scene routine.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: **no public source or
disassembly exists** for this tool (the author's own site is dead, and no
GitHub/CSDb source archive was found), so this card is identity-and-provenance
only; the **SIDId and DeepSID records disagree on which CSDb release id
represents "the" tool** (V1.0 vs V1.1); and the **composer concentration
(52/67 files by the author himself)** marks this as an internal group tool,
not a broadly published tracker.

## Disassembly notes

None. No source or public disassembly was located during this research pass.
DeepSID's players.json carries a third-party-documented spec table (31
instruments, 127 patterns of up to 63 rows, 1x/2x/4x speeds, ZP usage
"sometimes $FB-$FC", ~27-36 rasterlines CPU cost) which is recorded in the
JSON block as hedged `TODO` notes with attribution — useful context, but not
a substitute for reading an actual disassembly, so `memory`/`entry`/
`data_format`/`effects` remain unconfirmed.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
CSDb releases, composer usage in the local dataset) are confirmed, from the
cached SIDId entry, DeepSID's players.json, and CSDb release pages. All
runtime fields are `TODO` because no source or disassembly exists to found
them on.

## Sources

See the `sources` array — the cached SIDId entry (`Asterion_V1.x`), the two
CSDb release pages (V1.0 id 11576, V1.1 id 13228), DeepSID's players.json
spec entry, a CSDb `.sid` entry confirming the real name, and the local
dataset's 67 tagged files across 3 composers.

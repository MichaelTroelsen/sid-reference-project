# SidWinder

```json
{
  "id": "sidwinder",
  "name": "SidWinder",
  "aliases": ["SidWinder"],
  "authors": ["Balázs Takács (Taki) / Natural Beat"],
  "released": "1999 (V01.22, Natural Beat); V01.23 15 March 2000",
  "status": "stub",
  "platform": "Native C64 tool (runs on real hardware / C64 emulator; no cross-platform PC editor found)",
  "csdb_release": 66494,

  "memory": {
    "load_address": "TODO: $xxxx (no source located; not disassembled)",
    "zero_page": "2 bytes ($FB-$FC) per data/players.json's DeepSID-sourced spec table — not independently verified against a disassembly",
    "layout": "TODO: order list / patterns / table addresses (not disassembled)"
  },
  "entry": {
    "init": "TODO: $xxxx (not disassembled)",
    "play": "TODO: $xxxx"
  },
  "speed": "TODO: not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "NAME COLLISION HAZARD, specific to this project: this 1999 C64 tracker/editor by Taki is unrelated to the modern cross-platform tool also called 'SIDwinder' (Raistlin/Genesis Project, first released 2025, source at https://github.com/RobertTroughton/SIDwinder) — a SID-file disassembler/relocator/visualizer, referenced elsewhere in this repo as `SIDwinder.exe` (see knowledge/players/laxity-newplayer.md's Verification section, and scripts/dev/README.md). Two entirely different programs share one name 26 years apart. Do not conflate them.",
    "License is murky, not 'open-source' by any primary evidence found. A 2011 CSDb release (id 99574, 'SIDwinder V1.23 Enhanced!!' by PCH of KGB'92/Unreal) carries PCH's own comment 'Original code by TAKI / Natural Beat' and a separate commenter (Luca)'s claim: \"I got it's based on TLC/CNS' 'SIDwinder V01.23', released under GPL licence on C64 and Plus/4+SIDcard.\" That GPL claim is second-hand (a forum-style comment, not a license file or header) and the 'TLC/CNS' attribution conflicts with the primary release credits (Taki/Natural Beat) — treat as unverified. No original source archive was found attached to either the V01.22 (csdb 66494) or V01.23 (csdb 101758) release; only compiled .d64 disk images are downloadable there.",
    "Small, concentrated usage: 117 files in this dataset across only 8 composers, none of them a single overwhelming majority — Factor6 leads with 38 (32%), then Luca 25, Taki (the author) 21, Eclipse 19, plus PCH/Puterman/Zapac/Phobos in single digits. Author's own use (21 files, 18%) plus a small circle of scene contacts, not a widely-adopted general-purpose tool — consistent with a native tracker that stayed close to its own scene group (Natural Beat) and testers (Luca of F.I.R.E., credited on the V01.23 release).",
    "Version history per CSDb: V01.22 (1999, Natural Beat, csdb 66494) -> V01.23 (15 Mar 2000, Natural Beat, csdb 101758, music/testing by Luca) -> V1.23 Enhanced!! (17 Apr 2011, PCH of KGB'92/Unreal, csdb 99574, unrelated fork/continuation with a live-piano feature) -> unrelated modern namesake 'SIDwinder V0.2 Preview' (2025, csdb 253271, see name-collision quirk above)."
  ],
  "sources": [
    "sidid:SidWinder (author Balázs Takács (Taki), released '1999 Natural Beat', CSDb release 66494) — data/sidid.json",
    "DeepSID players.json spec entry 'SidWinder' (developer Taki, start_year 1999, end_year 2001, csdb_id 101758, platform 'Native / C64 emulator', zero_pages '2 bytes ($FB-$FC)') — data/players.json",
    "Local dataset: 117 files tagged SidWinder across 8 composers (see knowledge/COVERAGE.md, rank 8)",
    "CSDb release V01.22: https://csdb.dk/release/?id=66494 (Natural Beat, 1999, code+music: Taki; only a .d64 download, no source archive)",
    "CSDb release V01.23: https://csdb.dk/release/?id=101758 (Natural Beat, 15 Mar 2000, code: Taki, music/testing: Luca of F.I.R.E.; only a .d64 download)",
    "CSDb release 'V1.23 Enhanced!!': https://csdb.dk/release/?id=99574 (PCH of KGB'92/Unreal, 17 Apr 2011 — source of the GPL/'TLC-CNS' claim, quoted verbatim in quirks; unverified secondary source)",
    "Unrelated modern namesake for disambiguation: https://csdb.dk/release/?id=253271 and https://github.com/RobertTroughton/SIDwinder"
  ]
}
```

## Overview

SidWinder is a native C64 music tracker/editor by Balázs Takács (Taki),
released by the group Natural Beat in 1999 (V01.22) with a follow-up V01.23 in
March 2000. It ranks 8th by file count in this collection's player-family
breakdown (117 files, knowledge/COVERAGE.md), used by a small circle of 8
composers — Factor6, Luca, Taki himself, Eclipse, and a handful of others —
rather than being broadly adopted scene-wide. A later, unrelated fan
continuation ("V1.23 Enhanced!!", PCH of KGB'92/Unreal, 2011) exists on CSDb,
and — separately and confusingly — a completely different modern tool also
named "SIDwinder" (a SID-file disassembler/relocator by Raistlin/Genesis
Project, first released 2025) is used elsewhere in this very project's own
tooling. See the name-collision quirk before doing anything else with this
card.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) **this is not the
same program as the `SIDwinder.exe` disassembly tool** referenced in
`knowledge/players/laxity-newplayer.md` and `scripts/dev/`, despite the
identical name — verify which one any future mention means; and (2) the GPL
license claim found for this tracker is second-hand (a CSDb forum comment,
not a header or LICENSE file) and its own attribution ("TLC/CNS") conflicts
with the primary release credits (Taki/Natural Beat), so treat the tool as
**closed/license-unstated** until a primary source says otherwise.

## Disassembly notes

None. No source archive was found for either original release (V01.22 or
V01.23) — CSDb hosts only compiled `.d64` disk images. The 2011 "Enhanced"
fork by PCH is a binary continuation, not a published source drop either
(not independently checked for an attached source archive). All memory
map / entry point / data format fields are honestly `TODO`; the only
low-level fact available at all is DeepSID's own unsourced spec-table claim
of "2 bytes ($FB-$FC)" zero-page usage, carried into this card with its
origin flagged rather than treated as verified.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release chain, CSDb IDs, usage counts) are confirmed, from the cached SIDId
entry, DeepSID's players.json spec table, and CSDb release pages fetched
directly. No disassembly was performed; no source code was located to read.
The next step for anyone promoting this card would be locating and reading
an actual replay binary (e.g. via a modern SID disassembler) since no
original source exists on CSDb.

## Sources

See the `sources` array — the cached SIDId entry, DeepSID's players.json
spec table, this project's own local dataset (knowledge/COVERAGE.md), and
four CSDb release pages fetched directly (66494, 101758, 99574, 253271).

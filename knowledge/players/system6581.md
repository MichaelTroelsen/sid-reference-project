# System 6581

```json
{
  "id": "system6581",
  "name": "System 6581",
  "aliases": ["System6581"],
  "authors": ["Fredrik Hederstierna (Zizyphus, Oneway)"],
  "released": "1993 (V3.0; composed/coded 1989-1990 per CSDb release notes)",
  "status": "stub",
  "platform": "Native C64 tool (editor + its own C64 replay routine). No cross-platform component known.",
  "csdb_release": 27434,

  "memory": {
    "load_address": "TODO: no public source/disassembly located",
    "zero_page": "DeepSID players.json spec lists zero_pages: \"None\" for this player (unverified, not independently re-derived)",
    "layout": "TODO: order list / patterns / table addresses — not documented publicly"
  },
  "entry": {
    "init": "TODO: per-file (would need a PSID header read or disassembly)",
    "play": "TODO: per-file (PSID header); DeepSID players.json gives an aggregate play-routine cost of 'Approx 26-33 rasterlines [SD]' but no address"
  },
  "speed": "TODO: not documented publicly",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public format spec or source located",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Heavily concentrated usage: of the 101 files in this dataset tagged 'System6581', 7 composers use it, and just two — Moppe (39 files, 38.6%) and Zizyphus himself (23 files, 22.8%) — account for 61% of them. Per the project's concentration heuristic (knowledge/EXTRACTION-TEMPLATE.md), this reads as a small-scene/group tool rather than a widely-adopted published tracker: it appears mainly used by its author and one close collaborator, both members of the Oneway group.",
    "Release lag: CSDb credits/release notes (release id 27434) describe the tunes on the release disk as composed/coded in 1989-1990 but only officially released as freeware in 1993 (V3.0) — DeepSID's players.json start_year (1990) and SIDId's implicit 1993 distribution date reflect these two different milestones. Don't treat '1990' and '1993' as a contradiction; they're coding-date vs release-date.",
    "No public source code, format documentation, or disassembly was located (CSDb, Codebase64, web search). Every Tier 3 runtime field is TODO for that reason, not a research shortcut — an honest gap, not a guessed one.",
    "DeepSID's players.json spec entry for 'System 6581' includes two concrete-looking runtime hints — 'zero_pages: None' and 'cpu_time: Approx 26-33 rasterlines [SD]' — that are recorded here as citations to that source, not independently verified against a disassembly."
  ],
  "sources": [
    "CSDb release (System 6581 V3.0, Zizyphus/Oneway, credits: code Zizyphus, music Moppe & Zizyphus): https://csdb.dk/release/?id=27434",
    "sidid:System6581 (author Fredrik Hederstierna (Zizyphus), reference https://csdb.dk/release/?id=27434) — data/sidid.json",
    "DeepSID players.json entry 'System 6581' (developer Zizyphus, start_year 1990, csdb_id 27434, platform 'Native / C64 emulator', distribution 'Freeware in 1993', zero_pages 'None', cpu_time 'Approx 26-33 rasterlines [SD]') — data/players.json",
    "Local dataset: 101 files tagged System6581 across 7 composers (see knowledge/COVERAGE.md and data/composers/*.json)"
  ]
}
```

## Overview

System 6581 is a native Commodore 64 music editor/replay tool by Fredrik
Hederstierna, working as "Zizyphus" of the group Oneway. CSDb's release page
for V3.0 (release id 27434) credits Zizyphus with the code and Zizyphus/Moppe
(both Oneway) with the music on the release disk; the tunes were composed
around 1989-1990, with the tool officially released as freeware in 1993.
DeepSID's cached player spec agrees on developer and CSDb id and adds a
start_year of 1990. In this dataset it's used by 101 files across only 7
composers, with two names (Moppe and Zizyphus) accounting for 61% of that
usage — consistent with a tool that mostly circulated within its own small
group rather than becoming a widely-adopted scene tracker.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: usage is heavily
concentrated in the author and one collaborator (both Oneway), and no public
source, format spec, or disassembly could be located, so every Tier 3 field
is an honest `TODO` rather than a guess. DeepSID's cached spec table does
carry two runtime-flavored fields (`zero_pages: None`, an approximate
play-routine cost in rasterlines) — recorded here as citations, not treated
as independently confirmed.

## Disassembly notes

None. No public source or existing disassembly was found for this player.
A future pass would need to pick a representative System6581-tagged `.sid`,
read its PSID header for init/play addresses, and disassemble from there —
there is no shortcut via a published source archive (unlike, e.g.,
`odintracker.md`).

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
group, release chain, CSDb id, usage counts and composer concentration) are
confirmed, from the CSDb release page and the cached SIDId/DeepSID entries.
All memory-map, entry-point, and data-format fields remain `TODO` pending an
actual disassembly, which is out of scope for this pass.

## Sources

See the `sources` array — the CSDb release page (id 27434), the cached
SIDId entry (`System6581`), the cached DeepSID players.json entry
("System 6581"), and the local per-composer usage counts in
`data/composers/*.json` / `knowledge/COVERAGE.md`.

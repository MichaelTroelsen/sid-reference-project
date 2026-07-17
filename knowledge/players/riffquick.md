# RiffQuick

```json
{
  "id": "riffquick",
  "name": "RiffQuick",
  "aliases": ["RiffQuick"],
  "authors": [],
  "released": "TODO: no confirmed release/author date for the tool itself; earliest RiffQuick-tagged file on CSDb is dated 1993 (Alan Bond's 'Soulless', 'Blizzard', 'Aztec quick-step')",
  "status": "stub",
  "platform": "TODO: appears to be a native C64 player routine baked into individual .sid files (PSID load/init/play addresses observed directly), not a documented standalone editor/tool — no CSDb tool release, no SIDId entry, no DeepSID curated entry found for it",
  "csdb_release": null,

  "memory": {
    "load_address": "Observed as $4FF9 in 3 of Alan Bond's RiffQuick-tagged files (Aztec quick-step, Blizzard, Soulless) — read directly from each file's PSID header via CSDb, not from disassembly. Not confirmed across all 12 files in the family.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "Observed as $4FF9 (same as load address) in the same 3 Alan Bond files, per their PSID headers via CSDb — not independently verified via disassembly",
    "play": "Observed as $51A1 in the same 3 Alan Bond files, per their PSID headers via CSDb — not independently verified via disassembly"
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
    "Composer concentration in this dataset (HVSC MUSICIANS\\ tree only, per data/composers/*.json): 12 files tagged 'RiffQuick', 11 of them (92%) in Alan Bond's own composer folder, and just 1 under a different composer (Jason Tinkler) — a strong signal of a personal/small-scene routine rather than a widely-adopted tool (contrast the wide-spread 'Rob_Hubbard' case noted in this project's synthetic-player analysis).",
    "No SIDId entry (data/sidid.json byTag has no 'RiffQuick' key), no DeepSID curated players.json entry, and no dedicated CSDb tool/release page for 'RiffQuick' itself were found — this tag has had no prior identity research anywhere in the accessible sources.",
    "The only concrete runtime facts available come from reading three RiffQuick-tagged files' own PSID headers directly via CSDb (not a disassembly): Alan Bond's 'Aztec quick-step' (csdb.dk/sid/?id=40344), 'Blizzard' (id=40346), and 'Soulless' (id=40342) all share identical load=init=$4FF9 and play=$51A1 addresses. Identical addresses across independent tunes is consistent with a fixed, reused player routine (rather than one-off hand-coded music per tune), but this was checked on only 3 of the 12 files.",
    "The one non-Alan-Bond file, Jason Tinkler's 'Out-Space' (csdb.dk/sid/?id=45701, a 2011 2-subtune 'Game' release), has completely different PSID header addresses (load $9C00, init $BF40, play $A16C) and a very different era/context from Alan Bond's 1993 standalone tunes. This casts real doubt on whether the Player-ID 'RiffQuick' signature is matching one genuinely shared tool across both files or a coincidental/generic code fragment — flagged here, not resolved.",
    "Alan Bond's own catalogue shows he used several different personal approaches across his 79 HVSC files (data/composers/alan-bond.json): 'RiffQuick' (11 files), a separate 'GKGM' tag (2 multi-subtune files: 'Double Lizard' 16 subtunes, 'Moon Hop' 13 subtunes), and dozens of plain 'Basic_Program'-tagged BASIC listings credited to 'The 100% BASIC Project' (csdb.dk/sid/?id=51267, dated 2014) — so RiffQuick is one of several idiosyncratic tools/methods in his output, not necessarily his only or primary one.",
    "No CSDb scener profile exists for 'Alan Bond' (this project's cached composer record has csdb_id: 0, data/composers/alan-bond.json) — he appears to be a private HVSC submitter rather than a demoscene-group-affiliated musician, which is consistent with finding no group credit, tool announcement, or documentation for RiffQuick anywhere searched."
  ],
  "sources": [
    "knowledge/COVERAGE.md: family '#27, 12 files, RiffQuick' (raw tag = family, no version variants) — generated from data/composers/*.json",
    "Local dataset aggregate: 12 files tagged 'RiffQuick' (11 in data/composers/alan-bond.json, 1 in data/composers/jason-tinkler.json) — verified by direct read of both files",
    "data/sidid.json byTag: checked, no 'RiffQuick' key present",
    "data/players.json (DeepSID curated players.json export, 129 entries): checked, no 'RiffQuick' entry present",
    "CSDb SID entry 'Aztec quick-step' (Alan Bond, 1993): https://csdb.dk/sid/?id=40344",
    "CSDb SID entry 'Blizzard' (Alan Bond, 1993): https://csdb.dk/sid/?id=40346",
    "CSDb SID entry 'Soulless' (Alan Bond, 1993): https://csdb.dk/sid/?id=40342",
    "CSDb SID entry 'Out-Space' (Jason Tinkler, 2011, Game): https://csdb.dk/sid/?id=45701",
    "CSDb SID entry 'No SID Pokes Used' (Alan Bond / The 100% BASIC Project, 2014): https://csdb.dk/sid/?id=51267",
    "data/composers/alan-bond.json (cached composer profile: country England, csdb_id 0, folder listing all player tags used)"
  ]
}
```

## Overview

RiffQuick is an uncarded Player-ID family with 12 files in this project's
local dataset (`knowledge/COVERAGE.md`, family #27). It has no entry in
SIDId's player index, no curated DeepSID `players.json` entry, and no
dedicated CSDb tool/release page — so unlike most carded players, there is no
prior identity research to build on, and this card starts from scratch.
Usage is heavily concentrated in one composer, Alan Bond (11 of 12 files,
92%), an England-based HVSC contributor with no CSDb scener profile who also
released a batch of plain BASIC-listing tunes via "The 100% BASIC Project"
(2014) and used a separate "GKGM" tag on two other multi-subtune files. The
one outlier file — Jason Tinkler's 2011 game tune "Out-Space" — carries the
same Player-ID tag but has completely different PSID header addresses,
raising an open question about whether "RiffQuick" is genuinely one reused
tool across both composers or a looser signature match. The only concrete
technical facts available are PSID load/init/play addresses read directly
from three of Alan Bond's files via CSDb, not from any disassembly.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: **near single-composer
usage** (92% Alan Bond) marks this as a likely personal routine rather than a
published tool; **three of Alan Bond's files share identical PSID
load/init/play addresses** ($4FF9/$4FF9/$51A1), which is at least consistent
with a genuinely reused fixed routine; and **the one non-Alan-Bond file has
totally different addresses and era/context**, an unresolved discrepancy
worth flagging for whoever picks this card up next. No author, release date,
or documentation for the tool itself was found anywhere searched (CSDb,
SIDId, DeepSID, general web).

## Disassembly notes

None. No public source or documentation for a "RiffQuick" tool was located,
so no disassembly was attempted. A future pass could disassemble one of Alan
Bond's RiffQuick-tagged `.sid` files (init `$4FF9` / play `$51A1`, per its
PSID header) and trace it through `sidm2-siddump` — the only route to real
memory-map/format facts here, since no source exists to read instead. That
same pass could also check whether Jason Tinkler's "Out-Space" is really
running the same code at a relocated address, or an unrelated routine that
Player-ID happens to also tag "RiffQuick".

## Verification

**Not verified — `status: stub`.** Only identity/usage facts (file count,
composer concentration, absence of any SIDId/DeepSID/CSDb tool documentation)
are confirmed from this project's local dataset and CSDb. The load/init/play
addresses are real, cited, publicly-published PSID header values (not
guesses), but they come from reading three files' own headers directly, not
from a disassembly of the play routine itself — every other runtime field
(zero page, data layout, speed, formats, effects) is honestly `TODO`.

## Sources

See the `sources` array — `knowledge/COVERAGE.md`, this project's local
`data/composers/alan-bond.json` and `data/composers/jason-tinkler.json`,
confirmed absence in `data/sidid.json` and `data/players.json`, and four CSDb
SID-entry pages (`csdb.dk/sid/?id=…`) read directly for PSID header fields.

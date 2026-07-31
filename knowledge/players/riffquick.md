# RiffQuick

```json
{
  "id": "riffquick",
  "name": "RiffQuick",
  "aliases": ["RiffQuick"],
  "authors": [],
  "released": "TODO: no confirmed release/announcement date for the tool itself. Full census (2026-07-31) of all 12 RiffQuick-tagged files' own CSDb Released fields shows the earliest attested composition date is 1993 (Alan Bond, 10 of his 11 RiffQuick-tagged files, CSDb Released='1993 Alan Bond', identical load=init=$4FF9/play=$51A1 headers) — a composition date for tunes using the routine, not a tool release date. His 11th RiffQuick-tagged file is a structurally unrelated 2010 BASIC listing (csdb.dk/sid/?id=42976), and the only non-Bond file (Jason Tinkler's 'Out-Space', CSDb Released='2011 Jason Tinkler') carries a CSDb release summary stating the underlying game 'was originally written during the 1990s but never released' before 2011 — so even that file's true composition date is uncertain.",
  "status": "stub",
  "platform": "Native C64 player routine embedded directly in each .sid file — PSID player_type field is 'Normal built-in' on all 12 RiffQuick-tagged files (full census via CSDb webservice, 2026-07-31), not a documented standalone editor or distributable tool. 'RiffQuick' is a real, named Player-ID byte signature (github.com/WilfredC64/player-id, config/sidid.cfg line 1681: `AD ?? ?? F0 03 20 ?? ?? 20 ?? ?? AD ?? ?? 8D 16 D4 AD ?? ?? 8D 15 D4 A9 07 85 FD E6 FE AD`, writing to SID filter registers $D416/$D415), but no author or origin comment is attached to it there or in its companion sidid.nfo, and no CSDb tool/release page or DeepSID curated players.json entry exists for it.",
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
    "No CSDb scener profile exists for 'Alan Bond' (this project's cached composer record has csdb_id: 0, data/composers/alan-bond.json) — he appears to be a private HVSC submitter rather than a demoscene-group-affiliated musician, which is consistent with finding no group credit, tool announcement, or documentation for RiffQuick anywhere searched.",
    "Full census (2026-07-31) of all 12 RiffQuick-tagged files' own CSDb Released fields (via scripts/lib/csdb-client.js, type=sid) confirms: 10 of Alan Bond's 11 RiffQuick-tagged files share an identical Released value of '1993 Alan Bond' and identical load=init=$4FF9/play=$51A1 PSID headers — Aztec quick-step (id=40344), Blizzard (id=40346), Brain phone (id=40348), Darkness (id=40347), Egypt (id=40353), Formula 6 (id=40345), Mellow (id=40350), Rock 'n' R.I.P. (id=40343), Soulless (id=40342), Toothpaste (id=40352). This supersedes the earlier 3-file spot-check in this card and confirms the fixed-routine theory across the whole set, not just a sample.",
    "The 11th Alan Bond RiffQuick-tagged file, 'Randomly generated music 2' (csdb.dk/sid/?id=42976), breaks the pattern: CSDb's own webservice returns it as a BASIC program (LoadAddr $0801/2049, no separate InitAddr/PlayAddr fields at all, 256 subtunes) with Released='2010 Alan Bond' — 17 years after the other 10 files and structurally unrelated to the $4FF9/$51A1 machine-code routine. Whether the Player-ID scanner is matching a genuinely shared code fragment inside this BASIC listing, or a coincidental byte sequence, was not determined.",
    "CSDb's own webservice record for Jason Tinkler's 'Out-Space' (csdb.dk/sid/?id=45701, depth=4) includes a release summary (release id=102708, written by CSDb user T.M.R.) stating: 'This game was originally written during the 1990s but never released — an almost final version ... was previewed at Replay 2011 ... and this is the final release version.' So the 2011 CSDb Released date on this SID may not be its true composition date, and its era could in principle overlap Alan Bond's 1993 tunes despite its completely different PSID header addresses ($9C00/$BF40/$A16C) — noted, not resolved.",
    "'RiffQuick' is confirmed as a genuine, named Player-ID byte signature, not just a composer-cache label: WilfredC64/player-id's config/sidid.cfg (https://github.com/WilfredC64/player-id/blob/main/config/sidid.cfg, checked 2026-07-31) lists it at line 1681 with signature bytes `AD ?? ?? F0 03 20 ?? ?? 20 ?? ?? AD ?? ?? 8D 16 D4 AD ?? ?? 8D 15 D4 A9 07 85 FD E6 FE AD` — a write to $D416/$D415 (SID filter cutoff registers), generic enough that a coincidental match on unrelated code is plausible, consistent with the previous quirk's discrepancy. No author or origin comment is attached to the signature in either sidid.cfg or its companion sidid.nfo; the tool's own README credits only the signature *contributors* (Wilfred Bos, iAN CooG, Professor Chaos, Cadaver, Ninja, Ice00, Yodelking), not per-signature player authors. cadaver/sidid's own readme.txt (the older, original tool) names the same contributor group and gives no per-signature author either.",
    "Re-research pass, 2026-07-31: exhaustive search for a 'RiffQuick' author found nothing new. Negative results, each checked directly rather than trusted from a search-engine AI summary: no 'RiffQuick' hit on CSDb (webservice sid/scener/group lookups and web search restricted to site:csdb.dk), still no CSDb scener page for Alan Bond (csdb_id 0 — no group memberships to trace), no relevant Lemon64 thread (searched '\"Alan Bond\" lemon64 forum'), no relevant Forum64 thread (searched '\"Alan Bond\" forum64.de C64'), and no per-signature author/comment in either C64 signature-scanner project's data files (cadaver/sidid, WilfredC64/player-id). `authors` stays an empty array — this is a checked gap, not an unchecked one. `csdb_release` re-confirmed null: no CSDb tool/release page for 'RiffQuick' exists to reference."
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
    "data/composers/alan-bond.json (cached composer profile: country England, csdb_id 0, folder listing all player tags used)",
    "CSDb SID webservice full census (2026-07-31), all 12 RiffQuick-tagged files, via scripts/lib/csdb-client.js type=sid: https://csdb.dk/sid/?id=40342, 40343, 40344, 40345, 40346, 40347, 40348, 40350, 40352, 40353, 42976, 45701",
    "CSDb SID entry 'Randomly generated music 2' (Alan Bond, 2010 BASIC listing): https://csdb.dk/sid/?id=42976",
    "CSDb SID entry 'Out-Space' (Jason Tinkler) fetched at depth=4 including its release (id=102708) summary by CSDb user T.M.R.: https://csdb.dk/sid/?id=45701 and https://csdb.dk/release/?id=102708",
    "data/composers/jason-tinkler.json (cached composer profile: country England, csdb_id 23185)",
    "github.com/WilfredC64/player-id: config/sidid.cfg (RiffQuick signature, line 1681) and README.md (signature contributor list) — https://github.com/WilfredC64/player-id/blob/main/config/sidid.cfg",
    "github.com/cadaver/sidid: readme.txt (original SIDId tool, signature contributor list, no per-signature authorship) — https://github.com/cadaver/sidid/blob/master/readme.txt",
    "WebSearch queries checked with no relevant result: '\"RiffQuick\" C64 SID player', '\"RiffQuick\" site:csdb.dk', '\"RiffQuick\" SidId signature github', '\"Alan Bond\" csdb.dk musician C64', '\"Alan Bond\" lemon64 forum', '\"Alan Bond\" forum64.de C64' (2026-07-31)"
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
(2014) and used a separate "GKGM" tag on two other multi-subtune files. A
full census of all 12 tagged files' own CSDb `Released` fields (2026-07-31)
confirms 10 of Bond's 11 files share an identical 1993 date and identical
PSID load/init/play addresses, but his 11th file is a structurally unrelated
2010 BASIC listing, and the sole non-Bond file — Jason Tinkler's "Out-Space"
— carries the same Player-ID tag but has completely different PSID header
addresses (and, per CSDb's own release notes, may itself have been composed
years before its 2011 release). This raises an open question about whether
"RiffQuick" is genuinely one reused tool across all three cases or a looser
signature match on generic SID-filter-register writes. A dedicated
re-research pass (2026-07-31) also searched CSDb, Lemon64, Forum64, and both
public C64 Player-ID signature-scanner projects (cadaver/sidid,
WilfredC64/player-id) for an author and found none — `authors` remains
genuinely empty, not merely unchecked. The only concrete technical facts
available are PSID load/init/play addresses read directly from files' own
headers via CSDb, not from any disassembly.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: **near single-composer
usage** (92% Alan Bond) marks this as a likely personal routine rather than a
published tool; **10 of Alan Bond's 11 files share identical PSID
load/init/play addresses** ($4FF9/$4FF9/$51A1) and an identical 1993
`Released` date, confirmed by a full census, not a sample — at least
consistent with a genuinely reused fixed routine; **Bond's 11th file is a
2010 BASIC listing that breaks that pattern entirely**; and **the one
non-Alan-Bond file has totally different addresses and an uncertain true
composition era**, an unresolved discrepancy worth flagging for whoever picks
this card up next. No author, tool release date, or documentation for the
tool itself was found anywhere searched (CSDb, SIDId, DeepSID, Lemon64,
Forum64, the two public C64 Player-ID signature-scanner source repos, general
web) — this was re-checked, not assumed, on 2026-07-31.

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
guesses), and were re-confirmed 2026-07-31 by a full census of all 12
tagged files' own headers (not a sample) — but they still come from reading
files' own headers directly, not from a disassembly of the play routine
itself. Every other runtime field (zero page, data layout, speed, formats,
effects) is honestly `TODO`. Identity/provenance research (authors, release
date, platform) was also re-run 2026-07-31 across CSDb, Lemon64, Forum64, and
both public Player-ID signature-scanner source repos; `authors` remains
empty and `csdb_release` remains `null` as confirmed negatives, not gaps
left unchecked.

## Sources

See the `sources` array — `knowledge/COVERAGE.md`, this project's local
`data/composers/alan-bond.json` and `data/composers/jason-tinkler.json`,
confirmed absence in `data/sidid.json` and `data/players.json`, a full CSDb
SID-entry census of all 12 tagged files (`csdb.dk/sid/?id=…`) read directly
for `Released`/PSID header fields, Jason Tinkler's "Out-Space" release page
(`csdb.dk/release/?id=102708`) for its 1990s-composition note, and the
`config/sidid.cfg` source files of both public C64 Player-ID signature-scanner
projects (`github.com/cadaver/sidid`, `github.com/WilfredC64/player-id`).

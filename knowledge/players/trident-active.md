# Trident/Active

```json
{
  "id": "trident-active",
  "name": "Trident/Active",
  "aliases": ["Trident/Active"],
  "authors": ["Adam Dunkels (Trident)"],
  "released": "No single tool-release date exists (personal/in-house routine, not a published tool with a version announcement). Full census (2026-07-31) of all 68 locally-tagged files' CSDb 'Released' fields via the csdb.dk webservice (type=sid) gives a usage span of 1994-2023: earliest is \"The Discrete Avenger\" (1994, csdb.dk/sid/?id=28733, credited to 'Adam Dunkels' rather than a group — this predates his CSDb-recorded 1996 join date for Active, so the routine itself predates that group affiliation despite the tag's name); the bulk clusters in 1996 (25 files) and 1997 (26 files) under an 'Active' credit; the most recent 7 files are 2023, credited 'FairLight' (a later group Trident also joined) — the same player routine stayed in use across at least two decades and two group changes. Full year distribution: 1994:1, 1996:25, 1997:26, 1998:1, 2002:2, 2003:3, 2006:1, 2017:1, 2022:1, 2023:7.",
  "status": "stub",
  "platform": "Native C64 player routine, apparently personal/in-house rather than a distributed editor or tool — see composer-concentration evidence in quirks",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not disassembled. Two sampled files (of 68) show a consistent PSID-header load $1000 (https://csdb.dk/sid/?id=28709, https://csdb.dk/sid/?id=28710) but this is header metadata, not a confirmed engine constant",
    "zero_page": "TODO: not disassembled",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "TODO: not disassembled. PSID header shows init $1000 on the 2 sampled files above",
    "play": "TODO: not disassembled. PSID header shows play $1003 on the 2 sampled files above"
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
    "100% single-composer concentration: every one of the 68 files tagged \"Trident/Active\" in this dataset was authored by Trident (Adam Dunkels) himself — data/composers/trident.json is the only composer file in data/composers/*.json that references this tag at all. That's the strongest available signal this is a personal/in-house routine rather than a published tool other composers adopted (cf. the project's documented concentration heuristic in CLAUDE.md/EXTRACTION-TEMPLATE.md).",
    "Trident's own catalogue (150 tunes total per data/composers/trident.json) is split across three player tags: 80 tunes use the widely-published \"Music_Assembler\" (352 composers in this dataset use that tag), 68 use this personal \"Trident/Active\" routine, and 2 use FutureComposer. So he moved to (or alongside) a self-authored routine after starting on a shared tool — but no source or statement was found describing *why*, so no derivation edge is asserted.",
    "\"Active\" is not a second author — it's the demoscene group Trident belonged to at the time (CSDb scener profile lists Active among his former groups: https://csdb.dk/scener/?id=1055). SIDId's tag naming convention pairs a composer's handle with their group for personal routines; treat \"Trident/Active\" as one author's routine, not a two-person collaboration, absent other evidence.",
    "The SIDId project's sidid.nfo entry for this tag is minimal on purpose (or just under-documented): only an AUTHOR field, no NAME/RELEASED/REFERENCE/COMMENT — https://github.com/cadaver/sidid/blob/master/sidid.nfo. No CSDb release page exists for the player/tool itself (only for the music releases that use it), so csdb_release is null here, unlike most curated players in this project. Confirmed by two independent checks: (1) Trident's own CSDb scener profile lists no player/tool credit (see below), and (2) a full listing of group Active's 345 CSDb releases (csdb.dk webservice type=group id=94 depth=2) turns up only 'Trident Music Collection #2' (Jan 1997, https://csdb.dk/release/?id=6769) and '#3' (1997, https://csdb.dk/release/?id=62333) as Trident-named releases — both are music compilations, not a tool/player release.",
    "Per CSDb's group-membership record (csdb.dk webservice type=group id=94), Trident joined Active in 1996 and left 15-Dec-2022. Notably, the *earliest* locally-tagged Trident/Active file, \"The Discrete Avenger\" (https://csdb.dk/sid/?id=28733), is CSDb-dated 1994 and credited to 'Adam Dunkels' (not 'Active') — i.e. two years before his recorded Active join date. Either the routine predates his Active membership and the tag name reflects only its most common/best-known usage period, or CSDb's per-file 'Released' credit for this one file is simply not group-attributed; either way, don't treat 1996 as a hard floor for the routine's origin.",
    "CSDb's internal SID-entry IDs are NOT chronological for this composer's catalogue, so 'lowest ID = earliest' is not a safe inference: \"Leider Nicht Dabei\" (csdb_id 28706, tagged Trident/Active) is a lower ID than \"Allebasi\"/\"Anaesthetics\" (28709/28710) yet is CSDb-dated 2006, a full decade later (https://csdb.dk/sid/?id=28706). IDs in this range appear to be assigned by HVSC folder/filename scan order, not release date — any future attempt to date this player from ID ordering alone would be wrong.",
    "No SID player tool or music routine is credited to Trident on his CSDb scener profile's tools/credits list — only unrelated projects (the GuruTerm terminal-emulator series, and his non-C64 Contiki OS work) appear there (https://csdb.dk/scener/?id=1055). This reinforces the personal/in-house reading: the routine was never released or credited as a standalone tool, only used privately across his own tunes.",
    "No public source code, disassembly, or technical writeup for this specific routine was found in a search of GitHub (incl. the reverse-engineered-SID-player collection at https://github.com/realdmx/c64_6581_sid_players, which does not include a Trident/Active entry), Codebase64, or Scene World's Adam Dunkels interview (#13, https://sceneworld.org/blog/2014/06/29/video-interview-with-adam-dunkels/) — the interview discusses his general demoscene/IoT career, not player internals.",
    "Re-research pass, 2026-07-31: queried csdb.dk's XML webservice (scripts/lib/csdb-client.js) directly rather than the HTML site. Fetched (a) Trident's scener record (type=scener id=1055, depth=2/3) for group memberships incl. Active (id=94, joined 1996, left 2022) and Fairlight; (b) group Active's full release list (type=group id=94 depth=2, 345 releases) searched for any 'Trident'/'player'/'routine'-named entry — found only the two Trident Music Collection compilations, no tool release; (c) a full census of all 68 locally-tagged files (not a sample) via type=sid lookups keyed by each file's csdb_id from data/composers/trident.json, recording each file's CSDb 'Released' string. This resolved `released` from a 2-file partial sample to a complete 68-file span (1994-2023) and confirmed `csdb_release: null` (no player-tool release page exists, only music releases). Also checked Lemon64 and a general web search for 'Trident Adam Dunkels sid player' / 'Trident Active csdb player 1996' — surfaced only Lemon64 forum threads about Trident-the-person (MIT recognition) and YouTube uploads of his tunes, nothing about the player routine's internals or a distinct tool release; Forum64 was not separately searched because no German-scene connection to this Swedish composer/tool was found elsewhere to justify it."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag[\"Trident/Active\"] = { author: \"Adam Dunkels (Trident)\" }",
    "knowledge/COVERAGE.md — rank 9 overall, 68 files, raw tag \"Trident/Active\"",
    "data/composers/trident.json — per-file player tags for all 150 of Trident's catalogued tunes",
    "CSDb scener profile (Adam Dunkels / Trident, groups incl. Active, Fairlight, Triad, etc.): https://csdb.dk/scener/?id=1055",
    "CSDb releases, Trident Music Collection #2 (Jan 1997) and #3 (1997) by Active: https://csdb.dk/release/?id=6769, https://csdb.dk/release/?id=62333",
    "CSDb webservice (csdb.dk/webservice/, queried via scripts/lib/csdb-client.js), type=group id=94 (Active) depth=2: full 345-release list, group founded 1-May-1989, Trident's membership (JoinYear 1996, LeaveYear 2022)",
    "CSDb webservice type=sid, full census of all 68 locally-tagged files' Released fields, keyed by csdb_id from data/composers/trident.json — earliest https://csdb.dk/sid/?id=28733 (The Discrete Avenger, 1994 Adam Dunkels), latest 7 files dated 2023 FairLight e.g. https://csdb.dk/sid/?id=62302 (Snowy Night); also https://csdb.dk/sid/?id=28709 (Allebasi, 1996 Active), https://csdb.dk/sid/?id=28706 (Leider Nicht Dabei, 2006 Active — the non-chronological-ID counterexample)",
    "sidid.nfo (SIDId project, upstream source of the local sidid.json import): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "GitHub search for a public disassembly/source of this routine (none found): https://github.com/realdmx/c64_6581_sid_players",
    "Scene World interview #13 with Adam Dunkels (career overview, no player-internals content): https://sceneworld.org/blog/2014/06/29/video-interview-with-adam-dunkels/"
  ]
}
```

## Overview

"Trident/Active" is the SIDId/Player-ID signature for a C64 SID player routine
used by Adam Dunkels, known on the scene as Trident, a Swedish coder/musician
active in groups including Active, Antic, Booze Design, Triad, and (more
recently) Fairlight and C64GFX Staff. In this dataset it is used by exactly
one composer — Trident himself, on 68 of his 150 catalogued tunes — while his
other 82 tunes use the widely-shared "Music_Assembler" (80) and
"FutureComposer" (2) tags. That composer-concentration pattern (see the
`quirks` array) is the primary evidence this is a personal/in-house player
routine rather than a tool that circulated to other musicians, and SIDId's own
entry for the tag is correspondingly thin: author only, no release date,
reference link, or descriptive comment. No CSDb release page for the routine
itself (as distinct from the tunes that use it) was found — confirmed by both
Trident's own CSDb scener profile (no tool/code credit) and a full listing of
group Active's 345 CSDb releases (only two Trident music compilations, no
tool release) — so `csdb_release` is null. A full census (2026-07-31, not a
sample) of all 68 locally-tagged files' CSDb-reported dates puts this
routine's confirmed usage span at 1994–2023: earliest is "The Discrete
Avenger" (1994, credited to "Adam Dunkels" — predating his CSDb-recorded 1996
join date for Active), the bulk clusters in 1996–1997 under an "Active"
credit (matching the tag name), and the most recent seven files are 2023,
credited to "FairLight" (a later group). CSDb's SID-entry IDs were also
confirmed non-chronological for this composer (a lower-ID tune dated a decade
later), so ID order cannot be used as a dating shortcut.

## Quirks & gotchas

See the `quirks` array in the JSON block — the single-composer concentration,
the mix of players across Trident's own catalogue, the "Active" group-not-
co-author clarification, and the sparse upstream SIDId entry.

## Disassembly notes

None. No source or public disassembly was located for this routine. The only
runtime-adjacent facts available are the PSID header `load`/`init`/`play`
addresses CSDb displays for individual tunes ($1000/$1000/$1003, consistent
across the two files sampled) — these are per-file header metadata, not a
confirmed engine entry point, and are recorded as TODO-with-caveat in the
`memory`/`entry` fields rather than asserted as fact. A future pass could
pull one of the 68 tagged .sid files, disassemble around $1000, and check
whether the routine is genuinely fixed at that address across the set before
promoting this card past `stub`.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are populated,
all from the local dataset (SIDId import, COVERAGE.md, per-composer JSON) and
CSDb (scener profile, one release page, two SID-entry pages sampled for
header addresses). No source or disassembly exists to confirm any runtime
field, so every entry under `memory`/`entry`/`speed`/`data_format`/`effects`
is honestly `TODO`.

## Sources

See the `sources` array — the local SIDId import, knowledge/COVERAGE.md, the
per-composer file `data/composers/trident.json`, and the CSDb XML webservice
(scener profile, group Active's full release list, two music-collection
releases, and a full 68-file census of SID-entry `Released` fields).

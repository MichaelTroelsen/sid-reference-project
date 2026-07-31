# Odie/Cosine

```json
{
  "id": "odie-cosine",
  "name": "Odie/Cosine",
  "aliases": ["Odie/Cosine"],
  "authors": ["Sean Connolly (Odie)"],
  "released": "c. 1988-1991 (earliest/latest dated files observed on CSDb; no formal CSDb tool/editor release exists for this tag)",
  "status": "stub",
  "platform": "Native C64, hand-coded in source rather than a distributed editor. Per a Lemon64 forum post by TMR (a Cosine-affiliated scene historian): 'Odie normally works in source code rather than an editor; Pulse Player was the Pulse Productions music driver and EMS only gained an editor at V4.3' (https://www.lemon64.com/forum/viewtopic.php?t=5725). The same post gives Odie's tool progression as Rockmonitor -> Pulse Player -> EMS (all versions) -- in the 1988-1991 date range of this 'Odie/Cosine' tag he had not yet reached EMS's first editor (V4.3), consistent with the per-file inconsistent load/init/play addresses recorded below. Not independently confirmed by disassembly.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: varies per file — not a fixed engine address in the samples checked (see quirks)",
    "zero_page": "TODO: no disassembly done",
    "layout": "TODO: no disassembly done"
  },
  "entry": {
    "init": "TODO: varies per file (PSID header only, not verified by trace) — e.g. Hektic.sid (Marc François, 1991): init $E09D",
    "play": "TODO: varies per file (PSID header only, not verified by trace) — e.g. Hektic.sid: play $E0A0"
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
    "Player-ID tag 'Odie/Cosine' (9 files in this dataset, rank 19 by file count per knowledge/COVERAGE.md) is a SEPARATE SIDId signature from this same author's later, formally published editor 'EMS/Odie' (see knowledge/players/ems-odie.md, CSDb release 4649, 1997). sidid.nfo gives no `reference`/`comment` for 'Odie/Cosine' — unlike 'EMS/Odie', it has no CSDb tool/release page of its own.",
    "Extreme composer concentration: used by only 2 composers in this dataset — Sean Connolly himself (7 of 9 files) and Marc François 'Skywave' (2 of 9 files) — both members of the UK demogroup Cosine (Connolly: csdb.dk/scener/?id=1181; François/Skywave's Cosine membership confirmed via CSDb release 4649's own credit line, 'Skywave (of Cosine and Sonix Systems)'). Per this project's composer-concentration heuristic (CLAUDE.md / EXTRACTION-TEMPLATE.md), this small a user base sharing group ties points to a personal/small-scene routine, not a widely published tool.",
    "Load/init/play addresses are NOT constant across ANY of the 9 tagged files (full census, not a sample), per CSDb's own listed PSID header fields (not independently re-verified by disassembly/trace here): CDU Magazine loadertune load $17FE/init n.d./play n.d. (id 5676); Clockwork Orange Theme load $C000/init $CEB2/play $CEB8 (id 5678, 1988 Pulse Productions); Cybersub Preview load $65C0/init $65C0/play $6C43 (id 44868, 19?? Cosine Systems); Extreme Force load $E9B9/init $F0E6/play $EAA0 (id 5689, 1990 Sonix Systems); Flying High load $0BF7/init $0BF7/play $0BFD (id 5694, 1988 Pulse Productions); Nina's Hoover load $BA00/init $CAF2/play $CAF5 (id 5711, 1988 Pulse Productions); Touchlight (id 38410, 1988 Pulse Productions); Hektic load $E000/init $E09D/play $E0A0 (id 12592, Marc François, 1991 Double Density); Warflame load $A000/init $A71D/play $A0A0 (id 12618, Marc François, 1990 Sonix Systems). This is consistent with a small hand-assembled-per-tune routine rather than one fixed shared engine, but whether the underlying code is identical/copy-pasted between tunes is unconfirmed — TODO, needs real disassembly.",
    "CORRECTED after full 9-file census (earlier draft of this card, based on a 6-of-9 partial sample, claimed no sampled file was credited to a group literally named 'Cosine' — that claim did not survive checking the remaining 3 files). Cybersub Preview (CSDb id 44868) is credited '19?? Cosine Systems', and CSDb's own scener page for Odie (https://csdb.dk/scener/?id=1181) lists his group 'Cosine' (id 374) with AKA 'Cosine Systems' — so the tag name DOES match a real release credit, just not on every file. Across all 9: 4 files credit 'Pulse Productions' (1988), 2 credit 'Sonix Systems' (1990), 1 credits 'Cosine Systems' (19??, i.e. Cosine itself), 1 credits 'Apex' (1990), 1 credits 'Double Density' (1991) — all four named groups (Pulse Productions, Sonix Systems, Cosine, Double Density) are groups Odie or Marc François belonged to per CSDb, so 'Cosine' in the SIDId tag most plausibly still names the composers' overarching demogroup identity rather than tracking one specific release credit 1:1, but it is not a mismatch as previously stated.",
    "A sibling tag by the same author, 'Odie/Pulse' (2 files, e.g. Merry Christmas'87, 1987 Pulse Productions), and another, 'Odie_tiny' (3 files, used on 4k-competition/intro tunes), also exist in sidid.nfo/this dataset but are OUT OF SCOPE for this card — each is its own SIDId signature and would need its own card. No `edges` relationship is asserted here between 'Odie/Cosine', 'Odie/Pulse', 'Odie_tiny', or 'EMS/Odie' — plausible same-author kinship, but no source/header/manual states a derivation, so per this project's rule an edge is not recorded.",
    "All Odie/Cosine-tagged files observed (1988-1991) predate the earliest documented EMS release (V7.03, 18 Jan 1997) by 6-9 years — consistent with 'Odie/Cosine' being an earlier, pre-editor routine that Connolly later formalized/replaced with EMS, but this is a date-based inference only, not a sourced lineage claim, so it is NOT recorded as an `edges.derives_from` entry."
  ],
  "sources": [
    "sidid.nfo (author only, no reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo — local copy at data/sidid.json (byTag['Odie/Cosine'])",
    "Local dataset: 9 files tagged 'Odie/Cosine', rank 19 (see knowledge/COVERAGE.md)",
    "Local dataset per-file records: data/composers/sean-connolly.json, data/composers/marc-francois.json (folder[] entries with player/csdb_id/subtunes) — full census, all 9 records read, not a sample",
    "CSDb scener profile, Odie/Sean Connolly (groups Cosine [id 374, AKA 'Cosine Systems'], Sonix Systems [id 421]): https://csdb.dk/scener/?id=1181",
    "CSDb group page, Cosine (id 374, AKA 'Cosine Systems', founded 1986, UK): fetched via scripts/lib/csdb-client.js csdbGet('scener', 1181) MemberOf block",
    "CSDb SID entries for ALL 9 tagged files, checked for date/group/PSID-header fields via scripts/lib/csdb-client.js: https://csdb.dk/sid/?id=5676 (CDU Magazine loadertune, 1990 Apex), https://csdb.dk/sid/?id=5678 (Clockwork Orange Theme, 1988 Pulse Productions), https://csdb.dk/sid/?id=44868 (Cybersub Preview, 19?? Cosine Systems), https://csdb.dk/sid/?id=5689 (Extreme Force, 1990 Sonix Systems), https://csdb.dk/sid/?id=5694 (Flying High, 1988 Pulse Productions), https://csdb.dk/sid/?id=5711 (Nina's Hoover, 1988 Pulse Productions), https://csdb.dk/sid/?id=38410 (Touchlight, 1988 Pulse Productions), https://csdb.dk/sid/?id=12592 (Hektic, 1991 Double Density), https://csdb.dk/sid/?id=12618 (Warflame, 1990 Sonix Systems)",
    "CSDb SID entry, sibling tag 'Odie/Pulse' (out of scope, cited for context only): https://csdb.dk/sid/?id=5709 (Merry Christmas'87, 1987 Pulse Productions)",
    "Lemon64 forum, 'I want to make music. What's a good program?' — post by TMR describing Odie's tool progression (Rockmonitor -> Pulse Player -> EMS) and stating he worked in source rather than an editor before EMS V4.3: https://www.lemon64.com/forum/viewtopic.php?t=5725",
    "Web search found no CSDb tool/release page for 'Pulse Player' or 'Rockmonitor' as standalone driver entries — csdb_release stays null for this tag",
    "CSDb release, the author's later published editor (sibling card, not this tag): The Electronic Music System V7.03, 1997 Cosine — https://csdb.dk/release/?id=4649",
    "Sibling card, same author, formally published tool: knowledge/players/ems-odie.md"
  ]
}
```

## Overview

"Odie/Cosine" is a Player-ID signature naming 9 files in this dataset (rank 19
by file count, per `knowledge/COVERAGE.md`; all 9 read directly, full census),
all composed by **Sean Connolly ("Odie")**, of the UK demogroup Cosine, or his
frequent collaborator **Marc François ("Skywave")**, also of Cosine. It is a
*separate* SIDId signature from this same author's later, formally published
editor "EMS/Odie" (see [`ems-odie.md`](ems-odie.md), CSDb release 4649,
1997) — `sidid.nfo` gives it no CSDb reference or comment of its own, and the
tunes carrying this tag are dated 1988-1991, years before EMS's earliest
documented release. Composer concentration is stark (2 composers, both
Cosine members). Platform is now sourced: a Lemon64 forum post by TMR states
Odie "normally works in source code rather than an editor" and gives his
tool progression as Rockmonitor -> Pulse Player -> EMS, with EMS not gaining
an editor until V4.3 — consistent with the inconsistent per-file load/init/play
addresses found across all 9 tagged files on CSDb, i.e. hand-assembled code
per tune rather than one fixed shared engine. `csdb_release` stays `null`:
no CSDb tool/release page exists for "Odie/Cosine", "Pulse Player", or
"Rockmonitor" as standalone entries.

## Quirks & gotchas

See the `quirks` array — the load-bearing points: (1) this is a distinct
SIDId tag from the same author's later EMS editor, with no direct sourced
lineage between the two recorded here; (2) the "Cosine" in the tag name DOES
match one release credit ('Cosine Systems' on Cybersub Preview, CSDb's own
AKA for the group Cosine) once all 9 files are checked, correcting an earlier
partial-sample claim that no file was credited to Cosine directly; (3)
per-file entry addresses are inconsistent across all 9 files, suggestive but
unconfirmed evidence against a single fixed-address shared engine; (4)
platform is now sourced (Lemon64/TMR) as hand-coded-in-source, not editor-based,
for this 1988-1991 date range.

## Disassembly notes

None done. No public source or format spec was found for this specific tag.
A representative file (e.g. `Extreme_Force.sid` or `Hektic.sid`, both listed
in `sources`) would need independent disassembly/tracing (`sidm2-siddump`)
before any Tier 3 field here could move past `TODO`.

## Verification

Not verified. This card was built from Tier 1 local data (`sidid.json`,
`data/composers/*.json`, `knowledge/COVERAGE.md`) plus Tier 2 web/CSDb
provenance research (scener profile, CSDb group page, all 9 tagged files'
individual SID release pages for date/group/header fields, and a Lemon64
forum post for platform). No runtime fact was disassembled or traced;
`status` is correctly `stub`.

## Sources

See the `sources` array — SIDId, local dataset composer records (full 9-file
census), CSDb scener profile, CSDb group page for Cosine, all nine tagged
files' individual CSDb SID entries (for date/group/PSID-header cross-checks),
a Lemon64 forum post (platform provenance), the CSDb release page for the
author's later EMS editor, and the sibling `ems-odie.md` card.

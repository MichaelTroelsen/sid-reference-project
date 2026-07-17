# Odie/Cosine

```json
{
  "id": "odie-cosine",
  "name": "Odie/Cosine",
  "aliases": ["Odie/Cosine"],
  "authors": ["Sean Connolly (Odie)"],
  "released": "c. 1988-1991 (earliest/latest dated files observed on CSDb; no formal CSDb tool/editor release exists for this tag)",
  "status": "stub",
  "platform": "TODO: likely a native C64 hand-coded per-tune replay routine rather than a distributed editor — inconsistent load/init/play addresses across sampled files are suggestive but this has not been disassembled/confirmed",
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
    "Load/init/play addresses are NOT constant across sampled files, per CSDb's own listed PSID header fields (not independently re-verified by disassembly/trace here): Flying High (1988, Pulse Productions) load $0BF7 / init $0BF7 / play $0BFD; Extreme Force (1990, Sonix Systems) load $E9B9 / init $F0E6 / play $EAA0; Hektic (Marc François, 1991, Double Density) load $E000 / init $E09D / play $E0A0. This is consistent with a small hand-assembled-per-tune routine rather than one fixed shared engine, but whether the underlying code is identical/copy-pasted between tunes is unconfirmed — TODO, needs real disassembly.",
    "The 'Cosine' half of the tag name does not consistently match the RELEASE group credited on the individual tunes checked — CSDb credits Flying High and Touchlight to 'Pulse Productions' (1988), CDU Magazine loadertune to 'Apex' (1990), and Extreme Force to 'Sonix Systems' (1990); none of the sampled Odie/Cosine files were themselves released under a group literally named 'Cosine'. Most likely 'Cosine' in the SIDId tag reflects the composer's/co-composer's demogroup identity rather than any one release's credited group — flagged here as an open question, not asserted as fact.",
    "A sibling tag by the same author, 'Odie/Pulse' (2 files, e.g. Merry Christmas'87, 1987 Pulse Productions), and another, 'Odie_tiny' (3 files, used on 4k-competition/intro tunes), also exist in sidid.nfo/this dataset but are OUT OF SCOPE for this card — each is its own SIDId signature and would need its own card. No `edges` relationship is asserted here between 'Odie/Cosine', 'Odie/Pulse', 'Odie_tiny', or 'EMS/Odie' — plausible same-author kinship, but no source/header/manual states a derivation, so per this project's rule an edge is not recorded.",
    "All Odie/Cosine-tagged files observed (1988-1991) predate the earliest documented EMS release (V7.03, 18 Jan 1997) by 6-9 years — consistent with 'Odie/Cosine' being an earlier, pre-editor routine that Connolly later formalized/replaced with EMS, but this is a date-based inference only, not a sourced lineage claim, so it is NOT recorded as an `edges.derives_from` entry."
  ],
  "sources": [
    "sidid.nfo (author only, no reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo — local copy at data/sidid.json (byTag['Odie/Cosine'])",
    "Local dataset: 9 files tagged 'Odie/Cosine', rank 19 (see knowledge/COVERAGE.md)",
    "Local dataset per-file records: data/composers/sean-connolly.json, data/composers/marc-francois.json (folder[] entries with player/csdb_id/subtunes)",
    "CSDb scener profile, Odie/Sean Connolly (groups Cosine, Sonix Systems): https://csdb.dk/scener/?id=1181",
    "CSDb SID entries checked for date/group/header fields: https://csdb.dk/sid/?id=5676 (CDU Magazine loadertune, 1990 Apex), https://csdb.dk/sid/?id=5694 (Flying High, 1988 Pulse Productions), https://csdb.dk/sid/?id=38410 (Touchlight, 1988 Pulse Productions), https://csdb.dk/sid/?id=5689 (Extreme Force, 1990 Sonix Systems), https://csdb.dk/sid/?id=12592 (Hektic, 1991 Double Density), https://csdb.dk/sid/?id=5709 (Merry Christmas'87 — sibling tag 'Odie/Pulse', 1987 Pulse Productions)",
    "CSDb release, the author's later published editor (sibling card, not this tag): The Electronic Music System V7.03, 1997 Cosine — https://csdb.dk/release/?id=4649",
    "Sibling card, same author, formally published tool: knowledge/players/ems-odie.md"
  ]
}
```

## Overview

"Odie/Cosine" is a Player-ID signature naming 9 files in this dataset (rank 19
by file count, per `knowledge/COVERAGE.md`), all composed by **Sean Connolly
("Odie")**, of the UK demogroup Cosine, or his frequent collaborator **Marc
François ("Skywave")**, also of Cosine. It is a *separate* SIDId signature
from this same author's later, formally published editor "EMS/Odie" (see
[`ems-odie.md`](ems-odie.md), CSDb release 4649, 1997) — `sidid.nfo` gives it
no CSDb reference or comment of its own, and the tunes carrying this tag are
dated 1988-1991, years before EMS's earliest documented release. Composer
concentration is stark (2 composers, both Cosine members) and per-file
load/init/play addresses vary across the samples checked on CSDb, both
consistent with a small, personal/hand-assembled routine rather than a
distributed tool — but this is inference from metadata, not a disassembly.

## Quirks & gotchas

See the `quirks` array — the load-bearing points: (1) this is a distinct
SIDId tag from the same author's later EMS editor, with no direct sourced
lineage between the two recorded here; (2) the "Cosine" in the tag name does
not line up with the actual release-group credits on the sampled tunes
(Pulse Productions / Apex / Sonix Systems), so it most likely names the
composers' demogroup rather than any one release; (3) per-file entry
addresses are inconsistent, which is suggestive but unconfirmed evidence
against a single fixed-address shared engine.

## Disassembly notes

None done. No public source or format spec was found for this specific tag.
A representative file (e.g. `Extreme_Force.sid` or `Hektic.sid`, both listed
in `sources`) would need independent disassembly/tracing (`sidm2-siddump`)
before any Tier 3 field here could move past `TODO`.

## Verification

Not verified. This card was built from Tier 1 local data (`sidid.json`,
`data/composers/*.json`, `knowledge/COVERAGE.md`) plus Tier 2 web/CSDb
provenance research (scener profile, individual SID release pages for
date/group/header fields). No runtime fact was disassembled or traced;
`status` is correctly `stub`.

## Sources

See the `sources` array — SIDId, local dataset composer records, CSDb scener
profile, six individual CSDb SID entries (for date/group/PSID-header
cross-checks), the CSDb release page for the author's later EMS editor, and
a Scenet retrospective confirming the co-composer's Cosine membership.

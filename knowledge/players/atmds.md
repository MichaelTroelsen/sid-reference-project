# Acid Track Music Development System (ATMDS)

```json
{
  "id": "atmds",
  "name": "Acid Track Music Development System (ATMDS)",
  "aliases": ["ATMDS_1.x", "ATMDS_3.x", "ATMDS", "Acid Track Creator"],
  "authors": ["Stefan Hübner (St0fF, Neoplasia)"],
  "released": "1997 (v1.1/v1.2, as \"Acid Track Creator\"); v3.2 in 2001, both Neoplasia",
  "status": "stub",
  "platform": "Native C64 tool. Codebase64's tools listing describes it as \"an Editor for coders, style based on the DMC-series\" — a music editor aimed at coders rather than a general tracker.",
  "csdb_release": 7159,

  "memory": {
    "load_address": "TODO: no public source or disassembly found",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO: no public source or disassembly found",
    "play": "TODO"
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
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Codebase64's tools wiki states: \"ATMDS v3.2 by St0fF / Neoplasia, AcidTrackMusicDevelopmentSystem - an Editor for coders, style based on the DMC-series.\" This is the only lineage lead found for this tool — a third-party wiki description saying the *editor's style* is DMC-like, not an author statement or source-header proof of shared runtime code, so it is NOT asserted as a `derives_from` edge (editor-style resemblance is not evidence of shared code, same rule already applied elsewhere in this KB) — recorded here only as an unconfirmed lead.",
    "Two distinct major versions share the ATMDS name: v1.x (1997, also released/titled \"Acid Track Creator\", CSDb release 129844) and v3.x (2001, CSDb release 7159). Both are credited solely to St0fF of Neoplasia; the 1997→2001 gap and the rename suggest a single author's tool evolving under two labels rather than a handoff.",
    "Composer concentration is total: every file in this project's local dataset tagged ATMDS_1.x or ATMDS_3.x (16 of 16 — 11 v3.x + 5 v1.x) belongs to St0fF's own composer folder (`data/composers/stoff.json`). This reads as a personal/author-showcase tool rather than one that got picked up by the wider scene, consistent with SIDId's comment tying it to Neoplasia specifically.",
    "No public source code was found (CSDb release pages, Codebase64, and general web search checked) — only the compiled tool/disk-image downloads (`ATMDS-3-2.zip` on CSDb, `atc_v1.1.d64` for v1.1). Licence is unstated. Treat as closed; every Tier 3 field stays TODO."
  ],
  "sources": [
    "sidid:ATMDS_3.x (author Stefan Hübner (St0ff), released 2001 Neoplasia, CSDb release 7159, comment \"Also known as Acid Track Creator\") — data/sidid.json",
    "sidid:ATMDS_1.x (author Stefan Hübner (St0ff), released 1997 Neoplasia, CSDb release 129844) — data/sidid.json",
    "CSDb release (ATMDS v3.2, 2001, Neoplasia, sole credit St0fF): https://csdb.dk/release/?id=7159",
    "CSDb release (Acid Track Creator v1.1, 1997, Neoplasia, sole credit St0fF): https://csdb.dk/release/?id=129844",
    "Codebase64 tools wiki, \"style based on the DMC-series\" description: https://codebase64.net/doku.php?id=tools:start",
    "Local dataset: 11 files tagged ATMDS_3.x (rank 22, knowledge/COVERAGE.md), 5 tagged ATMDS_1.x (rank 94); all 16 traced to data/composers/stoff.json"
  ]
}
```

## Overview

ATMDS (Acid Track Music Development System, also released as "Acid Track
Creator") is a native C64 music editor by Stefan Hübner (St0fF) of the group
Neoplasia, with two documented major releases: v1.x in 1997 and v3.x in 2001
(SIDId `ATMDS_1.x` / `ATMDS_3.x`; CSDb release 129844 / 7159). Codebase64's
tools wiki describes it as "an Editor for coders, style based on the
DMC-series," which is the only lineage evidence found. In this project's local
dataset every single ATMDS-tagged file (16 of 16, both versions combined) was
composed by St0fF himself, marking this as a personal/small-scene tool rather
than a widely-adopted one — reflected here with `status: stub` since no
runtime facts could be sourced.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) a third-party wiki's
"style based on the DMC-series" phrasing is the only lineage lead found, but
it describes editor style, not shared runtime code, so no `derives_from` edge
is asserted; (2) composer concentration is 100% St0fF — no other
composer in the local dataset used this tool; (3) no public source was located
anywhere searched, so this card is identity/provenance-only.

## Disassembly notes

None — no public source or disassembly was found for ATMDS in either version.
The only available artifacts are the compiled tool downloads on CSDb
(`ATMDS-3-2.zip`, `atc_v1.1.d64`). A future pass would need to disassemble a
representative `.sid` from `data/composers/stoff.json` (e.g. `Da_Groove.sid`,
CSDb SID id 27811) to fill any Tier 3 field.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release years, CSDb release ids, the DMC-style claim, composer concentration)
are sourced, all from the cached SIDId entries, CSDb release pages, and
Codebase64. No memory map, entry point, or data format has been confirmed;
every Tier 3 field is `TODO` as required, not guessed.

## Sources

See the `sources` array — the cached SIDId entries for `ATMDS_1.x`/`ATMDS_3.x`,
the two CSDb release pages (7159, 129844), the Codebase64 tools wiki, and this
project's local composer data (`data/composers/stoff.json`).

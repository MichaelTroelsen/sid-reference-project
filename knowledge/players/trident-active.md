# Trident/Active

```json
{
  "id": "trident-active",
  "name": "Trident/Active",
  "aliases": ["Trident/Active"],
  "authors": ["Adam Dunkels (Trident)"],
  "released": "TODO: no explicit release year in SIDId; earliest CSDb-dated tune tagged with this player is \"Allebasi\", CSDb-listed as \"1996 Active\" (https://csdb.dk/sid/?id=28709) — treat as a lower bound, not a confirmed first-release date",
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
    "The SIDId project's sidid.nfo entry for this tag is minimal on purpose (or just under-documented): only an AUTHOR field, no NAME/RELEASED/REFERENCE/COMMENT — https://github.com/cadaver/sidid/blob/master/sidid.nfo. No CSDb release page exists for the player/tool itself (only for the music releases that use it), so csdb_release is null here, unlike most curated players in this project."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag[\"Trident/Active\"] = { author: \"Adam Dunkels (Trident)\" }",
    "knowledge/COVERAGE.md — rank 9 overall, 68 files, raw tag \"Trident/Active\"",
    "data/composers/trident.json — per-file player tags for all 150 of Trident's catalogued tunes",
    "CSDb scener profile (Adam Dunkels / Trident, groups incl. Active, Fairlight, Triad, etc.): https://csdb.dk/scener/?id=1055",
    "CSDb release, Trident Music Collection #3 by Active (1997): https://csdb.dk/release/?id=62333",
    "CSDb SID entries sampled for PSID header addresses: https://csdb.dk/sid/?id=28709 (Allebasi, 1996 Active), https://csdb.dk/sid/?id=28710 (Anaesthetics, 1997 Active)",
    "sidid.nfo (SIDId project, upstream source of the local sidid.json import): https://github.com/cadaver/sidid/blob/master/sidid.nfo"
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
itself (as distinct from the tunes that use it) was found.

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
per-composer file `data/composers/trident.json`, and three CSDb pages (the
scener profile, one music-collection release, and two individual SID entries
sampled for PSID header addresses).

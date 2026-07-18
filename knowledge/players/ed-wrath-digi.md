# Ed/Wrath Digi (player routine)

```json
{
  "id": "ed-wrath-digi",
  "name": "Ed/Wrath Digi (player routine)",
  "aliases": ["Ed/Wrath_Digi", "Ed/Wrath_Digi_2"],
  "authors": ["Eddie Svärd (Ed)"],
  "released": "TODO: no explicit release year found — same undated situation as the sibling Ed/Wrath tag",
  "status": "stub",
  "platform": "TODO: no CSDb tool release, source repo, or standalone download found under this name — sibling tag to the already-carded knowledge/players/ed-wrath.md (status: stub), which explicitly excludes this tag from its aliases",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIBLING OF AN ALREADY-CARDED TAG, DELIBERATELY NOT MERGED: knowledge/players/ed-wrath.md (status: stub, 69 files, the plain 'Ed/Wrath' tag) explicitly flags this exact tag in its own quirks: '\"Ed/Wrath_Digi\" (1 file) and \"Ed/Wrath_Digi_2\" (2 files) are SEPARATE SIDId/Player-ID signatures from \"Ed/Wrath\"... NOT consolidated onto this card's aliases despite the shared name/author/composer-exclusive usage — no source confirms they share code with the main routine, only that Eddie Svärd made both.' This card gives Eddie Svärd's digi routine its own record and folds in BOTH its Player-ID signatures as aliases — 'Ed/Wrath_Digi' (1 file) and 'Ed/Wrath_Digi_2' (2 files) — as V1/V2 of the same author's same-purpose digi variant (3 files total). They are kept together here, and kept OUT of the main 'Ed/Wrath' card (ed-wrath.md), which documents a distinct signature with 69 files; no source confirms any of the three share code, only that Eddie Svärd made them all.",
    "THE ONE FILE: 'Compotune' (data/composers/ed.json, CSDb sid id 11930), authored by Eddie Svärd (Ed) alone — matching the 100% single-composer concentration already established for his other tags. 'Compotune' as a title is a generic placeholder name common for scene-competition entries, not itself informative about the routine's purpose.",
    "SIDId's sidid.nfo entry for 'Ed/Wrath_Digi' (data/sidid.json byTag) carries only an AUTHOR line — 'Eddie Svärd (Ed)' — no NAME, RELEASED, REFERENCE, or COMMENT field, identical in thinness to the plain 'Ed/Wrath' tag's own SIDId record (per ed-wrath.md).",
    "PER THIS KB'S CORE RULE: no source found confirms actual sample/digi playback technique for this specific tag — the '_Digi' suffix is SIDId/Player-ID naming convention only here, not a verified claim about the routine's mechanism."
  ],
  "sources": [
    "Local dataset: data/composers/ed.json — 1 file tagged Ed/Wrath_Digi ('Compotune', csdb sid id 11930), author Eddie Svärd (Ed); see knowledge/COVERAGE.md row #62 (Ed/Wrath_Digi + Ed/Wrath_Digi_2 combined, 3 files total across the two raw tags)",
    "data/sidid.json byTag['Ed/Wrath_Digi']: author 'Eddie Svärd (Ed)', no other fields",
    "knowledge/players/ed-wrath.md (status: stub) — cited for the explicit prior flag of this tag as a distinct, uncarded sibling signature; not edited by this card",
    "SIDId project source (raw sidid.nfo, upstream of the cached copy): https://github.com/cadaver/sidid/blob/master/sidid.nfo"
  ]
}
```

## Overview

`Ed/Wrath_Digi` is a Player-ID signature distinct from the plain `Ed/Wrath`
tag (see `knowledge/players/ed-wrath.md`, `status: stub`, 69 files, which
explicitly names this tag as an uncarded sibling and declines to merge it).
Locally it covers 3 files (V1 'Compotune' + 2 under the V2 signature), all authored by Swedish
demoscener **Eddie Svärd ("Ed")** of Wrath Designs, matching the 100%
single-composer concentration already established for his other tags. Both
Player-ID signatures of his digi routine — `Ed/Wrath_Digi` (V1, 1 file) and
`Ed/Wrath_Digi_2` (V2, 2 files) — are folded in here as aliases.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this card fulfills a TODO explicitly
raised by the sibling `ed-wrath.md` card rather than being an independent
discovery, and — per this KB's core rule — no source confirms an actual
sample/digi playback mechanism for this tag; the name is treated as a bare
Player-ID label only.

## Disassembly notes

None performed. No public source or disassembly was located; all Tier 3
fields are `TODO`, not guessed.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(authorship, 3-file usage across the V1/V2 signatures, the thin SIDId
author-only record). No runtime behaviour has been confirmed or reconstructed.

## Sources

See the `sources` array — local dataset aggregation, the cached SIDId record,
the upstream `cadaver/sidid` repo, and the sibling `ed-wrath.md` card (cited,
not edited).

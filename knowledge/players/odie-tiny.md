# Odie_tiny

```json
{
  "id": "odie-tiny",
  "name": "Odie_tiny",
  "aliases": ["Odie_tiny"],
  "authors": ["Sean Connolly (Odie)"],
  "released": "TODO: earliest locally-tagged file dated 1988 ('4k Digi Competition Entry'); no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: filename evidence ('4k Digi Competition Entry', '4k Party 2') suggests a small, size-constrained routine for 4k intro/demo competitions, distinct from this same author's later formally-published editor EMS/Odie (see knowledge/players/ems-odie.md) and his other tag 'Odie/Cosine' (knowledge/players/odie-cosine.md)",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId's entry for this tag has only an AUTHOR field ('Sean Connolly (Odie)') — no NAME, reference, or comment, matching the pattern of this same author's OTHER unpublished tag 'Odie/Cosine' (already carded: knowledge/players/odie-cosine.md).",
    "THIS IS A SEPARATE, THIRD SIDId SIGNATURE by the same author, alongside the already-carded 'EMS/Odie' (formally published editor, CSDb release 4649, 1997 — knowledge/players/ems-odie.md) and 'Odie/Cosine' (personal pre-editor routine, 1988-1991 — knowledge/players/odie-cosine.md, which explicitly flagged 'Odie_tiny' as an out-of-scope sibling tag needing its own card). No `edges` relationship is asserted between any of these three — no source states a direct code-sharing/derivation link, only shared authorship, per this project's rule against inferring edges from shared authorship alone.",
    "Filenames ('4k Digi Competition Entry', '4k Party 2', 'Wild One') suggest this specific tag was used for size-constrained (4k) intro/demo-competition entries specifically — a plausible reason for a distinct, smaller routine from his general-purpose 'Odie/Cosine' tag of the same era.",
    "All 3 locally-tagged files are by Sean Connolly himself — single-composer concentration, consistent with a personal competition-specific routine."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Odie_tiny'], author only)",
    "Sibling card (same author, explicitly notes 'Odie_tiny' as out of scope there): knowledge/players/odie-cosine.md",
    "Sibling card (same author's later published editor): knowledge/players/ems-odie.md",
    "Local dataset: 3 files tagged Odie_tiny, 1 composer (Sean Connolly) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Odie_tiny` is a third, distinct SIDId signature by **Sean Connolly**
("Odie") of Cosine/Sonix Systems (UK) — alongside the already-carded
"Odie/Cosine" (personal pre-editor routine) and "EMS/Odie" (his later
formally-published editor). SIDId gives author only, no name or reference.
Filenames suggest this specific tag was used for 4k-competition intro/demo
entries. All 3 locally-tagged files are by Connolly himself. No `edges`
relationship is recorded to the sibling cards — shared authorship alone is
not evidence of shared code per this project's rules.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is the third of three
distinct SIDId tags by the same author now surfaced in this KB, all kept
separate per the "no edge without direct evidence" rule; (2) filename
evidence (4k competition entries) suggests a size-constrained purpose
distinct from the general "Odie/Cosine" tag; (3) single-composer
concentration.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO.

## Verification

Not verified. Seeded from `data/sidid.json` and `data/composers/*.json`,
cross-referenced against the two sibling cards already in this KB.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the two sibling cards, and the
local composer aggregation.

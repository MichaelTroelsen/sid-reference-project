# Rotteroy_tiny (player routine)

```json
{
  "id": "rotteroy-tiny",
  "name": "Rotteroy_tiny (player routine)",
  "aliases": ["Rotteroy_tiny"],
  "authors": ["Roy Johan Widding (Rotteroy) of Megastyle"],
  "released": "TODO: no RELEASED/REFERENCE field; data/sidid.json has no entry for this tag at all",
  "status": "stub",
  "platform": "TODO: no CSDb tool release or source repo found. The '_tiny' suffix and the composer's own size-limited productions (see quirks) suggest a compact routine used for small intros, but this is inferred from usage, not a sourced fact.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NO SIDId ENTRY: data/sidid.json has no byTag record for 'Rotteroy_tiny' — identity here rests entirely on the tag name and local composer credits, not a fingerprint database author line.",
    "3 of 5 locally-tagged files are by Widding_Roy_Johan himself ('City Bomber 4k', 'Kung Poo Fighter', 'Panic in the Bank' — all CSDb-titled as small/compo productions consistent with the '_tiny' suffix), the other 2 by Drumtex ('Lumberjack') and Toy (credited author 'Roy Fielding (Roysterini)', csdb id 61265, 'BrumBrum'). Roy Johan Widding's own handle is 'Rotteroy' (confirmed: CSDb/Demozoo, Norwegian scener, group Megastyle, active since 1986) — so this is predominantly a self-authored routine that spread to 2 other composers.",
    "SIBLING TAG ALREADY CARDED: composer Drumtex (Vidar Bang) and Widding_Roy_Johan also share a DIFFERENT SIDId-tagged signature, plain 'Drumtex' (knowledge/players/drumtex.md, 9 files: 7 by Drumtex, 2 by Widding_Roy_Johan) — that card notes both are members of the same group (Megastyle Inc.) as a plausible, unconfirmed reason for shared signatures. This tag, 'Rotteroy_tiny', is the converse case: predominantly Widding's own tag, with Drumtex as a minority user. No source proves the two tags ('Drumtex' and 'Rotteroy_tiny') are the same underlying code — they are recorded as distinct SIDId signatures.",
    "Roy Johan Widding (Rotteroy) is independently well-documented: born 1972, active on the C64 scene since 1986, contributes music/graphics to the Norwegian group/studio Megastyle (game ports such as 'Bruce Lee: Return of Fury', 'SNAFU '64'), per Demozoo and itch.io listings.",
    "The third composer, 'Toy', is locally credited as author 'Roy Fielding (Roysterini)' for 'BrumBrum' (csdb id 61265) — a different real name/handle from Rotteroy despite the similar-sounding folder grouping; no group-membership evidence found connecting Roysterini to Megastyle."
  ],
  "sources": [
    "data/sidid.json: no entry for 'Rotteroy_tiny' (checked, absent)",
    "Local dataset: data/composers/drumtex.json, toy.json, widding-roy-johan.json (or equivalent) — 5 files tagged 'Rotteroy_tiny' across 3 composers; see knowledge/COVERAGE.md row #24 (5 files)",
    "knowledge/players/drumtex.md (status: stub) — sibling card documenting the same two composers (Drumtex, Widding_Roy_Johan) sharing a different tag ('Drumtex'); cited for corroborating context, not edited",
    "Demozoo scener profile for Roy Johan Widding ('Rotteroy', Megastyle): https://demozoo.org/sceners/59230/",
    "itch.io — Kung Poo Fighter C64 4Kb by Roysterini: https://roysterini.itch.io/kung-poo-fighter-c64",
    "GamesThatWerent — Lumberjack Deluxe (C64), 2018 Megastyle: https://www.gamesthatwerent.com/gtw64/lumberjack-deluxe/"
  ]
}
```

## Overview

`Rotteroy_tiny` is a locally-observed SIDId signature (no entry exists in the
project's cached `sidid.json`) that spans **5 files across 3 composers**:
predominantly **Roy Johan Widding ("Rotteroy")**, a Norwegian scener active
since 1986 in the group **Megastyle** (3 of 5 files, all small/compo-scale
productions consistent with the "_tiny" suffix), plus Vidar Bang ("Drumtex",
1 file) and Roy Fielding ("Roysterini", 1 file, locally grouped under composer
folder "Toy"). Notably, Widding and Drumtex also share a *different*,
already-carded tag (`Drumtex`, see `knowledge/players/drumtex.md`) — the two
tags are recorded as distinct signatures, with no source proving shared code
between them.

## Quirks & gotchas

See the `quirks` array. Load-bearing: no SIDId fingerprint entry exists for
this tag at all (identity rests on local composer credits only); and the
overlap with the already-carded `Drumtex` tag on two of the same composers is
flagged but not asserted as an edge.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source, tool release,
or disassembly located.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from local composer-file aggregation and Demozoo/itch.io provenance research.
No SIDId corroboration exists for this tag.

## Sources

See the `sources` array — local composer-file aggregation, the sibling
`drumtex.md` card (cited, not edited), and Demozoo/itch.io/GamesThatWerent
provenance pages for Rotteroy/Megastyle.

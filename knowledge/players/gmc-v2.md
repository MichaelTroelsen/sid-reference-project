# GMC V2.0 (Game Music Creator, Superiors build)

```json
{
  "id": "gmc-v2",
  "name": "GMC V2.0 (Game Music Creator, Superiors build)",
  "aliases": ["GMC_V2.0/Superiors"],
  "authors": ["Balázs Farkas (Brian) / Graffity"],
  "released": "TODO: year — no CSDb release literally titled 'V2.0' was found; see quirks",
  "status": "stub",
  "platform": "Native C64 music editor + replay (Graffity lineage). Closed scene tool — same family as GMC/DMC.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
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
    "derives_from": ["gmc"],
    "successor_of": ["gmc"],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId gives 'GMC_V2.0/Superiors' the identical NAME ('Game Music Creator System') and AUTHOR ('Balazs Farkas (Brian)') fields as 'GMC/Superiors' (the carded V1.0, see gmc.md), differing only by the version suffix and lacking any RELEASED/REFERENCE fields — direct evidence this is a later revision of the same author's tool, not a different tool. That is the sole basis for the derives_from/successor_of edge to gmc; do not read more into it.",
    "No CSDb release literally titled 'V2.0' was found. Two other GMC releases ARE catalogued by the same author/group: 'GMC V1.0' (https://csdb.dk/release/?id=7268, Graffity, 8 Dec 1990) and 'Superiors Game Music Creator System V1.6' (https://csdb.dk/release/?id=46470, credited to 'Brian of Graffity and Tomcat groups'). Whether the SIDId 'V2.0' signature corresponds to an internal build number inside the V1.6 codebase, a separate never-catalogued release, or is simply how SIDId's pattern-matcher labeled a binary variant is UNCONFIRMED — do not assume it maps to either catalogued release.",
    "data/players.json's curated 'Game Music Creator' entry (search tag 'gmc/superiors', developer 'Brian ++', years 1990-1992) explicitly says 'Brian of Graffity coded version 1.0 and 1.6' — it does not mention a V2.0 at all, reinforcing that V2.0 is not a separately documented/curated release.",
    "Small footprint in this collection: 9 files across 4 composers (Buddha, NecroPolo, Vincenzo, Wacek) — versus 428 files for the V1.0 tag (see knowledge/players/gmc.md). Too few/concentrated to call a widely-published tool version on its own; it rides on GMC's broader adoption.",
    "GMC (the family) is itself the direct predecessor of DMC (Demo Music Creator), same author Brian/Graffity — see gmc.md and dmc.md for that documented lineage. Whether this specific V2.0 variant sits before or after the GMC-to-DMC transition is unresearched.",
    "Replay internals (load address, ZP, init/play, data format, effect set) are entirely unknown for every GMC version — no public source, format spec, or disassembly was found. Best RE path, if pursued: disassemble one of the 9 GMC_V2.0-tagged .sid files and diff its register trace against a GMC V1.0 trace (gmc.md already has one, taken 2026-07-13) to see whether the two share init/play addresses or code."
  ],
  "sources": [
    "SIDId sidid.nfo entries 'GMC/Superiors' and 'GMC_V2.0/Superiors' (name/author match, no reference for V2.0): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb GMC V1.0: https://csdb.dk/release/?id=7268",
    "CSDb 'Superiors Game Music Creator System V1.6': https://csdb.dk/release/?id=46470",
    "data/players.json curated 'Game Music Creator' entry (developer 'Brian ++', 1990-1992, covers V1.0/V1.6 only) — local dataset from the DeepSID players API",
    "Local dataset: 9 files tagged GMC_V2.0/Superiors across 4 composers (aggregated from data/composers/*.json)",
    "Sibling cards: knowledge/players/gmc.md (V1.0, carries the CSDb/TND64 GMC->DMC lineage sourcing), knowledge/players/dmc.md (the successor tool)"
  ]
}
```

## Overview

GMC V2.0 is a rare SIDId-only variant of **GMC (Game Music Creator)**, the
native C64 music editor by **Brian (Balázs Farkas) of Graffity** that predates
[DMC](dmc.md). SIDId's `GMC_V2.0/Superiors` signature shares the exact same
`NAME`/`AUTHOR` fields as the carded V1.0 tag (`GMC/Superiors`, see
[gmc.md](gmc.md)) but carries no CSDb reference of its own, and no CSDb release
literally titled "V2.0" could be found — only V1.0 (1990) and a "V1.6"
(credited to Brian of Graffity/Tomcat) are catalogued. In this collection it is
a minor tag: **9 files across 4 composers** (Buddha, NecroPolo, Vincenzo,
Wacek), a fraction of V1.0's 428 files. It is carded separately from `gmc.md`
because `knowledge/COVERAGE.md`'s tag grouping keeps the two apart, and because
the version-vs-release mismatch is itself a fact worth recording rather than
silently merging.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **the "V2.0" tag has no matching CSDb
release** — it is not known which, if any, catalogued GMC build it corresponds
to; the **derives_from/successor_of edge to `gmc` rests only on SIDId's
identical name/author fields**, not on any confirmed code or binary
comparison; and **all runtime internals are `TODO`** for every GMC version,
carted or not.

## Disassembly notes

None done here. No public source, format spec, or prior disassembly exists for
any GMC version (see gmc.md). If pursued, the highest-value first step is
comparing a GMC_V2.0-tagged `.sid`'s register trace against gmc.md's existing
V1.0 trace (load `$1000`, init `$18EA`, play `$14EA` on that one file — entry
points are per-file, not guaranteed to match here).

## Verification

**Not verified, not traced.** This card is Tier 1 (local dataset) + Tier 2
(CSDb/SIDId provenance) only — no `.sid` file for this tag was traced through
`sidm2-siddump`, and no disassembly was attempted. `status: stub` is honest:
every runtime field is `TODO` and even the `edges` claim rests on indirect
(name/author-match) evidence rather than a source header or code comparison.

## Sources

See the `sources` array — SIDId's sidid.nfo, the two related CSDb GMC
releases (V1.0 id 7268, "V1.6" id 46470), the cached DeepSID player entry in
`data/players.json`, and the sibling `gmc.md`/`dmc.md` cards for the wider
GMC→DMC lineage.

# Llamasoft / James Lisney

```json
{
  "id": "llamasoft-james-lisney",
  "name": "Llamasoft / James Lisney",
  "aliases": ["Llamasoft/James_Lisney"],
  "authors": ["James Lisney"],
  "released": "Not a single tool release; per-game routine used 1983-1986. Census of all 4 tagged files' own CSDb `Released` fields: Hover Bovver 1983, Revenge of the Mutant Camels 1984, Sheep in Space 1984, Mama Llama 1986 (all 'Llamasoft')",
  "status": "stub",
  "platform": "Native C64, in-house game-embedded music routine (not a standalone editor/tool) — James Lisney arranged/scored music for these specific Jeff Minter/Llamasoft C64 titles only; no dedicated CSDb tool/editor release or public source found under this name after a direct search",
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
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The tag combines a publisher (Llamasoft, Jeff Minter's studio) and composer (James Lisney). Local composer profile confirms James Lisney's affiliation field is literally 'Llamasoft' (data/composers/james-lisney.json). SIDId's sidid.nfo has NO entry for 'Llamasoft/James_Lisney' (checked) — Player-ID-only signature.",
    "DISTINCT from the separately-tagged, separately-carded 'Jeff_Minter' tag (knowledge/players/jeff-minter.md) — Jeff Minter is Llamasoft's founder and is credited separately (and only) on 'Syncro', while James Lisney is credited on 4 different Llamasoft titles here. No evidence the two tags share a routine; both are in-house Llamasoft-affiliated but attributed to different named composers by Player-ID.",
    "All 4 locally tagged files are classic Llamasoft C64 titles: Hover Bovver, Mama Llama, Revenge of the Mutant Camels, Sheep in Space — all by James Lisney, England, CSDb scener 14023.",
    "Full census (all 4/4 tagged files) of each SID's own CSDb `Released` field, not a title-year or UsedIn-release-year guess: Hover Bovver 1983 Llamasoft (csdb.dk/sid/?id=17910), Revenge of the Mutant Camels 1984 Llamasoft (id=17912), Sheep in Space 1984 Llamasoft (id=17913), Mama Llama 1986 Llamasoft (id=17911). Hover Bovver's `UsedIn` is a 1995 SIDBurners 2 compilation, correctly NOT used as the tune's own release year.",
    "This is the same James Lisney later known as a British concert pianist (b. 1962); his Wikipedia page independently confirms 'In the early 1980s he arranged the music for several of Jeff Minter's games for the Commodore 64, including Hover Bovver, Revenge of the Mutant Camels, and Sheep in Space' — matching (not contradicting) the CSDb attribution, and naming only these specific games, not a general-purpose tool.",
    "Direct web search (WebSearch, incl. csdb.dk-scoped and Lemon64-adjacent queries) for a dedicated CSDb release/tool page, source code, or format documentation for this routine found none — only the 4 individual CSDb SID entries above exist. Treat 'no dedicated tool release' as searched-and-absent, not merely unresearched."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Llamasoft/James_Lisney': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local composer profile confirming affiliation 'Llamasoft': data/composers/james-lisney.json",
    "CSDb scener James Lisney (England, Llamasoft): https://csdb.dk/scener/?id=14023",
    "Local dataset: 4 files tagged Llamasoft/James_Lisney, all by James Lisney — Hover Bovver, Mama Llama, Revenge of the Mutant Camels, Sheep in Space",
    "CSDb webservice, type=sid, censused all 4 tagged files' own Released fields: https://csdb.dk/sid/?id=17910 (Hover Bovver, 1983), https://csdb.dk/sid/?id=17911 (Mama Llama, 1986), https://csdb.dk/sid/?id=17912 (Revenge of the Mutant Camels, 1984), https://csdb.dk/sid/?id=17913 (Sheep in Space, 1984)",
    "James Lisney (pianist) Wikipedia bio, confirms the C64/Llamasoft game credits: https://en.wikipedia.org/wiki/James_Lisney",
    "WebSearch sweep (2026-07-31) for a dedicated CSDb tool/release page or source/documentation under this name or 'Llamasoft' + 'James Lisney' + music driver/routine: no results beyond the 4 individual SID entries above"
  ]
}
```

## Overview

`Llamasoft/James_Lisney` is a raw Player-ID tag credited to composer
**James Lisney**, whose affiliation is recorded locally as **Llamasoft**
(Jeff Minter's UK games studio). All 4 locally-tagged files (a full census,
not a sample) are classic Llamasoft C64 titles: Hover Bovver (1983),
Revenge of the Mutant Camels (1984), Sheep in Space (1984), and Mama Llama
(1986) — years per each SID's own CSDb `Released` field. James Lisney is
independently confirmed (by his own Wikipedia biography as a concert
pianist) to have arranged music for exactly these Jeff Minter/Llamasoft
C64 games in the early 1980s, not a broader tool. Concentration: this is a
single-composer, four-file tag — no evidence of use beyond Lisney's own
Llamasoft game work. SIDId has no entry for this exact tag; a direct
search found no dedicated CSDb tool/release page, source code, or format
documentation, and none of the 4 games shares this routine with a
standalone editor.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this tag is distinct from the
separately-tagged `Jeff_Minter` tag (also carded) — different named
composer, no evidence of a shared routine between the two despite both
being Llamasoft-affiliated.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/james-lisney.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), local composer
profile, CSDb scener page, and the local file aggregation.

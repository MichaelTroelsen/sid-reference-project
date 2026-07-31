# Visac_tiny

```json
{
  "id": "visac-tiny",
  "name": "Visac_tiny",
  "aliases": ["Visac_tiny"],
  "authors": ["Josef Souček (Visac)"],
  "released": "No dedicated tool release found. Attested usage in all 6 tagged files spans 2009-03-15 (Microture, PCH & Visac) to 2016-03-19 (Solneni, Visac) per each file's own CSDb sid-entry Released field (csdb.dk webservice type=sid, ids 39927/42922/48480/52950/52951/53073) — a usage span, not a tool release date.",
  "status": "stub",
  "platform": "Native C64. Every one of the 6 tagged files is the music in a 'C64 1K Intro' competition entry at the Forever demoparty (Trenčín, Slovakia), 2009-2016 (CSDb webservice, same sid-entry ids as above) — i.e. this is a size-budget-constrained embedded routine written for the 1K-intro category, not a standalone distributed editor/tool. No dedicated CSDb release page, source repo, Codebase64 article, or Lemon64/Forum64 thread found under 'Visac_tiny' or 'Visac' + music routine (searched both, 2026-07-31).",
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
    "SIDId's sidid.nfo has NO entry for 'Visac_tiny' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "Named after Visac (Josef Souček, Czech Republic, data/composers/visac.json), but usage is NOT exclusive to him: 6 files span 3 composers — PCH (Petr Chlud, Czech Republic, 3 files: '1k Marble', 'Microture', 'Oje Balstrom'), Secret Top (Rastislav Smutný / 'Top Secret', Slovakia, 2 files: \"LHS's Olympics\", 'V-GAS'), and Visac himself (1 file: 'Solneni'). All three composers are geographically clustered in the Czech/Slovak scene (per data/composers/pch.json, secret-top.json, visac.json profiles) — reads as a small routine shared within a nearby regional circle, similar to the 'concentrated but not exclusive' pattern seen in virtuoso.md, rather than a purely private tool used only by its namesake.",
    "Census of all 6 tagged files (csdb.dk webservice, type=sid) shows every single one is the music for a 'C64 1K Intro' competition release at the Forever demoparty (Trenčín/Horná Súča, Slovakia): Microture 2009-03-15 (id 76823), 1k Marble 2010-03-20 (id 89883), Oje Balstrom 2013-03-17 (id 116844), V-GAS 2014-03-16 (id 129670), LHS's Olympics 2014-03-16 (id 129671), Solneni 2016-03-19 (id 146471). This is a strong, evidence-based explanation for the '_tiny' name: a size-budget music routine purpose-built for the 1K-intro compo category, not a generic personal tracker signature.",
    "Visac's CSDb scener page (csdb.dk/scener/?id=1080) lists a further 1K-intro production, 'Microture 2' (2017), crediting him as musician — it is NOT among the 6 locally tagged Visac_tiny files, so it either uses a different/updated player or is untagged in this dataset. Not counted in this card's census; flagged for a future pass.",
    "Searched Lemon64 (lemon64.com) and Forum64 (forum64.de) for a dedicated thread on this routine ('Visac music routine', 'Visac Musikroutine 1K Intro') — no matching thread found on either forum (2026-07-31). No Codebase64 article or public source repo found either.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Visac_tiny': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/visac.json (profile: full_name Josef Souček, handles Visac, country Czech Republic, csdb_id 1080)",
    "data/composers/pch.json (profile: full_name Petr Chlud, country Czech Republic, csdb_id 3538)",
    "data/composers/secret-top.json (profile: full_name Rastislav Smutný, handles 'Top Secret', country Slovakia, csdb_id 1046)",
    "Local dataset: 6 files tagged Visac_tiny across 3 composers — PCH (3), Secret Top (2), Visac (1) — see data/composers/*.json aggregation",
    "CSDb webservice (https://csdb.dk/webservice/, type=sid) queried for all 6 tagged files' own sid-entry records (Released field + UsedIn.Release), ids 39927 (Microture), 42922 (1k Marble), 48480 (Oje Balstrom), 52950 (V-GAS), 52951 (LHS's Olympics), 53073 (Solneni) — every one resolves to a 'C64 1K Intro' compo release at the Forever demoparty, Slovakia",
    "CSDb scener page for Visac: https://csdb.dk/scener/?id=1080 (groups: Cult, The IDE64 project; lists a 2017 'Microture 2' 1K intro not present in the local Visac_tiny tag set)",
    "Web search of lemon64.com and forum64.de (2026-07-31) for 'Visac' + music routine terms — no dedicated thread found on either forum"
  ]
}
```

## Overview

Visac_tiny is the Player-ID tag for a small C64 replay routine named after
**Josef Souček**, handle **Visac** (Czech Republic). Its 6 locally tagged
files span **3 composers** — PCH (3), Secret Top (2), and Visac himself
(1) — all geographically clustered in the Czech/Slovak scene. A full census
of all 6 files via the CSDb webservice shows every single one is the music
for a **"C64 1K Intro" competition entry at the Forever demoparty**
(Trenčín/Horná Súča, Slovakia), 2009-2016 — strong evidence this is a
size-budget music routine built for the 1K-intro compo category rather than
a general-purpose personal tracker signature. SIDId has no entry for this
tag, and no dedicated CSDb tool page, source repo, Codebase64 article, or
Lemon64/Forum64 thread was found — consistent with an informally shared,
never separately released/documented routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has no entry for this exact
tag; (2) usage spans 3 nearby Czech/Slovak composers, not just its
namesake, suggesting informal regional sharing rather than a purely private
routine; (3) every one of the 6 tagged files is a Forever-demoparty 1K
Intro compo entry (2009-2016), which plausibly explains the "_tiny" name
as a size-coding artifact rather than a generic minimal/personal label;
(4) a 2017 'Microture 2' 1K intro by Visac exists on CSDb but is not among
the tagged files, so it may use a different/newer player — not covered by
this card's census.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a full census of all 6
tagged files' own CSDb sid-entry records (webservice, `type=sid`) and a web
provenance sweep (CSDb scener page, Lemon64, Forum64). No disassembly done.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), local composer
profiles for PCH, Secret Top, and Visac, CSDb webservice sid-entry records
for all 6 tagged files, Visac's CSDb scener page, and a Lemon64/Forum64
search sweep that found no dedicated thread.

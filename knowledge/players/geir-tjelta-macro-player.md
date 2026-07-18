# Macro Player (Geir Tjelta)

```json
{
  "id": "geir-tjelta-macro-player",
  "name": "Macro Player (Geir Tjelta)",
  "aliases": ["Geir_Tjelta/MacroPlay2", "Geir_Tjelta/MacroPlay1"],
  "authors": ["Geir Tjelta (GT)"],
  "released": "2009 (per SIDId)",
  "status": "stub",
  "platform": "TODO: a further, distinct C64 music tool by Geir Tjelta ('GT') — following his earlier SID Systems (1990, [[sidsys]]), SID Duzz'It (1992, [[sidduzzit]]), the 'Echo' realtime-delay technique (2009, [[geir-tjelta-echo]]), and a much later Comptech-X (~2019, [[comptech-x]]). Platform specifics (editor+player vs. player-only, source availability) unconfirmed in this pass.",
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
    "SIDId gives a NAME+author+year entry: name 'Macro Player', author Geir Tjelta, released 2009 (deepsid_dl/sidid.nfo) — no CSDb reference or comment field.",
    "NOT A MERGE TARGET for the other Tjelta cards despite same-author overlap: SIDId's 2009 date for 'Macro Player' coincides with the year of Tjelta's separately-documented 'Echo' realtime-delay TECHNIQUE (also 2009, per CHIPFLIP, carded as knowledge/players/geir-tjelta-echo.md) — but Echo explicitly has NO SIDId entry at all, while this tag DOES, and the names differ ('Macro Player' vs. an undocumented, unnamed echo trick). No evidence found that these are the same routine; treat as two separate 2009 Tjelta artifacts.",
    "Also distinct from SID Systems (1990, editor+player, [[sidsys]]) and Comptech-X (~2019, per SIDId 'probably private, for X-Ample Architectures members', [[comptech-x]]) — different names, different years, different SIDId descriptions. This is Geir Tjelta's FOURTH documented tool/technique in this project's cards.",
    "Single locally tagged file: 'Pål sine høner (tune 2)', by Geir Tjelta himself, Norway (CSDb scener 1266) — a personal-routine-scale signature so far, though the SIDId NAME field ('Macro Player') suggests it may have been conceived as a more general tool."
  ],
  "sources": [
    "SIDId sidid.nfo (name 'Macro Player', author, 2009): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Geir Tjelta (Norway): https://csdb.dk/scener/?id=1266",
    "Existing KB cards for Tjelta's other tools, cross-checked to avoid false merge: knowledge/players/sidsys.md, knowledge/players/sidduzzit.md, knowledge/players/geir-tjelta-echo.md, knowledge/players/comptech-x.md",
    "Local dataset: 1 file tagged Geir_Tjelta/MacroPlay2 — 'Pål sine høner (tune 2)', by Geir Tjelta"
  ]
}
```

## Overview

"Macro Player" is a C64 tool by **Geir Tjelta** ("GT"), per a sourced SIDId
entry (name + author + 2009 release date). It is the fourth Geir Tjelta
tool/technique now carded in this knowledge base, alongside SID Systems
(1990), SID Duzz'It (1992), the 2009 "Echo" realtime-delay technique, and
the much later Comptech-X (~2019) — all distinct, per their differing
SIDId names/dates/descriptions. Only 1 locally tagged file, by Tjelta
himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this shares its 2009 year with
Tjelta's separately-carded "Echo" technique, but the two are NOT the same
thing — Echo has no SIDId entry at all, while this tag does, under a
different name ("Macro Player"). No evidence merges this with any of
Tjelta's other three documented tools.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/geir-tjelta.json`, `data/sidid.json`) plus cross-reference
against sibling Tjelta cards. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page, sibling KB
cards, and the local file aggregation.

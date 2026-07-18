# TGS_Digi

```json
{
  "id": "tgs-digi",
  "name": "TGS_Digi",
  "aliases": ["TGS_Digi"],
  "authors": ["Gábor Gáspár (The Galactic Stranger)"],
  "released": "TODO: no explicit tool-release date found; earliest locally-tagged/corroborated use is 1989 ('Future Megademo')",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine embedded in TGS's own tracks, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId (data/sidid.json) has an entry: author 'Gábor Gáspár (The Galactic Stranger)', comment 'Probably derived from C64_Speech_System'. This is a SPECULATIVE claim by the SIDId author, not a sourced derivation with hard evidence — per the already-carded [[c64-speech-system]] card (which documents this exact same SIDId comment appearing on THREE separate tags: MrWarp_Digi, (Mahoney_Digi), and TGS_Digi), it is deliberately recorded here as context ONLY and NOT asserted as a graph `edges` relationship, consistent with that precedent and this project's no-similar-names-as-evidence rule.",
    "Real corroborating evidence for the 'digi' label independent of the speculative C64_Speech_System note: CSDb credits Gábor Gáspár (TGS) with a 'Sampling' role (alongside Code/Graphics/Charset) on 'Future Megademo' (1989) — and that exact title matches 2 of the 3 locally-tagged files ('Future Megademo (end)', 'Future Megademo (intro)'), a genuine file-level match, not just a plausible-sounding author link.",
    "3 files, 2 composers: Gabor Gaspar (2: both 'Future Megademo' parts) and Scrap (1: 'Fine Time') — Scrap is a separate, German scener (CSDb 1929) reusing TGS's routine, similar to the cross-composer pattern seen elsewhere in this batch (e.g. Toaster_Digi).",
    "'Future Megademo' (1989) was a multi-group collaboration (Genius, Cement Crew, Idler Company, Sector, Very Important Persons) per CSDb — TGS (Hungary) contributed Sampling/Code/Graphics/Charset to this cross-group production."
  ],
  "sources": [
    "data/sidid.json byTag: TGS_Digi — author 'Gábor Gáspár (The Galactic Stranger)', comment 'Probably derived from C64_Speech_System'",
    "knowledge/players/c64-speech-system.md — documents the same speculative SIDId comment on TGS_Digi/MrWarp_Digi/(Mahoney_Digi); NOT asserted as an edge here, same reasoning",
    "CSDb scener The Galactic Stranger (Hungary; 'Sampling' credit on 'Future Megademo', 1989, multi-group collaboration): https://csdb.dk/scener/?id=22677",
    "Local dataset: 3 files tagged TGS_Digi across 2 composers — Gabor Gaspar (2), Scrap (1) — data/composers/gabor-gaspar.json, scrap.json",
    "data/composers/gabor-gaspar.json (country Hungary, csdb id 22677), data/composers/scrap.json (country Germany, csdb id 1929)"
  ]
}
```

## Overview

TGS_Digi is the SIDId tag for a digi/sample-playback routine attributed to
**Gábor Gáspár**, handle **The Galactic Stranger (TGS)**, a Hungarian
scener. SIDId's entry names the author and adds a speculative comment,
"Probably derived from C64_Speech_System" — the same speculative claim SIDId
makes about two other unrelated tags (see [[c64-speech-system]]'s own
quirks), so it is recorded here as context only, not as a graph edge. It
appears in **3 files across 2 composers**: Gabor Gaspar himself (2, both
"Future Megademo" parts) and Scrap (1, "Fine Time"). Real corroboration
independent of the speculative comment: CSDb explicitly credits TGS with a
"Sampling" role on "Future Megademo" (1989) — a title match with 2 of the 3
locally-tagged files.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the "derived from C64 Speech
System" claim is speculative per SIDId's own author and is deliberately
**not** asserted as an `edges` relationship, following the precedent set on
the c64-speech-system card itself; (2) CSDb's "Sampling" credit on "Future
Megademo" is genuine, file-title-matching corroboration of the digi claim,
independent of that speculative note; (3) cross-composer usage (Scrap using
TGS's routine) mirrors a pattern seen elsewhere in this batch.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, the c64-speech-system card
(cross-referenced), CSDb scener page for The Galactic Stranger, and the
local composer aggregation.

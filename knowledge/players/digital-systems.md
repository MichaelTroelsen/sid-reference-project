# Digital_Systems

```json
{
  "id": "digital-systems",
  "name": "Digital_Systems",
  "aliases": ["Digital_Systems"],
  "authors": ["Harlequin (real name not disclosed on CSDb)"],
  "released": "TODO: no explicit tool-release date found in SIDId or CSDb",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine embedded in Harlequin's own tracks, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null). Everything here comes from this project's own composer aggregation plus CSDb's scener page for Harlequin.",
    "NO SAMPLING/DIGI ROLE CREDIT FOUND on Harlequin's CSDb scener page — checked directly; no release lists him with a 'Sampling' function or any credit mentioning digi/sample/digitizer work, and no separate CSDb tool/group called 'Digital Systems' was found either. Per this batch's core rule, the tag name alone is NOT treated as confirmation — recorded honestly as unconfirmed (TODO).",
    "3 files, 1 composer: Harlequin himself — 'Are You Paranoia Too?', 'Axel F', 'Natural Mystics Song 1'. A personal routine by usage pattern.",
    "Harlequin is Dutch, current groups Focus and Silicon Limited (since 1989), formerly Audial Arts/The Federation Against Megadeath/Sonical Dreams; CSDb lists him primarily as graphician/musician/organizer/diskmag editor, not a coder — slightly unusual for a tag presumed to be a self-written routine (worth a future disassembly check, TODO)."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"Digital_Systems\"",
    "CSDb scener Harlequin (Netherlands; groups Focus, Silicon Limited; no Sampling/digi credit found): https://csdb.dk/scener/?id=3934",
    "Local dataset: 3 files tagged Digital_Systems, 1 composer (Harlequin) — data/composers/harlequin.json",
    "data/composers/harlequin.json (profile country Netherlands, csdb id 3934)"
  ]
}
```

## Overview

Digital_Systems is a raw Player-ID tag attributed to **Harlequin**, a
Dutch scener (Focus, Silicon Limited; real name not disclosed on CSDb). It
appears in only **3 files, all by Harlequin himself** — a personal routine
by usage pattern. No SIDId entry exists for the tag, and no CSDb credit
was found corroborating an actual sampling/digi role — CSDb instead lists
Harlequin primarily as graphician/musician/organizer, not coder, which is
mildly unusual for a presumed self-written routine and left as an open
question.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry and no CSDb
'Sampling' credit — the digi/sample claim here rests only on the tag name
and is honestly left unconfirmed; (2) Harlequin's CSDb role profile
(graphician/musician, not coder) is a mild inconsistency worth a future
look if this card is ever escalated past stub.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId byTag (no entry), CSDb scener page for
Harlequin, and the local composer aggregation.

# Daw_Digi

```json
{
  "id": "daw-digi",
  "name": "Daw_Digi",
  "aliases": ["Daw_Digi"],
  "authors": ["David Fahlander (Daw)"],
  "released": "TODO: no explicit tool-release date found in SIDId or CSDb",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample routine embedded in Daw's own tracks, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId (data/sidid.json) has an entry for this tag with an AUTHOR line only — 'David Fahlander (Daw)' — no NAME, reference, or comment. The absence of a NAME field is a signal this was never packaged as a titled, released tool.",
    "NO SAMPLING/DIGI ROLE CREDIT FOUND on Daw's CSDb scener page — checked directly, and no release lists him with a 'Sampling' function or any credit mentioning digi/sample/digitizer work. Per this batch's core rule, the '_Digi' tag name alone is NOT treated as confirmation here — recorded honestly as unconfirmed (TODO) rather than inferred.",
    "3 files, 1 composer: Daw himself — 'Immortal (tune 3)', 'Jordgubbar (Bellman)', 'Lickpipe (tune 3)'. A personal routine by usage pattern.",
    "Daw is Swedish, member of Censor Design (1990-present) and formerly Triad (1990-1991) — NOT the same author as the already-carded 'Censor Digi' routine ([[censor-digi]]), which is Fredrik Ternell (Swallow) of the same group. Same group membership is not evidence of shared code; no merge asserted."
  ],
  "sources": [
    "data/sidid.json byTag: Daw_Digi — author 'David Fahlander (Daw)', no name/reference/comment",
    "CSDb scener Daw (Sweden; groups Censor Design, Triad; no Sampling/digi credit found): https://csdb.dk/scener/?id=440",
    "Local dataset: 3 files tagged Daw_Digi, 1 composer (Daw) — data/composers/daw.json",
    "data/composers/daw.json (profile country Sweden, csdb id 440)",
    "knowledge/players/censor-digi.md — cross-checked, different author (Swallow, not Daw), no merge evidence"
  ]
}
```

## Overview

Daw_Digi is the SIDId tag for a routine attributed to **David Fahlander**,
handle **Daw**, a Swedish scener (Censor Design, ex-Triad). SIDId's entry
carries only an `AUTHOR` line — no title/reference/comment. It appears in
only **3 files, all by Daw himself**. Unlike several sibling tags in this
batch, no CSDb credit corroborating an actual sampling/digi role was found
on Daw's own scener page — the sample-playback claim here rests on the tag
name alone and is therefore left unconfirmed rather than asserted.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId names the author but no
titled product; (2) **no CSDb 'Sampling' credit was found for Daw** —
honestly flagged as unconfirmed technique, per the batch's core rule that
a tag name is not evidence; (3) Daw shares a group (Censor Design) with the
already-carded [[censor-digi]] routine, but that is a different author
(Fredrik Ternell/Swallow) — no merge asserted.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus a CSDb scener page
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener page for Daw, the
local composer aggregation, and a cross-check against the censor-digi
card.

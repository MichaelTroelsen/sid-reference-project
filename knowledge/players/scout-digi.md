# Scout_Digi

```json
{
  "id": "scout-digi",
  "name": "Scout_Digi",
  "aliases": ["Scout_Digi"],
  "authors": ["Scout (Roland van Oorschot, per data/composers/scout.json profile full_name and DeepSID/HVSC composer records)"],
  "released": "1990 (no separate tool/driver release exists; this is the earliest of the 3 tagged files' own CSDb `Released` field, not a product version). Census of all 3 tagged files via CSDb sid webservice: 'Scout's House' (csdb sid id 38288) = '1990 Silicon Limited'; 'Rave da Scene (part 1)' (id 25637) and '(part 2)' (id 25638) = '1993 Silicon Limited'.",
  "status": "stub",
  "platform": "Native C64, in-house per-tune sampling/digi routine coded by Scout himself, not a distributable editor/tool. Confirmed by Scout's own CSDb release comments: on 'Scout's House' (release id 52826) he wrote 'USE AN ACTION/RETRO REPLAY TO LOAD!' (needs a freezer cartridge — non-standard loading), and on 'Rave Da Scene' (release id 7074) 'The 2nd part has to be loaded by hand coz I used a shitty loader' — both describe one-off, ad-hoc loading code rather than a reusable published tool.",
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
    "No SIDId entry exists for this tag (checked data/sidid.json byTag — null). Everything here comes from this project's own composer aggregation plus CSDb research for Scout.",
    "EXACT-TITLE, STRONG evidence for the 'digi' label: CSDb credits Scout with an explicit 'Code, Sampling' role on both 'Rave Da Scene' (release id 7074, 1993 Demo) and 'Scout's House' (release id 52826, 1990 Music) — direct title matches to all 3 locally-tagged files ('Rave da Scene (part 1)'/'(part 2)', 'Scout's House'). Verified via CSDb's XML webservice (type=release, ids 7074 and 52826), not just the scener page.",
    "3 files, 1 composer: Scout — 'Rave da Scene (part 1)', 'Rave da Scene (part 2)', \"Scout's House\". Census complete: all 3 tagged files' own CSDb `sid` records (ids 25637, 25638, 38288) were pulled individually.",
    "Author's own CSDb comments describe ad-hoc, non-reusable loading code for both releases — direct evidence this is a per-tune in-house routine, not a shared/versioned tool (see `platform`).",
    "Scout is Dutch (Roland van Oorschot), current group Silicon Limited (since ~1990-91, per group 606 memberstatus notes), formerly groups 2069/2070/1710; CSDb scener bio (id 3920) states he became a 'semi-professional electronic music producer' after quitting the C64 demoscene in 1993, consistent with a genuine sampling/production background."
  ],
  "sources": [
    "data/sidid.json byTag — confirmed no entry for \"Scout_Digi\"",
    "CSDb scener Scout: https://csdb.dk/scener/?id=3930",
    "CSDb XML webservice, type=sid, id=25637 ('Rave da Scene (part 1)', Released '1993 Silicon Limited'): https://csdb.dk/webservice/?type=sid&id=25637",
    "CSDb XML webservice, type=sid, id=25638 ('Rave da Scene (part 2)', Released '1993 Silicon Limited'): https://csdb.dk/webservice/?type=sid&id=25638",
    "CSDb XML webservice, type=sid, id=38288 (\"Scout's House\", Released '1990 Silicon Limited'): https://csdb.dk/webservice/?type=sid&id=38288",
    "CSDb XML webservice, type=release, id=7074 ('Rave Da Scene', 1993 Demo — Code+Sampling credit Scout, comment 'shitty loader'): https://csdb.dk/webservice/?type=release&id=7074",
    "CSDb XML webservice, type=release, id=52826 (\"Scout's House\", 1990 Music — Code+Sampling credit Scout, comment 'USE AN ACTION/RETRO REPLAY TO LOAD!'): https://csdb.dk/webservice/?type=release&id=52826",
    "Local dataset: 3 files tagged Scout_Digi, 1 composer (Scout) — data/composers/scout.json",
    "data/composers/scout.json (profile country Netherlands, csdb id 3930)"
  ]
}
```

## Overview

Scout_Digi is a raw Player-ID tag attributed to **Scout** (Roland van
Oorschot), a Dutch scener (Silicon Limited). It appears in only **3
files, all by Scout himself** — "Rave da Scene (part 1)"/"(part 2)" and
"Scout's House" — a census of all 3 was pulled individually from CSDb's
`sid` webservice. No SIDId entry exists, but this is one of the
strongest-corroborated tags in this batch: CSDb credits Scout with an
explicit "Code, Sampling" role on both releases containing the tagged
files ("Rave Da Scene", release 7074, 1993; "Scout's House", release
52826, 1990) — exact title matches to all 3 locally-tagged files. Scout's
own CSDb comments on both releases describe ad-hoc, one-off loaders
("shitty loader" / "USE AN ACTION/RETRO REPLAY TO LOAD!"), which is
direct authorial evidence this is an in-house per-tune sampling routine,
not a distributed editor/tool — hence no dedicated CSDb tool/release
entry exists for "Scout_Digi" itself and `csdb_release` stays `null`.
`released` records the earliest tagged file's own `Released` field
(1990), not a tool-version date — there is no tool version to date.

## Quirks & gotchas

See the `quirks` array. Load-bearing: all 3 of the locally-tagged files
match, by exact title, CSDb releases explicitly credited to Scout with a
"Sampling" role, and the author's own release comments independently
confirm ad-hoc, non-reusable loading code — an unusually direct level of
corroboration for this batch, where most tags rely only on author-name or
genre/era-level inference.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus CSDb `sid`/`release`/
`scener` webservice records researched for provenance. `status: stub` —
no runtime fact has been confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId byTag (no entry), CSDb `sid` records for
all 3 tagged files, CSDb `release` records for both containing releases
(with Scout's own comments), CSDb scener page for Scout, and the local
composer aggregation.

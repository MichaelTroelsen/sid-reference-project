# Mindcooler_2

```json
{
  "id": "mindcooler-2",
  "name": "Mindcooler_2",
  "aliases": ["Mindcooler_2"],
  "authors": ["Jens Björnhager (Mindcooler)"],
  "released": "TODO: no dedicated tool-release date — this is a personal/built-in replay routine, not a published tool with its own release. Census of both tagged files' own CSDb SID entries: Borderline Waltz released 2016-07-02 (CSDb release #149239, Edison 2016), Borderline Jitterbug released 2017-07-02 (CSDb release #157026, Edison 2017) — both are tune releases, not player releases (https://csdb.dk/webservice/?type=sid&id=52883, https://csdb.dk/webservice/?type=sid&id=54835)",
  "status": "stub",
  "platform": "Native C64, personal/built-in replay routine (not a distributed editor/tool). Both tagged files' DeepSID metadata record player_type 'Normal built-in' (data/composers/mindcooler.json). A CSDb site search for 'Mindcooler_2' returns zero results (no group/release/tool entry exists under this name): https://csdb.dk/search/?seinsel=all&search=Mindcooler_2",
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
    "SIDId's sidid.nfo has NO entry for 'Mindcooler_2' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "100% single-composer concentration: both locally tagged files ('Borderline Jitterbug', 'Borderline Waltz') belong to Mindcooler himself (data/composers/mindcooler.json).",
    "A DISTINCT, bare 'Mindcooler' tag (no '_2' suffix) is ALSO present in the local dataset, on 2 OTHER files by the same composer ('Acid Lindgren', 'MSP430G2202 Greatest Hits') — i.e. this composer has at least two differently-fingerprinted routines/builds. The bare 'Mindcooler' tag is NOT covered by this card and was not confirmed carded elsewhere as of this pass — flagged for a future pass, not claimed as done here.",
    "Composer profile: Jens Björnhager, handle Mindcooler, Sweden, born 1981-08-24, CSDb scener id 14259, freelance functions Coder/Graphician/Musician, member of Sys5 (data/composers/mindcooler.json; https://csdb.dk/webservice/?type=scener&id=14259).",
    "Both tagged files censused directly against CSDb's own SID-entry webservice records: Borderline Jitterbug (csdb_id 54835, LoadAddr=InitAddr=$080D/2061, released 2017-07-02 at Edison 2017) and Borderline Waltz (csdb_id 52883, LoadAddr=InitAddr=$080D/2061, released 2016-07-02 at Edison 2016). Both share the identical load/init address, consistent with (but not proof of) a shared built-in routine. PSID header metadata only — not a Tier 3 disassembly fact.",
    "CSDb site search for 'Mindcooler_2' returns zero results — no group, release, or tool/editor entry exists under this exact name: https://csdb.dk/search/?seinsel=all&search=Mindcooler_2",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Mindcooler_2': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/mindcooler.json (profile: full_name Jens Björnhager, handles Mindcooler, country Sweden, born 1981-08-24, csdb_id 14259) and its folder[] listing (shows both 'Mindcooler' and 'Mindcooler_2' as distinct raw tags)",
    "Local dataset: 2 files tagged Mindcooler_2, single composer (Mindcooler himself) — see data/composers/mindcooler.json folder[]",
    "CSDb webservice, both tagged files' own SID entries: https://csdb.dk/webservice/?type=sid&id=54835 and https://csdb.dk/webservice/?type=sid&id=52883",
    "CSDb webservice, scener 14259 (Mindcooler): https://csdb.dk/webservice/?type=scener&id=14259&depth=3",
    "CSDb site search, no 'Mindcooler_2' entry: https://csdb.dk/search/?seinsel=all&search=Mindcooler_2"
  ]
}
```

## Overview

Mindcooler_2 is a Player-ID tag for a small, native-C64, personal/built-in
replay routine used exclusively by its namesake composer, **Jens
Björnhager**, handle **Mindcooler** (Sweden, CSDb scener id 14259, roles
Coder/Graphician/Musician, member of Sys5). All locally tagged files are his
own — 100% single-composer concentration. Both of the 2 tagged files were
censused directly against CSDb: Borderline Waltz (2016-07-02, Edison 2016)
and Borderline Jitterbug (2017-07-02, Edison 2017), both sharing load/init
address $080D. Neither CSDb's SID/scener records nor a direct CSDb site
search turn up a dedicated tool/editor/release entry for "Mindcooler_2" —
it is not a published tool, just a Player-ID signature name. A separate,
bare "Mindcooler" tag (without the "_2" suffix) also appears in the local
dataset on two other files by the same composer, indicating at least two
differently-fingerprinted personal routines/builds — only this "_2" variant
is covered by this card.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage; (2)
SIDId has no entry for this exact tag; (3) a sibling bare "Mindcooler" tag
exists on other files by the same composer and is explicitly NOT covered
here — a future pass should check whether it has its own card; (4) a CSDb
site search for "Mindcooler_2" returns zero results, confirming there is no
dedicated tool/release entry — this card's `released`/`csdb_release` gaps
are genuinely unfillable, not unresearched.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/mindcooler.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer profile.

# 4-Mat Tiny 1

```json
{
  "id": "4-mat-tiny-1",
  "name": "4-Mat Tiny 1",
  "aliases": ["4-Mat_tiny_1"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "No formal tool-release date found (not a titled/published tool). Earliest attested use: 2003 — three of the 5 tagged files ('Menutune (new player test)', 'Mini Melodies Compilation', 'Old Favourites', CSDb sid ids 32855/32857/32881) each carry CSDb Released='2003 Cosine'/'2003 Cosine Systems'. The other two are later: 'In a Loop (note)' (id 32853) Released='2006 Ate Bit', 'Paige' (id 42576) Released='2009 Ate Bit'. This is an earliest-attested-use range (2003-2009), not a release date. Source: CSDb webservice type=sid, ids 32853/32855/32857/32881/42576, via scripts/lib/csdb-client.js, checked 2026-07-31.",
  "status": "stub",
  "platform": "Native C64, in-house/experimental replay routine — not a distributed editor or named tool. Web search (csdb.dk, codebase64.org, lemon64.com) for '4-Mat_tiny' / '4-Mat tiny player' turns up no dedicated CSDb release or tool page; 4-Mat's CSDb scener profile (https://csdb.dk/scener/?id=3913) lists no such tool credit either. Consistent with sidid.nfo carrying no entry for this tag (see sources).",
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
    "SIDId's sidid.nfo has NO entry for '4-Mat_tiny_1' (checked) — this is a Player-ID-only signature, not a documented/published tool. A related composer-tagged file in the same local dataset ('And Again') carries a SIBLING raw tag '4-Mat_tiny_2', indicating a small family of numbered 'tiny' routines by the same author rather than one fixed product — treat '_1' as one variant among at least two, not the whole family.",
    "4-Mat is Matt Simmonds, a long-running and prolific UK SID composer; also see the separately-tagged, separately-carded 'MiniSeq' routine (knowledge/players/4-mat-miniseq.md) by the same author — a DIFFERENT tag with its own SIDId absence, not confirmed to be the same code.",
    "Single-composer concentration: all 5 locally tagged files are by 4-Mat himself (per data/composers/4-mat.json) — consistent with a personal/experimental routine, likely used for quick tune sketches ('Menutune (new player test)', 'Mini Melodies Compilation') rather than a released, titled tool.",
    "Full census of all 5 tagged files (CSDb sid ids in parens), read via CSDb webservice type=sid: 'In a Loop (note)' (32853, 2006 Ate Bit), 'Menutune (new player test)' (32855, 2003 Cosine Systems), 'Mini Melodies Compilation' (32857, 2003 Cosine, 6 subtunes), 'Old Favourites' (32881, 2003 Cosine, 3 subtunes), 'Paige' (42576, 2009 Ate Bit). Spans 2003-2009 attested use, not a single release.",
    "PSID header values are identical across all 5 tagged files (per CSDb webservice sid records): LoadAddr $1000 (4096), InitAddr $1000 (4096), PlayAddr $1003 (4099). This is header metadata only, not a disassembly fact — recorded here, not in the memory/entry Tier 3 fields, which remain TODO pending actual disassembly."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for '4-Mat_tiny_1' or '4-Mat_tiny_2': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 5 files tagged 4-Mat_tiny_1, all by 4-Mat (Matt Simmonds); sibling tag 4-Mat_tiny_2 also observed on 'And Again' — see data/composers/4-mat.json",
    "CSDb webservice (type=sid) records for all 5 files, ids 32853, 32855, 32857, 32881, 42576, fetched via scripts/lib/csdb-client.js on 2026-07-31 (csdb.dk/sid/?id=<id>)",
    "Web search for a dedicated CSDb tool/release entry under '4-Mat_tiny' / '4-Mat tiny player' found none; 4-Mat's CSDb scener page has no such credit: https://csdb.dk/scener/?id=3913"
  ]
}
```

## Overview

`4-Mat_tiny_1` is a raw Player-ID tag for one of several small, likely
experimental replay routines by **Matt Simmonds**, handle **4-Mat**, a
long-running UK SID composer. A sibling tag `4-Mat_tiny_2` appears on
another file in the same dataset, indicating a small numbered family of
"tiny" routines rather than one fixed product. All 5 locally-tagged files
are by 4-Mat himself; titles like "Menutune (new player test)" suggest
quick tune sketches rather than a released, titled tool. A full census of
all 5 files (CSDb webservice `Released` fields, not title-year guesses)
shows attested use spanning 2003-2009, with no dedicated CSDb tool/release
page found under this name — so there is no single "release date" for this
routine, only earliest/latest attested use. It appears to be a native C64
in-house routine, not a distributed editor.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has no entry for this tag
at all; (2) a sibling `_tiny_2` variant exists, so this is one of a family,
not the whole picture; (3) do not conflate with the separately-tagged
`4-Mat/MiniSeq` (also by 4-Mat, also carded separately, no evidence of a
shared routine); (4) all 5 tagged files were censused (not sampled) and
share identical PSID header `load`/`init`/`play` addresses ($1000/$1000/
$1003) — that consistency is header metadata, not a disassembly finding,
and stays out of the Tier 3 fields.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/4-mat.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check) and the local
composer aggregation.

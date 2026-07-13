# Jeff (Music Editor)

```json
{
  "id": "jeff",
  "name": "Jeff (Music Editor)",
  "aliases": ["Jeff", "Music Editor V2.0", "Jeff/Airwalk", "Jeff/BullSID", "Jeff/FLT", "Jeff/XLarge", "X-SID"],
  "authors": ["Søren Lund (Jeff)"],
  "released": "1996 (Music Editor V2.0, Cyberzound Productions)",
  "status": "stub",
  "platform": "Native C64 in-house music editor + integrated playroutine by the composer Jeff. Closed; never officially released (leaked/circulated).",
  "csdb_release": 122334,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The 'Jeff' tag = Søren Lund's own in-house editor ('Music Editor V2.0', 1996), not a third-party tool he merely used. His own independent player line — he positioned it as a competitor to the JCH editor ('more features than the JCH editor using player 20', better rastertime).",
    "CORRECTION: Jeff was NOT in Vibrants (that's JCH/Laxity's group). His groups were Cyberzound Productions (co-founded ~1993-94), Camelot, Crest, Bonzai, Cosine, Viruz, X-Factor. Do not draw a Vibrants/Laxity lineage.",
    "SIDId indexes several distinct Jeff routines beyond the 1996 editor: custom players Jeff/Airwalk, Jeff/BullSID, Jeff/FLT (for Fairlight's 'One Million Lightyears from Earth'), Jeff/XLarge, and X-SID (2007). He reportedly coded ~30 players + 2 editors. So the 'Jeff' tag family spans many hand-coded routines. (Søren Lund died 1 Dec 2013.)",
    "Replay internals all UNKNOWN — TODO. One qualitative datum (a LATER, post-2002 player) hit max rastertime $1C with glide/detune/vibrato tables + flexible ADSR/echo — but that's not necessarily the 1996 tag. 192 files."
  ],
  "sources": [
    "Remix64 interview with Søren 'Jeff' Lund (his own words on his editor/player): https://remix64.com/interviews/interview-soren-jeff-lund.html",
    "CSDb Music Editor V2.0 (Cyberzound Productions, 1996): https://csdb.dk/release/?id=122334",
    "CSDb scener 8059 + sidid.nfo (identity, groups, routine list): https://csdb.dk/scener/?id=8059 ; https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "sidid:Jeff (Søren Lund, 1996 Cyberzound Productions)",
    "Local dataset: 192 files tagged Jeff (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The "Jeff" tag is composer **Søren Lund's** own in-house C64 music editor
("Music Editor V2.0", 1996, Cyberzound Productions) and the family of hand-coded
playroutines he wrote (~30 players over his career). It's an independent line —
Jeff explicitly built it as a rival to the JCH editor, not a derivative. 192
files here.

## Quirks & gotchas

See the `quirks` array — the load-bearing correction is that **Jeff was not in
Vibrants** (avoid a false JCH/Laxity lineage), and that the tag spans **many
distinct hand-coded routines**, not one. Internals `TODO`.

## Disassembly notes

None; internals undocumented. Disassemble a Jeff-tagged `.sid` to recover them
(note the tag may cover several different routines).

## Verification

**Not verified — `status: stub`.** Author, editor, groups, and independence
from JCH/Laxity are sourced; all runtime fields `TODO`.

## Sources

See the `sources` array — the Remix64 Jeff interview, the CSDb editor release,
and SIDId.

# Martin_Galway_Digi

```json
{
  "id": "martin-galway-digi",
  "name": "Martin_Galway_Digi",
  "aliases": ["Martin_Galway_Digi"],
  "authors": ["TODO: SIDId's author line names Martin Galway, but the only local files carrying this tag are composed by a different, unrelated scener ('Bowie') — see quirks; do not read this as Galway's own routine without further evidence"],
  "released": "TODO: no explicit tool-release year in SIDId; local files' composer is active from 1988",
  "status": "stub",
  "platform": "TODO: unresolved whether this is Martin Galway's own drum-sample ('Digidrums'-derived) technique reused by a third party, an independent implementation inspired by his published description, or a SIDId attribution quirk — see quirks. Not to be confused with the verified [[martin-galway]] card (Galway's own Wizball-era driver), which this card does NOT edit or extend.",
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
    "IDENTITY MISMATCH — the load-bearing fact of this card. SIDId's byTag entry for 'Martin_Galway_Digi' names the author as 'Martin Galway' and carries an unusually long comment: a direct quote from Galway himself describing how he discovered sampled-sound playback by 'hacking into someone else's code... a drum synthesizer package called Digidrums,' then built his own realtime drum samples for Arkanoid, later refined for Game Over (data/sidid.json byTag['Martin_Galway_Digi']). BUT the only 2 files in this project's local dataset carrying this exact tag are BOTH by a composer named 'Bowie' (data/composers/bowie.json) — a Danish scener (CSDb scener id 11080, handle BWI, groups incl. Final Frontiers, active 1987-1988) with no documented connection to Martin Galway, Ocean Software, or the games Galway scored (checked Bowie's CSDb scener page directly — no mention of Galway/Ocean). This does NOT mean Galway coded these two files; it more likely means SIDId's byte-signature scanner fingerprinted a routine that reuses/reimplements the published Digidrums-style technique Galway described, and SIDId's author field records the TECHNIQUE's originator/documenter rather than the CODER of this specific instance. That reading is inference, not sourced fact — flagged, not resolved.",
    "Do NOT edit or extend the existing verified [[martin-galway]] card from this finding. That card is grounded in Galway's own published Wizball assembly source and is `status: verified`; nothing here confirms Bowie's files run Galway's actual code, so no alias or edge is added there.",
    "100% of the 2 locally-tagged files ('Silent Love', 'Touch Me') belong to the composer 'Bowie' alone (data/composers/bowie.json) — a personal-routine-level concentration, whatever its true authorship.",
    "No CSDb tool/release page for a standalone 'Martin_Galway_Digi' editor was found; this looks like an in-tune embedded routine, not a distributed tool."
  ],
  "sources": [
    "SIDId sidid.nfo (author 'Martin Galway', long comment quoting Galway on Digidrums/Arkanoid/Game Over drum samples): https://github.com/cadaver/sidid/blob/master/sidid.nfo — data/sidid.json byTag['Martin_Galway_Digi']",
    "Local dataset: 2 files tagged Martin_Galway_Digi, both by composer 'bowie' — data/composers/bowie.json; see knowledge/COVERAGE.md rank 93",
    "CSDb scener profile, Bowie (BWI), Denmark, groups incl. Final Frontiers, active 1987-1988: https://csdb.dk/scener/?id=11080 — no mention of Martin Galway or Ocean Software found on this page",
    "knowledge/players/martin-galway.md — the separate, verified card for Galway's own Wizball-era driver; not edited by this card"
  ]
}
```

## Overview

Martin_Galway_Digi is a SIDId Player-ID tag whose author field names legendary
Ocean composer **Martin Galway**, with a long comment directly quoting him on
how he came to use sampled drum sounds (the "Digidrums" story, later refined
for *Arkanoid* and *Game Over*). However, the only 2 files in this project's
dataset carrying this exact tag are both by an unrelated Danish scener,
**Bowie**, with no documented tie to Galway or Ocean Software. The most likely
reading is that SIDId's author field records the *technique's* originator
rather than the coder of this specific fingerprinted routine — but that is
inference, not a sourced fact, so this card states the mismatch plainly rather
than asserting either reading as settled. This card does **not** touch the
existing, unrelated `status: verified` [[martin-galway]] card, which rests on
Galway's own published Wizball source.

## Quirks & gotchas

See the `quirks` array. The load-bearing fact is the **identity mismatch**
between SIDId's named author (Galway) and the actual composer of every locally
tagged file (Bowie) — recorded, not resolved. Do not merge this tag into the
verified `martin-galway` card on the strength of the shared name alone.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found. All
Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from local `data/composers/bowie.json`, SIDId, and a
CSDb scener-page check for Bowie (which found no Galway/Ocean connection).
`status: stub`.

## Sources

See the `sources` array — SIDId, the local composer aggregation, CSDb, and the
separate `martin-galway` card (referenced, not edited).

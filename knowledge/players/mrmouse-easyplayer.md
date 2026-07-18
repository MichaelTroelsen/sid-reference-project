# EasyPlayer (Mr. Mouse)

```json
{
  "id": "mrmouse-easyplayer",
  "name": "EasyPlayer",
  "aliases": ["MrMouse/EasyPlayer"],
  "authors": ["Michael Zuurman (Mr. Mouse)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this exact name (unconfirmed) — SIDId's own comment describes it as a fork of a different player, suggesting an adapted/derivative native C64 replay rather than an independently built one.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId's entry for this tag has an AUTHOR line ('Michael Zuurman (Mr. Mouse)') and a COMMENT ('Fork of 4-Mat's AY Player') but no NAME or reference/CSDb link — consistent with an in-house/unreleased-as-a-titled-product routine rather than a formally published editor.",
    "UNRESOLVED LINEAGE CLAIM: SIDId's own comment states this is a 'Fork of 4-Mat's AY Player' — but no Player-ID tag or knowledge-base card for a '4-Mat AY Player' (or similar) exists in this project's local dataset (checked data/sidid.json for any AY-player tag and for any 4-Mat-authored tag — none found), and 4-Mat/Matt Simmonds's other carded routines here (4-mat-tiny-1.md, 4-mat-miniseq.md, 4-mat-1k-play.md) are separate, unrelated tags with no AY-chip association. Per this project's rule, an `edges` entry is only recorded when it points at a real, evidenced target in this KB — since no such target exists to point at, this is recorded here as a quirk only, not an edge. The 'AY' in the name likely refers to the AY-3-8912 sound chip (used on the ZX Spectrum 128/Amstrad CPC, not natively on the C64) — suggesting 4-Mat's original 'AY Player' may itself be a cross-platform or emulated-chip-tracker context, unconfirmed.",
    "All 6 locally-tagged files are by the same composer, 'Mouse Mr' (data/composers/*.json) — consistent with a personal/small-circle routine, matching the author identity from SIDId. Titles are game OST transcriptions (Metal Gear, Vampire Killer, Nemesis MSX OST, The Treasure of Usas MSX OST) — suggesting this was used specifically for MSX/console soundtrack covers/tributes on the C64."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['MrMouse/EasyPlayer'], author + 'Fork of 4-Mat's AY Player' comment)",
    "Local dataset: 6 files tagged MrMouse/EasyPlayer, 1 composer (Mouse Mr) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`MrMouse/EasyPlayer` is SIDId's tag for a routine attributed to **Michael
Zuurman**, handle **Mr. Mouse**. SIDId's own comment field describes it as a
"Fork of 4-Mat's AY Player" — a lineage claim from the source itself — but no
tag or card for such a "4-Mat AY Player" exists anywhere in this project's
local dataset, so no `edges` relationship is recorded (there is no evidenced
target to point at). All 6 locally-tagged files are by Mr. Mouse himself, all
titled as MSX/console game-soundtrack transcriptions (Metal Gear, Vampire
Killer, etc.).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's own "fork of 4-Mat's AY
Player" comment is a real sourced claim but points at nothing this project
has carded or even tagged elsewhere — recorded as an open lineage lead, not
an edge; (2) the "AY" in the name likely references the AY-3-8912 chip
(MSX/Spectrum-128/CPC), hinting at a cross-platform-tracker origin, unconfirmed;
(3) single-composer concentration (6/6 files, Mr. Mouse himself), all OST
covers.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo, CSDb tool/release page, or format
spec was found under this name.

## Verification

Not verified. Seeded entirely from `data/sidid.json` and `data/composers/*.json`.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo and the local composer aggregation.

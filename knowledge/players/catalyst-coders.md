# Catalyst_Coders

```json
{
  "id": "catalyst-coders",
  "name": "Catalyst_Coders",
  "aliases": ["Catalyst_Coders"],
  "authors": ["Russell Lieblich"],
  "released": "TODO: locally-associated file 'Rampage' — C64 port by Catalyst Coders Ltd and Software Studios, released the year after the 1986 arcade original — no explicit tool-release date confirmed",
  "status": "stub",
  "platform": "TODO: possibly a company-specific in-house driver used by Catalyst Coders Ltd (a Scottish, Glasgow-based game studio, active 1984-1990) for this port — NOT confirmed to be the same code as this same composer's OTHER, already-carded 'own sound driver' tag from his Activision/Gamestar era (see quirks)",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent). The one locally-tagged file is 'Rampage', composer Russell Lieblich. C64-Wiki confirms Catalyst Coders Ltd (a Scottish game developer, Glasgow, active 1984-1990) ported Rampage (with Software Studios) the year after Midway's 1986 arcade original, and separately confirms Russell Lieblich was among the company's staff.",
    "SEPARATE, ALREADY-CARDED TAG BY THE SAME COMPOSER: this project already has 'russell-lieblich-driver.md' (aliases ['Russell_Lieblich']) — explicitly described THERE as 'Lieblich's own sound driver ... used across ~10 different Activision and Activision's Gamestar sports sub-label titles', with a first-party VGMPF quote confirming self-authorship for that specific driver. Rampage/Catalyst_Coders is NOT among that card's 11 tagged files or its aliases — this is a genuinely different Player-ID signature. Since Catalyst Coders was a different company entirely from Activision/Gamestar, it is plausible (not confirmed) that this represents a SEPARATE, company-specific in-house driver rather than the same Activision-era code reused — no source states either way, so no `edges` relationship is recorded between the two cards.",
    "Only 1 locally-tagged file ('Rampage') — too small a sample for concentration analysis."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry for 'Catalyst_Coders': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "C64-Wiki (German) — Catalyst Coders company profile (confirms Rampage port, Russell Lieblich as staff): https://www.c64-wiki.de/wiki/Catalyst_Coders",
    "C64-Wiki (German) — Rampage (Europa): https://www.c64-wiki.de/wiki/Rampage_(Europa)",
    "Sibling card, same composer, different (already-carded) tag: knowledge/players/russell-lieblich-driver.md",
    "Local dataset: 1 file tagged Catalyst_Coders ('Rampage'), composer Russell Lieblich — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Catalyst_Coders` is a Player-ID-only tag (no SIDId entry) for a single
locally-tagged file, "Rampage", composed by **Russell Lieblich** for a C64
port made by Catalyst Coders Ltd (a Scottish, Glasgow-based game studio,
1984-1990) — confirmed via C64-Wiki as both the porting company and
Lieblich's employer on this title. This is a DIFFERENT Player-ID signature
from Lieblich's other, already-carded "own sound driver" tag
(`russell-lieblich-driver.md`, from his Activision/Gamestar era) — since
Catalyst Coders was an entirely different company, this plausibly
represents a separate in-house driver, but no source confirms or denies
that, so no `edges` relationship is recorded between the two cards.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry; (2) confirmed via
C64-Wiki that Catalyst Coders ported Rampage and employed Lieblich; (3) this
is explicitly a SEPARATE tag from the same composer's other already-carded
driver, kept un-edged per the no-evidence rule; (4) only 1 local file.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. A future disassembly of a `Catalyst_Coders`-tagged file
could be directly compared against `russell-lieblich-driver.md`'s traced
sample (Aliens: load $2437/init $3100/play $312e) to test whether the two
tags really are the same code.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), `data/composers/*.json`,
two C64-Wiki pages, and cross-reference against the sibling card.
`status: stub`.

## Sources

See the `sources` array — SIDId absence check, C64-Wiki (2 pages), the
sibling russell-lieblich-driver.md card, and the local composer aggregation.

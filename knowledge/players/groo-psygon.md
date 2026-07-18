# Groo/Psygon

```json
{
  "id": "groo-psygon",
  "name": "Groo/Psygon",
  "aliases": ["Groo/Psygon"],
  "authors": ["Claus Leth Gregersen (Groo)"],
  "released": "TODO: no explicit tool-release date found for a routine under this exact tag name — see 'Psynus V1.1' lead in quirks",
  "status": "stub",
  "platform": "TODO: likely related to 'Psynus V1.1', a CSDb-listed C64 Tool credited to Groo (of Mechanix, Mega Soft Incorporated, Psygon) and Spe — not independently confirmed to be the same code as this exact Player-ID tag",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId's entry for this tag has only an AUTHOR field ('Claus Leth Gregersen (Groo)') — no NAME, reference, or comment.",
    "PLAUSIBLE (not confirmed) LEAD: CSDb lists a C64 Tool release 'Psynus V1.1' (group: Psygon and The Last Generation 1945; code credited to 'Groo and Spe', both listed as members of Mechanix, Mega Soft Incorporated, and Psygon; bug-fix by 'The Generator'). The group match (Psygon) and author match (Groo) to this tag's name ('Groo/Psygon') is suggestive that 'Psynus' IS the tool behind this Player-ID signature, but no CSDb page or source directly states that identification — recorded as a lead, not a fact, and NOT set as the card's `name` (kept as the raw tag) pending confirmation.",
    "All 4 locally-tagged files are by the same composer (Groo) — consistent with a personal or small-group routine."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Groo/Psygon'], author only)",
    "CSDb release 'Psynus V1.1' (Psygon / The Last Generation 1945; code: Groo, Spe): https://csdb.dk/release/?id=126610",
    "Local dataset: 4 files tagged Groo/Psygon, 1 composer (Groo) — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Groo/Psygon` is SIDId's tag for a routine attributed to **Claus Leth
Gregersen**, handle **Groo**, a member of the Psygon demogroup (also
Mechanix, Mega Soft Incorporated). SIDId itself gives author only, no
name/reference. A CSDb tool release, "Psynus V1.1" (Psygon / The Last
Generation 1945, code by Groo and Spe), is a plausible match for the tool
behind this tag given the matching author and group name, but this is not
independently confirmed and is not asserted as the card's canonical name.
All 4 locally-tagged files are by Groo himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId gives author only; (2) a
strong but unconfirmed lead ties this tag to the CSDb-listed tool "Psynus
V1.1"; (3) single-composer concentration (4/4 files).

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo was found.

## Verification

Not verified. Seeded from `data/sidid.json`, `data/composers/*.json`, and
one CSDb release page. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 126610, and the
local composer aggregation.

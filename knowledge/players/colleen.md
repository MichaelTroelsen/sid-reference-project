# Colleen

```json
{
  "id": "colleen",
  "name": "Colleen",
  "aliases": ["Colleen"],
  "authors": ["TODO: no coder credited — tag is attached to a Wally Beben file; the name's meaning/origin is unresolved"],
  "released": "TODO: no date found — SIDId has no entry for this tag at all",
  "status": "stub",
  "platform": "TODO: appears to be a personal/in-house C64 replay routine on a file by composer Wally Beben (handle Hagar) — no dedicated CSDb tool/release entry found under this name, and no explanation for the name 'Colleen' was found (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Colleen' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "The sole locally-tagged composer is Wally Beben (real name Wallace Beben, England, b. 1953-09-05, handle 'Hagar', CSDb scener 8133) — a well-documented professional UK games composer, best known for the C64 Tetris soundtrack. No source found during this research pass explains what or who 'Colleen' refers to (not a known game title, company, or person associated with Beben in the sources checked) — the name's origin is genuinely unresolved, unlike 'Colin_Porch' in this same batch where a plausible real-person connection was found.",
    "Single file, single composer — the smallest possible footprint, consistent with a one-off personally-named routine."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Colleen': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 1 file tagged 'Colleen', by composer Wally Beben — data/composers/wally-beben.json",
    "data/composers/wally-beben.json (HVSC profile: full name Wallace Beben, England, b. 1953-09-05, handle Hagar, affiliation Freelance, CSDb scener 8133)",
    "Remix64 composer page, Wally Beben (background/career, no mention of 'Colleen'): https://remix64.com/composer/wally-beben/"
  ]
}
```

## Overview

`Colleen` is a raw Player-ID tag found on a single file by composer **Wally
Beben** (handle Hagar), a professional UK C64 games composer best known for
the Tetris soundtrack. SIDId has no entry for the tag, and no source found
during this research pass explains the name's origin — it does not match a
known game, company, or associate of Beben's in the sources checked. This
card records the identity/usage facts available and leaves the name
unexplained rather than guessing.

## Quirks & gotchas

See the `quirks` array. Load-bearing: unlike several other tags in this
batch, no plausible real-world referent for the tag name was found — flagged
honestly as unresolved rather than speculated on.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/wally-beben.json`, `data/sidid.json`) plus web research that
did not resolve the tag's name. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer profile for Wally Beben, and a Remix64 composer page.

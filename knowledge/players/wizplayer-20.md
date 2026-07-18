# WizPlayer_2.0

```json
{
  "id": "wizplayer-20",
  "name": "WizPlayer_2.0",
  "aliases": ["WizPlayer_2.0"],
  "authors": ["Piotr Kuciapski (Wizard)"],
  "released": "TODO: no explicit release date in SIDId; a sibling tag 'WizPlayer_1.0' (same author, not in this batch) implies at least a two-version history",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house routine, not a released standalone editor (unconfirmed)",
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
    "SIDId's sidid.nfo carries only an AUTHOR line — 'Piotr Kuciapski (Wizard)' — no NAME/RELEASED/REFERENCE/COMMENT for 'WizPlayer_2.0'. A sibling tag 'WizPlayer_1.0' (same author, listed immediately before it in sidid.nfo, NOT in this batch/uncarded) also has an author-only record — no version-history detail beyond the two tag names themselves.",
    "100% single-composer concentration: all 4 locally-tagged 'WizPlayer_2.0' files belong to the composer 'Oxygen_Wizard' (Piotr Kuciapski, handle Wizard, Poland — data/composers/oxygen-wizard.json), consistent with a personal, self-named routine ('Wiz' + 'Player') rather than a distributed tool.",
    "Web search for 'WizPlayer' turned up no independent CSDb tool/release page or documentation distinct from the sidid.nfo entries themselves — see sources."
  ],
  "sources": [
    "SIDId sidid.nfo (author only for both WizPlayer_1.0 and WizPlayer_2.0): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 4 files tagged WizPlayer_2.0, all by composer 'Oxygen_Wizard' — data/composers/oxygen-wizard.json; see knowledge/COVERAGE.md (grouped row: 5f total across WizPlayer_1.0 + WizPlayer_2.0)",
    "CSDb scener profile, Wizard / Piotr Kuciapski (Poland): https://csdb.dk/scener/?id=1623"
  ]
}
```

## Overview

WizPlayer_2.0 is a SIDId Player-ID tag attributed to **Piotr Kuciapski**,
handle **Wizard**, a Polish scener. SIDId's record is author-only, with a
sibling `WizPlayer_1.0` tag (same author) implying at least a two-version
history, but no title, release date, or CSDb reference is recorded for
either. Locally `WizPlayer_2.0` appears in **4 files, all by the composer
Oxygen Wizard himself** (data/composers/oxygen-wizard.json). No independent
CSDb tool/release page or documentation was found.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) author-only SIDId record for both
version tags, no title/reference; (2) 100% single-composer usage; (3) no
independent documentation found beyond sidid.nfo.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/oxygen-wizard.json`,
`data/sidid.json`, and a CSDb scener-page check. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, local composer aggregation, and
the CSDb scener profile for Wizard/Piotr Kuciapski.

# Bappalander/Spacelab1

```json
{
  "id": "bappalander-spacelab1",
  "name": "Bappalander/Spacelab1",
  "aliases": ["Bappalander/Spacelab1"],
  "authors": ["Ove Kjell Gustav Oldberg (Bappalander)"],
  "released": "TODO: no date found — SIDId has no entry for this tag at all",
  "status": "stub",
  "platform": "TODO: appears to be a personal/in-house replay routine by Bappalander — no dedicated CSDb tool/release entry found under this name, and 'Spacelab1' does not match any of Bappalander's known group memberships (unconfirmed)",
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
    "SIDId's sidid.nfo has NO entry for 'Bappalander/Spacelab1' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "'Spacelab1' does NOT match any of Bappalander's own CSDb group memberships (Light 1991-1993, Horizon 1993, Fairlight Jul 1993-Jan 1994, per his CSDb scener page) — no group, demo, or game called 'Spacelab' or 'Spacelab1' was found associated with him during this research pass. Bappalander does have several CSDb 'Tool' category credits (Noice Driver V2.5p/V3.8c, Noter Pack 2, SEQ Shower, a $FFE4/$DC00/$DC01-Checker, Level Editor V1.3) but CSDb lists him on all of these for MUSIC, not code — so even those don't explain a personally-coded player. The meaning of 'Spacelab1' in the tag name is unresolved.",
    "Single-composer concentration: all 5 locally-tagged files are by Bappalander himself (Ove Oldberg, Sweden, b. 1970-08-31, CSDb scener 2098) — consistent with a personal/experimental routine rather than a released, titled tool."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'Bappalander/Spacelab1': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Bappalander / Ove Oldberg (groups Light/Horizon/Fairlight, Sweden, tool credits all for music not code): https://csdb.dk/scener/?id=2098",
    "Local dataset: 5 files tagged 'Bappalander/Spacelab1', all by Bappalander — data/composers/bappalander.json",
    "data/composers/bappalander.json (HVSC profile: full name Ove Kjell Gustav Oldberg, Sweden, b. 1970-08-31, CSDb scener 2098)"
  ]
}
```

## Overview

`Bappalander/Spacelab1` is a raw Player-ID tag for a replay routine used
exclusively by **Ove Oldberg**, handle **Bappalander**, a Swedish scener
(member of Light, Horizon, and Fairlight between 1991-1994). All 5
locally-tagged files are his own. SIDId has no entry for the tag at all, and
the "Spacelab1" element of the name does not match any known group, demo, or
game associated with him — its meaning is unresolved. Treated here as a
likely personal/experimental routine rather than a released tool.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId has no entry for this tag; the
"Spacelab1" name element does not correspond to any of Bappalander's known
CSDb affiliations; usage is 100% by the composer himself.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/bappalander.json`, `data/sidid.json`) plus a CSDb scener
page. `status: stub` — no runtime fact has been confirmed by disassembly or
trace.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the CSDb scener
page for Bappalander, and the local composer aggregation.

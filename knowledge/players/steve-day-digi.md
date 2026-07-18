# Steve_Day_Digi

```json
{
  "id": "steve-day-digi",
  "name": "Steve_Day_Digi",
  "aliases": ["Steve_Day_Digi"],
  "authors": ["Steve Day"],
  "released": "TODO: no tool-release date documented; sampled local file (Beat Dis!, CSDb sid id 51067) is dated 1989, NATO",
  "status": "stub",
  "platform": "TODO: appears to be a personal digi/sample-playback routine embedded in Steve Day's own tracks, not a released standalone tool — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "No SIDId entry exists for this tag at all (data/sidid.json byTag lookup for 'Steve_Day_Digi' returns undefined).",
    "Strong CSDb corroboration: Steve Day's scener page (id 23323; groups NATO, Compunet Computer Club, South East Cracking Group; UK/later USA) lists explicit 'Sampling'-role credits on multiple NATO releases, including 'Beat Dis!' (both a 1989 and a 1990 version) — which directly matches one of the 5 locally-tagged filenames ('Beat Dis!').",
    "Usage: 5 files across 2 composers — Steve Day himself (3 files) and Ben Hayes (2 files; Wales; one file's author field reads 'Ben Hayes (Nutt \\'67)', per data/composers/ben-hayes.json) — both UK-scene composers of a similar era (Steve Day's HVSC record shows country 'England (-2000), USA (2000-)'), though no documented common CSDb group between the two was confirmed here (TODO: e.g. no evidence Ben Hayes was ever a NATO member)."
  ],
  "sources": [
    "CSDb scener profile, Steve Day (groups NATO/Compunet Computer Club/South East Cracking Group; 'Sampling'-role credits incl. 'Beat Dis!' 1989/1990): https://csdb.dk/scener/?id=23323",
    "CSDb SID-file entry 'Beat Dis!' (Steve Day, 1989 NATO, PSID header): https://csdb.dk/sid/?id=51067",
    "Local dataset: 5 files tagged 'Steve_Day_Digi' — 3 by Steve Day, 2 by Ben Hayes — data/composers/steve-day.json, data/composers/ben-hayes.json",
    "data/sidid.json (checked: no 'Steve_Day_Digi' entry exists in byTag, confirming the absence noted above)"
  ]
}
```

## Overview

Steve_Day_Digi is the local raw tag for a digi/sample-playback routine
attributed to **Steve Day**, a UK-scene coder/musician (groups NATO,
Compunet Computer Club, South East Cracking Group). No SIDId entry exists for
this tag, but CSDb directly corroborates it: Steve Day's scener page lists an
explicit "Sampling" role on "Beat Dis!" (both a 1989 and 1990 NATO release),
which matches one of the 5 locally-tagged filenames exactly. Usage spans 2
composers — Steve Day himself (3 files) and Ben Hayes (2 files, Wales) — with
no documented common group confirmed between them beyond both being active
in the UK scene of that era.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry exists for this tag;
(2) CSDb's "Sampling" credit directly matches the locally-tagged filename
"Beat Dis!" — strong, specific corroboration; (3) the routine spans 2
composers with no confirmed common group, an open question about how it
spread from Steve Day to Ben Hayes (TODO).

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity/corroboration from CSDb's
scener profile with a direct title match, composer concentration from local
dataset aggregation. No runtime fact has been disassembled or traced.

## Sources

See the `sources` array — CSDb's Steve Day scener profile, one sampled CSDb
SID-file entry, and local composer-file aggregation.

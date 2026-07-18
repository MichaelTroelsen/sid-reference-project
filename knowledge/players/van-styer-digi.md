# Van_Styer_Digi

```json
{
  "id": "van-styer-digi",
  "name": "Van_Styer_Digi",
  "aliases": ["Van_Styer_Digi"],
  "authors": ["Piotr Przewozny (Van Styer)"],
  "released": "TODO: no tool-release date documented; sampled local file (Mega Bump, CSDb sid id 44417) is dated 1997, De-Koder",
  "status": "stub",
  "platform": "TODO: appears to be a personal digi/sample-playback routine embedded in Van Styer's own tracks, not a released standalone tool — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId (data/sidid.json byTag.\"Van_Styer_Digi\") records only 'AUTHOR: Piotr Przewozny (Van Styer)' — no name, released date, or comment.",
    "CSDb's scener page for Van Styer (id 13184; groups De-Koder, Xantem; Poland) lists only one 'Sampling'-role credit ('Vector Power', 1997 Music Collection, De-Koder), and it does not match any of the 6 locally-tagged filenames (Mega Bump, Polizei Death, etc.) — weaker corroboration than Mcee_Digi or Madhacker_Digi in this same batch; the 'Digi' label for these specific 6 files is unconfirmed by a matching scene credit, author attribution only.",
    "Usage: 6 files across 2 composers — Van Styer himself (5 files) and Rule3 Helios / Marcin Jędrusik (1 file, also Polish, per data/composers/rule3-helios.json) — the single cross-composer file suggests the routine was used at least once beyond Van Styer's own output, but no documented common CSDb group between the two was confirmed here (TODO)."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): data/sidid.json byTag.\"Van_Styer_Digi\"",
    "CSDb scener profile, Van Styer / Piotr Przewozny (groups De-Koder, Xantem; Poland; one 'Sampling' credit on an unrelated 1997 title): https://csdb.dk/scener/?id=13184",
    "CSDb SID-file entry 'Mega Bump' (Piotr Przewozny/Van Styer, 1997 De-Koder, PSID header): https://csdb.dk/sid/?id=44417",
    "Local dataset: 6 files tagged 'Van_Styer_Digi' — 5 by Van Styer, 1 by Rule3 Helios — data/composers/styer-van.json, data/composers/rule3-helios.json"
  ]
}
```

## Overview

Van_Styer_Digi is the local/SIDId tag for a digi/sample-playback routine
attributed to **Piotr Przewozny**, handle **Van Styer**, a Polish scener
(groups De-Koder, Xantem). SIDId carries only an author line. Locally it
covers 6 files, 5 by Van Styer himself and 1 by Rule3 Helios (Marcin
Jędrusik, also Polish) — a small hint of use beyond the author's own output,
though no documented scene connection between the two was confirmed. CSDb's
one "Sampling"-role credit for Van Styer is on an unrelated 1997 title, not
matching any of the 6 locally-tagged files.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has author only, no
release/reference; (2) CSDb's single "Sampling" credit for Van Styer doesn't
match any locally-tagged filename — weaker corroboration than several
siblings in this batch; (3) one file (of 6) belongs to a different composer
(Rule3 Helios), a small but real hint of use beyond a purely personal
routine.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity from SIDId, scene context
from CSDb, composer concentration from local dataset aggregation. No runtime
fact has been disassembled or traced.

## Sources

See the `sources` array — SIDId's sidid.nfo, CSDb's Van Styer scener profile,
one sampled CSDb SID-file entry, and local composer-file aggregation.

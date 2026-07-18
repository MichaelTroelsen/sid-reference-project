# Cyberbrain_Digi

```json
{
  "id": "cyberbrain-digi",
  "name": "Cyberbrain_Digi",
  "aliases": ["Cyberbrain_Digi"],
  "authors": ["Bjarke Nørgaard Laustsen (CyberBrain)"],
  "released": "TODO: no tool-release date documented; sampled local file (Holy Maling, CSDb sid id 41061) is dated 1995, No Name group",
  "status": "stub",
  "platform": "TODO: appears to be a personal digi/sample-playback routine embedded in Cyberbrain's own tracks, not a released standalone tool — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId (data/sidid.json byTag.\"Cyberbrain_Digi\") records only 'AUTHOR: Bjarke Nørgaard Laustsen (CyberBrain)' — no name, released date, or comment.",
    "CSDb's scener page for CyberBrain (id 5; groups No Name [1994-], ex-Acheron 1994, ex-BlastMaster 1987-1994, ex-Daniax 2004; Denmark) lists only one 'Sampling'-role credit, on a much later 2014 production ('Hardware Accelerated Samples: My Humps') — it does not match any of the 5 locally-tagged 1990s filenames (Holy Maling, Sverige, Voodoo People part 1, etc.). The 'Digi' label for these specific files is therefore author-attested via SIDId only, not confirmed by a matching scene credit.",
    "Fully single-composer usage: all 5 locally-tagged files belong to Cyberbrain himself (data/composers/cyberbrain.json)."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): data/sidid.json byTag.\"Cyberbrain_Digi\"",
    "CSDb scener profile, CyberBrain / Bjarke Nørgaard Laustsen (groups No Name/Acheron/BlastMaster/Daniax, Denmark; one unrelated 2014 'Sampling' credit): https://csdb.dk/scener/?id=5",
    "CSDb SID-file entry 'Holy Maling' (Bjarke N. Laustsen/Cyberbrain, 1995 No Name group, PSID header): https://csdb.dk/sid/?id=41061",
    "Local dataset: 5 files tagged 'Cyberbrain_Digi', all under composer Cyberbrain — data/composers/cyberbrain.json"
  ]
}
```

## Overview

Cyberbrain_Digi is the local/SIDId tag for a digi/sample-playback routine
attributed to **Bjarke Nørgaard Laustsen**, handle **CyberBrain**, a Danish
scener (groups No Name, ex-Acheron, ex-BlastMaster, ex-Daniax). SIDId carries
only an author line. Locally it covers 5 files, all by Cyberbrain himself.
CSDb's only "Sampling"-role credit for this scener is on a much later (2014)
and unrelated production, so the "digi" label for these specific 1990s files
is not confirmed by a matching scene credit — author attribution only.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has author only, no
release/reference; (2) CSDb's one "Sampling" credit for this scener is on an
unrelated, much later title — no direct corroboration for these 5 files; (3)
100% single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity from SIDId, scene context
from CSDb, composer concentration from local dataset aggregation. No runtime
fact has been disassembled or traced.

## Sources

See the `sources` array — SIDId's sidid.nfo, CSDb's CyberBrain scener
profile, one sampled CSDb SID-file entry, and local composer-file
aggregation.

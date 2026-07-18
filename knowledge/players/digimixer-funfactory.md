# Digimixer

```json
{
  "id": "digimixer-funfactory",
  "name": "Digimixer",
  "aliases": ["Digimixer/FunFactory"],
  "authors": ["Gyula Szalai (Jules) — per SIDId; CSDb release 129559 instead credits code to \"jay of Fun Factory\" (handle-spelling discrepancy, unresolved)"],
  "released": "1993 (CSDb release id 129559, \"Digimixer V2.0\", group Fun Factory)",
  "status": "stub",
  "platform": "Native C64 tool. CSDb categorizes release 129559 (\"Digimixer V2.0\") as a \"C64 Tool\", distributed as a d64 disk image (228 recorded downloads at time of research).",
  "csdb_release": 129559,

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
    "Name/author discrepancy between sources: SIDId's index (data/sidid.json, tag 'Digimixer/FunFactory') gives the author as 'Gyula Szalai (Jules)', while CSDb's release page for 'Digimixer V2.0' (id 129559, 1993, group Fun Factory) credits 'Code: jay of Fun Factory'. Both plausibly refer to the same person ('Jules' vs 'jay' as a shortened/miswritten handle), but this has not been independently confirmed — recorded as-is from both sources rather than silently resolved.",
    "Genuine third-party adoption, not a personal routine: of the 6 locally-tagged files, NONE belong to the credited author — 4 are by Booker (Marcin Kubica, Poland, data/composers/booker.json) and 2 are by Walt (Anders Fogh, Denmark, data/composers/walt.json), neither of whom is documented as a Fun Factory member. Combined with CSDb explicitly categorizing the release as a distributed 'C64 Tool' (not a one-off demo credit), this is real evidence of a genuinely used, packaged tool rather than an embedded personal routine — a different profile from most other tags in this batch.",
    "No SIDId `comment` field describes a playback mechanism for this tag — there is no confirmation this routine does any particular sample-playback technique (4-bit D/A, volume-register trick, etc.); the 'Digi'/'mixer' naming is suggestive only, per this project's core rule that naming is not technical evidence."
  ],
  "sources": [
    "SIDId sidid.nfo (name 'Digimixer', author 'Gyula Szalai (Jules)', released '199? Fun Factory', reference https://csdb.dk/release/?id=129559): data/sidid.json byTag.\"Digimixer/FunFactory\"",
    "CSDb release page 'Digimixer V2.0' (1993, Fun Factory, code credited to 'jay of Fun Factory', categorized 'C64 Tool', d64 download, 228 downloads): https://csdb.dk/release/?id=129559",
    "Local dataset: 6 files tagged 'Digimixer/FunFactory' — 4 by Booker, 2 by Walt — data/composers/booker.json, data/composers/walt.json"
  ]
}
```

## Overview

Digimixer (local/SIDId tag `Digimixer/FunFactory`) is a native C64 tool
released in 1993 by the group Fun Factory (CSDb release id 129559,
"Digimixer V2.0", categorized as a "C64 Tool" and distributed as a d64 disk
image). SIDId's index attributes it to Gyula Szalai (Jules); CSDb's own
release page instead credits the code to "jay of Fun Factory" — a spelling
discrepancy left unresolved here rather than silently merged. Unlike most
tags in this batch, none of the 6 locally-tagged files belong to the credited
author himself — they are split between Booker (Marcin Kubica, Poland, 4
files) and Walt (Anders Fogh, Denmark, 2 files) — real evidence of
third-party adoption of a genuinely distributed tool, not a personal routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) an unresolved author-handle
discrepancy between SIDId and CSDb ("Jules" vs "jay"); (2) 0-of-6 locally
tagged files belong to the credited author — real evidence of adoption
beyond a single composer's own output; (3) no SIDId comment or other source
confirms any specific sample-playback technique — the name alone is not
evidence.

## Disassembly notes

None done here. No public source repo or format spec was found for this
tool; all Tier 3 fields are `TODO`. A future pass could pull the CSDb-hosted
d64 (getinternalfile.php link on release 129559) and disassemble the tool
directly, since the disk image itself is public.

## Verification

Not verified. This card is `status: stub`: identity/release/platform facts
are SIDId- and CSDb-sourced (cited above); composer-adoption evidence is from
local dataset aggregation; no runtime fact has been disassembled or traced.

## Sources

See the `sources` array — SIDId's sidid.nfo, the CSDb release page for
"Digimixer V2.0", and local composer-file aggregation.

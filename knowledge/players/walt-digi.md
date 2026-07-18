# Walt_Digi

```json
{
  "id": "walt-digi",
  "name": "Walt_Digi",
  "aliases": ["Walt_Digi"],
  "authors": ["Anders Fogh (Walt)"],
  "released": "TODO: no tool-release date documented; sampled local file (Amiga Works II (part 1), CSDb sid id 30591) is dated 1991, Bonzai",
  "status": "stub",
  "platform": "TODO: appears to be a personal digi/sample-playback routine embedded in Walt's own tracks, distinct from his published 'Walt's Music Editor' — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "This tag is explicitly the sibling flagged (but deliberately NOT merged) by knowledge/players/walt-bonzai.md's own quirks: \"'Walt_Digi' is a SEPARATE raw tag/family in this project's aggregation..., also attributed to Anders Fogh (Walt) in data/sidid.json, but with no released/reference fields and no evidence tying it structurally to this editor's main player routine. Likely a companion digi-sample playback routine by the same author, but no edges entry is asserted here — similar name/author is not evidence of shared code.\" This card exists to give that sibling tag its own record.",
    "SIDId (data/sidid.json byTag.\"Walt_Digi\") records only 'AUTHOR: Anders Fogh (Walt)' — no name, released date, or comment.",
    "CSDb's scener page for Walt (id 1857) credits him with code/music/graphics/charset roles (not 'Sampling') on 'Amiga Works' and 'Amiga Works 2' (1991, Bonzai) — the productions matching several of the 5 locally-tagged filenames ('Amiga Works II (part 1/2/3)', etc.). No distinct sampling-role credit was found matching these specific files; the only 'Sampling'-role credit on his page at all is on a much later, unrelated 2022 release ('FIFA 2022').",
    "Fully single-composer usage: all 5 locally-tagged files belong to Walt (data/composers/walt.json); several are co-credited with Bjarke Vangsgaard as author (no CSDb scener profile match found for Vangsgaard during this research pass)."
  ],
  "sources": [
    "Cross-reference: knowledge/players/walt-bonzai.md quirks array (notes 'Walt_Digi' as a separate, not-merged sibling tag by the same author)",
    "SIDId sidid.nfo (author only): data/sidid.json byTag.\"Walt_Digi\"",
    "CSDb scener profile, Walt / Anders Fogh (groups Bonzai, Miami Fun Project; Denmark; code/music/graphics credits on 'Amiga Works'/'Amiga Works 2', no matching Sampling credit): https://csdb.dk/scener/?id=1857",
    "CSDb SID-file entry 'Amiga Works II (part 1)' (Anders Fogh & Bjarke Vangsgaard, 1991 Bonzai, PSID header): https://csdb.dk/sid/?id=30591",
    "Local dataset: 5 files tagged 'Walt_Digi', all under composer Walt — data/composers/walt.json"
  ]
}
```

## Overview

Walt_Digi is the local/SIDId raw tag for a digi/sample-playback routine
attributed to **Anders Fogh**, handle **Walt**, a Danish scener (group
Bonzai) — the same composer behind the published "Walt's Music Editor" (see
`knowledge/players/walt-bonzai.md`). That sibling card explicitly declines to
merge this tag in, treating it as a separate, unproven companion routine by
the same author; this card exists to give `Walt_Digi` its own honest record.
SIDId carries only an author line for this tag. All 5 locally-tagged files
belong to Walt himself, from the "Amiga Works II" series (1991, Bonzai);
CSDb credits him with code/music/graphics roles on those productions, not a
distinct "Sampling" role.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is the explicitly-flagged
sibling of `walt-bonzai.md`'s main tag, deliberately kept separate per this
project's "similar names/authors are not evidence of shared code" rule; (2)
SIDId has author only, no release/reference; (3) no CSDb "Sampling"-role
credit matches these specific files — only code/music/graphics roles are
credited on the matching "Amiga Works" productions.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`, seeded from the sibling
`walt-bonzai.md` card's own prior research, SIDId, CSDb's Walt scener
profile, and local dataset aggregation. No runtime fact has been
disassembled or traced.

## Sources

See the `sources` array — the `walt-bonzai.md` cross-reference, SIDId's
sidid.nfo, CSDb's Walt scener profile, one sampled CSDb SID-file entry, and
local composer-file aggregation.

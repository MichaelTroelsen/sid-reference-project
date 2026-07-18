# Yip_Digi

```json
{
  "id": "yip-digi",
  "name": "Yip_Digi",
  "aliases": ["Yip_Digi"],
  "authors": ["Jori Olkkonen (Yip)"],
  "released": "TODO: no release date documented; sampled local file (Netherworld, CSDb sid id 32109) header shows an unrelated 1988 game context (Hewson) — not a tool-release date",
  "status": "stub",
  "platform": "TODO: appears to be a personal digi/sample-playback routine embedded in Yip's own tracks, not a released standalone tool — no SIDId entry and no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "This tag is explicitly the sibling flagged (but deliberately NOT merged) by knowledge/players/yip-megasound.md's own quirks: \"A separate, smaller raw tag 'Yip_Digi' (6 files)...also exists for the same author but is NOT the same family as this card — it is used only by Yip's own composer folder(s), suggesting a distinct personal digi-playback routine. No edge is asserted here for lack of direct evidence of a code relationship between the two.\" This card exists to give that sibling tag its own record, per this project's rule that similar names/authors are not evidence of shared code.",
    "No SIDId entry exists for this tag at all (data/sidid.json byTag lookup for 'Yip_Digi' returns undefined) — unlike 'Yip_MegaSound' from the same author, which has a full name/release/reference/comment. That absence is itself a signal consistent with an unpublished, in-house routine rather than a titled, released tool.",
    "Perfectly single-composer usage: all 6 locally-tagged files belong to Yip/Jori Olkkonen himself, split across two HVSC composer folders — 'Yip' (3 files) and 'Jori Olkkonen' (3 files) — almost certainly the same person under two catalogue entries (per yip-megasound.md's own note on this duplication). 6/6 files, 100% self-use — the tightest possible personal-routine signature in this batch.",
    "No CSDb 'Sampling'-role credit was found on Yip's own scener page (id 2599) matching any of the locally-tagged titles (e.g. 'Netherworld') — his listed credits there are 'Music'/'Code', not a distinct sampling role. So unlike Mcee_Digi, Steve_Day_Digi, or Madhacker_Digi in this same batch (which have direct or partial CSDb 'Sampling' credit matches), the 'Digi' label here is unconfirmed by any scene credit — author attribution only, from the raw tag/filename pattern and file ownership."
  ],
  "sources": [
    "Cross-reference: knowledge/players/yip-megasound.md quirks array (notes 'Yip_Digi' as a separate, not-merged sibling tag by the same author)",
    "Local dataset: 6 files tagged 'Yip_Digi' across 2 HVSC composer folders for the same person — data/composers/yip.json (3), data/composers/jori-olkkonen.json (3)",
    "CSDb scener profile, Yip / Jori Olkkonen (groups Artline Designs, ex-Pure-Byte; Finland; no 'Sampling'-role credit found matching locally tagged titles): https://csdb.dk/scener/?id=2599",
    "CSDb SID-file entry 'Netherworld' (Jori Olkkonen, PSID header only): https://csdb.dk/sid/?id=32109",
    "data/sidid.json (checked: no 'Yip_Digi' entry exists in byTag, confirming the absence noted above)"
  ]
}
```

## Overview

Yip_Digi is the local/SIDId raw tag for a digi/sample-playback routine
attributed by file ownership to **Jori Olkkonen**, known as **Yip** of
Pure-Byte/Artline Designs (Finland) — the same composer behind the published
"MegaSound Music Editor" (see `knowledge/players/yip-megasound.md`). That
sibling card explicitly declines to merge this tag in, noting it as a
separate, unpublished personal routine; this card exists to give `Yip_Digi`
its own honest record rather than leave it uncarded. Unlike MegaSound, this
tag has no SIDId entry at all, and every one of its 6 locally-tagged files
belongs to Yip himself (across two HVSC composer folders that are almost
certainly the same person) — a purely personal, unreleased routine by every
locally-available signal.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this is the explicitly-flagged
sibling of `yip-megasound.md`'s tag, deliberately kept separate per this
project's "similar names/authors are not evidence of shared code" rule; (2)
no SIDId entry exists for this tag at all, unlike the author's published
tool; (3) 100% single-composer, self-use file ownership; (4) no CSDb scene
credit corroborates a "sampling" role for these specific files.

## Disassembly notes

None done here. No public source, CSDb tool/release entry, or format
documentation was located for this tag. All Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`, seeded entirely from local dataset
aggregation, the sibling `yip-megasound.md` card's own prior research, and
one CSDb scener-profile check. No runtime fact has been disassembled or
traced.

## Sources

See the `sources` array — the `yip-megasound.md` cross-reference, local
composer-file aggregation, CSDb's Yip scener profile, and one sampled CSDb
SID-file entry.

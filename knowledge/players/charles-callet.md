# Charles_Callet (player routine)

```json
{
  "id": "charles-callet",
  "name": "Charles_Callet (player routine)",
  "aliases": ["Charles_Callet"],
  "authors": ["Charles Callet"],
  "released": "TODO: no RELEASED/REFERENCE field; data/sidid.json has no entry for this exact tag",
  "status": "stub",
  "platform": "TODO: no CSDb tool release or source repo found. See quirks — a possibly-different SIDId signature from the same composer's separately-tagged 'CharlesCallet/MusicPro' routine.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "1-FILE TAG, SAME COMPOSER AS A SEPARATELY-TAGGED SIDId SIGNATURE: the sole locally-tagged file ('Hostages', csdb id 1489, data/composers/charles-callet.json) is by Charles Callet, who also has 4 files under the distinct tag 'CharlesCallet/MusicPro' (see knowledge/players/charlescallet-musicpro.md). SIDId's fingerprint scanner recognises these as two DIFFERENT byte signatures on the same author's disk — this card does NOT merge them, since no source confirms whether 'Hostages' uses an earlier/later/alternate version of the same routine or something unrelated.",
    "No SIDId entry exists for the plain 'Charles_Callet' tag itself (data/sidid.json checked, absent) — unlike 'CharlesCallet/MusicPro', which does have a SIDId record naming the Amstrad CPC tool 'Music Pro' it is styled after (see the sibling card).",
    "Single-file, single-composer — the minimal personal-routine signature; not inflated beyond what the one file supports."
  ],
  "sources": [
    "data/sidid.json: no entry for 'Charles_Callet' (checked, absent)",
    "Local dataset: data/composers/charles-callet.json — 1 file tagged 'Charles_Callet' ('Hostages', csdb id 1489); see knowledge/COVERAGE.md row #104 (1 file)",
    "knowledge/players/charlescallet-musicpro.md (status: stub) — sibling card for the same composer's other, SIDId-attested tag; cited for corroborating context, not edited"
  ]
}
```

## Overview

`Charles_Callet` is a bare-name SIDId signature tag matching a single locally
tagged file, "Hostages" (csdb id 1489), by French musician **Charles Callet**.
No SIDId fingerprint entry exists for this exact tag. Callet also has a
separately-tagged, SIDId-attested signature, `CharlesCallet/MusicPro` (see
`knowledge/players/charlescallet-musicpro.md`) — the two are recorded as
distinct signatures, since nothing confirms whether they represent the same
underlying routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is deliberately kept separate from
the sibling `CharlesCallet/MusicPro` card — no evidence merges them.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** A single-file, single-composer identity
stub; no runtime fact confirmed.

## Sources

See the `sources` array — local composer-file aggregation and the sibling
`charlescallet-musicpro.md` card (cited, not edited).

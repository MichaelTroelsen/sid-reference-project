# Sentinel_V0.4

```json
{
  "id": "sentinel-v04",
  "name": "Sentinel_V0.4",
  "aliases": ["Sentinel_V0.4"],
  "authors": ["Sentinel"],
  "released": "TODO: no direct SIDId or CSDb record for this specific version found; a same-author sibling tag 'Sentinel_V0.7' is dated 2020 (see quirks) but that is NOT evidence for V0.4's own date",
  "status": "stub",
  "platform": "TODO: platform not confirmed for this specific version tag",
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
    "No sidid.nfo entry exists for the exact tag 'Sentinel_V0.4' (checked data/sidid.json byTag — absent). A DIFFERENT, sibling tag 'Sentinel_V0.7' DOES have a full SIDId record: NAME 'Sentinel Music Player V07.G0', AUTHOR 'Sentinel', RELEASED '2020 Sentinel', REFERENCE CSDb release 202684. Both tags share the composer/author handle 'Sentinel' and are grouped together in knowledge/COVERAGE.md's row 2 (combined 9 files: 'Sentinel_V0.4, Sentinel_V0.7'), strongly suggesting V0.4 is an earlier, unreleased-to-SIDId build of the same 'Sentinel Music Player' — but this is inference from the shared author/naming pattern, NOT a direct citation for V0.4 itself, so 'released'/'platform' stay TODO rather than borrowing V0.7's dates.",
    "V0.7 (not in this batch, uncarded) is a candidate to card separately with the full SIDId record; if/when it is, this card's edges should be revisited for a possible successor_of/derives_from relationship — not asserted here without direct version-history evidence.",
    "100% single-composer concentration: all 4 locally-tagged 'Sentinel_V0.4' files belong to the composer 'Cherubs_Sentinel' (handle Sentinel, Hungary — data/composers/cherubs-sentinel.json), consistent with a personal routine."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Sentinel_V0.4' (absent from data/sidid.json); sibling tag 'Sentinel_V0.7' entry present (NAME 'Sentinel Music Player V07.G0', AUTHOR Sentinel, RELEASED 2020, REFERENCE csdb.dk/release/?id=202684): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release for the sibling tag's tool, 'Sentinel Music Player V07.G0' (2020): https://csdb.dk/release/?id=202684",
    "Local dataset: 4 files tagged Sentinel_V0.4, all by composer 'Cherubs_Sentinel' — data/composers/cherubs-sentinel.json; see knowledge/COVERAGE.md (grouped row: 9f total across Sentinel_V0.4 + Sentinel_V0.7)",
    "CSDb scener profile, Sentinel (Hungary): https://csdb.dk/scener/?id=22185"
  ]
}
```

## Overview

Sentinel_V0.4 is a SIDId Player-ID tag with no `sidid.nfo` entry of its own,
credited by local data to the author/composer handle **Sentinel** (Hungary).
A sibling tag, `Sentinel_V0.7`, IS fully documented by SIDId as "Sentinel
Music Player V07.G0", released 2020 by the same author — grouped alongside
V0.4 in `knowledge/COVERAGE.md`'s raw-tag list, which is suggestive of an
earlier build of the same tool, but that is inference, not a direct
citation, so this card does not borrow V0.7's release date or platform
facts. Locally V0.4 appears in **4 files, all by the composer Cherubs
Sentinel** himself (data/composers/cherubs-sentinel.json).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for V0.4
itself, only for the sibling V0.7 tag; (2) do not borrow V0.7's
release/platform facts for V0.4 without direct evidence; (3) 100%
single-composer usage.

## Disassembly notes

None done here. No public source or CSDb tool entry was found under this
specific version tag. All Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/cherubs-sentinel.json`,
`data/sidid.json` (including the sibling V0.7 record for context), and a
CSDb scener-page check. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (V0.4 absent, V0.7 present for
context), the CSDb release page for the V0.7 tool, the local composer
aggregation, and the CSDb scener profile for Sentinel.

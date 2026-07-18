# ALiH

```json
{
  "id": "alih",
  "name": "ALiH",
  "aliases": ["ALiH", "256bytes/ALiH"],
  "authors": ["Jaymz Julian (A Life in Hell)"],
  "released": "TODO: no tool-release date found",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/release entry found under this name — appears to be an in-house routine (with a separate, size-optimized 256-byte variant tag) rather than a released standalone editor (unconfirmed)",
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
    "SIDId's sidid.nfo carries only an AUTHOR line for the bare 'ALiH' tag — 'Jaymz Julian (A Life in Hell)' — no NAME/RELEASED/REFERENCE/COMMENT. No sidid.nfo entry exists at all for the sibling '256bytes/ALiH' tag.",
    "'256bytes/ALiH' is folded into this card as an alias rather than carded separately: it is the SAME author (Jaymz Julian) and the SAME composer usage pattern, differing only by a '256bytes/' size-category prefix — read as a size-constrained (256-byte intro/compo) variant of the same personal routine, not a distinct tool. Per this project's convention, bare size-category tags are normally skipped unless tied to a real, identifiable reused routine; here the author match to the already-attested 'ALiH' tag is that evidence.",
    "100% single-composer concentration across BOTH tag variants: all 7 locally-tagged files (5 'ALiH' + 2 '256bytes/ALiH') belong to the composer 'Jaymz Julian' alone (data/composers/jaymz-julian.json, handle 'A Life in Hell', Australia/USA) — the strongest available personal-routine signal.",
    "No web search turned up a released tool or CSDb entry titled 'ALiH' or 'A Life in Hell [player]' — the tag name matches the composer's own handle, consistent with a self-named in-house routine."
  ],
  "sources": [
    "SIDId sidid.nfo (author only for 'ALiH'; no entry at all for '256bytes/ALiH'): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 5 files tagged 'ALiH' + 2 files tagged '256bytes/ALiH', all by composer 'Jaymz Julian' — data/composers/jaymz-julian.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, Jaymz Julian / A Life in Hell (Australia, USA): https://csdb.dk/scener/?id=290"
  ]
}
```

## Overview

ALiH is a SIDId Player-ID tag attributed to **Jaymz Julian**, whose handle
"A Life in Hell" is the tag's namesake. SIDId's record is author-only, with
no title, release date, or CSDb reference. Locally it (and its sibling
size-category tag `256bytes/ALiH`, folded in here as an alias — see
quirks) spans **7 files total, 100% by Jaymz Julian himself**
(data/composers/jaymz-julian.json). No dedicated CSDb tool/release entry
was found under either tag name, consistent with a self-named, in-house
routine rather than a published editor.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's record is author-only,
and `256bytes/ALiH` has no SIDId record at all; (2) `256bytes/ALiH` is
treated as an alias of this same personal routine (same author, same sole
composer) rather than carded separately, per the project's size-category
convention; (3) 100% single-composer usage across both variants.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/jaymz-julian.json`,
`data/sidid.json`, and a CSDb scener-page check. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, local composer aggregation, and
the CSDb scener profile for Jaymz Julian.

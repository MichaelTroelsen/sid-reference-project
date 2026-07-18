# Hermit (bare tag)

```json
{
  "id": "hermit",
  "name": "Hermit (bare Player-ID tag)",
  "aliases": ["Hermit"],
  "authors": ["Mihály Horváth (Hermit)"],
  "released": "TODO: no explicit tool-release date found for this specific tag",
  "status": "stub",
  "platform": "TODO: no dedicated CSDb tool/editor release found under the bare name 'Hermit' — plausibly an early or in-house routine predating/distinct from his later, separately tagged and already-carded tools (unconfirmed)",
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
    "DISTINCT FROM this project's already-carded Hermit tools: the bare 'Hermit' Player-ID tag is NOT the same tag as 'Hermit/SidWizard_V1.x' (carded as knowledge/players/sidwizard.md, 988 files) or 'Hermit/1RasterTracker' (carded as knowledge/players/1-raster-tracker.md). SIDId's sidid.nfo has no entry for a bare 'Hermit' tag (checked) — only the versioned/tool-suffixed tags exist there. This card covers ONLY the bare tag.",
    "sidwizard.md's own quirks note Hermit 'also authored related tools (3SID, FlexSID, 1RasterTracker) that tag separately' — and two of the 6 locally-tagged 'Hermit' files are literally titled '3SID Tracker Demo 1/2/3', suggesting the bare tag may be an early/pre-release or unresolved signature for one of his other named tools (plausibly an early 3SID build) rather than a wholly separate fourth routine. This is inference from filenames only, NOT confirmed by disassembly or a SIDId entry — left TODO.",
    "Single-composer concentration: all 6 files are by Hermit himself (Mihály Horváth, Hungary, CSDb scener 18806) — consistent with an in-house/early-development routine rather than a released, separately-branded tool."
  ],
  "sources": [
    "sidid.nfo checked, no matching bare 'Hermit' entry (only versioned Hermit/* tags exist): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Mihály Horváth / Hermit (Hungary): https://csdb.dk/scener/?id=18806",
    "Existing KB cards for Hermit's other, separately-tagged tools: knowledge/players/sidwizard.md, knowledge/players/1-raster-tracker.md",
    "Local dataset: 6 files tagged bare 'Hermit', all by Hermit himself — see data/composers/hermit.json"
  ]
}
```

## Overview

`Hermit` (bare tag, no tool suffix) is a raw Player-ID signature attributed
to **Mihály Horváth**, handle **Hermit** (Hungary, CSDb scener 18806) — the
same author behind the already-carded [SID-Wizard](sidwizard.md) and
[1 Raster-Tracker](1-raster-tracker.md). This bare tag is distinct from
both of those (SIDId has no entry for it, only the versioned/suffixed tags).
All 6 locally-tagged files are by Hermit himself; two are titled "3SID
Tracker Demo 1/2/3", hinting this may be an early/unresolved signature for
one of his other named tools rather than a genuinely separate fourth
routine — unconfirmed.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this tag is **not** the same as
`Hermit/SidWizard_V1.x` or `Hermit/1RasterTracker`, both already carded;
the filename overlap with "3SID Tracker Demo" files is a plausible but
unconfirmed lead toward an early 3SID build; single-composer concentration
(6/6 files by Hermit himself) marks this as personal/in-house.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec confirmed
specific to this bare tag (as opposed to SID-Wizard's, which is documented).

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/hermit.json`, `data/sidid.json`) plus CSDb scener page and
cross-reference against sibling Hermit cards. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb scener page
for Hermit, sibling KB cards, and the local composer aggregation.

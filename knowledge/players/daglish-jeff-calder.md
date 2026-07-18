# Daglish/?Jeff_Calder

```json
{
  "id": "daglish-jeff-calder",
  "name": "Daglish/?Jeff_Calder",
  "aliases": ["Daglish/?Jeff_Calder"],
  "authors": ["Ben Daglish (credited composer)", "Jeff Calder (uncertain — SIDId's own '?'-flagged secondary attribution)"],
  "released": "1991 (Switchblade, Gremlin Graphics)",
  "status": "stub",
  "platform": "TODO: a DISTINCT Player-ID signature from the already-carded 'Ben_Daglish/Gremlin' tag (knowledge/players/ben-daglish.md) — the leading '?' in SIDId's own tag naming flags the tool's own uncertainty about the secondary attribution; possibly a Switchblade-specific driver rather than Daglish's usual Gremlin-house routine",
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
    "SIDId's sidid.nfo has NO entry for the exact tag 'Daglish/?Jeff_Calder' (checked) — the raw tag string itself, with its leading '?' before the secondary name, is Player-ID's own uncertainty marker; not corroborated by any SIDId comment.",
    "The single locally tagged file is 'Switchblade', by Ben Daglish (data/composers/ben-daglish.json). Switchblade (1991, Gremlin Graphics) is independently confirmed via web sources: Ben Daglish composed the music, and Jeff Calder programmed the game — Calder was the GAME's coder, not usually credited as a musician. This raises a plausible (but UNCONFIRMED) reading: the tag may denote a Switchblade-specific in-game driver, possibly written or adapted by Calder as the game's programmer, distinct from Daglish's usual Gremlin-house routine documented in [[ben-daglish]] (54 files, Ben_Daglish/Gremlin tag) — which does NOT include this file.",
    "NOT MERGED with knowledge/players/ben-daglish.md: different raw tag string, and the '?Jeff_Calder' qualifier is evidence of a genuinely distinct signature rather than a simple alias — no edge asserted absent a real disassembly comparing this file's driver against the Ben_Daglish/Gremlin routine.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Daglish/?Jeff_Calder': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/ben-daglish.json (folder[] entry for 'Switchblade', player tag 'Daglish/?Jeff_Calder')",
    "Web search corroboration: Switchblade (1991, Gremlin Graphics) — music by Ben Daglish, programming by Jeff Calder (multiple sources incl. YouTube upload credits and Wikipedia's Ben Daglish game-credit list): https://en.wikipedia.org/wiki/Ben_Daglish",
    "Sibling KB card, cross-checked for false-merge risk (kept separate; no code-sharing evidence found): knowledge/players/ben-daglish.md",
    "Local dataset: 1 file tagged Daglish/?Jeff_Calder — 'Switchblade', by Ben Daglish"
  ]
}
```

## Overview

Daglish/?Jeff_Calder is a Player-ID tag applied to a single locally tagged
file, "Switchblade" (1991, Gremlin Graphics), credited to composer **Ben
Daglish**. The tag's own leading `?` before "Jeff_Calder" — Switchblade's
real-world game programmer, not usually a credited musician — is
Player-ID's own uncertainty marker about a secondary attribution. This is a
DISTINCT signature from the much larger, already-carded
[Ben_Daglish/Gremlin](ben-daglish.md) tag (54 files); this file is not
among those 54, and no evidence merges the two absent a disassembly.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the tag's own `?` marks SIDId's
uncertainty, not a confirmed co-authorship; (2) Jeff Calder is confirmed as
Switchblade's real programmer, raising a plausible-but-unconfirmed reading
that this could be a game-specific driver distinct from Daglish's usual
Gremlin routine; (3) deliberately NOT merged with `ben-daglish.md` given
the different raw tag and lack of code-level evidence.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. A disassembly of the Switchblade `.sid` compared
against a Ben_Daglish/Gremlin file would resolve whether these are the same
driver.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/ben-daglish.json`, `data/sidid.json`) plus web
corroboration of Switchblade's real credits. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer data, web corroboration of Switchblade's credits, and the sibling
ben-daglish.md card.

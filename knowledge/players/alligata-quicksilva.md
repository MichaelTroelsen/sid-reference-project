# Alligata/Quicksilva (uncertain authorship — early Crowther/Daglish-era driver)

```json
{
  "id": "alligata-quicksilva",
  "name": "Alligata/Quicksilva (uncertain authorship — early Crowther/Daglish-era driver)",
  "aliases": ["?Alligata/Quicksilva"],
  "authors": ["UNCONFIRMED — the tag names two early-1980s C64 publishers (Alligata Software, Quicksilva), not a person. Composers Antony Crowther and Ben Daglish are attributed via local HVSC data; no source names an individual driver author."],
  "released": "TODO: earliest locally-tagged file is 'Gryphon' (Quicksilva, 1984, per VGMPF's Crowther gameography); Alligata-published work by these composers also dates to 1983-1984",
  "status": "stub",
  "platform": "TODO: native C64, presumably an in-house driver used by Antony Crowther (and, via collaboration, Ben Daglish) during their early 1983-1984 work for Alligata Software and Quicksilva — predating Crowther's later, NAMED 'Music Master' compiler (published March 1986, see [[antony-crowther]]) and distinct from the separate, later 'Antony_Crowther_V3' Gremlin-era driver (see [[antony-crowther-v3]]). This tag is its own, third SIDId-adjacent signature; no source confirms it is the same code as either sibling.",
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
    "5 files, 2 composers, both already documented elsewhere in this KB via other tags: Antony Crowther (3 files — Gryphon, Killer Watt, Run Like Hell) and Ben Daglish (2 files — Black Thunder, Percy the Potty Pigeon). VGMPF's own Crowther gameography lists Gryphon, Killer Watt/Killerwatt, and Percy the Potty Pigeon among his early credits, but names no specific pre-'Music Master' driver anywhere on that page — confirming the games/composers, not a driver name.",
    "A separate, well-documented Crowther/Daglish collaboration from the same period — 'Loco' (Alligata, 1984, code by Crowther, music by Daglish) — is NOT among this tag's 5 files, but corroborates that the two worked together on Alligata titles in this exact era, consistent with this tag's composer pairing.",
    "DELIBERATELY NOT MERGED with [[antony-crowther]] (Antony_Crowther_V1/V2, the 'Music Master' BASIC compiler, published 1986) or [[antony-crowther-v3]] (the later, uncertain-authorship Gremlin-era driver, 1986-1993): this is a THIRD, distinctly-named raw tag with no source stating it is the same code as either. Following the same caution those two sibling cards already apply to each other (a shared composer or name fragment is not evidence of one driver), no `edges` relationship is asserted here.",
    "Given the 1983-1984 dating (predating Music Master's 1986 publication), this could plausibly be the earliest of the three Crowther-adjacent tags in this KB — the routine Crowther was using before he wrote and published Music Master — but that reading is inference from timeline alone, not a sourced claim."
  ],
  "sources": [
    "VGMPF — Antony Crowther (gameography incl. Gryphon, Killer Watt, Percy the Potty Pigeon; no pre-Music-Master driver name given): https://vgmpf.com/Wiki/index.php/Antony_Crowther",
    "VGMPF — Ben Daglish: https://vgmpf.com/Wiki/index.php/Ben%20Daglish",
    "Local dataset: data/composers/antony-crowther.json (3 files), data/composers/ben-daglish.json (2 files); knowledge/COVERAGE.md rank #20",
    "Existing KB cards: knowledge/players/antony-crowther.md (Music Master, V1/V2), knowledge/players/antony-crowther-v3.md (uncertain-authorship Gremlin-era driver) — cited for the deliberate non-merge reasoning",
    "data/sidid.json byTag — checked, no entry for '?Alligata/Quicksilva'"
  ]
}
```

## Overview

`?Alligata/Quicksilva` is a raw Player-ID tag covering 5 files by
**Antony Crowther** and **Ben Daglish**, named after two early-1980s C64
publishers (Alligata Software, Quicksilva) both composers worked with in
1983-1984 — before Crowther wrote and published his named "Music Master"
compiler in March 1986 (documented on [[antony-crowther]]), and well before
the separate, later "Antony_Crowther_V3" Gremlin-era driver documented on
[[antony-crowther-v3]]. No source names an individual author for this
specific tag or confirms it shares code with either sibling; it is kept as
its own card rather than folded into either, on the same "shared name is
not evidence" caution those two cards already apply to each other.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) this pre-dates the documented
1986 Music Master publication, making it plausibly the earliest of three
Crowther-adjacent driver tags in this KB, though that is timeline inference
only; (2) VGMPF confirms the composer/game pairing but names no driver;
(3) deliberately not merged with either sibling Crowther card.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only composer/game identity is
confirmed (VGMPF, local data). No runtime fact was guessed.

## Sources

See the `sources` array — VGMPF (Crowther and Daglish pages), this
project's local composer data, and the two sibling Crowther cards.

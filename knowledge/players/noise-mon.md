# Noise-Mon

```json
{
  "id": "noise-mon",
  "name": "Noise-Mon",
  "aliases": ["Noise-Mon_V2"],
  "authors": ["Piotr Pisula"],
  "released": "1992 Piotr Pisula",
  "status": "stub",
  "platform": "TODO: native C64 tool vs cross-platform editor not documented anywhere found — no CSDb release, no author page, no Codebase64/HVSC writeup located",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly, no public source",
    "zero_page": "TODO: no disassembly, no public source",
    "layout": "TODO: no disassembly, no public source"
  },
  "entry": {
    "init": "TODO: no disassembly, no public source",
    "play": "TODO: no disassembly, no public source"
  },
  "speed": "TODO: not documented",

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
    "Only 8 files in the local dataset carry the Noise-Mon_V2 Player-ID tag, split between exactly 2 composers — Moog (Sebastian Bachliński, 6 files) and Snowball (Sebastian Sobczyk, 2 files), both Polish sceners. Author 'Piotr Pisula' is also plausibly Polish, but no source directly ties him to either composer or names a group/team — this is an observation, not a claimed connection.",
    "SIDId's own database (sidid.nfo, the source of the author/year fields here) records NO `reference` (no CSDb release id) and NO `comment` for this tag — unusually thin even by SIDId's standards, where most entries at least link a CSDb release.",
    "Extensive CSDb search (release/scener full-text search for both 'Noise-Mon' and 'Pisula') returned zero hits — no release page, no scener page. This tool/author combination appears to have no CSDb presence at all, which is itself notable: most tagged C64 tools have at least a stub release entry.",
    "Given the file count (8), composer concentration (2 composers, 6/8 = 75% one composer), and total absence of independent documentation, this reads as a small/personal or very short-lived routine rather than a widely published editor — but that is inference from the numbers, not a sourced claim."
  ],
  "sources": [
    "sidid:Noise-Mon_V2 (author Piotr Pisula; released 1992 Piotr Pisula; no reference, no comment) — deepsid_dl/sidid.nfo line 1132, mirrored in data/sidid.json",
    "Local dataset: 8 files tagged Noise-Mon_V2 across 2 composers (Moog, Snowball) — see knowledge/COVERAGE.md rank 29 and data/composers/Moog.json, data/composers/Snowball.json",
    "CSDb full-text search for 'Noise-Mon' and 'Pisula' (2026-07-17): no results in either case — https://csdb.dk/search/?seinsel=all&search=noise-mon , https://csdb.dk/search/?seinsel=all&search=pisula",
    "Not present in data/players.json (no curated DeepSID player entry exists for this tag; it is DeepSID-inferred/synthetic only)"
  ]
}
```

## Overview

`Noise-Mon_V2` is a Player-ID signature tag attributed by SIDId to author
Piotr Pisula, 1992. It has no curated entry in DeepSID's `players.json` — it
only surfaces here as one of DeepSID's synthetic "inferred" players (a raw
tag with no matching curated tool) — and SIDId's own record for it is
unusually bare: an author and a year, but no CSDb reference and no
playback-technique comment. In this project's dataset it appears on just 8
files split between two Polish composers, Moog and Snowball. Composer
concentration this narrow (2 composers, one at 75%) is the same signal used
elsewhere in this knowledge base (cf. Rob Hubbard's 51-composer spread vs. a
true personal routine) to suggest a small or personal tool rather than a
broadly adopted editor — but no source states that outright, so it stays an
observation, not a fact in the JSON block.

## Quirks & gotchas

See the `quirks` array. The load-bearing point: this is about as thin as a
Player-ID tag gets — SIDId supplies an author and year with no corroborating
CSDb release, and a direct CSDb search for both the tool name and the
author's name returns nothing. Nothing here should be read as more than
"SIDId says so."

## Disassembly notes

None. No public source or disassembly was found for this player; all Tier 3
(memory map, entry points, data format, effects) fields are honestly `TODO`.
A future pass would need to disassemble one of the 8 tagged `.sid` files
(via PSID header init/play) from scratch — there is no prior art to seed it.

## Verification

**Not verified — `status: stub`.** Only the SIDId-sourced identity facts
(author, year) and the local dataset's usage facts (file/composer counts)
are confirmed. Every runtime field is `TODO` because no disassembly, source,
or independent documentation of this tool was found anywhere searched
(CSDb release/scener search, general web search).

## Sources

See the `sources` array — SIDId's `sidid.nfo` entry (the only identity
source found), this project's local dataset (`data/composers/*.json`,
`knowledge/COVERAGE.md`), and the negative result of a CSDb search for both
the tool name and the author's name.

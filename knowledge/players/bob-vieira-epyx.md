# Bob Vieira / Epyx

```json
{
  "id": "bob-vieira-epyx",
  "name": "Bob Vieira / Epyx",
  "aliases": ["?Bob_Vieira/Epyx"],
  "authors": ["Bob Vieira (Robert Vieira)"],
  "released": "TODO: no explicit tool-release date found; locally tagged titles are Epyx-published C64 games across several years (unconfirmed exact years per file)",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 music routine used on Epyx's own game conversions, credited to composer Bob Vieira — no dedicated CSDb tool/editor release found under this name (unconfirmed)",
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
    "The '?' PREFIX means this is a Player-ID signature that its own tooling flags as an UNCONFIRMED/heuristic match, not a fully certain identification — but UNLIKE a bare '?Unknown_*' tag, this one DOES carry an identifiable author (Bob Vieira) and publisher (Epyx) baked into the tag itself, and both are independently corroborated: the local composer profile confirms Bob Vieira's (Robert Vieira, USA) affiliation field is literally 'Epyx' (data/composers/bob-vieira.json), and web search confirms Bob Vieira was Epyx's credited musician on 'Summer Games II' and other Epyx titles.",
    "SIDId's sidid.nfo has NO entry for '?Bob_Vieira/Epyx' (checked) — the tag exists only in this project's own local Player-ID data, not corroborated by SIDId's independent database.",
    "All 4 locally tagged files are Epyx-published/associated C64 games credited to Bob Vieira: Barbie, G.I. Joe, The Movie Monster Game, Summer Games II — spanning what appear to be several different release years (Summer Games II is mid-1980s; Barbie is a later, 1990s-era Epyx-adjacent title), suggesting a reused in-house routine across a broad span of Bob Vieira's Epyx work rather than a single game's one-off code.",
    "'DIGI BY NAME IS NOT EVIDENCE': no sample/digi technique is confirmed for this tag — SIDId has no comment field, and no manual/source was found describing the routine's playback mechanism. Left TODO."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for '?Bob_Vieira/Epyx': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local composer profile confirming affiliation 'Epyx': data/composers/bob-vieira.json",
    "Web search corroborating Bob Vieira as Epyx's credited composer (e.g. Summer Games II, The Games: Summer Edition)",
    "Local dataset: 4 files tagged ?Bob_Vieira/Epyx, all by Bob Vieira — Barbie, G.I. Joe, The Movie Monster Game, Summer Games II"
  ]
}
```

## Overview

`?Bob_Vieira/Epyx` is a raw (heuristically-flagged, `?`-prefixed) Player-ID
tag credited to composer **Bob Vieira** (Robert Vieira, USA), whose
affiliation is recorded locally as **Epyx**, the US games publisher. All 4
locally-tagged files are Epyx titles credited to Bob Vieira (Barbie, G.I.
Joe, The Movie Monster Game, Summer Games II). SIDId has no independent
entry for this exact tag; no dedicated CSDb tool/release page or technical
writeup was found.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the leading `?` marks this as an
unconfirmed/heuristic Player-ID match, but the embedded author+publisher
names ARE independently corroborated by local composer data and a web
search — this is not a bare, unidentifiable `?Unknown_*` signature. No
sample/digi technique is confirmed (TODO, not inferred from any name).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/bob-vieira.json`, `data/sidid.json`) plus a web search for
provenance context. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), local composer
profile, web search, and the local file aggregation.

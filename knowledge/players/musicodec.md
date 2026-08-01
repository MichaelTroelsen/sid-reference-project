# Musicodec

```json
{
  "id": "musicodec",
  "name": "Musicodec",
  "aliases": ["Musicodec"],
  "authors": ["Fabian Rosenschein"],
  "released": "TODO: no explicit tool-release date found. Earliest attested use (census of both tagged files, via CSDb SID metadata): 'Reactor Run', 1986 Golden Games (csdb.dk sid id 1793); also used in 'Pink Panther', 1988 Magic Bytes (csdb.dk sid id 45229). 1986 predates VGMPF's cited 1988 example and matches VGMPF's Golden Games employment window.",
  "status": "stub",
  "platform": "In-house C64 music driver personally programmed by Fabian Rosenschein while working for Gehrmann's companies Golden Games and reLINE Software (active 1986-1992 per VGMPF) — not confirmed as a standalone released editor; no dedicated CSDb tool/release entry found under this name (confirmed via csdb.dk site search for 'Musicodec': 'We were unable to find anything for you').",
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
    "SIDId gives a PARTIAL entry: name 'Musicodec', author 'Fabian Rosenschein' — but no released date, reference, or comment field (data/sidid.json byTag['Musicodec']).",
    "VGMPF's Fabian Rosenschein biography independently confirms the driver's existence and name by the composer's own naming: 'Rosenschein programmed a driver he eventually called \"Musicodec\"', used for at least the C64 version of Pink Panther (1988). VGMPF's own article flags its Musicodec section as needing improvement — technical detail beyond the name/attribution is not available there either.",
    "100% single-composer concentration: both locally tagged files ('Pink Panther', 'Reactor Run') belong to Rosenschein himself (data/composers/fabian-rosenschein.json) — 'Pink Panther' matches the VGMPF-cited game exactly.",
    "Composer profile: Germany, DeepSID focus1 'PRO', active from 1988 (data/composers/fabian-rosenschein.json) — worked for Golden Games and reLINE Software 1986-1992 per VGMPF.",
    "Census of both tagged files via CSDb SID metadata (csdb.dk webservice type=sid): 'Reactor Run' Released '1986 Golden Games' (id 1793), 'Pink Panther' Released '1988 Magic Bytes' (id 45229). The 1986 Reactor Run date is earlier than VGMPF's single cited example (Pink Panther, 1988) and fits the Golden Games portion of Rosenschein's 1986-1992 employment window.",
    "No dedicated CSDb release/tool entry for 'Musicodec' exists — csdb.dk's own site search for the term returns no results ('We were unable to find anything for you').",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo (name + author, no reference/comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag['Musicodec'] = {\"name\":\"Musicodec\",\"author\":\"Fabian Rosenschein\"}",
    "VGMPF, Fabian Rosenschein (driver name/origin, Golden Games/reLINE employment, Pink Panther C64 credit): https://www.vgmpf.com/Wiki/index.php?title=Fabian_Rosenschein",
    "data/composers/fabian-rosenschein.json (profile: full_name Fabian Rosenschein, country Germany, focus1 PRO, active 1988)",
    "Local dataset: 2 files tagged Musicodec, single composer (see knowledge/COVERAGE.md)",
    "CSDb webservice, SID entry for 'Reactor Run' (Released 1986 Golden Games): https://csdb.dk/webservice/?type=sid&id=1793",
    "CSDb webservice, SID entry for 'Pink Panther' (Released 1988 Magic Bytes): https://csdb.dk/webservice/?type=sid&id=45229",
    "CSDb site search for 'Musicodec' — no release/tool entry found: https://csdb.dk/search/?seinsel=all&search=Musicodec",
    "Lemon64 and Forum64 forum searches for 'Musicodec' could not be completed this pass — Lemon64's search requires a logged-in session ('you are not permitted to use the search system') and Forum64 returned HTTP 403 to an unauthenticated fetch; no browser tool was available in this session to work around it. Flagging rather than guessing."
  ]
}
```

## Overview

Musicodec is an in-house C64 music driver personally written by **Fabian
Rosenschein**, a German composer/programmer who worked for Golden Games and
reLINE Software (1986-1992). VGMPF's own biography of Rosenschein confirms
the driver's name and origin in the composer's own words, and cites its use
in the C64 port of Pink Panther (1988) — which matches one of the 2 locally
tagged files exactly. A full census of both tagged files against CSDb's own
SID metadata shows the driver's earliest attested use is actually the
*other* file, "Reactor Run" (1986, Golden Games) — two years earlier than
VGMPF's cited example, and consistent with the Golden Games portion of
Rosenschein's employment window. No CSDb tool/release entry for "Musicodec"
itself exists (confirmed by CSDb site search), so no explicit tool release
date or `csdb_release` id can be recorded — both remain honest gaps.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId gives name+author but no
further detail; (2) VGMPF independently corroborates the driver's name and
at least one real game credit (Pink Panther), matching local data; (3)
100% single-composer usage, consistent with a personal in-house driver;
(4) a census of both tagged files' CSDb `Released` fields moves the
earliest attested use back to 1986 (Reactor Run), not the 1988 Pink
Panther date VGMPF happens to cite; (5) no CSDb tool/release entry for
"Musicodec" exists at all, confirmed by direct site search.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/fabian-rosenschein.json`, `data/sidid.json`) plus VGMPF.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, VGMPF, and the local composer
profile.

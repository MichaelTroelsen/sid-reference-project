# Maxx_Digi

```json
{
  "id": "maxx-digi",
  "name": "Maxx_Digi",
  "aliases": ["Maxx_Digi"],
  "authors": ["Zana Bela (Maxx)"],
  "released": "TODO: no dedicated tool/player release date documented. Full census (all 5 tagged files, via scripts/lib/csdb-client.js type=sid) of each file's own CSDb `Released` field: all 5 read the identical imprecise '199? Alien Destruction' (Acid Party csdb id 47871, Dream World (intro) 47870, Last Words 47873, Red Sector 47872, Smile On 47874). All 5 also share the same `UsedIn` release: 'Dream World' (CSDb release id 67650, C64 Music Collection, Alien Destruction, ReleaseYear 1997). CSDb's Maxx scener profile (id 18888) lists exactly one Code credit and it is on this same release 67650 (1997) — so the routine's only attested construction date is 1997, via the release it was built for, not the tunes' own imprecise field.",
  "status": "stub",
  "platform": "Native C64, in-house/personal digi-sample routine, not a distributed standalone tool. Evidence: (1) local dataset tags all 5 files `player_type: \"Normal built-in\"` (data/composers/maxx.json); (2) CSDb scener profile for Maxx (id 18888) shows his ONLY Code/Graphics/Sampling credits of any kind are on a single release, 'Dream World' (id 67650, 1997, Alien Destruction C64 Music Collection) — https://csdb.dk/webservice/?type=scener&id=18888&depth=2 ; (3) no separate CSDb tool/editor release, no GitHub/SourceForge repo, and no Codebase64 article found for 'Maxx_Digi' under any spelling (websearch + CSDb search, 2026-07-31).",
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
    "SIDId (data/sidid.json byTag.\"Maxx_Digi\"; cross-checked directly against github.com/cadaver/sidid sidid.nfo, 2026-07-31) records only 'AUTHOR: Zana Bela (Maxx)' — no name, released date, reference, or comment.",
    "Full census (all 5 tagged files, not a sample) confirms all 5 are compiled into ONE CSDb release: 'Dream World' (id 67650, C64 Music Collection, Alien Destruction, 1997). CSDb's Maxx scener profile independently shows his only Code + Graphics + Sampling credits of any kind are on that exact same release id 67650 — i.e. the digi routine and every locally-tagged track that uses it trace to a single 1997 compilation, not a distributed tool used elsewhere. This is stronger, release-id-matched corroboration than the earlier title-match note (kept below for its own value).",
    "Earlier (partial) observation, still true: one of the 5 tagged files is 'Dream World (intro)' (csdb id 47870), a title variant of 'Dream World' itself — the piece CSDb explicitly credits Maxx with 'Sampling' on.",
    "Fully single-composer usage: all 5 locally-tagged files belong to Maxx himself (data/composers/maxx.json).",
    "Each tagged file's own CSDb `Released` field reads the identical imprecise '199? Alien Destruction' — do not treat this as a firm date; the 1997 figure comes from the UsedIn release/credit data, not the tune header."
  ],
  "sources": [
    "SIDId sidid.nfo (author only), verified directly against source: data/sidid.json byTag.\"Maxx_Digi\" and https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo",
    "CSDb scener profile, Maxx / Zana Bela (groups Alien Destruction/Axis, Hungary; Code+Graphics+Sampling credits, all on release 67650): https://csdb.dk/webservice/?type=scener&id=18888&depth=2 (HTML: https://csdb.dk/scener/?id=18888)",
    "CSDb SID-file entries for all 5 tagged files, queried via scripts/lib/csdb-client.js (type=sid): id 47870 'Dream World (intro)', 47871 'Acid Party', 47872 'Red Sector', 47873 'Last Words', 47874 'Smile On' — each shows Released '199? Alien Destruction' and UsedIn release 67650 'Dream World' (1997)",
    "CSDb release entry for 'Dream World': https://csdb.dk/release/?id=67650",
    "Local dataset: 5 files tagged 'Maxx_Digi', all under composer Maxx, all player_type 'Normal built-in' — data/composers/maxx.json",
    "WebSearch (2026-07-31) for 'Maxx_Digi' / a dedicated CSDb tool release under this name: no standalone editor, no GitHub/SourceForge repo, no Codebase64 article found"
  ]
}
```

## Overview

Maxx_Digi is the local/SIDId tag for a digi/sample-playback routine coded by
**Zana Bela**, handle **Maxx**, a Hungarian scener (groups Alien Destruction,
Axis; CSDb scener id 18888). SIDId carries only an author line. A full census
of all 5 locally tagged files (not a sample) shows all 5 are compiled into a
single CSDb release, "Dream World" (id 67650, C64 Music Collection, Alien
Destruction, 1997) — and CSDb's Maxx scener profile independently confirms
his only Code/Graphics/Sampling credits anywhere are on that exact same
release. That release-id match is the strongest evidence available: this
reads as a personal, in-house routine Maxx built specifically for one 1997
compilation, not a tool used or distributed beyond it.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has author only, no
release/reference; (2) full census shows all 5 tagged files AND Maxx's only
Code/Graphics/Sampling CSDb credits converge on the same release id (67650,
"Dream World", 1997) — census-strength corroboration, not a sample; (3) each
tune's own `Released` field is an imprecise "199?" — the firmer 1997 date
comes from the UsedIn/credit data, not the header; (4) 100% single-composer
usage.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity from SIDId, provenance
and platform from a full census of all 5 tagged files' CSDb SID-entries plus
the Maxx scener profile (converging on release id 67650), composer
concentration from local dataset aggregation. No runtime fact has been
disassembled or traced.

## Sources

See the `sources` array — SIDId's sidid.nfo (cross-checked against the
upstream repo), CSDb's Maxx scener profile, all 5 tagged files' CSDb
SID-entries (full census), the CSDb "Dream World" release entry, and local
composer-file aggregation.

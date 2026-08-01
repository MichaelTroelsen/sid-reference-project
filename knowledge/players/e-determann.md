# E_Determann (player routine)

```json
{
  "id": "e-determann",
  "name": "E_Determann (player routine)",
  "aliases": ["E_Determann"],
  "authors": ["TODO: SIDId has no entry for this tag and no web-searchable biography for a coder named 'Determann' was found; local composer credits do not name a 'Determann' at all (see quirks)"],
  "released": "No formal tool-release date exists (no CSDb tool/editor entry found under this name). Full census of both tagged files' own CSDb SID entries (via scripts/lib/csdb-client.js, type=sid): 'Deranged' (id 26565) Released='1989 Prime'; 'Digital Tangram' (id 26131) Released='1990 Game On/CP Verlag'. This is an earliest/latest-attested-use range (1989-1990), not a confirmed player-tool release date.",
  "status": "stub",
  "platform": "Native C64 in-production player routine, not a standalone/cross-platform editor. Both tagged files carry player_type='Normal built-in' (data/composers/marco-scheepers.json, data/composers/markus-siebold.json) and are embedded in two distinct C64 releases — 'Deranged' (C64 One-File Demo by Prime, 1989, CSDb release id 9234) and 'Digital Tangram Music' (C64 Music by Pulsar, 1990, CSDb release id 167568) — per CSDb webservice type=sid ids 26565/26131. No source repo, manual, or Codebase64 article found.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY OF 'DETERMANN' IS UNCONFIRMED: neither of the 2 locally-tagged files' own author credits mentions anyone named Determann — 'Deranged' (data/composers/marco-scheepers.json) is credited solely to Marco Scheepers, and 'Digital Tangram' (data/composers/markus-siebold.json) solely to Markus Siebold (Sons of Sound). Web search for 'Determann' in connection with either title or with C64 music drivers returned no results. No SIDId entry exists either (data/sidid.json checked, absent). This card intentionally leaves `authors` as TODO rather than guessing who 'E. Determann' is or asserting a real-name match to either credited composer.",
    "2 files, 2 different composers, neither of whom is named Determann in their own credit line — this does not fit the usual 'personal routine, tag = composer's own handle' pattern seen elsewhere in this batch; it may be a third party's routine (a coder credited on both games but not in this dataset's author strings) or an unresolved SIDId misattribution. Not established either way.",
    "CSDb full-text search for both 'Determann' and 'E_Determann' returns zero results (https://csdb.dk/search/?search=Determann, https://csdb.dk/search/?search=E_Determann, fetched 2026-08-01) — confirms no scener, group, or release under this name exists in CSDb's database, not just that a biography wasn't indexed.",
    "The two productions using this tag are otherwise unconnected: 'Deranged' is a 1989 Dutch one-file demo by Prime (Marco Scheepers/Brain, credited Code+Music+Graphics), while 'Digital Tangram Music' is a 1990 German release by Pulsar (Markus Siebold/Sons of Sound). Different countries, different groups, one year apart — no evident direct collaboration link between the two productions beyond sharing this player tag."
  ],
  "sources": [
    "data/sidid.json: no entry for 'E_Determann' (checked, absent)",
    "Local dataset: data/composers/marco-scheepers.json ('Deranged', csdb id 26565), data/composers/markus-siebold.json ('Digital Tangram', csdb id 26131) — 2 files tagged 'E_Determann'; see knowledge/COVERAGE.md row #78 (2 files)",
    "CSDb webservice (scripts/lib/csdb-client.js, type=sid, depth=3), ids 26565 and 26131, fetched 2026-08-01 — provides Released fields and UsedIn release credits (release ids 9234 'Deranged' by Prime, and 167568 'Digital Tangram Music' by Pulsar)",
    "CSDb search (https://csdb.dk/search/?search=Determann and ?search=E_Determann), fetched 2026-08-01 — zero results for either query"
  ]
}
```

## Overview

`E_Determann` is a locally-observed SIDId signature tag (no entry in the
cached `sidid.json`) spanning 2 files by 2 different composers — Marco
Scheepers ("Deranged", CSDb sid id 26565, 1989 Prime demo) and Markus Siebold
("Digital Tangram", CSDb sid id 26131, 1990 Pulsar release) — neither of
whose own credit lines mentions anyone named Determann. No biography, CSDb
identity, or corroborating source for a coder named "Determann" was found;
a direct CSDb full-text search for the name itself returns zero results.
`authors` is left `TODO` rather than guessed. Both files use `player_type:
"Normal built-in"`, indicating a native, in-production C64 player routine
rather than a cross-platform editor — no separate tool release, source repo,
or documentation exists for it. The earliest/latest attested use spans
1989-1990, per each tune's own CSDb `Released` field; this is not a tool
release date.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is one of the few tags in this
batch where the tag name does NOT match either credited composer — identity
is genuinely unresolved, not merely undocumented.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`.

## Verification

**Not verified — `status: stub`.** Even Tier 1 identity is incomplete here —
recorded honestly as unresolved rather than filled with a guess.

## Sources

See the `sources` array — local composer-file aggregation plus CSDb
webservice lookups (`type=sid`, ids 26565/26131) and two CSDb search queries
that both returned zero results. No SIDId entry, source repo, or
documentation exists.

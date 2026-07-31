# Golem

```json
{
  "id": "golem",
  "name": "Golem",
  "aliases": ["Golem"],
  "authors": ["Paul H. (Golem)"],
  "released": "TODO: no tool-release date exists — this is a personal in-house routine, not a packaged/released editor. Earliest attested tune usage (per CSDb SID-entry 'Released' fields, censused across all 6 tagged files) is 1986 ('Minuet in Echo' csdb sid id 49522: 'Released: 1986 Golem'; 'Sweet Dreams' csdb sid id 38761: 'Released: 1986 Classics Inc.'), one year earlier than the local composer profile's 'active: 1987' figure",
  "status": "stub",
  "platform": "Native C64, personal/in-house replay routine — DeepSID/HVSC classifies all 6 tagged files as player_type 'Normal built-in' (data/composers/golem.json), and a CSDb webservice search (scener id 14484, all releases + group membership) and web search turned up no dedicated tool/editor release entry under the name 'Golem' — corroborates the no-CSDb-release reading, still unconfirmed as a positive claim since absence of evidence is not proof",
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
    "SIDId's entry for this tag has only an AUTHOR line ('Paul H. (Golem)') — no NAME, reference, or comment field (deepsid_dl/sidid.nfo / data/sidid.json byTag['Golem']) — the absence of a NAME field is itself a signal this was never packaged as a titled, released tool, consistent with a personal in-house routine.",
    "100% single-composer concentration: all 6 locally tagged files ('The Darker Side', 'Minuet in Echo', 'Sonatina 4', 'Sweet Dreams', 'Thoughts of Life', 'Musical Life') belong to Golem himself (data/composers/golem.json) — no other musician in the local dataset uses this signature. A 7th file by Golem ('Salute') carries no player tag at all. Census confirmed via CSDb webservice type=sid lookups on all 6 csdb_ids (41361, 49522, 40516, 38761, 41362, 62591): every one is authored 'Paul H. (Golem)' and classified player_type 'Normal built-in'.",
    "HVSC Musicians.txt / DeepSID profile identifies Golem as Paul H., England, active from 1987 (data/composers/golem.json profile). CSDb webservice (type=scener, id 14484, depth 3) corroborates: country United Kingdom, real Compunet ID 'PH8', member ('ex') of UK music group 'Classics Inc.' — https://csdb.dk/webservice/?type=scener&id=14484&depth=3",
    "Census of per-tune CSDb 'Released' fields (all 6 files) puts the earliest attested tune at 1986, not 1987: 'Minuet in Echo' (csdb sid 49522, 'Released: 1986 Golem') and 'Sweet Dreams' (csdb sid 38761, 'Released: 1986 Classics Inc.', used in the group release 'Teen & Golem'/'Sweet Dreams', csdb release id 37802). This is a tune composition/usage date, not a tool-release date — recorded per EXTRACTION-TEMPLATE.md guidance not to promote a first-use year into `released` for an unpackaged personal routine.",
    "CSDb webservice search (scener id 14484's full release list) plus a general web search for 'Golem'/'Paul H.'/'Classics Inc.' turned up no dedicated CSDb tool/editor release page and no third-party documentation of this routine — consistent with, but not proof of, an unpublished in-house routine.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag['Golem'] = {\"author\": \"Paul H. (Golem)\"}",
    "data/composers/golem.json (profile: full_name Paul H., handles Golem, country England, active 1987, csdb_id 14484, csdb_type scener)",
    "Local dataset: 6 files tagged Golem, single composer (Golem himself) — see data/composers/golem.json folder[]",
    "CSDb webservice type=sid (all 6 csdb_ids, censused via scripts/lib/csdb-client.js): https://csdb.dk/webservice/?type=sid&id=41361 (and 49522, 40516, 38761, 41362, 62591) — per-tune Released/LoadAddr/InitAddr/PlayAddr/player_type",
    "CSDb webservice type=scener id=14484 depth=3: https://csdb.dk/webservice/?type=scener&id=14484&depth=3 — country UK, Compunet ID PH8, group 'Classics Inc.', full release list",
    "Web search (2026-07-31) for a 'Golem' C64 music editor/player tool: no dedicated CSDb release, no Codebase64/Lemon64/Forum64 documentation found under this name"
  ]
}
```

## Overview

Golem is the SIDId/Player-ID tag for a C64 replay routine attributed to
**Paul H.**, handle **Golem**, real Compunet ID **PH8**, a UK/English
composer and 'ex' member of the music group **Classics Inc.** (CSDb
webservice, scener id 14484). Locally it appears in **6 files, all by
Golem himself** (data/composers/golem.json, census confirmed against all 6
csdb_ids) — no other musician in the collection uses this signature. A 7th
file by Golem ('Salute', csdb sid id 599) carries no player tag at all.
SIDId's entry for the tag carries only an `AUTHOR` line, no `NAME`,
`reference`, or `comment` — consistent with a personal, never-packaged
routine rather than a released, titled tool. DeepSID/HVSC's own
`player_type` classification agrees, tagging all 6 files 'Normal
built-in'. Per-tune CSDb `Released` fields (censused across all 6) put the
earliest attested tune at **1986** ('Minuet in Echo', 'Sweet Dreams'), one
year earlier than the local composer profile's 'active: 1987' — this is a
tune-usage date, not a tool-release date, and no CSDb tool/release entry
or third-party documentation for a "Golem" editor was found on CSDb or in
a general web search, so `released` stays `TODO` per the project's rule
against promoting a first-use year into a release date for an unpackaged
personal routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage
(census-confirmed on all 6 tagged files) marks this as a personal routine,
not a published tool; (2) SIDId's sparse author-only entry and the
`player_type: 'Normal built-in'` classification (all 6 files) corroborate
that reading; (3) no CSDb tool/release entry was found under this name,
either via the CSDb webservice or a general web search; (4) the earliest
attested tune usage is 1986, not the profile's 1987, per full-census
per-tune `Released` fields.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/golem.json`, `data/sidid.json`) plus a CSDb webservice
provenance pass (`type=sid` on all 6 tagged files, `type=scener` on id
14484) and a general web search. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer profile, the
local file aggregation, and CSDb webservice queries (`type=sid` for all 6
csdb_ids, `type=scener` for id 14484).

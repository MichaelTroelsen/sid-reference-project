# Sentinel_V0.4

```json
{
  "id": "sentinel-v04",
  "name": "Sentinel Music Editors V4.Gx",
  "aliases": ["Sentinel_V0.4", "Sentinel Music Editors V4.Gx", "Game Music Editor V4.G2", "Game Music Editor V4.G3"],
  "authors": ["Sentinel"],
  "released": "1995",
  "status": "stub",
  "platform": "Native C64 tool. CSDb catalogues it as a 'C64 Tool' (music editor), coded by Sentinel: https://csdb.dk/release/?id=206967",
  "csdb_release": 206967,

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
    "No sidid.nfo entry exists for the exact tag 'Sentinel_V0.4' (checked data/sidid.json byTag — absent). A DIFFERENT, sibling tag 'Sentinel_V0.7' DOES have a full SIDId record: NAME 'Sentinel Music Player V07.G0', AUTHOR 'Sentinel', RELEASED '2020 Sentinel', REFERENCE CSDb release 202684. That is a separate, later tool by the same author, not evidence for V0.4's own facts (see below for V0.4's own now-direct evidence).",
    "Census of all 4 tagged files (data/composers/cherubs-sentinel.json), queried individually against the CSDb XML webservice (type=sid): 3 of the 4 -- 'Classic_Tour.sid' (csdb id 50588), 'Saci.sid' (59783), 'Dolannes.sid' (59782) -- carry a direct `UsedIn` link to CSDb release 206967, 'Sentinel Music Editors V4.Gx' (AKA 'Game Music Editor V4.G2, V4.G3'), Type 'C64 Tool', ReleaseYear 1995. That release's own page (fetched directly) lists it as bundled with four demo SIDs -- 'Classic Tour', 'Dolannes', 'Follow the Crowd II', and 'Saci' -- three of which are exactly our three tagged files, and credits 'Code: Sentinel'. This is direct, non-inferred evidence for `released`, `platform`, and `csdb_release`, superseding the prior sibling-tag inference. https://csdb.dk/release/?id=206967",
    "The 4th tagged file, 'For_Chaotic_Country.sid' (csdb id 39805), is not linked to release 206967 but its own CSDb `Released` field independently reads '1995 Sentinel', and it appears in two 1995 Hungarian diskmags (Chaotic Country #11/#12) -- consistent with, though not itself proof of, the same tool version.",
    "CSDb's release title uses 'V4.Gx'/'V4.G2, V4.G3' (no leading zero) where the local Player-ID tag and the SIDId-documented sibling both use 'V0.x'/'V0X.G0' style naming -- treated here as the same versioning convention written two ways by different catalogers, not a discrepancy requiring a separate identity.",
    "The credited coder 'Sentinel' is a listed member of the releasing group Lethargy (Hungary) per CSDb's expanded group-member list on release 206967 -- consistent with composer 'Cherubs_Sentinel' (CSDb scener id 22185, Hungary) being the tool's own author, i.e. a self-authored routine used almost exclusively by its own creator.",
    "V0.7 now has its own card (`knowledge/players/sentinel-v07.md`, added round 30). That card's own research explicitly declined to assert a derives_from/successor_of edge between V0.4 and V0.7 -- the AKA resemblance ('Kemeny-Dio Editor V02.00' vs the same author's earlier 'Kemeny Dio Editor V1.0') is name-only, no release text or scrolltext states a derivation. No edge asserted here either, for the same reason -- version-number proximity alone is not evidence of a code relationship.",
    "100% single-composer concentration: all 4 locally-tagged 'Sentinel_V0.4' files belong to the composer 'Cherubs_Sentinel' (handle Sentinel, Hungary -- data/composers/cherubs-sentinel.json), consistent with a personal/small-group routine."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Sentinel_V0.4' (absent from data/sidid.json); sibling tag 'Sentinel_V0.7' entry present (NAME 'Sentinel Music Player V07.G0', AUTHOR Sentinel, RELEASED 2020, REFERENCE csdb.dk/release/?id=202684): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb XML webservice, type=sid, ids 39805/50588/59783/59782 (all 4 census files queried directly via scripts/lib/csdb-client.js): https://csdb.dk/webservice/?type=sid&id=50588&depth=2 (and analogous for the other 3 ids)",
    "CSDb release page for the tool, 'Sentinel Music Editors V4.Gx' / AKA 'Game Music Editor V4.G2, V4.G3', Type C64 Tool, ReleaseYear 1995, Code: Sentinel, bundled with 'Classic Tour', 'Dolannes', 'Follow the Crowd II', 'Saci': https://csdb.dk/release/?id=206967",
    "Local dataset: 4 files tagged Sentinel_V0.4, all by composer 'Cherubs_Sentinel' -- data/composers/cherubs-sentinel.json; see knowledge/COVERAGE.md (grouped row: 9f total across Sentinel_V0.4 + Sentinel_V0.7)",
    "CSDb scener profile, Sentinel (Hungary): https://csdb.dk/scener/?id=22185"
  ]
}
```

## Overview

Sentinel_V0.4 is a SIDId Player-ID tag with no `sidid.nfo` entry of its own,
but a direct CSDb identity was recovered by censusing all 4 locally-tagged
files against CSDb's XML webservice: 3 of the 4 are individually `UsedIn`
CSDb release 206967, **"Sentinel Music Editors V4.Gx"** (AKA "Game Music
Editor V4.G2, V4.G3"), a **native C64 "C64 Tool"** (music editor) released
1995-01-01, coded by **Sentinel**, released by the Hungarian group
**Lethargy**. The release itself bundles four demo SIDs, three of which are
exactly our three linked census files ("Classic Tour", "Dolannes", "Saci"),
confirming the identification. The 4th tagged file ("For Chaotic Country")
independently carries its own `Released: 1995 Sentinel` CSDb field. A
sibling tag, `Sentinel_V0.7`, is separately and fully documented by SIDId as
"Sentinel Music Player V07.G0", released 2020 by the same author — a later,
distinct tool, not evidence for V0.4's facts (no longer needed as inference
now that V0.4 has its own direct CSDb citation). Locally V0.4 appears in
**4 files, all by the composer Cherubs Sentinel** himself
(data/composers/cherubs-sentinel.json), consistent with a personal/
small-group (Lethargy) routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for V0.4
itself — the identity comes from censusing all 4 tagged files against
CSDb's `UsedIn` field, not from SIDId; (2) 3 of 4 files link directly to
CSDb release 206967, the tool's own release page, which independently lists
three of those same tune titles as bundled demos; (3) do not conflate this
with the sibling `Sentinel_V0.7` tag/tool; (4) 100% single-composer usage.

## Disassembly notes

None done here. No public source or CSDb source-code entry was found under
this specific version tag — CSDb's release page has no download/credit
detail beyond "Code: Sentinel". All Tier 3 fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/cherubs-sentinel.json`,
`data/sidid.json` (sibling V0.7 record checked for contrast), a full census
of all 4 tagged files' own CSDb `sid` records via the XML webservice, and
the CSDb release page (id 206967) for the tool itself. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (V0.4 absent, V0.7 present for
contrast), the CSDb XML webservice queried directly for all 4 census files,
the CSDb release page for the tool "Sentinel Music Editors V4.Gx", the
local composer aggregation, and the CSDb scener profile for Sentinel.

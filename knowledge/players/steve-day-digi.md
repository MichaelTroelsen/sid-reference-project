# Steve_Day_Digi

```json
{
  "id": "steve-day-digi",
  "name": "Steve_Day_Digi",
  "aliases": ["Steve_Day_Digi"],
  "authors": ["Steve Day"],
  "released": "TODO: no tool-release date documented — this is an in-house/personal routine, not a distributed tool. Full census (2026-07-31) of all 5 tagged files' own CSDb `Released` fields (via scripts/lib/csdb-client.js, type=sid) confirms earliest attested use is 1989: Beat Dis! (sid id 51067), Get Down (sid id 51156) and French Kiss (sid id 56182), all Steve Day, own `Released` field '1989 NATO'; Dig This (Ben Hayes, sid id 46762), own `Released` field '1989 Piracy Shed Productions'. The fifth file, Step On (Ben Hayes, sid id 26291), is dated '1990 Sonic Graffiti'. Census confirms, and strengthens (3 independent files vs 1), the prior single-file estimate — no correction needed.",
  "status": "stub",
  "platform": "Native C64 — coded directly into Steve Day's own NATO-scene tracks (and reused by Ben Hayes/Nutt '67), not a standalone distributed editor/tool. NATO (Nobodies Are Taking Over) is a UK-founded, C64-focused demo/cracker group (CSDb group 356; BaseCountry United Kingdom; founded 1988): https://csdb.dk/group/?id=356 . No CSDb tool/editor release, no source repo, and no Codebase64/HVSC documentation found for 'Steve_Day_Digi' as a named driver (checked 2026-07-31 via CSDb webservice, WebSearch across csdb.dk/lemon64.com/forum64.de).",
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
    "No SIDId entry exists for this tag at all (data/sidid.json byTag lookup for 'Steve_Day_Digi' returns undefined).",
    "Strong CSDb corroboration: Steve Day's scener page (id 23323; groups NATO, Compunet Computer Club, South East Cracking Group; UK, moved to USA in 2000, per his own Trivia text) lists explicit 'Sampling'-role credits on multiple NATO releases, including 'Beat Dis!' (both a 1989 and a 1990 version) — which directly matches one of the 5 locally-tagged filenames ('Beat Dis!').",
    "Usage: 5 files across 2 composers — Steve Day himself (3 files) and Ben Hayes (2 files; Wales; one file's author field reads 'Ben Hayes (Nutt \\'67)', per data/composers/ben-hayes.json) — both UK-scene composers of a similar era, though no documented common CSDb group between the two was confirmed here (no evidence Ben Hayes was ever a NATO member; Ben Hayes's group affiliation per his DeepSID profile is 'CNET'/'SCENER', not NATO).",
    "Full census (2026-07-31) of all 5 tagged files' own CSDb `Released` fields: Beat Dis! (51067) '1989 NATO'; Get Down (51156) '1989 NATO'; French Kiss (56182) '1989 NATO'; Dig This (46762) '1989 Piracy Shed Productions'; Step On (26291) '1990 Sonic Graffiti'. All five are Normal-built-in PSID player_type entries — no separate driver/tool release id exists for any of them."
  ],
  "sources": [
    "CSDb scener profile, Steve Day (groups NATO/Compunet Computer Club/South East Cracking Group; 'Sampling'-role credits incl. 'Beat Dis!' 1989/1990; bio confirms UK->USA move): https://csdb.dk/scener/?id=23323",
    "CSDb group entry, NATO (Nobodies Are Taking Over; UK-founded 1988, Demo/Cracker Group, no tool/editor releases listed): https://csdb.dk/group/?id=356",
    "CSDb SID-file entries, own `Released` field per file (via scripts/lib/csdb-client.js, type=sid): Beat Dis! https://csdb.dk/sid/?id=51067 (1989 NATO); Get Down https://csdb.dk/sid/?id=51156 (1989 NATO); French Kiss https://csdb.dk/sid/?id=56182 (1989 NATO); Dig This https://csdb.dk/sid/?id=46762 (1989 Piracy Shed Productions); Step On https://csdb.dk/sid/?id=26291 (1990 Sonic Graffiti)",
    "Local dataset: 5 files tagged 'Steve_Day_Digi' (full census) — 3 by Steve Day, 2 by Ben Hayes — data/composers/steve-day.json, data/composers/ben-hayes.json",
    "data/sidid.json (checked: no 'Steve_Day_Digi' entry exists in byTag, confirming the absence noted above)",
    "data/players.json (checked: no entry for 'Steve Day'/'Steve_Day_Digi', confirming no dedicated tool/editor metadata exists)",
    "WebSearch across csdb.dk, lemon64.com, forum64.de (2026-07-31): no dedicated 'Steve Day' digi driver/tool release, manual, or Codebase64/HVSC documentation found"
  ]
}
```

## Overview

Steve_Day_Digi is the local raw tag for a digi/sample-playback routine
attributed to **Steve Day**, a UK-scene coder/musician (groups NATO,
Compunet Computer Club, South East Cracking Group). No SIDId entry exists for
this tag, but CSDb directly corroborates it: Steve Day's scener page lists an
explicit "Sampling" role on "Beat Dis!" (both a 1989 and 1990 NATO release),
which matches one of the 5 locally-tagged filenames exactly. It is a native
C64, in-house routine embedded in Steve Day's own NATO-scene tracks, not a
distributed tool — no CSDb tool/editor release, source repo, or documentation
was found under this name. Usage spans 2 composers — Steve Day himself (3
files) and Ben Hayes (2 files, Wales) — with no documented common group
confirmed between them beyond both being active in the UK scene of that era.
A full census of all 5 tagged files' own CSDb `Released` fields places
earliest attested use at 1989 (NATO / Piracy Shed Productions), with one file
("Step On") dated 1990.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry exists for this tag;
(2) CSDb's "Sampling" credit directly matches the locally-tagged filename
"Beat Dis!" — strong, specific corroboration; (3) the routine spans 2
composers with no confirmed common group, an open question about how it
spread from Steve Day to Ben Hayes (TODO); (4) full census of all 5 files
confirms 1989 as the earliest attested date (three independent CSDb entries
agree) and confirms no dedicated CSDb tool/release entry exists for this
routine under any id.

## Disassembly notes

None done here. No public source or CSDb tool/release entry was found for
this tag; all Tier 3 fields are `TODO`.

## Verification

Not verified. This card is `status: stub`: identity/corroboration from CSDb's
scener profile with a direct title match, composer concentration from local
dataset aggregation. No runtime fact has been disassembled or traced.

## Sources

See the `sources` array — CSDb's Steve Day scener profile, one sampled CSDb
SID-file entry, and local composer-file aggregation.

# Digimixer

```json
{
  "id": "digimixer-funfactory",
  "name": "Digimixer",
  "aliases": ["Digimixer/FunFactory"],
  "authors": ["jay (Hungary; CSDb scener id 9911, handle id 11011, AKAs \"jey, Jules\") — CSDb release 129559 credits code to \"jay of Fun Factory\"; SIDId's index instead names \"Gyula Szalai (Jules)\", and CSDb's own handle record lists \"Jules\" as a recorded AKA of \"jay\", so the two sources plausibly identify the same person"],
  "released": "1993 (CSDb release id 129559, \"Digimixer V2.0\", group Fun Factory, founded 1992-05-01 in Hungary, dissolved 1995-06-02)",
  "status": "stub",
  "platform": "Native C64 tool. CSDb categorizes release 129559 (\"Digimixer V2.0\") as a \"C64 Tool\", distributed as a d64 disk image (231 recorded downloads per CSDb webservice query on 2026-08-01).",
  "csdb_release": 129559,

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
    "Name/author discrepancy between SIDId and CSDb, now resolved via CSDb's own handle record: SIDId's index (data/sidid.json, tag 'Digimixer/FunFactory') gives the author as 'Gyula Szalai (Jules)'; CSDb's release page for 'Digimixer V2.0' (id 129559) credits 'Code: jay of Fun Factory'. A direct CSDb webservice query for the credited handle (id 11011, 'jay', scener id 9911, Hungary) returns AKA field 'jey, Jules' — i.e. CSDb's own database lists 'Jules' as a recorded alias of 'jay'. This is real corroborating evidence the two sources name the same person, not just a resemblance.",
    "Genuine third-party adoption, not a personal routine: of the 6 locally-tagged files (full census — see below), NONE belong to the credited author — 4 are by Booker (Marcin Kubica, Poland, data/composers/booker.json) and 2 are by Walt (Anders Fogh, Denmark, data/composers/walt.json), neither of whom is documented as a Fun Factory member. Combined with CSDb explicitly categorizing the release as a distributed 'C64 Tool' (not a one-off demo credit), this is real evidence of a genuinely used, packaged tool rather than an embedded personal routine — a different profile from most other tags in this batch.",
    "No SIDId `comment` field describes a playback mechanism for this tag — there is no confirmation this routine does any particular sample-playback technique (4-bit D/A, volume-register trick, etc.); the 'Digi'/'mixer' naming is suggestive only, per this project's core rule that naming is not technical evidence.",
    "Fun Factory (CSDb group id 651) was founded 1992-05-01 in Hungary and dissolved 1995-06-02, active as both a 'Magazine Staff' and 'Cracker Group' per CSDb — consistent with the 1993 tool release falling inside the group's active window."
  ],
  "sources": [
    "SIDId sidid.nfo (name 'Digimixer', author 'Gyula Szalai (Jules)', released '199? Fun Factory', reference https://csdb.dk/release/?id=129559): data/sidid.json byTag.\"Digimixer/FunFactory\"",
    "CSDb release page 'Digimixer V2.0' (1993, Fun Factory, code credited to 'jay of Fun Factory', categorized 'C64 Tool', d64 download, 231 downloads), and the underlying scener/handle record (handle id 11011 'jay', AKA 'jey, Jules', scener id 9911, Hungary) — queried live via scripts/lib/csdb-client.js against https://csdb.dk/release/?id=129559",
    "Local dataset census (all files matching player tag 'Digimixer/FunFactory' across every data/composers/*.json, verified via Grep with glob *.json, not a directory-only scan which under-matched): 6 files total — 4 in data/composers/booker.json (Infect, Space_Balls, Technological_Death, Usura), 2 in data/composers/walt.json (Amiga_Works_part_1, Amiga_Works_part_2). No other composer file carries this tag."
  ]
}
```

## Overview

Digimixer (local/SIDId tag `Digimixer/FunFactory`) is a native C64 tool
released in 1993 by the Hungarian group Fun Factory (CSDb group id 651,
active 1992-05-01 to 1995-06-02; release id 129559, "Digimixer V2.0",
categorized as a "C64 Tool" and distributed as a d64 disk image, 231
recorded downloads). SIDId's index attributes it to Gyula Szalai (Jules);
CSDb's release page credits the code to "jay of Fun Factory". A direct CSDb
webservice query for that credited handle (id 11011) resolves the
discrepancy: CSDb's own handle record lists AKAs "jey, Jules" for "jay" — the
two names are the same person per CSDb's own database, not just a
resemblance. Full census (every `data/composers/*.json` file, not a sample)
turns up exactly 6 files tagged `Digimixer/FunFactory`, and none belong to
the credited author himself — they are split between Booker (Marcin Kubica,
Poland, 4 files) and Walt (Anders Fogh, Denmark, 2 files) — real evidence of
third-party adoption of a genuinely distributed tool, not a personal
routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the SIDId-vs-CSDb author-handle
discrepancy ("Jules" vs "jay") is resolved, not merely noted — CSDb's own
handle record lists "Jules" as an AKA of "jay"; (2) 0-of-6 locally tagged
files (full census) belong to the credited author — real evidence of
adoption beyond a single composer's own output; (3) no SIDId comment or
other source confirms any specific sample-playback technique — the name
alone is not evidence.

## Disassembly notes

None done here. No public source repo, format spec, or third-party
documentation was found for this tool: searches of the funet.fi/zimmers.net
C64 audio-editors archive index, Lemon64, and Forum64/C64-Wiki turned up no
"Digimixer"/"Fun Factory" hits (2026-08-01, negative result recorded so a
future pass doesn't repeat it). All Tier 3 fields are `TODO`. A future pass
could pull the CSDb-hosted d64 (getinternalfile.php link on release 129559)
and disassemble the tool directly, since the disk image itself is public.

## Verification

Not verified. This card is `status: stub`: identity/release/platform facts
are SIDId- and CSDb-sourced (cited above); composer-adoption evidence is from
local dataset aggregation; no runtime fact has been disassembled or traced.

## Sources

See the `sources` array — SIDId's sidid.nfo, the CSDb release page and
handle record for "Digimixer V2.0" / "jay" (queried live via the XML
webservice, `scripts/lib/csdb-client.js`), and a full local composer-file
census.

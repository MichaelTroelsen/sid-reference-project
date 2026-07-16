# Arne/AFL

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "arne-afl",
  "name": "Arne/AFL",
  "aliases": ["Arne/AFL"],
  "authors": ["Arne Puszelski (Arne)"],
  "released": "TODO: no specific tool release date found; composer active on C64 circa 1990-1995",
  "status": "stub",
  "platform": "TODO: appears to be a native C64 hand-coded music routine used only by its author, not a distributed/published editor — no separate tool documentation found",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no public disassembly found",
    "zero_page": "TODO: no public disassembly found",
    "layout": "TODO: no public disassembly found"
  },
  "entry": {
    "init": "TODO: no public disassembly found",
    "play": "TODO: no public disassembly found"
  },
  "speed": "TODO: no public disassembly found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public disassembly found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The tag name is composer-handle + group, not a tool name: 'Arne' is composer Arne Puszelski, and 'AFL' is Alpha Flight (aka 'Alpha Flight 1970'), the German C64 group he was a member of — https://csdb.dk/group/?id=215 confirms the group's own abbreviation is 'AFL'. This matches the pattern seen elsewhere in the dataset (e.g. 'MoN/FutureComposer/RWE') where a Player-ID signature encodes composer+group rather than a published editor's product name.",
    "100% single-composer concentration: all 48 files in this project's dataset tagged 'Arne/AFL' belong to composer Arne (data/composers/Arne.json), none to anyone else. Per the extraction rubric this is the strongest possible signal of a personal/small-scene routine rather than a genuinely published, shared tool — no other composer is known to have used it.",
    "No dedicated 'Arne' or 'AFL' music editor/player is documented anywhere found in this research (not in DeepSID's players.json, not on SID Preservation's editors list, not on Codebase64, not on CSDb as a standalone tool release). SIDId's own nfo entry for this tag (github.com/cadaver/sidid) contains only the AUTHOR line, no name/released/reference/comment fields — the shortest possible entry, itself a signal that even the SIDId maintainers had nothing more to record.",
    "Do not confuse this with 'Voicetracker' — a YouTube-documented example tune credited to Arne Puszelski is titled 'Voicetracker 4 Example 4', implying at least some of his output was made with a genuinely separate, unrelated editor (Voicetracker), not this 'Arne/AFL' signature. The two should not be merged."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['Arne/AFL'] = { author: 'Arne Puszelski (Arne)' } — no name/released/reference/comment fields present.",
    "Local dataset: knowledge/COVERAGE.md rank #7, 48 files, single grouped raw tag 'Arne/AFL', no 'source' flag (blank = classic/undocumented, no local RE path).",
    "Local dataset: data/composers/Arne.json — composer profile (Arne Puszelski, b. 1971-08-17, Germany, CSDb scener id 6512, focus2 'SCENER', handles include 'Atman'); all 48 'Arne/AFL'-tagged files in data/composers/*.json belong to this one composer.",
    "SIDId upstream source (same content as local sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo (entry 'Arne/AFL', AUTHOR: Arne Puszelski (Arne)).",
    "CSDb group page confirming 'AFL' = Alpha Flight (Germany), founded April 1985, aka 'Alpha Flight 1970': https://csdb.dk/group/?id=215",
    "CSDb SID entries crediting Arne Puszelski (Arne) under Alpha Flight, e.g. 'Burning Stone' (1991): https://csdb.dk/sid/?id=37034",
    "Remix64 member profile (biographical only, no tool info): https://remix64.com/member/arne/ — lists C64 group memberships 'Alpha Flight 1970, Spirit, Ability, Quintex, Savage, UA'.",
    "Checked and found NO mention of an 'Arne' or 'AFL' editor/player: SID Preservation editors list https://sidpreservation.6581.org/sid-editors/ ; DeepSID data/players.json (no entry); Codebase64 SID programming page."
  ]
}
```

## Overview

"Arne/AFL" is a Player-ID signature tag in this project's dataset (48 files,
rank #7 among uncarded families in `knowledge/COVERAGE.md`), naming German
C64 scener **Arne Puszelski** ("Arne") and his group **Alpha Flight** ("AFL",
csdb.dk/group/?id=215). Unlike most carded player families, no distinct,
publicly documented editor or tool by this name could be found anywhere —
not in DeepSID's `players.json`, not on SID Preservation's editors list, not
on Codebase64, not as a standalone CSDb tool release. Combined with the fact
that all 48 tagged files in the local dataset belong to Arne himself (100%
composer concentration, `data/composers/Arne.json`), the evidence points to
this being Arne's own hand-coded/personal music routine used to write his own
tunes for Alpha Flight in the early-to-mid 1990s, rather than a
tool distributed to or used by other composers.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: the tag encodes
composer+group, not a product name; concentration is 100% single-composer,
the strongest possible "personal routine" signal in this project's rubric;
and no tool documentation exists to research further. Also note the
`Voicetracker`-titled example among Arne's own output — a reminder not to
conflate an unrelated editor he also used with this signature.

## Disassembly notes

None performed. No public source or prior disassembly was found to work
from; a future pass could pick a representative `Arne/AFL`-tagged `.sid`
(e.g. https://csdb.dk/sid/?id=37034, "Burning Stone") and disassemble its
init/play from the PSID header, tracing through `sidm2-siddump` — that is
the only route to real memory/format facts here, since no source exists.

## Verification

**Not verified — `status: stub`.** Only identity facts (author, group
affiliation, dataset usage/concentration) are confirmed, from local dataset
files and CSDb/SIDId cross-references. Every runtime field is honestly
`TODO`: no tool documentation or source was found for this signature.

## Sources

See the `sources` array — local `data/sidid.json`/`data/composers/Arne.json`,
the upstream SIDId nfo, CSDb's Alpha Flight group page and a representative
SID entry, and Remix64's biographical profile. Explicitly checked and found
no entry: DeepSID `players.json`, SID Preservation's editors list, Codebase64.

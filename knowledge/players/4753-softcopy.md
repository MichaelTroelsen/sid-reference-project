# $4753 Softcopy (player routine)

```json
{
  "id": "4753-softcopy",
  "name": "$4753 Softcopy (player routine)",
  "aliases": ["4753_Softcopy"],
  "authors": ["$4753 (Softcopy) - Germany"],
  "released": "~1987-1988 (earliest dated tracks 1987-1988; CSDb's release list for this scener only confirms activity through 1988)",
  "status": "in-progress",
  "platform": "Native C64 — appears to be German scener $4753's ('Softcopy') own hand-coded player routine, not a general-purpose released tool. Player-ID-fingerprinted across 35 files in this dataset, 34 of which are his own tunes (see composer-concentration note below).",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no single fixed address confirmed. One representative file, Paid_in_Fuff.sid (csdb.dk/sid/?id=51164, $4753's own tune), has PSID load $1000. A different file tagged with the same player, James_Brown_Is_Dead.sid (csdb.dk/sid/?id=43736, composer Denis Knitter/'Bad'), has PSID load $0810 — addresses are NOT constant across files sharing this tag.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "Per-file, from PSID headers (not a fixed engine constant): Paid_in_Fuff.sid init $1000 (csdb.dk/sid/?id=51164); James_Brown_Is_Dead.sid init $0838 (csdb.dk/sid/?id=43736) — inconsistent with $4753's own file, consistent with a hand-written routine re-assembled per release rather than a relocatable shared engine.",
    "play": "Paid_in_Fuff.sid: PSID play address $0000 (per PSID-header convention this means the tune installs its own IRQ handler in init and is not called via a separate play vector) — csdb.dk/sid/?id=51164."
  },
  "speed": "TODO: not disassembled. The play=$0000 self-install convention on the one checked file hints at a custom IRQ setup rather than a PSID-driven call-play-once-per-frame model, but this is inference from the header, not confirmed by tracing.",

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
    "COMPOSER-CONCENTRATION SIGNAL: 34 of the 35 files tagged '4753_Softcopy' in this dataset belong to the composer '$4753 (Softcopy)' himself; only 1 file belongs to another composer (Denis Knitter/'Bad' of Fantasia). Per the extraction-template rule of thumb, this level of concentration marks it as a personal/small-scene routine rather than a genuinely published, widely-adopted tool (aggregated from data/composers/*.json; see also knowledge/COVERAGE.md rank #6, 35 files).",
    "CSDb credits scener '$4753' (id=10627) with functions 'Coder and Swapper' in addition to musician — consistent with him having hand-written his own playback routine rather than using someone else's editor: https://csdb.dk/scener/?id=10627",
    "HVSC Musicians.txt lists the handle as '$4753 Softcopy / The 2nd Society - GERMANY' (no real name given): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb lists two German group memberships for $4753: 'Main Underground Service in Commodore' and 'The Second Society' (both ex-member) — the release DJ Collection 1 (1988) crediting '$4753' for sampling work was published by The Second Society: https://csdb.dk/release/?id=104706 and https://csdb.dk/scener/?id=10627",
    "The one cross-composer file (James_Brown_Is_Dead.sid, Denis Knitter/'Bad', 1992, group Fantasia) has a different PSID load/init address than $4753's own Paid_in_Fuff.sid — whether this reflects genuine reuse of the same hand-written routine (relocated/reassembled) or a looser Player-ID/tag match was NOT independently confirmed here; flagged, not asserted.",
    "No entry for this tag in data/sidid.json (SIDId's sidid.nfo) — checked directly, confirmed absent. No CSDb release exists representing this 'player' as a distributed product (csdb_release left null for that reason, not merely unresearched).",
    "Paid_in_Fuff.sid is unusually large for a SID (PSID data size 52,736 / $CE00 bytes) — fits the 'DJ Collection' concept (sampled dance-mix snippets/'digi' audio) referenced in its parent release title, suggesting this routine is (at least partly) a sample/digi player rather than a conventional multi-channel tracker-style engine. Inference from file size + release context, not from disassembly.",
    "No public source code or disassembly was found for this routine; every Tier 3 field above is either TODO or sourced only from a PSID header display on CSDb (metadata, not a code trace)."
  ],
  "sources": [
    "Local dataset aggregation: data/composers/*.json (34 files under composer 'Softcopy 4753', 1 under composer 'Bad'); knowledge/COVERAGE.md (rank #6, 35 files, raw tag 4753_Softcopy)",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('$4753 Softcopy / The 2nd Society - GERMANY')",
    "CSDb scener id=10627 ($4753 / Softcopy — handle, country, groups, functions, releases): https://csdb.dk/scener/?id=10627",
    "CSDb sid id=51164 (Paid in Fuff — PSID load/init/play, data size): https://csdb.dk/sid/?id=51164",
    "CSDb sid id=43736 (James Brown Is Dead — PSID load/init, composer Denis Knitter/'Bad'): https://csdb.dk/sid/?id=43736",
    "CSDb release id=104706 (DJ Collection 1, The Second Society, 1988, sampling credit to $4753): https://csdb.dk/release/?id=104706",
    "Checked data/sidid.json — no byTag entry for '4753_Softcopy' (confirmed absent, not just unresearched)"
  ]
}
```

## Overview

`4753_Softcopy` is a Player-ID tag matching 35 files in this collection, 34 of
which belong to a single composer: German scener **$4753** (handle also
written "$4753 Softcopy"), a member of Main Underground Service in Commodore
and The Second Society, credited by CSDb with both musician and "Coder and
Swapper" functions. That concentration, plus the coder credit, makes this
very likely his own hand-coded player routine rather than a distributed tool
— there is no CSDb release representing it as a product, and it never
surfaced in the SIDId player index. Active roughly 1987-1988 per his CSDb
release history, with tracks appearing in the group release "DJ Collection 1"
(1988). One file by a
different composer (Denis Knitter/"Bad") also carries the tag, but its PSID
header addresses differ from $4753's own file, so genuine routine-sharing
vs. a loose tag match is unconfirmed.

## Quirks & gotchas

See the `quirks` array — the load-bearing points: **34 of 35 files belong
to the routine's own author** (a personal-routine signal, not a published
tool), **PSID load/init addresses are not constant** across the two files
checked (so there is no single fixed entry point to record for the family),
and **the "digi collection" context plus a 52KB PSID data size** hint this
may be (partly) a sample/digi player rather than a conventional multichannel
tracker engine — inference only, not confirmed by disassembly.

## Disassembly notes

None performed. No public source or prior disassembly was found. Only PSID
header metadata (load/init/play addresses, data size), as displayed on two
individual CSDb `sid` pages, was read — this is file-format metadata, not a
code trace or disassembly, and is called out as such throughout the `json`
block.

## Verification

**Not verified — `status: in-progress`.** Two PSID headers were read via
CSDb's file pages (not traced, not disassembled), which is why entry-point
fields are filled but flagged as per-file and inconsistent rather than a
confirmed engine convention. Identity/provenance facts (author, country,
groups, coder credit, composer concentration) are cited from HVSC
Musicians.txt and CSDb. A future pass would need an actual disassembly of a
representative file (or a `sidm2-siddump` trace) before any memory map, ZP
usage, or format claim could be made — none of that exists yet.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb scener/sid/release pages,
and the local dataset aggregation (`data/composers`, `knowledge/COVERAGE.md`).
Checked and confirmed absent from `data/sidid.json`.

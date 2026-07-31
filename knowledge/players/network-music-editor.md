# Network Music Editor V1.4

```json
{
  "id": "network-music-editor",
  "name": "Network Music Editor V1.4",
  "aliases": ["Network"],
  "authors": ["TODO: no credited coder found — CSDb release page lists no credits, SIDId's entry has no AUTHOR field"],
  "released": "TODO: no release date for the tool itself found on CSDb release 207305 or in SIDId (CSDb's release XML returns no ReleaseYear field at all). Earliest tagged tune attested is 1990 (Dokmatik's 'Joy and Fear', own CSDb Released field '1990 Dokmatik', https://csdb.dk/sid/?id=39189) — a first-use date, not a confirmed tool release date; see quirks.",
  "status": "stub",
  "platform": "Native C64 tool. CSDb release 207305 classifies it as type 'C64 Tool' and distributes it as a bootable disk image (Network_Music_Editor_V1.4.d64, https://csdb.dk/release/?id=207305) — no cross-platform editor evidence found.",
  "csdb_release": 207305,

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
    "SIDId's entry for this tag has ONLY a NAME field ('Network Music Editor V1.4') and a REFERENCE (CSDb release 207305) — no AUTHOR, no RELEASED. CSDb's own release page likewise lists 'no credits found' for id=207305, so no coder is confirmed anywhere despite the tool having a clear title and version number (unusual: most named/versioned tools in this project's cards do have a credited author). WebSearch of Lemon64 (site:lemon64.com) and Forum64/Codebase64/general web on 2026-07-31 found zero threads or pages mentioning 'Network Music Editor', 'NME V1.4', or 'NMC V1.4' — the name is not attested anywhere outside CSDb.",
    "Full census of all 6 tagged files (2026-07-31), reading each file's own CSDb sid-entry XML rather than sampling: Christoph Albert/'Judy' (Germany, CSDb scener 3293) contributes 'Fun House' (id 42555, Released '1993 Trinomic') and 'Flexer' (id 42565, Released '1993 Trinomic'); Dokmatik/Metin Göktay (Turkey, CSDb scener 18497) contributes 'Crazy Dance' (id 40083, Released '1993 Trinomic'), 'Joy and Fear' (id 39189, Released '1990 Dokmatik' — the earliest-attested tune on this player), \"Let's have Bach\" (id 40097, Released '1991 Dokmatik'), and 'Summer 91' (id 40088, Released '1991 Dokmatik'). Both composers are listed as CSDb-active from 1993 in their local HVSC profiles, but three of their own tunes' own Released fields predate that (1990-1991) — the profile 'active' year undercounts. Neither composer has any other CSDb tool/coder credit found, so there is no local lead pointing at either of them as the editor's author.",
    "PSID header load/init/play addresses vary across the 6 files in a pattern consistent with a relocatable player, not a fixed one: 4 of 6 load at $1000 (init $1000/play $1003 — Flexer, Crazy Dance, Let's have Bach, Summer 91), one loads at $4000 (Joy and Fear, init $4000/play $4003), and one at $8000 (Fun House, init $8000/play $8003). Play is consistently load+3 across all six. These are PSID header values only, not disassembly facts — not promoted into the `entry`/`memory` Tier 3 fields.",
    "CSDb cross-links 'Let's have Bach' (sid id 40097, tagged 'Network' by SIDId/this project's local data) as 'UsedIn' release 207302, 'Romuzak Player V1' (a DIFFERENT C64 Tool, 1990, released by group Digital Excess/Kokomo, Germany, credited Music: Stefan Hartwig, Code: Thomas Koncina — https://csdb.dk/release/?id=207302). This is a same-composer coincidence, not evidence of shared code: Christoph Albert independently uses a wholly separate 'RoMuzak_V6.x' player tag on other files in this dataset, and RoMuzak's own attested coder is Thomas Detert per the Video Game Music Preservation Foundation wiki (https://www.vgmpf.com/Wiki/index.php/Thomas_Detert), not Thomas Koncina — two different names attach to 'Romuzak' across sources. No `edges` entry is asserted here; the CSDb 'UsedIn' link most likely just means the SID file sits on a compilation disk alongside the Romuzak tool, not that the two players share a codebase.",
    "Not one of DeepSID's curated 129 players.json entries — this card is seeded from SIDId's fingerprint plus the CSDb release page alone."
  ],
  "sources": [
    "sidid:Network (name 'Network Music Editor V1.4', reference https://csdb.dk/release/?id=207305, no author/released/comment) — data/sidid.json",
    "CSDb release 207305 'Network Music Editor V1.4' (C64 Tool, aka NME V1.4/NMC V1.4, no credits found, no ReleaseYear, distributed as Network_Music_Editor_V1.4.d64): https://csdb.dk/release/?id=207305 (queried via scripts/lib/csdb-client.js webservice, 2026-07-31)",
    "CSDb sid entries for all 6 tagged files, queried via scripts/lib/csdb-client.js: https://csdb.dk/sid/?id=42555 (Fun House), https://csdb.dk/sid/?id=42565 (Flexer), https://csdb.dk/sid/?id=40083 (Crazy Dance), https://csdb.dk/sid/?id=39189 (Joy and Fear), https://csdb.dk/sid/?id=40097 (Let's have Bach), https://csdb.dk/sid/?id=40088 (Summer 91)",
    "CSDb release 207302 'Romuzak Player V1' (C64 Tool, 1990, Digital Excess/Kokomo, Code: Thomas Koncina): https://csdb.dk/release/?id=207302",
    "Video Game Music Preservation Foundation wiki, Thomas Detert entry (RoMuzak V6.3 attribution): https://www.vgmpf.com/Wiki/index.php/Thomas_Detert",
    "Local dataset: 6 files tagged 'Network' across 2 composers — Christoph Albert, Dokmatik — data/composers/christoph-albert.json, data/composers/dokmatik.json",
    "data/composers/christoph-albert.json (HVSC profile: Germany, CSDb scener 3293)",
    "data/composers/dokmatik.json (HVSC profile: Turkey, real name Metin Göktay, CSDb scener 18497)",
    "WebSearch sweep 2026-07-31 for 'Network Music Editor'/'NME V1.4'/'NMC V1.4' across general web, site:lemon64.com, site:forum64.de, site:codebase64.org, and JCH's 'Comparison of C64 Music Editors' (https://blog.chordian.net/2018/02/24/comparison-of-c64-music-editors/) and the funet/zimmers.net C64 audio-editors FTP index (https://www.zimmers.net/anonftp/pub/cbm/c64/audio/editors/index.html) — no hits on any of them"
  ]
}
```

## Overview

`Network` is the SIDId tag for **Network Music Editor V1.4**, a named,
versioned, native C64 tool (CSDb classifies release 207305 as type "C64
Tool", distributed as a bootable .d64 disk image) but with no credited coder
found anywhere — neither SIDId's own entry nor CSDb's release page names an
author, and no mention of the tool turned up in a 2026-07-31 web/Lemon64/
Forum64/Codebase64 sweep. In this dataset it appears on all 6 tagged files
(full census, not a sample), split between two composers: Christoph Albert
(Germany, 2 files, both "1993 Trinomic") and Dokmatik (Metin Göktay, Turkey,
4 files, individually dated 1990-1993 per each tune's own CSDb Released
field). The earliest attested tune on this player is 1990 ("Joy and Fear"),
but that is a first-use date, not a confirmed release date for the tool
itself, which CSDb records with no ReleaseYear at all. Neither composer has
any other tool-coding credit found locally, so the author's identity remains
an open question.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a titled, versioned tool with a
CSDb release page, yet genuinely author-less in every source checked — not a
research gap so much as a real absence of a public credit; usage is small and
split across two otherwise-unconnected composers, and a same-composer CSDb
cross-link to the unrelated "Romuzak Player V1" tool on one file was checked
and discarded as coincidental (see quirks), not a lineage edge.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/*.json`, `data/sidid.json`), the CSDb release page and a
full per-file CSDb sid-entry census (via `scripts/lib/csdb-client.js`), plus
a 2026-07-31 web/Lemon64/Forum64/Codebase64 provenance sweep that found
nothing further. `status: stub` — no runtime fact has been confirmed by
disassembly or trace; Tier 3 remains entirely `TODO`.

## Sources

See the `sources` array — SIDId sidid.nfo, the CSDb release page for
Network Music Editor V1.4, per-file CSDb sid entries for all 6 tagged files,
the local composer aggregation, and the negative-result web sweep.

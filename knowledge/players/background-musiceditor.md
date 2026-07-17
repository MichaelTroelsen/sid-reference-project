# Background Music Editor

```json
{
  "id": "background-musiceditor",
  "name": "Background Music Editor",
  "aliases": ["Background_MusicEditor"],
  "authors": ["Gary Davis"],
  "released": "1983",
  "status": "stub",
  "platform": "Native C64 tool, distributed as a standalone C64 disk image. Per the HVMEC archive's description of the preserved disk, the editor is a BASIC-language program (not a machine-code tracker) with a menu-driven interface (disk ops, music editing, data copy, playback toggle, file management) and a SID-configuration/line-edit workflow — a very early (1983) sequencer-style tool, closer to a BASIC DATA-statement music program than a later assembly-language tracker/replay routine.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly performed; BASIC program layout not documented",
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
    "Local dataset (data/sidid.json, a dated one-time snapshot of SIDId's sidid.nfo) records `reference` as https://csdb.dk/release/?id=138743, but that CSDb release id does NOT resolve — csdb.dk/release/?id=138743 redirects to the CSDb homepage, and the CSDb webservice (type=release and type=sid) both return the generic 'huh' error for id 138743, confirming it is not a valid release/sid id (verified directly against csdb.dk during this research pass). The current upstream sidid.nfo (github.com/cadaver/sidid, fetched live) has since been corrected: the Background_MusicEditor entry's REFERENCE field now points to https://hvmec.altervista.org/blog/?p=3405 (an archive of the actual C64 disk image), not a CSDb page at all. This card therefore leaves `csdb_release` null rather than repeating the stale/broken cached id, and cites the live HVMEC reference instead. No CSDb release entry for this tool was found by search.",
    "Small, concentrated composer base: only 5 composers in this dataset have any file tagged Background_MusicEditor (21 files total, aggregated from data/composers/*.json) — Gary Davis himself (the author, 4 files), Toni Luode (10 files, ~48% of the total — the single largest user), Boray (4), II/Mark (2), and Zsolt Koloncsak (1). The author's own use is a minority of the files; one composer (Toni Luode) dominates. That combination (≤5 composers, one non-author composer >45%) reads as a small/niche tool that found one enthusiast well beyond its author, not a widely-published tracker — see EXTRACTION-TEMPLATE.md's concentration heuristic.",
    "Independently listed (year 1983, author Gary Davis) in C64-Wiki's tracker roundup (c64-wiki.de/wiki/Tracker), confirming it is a recognized early tool and not a misfiled tag — but that listing is a bare index entry with a red (nonexistent) link for Gary Davis, i.e. no further documentation exists there either."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['Background_MusicEditor'] — name, author, released (dated snapshot of SIDId's sidid.nfo, parsedAt 2026-07-11)",
    "Live upstream SIDId database entry (superseding the stale cached CSDb reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "HVMEC archive — preserved C64 disk image + description of the editor's menu/BASIC-program structure: https://hvmec.altervista.org/blog/?p=3405",
    "C64-Wiki tracker list (independent confirmation of name/year/author): https://www.c64-wiki.de/wiki/Tracker",
    "Local dataset: knowledge/COVERAGE.md (rank 9, 21 files) and data/composers/{boray,gary-davis,ii-mark,toni-luode,zsolt-koloncsak}.json (per-file player tag aggregation)",
    "Verified directly against csdb.dk during this research pass: csdb.dk/release/?id=138743 redirects to the homepage; CSDb webservice type=release/type=sid both return 'huh' for id 138743 (no such release/sid exists)"
  ]
}
```

## Overview

Background Music Editor is a very early (1983) Commodore 64 music composition
tool by Gary Davis — one of the earliest entries in C64-Wiki's tracker
roundup, predating the "tracker" term itself. Per the HVMEC preservation
archive (the only substantive documentation found), it is a BASIC-language,
menu-driven sequencer rather than a machine-code tracker/replay routine: disk
operations, music editing, data copy, playback toggle, and file management,
with a SID-configuration and line-edit workflow. It has no CSDb release entry
that could be found (the id cached in this project's local SIDId snapshot does
not resolve — see the first `quirks` entry). In this project's dataset it is a
small, concentrated family: 21 files across just 5 composers. Notably the author's own output (4
files) is a minority — Toni Luode alone accounts for roughly half the files
(10/21), suggesting the tool found one dedicated user well beyond its author
rather than broad scene adoption.

## Quirks & gotchas

See the `quirks` array — most load-bearing: the cached local reference points
at a dead/invalid CSDb release id, and the live upstream SIDId source has
since replaced it with a non-CSDb archival link, which this card follows
instead.

## Disassembly notes

None performed. No source code or binary format documentation was found
publicly — the only description available (HVMEC) is a high-level walkthrough
of the on-screen menu structure of the preserved disk image, not a technical
spec. A future pass could disassemble a representative `.sid` file tagged
Background_MusicEditor (via its PSID header init/play addresses) as the only
route to real memory-map/format facts, since no source is available.

## Verification

**Not verified — `status: stub`.** Only identity facts (author, year, a
high-level platform description) are confirmed, from the local SIDId
snapshot, the live upstream sidid.nfo, the HVMEC archive's description of the
preserved disk, and an independent C64-Wiki listing. Every runtime field is
`TODO` because no disassembly was performed and no format documentation
exists publicly.

## Sources

See the `sources` array — the local SIDId snapshot and its live upstream
counterpart (which corrects a broken cached CSDb reference), the HVMEC
archive, C64-Wiki, and this project's own composer/coverage aggregation.

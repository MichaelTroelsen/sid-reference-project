# Background Music Editor

```json
{
  "id": "background-musiceditor",
  "name": "Background Music Editor",
  "aliases": ["Background_MusicEditor"],
  "authors": ["Gary Davis"],
  "released": "1983",
  "status": "stub",
  "platform": "Native C64 tool, distributed as a standalone disk image. A BASIC-language menu-driven sequencer (not a machine-code tracker) — the BASIC source is accessible directly from the disk image (LIST-able), but no separate source-code publication or format documentation exists. One of the earliest C64 music tools, predating the \"tracker\" term itself.",
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
    "Local dataset (data/sidid.json, a dated one-time snapshot of SIDId's sidid.nfo) records reference as https://csdb.dk/release/?id=138743, but that CSDb release id does not resolve — csdb.dk/release/?id=138743 redirects to the CSDb homepage, and the CSDb webservice (type=release and type=sid) both return the generic 'huh' error for id 138743, confirming it is not a valid id. The live upstream sidid.nfo (github.com/cadaver/sidid) has since been corrected: the Background_MusicEditor entry's REFERENCE field now points to https://hvmec.altervista.org/blog/?p=3405 (the HVMEC archive of the preserved C64 disk image), not a CSDb page. This card leaves csdb_release null rather than repeating the stale cached id. No CSDb release entry for this tool was found by direct search of csdb.dk.",
    "Small, concentrated composer base: only 5 composers in this dataset have any file tagged Background_MusicEditor (21 files total, confirmed from data/composers/{boray,gary-davis,ii-mark,toni-luode,zsolt-koloncsak}.json). Gary Davis the author has 4 files, Toni Luode has 10 (~48% of the total — the single largest user), Boray has 4, II/Mark has 2, Zsolt Koloncsak has 1. The author's own use is a minority of the files; one non-author composer dominates. That combination (<=5 composers, one non-author composer >45%) reads as a small/niche tool that found one enthusiast beyond its author, not a widely-published tracker.",
    "Independently listed (year 1983, author Gary Davis) in C64-Wiki's tracker roundup (c64-wiki.de/wiki/Tracker), confirming it is a recognized early tool — but that listing is a bare index entry with no further documentation."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['Background_MusicEditor'] — canonical name, author, released (dated snapshot of SIDId's sidid.nfo)",
    "Live upstream SIDId database entry (superseding the stale cached CSDb reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "HVMEC archive — preserved C64 disk image + description of the editor's BASIC-program structure and menu layout: https://hvmec.altervista.org/blog/?p=3405",
    "C64-Wiki tracker list (independent confirmation of name, year, author): https://www.c64-wiki.de/wiki/Tracker",
    "Local dataset: knowledge/COVERAGE.md and data/composers/{boray,gary-davis,ii-mark,toni-luode,zsolt-koloncsak}.json — per-file player tag aggregation (21 files across 5 composers)",
    "Verified directly against csdb.dk during this research pass: csdb.dk/release/?id=138743 redirects to the homepage; CSDb webservice type=release/type=sid both return 'huh' for id 138743; direct CSDb search for 'Background Music Editor' returns no results"
  ]
}
```

## Overview

Background Music Editor is a very early (1983) Commodore 64 music composition tool by
Gary Davis — one of the earliest entries in C64-Wiki's tracker roundup,
predating the "tracker" term itself. Per the HVMEC preservation archive (the
only substantive documentation found), it is a BASIC-language, menu-driven
sequencer rather than a machine-code tracker/replay routine: disk operations,
music editing, data copy, playback toggle, and file management, with a SID-
configuration and line-edit workflow. The BASIC source is accessible from the
disk image (it's a BASIC program, not compiled machine code), but no separate
source-code publication, format documentation, or technical spec exists. It has
no CSDb release entry (the id once cached in SIDId's sidid.nfo does not resolve
— see the first `quirks` entry). In this project's dataset it is a small,
concentrated family: 21 files across just 5 composers. Notably the author's own
output (4 files) is a minority — Toni Luode alone accounts for roughly half the
files (10/21), suggesting the tool found one dedicated user well beyond its
author rather than broad scene adoption.

## Quirks & gotchas

See the `quirks` array — most load-bearing: the cached local reference points
at a dead/invalid CSDb release id, and the live upstream SIDId source has
since replaced it with a non-CSDb archival link, which this card follows
instead.

## Disassembly notes

None performed. No public source code or binary format documentation was found
— the only description available (HVMEC) is a high-level walkthrough of the
on-screen menu structure of the preserved disk image, not a technical spec.
A future pass could disassemble a representative `.sid` file tagged
Background_MusicEditor (via its PSID header init/play addresses) as the only
route to real memory-map/format facts, since no source is available.

## Verification

**Not verified — `status: stub`.** Only identity facts (author, year, a
high-level platform description) are confirmed, from the local SIDId snapshot,
the live upstream sidid.nfo, the HVMEC archive's description of the preserved
disk, and an independent C64-Wiki listing. Every runtime field is `TODO`
because no disassembly was performed and no format documentation exists
publicly.

## Sources

See the `sources` array — the local SIDId snapshot and its live upstream
counterpart (which corrects a broken cached CSDb reference), the HVMEC archive,
C64-Wiki, and this project's own composer/coverage aggregation.

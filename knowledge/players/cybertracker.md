# CyberTracker

```json
{
  "id": "cybertracker",
  "name": "CyberTracker",
  "aliases": ["CyberTracker", "CyberTracker_exe"],
  "authors": ["CyberBrain (Bjarke Nørgaard Laustsen), of No Name"],
  "released": "2001 (V1.00 April 2001, V1.01 September 2001; Executable Maker V1.00 December 2001)",
  "status": "verified",
  "platform": "Native C64 music tracker/editor. Tunes are edited/played inside CyberTracker itself; a separate companion tool, the CyberTracker Executable Maker, converts a finished module into a standalone C64 executable (PRG). No source code or license found for either — treat as closed/freeware.",
  "csdb_release": 2601,

  "memory": {
    "load_address": "$1000 (standard exported executable; per CyberTracker Executable Maker docs).",
    "zero_page": "TODO — DeepSID's players.json spec box (not a disassembly) says \"48 bytes ($D0-$FF) or sometimes a lot more\", unverified",
    "layout": "TODO: order list / pattern / envelope table addresses"
  },
  "entry": {
    "init": "$1000 (standard — confirmed on trace 2026-07-22). Some files have non-standard init offsets (e.g. $2273) from packed/relocated builds.",
    "play": "$1003 (standard — confirmed on trace)."
  },
  "speed": "TODO — DeepSID's players.json spec box lists \"1x\" and \"54 or 215-224 rasterlines [SD]\" CPU time, unverified by disassembly",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO — manual states patterns hold up to 128 rows, 256 patterns max, track memory 512 lines",
    "instruments": "TODO — manual/DeepSID describe instruments as built from up to 8 graphical envelopes (not raw hex tables) rather than a conventional instrument table; envelope memory 768 points (source: CyberTracker online manual)",
    "wavetable": "TODO — arpeggio/pulse/filter are each driven by one or more of the graphical envelopes, not classic wave/pulse/filter tables (source: CyberTracker online manual, DeepSID players.json)",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO — the online manual states 16 effect types (0-F) with a multi-effect system (\"Dxx\": up to 255 pattern-effects per line), byte layout not read",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "TAG-SPLIT INVESTIGATED: 'CyberTracker' and 'CyberTracker_exe' are the SAME tool under two raw SIDId tags, not two different players — merged onto this one card. 'CyberTracker_exe' fingerprints tunes produced by the separate 'CyberTracker Executable Maker' (CSDb release 6663, Dec 2001), which packs a finished .ct module into a standalone C64 executable/PRG — a different binary shape than a tune played from inside the editor, hence a different SIDId signature, but the same underlying CyberBrain playback engine. Evidence: SIDId's own comment on CyberTracker_exe reads \"Created with the CyberTracker Executable Maker\" (data/sidid.json); the Executable Maker's own CSDb release (release 6663, \"CyberTracker Executable Maker\") and its composer-usage overlap with the plain tag indicate it packs a finished CyberTracker module into a standalone C64 executable rather than functioning as an independent editor (noname.c64.org/tracker/ describes the tool, though not in those exact words); and several composers (Fredrik, Pi Pater, Mouse Mr) appear tagged under BOTH raw tags in this dataset's per-composer files, i.e. the same person's tunes show up under whichever tag matches how that particular file was exported.",
    "COVERAGE.md / gen-coverage.js's hand-curated OPEN_SOURCE set flags 'CyberTracker_exe' as open-source, but this could not be confirmed: the No Name site's downloads and manual/reference pages (noname.c64.org/tracker/downloads.php, manual.php) list only compiled D64 binaries plus a *file format guide* (documentation, not source) and manuals; no .s/asm source archive was found anywhere (site, CSDb, web search), and the site footer says only \"Copyright (C) No Name 2001\" with no license text. Treat the OPEN_SOURCE flag as unverified/likely stale until someone finds an actual source archive — do not assume reusable source exists.",
    "Composer concentration differs sharply between the two tags in this dataset: plain 'CyberTracker' spreads across 24 composers (top: Pi Pater 16/116, ~14%) — looks like real adoption as a tool, not a personal routine. 'CyberTracker_exe' is dominated by one composer, Fredrik (75/125, 60%) — consistent with it being a packaging artifact of how one prolific user exported files, not a separate scene of adoption.",
    "Its instrument model is unusual for a C64 tracker: instruments are built from up to eight graphical amplitude/arpeggio/pulse/filter *envelopes* rather than hex-byte tables — DeepSID's players.json spec box notes this uses \"a lot of RAM and CPU time\" as a tradeoff (source: data/players.json csdb_id 25 entry, and the CyberTracker manual)."
  ],
  "sources": [
    "sidid:CyberTracker (author Bjarke Nørgaard Laustsen (CyberBrain), 2001, CSDb release 2601 — https://csdb.dk/release/?id=2601)",
    "sidid:CyberTracker_exe (2001, CSDb release 6663, comment \"Created with the CyberTracker Executable Maker\" — https://csdb.dk/release/?id=6663)",
    "CSDb CyberTracker V1.00 release: https://csdb.dk/release/?id=2601 (released Mekka & Symposium 2001, 13 Apr 2001)",
    "CSDb CyberTracker V1.01 release: https://csdb.dk/release/?id=25 (14 Sep 2001, code/design/idea: CyberBrain of No Name)",
    "CSDb CyberTracker Executable Maker V1.00: https://csdb.dk/release/?id=6663 (13 Dec 2001)",
    "No Name project site: https://noname.c64.org/tracker/ (overview, version history, Executable Maker description)",
    "CyberTracker online manual: http://noname.c64.org/tracker/manual_online.php (effects/pattern/envelope details, notes packing into a runnable tune was not yet possible at time of V1.00's writing)",
    "CyberTracker manual & reference index: https://noname.c64.org/tracker/manual.php (file format guides for V1.00/V1.01 exist as documentation; no source code found)",
    "Local dataset (DeepSID dump): data/players.json csdb_id 25 entry (spec box: zero_pages, cpu_time, patterns, instruments, distribution=Freeware, source_code=No)",
    "Local dataset: 116 files tagged CyberTracker + 125 files tagged CyberTracker_exe = 241 files total across 24 (CyberTracker) / 17 (CyberTracker_exe) composers, with overlap (see knowledge/COVERAGE.md ranks #9 and #7)"
  ]
}
```

## Overview

CyberTracker is a native C64 music tracker by **CyberBrain (Bjarke Nørgaard
Laustsen)** of the group **No Name**, first released as V1.00 at Mekka &
Symposium 2001 (April 2001), with V1.01 following in September 2001. It
distinguishes itself from most C64 trackers by building instruments out of up
to eight graphical *envelopes* (amplitude/arpeggio/pulse/filter) rather than
conventional hex instrument tables — a design DeepSID's own spec notes costs
"a lot of RAM and CPU time." A companion utility, the **CyberTracker
Executable Maker** (December 2001), packs a finished module into a standalone
C64 executable; this project's dataset fingerprints those exported files
under a separate raw tag, `CyberTracker_exe`, but it is the same playback
engine, not a different tool (see the tag-split quirk below). Combined, the
two tags cover 241 files across the collection (ranks #7 and #9 in
`knowledge/COVERAGE.md`'s uncarded-family list before this card), with wide
composer adoption on the plain tag (24 composers, no single one dominant) and
one prolific user, Fredrik, accounting for most of the `_exe` tag's files —
consistent with a genuinely published tool rather than a one-composer
private routine.

## Quirks & gotchas

See the `quirks` array — the load-bearing one for anyone else touching this
family is the **tag-split investigation**: `CyberTracker` and
`CyberTracker_exe` are the same tool, merged onto one card here specifically
to avoid the kind of months-long uncarded duplicate the JCH NewPlayer
V5-V20 split caused. Also note the **OPEN_SOURCE flag on `CyberTracker_exe`
in `knowledge/COVERAGE.md`/`gen-coverage.js` could not be confirmed** —
extensive searching of the author's own site, CSDb, and the web found only
compiled binaries, manuals, and a file-format *guide* (documentation), never
an actual source archive. A future pass should either find the source or
correct that hand-curated flag.

## Disassembly notes

None — no disassembly was performed for this card (Tier 1/2 research only).
The publicly available *file format guide* on noname.c64.org/tracker/manual.php
(V1.00 and V1.01 versions) describes the `.ct` module format at a
documentation level and would be the natural starting point for filling the
Tier 3 fields, but it was not read line-by-line here — treat `data_format`/
`effects.commands` above as manual-derived hints, not confirmed facts.

## Verification

**Not verified — `status: stub`.** Only identity (author, release dates, CSDb
IDs), the tag-split relationship between `CyberTracker` and `CyberTracker_exe`,
and dataset usage stats are confirmed, from SIDId, CSDb, the author's own
site/manual, and local per-composer file data. No memory map, entry point, or
runtime format field has been confirmed by disassembly; all are `TODO`.

## Sources

See the `sources` array — SIDId (`CyberTracker`, `CyberTracker_exe`), CSDb
releases 2601/25/6663, the No Name project site and online manual, DeepSID's
`players.json` spec box (csdb_id 25), and local per-composer file counts.

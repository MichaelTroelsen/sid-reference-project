# JITT64_1.x

```json
{
  "id": "jitt64",
  "name": "JITT64_1.x",
  "aliases": ["JITT64_1.x"],
  "authors": ["Stefano Tognon (Ice00)"],
  "released": "2008 Ice Team",
  "status": "stub",
  "platform": "Cross-platform Java editor (JITT64 = \"Java Ice Team Tracker 64\"), not a native C64 tool. Runs on Windows/Mac/Linux/BSD/ChromeOS via Java Swing (requires Java 1.6+ per the CSDb release note), exports PSID/PRG/BIN for the C64. Editor playback preview uses the JSIDPlay2 engine (CSDb release description); the exported .sid necessarily carries its own native 6502 replay routine, not JSIDPlay2 itself. Source released under GPLv2, hosted as an SVN repo on SourceForge (still browsable, last commit 2025-01-20 rev 499) — https://sourceforge.net/projects/jitt64/",
  "csdb_release": 74136,

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
    "SIDId's sidid.nfo gives AUTHOR 'Stefano Tognon (Ice00)', RELEASED '2008 Ice Team', and a REFERENCE to CSDb release 74136 — more complete than most tags in this batch, but still no NAME or COMMENT field, so the tool's actual title (if any beyond the tag itself) and playback technique are unconfirmed.",
    "100% single-composer concentration, confirmed by full census (not sample): all 5 locally-tagged files (Carillon, STRH_Mix, Turtle, A_Piece_of_Graffiti, Infernal_25Hz) belong to the composer 'Stefano Tognon' himself (handle Ice00, Italy — data/composers/stefano-tognon.json), consistent with a personal tool used mainly by its own author under his group 'Ice Team' rather than a widely-adopted one, despite the tool being publicly released and open-source.",
    "The '_1.x' version suffix implies an internal versioning scheme; no sibling tags (e.g. 'JITT64_2.x') were found in this project's coverage data, even though JITT64 itself reached v1.04 by 2020 (CSDb release 193611) — the SIDId signature evidently was not updated/re-fingerprinted per JITT64 version.",
    "JITT64 = 'Java Ice Team Tracker 64', first announced by ice00 on Lemon64 on 2008-02-18 (https://www.lemon64.com/forum/viewtopic.php?t=26109) as explicitly motivated by dissatisfaction with GoatTracker ('difficult I find in using Goattracker to produce a sound') and built with 'tracker commands similar to goattracker' but its own independent, per-instrument (non-shared) table design — a stated design influence, not a code-derivation claim, so no `derives_from` edge is asserted here.",
    "The CSDb release page for 74136 notes the tool 'requires Java 1.6 or higher' and 'utilizes the JSIDPlay2 engine for sound playback', and that 'users noted mixed results with functionality across different systems' on initial release.",
    "Development continued long after 2008: SourceForge shows commits into 2025 (rev 499, 2025-01-20), and CSDb records a v1.04 release dated 2020-04-19 (release id 193611) — the tool is not a one-off from 2008 despite the SIDId REFERENCE pointing only at the earliest (1.00) release."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "SIDId REFERENCE — CSDb release 74136, JITT64 1.00 (Ice Team, 2008-12-24): https://csdb.dk/release/?id=74136",
    "CSDb release 193611, JITT64 1.04 (Ice Team, 2020-04-19): https://csdb.dk/release/?id=193611",
    "Local dataset: full census, 5 files tagged JITT64_1.x, all by composer 'Stefano Tognon' — data/composers/stefano-tognon.json; see knowledge/COVERAGE.md",
    "CSDb scener profile, Stefano Tognon / Ice00 (Italy): https://csdb.dk/scener/?id=8082",
    "SourceForge project page (Java, GPLv2, Windows/Mac/Linux/BSD/ChromeOS, PSID/PRG/BIN export): https://sourceforge.net/projects/jitt64/",
    "SourceForge SVN code browser (source availability, last commit 2025-01-20 rev 499): https://sourceforge.net/p/jitt64/code/",
    "itch.io distribution page (v1.01 2019 through v1.04 2020, Windows/Linux, 'name your own price'): https://iceteam.itch.io/jitt64",
    "Lemon64 announcement thread, 'JITT64: new Java C64 tracker in develop' (2008-02-18, GoatTracker-dissatisfaction motivation, JSidplay2 credit): https://www.lemon64.com/forum/viewtopic.php?t=26109"
  ]
}
```

## Overview

JITT64_1.x is a SIDId Player-ID tag credited to **Stefano Tognon**, handle
**Ice00**, an Italian scener, released 2008-12-24 under his group **Ice
Team** as JITT64 1.00 (SIDId REFERENCE points to CSDb release 74136).
Provenance research (2026-07-31) established that JITT64 ("Java Ice Team
Tracker 64") is a **cross-platform Java editor**, not a native C64 tool: it
runs on Windows/Mac/Linux/BSD/ChromeOS, exports PSID/PRG/BIN, uses the
JSIDPlay2 engine for in-editor playback preview, and its source is GPLv2
and still hosted (SVN, commits into 2025) on SourceForge. It was announced
by ice00 on Lemon64 in Feb 2008 as a reaction against GoatTracker's
workflow, with "commands similar to goattracker" but an independently
designed per-instrument table system — a stated influence, not a
derivation, so no lineage edge is asserted. Development continued well
past the SIDId-referenced 1.00: CSDb records a 1.04 release in 2020.
Locally the tag appears in **5 files, all by Stefano Tognon himself**
(data/composers/stefano-tognon.json, full census — Carillon, STRH_Mix,
Turtle, A_Piece_of_Graffiti, Infernal_25Hz), consistent with a tool used
almost exclusively by its own author despite being publicly released and
open-source.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId's release/reference fields
are populated (unusually complete for this batch), but NAME/COMMENT are
still absent; (2) 100% single-composer usage (full 5/5 census) points to a
tool used almost exclusively by its own author, even though it is a public,
open-source, cross-platform release rather than a closed personal routine;
(3) the tool's own JSIDPlay2-based editor playback is distinct from
whatever native 6502 replay routine ships in an exported .sid — that
routine's internals remain entirely unresearched (Tier 3).

## Disassembly notes

None done here. Tier 2 research confirmed JITT64 is a Java cross-platform
editor with GPLv2 source on SourceForge, but the actual exported-.sid
native replay routine (the code SIDId's signature actually matches) was
not located or disassembled. All Tier 3 fields remain `TODO` — a real
answer would require pulling a representative Ice00 .sid, identifying the
embedded 6502 player, and possibly cross-referencing the SourceForge
source tree for the assembly/6502 side of the exporter.

## Verification

Not verified. Seeded from `data/composers/stefano-tognon.json`,
`data/sidid.json`, CSDb release pages (74136, 193611), CSDb scener profile,
SourceForge project/SVN pages, itch.io distribution page, and the original
2008 Lemon64 announcement thread. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (with populated release/reference
fields), CSDb release pages for 74136 (1.00, 2008) and 193611 (1.04, 2020),
the local composer aggregation (full 5-file census), the CSDb scener
profile for Stefano Tognon, the SourceForge project and SVN code-browser
pages, the itch.io distribution page, and the 2008 Lemon64 announcement
thread.

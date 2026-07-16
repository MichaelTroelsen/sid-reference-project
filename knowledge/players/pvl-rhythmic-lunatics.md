# PVL/Rhythmic Lunatics (player routine)

```json
{
  "id": "pvl-rhythmic-lunatics",
  "name": "PVL/Rhythmic Lunatics (player routine)",
  "aliases": ["PVL/Rhythmic_Lunatics"],
  "authors": ["Pascal van Loosbroek (PVL)"],
  "released": "TODO: no year in SIDId; PVL's HVSC profile lists active=1996, and the 'Rhythmic Lunatics' group's own CSDb music-collection releases date to 1992-1993 (see sources) — these bracket a likely range but neither directly dates the player routine itself",
  "status": "stub",
  "platform": "Native C64 player — most likely a composer's own hand-coded routine (Player-ID fingerprints it by byte signature), not a distributed/documented editor. No CSDb tool release or source repo found for the routine itself.",
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
    "SIDId's entry for this tag is author-only — no released/reference/comment fields (confirmed by reading the raw sidid.nfo directly: 'PVL/Rhythmic_Lunatics \\n AUTHOR: Pascal van Loosbroek (PVL)', nothing else). Matches this project's cached data/sidid.json exactly.",
    "'Rhythmic Lunatics' is a real C64 scene group name, not just descriptive tag text: CSDb lists two 1990s music-collection releases credited to it — 'Epistula Music 02' (1992) and 'Unlimited #1' (March 1993). But HVSC's Musicians.txt lists PVL's own group as 'Slash Design' (Netherlands) and fellow contributor JVD's as 'Focus' (Netherlands) — neither matches 'Rhythmic Lunatics' verbatim, so the tag's group affiliation is not the same one recorded in PVL's/JVD's current HVSC musician entries. Left unresolved rather than guessed at.",
    "Composer concentration in this project's dataset (34 files total): PVL himself 20 files (59%), JVD 13 files (38%, also Netherlands), Vincenzo (Hungary) 1 file (3%). Two of three composers are Dutch scene contemporaries — consistent with a small personal/clique routine, not a widely published tool. The single Hungarian file is too small a sample to call routine reuse (cf. rob-hubbard.md's much larger, better-evidenced reuse pattern) — noted, not asserted.",
    "STIL.txt shows heavy '[from <artist>]' cover-tune tagging across both PVL's and JVD's HVSC folders (Fleetwood Mac, Michael Jackson, 2 Unlimited, A-Ha, Level 42, Roxette, Genesis, Depeche Mode, Dr. Alban...) — consistent with a routine used mainly for pop-cover chiptunes rather than an ambitious tracker/editor release.",
    "No public source code, disassembly, or CSDb tool/release entry found for the player routine itself — every runtime field below is honestly TODO."
  ],
  "sources": [
    "sidid.nfo raw entry (cadaver/sidid on GitHub, read directly): https://github.com/cadaver/sidid/blob/master/sidid.nfo — 'PVL/Rhythmic_Lunatics: AUTHOR: Pascal van Loosbroek (PVL)', no reference/comment",
    "Local cache: data/sidid.json byTag['PVL/Rhythmic_Lunatics']",
    "CSDb release, 'Unlimited #1 by Rhythmic Lunatics' (1993): https://csdb.dk/release/?id=4807",
    "CSDb release, 'Epistula Music 02 by Rhythmic Lunatics' (1992): https://csdb.dk/release/?id=173971",
    "HVSC Musicians.txt: 'PVL (van Loosbroek, Pascal {Ferock}) / Slash Design - NETHERLANDS' (data/hvsc/Musicians.txt line 1315); 'JVD (van Dongen, Jurgen {Mode2}) / Focus - NETHERLANDS' (line 861)",
    "HVSC STIL.txt: cover-tune '[from X]' tags across /MUSICIANS/P/PVL/ and /MUSICIANS/J/JVD/ (data/hvsc/STIL.txt)",
    "Local dataset: data/composers/pvl.json, data/composers/jvd.json, data/composers/vincenzo.json — 34 files (20 PVL / 13 JVD / 1 Vincenzo) tagged PVL/Rhythmic_Lunatics; see knowledge/COVERAGE.md (rank 8, 34 files)"
  ]
}
```

## Overview

"PVL/Rhythmic_Lunatics" is the Player-ID signature for a player routine
attributed to Pascal van Loosbroek (PVL), a Dutch C64 scener (HVSC group
"Slash Design"). 34 files in this project's dataset carry the tag, spread
across three composers — PVL himself (20, 59%), fellow Dutch scener JVD (13,
38%), and a single outlier file by the Hungarian composer Vincenzo (1, 3%).
"Rhythmic Lunatics" also names a real early-1990s C64 scene group that
released two CSDb-catalogued music collections ("Epistula Music 02" in 1992,
"Unlimited #1" in 1993), though it is not the group HVSC currently lists for
either PVL or JVD — a discrepancy this card records but does not resolve.
Everything found points to a small, composer-authored routine rather than a
published, documented editor: no source, disassembly, or CSDb tool entry was
found for it, so this is an identity-only stub.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: the SIDId entry carries no
release year or reference (author only); the "Rhythmic Lunatics" group name
on CSDb doesn't match either contributing composer's HVSC-listed group; and
the composer spread (2 Dutch scene contemporaries + 1 small outlier) reads as
a personal/small-clique routine used mostly for pop-cover chiptunes, not a
widely distributed tool.

## Disassembly notes

None performed. No source or public disassembly was found to work from —
Tier 3 fields are left `TODO` rather than guessed.

## Verification

Not verified — `status: stub`. Only identity/provenance facts (author,
composer usage, group-name discrepancy) are established, each from a cited
source (SIDId raw entry, HVSC Musicians.txt/STIL.txt, CSDb release pages, and
this project's own composer data). No runtime fact has been confirmed by
disassembly or tracing.

## Sources

See the `sources` array — the raw sidid.nfo entry, this project's cached
`data/sidid.json`, two CSDb "Rhythmic Lunatics" music-collection releases,
HVSC Musicians.txt/STIL.txt, and the local per-composer dataset
(`data/composers/pvl.json`, `jvd.json`, `vincenzo.json`).

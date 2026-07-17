# Sound-Tracker '64

```json
{
  "id": "sound-tracker-64",
  "name": "Sound-Tracker '64",
  "aliases": ["Sound-Tracker_64"],
  "authors": [
    "Claus Leth Gregersen (Groo)",
    "Michael Toft (Dean)",
    "Lars Pedersen (Spe)"
  ],
  "released": "1988 (Mechanix; released 3 July 1988 at Dexion Meeting)",
  "status": "stub",
  "platform": "Native C64 tool — a standalone editor/tracker run on real hardware, not a cross-platform export chain.",
  "csdb_release": 36365,

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
    "SIDId's own `reference` URL for this tag (csdb.dk/release/?id=36365) resolves to a 1992 Genius Softworks release that a CSDb user comment describes as a modified 1992 re-release ('new intro') of the original — the original 1988 Mechanix release is a SEPARATE CSDb entry, id=699 ('Sound-Tracker '64 by Mechanix', 3 July 1988, released at Dexion Meeting 1988). SIDId's `released` field ('1988 Mechanix 2124') matches the 1988 original, not the release its own URL points to. Recorded here as-is rather than silently 'corrected' — the card's `csdb_release` mirrors SIDId's literal reference; treat id=699 as the more likely primary release for provenance. (https://csdb.dk/release/?id=699, https://csdb.dk/release/?id=36365)",
    "Composer/code credits differ slightly by source: SIDId lists all three of Groo/Dean/Spe as author; the CSDb id=699 release page credits code to Dean/Groo/Spe jointly but music and bug-fixing/docs to Groo alone; a Demozoo listing for a '101%' variant (production 185656, same 3 July 1988 date) credits Dean for intro code, Groo for code fixes + music, and adds Apostle for graphics — suggesting Sound-Tracker '64 shipped with an intro/loader by a small team around the core Mechanix trio.",
    "Small, spread usage in this dataset: 19 tagged files across 14 different HVSC composers (max 3 files from any one composer, 'Faclaug') — not a single-author personal routine, but also never became a widely-adopted scene tool (per data/composers/*.json aggregation)."
  ],
  "sources": [
    "data/sidid.json byTag['Sound-Tracker_64'] (author, released, CSDb reference) — SIDId project's player index, bundled with DeepSID's offline export",
    "knowledge/COVERAGE.md — 19 files, single raw tag 'Sound-Tracker_64', no card previously existed, 'source' column blank (not flagged open-source)",
    "CSDb release (1988 original, Mechanix): https://csdb.dk/release/?id=699",
    "CSDb release (SIDId's reference; 1992 Genius Softworks re-release): https://csdb.dk/release/?id=36365",
    "Demozoo production 185656, 'Sound-Tracker '64 101%' by Mechanix: https://demozoo.org/productions/185656/",
    "Local dataset: aggregated from data/composers/*.json (this research pass)"
  ]
}
```

## Overview

Sound-Tracker '64 is a native Commodore 64 music editor/tracker released by
the Mechanix (Psygon) trio Groo, Dean and Spe on 3 July 1988, premiered at the
Dexion Meeting 1988 demoparty (CSDb release
[id=699](https://csdb.dk/release/?id=699)). A modified re-release with a new
intro followed in 1992 under Genius Softworks
([id=36365](https://csdb.dk/release/?id=36365), the release SIDId's own
`sidid.nfo` entry links to). In this project's dataset it is a minor player:
19 tagged files spread across 14 HVSC composers, none dominating — signal of
a real (if small-audience) tool rather than one person's private routine, per
the composer-concentration heuristic in `knowledge/EXTRACTION-TEMPLATE.md`.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the CSDb release-id mismatch
between SIDId's `released` text (matches the 1988 original) and its
`reference` URL (points at the 1992 re-release). Both CSDb entries and a
Demozoo listing are cited so a future pass can resolve which is truly
"canonical" without re-doing this lookup.

## Disassembly notes

None. No public source, format spec, or disassembly of Sound-Tracker '64 was
found (Codebase64, GitHub, and general web search all came up empty beyond
the CSDb/Demozoo release metadata already cited). This is a closed 1988 scene
tool with no known surviving documentation beyond its CSDb credits — a future
pass would need to disassemble a representative `.sid` from PSID init/play
addresses and trace it through `sidm2-siddump`, the same route used for other
closed classic players.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed (author trio, 1988 release + 1992 re-release, CSDb credits, dataset
usage). Every runtime field is honestly `TODO`: no source or disassembly
exists to found them on.

## Sources

See the `sources` array — `data/sidid.json`, `knowledge/COVERAGE.md`, the two
CSDb release pages (id=699 original, id=36365 re-release), and the Demozoo
production page.

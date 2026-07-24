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
  "released": "1988 (Mechanix; released 3 July 1988 at Dexion Meeting 1988, Nykøbing Sjælland, Denmark)",
  "status": "stub",
  "platform": "Native C64 tool — a standalone editor/tracker run on real hardware, not a cross-platform export chain. Note-entry has no piano keyboard: you type notes symbolically (a CSDb user recalls pressing E, then #, then 4 for E#4).",
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
    "Small, spread usage in this dataset: 19 tagged files across 14 different HVSC composers (max 3 files from any one composer, 'Faclaug') — not a single-author personal routine, but also never became a widely-adopted scene tool (per data/composers/*.json aggregation).",
    "'Mechanix 2124' (SIDId's `released` string, and the group name on Demozoo) is the group's full handle — CSDb records it as an AKA of group id=590 'Mechanix' (AKA 'Mechanix 2124, Mechanix Corporation'), a Danish swapping/demo/cracker group founded 1987. The '2124' is a scene-handle suffix, NOT a CSDb id; do not resolve it as one. All three coders are Danish sceners (CSDb webservice type=release id=699).",
    "HVSC STIL directly documents the tool twice, independent of CSDb: (1) /MUSICIANS/G/Groo/Sound-tracker_64.sid is Sound-Tracker '64's own built-in demo tune — a cover of Karsten Obarski's 'Rallye Master' (Amiga game); (2) the STIL comment on /GAMES/A-F/Dirty.sid reads: 'These tunes were made using Sound-tracker'64 and still contain bits and pieces of its demo tune /MUSICIANS/G/Groo/Sound-tracker_64.sid' — i.e. tunes exported from the editor can retain leftover fragments of the packaged demo song. (data/hvsc/STIL.txt lines ~8339 and ~47078)",
    "OBSERVED (PSID header metadata, NOT disassembly): across 16 of the 19 tagged .sid files, the PSID INIT address clusters tightly at $C2C0-$C3F0 (decimal 49856-50160; most commonly 49864 = $C308) while the LOAD address varies per file ($AA00-$BC00 range) — consistent with a fixed high-memory replayer sitting above per-tune song data that loads at varying addresses. 3 files are outliers with low-memory init ($1400/$13C0/$0000-region: No-XS/Alcolado_loader init=12288, The_Future_Cracker/Evil_Dead init=5056, likely embedded-in-demo relocations). Most files report PSID play=$0000 (init-installed IRQ); a few report an explicit play near $C3E0. This is a cross-file header pattern only — no entry point, memory map or speed model is asserted from it. (CSDb webservice type=sid, ids per data/composers/*.json)"
  ],
  "sources": [
    "data/sidid.json byTag['Sound-Tracker_64'] (author, released, CSDb reference) — SIDId project's player index, bundled with DeepSID's offline export",
    "knowledge/COVERAGE.md — 19 files, single raw tag 'Sound-Tracker_64', no card previously existed, 'source' column blank (not flagged open-source)",
    "CSDb release (1988 original, Mechanix): https://csdb.dk/release/?id=699",
    "CSDb release (SIDId's reference; 1992 Genius Softworks re-release): https://csdb.dk/release/?id=36365",
    "Demozoo production 185656, 'Sound-Tracker '64 101%' by Mechanix: https://demozoo.org/productions/185656/",
    "Pouet production 34866 (Sound-Tracker '64 101%): https://www.pouet.net/prod.php?which=34866",
    "CSDb webservice release id=699 (full XML: Danish group Mechanix id=590 founded 1987; code Dean/Groo/Spe, music+bug-fix+docs Groo; Dexion Meeting 1988, Nykøbing Sjælland DK; original-disk download): https://csdb.dk/webservice/?type=release&id=699",
    "HVSC STIL.txt: tool's own demo tune (Groo/Sound-tracker_64.sid, cover of Obarski's 'Rallye Master') and the /GAMES/A-F/Dirty.sid comment confirming tunes made with the editor retain demo-tune fragments — data/hvsc/STIL.txt (~lines 8339, 47078)",
    "CSDb webservice type=sid header addresses for the 19 tagged files (init/load/play observation): https://csdb.dk/webservice/?type=sid&id=<n>",
    "Local dataset: aggregated from data/composers/*.json (this research pass)"
  ]
}
```

## Overview

Sound-Tracker '64 is a native Commodore 64 music editor/tracker released by
the Danish group Mechanix (CSDb group [id=590](https://csdb.dk/group/?id=590),
AKA "Mechanix 2124", founded 1987) — coded jointly by Groo (Claus Leth
Gregersen), Dean (Dean Youngblood) and Spe, with music, bug-fixing and docs by
Groo alone — on 3 July 1988, premiered at the Dexion Meeting 1988 copy party in
Nykøbing Sjælland, Denmark (CSDb release
[id=699](https://csdb.dk/release/?id=699), verified via the CSDb webservice
XML). A modified re-release with a new intro followed in 1992 under Genius
Softworks ([id=36365](https://csdb.dk/release/?id=36365), the release SIDId's
own `sidid.nfo` entry links to). HVSC's STIL notes corroborate the tool
independently: `/MUSICIANS/G/Groo/Sound-tracker_64.sid` is the editor's own
built-in demo tune (a cover of Karsten Obarski's "Rallye Master"), and the STIL
comment on `/GAMES/A-F/Dirty.sid` states tunes "made using Sound-tracker'64 ...
still contain bits and pieces of its demo tune". In this project's dataset it is
a minor player: 19 tagged files spread across 14 HVSC composers, none dominating
— signal of a real (if small-audience) tool rather than one person's private
routine, per the composer-concentration heuristic in
`knowledge/EXTRACTION-TEMPLATE.md`.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the CSDb release-id mismatch
between SIDId's `released` text (matches the 1988 original) and its
`reference` URL (points at the 1992 re-release). Both CSDb entries and a
Demozoo listing are cited so a future pass can resolve which is truly
"canonical" without re-doing this lookup.

## Disassembly notes

No disassembly done, and no public source or format spec was found
(Codebase64, GitHub, zimmers.net editors archive, Lemon64 and Forum64 searches,
and general web search all came up empty beyond the CSDb/Demozoo/Pouet release
metadata and HVSC STIL notes already cited). The original 1988 disk is
downloadable from CSDb (`copyDISK013S1.zip`, via release id=699) and the 1992
Genius re-release (`genius1992.D64`, id=36365), so a representative binary
exists for a future disassembly pass.

One non-invented, cross-checked observation from the PSID headers of the 19
tagged files (via CSDb webservice `type=sid`): 16 of them place the INIT entry
in a tight $C2C0-$C3F0 cluster (most at $C308) while the LOAD address varies
per tune — consistent with a fixed high-memory replayer above per-tune song
data. This is header metadata only; it is recorded in `quirks` and deliberately
NOT promoted into `entry.init`/`memory` as a confirmed runtime fact. A future
pass would disassemble one of these `.sid` files from its real init address and
trace it through `sidm2-siddump`, the same route used for other closed classic
players.

## Verification

**Not verified — `status: stub`.** Identity/provenance facts are well
confirmed and were expanded this pass (Danish group Mechanix id=590; author
trio Groo/Dean/Spe with credits split; 1988 original + 1992 Genius re-release;
Dexion Meeting location; HVSC STIL corroboration of the demo tune and
export-fragment behaviour). Every runtime field is honestly `TODO`: no public
source repo or disassembly exists to found them on, so `in-progress` is not
warranted — the PSID-header init cluster is an observation, not a documented
runtime fact. `status` stays `stub`.

## Sources

See the `sources` array — `data/sidid.json`, `knowledge/COVERAGE.md`, the two
CSDb release pages (id=699 original, id=36365 re-release), and the Demozoo
production page.

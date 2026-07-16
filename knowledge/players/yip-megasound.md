# MegaSound Music Editor

```json
{
  "id": "yip-megasound",
  "name": "MegaSound Music Editor",
  "aliases": ["Yip_MegaSound"],
  "authors": ["Jori Olkkonen (Yip)"],
  "released": "1988 (CSDb release date; magazine listing was in C=Lehti issue 5/1988. DeepSID's players.json cache instead lists start_year 1987 — discrepancy unresolved, both cited)",
  "status": "stub",
  "platform": "Native C64 music editor/tool, credited 'Code: Yip of Pure-Byte / Music: Yip of Pure-Byte' on CSDb — published as a type-in/cover-disk item in the Finnish Commodore magazine C=Lehti issue 5/1988 (Tecnopress), also released through the Pure-Byte group",
  "csdb_release": 72917,

  "memory": {
    "load_address": "PSID header of the representative HVSC file (Megasound_Musiceditor.sid, /MUSICIANS/Y/Yip/, CSDb sid entry 32107): load $2000 — this is header metadata read off the CSDb page, NOT an independent disassembly",
    "zero_page": "DeepSID players.json cached spec field 'zero_pages': \"3 bytes ($FB-$FD) + sometimes also $FA\" — cited as-is from data/players.json, not independently verified via disassembly",
    "layout": "TODO: order list / patterns / table addresses — not disassembled"
  },
  "entry": {
    "init": "$2000 per the same PSID header (CSDb sid entry 32107) — A/X/Y calling convention not verified",
    "play": "$202e per the same PSID header — call rate not verified"
  },
  "speed": "TODO: frame-driven vs CIA vs raster not established; no disassembly performed",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Published as a magazine listing/tool: SIDId's cached comment says 'MegaSound was published in the Finnish Commodore magazine C=Lehti in issue 5/1988' (data/sidid.json, tag Yip_MegaSound) — consistent with CSDb crediting the 1988 release to 'C=lehti/Tecnopress'. No digitized listing/source text was located during this research pass; treat as closed/binary-only until one turns up.",
    "CSDb's release page (id 72917) notes an alternate download 'that includes the packer and relocator as well', added by user Fred in 2013 — implies the original tool/output needed external packing/relocation, but no further technical detail was found.",
    "CSDb lists an 'Also Known As' name: 'Olkkonen Editor' — the author's real name (Jori Olkkonen) used as an alternate title for the same release.",
    "Composer concentration is a genuine-adoption signal, not just personal use: of 78 files tagged Yip_MegaSound across data/composers/*.json, only 2 belong to Yip's own composer folder(s) ('yip' and a separately-catalogued 'jori-olkkonen' folder, likely the same person under two HVSC entries — 2 files each). The bulk comes from other composers: Flotsam (31), Nutcase (26), Agemixer (10), Havoc (4), Deadman (3). Spread across 7 composers with the author himself a small minority points to a genuinely used/published editor, not a one-person routine.",
    "A separate, smaller raw tag 'Yip_Digi' (6 files, per knowledge/COVERAGE.md) also exists for the same author but is NOT the same family as this card — it is used only by Yip's own composer folder(s), suggesting a distinct personal digi-playback routine. No edge is asserted here for lack of direct evidence of a code relationship between the two.",
    "Jori Olkkonen (Yip) later changed his name to Petrik Salovaara per public biographical sources (en-academic.com mirror of a Wikipedia-derived entry) — noted for identity-tracing purposes only, not independently verified against a primary source."
  ],
  "sources": [
    "SIDId cached entry (data/sidid.json, tag 'Yip_MegaSound'): name 'MegaSound Music Editor', author 'Jori Olkkonen (Yip)', released 1988, reference https://csdb.dk/release/?id=72917, comment re: C=Lehti issue 5/1988",
    "DeepSID players.json curated entry 'Megasound Music Editor' (data/players.json): developer link to /MUSICIANS/Y/Yip/, start_year 1987, csdb_id 72917, platform 'Native / C64 emulator', zero_pages '3 bytes ($FB-$FD) + sometimes also $FA'",
    "CSDb release page: https://csdb.dk/release/?id=72917 (title 'Megasound Musiceditor', AKA 'Olkkonen Editor'; credits Yip of Pure-Byte for code+music; group Pure-Byte; 1988; alternate download with packer/relocator added 2013)",
    "CSDb SID-file entry: https://csdb.dk/sid/?id=32107 (Megasound_Musiceditor.sid, /MUSICIANS/Y/Yip/; PSID header: load $2000, init $2000, play $202e, 1 song, 6581/PAL, 7173 bytes)",
    "Internet Archive disk image (supplementary, no technical detail beyond metadata): https://archive.org/details/d64_Megasound_Musiceditor_19xx_Jori_Olkkonen",
    "Local dataset: 78 files tagged Yip_MegaSound across 7 composers (data/composers/*.json); ranked #3 uncarded family by file count in knowledge/COVERAGE.md at time of writing"
  ]
}
```

## Overview

MegaSound Music Editor (CSDb also lists it as "Olkkonen Editor") is a native
Commodore 64 music editor by Jori Olkkonen, known in the demoscene as Yip of
Pure-Byte. It was published in 1988, distributed both through the Finnish
Commodore magazine C=Lehti (issue 5/1988, via Tecnopress) and the Pure-Byte
group. It is the 3rd-largest uncarded player family in this project's local
dataset by file count (78 files, per `knowledge/COVERAGE.md`), used by 7
different HVSC composer folders — with the author's own output only 4 of
those 78 files (split across two composer folders, "yip" and "jori-olkkonen",
likely the same person), meaning the tool saw genuine third-party adoption (Flotsam
31 files, Nutcase 26, Agemixer 10) rather than being a purely personal
routine. A separate, much smaller raw tag, `Yip_Digi` (6 files), is used
only by Yip's own folder and appears to be a distinct personal
digi-playback routine — no code relationship is asserted between the two
here for lack of evidence.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this was a magazine-published
tool (no digitized listing/source located yet, so treat as closed/binary
until one surfaces); an alternate CSDb download bundles "the packer and
relocator", hinting the tool's output needs external packing but with no
further detail found; and the composer spread (7 composers, author a small
minority) is itself the evidence that this was a real, adopted tool rather
than a private routine.

## Disassembly notes

None performed for this card. The only "runtime-flavored" facts present —
load/init/play addresses and a zero-page byte count — are read directly off
already-published metadata (a CSDb SID-file entry's PSID header, and DeepSID's
cached `players.json` spec field) rather than from an independent
disassembly. Memory layout, speed model, and data/effect formats are all
`TODO`. The natural next step, if this player is prioritized, would be to
pull `Megasound_Musiceditor.sid` (or one of the 78 tagged files) and actually
disassemble init ($2000) / play ($202e) per the PSID header above, then trace
through `sidm2-siddump`.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release year, CSDb release, platform, composer-usage stats) are confirmed
from local cached data (`data/sidid.json`, `data/players.json`,
`data/composers/*.json`) and CSDb. The load/init/play addresses and
zero-page note are cited straight from already-public sources (a CSDb SID
entry's PSID header, and DeepSID's cached spec field) with no independent
disassembly behind them — consistent with the `ariston.md` precedent for
handling a cached DeepSID `zero_pages` field. No real reverse-engineering was
performed, and no `edges` relationship is asserted for lack of direct
evidence of code lineage to or from any other player.

## Sources

See the `sources` array — the cached SIDId entry, DeepSID's curated
`players.json` entry, the CSDb release and SID-file pages, and the local
per-composer file-tag aggregation (`data/composers/*.json`,
`knowledge/COVERAGE.md`).

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
    "Jori Olkkonen (Yip) later changed his name to Petrik Salovaara per public biographical sources (en-academic.com mirror of a Wikipedia-derived entry) — noted for identity-tracing purposes only, not independently verified against a primary source.",
    "Real usage documentation located (zimmers.net/anonftp/pub/cbm/c64/audio/editors/Megasound.txt, dated 2009-08-18): user-facing loading/keyboard instructions ('LOAD\"PINK FLOYD\",8,1' then 'LOAD\"MEGASOUND\",8', F1 = switch editor columns, F3 = toggle sound editor/track editor, P = play/stop, SHIFT+D = load files, F9 = check filenames under CCS64) — UI-level facts only, no memory map or format detail.",
    "The same documentation states 'this is the editor Jori used to do the endpart music for BMX kids on C64' — i.e. MegaSound (or a precursor of it) was used for the high-score-screen music of the 1987 Firebird game BMX Kidz (main game music by Rob Hubbard, high-score music by Jori Olkkonen/Yip per multiple secondary sources: lemon64.com/game/bmx-kidz, MobyGames). This is a plausible explanation for the released-year discrepancy already noted (DeepSID's cached start_year 1987 vs CSDb's 1988 release): the tool/routine may predate its June 1988 magazine publication by about a year.",
    "The same documentation explicitly corrects an attribution error: 'All the music on the disk is by Sami \\'Nutcase\\' Saarnio. NOT by Yip!' — stating that HVSC versions 3.8 and earlier mis-credited these tunes to Yip, corrected in HVSC 3.9+ under /Nutcase. This directly corroborates the composer-concentration finding above: Nutcase (Sami Saarnio) is the #2 composer by file count (26 of 78) using this tag specifically because he was the disk's actual composer, not merely a third-party adopter.",
    "Cadaver (Covert Bitops)'s tech-rant page (cadaver.github.io/rants/music.html) independently confirms Jori Olkkonen (Yip) wrote music/music-routine articles in C-lehti magazine 'during the year 1987' — consistent with the 1987 date and BMX Kidz timing above, though it does not mention MegaSound by name or give technical detail."
  ],
  "sources": [
    "SIDId cached entry (data/sidid.json, tag 'Yip_MegaSound'): name 'MegaSound Music Editor', author 'Jori Olkkonen (Yip)', released 1988, reference https://csdb.dk/release/?id=72917, comment re: C=Lehti issue 5/1988",
    "DeepSID players.json curated entry 'Megasound Music Editor' (data/players.json): developer link to /MUSICIANS/Y/Yip/, start_year 1987, csdb_id 72917, platform 'Native / C64 emulator', zero_pages '3 bytes ($FB-$FD) + sometimes also $FA'",
    "CSDb release page: https://csdb.dk/release/?id=72917 (title 'Megasound Musiceditor', AKA 'Olkkonen Editor'; credits Yip of Pure-Byte for code+music; group Pure-Byte; 1988; alternate download with packer/relocator added 2013)",
    "CSDb SID-file entry: https://csdb.dk/sid/?id=32107 (Megasound_Musiceditor.sid, /MUSICIANS/Y/Yip/; PSID header: load $2000, init $2000, play $202e, 1 song, 6581/PAL, 7173 bytes)",
    "Internet Archive disk image (supplementary, no technical detail beyond metadata): https://archive.org/details/d64_Megasound_Musiceditor_19xx_Jori_Olkkonen",
    "zimmers.net C64 editors archive listing (https://www.zimmers.net/anonftp/pub/cbm/c64/audio/editors/index.html) and its documentation file (https://www.zimmers.net/anonftp/pub/cbm/c64/audio/editors/Megasound.txt) — user-facing controls, BMX Kidz endpart-music note, and the Sami Saarnio attribution correction; also lists 'Megasound.lnx.gz' as a disk-image binary, NOT source code",
    "lemon64.com/game/bmx-kidz and mobygames.com/person/255634/jori-olkkonen — secondary confirmation of Jori Olkkonen's BMX Kidz (1987, Firebird) high-score-music credit",
    "cadaver.github.io/rants/music.html — independent confirmation Jori Olkkonen (Yip) published music-routine articles in C-lehti during 1987",
    "Local dataset: 78 files tagged Yip_MegaSound across 7 composers (data/composers/*.json) — verified count: agemixer 10, deadman 3, flotsam 31, havoc 4, jori-olkkonen 2, nutcase 26, yip 2 = 78; ranked #3 uncarded family by file count in knowledge/COVERAGE.md at time of writing"
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

A real usage-documentation text file was located
(`zimmers.net/.../audio/editors/Megasound.txt`), which resolves two open
questions from the initial research pass. First, the 78-file composer
concentration (Nutcase/Sami Saarnio at 26 files) is explained directly: the
doc states the disk's music is "by Sami 'Nutcase' Saarnio, NOT by Yip",
correcting an early HVSC mis-attribution — Nutcase isn't a third-party
adopter so much as the original composer on the reference disk. Second, the
doc says this editor (or a precursor) was used for "the endpart music for
BMX kids on C64" — a real 1987 Firebird release (main game music by Rob
Hubbard, high-score screen by Jori Olkkonen/Yip) — which plausibly explains
the previously-unresolved 1987-vs-1988 release-year discrepancy between
DeepSID's cached `start_year` and CSDb's release date.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this was a magazine-published
tool (a real disk-image binary was located on zimmers.net, `Megasound.lnx.gz`
— still no source/listing text, so treat as closed/binary until one
surfaces); an alternate CSDb download bundles "the packer and relocator",
hinting the tool's output needs external packing but with no further detail
found; the composer spread (7 composers, author a small minority) reflects
genuine third-party use, but is now known to include at least one case
(Nutcase/Sami Saarnio) where the "third party" was actually the disk's
credited composer, per a located documentation text; and the tool's earliest
known real-world use (BMX Kidz, 1987) predates its June 1988 magazine
publication by about a year.

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

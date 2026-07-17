# Sidplayer (COMPUTE!'s SidPlayer)

```json
{
  "id": "sidplayer",
  "name": "Sidplayer (COMPUTE!'s SidPlayer)",
  "aliases": ["Sidplayer"],
  "authors": ["Craig Chamberlain", "Harry Bratt"],
  "released": "1985 (original, book type-in listing); 1986 (Enhanced Sidplayer, book+disk)",
  "status": "in-progress",
  "platform": "Native C64 tool. Distributed as BASIC+machine-language type-in listings in a COMPUTE! Books publication (1985), then as a full assembly-language editor + relocatable player on disk (\"Enhanced Sidplayer\", 1986). Commercial/magazine product, not a demoscene tool.",
  "csdb_release": 33248,

  "memory": {
    "load_address": "Song/voice data loads at $0900 (SIDTUNE_MUS_DATA_ADDR, libsidplayfp MUS.cpp). The player driver itself carries an o65 header, but libsidplayfp's `installPlayer()` does NOT relocate it — it reads the driver's own encoded load address directly from the o65 header (`dest = endian_16(player1[1], player1[0])`) and copies it there verbatim with a plain `fillRam`, no `reloc65` pass. That native address is $E000 for the single-SID driver (`sidplayer1.a65`) and $F000 for the dual-SID driver (`sidplayer2.a65`, per its own `.word $f000`). $EC60/$FC90 (below, under `entry.init`) are NOT install/base addresses — they are the init entry points ($E000+$C60 / $F000+$C90) inside that already-installed driver. An earlier version of this card conflated the two.",
    "zero_page": "TODO: not documented by the Tier-2 sources found; would require reading the embedded 6502 disassembly (see Disassembly notes).",
    "layout": "File format (.mus/.str): 2-byte load address + three 2-byte length fields (voice 1/2/3), then voice-1 data, voice-2 data, voice-3 data (three independent per-voice event streams, not a shared pattern+order-list), each terminated by a halt command $014F, followed by PETSCII credit-text lines. Source: libsidplayfp `src/sidtune/MUS.cpp` (`detect()`, `tryLoad()`)."
  },
  "entry": {
    "init": "$EC60 (single SID) / $FC90 (dual SID) — per libsidplayfp's `MUS::setPlayerAddress()`, and consistent with the embedded `sidplayer1.a65`/`sidplayer2.a65` disassembly's own `lec60`/`lfc90` labels at the driver's native install address ($E000/$F000) plus this offset.",
    "play": "$EC80 (single SID) / $FC96 (dual SID) — same source. IRQ-play-vector check: `$ec80` in `sidplayer1.a65` is a real gated play entry (self-modified enable flag, then a jump to the actual dispatcher), not a PSID play-vector stub mistaken for the real routine."
  },
  "speed": "CIA Timer-A driven (libsidplayfp forces `SidTuneInfo::SPEED_CIA_1A` on every subtune and rejects the tune if any subtune claims otherwise) — not raster/VBI driven. Multispeed model beyond this: TODO.",

  "data_format": {
    "order_list": "TODO / not applicable in the classic tracker sense — see `memory.layout`: three continuous per-voice event streams, no separate order list found in the sources reviewed.",
    "patterns": "TODO: per-voice event/command stream format (note+duration+effect encoding) not documented in the Tier-2 sources found; would need the disassembly.",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: command-byte layout not documented publicly. Compute!'s Gazette's retrospective names portamento and vibrato as supported effects but does not give the byte encoding.",
    "commands": {
      "portamento": "Named effect (note-sliding), confirmed by Compute!'s Gazette retrospective article; byte encoding TODO.",
      "vibrato": "Named effect, same source; byte encoding TODO."
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SOURCE CAVEAT (same pattern as master-composer.md): the SIDId `reference`/Tier-1 CSDb id 33248 is NOT the original COMPUTE! product — it resolves to 'Enhanced SidPlayer' (1987), a Red Sector Inc. release with music by 'Dru' (SID used: 'Chickin' by Rodger Andrew). Treat it as a scene showcase release built with the tool, not the tool's own release entry.",
    "Reciprocal lineage note from knowledge/players/master-composer.md: 'By ~1986 (USA) [Master Composer] was superseded by Sidplayer — market succession, NOT a code-derivation claim.' No `edges` asserted here for the same reason that card gives: it is a market-succession statement, not evidence of shared code.",
    "Predecessor context (not a SID-player edge, different chip/platform so not asserted in `edges`): sidplayer.org states Chamberlain and Bratt built the C64 Sidplayer as an adaptation-in-spirit of their earlier Atari 'Pokey Player' (1982), but that Chamberlain wrote essentially new software for the SID chip rather than a direct port.",
    "Historically very popular OUTSIDE the demoscene/HVSC-collection culture this project mostly indexes: sidplayer.org/Compute!'s Gazette both describe it as the most popular US C64 music system of its day via Q-Link/CompuServe/Delphi song libraries (~5,000+ songs on Q-Link by 1989) — yet only 12 files across 4 composer entries in this project's local dataset carry the 'Sidplayer' Player-ID tag (rank #14 of uncarded families, knowledge/COVERAGE.md). The HVSC-derived composer corpus this project draws from is scene-curated and evidently captured very little of that separate online-service ecosystem.",
    "Composer concentration in the local dataset: Red_Kimmel_Jeroen (5 files), Jori Olkkonen (3 files) — who also appears as a separate 'Yip' composer entry with the SAME 3 filenames/csdb_ids, suggesting these are two DeepSID composer-profile entries for one real person rather than independent users — and Neil Baldwin (1 file; he has his own dedicated card, knowledge/players/neil-baldwin.md, for his OWN hand-coded routine on his other files). Effectively 2-3 distinct real people, consistent with a niche/personal-use tail rather than a widely-adopted-in-the-scene tool.",
    "The public source used for the Tier-3 facts above (libsidplayfp) embeds a disassembly of the ORIGINAL 1986 'Enhanced Sidplayer' binary (`src/sidtune/sidplayer1.a65`/`sidplayer2.a65`, header comment: 'Compute's Gazette sidplayer sources, disassembled with dxa ... C64 \"Enhanced Sidplayer\" by Craig Chamberlain, Copyright 1986 COMPUTE!, extracted from CGSC/00_Commodore64/MusicSys.d64/SID PLAYER.64') for playback-compatibility purposes. libsidplayfp itself is GPL-2.0-or-later, but that only covers libsidplayfp's own code around it — the embedded disassembly retains the original 1986 COMPUTE! copyright notice. Do not describe the original Chamberlain/COMPUTE! product itself as 'open source': what's public is a third-party disassembly kept for compatibility, not an author-released source."
  ],
  "sources": [
    "SIDId (data/sidid.json byTag.Sidplayer): author Craig Chamberlain, released 1985, reference csdb.dk/release/?id=33248, comment on the book origin.",
    "sidplayer.org (dedicated history site, authors/versions/timeline): https://sidplayer.org/ and https://www.sidplayer.org/history_promotional.html",
    "Compute!'s Gazette retrospective + creator interview (authors, dates, effects, distribution reach): https://www.computesgazette.com/a-deep-dive-into-the-c64s-sound-the-ultimate-guide-to-sidplayer-and-an-interview-with-its-creator/",
    "CSDb release (flagged as a 1987 scene showcase, NOT the original COMPUTE! product): https://csdb.dk/release/?id=33248",
    "libsidplayfp source (public repo, GPL-2.0-or-later) — the primary Tier-3 citation: https://github.com/libsidplayfp/libsidplayfp/blob/master/src/sidtune/MUS.cpp and the embedded disassembly https://github.com/libsidplayfp/libsidplayfp/blob/master/src/sidtune/sidplayer1.a65",
    "Local dataset: 12 files tagged Sidplayer across 4 composer entries — Red_Kimmel_Jeroen, Jori Olkkonen, Yip, Neil Baldwin; aggregated from data/composers/*.json.",
    "knowledge/players/master-composer.md (reciprocal market-succession note, quoted above)."
  ]
}
```

## Overview

Sidplayer (properly "COMPUTE!'s SidPlayer") is one of the earliest and, in its
day, most widely-distributed C64 music systems in the US — written by **Craig
Chamberlain** (machine-language playback) with **Harry Bratt** (BASIC editor),
first published as type-in listings in COMPUTE!'s book *All About the
Commodore 64, Volume Two* (1985), then as a fully assembly-language "Enhanced
Sidplayer" editor+player on disk in 1986. It was a commercial magazine/book
product, not a demoscene tool, and its main distribution channel was song
libraries on early online services (Q-Link, CompuServe, Delphi) rather than
cracking-scene circulation — which likely explains why it is comparatively
rare in this project's HVSC-derived, scene-curated dataset: only 12 files
across 2-3 real composers carry the "Sidplayer" Player-ID tag here, despite
its historic popularity. The primary source for the runtime facts in this
card is not the original COMPUTE! release itself (closed/commercial, no
author-released source found) but a third-party disassembly of the original
1986 binary that the open-source **libsidplayfp** library embeds for
`.mus`/`.str` playback compatibility.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: the Tier-1 CSDb reference id is a
1987 scene showcase release, not the original COMPUTE! product (same pattern
as `master-composer.md`); the market-succession claim from that card's own
research ("Master Composer superseded by Sidplayer ~1986") is explicitly
*not* a code-derivation claim, so no `edges` are asserted here; and the
runtime facts below come from a disassembly *embedded in* a GPL project, not
from an open-sourced original — "public" here does not mean the original tool
was released under any licence.

## Disassembly notes

No original disassembly was performed for this card (Tier 1+2 research
only). A full, unannotated `dxa`-generated 6502 disassembly of the original
1986 "Enhanced Sidplayer" binary already exists publicly and could seed a real
Tier-3 pass: `src/sidtune/sidplayer1.a65` / `sidplayer2.a65` in
[libsidplayfp](https://github.com/libsidplayfp/libsidplayfp/tree/master/src/sidtune).
`MUS.cpp` in the same directory plainly documents the `.mus`/`.str` container
format (load address, three length-prefixed per-voice streams, halt command,
PETSCII credit trailer) and the fixed install/entry addresses libsidplayfp
uses when it re-synthesizes a PSID from raw `.mus`/`.str` data — those facts
are recorded above with citation, per this project's Tier-3 boundary rule
("a public source plainly documents a runtime fact"). Zero-page usage and the
effect command-byte encoding were **not** pulled from the raw `.a65` listing —
doing so would be real disassembly analysis, out of scope for this pass —
and remain `TODO` for a future verification pass through `sidm2-siddump`.

## Verification

**Not verified — `status: in-progress`.** Identity/provenance (authors, dates,
platform, distribution history) are Tier-2 web-sourced (sidplayer.org,
Compute!'s Gazette). A handful of Tier-3 facts (data-file layout, load
address, init/play entry points, CIA-driven speed model) are recorded because
they are plainly stated in libsidplayfp's public source, not because they
were independently disassembled or traced here. No init/play routine has been
reassembled or run through `sidm2-siddump` — do not promote to `verified`
without doing that against a real `Sidplayer`-tagged `.sid` from this
project's dataset.

## Sources

See the `sources` array — SIDId, sidplayer.org, Compute!'s Gazette, the CSDb
release (with its scene-showcase caveat), libsidplayfp's public source (the
primary Tier-3 citation), and this project's own local dataset / COVERAGE.md.

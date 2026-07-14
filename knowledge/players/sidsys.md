# SID Systems (Geir Tjelta)

```json
{
  "id": "sidsys",
  "name": "SID Systems (Geir Tjelta)",
  "aliases": ["Geir_Tjelta/SIDSys", "Geir_Tjelta/SIDSys18.4", "Geir_Tjelta/SIDSys18.6", "Geir_Tjelta/SIDSys_1.0", "SIDSys18.4", "SIDSys18.6", "SIDSys_1.0", "Sid Systems"],
  "authors": ["Geir Tjelta (GT)"],
  "released": "1990 (Moz(IC)art)",
  "status": "in-progress",
  "platform": "Native C64 music editor + player. Closed (disk images only).",
  "csdb_release": 33644,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Canonical name 'Sid Systems' (abbrev. SIDSys), by Geir Tjelta of Moz(IC)art / Offence, 1990.",
    "TAG MAPPING: the '18.x' suffixes are the internal PLAYER/replay version, NOT the editor version. SIDId splits the tag into SIDSys18.4 and SIDSys18.6 — both mapping to the SAME editor release 'Sid Systems V4.1' (CSDb 33644), differentiated only by 'Uses player version 18.4/18.6'. SIDSys_1.0 maps to 'Sid Systems V1' (CSDb 108477). So editor version = V1/V4.1; player version = 18.x.",
    "GT LINEAGE: SID Systems (1990) is Geir Tjelta's EARLIEST editor — it predates both SID Duzz'It (SDI, 1992, GT + Gallefoss; carded as sidduzzit) and the separately-named GT's Musiceditor (1992). All three are distinct GT editors. Whether SDI's replay descends from the SIDSys 18.x player is PLAUSIBLE but UNDOCUMENTED — noted, not wired as an edge.",
    "Replay internals all UNKNOWN — TODO. 136 files."
  ],
  "sources": [
    "sidid.nfo (names, author, year, player-version comments, CSDb refs): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb 'Sid Systems V4.1' (33644) and 'Sid Systems V1' (108477): https://csdb.dk/release/?id=33644 ; https://csdb.dk/release/?id=108477",
    "CSDb GT's Musiceditor (33645) & SDI (7175) — to disambiguate the three GT tools: https://csdb.dk/release/?id=33645 ; https://csdb.dk/release/?id=7175",
    "sidid:Geir_Tjelta/SIDSys (Geir Tjelta, 1990)",
    "Local dataset: 136 files tagged Geir_Tjelta/SIDSys (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

SID Systems (SIDSys) is **Geir Tjelta's earliest C64 music editor** (1990,
Moz(IC)art), predating his later [SID Duzz'It](sidduzzit.md) (1992) and the
separate GT's Musiceditor (1992). 136 files here. Its tag suffixes (18.4/18.6)
denote the internal player-routine version, not the editor version.

## Quirks & gotchas

See the `quirks` array — the load-bearing items are the **tag mapping** (18.x =
player version, both under editor V4.1) and the **GT tool chronology** (SIDSys
is first; a plausible-but-undocumented SIDSys-player→SDI lineage is noted, not
asserted). Internals `TODO`.

## Disassembly notes

None; internals undocumented. Disassemble a SIDSys `.sid` to recover them — and
to test the plausible SIDSys→SDI player lineage against the [sidduzzit](sidduzzit.md)
card.

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC Geir_Tjelta/SIDSys `.sid` (load $7400, init $7F18, play $7401, 390 register writes / 50 frames) — the replay runs; entry addresses are per-file. Author, year, the tag-mapping correction,
and GT tool chronology are SIDId/CSDb-sourced; all runtime fields `TODO`.

## Sources

See the `sources` array — SIDId (the tag mapping) and the CSDb releases for the
three GT tools.

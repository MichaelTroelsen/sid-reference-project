# TFMX/MasterComposer (Mastercomposer V1.0)

<!--
  Player-ID / SIDId tag: "TFMX/MasterComposer" — a THIRD-PARTY demoscene
  editor for TFMX-style music on the C64, distinct from Chris Hülsbeck's own
  private "TFMX" in-game driver (see tfmx.md) and from the sibling
  "TFMX/TimeComposer" tag (Time-Composer V4.0, 1990, see tfmx-timecomposer.md).
  Both sibling cards flagged this tag as an uncarded family pending its own
  research pass; this is that pass.
-->

```json
{
  "id": "tfmx-mastercomposer",
  "name": "TFMX/MasterComposer (Mastercomposer V1.0)",
  "aliases": ["TFMX/MasterComposer"],
  "authors": ["Playboy", "Sir Tippitt"],
  "released": "1990 Bierfront",
  "status": "stub",
  "platform": "Native C64 6502 music editor/tool, released by the group Bierfront as a replacement TFMX-style editor since Chris Hülsbeck's own TFMX Editor was never released to the public (see tfmx.md and tfmx-timecomposer.md for the same pattern with the later Time-Composer V4.0).",
  "csdb_release": 4298,

  "memory": {
    "load_address": "TODO (no public disassembly found)",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO — no verified frame/IRQ model found",

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
    "derives_from": ["tfmx"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "REAL LINEAGE EDGE (the point of this card): SIDId's sidid.nfo entry for 'TFMX/MasterComposer' carries the COMMENT 'Editor that is based on the player of /MUSICIANS/H/Huelsbeck_Chris/Starball.sid' — Starball is the C64 game where Chris Hülsbeck's own private TFMX driver was FIRST used (per tfmx.md's own research, citing VGMPF). This is direct, citable evidence that Mastercomposer's player was built by reverse-engineering/adapting Hülsbeck's TFMX driver as heard in Starball — hence the `derives_from: ['tfmx']` edge asserted above, sourced to this exact SIDId comment (not inferred from the name alone).",
    "AUTHORSHIP: CSDb release 4298 (Bierfront, 1990) credits Code: Playboy and Sir Tippitt; Music: MC (of Dutch USA-Team) and Playboy; Graphics: Powell; Text: Sir Tippitt. SIDId's author field ('Playboy & Sir Tippitt') matches the CSDb code credit exactly. Note the cross-scene collaboration: MC is Marco Swagerman of The Dutch USA-Team, already documented elsewhere in this project as author of Music Assembler, RockMon, and Pro-Drum (see music-assembler.md, rockmonitor.md, dutch-usa-team-prodrum.md) — but MC's credit here is for MUSIC on the Mastercomposer release itself, not code, so no player/routine-sharing edge is asserted between Mastercomposer and MC's own DUSAT tools from this alone.",
    "SCOPE: distinct from the sibling tag 'TFMX/TimeComposer' (Time-Composer V4.0, 1990, Warriors of Time, coder Rhodan — see tfmx-timecomposer.md), which followed Mastercomposer as a second, independent replacement editor. Both exist because Hülsbeck's own TFMX Editor was never released publicly (per VGMPF, cited in tfmx.md).",
    "Composer concentration: all 3 locally-tagged files are by a single composer, Reason (Zsolt Harsona, Hungary, CSDb scener 10898, handles include a former alias '<del>Andrew Smith</del>') — none of the tool's own credited authors (Playboy, Sir Tippitt) appear as composers in this dataset's tagged files. A small, single-user footprint in this collection, though the tool itself was a public Bierfront release, not a personal routine.",
    "Not one of DeepSID's curated 129 `players.json` entries — this card is seeded from the SIDId `sidid.nfo` fingerprint plus the CSDb release page, with zero DeepSID spec data to check against.",
    "No public source or disassembly of the Mastercomposer editor/player was found. Every runtime field below is honestly TODO."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag.'TFMX/MasterComposer' — author 'Playboy & Sir Tippitt', released '1990 Bierfront', reference https://csdb.dk/release/?id=4298, comment 'Editor that is based on the player of /MUSICIANS/H/Huelsbeck_Chris/Starball.sid'",
    "CSDb release 4298 'Mastercomposer V1.0' (Bierfront, 1990; Code: Playboy and Sir Tippitt; Music: MC and Playboy; Graphics: Powell; Text: Sir Tippitt): https://csdb.dk/release/?id=4298",
    "Local dataset: 3 files tagged 'TFMX/MasterComposer', all by composer Reason (Zsolt Harsona) — data/composers/reason.json",
    "data/composers/reason.json (HVSC profile: real name Zsolt Harsona, Hungary, CSDb scener 10898)",
    "Sibling card knowledge/players/tfmx.md — establishes the TFMX/Starball driver history and first flagged this tag as an uncarded scope-split sibling",
    "Sibling card knowledge/players/tfmx-timecomposer.md — the other third-party TFMX-style editor (Time-Composer V4.0), same pattern",
    "VGMPF, 'TFMX Editor' (Hülsbeck's own editor never released; demoscene built Mastercomposer then Timecomposer as replacements): https://www.vgmpf.com/Wiki/index.php?title=TFMX_Editor",
    "Sibling cards for the MC/DUSAT music-credit connection (context only, no routine-sharing edge asserted): knowledge/players/music-assembler.md, knowledge/players/rockmonitor.md, knowledge/players/dutch-usa-team-prodrum.md"
  ]
}
```

## Overview

`TFMX/MasterComposer` is the SIDId tag for **Mastercomposer V1.0**, a 1990
third-party C64 music editor released by the group **Bierfront** (coded by
**Playboy** and **Sir Tippitt**), built as a demoscene replacement for Chris
Hülsbeck's own private TFMX driver — whose real editor was never released
publicly (see `tfmx.md`). SIDId's own entry states this explicitly: its
comment reads "Editor that is based on the player of
`/MUSICIANS/H/Huelsbeck_Chris/Starball.sid`" — Starball being the very game
where Hülsbeck's TFMX driver first debuted. That is direct, citable lineage
evidence, recorded here as a `derives_from: ["tfmx"]` edge. Mastercomposer
was followed the same year by a second independent replacement editor,
Time-Composer V4.0 (the sibling `TFMX/TimeComposer` tag, already carded). In
this dataset, all 3 tagged files are by a single composer, Reason (Zsolt
Harsona, Hungary) — none of the tool's own credited authors appear as users
here.

## Quirks & gotchas

See the `quirks` array. The load-bearing finding is the **explicit SIDId
lineage comment naming Starball.sid** — the only tag in this chunk with a
directly citable `derives_from` edge, rather than a name-similarity guess.
Also notable: the tool's music credit for "MC (of Dutch USA-Team)" connects
by name (not by code) to three other DUSAT tools already carded elsewhere in
this project — flagged as context, not asserted as a routine-sharing edge.

## Disassembly notes

None — no public source or disassembly of the Mastercomposer editor/player
was found during this research pass.

## Verification

**Not verified — `status: stub`.** All facts are SIDId/CSDb-sourced (Tier 1
+ Tier 2 only); every Tier 3 runtime field (memory map, entry points, speed
model, data format, effect encoding) is honestly `TODO` pending a real
disassembly. The `derives_from` edge itself is a Tier 2 provenance claim
(SIDId's own comment), not a disassembly-confirmed code relationship.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the CSDb release page
for Mastercomposer V1.0, the local composer profile for Reason, the sibling
`tfmx.md`/`tfmx-timecomposer.md` cards, VGMPF's TFMX Editor article, and the
three DUSAT-team sibling cards referenced for the music-credit connection.

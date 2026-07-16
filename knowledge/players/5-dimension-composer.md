# 5 Dimension Composer

```json
{
  "id": "5-dimension-composer",
  "name": "5 Dimension Composer",
  "aliases": ["5_Dimension"],
  "authors": ["Pleite Geier"],
  "released": "1990",
  "status": "stub",
  "platform": "Native C64 tool — a scene-released music editor distributed as a tape image (.t64), not a scene-published/documented tracker with a manual. No public source code or format documentation was found.",
  "csdb_release": 122330,

  "memory": {
    "load_address": "TODO: no public source/disassembly located",
    "zero_page": "DeepSID players.json field 'zero_pages': \"4 bytes ($F7-$FA)\" — cited as-is, not independently verified via disassembly",
    "layout": "TODO: order list / patterns / table addresses — not documented publicly"
  },
  "entry": {
    "init": "TODO: per-file (would need a PSID header read or disassembly)",
    "play": "TODO: per-file (PSID header); DeepSID players.json gives an aggregate play-routine cost of 'Approx 46-52 rasterlines [SD]' but no address"
  },
  "speed": "TODO: no public source/disassembly located",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public source/disassembly located",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Composer concentration in this dataset (HVSC MUSICIANS\\ tree only, per data/composers/*.json): 40 files across only 6 composers, heavily dominated by one — A-Man 25 (62.5%), Surtax 9, Sid_United_Artists 3, Compod 1, Goesta Feiweier 1, MHD 1. This spread (one dominant user, small total) reads as a small-scene tool that saw limited adoption beyond its immediate circle, not a widely-published tracker.",
    "DeepSID's own curated players.json description hedges the tool's origin: \"Rumor has it this editor may be related to SoundMaker 3. See SoundMaker IV for a conspicuously familiar interface.\" A CSDb release-page comment by iAN CooG (6 Oct 2013) goes further, claiming \"5dim seems related to Soundmaker3/United Artists due to common code\" and citing that A-Man used both editors (e.g. Acid_Feelin.sid tagged A-Man/5_Dimension vs Acieed_Beat.sid tagged SoundMaker_V3/UA). SIDId's own database independently credits the SAME author, 'Pleite Geier', for both the '5_Dimension' tag and the whole 'SoundMaker'/'(SoundMaker_V3)'/'(SoundMaker_V4)' tag family (released via 'United Artists') — a real corroborating data point. Despite this, no `edges` entry is asserted here: the CSDb claim is explicitly hedged ('rumor', 'seems related'), no SoundMaker card exists yet in this knowledge base to link to, and neither claim has been checked against an actual disassembly/binary diff. Worth revisiting once a `soundmaker` card exists.",
    "A second CSDb comment (by 'Fred', same thread, 6 Oct 2013) notes A-Man was already using this player/editor in 1989 — a year before the 1990 CSDb release date credited to Pleite Geier — and asks whether A-Man (rather than Pleite Geier) might actually be the editor's author. Left unresolved; recorded here only as an open provenance question, not a fact.",
    "Distributed as a single scene release (a .t64 tape image on CSDb, 348 downloads at last check) rather than through any documented publishing channel; no manual, format spec, or Codebase64 article was located. Treat as effectively freeware/scene-ware — no explicit licence statement found anywhere searched."
  ],
  "sources": [
    "sidid:5_Dimension (name '5 Dimension Composer', author Pleite Geier, released '1990 Pleite Geier', reference https://csdb.dk/release/?id=122330) — data/sidid.json",
    "sidid:SoundMaker / (SoundMaker_V3) / (SoundMaker_V4) (author Pleite Geier, released 'United Artists') — data/sidid.json, cited only for the same-author corroboration noted in quirks, not as an asserted edge",
    "DeepSID players.json curated entry '5 Dimension Composer' (developer Pleite Geier, start_year 1990, csdb_id 122330, platform 'Native / C64 emulator', zero_pages '4 bytes ($F7-$FA)', cpu_time 'Approx 46-52 rasterlines [SD]', description quoting the SoundMaker-relation rumor) — data/players.json",
    "Local dataset: 40 files tagged '5_Dimension' across 6 composers (verified by aggregation of data/composers/*.json)",
    "CSDb release '5 Dimension Composer' (Pleite Geier, 1990), including credits (code: Pleite Geier; music: Misfit; graphics: Sextone) and user comments discussing the SoundMaker relation and A-Man's early (1989) use of the player: https://csdb.dk/release/?id=122330"
  ]
}
```

## Overview

5 Dimension Composer is a native C64 music editor released by Pleite Geier in
1990, distributed as a single scene release (a .t64 tape image) rather than
through any documented commercial or tracker-community channel. In this
project's local HVSC-derived dataset it covers only 40 files across 6
composers, and usage is heavily
concentrated in one composer, A-Man (25 of 40 files, 62.5%) — a pattern
consistent with a small-scene tool that circulated mainly within its author's
immediate circle rather than a widely-adopted published tracker. DeepSID's own
description flags an unresolved provenance question: the tool may share code
with Pleite Geier's other editor, SoundMaker (versions 3/4, released via
United Artists) — SIDId's database independently credits the same author to
both tag families, and a CSDb commenter points to specific files by the same
composer (A-Man) tagged under each player as circumstantial support — but this
remains a hedged claim, not confirmed lineage.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a **small, single-
composer-dominated tool** (A-Man alone accounts for nearly two-thirds of its
usage in this dataset); its relationship to Pleite Geier's own SoundMaker
editor family is a **repeatedly-hedged rumor** (DeepSID's description, a CSDb
comment) backed by one real corroborating fact (same author credited by
SIDId for both) but not by any disassembly comparison, so no `edges` entry
was asserted; and there's an open, unresolved question on CSDb about whether
A-Man (who was using the player as early as 1989, a year before the credited
1990 release) might be the real author rather than Pleite Geier.

## Disassembly notes

None. No public source or disassembly of the 5 Dimension Composer player/
editor was located. A future pass would need to disassemble a representative
`5_Dimension`-tagged `.sid` (e.g. one of A-Man's, from its PSID header) and
trace it through `sidm2-siddump` — the only route to real memory-map/format
facts, and also the only way to actually test the SoundMaker-relation claim
(a register-write diff between a 5_Dimension file and a SoundMaker_V3/V4 file
by the same composer would be direct evidence either way).

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release year, CSDb release, local usage stats, the hedged SoundMaker-relation
claim) are confirmed, from SIDId, DeepSID's curated `players.json`, CSDb, and
this project's own composer data. Every Tier 3 runtime field is `TODO` except
two DeepSID-sourced approximate figures (zero-page footprint, play-routine
raster cost), which are cited but not independently verified — an honest gap
rather than a guessed memory map.

## Sources

See the `sources` array — SIDId's `sidid.nfo` (both the `5_Dimension` and
`SoundMaker` tag entries), DeepSID's curated `players.json` entry, this
project's local composer-file aggregate (`data/composers/*.json`,
`knowledge/COVERAGE.md`), and the CSDb release page for "5 Dimension
Composer" (id 122330), including its credits and user comments.

# SYNC (SYNdrom Composer)

```json
{
  "id": "sync",
  "name": "SYNC (SYNdrom Composer)",
  "aliases": ["SynC"],
  "authors": ["Matthias Hartung (The Syndrom, of Crest / The Imperium Arts)"],
  "released": "1998 (V1.02); V1.14 later revision, 1998-1999",
  "status": "stub",
  "platform": "Native C64 editor (runs on real hardware or a C64 emulator). Closed-source freeware.",
  "csdb_release": 89184,

  "memory": {
    "load_address": "TODO: not documented publicly; no disassembly done here",
    "zero_page": "DeepSID players.json field 'zero_pages': \"Usually none; sometimes $02\" — cited as-is, not independently verified",
    "layout": "TODO: no public source/disassembly of the runtime data layout"
  },
  "entry": {
    "init": "TODO: per-file (PSID header); not traced here",
    "play": "TODO: per-file (PSID header); not traced here"
  },
  "speed": "DeepSID players.json 'speeds': \"1x to 4x + 6x (up to 9x in updated versions)\" — multispeed support improved in v1.14. Runtime mechanism (CIA vs raster) not documented publicly.",

  "data_format": {
    "order_list": "DeepSID players.json 'track_system': \"DMC; Order list with one sector shown\" — described as DMC-style (3 order lists + 1 sector visible in the editor).",
    "patterns": "DeepSID players.json 'patterns': \"96 sectors; each up to 256 rows\".",
    "instruments": "DeepSID players.json 'instruments': \"224\".",
    "wavetable": "DeepSID players.json 'arpeggio': \"Wave table\" (arpeggio implemented via wave table).",
    "pulsetable": "DeepSID players.json 'pulsating': \"Programmable\" — no table layout documented.",
    "filtertable": "DeepSID players.json 'filtering': \"Programmable\" — no table layout documented."
  },
  "effects": {
    "encoding": "TODO: no public documentation of the command-byte encoding. DeepSID players.json notes 'track_cmds': \"Bytes in vertical order list\" and 'vibrato': \"Yes; using commands\" — presence confirmed, byte layout not.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "DeepSID's own curated description states design lineage directly: \"SYNC ... was inspired by DMC v5.x\" (data/players.json 'SYNC v1.x' entry), and its 'track_system' field literally reads \"DMC; Order list with one sector shown\". This is a stated design inspiration in a citable source, not a confirmed shared-code claim — no source/disassembly comparison has been done — so it is recorded here in prose only and NOT as a `derives_from` edge in the JSON block above; a machine-readable graph edge would assert more derivation than 'inspired by' supports.",
    "Name history: SIDId's comment says \"The first releases of this editor were released under the name '64'er Music Editor'\" before being renamed SYNC/SYNdrom Composer (data/sidid.json, byTag.SynC.comment).",
    "SIDId's tag is 'SynC' (mixed case); DeepSID's players.json title is 'SYNC v1.x'. Both refer to the same tool; this card's alias list uses the raw SIDId/COVERAGE tag 'SynC' since that's the literal dataset signature name.",
    "Cross-reference: the dmc.md card's quirks note \"A separate player 'SYNC' is sometimes mislabeled 'DMC V6'\" in some online sources — i.e. SYNC is NOT the unreleased Brian/DMC-V6 build, despite the DMC-inspired design and the naming confusion. Treat SYNC and DMC as separate tools by separate authors (Matthias Hartung vs Brian/Graffity) that merely share a design lineage.",
    "There appear to be two distinct CSDb release entries for the same tool: DeepSID's players.json points at csdb_id 89184 (\"SYNC V1.02/V1.14\", released by The Imperium Arts, credited to The Syndrom of Crest/The Imperium Arts), while SIDId's 'reference' field points at csdb.dk/release/?id=7850 (same title \"SYNC V1.02/V1.14\", credited to The Syndrom of Crest/Pretzel Logic/The Imperium Arts). Both were fetched and describe the same editor; this card uses 89184 (DeepSID's canonical csdb_release) but records both in Sources.",
    "Composer concentration: 107 files in the local dataset span only 14 composers, and the top two — 'Syndrom The' (28 files, ~26%) and 'Stryyker' (24 files, ~22%) — make up nearly half the total; the author himself is the single largest user. This reads as a small demoscene-group tool (Crest / The Imperium Arts) that a handful of scene composers adopted, not a widely-published mainstream tracker (aggregated from data/composers/*.json; see knowledge/COVERAGE.md rank #10, 107 files).",
    "source_code and docs are both explicitly \"No\" in DeepSID's players.json — no public source or manual has been found; every runtime field below is honestly TODO for that reason."
  ],
  "sources": [
    "DeepSID players.json (local cache, data/players.json, 'SYNC v1.x' entry) — authorship, years, platform, speeds, instrument/pattern counts, zero-page/CPU-time notes, source_code=No/docs=No",
    "SIDId (data/sidid.json byTag.SynC) — name 'SYNdrom Composer', author 'Matthias Hartung (The Syndrom)', reference csdb.dk/release/?id=7850, 64'er Music Editor naming history",
    "CSDb release (DeepSID's csdb_release): https://csdb.dk/release/?id=89184 (\"SYNC V1.02/V1.14\", The Imperium Arts, 1998, code+music by The Syndrom of Crest/The Imperium Arts)",
    "CSDb release (SIDId's reference, same tool): https://csdb.dk/release/?id=7850 (\"SYNC V1.02/V1.14\", credited to The Syndrom of Crest/Pretzel Logic/The Imperium Arts; notes the '64'er Music Editor' earlier name)",
    "knowledge/players/dmc.md — cross-reference for the DMC design-inspiration claim and the 'SYNC sometimes mislabeled DMC V6' naming confusion",
    "Local dataset: 107 files tagged SynC across 14 composers (see knowledge/COVERAGE.md, rank #10)"
  ]
}
```

## Overview

SYNC (full name "SYNdrom Composer", raw tag `SynC`) is a native C64 music
editor by Matthias Hartung, using the handle **The Syndrom** of the groups
Crest / The Imperium Arts. First released in 1998 (V1.02), with an improved
V1.14 revision shortly after; earlier pre-rename builds circulated as the
"64'er Music Editor". It is freeware, closed-source, with no public
documentation. DeepSID's own curated entry states the editor "was inspired by
DMC v5.x" and describes its order-list/sector layout as "DMC; Order list with
one sector shown" — a stated (if vague) design lineage to Brian/Graffity's DMC,
carded separately at [dmc](dmc.md). In the local dataset it ranks #10 among
uncarded player families (107 files), concentrated in a small circle of 14
composers headed by the author himself and by "Stryyker" — consistent with a
scene-group tool (Crest/TIA) rather than a widely-adopted mainstream tracker.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) the DMC-inspiration
claim comes straight from DeepSID's own players.json text and its
`track_system` field literally naming "DMC" — real evidence, but "inspired by"
is weaker than a source-code derivation claim, so this card records it as
prose only and does NOT assert a `derives_from` edge in the JSON block (a
graph edge would claim more than the evidence supports); (2) SYNC is
sometimes confused online with an unreleased "DMC V6" — the dmc.md card
already flags this mislabeling — but the two are separate tools by separate
authors that merely share a design lineage. Also note two different CSDb
release IDs (89184 vs 7850) describe what appears to be the same V1.02/V1.14
release, credited to slightly different group lists (Crest/TIA vs
Crest/Pretzel Logic/TIA) — both recorded rather than picking one arbitrarily.

## Disassembly notes

None done here. No public source or format documentation was found
(`source_code`/`docs` are both "No" in DeepSID's players.json), so a
representative SYNC-tagged `.sid`'s init/play (from its PSID header) has not
been disassembled or traced. This would be the only route to real
memory-map/data-format facts.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release year, CSDb release, editor-level feature summary from DeepSID's own
curated description) are confirmed, cited from `data/players.json`,
`data/sidid.json`, and the two matching CSDb release pages. No source or
disassembly exists to verify a runtime memory map, entry points, or effect
encoding against, so every Tier 3 field is honestly `TODO`.

## Sources

See the `sources` array — primarily DeepSID's curated `players.json` entry
(the direct source for the DMC-inspiration claim and every editor-feature
field above), the cached SIDId entry, two CSDb release pages for the same
V1.02/V1.14 tool, and the sibling `dmc.md` card for the cross-reference on
naming confusion.

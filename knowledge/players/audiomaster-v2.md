# Audiomaster 2

```json
{
  "id": "audiomaster-v2",
  "name": "Audiomaster 2",
  "aliases": ["Audiomaster_V2"],
  "authors": ["Ruben Spaans (Scroll)"],
  "released": "1989, Megastyle (Jolly Poppers)",
  "status": "stub",
  "platform": "Native C64 tool, per CSDb — released by the Megastyle group.",
  "csdb_release": 7072,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId and CSDb agree cleanly: SIDId gives author 'Ruben Spaans (Scroll)', released '1989 Megastyle', reference CSDb release 7072. CSDb's release-page HTML (webservice XML omits secondary group credits) confirms the full credit line: 'Code .... Scroll of Jolly Poppers, Megastyle' and 'Music .... Scroll of Jolly Poppers, Megastyle' (group ids 1595 and 473) — i.e. Scroll was credited under both groups for this release. ~980 downloads recorded on CSDb as of this check.",
    "Census of every locally-tagged file (grep across all of data/composers/*.json for the player value, not a sample): exactly 2 files carry 'Audiomaster_V2', both in scroll.json — 'Piece of Cake 2 (part 2)' (csdb_id 19018) and 'Piece of Cake 2 (part 7)' (csdb_id 19046). No other player-tag spelling variant of Audiomaster V2 exists in the dataset.",
    "Each file's own CSDb SID-entry 'Released' field (not a title year, not a UsedIn release's year) independently reads '1989 Megastyle' for both files — confirming the 1989 date at the per-tune level, not just the release-page level. Both were also used in the demo 'Fat Oddvar' (aka 'Piece of Cake 2'), CSDb release 2952, dated January 1990 — that is the demo's release date, not the tunes' own composition date, and is not used for `released` here.",
    "Both locally-tagged files are by the same composer, Scroll (the author) — single-composer concentration in this dataset, despite being a real, named, dated tool release.",
    "Checked for a stated V1→V2 lineage given the naming: CSDb lists 'Audiomaster' (release 7071, also 1989, also Megastyle, also Scroll) as a separate, same-year release. No CSDb text, manual, or credit line was found stating V2 derives from or supersedes V1 — same author/group/year is suggestive but is not, per this project's rules, evidence of an edge. No `derives_from`/`successor_of` edge is asserted."
  ],
  "sources": [
    "SIDId sidid.nfo: https://github.com/cadaver/sidid/blob/master/sidid.nfo (byTag['Audiomaster_V2'])",
    "CSDb release 'Audiomaster 2' (Scroll, 1989, Megastyle/Jolly Poppers), webservice: https://csdb.dk/webservice/?type=release&id=7072 ; HTML (credits incl. Jolly Poppers): https://csdb.dk/release/?id=7072",
    "CSDb SID entries (per-tune Released field): https://csdb.dk/webservice/?type=sid&id=19018 and https://csdb.dk/webservice/?type=sid&id=19046",
    "CSDb release 'Audiomaster' (V1, id 7071) for lineage check: https://csdb.dk/webservice/?type=release&id=7071",
    "Local dataset: 2 files tagged Audiomaster_V2, 1 composer (Scroll) — full census, data/composers/*.json aggregation"
  ]
}
```

## Overview

`Audiomaster_V2` is SIDId's tag for **Audiomaster 2**, a native C64 tool
released in 1989 by the Megastyle group — coded and scored by **Ruben
Spaans**, handle **Scroll**, a member of both Megastyle and Jolly Poppers.
SIDId and CSDb agree cleanly on authorship and date. Both locally-tagged
files ("Piece of Cake 2", parts 2 and 7) are by Scroll himself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) clean SIDId/CSDb agreement, a
genuinely named/dated/grouped release, with the HTML credit line (not the
webservice XML) confirming Scroll was credited under both Jolly Poppers and
Megastyle; (2) full census (not a sample) of every `Audiomaster_V2`-tagged
file confirms exactly 2 files, both independently dated "1989 Megastyle" at
the per-tune level; (3) still single-composer concentration locally despite
real tool status; (4) a same-year, same-author, same-group V1 release
("Audiomaster", id 7071) exists but no source states a lineage — no edge
asserted.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. No public source repo was found (a disk-image/download
exists on CSDb but was not inspected here).

## Verification

Not verified. Seeded from `data/sidid.json`, a full census of
`data/composers/*.json` (all 1,902 composer files grepped for the tag, not a
sample), and the CSDb release/SID webservice + HTML pages. `released` and
`platform` were both already populated on a prior pass and are confirmed
correct by this census and by cross-checking each tagged file's own CSDb
`Released` field. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release 7072, and the local
composer aggregation.

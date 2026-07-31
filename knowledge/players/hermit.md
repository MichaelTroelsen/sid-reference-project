# Hermit (bare tag)

```json
{
  "id": "hermit",
  "name": "Hermit (bare Player-ID tag)",
  "aliases": ["Hermit"],
  "authors": ["Mihály Horváth (Hermit)"],
  "released": "2008-04-07 (CSDb release date of 'Hermit 3SID-Tracker 2008', csdb.dk/release/?id=66065 — see sources)",
  "status": "stub",
  "platform": "Native C64 tool: a tracker/editor for up to 3 simultaneous SID chips ('3SID-Tracker'), coded solely by Hermit, released as a downloadable D64/disk image (3SIDTRK.ZIP) with a companion 1-SID variant (HMT1SID.ZIP) added later — see sources",
  "csdb_release": 66065,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

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
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "CENSUS of all 6 locally bare-'Hermit'-tagged files (data/composers/hermit.json, cross-checked against CSDb's `type=sid` webservice): '3SID Tracker Demo 1' (csdb sid id 51297), 'Demo 2' (51296), 'Demo 3' (51295) and 'Earmind' (51300) are all `UsedIn` CSDb release 66065, 'Hermit 3SID-Tracker 2008' (https://csdb.dk/release/?id=66065) — a real, dated 'C64 Tool' release, sole Code credit to Hermit. The remaining 2 files, 'Hermit Demo' (csdb sid id 38960) and 'Majorzak' (38956), are also dated 2008 on their own CSDb SID entries ('2008 Samar Productions') but are NOT tied to release 66065 or any other dated tool release, and 'Hermit Demo' carries very different PSID header addresses (load $1000/init $245D/play $2470) from the four 3SID-Tracker files (load/init $0FF4 or $1000, play $1003) — PSID header metadata only, not a disassembly fact, left out of Tier 3.",
    "SIDId's own sidid.nfo corroborates this from an independent angle: it has no entry for a bare 'Hermit' tag, but it DOES have an entry for '(Hermit/3SID)' whose `reference` field is the exact same CSDb release id, 66065, and whose `released` field says '2008' — i.e. SIDId's separate '(Hermit/3SID)' signature and this project's locally-tagged bare 'Hermit' files converge on the same underlying tool release, even though the two datasets spell the Player-ID tag differently. https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "The tool is a genuine native C64 multi-SID tracker: CSDb release comments (dated May 2008, on the release page) describe SID chips wired at $D400, $DE00 and $DF00, and record a companion 1-SID cut-down variant (HMT1SID.ZIP, added 27.05.2008) 'with cartridge conflict removed' for owners without 3 SID chips. Community colour only (forum-comment sourced, not the author's own documentation or a disassembly) — not promoted into Tier 3.",
    "DISTINCT FROM this project's already-carded Hermit tools: the bare 'Hermit' Player-ID tag is NOT the same tag as 'Hermit/SidWizard_V1.x' (carded as knowledge/players/sidwizard.md, 988 files) or 'Hermit/1RasterTracker' (carded as knowledge/players/1-raster-tracker.md).",
    "Single-composer concentration: all 6 files are by Hermit himself (Mihály Horváth, Hungary, CSDb scener 18806) — consistent with an in-house/personal tool release rather than one picked up by other musicians."
  ],
  "sources": [
    "CSDb release 'Hermit 3SID-Tracker 2008' (id 66065, type 'C64 Tool', ReleaseDay/Month/Year 7/4/2008, sole Code credit Hermit): https://csdb.dk/release/?id=66065 — fetched via scripts/lib/csdb-client.js (type=release, depth=2)",
    "CSDb `type=sid` webservice records for all 6 census files (ids 51297, 51296, 51295, 51300 = UsedIn release 66065; 38960, 38956 = dated 2008 but no UsedIn release): fetched via scripts/lib/csdb-client.js (type=sid)",
    "sidid.nfo's separate '(Hermit/3SID)' entry, corroborating the same CSDb release id and 2008 year under a differently-spelled tag: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Mihály Horváth / Hermit (Hungary): https://csdb.dk/scener/?id=18806",
    "Existing KB cards for Hermit's other, separately-tagged tools: knowledge/players/sidwizard.md, knowledge/players/1-raster-tracker.md",
    "Local dataset: 6 files tagged bare 'Hermit', all by Hermit himself — see data/composers/hermit.json"
  ]
}
```

## Overview

`Hermit` (bare tag, no tool suffix) is a raw Player-ID signature attributed
to **Mihály Horváth**, handle **Hermit** (Hungary, CSDb scener 18806) — the
same author behind the already-carded [SID-Wizard](sidwizard.md) and
[1 Raster-Tracker](1-raster-tracker.md). Census of all 6 locally-tagged
files (see `quirks`) shows 4 of them ("3SID Tracker Demo 1/2/3", "Earmind")
are directly `UsedIn` a real, dated CSDb tool release, **"Hermit 3SID-Tracker
2008"** (csdb.dk/release/?id=66065, 2008-04-07) — a native C64 tracker/editor
built to drive up to 3 SID chips at once. SIDId's own nfo corroborates this
independently: it has no bare-'Hermit' entry, but its differently-spelled
`(Hermit/3SID)` tag cites the identical CSDb release id and year. The
remaining 2 files ("Hermit Demo", "Majorzak") are also dated 2008 on their
own CSDb entries but aren't tied to that release, and carry different PSID
header addresses — plausibly an earlier or otherwise-unpublished routine
sharing the same bare tag, left as an open question (header data only, not
promoted to Tier 3). All 6 files are by Hermit himself — a personal/in-house
tool, not one adopted by other musicians in the collection.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this tag is **not** the same as
`Hermit/SidWizard_V1.x` or `Hermit/1RasterTracker`, both already carded;
4 of 6 census files resolve to a real CSDb tool release, "Hermit 3SID-Tracker
2008" (id 66065, 2008-04-07), independently corroborated by SIDId's
differently-spelled `(Hermit/3SID)` entry; the other 2 census files share
the bare tag but not the release, and have differing PSID header addresses;
single-composer concentration (6/6 files by Hermit himself) marks this as
personal/in-house.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields remain TODO. No public source repo or format spec confirmed
for this tool (as opposed to SID-Wizard's, which is documented); the SID
chip addresses ($D400/$DE00/$DF00) mentioned in CSDb release comments are
community forum colour, not the author's own documentation, and are not
promoted into the `memory` field.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/hermit.json`, `data/sidid.json`), a full census of all 6
tagged files cross-checked against CSDb's `type=sid` and `type=release`
webservice endpoints, and the CSDb scener page for Hermit. `status: stub`.

## Sources

See the `sources` array — CSDb release and per-file webservice records
(fetched live via `scripts/lib/csdb-client.js`), SIDId's `(Hermit/3SID)`
entry, CSDb scener page for Hermit, sibling KB cards, and the local
composer aggregation.

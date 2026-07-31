# HouseDesigns

```json
{
  "id": "housedesigns",
  "name": "HouseDesigns",
  "aliases": ["HouseDesigns"],
  "authors": ["House Designs (group credit only on the tunes); a likely-but-unconfirmed match: CSDb release 82483 'House Designs Note-Writer V1.0' (1991, C64 Tool, group House Designs, id 899) credits coding to Shez (CSDb scener 3351) — plausible identity for this routine's author, not independently confirmed as the specific tool that produced these 5 files"],
  "released": "1991 — censused from all 5 tagged files' own CSDb SID-entry Released field (not a UsedIn-release year): every one reads exactly 'Released: 1991 House Designs' (SID ids 16243, 16247, 16277, 27493, 27503)",
  "status": "stub",
  "platform": "Native C64 in-house replay routine (not a cross-platform editor) — used directly by House Designs group members (JVD, Slide) across 1991-1992 demoscene productions (music collections, crack intros, a diskmag). No dedicated CSDb 'tool' page is confirmed as this exact player, but a strong circumstantial candidate exists: CSDb release 82483 'House Designs Note-Writer V1.0' (C64 Tool, 1991, released by group House Designs id 899, coded by Shez) — matching group, matching year, and a name ('Note-Writer') consistent with a music editor. Not confirmed as the same routine (no explicit statement ties the release to these SID files' player signature), so held as a lead rather than fact.",
  "csdb_release": null,

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
    "SIDId's entry for this tag has ONLY a COMMENT field: 'Player used by the group House Designs' — no author, no name, no released date, no reference. This is the sole documented fact about the tag beyond the local dataset.",
    "House Designs is a real, identifiable C64 demo group: CSDb hosts its 1991 demo 'Alcolado 1' (archived on the Internet Archive), and two CSDb scener pages cross-reference membership as 'Scan/Desire/House Designs' (scener 3364) and 'No-XS/Desire/House Designs/Toondichters' (scener 787) — i.e. House Designs shared members with the group Desire. This corroborates the SIDId comment: a real, named Dutch-scene-era group, not a placeholder.",
    "Both locally-tagged composers are Dutch: JVD (Jurgen van Dongen, b. 1974, CSDb scener 1193, handles '<del>Mode 2</del>, JVD') and Slide (Udo Gorissen, CSDb scener 4595, handles '<del>Udo</del>, Slide') — both active from ~1992-1994, consistent with the group's early-1990s CSDb footprint. Neither composer's own CSDb scener page (per the profile data cached locally) explicitly lists 'House Designs' as a group membership, so their connection to the group is inferred from the SIDId comment plus matching nationality/era rather than independently confirmed on their own profiles — flagged as a gap for a future pass.",
    "Small, tight usage: 5 files across exactly 2 composers, both plausibly tied to the same small Dutch group — consistent with an in-house routine rather than a widely distributed tool.",
    "Re-research pass, 2026-07-31 (Tier 1/2 gap fill: released/platform/csdb_release). Censused all 5 tagged files via CSDb's type=sid webservice endpoint (scripts/lib/csdb-client.js), reading each SID entry's own Released field (not a UsedIn release year, per EXTRACTION-TEMPLATE.md's warning): Fanplastic (id 16243), Reality (16247), Salient (16277), Gumptious (27493), Thaliadomide (27503) all read exactly 'Released: 1991 House Designs' — unanimous, so 'released: 1991' is now a census-confirmed fact, not an estimate.",
    "Same pass: fetched CSDb group 899 ('House Designs', founded July 1989, Netherlands) and its full release list. Found release 82483 'House Designs Note-Writer V1.0' — a C64 Tool, released by group House Designs, dated 1991, coded by Shez (CSDb scener 3351), download filename 'HouseDeisgnsNote-WriterV1.0-HouseDesigns.zip'. This is a strong circumstantial match for the editor behind the HouseDesigns player tag (same group, same year, name literally describes a music/note editor) but is NOT confirmed as the same routine: the release's own UsedSIDs field points to an unrelated System 3/Reyn Ouwehand tune (background music for the tool's own demo intro, not one of the 5 HouseDesigns-tagged files), so there is no direct textual link tying release 82483 to these specific 5 files' player signature. Recorded as a lead in `platform`/`authors`, not promoted to `csdb_release` or `edges` without that direct link.",
    "The 5 files' PSID header load/init/play addresses are NOT uniform (Fanplastic: load $3000/init $37E8/play $3005; Reality, Gumptious, Thaliadomide: load $1000/init $1000/play $1003; Salient: load $4000/init $4000/play $4003) — consistent with a small in-house routine relocated per production rather than a fixed-address released tool, and is PSID header metadata only, not a disassembly fact (per EXTRACTION-TEMPLATE.md, kept out of Tier 3 `entry`/`memory`)."
  ],
  "sources": [
    "sidid:HouseDesigns (comment 'Player used by the group House Designs', no author/name/released/reference) — data/sidid.json",
    "Internet Archive, 'Alcolado 1 (1991)(House Designs)': https://archive.org/details/Alcolado_1_1991_House_Designs",
    "CSDb scener 'Scan/Desire/House Designs': https://csdb.dk/scener/?id=3364",
    "CSDb scener 'No-XS/Desire/House Designs/Toondichters': https://csdb.dk/scener/?id=787",
    "Local dataset: 5 files tagged 'HouseDesigns' across 2 composers — JVD, Slide (Udo Gorissen) — data/composers/jvd.json, data/composers/slide-gorissen-udo.json",
    "data/composers/jvd.json (HVSC profile: full name Jurgen van Dongen, Netherlands, b. 1974-06-15, CSDb scener 1193)",
    "data/composers/slide-gorissen-udo.json (HVSC profile: full name Udo Gorissen, Netherlands, CSDb scener 4595)",
    "CSDb webservice, type=sid: https://csdb.dk/webservice/?type=sid&id=16243 (and 16247, 16277, 27493, 27503) — each SID entry's own Released field reads '1991 House Designs'",
    "CSDb webservice, type=group id=899 (House Designs): https://csdb.dk/webservice/?type=group&id=899&depth=2 — group founded July 1989, Netherlands",
    "CSDb release 82483 'House Designs Note-Writer V1.0': https://csdb.dk/release/?id=82483 — C64 Tool, 1991, group House Designs, coded by Shez (scener 3351); circumstantial candidate, not confirmed as the HouseDesigns player routine"
  ]
}
```

## Overview

`HouseDesigns` is the SIDId tag for a replay routine SIDId itself describes
only as "Player used by the group House Designs" — no author, name, or date
in SIDId itself. House Designs is a real, identifiable early-1990s Dutch C64
demo/cracker group (CSDb group id 899, founded July 1989; its 1991 demo
"Alcolado 1" is archived, and CSDb cross-references members shared with the
group Desire). Locally the tag appears on only 5 files (a full census, not a
sample), split between two Dutch composers, JVD (Jurgen van Dongen) and Slide
(Udo Gorissen), both active in the group's era — though neither's own cached
CSDb profile explicitly lists House Designs membership, so the group
connection rests on the SIDId comment plus matching nationality/era. All 5
files' own CSDb SID-entry `Released` field reads identically "1991 House
Designs", so `released: 1991` is now census-confirmed. A CSDb release,
"House Designs Note-Writer V1.0" (id 82483, 1991, coded by Shez), is a
plausible candidate for the editor behind this tag but is not confirmed as
the same routine — recorded as a lead, not a fact.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the tag is corroborated as a real
group's in-house player (not just a SIDId placeholder), but individual
authorship within the group is unknown, and the two composers' own profiles
don't independently confirm House Designs membership.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus CSDb/Internet Archive
research for group corroboration and a 2026-07-31 re-research pass that
censused all 5 tagged files' own CSDb SID Released fields (confirming
`released: 1991`) and checked CSDb group 899's full release list for a
tool-level match (found a strong but unconfirmed lead, id 82483). `status:
stub` — no runtime fact has been confirmed by disassembly or trace, and
`csdb_release` stays `null` pending direct confirmation of the lead.

## Sources

See the `sources` array — SIDId sidid.nfo, the Internet Archive listing for
House Designs' 1991 demo, two CSDb scener pages, and the local composer
aggregation.

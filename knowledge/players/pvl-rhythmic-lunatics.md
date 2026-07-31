# PVL/Rhythmic Lunatics (player routine)

```json
{
  "id": "pvl-rhythmic-lunatics",
  "name": "PVL/Rhythmic Lunatics (player routine)",
  "aliases": ["PVL/Rhythmic_Lunatics"],
  "authors": ["Pascal van Loosbroek (PVL)"],
  "released": "No single tool-release date exists (not a published editor — see platform). Earliest tune attested: 1991, 'Animo' (tune 4) by JVD, used in the C64 demo 'Animo' (House Designs) — both the SID entry's own 'Released' field and its CSDb UsedIn release record independently agree on 1991 (https://csdb.dk/sid/?id=44061, https://csdb.dk/release/?id=6624). Latest 1990s tune: 'Dirty Diana' by PVL, 1996 (Art Design, https://csdb.dk/sid/?id=23642). Across all 33 PVL/JVD-tagged files' CSDb SID-entry 'Released' fields, years cluster 1991-1996 (one file, 'Smooth Criminal', is undated '199?' on CSDb). This 1991-1996 span matches the 'Rhythmic Lunatics' group's own CSDb group page (ID 902, https://csdb.dk/group/?id=902), whose 14 catalogued releases run 1992-1993. A single outlier exists: the 34th file, 'Well Enough' by the Hungarian composer Vincenzo, carries a CSDb-attributed release date of 2020 (Space Moguls, https://csdb.dk/sid/?id=59422) — decades after the routine's original-scene usage; likely a late/retro tune written with (or fingerprinted as matching) the same old routine, not evidence the tool was actively distributed in 2020.",
  "status": "stub",
  "platform": "Native C64 player — most likely a composer's own hand-coded routine (Player-ID fingerprints it by byte signature), not a distributed/documented editor. No CSDb tool release or source repo found for the routine itself.",
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
    "SIDId's entry for this tag is author-only — no released/reference/comment fields (confirmed by reading the raw sidid.nfo directly: 'PVL/Rhythmic_Lunatics \\n AUTHOR: Pascal van Loosbroek (PVL)', nothing else). Matches this project's cached data/sidid.json exactly.",
    "'Rhythmic Lunatics' is a real C64 scene group name, not just descriptive tag text: CSDb lists two 1990s music-collection releases credited to it — 'Epistula Music 02' (1992, actually a Twynn/Silicon Limited tune published under the Rhythmic Lunatics label) and 'Unlimited #1' (March 1993, directly credited to PVL and JVD). HVSC's Musicians.txt lists PVL's group as 'Slash Design' and JVD's as 'Focus', which initially looked like a mismatch — but both sceners' own CSDb profiles (scener id 2308 for PVL, id 1193 for JVD) confirm 'Rhythmic Lunatics' as a genuine prior/parallel group membership for each of them (PVL: Rhythmic Lunatics, then Slash Design Aug 1993-Mar 1996; JVD: Focus from Feb 1993, with Rhythmic Lunatics listed among prior groups). So the discrepancy is resolved: HVSC's Musicians.txt just records each composer's later/primary group, not the earlier 'Rhythmic Lunatics' one the tag references. 'Unlimited #1' is described (per CSDb) as intended as a music-magazine format with two compositions per issue from Rhythmic Lunatics members, i.e. a small clique release, not a widely distributed tool.",
    "PVL used two other handles over his career per his CSDb scener profile: 'Ferock' and, from August 1993, 'The Magic Friend' (a name change noted in a contemporary scene publication). Not otherwise relevant to the player routine, but useful for disambiguating his other credits.",
    "Composer concentration in this project's dataset (34 files total): PVL himself 20 files (59%), JVD 13 files (38%, also Netherlands), Vincenzo (Hungary) 1 file (3%). Two of three composers are Dutch scene contemporaries — consistent with a small personal/clique routine, not a widely published tool. The single Hungarian file is too small a sample to call routine reuse (cf. rob-hubbard.md's much larger, better-evidenced reuse pattern) — noted, not asserted.",
    "STIL.txt shows heavy '[from <artist>]' cover-tune tagging across both PVL's and JVD's HVSC folders (Fleetwood Mac, Michael Jackson, 2 Unlimited, A-Ha, Level 42, Roxette, Genesis, Depeche Mode, Dr. Alban...) — consistent with a routine used mainly for pop-cover chiptunes rather than an ambitious tracker/editor release.",
    "No public source code, disassembly, or CSDb tool/release entry found for the player routine itself — every runtime field below is honestly TODO.",
    "Re-research pass, 2026-07-31 (identity/provenance only, per task scope): queried CSDb's XML webservice (scripts/lib/csdb-client.js, type=sid) for all 34 tagged files' individual CSDb SID-entry ids (not a sample) to pull each tune's own 'Released' field and its 'UsedIn' release records. Result: 33 of 34 files cluster 1991-1996 (one, 'Smooth Criminal', csdb_id 44238, is undated '199?' on CSDb); the 34th (Vincenzo's 'Well Enough', csdb_id 59422) is dated 2020, a clear outlier. Cross-checked the 'Rhythmic Lunatics' group directly via type=group id=902 (found through PVL's own MemberOf listing) — CSDb's own group page shows 14 catalogued releases spanning 1992-1993, corroborating the range. One unresolved minor inconsistency noted, not acted on: 'Accuse Intro' (csdb_id 47183) shows SID.Released='1994 Accuse' but its own UsedIn.Release ('Accuse Intro 09', release id 105489) is CSDb-dated 1991 — a tune apparently used in a release two-plus years before its own attributed date; left as an open discrepancy in CSDb's data, not resolved further, and not used to anchor the 'released' field (the independently-corroborated 1991 'Animo' date was used instead). Confirmed again that SIDId's raw entry (data/sidid.json byTag['PVL/Rhythmic_Lunatics']) has only an `author` field — no `released`/`reference` — so `csdb_release` correctly stays null: none of the numeric CSDb ids found in this pass (SID-entry ids, individual demo/intro/diskmag release ids, or the group id 902) represents a release *of the player/tool itself*, which is what this field means (cf. cheesecutter.md/odintracker.md, sourced from SIDId's `reference`). Did not re-check Lemon64/Forum64 (already searched and negative per the prior pass, still true — no new C64 tool-release source appeared). Tier 3 fields untouched, per task scope."
  ],
  "sources": [
    "sidid.nfo raw entry (cadaver/sidid on GitHub, read directly): https://github.com/cadaver/sidid/blob/master/sidid.nfo — 'PVL/Rhythmic_Lunatics: AUTHOR: Pascal van Loosbroek (PVL)', no reference/comment",
    "Local cache: data/sidid.json byTag['PVL/Rhythmic_Lunatics']",
    "CSDb release, 'Unlimited #1 by Rhythmic Lunatics' (1993, credited to JVD and PVL): https://csdb.dk/release/?id=4807",
    "CSDb release, 'Epistula Music 02 by Rhythmic Lunatics' (1992, credited to Twynn of Silicon Limited): https://csdb.dk/release/?id=173971",
    "CSDb scener profile, PVL (id 2308) — groups: Rhythmic Lunatics, then Slash Design (Aug 1993-Mar 1996); handles Ferock, The Magic Friend: https://csdb.dk/scener/?id=2308",
    "CSDb scener profile, JVD (id 1193) — groups: Focus (from Feb 1993), Rhythmic Lunatics among prior/other groups: https://csdb.dk/scener/?id=1193",
    "HVSC Musicians.txt: 'PVL (van Loosbroek, Pascal {Ferock}) / Slash Design - NETHERLANDS' (data/hvsc/Musicians.txt line 1315); 'JVD (van Dongen, Jurgen {Mode2}) / Focus - NETHERLANDS' (line 861)",
    "HVSC STIL.txt: cover-tune '[from X]' tags across /MUSICIANS/P/PVL/ and /MUSICIANS/J/JVD/ (data/hvsc/STIL.txt)",
    "Local dataset: data/composers/pvl.json, data/composers/jvd.json, data/composers/vincenzo.json — 34 files (20 PVL / 13 JVD / 1 Vincenzo) tagged PVL/Rhythmic_Lunatics; see knowledge/COVERAGE.md (rank 8, 34 files)",
    "CSDb webservice (type=sid), all 34 tagged files' csdb_id values queried directly via scripts/lib/csdb-client.js, 2026-07-31 — e.g. https://csdb.dk/sid/?id=44061 ('Animo' tune 4, JVD, Released '1991 House Designs'), https://csdb.dk/sid/?id=23642 ('Dirty Diana', PVL, Released '1996 Art Design'), https://csdb.dk/sid/?id=47183 ('Accuse Intro', PVL, Released '1994 Accuse' but UsedIn release dated 1991), https://csdb.dk/sid/?id=59422 ('Well Enough', Vincenzo, Released '2020 Space Moguls')",
    "CSDb release, 'Animo' (C64 Demo, House Designs, 1991): https://csdb.dk/release/?id=6624",
    "CSDb release, 'Accuse Intro 09' (C64 Crack Intro, 1991): https://csdb.dk/release/?id=105489",
    "CSDb group page, 'Rhythmic Lunatics' (group id 902, Netherlands, Music Group, 14 catalogued releases spanning 1992-1993, found via PVL's own scener MemberOf listing): https://csdb.dk/group/?id=902"
  ]
}
```

## Overview

"PVL/Rhythmic_Lunatics" is the Player-ID signature for a player routine
attributed to Pascal van Loosbroek (PVL), a Dutch C64 scener (HVSC group
"Slash Design"). 34 files in this project's dataset carry the tag, spread
across three composers — PVL himself (20, 59%), fellow Dutch scener JVD (13,
38%), and a single outlier file by the Hungarian composer Vincenzo (1, 3%).
"Rhythmic Lunatics" also names a real early-1990s C64 scene group that
released two CSDb-catalogued music collections ("Epistula Music 02" in 1992,
"Unlimited #1" in 1993, the latter directly credited to both PVL and JVD).
HVSC's Musicians.txt lists PVL's group as "Slash Design" and JVD's as "Focus"
rather than "Rhythmic Lunatics" verbatim, which initially looked like a
mismatch — but both sceners' own CSDb profiles confirm "Rhythmic Lunatics" was
a genuine (earlier) group membership for each of them, so the tag's group
affiliation is real, just not the one HVSC's musician list currently
foregrounds. Everything found points to a small, composer-authored routine
rather than a published, documented editor: no source, disassembly, or CSDb
tool entry was found for the routine itself, so this remains an identity-only
stub. A 2026-07-31 sweep of all 34 tagged files' individual CSDb SID entries
(not a sample) dates 33 of them 1991-1996, anchored by 'Animo' (JVD, 1991,
independently confirmed by both the SID entry's own date and its CSDb
UsedIn-release record) at the early end and 'Dirty Diana' (PVL, 1996) at the
late end — matching the "Rhythmic Lunatics" group's own CSDb group page
(1992-1993 across 14 releases). One file ('Well Enough', Vincenzo) is a clear
outlier at 2020, decades after the original-scene usage. No tool-release date
exists for the routine itself, since it was never published as a distributed
tool — see `released` for the full breakdown, and `csdb_release` stays `null`
since SIDId's entry has no `reference` and no CSDb id found represents a
release of the tool itself.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: the SIDId entry carries no
release year or reference (author only); the "Rhythmic Lunatics" group name
looked like it didn't match either contributing composer's HVSC-listed group,
but both PVL's and JVD's CSDb scener profiles confirm it as a real earlier
group membership for each — HVSC's Musicians.txt just records their
later/primary group instead; the composer spread (2 Dutch scene
contemporaries + 1 small outlier) reads as a personal/small-clique routine
used mostly for pop-cover chiptunes, not a widely distributed tool; and the
2026-07-31 CSDb SID-entry sweep resolved `released` to an evidence-backed
1991-1996 range (plus a 2020 outlier) without ever finding a tool-release
date, since none exists for an undistributed personal routine.

## Disassembly notes

None performed. No source or public disassembly was found to work from —
Tier 3 fields are left `TODO` rather than guessed.

## Verification

Not verified — `status: stub`. Only identity/provenance facts (author,
composer usage, group-name affiliation, and now a fully-swept 1991-1996
release-year range) are established, each from a cited source (SIDId raw
entry, HVSC Musicians.txt/STIL.txt, CSDb release/scener/group pages and the
CSDb webservice's per-SID-entry data, and this project's own composer data).
No runtime fact has been confirmed by disassembly or tracing. Lemon64
(lemon64.com) and Forum64 (forum64.de) were searched directly for "PVL",
"Rhythmic Lunatics", and "van Loosbroek" in an earlier pass — no relevant
threads turned up on either forum, so no provenance was drawn from them; the
2026-07-31 re-research pass (identity/provenance scope only) did not repeat
this search since nothing new would be expected. Nothing here rises to
`in-progress`: no public source repo, format spec, or disassembly of the
routine itself was found anywhere searched, and `csdb_release` stays `null`
since no CSDb id represents a release of the tool itself (only per-tune
demo/intro/diskmag releases that use it).

## Sources

See the `sources` array — the raw sidid.nfo entry, this project's cached
`data/sidid.json`, two CSDb "Rhythmic Lunatics" music-collection releases,
PVL's and JVD's CSDb scener profiles, HVSC Musicians.txt/STIL.txt, and the
local per-composer dataset (`data/composers/pvl.json`, `jvd.json`,
`vincenzo.json`). Lemon64 and Forum64 were searched but yielded nothing
relevant.

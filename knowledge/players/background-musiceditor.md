# Background Music Editor

```json
{
  "id": "background-musiceditor",
  "name": "Background Music Editor",
  "aliases": ["Background_MusicEditor"],
  "authors": ["Gary Davis"],
  "released": "1983",
  "status": "stub",
  "platform": "Native C64 tool, distributed as a standalone disk image. A BASIC-language menu-driven sequencer (not a machine-code tracker) — the BASIC source is accessible directly from the disk image (LIST-able), but no separate source-code publication or format documentation exists. One of the earliest C64 music tools, predating the \"tracker\" term itself.",
  "csdb_release": 166753,

  "memory": {
    "load_address": "TODO: no disassembly performed; BASIC program layout not documented",
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
    "Local dataset (data/sidid.json, a dated one-time snapshot of SIDId's sidid.nfo) records reference as https://csdb.dk/release/?id=138743, but that CSDb release id does not resolve — csdb.dk/release/?id=138743 redirects to the CSDb homepage, and the CSDb webservice (type=release and type=sid) both return the generic 'huh' error for id 138743, confirming it is not a valid id. The live upstream sidid.nfo (github.com/cadaver/sidid) has since been corrected: the Background_MusicEditor entry's REFERENCE field now points to https://hvmec.altervista.org/blog/?p=3405 (the HVMEC archive of the preserved C64 disk image), not a CSDb page.",
    "Small, concentrated composer base: only 5 composers in this dataset have any file tagged Background_MusicEditor (21 files total, confirmed from data/composers/{boray,gary-davis,ii-mark,toni-luode,zsolt-koloncsak}.json). Gary Davis the author has 4 files, Toni Luode has 10 (~48% of the total — the single largest user), Boray has 4, II/Mark has 2, Zsolt Koloncsak has 1. The author's own use is a minority of the files; one non-author composer dominates. That combination (<=5 composers, one non-author composer >45%) reads as a small/niche tool that found one enthusiast beyond its author, not a widely-published tracker.",
    "Independently listed (year 1983, author Gary Davis) in C64-Wiki's tracker roundup (c64-wiki.de/wiki/Tracker), confirming it is a recognized early tool — but that listing's own footnote link for CSDb is just a search-results URL (csdb.dk/search/?search=Background+Music+Editor), not a specific release id.",
    "CONVENTION NOTE (csdb_release pointing at a CRACK release): this is the first card in the KB to do so, and it is deliberate. The tool has no other CSDb presence — SIDId's recorded reference id 138743 is DEAD (webservice returns its generic error), and C64-Wiki links only a search URL. That search returns exactly two entries, both cracks of the tool's OWN disk, of which 166753 is the earlier. Contrast [[gkgm]], researched the same day, which REFUSED a crack id: there the cracks are of a commercial game-creation product and the card describes its embedded music engine, so the crack documents a different artefact. Rule of thumb: a crack of the tool itself may be cited when nothing else exists; a crack of a larger product that merely contains the player may not.",
    "Re-research pass, 2026-07-31: confirmed csdb_release=166753 by running that exact C64-Wiki search URL. It returns exactly two CSDb release entries, both titled 'Background Music Editor' (AKA 'Backgroundmusic'), type 'C64 Crack', releaser handle 'Softwar Technics' of group The Survivors (TS): id 166753 (15/1-1988, downloadable disk 'Background-Music-Editor-ST.d64') and id 234561 (3/2-1988, disk 'Music_Editor_Ts.d64'), the latter's own CSDb comment stating it is a 'US Import of <release id=166753>' — i.e. the same crack re-released, not a second tool. id 166753 is therefore recorded as the canonical csdb_release (earliest attested distribution). This is a *scene crack* of the tool's own distribution disk (matching SIDId's description of Background Music Editor as 'distributed as a standalone disk image'), not an original-author software release entry — its 1988 date is the crack/import date, five years after the tool's own 1983 creation, not a re-release or new version. The release's screenshot (csdb.dk/gfx/releases/166000/166753.gif) shows a scrolling 'SOFTWAR TECHNICS' cracktro logo over on-screen text reading '...BACKGROUND MUSIC E[DITOR]...', confirming the crack's boot screen names the same tool rather than an unrelated 'background music' product.",
    "Re-research pass, 2026-07-31: censused all 21 tagged files' own CSDb sid-entry 'Released' fields directly (type=sid webservice calls for csdb_id 42972, 42969, 42968, 42971, 51527, 43602, 43628, 41514, 199, 48887, 17374, 44103, 17370, 17371, 17372, 17375, 44104, 17373, 17376, 62761, 1587), per-file, not sampled. All 4 Gary Davis (author) tunes read 'Released: 1983 Gary Davis' — corroborating the local dataset's released:1983 from the tune metadata itself, not just SIDId's own field. The other composers' tunes are later (Boray tunes 1988; II/Mark 1985-1986; Toni Luode 1986-1988; Zsolt Koloncsak 1989), consistent with the tool circulating for years after its 1983 origin. No date in this census was later than expected or contradicted the 1983 origin.",
    "DRIFT-RECHECK, 2026-08-07: re-fetched csdb.dk/release/?id=166753 and /?id=234561 directly. No new comments, no changed release type/date, no new CSDb pages for this tool. Local composer census (5 files, glob *.json against data/composers/) unchanged: still exactly boray/gary-davis/ii-mark/toni-luode/zsolt-koloncsak, 21 files. CORRECTION to the prior CONVENTION NOTE entry above: id 166753's 'Released by' field lists only scener 'Softwar Technics' credited with groups Ahead and Fresh! (csdb.dk/scener/?id=13994 lists Softwar Technics's memberships as Ahead, Fresh!, Galaxy, Orion) — the strings 'Survivors' and 'TS' do not appear anywhere on that page as of this recheck. Only id 234561 (the 3/2-1988 US-import) lists 'The Survivors' as a co-releaser alongside Softwar Technics. The prior note's parenthetical '(TS)' group attribution for the canonical id 166753 is therefore not supported by a direct re-read of that page (the disk filenames are consistent with this split: 166753 = 'Background-Music-Editor-ST.d64' i.e. Softwar Technics, 234561 = 'Music_Editor_Ts.d64' i.e. The Survivors). This does not affect the csdb_release value itself (166753 remains the earliest attested distribution of the tool's own disk) or any other fact on this card — it is a correction to one group-affiliation detail inside a quirks note, not a change to identity/authorship/release-date facts."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['Background_MusicEditor'] — canonical name, author, released (dated snapshot of SIDId's sidid.nfo)",
    "Live upstream SIDId database entry (superseding the stale cached CSDb reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "HVMEC archive — preserved C64 disk image + description of the editor's BASIC-program structure and menu layout: https://hvmec.altervista.org/blog/?p=3405",
    "C64-Wiki tracker list (independent confirmation of name, year, author, and the search URL that led to the CSDb crack releases): https://www.c64-wiki.de/wiki/Tracker",
    "Local dataset: knowledge/COVERAGE.md and data/composers/{boray,gary-davis,ii-mark,toni-luode,zsolt-koloncsak}.json — per-file player tag aggregation (21 files across 5 composers)",
    "CSDb release entries (2026-07-31 pass): https://csdb.dk/release/?id=166753 (canonical csdb_release, 15/1-1988 crack) and https://csdb.dk/release/?id=234561 (3/2-1988 US-import re-release of the same crack, per its own comment) — fetched via CSDb webservice type=release",
    "CSDb sid-entry census (2026-07-31 pass): CSDb webservice type=sid for all 21 tagged files' csdb_id values, confirming per-file Released dates and corroborating the 1983 origin from the author's own 4 tunes",
    "Verified directly against csdb.dk in an earlier pass: csdb.dk/release/?id=138743 redirects to the homepage; CSDb webservice type=release/type=sid both return 'huh' for id 138743, confirming the locally-cached SIDId reference id is dead",
    "Drift-recheck pass, 2026-08-07: re-fetched csdb.dk/release/?id=166753 and id=234561 (no new comments/changes since 2026-07-31), csdb.dk/scener/?id=13994 (Softwar Technics's group memberships: Ahead, Fresh!, Galaxy, Orion — no 'Survivors'), the live sidid.nfo (unchanged), the HVMEC archive page (unchanged), and www.c64-wiki.de/wiki/Tracker (unchanged entry). Re-confirmed local composer census via Grep with explicit glob '*.json' against data/composers/ — same 5 files, same 5 composers."
  ]
}
```

## Overview

Background Music Editor is a very early (1983) Commodore 64 music composition tool by
Gary Davis — one of the earliest entries in C64-Wiki's tracker roundup,
predating the "tracker" term itself. Per the HVMEC preservation archive (the
only substantive documentation found), it is a BASIC-language, menu-driven
sequencer rather than a machine-code tracker/replay routine: disk operations,
music editing, data copy, playback toggle, and file management, with a SID-
configuration and line-edit workflow. The BASIC source is accessible from the
disk image (it's a BASIC program, not compiled machine code), but no separate
source-code publication, format documentation, or technical spec exists. The
id once cached in SIDId's sidid.nfo (138743) does not resolve (see the first
`quirks` entry), but a genuine CSDb release does exist under a different id:
`csdb_release: 166753`, a January 1988 "C64 Crack" of the tool's own
distribution disk by Softwar Technics/The Survivors, whose cracktro screenshot
names the tool on-screen — five years after the tool's 1983 origin, so it
records the crack's scene-distribution date, not a new version. In this
project's dataset it is a small, concentrated family: 21 files across just 5
composers. Notably the author's own output (4 files) is a minority — Toni
Luode alone accounts for roughly half the files (10/21), suggesting the tool
found one dedicated user well beyond its author rather than broad scene
adoption. A full per-file CSDb census (all 21 tagged files' own `Released`
fields, not sampled) confirms the 1983 origin directly from Gary Davis's own
four tunes.

## Quirks & gotchas

See the `quirks` array — most load-bearing: the cached local reference points
at a dead/invalid CSDb release id (138743), and the live upstream SIDId source
has since replaced it with a non-CSDb archival link. Separately, a genuine
CSDb release for this exact tool does exist (id 166753, a 1988 scene crack of
the distribution disk) — found via C64-Wiki's own search-URL footnote rather
than the (broken) SIDId reference, and distinct from the stale cached id.

## Disassembly notes

None performed. No public source code or binary format documentation was found
— the only description available (HVMEC) is a high-level walkthrough of the
on-screen menu structure of the preserved disk image, not a technical spec.
A future pass could disassemble a representative `.sid` file tagged
Background_MusicEditor (via its PSID header init/play addresses) as the only
route to real memory-map/format facts, since no source is available.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
year, a high-level platform description, and the CSDb release id) are
confirmed, from the local SIDId snapshot, the live upstream sidid.nfo, the
HVMEC archive's description of the preserved disk, an independent C64-Wiki
listing, and a full per-file CSDb census plus direct confirmation of the
CSDb crack release. Every runtime field is `TODO` because no disassembly was
performed and no format documentation exists publicly.

## Sources

See the `sources` array — the local SIDId snapshot and its live upstream
counterpart (which corrects a broken cached CSDb reference), the HVMEC archive,
C64-Wiki, this project's own composer/coverage aggregation, and the 2026-07-31
pass's CSDb release/sid-entry verification.

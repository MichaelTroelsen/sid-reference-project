# HCL/BoozeDesign (player routine)

```json
{
  "id": "hcl-boozedesign",
  "name": "HCL/BoozeDesign (player routine)",
  "aliases": ["HCL/BoozeDesign"],
  "authors": ["David Malmborg (HCL) of Booze Design"],
  "released": "2001 (embedding/first-use year, not a tool release — SIDId's byTag entry has no RELEASED field). Full census of all 5 locally-tagged files' own CSDb 'Released' fields: csdb 14377 'Bonustrack' = '2001 Booze Design'; csdb 6939 'Burp!' = '2001 Scallop/Booze Design'; csdb 6943 'Dark Space' = '2001 Scallop/Booze Design'; csdb 42012 'Yeah! (Royal Arte version)' = '2001 Booze Design'; csdb 29822 'Wet Jazz' = '2001 Padua/Booze Design'. Four of the five (6939, 6943, 42012, 29822) are UsedIn the Booze Design C64 demo 'Royal Arte' (April 2001, csdb.dk/release/?id=142) and its rerelease 'Royal Arte 100%' (25 Nov 2001, csdb.dk/release/?id=11619); the fifth (14377) is UsedIn 'Starion-Intro Remake' (25 Nov 2001, csdb.dk/release/?id=4703), also at the same X'2001 party.",
  "status": "stub",
  "platform": "Not a released standalone editor — an in-house C64 player routine coded by HCL and embedded directly in Booze Design demo productions. Direct evidence: csdb.dk/release/?id=142 ('Royal Arte', Booze Design, April 2001, csdb.dk) lists 'Music' credits for Agemixer and other guest musicians alongside Booze Design members, matching 4 of the 5 locally-tagged files (Agemixer x2, Glenn Rune Gallefoss, Vincent Merken/Padua) being UsedIn that same demo/its rerelease. No standalone CSDb tool/editor release page, source repo, or download was found under this name — searched csdb.dk (group id 505 Booze Design, scener id 8075 HCL), a CSDb forum thread on music player routines (csdb.dk/forums/?roomid=14&topicid=149796, no HCL/BoozeDesign mention), and web search including Lemon64.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SIDId credits the author as David Malmborg ('HCL'), a well-known Swedish C64 coder/musician and core member of Booze Design (credited with most of the code on the acclaimed demo 'Edge of Disgrace' — Demozoo, pouet.net). Only 1 of the 5 locally-tagged files (data/composers/hcl.json, 'Bonustrack', csdb id 14377) is actually authored by HCL himself; the other 4 are by different composers — Agemixer (2 files: 'Burp!', 'Dark Space'), Glenn Rune Gallefoss (1: 'Yeah! (Royal Arte version)'), and Vincent Merken/Mindflow (1: 'Wet Jazz') — none of whom are documented Booze Design members in this dataset.",
    "This is a real spread-usage tag, not a single-author personal routine: 5 files across 4 composers, only one of whom is the credited author. No source found explains why unrelated composers' files carry HCL's signature — plausibly the routine circulated informally in the scene (HCL is a prolific, widely-respected coder), but this is inference, not a sourced claim.",
    "Booze Design is a real, long-running Swedish C64 demo group (active since at least 1992; 'Edge of Disgrace' is widely regarded as one of the greatest C64 demos — pouet.net, Demozoo). The player tag's group suffix ('BoozeDesign') is consistent with this identity, but no CSDb tool/release page was found for a standalone 'HCL/BoozeDesign' music editor — treat the tag as an embedded routine, not a packaged tool.",
    "The cross-composer spread is now explained by direct CSDb evidence, not just inference: all 5 tagged files' own 'Released' fields read 2001, and 4 of them (Agemixer x2, Gallefoss, Merken/Padua) are UsedIn the Booze Design demo 'Royal Arte' (csdb.dk/release/?id=142, April 2001) or its rerelease 'Royal Arte 100%' (csdb.dk/release/?id=11619, Nov 2001) — a demo whose own CSDb credits list Agemixer under 'Music' alongside Booze Design members. HCL's own file (14377, 'Bonustrack') is UsedIn a different but contemporaneous X'2001 production ('Starion-Intro Remake', csdb.dk/release/?id=4703). Reading: HCL's routine was written for/used in this specific 2001 production cycle, with guest musicians supplying tracks for it."
  ],
  "sources": [
    "data/sidid.json byTag['HCL/BoozeDesign']: author 'David Malmborg (HCL)', no other fields",
    "Local dataset: data/composers/hcl.json, agemixer.json, glenn-gallefoss.json (or equivalent), vincent-merken.json — 5 files tagged 'HCL/BoozeDesign' across 4 composers; see knowledge/COVERAGE.md row #18 (5 files)",
    "Demozoo — HCL / Booze Design scener profile: https://demozoo.org/sceners/1545/",
    "Demozoo — Booze Design group profile: https://demozoo.org/groups/1287/",
    "pouet.net — 'Edge of Disgrace' by Booze Design (credits HCL for most of the code): https://www.pouet.net/prod.php?which=51983",
    "CSDb SID entry, 'Totally Stoned II' / David Malmborg (HCL) / 1993 Booze Design: https://csdb.dk/sid/?id=14402",
    "CSDb webservice (scripts/lib/csdb-client.js), type=sid, full census of all 5 tagged files' own Released/UsedIn fields: id 14377 (Bonustrack), 6939 (Burp!), 6943 (Dark Space), 42012 (Yeah! Royal Arte version), 29822 (Wet Jazz) — queried 2026-07-31",
    "CSDb release, 'Royal Arte' by Booze Design, C64 Demo, April 2001, Mekka & Symposium 2001: https://csdb.dk/release/?id=142 (Credits list Agemixer under 'Music')",
    "CSDb release, 'Royal Arte 100%' by Booze Design, Nov 2001, X'2001: https://csdb.dk/release/?id=11619",
    "CSDb release, 'Starion-Intro Remake', Nov 2001, X'2001: https://csdb.dk/release/?id=4703",
    "CSDb forum, 'Music Player Routine' thread (no HCL/BoozeDesign mention, checked and discarded): https://csdb.dk/forums/?roomid=14&topicid=149796",
    "CSDb group page, Booze Design: https://csdb.dk/group/?id=505; CSDb scener page, HCL: https://csdb.dk/scener/?id=8075 — no standalone tool/editor release found under either"
  ]
}
```

## Overview

`HCL/BoozeDesign` is SIDId's byte-signature tag for a routine credited to
**David Malmborg ("HCL")**, a well-known coder and musician in the Swedish demo
group **Booze Design** (credited with most of the code on "Edge of Disgrace,"
widely regarded as one of the greatest C64 demos ever made). Locally the tag
spans only **5 files across 4 composers** — HCL himself on just one of them
("Bonustrack"), plus Agemixer, Glenn Rune Gallefoss, and Vincent Merken, none
documented as Booze Design members. No CSDb tool release or source repo was
found for a standalone editor under this name; it reads as an embedded player
routine rather than a packaged tool. A full CSDb census of all 5 files' own
`Released` fields resolves the "released" gap: all five read **2001**, and 4
of them are `UsedIn` the Booze Design demo "Royal Arte" (April 2001,
csdb.dk/release/?id=142, whose own credits list Agemixer under "Music") or its
November 2001 rerelease "Royal Arte 100%" (csdb.dk/release/?id=11619) — the
fifth (HCL's own "Bonustrack") is `UsedIn` a contemporaneous X'2001 production.
This directly evidences the routine as a 2001 in-house tool built for that
demo cycle, with guest musicians supplying tracks for it, rather than a
generic multi-year personal routine.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the author (HCL) accounts for only 1 of
5 tagged files — the tag spread to unrelated composers for reasons not
documented anywhere found.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source or
disassembly located.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
from cached SIDId data and CSDb/Demozoo provenance research.

## Sources

See the `sources` array — the cached SIDId entry, local composer-file
aggregation, Demozoo profiles for HCL and Booze Design, pouet.net, and one
CSDb SID entry.

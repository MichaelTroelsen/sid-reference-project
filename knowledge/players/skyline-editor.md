# SkyLine Editor (Daniel Stenberg / SkyLine Technics)

```json
{
  "id": "skyline-editor",
  "name": "SkyLine Editor (Daniel Stenberg / SkyLine Technics)",
  "aliases": ["SkyLine_Editor", "SkyLine_Editor_V3.0"],
  "authors": ["Daniel Stenberg (Danne/Bagder)"],
  "released": "28 October 1990 (V3.0, SkyLine Technics)",
  "status": "in-progress",
  "platform": "A C64 music editor coded by Daniel Stenberg — CONFIRMED, via his own personal website plus independent CSDb cross-references, to be the SAME Daniel Stenberg who went on to create cURL and libcurl, among the most widely-used pieces of software infrastructure in computing history. Coded for the Swedish demo group SkyLine Technics (founded 1989), which he co-founded alongside his real brother Björn ('Zagor') and friend Linus Nielsen ('Boogaloo'). Player-ID-fingerprinted across 5 files, all by Boogaloo — a founding-era bandmate of the tool's author, not a random adopter.",
  "csdb_release": 167080,

  "memory": { "load_address": "Sample HVSC file traced (Lingonben intro, composed by Boogaloo): load $1000 (init $1003, play $1000).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1003.", "play": "Sample trace: $1000 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 39 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HIGH-CONFIDENCE IDENTITY CONFIRMATION — a genuinely remarkable, rigorously verified find: Daniel Stenberg (handle 'Bagder', b. 1970, Sweden), the real-world creator of cURL/libcurl, is CONFIRMED to be the same person as this tool's coder. His own personal website (daniel.haxx.se, the highest-trust primary source possible — his own words) states he got a C64 in 1985 with his brother Björn, wrote his first assembly demos in late 1987, joined the Swedish group Super Swap Sweden using handle 'D$85' then 'bagder', and explicitly: 'Under Skyline Techniques, his brother Björn and friend Linus created SID music compositions for demos.' CSDb independently corroborates every specific detail: scener id=8084 (real handles Bagder/D$85/Danne, groups Horizon/SkyLine Technics/SSS, Sweden) and a duplicate/unmerged entry id=20079 ('Danne', trivia 'Brother of Zagor', credited Code on SkyLine Editor V1.5-V3.0) both resolve to the same person; his brother 'Zagor' (CSDb id=207, trivia 'Brother of Bagder', founder of Confusing Solution, also in SkyLine Technics) matches Björn exactly; 'Boogaloo' (this tag's dominant user) is confirmed as Linus Nielsen (CSDb id=362) — matching Stenberg's own 'friend Linus' reference precisely.",
    "IMPORTANT NUANCE: Stenberg's own website credits the MUSIC under Skyline Techniques to his brother Björn and friend Linus — never mentioning himself as a composer. The CODE credit for the editor itself comes from CSDb (release 167080, 'Code: Danne'), not from any first-person Stenberg quote explicitly saying 'I wrote the SkyLine Editor.' The identity link is airtight (three independent, mutually corroborating sources), but the specific claim 'Stenberg personally coded this editor' rests on CSDb's credit field, not his own words — a small but real distinction worth preserving.",
    "SKYLINE TECHNICS, CONFIRMED: founded 1989, Sweden, motto 'Without SkyLine Life Loses Shine' — members Bagder/Danne (coder, =Daniel Stenberg), Zagor (musician, =Björn Stenberg), Boogaloo (musician, =Linus Nielsen), SMC (musician).",
    "BOOGALOO/LINUS NIELSEN, the tag's sole user (5/5 files), was NOT a random adopter of a public tool — he was a FOUNDING-ERA BANDMATE of SkyLine Technics itself, active as coder/musician from 1985 into the 2020s, later also in the group Horizon alongside Stenberg.",
    "A minor CSDb data quirk noted for future cross-referencing: two unmerged scener entries exist for the same person (id=8084 'Bagder/Horizon' and id=20079 'Danne') — be aware of this if pulling further CSDb data on him.",
    "No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found; his Swedish demoscene circle is entirely separate from this KB's mostly UK/US/other-Nordic composer roster)."
  ],
  "sources": [
    "Wikipedia — Daniel Stenberg (cURL creator, confirms handle 'Bagder', Swedish, b. 1970): https://en.wikipedia.org/wiki/Daniel_Stenberg",
    "Daniel Stenberg's own website — About (C64 origin story, brother Björn, SkyLine Technics music credit): https://daniel.haxx.se/about.html",
    "Daniel Stenberg's own website — My Computers: https://daniel.haxx.se/computers.html",
    "Daniel Stenberg's own blog — 'Unexpected C64 reference' (2010): https://daniel.haxx.se/blog/2010/06/01/unexpected-c64-reference/",
    "CSDb scener — Bagder/Horizon (id=8084): https://csdb.dk/scener/?id=8084",
    "CSDb scener — Danne (id=20079, credited coder on SkyLine Editor, trivia 'Brother of Zagor'): https://csdb.dk/scener/?id=20079",
    "CSDb scener — Zagor (id=207, trivia 'Brother of Bagder', =Björn Stenberg): https://csdb.dk/scener/?id=207",
    "CSDb scener — Boogaloo (id=362, =Linus Nielsen, SkyLine Technics/Horizon): https://csdb.dk/scener/?id=362",
    "CSDb group — SkyLine Technics (id=1496, founded 1989, full member roster): https://csdb.dk/group/?id=1496",
    "CSDb release 167080 — SkyLine Editor V3.0 (28 Oct 1990, Code: Danne, Music: Freeze): https://csdb.dk/release/?id=167080",
    "Local dataset: 5 files tagged SkyLine_Editor_V3.0, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `SkyLine_Editor_V3.0` tag is a C64 music editor coded by Daniel
Stenberg for the Swedish demo group SkyLine Technics in 1990 — CONFIRMED,
via his own website and independent CSDb cross-references, to be the same
Daniel Stenberg who later created cURL and libcurl. Player-ID-
fingerprinted across 5 files, all by Boogaloo (Linus Nielsen), a founding
bandmate of the tool's author, not a random public adopter.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **rigorously
confirmed cURL-creator identity**, triangulated across three independent,
mutually corroborating sources (his own personal website, and two CSDb
scener entries confirming the exact family/friend relationships he
describes in his own words). A small but real nuance is preserved: he
credits the MUSIC to his brother and friend, never claiming authorship of
the editor himself in his own writing — the coding credit comes from
CSDb's release data, not a first-person quote.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `SkyLine_Editor_V3.0`-
tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `SkyLine_Editor_V3.0` `.sid` (Lingonben intro, composed
by Boogaloo): load `$1000`, init `$1003`, play `$1000`, **294 register
writes / 50 frames** (39 filter writes — filter-heavy). Internals
undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — Wikipedia, Daniel Stenberg's own website (3
pages), and CSDb (6 entries).

# System 6581

<!--
  Card updated 2026-07-23: Tier 3 entry points confirmed from PRG2SID documentation.
  Status raised from stub to in-progress.
-->

```json
{
  "id": "system6581",
  "name": "System 6581",
  "aliases": ["System6581", "Sonic-Editor"],
  "authors": ["Fredrik Hederstierna (Zizyphus, Oneway)"],
  "released": "1993 (V3.0 freeware release; composed/coded 1989-1990 per CSDb release notes)",
  "status": "in-progress",
  "platform": "Native C64 tool (editor + its own C64 replay routine). No cross-platform component known.",
  "csdb_release": 27434,

  "memory": {
    "load_address": "Assumed $1000 (PRG2SID's System6581 player signature adds init/play at $0FF9-$0FFF, immediately below the typical $1000 binary load). Not independently verified from a disassembly.",
    "zero_page": "DeepSID players.json spec lists zero_pages: \"None\" for this player (unverified, not independently re-derived from a disassembly).",
    "layout": "TODO: order list / patterns / table addresses — no public source or disassembly located"
  },
  "entry": {
    "init": "$0FF9 (both v1 and v2, per PRG2SID by iAN CooG/HVSC — see sources)",
    "play": "$0FFE (both v1 and v2, per PRG2SID; PRG2SID adds the stub init/play code at $0FFA-$0FFF)"
  },
  "speed": "TODO: not documented publicly; DeepSID players.json gives an aggregate play-routine cost of 'Approx 26-33 rasterlines [SD]' but no speed model details",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public format spec or source located",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Originally a demo/music group name: 'System 6581' (Sweden) was a demo/music group whose members included Zizyphus (coder), Moppe (musician), David Hayes (musician), and Johannes (graphician). The tool was named after the group — Zizyphus was an ex-member of System 6581 before joining Oneway. The group itself released 10 productions 1989-1990 including the eponymous tool (CSDb release id 122173, undated). The V3.0 release (id 27434) is credited to Oneway, not the System 6581 group.",
    "Version history spread across releases: the original undated release (id 122173, released under the System 6581 group name) is 'also known as Sonic-Editor' and includes an instructions file stating 'Player & Editor (c) Sonic Graffiti/SYS6581'. V0.8+ (undated, by Oneway, code Zizyphus) and V3.0 (1993, by Oneway, code Zizyphus, music Moppe & Zizyphus) followed. The original was made under the System 6581 group banner; later versions were Oneway releases.",
    "Sonic Graffiti connection — surfaced 2026-07-23 by reading the CSDb release 122173's own included instructions. The original release's instructions file states 'Player & Editor (c) Sonic Graffiti/SYS6581', asserting joint copyright between the Sonic Graffiti group (UK, coder Andy Lumley) and System 6581. This is a stronger claim than just shared users: it suggests the tool was a collaboration between the two groups, at least in its first version. However, the Sonic Graffiti group also had its own in-house editor by Andy Lumley (see [[sonic-graffiti]]), and the two were coded by different people (Hederstierna vs Lumley) — so 'shares_routine_with' is NOT asserted; the exact nature of the collaboration (co-development, distribution arrangement, or Sonic Graffiti contributing music/demo content) is unclear from the copyright line alone.",
    "CROSS-GROUP ADOPTION — surfaced 2026-07-17 by a composer-overlap connection scan over data/composers/*.json. Beyond Oneway (Moppe + Zizyphus = 62 files), System 6581's SECOND user cohort is the UK music group Sonic Graffiti: Gerard Gourley (13), Ben Hayes (10), 'Graffiti Sonic' (5) and Deek (1) = 29 files (~29%) — the exact four musicians credited on [[sonic-graffiti]], their own in-house editor (by Andy Lumley). So this Swedish editor crossed to a UK group; its reach is wider than its author's immediate circle, correcting the earlier 'mostly its own small group' read. This is a shared-USERS relationship (the same people used both tools), NOT shared code — different coders (Hederstierna vs Lumley), so no `shares_routine_with` edge is asserted, only this navigational link.",
    "Concentrated but NOT single-group usage: of the 101 files tagged 'System6581', 7 composers use it, and the top two — Moppe (39, 38.6%) and Zizyphus himself (23, 22.8%) — are both Oneway and account for 61%. Full breakdown: Moppe 39, Zizyphus 23, Gerard Gourley 13, Ben Hayes 10, Liket 10, Graffiti Sonic 5, Deek 1.",
    "Release lag: CSDb credits/release notes (release id 27434) describe the tunes on the release disk as composed/coded in 1989-1990 but only officially released as freeware in 1993 (V3.0) — DeepSID's players.json start_year (1990) and SIDId's implicit 1993 distribution date reflect these two different milestones. Do not treat '1990' and '1993' as a contradiction; they are coding-date vs release-date.",
    "No public source code, format documentation, or disassembly was located for the editor/player itself (CSDb, Codebase64, web search). Every data-format Tier 3 field remains TODO for that reason — an honest gap, not a guessed one.",
    "DeepSID's players.json spec entry for 'System 6581' includes two concrete-looking runtime hints — 'zero_pages: None' and 'cpu_time: Approx 26-33 rasterlines [SD]' — that are recorded here as citations to that source, not independently verified against a disassembly.",
    "Entry points ($0FF9/$0FFE, both v1 and v2) are from PRG2SID by iAN CooG/HVSC, a mature tool that has identified and patched this player's signature for years — but these have NOT been independently verified by reassembling a System6581-tagged .sid and tracing it through sidm2-siddump. See Verification below."
  ],
  "sources": [
    "CSDb release (System 6581 V3.0, Zizyphus/Oneway, credits: code Zizyphus, music Moppe & Zizyphus): https://csdb.dk/release/?id=27434",
    "CSDb release (System 6581 original undated release, released under System 6581 group, aka 'Sonic-Editor', credits: code & music Zizyphus, instructions file states 'Player & Editor (c) Sonic Graffiti/SYS6581'): https://csdb.dk/release/?id=122173",
    "CSDb group System 6581 (Sweden, demo/music group, members Zizyphus/Moppe/David Hayes/Johannes, 10 releases 1989-1990): https://csdb.dk/group/?id=6372",
    "CSDb scener Zizyphus (Fredrik Hederstierna, ex-member of System 6581, current member of Oneway): https://csdb.dk/scener/?id=3110",
    "sidid:System6581 (author Fredrik Hederstierna (Zizyphus), reference https://csdb.dk/release/?id=27434) — data/sidid.json",
    "DeepSID players.json entry 'System 6581' (developer Zizyphus, start_year 1990, csdb_id 27434, platform 'Native / C64 emulator', distribution 'Freeware in 1993', zero_pages 'None', cpu_time 'Approx 26-33 rasterlines [SD]') — data/players.json",
    "PRG2SID v1.26 by iAN CooG/HVSC (Amiga/MorphOS tool for attaching PSID headers to ripped PRGs — documents System6581 v1 and v2 player signatures with init $0FF9, play $0FFE, adding stub code at $0FFA-$0FFF): CSDb release https://csdb.dk/release/?id=260620 and aminet readme http://m68k.aminet.net/misc/emu/prg2sid-mos.readme",
    "Local dataset: 101 files tagged System6581 across 7 composers (Moppe 39, Zizyphus 23, Gerard Gourley 13, Ben Hayes 10, Liket 10, Graffiti Sonic 5, Deek 1 — aggregated from data/composers/*.json)"
  ]
}
```

## Overview

System 6581 is a native Commodore 64 music editor/replay tool by Fredrik
Hederstierna, working as "Zizyphus" of the group Oneway. The tool is named
after the Swedish demo/music group "System 6581" (whose members included
Zizyphus, Moppe, David Hayes, and Johannes); Zizyphus had been an
ex-member of that group but continued to release the tool under its name
even after joining Oneway.

The release history spans three known versions: an undated original (CSDb
id 122173, released under the System 6581 group, "also known as
Sonic-Editor" with instructions stating joint copyright with the UK's
Sonic Graffiti group), V0.8+ (undated, by Oneway), and V3.0 (1993, by
Oneway). CSDb's V3.0 page notes the tunes were composed/coded 1989-1990
but only officially released as freeware in 1993. DeepSID lists a
start_year of 1990.

In this dataset System 6581 is used by 101 files across 7 composers, with
two Oneway names (Moppe and Zizyphus) accounting for 61% of that usage.
It was not, however, an Oneway-only tool: its second-largest user cohort is
the UK group **Sonic Graffiti** (Gerard Gourley, Ben Hayes, "Graffiti
Sonic", Deek -- ~29% combined), whose members also had their own in-house
editor (see `[[sonic-graffiti]]`). Furthermore, the original undated
release's own instructions claim joint copyright "Sonic Graffiti/SYS6581,"
suggesting the two groups collaborated on the tool at some level, at least
in its first version.

Entry points are now known from PRG2SID (iAN CooG/HVSC): init $0FF9,
play $0FFE, with the stub init/play code placed at $0FFA-$0FFF immediately
below the typical $1000 load address. These have NOT been independently
verified against a disassembly. No public source, format spec, or
disassembly was located for any version, so every data-format field remains
TODO.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: usage is heavily
concentrated in the author and one collaborator (both Oneway), the Sonic
Graffiti joint-copyright claim on the original release is real but
unresolved as to code-level impact, and no public source or format spec
could be located -- so data-format fields are an honest `TODO`. Entry
points ($0FF9/$0FFE) are now documented from PRG2SID but await independent
verification. DeepSID's cached spec table carries two runtime-flavored
hints (`zero_pages: None`, an approximate play-routine cost in rasterlines)
-- recorded here as citations, not treated as independently confirmed.

## Disassembly notes

None. No public source or existing disassembly was found for this player.
A future pass would need to pick a representative System6581-tagged `.sid`,
confirm its init/play addresses match the PRG2SID-documented $0FF9/$0FFE,
and disassemble from there -- there is no shortcut via a published source
archive (unlike, e.g., `odintracker.md`).

## Verification

**Not verified -- `status: in-progress`.** Entry points ($0FF9 init,
$0FFE play, both v1 and v2) are now confirmed from PRG2SID by iAN
CooG/HVSC (aminet readme, CSDb release 260620), a mature tool that has
identified and patched this player's signature for years. This is a
credible public source for these Tier 3 facts and lifts the card from
`stub` to `in-progress`. Identity/provenance facts (author, group,
release chain, CSDb ids, usage counts, composer concentration, Sonic
Graffiti collaboration claim on the original release) are confirmed from
CSDb release/group/scener pages, the cached SIDId/DeepSID entries, and
local per-composer file counts.

The entry points have NOT been independently verified by reassembling a
System6581-tagged `.sid` and tracing it through `sidm2-siddump`. All
data-format, ZP, speed-model, and memory-layout fields remain TODO
pending an actual disassembly.

## Sources

See the `sources` array -- the CSDb release pages (ids 27434 and 122173),
the CSDb group/scener pages (ids 6372 and 3110), the cached SIDId entry
(`System6581`), the cached DeepSID players.json entry ("System 6581"),
the PRG2SID documentation and aminet readme, and the local per-composer
usage counts in `data/composers/*.json`.

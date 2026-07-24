# Sonic Graffiti Music Editor

<!--
  Card updated 2026-07-24: Tier 1+2 re-researched. Added "Sonic-Editor V1.0" alias
  from CSDb AKA field, tightened platform field, added Lemon64 forum source for the
  System 6581 collaboration backstory, noted additional CSDb group members.
  No public source or disassembly found — status remains stub. Every Tier 3 field
  is honestly TODO.
-->

```json
{
  "id": "sonic-graffiti",
  "name": "Sonic Graffiti Music Editor",
  "aliases": ["Sonic_Graffiti", "Sonic-Editor V1.0"],
  "authors": ["Andy Lumley"],
  "released": "1989",
  "status": "stub",
  "platform": "Native C64 tool — an in-house music editor coded for the UK scene/music group Sonic Graffiti, used to produce the group's own compositions rather than distributed as a general-purpose tracker.",
  "csdb_release": 122160,

  "memory": {
    "load_address": "TODO: no public disassembly found",
    "zero_page": "TODO: no public disassembly found",
    "layout": "TODO: no public disassembly found"
  },
  "entry": {
    "init": "TODO: no public disassembly found",
    "play": "TODO: no public disassembly found"
  },
  "speed": "TODO: no public disassembly found",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public disassembly found",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Composer concentration confirms this is an in-house group tool, not a published editor: all 29 files tagged Sonic_Graffiti in this project's dataset trace to just 4 composers — 'Graffiti Sonic' (12), Ben Hayes (6), Gerard Gourley (6), Deek (5) (aggregated from data/composers/*.json).",
    "Those exact names — Ben Hayes, Deek, Gerard Gourley — appear as credited Musicians of the CSDb group 'Sonic Graffiti' (https://csdb.dk/group/?id=5067, UK music group active 1989-1991), alongside coder Andy Lumley and two additional members (Chris, coder/musician; David Hayes, coder, joined 1990). This corroborates the SIDId identification: the editor was written by the group's coder for its own musicians, not released as a standalone product.",
    "TOOL CROSSOVER — surfaced 2026-07-17 by a composer-overlap connection scan. The group's four musicians did NOT use only this in-house editor: all four (Ben Hayes, Gerard Gourley, 'Graffiti Sonic', Deek) also produced files fingerprinted to [[system6581]], the Swedish Oneway-group editor by Fredrik Hederstierna (Zizyphus) — where they are collectively that tool's SECOND-largest user cohort (~29 files, after only Oneway's own Moppe and Zizyphus). So Sonic Graffiti's coder built the group an in-house tool AND its musicians adopted an unrelated foreign editor. This is a shared-USERS link between the two players, not shared code (different coders, Lumley vs Hederstierna); no `shares_routine_with` edge is asserted.",
    "The System 6581 collaboration had a deeper backstory: per a Lemon64 forum thread (https://www.lemon64.com/forum/viewtopic.php?p=1015640), Gerard Gourley had a co-operation agreement with Fredrik of System 6581 — Gourley could use the System 6581 editor (described as 'far superior to his own') in exchange for acting as their UK manager. The arrangement soured after Gourley allegedly failed to pay for the Shadow of the Beast score and sold two of Fredrik's tracks without permission. Separately, the JCH tune 'Chordian.sid' was used in the game Stack Up with Gourley's credits instead of Vibrants as promised.",
    "No public source, disassembly, or format documentation was found (CSDb release page only lists a T64 download and credits, no technical write-up)."
  ],
  "sources": [
    "SIDId sidid.nfo entry (data/sidid.json byTag.Sonic_Graffiti): name \"Sonic Graffiti Music Editor\", author \"Andy Lumley\", released \"1989 Sonic Graffiti\", reference https://csdb.dk/release/?id=122160",
    "CSDb release: Sonic Graffiti Music Editor V1.0, AKA Sonic-Editor V1.0, 1989, code by Andy Lumley, group Sonic Graffiti, download count 249 — https://csdb.dk/release/?id=122160",
    "CSDb group: Sonic Graffiti (United Kingdom, music group, active 1989-1991; members: Andy Lumley/coder, Ben Hayes/musician, Chris/coder+musician, David Hayes/coder (joined 1990), Deek/graphician+musician, Gerard Gourley/musician (joined 1990), Sonic Graffiti/musician) — https://csdb.dk/group/?id=5067",
    "Local dataset: 29 files tagged Sonic_Graffiti (counted from data/composers/*.json)",
    "Local composer aggregation (data/composers/*.json): Ben Hayes 6 files, Deek 5, Gerard Gourley 6, Graffiti Sonic 12",
    "Lemon64 forum thread with Gerard Gourley / System 6581 collaboration backstory (Fredrik of System 6581, JCH/Chordian of Vibrants, Deek as intermediary) — https://www.lemon64.com/forum/viewtopic.php?p=1015640"
  ]
}
```

## Overview

Sonic Graffiti Music Editor is a native Commodore 64 music tool coded by Andy
Lumley in 1989 for Sonic Graffiti, a UK-based scene music group. SIDId
identifies files it produced with the `Sonic_Graffiti` signature tag (29
files in this project's dataset, counted from `data/composers/*.json`). It
has no curated entry in `data/players.json`; it is known here purely through
the SIDId index and this project's own composer-usage aggregation. Everything
found so far points to an in-house tool rather than a widely-distributed
editor: it was built by the group's own coder and used only by the group's
own musicians.

The group's musicians also adopted System 6581, Fredrik Hederstierna's
Swedish editor (see `[[system6581]]`), as a second tool — Gerard Gourley had a
co-operation agreement with System 6581 allowing use of their editor in
exchange for UK management representation. The arrangement later collapsed
acrimoniously (per a Lemon64 forum thread). The System 6581 original release's
instructions even carry a joint copyright line "Player & Editor (c) Sonic
Graffiti/SYS6581," reflecting the collaboration period.

## Quirks & gotchas

- All 29 files in the dataset tagged `Sonic_Graffiti` belong to just four
  composers, and every one of those composer names — Ben Hayes, Deek, Gerard
  Gourley, and "Graffiti Sonic" itself — matches a credited member of the
  CSDb group "Sonic Graffiti" (https://csdb.dk/group/?id=5067). This is
  strong corroborating evidence (not a coincidence of similar names) that
  the editor was a personal/group tool, never released for outside use.
- The CSDb group has two additional members who are NOT among the four
  composers using this editor: Chris (coder/musician) and David Hayes
  (coder, joined 1990). Neither appears as a `Sonic_Graffiti`-tagged
  composer in the local dataset, suggesting they may have joined after the
  editor's active use period, or used other tools.
- The System 6581 connection is a shared-USER link, not shared code. The
  two tools have different coders (Lumley vs Hederstierna). See the
  `[[system6581]]` card for that tool's disassembly and verified runtime
  facts.
- No source code, disassembly, or format write-up was found anywhere
  searched (CSDb, Codebase64, GitHub, Lemon64, Forum64, general web). The
  CSDb release page for the editor (https://csdb.dk/release/?id=122160)
  only carries a T64 download and credit line.

## Disassembly notes

None performed. No public source is available, and no existing disassembly
was found, so a memory map / entry points / data format would have to come
from disassembling a representative `.sid` from scratch — not done in this
pass.

## Verification

**Not verified — `status: stub`.** Only identity facts (author, year, the
group/composer-concentration corroboration, and the System 6581 collaboration
backstory) are confirmed, from the cached SIDId entry, CSDb's release and
group pages, and a Lemon64 forum thread. Every runtime field is `TODO`; no
disassembly or source was available to fill Tier 3.

## Sources

See the `sources` array — the cached SIDId entry, the CSDb release page for
the editor (which lists "Sonic-Editor V1.0" as an AKA), the CSDb group page
for Sonic Graffiti (which corroborates the composer names and lists two
additional members), a Lemon64 forum thread documenting the System 6581
collaboration backstory, and this project's own local dataset aggregation
(`data/composers/*.json`).

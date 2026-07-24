# SYNC (SYNdrom Composer)

```json
{
  "id": "sync",
  "name": "SYNC (SYNdrom Composer)",
  "aliases": ["SynC"],
  "authors": ["Matthias Hartung (The Syndrom, of Crest / The Imperium Arts)"],
  "released": "1996 (64'er Music Editor v1.0); 1998 (SYNC V1.02/V1.14, final revision V1.14++)",
  "status": "stub",
  "platform": "Native C64 editor. Closed-source freeware (no public source for the SYNC versions). The predecessor 64'er Music Editor v1.0 (1996) does have source code published as a .txt file on CSDb (release 129790), but this is the earlier editor — not the SYNC V1.x player runtime that generated the 107 files in the dataset.",
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
  "speed": "DeepSID players.json 'speeds': \"1x to 4x + 6x (up to 9x in updated versions)\" — multispeed support improved in V1.14++. CPU time approximately 41-45 rasterlines (DeepSID 'cpu_time' field). Runtime mechanism (CIA vs raster) not documented publicly.",

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
    "Name history: the earliest release was the '64'er Music Editor v1.0' (July 1996, CSDb release 129790) by The Syndrom, before being renamed SYNC/SYNdrom Composer for the V1.02/V1.14 releases (1998). SIDId's comment confirms: \"The first releases of this editor were released under the name '64'er Music Editor'\" (data/sidid.json, byTag.SynC.comment). A CSDb user comment on release 7850 also notes this naming history and links to the v1.0 predecessor (release 129790).",
    "The 64'er Music Editor v1.0 (CSDb 129790) has downloadable source code ('64er_Music_Player_v1_source.txt') — but this is the earlier editor, not the SYNC V1.x player. DeepSID's players.json lists 'source_code': 'No' for SYNC v1.x, confirming the SYNC-era player runtime has no public source.",
    "EXPLICIT LYRIC DMC 6.0 RELATIONSHIP (Lemon64 forum thread, 2009): multiple knowledgeable scene members clarified that DMC 6.0 was a special internal SID player used within the Syndrom group's demos, with very low raster time (~$0A = ~10 lines), limited sound capabilities, and never publicly released. SYNC (SYNdrom Composer) is a DIFFERENT player that uses significantly more raster time (~41-45 lines per DeepSID). The statement 'DMC 6 is not SYNC. SYNC uses way more raster time than DMC 6' (Stryyker, quoted by Richard/TND) is direct scene-author testimony. The confusion arose because DMC 6.0 was the internal player of the Syndrom productions, while SYNC is the publicly released editor; they are separate codebases that happen to share the same author's group name. The dmc.md card already flags the naming confusion from the DMC side.",
    "Codebase64 wiki lists 'Microtracker V1.0' — a 'minimalistic Musicplayer using max 6 Rasterlines, by The Syndrom' (https://codebase64.net/doku.php?id=base:sid_programming). This may be related to or derived from the DMC 6.0 internal player mentioned above (the ~10 vs ~6 rasterline discrepancy is within scene-approximation range), but no direct link to SYNC's editor or player runtime is documented. Recorded here for future researchers following the The Syndrom output trail.",
    "SIDId's tag is 'SynC' (mixed case); DeepSID's players.json title is 'SYNC v1.x'. Both refer to the same tool; this card's alias list uses the raw SIDId/COVERAGE tag 'SynC' since that's the literal dataset signature name.",
    "There appear to be two distinct CSDb release entries for the same SYNC V1.02/V1.14 tool: DeepSID's players.json points at csdb_id 89184 (released by The Imperium Arts, credited to The Syndrom of Crest/The Imperium Arts), while SIDId's 'reference' field points at csdb.dk/release/?id=7850 (same title, credited to The Syndrom of Crest/Pretzel Logic/The Imperium Arts). Both describe the same editor with slightly different group-credit lists. This card uses 89184 (DeepSID's canonical csdb_release) and also records 7850 and the predecessor 129790 (64'er Music Editor v1.0) in Sources.",
    "Composer concentration: 107 files in the local dataset span only 14 composers, and the top two — 'Syndrom The' (28 files, ~26%) and 'Stryyker' (24 files, ~22%) — make up nearly half the total; the author himself is the single largest user. This reads as a small demoscene-group tool (Crest / The Imperium Arts) that a handful of scene composers adopted, not a widely-published mainstream tracker (aggregated from data/composers/*.json).",
    "source_code and docs are both explicitly 'No' in DeepSID's players.json for the SYNC v1.x entry — no public source or manual has been found for the SYNC-era player runtime; every Tier 3 field below is honestly TODO for that reason.",
    "Additional evidence of The Syndrom's direct hands-on involvement with DMC internals (beyond the 'inspired by' claim): a CSDb-catalogued C64 utility, 'All Round Music Relocator', was written by The Syndrom/TIA specifically to relocate DMC-format tunes (DMC V1 through DMC V5, plus a few JCH NewPlayer versions) to arbitrary memory addresses. This shows the author worked directly with DMC's binary tune format, which is consistent with (but still not proof of) SYNC's player sharing code with DMC — recorded as supporting context only, still no `derives_from` edge asserted.",
    "Forum64.de (German-language C64 forum) was searched explicitly for this card (domain-restricted web search plus a direct page fetch, which returned HTTP 403) — no thread specifically discussing SYNC/SYNdrom Composer, Matthias Hartung, or 64'er Music Editor was found. The only Syndrom/DMC-adjacent Forum64 content surfaced was unrelated general C64 tooling discussion. claude-in-chrome browser tools (for JS-rendered/login-gated forum pages) were not available in this session, so a live-browser check of Forum64's own search could not be completed; a manual visit to forum64.de's search by a future researcher may still turn up something this pass didn't."
  ],
  "sources": [
    "DeepSID players.json (local cache, data/players.json, 'SYNC v1.x' entry) — authorship, years, platform, speeds, instrument/pattern counts, zero-page/CPU-time notes, source_code=No/docs=No, DMC-inspiration claim",
    "SIDId (data/sidid.json byTag.SynC) — name 'SYNdrom Composer', author 'Matthias Hartung (The Syndrom)', reference csdb.dk/release/?id=7850, 64'er Music Editor naming history",
    "CSDb release (DeepSID's csdb_release): https://csdb.dk/release/?id=89184 (\"SYNC V1.02/V1.14\", The Imperium Arts, 1998, code+music by The Syndrom of Crest/The Imperium Arts)",
    "CSDb release (SIDId's reference, same tool): https://csdb.dk/release/?id=7850 (\"SYNC V1.02/V1.14\", credited to The Syndrom of Crest/Pretzel Logic/The Imperium Arts; user comment notes 64'er Music Editor origin and links to V1 predecessor)",
    "CSDb release (predecessor): https://csdb.dk/release/?id=129790 (\"64'er Music Editor v1.0\", July 1996, includes downloadable source code '64er_Music_Player_v1_source.txt' and D64 disk image; user Fred notes 'later versions of this editor were released under the name SYNC V1.02/V1.14')",
    "Lemon64 forum thread (2009): https://www.lemon64.com/forum/viewtopic.php?t=24476 — scene-author clarification that DMC 6.0 was an internal Syndrom-group player (~$0A raster lines, never publicly released) and is NOT the same as SYNC (which uses ~41-45 raster lines per DeepSID)",
    "Codebase64 SID programming wiki: https://codebase64.net/doku.php?id=base:sid_programming — lists 'Microtracker V1.0' by The Syndrom (minimalistic player, max 6 rasterlines)",
    "knowledge/players/dmc.md — cross-reference for the DMC 6.0 naming confusion and DMC-inspiration claim",
    "Local dataset: 107 files tagged SynC across 14 composers (see knowledge/COVERAGE.md) — independently recounted directly from data/composers/*.json during this pass: totals and per-composer breakdown (Syndrom The 28, Stryyker 24, Agemixer 14, Dwayne Bakewell 14, Jammic 5, DaFunk 5, Fanta 4, Control 3, Cube 3, AMB 2, Voice Dr 2, Booker 1, Orcan 1, Pernet 1) match exactly",
    "CSDb release https://csdb.dk/release/?id=10758 (\"DMC Relocator\" by Graffity, 1991) and web search results describing 'All Round Music Relocator by The Syndrom/TIA' — a DMC-tune relocator tool, evidence of The Syndrom's direct work with DMC's binary format",
    "Forum64.de (https://www.forum64.de/) — searched for SYNC/SYNdrom Composer/Matthias Hartung during this pass; direct fetch returned HTTP 403, domain-restricted web search returned no SYNC-specific threads (see quirks)"
  ]
}
```

## Overview

SYNC (full name "SYNdrom Composer", raw tag `SynC`) is a native C64 music
editor by Matthias Hartung, using the handle **The Syndrom** of the groups
Crest / The Imperium Arts. It began as the "64'er Music Editor v1.0" in July
1996 (CSDb 129790) and was rebranded for the SYNC V1.02/V1.14 releases in
1998-1999, with V1.14++ as the final revision featuring improved multi-speed
support (up to 9x). It is freeware, closed-source for the SYNC-era runtime
(the earlier 64'er Music Editor v1.0 does have published source code on CSDb,
but this is the predecessor editor, not the SYNC player). DeepSID's own
curated entry states the editor "was inspired by DMC v5.x" and describes its
order-list/sector layout as "DMC; Order list with one sector shown" — a stated
design lineage to Brian/Graffity's DMC, carded separately at [dmc](dmc.md).
The DMC 6.0 confusion (sometimes SYNC is mislabeled "DMC V6") stems from DMC
6.0 having been the internal player of the Syndrom group's demo productions —
a separate, never-released codebase with very low raster time (~10 lines),
distinct from the SYNC editor and its player runtime (~41-45 raster lines).
In the local dataset it sits at 107 files, concentrated in a small circle of
14 composers headed by the author himself and by "Stryyker" — consistent with
a scene-group tool (Crest/TIA) rather than a widely-adopted mainstream tracker.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) the DMC-inspiration claim
comes straight from DeepSID's own players.json text and its `track_system`
field literally naming "DMC" — real evidence, but "inspired by" is weaker than
a source-code derivation claim, so this card records it as prose only and does
NOT assert a `derives_from` edge; (2) SYNC is NOT the same as DMC 6.0 —
multiple scene sources (Lemon64 2009, dmc.md) confirm DMC 6.0 was an internal
player for Syndrom demos, never publicly released, while SYNC is the public
editor with a different, much heavier player runtime; (3) the 64'er Music
Editor v1.0 (1996) has published source code on CSDb, but this is the earlier
editor, not the SYNC V1.x player — DeepSID confirms no public source for the
SYNC-era runtime; (4) Codebase64 lists a "Microtracker V1.0" by The Syndrom
(minimalistic, ~6 rasterlines), possibly related to the DMC 6.0 internal
player, not currently linked to SYNC's editor or player.

## Disassembly notes

None done here. No public source or format documentation exists for the SYNC
V1.x player runtime (`source_code`/`docs` are both "No" in DeepSID's
players.json). The 64'er Music Editor v1.0 source code on CSDb (release
129790, `64er_Music_Player_v1_source.txt`) is for the earlier editor and has
not been read or disassembled here — it may provide clues about the data
format ancestry but would not directly document the SYNC V1.x player that
generated the 107 dataset files.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release history from 64'er Music Editor v1.0 through SYNC V1.14++, CSDb
releases, editor-level feature summary from DeepSID, the DMC 6.0 internal-
player distinction from scene sources) are confirmed and cited. No source or
disassembly exists for the SYNC V1.x player runtime, so every Tier 3 field
(memory map, entry points, effect encoding) is honestly `TODO`. The
64'er Music Editor v1.0 source code on CSDb could provide format clues but
has not been inspected — it predates the SYNC rebrand and its player may
differ from the SYNC-era runtime.

## Sources

See the `sources` array — DeepSID's curated `players.json` entry (the direct
source for the DMC-inspiration claim, editor feature fields, zero-page note,
and CPU time), the cached SIDId entry, three CSDb release pages (89184, 7850
for SYNC V1.02/V1.14; 129790 for the 64'er Music Editor v1.0 predecessor
with downloadable source code), the key Lemon64 2009 thread clarifying the
DMC 6.0 vs SYNC distinction, the Codebase64 SID programming wiki for the
Microtracker V1.0 reference, and the sibling `dmc.md` card.

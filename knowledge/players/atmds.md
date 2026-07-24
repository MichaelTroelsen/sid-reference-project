# Acid Track Music Development System (ATMDS)

```json
{
  "id": "atmds",
  "name": "Acid Track Music Development System (ATMDS)",
  "aliases": ["ATMDS_1.x", "ATMDS_3.x", "ATMDS", "Acid Track Creator"],
  "authors": ["Stefan Hübner (St0fF, Neoplasia)"],
  "released": "1997 (v1.1/v1.2, as \"Acid Track Creator\"); v3.2 in 2001, both Neoplasia",
  "status": "stub",
  "platform": "Native C64 tool. Codebase64's tools listing describes it as \"an Editor for coders, style based on the DMC-series\" — a music editor aimed at coders rather than a general tracker.",
  "csdb_release": 7159,

  "memory": {
    "load_address": "TODO: no public source or disassembly found",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO: no public source or disassembly found",
    "play": "TODO"
  },
  "speed": "TODO: not documented publicly",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Codebase64's tools wiki states: \"ATMDS v3.2 by St0fF / Neoplasia, AcidTrackMusicDevelopmentSystem - an Editor for coders, style based on the DMC-series.\" This is the only lineage lead found for this tool — a third-party wiki description saying the *editor's style* is DMC-like, not an author statement or source-header proof of shared runtime code, so it is NOT asserted as a `derives_from` edge (editor-style resemblance is not evidence of shared code, same rule already applied elsewhere in this KB) — recorded here only as an unconfirmed lead.",
    "At least three distinct versions share the ATMDS name, all credited solely to St0fF of Neoplasia: \"Acid Track Creator\" v1.1 (1997, CSDb release 129844), \"Acid Track Creator\" v1.2 (August 1997, CSDb release 96915, credits St0fF for code/music, St0fF and Viscid for text), and the renamed \"Acid Track Music Development System\" v3.2 (2001, CSDb release 7159). The 1997→2001 gap and the rename suggest a single author's tool evolving under two labels rather than a handoff. SIDId only tracks two tags (`ATMDS_1.x`/`ATMDS_3.x`), so v1.2 is presumably subsumed under `ATMDS_1.x`.",
    "Composer concentration is total: every file in this project's local dataset tagged ATMDS_1.x or ATMDS_3.x (16 of 16 — 11 v3.x + 5 v1.x) belongs to St0fF's own composer folder (`data/composers/stoff.json`). This reads as a personal/author-showcase tool rather than one that got picked up by the wider scene, consistent with SIDId's comment tying it to Neoplasia specifically. Confirmed further by the v3.2 release's own bundled SID list on CSDb: of its five included tunes, four are St0fF's own (\"Da Groove\", \"Happyness 2002\", \"My Insanity\", \"The Confusion in My Mind\") and one guest track (\"Hardcore Power\" by Edwin van Santen/20CC) is tagged `player: \"20CC\"` in this project's local data (data/composers/van-santen-edwin.json), not ATMDS — i.e. even the tool's own showcase disk didn't get a second composer's ATMDS-made tune, only a guest track made with a different player.",
    "No public source code was found (CSDb release pages for all three versions, Codebase64, Lemon64 forum search, Forum64 (forum64.de) search, and general web search checked) — only the compiled tool/disk-image downloads (`ATMDS-3-2.zip` and a Pokefinder.org mirror for v3.2; `atc_v1.1.d64` for v1.1). Licence is unstated. Treat as closed; every Tier 3 field stays TODO."
  ],
  "sources": [
    "sidid:ATMDS_3.x (author Stefan Hübner (St0ff), released 2001 Neoplasia, CSDb release 7159, comment \"Also known as Acid Track Creator\") — data/sidid.json",
    "sidid:ATMDS_1.x (author Stefan Hübner (St0ff), released 1997 Neoplasia, CSDb release 129844) — data/sidid.json",
    "CSDb release (ATMDS v3.2, 2001, Neoplasia, sole credit St0fF, 5 bundled SIDs incl. 1 guest track): https://csdb.dk/release/?id=7159",
    "CSDb release (Acid Track Creator v1.1, 1997, Neoplasia, sole credit St0fF): https://csdb.dk/release/?id=129844",
    "CSDb release (Acid Track Creator v1.2, August 1997, Neoplasia, code/music St0fF, text St0fF+Viscid): https://csdb.dk/release/?id=96915",
    "Codebase64 tools wiki, \"style based on the DMC-series\" description: https://codebase64.net/doku.php?id=tools:start",
    "Local dataset: 11 files tagged ATMDS_3.x, 5 tagged ATMDS_1.x; all 16 traced to data/composers/stoff.json; guest track \"Hardcore Power\" cross-checked in data/composers/van-santen-edwin.json (tagged player 20CC, not ATMDS)",
    "Lemon64 forum search (no ATMDS/Acid Track/St0fF results in general C64-music-editor threads, e.g. https://www.lemon64.com/forum/viewtopic.php?t=67248) and Forum64 (forum64.de) search — no dedicated ATMDS thread found on either"
  ]
}
```

## Overview

ATMDS (Acid Track Music Development System, also released as "Acid Track
Creator") is a native C64 music editor by Stefan Hübner (St0fF) of the group
Neoplasia, with at least three documented releases: v1.1 and v1.2 in 1997 and
v3.2 in 2001 (SIDId `ATMDS_1.x` / `ATMDS_3.x`; CSDb release 129844 / 96915 /
7159). Codebase64's tools wiki describes it as "an Editor for coders, style
based on the DMC-series," which is the only lineage evidence found. In this
project's local dataset every single ATMDS-tagged file (16 of 16, both SIDId
versions combined) was composed by St0fF himself — even the v3.2 release's own
five-track showcase disk on CSDb includes only one non-St0fF tune, and that
guest track (Edwin van Santen/20CC's "Hardcore Power") was made with 20CC's
own player, not ATMDS. This marks ATMDS as a personal/small-scene tool that
never spread beyond its author, rather than a widely-adopted one — reflected
here with `status: stub` since no runtime facts could be sourced. A Lemon64
and Forum64 search turned up no dedicated discussion thread for the tool.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) a third-party wiki's
"style based on the DMC-series" phrasing is the only lineage lead found, but
it describes editor style, not shared runtime code, so no `derives_from` edge
is asserted; (2) composer concentration is 100% St0fF — no other
composer in the local dataset used this tool, and even the tool's own release
disk's one guest tune was made with a different player; (3) no public source
was located anywhere searched, including Lemon64 and Forum64, so this card is
identity/provenance-only; (4) there are at least three named releases (v1.1,
v1.2, v3.2) though SIDId only distinguishes two tag generations.

## Disassembly notes

None — no public source or disassembly was found for ATMDS in either version.
The only available artifacts are the compiled tool downloads on CSDb
(`ATMDS-3-2.zip`, `atc_v1.1.d64`). A future pass would need to disassemble a
representative `.sid` from `data/composers/stoff.json` (e.g. `Da_Groove.sid`,
CSDb SID id 27811) to fill any Tier 3 field.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release years, CSDb release ids, the DMC-style claim, composer concentration)
are sourced, all from the cached SIDId entries, CSDb release pages, and
Codebase64. No memory map, entry point, or data format has been confirmed;
every Tier 3 field is `TODO` as required, not guessed.

## Sources

See the `sources` array — the cached SIDId entries for `ATMDS_1.x`/`ATMDS_3.x`,
the two CSDb release pages (7159, 129844), the Codebase64 tools wiki, and this
project's local composer data (`data/composers/stoff.json`).

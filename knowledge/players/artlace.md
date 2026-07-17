# Artlace Editor (ARL-Editor)

```json
{
  "id": "artlace",
  "name": "Artlace Editor (ARL-Editor)",
  "aliases": ["Artlace"],
  "authors": ["Artúr Bujdosó (Artlace)"],
  "released": "1993 (Rebels)",
  "status": "stub",
  "platform": "Native C64 tool: own editor + its own C64 replay routine (DeepSID players.json lists platform as \"Native / C64 emulator\"; CSDb classifies the release itself as a \"C64 Tool\")",
  "csdb_release": 152723,

  "memory": {
    "load_address": "TODO: $xxxx (not disassembled)",
    "zero_page": "DeepSID player database (data/players.json) states \"Approx 2-3 bytes ($FA-$FC)\" — an unverified DeepSID-supplied estimate, not confirmed by disassembly here",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "TODO: $xxxx (not disassembled)",
    "play": "TODO: $xxxx (not disassembled)"
  },
  "speed": "DeepSID player database (data/players.json) states \"Approx 28-32 rasterlines [SD]\" per play call — an unverified DeepSID-supplied estimate; actual speed model (1x/multispeed, raster vs CIA) is TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "100% single-composer concentration: all 19 files tagged \"Artlace\" in the local dataset (data/composers/artlace.json) belong to Artúr Bujdosó (Artlace) himself — no other composer's files use this player tag. Classic signature of a personal/home-grown routine rather than a widely-adopted tool (per this project's CLAUDE.md guidance on composer concentration as signal).",
    "The CSDb release (id 152723, \"ARL-Editor V2.2\" aka \"Artlace-Editor V2.2\") is typed as a generic \"C64 Tool\", not a dedicated music-editor category, and its Code/Music/Docs credits are all Artlace alone (data/csdb/artlace.json, CreditType entries for Release 152723).",
    "Artlace's own output is NOT exclusively tied to this player: other tunes by the same composer in the same folder are tagged DMC, DMC_V4.x, Music_Assembler, and GoatTracker_V2.x (data/composers/artlace.json) — so ARL-Editor was one of several tools he used across his career, not his only routine.",
    "A later CSDb release, \"Artlace Editor V26x\" (id 168740, found via web search but NOT cross-checked against the local dataset's tags), may represent a further revision — not confirmed to be the same player family as this stub covers; flagged for a future pass rather than merged here without evidence.",
    "No public source code or disassembly was found for this player (WebSearch for \"Artlace Editor\"/\"ARL-Editor\" source/disassembly returned no matches) — only a D64 disk image and an unencrypted PRG binary are distributed from CSDb."
  ],
  "sources": [
    "sidid:Artlace — data/sidid.json byTag.Artlace (name, author, released, reference; matches github.com/cadaver/sidid sidid.nfo verbatim, fetched 2026-07-16)",
    "DeepSID player database entry \"Artlace Editor v2.x\" — data/players.json (platform, csdb_id, zero_pages, cpu_time fields)",
    "CSDb release page — https://csdb.dk/release/?id=152723 (\"ARL-Editor V2.2\", type C64 Tool, released 1993-09-19 by Rebels, credits: Artlace — Code/Music/Docs)",
    "Cached CSDb scener data — data/csdb/artlace.json (Credits.Credit entries for Release 152723; group memberships)",
    "Local file listing — data/composers/artlace.json (19 files tagged player \"Artlace\", all authored by Artlace)",
    "knowledge/COVERAGE.md — rank 16, 19 files, single grouped raw tag \"Artlace\""
  ]
}
```

## Overview

Artlace Editor (ARL-Editor) is a native C64 music tool by Hungarian
demoscene coder/musician Artúr Bujdosó, handle **Artlace** (member of Rebels,
Lethargy, Acrise, Active, Excess, and others per CSDb). Version 2.2 was
released 19 September 1993 by Rebels, credited to Artlace alone for code,
music, and documentation (`csdb.dk/release/?id=152723`). It is one of
several tools Artlace used to produce his own SID tunes — his output in the
local HVSC dataset also carries `DMC`, `DMC_V4.x`, `Music_Assembler`, and
`GoatTracker_V2.x` tags — but the "Artlace" player tag itself is used
**exclusively** by his own files: all 19 tunes tagged with it in
`data/composers/artlace.json` are his own compositions, and no other
composer in the local dataset uses it. That 100%-single-composer
concentration is the strongest signal available and points to a
personal/home-grown routine rather than a tool that ever spread through the
scene, consistent with CSDb typing the release as a generic "C64 Tool"
rather than a dedicated music-editor category.

## Quirks & gotchas

See the `quirks` array. The headline fact is the composer concentration
(19/19 files are Artlace's own) — this card exists mainly to record identity
and provenance for a small personal routine, not to document a widely-used
family. A possible later revision, "Artlace Editor V26x" (CSDb release
168740), was found during research but is not corroborated against any file
in the local dataset, so it is noted as an open question rather than merged
into this card's facts.

## Disassembly notes

None. No source code or disassembly was located publicly (see `quirks`), and
none was attempted here — this is Tier 1/2 identity and provenance research
only, per this card's scope.

## Verification

**Not verified — `status: stub`.** Identity facts (author, CSDb release,
release date, credits) are confirmed via the cached SIDId entry and CSDb's
own release/scener data. The two runtime-looking figures present
(`zero_page` ≈ $FA-$FC, `speed` ≈ 28-32 rasterlines) are carried over
verbatim from DeepSID's own player database (`data/players.json`) with their
DeepSID origin stated explicitly — they are NOT independently confirmed by
disassembly, and every other Tier 3 field (memory map, entry points, data
format, effects) is left `TODO` rather than guessed.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), DeepSID's player
database (`data/players.json`), CSDb's release page and cached scener/credit
data (`data/csdb/artlace.json`), and the local per-composer file listing
(`data/composers/artlace.json`).

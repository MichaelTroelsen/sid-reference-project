# Twynn

```json
{
  "id": "twynn",
  "name": "Twynn",
  "aliases": ["Twynn"],
  "authors": ["Ruud den Bekker (Twynn)"],
  "released": "No release year for a distributed player/tool (none exists). Earliest attested tune among the 13 'Twynn'-tagged files: 1992 (multiple tunes, CSDb type=sid census, e.g. Cool_One csdb.dk sid id 29657 'Released: 1992 Acrise'). Latest attested: 1999 (Booze Your Illusion tune 3, csdb.dk sid id 50442, 'Released: 1999 Acrise/Battery'). No 1991 file exists among these 13 — corrects an earlier unsourced '1991-1999' placeholder.",
  "status": "stub",
  "platform": "Native C64, in-tune routine — all 13 'Twynn'-tagged files carry player_type 'Normal built-in' in data/composers/twynn.json (i.e. hand-coded into the tune itself, not a separately loaded/distributed player module). No standalone editor, tool, or cross-platform component found.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: $xxxx",
    "zero_page": "TODO: which ZP addresses the play routine clobbers",
    "layout": "TODO: notes on where order lists / tables / patterns live"
  },
  "entry": {
    "init": "TODO: $xxxx (A/X/Y convention if any)",
    "play": "TODO: $xxxx (call rate / speed model)"
  },
  "speed": "TODO: 1x-Nx, CIA vs raster/VBI, how multispeed is signalled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: how a command byte is laid out",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Signature-only entry in SIDId's database (sidid.nfo): the raw record for tag 'Twynn' is just 'Twynn / AUTHOR: Ruud den Bekker (Twynn)' — no released date, no CSDb reference, no comment field. That's unusually thin even for a minor player, and matches everything else found here: no distributed editor/tool.",
    "Composer concentration is total: all 13 files tagged 'Twynn' in this dataset (data/composers/twynn.json) are by Twynn himself (Ruud den Bekker) — see knowledge/COVERAGE.md rank #25, 13 files, single grouped raw tag 'Twynn'. Per the project's concentration heuristic this is the strongest possible signal of a personal, in-tune playback routine rather than a published tool: nobody else's files carry this Player-ID tag.",
    "No CSDb release could be found for a Twynn music editor, player, or tool of any kind. His CSDb scener profile (csdb.dk/scener/?id=1062) lists only music/code/graphics/crack credits on demos and diskmags (e.g. Epistula #2/#3, The Party Demo!) — never a standalone utility. This is consistent with the routine being hand-coded into his own tunes and identified purely by Player-ID's binary signature matching, not a named/released product.",
    "Re-research pass, 2026-07-31: full census of all 13 'Twynn'-tagged files via CSDb's XML webservice (type=sid, one query per csdb_id from data/composers/twynn.json), replacing the prior spot-check/placeholder date range. Result: earliest attested release 1992, latest 1999 (see `released`); no 1991 file exists. Also re-pulled the CSDb scener profile at depth=4 (all MemberOf/credit records for Handle id 1062, handles Twynn/RDB/TPB) — every credit is typed Music/Code/Graphics/Text/Crack/Trainer/Charset/Linking; no credit of type Routine/Tool/Player anywhere in his history. Negative result stands: no distributed Twynn player/editor exists.",
    "Search-engine AI summary trap encountered and discarded: a web search for 'Twynn C64 SID player' returned an AI-generated summary asserting Twynn was 'a documented SID player/routine' with CSDb reference csdb.dk/release/?id=157105. Fetched that release directly via csdb-client.js (type=release, id=157105): it is 'Twice Effect Music Editor' (1991, C64 Tool) — an unrelated release (likely a fuzzy name match on 'Twice'/'Twynn'), nothing to do with Ruud den Bekker. Confirms this project's rule that AI search summaries are leads to verify by direct fetch, never sources; recorded here so a future pass doesn't re-chase it."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['Twynn'] — {\"author\": \"Ruud den Bekker (Twynn)\"} only (no name/released/reference/comment)",
    "Raw source: sidid.nfo (SIDId project) via github.com/cadaver/sidid, entry 'Twynn' — https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "knowledge/COVERAGE.md rank #25: 13 files, single raw tag 'Twynn', no source flag",
    "data/composers/twynn.json — composer profile (full_name Ruud den Bekker, country Netherlands, active 1999, csdb_id 1062) and all 13 'Twynn'-tagged files, all self-authored",
    "CSDb scener profile (checked for any editor/tool release, found none): https://csdb.dk/scener/?id=1062",
    "Player-ID project, which produces the Player-ID signature tags this dataset relies on: https://github.com/WilfredC64/player-id",
    "CSDb webservice census of all 13 'Twynn'-tagged CSDb sid entries (type=sid, depth=2), 2026-07-31: ids 50442 (1999 Acrise/Battery), 29657, 29658, 29660, 29661, 29662, 29663, 29665, 29666, 29667, 29668, 29670 (1992-1994), 57010 (1994 Silicon Limited) — https://csdb.dk/sid/?id=<id> for each; earliest 1992, latest 1999, no 1991 file",
    "CSDb scener profile (csdb.dk/scener/?id=1062) fetched at depth=4 via csdb-client.js, 2026-07-31 — full credit history checked for any Routine/Tool/Player credit type; none found",
    "Discarded lead: CSDb release https://csdb.dk/release/?id=157105 ('Twice Effect Music Editor', 1991, C64 Tool) — surfaced by a search-engine AI summary as a 'Twynn' player reference; verified unrelated on direct fetch"
  ]
}
```

## Overview

Twynn (Ruud den Bekker, Netherlands) is a C64 musician whose tunes are
identified by Player-ID under the signature tag "Twynn" — but no distributed
editor, tool, or standalone player release by that name exists on CSDb. In
this project's dataset all 13 files carrying the "Twynn" tag are composed by
Twynn himself (`data/composers/twynn.json`, `knowledge/COVERAGE.md` rank #25),
the strongest possible composer-concentration signal that this is a personal,
hand-coded playback routine embedded in his own tunes rather than a published
tool other musicians adopted; each of the 13 also carries `player_type:
"Normal built-in"`, i.e. it is compiled into the tune, not a loaded separate
module. SIDId's own record for the tag is minimal — author only, no release
date or reference — reinforcing that reading. A full census of all 13 files'
own CSDb `Released` fields (2026-07-31, correcting an earlier unsourced
estimate) puts the earliest attested tune at 1992 and the latest at 1999; no
1991 file exists.

## Quirks & gotchas

See the `quirks` array. The load-bearing point: this is very likely a
composer's own custom in-tune player, not a shared tool — 100% single-composer
concentration and no CSDb tool release found anywhere.

## Disassembly notes

None performed. No public source or documented disassembly was found to seed
Tier 3 facts from; a future pass would need to disassemble a representative
Twynn-tagged `.sid` (e.g. from `data/composers/twynn.json`) directly, since
there is no editor/format documentation to start from.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established,
from this project's own cached SIDId import and composer data, cross-checked
against CSDb for any missed tool release (none found). No runtime field is
filled; all are honestly `TODO`.

## Sources

See the `sources` array — the local `sidid.json`/`COVERAGE.md`/composer-data
extracts, the upstream `sidid.nfo` raw entry, and the CSDb scener profile
checked (and coming up empty) for a distributed tool.

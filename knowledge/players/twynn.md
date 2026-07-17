# Twynn

```json
{
  "id": "twynn",
  "name": "Twynn",
  "aliases": ["Twynn"],
  "authors": ["Ruud den Bekker (Twynn)"],
  "released": "TODO: no explicit release year found — Twynn's active period in the dataset/CSDb is 1991-1999",
  "status": "stub",
  "platform": "TODO: presumed native C64 (all known Twynn SIDs are C64 tunes) — no editor/tool release or platform statement found",
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
    "No CSDb release could be found for a Twynn music editor, player, or tool of any kind. His CSDb scener profile (csdb.dk/scener/?id=1062) lists only music/code/graphics/crack credits on demos and diskmags (e.g. Epistula #2/#3, The Party Demo!) — never a standalone utility. This is consistent with the routine being hand-coded into his own tunes and identified purely by Player-ID's binary signature matching, not a named/released product."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['Twynn'] — {\"author\": \"Ruud den Bekker (Twynn)\"} only (no name/released/reference/comment)",
    "Raw source: sidid.nfo (SIDId project) via github.com/cadaver/sidid, entry 'Twynn' — https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "knowledge/COVERAGE.md rank #25: 13 files, single raw tag 'Twynn', no source flag",
    "data/composers/twynn.json — composer profile (full_name Ruud den Bekker, country Netherlands, active 1999, csdb_id 1062) and all 13 'Twynn'-tagged files, all self-authored",
    "CSDb scener profile (checked for any editor/tool release, found none): https://csdb.dk/scener/?id=1062",
    "Player-ID project, which produces the Player-ID signature tags this dataset relies on: https://github.com/WilfredC64/player-id"
  ]
}
```

## Overview

Twynn (Ruud den Bekker, Netherlands, active in the scene from the early
1990s) is a C64 musician whose tunes are identified by Player-ID under the
signature tag "Twynn" — but no distributed editor, tool, or standalone player
release by that name exists on CSDb. In this project's dataset all 13 files
carrying the "Twynn" tag are composed by Twynn himself (`data/composers/twynn.json`,
`knowledge/COVERAGE.md` rank #25), the strongest possible composer-concentration
signal that this is a personal, hand-coded playback routine embedded in his own
tunes rather than a published tool other musicians adopted. SIDId's own record
for the tag is minimal — author only, no release date or reference — reinforcing
that reading.

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

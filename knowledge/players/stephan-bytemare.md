# Stephan/Bytemare (Music-Editor)

```json
{
  "id": "stephan-bytemare",
  "name": "Music-Editor (Bytemare)",
  "aliases": ["Stephan/Bytemare"],
  "authors": ["Stephan Schloepke (Magic Man)"],
  "released": "1990 Bytemare (SIDId); CSDb release id 125970 is titled \"Music-Editor V2\" and dated 1991 — see quirks for the discrepancy",
  "status": "stub",
  "platform": "Native C64 tool — editor + play routine on the C64 itself, distributed as a standalone D64 (not a cross-platform tracker). No evidence of a separate PC/cross-platform editor.",
  "csdb_release": 125970,

  "memory": {
    "load_address": "TODO: no disassembly",
    "zero_page": "TODO: no disassembly",
    "layout": "TODO: no disassembly"
  },
  "entry": {
    "init": "TODO: no disassembly",
    "play": "TODO: no disassembly"
  },
  "speed": "TODO: no disassembly",

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
    "Strong composer concentration: of the 22 SID files tagged `Stephan/Bytemare` in this collection, 19 (86%) are by a single composer, Lord MC (Karl Sommer, HVSC /MUSICIANS/M/MC_Lord/) — grep of data/composers/lord-mc.json vs the other 3 files (antitrack, man-magic, martinland, one each). Per the extraction template's rule of thumb, this concentration pattern (one dominant user) usually flags a personal/small-scene routine rather than a widely-adopted tool — notable here because the AUTHOR (Stephan Schloepke) and the dominant USER (Lord MC) are different people, i.e. one composer adopted another scener's editor as his tool of choice rather than writing his own.",
    "Group-bio tension: the Bytemare group's CSDb page (member comment by 'The Human Code Machine') states a music editor by member 'Stefan' was developed but \"never released to the public\" — yet CSDb separately lists a distributable release, \"Music-Editor V2\" (id 125970, 1991), with a downloadable D64 (284 recorded downloads). Recorded as-is; not resolved here whether V2 is a later actual release, a leak, or the bio comment refers to an earlier/different build.",
    "Year mismatch: SIDId's sidid.nfo entry says `RELEASED: 1990 Bytemare` while the CSDb release it references (125970) is dated 1991 and titled \"Music-Editor V2\" (implying a V1 existed). Left both figures in `released` rather than picking one.",
    "Author Stephan Schloepke (Magic Man, German scener active 1988-2014, member of Crazy/Enigma/Bytemare/Hitmen/etc.) has a SEPARATE, distinct SIDId player-ID tag, `Magic_Man/Crazy`, also authored by him. No source or statement was found linking the two tools' code, so no `edges` relationship is asserted between them — flagged here only as a fact worth re-checking if either gets disassembled."
  ],
  "sources": [
    "sidid.nfo (SIDId player-ID database) entry `Stephan/Bytemare`: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release \"Music-Editor V2\" (Bytemare, 1991, code+music by Magic Man): https://csdb.dk/release/?id=125970",
    "CSDb group page, Bytemare (active 1991-1992; member comment on the music editor's release status): https://csdb.dk/group/?id=7833",
    "CSDb scener page, Magic Man / MgM (Stephan Schloepke, Germany, active 1988-2014, groups incl. Bytemare): https://csdb.dk/scener/?id=702",
    "Local dataset: 22 files tagged `Stephan/Bytemare` (knowledge/COVERAGE.md, rank 8 of uncarded families); composer breakdown from data/composers/*.json (lord-mc.json ×19, antitrack.json/man-magic.json/martinland.json ×1 each)"
  ]
}
```

## Overview

`Stephan/Bytemare` is the SIDId/Player-ID signature for **Music-Editor**, a
native C64 music editor coded (and used) by Stephan Schloepke ("Magic Man"),
a German demoscene coder/musician active from 1988-2014 across groups
including Crazy, Enigma, Hitmen, and Bytemare itself. Bytemare, the releasing
group, was a short-lived (1991-1992) "legal" outfit that aimed to make games
and never shipped one; its own group bio calls the editor unreleased, yet
CSDb lists a distributable "Music-Editor V2" D64 from 1991. In this
collection it is a small, low-usage family — 22 files — and heavily
concentrated in one composer's hands: 19 of the 22 (86%) belong to Lord MC
(Karl Sommer), not Schloepke himself, suggesting one scener adopted another's
tool rather than a widely-published editor. No source or disassembly exists
here, so every runtime fact is `TODO`.

## Quirks & gotchas

See the `quirks` array — the load-bearing points are the 86%-Lord-MC usage
concentration (a personal-tool-adoption signal, not a "widely used" one), the
group-bio-vs-CSDb-release tension over whether the editor was ever actually
released, and the 1990-vs-1991 release-year mismatch between SIDId and the
CSDb entry it cites.

## Disassembly notes

None. No public source or disassembly was found for this editor/player; all
`memory`/`entry`/`speed`/`data_format`/`effects` fields are honestly `TODO`.
A future pass could disassemble a representative `Stephan/Bytemare`-tagged
`.sid` (e.g. from Lord MC's "Fred's Back" series) and trace it through
`sidm2-siddump` to recover entry points and speed model.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
CSDb release, group context, composer usage in this dataset) are confirmed,
from SIDId's sidid.nfo and CSDb. No runtime facts have been reverse-engineered.

## Sources

See the `sources` array — sidid.nfo, the CSDb release and group pages, the
CSDb scener page for Magic Man, and this project's local composer data
(`data/composers/*.json`) for the usage breakdown.

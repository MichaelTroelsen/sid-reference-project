# Stephan/Bytemare (Music-Editor)

```json
{
  "id": "stephan-bytemare",
  "name": "Music-Editor (Bytemare)",
  "aliases": ["Stephan/Bytemare"],
  "authors": ["Stephan Schloepke (Magic Man)"],
  "released": "1990 (Music-Editor V1, CSDb 158600); 1991 (Music-Editor V2, CSDb 125970). Released by Bytemare.",
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
    "Strong composer concentration: of the 22 SID files tagged `Stephan/Bytemare` in this collection, 19 (86%) are by a single composer, Lord MC (Karl Sommer, HVSC /MUSICIANS/M/MC_Lord/). The other 3 files are by antitrack, man-magic, and martinland (1 each). Per the extraction template's rule of thumb, this concentration pattern (one dominant user) usually flags a personal/small-scene routine rather than a widely-adopted tool — notable here because the AUTHOR (Stephan Schloepke) and the dominant USER (Lord MC) are different people, i.e. one composer adopted another scener's editor as his tool of choice rather than writing his own.",
    "Group-bio tension: the Bytemare group's CSDb page (member comment by 'The Human Code Machine', 15 Dec 2013) states a music editor by member 'Stefan' was developed but \"never released to the public\" — yet CSDb separately lists two distributable releases with downloadable D64s: \"Music-Editor\" V1 (1990, id 158600, 192 downloads) and \"Music-Editor V2\" (1991, id 125970, 287 downloads). Recorded as-is; not resolved whether these are actual public releases, leaks, or the bio comment refers to an earlier/different build.",
    "Two distinct CSDb releases exist: V1 (1990, id 158600) credits Magic Man (code + music), MC of Dutch USA-Team (additional music), and Gotcha of Byteriders/Crazy (docs). V2 (1991, id 125970) credits only Magic Man (code + music). This resolves the prior 1990-vs-1991 year discrepancy noted in older versions of this card.",
    "Author Stephan Schloepke (Magic Man, German scener active 1988-2014, member of Crazy/Enigma/Bytemare/Hitmen/etc.) has a SEPARATE, distinct SIDId player-ID tag, `Magic_Man/Crazy`, also authored by him (sidid.nfo). No source or statement was found linking the two tools' code, so no `edges` relationship is asserted between them — flagged here only as a fact worth re-checking if either gets disassembled.",
    "xsidplay2's sidfreq.cpp (r298, 2023-05-21, by ice00/Tognon Stefano) fixes a frequency-table detection error for this player: it uses a 440Hz-based note table with a specific deviation tolerance at note index 8 (G#/Ab, diff=25). This is a sidid.cfg detection helper, not a disassembly of the original player."
  ],
  "sources": [
    "sidid.nfo (SIDId player-ID database) entry `Stephan/Bytemare` — name, author, year, reference: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release \"Music-Editor\" V1 (Bytemare, 1990, code+music by Magic Man, docs by Gotcha, additional music by MC): https://csdb.dk/release/?id=158600",
    "CSDb release \"Music-Editor V2\" (Bytemare, 1991, code+music by Magic Man): https://csdb.dk/release/?id=125970",
    "CSDb group page, Bytemare (active 1991-1992; member comment on the music editor's release status): https://csdb.dk/group/?id=7833",
    "CSDb scener page, Magic Man / MgM (Stephan Schloepke, Germany, active 1988-2014, groups incl. Bytemare): https://csdb.dk/scener/?id=702",
    "xsidplay2 sidid.cfg — SIDId detection signature for Stephan/Bytemare (hex pattern 60 C9 FD D0 08 C8 98 9D ?? ?? 4C ?? ?? 18 69 40 9D ?? ?? C8): https://sourceforge.net/p/xsidplay2/code/HEAD/tree/trunk/xsidplay/sidid.cfg",
    "xsidplay2 sidfreq.cpp r298 — frequency-table error fix noting 440Hz tuning table for Bytemare Music Editor: https://sourceforge.net/p/xsidplay2/code/HEAD/tree/trunk/xsidplay/src/sidfreq/sidfreq.cpp",
    "Local dataset: 22 files tagged `Stephan/Bytemare` (19 lord-mc, 1 antitrack, 1 man-magic, 1 martinland — verified by grep of data/composers/*.json)"
  ]
}
```

## Overview

`Stephan/Bytemare` is the SIDId/Player-ID signature for **Music-Editor**, a
native C64 music editor coded (and primarily used) by Stephan Schloepke
("Magic Man"), a German demoscene coder/musician active from 1988-2014 across
groups including Crazy, Enigma, Hitmen, and Bytemare itself. Two versions are
documented on CSDb: V1 (1990, id 158600) with docs by Gotcha and additional
music by MC of Dutch USA-Team, and V2 (1991, id 125970) credited solely to
Magic Man. Bytemare, the releasing group, was a short-lived (1991-1992)
"legal" outfit that aimed to make games and never shipped one; its own group
bio calls the editor unreleased, yet both versions have downloadable D64s on
CSDb (192 and 287 downloads respectively). In this collection it is a small,
low-usage family — 22 files — and heavily concentrated in one composer's
hands: 19 of the 22 (86%) belong to Lord MC (Karl Sommer), not Schloepke
himself, suggesting one scener adopted another's tool rather than a
widely-published editor. No source or disassembly exists, so every runtime
fact is `TODO`.

## Quirks & gotchas

See the `quirks` array — the load-bearing points are the 86%-Lord-MC usage
concentration (a personal-tool-adoption signal, not a "widely used" one), the
group-bio-vs-CSDb-release tension over whether the editor was ever actually
released (now documented as two distinct V1/V2 releases with download counts,
making the bio claim harder to square), and the fact that Schloepke has a
separate, unrelated SIDId player tag (`Magic_Man/Crazy`).

The xsidplay2 project's sidfreq.cpp has a special-case fix for this player's
frequency table (440Hz base, specific tolerance at note index 8), confirming
the player routine uses a standard 440Hz A4 tuning — useful if anyone ever
disassembles the pitch-to-frequency-word table.

## Disassembly notes

None. No public source or disassembly was found for this editor/player; all
`memory`/`entry`/`speed`/`data_format`/`effects` fields are honestly `TODO`.
A future pass could disassemble a representative `Stephan/Bytemare`-tagged
`.sid` (e.g. from Lord MC's "Fred's Back" series) and trace it through
`sidm2-siddump` to recover entry points and speed model. The SIDId detection
signature from xsidplay2's sidid.cfg (`60 C9 FD D0 08 C8 98 9D ?? ?? 4C ?? ??
18 69 40 9D ?? ?? C8`) gives a known byte pattern to locate the play routine
in a binary.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
two CSDb releases, group context, composer usage in this dataset, SIDId
signature, frequency-table note) are confirmed, from SIDId's sidid.nfo, CSDb,
and xsidplay2. No runtime facts have been reverse-engineered.

## Sources

See the `sources` array — sidid.nfo, the two CSDb releases (V1 id 158600, V2
id 125970), the CSDb group and scener pages, xsidplay2's sidid.cfg and
sidfreq.cpp, and this project's local composer data (`data/composers/*.json`)
for the usage breakdown.

# ?MSB (MSB's personal in-game player)

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "msb",
  "name": "?MSB (MSB's personal in-game player)",
  "aliases": ["?MSB"],
  "authors": ["MSB"],
  "released": "1986 (tunes released via Uncle Ben's Soft; composer active 1984-1986)",
  "status": "stub",
  "platform": "TODO: native C64 in-game/replay routine (no editor identified; not a published tracker)",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: engine memory map not disassembled. PSID-header load address is $0801 on most sampled files (one, Sound_of_Silence, shows $083B) — see entry.init/entry.play note",
    "zero_page": "TODO: not disassembled",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "$083B — identical across every sampled file (Chiquita, Minuetto, Wizzy, Sound_of_Silence), read directly from each file's CSDb SID-entry page (PSID header metadata, not a disassembly)",
    "play": "$08F0 — identical across the same sampled files, same source"
  },
  "speed": "TODO: not disassembled (PSID header gives no speed/timing detail beyond entry points)",

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
    "The leading '?' in the raw tag '?MSB' is DeepSID's own low-confidence-match convention, not part of a filename or a formatting artifact. No entry for 'MSB' or '?MSB' exists in SIDId's sidid.nfo (checked both the local data/sidid.json snapshot and the live github.com/cadaver/sidid/master/sidid.nfo — zero matches either way), so this looks like DeepSID's own inference rather than a catalogued player/tool: it appears to be tagging a composer's own personal in-game routine with the composer's handle, the same pattern the project's build-html.js notes for tags like 'Rob_Hubbard' (see CLAUDE.md).",
    "Extreme composer concentration: exactly 1 composer (MSB) and 8 files carry this tag (data/composers/msb.json) — textbook 'personal routine', not a published multi-composer tool.",
    "The 8 tagged files are NOT all of MSB's HVSC output: 2 of the composer's 10 catalogued tunes ('Music_Dancer' csdb_id 435, 'Morning_Has_Broken' csdb_id 40724) carry no player tag at all. Checked their CSDb SID-entry pages directly: 'Morning_Has_Broken' has load $C000 / init $CA30 / play $0000 — completely different from the other files' shared $0801/$083B/$08F0 — confirming it genuinely uses a different (unidentified) setup rather than DeepSID simply missing an obvious match.",
    "Despite zero engine-level research, the init ($083B) and play ($08F0) entry points are directly confirmed (not guessed) — read straight off four separate files' CSDb SID-entry pages (PSID header data: csdb.dk/sid/?id=44155 Chiquita, ?id=44156 Minuetto, ?id=44161 Wizzy, ?id=40723 Sound_of_Silence), all identical, which is real evidence this is one consistent, reused routine and not four coincidentally-similar one-off hacks.",
    "MSB's CSDb scener profile states plainly 'Nothing else is known about this guy' — no real name, no confirmed group membership beyond scattered music-only credits (The I.R.Q., Uncle Ben's Soft, The Wolverines, Sodan, Pier Soft, The Outsider) between 1984-1986. No lineage claim to any known player family was found anywhere."
  ],
  "sources": [
    "Local dataset: data/composers/msb.json — 10 files by composer MSB, 8 tagged '?MSB'; knowledge/COVERAGE.md row 20 confirms 8 files / 1 composer for this family",
    "SIDId sidid.nfo checked for 'MSB' — no entry (data/sidid.json local snapshot, and https://github.com/cadaver/sidid/blob/master/sidid.nfo live)",
    "CSDb scener profile (MSB, csdb_id 21572): https://csdb.dk/scener/?id=21572 — 'Nothing else is known about this guy'; release/credit list",
    "CSDb SID entries (PSID header addresses): https://csdb.dk/sid/?id=44155 (Chiquita), https://csdb.dk/sid/?id=44156 (Minuetto), https://csdb.dk/sid/?id=44161 (Wizzy), https://csdb.dk/sid/?id=40723 (Sound_of_Silence) — all init $083B / play $08F0; https://csdb.dk/sid/?id=40724 (Morning_Has_Broken, untagged) — load $C000 / init $CA30 / play $0000, for contrast"
  ]
}
```

## Overview

`?MSB` is a raw Player-ID tag covering 8 files by a single composer, MSB, in
this project's dataset (`data/composers/msb.json`; confirmed by
`knowledge/COVERAGE.md`'s row for this family). No entry for "MSB" exists in
the SIDId player index (checked both the project's cached snapshot and the
live upstream `sidid.nfo`), and no CSDb release or Codebase64 article
describes a player/tool of this name. Combined with the composer
concentration — exactly one composer, and the tag literally reuses the
composer's own handle — this reads as DeepSID's own low-confidence
inference that these tunes share MSB's own personal, uncatalogued in-game
music routine, not a published or reused tool. MSB's CSDb scener profile is
itself nearly blank ("Nothing else is known about this guy"), with only
scattered 1984-1986 music credits to scene groups/tools (The I.R.Q., Uncle
Ben's Soft, The Wolverines, Sodan, Pier Soft, The Outsider) and one
1984 co-authored tool release ("Protex V1.0", with Perry Rhodan) whose
relationship to this player, if any, was not established.

## Quirks & gotchas

See the `quirks` array. The headline finding: although this family has had
zero engine-level research, four of the eight tagged files were spot-checked
directly on CSDb and all four report identical PSID-header init ($083B) and
play ($08F0) addresses — real, citable evidence that this is one consistent
routine reused across MSB's tunes, not a coincidence. A fifth, untagged file
by the same composer ("Morning_Has_Broken") has completely different
addresses, which supports DeepSID's tag boundary being meaningful rather
than arbitrary.

## Disassembly notes

None. No disassembly was performed for this card — only PSID-header metadata
(load/init/play addresses, as displayed on each file's CSDb SID-entry page)
was read, which is public metadata about the compiled binary, not a reverse
engineering of the play routine's behaviour. Memory map, zero page, data
format and effect encoding are all genuinely unknown and left `TODO`. A
representative file (e.g. `Chiquita.sid`, load $0801 / init $083B / play
$08F0) would be the starting point if this family is picked up for real RE.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts (composer,
file count, tag provenance) and the PSID-header entry points (init/play,
directly read off CSDb, not disassembled) are established. No source code,
manual, or format documentation was found anywhere for this tag. All
`memory`/`data_format`/`effects` fields remain `TODO` pending an actual
disassembly of one of the eight files.

## Sources

See the `sources` array — the local dataset (`data/composers/msb.json`,
`knowledge/COVERAGE.md`), the SIDId index (checked, no match), MSB's CSDb
scener profile, and four CSDb SID-entry pages used to confirm the shared
init/play addresses.

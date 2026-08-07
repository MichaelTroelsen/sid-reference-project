# Sequencer V1.0 (Visac)

```json
{
  "id": "visac-sequencer",
  "name": "Sequencer V1.0",
  "aliases": ["Visac_Sequencer"],
  "authors": ["Visac"],
  "released": "1995, Citadel",
  "status": "stub",
  "platform": "Native C64 tool, described by CSDb as a 'digi player tool'.",
  "csdb_release": 61269,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent), but IS a real, named, dated CSDb tool release: 'Sequencer V1.0', CSDb release type 'C64 Tool' (not a crack — no trap here), by Citadel, 1995, code+music credited to 'Visac' (of Cult and The IDE64 project). A 2008 user comment on its CSDb page describes it as a 'digi player tool' — i.e. sample/digi playback, not a conventional note tracker.",
    "Census of both locally-tagged files complete (2/2, data/composers/visac.json): 'Sequencer Demo Tune' (CSDb SID id 53072) is the tool release's own bundled demo tune, dated 1995 in its own SID record. 'Black Angle' (CSDb SID id 144) is a LATER file, dated 1999 (per its own CSDb SID record, 'Released: 1999 Cult'), used in the one-file demo 'Black Angle' shown at Mekka & Symposium 1999 (1999-04-05) — not an earlier or ambiguous file as previously guessed; the low SID-entry id (144) reflects HVSC catalogue order, not composition date.",
    "PSID header metadata (not disassembled, recorded as header facts only): Sequencer Demo Tune — LoadAddr $0C15 (3093), InitAddr $0F36 (3894), DataSize 13243. Black Angle — LoadAddr $0E00 (3584), InitAddr $0E1E (3614), DataSize 58624. The two files' load/init addresses differ, consistent with the 4-year gap between them (1995 tool release vs 1999 demo use) but not itself evidence of a routine change — no disassembly done.",
    "Visac (real biography per CSDb scener profile, full name Josef Soucek, b. 1974-11-04, Czech Republic) is a scener active in both code and music: member of Cult, founder of 'The IDE64 project' (an IDE-hard-disk-interface project for the C64, founded 1994) — i.e. a hardware-and-software-both figure, not purely a musician.",
    "Both locally-tagged files are by Visac himself — single-composer concentration, 2/2."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry (also re-checked directly against data/sidid.json, no 'Visac' or 'Sequencer V1' match): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 61269 'Sequencer V1.0' via CSDb webservice (type=release): Type 'C64 Tool', ReleaseYear 1995, ReleasedBy Citadel, Credits Code+Music = Visac, UsedSIDs = Sequencer_Demo_Tune (53072): https://csdb.dk/release/?id=61269",
    "CSDb SID entry 53072 'Sequencer Demo Tune' via webservice (type=sid): Released '1995 Visac', LoadAddr 3093, InitAddr 3894, DataSize 13243: https://csdb.dk/sid/?id=53072",
    "CSDb SID entry 144 'Black Angle' via webservice (type=sid): Released '1999 Cult', LoadAddr 3584, InitAddr 3614, DataSize 58624, UsedIn release 8350 'Black Angle' (C64 One-File Demo, Mekka & Symposium 1999): https://csdb.dk/sid/?id=144",
    "CSDb scener profile 1080, Visac, via webservice (type=scener): full name Josef Soucek, b. 1974-11-04, Czech Republic, MemberOf Cult (id 302) and founder of The IDE64 project (id 2828, founded 1994): https://csdb.dk/scener/?id=1080",
    "Local dataset: 2 files tagged Visac_Sequencer (Black_Angle.sid, Sequencer_Demo_Tune.sid), 1 composer (Visac), full census of data/composers/visac.json — data/composers/*.json aggregation"
  ]
}
```

## Overview

`Visac_Sequencer` is the Player-ID tag for **Sequencer V1.0**, a native C64
tool (CSDb release type "C64 Tool", not a crack) released in 1995 by
Citadel — coded and scored by **Visac** (Josef Soucek, b. 1974-11-04), a
Czech scener, founder of "The IDE64 project" and member of Cult. A 2008 user
comment on its CSDb page calls it a "digi player tool" (sample playback, not
pattern/note tracking); this has not been independently verified by
disassembly. Not in SIDId, but has a clean, real CSDb tool page. Both
locally-tagged files (full census, 2/2) are by Visac himself: the tool's own
1995 bundled demo tune, and a separate 1999 demo-party tune reusing the same
player tag four years later.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) absent from SIDId but a real,
dated, named CSDb "C64 Tool" release (not a crack); (2) its "digi player
tool" description comes from a 2008 user comment, not an official spec; (3)
full census corrects an earlier guess — "Black Angle" is not an earlier or
ambiguous file but a later (1999) reuse of the tag, four years after the
1995 tool release; (4) single-composer concentration despite real tool
status.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), `data/composers/*.json`,
and two CSDb pages. `status: stub`.

## Sources

See the `sources` array — SIDId absence check, CSDb release 61269, CSDb
scener 1080, and the local composer aggregation.

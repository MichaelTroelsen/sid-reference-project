# Source (C64 driver)

```json
{
  "id": "source-c64-driver",
  "name": "Source (C64 driver)",
  "aliases": ["?Source_2"],
  "authors": [
    "Paul Summers (implementer/composer credited on the driver's games)",
    "Source (company, Leeds, West Yorkshire, England) — original driver programmer not individually credited"
  ],
  "released": "1988-02 (VGMPF-dated first use, Predator PAL); in use through 1990 (Sonic Boom)",
  "status": "stub",
  "platform": "Native C64 in-house game-music driver, 6502 assembly, embedded directly in each game's binary — not a standalone editor/tracker ever distributed to other musicians.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly performed here",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: VGMPF notes the driver was 'designed with MIDI in mind' — note byte $24 = bass drum, $28 = snare drum trigger. No full opcode table documented anywhere found.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Player-ID/DeepSID's raw tag for this driver is literally '?Source_2' — the leading '?' marks it as an unconfirmed/placeholder identification, not a confident technical fingerprint name. This card is written from the VGMPF (Video Game Music Preservation Foundation) wiki's dedicated 'Source (C64 Driver)' page, which independently documents the same games this tag covers in the local dataset, giving high confidence the mapping is correct despite the '?' marker.",
    "IMPORTANT — do NOT merge with raw tag '?Source' (no suffix). knowledge/COVERAGE.md's automatic family-grouping heuristic (scripts/dev/gen-coverage.js strips trailing bare digits) merges '?Source' and '?Source_2' into one 12-file family called '?Source', but VGMPF documents these as TWO DIFFERENT, chronologically distinct in-house drivers: '?Source' corresponds to VGMPF's separate 'Unknown C64 Driver' page (in use from 1986; distinctive note-sequence-then-property-sequence encoding; games Empire/Street Beat/Psycho Soldier/FireTrap/Rainbow Warrior/Sigue Sigue Sputnik — composers Mark Harrison, Tony Gibson, Chris Gill, Fouad Katan), while '?Source_2' is this card, VGMPF's named 'Source (C64 Driver)', which explicitly SUPERSEDED 'Unknown C64 Driver' at the company Source starting Feb 1988. Local-dataset file counts confirm the split cleanly: the 4 files tagged bare '?Source' (Sigue Sigue Sputnik, Street Beat, Rainbow Warrior, Psycho Soldier) are exactly VGMPF's 'Unknown C64 Driver' game list intersected with this collection; the 8 files tagged '?Source_2' (Espionage, Sonic Boom, Desolator, Fighter Bomber, Fighting Soccer, Predator, Strategic Defence Initiative, Strike Aces) are exactly VGMPF's 'Source (C64 Driver)' list intersected with this collection. A future card for '?Source' (Unknown C64 Driver) should be written separately, not folded into this one.",
    "Composer concentration is extremely narrow: of the 8 local '?Source_2'-tagged files, 6 are filed under composer Paul Summers and 2 under the generic/unattributed HVSC composer folder 'Source_The_Software_House' (Espionage, Sonic Boom) — almost certainly also Paul Summers' work, just not personally credited in that HVSC folder. VGMPF independently states Paul Summers 'used this driver on 5 games.' This is a personal/small-team in-house routine, not a published tool — consistent with the project's composer-concentration heuristic.",
    "The three companies credited as using this driver — Source ('Source the Software House' / 'Source Research & Development'), Vektor Grafix, and Sprytes Limited — were all based in Leeds, West Yorkshire, England, and VGMPF's driver page states Sprytes Limited was a subsidiary of Vektor Grafix. A claim that Vektor Grafix/Sprytes were run by EX-SOURCE STAFF could not be confirmed during a falsify pass (the VGMPF 'Vektor Grafix' company page URL does not resolve, and Wikipedia's Vektor Grafix article names different founders, Andy Craven and Danny Gallagher, with no stated Source connection) — dropped rather than repeated unsourced.",
    "Desolator (one of the 8 tagged files) reportedly uses drum samples via this driver, and Carrier Command (not in the local HVSC MUSICIANS dataset, but on VGMPF's driver game list) has 'leftovers of the sample driver' — i.e. this in-house engine had at least experimental digi/sample-playback capability layered on top of the MIDI-style drum-trigger bytes. Not verified here; TODO if a representative file is ever disassembled.",
    "No public source code or disassembly of this driver was found anywhere (checked GitHub, Codebase64, CSDb group/release listings). It has no dedicated CSDb tool/release page either — it only exists as credits on individual game SID releases, so csdb_release is null."
  ],
  "sources": [
    "VGMPF — Source (C64 Driver), the primary identity source (games list, MIDI-style drum bytes $24/$28, succeeded 'Unknown C64 Driver' at Source, Feb 1988): https://www.vgmpf.com/Wiki/index.php?title=Source_(C64_Driver)",
    "VGMPF — Unknown C64 Driver (the DISTINCT predecessor driver mapped to raw tag '?Source', not this card): https://www.vgmpf.com/Wiki/index.php?title=Unknown_C64_Driver",
    "VGMPF — Source (company page: Leeds/West Yorkshire England, aka 'Source the Software House' / 'Source Research & Development', staff, Paul Summers credited): https://www.vgmpf.com/Wiki/index.php?title=Source",
    "VGMPF — 'Vektor Grafix' company page: URL checked during a falsify pass and returns HTTP 404 (page does not exist) — the Sprytes-subsidiary fact actually comes from VGMPF's driver page (first source above), not this one; the 'ex-Source staff' claim this URL was originally cited for could not be verified and was removed. Wikipedia's Vektor Grafix article (https://en.wikipedia.org/wiki/Vektor_Grafix) names founders Andy Craven and Danny Gallagher instead, with no Source connection stated.",
    "Lemon64 — Fighter Bomber credits (Vektor Grafix developer, Paul Summers musician, Activision publisher): https://www.lemon64.com/game/fighter-bomber",
    "CSDb — representative SID-entry links (file-level, not a tool release) for '?Source_2'-tagged files: Espionage https://csdb.dk/sid/?id=1372, Fighter Bomber https://csdb.dk/sid/?id=1391, Sonic Boom https://csdb.dk/sid/?id=1883",
    "sidid: no entry found for '?Source' or '?Source_2' in deepsid_dl/sidid.nfo (checked directly) — SIDId does not carry this tag",
    "Local dataset: 8 files tagged '?Source_2' across 2 composer folders (Paul Summers, Source_The_Software_House) — see knowledge/COVERAGE.md family '?Source' (12 files combined with the distinct '?Source' tag; see quirks for the split)"
  ]
}
```

## Overview

`?Source_2` is Player-ID/DeepSID's raw tag for an unpublished, in-house C64
game-music driver used by the British developer **Source** (also credited as
"Source the Software House" / "Source Research & Development", Leeds, West
Yorkshire) and its associates **Vektor Grafix** and **Sprytes Limited**. It
was never released as a standalone tool — it only shows up as the replay
embedded in specific games. The [Video Game Music Preservation Foundation
wiki](https://www.vgmpf.com/Wiki/index.php?title=Source_(C64_Driver)) gives
it the unofficial name "Source" and documents it independently of this
project, with a game list that matches this dataset's `?Source_2`-tagged
files closely enough to be confident in the mapping. It superseded an earlier,
VGMPF-documented "Unknown C64 Driver" (mapped to the *separate* raw tag
`?Source`, deliberately NOT covered by this card — see quirks) around
February 1988. Composer concentration is narrow: almost entirely Paul
Summers, consistent with a small in-house team's private routine rather than
a published tool.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **`?Source` vs
`?Source_2` split**: this project's own coverage-grouping heuristic merges
the two raw tags into one family, but VGMPF independently documents them as
two chronologically distinct drivers with almost entirely disjoint composer
credits. This card is `?Source_2` only. A second, separate card would be
needed for `?Source` ("Unknown C64 Driver").

## Disassembly notes

None. No public source or disassembly of this driver exists anywhere found
during this research pass; every runtime field (`memory`, `entry`, `speed`,
`data_format`, `effects`) is left `TODO` rather than guessed. A future pass
could disassemble a representative `?Source_2`-tagged `.sid` (e.g. Fighter
Bomber, CSDb sid id 1391) from its PSID header and trace it through
`sidm2-siddump` — that is the only route to real memory/format facts here.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed, all from VGMPF (an independent, citable wiki) plus a Lemon64 game
credits page. No SIDId entry exists for this tag, no CSDb tool/release page
exists for the driver itself, and no source code or disassembly was found.
Every Tier 3 runtime field is honestly `TODO`.

## Sources

See the `sources` array — VGMPF (3 pages: the driver, the predecessor
driver, and the company), Vektor Grafix's VGMPF company page, Lemon64's
Fighter Bomber credits page, and representative CSDb SID-entry links.

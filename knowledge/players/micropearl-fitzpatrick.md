# Micropearl/Fitzpatrick

```json
{
  "id": "micropearl-fitzpatrick",
  "name": "Micropearl/Fitzpatrick",
  "aliases": ["Micropearl/Fitzpatrick"],
  "authors": ["John A. Fitzpatrick"],
  "released": "1983-1986 (active years of the Datasoft C64 games it appears in)",
  "status": "stub",
  "platform": "Native C64 in-game music driver, hand-coded by the composer for his own games — not a standalone/distributable editor or tool. No CSDb tool release or public source has been found for it.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: per-game (embedded in each Datasoft title's own binary; no fixed address documented)",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: per-file (PSID header on the HVSC-extracted .sid rips; no source available)",
    "play": "TODO: per-file (PSID header)"
  },
  "speed": "TODO: no disassembly performed",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly performed",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is a PERSONAL in-house driver, not a published tool. 100% of the 18 dataset files tagged 'Micropearl/Fitzpatrick' (data/composers/john-fitzpatrick.json) are by a single composer, John A. Fitzpatrick — the project's own composer-concentration heuristic (knowledge/EXTRACTION-TEMPLATE.md) flags single-composer families exactly like this one as most likely a personal routine, never released or reused by others.",
    "The name 'Micropearl' is Fitzpatrick's own branding embedded in his driver code, not an external tool name he adopted. The VGMPF wiki states he is 'probably mainly known because he put his name in his music driver,' and that in 1986 he additionally embedded a San Fernando Valley (Los Angeles) phone number in it — the same region as Datasoft, his primary client (https://www.vgmpf.com/Wiki/index.php?title=John_Fitzpatrick).",
    "No SIDId (sidid.nfo) entry exists for the 'Micropearl/Fitzpatrick' tag — checked against data/sidid.json's byTag map (373 keys), no match. SIDId's index, which catalogues released/known players, apparently never picked this one up, consistent with it never having been a distributed tool.",
    "No CSDb release for a tool/player called 'Micropearl' was found. Fitzpatrick's own CSDb scener page (csdb.dk/scener/?id=14018) lists him credited as Coder/Musician on demo and diskmag releases (e.g. 'Midnight Demo' 1987, 'SIDBurners'/'SIDBurners 2' compilations 1994-1995), but nothing titled Micropearl or flagged as a tool/player release.",
    "All 18 dataset files are music from 1984-1986 Datasoft C64 game ports of his: Bruce Lee, Conan, The Goonies (two rips: disk and tape versions), Zorro, Mr. Do!, Alice in Videoland, Heathcliff, Mancopter, On-Field Football (two rips), On-Court Tennis, On-Track Racing, Star League Baseball, Barry McGuigan's World Championship Boxing, Legend of the Amazon Women, Superstar Ping-Pong, Kids Say the Darndest Things... to Computers — matching the VGMPF game-credit list."
  ],
  "sources": [
    "Local dataset: data/composers/john-fitzpatrick.json — 18 files tagged 'Micropearl/Fitzpatrick', all by John A. Fitzpatrick",
    "knowledge/COVERAGE.md — rank 9 of uncarded families, 18 files, blank 'source' column (no public player source known)",
    "data/sidid.json byTag — checked, no entry for this tag (SIDId does not catalogue it)",
    "VGMPF wiki, John Fitzpatrick: https://www.vgmpf.com/Wiki/index.php?title=John_Fitzpatrick (Micropearl Music Player name, driver self-identification, 1986 phone-number easter egg, game/year list, Datasoft client relationship)",
    "CSDb scener page (John Fitzpatrick, csdb_id 14018 per data/composers/john-fitzpatrick.json): https://csdb.dk/scener/?id=14018 (credits checked; no Micropearl tool release found)"
  ]
}
```

## Overview

Micropearl/Fitzpatrick is the in-game music driver written by John A.
Fitzpatrick, a C64 composer/programmer whose main client was Datasoft. He used
it across roughly a dozen and a half Datasoft titles between 1983 and 1986
(*Bruce Lee*, *Conan*, *The Goonies*, *Zorro*, *Mr. Do!*, and others). Every one
of the 18 files tagged with this player in the local dataset is by Fitzpatrick
himself (`data/composers/john-fitzpatrick.json`) — a 100% single-composer
concentration that, per this project's own extraction heuristic, marks it as a
personal routine rather than a distributed tool. Consistent with that, no
SIDId entry and no CSDb tool/player release for "Micropearl" were found; the
name itself appears to be Fitzpatrick's own branding embedded in the driver
code (per the VGMPF wiki), not an externally-adopted tool name.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a personal,
never-published driver (100% one-composer concentration, no SIDId or CSDb
tool entry), and its name is self-branding inside the driver's own code
(alongside an embedded phone-number easter egg from 1986) rather than a
product name assigned by a third party.

## Disassembly notes

None performed. No public source or prior disassembly was found for this
driver; each Datasoft game embeds its own copy, so any future RE pass would
need to pick a representative rip (e.g. `Bruce_Lee.sid`) and disassemble from
its PSID init/play addresses — there is no shared/documented memory map to
start from.

## Verification

**Not verified — `status: stub`.** Only identity and usage facts are
established: authorship, the games it appears in, its personal/undistributed
nature (via composer concentration and the absence of any SIDId or CSDb tool
entry), and the origin of its name (VGMPF wiki). Every runtime field is
`TODO` because no disassembly has been performed and no source is available.

## Sources

See the `sources` array — the local dataset (`data/composers/john-fitzpatrick.json`,
`knowledge/COVERAGE.md`), `data/sidid.json` (checked, no match), the VGMPF wiki
page on John Fitzpatrick, and his CSDb scener page.

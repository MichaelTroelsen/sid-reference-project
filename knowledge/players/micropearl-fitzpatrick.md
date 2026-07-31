# Micropearl/Fitzpatrick

```json
{
  "id": "micropearl-fitzpatrick",
  "name": "Micropearl/Fitzpatrick",
  "aliases": ["Micropearl/Fitzpatrick"],
  "authors": ["John A. Fitzpatrick"],
  "released": "1983–1986 (earliest attested use: 'Star League Baseball', 1983 Gamestar, and 'Kids Say the Darndest Things... to Computers', 1983 Home Computer Software — both per their own CSDb sid-entry Released fields; not a driver release date, since no such release exists)",
  "status": "stub",
  "platform": "Native C64 in-game music driver, hand-coded by the composer for his own Datasoft titles — not a standalone/distributable editor or tool. No CSDb tool release or public source has been found.",
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
    "This is a personal in-house driver, not a published tool. All 18 files in the local dataset tagged 'Micropearl/Fitzpatrick' are from a single composer (data/composers/john-fitzpatrick.json) — John A. Fitzpatrick himself. The project's composer-concentration heuristic (knowledge/EXTRACTION-TEMPLATE.md) flags single-composer families like this as most likely a personal routine, never released or reused by others. However, the VGMPF wiki reports that another C64 composer, HUMM (a friend/collaborator of Fitzpatrick), also had his music 'arranged in Fitzpatrick's Micropearl Music Player' for at least two 1984 Datasoft titles (Alice in Videoland, On-Field Football) — so the driver was used by a second composer, though HUMM's files do not appear in this dataset's MUSICIANS/ tree (likely in HVSC's GAMES/ tree which is outside collection scope per knowledge/COVERAGE.md).",
    "The name 'Micropearl' is Fitzpatrick's own branding embedded in his driver code, not an external tool name he adopted. The VGMPF wiki states he is 'probably mainly known because he put his name in his music driver,' and that in 1986 he additionally embedded a San Fernando Valley (Los Angeles) phone number in it — the same region as Datasoft, his primary client (https://www.vgmpf.com/Wiki/index.php?title=John_Fitzpatrick).",
    "No SIDId (sidid.nfo) entry exists for the 'Micropearl/Fitzpatrick' tag — confirmed against data/sidid.json's byTag map (373 entries). SIDId's index, which catalogues released/known players, apparently never picked this one up, consistent with it never having been a distributed tool.",
    "No CSDb release for a tool/player called 'Micropearl' was found. Fitzpatrick's own CSDb scener page (csdb.dk/scener/?id=14018) lists him credited as Coder/Musician on demo and diskmag releases (e.g. 'Midnight Demo' 1987, 'SIDBurners'/'SIDBurners 2' compilations 1994-1995, and many individual music releases from 1985-1999), but nothing titled Micropearl or flagged as a tool/player release.",
    "All 18 dataset files are music from 1983-1986 Datasoft/Gamestar/SilverTime C64 game ports: Bruce Lee, Conan, The Goonies (two rips: disk and tape versions), Zorro, Mr. Do!, Alice in Videoland, Heathcliff, Mancopter, On-Field Football (two rips), On-Court Tennis, On-Track Racing, Star League Baseball, Barry McGuigan's World Championship Boxing, Legend of the Amazon Women, Superstar Ping-Pong, Kids Say the Darndest Things... to Computers — matching the VGMPF game-credit list.",
    "Re-research pass, 2026-07-31: censused every one of the 18 tagged files' own CSDb sid-entry (type=sid via scripts/lib/csdb-client.js, ids 12538-12554 + 44661 + 53173 + 59591 — full list in data/composers/john-fitzpatrick.json), reading each entry's own `Released` field rather than sampling. Earliest attested files are 'Star League Baseball' (1983 Gamestar) and 'Kids Say the Darndest Things... to Computers' (1983 Home Computer Software) — the previously recorded '1984-1986' range undercounted by one year; corrected to 1983-1986. No file's `UsedIn` list (CSDb releases referencing that tune — music collections, demos, diskmags) includes anything titled 'Micropearl' or flagged as a driver/tool release; all UsedIn entries are downstream music/demo compilations from 1985-2026, confirming again that no CSDb release exists for the driver itself. A targeted web search for '\"Micropearl\" site:csdb.dk' and '\"Micropearl\" John Fitzpatrick site:lemon64.com OR site:forum64.de' returned no matching release or forum thread (search engine results only, since csdb.dk/lemon64.com don't expose site: crawls well — but no hit surfaced regardless). Lemon64's own game-credit list for John A. Fitzpatrick (27 titles, https://www.lemon64.com/games/list.php?list_individual=john-a-fitzpatrick) corroborates the Datasoft/Gamestar/SilverTime game roster and the 1983 earliest year (also lists a few titles outside this dataset's MUSICIANS/ scope, e.g. 'Motor Mania' 1983, 'Destiny' 1985, sports titles from 1987-1989) but likewise contains no mention of 'Micropearl'. MobyGames' developer sheet for Fitzpatrick (mobygames.com/developer/sheet/view/developerId,128768/) returned HTTP 403 to automated fetch and could not be checked directly; not cited as a source. `csdb_release` remains `null` — no CSDb release id exists for this driver, confirmed independently by both this pass and the original scener-page check."
  ],
  "sources": [
    "Local dataset: data/composers/john-fitzpatrick.json — 18 files tagged 'Micropearl/Fitzpatrick', all by John A. Fitzpatrick",
    "knowledge/COVERAGE.md — carded family (no longer uncarded); all raw tags resolved by this card",
    "data/sidid.json byTag — checked, no entry for this tag (SIDId does not catalogue it)",
    "VGMPF wiki, John Fitzpatrick: https://www.vgmpf.com/Wiki/index.php?title=John_Fitzpatrick (Micropearl Music Player name, driver self-identification, 1986 phone-number easter egg, game/year list, Datasoft client relationship)",
    "VGMPF wiki, HUMM: https://www.vgmpf.com/Wiki/index.php?title=HUMM (confirms HUMM used Fitzpatrick's Micropearl Music Player; collaborated on Alice in Videoland and On-Field Football, 1984)",
    "CSDb scener page (John Fitzpatrick, csdb_id 14018): https://csdb.dk/scener/?id=14018 (credits checked; no Micropearl tool release found; Fitzpatrick credited as Coder and Musician across 22 releases 1985-1999, all music contributions — no tool/editor releases)",
    "CSDb webservice, type=sid, full census of all 18 tagged files' sid-entry ids (12538-12554, 44661, 53173, 59591) via scripts/lib/csdb-client.js, 2026-07-31: each entry's own Released field read directly (not sampled); earliest are Star League Baseball (1983 Gamestar, csdb sid id 12551) and Kids Say the Darndest Things... to Computers (1983 Home Computer Software, csdb sid id 44661); no UsedIn entry across all 18 files names a Micropearl release",
    "Lemon64 game database, John A. Fitzpatrick game list: https://www.lemon64.com/games/list.php?list_individual=john-a-fitzpatrick (27 game credits, corroborates 1983 earliest year and the Datasoft/Gamestar/SilverTime roster; no mention of Micropearl)",
    "Web search for Micropearl on csdb.dk and on lemon64.com/forum64.de, 2026-07-31 — no CSDb release or Lemon64/Forum64 forum thread found naming the driver"
  ]
}
```

## Overview

Micropearl/Fitzpatrick is the in-game music driver written by John A.
Fitzpatrick, a C64 composer/programmer whose main client was Datasoft. He used
it across roughly a dozen and a half Datasoft/Gamestar/SilverTime titles
between 1983 and 1986 (*Bruce Lee*, *Conan*, *The Goonies*, *Zorro*, *Mr. Do!*,
and others) — a full census of every tagged file's own CSDb `Released` field
(2026-07-31 pass) puts the earliest attested use at 1983 (*Star League
Baseball*, *Kids Say the Darndest Things... to Computers*), not 1984 as
previously recorded. Every one
of the 18 files tagged with this player in the local dataset is by Fitzpatrick
himself (`data/composers/john-fitzpatrick.json`). The VGMPF wiki records that
another composer, HUMM (a collaborator/friend of Fitzpatrick), also had his
music arranged in this driver for two 1984 Datasoft titles (*Alice in
Videoland*, *On-Field Football*), though those files are not present in this
dataset's MUSICIANS/ tree.  A 100% single-composer concentration in the local
data — with one confirmed external collaborator — marks this as a personal
routine rather than a widely-distributed tool. Consistent with that, no SIDId
entry and no CSDb tool/player release for "Micropearl" were found; the name
itself appears to be Fitzpatrick's own branding embedded in the driver code
(per the VGMPF wiki), not an externally-adopted tool name. Fitzpatrick
embedded a San Fernando Valley phone number in the 1986 revision of the driver
— a calling-card easter egg from the same Los Angeles-area region as Datasoft's
offices.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a personal,
never-published driver (single-composer + one known collaborator in the local
data, no SIDId or CSDb tool entry), and its name is self-branding inside the
driver's own code (alongside an embedded phone-number easter egg from 1986)
rather than a product name assigned by a third party. The HUMM connection
(VGMPF wiki) shows the driver was shared with at least one other composer in
Fitzpatrick's circle, though HUMM's files live in HVSC's GAMES/ tree and are
outside this dataset's MUSICIANS/-only scope.

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
entry), the origin of its name (VGMPF wiki), and the HUMM collaborator
connection (VGMPF wiki). Every runtime field is `TODO` because no disassembly
has been performed and no source is available.

## Sources

See the `sources` array — the local dataset (`data/composers/john-fitzpatrick.json`,
`knowledge/COVERAGE.md`), `data/sidid.json` (checked, no match), the VGMPF wiki
pages on John Fitzpatrick and HUMM, and his CSDb scener page.

# Edge

```json
{
  "id": "edge",
  "name": "Edge",
  "aliases": ["?Edge"],
  "authors": ["Andrew Green"],
  "released": "1985 (game publication year, not a confirmed player-tool release date) — CSDb SID entry for the sole tagged file 'Almazz' gives Released: \"1985 The Edge\" (csdb.dk/sid/?id=1127, via csdb.dk webservice type=sid)",
  "status": "stub",
  "platform": "Native C64, in-house routine embedded in one commercial game ('Almazz', 1985) rather than a distributed standalone editor/tool — no dedicated CSDb tool/release page found under 'Edge' or 'The Edge' (checked via csdb.dk webservice and site search, absent)",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
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
    "The leading '?' in the SIDId tag marks it as a scanner-flagged/uncertain signature match. No sidid.nfo entry exists for this tag at all (checked data/sidid.json byTag — absent). ONE-FILE tag: 'Almazz' by composer Andrew Green (data/composers/andrew-green.json).",
    "RESOLVED (was previously flagged unresolved): the tag 'Edge' refers to the UK games publisher 'The Edge' — CSDb's own SID entry for the sole tagged file states Released: \"1985 The Edge\" (csdb.dk/sid/?id=1127). 'The Edge' was a Softek offshoot announced in 1984 by Tim Langdell as a 'creative group' of freelance artists, programmers and musicians publishing C64/Spectrum games (e.g. Fairlight, Quo Vadis, Bobby Bearing); it later became Edge Games Inc in 1990 (en.wikipedia.org/wiki/Edge_Games). This is NOT the same as asserting Andrew Green worked for or was employed by that company beyond this one credited game — only that the tag's referent is now identified.",
    "PSID header metadata for the sole file (csdb.dk/sid/?id=1127, HVSC path /MUSICIANS/G/Green_Andrew/Almazz.sid): LoadAddr $28D1, InitAddr $2B44, PlayAddr $28D1 (play address equals load address — notable but this is header metadata, not a disassembly fact, so it is NOT written into the Tier 3 entry/memory fields). SID model 6581, PAL, DataSize 705 bytes.",
    "CSDb site search for 'Almazz' turns up 11 cracked/pirated re-releases of the same 1985 game by different cracking groups (Dom & Co, The Mediator, S.W.A.T., Jabba, Alpha Soft, Teleo, The-A-Team, Florasoft, Browbeat, Pugsy) — consistent with 'Almazz' being a real, moderately well-distributed commercial 1985 C64 release, not an obscure one-off. No standalone CSDb group/publisher page for 'The Edge' itself was found in that search.",
    "Single-file, single-composer: the thinnest possible local evidence base for any judgment about the routine itself (as opposed to the game/publisher identity, which is now resolved). Still cannot distinguish 'personal in-house routine' from 'a small in-house tool The Edge used across other titles' from local data alone."
  ],
  "sources": [
    "SIDId sidid.nfo: checked, no entry for 'Edge' or '?Edge' (absent from data/sidid.json): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 1 file tagged ?Edge ('Almazz'), by composer 'Andrew Green' — data/composers/andrew-green.json; see knowledge/COVERAGE.md",
    "HVSC composer profile: Andrew Green, England, affiliation Freelance, active 1986 — data/composers/andrew-green.json",
    "CSDb webservice, type=sid, id=1127 ('Almazz'): Released \"1985 The Edge\"; LoadAddr $28D1, InitAddr $2B44, PlayAddr $28D1; SID 6581, PAL, 705 bytes — https://csdb.dk/sid/?id=1127 (queried via scripts/lib/csdb-client.js getSidRelease)",
    "Wikipedia, 'Edge Games': \"In 1984, Langdell announced an offshoot of Softek called The Edge - a 'creative group' of freelance artists, programmers and musicians\"; renamed Edge Games Inc in 1990 — https://en.wikipedia.org/wiki/Edge_Games",
    "CSDb site search for 'Almazz' (https://csdb.dk/search/?search=Almazz): 11 matching cracked releases of the 1985 game by various groups (e.g. csdb.dk/release/?id=24861, id=31126, id=53297), no standalone 'The Edge' publisher/group page found",
    "csdb.dk webservice checked for a dedicated 'Edge'/'The Edge' player/tool release entry: none found (searched, absent)"
  ]
}
```

## Overview

Edge is a SIDId Player-ID tag (`?`-prefixed, i.e. scanner-flagged/
uncertain) with no `sidid.nfo` entry of its own (checked, absent). Local
data ties its single tagged file, "Almazz", to composer **Andrew Green**
(England, HVSC affiliation "Freelance", active 1986). CSDb's own SID entry
for that file (`csdb.dk/sid/?id=1127`) resolves the tag's meaning: it
records `Released: "1985 The Edge"`, identifying "Edge" as the UK games
publisher **The Edge** — a Softek offshoot announced in 1984 by Tim
Langdell as a "creative group" of freelance artists, programmers and
musicians, later renamed Edge Games Inc in 1990
(`en.wikipedia.org/wiki/Edge_Games`). "Almazz" itself was a real,
moderately distributed 1985 C64 release: a CSDb site search turns up 11
separate cracked re-releases of it by different groups. No dedicated
CSDb tool/publisher page for "Edge"/"The Edge" as a player or software
house was found, so this reads as an in-house routine bundled with one
1985 game rather than a released standalone editor — a single file is not
enough to say whether The Edge used it more widely.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId record exists for this
tag; (2) the meaning of "Edge" is now resolved — it is the 1985 UK games
publisher "The Edge" (per CSDb's own Released field on the tagged file),
not a personal handle, though that does not establish anything about the
routine's authorship or reuse beyond this one file; (3) single-file,
single-composer — the thinnest evidence base in this batch; (4) PSID
header shows PlayAddr == LoadAddr ($28D1), recorded as a quirk only, not
promoted into Tier 3.

## Disassembly notes

None done here. No public source or CSDb tool entry was found. All Tier 3
fields are `TODO`.

## Verification

Not verified. Seeded from `data/composers/andrew-green.json`,
`data/sidid.json` (checked, absent), CSDb's webservice `type=sid` record
for the one tagged file, and Wikipedia's "Edge Games" article. `status:
stub` — Tier 1+2 (identity, usage, provenance) only; no disassembly done,
all Tier 3 fields remain `TODO`.

## Sources

See the `sources` array — SIDId sidid.nfo (checked, absent), the local
composer aggregation/HVSC profile for Andrew Green, CSDb's `type=sid`
record for 'Almazz' (csdb.dk/sid/?id=1127), CSDb site search for 'Almazz'
releases, and Wikipedia's "Edge Games" article.

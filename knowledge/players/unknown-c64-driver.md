# Unknown C64 Driver

```json
{
  "id": "unknown-c64-driver",
  "name": "Unknown C64 Driver",
  "aliases": ["?Source"],
  "authors": [
    "Unknown — VGMPF does not credit an individual driver programmer (hence the page/driver name itself)",
    "Composers credited as using it: Fouad \"Foo\" Katan (Empire, 1986), Mark Harrison (Street Beat 1987, Rainbow Warrior 1989, Sigue Sigue Sputnik), Paul Summers (Psycho Soldier, 1987), Chris Gill (FireTrap, 1987), Tony Gibson (Rainbow Warrior co-credit, 1989)"
  ],
  "released": "1986 (VGMPF-dated first use, 'Empire', dated imprecisely as '1986-0?-??')",
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
    "patterns": "VGMPF-sourced description only (not disassembly-verified): 'a sequence of notes is followed by sequences of their properties' — note data and per-note property/modulation data are apparently stored as separate parallel sequences rather than interleaved per note. No further structural detail (order list / pattern table layout) documented anywhere found.",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "VGMPF-sourced description only (not disassembly-verified): each note byte's 4 least-significant bits select an instrument number; the 2 more-significant bits select a modulation type — $10 = pitch bend up, $20 = pitch bend down, $30 = vibrato.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Player-ID/DeepSID's raw tag for this driver is literally '?Source' (no suffix) — the leading '?' marks it unconfirmed. This card is written from VGMPF's dedicated 'Unknown C64 Driver' wiki page, an independent source whose game list matches this dataset's '?Source'-tagged files exactly, giving high confidence in the mapping despite the '?' marker.",
    "IMPORTANT — do NOT merge with raw tag '?Source_2' (see the sibling card knowledge/players/source-c64-driver.md). knowledge/COVERAGE.md's automatic family-grouping heuristic merges '?Source' and '?Source_2' into one 12-file family labelled '?Source', but VGMPF documents these as TWO different, chronologically distinct drivers: this card ('?Source') is VGMPF's 'Unknown C64 Driver', in use from 1986; the sibling card ('?Source_2') is VGMPF's named 'Source (C64 Driver)', which explicitly SUPERSEDED this one at the company Source starting Feb 1988 ('At Source, it superseded Unknown C64 Driver.' — VGMPF Source driver page).",
    "Local dataset usage confirmed directly (not inflated): exactly 4 files carry the bare '?Source' tag — Sigue_Sigue_Sputnik.sid and Street_Beat.sid (both filed under composer Mark Harrison), Psycho_Soldier.sid (filed under the generic composer folder Source_The_Software_House, author credited only as 'Source'), and Rainbow_Warrior.sid (filed under Tony Gibson, author 'Tony Gibson & Mark Harrison'). This is exactly VGMPF's 6-game list (Empire, Street Beat, Psycho Soldier, FireTrap, Rainbow Warrior, Sigue Sigue Sputnik) intersected with what exists in this HVSC-derived collection — Empire and FireTrap have no matching local composer/file. No entry for '?Source' exists in data/sidid.json (checked directly — zero occurrences of the string 'Source' anywhere in that file).",
    "VGMPF credits Psycho Soldier's music to composer Paul Summers specifically, but in this dataset the file is filed under the generic HVSC composer folder 'Source_The_Software_House' (author field just 'Source'), not personally under Paul Summers. This is consistent with the sibling '?Source_2' card's independent finding that Summers' work is frequently filed under the generic company name rather than his own composer folder in HVSC.",
    "VGMPF's driver-page game table lists Sigue Sigue Sputnik's release year as '2015', which is almost certainly the year of a much later re-release/tribute version of the game rather than a real 1980s date for this driver — the driver's own documented first-use date on the same page is '1986-0?-??' (Empire). Flagged here as a probable VGMPF table anomaly, not treated as evidence the driver was still in active development in 2015.",
    "Supersession relationship (documented on the OTHER driver's page, not this one): VGMPF's 'Source (C64 Driver)' page states 'At Source, it superseded Unknown C64 Driver,' dating the successor's first use to Predator PAL, ~Feb 1988. Composer continuity supports this: Paul Summers scored Psycho Soldier (this driver, 1987) and then five later Source-published games using the successor driver starting 1988. Per the task instructions for this card, no edge is asserted here — a `successor_of` edge (source-c64-driver → unknown-c64-driver) belongs on the sibling card `source-c64-driver.md`, not on this one, and is left for a maintainer to decide whether to add.",
    "No public source code or disassembly of this driver was found anywhere (VGMPF is a documentation wiki, not a code repository; no GitHub, Codebase64, or CSDb tool/group listing found). It has no dedicated CSDb tool/release page either — it only exists as credits on individual game SID releases, so csdb_release is null."
  ],
  "sources": [
    "VGMPF — Unknown C64 Driver, the primary identity source (game list, composer credits, note/property-sequence and modulation-byte encoding description, '1986-0?-??' first-use date): https://www.vgmpf.com/Wiki/index.php?title=Unknown_C64_Driver",
    "VGMPF — Source (C64 Driver), the DISTINCT successor driver mapped to raw tag '?Source_2' (cited here only for the 'At Source, it superseded Unknown C64 Driver' supersession sentence and Paul Summers' post-1988 game list): https://www.vgmpf.com/Wiki/index.php?title=Source_(C64_Driver)",
    "CSDb — representative SID-entry links (file-level, not a tool release) for the 4 local '?Source'-tagged files: Sigue Sigue Sputnik https://csdb.dk/sid/?id=53045, Street Beat https://csdb.dk/sid/?id=1917, Psycho Soldier https://csdb.dk/sid/?id=1768, Rainbow Warrior https://csdb.dk/sid/?id=13318",
    "sidid: no entry found for '?Source' in deepsid_dl/sidid.nfo / data/sidid.json (checked directly, zero occurrences) — SIDId does not carry this tag",
    "Local dataset: data/composers/mark-harrison.json, data/composers/source-the-software-house.json, data/composers/tony-gibson.json — 4 files total tagged '?Source' across 3 composer folders; see knowledge/COVERAGE.md family '?Source' (12 files combined with the distinct '?Source_2' tag; see quirks for the split)"
  ]
}
```

## Overview

`?Source` is Player-ID/DeepSID's raw tag for an unpublished, in-house C64
game-music driver used across several British-studio games in the mid-to-late
1980s — per VGMPF, Empire, Street Beat, Psycho Soldier, FireTrap and Rainbow
Warrior (plus a much later re-release, Sigue Sigue Sputnik). It was never
released as a standalone tool; it only shows up as the replay embedded in
specific games. (VGMPF's driver page lists the games/composers/dates but not
their publishers, so no publisher attribution is asserted here.) The [Video Game Music
Preservation Foundation
wiki](https://www.vgmpf.com/Wiki/index.php?title=Unknown_C64_Driver) has no
name for its actual author and calls it simply "Unknown C64 Driver" — hence
this card's name. Composers credited across its game list are Fouad "Foo"
Katan, Mark Harrison, Paul Summers, Chris Gill, and Tony Gibson; in this local
HVSC-derived dataset only 4 of the 6 VGMPF-listed games are present (Sigue
Sigue Sputnik, Street Beat, Psycho Soldier, Rainbow Warrior), spread across 3
composer folders (Mark Harrison, Tony Gibson, and the generic
Source_The_Software_House). It is the direct, chronological predecessor of a
different, later in-house driver at the company Source (raw tag `?Source_2`,
see the sibling card `source-c64-driver.md`), which VGMPF states superseded
this one starting February 1988 — composer Paul Summers is the connecting
thread, scoring Psycho Soldier on this driver in 1987 and then several later
Source titles on the successor driver from 1988.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the same **`?Source` vs
`?Source_2` split** documented on the sibling card: this project's own
coverage-grouping heuristic merges the two raw tags into one family, but
VGMPF independently documents them as two chronologically distinct drivers
with a stated supersession relationship (not a shared-codebase claim) and
almost entirely disjoint composer credits. This card is `?Source` only — the
earlier, 1986-dated driver.

## Disassembly notes

None. No public source or disassembly of this driver exists anywhere found
during this research pass; every runtime field (`memory`, `entry`, `speed`,
most of `data_format`) is left `TODO` rather than guessed. The two
`data_format`/`effects` entries that are filled in are explicitly marked as
VGMPF's own prose description, not something confirmed by opening a
disassembler here. A future pass could disassemble a representative
`?Source`-tagged `.sid` (e.g. Psycho Soldier, CSDb sid id 1768, or Street
Beat, CSDb sid id 1917) from its PSID header and trace it through
`sidm2-siddump` — that is the only route to real memory/format facts here.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed, all from VGMPF (an independent, citable wiki) plus direct
inspection of this project's own local composer JSON files, which confirmed
the 4-file count and composer list exactly as VGMPF's game list intersected
with this collection. No SIDId entry exists for this tag, no CSDb tool/release
page exists for the driver itself, and no source code or disassembly was
found. Every Tier 3 runtime field is honestly `TODO`.

## Sources

See the `sources` array — VGMPF's "Unknown C64 Driver" page (primary
identity source), VGMPF's "Source (C64 Driver)" page (cited only for the
supersession sentence), representative CSDb SID-entry links for the 4 local
files, and this project's own `data/composers/*.json` for local usage
verification.

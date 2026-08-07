# Alligata/Quicksilva (uncertain authorship — early Crowther/Daglish-era driver)

```json
{
  "id": "alligata-quicksilva",
  "name": "Alligata/Quicksilva (uncertain authorship — early Crowther/Daglish-era driver)",
  "aliases": ["?Alligata/Quicksilva"],
  "authors": ["UNCONFIRMED — the tag names two early-1980s C64 publishers (Alligata Software, Quicksilva), not a person. Composers Antony Crowther and Ben Daglish are attributed via local HVSC data; no source names an individual driver author."],
  "released": "1984-1985, per CSDb's own per-tune 'Released' field, censused across all 5 tagged files: Gryphon (csdb.dk/sid/?id=5606) '1984 Quicksilva'; Killer Watt (id=5608) '1984 Alligata'; Percy the Potty Pigeon (id=10350) '1984 Gremlin Graphics'; Black Thunder (id=10296) '1985 Quicksilva'; Run Like Hell (id=5615) '1985 Ratt'. Corrects the earlier estimate of '1983-1984' — no 1983 file exists among the 5, and two of the five files were NOT published by Alligata or Quicksilva at all (see quirks). Still predates Music Master's March 1986 publication.",
  "status": "stub",
  "platform": "Native C64 6502 machine code, not a cross-platform tool: all 5 tagged files carry their own PSID LoadAddr/InitAddr/PlayAddr triplet (per CSDb 'type=sid' records, e.g. Gryphon Load=$8500/Init=$9210/Play=$926E), confirming in-file executable 6502 routines rather than a cross-platform editor + separate C64 replayer. The 5 files' LoadAddr values differ (Killer Watt $8000, Black Thunder $50B7, Gryphon/Run Like Hell $8500, Percy $8800) — consistent with either a relocatable driver reassembled per release, or five independently hand-coded routines that merely share a Player-ID signature; no source distinguishes the two readings. Presumed an in-house driver used by Antony Crowther (and, via collaboration, Ben Daglish) during 1984-1985 work for Alligata Software, Quicksilva, Gremlin Graphics and Crowther's own 'Ratt' handle — predating Crowther's later, NAMED 'Music Master' compiler (published March 1986, see [[antony-crowther]]) and distinct from the separate, later 'Antony_Crowther_V3' Gremlin-era driver (see [[antony-crowther-v3]]). This tag is its own, third SIDId-adjacent signature; no source confirms it is the same code as either sibling.",
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
    "5 files, 2 composers, both already documented elsewhere in this KB via other tags: Antony Crowther (3 files — Gryphon, Killer Watt, Run Like Hell) and Ben Daglish (2 files — Black Thunder, Percy the Potty Pigeon). VGMPF's own Crowther gameography lists Gryphon, Killer Watt/Killerwatt, and Percy the Potty Pigeon among his early credits, but names no specific pre-'Music Master' driver anywhere on that page — confirming the games/composers, not a driver name.",
    "Full census (all 5 files, via CSDb's per-tune 'Released' field, not sampled): Gryphon 'Quicksilva' 1984 (csdb.dk/sid/?id=5606); Killer Watt 'Alligata' 1984 (id=5608); Percy the Potty Pigeon 'Gremlin Graphics' 1984 (id=10350); Black Thunder 'Quicksilva' 1985 (id=10296); Run Like Hell 'Ratt' 1985 (id=5615, Ratt = Crowther's own handle, self-published, not a company). Only 3 of 5 files were actually published by Alligata or Quicksilva — the tag name covers a minority-but-plurality of its own files' actual publishers. This corrects a prior draft's '1983-1984' estimate (no 1983 file exists) — that error came from reading VGMPF's general gameography dating rather than each tune's own CSDb record, exactly the trap EXTRACTION-TEMPLATE.md warns about.",
    "A separate, well-documented Crowther/Daglish collaboration from the same period — 'Loco' (Alligata, 1984, code by Crowther, music by Daglish, confirmed via Wikipedia) — is NOT among this tag's 5 files, but corroborates that the two worked together on Alligata titles in this exact era, consistent with this tag's composer pairing. A search-engine AI summary additionally claimed Crowther's 'We M.U.S.I.C.' driver was 'first used in Loco' — but neither the cited Wikipedia article nor captive.atari.org's Crowther biography (fetched directly) contains that claim, and We M.U.S.I.C. is independently dated to 1986 (per [[antony-crowther]]), two years after Loco's 1984 release — a chronological contradiction. Discarded as an unconfirmed AI-summary artifact, not recorded as fact.",
    "DELIBERATELY NOT MERGED with [[antony-crowther]] (Antony_Crowther_V1/V2, the 'Music Master' BASIC compiler, published 1986) or [[antony-crowther-v3]] (the later, uncertain-authorship Gremlin-era driver, 1986-1993): this is a THIRD, distinctly-named raw tag with no source stating it is the same code as either. Following the same caution those two sibling cards already apply to each other (a shared composer or name fragment is not evidence of one driver), no `edges` relationship is asserted here.",
    "Given the 1984-1985 dating (predating Music Master's March 1986 publication), this could plausibly be the earliest of the three Crowther-adjacent tags in this KB — the routine(s) Crowther was using before he wrote and published Music Master — but that reading is inference from timeline alone, not a sourced claim.",
    "PSID header LoadAddr/InitAddr/PlayAddr (per CSDb, not disassembled) differ across all 5 files — see `platform` field. Recorded here as header metadata only, per EXTRACTION-TEMPLATE.md's rule that PSID values are not Tier 3 disassembly facts; the `entry`/`memory` fields below remain honestly TODO.",
    "No CSDb release-level entry (tool/editor page) was found for '?Alligata/Quicksilva' as a named product — searches for an Antony Crowther music-driver/routine release on csdb.dk turned up only game and demo credits, no dedicated tool page, consistent with `csdb_release: null`.",
    "UPDATE 2026-08-07 (drift-recheck): a Lemon64 interview with Ben Daglish, checked directly (not previously in this card's sources), states his first involvement was 'Tony Crowther's Potty Pigeon — I wrote out the notes for the Death March for him', with 'the first game where I was involved in the typing myself' being 'Loco' (not one of this tag's 5 files). This implies Crowther, not Daglish, did the actual on-C64 coding/typing for Percy the Potty Pigeon (one of this tag's 5 files) even though Daglish is credited as its composer — mildly corroborating, not proving, that Crowther is the more likely driver-author of this tag. The same interview also describes the era's general practice: 'we had to write the programs ourselves to create the sounds and notes, rather than there being standards' and that it was 'text, typed in by hand, rather than having a nice Cubase'y style graphical editor' — consistent with, but not proof of, this tag being an in-house hand-coded routine rather than a shared published tool. No change to `authors`, `released`, `platform`, or `status`: still no source names an individual author for this specific tag, and no new CSDb page content, release date, or file-count change was found across all 5 cited CSDb sid-entry pages or the local composer dataset (both re-checked, unchanged since 2026-07-31/07-10)."
  ],
  "sources": [
    "VGMPF — Antony Crowther (gameography incl. Gryphon, Killer Watt, Percy the Potty Pigeon; no pre-Music-Master driver name given): https://vgmpf.com/Wiki/index.php/Antony_Crowther",
    "VGMPF — Ben Daglish: https://vgmpf.com/Wiki/index.php/Ben%20Daglish",
    "CSDb webservice (type=sid, via scripts/lib/csdb-client.js), one record per tagged file, censused 2026-07-31: id=5606 Gryphon 'Released: 1984 Quicksilva' https://csdb.dk/sid/?id=5606; id=5608 Killer Watt 'Released: 1984 Alligata' https://csdb.dk/sid/?id=5608; id=5615 Run Like Hell 'Released: 1985 Ratt' https://csdb.dk/sid/?id=5615; id=10296 Black Thunder 'Released: 1985 Quicksilva' https://csdb.dk/sid/?id=10296; id=10350 Percy the Potty Pigeon 'Released: 1984 Gremlin Graphics' https://csdb.dk/sid/?id=10350",
    "Wikipedia — Loco (video game): 'released by Alligata for the Commodore 64 in 1984' https://en.wikipedia.org/wiki/Loco_(video_game)",
    "captive.atari.org — Antony Crowther biography (fetched directly; contains no music-driver name or date): https://captive.atari.org/Main/AboutACrowther/About.php",
    "Local dataset: data/composers/antony-crowther.json (3 files), data/composers/ben-daglish.json (2 files); knowledge/COVERAGE.md rank #20",
    "Existing KB cards: knowledge/players/antony-crowther.md (Music Master, V1/V2), knowledge/players/antony-crowther-v3.md (uncertain-authorship Gremlin-era driver) — cited for the deliberate non-merge reasoning",
    "data/sidid.json byTag — checked, no entry for '?Alligata/Quicksilva'",
    "Lemon64 interview — Ben Daglish (checked 2026-08-07 for drift-recheck; on Potty Pigeon typing/composition split and general era coding practice): https://www.lemon64.com/interviews/ben_daglish.php",
    "CSDb webservice re-checked 2026-08-07 for drift (all 5 sid-entry pages: id=5606, 5608, 5615, 10296, 10350) — Released fields and PSID Load/Init/Play addresses unchanged from the 2026-07-31 census; no new trivia/comments found",
    "data/composers/antony-crowther.json, data/composers/ben-daglish.json re-checked 2026-08-07 (fetchedAt unchanged 2026-07-10) — same 5 files tagged '?Alligata/Quicksilva', no new members"
  ]
}
```

## Overview

`?Alligata/Quicksilva` is a raw Player-ID tag covering 5 files by
**Antony Crowther** and **Ben Daglish**, named after two early-1980s C64
publishers (Alligata Software, Quicksilva). A full census of all 5 files'
own CSDb `Released` records dates them 1984-1985, but only 3 of the 5 were
actually published by Alligata or Quicksilva — Percy the Potty Pigeon went
through Gremlin Graphics and Run Like Hell was self-published under
Crowther's "Ratt" handle, so the tag name only partially describes its own
membership. This predates Crowther's named "Music Master" compiler,
published March 1986 (documented on [[antony-crowther]]), and well before
the separate, later "Antony_Crowther_V3" Gremlin-era driver documented on
[[antony-crowther-v3]]. No source names an individual author for this
specific tag or confirms it shares code with either sibling; it is kept as
its own card rather than folded into either, on the same "shared name is
not evidence" caution those two cards already apply to each other.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the full census corrects an
earlier draft's "1983-1984" estimate to 1984-1985, with no 1983 file
present; (2) only 3 of 5 files were actually published by Alligata or
Quicksilva; (3) this pre-dates the documented 1986 Music Master
publication, making it plausibly the earliest of three Crowther-adjacent
driver tags in this KB, though that is timeline inference only; (4) VGMPF
confirms the composer/game pairing but names no driver; (5) a search-engine
AI summary's "We M.U.S.I.C. first used in Loco" claim was checked directly
against its cited sources and found unsupported — discarded; (6)
deliberately not merged with either sibling Crowther card; (7) UPDATE
2026-08-07: a Lemon64 Daglish interview, newly checked, mildly corroborates
Crowther (not Daglish) as the likely on-C64 coder even on the
Daglish-credited "Percy the Potty Pigeon" file, and describes the era's
hand-coded, no-standard-tool practice generally — see the dated quirks
entry for the exact quotes; no field other than `quirks`/`sources` changed.

## Disassembly notes

None done here. No source, format spec, or memory map was found; every
Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Composer/game identity, per-file release
dates and publishers, and native-C64-platform (via PSID header presence)
are confirmed by direct citation across all 5 tagged files. No runtime
fact was guessed; `entry`/`memory`/`data_format`/`effects` remain TODO.

## Sources

See the `sources` array — VGMPF (Crowther and Daglish pages), CSDb's
webservice (censused for all 5 tagged files' own `Released` fields and
PSID header addresses), Wikipedia (Loco), captive.atari.org (Crowther
biography, fetched directly to rule out an AI-summary artifact), this
project's local composer data, and the two sibling Crowther cards.

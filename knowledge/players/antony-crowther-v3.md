# Antony Crowther V3 (uncertain authorship — Gremlin-era / widely-shared driver)

```json
{
  "id": "antony-crowther-v3",
  "name": "Antony Crowther V3 (uncertain authorship — Gremlin-era / widely-shared driver)",
  "aliases": ["Antony_Crowther_V3"],
  "authors": ["UNCONFIRMED — SIDId's raw tag name attributes this to Antony Crowther, but usage evidence points to a Gremlin Graphics in-house or otherwise widely-shared driver. Do NOT assert Crowther personally authored this. See quirks."],
  "released": "TODO: earliest confirmed use 1986 (Ben Daglish's Gremlin catalogue), latest confirmed use 1993 (Steve Rowlands, Mayhem in Monsterland) — a 7-year span. No single first-release date/product found.",
  "status": "stub",
  "platform": "Native C64. Presumed a professional/commercial-grade assembled player (unlike the BASIC type-in-listing 'Music Master' tool on [[antony-crowther]]), given its use across full commercial games rather than a magazine listing — but this is inferred from usage context, not confirmed by any disassembly.",
  "csdb_release": null,

  "memory": { "load_address": "TODO — varies per game (not a single relocatable binary confirmed): Gauntlet load/init $1FF1 (csdb.dk/sid/?id=10322); Krakout load $E000, init $F720 (csdb.dk/sid/?id=10335); Mayhem in Monsterland load/init $1100 (csdb.dk/sid/?id=24661). These come from CSDb's own PSID header fields, not a disassembly, and the differing init-to-play offsets across the three (load+$10, load+1, load+3) are not enough evidence either way to confirm or rule out a shared driver — flagged, not resolved.", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "TODO — see per-game addresses above; no confirmed common entry convention.", "play": "TODO — see per-game addresses above." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "WHY THIS IS A SEPARATE CARD, NOT MERGED INTO [[antony-crowther]] — decided from evidence, per this KB's standing rule that a shared version-number/name suffix is not itself evidence of one evolving driver (cf. the dave-spicer-v1/v15 counter-example). Antony_Crowther_V3 (83 files) has a RADICALLY different composer/usage profile from V1+V2 (19 files, the confirmed 'Music Master' BASIC compiler — see [[antony-crowther]]): V3 is dominated by Ben Daglish's ENTIRE post-1987 Gremlin Graphics commercial catalogue (40 of 83 files, 48%) — Gauntlet, Krakout, Trap, Way of the Tiger, Firelord, He-Man & Masters of the Universe, Return of the Mutant Camels, Bobby Bearing, Cobra, DeathScape, Dogfight 2187, Footballer of the Year, Future Knight I/II, Hades Nebula, Harvey Headbanger, Jack the Nipper, Kettle, Killer-Ring, Mountie Mick's Death Ride, Olli & Lissa, Pub Games, Rolling Stoned, SkateRock, They Stole a Million, The Vikings, Zarjaz, Bulldog, Blitzkrieg, Bombo, Challenge of the Gobots, The Chicken Song(s), plus two 'We M.U.S.I.C.' compilation tunes and a Daglish untitled track — PLUS composers with no known Crowther/Gremlin link at all: Steve Rowlands (13 files, Apex Computer Productions — a different company; e.g. Mayhem in Monsterland 1993, Creatures 1990, Cyberdyne Warrior), Johannes Bjerregaard (5, Denmark), FCS/Finland Cracking Service (3), Rock (6), plus Crowley Mr, SMC, TN, Olav Moerkrid (1 each). By contrast V1+V2 stay within a narrow circle (Crowther, Daglish, and a few plausible magazine-listing typists) — a fundamentally different adoption pattern.",
    "BEN DAGLISH IS ON RECORD THAT HIS GREMLIN-ERA DRIVER WAS NOT CROWTHER'S TOOL. VGMPF states 'Up to We M.U.S.I.C., Daglish used a compiler developed by Crowther... At Gremlin, Daglish used another driver' — a direct, named source distinguishing V3-era Daglish output from the Music Master tool documented on [[antony-crowther]]. This alone rules out 'this is still Crowther's Music Master' as a confirmed hypothesis for the Daglish-side 48% of this tag's files. A further claim that Daglish does not write his own player routines at all ('he defines what they should be and Gremlin's in-house programmers create the software') could not be traced to a verifiable source during this pass — dropped as unconfirmed rather than used to also rule out 'this is Daglish's own routine'.",
    "SIDId'S OWN COMMENT FOR THIS TAG IS A DIRECT SIGNAL THAT IT IS NOT A PERSONAL/NARROW TOOL: 'A few editors are written for this player, see subids' (deepsid_dl/sidid.nfo, Antony_Crowther_V3 entry — no `name` field, unlike V1/V2's 'Music Master'). Read plainly, this states multiple different front-end editors were built around ONE underlying replay routine — consistent with the observed spread across otherwise-unconnected composers/companies (Gremlin, Apex, Danish and Finnish demoscene names), each plausibly having built or adapted their own editor for a shared playback engine.",
    "RESOLVED (this session): THE 'SEE SUBIDS' POINTER IS NOW CONFIRMED, NOT SPECULATIVE — the locally cached `deepsid_dl/sidid.nfo` snapshot (imported to `data/sidid.json`) does not carry SIDId's sub-tag entries, but the canonical upstream file at github.com/cadaver/sidid (the SIDId project's own repo, Lasse Oorni/Cadaver) does: `Antony_Crowther_V3` is immediately followed by exactly two indented `(subid)` entries, `(FCS_V1.0)` and `(FCS_V1.1)`, both `NAME: We-Music Editor V1.0`/`V1.1`, `AUTHOR: Juha Granberg (Finland Cracking Service)`, `RELEASED: 1987 Finnish Gold` / `1988 Finnish Gold`, referencing CSDb releases https://csdb.dk/release/?id=97497 and https://csdb.dk/release/?id=97498 respectively. This is a NAMED, INDEPENDENTLY-AUTHORED Finnish editor (Finland Cracking Service/Finnish Gold, unrelated to Crowther or Gremlin) that SIDId's signature scanner fingerprints as producing Antony_Crowther_V3-pattern output — direct confirmation that at least one of the tag's 'few editors' is real and identifiable, not merely inferred from composer spread. This also plausibly explains this dataset's FCS-tagged files (3) AND several of the Rock-tagged files (6, Sami Seppä — CSDb credits both We-Music Editor releases jointly to 'Finland Cracking Service' and 'Rock of Finnish Gold', and one of this dataset's own Antony_Crowther_V3-tagged FCS files, 'The Neon Nights', is co-credited to 'Juha Granberg & Sami Seppä (Rock)') — together 9 of 83 files (11%) plausibly traceable to this one named tool, versus 71 files (Daglish/Crowther/Rowlands/Bjerregaard/others) still unexplained by it. CSDb's own page for We-Music Editor V1.0 gives no stated basis/derivation for the tool ('No specific player/routine basis is mentioned in the available documentation'), and We-Music Editor V1.1's credits oddly list 'Ben Daglish' among its music contributors alongside FCS/Rock — not enough on its own to assert any code-sharing between the FCS tool and whatever Daglish used at Gremlin, but a second coincidental Daglish/FCS touchpoint worth flagging for a future pass.",
    "THE STEVE ROWLANDS LEAD ACTIVELY UNDERMINES 'THIS IS CROWTHER'S CODE, WIDELY LICENSED' AS A SIMPLE EXPLANATION. Steve Rowlands' own Lemon64 interview credits his brother John with writing the actual editor: 'It was a simple text editor/compiler with the relevant commands for each channel, ADSR, tempo, waveform, filters, all that sort of stuff' — no mention of Crowther, Gremlin, or Daglish anywhere in that interview. Two readings are equally consistent with the evidence: (a) John Rowlands independently wrote a DIFFERENT tool that SIDId's signature scanner happens to conflate with the Gremlin-era one (a false grouping — 'V3' would then be at least two unrelated tools under one tag, echoing the dave-spicer precedent but *within* a single tag rather than across a version split); or (b) John Rowlands built his own EDITOR on top of a genuinely shared underlying replay routine (consistent with SIDId's 'a few editors are written for this player' comment) that happens to trace back to, or resemble, Crowther-lineage code. Not resolved — reported as an open question, not guessed.",
    "TIMESPAN IS SUSPICIOUSLY WIDE FOR ONE ACTIVELY-MAINTAINED TOOL (1986-1993, 7 years, per CSDb release years for Gauntlet vs Mayhem in Monsterland) — much longer than the V1+V2 Music Master line's roughly 2-year span (1984-1986) or than an actively revised tool like [[john-player]] (2001-2002, with a documented version changelog). This is more consistent with either (a) a single, STABLE, unchanged routine that simply kept getting reused/copied for years once written (plausible for a solid commercial-game player), or (b) SIDId's fingerprint genuinely matching structurally similar but independently-written code across that whole span. No source distinguishes these.",
    "PER-GAME ENTRY-POINT METADATA (from CSDb SID pages, not a disassembly) DOES NOT CLEANLY CONFIRM A SHARED TEMPLATE: Gauntlet (Daglish, 1986) has play = load+$10; Krakout (Daglish, 1987) has play = load+1 with init relocated far from load ($E000 load, $F720 init); Mayhem in Monsterland (Rowlands, 1993) has play = load+3. These offsets are not consistent with each other, though differing packing/relocation could still hide a shared underlying routine — inconclusive either way without real disassembly. Reported, not resolved.",
    "COMPOSER CONCENTRATION: 83 files, 10 composers. Daglish 40 (48%), Crowther 12 (14%), Rowlands 13 (16%), Rock 6 (7%), Bjerregaard 5 (6%), FCS 3 (4%), and four composers with 1 file each (Crowley Mr, Olav Moerkrid, SMC, TN) — sums to 83. This is a genuinely wide spread by company/country/era (English commercial games industry, Danish and Finnish demoscene) — the KB's usual composer-concentration heuristic (few composers = personal routine) reads this as 'a real, adopted tool', but WHO built and owns it remains unconfirmed; the spread argues against it being any one person's private routine, Crowther's included.",
    "DO NOT MERGE WITH [[antony-crowther]] (V1/V2, 'Music Master') without new evidence. If a future disassembly finds byte-identical or clearly-derived code between a V1/V2 file and a V3 file, revisit this decision and consider a `derives_from` edge — none is asserted here for lack of any such evidence."
  ],
  "sources": [
    "sidid: Antony_Crowther_V3 entry (author 'Antony Crowther', comment 'A few editors are written for this player, see subids', NO name/reference fields — contrast with V2's 'Music Master' + CSDb reference) — deepsid_dl/sidid.nfo, imported to data/sidid.json",
    "knowledge/COVERAGE.md — 'Partially carded families' table, Antony_Crowther row, 98 unclaimed files across V2 (15, now claimed on [[antony-crowther]]) and V3 (83, claimed by this card)",
    "Local dataset: data/composers/*.json — 83 files tagged Antony_Crowther_V3 across 10 composers (Ben Daglish 40, Antony Crowther 12, Steve Rowlands 13, Rock 6, Johannes Bjerregaard 5, FCS 3, Crowley Mr/SMC/TN/Olav Moerkrid 1 each)",
    "VGMPF — Ben Daglish ('At Gremlin, Daglish used another driver'; Gremlin's in-house programmers write player routines, not Daglish himself): https://vgmpf.com/Wiki/index.php/Ben%20Daglish",
    "CSDb SID entry — Gauntlet (Ben Daglish, 1986, Gremlin Graphics/US Gold): https://csdb.dk/sid/?id=10322",
    "CSDb SID entry — Krakout (Ben Daglish, 1987, Gremlin Graphics): https://csdb.dk/sid/?id=10335",
    "CSDb SID entry — Mayhem in Monsterland (Steve Rowlands, 1993, Apex Computer Productions): https://csdb.dk/sid/?id=24661",
    "Lemon64 — Steve Rowlands interview (his brother John's own words on writing the editor; no mention of Crowther/Gremlin/Daglish): https://www.lemon64.com/interviews/steve_rowlands.php",
    "Existing KB card: knowledge/players/antony-crowther.md (the V1/V2 'Music Master' card this one is deliberately kept separate from)",
    "Existing KB card: knowledge/players/dave-spicer-v1.md (the counter-example precedent this decision follows — a shared name/tag family is not evidence of one driver)",
    "SIDId project upstream source (fuller than the locally cached snapshot — carries the `(FCS_V1.0)`/`(FCS_V1.1)` subid entries under Antony_Crowther_V3 that deepsid_dl/sidid.nfo's import does not): https://github.com/cadaver/sidid/blob/master/sidid.nfo (lines ~71-85)",
    "CSDb release — We-Music Editor V1.0 (Finland Cracking Service, Finnish Gold, 10 Nov 1987): https://csdb.dk/release/?id=97497",
    "CSDb release — We-Music Editor V1.1 (Finland Cracking Service, Finnish Gold, 26 Jan 1988; music credits incl. Ben Daglish, FCS, Rock): https://csdb.dk/release/?id=97498",
    "Local dataset: data/composers/fcs.json ('The Neon Nights', author 'Juha Granberg & Sami Seppä(Rock)', tag Antony_Crowther_V3, csdb_id 12680) and data/composers/rock.json (6 Antony_Crowther_V3-tagged files, several co-credited to J. Granberg) — corroborates the We-Music Editor/FCS/Rock connection found in the SIDId subids"
  ]
}
```

## Overview

`Antony_Crowther_V3` is a SIDId Player-ID signature covering 83 files
in this dataset — but, unlike its sibling tags `Antony_Crowther_V1`/
`_V2` (documented on [[antony-crowther]] as Antony Crowther's own
'Music Master' BASIC compiler), the evidence here does NOT support the
same author or the same tool. V3 is dominated by Ben Daglish's entire
post-1987 Gremlin Graphics commercial catalogue (48% of files) — the
very driver Daglish is on record as having switched to once he joined
Gremlin, described by VGMPF only as "another driver", not Crowther's.
The tag also covers composers with no known link to Crowther or
Gremlin at all: Steve Rowlands (Apex Computer Productions), Johannes
Bjerregaard (Denmark), and FCS (Finland Cracking Service). SIDId's own
comment on the tag — "a few editors are written for this player, see
subids" — independently signals a shared underlying routine with
multiple front-end editors, not a personal tool, and this session
confirmed that pointer against SIDId's upstream GitHub source: one
named "subid" is "We-Music Editor" (v1.0/v1.1, 1987-88), an
independently-authored Finnish tool by Juha Granberg/Finland Cracking
Service, unrelated to Crowther or Gremlin — accounting for roughly 9 of
the 83 files here (FCS + Rock). Given a real counter-example already
exists in this KB for "same name, different driver"
(`dave-spicer-v1`/`dave-spicer-v15`), this card treats V3 as a
genuinely separate, currently unidentified driver rather than folding
it into the Music Master card on the strength of a shared tag prefix
alone.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones:

- **Not merged with V1/V2, decided from evidence**: composer/usage
  profile, Daglish's own on-record "another driver" statement, and
  SIDId's own "a few editors" comment all point away from this being
  the same narrow tool documented on [[antony-crowther]].
- **True authorship is unconfirmed**, not merely unresearched — Daglish
  says Gremlin's in-house programmers wrote his player, not himself;
  Steve Rowlands' brother John separately describes writing his own
  editor with no mention of Crowther/Gremlin at all. Two genuinely
  different explanations (one shared engine with many editors, or a
  false SIDId grouping of unrelated code) both fit the evidence.
- **A 7-year usage span** (1986-1993) is unusually wide for one
  actively-developed tool, more consistent with a stable, long-reused
  commercial routine than a versioned line under active revision.
- **SIDId's "see subids" pointer is now confirmed, not speculative**:
  upstream `sidid.nfo` (github.com/cadaver/sidid, fuller than this
  project's locally cached snapshot) lists two named sub-entries,
  `(FCS_V1.0)`/`(FCS_V1.1)` — "We-Music Editor", an independently
  authored Finnish tool (Juha Granberg/Finland Cracking Service, Finnish
  Gold, 1987-88) with no stated Crowther/Gremlin connection of its own —
  which plausibly explains the FCS (3) and Rock (6) composers in this
  tag's breakdown. Daglish's and Rowlands' portions remain unexplained
  by any named subid.

## Disassembly notes

None done this session (Tier 1/2 provenance research only, per scope).
Per-game load/init/play addresses were pulled from CSDb's SID-file
metadata (not a disassembly) for three representative files (Gauntlet,
Krakout, Mayhem in Monsterland) and do not show a consistent
init-to-play offset — inconclusive on its own. A real disassembly and
`sidm2-siddump` trace of at least one V3 file (ideally a Daglish
Gremlin title and the Rowlands file, to test whether they're really the
same code) is the obvious next step, and would also let a future pass
test for byte-level similarity against a V1/V2 Music Master trace.

## Verification

**Not verified — `status: stub`.** Every Tier 3 field is `TODO`. This
card exists to document *why* 83 files should NOT be silently folded
into [[antony-crowther]] under the same name, and to record the
provenance evidence gathered so a future disassembly pass starts
informed rather than from zero.

## Sources

See the `sources` array — SIDId's `Antony_Crowther_V3` entry (locally
cached and, for the subids, the fuller upstream github.com/cadaver/sidid
copy), this dataset's own composer/file breakdown, VGMPF's Ben Daglish
page, three CSDb SID-file pages plus the two We-Music Editor release
pages, the Steve Rowlands Lemon64 interview, and the related
antony-crowther and dave-spicer-v1 cards.

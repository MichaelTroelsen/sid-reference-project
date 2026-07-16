# Antony Crowther / Music Master (We M.U.S.I.C.)

```json
{
  "id": "antony-crowther",
  "name": "Antony Crowther / Music Master (We M.U.S.I.C.)",
  "aliases": ["Antony_Crowther_V1", "Antony_Crowther_V2"],
  "authors": ["Antony Crowther ('Ratt')"],
  "released": "1984-1986 (V1, Crowther's own pre-publication use); 7 March 1986 published as 'Music Master' in Your Commodore 3/86 (V2, matches SIDId's Antony_Crowther_V2 name/reference exactly)",
  "status": "in-progress",
  "platform": "Well-known Gremlin Graphics coder/designer Antony (Tony) Crowther's own C64 music compiler, 'Music Master' — a BASIC-driven type-in-listing tool released March 1986 in Your Commodore magazine. CONFIRMS, with an important scope correction, the tooling link already noted on [[ben-daglish]]'s card: Ben Daglish used this compiler ONLY during the pre-Gremlin, We M.U.S.I.C. era (through spring 1987) — VGMPF states Daglish 'used another driver' once he joined Gremlin in-house, so his celebrated Gremlin-era scores are NOT confirmed to run on this code (they are tagged Antony_Crowther_V3 instead — see [[antony-crowther-v3]], a DIFFERENT, structurally distinct driver deliberately NOT merged here; see quirks). Player-ID-fingerprinted across 19 files (4 tagged V1 + 15 tagged V2): dominated by Crowther (12: 3 V1 + 9 V2) and Daglish (3: 1 V1 + 2 V2), plus a handful of otherwise-unconnected composers who evidently typed in the same magazine listing (Dale Edgar, Doomdark, Wally Beben) — consistent with the tool's 'Type-in listing' distribution model.",
  "csdb_release": 14590,

  "memory": { "load_address": "Sample HVSC file traced (Monty Mole, 1984, composed by Crowther): load $8500 (init $922e, play $9234).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $922e.", "play": "Sample trace: $9234 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "RESOLVED (this session): Antony_Crowther_V1 AND _V2 ARE READ AS THE SAME EVOLVING TOOL — MERGED, though with one soft spot flagged below. Antony_Crowther_V3 (83 files, uncarded before this session) is NOT the same tool and is deliberately NOT merged; it now has its own card, [[antony-crowther-v3]]. Evidence for the V2 identity ('Music Master') is solid: SIDId's own `Antony_Crowther_V2` entry names it 'Music Master', released '1986 Your Commodore', reference `https://csdb.dk/release/?id=14590`; `data/players.json`'s curated 'Music Master' player entry cites the same csdb_id (14590), the same 1985-1986 date range, and 'example_tunes: 4', which matches EXACTLY the four files in this dataset's V2 tag named 'Example 1 - Simple Scale' / 'Example 2 - Wobbler' / 'Example 3 - Drums' / 'Example 4 - Renaissance'. CAVEAT on that csdb_id: CSDb release 14590 ITSELF is actually titled 'We Music Sound Editor' (1987, group Pure Logic, code by Ratt/Crowther) — not 'Music Master' (1986) — so SIDId and DeepSID citing the same id is NOT independent corroboration of two different databases, it is two databases pointing at one (differently-titled/dated) release; treat the 'example_tunes: 4' match as the stronger of the two pieces of evidence. WEAKER EVIDENCE FOR FOLDING IN V1 SPECIFICALLY: there is NO `Antony_Crowther_V1` entry in `data/sidid.json` at all (only V2 and V3 exist as SIDId signatures) — V1's inclusion here rests entirely on inference (both V1 and V2 stay within the same narrow Crowther/Daglish circle, and V1's earliest file, Monty Mole 1984, predates the March 1986 published V2 listing by two years, read as Crowther's own pre-publication/private revision of the same compiler line) rather than any direct citation naming V1 as Music Master. This is the same class of judgment call antony-crowther-v3.md was deliberately kept OUT of — flagged here rather than presented as equally solid.",
    "Antony_Crowther_V3 WAS DELIBERATELY EXCLUDED FROM THIS MERGE, decided from evidence, not assumption: its 83 files span a RADICALLY different composer/usage profile — Ben Daglish's entire post-1987 Gremlin Graphics commercial catalogue (Gauntlet, Krakout, Trap, Way of the Tiger, Firelord, He-Man, etc., 1986-1988), PLUS composers with no known Crowther/Gremlin connection at all (Steve Rowlands/Apex Computer Productions — a different company entirely, whose brother John independently describes writing his OWN 'simple text editor/compiler' per his own Lemon64 interview; Johannes Bjerregaard, Denmark; FCS/Finland Cracking Service). Ben Daglish himself is on record (VGMPF) that at Gremlin he 'used another driver' distinct from Crowther's Music Master. A further claim that he does not write his own player routines — 'Gremlin's in-house programmers create the software' — could not be traced to a verifiable source during this pass and should be treated as unconfirmed, not repeated as fact. SIDId's own comment for V3, 'A few editors are written for this player, see subids', independently signals a shared/widely-adopted routine with multiple front-end editors, not a personal tool — the opposite profile from V1/V2's narrow, magazine-listing circulation. Full writeup and citations: [[antony-crowther-v3]].",
    "MUSIC MASTER CONFIRMED AS A NAMED, DATED PRODUCT: VGMPF's dedicated page states it was released 7 March 1986 in Your Commodore issue 3/86 — a BASIC-driven three-voice compiler with vibrato/PWM/pitch-bend, tuned to 434Hz, with cryptic border-color error feedback. VGMPF states directly: 'Ben Daglish is listed as a composer who used Music Master on at least one game' — almost certainly the direct explanation for the 1-of-4-file Daglish credit under this exact tag.",
    "THE BEN DAGLISH TOOLING LINK IS CONFIRMED BUT MUST BE SCOPED PRECISELY, a genuine correction to the wording already on [[ben-daglish]]'s own card: VGMPF states 'Up to We M.U.S.I.C., Daglish used a compiler developed by Crowther... At Gremlin, Daglish used another driver.' Crowther and Daglish formed We M.U.S.I.C. ('We Make Use of Sound in Computers') in spring 1986, sharing a school (Bradfield) background; Crowther quit it in spring 1987 to focus on game programming, at which point Daglish joined Gremlin in-house. So the Crowther/Music Master tooling link applies ONLY to the pre-Gremlin period — Daglish's celebrated Gremlin-era scores (The Last Ninja, Gauntlet, 720 Degrees, Deflektor, Trap) are NOT confirmed to run on this code; that later routine remains separate and undocumented. `ben-daglish.md` has been updated in this same batch with this exact scoping.",
    "IN DAGLISH'S OWN WORDS (Lemon64 interview), the collaboration's origin predates We M.U.S.I.C. itself: 'I got into composing music for the gaming industry through being at school with Tony Crowther' and 'The first game I had a hand in was Tony Crowther's Potty Pigeon — I wrote out the notes for the Death March for him' — i.e. Daglish's very first industry credit was contributing TO one of Crowther's own games, before the tooling relationship reversed.",
    "CROWTHER WAS ALSO A MUSICIAN IN HIS OWN RIGHT ON HIS OWN GAMES, not just a tool-builder: composed his own themes for Monty Mole (1984, the traced file) and Potty Pigeon (1984, a rendition of 'All Creatures Great and Small' — Daglish's contribution there was only the death-march segment), plus Killer Watt and Suicide Express (confirmed via a Retro Video Gamer interview). A joint CSDb/HVSC release, 'We M.U.S.I.C. 3 / Ben Daglish & Antony Crowther / 1986', documents the direct collaboration.",
    "AN INCORRECT PREMISE IN THE ORIGINAL RESEARCH BRIEF WAS CAUGHT AND CORRECTED: Crowther did NOT collaborate with Jon Hare on 'Wizball' — multiple sources (Wikipedia, VGMPF) confirm Wizball was actually programmed by Chris Yates, art by Jon Hare, and MUSIC by [[martin-galway]] (already VERIFIED in this KB) — Crowther is not credited on that title at all. Not carried forward as fact.",
    "BROADER BIOGRAPHY, well-documented: born 10 May 1965, Sheffield; self-taught on a PET 4032 then VIC-20 (a Galaxian clone caught Superior Software's eye, leading to his C64 debut 'Lunar Rescue'); worked at Alligata, then Gremlin Graphics (co-created Monty Mole with Peter Harrap), founded Wizard Development Ltd. in 1985; later career extended into Amiga/ST (Captive, BAFTA-winning) and PlayStation/Xbox/GameCube-era titles including Harry Potter adaptations. CSDb scener id=2714 (handles 'Antony Crowther'/'Ratt'/'ARC86' on Compunet) shows credits spanning 1983-2024.",
    "A GENUINE, SOURCED CONNECTION TO A VERIFIED KB COMPOSER: [[martin-galway]] (VERIFIED), via the Wizball correction above — not a Crowther collaboration, but a fact surfaced while investigating one. Direct, confirmed relationship to [[ben-daglish]] (the Music Master tooling link, scoped as above) — not encoded as a technical `shares_routine_with` edge since [[ben-daglish]]'s card documents the same finding from the Daglish side and cross-references back here via prose links instead. No other known relationship found (checked against Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Crowther, Antony (Ratt) - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "VGMPF — Antony Crowther: https://vgmpf.com/Wiki/index.php/Antony_Crowther",
    "VGMPF — Ben Daglish (Crowther/Music Master/We M.U.S.I.C. tooling scope): https://vgmpf.com/Wiki/index.php/Ben%20Daglish",
    "VGMPF — Music Master: Antony Crowther (dedicated tool page, release date, Daglish credit): https://vgmpf.com/Wiki/index.php?title=Music_Master:_Antony_Crowther",
    "Lemon64 — Ben Daglish interview (his own words on Crowther/Potty Pigeon): https://www.lemon64.com/interviews/ben_daglish.php",
    "Wikipedia — Ben Daglish; Antony Crowther (biography, We M.U.S.I.C., Wizball correction): https://en.wikipedia.org/wiki/Antony_Crowther",
    "CSDb — We M.U.S.I.C. 3 / Ben Daglish & Antony Crowther / 1986 (joint release): https://csdb.dk/sid/?id=10293",
    "CSDb scener id=2714 (Antony Crowther / Ratt / ARC86): https://csdb.dk/scener/?id=2714",
    "Retro Video Gamer — Antony Crowther interview: https://www.retrovideogamer.co.uk/rvg-interviews-antony-crowther/",
    "Existing KB card: knowledge/players/ben-daglish.md (the tooling-link card this research directly refines)",
    "sidid: Antony_Crowther_V2 entry ('Music Master', released 1986 Your Commodore, reference csdb.dk/release/?id=14590) — deepsid_dl/sidid.nfo, imported to data/sidid.json",
    "data/players.json curated 'Music Master' player entry (developer Antony Crowther, csdb_id 14590, start_year 1985/end_year 1986, distribution 'Type-in listing', example_tunes '4', docs link to Your Commodore 3/86 archive.org scan) — independently corroborates the V1+V2 merge",
    "CSDb release 14590, 'We Music Sound Editor', 1987, group Pure Logic, code by Ratt (Crowther), music by Benn/David Whittaker/Ratt: https://csdb.dk/release/?id=14590",
    "Local dataset: data/composers/*.json — 4 files tagged Antony_Crowther_V1 (2 composers), 15 files tagged Antony_Crowther_V2 (5 composers: Crowther, Daglish, Dale Edgar, Doomdark, Wally Beben); see knowledge/COVERAGE.md's 'Partially carded families' table (now resolved by this alias addition)",
    "Existing KB card: knowledge/players/antony-crowther-v3.md (the sibling card documenting why Antony_Crowther_V3 was NOT merged here)"
  ]
}
```

## Overview

The `Antony_Crowther_V1` and `Antony_Crowther_V2` tags are well-known
Gremlin Graphics coder/designer Antony Crowther's own C64 music
compiler, 'Music Master' (published 7 March 1986 in Your Commodore
3/86; V1 is read as an earlier, pre-publication revision of the same
line, first used on Crowther's own 1984 games). This research confirms
— and importantly scopes more precisely — the tooling link already
noted on [[ben-daglish]]'s card: Daglish used this compiler only
through the pre-Gremlin We M.U.S.I.C. era, not for his later, more
famous Gremlin-house scores (those are `Antony_Crowther_V3`, a
different, uncarded-until-now driver — see [[antony-crowther-v3]]).
Player-ID-fingerprinted across 19 files (4 V1 + 15 V2), dominated by
Crowther and Daglish with a few otherwise-unconnected composers
plausibly explained by the tool's magazine type-in-listing
distribution.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones are: (1) the **V1+V2
merge decided from evidence** (SIDId's own naming, a matching CSDb
release id, and an exact 4-example-tune match against the curated
DeepSID spec), and, just as important, (2) the **deliberate non-merge
of V3** — 83 files with a radically different composer/usage profile,
now split into its own card, [[antony-crowther-v3]]. Also carried over
from the original research: the **precise scoping correction** to the
existing Daglish/Crowther tooling narrative in this KB, directly
sourced to VGMPF's own wording ('at Gremlin, Daglish used another
driver'), and an **incorrect Wizball premise** in the original research
brief that was caught and corrected, surfacing a genuine fact about
[[martin-galway]] (already VERIFIED) instead.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Antony_Crowther_V1`-
tagged `.sid` + trace — which could also help confirm whether Daglish's
1 file under this tag is byte-identical to Crowther's own Music Master
output, or merely uses the same compiler with different data. A V2
trace (e.g. one of the four bundled 'Example' tunes) would be the
cleanest way to confirm V1 and V2 are genuinely the same compiled
player and not just two similarly-scoped tags — not done this session
(no disassembly, per this session's Tier 1/2 scope).

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Antony_Crowther_V1` `.sid` (Monty Mole, composed by
Crowther): load `$8500`, init `$922e`, play `$9234`, **27 register writes
/ 50 frames** (0 filter writes). Internals undocumented; memory map/
format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF (3 pages), Lemon64,
Wikipedia, CSDb (3 entries), Retro Video Gamer, SIDId's `sidid.json`,
`data/players.json`'s curated 'Music Master' entry, and the related
ben-daglish and antony-crowther-v3 cards.

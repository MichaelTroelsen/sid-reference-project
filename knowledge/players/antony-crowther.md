# Antony Crowther / Music Master (We M.U.S.I.C.)

```json
{
  "id": "antony-crowther",
  "name": "Antony Crowther / Music Master (We M.U.S.I.C.)",
  "aliases": ["Antony_Crowther_V1"],
  "authors": ["Antony Crowther ('Ratt')"],
  "released": "7 March 1986 (Music Master, Your Commodore 3/86)",
  "status": "in-progress",
  "platform": "Well-known Gremlin Graphics coder/designer Antony (Tony) Crowther's own C64 music compiler, 'Music Master' — released March 1986 in Your Commodore magazine. CONFIRMS, with an important scope correction, the tooling link already noted on [[ben-daglish]]'s card: Ben Daglish used this compiler ONLY during the pre-Gremlin, We M.U.S.I.C. era (through spring 1987) — VGMPF states Daglish 'used another driver' once he joined Gremlin in-house, so his celebrated Gremlin-era scores are NOT confirmed to run on this code. Player-ID-fingerprinted across 4 files: 3 by Crowther, 1 by Daglish (the pre-Gremlin credit this scoping explains).",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Monty Mole, 1984, composed by Crowther): load $8500 (init $922e, play $9234).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $922e.", "play": "Sample trace: $9234 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
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
    "Local dataset: 4 files tagged Antony_Crowther_V1, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Antony_Crowther_V1` tag is well-known Gremlin Graphics coder/
designer Antony Crowther's own C64 music compiler, 'Music Master'
(March 1986). This research confirms — and importantly scopes more
precisely — the tooling link already noted on [[ben-daglish]]'s card:
Daglish used this compiler only through the pre-Gremlin We M.U.S.I.C.
era, not for his later, more famous Gremlin-house scores. Player-ID-
fingerprinted across 4 files: 3 by Crowther, 1 by Daglish.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **precise scoping
correction** to the existing Daglish/Crowther tooling narrative in this
KB, directly sourced to VGMPF's own wording ('at Gremlin, Daglish used
another driver'). Also notable: an **incorrect Wizball premise** in the
original research brief was caught and corrected, surfacing a genuine
fact about [[martin-galway]] (already VERIFIED) instead.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Antony_Crowther_V1`-
tagged `.sid` + trace — which could also help confirm whether Daglish's
1 file under this tag is byte-identical to Crowther's own Music Master
output, or merely uses the same compiler with different data.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Antony_Crowther_V1` `.sid` (Monty Mole, composed by
Crowther): load `$8500`, init `$922e`, play `$9234`, **27 register writes
/ 50 frames** (0 filter writes). Internals undocumented; memory map/
format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF (3 pages), Lemon64,
Wikipedia, CSDb (2 entries), Retro Video Gamer, and the related
ben-daglish card.

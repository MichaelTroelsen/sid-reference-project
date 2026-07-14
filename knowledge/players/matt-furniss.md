# Matt Furniss (Krisalis/Teque driver)

```json
{
  "id": "matt-furniss",
  "name": "Matt Furniss (Krisalis/Teque driver)",
  "aliases": ["Matt_Furniss"],
  "authors": ["Shaun Hollingworth (coder)", "Matt Furniss (musician)"],
  "released": "1989-1991 (Teque Software Development / Krisalis era)",
  "status": "in-progress",
  "platform": "A driver used to play back musician Matt Furniss's compositions on the C64 — CONFIRMED, in Furniss's own words, to be CODED BY SHAUN HOLLINGWORTH, not Furniss himself, since Furniss 'didn't know programming.' Furniss composed on Amiga/Atari ST tools (Pro24 on an Atari Mega ST) and Hollingworth's driver played the result back on C64. Used at Teque Software Development (whose in-house label Krisalis became the studio's name in 1991). Player-ID-fingerprinted across 6 files, all by Furniss.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Badlands, 1990, Domark): load $f2ca (init $f2ca, play $f2f6).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $f2ca.", "play": "Sample trace: $f2f6 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CODER IDENTITY CONFIRMED IN A PRIMARY SOURCE, Furniss's own words: 'Shaun wrote most of the sound engines I used in the early years' (Sega-16 interview) — corroborated by VGMPF: 'Since Furniss didn't know programming, Hollingworth coded the sound drivers for his games.' This means the composer-name tag ('Matt_Furniss') is a MUSICIAN signature, not the actual driver author — same important distinction already established on several other tags in this KB (e.g. tools attributed by composer name that were actually coded by a labelmate).",
    "FURNISS NEVER OWNED A C64 HIMSELF — he composed on Amiga/Atari ST tools (specifically Pro24 by Steinberg, on an Atari Mega ST) and his tunes were ported/played back on C64 via Hollingworth's driver. This is a distinctive, sourced production workflow worth preserving: unlike most composers in this KB, the C64 was never his own composing platform at all.",
    "EMPLOYER RECONCILED ACROSS TWO SLIGHTLY DIFFERING SOURCES: hired 1989 by Teque Software Development (founded 1987 by Tony Kavanagh, Peter Harrap, Shaun Hollingworth); Teque's in-house label 'Krisalis' became the company's own official name in 1991 — this reconciles VGMPF's phrasing ('hired by Krisalis 1989') with Furniss's own account of his first job being at 'Teque,' first project Laser Squad (Amiga).",
    "20 CONFIRMED C64 GAME CREDITS (1989-1992) per Lemon64's own individual list, independently roughly matched by CSDb's own 18-result search for the surname: Badlands (the traced file, 1990 Domark, Atari Games arcade conversion), Castle Master, Castle Master II, Chase HQ, Cyberball, Escape from the Planet of the Robot Monsters, Jahangir Khan World Championship Squash (1991, Krisalis, multi-platform), KLAX, Manchester United (both versions), Passing Shot, S.T.U.N. Runner, Scramble Spirits, Shadow Warriors, The Shoe People, Skull and Crossbones, Space Harrier II, The Spy Who Loved Me, Subbuteo, Toobin'.",
    "THE GREMLIN GRAPHICS / BEN DAGLISH CONNECTION FROM [[ben-daglish]]'s CARD IS CONFIRMED BUT REFINED, NOT TIGHTENED: per VGMPF, Furniss started as a Gremlin Graphics PLAYTESTER (he frequented the 'Just Micro' shop near/above Gremlin's office) and met Ben Daglish, his favorite composer, there — but Furniss was NEVER a Gremlin in-house composer; his actual composing career was entirely at Teque/Krisalis. Given that Furniss's own C64 output runs through Hollingworth's Krisalis/Teque driver rather than a self-written one, the research explicitly concludes the 'Matt_Furniss' tag and the 8-file 'Ben_Daglish/Gremlin' tag overlap noted on Daglish's own card are LIKELY DIFFERENT CODE ENTIRELY (Hollingworth's engine vs. Daglish's own Crowther-derived compiler) — the existing Daglish-card caution ('plausible reuse, not confirmed') should stay as-is, not be tightened toward a confirmed shared-routine claim.",
    "A CROSS-PLAYER HALLUCINATION TRAP WAS FOUND AND RULED OUT: CSDb scener id=13681, handle 'Matt' (Compunet ID 'FP1'), is a DIFFERENT, unrelated mid-1980s demoscene musician with 2023-dated re-releases and no groups — NOT Matt Furniss, and must not be cited as his scener profile. No trustworthy CSDb scener page for the real Matt Furniss was found.",
    "Birth details ('6 Mar 1973, Sheffield' per VGMPF) are single-sourced and NOT independently cross-verified — flagged as unconfirmed, not stated as settled fact.",
    "Not confirmed in SIDId (no entry for this tag). No other known relationship found to any composer/tool already in this KB beyond the Daglish/Gremlin connection discussed above (checked against Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Furniss, Matt - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Sega-16 — Matt Furniss interview (his own quote: 'Shaun wrote most of the sound engines I used in the early years'): https://www.sega-16.com/2010/04/interview-matt-furniss/",
    "VGMPF — Matt Furniss (Hollingworth coding confirmation, Pro24/Atari Mega ST composing workflow, Gremlin playtester origin story, birth details): https://www.vgmpf.com/Wiki/index.php/Matt_Furniss",
    "Wikipedia — Krisalis Software (Teque founding, 1987, renamed 1991): https://en.wikipedia.org/wiki/Krisalis_Software",
    "Lemon64 — Badlands (full credits, traced file): https://www.lemon64.com/game/badlands",
    "Lemon64 — Matt Furniss game list (20 titles): https://www.lemon64.com/games/list.php?list_individual=matt-furniss",
    "CSDb search — Furniss (18 SID matches, 1989-1991): https://csdb.dk/search/?seinsel=all&search=Furniss",
    "CSDb scener id=13681 ('Matt'/'FP1') — explicitly a DIFFERENT, unrelated person, not to be cited as Furniss's profile: https://csdb.dk/scener/?id=13681",
    "Existing KB card: knowledge/players/ben-daglish.md (the 8-file Ben_Daglish/Gremlin overlap this card's research refines)",
    "Local dataset: 6 files tagged Matt_Furniss, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Matt_Furniss` tag identifies compositions by musician Matt Furniss,
played back on C64 via a driver CODED BY SHAUN HOLLINGWORTH (Furniss
himself never learned programming) at Teque Software Development/
Krisalis. Furniss composed on Amiga/Atari ST tools, not the C64 itself.
Player-ID-fingerprinted across 6 files, all by Furniss.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **primary-source
confirmation that Hollingworth, not Furniss, coded the driver**; the
**cross-platform composing workflow** (Pro24 on Atari ST, never a C64
composing tool); and a **refinement, not a tightening**, of the existing
Ben_Daglish/Gremlin card's tag-overlap caution — new evidence suggests
different underlying code, not a confirmed shared routine.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Matt_Furniss`-tagged `.sid`
+ trace — which could also directly settle whether this driver shares any
code with the Ben_Daglish/Gremlin tag's routine.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Matt_Furniss` `.sid` (Badlands): load `$f2ca`, init
`$f2ca`, play `$f2f6`, **245 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Sega-16, VGMPF, Wikipedia,
Lemon64 (2 pages), CSDb (2 entries), and the related ben-daglish card.

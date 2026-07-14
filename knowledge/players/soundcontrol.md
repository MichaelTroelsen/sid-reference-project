# Soundcontrol / SOPROL (Holger Gehrmann)

```json
{
  "id": "soundcontrol",
  "name": "Soundcontrol / SOPROL (Holger Gehrmann)",
  "aliases": ["Holger_Gehrmann"],
  "authors": ["Holger Gehrmann"],
  "released": "1984-1985 (Soundcontrol 2, HG-Software Systems; date conflicts across CSDb's own records, see quirks)",
  "status": "in-progress",
  "platform": "A compiled-BASIC-like music tool: SOPROL ('Sound Programming Language'), where songs are typed in like a BASIC program (labels, sound commands) and a compiler converts them to machine language. Per the author's own account, compiled songs ran VERY slowly due to the language's structure. Later ported to Atari ST and Amiga (the Amiga Soundcontrol supported macros comparable to Chris Hülsbeck's TFMX). Player-ID-fingerprinted across 9 files, all by Gehrmann himself.",
  "csdb_release": 30432,

  "memory": { "load_address": "Sample HVSC file traced (Graffiti Man): load $3000 (init $3400, play $3403). CSDb's own SID entry for Soundcontrol 2 lists load $9000 separately.", "zero_page": "TODO (no disassembly)", "layout": "Compiled from a BASIC-like source language (SOPROL) with labels and sound commands — not a conventional pattern/table format." },
  "entry": { "init": "Sample trace: $3400.", "play": "Sample trace: $3403 (called in IRQ)." },
  "speed": "TODO (author's own account: compiled songs ran 'VERY slow' due to SOPROL's language structure).",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 1 filter write in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "FIRST-PARTY CONFIRMED, DETAILED DESCRIPTION of SOPROL, quoted directly from a 2001 Remix64 interview with Gehrmann himself: 'On the C-64 I made Soundcontrol and a sound programming language called SOPROL which I also used on the Atari ST. The Amiga version of SOPROL was used in early games like Hollywood Poker and Space Port, and the Amiga-Soundcontrol which allowed similar macros like Chris Hülsbeck's TFMX was used till BIING!.' He named 'Hollywood Poker' as arguably his best composition. Architecturally DISTINCT from every other tool currently in this KB — a compiled DSL, not a table/pattern player.",
    "DATE CONFLICT, explicitly flagged rather than silently resolved: CSDb's own release page for 'Soundcontrol 2' gives 1984; CSDb's own SID-file page for the SAME title gives 1985 — a genuine inconsistency within CSDb's own records, not a project data error. Separately, a secondary (unverified) source describes SOPROL as designed in 1986 — TWO YEARS AFTER the C64 tool it's supposedly used in, per this project's own SIDId comment. Possible explanations (revision, loose conflation of the tool family) are not resolved by any source found — left as an open discrepancy.",
    "'GRAFFITI MAN' AND 'HOLLYWOOD POKER' (both file titles in the traced folder) are CONFIRMED real Gehrmann-composed games, both released multi-platform (C64/Amiga/Atari ST) — not generic HVSC filenames.",
    "GEHRMANN'S BROADER CAREER: founder of HG-Software Systems (demoscene, active 1983-1987, functions Cracker AND Musician per CSDb — not purely a coder tag); founded Golden Games (1986, with Dieter Eckhardt) then reLINE Software GmbH (Hannover, 1987, folded 2004), which employed Karsten Obarski (author of the influential Ultimate Soundtracker Amiga tracker) as sound programmer for 4+ years. Organizer of the 'reLINE Software Programmer Party' 1989-1991. Named Rob Hubbard (already carded in this KB as [[rob-hubbard]]) as a musical influence — an admiration link only, no evidence of code derivation.",
    "Born 6 May 1968; died 11 February 2008, age 39 (per VGMPF, a fall from a 6th floor; CSDb separately states 'died by suicide' — both sources describe the same event, not contradictory, noted here factually and respectfully).",
    "Other confirmed game credits: Operation Hongkong (1986), Top Secret (1986), Adult Poker (1987), Galactic Meteors (1983), Oil Imperium, Biing!, North Sea Inferno, Legend of Faerghail.",
    "No known relationship found to any other composer/tool already in this KB beyond the Rob Hubbard admiration note above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Georg Brandt, Harald Rosenfeldt, Tobias Herre/Extra Sound, Chris Huelsbeck — none found)."
  ],
  "sources": [
    "This project's SIDId import (direct Gehrmann quote, marked '(HG)', on Soundcontrol/SOPROL's slow performance)",
    "Remix64 interview with Holger Gehrmann (2001-08-01, primary source for the SOPROL description, career detail): https://remix64.com/interviews/interview-holger-gehrmann.html",
    "CSDb release 30432 (Soundcontrol 2, 1984): https://csdb.dk/release/?id=30432",
    "CSDb SID entry (Soundcontrol 2, 1985 — the date-conflict source): https://csdb.dk/sid/?id=13312",
    "CSDb scener (id=10722, HG-Software Systems, reLINE Software, career, death note): https://csdb.dk/scener/?id=10722",
    "VGMPF — Holger Gehrmann (birth/death dates, Golden Games/reLINE history, game list): https://www.vgmpf.com/Wiki/index.php?title=Holger_Gehrmann",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 9 files tagged Holger_Gehrmann, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Holger_Gehrmann` tag is Soundcontrol, a compiled-BASIC-like music
tool built around Gehrmann's own scripting language SOPROL — later ported
to Atari ST and Amiga, where its macro system was directly comparable to
Chris Hülsbeck's TFMX. Player-ID-fingerprinted across 9 files, all by
Gehrmann himself, who went on to found the German studio reLINE Software.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **first-party, directly
quoted description** of SOPROL from a 2001 interview; an **honestly
flagged date conflict** within CSDb's own records rather than silently
picking one; and Gehrmann's **broader career** founding reLINE Software
and employing the Ultimate Soundtracker's own author.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Holger_Gehrmann`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Holger_Gehrmann` `.sid` (Graffiti Man): load `$3000`,
init `$3400`, play `$3403`, **106 register writes / 50 frames** (1 filter
write). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — this project's SIDId import, a Remix64
interview (primary source), CSDb (release + SID entry + scener), VGMPF,
and HVSC Musicians.txt.

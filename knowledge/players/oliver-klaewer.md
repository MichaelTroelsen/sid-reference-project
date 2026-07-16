# Oliver Kläwer (player routine)

```json
{
  "id": "oliver-klaewer",
  "name": "Oliver Kläwer (player routine)",
  "aliases": ["Oliver_Klaewer"],
  "authors": ["Oliver Kläwer"],
  "released": "1986-1992 (three successive self-written drivers)",
  "status": "in-progress",
  "platform": "German composer Oliver Kläwer's own hand-coded playroutine — he NEVER used a music editor/tracker at all, instead hand-writing note data directly as assembler source (first in Turbo Ass, later Macro-Ass), building THREE successive drivers of his own across his career (1986, 1988, 1992). Player-ID-fingerprinted across 10 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Emerald Mine, music-only credit — see quirks for the coding-credit correction): load $c000 (init $c000, play $c003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented — hand-assembled note data directly in source, no separate tracker-file format." },
  "entry": { "init": "Sample trace: $c000.", "play": "Sample trace: $c003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 52 filter writes in a dense 486-write/50-frame sample; plausibly a heavy filter-sweep effect baked into his own routine)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED, FIRST-PARTY SOURCED: NEVER USED AN EDITOR — a 2001 Remix64 interview has him stating directly that he composed by hand-writing note data as assembler source ('My own assemblerscript with turboass (later makroass)'), building three successive music drivers of his own (1986, 1988, 1992), driven by wanting more speed/flexibility than existing shared players offered. No source maps which specific driver produced any given traced file.",
    "EMERALD MINE PUBLISHER CORRECTION: the game was published/developed by KINGSOFT, not Rainbow Arts (a wrong assumption in the initial research brief, caught and corrected) — designed by Klaus Heinz and Volker Wertich (the latter later famous for The Settlers). Original 1987 release was Amiga/Atari ST; C64/C16/Plus4 ports followed 1988. On Emerald Mine II specifically, the CODER was Jörg Dierks — Kläwer was MUSIC-ONLY on this title, not the game's programmer (his own driver work is separate from any game-coding credit).",
    "CORRECTED — THIS CARD PREVIOUSLY GOT THIS WRONG. It asserted 'NO HVSC MUSICIANS.TXT ENTRY EXISTS for him at all — confirmed by direct search of the full downloaded file', and concluded this project's HVSC-cross-reference logic could never match him. THAT IS FALSE. Musicians.txt LINE 891 reads 'Kläwer, Oliver - GERMANY' (the ä is byte 0xE4). The original search looked for 'Klaewer' — the ASCII-folded spelling used in the DeepSID TAG — which returns 0 hits, while 'Kläwer' returns 1. There is no gap in the cross-reference logic; there was a gap in the search. THIS IS THE EXACT ISO-8859-1 LANDMINE CLAUDE.md ALREADY DOCUMENTS FOR fetch-hvsc-docs.js — except it bit a RESEARCHER rather than the code. When checking Musicians.txt for any non-ASCII name, search the accented form, not the tag's folded form.",
    "SEARCH BOTH SPELLINGS: the DeepSID tag/folder is 'Klaewer' (ASCII-folded), HVSC's Musicians.txt is 'Kläwer' (ISO-8859-1). Neither finds the other.",
    "BIOGRAPHY: born 1969, Hanover, Germany. Worked with Golden Games and reLine Software (Hanover — the same studio [[soundcontrol]]'s Holger Gehrmann founded, though no direct collaboration between the two was found), also Kingsoft, EAS Software, and Starbyte Software. Games (1986-1999): Floating Point Action, Tronic, K.A.O.S., the Emerald Mine series, Maniax, Zero Gravity, Ringside, Soul Crystal, Biing! 2 (1999). Returned to C64 composing in 2023 ('Full-Size Oompa Oompa'). By 2001 he was a professional PHP/MySQL web programmer running a home hip-hop studio ('BlackBeatDepot') — a coding career, but unrelated to his earlier game work.",
    "NAMED FAVORITE/NOTABLE TUNES per his own interview: 'Zero-Gravity' (his own favorite), 'Floating Point Action' (title data was algorithmically derived from text printed on a milk carton — a genuinely quirky anecdote, not literal floating-point math). Cites Rob Hubbard and Jeroen Tel as listening influences (already carded here as [[rob-hubbard]]; Jeroen Tel not yet carded) — admiration only, no evidence of collaboration or code derivation.",
    "No known relationship found to any other composer/tool already in this KB beyond the influence-only Rob Hubbard citation above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Georg Brandt, Harald Rosenfeldt, Tobias Herre/Extra Sound, Chris Huelsbeck, Holger Gehrmann — none found)."
  ],
  "sources": [
    "Remix64 interview with Oliver Kläwer (2001, primary source for the no-editor/hand-assembled workflow, three-driver history): https://remix64.com/interviews/interview-oliver-klaewer.html",
    "CSDb scener (id=6007, handles Oliver Kläwer/Woogle Sound Ltd./Jess, Musician, hundreds of credits 1987-2024): https://csdb.dk/scener/?id=6007",
    "VGMPF — Oliver Klaewer (biography, Golden Games/reLine/Kingsoft/EAS/Starbyte, game list): https://www.vgmpf.com/Wiki/index.php?title=Oliver_Klaewer",
    "Wikipedia — Emerald Mine (publisher/designer correction): https://en.wikipedia.org/wiki/Emerald_Mine",
    "Lemon64 — Emerald Mine II (coder Jörg Dierks, musician Oliver Kläwer credit): https://www.lemon64.com/game/emerald-mine-2",
    "HVSC Musicians.txt line 891 — 'Kläwer, Oliver - GERMANY' (search the ACCENTED form; the ASCII 'Klaewer' returns 0 hits — see the corrected quirk above): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Local dataset: 10 files tagged Oliver_Klaewer, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Oliver_Klaewer` tag is German composer Oliver Kläwer's own
hand-coded playroutine — notably, he never used an editor or tracker at
all, hand-writing note data directly in assembler source across three
successive self-written drivers (1986, 1988, 1992). Player-ID-
fingerprinted across 10 files, all his own, including music for the
Emerald Mine series.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **confirmed
no-editor, hand-assembled workflow** across three drivers, sourced from
his own interview; a **corrected Emerald Mine publisher attribution**
(Kingsoft, not Rainbow Arts) plus clarifying he was music-only, not the
game's coder; and a **correction to this card's own earlier claim** that
HVSC's Musicians.txt had no entry for him — it does, at line 891, spelled
**Kläwer**. The original search used the tag's ASCII form (`Klaewer`) and
found nothing. Same ISO-8859-1 trap CLAUDE.md documents for the fetch
code, this time catching a human.

Note also [[oliver-kirwa]] — a *different* German Oliver with his own
self-coded driver, adjacent in Musicians.txt, with Kingsoft in both
gameographies. Easy to conflate; don't.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Oliver_Klaewer`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Oliver_Klaewer` `.sid` (Emerald Mine): load `$c000`,
init `$c000`, play `$c003`, **486 register writes / 50 frames** (52
filter writes — very filter-heavy, a dense trace). Internals undocumented;
memory map/format/effects are `TODO`.

## Sources

See the `sources` array — a Remix64 interview (primary source), CSDb,
VGMPF, Wikipedia, and Lemon64.

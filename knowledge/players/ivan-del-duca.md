# Ivan Del Duca (Digital Minds Team)

```json
{
  "id": "ivan-del-duca",
  "name": "Ivan Del Duca (Digital Minds Team)",
  "aliases": ["Ivan_Del_Duca"],
  "authors": ["Ivan Del Duca"],
  "released": "1989-1992 (Digital Minds Team, Italy)",
  "status": "in-progress",
  "platform": "Italian coder-musician Ivan Del Duca's own playroutine — confirmed both PROGRAMMER and sound (Zzap! magazine, April 1991) on his and Antonio Miscellaneo's 'Digital Minds Team' games. Independently identified as a distinct, named routine by a THIRD-PARTY disassembly tool (JC64dis), not just this project's own tag data. Player-ID-fingerprinted across 7 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Dribbling, a football game): load $a000 (init $b038, play $b020).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $b038.", "play": "Sample trace: $b020 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 35 filter writes in a dense 422-write/50-frame sample; plausibly related to the 4th-voice drum-synthesis trick noted below, a hypothesis to test via future disassembly)." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED CODER AND MUSICIAN, first-party-adjacent sourced: Italian Wikipedia's World Cup 90 article, citing Zzap! magazine (April 1991, issue 55, pp.10-11), states Del Duca (then ~19) and Antonio Miscellaneo, both from the Belluno area, formed 'Digital Minds Team' and handled 'programmazione e sonoro' (programming AND sound) for the C64 conversion of World Cup 90 (Genias, 1990) — their first commercial software and first game.",
    "A NOTABLE TECHNICAL TRICK, same Zzap! source: Digital Minds' C64 World Cup 90 played a 'fourth voice' on the 3-voice SID by synthesizing a drum/percussion sound WITHOUT using the three standard channels. This is a strong candidate explanation for the traced sample's dense (422 writes/50 frames) and filter-heavy (35 filter writes) character — flagged as a hypothesis to verify via future disassembly, not yet confirmed as the actual mechanism.",
    "INDEPENDENTLY CONFIRMED AS A DISTINCT NAMED ROUTINE by a tool built with NO access to this project's own data: JC64dis, a third-party C64 disassembler, explicitly lists 'Ivan Del Duca's player' among the SID-player routines it can auto-identify, citing the tune 'Modulus' (1988, Systems Editoriale). This is real corroboration from an independent source that the routine is genuinely his own identifiable code, not just a single-composer tag artifact.",
    "GAME LIST CONFIRMED (Lemon64): Dribbling (the traced file, 1991/92, Idea — an Italy-focused football title), Championship of Europe / 'European Champions' (1992, Idea — a Euro '92 pick-your-nation football game, developed by Digital Minds Team, music/SFX credited to Del Duca, additional graphics by 'A. Miscellaneo' confirming the same Digital Minds pairing), Modulus (1989), Space Gold (1989, Systems Editoriale), Warm Up (1991, Genias), World Cup 90: Arcade Soccer (1990, Genias).",
    "A MODERN GAMES-INDUSTRY FIGURE OF THE SAME NAME (an 'Ivan Del Duca', Global Director of Technology at 505 Games, credits on Screamer/Screamer 2/Ruff Trigger, Trecision/Milestone — a coherent all-Italian career arc) surfaced in research and is PLAUSIBLE as the same person, but explicitly NOT VERIFIED (source pages were inaccessible) — flagged as speculative, not asserted as fact.",
    "No CSDb scener page found for him — consistent with a commercial-only (non-demoscene) Italian games figure. A minor, unresolved publisher discrepancy exists for 'Modulus' (Lemon64 says 'Commodore 64 Club', JC64dis says Systems Editoriale 1988).",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Del Duca, Ivan - ITALY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Italian Wikipedia — World Cup 90 (Digital Minds Team formation, programming+sound credit, Zzap! citation): https://it.wikipedia.org/wiki/World_Cup_90",
    "Lemon64 — Ivan Del Duca game list (6 titles): https://www.lemon64.com/games/list.php?list_individual=ivan-del-duca",
    "gamesthatwerent.com — Dribbling (Sound credit): https://www.gamesthatwerent.com/gtw64/dribbling/",
    "pirates.emucamp.com — Championship of Europe (full Digital Minds Team credits): http://pirates.emucamp.com/a/c/champeurope/c64/main_.html",
    "JC64dis — third-party disassembler independently naming 'Ivan Del Duca's player': https://iceteam.itch.io/jc64dis",
    "DeepSID composer folder: https://deepsid.chordian.net/?file=%2FMUSICIANS%2FD%2FDel_Duca_Ivan%2FParsley.sid",
    "Local dataset: 7 files tagged Ivan_Del_Duca, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ivan_Del_Duca` tag is Italian coder-musician Ivan Del Duca's own
playroutine, built for his and Antonio Miscellaneo's 'Digital Minds Team'
football/soccer titles. Confirmed both programmer and sound designer via
a Zzap! magazine citation, and independently identified as a genuine,
distinct routine by a third-party disassembly tool. Player-ID-
fingerprinted across 7 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **confirmed programmer +
sound designer** status, sourced via a specific magazine citation; a
**notable 4th-voice drum-synthesis trick**, plausibly explaining the dense
trace; and **independent third-party confirmation** (JC64dis) that this is
a genuinely distinct, identifiable routine, not just a single-composer
tag artifact.

## Disassembly notes

None published by this project (JC64dis, a third-party tool, has already
identified it under its own catalog, but no artifact was reviewed here).
A future `verified` needs an original disassembly of an
`Ivan_Del_Duca`-tagged `.sid` + trace — which could also confirm or refute
the 4th-voice drum-synthesis hypothesis.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Ivan_Del_Duca` `.sid` (Dribbling): load `$a000`, init
`$b038`, play `$b020`, **422 register writes / 50 frames** (35 filter
writes — very filter-heavy, a dense trace). Internals undocumented;
memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Italian Wikipedia, Lemon64,
gamesthatwerent.com, pirates.emucamp.com, JC64dis, and DeepSID.

# Paul Mudra (Westwood driver)

```json
{
  "id": "paul-mudra",
  "name": "Paul Mudra (Westwood driver)",
  "aliases": ["Paul_Mudra"],
  "authors": ["Paul Mudra"],
  "released": "1988-1989 (Westwood Associates era)",
  "status": "in-progress",
  "platform": "American sound designer Paul Mudra's C64 driver, used at Westwood Associates (later Westwood Studios) — he went on to a long, well-documented industry career (Command & Conquer/Red Alert audio direction, later Insomniac Games audio director on Ratchet & Clank and Marvel's Spider-Man). He is confirmed as audio-side only across ~50 titles, never a coder. Player-ID-fingerprinted across 6 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (A Nightmare on Elm Street, 1989, Monarch Software): load $13c0 (init $13c0, play $4993).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $13c0.", "play": "Sample trace: $4993 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use — 1 filter write in a sparse 17-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO COUNTRY DATA at all for this composer — a bare 'Mudra, Paul' entry, unlike most neighboring HVSC entries which carry a country field. Independently confirmed via VGMPF and c64-wiki.de: born 14 August 1965, Las Vegas, Nevada, USA.",
    "A GENUINELY MAJOR LATER INDUSTRY CAREER, well-documented and multi-sourced: sound designer at Westwood Associates/Westwood Studios from 1988 until EA's acquisition/eventual studio closure (1998-2003), where he is best known industry-wide for AUDIO DIRECTION on the Command & Conquer/Red Alert franchise — a career on a similar scale to this project's other 'commercial studio veteran' composers (e.g. David Thiel's pinball-audio career). Later became Audio Director at Insomniac Games (Ratchet & Clank, Marvel's Spider-Man PS4/PS5).",
    "ROLE ON THE TRACED FILE'S GAME IS SPECIFICALLY 'SOUND EFFECTS' PER VGMPF, not full composer — a genuinely interesting technical corroboration: the trace itself is sparse (17 writes/50 frames, filter-touched, osc3-only) which reads more like an SFX cue than a full musical score, consistent with that credit. A separate source (c64-wiki.de) uses the looser term 'musician' for the same credit — flagged as a minor terminology discrepancy, not a real conflict, since SFX/music roles often blur in small-team credits of this era.",
    "PURELY AUDIO-SIDE ACROSS HIS ENTIRE DOCUMENTED CAREER (~50 titles, 1988-2020 per VGMPF's own career table) — programming was explicitly credited to others (Phil Gorrow/Shawn Smith on the traced title). No coding credit found anywhere.",
    "SIX CONFIRMED C64 TITLES: A Nightmare on Elm Street (1989, Monarch Software/Westwood Associates — the traced file, a movie tie-in), Questron II (1988), Battletech: The Crescent Hawk's Inception (1988), Hillsfar (1989), Mars Saga (1989), and a C64 port of DragonStrike (present in the HVSC folder though not listed in VGMPF's own platform table for that title — flagged as a minor gap in VGMPF's own coverage, not a contradiction).",
    "NO CSDb SCENER PROFILE EXISTS and no interviews/first-person material were found — consistent with a purely US commercial-studio composer with zero demoscene footprint, the same absence pattern already established for several other purely-commercial composers already carded in this KB (e.g. [[david-thiel]]).",
    "Not confirmed in SIDId (no entry for this tag). His real documented recurring collaborator at Westwood was Dwight Okahara (later joined by Frank Klepacki), none of whom are currently in this KB. No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos — none found; an AI-search-summary loosely juxtaposing his name with Rob Hubbard/David Warhol was investigated and found to be an artifact of the search tool conflating unrelated results, not an actual sourced connection, and is explicitly NOT included as fact)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Mudra, Paul', bare entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "VGMPF — Paul Mudra (full career table, birth details, Sound Effects credit): https://www.vgmpf.com/Wiki/index.php/Paul_Mudra",
    "c64-wiki.de — Paul S. Mudra: https://www.c64-wiki.de/wiki/Paul_S._Mudra",
    "Lemon64 — A Nightmare on Elm Street (full credits): https://www.lemon64.com/game/nightmare-on-elm-street",
    "MobyGames — A Nightmare on Elm Street (title/existence confirmed via search; direct fetch 403'd): https://mobygames.com/game/c64/a-nightmare-on-elm-street",
    "Local dataset: 6 files tagged Paul_Mudra, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Paul_Mudra` tag is American sound designer Paul Mudra's C64 driver,
used at Westwood Associates — where he began a long, well-documented
industry career (Command & Conquer/Red Alert audio direction, later
Insomniac Games audio director). Confirmed audio-side only, never a
coder. Player-ID-fingerprinted across 6 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **major, extensively
documented later industry career**, a rare case in this KB where a
composer's post-C64 trajectory is this thoroughly sourced; also notable
is a **technical corroboration** between his 'Sound Effects' credit on the
traced title and that file's genuinely sparse, SFX-shaped trace profile.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Paul_Mudra`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Paul_Mudra` `.sid` (A Nightmare on Elm Street): load
`$13c0`, init `$13c0`, play `$4993`, **17 register writes / 50 frames**
(1 filter write — sparse). Internals undocumented; memory map/format/
effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, c64-wiki.de, Lemon64,
and MobyGames.

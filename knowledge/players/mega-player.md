# Mega Player (Dirk Bialluch)

```json
{
  "id": "mega-player",
  "name": "Mega Player (Dirk Bialluch)",
  "aliases": ["Mega_Player"],
  "authors": ["Dirk Bialluch"],
  "released": "1988-1990 (The Power Unit)",
  "status": "in-progress",
  "platform": "A C64 music editor personally coded by German composer Dirk Bialluch (group 'The Power Unit') — CONFIRMED via VGMPF, sourced from Bialluch's own portfolio site, as a clean composer=coder case (unlike several split-authorship tools already carded in this KB). Built 1988-1990, influenced by Soundmonitor. Player-ID-fingerprinted across 2 files, both his own game scores.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Helden, 1990, Magic Disk 64/CP Verlag): load $a000 (init $c000, play $c030).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $c000.", "play": "Sample trace: $c030 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 46 filter writes in a dense 263-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC CONFIRMS 'Bialluch, Dirk / The Power Unit - GERMANY' — group affiliation independently cross-confirmed by VGMPF.",
    "MEGA PLAYER IS A REAL, NAMED TOOL WITH BIALLUCH AS ITS OWN AUTHOR — CONFIRMED, a clean composer=coder case: VGMPF's Dirk Bialluch page (sourced from his own portfolio site, Lightstorm3D) states directly: 'Bialluch created this Commodore 64 music player from 1988 to 1990... influenced by Soundmonitor, likely built for the 6581 chip.' SIDId's own reference field for this tag independently points at the same portfolio page (`lightstorm3d.com/portfolio/html_en/mega_player.htm`) — a rare case in this KB where the tool's own author confirms authorship on his own professional site, not just a third-party database claim. Unlike several split-authorship tools already carded here ([[twice-effect-editor]], [[entropy-editor]], [[audio-effect-editor]], [[skyline-editor]]), no evidence links Bialluch to any of those, and no cross-connection was found.",
    "BOTH TRACED TITLES ARE REAL, RELEASED C64 GAMES, not standalone tunes or demos: Triton (a vertical-scrolling shoot-'em-up, coded by Andre Schneider, published January 1990 by 64'er-Disc/Markt & Technik) and Helden ('Heroes,' an arcade/SEUCK-style action game, the traced file, published 2 March 1990 by Magic Disk 64/CP Verlag — the same German disk-magazine ecosystem already appearing on several other cards in this KB, e.g. [[twice-effect-editor]], [[audio-effect-editor]]).",
    "A SUGGESTIVE BUT EXPLICITLY UNCONFIRMED STRUCTURAL ECHO OF SOUNDMONITOR was found by directly comparing entry points against the already-carded [[soundmonitor]] card: SoundMonitor's own documented replay entry is init=$C000/play=$C020 (472 register writes/50 frames on its own real trace); this tag's traced Helden.sid is init=$C000/play=$C030 (263 writes/50 frames) — the SHARED $C000 init and NEIGHBORING play offset ($C020 vs $C030) is consistent with VGMPF's own 'influenced by Soundmonitor' claim, but this is a suggestive comparison made directly against another KB card's own trace data, NOT a proven code derivation — Mega Player has notably fewer writes per frame, likely reflecting a leaner or different effect set, not necessarily shared code.",
    "CSDb SCENER PROFILE CONFIRMED (id=22469): 6 total SID credits (Helden, Triton, plus 4 'Music Samples' tracks all credited to The Power Unit, 1987). Group-page details for 'The Power Unit' itself could not be independently corroborated beyond the Musicians.txt/VGMPF attribution — left explicitly UNCONFIRMED. VGMPF ALSO states Bialluch was in The Power Unit 1989-1993, which evolved into a group called 'Voyage' in late 1993 — this later transition is single-sourced (VGMPF only), not independently cross-checked.",
    "NO GERMAN MAGAZINE TYPE-IN-LISTING COVERAGE of Mega Player ITSELF was found (unlike Soundmonitor, which had that treatment) — either it wasn't covered by 64'er/Happy Computer/Magic Disk 64 in that format, or this research pass simply didn't surface it; flagged as a genuine gap, not asserted either way. A same-named but unrelated CSDb scener nicknamed 'Mega-player' (a hacker/importer/sysop, different person) was checked and explicitly ruled out.",
    "Not confirmed in SIDId beyond the reference already cited (name='Mega Player', author='Dirk Bialluch'). No known relationship found to any composer/tool already in this KB beyond the suggestive-not-proven Soundmonitor comparison above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Bialluch, Dirk / The Power Unit - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "VGMPF — Dirk Bialluch (Mega Player authorship, 1988-1990, Soundmonitor influence, portfolio reference): https://www.vgmpf.com/Wiki/index.php?title=Dirk_Bialluch",
    "SIDId sidid.nfo (github.com/cadaver/sidid) — 'Mega Player' entry, author Dirk Bialluch",
    "Lemon64 — Dirk Bialluch game list: https://www.lemon64.com/games/list.php?list_individual=dirk-bialluch",
    "c64online.com — Triton: https://c64online.com/c64-games/triton/",
    "Lemon64 — Helden (traced file): https://www.lemon64.com/game/helden",
    "CSDb scener id=22469 (Dirk Bialluch, 6 SID credits): https://csdb.dk/scener/?id=22469",
    "Existing KB card: knowledge/players/soundmonitor.md (the suggestive, unconfirmed structural comparison)",
    "Local dataset: 2 files tagged Mega_Player, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Mega_Player` tag is a C64 music editor personally coded by German
composer Dirk Bialluch (group 'The Power Unit') — a clean composer=coder
case, confirmed via his own professional portfolio site, unlike several
split-authorship tools already carded in this KB. Player-ID-
fingerprinted across 2 files, both his own game scores.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **rare self-
confirmed authorship**, sourced from the tool-builder's own professional
site rather than only a third-party database. Also notable: a
**suggestive but explicitly unproven structural echo** of already-carded
[[soundmonitor]], directly compared against that card's own trace data —
reported as suggestive, not asserted as a code derivation.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Mega_Player`-tagged `.sid`
+ trace — which could also help settle the Soundmonitor-influence
question at the code level.

## Verification

**Playback + entry points confirmed (2026-07-15) — `status: in-progress`.**
Traced a real HVSC `Mega_Player` `.sid` (Helden): load `$a000`, init
`$c000`, play `$c030`, **263 register writes / 50 frames** (46 filter
writes — dense, filter-heavy). Internals undocumented; memory map/
format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, SIDId's sidid.nfo,
Lemon64 (2 pages), c64online.com, CSDb, and the related soundmonitor
card.

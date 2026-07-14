# Ed Bogas (Accolade driver)

```json
{
  "id": "ed-bogas-accolade",
  "name": "Ed Bogas (Accolade driver)",
  "aliases": ["Ed_Bogas/Accolade"],
  "authors": ["Ed Bogas"],
  "released": "1985-1988 (Accolade)",
  "status": "in-progress",
  "platform": "One of at least FOUR distinct, employer-specific C64 sound drivers composer Ed Bogas used (already carded elsewhere in this KB, [[music-studio]], for his separate Activision-era Music Studio work) — this one specifically for his Accolade titles. Directly confirmed by VGMPF: 'Bogas' music is in four known drivers... 1. at Accolade. 2. at Joyce Hakansson Associates and on Beanstalk. 3. on Murder on the Mississippi... 4. on Park Patrol.' This project's own tag data independently corroborates the split: a separate 'Ed_Bogas/Hakansson' tag (5 files) exists alongside this one (7 files), matching VGMPF's drivers #1 and #2 one-for-one. Player-ID-fingerprinted across 7 files, all by Bogas, exactly matching his 7 known Accolade C64 credits.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (4th & Inches, 1987): load $2000 (init $4000, play $3606).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $4000.", "play": "Sample trace: $3606 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (moderate filter use observed — 15 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED, NAMED, EMPLOYER-SPECIFIC DRIVER SPLIT — the single most load-bearing citation for this card: VGMPF states verbatim that 'Bogas' music is in four known drivers that were respectively used: 1. at Accolade. 2. at Joyce Hakansson Associates and on Beanstalk (C64). 3. on Murder on the Mississippi (C64). This driver may have been written by Adam Bellin (the game's creator), Peter Kaminski or Russell Lieblich... 4. on Park Patrol (C64).' This is the only source found anywhere explicitly asserting Bogas used MULTIPLE, DISTINCT C64 drivers segmented by employer, and it is independently corroborated by this project's own tag data: `knowledge/COVERAGE.md` separately lists both `Ed_Bogas/Accolade` (this card, 7 files) and `Ed_Bogas/Hakansson` (5 files) — matching VGMPF's drivers #1 and #2 one-for-one by employer name.",
    "EXACT GAME LIST CONFIRMED, matching the tag's own file count exactly (7): HardBall! (1985), Law of the West (1985), Psi-5 Trading Company (1986), 4th & Inches (1987, the traced file), Card Sharks (1988), Steel Thunder (1988), TKO (1988) — Lemon64's full listing of Bogas's Accolade C64 credits is exactly 7 titles, and MobyGames' credit count independently agrees ('7 games with Accolade, Inc.').",
    "4TH & INCHES (Accolade, Oct 1987, American football) — design and programming by Bob Whitehead (an Accolade co-founder), graphics by Mimi Doggett, music by Bogas. No named sound-programmer distinct from Bogas found for this title.",
    "AUTHORSHIP OF THE DRIVER ITSELF IS AMBIGUOUS: VGMPF's phrasing ('used ... at Accolade') only asserts consistent employer-scoped code reuse, not that Bogas personally wrote it — unlike driver #3 (Murder on the Mississippi), where VGMPF at least speculates on named candidate authors (Adam Bellin, Peter Kaminski, or Russell Lieblich — the latter already carded in this KB via [[music-studio]] and [[russell-lieblich-driver]]). No source names who specifically wrote THIS driver.",
    "RELATIONSHIP TO [[music-studio]], CLARIFIED: VGMPF treats The Music Studio (Bogas's OTHER carded credit in this KB) purely as an Atari ST notation editor, separate from any of these four C64-native drivers — this is a same-composer, DIFFERENT-tool relationship, not a shared codebase. Do not conflate the two.",
    "No known relationship found to any other composer/tool already in this KB beyond the Bogas/Lieblich connections already documented on the sibling cards (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "VGMPF — Ed Bogas (the 'four known drivers' passage, primary source for this card's whole premise): https://vgmpf.com/Wiki/index.php/Ed_Bogas",
    "Lemon64 — Ed Bogas game list (7 Accolade titles, exact match to the tag's file count): https://www.lemon64.com/games/list.php?list_individual=ed-bogas",
    "c64online — 4th & Inches credits: https://c64online.com/c64-games/4th-and-inches/",
    "MobyGames — 4th & Inches: https://www.mobygames.com/game/7969/4th-inches/",
    "CSDb scener — Ed Bogas (id=14875): https://csdb.dk/scener/?id=14875",
    "This project's own knowledge/COVERAGE.md (independently lists Ed_Bogas/Hakansson as a separate 5-file tag, corroborating the employer-split)",
    "Existing KB cards: knowledge/players/music-studio.md, knowledge/players/russell-lieblich-driver.md (same composer's other carded credits)",
    "Local dataset: 7 files tagged Ed_Bogas/Accolade, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ed_Bogas/Accolade` tag is one of at least four distinct, employer-
specific C64 sound drivers composer Ed Bogas used across his career — this
one specifically for his Accolade titles (HardBall!, 4th & Inches, Card
Sharks, and others), confirmed via a VGMPF passage that names all four and
independently corroborated by this project's own separate Hakansson tag.
Player-ID-fingerprinted across 7 files, exactly matching his 7 known
Accolade credits.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed,
employer-specific driver split**, sourced from a single VGMPF passage that
is independently corroborated by this project's own tag data splitting
Bogas's output the same way. Also note the **ambiguous driver authorship**
(Bogas himself vs. an uncredited Accolade programmer) and the **clarified
relationship** to his separately-carded Music Studio work — same
composer, unrelated tool.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Ed_Bogas/Accolade`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Ed_Bogas/Accolade` `.sid` (4th & Inches): load
`$2000`, init `$4000`, play `$3606`, **34 register writes / 50 frames**
(15 filter writes — moderate). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — VGMPF (primary source), Lemon64, c64online,
MobyGames, CSDb, and the two related composer cards.

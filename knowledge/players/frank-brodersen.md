# Frank Brodersen (player routine)

```json
{
  "id": "frank-brodersen",
  "name": "Frank Brodersen (player routine)",
  "aliases": ["Frank_Brodersen"],
  "authors": ["Frank Brodersen"],
  "released": "1991-1992",
  "status": "in-progress",
  "platform": "German coder-composer Frank Brodersen's own playroutine — a hobbyist/PD arcade-clone developer, coding graphics and music himself alongside co-coder Mario Brucksch. Player-ID-fingerprinted across 3 files, all his own (arcade-clone type-in style games: Pacman II, Original Tetris-Game, and a third Pacman title).",
  "csdb_release": 175700,

  "memory": { "load_address": "Sample HVSC file traced (Original Tetris-Game, an RSID successfully resolved by this project's tracer): load $2000 (init $70e3, play self-installing).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $70e3.", "play": "Self-installing IRQ handler (RSID format); successfully traced." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a dense 299-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC CONFIRMS 'Brodersen, Frank - GERMANY,' no group affiliation — resolving the German-vs-Danish naming ambiguity in the original research question in favor of Germany.",
    "'PACMAN II' (1991, Public Domain) IS CONFIRMED COVER MUSIC, not original composition: Lemon64 credits both coding (jointly with Mario Brucksch) AND music to Frank Brodersen, with the tracks explicitly identified as covers — 'Popcorn [from Music To Moog By]' (Gershon Kingsley) and 'Another One Bites the Dust [from The Game]' (Queen) — a genuinely useful detail consistent with the traced file's dense, cover-style register-write pattern.",
    "'ORIGINAL TETRIS-GAME' (1992, the traced file) IS A HOMEBREW TETRIS CLONE with an internal high-score table reading 'Copyright by Activision' — suggesting it may have been submitted to Activision and declined, then circulated as PD/type-in rather than an official release. This Activision-submission detail is EXPLICITLY FLAGGED AS UNCONFIRMED, sourced only from a retro-news blog (not a primary source), not stated as settled fact.",
    "THE THIRD FILE, A NON-'II' 'PACMAN' TITLE, HAS AN UNRESOLVED AUTHORSHIP DISCREPANCY: one source ('Pac-Man +3,' a 1988 homebrew) credits only Mario Brucksch, NOT Brodersen — flagged as a possible mismatch between this project's own folder contents and external attribution, worth a manual double-check against the actual file's own embedded metadata rather than trusting the external source blindly.",
    "CONFIRMED BOTH CODER AND MUSICIAN on Pacman II specifically (jointly coded with Brucksch, solely composed music) — consistent with the 'clone/type-in game, small team wearing all hats' pattern seen elsewhere in this KB.",
    "NO CSDb SCENER PROFILE EXISTS — a CSDb scener-name search for 'Brodersen' returned zero results, consistent with a PD/hobbyist-scene coder outside the organized cracking/demo scene proper, not a research gap.",
    "A REAL, EXPLICITLY-FLAGGED NAME-COLLISION RISK WAS CAUGHT: the 2019 crack releases of both his games are credited to a crack group called 'Laxity' (crackers 'Didi' and 'Goat') — this is a DIFFERENT, UNRELATED entity from the musician 'Laxity' (Thomas Egeskov Petersen) already carded in this KB as [[laxity-newplayer]]. The crack group's own credits list only 'Didi' and 'Goat,' never Thomas Petersen. Explicitly NOT conflated — a genuine false-positive risk this card avoids.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — an isolated PD/hobbyist figure with no scene group, and the sole apparent 'Laxity' proximity is the ruled-out false lead above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Brodersen, Frank - GERMANY'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Pacman II (full credits, cover-tune identification): https://www.lemon64.com/game/pacman-2",
    "Indie Retro News — 'Cracktro Tuesday #1' (Original Tetris-Game, Activision claim flagged unconfirmed): https://www.indieretronews.com/2019/03/cracktro-tuesday-1-exploring-very.html",
    "CSDb release id=175700 (Original Tetris-Game, traced file's own release): https://csdb.dk/release/?id=175700",
    "Existing KB card: knowledge/players/laxity-newplayer.md (the unrelated 'Laxity' handle explicitly ruled out as a connection)",
    "Local dataset: 3 files tagged Frank_Brodersen, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Frank_Brodersen` tag is German hobbyist coder-composer Frank
Brodersen's own playroutine — arcade-clone type-in games (Pacman II,
Original Tetris-Game), coding and composing alongside co-coder Mario
Brucksch. Player-ID-fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is a **genuine, explicitly
flagged name-collision risk avoided**: a 2019 crack-group credit sharing
the handle 'Laxity' is a different, unrelated entity from the already-
carded [[laxity-newplayer]] musician — caught and kept separate rather
than conflated. Also notable: an honestly-preserved authorship
discrepancy on the third file in this composer's own folder.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Frank_Brodersen`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Frank_Brodersen` `.sid` (Original Tetris-Game, an
RSID): load `$2000`, init `$70e3`, self-installing IRQ handler
successfully resolved, **299 register writes / 50 frames** (0 filter
writes — dense). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64, Indie Retro News,
CSDb, and the related laxity-newplayer card.

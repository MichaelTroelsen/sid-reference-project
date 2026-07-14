# Andy Brown (player routine)

```json
{
  "id": "andy-brown",
  "name": "Andy Brown (player routine)",
  "aliases": ["Andy_Brown"],
  "authors": ["Andy Brown"],
  "released": "1988 (UK budget/full-price releases)",
  "status": "in-progress",
  "platform": "English musician Andy Brown's own playroutine — a confirmed composer-only credit across 3 confirmed 1988 UK commercial games, always crediting a separate coder. Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Little Green Man, 1988, Bug-Byte): load $914 (init $914, play $981).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $914.", "play": "Sample trace: $981 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (heavily filter-dominant relative to write count — 51 filter writes in a 59-write/50-frame sample, nearly every write touches the filter)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC ENTRY IS BARE: 'Brown, Andy - UNITED KINGDOM,' no group, no realname parenthetical.",
    "THREE CONFIRMED 1988 GAME CREDITS, all crediting Andy Brown as musician with a SEPARATE named coder in every case: Little Green Man (Bug-Byte — developer Peter Tuleby, the traced file), Power Pyramids (Quicksilva/Grandslam — coder 'Eclipse'), and Rik the Roadie (Alternative Software — coder 'Eclipse,' graphics by 'Rik'). Consistently a musician-only credit, never a coder credit, across all three.",
    "'RIK THE ROADIE' — A SPECULATIVE RIK MAYALL CONNECTION WAS INVESTIGATED AND EXPLICITLY RULED OUT: the game's own credits list a graphic artist named 'Rik' (not a licensed celebrity tie-in), and its plot concerns a roadie named Rik for a fictional band 'Alternative Rock' — no evidence ties it to comedian Rik Mayall. A red herring, not a finding.",
    "THE CODER 'ECLIPSE' CREDITED ON TWO OF THE THREE GAMES DOES NOT MATCH the CSDb scener 'Eclipse' (id=2248, a US-based demoscener active 1988-91, Outline/Impulse/Havok/Lords) — almost certainly a different, unrelated 'Eclipse,' likely a common commercial UK coding freelancer/studio name of the era. Flagged as a checked-and-ruled-out false lead, not a real connection.",
    "A FOURTH, UNCARDED GAME CREDIT WAS FOUND: 'Starburst' (Digital Dynamite, 1990, '4 tunes'), a troubled, barely-distributed release per GamesThatWerent — plausibly explaining why its music never entered HVSC (UNCONFIRMED whether those tunes survive anywhere).",
    "A CSDb SCENER PROFILE EXISTS (id=15132, handle 'Andy Brown,' role Musician, no country/realname/group listed) whose release list is entirely 1988 demoscene crack-intros/music-disk credits with titles like 'SPL Bust' and 'Beyond Bust' — strongly suggesting these are CRACKER-GROUP INTROS reusing/ripping his commercial game tunes, not new scene compositions. WHETHER THIS IS EVEN THE SAME INDIVIDUAL AS THE GAME COMPOSER IS EXPLICITLY UNCONFIRMED — no realname or biographical link ties the two profiles together, it's inferred from name+era+SID-reuse pattern only, not established fact.",
    "A COINCIDENTAL NAME SIMILARITY TO THE ALREADY-CARDED GROUP TAG 'Zetrex_YP' WAS CHECKED AND RULED OUT ('Zetrex 2005' appears as one of the crack-group credits on his CSDb scener profile) — nothing indicates an actual relationship, flagged as coincidence only.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Brown, Andy - UNITED KINGDOM'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Little Green Man (traced file, full credits): https://www.lemon64.com/games/details.php?ID=3240",
    "Lemon64 — Power Pyramids: https://www.lemon64.com/games/details.php?ID=4139",
    "Lemon64 — Rik the Roadie: https://www.lemon64.com/game/rik-the-roadie",
    "GamesThatWerent — Starburst: https://www.gamesthatwerent.com/gtw64/starburst-2/",
    "CSDb scener id=15132 (Andy Brown, crack-group music credits): https://csdb.dk/scener/?id=15132",
    "CSDb scener id=2248 ('Eclipse', explicitly a DIFFERENT, unrelated US demoscener, not the game's coder): https://csdb.dk/scener/?id=2248",
    "Local dataset: 3 files tagged Andy_Brown, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Andy_Brown` tag is English musician Andy Brown's own playroutine —
a consistent musician-only credit across 3 confirmed 1988 UK commercial
games, always with a separate named coder. Player-ID-fingerprinted
across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is a **ruled-out Rik
Mayall speculation** on the 'Rik the Roadie' title, investigated and
explicitly dismissed. Also notable: an **explicitly unconfirmed**
identity link between his commercial-game credits and a same-named CSDb
scener profile of crack-group music reuse — reported as plausible but
unproven rather than assumed.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Andy_Brown`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Andy_Brown` `.sid` (Little Green Man): load `$914`,
init `$914`, play `$981`, **59 register writes / 50 frames** (51 filter
writes — heavily filter-dominant). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages),
GamesThatWerent, and CSDb (2 entries).

# Stephen Biggs (player routine)

```json
{
  "id": "stephen-biggs",
  "name": "Stephen Biggs (player routine)",
  "aliases": ["Stephen_Biggs"],
  "authors": ["Stephen C. Biggs"],
  "released": "1983-1984 (Synapse Software era)",
  "status": "in-progress",
  "platform": "American composer Stephen C. Biggs's own playroutine, used across Synapse Software titles including Blue Max (1983) and — NOT the famous 1986 Firebird game, see quirks — a different, unrelated 1984 Synapse shooter also titled 'Sentinel'. Player-ID-fingerprinted across 9 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Sentinel — the 1984 Synapse title, not Firebird's): load $1c70 (init $1c70, play $2090).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1c70.", "play": "Sample trace: $2090 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NATIONALITY CORRECTION: he is AMERICAN, not British — HVSC Musicians.txt lists him plainly as 'Biggs, Stephen C. - USA', and CSDb (scener id=14020) independently confirms country United States.",
    "MAJOR GAME-IDENTITY CORRECTION — the traced 'Sentinel.sid' is almost certainly NOT the legendary 1986 Firebird puzzle game 'The Sentinel' (designed by Geoffrey Crammond): Lemon64's own credits box for that famous game lists the musician as Geoffrey J. Crammond HIMSELF, not Biggs. There is a SEPARATE, unrelated 1984 Synapse Software title also simply called 'Sentinel' (no 'The') — a 3D space shoot-'em-up created by Bryan Brandenburg, published by Synapse (US) / US Gold (Europe) — and Lemon64's credits box for THAT game lists Musician: Stephen C. Biggs, with box art by Tim Boxell (the same artist as Blue Max, consistent with Biggs working the Synapse stable). CSDb's music index independently lists both as separate entries. This is a classic same-title cross-game collision — the sparse trace should NOT be read as reflecting the famous game's celebrated minimal/eerie sound design, since it's very likely a different game entirely.",
    "BLUE MAX (1983, Synapse Software) CONFIRMED: Lemon64 and CSDb both credit Stephen C. Biggs as musician (code by Bob Polin originally, C64 conversion by Peter A. Adams, box art by Tim Boxell — the same artist across multiple Biggs-scored Synapse titles).",
    "OTHER CONFIRMED CREDITS (CSDb): 'Slamball' (1984, Synapse). A separate work, 'Inventions' (undated music collection), credits him for BOTH Code and Music — partial, not strongly corroborated evidence that he was a coder as well as musician on at least that piece. Blue Max 2001 (the 1984 sequel) is credited to a DIFFERENT composer, Ihor Wolosenko — not Biggs, despite the similar title/franchise.",
    "The genuinely sparse register-write traces (7 writes/50 frames on 'Sentinel', 13/50 on Blue Max) may simply reflect a generically minimal Synapse-house playroutine style — NOT evidence of the famous Firebird Sentinel's celebrated atmospheric design, since (per the correction above) that's likely not the game being traced.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB — he appears to be a US-based Synapse Software in-house musician, a different scene/studio circle entirely from this KB's mostly UK Ocean/Gremlin/Mastertronic composers (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Biggs, Stephen C. - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener (id=14020, country USA, function Musician): https://csdb.dk/scener/?id=14020",
    "Lemon64 — Blue Max (1983, Synapse, Biggs musician credit): https://www.lemon64.com/game/blue-max",
    "Lemon64 — Sentinel (1984, Synapse Software — Bryan Brandenburg's shooter, Biggs musician credit — NOT the Firebird game): https://www.lemon64.com/game/sentinel-synapse-software",
    "Lemon64 — The Sentinel (1986, Firebird — Geoffrey Crammond's OWN musician credit, confirming the cross-game collision): https://www.lemon64.com/game/sentinel-firebird",
    "Local dataset: 9 files tagged Stephen_Biggs, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Stephen_Biggs` tag is American composer Stephen C. Biggs's own
playroutine, used across Synapse Software titles including Blue Max
(1983). Player-ID-fingerprinted across 9 files, all his own — including a
title, 'Sentinel', that research revealed to be a DIFFERENT, unrelated
1984 Synapse game rather than the famous 1986 Firebird classic, a
name-collision worth flagging clearly.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **corrected nationality**
(American, not British); and a **major game-identity correction** — the
traced 'Sentinel.sid' is very likely NOT the celebrated Firebird game
(whose own credited musician was designer Geoffrey Crammond himself), but
a separate, unrelated 1984 Synapse shooter of the same name.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Stephen_Biggs`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Stephen_Biggs` `.sid` (Sentinel — the 1984 Synapse
title): load `$1c70`, init `$1c70`, play `$2090`, **7 register writes /
50 frames** (0 filter writes) — genuinely sparse, cross-confirmed on a
second file (Blue Max, 13 writes/50 frames). Internals undocumented;
memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, and Lemon64 (3 pages,
including the critical disambiguation).

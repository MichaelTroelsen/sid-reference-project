# Martijn Schutten (player routine)

```json
{
  "id": "martijn-schutten",
  "name": "Martijn Schutten (player routine)",
  "aliases": ["Martijn_Schutten"],
  "authors": ["Martijn Schutten"],
  "released": "~1991-1994 (Electric Brains / demoscene era)",
  "status": "in-progress",
  "platform": "Dutch musician Martijn Schutten's ('Junebug'/'Trashcan'/'Trazz', group Powers of Pain) playroutine — confirmed a musician on his commercial credits, with NO coder credit found anywhere. Whether this specific HVSC tag reflects a genuinely self-authored routine or reuses someone else's driver is flagged as likely-but-unconfirmed, not settled fact (see quirks). Player-ID-fingerprinted across 8 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Bobix, 1994 game): load $2000 (init $2d8f, play $2d81).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $2d8f.", "play": "Sample trace: $2d81 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 34 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED COMMERCIAL GAME CREDITS, matching the local folder exactly: both traced titles are real Dutch budget C64 games by the Electric Brains team, published by Game On (CP Verlag) — Bobix (1994, the traced file, a Giana Sisters/Wonder Boy-style platformer; code by Marco Kramer and Mark van Harlingen, graphics by Nikaj Eijk, music by Schutten) and Disc-O-Very (1993, a 'Brain/Logical' puzzle game; coder Antoine van Wel, graphics Nikaj Eijk, music Schutten).",
    "A REAL CAUTION FLAG ON SELF-AUTHORSHIP: Disc-O-Very's own credits separately name Elvin van Luijk as 'Music Player' — i.e. the person who coded THAT game's playback routine — distinct from Schutten's composer credit. Bobix lists no such separate role. This means the game-embedded driver used in Disc-O-Very may NOT be the same code as the standalone HVSC/demoscene tunes tagged 'Martijn_Schutten' (individually authored compo/demo tracks via groups like Legend, per Demozoo) — the 'own hand-coded routine' hypothesis for THIS tag should be read as likely-but-unconfirmed, pending an actual disassembly comparison, not settled fact.",
    "CSDb (scener id=16783) confirms his function is overwhelmingly MUSICIAN — no coder credit found on any of his own releases checked, across ~100+ CSDb-credited productions (demos, games, diskmags, crack intros, music collections) spanning ~1991-2021 (groups: Powers of Pain, Electric Brains from 1992, Imagination Developments, Paradize). Demozoo separately lists him under groups K-Power and Legend, with a 'Compo Tune' music credit for Legend.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other Dutch composer already carded in this KB (checked specifically against Roel Bosch, Jeroen Koops, Jeroen Kimmel — no shared productions or CSDb group overlap found) or to any other composer/tool already in this KB (Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Neil Brennan, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Schutten, Martijn (Junebug, Trashcan, Trazz) / Powers of Pain - NETHERLANDS'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener (id=16783, groups Powers of Pain/Electric Brains/Imagination Developments/Paradize, function Musician): https://csdb.dk/scener/?id=16783",
    "CSDb release — Bobix (1994, full credits): https://csdb.dk/release/?id=11433",
    "Lemon64 — Bobix: https://www.lemon64.com/game/bobix",
    "Lemon64 — Disc-O-Very (confirms the separate 'Music Player' credit for Elvin van Luijk): https://www.lemon64.com/game/disc-o-very",
    "Demozoo — Martijn Schutten (id=43074, groups K-Power/Legend): https://demozoo.org/sceners/43074/",
    "Local dataset: 8 files tagged Martijn_Schutten, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Martijn_Schutten` tag is Dutch musician Martijn Schutten's ('Junebug')
playroutine, used across his commercial Electric Brains games (Bobix,
Disc-O-Very) and demoscene work. Player-ID-fingerprinted across 8 files,
all his own — but whether this is genuinely his own hand-coded routine
remains an open question, not settled fact.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is a **real caution flag on
self-authorship**: one of his two confirmed games credits a SEPARATE
person as 'Music Player' (the game's driver coder), distinct from
Schutten's own composer credit — meaning the self-authored-routine
hypothesis for this specific tag is explicitly left unconfirmed rather
than asserted.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Martijn_Schutten`-tagged
`.sid` + trace — which would also help resolve the authorship question
above.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Martijn_Schutten` `.sid` (Bobix): load `$2000`, init
`$2d8f`, play `$2d81`, **316 register writes / 50 frames** (34 filter
writes — filter-heavy). Internals undocumented; memory map/format/effects
are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 entries), Lemon64
(2 pages), and Demozoo.

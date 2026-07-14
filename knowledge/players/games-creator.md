# The Games Creator (David & Richard Darling)

```json
{
  "id": "games-creator",
  "name": "The Games Creator (David & Richard Darling)",
  "aliases": ["Games_Creator"],
  "authors": ["David Darling", "Richard Darling"],
  "released": "1984 (Mirrorsoft Ltd. / Mastertronic)",
  "status": "in-progress",
  "platform": "A point-and-click game-construction-kit product, published by Mirrorsoft in 1984 (reissued by Mastertronic, and again in 1987 by Codemasters as 'Creations') — let non-programmers build single-screen arcade games without coding, predating SEUCK. Authored by teenage brothers David and Richard Darling, who founded Codemasters two years later (October 1986). Player-ID-fingerprinted across 7 files, ALL by the Darlings themselves, using their own tool.",
  "csdb_release": 116924,

  "memory": { "load_address": "Sample HVSC file traced (BMX Racers, made with the tool by its own authors): load $2e00 (init $2f90, play $2e00).", "zero_page": "TODO (no disassembly)", "layout": "Not documented — a game-construction-kit product, internal feature set (sprite editor, level editor, genre limits) not documented beyond 'single-screen arcade games'." },
  "entry": { "init": "Sample trace: $2f90.", "play": "Sample trace: $2e00 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED PRE-CODEMASTERS PRODUCT: David Darling (b. 17 June 1966, London) and brother Richard started writing C64 games as teenagers after their father bought a Commodore PET, forming Galactic Software in 1982 (David age 16), selling games to Mastertronic. Won Commodore's 'Programmers of the Year' award in 1984 — the same year as this tool's release. Owned a 50% stake in Mastertronic, sold in March 1986; founded Codemasters with their father Jim in October 1986. At Codemasters, David = Chairman/CEO, Richard = Creative Director — both documented as coders-turned-businessmen who wrote their own games/tools before founding the company.",
    "BMX RACERS (the traced file) IS CONFIRMED SELF-MADE: a 1985 Mastertronic budget release (£1.99), made by the Darlings THEMSELVES using their own Games Creator tool, per a Lemon64 forum comment: 'Although created on the Games Creator, this game isn't as bad as most GC games' — implying a general (if mild) reputation for games built with the tool being rough. Other games built with it: Mind Control, Dark Star, Pigs in Space, Magic Carpet, Orbitron, Jungle Story, Space Walk.",
    "CSDb 116924 IS A CRACK CREDIT, NOT AUTHORSHIP — flagged to avoid misattribution: the CSDb release page credits crackers 'Donald Duck' and 'Pojan' (scene distribution credits), not the Darlings themselves; it documents the product's scene circulation, not its original authorship. Original authorship is sourced from SIDId's own metadata and secondary company-history sources instead.",
    "CODEMASTERS INSTITUTIONAL LINK, CONFIRMED: Gavin Raeburn (already carded in this KB as [[gavin-raeburn]]) worked at Codemasters from ~1987 to 2009 — i.e. he joined the company the Darling brothers founded three years after this tool's release. This is a real, documented institutional connection, though no direct personal interaction between Raeburn and the Darlings on this specific tool was found.",
    "No source found describing 'The Games Creator' as a standalone product in detail (no dedicated Wikipedia/MobyGames product page — only company-history pages mention it in passing) — its precise feature set is undocumented beyond 'single-screen arcade game construction kit'.",
    "No confirmed technical detail distinguishing David's contribution from Richard's — SIDId credits both jointly, with no individual breakdown found anywhere.",
    "Not confirmed in SIDId beyond the bare name/author/release fields already used above. No known relationship found to any other composer/tool already in this KB beyond the Gavin Raeburn/Codemasters institutional link (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "Wikipedia — David Darling (businessman): https://en.wikipedia.org/wiki/David_Darling_(businessman)",
    "MobyGames — David Darling: https://www.mobygames.com/person/68889/david-darling/",
    "MobyGames — Richard Darling: https://www.mobygames.com/person/4043/richard-darling/",
    "Mastertronic archive — The Games Creator tag page (games built with it): https://mastertronic.co.uk/tag/the-games-creator/",
    "The Codemasters Archive — Creations (the 1987 Codemasters reissue of this tool): https://thecodemastersarchive.co.uk/games/creations/",
    "Lemon64 — BMX Racers (confirms self-made-with-the-tool status): https://www.lemon64.com/game/bmx-racers",
    "Lemon64 forum — BMX Racers/Games Creator commentary: https://www.lemon64.com/forum/viewtopic.php?t=32292",
    "CSDb release 116924 (crack distribution credits, not authorship — see quirks): https://csdb.dk/release/?id=116924",
    "Existing KB card: knowledge/players/gavin-raeburn.md (the Codemasters institutional link)",
    "Local dataset: 7 files tagged Games_Creator, 1 composer entity (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Games_Creator` tag is 'The Games Creator', a 1984 game-construction-
kit product by teenage brothers David and Richard Darling — who founded
Codemasters just two years later. Player-ID-fingerprinted across 7 files,
all self-made by the Darlings themselves using their own tool, including
the confirmed self-made release BMX Racers (1985).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: this **predates the
Darlings' Codemasters founding** by two years, a genuine origin-story
artifact; the **CSDb release ID resolves to a crack credit, not
authorship** (flagged to avoid misattribution); and a **real, documented
institutional link** to already-carded Codemasters composer Gavin Raeburn.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Games_Creator`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Games_Creator` `.sid` (BMX Racers): load `$2e00`,
init `$2f90`, play `$2e00`, **20 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — Wikipedia, MobyGames (2 pages), Mastertronic
archive, The Codemasters Archive, Lemon64 (2 pages), CSDb, and the
Gavin Raeburn card.

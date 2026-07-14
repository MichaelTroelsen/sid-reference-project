# Rhythm Construction Set (Georg Brandt)

```json
{
  "id": "georg-brandt-rhythm-cs",
  "name": "Rhythm Construction Set (Georg Brandt)",
  "aliases": ["Georg_Brandt/Rhythm_CS"],
  "authors": ["Georg Brandt"],
  "released": "13 June 1986",
  "status": "in-progress",
  "platform": "A second, genuinely distinct named tool by already-carded [[georg-brandt]] — 'Rhythm Construction Set' (RCS), CONFIRMED via CSDb AND independently corroborated by VGMPF as a real, publicly-distributed C64 tool that a SECOND composer, Frank Abbing, reused two years later for his own game 'Donald the Hero' (1988) — genuine third-party reuse, resolving an open question this KB's own [[georg-brandt]] card had previously left unconfirmed. Player-ID-fingerprinted across 3 files: 2 by Brandt himself, 1 by Abbing.",
  "csdb_release": 134813,

  "memory": { "load_address": "Sample HVSC file traced (Progress-Demo, composed by Georg Brandt): load $9514 (init $9514, play $9969).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $9514.", "play": "Sample trace: $9969 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a sparse 17-write/50-frame sample, single-voice — osc2 only)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED AS A REAL, NAMED, STANDALONE C64 TOOL, resolving an open question already flagged in [[georg-brandt]]'s own card: CSDb release (id=134813), 'Rhythm Construction Set [german],' AKA 'RCS,' released 13 June 1986, type Tool, credits Code+Music both Georg Brandt, no group.",
    "INDEPENDENT SECOND-SOURCE CORROBORATION FOUND, upgrading this from a hunch to a confirmed fact: VGMPF's own Georg Brandt gameography lists TWO separate entries referencing it — the tool's own 1986 release, AND 'Donald the Hero (C64), 1988,' with VGMPF's notes column explicitly reading 'Rhythm Construction Set.' This means VGMPF independently documents that Frank Abbing's 1988 game used Brandt's tool, matching this project's own player-tag data exactly — a genuine, sourced case of third-party tool reuse, not merely inferred from the shared tag.",
    "NO FUNCTIONAL OR TECHNICAL DESCRIPTION OF RCS ITSELF WAS FOUND ANYWHERE — no CSDb tool description beyond 'Tool' type, no 64'er magazine article, no German C64 retrospective describing what it actually does internally. The name 'Rhythm' plus its Tool classification suggests a drum/rhythm-pattern editor, but this reading is EXPLICITLY UNCONFIRMED, not stated by any source. One near-miss was checked and ruled out: a 64'er August-1985 article on Compware's unrelated 'Digi-Drum-Kit' hardware+BASIC product has no Brandt connection.",
    "RELATIONSHIP TO [[georg-brandt]]'S OWN MAIN ENGINE REMAINS UNCONFIRMED EITHER WAY: no source states whether RCS shares code with, or is entirely independent from, his main hand-coded piano-roll engine (documented in that card: load $8000/init $80c9/play $8062, 233 register writes/50 frames). The available technical facts are consistent with either reading — RCS is structurally different (single collapsed load/init/play address $9514, vs. the main engine's separate addresses; far sparser, single-voice-only trace) — which leans toward a distinct, more minimal driver, but this is inference from trace data, not an external source.",
    "FRANK ABBING (the tag's second composer) IDENTIFIED: German programmer, b. 1968, active on C64 in the 1980s (games/listings in Happy Computer and Magic Disk 64), later moved to Amiga/PC, and has returned to C64 homebrew releases in 2024-2025. 'Donald the Hero' (1988, sole Code+Music credit Frank Abbing) was published in Magic Disk 64 1988/06. No collaboration or co-credit link was found between Abbing and Brandt beyond the tool reuse itself — Abbing appears to have simply picked up Brandt's already-published 1986 tool two years later and used it solo, exactly the 'real reusable tool, not a personal routine' pattern this KB's own inferred-player heuristic anticipates. A possible later identity, 'Frank Abbing'/handle 'Nordwind64' (a 2017-2019 Remix64 C64 SID remixer), is EXPLICITLY LEFT UNCONFIRMED as the same person.",
    "Not confirmed in SIDId beyond the entry already known for this tag. Direct, confirmed relationship to [[georg-brandt]] (same original author, cross-referenced in both directions — that card has been updated in this same batch). No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "CSDb release id=134813 ('Rhythm Construction Set [german]', 13 June 1986): https://csdb.dk/release/?id=134813",
    "VGMPF — Georg Brandt (gameography, independently corroborates the Donald the Hero/RCS reuse): https://www.vgmpf.com/Wiki/index.php/Georg_Brandt",
    "Lemon64 — Donald the Hero (sole Code+Music credit Frank Abbing): https://www.lemon64.com/game/donald-the-hero",
    "C64-Wiki (DE) — Frank Abbing (biography): https://www.c64-wiki.de/wiki/Frank_Abbing",
    "64er-magazin.de — 'Trommelwirbel' (checked, ruled out as unrelated): https://www.64er-magazin.de/8508/trommelwirbel.html",
    "Existing KB card: knowledge/players/georg-brandt.md (the original author, updated in this same batch)",
    "Local dataset: 3 files tagged Georg_Brandt/Rhythm_CS, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Georg_Brandt/Rhythm_CS` tag is 'Rhythm Construction Set,' a second,
genuinely distinct named tool by already-carded [[georg-brandt]] —
confirmed via CSDb AND independently corroborated by VGMPF as a real
tool that a second composer, Frank Abbing, reused two years later.
Player-ID-fingerprinted across 3 files: 2 by Brandt, 1 by Abbing.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **independent
second-source corroboration**: VGMPF's own gameography, researched
separately from CSDb, documents the exact same tool-reuse case this
project's tag data already showed — upgrading a prior "plausible, not
confirmed" note on [[georg-brandt]]'s card into a genuinely confirmed
fact.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Georg_Brandt/Rhythm_CS`-
tagged `.sid` + trace — which could also be the only way to resolve
whether RCS shares code with [[georg-brandt]]'s own main engine.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Georg_Brandt/Rhythm_CS` `.sid` (Progress-Demo,
composed by Georg Brandt): load `$9514`, init `$9514`, play `$9969`,
**17 register writes / 50 frames** (0 filter writes — sparse,
single-voice). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — CSDb, VGMPF, Lemon64, C64-Wiki (DE),
64er-magazin.de, and the related georg-brandt card.

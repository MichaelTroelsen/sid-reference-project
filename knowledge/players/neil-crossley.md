# Neil Crossley (player routine)

```json
{
  "id": "neil-crossley",
  "name": "Neil Crossley (player routine)",
  "aliases": ["Neil_Crossley"],
  "authors": ["Neil Crossley"],
  "released": "1990-1992 (Images Software conversion era)",
  "status": "in-progress",
  "platform": "English composer Neil Crossley's own playroutine — likely in-house at Images Software/Images Design, a UK studio specializing in Epyx/US Gold/Ocean/Grandslam C64 conversions, based on recurring shared personnel across nearly all his known credits. Credited as a PROGRAMMER (not just musician) on at least one title. Player-ID-fingerprinted across 7 files, all his own, matching his 7 known game credits exactly.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (The Amazing Spider-Man, 1990): load $5d4d (init $5d4d, play $5e41).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $5d4d.", "play": "Sample trace: $5e41 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "GAME LIST FULLY CONFIRMED, exactly matching the tag's own 7-file count (a strong cross-check with this project's own data): Chip's Challenge (Epyx/US Gold, 1990 — a GENUINE C64 port of the well-known Lynx/Windows puzzle game exists, confirmed via Lemon64), The Amazing Spider-Man (Empire Software EU/Paragon US, 1990, the traced file), Shadow Dancer (US Gold, 1991, a Sega conversion), Last Battle (Elite, 1991), G-Loc R360 (US Gold, 1992), Space Gun (Ocean, 1992), and The Hunt for Red October (shoot-em-up version, Grandslam, 1990 — on THIS title he is credited as a PROGRAMMER, alongside Greg Modern, with music co-credited to Allister Brimble, already carded in this KB as [[michael-delaney]]'s dominant user).",
    "STRONG, THOUGH NOT INDEPENDENTLY SOURCED, IN-HOUSE STUDIO PATTERN: across 5+ of his 7 games, the same personnel recur — graphics by Steve Bedser/Chris Edwards/Andrew Pang, coding by Tom Pinnock/Jon Williams/James Smart, and 'Images Software'/'Images Design' as the recurring conversion house for Epyx/US Gold/Ocean/Grandslam ports. This strongly suggests Crossley was Images Software's in-house musician, though this specific employer relationship was inferred from repeated personnel co-occurrence across Lemon64 credit pages, not independently confirmed via a company history source.",
    "HVSC/EMPLOYER-NAME DISCREPANCY, deliberately flagged rather than reconciled: HVSC Musicians.txt lists his group as 'JVM Design', which differs from 'Images Software'/'Images Design' seen on his actual game credits — left as an unresolved naming discrepancy, not guessed at.",
    "AT LEAST PARTLY A CODER, confirmed via the Hunt for Red October programmer credit — not purely a musician, similar to several other composers in this KB who also coded.",
    "NAME-COLLISION RISK FLAGGED AND RESOLVED: a contemporary, unrelated UK music journalist/musician also named 'Neil Crossley' (neilcrossley.com, MusicRadar contributor, Royal Welsh College of Music & Drama staff) surfaced repeatedly in general web search — explicitly confirmed as a DIFFERENT person with no C64/games connection; not conflated with this card's subject.",
    "MobyGames and CSDb were both inaccessible during research (403 Forbidden / inconsistent search results) — could not confirm or rule out profiles on either platform; treated as genuinely unverified rather than assumed absent.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB beyond the Allister Brimble/Michael Delaney co-credit note above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Crossley, Neil / JVM Design - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Chip's Challenge (1990, confirms a genuine C64 port exists): https://www.lemon64.com/game/chips-challenge",
    "Lemon64 — The Amazing Spider-Man (1990): https://www.lemon64.com/game/amazing-spider-man",
    "Lemon64 — Shadow Dancer (1991): https://www.lemon64.com/game/shadow-dancer",
    "Lemon64 — Last Battle (1991): https://www.lemon64.com/game/last-battle",
    "Lemon64 — G-Loc R360 (1992): https://www.lemon64.com/games/details.php?ID=1060",
    "Lemon64 — Space Gun (1992): https://www.lemon64.com/games/details.php?ID=2386",
    "Lemon64 — The Hunt for Red October, shoot-em-up version (1990, Crossley credited as programmer): https://www.lemon64.com/game/hunt-for-red-october-shoot-em-up",
    "Local dataset: 7 files tagged Neil_Crossley, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Neil_Crossley` tag is English composer Neil Crossley's own
playroutine, used across a confirmed run of Epyx/US Gold/Ocean/Grandslam
C64 conversions — including a genuine, real port of the well-known puzzle
game Chip's Challenge. Player-ID-fingerprinted across 7 files, exactly
matching his 7 known game credits, at least one of which also credits him
as a programmer.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **all 7 game credits
independently confirmed**, matching the tag's file count exactly; a
**strong in-house-studio pattern** (Images Software) inferred from
repeated shared personnel, though not independently sourced; and a
**resolved name-collision risk** against an unrelated contemporary music
journalist of the same name.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Neil_Crossley`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Neil_Crossley` `.sid` (The Amazing Spider-Man): load
`$5d4d`, init `$5d4d`, play `$5e41`, **117 register writes / 50 frames**
(0 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt and Lemon64 (7 game pages).

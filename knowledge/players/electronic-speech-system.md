# Electronic Speech System (ESS)

```json
{
  "id": "electronic-speech-system",
  "name": "Electronic Speech System (ESS)",
  "aliases": ["Electronic_Speech_Sys"],
  "authors": ["Electronic Speech Systems (Forrest Mozer, Todd Mozer, Joe Costello)"],
  "released": "1983-1984",
  "status": "in-progress",
  "platform": "A pure-software C64 speech-synthesis driver (no special hardware required), built on Forrest Mozer's patented speech-synthesis work. Made by the company Electronic Speech Systems — a CONFIRMED, verified corporate identity: this company was renamed ESS Technology Inc. and went on to make PC sound cards (the AudioDrive line) in the 1990s. Used in several well-known C64 games' speech effects (Ghostbusters, Impossible Mission). Player-ID-fingerprinted across 18 files: 16 by the company itself (game-bundled voice-clip data), 1 each by composers Paul Butler and Russell Lieblich (both already carded in this KB as [[paul-butler]] and via [[music-studio]]), who each licensed/reused the driver in one of their own games.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Desert Fox, Paul Butler's game, a self-installing RSID): load $6480 (init $8160, play self-installing/derived).", "zero_page": "TODO (no disassembly)", "layout": "Voice-clip/word-list data, per Cave of the Word Wizard's CSDb entry ('Set 5', 50 'songs' = word-list voice clips, 17792 bytes)." },
  "entry": { "init": "Sample trace: $8160.", "play": "Self-installing IRQ (RSID play=$0000 convention)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO (speech/voice synthesis, not conventional music notes)", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED, VERIFIED CORPORATE IDENTITY — a rare case where a SIDId Wikipedia pointer checks out literally, not just plausibly: this project's own SIDId import comment ('More info: en.wikipedia.org/wiki/ESS_Technology') is CORRECT. Electronic Speech Systems was founded in 1983 by Forrest Mozer (UC Berkeley space physicist and speech-synthesis chip inventor, prior work at Telesensory Systems and National Semiconductor's 'Digitalker'), his son Todd Mozer, and Joe Costello — and was LATER RENAMED ESS Technology Inc., which went on to make the well-known AudioDrive PC sound-card line in the 1990s. Same company, pre-rename.",
    "PURE SOFTWARE SPEECH SYNTHESIS, no special hardware required — built on Mozer's own patented speech-synthesis IC work (US patents 4,214,125 / 4,433,434 / 4,435,831). Known C64 titles using ESS speech effects: Ghostbusters (Activision 1984 — the famous 'He slimed me!!' line), Impossible Mission (Epyx 1984 — 'Stay a while — stay forever!'), Kennedy Approach (MicroProse), Beach-Head II, Jump Jet.",
    "DO NOT CONFLATE WITH SAM (Software Automatic Mouth) — a different, contemporaneous C64 speech product by Don't Ask Software, unrelated company and codebase, which surfaces repeatedly in generic searches for C64 speech synthesis.",
    "CAVE OF THE WORD WIZARD, the specific game behind the traced/failed sample files, is a genuine educational spelling game published by Timeworks — a publisher/year discrepancy exists between Wikipedia (1982) and CSDb's SID metadata (1984), left as an unresolved caveat rather than picking one; plausibly an original release vs. a later disk edition.",
    "NO CSDb GROUP PAGE OR SCENE-ROLE ENTRY exists for Electronic Speech Systems — it's catalogued purely as a company/game-composer credit, not a demoscene entity, consistent with being a commercial speech-tech company rather than a scene participant.",
    "The 2 single-file uses by Paul Butler (Desert Fox, 1988 Accolade/Artech) and Russell Lieblich are PLAUSIBLE licensing/reuse of the ESS driver in their own games, but this specific relationship (how/why they each used it once) is NOT documented anywhere found — flagged as inference from usage pattern only, not a sourced fact.",
    "TOOLING NOTE: another file under this tag (Cave_of_the_Word_Wizard_Intro.sid, from the company's own folder) FAILED to trace with this project's tracer — a confirmed, known limitation for some self-installing-IRQ tunes (see the tracer's own honest FAILED diagnostic), not every file under a tag necessarily traces; the Desert_Fox.sid sample used here DID trace successfully."
  ],
  "sources": [
    "Wikipedia — ESS Technology (corporate history, founding as Electronic Speech Systems, Mozer's patents, C64-era game credits): https://en.wikipedia.org/wiki/ESS_Technology",
    "HVSC Musicians.txt ('Electronic Speech Systems - USA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb SID — Impossible Mission (1984, Epyx, ESS credited): https://csdb.dk/sid/?id=1513",
    "CSDb SID — Cave of the Word Wizard Set 5 (1984, Timeworks, voice-clip data): https://csdb.dk/sid/?id=38807",
    "Wikipedia — Cave of the Word Wizard: https://en.wikipedia.org/wiki/Cave_of_the_Word_Wizard",
    "Lemon64 — Cave of the Word Wizard: https://www.lemon64.com/game/cave-of-the-word-wizard",
    "Commodore Zone — Electronic Speech Systems company profile: http://www.the-commodore-zone.com/articlelive/categories/Articles/Legends/Companies/Electronic-Speech-Systems/",
    "Existing KB cards: knowledge/players/paul-butler.md, knowledge/players/music-studio.md (the two composers who each used this driver once)",
    "Local dataset: 18 files tagged Electronic_Speech_Sys, 3 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Electronic_Speech_Sys` tag is a pure-software C64 speech-synthesis
driver made by Electronic Speech Systems — a company later renamed **ESS
Technology Inc.**, the well-known 1990s PC sound-card maker. Used for
famous speech effects in Ghostbusters and Impossible Mission, and licensed
into other games including Paul Butler's Desert Fox. Player-ID-
fingerprinted across 18 files, mostly the company's own game-bundled
voice-clip data.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **fully verified
corporate identity link** to ESS Technology — an unusual case where a
SIDId Wikipedia pointer checks out literally rather than being a red
herring. Also note the **explicit disambiguation from SAM**, an unrelated
contemporaneous C64 speech product, and the **honest tooling note** that
not every file under this tag traces successfully with this project's
tracer.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of an `Electronic_Speech_Sys`-
tagged `.sid` + trace.

## Verification

**Playback confirmed (2026-07-14) — `status: in-progress`.** Traced a real
HVSC `Electronic_Speech_Sys` `.sid` (Desert Fox, composed by Paul Butler):
load `$6480`, self-installing IRQ, **18 register writes / 50 frames**.
Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — Wikipedia (2 pages), HVSC Musicians.txt, CSDb (2
SID entries), Lemon64, Commodore Zone, and the 2 related composer cards.

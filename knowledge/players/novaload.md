# Novaload

```json
{
  "id": "novaload",
  "name": "Novaload",
  "aliases": ["Novaload"],
  "authors": ["Paul Woakes", "Novagen Software"],
  "released": "1984 (players.json start_year 1984; earliest confirmed C64 use is Novagen's own Encounter!, 1984)",
  "status": "stub",
  "platform": "Native C64 licensed tape-loading/turbo-loader system with an embedded SID music + custom loading-screen display, licensed by Novagen Software to third-party publishers — NOT a scene tracker/editor released for general music composition. Composers supplied music data via an associated Novaload editor/construction kit rather than a standalone tool used independently of the loader.",
  "csdb_release": 133037,

  "memory": {
    "load_address": "TODO: no single fixed map confirmed. The reference SID 'Novaload (loader)' (CSDb SID id 38789, composer Paul Woakes, 1984) has PSID load address $1000. A claim that the loader's tape-header code block itself loads at $0140 could not be re-verified during a falsify pass (checked muckypaws.com, codebase64, VGMPF, and commodoregames.net; none state $0140) and has been removed rather than repeated unsourced. No disassembly done here to establish a real memory map.",
    "zero_page": "TODO: data/players.json lists zero_pages: \"No\" for this entry, but (as with other DeepSID-curated closed players, e.g. playstar.md) it is unclear whether that means genuinely no ZP usage or just an unfilled field — not treated as a confirmed fact without disassembly.",
    "layout": "TODO: no public source or disassembly found. data/players.json's spec fields ('instruments': 'POKE-like commands in music data', 'patterns': 'Barlines prepended by REM command', 'track_system': '3 notes + durations per line') suggest a BASIC-hosted composition workflow rather than a compiled binary table format, but no memory layout is confirmed."
  },
  "entry": {
    "init": "TODO: per-file only. Reference SID 'Novaload (loader)' (CSDb id 38789) has PSID init $1000 — not confirmed as a fixed entry across all licensee games.",
    "play": "TODO: per-file only. Same reference SID has PSID play $1003 — not confirmed as fixed across licensee games."
  },
  "speed": "1x per data/players.json ('speeds': '1x'). No CIA-timer/multispeed behaviour documented anywhere found.",

  "data_format": {
    "order_list": "TODO: no disassembly done",
    "patterns": "data/players.json: 'Barlines prepended by REM command' (BASIC-hosted composition; not a confirmed binary layout)",
    "instruments": "data/players.json: 'POKE-like commands in music data' — composers directly poke SID registers rather than using a structured instrument table",
    "wavetable": "TODO: data/players.json describes no pulse/filter/vibrato modulation at all (pulsating 'No; fixed pulse width', filtering 'No; fixed filter setting', vibrato 'No'), so a wavetable in the tracker sense may not exist — not confirmed without disassembly",
    "pulsetable": "TODO: see wavetable note — players.json says fixed pulse width, no pulsating table",
    "filtertable": "TODO: see wavetable note — players.json says fixed filter setting, no filter table"
  },
  "effects": {
    "encoding": "TODO: no numeric opcode table documented. data/players.json's 'track_cmds' field says only 'Loop range defined by commands' (i.e. a small set of BASIC-level commands controls looping, not a general effect-command byte scheme).",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Not a released scene tracker/editor — Novaload was a commercial tape turbo-loading/copy-protection system that Paul Woakes of Novagen Software (Birmingham, UK) built out of a fast-loading side effect discovered in his own C64 game Encounter! (1984); it was then licensed to numerous publishers including Ocean, US Gold, LucasFilm Games, and many Mastertronic titles (source: muckypaws.com writeup + Lemon64 discussion, see sources). The SID music/loading-screen display was one feature of the licensed package, not a standalone composition tool distributed to the wider scene.",
    "No SIDId entry exists for the tag 'Novaload' — checked data/sidid.json byTag directly (Node lookup, case-insensitive), no match. Identity here rests on data/players.json's curated entry plus CSDb, not SIDId.",
    "The csdb_release used here (133037, 'Novaload Construction Kit V2.2', dated 1984 on CSDb) lists NO credited author/group on its CSDb release page, and a CSDb user comment on that page reads: \"I never heard the Novaload system was commercially distributed but it looks like that\" — i.e. even CSDb contributors are unsure whether this specific construction-kit release is Novagen's own official authoring tool or a later scene reconstruction/dump of one. Treat csdb_release as the best-available identifying release, not as confirmed to be Novagen's own authorized product.",
    "Per-file PSID headers are not enough to imply one fixed player memory map: the reference 'Novaload (loader)' SID (CSDb id 38789) has load/init $1000, play $1003 — a single data point, not confirmed across other licensee titles. This mirrors the caution already documented in radarsoft.md for other per-game-embedded routines — do not assume a shared layout without real disassembly.",
    "A widely-circulated technical writeup of Novaload's 'stack poisoning' loading protocol (muckypaws.com, 2022) is explicitly for the Commodore 16 implementation — its concrete addresses (TED timer registers at $FF02/$FF03, tape buffer around $0333-$03F2, zero page $0100-$01FF, $FF19) are C16-specific and NOT directly transferable to the C64 version; cited here only as background on how the general 'stack poisoning' trick works, not as a source of any C64 fact.",
    "Small, concentrated composer set in this project's dataset: all 10 Novaload-tagged files split across just 4 composers — Aviador Dro (5 files, a Spanish band/game-music project), Gary J. Sabin (3), Jeff Minter (1, for his own Llamasoft game Ancipital), and Mark Cooksey (1, 'Elite Loader'). Per the extraction template's composer-concentration heuristic this reads as a small set of licensee-title composers rather than a widely adopted general-purpose tool — consistent with Novaload being licensed per-game rather than freely distributed.",
    "data/players.json describes music entry as fully manual/unassisted: no arpeggio, no pulsating, no filtering, no vibrato, no hard restart, no patterns in the tracker sense — composers directly programmed fixed-parameter notes and durations, i.e. a deliberately minimal audio feature set appropriate to a loading-screen jingle rather than a full composition."
  ],
  "sources": [
    "data/players.json — curated 'Novaload' entry (developer Novagen Software, start_year 1984, csdb_id 133037, platform, encoding, and behavioural spec fields quoted above)",
    "knowledge/COVERAGE.md — rank 28, 10 files, single grouped raw tag 'Novaload'",
    "Local aggregation of data/composers/*.json: 10 files across 4 composers (Aviador Dro x5, Gary Sabin x3, Jeff Minter x1, Mark Cooksey x1)",
    "Checked data/sidid.json byTag for 'Novaload' (case-insensitive) — no entry found",
    "CSDb release 'Novaload Construction Kit V2.2' (1984, no credited author, user comment questioning commercial-distribution status): https://csdb.dk/release/?id=133037",
    "CSDb SID entry 'Novaload (loader)', composer Paul Woakes, 1984 (load $1000 / init $1000 / play $1003 / 1124 bytes): https://csdb.dk/sid/?id=38789",
    "CSDb search confirming the small set of Novaload-related releases/SIDs: https://csdb.dk/search/?seinsel=all&search=novaload",
    "Novagen Software history, Paul Woakes & Bruce Jordan, Birmingham UK: https://en.wikipedia.org/wiki/Novagen_Software",
    "Technical background on Novaload's stack-poisoning loading trick (Commodore 16 implementation specifically, not directly transferable to C64): https://muckypaws.com/2022/10/16/novaload-commodore-speed-load-and-protection-system-hacked/",
    "Novaload usage/licensing background (publishers, old vs new Novaload, loading-screen features): https://www.commodoregames.net/copyprotection/tape-protection.asp and https://www.vgmpf.com/Wiki/index.php?title=Novaload",
    "Background on Encounter! (1984) as the game where Novagen discovered the fast-loading trick: Lemon64 forum discussion, https://www.lemon64.com/forum/viewtopic.php?t=67278"
  ]
}
```

## Overview

Novaload was a licensed C64 tape turbo-loading and copy-protection system
written by Paul Woakes of Novagen Software (Birmingham, UK), first surfacing
in Novagen's own 1984 game *Encounter!* when a magazine noticed the game
loaded roughly ten times faster than Commodore's stock routine. Novagen then
packaged it as a standalone product, licensed to numerous other publishers —
Ocean, US Gold, LucasFilm Games and many Mastertronic titles among them — who
used it to display a custom loading screen, an elapsed-time/block counter, a
scrolltext, and SID music while the game loaded from tape. It is therefore
**not a scene tracker/editor** in the usual knowledge-card sense: composers
supplied loading-screen music via an associated Novaload editor/construction
kit as part of a commercial licensing deal, not a tool distributed for
general composition. In this project's dataset it covers 10 files (rank 28,
`knowledge/COVERAGE.md`) split across just 4 composers — Aviador Dro, Gary J.
Sabin, Jeff Minter, and Mark Cooksey — each working on a specific licensee
title, which matches its identity as a per-game licensed system rather than a
widely adopted general tool.

## Quirks & gotchas

See the `quirks` array in full. The load-bearing points: (1) this is a
commercial loader system, not a released tracker, so "usage" here means
"games that licensed it," not "musicians who chose it"; (2) the one CSDb
release used for `csdb_release` (133037, "Novaload Construction Kit V2.2")
has no credited author and a user comment doubting its official/commercial
status — don't treat it as confirmed Novagen provenance; (3) the only
concrete PSID-header numbers found (load/init $1000, play $1003, from the
reference "Novaload (loader)" SID) are for one file only, not confirmed across
other licensee titles — per-game inconsistency is expected, as with
[radarsoft.md](radarsoft.md); (4) the one detailed public technical writeup
of the "stack poisoning" loading trick is for the Commodore 16 version, with
C16-specific addresses that do not transfer to the C64 implementation.

## Disassembly notes

None performed. No public C64 source or disassembly of the Novaload player
routine itself was found — only the PSID header of one reference `.sid`
(CSDb id 38789) and DeepSID's own curated behavioural description
(`data/players.json`). A future pass could disassemble that reference file
(or one of the 10 dataset files) and trace it through `sidm2-siddump` to
establish real init/play/memory facts, ideally cross-checked against a
second licensee title to see whether the loader truly relocates per game or
uses one fixed layout.

## Verification

**Not verified — `status: stub`.** Identity (author, company, year, general
purpose, licensing scope) is confirmed from Wikipedia, CSDb, and background
articles on Novaload's loading mechanism. The behavioural spec fields quoted
from `data/players.json` (no arpeggio/pulsating/filtering/vibrato, BASIC-line
track system) are DeepSID's own curated description, not an independent
disassembly by this project, so they are presented as cited claims rather
than confirmed runtime facts. Every memory-map/entry-point/data-format field
is `TODO` because no disassembly has been done and the one PSID-header data
point available does not by itself establish a fixed layout.

## Sources

See the `sources` array — `data/players.json`'s curated entry, this
project's own `data/composers/*.json` aggregation, the CSDb release and SID
entry pages, Wikipedia's Novagen Software article, and background writeups on
Novaload's loading mechanism (noting the C16-specific caveat on the
muckypaws.com technical analysis).

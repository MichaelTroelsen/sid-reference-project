# Ashley Hogg (player routine)

```json
{
  "id": "ashley-hogg",
  "name": "Ashley Hogg (player routine)",
  "aliases": ["Ashley_Hogg"],
  "authors": ["Ashley Hogg"],
  "released": "~1989-1993 (Codemasters/Thalamus era)",
  "status": "in-progress",
  "platform": "Ashley Hogg's own playroutine, used for Codemasters/Thalamus C64 games he composed AND is credited as designer/programmer on. Player-ID-fingerprinted across 17 files, all his own. SIDId has TWO distinct byte-signatures for him — 'Ashley_Hogg' (normal tune playback) and a separate 'Ashley_Hogg_Digi' (digi/sample routine) — matching this project's own observation that one of his files ('5-Channel_Digi-Tune.sid') is an RSID with no normal play address.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (CJ's Elephant Antics): load $a900 (init $c000, play $c011).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $c000.",
    "play": "Sample trace: $c011 (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 3 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Ashley Hogg was DESIGNER/PROGRAMMER AND MUSICIAN on his best-known titles — VGMPF's credit table lists him as Composer/Programmer/Designer on CJ in the USA, CJ's Elephant Antics, Spike in Transylvania, Steg the Slug, and Nobby the Aardvark (all C64, 1991-1993), and The Codemasters Archive credits 'Ash Hogg' on CJ's Elephant Antics as Designed+Programmed+Music. Strong evidence this is a genuinely self-written routine, not a third-party tool — same 'coder-composer' pattern as Neil Brennan and Paul Norman elsewhere in this KB.",
    "TWO DISTINCT SIDId SIGNATURES, independently confirming a technical split we already observed: SIDId's sidid.cfg carries separate byte-pattern detectors for 'Ashley_Hogg' (normal playback) and 'Ashley_Hogg_Digi' (a digi/sample routine — its signature includes writes to $D418, the volume register, the classic 4-bit-DAC digi technique). This matches this project's own trace: 'Ashley_Hogg' 5-Channel_Digi-Tune.sid is an RSID with play address 0 (not a normally PSID-callable tune) — i.e. a self-installing digi player distinct from his standard tune routine. NOTE: these SIDId signatures are NOT present in this project's currently-imported sidid.nfo snapshot (checked data/sidid.json directly — no match); confirmed instead via a live fetch of the upstream cadaver/sidid GitHub repo's sidid.cfg, so a future re-import of the SIDId snapshot would pick these up. The signatures carry no name/author/comment metadata (unlike some other SIDId entries), only raw detection bytes.",
    "HVSC lists his country as UNITED KINGDOM (NORTHERN IRELAND). CSDb-credited SID-track count (17, 1989-1993) matches the local file count exactly, corroborating full/clean attribution for this tag.",
    "POST-C64 CAREER (VGMPF): moved into Amiga/Genesis/Sega work (Cosmic Spacehead, Fantastic Dizzy, Yogi Bear's Cartoon Capers — credited there as 'Sega Music Player programmer', plus a 'UniSound' Sega Genesis/MegaCD driver, 1994), then into general games programming (Runecraft, Blitz Games, Playground Games, Unity Technologies) — a long, technical career consistent with the coder-composer reading above.",
    "A claim that Hogg built his own proprietary C64 assembler (from an AI-summarized web search, source interview site unreachable/TLS-broken) is UNVERIFIED — flagged, not included as fact.",
    "No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found). No public disassembly or source (not in the realdmx RE repo; no STIL technical note). Runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Hogg, Ashley - UNITED KINGDOM (NORTHERN IRELAND)')",
    "CSDb scener (id=18524, bio lists CJ Elephant Antics/CJ in USA/Nobby the Aardvark/Spikey in Transylvania/Steg the Slug): https://csdb.dk/scener/?id=18524",
    "CSDb SID-track search (17 tracks, matches local file count exactly): https://csdb.dk/search/?search=Ashley+Hogg",
    "VGMPF (credit table, post-C64 career): https://www.vgmpf.com/Wiki/index.php/Ashley_Hogg",
    "Lemon64 — Nobby the Aardvark: https://www.lemon64.com/game/nobby-the-aardvark",
    "The Codemasters Archive — CJ's Elephant Antics: https://thecodemastersarchive.co.uk/games/cjs-elephant-antics/",
    "SIDId sidid.cfg — Ashley_Hogg + Ashley_Hogg_Digi byte signatures (live-fetched, not yet in this project's imported snapshot): https://raw.githubusercontent.com/cadaver/sidid/master/sidid.cfg",
    "Local dataset: 17 files tagged Ashley_Hogg, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ashley_Hogg` tag is British (Northern Irish) game designer/programmer/
musician Ashley Hogg's own playroutine, used across the Codemasters/
Thalamus C64 games he both coded and scored. Player-ID-fingerprinted across
17 files, all his own — SIDId independently confirms two distinct
signatures for his work (a normal tune player and a separate digi/sample
player), corroborating this project's own trace finding.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he's a **confirmed
designer/programmer as well as composer** on his named titles; **SIDId has
two separate byte-signatures** for him (normal + digi), matching this
project's own RSID/play=0 observation for his digi-tune file; and those
signatures are **not yet in this project's imported SIDId snapshot** (a
re-import would pick them up).

## Disassembly notes

None published (not in the realdmx RE repo; SIDId has detection
signatures but no disassembly notes). A future `verified` needs an
original disassembly of an `Ashley_Hogg`-tagged `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Ashley_Hogg` `.sid` (CJ's Elephant Antics): load
`$a900`, init `$c000`, play `$c011`, **172 register writes / 50 frames**
(3 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, VGMPF, Lemon64, The
Codemasters Archive, and the SIDId sidid.cfg signatures.

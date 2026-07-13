# Jeroen Koops (player routine)

```json
{
  "id": "jeroen-koops",
  "name": "Jeroen Koops (player routine)",
  "aliases": ["Jeroen_Koops"],
  "authors": ["Jeroen Koops"],
  "released": "~1990-1993 (Dutch demoscene era)",
  "status": "in-progress",
  "platform": "Jeroen Koops's ('Phantom') own hand-coded 6502 demoscene playroutine. Player-ID-fingerprinted across 22 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Awkward): load $2E00 (init $2E48, play $2E21).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $2E48.",
    "play": "Sample trace: $2E21 (called in IRQ). Note play < init here."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (filter writes observed — 33 in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Jeroen Koops — Dutch C64 composer/coder, handle 'Phantom', group T'Pau (per HVSC Musicians.txt: 'Koops, Jeroen (Phantom) / T'Pau - NETHERLANDS'). CSDb functions: Musician, and Coder+Musician under 'Phantom' — consistent with a self-written routine. Active ~1990-1993. A demoscene (not commercial-games) composer.",
    "Works (demos/diskmags): Cosmail (1990), The Cult (1990, TAT Party 2), Vector Magic 1 (1991, Art-X Party), Commodore Repair (1993, TSR Party, 3rd), diskmags (Mendip #2, Knakebrød #1), the Great Tunes 4 collection. HVSC folder holds More Than Meets the Eye, Wasted Lands, Blaze of Glory, Digi Warrior.",
    "SINGLE-COMPOSER routine (all 22 files are his own) — by this project's heuristic, a strong signal of a personal/in-house routine rather than a shared tool. Not in SIDId.",
    "MUSIC ASSEMBLER co-occurrence (interesting, but derivation UNKNOWN): within Koops's own HVSC folder the files split ~14 tagged Jeroen_Koops (his custom routine) and ~8 tagged Music_Assembler (a recognized standalone editor). So he demonstrably used the [[music-assembler]] editor for some tunes and his own routine for others. Whether his routine is DERIVED from Music Assembler is unproven — the co-occurrence is suggestive but there is no source/disassembly evidence. Do NOT assert a derivation.",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt (identity + T'Pau group): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt (line 'Koops, Jeroen (Phantom) / T'Pau - NETHERLANDS')",
    "CSDb scener (Jeroen Koops / Phantom): https://csdb.dk/scener/?id=2289",
    "DeepSID composer folder: https://deepsid.chordian.net/ → /MUSICIANS/K/Koops_Jeroen/",
    "Local dataset: 22 files tagged Jeroen_Koops, 1 composer (see knowledge/COVERAGE.md); his folder also has ~8 files tagged Music_Assembler"
  ]
}
```

## Overview

The `Jeroen_Koops` tag is Dutch demoscene composer/coder Jeroen Koops's
('Phantom', group T'Pau) own hand-coded playroutine, Player-ID-fingerprinted
across 22 files — all his own, a tight single-composer routine.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he was a **coder as well as a
musician** (own routine); it's a **single-composer** tag (personal-routine
signal); and the **[[music-assembler]] co-occurrence** — his HVSC folder splits
between his own routine (~14 files) and the Music Assembler editor (~8), showing
he used both, though any derivation is unproven.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future `verified`
needs an original disassembly of one of the `Jeroen_Koops`-tagged `.sid`s + trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Jeroen_Koops` `.sid` (Awkward): load `$2E00`, init `$2E48`,
play `$2E21`, **470 register writes / 50 frames** (33 filter writes). Internals
undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt (identity), CSDb, and DeepSID.

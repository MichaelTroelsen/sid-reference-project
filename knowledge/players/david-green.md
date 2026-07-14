# David Green (player routine)

```json
{
  "id": "david-green",
  "name": "David Green (player routine)",
  "aliases": ["David_Green"],
  "authors": ["David Green"],
  "released": "~1989 (Breakpoint Designs)",
  "status": "in-progress",
  "platform": "English composer David Green's ('Greeny', group Breakpoint Designs) playroutine — a genuinely thin biography beyond one HVSC line, with no CSDb scener presence at all. Player-ID-fingerprinted across 8 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Advert): load $a400 (init $a400, play $a441).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $a400.", "play": "Sample trace: $a441 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 3 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "GENUINELY THIN BIOGRAPHY, explicitly flagged rather than papered over: HVSC Musicians.txt confirms only 'Green, David (Greeny) / Breakpoint Designs - UNITED KINGDOM (ENGLAND)' — handle 'Greeny', group 'Breakpoint Designs' (likely a small commercial dev studio/label, not a demogroup — could not confirm what kind of entity it was). NO CSDb scener page exists for him under any of 'David Green'/'Green, David'/'Greeny' (direct search returned zero results) — this absence, combined with the strong 8/8 single-composer signal, is CIRCUMSTANTIAL (not confirmed) support for a personal, hand-coded routine used only in his own commercial game work, not a shared demoscene tool. Flagged as inference from absence of data, not a sourced statement.",
    "'BARMY BILL'S FLIGHT OF FUN' (a file in his folder) is confirmed as a REAL commercial C64 game — a horizontal-scrolling shoot-em-up, released 1989 — but its Lemon64 page 404s and its MobyGames page is bot-blocked, so no primary source could be checked for its full credits. A WebSearch AI-summary claim that it was 'created by Lee Hudson & David Green in 1989' could NOT be traced to any primary source and is EXPLICITLY NOT included as fact — flagged as unverified, discarded rather than reported.",
    "NO CSDb RELEASE EXISTS for 'Barmy Bill's Flight of Fun' either — consistent with commercial/budget game distribution rather than demoscene circulation, but again inference, not direct confirmation.",
    "'ADVERT' (the traced file) has no corroborating source explaining what it advertises — plausibly a TV/product jingle or an in-game/menu tune, genuinely unknown.",
    "Extensive generic web noise for the common name 'David Green' (LA musicians, IMDb sound-department entries, etc.) was checked and correctly excluded as unrelated — none plausibly connect to this C64 composer.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Green, David (Greeny) / Breakpoint Designs - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "WoWRoms — Barmy Bill's Flight of Fun (1989, C64, genre/size metadata only, no credits): https://wowroms.com/en/roms/commodore-64/barmy-bills-flight-of-fun/122731.html",
    "CSDb search (confirms zero scener/release results for this composer or game): https://csdb.dk/search/?seinsel=all&search=Green%2C+David",
    "Local dataset: 8 files tagged David_Green, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `David_Green` tag is English composer David Green's ('Greeny', group
Breakpoint Designs) own playroutine — one of this KB's thinner-documented
composers, with no CSDb presence at all and only a single HVSC line as
confirmed biography. Player-ID-fingerprinted across 8 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **honestly flagged
thin biography**: every claim beyond the bare HVSC line is either
circumstantial inference or an explicitly discarded unverified web-search
claim (a Lee Hudson co-credit that could not be traced to any primary
source).

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `David_Green`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `David_Green` `.sid` (Advert): load `$a400`, init
`$a400`, play `$a441`, **100 register writes / 50 frames** (3 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, WoWRoms, and CSDb (a
confirmed-negative search).

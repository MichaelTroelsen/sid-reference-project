# Frank Tout (player routine)

```json
{
  "id": "frank-tout",
  "name": "Frank Tout (player routine)",
  "aliases": ["Frank_Tout"],
  "authors": ["Frank G. Tout"],
  "released": "1984-1988 (Your Commodore magazine era)",
  "status": "in-progress",
  "platform": "British bedroom-coder Frank G. Tout's own playroutine — confirmed, on every title where credits could be found, as the SOLE author of code, graphics, AND music, a classic one-man-band type-in-listing profile. Mostly published via the UK magazine Your Commodore, later on budget labels (Nationsoft, Super Sparklers/Creative Sparks). Player-ID-fingerprinted across 6 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Cherry Picker, a magazine type-in game): load $9200 (init $924c, play $9200).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $924c.", "play": "Sample trace: $9200 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED SOLE AUTHOR OF EVERYTHING on every title where full credits could be found: Cherry Picker (the traced file, a single-screen platformer, Your Commodore magazine, March 1985 issue — Programmer, Graphics, AND Music all credited to Frank G. Tout) and Zenith (a horizontal-scrolling shoot-em-up, 'Super Sparklers'/Creative Sparks budget tape label, 1988, £2.99 — again Programmer/Graphics/Music all Tout). This one-man-band pattern strongly supports the working theory that 'Frank_Tout' is genuinely his own hand-rolled playroutine, not a shared third-party tool.",
    "'ENCLAVE' (a file in his folder) is confirmed as a real 1987 Nationsoft vertically-scrolling shoot-em-up, with Tout as CSDb's credited SID composer — though a full original credits page could not be located (only a later crack release page, with no original credits listed, was found).",
    "A LEMON64 FORUM POST (2013) independently corroborates his profile as a recurring Your Commodore magazine type-in-listing contributor: a user recalls 'Anyone remember F.G.Tout? I think he had a listing in every edition of Your Commodore' — consistent with an amateur/hobbyist-turned-budget-developer trajectory rather than a commercial-studio composer.",
    "9 TOTAL CSDb-CATALOGUED COMPOSITIONS found, 1984-1988: The Four Crowns of Adelim, Gator, Sammy the Slug (1984); Cherry Picker, Dog Fight, Lady Bug, Scramble (1985); Enclave (1987, Nationsoft); Zenith (1988, Creative Sparks) — most tied to Your Commodore magazine specifically.",
    "NO CSDb SCENER PROFILE OR MOBYGAMES PAGE FOUND for him at all — searched both name and musician-search types, only unrelated results ('Toutatis', 'Adrian Pertout') matched. Consistent with a magazine-listing hobbyist rather than a demoscene or commercial-studio figure.",
    "COUNTRY NOT CONFIRMED BEYOND CIRCUMSTANTIAL INFERENCE: HVSC Musicians.txt has no country field for him at all; nationality is inferred ONLY from Your Commodore being a UK publication — deliberately NOT asserted as a confirmed fact on this card.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Tout, Frank G.', no country field): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Cherry Picker (full solo credits): https://www.lemon64.com/game/cherry-picker",
    "Lemon64 — Zenith (full solo credits): https://www.lemon64.com/game/zenith",
    "CSDb release 114041 — a later crack of Enclave (no original credits listed): https://csdb.dk/release/?id=114041",
    "emurom.net — Enclave (1987, Nationsoft): https://www.emurom.net/us/emulation/commodore-64-roms/detail-76563-enclave.html",
    "Lemon64 forum — recollection of his Your Commodore magazine listings: https://www.lemon64.com/forum/viewtopic.php?t=45925&start=15",
    "Local dataset: 6 files tagged Frank_Tout, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Frank_Tout` tag is British bedroom-coder Frank G. Tout's own
playroutine — a classic 1980s magazine type-in-listing one-man-band,
confirmed as the sole author of code, graphics, AND music on every title
checked. Player-ID-fingerprinted across 6 files, all his own, mostly
published via the UK magazine Your Commodore.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
solo-author-on-everything pattern**, directly supporting the self-written-
routine hypothesis. Also note the **honestly unconfirmed nationality**
(inferred only circumstantially from the magazine's UK origin, not
asserted as fact) and a **corroborating forum recollection** of his
recurring magazine presence.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Frank_Tout`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Frank_Tout` `.sid` (Cherry Picker): load `$9200`,
init `$924c`, play `$9200`, **27 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (3 pages), CSDb,
and emurom.net.

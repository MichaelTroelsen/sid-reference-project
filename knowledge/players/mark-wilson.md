# Mark Wilson (player routine)

```json
{
  "id": "mark-wilson",
  "name": "Mark Wilson (player routine)",
  "aliases": ["Mark_Wilson"],
  "authors": ["Mark Wilson"],
  "released": "1987-1991",
  "status": "in-progress",
  "platform": "Scottish coder-musician Mark Wilson's own hand-coded playroutine — CSDb lists him as BOTH Coder and Musician, and he was an active Compunet user (ID 'MW20'), a UK dial-up scene channel. Has a minor cult reputation among collectors ('most overlooked C64 musician' per a Lemon64 forum thread). Player-ID-fingerprinted across 12 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Augie Doggie and Doggie Daddy, 1991, Hi-Tec Software): load $9866 (init $a296, play $a293).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $a296.", "play": "Sample trace: $a293 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 14 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED CODER AND MUSICIAN: CSDb scener id=5989 lists BOTH roles (not musician-only) — strong support for this being a genuinely self-written routine. Scotland (HVSC lists 'UNITED KINGDOM', consistent via this project's constituent-country alias handling). Compunet ID 'MW20' — Compunet was a UK dial-up online service heavily used by the 1980s C64 scene, worth noting as period context. Group: ex-member of 'Industrial Light & Magic' (a demoscene group of that name, unrelated to the film company). Active 1987-1990 per CSDb credits: 'A Walk in the Park' (1990), 'Obliterator Music' (1988), 'Outrun Dance Mix' (1988), 'Big Bat, Little Willy' (1989), 'Mark Wilson Collection #1' (1989), several one-file demos.",
    "AUGIE DOGGIE AND DOGGIE DADDY confirmed via Lemon64: Hi-Tec Software, 1991, a Hanna-Barbera cartoon tie-in platformer, Wilson credited as 'Musician' — this is the traced file.",
    "MINOR CULT REPUTATION: a Lemon64 forum thread ('Most overlooked C64 musician') names him as a pick, calling him 'truly overlooked' — a collector's-circle reputation, not mainstream recognition.",
    "TWO WEAK, EXPLICITLY-FLAGGED-AS-TENTATIVE LEADS (do not treat as confirmed links): (1) 'Obliterator Music' (1988) is very likely a SID cover/tribute of David Whittaker's Obliterator theme — that game itself had no C64 release (Amiga/ST/Spectrum only), so this reads as a scene remix, not an original game credit; David Whittaker is already carded in this KB as [[david-whittaker]]. (2) His group Industrial Light & Magic released an 'Ikari Warriors Music Hack' (1988) — the C64 Ikari Warriors (Elite, 1988) loader music was by Mark Cooksey (already carded as [[mark-cooksey]]), but this is a GROUP release, not confirmed to be specifically Wilson's own hack — a plausible cover/remix-culture connection, not a direct collaboration.",
    "CROSS-PLAYER HALLUCINATION RISK FLAGGED: a different 'Mark Wilson' who became lead composer at Austin, TX-based Human Code Inc. in the early 1990s is almost certainly a DIFFERENT, unrelated person (a US-based hobbyist who acquired a C64+MIDI home studio setup, not a UK demoscene coder). This card is exclusively about the CSDb/HVSC/Lemon64-sourced Scottish scener (id=5989) — do not conflate.",
    "Not confirmed in SIDId beyond the bare author field. No confirmed relationship to any other composer/tool already in this KB beyond the two tentative leads above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Stuart Taylor, Gavin Raeburn, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found beyond those two)."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Wilson, Mark - UNITED KINGDOM')",
    "CSDb scener — Mark Wilson (id=5989, Coder+Musician, Compunet ID MW20, Industrial Light & Magic): https://csdb.dk/scener/?id=5989",
    "Lemon64 — Augie Doggie and Doggie Daddy (1991, Hi-Tec Software, Musician credit): https://www.lemon64.com/game/augie-doggie-and-doggie-daddy",
    "Lemon64 forum — 'Most overlooked C64 musician' thread: https://www.lemon64.com/forum/viewtopic.php?p=1066025",
    "Lemon64 — Ikari Warriors (1988, Elite, Cooksey/Brooke credit — the tentative ILM hack lead): https://www.lemon64.com/game/ikari-warriors",
    "Local dataset: 12 files tagged Mark_Wilson, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Mark_Wilson` tag is Scottish coder-musician Mark Wilson's own
hand-coded playroutine — confirmed both coder and musician on CSDb, an
active Compunet-era scener with a minor cult reputation among collectors.
Player-ID-fingerprinted across 12 files, all his own, including a
confirmed 1991 Hi-Tec Software game credit.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **confirmed coder+musician**
status; the **Augie Doggie and Doggie Daddy** commercial credit; and two
explicitly-tentative leads (an Obliterator cover tune, an Ikari Warriors
group hack) connecting him circumstantially to two already-carded
composers, David Whittaker and Mark Cooksey, without asserting a direct
collaboration.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Mark_Wilson`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Mark_Wilson` `.sid` (Augie Doggie and Doggie Daddy):
load `$9866`, init `$a296`, play `$a293`, **287 register writes / 50
frames** (14 filter writes). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, and Lemon64 (3 pages).

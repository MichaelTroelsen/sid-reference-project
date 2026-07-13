# Roel Bosch (player routine)

```json
{
  "id": "roel-bosch",
  "name": "Roel Bosch (player routine)",
  "aliases": ["Roel_Bosch"],
  "authors": ["Roel Bosch"],
  "released": "~1989-1995 (Dutch demoscene/diskmag era)",
  "status": "in-progress",
  "platform": "A playroutine used exclusively by Dutch demoscene musician Roel Bosch (handles 'TSC'/'RB'), mostly for diskmag music across ~17 different Dutch groups. Player-ID-fingerprinted across 21 files, all his own. Whether Bosch himself wrote the driver code is UNCONFIRMED — the one release with explicit credits found (Music Mania, 1990) names a separate coder.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Blow it Down): load $4000 (init $4000, play $4003).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $4000.",
    "play": "Sample trace: $4003 (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (heavy filter modulation observed — 77 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Roel Bosch — Dutch C64 musician, handles 'TSC'/'RB', per HVSC Musicians.txt affiliated with 'The Satanic Angels' (Netherlands); CSDb additionally lists a formal group membership in Focus (Aug 1990-Jun 1991). Active 1989-1995 (~31 credited CSDb releases), almost entirely diskmag music/intros rather than standalone demos or commercial games — matches the local filenames (Blow_it_Down, Cowabunga_1_magazine, Head_and_Hat, Just_A_Demo, Look).",
    "UNUSUALLY WIDE GROUP SPREAD for a single-composer tag: credited across ~17 different Dutch groups over the period (Full Force, Browbeat, Manowar, Ruthless, Mega Industries, Focus, Gloom, Playboy, Mad Aussie Dealers, Hanz, Lore of Arts, Paradise, Proxyon, Elysium, Bad Karma, X-Vector, Merlin) — i.e. this looks like a routine tied to BOSCH PERSONALLY (he carried it with him across many one-off diskmag productions for different groups/coders), not to any single studio or fixed coder. This is circumstantial support for the personal-routine hypothesis, not a documented confirmation of authorship.",
    "ONE DATA POINT AGAINST SELF-CODING: the 'Music Mania' release (1990, The Satanic Angels; https://csdb.dk/release/?id=9238) explicitly credits code to 'HL' (of Focus/The Satanic Angels) and music to 'TSC' (Bosch) separately — so on at least that release, someone else wrote the code. Whether that coder also wrote the underlying sound driver, or Bosch supplied his own driver code into someone else's demo/diskmag binary, is unresolved either way.",
    "No overlap found with any other Dutch composer already in this KB (checked Jeroen Koops and Jeroen Kimmel specifically for group overlap via Focus/Mega Industries/Lore of Arts — none found); different scene entirely from this KB's mostly UK/US mid-1980s commercial-game composers.",
    "Not in SIDId (checked directly via deepsid_dl/sidid.nfo — no Roel_Bosch/Bosch entry). No public disassembly or source (not in the realdmx RE repo; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Bosch, Roel (TSC) / The Satanic Angels - NETHERLANDS')",
    "CSDb scener — Roel Bosch (id=6505, handles RB/TSC, Focus membership Aug 1990-Jun 1991): https://csdb.dk/scener/?id=6505",
    "Demozoo — Roel Bosch (TSC): https://demozoo.org/sceners/90210/",
    "CSDb release — Music Mania (1990, code by HL, music by TSC): https://csdb.dk/release/?id=9238",
    "Local dataset: 21 files tagged Roel_Bosch, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Roel_Bosch` tag is Dutch demoscene musician Roel Bosch's ('TSC')
playroutine, used across ~17 different Dutch groups for diskmag music
between 1989 and 1995. Player-ID-fingerprinted across 21 files, all his
own — the wide group spread suggests the routine travelled with Bosch
personally rather than belonging to any one studio.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **unusually wide spread
across ~17 groups** (circumstantial support for a personal routine); the
**Music Mania counter-evidence** (a separate coder, 'HL', credited on at
least one release); and the lack of any confirmed primary source stating
who actually wrote the driver code — left honestly unresolved rather than
asserted.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Roel_Bosch`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Roel_Bosch` `.sid` (Blow it Down): load `$4000`, init
`$4000`, play `$4003`, **258 register writes / 50 frames** (77 filter
writes — clearly filter-heavy). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Demozoo, and the Music
Mania release credits.

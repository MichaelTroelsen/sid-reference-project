# Nigel Grieve (player routine)

```json
{
  "id": "nigel-grieve",
  "name": "Nigel Grieve (player routine)",
  "aliases": ["Nigel_Grieve"],
  "authors": ["Nigel Grieve"],
  "released": "1987 (Rack-It/Hewson era)",
  "status": "in-progress",
  "platform": "English musician Nigel Grieve's playroutine, used on a confirmed run of Rack-It/Hewson budget game credits and demoscene work (Fairlight, Dexion, Megaforce). Player-ID-fingerprinted across 6 files: 5 by Grieve, 1 by 'Bizzmo' (Doug Roberts/Relax Designs, an unrelated group) reusing the routine for a single track. Also relevant to the still-open Zynaps composer question in [[steve-turner]]'s card — see quirks.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Anarchy, 1987, Rack-It/Hewson): load $1e00 (init $1e00, play $1e06).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1e00.", "play": "Sample trace: $1e06 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 1 filter write in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CSDb SCENER PROFILE CONFIRMS 'Musician' function (id=13662), NOT coder — a personal/hand-coded-by-Grieve-himself routine is therefore unlikely on current evidence; profile spans 1986-2021 (densest 1987-1991), Zynaps rips/Anarchy/Herobotix/Starglider/Super Cup Football/Sunburst plus compilation appearances. Demozoo (id=79546) additionally lists demoscene group memberships 1986-1987: Fairlight, Dexion, Megaforce, Reflex Cracking Squad, Cracking Team of Darkness, 69'ers — cracking-scene intro/demo tunes, separate from his commercial game credits.",
    "TWO CONFIRMED COMMERCIAL GAME CREDITS, both Rack-It (Hewson's budget label): Anarchy (the traced file — creator Michael Sentinella, musician Nigel Grieve, 1987 — NOT 1988/Martech as an initial research assumption guessed; the PSID metadata's 1988 date is likely just a compile/release-date mismatch against the actual 1987 game ship date, publisher corrected to Rack-It/Hewson) and Herobotix (1987, creator Steven Collins, musician Nigel Grieve — a commercial shoot-em-up, not a demo, confirming the same credited-musician pattern as Anarchy).",
    "THE ZYNAPS QUESTION (raised in [[steve-turner]]'s card as an unresolved open question) HAS NEW, MODERATE-CONFIDENCE EVIDENCE POINTING TO A PER-PLATFORM RESOLUTION, not a head-to-head conflict: two independent secondary sources (an FRGCB blog retrospective and C64-Wiki's own Zynaps game page, the latter citing the exact HVSC path MUSICIANS/G/Grieve_Nigel/Zynaps.sid) both credit the C64 version's music solely to Grieve, while the FRGCB source separately states Steve Turner composed the SPECTRUM version. Neither source mentions the other composer for the opposite platform. This suggests 'Zynaps_pre-release' (documented on Turner's own card) may be a genuine prototype/beta using Turner's driver before Grieve's tune shipped in the final C64 release, rather than the two composers competing for the same platform's soundtrack — plausible and consistent with both cards, but still only two secondary sources with no primary/interview confirmation, so this is reported as 'probable, not proven,' not as a settled fact.",
    "'BIZZMO' (the tag's sole non-Grieve composer, 1 file: 'Shield') is independently identified as Doug Roberts of Relax Designs, England (HVSC: 'Bizzmo (Roberts, Doug) / Relax Designs') — no group overlap found with Grieve's own circle (Fairlight/Dexion/Megaforce/Reflex/CTOD/69'ers), so this reads as an unrelated composer reusing Grieve's routine for a single track, the same one-off-reuse pattern already seen on other tags in this KB (e.g. Rob_Hubbard, Steve_Turner).",
    "A MobyGames person entry (id 151396) spells the surname 'Nigel GREAVE' rather than 'Grieve' — confirmed to be the SAME person via an identical Anarchy credit match, not a different-person risk; flagged as a spelling variant only.",
    "NO VGMPF PAGE EXISTS for Nigel Grieve — checked explicitly to rule out a common cross-contamination source used elsewhere in this KB. No real name field, birth year, or first-person interview was found anywhere.",
    "Relationship to [[steve-turner]] noted above (Zynaps platform-split hypothesis) but NOT encoded as a technical edge — it concerns which composer's tune shipped on which platform, not shared code between the two drivers. No other known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found; critical-review comparisons to Daglish/Galway in the FRGCB piece are praise, not a documented working relationship, and are not treated as one)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Grieve, Nigel - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Nigel Grieve (id=13662, function Musician, full credit list): https://csdb.dk/scener/?id=13662",
    "Demozoo — Nigel Grieve (id=79546, group memberships 1986-1987): https://demozoo.org/sceners/79546/",
    "Lemon64 — Anarchy (full credits, 1987 Rack-It/Hewson correction): https://www.lemon64.com/game/anarchy",
    "Lemon64 — Herobotix (full credits): https://www.lemon64.com/game/herobotix",
    "uvlist — Herobotix: https://www.uvlist.net/game-19876-Herobotix",
    "FRGCB blog — 'Zynaps (Hewson Consultants Ltd, 1987)' (C64 music credited to Grieve, Spectrum to Turner): http://frgcb.blogspot.com/2024/03/zynaps-hewson-consultants-ltd-1987.html",
    "C64-Wiki — Zynaps (credits Grieve, cites HVSC path MUSICIANS/G/Grieve_Nigel/Zynaps.sid): https://www.c64-wiki.com/wiki/Zynaps",
    "HVSC Musicians.txt — Bizzmo entry ('Bizzmo (Roberts, Doug) / Relax Designs - UNITED KINGDOM (ENGLAND)')",
    "Existing KB card: knowledge/players/steve-turner.md (the Zynaps open question this card provides new evidence toward)",
    "Local dataset: 6 files tagged Nigel_Grieve, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Nigel_Grieve` tag is English musician Nigel Grieve's playroutine,
used across confirmed Rack-It/Hewson game credits (Anarchy, Herobotix)
and mid-1980s demoscene work. Player-ID-fingerprinted across 6 files, 5
by Grieve and 1 by an unrelated one-off reuser ('Bizzmo'). New evidence
found here bears directly on [[steve-turner]]'s open Zynaps question.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **Zynaps
per-platform-split evidence**: two independent sources credit Grieve with
the C64 version and Turner with the Spectrum version, offering a
plausible (though not fully proven) resolution to a question this KB's
own `steve-turner.md` card had left open.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Nigel_Grieve`-tagged `.sid`
+ trace — which could also help settle the Zynaps platform-split question
by comparing routine structure against Turner's own driver.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Nigel_Grieve` `.sid` (Anarchy): load `$1e00`, init
`$1e00`, play `$1e06`, **189 register writes / 50 frames** (1 filter
write). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Demozoo, Lemon64 (2
pages), uvlist, FRGCB blog, C64-Wiki, and the related steve-turner card.

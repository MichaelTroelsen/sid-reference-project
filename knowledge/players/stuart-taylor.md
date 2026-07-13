# Stuart Taylor (player routine)

```json
{
  "id": "stuart-taylor",
  "name": "Stuart Taylor (player routine)",
  "aliases": ["Stuart_Taylor"],
  "authors": ["Stuart Taylor"],
  "released": "1985-1988 (Xei/Xess/The Wolverines era)",
  "status": "in-progress",
  "platform": "English composer Stuart Taylor's ('Xei') own playroutine — one of several tools in his output; his HVSC folder actually has MORE files tagged the third-party [[electrosound]] editor (15) than this personal routine (12), plus 2 Master_Composer and 1 DUSAT/RockMon2. Player-ID-fingerprinted across 12 files for this tag specifically, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Dal Segno): load $1000 (init $2024, play $1000 — play address == load address).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $2024.",
    "play": "Sample trace: $1000 (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (filter-heavy — 25 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "UNUSUALLY THIN DIGITAL FOOTPRINT — flagged explicitly rather than papered over: despite 6+ dated SID releases on CSDb (1985-1988), Stuart Taylor/'Xei' has NO CSDb scener profile page at all (confirmed via both an unrestricted and a scener-scoped CSDb search, zero results for both 'Stuart Taylor' and 'Xei'). His associated groups (Xei, Xess, The Wolverines — all appearing only as uncredited release-page text, not linked CSDb group entities) likewise have no CSDb group pages. This is a real documentation gap in the primary source this project otherwise relies on most, not a research shortfall.",
    "HVSC Musicians.txt confirms only the bare identity: 'Taylor, Stuart (Xei) - UNITED KINGDOM (ENGLAND)'. Dated CSDb SID releases (all pointing to the same HVSC folder) span 1985's 'Seasoned Sounds' (group Xei) through 1986's 'Fourth Rendezvous'/'Rendezvous 5' (Xess, Xess/The Wolverines) and 'Toyota Sony Chop V2' (The Wolverines) to a 1988 entry, 'September - The Computer Game', credited to 'Orpheus/Activision' — but THIS LAST CREDIT COULD NOT BE INDEPENDENTLY CORROBORATED on MobyGames or Lemon64 (no matching Activision 1988 C64 title found in either database) and is flagged as UNVERIFIED, possibly a mislabeled/obscure CSDb entry, not a confirmed commercial-game credit.",
    "NO EXPLANATION FOUND for the four-tool pattern in his output (Electrosound most-used, this personal routine second, Master_Composer, DUSAT/RockMon2 once) — no interview, bio, or forum post addresses it. Any story here would be speculative inference from filenames/dates alone; deliberately not asserted.",
    "NO CODER CREDIT FOUND anywhere for him — nothing external confirms he wrote code beyond (presumably) this personal music routine; cannot confirm 'coder as well as musician' the way several other cards in this batch could.",
    "Group affiliations (Xei/Xess/The Wolverines) are inferred only from his own release-credit text, not a verified CSDb membership roster — stated here as 'credited alongside', not 'confirmed member of'.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Stuart Taylor entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Electrosound, Master Composer — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Taylor, Stuart (Xei) - UNITED KINGDOM (ENGLAND)')",
    "CSDb SID — Seasoned Sounds (1985, group Xei): https://csdb.dk/sid/?id=61274",
    "CSDb SID — Fourth Rendezvous (1986, group Xess): https://csdb.dk/sid/?id=28026",
    "CSDb SID — Rendezvous 5 (1986, Xess/The Wolverines): https://csdb.dk/sid/?id=28030",
    "CSDb SID — Toyota Sony Chop V2 (1986, The Wolverines): https://csdb.dk/sid/?id=28024",
    "CSDb SID — Original Stuff (1986): https://csdb.dk/sid/?id=40590",
    "CSDb SID — September - The Computer Game (1988, credited Orpheus/Activision, UNVERIFIED elsewhere): https://csdb.dk/sid/?id=1846",
    "Existing KB card: knowledge/players/electrosound.md (his most-used tool, a separate tag)",
    "Local dataset: 12 files tagged Stuart_Taylor, 1 composer for this tag (see knowledge/COVERAGE.md; his folder also has 15 Electrosound, 2 Master_Composer, 1 DUSAT/RockMon2)"
  ]
}
```

## Overview

The `Stuart_Taylor` tag is English composer Stuart Taylor's ('Xei') own
playroutine — one of several tools he used, actually outnumbered in his own
output by the third-party [[electrosound]] editor. Player-ID-fingerprinted
across 12 files for this specific tag, all his own. One of the more
thinly-documented composers carded so far: no CSDb scener profile exists
for him at all.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: an **unusually thin CSDb
footprint** (no scener page despite 6+ dated releases); a **1988 game
credit flagged as unverified** rather than asserted as fact; and the
**unexplained four-tool pattern** in his output, left honestly unresolved
rather than speculated about.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Stuart_Taylor`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Stuart_Taylor` `.sid` (Dal Segno): load `$1000`, init
`$2024`, play `$1000`, **219 register writes / 50 frames** (25 filter
writes — filter-heavy). Internals undocumented; memory map/format/effects
are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt and 6 CSDb SID release pages.

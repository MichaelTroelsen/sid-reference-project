# Companion/Jay Derrett

```json
{
  "id": "companion-jay-derrett",
  "name": "Companion/Jay Derrett",
  "aliases": ["Companion/Jay_Derrett"],
  "authors": ["Jay Derrett"],
  "released": "c. 1985 (earliest confirmed driver use: CRL's 'The Rocky Horror Show', 'Space Doubt', and 'Blade Runner', all 1985; 'Shao-Lin's Road' 1986; Derrett employed at CRL July 1984 - 'a bit over 4 years' per VGMPF, i.e. c. 1988). No CSDb release id found for the driver itself.",
  "status": "stub",
  "platform": "TODO: native C64 driver, presumed hand-coded (no editor known; see quirks)",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: $xxxx (no disassembly)",
    "zero_page": "TODO: no disassembly",
    "layout": "TODO: no disassembly"
  },
  "entry": {
    "init": "TODO: $xxxx",
    "play": "TODO: $xxxx"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": ["companion"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "LINEAGE CLAIM (from SIDId, `sidid.nfo`): 'Rewrite of Clever Music's extension of Companion. Player is used in CRL (Computer Rentals Limited) releases.' This is a three-generation chain — Keith Bowden's 1984 'The Companion to the Commodore 64' (a Pan Books type-in driver, bare tag `Companion`, now carded separately at knowledge/players/companion.md) -> Clever Music (Graham Jarvis/Rob Hartshorne) extended it -> Jay Derrett rewrote that extension for CRL. Asserted as `edges.derives_from: [\"companion\"]` now that the `Companion` tag has its own card (added in the same research pass that created that card); the intermediate Clever Music extension has no separate SIDId signature/card of its own, so the edge points directly at the root rather than at a non-existent middle node.",
    "INDEPENDENT CORROBORATION of the same chain from VGMPF's Clever Music page (not just the SIDId comment): 'Jarvis expanded [The Companion to the Commodore 64] ... For unconfirmed reasons, Steven Chapman, [Jay Derrett] and probably John McPhee reprogrammed it their own way.' VGMPF's Jay Derrett page separately confirms he wrote 'technical interfaces and SID drivers' for CRL after Clem Chambers (CRL) asked him to, turning Clever Music's scores into game-usable code — consistent with, but not identical wording to, the SIDId comment.",
    "COMPOSER CONCENTRATION IS HIGH: only 25 files in the local dataset use this tag, across 3 composers, and Jay Derrett himself accounts for 20/25 (80%) — Music Clever (4) and Gavin Raeburn (1) the rest. This reads as a small in-house CRL driver reused by very few people, not a widely published tool (cf. the project convention: concentrated use = personal/small-scene routine).",
    "CSDb lists Jay Derrett (scener id 9490) only under the function 'Musician', with no coder/driver-author credit visible on his scener page — the coding claim comes from VGMPF and SIDId, not from CSDb's own function tagging. Worth noting as a minor source disagreement, not a contradiction (CSDb's function tags track scene-release credits, not in-house/commercial CRL work).",
    "No CSDb release id found for the driver itself (unlike its cousins SID Sequencer and Aleatory Composer, which each have a CSDb release page) — `csdb_release` is null, not a placeholder for an unfound number.",
    "'CRL' in the SIDId comment expands to 'Computer Rentals Limited' (CRL Group), the games publisher Jay Derrett worked for full-time from 1984.",
    "RELEASE-WINDOW CORROBORATION (added this pass): VGMPF's Jay Derrett gameography marks 'Sound Driver?' credits on 'The Rocky Horror Show', 'Blade Runner', 'Space Doubt' (all CRL C64, 1985 per Lemon64/Wikipedia) and 'Shao-Lin's Road' (The Edge, C64, 1986) -- consistent with, and narrowing, the driver's active window to c.1985 within Derrett's July 1984-c.1988 CRL employment (VGMPF).",
    "CROSS-PLATFORM NOTE (VGMPF, not yet reflected in `platform` since it is TODO pending real evidence of the C64 driver's own binary specifics): 'the same driver format used on Commodore 64 was subsequently applied to Amstrad CPC and Spectrum 128' -- i.e. this was a cross-platform CRL house format, not C64-exclusive, though this card only covers the C64 SID replay routine.",
    "TECHNICAL EVOLUTION (VGMPF): Derrett is credited with later reimplementing effects 'from composers Rob Hubbard and Martin Galway' into the driver, and integrating drum samples from 'Dulcedo Cogitationis (C64)' plus unattributed 'brush slap' samples -- suggests the driver was revised/extended over its lifetime rather than a single static rewrite, though no version numbers or dates are given for these changes."
  ],
  "sources": [
    "sidid.nfo (SIDId project, via DeepSID offline bundle; local copy data/sidid.json byTag['Companion/Jay_Derrett'] and ['Companion']) — https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "VGMPF — Jay Derrett biography (CRL role, 'technical interfaces and SID drivers', became CRL's 'main tune writer'): https://www.vgmpf.com/Wiki/index.php?title=Jay_Derrett",
    "VGMPF — Clever Music (the Companion-extension/rewrite chain quote, CRL connection, Rob Hartshorne/Graham Jarvis identity): https://www.vgmpf.com/Wiki/index.php?title=Clever_Music",
    "CSDb — Jay Derrett scener profile (id 9490, function: Musician): https://csdb.dk/scener/?id=9490",
    "CSDb release id=122331, claimed by SIDId/companion.md to be 'Aleatory Composer' by V.H. Berry (1989) — checked directly during this card's falsify audit and does NOT resolve (returns the generic CSDb homepage, not a release page); companion.md's own quirks already flag this same id as unconfirmed. Cited here only as an unresolved lead, not as a working confirmation.",
    "Local dataset: 25 files tagged Companion/Jay_Derrett, 3 composers (Jay Derrett 20, Music Clever 4, Gavin Raeburn 1) — re-verified this pass directly against data/composers/*.json (counts unchanged; the family has aged out of knowledge/COVERAGE.md's 'without a card' list since it already has a card)",
    "VGMPF — Jay Derrett gameography, 'Sound Driver?' credits on The Rocky Horror Show, Blade Runner, Space Doubt, Shao-Lin's Road: https://www.vgmpf.com/Wiki/index.php?title=Jay_Derrett",
    "Lemon64/Wikipedia — CRL C64 release years for The Rocky Horror Show, Space Doubt, Blade Runner (1985): https://www.lemon64.com/game/rocky-horror-show , https://www.lemon64.com/game/space-doubt , https://en.wikipedia.org/wiki/Blade_Runner_(1985_video_game)",
    "Wikipedia — Shao-Lin's Road C64 port (The Edge, 1986): https://en.wikipedia.org/wiki/Shao-lin's_Road"
  ]
}
```

## Overview

`Companion/Jay_Derrett` is a small in-house C64 music driver credited to Jay
Derrett, used in CRL (Computer Rentals Limited) game releases. SIDId's own
comment places it as a rewrite of Clever Music's extension of an earlier
driver — Keith Bowden's 1984 "The Companion to the Commodore 64" (published
as a Pan Books type-in listing, tagged separately as the bare `Companion` in
this dataset and out of scope here). VGMPF's independent Clever Music/Jay
Derrett biography pages corroborate the same rewrite chain and add that CRL's
Clem Chambers specifically asked Derrett to turn Clever Music's musical
scores into "technical interfaces and SID drivers." Only 25 files in the
local dataset carry this tag, 80% of them by Derrett himself, consistent
with a small in-house driver rather than a widely distributed tool. VGMPF's
gameography dates the driver's active use to c. 1985 (CRL's The Rocky Horror
Show, Space Doubt, and Blade Runner) through at least 1986 (The Edge's
Shao-Lin's Road), inside Derrett's July 1984-c.1988 CRL employment window,
and notes the same driver format was reused on Amstrad CPC and Spectrum 128
— this card covers only the C64 SID replay routine.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **three-generation
lineage claim** (Companion -> Clever Music extension -> Derrett rewrite),
corroborated by two independent sources (SIDId's comment and VGMPF's prose)
and encoded as `edges.derives_from: ["companion"]` now that the `Companion`
tag has its own card (knowledge/players/companion.md) — the intermediate
Clever Music extension has no separate SIDId signature/card of its own, so
the edge points directly at the root. Also the **high composer concentration**
(80% Jay Derrett himself) and the **absence of any CSDb release id** for the
driver itself.

## Disassembly notes

None. No public source or disassembly was found for this driver; every
memory/entry/format field is `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/lineage facts are recorded,
sourced from SIDId's cached comment and corroborating VGMPF pages. No file
tagged with this player has been traced or disassembled.

## Sources

See the `sources` array — SIDId (`sidid.nfo`), VGMPF (Jay Derrett and
Clever Music pages), CSDb (Jay Derrett scener profile, Aleatory Composer
release), and the local dataset's composer aggregation.

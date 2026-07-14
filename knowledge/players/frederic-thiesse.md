# Frederic Thiesse (player routine)

```json
{
  "id": "frederic-thiesse",
  "name": "Frederic Thiesse (player routine)",
  "aliases": ["Frederic_Thiesse"],
  "authors": ["Frederic Thiesse"],
  "released": "1989-1990 (64'er / Game On / CP Verlag era)",
  "status": "in-progress",
  "platform": "A composer-coder credited only for music — CSDb's own scener profile carries an explicit trivia note: 'This guy is added just for music credits. Do not add his games to CSDb, as they are not scene releases.' Confirmed both coder and musician via that same profile's own function tags, working entirely in German magazine type-in territory (64'er, Game On/CP Verlag). Player-ID-fingerprinted across 3 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Dingdong): load $9712 (init $9712, play $990c).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $9712.", "play": "Sample trace: $990c (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 41 filter writes in a dense 229-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO METADATA AT ALL — a bare 'Thiesse, Frederic' entry: no real name suffix, no group, no country code. One of HVSC's sparsest legacy entries.",
    "CSDb'S OWN SCENER PROFILE (id=24175) EXPLICITLY FLAGS HIM AS A NON-SCENER, VERBATIM: 'This guy is added just for music credits. Do not add his games to CSDb, as they are not scene releases.' — the same kind of direct curatorial statement already found on [[andrew-colin]]'s and [[the-music-system]]'s CSDb profiles in this same batch, strongly confirming his games are commercial/magazine type-ins, not demoscene productions. No country or realname field is populated there either.",
    "CONFIRMED BOTH CODER AND MUSICIAN, directly per CSDb's own function tags: 'Freelance functions: Coder, Musician' — he wrote his own games (Ding-Dong etc.) rather than only supplying music, consistent with the trace showing a dense, idiosyncratic, filter-heavy hand-written routine rather than a known third-party driver.",
    "GAME CREDITS ARE MAGAZINE TYPE-INS, NOT COMMERCIAL RELEASES: 'Ding-Dong' (an Arcade Reversi clone) is credited to him in the German magazine compilation '64'er Spiele total, Band 4.' 'Megamax' carries a SID-header copyright string of '1990 Game On/CP Verlag' (verified directly from the HVSC-mirrored file), consistent with the same German-magazine ecosystem already appearing on several other cards in this KB. 'Maze-Man'/'Push'em' have no independent game-credit sources beyond CSDb's own SID-track index. An unrelated 'TSI Maze Man' (1983, Creative Equipment) surfaced in search but does NOT match — different title/publisher, EXPLICITLY not the same game.",
    "AN UNVERIFIABLE 'EXOR' (1989) RELEASE CLAIM WAS EXPLICITLY DEBUNKED: a search-engine result repeatedly attributed an 'Exor' release to Thiesse (CSDb id=112927), but that CSDb ID resolves to nothing (the webservice returns a generic error, the HTML page just shows the homepage), and CSDb's own site search for 'Exor Thiesse' returns zero hits — FLAGGED explicitly as a likely search-engine hallucination, NOT relied upon.",
    "NO SCENE-GROUP MEMBERSHIP AT ALL — CSDb lists zero group affiliations; his only scene-adjacent appearances are as a GUEST music credit (not membership) on a one-file demo ('Nolorian'), a ripped-disk compilation ('ATG Ripp Disk 03,' 1990), and 'The Musix from Colora' (December 1989). A possible additional/fifth SID track, 'Colora' (CSDb id=28507, 1989), was found NOT present in this project's own 3-file local folder — UNCONFIRMED whether it's absent from HVSC entirely or simply filed elsewhere.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — checked against this project's own `knowledge/COVERAGE.md`, which lists him only as a previously-unclaimed roster entry with no player match (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Thiesse, Frederic', bare entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener id=24175 (Frederic Thiesse, 'not a scener' trivia note, function tags): https://csdb.dk/scener/?id=24175",
    "C64-Wiki — 64'er Spiele total: https://www.c64-wiki.com/wiki/64%27er_Spiele_total",
    "C64-Wiki (DE) — 64'er Spielesammlung - Band 4: https://www.c64-wiki.de/wiki/64'er_Spielesammlung_-_Band_4",
    "HVSC-mirrored SID file — Megamax.sid (copyright string '1990 Game On/CP Verlag'): https://hvsc.etv.cx/?info=please&path=C64Music%2FMUSICIANS%2FT%2FThiesse_Frederic%2FMegamax.sid",
    "Local dataset: knowledge/COVERAGE.md (prior unclaimed-roster listing)",
    "Local dataset: 3 files tagged Frederic_Thiesse, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Frederic_Thiesse` tag is a composer-coder credited only for magazine
type-in music — CSDb's own profile carries an explicit trivia note
confirming he's not a demoscene participant. Confirmed both coder and
musician via that same profile's own function tags. Player-ID-
fingerprinted across 3 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is CSDb's own **explicit
'not a scener' curatorial note**, directly corroborating this composer's
purely magazine-type-in profile. Also notable: a **debunked search-
engine hallucination** (an unverifiable 'Exor' release claim) explicitly
caught and excluded rather than repeated.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Frederic_Thiesse`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Frederic_Thiesse` `.sid` (Dingdong): load `$9712`,
init `$9712`, play `$990c`, **229 register writes / 50 frames** (41
filter writes — dense, filter-heavy). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, C64-Wiki (2 pages),
and an HVSC-mirrored SID file.

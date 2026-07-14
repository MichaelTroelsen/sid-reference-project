# Kenneth Arnold (Origin Systems driver)

```json
{
  "id": "kenneth-arnold",
  "name": "Kenneth Arnold (Origin Systems driver)",
  "aliases": ["Kenneth_Arnold"],
  "authors": ["Kenneth W. Arnold"],
  "released": "1983-1988 (Origin Systems)",
  "status": "in-progress",
  "platform": "American composer-programmer Kenneth W. 'Ken' Arnold's own C64 driver, used across the Ultima series — a founding-era Origin Systems figure, not a late hire brought in just for audio: he worked alongside Richard Garriott at the same ComputerLand store in 1979 and co-drew/co-coded the original Ultima's graphics, with the in-game town 'Arnold' named after him and his character fictionalized as 'Lord Kenneth,' Lord British's Court Composer. Player-ID-fingerprinted across 3 files, all his own — Ultima III: Exodus, Ultima IV: Quest of the Avatar, Ultima V: Warriors of Destiny.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Ultima III: Exodus): load $99e8 (init $99e8, play $99f4).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $99e8.", "play": "Sample trace: $99f4 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in a very sparse 7-write/50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "A GENUINELY FOUNDING-ERA ORIGIN SYSTEMS FIGURE, not a late audio specialist: VGMPF states he 'worked for Origin Systems from the company's inception in 1983, although he was officially an employee only from March 1987 until December 1988' — matching this project's own DeepSID dump employment field exactly ('[ds-W]Origin Systems|1987-1988, [ds-X]|1988-'). He and Richard Garriott worked at the same ComputerLand store in summer 1979, hand-drawing/hand-coding the graphics for the original Ultima (Akalabeth-era) together — Garriott named the game's in-game town 'Arnold' after him, and within the Ultima fiction he's portrayed as 'Sir Kenneth'/'Lord Kenneth,' Lord British's Court Composer.",
    "COMPOSED NEARLY ALL THE MUSIC FOR ULTIMA III, IV, AND V — this project's 3 traced files exactly match this scope — with a couple of tracks reused in Ultima VI (arranged there by Herman Miller for the DOS version, not Arnold himself).",
    "CONFIRMED ORIGINALLY A PROGRAMMER, THEN COMPOSER — VGMPF explicitly frames him as programmer-turned-composer, not an outside audio specialist brought in later: he contributed code to the earliest Ultima titles pre-dating any dedicated audio role. No source found crediting him as coder specifically on the C64 PORTS of III/IV/V (as opposed to the original Apple II versions) — that attribution is left UNCONFIRMED at the port level, not asserted as fact.",
    "A NOTABLE TECHNICAL DETAIL FOR THE TRACE: Ultima V's C64 release reportedly only played SOUND EFFECTS — full music was C128-exclusive due to memory constraints (per a Lemon64 forum discussion) — which may explain why this card's genre-mate traces are so sparse if a similar constraint applied to Ultima III's C64 version too; the traced file's own very sparse 7-write/50-frame profile is consistent with an SFX-only branch rather than a full score, though which specific subtune was traced was not independently verified.",
    "POST-ORIGIN CAREER (post-1988) MOVED ENTIRELY AWAY FROM GAMES: Dell, Hewlett-Packard, nVidia, and Leggett & Platt (Missouri) — per VGMPF, single-sourced for this later-career detail.",
    "NO CSDb SCENER PROFILE EXISTS — expected and unremarkable, matching every other purely-commercial US studio composer already carded in this KB: `csdb_id: 0` in this project's own cached DeepSID profile confirms DeepSID never matched him to a scener page. CSDb does have separate RELEASE (not scener) pages for the three SIDs, showing only bare composer/year/publisher/technical-data fields.",
    "Not confirmed in SIDId (no entry for this tag). No documented working relationship found to any other US commercial-studio composer already in this KB despite the adjacent era/genre — [[ed-bogas-accolade]], [[ed-bogas-hakansson]], [[david-thiel]], [[kyle-johnson]], [[al-lowe]], [[paul-mudra]], [[rick-cardinali]] — all checked directly, different studios entirely (Origin Systems, Texas, vs. Gottlieb/Action Graphics/Incredible Technologies/Westwood/Sierra/Music Sales Ltd elsewhere in this KB). No other known relationship found (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Twice Effect Editor)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Arnold, Kenneth W. - USA'): local cache data/hvsc/Musicians.txt line 137",
    "Local dataset: data/composers/kenneth-arnold.json (DeepSID dump snapshot — employment field, active year)",
    "VGMPF — Ken Arnold (biography, Origin Systems founding-era role, Ultima gameography): https://www.vgmpf.com/Wiki/index.php/Ken_Arnold",
    "MobyGames — Kenneth W. Arnold (fetch blocked, used search snippet only): https://www.mobygames.com/person/83830/kenneth-w-arnold/",
    "CSDb sid id=7190 (Ultima III - Exodus, traced file's own release page): https://csdb.dk/sid/?id=7190",
    "Lemon64 forum — Ultima V C64 music/SFX constraint discussion: https://www.lemon64.com/forum/viewtopic.php?t=47280",
    "Local dataset: 3 files tagged Kenneth_Arnold, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Kenneth_Arnold` tag is Ken Arnold's own C64 driver, used across the
Ultima series at Origin Systems — a founding-era figure who worked with
Richard Garriott from 1979, had a game town named after him, and is
fictionalized in-game as 'Lord Kenneth.' Player-ID-fingerprinted across 3
files: Ultima III, IV, and V.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **founding-era
Origin Systems identity**, a rare case in this KB of a composer whose own
name is literally woven into the fiction of the games he scored. Also
notable: a plausible technical explanation for the trace's sparseness,
tied to a documented C64/C128 memory constraint on the series.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Kenneth_Arnold`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Kenneth_Arnold` `.sid` (Ultima III: Exodus): load
`$99e8`, init `$99e8`, play `$99f4`, **7 register writes / 50 frames**
(0 filter writes — very sparse). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, local dataset cache, VGMPF,
MobyGames, CSDb, and a Lemon64 forum thread.

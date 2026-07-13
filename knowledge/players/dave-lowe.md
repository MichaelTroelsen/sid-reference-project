# Dave Lowe (player routine)

```json
{
  "id": "dave-lowe",
  "name": "Dave Lowe (player routine)",
  "aliases": ["Dave_Lowe"],
  "authors": ["Dave Lowe"],
  "released": "~1988-1992 (US Gold / Virgin Mastertronic conversion era)",
  "status": "in-progress",
  "platform": "British composer Dave Lowe's ('Uncle Art') own playroutine, used for his C64 conversion soundtracks. Sources conflict on whether he personally coded it (see quirks — his own documented programming credits are Z80/Spectrum, not confirmed 6502). Player-ID-fingerprinted across 13 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Betrayal): load $ed13 (init $ed2b, play $ed13 — play address == load address).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $ed2b.",
    "play": "Sample trace: $ed13 (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (no filter writes observed in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Dave Lowe (alias 'Uncle Art') — British composer/sound engineer, active 1985-1998 (gameography per VGMPF extends to 2003). 14 C64 titles credited on Lemon64: Betrayal, Count Duckula II, Double Dragon II, ESWAT, Exceleron, Final Fight, Garfield: Winter's Tail, Hard Drivin', Line of Fire, Night Shift, P47 Thunderbolt, Postman Pat III, Power Drift, Street Fighter II — mostly US Gold arcade-conversion licenses, late 1980s-early 1990s.",
    "CODER-OR-NOT SOURCE CONFLICT — deliberately left unresolved rather than picking a side: VGMPF explicitly states he was 'not a coder', while Wikipedia/a VGMO interview document real assembler-programming credits ('co-author and assembler programmer for Buggy Blast', 'programmer for the Spectrum Z80 version of Thrust', both Rainbird 1985-86). Those credits are Z80 (Spectrum), not demonstrated on 6502/C64 specifically — so the single-composer 13-file tag signal is a STRONGER indicator of 'this routine was hand-coded FOR him' than 'coded BY him', absent further evidence.",
    "USED A THIRD-PARTY DRIVER ON OTHER PLATFORMS: for Game Boy/Mega Drive work he used sound drivers by Martin Walker (also carded in this KB as [[martin-walker]]) — confirming Lowe did not always write his own platform driver, which weakens (without ruling out) the self-coded-on-C64 hypothesis. No source directly confirms whether this Walker-driver relationship extended back to his C64-era work.",
    "No CSDb scener page found — he's a commercial games-industry composer, not a demoscene participant (HVSC lists no scene-group affiliation), same pattern as [[dave-warhol]] and [[paul-norman]] among the American/commercial-industry composers in this KB.",
    "STILL ACTIVE: runs 'Uncle Art Music' with his daughter Holly; subject of a 2019 documentary ('Uncle Art'); released a 2016/2017 orchestral remaster album ('A Temporal Shift', recorded at Abbey Road) of his game-music work.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Dave Lowe entry). No known relationship found to any other composer/tool already in this KB besides the Martin Walker driver-sharing note above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Lowe, Dave (Uncle Art) - UNITED KINGDOM (ENGLAND)')",
    "Wikipedia — David Lowe (video game composer): https://en.wikipedia.org/wiki/David_Lowe_(video_game_composer)",
    "VGMPF (gameography, 'not a coder' claim): https://www.vgmpf.com/Wiki/index.php/David_Lowe",
    "Lemon64 — 14 C64 titles credited to Dave Lowe: https://www.lemon64.com/games/list.php?list_individual=dave-lowe",
    "VGMOnline interview (Z80/assembler programming credits, Yamaha CX5M/DX7/RX11 use, Martin Walker driver on other platforms): http://www.vgmonline.net/davidloweinterview/",
    "TimeExtension (career retrospective, Abbey Road remaster, documentary): https://www.timeextension.com/news/2024/12/a-disc-collection-belonging-to-the-prolific-video-game-musician-dave-lowe-is-being-preserved",
    "Local dataset: 13 files tagged Dave_Lowe, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Dave_Lowe` tag is British composer Dave Lowe's ('Uncle Art') own
playroutine, used across his US Gold arcade-conversion soundtracks
(Betrayal, ESWAT, Final Fight, Street Fighter II, and others). Player-ID-
fingerprinted across 13 files, all his own — but unlike some other cards in
this batch, whether Lowe personally coded the C64 driver is genuinely
disputed between sources, not confirmed.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: a **direct source conflict**
over whether he coded at all (VGMPF says no, Wikipedia/VGMO cite Z80
programming credits — but not confirmed 6502); and that on **other
platforms he used a third-party driver by Martin Walker** (also carded in
this KB), which is evidence against, not for, a fully self-coded C64
routine.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Dave_Lowe`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Dave_Lowe` `.sid` (Betrayal): load `$ed13`, init
`$ed2b`, play `$ed13`, **76 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Wikipedia, VGMPF, Lemon64,
VGMOnline, and TimeExtension.

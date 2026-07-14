# Shaun Southern (Mr Chip driver)

```json
{
  "id": "shaun-southern",
  "name": "Shaun Southern (Mr Chip driver)",
  "aliases": ["Shaun_Southern"],
  "authors": ["Shaun Richard Southern"],
  "released": "1984-1987 (Mr Chip Software era)",
  "status": "in-progress",
  "platform": "CONFIRMED to be the SAME Shaun Southern who later became famous for Lotus Esprit Turbo Challenge, Trailblazer, and Super Cars at Magnetic Fields (formerly Mr Chip Software) on Amiga/ST — this tag documents his EARLIER, C64-era work (1984-87), where he was a true one-man band: coder, graphic artist, AND musician on nearly all his own titles. Player-ID-fingerprinted across 5 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Dizasterblaster, 1984, Americana/Mastertronic): load $2b20 (init $2db2, play $2d00).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $2db2.", "play": "Sample trace: $2d00 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IDENTITY CONFIRMED WITH HIGH CONFIDENCE, a genuinely notable find: this is the SAME Shaun Southern (full name Shaun Richard Southern, b. 1967/68, England) who co-founded Mr Chip Software (Llandudno, Wales, with Andrew Morris, ~1983), which was renamed Magnetic Fields (Software Design) Ltd. in 1988 and went on to build Lotus Esprit Turbo Challenge (1990), Super Cars, Kikstart, and Trailblazer on Amiga/ST/C64. The C64-era material this tag documents clearly PREDATES and is DISTINCT from that later racing-game fame.",
    "CONFIRMED SOLO ONE-MAN-BAND, and notably NOT primarily a dedicated musician like most composers in this KB: on 'Dizasterblaster' (Americana/Mastertronic 1984, originally released as 'Ad Infinitum' by Mr Chip Software), Lemon64's credits list Southern for ALL THREE roles — Coder, Graphics, AND Musician. C64-Wiki (German) confirms the same solo pattern held across Pacmania, Trailblazer, and Lotus Esprit Turbo Challenge — his SID work is a side-effect of solo/small-team game development, not a dedicated composing career, which may plausibly explain unusual/idiosyncratic driver code compared to specialist-composer tags in this KB.",
    "A LARGE, WELL-DOCUMENTED CATALOG under his own credited name (23 SID-music matches on CSDb spanning 1983-2012, though most files fall outside this project's own 5-file local dataset): Kikstart: Off-Road Simulator, Trailblazer, Cosmic Causeway: Trailblazer II, Super Scramble Simulator, P.O.D.: Proof of Destruction, Speed King, F1 Simulator, Operation Fireball, Pacmania, Kwazy Kwaks, Hero of the Golden Talisman, Kikstart II, Laserwheel (1987, MAD/Mastertronic).",
    "A CSDb SCENER-PROFILE SEARCH RETURNED NOTHING, but a Demozoo profile (id=59614, 'Shaun Southern / Magnetic Fields') DOES exist, crediting him with the C64 demo 'Musicblast 1.0' (Mad Cracking Agency, Jan 1987) plus later, non-C64 productions (a Super Cars 2 playable demo, a 2002 GBA intro, Lotus Esprit Turbo Challenge Amiga tracks) — a thin but real demoscene footprint alongside his commercial career.",
    "LATER CAREER: after Magnetic Fields, worked at Playdemic Ltd; per VGMPF, no longer composes.",
    "Not confirmed in SIDId (no entry for this tag). Documented professional collaborators are Andrew Morris (Mr Chip/Magnetic Fields co-founder, coder) and, later, Barry Leitch (Lotus Turbo Challenge 2, Top Gear arrangement) — neither is currently in this KB. No known relationship found to any composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Southern, Shaun - UNITED KINGDOM (ENGLAND)'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Dizasterblaster (full credits, traced file): https://www.lemon64.com/games/details.php?ID=3039",
    "Mastertronic Collectors Archive — Dizasterblaster review: https://mastertronic.co.uk/game-review-dizasterblaster-commodore-64-americana/",
    "Lemon64 — Shaun Southern game list: https://www.lemon64.com/games/list.php?list_individual=shaun-southern",
    "CSDb — Laserwheel (1987, MAD/Mastertronic): https://csdb.dk/sid/?id=26313",
    "VGMPF — Shaun Southern (full career table, birth details): https://www.vgmpf.com/Wiki/index.php/Shaun%20Southern",
    "C64-Wiki (DE) — Shaun Southern (Mr Chip/Magnetic Fields history): https://www.c64-wiki.de/wiki/Shaun_Southern",
    "MobyGames — Shaun Southern: https://www.mobygames.com/person/2641/shaun-southern/",
    "Demozoo — Shaun Southern / Magnetic Fields (id=59614): https://demozoo.org/sceners/59614/",
    "Local dataset: 5 files tagged Shaun_Southern, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Shaun_Southern` tag documents the EARLY, C64-era work (1984-87) of
Shaun Southern — CONFIRMED to be the same person who later became famous
for Lotus Esprit Turbo Challenge and Trailblazer at Magnetic Fields
(formerly Mr Chip Software) on Amiga/ST. On the C64 he was a genuine
one-man band: coder, graphic artist, and musician all at once. Player-
ID-fingerprinted across 5 files, all his own.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed
cross-era identity**: this is a rare case in this KB where a composer's
C64-era work turns out to predate a much more widely-recognized later
career (Lotus Esprit Turbo Challenge, Trailblazer), and where he was
notably NOT a dedicated musician but a solo developer whose music was
one of three roles he filled himself.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Shaun_Southern`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Shaun_Southern` `.sid` (Dizasterblaster): load
`$2b20`, init `$2db2`, play `$2d00`, **40 register writes / 50 frames**
(0 filter writes). Internals undocumented; memory map/format/effects are
`TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (2 pages),
Mastertronic Collectors Archive, CSDb, VGMPF, C64-Wiki (DE), MobyGames,
and Demozoo.

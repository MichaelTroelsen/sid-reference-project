# Martin Walker (player routine)

```json
{
  "id": "martin-walker",
  "name": "Martin Walker (player routine)",
  "aliases": ["Martin_Walker"],
  "authors": ["Martin Walker"],
  "released": "1988-onward (developed for Thalamus's Armalyte)",
  "status": "in-progress",
  "platform": "Martin Walker's own hand-coded 6502 music player/editor, developed specifically while composing the Armalyte (1988, Thalamus) soundtrack, replacing his earlier use of Electrosound. Player-ID-fingerprinted across 17 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Armalyte): load $c000 (init $c000, play $c059).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $c000.",
    "play": "Sample trace: $c059 (called in IRQ)."
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
    "Martin Walker was a GAME CODER FIRST, musician second — CONFIRMED via a Commodore Format interview: he coded six published games 1985-1989 (Rupert and the Toymaker's Party, Back to the Future, Chameleon, Hunter's Moon, Citadel) before deliberately switching career to freelance music/SFX composition in 1989. This background directly explains the confirmed self-authored player.",
    "OWN PLAYER, CONFIRMED ORIGIN: per the same interview, Thalamus commissioned him to write Armalyte's (1988) soundtrack, 'which afforded him the luxury of developing his own music player and editor' — i.e. this tag is a documented, first-party-sourced self-written routine, not inferred circumstantially.",
    "PRIOR TOOL, CORROBORATED BY LOCAL DATA: VGMPF states he 'developed his own driver after initially using Electrosound 64' — matching this composer's own HVSC folder exactly (1 file still tagged Electrosound alongside the 17 tagged Martin_Walker), independently confirming the timeline from two unrelated sources (VGMPF text vs. this project's own tag data).",
    "Games scored: Armalyte, Citadel, Hunter's Moon (which he also coded; music there by Matt Gray, a separate composer already carded in this KB as [[matt-gray]] — no further connection found beyond both working on the same title), Speedball 2, SWIV, Snare, Dragon Breed, Altered Beast, Atomic Robo-Kid.",
    "POST-C64 CAREER (well-corroborated by two independent secondary sources — CDM and a Lemon64 forum thread — though neither is a first-party statement from Walker himself confirming continuity): went on to write for Sound On Sound magazine, a well-known music-technology publication. Flagged as 'well-corroborated' rather than ironclad, per the sourcing caveat.",
    "Not in SIDId (checked directly via deepsid_dl/sidid.nfo — no Martin_Walker entry). No known relationship to any other composer/tool already in this KB beyond the shared Hunter's Moon credit with Matt Gray (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Walker, Martin - UNITED KINGDOM (ENGLAND)')",
    "CSDb scener (id=3259, handle 'MW', 200+ credited releases 1985-2023): https://csdb.dk/scener/?id=3259",
    "Commodore Format archive interview (coding career, Armalyte player/editor origin story): https://commodoreformatarchive.com/the-martin-walker-interview/",
    "VGMPF (Electrosound-to-own-driver progression): https://www.vgmpf.com/Wiki/index.php/Martin%20Walker",
    "CDM (post-C64 career, Sound on Sound bylines): https://cdm.link/2018/03/virtuoso-commodore-64-composer-martin-walker-back/",
    "Lemon64 forum (Sound on Sound career corroboration): https://www.lemon64.com/forum/viewtopic.php?t=4933",
    "Local dataset: 17 files tagged Martin_Walker, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Martin_Walker` tag is British composer Martin Walker's own hand-coded
music player and editor, developed specifically while scoring Thalamus's
*Armalyte* (1988) after previously using Electrosound. Player-ID-
fingerprinted across 17 files, all his own — one of the more strongly
documented self-authored routines in this KB, with a direct first-party
interview quote confirming its origin.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he was a **game coder
before becoming a composer**; the **Armalyte commission is the documented
origin** of his own player/editor (not inferred, stated in interview); and
the **Electrosound-to-own-driver progression** is independently corroborated
by both a wiki source and this project's own tag data.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Martin_Walker`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Martin_Walker` `.sid` (Armalyte): load `$c000`, init
`$c000`, play `$c059`, **304 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, the Commodore Format
interview (primary source for the player's origin), VGMPF, CDM, and a
Lemon64 forum thread.

# Neil Baldwin (player routine)

```json
{
  "id": "neil-baldwin",
  "name": "Neil Baldwin (player routine)",
  "aliases": ["Neil_Baldwin"],
  "authors": ["Neil Baldwin"],
  "released": "~1986-1989 (Borderzone Dezign Team / early commercial era)",
  "status": "in-progress",
  "platform": "British demoscene/games composer-coder Neil Baldwin's ('Demon') own hand-coded playroutine. He also used other tools on other files in his own output (Electrosound, Rob_Hubbard-detection, Sidplayer — separate tags, not this card) — a self-taught coder who built his own tools throughout his career, up to and including later NES/SNES audio engines. Player-ID-fingerprinted across 12 files, 12 his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Ala — 1988 shoot-em-up, confirms this is real game music not just a standalone tune): load $6000 (init $6000, play $6006).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $6000.",
    "play": "Sample trace: $6006 (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 1 filter write in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Neil Baldwin, CSDb handle 'Demon' (id=2558) — UK, primary group Borderzone Dezign Team (BRD), also worked with Remember/Tronix/Raiders of the Lost Empire. ~92 credited C64 productions (demos/cracktros/intros/musicdisks) on Demozoo, active 1986-2011 in the demoscene. Role listed as musician/composer, 'occasionally graphics and code'.",
    "COMMERCIAL GAMES CONFIRMED, including the exact file traced: Ala (1988, shoot-em-up — the local trace file), Garfield: Big, Fat, Hairy Deal (1987), Shadow Skimmer (1987), Tangent (1988), Mission Impossibubble (1989).",
    "SELF-CODED DRIVER CONFIRMED (VGMPF, plus a direct quote on his later career): went on to co-found the Eurocom game studio as its primary composer through ~2006, wrote his own NES sound driver by hand (with Tim Rogers) and stated in his own words 'I wrote a total MIDI-based audio system for the SNES' — a clear, sourced pattern of a coder who built bespoke audio engines throughout his career, strongly supporting the C64-era 'Neil_Baldwin' tag also being self-written. Later built retro tracker tools (Ninjuu, NTRQ, Pulsar).",
    "WHY FOUR TOOLS ACROSS HIS OUTPUT (Neil_Baldwin 12 files, Electrosound 8, Rob_Hubbard-detection 3, Sidplayer 1): no source directly explains the split, but is consistent with a self-taught coder-composer who built (and iterated on) his own tools as he went rather than settling on one for his whole career — the same pattern later visible in his NES/SNES work.",
    "DIRECTLY QUOTED INFLUENCE LINK: 'greatly inspired by Hubbard and Galway' (Lemon64 forum, his own words) — plausibly explains why some of his files got auto-tagged Rob_Hubbard by this project's player-detection (stylistic/structural resemblance), but this is circumstantial, NOT evidence of shared/derived code. Do not assert a code-derivation link from this quote alone.",
    "A weak, explicitly-NOT-confirmed lead: VGMPF's Anthony Lees page mentions Baldwin losing a 1986 ZZAP!64 music competition to Lees, alongside 'Barry Leitch, Jonathan Dunn' — 'Jonathan Dunn' here is NOT confirmed to be this KB's carded [[david-dunn]] (a different, unrelated Dunn per that card's own research). Flagged, not treated as a link.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Neil Baldwin entry). No known relationship found to any other composer/tool already in this KB beyond the general Hubbard/Galway influence quote above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Mark Cooksey, David Whittaker, Fred Gray, Matt Gray, Jeroen Kimmel, Electrosound — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Baldwin, Neil (Demon) - UNITED KINGDOM (ENGLAND)')",
    "CSDb scener — Neil Baldwin/Demon (id=2558, Borderzone Dezign Team, musician/composer): https://csdb.dk/scener/?id=2558",
    "Demozoo — Neil Baldwin/Demon (~92 credited productions, debut 1986): https://demozoo.org/sceners/51434/",
    "Lemon64 — commercial C64 games credited to Neil Baldwin (Ala, Garfield, Shadow Skimmer, Tangent, Mission Impossibubble): https://www.lemon64.com/games/list.php?list_individual=neil-baldwin",
    "VGMPF (Eurocom career, NES/SNES driver quotes, later tracker tools): https://vgmpf.com/Wiki/index.php/Neil_Baldwin",
    "Lemon64 forum (Eurocom colleagues, Hubbard/Galway influence quote): https://www.lemon64.com/forum/viewtopic.php?t=14668, https://www.lemon64.com/forum/viewtopic.php?t=32993",
    "CSDb SID — Music Demo Number One (standalone track, reused in many crack-intros): https://csdb.dk/sid/?id=3872",
    "Local dataset: 12 files tagged Neil_Baldwin, 1 composer for this tag (see knowledge/COVERAGE.md; his folder also has 8 Electrosound, 3 Rob_Hubbard-detected, 1 Sidplayer)"
  ]
}
```

## Overview

The `Neil_Baldwin` tag is British composer-coder Neil Baldwin's ('Demon',
Borderzone Dezign Team) own hand-coded playroutine, one of several tools he
used across his output. Player-ID-fingerprinted across 12 files, all his
own. His later career (co-founding Eurocom, hand-writing NES and SNES audio
engines) strongly supports him having genuinely coded this C64-era routine
himself, part of a lifelong pattern of building his own audio tools.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **confirmed commercial game
credits** matching the traced file (Ala); a **documented, first-quoted
pattern of self-written audio engines** across his whole career (C64→NES→
SNES); and the **multi-tool output** (4 different tags in his own folder)
left unexplained beyond the general self-taught-coder pattern rather than
guessed at.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Neil_Baldwin`-tagged `.sid`
+ trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Neil_Baldwin` `.sid` (Ala): load `$6000`, init `$6000`,
play `$6006`, **251 register writes / 50 frames** (1 filter write).
Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Demozoo, Lemon64,
VGMPF, and a Lemon64 forum thread (influence quote).

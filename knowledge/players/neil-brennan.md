# Neil Brennan (player routine)

```json
{
  "id": "neil-brennan",
  "name": "Neil Brennan (player routine)",
  "aliases": ["Neil_Brennan"],
  "authors": ["Neil Brennan"],
  "released": "~1985-1989 (Beam Software / Melbourne House era)",
  "status": "in-progress",
  "platform": "Neil Brennan's own hand-coded 6502 sound module/music language, written in-house at Beam Software (Melbourne House). Player-ID-fingerprinted across 21 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Doc the Destroyer): load $6300 (init $6303, play $6300).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $6303.",
    "play": "Sample trace: $6300 (called in IRQ; play address == load address, i.e. play is the routine's entry point)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (heavy filter modulation observed — 104 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Neil Brennan was a CODER as well as a musician — per a Remix64 interview he personally wrote 'the 6502 assembly sound module and music language for the C64 synth', an in-house sequencer/synth used across Beam Software's C64 and NES titles. His BSc Computer Science (University of Melbourne, 1987) let him move from 'just the house musician' into a programming role. This corroborates the strong single-composer signal (all 21 files are his own) and the filter-heavy trace: this is very likely a genuinely self-authored routine, not a borrowed tool.",
    "STUDIO: Beam Software (developer) / Melbourne House (publisher) — same parent, Beam International, Melbourne, Australia. He was Beam's first dedicated audio person; left in 1988. Games: Way of the Exploding Fist, Castle of Terror, Doc the Destroyer (1987), Defender of the Crown (NES port), 720°, Samurai Warrior: The Battles of Usagi Yojimbo — ~40 titles across Spectrum/C64/NES, 1982-1989.",
    "METADATA MESSINESS (two separate discrepancies, both left unresolved — evidence of a self-taught routine that predates formal 'player' cataloguing, not a data error to fix): (1) HVSC Musicians.txt lists his country as UNITED KINGDOM (ENGLAND), while his CSDb scener profile lists AUSTRALIA — genuinely conflicting sources (he was born in Tanzania, raised in Australia from age 4, held British/Australian citizenship — plausibly the source of the split). (2) His CSDb profile's trivia line notes his music was 'for a long time miscredited to Greg Holland' (unverified beyond that one CSDb note).",
    "CSDb function is listed only as 'Musician' on his scener page, despite his own interview account of writing the assembly sound engine — a discrepancy between CSDb's role tagging and his own account of the work.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — 0 'Brennan' matches). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — no shared studio or documented connection; Brennan namechecks Hubbard/Galway/Daglish in interview as composers he admired, not as collaborators).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Brennan, Neil — UNITED KINGDOM (ENGLAND)')",
    "CSDb scener (Neil Brennan, id=9635): https://csdb.dk/scener/?id=9635",
    "Remix64 interview (coder claim, Beam Software role, departure year): https://remix64.com/interviews/an-interview-with-neil-brennan.html",
    "VGMPF biography (birth, education, game list): https://www.vgmpf.com/Wiki/index.php/Neil_Brennan",
    "Lemon64 — Doc the Destroyer: https://www.lemon64.com/game/doc-the-destroyer",
    "Local dataset: 21 files tagged Neil_Brennan, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Neil_Brennan` tag is Australian/British composer-coder Neil Brennan's own
in-house sound module, written while he was Beam Software's (Melbourne House)
first dedicated audio programmer. Player-ID-fingerprinted across 21 files,
all his own — a tight single-composer routine, and one with real evidence
(his own interview account) that he coded it himself rather than using a
third-party tool.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he's a **confirmed coder**,
not just a musician, per his own Remix64 interview account of writing the
6502 sound engine; the **Beam Software / Melbourne House studio** context
(same routine across ~40 Spectrum/C64/NES titles); and **two separate,
unresolved metadata discrepancies** (HVSC says UK, CSDb says Australia; a
CSDb trivia note about historical miscrediting) that are left as documented
tension rather than "fixed" — both sources are legitimate.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Neil_Brennan`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Neil_Brennan` `.sid` (Doc the Destroyer): load `$6300`,
init `$6303`, play `$6300`, **388 register writes / 50 frames** (104 filter
writes — clearly filter-heavy). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, the Remix64 interview
(coder claim), VGMPF (biography), and Lemon64.

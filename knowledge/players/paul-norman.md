# Paul Norman / Cosmi (player routine)

```json
{
  "id": "paul-norman",
  "name": "Paul Norman / Cosmi (player routine)",
  "aliases": ["Paul_Norman/Cosmi"],
  "authors": ["Paul Norman"],
  "released": "1983-1985 (Cosmi Corporation era)",
  "status": "in-progress",
  "platform": "Paul Norman's own hand-coded 6502 sound routine, typed in machine-language hex via a hex monitor (Hexmon) for his Cosmi-published C64 games. A distinct, LATER tag ('Paul_Norman/ComPub', a desktop-publishing product from 1987) exists in this composer's own HVSC folder — NOT the same routine, not covered by this card. Player-ID-fingerprinted across 7-8 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Sample HVSC file traced (Slinky): load $6000 (init $7000, play $6020).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $7000.",
    "play": "Sample trace: $6020 (called in IRQ)."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "NO FILTER USE OBSERVED — 0 filter writes across a 328-write/300-frame trace. Unusual but plausible for an amateur hand-coded-in-hex routine predating the C64 music-tool ecosystem."
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Paul Norman is the SELF-TAUGHT PROGRAMMER, not a separate musician — CONFIRMED: 'Norman composed songs on his guitar and typed the notes in hex using Hexmon. For each sound effect, Norman wrote code in machine language and tweaked it until he heard something he liked.' A former professional touring/studio guitarist (15 years) who taught himself 6502/6510 assembly starting mid-1982 after buying a VIC-20. His CSDb scener profile lists all three functions: Coder, Graphician, Musician.",
    "ORIGIN STORY: hired by a small shop called Synchro in 1982, given a C64 on day one, told to write a bow-and-arrow game to learn assembly — that project became Forbidden Forest (1983). Synchro folded partway through development; Cosmi Corporation (founded 1982 by George Johnson, Carson CA — a low-cost, vertically-integrated software house sold through mass retail, not just computer shops) acquired the unfinished game AND Norman along with it. He stayed at Cosmi until 1989.",
    "Games under this tag/era: Forbidden Forest (1983, his best-known and most acclaimed work — widely praised on Lemon64 for its atmospheric/eerie sound), Aztec Challenge (1983), Caverns of Khafka (1984), Super Huey (1985), Beyond the Forbidden Forest, Chernobyl, Slinky, The Trivia Monster.",
    "ZERO FILTER USE (0 writes in the traced sample) is a real, notable trait, not a probe artifact — plausibly explained (Lemon64 community commentary, not a primary/technical source, so treat as color not proof) by his compositional style: chords played simultaneously across all three SID voices ('a progressive-rock composer' approach per one reviewer) rather than the more typical separate bass/arpeggio/lead-with-filter-shaping split other C64 composers used.",
    "DISTINCT FROM 'Paul_Norman/ComPub', NOW SEPARATELY CARDED as [[paul-norman-compub]]: his HVSC folder also has 3 files tagged 'Paul_Norman/ComPub' — a later, SEPARATE product ('Paul Norman's Computerized Publishing Co.', a real, commercially-boxed desktop-publishing utility, published by Cosmi in 1986 per the embedded PSID copyright field — predating the CSDb-dated 1987 crack by about a year). Its 3 bundled demo tunes are all classical/patriotic covers (1812 Overture, Stars and Stripes Forever, National Emblem), not original Norman compositions. A dedicated research pass found the trace's write-density RATIO plausibly consistent with the same hand-coded, filter-free compositional style documented on this card, but this is NOT proven to be the identical routine — no disassembly exists for either tag. Do not conflate the two.",
    "Not in SIDId (checked directly via deepsid_dl/sidid.nfo — no 'Paul_Norman/Cosmi' entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Norman, Paul - USA')",
    "Wikipedia — Paul Norman (game designer): https://en.wikipedia.org/wiki/Paul_Norman_(game_designer)",
    "VGMPF biography (Hexmon quote, Synchro/Cosmi origin story): https://www.vgmpf.com/Wiki/index.php/Paul_Norman",
    "CSDb scener (Paul Norman, id=4440, functions Coder/Graphician/Musician): https://csdb.dk/scener/?id=4440",
    "Wikipedia — Cosmi Corporation: https://en.wikipedia.org/wiki/Cosmi_Corporation",
    "CSDb release — Paul Norman's Computerized Publishing Co. (the separate ComPub tag, 1987): https://csdb.dk/release/?id=48192",
    "Lemon64 — Forbidden Forest (sound reputation, voice-usage commentary): https://www.lemon64.com/game/forbidden-forest, https://www.lemon64.com/review/forbidden-forest/52",
    "Local dataset: 7-8 files tagged Paul_Norman/Cosmi, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Paul_Norman/Cosmi` tag is American game designer/musician Paul Norman's
own hand-coded playroutine — typed in as machine-language hex via a hex
monitor for his Cosmi-published C64 games, most famously *Forbidden Forest*
(1983). Player-ID-fingerprinted across 7-8 files, all his own — a
self-written routine by a self-taught programmer, not a shared tool.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he's a **confirmed
self-taught coder-composer** (guitarist-turned-programmer, composed on
guitar then hand-typed hex); the **Synchro→Cosmi origin story** of Forbidden
Forest; **zero observed filter use** (unusual, plausibly stylistic — chords
across all three voices rather than filter-shaped leads); and the **distinct
later 'Paul_Norman/ComPub' tag** (a 1987 desktop-publishing product, not the
same routine — don't conflate the two).

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Paul_Norman/Cosmi`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Paul_Norman/Cosmi` `.sid` (Slinky): load `$6000`, init
`$7000`, play `$6020`, **328 register writes / 300 frames** (0 filter
writes — genuinely filter-free, not a trace artifact; other files in this
tag traced with fewer frames showed the same pattern). Internals
undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, Wikipedia (Norman + Cosmi
Corporation), VGMPF (Hexmon/origin-story quote), CSDb, and Lemon64.

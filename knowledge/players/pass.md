# P.A.S.S. (Parabola Advanced Synthesis Software) / Allegro

```json
{
  "id": "pass",
  "name": "P.A.S.S. (Parabola Advanced Synthesis Software) / Allegro",
  "aliases": ["PASS"],
  "authors": ["Bob Landwehr"],
  "released": "1983/1984 as P.A.S.S. (self-published, mail order, $49.95); renamed 'Allegro' in 1984, reduced to $39.95, licensed to Artworx Software for USA-wide distribution",
  "status": "stub",
  "platform": "Native C64 music editor + own replay routine. Songs are arranged as 41 sequences in a custom scripting language called 'Forte' (per VGMPF): notes, rests, durations, ties, repetitions, instrument changes, sustain lengths, jumps, and comments. Controls SID registers directly, including two named custom effects, 'phaser' and 'heavymetal', plus software vibratos (added 1984). Commercial product, not scene freeware.",
  "csdb_release": 128704,

  "memory": {
    "load_address": "TODO: $xxxx",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO: songs are '41 sequences' authored in the 'Forte' scripting language per VGMPF — no byte-level format documented",
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
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId and VGMPF independently agree on identity: SIDId names the tag 'P.A.S.S. (Parabola Advanced Synthesis Software) / Allegro', author Bob Landwehr, released '1983 Parabola / 1984 Artworx Software'; VGMPF's dedicated page gives the same author, a 1984 release year, and the Allegro rename/relicensing story in more detail.",
    "VGMPF credits THREE composers as having used PASS: Bob Landwehr himself, Scott Emmons, and an unnamed composer on 'The Amazing Spider-Man and Captain America in Dr. Doom's Revenge' (C64) — only Landwehr appears in this local dataset (6 files, 100% Landwehr, USA); Emmons and the Dr. Doom's Revenge score are not present locally.",
    "VGMPF notes PASS/Allegro 'faded quickly' commercially, 'possibly overshadowed by Sidplayer' (a different, better-known contemporary C64 music tool), but that its sound was 'rediscovered by the European C64 scene in 2008' — read as an early, largely-forgotten-then-revived American tool, distinct from the demoscene-native tools most of this knowledge base documents.",
    "Composer concentration: 6 files, 1 composer (Bob Landwehr, 100%) in this dataset — three are his own 'P.A.S.S. Demo'/'Demo 2'/'Demo 3' self-published demo tunes, the other three are game scores (Break Street, Four Easy Pieces, Hes Games) credited jointly to Landwehr and, on Break Street, Scott Emmons."
  ],
  "sources": [
    "sidid:PASS (author Bob Landwehr, released '1983 Parabola / 1984 Artworx Software', reference https://csdb.dk/release/?id=128704) — data/sidid.json",
    "VGMPF — PASS: https://www.vgmpf.com/Wiki/index.php?title=PASS",
    "CSDb release 128704: https://csdb.dk/release/?id=128704",
    "Local dataset: data/composers/bob-landwehr.json — 6 files tagged PASS, all by Bob Landwehr (Break Street, Four Easy Pieces, Hes Games, P.A.S.S. Demo, P.A.S.S. Demo 2, P.A.S.S. Demo 3); knowledge/COVERAGE.md rank #6"
  ]
}
```

## Overview

P.A.S.S. (Parabola Advanced Synthesis Software), later renamed **Allegro**,
is an early (1983/1984) commercial C64 music editor by American composer
**Bob Landwehr**, sold by mail order and later licensed to Artworx Software
for wider USA distribution. VGMPF and SIDId independently corroborate the
same author, era, and rename story. It let composers author "41 sequences"
in a custom scripting language ("Forte"), with named custom SID effects
("phaser", "heavymetal") and, from 1984, software vibrato. In this dataset
it is entirely concentrated on Landwehr himself: 6 files, 100% his own
(three self-published "P.A.S.S. Demo" tunes plus three game scores).

## Quirks & gotchas

See the `quirks` array. The load-bearing points: this is a genuinely early
(pre-1984) commercial US tool that "faded quickly" per VGMPF, only to be
"rediscovered by the European C64 scene in 2008" — an unusual survival
story for a tool with essentially no scene footprint originally; and VGMPF
names two other users of the tool (Scott Emmons, an unnamed Dr. Doom's
Revenge composer) not represented in this local dataset at all.

## Disassembly notes

None done here. No public source, format spec, or memory map was found;
every Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release history, composer usage) are confirmed, from SIDId and VGMPF. No
runtime fact was guessed.

## Sources

See the `sources` array — SIDId, VGMPF's dedicated PASS page, the CSDb
release page, and this project's local composer data.

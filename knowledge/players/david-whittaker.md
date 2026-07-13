# David Whittaker (player routine)

```json
{
  "id": "david-whittaker",
  "name": "David Whittaker (player routine)",
  "aliases": ["David_Whittaker"],
  "authors": ["David Whittaker"],
  "released": "~mid-1980s (per-game; his reusable driver from ~1985)",
  "status": "in-progress",
  "platform": "A composer's hand-coded 6502 in-game music driver, embedded/relocated per game — NOT a distributed tool. Player-ID fingerprints it across ~114 files. Commercially licensed/sold to other developers (part of the 'why so many games' story).",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies PER GAME/relocatable — do NOT fix one map. Example builds: a reverse-engineered Panther disassembly sits at init/play ~$9000, while the CSDb Panther SID loads init $A400 / play $A538.",
    "zero_page": "~36-byte per-voice state structures starting ~$FA (note counters, pattern pointers, freq/pulse-width, ADSR, waveform state) — from the RE'd Panther build; per-game.",
    "layout": "3 independent voices; per-voice track/sequence tables → pattern data; arpeggio tables terminated by $88. Cross-platform data model (Bybell's NES RE): song table of speed + voice-ptr lo/hi (7 bytes/entry), voice ptrs → patterns, 0,0 = loop."
  },
  "entry": {
    "init": "Per-game (e.g. RE'd Panther $9000; CSDb Panther SID init $A400).",
    "play": "Per-game (CSDb Panther SID play $A538). Single global tempo (SongTempo, default 7) → standard 1x/single-speed."
  },
  "speed": "1x (single-speed); SongTempo decremented per frame. (Multispeed not indicated in the inspected build.)",

  "data_format": {
    "order_list": "Per-voice track/sequence tables of pattern pointers.",
    "patterns": "Encoded note + duration + command bytes; pattern terminator $88 (C64) / $FF (NES).",
    "instruments": "8-byte structs (ADSR/modulation); ~22 instruments in the Panther build.",
    "wavetable": "TODO (waveform select via command bytes $80-$93).",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "Command table ~$80-$93 (~20 commands).",
    "commands": {
      "(from the RE'd Panther build)": "waveform select (noise/pulse/saw/tri), ring-mod, sync, ADSR control, tempo, portamento/slide, arpeggio (tables end $88). Exact per-byte semantics: TODO."
    }
  },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "One of the most PROLIFIC game composers ever (~100+ titles: Lazy Jones, Glider Rider, Shadow of the Beast, Amaurote, Feud, Panther...). Lazy Jones subtune 21 became Zombie Nation's 'Kernkraft 400'.",
    "COMPOSER-DRIVER category (like rob-hubbard): a personal reusable routine, Player-ID-fingerprinted across his catalogue. Memory map varies per game — the RE'd Panther build ($9000) and the CSDb Panther SID ($A400) differ, so never fix one map.",
    "He COMMERCIALLY LICENSED/sold his driver (VGMPF: sold to Psygnosis ~£5000; licensed to Manfred Trenz) — so the same engine seeded other developers' games. Player-ID's 114 matches likely span multiple driver REVISIONS, not one build.",
    "Motivated by Rob Hubbard and Martin Galway; developed his own driver independently (not derived). His instruments are 'almost as recognisable as Rob Hubbard's'. Later C64/CPC drivers were REWRITTEN by Jason Brooke (~1986) after complaints his own driver was slow — a distinct successor engine.",
    "VERIFICATION PATH: a reverse-engineered ACME disassembly exists (realdmx/c64_6581_sid_players, Whittaker_David_Panther.asm) — the concrete artifact for a future reassemble-and-diff toward `verified`."
  ],
  "sources": [
    "Reverse-engineered ACME disassembly (path to verified): https://github.com/realdmx/c64_6581_sid_players/tree/master/Whittaker_David",
    "VGMPF NES-driver RE (Tony Bybell, cross-platform data format): https://www.vgmpf.com/Wiki/index.php?title=David_Whittaker_(NES_Driver)",
    "Wikipedia: https://en.wikipedia.org/wiki/David_Whittaker_(video_game_composer) ; c64.com interview: https://www.c64.com/interviews/whittaker.html",
    "CSDb Panther SID (per-game addresses): https://csdb.dk/sid/?id=30377",
    "Local dataset: 114 files tagged David_Whittaker (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `David_Whittaker` tag is legendary game composer **David Whittaker's** own
hand-coded C64 music driver — one of the most prolific composers ever (~100+
titles). Like `rob-hubbard`, it's a composer-personal routine, Player-ID-
fingerprinted across ~114 files, and its memory map varies per game. Uniquely,
Whittaker **commercially licensed/sold** his driver, so it seeded other
developers' games too.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **per-game memory map** (the
RE'd Panther build and CSDb Panther SID differ), the **licensing/reuse** story
(114 matches likely span multiple revisions), and independence from Hubbard/
Galway (inspired by, not derived from). Jason Brooke rewrote a later driver.

## Disassembly notes

A reverse-engineered ACME disassembly of the Panther build exists (realdmx
repo) — 3 voices, ~36-byte per-voice ZP structs, command table `$80-$93`,
pattern terminator `$88`. Per-game addresses (Panther RE `$9000` vs CSDb SID
`$A400`).

## Verification

**Facts sourced; entry points/playback not yet locally traced — `status:
in-progress`.** Architecture is from a community RE disassembly (realdmx) + a
cross-platform NES-driver writeup, not our own trace. The realdmx ACME source
is the artifact for a future reassemble-and-diff toward `verified` (needs an
ACME→64tass port + a matching HVSC Panther rip). Exact command-byte semantics
and the canonical per-game entry convention are `TODO`.

## Sources

See the `sources` array — the realdmx RE disassembly, VGMPF's NES-driver RE,
Wikipedia/c64.com, and the CSDb Panther SID.

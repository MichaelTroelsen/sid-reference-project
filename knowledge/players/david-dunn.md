# David Dunn (player routine)

```json
{
  "id": "david-dunn",
  "name": "David Dunn (player routine)",
  "aliases": ["David_Dunn"],
  "authors": ["David Dunn (Julie Dunn)"],
  "released": "~1984-1989 (per-game; Elite driver dated (c)1985)",
  "status": "in-progress",
  "platform": "David Dunn's own hand-coded 6502 in-game music driver, per-game. Player-ID-fingerprinted across 45 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game. Sample HVSC file traced (Advanced Pinball Simulator): load $B000 (init $BF24, play $B376).",
    "zero_page": "TODO (no full disassembly)",
    "layout": "Per-game; interrupt-driven, runs once per screen refresh (50Hz PAL)."
  },
  "entry": {
    "init": "Per-game (sample trace: $BF24).",
    "play": "Per-game (sample trace: $B376, called in IRQ at 50Hz)."
  },
  "speed": "1x (interrupt-driven, once per frame per the Elite RE).",

  "data_format": {
    "order_list": "TODO",
    "patterns": "Command stream packed as 4-bit NIBBLES, two commands per byte (per the reverse-engineered Elite source at bbcelite.com).",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "Pulse-width is command 10 (per Elite RE).",
    "filtertable": "Filter + volume is command 14 (per Elite RE); known for early/advanced filter sweeps and portamento."
  },
  "effects": {
    "encoding": "15 command types in a nibble-packed stream (per bbcelite.com's RE of C64 Elite): frequency for voices 1-5, ADSR envelope = command 7, pulse-width = command 10, rest/timing = commands 8/15, filter+volume = command 14. Full byte-level decode: TODO.",
    "commands": {}
  },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": ["jason-brooke"], "same_effect_encoding_as": [] },

  "quirks": [
    "David Dunn = Julie Dunn (transitioned; VGMPF files the bio under Julie Dunn). English, b.16 Jun 1949; active C64 era ~1984-1989. Best-known: Elite (C64 1985, Firebird — the driver carries '(c)1985 D.Dunn. Modified by IB,DB' = Ian Bell / David Braben), The Trapdoor (1986 Piranha), Gilligan's Gold (1984), The Dark Tower (1984); 40+ credits.",
    "CRITICAL DISAMBIGUATION: this David Dunn is a DIFFERENT PERSON from Jonathan Dunn (Ocean's in-house musician, cross-platform drivers). Search engines conflate them. The realdmx RE repo's `Dunn_Jonathan` folder is the OTHER Dunn — NOT this one. (This is why `Dunn_Jonathan` has 0 files as that exact tag in our data.)",
    "DATA FORMAT is documented (rare for a personal routine): the reverse-engineered Elite source at bbcelite.com describes Dunn's actual C64 music system — an interrupt-driven 50Hz replay reading a command stream packed as 4-bit nibbles (2 cmds/byte), 15 command types. The driver was disassembled and ported to BBC Micro by Jez San (Apr 1985), then modified by Bell/Braben.",
    "JASON BROOKE link (the 1 cross-composer file = Brooke_Jason/Bismarck.sid, confirmed local): VGMPF says 'Bismarck (C64 1987) — Driver by Julie Dunn'. So Brooke ARRANGED a tune on Dunn's driver for that ONE title — a genuine shared-routine instance, but NOT the same engine. The [[jason-brooke]] card is Brooke's OWN (Whittaker-successor) engine; Bismarck is the single case where he borrowed Dunn's.",
    "No dedicated David Dunn disassembly in the realdmx repo. Best artifact = the bbcelite.com Elite music deep-dive (documents the format above). No byte-exact reconstruction path yet — remaining fields TODO."
  ],
  "sources": [
    "VGMPF — Julie Dunn (bio, real name, gameography, custom driver): https://www.vgmpf.com/Wiki/index.php?title=Julie_Dunn",
    "VGMPF — Jason Brooke (Bismarck 1987 = 'Driver by Julie Dunn'): https://www.vgmpf.com/Wiki/index.php?title=Jason_Brooke",
    "BBC Elite deep-dive — C64 music driver format ('(c)1985 D.Dunn'; Jez San port): https://elite.bbcelite.com/deep_dives/music_in_commodore_64_elite.html",
    "CSDb scener 'David Dunn' (UK): https://csdb.dk/scener/?id=8776",
    "Local dataset: 45 files tagged David_Dunn, 2 composers (see knowledge/COVERAGE.md); the cross file is Brooke_Jason/Bismarck.sid"
  ]
}
```

## Overview

The `David_Dunn` tag is composer David Dunn's (Julie Dunn) own C64 in-game
driver (Elite, The Trapdoor…), Player-ID-fingerprinted across 45 files. Unusually
for a personal routine, its **data format is documented** — via the
reverse-engineered Elite source at bbcelite.com.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **David Dunn ≠ Jonathan Dunn**
disambiguation (the realdmx `Dunn_Jonathan` folder is a different person); the
**documented nibble-packed command format** (from bbcelite's Elite RE); and the
**Jason Brooke / Bismarck** link (Brooke borrowed Dunn's driver for one title —
a real shared-routine instance, not the same engine as the [[jason-brooke]]
card's).

## Disassembly notes

No dedicated disassembly in the realdmx repo, but bbcelite.com's reverse-engineered
Elite source documents the driver's command format (15 nibble-packed command
types). A future `verified` would need a full disassembly of a Dunn `.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `David_Dunn` `.sid` (Advanced Pinball Simulator): load
`$B000`, init `$BF24`, play `$B376`, **200 register writes / 50 frames**. The
command-format facts are from bbcelite's RE, not our own disassembly; byte-level
encoding and ZP map are `TODO`.

## Sources

See the `sources` array — VGMPF (Julie Dunn + Jason Brooke), the bbcelite.com
Elite music deep-dive (the format source), and CSDb.

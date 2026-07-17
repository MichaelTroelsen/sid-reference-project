# Echo (Geir Tjelta realtime SID delay)

```json
{
  "id": "geir-tjelta-echo",
  "name": "Echo (Geir Tjelta realtime SID delay)",
  "aliases": ["Geir_Tjelta/Echo"],
  "authors": ["Geir Tjelta (GT)"],
  "released": "2009 (technique introduced; publicized as 'Echofied 6581' by Maniacs of Noise, 2010)",
  "status": "stub",
  "platform": "Native C64 realtime echo/delay ROUTINE embedded per-tune, not a distributed standalone tracker/editor. Exploits a 6581-only SID quirk (records voice 3's envelope/oscillator output, plays it back delayed as a 'virtual 4th channel'); does not work on 8580. Author explicitly declined to fold it into SID Duzz'It.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: not disassembled",
    "zero_page": "TODO: not disassembled",
    "layout": "TODO: not disassembled. A CSDb release comment (unverified, second-hand, not a disassembly) describes a lookup table at $BF00-$BFFF driven by SID voice 3's envelope/oscillator values -- see Quirks. Not entered here as a confirmed fact."
  },
  "entry": {
    "init": "TODO: not disassembled",
    "play": "TODO: not disassembled"
  },
  "speed": "TODO: not disassembled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is a TECHNIQUE, not a distributed tool: no CSDb release page exists for 'Echo' as a product, and it has NO entry in SIDId's sidid.nfo (checked: github.com/cadaver/sidid/blob/master/sidid.nfo, no 'Geir_Tjelta/Echo' tag) -- unlike Geir Tjelta's three other documented tools (Sid Systems, SID Duzz'It, Macro Player), all of which DO have SIDId entries. That absence is itself the signal that this is a personal routine, not a published editor.",
    "Origin, per CHIPFLIP (2009-09-23): 'The Norwegian composer Geir Tjelta has introduced a new trick for the SID-chip: realtime delay. The output of the third channel of the SID can be recorded, and by delaying the playback of the sample on the \"virtual\" fourth channel, you get a subtle echo. This routine doesn't use much CPU-time either.' -- https://chipflip.wordpress.com/2009/09/23/more-soundchip-hacking-realtime-sid-delay/",
    "6581-ONLY: the same source states it 'needs to run on the old 6581 chip, since this technique for playing samples relies on a bug that was almost fixed with the new 8580 chip.' A representative demonstration release is even named 'Echofied 6581' (CSDb release 91173, Maniacs of Noise, 2010).",
    "EXPLICITLY KEPT OUT of SID Duzz'It: the CHIPFLIP article notes rumors the effect would ship in a future SDI with MIDI support, then records an author update: 'Geir says it will not be included in the new SDI.' Treat this as evidence AGAINST a shares_routine_with edge to SID Duzz'It (see sidduzzit.md), not for one.",
    "A CSDb comment on release 91173 ('Echofied 6581') describes implementation detail -- 'a lookup table at memory address $bf00-$bfff, using SID voice 3's envelope and oscillator values to create echo effects' -- but this is a scene commenter's description, not a disassembly. Recorded here as an unverified lead only; NOT entered into `memory.layout`.",
    "Composer concentration (Tier 1, from data/composers/*.json): 10 files across 5 composers -- Geir Tjelta himself 4 (40%), Glenn Gallefoss/GRG 2, Knutsi Aleksi 2, DRAX 1, Et1999cc 1. Filenames literally flag usage of the routine ('Sub Hunter Highscore (echoed)', 'Buzzer (echoed)', 'Autumnness (echofied)', 'Echoes', 'Echofied 6581') -- a routine shared within a small Norwegian-scene circle around Tjelta, not a widely-adopted tool. Matches the project's 'few composers = personal/small-scene routine' heuristic."
  ],
  "sources": [
    "CSDb SID entry 42404, 'Echoes' by Geir Tjelta (2009, Maniacs of Noise) -- earliest known use: https://csdb.dk/sid/?id=42404",
    "CSDb release 91173, 'Echofied 6581' by Maniacs of Noise (2010, code: GT; music: Drax, GT, Jeroen Tel, Laxity) -- demonstration/showcase release, includes the $BF00-$BFFF lookup-table comment (unverified): https://csdb.dk/release/?id=91173",
    "CHIPFLIP, 'More Soundchip Hacking: Realtime SID delay' (2009-09-23) -- technique description, 6581-only caveat, and the author's decision to keep it out of SDI: https://chipflip.wordpress.com/2009/09/23/more-soundchip-hacking-realtime-sid-delay/",
    "sidid.nfo checked, no matching entry for 'Geir_Tjelta/Echo': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 10 files tagged Geir_Tjelta/Echo across 5 composers, cross-referenced from data/composers/*.json (see knowledge/COVERAGE.md, rank 27)"
  ]
}
```

## Overview

"Echo" is not a tracker or a published editor -- it's **Geir Tjelta's realtime
SID echo/delay routine**, a 6581-only trick that records voice 3's
envelope/oscillator output and plays it back delayed to fake a "virtual 4th
channel" of subtle echo. Introduced in 2009 and showcased on Maniacs of
Noise's "Echofied 6581" (2010), it sits alongside Tjelta's other, better
documented C64 music tools -- [Sid Systems](sidsys.md) (1990) and
[SID Duzz'It](sidduzzit.md) (1992, with Glenn Rune Gallefoss) -- but,
notably, was deliberately kept *separate* from SDI. 10 files in the local
dataset carry this tag, spread thinly across 5 composers with Tjelta himself
accounting for 40% -- consistent with a shared personal routine rather than
a released product.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a **technique embedded per-tune,
not a distributed tool** (no SIDId entry, no CSDb tool-release page); it is
**6581-only** (relies on a chip bug fixed in the 8580); and there is **direct
author evidence it was kept out of SID Duzz'It**, which argues against
assuming any code-sharing with that tool absent a real disassembly.

## Disassembly notes

None done here (Tier 1+2 research only, no disassembly performed). A CSDb
commenter's description of a $BF00-$BFFF lookup table driven by voice 3's
envelope/oscillator is recorded as an unverified lead in the `quirks` array,
not entered as a confirmed memory-map fact. The natural next step is to
disassemble one of the 10 tagged `.sid` files (e.g. "Echoes.sid" or
"Echofied_6581.sid" from MUSICIANS/T/Tjelta_Geir/) and trace it via
`sidm2-siddump` to test that lead and fill `memory`/`entry`/`data_format`.

## Verification

**Not verified, and no Tier 3 field confirmed -- `status: stub`.** Only
identity/provenance facts (technique origin, author, 6581 dependency, the
explicit non-merger with SDI, and composer concentration) are sourced, all
from CSDb and a contemporaneous scene blog post. No memory map, entry point,
or data format has been examined.

## Sources

See the `sources` array -- CSDb (SID entry 42404, release 91173), the
CHIPFLIP scene-technique writeup, a confirmed absence in SIDId's sidid.nfo,
and the local per-composer dataset.

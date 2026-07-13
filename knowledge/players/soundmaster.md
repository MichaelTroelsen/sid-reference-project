# Soundmaster (SoedeSoft)

```json
{
  "id": "soundmaster",
  "name": "Soundmaster (SoedeSoft)",
  "aliases": ["SoedeSoft/Soundmaster_V1.0", "SoedeSoft/Soundmaster_V3.1", "SoedeSoft/Soundmaster_V3.2", "SoedeSound Editor"],
  "authors": ["Jeroen Soede (driver/player)", "Michiel Soede (editor)"],
  "released": "1988 (V1.0); V3.0-V3.2 1988-1989",
  "status": "stub",
  "platform": "Native C64 music editor+player by the Soede brothers (SoedeSoft label). Closed scene tool.",
  "csdb_release": 117095,

  "memory": {
    "load_address": "TODO (a third-party 'Soundmaster Relocator V1.0' (1991) exists, implying a fixed non-relocatable origin — TODO verify)",
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
    "patterns": "TODO",
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
    "'SoedeSoft' = the label of the Soede brothers, Dutch twin programmers Jeroen Soede and Michiel Soede. Division of labour: Jeroen developed the driver/PLAYER routine; Michiel developed the editor.",
    "Jeroen wrote the driver from scratch specifically 'to be able to arrange with drums like Rob Hubbard's' — a stated design motivation (not a code-derivation from Hubbard). No import/derivation link to other C64 editors established (TODO).",
    "V1.0 was also released as 'SoedeSound Editor V1.0' — a CSDb note confirms it 'uses the exact same player/editor as Soundmaster V1.0 but under a different name'. Version line: V1.0 (1988, id 117095), V3.0 (Jan 1989, id 126831), V3.1 (1989, id 90307), V3.2 (id 117086; shows '1988' on-screen but was a members-only Fire-Eagle release, V3.1 being the 1989 public one).",
    "CONFUSION WARNING: there is an UNRELATED 'Soundmaster V1.0' by Fire-Eagle/Rage for Order (CSDb 10735/10736) and a 'Sound Master 2' by Cabana — different tools, exclude. The Soedes' later Amiga 'SoundMaster Professional' is also separate. This card is strictly the C64 SoedeSoft Soundmaster.",
    "Replay internals (load address, ZP, init/play, data format, effect set) all UNKNOWN — TODO. A good RE target file: Michiel Soede's 'Airwolf' (CSDb SID 26198, 1988). 852 files across 63 composers."
  ],
  "sources": [
    "VGMPF Jeroen Soede (authorship: Jeroen=driver, Michiel=editor; Rob-Hubbard-drums motivation): https://www.vgmpf.com/Wiki/index.php?title=Jeroen_Soede",
    "CSDb V1.0 / SoedeSound Editor identity link (1988): https://csdb.dk/release/?id=117095",
    "CSDb V3.1 (1989): https://csdb.dk/release/?id=90307 ; V3.2: https://csdb.dk/release/?id=117086",
    "Local dataset: 852 files tagged SoedeSoft/Soundmaster_V1.0/V3.1/V3.2 (see knowledge/COVERAGE.md). No SIDId entry."
  ]
}
```

## Overview

Soundmaster is a native C64 music editor+player by the **Soede brothers**
(SoedeSoft) — the Dutch twins **Jeroen Soede** (driver/player) and **Michiel
Soede** (editor) — first released 1988 (also as "SoedeSound Editor V1.0"),
through V3.x in 1988-89. Jeroen wrote the driver from scratch to enable
Rob-Hubbard-style drum arrangements. 852 files here across 63 composers.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **who did what** (Jeroen=player,
Michiel=editor); the **V1.0 = "SoedeSound Editor" alias**; and a strong
**name-collision warning** (unrelated Fire-Eagle "Soundmaster", Cabana "Sound
Master 2", and the Soedes' separate Amiga "SoundMaster Professional"). Internals
`TODO`.

## Disassembly notes

None done here; internals undocumented (no manual/Codebase64 page found). The
existence of a dedicated relocator hints at a fixed load origin. Disassemble a
SoedeSoft-tagged `.sid` (e.g. "Airwolf") and trace via `sidm2-siddump` to fill
the format fields.

## Verification

**Not verified — `status: stub`.** Authorship (Jeroen/Michiel), label, and
version history are VGMPF/CSDb-sourced; all runtime fields `TODO`.

## Sources

See the `sources` array — VGMPF (Jeroen Soede) and the CSDb V1.0/V3.x releases.
No SIDId entry.

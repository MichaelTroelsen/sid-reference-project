# Future Composer (C64)

```json
{
  "id": "future-composer",
  "name": "Future Composer (C64)",
  "aliases": ["FutureComposer_V1.0", "FutureComposer_V3.x", "FutureComposer_V4_Packed", "FC"],
  "authors": ["Maniacs of Noise (replay driver — Charles Deenen / Jeroen Tel)", "Finnish Gold (editor)"],
  "released": "1988 (V1.0, 20 Jun 1988); V4.1+ 1990",
  "status": "stub",
  "platform": "Native C64 editor (Finnish Gold) wrapping a Maniacs of Noise replay driver. NOT the same program as the Amiga 'Future Composer'.",
  "csdb_release": 10604,

  "memory": {
    "load_address": "TODO: not documented publicly for the C64 driver",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO (later scene versions added 3-track support and a better driver from Hawkeye)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO: era-typical ADSR/vibrato/waveform + sequence/pattern model, but no sourced C64-specific offsets",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not documented publicly",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "DON'T CONFLATE with the Amiga 'Future Composer' — a DISTINCT program (different chip, different authors, associated with Jochen Hippel's toolchain) that shares only the name. This card is strictly the C64 tool.",
    "AUTHORSHIP CONFLICT (unresolved, do not guess): VGMPF says the editor was written by Juha Granberg wrapping a Maniacs of Noise driver; the CSDb V1.0 release credits code to Charles Deenen (Maniacs of Noise) + Finland Cracking Service. Common ground: the REPLAY DRIVER is Maniacs of Noise's; the editor came from the Finnish Gold circle. Exact editor-coder attribution is TODO.",
    "No SIDId entry exists for it — identity rests on CSDb + VGMPF, not the usual SIDId cross-check.",
    "Version history: V1.0 (1988, Finnish Gold) → later scene builds add menus, 3-track support, drum/filter/credits editors and a better Hawkeye driver → V4.0 / V4.1+ (Mar 1990, group Dynamix, code by 'The Syndicate'). The V3.x tag is attested by files but no dedicated release page was found (TODO).",
    "3,398 files across 366 composers — a broadly adopted tool (high composer spread)."
  ],
  "sources": [
    "VGMPF: Future Composer — https://www.vgmpf.com/Wiki/index.php?title=Future_Composer (origin narrative, MoN driver + Finnish Gold editor, authorship)",
    "CSDb V1.0 (id 10604, 20 Jun 1988, credits): https://csdb.dk/release/?id=10604",
    "CSDb V4.1+ (id 10607, Mar 1990, Dynamix): https://csdb.dk/release/?id=10607",
    "Modern replay references (format leads, not C64-authoritative): libsidplayfp FC player https://github.com/libsidplayfp/libsidplayfp",
    "Local dataset: 3,398 files tagged FutureComposer_V1.0/V3.x/V4_Packed (see knowledge/COVERAGE.md). No SIDId entry."
  ]
}
```

## Overview

Future Composer (C64) is a native C64 music tool from **1988** — a **Finnish
Gold** editor wrapping a **Maniacs of Noise** replay driver (Charles Deenen /
Jeroen Tel). It's broadly adopted here (3,398 files / 366 composers). It must
not be confused with the **Amiga** program of the same name, which is an
entirely separate tool (Jochen Hippel toolchain lineage). Later scene versions
added 3-track support and a stronger driver from Hawkeye, up through V4.1+
(1990).

## Quirks & gotchas

See the `quirks` array. Two load-bearing ones: **the Amiga/C64 name collision**
(distinct programs — this card is C64 only) and an **unresolved editor-authorship
conflict** (Granberg vs Deenen/FCS; only the Maniacs-of-Noise *driver* is firm).
Also note there's **no SIDId entry**, so identity leans on CSDb + VGMPF.

## Disassembly notes

None done here; no C64-specific format spec (load address, ZP, init/play,
table layout, effect set) was found online. The generic era model (ADSR/
vibrato/waveform + sequence/pattern) is indicative only. libsidplayfp's FC
player is a format lead; a proper pass would disassemble a representative C64
FC `.sid` and trace it via `sidm2-siddump`.

## Verification

**Not verified — `status: stub`.** Identity/history are CSDb+VGMPF-sourced;
every runtime field is `TODO`. Even the authorship of the editor is unresolved
(flagged, not guessed).

## Sources

See the `sources` array — VGMPF, the CSDb V1.0/V4.1+ releases, and
libsidplayfp as a modern format reference. No SIDId entry.

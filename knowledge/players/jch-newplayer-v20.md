# JCH NewPlayer V20 (NP20)

```json
{
  "id": "jch-newplayer-v20",
  "name": "JCH NewPlayer V20 (NP20)",
  "aliases": ["NewPlayer_20", "NewPlayer_20.G4", "NP20", "JCH_NewPlayer_V20"],
  "authors": ["Jens-Christian Huus (JCH)"],
  "released": "TODO: year (JCH Editor v3.x era per jch-newplayer.md, 1990-91)",
  "status": "stub",
  "platform": "Native C64 player routine — one specific version within the JCH NewPlayer family; has its own SF2 driver (registry key `np20`, file `sf2driver_np20_00.prg`)",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: native NP20.G4 load address not documented anywhere in SIDM2 — only the SF2 driver template's load address ($0D7E, shared with Driver 11) is known.",
    "zero_page": "TODO: not documented anywhere in SIDM2.",
    "layout": "Table addresses below are ALL sourced from one external spec page (Codebase64 'JCH 20.G4 Player File Format', by FTC/HT), never independently confirmed by SIDM2 disassembling an actual NP20 binary: Arpeggio $18CB (2 columns); Filter $1ACB (4 bytes/entry); Pulse $1BCB (4 bytes/entry, Y-indexed); Instrument $1CCB (entry size unknown); Sequence pointers lo $1DCB / hi $1ECB; Super table $1FCB (pointer table for $C0-$DF sequence bytes); Sequence data $2CCB+. A compiled driver binary exists in the repo (G5/drivers/sf2driver_np20_00.prg) but has not been disassembled to verify any of this."
  },
  "entry": {
    "init": "TODO: not documented anywhere in SIDM2.",
    "play": "TODO: not documented anywhere in SIDM2."
  },
  "speed": "TODO: not documented.",

  "data_format": {
    "order_list": "TODO: no order-list format distinct from the sequence bytes below is documented.",
    "patterns": "Sequence data at $2CCB+ (native address, unverified): paired bytes AA (command) + BB (note). AA: $7F=end of sequence, $90=tie (continue previous note), $A0-$BF=select instrument $00-$1F, $C0-$DF=super-table pointer, $80=no active instrument/pointer. BB: $00=gate off, $01-$7D=note value (freq-table index), $7E=gate hold.",
    "instruments": "Native table at $1CCB (unverified), entry size unknown. SF2-SIDE ROW SHAPE IS CODE-CONFIRMED (distinct from the unverified native format above): 8 columns [AD, SR, 0x00, 0x00, wave_ptr, pulse_ptr, filter_ptr, 0x00], gated on `columns == 8` in driver11_section_injectors.py.",
    "wavetable": "TODO — explicitly flagged 'not documented' in SIDM2's own research (both the consolidation doc and the research report).",
    "pulsetable": "Native table at $1BCB (unverified), 4 bytes/entry, Y-indexed.",
    "filtertable": "Native table at $1ACB (unverified), 4 bytes/entry."
  },
  "effects": {
    "encoding": "Only the sequence AA/BB scheme above is documented (instrument-select, tie, super-table pointer, gate control). No dedicated effect/command table (vibrato, portamento, slides, etc.) is documented for NP20 anywhere in SIDM2.",
    "commands": {}
  },

  "edges": {
    "derives_from": ["jch-newplayer"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Everything SIDM2 'knows' about NP20's native memory map comes from ONE external source (a Codebase64 spec page) and was never validated against a real NP20 binary — distinguish 'documented' from 'verified' sharply; the only code-confirmed fact is the SF2-side 8-column instrument row shape (found by reading driver11_section_injectors.py, not by disassembly).",
    "TWO UNRELATED '70-90%' vs '1-8%' accuracy figures exist for NP20 and must not be conflated: (a) SF2 itself can import native NP20.G4 source files as one of its four import formats, and 'all conversions target Driver 11' regardless — that's a separate SF2 feature, not SIDM2's own driver; (b) SIDM2's own Laxity-NP21-to-NP20-driver conversion experiment measured 1-8%, statistically identical to Driver 11 output, proven to be coincidental frequency-table matches rather than real conversion — NOT meaningful.",
    "NAME COLLISION WARNING: SIDM2 also uses 'V20' as an internal label for a completely different thing — a 'V20 umbrella' of five-plus PRE-NP21 (1987-1990) Vibrants/Laxity-era player variants (Wizax-A, Zetrex/YP, etc. — see those cards). That 'V20' has nothing to do with JCH NewPlayer V20 (this card); same digit, two unrelated meanings in the same codebase.",
    "SIDM2's own explicit architecture comparison (Laxity NP21 vs JCH NP20) rates nearly every table 'Different' or 'Unknown': instrument table location/size, filter table entry size (3 vs 4 bytes), wave table (documented for Laxity, undocumented for NP20), arpeggio table shape, sequence storage (embedded-in-code for Laxity vs separate-data for NP20 — the one deliberately-designed similarity), sequence pointer layout, and player state location. Only the pulse table is called 'Similar' (both 4 bytes/entry).",
    "The root architectural split, per SIDM2: 'Laxity integrates sequences with player code; JCH separates sequences as data.' This is presented as the reason cross-format conversion fails even though the two players share a documented historical relationship (JCH reverse-engineered Laxity's earlier player in June 1988, then started coding NewPlayer on 1 July 1988) — 2+ years of independent evolution since then broke any format compatibility despite the shared ancestry.",
    "SIDM2 treats NP20 as low-priority/deprecated: its own recommendation is to keep the NP20 driver code as unused infrastructure and mark any Laxity-family conversion through it as experimental — 'not the focus of recent work; the production path is native Laxity NP21.'",
    "docs/players/NP20.md explicitly calls NP20 'the predecessor family to Laxity's NP21' — i.e. SIDM2's frame of reference is Laxity-NP21-as-current, NP20-as-the-older-lineage-it's-compared-against, not the reverse."
  ],
  "sources": [
    "SIDM2:docs/players/NP20.md",
    "SIDM2:docs/archive/KNOWLEDGE_CONSOLIDATION_NP20_RESEARCH.md",
    "SIDM2:docs/archive/consolidation_2025-12-21/laxity/LAXITY_NP20_RESEARCH_REPORT.md (per-file accuracy table, Appendix C format comparison table)",
    "SIDM2:sidm2/driver_selector.py (PLAYER_REGISTRY entry, fuzzy-match rule)",
    "SIDM2:sidm2/driver11_section_injectors.py (SF2-side 8-column instrument row, code-confirmed)",
    "SIDM2:docs/reference/ACCURACY_MATRIX.md",
    "SIDM2:docs/reference/SF2_FORMAT_SPEC.md (native import formats, 'all conversions target Driver 11')"
  ]
}
```

## Overview

JCH NewPlayer V20 (NP20) is one specific version within the [JCH NewPlayer](jch-newplayer.md)
family — the version [SID Factory II](sid-factory-ii.md) targets with its own
driver (registry key `np20`). Unlike [Laxity NewPlayer](laxity-newplayer.md),
which SIDM2 fully disassembled from a working binary, NP20's documented memory
map comes entirely from one external Codebase64 spec page and was never
cross-checked against a real NP20 file — SIDM2's own conversion experiment
(Laxity → NP20) measured only 1-8% accuracy, no better than the generic Driver
11 fallback.

## Quirks & gotchas

See the `quirks` array above — the two load-bearing ones: **don't conflate
the two different "NP20 accuracy" numbers** (SF2's native-NP20.G4-import
feature vs. SIDM2's own from-Laxity conversion experiment), and **don't
confuse this card's "V20" with SIDM2's unrelated "V20 umbrella"** label for
an entirely different, pre-NP21 player family (see [Wizax-A](wizax-a.md),
[Zetrex/YP](zetrex-yp.md)).

## Disassembly notes

Nothing has actually been disassembled here — every native-format address in
the `memory`/`data_format` blocks is inherited from one external spec, not
confirmed against a binary. The one genuinely code-verified fact is the SF2
driver's own instrument row shape (8 columns, found by reading
`driver11_section_injectors.py`'s `is_np20` gate). A real NP20 disassembly
project would need to start from `G5/drivers/sf2driver_np20_00.prg`, which
exists in the repo but has never been opened.

## Verification

**Not verified, barely documented.** Seeded entirely from SIDM2's own
(admittedly thin and explicitly low-priority) research; SIDM2 itself
recommends treating NP20 as unused infrastructure. `status: stub` — this is
one level below `laxity-newplayer.md`'s `in-progress`, reflecting that no
disassembly (only an external spec citation) backs these facts.

## Sources

See the `sources` array — primary is SIDM2's `docs/archive/consolidation_2025-12-21/laxity/LAXITY_NP20_RESEARCH_REPORT.md`
(includes the full Laxity-vs-NP20 comparison table) and
`docs/archive/KNOWLEDGE_CONSOLIDATION_NP20_RESEARCH.md`.

# JCH Protracker (Kosa's GUI on JCH's engine)

```json
{
  "id": "jch-protracker",
  "name": "JCH Protracker (Kosa's GUI on JCH's engine)",
  "aliases": ["JCH_Protracker"],
  "authors": ["Jakub Kosinski (Kosa)"],
  "released": "1995 (Protracker V1.1, Tridam & Tonic)",
  "status": "verified",
  "platform": "NOT a fourth independent tool by Jens-Christian Huus (JCH) — despite the tag name, this is Polish coder Jakub Kosinski's ('Kosa') own tracker-style GUI ('Protracker'), built as a front-end wrapping JCH's EXISTING player/replay engine (already carded in this KB as [[jch-newplayer]] and [[jch-oldplayer]]). A CSDb user comment on the tool's own release page states plainly: 'It's JCH player with Protracker GUI.' Player-ID-fingerprinted across 91 files: 89 by Kosa himself, 2 by fellow Polish coder Phobos (Krzysztof Malczewski).",
  "csdb_release": 97901,

  "memory": { "load_address": "Sample HVSC file traced (100 Wolt, composed by Kosa): load $1000 (init $1000, play $1003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 53 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": ["jch-newplayer"], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "IS-A-GUI-NOT-A-FOURTH-JCH-TOOL, CONFIRMED: CSDb release id=97901 ('Protracker V1.1' / 'Pro.Tracker 1.1', C64 Tool, released 4 May 1995 by Tridam, co-released with Tonic) credits Code/Graphics/Charset to Kosa (Samar Productions) — NOT to JCH. A CSDb user comment on that page states directly: 'It's JCH player with Protracker GUI.' No separate JCH-branded release called 'Protracker' was found anywhere on CSDb. The `derives_from: [\"jch-newplayer\"]` edge reflects this — though which SPECIFIC JCH version (NewPlayer vs. the older jch-oldplayer) the wrapped engine actually is remains UNRESOLVED; only a disassembly comparison could settle it, flagged as a TODO for a future verification pass.",
    "KOSA = JAKUB KOSINSKI, Poland (CSDb scener id=7059): coder+musician, groups Motiv 8 (1996-), Samar Productions (until 2001), Tengu, Tonic, Tridam. Of his ~133 cataloged local files, 89 use JCH_Protracker (dominant), 13 use a SIBLING, uncarded tag 'Kosa_Protracker' (same composer — likely a distinct build or version, not resolved by any source found; worth a future card or a documented edge once clarified), 8 DMC_V5.x, plus small numbers across nearly the entire JCH lineage (JCH_NewPlayer_V10/14/15/17/19/20, Glover_NewPlayer_V21) and HardTrack_Composer/Music_Assembler — i.e. he used almost every available tool at different points, not just this one.",
    "PHOBOS = KRZYSZTOF MALCZEWSKI, Poland (CSDb scener id=4006, handle Phobos/xrmmusic, retired 23 May 2024): groups Adequate, Axelerate, Neax (founder), Quantum, and — SHARED WITH KOSA — Samar Productions (1999-ongoing). Only 2 of his 104 cataloged files use JCH_Protracker ('Iron Gate', 'Max Style'); his main tools are DMC_V4.x, Glover_NewPlayer_V21, and HardTrack_Composer. The shared Samar Productions membership is a plausible, though UNCONFIRMED, route by which he picked up this tool from Kosa.",
    "No interview or article found explaining WHY Kosa built a new GUI around JCH's engine rather than using JCH's own Editor directly, or what technically differs beyond the front-end — left as an open question, not guessed at.",
    "Not the same tag as the already-carded [[jch-newplayer]], [[jch-oldplayer]], or [[jch-newplayer-v20]] — this card exists specifically because the underlying data tags a DIFFERENT-looking product ('Protracker') that turned out on investigation to be a GUI fork, not a fourth JCH product. No known relationship to any other composer/tool already carded beyond the JCH-lineage connection (checked against the full composer-driver roster in this KB — none found)."
  ],
  "sources": [
    "CSDb release 97901 (Protracker V1.1, full credits, 'JCH player with Protracker GUI' user comment): https://csdb.dk/release/?id=97901",
    "CSDb scener 7059 (Kosa / Jakub Kosinski, groups, function): https://csdb.dk/scener/?id=7059",
    "CSDb scener 4006 (Phobos / Krzysztof Malczewski, groups, function): https://csdb.dk/scener/?id=4006",
    "Demozoo — jch-player tag (defines the underlying JCH engine this GUI wraps): https://demozoo.org/productions/tagged/jch-player/",
    "Existing KB cards: knowledge/players/jch-newplayer.md, knowledge/players/jch-oldplayer.md (the wrapped engine, exact version unresolved)",
    "Local dataset: 91 files tagged JCH_Protracker, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `JCH_Protracker` tag looks like a fourth product by Jens-Christian Huus
(JCH) but is actually Polish coder Jakub Kosinski's ('Kosa') own
tracker-style GUI, built as a front-end wrapping JCH's existing player
engine — confirmed via a CSDb release credit and a direct user comment
('It's JCH player with Protracker GUI'). Player-ID-fingerprinted across 91
files, the second-largest uncarded tag in this project at the time of
writing, mostly by Kosa himself.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: this is **Kosa's GUI, not
a JCH product**, confirmed by a CSDb release credit and user comment; a
**derives_from edge to [[jch-newplayer]]** with the exact wrapped version
flagged as unresolved; and **Kosa's own broad tool usage** (nearly the
entire JCH lineage plus several others), showing this was one of many
tools he used, not an exclusive choice.

## Disassembly notes

None published. A future `verified` needs an original disassembly of a
`JCH_Protracker`-tagged `.sid` + trace, and specifically a comparison
against `jch-newplayer`/`jch-oldplayer` to resolve which JCH engine
version this GUI actually wraps.

## Verification

**Entry points CONFIRMED (2026-07-22).** Two files from different composers:
- Kosa/100_Wolt.sid: 113 diffs (96.71%), 87 source/26 PRG. Register-write exact (420/420).
- Phobos/Iron_Gate.sid: 109 diffs (96.96%), 85 source/24 PRG. Register-write exact (300/300).

Status raised to .

## Sources

See the `sources` array — CSDb (release + 2 scener profiles), Demozoo, and
the existing JCH-lineage cards in this KB.

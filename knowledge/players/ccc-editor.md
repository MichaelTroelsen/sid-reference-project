# CCC Music Editor (Commodore Cracking Crew)

```json
{
  "id": "ccc-editor",
  "name": "CCC Music Editor (Commodore Cracking Crew)",
  "aliases": ["CCC_Editor"],
  "authors": ["Pex Tufvesson (Zax / Mahoney)"],
  "released": "1987 (Commodore Cracking Crew)",
  "status": "in-progress",
  "platform": "Native C64 music editor, coded by Pex Tufvesson under his then-handle 'Zax' for the Swedish group Commodore Cracking Crew (CCC). Tufvesson is now internationally known under his LATER handle 'Mahoney' for a completely separate, much later achievement (a 2014 filter-exploiting 8-bit sample-playback technique). Player-ID-fingerprinted across 25 files: 24 by Richard Sandén ('Zap', the disk's dominant composer, co-founder of Defiers alongside Zax/Tufvesson), 1 by 'Mahoney' himself — the tool's own author, using his own tool under his later handle.",
  "csdb_release": 149128,

  "memory": { "load_address": "Sample HVSC file traced (Blowin in the Wind): load $3fbf (init $4000, play $4027).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $4000.", "play": "Sample trace: $4027 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CSDb release 149128 ('CCC Music Editor', 1987, Commodore Cracking Crew — a Swedish group founded 23 Jan 1985, dissolved Sept 1987) explicitly credits: Code by 'Zax'; Music (25 bundled demo tunes) by 'Richard S. (Zap)' and 'Pex T. (Zax)'.",
    "ZAX = PEX TUFVESSON = MAHONEY, CONFIRMED via two independent sources agreeing on dates: CSDb scener id=3701's handle history (Zax 1985-Sept 1987 → Flimmer/Flimmer I 1986-87 → Mahoney from Sept 1987) and Pex Tufvesson's own personal timeline page (livet.se/mahoney/timeline.php), which independently states he used 'Zax' in Commodore Cracking Crew before renaming to 'Mahoney' in 1987 and co-founding Defiers that same year. The exact handle-transition date and the CCC-to-Defiers move match across both sources — this is the tool's AUTHOR, and he has exactly 1 file of his own tagged with his own tool in this project's dataset, i.e. genuine self-use, not a coincidence.",
    "TUFVESSON'S FAME AS 'MAHONEY' IS A SEPARATE, MUCH LATER ACHIEVEMENT: the 'Mahoney technique' (an 8-bit sample-playback method exploiting SID 6581/8580 filter analog imperfections, achieving near-CD-quality digi audio) is dated to 15 February 2014 on his own site — 27 years after this 1987 editor. No source connects the two beyond being the same person's career at very different points; do not conflate the achievements.",
    "ZAP = RICHARD SANDÉN (the dominant composer, 24 of 25 files) — CSDb scener id=3702 (later handle 'Conan') shows earlier handles Zap/Pimpernel/Bilbo (1987), co-founder of Defiers alongside Zax, died 23 December 2012. He and the tool's author left Commodore Cracking Crew together in 1987 to found Defiers.",
    "Commodore Cracking Crew was primarily a CRACKING/scene group (per CSDb), not a music-tool publisher — its 1987 dissolution roughly coincides with its core members (Zax, Zap) departing to found Defiers.",
    "Not confirmed which exact JCH-lineage tool (if any) this shares code with — no evidence of any technical relationship to other tools in this KB was found. No known relationship to any other composer/tool already carded (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "CSDb release 149128 (CCC Music Editor, full credits): https://csdb.dk/release/?id=149128",
    "CSDb scener 3701 (Zax → Flimmer → Mahoney handle history): https://csdb.dk/scener/?id=3701",
    "CSDb scener 3702 (Zap → Conan, Richard Sandén, d. 2012): https://csdb.dk/scener/?id=3702",
    "Pex Tufvesson's own timeline (CCC/Zax era, Defiers founding, handle transition): https://livet.se/mahoney/timeline.php",
    "8bitlegends.com — Conan/Richard Sandén obituary: https://8bitlegends.com/conan-defiers/",
    "Demozoo — Pex Tufvesson: https://demozoo.org/sceners/726/",
    "Local dataset: 25 files tagged CCC_Editor, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `CCC_Editor` tag is a native C64 music editor written by Pex
Tufvesson — under his then-handle 'Zax' — for the Swedish group
Commodore Cracking Crew in 1987. Tufvesson is far better known today under
his later handle 'Mahoney', for a completely unrelated 2014 SID
sample-playback technique. Player-ID-fingerprinted across 25 files, mostly
by his co-founder-to-be Richard Sandén ('Zap'), with 1 file by Tufvesson
himself under his current handle.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **confirmed Zax =
Mahoney = Pex Tufvesson identity chain**, sourced from two independent
timelines agreeing on exact dates; the tool author's **own self-tagged
file**, genuine self-use rather than coincidence; and the explicit
**separation from his 2014 'Mahoney technique' fame**, a different
achievement 27 years later.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `CCC_Editor`-tagged `.sid` +
trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `CCC_Editor` `.sid` (Blowin in the Wind, composed by
Richard Sandén): load `$3fbf`, init `$4000`, play `$4027`, **89 register
writes / 200 frames** (0 filter writes). Internals undocumented; memory
map/format/effects are `TODO`.

## Sources

See the `sources` array — CSDb (release + 2 scener profiles), Pex
Tufvesson's own timeline, 8bitlegends.com, and Demozoo.

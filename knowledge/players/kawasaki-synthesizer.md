# Kawasaki Synthesizer (Ryo Kawasaki)

```json
{
  "id": "kawasaki-synthesizer",
  "name": "Kawasaki Synthesizer (Ryo Kawasaki)",
  "aliases": ["Kawasaki_Synthesizer"],
  "authors": ["Ryo Kawasaki"],
  "released": "1983 (Sight & Sound Music)",
  "status": "in-progress",
  "platform": "Native C64 music editor/synthesizer package ('The Performer' + 'The Composer' two-disk set), using the SID chip's programmable filter. Personally written by real-world jazz-fusion guitarist and guitar-synthesizer pioneer Ryo Kawasaki (1947-2020) — a confirmed, non-coincidental celebrity connection, unusual among this KB's cards. Player-ID-fingerprinted across 25 files, all by Kawasaki himself.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (12_8): load $1000 (init $1000, play $1003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $1000.", "play": "Sample trace: $1003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sample — notable given the product used the SID filter as a headline feature per its own marketing; possibly filter usage is tune-dependent)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED HIGH-CONFIDENCE IDENTITY MATCH — a rare 'unlikely celebrity connection' that actually checks out: the C64-scene 'Ryo Kawasaki' (HVSC lists country JAPAN) is the SAME PERSON as the real jazz-fusion guitarist Ryo Kawasaki (1947-2020, Tokyo-born), a pioneer of guitar synthesizer technology who worked with Roland/Korg and developed a guitar-synth interface from a modified Roland GR-500/GS-500 in 1979. This is not a name coincidence — his own Wikipedia biography explicitly states: when the C64 came out as 'the first computer with a music synthesizer chip built-in... Kawasaki became fascinated by the possibilities', and he personally wrote FOUR C64 programs: Kawasaki Synthesizer, Kawasaki Rhythm Rocker, Kawasaki Magical Musicquill, and Kawasaki MIDI Workstation, 'distributed by Sight and Sound Music'.",
    "Wikipedia has a DEDICATED ARTICLE on this exact product ('Kawasaki Synthesizer'): created 1983, a two-disk package ('The Performer' + 'The Composer'), built around the SID chip's programmable filter; contemporary press called it 'reasonably priced, brilliantly programmed, attractively packaged'.",
    "CSDb only has CRACK release entries for the product (e.g. 'Kawasaki Synthesizer - The Performer', cracked by Cracker Force Nijmegen) — these crack credits belong to unrelated scene crackers, NOT Kawasaki, who released this as commercial software outside the crack/demo scene and has no CSDb scener profile of his own.",
    "Tune titles '12_8'/'12_8_2' plausibly reference 12/8 jazz time signature, fitting a professional jazz musician's naming convention — but this specific inference is NOT confirmed by any source, only a reasonable reading given his real-world background. Flagged as unverified.",
    "AT LEAST TWO MORE, SEPARATELY-FINGERPRINTED KAWASAKI TAGS EXIST in this project's own data, beyond the 25 files documented here: `Ryo_Kawasaki` (3 files, NOW SEPARATELY CARDED as [[ryo-kawasaki-demo]] — a plausible self-promotional demo-disk driver, explicitly bearing the product's own name in its file titles, though not proven architecturally distinct at the code level) and `Kawasaki_Rhythm_Rocker` (1 file, 'Satellite_Station.sid', NOT yet carded) — a THIRD named product from the same 'FOUR C64 programs' list already cited in this card's own Wikipedia source. A discrepancy was also found: Wikipedia's own 'Kawasaki Synthesizer' article states the PRODUCT bundled a techno track called 'Satellite Station' — but this project's own data instead tags that exact file under `Kawasaki_Rhythm_Rocker`, not this tag, suggesting either a Wikipedia conflation of his two products or genuine engine reuse across them. Left unresolved, flagged for a future card.",
    "Died 13 April 2020, Tallinn, Estonia; his death was covered by Billboard, Guitar.com, Guitar World, JazzTimes, and Wax Poetics, all of which also cover his synth-pioneer history (though not specifically the C64 software in most cases — that detail comes mainly from his own Wikipedia page and the dedicated product article).",
    "Not in SIDId's byTag metadata beyond the bare author string (checked directly — no separate name/comment/reference fields for this tag). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Rob Hubbard, Martin Galway, Chris Huelsbeck, Georg Brandt, and the full roster of composer-driver cards — none found, unsurprising given his outsider/commercial, non-scene origin).",
    "No public disassembly or source (not in the realdmx RE repo; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Kawasaki, Ryo - JAPAN')",
    "Wikipedia — Ryo Kawasaki (biography, C64 software authorship, guitar-synth pioneer work): https://en.wikipedia.org/wiki/Ryo_Kawasaki",
    "Wikipedia — Kawasaki Synthesizer (dedicated article on this exact product): https://en.wikipedia.org/wiki/Kawasaki_Synthesizer",
    "CSDb release — Kawasaki Synthesizer - The Performer (crack, unrelated crackers credited): https://csdb.dk/release/?id=129921",
    "Billboard obituary (2020): https://www.billboard.com/articles/news/9358554/ryo-kawasaki-obit",
    "Local dataset: 25 files tagged Kawasaki_Synthesizer, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Kawasaki_Synthesizer` tag is a native C64 music editor/synthesizer
package, personally written in 1983 by real-world jazz-fusion guitarist and
guitar-synthesizer pioneer Ryo Kawasaki — a genuine, confirmed celebrity
connection, not a coincidental name match. Player-ID-fingerprinted across
25 files, all by Kawasaki himself.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **confirmed identity
match**, sourced from Kawasaki's own Wikipedia biography and a dedicated
Wikipedia article on this exact product, not inferred from name similarity
alone. Also note the **absence of filter writes** in the traced sample
despite the product's SID-filter-centric marketing, and the **unverified
12/8 time-signature naming theory**.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Kawasaki_Synthesizer`-tagged
`.sid` + trace.

## Verification

**Playback + entry points confirmed (2026-07-14) — `status: in-progress`.**
Traced a real HVSC `Kawasaki_Synthesizer` `.sid` (12_8): load `$1000`, init
`$1000`, play `$1003`, **51 register writes / 50 frames** (0 filter
writes). Internals undocumented; memory map/format/effects are `TODO`.

## Sources

See the `sources` array — HVSC Musicians.txt, two Wikipedia articles, CSDb,
and a Billboard obituary.

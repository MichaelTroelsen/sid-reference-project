# Songsmith (Loadstar)

```json
{
  "id": "loadstar-songsmith",
  "name": "Songsmith (Loadstar)",
  "aliases": ["Loadstar_SongSmith", "Songsmith"],
  "authors": ["TODO: unconfirmed (CSDb: 'no credits found'; associated with Loadstar contributors, not sourced)"],
  "released": "TODO: year unconfirmed (distributed via Loadstar disk magazine)",
  "status": "stub",
  "platform": "Native C64 music editor distributed via Loadstar, the US Commodore disk magazine. Open-source/license status unconfirmed.",
  "csdb_release": 122855,

  "memory": {
    "load_address": "TODO",
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
    "A US disk-magazine tool, distinct from the European demoscene editors. Distributed via Loadstar — the US Commodore 64/128 disk magazine (Shreveport, Louisiana; first issue 1984, ~199 issues over ~15 years). Used to compose Loadstar's own music content (e.g. 'The Beatitudes' was 'composed on SongSmith and SIDEditor by Dave Moorman').",
    "AUTHOR UNCONFIRMED: CSDb lists 'no credits found'; sidid.nfo has no author field. Fender Tucker (Loadstar editor 1987-2000) and Dave Moorman (later managing editor, prolific Loadstar programmer) are associated with Loadstar but neither is sourced as SongSmith's coder — do NOT assert either.",
    "ATTRIBUTION LANDMINE (caught during research): AI web-search summaries repeatedly asserted 'Miłosz Ignatowski (Longhair)' as the author — that appears in NO primary source and is a hallucinated bleed-over from the HardTrack Composer card. Explicitly rejected; do not record it.",
    "Concentrated, US-centric: 309 files across only 11 composers (Dave Marquis, Alan Beggerow, Debby Cruz, John Davis) — consistent with a magazine-bundled hobbyist tool, not a scene-standard editor. CSDb's release credits several Debby Cruz tunes.",
    "Replay internals (load address, ZP, init/play, data format, effect set), author, year, and version history: ALL UNKNOWN — TODO. The .d64 on CSDb + the 309 SIDs are the only artifacts to reverse-engineer from."
  ],
  "sources": [
    "CSDb Songsmith release (the tool .d64, bundled tunes): https://csdb.dk/release/?id=122855",
    "sidid.nfo (the Loadstar_SongSmith tag definition; no author field): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Loadstar magazine context: https://en.wikipedia.org/wiki/Loadstar_(magazine) ; https://setsideb.com/the-history-of-loadstar/",
    "Local dataset: 309 files tagged Loadstar_SongSmith across 11 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

Songsmith is a native C64 music editor distributed via **Loadstar**, the
long-running US Commodore disk magazine. It was used to compose Loadstar's own
music content, and its footprint here is small and US-centric — 309 files
across just 11 composers (Loadstar contributors like Dave Marquis, Debby Cruz).
Unlike the European scene editors, almost nothing is documented about its
authorship or internals.

## Quirks & gotchas

See the `quirks` array. Load-bearing: **author and year are genuinely unknown**
(CSDb "no credits"; don't guess Fender Tucker/Dave Moorman); an
**attribution landmine** (AI summaries hallucinated "Longhair" — rejected); and
its identity as a **US disk-mag tool**, distinct from the scene editors. All
internals `TODO`.

## Disassembly notes

None done here; nothing published. The CSDb `.d64` and the 309 tagged SIDs are
the only artifacts — a disassembly (traced via `sidm2-siddump`) is the only
route to any replay facts.

## Verification

**Not verified — `status: stub`, and unusually thin.** Only the Loadstar-
magazine provenance and platform are solid; author, year, versions, and the
entire replay routine are `TODO`.

## Sources

See the `sources` array — the CSDb Songsmith release, the SIDId tag definition
(no author field), and Loadstar-magazine background.

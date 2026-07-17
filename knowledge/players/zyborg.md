# Zyborg

```json
{
  "id": "zyborg",
  "name": "Zyborg",
  "aliases": ["Zyborg"],
  "authors": ["Mikkel Jakobsen (Zyborg)"],
  "released": "1990 (earliest confirmed tune, \"Nice'n'Easy\", Atrix era) through 1992 (Dunex era)",
  "status": "stub",
  "platform": "Native C64 — a personal, hand-coded music routine used by its own author/coder to embed music in his own demo intros and standalone tunes. No evidence it was ever packaged or distributed as a standalone editor/tool.",
  "csdb_release": null,

  "memory": {
    "load_address": "$1000 (PSID header value, identical on every CSDb-checked file: Black_Out csdb.dk/sid/?id=32216, Colored id=40855, Nonsense id=40857, Nice'n'Easy id=38063, Zyborg_01 id=32213 — all read $1000)",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "$1000 (= load address; PSID header, consistent across all 5 sampled files, see memory.load_address citation)",
    "play": "$1003 (PSID header, consistent across all 5 sampled files, see memory.load_address citation)"
  },
  "speed": "TODO: call-rate/IRQ mechanism not established — only the PSID header's load/init/play addresses are known, not how play is actually driven",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly performed",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Extreme composer concentration: all 10 files in this dataset tagged 'Zyborg' are by the composer Zyborg (Mikkel Jakobsen) himself (verified by scanning every data/composers/*.json record's player tag) — a textbook personal/self-coded routine, not a published tool (cf. CLAUDE.md's Rob_Hubbard case, which was spread across 51 composers; this one is 100% single-composer, more extreme).",
    "Load/init/play addresses ($1000/$1000/$1003) are identical across every one of the 5 CSDb sid-entries checked (Black_Out, Colored, Nonsense, Nice'n'Easy, Zyborg_01), spanning tunes released 1990-1992 across two different scene groups (Atrix, Dunex). That consistency across years and productions is evidence this really is one reused player routine, not per-production regenerated/relocated code the way e.g. DefleMask's export is (contrast knowledge/players/deflemask.md, which leaves load/init/play TODO for exactly the opposite reason — no fixed addresses).",
    "CSDb has no 'tool'/player release entry for Zyborg — only a scener profile (csdb.dk/scener/?id=6020) and per-tune sid entries. Never released or documented as a standalone editor.",
    "Mikkel Jakobsen's CSDb scener role is listed as Coder/Graphician/Musician/Swapper, not solely Musician — consistent with a coder who wrote his own playback routine rather than a musician who adopted someone else's tool.",
    "SIDId's sidid.nfo entry for the 'Zyborg' tag records only an author string ('Mikkel Jakobsen (Zyborg)') — no released year, no CSDb reference, no technical comment. All release-year and address facts here come from cross-referencing individual CSDb sid entries, not from SIDId."
  ],
  "sources": [
    "data/sidid.json byTag['Zyborg']: {\"author\":\"Mikkel Jakobsen (Zyborg)\"} — no release/reference/comment fields",
    "knowledge/COVERAGE.md rank #30, 10 files, grouped raw tag 'Zyborg'",
    "Local aggregate over data/composers/*.json: all 10 'Zyborg'-tagged files have composer name 'Zyborg' (100% self-authored)",
    "CSDb scener profile (Mikkel Jakobsen / Zyborg, Denmark, Coder/Graphician/Musician/Swapper, member of Atrix 1989-1991 and Dunex 1991-1993): https://csdb.dk/scener/?id=6020",
    "CSDb sid entries (load/init/play + release year cross-check): https://csdb.dk/sid/?id=32213 (Zyborg_01, 1992), https://csdb.dk/sid/?id=32216 (Black_Out), https://csdb.dk/sid/?id=40855 (Colored), https://csdb.dk/sid/?id=40857 (Nonsense, 1992/Dunex), https://csdb.dk/sid/?id=38063 (Nice'n'Easy, 1990/Atrix)"
  ]
}
```

## Overview

Zyborg is the Player-ID tag for a small, self-contained music routine written and
used exclusively by Danish C64 scener Mikkel Jakobsen ("Zyborg"), a coder/
graphician/musician active with the groups Atrix (1989-1991) and Dunex
(1991-1993). Every one of the 10 files tagged "Zyborg" in this project's dataset
is authored by Zyborg himself — there is no evidence of any other composer or
group ever using this routine, and CSDb has no standalone tool/release entry for
it, only a scener profile and per-tune sid entries. This is the classic
"personal in-demo routine" pattern (see CLAUDE.md's discussion of inferred
players and composer concentration): a coder who happened to also write music
built his own small player rather than adopting a published editor.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) composer concentration
here is total (10/10 files, one composer) — stronger signal than any of the
"likely personal routine" borderline cases discussed in CLAUDE.md; (2) despite
being a personal routine, the load/init/play addresses ($1000/$1000/$1003) hold
identically across every sampled file over a 3-year span and two different scene
groups, which is genuine (if thin) evidence of one reused routine rather than
one-off per-production code — worth flagging for whoever eventually disassembles
it, since it means a single init/play trace should generalize across all 10
files.

## Disassembly notes

None performed — this card is Tier 1+2 only (identity, usage, and CSDb-header
provenance). The load/init/play addresses recorded above come from CSDb's
displayed PSID header fields for each sid entry, not from opening the binary or
tracing execution. A real disassembly (starting from any of the 10 files, since
addresses are consistent) would be needed to fill memory layout, zero page,
speed model, and data format — none of that is guessed here.

## Verification

**Not verified — `status: stub`.** Only identity (SIDId author string), usage
(composer concentration from local data), and CSDb-published PSID header
metadata (load/init/play addresses, release years, group context) are recorded,
each with a citation. No source code or disassembly exists or was attempted, so
every Tier 3 field beyond the bare header addresses stays `TODO`.

## Sources

See the `sources` array — SIDId's `sidid.nfo` entry, this project's own
`data/composers/*.json` aggregate, the CSDb scener profile for Zyborg/Mikkel
Jakobsen, and five individual CSDb sid-entry pages used to cross-check
load/init/play addresses and release years.

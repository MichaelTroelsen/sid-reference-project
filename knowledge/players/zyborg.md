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
    "CORRECTED after full census (all 10 tagged files, not the earlier 5-file sample): 9 of the 10 files share load/init/play $1000/$1000/$1003 (Black_Out, Colored, Nonsense, Nice'n'Easy/id=38063, Zyborg_01/id=32213, Atrix_Intro_36/'New Oldie' id=52542, Dreamland id=32215, Sound_of_C id=32214, Wacky id=40856 — all via csdb.dk webservice type=sid). The 10th, Compotune (csdb.dk/sid/?id=47134, 1992/Dunex), is an outlier: load=$1000 but init=$1B00 and play=$1B12 — a different code layout from the rest. This weakens (does not eliminate) the 'one reused routine' reading: it may still be one routine relocated/extended for a longer compo piece, or a variant build; a real disassembly would be needed to tell which. The `entry.init`/`entry.play` fields above were left as originally recorded (majority pattern) per this pass's scope (no Tier 3 edits) — flagged here for whoever next touches Tier 3.",
    "CSDb has no 'tool'/player release entry for Zyborg — only a scener profile (csdb.dk/scener/?id=6020) and per-tune sid entries. Confirmed two ways: (1) Zyborg's full CSDb credits list (91 credited releases, cached locally at data/csdb/zyborg.json, fetched 2026-07-10) contains no release named 'Zyborg' or typed as a player/tool for one — his own tools are separately named ('Char-Editor', 'Noter', 'Memorypeeker V2.0', etc.); (2) targeted web searches for a 'Zyborg' C64 player/tool release across csdb.dk, Lemon64, and Forum64 (2026-07-31) returned nothing beyond the scener profile itself. `csdb_release` stays null on positive evidence of absence, not just an unfilled gap.",
    "Mikkel Jakobsen's CSDb scener role is listed as Coder/Graphician/Musician/Swapper, not solely Musician — consistent with a coder who wrote his own playback routine rather than a musician who adopted someone else's tool.",
    "SIDId's sidid.nfo entry for the 'Zyborg' tag records only an author string ('Mikkel Jakobsen (Zyborg)') — no released year, no CSDb reference, no technical comment. All release-year and address facts here come from cross-referencing individual CSDb sid entries, not from SIDId."
  ],
  "sources": [
    "data/sidid.json byTag['Zyborg']: {\"author\":\"Mikkel Jakobsen (Zyborg)\"} — no release/reference/comment fields",
    "knowledge/COVERAGE.md rank #30, 10 files, grouped raw tag 'Zyborg'",
    "Local aggregate over data/composers/*.json (data/composers/zyborg.json folder[]): full census of all 10 'Zyborg'-tagged files (of 15 total files by this composer; 5 others use Music_Assembler/FutureComposer/none), all 10 composer='Zyborg' (100% self-authored)",
    "CSDb scener profile (Mikkel Jakobsen / Zyborg, Denmark, Coder/Graphician/Musician/Swapper, member of Atrix 1989-1991 and Dunex 1991-1993): https://csdb.dk/scener/?id=6020",
    "Local cache data/csdb/zyborg.json (fetched 2026-07-10, depth=2 scener credits, 91 entries) — no 'Zyborg'-named tool/player release among his credits",
    "CSDb webservice type=sid, all 10 tagged files (full census, 2026-07-31): id=32213 Zyborg_01/'<?>' (1992/Dunex, $1000/$1000/$1003), id=32216 Black_Out (1990/Atrix, $1000/$1000/$1003), id=40855 Colored (1992/Dunex, $1000/$1000/$1003), id=40857 Nonsense (1992/Dunex, $1000/$1000/$1003), id=38063 Nice'n'Easy (1990/Atrix, $1000/$1000/$1003), id=52542 'New Oldie'/Atrix_Intro_36 (1990/Atrix, $1000/$1000/$1003), id=32215 Dreamland (1990/Atrix, $1000/$1000/$1003), id=32214 Sound_of_C (1992/Dunex, $1000/$1000/$1003), id=40856 Wacky (1992/Dunex, $1000/$1000/$1003), id=47134 Compotune (1992/Dunex, $1000/$1B00/$1B12 — outlier) — https://csdb.dk/sid/?id=<id> for each",
    "WebSearch 2026-07-31 for a 'Zyborg' C64 player/tool release across csdb.dk, lemon64.com, forum64.de: no results beyond the scener profile — supports csdb_release: null as a checked absence, not an unresearched gap"
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

See the `quirks` array. The load-bearing points: (1) composer concentration
here is total (10/10 files, one composer) — stronger signal than any of the
"likely personal routine" borderline cases discussed in CLAUDE.md; (2) a full
census of all 10 tagged files (not the earlier 5-file sample) shows 9 of 10
share load/init/play $1000/$1000/$1003 across a 3-year span and two scene
groups, but the 10th (Compotune, 1992) is an outlier at $1000/$1B00/$1B12 — so
"one reused routine" is still plausible but no longer proven identical; a real
disassembly of Compotune specifically would be needed to say whether it's the
same routine relocated/extended or a genuinely different build; (3) CSDb's own
`csdb_release` field stays `null` on positive evidence (no matching release in
Zyborg's full 91-entry credit list, and no hit on csdb.dk/Lemon64/Forum64
searches), not because the lookup was skipped.

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
`data/composers/zyborg.json` aggregate (full census of all 15 files by this
composer, 10 tagged 'Zyborg'), the CSDb scener profile and cached full credit
list for Zyborg/Mikkel Jakobsen, all 10 CSDb `type=sid` webservice records
(load/init/play + release year, fetched 2026-07-31 to complete the census),
and a targeted web search across csdb.dk/Lemon64/Forum64 confirming no
'Zyborg' tool/player release exists on CSDb.

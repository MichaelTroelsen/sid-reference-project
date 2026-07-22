# SadoTracker

```json
{
  "id": "sadotracker",
  "name": "SadoTracker",
  "aliases": ["SadoTracker"],
  "authors": ["Lasse Öörni (Cadaver) / Covert Bitops"],
  "released": "1999 (v1.1, CSDb release 72773; v1.2, CSDb release 6073) — Covert Bitops",
  "status": "verified",
  "platform": "Native C64 music editor (tracker), written by Cadaver himself; includes an integrated packer/relocator for producing standalone playable versions of tunes.",
  "csdb_release": 72773,

  "memory": {
    "load_address": "TODO: not documented in any source found",
    "zero_page": "DeepSID's curated player spec (data/players.json) states 'Approx 3-4 bytes in the $FB-$FF range' — no further breakdown of which addresses hold what.",
    "layout": "TODO: no memory map found; not disassembled here"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO: author's article describes the play routine as designed to use 'minimal rastertime (under 24 lines)' per the Pouët NFO, but no concrete frame/CIA speed model is documented",

  "data_format": {
    "order_list": "TODO: not documented",
    "patterns": "Author's own (hedged, written from memory years later) description in 'Building a musicroutine': pattern bytes are encoded-meaning, roughly $00-$5F note numbers, $60-$BF note-duration commands, $C0-$DF instrument-change commands, $E0-$EF arpeggio-change commands, $F0-$FE other commands (e.g. tie-note on/off), $FF end-of-pattern mark. Author's own caveat: 'I don't remember the exact meanings of all byte ranges but it went something like this' — treat as approximate, not disassembly-verified.",
    "instruments": "TODO: not documented",
    "wavetable": "TODO: not documented",
    "pulsetable": "TODO: article implies SadoTracker uses encoded command bytes rather than a separate table-driven pulse-modulation table (contrasted against 'more advanced routines' that use one), but this is an inference from the article's framing, not a stated fact — left TODO rather than asserted",
    "filtertable": "TODO: not documented"
  },
  "effects": {
    "encoding": "See data_format.patterns — same author quote/caveat applies.",
    "commands": {
      "0x00-0x5F": "note numbers",
      "0x60-0xBF": "note duration commands",
      "0xC0-0xDF": "instrument change commands",
      "0xE0-0xEF": "arpeggio change commands",
      "0xF0-0xFE": "other commands (e.g. tie-note on/off)",
      "0xFF": "end of pattern mark"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Two CSDb releases exist for the same tool: v1.1 (https://csdb.dk/release/?id=72773) and v1.2 (https://csdb.dk/release/?id=6073). Per the Pouët NFO, v1.1 'corrected a filter bug affecting odd time-lengths and optimized the frequency table by removing octave 7'; v1.2 swapped acptr/ciout for chrin/chrout and widened device-number support (8-31, enabling harddisk use). SIDId's dataset (data/sidid.json) references v1.1 (72773); DeepSID's curated players.json entry points at v1.2 (csdb_id 6073). Same author/tool, different point releases — don't treat the two ids as different players.",
    "Source code IS included in the release archive: the Pouët NFO for v1.2 states 'Source code is included with compilation requiring DASM.' This has not been fetched/read here (no disassembly performed) — a future pass could download sadotrak.zip (https://csdb.dk/getinternalfile.php/75465/sadotrak.zip or the mirror at https://cadaver.github.io/tools/sadotrak.zip) and read the DASM source directly, which would let memory/entry/format fields move from TODO to confirmed.",
    "Author (Cadaver) explicitly discontinued it: the Pouët NFO quotes him saying 'this program won't be developed in the future.'",
    "Author's own technical article 'Building a musicroutine' (cadaver.github.io/rants/music.html) name-checks SadoTracker twice: once for its pattern-byte encoding scheme (see data_format.patterns, self-described as an imprecise memory of the design), and once admitting its vibrato implementation 'is kind of slow' (frequency-difference-based vibrato/slide speed, the Rob Hubbard C=Hacking Issue 5 method).",
    "The Pouët NFO frames v1.2 as Cadaver's 'second attempt at writing a music editor on C64' — implying an earlier, unnamed player by the same author. Not enough evidence to assert a derives_from/successor_of edge since that earlier tool is never named or identified in any source checked.",
    "Composer concentration in the local dataset (17 files across 5 composers, per data/composers/*.json): Cadaver himself accounts for 8/17 (47%), Dosoo for 5/17 (29%), and Asterion/Michal Hoffmann/Stefano Palmonari make up the rest 1-2 files each. Heavily concentrated among the author and a small circle — consistent with a small-scene/author-adjacent routine rather than a widely adopted general-purpose tool, even though the source was published."
  ],
  "sources": [
    "SIDId entry: data/sidid.json byTag.SadoTracker (author 'Lasse Öörni (Cadaver)', released '1999 Covert Bitops', reference https://csdb.dk/release/?id=72773)",
    "DeepSID curated player spec: data/players.json (title 'SadoTracker', developer Cadaver, csdb_id 6073, zero_pages 'Approx 3-4 bytes in the $FB-$FF range')",
    "CSDb release v1.1: https://csdb.dk/release/?id=72773",
    "CSDb release v1.2: https://csdb.dk/release/?id=6073",
    "Author's own site (Covert Bitops C64 page), tools list: https://cadaver.github.io/tools.html",
    "Pouët NFO (version history, source-code note, discontinuation quote): https://www.pouet.net/prod_nfo.php?which=26221",
    "Author's technical article, name-checks SadoTracker's pattern encoding and vibrato: https://cadaver.github.io/rants/music.html",
    "Local dataset: 17 files tagged SadoTracker, rank 11 among uncarded families at the time this card was written (knowledge/COVERAGE.md)"
  ]
}
```

## Overview

SadoTracker is a native C64 music editor (tracker) written entirely by Lasse
"Cadaver" Öörni of the Finnish group Covert Bitops in 1999, released in two
point versions (v1.1 and v1.2). It's a small, personal tool — Cadaver
"handled all code, music, and graphics" himself — used mainly for his own
game/demo soundtracks (Advanced Action, Escape From New York, Metal Warrior
2). It matters here less for reach (17 files across 5 composers in the local
dataset, half of them Cadaver's own) than for provenance quality: the author
still runs a personal site documenting it, wrote a public retrospective
article about designing its music routine, and states plainly that its
source code shipped in the release archive — a rare case where the identity
research surfaced *real*, if imprecise and self-caveated, engine detail
straight from the author, without any disassembly being performed.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) **two CSDb release
ids exist for the same tool** (v1.1 = 72773, v1.2 = 6073) and different local
data sources cite different ones — don't split them into separate players;
(2) the pattern-encoding byte ranges recorded here come from the **author's
own years-later recollection**, explicitly hedged ("I don't remember the
exact meanings of all byte ranges but it went something like this") — real
and citable, but not disassembly-grade certainty.

## Disassembly notes

None performed. The release archive reportedly bundles DASM-buildable 6502
source (per the Pouët NFO) but it has not been downloaded or read here. That
download (`sadotrak.zip`, linked in `sources`) is the concrete next step for
promoting this card past `in-progress` — reading the real source would give
authoritative memory map, entry points, and exact command-byte values instead
of the author's approximate recollection.

## Verification

**Disassembly/reassembly pass (2026-07-22) — status: verified.**
- Asterion/Alle_Psallite.sid: 55 diffs (97.12%), 51 src/4 PRG, r:185 p:185.
- Cadaver/Advanced_Action_Movie_Simulator.sid: 33 diffs (98.13%), 31 src/2 PRG, r:162 p:162.

Both MATCH. All runtime fields TODO.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), DeepSID's curated
`data/players.json` entry, both CSDb release pages (v1.1 72773 / v1.2 6073),
the author's own Covert Bitops tools page, the Pouët NFO for v1.2, and the
author's "Building a musicroutine" retrospective article.

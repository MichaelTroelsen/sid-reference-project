# Mindcooler

```json
{
  "id": "mindcooler",
  "name": "Mindcooler",
  "aliases": ["Mindcooler"],
  "authors": ["Mindcooler"],
  "released": "TODO: no explicit tool-release date — both tagged tunes (Acid Lindgren, MSP430G2202 Greatest Hits) carry CSDb 'Released' field '2015 Sys5' (https://csdb.dk/sid/?id=51879, https://csdb.dk/sid/?id=51147), which is each tune's own release, not a tool release date",
  "status": "stub",
  "platform": "native C64, hand-coded/embedded routine — DeepSID's per-file player_type field records 'Normal built-in' for both tagged files (data/composers/mindcooler.json), and no dedicated CSDb tool/release page exists under 'Mindcooler' (checked CSDb search and the composer's own scener page https://csdb.dk/scener/?id=14259, which credits him as coder/musician but documents no separate player/editor tool)",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent). No CSDb tool/release page found under this name: a CSDb site search for 'Mindcooler player' returned no results, and the composer's own CSDb scener page (id 14259) credits him as coder/musician/graphician but documents no separate player/editor tool.",
    "The tag is exactly the composer's own handle ('Mindcooler') — self-titled Player-ID tags are the strongest local signal of a personal, hand-coded, never-distributed routine (matching this project's convention seen elsewhere, e.g. Mark_Wilson, Russell_Lieblich).",
    "Both locally-tagged files ('Acid Lindgren' csdb_id 51879, 'MSP430G2202 Greatest Hits' csdb_id 51147) are by Mindcooler himself — single-composer concentration, 2/2 (full census of both tagged files, not a sample).",
    "Both tagged tunes carry the same CSDb 'Released' field, '2015 Sys5' — this is each tune's own release credit, not evidence of a tool release date; recorded as such rather than promoted into `released`.",
    "Composer profile (data/composers/mindcooler.json): Jens Björnhager, handle Mindcooler, Sweden, born 1981-08-24, CSDb scener id 14259 — same person as the composer behind the sibling 'Mindcooler_2' tag/card, but this bare 'Mindcooler' tag is a distinct Player-ID fingerprint from 'Mindcooler_2' in the local dataset and no shared-routine evidence was found to assert an edge between them.",
    "DeepSID's per-file player_type field records 'Normal built-in' for both tagged files, consistent with an embedded/hand-coded routine rather than a distributed editor."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged Mindcooler, 1 composer (Mindcooler) — data/composers/mindcooler.json folder[] (census of both: Acid Lindgren csdb_id 51879, MSP430G2202 Greatest Hits csdb_id 51147)",
    "CSDb tune pages: https://csdb.dk/sid/?id=51879 and https://csdb.dk/sid/?id=51147 (Released field '2015 Sys5' on both, no player/tool listed)",
    "CSDb search for a 'Mindcooler' player/tool release: https://csdb.dk/search/?seinsel=all&search=Mindcooler+player (no results)",
    "CSDb scener page: https://csdb.dk/scener/?id=14259 (credits: coder/graphician/musician, no player tool)"
  ]
}
```

## Overview

`Mindcooler` is a Player-ID-only tag (no SIDId entry, no CSDb tool page
found after a CSDb search and a check of the composer's own scener page)
that is itself the composer's own handle — the strongest available local
signal of a personal, hand-coded, never-distributed routine. Both
locally-tagged files ("Acid Lindgren", "MSP430G2202 Greatest Hits") are by
Mindcooler himself — Jens Björnhager, Sweden (CSDb scener id 14259) — both
released 2015 per their own CSDb pages ("2015 Sys5"). DeepSID marks both as
`player_type: Normal built-in`, consistent with an embedded routine rather
than a distributed editor. A related but distinct raw tag, `Mindcooler_2`,
covers two other files by the same composer and has its own card
(`mindcooler-2.md`); no evidence was found to assert a shared-routine edge
between the two tags.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) no SIDId entry, no CSDb tool page
found (CSDb search + scener page both checked); (2) self-titled tag naming
convention strongly suggests a personal routine; (3) single-composer
concentration (2/2 files, full census); (4) both tagged tunes' CSDb
`Released` field is 2015, but that is a tune date, not a tool-release date.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check) and
`data/composers/*.json`. `status: stub`.

## Sources

See the `sources` array — SIDId absence check, the local composer
aggregation (full census of both tagged files), and CSDb (tune pages,
site search, scener page).

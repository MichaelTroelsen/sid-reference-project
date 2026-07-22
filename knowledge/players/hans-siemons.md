# Hans Siemons (player routine)

```json
{
  "id": "hans-siemons",
  "name": "Hans Siemons (player routine)",
  "aliases": ["Hans_Siemons"],
  "authors": ["Hans Siemons"],
  "released": "~1987-1988 (A.R.K.C. era)",
  "status": "verified",
  "platform": "Dutch coder Hans Siemons's own playroutine, mostly used by fellow musician Ward Selles — the same 'coder writes it, musician friend uses it' pattern already documented in this KB's [[olav-morkrid]] card, but here backed by REAL, sourced evidence (not just inference): both men were confirmed members of the same 1987-1988 Dutch demo group, A.R.K.C. Player-ID-fingerprinted across 8 files: 6 by Ward Selles, 2 by Siemons himself.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file traced (Dignified tune 2, composed by Ward Selles): load $2000 (init $2000, play $2003).", "zero_page": "TODO (no disassembly)", "layout": "Not documented." },
  "entry": { "init": "Sample trace: $2000.", "play": "Sample trace: $2003 (called in IRQ)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter-heavy — 44 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CODER/MUSICIAN PAIR, CONFIRMED WITH REAL EVIDENCE (not just filename correlation): both Hans Siemons and Ward Selles were members of the same CSDb group, 'Anti Ronny Kuysters Club' (A.R.K.C., Netherlands, founded 1987, dissolved 1989) — Siemons as Coder/Graphician (joined 1987, left 1988), Selles as Musician (ex-member). This is genuine, first-party overlap in the same crew, a stronger basis than the coincidental-tag-name pattern seen in some other 'coder writes/musician uses' cards in this KB.",
    "SIEMONS'S CSDb CREDITS ARE ALMOST ENTIRELY CODE (plus some Graphics/Text/Ripping) across ~1986-1988 one-file demos — no substantial Music credits found beyond this specific tag, consistent with him being primarily a coder who also wrote this one playback routine.",
    "SIEMONS'S OWN FIRST-PARTY TRIVIA NOTE (his CSDb page, presumably self-submitted) explains an identity history: 'TFS was actually not a person, but a group of two. One person did 99,99% of the work, the other was just there when the name was put on paper. That's why at some point the name was changed. And at some point having nicknames just was not so cool anymore, so I changed to my real name.' — i.e. he moved from a shared/joke group handle ('TFS'/'The Final Solution') through other handles ('Tycoon', 'Docter Chip') to using his real name.",
    "HVSC LISTS A GROUP FOR SIEMONS ('The Leading Vocal') THAT DOES NOT APPEAR ANYWHERE ON CSDb — no group page, no search hits found. Left as genuinely unresolved (possibly a name variant CSDb doesn't index, or predates/postdates its coverage) rather than guessed at.",
    "STIL.txt shows no playback-technique commentary for either composer — entries are mostly cross-reference 'similar to' notes between tunes sharing this same player tag (e.g. Dignified tune 2 noted as similar to another Hans_Siemons-tagged tune), not technical documentation of the routine itself.",
    "No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (Siemons: 'The Leading Vocal'; Selles: 'Quard / Prime / Quasar Soft'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Hans Siemons (id=6846, handle history incl. TFS/Tycoon/Docter Chip, first-party trivia quote, A.R.K.C. membership): https://csdb.dk/scener/?id=6846",
    "CSDb scener — Ward Selles (id=6470, A.R.K.C. ex-member, Musician): https://csdb.dk/scener/?id=6470",
    "CSDb group — Anti Ronny Kuysters Club / A.R.K.C. (id=2721, Netherlands, 1987-1989, confirms both members): https://csdb.dk/group/?id=2721",
    "This project's own cached CSDb data: data/csdb/hans-siemons.json, data/csdb/ward-selles.json (fetched 2026-07-10)",
    "This project's own HVSC data: data/hvsc/Musicians.txt, data/hvsc/STIL.txt",
    "Local dataset: 8 files tagged Hans_Siemons, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Hans_Siemons` tag is Dutch coder Hans Siemons's own playroutine, used
almost entirely by his fellow demo-crew member, musician Ward Selles — the
same coder-writes/musician-uses pattern already seen in this KB's
[[olav-morkrid]] card, but here backed by confirmed shared group
membership rather than just an inference from usage patterns. Player-ID-
fingerprinted across 8 files, mostly Selles's.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **confirmed shared
A.R.K.C. group membership**, real sourced evidence for the coder/musician
pairing; a **first-party identity-history quote** from Siemons's own CSDb
trivia field; and an **unresolved HVSC/CSDb group-name discrepancy**, left
honestly open.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL technical note). A
future `verified` needs an original disassembly of a `Hans_Siemons`-tagged
`.sid` + trace.

## Verification

**Disassembly/reassembly pass (2026-07-22) — status: verified.** Two files from different composers: Siemons_Hans + Selles_Ward. Both register-write exact. All runtime fields TODO.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 scener profiles + 1
group), and this project's own cached CSDb/HVSC data.

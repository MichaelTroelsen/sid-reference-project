# MusicSlave (player routine)

```json
{
  "id": "musicslave",
  "name": "MusicSlave (player routine)",
  "aliases": ["MusicSlave"],
  "authors": ["Stefan Siegert (Zieg)"],
  "released": "TODO: no RELEASED/REFERENCE field; data/sidid.json has no entry for this tag",
  "status": "stub",
  "platform": "TODO: no CSDb tool release or source repo found. Web search corroborates that Stefan Siegert 'programmed a music driver he eventually called MusicSlave' (see sources) — an in-house driver he named himself, not necessarily distributed as a standalone tool for others.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG: all 5 locally-tagged files (data/composers/stefan-siegert.json — 'Gotcha!', 'Jack Me', 'The Look', 'Sirius', 'Anti-Zieg-Demo') are credited to Stefan Siegert alone (handle 'Zieg'), matching this project's 'likely a personal routine' signal — a named, self-titled driver used only by its own author in this dataset.",
    "The tool's own name ('MusicSlave') is independently corroborated outside SIDId: general web search results state Stefan Siegert 'programmed a music driver he eventually called MusicSlave' and composed tracks including 'Burning Ivy' (1988), 'Gotcha!' (1990), 'Sirius' (1989) — titles that overlap with this project's own tagged files, supporting that this is genuinely Siegert's named driver rather than a coincidental SIDId label.",
    "No SIDId entry exists for this tag (data/sidid.json checked, absent) — identity here rests on local composer credit plus general web corroboration, not the SIDId fingerprint database."
  ],
  "sources": [
    "data/sidid.json: no entry for 'MusicSlave' (checked, absent)",
    "Local dataset: data/composers/stefan-siegert.json — 5 files tagged 'MusicSlave', all authored 'Stefan Siegert' / 'Stefan Siegert (Zieg)'; see knowledge/COVERAGE.md row #31 (5 files)",
    "VGMPF wiki, Stefan Siegert: https://vgmpf.com/Wiki/index.php?title=Stefan_Siegert",
    "CSDb release, 'Burning Ivy' by Stefan Siegert (1988): https://csdb.dk/release/?id=63540"
  ]
}
```

## Overview

`MusicSlave` is a self-titled player/driver by German composer **Stefan
Siegert ("Zieg")**. All 5 locally-tagged files belong to Siegert alone,
matching the classic personal-routine signature. No SIDId fingerprint entry
exists for this tag, but general web research independently corroborates that
Siegert "programmed a music driver he eventually called MusicSlave," and his
known track titles (Gotcha!, Sirius) overlap with the locally-tagged files —
consistent evidence, not a coincidental label.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer concentration plus
independent (non-SIDId) web corroboration of the driver's name and author.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source, tool
release, or disassembly located.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established.

## Sources

See the `sources` array — local composer-file aggregation, VGMPF's Stefan
Siegert page, and one CSDb release page.

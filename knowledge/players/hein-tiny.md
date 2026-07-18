# Hein_tiny

```json
{
  "id": "hein-tiny",
  "name": "Hein_tiny",
  "aliases": ["Hein_tiny"],
  "authors": ["Hein Pieter Holt (Hein Holt / Hein / Vision)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be a minimal/personal replay routine (the '_tiny' naming convention seen elsewhere in this dataset denotes a composer's own small routine) by Hein Holt — a separate, undocumented signature distinct from his other, already-carded named tools (Virtuoso, [[virtuoso]]) — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
  "csdb_release": null,

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
    "SIDId's sidid.nfo has NO entry for 'Hein_tiny' (checked) — this is a Player-ID-only signature, not a documented/published tool. Contrast with the SAME author's Virtuoso (already carded, knowledge/players/virtuoso.md), which DOES have a full SIDId entry with a CSDb release reference (2015, Vision) — the absence here suggests Hein_tiny is an earlier or more casual, never-packaged routine.",
    "100% single-composer concentration: all 4 locally tagged files ('Airport', 'Lift Off', 'Humming a Cheesy Melody', 'Lift Off V2') belong to Hein Holt himself (data/composers/hein-holt.json). No evidence this routine's code is shared with Virtuoso or the sosperec editor (also praising Hein Holt's playroutine work per Lemon64 quotes cited in knowledge/players/sosperec.md) — no edge asserted absent a real disassembly comparison.",
    "Hein Holt (Netherlands, b. 13 Nov 1973, handle Hein / Vision, also 'Hein Design') is a known, prolific C64 music-tool author in this KB already — see [[virtuoso]] and the quote of him in [[sosperec]] — making this tag's total SIDId silence notable: even a well-documented tool author has at least one small, unpublished routine.",
    "No public disassembly or source found. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for 'Hein_tiny': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/hein-holt.json (profile: full_name Hein Pieter Holt, short_name 'Hein Holt', handles 'Hein Design', country Netherlands, born 1973-11-13, notable 'Created Virtuoso', csdb_id 8054)",
    "Existing sibling KB cards, cross-checked for code-sharing evidence (none found): knowledge/players/virtuoso.md, knowledge/players/sosperec.md",
    "Local dataset: 4 files tagged Hein_tiny, single composer (Hein Holt) — see data/composers/hein-holt.json folder[]"
  ]
}
```

## Overview

Hein_tiny is the Player-ID tag for a small C64 replay routine used
exclusively by **Hein Holt** (handle Hein, of Vision; Netherlands), the
same composer who authored the fully documented [Virtuoso](virtuoso.md)
tracker (2015). Unlike Virtuoso, this tag has **no SIDId entry at all**,
suggesting an earlier, more casual, or never-packaged personal routine. All
4 locally tagged files are his own.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) 100% single-composer usage; (2)
SIDId's total silence on this tag contrasts with the SAME author's
well-documented Virtuoso entry; (3) no evidence of code-sharing with
Virtuoso or the sosperec editor is asserted — this is a distinct,
undocumented signature.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/hein-holt.json`, `data/sidid.json`) plus cross-reference
against sibling KB cards. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer profile, and sibling KB cards for Hein Holt's other tools.

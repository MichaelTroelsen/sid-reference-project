# Odie/Pulse

```json
{
  "id": "odie-pulse",
  "name": "Odie/Pulse",
  "aliases": ["Odie/Pulse"],
  "authors": ["Sean Robert Connolly (Odie)"],
  "released": "TODO: no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be a personal C64 replay routine used exclusively by its namesake composer — a DIFFERENT, distinct Player-ID signature from this same author's later, fully documented EMS/Electronic Music System (already carded as knowledge/players/ems-odie.md, V7.03 1997) — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "SIDId gives only an AUTHOR line for this tag: 'Sean Connolly (Odie)' (data/sidid.json byTag['Odie/Pulse']) — no NAME/reference/comment. Contrast with the SAME author's EMS/Odie tag family (already carded, knowledge/players/ems-odie.md), which resolves to a full CSDb release (V7.03, 1997, Cosine) — the sparseness here suggests an earlier or never-packaged personal routine, predating or alongside his documented Cosine/Sonix Systems work.",
    "100% single-composer concentration: both locally tagged files ('Crazy Mirrors', 'Merry Christmas'87') belong to Sean Connolly himself (data/composers/sean-connolly.json). The '87' in one filename hints at a mid-to-late-1980s origin, plausibly predating the 1997 EMS V7.03 release — but this is an inference from a filename, not a sourced date.",
    "'Pulse' is not independently confirmed in this research pass as either a scene group name or an earlier tool name — a web search for Sean Connolly/Odie plus 'Pulse' returned no corroborating result. Treat the meaning of 'Pulse' in this tag as UNRESOLVED.",
    "No evidence connects this tag's routine to EMS at the code level — no edge asserted absent a real disassembly comparison. Composer profile: Sean Robert Connolly, handles 'Odie', born 1970-03-12, country Scotland/England, affiliation Cosine Systems (data/composers/sean-connolly.json) — the Cosine affiliation is from his LATER career; not evidence this early tag is Cosine-related.",
    "No public disassembly or source found for this specific tag. All runtime internals unknown."
  ],
  "sources": [
    "SIDId sidid.nfo (author only): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/sidid.json byTag['Odie/Pulse'] = {\"author\": \"Sean Connolly (Odie)\"}",
    "data/composers/sean-connolly.json (profile: full_name Sean Robert Connolly, handles Odie, country Scotland/England, born 1970-03-12, affiliation Cosine Systems, csdb_id 1181)",
    "Sibling KB card, cross-checked for same-author overlap (no code-sharing evidence found): knowledge/players/ems-odie.md",
    "Local dataset: 2 files tagged Odie/Pulse, single composer (Sean Connolly) — see data/composers/sean-connolly.json folder[]"
  ]
}
```

## Overview

Odie/Pulse is a Player-ID tag for a small C64 replay routine used
exclusively by **Sean Robert Connolly**, handle **Odie** — the same
composer who later authored the fully documented [EMS/Electronic Music
System](ems-odie.md) (V7.03, 1997, Cosine). This tag is a distinct,
much sparser SIDId signature (author name only, no product name), and one
of its two tagged filenames ("Merry Christmas'87") hints at a mid-1980s
origin, well before EMS. The meaning of "Pulse" (group or earlier tool
name) could not be independently confirmed in this pass.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) same real person as EMS/Odie's
author, but a separate, much sparser tag — no code-sharing edge asserted;
(2) "Pulse" remains unresolved as either a group or product name; (3) a
filename hint ('87) suggests this predates the 1997 EMS release, but that
is inference from a filename, not sourced.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/sean-connolly.json`, `data/sidid.json`) plus
cross-reference against the sibling ems-odie.md card. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, the local composer profile, and
the sibling ems-odie.md card.

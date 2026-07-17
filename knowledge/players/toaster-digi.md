# Toaster_Digi

```json
{
  "id": "toaster-digi",
  "name": "Toaster_Digi",
  "aliases": ["Toaster_Digi"],
  "authors": ["Tomasz Przybylski (Toaster)"],
  "released": "TODO: earliest locally-tagged file is 1994 (\"Make Your Mind Up\", CSDb release 86956); no explicit tool-release date found",
  "status": "stub",
  "platform": "TODO: appears to be an in-house C64 digi/sample-playback routine embedded in Toaster's own tracks, not a released standalone editor — no dedicated CSDb tool/release entry found under this name (unconfirmed)",
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
    "The '_Digi' in the tag name is NOT confirmed by this project's own tooling — the '[RSID?]' hint in scripts/dev/coverage.js is a bare filename regex (/digi|sample|mixer/i), not an RSID-flag read. However, UNLIKE most tags in this batch, there IS independent corroborating evidence here: CSDb explicitly credits Toaster with a 'Sampling' role (not just 'Music') on multiple releases whose titles match locally-tagged files, e.g. 'Make Your Mind Up' (CSDb release 86956, 1994, role 'Sampling', event Visual Party 4.0, entered as 'Compo Sample') and 'Poison' (CSDb release 98657, role 'Sampling'). So the sample/digi association here is scene-attested, even though the routine's actual mechanism (voltage-clocked D/A, sample-and-hold, ring-mod trick, etc.) is unknown (TODO).",
    "Extremely concentrated usage: 17 files across only 3 composers in this dataset — Toaster himself (10 files), Stice (4), Snowball (3) (data/composers/*.json aggregation). SIDId's entry for this tag has only an AUTHOR line, no NAME/reference/comment fields (deepsid_dl/sidid.nfo) — the absence of a NAME field is itself a signal this was never packaged as a titled, released tool, consistent with a personal/in-house routine rather than a published editor.",
    "The 3 composers are NOT in the same CSDb group: Toaster is credited to Atlantic/Legion/Reliance (CSDb scener 8555), Stice to Estate/Respect/Street Children (CSDb scener 13798), Snowball to Therapy (CSDb scener 2448) — all three are Polish sceners (data/composers/toaster.json, stice.json, snowball.json all list country 'Poland'), but not the same crew. Each is independently credited 'Sampling' only on their OWN tracks (e.g. Stice solely credited on 'Vodoo People', CSDb release 217957; Snowball solely credited on 'Dune') — Toaster is not cross-credited on their tunes. Why the SIDId byte signature matches across three unrelated groups is unresolved: plausibly Toaster's digi-playback code circulated informally among Polish sceners of the same era, but that is inference, not a sourced claim (TODO: confirm via disassembly/byte-signature comparison)."
  ],
  "sources": [
    "SIDId sidid.nfo (author only, no NAME/reference/comment for this tag): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb scener Tomasz Przybylski / Toaster (groups Atlantic/Legion/Reliance, country Poland, releases incl. 'Make Your Mind Up' 1994 role Sampling): https://csdb.dk/scener/?id=8555",
    "CSDb release 'Make Your Mind Up' (Toaster, 1994, role 'Sampling', event Visual Party 4.0): https://csdb.dk/release/?id=86956",
    "CSDb scener Stice / Szymon Kedzia (groups Estate/Respect/Street Children, Poland; sole 'Sampling' credit on 'Vodoo People' CSDb release 217957): https://csdb.dk/scener/?id=13798",
    "CSDb scener Snowball / Sebastian Sobczyk (ex-member Therapy, Poland; sole 'Sampling' credit on 'Dune'): https://csdb.dk/scener/?id=2448",
    "Local dataset: 17 files tagged Toaster_Digi across 3 composers — Toaster (10), Stice (4), Snowball (3) — see data/composers/*.json aggregation",
    "data/composers/toaster.json, stice.json, snowball.json (HVSC MUSICIANS profile: full names, country Poland, CSDb scener ids)"
  ]
}
```

## Overview

Toaster_Digi is the SIDId tag for a digi/sample-playback routine attributed to
**Tomasz Przybylski**, handle **Toaster**, a Polish scener (member of Atlantic,
Legion, Reliance — CSDb scener 8555). Locally it appears in only **17 files
across 3 composers**: Toaster himself (10 files), plus **Stice** (4) and
**Snowball** (3) — all three Polish, but in different, unrelated CSDb groups
(data/composers/*.json aggregation). SIDId's entry for the tag carries only an
`AUTHOR` line — no `NAME`, `reference`, or `comment` — consistent with an
in-house routine that was never packaged and released as a titled, standalone
tool. Unlike several other `_Digi`-tagged families in this batch, there is
real corroborating evidence for the "digi" label: CSDb explicitly credits
Toaster with a **"Sampling"** role (distinct from "Music") on releases whose
titles match locally tagged files, e.g. "Make Your Mind Up" (CSDb 86956,
1994, entered into a "Compo Sample" category at Visual Party 4.0) and "Poison"
(CSDb 98657).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the sample/digi claim is unusually
well-attested here via CSDb's "Sampling" role credits, not just the filename
regex; (2) extreme concentration (17 files/3 composers) marks this as a
personal or very-small-circle routine, not a published tool — no dedicated
CSDb tool/editor release was found under this name; (3) the 3 composers
belong to 3 different, unrelated CSDb groups, so the reason the same SIDId
signature spans all of them is unresolved — plausible informal code sharing
among Polish sceners, but unconfirmed (TODO).

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO. No public source repo or format spec was found.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/*.json`, `data/sidid.json`) plus CSDb scener/release pages
researched for provenance. `status: stub` — no runtime fact has been
confirmed by disassembly or trace.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb scener pages for Toaster/
Stice/Snowball, CSDb release pages for "Make Your Mind Up" and cross-checked
titles, and the local composer aggregation.

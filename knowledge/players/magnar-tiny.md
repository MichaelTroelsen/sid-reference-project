# Magnar/Tiny

```json
{
  "id": "magnar-tiny",
  "name": "Magnar/Tiny",
  "aliases": ["Magnar/Tiny"],
  "authors": ["Magnar Harestad — inferred from the tag name; not independently confirmed as the routine's actual author"],
  "released": "TODO: no formal tool/release date exists for 'Magnar/Tiny' itself — it is not a named CSDb release. Full census of all 6 tagged files (CSDb webservice, type=sid, Released field, checked 2026-07-31): every one falls in a tight 2020-2021 window — Bella Ciao (2020, Censor Design, csdb.dk/sid/?id=57785), Magnificent (2020, Genesis Project, id=57784), SOS (2020, Censor Design, id=57783), Jumpin' Jalopies (2020, Megastyle, id=58335), Breakdance (2021, Megastyle, id=58861), Aura 2 (2021, FairLight, id=59890). Recorded as an earliest-attested-usage window, not a release date — per this project's own rule not to promote first-use into `released`.",
  "status": "stub",
  "platform": "TODO: still no SIDId entry, CSDb tool/release page, Lemon64 thread, or Forum64 thread found under this name (Lemon64/Forum64 explicitly re-searched this pass, negative). Reads as a size-category ('Tiny') personal/micro replay routine, the same naming pattern as other '_tiny'/'/Tiny'-suffixed raw Player-ID tags elsewhere in this dataset (4-Mat_tiny, Krill_tiny, Rotteroy_tiny — none confirmed related). Magnar Harestad's own CSDb scener record credits him with the FreelanceFunctions 'Coder, Graphician, Musician, Organizer' (csdb.dk/scener/?id=16913) — plausible he wrote this routine himself as both coder and musician, but no source states this outright, so not asserted as fact.",
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
    "6 files across 2 composers: Magnar Harestad (5 files — Bella Ciao, Magnificent, SOS, Breakdance, Aura 2) and Roy Johan Widding (1 file — Jumpin' Jalopies), per data/composers/magnar.json and data/composers/widding-roy-johan.json. The tag names Magnar, but a second composer also uses it — consistent with a small, informally-shared personal routine rather than a strictly single-author one.",
    "Local composer profile data disagrees on country: Magnar's own composer record lists country 'Sweden', while Widding_Roy_Johan's lists 'Norway' — both Scandinavian, but not the same country, despite the tag naming Magnar specifically. Not resolved here; recorded as read from the data, not corrected or guessed.",
    "No SIDId entry exists for 'Magnar/Tiny' (checked data/sidid.json directly).",
    "PSID header addresses vary widely across the 6 tagged files (load/init/play, all decimal): Bella Ciao 4400/4400/4403, Magnificent 3968/4726/4765, SOS 4708/5143/5197, Breakdance 2928/2928/2931, Aura 2 4096/4556/4578, Jumpin' Jalopies 4096/4584/4620 (CSDb webservice type=sid, checked 2026-07-31). This is per-file PSID header metadata, not a disassembled engine address, but the spread is itself informative: no fixed load address, consistent with a compact routine assembled fresh alongside each tune's data rather than a relocatable/shared binary blob.",
    "Full census (2026-07-31) of all 6 tagged files' CSDb `Released` field puts every one in 2020-2021, across three different groups (Censor Design, Genesis Project, Megastyle for the 2020 files; Megastyle, FairLight for the 2021 files) — a tight window consistent with a short-lived in-house 4k-intro-era routine rather than a long-maintained tool.",
    "CSDb scener record for Magnar Harestad (id 16913) lists two 'C64 Tool' release credits — 'Graphical Cruncher+Decruncher (TASM)' (1990) and 'Turbo-Assembler V7.1' — neither named 'Magnar Tiny' or related to music playback; no tool release matching this player tag exists under his scener profile (checked via CSDb webservice scener depth=2, 2026-07-31).",
    "Explicit Lemon64 (lemon64.com) and Forum64 (forum64.de) web searches for 'Magnar' + 'Tiny' as a named SID player/routine (2026-07-31) returned no matching thread — only unrelated hits (general SID-playback discussions mentioning Magnar as a composer, not this routine)."
  ],
  "sources": [
    "Local dataset: data/composers/magnar.json (5 files), data/composers/widding-roy-johan.json (1 file); knowledge/COVERAGE.md rank #13",
    "data/sidid.json byTag — checked, no entry for 'Magnar/Tiny'",
    "CSDb webservice, type=sid, per-file census of all 6 tagged files (Released field + PSID load/init/play addresses), checked 2026-07-31: https://csdb.dk/sid/?id=57785 (Bella Ciao), https://csdb.dk/sid/?id=57784 (Magnificent), https://csdb.dk/sid/?id=57783 (SOS), https://csdb.dk/sid/?id=58861 (Breakdance), https://csdb.dk/sid/?id=59890 (Aura 2), https://csdb.dk/sid/?id=58335 (Jumpin' Jalopies)",
    "CSDb scener record, Magnar Harestad, checked via webservice type=scener&id=16913&depth=2, 2026-07-31: https://csdb.dk/scener/?id=16913 — FreelanceFunctions (Coder/Graphician/Musician/Organizer) and full release list checked for any 'Magnar Tiny' tool credit (none found; only two unrelated C64 Tool credits)",
    "Lemon64 (lemon64.com) and Forum64 (forum64.de) web searches for 'Magnar' + 'Tiny' as a SID player, 2026-07-31 — no matching thread found"
  ]
}
```

## Overview

`Magnar/Tiny` is a raw Player-ID tag covering 6 files in this dataset,
naming Norwegian(/Swedish, per conflicting local country data) composer
**Magnar Harestad**. No SIDId entry, CSDb tool page, Lemon64 thread, or
Forum64 thread was found for it (all re-checked this pass) — it reads as a
personal, small-scale in-house routine (the "Tiny" suffix following the same
size-category naming convention seen elsewhere in this dataset, e.g.
`4-Mat_tiny`, `Krill_tiny`, `Rotteroy_tiny`, though no relationship to any is
confirmed). It is used by Magnar himself (5 of 6 files) and one other
composer, Roy Johan Widding (1 file). A full census of all 6 tagged files'
CSDb `Released` fields puts every one of them in a tight 2020-2021 window
across three different demo groups — consistent with a short-lived, era-
specific in-house routine rather than a maintained, dated tool release, so
`released` stays `TODO` at the tool level (see the field's own note for the
per-file dates). Magnar Harestad's CSDb scener record credits him as both
"Coder" and "Musician," making him a plausible sole author, but no source
states this outright.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: shared usage across 2 composers
(not purely single-author); a genuine, unresolved country discrepancy
between the two composers' own HVSC-derived profile data (Sweden vs
Norway); the 6 files' PSID load/init/play addresses vary widely (no fixed
engine address); and Magnar Harestad's own CSDb release history shows two
unrelated "C64 Tool" credits (a cruncher and an assembler) but nothing named
"Magnar Tiny."

## Disassembly notes

None done here. No source, format spec, or memory map was found anywhere;
every Tier 3 field is honestly `TODO`.

## Verification

**Not verified — `status: stub`.** Local composer/usage data confirmed, plus
a full CSDb per-file census (Released dates, PSID header addresses) and
explicit CSDb scener / Lemon64 / Forum64 searches for a named tool release —
all negative. No SIDId entry, CSDb tool page, or other external
documentation exists for this tag. No runtime fact was guessed.

## Sources

See the `sources` array — this project's own local composer data
(`data/composers/magnar.json`, `data/composers/widding-roy-johan.json`),
`data/sidid.json` (checked, no entry), a full CSDb webservice census of all
6 tagged files, Magnar Harestad's CSDb scener record, and Lemon64/Forum64
searches (all checked 2026-07-31).

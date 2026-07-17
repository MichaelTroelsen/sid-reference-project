# Comer/NMI_Sample_5

```json
{
  "id": "comer-nmi-sample-5",
  "name": "NMI Sample 5.v1",
  "aliases": ["Comer/NMI_Sample_5"],
  "authors": ["Pawel Kulikowski (Comer)"],
  "released": "TODO: exact date unknown; released via Taboo (Comer joined Taboo 1994 per CSDb scener bio) — likely mid-1990s",
  "status": "stub",
  "platform": "Native C64 tool. Standalone machine-code program on a single-file demo disk, BASIC-stub loaded (SYS 2061), ~4KB, NOT crunched (readable menu text in the binary).",
  "csdb_release": 101599,

  "memory": {
    "load_address": "TODO: this refers to the standalone CSDb-hosted tool binary ($0801 BASIC stub -> SYS 2061 = $080D machine code start), NOT confirmed as the runtime load/init address embedded in an actual .sid file using this player",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO: not disassembled",
    "play": "TODO: not disassembled"
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
    "The tag name implies an NMI-timer-driven digitized-sample playback routine, version 5 — UNCONFIRMED by any manual/format spec, only suggested by the name and the tool's on-screen menu text (see below). Per this batch's global rule, the word 'sample' in the tag is not itself evidence of what the routine does.",
    "Downloaded and inspected the actual CSDb-hosted release binary (D64 disk image, single PRG 'NMI SAMPLE 5.V1', 4021 bytes, loads at $0801/BASIC SYS 2061). Its uncrunched binary contains readable menu-style text fragments: 'PRESS', 'FROM', a garbled '...dANGE)' (likely 'CHANGE)'), 'SAMPLE:.. (+/-)', and 'RUN/STOP - EXIT' — consistent with an interactive sample player/editor with an adjustable parameter (rate? pitch?), but this is an observation of the standalone tool disk, not a disassembly of its play routine, and not proof it is the same code embedded in the HVSC .sid files tagged with this name.",
    "Composer concentration: 35 files across 7 composers (Black, Comer, Mamba, Moog, Pasthor, Ramos, Vegeta) in this project's dataset — spread wide enough that it reads as a real small-scene tool passed among a handful of Polish-scene musicians, not a single personal routine, though still modest next to a widely-published editor.",
    "The string 'RAMOS' (one of this family's 7 composers) appears literally inside the standalone tool's disk image — plausibly a bundled demo/example tune credit on the release disk itself.",
    "CLUSTER CHECK (see task warning) — tested Comer/NMI_Sample_5 against sibling tag Comer/Sample_Studio (also Pawel Kulikowski/Comer, CSDb release 101704, 'Sample Studio', 1993) for a possible merge: downloaded both CSDb release D64s and compared the extracted PRGs byte-for-byte. Result: NO meaningful shared code — longest common byte run was 8 bytes of trailing zero-padding (difflib.SequenceMatcher on the two full binaries). Different sizes (NMI Sample 5: 4021 bytes uncrunched with readable text; Sample Studio: 2690 bytes, entirely high-entropy/crunched, no readable strings at all), different CSDb releasing-group context (NMI Sample 5 via Taboo, which Comer joined 1994 per his CSDb scener page; Sample Studio released standalone in 1993, before Taboo). Conclusion: these read as two DISTINCT tools by the same author, not one tool under two names or a routine+editor pair — reported here as evidence, no edge asserted, no other card touched.",
    "Author Pawel Kulikowski (handle Comer, formerly Cyklon) is Polish, credited by HVSC Musicians.txt as 'Comer (Kulikowski, Pawel) / Sun Designs - POLAND'; CSDb's scener profile (id 7572) additionally lists Color 7, Skylight Designs, Sun Designs, and Taboo (from 1994) as groups, and credits him for Code/Music/Graphics/Idea/Sampling across tools, demos, and music collections 1992-1996."
  ],
  "sources": [
    "data/sidid.json byTag['Comer/NMI_Sample_5']: author Pawel Kulikowski (Comer), reference https://csdb.dk/release/?id=101599",
    "CSDb release id 101599 'NMI Sample 5.v1': https://csdb.dk/release/?id=101599 (Code/Idea: Comer of Taboo; type C64 Tool; download http://csdb.dk/getinternalfile.php/99126/nmi_sample.zip)",
    "CSDb scener id 7572 (Comer / Pawel Kulikowski, Poland, groups Color 7/Skylight Designs/Sun Designs/Taboo): https://csdb.dk/scener/?id=7572",
    "HVSC data/hvsc/Musicians.txt line 349: 'Comer (Kulikowski, Pawel) / Sun Designs - POLAND'",
    "Own inspection of the CSDb-hosted release disk image (D64 directory parse + PRG extraction + string scan + byte-diff against the Sample_Studio release disk), 2026-07-17 — not a disassembly, just container/binary-level observation",
    "Local dataset: data/composers/*.json aggregation — 35 files tagged Comer/NMI_Sample_5 across 7 composers (Black, Comer, Mamba, Moog, Pasthor, Ramos, Vegeta)"
  ]
}
```

## Overview

NMI Sample 5.v1 is a native C64 tool by **Pawel Kulikowski (Comer)**, a Polish
scener (groups Color 7, Skylight Designs, Sun Designs, and from 1994 Taboo,
which released this tool per CSDb). In this project's dataset it accounts for
**35 files across 7 composers** (Black, Comer, Mamba, Moog, Pasthor, Ramos,
Vegeta) — a spread wide enough to look like a real small-scene tool rather
than one person's private routine, though it never reached wide publication
(no manual, no format spec found). The name suggests an NMI-timer-driven
digitized-sample playback routine, version 5 of some internal line, but that
is unconfirmed — see quirks.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **name is not evidence of
function** (per this batch's global rule); a direct look at the CSDb-hosted
tool disk found readable UI text suggesting an interactive sample
player/editor, but that is still short of a disassembly-confirmed answer;
and the **cluster check against Comer/Sample_Studio came back negative for a
merge** — byte-level comparison of the two CSDb release binaries found no
shared code, different sizes, different crunching (one readable, one fully
packed), and different release contexts (Taboo vs. pre-Taboo standalone).
They are reported here as distinct tools by the same author.

## Disassembly notes

No disassembly performed (out of scope for this pass). Direct, non-invasive
inspection of the CSDb release D64 (`nmi_sample.d64`, single PRG "NMI SAMPLE
5.V1") found: BASIC stub loading at $0801 with `SYS 2061` ($080D), 4021-byte
uncrunched binary containing readable menu fragments ("PRESS", "FROM",
"SAMPLE:.. (+/-)", "RUN/STOP - EXIT"). This is the standalone tool binary
from the CSDb release, not confirmed to be the same code embedded as the
player routine in the collection's 35 tagged .sid files — a real disassembly
of one of those .sid files would be needed to fill any Tier 3 field, and none
was attempted here.

## Verification

Not verified. No entry points reassembled or traced. `status: stub` — Tier 1
(local dataset) + Tier 2 (CSDb/HVSC provenance, plus a one-off binary-level
container inspection to test the sibling-merge question) only.

## Sources

See the `sources` array — SIDId, the CSDb release and scener pages, HVSC
Musicians.txt, and this pass's own inspection of the CSDb-hosted disk images
(downloaded to a scratch directory, not committed to the repo).

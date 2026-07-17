# Sample Studio (Comer)

```json
{
  "id": "comer-sample-studio",
  "name": "Sample Studio",
  "aliases": ["Comer/Sample_Studio"],
  "authors": ["Pawel Kulikowski (Comer)"],
  "released": "1993",
  "status": "stub",
  "platform": "Native C64 tool (CSDb classifies the release itself as type \"C64 Tool\", not a demo/music release).",
  "csdb_release": 101704,

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
    "Despite the tag containing 'Sample', there is NO confirmation of what the replay routine actually does (digi/sample playback is suggested by the tag name alone — which this project does not treat as evidence — and the .sid files' actual register-write behaviour is unverified — TODO). Note the CSDb release is classified only as a generic type 'C64 Tool', with no functional sub-classification as a sample/audio editor.",
    "Very concentrated and single-scene: 17 files across only 6 composers in this dataset (Comer himself, Black, Blackman, Data, Joan, Surgeon), and every one of those real names traces to a Polish demoscene handle (Comer = Pawel Kulikowski, Black = Tomasz Szarzec, Blackman = Michal Krzyzostaniak, Data = Radoslaw Staszak, Joan = Krzysztof Mackowski, Surgeon = Przemek Mroczkowski) — a small, tight Polish-scene tool, not a widely-adopted one.",
    "The author, Comer, is CSDb-listed as Polish, active in groups Color 7, Skylight Designs, Sun Designs, and Taboo (from 1994). Sample Studio (CSDb release 101704, 1993) is credited as an individual release ('Released by: Comer'), not released under any of those group names.",
    "The downloadable CSDb release is a .d64 disk image (Sample_Studio.zip -> Sample_Studio.d64, 174848 bytes); the disk's PETSCII title string reads 'SAMPLE STUDIO', confirming the tool's on-disk name matches the tag — but the disk contents were not explored beyond that (no file listing, no docs found inside).",
    "CLUSTER NOTE (not asserted as an edge — no direct evidence found): the same author, Pawel Kulikowski (Comer), also has two other distinctly-tagged routines in this dataset, Comer/NMI_Sample_5 (CSDb release 101599, credited to 'Comer of Taboo', group Taboo) and Comer/Digi (no CSDb reference in SIDId at all). Sample Studio and NMI_Sample_5 are separate CSDb release IDs with different credited groups (individual vs. Taboo) and no CSDb note, forum post, or SIDId comment found linking them as versions of each other or as tool+successor. Composer overlap alone (Black and Comer use both Sample_Studio and NMI_Sample_5) is NOT treated as lineage evidence per this project's rules — it just reflects a small clique of Polish composers who used whichever of Comer's tools was current. Treat as three separate, unverified routines by the same author unless a byte-signature or source comparison says otherwise."
  ],
  "sources": [
    "SIDId sidid.nfo, tag 'Comer/Sample_Studio' (author, CSDb reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo -> local copy data/sidid.json (byTag)",
    "CSDb release #101704 'Sample Studio' (1993, type C64 Tool, individual release by Comer, download Sample_Studio.zip/271 downloads): https://csdb.dk/release/?id=101704",
    "CSDb release #101599 'NMI Sample 5.v1' (credited 'Comer of Taboo', group Taboo, code+idea): https://csdb.dk/release/?id=101599 (fetched for cluster comparison only, not this card's subject)",
    "CSDb scener profile for Comer (Poland, groups Color 7/Skylight Designs/Sun Designs/Taboo, alt handle Cyklon): https://csdb.dk/scener/?id=7572",
    "Local dataset: 17 files tagged Comer/Sample_Studio across 6 composers (Black, Blackman, Comer, Data, Joan, Surgeon) — grep across data/composers/*.json (black.json, blackman.json, comer.json, data.json, joan.json, surgeon.json); all 6 real names cross-checked as Polish handles from each composer's own author string.",
    "Disk image inspected directly (downloaded to local scratch, not committed to repo): Sample_Studio.zip -> Sample_Studio.d64, PETSCII string 'SAMPLE STUDIO' found via `strings`, confirming on-disk title."
  ]
}
```

## Overview

Sample Studio is a native C64 tool by **Pawel Kulikowski (handle Comer)**, a Polish
scener (groups Color 7, Skylight Designs, Sun Designs, Taboo), released in 1993 as
CSDb release #101704 — an individual release, not credited to any group. CSDb
classifies the release itself as a "C64 Tool" (i.e. an editor/utility, not a demo or
plain music release), and the tag name plus release framing both suggest a
sample/audio editing tool, though nothing in this pass confirms what its replay
routine actually writes to the SID. In this dataset it is very concentrated: only
**17 files across 6 composers**, every one of them a Polish-scene handle, matching
Comer's own nationality — a small clique tool, not a widely-adopted one.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: the **name is not evidence** of digi/
sample playback behaviour (TODO, unverified); the **tight Polish-scene concentration**
(6 composers, all Polish real names); and the **cluster caution** — this author has
two other separately-tagged routines (`Comer/NMI_Sample_5`, `Comer/Digi`) with no
found evidence connecting them to Sample Studio as versions/successors of one
another. Composer overlap between Sample_Studio and NMI_Sample_5 (Black, Comer use
both) is noted but explicitly NOT treated as a lineage edge.

## Disassembly notes

None done. The CSDb release download is a `.d64` disk image; only the PETSCII disk
title ("SAMPLE STUDIO") was checked via `strings` to confirm it matches the tag —
the disk's directory/file contents were not explored, and no in-program help text
or external format documentation was found. Memory map, entry points, and data
format are all unknown (Tier 3, correctly left TODO).

## Verification

Not verified. All facts above come from cached SIDId/CSDb metadata and this
project's own composer-file aggregation, cross-checked live against CSDb release
and scener pages — no register-write trace or reassembly was attempted.
`status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo, CSDb release #101704 (subject) and
#101599 (cluster comparison only), CSDb scener page for Comer, and this project's
local `data/composers/*.json` aggregation.

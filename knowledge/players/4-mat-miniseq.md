# 4-Mat MiniSEQ

```json
{
  "id": "4-mat-miniseq",
  "name": "4-Mat MiniSEQ",
  "aliases": ["4-Mat/MiniSeq"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "2020-09-26 (CSDb release date for 'MiniSEQ' by Ate Bit/Orb) — https://csdb.dk/release/?id=196106",
  "status": "stub",
  "platform": "Native C64 tool. CSDb catalogs it as a 'C64 Tool' release named 'MiniSEQ', credited Code+Music: 4-Mat (Ate Bit, Orb). Description: 'When you run the editor it will just display the READY. prompt, this is normal. The sequencer runs in the background and leaves the c64's BASIC and Kernal running for you to edit the screen with.' — https://csdb.dk/release/?id=196106",
  "csdb_release": 196106,

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
    "SIDId's sidid.nfo has NO entry for '4-Mat/MiniSeq' (checked) — this is a Player-ID-only signature; the actual tool IS a real, dated, publicly released CSDb entry (see csdb_release), just not one SIDId enumerates.",
    "Do NOT conflate with the separately-tagged, separately-carded '4-Mat_tiny_1' / '4-Mat_tiny_2' family (knowledge/players/4-mat-tiny-1.md) by the same author — different raw tag, no evidence of a shared routine between them.",
    "Only 2 locally tagged files, both by 4-Mat himself, both explicitly 'MiniSEQ'-titled ('MiniSEQ Demo Songs', 'MiniSEQ Loop Song') — CSDb confirms these are the two demo SIDs bundled with the CSDb 'MiniSEQ' release itself (csdb_id 58038/58040), i.e. the release's own showcase songs, not independent third-party usage.",
    "A source archive exists on CSDb ('miniseq_src.zip', 99 downloads) alongside the binary ('miniseq_v1_0.zip', 216 downloads), containing miniseq.asm + a source_readme.txt + a template .sid — not inspected here (out of this pass's scope; no licence statement confirmed), but it is a real lead for a future Tier 3 pass since a public source exists.",
    "No explicit software licence found on the CSDb release page — public source availability was verified, but 'public' is not the same as 'open-source' until a licence is actually read from source_readme.txt."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for '4-Mat/MiniSeq': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 2 files tagged 4-Mat/MiniSeq, both by 4-Mat (Matt Simmonds) — see data/composers/4-mat.json",
    "CSDb webservice, type=sid, id=58040 and id=58038 (both files' own Released/UsedIn fields point to release id 196106): https://csdb.dk/webservice/?type=sid&id=58040&depth=2",
    "CSDb release page for 'MiniSEQ' (id 196106) — release date, type, credits, description, download links: https://csdb.dk/release/?id=196106"
  ]
}
```

## Overview

`4-Mat/MiniSeq` is a raw Player-ID tag for a small, real, dated C64 tool
by **Matt Simmonds**, handle **4-Mat** (Ate Bit / Orb): "MiniSEQ", a
sequencer released on CSDb 2020-09-26 as a "C64 Tool"
(https://csdb.dk/release/?id=196106), with the two locally-tagged files —
"MiniSEQ Demo Songs" and "MiniSEQ Loop Song" — being the release's own
bundled showcase songs (CSDb SID ids 58040/58038, both pointing back to
this same release via their `UsedIn` field). Both files are by 4-Mat
himself; no third-party composer usage is present in the local dataset.
No SIDId entry exists for the tag, but that is a SIDId coverage gap, not
evidence the tool is undocumented — CSDb has a full release page with
credits, description, and both a binary and source download.

## Quirks & gotchas

See the `quirks` array. Load-bearing: SIDId has no entry for this tag,
but a real CSDb release page does (id 196106, 2020-09-26); it is distinct
from the separately-tagged `4-Mat_tiny_1`/`_2` family by the same author
(no evidence of shared code between the two tags); a source archive
exists on CSDb but was not inspected in this pass.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded from cached local data
(`data/composers/4-mat.json`, `data/sidid.json`) plus a Tier 2 provenance
check against the live CSDb webservice/site (release id 196106 and both
files' SID entries, ids 58040/58038). No disassembly, no runtime facts
confirmed. `status: stub` (unchanged by this pass, per instruction).

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), the local
composer aggregation, and CSDb (webservice `type=sid` for both tagged
files, and the release page at https://csdb.dk/release/?id=196106 for
release date, credits, description, and download links).

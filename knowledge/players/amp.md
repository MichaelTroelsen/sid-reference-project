# AMP (Advanced Music Programmer)

```json
{
  "id": "amp",
  "name": "AMP (Advanced Music Programmer)",
  "aliases": ["AMP", "The Advanced Music Programmer"],
  "authors": ["Andrew Miller (Burton) / Hitech Studio Designs"],
  "released": "SIDId: 1989 — but earliest ATTESTED release is V2.3, Dec 1991 (see quirks)",
  "status": "stub",
  "platform": "Native C64 music editor+replay. Closed scene tool.",
  "csdb_release": 35519,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'AMP' = Advanced Music Programmer (full CSDb title 'The Advanced Music Programmer'). Author Andrew Miller (handle 'Burton', of Euratom/Quality); publisher Hitech Studio Designs.",
    "YEAR DISCREPANCY: SIDId records '1989 Hitech Studio Designs', but CSDb has no 1989 release — the only documented version is V2.3 (Dec 1991, on Magic Disk 64 12/91), copies spanning 1990-1993, and a CSDb comment notes 'no evidence of earlier distribution' than 12/91. So 1989 is the SIDId claim, unconfirmed; earliest attested is V2.3 ~1991. TODO: confirm a V1.x/1989 build.",
    "Associated milieu: Quality / Euratom / Hitech Studio Designs / Sidbusters; house composer Hayes (Markus Müller) used it. A web summary equating 'Andrew Miller' with 'Andras Molnar' is UNVERIFIED — rejected, not recorded.",
    "Replay internals all UNKNOWN — TODO. 234 files."
  ],
  "sources": [
    "sidid.nfo (author/name/year): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb AMP V2.3 (credits/date): https://csdb.dk/release/?id=35519",
    "sidid:AMP (Andrew Miller (Burton), 1989 Hitech Studio Designs)",
    "Local dataset: 234 files tagged AMP (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

AMP — "The Advanced Music Programmer" — is a native C64 music editor+replay by
**Andrew Miller ("Burton")**, published by Hitech Studio Designs. 234 files here.
Its date is uncertain (SIDId says 1989; CSDb's earliest attested version is V2.3,
Dec 1991).

## Quirks & gotchas

See the `quirks` array — the **1989-vs-1991 year discrepancy** is the main open
question, plus a rejected unverified real-name claim. Internals `TODO`.

## Disassembly notes

None; internals undocumented. Disassemble an AMP-tagged `.sid` to recover them.

## Verification

**Not verified — `status: stub`.** Author/name confirmed; year uncertain; all
runtime fields `TODO`.

## Sources

See the `sources` array — SIDId and CSDb (AMP V2.3).

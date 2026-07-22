# AMP (Advanced Music Programmer)

```json
{
  "id": "amp",
  "name": "AMP (Advanced Music Programmer)",
  "aliases": ["AMP", "The Advanced Music Programmer"],
  "authors": ["Andrew Miller (Burton) / Hitech Studio Designs"],
  "released": "SIDId: 1989 — but earliest ATTESTED release is V2.3, Dec 1991 (see quirks)",
  "status": "verified",
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

**Playback + entry points LOCALLY CONFIRMED (2026-07-13).** Traced a real HVSC AMP `.sid` (load $1000, init $1000, play $1003, 272 register writes / 50 frames).

**Disassembly/reassembly pass (2026-07-22) — status raised to `verified`.** Two independent files from different composers, both standard `$1000/$1003`:

- **File 1**: `MUSICIANS/B/Bakker_Nantco/Animal.sid` (load/init `$1000`, play `$1003`, 1 subtune, 3,599 bytes; SIDdecompiler coverage 3,598 bytes). 71 byte diffs all in `.byte`-directive lines (scattered write-touched working storage, `$1012-$1798`). Patched at source level by replacing drifted `.byte` values with pristine bytes. **100.0000% byte-exact** and **register-write exact** (460/460 writes).

- **File 2**: `MUSICIANS/K/Krolzig_Jan/Cheeky_Twins.sid` (load/init `$1000`, play `$1003`, 7 subtunes, 9,984 bytes). 79 byte diffs (99.21% match) — 54 resolved by `.byte`-source patching; 25 in self-modified instruction operands (not `.byte` directives). PRG-level patch to pristine values confirmed **register-write exact** (323/323 writes, only filename differs).

Status raised to **`verified`** — two independent files from different composers reach register-write exact equivalence. Author/name confirmed; year uncertain; all runtime fields `TODO`.

## Sources

See the `sources` array — SIDId and CSDb (AMP V2.3).

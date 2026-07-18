# XTracker

```json
{
  "id": "xtracker",
  "name": "XTracker",
  "aliases": ["XTracker_V4.2x"],
  "authors": ["TODO: composer of the sole locally tagged file is Sonic (Tufan Uysal); the tool's actual AUTHOR/coder is not confirmed by SIDId or any source found"],
  "released": "TODO: no explicit tool-release date found; the 'V4.2x' version suffix implies a longer-lived, versioned product",
  "status": "stub",
  "platform": "TODO: web search found no C64-specific 'XTracker' tool page (results returned only unrelated general C64 trackers) — origin/platform unconfirmed",
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
    "SIDId's sidid.nfo has NO entry for 'XTracker_V4.2x' (checked) — Player-ID-only signature.",
    "A web search for 'XTracker C64 tracker' returned only unrelated general C64 tracker results (CyberTracker, NinjaTracker, SadoTracker, etc.) — no page or forum thread specifically confirming a C64 tool called 'XTracker' was found in this pass. The 'V4.2x' suffix implies a versioned, presumably real product (Player-ID version suffixes are typically only assigned to genuinely distinct, recognized signatures) but this is inference, not a sourced confirmation.",
    "Single locally tagged file: 'Falk-Ohr-Filter (Model 50)', by composer Sonic (Tufan Uysal, Germany, CSDb scener 1188) — the TOOL's actual author/coder is not established; only the local file's composer is known, and the two are not necessarily the same person."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for 'XTracker_V4.2x': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Web search for 'XTracker C64 tracker' — no confirming page found, only unrelated results",
    "CSDb scener Sonic / Tufan Uysal (Germany, composer of the one tagged file): https://csdb.dk/scener/?id=1188",
    "Local dataset: 1 file tagged XTracker_V4.2x — 'Falk-Ohr-Filter (Model 50)', by Sonic"
  ]
}
```

## Overview

`XTracker_V4.2x` is a raw Player-ID tag with a single locally tagged file,
"Falk-Ohr-Filter (Model 50)", composed by **Sonic** (Tufan Uysal, Germany).
Neither SIDId nor a web search in this pass confirmed a C64 tool actually
named "XTracker" — its existence, authorship, and platform are all
unconfirmed beyond the raw tag itself.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is the least-corroborated card
in this batch — no SIDId entry, no confirming web source, and the tool's
actual author is not known to be the same person as the one locally
tagged composer.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/sonic.json`, `data/sidid.json`) plus an inconclusive web
search. `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), web search
(inconclusive), CSDb scener page, and the local file aggregation.

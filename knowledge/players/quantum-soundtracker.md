# Quantum Soundtracker

```json
{
  "id": "quantum-soundtracker",
  "name": "Quantum Soundtracker",
  "aliases": ["Quantum Soundtracker"],
  "authors": ["Aleksi Eeben"],
  "released": "27 August 2024, CNCD",
  "status": "stub",
  "platform": "Native C64 tool. A 3-channel sample-based tracker: 16 kHz mixing rate, internal 8-bit resolution, sample memory for 3 seconds at 16152 Hz (D-2) or 6 seconds at 8076 Hz (D-1), loads signed 8-bit mono raw samples, output resolution ~6.5 bits on real hardware, per the author's own CSDb release description.",
  "csdb_release": 245053,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Not in SIDId (checked data/sidid.json byTag — absent) — consistent with this being a very recent (Aug 2024) release, plausibly after this project's cached sidid.nfo snapshot was taken.",
    "Genuinely new, publicly documented tool: CSDb release 245053, 'Quantum Soundtracker [2024]', all roles (Code, Text, Concept, Docs) credited solely to Aleksi Eeben of CNCD, released 27 August 2024. The author's own description (quoted in the `platform` field above) gives real technical specifics — a sample-based tracker, not a synth/waveform tracker.",
    "Real, fast adoption despite being brand new: 3 locally-tagged files by 3 DIFFERENT composers (Aleksi Eeben himself, Heavy Seppo, Mibri) — not concentrated on the author alone. A CSDb comment from Mibri (30 Aug 2024, 3 days after release) praises the tool's 'seriously decent sound quality' and states intent to use it for future releases, independently corroborating real external uptake, not just self-use.",
    "This is a size-category-adjacent but genuinely distinct tool from other 'digi'/sample players in this knowledge base — a proper 2024-era named/versioned/documented C64 sample tracker, not a raw signature with no identity."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no entry: https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 'Quantum Soundtracker [2024]' (Aleksi Eeben/CNCD, 27 Aug 2024, with technical description + Mibri's adoption comment): https://csdb.dk/release/?id=245053",
    "Local dataset: 3 files tagged 'Quantum Soundtracker', 3 composers (Aleksi Eeben, Heavy Seppo, Mibri) — data/composers/*.json aggregation"
  ]
}
```

## Overview

Quantum Soundtracker is a native C64 sample-based tracker released 27
August 2024 by **Aleksi Eeben** of CNCD — a 3-channel, 16 kHz sample
tracker per the author's own CSDb description. Not present in SIDId's
cached snapshot (consistent with its very recent release date). Despite
being brand new, it already shows real external adoption: used by 3
different composers locally (Eeben himself, Heavy Seppo, Mibri), with Mibri
publicly praising it on CSDb days after release.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) absent from SIDId purely because
it postdates the cached snapshot, not because it's obscure; (2) a real,
fully documented, single-author 2024 release with genuine technical detail
on CSDb; (3) fast multi-composer adoption is unusually strong signal for
such a new and small (3-file) tag.

## Disassembly notes

None done. No memory map, entry points, or data format are known — all Tier
3 fields are TODO. Download available on CSDb but not inspected for public
source here.

## Verification

Not verified. Seeded from `data/sidid.json` (absence check), `data/composers/*.json`,
and the CSDb release page. `status: stub`.

## Sources

See the `sources` array — SIDId absence check, CSDb release 245053, and the
local composer aggregation.

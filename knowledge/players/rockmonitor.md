# Rock Monitor

```json
{
  "id": "rockmonitor",
  "name": "Rock Monitor",
  "aliases": ["DUSAT/RockMon2", "DUSAT/RockMon3", "DUSAT/RockMon4", "DUSAT/RockMon5.0", "DUSAT/RockMon5.1", "Rockmonitor"],
  "authors": ["Oscar Giesen (OPM) — code", "Marco Swagerman (MC) — music/demosongs"],
  "released": "1987 (Rockmonitor II, 11 Apr 1987) – 1988 (V5)",
  "status": "stub",
  "platform": "Native C64 music editor+player with digi/sample (digi-drum) support, by The Dutch USA-Team (DUSAT). Closed scene tool.",
  "csdb_release": 20664,

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
    "derives_from": ["soundmonitor"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "LINEAGE: Rock Monitor is The Dutch USA-Team's modification of Chris Hülsbeck's SoundMonitor (1986), adding digi/sample (digi-drum) support — hence the derives_from: soundmonitor edge. The evidence indicates DUSAT's Rock Monitor IS that SoundMonitor-with-samples derivative (not a separate second lineage). [SoundMonitor lineage source 404'd on direct fetch — cited via search excerpt; verify.]",
    "Same team (DUSAT: OPM=Oscar Giesen code, MC=Marco Swagerman music) later made Music Assembler (1989) — MA is a separate/successor product, NOT a Rock Monitor version.",
    "DUSAT original version line: Rockmonitor II (id 20664, 11 Apr 1987), III (id 33038), IV (id 20676, Jul 1987), V5 (id 10632, May 1988; '100%' fix id 122393). Many third-party cracks/hacks exist (V5.3, V6, V7 by other groups) — NOT DUSAT releases. The tags RockMon2-5.1 map onto this II-V5 line (a '5.1' is likely a minor/cracked build).",
    "Replay internals (memory map, ZP, init/play, data format, effect set, digi-drum playback mechanics) all UNKNOWN publicly. As a SoundMonitor derivative, its core is EXPECTED to resemble SoundMonitor's routine — TODO: verify by disassembly + comparison.",
    "647 files across 156 composers — a broadly adopted tool (wide composer spread, unlike the concentrated Polish/Norwegian editors in this batch)."
  ],
  "sources": [
    "CSDb Rockmonitor II (1987, first DUSAT release): https://csdb.dk/release/?id=20664",
    "CSDb Rockmonitor V5 (1988, credits): https://csdb.dk/release/?id=10632",
    "SoundMonitor lineage (Rock Monitor = SoundMonitor + samples): https://www.vgmpf.com/Wiki/index.php?title=Soundmonitor (and namelessalgorithm.com SoundMonitor blog — verify, 404'd on direct fetch)",
    "Dutch USA-Team group: https://demozoo.org/groups/39271",
    "Local dataset: 647 files tagged DUSAT/RockMon2-5.1 (see knowledge/COVERAGE.md). No SIDId entry."
  ]
}
```

## Overview

Rock Monitor (Rockmonitor) is a native C64 music editor+player by **The Dutch
USA-Team** (OPM = Oscar Giesen, code; MC = Marco Swagerman, music), first
released as Rockmonitor II in April 1987. It is a **modification of Chris
Hülsbeck's [SoundMonitor](soundmonitor.md) with added digi-drum/sample
support** — the same team's later, separate tool being
[Music Assembler](music-assembler.md). 647 files here across 156 composers.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **SoundMonitor derivation** (the
graph edge), the **DUSAT team link to Music Assembler** (sibling tool, not a
version), and the version-numbering caveat (DUSAT originals II–V5 vs many
third-party cracks). Internals `TODO`, but expected to resemble SoundMonitor's.

## Disassembly notes

None done here. As a SoundMonitor derivative, comparing a Rock Monitor `.sid`'s
register trace against SoundMonitor is the natural RE approach (and would
confirm/quantify the derivation).

## Verification

**Not verified — `status: stub`.** Authorship, dates, and the SoundMonitor+
digi-drum lineage are CSDb/VGMPF-sourced (one lineage source 404'd — flagged);
all runtime fields `TODO`.

## Sources

See the `sources` array — CSDb (Rockmonitor II & V5), the SoundMonitor lineage
references, and Demozoo for the Dutch USA-Team. No SIDId entry.

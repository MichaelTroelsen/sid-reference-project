# SID Duzz' It

```json
{
  "id": "sidduzzit",
  "name": "SID Duzz' It",
  "aliases": ["Geir_Tjelta/SIDDuzz'It", "SIDDuzz'It", "SID Duzz It", "SDI"],
  "authors": ["Geir Tjelta (GT)", "Glenn Rune Gallefoss (GRG / 6R6)"],
  "released": "1992 (origin); modern line to v2.1.7 (2014)",
  "status": "verified",
  "platform": "Native C64/C128 tracker (3 channels + a 4th control channel). Modern v2.1 on SourceForge (license/6510-source status unclear); original 1992 editor closed.",
  "csdb_release": 7175,

  "memory": {
    "load_address": "$0FFF (from the PSID header; loadAddr field is 0 so the real load address is the payload's first two little-endian bytes).",
    "zero_page": "$FE-$FF (a 16-bit pointer used by the play routine; seen as `zfe = $fe` / `zff = zfe + $01` in a SIDdecompiler disassembly).",
    "layout": "Native payload spans $0FFF-$1B9C (2974 bytes on the traced file). $0FFF-$1002: entry vectors (`tax`, `jmp init`, `jmp play`). $1006-$1026: an unreferenced ID string ('-MUSIC BY GT/PLAYER BY GT+GRG-'). $1027-$1B9C: player code and data tables. Exact table boundaries and the 4th control-channel driver remain TODO."
  },
  "entry": {
    "init": "$0FFF (A = subtune number, 0-based; traced file has 1 subtune).",
    "play": "$1003 (called once per frame)."
  },
  "speed": "TODO. Per-frame `$1003` play call on the traced file; tempo programs (48 in v2.1.x) and the separate control channel drive timing but the exact speed/multispeed behavior is not yet decoded.",

  "data_format": {
    "order_list": "128 sequences (v2.1.x); a separate control channel drives tempo/transpose/effects. TODO: byte-level format.",
    "patterns": "TODO: byte-level format undocumented",
    "instruments": "32-48 instruments (v2.1.x). TODO: per-field layout.",
    "wavetable": "Present. Note: '11-bit filter via the waveform table' (v2.1.x). TODO: format.",
    "pulsetable": "64 pulse programs (v2.1.x). TODO: format.",
    "filtertable": "64 filter programs (v2.1.x). TODO: format."
  },
  "effects": {
    "encoding": "TODO: per-effect byte encoding undocumented.",
    "commands": {
      "(high-level set, v2.1.x)": "vibrato (85 programs), pulse, filter, arpeggio (48 programs), tempo; plus keyboard-tracking, funktempo, gate-off-table pointers, filter-shift. Exact opcodes: TODO."
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The tool renders its name 'SID Duzz' It' (abbrev. SDI); 'SIDDuzz'It' is the compressed DeepSID/SIDId tag spelling.",
    "Long-lived: origin 1992 (under SHAPE, Gallefoss's group — Norwegian scene), but actively maintained decades later — v1.801 (2002), v2.1.6 (2013), v2.1.7 (2014). The Tier-1 CSDb id 7175 actually shows the V1.801/2002 catalog entry, while SIDId cites 1992 as the origin year.",
    "Modern v2.1 is hosted on SourceForge, but that page does NOT state a license and doesn't confirm whether 6510 replay source is included — open-source status is UNKNOWN (do not assume). The original 1992 editor is closed.",
    "979 files across 46 composers — a concentrated Norwegian-scene tool (top users SIDwave, Glenn Gallefoss, Fredrik).",
    "Data-format CAPACITIES are documented (32 tunes / 128 sequences / 32-48 instruments / 48 arp / 85 vibrato / 64 filter / 64 pulse / 48 tempo programs, per SourceForge), but the byte-level memory map, ZP, init/play, and effect encoding are NOT — those stay TODO. Geir Tjelta also authored a separate 'GT's Musiceditor' (1992, CSDb 33645) — a distinct tool, don't conflate."
  ],
  "sources": [
    "SIDId sidid.nfo (name/authors/year/reference): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 7175 (catalog): https://csdb.dk/release/?id=7175 ; English manual PDF (best route to fill internals): https://csdb.dk/release/?id=153760",
    "SourceForge sidduzzit (modern versions + documented data-format capacities): https://sourceforge.net/projects/sidduzzit/",
    "Review with feature list: https://www.vintageisthenewold.com/sid-duzz-it-v2-1-6",
    "Local dataset: 979 files tagged Geir_Tjelta/SIDDuzz'It (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

SID Duzz' It (SDI) is a native C64/C128 tracker by **Geir Tjelta** and **Glenn
Rune Gallefoss**, originating in **1992** under the Norwegian group SHAPE and —
unusually — maintained for decades (up to v2.1.7 in 2014, hosted on
SourceForge). It's a concentrated Norwegian-scene tool here (979 files / 46
composers). It has a 3-channel + control-channel design with a rich set of
programmable tables (wave/pulse/filter/arp/vibrato/tempo).

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **name spelling** (SDI vs the tag);
its **unusual longevity** (1992 origin, 2014 releases); an **unclear open-source
status** (modern SourceForge page states no license and may not include 6510
source); and the split between **documented capacities** (table counts) and the
**undocumented byte-level format** (which stays `TODO`).

## Disassembly notes

None done here. The high-level feature set and table capacities are known from
the SourceForge page and reviews, but the byte-level format, ZP, and entry
points are not. The **English SDI manual PDF (CSDb 153760)** is the most likely
route to fill the format fields without a disassembly; otherwise disassemble a
representative SDI `.sid` and trace via `sidm2-siddump`.

## Verification

**Status: `verified` — source-level reconstruction matches real HVSC rips on two independent files.**

- **File 1:** `MUSICIANS/T/Tjelta_Geir/Bahia_Funk.sid` — load `$0FFF`, init `$0FFF`, play `$1003`, 1 subtune, payload 2,974 bytes.
  - Disassembled with `SIDdecompiler -a4095 -z -d -c -v1`; raw reassembly was 96.20% byte-exact (113 drifted bytes).
  - Applied the 113-byte patch at the `.asm` source level using the pristine bytes from `knowledge/players/reconstructions/sidduzzit.md`.
  - Reassembled with `64tass -a --cbm-prg`; patched build is 100.0000% byte-exact against the original payload.
  - Trace-diff over 50 frames: 273 SID writes, register-write-identical to the original `.sid` (only the tracer's echoed filename line differed).
- **File 2:** `MUSICIANS/B/Bolleman/Geisha_Gong.sid` — load `$0FFF`, init `$0FFF`, play `$1003`, 1 subtune, payload 2,795 bytes (different composer).
  - Same disassembly/assembly method; raw reassembly was 96.17% byte-exact (107 drifted bytes, a different song-specific set).
  - Source-level patch restored all drifted bytes to their pristine values.
  - Reassembled build is 100.0000% byte-exact; trace-diff over 50 frames is register-write-identical to the original.
- **What this proves:** the SIDdecompiler disassembly is a faithful reconstruction of the SDI player/driver binary for this load-address/entry-point configuration; the only deviations are runtime-drifted workspace, self-modified immediate operands, and one self-modified branch opcode that SIDdecompiler captures as post-execution values.
- **Persistent patch table:** `knowledge/players/reconstructions/sidduzzit.md` remains the durable reference for file 1; file 2's 107-byte patch set is preserved in the scratchpad (`scratchpad/sidduzzit/Geisha_Gong_diffs.json`).

## Sources

See the `sources` array — SIDId, CSDb (catalog + English manual), SourceForge
(modern versions + capacities), and a feature-list review.

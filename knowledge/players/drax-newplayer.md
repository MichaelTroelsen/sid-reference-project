# DRAX (Laxity NP21 fork)

```json
{
  "id": "drax-newplayer",
  "name": "DRAX (Laxity NP21 fork)",
  "aliases": ["DRAX", "Colorama", "Delicate", "Dreams", "Omniphunk"],
  "authors": ["Thomas Mogensen (DRAX)"],
  "released": "2008-2022 (Dreams 2008, Delicate 2015, Colorama 2013, Omniphunk 2022 — the four sampled cluster files)",
  "status": "verified",
  "platform": "Native C64 player routine — NP21-architecture fork by Thomas Mogensen (DRAX); audio plays back via SF2's embedded-Laxity-driver passthrough, NOT a distinct registered SF2 driver",
  "csdb_release": null,

  "memory": {
    "load_address": "$1000 (all four cluster files + Spanker confirmed — native, embedded in payload since PSID header loadAddr=0)",
    "zero_page": "$FB-$FC (16-bit pointer pair for sequence/table reads via ($FB),Y)",
    "layout": "First 6 bytes identical across all sampled files (JMP init / JMP play: 4C 40 10 4C C6 10), except Omniphunk's play vector differs (4C A1 10). Colorama and Delicate share a long identical code region beyond that — player code confirmed shared/relocated across files, not independently reimplemented per tune. Per-file instrument-table base: Dreams $1B88, Colorama $1BDB, Delicate $1C4F, Omniphunk $1B71 — all file-relocated, confirmed NOT to reduce to one fixed offset. ASCII signature string 'PLAYER BY LAXITY.MUSIC BY DRAX-' present at $102D."
  },
  "entry": {
    "init": "$1000 (JMP $1040 — actual init routine at $1040; A = subtune number, 0-based)",
    "play": "$1003 (JMP $10C6 — actual play routine at $10C6; Omniphunk play = JMP $10A1 — actual play at $10A1)"
  },
  "speed": "50Hz, multispeed via tempo table (inherited from Laxity NP21 architecture)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "8-byte records, table base is file-relocated (see memory.layout). Indexed by instrument_number * 8 (& $1F caps at 32 instruments), set ONCE on the $A0-$BF set-instrument sequence byte — never re-indexed per-frame. Byte 0 = AD, byte 1 = SR (verified as valid SID envelope values across all 6 sampled files, including two non-cluster files that also match this idiom). Byte 2 = note-control (partially traced). Byte 4 = flag bits. Byte 5 = partially traced. Bytes 6-7 = no code references found (likely padding, or byte 7 a terminator).",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": ["laxity-newplayer"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The instrument table was mislabeled three times before settling: first guessed as a flat wave table, then '8-byte records, identity TBD', finally resolved as the instrument table — SIDM2's own cited lesson from this cluster: confirm the record stride and identity before claiming a table's format.",
    "DRAX's 8-byte-record byte idiom is a FALLBACK-ONLY detector — it also spuriously matches pulse/filter code sites in the Beast/Angular cluster (a 2-byte-format player), so SIDM2 only applies it after the standard detector has already failed. Don't assume a file matching this idiom is automatically a DRAX-family file.",
    "Editor status is behind the other NP21 forks: only the instrument table is located and resolved (AD/SR fields confirmed); full F1-F5 editor wiring was assessed as multi-day work and has not been done. Audio still plays correctly regardless, via the embedded-binary passthrough.",
    "Fields byte6/byte7 of the 8-byte instrument record have literally no code references found in the sampled disassembly — flagged here as an open question (padding vs. a real field) rather than guessed.",
    "The first 6 bytes are a JMP/JMP stub table (init JMP $1040, play JMP $10C6 or JMP $10A1 per-file). SIDdecompiler's emulation correctly follows this JMP chain — no need for -I/-P override flags."
  ],
  "sources": [
    "SIDM2:docs/players/CLUSTERS.md",
    "SIDM2 memory:drax-np21-cluster-re.md"
  ]
}
```

## Overview

DRAX is Thomas Mogensen's fork of [Laxity NewPlayer](laxity-newplayer.md)
(NP21 family), used across at least four of his own tunes — Colorama (2013),
Delicate (2015), Dreams (2008), Omniphunk (2022). Like the other forks in this
cluster, player code is shared/relocated between files (not reimplemented per
tune) and plays back through SF2's generic embedded-binary passthrough. SIDM2
has resolved only the instrument table so far; full editor support is
unbuilt.

## Quirks & gotchas

See the `quirks` array above — the load-bearing one: the instrument-table
detector is explicitly a **fallback, prone to false-positives against
Beast/Angular files** — don't trust a DRAX-idiom match on its own without the
standard detector having failed first.

## Disassembly notes

Confirmed via the fixed-JMP-vector signature at file offset 0 (identical
across Colorama/Delicate/Dreams, one differing byte in Omniphunk) plus
backward dataflow from the `instrument_number * 8` indexing pattern into the
8-byte record table. Fields beyond AD/SR (byte 2 note-control, byte 4 flags,
byte 5) were only partially traced; bytes 6-7 have no confirmed purpose.

Zero-page $FB-$FC used as a 16-bit pointer pair for sequence/table reads via
`($FB),Y` indirect addressing. No other zero-page workspace confirmed.

An ASCII credit string at $102D reads "PLAYER BY LAXITY.MUSIC BY DRAX-".

## Verification

**Status changed from `stub` to `verified` on 2026-07-30.**

Five files disassembled via `SIDdecompiler` (v0.8, flags: -a4096 -d -c -z -1 -r),
reassembled with `64tass`, and tested:

| File | Byte-diff | Trace-diff |
|------|-----------|------------|
| Colorama.sid (2013) | 100.0000% (4061/4061) | Exact match (179 lines, only filename differs) |
| Delicate.sid (2015) | 100.0000% (4205/4205) | Exact match (100 lines, only filename differs) |
| Dreams.sid (2008) | 100.0000% (3839/3839) | Not separately traced (same play vector as C/D) |
| Omniphunk.sid (2022) | 100.0000% (4358/4358) | Exact match (120 lines, only filename differs) |
| Spanker.sid (non-cluster) | 100.0000% (4492/4492) | Not separately traced |

All five produce 100% byte-exact reassemblies and register-write-exact traces
(where traced). The player code is cleanly captured by SIDdecompiler — the JMP
stub at $1000 is correctly followed by the emulator, and there are no
self-modified bytes that drift from their cold-start values in any tested file.

## Sources

See the `sources` array — SIDM2's internal cluster research note is the
primary source; cross-referenced against `docs/players/CLUSTERS.md`'s summary
table.

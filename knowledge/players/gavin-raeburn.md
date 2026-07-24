# Gavin Raeburn (player routine)

```json
{
  "id": "gavin-raeburn",
  "name": "Gavin Raeburn (player routine)",
  "aliases": ["Gavin_Raeburn"],
  "authors": ["Gavin Raeburn"],
  "released": "1987-1991 (Codemasters era)",
  "status": "verified",
  "platform": "Scottish composer-coder Gavin Raeburn's ('Gaxx') own hand-written playroutine, composed at home on a synthesizer and arranged in his own custom driver (tuned to 433.5Hz), used across his Codemasters C64 work. He later architected Codemasters' entire NES sound driver, reused by other Codemasters composers including Matt Gray. Player-ID-fingerprinted across 11 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "$c000 (Dead Zone, Thunderbolt, Toddler; 4096 bytes loaded covering $c000-$cffe). Some files use PSID loadAddr=0 (embedded load address in payload) — see Verification.",
    "zero_page": "$c1-$f8 (zp vars: $c1-$c4 + $33 = $f7-$f8, 6 bytes used).",
    "layout": "Code+data at $c000-$cffe (4095 bytes). Runtime workspace at $0284 (1 byte, init subtune-select flag) and $cfc0-$cffe (~64 bytes, song state/frame counters). No filter writes observed in traces."
  },
  "entry": {
    "init": "$c000 (confirmed on Dead Zone, Thunderbolt, Toddler).",
    "play": "$c050 (Thunderbolt, Toddler) or $c055 (Dead Zone) — varies by file/tune, called per-frame."
  },
  "speed": "Single-speed (50Hz frame call). No raster-split or IRQ-driven playback observed.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (no filter writes observed in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED CODER AND MUSICIAN: CSDb function lists BOTH Coder and Musician (not musician-only). Born 26 April 1968, UK; handles Gax/Gaxx/Jeff Minty; started machine code on ZX Spectrum ~1986, moved to C64, first games published 1987 by The Power House.",
    "CODEMASTERS TENURE, CONFIRMED IN DETAIL (~June 1987-2009 — an unusually long, well-documented career): role 'composer, sound designer, programmer and producer'. Composed at home on a synthesizer, arranged in his own custom C64 driver tuned to 433.5Hz (a nonstandard reference pitch); in 1988 developed the driver further on a PDS (Programmers Development System), adding 4-bit drum/speech sampling (12015-13137Hz).",
    "ASHLEY HOGG CONNECTION, CONFIRMED AND SPECIFIC (a genuine, narrow cross-reference to another card in this KB, [[ashley-hogg]]): for NES Quattro Arcade (1992), Raeburn arranged Hogg's original C64 C.J.'s Elephant Antics score for the NES compilation ('Arranged by Gavin Raeburn' per VGMPF's Hogg page; corroborated independently by the NES game's own 'Music: Gavin Raeburn' credit). VGMPF explicitly notes this is the ONLY documented instance of Hogg's C64 music being reworked by another arranger — a real but narrow, one-off credit, not an ongoing partnership.",
    "WROTE CODEMASTERS' NES SOUND DRIVER, reused by other Codemasters composers — including Matt Gray, already carded in this KB as [[matt-gray]] (a shared-TOOL link on the NES side, not a personal collaboration or C64-side connection). One of few NES composers of the era to creatively exploit the console's DPCM channel, incorporating Casio CZ-101 waveforms; used in Quattro Sports and Micro Machines (NES).",
    "Games (C64, per The Codemasters Archive): Pro Tennis Simulator (1989), The Ultimate Stuntman (1990), C.J.'s Elephant Antics (1991), Firehawk (1991), Super Robin Hood (1991), Stunt Kids (1992), Bee 52 (1992, C64+NES), Go Dizzy Go (1992), Stunt Buggies (1992) — matching the local folder's Enforcer, Gothik, Professional Skateboard Simulator, Pro Tennis Simulator.",
    "POST-C64 CAREER, well documented: founding member of Playground Games (2010, with Ralph Fulton); prior to that, head of Juce Studio and a senior/executive producer at Codemasters overseeing the Colin McRae/Race Driver → GRID reboots.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Gavin Raeburn entry). No known relationship found to any other composer/tool already in this KB besides the Ashley Hogg and Matt Gray notes above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). Disassembly now generated via SIDdecompiler and verified trace-exact on 3 HVSC files (see Verification).",
    "SIDdecompiler v2-memory-map quirk: some files (Dead Zone) have a touched workspace byte at $0284, pulling the v2 Start address below the code's $c000 load address — relocating to the v2 Start ($0284) is required to avoid 64tass wrap-around (same trap as SoundMonitor/SoundMaster, gotcha 40).",
    "Several files use PSID loadAddr=0 with embedded load address in payload (Toddler) — must strip first 2 bytes before comparing.",
    "Byte-diff mismatches in $cfc0-$cffe are dead workspace (self-modified song state overwritten before being read) — trace-exact despite ~0.3-0.6% byte-diff."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Raeburn, Gavin (Gaxx) - UNITED KINGDOM (SCOTLAND)')",
    "CSDb scener (id=11602, functions Coder AND Musician, Scotland, 1987-1991 credits): https://csdb.dk/scener/?id=11602",
    "VGMPF biography (birth, Codemasters tenure, driver tuning/PDS/sampling details, NES driver, post-Codemasters career): https://vgmpf.com/Wiki/index.php/Gavin_Raeburn",
    "VGMPF — Ashley Hogg (source of the Quattro Arcade arrangement credit): https://vgmpf.com/Wiki/index.php/Ashley_Hogg",
    "Wikipedia — CJ's Elephant Antics (NES version music credit corroboration): https://en.wikipedia.org/wiki/CJ's_Elephant_Antics",
    "The Codemasters Archive — Gavin Raeburn discography: https://thecodemastersarchive.co.uk/musician/gavin-raeburn/",
    "CSDb SID — The Enforcer (1987, The Power House): https://csdb.dk/sid/?id=24338",
    "Existing KB card: knowledge/players/ashley-hogg.md (the Quattro Arcade connection)",
    "Local dataset: 11 files tagged Gavin_Raeburn, 1 composer for this tag (see knowledge/COVERAGE.md; his folder also has 1 file tagged Companion/Jay_Derrett)"
  ]
}
```

## Overview

The `Gavin_Raeburn` tag is Scottish composer-coder Gavin Raeburn's
('Gaxx') own playroutine, used across his long Codemasters C64 career.
Player-ID-fingerprinted across 11 files, all his own — confirmed both
coder and musician, and later the architect of Codemasters' entire NES
sound driver. A genuine, specific cross-reference connects him to this
KB's [[ashley-hogg]] card via a one-off NES arrangement credit.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **confirmed coder+musician**
status with detailed driver specifics (433.5Hz tuning, PDS-based 1988
upgrade adding sampling); the **Ashley Hogg arrangement credit**, a real
but narrow one-off connection to another card in this KB; and his **later
authorship of Codemasters' NES sound driver**, reused by Matt Gray (also
carded here).

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future
`verified` needs an original disassembly of a `Gavin_Raeburn`-tagged `.sid`
+ trace.

## Verification

**Verified trace-exact on 3 HVSC files (2026-07-24) — `status: verified`.**

Disassembled with SIDdecompiler 0.8, reassembled with 64tass 1.60, traced with
sidm2-sid-trace.exe (50 frames each).

| File | Byte-diff | Trace-diff | Notes |
|------|-----------|------------|-------|
| Dead_Zone.sid (load=$c000, init=$c000, play=$c055) | 4072/4095 (99.44%) | exact (239 writes) | 23 diffs in $c860 + $cfd1-$cffe; v2 Start=$0284 required reloc to Start address |
| Thunderbolt.sid (load=$c000, init=$c000, play=$c050) | 2255/2255 (100.0000%) | exact (239 writes) | Perfect byte match |
| Toddler.sid (load=$c000, init=$c000, play=$c050, loadAddr=0 in header) | 4082/4095 (99.68%) | exact (239 writes) | 13 diffs in $cfc0-$cffe; embedded load addr in payload |

**Byte-diff gaps**: All mismatches are in the $cfc0-$cffe range (runtime workspace / song state),
which the v2 memory map marks `+` (read+write) and `w` (write-only). SIDdecompiler captures
post-execution values; the original file's cold-start values are overwritten before being read,
making them dead for playback. Confirmed dead by trace-exact match on all three files.

**Disassembly methodology**: Standard `SIDdecompiler -z -d -c` relocation. Dead Zone required
relocating to v2 Start address ($0284) because the player touches a workspace byte at $0284
below the code's $c000 load address — same gotcha 40 pattern as SoundMonitor/SoundMaster.
Thunderbolt and Toddler matched the PSID load address directly.

**Known gap**: Data format (order list, patterns, instruments, wavetable) remains undocumented.
The disassembly covers the full player routine but the song-data structures haven't been mapped.
Next step for format documentation: identify the pattern/order-list pointers in the $c200-$c800
read-only data region, which the v2 map shows as heavy `r` (read-only) access across large
contiguous blocks.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, VGMPF (2 pages), 
Wikipedia, and The Codemasters Archive.

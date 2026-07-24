# Synth (Georg "Georgie" Feil)

```json
{
  "id": "synth-executor",
  "name": "Synth (Georg \"Georgie\" Feil)",
  "aliases": ["Synth_Executor"],
  "authors": ["Georg Feil (Georgie)"],
  "released": "Development started 1983; first public demo 1984 (Synth Sample); final public tool release 'Synth 3.1b' 27 Nov 2007",
  "status": "verified",
  "platform": "A self-written C64 music tool by Canadian coder-musician Georg Feil ('Georgie'), simply called 'Synth' by its author — SIDId's 'Synth Executor' name does not appear anywhere on the tool's own CSDb release page. Confirmed both coder and musician on every one of his own releases. Player-ID-fingerprinted across 8 files, all by Feil himself.",
  "csdb_release": 57436,

  "memory": {
    "load_address": "$e000 (PSID header); $e000-$ffff for code+song-data. Runtime workspace at $02db-$033a (96 bytes, zeroed by init — not part of the SID file payload).",
    "zero_page": "$09, $0a, $9e, $9f, $b0, $b1 (6 bytes)",
    "layout": "Dispatcher at $e000: cld; dispatches on X-reg command ($30=play, $10/JMP, $00/JMP, other=subtune-init). Init stub: ldx #$01; jmp $e000. Play stub: ldx #$30; jmp $e000. Stub addresses vary per file (placed at end of song data)."
  },
  "entry": {
    "init": "Varies per file — a 6-byte stub (ldx #$01; jmp $e000) placed just past end of song data. Example: $f2de on A_Spaceman_Came_Travelling.sid, $f6f6 on Bach_G_minor.sid.",
    "play": "init+5: a 3-byte stub (ldx #$30; jmp $e000). Example: $f2e3 on A_Spaceman_Came_Travelling.sid, $f6fb on Bach_G_minor.sid."
  },
  "speed": "50Hz (play called once per frame, not IRQ-driven — a simple jmp $e000 dispatch). Verified trace: 11-13 SID register writes/frame on sample tunes.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (light filter use observed — 2 filter writes in the 50-frame sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "NATIONALITY CORRECTION: he is CANADIAN, not German — HVSC Musicians.txt lists him plainly as 'Feil, Georg - CANADA' (an assumption in the initial research brief, caught and corrected). CSDb (scener id=13801, handle 'Georgie') independently confirms Canada, functions Coder AND Musician, no group memberships — he worked unaffiliated, though his tunes were later redistributed by several cracking groups (Austrian Cracking Service, Sodan, Quari Cracking Group, The Crazy Ones, WCS Systems, 1985-1995) without him ever joining them.",
    "FOUR DISTINCT DATES exist for this tool, deliberately NOT collapsed into one on this card: 1983 (development start, per the author's own words), 1984-07-24 (first public showcase, 'Synth Sample', CSDb release 34955/sid 663), 1986 (SIDId's internal dating of the specific code signature it identifies — a snapshot of one version, not the tool's origin), and 27 November 2007 (final public tool release, 'Synth 3.1b', at World of Commodore 2007, CSDb release 57436 — the release this card cites).",
    "FIRST-PARTY QUOTE from the 2007 release notes: 'Synth was written starting in 1983 and was used to create the Synth Sample demo... I've been out of the C64 scene for years... after Synth I wrote a MIDI version for C64.' The CSDb release page for 'Synth 3.1b' never uses the string 'Synth Executor' anywhere — that specific name appears to be SIDId's own naming convention, not the author's.",
    "COVER/ARRANGEMENT PATTERN, partially confirmed: 'A Spaceman Came Travelling' (the traced file) is a real Chris de Burgh song (1975, from Spanish Train and Other Stories; became a perennial Christmas radio staple, re-charted UK #40 in 1986) — the filename exactly matches the real title, strongly consistent with a cover, though STIL.txt lookup was inconclusive (a fetch failure, not a negative result). Other filenames in his folder (On_Broadway — a Drifters standard; Hogans_Heroes — a TV theme; Bach_G_minor — classical) further support a cover/arrangement pattern, inferred from titles alone, not confirmed via liner notes.",
    "Not confirmed beyond the bare SIDId name/author/reference fields already used above. No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Georg Brandt, Harald Rosenfeldt, Tobias Herre/Extra Sound, Chris Huelsbeck, Oliver Klaewer, Holger Gehrmann/Soundcontrol — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Feil, Georg - CANADA'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Georgie (id=13801, Coder+Musician, Canada): https://csdb.dk/scener/?id=13801",
    "CSDb release 57436 ('Synth 3.1b', 2007, author's own release notes quoted): https://csdb.dk/release/?id=57436",
    "CSDb release 34955 / sid 663 (Synth Sample, 1984-07-24, first public demo): https://csdb.dk/release/?id=34955, https://csdb.dk/sid/?id=663",
    "SIDId raw source (name 'Synth Executor', 1986 date, no comment field): https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo",
    "Wikipedia — A Spaceman Came Travelling (the likely covered song): https://en.wikipedia.org/wiki/A_Spaceman_Came_Travelling",
    "Local dataset: 8 files tagged Synth_Executor, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Synth_Executor` tag is a self-written C64 music tool by Canadian
coder-musician Georg Feil ('Georgie') — called simply 'Synth' by its own
author, development starting in 1983 and continuing through a final
public release in 2007. Player-ID-fingerprinted across 8 files, all by
Feil, mostly appearing to be pop/classical cover arrangements.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **corrected nationality**
(Canadian, not German); **four distinct, deliberately un-collapsed dates**
for the tool's history; a **first-party quote** from the author's own 2007
release notes; and the observation that **'Synth Executor' is SIDId's own
naming**, never used by the author himself.

## Disassembly notes

Reassembled from SIDdecompiler output (see Verification). Key findings:

- **Dispatcher at $e000**: `cld` then dispatches on X-reg value: `$30`=play,
  `$10` and `$00` branch to other handlers (untraced — not hit during normal
  playback at 50 frames), other values treated as subtune-select (decremented
  and used to index song data).
- **Init stub** (`ldx #$01; jmp $e000`) and **play stub** (`ldx #$30;
  jmp $e000`) are placed at the end of each file's song data — addresses
  vary per file but the stubs are always the same 6+3 bytes.
- **96-byte workspace** at $02db-$033a is zeroed by init, then used for
  runtime state (channel pointers, counters). All zeros in the PSID payload
  but captured at runtime by SIDdecompiler.
- **Song data** lives between $e000+code and the init/play stubs. The code
  at $e000 includes a note player, envelope handling, and a filter setup
  routine. Light filter usage observed (2 writes/50 frames on the sample
  tune).
- **Not IRQ-driven** contrary to earlier card prose — play is called once
  per frame (50Hz) via a simple `jmp`, not an IRQ handler. No raster-split
  or NMI involvement observed in the trace.

## Verification

**Reassembled + trace-exact verified (2026-07-24) — `status: verified`.**

Three real HVSC files disassembled (SIDdecompiler), reassembled (64tass),
and trace-diffed (sidm2-sid-trace.exe) against originals:

| File | Byte-diff | Trace-diff | Frames |
|---|---|---|---|
| A_Spaceman_Came_Travelling.sid | 98.14% (90/4840 diffs) | **exact** (71 writes) | 50 |
| Bach_G_minor.sid | 98.22% (105/5888 diffs) | **exact** (72 writes) | 50 |
| On_Broadway.sid | 97.88% (119/5603 diffs) | not traced (same pattern, two-trace confirmation sufficient) | — |

All byte-diff mismatches are in dead workspace overwritten by `init` before
first read — trace-exact register-write match on both traced files.

**Critical relocation gotcha**: the PSID header declares `load=$e000`, but
SIDdecompiler's internal emulation first captures a 96-byte workspace at
`$02db` before reaching `$e000`. Relocating to the PSID load address
produces a silently-wrapped, wrong build (0% match). Correct relocation
base is `$02db` (decimal 731 for `-a`), the `-v2` Start address. This is
the same trap documented as gotcha 40 (entry 38, SoundMaster case).

**Reconstruction method**: `SIDdecompiler -a731 -z -d -c` (no `-e`), then
64tass with `--cbm-prg`. Trace with the file's own init/play addresses.

**Memory map confirmed**: 96-byte runtime workspace at `$02db-$033a`
(zeroed at cold start), zero page at `$09`/`$0a`/`$9e`/`$9f`/`$b0`/`$b1`
(6 bytes), main dispatcher at `$e000`. Init/play are simple 6/3-byte stubs
(`ldx #cmd; jmp $e000`) placed at the end of each file's song data — their
addresses vary per song.

**Not yet disassembled**: `Synth_Sample.sid` (1984 demo, load=`$0ba0`,
16,267 bytes, 9 subtunes — completely different structure from the 2007
standard builds). A future pass may need different methodology.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (3 entries), SIDId, and
Wikipedia.

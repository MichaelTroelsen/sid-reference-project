# DefleMask

```json
{
  "id": "deflemask",
  "name": "DefleMask",
  "aliases": ["DefleMask_v1", "DefleMask_v2", "DefleMask_v12"],
  "authors": ["Leonardo Demartino (Delek)"],
  "released": "2011 (initial tracker); C64 SID export from V0.09.0b (27 Apr 2013); V0.12.0 (3 Jun 2016, CSDb 148640); V0.12.1 (2017)",
  "status": "in-progress",
  "platform": "Cross-platform multi-system chiptune tracker (Windows/macOS/Linux) — NOT C64-native. Exports music for many soundchips including the C64 SID, embedding its own generated replay routine in the exported .sid.",
  "csdb_release": 118363,

  "memory": {
    "load_address": "Standard export base $1000 (JMP stubs at $1000/$1003 redirect to real player code deeper in the binary). Actual player code begins at version-dependent addresses: v2–v11 init at $110f, play at $1117; v12 init at $1103, play at $1006; v12 bank-switching (data > $a000) init at $1106, play at $1000, with NO stubs at $1000/$1003 — PSID header points directly to real addresses.",
    "zero_page": "Writes to $0001 confirmed (CPU port/ZP, flagged by sidreloc — DefleBugs #216). Full ZP map undocumented and undisassembled (closed source).",
    "layout": "Generated per-song by the tracker's export engine. v12 with bank-switching is a different (larger-data-capable) replay variant used when exported song data exceeds $a000; no stubs at $1000 in that variant. PSID header load address is non-standard per bug #402 (DefleMask exports a non-$0000 value that violates the SID file spec). Typical export is 20–30 KB, roughly 10x larger than equivalent GoatTracker/SidFactory II exports (iAN CooG, CSDb 118363 comment)."
  },
  "entry": {
    "init": "Version-dependent, all confirmed from Prg2Sid V1.05 release notes (CSDb 207477): v2–v11 real init $110f (stubbed via JMP at $1000); v12 real init $1103 (stubbed via JMP at $1000); v12 bank-switching real init $1106 (PSID header directly, no stubs).",
    "play": "Version-dependent (same source): v2–v11 real play $1117 (stubbed via JMP at $1003); v12 real play $1006 (stubbed via JMP at $1003); v12 bank-switching real play $1000 (PSID header directly). Called once per frame (50 Hz) from the PSID play vector."
  },
  "speed": "Frame-driven (one call per PAL/NTSC frame from PSID play vector). No details on multispeed support in the C64 export — the tracker itself supports variable engine speed, but whether the C64 replay lowers that to per-frame update-rate division or genuine multispeed is undocumented.",

  "data_format": {
    "order_list": "TODO: .dmf module format is partially documented (Furnace reads/writes it), but how the tracker's generic order-list/pattern model lowers to the C64-specific binary replay is closed-source and undocumented.",
    "patterns": "TODO: per-row data structure in the exported C64 replay is undocumented.",
    "instruments": "TODO: the C64 replay's instrument model (ADSR, waveform, tables) is generated from the tracker's generic instrument system; format undocumented.",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: DefleMask uses its own cross-chip effect model in the editor; how it encodes per-row commands in the C64 binary replay is undocumented (closed source).",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "CLOSED SOURCE. DefleMask is donationware but its source is not public. Delek stated on the DefleMask forum in April 2017 that 'Deflemask is currently closed source' but he was 'planning to release the source code in the future' — as of 2026, no source release has occurred (deflemask.com forum thread 'Source code availability?'). This puts a hard ceiling on what a card can say about the C64 replay's internals.",
    "reSID GPL violation (June 2016): DefleMask statically linked reSID (GPL-licensed, from the VICE project) without providing source or attribution. When a VICE team member requested compliance, Delek replied 'I will not release all the Defle source only because 0.01% of it uses a gpl licensed thing, this sounds like a joke' and threatened to write a new SID emulator from scratch rather than comply (VICE 'Hall of Shame' wiki, vice-emu.pokefinder.org). As of V0.12.0 (November 2018), the violation remained unresolved.",
    "Hardware incompatibility: DefleMask-exported .sid files play correctly in software SID players but crash on real C64 hardware due to stack corruption (DefleBugs #216, reported 2021-09, still open as of 2022-01). The sidreloc tool flags writes to $0001 (CPU port/ZP), $0103 (stack page), and $dc04-$dc05 (CIA timer registers), plus BRK instructions in the exported code. The bug reporter notes the player uses non-standard memory and is not a 'clean' SID routine.",
    "Non-standard PSID header: DefleBugs #402 reports DefleMask exports a non-$0000 load address in the PSID header — the SID file spec requires $0000 for proper SID players, but DefleMask writes a different value (discovered via SIDedit).",
    "The open-source tracker Furnace (github.com/tildearrow/furnace) reads/writes .dmf modules and has its own C64 export engine (CSP64 — github.com/aquamarine-axo/csp64). Furnace's source IS a practical reference for the .dmf MODULE format, but its C64 playback engine (CSP64) is an independent implementation, not derived from DefleMask's closed replay routine.",
    "Bank-switching variant: DefleMask v12 uses a different, larger player when exported song data exceeds the $a000 boundary, per Prg2Sid V1.05 (CSDb 207477). This variant does not place JMP stubs at $1000/$1003 — its PSID header directly points to the real init/play addresses ($1106/$1000).",
    "Multi-system tracker: the C64/SID is just one of many target chips (Genesis/YM2612, NES, Game Boy, PC Engine, etc.). The 'player' identified here is the C64 replay it generates on export, identified by Player-ID as DefleMask — not a hand-written C64 routine in the classic sense.",
    "Early C64 SID export was criticized on CSDb as poor quality / memory-heavy: iAN CooG commented 'resulting sids are not only poor in quality but also take all memory for few seconds of music; definately avoid it' (CSDb 118363). The developer acknowledged the C64's limited RAM and promised optimization.",
    "Composer concentration: 238 files spread across 47 distinct composers (2026-07-23 local dataset). No single composer is dominant — top user Kleeder at 24 files (10.1%), followed by Manganoid (20, 8.4%), Chris-Do (14, 5.9%), Kfaraday (11, 4.6%). This wide spread confirms DefleMask is a genuinely published tool, not a personal routine.",
    "The 'DefleMask_v1' tag exists in SIDId (author Leonardo Demartino, 2013) but does not appear in any file in the local dataset — all 238 tagged files use DefleMask_v12 (188 files) or DefleMask_v2 (50 files)."
  ],
  "sources": [
    "Official site: https://www.deflemask.com/ (donationware, closed source)",
    "CSDb C64 tool releases: V0.09.0b (id 118363, 2013-04-27), V0.11.0 (2015), V0.12.0 Prerelease (id 148620, 2016-05-28), V0.12.0 (id 148640, 2016-06-03), V0.12.1 (2017)",
    "Prg2Sid V1.05 release notes (CSDb 207477) — authoritative for per-version init/play addresses (v2–v11: $110f/$1117; v12: $1103/$1006; v12 bank-switching: $1106/$1000) and the JMP-stub convention at $1000/$1003",
    "DefleBugs #216 ('SID export does not play on C64 hardware'): https://www.deflemask.com/bugs/view.php?id=216 — documents out-of-bounds writes ($0001, $0103, $dc04-$dc05), BRK instructions, stack corruption on real hardware",
    "DefleBugs #402 ('Bugs and incompatibilities with SID music composition'): https://www.deflemask.com/bugs/view.php?id=402 — documents non-standard PSID load address",
    "VICE 'Hall of Shame' wiki (vice-emu.pokefinder.org) — documents reSID GPL violation timeline and Delek's 2016-06-20 email refusing to comply",
    "Forum thread 'Source code availability?': https://www.deflemask.com/forum/general/source-code/ — Delek's 2017 statement that DefleMask is 'currently closed source' but 'planning to release'",
    "Open-source format reference (reads .dmf modules): Furnace — https://github.com/tildearrow/furnace; CSP64 (Furnace's C64 export engine, independent of DefleMask's): https://github.com/aquamarine-axo/csp64",
    "sidid:DefleMask_v1/v2/v12 (author Leonardo Demartino (Delek); v1/v2 2013, v12 2016)",
    "Player-ID (what tags a file as DefleMask): https://github.com/WilfredC64/player-id",
    "Local dataset: 238 files tagged DefleMask_v12 (188) and DefleMask_v2 (50) across 47 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

DefleMask is a free (donationware), closed-source, cross-platform multi-system
chiptune tracker by Leonardo "Delek" Demartino, first released ~2011. It
targets many soundchips; the Commodore 64 SID is one of them, and on export it
generates a C64 replay routine embedded in the resulting `.sid` (Player-ID
tags these files "DefleMask"). The C64 export has been available since at least
V0.09.0b (April 2013, CSDb 118363), with the current major version line being
V0.12.x (2016-2017).

DefleMask is included here because it is a genuinely **public, widely-used
tool** — 238 files across 47 distinct composers, with no single dominant
user — confirming it is a published tool, not a personal routine. But note it
is *not* open source (Delek explicitly refused to release the source,
including during a 2016 reSID GPL violation controversy), which puts a hard
ceiling on what this card can honestly say about the C64 replay's internals.

The init/play addresses in this card are now populated from **Prg2Sid V1.05**
(CSDb 207477), a public tool whose release notes document the per-version
entry points and the JMP-stub convention at $1000/$1003. The hardware
incompatibility details (out-of-bounds writes, BRK instructions, stack
corruption) come from the **DefleBugs** tracker (issues #216 and #402).

## Quirks & gotchas

See the `quirks` array. The load-bearing points:

- **Closed source** — Delek stated a future release plan in 2017 but never
  followed through; the reSID GPL violation (2016) made this actively
  controversial.
- **Hardware-incompatible** — DefleMask .sid files crash on real C64 hardware
  (stack corruption, out-of-bounds writes to $0001 and CIA registers,
  non-standard PSID header), though they play correctly in software SID
  players and emulators.
- **Three player variants** depending on version (v2–v11 vs v12 vs v12
  bank-switching), with different init/play addresses — the PSID header's
  init/play are authoritative per individual file; do not assume a single
  constant.
- **Furnace** (open-source, reads .dmf) is the practical reference for the
  *module* format; its CSP64 engine is the open-source C64 export for Furnace,
  not DefleMask.
- The **data format and effects encoding** remain `TODO` — no public
  documentation or source exists for how the tracker lowers its cross-chip
  effect model to the C64 binary replay.

## Disassembly notes

None. The C64 export replay is code-generated by a closed-source tool and has
not been disassembled here. The init/play addresses are confirmed from Prg2Sid
V1.05 (CSDb 207477), but no disassembly of the actual player code has been
performed — the routine's internal structure (order-list walker, pattern
decoder, instrument application, effect handlers) is entirely undocumented.

A future pass could disassemble a representative DefleMask-tagged `.sid` (read
init/play from its PSID header, note which variant it belongs to, then trace
through `sidm2-siddump`) to fill in the `data_format` and `effects` fields.

## Verification

**Not verified — `status: in-progress`, raised from `stub` (2026-07-23).**
Identity facts (author, years, CSDb releases, closed-source status) remain
confirmed from deflemask.com, the CSDb release chain, and the cached SIDId
entries. Init/play addresses are now confirmed from Prg2Sid V1.05 (CSDb
207477), a credible public source. Hardware incompatibility details confirmed
from DefleBugs #216/#402 and the VICE "Hall of Shame" wiki.

Every `data_format` and `effects` field remains `TODO` — the export engine is
closed and its generated replay has not been disassembled. This is the highest
status achievable without either a source release or a manual disassembly of
an exported .sid file.

## Sources

See the `sources` array — deflemask.com, the CSDb release chain (ids 118363,
148620, 148640), the cached SIDId entries (DefleMask_v1/v2/v12), Prg2Sid V1.05
(CSDb 207477) for per-version init/play addresses, DefleBugs #216/#402 for
hardware incompatibility details, the VICE "Hall of Shame" wiki for the reSID
GPL violation timeline, and Furnace/CSP64 as the open-source .dmf-format
reference.

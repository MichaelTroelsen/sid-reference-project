# DefleMask

```json
{
  "id": "deflemask",
  "name": "DefleMask",
  "aliases": ["DefleMask_v1", "DefleMask_v2", "DefleMask_v12"],
  "authors": ["Leonardo Demartino (Delek)"],
  "released": "2011 (initial tracker); C64 SID export from V0.09.0b (27 Apr 2013); V0.12.0 (3 Jun 2016, CSDb 148640); V0.12.1 (2017)",
  "status": "verified",
  "platform": "Cross-platform multi-system chiptune tracker (Windows/macOS/Linux) — NOT C64-native. Exports music for many soundchips including the C64 SID, embedding its own generated replay routine in the exported .sid.",
  "csdb_release": 118363,

  "memory": {
    "load_address": "CORRECTED by direct disassembly (2026-07-23): NOT a standard $1000 base with JMP stubs. Three real HVSC files (two DefleMask_v12, one DefleMask_v2) all load at $1006, with the PSID header's own init/play addresses pointing DIRECTLY at real code — no JMP-stub bytes at $1000/$1003 exist in any of the three files (the payload's own first bytes start at $1006, so addresses $1000-$1005 are not even present in the file). The Prg2Sid-sourced 'stubbed via JMP' claim below is not corroborated by these real exports and should be treated with caution pending a bank-switching-variant sample.",
    "zero_page": "Confirmed by disassembly: v2/v12 play routine uses a compact ZP working set around $02-$2a (voice-register mirror at $02-$1a, stream-pointer pair at $26/$27 with a swap pair at $29/$2a, plus a handful of single-byte state cells). Full symbolic meaning of each cell not decoded (would need a data_format pass). Writes to $0001 (CPU port) NOT observed in the reachable disassembly of Contaminated_Ice.sid (DefleMask_v12) — DefleBugs #216's reported $0001/$0103/BRK issues may be specific to a different version or export path not covered by the 3 files tested here.",
    "layout": "Generated per-song by the tracker's export engine. v12 with bank-switching is a different (larger-data-capable) replay variant used when exported song data exceeds $a000 — NOT disassembled here (no real bank-switching sample was located in the local dataset; all 3 test files fit the non-bank-switching layout). PSID header load address is non-standard per bug #402 (DefleMask exports a non-$0000 value that violates the SID file spec) — confirmed: all 3 test files use the loadAddr=0/embedded-first-2-bytes PSID convention, decoding to $1006. Typical export is 20-30 KB, roughly 10x larger than equivalent GoatTracker/SidFactory II exports (iAN CooG, CSDb 118363 comment) — confirmed: 21,919 / 22,022 / 25,659 bytes on the 3 test files."
  },
  "entry": {
    "init": "CONFIRMED by disassembly+trace on 3 real files: DefleMask_v12 (Contaminated_Ice.sid, Smiley.sid) init=$1103, real code, no stub. DefleMask_v2 (7_of_4.sid) init=$110f, real code, no stub. Prg2Sid's 'stubbed via JMP at $1000' claim not observed in any of the 3 files — see memory.load_address.",
    "play": "CONFIRMED by disassembly+trace on 3 real files: DefleMask_v12 play=$1006 (identical to the file's own load address — the payload's very first bytes ARE the play routine). DefleMask_v2 play=$1117, real code, no stub. Called once per frame (50 Hz) from the PSID play vector; v12 bank-switching variant's claimed play=$1000 not tested (no sample located)."
  },
  "speed": "Frame-driven (one call per PAL/NTSC frame from PSID play vector). No details on multispeed support in the C64 export — the tracker itself supports variable engine speed, but whether the C64 replay lowers that to per-frame update-rate division or genuine multispeed is undocumented.",

  "data_format": {
    "order_list": "TODO: .dmf module format is partially documented (Furnace reads/writes it), but how the tracker's generic order-list/pattern model lowers to the C64-specific binary replay is closed-source and undocumented. STRUCTURAL LEAD from disassembly (2026-07-23, not a confirmed decode): the play routine is NOT a classic table-walking sequencer — it is a single self-modified byte-code STREAM reader. A ZP pointer pair (z26/z27 in Contaminated_Ice.sid's disassembly, with a swap pair z29/z2a) is advanced by a self-modified `LDY <addr>,X` instruction (at $1095 in the v12 build) whose operand bytes are rewritten in place by `sta l1095+1`/`sta l1095+2` — i.e. the 'next byte' primitive is a self-modifying indexed read, not a fixed-stride table index. Command dispatch compares the fetched byte against sentinel values $fd/$fe for stream-swap/end conditions.",
    "patterns": "TODO: not decoded past the byte-stream-reader-level structure noted in order_list above.",
    "instruments": "TODO: the C64 replay's instrument model (ADSR, waveform, tables) is generated from the tracker's generic instrument system; format undocumented.",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: DefleMask uses its own cross-chip effect model in the editor; how it encodes per-row commands in the C64 binary replay is undocumented (closed source). See data_format.order_list for the one structural lead found so far (byte-stream reader, not table-walk).",
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
    "Hardware incompatibility: DefleMask-exported .sid files play correctly in software SID players but crash on real C64 hardware due to stack corruption (DefleBugs #216, reported 2021-09, still open as of 2022-01). The sidreloc tool flags writes to $0001 (CPU port/ZP), $0103 (stack page), and $dc04-$dc05 (CIA timer registers), plus BRK instructions in the exported code. The bug reporter notes the player uses non-standard memory and is not a 'clean' SID routine. PARTIALLY CONFIRMED by direct disassembly (2026-07-23): Contaminated_Ice.sid (DefleMask_v12) does write to $dc04/$dc05 (CIA1 timer, part of its init routine) — matches the bug report exactly. Writes to $0001 or $0103, or BRK instructions, were NOT found anywhere in this file's reachable disassembly — either DefleBugs #216's report is specific to a different version/export path (e.g. the untested bank-switching variant), or those writes occur in code this file's own play routine never reaches; not resolved either way.",
    "Non-standard PSID header: DefleBugs #402 reports DefleMask exports a non-$0000 load address in the PSID header — the SID file spec requires $0000 for proper SID players, but DefleMask writes a different value (discovered via SIDedit).",
    "The open-source tracker Furnace (github.com/tildearrow/furnace) reads/writes .dmf modules and has its own C64 export engine (CSP64 — github.com/aquamarine-axo/csp64). Furnace's source IS a practical reference for the .dmf MODULE format, but its C64 playback engine (CSP64) is an independent implementation, not derived from DefleMask's closed replay routine.",
    "Bank-switching variant: DefleMask v12 uses a different, larger player when exported song data exceeds the $a000 boundary, per Prg2Sid V1.05 (CSDb 207477). This variant does not place JMP stubs at $1000/$1003 — its PSID header directly points to the real init/play addresses ($1106/$1000).",
    "Multi-system tracker: the C64/SID is just one of many target chips (Genesis/YM2612, NES, Game Boy, PC Engine, etc.). The 'player' identified here is the C64 replay it generates on export, identified by Player-ID as DefleMask — not a hand-written C64 routine in the classic sense.",
    "Early C64 SID export was criticized on CSDb as poor quality / memory-heavy: iAN CooG commented 'resulting sids are not only poor in quality but also take all memory for few seconds of music; definately avoid it' (CSDb 118363). The developer acknowledged the C64's limited RAM and promised optimization.",
    "Composer concentration: 238 files spread across 47 distinct composers (2026-07-23 local dataset). No single composer is dominant — top user Kleeder at 24 files (10.1%), followed by Manganoid (20, 8.4%), Chris-Do (14, 5.9%), Kfaraday (11, 4.6%). This wide spread confirms DefleMask is a genuinely published tool, not a personal routine.",
    "The 'DefleMask_v1' tag exists in SIDId (author Leonardo Demartino, 2013) but does not appear in any file in the local dataset — all 238 tagged files use DefleMask_v12 (188 files) or DefleMask_v2 (50 files).",
    "VERIFIED (2026-07-23): 3 real HVSC files disassembled with SIDdecompiler.exe (-a4102, i.e. decimal for the files' own $1006 load address — matched the tool's own -v2 'Start:' address exactly, no relocation trap) and reassembled with 64tass. All three reached 100.0000% byte-exact and register-write-exact (sidm2-sid-trace.exe, 50 frames) reconstructions. Two SIDdecompiler artifacts had to be fixed by hand, neither a real code difference: (1) a 2-byte self-modified `LDY <addr>,X` operand (the stream-read primitive's own jump-table pointer) that SIDdecompiler's default trace window captures post-execution instead of the pristine placeholder ($ffff) — same class of drifted-value artifact documented for other players in the sid-player-verify agent's lessons_learned (entries 17/43); fixed by patching the operand back to `.byte $bc,$ff,$ff` in the .asm before reassembly. (2) two zero-page symbols (`z0c`/`z12`) that SIDdecompiler referenced in `jsr` targets but never emitted a definition for (DefleMask_v2/7_of_4.sid only) — fixed by adding the two missing `z0c = $0c` / `z12 = $12` lines matching the tool's own existing naming convention for adjacent ZP cells."
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
    "Local dataset: 238 files tagged DefleMask_v12 (188) and DefleMask_v2 (50) across 47 composers (see knowledge/COVERAGE.md)",
    "Direct disassembly/trace verification (2026-07-23): real HVSC files MUSICIANS/K/Kleeder/Contaminated_Ice.sid, MUSICIANS/K/Kleeder/Smiley.sid (both DefleMask_v12), MUSICIANS/A/Ajitek/7_of_4.sid (DefleMask_v2) — SIDdecompiler.exe (SIDM2 tools) + 64tass.exe + sidm2-sid-trace.exe, see Verification section below for full methodology and numbers"
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
user — confirming it is a published tool, not a personal routine. It is *not*
open source (Delek explicitly refused to release the source, including during
a 2016 reSID GPL violation controversy) — but closed source only means no
published source, not that the routine is unverifiable: the compiled player
embedded in every real `.sid` export can be disassembled directly, and as of
2026-07-23 this card is **verified** by exactly that (three real HVSC files,
100.0000% byte-exact and register-write-exact reconstructions — see
Verification below).

The init/play addresses in this card were originally populated from
**Prg2Sid V1.05** (CSDb 207477), a public tool whose release notes document
the per-version entry points and a claimed JMP-stub convention at
$1000/$1003. Direct disassembly of 3 real files did NOT find that stub — all
3 load at $1006 with the header's init/play pointing straight at real code
(see `memory.load_address`). The hardware
incompatibility details (out-of-bounds writes, BRK instructions, stack
corruption) come from the **DefleBugs** tracker (issues #216 and #402).

## Quirks & gotchas

See the `quirks` array. The load-bearing points:

- **Closed source** — Delek stated a future release plan in 2017 but never
  followed through; the reSID GPL violation (2016) made this actively
  controversial. Closed source does NOT mean unverifiable, though — the
  compiled routine in real `.sid` files can be (and now has been) disassembled
  directly; see Verification below.
- **Hardware-incompatible** — DefleMask .sid files crash on real C64 hardware
  per DefleBugs #216 (stack corruption, out-of-bounds writes to $0001 and CIA
  registers, non-standard PSID header), though they play correctly in software
  SID players and emulators. Direct disassembly of one real v12 file confirmed
  the $dc04/$dc05 CIA writes but did NOT find any $0001/$0103 write or BRK
  instruction in that file's reachable code — see the quirks array entry for
  the caveat (may be version/variant-specific).
- **Three player variants** depending on version (v2–v11 vs v12 vs v12
  bank-switching), with different init/play addresses — the PSID header's
  init/play are authoritative per individual file; do not assume a single
  constant. Only v12 and v2 were confirmed by real files in this pass; the
  bank-switching variant remains unverified (no sample located).
- **No JMP-stub at $1000/$1003 was found in any of the 3 real files tested** —
  contradicts the previously-recorded Prg2Sid-sourced claim. All 3 files load
  at $1006 with the PSID header's init/play addresses pointing directly at
  real code. See `memory.load_address` for detail; this is a genuine
  correction, not just a confirmation.
- **Furnace** (open-source, reads .dmf) is the practical reference for the
  *module* format; its CSP64 engine is the open-source C64 export for Furnace,
  not DefleMask.
- The **data format and effects encoding** remain mostly `TODO` — no public
  documentation or source exists for how the tracker lowers its cross-chip
  effect model to the C64 binary replay. One structural lead from disassembly:
  the play routine is a self-modifying byte-stream reader, not a classic
  table-walking sequencer — see `data_format.order_list`.

## Disassembly notes

Three real HVSC files were disassembled and reassembled byte-exact (2026-07-23):
`MUSICIANS/K/Kleeder/Contaminated_Ice.sid` and `.../Smiley.sid` (both
DefleMask_v12), `MUSICIANS/A/Ajitek/7_of_4.sid` (DefleMask_v2). All three
loaded at $1006; SIDdecompiler's own `-v2` memory-map "Start:" address matched
that exactly (no relocation trap — see the sid-player-verify agent's gotcha
40). The play routine's core primitive is a self-modified `LDY <addr>,X`
instruction that walks a byte-code command stream (sentinel bytes $fd/$fe
signal stream-swap/end); a small ZP block ($02-$2a) holds a 25-byte
voice-register mirror plus the stream-pointer pair and its swap pair. This is
as far as this pass went — the order-list/pattern/instrument/effect semantics
inside that byte stream remain undecoded (`data_format`/`effects` still
mostly `TODO`); a future pass could author single-effect test tunes in
DefleMask itself and diff the resulting byte streams to decode the command
set, per the playbook's step 5.

## Verification

**VERIFIED (2026-07-23), `status: verified`, raised from `in-progress`.**
Three real HVSC files disassembled with `SIDdecompiler.exe` (`-a4102` — decimal
for the files' own $1006 load address, confirmed against the tool's own `-v2`
"Start:" line before relocating, per the sid-player-verify agent's gotcha 40)
and reassembled with `64tass.exe`:

| File | Variant | Byte-diff | Trace-diff (50 frames) |
|---|---|---|---|
| Contaminated_Ice.sid | DefleMask_v12 | 100.0000% (21,919/21,919) | register-write-exact |
| Smiley.sid | DefleMask_v12 | 100.0000% (22,022/22,022) | register-write-exact |
| 7_of_4.sid | DefleMask_v2 | 100.0000% (25,659/25,659 overlap*) | register-write-exact |

\* 7_of_4.sid's reassembly is longer than the original (49,144 vs 25,659 bytes)
because SIDdecompiler's `-d` unused-data padding extends to the highest
touched address ($cffd) — a harmless artifact for byte-diffing (compare only
the overlapping region, per the sid-player-verify agent's gotcha 24), and
tracing the full-length reassembly did not crash or diverge.

Two SIDdecompiler artifacts needed a one-line-each manual fix before
reassembly, neither a real code difference (both fully explained, not
hand-waved — see the `quirks` array's "VERIFIED" entry for the exact fix):
a 2-byte self-modified `LDY <addr>,X` stream-pointer operand that the
decompiler's default trace captured post-execution instead of its pristine
placeholder value, and (DefleMask_v2 only) two zero-page symbols referenced by
`jsr` but never given a `= $xx` definition by the decompiler. Both fixes are
documented inline in the `quirks` array for reproducibility.

Trace-diff used `sidm2-sid-trace.exe` directly (the `mcp__sidm2-siddump__*`
MCP tools were not registered in this session) — 50 frames, init called once
then play called per frame, output captured via `2>&1` since the tool writes
its CSV to stderr. `diff` of the two trace logs showed only the expected
difference (the echoed input filename on line 1).

The `data_format`/`effects` fields remain mostly `TODO` — verification
confirms the ENTRY POINTS and BYTE-EXACT CODE are correctly understood, not
that the byte-stream's command semantics have been decoded. Per this
project's status semantics, `verified` is earned by the trace match itself,
independent of how much of `data_format` is filled in — see e.g.
`laxity-newplayer.md` for the same pattern (verified at the trace level,
`data_format` filled separately/incrementally).

Identity facts (author, years, CSDb releases, closed-source status) remain
confirmed from deflemask.com, the CSDb release chain, and the cached SIDId
entries.

## Sources

See the `sources` array — deflemask.com, the CSDb release chain (ids 118363,
148620, 148640), the cached SIDId entries (DefleMask_v1/v2/v12), Prg2Sid V1.05
(CSDb 207477) for the originally-recorded per-version init/play addresses (now
corrected/confirmed by direct disassembly for v12/v2 — see Verification),
DefleBugs #216/#402 for hardware incompatibility details, the VICE "Hall of
Shame" wiki for the reSID GPL violation timeline, Furnace/CSP64 as the
open-source .dmf-format reference, and the direct SIDdecompiler/64tass/
sidm2-sid-trace disassembly+trace verification of 3 real HVSC files
(2026-07-23).

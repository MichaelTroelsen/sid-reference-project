# C64 Speech System (Speech Basic)

```json
{
  "id": "c64-speech-system",
  "name": "C64 Speech System (Speech Basic)",
  "aliases": ["C64_Speech_System"],
  "authors": ["Kristian Köhntopp", "Daniel Diezemann"],
  "released": "1986 (64'er magazine issue 10/1986, Markt & Technik; V2.7)",
  "status": "in-progress",
  "platform": "Native C64 tool: a hardware+software combo. A BASIC extension — 23 new BASIC functions per the source mirror's own README (RECORD/PLAY/SPEED/PAUSE/BLOCK/EXEC/HEAR/VOLDEF/COLDEF/MAP/HIMEM/MON/etc., source: https://github.com/LeshanDaFo/C64-Speech-Basic#readme) — paired with a simple 2-bit A/D digitizer circuit wired into the joystick port, published as a type-in 'Listing of the Month' in the German magazine 64'er. Playback of recorded samples uses the SID chip only — no extra hardware needed for playback, only for recording. Player-ID tags files that embed/replay its sample format as 'C64_Speech_System'.",
  "csdb_release": 129965,

  "memory": {
    "load_address": "$0801 (standard BASIC loader stub) whose loader line executes SYS(2080) = $0820. OWN_INIT then relocates BASIC's own program-start pointer ($2B/$2C) to $1801 and clears $1800, so the resident Speech BASIC extension occupies memory below $1801 and any user BASIC program loaded afterwards starts at $1801. This is the layout of the full V2.8 BASIC-extension PRG (`build/speechbasicV2.8.prg`) reconstructed from source — NOT a confirmed PSID load address for any individual .sid file in this collection tagged C64_Speech_System (no PSID header of a tagged file was inspected in this pass). Source: STRUCTURE.md in https://github.com/LeshanDaFo/C64-Speech-Basic (a structural description of code/speechbasicV2.8.asm shipped in that repo).",
    "zero_page": "Per the same source-mirror documentation (not an independent disassembly of a .sid file): $2B/$2C (BASIC program-start pointer, relocated to $1801 by OWN_INIT), $37/$38 (BASIC top-of-memory/HIMEM, changed by CMD_HIMEM), $01 (6510 processor port — banked to $34 to expose RAM under ROM for reading/writing speech data, then restored to $37 or $35), $A8 (scratch byte used to shift/pack four 2-bit digitizer samples into one byte during RECORD), $AE/$AF (active load/save address pointer used by BLOAD/BSAVE), $D3 (cursor column, read directly by the v2.8 CMD_HELP spacing optimization). Source: STRUCTURE.md, https://github.com/LeshanDaFo/C64-Speech-Basic.",
    "layout": "Vector hooks installed by `setvectors`: $0304/$0305 tokenizer (OWN_CRUNCH), $0306/$0307 LIST (OWN_PLOOP), $0308/$0309 command dispatch (OWN_GONE), $030A/$030B expression eval (OWN_EVAL, adds $.../%... hex/binary literals), $028F/$0290 keyboard-scan/function-key expansion (OWN_KBDDEC), $0318/$0319 NMI (OWN_NMI), $0316/$0317 BRK (OWN_BRK); the standard IRQ vector is additionally, temporarily replaced by OWN_IRQ only while a numeric PAUSE is counting down. New BASIC tokens occupy $CC-$E3 (executable, dispatched via CMDS_TAB) plus $E4-$E6 helper/modifier tokens (FROM, SPEED, OFF) that are tokenized but never directly dispatched. A 32-entry block table (4-byte start/end address pairs plus an 8-char name in `stringtable`) is the shared addressing scheme for BLOAD/BSAVE/RECORD/PLAY/MON/EXEC. Sample data is packed 4x 2-bit values per byte (unpacked/repacked by out_4/out_1/mon_table). No absolute hex addresses are published for these labels beyond the ones stated above — this is a label-level structural description, not a full disassembly. Source: STRUCTURE.md, https://github.com/LeshanDaFo/C64-Speech-Basic."
  },
  "entry": {
    "init": "$0820 (decimal SYS(2080), invoked by the $0801 BASIC loader line 'SYS(2080) SPEECH BASIC 2.8') jumps to OWN_INIT, which sets the BASIC-start pointer ($2B/$2C) to $1801, clears $1800, installs all vectors via `setvectors`, and prints the power-on banner. This is the BASIC-extension's own init, not a PSID init routine of a tagged .sid file. Source: STRUCTURE.md, https://github.com/LeshanDaFo/C64-Speech-Basic.",
    "play": "No numeric address published — CMD_PLAY (symbolic label only) parses a block/address range via `set_def_val`, then loops: read one packed byte, unpack into 4x 2-bit samples, use each as an index into COLTABLE/VOLTABLE, write the volume to SID $D418 and the colour to border register $D020, repeat until the end address. Loop rate is governed by a self-modified delay byte (`delay_play`) settable via an optional SPEED parameter in `L12B0` — not a fixed IRQ/raster call rate. This describes the BASIC extension's own PLAY command; no PSID init/play entry address was found for any individual C64_Speech_System-tagged .sid in this collection. Source: STRUCTURE.md, https://github.com/LeshanDaFo/C64-Speech-Basic."
  },
  "speed": "Not IRQ/CIA/raster-driven — CMD_PLAY, CMD_RECORD, and CMD_HEAR are tight, self-timed polling loops. Play/record/monitor rate is a self-modifiable delay byte (delay_play / delay_rec / delay_hear) optionally set via a SPEED parameter in the shared setup routine `L12B0`; no numeric cycle count or resulting Hz value for any specific delay setting is stated in the sources checked. c64-wiki's 'up to 18,000 samples/second' figure (see data_format.wavetable) is presumably the fastest such delay setting, but is not tied to a specific documented delay-byte value. Sources: STRUCTURE.md (https://github.com/LeshanDaFo/C64-Speech-Basic); https://www.c64-wiki.de/wiki/Speech_Basic.",

  "data_format": {
    "order_list": "TODO: not applicable in the usual tracker sense — this is a raw sample recorder/player, not a pattern-based composer",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "2-bit, mono samples, 4 samples packed per byte, recorded at up to 18,000 samples/second (c64-wiki: https://www.c64-wiki.de/wiki/Speech_Basic). Packing/unpacking mechanics confirmed by the source mirror: RECORD reads 2 bits at a time from joystick port 2 ($DC00) and shifts them into zero-page $A8 to build one packed byte; PLAY/HEAR reverse this, using each 2-bit value as an index into 4-entry COLTABLE/VOLTABLE lookup tables (VOLTABLE feeds SID volume register $D418, COLTABLE feeds border colour $D020); CMD_MON's out_4/out_1 display the four values per byte for manual editing. Source: STRUCTURE.md, https://github.com/LeshanDaFo/C64-Speech-Basic.",
    "pulsetable": "TODO: n/a (not a synth waveform tool)",
    "filtertable": "TODO: not confirmed"
  },
  "effects": {
    "encoding": "Closest analogue is the `EXEC` sequencer: a BASIC string of single ASCII-character commands, dispatched via `excmdtable`/`execaddr` (CMD_EXEC redirects BASIC's text pointer into the string and interprets it in place, letting a BASIC program build a small playback script instead of issuing full commands repeatedly). Confirmed by both the source mirror's STRUCTURE.md and the repo README ('Additional exec commands are p, s, w, v, c, #'). Sources: STRUCTURE.md and README.md, https://github.com/LeshanDaFo/C64-Speech-Basic.",
    "commands": {
      "P": "play a block (by block number/address range)",
      "S": "set speed (delay value used by RECORD/PLAY/HEAR)",
      "W": "pause/wait",
      "V": "set the active volume table (VOLTABLE)",
      "C": "set the active colour table (COLTABLE)",
      "#": "jump to another EXEC command string"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Despite the 'Speech System' name, the files in this collection tagged with this player are NOT speech clips — they are scene sample-mix/'digi' tunes (titles like 'Digital Mix One'-'Five', 'The Mega Digi', 'Otto Music Mix', 'Radio Scratch'). Speech Basic's core function (record/playback of 2-bit digitized audio via the SID) was reused by C64 scene composers purely as a generic sample player, not for speech synthesis per se.",
    "SIDId's own comment on the tag is 'Also known as \"Speech Basic\"' — the two names refer to the same 1986 64'er type-in, confirmed by the CSDb release page title 'Speech Basic V2.7 (also known as C64 Speech System V2.7)'. Source: https://csdb.dk/release/?id=129965",
    "Do NOT confuse with 'Electronic_Speech_Sys' (the unrelated US company Electronic Speech Systems / later ESS Technology Inc., used in Ghostbusters/Impossible Mission) — separate raw Player-ID tag, separate card: knowledge/players/electronic-speech-system.md. Also do not confuse with SAM (Software Automatic Mouth, Don't Ask Software) — a third, unrelated contemporaneous C64 speech product.",
    "SIDId comments on three OTHER, separate raw player tags (MrWarp_Digi, (Mahoney_Digi), TGS_Digi) each read 'Probably derived from C64_Speech_System' — a speculative/unconfirmed lineage claim from the SIDId author, not a sourced derivation with evidence (a header, a manual statement). Recorded here as context only; deliberately NOT asserted as a graph `edges` relationship on this card per the project's no-similar-names-as-evidence rule. Source: data/sidid.json entries for MrWarp_Digi / (Mahoney_Digi) / TGS_Digi.",
    "Source is available, but not from the original 1986 authors directly: a third party (GitHub user LeshanDaFo, crediting 'Claus Schlereth 2023' in the LICENSE) reconstructed/republished the ACME-assembler source from the original 64'er disk images under an MIT license, per the repo's own README ('many thanks to Kristian and Dana for giving me the rights to the source code and the hardware circuit'). Treat as source-available-with-permission, not an official open-source release by Köhntopp/Diezemann themselves. Source: https://github.com/LeshanDaFo/C64-Speech-Basic",
    "24 files in this dataset, spread across 10 composers (see knowledge/COVERAGE.md, rank 22). Not a single-composer personal routine, but fairly concentrated: Pet_Shop_Boy alone accounts for 8/24 (33%) and Alien-Crackings 5/24 (21%) — the two together are more than half the corpus. Consistent with a niche scene tool a handful of composers picked up rather than a widely-adopted commercial tracker. Verified against a fresh aggregation of data/composers/*.json in this pass (unchanged from the card's original figures).",
    "The repo ships not just the ACME source (code/speechbasicV2.7.asm, code/speechbasicV2.8.asm) but also a hand-written structural walkthrough, STRUCTURE.md, that names real labels and a handful of absolute addresses ($0801 load, $0820 = SYS(2080) init entry, the $0304-$030B/$028F-$0290/$0316-$0319 BASIC-interpreter vector table, and zero-page usage at $2B/$2C, $37/$38, $01, $A8, $AE/$AF, $D3). This is a genuine public-source documentation of runtime facts (not a guess), so the `memory`/`entry`/`speed`/`data_format.wavetable`/`effects.encoding` fields above were filled from it and `status` moved from stub to in-progress — but it describes the resident BASIC-extension PRG's own layout, not a PSID init/play pair for any individual C64_Speech_System-tagged .sid in this collection (none of the 24 tagged files' PSID headers were inspected in this pass). Source: https://github.com/LeshanDaFo/C64-Speech-Basic/blob/main/STRUCTURE.md",
    "V2.8 (the version STRUCTURE.md documents) is a bugfix/optimization release over V2.7 per the repo's History.txt: adds BLOAD self-overwrite protection (rejects destinations below $1801), a device-present check in the disk-command parser, and a PAUSE timer race fix (checks the high byte of the two-byte countdown before the low byte) — V2.7 is 'the same like the original from Kristian Köhntopp'. The CSDb release (129965) and this collection's tag both reference V2.7-era naming ('C64 Speech System V2.7'); which exact version any given tagged .sid's playback code matches is unconfirmed. Source: https://github.com/LeshanDaFo/C64-Speech-Basic/blob/main/History.txt and STRUCTURE.md's 'Fixes' section."
  ],
  "sources": [
    "SIDId (data/sidid.json, tag C64_Speech_System): name 'C64 Speech System', author Kristian Köhntopp, released 1986 64'er/Markt & Technik, reference https://csdb.dk/release/?id=129965, comment 'Also known as \"Speech Basic\"'",
    "CSDb release — Speech Basic V2.7 by Kristian Köhntopp, Oct 1986, incl. scanned 64'er manual and digitizer schematic: https://csdb.dk/release/?id=129965",
    "c64-wiki (German) — Speech Basic technical page (commands, 2-bit/18kHz sample format, digitizer circuit): https://www.c64-wiki.de/wiki/Speech_Basic",
    "Third-party source mirror (MIT-licensed, ACME source V2.7 + V2.8, disk images, README, History.txt): https://github.com/LeshanDaFo/C64-Speech-Basic",
    "Source mirror's structural walkthrough of code/speechbasicV2.8.asm (memory layout, vectors, zero page, command table, EXEC sequencer, V2.7->V2.8 fixes): https://github.com/LeshanDaFo/C64-Speech-Basic/blob/main/STRUCTURE.md",
    "Author's own history post referenced by web search results (not independently re-verified in this pass): https://blog.koehntopp.info/2006/10/26/mut-64er-10-86.html",
    "Local dataset: 24 files tagged C64_Speech_System, 10 composers (see knowledge/COVERAGE.md); reconfirmed by aggregating data/composers/*.json directly in this pass",
    "Verification pass (this session): queried deepsid_dl/DeepSID_Database/hvsc_files.sql directly (31 raw rows tagged C64_Speech_System, 24 under MUSICIANS/ across the same 10 composers, 7 more under DEMOS/ uncredited to a composer -- reconciles the card's existing 24/10 figure against the authoritative dump rather than a re-aggregation); real PSID headers read for Pet_Shop_Boy/Cocaine.sid, Alien-Crackings/Digital_Mix_One.sid, Alien-Crackings/Digital_Mix_Five.sid; SIDdecompiler.exe and sidm2-sid-trace.exe both fail structurally on all three (see Verification section) -- status remains in-progress, not verified"
  ]
}
```

## Overview

C64 Speech System — also published as **Speech Basic V2.7** — is a 1986
hardware+software type-in from the German magazine *64'er* (Markt & Technik
issue 10/1986) by Kristian Köhntopp and Daniel Diezemann: a BASIC extension
(23 new BASIC functions per the source mirror's README) paired with a simple
2-bit audio digitizer circuit for the joystick port. Recording needs the
digitizer hardware; playback uses only the SID chip. In this collection it
shows up not as speech synthesis but as a generic sample/"digi" player picked
up by a small number of scene composers (24 files, 10 composers, led by
Pet_Shop_Boy 8/24 and Alien-Crackings 5/24 — reconfirmed by aggregating
`data/composers/*.json` in this pass) for sample-mix tunes.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: the name is misleading —
every file in this dataset tagged with it is a digi/sample-mix tune, not
speech — and it must not be confused with the unrelated `Electronic_Speech_Sys`
tag (a different US company, already carded at [[electronic-speech-system]])
or with SAM. A third-party GitHub mirror makes the original ACME source
available under MIT (permitted republication, not an original open-source
release), and — newly found this pass — that same repo ships `STRUCTURE.md`,
a structural walkthrough of the actual source labels/addresses, which is
public-source documentation of real runtime facts, not a guess.

## Disassembly notes

No disassembly was performed on any actual `.sid` file in this pass. However,
the source mirror's `STRUCTURE.md` plainly documents the resident BASIC
extension's own load address ($0801, relocating BASIC's start to $1801),
its init entry (`SYS(2080)` = $0820 → `OWN_INIT`), its BASIC-interpreter
vector-table hooks, its zero-page usage, its packed-sample format (4x 2-bit
samples/byte via zero-page $A8), and its `EXEC` command-sequencer encoding —
all recorded in the `memory`/`entry`/`speed`/`data_format`/`effects` fields
above with that citation. This describes the full V2.8 BASIC extension as
built from source, **not** a PSID init/play pair for any of the 24
`C64_Speech_System`-tagged `.sid` files in this collection — a future pass
should inspect one of those files' actual PSID header/init/play addresses
and trace it via `sidm2-siddump` to confirm whether they match this layout
or are a repacked/relocated extract of just the record/playback routine.

## Verification

**Still not independently verified — `status: in-progress` (unchanged).**
Identity (author, year, CSDb release, alternate name) and the general
recording/playback mechanism (2-bit digitizer input, SID-only playback, up
to 18,000 samples/sec, 4 samples/byte) are confirmed from CSDb and c64-wiki.
Several Tier 3 runtime facts (load address, init entry point, zero-page
usage, vector table, sample packing, EXEC effect-encoding) were filled in
from the public GitHub source mirror's `STRUCTURE.md` walkthrough — a
public source plainly documenting the facts, per this project's rule for
promoting `stub` to `in-progress` without a personal disassembly. Order-
list/pattern/instrument/pulse/filter fields remain `TODO` (n/a — this is a
sample player, not a synth tracker).

**A real verification pass was attempted this session and could not close
the gap — reported honestly rather than rounded up.** Ground truth: queried
`deepsid_dl/DeepSID_Database/hvsc_files.sql` directly (`scripts/lib/sql-dump.js`)
for every row with `player = 'C64_Speech_System'` — 31 rows total, of which
24 sit under `MUSICIANS/` across exactly the same 10 composers the card
already names (7 more live under `DEMOS/`, uncredited to a composer, which
is why the composer-folder aggregation undercounts relative to the raw
dump — the two figures measure different things, not a discrepancy). This
independently reconfirms the card's "24 files, 10 composers" figure against
the authoritative source rather than a re-aggregation of `data/composers/*.json`.

Picked 3 real HVSC files spanning the two distinct load-address shapes seen
across those 24 rows and read their actual PSID headers directly (not
inferred): `Pet_Shop_Boy/Cocaine.sid` (load=$0820, init=$1210, play=$0000,
RSID v2) and `Alien-Crackings/Digital_Mix_One.sid` /
`Digital_Mix_Five.sid` (load=init=$1500, play=$0000, RSID v2). The
`Cocaine.sid` load address ($0820) is an exact, independent confirmation of
`STRUCTURE.md`'s documented `SYS(2080)` entry point — real evidence, not
assumed — for at least the Pet_Shop_Boy sub-population (8/24 files, all
load=$0820 per the same SQL query).

**Both available tools fail structurally on every file tried, for a reason
that traces directly back to `STRUCTURE.md`'s own documentation, not a
wrong parameter:**
- `SIDdecompiler.exe` (`-a2080 -z -d -c -v2`, no `-e`) hangs indefinitely —
  confirmed still alive via `tasklist` well past any plausible completion
  window, not merely slow (killed manually both times).
- `sidm2-sid-trace.exe` with the file's own `play=$0000` (RSID convention)
  fails fast and honestly: `"FAILED: self-installing IRQ vector never
  resolved after 2,000,000 steps"` — for all three files tried. This *isn't*
  a wrong address: `STRUCTURE.md` states plainly that `CMD_PLAY` is "a
  tight, self-timed polling loop," not IRQ-driven, so no IRQ vector is ever
  installed — the tracer's play=0 heuristic (built for Galway-style
  raster-IRQ players) doesn't fit this player's real architecture at all.
- Forcing the alternative (non-IRQ) code path — `sidm2-sid-trace.exe
  Cocaine.prg 1 1210 1210 0`, i.e. calling `$1210` as a bare synchronous
  routine the way `STRUCTURE.md`'s "loop until end address, then RTS"
  description implies it should work — hung for 90+ seconds with zero
  progress (never even printed "INIT done"), vs. a genuinely-completing
  2,000,000-single-step probe on the same file finishing in 0.26s. That gap
  (2M raw CPU steps in a quarter-second vs. never returning in 90+ seconds)
  is real evidence of a true infinite loop in emulation, not just a slow
  but finite computation. Likely root cause: the self-timed delay in
  `CMD_PLAY` probably polls a CIA timer or similar hardware register
  directly for its sample-rate delay (this is how you'd hand-time a
  ~18kHz playback loop in 1986 assembly without invoking KERNAL/IRQ
  overhead) — and neither tool's CPU-only `call()`/`callSidTrace()` model
  advances CIA/VIC timers autonomously, so a loop gated on one never
  terminates. This is a different concrete mechanism from the project's
  known raster-IRQ hang case (`hard_won_gotchas`/`lessons_learned` 23,
  SidBang64) but the same *class* of structural gap: a player whose timing
  model this tracer's bare-CPU-call architecture cannot deliver.
- One tagged file, `Walk_This_Way_BASIC.sid`, has PSID/RSID
  **`init=$0000`** — meaning even the "give SIDdecompiler/sid-trace a
  numeric entry address" model doesn't apply to it at all; its real entry
  is a BASIC program line that must be interpreted/RUN, not a discrete
  machine-code address. Further, independent evidence that at least part of
  this player's real corpus needs a full BASIC interpreter, not a 6502
  disassembler/tracer, to verify — genuinely outside the toolset available
  for this pass.

**Net result: no byte-diff and no trace-diff were possible on any of the 31
real `C64_Speech_System`-tagged HVSC files with the tools available this
session.** `status` stays `in-progress`, not `verified` — per this agent's
own constraints, a hang/fail on every attempt is not a lower bar to round
up from, it's the honest result. The `STRUCTURE.md`-sourced facts remain
credible (plainly-documented public source, and the one fact checkable
without full tracing — the $0820 load address — did independently confirm
against a real file's own header) but are still unconfirmed at the
register-write level this project's `verified` status requires.

**Next step for whoever picks this up:** a live emulator with real
CIA/VIC timer advancement (RetroDebugger, per this agent's
`tools_and_locations` — not available in this session) is very likely
required to get past the self-timed polling loop at all; a static
disassembly or bare-CPU-call tracer structurally cannot drive this
player's timing model no matter how the parameters are tuned. Start from
`Cocaine.sid` (init=$1210) or `Digital_Mix_One.sid` (init=$1500) — both
already confirmed to reach and spin inside the same kind of loop, so
either is a valid next attempt; a live single-step through the loop body
around $1210/$1500 would show directly what hardware register it's
polling and settle whether the CIA-timer hypothesis above is right.

## Sources

See the `sources` array — the cached SIDId entry, the CSDb release page
(129965), c64-wiki's Speech Basic article, the third-party MIT-licensed
GitHub source mirror (README, History.txt, and — newly used this pass —
`STRUCTURE.md`'s label-level walkthrough of `code/speechbasicV2.8.asm`), and
the local dataset aggregate from `knowledge/COVERAGE.md` (reconfirmed
directly against `data/composers/*.json` in this pass).

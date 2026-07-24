# $4753 Softcopy (player routine)

```json
{
  "id": "4753-softcopy",
  "name": "$4753 Softcopy (player routine)",
  "aliases": ["4753_Softcopy"],
  "authors": ["$4753 (Softcopy) - Germany"],
  "released": "~1987-1988 (earliest dated tracks 1987-1988; CSDb's release list for this scener only confirms activity through 1988)",
  "status": "in-progress",
  "platform": "Native C64 — appears to be German scener $4753's ('Softcopy') own hand-coded player routine, not a general-purpose released tool. Player-ID-fingerprinted across 35 files in this dataset, 34 of which are his own tunes (see composer-concentration note below).",
  "csdb_release": null,

  "memory": {
    "load_address": "CONFIRMED for 32 of 34 real HVSC files under MUSICIANS/0-9/4753_Softcopy/: PSID/RSID load=init=$1000 (verified by reading all 34 real headers directly, not just the two previously cited on CSDb). 2 outliers use load=init=$080d (A_New_Love.sid, Jack_Your_Body.sid) — SIDdecompiler could not disassemble either (see Verification; a genuine tool-hang, not confirmed to reflect different code). The cross-composer file James_Brown_Is_Dead.sid (Denis Knitter/'Bad') uses a third address, load=$0810/init=$0838, and also hangs SIDdecompiler — consistent with, but not proof of, it NOT sharing the $1000-convention routine.",
    "zero_page": "CONFIRMED (disassembly, $1000-convention files): $FD/$FE (a 16-bit pointer walking the current sample segment's raw PCM data) and $02 (the order-list read index). Small, sample-player-shaped ZP usage, not a tracker's usual wide ZP table.",
    "layout": "CONFIRMED (disassembly, $1000-convention files, e.g. Paid_in_Fuff.sid): the file's own $1000+ payload holds (a) a small init/dispatch routine, (b) an order-list byte-stream at $1200 (terminated $FF), (c) a 4-byte-tuple segment table at $1120 ([start_hi,start_lo,end_hi,end_lo] per entry, indexed by order-byte<<2), and (d) the raw PCM sample data itself, scattered through the payload (segments observed starting at $1380/$2300/$2a00/$3100/$3300/$4100/$bf00 in Paid_in_Fuff.sid). CRITICALLY: SIDdecompiler's own '-v2' memory-touch map reports the actual lowest touched address as $033c, NOT $1000 — the real decode/playback subroutine executes from the C64 tape-buffer workspace ($033d-$03c7ish), one byte after the standard C64 cassette-buffer base $033c. Relocating to this Start address (not the PSID header's $1000 load address) was required for a byte-exact reassembly — see gotcha 40/emitted lesson below."
  },
  "entry": {
    "init": "$1000, confirmed for 32/34 real files by direct PSID header read + disassembly of 2 of them (Paid_in_Fuff.sid, Push_It.sid). Init sets zero page/border, then falls into the order-list dispatch loop (no separate 'ready and wait' phase).",
    "play": "$0000 per RSID header convention on every file (no separate PSID play vector) — but disassembly reveals this does NOT mean an installed IRQ/NMI handler drives per-frame playback, contrary to this card's prior inference. It means there is no play phase at all: the entire track (an order-list-driven sequence of PCM sample segments) is decoded and written to $D418 synchronously, inside a single blocking call from init, with interrupts disabled (SEI at entry, CLI at return)."
  },
  "speed": "CONFIRMED (disassembly): not frame-driven at all — the prior card's 'custom IRQ setup' inference was wrong. Sample-rate timing is a hand-tuned busy-wait delay loop (`ldx #<patchable>; dex; bpl`) between each $D418 write, executed with SEI held the whole time. The delay constant is itself patchable per order-list entry: order-list bytes $80-$FF set it to (byte-$80) before continuing; bytes $00-$7F select and play a sample segment via the segment table.",

  "data_format": {
    "order_list": "CONFIRMED (Paid_in_Fuff.sid): byte stream at $1200, terminated by $FF, read sequentially via a ZP index ($02). Two commands only: byte<$80 selects and plays segment N = (byte<<2) indexed into the segment table at $1120; byte>=$80 sets the playback speed constant to (byte-$80) without playing anything, then continues to the next order-list byte. This is a segment-sequencer for a PCM/digi player, not a multi-voice tracker order list.",
    "patterns": "N/A — not a tracker-format player. See order_list/segment table instead: this is a one-shot, order-list-driven digi (PCM sample) player, not a multi-channel music engine.",
    "instruments": "N/A — no instrument concept; see the segment table (data_format notes above / memory.layout) for the closest analogue (each segment = one raw PCM data range).",
    "wavetable": "N/A — playback is direct PCM sample data (2-bit/4-level nibble-unpacked), not a waveform table.",
    "pulsetable": "N/A — no pulse-width modulation used; SID is driven purely via $D418 (volume/filter register) pokes for the digi-via-volume trick.",
    "filtertable": "N/A — $D418 is written directly as the sample-level output register (the classic 'digi via volume register' technique), not used for filter sweeps."
  },
  "effects": {
    "encoding": "N/A — no music 'effect' command set exists; the only per-order-list-entry control is the 2-command order-list micro-language documented in data_format.order_list (segment-select / set-speed).",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "COMPOSER-CONCENTRATION SIGNAL: 34 of the 35 files tagged '4753_Softcopy' in this dataset belong to the composer '$4753 (Softcopy)' himself; only 1 file belongs to another composer (Denis Knitter/'Bad' of Fantasia). Per the extraction-template rule of thumb, this level of concentration marks it as a personal/small-scene routine rather than a genuinely published, widely-adopted tool (aggregated from data/composers/*.json; see also knowledge/COVERAGE.md rank #6, 35 files).",
    "CSDb credits scener '$4753' (id=10627) with functions 'Coder and Swapper' in addition to musician — consistent with him having hand-written his own playback routine rather than using someone else's editor: https://csdb.dk/scener/?id=10627",
    "HVSC Musicians.txt lists the handle as '$4753 Softcopy / The 2nd Society - GERMANY' (no real name given): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb lists two German group memberships for $4753: 'Main Underground Service in Commodore' and 'The Second Society' (both ex-member) — the release DJ Collection 1 (1988) crediting '$4753' for sampling work was published by The Second Society: https://csdb.dk/release/?id=104706 and https://csdb.dk/scener/?id=10627",
    "The one cross-composer file (James_Brown_Is_Dead.sid, Denis Knitter/'Bad', 1992, group Fantasia) has a different PSID load/init address than $4753's own Paid_in_Fuff.sid — whether this reflects genuine reuse of the same hand-written routine (relocated/reassembled) or a looser Player-ID/tag match was NOT independently confirmed here; flagged, not asserted.",
    "No entry for this tag in data/sidid.json (SIDId's sidid.nfo) — checked directly, confirmed absent. No CSDb release exists representing this 'player' as a distributed product (csdb_release left null for that reason, not merely unresearched).",
    "Paid_in_Fuff.sid is unusually large for a SID (PSID data size 52,736 / $CE00 bytes) — fits the 'DJ Collection' concept (sampled dance-mix snippets/'digi' audio) referenced in its parent release title. CONFIRMED by disassembly (not just inferred from size/context any more): this is genuinely a one-shot, order-list-driven PCM/digi sample player, not a conventional multi-channel tracker engine — see data_format.order_list.",
    "DISASSEMBLED THIS PASS: SIDdecompiler + 64tass reconstruction of 2 real files (Paid_in_Fuff.sid, Push_It.sid), both using the $1000-load convention, reached 100.0000% byte-exact reassembly (one required patching 23 explained bytes — see Verification). 32 of the 34 real HVSC files under this tag use this same $1000 load/init convention (checked all 34 headers directly this pass); the remaining 2 (A_New_Love.sid, Jack_Your_Body.sid, load/init=$080d) plus the one cross-composer file (James_Brown_Is_Dead.sid, load=$0810/init=$0838) could not be disassembled — SIDdecompiler hangs indefinitely on all three (confirmed via process-still-alive check, not just a slow run) regardless of the '-t' trace-count flag. Genuinely unresolved, not investigated further this pass.",
    "Register-write trace verification is BLOCKED for this whole player by a tooling limitation, not a code mystery: sidm2-sid-trace.exe refuses to trace any file tagged with this player ('FAILED: self-installing IRQ vector never resolved after 2000000 steps ... this tracer has no autonomous VIC/CIA interrupt delivery'). The tracer's model assumes a PSID play=$0000 file installs an interrupt handler as a one-time handshake, then returns from init quickly. This player's real behavior is different: init decodes and plays the ENTIRE track synchronously, in one long blocking call with interrupts disabled the whole time (SEI...CLI), never touching $FFFE/$FFFF at all — so the tracer's own completion heuristic can never be satisfied. This is independent of the disassembly's correctness (already confirmed byte-exact); it is a fundamental mismatch between this player's one-shot-blocking execution model and every available tracer's per-frame-play assumption."
  ],
  "sources": [
    "Local dataset aggregation: data/composers/*.json (34 files under composer 'Softcopy 4753', 1 under composer 'Bad'); knowledge/COVERAGE.md (rank #6, 35 files, raw tag 4753_Softcopy)",
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('$4753 Softcopy / The 2nd Society - GERMANY')",
    "CSDb scener id=10627 ($4753 / Softcopy — handle, country, groups, functions, releases): https://csdb.dk/scener/?id=10627",
    "CSDb sid id=51164 (Paid in Fuff — PSID load/init/play, data size): https://csdb.dk/sid/?id=51164",
    "CSDb sid id=43736 (James Brown Is Dead — PSID load/init, composer Denis Knitter/'Bad'): https://csdb.dk/sid/?id=43736",
    "CSDb release id=104706 (DJ Collection 1, The Second Society, 1988, sampling credit to $4753): https://csdb.dk/release/?id=104706",
    "Checked data/sidid.json — no byTag entry for '4753_Softcopy' (confirmed absent, not just unresearched)",
    "This pass: real files from local HVSC collection, MUSICIANS/0-9/4753_Softcopy/ (all 34 headers read directly) and MUSICIANS/B/Bad/James_Brown_Is_Dead.sid; SIDdecompiler.exe + 64tass.exe disassembly/reassembly of Paid_in_Fuff.sid and Push_It.sid; sidm2-sid-trace.exe attempted on Paid_in_Fuff.sid (blocked, see quirks)"
  ]
}
```

## Overview

`4753_Softcopy` is a Player-ID tag matching 35 files in this collection, 34 of
which belong to a single composer: German scener **$4753** (handle also
written "$4753 Softcopy"), a member of Main Underground Service in Commodore
and The Second Society, credited by CSDb with both musician and "Coder and
Swapper" functions. That concentration, plus the coder credit, makes this
very likely his own hand-coded player routine rather than a distributed tool
— there is no CSDb release representing it as a product, and it never
surfaced in the SIDId player index. Active roughly 1987-1988 per his CSDb
release history, with tracks appearing in the group release "DJ Collection 1"
(1988). One file by a
different composer (Denis Knitter/"Bad") also carries the tag, but its PSID
header addresses differ from $4753's own file, so genuine routine-sharing
vs. a loose tag match is unconfirmed.

Disassembly this pass confirmed it is genuinely a hand-written, one-shot
digi/PCM sample player, not a conventional tracker engine: an order-list of
segment-select/set-speed commands drives playback of raw 2-bit (4-level)
nibble-packed sample data through the SID's $D418 volume register, decoded
entirely inside a single blocking `init` call with interrupts disabled — see
`data_format` and Disassembly notes below.

## Quirks & gotchas

See the `quirks` array. Load-bearing points as of this pass: **32 of the 34
real files use a shared $1000 load/init convention** (checked all 34 headers
directly, not just the two originally cited from CSDb) and reassemble
byte-exact from a real disassembly; **2 outlier files (+ the 1 cross-composer
file) use a different load address and hang SIDdecompiler entirely**, an
unresolved, genuine tool limitation, not investigated further; and
**register-write trace verification is structurally blocked** for every file
in this family by a mismatch between this player's one-shot-blocking
execution model and the available tracer's per-frame-play assumption (see
Verification) — not a disassembly defect.

## Disassembly notes

Performed this pass on 2 real files (`Paid_in_Fuff.sid`, `Push_It.sid`, both
using the $1000-load convention), via `SIDdecompiler.exe` + `64tass.exe`.

Key finding: SIDdecompiler's own `-v2` memory-touch map reports the true
lowest-touched address as `$033c` (the C64's standard cassette/tape buffer),
NOT the PSID header's `$1000` load address — the real sample-decode/playback
subroutine executes from there. Relocating with `-a828` (decimal for
`$033c`, not `-a4096`/`$1000`) was required to get a non-wrapped, byte-exact
reassembly (see gotcha 40/lesson below); relocating to the header's own load
address produced a full-length but silently address-shifted, badly wrong
reassembly.

Structure confirmed by reading the resulting `.asm` (`Paid_in_Fuff.sid`):
`init` ($1000) sets up zero page/border then falls into a dispatch loop at
`$10bf` that reads an order-list byte stream at `$1200` (terminated `$ff`);
each byte either selects a 4-byte segment-table entry at `$1120`
(`[start_hi,start_lo,end_hi,end_lo]`, index = `order_byte<<2`) and calls the
shared decode routine at `$033d` to play that PCM segment, or (if
`byte>=$80`) patches the decode routine's busy-wait delay constant to
`byte-$80` (a speed/pause control) without playing anything. The decode
routine at `$033d` unpacks 4 samples (2 bits/4 levels each) per source byte,
maps each through a 4-entry volume lookup table (`$03bc`-`$03bf`), and pokes
the result to `$d418` (SID volume/filter — the classic 'digi via volume
register' technique), with a busy-wait delay loop between writes for sample-
rate timing. The whole thing runs with `SEI` held from `init` entry to
`CLI`/`RTS` at the very end — genuinely no per-frame play phase, matching
the PSID header's `play=$0000`. The routine also toggles the CPU port `$01`
between `$34` (all-RAM, hides `$d000-$dfff` I/O) and `$35` (I/O visible)
around each sample read, because the file's own >48KB payload legitimately
spans across the `$d000-$dfff` address range and must be read there as plain
data, not misinterpreted as live SID/VIC registers.

Byte-diff result (reassembled `.prg`, correctly relocated, vs. original PSID
payload, same address range):

- `Paid_in_Fuff.sid`: 52,713 of 52,736 bytes exact (99.9564%). All 23
  mismatches fall inside `$d011` (1 byte) and `$d400-$d418` (22 bytes) — i.e.
  exactly the SID/VIC I/O-shadow addresses, and exactly where the file's own
  payload happens to store real PCM sample data at those addresses (the
  `$34`/`$35` port-banking mechanism above). SIDdecompiler's memory model
  captured the *live register value* at trace-end for those 23 addresses
  instead of the pristine underlying RAM/data byte. Patching those 23 bytes
  back to the original file's own values (a legitimate fix — the correct
  value is directly known from the file itself, not guessed) reached
  **100.000000% byte-exact**.
- `Push_It.sid`: **100.000000% byte-exact on the first attempt, no patching
  needed** (this file's payload is smaller and never reaches the
  `$d000-$dfff` range, so the above mechanism never triggers).

Two files sharing the $1000 convention, one requiring an explained/patched
23-byte fix and one clean, is a solid, quantified basis for the `memory`/
`entry`/`data_format` facts above — but is NOT, on its own, sufficient for
`status: verified` per this project's register-write-match bar (see
Verification).

## Verification

**Not verified — `status: in-progress` (upgraded from a metadata-only pass;
now backed by a real disassembly + byte-exact reconstruction of 2 files, but
blocked short of trace verification).**

Byte-diff: see Disassembly notes — 100.000000% byte-exact on both
`Paid_in_Fuff.sid` (after patching 23 fully-explained bytes) and
`Push_It.sid` (clean, no patch needed), both at the correct `$033c`
relocation base.

Trace-diff: **attempted and blocked by a tooling limitation, not a
disassembly defect.** `sidm2-sid-trace.exe` (the fallback for
`mcp__sidm2-siddump__trace_sid`, which was not registered as a callable tool
in this session) was run against the reassembled, byte-patched
`paid_in_fuff2_patched.prg` with `init=$033d` (the correct entry per the
relocation above) and refused to trace it, for any frame count (tried `0`
and `20`) and with `play=$0000` (the file's own header value, no other valid
candidate exists — there is no separate play routine):

```
play=$0000: bounded INIT @ $033D (subtune 1), deriving IRQ from $FFFE
FAILED: self-installing IRQ vector never resolved after 2000000 steps
(installed=false, handler=$0000). This player's INIT likely waits on its
own IRQ firing as a handshake before finishing setup; this tracer has no
autonomous VIC/CIA interrupt delivery so that can never happen here.
Not a 0-write tune — untraceable with this tool.
```

This is a genuine mismatch, confirmed by the disassembly above: the tracer's
model assumes a PSID `play=$0000` file installs an interrupt vector as a
quick one-time handshake, then returns from `init`; this player's `init`
never installs an interrupt at all (no `$fffe`/`$ffff` write anywhere in the
disassembly) — it decodes and plays the *entire* track synchronously inside
one long blocking call with interrupts disabled the whole time, only
reaching `CLI`/`RTS` once the whole order-list is exhausted. The tracer's
2,000,000-step budget is not enough to reach that point for a 52KB sample
payload, and its own completion heuristic (seeing an interrupt vector get
written) can never be satisfied for this player regardless of budget. No
RetroDebugger MCP tools were available as callable functions in this
session (not registered), so the live-emulator escalation path described in
this agent's own `tools_and_locations` could not be tried either.

**What would close this**: a live emulator (RetroDebugger, or any tool that
can run the CPU for tens of millions of cycles and log $D400-$D418 writes
without requiring an interrupt-vector handshake first) tracing both the
original `Paid_in_Fuff.sid` and the byte-patched reassembly and diffing the
resulting write logs. Given the reconstruction is already 100.000000%
byte-exact, a register-write match is the expected (not just hoped-for)
outcome of that trace — but it has not been produced, so `status` stays
`in-progress`, not `verified`, per this project's bar.

Separately unresolved: SIDdecompiler hangs (confirmed via a live
still-running-after-90s process check, not just slowness, independent of
`-t`) on the 2 outlier $080d-convention files and on the 1 cross-composer
file — all three remain fully undisassembled. Whether they share the
$1000-convention's routine (relocated) or are a genuinely different build is
still unconfirmed.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb scener/sid/release pages,
the local dataset aggregation (`data/composers`, `knowledge/COVERAGE.md`),
and (new this pass) direct disassembly/reassembly of 2 real files from the
local HVSC collection plus a full header read of all 34
`MUSICIANS/0-9/4753_Softcopy/` files and the 1 cross-composer file. Checked
and confirmed absent from `data/sidid.json`.

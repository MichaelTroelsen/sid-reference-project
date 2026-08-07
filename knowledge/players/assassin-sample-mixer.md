# Sample Mixer (Assassin)

```json
{
  "id": "assassin-sample-mixer",
  "name": "Sample Mixer",
  "aliases": ["Assassin_Sample_Mixer"],
  "authors": ["Assassin / Vermes (Poland)"],
  "released": "1993 (SIDId) / 1994 (CSDb release date, v2.17)",
  "status": "verified",
  "platform": "Native C64 tool. No public source found — closed scene tool distributed only as a D64 disk image.",
  "csdb_release": 129555,

  "memory": {
    "load_address": "File-specific, embedded as the payload's own first 2 LE bytes (all checked RSID headers have loadAddress=0): $1000 on Man_Machine.sid (JFK), $0B30 on Das_Boot.sid (Puma). Confirmed by direct disassembly+reassembly of both (2026-08 verification pass).",
    "zero_page": "CONFIRMED by disassembly (not just DeepSID): $A4-$A5 (channel-A sample pointer) + $A8-$A9 (channel-B sample pointer). Both pairs are read every NMI by the ping-pong mixer handlers and advanced by the low-nibble handler — matches DeepSID players.json's '4 bytes ($A4-$A5 + $A8-$A9)' exactly.",
    "layout": "A small 'player core' (sentinel-value resolver + two ping-pong CIA2-Timer-B NMI handlers + CIA/NMI-vector setup) is byte-identical in logic between the two files checked, only its absolute placement differs per export: it starts at load address in Man_Machine.sid ($1000-$11C9ish) but is placed separately from load in Das_Boot.sid ($0B30-$0BEB, with load=$0B30 too but init at $13AD elsewhere). A per-subtune dispatch loop (Man_Machine: $14A1-$150E; Das_Boot: $13AD-$1400) iterates subtune index 0-0x6F (112), resolving two per-subtune 16-bit indices through the sentinel resolver ($FF=end-of-chain/exit, $FE=redirect via a second lookup table, else pass through), then looks up a 4-byte-per-entry pointer table (Man_Machine: $1BB4 = [base_lo,base_hi,end_lo,end_hi]; Das_Boot: $12F0, same format) to set the channel-A/B sample pointers, and blocks synchronously (via JSR) until the sample finishes or a key is pressed on $DC01, before advancing to the next subtune index. The vast majority of each payload (~99%; only ~560-570 of 45,568-57,581 bytes classified as code) is per-song 4-bit PCM sample data plus apparently-unreached embedded editor/menu code (KERNAL CHROUT/GETIN calls spotted near Man_Machine's $12A1-$1350) not further characterized this pass."
  },
  "entry": {
    "init": "File-specific: $1000 (=load address) on Man_Machine.sid; $13AD (well past load=$0B30) on Das_Boot.sid. In both cases init blocks synchronously running through the whole subtune-dispatch loop described in memory.layout — it does not return promptly the way a conventional PSID init does.",
    "play": "$0000 on every one of the 14 tagged RSID files checked (all real per-frame activity is driven by a self-installed CIA2 Timer-B NMI, not a callable play routine — see effects.encoding). sidm2-sid-trace.exe's own prior failure text ('INIT likely waits on its own IRQ firing as a handshake before finishing setup') was directionally right but imprecise: init doesn't just wait for one IRQ, it runs the ENTIRE per-subtune playback sequence to completion synchronously; VICE (scripts/dev/vsid-trace.js) traces it correctly regardless because it emulates a real, interrupt-capable machine rather than waiting for init to return."
  },
  "speed": "NMI-driven at a CIA2 Timer-B rate set from a per-subtune 16-bit table (Man_Machine: $18D0/$18D1, indexed by subtune*2), independent of the VIC raster/50Hz frame rate. Measured on Man_Machine.sid subtune 0: timer value $00C0 (192 cycles), giving ~5.1kHz combined NMI rate / ~2.6kHz per-channel nibble-unpack rate.",

  "data_format": {
    "order_list": "TODO — not a traditional pattern/order-list format; see data_format.instruments for the confirmed per-sample structure.",
    "patterns": "N/A — this is a sample-mixing tool, not a pattern-based tracker. No pattern data format identified.",
    "instruments": "CONFIRMED: a flat array of 4-byte entries (base_lo, base_hi, end_lo, end_hi) giving the start/end address of each 4-bit-packed PCM sample, indexed by a per-subtune 16-bit value (through the sentinel resolver) shifted left twice (*4). Table address is file-specific: $1BB4 in Man_Machine.sid, $12F0 in Das_Boot.sid.",
    "wavetable": "N/A — no separate wavetable; see instruments (raw 4-bit-packed PCM).",
    "pulsetable": "N/A — not applicable, this tool does not appear to drive the SID's own oscillators for playback (see effects.encoding).",
    "filtertable": "N/A — $D418 (filter_mode_volume) is used directly as the digi output register, not as a filter/volume table."
  },
  "effects": {
    "encoding": "CONFIRMED sample-mixing mechanism ('Sample Mixer' name is literal, not just marketing): two ping-pong CIA2-Timer-B-driven NMI handlers alternate every interrupt (Man_Machine: $1127/$1174; Das_Boot: $0B49/$0B96 — same logic, different addresses). One handler reads the HIGH nibble of the byte at (channel-A pointer),Y AND the high nibble of the byte at (channel-B pointer),Y; the other reads the LOW nibbles of the same two bytes and also advances both pointers and checks for end-of-sample. Each handler sums the two channel nibbles and shifts right once (average) before writing the result to $D418 — the classic 'digi via volume register' PWM technique, genuinely mixing two independently-addressable 4-bit sample streams (not just playing one alongside SID synthesis). On the one subtune traced in each file, both channel pointers happened to reference the same table entry, so the 'mix' reduces to unpacking one stream at double rate — the architecture supports two genuinely independent streams via the two separate table-index lookups ($1015 vs $1016 in Man_Machine). No conventional IRQ vector ($0314/$0315) is ever installed in either file; playback is purely NMI-driven via $0318/$0319, and no indirect JMP appears anywhere in either 45-58KB payload.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "'Assassin' is a Polish scener (CSDb scener id 6833, country Poland), ex-member of the Polish group Vermes — CSDb release 129555 ('Sample Mixer V2.17', 1994) credits him as sole coder and releaser. This is NOT the same person as composer Magnar Harestad, whose HVSC Musicians.txt entry lists a struck-through former handle 'Assassin' (also 'Lizard') — that's a Norwegian composer with no connection to Vermes or this tool; a pure name collision, not evidence of any relationship.",
    "Unlike most name-only 'digi/sample/mixer' tags in this batch, this one has real corroborating evidence: DeepSID's players.json records this player's 'digi' field as 'Yes; 4-bit', i.e. DeepSID's own curated database (not just the filename) confirms it does digitized-sample playback at 4-bit resolution. The 'Mixer' half of the name is now also CONFIRMED literal, not just marketing (2026-08 verification pass, see effects.encoding): it genuinely mixes (sums+averages) two independently-addressable 4-bit sample streams via a ping-pong CIA2-Timer-B NMI pair.",
    "Highly concentrated, small-scene tool: exactly 14 files across 3 composers in the local dataset (JFK 6, Puma 7, Mamba 1 — data/composers/jfk.json, puma.json, mamba.json), and all three composers are themselves tagged country=Poland (data/composers/*.json). Consistent with a Polish-scene tool that stayed local rather than spreading internationally — no evidence it was ever adopted outside this circle.",
    "SIDId (data/sidid.json byTag) gives released='1993', while the CSDb release page for the same reference id (129555) gives a 1994 release date for 'Sample Mixer V2.17' — a year discrepancy between the two sources, left unresolved here.",
    "No source code, distribution notes, or documentation found anywhere (DeepSID players.json's source_code/distribution/docs fields are all blank for this entry); the only known distribution is a CSDb-hosted D64 disk image on release 129555 — i.e. a closed scene tool, never released as source. (An earlier draft cited a specific D64 filename and a 2014 CSDb comment; neither could be confirmed from the release page and both were dropped.)"
  ],
  "sources": [
    "data/sidid.json byTag.Assassin_Sample_Mixer (name, author, released=1993, reference=CSDb 129555)",
    "data/players.json 'Assassin Sample Mixer' entry (developer, start_year=1994, csdb_id=129555, digi='Yes; 4-bit', zero_pages='4 bytes ($A4-$A5 + $A8-$A9)')",
    "CSDb release (title 'Sample Mixer V2.17', credits 'Code: Assassin', 1994): https://csdb.dk/release/?id=129555",
    "CSDb scener profile for Assassin (Poland, ex-Vermes): https://csdb.dk/scener/?id=6833",
    "CSDb group Vermes (Poland): https://csdb.dk/group/?id=310",
    "HVSC Musicians.txt entry for Magnar Harestad (struck-through former handle 'Assassin' — unrelated name collision, cross-checked via data/composers/magnar.json)",
    "Local dataset aggregation: data/composers/jfk.json (6 files), data/composers/puma.json (7 files), data/composers/mamba.json (1 file) = 14 files, 3 composers, all country=Poland"
  ]
}
```

## Overview

Sample Mixer (tagged `Assassin_Sample_Mixer`) is a native C64 tool by the
Polish scener **Assassin** (CSDb scener id 6833), ex-member of the Polish
group **Vermes**, released as "Sample Mixer V2.17" in 1993/1994 (sources
disagree by a year — see quirks). It is a small, regionally-concentrated tool:
only 14 files across 3 composers in the local dataset (JFK, Puma, Mamba),
all three themselves Polish. Unlike several other "digi/sample/mixer"-named
tags in this batch, DeepSID's own curated database independently confirms a
real digi-playback capability (`digi: Yes; 4-bit`) rather than the name being
the only evidence — though the "mixer" (multi-sample-blending) implication
specifically remains unconfirmed.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) the author identity is a **real,
CSDb-documented Polish scener** distinct from an unrelated Norwegian composer
who happens to share the old handle "Assassin" — do not conflate them; (2) the
digi claim has **actual DeepSID-sourced corroboration** (`digi: Yes; 4-bit`),
a rarity in this batch, but the "mixer" (multi-channel blending) half of the
name is still unconfirmed; (3) it is a **tight Polish-scene tool** (14
files/3 composers, all Poland) with no public source, docs, or wider scene
adoption found.

## Disassembly notes

None performed. No source code or format documentation was found anywhere
(DeepSID's `source_code`/`docs`/`distribution` fields are all blank); the only
known artifact is a CSDb-hosted D64 disk image. A disassembly would need to
start from that D64 image directly — no manual or write-up exists to work
from first.

## Verification

### 2026-08 (solo run) — VERIFIED: register-write-exact relocation control on 2 files, 2 composers

**Closes the thread batch33 left open. `status` promoted to `verified`.**

Picked up from batch31's static RetroDebugger disassembly (`$1000 -> JMP $14A1`
init, sentinel resolver at `$1017`, self-modified operands at `$1015`/`$1016`/
`$1349`/`$134B`). No RetroDebugger MCP tools were available in this session
(confirmed absent from the declared tool set despite the task explicitly
expecting them — see `new_lesson_learned`), so this pass worked entirely from
`scripts/dev/dis6502.js` (the static recursive-descent disassembler already
used successfully on `defmon`/`4753-softcopy`) plus `scripts/dev/vsid-trace.js`
for tracing — no live emulator needed in the end.

**Files**: `MUSICIANS/J/JFK/Man_Machine.sid` (load=$1000, init=$1000, play=$0000,
payload 45,568 bytes) and `MUSICIANS/P/Puma/Das_Boot.sid` (load=$0B30, init=$13AD,
play=$0000, payload 57,581 bytes) — different composers, confirmed byte-identical
player-core *logic* at different absolute addresses (see `memory` fields above).

**Missing entry point found**: batch31's static disassembly stalled at ~0.8-1.2%
code because the real per-frame handlers are reached only via a CIA2-Timer-B NMI
vector install (`STA $0318`/`STY $0319`), which a recursive-descent walker can't
discover on its own (no `JMP`/`JSR` references them in the visited instruction
stream). Found by scanning the raw payload for `STA $0318`/`STY $0319` opcode
bytes and reading the immediately-preceding `LDA #imm`/`LDY #imm` pair as the
vector target — this is exactly gotcha 81's "self-installing IRQ vector" trick,
here applied to NMI instead of IRQ, with a ping-pong pair of two such handlers
(`$1127`/`$1174` in Man_Machine.sid, `$0B49`/`$0B96` in Das_Boot.sid) that
re-arm each other every interrupt. Feeding both back to `dis6502.js` as extra
entries raised code coverage and fully resolved the sample-mixing mechanism
now documented in `effects.encoding`.

**Byte-diff (native, non-relocated)**: both files **100.000000%** byte-exact —
tautological on its own (batch29/lesson-63's caveat applies: a byte-identical
reassembly's own trace proves nothing), so a genuine relocation-invariance
control (lessons 69/70/72) was required.

**Relocation control — 2 deltas per file**, patching (a) the 3 hardcoded
NMI-vector-install immediate-operand pairs to `#<(ORG+off)`/`#>(ORG+off)`
(`dis6502.js --symbolic` only rewrites absolute-mode operands, not immediates —
this class of fix is lesson 80/103's split-immediate-pointer pattern) and (b)
the one sample-pointer-table entry (4 bytes) actually exercised by subtune 0,
decoded from the original file's own bytes and re-encoded relative to the new
base:

| file | delta | bytes differing (native vs relocated) | frames traced | raw writes | divergences |
|---|---|--:|--:|--:|--:|
| Man_Machine.sid | `+$1000` (page-aligned) | 81 / 45,568 (0.18%) | 200 | 20,549 | **0**, incl. cycle timing |
| Man_Machine.sid | `+$1137` (non-aligned) | — | 60 | 6,251 | **0** reg/value; max 3-cycle drift (page-crossing jitter, lesson 70a) |
| Das_Boot.sid | `+$1100` (page-aligned) | 68 / 57,581 (0.12%) | 200 | 20,549 | **0**, incl. cycle timing |
| Das_Boot.sid | `+$1163` (non-aligned) | — | 60 | 6,251 | **0** reg/value; max 3-cycle drift |

Every comparison used the raw per-write `(cycle, register, value)` stream from
`vsid-trace.js --keep-dump`, not the summary JSON. This is a real structural
test, not a tautology: 81/68 bytes genuinely differ between the native and
relocated builds (the ORG-relative operands + the two manually-patched
immediate pairs + the one patched table entry), yet every one of 20,549 raw
register writes over ~4 seconds of real playback matches exactly at the
page-aligned delta, and matches on register+value (with only the expected
small page-crossing cycle jitter) at a deliberately non-page-aligned delta.

**A real, reusable tool bug was found and fixed along the way**: the first
Das_Boot.sid relocation attempt produced almost no SID writes at all (crashed
near-instantly). Cause: `dis6502.js --symbolic`'s in-range check for whether an
absolute operand is "part of the payload" only compared against
`[org, org+len)` — and Das_Boot's payload is large enough (57,581 bytes from a
low load address, `$0B30-$EC1D`) that this span numerically swallows the
hardware I/O page (`$D000-$DFFF`), so literal SID/CIA register stores like
`STA $D404` and `STA $DD07` got misidentified as relocatable in-payload
addresses and corrupted on relocation. Fixed by excluding `$D000-$DFFF` from
the symbolic-relocation eligibility check (`scripts/dev/dis6502.js`, `isIO`/
`inRangeForReloc`) — re-verified this doesn't change Man_Machine.sid's output
(that file's smaller payload never reached the I/O page) before relying on it
for Das_Boot.sid. See `new_lesson_learned`.

**Honest scope**: only ~1.0-1.2% of each payload (559/45,568 and 569/57,581
bytes) was ever classified as code — the rest is per-song 4-bit PCM sample
data plus apparently-unreached embedded editor/menu code, neither
disassembled nor traced this pass (see `memory.layout`). Only subtune 0
(`startSong`) was exercised in the traced windows on both files; no subtune
transition occurred in either trace (both samples were still playing at the
last traced frame), so the subtune-advance path in the dispatch loop was not
exercised by this evidence. The relocation control's own byte-diff is small
(0.12-0.18% of the file) because so little of the file is code — this is the
same shape as this project's own `4753-softcopy` precedent (also ~0.2-0.3%
code, also verified on the strength of a passing relocation control) and is
not, on its own, a weaker result than a higher-code-fraction file.

### 2026-07-31 (batch33) — tracing confirmed open

`scripts/dev/vsid-trace.js` traces `Man_Machine.sid` first try: 200 frames,
**20,450 register writes across 20 of the 25 SID registers**, ~102 per frame.
That is a mixed profile — neither a pure digi player (which would write `$D418`
alone, as [[c64-speech-system]] does) nor a plain synth tracker — which fits a
sample *mixer* driving samples alongside synthesised voices. Combined with the
batch31 disassembly note, **both halves of the workflow are now open for this
card.**

Single-sided observation of the original file — nothing reconstructed or
diffed — so status is unchanged. Note this also means the RSID `play=$0000`
interrupt-driven design documented below is no obstacle to tracing, since
`vsid-trace.js` runs a real machine rather than calling a play address.
Profile and cross-player comparison:
`knowledge/artifacts/unblocked-trace-profiles.txt`.

### 2026-07-31 (batch31) — SIDdecompiler block routed around

**The tool block below is no longer terminal.** RetroDebugger disassembled
`MUSICIANS/J/JFK/Man_Machine.sid` on the first attempt (payload extracted to
`.prg`, `retro_load`, `retro_disassemble`). Excerpts in
`knowledge/artifacts/siddecompiler-hang-class.txt`.

Established: `$1000 -> JMP $14A1` is init. Init saves the CPU port `$01` into
the code at `$1449`, writes the subtune index into the code at `$100A`, blanks
the screen, then indexes per-subtune word tables at `$15EC`/`$15ED` and
`$18D0`/`$18D1` by `subtune*2` and writes the resolved values **into code
operands** at `$1015`, `$1016`, `$1349` and `$134B`. A sentinel resolver at
`$1017` handles `$FF`/`$FE` control bytes and redirects control flow by
manipulating the stack directly (`PLA`/`PLA` then `JMP`, discarding its own
return address).

This puts the player in the same family as [[defmon]]: **self-modified
immediate operands**, which is the mechanism behind the shared "SIDdecompiler
hangs" symptom. The direct stack manipulation at `$1017` compounds it for a
static tracer. No `shares_routine_with` edge is asserted — this is a shared
*technique*, not shared code, and nothing here shows common authorship.

**Status stays `in-progress`.** One file, static disassembly, code never
executed (`isExecuted=false` throughout), nothing reassembled, no byte-diff or
trace-diff. The RSID `play=$0000` / interrupt-driven finding below is unchanged
and unaffected.

### 2026-07-23 — the original tool block

**Attempted, genuinely blocked — `status` remains `in-progress`.** All 14
files tagged `Assassin_Sample_Mixer` in the local dataset (JFK 6, Puma 7,
Mamba 1) were checked directly against the HVSC collection at
`C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/` (all 14 present and
readable). PSID/RSID header inspection (per this project's `psid_header`
convention) on all 14 files shows every one is an **RSID** file (magic
`"RSID"`, v2) with `playAddress = 0x0000` — a real, structural signal, not a
per-file oddity: an RSID with `play=0` means the player is entirely
**interrupt-driven**; there is no discrete, callable per-frame play routine
at all, only an `init` that installs its own IRQ/CIA handler as part of cold
start. Two representative files were carried through disassembly/trace:
`MUSICIANS/J/JFK/Man_Machine.sid` (init=`$1000`=load address, payload 45568
bytes) and `MUSICIANS/P/Puma/Das_Boot.sid` (init=`$13AD`, load=`$0B30`,
payload 57581 bytes).

**Root cause of the block, confirmed directly on both files, two
independent tools:**
- `SIDdecompiler.exe` (`-a<decimal load addr> -z -d -c -v2`, and separately
  with `-I`/`-P` overrides forcing init=play=load address) **hangs
  indefinitely** on every attempt, including at `-t1` (call the play routine
  only once) — confirmed via `tasklist` that the process is genuinely stuck,
  not merely slow (same hang signature as gotcha 23/entry 23, a different
  player family but the same underlying cause: a player that installs a
  custom hardware IRQ vector and expects that interrupt to actually fire
  during its own init).
- `sidm2-sid-trace.exe` (built from the PSID header per this project's
  convention, run directly since the `mcp__sidm2-siddump__*` MCP tools are
  not registered in this session — see gotcha 8) does NOT hang, and instead
  fails cleanly with an explicit, load-bearing diagnostic on both files:
  ```
  play=$0000: bounded INIT @ $1000 (subtune 0), deriving IRQ from $FFFE
  FAILED: self-installing IRQ vector never resolved after 2000000 steps
  (installed=false, handler=$0000). This player's INIT likely waits on its
  own IRQ firing as a handshake before finishing setup; this tracer has no
  autonomous VIC/CIA interrupt delivery so that can never happen here.
  Not a 0-write tune — untraceable with this tool.
  ```
  (identical failure text and mechanism on `Das_Boot.sid`, only the
  addresses differ: `init=$13AD`, `handler=$0000` again after 2,000,000
  steps).

**Conclusion**: this is the same category of block flagged in this agent's
own instructions as a legitimate reason to stop — the player's cold-start
sequence genuinely requires a live, interrupt-capable emulator (real VIC/CIA
IRQ delivery) to even complete `init`, which is a hard prerequisite before
any play-routine tracing could begin. Neither `SIDdecompiler`'s internal
6502 emulator nor `sidm2-sid-trace.exe`'s tracer implement autonomous
interrupt delivery, so both are structurally unable to get past this player's
own cold-start handshake — this is not a per-file quirk (confirmed
identically on two files, two different composers, two different
init/load addresses) and not fixable by any combination of flags tried
(`-t`, `-C1`, `-I`/`-P` overrides). RetroDebugger (a live, interrupt-capable
6502/C64 emulator) is the only tool in this project's toolkit that could
plausibly get past this, but it is out of scope for this run (reserved for
solo sessions, not this parallel batch — see this agent's own constraints).
The one runtime-adjacent fact recorded (`zero_page`, 4 bytes at
$A4-$A5/$A8-$A9) remains taken as-is from DeepSID's curated `players.json`,
not independently confirmed here.

**Next step for a future solo session**: re-run this exact
disassemble/trace pass through RetroDebugger (`mcp__retrodebugger__*`) on
`MUSICIANS/J/JFK/Man_Machine.sid` — load the file, single-step or run past
`init` with real interrupt delivery active, and confirm the IRQ handler
installs and fires; from there, byte-diff/trace-diff exactly as this
agent's standard workflow describes. Static disassembly alone cannot close
this card.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), DeepSID `players.json`,
the CSDb release and scener pages, HVSC Musicians.txt (for the unrelated
Magnar/"Assassin" name collision), and the local composer-file aggregation.

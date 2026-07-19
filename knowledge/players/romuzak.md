# RoMuzak

```json
{
  "id": "romuzak",
  "name": "RoMuzak",
  "aliases": ["RoMuzak_V6.x", "RoMuzak_V7.x", "Romuzak"],
  "authors": ["Oliver Blasnik (ROM)"],
  "released": "1989 (V6.x); 1990 (V7.x)",
  "status": "verified",
  "platform": "Native C64 music editor+player. Closed tool with embedded author/copyright verification code; no source/license.",
  "csdb_release": 17814,

  "memory": {
    "load_address": "NOT FIXED — the replay is compiled per-release at whatever address the packer/wrapper placed it. CONFIRMED on 2 independent real HVSC V6.x files: Acid_Disco.sid (A-Man) loads/inits/plays at $1000, A_Dream_Is_Coming.sid (Boris Koester) at $8000 (init $8000/play $8003) — same code, different base, both relocated cleanly with SIDdecompiler's -a. Do not assume $1000 is universal for this player. (Editor entry is SYS 28672 / $7000, still distinct from any of these replay addresses — do not conflate.)",
    "zero_page": "CONFIRMED identical across both traced V6.x files: $F8/$F9 (a 16-bit indirect pointer, read via `lda (zf8),Y` — used to fetch pattern/instrument bytes), $FA (a per-voice loop index, loaded via `ldy zfa`/`ldx zfa`), $FB (a scratch/temp byte). Exactly 4 ZP bytes used, no more found in either disassembly.",
    "layout": "CONFIRMED (relative to load address, both files): load+$000-$002 = 2 JMP vectors (init, play); load+$00c-ish = embedded ASCII copyright/verification string (`ROMUZAK89...` — see quirks); load+$01a-$0a4ish = per-voice RUNTIME WORK AREA (tempo/pitch countdown counters, NOT static song data — see Verification section on why this region byte-diffs 'wrong' against a stock SIDdecompiler pass); a per-voice SID-register-offset table {$00,$07,$0e} (one label per file, e.g. `l11fc` in Acid_Disco.sid) used to index $D400+offset per voice; a per-subtune order-list/track-pointer table (see data_format.order_list) sits later in the file (e.g. $1eeb in one V7.x file). Beyond that, code and per-song pattern/instrument data fill out the rest of the file — not separately mapped here."
  },
  "entry": {
    "init": "$1000 (or file's own load address — see memory.load_address) — CONFIRMED via 2 independent real files, trace-exact. The PSID init vector is itself a JMP to a small 'select subtune' routine (`cmp #$ff` guard, then `X = subtune# * 6`, then reads a 6-byte order-list-table entry `song00,X` — 3x lo-byte + 3x hi-byte = 3 track/pattern start pointers, one per SID voice) — i.e. init's real job is subtune-select + per-voice track-pointer setup, not SID-register reset (SID hard-reset happens later, inside the play routine's own state-machine on a specific voice-restart path, not at cold-start init).",
    "play": "$1003 (or load+3) — CONFIRMED trace-exact (see Verification). Real play routine loops per-voice (X = 0..2 via a voice counter, e.g. `l1087` in Acid_Disco.sid) decrementing per-voice tempo/note counters and dispatching pattern-step logic; each voice's SID registers are reached via the per-voice offset table {0,7,14} added to $D400."
  },
  "speed": "TODO — both traced real files show ALL of a frame's SID writes landing at cycle <1650 (well within one raster frame) and 0 further writes on most subsequent frames in a 300-frame trace window (tempo-gated, as expected for a tracker). Behavioural note (secondary source, not confirmed from disassembly): heavy CPU cost — up to ~20+ rasterlines/frame with sprites active (considered expensive by scene coders).",

  "data_format": {
    "order_list": "PARTIALLY CONFIRMED: a flat table (label `song00` in one V7.x file, at file-relative address $1eeb there) of 3x 16-bit little-endian pointers-in-lo/hi-byte-plane-order (all 3 lo bytes, then all 3 hi bytes — NOT interleaved lo/hi pairs) per subtune slot, indexed by `subtune_number * 6` from init (see entry.init). Each of the 3 pointers is a per-voice track/pattern start address. Only 1-subtune files were available locally so multi-subtune table layout (whether song01 etc. are separate labels or just the next 6 bytes of the same flat table) is inferred from the index arithmetic, not directly observed — TODO: confirm on a real multi-subtune RoMuzak file if one exists locally.",
    "patterns": "TODO — track/pattern byte format at the pointers above not decoded.",
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
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "The player embeds AUTHOR/COPYRIGHT VERIFICATION code (self-checks) — the copyright string reads e.g. 'ROMUZAK V6.3 … OLIVER BLASNIK … DIGITAL MARKETING!! 02435-1295!!' (the trailing digits are a German phone number). Removing the verification gave scene coders a small speed gain.",
    "'Digital Marketing' is Blasnik's OWN copyright label, NOT a third-party publisher. CSDb releases were cracked/imported by scene groups (ACT 501, Cosmos, etc.) — those are crackers, not the publisher.",
    "Behavioural facts (from a Polish c64scene.pl technical thread): heavy raster cost (~20+ lines with sprites); modular per-channel processing where disassemblers spread the work across multiple IRQ calls; a known bug where the first note is sometimes muted on looping songs.",
    "Version history: V6.2/V6.3 (1989), V7.94/V7.96 (V7.96 = 15 Mar 1990). German docs bundled. Intermediate versions UNKNOWN.",
    "Possible (unconfirmed) lineage: a 'Romuzak Converter' (Tropic, 1990) exists and search summaries claim RoMuzak could import/convert Future Composer V1.0 songs — plausible but not primary-sourced (TODO). Note SIDM2's own KB has a shared 'romuzak_driver.asm' trace driver grouping MoN/ROMUZAK/Hubbard/DMC/Sound Monitor — a modern RE grouping, not an authorship claim.",
    "CONFIRMED (2026-07-19, disassembly): the embedded copyright/verification string sits right after the init/play jump vectors, at load+$0e..: literal bytes spell 'ROMUZAK89...' (matches the quirk above about the full 'ROMUZAK V6.3 ... OLIVER BLASNIK...' string — this is its file-header anchor point, not floating elsewhere in the code).",
    "CONFIRMED (2026-07-19): the load-bearing reason a naive SIDdecompiler byte-diff on this player looks ~98.6-98.9% instead of 100% is the same 'drifted self-modified working-storage table' class of artifact documented on several other cards (see e.g. `future-composer`/`cheesecutter` cards' own lessons) — SIDdecompiler's default 30000-call trace bakes in the *post-playback* runtime value of the player's own per-voice tempo/pitch counters (load+$01a..$0a4ish) rather than their pristine cold-start value. On RoMuzak specifically this region is genuinely the player's live per-voice work RAM (confirmed by cross-referencing the play routine's own code, which repeatedly reads/writes it via `X`-indexed per-voice loops) — not song data — so this is expected, not a red flag, and closes to 100% with an address-tracking patch back to the pristine SID-file bytes (see Verification)."
  ],
  "sources": [
    "CSDb RoMuzak V7.96 (docs, versions, ROM=code): https://csdb.dk/release/?id=17819",
    "CSDb baseline release: https://csdb.dk/release/?id=17814",
    "c64scene.pl technical thread (raster cost, copyright string, internals): https://www.c64scene.pl/viewtopic.php?t=112",
    "sidid:RoMuzak_V6.x (author Oliver Blasnik (ROM), 1989 Digital Marketing, CSDb 17814)",
    "Local dataset: 563 files tagged RoMuzak_V6.x/V7.x (see knowledge/COVERAGE.md)",
    "Local disassembly (2026-07-19) of 2 real HVSC V6.x files + 1 real V7.x file — see Verification section for exact filenames/results."
  ]
}
```

## Overview

RoMuzak is a native C64 music editor+player by **Oliver Blasnik (ROM)**,
released 1989 (V6.x) through 1990 (V7.x) under his own "Digital Marketing"
label. 563 files here across 73 composers. It's notable for embedding
author/copyright verification code in the player itself, and for being fairly
CPU-heavy (~20+ rasterlines/frame with sprites).

## Quirks & gotchas

See the `quirks` array. Load-bearing: the **embedded copyright-verification
code** (and "Digital Marketing" = the author's own label, not a publisher); the
**heavy raster cost**; the caution that **SYS $7000 is the editor entry, not
the replay init/play**; and (new, 2026-07-19) that **the replay is compiled
per-release at whatever load address the packer used** — do not assume a
fixed `$1000` (confirmed on real files at both `$1000` and `$8000`).

## Disassembly notes

**2026-07-19 pass.** Disassembled/reassembled/byte-diffed/trace-diffed 3 real
HVSC files via `SIDdecompiler.exe -a<decimal load addr> -z -d -c -v2` +
`64tass`:

- **`MUSICIANS/A/A-Man/Acid_Disco.sid`** (V6.x, load/init `$1000`, play
  `$1003`, payload 3752 bytes). Initial byte-diff (stock SIDdecompiler
  output, no patching): 98.64% (49/3592 compared bytes differ — the
  reassembly only covered 3592 of 3752 bytes; the trailing 160 bytes,
  `$1E08-$1EA7`, were never touched by SIDdecompiler's own trace per its
  `-v2` memory-touch map, i.e. genuinely unreached by this file's playback,
  not a tool shortfall — same class of gap as this agent's own
  `lessons_learned` #9). All 49 diverging bytes fell in the player's own
  per-voice runtime work area (`$101a-$10a1`, `$1202-$1203`, one
  self-modified `lda #imm` operand at `$1552`) — the "drifted working-storage
  table" artifact (see quirks). Patched every diverging byte back to the
  pristine SID-file value (address-tracking script keyed off the `.asm`'s own
  `l<hex>` labels, extended to also follow non-hex-labeled continuation
  `.byte` lines like `instr .byte ...`) and reassembled: **100.0000%
  byte-exact** on the 3592-byte covered region (the $1E08-$1EA7 tail remains
  unresolved — see Verification).
- **`MUSICIANS/K/Koester_Boris/A_Dream_Is_Coming.sid`** (V6.x, load/init
  `$8000`, play `$8003`, payload 4168 bytes — chosen specifically to confirm
  the player isn't hardwired to `$1000`). Same method, same drifted-table
  pattern at the *same relative offsets* (`$801a-$80a0`, `$8203`, `$8552`)
  confirming this is the player's own code, not per-file coincidence.
  Reassembly this time covered the **full** 4168-byte payload (no untraced
  tail on this file). After the identical patch method: **100.0000%
  byte-exact reassembly of the entire file, full length.**
- **`MUSICIANS/H/Heitkamp_Arndt/Digital_Excess-The_Demo.sid`** (V7.x, load/init
  `$1000`, play `$1003` — same convention as V6.x on this file, at least for
  entry points). Hit a **genuine, unresolved structural gap, not attempted
  further**: the disassembly references an undefined symbol
  (`song00trk00`) — SIDdecompiler emitted a pointer-table entry
  (`.byte <song00trk00, ...`) for it but never emitted the corresponding
  data label, because that address ($1eeb+0 file-relative → real target
  `$218b`, computed directly from the pristine pointer bytes at `song00`'s
  own address, confirmed against the two sibling entries `song00trk01`
  ($2021) and `song00trk02` ($22d7) which *did* get labels) was never
  touched by SIDdecompiler's own emulated trace at all — i.e. this file has
  one order-list slot whose target track was simply never played back during
  the tool's default 30000-call trace window. **Left as TODO — see
  Verification for the exact address to pick this up from.**

Note SIDM2's shared `romuzak_driver.asm` groups RoMuzak with
MoN/Hubbard/DMC/SoundMonitor as a trace-driver family — a lead for
comparison, not an authorship link; not cross-checked this pass.

## Verification

**2026-07-13 (earlier pass).** Traced a real HVSC RoMuzak_V6.x `.sid` with
`sidm2-sid-trace`: load `$1000`, init `$1000`, play `$1003`, 241 register
writes / 50 frames — confirmed the replay runs and that `$1003` is distinct
from the editor's `$7000`.

**2026-07-19 — disassembly/reassembly/byte-diff/trace-diff, `status:
verified`.**

- **`Acid_Disco.sid`** (V6.x, `$1000`/`$1000`/`$1003`): after the
  working-storage patch (see Disassembly notes), byte-diff is
  **100.0000% exact on the 3592/3752 covered bytes** (95.7% of the file —
  the trailing 160 bytes, `$1E08-$1EA7`, are unresolved/TODO, not merely
  untested: SIDdecompiler's own `-v2` map shows them never touched by any
  trace). Trace-diff (`sidm2-sid-trace.exe`, init `$1000`, play `$1003`,
  **300 frames**) is **register-write-identical** — `diff` of the two trace
  logs shows zero differing lines beyond the echoed input filename.
- **`A_Dream_Is_Coming.sid`** (V6.x, `$8000`/`$8000`/`$8003`, a different
  composer, chosen to confirm the player isn't hardwired to `$1000`): after
  the same patch method, byte-diff is **100.0000% exact on the full
  4168-byte payload** (no unresolved tail on this file — SIDdecompiler's own
  trace covered it end-to-end). Trace-diff at **300 frames** is
  **register-write-identical**.
- **`Digital_Excess-The_Demo.sid`** (V7.x): **not verified** — disassembly
  doesn't even reassemble as emitted (undefined symbol `song00trk00`, see
  Disassembly notes); the real target address (`$218b`) is known but the
  data at that address was not manually recovered/patched in this pass.
  Left `TODO`: define `song00trk00 = $218b` (or `-P`/manual-label the
  region) and re-run the same byte-diff/trace-diff pipeline on this file to
  see whether V7.x's engine is otherwise identical to V6.x's.

**Net result**: the core replay engine (init subtune-select + per-voice
track-pointer setup, and the play routine's per-voice tempo/dispatch loop) is
**verified register-write-exact on 2 independent real V6.x files at two
different load addresses**, with the only remaining gaps precisely localized
(`Acid_Disco.sid`'s untouched $1E08-$1EA7 tail; the V7.x file's one
unreached order-list target at $218b) rather than hand-waved. `status:
verified` reflects the V6.x engine result specifically — V7.x is a real,
open TODO, not assumed identical just because the entry-point convention
matches on the one V7.x file tried.

## Sources

See the `sources` array — CSDb (V7.96 + baseline), the c64scene.pl technical
thread, the cached SIDId entry, and this pass's own local disassembly of 3
real HVSC files.

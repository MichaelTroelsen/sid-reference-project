# SID Factory

```json
{
  "id": "sid-factory",
  "name": "SID Factory",
  "aliases": ["SF1", "SidFactory", "SidFactory/Laxity"],
  "authors": ["Thomas Egeskov Petersen (Laxity)"],
  "released": "2005",
  "status": "verified",
  "platform": "Native C64 (editor + player run on the C64)",
  "csdb_release": 39519,

  "memory": {
    "load_address": "$1000 — confirmed on 2 real HVSC files (SID_Factory_demo_tune_1.sid, Cauldron_Variations.sid), both PSID-header load=$1000. Driver revision used by this corpus (tag `SidFactory/Laxity`, all 38 files) is not distinguished from driver 5 vs 6 by any header field checked; not confirmed whether other drivers relocate.",
    "zero_page": "$FB/$FC (2 bytes) — confirmed via disassembly: a single indirect `(zp),Y` pointer pair, reused throughout the play routine for pattern/table indexing. Matches DeepSID's 'approx 1-5 bytes' spec exactly (low end of the stated range).",
    "layout": "$1000-$1005: fixed 6-byte entry stub (`JMP <init>` / `BIT <flag>,BMI/BVS,...` dispatch — see entry.init/play). Immediately after the stub's own code (address varies per file, e.g. ~$1780 on a 3995-byte tune, ~$1839 on a 3634-byte tune — NOT a fixed universal address) sits a self-modified RAM working-storage block (~82-116 bytes observed) holding per-voice runtime state (gate/tick flags, current instrument/pointer bytes) that the play routine both reads and overwrites every call. Tune data (order lists/patterns/instrument tables) follows."
  },
  "entry": {
    "init": "load address ($1000 on both tested files) → `JMP` to the real init routine (at $16AC on the tested build; address is file-specific, not a fixed constant across the corpus). Confirmed via 2 independent real HVSC files, register-write trace-exact.",
    "play": "load+6 ($1006 on both tested files) → `BIT <flag-byte>` / `BMI` / `BVS` three-way dispatch on a self-modified flag byte in the working-storage block (see memory.layout), selecting among first-call-init / tick-boundary / normal-frame play paths. Confirmed via 2 independent real HVSC files, register-write trace-exact."
  },
  "speed": "1x to 4x (driver 5 only)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "125/128 patterns, each up to 64 rows (editor limit)",
    "instruments": "32 instruments",
    "wavetable": "Wave table + arpeggio-only table (driver 5)",
    "pulsetable": "Programmable",
    "filtertable": "Programmable"
  },
  "effects": {
    "encoding": "TODO: per-driver command encoding — verification reached register-write trace parity but did not map individual command bytes to effects (vibrato/pulse/filter table walk not decoded).",
    "commands": {
      "vibrato": "Yes; calculated in driver 5",
      "hard_restart": "Per-instrument"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["jch-newplayer", "laxity-newplayer"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Driver-based: like SF2, the C64 player is a swappable driver — 'Driver 5 is luxury; Driver 6 is fast' (DeepSID). ZP (1-5 bytes) and CPU (26-32 rasterlines) are per-driver. The 38-file corpus tagged `SidFactory/Laxity` all disassemble to the same $1000-load / init=$1000 / play=$1006 entry convention and the same $FB/$FC ZP pair on the 2 files actually disassembled — not confirmed whether this is 'driver 5' specifically vs a single fixed driver DeepSID's dual driver 5/6 description doesn't otherwise distinguish in the corpus's own file tags.",
    "Native C64 editor (runs ON the C64) — the predecessor to SID Factory II, which moved the editor to Windows/Mac/Linux.",
    "Source is NOT public (unlike SF2) — so SF1's drivers genuinely require disassembly to document.",
    "Uses JCH 'Contiguous sequence stacking' track system; Laxity also released Laxity NewPlayer V21 the same year (2006) — whether SF1's drivers share code with it is a hypothesis worth checking (candidate: laxity-newplayer). Not checked during this verification pass.",
    "SIDdecompiler's default -t 30000 trace window bakes a post-execution (drifted) snapshot of a self-modified per-voice working-storage block into the reassembled .asm's initial byte values, rather than the pristine cold-load value — the classic pattern documented across many other players in the sid-player-verify agent's lessons_learned (10/16/17/20/25/29/37/42/43). On this player it shows up as a single contiguous ~82-116 byte cluster sitting just past the entry stub's own code, provably dead (register-write trace-exact once patched back to the pristine value on 2 independent files) but NOT small enough to hand-wave — raw reassembly byte-diff is only ~97% before the fix."
  ],
  "sources": [
    "deepsid:players.json (SID Factory) — developer, 2005-2006, drivers, tables, 125/128 patterns",
    "sidid:SidFactory/Laxity (released 2006, csdb release 39519)",
    "csdb:release/39519 — 'SID Factory 0.5 (alpha 1)', 2006-09-02, Code+Music by Laxity"
  ]
}
```

## Overview

SID Factory (SF1) is Laxity's native-C64 SID music editor (2005–2006, Vibrants),
the direct predecessor of [SID Factory II](sid-factory-ii.md). Like SF2 it is
driver-based (the player is a swappable "driver"; driver 5 is the full-feature
one, driver 6 the fast one) and uses JCH's "contiguous sequence stacking" track
system. Unlike SF2 it runs entirely on the C64 and its source is not public.

## Quirks & gotchas

- **Per-driver everything.** DeepSID's own spec already qualifies ZP (≈1–5
  bytes) and CPU (26–32 rasterlines) as "driver 5" figures; other drivers
  differ. The 2 files actually disassembled (see Verification) both landed
  on the exact same $1000/$1006/$FB-$FC convention — consistent with a
  single driver build across (at least a sample of) the 38-file corpus, but
  not proof all 38 share it.
- **No public source** — SF1 is a real disassembly target (SF2 was a shortcut
  because its source is on GitHub; that shortcut does not exist here). Now
  disassembled and register-write-trace-verified on 2 real files — see
  Verification.
- Editor limits: 125/128 patterns, up to 64 rows; 32 instruments; multispeed
  1×–4× on driver 5.
- A self-modified per-voice working-storage block right after the entry stub
  makes a naive reassembly byte-diff look worse than the reconstruction
  actually is (~97%, not ~100%) — see the Verification section and the
  `quirks` JSON field for the confirmed-dead-once-patched explanation.

## Disassembly notes

Disassembled and register-write-trace-verified 2026-07-23 (see Verification).
Entry convention: `$1000` = `JMP` to the real init routine; `$1006` = `BIT`
test of a self-modified flag byte, `BMI`/`BVS` three-way dispatch. ZP use is
exactly `$FB`/`$FC`, a single indirect `(zp),Y` pointer pair reused throughout
the play routine (matches DeepSID's "approx 1-5 bytes" spec). A self-modified
per-voice working-storage block sits immediately after the entry stub's own
code (address is file-specific, not fixed — e.g. ~$1780 vs ~$1839 on the two
tested files) and is both read and written every play call; `SIDdecompiler`'s
default trace captures a drifted post-execution snapshot of it rather than the
pristine cold-load bytes (see `quirks`) — provably dead once patched back and
trace-diffed. Data-format (order list/pattern/instrument stride, effect
command encoding) was **not** decoded this pass — reaching register-write
parity didn't require walking those tables. Comparing the SF1 driver's
sequence/table walk against SF2's public driver source (shared JCH track
system) remains a real, un-taken shortcut for a follow-up pass.

## Verification

**Register-write trace-exact on 2 independent real HVSC files (2026-07-23),
`status: verified`.**

Both from the `SidFactory/Laxity` tag (38 total files in this HVSC snapshot;
distinct from `SidFactory_II/Laxity`, checked explicitly before starting —
see `data/composers/*.json`'s per-file `player` field).

- **`MUSICIANS/L/Laxity/SID_Factory_demo_tune_1.sid`** (Laxity's own demo
  tune). PSID header: load=`$1000`, init=`$1000`, play=`$1006`, 1 subtune,
  payload 3995 bytes. `SIDdecompiler -a4096 -z -d -c -v2` → `-v2` map's own
  "Start:" address is `$1000`, matching the PSID load address exactly (no
  dropped-leading-byte trap, gotcha 40/41 checked and clean). 64tass
  reassembly is exactly 3995 bytes ($1000-$1f9a), length-correct.
  Raw byte-diff: **97.1464%** (114/3995 differ), all 114 bytes in one
  contiguous cluster `$1784-$1829`, exactly matching the `-v2` map's
  `+`-marked (self-modified/write-touched) region.
- **`MUSICIANS/S/Sidder/Cauldron_Variations.sid`** (different composer, not
  Laxity — cross-checks the driver isn't Laxity-only-artifact). PSID header:
  load=`$1000`, init=`$1000`, play=`$1006`, 1 subtune, payload 3634 bytes.
  Same method; `-v2` Start: `$1000` (clean). Reassembly exactly 3634 bytes
  ($1000-$1e31). Raw byte-diff: **96.8079%** (116/3634 differ), again one
  contiguous cluster, `$1839-$18de`, same `+`-marked pattern.
- **Root cause confirmed via trace, not assumed**: traced both files
  unpatched (`sidm2-sid-trace.exe`, init `$1000`, play `$1006`, 100 frames) —
  both reassemblies diverged from the original from frame 1 onward (extra/
  missing `osc*_control` writes, drifted cycle counts on shared writes) —
  this was a real divergence, not dead noise, until patched.
- **Fix**: wrote an address-tracking patch script
  (`scratchpad/sid-factory/patch_asm.js`) that walks the `.asm`'s own
  `l<hex> .byte ...` labels (not a naive line counter — see lessons_learned
  26) and overwrites every `.byte` literal whose real address falls in the
  diverging range with the pristine original SID-file byte at that address,
  skipping non-literal pointer tokens (`<label`/`>label`). Reassembled with
  64tass after the source-level patch (not a post-hoc binary patch — matches
  the `cheesecutter.md` precedent's bar for `verified`).
- **Result, both files**: **100.0000% byte-exact** reassembly (0/3995 and
  0/3634 bytes differ) and **register-write-identical** traces at both 300
  frames (tune1: 1904/1904 writes; Cauldron: 985/985 writes) and 1000 frames
  (tune1: 6496/6496 writes; Cauldron: 4063/4063 writes) — checked at the
  longer window deliberately, per this project's own caution about late/
  transient divergence (lessons_learned 17/25). Only the tracer's own echoed
  input filename differs between original and reassembled trace logs in
  every comparison.
- **Scope note**: both tested files are single-subtune (PSID `subtunes=1`);
  multi-subtune SF1 files exist in the corpus but weren't tested. Effect
  command encoding and the full order-list/pattern/instrument data-format
  walk remain undecoded (see Disassembly notes) — register-write parity did
  not require it. Not confirmed whether "driver 5" vs "driver 6" (DeepSID's
  two named drivers) corresponds to any variation within this 38-file
  corpus, or whether all 38 files share this exact driver build.

## Sources

- DeepSID `data/players.json` → "SID Factory" (Laxity, 2005–2006, drivers 5/6,
  32 instruments, 125/128 patterns, JCH track system).
- SIDId `sidid.nfo` → `SidFactory/Laxity` (released 2006, CSDb 39519).
- CSDb release 39519 → "SID Factory 0.5 (alpha 1)", 2006-09-02, Code+Music by
  Laxity.
- Direct disassembly/reassembly/trace-diff verification (2026-07-23):
  `SIDdecompiler.exe` (SIDM2 tools) on 2 real HVSC files tagged
  `SidFactory/Laxity`, `64tass.exe` reassembly, `sidm2-sid-trace.exe`
  register-write trace-diff. See Verification section for the full method
  and results; working files under `scratchpad/sid-factory/` (session-local,
  not committed).

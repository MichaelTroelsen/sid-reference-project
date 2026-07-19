# JCH NewPlayer V20 (NP20)

```json
{
  "id": "jch-newplayer-v20",
  "name": "JCH NewPlayer V20 (NP20)",
  "aliases": ["NewPlayer_20", "NewPlayer_20.G4", "NP20", "JCH_NewPlayer_V20"],
  "authors": ["Jens-Christian Huus (JCH)"],
  "released": "TODO: year (JCH Editor v3.x era per jch-newplayer.md, 1990-91)",
  "status": "verified",
  "platform": "Native C64 player routine — one specific version within the JCH NewPlayer family; has its own SF2 driver (registry key `np20`, file `sf2driver_np20_00.prg`)",
  "csdb_release": null,

  "memory": {
    "load_address": "$1000 in the standard packed convention (DISASSEMBLY-CONFIRMED 2026-07-19 on two real HVSC files, Agemixer/Eternal_Light.sid and Balboa/Beach_Party_1988_tune_1.sid, via SIDdecompiler.exe — see Disassembly notes). A third file (Agemixer/Dash_It.sid) also loads at $1000 and carries the identical core engine there, but its PSID-declared init/play vectors point instead at $2170/$2182, a per-release wrapper region — see the entry.init/play note.",
    "zero_page": "$FB/$FC only (DISASSEMBLY-CONFIRMED, all 3 files) — same single indirect-pointer-pair convention as V13, reused across all 3 voices via push/pull around each voice's play-routine slice.",
    "layout": "DISASSEMBLY-CONFIRMED, identical addresses across the two standard-convention files (Eternal_Light.sid, Beach_Party_1988_tune_1.sid — different composers, same engine build): $1000 init vector (jmp $1040), $1003 play vector (jmp $10c1), $1006-$101f small per-voice working-value block (self-modified/working-storage, same class of drifted-table gap closed on V13 — see Verification), $1020 a flag byte + embedded 32x2-char ASCII credit text (same convention as V13's $1020 block and the v00 series), code from $1040, data/table region from ~$1700 onward, a per-voice order-list pointer table at $17cb (RESOLVES the external spec's unverified '$1DCB/$1ECB sequence pointers' claim as WRONG for this build — real address is $17cb, not $1DCB), copied by init into working 'current position' pointers (lo table $172e / hi table $1731, 3 bytes each, SoA layout not per-voice-interleaved) and 'restart on loop' pointers (lo $1734 / hi $1737) — structurally the same two-tier pointer scheme as V13 (which used $172c/$172f and $1732/$1735 for the same two roles, interleaved rather than split lo/hi arrays). Engine code is byte-identical across both standard-convention files end to end outside the credit-text block and the working-storage regions."
  },
  "entry": {
    "init": "$1000 in the standard packed convention (DISASSEMBLY- and TRACE-CONFIRMED on Eternal_Light.sid and Beach_Party_1988_tune_1.sid: `$1000: jmp $1040` landing on the real init routine). A per-release/per-game build can wrap this: Dash_It.sid's PSID header declares init `$2170`, a ~48-byte dispatcher that itself calls down into the core engine's `$1000`/`$1003` via a SELF-MODIFIED JSR target (`sta $2196+1` rewrites the low byte of a `jsr $10xx` at $2195-$2197, selecting `$1003` vs `$1006` by a state byte at $216f) — read the PSID header per file, don't assume load address = init address for every V20 file.",
    "play": "$1003 in the standard packed convention (init+3) — DISASSEMBLY- and TRACE-CONFIRMED, `jmp $10c1` landing on the real play routine. Dash_It.sid's wrapper declares play `$2182` instead, dispatching into the core via the same self-modified-JSR mechanism as init above."
  },
  "speed": "TODO: 1x + multispeed not yet distinguished; all 3 traced files ran a plain single-call-per-frame convention.",

  "data_format": {
    "order_list": "DISASSEMBLY-CONFIRMED (see memory.layout): a per-voice 2-byte (lo/hi) pointer table at $17cb, copied by init into working 'current position' pointers (lo array $172e, hi array $1731) and separate 'restart on loop' pointers (lo array $1734, hi array $1737) — same two-pointer-per-voice architecture as V13, addresses differ because V20's engine layout is shifted ~8 bytes earlier. This DIRECTLY CONTRADICTS the external Codebase64 spec's claim of sequence pointers at $1DCB(lo)/$1ECB(hi) — that spec does not describe the compiled/packed SID-file layout confirmed here (it may describe the raw NP20.G4 editor-file format instead, a different artifact never checked against this card).",
    "patterns": "Sequence bytes read indirectly via (zfb),Y, same access pattern as V13: top-bit-set bytes are note/duration data, $7E is a distinct special marker branch. Not yet fully mapped byte-by-byte (same partial state as V13's own card) — this pass focused on entry points, ZP, and the order-list/working-storage tables, not the full command byte space.",
    "instruments": "Native table location not yet identified in this pass (unverified from the external spec, not independently confirmed). SF2-SIDE ROW SHAPE IS CODE-CONFIRMED (unchanged from the stub, sourced from SIDM2's driver code not this disassembly): 8 columns [AD, SR, 0x00, 0x00, wave_ptr, pulse_ptr, filter_ptr, 0x00], gated on `columns == 8` in driver11_section_injectors.py.",
    "wavetable": "TODO — not identified in this pass.",
    "pulsetable": "TODO — not identified in this pass; the external spec's $1BCB claim is unverified.",
    "filtertable": "TODO — not identified in this pass; the external spec's $1ACB claim is unverified."
  },
  "effects": {
    "encoding": "Only the sequence access pattern above is disassembly-confirmed this pass (indirect (zfb),Y read, top-bit test, $7E marker) — same partial state as V13. No dedicated effect/command table decoded yet for V20 specifically.",
    "commands": {}
  },

  "edges": {
    "derives_from": ["jch-newplayer"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Everything SIDM2 'knows' about NP20's native memory map comes from ONE external source (a Codebase64 spec page) and was never validated against a real NP20 binary — distinguish 'documented' from 'verified' sharply; the only code-confirmed fact is the SF2-side 8-column instrument row shape (found by reading driver11_section_injectors.py, not by disassembly).",
    "TWO UNRELATED '70-90%' vs '1-8%' accuracy figures exist for NP20 and must not be conflated: (a) SF2 itself can import native NP20.G4 source files as one of its four import formats, and 'all conversions target Driver 11' regardless — that's a separate SF2 feature, not SIDM2's own driver; (b) SIDM2's own Laxity-NP21-to-NP20-driver conversion experiment measured 1-8%, statistically identical to Driver 11 output, proven to be coincidental frequency-table matches rather than real conversion — NOT meaningful.",
    "NAME COLLISION WARNING: SIDM2 also uses 'V20' as an internal label for a completely different thing — a 'V20 umbrella' of five-plus PRE-NP21 (1987-1990) Vibrants/Laxity-era player variants (Wizax-A, Zetrex/YP, etc. — see those cards). That 'V20' has nothing to do with JCH NewPlayer V20 (this card); same digit, two unrelated meanings in the same codebase.",
    "SIDM2's own explicit architecture comparison (Laxity NP21 vs JCH NP20) rates nearly every table 'Different' or 'Unknown': instrument table location/size, filter table entry size (3 vs 4 bytes), wave table (documented for Laxity, undocumented for NP20), arpeggio table shape, sequence storage (embedded-in-code for Laxity vs separate-data for NP20 — the one deliberately-designed similarity), sequence pointer layout, and player state location. Only the pulse table is called 'Similar' (both 4 bytes/entry).",
    "The root architectural split, per SIDM2: 'Laxity integrates sequences with player code; JCH separates sequences as data.' This is presented as the reason cross-format conversion fails even though the two players share a documented historical relationship (JCH reverse-engineered Laxity's earlier player in June 1988, then started coding NewPlayer on 1 July 1988) — 2+ years of independent evolution since then broke any format compatibility despite the shared ancestry.",
    "SIDM2 treats NP20 as low-priority/deprecated: its own recommendation is to keep the NP20 driver code as unused infrastructure and mark any Laxity-family conversion through it as experimental — 'not the focus of recent work; the production path is native Laxity NP21.'",
    "docs/players/NP20.md explicitly calls NP20 'the predecessor family to Laxity's NP21' — i.e. SIDM2's frame of reference is Laxity-NP21-as-current, NP20-as-the-older-lineage-it's-compared-against, not the reverse.",
    "SIDM2's own SF2-driver-family comparison (tdz-c64-knowledge doc 7f75330d7a4d, found 2026-07-12) gives an estimated memory footprint for the NP20 SF2 driver template: code 5376 bytes + data 2048 bytes. It also notes a THIRD accuracy figure alongside the two already flagged above: SIDM2's own 'limitations report' optimistically lists an 'expected 95%' for NP20 conversions, while the measured project figure stays 70-90% — three different NP20-accuracy numbers now on record (95% optimistic-estimate, 70-90% measured-SF2-import, 1-8% Laxity-to-NP20-driver-conversion) — do not average or conflate any of them, they answer different questions.",
    "Same source: NP20 driver template supports wave/pulse/filter/arpeggio/instrument/sequence tables but 'effects support is limited/not supported' — consistent with, and slightly more specific than, this card's existing note that no dedicated effect/command table is documented.",
    "IMPORTANT SCOPE NOTE (2026-07-19): `status: verified` on this card covers a REAL DISASSEMBLY of the native V20 player engine as it appears in actual HVSC .sid files — a genuinely different task from SIDM2's own 'NP20 Driver' work (the SF2-driver-format reimplementation, `G5/drivers/sf2driver_np20_00.prg`), which remains unverified/deprioritized exactly as all the quirks above describe. Every '70-90%'/'1-8%'/'95%' accuracy figure above is about THAT SF2-driver conversion pipeline and is UNCHANGED by this verification — do not read this card's `status: verified` as validating any of those numbers. The external Codebase64 spec's specific table addresses ($18CB/$1ACB/$1BCB/$1CCB/$1DCB/$1ECB/$1FCB/$2CCB) are now KNOWN WRONG for at least the sequence-pointer table (real address $17cb, not $1DCB/$1ECB) on the two compiled SID files disassembled — either the spec describes a different artifact (the raw NP20.G4 editor file format, not a compiled/packed SID player+data blob) or it is simply inaccurate; either way, stop treating it as ground truth for a compiled SID file's memory map.",
    "A per-release/per-game V20 build can wrap the standard $1000/$1003 entry convention in an outer dispatcher with its OWN init/play vectors declared in the PSID header (confirmed on Agemixer/Dash_It.sid: header declares init $2170/play $2182, a ~48-byte wrapper that JSRs into the untouched core engine at $1000/$1003 via a SELF-MODIFIED JSR operand) — don't assume every V20 file's PSID-declared init/play IS the core engine's own entry point; the core can be present but only reachable indirectly."
  ],
  "sources": [
    "SIDM2:docs/players/NP20.md",
    "SIDM2:docs/archive/KNOWLEDGE_CONSOLIDATION_NP20_RESEARCH.md",
    "SIDM2:docs/archive/consolidation_2025-12-21/laxity/LAXITY_NP20_RESEARCH_REPORT.md (per-file accuracy table, Appendix C format comparison table)",
    "SIDM2:sidm2/driver_selector.py (PLAYER_REGISTRY entry, fuzzy-match rule)",
    "SIDM2:sidm2/driver11_section_injectors.py (SF2-side 8-column instrument row, code-confirmed)",
    "SIDM2:docs/reference/ACCURACY_MATRIX.md",
    "SIDM2:docs/reference/SF2_FORMAT_SPEC.md (native import formats, 'all conversions target Driver 11')",
    "tdz-c64-knowledge:doc 7f75330d7a4d 'SID Factory II Driver Family Comparison' (NP20-driver subsection: memory footprint, table support, the 95%-optimistic-vs-70-90%-measured distinction) — cross-checked 2026-07-12",
    "Real disassembly (2026-07-19): SIDdecompiler.exe on 3 real HVSC JCH_NewPlayer_V20-tagged files (MUSICIANS/A/Agemixer/Eternal_Light.sid, MUSICIANS/B/Balboa/Beach_Party_1988_tune_1.sid, MUSICIANS/A/Agemixer/Dash_It.sid), reassembled with 64tass.exe, trace-diffed with sidm2-sid-trace.exe — see Disassembly notes/Verification below and knowledge/players/reconstructions/jch-newplayer-v20.md for the full byte-level patch tables."
  ]
}
```

## Overview

JCH NewPlayer V20 (NP20) is one specific version within the [JCH NewPlayer](jch-newplayer.md)
family — the version [SID Factory II](sid-factory-ii.md) targets with its own
driver (registry key `np20`). As of 2026-07-19 this card is backed by a real,
from-scratch disassembly of the native V20 player engine (not the separate
SIDM2 SF2-driver reimplementation, which remains a different, still-unverified
task — see the scope-note quirk below): entry points, zero page, and the
per-voice order-list/working-pointer tables are now disassembly- and
trace-confirmed on three independent real HVSC files, two different
composers, register-write-exact after patching the same class of
decompiler-drifted working-storage bytes already resolved for
[JCH NewPlayer V13](jch-newplayer.md). The external Codebase64 spec's
specific table addresses are now known to be wrong for at least the sequence-
pointer table on a compiled SID file (real: $17cb, not $1DCB/$1ECB) — treat
that spec as unverified/possibly-describing-a-different-artifact rather than
ground truth going forward.

## Quirks & gotchas

See the `quirks` array above. Two pre-existing, still-load-bearing warnings:
**don't conflate the two different "NP20 accuracy" numbers** (SF2's
native-NP20.G4-import feature vs. SIDM2's own from-Laxity conversion
experiment — both about the SF2 driver pipeline, unrelated to this card's own
verification), and **don't confuse this card's "V20" with SIDM2's unrelated
"V20 umbrella"** label for an entirely different, pre-NP21 player family (see
[Wizax-A](wizax-a.md), [Zetrex/YP](zetrex-yp.md)). Two new ones from this
pass: the SCOPE NOTE quirk (this card's `verified` status is about the native
player, NOT SIDM2's SF2-driver reimplementation, which stays exactly as
unverified/deprioritized as before) and the PER-RELEASE WRAPPER quirk (a V20
file's PSID-declared init/play address is not always the core engine's own
entry point — see `Dash_It.sid` in Disassembly notes).

## Disassembly notes

**First real disassembly pass (2026-07-19), on `Agemixer/Eternal_Light.sid`,
`Balboa/Beach_Party_1988_tune_1.sid`, and `Agemixer/Dash_It.sid`** (all
JCH_NewPlayer_V20), via `SIDdecompiler.exe -a4096 -z -d -c -v2` +
`64tass.exe -a --cbm-prg`, following the exact method that closed
[JCH NewPlayer V13](jch-newplayer.md) this same project.

**Confirmed via disassembly**:
- **Entry points, standard convention** (Eternal_Light.sid, Beach_Party_1988_tune_1.sid,
  both load=init=`$1000`, play=`$1003` per PSID header): `$1000: jmp $1040`
  landing on the real init routine; `$1003: jmp $10c1` landing on the real
  play routine. Both files' engine code is byte-identical outside the credit
  text and two working-storage regions, despite being different composers.
- **Zero page**: only `$FB`/`$FC`, same single-pointer-pair-reused-per-voice
  convention as V13.
- **Per-voice order-list pointer table** at `$17cb` (2 bytes lo/hi per
  voice), copied by `init` into working "current position" pointers (lo
  array `$172e`, hi array `$1731`) and separate "restart on loop" pointers
  (lo array `$1734`, hi array `$1737`) — same two-pointer-per-voice design as
  V13, split into lo/hi arrays here rather than V13's interleaved layout.
  This directly contradicts the external spec's claimed `$1DCB`/`$1ECB`
  sequence-pointer addresses.
- **Command byte access pattern**: sequence bytes read via `(zfb),Y`,
  top-bit-set = note/duration, `$7E` a distinct special-marker branch — same
  partial decode as V13 (not fully mapped byte-by-byte this pass either).
- **A per-release wrapper convention exists**: `Dash_It.sid`'s PSID header
  declares init `$2170`/play `$2182`, NOT the load address — but the
  standard `$1000`/`$1003` core engine is present, byte-identical in
  structure to the other two files. The header's real entry points are a
  ~48-byte dispatcher at `$216f-$219e` that maintains one state byte and
  calls into the core via a **self-modified JSR operand**
  (`sta $2196+1` rewrites the low byte of `jsr $10xx` at `$2195-$2197`,
  alternating the target between `$1003` and `$1006` — confirmed by reading
  raw bytes: real file has `$20 $03 $10` = `JSR $1003`, the decompiler's
  drifted snapshot had baked in `$20 $06 $10` = `JSR $1006` instead).

**Byte-diff, all three files, cross-referenced against the `-v2` memory-touch
map**: every diverging address on all three files is marked `+` (read+write)
or, for the one instruction-operand byte on Dash_It.sid, `_`
(operand+write/self-modifying code) — the same class of decompiler
default-30,000-call-trace-window drift already closed on V13 and four other
players this project (`dmc`, `cheesecutter`, `roland-hermans`, `sidwizard`).

- Eternal_Light.sid: 56/3,616 bytes differ unpatched (98.4513%) → **0/3,616
  (100.0000%) after patching**.
- Beach_Party_1988_tune_1.sid: 47/2,964 bytes differ unpatched (98.4143%) →
  **0/2,964 (100.0000%) after patching**.
- Dash_It.sid: 72/4,511 bytes differ unpatched (98.4039%); 71 patched via the
  `.asm`-level `.byte` patch, the 72nd (`$2196`, inside a real `jsr`
  instruction, not a `.byte` line) patched directly on the assembled `.prg`
  binary → **0/4,511 (100.0000%) after patching**.

**Trace-diff (register-write comparison), 300 PAL frames via
`sidm2-sid-trace.exe`**: Eternal_Light.sid — 2,002 lines identical (init
`$1000`/play `$1003`); Beach_Party_1988_tune_1.sid — 1,439 lines identical
(same vectors); Dash_It.sid — 980 lines identical (init `$2170`/play
`$2182`, confirming the wrapper + self-modified-JSR reconstructs correctly
too). In every case the only difference in the diff output was the tool's
own echoed input filename, not a register write. **All three files:
register-write-exact.**

Full byte-level patch tables (durable, not scratchpad):
`knowledge/players/reconstructions/jch-newplayer-v20.md`.

**What's still open**: full command-byte/effect encoding, instrument table
location, wave/pulse/filter table locations — same partial state as V13's
own card, not specific to V20. Someone continuing this should diff V13's and
V20's play routines directly (same `derives_from` edge JCH's own history
already documents) to find what changed between versions, rather than
starting from zero again.

## Verification

**`status: verified` (2026-07-19) — a register-write-exact reconstruction of
JCH_NewPlayer_V20, confirmed on three independent real HVSC files (two
composers, one exercising a non-standard per-release entry wrapper).**
Method (per `knowledge/playbooks/disassemble-a-player.md` and the project's
`sid-player-verify` process, identical to the one that closed V13):

1. Disassembled `Agemixer/Eternal_Light.sid`, `Balboa/Beach_Party_1988_tune_1.sid`,
   and `Agemixer/Dash_It.sid` via `SIDdecompiler.exe -a4096 -z -d -c -v2`
   (decimal `4096` = `$1000`, all three files' real load address per PSID
   header).
2. Reassembled with `64tass.exe -a --cbm-prg`. Byte-diffed each reassembled
   `.prg` payload against the pristine original SID payload: 56/3,616
   (Eternal_Light), 47/2,964 (Beach_Party), 72/4,511 (Dash_It) bytes
   differed, all in two-ish address clusters right after the entry
   points/credit block and in the mid-file working-pointer region.
3. Cross-referenced every diverging address against each file's own `-v2`
   memory-touch map: 100% marked `+` (read+write) or, for one Dash_It.sid
   byte inside a real instruction, `_` (self-modifying operand) — the same
   decompiler default-trace-window drift class closed on V13 and four other
   cards this project.
4. Patched the `.asm`'s `.byte` directives (and, for the one instruction
   operand, the assembled `.prg` binary directly) back to pristine values,
   reassembled again: **all three files reached 0 remaining byte
   differences** (100.0000% byte-exact, full payload, no tail-padding
   caveat on any of the three).
5. Traced original vs. patched reconstruction with `sidm2-sid-trace.exe`,
   300 PAL frames, each file's own real init/play addresses:
   **Eternal_Light — 2,002 lines identical; Beach_Party — 1,439 lines
   identical; Dash_It — 980 lines identical.** The only difference in any
   diff was the tool's own echoed input filename.

This is a genuine register-write-exact match on three files (two composers,
one non-standard entry convention), meeting the same bar as
[[jch-newplayer]] V13 (100% over the covered region) and
[[laxity-newplayer]] (~99.9%). **Scope of this verification: the native
JCH_NewPlayer_V20 player engine as it appears in real compiled SID files**
(1,616 HVSC files tagged `JCH_NewPlayer_V20`, 3 now individually confirmed).
This does NOT verify or change anything about SIDM2's separate SF2-driver
reimplementation of NP20 (`np20` driver registry key) — that remains exactly
as unverified and deprioritized as the pre-existing quirks describe; the two
are genuinely different artifacts and this pass only touched the former.
Full command/effect encoding, instrument/wave/pulse/filter table locations
remain open (same partial state as V13) — see "What's still open" above.

## Sources

See the `sources` array. The pre-existing external-spec/SIDM2-SF2-driver
sources (`docs/archive/consolidation_2025-12-21/laxity/LAXITY_NP20_RESEARCH_REPORT.md`,
`docs/archive/KNOWLEDGE_CONSOLIDATION_NP20_RESEARCH.md`, etc.) remain the
sources for everything about the SF2-driver pipeline and the original
Codebase64 spec citation (now flagged as unverified/likely-wrong for at
least one table). The native-player disassembly facts in this card are
sourced from a real 2026-07-19 SIDdecompiler.exe + 64tass.exe + sidm2-sid-trace.exe
pass on three real HVSC files — full patch tables in
`knowledge/players/reconstructions/jch-newplayer-v20.md`.

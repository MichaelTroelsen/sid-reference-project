# Martijn Schutten (player routine)

```json
{
  "id": "martijn-schutten",
  "name": "Martijn Schutten (player routine)",
  "aliases": ["Martijn_Schutten"],
  "authors": ["Martijn Schutten"],
  "released": "~1991-1994 (Electric Brains / demoscene era)",
  "status": "in-progress",
  "platform": "Dutch musician Martijn Schutten's ('Junebug'/'Trashcan'/'Trazz', group Powers of Pain) playroutine — confirmed a musician on his commercial credits, with NO coder credit found anywhere. Whether this specific HVSC tag reflects a genuinely self-authored routine or reuses someone else's driver is flagged as likely-but-unconfirmed, not settled fact (see quirks). Player-ID-fingerprinted across 8 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Multiple conventions across 37 files: standard (init=load at $1000, $5000, $E000; 4+ files), $0FFF-based (init=load=$0fff, play=load+4; 15 files, CONFIRMED same drift pattern as standard), load+$48/'Tendance-series' (init=load+$48, play=load+$21; 9 files, CONFIRMED — see entry below), deep-init (Bobix: load $2000, init $2d8f, 18 subtunes, NOT YET disassembled), and non-standard-gap (Disc-o-very: load $7ff0, init $8000, NOT YET disassembled). Disassembly reference: Relax ($5000-$5E9B, 3,740 bytes excluding the 2-byte load-address prefix in its PSIDv2 header). The load+$48 convention's leading region (load..play-1, e.g. $1100-$1120 on Verdict_Intro) is NOT a workspace gap or JMP-chain header as previously guessed — confirmed on 2 files it is a plain ASCII credit string (e.g. 'MUSIC BY JUNEBUG/POWERS OF PAIN!' on Verdict_Intro), never touched at runtime (SIDdecompiler's -v2 map Start: address lands exactly at the play entry point, past the string) — see gotcha 40's Start-vs-load check.", "zero_page": "Two distinct ZP sets confirmed by convention: standard + $0FFF-based files use $FE/$FF (a pointer pair — confirmed Relax, Lemmings, Compo_Tune, Autumn_Leaves); the load+$48/Tendance-series convention instead uses $FA-$FD (4 bytes — confirmed Verdict_Intro, Eat_My_Pussy_part_1). Bobix/Disc-o-very ZP usage not yet checked.", "layout": "Standard 3-byte JMP init/JMP play header at the load address, followed by workspace/init-data tables, then play routine code, then song data (read-only). The load+$48 convention instead opens with a plain ASCII credit-string literal (not a JMP header) before the real init/play code. Bobix has a 10-byte vector table at the front instead (not yet disassembled to confirm). Player code at $50A4+ (Relax) and $131B+ area (Lemmings); exact code/data split varies by file size/convention." },
  "entry": { "init": "Standard: init = load (Relax $5000, Lemmings $1000). $0FFF-based: init = load = $0fff (Compo_Tune, Autumn_Leaves, 15 files). Load+$48/Tendance-series: init = load+$48 (Verdict_Intro $1148, Eat_My_Pussy_part_1 $948, 9 files total). Non-standard: Bobix init=$2d8f (deep inside the file, not yet disassembled), Disc-o-very init=load+$10 (not yet disassembled).", "play": "Standard: play = init+3 (Relax $5003, Lemmings $1003). $0FFF-based: play = load+4 (init+4, not +3 — Compo_Tune/Autumn_Leaves $1003). Load+$48/Tendance-series: play = load+$21 (Verdict_Intro $1121, EMP1 $921) — no JMP-chain indirection found, play is a direct labeled entry same as the other conventions. Non-standard: Bobix play=$2d81 (not yet disassembled)." },
  "speed": "50Hz (CIA-driven IRQ, confirmed on Relax and Lemmings — the play routine is called once per frame).",
  "data_format": { "order_list": "TODO (song data layout not yet analyzed)", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "Filter-heavy: Relax traced 228 register writes / 50 frames with significant filter activity (filter_freq envelope sweeps every few frames, filter_mode_volume set on frame 0). Each file's initial filter_* writes come from the per-song init-data table in the workspace region." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED COMMERCIAL GAME CREDITS, matching the local folder exactly: both traced titles are real Dutch budget C64 games by the Electric Brains team, published by Game On (CP Verlag) — Bobix (1994, the traced file, a Giana Sisters/Wonder Boy-style platformer; code by Marco Kramer and Mark van Harlingen, graphics by Nikaj Eijk, music by Schutten) and Disc-O-Very (1993, a 'Brain/Logical' puzzle game; coder Antoine van Wel, graphics Nikaj Eijk, music Schutten).",
    "A REAL CAUTION FLAG ON SELF-AUTHORSHIP: Disc-O-Very's own credits separately name Elvin van Luijk as 'Music Player' — i.e. the person who coded THAT game's playback routine — distinct from Schutten's composer credit. Bobix lists no such separate role. This means the game-embedded driver used in Disc-O-Very may NOT be the same code as the standalone HVSC/demoscene tunes tagged 'Martijn_Schutten' (individually authored compo/demo tracks via groups like Legend, per Demozoo) — the 'own hand-coded routine' hypothesis for THIS tag should be read as likely-but-unconfirmed, pending an actual disassembly comparison, not settled fact.",
    "CSDb (scener id=16783) confirms his function is overwhelmingly MUSICIAN — no coder credit found on any of his own releases checked, across ~100+ CSDb-credited productions (demos, games, diskmags, crack intros, music collections) spanning ~1991-2021 (groups: Powers of Pain, Electric Brains from 1992, Imagination Developments, Paradize). Demozoo separately lists him under groups K-Power and Legend, with a 'Compo Tune' music credit for Legend.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other Dutch composer already carded in this KB (checked specifically against Roel Bosch, Jeroen Koops, Jeroen Kimmel — no shared productions or CSDb group overlap found) or to any other composer/tool already in this KB (Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Neil Brennan, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray — none found).",
    "DISASSEMBLY: SIDdecompiler's single-emulation-pass model cannot distinguish dead (written-before-read) workspace bytes from load-bearing init constants in the per-song data table near the entry point. This produces the drifted-tables pattern (gotcha 41/entries 10/16/17/20/25/29/30/32) — 33-60 byte differences at 97.6-99.0% byte-match, all in write-touched regions, causing 0-4 register-write divergences depending on the individual file (confirmed file-dependent per entry 42 — Eat_My_Pussy_part_1's 33 diff bytes are ALL dead, 0 trace divergences, despite the same mechanism/convention as Verdict_Intro's 52 diffs / 4 divergences). Restoring the specific load-bearing bytes to cold-start values produces 100% trace-exact output on every file tried so far (6 of 6). Confirmed on Relax.sid (48 diffs, 4 write divergences, osc2 freq), Lemmings_Preview.sid (39 diffs, 2 write divergences, osc3 freq), Compo_Tune.sid (60 diffs, 1 write divergence — osc1_control, traced to a self-modified bit0-clear routine at l1099 reading a per-voice control-byte table), Autumn_Leaves.sid (39 diffs, 1 write divergence, osc2_freq_lo), Verdict_Intro.sid (52 diffs over the aligned overlap, 4 write divergences — osc3 pw_hi/pw_lo/freq_lo/freq_hi at frame 1), and Eat_My_Pussy_part_1.sid (33 diffs, 0 write divergences — trace-exact even unpatched).",
    "MULTIPLE LOAD-ADDRESS CONVENTIONS: The 37 files tagged Martijn_Schutten use at least 5 different load-address patterns (init=load at $1000/$0FFF/$5000/$E000, init=load+$10 at $7FF0, deep-init at $2000, init=load+$48 at $1000/$9000). This is consistent with the card's hypothesis that these are individually hand-assembled per-game/demo builds rather than a single tool-exported file — the core playback code appears to be the same (similar workspace layout, same drifted-table pattern across files), but the load addresses and entry-point offsets vary per production."
  ],
  "sources": [
    "HVSC Musicians.txt ('Schutten, Martijn (Junebug, Trashcan, Trazz) / Powers of Pain - NETHERLANDS'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener (id=16783, groups Powers of Pain/Electric Brains/Imagination Developments/Paradize, function Musician): https://csdb.dk/scener/?id=16783",
    "CSDb release — Bobix (1994, full credits): https://csdb.dk/release/?id=11433",
    "Lemon64 — Bobix: https://www.lemon64.com/game/bobix",
    "Lemon64 — Disc-O-Very (confirms the separate 'Music Player' credit for Elvin van Luijk): https://www.lemon64.com/game/disc-o-very",
    "Demozoo — Martijn Schutten (id=43074, groups K-Power/Legend): https://demozoo.org/sceners/43074/",
    "Local dataset: 8 files tagged Martijn_Schutten, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Martijn_Schutten` tag is Dutch musician Martijn Schutten's ('Junebug')
playroutine, used across his commercial Electric Brains games (Bobix,
Disc-O-Very) and demoscene work. Player-ID-fingerprinted across 8 files,
all his own — but whether this is genuinely his own hand-coded routine
remains an open question, not settled fact.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is a **real caution flag on
self-authorship**: one of his two confirmed games credits a SEPARATE
person as 'Music Player' (the game's driver coder), distinct from
Schutten's own composer credit — meaning the self-authored-routine
hypothesis for this specific tag is explicitly left unconfirmed rather
than asserted.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). A future
`verified` needs an original disassembly of a `Martijn_Schutten`-tagged
`.sid` + trace — which would also help resolve the authorship question
above.

## Verification

**Disassembly + trace-diff verified on 8 files across 5 of 5 known
load-address conventions (2026-07-25: original 6 files; 2026-07-29:
Disc-o-very and Bobix subtune 0 added; 2026-07-30: Eat_My_Pussy_part_1.sid
re-run confirmed fresh — identical 98.66% byte-diff, 0 trace divergences)
— `status: in-progress` (Bobix needs full 18-subtune assembly repair to
close the multi-subtune coverage gap before flipping to `verified`).**

Eight real HVSC files disassembled + reassembled + traced, covering the
standard convention (init=load), the $0FFF-based convention (init=load=$0fff,
play=load+4), the load+$48/'Tendance-series' convention (init=load+$48,
play=load+$21), the Disc-o-very convention (load=$7ff0, init=$8000,
play=$8003 — cold-boot stub + JMP dispatcher at the front), and the Bobix
deep-init/multi-subtune convention (load=$2000, init=$2d8f, play=$2d81,
workspace at $1000-$1FFF). See each file entry below for detailed results.

### File 1: `Relax.sid` (1992, load $5000, init $5000, play $5003, 1 subtune)

- **Byte-diff: 98.72%** (3,692 of 3,740 bytes match; 48 bytes differ)
- **Differing ranges**: `$500B-$508A` (47 bytes, the player's workspace/init-data table — entirely `+`/write-touched in the `-v2` map) and `$523E` (1 byte, an execute-touched opcode misdecode)
- **Trace-diff**: 4 register-write divergences across 50 frames (oscillator 2's initial frequency written as `$24E2` by the reassembly vs the correct `$2967`, and the subsequent frequency-change tracking reflecting the wrong old value)
- **Root cause**: SIDdecompiler's emulation captured post-execution workspace values (the drifted-tables pattern — gotcha 41). Two specific bytes at `$5033/$5034` among the 48 diffs account for all 4 trace divergences.
- **Patched**: 100% register-write-exact after restoring the 2 load-bearing workspace bytes to pristine values. All other 46 diff bytes are genuinely dead (written-before-read).

### File 2: `Lemmings_Preview.sid` (load $1000, init $1000, play $1003, 1 subtune)

- **Byte-diff: 98.98%** over the overlapping region (3,802 of 3,841 bytes; 39 bytes differ; the reassembled PRG is 90 bytes shorter than the original — a 90-byte unreferenced-data tail at `$1F01-$1F5A` that SIDdecompiler's trace never visited)
- **Differing ranges**: `$131B-$138E` (38 bytes, workspace/data area) and `$1553` (1 byte)
- **Trace-diff**: 2 register-write divergences across 50 frames (oscillator 3's initial frequency written as `$0837` vs the correct `$313C`)
- **Root cause**: Same drifted-workspace pattern. Different oscillator affected (osc3 vs osc2), consistent with different song data producing different post-execution drift.
- **Patched**: 100% register-write-exact after restoring all 39 diff bytes to pristine values.

### File 3: `Compo_Tune.sid` ($0FFF convention: load $0fff, init $0fff, play $1003, 1 subtune)

- **Byte-diff: 98.23%** (3,330 of 3,390 bytes match; 60 bytes differ, all within `$1054-$10D5`, the per-voice workspace/init-data table — entirely `+`/`w`-marked in the `-v2` map)
- **Trace-diff**: 1 register-write divergence across 50 frames — `osc1_control` written as `$80` instead of the correct `$40` at frame 0. Traced to source: a self-modified bit0-clear routine (`lsr l1099,X` / `asl l1099,X` then `sta $d404,Y`) reading a per-voice control-byte seed table; the pristine byte at `$1099` is `$81` in the real file vs `$40` in the reassembly ($81 & $FE = $80, $40 & $FE = $40 — exact match to the observed divergence).
- **Patched**: 100% register-write-exact after restoring all 60 diff bytes to pristine values.
- Confirms the $0FFF-based convention (15 of 37 files) uses the identical drifted-workspace mechanism as the standard convention, just at a different relative offset from the entry point (play=init+4 here, not +3).

### File 4: `Autumn_Leaves.sid` ($0FFF convention: load $0fff, init $0fff, play $1003, 1 subtune)

- **Byte-diff: 99.05%** (4,049 of 4,088 bytes match; 39 bytes differ, concentrated in `$1040-$10BC`, same workspace region as File 3)
- **Trace-diff**: 1 register-write divergence across 50 frames — `osc2_freq_lo` written as `$7D` instead of the correct `$A3` at frame 0.
- **Patched**: 100% register-write-exact after restoring all 39 diff bytes to pristine values.

### File 5: `Verdict_Intro.sid` (load+$48/'Tendance-series' convention: load $1100, init $1148, play $1121, 1 subtune)

- **New finding**: SIDdecompiler's `-v2` map reports `Start: $1121` — exactly the PSID play address, 33 bytes (`$21`) past the PSID load address `$1100`. Dumping those 33 bytes directly shows they are a plain ASCII credit string (`"MUSIC BY JUNEBUG/POWERS OF PAIN!"`), never touched at runtime — NOT a workspace gap or a JMP-chain header as previously speculated in this card's `memory`/`entry` fields (now corrected). Relocated to `-a4385` (decimal for `$1121`) per gotcha 40.
- **Byte-diff: 97.57%** over the aligned 2,144-byte overlap (52 bytes differ, in several small clusters `$1181-$1529`, all `-v2`-map write-touched)
- **Trace-diff**: 4 register-write divergences at frame 1 — `osc3_pw_hi`/`osc3_pw_lo`/`osc3_freq_lo`/`osc3_freq_hi` all wrong (e.g. `pw_hi` $89 vs correct $08)
- **Patched**: 100% register-write-exact after restoring all 52 diff bytes to pristine values.
- Also resolves an open question in the `entry`/`memory` fields: play is a directly labeled entry point (`play ldx #$00 ...`), not reached via a nested JMP chain as previously guessed.

### File 6: `Eat_My_Pussy_part_1.sid` (load+$48 convention: load $0900, init $0948, play $0921, 1 subtune)

- Second sample in the load+$48 family (per lessons-learned entry 42's rule: never generalize file 1's dead/load-bearing split to the whole convention without a second file).
- **Byte-diff: 98.66%** over the aligned 2,461-byte overlap (33 bytes differ, same workspace-region pattern)
- **Trace-diff: 0 divergences even before patching** — all 33 diff bytes are genuinely dead (written-before-read) in this file, unlike Verdict_Intro's 4 load-bearing bytes among its 52. Confirms the split between "dead" and "load-bearing" bytes in this drifted table is file-dependent, not convention-dependent — consistent with the project's established pattern (SidWizard entry 42, SidBang64 entry 25).

### Assessment

The player's CODE disassembles cleanly across all 3 conventions tried
(lone opcode misdecode at $523E on Relax aside, which is a SIDdecompiler
labeling artifact, not a code-structure gap). The divergences are entirely
in the self-modified/init-overwritten workspace region that SIDdecompiler's
single-emulation-pass model cannot distinguish from dead initialization
constants. This is the same drifted-tables pattern documented on
Cheesecutter (`lessons_learned` entry 16/29), DMC (entry 17), SidWizard
(entry 28/42), JCH NewPlayer (entries 30/32), RockMonitor (37), Digitalizer
(43), and others — not a bug in the player's disassembly. 6 of 6 files
tried across the standard, $0FFF-based, and load+$48 conventions reach
100% register-write-exact after patching (or, on 1 of 6, without needing
any patch at all).

### File 7: `Disc-o-very.sid` (load $7ff0, init $8000, play $8003, 1 subtune)

- **New finding**: The PSID header has loadAddr=0 (embedded $7ff0 from the first 2 payload bytes). The `-v2` map reports `Start: $02a6` — well below the code's load address $7ff0 (gotcha 40). The first 16 bytes ($7ff0-$7fff) are a cold-boot routine (saves ZP $FE/$FF, JSRs to init, restores ZP, RTS) that the PSID's own init/play vectors bypass entirely. The code opens with a 3-entry JMP vector table at $8000 (JMP $80a4=init, JMP $8e80=play, JMP $808f=3rd entry). The ASCII credit-string convention found on Verdict_Intro/Eat_My_Pussy (lesson 47) is NOT present here — just the dispatcher JMPs.
- **Relocated to `-a678`** (decimal for the `-v2` Start address $02a6) per gotcha 40. 64tass assembled cleanly in one pass (no wrap warnings, single contiguous $02a6-$8e93 block).
- **Byte-diff: 98.21%** over the 3,748-byte overlap ($7ff0-$8e93): 67 bytes differ, concentrated in the workspace/init-data table area ($800b-$808b, ~63 bytes) plus 4 isolated bytes at $820e/$823e/$86df/$86e7.
- **Trace-diff**: 57/58 register writes match over 10 frames; the 2 diverging writes are osc3's initial frequency ($5CF1 in original vs $52CD in reassembly) — the classic drifted-workspace pattern.
- **Patched**: 100% register-write-exact after restoring all 67 workspace bytes to pristine original values.
- **Verified**: Confirms the Disc-o-very convention (load at a padded address with a small cold-boot stub then JMP dispatcher table) uses the same player code and drifted-workspace mechanism as all other files.

### File 8: `Bobix.sid` (load $2000, init $2d8f, play $2d81, subtunes 18)

- **New finding (subtune 0 only)**: The `-v2` map reports `Start: $1000` vs PSID load $2000 (gotcha 40 — fixed low-page workspace at $1000-$1FFF). Play at $2d81 comes BEFORE init at $2d8f (unusual ordering). The init routine validates the subtune number (CMP #$02/BVS exit), then initializes the workspace. Relocated to `-a4096` (decimal for $1000) per gotcha 40.
- **Single-subtune trace (`-1 -s0`)** used per lesson 48 to avoid cross-subtune state corruption. 13,490 trace nodes vs 52,429 for all 18 subtunes. The `.asm` had 8 `lXXXX+1` label-syntax errors (gotcha 19), all fixed by the standard anchor-label + alias pattern.
- **Byte-diff: 99.95%** over the 3,840-byte overlap ($2000-$2EFF): only 2 bytes differ, at $2d70 and $2d73 (self-modified operand bytes at cold-start $00, captured by SIDdecompiler at their post-loop drifted values $2f/$1f).
- **Trace-diff (subtune 0)**: All 78 register writes match exactly over 10 frames after patching the 2 self-modified bytes to $00.
- **Coverage gap**: The single-subtune trace only reaches $2EFF of the original file's $728D (21,133 bytes). The other 17 subtunes' song data is beyond $2EFF and unreachable from a subtune-0-only reconstruction. Subtune 1 traced against the subtune-0 .prg produces 0 SID writes (no song data available).
- **Full multi-subtune disassembly** (all 18 subtunes, 52,429 nodes): fixes partially applied — `lXXXX+1` errors all resolved (32→24 remaining). Still needs ~24 fixes: 6 duplicate labels, 5 undefined symbols, ~9 undocumented 6502 opcodes, and 2 `+1+2+1` branch target expressions. The player CODE is verified through subtune 0; the remaining errors are in song-data table generation across the untraced subtune boundaries.

### Remaining work

- **Full Bobix multi-subtune**: The 24 remaining assembly errors in the full 18-subtune disassembly are mechanical (duplicate label renaming, placeholder definitions for workspace symbols, `.byte` replacements for undocumented opcodes). The player code itself is proven correct through subtune 0's exact trace match — these fixes only affect coverage of the other 17 subtunes' song data.
- **Full Bobix coverage** would also cover the 5 sibling files sharing the deep-init/multi-subtune style (Galactic_Chaos, Sonny_the_Snail, Speedy_Slug, Troddlers_preview, Puzzle_Mania) — they share the same player code and load-address pattern, so verifying Bobix fully would verify the entire convention.
- Memory map beyond entry points/ZP, data format, and effects encoding remain `TODO` — the disassembly is structurally sound but not yet annotated for song-data layout.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 entries), Lemon64
(2 pages), and Demozoo.

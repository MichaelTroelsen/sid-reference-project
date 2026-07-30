# Martijn Schutten (player routine)

```json
{
  "id": "martijn-schutten",
  "name": "Martijn Schutten (player routine)",
  "aliases": ["Martijn_Schutten"],
  "authors": ["Martijn Schutten"],
  "released": "~1991-1994 (Electric Brains / demoscene era)",
  "status": "verified",
  "platform": "Dutch musician Martijn Schutten's ('Junebug'/'Trashcan'/'Trazz', group Powers of Pain) playroutine — confirmed a musician on his commercial credits, with NO coder credit found anywhere. Whether this specific HVSC tag reflects a genuinely self-authored routine or reuses someone else's driver is flagged as likely-but-unconfirmed, not settled fact (see quirks). Player-ID-fingerprinted across 8 files, all his own.",
  "csdb_release": null,

  "memory": { "load_address": "Multiple conventions across 37 files: standard (init=load at $1000, $5000, $E000; 4+ files), $0FFF-based (init=load=$0fff, play=load+4; 15 files, CONFIRMED same drift pattern as standard), load+$48/'Tendance-series' (init=load+$48, play=load+$21; 9 files, CONFIRMED — see entry below), deep-init/self-relocating (Bobix load $2000 init $2d8f, Troddlers_preview load $2000 init $2de5, Puzzle_Mania load $3000 init $40ae — all three CONFIRMED byte- and trace-exact across every subtune), and non-standard-gap (Disc-o-very: load $7ff0, init $8000, CONFIRMED). Disassembly reference: Relax ($5000-$5E9B, 3,740 bytes excluding the 2-byte load-address prefix in its PSIDv2 header). The load+$48 convention's leading region (load..play-1, e.g. $1100-$1120 on Verdict_Intro) is NOT a workspace gap or JMP-chain header as previously guessed — confirmed on 2 files it is a plain ASCII credit string (e.g. 'MUSIC BY JUNEBUG/POWERS OF PAIN!' on Verdict_Intro), never touched at runtime (SIDdecompiler's -v2 map Start: address lands exactly at the play entry point, past the string) — see gotcha 40's Start-vs-load check.", "zero_page": "Two distinct ZP sets confirmed by convention: standard + $0FFF-based files use $FE/$FF (a pointer pair — confirmed Relax, Lemmings, Compo_Tune, Autumn_Leaves); the load+$48/Tendance-series convention instead uses $FA-$FD (4 bytes — confirmed Verdict_Intro, Eat_My_Pussy_part_1). The deep-init/self-relocating convention (Bobix, Troddlers_preview, Puzzle_Mania) also uses the $FE/$FF pointer pair for its sequence reads (`lda ($fe),Y` at $1171/$1174 in the relocated player, verified against the file's own bytes at $2171/$2174).", "layout": "Standard 3-byte JMP init/JMP play header at the load address, followed by workspace/init-data tables, then play routine code, then song data (read-only). The load+$48 convention instead opens with a plain ASCII credit-string literal (not a JMP header) before the real init/play code. Player code at $50A4+ (Relax) and $131B+ area (Lemmings); exact code/data split varies by file size/convention. The deep-init/self-relocating convention is structurally different: the file is NOT the resident player. It is a bank archive of 15-page ($0F00-byte) blocks, each block being a full copy of the player prefixed by one song's data; a tiny resident stub near the end of the file (Bobix $2d48-$2d9f, Troddlers $2de5+, Puzzle_Mania $40ae+) reads three parallel per-subtune tables (source page, destination page = always $10, sub-song index), then runs a 15-page copy loop that moves the selected bank down to $1000-$1EFF and JSRs the copied player's own JMP table at $1000/$1003/$1006. Bobix's 5 banks live at $2000/$2e00/$3c00/$4b00/$5a00/$6800; the front of each bank is the 9-byte `JMP init / JMP play / JMP $108f` table. Consequence for reconstruction: $1000-$1FFF is a runtime copy destination and is NOT file content — it must be omitted from any reassembly (see Verification)." },
  "entry": { "init": "Standard: init = load (Relax $5000, Lemmings $1000). $0FFF-based: init = load = $0fff (Compo_Tune, Autumn_Leaves, 15 files). Load+$48/Tendance-series: init = load+$48 (Verdict_Intro $1148, Eat_My_Pussy_part_1 $948, 9 files total). Deep-init/self-relocating: init points at the resident bank-select stub near the END of the file (Bobix $2d8f, Troddlers_preview $2de5, Puzzle_Mania $40ae), not at the load address. Disc-o-very init=load+$10.", "play": "Standard: play = init+3 (Relax $5003, Lemmings $1003). $0FFF-based: play = load+4 (init+4, not +3 — Compo_Tune/Autumn_Leaves $1003). Load+$48/Tendance-series: play = load+$21 (Verdict_Intro $1121, EMP1 $921) — no JMP-chain indirection found, play is a direct labeled entry same as the other conventions. Deep-init/self-relocating: play can sit BEFORE init in the resident stub (Bobix play=$2d81, init=$2d8f) or point straight into the runtime copy destination at $1003 (Troddlers_preview, Puzzle_Mania) — in the latter case the play vector is only valid after init has run the copy loop." },
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
    "SELF-RELOCATING BANK ARCHIVE (the multi-subtune / game-soundtrack builds — Bobix 18 subtunes, Troddlers_preview 6, Puzzle_Mania 3): the .sid payload is not a resident player at all. It is N banks of $0F00 bytes, each bank a complete copy of the same player with one song's data attached, plus a small resident stub near the end of the file holding three parallel per-subtune tables (source page / destination page / sub-song index) and a 15-iteration page-copy loop. init selects a bank, copies it to $1000-$1EFF, and JSRs the copy's own JMP table. Three consequences that matter for any reconstruction: (a) $1000-$1FFF is never file content and must be omitted from a reassembly (relocating to the -v2 map's Start: $1000 per gotcha 40 will otherwise put the copy destination on top of the code); (b) the copy loop's `lda $xxxx,X` / `sta $xxxx,X` high-byte operands and the 'current subtune' byte are self-modified and pristine-$00 in the file, so SIDdecompiler always captures them drifted; (c) because every bank carries its own player copy, one disassembly pass covers ALL subtunes' data — lesson 48's per-subtune scoping problem does not arise here.",
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

None published (not in the realdmx RE repo, no STIL note). The
disassemblies backing this card's `verified` status are original work —
10 files reassembled to 100% byte-exact / register-write-exact, see
Verification. They confirm all 10 files run the *same* player code across
5 different packaging conventions, which is evidence that the tag is one
routine; they do NOT settle who wrote it (see the caution flag in
`quirks` about Disc-O-Very's separate 'Music Player' credit).

## Verification

**`status: verified` (2026-07-30).** Disassembly + reassembly + register-write
trace-diff on **10 real HVSC files across all 5 known load-address
conventions**. The last remaining blocker — Bobix's 18-subtune coverage gap —
was closed this run at **100.0000% byte-exact / 0 register-write
divergences over all 18 subtunes**, and the same result was independently
reproduced on two sibling multi-subtune files (Troddlers_preview, 6 subtunes;
Puzzle_Mania, 3 subtunes).

History: 2026-07-25 original 6 files; 2026-07-29 Disc-o-very + Bobix subtune 0;
2026-07-30 Eat_My_Pussy_part_1 re-run confirmed fresh, then Bobix closed in
full plus Troddlers_preview and Puzzle_Mania added.

Conventions covered: standard (init=load), $0FFF-based (init=load=$0fff,
play=load+4), load+$48/'Tendance-series' (init=load+$48, play=load+$21),
Disc-o-very (load=$7ff0, init=$8000, cold-boot stub + JMP dispatcher), and
deep-init/self-relocating bank archive (Bobix, Troddlers_preview,
Puzzle_Mania). See each file entry below.

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
any patch at all). Files 7-10 below extend this to 10 of 10 across all
five conventions.

### File 7: `Disc-o-very.sid` (load $7ff0, init $8000, play $8003, 1 subtune)

- **New finding**: The PSID header has loadAddr=0 (embedded $7ff0 from the first 2 payload bytes). The `-v2` map reports `Start: $02a6` — well below the code's load address $7ff0 (gotcha 40). The first 16 bytes ($7ff0-$7fff) are a cold-boot routine (saves ZP $FE/$FF, JSRs to init, restores ZP, RTS) that the PSID's own init/play vectors bypass entirely. The code opens with a 3-entry JMP vector table at $8000 (JMP $80a4=init, JMP $8e80=play, JMP $808f=3rd entry). The ASCII credit-string convention found on Verdict_Intro/Eat_My_Pussy (lesson 47) is NOT present here — just the dispatcher JMPs.
- **Relocated to `-a678`** (decimal for the `-v2` Start address $02a6) per gotcha 40. 64tass assembled cleanly in one pass (no wrap warnings, single contiguous $02a6-$8e93 block).
- **Byte-diff: 98.21%** over the 3,748-byte overlap ($7ff0-$8e93): 67 bytes differ, concentrated in the workspace/init-data table area ($800b-$808b, ~63 bytes) plus 4 isolated bytes at $820e/$823e/$86df/$86e7.
- **Trace-diff**: 57/58 register writes match over 10 frames; the 2 diverging writes are osc3's initial frequency ($5CF1 in original vs $52CD in reassembly) — the classic drifted-workspace pattern.
- **Patched**: 100% register-write-exact after restoring all 67 workspace bytes to pristine original values.
- **Verified**: Confirms the Disc-o-very convention (load at a padded address with a small cold-boot stub then JMP dispatcher table) uses the same player code and drifted-workspace mechanism as all other files.

### File 8: `Bobix.sid` (load $2000, init $2d8f, play $2d81, 18 subtunes, payload $2000-$728C / 21,133 bytes) — CLOSED 2026-07-30

- **Byte-diff: 100.0000%** — 21,133 of 21,133 bytes identical over the whole payload, all 18 subtunes' banks included. Zero differing address ranges.
- **Trace-diff: 0 divergences over 22,709 register writes** — all 18 subtunes traced at 200 frames each against the original (`init $2d8f`, `play $2d81`); also exact at 20 frames on every subtune as a first pass. Per-subtune write counts (subtune:writes) 0:1437 1:875 2:1103 3:1182 4:1072 5:1215 6:1216 7:1214 8:1352 9:1359 10:1350 11:1606 12:1608 13:1607 14:1252 15:680 16:937 17:1644.
- **What the 2026-07-29 pass had wrong**: it treated $1000-$1FFF as a *fixed low-page workspace* and relocated the whole disassembly onto it (`-a4096`), which is why only subtune 0's bank ($2000-$2EFF) came out and the other 17 looked unreachable. $1000-$1FFF is actually the **destination of a runtime copy loop**, so it is not file content at all and the `-1 -s0` single-subtune scoping (lesson 48) was never needed here. The full 18-subtune emulation (`-v2` map `Start: $1000 End: $76ff`) already covers every bank.
- **The build that closes it** (no `-1`/`-s`, no per-subtune merge): `SIDdecompiler.exe Bobix.sid -ofull.asm -a4096 -z -d -c`, then mechanically transform the `.asm`: (1) delete everything from `* = $1000` up to the `l2000` label (the whole copy-destination image) and re-origin at `* = $2000`; (2) emit an equate for every `l1xxx` symbol still referenced from the kept region; (3) re-encode the copy loop's two self-modified instructions and the current-subtune byte as pristine raw `.byte`s. This removes all 32 of the 64tass errors the previous pass was chasing — every one of them was inside the discarded $1000-$1FFF image.
- **Equate values are NOT the label names.** 17 of the 416 `l1xxx` symbols sit exactly one byte BELOW their printed name (lesson 21 at scale): `l1004`=$1003, `l10d8`=$10d7, `l1130`=$112f, `l1154`=$1153, `l1168`=$1167, `l120e`=$120d, `l123e`=$123d, `l1243`=$1242, `l13a9`=$13a8, `l13ca`=$13c9, `l13eb`=$13ea, `l1485`=$1484, `l14a4`=$14a3, `l1538`=$1537, `l16df`=$16de, `l16e7`=$16e6, `l174f`=$174e. Additionally SIDdecompiler emits TWO distinct symbols that both stringify as base `l1450` — the plain label `l1450` ($1450) and a separate symbol literally named `l1450+1` ($144f) — which must be split into two 64tass symbols or the `+1` and `+2` reference sites contradict each other. All 18 values were derived from the original file's own bytes (each symbol appears in a `<sym+K, >sym+K` lo/hi pointer pair, so `sym = word(original bytes) - K`), not guessed.
- **The only three genuinely drifted bytes**: `$2d70` (copy-loop `lda $0000,X` source page, captured as $77), `$2d73` (copy-loop `sta $0000,X` destination page, captured as $1f), `$2d11` (current-subtune byte, captured as $11). All three are pristine $00 in the file. They must be written as raw `.byte $bd,$00,$00` / `.byte $9d,$00,$00`, not as `lda $0000,X` — 64tass otherwise re-encodes them zero-page and shifts the rest of the file by one byte (lesson 36).

### File 9: `Troddlers_preview.sid` (load $2000, init $2de5, play $1003, 6 subtunes, 7,179 bytes) — 2026-07-30

- Same self-relocating bank archive as Bobix, but `play` points straight into the copy destination at `$1003` (only valid after `init` has run the copy loop). 2 banks ($2000, $2e00) serving 6 subtunes.
- **Byte-diff: 100.0000%** (7,179/7,179). Same three-fix recipe: drop $1000-$1FFF, equate its labels, restore `$3bfa`/`$3bfd` copy-loop operands and the `$2dd2` subtune byte to $00. Before those fixes: 99.7632% with a 1-byte length loss from the zero-page re-encode.
- **Trace-diff: 0 divergences over 7,533 register writes** (all 6 subtunes, 200 frames each).
- Resolver found the same one-byte label-name offset pattern; no ambiguous symbols on this file.

### File 10: `Puzzle_Mania.sid` (load $3000, init $40ae, play $1003, 3 subtunes, 13,688 bytes) — 2026-07-30

- Third sample of the self-relocating family, and the one that shows the copy destination is not always a single page range: its dropped region spans **$1000-$2FFF** (banks at $3000/$4100/$5200 copied down to $1000), so the equate set has to cover `l2xxx` as well as `l1xxx`.
- **Byte-diff: 100.0000%** (13,688/13,688) after restoring `$40cf`/`$40d2` (copy-loop operands) and `$40a7` (subtune byte) to $00. Before: 38.66% — the zero-page re-encode of `sta l2400,X` shifted everything after $40d0, which is what makes an unpatched run of this family look catastrophically wrong rather than slightly wrong.
- **Trace-diff: 0 divergences over 3,955 register writes** (3 subtunes, 200 frames each).

### Remaining work

- Three of the five sibling deep-init files are now closed (Bobix, Troddlers_preview, Puzzle_Mania). The two not yet run — `Galactic_Chaos.sid` (load $1000, init $1f66, play $1fa5, 4 subtunes) and `Sonny_the_Snail.sid` (load $1000, init $1ca0, play $1ca3, 6 subtunes) — load directly AT $1000, so they are probably resident (no copy loop) rather than bank archives; `Speedy_Slug.sid` (load $eed, init=load, 10 subtunes) looks like a fourth arrangement again. None is expected to change the verdict, but each would be its own small variant.
- Memory map beyond entry points/ZP, data format, and effects encoding remain `TODO` — the disassemblies are byte-exact and structurally sound but not yet annotated for song-data layout.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 entries), Lemon64
(2 pages), and Demozoo.

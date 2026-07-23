# System 6581

<!--
  Card updated 2026-07-23: Tier 3 entry points confirmed from PRG2SID documentation.
  Status raised from stub to in-progress.

  Card updated 2026-07-23 (later pass): disassembled/reassembled/trace-diffed
  4 real HVSC files (sid-player-verify subagent). All 4 reached 100.0000%
  byte-exact + register-write-exact traces after patching a small number of
  self-modified/drifted bytes. Status raised from in-progress to verified.
-->

```json
{
  "id": "system6581",
  "name": "System 6581",
  "aliases": ["System6581", "Sonic-Editor"],
  "authors": ["Fredrik Hederstierna (Zizyphus, Oneway)"],
  "released": "1993 (V3.0 freeware release; composed/coded 1989-1990 per CSDb release notes)",
  "status": "verified",
  "platform": "Native C64 tool (editor + its own C64 replay routine). No cross-platform component known.",
  "csdb_release": 27434,

  "memory": {
    "load_address": "NOT fixed — confirmed by disassembly to vary per compiled song (each song's SID export places the tiny entry stub directly at its own PSID load address, wherever that is). Real examples seen across 4 disassembled/traced files: $0FF9 (A_Cruise_on_the_Beach_in_a_Beetle.sid — literally matches PRG2SID's documented $0FF9/$0FFE, but because THIS song's own load address is $0FF9, not because of an added external stub), $7FF9 (Demotune.sid, Folkmusik.sid), $1000 (Moppekalas-86.sid). Other System6581 files in the local dataset load at $2000, $2800, $3FF9, $4000, $7000, $8000, $BFF9, $E3F1, etc. — PRG2SID's '$0FF9, immediately below $1000' framing describes ONE observed instance, not a fixed convention.",
    "zero_page": "CONFIRMED, CONTRADICTING DeepSID's cached 'zero_pages: None' spec: Zizyphus-authored builds (Demotune.sid, Folkmusik.sid, A_Cruise_on_the_Beach_in_a_Beetle.sid) use $FB-$FD (3 bytes, an indirect song-data pointer at $FB/$FC plus a play-position index at $FD). Moppe's Moppekalas-86.sid build uses $F0-$F7 (8 bytes) — a materially different, larger ZP footprint, consistent with it being a different player generation (see entry/layout notes below).",
    "layout": "Per-voice working-storage tables sit in a fixed block starting ~$A2-$FB bytes after the load address (e.g. $80A7-$8108 relative to a $7FF9 load, $18AA-$1932 relative to a $1000 load) — 3-byte-per-voice arrays for frequency/pulse-width/ADSR-style slide state, self-modified at runtime by the play routine. Order-list/pattern/instrument table layout: TODO — not yet mapped from the disassembly (only the runtime-workspace region was characterized, needed for the verification pass, not the authoring-time song-data format)."
  },
  "entry": {
    "init": "Song's own load address (confirmed by disassembly on 4 files — $0FF9, $7FF9, $7FF9, $1000 respectively; PRG2SID's specific '$0FF9' figure is one real instance of this pattern, not a universal constant).",
    "play": "A small, version-dependent fixed offset from init — NOT $0FFE literally except when the song happens to load at $0FF9. Confirmed offsets: init+5 on the Zizyphus-authored 'shared dispatcher' build (Demotune.sid, Folkmusik.sid, A_Cruise_on_the_Beach_in_a_Beetle.sid — see quirks for the dispatcher mechanism), init+3 on the Moppe-authored 'plain JMP' build (Moppekalas-86.sid). Other files in the local dataset show init+6, +10, +15, +41, and much larger offsets (play routine placed far from init) — likely further build/version variation not yet individually disassembled."
  },
  "speed": "TODO: not documented publicly; DeepSID players.json gives an aggregate play-routine cost of 'Approx 26-33 rasterlines [SD]' but no speed model details",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public format spec or source located",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Originally a demo/music group name: 'System 6581' (Sweden) was a demo/music group whose members included Zizyphus (coder), Moppe (musician), David Hayes (musician), and Johannes (graphician). The tool was named after the group — Zizyphus was an ex-member of System 6581 before joining Oneway. The group itself released 10 productions 1989-1990 including the eponymous tool (CSDb release id 122173, undated). The V3.0 release (id 27434) is credited to Oneway, not the System 6581 group.",
    "Version history spread across releases: the original undated release (id 122173, released under the System 6581 group name) is 'also known as Sonic-Editor' and includes an instructions file stating 'Player & Editor (c) Sonic Graffiti/SYS6581'. V0.8+ (undated, by Oneway, code Zizyphus) and V3.0 (1993, by Oneway, code Zizyphus, music Moppe & Zizyphus) followed. The original was made under the System 6581 group banner; later versions were Oneway releases.",
    "Sonic Graffiti connection — surfaced 2026-07-23 by reading the CSDb release 122173's own included instructions. The original release's instructions file states 'Player & Editor (c) Sonic Graffiti/SYS6581', asserting joint copyright between the Sonic Graffiti group (UK, coder Andy Lumley) and System 6581. This is a stronger claim than just shared users: it suggests the tool was a collaboration between the two groups, at least in its first version. However, the Sonic Graffiti group also had its own in-house editor by Andy Lumley (see [[sonic-graffiti]]), and the two were coded by different people (Hederstierna vs Lumley) — so 'shares_routine_with' is NOT asserted; the exact nature of the collaboration (co-development, distribution arrangement, or Sonic Graffiti contributing music/demo content) is unclear from the copyright line alone.",
    "CROSS-GROUP ADOPTION — surfaced 2026-07-17 by a composer-overlap connection scan over data/composers/*.json. Beyond Oneway (Moppe + Zizyphus = 62 files), System 6581's SECOND user cohort is the UK music group Sonic Graffiti: Gerard Gourley (13), Ben Hayes (10), 'Graffiti Sonic' (5) and Deek (1) = 29 files (~29%) — the exact four musicians credited on [[sonic-graffiti]], their own in-house editor (by Andy Lumley). So this Swedish editor crossed to a UK group; its reach is wider than its author's immediate circle, correcting the earlier 'mostly its own small group' read. This is a shared-USERS relationship (the same people used both tools), NOT shared code — different coders (Hederstierna vs Lumley), so no `shares_routine_with` edge is asserted, only this navigational link.",
    "Concentrated but NOT single-group usage: of the 101 files tagged 'System6581', 7 composers use it, and the top two — Moppe (39, 38.6%) and Zizyphus himself (23, 22.8%) — are both Oneway and account for 61%. Full breakdown: Moppe 39, Zizyphus 23, Gerard Gourley 13, Ben Hayes 10, Liket 10, Graffiti Sonic 5, Deek 1.",
    "Release lag: CSDb credits/release notes (release id 27434) describe the tunes on the release disk as composed/coded in 1989-1990 but only officially released as freeware in 1993 (V3.0) — DeepSID's players.json start_year (1990) and SIDId's implicit 1993 distribution date reflect these two different milestones. Do not treat '1990' and '1993' as a contradiction; they are coding-date vs release-date.",
    "No public source code, format documentation, or disassembly was located for the editor/player itself (CSDb, Codebase64, web search). Every data-format Tier 3 field remains TODO for that reason — an honest gap, not a guessed one.",
    "DeepSID's players.json spec entry for 'System 6581' includes two concrete-looking runtime hints — 'zero_pages: None' and 'cpu_time: Approx 26-33 rasterlines [SD]' — that are recorded here as citations to that source, not independently verified against a disassembly.",
    "Entry points ($0FF9/$0FFE, both v1 and v2) are from PRG2SID by iAN CooG/HVSC, a mature tool that has identified and patched this player's signature for years — but these have NOT been independently verified by reassembling a System6581-tagged .sid and tracing it through sidm2-siddump. See Verification below.",
    "VERIFIED 2026-07-23 — CONFIRMED, does not need a stub: PRG2SID's documented $0FF9/$0FFE addresses are NOT a fixed relocation target the tool patches into raw PRG rips — they are the literal PSID load/init/play address of at least one real HVSC file (Moppe's A_Cruise_on_the_Beach_in_a_Beetle.sid), because THIS player's own entry stub sits directly at whatever address the song's own compiled build happens to load at. Every System6581 file carries its own small entry stub co-located with its own load address; $0FF9 is simply the address one particular compiled song happened to load at, not a universal player-relative offset below $1000. See `memory.load_address`/`entry` for the corrected, disassembly-derived facts.",
    "VERIFIED 2026-07-23 — the init/play 'entry point' is, on the Zizyphus-authored build (V3.0-era: Demotune.sid, Folkmusik.sid, A_Cruise_on_the_Beach_in_a_Beetle.sid), actually ONE tiny shared dispatcher stub, not two separate routines: `init` executes `clc / adc #$02 / bne <dispatch>`, re-using PSID's own calling convention of loading the subtune number into A before calling init (so A becomes subtune+2, always >=2 for any real subtune); `play` is the very next instruction, `lda #$01`, immediately falling into the SAME dispatch code with A=1 instead. The dispatcher then does `tay / beq <silence-only> / cmp #$01 / bne <full-voice-reset>` — since a real init call always produces A>=2 (never exactly 1), `cmp #$01` cleanly distinguishes 'this is the manufactured PLAY call' (branches through to `jmp <real per-frame play routine>`) from 'this is a real INIT call for some subtune' (branches to the full voice/table reset routine) using one shared few-byte entry point and no separate jump table. This design directly explains why PRG2SID's documented init/play addresses are only 5 bytes apart despite doing entirely different jobs. NOT present on Moppe's Moppekalas-86.sid build, which uses a plain `init: JMP <far init routine>` / `play: <real code at init+3>` — i.e. at least two distinct entry-point designs exist across builds of this player, both still small stubs co-located with the load address.",
    "VERIFIED 2026-07-23 — SIDdecompiler's default 30000-play-call trace snapshots a handful of self-modified immediate-operand bytes (filter cutoff/resonance/volume ramp values written via `sta <label>+1` self-modification, e.g. the `lda #$xx / sta $d417` / `lda #$xx / sta $d418` pair right before the shared dispatcher's silence path) at their DRIFTED, post-execution value rather than their true $00 (or otherwise pristine) cold-start value — the same class of bug as this project's 'hard_won_gotcha 43'. Confirmed on all 4 disassembled files: the drift is consistently small (1-2 bytes per file for the filter setup, though Moppekalas-86.sid additionally drifted a 9-byte spread of similar self-modified immediates AND — genuinely load-bearing, confirmed via binary-search patch isolation, NOT dead workspace — a 90-byte per-voice pulse-width/frequency working-storage table at $18AA-$1932). Patching these specific bytes back to the real file's own pristine values (a handful of bytes per file, precisely localized via the `-v2` memory-touch map plus direct byte comparison) closed EVERY tested file to 100.0000% byte-exact AND register-write-exact over a 300-frame trace. See Verification below for the per-file table."
  ],
  "sources": [
    "CSDb release (System 6581 V3.0, Zizyphus/Oneway, credits: code Zizyphus, music Moppe & Zizyphus): https://csdb.dk/release/?id=27434",
    "CSDb release (System 6581 original undated release, released under System 6581 group, aka 'Sonic-Editor', credits: code & music Zizyphus, instructions file states 'Player & Editor (c) Sonic Graffiti/SYS6581'): https://csdb.dk/release/?id=122173",
    "CSDb group System 6581 (Sweden, demo/music group, members Zizyphus/Moppe/David Hayes/Johannes, 10 releases 1989-1990): https://csdb.dk/group/?id=6372",
    "CSDb scener Zizyphus (Fredrik Hederstierna, ex-member of System 6581, current member of Oneway): https://csdb.dk/scener/?id=3110",
    "sidid:System6581 (author Fredrik Hederstierna (Zizyphus), reference https://csdb.dk/release/?id=27434) — data/sidid.json",
    "DeepSID players.json entry 'System 6581' (developer Zizyphus, start_year 1990, csdb_id 27434, platform 'Native / C64 emulator', distribution 'Freeware in 1993', zero_pages 'None', cpu_time 'Approx 26-33 rasterlines [SD]') — data/players.json",
    "PRG2SID v1.26 by iAN CooG/HVSC (Amiga/MorphOS tool for attaching PSID headers to ripped PRGs — documents System6581 v1 and v2 player signatures with init $0FF9, play $0FFE, adding stub code at $0FFA-$0FFF): CSDb release https://csdb.dk/release/?id=260620 and aminet readme http://m68k.aminet.net/misc/emu/prg2sid-mos.readme",
    "Local dataset: 101 files tagged System6581 across 7 composers (Moppe 39, Zizyphus 23, Gerard Gourley 13, Ben Hayes 10, Liket 10, Graffiti Sonic 5, Deek 1 — aggregated from data/composers/*.json)",
    "Direct disassembly/reassembly/trace-diff verification (2026-07-23, sid-player-verify subagent): SIDdecompiler.exe + 64tass.exe + sidm2-sid-trace.exe on 4 real HVSC files — MUSICIANS/Z/Zizyphus/Demotune.sid, MUSICIANS/Z/Zizyphus/Folkmusik.sid, MUSICIANS/M/Moppe/Moppekalas-86.sid, MUSICIANS/M/Moppe/A_Cruise_on_the_Beach_in_a_Beetle.sid. See Verification section for the full per-file results table."
  ]
}
```

## Overview

System 6581 is a native Commodore 64 music editor/replay tool by Fredrik
Hederstierna, working as "Zizyphus" of the group Oneway. The tool is named
after the Swedish demo/music group "System 6581" (whose members included
Zizyphus, Moppe, David Hayes, and Johannes); Zizyphus had been an
ex-member of that group but continued to release the tool under its name
even after joining Oneway.

The release history spans three known versions: an undated original (CSDb
id 122173, released under the System 6581 group, "also known as
Sonic-Editor" with instructions stating joint copyright with the UK's
Sonic Graffiti group), V0.8+ (undated, by Oneway), and V3.0 (1993, by
Oneway). CSDb's V3.0 page notes the tunes were composed/coded 1989-1990
but only officially released as freeware in 1993. DeepSID lists a
start_year of 1990.

In this dataset System 6581 is used by 101 files across 7 composers, with
two Oneway names (Moppe and Zizyphus) accounting for 61% of that usage.
It was not, however, an Oneway-only tool: its second-largest user cohort is
the UK group **Sonic Graffiti** (Gerard Gourley, Ben Hayes, "Graffiti
Sonic", Deek -- ~29% combined), whose members also had their own in-house
editor (see `[[sonic-graffiti]]`). Furthermore, the original undated
release's own instructions claim joint copyright "Sonic Graffiti/SYS6581,"
suggesting the two groups collaborated on the tool at some level, at least
in its first version.

Entry points were first sourced from PRG2SID (iAN CooG/HVSC): init $0FF9,
play $0FFE. A direct disassembly/reassembly/trace-diff pass (2026-07-23,
see Verification) confirmed WHY those specific addresses appear in PRG2SID's
data — they are the literal load/init/play address of one real HVSC file,
because this player's tiny entry stub is co-located with each song's own
compiled load address, not a fixed offset PRG2SID patches into a raw PRG.
Two distinct entry-stub designs were found across builds: a clever
shared-dispatcher stub (Zizyphus/V3.0-era files) that reuses PSID's
subtune-in-accumulator init convention to distinguish init from play with
a single `cmp #$01`, and a plain `JMP <far init routine>` stub (Moppe's
Moppekalas-86.sid). No public source or format spec was located for any
version, so the authoring-time song-data format (order list, patterns,
instruments) remains TODO — only the runtime entry mechanism and workspace
layout needed for verification were mapped.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: usage is heavily
concentrated in the author and one collaborator (both Oneway), the Sonic
Graffiti joint-copyright claim on the original release is real but
unresolved as to code-level impact, and no public source or format spec
could be located for the authoring-time song-data format -- so those
fields are an honest `TODO`. Entry points are now disassembly-confirmed
(not just PRG2SID-documented): the player's tiny entry stub sits at each
song's own compiled load address (which varies per file), and two distinct
stub designs exist across builds (a shared init/play dispatcher on
Zizyphus's files, a plain far-`JMP` stub on Moppe's). DeepSID's cached
`zero_pages: None` hint is now known to be WRONG -- disassembly found real
ZP usage ($FB-$FD or $F0-$F7 depending on build).

## Disassembly notes

Four real HVSC files were disassembled with `SIDdecompiler.exe`,
reassembled with `64tass.exe`, and trace-diffed with
`sidm2-sid-trace.exe` (2026-07-23): `MUSICIANS/Z/Zizyphus/Demotune.sid`,
`MUSICIANS/Z/Zizyphus/Folkmusik.sid`, `MUSICIANS/M/Moppe/Moppekalas-86.sid`,
`MUSICIANS/M/Moppe/A_Cruise_on_the_Beach_in_a_Beetle.sid`. All four
relocated cleanly (`SIDdecompiler -v2`'s own "Start:" address matched the
PSID header's load address exactly on every file -- no gotcha-40-style
relocation trap). Each file's raw byte-diff came back 97.8-98.9% on first
pass; the residual mismatch was entirely self-modified/write-touched bytes
per the `-v2` memory-touch map (filter setup immediates, plus one
genuinely load-bearing per-voice working-storage table on
Moppekalas-86.sid -- see quirks). Patching those specific bytes back to
each file's own pristine values closed all four to 100.0000% byte-exact.
Authoring-time song-data format (order list, patterns, instruments,
wave/pulse/filter tables) was not mapped -- only the runtime entry
mechanism and workspace layout needed to close the verification loop.

## Verification

**Verified -- `status: verified` (2026-07-23).** Disassembled with
`SIDdecompiler`, reassembled with `64tass`, patched, and trace-diffed by
the `sid-player-verify` subagent.

| File | PSID header | Byte-diff (pre-patch) | Fix applied | Byte-diff (post-patch) | Trace result |
|---|---|---|---|---|---|
| `Zizyphus/Demotune.sid` | load=init=$7FF9, play=$7FFE | 98.0140% | 2 self-modified filter-immediate bytes ($86FD, $8702) + 72 dead working-storage bytes | 100.0000% | **Exact** (300 frames, 2807-line trace) |
| `Zizyphus/Folkmusik.sid` | load=init=$7FF9, play=$7FFE | 97.7984% | same 2-byte fix (identical code/addresses) + 55 dead working-storage bytes | 100.0000% | **Exact** (300 frames) |
| `Moppe/Moppekalas-86.sid` | load=init=$1000, play=$1003 | 97.8755% | 9 self-modified filter/dispatch-immediate bytes + a 90-byte per-voice pulse-width table at $18AA-$1932 (**confirmed load-bearing**, not dead, via patch isolation: patching only the 9 small bytes fixed frame 0 but left frames 1+ diverging; patching only the table fixed frames 1+ but left frame 0 diverging; both together closed it) | 100.0000% | **Exact** (300 frames, 1911-line trace) |
| `Moppe/A_Cruise_on_the_Beach_in_a_Beetle.sid` | load=init=$0FF9, play=$0FFE (literally matches PRG2SID's documented addresses) | 98.9437% | 1 self-modified filter-resonance immediate byte ($1672) + 63 dead working-storage bytes | 100.0000% | **Exact** (300 frames, 1351-line trace) |

All four files -- spanning both composers (Zizyphus, Moppe) and both
observed entry-stub designs (shared dispatcher vs. plain far-`JMP`) --
reached full byte-exact and register-write-exact reconstructions. The
residual pre-patch byte-diff in every case was SIDdecompiler's default
30000-play-call trace snapshotting a self-modified byte's DRIFTED runtime
value instead of its pristine cold-start value (this project's
`hard_won_gotcha 43` pattern) plus ordinary dead per-voice working storage
(`hard_won_gotcha 41`) -- except the Moppekalas-86.sid pulse-width table,
which patch-isolation testing confirmed is genuinely load-bearing on that
file, not dead (a `hard_won_gotcha 42`-style file-dependent divergence).
Identity/provenance facts (author, group, release chain, CSDb ids, usage
counts, composer concentration, Sonic Graffiti collaboration claim) remain
sourced from CSDb release/group/scener pages, the cached SIDId/DeepSID
entries, and local per-composer file counts -- unaffected by this pass.

Not yet mapped: the authoring-time song-data format (order list, patterns,
instrument/wave/pulse/filter tables) -- the verification pass only needed
to characterize the runtime entry mechanism and per-voice workspace, not
the full editor file format. A future pass wanting the data-format fields
would need to trace instrument/pattern reads specifically, which this pass
did not attempt.

## Sources

See the `sources` array -- the CSDb release pages (ids 27434 and 122173),
the CSDb group/scener pages (ids 6372 and 3110), the cached SIDId entry
(`System6581`), the cached DeepSID players.json entry ("System 6581"),
the PRG2SID documentation and aminet readme, local per-composer usage
counts in `data/composers/*.json`, and the direct disassembly/trace-diff
verification pass (2026-07-23) on 4 real HVSC files.

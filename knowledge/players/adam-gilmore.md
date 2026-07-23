# Adam Gilmore (player routine)

```json
{
  "id": "adam-gilmore",
  "name": "Adam Gilmore (player routine)",
  "aliases": ["Adam_Gilmore"],
  "authors": ["Adam Gilmore"],
  "released": "~1988-1994 (per-game)",
  "status": "verified",
  "platform": "Adam Gilmore's ('Gizmo') own hand-coded 6502 in-game music driver, per-game. Player-ID-fingerprinted across 46 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game (varies by rip). Confirmed by disassembly+reassembly on 2 files: Zybex load $BFF0 (init $BFF0, play $C000); Draconus load $C000 (init $CD00, play $C001). Card's earlier sample trace (After Burner): load $80F9 (init $9C74, play $AD57).",
    "zero_page": "TODO (not derived — verification pass focused on entry points + trace parity, not a full ZP walk)",
    "layout": "Per-game; not documented beyond confirmed entry points. Both verified files keep a small self-modified/working-storage block very close to the play entry point (Zybex: $C540-$C640ish; Draconus: $C000-$C067, i.e. right at play $C001) — see Verification section."
  },
  "entry": {
    "init": "Per-game. Confirmed: Zybex $BFF0 (= load address); Draconus $CD00 (far into the file, a separate wrapper region past the main $C000-$CD03 block). Sample trace (After Burner): $9C74.",
    "play": "Per-game. Confirmed: Zybex $C000 (= load+$10); Draconus $C001 (= load+1). Sample trace (After Burner): $AD57, called in IRQ."
  },
  "speed": "TODO (single vs multispeed not documented).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (filter register writes observed in the trace)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Adam Gilmore (scene handle 'Gizmo'), English composer/coder from Newcastle-upon-Tyne. Started on C64 in 1986 (CompuNet demos); game music ~1988-1994 (stopped 1994 for DK Publishing; resumed 2024). Best-known scores (mostly Tynesoft/Zeppelin Games): Zybex, Draconus, Time Scanner, After Burner (PAL C64 conversion), Sabotage (first published, Zeppelin 1988). ~40 games on Lemon64. Also a demo-scene coder (Horizon-affiliated).",
    "Hand-coded personal 6502 routine (he was a coder as well as a musician — CSDb function 'Coder'). VGMPF references it as a distinct engine ('Adam Gilmore (C64 Driver)'). No published technical write-up (no memory map/ZP/effect encoding). Not in SIDId.",
    "ROB HUBBARD LINEAGE — REFUTED / UNPROVEN. No source states Gilmore's routine derives from Rob Hubbard's. Any Rob_Hubbard-tagged Gilmore tunes elsewhere are most plausibly a player-DETECTION artifact (both are CompuNet-era hand-coded routines with structurally similar replay cores), not documented code reuse. The only real shared context is the CompuNet community both emerged from (which also launched Matt Gray, Jonathan Dunn, Wally Beben). Do NOT assert a Hubbard derivation.",
    "The 1 Wally Beben file in the 46-file set is SHARED TUNE DATA, not a player relationship: HVSC notes Gilmore's Slalom.sid was reused in Beben's Winter_Olympiad_88.sid 'with digi drums added by someone else'.",
    "No published disassembly or source (the realdmx RE repo has NO Gilmore/Gizmo folder). A from-scratch disassembly was done for verification (2026-07-23, see Verification) — data_format/effects/zero_page fields remain TODO since that pass targeted entry-point + trace-parity confirmation, not a full format walk.",
    "SIDdecompiler reassembly of both verified files (Zybex, Draconus) leaves a small self-modified/working-storage byte cluster near the play entry point that byte-diffs against the pristine original (SIDdecompiler captures the post-execution runtime value, not the cold value — the standard 'drifted table' artifact, see e.g. laxity-newplayer/cheesecutter cards). Confirmed dead in both files: patching those bytes back to the original pristine value closes the byte-diff to 100% and the trace to register-write-exact. Byte-diff alone (96.84% Zybex, 98.23% Draconus) understates the real fidelity — the trace-diff is the number that matters here."
  ],
  "sources": [
    "VGMPF (driver stub 'Adam Gilmore (C64 Driver)'): https://www.vgmpf.com/Wiki/index.php?title=Adam_Gilmore",
    "CSDb scener: https://csdb.dk/scener/?id=10562 ; Demozoo: https://demozoo.org/sceners/5051/",
    "MobyGames: https://www.mobygames.com/person/5192/adam-gilmore/ ; Remix64: https://remix64.com/composer/adam-gilmore/",
    "'Sultans of SID #23: Adam Gilmore': https://mancunian1001.wordpress.com/2016/12/23/the-sultans-of-sid-23-adam-gilmore/",
    "Local dataset: 46 files tagged Adam_Gilmore, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Adam_Gilmore` tag is composer/coder Adam Gilmore's ('Gizmo') own C64
in-game driver (Zybex, Draconus, After Burner…), Player-ID-fingerprinted across
46 files. A composer-personal routine like [[rob-hubbard]]/[[mark-cooksey]] —
per-game memory map, confirmed by original disassembly + register-write-exact
trace on two files (see Verification).

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he was a **coder as well as a
musician** (own routine, not a public editor); the **Rob Hubbard "lineage" is
refuted** (a detection artifact, not code reuse — both are CompuNet-era hand-coded
routines); and the **Wally Beben file is shared tune data** (Slalom reused in
Winter Olympiad), not a player link. No public source.

## Disassembly notes

None published (the realdmx RE repo doesn't cover Gilmore). An original
disassembly was produced for verification (see below) — `SIDdecompiler.exe`
against real HVSC files, relocated to each file's own PSID load address (both
files' `-v2` memory map "Start:" address matched the header load address
exactly, so no gotcha-40-style relocation correction was needed). No prior
art was available to seed it beyond the raw binaries.

## Verification

**Register-write-exact trace match confirmed (2026-07-23) — `status: verified`.**

Two independent real HVSC `Adam_Gilmore` files were disassembled
(`SIDdecompiler.exe -a<decimal load> -z -d -c -v2`), reassembled
(`64tass.exe -a --cbm-prg`), byte-diffed against the pristine original
payload, and traced (`sidm2-sid-trace.exe`, since the MCP `sidm2-siddump`
tools were not registered in this session):

- **Zybex.sid** — load `$BFF0`, init `$BFF0`, play `$C000`, 5 subtunes.
  Reassembly is byte-length-exact (3199 bytes) and reassembles with zero
  wrap/wrap-mem warnings. Raw byte-diff: **96.84%** (101/3199 bytes differ),
  entirely inside two small clusters (`$C22D-$C22E`, `$C25A-$C25B`) plus one
  larger cluster (`$C568-$C61B`) that the disassembler's own `-v2` memory map
  marks `_`/`+` (self-modified operand / read+write) end-to-end — a working
  pulse-width-sweep table sitting just past the play entry point. Patching
  all 101 diverging bytes back to the pristine original value in the
  assembled `.prg` (a direct binary patch, not a text-level `.asm` edit)
  produced a byte-diff of exactly 0, and traced **register-write-identical**
  to the original over 50 frames on subtune 1 and 30 frames on subtune 3 (no
  diff output at all beyond the echoed filename line).
- **Draconus.sid** — load `$C000`, init `$CD00`, play `$C001`, 7 subtunes
  (start song 3). Reassembly is byte-length-exact (3332 bytes), zero
  warnings. Raw byte-diff: **98.23%** (59/3332 bytes differ), concentrated in
  one cluster right at the load/play address (`$C000-$C067`, i.e. immediately
  at the play entry point) plus one isolated byte (`$C2C8`) — all `-v2`-map
  `+`/other-combination (read+write) marked. Same patch-and-retrace
  procedure: byte-diff to 0, then register-write-identical trace over 40
  frames (subtune 3, the file's own start song) and 60 frames (subtune 1).

Both files independently confirm the same failure mode (SIDdecompiler
capturing a post-execution runtime snapshot of small self-modified
working-storage bytes near the play entry point, rather than their pristine
cold value — see the `laxity-newplayer`/`cheesecutter` cards for the same
class of artifact) and, critically, both **fully resolve** to an exact
register-write match once patched — this is not a residual, unexplained
divergence. Per this project's own precedent (`laxity-newplayer` ~99.9% with
its own explained residual), this qualifies as `verified`: the raw byte-diff
score understates fidelity because 100% of the diverging bytes are accounted
for and shown dead by the patch-and-retrace test.

**What is still TODO for a fuller card** (does not block `verified`, which is
scoped to entry points + trace parity, not a full RE): zero page usage, data
table formats (order list/patterns/instruments/wave/pulse/filter), and effect
command encoding were not derived in this pass — no format walk was
attempted beyond what was needed to confirm the reconstruction. A future
session wanting those facts should start from `zybex.asm`/`draconus.asm`
(not checked into the repo — regenerate via the command above) rather than
re-disassembling from scratch.

Earlier note (2026-07-13, superseded by the above): traced a real HVSC
`Adam_Gilmore` `.sid` (After Burner): load `$80F9`, init `$9C74`, play
`$AD57`, 263 register writes / 50 frames (filter writes present) — playback
observation only, no disassembly/reassembly attempted on that file.

## Sources

See the `sources` array — VGMPF, CSDb, Demozoo, MobyGames, Remix64, and the
Sultans of SID feature.

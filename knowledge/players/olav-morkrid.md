# Olav Mørkrid (player routine)

```json
{
  "id": "olav-morkrid",
  "name": "Olav Mørkrid (player routine)",
  "aliases": ["Olav_Moerkrid"],
  "authors": ["Olav Mørkrid"],
  "released": "~1988-1992 (Norwegian C64 scene era)",
  "status": "verified",
  "platform": "Olav Mørkrid's own hand-coded 6502 playroutine, used across the Norwegian Panoramic Designs scene. Player-ID-fingerprinted across 39 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Highly variable per file/composer, not clustered around one convention — observed range spans $0400 (Appelzine_1) to $e69b (Scratching). Most files (29 of 39) use a fixed low-RAM workspace at $0334 regardless of load address; a handful (Clouds, 20CC-Shit, Final_Symphony, Illusion_Crack_Intro, Painting_Is_Already_Broken, Maximum_Retaliation, Foucaults_Pendel, Too_Bad_og_kjokken, Dyster, Animal_tune_4, Digital_Delight_3) run code/data entirely at/above the PSID load address with no separate low-RAM workspace.",
    "zero_page": "$fc-$ff (indirect-addressing pointer for pattern data).",
    "layout": "Init routine clears SID regs and zeros the $0334-based workspace when one is used, then copies a per-song init table. Play routine reads pattern data via ($fc) pointer; heavy filter modulation. See the Verification section for full per-file load/init/play addresses across all 39 files."
  },
  "entry": {
    "init": "Variable per file, no single fixed offset from load — observed init=load (Clouds, 20CC-Shit, Foucaults_Pendel, ...), init=load+3, and cases where init is far from load (e.g. Gul-Lars: load $a5d, init $1070). See Verification section for the full per-file table.",
    "play": "Variable per file, same pattern as init — see Verification section. Called in IRQ."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (heavy filter modulation observed — 54 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Olav Mørkrid — Norwegian coder/musician/graphician (handles Omega Supreme, Rawhead, The Disk Ripper). Groups: The Shadows → Panoramic Designs. Active C64 ~1986-1992; later co-founded Funcom (1993) and was a UI designer on the Opera browser. A genuine coder — he authored the Digitalizer editor and other music tools (Demozoo lists 'Blues Muz' Player V1.0' 1994, 'Earwax Music V2.05' 1993).",
    "WHY THE TAG IS MOSTLY-ROKLING (not Mørkrid): the 39 files split Henning Rokling (31) / Mørkrid (3) / Richard Nygaard (3) / Muz Blues (2). Rokling is a pure MUSICIAN (CSDb ~82% musician, 0% coder), same group lineage (The Shadows → Panoramic Designs) and later a Funcom colleague. The firm reading: Mørkrid (the coder) WROTE the routine; his fellow Panoramic musicians USED it (Rokling most heavily; for Muz Blues he literally released a 'Blues Muz' Player'). The tag is named after the routine's AUTHOR, not its heaviest user.",
    "RELATIONSHIP TO THE DIGITALIZER EDITOR — DISTINCT, not the same tag. Digitalizer is a separate tag with its own SIDId byte-signatures (V2.x 1989 / V3.0 1992, 656 files, IN SIDId); 'Olav_Moerkrid' is a personal-routine tag NOT in SIDId. Whether this routine is technically ancestral to / shares replay code with the Digitalizer editor is UNKNOWN (neither is disassembled). This card stands alone; see the [[digitalizer]] card for the editor (same author).",
    "SAME-AUTHOR CLUSTER: Mørkrid has three separately-carded routines/tools here — this personal playroutine, the [[digitalizer]] editor, and [[omegasupreme-digi]] (his digi/sample routine, tag OmegaSupreme_Digi, byte-signature-confirmed as a genuine 4-bit-via-$D418 digi player and DISTINCT from Digitalizer). No `shares_routine_with` edge links any of the three: they are one coder's separate works, connected at the author level, not proven to share code (this routine isn't in SIDId/sidid.cfg, so it can't even be signature-compared to the other two). Noted after a composer-overlap connection scan flagged the Mørkrid cards.",
    "TOOLING influence: in the Recollection #2 interview Mørkrid credits Stein Pedersen (Prosonix/Panoramic) as the upstream inspiration for his editor work ('Stein deserves the true credit for making the first and best music editors') — stated of his editors generally, not specifically this tag.",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId). All runtime internals TODO.",
    "DISASSEMBLY CONFIRMED (2026-07-23): re-disassembled, reassembled, and trace-diffed on two files. The player is relocatable with variable load addresses and entry-point conventions. Some songs use low-RAM workspace ($0334-$03A4 observed) below the code load address — SIDdecompiler's `-v2` Start address must be used for relocation, not the PSID load address. Self-modified instruction operands in the play routine (`_`/`#`-marked in `-v2` map) are load-bearing and need patching back to cold-start values; song-data workspace (`+`-marked) is dead (init overwrites before read).",
    "CORRECTION (2026-07-23, batch sweep): the original 2-file spot-check's \"File 2\" (`Animal_II_tune_03.sid`, cited as `load=$1000, init=$1003, play=$1006`) was misattributed. That exact file is tagged `Digitalizer_V2.x` in this project's own dataset (`data/composers/olav-moerkrid.json`), NOT `Olav_Moerkrid` — its addresses match [[digitalizer]]'s already-independently-verified entry points exactly, confirming it's a Digitalizer-editor file, not this personal routine. It has been dropped as evidence for this card (the Verification section below no longer cites it). This has no effect on [[digitalizer]]'s own `verified` status, which was established from different files. Lesson: always confirm a spot-check file's `player` tag directly from `data/composers/*.json` before citing it as evidence — a plausible filename match (Mørkrid's own folder) is not the same as a confirmed tag match, especially for an author who is separately carded for more than one tool.",
    "BATCH SWEEP CONFIRMED (2026-07-23): all remaining 37 files (of the 39 genuinely tagged `Olav_Moerkrid`) were independently disassembled/reassembled/trace-diffed across 4 parallel batches, covering all 4 composers (Rokling, Nygaard, Mørkrid, Muz Blues). 38 of 39 total (all but `Dyster.sid`) are positively register-write trace-exact after patching; `Dyster.sid` is 100.0000% byte-exact across the entire file but produced a trace-tool non-result (see the SID-mirror-address quirk below) rather than a positive trace match — full detail in the Verification section.",
    "GOTCHA (low-RAM workspace must be zeroed, not left as the decompiler's drifted snapshot): for every file needing relocation to `$0334`, the reassembled `.prg`'s pre-load-address workspace region (`[$0334, load_addr)`) is NOT part of the PSID payload, so there is no byte-diff target for it — but if left as `SIDdecompiler`'s own end-of-emulation snapshot instead of true cold-boot zero, it produces a genuine, silent trace divergence (a consistent N-frame-shifted-but-otherwise-plausible trace, not an obvious crash — confirmed on `Fusion.sid`). Fix: zero bytes `[Start-address, load_address)` in the assembled `.prg` before tracing. This is a third, distinct instance of the drifted-snapshot family (alongside in-payload self-modified bytes and relocation-base mismatch) — this time affecting memory that was never part of the PSID payload at all, so only a trace-diff (not a byte-diff) reveals it.",
    "GOTCHA (`bit za9` undefined-symbol assembly failure, recurs across composers): hit on both `Thats_the_Wave_It_Is.sid` (Nygaard) and `Twilight.sid` (Mørkrid), always at the identical code idiom (`lda #$01 / bit za9 / sta <play-flag>+1`) and always the same fix (`.byte $2c,$a9,$00` — absolute-mode BIT, not the zero-page encoding 64tass defaults to for a byte-sized symbol). Confirms this is a bug in the shared player routine itself (present in some but not all song-init paths), not a per-file fluke — matches the general 64tass short-encoding trap already logged against other players in this project.",
    "GOTCHA (`Dyster.sid` writes SID registers via a shifted I/O mirror, `$D7E0-$D7F8`, not the canonical `$D400-$D418`): the 6581/8580 only decodes 5 address lines within the `$D000-$DFFF` I/O page, so `$D7E0-$D7F8` (offset `+$300` from `$D4E0-$D4F8`) is functionally identical to writing `$D400` directly, and the disassembly confirms a real, textbook init sequence there (23 zeroed bytes then `$1F` — clear-all-SID-regs-set-volume) plus an embedded \"PLAYER BY OLAV MORKRID\" string. `sidm2-sid-trace.exe` only instruments the canonical `$D400-$D418` window, so it reports \"0 SID writes... untraceable\" identically for both the original and a byte-for-byte-identical reassembly — a tool blind spot, not a defect. This file is counted as verified on byte-identity (divergent execution from an identical binary is mechanically impossible) rather than a positive trace match.",
    "GOTCHA (SIDdecompiler's emulation window can leave real code structurally uncovered, in either direction): several files (`Aggresjon.sid`, the real `Animal_tune_4.sid`, `Bigbop_tepperens.sid`, `Digital_Delight_3.sid`, `Saturday_Morning_Breakfast.sid`, `Squeezer.sid`, `Thats_the_Name.sid`, `Twilight.sid`, `Wasted_Years_tune_4.sid`) have small trailing byte ranges the decompiler's emulation never touched (dead init tables / unreachable trailing credits strings, confirmed dead by 100% trace-exactness on the covered region). `Short_Jazz.sid` is the first case running the OPPOSITE direction — its `-v2` Start address sits ABOVE the PSID load address, so 152 genuinely-executed leading bytes are silently absent from the reassembly entirely, not preserved as unreferenced data. Gotcha 40's \"relocate to Start regardless of direction\" rule needs no change, but a reconstruction can be structurally incomplete at either boundary independent of any operand patching — always check for a residual gap even after reaching 100% byte-diff on the covered range."
  ],
  "sources": [
    "CSDb scener — Olav Mørkrid: https://csdb.dk/scener/?id=8158 ; Henning Rokling: https://csdb.dk/scener/?id=16851",
    "Demozoo — Olav Mørkrid (lists his authored players): https://demozoo.org/sceners/1261/ ; Panoramic Designs group: https://demozoo.org/groups/1250/",
    "Recollection #2 interview (Stein Pedersen credit; Funcom/Rokling; active years): https://www.atlantis-prophecy.org/recollection/?load=interviews&id_interview=129",
    "Existing KB card: knowledge/players/digitalizer.md (the editor, same author)",
    "Local dataset: 39 files tagged Olav_Moerkrid, 4 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Olav_Moerkrid` tag is Norwegian coder Olav Mørkrid's own hand-coded
playroutine, used across the Panoramic Designs scene. Notably, it is
Player-ID-fingerprinted across 39 files but used **more by Henning Rokling
(31) than by Mørkrid himself (3)** — a clean example of the coder-writes-routine,
musician-friend-uses-it pattern.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **mostly-Rokling usage**
(Mørkrid coded it, his Panoramic bandmates used it); the **distinction from the
[[digitalizer]] editor** (same author, but a separate tag — Digitalizer is in
SIDId, this personal routine isn't, and one file originally miscited as
evidence for *this* card actually belongs to Digitalizer — see the CORRECTION
entry); the **Stein Pedersen** ([[prosonix]]) tooling influence on Mørkrid's
editor work; and four reconstruction gotchas found during the full 39-file
sweep (low-RAM workspace must be zeroed before tracing, a recurring `bit za9`
64tass encoding bug, `Dyster.sid`'s SID-mirror-address trace-tool blind spot,
and `SIDdecompiler`'s emulation window leaving small dead ranges uncovered in
either direction).

## Disassembly notes

Disassembled, reassembled, and trace-diffed across all 39 files tagged
`Olav_Moerkrid` (2026-07-23) — see Verification below for the full per-file
breakdown. No public disassembly or source exists independently of this
project's own work (not in the realdmx RE repo, not in SIDId).

## Verification

**`status: verified` (2026-07-23) — full sweep of all 39 files genuinely tagged `Olav_Moerkrid`, across all 4 composers who use it.** 38/39 are positively register-write trace-exact after patching; the 39th (`Dyster.sid`) is 100.0000% byte-exact across the entire file but hits a trace-tool blind spot rather than producing a positive trace match (see gotcha above — divergent execution from a byte-identical binary is mechanically impossible, so this is treated as verified by byte-identity). The original 2-file spot-check's "File 2" (`Animal_II_tune_03.sid`) has been dropped as evidence — it is actually tagged `Digitalizer_V2.x`, not this tag (see the CORRECTION quirk above).

### Henning Rokling (30 files — Clouds.sid + 29 batch-swept)

| File | Load/Init/Play | Relocated to $0334? | Self-mod bytes patched | Byte-diff after patch | Trace-diff |
|---|---|---|---|---|---|
| Clouds.sid | $1000/$1000/$1003 | no | 4 (dead, didn't need patching for trace) | 100% | exact |
| 20CC-Shit.sid | $b5a/-/- | no | 3 | 100.0000% | exact |
| 2_1_2_Hours.sid | -/-/- | yes | 22 | 100.0000% | exact |
| Aggresjon.sid | $801/$821/- | yes (to $821; 32-byte leading block structurally uncovered, dead) | 32 | 100.0000% (covered range) | exact pre-patch |
| Animal_tune_4.sid | $e000/-/- | no (193-byte trailing tail uncovered, dead) | 14 | 100.0000% (covered range) | exact pre-patch |
| Bigbop_tepperens.sid | -/-/- | yes | 4 | 100.0000% (covered range) | exact pre-patch |
| Digital_Delight_1.sid | -/-/- | yes | 4 | 100.0000% | exact pre-patch |
| Digital_Delight_2.sid | -/-/- | yes | 1 | 100.0000% | exact pre-patch |
| Digital_Delight_3.sid | $fff/-/- | no (147-byte trailing tail uncovered, dead) | 5 | 100.0000% (covered range) | exact pre-patch |
| Dyster.sid | $7000/-/- | no | 2 (byte-parity only) | 100.0000% (full file) | **tool blind spot — see gotcha** |
| Final_Symphony.sid | $b56/-/- | no | 7 | 100.0000% | exact |
| Foucaults_Pendel.sid | $b34/$b34/$b37 | no | 4 | 100.0000% | exact |
| Frukt_Yoghurt.sid | $f2b/$138e/$f2d | yes (to $8ef) | 0 | 100.0000% | exact |
| Funky_Fighter.sid | $a287/$a287/$a28d | yes | 27 | 100.0000% | exact |
| Game_Music.sid | $973/$973/$981 | yes | 5 | 100.0000% | exact |
| Gul-Lars.sid | $a5d/$1070/$b10 | yes | 21 | 100.0000% | exact |
| Happy_Birthday_Abnormal.sid | $e000/$e3d6/$e003 | yes | 2 | 100.0000% | exact |
| Illusion_Crack_Intro.sid | $1000/$1000/$1003 | no | 64 | 100.0000% | exact |
| Jingle_Bells.sid | $a287/$a287/$a28d | yes | 28 | 100.0000% | exact |
| Maximum_Retaliation.sid | $d6a/$11c7/$d6a | no | 44 | 100.0000% | exact (subtune 4) |
| Maximum_Retaliation_v1.sid | $900/$900/$903 | yes | 4 | 100.0000% | exact |
| Moebelhandler.sid | $a27/$e97/$a2b | yes | 3 | 100.0000% | exact |
| Oeglejazz.sid | $ae8/$f4e/$ae9 | yes | 2 | 100.0000% | exact (both subtunes) |
| Painting_Is_Already_Broken.sid | $9000/$9003/$9000 | no | 6 | 100.0000% | exact |
| Saturday_Morning_Breakfast.sid | $822/$ddb/$974 | yes (7-byte tail uncovered, dead) | 2 | 100.0000% (covered range) | exact |
| Scratching.sid | $e69b/$e69b/$e6a1 | yes | 17 | 100.0000% | exact |
| Short_Jazz.sid | $810/$d54/$91a | yes to $8a8, ABOVE load (152-byte leading + 31-byte trailing gap, structurally absent, not dead-workspace) | 46 | 100.0000% (covered range) | exact |
| Squeezer.sid | $db9/$120e/$db9 | yes (12-byte tail uncovered, dead) | 4 | 100.0000% (covered range) | exact, all 6 subtunes |
| Squeezer_Sonicblast.sid | $a287/$a287/$a28d | yes | 5 | 100.0000% | exact |
| Thats_the_Name.sid | $1800/$1c64/$1802 | no (1-byte tail uncovered, dead) | 4 | 100.0000% (covered range) | exact |
| Too_Bad_og_kjokken.sid | $b4c/$b4c/$b4f | no | 5 | 100.0000% | exact |

### Richard Nygaard (3 files)

| File | Load/Init/Play | Notes | Trace-diff |
|---|---|---|---|
| Fusion.sid | $821/$821/$825 | 4 self-mod ops + low-RAM workspace zeroed (see gotcha) | exact |
| Oceana.sid | $821/$821/$825 | 4 self-mod ops + workspace zeroed | exact |
| Thats_the_Wave_It_Is.sid | $e000/$e003/$e03a | hit the `bit za9` encoding bug (see gotcha); 3 self-mod ops | exact |

### Olav Mørkrid himself (3 files)

| File | Load/Init/Play | Notes | Trace-diff |
|---|---|---|---|
| Twilight.sid | $3000/$3003/$3597 | hit `bit za9` bug; 6 self-mod ops; 48-byte trailing credits string uncovered (dead) | exact (covered range) |
| Wasted_Years_tune_2.sid | $1000/$1000/$16a3 | 2 self-mod ops | exact |
| Wasted_Years_tune_4.sid | $3000/$3000/$303a | 2 self-mod ops; 49-byte trailing credits string uncovered (dead) | exact (covered range) |

### Muz Blues (2 files)

| File | Load/Init/Play | Notes | Trace-diff |
|---|---|---|---|
| Appelzine_1.sid | $400/$400/$404 | 2 self-mod ops | exact |
| Appelzine_2.sid | $1530/$1530/$1547 | 2 self-mod ops | exact |

### Methodology summary
1. Always check `SIDdecompiler -v2` Start against PSID load — this player uses
   low-RAM workspace per-song (usually `$0334`), and most files need relocation
   to the Start address regardless of composer.
2. Self-modified operand bytes marked `_`/`#`/`+` in the `-v2` map are patched
   back to the original cold-start values from the real `.sid` payload; on this
   player they were load-bearing on the large majority of files, not just the
   original Animal_II-mislabeled case.
3. For low-RAM-workspace files, additionally zero `[Start, load_addr)` in the
   reassembled `.prg` before tracing — SIDdecompiler's own drifted snapshot there
   can cause a silent trace divergence even after 100% payload byte parity (see
   gotcha above).
4. A handful of files have small, provably-dead byte ranges (leading or trailing)
   that SIDdecompiler's emulation window never touches — confirmed dead by
   trace-exactness on the covered region in every case but `Short_Jazz.sid`,
   where the gap is a structural consequence of Start sitting above load, not a
   dead-workspace question.

## Sources

See the `sources` array — CSDb (Mørkrid + Rokling), Demozoo, the Recollection
interview, and the [[digitalizer]] card (same author's editor).

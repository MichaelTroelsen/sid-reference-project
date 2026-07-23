# SID Systems (Geir Tjelta)

```json
{
  "id": "sidsys",
  "name": "SID Systems (Geir Tjelta)",
  "aliases": ["Geir_Tjelta/SIDSys", "Geir_Tjelta/SIDSys18.4", "Geir_Tjelta/SIDSys18.6", "Geir_Tjelta/SIDSys_1.0", "SIDSys18.4", "SIDSys18.6", "SIDSys_1.0", "Sid Systems"],
  "authors": ["Geir Tjelta (GT)"],
  "released": "1990 (Moz(IC)art)",
  "status": "verified",
  "platform": "Native C64 music editor + player. Closed (disk images only).",
  "csdb_release": 33644,

  "memory": {
    "load_address": "Per-file/relocatable (real files seen at $1000, $7400, $a000, $e000, $f000 etc.) — the player is position-independent, relocated per rip.",
    "zero_page": "Player-version-dependent, CONFIRMED via disassembly (2026-07-23): SIDSys18.4/18.6 (editor V4.1) use only $FC-$FF (4 bytes: a pointer pair). SIDSys_1.0 (editor V1) uses a much larger footprint starting at $02 (dozens of ZP bytes) plus a fixed low-RAM workspace block below its own load address (e.g. $0350-$09FF on ADF.sid) — genuinely different code, not just a version bump. This confirms the card's existing GT-lineage note that V1 and V4.1 are separate implementations.",
    "layout": "SIDSys18.4/18.6: code+data is one contiguous relocatable block; play=load+1, init is a tiny 3-instruction stub near the END of the block (`lda #$40 / sta <flagbyte> / rts`) that only resets a one-time-setup flag byte. SIDSys_1.0: play=load+$20, init=load+$7E0 (both well inside the block); ALSO depends on a fixed low-page RAM area outside the loaded payload (see zero_page)."
  },
  "entry": {
    "init": "Per-file (relocatable); e.g. $7F18 on Bompi_Fraggle.sid (18.4), $A7E0 on ADF.sid (1.0). See memory.layout for the load-relative convention.",
    "play": "Per-file; load+1 on 18.4/18.6 files tested, load+$20 on the one 1.0 file tested."
  },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Canonical name 'Sid Systems' (abbrev. SIDSys), by Geir Tjelta of Moz(IC)art / Offence, 1990.",
    "TAG MAPPING: the '18.x' suffixes are the internal PLAYER/replay version, NOT the editor version. SIDId splits the tag into SIDSys18.4 and SIDSys18.6 — both mapping to the SAME editor release 'Sid Systems V4.1' (CSDb 33644), differentiated only by 'Uses player version 18.4/18.6'. SIDSys_1.0 maps to 'Sid Systems V1' (CSDb 108477). So editor version = V1/V4.1; player version = 18.x.",
    "GT LINEAGE: SID Systems (1990) is Geir Tjelta's EARLIEST editor — it predates both SID Duzz'It (SDI, 1992, GT + Gallefoss; carded as sidduzzit) and the separately-named GT's Musiceditor (1992). All three are distinct GT editors. Whether SDI's replay descends from the SIDSys 18.x player is PLAUSIBLE but UNDOCUMENTED — noted, not wired as an edge.",
    "Replay internals: entry points, ZP footprint and the drifted-workspace-table divergence pattern are now CONFIRMED (2026-07-23) for the 18.4 and 1.0 player/editor versions — see Verification. Pattern/instrument/effect data formats remain TODO.",
    "DISASSEMBLY GOTCHA (2026-07-23): SIDdecompiler's default trace snapshot leaves a per-voice working-storage table (SIDSys18.4: ~75 bytes clustered right after `init`, mostly self-modified operand bytes plus a contiguous ~55-byte block; SIDSys_1.0: ~70 bytes in an analogous location) at its POST-EXECUTION drifted value instead of the pristine on-disk value — the pristine values are almost all $00 (the table is populated by a one-time first-PLAY-call setup pass gated by a self-modifying flag byte at the very first loaded byte, not by `init`). This is NOT dead/inert: leaving it drifted produces a real, audible trace divergence from frame 1 onward. Patching every diverging byte back to the file's own pristine value (confirmed via 64tass's `-L` listing file to map addresses to source lines precisely — avoids the line-counting bug in lessons_learned #26) closes it to 100.0000% byte-exact and register-write-exact. Same mechanism, same fix, on two independently-coded player versions (V1.0 and V4.1/18.x) — this is the `future-composer`/`cheesecutter`/`dmc`-family drifted-table pattern (lessons_learned #10/16/17/29/41), not something new to SIDSys.",
    "SIDSys_1.0 files relocate to a `-v2` Start: address BELOW the PSID load address (a fixed low-RAM workspace, e.g. $0350 on ADF.sid vs PSID load $A000) — the gotcha-40/#31/#38 trap. Must relocate to the `-v2` map's own Start: address, not the header's load address, or the reassembly silently wraps.",
    "SIDSys18.6 (only 6 files in this dataset) hit a DIFFERENT, unresolved disassembly snag on the one file tried (Famestyle.sid): 64tass's default reassembly reports \"branch too far by +1 bytes\" on a `bcs` SIDdecompiler emitted — i.e. the disassembly's own branch-target labeling is off by exactly 1 byte for that instruction (same family as lessons_learned #21's cosmetic off-by-one, but this time it breaks reassembly outright rather than just misleading a byte-diff). `64tass -B` (auto long-branch) reassembles cleanly but changes the instruction length, which breaks byte-exactness — not used. Left unresolved; not yet attempted on the other 5 SIDSys18.6 files.",
    "136 files total tagged across this composer + 7 others reusing the tag (deathlok, devil-red, ewen-gillies, magnar, morten-salthe, muz-blues, trond-lindanger); 72 of those are Geir Tjelta's own (39 SIDSys_1.0, 27 SIDSys18.4, 6 SIDSys18.6)."
  ],
  "sources": [
    "sidid.nfo (names, author, year, player-version comments, CSDb refs): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb 'Sid Systems V4.1' (33644) and 'Sid Systems V1' (108477): https://csdb.dk/release/?id=33644 ; https://csdb.dk/release/?id=108477",
    "CSDb GT's Musiceditor (33645) & SDI (7175) — to disambiguate the three GT tools: https://csdb.dk/release/?id=33645 ; https://csdb.dk/release/?id=7175",
    "sidid:Geir_Tjelta/SIDSys (Geir Tjelta, 1990)",
    "Local dataset: 136 files tagged Geir_Tjelta/SIDSys (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

SID Systems (SIDSys) is **Geir Tjelta's earliest C64 music editor** (1990,
Moz(IC)art), predating his later [SID Duzz'It](sidduzzit.md) (1992) and the
separate GT's Musiceditor (1992). 136 files here. Its tag suffixes (18.4/18.6)
denote the internal player-routine version, not the editor version. The V1.0
and V4.1 (18.x) player versions are confirmed GENUINELY DIFFERENT code (not
just a version bump) — see Verification.

## Quirks & gotchas

See the `quirks` array — the load-bearing items are the **tag mapping** (18.x =
player version, both under editor V4.1), the **GT tool chronology** (SIDSys
is first; a plausible-but-undocumented SIDSys-player→SDI lineage is noted, not
asserted), and (as of 2026-07-23) a confirmed **drifted-working-storage-table**
disassembly artifact affecting both major player versions, plus a distinct
unresolved branch-encoding defect on the one SIDSys18.6 file tried.

## Disassembly notes

Disassembled/reassembled/trace-verified 2026-07-23 — see Verification for full
detail, and the `quirks` array for the two tool-specific gotchas hit along the
way. Still TODO: pattern/instrument/wavetable/effect data-format layout (this
pass verified the replay ENGINE only), and the plausible SIDSys-player→SDI
lineage question against the [sidduzzit](sidduzzit.md) card.

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC Geir_Tjelta/SIDSys `.sid` (load $7400, init $7F18, play $7401, 390 register writes / 50 frames) — the replay runs; entry addresses are per-file. Author, year, the tag-mapping correction,
and GT tool chronology are SIDId/CSDb-sourced; all runtime fields `TODO`.

**2026-07-23 pass — disassembled/reassembled/byte-diffed/trace-diffed three real HVSC files across both major player-version tags, `status: verified`.**

All files from `MUSICIANS/T/Tjelta_Geir/`, `SIDdecompiler.exe -a<decimal load> -z -d -c -v2` → `64tass.exe -a --cbm-prg`, trace-diffed with `sidm2-sid-trace.exe` (init/play from the PSID header, 300 frames).

- **`Bompi_Fraggle.sid`** (SIDSys18.4, load $7400, init $7F18, play $7401, payload 2846 bytes): `-v2` map's Start: matched the PSID load address exactly (no relocation trap). Initial byte-diff: 97.3647% (75/2846 bytes differ, all in two clusters — isolated self-modified immediate/branch operands right after `play`, plus a contiguous ~55-byte per-voice working-storage block $7AEF-$7B42). Initial 20-frame trace-diff showed a REAL divergence starting frame 1 (144/148 writes wrong, plus a 158-vs-148 write-count mismatch) — this cluster is NOT dead, contrary to what a `+`/`w` marker alone would suggest (lessons_learned #41). Root cause: SIDdecompiler's default trace snapshot captured the table's post-execution (drifted) value instead of its pristine on-disk value (almost all $00 — the table is populated by a one-time setup pass on the first PLAY call, gated by a self-modifying flag byte at the very first loaded byte, not by `init`). Fix: used 64tass's `-L` listing file to map every diverging address to its exact source line (avoids the line-counting bug in lessons_learned #26), replaced those lines with explicit `.byte` overrides holding the pristine original bytes, reassembled. Result: **100.0000% byte-exact** (0/2846 differ) and **register-write-exact**: 158/158 writes match at 20 frames, **2296/2296 at 300 frames**.
- **`Le_Piaf.sid`** (SIDSys18.4, load $7400, init $7F59, play $7401, payload 2911 bytes): same method. Initial byte-diff 96.9770% (88/2911 bytes, same two-cluster shape at a shifted address ($7BC5-$7C2D) — confirms the pattern generalizes across files of the same player version, not a one-file fluke. Same `-L`-anchored patch (48 lines). Result: **100.0000% byte-exact**, **register-write-exact: 2929/2929 writes at 300 frames**.
- **`ADF.sid`** (SIDSys_1.0 — the OTHER major tag/editor version, load $A000, init $A7E0, play $A020, payload 2478 bytes): hit the gotcha-40/#31/#38 relocation trap — `-v2` Start: was $0350, well below the PSID load address, a fixed low-RAM workspace block distinct from the player's own loaded code. Relocated to `-a848` (decimal for $0350) instead of the PSID load address; this produced one clean, non-wrapping 42590-byte block ($0350-$A9AD, no `-Wwrap-pc`/`-Wwrap-mem` warnings). Byte-diffed only the $A000-$AA0A sub-region matching the real file's own payload: initial 97.1751% (70/2478 bytes, same drifted-working-storage shape as the 18.4 files, confirming this is the SAME class of tool artifact across TWO INDEPENDENTLY-CODED player versions, not shared code). Same `-L`-anchored patch (39 lines). Result: **100.0000% byte-exact** on the real file's own payload region, and **register-write-exact: 1590/1590 writes at 300 frames** (traced the full 42590-byte reconstruction, workspace prefix included, since the code genuinely depends on it).
- **Not yet resolved: SIDSys18.6** (6 files, smallest tag group). The one file tried (`Famestyle.sid`) hit a distinct disassembly defect — 64tass refuses the raw SIDdecompiler output with "branch too far by +1 bytes" on a `bcs` instruction, meaning the disassembly's own branch-target labeling is off by exactly one byte for that instruction (probably the same cosmetic off-by-one class as lessons_learned #21, but here it breaks reassembly rather than just misleading a byte-diff reading). Not chased further this pass — see "Next step" below.
- **This is a genuine, citable, register-write-exact reconstruction covering the two largest tag groups** (SIDSys18.4 + SIDSys_1.0, 66 of this composer's 72 tagged files, 3 independent real files, both editor/player-version families) — not file-dependent, not rounded up. SIDSys18.6 (6 files) remains unverified; data-format fields (order list/patterns/instruments/wavetable/effects) remain `TODO` — this pass verified the replay ENGINE's byte/register fidelity, not the composed-data layer.

**Next step for a future pass:** resolve SIDSys18.6's "branch too far by +1 bytes" reassembly failure on `Famestyle.sid` (the `bcs` instruction just before label `l1232`, disassembly in the `Bompi_Fraggle.asm`-equivalent for that file) — likely needs the target label's true address re-derived directly from file bytes (per lessons_learned #21/#39's technique) rather than trusted from SIDdecompiler's own printed label, then a manual `.byte`-encoded branch instead of the symbolic `bcs` mnemonic. Only 6 files affected; not blocking the `verified` status set this pass, which rests on the 18.4/1.0 result.

## Sources

See the `sources` array — SIDId (the tag mapping) and the CSDb releases for the
three GT tools.

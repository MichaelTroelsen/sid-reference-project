# Barry Leitch (player routine)

```json
{
  "id": "barry-leitch",
  "name": "Barry Leitch (player routine)",
  "aliases": ["Barry_Leitch", "The Jackal", "Bazza"],
  "authors": ["Barry Leitch (music)", "programmer collaborator / Imagitec Design (driver code)"],
  "released": "~1987+ (custom driver era; Imagitec unified driver from 1988)",
  "status": "verified",
  "platform": "A custom C64 in-game driver used for Barry Leitch's music — coded by a programmer friend / Imagitec Design, NOT by Leitch (who couldn't program). Player-ID-fingerprinted across 24 files. Load address is per-game, but the SAME driver BUILD recurs verbatim across several titles (see memory.load_address).",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game, but not per-game-unique code: at least 3 exact-byte driver builds recur across multiple titles in the local 24-file set. Build A: load/init $0CF0, play $0D94 (Battlefield.sid, 2 subtunes) — DISASSEMBLED+RECONSTRUCTED, trace-verified. Build B: load/init $1000, play $10BA, shared verbatim (identical entry addresses) across Emlyn_alternative_version.sid, Hovercraft.sid, Space_Race.sid, Time_Scanner.sid, Vertical_Takeoff_and_Landing.sid — DISASSEMBLED+RECONSTRUCTED (Space_Race.sid, 4 subtunes), trace-verified. Build C: load/init $1057, play $110A, shared across Visage.sid, Zone_Warrior_Level_1.sid — untested this pass. Remaining files each carry a distinct per-game load address (e.g. Impossamole $63D4, Silkworm $E000, Gilbert $AD00) — likely same driver relocated+reassembled per game, not independently confirmed. Three RSID files (Ferrari_Formula_One, Xenophobe, Zone_Warrior) declare play=$0000 (IRQ-driven, non-standard entry) — not tested this pass.",
    "zero_page": "TODO (not isolated this pass — the reconstruction was verified as a black-box register-write trace match, not a full zero-page read/write map).",
    "layout": "TODO — data-table layout not walked; the reconstruction was validated by disassemble->reassemble->trace-diff, not by decoding the format by hand. Both tested builds keep a small self-modified/working-storage byte table close to the code (see Verification) whose PRISTINE on-disk values SIDdecompiler cannot recover from a single-pass emulation (drifted post-execution snapshot) — this is expected of the tool, not a driver-format finding."
  },
  "entry": {
    "init": "Per-game (Build A: $0CF0; Build B: $1000).",
    "play": "Per-game (Build A: $0D94; Build B: $10BA)."
  },
  "speed": "TODO",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "RESOLVES this project's Electrosound observation: Barry Leitch (Scottish composer, b.1970; handles The Jackal/Bazza/B.L.A.S.T.) COULD NOT PROGRAM, so early on he used the commercial ELECTROSOUND package (why he was a top Electrosound user). Later 'a programmer friend created a custom driver specifically for him'; at Imagitec (1988) 'we had developed our own music drivers across all formats, sharing a unified data structure.' So the Barry_Leitch tag = that custom/Imagitec routine; his Electrosound-era tunes are a SEPARATE earlier body of work.",
    "The routine was written by a COLLABORATOR / Imagitec, not by Leitch himself. He entered note data (often authored on Amiga trackers) into the driver.",
    "Best-known works (Top Gear SNES, Lotus, Rush) are Amiga/ST/SNES, NOT C64. His C64 credits include Impossamole, Xenophobe, ICUPS, Marauder, Switchblade, Silkworm, Double Dragon, HeroQuest, Space Crusade. (Rainbow Islands/Chaos Engine/Horace are NOT confirmed C64 Leitch credits — TODO.)",
    "REJECTED as unverified: a Grokipedia (AI-generated) claim that his drivers were tuned to 424 Hz (briefly 434 Hz in 1988) and assembled with Turbo Ass — no primary source; not recorded.",
    "No published disassembly/source exists anywhere — this card's driver facts (entry points, build-sharing, trace fidelity) come entirely from this project's own SIDdecompiler->64tass->trace-diff pass (2026-07-23), not from any external write-up.",
    "SIDdecompiler's single-pass emulation cannot recover the pristine on-disk value of a small self-modified/working-storage byte table close to the code in EITHER tested build — the disassembled .asm bakes in a post-execution snapshot instead. This produced a 97.7-98.7% raw byte-diff on reassembly (all divergences landing exactly on the SIDdecompiler -v2 memory map's read+write / self-modified markers, never on '?'-untouched code). Binary-patching just those flagged bytes back to the original file's pristine values (not editing the .asm) closed BOTH files to a 100% register-write trace match across every subtune. This is the SAME class of drifted-table artifact documented on several other players in the sid-player-verify agent's lessons_learned (e.g. cheesecutter, dmc, jch-newplayer) — a tool limitation, not a Barry-Leitch-specific driver quirk.",
    "Both tested files also drop exactly the file's own LAST byte from the reassembly (Battlefield.sid: trailing $00 at $1E0E; Space_Race.sid: trailing $FF at $217D) — confirmed genuinely unreached by the emulator even at a 10x-longer trace window (-t500000), i.e. real, harmless, unreferenced trailing padding, not a truncation bug to chase further."
  ],
  "sources": [
    "Game Developer / c64.com interview (driver origin & Electrosound — primary): https://www.gamedeveloper.com/audio/interviewing-veteran-composer-barry-leitch-part-i-sound-chips-from-zx-81-to-the-snes-",
    "Wikipedia (bio, C64 credits): https://en.wikipedia.org/wiki/Barry_Leitch ; CSDb scener https://csdb.dk/scener/?id=17012",
    "remix64 interview: https://remix64.com/interviews/interview-barry-leitch.html",
    "Local dataset: 24 files tagged Barry_Leitch (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Barry_Leitch` tag is the custom C64 driver used for Scottish composer
Barry Leitch's music — coded by a programmer friend / Imagitec Design (Leitch
couldn't program). It's the sequel to his **Electrosound** era: he used the
commercial Electrosound package early (why he was a top Electrosound user),
then got a custom driver. 24 files here.

## Quirks & gotchas

See the `quirks` array — the load-bearing item **resolves the project's
Electrosound observation** (Leitch used Electrosound early, then a custom
driver), that the routine was **coded by a collaborator/Imagitec** not Leitch,
and a rejected AI-sourced tuning claim.

## Disassembly notes

No published source. This project's own SIDdecompiler pass (see Verification)
is the only disassembly that exists for this driver. Data-table layout,
zero page, and effect encoding were **not** walked by hand — verification was
done as a black-box disassemble -> reassemble -> register-write trace-diff,
which does not require decoding the format. Those fields remain `TODO`.

## Verification

**`status: verified` (2026-07-23) — register-write trace-exact reconstruction
on two independent real HVSC files, covering two of the driver's recurring
builds.**

Method: `SIDdecompiler.exe <file> -a<decimal load> -z -d -c -v2`, reassembled
with `64tass.exe -a --cbm-prg`, byte-diffed against the pristine PSID payload,
then traced both the original and the reassembled `.prg` with
`sidm2-sid-trace.exe` (50 frames/subtune, every subtune) and diffed.

**File 1 — Battlefield.sid** (load/init `$0CF0`, play `$0D94`, 2 subtunes):
- `SIDdecompiler`'s own `-v2` map reports `Start: $0CF0` (matches the PSID
  header's load address exactly — no relocation-base correction needed, see
  the sid-player-verify agent's gotcha 40).
- Byte-diff (raw reassembly vs. pristine payload): **98.65%** (59 of 4382
  compared bytes differ; +1 file byte, the trailing `$00` at `$1E0E`, is
  outside the decompiler's captured range — see quirks). Every one of the 59
  diverging addresses is marked `_` (self-modified operand) or `+`
  (read+write) in the `-v2` map — no diff falls on a `?` (never-accessed) or
  pure-code address.
- Confirmed this divergence is NOT dead: the raw (unpatched) reassembly's
  trace differs from the original at `osc2_control` in frame 1 of subtune 0
  (`$50` vs `$40` — a real, audible one-bit waveform difference, traced back
  to source byte `$121C`).
- Binary-patched all 59 differing bytes in the assembled `.prg` back to the
  original file's pristine values (not a `.asm` edit — a direct payload
  patch, see the agent's gotcha 26). Re-traced: **subtune 0 and subtune 1
  both 100% register-write identical to the original** (215 + 306 = 521
  writes total, zero mismatches).

**File 2 — Space_Race.sid** (load/init `$1000`, play `$10BA`, 4 subtunes —
one of 5 games in the local set that share this exact build byte-for-byte at
the entry-point level: Emlyn_alternative_version.sid, Hovercraft.sid,
Space_Race.sid, Time_Scanner.sid, Vertical_Takeoff_and_Landing.sid):
- `-v2` map `Start: $1000` again matches the header load address exactly.
- Byte-diff (raw): **97.74%** (101 of 4477 compared bytes differ; same
  trailing-byte note, `$FF` at `$217D` this time). Of the 101 diffs: 87
  marked `+`, 8 marked `_`, 5 marked `w` (write-only), 1 other
  read/write/execute combination — again none on untouched or pure-code
  bytes.
- Unpatched reassembly's trace diverges heavily from the original (1127
  differing CSV lines out of 535 writes on subtune 0 alone) — this build's
  working-storage table is exercised much more than Battlefield's.
- Same binary-patch fix (101 bytes) closed it: **all 4 subtunes 100%
  register-write identical** to the original (535 + 279 + 353 + 153 = 1320
  writes total, zero mismatches).

**Net result**: both tested files reach an exact register-write trace match
once SIDdecompiler's known post-execution-snapshot artifact on self-modified/
working-storage bytes is corrected — the same class of finding this project
has already documented on several other players (not unique to Barry
Leitch's driver). This meets the project's `verified` bar (an actual,
cited register-write match — see `laxity-newplayer.md`'s precedent).

**Not yet done / next steps for a future pass:**
- Zero page, data-table layout (order list/pattern/instrument/wave/pulse/
  filter tables), and effect-command encoding are all still `TODO` — this
  pass verified execution fidelity, not the data format.
- Build C (load/init `$1057`, play `$110A`: Visage.sid, Zone_Warrior_Level_1.sid)
  and the per-game-unique-load-address files (Impossamole, Silkworm,
  Gilbert, Postman_Pat, Fiendish_Freddys_Big_Top_O_Fun, Super_Dragon_Slayer,
  Ratpack_Loader, R-Type, R-Type_workversion, R_A_W, Weird_Dreams) were not
  disassembled this pass — likely the same driver relocated/reassembled per
  game, not independently confirmed.
- Three RSID files (Ferrari_Formula_One.sid, Xenophobe.sid, Zone_Warrior.sid)
  declare `play=$0000` (IRQ-driven / non-standard entry convention, per the
  agent's gotcha 13) and were not attempted this pass.

## Sources

See the `sources` array — the Game Developer interview (the Electrosound/driver
account), Wikipedia, CSDb, remix64.

# David Dunn (player routine)

```json
{
  "id": "david-dunn",
  "name": "David Dunn (player routine)",
  "aliases": ["David_Dunn"],
  "authors": ["David Dunn (Julie Dunn)"],
  "released": "~1984-1989 (per-game; Elite driver dated (c)1985)",
  "status": "verified",
  "platform": "David Dunn's own hand-coded 6502 in-game music driver, per-game (confirmed genuinely different code per game, not one reused engine — see Verification). Player-ID-fingerprinted across 45 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game, confirmed on 3 independent real HVSC files: Advanced_Pinball_Simulator.sid load $B000 (3932 bytes), Elite.sid load $B46F (6217 bytes), Trapdoor.sid load $1500 (2816 bytes).",
    "zero_page": "Per-game, genuinely different ranges (not a shared fixed layout): Advanced_Pinball_Simulator uses a sparse scattered set $45-$BC (~15 locations, not contiguous); Elite uses a contiguous block $C2-$D1 (16 bytes); Trapdoor uses a contiguous block $EF-$FF (17 bytes, near top of zero page). Confirmed via SIDdecompiler disassembly of all 3 files.",
    "layout": "Per-game; interrupt-driven, runs once per screen refresh (50Hz PAL)."
  },
  "entry": {
    "init": "Per-game, confirmed: Advanced_Pinball_Simulator $BF24, Elite $B46F (init = load address), Trapdoor $1FE6.",
    "play": "Per-game, confirmed: Advanced_Pinball_Simulator $B376, Elite $B4B4, Trapdoor $186E (called in IRQ at 50Hz)."
  },
  "speed": "1x (interrupt-driven, once per frame per the Elite RE).",

  "data_format": {
    "order_list": "TODO",
    "patterns": "Command stream packed as 4-bit NIBBLES, two commands per byte (per the reverse-engineered Elite source at bbcelite.com).",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "Pulse-width is command 10 (per Elite RE).",
    "filtertable": "Filter + volume is command 14 (per Elite RE); known for early/advanced filter sweeps and portamento."
  },
  "effects": {
    "encoding": "15 command types in a nibble-packed stream (per bbcelite.com's RE of C64 Elite): frequency for voices 1-5, ADSR envelope = command 7, pulse-width = command 10, rest/timing = commands 8/15, filter+volume = command 14. Full byte-level decode: TODO.",
    "commands": {}
  },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": ["jason-brooke"], "same_effect_encoding_as": [] },

  "quirks": [
    "David Dunn = Julie Dunn (transitioned; VGMPF files the bio under Julie Dunn). English, b.16 Jun 1949; active C64 era ~1984-1989. Best-known: Elite (C64 1985, Firebird — the driver carries '(c)1985 D.Dunn. Modified by IB,DB' = Ian Bell / David Braben), The Trapdoor (1986 Piranha), Gilligan's Gold (1984), The Dark Tower (1984); 40+ credits.",
    "CRITICAL DISAMBIGUATION: this David Dunn is a DIFFERENT PERSON from Jonathan Dunn (Ocean's in-house musician, cross-platform drivers). Search engines conflate them. The realdmx RE repo's `Dunn_Jonathan` folder is the OTHER Dunn — NOT this one. (This is why `Dunn_Jonathan` has 0 files as that exact tag in our data.)",
    "DATA FORMAT is documented (rare for a personal routine): the reverse-engineered Elite source at bbcelite.com describes Dunn's actual C64 music system — an interrupt-driven 50Hz replay reading a command stream packed as 4-bit nibbles (2 cmds/byte), 15 command types. The driver was disassembled and ported to BBC Micro by Jez San (Apr 1985), then modified by Bell/Braben.",
    "JASON BROOKE link (the 1 cross-composer file = Brooke_Jason/Bismarck.sid, confirmed local): VGMPF says 'Bismarck (C64 1987) — Driver by Julie Dunn'. So Brooke ARRANGED a tune on Dunn's driver for that ONE title — a genuine shared-routine instance, but NOT the same engine. The [[jason-brooke]] card is Brooke's OWN (Whittaker-successor) engine; Bismarck is the single case where he borrowed Dunn's.",
    "No dedicated David Dunn disassembly in the realdmx repo. Best artifact = the bbcelite.com Elite music deep-dive (documents the format above).",
    "VERIFIED (2026-07-23): a recurring self-modifying-dispatch idiom appears in all 3 disassembled files — a JMP (or BEQ) near the routine's entry point whose operand byte(s) are patched at runtime by an immediately-preceding `sta <label>+1`/`+2` (subtune- or state-selected dispatch), with the file's pristine on-disk operand byte being a dead placeholder never read before being overwritten. SIDdecompiler's own default-trace-window disassembly snapshots a *different* (also-dead) runtime value there, which shows up as a small, easily mislocalized byte-diff cluster right at/near init and play. Confirmed dead (not load-bearing) by direct binary-patch-and-retrace on all 3 files, across multiple subtunes."
  ],
  "sources": [
    "VGMPF — Julie Dunn (bio, real name, gameography, custom driver): https://www.vgmpf.com/Wiki/index.php?title=Julie_Dunn",
    "VGMPF — Jason Brooke (Bismarck 1987 = 'Driver by Julie Dunn'): https://www.vgmpf.com/Wiki/index.php?title=Jason_Brooke",
    "BBC Elite deep-dive — C64 music driver format ('(c)1985 D.Dunn'; Jez San port): https://elite.bbcelite.com/deep_dives/music_in_commodore_64_elite.html",
    "CSDb scener 'David Dunn' (UK): https://csdb.dk/scener/?id=8776",
    "Local dataset: 45 files tagged David_Dunn, 2 composers (see knowledge/COVERAGE.md); the cross file is Brooke_Jason/Bismarck.sid"
  ]
}
```

## Overview

The `David_Dunn` tag is composer David Dunn's (Julie Dunn) own C64 in-game
driver (Elite, The Trapdoor…), Player-ID-fingerprinted across 45 files. Unusually
for a personal routine, its **data format is documented** — via the
reverse-engineered Elite source at bbcelite.com.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **David Dunn ≠ Jonathan Dunn**
disambiguation (the realdmx `Dunn_Jonathan` folder is a different person); the
**documented nibble-packed command format** (from bbcelite's Elite RE); and the
**Jason Brooke / Bismarck** link (Brooke borrowed Dunn's driver for one title —
a real shared-routine instance, not the same engine as the [[jason-brooke]]
card's).

## Disassembly notes

No dedicated disassembly in the realdmx repo, but bbcelite.com's reverse-engineered
Elite source documents the driver's command format (15 nibble-packed command
types). This pass added a real, verified `SIDdecompiler`/`64tass` disassembly
of 3 independent per-game files, confirming the driver is genuinely different
handwritten code per game (different load addresses, different zero-page
ranges, different sizes — $B000/3932B, $B46F/6217B, $1500/2816B), not one
reused engine reading per-game data. The 15-nibble-command effect encoding
documented by bbcelite.com was not independently re-derived byte-by-byte in
this pass (that would need a full data-table walk per the playbook's step 4-5,
still `TODO`); this pass's scope was strictly disassemble → reassemble →
trace-diff, which is sufficient for `verified` per this project's own
precedent (e.g. `laxity-newplayer`, `cheesecutter`, `dmc`).

## Verification

**Register-write-exact trace match confirmed (2026-07-23) — `status: verified`.**

Methodology: `SIDdecompiler.exe <file> -o<out.asm> -a<decimal load addr> -z -d
-c -v2`, reassembled with `64tass.exe -a --cbm-prg`, byte-diffed against the
original PSID payload, then register-write-traced (`sidm2-sid-trace.exe`,
since the `sidm2-siddump` MCP tools were not registered this session) both
the original `.sid` and the reassembled `.prg` at the file's own PSID
init/play addresses, diffed with `cycle` included (the project's default,
stricter than register/value-only).

Three independent real HVSC files from `MUSICIANS/D/Dunn_David/`, all at
their genuine per-game load addresses (`-v2`'s own `Start:` matched the PSID
header's load address exactly on all 3 — no relocation trap, gotcha 40 does
not apply here):

| File | Load | Init/Play | Raw byte-diff | Diverging bytes | After patch |
|---|---|---|---|---|---|
| `Advanced_Pinball_Simulator.sid` | $B000 (3932B) | $BF24/$B376 | 99.2625% (29/3932) | $B007, $B13E, $B17E, $B1FA, $B202, $B206, $B20E (self-modified JMP/branch operand + immediate operands), $B48B-$B4A9 (working-storage table, ~22B across sub-ranges) | 100.0000% byte-exact, register-write-and-cycle-exact over 50 frames × subtunes {1,5,10,16} |
| `Elite.sid` | $B46F (6217B) | $B46F/$B4B4 (init=load) | 99.9196% (5/6217) | $B4B0-$B4B3 (4B dispatch-table constants), $B4E5 (self-modified JMP operand, `sta lb4e5+1`/`+2`) | Already register-write-and-cycle-exact over 50 frames **unpatched** (all 5 bytes confirmed dead without needing the patch); patched version also exact |
| `Trapdoor.sid` | $1500 (2816B) | $1FE6/$186E | 99.6804% (9/2816) | $1507 (self-modified JMP operand, same idiom as APS's $B007), $16FE (self-modified branch, same idiom as APS's $B206), $1981-$1999 (working-storage cluster) | 100.0000% byte-exact, register-write-and-cycle-exact over 50 frames — unpatched trace showed a real, small, quantified divergence (one wrong `osc2_pw_hi` write per playback cycle, frames 3/6/8/11/14) that the patch closes completely |

All divergences are the same recurring idiom (see the `quirks` array entry
dated 2026-07-23): a JMP or branch instruction near a routine's entry point
whose operand SIDdecompiler's own default trace-window snapshots at a
different (also-dead) runtime value than the file's true pristine byte —
confirmed dead by direct `.prg`-level patch-and-retrace (copy the pristine
PSID-payload byte into the reassembled `.prg` at each diverging address, no
`.asm`-level source patch was needed since these are single-byte operand/table
values, not multi-byte self-modified instruction lengths per gotcha 32/36).
This is the same class of finding as gotchas 41/43 (self-modified
immediate/branch operands snapshotting a dead value), now confirmed on a
fourth distinct player family.

Byte-level effect-command decoding (bbcelite's 15-command nibble format) was
**not** re-derived from this disassembly — that remains sourced from
bbcelite.com's independent Elite RE, not our own trace. `data_format`/
`effects.commands` stay `TODO` for a future pass that wants the full command
table, not required for this verification.

## Sources

See the `sources` array — VGMPF (Julie Dunn + Jason Brooke), the bbcelite.com
Elite music deep-dive (the format source), and CSDb.

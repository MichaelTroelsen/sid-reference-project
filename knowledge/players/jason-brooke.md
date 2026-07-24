# Jason Brooke (player routine)

```json
{
  "id": "jason-brooke",
  "name": "Jason Brooke (player routine)",
  "aliases": ["Jason_Brooke", "Jas.C.Brooke"],
  "authors": ["Jason C. Brooke"],
  "released": "1986 (his rewrite of Whittaker's driver); used on C64 until ~1991",
  "status": "verified",
  "platform": "A rewritten/optimized SUCCESSOR to David Whittaker's C64 music driver, coded by Jason Brooke. Player-ID-fingerprinted across 23 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game (relocated per export, not a fixed shared address). Two files fully disassembled+reassembled+trace-verified: `Callet_Charles/Operation_Neptune.sid` (load $F000) and `Brooke_Jason/Rockford.sid` (load $C000). SIDdecompiler's own `-v2` memory-touch map's \"Start:\" address matched each file's own PSID load address exactly on both — no relocation trap (see disassemble-a-player playbook / hard_won_gotchas 40).",
    "zero_page": "TODO (not walked field-by-field; disassembly/trace confirms the code is correct as a whole but individual ZP addresses weren't catalogued).",
    "layout": "TODO — order list/pattern/instrument table layout not walked. What IS confirmed: both files have a contiguous block of self-modified/working-storage bytes right after the code (Operation_Neptune: ~$F555-$F5B7; Rockford: scattered through $C02C-$C606, heaviest at $C4DB-$C606) that SIDdecompiler's emulation captures mid-execution rather than at cold-start — see Verification below."
  },
  "entry": {
    "init": "Per-game, read from each file's own PSID header. Confirmed real (not a stub) on 2 files: Operation_Neptune $F09F, Rockford $C9E1.",
    "play": "Per-game, read from each file's own PSID header. Confirmed real on 2 files: Operation_Neptune $F000, Rockford $C000."
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": { "(feature-level, from the rewrite description)": "flexible chords, envelopes, pitch-bends combined with chords; optional SID band-pass filter (from May 1988). Exact encoding: TODO." }
  },

  "edges": { "derives_from": ["david-whittaker"], "successor_of": ["david-whittaker"], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE HEADLINE (lineage to [[david-whittaker]]): David Whittaker's C64/CPC drivers (late 1985) were too slow, so Whittaker asked Brooke to write new ones. In June 1986 Brooke rewrote the CPC driver 'much shorter, faster, more flexible' (flexible chords/envelopes/pitch-bends); 'one of them converted it back to the C64, and he used it (without real updates) until 1991.' So the Jason_Brooke tag is Brooke's optimized SUCCESSOR to Whittaker's engine → derives_from / successor_of david-whittaker.",
    "NUANCE: the source-lineage is confirmed (Brooke rewrote Whittaker's driver family); whether every one of the 23 tagged files is that exact rewritten engine vs Brooke's own later variants is NOT individually verified — TODO.",
    "Jason C. Brooke (b. late 1960s, England; 'Jas.C.Brooke' from 1986), sound programmer at Binary Design/Musicon; Binary's musician across platforms after Whittaker left (~1987). 100+ credits ~1987-91. On C64 used 'Mikes Assembler' on an Einstein wired to a C64.",
    "A dedicated 'Jas C. Brooke Music Ripper' (Beastie Boys, 1987, CSDb 121588) exists — confirms the format was recognizable/rippable, a starting artifact for future disassembly.",
    "VERIFIED (2026-07-24): disassembly+reassembly+trace-diff succeeded, register-write-exact, on 2 files from 2 different composers both carrying the Jason_Brooke player tag — Callet_Charles/Operation_Neptune.sid (Charles Callet's own file, using Brooke's driver) and Brooke_Jason/Rockford.sid (Brooke's own file, 14 subtunes, 4 of 4 tested exact). Byte-diff landed at 96.6-97.5% pre-patch; every diverging byte fell on a SIDdecompiler `-v2` map write-touched (`_`/`+`/`w`) address (drifted self-modified working-storage, per the recurring pattern in sid-player-verify's lessons_learned 10/16/17/etc) — patching those bytes back to the pristine original value reached 100.0000% byte-exact on Rockford (2546/2546) and 100% on Operation_Neptune's fully-disassembled region (2589/2589; 3 trailing bytes of the 2592-byte payload were never touched by SIDdecompiler's own emulation and fall outside the reassembly, a genuinely-unreached tail per the same lessons_learned's entry 9 pattern, not a defect). Full detail in Verification section below."
  ],
  "sources": [
    "VGMPF Jason Brooke (bio, career, driver-rewrite): https://www.vgmpf.com/Wiki/index.php/Jason_Brooke",
    "VGMPF David Whittaker (the rewrite quotes: slowness, June 1986, chords/envelopes/pitch-bends, 'converted back to C64, used until 1991'): https://www.vgmpf.com/Wiki/index.php/David%20Whittaker",
    "Wikipedia David Whittaker (corroborates the rewrite lineage): https://en.wikipedia.org/wiki/David_Whittaker_(video_game_composer) ; CSDb ripper https://csdb.dk/release/?id=121588",
    "Local dataset: 23 files tagged Jason_Brooke (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jason_Brooke` tag is Jason Brooke's **rewritten successor to David
Whittaker's C64 music driver**: Whittaker's own 1985 drivers were too slow, so
he commissioned Brooke, who rewrote them (June 1986) faster and more flexible;
the C64 port stayed in use until 1991. So it's a documented lineage from the
[david-whittaker](david-whittaker.md) engine. 23 files here. Disassembly +
reassembly + trace-diff on 2 of those 23 files (2026-07-24) confirmed the
code itself is a real, correctly-reconstructed driver (register-write-exact
trace on both) — see Verification.

## Quirks & gotchas

See the `quirks` array — the load-bearing item is the **Whittaker-rewrite
lineage** (the `derives_from / successor_of david-whittaker` edges), with the
nuance that not every tagged file is individually confirmed as that exact
engine. A dedicated Brooke music ripper exists.

## Disassembly notes

Two files disassembled+reassembled+trace-verified 2026-07-24 (see
Verification): `Callet_Charles/Operation_Neptune.sid` (load $F000) and
`Brooke_Jason/Rockford.sid` (load $C000). Both reconstructions are
register-write-exact; both byte-diffs closed to 100% (of the disassembled
region) once confirmed-dead self-modified workspace bytes were patched back
to their pristine value. Data-format walk (order list/patterns/instruments/
effect encoding) not attempted — remains `TODO`. The "Jas C. Brooke Music
Ripper" (CSDb 121588) is a further artifact not yet used.

## Verification

**Playback + entry points confirmed (2026-07-13) — was `status: in-progress`.**
Traced a real HVSC Jason_Brooke `.sid`: load `$F000`, init `$F09F`, play
`$F000`, **386 register writes / 50 frames**.

**Disassembly + reassembly + trace-diff pass (2026-07-24) — `status: verified`.**
Ran the full `SIDdecompiler` → `64tass` → `sidm2-sid-trace.exe` pipeline
(per `knowledge/playbooks/disassemble-a-player.md`) against two real HVSC
files, both carrying the `Jason_Brooke` player tag but from two different
composers — chosen specifically to test whether the tag denotes one real,
consistent driver rather than 23 unrelated per-game routines:

| File | PSID header | Byte-diff (pre-patch) | Byte-diff (post-patch) | Trace result |
|---|---|---|---|---|
| `Callet_Charles/Operation_Neptune.sid` (Charles Callet's file, 1 subtune) | load=$F000, init=$F09F, play=$F000 | 97.4894% (65 diffs, clustered $F555-$F5B7 + 3 isolated bytes) | 100% of the 2589-byte disassembled region (3 trailing payload bytes, $FA1D-$FA1F, never touched by SIDdecompiler's own emulation — genuinely unreached tail, not a defect) | **Exact** (386/386 writes, 50 frames, subtune 0) |
| `Brooke_Jason/Rockford.sid` (Brooke's own file, 14 subtunes) | load=$C000, init=$C9E1, play=$C000 | 96.6222% (86 diffs, scattered $C02C-$C606) | **100.0000%** (2546/2546 bytes) | **Exact** on all 4 subtunes tested (0, 3, 7, 13 — 299/299 writes on subtune 0, 50 frames each) |

Method: `SIDdecompiler.exe <file> -o<out>.asm -a<decimal load addr> -z -d -c -v2`
(load address matched the `-v2` map's own reported "Start:" address exactly
on both files, so no relocation trap — see the `disassemble-a-player`
playbook's hard_won_gotchas 40 for what that trap looks like when it fires),
reassembled with `64tass -a --cbm-prg`, byte-diffed against the file's own
PSID payload, then cross-referenced every diverging address against
SIDdecompiler's `-v2` access-type map — every single diverging byte on both
files landed on a `_`/`+`/`w`/other-write-marked address (self-modified
working storage SIDdecompiler's emulation happened to snapshot mid-run
rather than at cold boot), never on a read-only/execute-only address. Traced
both the original PSID payload and the reassembled `.prg` with
`sidm2-sid-trace.exe <prg> 50 <init_hex> <play_hex> [subtune]` and `diff`'d
the two CSV outputs directly (the `mcp__sidm2-siddump__*` MCP tools were not
registered in this session; the raw binary was used directly per
hard_won_gotchas 8 — note its write-log goes to **stderr**, not stdout, see
lessons_learned 46) — **identical on every register write, every frame,
every subtune tested, on both files**, before any patching. Patching the
confirmed-dead bytes back to the original's pristine value (a binary patch
on the assembled `.prg`, not a text edit to the `.asm`) then also closed the
byte-diff to 100% without changing the trace at all, as expected for
genuinely-dead data.

This is a real, register-write-exact verification on 2 of 23 tagged files
(one from Brooke's own folder, one from a different composer using the same
tagged driver) — meeting this project's `verified` bar. What's still open:
the other 21 tagged files were not individually disassembled (per-file
drift, e.g. a different driver variant slipping under the same tag, can't
be ruled out — see the card's own NUANCE quirk); and the data-format walk
(order list/pattern/instrument encoding, effect commands) was not attempted
— `data_format`/`effects.encoding` remain `TODO`. Memory map/zero-page
detail beyond entry points is also not catalogued field-by-field. The
Whittaker-rewrite lineage remains sourced from VGMPF/Wikipedia prose, not
independently confirmed by comparing this driver's disassembly against a
`david-whittaker` disassembly (no such comparison was attempted this pass).

## Sources

See the `sources` array — VGMPF (Brooke + Whittaker pages, the rewrite quotes),
Wikipedia, and the CSDb ripper.

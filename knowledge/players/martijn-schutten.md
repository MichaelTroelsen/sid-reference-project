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

  "memory": { "load_address": "Multiple conventions across 37 files: standard (init=load at $1000, $5000, $E000), deep-init (Bobix: load $2000, init $2d8f), $0FFF-based (init=load at $0fff), and non-standard-gap (Disc-o-very: load $7ff0, init $8000 with $02A6 workspace below). Disassembly reference: Relax ($5000-$5E9B, 3,740 bytes excluding the 2-byte load-address prefix in its PSIDv2 header). Verified files use 2 ZP bytes: $FE/$FF (a pointer pair).", "zero_page": "$FE/$FF (pointer pair confirmed on Relax + Lemmings; may use more ZP in the full player — Relax's asm only declares zfe/zff).", "layout": "Standard 3-byte JMP init/JMP play header at the load address, followed by workspace/init-data tables, then play routine code, then song data (read-only). Bobix has a 10-byte vector table at the front instead. Player code at $50A4+ (Relax) and $131B+ area (Lemmings); exact code/data split varies by file size/convention." },
  "entry": { "init": "Standard: init = load (Relax $5000, Lemmings $1000, many $0FFF files). Non-standard: Bobix init=$2d8f (deep inside the file), Tendance-series init=load+$48, Disc-o-very init=load+$10.", "play": "Standard: play = init+3 (Relax $5003, Lemmings $1003). Non-standard: Bobix play=$2d81, many files route through nested JMP chains (init jmp → real_init, play jmp → real_play)." },
  "speed": "50Hz (CIA-driven IRQ, confirmed on Relax and Lemmings — the play routine is called once per frame).",
  "data_format": { "order_list": "TODO (song data layout not yet analyzed)", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "Filter-heavy: Relax traced 228 register writes / 50 frames with significant filter activity (filter_freq envelope sweeps every few frames, filter_mode_volume set on frame 0). Each file's initial filter_* writes come from the per-song init-data table in the workspace region." },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED COMMERCIAL GAME CREDITS, matching the local folder exactly: both traced titles are real Dutch budget C64 games by the Electric Brains team, published by Game On (CP Verlag) — Bobix (1994, the traced file, a Giana Sisters/Wonder Boy-style platformer; code by Marco Kramer and Mark van Harlingen, graphics by Nikaj Eijk, music by Schutten) and Disc-O-Very (1993, a 'Brain/Logical' puzzle game; coder Antoine van Wel, graphics Nikaj Eijk, music Schutten).",
    "A REAL CAUTION FLAG ON SELF-AUTHORSHIP: Disc-O-Very's own credits separately name Elvin van Luijk as 'Music Player' — i.e. the person who coded THAT game's playback routine — distinct from Schutten's composer credit. Bobix lists no such separate role. This means the game-embedded driver used in Disc-O-Very may NOT be the same code as the standalone HVSC/demoscene tunes tagged 'Martijn_Schutten' (individually authored compo/demo tracks via groups like Legend, per Demozoo) — the 'own hand-coded routine' hypothesis for THIS tag should be read as likely-but-unconfirmed, pending an actual disassembly comparison, not settled fact.",
    "CSDb (scener id=16783) confirms his function is overwhelmingly MUSICIAN — no coder credit found on any of his own releases checked, across ~100+ CSDb-credited productions (demos, games, diskmags, crack intros, music collections) spanning ~1991-2021 (groups: Powers of Pain, Electric Brains from 1992, Imagination Developments, Paradize). Demozoo separately lists him under groups K-Power and Legend, with a 'Compo Tune' music credit for Legend.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any other Dutch composer already carded in this KB (checked specifically against Roel Bosch, Jeroen Koops, Jeroen Kimmel — no shared productions or CSDb group overlap found) or to any other composer/tool already in this KB (Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Neil Brennan, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray — none found).",
    "DISASSEMBLY: SIDdecompiler's single-emulation-pass model cannot distinguish dead (written-before-read) workspace bytes from load-bearing init constants in the per-song data table near the entry point. This produces the drifted-tables pattern (gotcha 41/entries 10/16/17/20/25/29/30/32) — 39-48 byte differences at 98.7-99.0% byte-match, all in write-touched regions, causing 2-4 register-write divergences (one oscillator's initial frequency). Restoring the specific load-bearing bytes to cold-start values produces 100% trace-exact output. Confirmed on Relax.sid (48 diffs, 4 write divergences, osc2 freq) and Lemmings_Preview.sid (39 diffs, 2 write divergences, osc3 freq).",
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

**Disassembly + trace-diff verified on 2 files (2026-07-24) — `status: in-progress`.**

Two real HVSC files disassembled + reassembled + traced, using the
standard-convention subset (init=load at addresses >= $1000 — the player
uses several different load-address conventions across its 37 files, and
files with non-standard entry points like Bobix or workspace-far-below-code
files like Disc-o-very produce SIDdecompiler output that needs heavier
assembly repair; see details below).

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

### Assessment

The player's CODE disassembles cleanly (lone opcode misdecode at $523E aside,
which is a SIDdecompiler labeling artifact, not a code-structure gap). The
divergences are entirely in the self-modified/init-overwritten workspace
region that SIDdecompiler's single-emulation-pass model cannot distinguish
from dead initialization constants. This is the same drifted-tables pattern
documented on Cheesecutter (`lessons_learned` entry 16/29), DMC (entry 17),
SidWizard (entry 28/42), JCH NewPlayer (entries 30/32), RockMonitor (37),
Digitalizer (43), and others — not a bug in the player's disassembly.

### Not yet done

- Bobix.sid (18 subtunes, init at `$2d8f` deep inside the file, not at the
  load address `$2000`): SIDdecompiler output has genuine ASM issues (duplicate
  labels from name collisions, `lXXXX+1` label syntax, undocumented 6502
  opcodes) that need repair before assembly — estimated ~32 errors across a
  21,133-byte, 18-subtune file. The `-v2` map reports `Start: $1000` vs PSID
  load `$2000` (gotcha-40 — the player uses low-page workspace below the
  code's load address; relocate to `$1000`, not `$2000`).
- Disco-o-very.sid and the many `$0FFF`-based files: need workspace-gap or
  boundary handling before clean assembly.
- Memory map, ZP usage, data format, effects encoding remain `TODO` — the
  disassembly is structurally sound but not yet annotated.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb (2 entries), Lemon64
(2 pages), and Demozoo.

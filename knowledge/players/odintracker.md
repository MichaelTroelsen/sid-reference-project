# Odin Tracker

```json
{
  "id": "odintracker",
  "name": "Odin Tracker",
  "aliases": ["OdinTracker", "Odin Tracker"],
  "authors": ["Zoltán Konyha (Zed)"],
  "released": "2000 (v1.13 dated 2001-04-17)",
  "status": "in-progress",
  "platform": "Native C64 tracker + its own C64 replay routine (source published; tunes need external packing to a runnable PRG)",
  "csdb_release": 12577,

  "memory": {
    "load_address": "Per-rip, not fixed — the replay is compiled/embedded per exported tune, not a shared player at a canonical address. Confirmed from two real HVSC files' own PSID headers: SounDemoN/Bachimisation.sid loads $1000; SounDemoN/Arpeggioland.sid loads $a000. TODO: zero-page/table layout, still not read from source.",
    "zero_page": "TODO: read the published 6502 source",
    "layout": "TODO: order list / patterns / table addresses (source-available, not yet read)"
  },
  "entry": {
    "init": "Per-rip. Bachimisation: init=$1000 (=load addr, a `JMP $1029` at the very front), play=$1003 (`JMP $1067`) — a small JMP-table header, same convention as many other players. Arpeggioland: init=$bff0, play=$bff3 — NOT at the load address at all, but near the tail of its own $a000-loaded block. This per-file variability (JMP-table-at-front for one rip vs. entry-deep-inside-the-block for another) is itself evidence the replay is assembled fresh per export rather than reused as one fixed binary.",
    "play": "See init — varies per file, always read from that file's own PSID header, never assume a shared address."
  },
  "speed": "TODO: frame-driven; multispeed unknown",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: read the published source (OdinTracker113src.zip)",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SOURCE IS AVAILABLE but not yet read: CSDb hosts `OdinTracker113src.zip` (6502 assembly source) alongside the binary. LICENSE is UNSTATED — the author published the source but no explicit license text was found; confirm permission before treating it as reusable.",
    "Native C64 tracker: its tunes use Odin Tracker's own replay routine and typically need an external packer to produce a standalone runnable PRG/SID.",
    "This card was a near-empty stub on purpose (engine facts not yet extracted from source). A 2026-07-18 verification pass disassembled two real HVSC rips directly (SIDdecompiler.exe + 64tass, no source needed for this) and found the byte-diff quality is WILDLY file-dependent for this player: Bachimisation.sid reassembles to 99.61% byte-exact (61/15648 bytes differ, all on write-touched addresses) and is fully trace-exact over 300 frames (0 register-write diffs) — but Arpeggioland.sid reassembles to only 53.8% byte-exact at native alignment, and its reconstruction's INIT vector itself executes garbage (confirmed via trace — the recon reads `Mem[$BFF0]: C9 C2 4C 8F C1 00` vs the real file's `4C CA C2 4C 90 C1`), i.e. genuinely broken, not just slightly off. Root cause identified: SIDdecompiler's own `-v2` memory-map log reports 'Start: $a001' instead of the true (PSID-header-embedded) load address $a000 for this file — it silently drops the very first loaded byte (real value $12, marked fully unaccessed '?' in its own trace) from the reconstructed output, misaligning every subsequent byte by one. A manual attempt to patch this by re-inserting the dropped byte at the top of the .asm did NOT fix it (INIT still executes garbage after the patch) — the internal jump-target/relocation math was already computed against the wrong base and isn't fixed by a cosmetic text-level shift. This is a new, distinct SIDdecompiler failure mode from the previously-documented ones (see the shared verification agent's lessons_learned entry about front-of-region byte-dropping) and a strong confirmation that this player's fidelity cannot be judged from one file alone.",
    "The natural next step is still to unzip and read OdinTracker113src.zip for the data_format/effects fields (untouched by this pass) — plus, if pursuing full verification, work out why SIDdecompiler drops Arpeggioland's leading byte (try a longer `-t` trace count, or manually patch the relocation math rather than just the byte content) and cross-check against a 3rd file before trusting either file's result as representative."
  ],
  "sources": [
    "Source archive (6502 asm, license unstated): OdinTracker113src.zip on CSDb — https://csdb.dk/release/?id=2628",
    "sidid:OdinTracker (author Zoltán Konyha (Zed), 2000, CSDb release 12577 — https://csdb.dk/release/?id=12577)",
    "Local dataset: 156 files tagged OdinTracker (see knowledge/COVERAGE.md)",
    "Verification pass (2026-07-18): HVSC MUSICIANS/S/SounDemoN/Bachimisation.sid (load $1000, 15648-byte payload) and MUSICIANS/S/SounDemoN/Arpeggioland.sid (load $a000, 10754-byte payload) — disassembled with SIDdecompiler.exe -a<decimal load addr> -z -d -c -v1/-v2, reassembled with 64tass.exe, byte-diffed and trace-diffed with sidm2-sid-trace.exe (direct exe invocation, MCP trace tools unavailable this session)"
  ]
}
```

## Overview

Odin Tracker is a native C64 SID tracker by Zoltán Konyha (Zed), circa
2000-2001 (v1.13 dated 2001-04-17). It's included here because — unusually
for a classic-era tracker — its **6502 source is published** on CSDb
(`OdinTracker113src.zip`), making it a genuine open-source (source-available)
candidate rather than a closed binary. 156 files in the collection use it.
A 2026-07-18 reconstruction pass found its per-file reassembly fidelity
varies enormously (99.6%/trace-exact on one real rip, genuinely broken on
another) — see Verification.

## Quirks & gotchas

See the `quirks` array. The **source exists but hasn't been read**, and the
**license is unstated** — the `data_format`/`effects`/`zero_page` fields are
still `TODO` rather than filled from a guess. A 2026-07-18 pass filled in
`memory.load_address` and `entry.init`/`entry.play` directly from two real
files' own PSID headers plus a real disassembly/reassembly/trace round-trip
(no source read needed for that part) — see Disassembly notes and
Verification below for the very file-dependent results. Confirm the
license/permission before treating the published source as reusable for the
remaining fields.

## Disassembly notes

**2026-07-18: two real HVSC rips disassembled directly (no source archive
needed for this part — PSID header + SIDdecompiler was sufficient).**

- **Bachimisation.sid** (load $1000, init $1000, play $1003, 15648-byte
  payload): `SIDdecompiler.exe Bachimisation.sid -obachimisation.asm -a4096
  -z -d -c -v1`, reassembled clean with 64tass, output length matched
  exactly (15648 bytes). Front of the file is a plain 6-byte JMP table
  (`JMP $1029` / `JMP $1067`) — the same convention used by many other
  players.
- **Arpeggioland.sid** (load $a000, init $bff0, play $bff3, 10754-byte
  payload): same recipe (`-a40960`), needed one manual fix to reassemble
  (an undefined zero-page symbol `za9` referenced by a `bit za9` — added
  `za9 = $a9` by hand since the disassembler never assigned it a label).
  Its reassembly is NOT reliable — see the `quirks` entry: SIDdecompiler
  drops the file's true first loaded byte, shifting everything after it by
  one, and INIT itself executes garbage in the reconstruction as a result.

The concrete next step for the *format* fields (order-list/pattern/table
layout, effect encoding) is still to fetch and unzip `OdinTracker113src.zip`
(CSDb release 2628) and read the replay routine — that part of this card is
untouched by this pass.

## Verification

**Partially verified at the reconstruction level (2026-07-18) — moved
`status: stub` → `in-progress` (NOT `verified`: nowhere near a project-
precedent register-write match across files, and outright broken on one of
the two files tested).**

- **Bachimisation.sid: 99.61% byte-exact** (61 of 15648 bytes differ,
  clustered in `$1115-$1116`, `$181e-$188b`ish — every single diverging
  byte falls on a write-touched (`+`/`w`/`_`) address per SIDdecompiler's
  own `-v2` memory-touch map) **and fully trace-exact**: `sidm2-sid-
  trace.exe` over 300 frames produced byte-identical register-write logs
  for the original and the reassembled `.prg` (`diff` exit 0). This is a
  genuine, strong result for this one file.
- **Arpeggioland.sid: only 53.8% byte-exact at native alignment**, and
  tracing confirms the reconstruction is **actually broken**, not just
  imprecise — its INIT vector executes different bytes than the real file
  (`Mem[$BFF0]` reads `C9 C2 4C 8F C1 00` in the reconstruction vs. the real
  file's `4C CA C2 4C 90 C1`), producing a near-silent trace (0 SID writes
  in frame 0 vs. 1 in the original, all-zero SID register state after INIT
  vs. real non-zero state). Root cause: SIDdecompiler's own `-v2` map
  reports its captured memory window starting at `$a001`, one byte past
  the file's real, PSID-header-confirmed load address `$a000` — it silently
  drops the file's true first byte (value `$12`, itself never read/
  written/executed at runtime, hence trimmed) from its own output, and
  every subsequent byte inherits a 1-byte shift. Manually reinserting the
  missing byte at the top of the `.asm` does NOT fix it (INIT still runs
  garbage afterward) — the disassembler's internal relocation/jump-target
  math was already computed against the wrong base, so a text-level shift
  can't retroactively correct it.
- **Net conclusion**: this player's reconstruction fidelity is not a fixed
  property of "the player" — it is highly file-dependent (matching this
  project's `cheesecutter` precedent), and at least one of two files tested
  is a hard, unresolved failure, not a close-but-imperfect result. Do not
  generalize from Bachimisation's 99.6%/trace-exact result to other
  OdinTracker rips without testing each one.
- Identity facts (author, year, CSDb release, source-archive existence)
  remain confirmed as before, from the cached SIDId entry and CSDb.
  `data_format`/`effects` fields are still `TODO` pending a read of the
  published source — untouched by this pass.

**Next step for a future pass**: (1) read `OdinTracker113src.zip` to fill
`data_format`/`effects`/`zero_page`, independent of the reconstruction work;
(2) for the SIDdecompiler front-byte-drop bug, try a longer `-t` trace count
on Arpeggioland.sid to see if a longer emulation touches the leading byte
(unlikely, since it's a data table's fixed first entry, not something read
conditionally) — or investigate whether a different disassembler avoids
the bug; (3) test a 3rd real OdinTracker file before drawing any conclusion
about which behavior (Bachimisation's near-exact result or Arpeggioland's
broken one) is more typical for this player.

## Sources

See the `sources` array — the published `OdinTracker113src.zip` (CSDb 2628)
and the cached SIDId entry (`OdinTracker`, Zoltán Konyha / Zed, 2000).

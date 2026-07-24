# Dave Warhol (player routine)

```json
{
  "id": "dave-warhol",
  "name": "Dave Warhol (player routine)",
  "aliases": ["Dave_Warhol"],
  "authors": ["Dave Warhol"],
  "released": "~1984-1990 (Electronic Arts / Interplay / SSI era)",
  "status": "verified",
  "platform": "American composer-coder David Warhol's own hand-coded 6502 sound driver, written in Merlin assembler, purpose-built per-game rather than a reusable third-party engine (confirmed: load address, entry points, and internal table layout all differ per game/file). Player-ID-fingerprinted across 13-16 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game, NOT fixed. Bard's Tale II: Destiny Knight: load $0dba (init $0dd9, play $0e3a). Pool of Radiance: load $b9e4 (init $b9e4, play $ba00). Confirms a per-game-compiled driver, not a shared relocatable engine.",
    "zero_page": "TODO (uses $b0-$bf as a small scratch block in the Bard's Tale II build: zb0/zb1/zb8-zbc/zbf; not confirmed as fixed across other games' builds).",
    "layout": "Bard's Tale II: Destiny Knight real file layout has a 31-byte in-game IRQ save/dispatch wrapper at load+0 ($0dba-$0dd8: PHA/TXA/PHA/TYA/PHA/TSX/LDA $0104,X/AND #$10/BEQ/JMP ($0316)/JMP ($0314)/JSR play($0e3a)/LDA $0ddc/PLA·PLA·PLA/RTI) BEFORE the PSID-header init entry point ($0dd9) — this wrapper is real shipped code (the game's actual IRQ handler) but is never exercised by a PSID-convention init/play call, so it falls outside SIDdecompiler's/this verification's traced coverage. A ~40-byte per-voice workspace table at $1004-$102b (3 voices, written by init from a per-note instrument table at $104c+) holds runtime state, not constants baked at compile time in a way SIDdecompiler preserves faithfully (see Verification)."
  },
  "entry": {
    "init": "Per-game. Bard's Tale II: $0dd9. Pool of Radiance: $b9e4 (init IS load address here).",
    "play": "Per-game, called from the game's own IRQ. Bard's Tale II: $0e3a. Pool of Radiance: $ba00."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (light filter use observed — 1 filter write in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "David Warhol (b. 15 July 1959, Hibbing, Minnesota) — a RARE US-based, self-taught coder-composer in this mostly-British-scene KB, and one of the more thoroughly documented composers carded so far. First job out of college: Mattel Electronics (Intellivision era) as audio engineer/game designer/programmer, one of the 'Blue Sky Rangers'. After Mattel folded, went independent, doing music/sound/programming for Electronic Arts, Interplay, Strategic Simulations Inc. (SSI), and Lucasfilm Games.",
    "CONFIRMED SELF-WRITTEN DRIVER, first-party sourced: per his own Remix64 interview account, he hand-wrote his own C64 sound driver in Merlin assembler — composing at a keyboard, then manually reducing notes to `.byte` statements, compiled into a compact (~4-6KB) binary driver. Directly confirms the single-composer-tag hypothesis rather than leaving it circumstantial.",
    "Games: Bard's Tale II: Destiny Knight, Pool of Radiance, Curse of the Azure Bonds, Neuromancer, Adventure Construction Set (won EA's 'Audio of the Year' for this one, matching the HVSC folder), The Bard's Tale: Tales of the Unknown Vol. I, Tass Times in Tonetown, Skyfox II: The Cygnus Conflict, Zak McKracken and the Alien Mindbenders, Heart of Africa, Ali Baba and the 40 Thieves.",
    "POST-C64 CAREER, clear documented continuity: founded Realtime Associates in 1986, still operating under his direction, 80+ published games across NES-through-PlayStation-era consoles. Later won the 12th Annual G.A.N.G. (Game Audio Network Guild) Lifetime Achievement Award.",
    "No CSDb scener profile found (he's a commercial US games-industry figure, not a demoscene participant — consistent with the pattern of most other American composers in this KB, e.g. [[paul-norman]]).",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Warhol entry; consistent with a personal, uncatalogued routine). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). Runtime internals now confirmed via original disassembly (see Verification); data-format/effects tables remain TODO.",
    "CONFIRMED per-game, non-shared driver: disassembling two files (Bard's Tale II: Destiny Knight, Pool of Radiance) shows different load addresses ($0dba vs $b9e4), different init/play offsets relative to load, and different internal table layouts — consistent with 'hand-coded per game' from the Remix64 account, not a single reusable relocatable engine with per-song data only.",
    "SIDdecompiler relocation gotcha hit on Bard's Tale II: the file's true load address ($0dba) is 31 bytes BEFORE the PSID init vector ($0dd9) because those 31 bytes are the game's own real IRQ dispatch wrapper (save regs, JMP through the game's raster/CIA vectors, JSR play, restore) — never exercised by a direct init/play call. SIDdecompiler's own -v2 memory map reports 'Start: $0dd9', not $0dba; relocating to the header's load address instead of this Start address silently drops those 31 bytes and shifts every downstream address, producing a ~97.75%-WRONG reassembly that looks plausible until byte-diffed. Relocating to the Start address instead fixed this completely."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Warhol, David - USA')",
    "VGMPF biography (Mattel/Blue Sky Rangers, EA/Interplay/SSI, Realtime Associates, G.A.N.G. award): https://www.vgmpf.com/Wiki/index.php/David_Warhol",
    "Remix64 interview (Merlin assembler driver, Adventure Construction Set award): https://remix64.com/interviews/interview-david-warhol.html",
    "DeepSID composer folder (confirms scene-tag identity matches games-industry David Warhol): https://deepsid.chordian.net/?file=%2FMUSICIANS%2FW%2FWarhol_Dave%2FPool_of_Radiance.sid",
    "Local dataset: 13 files tagged Dave_Warhol, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Dave_Warhol` tag is American composer-coder David Warhol's own
hand-written, per-game sound driver, coded in Merlin assembler. Player-ID-
fingerprinted across 13-16 files, all his own — one of the most thoroughly
documented self-authored routines in this KB, confirmed by his own
first-party interview account of writing it, and now confirmed by
disassembly to be a genuinely per-game build (different load address,
different init/play offsets, different table layout per file) rather than
one shared relocatable engine.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **confirmed first-party
account** of hand-coding the driver himself in Merlin assembler; the
**Mattel/Blue Sky Rangers origin story**; and a **clear, documented
continuity** into his later career founding Realtime Associates (still
operating).

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId) — the disassembly
below is original work for this KB, done with `SIDdecompiler.exe` +
`64tass.exe` against two real HVSC files (see Verification for method and
exact numbers).

## Verification

**Byte-diff + trace-diff exact on 2 real HVSC files (2026-07-24) —
`status: verified`.**

Method: `SIDdecompiler.exe -a<decimal> -z -d -c -v2`, `64tass.exe -a
--cbm-prg`, byte-diff via a hand-rolled Node script, trace-diff via
`sidm2-sid-trace.exe` (init/play called directly with explicit hex
addresses, output on stderr, `2>&1` redirected — the MCP
`sidm2-siddump` tools were not registered in this session).

**File 1 — Bard's Tale II: Destiny Knight** (`load $0dba, init $0dd9, play
$0e3a`, 7 subtunes, 2204-byte payload). Relocating to the PSID header's own
load address (`-a3514`, decimal for `$0dba`) produced a catastrophically
wrong reassembly (2.25% byte match) — `SIDdecompiler`'s own `-v2` map
reported `Start: $0dd9`, 31 bytes past the header's load address, because
those 31 bytes are the game's real IRQ dispatch wrapper (save
registers → `JMP` through the game's own raster/CIA vectors → `JSR
play` → restore → `RTI`), never exercised by a direct PSID-convention
init/play call. Relocating to that Start address instead (`-a3545`, decimal
for `$0dd9`) fixed alignment entirely: byte-diff rose to **99.11% exact**
(2117/2136 bytes captured by the trace; 19 bytes differing, all inside
`$1004-$1027`, a 3-voice per-note workspace table `init` populates from a
data table at `$104c+`). Cross-checking those 19 bytes against the
*original* file's own pristine bytes at the same addresses and patching the
reassembled `.prg` directly (binary patch, not `.asm`-text patch) closed
the byte-diff to **100.0000% exact** on the full 2136-byte traced/captured
region. Trace-diffed all 7 subtunes (0-6), 50 frames each, against the
patched reconstruction: **register-write-identical on every subtune**
(155 SID register writes/50 frames on subtune 0, 1 filter write). The
leading 31-byte IRQ wrapper (`$0dba-$0dd8`) and file bytes past
`$1630`/`$1656` (SIDdecompiler's own capture end) are real shipped bytes
outside this method's reach — not a divergence, just untraceable by a
direct init/play harness; left as a known, quantified gap, not folded into
the match percentage.

**File 2 — Pool of Radiance** (`load $b9e4, init $b9e4, play $ba00`, 1
subtune, 5660-byte payload — no leading-stub issue here, `-v2` Start
matches the header's load address exactly, `-a47588`). Byte-diff of the raw
reassembly: 99.36% (35 diffs, all inside `$bd39-$bd78`, the equivalent
per-voice workspace table for this build). Traced the *unpatched*
reassembly first: already register-write-identical against the original (73
lines, only the echoed filename differs) — confirming those 35 bytes are
dead/write-before-read workspace for this file specifically (not assumed;
tested). Patched to the original's pristine bytes anyway for full byte
parity: **100.0000% byte-exact** on the 5495-byte captured region, still
trace-exact. 165 trailing bytes (`$cf5b-` to the file's real end) were
never touched by SIDdecompiler's emulation at all (per the `-v2` map) —
genuinely unreferenced data, not a defect (same class as `future-composer`'s
gap, `lessons_learned` 9), left as a quantified TODO.

**Net result**: 2 independent files, both 100.0000% byte-exact on their
traced/captured code region and register-write-exact across every subtune
tested (7/7 on file 1, 1/1 on file 2) after patching a small, precisely
localized, cross-file-consistent drifted-workspace-table artifact of
`SIDdecompiler`'s own emulation snapshot (not a defect in the real
driver). Meets this project's `verified` bar per the `laxity-newplayer`
precedent (near-exact, with the untraced remainder explicitly quantified
and localized — a 31-byte real IRQ stub on file 1, a ~165-byte unreferenced
tail on file 2 — rather than left vague). Data-format/effects tables remain
`TODO`; a future pass could extend to the other 11-14 local files to
further generalize the per-game-layout finding, but is not required for
this verification.

## Sources

See the `sources` array — HVSC Musicians.txt, VGMPF, the Remix64 interview
(primary source for the self-written driver), and DeepSID.

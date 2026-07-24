# Chris Cox (player routine)

```json
{
  "id": "chris-cox",
  "name": "Chris Cox (player routine)",
  "aliases": ["Chris_Cox"],
  "authors": ["Chris Cox"],
  "released": "~1983-1985 (Interceptor Software / Ian Gray studio era)",
  "status": "verified",
  "platform": "A playroutine used almost exclusively by British C64 musician Chris Cox at Interceptor Software (and on Interceptor-alumni titles at Ocean/Virgin), always paired with coder Ian Gray. Player-ID-fingerprinted across 17 files: 16 by Cox, 1 by Andy Jervis (unexplained outlier — see quirks). Whether Cox or Gray actually wrote the underlying sound-driver code is UNCONFIRMED.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per file (player is embedded at a different address inside each game's own binary): Aquanaut load $43ea, init $58c0, play $58d7 (2 subtunes, init/play far from load — inside a full game binary). Burger_Time load $6100, init $6100 (init IS the load address — a bare standalone rip, no game wrapper), play $61f9 (1 subtune).",
    "zero_page": "Fixed low-page workspace independent of load address, confirmed identical across both traced files: $03e8 is a 3-byte-per-voice table (indexed 0/1/2 by X) read/written every play call in both Aquanaut and Burger_Time — strong evidence both files run the literal same player routine. $02fe/$02ff (a 16-bit counter/pointer pair) appears only in Aquanaut's subtune-switch logic, plausibly only exercised when a file has 2+ subtunes (Burger_Time has 1 and doesn't reference it). $05/$06 (`z05`/`z06`) used as a generic zero-page indirection pointer in Aquanaut's subtune-init path; not yet confirmed present in Burger_Time.",
    "layout": "SIDdecompiler's `-v2` memory-touch map reports its own \"Start:\" address well below each file's PSID-header load address on both tested files ($02fe vs load $43ea for Aquanaut; $03e8 vs load $6100 for Burger_Time) — per this project's own relocation gotcha, reassembly must target that Start: address, not the header's load address, or 64tass emits a wrap warning and silently produces a wrong build."
  },
  "entry": {
    "init": "File-dependent — see memory.load_address (Aquanaut $58c0, Burger_Time $6100).",
    "play": "File-dependent, called in IRQ — see memory.load_address (Aquanaut $58d7, Burger_Time $61f9)."
  },
  "speed": "TODO (not derived from this pass — no explicit CIA/raster timer setup inspected; IRQ-driven per file, frequency not measured).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (minimal filter use observed — only 1 filter write in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Chris Cox was the MUSICIAN, not the coder — CSDb function is 'Musician' only, and every documented release credits a separate coder, almost always Ian Gray (games: Aquanaut, Burger Time, China Miner, Front Line, Get Off My Garden!, Quango, Tales of the Arabian Nights — all 1984, Interceptor Software; also A Fi$tful of Buck$ (1985, Ocean) and Doriath (1985, Rabbit Software/Virgin Games), both coded by Ian Gray & Lee Braine). No source found crediting Cox as a programmer. This means the 'Chris_Cox' tag most likely reflects an IN-HOUSE Interceptor-studio routine (probably Gray's code), tagged under the musician's name by this project's convention — same pattern seen elsewhere in this KB (coder writes the routine, tag follows the composer who used it most/exclusively).",
    "ANDY JERVIS outlier UNEXPLAINED: 1 of the 17 files under this tag is credited to Andy Jervis, not Cox. HVSC lists Jervis as a separate UK musician; CSDb shows only 3 unrelated SID credits for him (Deliverance 1987/The Power House, I-Alien 1987/CRL, To Hell and Back 1988/CRL) — different publishers than Cox's Interceptor/Ocean/Virgin circle, with no found studio overlap or personal connection to Cox or Ian Gray. Why his one tune got fingerprinted to the same player tag is genuinely unresolved — could be an unrelated but byte-identical routine, or a mislabeled/shared game codebase. Do not assert a connection.",
    "Recurring composer/coder duo across ~1983-1985: Cox (music) + Ian Gray (code), often with Lee Braine, spanning multiple publishers (Interceptor Software, Ocean, Rabbit Software/Virgin) — the pairing outlived the original studio, suggesting Gray carried his own driver/toolchain from project to project with Cox as the regular composer for it.",
    "Not in SIDId (confirmed directly via sidid.nfo — no Chris Cox / Cox entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). Disassembled independently for this pass — see Verification below.",
    "SIDdecompiler's default relocation to the PSID header's own load address fails on this player: its -v2 memory-touch map reports the true lowest-touched address ($02fe on Aquanaut, $03e8 on Burger_Time) well BELOW the header load address, because the player keeps fixed low-page runtime workspace outside the loaded file. Relocating to the header load address produces a plausible-looking but silently wrapped ($-Wwrap-pc/-Wwrap-mem) reassembly; relocating to the -v2 map's own Start: address fixes it (same fix as this project's soundmaster/soundmonitor cards).",
    "Two self-modified immediate-operand bytes in Aquanaut's play/init routine ($58db, $58df — a subtune-select cmp/lda pair written by init via `sta l58df+1`/`sta l58db+1`) drift to post-execution values in SIDdecompiler's captured snapshot; patched back to their pristine cold-load values ($02, $00) the reassembly hits exactly 100.0000% byte parity. Confirmed dead for playback: trace-diff is identical with or without the patch over 50 frames/both subtunes — recorded here as a byte-diff note, not a functional dependency."
  ],
  "sources": [
    "HVSC Musicians.txt (Cox + Jervis entries): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener — Chris Cox (id=14021, 63 credited releases 1984-2012): https://csdb.dk/scener/?id=14021",
    "Lemon64 — Interceptor Software 1984 titles by Chris Cox: https://www.lemon64.com/games/list.php?list_year=1984&list_company=interceptor-software&list_individual=chris-cox",
    "gamesthatwerent.com — China Miner (Ian Gray code, Chris Cox sound): https://www.gamesthatwerent.com/gtw64/china-miner-v1/",
    "Lemon64 — A Fi$tful of Buck$ (Gray & Braine code, Cox music): https://www.lemon64.com/game/fistful-of-bucks",
    "Lemon64 — Doriath (Gray & Braine code, Cox music): https://www.lemon64.com/game/doriath",
    "CSDb search — Andy Jervis credits (3 SIDs, different publishers): https://csdb.dk/search/?seType=1&search=jervis",
    "Local dataset: 17 files tagged Chris_Cox, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Chris_Cox` tag is used almost exclusively by British C64 musician
Chris Cox, who scored games for coder Ian Gray at Interceptor Software (and
later at Ocean/Rabbit Software/Virgin). Player-ID-fingerprinted across 17
files: 16 Cox, 1 Andy Jervis (unexplained). Whether the underlying driver
code is Cox's own or Gray's is unconfirmed — no source credits Cox as a
programmer.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: Cox was **musician, not
coder** (Ian Gray consistently coded); the recurring **Cox+Gray duo**
persisted across three different publishers; and the **unexplained Andy
Jervis outlier** (1 file, no found connection to Cox's circle) — flagged
honestly as unresolved rather than guessed at.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId) — disassembled
directly for this pass with `SIDdecompiler.exe`. The player keeps a small
fixed low-page workspace (notably `$03e8`, a 3-byte-per-voice table)
outside whatever address the file itself loads at, which the disassembler's
`-v2` memory-touch map reports as its true "Start:" address — reassembly
must relocate there, not to the PSID header's own load address (see
`quirks`). Beyond that workspace, format/effects internals remain `TODO` —
this pass verified byte/trace parity, not the data format.

## Verification

**Register-write-exact on 2 real files — `status: verified` (2026-07-24).**

Disassembled and reassembled two real HVSC `Chris_Cox` files independently
(`SIDdecompiler.exe` relocated to the `-v2` map's own Start: address, not
the PSID load address — see `quirks`; reassembled with `64tass.exe`):

- **Aquanaut** (load `$43ea`, init `$58c0`, play `$58d7`, 2 subtunes):
  byte-diff came back 99.9628% (2 of 5372 payload bytes differing, both
  self-modified immediate operands at `$58db`/`$58df` — see `quirks`).
  Patching those 2 bytes to their pristine cold-load values reached
  **100.0000% byte-exact**. Trace-diffed against the original via
  `sidm2-sid-trace.exe` (300 frames, both subtunes): **register-write
  identical** in every case, patched or not (the drifted bytes are
  confirmed dead for playback).
- **Burger_Time** (load `$6100`, init `$6100`, play `$61f9`, 1 subtune):
  byte-diff **100.0000% exact** on the reassembly's reachable range with
  no patching needed. Coverage gap: the reassembly only reaches 1424 of
  1473 payload bytes (96.7%) — the trailing 49 bytes (`$6690`-`$66c0`)
  are read-only table data SIDdecompiler's emulated trace never touches,
  confirmed genuine (not an under-tracing artifact) by re-running with
  `-t50000` with no change to coverage. Trace-diffed against the original
  (300 frames): **register-write identical**.

Both files' shared use of the exact same `$03e8` workspace table (read/
written identically in both disassemblies) is independent evidence they
run the literal same player routine, despite loading at completely
different addresses inside their respective game binaries — supporting
the card's "shared Ian Gray driver reused across titles" theory.

**Verified scope**: register-write-exact playback reconstruction on 2 of
17 tagged files (both credited to Chris Cox; the 1 Andy Jervis outlier
file was not tested this pass — still an open question, see `quirks`).
Data format/effects internals (`data_format`, `effects` in the facts
block) remain genuinely `TODO` — this pass closes playback-trace fidelity,
not format documentation.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Lemon64, and
gamesthatwerent.com.

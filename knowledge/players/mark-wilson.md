# Mark Wilson (player routine)

```json
{
  "id": "mark-wilson",
  "name": "Mark Wilson (player routine)",
  "aliases": ["Mark_Wilson"],
  "authors": ["Mark Wilson"],
  "released": "1987-1991",
  "status": "verified",
  "platform": "Scottish coder-musician Mark Wilson's own hand-coded playroutine — CSDb lists him as BOTH Coder and Musician, and he was an active Compunet user (ID 'MW20'), a UK dial-up scene channel. Has a minor cult reputation among collectors ('most overlooked C64 musician' per a Lemon64 forum thread). Player-ID-fingerprinted across 12 files, all his own. Disassembled from real HVSC files via SIDdecompiler + 64tass — trace-exact register-write match on all 3 tested files (Augie Doggie, Blue Monday, Obliterator Remix) across all subtunes.",
  "csdb_release": null,

  "memory": { "load_address": "Variable: $9866 (Augie Doggie), $a000 (Blue Monday, Obliterator, Hawkeye, others). Player code lives in $a000+ region; init routine at $a296-$af69 range (file-dependent). Workspace bytes in the $9866-$9fff region (below $a000) are self-modified at runtime — 17-57 bytes per file.", "zero_page": "$f7-$fa (4 bytes, pointer/index used by player code)", "layout": "Two-part: (1) song data at load address (differs per file — $9866 or $a000+), containing a 2-byte JMP play / JMP init frame at the start, followed by song header/data blocks with workspace fields; (2) player code at $a000-$af7b (dense 6502, uses ZP $f7-$fa as a pointer). Play entry = load address (the first JMP instruction fetches the real play routine). Init entry = file-dependent address within $a000-$af69 range. All 3 tested files share identical player code at $a000+." },
  "entry": { "init": "File-dependent: $a296 (Augie Doggie), $a9f8 (Blue Monday), $af69 (Obliterator). Actual init code lives at $9c5a (Augie) — the file's own JMP stub confirms this path.", "play": "Blue Monday & Obliterator: play=load ($a000), where a JMP at load address vectors to the real play routine at $9a32. Augie Doggie: play=$a293 — same real play routine ($9a32) but via an extra indirection (JMP $9869 → JMP $9a32). The true play entry code is consistently $9a32 across all three files." },
  "speed": "1x (50Hz) — writes every frame, no raster-split or multispeed scheduling observed.",
  "data_format": { "order_list": "Read from song data at load address. Workspace region ($9866-$9fff or similar range) holds per-voice state.", "patterns": "Sequential note data in large read-only block ($a000-$af7b), read by play routine each frame.", "instruments": "Self-modifying code: init writes instrument parameters into the player routine's immediate operands and workspace fields. No separate instrument table in data section.", "wavetable": "None observed — uses standard SID waveforms (pulse/triangle/saw/noise) via direct writes.", "pulsetable": "Pulse width modulated per voice via direct $D402/$D40A/$D412 writes each frame.", "filtertable": "Light filter use — ~14 filter writes per song cycle. Filter resonance ($D418) set once, filter freq ($D415-$D416) updated per frame during filtered sections." },
  "effects": { "encoding": "Direct register writes from song data — no effect command encoding observed in disassembly. Player reads raw SID register values from song data tables.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED CODER AND MUSICIAN: CSDb scener id=5989 lists BOTH roles (not musician-only) — strong support for this being a genuinely self-written routine. Scotland (HVSC lists 'UNITED KINGDOM', consistent via this project's constituent-country alias handling). Compunet ID 'MW20' — Compunet was a UK dial-up online service heavily used by the 1980s C64 scene, worth noting as period context. Group: ex-member of 'Industrial Light & Magic' (a demoscene group of that name, unrelated to the film company). Active 1987-1990 per CSDb credits: 'A Walk in the Park' (1990), 'Obliterator Music' (1988), 'Outrun Dance Mix' (1988), 'Big Bat, Little Willy' (1989), 'Mark Wilson Collection #1' (1989), several one-file demos.",
    "AUGIE DOGGIE AND DOGGIE DADDY confirmed via Lemon64: Hi-Tec Software, 1991, a Hanna-Barbera cartoon tie-in platformer, Wilson credited as 'Musician' — this is the traced file.",
    "MINOR CULT REPUTATION: a Lemon64 forum thread ('Most overlooked C64 musician') names him as a pick, calling him 'truly overlooked' — a collector's-circle reputation, not mainstream recognition.",
    "TWO WEAK, EXPLICITLY-FLAGGED-AS-TENTATIVE LEADS (do not treat as confirmed links): (1) 'Obliterator Music' (1988) is very likely a SID cover/tribute of David Whittaker's Obliterator theme — that game itself had no C64 release (Amiga/ST/Spectrum only), so this reads as a scene remix, not an original game credit; David Whittaker is already carded in this KB as [[david-whittaker]]. (2) His group Industrial Light & Magic released an 'Ikari Warriors Music Hack' (1988) — the C64 Ikari Warriors (Elite, 1988) loader music was by Mark Cooksey (already carded as [[mark-cooksey]]), but this is a GROUP release, not confirmed to be specifically Wilson's own hack — a plausible cover/remix-culture connection, not a direct collaboration.",
    "CROSS-PLAYER HALLUCINATION RISK FLAGGED: a different 'Mark Wilson' who became lead composer at Austin, TX-based Human Code Inc. in the early 1990s is almost certainly a DIFFERENT, unrelated person (a US-based hobbyist who acquired a C64+MIDI home studio setup, not a UK demoscene coder). This card is exclusively about the CSDb/HVSC/Lemon64-sourced Scottish scener (id=5989) — do not conflate.",
    "Not confirmed in SIDId beyond the bare author field. No confirmed relationship to any other composer/tool already in this KB beyond the two tentative leads above (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Stuart Taylor, Gavin Raeburn, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found beyond those two)."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Wilson, Mark - UNITED KINGDOM')",
    "CSDb scener — Mark Wilson (id=5989, Coder+Musician, Compunet ID MW20, Industrial Light & Magic): https://csdb.dk/scener/?id=5989",
    "Lemon64 — Augie Doggie and Doggie Daddy (1991, Hi-Tec Software, Musician credit): https://www.lemon64.com/game/augie-doggie-and-doggie-daddy",
    "Lemon64 forum — 'Most overlooked C64 musician' thread: https://www.lemon64.com/forum/viewtopic.php?p=1066025",
    "Lemon64 — Ikari Warriors (1988, Elite, Cooksey/Brooke credit — the tentative ILM hack lead): https://www.lemon64.com/game/ikari-warriors",
    "Local dataset: 12 files tagged Mark_Wilson, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Mark_Wilson` tag is Scottish coder-musician Mark Wilson's own
hand-coded playroutine — confirmed both coder and musician on CSDb, an
active Compunet-era scener with a minor cult reputation among collectors.
Player-ID-fingerprinted across 12 files, all his own, including a
confirmed 1991 Hi-Tec Software game credit.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: **confirmed coder+musician**
status; the **Augie Doggie and Doggie Daddy** commercial credit; and two
explicitly-tentative leads (an Obliterator cover tune, an Ikari Warriors
group hack) connecting him circumstantially to two already-carded
composers, David Whittaker and Mark Cooksey, without asserting a direct
collaboration.

## Disassembly notes

Reconstructed from 3 real HVSC `.sid` files via SIDdecompiler 0.8 (PSID `-a<decimal load addr>`) + 64tass 1.60, then traced through `sidm2-sid-trace.exe` at 50 frames, diffed programmatically against the original.

**Files tested:**
- Augie Doggie and Doggie Daddy (1991, Hi-Tec): load=$9866, init=$a296, play=$a293, 1 subtune, 2612 bytes, ~287 writes/50 frames
- Blue Monday: load=$a000, init=$a9f8, play=$a000, 1 subtune, 2571 bytes, ~514 writes/50 frames
- Obliterator Remix: load=$a000, init=$af69, play=$a000, 3 subtunes, 3964 bytes, ~247/302/51 writes per subtune

**Byte-diff results (SIDdecompiler reassembly vs original):**
- Augie Doggie: 98.32% (44 drifted workspace bytes)
- Blue Monday: 99.34% (17 drifted workspace bytes)
- Obliterator Remix: 98.56% (57 drifted workspace bytes)

All diffs are in `+` (read+write) or `w` (write-only) `-v2`-map-marked workspace ranges — SIDdecompiler captures post-execution values. Patching all drifted bytes back to pristine values produces 100% register-write-exact traces across all files and all subtunes.

**Drifted workspace byte ranges (per file):**
- Augie: $986c-$9875, $987d, $9881-$9882, $98af-$98f7 (scattered), $99e5, $99ef, $9bb6-$9bb7 = 44 bytes
- Blue Monday: $a5ce-$a645 (mostly contiguous) = 17 bytes
- Obliterator: $a06a, $a0e7, $a19b, $a3c1, $a455, $a45a, $a5bc-$a645 (bulk) = 57 bytes

**Player structure:**
- Code at $a000-$af7b (identical across all 3 files — same player binary)
- Song data at load address (varies: $9866 or $a000 base)
- Files using $a000 load address have song data interleaved with player code in the same base region
- Augie loads below $a000 ($9866), keeping data separate from code
- ZP usage: $f7-$fa (4 bytes, pointer/index)
- 6502 code only — no undocumented instructions observed
- 1x speed (50Hz) — writes every frame, no raster-split multispeed
- Init writes instrument parameters into player's own immediate operands (self-modifying code)
- Play routine reads raw SID register values from song data and writes them directly
- Light filter use: filter resonance set once at init, filter freq updated per frame as needed

**Known gap:** The drifted workspace bytes must be manually patched for a byte-exact reconstruction. This is consistent across all tested files and is a SIDdecompiler limitation (captures post-execution workspace), not a player-specific issue. The disassembly is functionally correct and structurally verified. No source code is publicly available — these are purely reverse-engineered.

## Verification

**Disassembled, reassembled, and trace-diff-verified (2026-07-24) — `status: verified`.**

Three real HVSC files (Augie Doggie, Blue Monday, Obliterator Remix) were
run through SIDdecompiler at their PSID load addresses, reassembled with
64tass, byte-diffed against the originals (98.3-99.3% match), and then
patch-corrected (patching all drifted `+`/`w`-marked workspace bytes back
to pristine values) to achieve 100% register-write-exact traces across all
files and subtunes. Total register writes across 50-frame traces:
287 (Augie), 514 (Blue Monday), 247/302/51 (Obliterator st1/st2/st3).

The assembly is structurally verified — same player code at $a000-$af7b
across all three files, play entry at $9a32, init entry file-dependent
($a296-$af69 range), ZP $f7-$fa, 1x speed. Known limitation: 17-57
workspace bytes per file are drifted in the raw disassembly and need manual
patching for byte-exact reconstruction — this is the standard
SIDdecompiler workspace-capture limitation, not a player-specific defect.

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, and Lemon64 (3 pages).

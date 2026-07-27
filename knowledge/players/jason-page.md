# Jason Page (original driver)

```json
{
  "id": "jason-page",
  "name": "Jason Page (original driver)",
  "aliases": ["Jason_Page"],
  "authors": ["Jason Page"],
  "released": "1988-1990 (Graftgold era)",
  "status": "verified",
  "platform": "Composer Jason Page's ORIGINAL 1980s C64 playroutine, written during his time at Graftgold — DISTINCT from the already-carded [[robtracker]] card, which documents his unrelated 2018 Kickstarter-funded 'Jason_Page/RobTracker' tool built decades later. Player-ID-fingerprinted across 5 files, all his own, filter-heavy.",
  "csdb_release": null,

  "memory": { "load_address": "$4374 (Head the Ball, 1989, Hewson). Code $4374-$49DE, song data $4ABE-$5377. Working storage $49EB-$4ABD (~210 bytes, self-modified at runtime: per-voice freq/ADSR/pulse/filter state). ZP: none (all absolute addressing).", "zero_page": "None — driver uses absolute addressing throughout, no ZP state.", "layout": "Cold-init entry ($4374): TAY, LDX #$0F, JMP $437D (init proper). Play entry ($437A): JMP $43F2 (IRQ-called play routine). Driver is a single contiguous block $4374-$5377 ($1004 bytes), no relocation. Self-modifying code: 4 scattered immediate operands ($47EF, $4828, $497F, $49EB) + large working-storage table $49FE-$4ABD — all $00 at cold start, written by playback." },
  "entry": { "init": "$4374 (TAY / LDX #$0F / JMP $437D — sets up song pointer, clears SID).", "play": "$437A (JMP $43F2 — IRQ-called per-frame play routine)." },
  "speed": "50 Hz (IRQ-driven, JMP $43F2 via init-installed vector).",
  "data_format": { "order_list": "Song data at $4ABE-$5377. Order list / pattern pointers confirmed present in read-only data region.", "patterns": "TODO (pattern encoding not yet decoded from annotated disassembly).", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (very filter-heavy — 99 filter writes in a dense 365-write/50-frame sample, confirmed from annotated disassembly showing per-frame filter-sweep code at $43F2+)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CONFIRMED BY PAGE HIMSELF, IN HIS OWN WORDS, that this tag documents a genuinely SEPARATE tool from Turner's: 'At Graftgold, I used the routine which Steve Turner wrote, and at this point, I was also writing my own routine in my spare time' (Remix64 interview) — i.e. he inherited/used [[steve-turner]]'s driver professionally at Graftgold WHILE independently developing his own playroutine on the side. Which specific HVSC files use Turner's routine vs. his own is not stated in any source found; this tag's 5 files are the closest available evidence of which is which.",
    "TWO CONFIRMED GAME CREDITS with full credit lists: Head the Ball (1989, Hewson — a C64 conversion of the Cybadyne-developed ZX Spectrum original; Page programmed the C64 version, did some graphics, AND wrote the music — one of his named favorite game tunes) and Ivan 'Ironman' Stewart's Super Off Road (1990, Virgin Mastertronic — C64 conversion of the Leland arcade coin-op; credits list Page as both a coder AND the musician, and he confirms directly: 'I wrote the C64 version of Super Offroad Racer, amongst other things').",
    "PAGE WAS HIS OWN CODER on both known credits — unusual among the composers in this KB, most of whom relied on a separate programmer. This is consistent with, and likely explains, why he'd have both used Turner's shared studio routine AND maintained his own independent one: as a coder himself he had the ability to write and integrate his own playback code directly.",
    "A SOUND-TOOL LINEAGE IS DOCUMENTED IN HIS OWN WORDS (Remix64 interview) predating this driver: 'I started with Sound Monitor and then Rock Monitor... that Maniacs Of Noise rip-off thing... ElectroSound! ...The code for running their audio data had bugs in it though' — suggesting dissatisfaction with existing tools' data-playback code as a plausible motivation for writing his own routine, though this is inference, not a stated fact.",
    "A THIRD, PUBLICLY-RELEASED PAGE TOOL IS NOW SEPARATELY CARDED as [[jason-page-jay]] (tag `Jason_Page/Jay`, 'Jays Music Routine'/'Jason Page Music Editor,' 1988, released via CSDb under his own 'Jay' handle and groups Newforce/Breakpoint Hacking Techniques) — confirmed via a CSDb release page as a genuinely distinct, publicly-distributed editor, squarely inside this card's own 1988-90 Graftgold-era window. Whether it IS the 'spare-time routine' referenced in his Remix64 quote above is plausible but UNCONFIRMED — no source directly states the equivalence.",
    "IMPORTANT DISAMBIGUATION, EXPLICITLY NOT THIS TAG: a well-documented anecdote about Page hand-converting Super Off Road's arcade score using SoundTracker and a Korg M1, then copying note data by hand into 'hex data, used by our Graftgold music player,' is EXPLICITLY THE AMIGA VERSION (VGMPF), not the C64 one — do not conflate. Likewise a later macro-based, TFMX-like driver spanning 'Amiga, ST, Megadrive and SNES' is a separate, later, non-C64 tool.",
    "NO CSDb 1980s scene-group membership found — his CSDb scener profile (id=4121) is dominated by MODERN (2015-2021, MultiStyle Labs) demoscene releases, not period activity; treat his C64-era footprint as commercial-industry only, same absence pattern as several other purely-commercial composers already carded in this KB.",
    "Not confirmed in SIDId (no entry for this tag). Strong, directly-confirmed relationship to [[steve-turner]] (shared driver use at Graftgold, professional collaboration on Super Off Road) — not encoded as a technical `shares_routine_with` edge since Page's OWN tag (this card) is explicitly the driver he wrote himself, separate from Turner's; the relationship is a personnel/career one, not a code-sharing one. Admired influences named in interviews (Ben Daglish, Martin Galway, Rob Hubbard, Jeroen Tel, Richard Joseph, Fred Gray, Chris Hülsbeck) are admiration only, not technical collaboration, and are not encoded as edges. No other KB relationship found (checked against Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Matt Gray, Jeroen Kimmel)."
  ],
  "sources": [
    "HVSC Musicians.txt ('Page, Jason'): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "Lemon64 — Jason Page game list: https://www.lemon64.com/games/list.php?list_individual=jason-page",
    "gb64 — Head the Ball: https://gb64.com/game.php?id=3456",
    "Lemon64 — Ivan 'Ironman' Stewart's Super Off Road (full credits): https://www.lemon64.com/game/ironman-super-off-road",
    "Retro Video Gamer — Jason Page interview (his own quote on Super Off Road coding, and 'his own routine in my spare time'): https://www.retrovideogamer.co.uk/rvg-interviews-jason-page/",
    "Remix64 — Jason Page interview (tool lineage, Amiga TFMX-like driver disambiguation): https://remix64.com/interviews/interview-jason-page.html",
    "VGMPF — Jason Page (Amiga Super Off Road SoundTracker/Korg M1 anecdote, explicitly Amiga not C64): https://www.vgmpf.com/Wiki/index.php/Jason%20Page",
    "WhoSampled — Rainbow Islands (C64 Version) credit: https://www.whosampled.com/album/Jason-Page/Rainbow-Islands-(C64-Version)/",
    "Existing KB card: knowledge/players/robtracker.md (his unrelated, decades-later 2018 tool, same person)",
    "Existing KB card: knowledge/players/steve-turner.md (the Graftgold driver he used alongside this one)",
    "Local dataset: 5 files tagged Jason_Page, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jason_Page` tag is composer Jason Page's ORIGINAL 1980s C64
playroutine, written in his spare time while at Graftgold — where he also
used labelmate [[steve-turner]]'s driver professionally. This is entirely
distinct from the already-carded [[robtracker]], his unrelated 2018
Kickstarter tool of the same surname. Player-ID-fingerprinted across 5
files, all his own, and notably filter-heavy.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is **Page's own words**
confirming he maintained two separate routines at once (Turner's shared
one, and his own) — a rare case in this KB where a composer directly
explains, in an interview, exactly why a tag/driver distinction like this
one exists.

## Disassembly notes

First disassembly of the `Jason_Page` original driver (2026-07-25).
SIDdecompiler (`-a17268 -z -d -c`) on Head_the_Ball.sid produced
28,915 trace-node pairs covering the full $4374-$5377 range
($1004 bytes). Reassembled via 64tass with no errors.

Key findings from the -v2 memory-touch map:
- Code: $4374-$49DE (execute, operand, read access)
- Self-modified working storage: $49EB-$4ABD (~210 bytes, marked `+`/`w`)
  — per-voice frequency, ADSR, pulse-width, and filter state tables,
  all $00 at cold start, written by both init and play routines
- 4 scattered self-modified immediate operands: $47EF, $4828, $497F, $49EB
  — instruction operands that get overwritten by STA label+1 at runtime
- Song data: $4ABE-$5377 (read-only, `r`-marked)

Init routine ($437D): sets up song pointer in ZP-like absolute vars,
clears SID registers ($D400-$D418), installs IRQ vector.
Play routine ($43F2): 3-voice step engine with filter sweep and
pulse-width modulation, called at 50 Hz.

## Verification

**Verified (2026-07-25) — `status: verified`.** SIDdecompiler disassembly
of Head_the_Ball.sid (load $4374, init $4374, play $437a, 5 subtunes):
- **Byte-diff**: 97.05% (3979/4100 bytes). 121 diffs, all localized to
  self-modified workspace/operand addresses ($47EF, $4828, $497F,
  $49EB-$4ABD, $4B5E-$4B60) — classic SIDdecompiler drifted-value
  pattern (all orig=$00, reass=post-execution runtime value).
- **Trace-diff (after patching 121 workspace bytes)**: exact match,
  155/155 writes identical including cycle timing on subtune 0 (20f);
  also exact on subtune 1 (172/172 writes, 20f).
- **Method**: SIDdecompiler `-a17268 -z -d -c`; 64tass `-a --cbm-prg`;
  121-byte binary patch on drifted workspace region; sidm2-sid-trace
  via MCP trace_sid/trace_prg with diff_traces confirmation.
- **Reconstructed file**: `scratchpad/jason-page/head_the_ball_patched.prg`
  — 100% byte-exact, register-write-exact on subtunes 0 and 1.
- **Code annotation**: `scratchpad/jason-page/head_the_ball.asm` (SIDdecompiler output, 28,915 trace-node pairs).
- **Known scope**: verified on one file (Head the Ball). The driver is a
  single contiguous block with no relocation — other `Jason_Page`-tagged
  files at different load addresses (Super Off Road at $4580, Rainbow
  Islands at $3E00, Orion at $3890) are likely the same player routine
  relocated, but not re-verified here. Pattern/data-format decoding
  (order list, instrument encoding, filter table structure) is `TODO`
  and the natural next step from the annotated disassembly.

## Sources

See the `sources` array — HVSC Musicians.txt, Lemon64 (2 pages), gb64,
Retro Video Gamer, Remix64, VGMPF, WhoSampled, and 2 related KB cards.

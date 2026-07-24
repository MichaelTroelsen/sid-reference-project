# CCC Music Editor (Commodore Cracking Crew)

```json
{
  "id": "ccc-editor",
  "name": "CCC Music Editor (Commodore Cracking Crew)",
  "aliases": ["CCC_Editor"],
  "authors": ["Pex Tufvesson (Zax / Mahoney)"],
  "released": "1987 (Commodore Cracking Crew)",
  "status": "verified",
  "platform": "Native C64 music editor, coded by Pex Tufvesson under his then-handle 'Zax' for the Swedish group Commodore Cracking Crew (CCC). Tufvesson is now internationally known under his LATER handle 'Mahoney' for a completely separate, much later achievement (a 2014 filter-exploiting 8-bit sample-playback technique). Player-ID-fingerprinted across 25 files: 24 by Richard Sandén ('Zap', the disk's dominant composer, co-founder of Defiers alongside Zax/Tufvesson), 1 by 'Mahoney' himself — the tool's own author, using his own tool under his later handle.",
  "csdb_release": 149128,

  "memory": { "load_address": "Varies per file since each export bundles the player + song data as one block: Blowin_in_the_Wind.sid/Zula.sid load $3fbf (init $4000, play $4027); Richard_17_Years.sid (Mahoney's own file) loads $400c = init directly (play still $4027) — the shared ~77-byte routine at $3fbf-$400b present in the other two files is simply absent from this file's own on-disk bytes, yet playback still traces exact, so whatever this file's play routine does never depends on it being resident.", "zero_page": "$fb/$fc (labelled zfb/zfc in the reconstruction): a 2-byte indirect pointer walked via (zfb),Y through the note-stream table, +2 per row (2 voices, no voice 3 / filter usage observed in any of the 3 traced files).", "layout": "Player code + note-stream table + two 33-entry frequency tables (freq-lo at $4094, freq-hi at $40c6, indexed 0-$21) are packed contiguously with the tune; SIDdecompiler's own memory-touch map additionally reports one fixed low-page workspace byte at $033c (a frame/tempo counter, read+write) — NOT part of the loaded PSID payload, just a scratch byte in C64's low RAM the player claims for itself. Relocating the disassembly to the PSID load address alone (not this $033c address) silently produces a corrupted, ~28x-oversized reassembly (see Verification section) — SIDdecompiler's `-a<decimal>` only relabels the full Start-to-End captured range, it does not truncate the pre-load-address workspace prefix." },
  "entry": { "init": "Confirmed via disassembly + trace on 3 files: $4000 (or file's own load address when no prefix routine is present, e.g. $400c).", "play": "Confirmed: $4027 in all 3 traced files (called in IRQ)." },
  "speed": "1x (called once per frame in all 3 traces; no observed skip/tempo-divider logic beyond the per-row tick counter at $033c).",
  "data_format": { "order_list": "TODO (no repeat/jukebox structure observed in the single-subtune files traced)", "patterns": "Confirmed: a single interleaved note-stream table (e.g. $40f8 in Blowin_in_the_Wind), 1 byte per voice per row, 2 voices per row (voice1 byte, voice2 byte, ...). Note byte 0x00-0x21 indexes the two 33-entry frequency tables; 0x80 = hold/no-retrigger (skip gate toggle, matches the '0 filter writes / sparse writes' behavior already noted); table ends $ff. A $fe byte is also checked by a small subroutine at the player's own base address ($3fbf) — role not fully mapped (TODO), but not exercised as a divergence in any of the 3 traced files.", "instruments": "TODO (no distinct instrument/ADSR table observed separate from the two frequency tables — ADSR (`$d405`/`$d40c`, `$d406`/`$d40d` not seen) appears set once in init, not per-note in the traced files)", "wavetable": "TODO", "pulsetable": "TODO (no pulse writes observed)", "filtertable": "TODO (0 filter writes observed across all 3 traced files, 255 combined frames)" },
  "effects": { "encoding": "TODO — no per-note command byte beyond the 0x80 hold marker was identified in the traced files; may not exist in this simple a tune, or may live in the unmapped $fe-triggered subroutine.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "CSDb release 149128 ('CCC Music Editor', 1987, Commodore Cracking Crew — a Swedish group founded 23 Jan 1985, dissolved Sept 1987) explicitly credits: Code by 'Zax'; Music (25 bundled demo tunes) by 'Richard S. (Zap)' and 'Pex T. (Zax)'.",
    "ZAX = PEX TUFVESSON = MAHONEY, CONFIRMED via two independent sources agreeing on dates: CSDb scener id=3701's handle history (Zax 1985-Sept 1987 → Flimmer/Flimmer I 1986-87 → Mahoney from Sept 1987) and Pex Tufvesson's own personal timeline page (livet.se/mahoney/timeline.php), which independently states he used 'Zax' in Commodore Cracking Crew before renaming to 'Mahoney' in 1987 and co-founding Defiers that same year. The exact handle-transition date and the CCC-to-Defiers move match across both sources — this is the tool's AUTHOR, and he has exactly 1 file of his own tagged with his own tool in this project's dataset, i.e. genuine self-use, not a coincidence.",
    "TUFVESSON'S FAME AS 'MAHONEY' IS A SEPARATE, MUCH LATER ACHIEVEMENT: the 'Mahoney technique' (an 8-bit sample-playback method exploiting SID 6581/8580 filter analog imperfections, achieving near-CD-quality digi audio) is dated to 15 February 2014 on his own site — 27 years after this 1987 editor. No source connects the two beyond being the same person's career at very different points; do not conflate the achievements.",
    "ZAP = RICHARD SANDÉN (the dominant composer, 24 of 25 files) — CSDb scener id=3702 (later handle 'Conan') shows earlier handles Zap/Pimpernel/Bilbo (1987), co-founder of Defiers alongside Zax, died 23 December 2012. He and the tool's author left Commodore Cracking Crew together in 1987 to found Defiers.",
    "Commodore Cracking Crew was primarily a CRACKING/scene group (per CSDb), not a music-tool publisher — its 1987 dissolution roughly coincides with its core members (Zax, Zap) departing to found Defiers.",
    "Not confirmed which exact JCH-lineage tool (if any) this shares code with — no evidence of any technical relationship to other tools in this KB was found. No known relationship to any other composer/tool already carded (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found).",
    "No public disassembly or source (not in the realdmx RE repo; no STIL technical note) — the disassembly behind this card's `verified` status is original, produced 2026-07-24.",
    "SIDdecompiler's own memory-touch map (`-v2`) reports the player's true captured range starting at $033c, far below any of the 3 traced files' own PSID load addresses ($3fbf/$400c) — a single read+write byte (a frame counter) the player keeps in fixed low RAM outside its own loaded block. Relocating the disassembly to the file's own PSID load address (the naive approach) does NOT error or warn, but silently balloons the reassembled binary to ~16KB (the whole $033c-$41f8 captured range gets relabelled starting at the load address instead of truncated) — relocating to the `-v2` map's own Start address ($033c) instead fixes this. See `knowledge/playbooks/disassemble-a-player.md`-adjacent `sid-player-verify` agent gotcha 40/date 2026-07 for the general pattern; this file is a fresh confirmed instance of it.",
    "Two self-modified immediate-operand bytes (at $402e and $4072 in the Blowin_in_the_Wind/Zula layout — the operand bytes of a `cmp #imm` tempo-threshold check and an `lda #imm` gate-off value, both written once from the note-stream data during init) differ between the naive disassembly and the pristine file bytes — a drifted post-execution snapshot, not a real difference. Confirmed dead (trace-exact with or without the fix) by patching both back to the file's own pristine bytes ($11, $21) before reassembly."
  ],
  "sources": [
    "CSDb release 149128 (CCC Music Editor, full credits): https://csdb.dk/release/?id=149128",
    "CSDb scener 3701 (Zax → Flimmer → Mahoney handle history): https://csdb.dk/scener/?id=3701",
    "CSDb scener 3702 (Zap → Conan, Richard Sandén, d. 2012): https://csdb.dk/scener/?id=3702",
    "Pex Tufvesson's own timeline (CCC/Zax era, Defiers founding, handle transition): https://livet.se/mahoney/timeline.php",
    "8bitlegends.com — Conan/Richard Sandén obituary: https://8bitlegends.com/conan-defiers/",
    "Demozoo — Pex Tufvesson: https://demozoo.org/sceners/726/",
    "Local dataset: 25 files tagged CCC_Editor, 2 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `CCC_Editor` tag is a native C64 music editor written by Pex
Tufvesson — under his then-handle 'Zax' — for the Swedish group
Commodore Cracking Crew in 1987. Tufvesson is far better known today under
his later handle 'Mahoney', for a completely unrelated 2014 SID
sample-playback technique. Player-ID-fingerprinted across 25 files, mostly
by his co-founder-to-be Richard Sandén ('Zap'), with 1 file by Tufvesson
himself under his current handle.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **confirmed Zax =
Mahoney = Pex Tufvesson identity chain**, sourced from two independent
timelines agreeing on exact dates; the tool author's **own self-tagged
file**, genuine self-use rather than coincidence; and the explicit
**separation from his 2014 'Mahoney technique' fame**, a different
achievement 27 years later.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note). An original
disassembly was produced 2026-07-24 via `SIDdecompiler.exe` + `64tass.exe`,
relocated to the `-v2` memory map's own Start address ($033c, not the PSID
load address — see the `quirks` array), across 3 real HVSC files. See
`data_format`/`memory`/`entry` above for what was recovered; order
list/instruments/effects/wavetable/pulsetable/filtertable remain `TODO` —
none of the 3 traced files exercised them (all appear to be simple,
single-pattern demo tunes with no filter or pulse usage).

## Verification

**Register-write-exact trace match confirmed (2026-07-24) — `status:
verified`.**

Disassembled and reassembled 3 real HVSC `CCC_Editor` files (2 composers,
including the tool's own author under his later handle):

| File | Composer | Load/Init/Play | Byte-diff (raw) | Byte-diff (after patching 2 self-modified operand bytes) | Trace-diff (200 frames) |
|---|---|---|---|---|---|
| `Blowin_in_the_Wind.sid` | Richard Sandén (Zap) | `$3fbf`/`$4000`/`$4027` | 568/571 = 99.47% | 570/571 = 99.82% (1 remaining "diff" is a trailing byte 1 past the emulator's traced End address, value 0 in both) | **Exact** (89/89 writes match) |
| `Zula.sid` | Richard Sandén (Zap) | `$3fbf`/`$4000`/`$4027` | 676/679 = 99.56% | same pattern, same 2 addresses, same pristine values ($11/$21) | **Exact** (100/100 writes match) |
| `Richard_17_Years.sid` | Pex Tufvesson (Mahoney) | `$400c`/`$400c`/`$4027` | 429/429 = **100.00%** (no patch needed) | n/a | **Exact** (66/66 writes match) |

The only byte-diff divergence found (on 2 of 3 files) was 2 self-modified
immediate-operand bytes at $402e and $4072 — SIDdecompiler's default trace
window captures their post-execution value rather than the pristine cold
byte (both are written once, from the note-stream data, during `init`).
Patched back to the file's own true bytes before reassembly (see `quirks`).
`diff` of the raw `sidm2-sid-trace.exe` outputs for original vs.
reconstruction showed **zero differing lines beyond the echoed input
filename** on all 3 files — i.e. a genuine register-write-exact match, not
an eyeballed comparison.

The relocation itself required the `-v2` map's own reported Start address
($033c) rather than any file's own PSID load address — using the load
address directly produces a plausible-looking but silently corrupted ~16KB
reassembly (see `quirks`). This was the single blocking issue; once
resolved, all 3 files closed to trace-exact with a minimal, well-understood
fix.

## Sources

See the `sources` array — CSDb (release + 2 scener profiles), Pex
Tufvesson's own timeline, 8bitlegends.com, and Demozoo.

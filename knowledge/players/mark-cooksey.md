# Mark Cooksey (player routine)

```json
{
  "id": "mark-cooksey",
  "name": "Mark Cooksey (player routine)",
  "aliases": ["Mark_Cooksey"],
  "authors": ["Mark Cooksey"],
  "released": "~1985+ (his first own driver debuted around Bomb Jack)",
  "status": "verified",
  "platform": "Mark Cooksey's own hand-coded 6502 in-game music driver (self-contained per game, reassembled per build — different games carry genuinely different code, not just a relocated copy). Player-ID-fingerprinted across 37 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-game, LOCALLY VERIFIED on 2 real files: `1942.sid` load $2400; `Bomb_Jack.sid` load $73A0.",
    "zero_page": "Per-game, LOCALLY VERIFIED via disassembly: `1942.sid` uses a 12-byte ZP block $F0-$FB (per-voice tick/tempo counters, labeled zf0-zfb by the disassembler); `Bomb_Jack.sid`'s driver build uses NO zero page at all (grepped the full disassembly for any ZP-mode instruction — zero matches). Confirms per-game builds diverge structurally, not just by relocation.",
    "layout": "Per-game. Both traced files keep a small (~26-50 byte) self-modified per-voice working-storage block (frequency/pulse-width/tick tables) immediately after the load address — read AND written at runtime (e.g. `1942.sid` $241C-$24CF, `Bomb_Jack.sid` $73A0-$7423 plus a second table at $7E2F-$7E31). SIDdecompiler's default trace snapshots these post-execution, not at their cold-start value — see Verification for how this was resolved. Full data/track layout beyond this: TODO."
  },
  "entry": {
    "init": "Per-game, LOCALLY VERIFIED: `1942.sid` init=$3FD0 (load+$1BD0); `Bomb_Jack.sid` init=$8000 (load+$0C60).",
    "play": "Per-game, LOCALLY VERIFIED: `1942.sid` play=$2D6E (load+$096E); `Bomb_Jack.sid` play=$8020 (load+$0C80). Voice-muting: SFX can play over the 3-track music (per VGMPF; not independently re-derived here)."
  },
  "speed": "TODO (single vs multispeed not independently confirmed — both traces used a plain 1-call-per-frame model and matched exactly, consistent with single-speed, but this wasn't specifically tested against a multispeed hypothesis).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "Uses WAVETABLES — 'months before Rob Hubbard popularized them' (VGMPF). Format: TODO.",
    "pulsetable": "TODO", "filtertable": "TODO"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "British composer (b.1966), Elite Systems trainee 1985 then freelance. Best-known C64 scores: Ghosts'n Goblins, Paperboy, Bomb Jack; also Commando, 1942, Frogger, Buggy Boy, Space Harrier, Overlander.",
    "Driver EVOLUTION (VGMPF): (1) learned on Neil Bate's driver (1985, arranging only, 434 Hz); (2) his FIRST own driver debuted ~Bomb Jack (first 3 games at 424 Hz); (3) a unified CROSS-PLATFORM driver from ~Overlander (also used on Spectrum/CPC). His original driver had VOICE-MUTING (SFX over 3-track music) and WAVETABLES early; later added samples (drums).",
    "NEIL BATE'S OWN DRIVER IS NOW SEPARATELY CARDED as [[neil-bate]] (tag `Neil_Bate`, 3 files: Airwolf, Frank Bruno's Boxing, 911 Tiger Shark) — confirmed via Lemon64/VGMPF/c64-wiki to be Neil A. Bate, Elite Systems' 6502 programmer, the pre-Bomb-Jack phase this card already documented (learned/arranged on his driver, 1985, 434 Hz). That card is the concrete file-level evidence of exactly this transition.",
    "Cross-platform quirk: the NES port driver (Hoppin' Mad, Cybernoid) is 'a mod of his second C64 driver … even has a leftover output to the C64's master volume'.",
    "OWN from-scratch (learned on Neil Bate's driver); NOT derived from Hubbard/Galway/SoundMonitor — his wavetable use was independent/early. Signature sound: pulsating instruments + pronounced vibrato.",
    "No published disassembly existed (the realdmx RE repo covers Hubbard/Galway/Whittaker/Tel/F.Gray but NOT Cooksey) — closed via original SIDdecompiler disassembly + 64tass reassembly + sidm2 trace-diff (2026-07-23), see Verification. Data-table/effect-encoding fields remain TODO — this pass verified the player CODE reconstructs and traces exactly, not the song-data format.",
    "GOTCHA (SIDdecompiler): both traced files carry a small self-modified per-voice working-storage block (frequency/pulse-width/tick-counter table) right after the load address, that is BOTH read and written at runtime (e.g. `lda l2443,X` / `sta l2489,X` in 1942.sid). SIDdecompiler's default trace window captures this table's post-execution (drifted) value, not its pristine cold-start value, producing a byte-diff cluster right at the front of the file (99.30%/99.71% on the two files tested) that is NOT dead — it fed genuinely wrong opening frequencies into the trace (frame-0 SID writes differed on every voice) until patched back to the original bytes. Same mechanism as the `cheesecutter`/`dmc`/`sidwizard` cards' documented 'drifted table' gotcha — recurs on this player too. Fix: locate every `-v2`-map write-touched (`+`/`w`) byte inside the byte-diff, patch each `.byte` literal in the `.asm` back to the pristine original value (anchored to its own `lXXXX` label per the project's patch-script convention), reassemble, and re-diff until 0 mismatches remain — worked cleanly on both files (50 bytes / 26 bytes respectively, all plain `.byte` literals, no self-modified-operand or pointer-table edge cases needed)."
  ],
  "sources": [
    "VGMPF (richest: driver evolution, tuning, wavetables, samples): https://www.vgmpf.com/Wiki/index.php/Mark_Cooksey",
    "Wikipedia (bio/games): https://en.wikipedia.org/wiki/Mark_Cooksey ; remix64 interview: https://remix64.com/interviews/interview-mark-cooksey.html",
    "Chordian blog (signature sound): https://blog.chordian.net/2018/01/03/sid-musicians/",
    "Local dataset: 37 files tagged Mark_Cooksey (see knowledge/COVERAGE.md)",
    "Local verification artifacts (2026-07-23, sid-player-verify pass): 1942.asm/1942_patched.asm, bombjack.asm/bombjack_patched.asm + byte-diff/trace-diff scripts, in this session's scratchpad — not committed, but a future session can redisassemble in minutes from the addresses/method documented in Verification."
  ]
}
```

## Overview

The `Mark_Cooksey` tag is composer Mark Cooksey's own C64 in-game driver
(Ghosts'n Goblins, Paperboy, Bomb Jack…), Player-ID-fingerprinted across 37
files. Notable historically: his own driver had **voice-muting and wavetables
"months before Rob Hubbard popularized them"** (VGMPF), and it evolved across
four systems into a unified cross-platform engine.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: his **early independent
wavetable use**, the **four-system driver evolution**, voice-muting, and that
he learned on **Neil Bate's** driver (not Hubbard/Galway-derived). Per-game
memory map.

## Disassembly notes

None published previously (the realdmx RE repo doesn't cover Cooksey). Closed
with an original `SIDdecompiler` disassembly of two real HVSC files (`1942.sid`,
`Bomb_Jack.sid`), reassembled with 64tass, byte-diffed, patched, and
trace-diffed via `sidm2-sid-trace.exe` — see Verification below. Confirms this
is a genuinely from-scratch per-game driver (different ZP usage, different
code between the two games), not a single shared routine relocated per file.

## Verification

**Register-write-exact — `status: verified` (2026-07-23).** Two real
player-ID-fingerprinted (`Mark_Cooksey`, 37 files total) HVSC files
disassembled with `SIDdecompiler.exe` (relocated to each file's own PSID load
address — confirmed via the `-v2` memory map's own `Start:` line matching the
PSID header exactly on both files, no leading-byte-drop or run-stub issue),
reassembled with `64tass.exe`, byte-diffed against the original payload, and
trace-diffed with `sidm2-sid-trace.exe` (MCP `sidm2-siddump` tools were not
registered this session; used the fallback executable directly per the
project's documented method).

| File | PSID header | Byte-diff (raw) | Fix applied | Byte-diff (patched) | Trace-diff |
|---|---|---|---|---|---|
| `1942.sid` | load=$2400, init=$3FD0, play=$2D6E, 3 subtunes | 99.2999% (50 bytes, $241C-$24CF) | Patched 50 drifted working-storage bytes back to pristine cold-start values (all plain `.byte` literals) | **100.0000%** | **Exact** on all 3 subtunes (295/295, 260/260, 290/290 writes, 50 frames each) |
| `Bomb_Jack.sid` | load=$73A0, init=$8000, play=$8020, 6 subtunes | 99.7127% (26 bytes, $73A0-$7423 + $7E2F-$7E31) | Patched 26 drifted working-storage bytes (same mechanism, two separate address clusters) | **100.0000%** | **Exact** on all 6 subtunes (331/251/403/369/276/281 writes, 50 frames each) |

Both files reached a byte-exact reconstruction and a register-write-exact
trace across every subtune — meets this project's `verified` bar (matching
`laxity-newplayer`'s precedent). The raw (pre-patch) byte-diff mismatch was
entirely confined to a small self-modified per-voice frequency/pulse-width
working-storage table sitting immediately after each file's load address —
see the `quirks` array for the exact mechanism (a recurring `SIDdecompiler`
drifted-table artifact, not a real difference in the files). Scope of what
this pass verified: the **player code** reconstructs and traces exactly on 2
of 37 files. Data-table format (order list/instrument/wavetable layout) and
effect-command encoding were NOT derived this pass and remain `TODO` — a
future session wanting those facts should start from these two working
disassemblies (`1942.asm`, `bombjack.asm`, scratchpad) rather than
redisassembling from scratch.

## Sources

See the `sources` array — VGMPF (primary), Wikipedia, remix64, Chordian.

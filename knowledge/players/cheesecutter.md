# CheeseCutter

```json
{
  "id": "cheesecutter",
  "name": "CheeseCutter",
  "aliases": ["CheeseCutter_2.x", "CCUTTER", "CC"],
  "authors": ["Timo Taipalus (abaddon) / Triad"],
  "released": "2011 (v0.4.0); developed 2009-2017",
  "status": "in-progress",
  "platform": "Cross-platform editor (D language, GPL) + native C64 6502 replay (ACME asm) embedded in exports",
  "csdb_release": 102245,

  "memory": {
    "load_address": "$1000 (player.acme `BASEADDRESS = $1000`).",
    "zero_page": "`ZREG` = $FB (16-bit temp pointer). TODO: any other ZP the play routine clobbers.",
    "layout": "Three parallel tracks (track1/2/3, ~1KB each) of sequence + transpose markers; up to 128 sequences via seqlo/seqhi; sequences stored from label `s0`, 256 bytes apart. Instrument + wave/pulse/filter tables. Exact absolute addresses beyond BASEADDRESS: read src/c64/player_v4.acme."
  },
  "entry": {
    "init": "`init` — initializes 3 voices from a `songsets` table (subtune selection).",
    "play": "`play` — main per-frame update. Multispeed via `mplay`/`submplay` sound-only frames; `CIA_VALUE`/`MULTIPLIER` set the timer."
  },
  "speed": "1x + multispeed (CIA-timer configured via CIA_VALUE/MULTIPLIER).",

  "data_format": {
    "order_list": "Three parallel tracks (track1/2/3), each ~1KB, holding sequence indices + transpose markers.",
    "patterns": "Sequences stored from `s0`, 256 bytes apart; encode notes ($00-$5F), plus duration / instrument / control bytes.",
    "instruments": "48 instruments (`INSNO = 48`), 8 params each: AD, SR, hard-restart type / arp delay, HR waveform, filter ptr, pulse ptr, HR envelope, wave ptr.",
    "wavetable": "Split arpeggio/waveform arrays (`arp1`/`arp2`).",
    "pulsetable": "`pulstab`, 4-byte entries.",
    "filtertable": "`filttab`."
  },
  "effects": {
    "encoding": "Effects compiled in via conditional INCLUDE_* blocks in the player source (slide up/down, vibrato, portamento, ADSR set, filter, sync, chord/arp, etc.). TODO: exact numeric opcode table — present in src/c64/player_v4.acme, not yet transcribed.",
    "commands": {}
  },

  "edges": {
    "derives_from": ["laxity-newplayer"],
    "successor_of": [],
    "shares_routine_with": ["jch-newplayer"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Player source header is explicit about lineage: `;;; CCUTTER 2.x musicplayer by abad` / `;;; Based on JCH NP 21.G4 by Laxity/VIB`. So CheeseCutter's replay is a descendant of the JCH NewPlayer 21 / Laxity NewPlayer family (specifically Laxity's 21.G4 revision) already carded here — a rare case of a modern open-source tool with a directly-stated derivation from a documented classic player.",
    "'NP 21.G4' is Laxity's G4 revision of JCH NewPlayer 21; the laxity-newplayer card documents the closely-related 21.G5. Treat CheeseCutter's runtime format as laxity-NP21-like but confirm per detail (G4 vs G5 differences not verified here).",
    "Editor is written in D; the on-C64 replay is 6502 asm in ACME syntax (src/c64/player_v4.acme, assembled with ACME 0.91). Don't look for the replay logic in the D sources.",
    "abaddon is Timo Taipalus of Triad (also credited under Fairlight/ALD on some releases); Mac OSX / D2 port by Ruk, 2013."
  ],
  "sources": [
    "Player source (definitive, states the lineage): https://raw.githubusercontent.com/theyamo/CheeseCutter/master/src/c64/player_v4.acme",
    "Repo + README (GPL license, authors): https://github.com/theyamo/CheeseCutter",
    "CSDb release: https://csdb.dk/release/?id=102245",
    "sidid:CheeseCutter_2.x (author Timo Taipalus (Abaddon), 2011, CSDb release 106959)",
    "Local dataset: 293 files tagged CheeseCutter_2.x (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

CheeseCutter is a GPL C64 SID tracker by Timo Taipalus (abaddon) of Triad,
developed 2009-2017. The editor is written in D; the music it exports is
driven by a native 6502 replay (`src/c64/player_v4.acme`). Its standout fact
for this knowledge base is a **directly-stated derivation**: the player
source header reads *"Based on JCH NP 21.G4 by Laxity/VIB"* — i.e. its replay
descends from Laxity's G4 revision of JCH NewPlayer 21, the exact family the
[laxity-newplayer](laxity-newplayer.md) and [jch-newplayer](jch-newplayer.md)
cards document. That makes CheeseCutter a live, modern, open-source window
onto the classic Laxity/JCH engine.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **stated lineage**
(`Based on JCH NP 21.G4 by Laxity/VIB` in the player source header), which is
why this card carries `derives_from: laxity-newplayer`. Also: the replay is
6502/ACME (`player_v4.acme`), not in the D editor sources; and 'NP 21.G4' is
Laxity's G4 revision, sibling to the 21.G5 the laxity card documents (G4-vs-G5
differences not verified here).

## Disassembly notes

Not disassembled/traced here — but unusually well documented *by its own
source*. `src/c64/player_v4.acme` gives `BASEADDRESS = $1000`, `ZREG = $FB`,
`init`/`play` entry labels, three parallel tracks, 48 instruments (8 params),
and `arp1`/`arp2`/`pulstab`/`filttab` tables. The exact effect-opcode
numbering lives in the same file's `INCLUDE_*` blocks and is left `TODO`.
Because it's laxity-NP21-derived, cross-reading this source against the
[laxity-newplayer](laxity-newplayer.md) card (and vice-versa) is likely
productive for both.

## Verification

**Source-confirmed + playback confirmed (2026-07-13) — `status: in-progress`.**
Two independent checks:
1. **Facts confirmed against the real GPL player source** (`src/c64/player_v4.acme`,
   downloaded): `BASEADDRESS = $1000`, `ZREG = $fb`, `INSNO = 48`, the
   instrument-table enum layout (`INS_AD/SR/HR/4/FLTP/PULSP/7/ARP` as
   `n * INSNO` column offsets), `MULTISPEED`/`CIA_VALUE = $4cc7`, and the
   header's verbatim lineage `;;; Based on JCH NP 21.G4 by Laxity/VIB` — all
   match this card.
2. **Playback confirmed:** traced a real HVSC CheeseCutter `.sid`
   (`A/Abaddon/Ants.sid`) with `sidm2-sid-trace`: load `$1000` (= BASEADDRESS),
   init `$1000`, play `$1003`, 122 register writes / 50 frames.

**2026-07-18 pass — disassemble/reassemble/byte-diff/trace-diff attempted on
two real HVSC files, both relocated to `-a4096` (decimal for `$1000`, matches
BASEADDRESS/PSID load address exactly). Result: genuinely file-dependent,
not a blanket `verified`.**

- **`A/Abaddon/Ants.sid`** (payload 5484 bytes): `SIDdecompiler -a4096 -z -d -c -v1`
  → 64tass reassembly is **exactly** 5484 bytes ($1000-$256B), same as the
  original. Byte-diff: **98.34% match (91/5484 bytes differ)**, all 91
  diverging bytes contiguous-clustered in $15E7-$1688 (21 ranges). Cross-
  checked against the decompiler's own `-v2` memory-touch map: **every one of
  the 91 diverging bytes falls in a `+` (read+write / self-modified working
  storage) address** — the same pattern as the `future-composer` card's
  precedent (see agent lessons_learned #10). Trace-diff (`sidm2-sid-trace.exe`,
  init `$1000`, play `$1003`, 300 frames) is **byte-for-byte identical**
  between the original and the reassembly: 680/680 register writes match
  exactly, only the echoed input filename differs. **This one file is a
  genuine, citable near-exact reconstruction** (structurally verified, not
  just "plays and sounds right").
- **`A/Abaddon/Blackjack.sid`** (payload 11823 bytes): same method, same
  relocation. Reassembly is again exactly 11823 bytes ($1000-$3E2E) — length-
  correct. Byte-diff: 99.39% match (72/11823 bytes differ), 66 in `+` and 6 in
  `w` per the `-v2` map. **But this divergence is NOT dead**: trace-diff shows
  the reassembled `bj.prg` produces **zero SID register writes over 300
  frames** (complete silence) vs **1658 writes** in the original file's own
  trace. Root cause localized to `$1006-$100B`, sitting immediately after the
  `init`/`play` jump table (plausibly part of the "initializes 3 voices from a
  `songsets` table" logic this card already documents): original bytes
  `$01 $01 $01 $0F $F2 $00`, reassembly bytes `$00 $00 $00 $F0 $F2 $00`.
- **Root cause (confirmed, not guessed)**: `SIDdecompiler`'s default `-t 30000`
  (30000 play-routine calls before it stops tracing) bakes the *end-of-trace*
  RAM value of any write-touched memory location into the emitted "data" byte
  — not the pristine on-load value. For `Ants.sid` this happened to not
  matter (the drifted value is fully overwritten before ever being read again
  — dead, per lessons_learned #10). For `Blackjack.sid` it does matter: the
  drifted value at $1006-$1008 is read once at cold-start and silences all
  three voices. Re-running with `-t1` (only 1 play call before the snapshot)
  **does** recover the correct pristine `$01 $01 $01` at $1006-$1008 — but at
  the cost of drastically under-covering the rest of the routine (reassembled
  length drops to 11499 of 11823 bytes, and $100C onward — clearly reachable,
  legitimate code/data — reverts to zeros/wrong values instead). No single
  `-t` value tried serves both goals for this file.

**Why not `verified`:** the SAME relocation and method gives a fully
trace-exact reconstruction for one real file and a completely silent
(0 vs 1658 writes) one for another — this is a genuine, well-localized
disassembler limitation (default trace length distorts a small init-time
voice/subtune table), not a wrong entry point or memory map, but it means
fidelity is file-dependent and cannot be claimed for CheeseCutter as a whole.
Separately, `player_v4.acme` alone (bare GPL source, `EXPORT=FALSE`) still
carries no song data and can't be assembled standalone into a playable tune —
that path remains closed as previously noted. The exact effect-opcode table
and full ZP map remain `TODO`.

**Next lead for whoever continues this**: sweep intermediate `-t` values
(e.g. `-t100`, `-t1000`, `-t5000`) against `Blackjack.sid` specifically,
looking for one that both preserves the pristine `$1006-$100B` table value
*and* keeps the reassembled length at the full 11823 bytes — or, as a more
surgical fix, manually patch just `$1006-$1008` in the reassembled `.asm`
(`.byte $01,$01,$01` in place of whatever SIDdecompiler emitted) before
reassembling, then re-run the byte-diff/trace-diff to confirm that single
3-byte correction is sufficient to make `Blackjack.sid` trace-exact too.

## Sources

See the `sources` array — primary is CheeseCutter's own GPL player source
(`player_v4.acme`, which states the JCH-NP21/Laxity lineage) plus the cached
SIDId entry (`CheeseCutter_2.x`, Timo Taipalus / Abaddon, 2011).

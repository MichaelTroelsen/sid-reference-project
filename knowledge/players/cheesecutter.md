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

**Why not `verified`:** `player_v4.acme` is the REPLAY only — with
`EXPORT=FALSE` it carries descriptor tables but no song data, so assembling it
standalone won't produce a playable tune (the CheeseCutter tracker injects the
song at export). A byte-diff `verified` would need the D-language tracker to
export a `.sid`, which isn't run here. The exact effect-opcode table and full
ZP map remain `TODO`.

## Sources

See the `sources` array — primary is CheeseCutter's own GPL player source
(`player_v4.acme`, which states the JCH-NP21/Laxity lineage) plus the cached
SIDId entry (`CheeseCutter_2.x`, Timo Taipalus / Abaddon, 2011).

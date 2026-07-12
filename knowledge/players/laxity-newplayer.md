# Laxity NewPlayer

```json
{
  "id": "laxity-newplayer",
  "name": "Laxity NewPlayer",
  "aliases": ["Laxity_NewPlayer", "Laxity_NewPlayer_V21", "Vibrants/Laxity", "256bytes/Laxity", "NP21"],
  "authors": ["Thomas Egeskov Petersen (Laxity) / Vibrants"],
  "released": "2005",
  "status": "in-progress",
  "platform": "Native C64 player routine",
  "csdb_release": 26563,

  "memory": {
    "load_address": "$1000 (native); some files $A000; SF2-driver relocates player to $0E00",
    "zero_page": "$FC-$FD (16-bit pointer for sequence/table reads via ($FC),Y); $02 scratch (pulse/filter delta hi byte). Per-voice state is non-ZP at $178F+X..$17F8+X.",
    "layout": "native: $1000-$1005 init, $1006-$10A0 play, $10A1-$1900 code, $1900-$199F state (159 bytes), $199F-$19A5 seq pointers; tables at $1A1E-$1ACB; command table $1ADB-$1B9B. ~3063 bytes total. (SIDM2 docs disagree on some table addresses — see quirks.)"
  },
  "entry": {
    "init": "$1000 (A = subtune number, 0-based)",
    "play": "$10A1 (called 50x/s PAL). Tempo counter $1783, tempo table $1A1E+ with $7F wrap marker; multispeed supported."
  },
  "speed": "1x + multispeed (tempo-table driven). SIDM2 note: tempo detection may be imperfect; SF2-driver export is single-subtune.",

  "data_format": {
    "order_list": "3-byte events (note, instrument, command). $FF = loop (next byte = loop target position). Transpose = bytes >= $80 (value - $A0 = signed semitones). $FE = stop.",
    "patterns": "sequences integrated with player code (NOT separated as pure data — a key incompatibility with JCH NP20)",
    "instruments": "8 bytes/entry, native table $1A6B-$1AAB (8 instruments). Two field orderings documented (author/JCH-source vs SIDM2 disassembly) — see quirks.",
    "wavetable": "2 bytes/tick (note-offset + waveform), split arrays (not interleaved). Markers: $7F jump-to-index, $7E stop/hold, $80 special base-note recalc ('Hubbard slide'), $80+ absolute note.",
    "pulsetable": "4 bytes/entry, Y*4 indexed: settings ($FF=keep), count, duration(bit0-6)+direction(bit7), next-entry (absolute index). Arp table $1A8B-$1ACB (16x4, cyclic signed semitones, $7F end).",
    "filtertable": "4 bytes/entry: value ($FF=keep), count, duration, next-entry (absolute index). FIRST entry = alternative/break speeds. Cutoff is 12-bit, divided by 16 before SID write."
  },
  "effects": {
    "encoding": "Native command table $1ADB-$1B9B: 64 commands x 3 bytes (type, param1, param2), $7F = end-of-table. Order-list command byte = 'super-command' nibble layout below.",
    "commands": {
      "$0x yy": "slide up, speed $xyy (one-shot)",
      "$2x yy": "slide down (one-shot)",
      "$4x yy": "invoke instrument x with alt wave-table pointer yy",
      "$60 xy": "vibrato (x=freq, y=amplitude, one-shot)",
      "$8x xx": "portamento",
      "$9x yy": "set AD=x, SR=yy (persistent)",
      "$ax yy": "set AD/SR directly (one-shot)",
      "$c0 xx": "set channel wave pointer directly (one-shot)",
      "$dx yy": "x=0 filter ptr, x=1 absolute filter value, x=2 pulse ptr (one-shot)",
      "$e0 xx": "set speed",
      "$f0 xx": "master volume",
      "instrument_restart_nibble": "$8x fixed hard restart, $4x soft, $Ax/$Bx Laxity hard restart (AD untouched), $1x wave-gen reset, $00 gate-off 3 frames before next note"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": ["jch-newplayer"],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDM2's flagship player and best-understood target: original assembly source, author format spec, a full reverse-engineered disassembly, AND a working custom SF2 driver.",
    "v21 was 'coded from scratch' by Laxity starting 26 Jan 2005 (a rewrite of JCH's NewPlayer system) but keeps the instrument/wave/filter/pulse table layout of 20.g4. So 'Laxity NewPlayer v21' and the disk-labelled 'JCH NewPlayer v21.G5' are the same lineage.",
    "Sequences are integrated with the player code, whereas JCH NP20 separates them as data — the architectures are INCOMPATIBLE (direct format conversion scores only 1-8%). Do not assume JCH-family internals transfer.",
    "SIDM2's own docs disagree on native table addresses (e.g. wave table $18DA/$1914; the disassembly vs NP20-research docs differ). Treat the addresses here as leads, confirm per file.",
    "Two documented instrument field orderings exist (author/JCH-source order vs SIDM2 disassembly order) — check which a given tool/file uses.",
    "'Laxity hard restart' adapted from Laxity's own 1989 player; SIDM2 also records the claim that JCH NewPlayer was reverse-engineered FROM Laxity's player in 1988 (lineage is tangled — noted, not asserted as an edge).",
    "Driver family SIDM2 tracks under this path: Stinsen/Beast/Angular, DRAX (Colorama/Delicate/Dreams/Omniphunk), 2000 A.D., Wizax, Zetrex."
  ],
  "sources": [
    "SIDM2:G5/21.g5_Final.txt (author's original source + format spec)",
    "SIDM2:docs/reference/STINSENS_PLAYER_DISASSEMBLY.md (reverse-engineered disassembly: memory map, ZP, tables, command table)",
    "SIDM2:docs/reference/LAXITY_DRIVER_TECHNICAL_REFERENCE.md (SF2-driver relocated map; accuracy report)",
    "SIDM2:docs/reference/CONVERSION_STRATEGY.md, docs/players/LAXITY.md, docs/players/NP20.md, KNOWLEDGE_CONSOLIDATION_NP20_RESEARCH.md",
    "sidid:Laxity_NewPlayer_V21 (author Laxity, released 2006, csdb release 26563)"
  ]
}
```

## Overview

Laxity NewPlayer is Thomas Egeskov Petersen's (Laxity / Vibrants) C64 SID player
routine — the flagship, best-documented target of the [SIDM2 project](../../../c64server/SIDM2),
which reverse-engineers it into SID Factory II format. v21 was coded from
scratch in 2005 as a rewrite of JCH's NewPlayer system, keeping the table
layout of v20.g4. It is the classic native player behind [SID Factory](sid-factory.md)'s
Laxity-family output and shares the "contiguous sequence stacking" lineage with
[JCH NewPlayer](jch-newplayer.md) — though, importantly, with an incompatible
sequence architecture. Several NP21 forks now have their own stub cards:
[Stinsen](stinsen-newplayer.md), [Beast/Angular](beast-angular-newplayer.md),
and [DRAX](drax-newplayer.md); three earlier, pre-NP21 Vibrants-era players —
[2000 A.D.](vibrants-2000ad.md), [Wizax-A](wizax-a.md), and
[Zetrex/YP](zetrex-yp.md) — are documented too, though SIDM2 treats their
code lineage back to Laxity's own player as an unconfirmed attribution, not a
verified fact (see each card's `edges`).

## Quirks & gotchas

See the `quirks` array above — the load-bearing ones: **sequences are welded
into the player code** (not pure data, unlike JCH NP20 — direct format
conversion is 1–8% only); **SIDM2's docs disagree on some table addresses** (use
them as leads); and there are **two instrument field orderings** in circulation.

## Disassembly notes

SIDM2 has done this work already and thoroughly — start from its
`STINSENS_PLAYER_DISASSEMBLY.md` (memory map, ZP `$FC-$FD`/`$02`, per-voice
state at `$178F+X`, table addresses, the 64×3 command table at `$1ADB-$1B9B`)
and `G5/21.g5_Final.txt` (the author's own format spec + super-command list).
The SF2-driver relocated map (player at `$0E00`, offset −$0200) is in
`LAXITY_DRIVER_TECHNICAL_REFERENCE.md`.

## Verification

**High external confidence, not yet re-run here.** SIDM2 reports **99.93% frame
accuracy**, **100% success on 286 real Laxity SID files**, and exact
register-write matches, validated by siddump comparison against VICE playback
(`LAXITY_DRIVER_TECHNICAL_REFERENCE.md`). Filter accuracy is now reported at
100% (Stinsen-verified) after an earlier 0%. Kept `status: in-progress` per this
KB's rule (verified = assembled+run through `mcp-c64` *here*) — the natural next
step is a siddump/register-trace re-run once `mcp-c64` can capture SID writes.

## Sources

See the `sources` array — primary is SIDM2's `G5/21.g5_Final.txt` (author
source) and `docs/reference/STINSENS_PLAYER_DISASSEMBLY.md` (disassembly), plus
our cached SIDId entry (`Laxity_NewPlayer_V21`, CSDb 26563).

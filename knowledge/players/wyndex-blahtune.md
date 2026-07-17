# Wyndex/Blahtune

```json
{
  "id": "wyndex-blahtune",
  "name": "Blahtune",
  "aliases": ["Wyndex/Blahtune"],
  "authors": ["Stephen L. Judd (Wyndex)"],
  "released": "1997 (version A#, dated 11/22/97; README's changelog for that build is dated 6/26/97)",
  "status": "in-progress",
  "platform": "Native C64 tool: on-C64 music editor + instrument editor + macro compiler + its own 6502 replay routine, all self-hosted (assembled with Merlin 128 per the author's own account)",
  "csdb_release": null,

  "memory": {
    "load_address": "$0EFA: 2-byte ID code, then saved file body $0EFC to FREBOT (end of used memory). $0EFC-$0FFF = editor tables (instrument names, key positions, marker/field pointers at $0FE0). $1000-$103F = player kernal jump table. Player itself does not use anything below $1000 or above ENDFIELD (per author's own docs).",
    "zero_page": "Not documented as used by the player's own state (author: \"The player does not use anything underneath $1000 and above ENDFIELD\") — i.e. no dedicated player zero-page workspace is described. TODO: confirm from the published player source (playlite.gg.s) whether it transiently borrows any ZP locations.",
    "layout": "$1040-$11BF FREQLO/FREQHI (24 base tones x 8 octaves = 192 entries each). $11C0 MARKERS (32 marker slots). $1200 MACADR (48 bytes, macro start addresses, page-aligned). $1230 GLOBVAR (16 global vars). $1240 SHADOW (Shadow SID, since real SID regs are read-only). $1259 DURTAB (24-entry duration table). $1271 INSTAB (126 bytes = 14 instruments x 9 bytes). $12EF-$132B misc player state (CURVOICE, CURFIELD, LASTNOTE, V1/V2/V3FIELD, DURATION, TIMERUPT, STOPME/V1-3STOP, CURINST, FIELDS pointer table, MACBYTE1-3 active-macro flags). $132C LOCALVAR (4 sets x 8 local vars). Compiled macro code follows immediately after the fixed player block (MACBEGIN)."
  },
  "entry": {
    "init": "$1003 PLAYINIT — initializes the player.",
    "play": "$1000 MAINPLAY — call via JSR $1000 once per frame. $1006 SETIRQ wedges the player into the current IRQ chain for standalone playback (default interrupt rate $42C6, i.e. 1/60s on NTSC, settable per-song by the composer via CTRL-i)."
  },
  "speed": "Frame-driven (called once per interrupt); default timer setting corresponds to NTSC 1/60s but is a per-song, composer-set CIA timer value (TIMERUPT at $1300) — not a fixed PAL/NTSC constant. No documented multispeed/sub-frame concept; duration is a countdown per note (DURATION table at $12FA) decremented each call.",

  "data_format": {
    "order_list": "No separate order list: each of 3 voices (plus a global/field-0 macro owner) has one linear data stream (\"field\") of note+duration pairs and player commands, with its own Jump/Jsr-to-marker/RTS/Repeat flow control (subroutine nesting depth 4) — closer to a tiny per-voice bytecode than a tracker order+pattern split.",
    "patterns": "Same \"field\" stream as order_list — note index (into the 24x8 FREQLO/FREQHI table) + duration index (into DURTAB), interleaved with commands: activate/deactivate global or local macro, load global/local variable, load instrument, set volume, repeat-n-times / end-repeat, jump/jsr/RTS to marker, gate on/off, stop voice, restart player. A 'Hold' pseudo-note slurs the current note for durations >255 without restarting macros.",
    "instruments": "INSTAB at $1271, 126 bytes for 14 instruments = 9 bytes/instrument (exact per-byte field breakdown not confirmed from the published source — set via the on-C64 instrument editor's live SID register tweaking, so likely direct AD/SR/waveform/pulse-width style fields; TODO to confirm from playlite.gg.s).",
    "wavetable": "No separate wave/arpeggio table — timbral and pitch effects (vibrato, portamento, arpeggio, etc.) are NOT built into the player at all; they are entirely implemented by user-written, compiled 'macros' (a small custom language) attached to voices/fields.",
    "pulsetable": "Not a fixed table — pulse-width changes, like all effects, are done via macros writing to the Shadow SID ($1240) and copying out to real SID.",
    "filtertable": "Not a fixed table — filter effects are likewise macro-driven, not a built-in player feature."
  },
  "effects": {
    "encoding": "The player has NO built-in effect commands beyond the field-command list above (macro activate/deactivate, variable load, instrument load, volume, repeat, flow control, gate, restart). All musical effects (vibrato, portamento, arpeggio, ritard, etc.) are user-authored macros — small compiled programs in a dedicated macro language (WAIT/BMOVE/LOOP/UNTIL/BINC/BTEST/etc., compiled by a linked-in compiler) that run cooperatively alongside the player and are explicitly activated per voice/field via the 'activate local/global macro' field command.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Its own author's site (ffd2.com) flags Blahtune as OBSOLETE, pointing to a later, unrelated-named successor tool 'Tunesmith' by the same author — no `edges.successor_of`/`derives_from` is asserted here because that's a forward relationship (would belong on a future Tunesmith card, if one is written) and no code-sharing statement was found, only 'this replaces that'. Source: http://www.ffd2.com/fridge/blahtune/ (front page banner).",
    "Effects are NOT built into the player — it ships with zero hardcoded effects (no vibrato/portamento/arpeggio routines at all). Every effect is a user-compiled 'macro' in Blahtune's own small language. This is unusual among C64 music systems and is the single most distinctive design fact about it. Source: manual, Section 6/7 (http://www.ffd2.com/fridge/blahtune/manual).",
    "Composer concentration in this collection is extreme: of 10 files tagged Wyndex/Blahtune, 9 are by Wyndex himself and 1 (\"Mini\", tagged to Attila Szõke / da Blondie) is by another composer — matching the author's own site, which separately credits 'strikef.lnx / Strike Force, courtesy da Blondie/Wish!' as an example tune made with the system. So this is a personal composition system that saw at least one outside adopter, not a purely private routine and not a widely-published tracker either.",
    "SOURCE IS PUBLISHED but LICENSE IS UNSTATED: the ffd2.com/fridge/blahtune/ page links dozens of .s (6502 assembly) source files for the player, editor, macro compiler, and disk I/O, plus full documentation — but no license text was found anywhere in the manual/README/getstart. Treat as source-available, not confirmed-open-source, until permission is verified with the author (email in the docs: sjudd@nwu.edu, an old address).",
    "No CSDb release entry could be found for Blahtune itself (searches for 'blahtune' on csdb.dk returned nothing) — unlike most other classic C64 tools in this knowledge base, its distribution/history lives entirely on the author's personal site, not CSDb. `csdb_release` is left `null` rather than guessed."
  ],
  "sources": [
    "Author's site, front page (distribution files, obsolescence notice, credited example tune): http://www.ffd2.com/fridge/blahtune/",
    "Author's manual, Section 6 (The Player) and Section 7 (Macros) — kernal jump table, field/command model, macro system: http://www.ffd2.com/fridge/blahtune/manual",
    "Author's playvars doc — full memory map / variable table, the primary source for the `memory`/`entry`/`data_format` fields above: http://www.ffd2.com/fridge/blahtune/playvars",
    "Author's README (version/date): http://www.ffd2.com/fridge/blahtune/README",
    "Published 6502 source file index (player, editor, compiler, disk I/O — license unstated): http://www.ffd2.com/fridge/blahtune/players/index.html and the source-code list on the front page",
    "sidid:Wyndex/Blahtune (author Stephen L. Judd (Wyndex), released 1997, reference http://www.ffd2.com/fridge/blahtune/) — data/sidid.json",
    "Local dataset: 10 files tagged Wyndex/Blahtune (see knowledge/COVERAGE.md, rank 26); confirmed by direct inspection of data/composers/wyndex.json (9 files) and data/composers/blondie-da.json (1 file, \"Mini\")",
    "CSDb scener profile for Wyndex (id 1120) — corroborates identity/authorship, no separate Blahtune release listed: https://csdb.dk/scener/?id=1120 (cached at data/csdb/wyndex.json)"
  ]
}
```

## Overview

Blahtune is a native, self-hosted C64 music composition system — editor,
instrument editor, macro compiler, and replay routine all running on the
C64 itself — written by Stephen L. Judd (handle Wyndex) and released in
1997 (version "A#"). It is documented here because the author published an
unusually complete reference manual and memory map (`manual`, `playvars`)
alongside the 6502 source, giving a rare case of a small/personal-scale
player with real Tier 3 facts available from primary documentation rather
than a disassembly. Its defining design choice is that the player itself
has **no built-in effects whatsoever** — vibrato, portamento, arpeggio, and
everything else are implemented by short programs ("macros") in Blahtune's
own compiled macro language, run cooperatively alongside the per-voice
player loop. In this project's dataset it is a small, concentrated family:
10 files, 9 of them by Wyndex himself and one by a single outside adopter
(da Blondie), consistent with a personal system that got limited outside
use rather than a widely-published tracker. The author's own site later
marked it obsolete in favor of a successor tool, "Tunesmith" — not carried
here as an `edges` relationship since no source-level derivation statement
was found for that later tool.

## Quirks & gotchas

See the `quirks` array. The two load-bearing ones: **zero built-in
effects** (everything is a user-compiled macro — do not go looking for a
vibrato/arpeggio opcode table in the player itself, there isn't one), and
**source is published but has no stated license** (treat as
source-available, not confirmed-reusable, same caveat as `odintracker.md`).

## Disassembly notes

Not disassembled here — all `memory`/`entry`/`data_format` facts above come
directly from the author's own `playvars` document, which lays out the
entire fixed memory map ($0EFC editor tables, $1000-$103F kernal jump
table, $1040 onward frequency/marker/macro/instrument/state tables) byte by
byte, including exact EQU offsets. This is Tier-2/documentation-sourced,
not Tier-3 reverse-engineering, but it is concrete enough to record rather
than leave `TODO` — per the extraction rules, a public source that "plainly
documents a runtime fact" earns `status: in-progress` even without our own
disassembly. The published player source itself (`playlite.gg.s`, linked
from the front page) was not opened; a next step would be reading it to
confirm the exact 9-byte instrument field layout and check for any
transient zero-page use the `playvars` prose doesn't mention.

## Verification

**Not independently verified — `status: in-progress`, not `verified`.**
Every runtime fact above is transcribed from the author's own published
manual/playvars documentation (a primary source, cited per-fact), not from
reassembling and tracing a binary through `sidm2-siddump`. No init/play
round-trip was attempted. Promoting to `verified` would require pulling
`playlite.gg.s` (and the rest of the linked source tree), assembling it,
and diffing a trace against a real `.sid` built with this player (e.g. one
of the 10 files identified in `data/composers/wyndex.json` /
`blondie-da.json`).

## Sources

See the `sources` array — primarily the author's own site
(`ffd2.com/fridge/blahtune/`), its `manual` and `playvars` documents, the
cached SIDId entry, and this project's local composer data confirming the
10-file usage count and composer concentration.

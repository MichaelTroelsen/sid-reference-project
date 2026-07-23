# Asterion Sid-Tracker

```json
{
  "id": "asterion",
  "name": "Asterion Sid-Tracker",
  "aliases": ["Asterion_V1.x"],
  "authors": ["Rafal Kazimierski (Asterion)"],
  "released": "2004 (V1.0: 26 Jan 2004; V1.1: 31 May 2004)",
  "status": "in-progress",
  "platform": "Native C64 tracker/editor + its own C64 replay routine embedded in exported tunes. No cross-platform component found.",
  "csdb_release": 11576,

  "memory": {
    "load_address": "TODO (not disassembled): no init/play entry-point disassembly exists. However, direct inspection of the official release disks (ast10.d64/ast11.d64, both downloaded from CSDb) shows all 19 bundled example tunes — packed with the editor's own included PACK&RELOC utility — individually load at PRG address $46F0 regardless of tune size (4-11KB), on BOTH V1.0 and V1.1. Read from each PRG's own 2-byte load-address header (file-format metadata, not code disassembly); plausibly the packer's fixed player+song base address, but init/play offsets within that block are not determined here.",
    "zero_page": "TODO: DeepSID's players.json spec notes \"Sometimes 2 bytes ($FB-$FC)\" — documented by DeepSID, NOT independently verified here via disassembly; do not treat as confirmed",
    "layout": "Documented at the editor/source-format level by the tool's own manual (ast11.txt, bundled on the official V1.1 release disk): three parallel per-channel \"tracks\" (order lists) sit alongside independent wave/arpeggio/pulse/filter macrocommand tables and an \"indexes\" table (9x/Ax/Bx/Cx/4x/Fx rows) that pattern effects point into. No absolute addresses given — this is the editor's logical layout, not a memory map; runtime addresses remain TODO (not disassembled)."
  },
  "entry": {
    "init": "TODO: no public source/disassembly found",
    "play": "TODO: no public source/disassembly found"
  },
  "speed": "TODO: precise model unconfirmed. DeepSID's players.json lists supported speeds as \"1x, 2x, 4x\" and CPU cost as \"Approx 27-36 rasterlines [SD]\" — documented by DeepSID, not independently verified here. The manual's own tune-parameter field \"multispd\" (\"set tune frame speed\") confirms a per-tune multispeed setting exists, consistent with DeepSID's note, but does not state the exact CIA/raster mechanism.",

  "data_format": {
    "order_list": "Documented by the tool's own manual (ast11.txt): a \"track table\" per channel — $00 = fixed blank 64-row pattern, $01-$7F = pattern number, $80-$EF = transpose value ($C0 = neutral, affects subsequent patterns), $FF = loop-track marker (loops to the row number given in the next table row). Three tracks (one per SID voice) plus 2 macrocommand columns (WV/AR) share one table. Matches DeepSID's \"order list with three patterns side by side\" description at a high level; the manual gives the actual byte encoding DeepSID does not.",
    "patterns": "Documented by the manual: a pattern is one channel's column of notes+effects (NOT a PC-style all-channel-at-once pattern), up to 64 rows, terminated early by a $FF byte in the effect column of the desired row (\"the packer always looks for the first $FF value\"). Each row: 1 note byte (or the \"===\" release/note-off marker) + 1 effect-command byte. DeepSID's players.json states \"127 patterns; each up to 63 rows\" (pattern count and near-identical row cap) — not contradicted by the manual, which doesn't state the max pattern count, only the per-pattern 64-position/early-$FF-termination mechanics.",
    "instruments": "Documented by the manual as the \"sound table\", addressed by sound number x octave number, 12 parameter columns per slot: A/D, S/R (envelope), WAV/ARP (row pointers into the wave/arpeggio macro tables), VDE/VDS (vibrato delay / depth+speed), WAS (wave-macro / arpeggio-macro step rate, one nibble each), PUL/FLT (row pointers into the pulse/filter macro tables), MCP (multicutoff/multipulse switch speed), DTN (per-channel detune), REG (hard-restart, vibrato-arpeggio/portamento-enable, and restart-frame-count bits — V1.1 also documents 2 bits as \"AST v1.0 bug emulation\" compatibility flags, implying V1.0's hard-restart/tie-note/portamento behaviour genuinely differs and isn't identical to V1.1). DeepSID's players.json states a fixed count of \"31\" instrument slots — not stated as a hard limit anywhere in the manual, so left attributed to DeepSID only.",
    "wavetable": "Documented by the manual: independent from the arpeggio table, stepped at a rate set by the instrument's WAS left nibble. Bytes $00-$DF are written directly to SID waveform/gate control registers ($D404 et al.); $E0 = override ADSR with the next two bytes; $E1-$FD = wait 1-29 frames; $FE = end (hold last value); $FF = loop to the row given in the next byte.",
    "pulsetable": "Documented by the manual: nibble-reversed pulse-width deltas. $00 xx sets the high pulse nybbles to xx; $01-$7E xx adds 1-7E to the low pulse nybbles over xx frames; $7F xx waits xx frames; $80-$FE xx subtracts over xx frames; $FF xx loops to row xx.",
    "filtertable": "Documented by the manual: same shape as the pulse table but targets the nibble-reversed $D415/$D416 cutoff value, plus a required $80 xy start row (x = resonance nibble, y = filter-type bitmask: 1 = lopass, 2 = bandpass [\"by pass\" in the source text], 4 = hipass)."
  },
  "effects": {
    "encoding": "Documented by the manual: one effect-command byte per pattern row, high nibble = command number ($0x-$Fx), low nibble = parameter/index into the instrument, indexes table, or a direct value depending on command. \"AST v1.1 player remembers all recently declared values of individual effects\" — i.e. most effects persist across rows until re-set or explicitly zeroed, not one-shot per row.",
    "commands": {
      "$0x-$1x": "set instrument number x; a tune should always start with one",
      "$2x": "note-property bitmask: 1=tie/legato (freq change only), 2=sync (overrides waveform), 4=ring-mod (overrides waveform), 8=no pulse-position restart on new note",
      "$3x": "portamento to target note at speed x; 0 ends portamento (frequency-only unless instrument REG bit 6 is set)",
      "$4x": "vibrato depth from indexes-table row x (0 = reset to instrument/VDS default); requires non-zero VDS speed to be audible",
      "$5x": "set attack to x",
      "$6x": "set decay to x",
      "$7x": "set sustain to x",
      "$8x": "set release to x (note: instrument declaration $0x-$1x restarts all ADSR values)",
      "$9x": "execute waveform macro from indexes-table row x (0 = normal/instrument waveform); $F = silent 'coding event' (inc $04) for audiovisual sync only",
      "$Ax": "execute arpeggio macro from indexes-table row x (0 = normal/instrument arpeggio)",
      "$Bx": "set pulse: from indexes-table row x (0 = instrument's pulse) if instrument MCP right nybble = 0; otherwise x becomes a static 2nd-pulse high-nybble value (multipulse mode)",
      "$Cx": "set filter/cutoff: from indexes-table row x (0 = instrument's filter) if instrument MCP left nybble = 0; otherwise x becomes a static 2nd-cutoff high-nybble value (multicutoff mode)",
      "$Dx": "set volume to x (default $F)",
      "$Ex": "toggle per-channel filter-routing bitmask: 1/2/4 = channel 1/2/3, 8 = no cutoff-position restart on new note",
      "$Fx": "0 = stop tune; 1-E = set tempo from indexes-table row x; F = end-of-pattern (stops all tracks early)"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "No public source code or binary disassembly was located for the actual C64 play routine (searched CSDb, GitHub, the author's own site). However, the official release disks (downloaded directly from CSDb) bundle the tool's own plain-text manual (ast11.txt) which documents the *editor/data format* in detail — track table, pattern layout, wave/arpeggio/pulse/filter macrocommand tables, and the full 0x-Fx pattern-effect command set. That manual is the source for this card's `data_format`/`effects` fields (status raised stub->in-progress on that basis); `memory.zero_page`, `entry.init`/`entry.play`, and exact runtime addresses remain TODO since no code disassembly was done.",
    "The author's own site (http://tinnitus.prv.pl, credited on both CSDb releases as the tool's home) is dead — a Polish free-hosting placeholder page as of this research pass, no archived content about the tracker found.",
    "Two known CSDb releases exist under this SIDId tag family: V1.0 (csdb.dk/release/?id=11576, 26 Jan 2004, credited to Samar Productions and Tinnitus) and V1.1 (csdb.dk/release/?id=13228, 31 May 2004, credited to Tinnitus). SIDId's 'Asterion_V1.x' tag and this card's csdb_release point at the earlier V1.0 release; DeepSID's players.json entry for the tool instead cites csdb_id 13228 (V1.1) — the two sources disagree on which release id represents \"the\" tool, most likely because V1.1 is the refined/canonical version. Not resolved further here.",
    "Composer concentration is a strong 'personal/small-scene routine, not a widely published tool' signal: of 67 files in the local dataset tagged Asterion_V1.x, 52 (78%) are by Asterion himself, 13 by Trompkins, and 2 by Tinnitus (the group account) — all three are members of the Polish group Tinnitus / Samar Productions, the tool's own credited authors/publishers. No use outside that circle was found in this dataset.",
    "DeepSID's players.json carries a fuller technical spec table (instrument count, pattern/order-list shape, speed options, ZP usage note, CPU cost estimate) than SIDId does. Most of that is now cross-confirmed at a structural level by the manual (order-list/pattern shape, per-tune multispeed); the exact instrument-slot count (31), ZP usage, and rasterline cost remain attributed to DeepSID only, since the manual doesn't state them.",
    "Both official release disk images (ast10.d64, ast11.d64) bundle example tunes exported via the editor's own included 'PACK&RELOC' utility. All 19 of them (16 on V1.0's disk, 3 on V1.1's) individually load at the same fixed PRG address $46F0 regardless of tune size — read directly from each PRG's 2-byte load header (file-format inspection, not disassembly). This is very likely the packer's fixed player+song base address for distributed tunes, but that inference is not confirmed by disassembling PACK&RELOC or a packed tune's actual code.",
    "The V1.1 manual explicitly documents behavioural differences from V1.0: two REG-byte bits are labelled 'AST v1.0 bug emulation' (pulse/waveform restart on tie-note and on portamento), and V1.1 adds working vibrating-portamento plus a 94-note range (c#0-a#7) versus V1.0. Anyone reconstructing V1.0 playback specifically should not assume V1.1's manual describes it byte-for-byte identically."
  ],
  "sources": [
    "sidid: Asterion_V1.x (author Rafal Kazimierski (Asterion); released 2004; reference https://csdb.dk/release/?id=11576) — data/sidid.json / github.com/cadaver/sidid sidid.nfo",
    "CSDb release V1.0: https://csdb.dk/release/?id=11576 (\"Asterion Sid-Tracker V1.0\", 26 Jan 2004, Samar Productions + Tinnitus); official download https://csdb.dk/getinternalfile.php/61622/ast10.zip (ast10.d64 disk image)",
    "CSDb release V1.1: https://csdb.dk/release/?id=13228 (\"Asterion Sid-Tracker V1.1\", 31 May 2004, Tinnitus); official download https://csdb.dk/getinternalfile.php/61628/ast11.zip (ast11.d64 disk image + ast11.txt manual)",
    "Tool's own manual, ast11.txt (bundled in the official ast11.zip download above) — primary source for `data_format`/`effects`/`speed` fields; full text preserved at knowledge/artifacts/asterion.txt",
    "$46F0 packed-tune load address: observed directly from ast10.d64/ast11.d64 directory listings + PRG headers (19 bundled example tunes, both disks) — see knowledge/artifacts/asterion.txt for the raw observation; not from disassembly",
    "DeepSID players database entry \"Asterion Sid-Tracker v1.x\" (data/players.json, developer Asterion, start_year 2004, csdb_id 13228, site http://tinnitus.prv.pl) — spec table used above for hedged TODO notes (instrument count, ZP, CPU cost) not covered by the manual",
    "CSDb sid entry confirming real name: https://csdb.dk/sid/?id=28523 (\"Caer Aisling\" / Rafal Kazimierski (Asterion) / 2006 HVSC)",
    "Local dataset: 67 files tagged Asterion_V1.x across 3 composers (asterion.json 52, trompkins.json 13, tinnitus.json 2) — see knowledge/COVERAGE.md (rank 10, 67 files)"
  ]
}
```

## Overview

Asterion Sid-Tracker is a native C64 music tracker by Rafal Kazimierski
("Asterion"), a member of the Polish group Tinnitus (also released under
Samar Productions). Two versions are documented on CSDb: V1.0 (26 Jan 2004)
and V1.1 (31 May 2004). It is a small, group-internal tool rather than a
widely-adopted one: in this project's local dataset it accounts for 67 files
across only 3 composers, 78% of them by Asterion himself, with the rest by
his two Tinnitus/Samar Productions groupmates (Trompkins, and the Tinnitus
group account) — the composer-concentration signal described in
`knowledge/EXTRACTION-TEMPLATE.md` for a personal/small-scene routine.
Although no binary disassembly exists, the official release disks (both
downloaded directly from CSDb) bundle the tool's own plain-text manual
(`ast11.txt`), which documents the tracker's data format and pattern-effect
command set in real detail — enough to raise `status` from `stub` to
`in-progress` for the `data_format`/`effects`/`speed` fields, while
`memory`/`entry` (the actual runtime addresses) remain `TODO`.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: **the tool's own manual
(bundled in the official release download) documents the data format and
effect commands in full**, even though no code disassembly exists — this is
the reason `status` moved to `in-progress`; **all 19 example tunes on both
release disks load at the same fixed PRG address $46F0**, observed directly
from the disk images' own PRG headers (not disassembly), likely the packer's
fixed output base; the **SIDId and DeepSID records disagree on which CSDb
release id represents "the" tool** (V1.0 vs V1.1), and the manual itself
flags real V1.0-vs-V1.1 behavioural differences (two "bug emulation" REG
bits); and the **composer concentration (52/67 files by the author
himself)** marks this as an internal group tool, not a broadly published
tracker.

## Disassembly notes

No binary/code disassembly was performed. The official release disks (CSDb
`getinternalfile.php` downloads for both V1.0 and V1.1) were fetched and
inspected directly during this pass: `ast11.zip` bundles a text manual
(`ast11.txt`, preserved verbatim at `knowledge/artifacts/asterion.txt`) that
documents the track table, pattern encoding, wave/arpeggio/pulse/filter
macrocommand table encodings, the sound/instrument table's 12 parameter
columns, and the full `$0x`-`$Fx` pattern-effect command set — all now
transcribed into this card's `data_format`/`effects` fields. Separately, the
D64 disk images' own directory + PRG headers were parsed (standard C64 PRG
2-byte load-address header, not code disassembly) to find that all 19
bundled example tunes load at $46F0. No attempt was made to disassemble the
packed tunes or the `PACK&RELOC` utility itself, so init/play entry points,
zero-page usage, and exact table addresses are still `TODO`.

## Verification

**Not verified — `status: in-progress`.** Identity/provenance facts (author,
CSDb releases, composer usage) are confirmed as before. This pass adds
real, citable `data_format`/`effects`/`speed`-adjacent facts sourced
directly from the tool's own manual (bundled in the official CSDb release
download, not a third party's re-description) plus one memory fact ($46F0
packed-tune load address) read from the release disks' own PRG headers.
Neither of these required disassembling any code, so `entry.init`/
`entry.play`/`memory.zero_page` remain `TODO`, and `status` stops at
`in-progress` rather than `verified` — verification requires reassembling
init/play and tracing it through `sidm2-siddump`, which was out of scope
for this pass.

## Sources

See the `sources` array — the cached SIDId entry (`Asterion_V1.x`), the two
CSDb release pages (V1.0 id 11576, V1.1 id 13228) and their official
download links, the tool's own bundled manual (`ast11.txt`, preserved at
`knowledge/artifacts/asterion.txt`), direct inspection of both disk images'
PRG headers, DeepSID's players.json spec entry, a CSDb `.sid` entry
confirming the real name, and the local dataset's 67 tagged files across 3
composers.

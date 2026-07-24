# Asterion Sid-Tracker

```json
{
  "id": "asterion",
  "name": "Asterion Sid-Tracker",
  "aliases": ["Asterion_V1.x"],
  "authors": ["Rafal Kazimierski (Asterion)"],
  "released": "2004 (V1.0: 26 Jan 2004; V1.1: 31 May 2004)",
  "status": "verified",
  "platform": "Native C64 tracker/editor + its own C64 replay routine embedded in exported tunes. No cross-platform component found.",
  "csdb_release": 11576,

  "memory": {
    "load_address": "Confirmed via disassembly on two independent real HVSC files: both `Caer_Aisling.sid` and `Adventure.sid` (MUSICIANS/T/Tinnitus/Asterion/) carry a PSID header with load-address field 0 (real load address = the payload's own first 2 LE bytes) resolving to $1000 for both files, and SIDdecompiler's own `-v2` memory-map \"Start:\" line independently confirms $1000 as the lowest touched address on both — no relocation-base mismatch (see project gotcha 40). This is DIFFERENT from the $46F0 fixed base observed on the official release disks' own PACK&RELOC-packed example tunes (see quirks) — real HVSC rips of this player's tunes load at $1000, not $46F0; the $46F0 figure describes only the specific distribution-disk packaging, not the player's native load address.",
    "zero_page": "Confirmed via disassembly on both test files: exactly 2 bytes, $FB-$FC, used as a single 16-bit indirect pointer (`lda (zfb),Y`) for order-list/table indexing inside the play routine — matches DeepSID's players.json note (\"Sometimes 2 bytes ($FB-$FC)\") exactly; now independently verified, not just attributed to DeepSID.",
    "layout": "Documented at the editor/source-format level by the tool's own manual (ast11.txt, bundled on the official V1.1 release disk): three parallel per-channel \"tracks\" (order lists) sit alongside independent wave/arpeggio/pulse/filter macrocommand tables and an \"indexes\" table (9x/Ax/Bx/Cx/4x/Fx rows) that pattern effects point into. Runtime table base addresses are file-specific (each exported tune embeds its own tables at addresses fixed by the packer for that file) — not a single fixed memory map across all tunes; not attempted to generalize beyond the two disassembled files."
  },
  "entry": {
    "init": "PSID header init vector = $1000 (confirmed via disassembly + trace on 2 files). This address itself is only a 3-byte `JMP` stub in `Caer_Aisling.sid` (`JMP $1746`, the real init routine) — but in `Adventure.sid` there is no stub; the real init routine sits at a different address ($14ba) reached the same way (`JMP $14ba` at $1000). The stub-vs-direct-jump pattern is file-specific (packer/relocation artifact per exported tune), not a fixed convention — always disassemble from the file's own PSID-declared $1000, don't assume a fixed offset to the 'real' init.",
    "play": "PSID header play vector = $1003 (confirmed via disassembly + trace on 2 files). In `Caer_Aisling.sid` this is a 3-byte `JMP $1040` stub to the real play routine; in `Adventure.sid` $1003 directly IS the first instruction of the real play routine (`lda zfb` / `pha` / ...), no stub at all. Same file-specific caveat as `entry.init`."
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
    "The V1.1 manual explicitly documents behavioural differences from V1.0: two REG-byte bits are labelled 'AST v1.0 bug emulation' (pulse/waveform restart on tie-note and on portamento), and V1.1 adds working vibrating-portamento plus a 94-note range (c#0-a#7) versus V1.0. Anyone reconstructing V1.0 playback specifically should not assume V1.1's manual describes it byte-for-byte identically.",
    "Disassembly + reassembly (SIDdecompiler.exe -a4096, 64tass.exe) of two independent real HVSC files (Caer_Aisling.sid, Adventure.sid) both relocate cleanly to $1000 with no Start:-vs-load-address mismatch (gotcha 40 does not apply here). Both files' raw disassemblies came back byte-diff 98.37% and 98.55% respectively before any fix — both mismatch clusters landed entirely inside SIDdecompiler's own `-v2` map '+'/write-touched address ranges (the standard 'post-execution snapshot of a data table' signature — project gotchas 40/41). Patching the affected `.byte` table lines in each `.asm` back to the file's own pristine bytes (per the project's established `l<hex> .byte` label-anchored patch method) closed BOTH to 100.0000% byte-exact reassembly.",
    "Trace-diffing confirmed the two files' drifted-table clusters were NOT equally significant: on Caer_Aisling.sid the unpatched reassembly diverged from the real file's register-write trace starting at frame 0 (2 missing oscillator-frequency writes, then 2 wrong 'old value' pairs at frame 6) — i.e. those particular drifted bytes were genuinely load-bearing cold-start data, not dead workspace. On Adventure.sid the unpatched reassembly was ALREADY register-write-identical to the original over 150 frames despite the same-shaped byte-diff — i.e. that file's drifted bytes were dead. Both patched reassemblies are register-write-exact regardless. This is a fresh confirmed instance of gotcha 41 (write-touched bytes are not reliably dead, file-dependently) inside a single player, on two files disassembled the same way."
  ],
  "sources": [
    "sidid: Asterion_V1.x (author Rafal Kazimierski (Asterion); released 2004; reference https://csdb.dk/release/?id=11576) — data/sidid.json / github.com/cadaver/sidid sidid.nfo",
    "CSDb release V1.0: https://csdb.dk/release/?id=11576 (\"Asterion Sid-Tracker V1.0\", 26 Jan 2004, Samar Productions + Tinnitus); official download https://csdb.dk/getinternalfile.php/61622/ast10.zip (ast10.d64 disk image)",
    "CSDb release V1.1: https://csdb.dk/release/?id=13228 (\"Asterion Sid-Tracker V1.1\", 31 May 2004, Tinnitus); official download https://csdb.dk/getinternalfile.php/61628/ast11.zip (ast11.d64 disk image + ast11.txt manual)",
    "Tool's own manual, ast11.txt (bundled in the official ast11.zip download above) — primary source for `data_format`/`effects`/`speed` fields; full text preserved at knowledge/artifacts/asterion.txt",
    "$46F0 packed-tune load address: observed directly from ast10.d64/ast11.d64 directory listings + PRG headers (19 bundled example tunes, both disks) — see knowledge/artifacts/asterion.txt for the raw observation; not from disassembly",
    "DeepSID players database entry \"Asterion Sid-Tracker v1.x\" (data/players.json, developer Asterion, start_year 2004, csdb_id 13228, site http://tinnitus.prv.pl) — spec table used above for hedged TODO notes (instrument count, ZP, CPU cost) not covered by the manual",
    "CSDb sid entry confirming real name: https://csdb.dk/sid/?id=28523 (\"Caer Aisling\" / Rafal Kazimierski (Asterion) / 2006 HVSC)",
    "Local dataset: 67 files tagged Asterion_V1.x across 3 composers (asterion.json 52, trompkins.json 13, tinnitus.json 2) — see knowledge/COVERAGE.md (rank 10, 67 files)",
    "Disassembly/reassembly/trace-diff verification (this pass): SIDdecompiler.exe (C:\\Users\\mit\\claude\\c64server\\SIDM2\\tools\\SIDdecompiler.exe) run at -a4096 -z -d -c -v2 on two real HVSC files (MUSICIANS/T/Tinnitus/Asterion/Caer_Aisling.sid, MUSICIANS/T/Tinnitus/Asterion/Adventure.sid), reassembled with 64tass.exe (C:\\debugger\\64tass\\64tass.exe -a --cbm-prg), byte-diffed and .byte-patched in Node, trace-diffed with sidm2-sid-trace.exe (C:\\Users\\mit\\claude\\c64server\\SIDM2\\tools\\sidm2-sid-trace.exe, stderr output per project lesson 46) over 100-150 frames each — see this card's Verification section for the exact results."
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
The official release disks (both downloaded directly from CSDb) bundle the
tool's own plain-text manual (`ast11.txt`), which documents the tracker's
data format and pattern-effect command set in real detail — this raised
`status` from `stub` to `in-progress` for the `data_format`/`effects`/`speed`
fields in an earlier pass. This pass closed the remaining gap: two real HVSC
files (`Caer_Aisling.sid`, `Adventure.sid`, both by Asterion himself) were
disassembled with SIDdecompiler, reassembled with 64tass, byte-diffed, patched
to 100.0000% byte-exact, and trace-diffed to a register-write-exact match
against the originals over 100-150 frames — closing `entry.init`/`entry.play`/
`memory.zero_page` and raising `status` to `verified`.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: **the tool's own manual
(bundled in the official release download) documents the data format and
effect commands in full**; **all 19 example tunes on the official release
disks load at the fixed PRG address $46F0**, which is the packer's
distribution-disk base and NOT the same as the $1000 native load address
real HVSC rips of this player's tunes actually use (confirmed this pass —
see `memory.load_address`); the **SIDId and DeepSID records disagree on
which CSDb release id represents "the" tool** (V1.0 vs V1.1); the **composer
concentration (52/67 files by the author himself)** marks this as an
internal group tool; and (new this pass) **the drifted-table byte-diff
divergence between the two disassembled files was load-bearing on one file
and dead on the other**, despite an identical-shaped byte-diff pattern in
both — a fresh instance of the project's gotcha 41 (self-modified/write-
touched bytes are not reliably dead, and that has to be re-checked per file,
not assumed from one file's result).

## Disassembly notes

This pass performed real disassembly, contradicting the previous pass's
"no code disassembly" note. Two files were used, both from
`MUSICIANS/T/Tinnitus/Asterion/` in the local HVSC collection:
`Caer_Aisling.sid` (5165-byte payload) and `Adventure.sid` (3032-byte
payload). Both carry a PSID header with load-address field 0 (real load
address embedded as the payload's own first 2 LE bytes) resolving to
$1000, init=$1000, play=$1003, 1 subtune each.

`SIDdecompiler.exe Caer_Aisling.sid -oCaer_Aisling.asm -a4096 -z -d -c -v2`
(4096 decimal = $1000, per project gotcha 1) produced a clean, non-wrapping
disassembly — the `-v2` map's own "Start:" line read $1000, matching the
PSID load address exactly (no gotcha-40 mismatch on this player).
Reassembling with `64tass.exe -a --cbm-prg` reproduced the exact original
length ($1000-$242c, 5165 bytes) with no warnings. Byte-diffing the
reassembled `.prg` payload against the original SID payload gave 98.3737%
(84 of 5165 bytes differing, concentrated in two clusters: $1785-$180b and
$1920-$1930). Both clusters fell entirely inside `-v2`-map `+`/write-touched
address ranges — the standard "SIDdecompiler captured a post-execution
snapshot of a data table instead of its pristine cold-start value" pattern.
A first trace (20 frames, `sidm2-sid-trace.exe`) showed this divergence WAS
audible: frame 0 was missing 2 SID register writes (osc3/osc2 frequency-lo)
and frame 6 showed 2 writes with the correct new value but wrong recorded
old value, both traceable to the same drifted-table region. Patching the
84 differing bytes back to their pristine values directly in the `.asm`'s
`l<hex> .byte` lines (address-anchored per the project's established method,
not sequential-counter-based — see gotcha 26) and reassembling gave
100.0000% byte-exact (0/5165 diffs), and a 100-frame trace-diff against the
original came back completely identical (only the echoed filename line
differed).

The same procedure on `Adventure.sid` (`-a4096`, Start: $1000, no mismatch)
gave a raw byte-diff of 98.5488% (44 of 3032 bytes, two clusters:
$14ea-$153e and $161b-$162d), again entirely inside `-v2`-map write-touched
ranges. Here the UNPATCHED reassembly was already register-write-identical
to the original over 150 frames — i.e. this file's drifted bytes were dead
workspace, unlike Caer_Aisling's. The same `.byte`-line patch method was
still applied for consistency, closing this file to 100.0000% byte-exact
as well, with the (already-exact) trace unaffected.

Both files' real init/play routines were also read directly off the
disassembly: `Caer_Aisling.sid`'s PSID-declared $1000/$1003 vectors are
3-byte `JMP` stubs to $1746 (init) and $1040 (play); `Adventure.sid`'s
$1000 vector is also a stub (`JMP $14ba`), but its $1003 play vector is NOT
a stub — the real play routine's first instruction sits directly at $1003.
Zero-page usage was confirmed identical on both files: exactly $FB-$FC,
used as one 16-bit indirect pointer (`lda (zfb),Y`) for table indexing
inside the play routine — matching (and now independently confirming)
DeepSID's players.json note.

## Verification

**Verified — `status: verified`.** Two independent real HVSC files
(`Caer_Aisling.sid`, `Adventure.sid`, both MUSICIANS/T/Tinnitus/Asterion/)
were disassembled (SIDdecompiler, `-a4096 -z -d -c -v2`, relocation base
confirmed via `-v2`'s own Start: line, no gotcha-40 mismatch), reassembled
(64tass), byte-diffed, and — after patching the drifted-table bytes back to
pristine values directly in the `.asm`'s labeled `.byte` lines — both reached
**100.0000% byte-exact** reassembly (0 diffs / 5165 bytes and 0 diffs / 3032
bytes respectively) and a **register-write-exact trace-diff** against the
real files (100 frames for Caer_Aisling, 150 frames for Adventure, via
`sidm2-sid-trace.exe`, stderr-captured per project lesson 46) — identical
output on every SID register write, only the echoed input filename line
differing. This closes `entry.init`, `entry.play`, and `memory.zero_page`
(previously `TODO`) with cited, run-verified facts, and confirms
`memory.load_address` at $1000 for real HVSC-distributed tunes (distinct
from the $46F0 packer base seen on the official release disks' own bundled
examples). `data_format`/`effects`/`speed` are unchanged from the prior
manual-sourced pass. Not independently re-verified: files by the other two
composers (Trompkins, Tinnitus group account) — the two files tested are
both by Asterion himself; given the near-identical player-routine structure
across the two tested files (same entry-point convention modulo the
stub/no-stub difference, same ZP usage, same drifted-table mechanism), a
third file by a different composer would be the natural next check if this
card is revisited, but was not required to reach the register-write-exact
bar already met.

## Sources

See the `sources` array — the cached SIDId entry (`Asterion_V1.x`), the two
CSDb release pages (V1.0 id 11576, V1.1 id 13228) and their official
download links, the tool's own bundled manual (`ast11.txt`, preserved at
`knowledge/artifacts/asterion.txt`), direct inspection of both disk images'
PRG headers, DeepSID's players.json spec entry, a CSDb `.sid` entry
confirming the real name, the local dataset's 67 tagged files across 3
composers, and this pass's disassembly/reassembly/trace-diff verification
(SIDdecompiler.exe, 64tass.exe, sidm2-sid-trace.exe on two real HVSC files).

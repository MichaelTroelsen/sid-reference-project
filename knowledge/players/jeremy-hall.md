# Jeremy Hall (player routine)

```json
{
  "id": "jeremy-hall",
  "name": "Jeremy Hall (player routine)",
  "aliases": ["Jeremy_Hall"],
  "authors": ["Jeremy Hall"],
  "released": "1984-1988",
  "status": "verified",
  "platform": "English coder-musician Jeremy Hall's own hand-coded playroutine — confirmed both coder and musician via his own CSDb scener profile (member of group I.O.U.), with one confirmed commercial game credit (Mr Mephisto, 1984). Player-ID-fingerprinted across 3 files, all his own, including a Led Zeppelin cover. Disassembled/reassembled/trace-verified all 3 tagged HVSC files (2026-08-01) — see Verification.",
  "csdb_release": null,

  "memory": { "load_address": "Per-file, freshly assembled each release (all confirmed by direct disassembly): G-Force $8038 (init $8166, play $80ca, 1 subtune); Mr_Mephisto $1000 (init=load $1000, play load+3 $1003, 2 subtunes); Stairway_to_Heaven $c03e (init $c2a2, play $c0c0, 4 subtunes). No relocation/workspace gotchas on any of the 3 — SIDdecompiler's -v2 'Start:' matches each file's own PSID load address exactly.", "zero_page": "Two build variants confirmed by disassembly. G-Force (simpler/earlier?): only $9E/$9F used, as the live (ptr),Y song-stream pointer; the loop-restart pointer, tempo-divider counter and Y-save all live in ordinary RAM right after the code ($80C0-$80C4). Mr_Mephisto and Stairway_to_Heaven (identical scheme, both use it): move the SAME state into zero page — $A7 loop-restart-ptr-lo, $A8 loop-restart-ptr-hi, $A9/$AA a 16-bit tempo-divider countdown (decremented every play call via SEC/SBC, only advances the stream pointer on borrow), $AB Y-save, $FB/$FC a duplicate loop-restart-ptr, $FD/$FE the live (ptr),Y song-stream pointer.", "layout": "3-voice-interleaved single byte-stream format (not 3 separate per-voice streams): each play call reads one byte per voice (Y, Y+1, Y+2) from the same indirect pointer, in voice1/voice2/voice3 order, then saves the advanced Y back. Byte value 0 = rest (no note); bit7 set = loop-restart marker (reload the pointer from the loop-restart-ptr and re-read at Y=0); otherwise the byte is a note index, doubled (ASL) and used as an X-index into a 2-byte-stride (lo,hi) frequency table to set freq-lo/freq-hi, followed by a hard gate-off/gate-on retrigger (waveform written with gate bit clear then set) on that voice's control register." },
  "entry": { "init": "Per-file, see memory.load_address. Mr_Mephisto's init/play are literal 3-byte JMPs into the routine at load/load+3 — a deliberately stable external-call convention distinct from G-Force/Stairway, whose init/play sit at fixed absolute addresses deep inside the loaded block.", "play": "Called once per frame (IRQ-driven in-game, tested directly via PSID play vector here); see memory.load_address for per-file addresses." },
  "speed": "Not driven by a per-row speed/tempo table — a 16-bit ($A9/$AA on Mephisto/Stairway, RAM-resident equivalent on G-Force) countdown decremented once per play call; the song-stream pointer only advances (and a new triplet of voice bytes is read) once the countdown borrows past zero. The countdown's own reload value is set once in INIT from a per-song constant, not re-read per row — so this driver has exactly one tempo per song, no mid-song speed changes observed in any of the 3 files' disassembly.",
  "data_format": { "order_list": "None — a single flat interleaved note-byte stream per song (see memory.layout), terminated/looped via a bit7-set marker byte rather than a distinct order-list structure.", "patterns": "N/A, same flat-stream format.", "instruments": "None — each voice's ADSR (attack/decay $D405/$D40C/$D413, sustain/release $D406/$D40D/$D414) and pulse-width-equivalent constant are written once in INIT from fixed per-song bytes; no per-note instrument selection observed.", "wavetable": "Fixed waveform value per song (INIT writes $20 then immediately $21 to each voice's control register as a hard retrigger on every note-on) — no wavetable/waveform sequencing found.", "pulsetable": "TODO — no pulse-width writes observed in any of the 3 disassembled files (all 3 appear to be plain triangle/sawtooth/pulse-fixed voices with no PWM sweep in the traced window).", "filtertable": "None used in any of the 3 files — the disassembly contains no $D415-$D417 writes at all, not just none observed in the traced window; the filter is genuinely unused by this driver in every released tune." },
  "effects": { "encoding": "None found — no vibrato/portamento/arpeggio logic in any of the 3 disassembled play routines; a note event is exactly (index, duration-via-tempo-only) with a fixed-length hard gate-off/gate-on retrigger.", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "HVSC HAS NO METADATA AT ALL — a bare 'Hall, Jeremy' entry, no country, no group. Country (likely UK) is inferred circumstantially from his confirmed CSDb scene activity and 'Mr Mephisto' game credit, not an HVSC-sourced fact.",
    "CSDb SCENER PROFILE CONFIRMS BOTH CODER AND MUSICIAN (id=29017): roles Coder AND Musician, not music-only. Only confirmed release as BOTH coder and musician: 'Ball IV' (1986, one-file demo). Music-only credits on OTHER groups' releases: Intro Editor V5.0 (Beastie Boys, 1987 tool), Musik Eddi 2 (Orionsoft, 1986), Venom Demo II (I.O.U., 1986), A New Little Demo (The Mupet Babies, 1988), The Porsche V1.2 (BrianSoft, 1986), Costa del Sol (Danish Graphic Makers, 1986), plus a re-released 'Mr. Mephisto Themes' music collection (Bitstoppers/German Spreading Service, 1986) and a 2020 cracktro reusing his old music. Demozoo independently lists him only as a member of group I.O.U.",
    "'MR MEPHISTO' (1984) CONFIRMED AS A REAL COMMERCIAL GAME, an overhead-view arcade/climbing title, sourced from a Lemon64 forum thread and MobyGames: programmer Dave Lucas, musician J. Hall (Jeremy Hall), with a 'G. Hunt' also mentioned as a collaborator in an UNCONFIRMED role (possibly graphics or a second programmer, not established). Published by Euro-Byte Ltd. (Godalming, Surrey, England) 1984, clam-case; re-released by Bug-Byte (London) 1986, single case.",
    "'G-FORCE' (the traced file) COULD NOT BE INDEPENDENTLY CONFIRMED as a distinct commercial release — extensive searching (Lemon64, MobyGames, GB64, Demozoo, general web) found no distinct C64 game page matching this title from the mid-1980s associated with Hall, Euro-Byte, or Bug-Byte. NO connection to the Gerry Anderson 'Battle of the Planets'/G-Force property was found — that association is EXPLICITLY treated as speculative, not fact. Genuinely possible this is an obscure budget title, a type-in listing, or a non-game demo/tool by that name — flagged as unresolved, not guessed at.",
    "'STAIRWAY TO HEAVEN' IS VERY LIKELY A LED ZEPPELIN COVER ARRANGEMENT (the title is too distinctive to be coincidental, and pop-song covers were common practice among early C64 musicians) — but NO explicit confirming source was found (no STIL.txt comment, no CSDb/Demozoo annotation stating 'cover of Led Zeppelin'). Reported as a high-confidence inference, not a sourced fact.",
    "G-FORCE'S SPARSE PROFILE (8 writes/50 frames, osc1 only in that trace window) IS A PROPERTY OF THAT PARTICULAR SONG, NOT THE ENGINE — disassembly confirms the routine is fully 3-voice (identical osc1/osc2/osc3 setup blocks in all 3 files); G-Force's own trace just never happens to trigger voice 2/3 or a filter write in the traced 50-frame window. Superseded 2026-08-01; see Verification.",
    "THE FIXED-ADDRESS FREQUENCY-TABLE ADDRESSING SCHEME IS A REAL SIDdecompiler-RELOCATION TRAP, confirmed and fixed this pass (hard_won_gotchas 40/lesson 77 family): the note-lookup is `LDA <literal-base>,X` / `LDA <literal-base+1>,X` where `<literal-base>` = this file's own load address MINUS a small fixed offset (0x38 on G-Force, 0x3e on Stairway_to_Heaven) — SIDdecompiler emits it as a raw absolute literal (not a symbol) because the table's own low-index entries (for note values below the range this song's own data ever uses) fall outside the loaded file. Left unpatched, a relocated rebuild reads the wrong table location and drops every note-frequency write while still emitting the gate-on/off control writes — a plausible-looking but silently wrong partial trace, not a crash. Mr_Mephisto does NOT hit this: its songs use a note range starting at/near table index 0, so the identical table is fully in-range and SIDdecompiler symbolizes it correctly as `l1107,X`/`l1108,X` with no patching needed. Fix used: rewrite the literal to `(new_load_address - offset),X` in a relocated control build.",
    "TWO BUILD VARIANTS CONFIRMED BY DISASSEMBLY, SAME ALGORITHM: G-Force keeps its loop-restart pointer, tempo-divider countdown and Y-save in ordinary RAM right after the code ($80C0-$80C4), using zero page ($9E/$9F) only for the one pointer that architecturally requires it (6502 `(zp),Y` indirect addressing). Mr_Mephisto and Stairway_to_Heaven (byte-identical zero-page layout between the two) instead keep that whole state block in zero page ($A7-$AB, $FB-$FE). Not dated/ordered — could be an earlier/later revision or simply a per-title choice; no external evidence found either way.",
    "Not confirmed in SIDId (no entry for this tag). No known relationship found to any composer/tool already in this KB — no basis to link him to any of the 168+ existing player cards given his isolated, minimal bespoke routine and small commercial/demoscene footprint (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Steve Turner, Jason Page, Nigel Grieve, Matt Furniss, Ed Bogas, David Thiel, Dave Kelly, Daniel Stenberg/SkyLine Editor, Tonal Kaos, Jason Briggs, Marco Scheepers, Rene Romijn/Emotional Mozes, Paul Mudra, Stephen Legg, Steve Bak, Shaun Southern, Antony Crowther, Rick Cardinali, Steffen Wagner, Ulrich Muehl, Alexander Kirsch/Audio Effect Editor, Christoph Bergmann, Colin Davies, Daniele Liverani, Daryll Reynolds, Gavin Graham, Keith Wood, Al Lowe, Andrew Colin, Chris Grigg, Chris Grigg/Lucasfilm, John Prince, Kyle Johnson, Twice Effect Editor — none found)."
  ],
  "sources": [
    "HVSC Musicians.txt (bare 'Hall, Jeremy' entry): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt",
    "CSDb scener id=29017 (Jeremy Hall, Coder/Musician, full credit list): https://csdb.dk/scener/?id=29017",
    "Demozoo — Jeremy Hall (id=134557, I.O.U. membership): https://demozoo.org/sceners/134557/",
    "Lemon64 forum — Mr Mephisto credits (programmer Dave Lucas, musician J. Hall): https://www.lemon64.com/forum/viewtopic.php?t=33033",
    "MobyGames — Mr Mephisto: https://mobygames.com/game/64739/mr-mephisto/",
    "Demozoo — Mr. Mephisto Themes (1986 re-release, music collection): https://demozoo.org/music/314849/",
    "Local dataset: 3 files tagged Jeremy_Hall, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Jeremy_Hall` tag is English coder-musician Jeremy Hall's own
hand-coded playroutine — confirmed both coder and musician via his own
CSDb scener profile, with one confirmed commercial game credit (Mr
Mephisto, 1984). Player-ID-fingerprinted across 3 files, all his own,
including a likely Led Zeppelin cover.

## Quirks & gotchas

See the `quirks` array — the load-bearing one is the **explicitly
unconfirmed 'G-Force' game identity**: extensive searching found no
matching commercial release, and a speculative Gerry Anderson tie-in
theory was explicitly ruled out as unsupported rather than assumed.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — this card's
own disassembly (2026-08-01, `SIDdecompiler` + `64tass`, see Verification)
is the only one that exists. All 3 HVSC `Jeremy_Hall`-tagged files
disassemble to the same 3-voice, single-flat-interleaved-note-stream
engine (details in `data_format`/`memory`).

## Verification

**Byte-exact + trace-exact on all 3 tagged HVSC files (2026-08-01) —
`status: verified`.** Disassembled each with `SIDdecompiler -r` (reload
pristine bytes after tracing, per this project's `-r` lesson) at its own
PSID load address, reassembled with `64tass`, byte-diffed against the
original payload, then trace-diffed both the native reassembly AND a
**relocation-invariance control** (same disassembly reassembled at a
different, non-page-aligned base, so the trace-diff is a real structural
test rather than tautological — see below) against the original via
`sidm2-sid-trace.exe`.

- **G-Force** (load `$8038`, init `$8166`, play `$80ca`, 1 subtune):
  native reassembly **100.0000% byte-exact** (1221/1221 bytes) and
  **0/8 register-write divergences**. Relocation control (delta
  `+$1051`, non-page-aligned): required fixing a real defect —
  `SIDdecompiler` left the note-frequency table's indexing base as a raw
  literal (`LDA $8000,X`/`LDA $8001,X`) rather than a relocatable symbol,
  because this song's lowest-used note index reads below the table's
  in-file start (see `quirks`). Unpatched, the relocated build silently
  dropped every frequency write (0/8 writes matched, only gate on/off
  writes present) — a real, confirmed failure, not a false alarm. Fixed
  by rewriting the literal to `(new_load - $38),X`; the corrected control
  build then matched **0/8 divergences**, with 44 of 1221 bytes genuinely
  differing between the original and the relocated build at matching
  offsets (real evidence, not a tautology).
- **Mr_Mephisto** (load `$1000`, init `$1000`, play `$1003`, 2 subtunes):
  native reassembly **100.0000% byte-exact** (2331/2331 compared bytes —
  5 trailing `$FF` padding bytes past the file's last touched address are
  excluded, not a mismatch) and **0/18 (subtune 0) and 0/12 (subtune 1)
  register-write divergences**. Relocation control (delta `+$4011`):
  same frequency table, but this song's note range starts at/near table
  index 0 so `SIDdecompiler` symbolized it correctly with no patching
  needed — **0/18 divergences**, 32/2331 bytes genuinely differing at
  matching offsets.
- **Stairway_to_Heaven** (load `$c03e`, init `$c2a2`, play `$c0c0`, 4
  subtunes): native reassembly **100.0000% byte-exact** (2495/2495
  bytes) and **0 divergences across all 4 subtunes** (24/12/30/30
  writes). Same literal-table defect as G-Force (offset `$3e` this time,
  same driver/idiom, different per-file assembly), same fix
  (`(new_load - $3e),X`); relocation control (delta `+$1051`) then
  matched **0 divergences across all 4 subtunes**, 36/2495 bytes
  genuinely differing at matching offsets.

Total: 3 files, 7 subtunes, 134 register writes reproduced exactly in
both the native and the (non-tautological) relocation-control builds,
with one real, confirmed, and fixed relocation defect along the way —
this meets the project's register-write-match bar for `verified`. Full
memory map, data format and effects derived from the same disassembly
are now recorded in the `memory`/`data_format`/`effects` fields above
(superseding the earlier `TODO`s from the 2026-07-15 playback-only pass).

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, Demozoo (2 pages), a
Lemon64 forum thread, and MobyGames.

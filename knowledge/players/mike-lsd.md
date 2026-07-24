# Mike/LSD

```json
{
  "id": "mike-lsd",
  "name": "Mike/LSD",
  "aliases": ["Mike/LSD"],
  "authors": ["Michael Vandenberg (Mike)"],
  "released": "1990 Lightning Soundtrack Development (LSD)",
  "status": "verified",
  "platform": "Native C64 in-house routine (Player-ID/SIDId classifies this as a distinct signature; DeepSID dump marks every file using it 'Normal built-in', i.e. embedded in the PRG rather than a separate replay). A 7-file PSID-header sample (see `entry` below) shows the load address itself varies per release ($7000/$8000/$9000/$C000 all observed) while init/play sit at fixed offsets from wherever it was loaded — consistent with a routine that was reassembled/relocated per tune from source rather than shipped as one fixed-address tool binary. No editor/tool binary or source repo was found to confirm a standalone program ever existed.",
  "csdb_release": null,

  "memory": {
    "load_address": "Not a fixed player address — PSID load address varies per release (observed $7000, $8000, $9000, $C000×3 across a 7-file header sample; disassembled samples both load at $C000). The player code itself is a small shared routine positioned a few tens/hundreds of bytes after the load address, its exact offset shifting per file with the size of that tune's own note-data preceding it (see entry.init/entry.play).",
    "zero_page": "CONFIRMED via disassembly (both Antifriction_part_2.sid and Schizofrenia.sid, -z flag): the routine uses NO zero-page addressing at all — grepped the full disassembly for any non-immediate `$XX` (2-hex-digit) operand and found none; every pointer/index operation is done via self-modified absolute-mode operands instead (see quirks).",
    "layout": "Disassembly-confirmed for the two sampled files: load+$0000-$0002 = a 3-byte vector never touched by playback in either sample (SIDdecompiler's own -v2 memory map reports 'Start:' at load+$0003, i.e. these 3 bytes are dead/unreferenced by the PSID init/play calling convention — see the relocation note in Verification); load+$0003 = 3-byte PLAY stub (a `JMP <play_routine>` in Antifriction, functionally equivalent in Schizofrenia); load+$0006 = INIT entry (a plain `JMP <init_routine>` in Antifriction; a 3-byte `LDA #$00 / NOP / JMP <init_routine>` self-modified stub in Schizofrenia — same 3-byte size, different instruction form per release); the real init/play routine bodies then sit at a per-file offset a bit further in (e.g. Antifriction: play routine at load+$99, init routine at load+$2B; Schizofrenia: play routine at load+$9A) — small, tune-dependent shifts consistent with the routine being reassembled per tune rather than shipped at one fixed address. A working-storage table (channel frequency/pulse/ADSR/pointer state, ~$150-$200 bytes long, e.g. $C1A6-$C1FB in the Antifriction sample) sits inline in the loaded code region and is both read and self-modified at runtime — see quirks and Verification."
  },
  "entry": {
    "init": "CONFIRMED, disassembly + trace: init = load+$0006 in every one of a 7-file PSID-header sample (Antifriction pt.2 $C000/init $C006, Schizofrenia $C000/init $C006, Zoolookologie_5 $C000/init $C006, Broken_Dreamz_1 $C000/init $C006, Animantix $9000/init $9006, Enigma $8000/init $8006, Taulabda_Delta $7000/init $7006), and now disassembled+traced on 2 of those 7 (Antifriction_part_2, Schizofrenia): a 3-byte stub at load+$0006 jumps (directly or via a self-modified 3-byte preamble) into the real init routine a little further into the loaded block. A/X/Y calling convention at entry: none required — PSID header calls it with no meaningful register state and the routine runs correctly (register-write-exact trace, see Verification).",
    "play": "CONFIRMED, disassembly + trace: play = load+$0003 in the same 7-file header sample (e.g. $C000→play $C003, $9000→play $9003, $8000→play $8003, $7000→play $7003), and disassembled+traced on 2 files: a 3-byte `JMP` stub at load+$0003 into the real play routine. Called once per frame (standard PSID convention, no evidence of a nonstandard call rate in the trace)."
  },
  "speed": "Standard once-per-frame PLAY call (PSID default, PAL/50Hz per the 6581 CSDb entries cited below) — no nonstandard multi-speed/raster-split behavior observed in either 300-frame trace.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no disassembly available",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Near-total single-composer concentration: of the 27 files in this dataset tagged 'Mike/LSD', all 27 are by the same HVSC composer, 'Mike' (data/composers/mike.json) — 27 of his 36 total files in the collection use this player, the rest presumably his own earlier/other routines. This is the textbook signal for a personal, in-house player routine rather than a published tool (cf. CLAUDE.md's Rob_Hubbard concentration note) — no other composer in the local dataset uses this tag.",
    "'LSD' here is 'Lightning Soundtrack Development', a music/scene group Mike (real name Michiel van den Berg, handles Mike / Michael Vandenberg / MB7447/TLD) was part of from 1990 onward (CSDb scener profile https://csdb.dk/scener/?id=26315) — it is not a separate development team credited with writing a generic tool; the 'LSD' in the tag most likely just names the group he released the tunes under, not a shared multi-author player.",
    "CSDb's own profile notes 'There are proofs that MB7447/TLD and Mike/LSD are the same person' — i.e. even CSDb treats 'Mike/LSD' primarily as an alias/credit for this one musician, reinforcing the personal-routine reading above.",
    "No CSDb release entry, no Codebase64 article, and no public source repo were found for this player under any spelling ('Mike/LSD', 'Lightning Soundtrack Development player') — treat as an undocumented/unreleased-as-a-tool in-house routine unless new evidence surfaces.",
    "PSID header cross-check across 7 of the 27 files (Antifriction pt.2, Broken_Dreamz_1, Schizofrenia, Zoolookologie_5, Animantix, Enigma, Taulabda_Delta) shows the load address itself is NOT fixed (seen at $7000, $8000, $9000, and $C000) but init is always exactly load+$0006 and play always exactly load+$0003 — a stable relative jump-table layout reused across releases spanning different load addresses. This is consistent with (and likely the underlying reason for) SIDId being able to fingerprint 'Mike/LSD' as one signature at all, and further supports the personal/hand-assembled-per-tune reading over a fixed-address shared tool.",
    "The same composer's other files use several unrelated players in the same period (SoundMonitor/MusicMaster_1, SoundMonitor/Digitronix, RoMuzak_V6.x, DUSAT/RockMon4 — see data/composers/mike.json), i.e. Mike also used off-the-shelf editors alongside his own 'Mike/LSD' routine rather than exclusively self-composing in it.",
    "Disassembly relocation gotcha confirmed on both sampled files: SIDdecompiler's own -v2 memory-touch map reports 'Start:' at load+$0003, THREE bytes past the file's real PSID load address (load+$0000-$0002 is a byte range neither file's playback ever touches) — relocating to the PSID load address itself (the naive/by-the-book choice) produces a byte-diff in the low-90s%/random range; relocating to load+$0003 instead (i.e. the map's own Start: address, per this project's established gotcha for this class of trap) is what actually lines the reconstruction up, and is why entry.init/entry.play now say 'CONFIRMED, disassembly + trace' rather than 'PSID header only'.",
    "The player has NO zero page usage at all (confirmed by grepping the full -z disassembly of both sampled files for non-immediate 2-hex-digit operands and finding none) — every per-voice/per-channel index or pointer is done through self-modified absolute-mode instruction operands instead, all living inline in the loaded code block (e.g. `sta lc16c+1` / `sta lc108+1` patch immediate operands of later `lda #imm` / `and #imm` instructions before they execute).",
    "A ~90-100 byte inline working-storage table just past the play/init stubs (per-voice frequency/pulse/ADSR/pointer state — $C1A6-$C1FB in Antifriction_part_2.sid, a corresponding range in Schizofrenia.sid) is both read AND self-modified at runtime, so SIDdecompiler's default trace window (-t 30000) captures its POST-execution values rather than the file's pristine cold-start constants — a byte-diff against the real file therefore shows ~2-2.6% mismatch concentrated almost entirely in this one table (plus a handful of isolated self-modified instruction-operand bytes elsewhere in the code), even though the reconstruction is behaviorally correct. This is the same drifted-working-storage-table pattern documented for several other players in this project (see the sid-player-verify agent's lessons_learned entries 10/16/17/20/25/29/32/37/42/43) — not a sign the disassembly itself is wrong. On Antifriction_part_2.sid specifically, the drifted values are load-bearing enough to cause 6 real (but self-correcting, silenced by frame 4) extra pulse-width register writes in frames 2-3 before patching; on Schizofrenia.sid the unpatched reconstruction is already register/value/frame-identical to the original (only a few cycles' timing drift late in the trace, from unrelated isolated self-modified bytes elsewhere)."
  ],
  "sources": [
    "Local dataset: sidid:Mike/LSD — data/sidid.json byTag['Mike/LSD'] = {author: 'Michael Vandenberg (Mike)', released: '1990 Lightning Soundtrack Development (LSD)'}, no reference/comment fields",
    "Upstream SIDId source, same entry verified verbatim: https://github.com/cadaver/sidid/blob/master/sidid.nfo ('Mike/LSD — AUTHOR: Michael Vandenberg (Mike) — RELEASED: 1990 Lightning Soundtrack Development (LSD)')",
    "knowledge/COVERAGE.md: 'Mike/LSD' ranked #18 uncarded family, 27 files, single raw tag 'Mike/LSD', no public-source flag",
    "data/composers/mike.json: composer 'Mike' (full_name Michiel van den Berg, CSDb scener id 26315, country Netherlands, active 1990) — 27 of 36 folder[] entries carry player: 'Mike/LSD'; re-counted directly against the file's own `folder[]` array, confirmed exactly 27",
    "CSDb scener profile: https://csdb.dk/scener/?id=26315 — handles Mike / Michael Vandenberg / MB7447/TLD; groups Magnetix (1989-), Future Technologics 2009 (1990-1991), Lightning Soundtrack Development (1990-); 'proofs that MB7447/TLD and Mike/LSD are the same person'",
    "CSDb SID entry PSID-header sample (load/init/play addresses only, no disassembly): https://csdb.dk/sid/?id=38927 (Animantix, $9000/$9006/$9003), https://csdb.dk/sid/?id=38924 (Enigma, $8000/$8006/$8003), https://csdb.dk/sid/?id=38925 (Taulabda Delta, $7000/$7006/$7003), https://csdb.dk/sid/?id=20697 (Antifriction pt.2, $C000/$C006/$C003), https://csdb.dk/sid/?id=20702 (Broken Dreamz 1, $C000/$C006/$C003), https://csdb.dk/sid/?id=20713 (Schizofrenia, $C000/$C006/$C003), https://csdb.dk/sid/?id=20719 (Zoolookologie 5, $C000/$C006/$C003) — all 6581/PAL",
    "Local HVSC files, this session's disassembly+trace-verification pass: C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/M/Mike/Antifriction_part_2.sid and .../Schizofrenia.sid — disassembled with SIDdecompiler.exe (relocated to load+$0003, per the Start: gotcha in quirks), reassembled with 64tass.exe, byte-diffed and trace-diffed (sidm2-sid-trace.exe, 300 frames each) against the real PSID payload. See Verification section for the exact numbers."
  ]
}
```

## Overview

"Mike/LSD" is the Player-ID/SIDId signature name for a music player routine
credited to Michael Vandenberg ("Mike"), a Dutch musician active in the C64
scene from 1990, releasing under the group tag "LSD" (Lightning Soundtrack
Development). In this project's dataset it is an entirely single-composer
signature: all 27 files tagged "Mike/LSD" belong to the HVSC composer "Mike"
(`data/composers/mike.json`), out of his 36 total tunes — i.e. no other
composer in the collection uses this tag. Combined with finding no CSDb
release, Codebase64 article, or public source for it, the evidence points to
an in-house personal routine rather than a distributed editor/tool, similar in
kind (though far smaller in reach) to the "Rob_Hubbard" case noted in
`CLAUDE.md`. A 7-file PSID-header sample additionally shows a stable init =
load+$0006 / play = load+$0003 layout reused across releases loaded at four
different addresses ($7000/$8000/$9000/$C000). This session disassembled and
trace-verified two of those seven files (Antifriction_part_2.sid,
Schizofrenia.sid) against SIDdecompiler+64tass reconstructions: both trace
register-write-exact against the real files over 300 frames once a small,
self-modified per-voice working-storage table is patched back to its pristine
cold-start bytes (2-2.6% raw byte-diff before that patch, 100% after — see
Verification). The player uses no zero page at all. Deeper data-format and
effect-encoding fields (order list, patterns, instruments, wave/pulse/filter
tables) remain `TODO` — this pass established the entry points and the
overall code shape but did not walk the note-data tables.

## Quirks & gotchas

See the `quirks` array: the near-100% single-composer concentration, the
"LSD" group-vs-tool distinction, CSDb's own note equating "Mike/LSD" with the
same person under a different handle (MB7447/TLD), the absence of any public
source or documentation, the confirmed init/play relative-offset pattern
across differing load addresses, the fact Mike also used unrelated
off-the-shelf editors (SoundMonitor variants, RoMuzak, DUSAT/RockMon4) for
other tunes in the same period, and the two disassembly-specific findings
from this pass: the Start:-address relocation gotcha (SIDdecompiler's own
memory map starts 3 bytes past the real PSID load address on both sampled
files) and the complete absence of zero-page usage.

## Disassembly notes

Two files disassembled with SIDdecompiler.exe, reassembled with 64tass.exe:
`Antifriction_part_2.sid` and `Schizofrenia.sid`, both loading at $C000.
**Relocation gotcha**: SIDdecompiler's `-v2` memory-touch map reports
`Start: $c003` for both files, not `$c000` — the file's own PSID load
address. Bytes load+$0000-$0002 are a 3-byte vector never touched by either
file's playback (per the project's established "relocate to the map's own
Start: address, not the header's load address" rule) — relocating to
`-a<decimal for load+$0003>` instead of the raw load address is what lines
the reconstruction up correctly. Doing this, both files reassemble to a
plausible full-length `.prg` with no 64tass wrap warnings.

Structure confirmed on both: a 3-byte PLAY stub at load+$0003 (a plain `JMP`
in Antifriction; functionally equivalent in Schizofrenia) and a 3-byte INIT
stub at load+$0006 (a plain `JMP` in Antifriction; a self-modified
`LDA #$00 / NOP / JMP` in Schizofrenia — same 3-byte footprint, different
opcode form per release) both jump into the real init/play routine bodies a
short, per-file-varying distance further into the loaded block (e.g.
Antifriction: play routine body at load+$99, init routine body at load+$2B;
Schizofrenia: play routine body at load+$9A) — consistent with the routine
being reassembled/relocated per tune rather than shipped as one fixed-address
binary. No zero page is used anywhere in either disassembly (grepped for any
non-immediate 2-hex-digit operand, found none) — all per-voice state is kept
in a ~90-100 byte inline table just past the entry stubs and addressed via
self-modified absolute-mode operands.

## Verification

**Verified — `status: verified`.** Method: disassembled `Antifriction_part_2.sid`
and `Schizofrenia.sid` (both HVSC `MUSICIANS/M/Mike/`) with SIDdecompiler.exe
(relocated to load+$0003 per the Start: gotcha above), reassembled with
64tass.exe (`-a --cbm-prg`, no warnings), byte-diffed the reassembled `.prg`
against the real PSID payload, then traced both with `sidm2-sid-trace.exe`
(300 frames, explicit `init`/`play` addresses from the PSID header) and
diffed the register-write logs.

- **Antifriction_part_2.sid**: byte-diff 98.0455% (49 of 2507 compared bytes
  differ), all 49 addresses concentrated in one inline per-voice
  working-storage table ($C108, $C16C-$C16E, and the bulk at
  $C1A6-$C1FB) plus a handful of self-modified instruction-operand bytes in
  the play routine ($C34D, $C379, $C386, $C38C, $C399) — none in code the
  `-v2` map marks execute-only. Unpatched trace (300 frames): register/value
  sequence matches except for 6 extra, self-correcting `osc1_pw_lo` /
  `osc1_pw_hi` / `osc2_pw_hi` writes in frames 2-3 (silenced again by frame
  4) — a real but small, localized, and audibly transient divergence caused
  by the working-storage table holding post-execution rather than
  cold-start values. Patching those same 49 bytes back to the original
  file's pristine values (binary patch at the exact addresses the byte-diff
  named) and re-tracing: **register-write-exact, byte-for-byte AND
  cycle-for-cycle, across all 300 frames** (`diff` of the two trace logs
  produces zero output).
- **Schizofrenia.sid**: byte-diff 97.4081% (74 of 2855 bytes differ), same
  pattern — concentrated in the equivalent working-storage table
  ($C189-$C1DB) plus isolated self-modified operand bytes elsewhere
  ($C0D1-$C0D2, $C0DB-$C0DC, $C10B, $C2F6-$C2F7). Unpatched trace (300
  frames): register/value/frame sequence is **already identical** (1070 of
  1070 writes match exactly) — only a few cycles' timing drift appears late
  in the trace (from frame 252 on), with no register-write divergence at
  all. Patching the 74 bytes and re-tracing: register-write-exact, byte-for-
  byte and cycle-for-cycle, across all 300 frames.

Both independent files converge to a full register-write match once the
known self-modified working-storage bytes are corrected — the same
drifted-table pattern this project has already documented on several other
players (SIDdecompiler's default trace captures post-execution values for
inline read+write working storage, not the file's pristine cold bytes; see
the sid-player-verify agent's `lessons_learned`). This is cited as the
project's basis for `verified` here, on the same footing as other cards that
reached that status via a patch-to-pristine-then-trace-exact result rather
than a raw byte-diff of 100% on the first pass. Deeper Tier 3 fields
(order list, patterns, instruments, wave/pulse/filter tables, effect
encoding) remain `TODO` — this pass verified the entry points and overall
code shape, not the full note-data format, which would need a further
session walking the tables the play routine indexes.

## Sources

See the `sources` array — the local SIDId cache and its verified upstream
GitHub source, `knowledge/COVERAGE.md`, `data/composers/mike.json` (re-counted
directly), Mike's CSDb scener profile, 7 CSDb SID-entry PSID-header
checks (load/init/play addresses only), and this session's disassembly +
byte-diff + trace-diff of two real HVSC files
(`Antifriction_part_2.sid`, `Schizofrenia.sid`) — see Verification for the
exact numbers.

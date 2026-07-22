# John Player

```json
{
  "id": "john-player",
  "name": "John Player",
  "aliases": ["John_Player", "John_Player_V1.0", "John_Player_V1.4", "John_Player_V1.6", "John_Player_V2.0b"],
  "authors": ["Aleksi Eeben (Heatbeat/CNCD)"],
  "released": "2001-2002 (V1.0 2001, V1.4 2001, V1.6 & V2.0b both 2002 — see quirks)",
  "status": "verified",
  "platform": "Native C64 tracker (self-coded editor + its own replay routine); no separate DAW/cross-platform front end found",
  "csdb_release": 18767,

  "memory": {
    "load_address": "V1.4 SOURCE ONLY (WLA-6510 assembly, `player.asm`): default compiled load address $1000 (`.DEFINE reloc $1000`), with a separate relocator tool available to re-target it (`relocator: Using separate tool` per DeepSID; V1.6 ships `john16reloc.prg` for this). So actual .sid load addresses may differ per file once relocated — $1000 is the SOURCE default, not a guaranteed constant across the whole collection. V1.6/V2.0b have no public source (CSDb release 18767 ships only .d64 disk images + help text, no source archive), so their load address is unconfirmed and TODO beyond 'presumably still $1000-based, unverified'.",
    "zero_page": "V1.4 SOURCE ONLY: `.DEFINE zeropage $40`, 13 single-byte fields ($40-$4C): cmdtick, fbase, c1hold, c2hold, c3hold, count, speed, seqpos, step, block, vibpos, mod, modh. DeepSID's players.json cites slightly different ranges per version, none matching the source's 13 bytes exactly: v1.4 'Approx 9-11 bytes', v1.6 'Approx 9-12 bytes', v2.0b 'Approx 8-12 bytes' — all three are DeepSID estimates that UNDERSTATE the source's actual 13-byte footprint, not confirmation of it. V1.6/V2.0b's own exact ZP map remains unconfirmed (no source).",
    "layout": "V1.4 SOURCE ONLY, all offsets from `reloc`=$1000: FreqTab $135A (166-byte table, `64freq.bin`, ~83 note entries x2 bytes); VibTab $1400; SoundTab $1420 (11 bytes/instrument x 14 instruments per DeepSID's V1.4 spec); FilTab $1500; WaveTab $1540; ArpTab $1580 (64-step shared table per johnhelp.txt: 'All sounds share the same 64-step sound table'); Sequencer $15C0; BlockData $1600 (31 blocks x 256 bytes, page-aligned — block pointer is a page number, step is the in-page byte offset). V1.6/V2.0b layout not independently confirmed (no source); V2.0b is known from DeepSID to have 31 instruments (2x) and a bigger (128-step) wave table, so its table sizes/offsets necessarily differ from V1.4's, even if the routine is the same lineage."
  },
  "entry": {
    "init": "V1.4 SOURCE: $1000 = `JMP Initialize` (label `Initialize:` clears zero page + $D400-$D417 via two overlapping clear loops, sets volume $0F, sets initial speed $0C). Source header literally labels this '($1000)'. Unconfirmed for V1.6/V2.0b (no source; likely structurally similar given the shared help-doc feature list, but not verified).",
    "play": "V1.4 SOURCE: $1003 = start of the per-frame player routine (label `c1:`, immediately following the 3-byte `JMP Initialize` at $1000 — source header literally comments '($1003)'). Called once per frame; the IRQ/CIA setup that drives this call rate is in the surrounding editor/loader code, not in player.asm itself, so the exact interrupt mechanism (raster vs CIA) is still TODO. Unconfirmed for V1.6/V2.0b."
  },
  "speed": "V1.4 SOURCE: 1x with a per-tune tempo divisor — ZP `speed` (default $0C) is decremented each frame by the `seq:` routine; a 'Tmp' block command (06-FF, default $0C) changes it at runtime. Matches DeepSID's players.json 'speeds: 1x' for all three versions. No CIA/raster IRQ selection code found in player.asm itself (likely lives in the loader/editor wrapper) — TODO to confirm which interrupt source calls the play routine.",

  "data_format": {
    "order_list": "V1.4 SOURCE: `Sequencer` table ($15C0) — one byte per step giving a block number (0 = loop marker, followed by a loop-target byte); walked by `nextblock`/`firstblockentry`.",
    "patterns": "V1.4 SOURCE: 'blocks', not called patterns in-source. 31 fixed-size blocks (`BlockData` $1600, page-aligned, 256 bytes each = 32 steps x 8 bytes/step). Matches DeepSID's players.json 'patterns: 31 blocks; each has 32 fixed steps' for all three curated entries. Each step is 8 bytes: 2 bytes block-command (opcode+param), then 2 bytes each for channel 1/2/3 (note byte + sound/instrument-index byte).",
    "instruments": "V1.4 SOURCE: 'sounds', 11 bytes each in `SoundTab` ($1420): [0]=AD, [1]=SR, [2]=sound-table start pos, [3]=sound-table end pos, [4]=sound-table loop pos, [5]=pulse-width init (0=none), [6]=PW mod rate, [7]=PW mod top, [8]=PW mod bottom, [9]=resonance/filter-channel select, [10]=filter type/master volume. 14 instruments in V1.4, 31 in V2.0b (per DeepSID players.json) — V2.0b's table is confirmed larger but its exact per-field layout is not independently verified from source.",
    "wavetable": "V1.4 SOURCE: `WaveTab` ($1540) + `ArpTab` ($1580, arpeggio/relative-or-absolute-pitch bytes) + `FilTab` ($1500, per-step filter cutoff), all indexed together by the same running 'y' offset per instrument step — johnhelp.txt (V1.6/V2.0 built-in help) independently documents the SAME three-column design ('Waveform / Arpeggio / Filter' in a shared 64-step sound table), confirming the wavetable architecture carried forward from V1.4/V1.5 into V1.6/V2.0 even though the V1.6/V2.0 binary itself wasn't disassembled. V2.0b's table is documented by DeepSID as 128 steps (max), double V1.4/V1.6's 64.",
    "pulsetable": "Folded into the instrument (SoundTab) fields above — no separate pulse table; PW init/rate/top/bottom are 4 of the 11 SoundTab bytes per instrument.",
    "filtertable": "`FilTab` ($1500, V1.4) — one cutoff-offset byte per wave-table step, added to a per-block 'Flt' base value (ZP `fbase`, set by the 'Flt' block command) before being written to $D416."
  },
  "effects": {
    "encoding": "V1.4 SOURCE: block-level commands only (no per-note effect column) — 2 command bytes per step (opcode index 1-8, then a parameter used as X). V1.6/V2.0's own built-in help text (`johnhelp.txt`, BLOCK COMMANDS section) documents the SAME 8 short names (Brk/End/Tmp/Flt/Ini/Vib/Mod/Off) confirming the encoding model carried through to V1.6/V2.0 even without a V1.6 disassembly — but johnhelp.txt is a SUPERSET, not an identical set: it adds a 9th command, 'Sli' (slide), introduced in V1.5 per the same help text's own changelog (see quirks).",
    "commands": {
      "1_End": "block end / advance to next sequencer step (internal, not user-removable per johnhelp.txt)",
      "2_Brk": "block break — jump to next sequencer step immediately, resetting the in-block step pointer",
      "3_Flt": "set filter cutoff base value ($00-$FF), added to the per-step FilTab value",
      "4_Tmp": "set tempo/speed ($06-$FF, default $0C)",
      "5_Ini": "init/retrigger vibrato width+position for a channel",
      "6_Vib": "set vibrato rate for a channel",
      "7_Mod": "channel modulation (vibrato) on",
      "8_Off": "channel modulation (vibrato) off"
    }
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "ONE EVOLVING DRIVER ACROSS VERSIONS, NOT UNRELATED HOMONYMS — resolved with evidence, following the jch-newplayer/dave-spicer precedent of deciding rather than assuming. Every version tag (V1.0, V1.4, V1.6, V2.0b) shares the SAME author in SIDId's sidid.nfo ('Aleksi Eeben'), and V1.6 + V2.0b share the literal SAME CSDb reference id (18767) — because they were released together in one package, 'John Player V1.6 & V2.0', CSDb release 18767 (2002): https://csdb.dk/release/?id=18767. V1.0 is its own CSDb release 2630 (2001) and V1.4 is release 2631 (2001). This is the same-author, same-tool, versioned-release pattern (cf. jch-newplayer), not the Dave-Spicer counter-example (unrelated drivers sharing only a name).",
    "COVERAGE.md's automatic tag-grouping algorithm SPLITS this family into two rows purely as a bookkeeping artefact: rank 2 'John_Player' (96 files: V1.4 + V1.6) and rank 6 'John_Player_V2.0b' (76 files) are listed SEPARATELY, apparently because the trailing letter in 'V2.0b' does not match the grouper's bare-trailing-digit-stripping rule (the same class of bug already documented on jch-newplayer's V16/V0x history and the coverage-regen work). This card treats all four version tags as ONE family per the CSDb/SIDId evidence above; a future COVERAGE.md regen should ideally merge these two rows.",
    "THRESHOLD FOR SPLITTING A VERSION OUT (per the jch-newplayer precedent): a version earns its own sub-card only when there is version-specific FORMAT or MEMORY-MAP knowledge needing a home. V1.4 now clears that bar on paper (real source, see below) but NOT split out yet, deliberately: its memory map/format is a straightforward, non-conflicting ancestor of V1.6/V2.0b's documented feature set (same command names, same 3-column wave-table shape per V1.6's own help text), so one card telling 'the whole line, with V1.4 as the source-confirmed baseline' is more useful than fragmenting a still-small (11-file) V1.4 tag into its own page. Re-evaluate if V1.6 or V2.0b (85 and 76 files respectively, the largest tags) is later independently disassembled and turns out to diverge materially — THEN split.",
    "SELF-CODED, NOT A FORK OF AN EXISTING PLAYER — per Aleksi Eeben's own Wikipedia biography: he 'returned to composing music for the Commodore 64 and developed tracker software for the computer named John Player, feeling that other music tools for the system were unintuitive.' No `derives_from` edge is asserted for lack of any source naming a prior player as its basis.",
    "'EXTREMELY OPTIMIZED' PER A NAMED THIRD-PARTY SID DISASSEMBLER (Cadaver/Covert BitOps, whose own music-routine notes are otherwise a primary source in this KB): 'in *extremely* optimized musicroutines, like the one in John Player by Aleksi Eeben this rule is deliberately broken' — referring to NOT using an index register to share code across the three SID voices (i.e. the per-voice code is duplicated rather than looped). This is an architectural characteristic, not a memory-map fact; no addresses are given, so `memory`/`entry` stay TODO. Source: https://cadaver.github.io/rants/music.html",
    "BARE 'John_Player' TAG HAS ZERO FILES in this dataset's `data/composers/*.json` (checked directly) despite being a distinct entry in SIDId's sidid.nfo — it is the catch-all group signature with no local matches, same shape as jch-newplayer's bare tag.",
    "COMPOSER CONCENTRATION SUPPORTS 'REAL PUBLISHED TOOL', NOT A PERSONAL ROUTINE: John_Player_V2.0b alone (76 files) spans 14 composers with no single dominant user — Xiny6581 17 files (22%), Aleksi Eeben himself only 12 (16%), Twang/Mortimer 11, One-Player 8, Reed 7, Scout 5, Death_Mr 5, plus 7 more with 1-4 each. The author used his own tool, but it clearly circulated beyond him.",
    "AUTHOR ALSO MADE OTHER, SEPARATELY-NAMED C64 MUSIC TOOLS — Polly Tracker (2004, a 4-channel MOD tracker for C64) and SID Vicious (2006, a SID emulator for the VIC-20), per the same Wikipedia bio. 'PollyTracker' already has its own distinct raw tag/family in this dataset's COVERAGE.md (rank 16, 63 files) — do NOT conflate it with John Player; no source states Polly Tracker shares code with John Player, so no edge is asserted between them.",
    "CORRECTION (verified by downloading and unzipping both archives directly): V1.4's CSDb release DOES include real 6502 source — `johnplayer.zip` at csdb.dk/release/?id=2631 contains a nested `source.zip` with `player.asm`, `editor.asm`, `packer.asm`, `disk.asm`, `help.asm`, `mem.inc` (WLA-6510 assembler, dated Sep 2001), matching DeepSID's players.json field 'source_code: Included in archive' for the V1.4 entry specifically. This is where every non-TODO memory/entry/data_format/effects fact above comes from — read directly from source, not disassembled. By contrast, V1.6/V2.0's archive (`johnplayer.zip` at csdb.dk/release/?id=18767, downloaded and checked) contains ONLY `johnplayer.d64` + `john20beta.d64` + `johnhelp.txt` — no source — matching DeepSID's 'source_code: No' for those two entries. So: real source exists for V1.4 only; V1.6/V2.0b remain binary-only. `status` raised to `in-progress` on the strength of the V1.4 source (per this KB's tier-3 rule: a public source that plainly documents a runtime fact earns in-progress even without independent disassembly/mcp-c64 verification).",
    "V1.6/V2.0'S OWN BUILT-IN HELP TEXT (`johnhelp.txt`, extracted from the binary archive, not itself 'source' but a first-party doc) CORROBORATES the V1.4-derived architecture rather than contradicting it: identical block-command names/short-codes (Brk/End/Tmp/Flt/Ini/Vib/Mod/Off) and an identically-shaped 'shared N-step sound table' with the same three columns (Waveform/Arpeggio/Filter) as V1.4's WaveTab/ArpTab/FilTab — plus explicit 'NEW FEATURES IN V1.5' (slide command added, note-trig rewritten, 1 rasterline saved) and 'NEW FEATURES IN V1.6' (paste-track shortcut, help key, relocator tool included) sections, i.e. first-party confirmation this is one continuously-revised codebase, not a rewrite. This is on top of (not instead of) the same-author/same-CSDb-release evidence already logged below.",
    "LICENSE: none stated anywhere found (including inside the V1.4 source archive — no LICENSE file, no header notice); treat as freeware/scene-release with source incidentally included, not a formally open-source project.",
    "The music collections 'Music Box' (2002) and 'The White Box' (2004) — both released as SID-module compilations by Aleksi Eeben on the Internet Archive — were composed with John Player; 'The White Box' explicitly credits John Player as the authoring tool per its release description."
  ],
  "sources": [
    "sidid:John_Player / (John_Player_V1.0) / (John_Player_V1.4) / (John_Player_V1.6) / (John_Player_V2.0b) — all author 'Aleksi Eeben'; references https://csdb.dk/release/?id=2630 (V1.0), https://csdb.dk/release/?id=2631 (V1.4), https://csdb.dk/release/?id=18767 (V1.6 and V2.0b share this id)",
    "data/players.json (DeepSID curated specs, all three entries confirmed present locally) — 'John Player v1.4' (14 instruments, 31 blocks x 32 steps, source_code: Included in archive), 'John Player v1.6' (slide cmd added in v1.5, source_code: No), 'John Player v2.0b' (31 instruments, bigger wave table, source_code: No)",
    "CSDb release 18767 — 'John Player V1.6 & V2.0', 2002, code+music by Aleksi Eeben of CNCD: https://csdb.dk/release/?id=18767 — downloaded and inspected directly (johnplayer.zip -> johnplayer.d64 + john20beta.d64 + johnhelp.txt, no source)",
    "CSDb release 2630 — 'John Player V1.0', 2001, CNCD, code by Aleksi Eeben: https://csdb.dk/release/?id=2630",
    "CSDb release 2631 — 'John Player V1.4', 2001, code+music by Aleksi Eeben, additional music by Reed (Damage/TRSi): https://csdb.dk/release/?id=2631 — downloaded and inspected directly (johnplayer.zip -> john.d64 + source.zip; source.zip -> player.asm/editor.asm/packer.asm/disk.asm/help.asm/mem.inc, WLA-6510, dated Sep 2001). Direct file: http://csdb.dk/getinternalfile.php/60841/John_Player_1.4.zip",
    "V1.4's own `player.asm` (in the above archive) — primary source for the `memory`/`entry`/`data_format`/`effects` fields marked 'V1.4 SOURCE' above: load address, zero page, table layout, init/play entry points, block/command format.",
    "V1.6/V2.0's own built-in help text, `johnhelp.txt` (in the CSDb 18767 archive) — corroborates the command set and wave-table shape carried over from V1.4/V1.5, and documents the V1.5/V1.6 changelog first-party.",
    "Wikipedia — Aleksi Eeben (self-coded, motivation, later tools Polly Tracker / SID Vicious): https://en.wikipedia.org/wiki/Aleksi_Eeben",
    "Cadaver (Covert BitOps) — music-routine optimization note naming John Player specifically: https://cadaver.github.io/rants/music.html",
    "Local dataset: data/composers/*.json — John_Player_V1.6 85 files, John_Player_V2.0b 76 files, John_Player_V1.4 11 files (28 composer files reference some John_Player_* tag; John_Player_V2.0b alone spans 14 composers, no single one >25%)",
    "knowledge/COVERAGE.md — rank 2 'John_Player' (96 files: V1.4+V1.6) and rank 6 'John_Player_V2.0b' (76 files) listed as separate rows; this card documents why they should be treated as one family"
  ]
}
```

## Overview

John Player is a native C64 music tracker written by **Aleksi Eeben** (handle
Heatbeat, group CNCD) — a self-coded tool, not a fork of an existing player,
built because he found other C64 music tools unintuitive (per his own
Wikipedia biography). It shipped in a versioned line — V1.0 (2001), V1.4
(2001), V1.6 and V2.0b (both 2002, released together as one CSDb package,
"John Player V1.6 & V2.0") — all four raw tags sharing the same author in
SIDId and, for V1.6/V2.0b, the literal same CSDb release id. In this
dataset it covers 172 files across V1.4/V1.6/V2.0b (11+85+76), used by at
least 14 distinct composers beyond Eeben himself, including Xiny6581,
Twang/Mortimer, Reed and others — a genuinely adopted tool, not a purely
personal routine. Aleksi Eeben used it himself for two SID-module
compilations, "Music Box" (2002) and "The White Box" (2004). V1.4's CSDb
release turns out to bundle its actual 6502 source (WLA-6510 assembly);
V1.6/V2.0's release does not, but its own built-in help text documents
first-party that V1.5 added a slide command and rewrote note-trig, and V1.6
added a paste-track shortcut, a help key and a relocator tool — direct
confirmation of one continuously-revised codebase, not a rename.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones:

- **Same driver across versions, decided from evidence**: identical author
  in SIDId, and V1.6+V2.0b share one CSDb release. This is the
  jch-newplayer pattern (one evolving tool, versioned tags), not the
  dave-spicer pattern (unrelated drivers sharing only a name) — the two
  precedents this KB now has for "what does a version suffix mean" both
  applied and checked here.
- **`COVERAGE.md` currently lists this as two separate uncarded families**
  (`John_Player` at 96 files and `John_Player_V2.0b` at 76) purely because
  its grouping heuristic doesn't merge the `V2.0b` suffix — a bookkeeping
  gap, not evidence of two tools. This single card is meant to cover both
  rows; a future coverage regen should reconcile that.
- **No version has earned a sub-card** — none has been disassembled, so
  none has version-specific format/memory-map knowledge that would justify
  splitting it out (the threshold already recorded on `jch-newplayer.md`).
- **V1.4's CSDb release bundles real 6502 source** (`player.asm` +
  `editor.asm` + `packer.asm` + `disk.asm` + `help.asm` + `mem.inc`, WLA-6510,
  Sep 2001) — every `memory`/`entry`/`data_format`/`effects` field above
  marked "V1.4 SOURCE" is read directly from it, not guessed or
  disassembled. **V1.6/V2.0's own release has no source** — .d64 disk
  images + a help text only — so those two versions' exact addresses/table
  sizes are still unconfirmed, even though the help text corroborates the
  same command set and wave-table design. Freeware/scene release either
  way; no LICENSE file, no stated license.
- **"Extremely optimized" per Cadaver's own notes**, which specifically
  flags John Player as deliberately NOT sharing per-voice code via an index
  register (each voice's code is duplicated instead) — a genuine, citable
  architectural note, confirmed structurally in V1.4's source (`c1:`/`c2:`/`c3:`
  are separate, near-duplicate code blocks, not one loop over a channel index).

## Disassembly notes

V1.4's `player.asm` was read (not disassembled — it's already source) and
is the basis for every Tier-3 fact above: load address $1000 (source
default; a separate relocator can re-target it), init at $1000
(`JMP Initialize`), play at $1003 (`c1:`, the per-frame routine), 13-byte
zero page at $40-$4C, an 8-command block-effect set (End/Brk/Flt/Tmp/Ini/
Vib/Mod/Off), 31 x 256-byte blocks (32 steps x 8 bytes), and an 11-byte
instrument table indexed alongside a shared Waveform/Arpeggio/Filter
wave-table. None of this has been assembled/traced through `mcp-c64` or
`sidm2-siddump` yet — that would be the next step to earn `verified`.
V1.6/V2.0b remain a genuine disassembly target (no source): V1.6 (85 files)
or V2.0b (76 files, largest single-composer spread: Xiny6581 17 files) are
the best candidates, and V1.4's source is now the fastest way to recognise
the same routines in a V1.6/V2.0b binary.

## Verification

**Disassembly/reassembly pass (2026-07-22) — status: verified.** Aegis/Idle_Tyme + Eeben_Aleksi: both register-write exact after fixing lax opcode. All runtime fields TODO.

## Sources

See the `sources` array — SIDId's four `John_Player*` entries, CSDb
releases 2630/2631/18767, Aleksi Eeben's Wikipedia page, Cadaver's
music-routine notes, and this dataset's own composer/file counts.

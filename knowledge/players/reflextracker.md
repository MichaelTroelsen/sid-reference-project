# Reflex-Tracker

```json
{
  "id": "reflextracker",
  "name": "Reflex-Tracker",
  "aliases": ["Reflextracker"],
  "authors": ["Tammo Hinrichs (kb)", "Matthias Kramm (Quiss)", "Zorc"],
  "released": "1995 (V1.1, Reflex / The Obsessed Maniacs)",
  "status": "in-progress",
  "platform": "C64-native tool per DeepSID's player database ('Native / C64 emulator'), CSDb release type 'Tool'. CONFIRMED 2026-07-23 directly from real HVSC file headers: every one of 131 tagged files is RSID (not PSID) format with header play address $0000 — i.e. real RSID cold-boot/interrupt semantics, not a simple callable init/play pair (see entry.play, Verification). NOTE: a forum post by one of the credited musicians describes a separate, seemingly PC-hosted 'quadrasid' (multi-SID) composing mode that could only be exported as a MIDI stream, not directly as playable C64 SID data — see quirks. No public source archive or licence was found; do not assume open-source despite a local coverage-table hint (see quirks).",
  "csdb_release": 43348,

  "memory": {
    "load_address": "Per-file, not fixed: RSID header load address ranges $0870-$9974 across all 131 tagged HVSC files (song data placement varies per export); the player's own init code sits in a separate, narrow, near-fixed high band — see entry.init. Confirmed 2026-07-23 by reading real headers of all 131 tagged files directly (no disassembly needed for this fact).",
    "zero_page": "Approx 28 bytes in the $CF-$F1 range (documented in DeepSID's player database, data/players.json 'zero_pages' field — not from a local disassembly). PARTIAL, UNVERIFIED corroboration: a raw hex read (not a SIDdecompiler-verified disassembly — see Verification) of the init routine's first ~30 bytes shows `LDA #$81 / STA $D7` — $D7 falls inside the documented $CF-$F1 range. Flagged as a lead only, not confirmed by any disassembly tool.",
    "layout": "PARTIAL, disassembly-confirmed 2026-08-07 on Warlock/Abba-Gabba.sid: four 32-entry instrument tables at $BA00/$BA20 (lo/hi, one bound of a sample-pointer walker) and $BA40/$BA60 (lo/hi, the other bound / alt direction), indexed via `AND #$1F` on the low 5 bits of the ZP $D8/$D9 voice program-select byte (17/32 entries non-zero on this file, i.e. up to 17 instruments). These are per-file load-address-relative offsets from this one disassembly, not yet confirmed to be fixed across other tagged files. Order-list/pattern encoding itself remains TODO — see Verification."
  },
  "entry": {
    "init": "Header-declared init address, read directly from all 131 tagged HVSC files' real RSID headers (2026-07-23): $C006 on 124/131 files (94.7%), with 6 minority-variant files — $C050 (3 files), and one file each at $C000, $C103, $1C06, $CF40. Not TODO anymore, but NOT independently confirmed as the true code entry point by disassembly (see Verification — SIDdecompiler cannot process this player at all).",
    "play": "Header-declared play address is $0000 on ALL 131/131 sampled tagged files (100%, confirmed 2026-07-23 directly from real RSID headers) — there is no directly-callable per-frame play routine exposed via the PSID/RSID header at all. Combined with the RSID (not PSID) format and an init routine that (per an unverified hex-level read, not disassembly-confirmed) appears to busy-poll a zero-page flag before any CLI, this reads as either a poll-driven main loop or a real-hardware-interrupt-driven design that a real RSID-capable emulator resolves via genuine CPU reset + interrupt timing, not a callable play address SIDdecompiler's model expects."
  },
  "speed": "TODO: not documented — blocked, see Verification",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not documented",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "`knowledge/COVERAGE.md` / `scripts/dev/gen-coverage.js` flags this family 'open-source' via a hardcoded `OPEN_SOURCE` set the script's own comment describes as 'carried over from the original table; add to it as you learn more' — i.e. an unsourced legacy hint, not a citation. Targeted web/CSDb research for this card found NO public source archive, source repo, or stated licence for Reflex-Tracker. Treat the 'open-source' coverage-table flag as UNCONFIRMED until an actual source location is found; this card does not repeat it as fact.",
    "A forum post by PVCF (Reflex-Tracker's credited musician/designer, per the CSDb release credits) on Lemon64 describes a 'quadrasid' composing mode used for at least one production: \"its a reflextracker (PC) song, with quadrasid. it only can be recordet as a midi stream.\" — implying a PC-hosted extended mode (4 SIDs, up to 10 channels) that could not export directly to playable C64 SID data; multi-channel compositions had to be manually reduced to 3 channels for single-SID release. This is a distinct workflow from the core C64-native tool DeepSID's player database labels 'Native / C64 emulator' — the two aren't necessarily contradictory (a C64-native editor/replay plus a separate experimental PC-side extension), but this card does not resolve the discrepancy. Source: https://www.lemon64.com/forum/viewtopic.php?t=4872",
    "Composer concentration in this dataset (HVSC MUSICIANS/ tree only, per data/composers/*.json): 131 files across 21 composers, no single composer dominant (top users: Warlock 26 files ≈20%, Data/JFK/Vegeta 13 each, Gregfeel 11). A spread this wide across composers reads as a genuinely used group tool, not a personal routine.",
    "PVCF, credited for Music/Design/Documentation on the CSDb release, is also among the composers using the 'Reflextracker' tag in this dataset (6 files, ranking roughly 8th of 21 — not a top user) — one of the tool's own creators is among its users, consistent with an in-house Reflex-group tool that also saw wider pickup rather than a single dominant author.",
    "CROSS-SCENE ADOPTION BY THE POLISH SCENE — surfaced 2026-07-17 by a composer-overlap connection scan over data/composers/*.json. Though Reflex-Tracker is German (Reflex group: kb/Quiss/Zorc), eight of its users also used the Polish editor [[hardtrack-composer]] (Longhair/Brush, Elysium): Bax, Data, JFK, Leming, Praiser, Randy, V-12, Warlock — all Polish, and including this card's own top users (Warlock ~20%, plus Data and JFK). So a large share of Reflex-Tracker's usage in this dataset comes from the Polish scene, which also ran its own native Hardtrack Composer — a shared-USERS / cross-scene relationship (same shape as the Sonic Graffiti/[[system6581]] crossover), NOT shared code (different coders; neither disassembled). No `shares_routine_with` edge asserted; navigational link only.",
    "DISASSEMBLY BLOCKED (SIDdecompiler specifically) — SIDdecompiler.exe hangs indefinitely (process alive, zero bytes of output ever flushed, confirmed via `tasklist` and a 12-15s timeout kill) on every one of 6 real Reflextracker-tagged files tested 2026-07-23, spanning 5 different composers (Warlock x3, Data, Gregfeel, PVCF) and both the dominant header init-address variant ($C006, 124/131 files) and a minority variant ($C103). The hang reproduces even with `-t0` (zero play-routine calls requested) and with the minimal flag set (no `-z`/`-d`/`-c`/`-v2`), meaning the infinite loop is inside SIDdecompiler's static emulation of INIT itself, not under-covered play-loop tracing. Ruled out as an environment/tool problem: an unrelated non-Reflextracker RSID file from the same HVSC folder (Warlock/Their_Law.sid), run with the identical invocation pattern, completed in 0.136s (with its own, unrelated error). All 131 tagged files share this RSID-format / play=$0000 header signature (see entry.play), consistent with a real hardware-interrupt- or busy-poll-driven design that SIDdecompiler's non-interrupt-injecting CPU emulation cannot get past. UPDATE 2026-08-07: this is now a SIDdecompiler-specific blocker only, not a hard project blocker — see the next quirk and Disassembly notes for the successful `dis6502.js` workaround.",
    "HEAVILY SELF-MODIFYING CODE, confirmed 2026-08-07 by disassembly/reassembly: an automated audit of the ~1,900-byte code region found 8 distinct self-modified-instruction-operand slots fed by 37 call sites — self-modified `JMP` targets (two confirmed pairs, one alternating between two already-known routines, the other between a known routine and a previously-undiscovered 65-byte code region at $C05B), an EOR-#$01 toggle between two seed pages, and table-page selectors mixing literal constants with note-derived offsets. This is well beyond typical self-modification depth for a player in this KB and is the likely reason SIDdecompiler's static/hybrid emulation model hangs rather than terminating (it may be caught trying to statically resolve a target that only resolves at runtime). It is also why a 100.000000% native byte-diff on this player specifically should NOT be read as strong evidence on its own — see Verification for the concrete case where it silently hid a real 65-byte disassembly gap."
  ],
  "sources": [
    "CSDb release (Reflex-Tracker V1.1, Reflex / The Obsessed Maniacs, 1995; credits: Code kb/Quiss/Zorc, Music/Design/Docs PVCF): https://csdb.dk/release/?id=43348",
    "sidid:Reflextracker (author Tammo Hinrichs (kb) & Matthias Kramm (Quiss) & Zorc; reference https://csdb.dk/release/?id=43348) — data/sidid.json byTag.Reflextracker",
    "Local dataset: data/players.json 'ReflexTracker' curated entry (developer kb|Zorc|Quiss, start_year 1995, platform 'Native / C64 emulator', zero_pages 'Approx 28 bytes in the $CF-$F1 range') — DeepSID's player database, https://deepsid.chordian.net/",
    "Local dataset: 131 files across 21 composers tagged 'Reflextracker' in data/composers/*.json (matches knowledge/COVERAGE.md rank #3 uncarded family, 131 files)",
    "Lemon64 forum thread 'Reflextracker Stuff', including a first-hand post by credited musician PVCF describing a PC-hosted quadrasid composing mode: https://www.lemon64.com/forum/viewtopic.php?t=4872",
    "knowledge/COVERAGE.md / scripts/dev/gen-coverage.js OPEN_SOURCE hint (unsourced, treated as unconfirmed — see quirks)",
    "2026-07-23 disassembly attempt (this pass): real RSID headers of all 131 tagged HVSC files under C:/Users/mit/Downloads/HVSC_85-all-of-them/C64Music/MUSICIANS/ (read directly, script not retained); SIDdecompiler.exe hang reproduced on 6 real files (Warlock/Abba-Gabba.sid, Warlock/Burp.sid, Warlock/Revolution.sid, Data/Dual_Light.sid, Gregfeel/Agata_Song.sid, PVCF/Brainbeat_3_Introrap.sid); control run on Warlock/Their_Law.sid (non-Reflextracker) — see Disassembly notes for full methodology",
    "2026-08-07 disassemble/reassemble/byte-diff pass (this pass): scripts/dev/dis6502.js run on Warlock/Abba-Gabba.sid (real HVSC file), assembled with 64tass, byte-diffed against the original payload in Node — 100.000000% exact both before and after discovering the $C05B code region; full methodology, listings and the self-modified-slot table in knowledge/artifacts/reflextracker.txt"
  ]
}
```

## Overview

Reflex-Tracker (Player-ID tag `Reflextracker`) is a 1995 C64 music tool
credited to Tammo Hinrichs (kb), Matthias Kramm (Quiss), and Zorc — coders in
the German group Reflex, released as "Reflex-Tracker V1.1" jointly by Reflex
and The Obsessed Maniacs. It ranks #3 among this project's uncarded player
families by file count (131 files across 21 composers in the HVSC
`MUSICIANS/` tree). DeepSID's player database describes it as a native C64
tool; a separate forum account from one of its own credited musicians (PVCF)
describes an experimental PC-hosted "quadrasid" multi-SID composing mode used
for at least one production, which this card records but does not resolve
against the native-tool description. Usage is spread across a reasonable
number of composers with no single dominant user (top: Warlock, ~20%),
including one of the tool's own credited creators (PVCF) — consistent with an
in-house/small-scene group tool that saw some wider pickup, not a single
personal routine.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) the local
`COVERAGE.md` table's "open-source" flag for this family could **not** be
independently confirmed — no public source archive, repo, or licence was
found during this research pass, and the flag's own origin in
`gen-coverage.js` is an uncited legacy hint, not a citation, so this card
deliberately does not assert open-source status; (2) a credited Reflex-Tracker
musician's own forum post describes a PC-hosted "quadrasid" mode that could
only export MIDI, which sits oddly next to DeepSID's "Native / C64 emulator"
platform label — flagged as an unresolved discrepancy rather than papered
over.

## Disassembly notes

### 2026-08-07 — full disassemble/reassemble/byte-diff pass, 100.000000% native match, gap found and closed

**RetroDebugger's MCP tools were not present in this session's tool set**
despite the dispatch explicitly framing this as a solo/uncontested run — see
`new_lesson_learned` in this pass's report. Worked around entirely with
`scripts/dev/dis6502.js` (a from-scratch recursive-descent 6502 disassembler
built in an earlier batch specifically for players SIDdecompiler hangs on —
see its own header comment), 64tass, and `scripts/dev/vsid-trace.js`, none
of which need RetroDebugger.

On `Warlock/Abba-Gabba.sid` (RSID, load `$32C9`, payload 38,071 bytes, init
`$C006`): recursive descent from the single header-declared entry point
`$C006` produced a disassembly that reassembles to a **100.000000% byte-exact
match (0/38,071 bytes differ)** against the original payload, on the first
attempt.

**That result is a weak one on its own, and a concrete demonstration of why
this agent's own lessons (65/98) insist a native byte match doesn't validate
a code/data split.** The single-entry disassembly classified only 1,289 of
38,071 bytes (3.4%) as code, and still hit 100.000000% — because
misclassified code round-trips through `.byte` data emission just as exactly
as correctly-classified code does. An automated audit (cross-referencing
every absolute-mode `STA`/`STX`/`STY` write's target against every decoded
instruction's own operand-byte positions) found **8 distinct
self-modified-instruction-operand slots fed by 37 call sites** — this player
is unusually heavily self-modifying (matches the batch30 note below).
Chasing one of them (a self-modified `JMP` at `$C1B2` whose target
alternates between the known `$C09C` and a second value, `$C05B`, that
recursive descent from `$C006` alone never reaches) recovered a genuine
**65-byte previously-undiscovered code region**: `$C05B` is the ASCENDING
mirror of the already-known `$C09C` descending sample-pointer walker (`ADC`
instead of `SBC`, bounds `$71/$B1` instead of `$6A/$B2`) — i.e. the shared
`$D0/$D1` sample pointer can walk either direction, selected via this
self-modified jump. Re-running with both `$C006` and `$C05B` as entries
raised code coverage to 1,354 bytes (3.6%) and reassembled **still
100.000000% byte-exact**. Full listing and the complete self-modified-slot
table: `knowledge/artifacts/reflextracker.txt`.

**New, disassembly-confirmed memory-map fact**: four 32-entry instrument
tables at `$BA00`/`$BA20`/`$BA40`/`$BA60` (lo/hi pairs, sample-pointer origin
and the walker's other bound), indexed via `AND #$1F` on the low 5 bits of
the ZP `$D8`/`$D9` voice program-select byte — 17 of 32 entries are non-zero
(up to 17 instruments in this file). This directly confirms the batch30
reading ("shape fits a sample/replay pointer... consistent with a
sample-based tracker") as fact rather than a guess.

**No relocation-invariance control (this project's standard non-tautological
check, lessons 69/70/72) was completed this pass.** The native byte-diff
above is tautological on its own — round-tripping identical bytes always
"matches" — and was deliberately NOT cited as trace evidence. Of the 8
self-modified slots, at least one (`$C0D1`'s `JMP` target, alternating
`$C140`/`$C18B`) resolves entirely within already-known code (no further gap
there); at least 3 more (`$C0CB`/`$C19E` hi-byte-only, `$C0CE`/`$C19B`
hi-byte-only EOR-toggled, `$C198`/`$C1A2` table-page selectors mixing a
literal baseline with a note-derived offset) remain unresolved — either not
yet chased for further undiscovered branch targets, or not yet fixed
symbolically for relocation. See Verification for the precise next-step
list.

**Status stays `in-progress`.** Real, substantial progress this pass (first
disassembly/reassembly/byte-diff this card has ever had, a newly-discovered
65-byte code region, and a new confirmed memory-map fact), but no
register-write match was produced against a genuinely different binary, so
the project's `verified` bar is not met.

### 2026-07-31 (batch33) — tracing confirmed open

`scripts/dev/vsid-trace.js` traces `Warlock/Abba-Gabba.sid` first try: 200
frames, **26,514 register writes across all 25 SID registers**, ~133 per frame.
Both the write volume and the full register coverage fit a sample-capable
tracker rather than a pure digi player. Combined with the batch30 disassembly
note below, **both halves of the disassemble-reassemble-trace-diff workflow are
now open for this card** — it was the most-blocked card in the KB (131 files)
and is now the largest fully-unblocked verify candidate.

Single-sided observation of the original file — nothing reconstructed or
diffed — so status is unchanged. Worth noting the trace succeeded despite the
`$D7` busy-poll and absent `CLI` documented below, because `vsid-trace.js`
runs a real machine rather than depending on a play address or a vector
handshake. Profile and cross-player comparison:
`knowledge/artifacts/unblocked-trace-profiles.txt`.

### 2026-07-31 (batch30) — SIDdecompiler block routed around via RetroDebugger

**The tool-level block below is no longer the end of the line.** RetroDebugger
disassembled this player on the first attempt, where SIDdecompiler hangs on
every file tried. Method: extract the RSID payload to a `.prg` (2-byte LE load
address + payload), `retro_load` it, then `retro_disassemble`. No SIDdecompiler
involvement at any step. Full excerpts, with method and header facts, are in
`knowledge/artifacts/reflextracker.txt`.

Confirmed on `MUSICIANS/W/Warlock/Abba-Gabba.sid` (RSID, load `$32C9`, payload
38,071 bytes ending `$C77F`, init `$C006`, play `$0000`):

- **`$C006` is the real code entry**, not just a header claim: `SEI / LDA #$36 /
  STA $01` (RAM+I/O, KERNAL banked out) `/ JSR $C02C`.
- **The busy-poll design is now disassembly-confirmed.** The card previously
  recorded this as "an unverified hex-level read, not disassembly-confirmed".
  `$C016` is `LDA $D7 / BPL`, polling a zero-page flag seeded to `#$81` by the
  setup routine, and there is **no `CLI` anywhere on this path**.
- **Evidence against the interrupt-driven alternative.** The `entry.play`
  field offered "poll-driven main loop *or* real-hardware-interrupt-driven" as
  two live hypotheses. Setup writes `$DD0D <- #$7F`, which **masks off** every
  CIA2 interrupt source rather than enabling one, then sets CIA2 timer A
  (`$DD04/$DD05 <- $93/$00`) and starts it (`$DD0E <- #$41`). A started timer
  whose interrupt is explicitly masked, plus a ZP busy-poll and no `CLI`,
  favours **polled**, not interrupt-driven. Not runtime-confirmed — the write
  that satisfies the `$D7` poll was not traced.
- **Heavy operand self-modification.** ZP flags `$D8`/`$D9` each select which
  of two byte-sets is live by copying bytes between fixed code addresses
  (`$C05C`<->`$C09D`, `$C08C`<->`$C0CD`, `$C08F`<->`$C0D0`, `$C10A`<->`$C141`).
  The player rewrites its own operands rather than indexing a table — which is
  itself a plausible contributor to static disassemblers struggling here.
- **`$C09C` is a self-modifying 16-bit pointer walker**: `LDA #$00 / SBC #$E4 /
  STA $C09D` rewrites its own operand, walking a descending `$D0/$D1` pointer
  bounds-checked against a 16-bit limit. Shape fits a sample/replay pointer
  rather than a pattern cursor, consistent with a sample-based tracker — but
  the data it walks was not identified, so this is a reading, not a fact.
- Zero page observed in use: `$D0/$D1` pointer, `$D6` counter, `$D7` poll flag,
  `$D8`/`$D9` byte-set selectors.

**Scope of this pass, stated plainly:** one file, static disassembly only. The
code was never executed (`isExecuted=false` throughout), nothing was
reassembled, and no byte-diff or trace-diff was run. Status therefore stays
`in-progress` — this pass removes the blocker and establishes structure, it
does not meet this project's register-write-exact bar. The concrete next step
is no longer "get RetroDebugger": it is to disassemble the full `$C000-$C77F`
range, reassemble, and trace-diff against the original.

### 2026-07-23 — the original SIDdecompiler block

**Attempted 2026-07-23; genuinely blocked at the tool level, not a byte-diff
quality problem.** Following `knowledge/playbooks/disassemble-a-player.md`
and this project's `sid-player-verify` methodology:

1. Read real PSID/RSID headers directly (per `psid_header`'s method) for all
   131 `Reflextracker`-tagged HVSC files (all 21 composers, every file
   resolved locally under `C:/Users/mit/Downloads/HVSC_85-all-of-them/`).
   Every single file is **RSID** (not PSID), header play address **$0000**
   on all 131/131, header init address $C006 on 124/131 (94.7%) with 6
   minority-variant files ($C050 x3, $C000, $C103, $1C06, $CF40). RSID load
   address (song data placement) varies per file, $0870-$9974 across the
   set — this is real, verified header data, not a guess.
2. Ran `SIDdecompiler.exe -a<decimal load addr> -z -d -c -v2` (and, to
   isolate the fault, also `-t0` alone with no other flags) on 6 real files
   covering 5 different composers and both the dominant and one minority
   init-address variant. **Every single run hung indefinitely** — the
   process stayed alive (confirmed via `tasklist`) with **zero bytes**
   ever written to its own log/output, even after 12-15s and even with
   `-t0` (which should skip all play-loop tracing entirely). Had to
   `taskkill` each one.
3. Ruled out an environment/tool-invocation problem: the identical command
   pattern against an unrelated, non-Reflextracker RSID file from the same
   folder (`Warlock/Their_Law.sid`) completed in 0.136s (with its own
   unrelated "data continues past end of C64 memory" error) — so
   SIDdecompiler itself, this machine, and the flag combination are all
   fine; the hang is specific to this player's code.
4. As a diagnostic-only step (explicitly NOT a disassembly, NOT a verified
   fact — flagged as a lead), read the raw payload bytes at the header init
   address by hand for two files (`Warlock/Abba-Gabba.sid`,
   `Data/Dual_Light.sid`). The first ~90 bytes are byte-identical between
   the two (only a few trailing self-modified/song-specific operand bytes
   differ) — confirming both files share the same underlying player init
   code, as expected. The raw bytes open `SEI; LDA #$36; STA $01; JSR
   $c02c; ...` and shortly after contain what looks like `LDA $D7 / BPL
   ... / JSR $c219 / LDA $D7 / BEQ` — an apparent busy-poll on zero-page
   $D7 occurring before any `CLI` in the visible byte window. This is
   consistent with (but does not prove) a real-hardware-interrupt-driven
   design where $D7 is meant to be set by an ISR that a real CPU-cycle-
   accurate, interrupt-capable emulator would eventually fire, but which
   SIDdecompiler's static/non-interrupt-injecting trace never triggers —
   explaining a genuine, tool-level infinite loop rather than a
   disassembly-quality issue. **This paragraph is an unverified
   observation, not a confirmed entry point, memory-map, or ZP fact — do
   not cite it as more than a lead for whoever picks this up next.**
5. DeepSID's player database already documents one runtime fact (zero page,
   approx. 28 bytes in `$CF`-`$F1`) — recorded above with that citation. The
   $D7 byte noticed in step 4 falls inside that documented range, a loose,
   unverified corroboration only.

`data_format` and `effects.encoding` remain `TODO` — genuinely blocked, not
skipped. **Next step for whoever continues this**: this is exactly the
"RSID file SIDdecompiler can't handle at all" escalation case this agent's
own `tools_and_locations` doc calls out for RetroDebugger (a real
cycle-accurate, interrupt-capable C64 emulator) — RetroDebugger was not
connected/available in this session; load one of the 6 tested files there,
single-step past the apparent $D7 poll loop with real interrupts enabled,
and confirm the real play-routine entry point from there.

## Verification

**Not verified — `status: in-progress` (unchanged this pass).** Identity,
authorship, and usage facts are confirmed from the CSDb release page, the
cached SIDId entry, and this project's local dataset (unchanged from the
prior pass). This pass added real, directly-observed header facts across
all 131 tagged files (RSID format, play=$0000 universally, init-address
distribution — see `entry` above) and attempted an actual disassembly per
this project's `sid-player-verify` methodology, but **SIDdecompiler.exe
cannot process this player's files at all** — it hangs indefinitely on
every one of 6 tested real files (5 composers, both header init-address
variants tested), confirmed not to be a tool/environment/flag problem via a
clean, fast control run on an unrelated RSID file. No `.asm` was ever
produced, so no byte-diff and no register-write trace-diff could be run —
there is nothing to compare. `data_format`, `effects.encoding`, and the true
(disassembly-confirmed) entry points remain `TODO`. The "open-source" claim
in the local coverage table was specifically investigated in a prior pass
and could not be substantiated; it is not carried into this card as fact.

**Updated 2026-07-31 (batch30): the SIDdecompiler blocker has been routed
around.** RetroDebugger disassembled the player on the first attempt (payload
extracted to `.prg`, `retro_load`, `retro_disassemble`), so "no `.asm` was
ever produced" above is no longer true — see Disassembly notes and
`knowledge/artifacts/reflextracker.txt`. That pass confirmed `$C006` as the
real code entry, confirmed the ZP busy-poll (`$D7`) that was previously only
an unverified hex-level read, and produced evidence against the
interrupt-driven hypothesis (`$DD0D <- #$7F` masks CIA2 interrupts off).

**Status stays `in-progress` regardless**, because that pass was a static
disassembly of one file: the code was never executed, nothing was
reassembled, and no byte-diff or register-write trace-diff exists. This
project's bar for `verified` is a register-write match, and there is still
nothing to compare. `data_format` and `effects.encoding` remain `TODO`. What
changed is the next step, which is no longer "obtain a live debugger" but
"disassemble `$C000-$C77F` in full, reassemble, trace-diff".

**Updated 2026-08-07: disassembled, reassembled, and byte-diffed for the
first time — 100.000000% byte-exact (0/38,071 bytes), but this is a
tautological result, and `status` stays `in-progress`.** RetroDebugger's MCP
tools were not present in this dispatched session despite being told this
was a solo run — worked entirely from a from-scratch recursive-descent
disassembler (`scripts/dev/dis6502.js`) plus 64tass, no live debugger
required. On `Warlock/Abba-Gabba.sid`, recursive descent from the header's
declared init (`$C006`) reassembles byte-for-byte identical to the original
payload. That headline number is explicitly NOT sufficient for `verified`
here: an automated self-modified-operand audit found the single-entry
disassembly had silently misclassified a real 65-byte code region
(`$C05B`, reached only via a self-modified `JMP` operand) as inert `.byte`
data — while STILL reporting 100.000000% byte-exact, because misclassified
code round-trips through data emission exactly as cleanly as correctly
classified code does. Adding `$C05B` as a second entry point recovered that
region (code coverage 3.4% -> 3.6%) and the file still reassembles
100.000000% byte-exact. Full detail, the complete self-modified-slot table
(8 distinct slots, 37 call sites), and the newly-confirmed instrument-table
memory-map fact ($BA00/$BA20/$BA40/$BA60, `AND #$1F`-indexed via ZP
$D8/$D9): see Disassembly notes above and
`knowledge/artifacts/reflextracker.txt`.

**No register-write trace-diff was produced, and none is claimed.** This
project's own methodology (and this agent's lessons 65/69/70/72/98) requires
a non-tautological relocation-invariance control before a byte-exact native
match counts as `verified` — tracing a byte-identical reconstruction against
its own source file proves nothing beyond the byte-diff already shown. That
control was attempted but not completed this pass: of the 8 self-modified
operand slots found, one (`$C0D1`'s `JMP` target) resolves entirely within
already-known code (no further gap), but at least 3 more remain either
unresolved for additional undiscovered branch targets (the same technique
that found `$C05B`, not yet re-applied to `$C0CB`/`$C19E`) or un-fixed for
relocation (`$C0CE`/`$C19B`'s EOR-#$01 toggle needs its `$C4E8` seed values
shifted; `$C198`/`$C1A2`'s table-page selector mixes a literal `$A0`/`$C5`
baseline with a note-derived offset and needs both literals adjusted).
**Concrete next step**, in order: (1) re-run the `$C05B`-style
self-modified-jump-target chase on `$C0CB`/`$C19E` to rule out (or find) a
further undiscovered region; (2) fix the identified literal constants for a
page-aligned relocation (delta with an even high byte, to keep the
EOR-#$01-toggle parity correct per this pass's hand analysis); (3) trace-diff
the relocated build against the original via `vsid-trace.js` (this player is
RSID play=$0000, needs a real machine per lesson 92/67, not
`sidm2-sid-trace.exe`). `data_format`, `effects.encoding`, and the true
pattern/order-list layout remain `TODO` — the newly-confirmed instrument
tables narrow this but do not close it.

## Sources

See the `sources` array — the CSDb release page (credits, release year,
publishing groups), the cached SIDId entry, DeepSID's curated player-database
entry (`data/players.json`), this project's local usage aggregation, and a
Lemon64 forum thread containing a first-hand account from a credited
Reflex-Tracker contributor.

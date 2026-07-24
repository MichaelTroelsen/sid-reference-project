# Jammicro

<!--
  id = kebab-case, matches the "id" field below and the filename.
-->

```json
{
  "id": "jammicro",
  "name": "Jammicro",
  "aliases": ["JammicroV0", "JammicroV1", "JammicroV1_1"],
  "authors": ["Kamil Wolnikowski (Jammer)"],
  "released": "V0 tunes date from 2019 (earliest tagged: 'Tillax' 2019 EXclusive ON / 'Aye Contact' 2019 Arise, CSDb sid #56957/#56960); V1 debuted publicly 10 May 2022 on '512 Rap' (CSDb release #217751, AKA 'JammicroV1 world premiere', code by Jammer); the V1_1 sub-variant tag first appears on 2022 tunes ('Higher Math', 2022 Arise, sid #61307). Exact tool-authoring dates are not publicly documented.",
  "status": "verified",
  "platform": "Native C64 replay routine, hand-coded (not a cross-platform editor export). Written by Jammer, credited as 'Code' on the tune that premiered it; described by the author himself in a CSDb compo-forum comment as 'my new routine' shortly before it was finished. All tagged tunes are single-tune PAL/8580, small (256-747 bytes of tune data), consistent with a size-conscious routine for 4K intros and tiny-SID compos.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per tune (read directly from each tagged .sid's own PSID header, HVSC copy, this pass — matches the CSDb-parsed values previously recorded): V0 tunes are hand-placed at assorted addresses ($29F0 Aye_Contact #56960, $3200 Tillax #56957, $1000 Chessboard_Peya #57813 / Malibu #60375); all V1 and V1_1 tunes sampled load at $1000 (Ambience #60379, Dark_Heart #62226, Higher_Math #61307, Mini_House #63566, Bullet_Train #65556, plus DeMOSic's 1_Byte_Under_512 #60422 and Shogoon's 512_Rap #60264). Data sizes are consistently small (256-747 bytes); disassembly of 3 representative files (see Verification) confirms this whole span IS the player code + its tune data together, hand-inlined per tune — there is no separate fixed-size 'engine' plus variable 'song data', consistent with a size-coding personal routine re-typed/adapted per intro rather than a shared library linked against tune data.",
    "zero_page": "CONFIRMED, but version-dependent (disassembly of 3 representative files, this pass — see Verification): V1/V1_1 (Ambience.sid, Higher_Math.sid) use $F6-$FF as per-voice workspace — $F6 (current voice index 0-2 for V1's 3-voice Ambience, 0-1 for V1_1's 2-voice Higher_Math), $F7/$F9 (per-voice note-stream read offset, one byte per voice), $FA/$FB (per-voice duration/repeat countdown), $FD (temp Y-save across an indirect load), $FE/$FF (indirect pointer to the current voice's note-data stream, reloaded via a 3-entry lo/hi pointer table each time the voice index wraps). V0 (Aye_Contact.sid) uses **no zero page at all** — its equivalent per-voice state (duration countdowns, stream read index) lives as self-modified immediate operands directly in the code (e.g. `l2a4b ldx #$03` patched by `stx l2a4b+1` elsewhere), a structurally different technique from V1's indirection, consistent with SIDId's separate V0/V1 byte-pattern fingerprints being genuinely different code, not just a version bump.",
    "layout": "CONFIRMED for the 3 files disassembled this pass (see Verification), NOT claimed to generalize beyond them given file-to-file size variation (256-747 bytes): `init` is a 3-byte JMP stub at load that clears $F6-$FF and $D400-$D418 then RTS; `play` is a 3-byte JMP stub to the per-voice dispatch loop. Tune data (note-stream bytes + a small lo/hi pointer table to each voice's stream, plus a couple of small parameter tables for arpeggio/pulse-width-style constants) is inlined directly after the code, addressed by the zero-page pointer (V1/V1_1) or as absolute-indexed tables (V0) — there is no separate fixed 'header' region distinct from the code."
  },
  "entry": {
    "init": "Init = the file's load address on every sampled tune (init=$1000 for all V1/V1_1 tunes; init tracks each V0 tune's own load address, e.g. $29F0 Aye_Contact, $3200 Tillax). TRACE-VERIFIED this pass on 3 representative files (Aye_Contact.sid V0, Ambience.sid V1, Higher_Math.sid V1_1) via disassemble->reassemble->trace-diff — see Verification. Was previously CSDb-header-only; now independently confirmed by register-write-exact reconstruction.",
    "play": "Play = init+3 on every sampled tune across all three version tags (e.g. $1003 for $1000-loaded V1/V1_1 tunes; $29F3 for Aye_Contact's $29F0; $3203 for Tillax's $3200), i.e. a fixed 3-byte JMP-stub offset from init. TRACE-VERIFIED this pass on the same 3 files (see Verification) — the JMP stub is real code (`play jmp l....`), not a header artifact."
  },
  "speed": "PSID header 'speed' field (offset 0x12) reads 0 (all 32 bits clear) on all 3 files checked this pass (Aye_Contact.sid, Ambience.sid, Higher_Math.sid) — per the PSID spec this means 'call play once per screen refresh' (standard 50Hz PAL vertical-blank single-speed), not a CIA/raster multispeed convention. This is read directly from the header, not independently disassembled (no IRQ-vector-install code was found in any of the 3 disassembled files — all three ONLY contain the init/play routine and tune data, confirming the multispeed setup, if any, lives in the PSID driver/host, not the player's own code). Consistent across all 3 files sampled but not checked on the other 16 tagged files.",

  "data_format": {
    "order_list": "Not a traditional order-list: V1/V1_1 use a fixed 3-entry (V1) or 5-entry (V1_1, Higher_Math.sid) lo/hi pointer table (`l10e5`/`l10e8` in Ambience.asm, `l110c`/`l1111` in HigherMath.asm) mapping voice-index to one contiguous note-stream per voice/track — reloaded whenever the per-voice stream offset wraps. V0 (Aye_Contact.sid) has no pointer table at all; each of its 3 voices' streams is a separate fixed absolute-addressed table (`l2b6e`, `l2bb6`/`l2c0e` reused, `l2c66`, `l2c76`) walked by self-modified X-index operands instead of zero-page pointers.",
    "patterns": "Each voice's data is one flat byte stream (not pattern+order-list separated) of note/duration event pairs; a marker byte ($FE in V0's tables, $E0/$80/$90 in V1/V1_1's) signals a control event (repeat/loop-restart or a 2-byte extended value) rather than a literal note. Exact command semantics were NOT decoded (only the control-flow structure that reads them) — see 'effects' below.",
    "instruments": "TODO: no separate instrument-table structure was found in any of the 3 disassembled files; per-voice pulse-width/filter-cutoff-looking small tables (`l10d3`/`l10dc` in Ambience.asm, `l10f6`/`l1101` in HigherMath.asm) are indexed directly by stream data, not through anything resembling a named instrument slot — but this was not confirmed against a 4th+ file, so it is reported as an observation of these 3 files, not asserted as the general format.",
    "wavetable": "TODO: not decoded — no explicit waveform-select table was identified distinct from the small per-voice constant tables above",
    "pulsetable": "TODO: see 'instruments' — a small byte table is read and written to $D401/$D40E/etc per-voice, but its exact semantics (pulse width vs. something else) were not confirmed",
    "filtertable": "TODO: not decoded — $D416/$D417/$D418 (filter cutoff/resonance/mode-volume) are only ever written with fixed init-time constants in the 3 files checked, never from a data table; no filter automation was observed in any of the 3 sampled tunes"
  },
  "effects": {
    "encoding": "PARTIALLY decoded, structure only (this pass, 3 files): stream bytes are read in note/duration pairs; a high-bit-set or specific marker byte (V1/V1_1: values $E0/$80/$90-and-up; V0: literal $FE) triggers an alternate 2-byte read instead of a plain note, which is used both for run-length-style note repeats and for restarting the stream pointer at end-of-track. No effect-command TABLE (vibrato/portamento/arpeggio opcode list) was found distinct from this note-stream marker mechanism — if Jammicro has real 'effects' beyond note+duration+loop, they were not located in these 3 files.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Overwhelmingly a personal routine, not a published tool: of the 19 files in this project's dataset tagged JammicroV0/V1/V1_1, 17 (89%) are Jammer's own compositions; only 'Ambience'-era outlier '1 Byte Under 512' (composer DeMOSic) and '512 Rap' (composer Shogoon, code credited to Jammer) come from other musicians. No SIDId comment, CSDb tool page, manual, or format spec was found anywhere — the Tier 3 fields were TODO for that reason until this pass's disassembly filled in what a real reconstruction of 3 files actually shows (structure only, not full command semantics).",
    "Disassembly (this pass) confirms V0 and V1 are not just differently-fingerprinted but structurally different implementations: V0 (Aye_Contact.sid) keeps zero zero-page state, using self-modified immediate operands directly in code for per-voice countdowns/indices; V1/V1_1 (Ambience.sid, Higher_Math.sid) use a small zero-page block ($F6-$FF) plus an indirect (zp),Y pointer reloaded from a lo/hi table per voice. V1 and V1_1 are near-identical in structure (V1_1 just has more voice-stream table entries, 5 vs 3, and a different voice count, 2 vs 3) — consistent with the card's existing conclusion that V1_1 is a DeepSID-internal refinement of the same public V1 fingerprint, not a separate rewrite.",
    "Every one of the 3 disassembled files reassembled 64tass-clean with SIDdecompiler's '-v2' memory-map 'Start:' address exactly matching the file's own PSID load address (no dropped-leading-byte or fixed-low-RAM-workspace trap per this project's gotcha 40) — Aye_Contact.sid needed 10 self-modified-immediate-operand bytes patched back to their true cold value ($00 in every case, the classic drifted-runtime-snapshot pattern) to reach 100% byte-exact; Ambience.sid and Higher_Math.sid reassembled 100% byte-exact with zero patching needed.",
    "The name and its first public outing both point to a size-coding origin: JammicroV1 premiered on the tune '512 Rap' at the 'Unofficial Tiny SID Compo 2022' (CSDb event #3157), a compo with byte-limited categories (256B intro, 512B/1K/2K game — CSDb has no dedicated size-limited-music category, so the organiser reused the game-size categories as proxies for music entries). Jammer asked for a one-week deadline extension in the compo's forum thread on 2022-05-07 because 'my new routine is almost done' — that routine is JammicroV1. A second JammicroV1-tagged tune in the dataset, DeMOSic's '1 Byte Under 512', echoes the same size-limit theme in its title. None of this is proof the *player itself* fits in 512 bytes — only that its debut track was written for a byte-limited compo — so no size claim is recorded as fact here.",
    "SIDId's sidid.nfo entry for both JammicroV0 and JammicroV1 carries only name/author, no reference (CSDb release id) or comment field, unlike ~66 other SIDId tags that include a playback-technique note — so csdb_release is left null rather than guessed.",
    "Jammicro IS registered in the public, open-source SIDId / player-id signature database (cadaver/sidid and WilfredC64/player-id on GitHub) with two distinct fingerprints — JammicroV0: 'D4 EE ?? ?? A2 00 E0 ?? D0 05 A2 00 8E ?? ?? BD' and JammicroV1: '9D 00 D4 4C ?? ?? BD ?? ?? 85' — both authored 'Kamil Wolnikowski (Jammer)'. These are byte-pattern IDENTIFICATION fingerprints (the '9D 00 D4' in the V1 signature is a 'STA $D400,X' SID-register write), NOT a memory map or format spec: they confirm the player's identity and that V0 and V1 are genuinely different code, but do not document the routine's internals — every Tier 3 data-format/effect field therefore stays TODO.",
    "The 'JammicroV1_1' tag used by DeepSID (and this dataset's 6 V1_1 files) does NOT exist in the public SIDId config — only JammicroV0 and JammicroV1 do. 'V1_1' is a DeepSID-internal sub-version label, i.e. a DeepSID refinement within the same public V1 signature family, not a separately-fingerprinted public player. It shares the V1 tunes' $1000/init+3 PSID-header convention."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag['JammicroV0'] / byTag['JammicroV1'] (name + author only, no reference/comment) — deepsid_dl/sidid.nfo snapshot, parsedAt 2026-07-11",
    "Local dataset: knowledge/COVERAGE.md, family 'JammicroV' (rank #6 among uncarded families, 19 files, raw tags JammicroV0/JammicroV1/JammicroV1_1)",
    "Local dataset: data/composers/jammer.json, data/composers/demosic.json, data/composers/shogoon.json (folder[] records) — 19 files total, 17 by Jammer, 1 by DeMOSic, 1 by Shogoon",
    "CSDb release '512 Rap' (id 217751): https://csdb.dk/release/?id=217751 — AKA 'JammicroV1 world premiere', code by Jammer, music by Shogoon, released at Unofficial Tiny SID Compo 2022, 10 May 2022",
    "CSDb event 'Unofficial Tiny SID Compo 2022' (id 3157): https://csdb.dk/event/?id=3157 — byte-limited categories (256B/512B/1K/2K); Jammer's 2022-05-07 forum comment about his 'new routine' almost being done",
    "CSDb scener profile, Jammer (id 8105): https://csdb.dk/scener/?id=8105 — real identity Kamil Wolnikowski, Poland, groups 1mandivision/MultiStyle Labs/Protovision; no Jammicro tool/player release credited in the bio (only a GoatTracker V2.61 music credit)",
    "Public SIDId signature config (open source): cadaver/sidid sidid.cfg — https://github.com/cadaver/sidid/blob/master/sidid.cfg — carries JammicroV0 ('D4 EE ?? ?? A2 00 E0 ?? D0 05 A2 00 8E ?? ?? BD') and JammicroV1 ('9D 00 D4 4C ?? ?? BD ?? ?? 85') fingerprints + author; mirrored in WilfredC64/player-id config/sidid.cfg (https://github.com/WilfredC64/player-id). Fetched 2026-07-24. NO JammicroV1_1 entry exists — that tag is DeepSID-only.",
    "CSDb sid-entry pages (PSID header load/init/play, single-tune PAL/8580) for tagged tunes, all fetched 2026-07-24 (init=load, play=load+3 on every one): Aye_Contact #56960 ($29F0), Tillax #56957 ($3200), Chessboard_Peya #57813 ($1000), Malibu #60375 ($1000), Ambience #60379 ($1000, 256B), Dark_Heart #62226 ($1000), Higher_Math #61307 ($1000), Mini_House #63566 ($1000), Bullet_Train #65556 ($1000), 1_Byte_Under_512 #60422 ($1000, 511B), 512_Rap #60264 ($1000, 511B) — https://csdb.dk/sid/?id=<id>",
    "No public SOURCE code or format/spec documentation for the Jammicro *player itself* found (only the identification fingerprints above); Lemon64 forum search is login-gated and Forum64 returned HTTP 403 to WebFetch — neither surfaced a Jammicro thread via web search (2026-07-24)",
    "This pass's disassemble->reassemble->trace-diff verification (2026-07-24): SIDdecompiler.exe 0.8 (`-a<decimal load>  -z -d -c -v2`) against HVSC copies of Aye_Contact.sid (V0), Ambience.sid (V1), Higher_Math.sid (V1_1); 64tass.exe V1.60.3243 for reassembly; sidm2-sid-trace.exe for register-write trace-diff (20-30 frames each). Working files in scratchpad/jammicro/ (session-local, gitignored, not committed) — AyeContact.asm/.prg, Ambience.asm/.prg, HigherMath.asm/.prg plus the byte-diff/patch/trace scripts run inline."
  ]
}
```

## Overview

Jammicro is a native C64 music-replay routine written by Kamil Wolnikowski
("Jammer"), a Polish scener and composer (1mandivision / MultiStyle Labs /
Protovision). It is identified in this project's dataset only via Player-ID
signature tags (`JammicroV0`, `JammicroV1`, `JammicroV1_1`) — there is no
DeepSID curated entry and no dedicated CSDb tool/release page for it. `V0`
and `V1` are genuine, separately-fingerprinted players in the public
open-source SIDId database (cadaver/sidid); `V1_1` is a DeepSID-internal
refinement of the V1 signature, not a distinct public fingerprint. The
routine's first tunes date to 2019 (V0: "Tillax", "Aye Contact"); the V1
rewrite debuted publicly 10 May 2022 as "512 Rap" (CSDb release id 217751,
AKA "JammicroV1 world premiere") at the byte-limited "Unofficial Tiny SID
Compo 2022" (CSDb event #3157), with Jammer's own forum comment the same week
describing "my new routine" nearing completion. Across every tagged tune's
PSID header, init sits at the load address and play at init+3 (a fixed +3
entry convention, now independently trace-confirmed — see Verification);
V0 tunes are hand-placed at varying load addresses while all V1/V1_1 tunes
standardized on $1000. Composer concentration is heavily skewed: 17 of 19
tagged files in this collection (89%) are Jammer's own tunes, with only one
file each from DeMOSic and Shogoon — this is a personal routine that saw
very limited outside pickup, not a widely published tool. Disassembly of
one representative file per sub-version (this pass) confirms V0 and V1 are
genuinely different implementations, not just different fingerprints: V0
keeps no zero-page state at all (self-modified immediate operands in code),
while V1/V1_1 use a small `$F6-$FF` zero-page block with an indirect
`(zp),Y` pointer per voice.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) composer concentration
(89% Jammer himself) marks this as a personal routine rather than a
published tool with a manual; (2) the name and debut context strongly suggest
a size-coding ("tiny"/"micro") origin, but no source confirms an actual byte
budget for the player itself — that inference is kept out of the JSON facts
and stated only as circumstantial here; (3) no CSDb tool page, format spec,
or source repository could be found for any version; (4) disassembly (this
pass) confirms V0 and V1 are structurally different code, not just
differently fingerprinted, and reassembles/trace-matches exactly on all 3
files tried — see Verification.

## Disassembly notes

Performed this pass (2026-07-24) on 3 representative HVSC files, one per
tagged sub-version: `Aye_Contact.sid` (V0, load $29F0), `Ambience.sid` (V1,
load $1000, 256-byte payload — the smallest tagged file), `Higher_Math.sid`
(V1_1, load $1000). `SIDdecompiler.exe`'s own `-v2` memory-touch map reported
`Start:` exactly matching each file's own PSID load address in all 3 cases —
no dropped-leading-byte / fixed-low-RAM-workspace relocation trap. All 3
reassembled with 64tass with no wrap warnings. Aye_Contact.sid needed 10
self-modified-immediate-operand bytes (all cold value `$00`, per-voice
countdown/index registers SIDdecompiler captured post-execution — the
familiar "drifted working-storage" pattern) patched directly in the `.prg`
to reach exact parity; Ambience.sid and Higher_Math.sid needed zero patching.
See `memory`/`entry`/`data_format`/`effects` facts above for what the
disassembly itself revealed (V0 uses no zero page at all; V1/V1_1 use a
small `$F6-$FF` indirect-pointer workspace) — this is now real, disassembly-
sourced information, not CSDb-header metadata.

## Verification

**Verified — `status: verified`.** Disassemble -> reassemble -> byte-diff ->
trace-diff was run on 3 independent real HVSC files, one per tagged
sub-version:

| File | Tag | Load | Byte-diff (before patch) | Byte-diff (after patch) | Trace-diff (20-30 frames) |
|---|---|---|---|---|---|
| `Aye_Contact.sid` | V0 | $29F0 | 98.4592% (10 diffs, all self-modified-immediate-operand bytes at $2A4B/$2A6F/$2A85/$2A8C/$2ABE/$2AD2/$2AEF/$2B21/$2B37/$2B63, true cold value `$00` in every case) | 100.0000% (0/649 bytes) | Exact — `diff` of the two `sidm2-sid-trace.exe` CSVs is empty except the echoed input filename |
| `Ambience.sid` | V1 | $1000 | 100.0000% (0/256 bytes), no patch needed | — | Exact, 0 patching needed |
| `Higher_Math.sid` | V1_1 | $1000 | 100.0000% (0/295 bytes), no patch needed | — | Exact, 0 patching needed |

All 3 reconstructions are register-write-exact against the real file's own
playback — the project's own `verified` bar (an exact or near-exact,
explicitly-quantified match; here it's a genuine exact match on all 3,
not a rounded-up approximation). Identity/provenance facts recorded
previously (author, dataset usage, 2019 V0 origin, 2022 V1 debut, size-compo
context, public open-source SIDId fingerprints for V0/V1, V1_1 as a
DeepSID-only tag) remain unchanged and still cited to their original
sources. The `entry.init`/`entry.play` PSID-header convention (init=load,
play=init+3) is now independently trace-confirmed, not just CSDb-header-read.
Tier 3 fields (zero page, layout, data format, effects) are filled in from
the 3 disassembled files' real structure (see facts above) — explicitly
scoped to those 3 files, not asserted to generalize to all 19 tagged files
without further checking (only 3 of 19 were disassembled; the other 16,
particularly other V0 files at their own distinct load addresses, were not
independently checked and could show file-specific variation, as this
routine is a hand-adapted personal one rather than a shared library — see
quirks). `speed` is filled in from the PSID header's own `speed` field
(0 = standard 50Hz single-speed) on the same 3 files, not independently
disassembled (no IRQ-vector-install code exists in any of the 3 files
checked, consistent with — but not proof beyond — the header-declared
convention).

## Sources

See the `sources` array — `data/sidid.json`, `knowledge/COVERAGE.md`,
`data/composers/*.json`, the public open-source SIDId signature configs
(cadaver/sidid, WilfredC64/player-id), 11 CSDb sid-entry PSID-header pages,
CSDb release #217751, CSDb event #3157, the CSDb scener profile for Jammer
(Kamil Wolnikowski), and this pass's own disassemble/reassemble/trace-diff
run against 3 real HVSC files (`SIDdecompiler.exe`, `64tass.exe`,
`sidm2-sid-trace.exe` — see the sources array's final entry for exact
tool versions and working-file locations).

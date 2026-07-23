# NinjaTracker V2.x

```json
{
  "id": "ninjatracker-v2x",
  "name": "NinjaTracker V2.x",
  "aliases": ["NinjaTracker_V2.x"],
  "authors": ["Lasse Öörni (Cadaver) / Covert Bitops"],
  "released": "2006 (v2.0, CSDb release 39374); iterated to v2.04 by 2013 (CSDb release 119721)",
  "status": "verified",
  "platform": "Native C64 editor, 6502/DASM assembly. Official archive ships editor + a separate relocatable \"gamemusic\" playroutine (nt2play.s) with full source; rebuildable with DASM, Pucrunch and the c64tools package.",
  "csdb_release": 39374,

  "memory": {
    "load_address": "No single fixed base — the standalone tracker-exported .sid player's load address is per-file, set by its own PSID header (confirmed on 3 real HVSC files, all loadAddr===0 i.e. embedded as the payload's own first 2 LE bytes: Cheesetro_Tune.sid/Final_Boss_Defeated.sid both $1000, Glitch4K.sid $0d00). The gamemusic variant (nt2play.s) is separately relocatable via its own 21-entry fixup table (NT_NUMFIXUPS=21) patched by nt_newmusic — not assembled at one fixed address either, but a different mechanism from the standalone export.",
    "zero_page": "CONFIRMED for the standalone .sid-export player (disassembly of 3 real files, not nt2play.s): exactly 2 consecutive bytes at $fe-$ff (labelled zfe/zfe+1 in the reconstructed disassembly) — no other zero-page address appears anywhere in any of the 3 disassembled files. This differs from nt2play.s's own $fc-$fd — the standalone export and the gamemusic variant use a different fixed ZP pair, even though both are 2 bytes (matching DeepSID spec's '2; can be user defined (?)' note either way).",
    "layout": "Standalone export (confirmed from disassembly): a per-channel workspace table sits at a fixed offset from the load address (load+$35b..load+$396 on the two $1000-loaded files; load+$058..load+$094 on the $0d00-loaded file — i.e. the same relative offset, ~$35b bytes past load, on all 3), indexed via X=0/7/14 for the 3 SID voices (7-byte channel stride). Two small per-channel init routines (at load+$24/load+$34-ish, addresses vary per file since they're reached via JSR from init) precede it. Full byte-level field breakdown of that workspace table was not attempted (out of scope for this verification pass) — TODO if a future pass wants patterns/instrument/wave-table byte encoding. Per nt2play.s (gamemusic variant, unconfirmed against standalone): song table + per-channel pattern/command/legato-command/wave/pulse/filter streams, addressed via 6-byte-header offsets (NT_ADDWAVE=$00, NT_ADDPULSE=$04, NT_ADDFILT=$08, NT_ADDCMD=$0c, NT_ADDLEGATOCMD=$10, NT_ADDPATT=$14) relative to a per-song base."
  },
  "entry": {
    "init": "Standalone .sid-export player (confirmed via disassembly + trace-diff on 3 real files): PSID init vector = load address itself, on all 3 files (init=load, e.g. init=$1000 for a $1000-loaded file) — a plain `jmp` into a short setup routine (zeroes/seeds the per-channel workspace table, sets initial SID volume via $d417/$d418). No subtune-number parameter read at init in any of the 3 files traced (all are 1-subtune files; a possible A-register subtune select, as in nt2play.s's nt_playsong, was not exercised/confirmed). Gamemusic variant (nt2play.s, separate code path, not the same as this): nt_newmusic (A/X = musicdata address lo/hi, patches the fixup table) then nt_playsong (A = tune number 0-15, 16 subtunes).",
    "play": "Standalone .sid-export player (confirmed): PSID play vector = load+3 on all 3 files. Per-frame routine walks the per-channel workspace table (X=0/7/14) driving note/portamento/filter-cutoff updates into $d400-$d418. nt2play.s's nt_music ('Call each frame to play music and sound effects') is the gamemusic variant's equivalent, not confirmed identical byte-for-byte to the standalone export's play routine."
  },
  "speed": "1x, confirmed by trace: exactly one register-write burst per emulated frame call across all 3 files, no CIA/multispeed setup found in any of the 3 disassemblies. Matches nt2play.s's own doc comment ('Call each frame...').",

  "data_format": {
    "order_list": "Per-channel song/track position list (nt_chnsongpos), one per channel plus pattern number (nt_chnpattnum). TODO: exact byte encoding.",
    "patterns": "Referenced via NT_ADDPATT-offset streams (nt_chnpattpos walks them); DeepSID spec describes up to 127 patterns of up to 180 rows, 'order list with one pattern shown' in the editor. TODO: byte-level pattern command format.",
    "instruments": "DeepSID spec: '127 commands' (commands double as instruments, per the archive's readme.txt: 'general purpose commands (or instruments)', paraphrased on cadaver.github.io/tools.html as 'commands (also used as instruments)'). TODO: exact table layout.",
    "wavetable": "NT_ADDWAVE-offset stream, addressed via nt_chnwavepos/nt_chnwave; DeepSID spec: arpeggio done via the wave table (design also described by the author as 'a minimalistic and fast playroutine centered on the wavetable - it does note init, arpeggio and vibrato/slides all in one').",
    "pulsetable": "NT_ADDPULSE-offset stream (nt_chnpulsepos/nt_chnpulse); DeepSID spec: pulse is 'Programmable'.",
    "filtertable": "NT_ADDFILT-offset stream (nt_filtpos/nt_filttime); DeepSID spec: filter is 'Programmable' (a separate DeepSID field, hard_restart, is 'Set globally' — not the same as filtering; do not conflate the two)."
  },
  "effects": {
    "encoding": "TODO: exact command-byte layout not transcribed from source (nt_cmdwave/nt_cmdpulse/nt_cmdsr/nt_cmdad/nt_cmdfilt pointer fixups exist but the per-byte opcode meanings weren't read in this pass).",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": ["ninjatracker-v1x"],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "V2.x is an iteration of Cadaver's earlier NinjaTracker (V1.02/V1.1, 2002, CSDb release 7206 per SIDId's separate NinjaTracker_V1.x tag) — the archive's own readme.txt states 'Main differences to previous versions are general purpose commands (or instruments), two-column tables and a slide function that knows to stop at the target pitch'; the author's own site (cadaver.github.io/tools.html) paraphrases the same point ('Changes to previous versions include commands (also used as instruments), 2-column tables and a slide function that stops at target pitch') but carries no release dates. No card exists yet for the V1.x family; the successor_of edge above (id 'ninjatracker-v1x', matching this project's version-suffix naming convention) is dangling until one is written.",
    "The official archive ships TWO distinct player code paths: the tracker's own standalone .sid-export player, and a separate 'gamemusic' playroutine (nt2play.s, source read directly for this card) meant for embedding multiple tunes/SFX in a game with a shared, relocatable player. CONFIRMED by disassembly (2026-07-23, 3 real HVSC files): the standalone export is NOT byte-identical to nt2play.s — it uses a different zero-page pair ($fe-$ff vs nt2play.s's $fc-$fd) — so memory/entry/speed facts are now sourced per code path, not assumed shared; see Verification section.",
    "SIDdecompiler 0.8 has a real decoding bug (found verifying this card): a BEQ/BNE whose raw operand byte is exactly $80 (-128, the max backward branch) is mislabeled in the output .asm with a target computed as if the offset were +128 forward — the tool fails to two's-complement-decode this one boundary value correctly. Reassembling as-is makes 64tass reject it ('branch too far by +1 bytes'), not silently produce wrong code — but don't assume every branch that fails to reassemble is a length/relocation bug (per gotcha 40/41-style checklist); check the raw operand byte value directly when the failing branch's operand is exactly $80.",
    "Two LDA #imm instructions in the standalone export's filter-cutoff setup routine are self-modifying targets whose true cold value ($00 in all 3 files checked) SIDdecompiler's trace window did not capture (captured $04/$10/$0a/$20-style mid-execution snapshots instead) — a gotcha-43-class immediate-operand drift, not a data table. See Verification section for the exact fix.",
    "A GoatTracker-to-NinjaTracker2 converter tool exists (gt2nt2.zip, 'converts GoatTracker2 songs to NinjaTracker V2.03+ format with some limitations') and instrument import from GoatTracker is listed in the DeepSID spec (`import_from: GoatTracker instruments`) — this is a data importer, not a shared player/routine, so no `derives_from`/`shares_routine_with` edge to GoatTracker is asserted.",
    "Composer concentration in this dataset is narrow: 18 composers, 90 files, with 'Jerusalem Spider' alone accounting for 29 of the 90 (~32%) and the top 3 composers for 52 (~58%) — consistent with a real but lightly-adopted tool rather than a widely-spread mainstream tracker (data/composers/*.json aggregate).",
    "V1.x and V2.x are tracked as separate SIDId/DeepSID tags/entries despite being the same author's evolving tool — do not merge their file counts or CSDb release IDs."
  ],
  "sources": [
    "SIDId (data/sidid.json byTag.NinjaTracker_V2.x): author 'Lasse Öörni (Cadaver)', released '2006 Covert Bitops', reference https://csdb.dk/release/?id=39374",
    "data/players.json (cached DeepSID player spec, title 'NinjaTracker v2.x'): developer Cadaver, start_year 2006, end_year 2013, csdb_id 119721, site https://cadaver.github.io/, distribution Freeware, player_size 'Approx 1000 bytes', zero_pages '2; can be user defined (?)', cpu_time 'Approx 12-13 rasterlines [SD]'",
    "CSDb release (v2.0, 30 Aug 2006): https://csdb.dk/release/?id=39374",
    "CSDb release (v2.04, 19 Jun 2013): https://csdb.dk/release/?id=119721",
    "Author's own tool page (paraphrased version history, download links): https://cadaver.github.io/tools.html — NOTE: the verbatim version-history quote and the source-rebuild requirements (DASM/Pucrunch/c64tools) cited above are from the archive's readme.txt, not this page; tools.html only paraphrases the former and does not state the latter.",
    "Author's design-philosophy page (wavetable-centric playroutine description, quoted verbatim in Overview): https://cadaver.github.io/rants/music.html",
    "nt2play.s (NinjaTracker V2.04 gamemusic playroutine source, Cadaver 6/2013) read directly for memory/entry/speed facts above, mirrored at https://raw.githubusercontent.com/localhost/NinjaTracker/master/nt2play.s (third-party mirror of Cadaver's official archive contents — readme.txt on that mirror is the primary source for the version-history quote and rebuild requirements cited above; cadaver.github.io/tools.html independently paraphrases the same version history but carries no release dates, so it is not a verbatim match)",
    "Local dataset: 90 files tagged NinjaTracker_V2.x across 18 composers (see knowledge/COVERAGE.md, rank 11 combined with V1.x at 106 files)",
    "Disassembly/reassembly/trace-diff verification (2026-07-23): SIDdecompiler.exe + 64tass.exe + sidm2-sid-trace.exe against 3 real HVSC files (Spider_Jerusalem/Cheesetro_Tune.sid, Final_Boss_Defeated.sid, Glitch4K.sid) — see Verification section for full method, the two SIDdecompiler/self-modified-code fixes applied, byte-diff numbers, and trace-diff result."
  ]
}
```

## Overview

NinjaTracker V2.x is a native C64 music editor by Lasse Öörni (Cadaver) of
Covert Bitops, first released as v2.0 on 30 August 2006 and iterated through
v2.04 by June 2013. It's the second generation of Cadaver's own tracker line
(NinjaTracker V1.02/V1.1 dates to 2002) — the author describes it as "still a
somewhat minimal music editor," with V2's headline additions being
general-purpose commands doubling as instruments, two-column tables, and a
slide effect that stops cleanly at its target pitch. The author's own design
note calls the playroutine "minimalistic and fast... centered on the wavetable
- it does note init, arpeggio and vibrato/slides all in one," and DeepSID's
cached spec backs this up with a compact footprint (~1000 bytes, ~12-13
rasterlines). In this collection it's a modestly-used tool: 90 files across 18
composers, dominated by one composer (Jerusalem Spider, ~32% of files) — real
adoption beyond the author's own circle, but not a mainstream tracker. Source
code is included in the official archive and freely redistributable/
modifiable ("customization is allowed and encouraged" per the archive's own
readme), though no formal open-source licence is stated anywhere found.

## Quirks & gotchas

See the `quirks` array in the JSON block — the load-bearing ones: (1) the
archive contains **two different player code paths** (the tracker's own
.sid-export player vs. the separate relocatable "gamemusic" playroutine,
`nt2play.s`) — now disassembly-confirmed to differ (different ZP pair) rather
than merely un-checked; (2) V1.x and V2.x are separate SIDId tags/CSDb
releases by the same author and must not be conflated when counting files or
citing release IDs; (3) a real `SIDdecompiler` disassembly bug (mislabels a
`$80`-operand branch's target) and a self-modified-immediate-operand drift
were both found and fixed while verifying this card — see Verification.

## Disassembly notes

Two independent passes, one per code path. (1) Tier 3 facts about the
**gamemusic playroutine variant** (`nt2play.s`) come from **reading its
public, commented assembly source** directly, not disassembly — a 2-byte ZP
work area at `$fc`, `nt_newmusic`/`nt_playsong`/`nt_music`/`nt_playsfx`
entry points, a 21-entry relocation fixup table, a per-frame call
convention. (2) Tier 3 facts about the **standalone tracker-exported `.sid`
player** — the code path that actually matters for the 90 files this card's
tag covers — come from a real disassemble→reassemble→trace-diff pass
against 3 HVSC files (`Cheesetro_Tune.sid`, `Final_Boss_Defeated.sid`,
`Glitch4K.sid`; see Verification below for the full method and results),
confirming it does **not** share `nt2play.s`'s ZP pair ($fe-$ff vs $fc-$fd)
even though both variants use 2 consecutive ZP bytes. Byte-level
pattern/command encoding was not pursued in the disassembly pass (out of
scope — the pass targeted register-write verification), so
`effects.commands` remains empty for both code paths.

## Verification

**Verified** (2026-07-23) via disassemble → reassemble → trace-diff on 3 real
HVSC files tagged `NinjaTracker_V2.x` (all by Spider Jerusalem, the
dataset's dominant composer for this tag):

- `Cheesetro_Tune.sid` (load $1000, 2240-byte payload)
- `Final_Boss_Defeated.sid` (load $1000, 3695-byte payload)
- `Glitch4K.sid` (load $0d00, 2013-byte payload — a different load address,
  exercised to check the finding wasn't an artifact of one relocation base)

Method: `SIDdecompiler.exe -a<decimal load addr> -z -d -c -v2` (the `-v2`
map's own `Start:` address matched each file's PSID load address exactly on
all 3 — no leading-byte-drop or fixed-workspace relocation trap, gotcha 40),
reassembled with `64tass.exe`, byte-diffed against the pristine PSID payload,
then register-write traced (`sidm2-sid-trace.exe`, since the
`mcp__sidm2-siddump__*` MCP tools were not registered this session — raw
`.sid` bytes were never handed to the tracer directly; a proper 2-byte-header
`.prg` was built from each PSID payload first, per gotcha 22/46) at 200-800
frames each and diffed against the original file's own trace.

**Two real bugs found and fixed, both reproducible across all 3 files:**

1. **A `SIDdecompiler` disassembly bug, not a reassembly-methodology issue**:
   a `BEQ` whose real operand byte is `$80` (i.e. -128, the maximum backward
   branch) gets displayed with a label computed as if the offset were +128
   forward instead of correctly two's-complement-decoded as -128 backward —
   64tass then correctly rejects the resulting (genuinely too-far) forward
   branch with "branch too far by +1 bytes". Confirmed by reading the raw
   opcode bytes directly (`18 bd 5b 13 f0 80` = `clc / lda $135b,X / beq
   $80`) and recomputing the true backward target by hand. The true target
   in every file was the disassembly's own already-existing label a few
   instructions earlier in the same routine (itself printed with a
   cosmetic off-by-one — see gotcha 21 — but 64tass resolves by physical
   position, not name text, so retargeting the branch to that label's name
   produces the mechanically correct address regardless). Fixed by hand in
   all 3 `.asm` files (`beq l121a`/`beq l0f17` → `beq l111b`/`beq l0e18`
   etc., commented in place).
2. **Self-modified immediate-operand bytes, gotcha-43-class**: two `LDA
   #imm` instructions feeding the filter cutoff / `$d416`+`$d418` setup
   (`l107f`/`l108a`-equivalent in each file) are self-modifying targets
   (`sta l107f+1` etc.) that `SIDdecompiler`'s finite trace window captured
   mid-execution rather than at their true cold value. Confirmed by reading
   the pristine PSID payload bytes directly at those addresses: **$00** in
   all 3 files, vs. the disassembler's captured $04/$10/$0a/$20-style
   values. Patched to `lda #$00` in the 2 files where this code path was
   actually reached at disassembly time (`Final_Boss_Defeated.sid`,
   `Glitch4K.sid`); `Cheesetro_Tune.sid`'s own trace window never took this
   branch so `SIDdecompiler` emitted it as untouched `.byte` data, already
   holding the correct pristine value with nothing to patch.

**Byte-diff after both fixes** (reassembled `.prg` payload vs. original PSID
payload, full length, both files' own load address):

| File | Match | Diffs | Diff addresses |
|---|---|---|---|
| Cheesetro_Tune.sid | 97.86% (2192/2240) | 48 | `$1006`, `$111b`, `$111f`, `$135b-$1396` (working-storage table) |
| Final_Boss_Defeated.sid | 98.67% (3644/3695) | 49 | `$1006`, `$104b`, `$111b`, `$111f`, `$135b-$1395` (same table) |
| Glitch4K.sid | 97.52% (1963/2013) | 50 | `$d06`, `$d48`, `$e18`, `$e1c`, `$1058-$1094` (same table, relative offset) |

**Every one of those remaining bytes is confirmed dead** (self-modified
working storage that the decompiler's trace snapshot captured
post-execution, never the pristine cold value that's actually read) — not
by assumption, but by an actual trace-diff:

**Trace-diff result: register-write-exact on all 3 files.** `diff` between
each file's own original-PRG trace and its reassembled-PRG trace, 200 frames
(Cheesetro, Final_Boss_Defeated) and 800 frames (Final_Boss_Defeated re-run
longer, Glitch4K), showed **zero differing `frame,cycle,register,old,new`
lines** — the only diff in every case was the tracer's own cosmetic
startup `Mem[$xxxx]:` hex-dump preview line (which prints the raw
post-load byte at the self-modified `$1006`/`$d06` counter address, itself
one of the confirmed-dead bytes above; that specific byte was independently
tested as inert by leaving it unpatched and observing an identical trace).

This satisfies the project's verification bar (exact register-write match,
matching the constraint's "exact" tier, not just "near-exact") even though
the raw byte-diff sits at 97.5-98.7% rather than laxity-newplayer's ~99.9% —
every divergent byte is individually explained and shown dead by trace,
which is the substantive standard, not the byte-diff percentage on its own.
`status` is raised from `in-progress` to `verified` on that basis.

**What this confirms vs. what's still open**: the standalone tracker-exported
`.sid` player's ZP usage ($fe-$ff, not nt2play.s's $fc-$fd), init/play entry
convention (init=load, play=load+3), 1x speed, and the existence/rough
location of its per-channel workspace table are now real, disassembly-backed
facts (see `memory`/`entry`/`speed` above). What's still `TODO`: the exact
byte-level pattern/instrument/effect-command encoding (`data_format`,
`effects`) — out of scope for this verification pass, which targeted
register-write fidelity, not a full format walk. A future pass wanting the
effect-command table would start from the workspace-table addresses located
here.

Scratchpad artifacts (disassembly `.asm`/`.prg`/trace logs for all 3 files):
`scratchpad/ninjatracker/` in this session's temp directory.

## Sources

See the `sources` array in the JSON block — SIDId, the cached DeepSID player
spec (`data/players.json`), two CSDb release pages (v2.0 and v2.04), the
author's own site (version history + design philosophy pages), the
`nt2play.s` gamemusic playroutine source (read directly), and this project's
local composer-file aggregate for usage stats.

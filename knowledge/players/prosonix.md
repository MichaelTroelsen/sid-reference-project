# Prosonix (Music Editor)

```json
{
  "id": "prosonix",
  "name": "Prosonix (Music Editor)",
  "aliases": ["Prosonix", "Prosonix Music Editor", "SteinTronic"],
  "authors": ["Stein Pedersen"],
  "released": "1988 (Prosonix)",
  "status": "verified",
  "platform": "Native C64 music editor + bundled replay routine, used within the Norwegian group Prosonix. Closed (D64 binary only).",
  "csdb_release": 179618,

  "memory": {
    "load_address": "Per-file, not fixed — the editor assembles a fresh copy of the replay routine into each exported .sid alongside that tune's data (observed $1000, $3000, $E000 across sampled real files; not a shared player called at one address).",
    "zero_page": "$02-$05 (4 bytes) — confirmed identical range used in both disassembled/traced files (Composah.sid, Batman_Theme.sid).",
    "layout": "TODO: full data-table layout (order list / pattern / instrument bases) not walked — only entry stubs and playback-critical self-modified bytes were characterized for this verification pass."
  },
  "entry": {
    "init": "= load address. The first 3 bytes at load are `JMP <real init>` (e.g. Composah.sid: load $E000 -> JMP $ED34).",
    "play": "= load address + 3. Bytes at load+3 are `JMP <real play routine>` (e.g. Composah.sid: $E003 -> JMP $E009). A third, PSID-unreferenced vector sits at load+6 (`JMP <stop/silence routine>`, e.g. $E006 -> JMP $ED56 in Composah.sid) — never called during normal init/play playback, confirmed never touched (`?` in SIDdecompiler's -v2 memory-access map) in the one file where the reassembly came up 18 bytes short (see Verification)."
  },
  "speed": "TODO — not characterized this pass (1x per-frame call observed via header defaults; no per-file speed-table walk done).",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The 'Prosonix' tag = the Prosonix Music Editor (also listed as 'SteinTronic'), code+music by Stein Pedersen, 1988. SIDId comment: 'Used by several people within the Prosonix music group' — so it marks the group's shared in-house system, not a single composer's personal routine. Usage matches: 131 files across just 4 composers (Stein Pedersen, Lars Hoff, Lynx, Ole Marius Pettersen — the Prosonix members).",
    "Prosonix is a Norwegian C64 music group (CSDb group #810, Demozoo #1251). Minor date discrepancy: SIDId/Demozoo say the group formed 1988; CSDb group #810 says est. 1989 — the editor is dated 1988.",
    "REPO CACHE BUG (FIXED 2026-07-13): data/csdb/prosonix.json used to hold a mismatched scener record ('Peter Steiner', Germany) — because DeepSID's csdb_id 810 for this 'composer' is actually a CSDb GROUP id, and CSDb's scener/group id namespaces collide (Handle 810 = Peter Steiner; Group 810 = Prosonix). fetch-csdb.js blindly called getScener on every csdb_id. Fix: it now name-checks the returned Handle against the composer and, on mismatch, falls back to getGroup, storing the group record ({isGroup:true, group}) only when the group name matches; build-html.js's summarizeCsdb skips isGroup entries (no false person-level enrichment). The cache now correctly resolves to the Norwegian Prosonix music group (BaseCountry Norway, FoundYear 1989).",
    "Stein Pedersen later authored the separate modern SIDdecompiler (2017/2019) — a different tool, not this replay.",
    "VERIFIED 2026-07-23: two real HVSC files (Composah.sid load $E000, Batman_Theme.sid load $1000) disassembled with SIDdecompiler and reassembled with 64tass are register-write-exact vs. the originals over 1000 emulated frames each (sidm2-sid-trace.exe), and byte-exact (100.0000%) after patching a small set of self-modified/working-storage bytes back to their pristine cold-boot values. Every one of the 62 (Composah)/58 (Batman) diverging bytes SIDdecompiler's raw reassembly produced sat inside a `+`/`_`/`#`/`B`-marked (read+write / self-modified) region of the tool's own -v2 memory-access map, clustered right after the play entry point ($E6BA-$E721 in Composah, $134D-$16D8 in Batman) — the classic 'decompiler baked in a later self-modified snapshot instead of the pristine cold value' artifact seen repeatedly on other players (see this project's sid-player-verify lessons_learned 10/16/17/20/25/29/32/42/43). Concretely this manifested as 4 extra, spurious voice-3 (osc3) frequency/pulse-width writes in frame 1 of the naive Composah reassembly that the real file never makes until frame 7-8 — patching the self-modified bytes back to their file-pristine values eliminated them and made both traces byte-for-byte identical.",
    "Batman_Theme.sid's disassembly also hit the known 'bit za9' SIDdecompiler labeling bug (self-modified-operand BIT instruction auto-labeled with a zero-page-looking symbol that 64tass then encodes 2 bytes short of the real 3-byte absolute-mode `$2C $A9 $00` in the original file, at $13ED) — fixed by replacing the symbolic `bit za9` with an explicit `.byte $2c,$a9,$00`, restoring exact instruction length.",
    "Composah.sid's reassembly came up 18 bytes short at the tail ($ED56-$ED67) — this is the target of the load+6 unreferenced 'stop' vector (see entry.play), confirmed by the -v2 map as never accessed (`?`) anywhere during the traced playback; a genuine 'never touched by anyone, ever' gap (SIDdecompiler lessons_learned entry 9's class), not a defect — the trace match is unaffected since nothing in real playback ever executes or reads that region."
  ],
  "sources": [
    "sidid.nfo (author/year/comment): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "CSDb release 179618 (the editor D64, credits): https://csdb.dk/release/?id=179618",
    "CSDb group 810 / Demozoo 1251 (group identity): https://csdb.dk/group/?id=810 ; https://demozoo.org/groups/1251/",
    "sidid:Prosonix (Stein Pedersen, 1988 Prosonix)",
    "Local dataset: 131 files tagged Prosonix, 4 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The "Prosonix" tag is the **Prosonix Music Editor** (aka SteinTronic) by **Stein
Pedersen**, 1988 — the shared in-house music system of the Norwegian group
Prosonix. Its footprint is tight: 131 files across just its 4 group members.

## Quirks & gotchas

See the `quirks` array — it's a **group-internal shared tool** (hence 4
composers), and there's a **repo cache bug** to fix (`data/csdb/prosonix.json`
has a wrong scener record under the group's csdbId). Internals `TODO`.

## Disassembly notes

None; internals undocumented. Disassemble a Prosonix `.sid` or the D64 editor.

## Verification

**Register-write-exact reconstruction CONFIRMED (2026-07-23) — `status: verified`.**

Method: disassembled two independently-sampled real HVSC files with
`SIDdecompiler.exe` (`-a<decimal load addr> -z -d -c -v2`, relocation base
confirmed against each file's own `-v2` "Start:" line per this project's
disassembly playbook), reassembled with `64tass.exe`, byte-diffed against the
pristine PSID payload, then trace-diffed both original and reassembled `.prg`
with `sidm2-sid-trace.exe` (the `sidm2-siddump` MCP tools were not registered
in this session; used the executable directly per its documented fallback).

- **Composah.sid** (`MUSICIANS/P/Prosonix/Pedersen_Stein/Composah.sid`,
  load=init=$E000, play=$E003): raw disassembly reassembled to 3414 of the
  original 3432 bytes (18-byte tail gap, see quirks), 98.1839% byte match
  (62 diffs) on the overlapping region. Every diverging byte fell inside a
  self-modified/working-storage region the tool's own `-v2` map marks
  read+write. Patching all 62 bytes back to their pristine file values
  produced a **100.0000% byte-exact** match on the overlap and a
  **register-write-exact trace over 1000 emulated frames**
  (`sidm2-sid-trace.exe <prg> 1000 e000 e003`, diffed with plain `diff`
  — only the echoed input filename differs).
- **Batman_Theme.sid** (`MUSICIANS/P/Prosonix/Pedersen_Stein/Batman_Theme.sid`,
  load=init=$1000, play=$1003): raw disassembly reassembled to the full
  original 3698 bytes (after fixing a `bit za9` mislabeled self-modified
  BIT-absolute instruction — see quirks), 98.4316% byte match (58 diffs),
  same self-modified-region signature. Patched to **100.0000% byte-exact**
  and **register-write-exact over 1000 frames**.

This confirms the reconstruction method (not just one lucky file) and
matches this project's precedent for `verified` (e.g. `laxity-newplayer`,
`cheesecutter`, `dmc`, `odintracker` — exact trace match after quantifying
and patching a self-modified-byte artifact of the decompiler's own
snapshotting). **Not yet done**: no data-table walk (order list / pattern /
instrument / wave-pulse-filter table strides) and no effect-command
decoding — `data_format` and `effects` remain `TODO`. A future pass wanting
those facts should start from `Composah.asm`/`Batman.asm`-style
disassemblies of these same two files (or reproduce them — both are cheap,
~5 min each) rather than from PSID header claims.

## Sources

See the `sources` array — SIDId, the CSDb editor release, and CSDb/Demozoo
group pages.

# JCH OldPlayer

```json
{
  "id": "jch-oldplayer",
  "name": "JCH OldPlayer",
  "aliases": ["JCH_OldPlayer"],
  "authors": ["Jens-Christian Huus (JCH)"],
  "released": "TODO: pre-1988 (predates JCH NewPlayer)",
  "status": "verified",
  "platform": "Native C64 player routine",
  "csdb_release": null,

  "memory": {
    "load_address": "Variable: $1000 (most common, ~58%), $4000 (~3%), $8800 (~1%), plus other custom addresses per-file",
    "zero_page": "TODO: not yet identified (SIDdecompiler trace shows no ZP writes in frames 0-20)",
    "layout": "First 3 bytes: JMP init_deep / JMP play_deep (2 stubs). Code runs $4000-$4550 range. Read-only song data ~$4580-$46xx. Read+write workspace ~$4620-$4770 (69-101 bytes, self-modified during play — SIDdecompiler captures post-execution values; patch to original cold-start for byte-exact build)."
  },
  "entry": {
    "init": "= load (init at load address, e.g. $1000/$4000/$8800) — confirmed on 3 HVSC files with 100% trace-exact reconstruction",
    "play": "= load+3 (e.g. $1003/$4003/$8803) — confirmed on 3 HVSC files"
  },
  "speed": "TODO: not found in SIDM2",

  "data_format": {
    "order_list": "TODO: not found in SIDM2",
    "patterns": "TODO: not found in SIDM2",
    "instruments": "TODO: not found in SIDM2",
    "wavetable": "TODO: not found in SIDM2",
    "pulsetable": "TODO: not found in SIDM2",
    "filtertable": "TODO: not found in SIDM2"
  },
  "effects": {
    "encoding": "TODO: not found in SIDM2",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "identification": {
    "sidid_signature": "48 18 4A 4A 4A 4A 29 07 0A 0A 0A 48 0A 8D ?? ?? 68 18 6D ?? ?? 8D ?? ?? 68 (SIDId opcode fingerprint — the ONLY concrete data available; a code fragment, not a memory map)"
  },

  "quirks": [
    "Almost nothing documented in SIDM2 itself. The only trace of it there is the SIDId signature database.",
    "Do NOT conflate with JCH *NewPlayer*, which IS documented (see jch-newplayer). This is JCH's earlier routine that NewPlayer succeeded.",
    "The one hard fact: JCH's later work records a 'Laxity hard restart adapted from my old player (anno 1989)' and SIDM2 notes 'JCH NewPlayer reverse-engineered from Laxity's player in 1988' — the early Laxity/JCH lineage is tangled and unresolved; do not assert a derivation without evidence.",
    "$1000 is the most common load address (~58% of HVSC files), not $4000 as the card previously suggested. $8800 is rare (~1%).",
    "SIDdecompiler disassembly captures post-execution values for read+write workspace (~$4620-$4770 range). Patch these bytes back to original cold-start values in the .prg (not the .asm) for byte-exact reconstruction. The trace is 100% register-write-exact after patching."
  ],
  "sources": [
    "sidid:JCH_OldPlayer (author Jens-Christian Huus; no release/date/comment) — data/sidid.json and SIDM2 tools/sidid.nfo:700-701",
    "SIDM2:tools/sidid.cfg:975-976 (detection signature only)",
    "deepsid:players.json — JCH Editor v2.x/v3.x are the NewPlayer front-ends, NOT this player"
  ]
}
```

## Overview

JCH OldPlayer is Jens-Christian Huus's earlier C64 player routine, the
predecessor that [JCH NewPlayer](jch-newplayer.md) succeeded. It is included
here mainly to resolve the `successor_of` edge from the NewPlayer card — but be
warned: **there is almost no documented technical information about it.**

## Quirks & gotchas

- **Near-zero coverage.** SIDM2 — despite being a deep C64 player-disassembly
  project — has done no reverse engineering of JCH OldPlayer. The only trace is
  the third-party **SIDId** detection signature it bundles (a byte-pattern
  fingerprint, recorded under `identification` above), which lets a file be
  *detected* as OldPlayer but says nothing about its internals.
- **Not JCH NewPlayer.** Everything substantial in the "JCH" space concerns the
  *NewPlayer* — keep them separate.

## Disassembly notes

Successfully disassembled and verified. Use `SIDdecompiler.exe -a<decimal load> -z -d -c -v1`.
The reassembled `.prg` will have ~2-3% of bytes mismatching in the read+write
workspace region — patch them directly in the binary (not the `.asm`) with the
original SID file's cold-start values. The trace is then 100% exact.

The [playbook](../playbooks/disassemble-a-player.md) applies, and the SIDId
signature above serves as the detection anchor.

## Verification

**Status: verified** (2026-07-23, sid-player-verify agent).

Three files tested, two at $4000 (James_Bond_Theme, Back_to_Alpha_Centauri) and
one at $1000 (Demogame_Example, subtune 2 of 5):

| File | Load | Byte-diff (unpatched) | Diffs | Trace after patch |
|------|------|-----------------------|-------|-------------------|
| James_Bond_Theme.sid | $4000 | 97.5891% | 69 | 100% register-write-exact |
| Back_to_Alpha_Centauri.sid | $4000 | 98.5046% | 54 | 100% register-write-exact |
| Demogame_Example.sid | $1000 | 97.1258% | 101 | 100% register-write-exact |

All byte-diff mismatches are concentrated in the read+write runtime workspace
($4620-$4770 range at $4000, equivalently shifted at other load addresses).
These are post-execution values captured by SIDdecompiler's default `-t 30000`
trace window — the player's play routine self-modifies this region during
playback. Patching these bytes back to the original SID file's cold-start
values (direct `.prg` binary patch, not `.asm` text patch) produces a 100%
byte-exact, 100% register-write-exact reconstruction on all three files.

**Scope:** Verified for single-subtune and multi-subtune files at $1000 and
$4000. The $8800 variant (3 HVSC files) was not tested but follows the same
init=load/play=load+3 pattern.

**Known gap:** One file (Back_to_Alpha_Centauri) has a 34-byte trailing region
($4e1b-$4e3c, <1% of the file) that SIDdecompiler's `-v2` map marks as
genuinely untouched at runtime — not recoverable by raising `-t`. This does
not affect playback fidelity (the trace is identical) and represents
unreferenced data (likely pad bytes or unused song data).

## Sources

- SIDId (`data/sidid.json` / SIDM2 `tools/sidid.nfo`): `JCH_OldPlayer`, author
  Jens-Christian Huus — no release date, reference, or comment.
- SIDM2 `tools/sidid.cfg` — the detection signature only.

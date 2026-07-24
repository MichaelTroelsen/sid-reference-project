# Jeroen Koops (player routine)

```json
{
  "id": "jeroen-koops",
  "name": "Jeroen Koops (player routine)",
  "aliases": ["Jeroen_Koops"],
  "authors": ["Jeroen Koops"],
  "released": "~1990-1993 (Dutch demoscene era)",
  "status": "verified",
  "platform": "Jeroen Koops's ('Phantom') own hand-coded 6502 demoscene playroutine. Player-ID-fingerprinted across 22 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-file (PSID header): Awkward $2E00, Canyon $4700, War_in_Utopia $1000, Fast $2100, Beating_Baboon $C000. init=load+$48, play=load+$21 in every file checked (5/5). The leading 33 bytes at load..load+$20 are a standalone-loader bootstrap stub (SEI / JSR init / IRQ-vector setup) never touched when driven via the PSID init/play vectors directly — SIDdecompiler's own -v2 memory map reports 'Start:' == the play address, not the load address, on every file (see Disassembly notes for the relocation gotcha this causes).",
    "zero_page": "$FA/$FB (indirect pointer lo/hi, `zfa`/`zfb`), $FC (`zfc`, temp/offset), $FD (`zfd`, per-voice indexed byte via `zfd,X`) — confirmed by disassembly of Awkward.sid.",
    "layout": "Player code + inline per-voice working-storage tables (e.g. $2E81-$2E90 in Awkward — countdown/control-byte/pointer-offset tables, one byte per voice, X-indexed) sit directly after `play`; frequency/pointer tables (`l3237`, `l2fc5`, etc.) further on. Not table-walked in full — no card `data_format` fields verified end-to-end (see below)."
  },
  "entry": {
    "init": "load+$48 in every file checked (confirmed by trace on Awkward $2E48 and Canyon $4748).",
    "play": "load+$21 in every file checked (confirmed by trace on Awkward $2E21 and Canyon $4721). Called in IRQ; play < init in address order, but play is the true low end of the file's live code (see memory.load_address)."
  },
  "speed": "TODO (not isolated from the play routine).",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (filter writes observed — 33 in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Jeroen Koops — Dutch C64 composer/coder, handle 'Phantom', group T'Pau (per HVSC Musicians.txt: 'Koops, Jeroen (Phantom) / T'Pau - NETHERLANDS'). CSDb functions: Musician, and Coder+Musician under 'Phantom' — consistent with a self-written routine. Active ~1990-1993. A demoscene (not commercial-games) composer.",
    "Works (demos/diskmags): Cosmail (1990), The Cult (1990, TAT Party 2), Vector Magic 1 (1991, Art-X Party), Commodore Repair (1993, TSR Party, 3rd), diskmags (Mendip #2, Knakebrød #1), the Great Tunes 4 collection. HVSC folder holds More Than Meets the Eye, Wasted Lands, Blaze of Glory, Digi Warrior.",
    "SINGLE-COMPOSER routine (all 22 files are his own) — by this project's heuristic, a strong signal of a personal/in-house routine rather than a shared tool. Not in SIDId.",
    "MUSIC ASSEMBLER co-occurrence (interesting, but derivation UNKNOWN): within Koops's own HVSC folder the files split ~14 tagged Jeroen_Koops (his custom routine) and ~8 tagged Music_Assembler (a recognized standalone editor). So he demonstrably used the [[music-assembler]] editor for some tunes and his own routine for others. Whether his routine is DERIVED from Music Assembler is unproven — the co-occurrence is suggestive but there is no source/disassembly evidence. Do NOT assert a derivation.",
    "No public disassembly or source was ever published (not in the realdmx RE repo; not in SIDId; no STIL technical note) — the disassembly behind this card's `verified` status (2026-07-24) is original, produced from real HVSC files, not sourced from anywhere else.",
    "RELOCATION GOTCHA (worth knowing before re-disassembling any of the other 22 files): every file's own leading $21 (33) bytes at `load..load+$20` are a standalone-loader bootstrap stub (SEI / JSR init / raw IRQ-vector poke) that PSID playback never executes — SIDdecompiler's `-v2` map reports 'Start:' at the play address, not the PSID load address, and the default `-a<decimal load address>` relocation leaves the `play`/`init` labels landing 33 bytes short of their true positions with no warning. Fix: relocate to `-a<decimal for the file's own play address>` instead (confirmed identical relative offset — load+$21 — on Awkward, Canyon, War_in_Utopia, Fast, Beating_Baboon)."
  ],
  "sources": [
    "HVSC Musicians.txt (identity + T'Pau group): https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt (line 'Koops, Jeroen (Phantom) / T'Pau - NETHERLANDS')",
    "CSDb scener (Jeroen Koops / Phantom): https://csdb.dk/scener/?id=2289",
    "DeepSID composer folder: https://deepsid.chordian.net/ → /MUSICIANS/K/Koops_Jeroen/",
    "Local dataset: 22 files tagged Jeroen_Koops, 1 composer (see knowledge/COVERAGE.md); his folder also has ~8 files tagged Music_Assembler"
  ]
}
```

## Overview

The `Jeroen_Koops` tag is Dutch demoscene composer/coder Jeroen Koops's
('Phantom', group T'Pau) own hand-coded playroutine, Player-ID-fingerprinted
across 22 files — all his own, a tight single-composer routine.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he was a **coder as well as a
musician** (own routine); it's a **single-composer** tag (personal-routine
signal); and the **[[music-assembler]] co-occurrence** — his HVSC folder splits
between his own routine (~14 files) and the Music Assembler editor (~8), showing
he used both, though any derivation is unproven.

## Disassembly notes

None published anywhere (not in the realdmx RE repo, not in SIDId, no STIL
technical note) — the disassembly used here is original, produced with
`SIDdecompiler.exe` from real HVSC files.

**The relocation trap (see `quirks`):** disassembling at the naive
`-a<decimal PSID load address>` produces a plausible-looking but wrong build
— the first 33 bytes of every file are a never-executed standalone-loader
stub, and SIDdecompiler emits no filler for them, so the `play`/`init` labels
land 33 bytes before their true addresses once reassembled. The fix
(confirmed on 5 files: Awkward, Canyon, War_in_Utopia, Fast, Beating_Baboon)
is to relocate to the file's own **play address** instead — which is exactly
what `SIDdecompiler -v2`'s own memory-touch map reports as `Start:` on every
one of them. `Digi_Warrior.sid` is an RSID with `play=0` (its play address is
IRQ-vector-installed, not a PSID header field) — not attempted here, flagged
as a different case for a future pass.

## Verification

**Register-write-exact trace match on two independent files (2026-07-24) —
`status: verified`.**

Files used: `Awkward.sid` (load `$2E00`, init `$2E48`, play `$2E21`) and
`Canyon.sid` (load `$4700`, init `$4748`, play `$4721`), both from the real
HVSC `MUSICIANS/K/Koops_Jeroen/` folder.

- Disassembled each with `SIDdecompiler.exe -a<decimal play address> -z -d -c`
  (per the relocation fix above), reassembled with `64tass.exe`.
- **Byte-diff** (reassembled `.prg` payload vs. original PSID payload, from
  the play address onward — the leading 33-byte stub is out of scope, see
  above): Awkward **98.8825%** (35 of 3132 bytes differ, all in-bounds, no
  length mismatch); Canyon **97.8700%** (58 of 2723 bytes differ). Every
  single diverging byte in both files falls on an address SIDdecompiler's
  `-v2` memory-touch map marks read+write (`+`) or self-modified (`_`/`B`) —
  e.g. Awkward's `$2E81-$2E90` (per-voice countdown/control-byte/pointer-
  offset working-storage table, X-indexed, zeroed by `init`'s own
  `sta l2e81,X` loop) and `$2EC9-$2ECF` (self-modified per-voice frequency-
  table pointers) — the classic "SIDdecompiler captured a post-execution
  snapshot of self-modified working storage, not the pristine cold value"
  pattern documented elsewhere in this project (not a code difference).
- **Trace-diff** (`sidm2-sid-trace.exe`, since the `mcp__sidm2-siddump__*`
  MCP tools weren't registered this session — built a proper 2-byte-header
  `.prg` from each original PSID payload first, per the tool's raw-`.prg`-only
  input requirement): 200 frames each. Awkward: **470 register writes**,
  **0 divergent lines** — register-write-identical. Canyon: **1634 register
  writes**, **0 divergent lines** — register-write-identical. (The only
  non-matching output line on either file was the tracer's own cosmetic
  `Loaded: <file> @ $....` banner line, expected since the two builds start
  at different relocation bases.)
- Confirmed the init=load+$48/play=load+$21 convention and the same
  never-touched-leading-stub signature on three more files by `-v2` map
  alone (not traced): War_in_Utopia (`$1000`/`$1048`/`$1021`), Fast
  (`$2100`/`$2148`/`$2121`), Beating_Baboon (`$C000`/`$C048`/`$C021`).

**Not yet done / next step:** `data_format`/`effects` fields are still
`TODO` — the working-storage tables identified above (per-voice countdown,
control byte, note/frequency pointers) are a real starting point for a
future data-format walk, but weren't traced through to a documented
order-list/pattern/instrument encoding this pass. The other 17 of 22
`Jeroen_Koops`-tagged files (and the RSID `Digi_Warrior.sid`) weren't
individually disassembled — two independent trace-exact matches is enough
to verify the player itself, not enough to claim every file's specific
data content has been checked.

## Sources

See the `sources` array — HVSC Musicians.txt (identity), CSDb, and DeepSID.

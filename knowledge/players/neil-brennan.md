# Neil Brennan (player routine)

```json
{
  "id": "neil-brennan",
  "name": "Neil Brennan (player routine)",
  "aliases": ["Neil_Brennan"],
  "authors": ["Neil Brennan"],
  "released": "~1985-1989 (Beam Software / Melbourne House era)",
  "status": "verified",
  "platform": "Neil Brennan's own hand-coded 6502 sound module/music language, written in-house at Beam Software (Melbourne House). Player-ID-fingerprinted across 21 files, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Relocatable, not fixed — varies per file/game (e.g. Doc_the_Destroyer $6300, Zim_Sala_Bim $c000; the 21 files range from $0400 to $ee00). SIDdecompiler's -v2 memory-touch map's own Start: address matched each file's PSID-header load address exactly on both files disassembled (no gotcha-40 offset in either case).",
    "zero_page": "A small, contiguous 7-byte scratch block, but at a DIFFERENT fixed address per file/build — $F9-$FF in Doc_the_Destroyer.sid, $E0-$E6 in Zim_Sala_Bim.sid. Consistent shape (7 bytes), inconsistent location; treat any specific ZP address as file-specific, not a player-wide constant.",
    "layout": "A per-voice/per-subtune working-storage table sits immediately after the code that indexes it (e.g. Doc_the_Destroyer: $6332-$63d3, right after init at $6303; Zim_Sala_Bim: $c4e8 onward) — read via `lda table,X`, shifted via `asl table,X`, and written back via `sta table,X`. This is genuine runtime working storage the code self-modifies every play call — see Verification for why this matters for reconstruction, not just static reading."
  },
  "entry": {
    "init": "Sample traces: Doc_the_Destroyer $6303, Zim_Sala_Bim $cd09 — both = load+3, a normal PSID convention.",
    "play": "play == load holds on both files fully verified (Doc_the_Destroyer $6300, Zim_Sala_Bim $c000) — i.e. play is the routine's true entry point, no wrapper. NOT universal across all 21 files, though: the raw PSID headers show play != load on several (Bop_n_Rumble, Castle_of_Terror, Fist_II, Jr_Pac-Man, Judge_Dredd, Mugsys_Revenge, Sherlock, Super_Pac-Man), and Way_of_the_Exploding_Fist declares play=$0000 (IRQ-vector-driven, no polled play address at all) — per-game wrapper/build differences not yet individually verified."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (heavy filter modulation observed — 104 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Neil Brennan was a CODER as well as a musician — per a Remix64 interview he personally wrote 'the 6502 assembly sound module and music language for the C64 synth', an in-house sequencer/synth used across Beam Software's C64 and NES titles. His BSc Computer Science (University of Melbourne, 1987) let him move from 'just the house musician' into a programming role. This corroborates the strong single-composer signal (all 21 files are his own) and the filter-heavy trace: this is very likely a genuinely self-authored routine, not a borrowed tool.",
    "STUDIO: Beam Software (developer) / Melbourne House (publisher) — same parent, Beam International, Melbourne, Australia. He was Beam's first dedicated audio person; left in 1988. Games: Way of the Exploding Fist, Castle of Terror, Doc the Destroyer (1987), Defender of the Crown (NES port), 720°, Samurai Warrior: The Battles of Usagi Yojimbo — ~40 titles across Spectrum/C64/NES, 1982-1989.",
    "METADATA MESSINESS (two separate discrepancies, both left unresolved — evidence of a self-taught routine that predates formal 'player' cataloguing, not a data error to fix): (1) HVSC Musicians.txt lists his country as UNITED KINGDOM (ENGLAND), while his CSDb scener profile lists AUSTRALIA — genuinely conflicting sources (he was born in Tanzania, raised in Australia from age 4, held British/Australian citizenship — plausibly the source of the split). (2) His CSDb profile's trivia line notes his music was 'for a long time miscredited to Greg Holland' (unverified beyond that one CSDb note).",
    "CSDb function is listed only as 'Musician' on his scener page, despite his own interview account of writing the assembly sound engine — a discrepancy between CSDb's role tagging and his own account of the work.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — 0 'Brennan' matches). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — no shared studio or documented connection; Brennan namechecks Hubbard/Galway/Daglish in interview as composers he admired, not as collaborators).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). Runtime internals now partially resolved via an original disassembly (see Verification) — data-table walk/effect-encoding still TODO.",
    "DISASSEMBLY GOTCHA (drifted working-storage table, same class documented elsewhere in this KB, e.g. cheesecutter/dmc/digitalizer): SIDdecompiler's default -t 30000 bakes the post-execution (end-of-trace) RAM value of a per-voice working-storage table into the emitted .byte data, not the file's pristine cold-start value. On Doc_the_Destroyer.sid this drift was fully dead (byte-diff 97.77% unpatched, but the trace was already register-write-exact — only a small growing cycle-count drift — closing to 100.0000% byte-exact AND cycle-exact once the 67 diverging bytes were patched). On Zim_Sala_Bim.sid the SAME class of drift was NOT dead: it directly corrupted the very first SID register write of every subtune (subtune 0's osc3_freq_lo: real file writes $70, unpatched reassembly wrote $F0), cascading into ~189/192 mismatched writes. Patching all 65 diverging bytes in the reassembled .prg back to the original file's own pristine bytes closed all 5 subtunes to 0 register-write mismatches. Confirms the project's established finding that a write-touched byte-diff cluster must be verified per-file by an actual trace, never assumed dead from one file's result alone."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Brennan, Neil — UNITED KINGDOM (ENGLAND)')",
    "CSDb scener (Neil Brennan, id=9635): https://csdb.dk/scener/?id=9635",
    "Remix64 interview (coder claim, Beam Software role, departure year): https://remix64.com/interviews/an-interview-with-neil-brennan.html",
    "VGMPF biography (birth, education, game list): https://www.vgmpf.com/Wiki/index.php/Neil_Brennan",
    "Lemon64 — Doc the Destroyer: https://www.lemon64.com/game/doc-the-destroyer",
    "Local dataset: 21 files tagged Neil_Brennan, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Neil_Brennan` tag is Australian/British composer-coder Neil Brennan's own
in-house sound module, written while he was Beam Software's (Melbourne House)
first dedicated audio programmer. Player-ID-fingerprinted across 21 files,
all his own — a tight single-composer routine, and one with real evidence
(his own interview account) that he coded it himself rather than using a
third-party tool.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: he's a **confirmed coder**,
not just a musician, per his own Remix64 interview account of writing the
6502 sound engine; the **Beam Software / Melbourne House studio** context
(same routine across ~40 Spectrum/C64/NES titles); and **two separate,
unresolved metadata discrepancies** (HVSC says UK, CSDb says Australia; a
CSDb trivia note about historical miscrediting) that are left as documented
tension rather than "fixed" — both sources are legitimate.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId) — this card's
disassembly is original work (2026-07-24), done via `SIDdecompiler.exe` +
`64tass.exe` against two real HVSC files, byte-diffed and trace-diffed
against the originals per `knowledge/playbooks/disassemble-a-player.md`. See
Verification below for the full methodology and results, and the `quirks`
array's "DISASSEMBLY GOTCHA" entry for the one real defect found and fixed
(a drifted working-storage table, `SIDdecompiler`'s own artifact, not a real
difference in the player).

## Verification

**Register-write-exact trace match confirmed (2026-07-24) — `status: verified`.**

Two real HVSC `Neil_Brennan`-tagged files, disassembled independently
(`SIDdecompiler.exe -a<decimal load> -z -d -c -v2`, no `-e`), reassembled
(`64tass.exe -a --cbm-prg`), byte-diffed against the pristine PSID payload,
and trace-diffed (`sidm2-sid-trace.exe`) against the original file:

- **`Doc_the_Destroyer.sid`** (load `$6300`, init `$6303`, play `$6300`,
  1 subtune, payload 3004 bytes). Reassembly was exactly 3004 bytes
  ($6300-$6EBB, matching the `-v2` map's own Start/End exactly — no
  relocation-offset issue). Unpatched byte-diff: **97.7696%** (67/3004
  bytes differ), every diverging byte a `-v2`-map `+`/`w` (self-modified
  working-storage) address, all clustered in `$6332-$63D3` (a per-voice
  state table read/written via `lda/sta table,X` right after `init`) plus
  a handful of isolated bytes at `$67F1`/`$69FB-$6A06`. Trace-diff (50
  frames, subtune 0, 388 register writes): **register+value+order already
  100% exact even unpatched** — the only divergence was a small, growing
  cycle-count drift (0 to ~48 cycles out of ~68,000 total by frame 49,
  ~0.07%), i.e. the drifted bytes were dead for logic/output but shifted a
  few instruction-timing cycles. Patching all 67 diverging bytes back to
  the file's own pristine values (read directly from the original payload,
  not guessed) closed this to **100.0000% byte-exact** and **0 cycle
  differences** — a full, exact match, not just "close."
- **`Zim_Sala_Bim.sid`** (load `$c000`, init `$cd09`, play `$c000`, 5
  subtunes, payload 3359 bytes). Reassembly was 3357 bytes — 2 bytes short
  at the very tail (`$CD1D-$CD1E`, real bytes `$07 $FF`), matching the
  `-v2` map's own reported End ($CD1C) exactly: a small, genuinely
  unreferenced tail the emulated trace never touches (same class as
  `future-composer`'s trailing-data gap), not a relocation error. Unpatched
  byte-diff over the 3357-byte overlap: **98.0637%** (65 bytes differ),
  same `+`/`w` self-modified-table signature as Doc_the_Destroyer, this
  time clustered `$C4E9-$C5C4`. Unlike Doc_the_Destroyer, **this drift was
  NOT dead**: unpatched trace-diff across all 5 subtunes showed real
  corruption from the very first register write (subtune 0's
  `osc3_freq_lo`: real file writes `$70`, unpatched reassembly wrote
  `$F0`), cascading to ~189/192 mismatched writes on subtune 0 alone (and
  proportionally on subtunes 1-4). Patching the 65 diverging bytes back to
  the file's pristine values closed **all 5 subtunes to 0 register-write
  mismatches** (191/191, 185/185, 42/42, 99/99, 166/166 writes exact).
  The 2-byte unreconstructed tail is confirmed harmless: it's outside every
  code path exercised across all 5 subtunes' full traces.

**Net result**: both real files reach a register-write-exact trace match
once the one identified `SIDdecompiler` artifact (drifted working-storage
snapshot, not a real player difference) is corrected — the same
methodology and precedent as this KB's `cheesecutter` card. This is a
genuine, cited, register-write match, not a "plays and sounds right"
approximation. `data_format`/`effects.encoding` remain `TODO` — this pass
verified execution fidelity (entry points, memory layout, ZP, and the one
resolved reconstruction defect), not a full data-table/effect walk; a
future pass could extend into those per the playbook's steps 4-5 using the
now-working disassemblies as a starting point (`Doc.asm`/`Zim.asm` in this
session's scratchpad, not committed to the repo).

## Sources

See the `sources` array — HVSC Musicians.txt, CSDb, the Remix64 interview
(coder claim), VGMPF (biography), and Lemon64.

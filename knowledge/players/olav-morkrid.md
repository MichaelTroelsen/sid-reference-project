# Olav Mørkrid (player routine)

```json
{
  "id": "olav-morkrid",
  "name": "Olav Mørkrid (player routine)",
  "aliases": ["Olav_Moerkrid"],
  "authors": ["Olav Mørkrid"],
  "released": "~1988-1992 (Norwegian C64 scene era)",
  "status": "in-progress",
  "platform": "Olav Mørkrid's own hand-coded 6502 playroutine, used across the Norwegian Panoramic Designs scene. Player-ID-fingerprinted across 39 files.",
  "csdb_release": null,

  "memory": {
    "load_address": "Relocatable: observed at $1000 (Clouds.sid, Animal_II_tune_03), $0b5a (20CC-Shit), $0b56 (Final_Symphony). Some songs use low-RAM workspace below the load address (e.g., Animal_II_tune_03: workspace $0334-$03A4, code/data at $1000+).",
    "zero_page": "$fc-$ff (indirect-addressing pointer for pattern data).",
    "layout": "Init/play vectors vary per file (init=load/load+3, play=load+3/load+6). Init routine clears SID regs, zeros workspace ($033C-$03A4), copies 8-byte song init table. Play routine reads pattern data via ($fc) pointer; heavy filter modulation."
  },
  "entry": {
    "init": "Variable per file; two observed conventions: init=load (Clouds, 20CC-Shit) or init=load+3 (Animal_II_tune_03).",
    "play": "Variable per file: play=load+3 (Clouds, 20CC-Shit) or play=load+6 (Animal_II_tune_03). Called in IRQ."
  },
  "speed": "TODO.",

  "data_format": {
    "order_list": "TODO", "patterns": "TODO", "instruments": "TODO",
    "wavetable": "TODO", "pulsetable": "TODO",
    "filtertable": "TODO (heavy filter modulation observed — 54 filter writes in the 50-frame sample)"
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "Olav Mørkrid — Norwegian coder/musician/graphician (handles Omega Supreme, Rawhead, The Disk Ripper). Groups: The Shadows → Panoramic Designs. Active C64 ~1986-1992; later co-founded Funcom (1993) and was a UI designer on the Opera browser. A genuine coder — he authored the Digitalizer editor and other music tools (Demozoo lists 'Blues Muz' Player V1.0' 1994, 'Earwax Music V2.05' 1993).",
    "WHY THE TAG IS MOSTLY-ROKLING (not Mørkrid): the 39 files split Henning Rokling (31) / Mørkrid (3) / Richard Nygaard (3) / Muz Blues (2). Rokling is a pure MUSICIAN (CSDb ~82% musician, 0% coder), same group lineage (The Shadows → Panoramic Designs) and later a Funcom colleague. The firm reading: Mørkrid (the coder) WROTE the routine; his fellow Panoramic musicians USED it (Rokling most heavily; for Muz Blues he literally released a 'Blues Muz' Player'). The tag is named after the routine's AUTHOR, not its heaviest user.",
    "RELATIONSHIP TO THE DIGITALIZER EDITOR — DISTINCT, not the same tag. Digitalizer is a separate tag with its own SIDId byte-signatures (V2.x 1989 / V3.0 1992, 656 files, IN SIDId); 'Olav_Moerkrid' is a personal-routine tag NOT in SIDId. Whether this routine is technically ancestral to / shares replay code with the Digitalizer editor is UNKNOWN (neither is disassembled). This card stands alone; see the [[digitalizer]] card for the editor (same author).",
    "SAME-AUTHOR CLUSTER: Mørkrid has three separately-carded routines/tools here — this personal playroutine, the [[digitalizer]] editor, and [[omegasupreme-digi]] (his digi/sample routine, tag OmegaSupreme_Digi, byte-signature-confirmed as a genuine 4-bit-via-$D418 digi player and DISTINCT from Digitalizer). No `shares_routine_with` edge links any of the three: they are one coder's separate works, connected at the author level, not proven to share code (this routine isn't in SIDId/sidid.cfg, so it can't even be signature-compared to the other two). Noted after a composer-overlap connection scan flagged the Mørkrid cards.",
    "TOOLING influence: in the Recollection #2 interview Mørkrid credits Stein Pedersen (Prosonix/Panoramic) as the upstream inspiration for his editor work ('Stein deserves the true credit for making the first and best music editors') — stated of his editors generally, not specifically this tag.",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId). All runtime internals TODO.",
    "DISASSEMBLY CONFIRMED (2026-07-23): re-disassembled, reassembled, and trace-diffed on two files. The player is relocatable with variable load addresses and entry-point conventions. Some songs use low-RAM workspace ($0334-$03A4 observed) below the code load address — SIDdecompiler's `-v2` Start address must be used for relocation, not the PSID load address. Self-modified instruction operands in the play routine (`_`/`#`-marked in `-v2` map) are load-bearing and need patching back to cold-start values; song-data workspace (`+`-marked) is dead (init overwrites before read)."
  ],
  "sources": [
    "CSDb scener — Olav Mørkrid: https://csdb.dk/scener/?id=8158 ; Henning Rokling: https://csdb.dk/scener/?id=16851",
    "Demozoo — Olav Mørkrid (lists his authored players): https://demozoo.org/sceners/1261/ ; Panoramic Designs group: https://demozoo.org/groups/1250/",
    "Recollection #2 interview (Stein Pedersen credit; Funcom/Rokling; active years): https://www.atlantis-prophecy.org/recollection/?load=interviews&id_interview=129",
    "Existing KB card: knowledge/players/digitalizer.md (the editor, same author)",
    "Local dataset: 39 files tagged Olav_Moerkrid, 4 composers (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Olav_Moerkrid` tag is Norwegian coder Olav Mørkrid's own hand-coded
playroutine, used across the Panoramic Designs scene. Notably, it is
Player-ID-fingerprinted across 39 files but used **more by Henning Rokling
(31) than by Mørkrid himself (3)** — a clean example of the coder-writes-routine,
musician-friend-uses-it pattern.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **mostly-Rokling usage**
(Mørkrid coded it, his Panoramic bandmates used it); the **distinction from the
[[digitalizer]] editor** (same author, but a separate tag — Digitalizer is in
SIDId, this personal routine isn't); and the **Stein Pedersen** ([[prosonix]])
tooling influence on Mørkrid's editor work.

## Disassembly notes

None published (not in the realdmx RE repo, not in SIDId). A future `verified`
needs an original disassembly of a `.sid` + trace.

## Verification

**Disassembled, reassembled, and trace-diffed on two files (2026-07-23) — `status: in-progress` (99.9% byte-exact on code region, trace-exact on both files, not yet at 100.0000% byte parity without per-file patches).**

### File 1: Clouds.sid (Henning Rokling, load=$1000, init=$1000, play=$1003)
- `SIDdecompiler -v2` Start: $1000 (matches PSID load — no relocation needed)
- Byte-diff: **97.35%** (2280/2342 bytes, 62 diffs). All 62 diffs are in ranges the
  `-v2` map marks as write-touched: `$1009-$106A` (song-data init workspace, `+`-marked,
  58 diffs) plus 4 isolated self-modified operand bytes (`_`-marked at `$136d`, `$1375`,
  `$13cb`, `$13d0`).
- **Trace-diff: EXACT** (135 register writes over 20 frames, zero diffs beyond the
  filename header). All 62 byte diffs are dead — init overwrites the workspace before
  any value is read.

### File 2: Animal_II_tune_03.sid (Olav Mørkrid, load=$1000, init=$1003, play=$1006)
- `SIDdecompiler -v2` Start: **$0334** (does NOT match PSID load — this song uses
  low-RAM workspace below the load address). Relocating to `$0334` is required
  (gotcha 40).
- Before patching: trace diverges (first `filter_freq_hi` write: `$10` vs `$91`).
- Root cause: **3 self-modified instruction operand bytes** in the play routine at
  `$1459` (`ora` operand, orig=`$02`→snapshot=`$92`), `$1471` (`lda` operand,
  orig=`$20`→snapshot=`$92`), and `$1474` (`adc` operand, orig=`$f0`→snapshot=`$ff`).
  SIDdecompiler captured their post-execution values; init/play modify these at
  runtime, and the cold-start values differ from the snapshot.
- After patching those 3 bytes: **trace-diff: EXACT** (57 register writes over 20
  frames, zero diffs beyond the filename header).
- $1000+ region byte-diff after patching: **100%** (2958/2958).

### Methodology summary
1. Always check `SIDdecompiler -v2` Start against PSID load — this player uses
   low-RAM workspace per-song, and some files need relocation to the Start address.
2. Self-modified operand bytes marked `_`/`#` in the `-v2` map may be load-bearing
   (3 of ~5 on Animal_II_tune_03 were). Patch them back to the original cold-start
   values from the real .sid payload.
3. A patching script that iterates over all `_`/`#`-marked diff bytes would close
   this to 100.0000% byte parity — the 3 bytes on Animal_II_tune_03 confirm the
   approach; the remaining ~59 diffs on Clouds.sid are already dead so a blind
   script would be harmless.

## Sources

See the `sources` array — CSDb (Mørkrid + Rokling), Demozoo, the Recollection
interview, and the [[digitalizer]] card (same author's editor).

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
    "load_address": "Sample HVSC file traced (Animal II tune 03): load $1000 (init $1003, play $1006).",
    "zero_page": "TODO (no disassembly)",
    "layout": "Not documented."
  },
  "entry": {
    "init": "Sample trace: $1003.",
    "play": "Sample trace: $1006 (called in IRQ). Filter-heavy output (54 filter writes / 50 frames in the sample)."
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
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId). All runtime internals TODO."
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

**Playback + entry points confirmed (2026-07-13) — `status: in-progress`.**
Traced a real HVSC `Olav_Moerkrid` `.sid` (Animal II tune 03): load `$1000`,
init `$1003`, play `$1006`, **60 register writes / 50 frames** with heavy filter
modulation (54 filter writes). Internals undocumented; memory map/format/effects
are `TODO`.

## Sources

See the `sources` array — CSDb (Mørkrid + Rokling), Demozoo, the Recollection
interview, and the [[digitalizer]] card (same author's editor).

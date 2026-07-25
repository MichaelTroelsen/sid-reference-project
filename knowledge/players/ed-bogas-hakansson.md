# Ed Bogas (Hakansson driver)

```json
{
  "id": "ed-bogas-hakansson",
  "name": "Ed Bogas (Hakansson driver)",
  "aliases": ["Ed_Bogas/Hakansson"],
  "authors": ["Ed Bogas"],
  "released": "1984 (Joyce Hakansson Associates era)",
  "status": "verified",
  "platform": "The SECOND of at least four distinct, employer-specific C64 sound drivers composer Ed Bogas used across his career (driver #1, for Accolade, is already carded in this KB as [[ed-bogas-accolade]]; see that card's own VGMPF citation naming all four). This one is for his work 'at Joyce Hakansson Associates and on Beanstalk', per VGMPF's exact phrasing. Joyce Hakansson Associates (JHA) was a Berkeley, California educational-software studio. Player-ID-fingerprinted across 5 files, all by Bogas, matching exactly the intersection of his own credits and JHA's published catalog.",
  "csdb_release": null,

  "memory": { "load_address": "Sample HVSC file disassembled+reassembled (Aegean Voyage, 1984, Spinnaker/JHA): load $b320 (init $b600, play $b620). Player also keeps a fixed low-RAM working-storage block at $0404-approx $0453 (used by SIDdecompiler's own emulated-access map as the -v2 'Start:' address, well below the file's own load address — see gotcha 40/lesson 31/38 pattern) — this block is NOT part of the PSID file's own payload (it's zeroed/populated at runtime), so it plays no role in the byte-diff.", "zero_page": "$0c-$19 used (z0c..z19 chain, 14 bytes) per SIDdecompiler's own zero-page usage in the reassembled disassembly.", "layout": "Code+data $b320-$b9de (1727 bytes, matches PSID payload exactly)." },
  "entry": { "init": "$b600, confirmed by trace-diff-exact reassembly (Aegean Voyage).", "play": "$b620 (called in IRQ), confirmed by trace-diff-exact reassembly (Aegean Voyage)." },
  "speed": "TODO.",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO (no filter writes observed in the 50-frame sparse sample)" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "JOYCE HAKANSSON ASSOCIATES (JHA), CONFIRMED: a Berkeley, California educational-software studio founded ~1982 by Joyce Hakansson (d. 2016), building 'low-threshold' children's software with a team of programmers, artists, musicians, writers, and educators. Titles published through Spinnaker Software, CBS Software, and others.",
    "GAME LIST MATCHES EXACTLY, a strong cross-source confirmation: cross-referencing Lemon64's own Ed Bogas credit list against Lemon64's own JHA company catalog gives exactly 5 overlapping games, matching this tag's file count precisely — Aegean Voyage (1984, Spinnaker, the traced file, a sailing/logic educational game), ALF in the Color Caves (1984, Spinnaker — explicitly NOT related to the ALF TV sitcom despite the name, a prediction/routing/cause-effect maze game), Beanstalk (1984 — see caveat below), Ducks Ahoy! (1984, CBS Software, a non-violent gondola/duck-rescue game), and Seahorses/Seahorse Hide 'n Seek (1984, CBS Software, a hide-and-seek/camouflage game).",
    "A REAL, UNRESOLVED CAVEAT on 'Beanstalk' specifically: unlike the other four titles (all Spinnaker/CBS/JHA), Lemon64 lists Beanstalk's developer as 'AFFA' and publisher as 'Reston Publishing Company' — NOT Joyce Hakansson Associates, Spinnaker, or CBS. Whether Beanstalk genuinely shares this same driver (as VGMPF's phrasing implies by naming it alongside JHA) or whether VGMPF is loosely grouping two separate things together is left explicitly unresolved, not asserted as settled.",
    "A SIXTH POSSIBLE TITLE, 'Juke Box' (1984, Spinnaker/JHA), is credited to Bogas per general search results but did NOT appear on Lemon64's own individual credit list for him — flagged as a source discrepancy, not confirmed as part of this driver's file set.",
    "NO TECHNICAL DOCUMENTATION found distinguishing this driver, at the code level, from Bogas's already-carded Accolade driver or his Music Studio work — the VGMPF grouping is purely 'same author, same era, different employer', not a sourced code-level finding.",
    "No known relationship found to any other composer/tool already in this KB beyond Bogas's own other carded credits ([[ed-bogas-accolade]], [[music-studio]], [[russell-lieblich-driver]]) — checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel — none found."
  ],
  "sources": [
    "VGMPF — Ed Bogas (the 'four known drivers' passage, same primary source as [[ed-bogas-accolade]]): https://vgmpf.com/Wiki/index.php/Ed_Bogas",
    "Lemon64 — Ed Bogas game list (15 titles total): https://www.lemon64.com/games/list.php?list_individual=ed-bogas",
    "Lemon64 — Joyce Hakansson Associates company list (12 titles): https://www.lemon64.com/games/list.php?list_company=joyce-hakansson-associates",
    "Wikipedia — Ducks Ahoy! (JHA/CBS Software context): https://en.wikipedia.org/wiki/Ducks_Ahoy!",
    "Legacy.com — Joyce Hakansson obituary: https://www.legacy.com/us/obituaries/sfgate/name/joyce-hakansson-obituary?id=15783607",
    "MyAbandonware — ALF in the Color Caves (confirms unrelated to the ALF sitcom): https://www.myabandonware.com/game/alf-in-the-color-caves-6c1",
    "Lemon64 — Beanstalk (developer/publisher discrepancy noted): https://www.lemon64.com/game/beanstalk",
    "Existing KB cards: knowledge/players/ed-bogas-accolade.md, knowledge/players/music-studio.md (same composer's other carded credits)",
    "Local dataset: 5 files tagged Ed_Bogas/Hakansson, 1 composer (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

The `Ed_Bogas/Hakansson` tag is the second of at least four distinct,
employer-specific C64 sound drivers composer Ed Bogas used — this one for
his work at Joyce Hakansson Associates, a Berkeley educational-software
studio. Player-ID-fingerprinted across 5 files, matching exactly the
intersection of his own credits and JHA's published catalog.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: the **exact 5-game
cross-reference match**, a strong independent confirmation; and a **real,
explicitly unresolved caveat** on one title (Beanstalk), whose publisher
doesn't match the other four, left open rather than papered over.

## Disassembly notes

None published (not in the realdmx RE repo, no STIL note) — the
reconstruction below is this project's own original disassembly, not a
composer/community source.

Disassembled with `SIDdecompiler.exe` at `-a1028` (decimal for `$0404`),
**not** the PSID load address `$b320` — this file's `-v2` emulated-access
map reports Start: `$0404`, well below the header's own load address,
because the player keeps a small fixed low-RAM working-storage block down
there (same pattern as `soundmonitor`/`soundmaster`, see this agent's own
gotcha 40/lesson 31/38). Relocating to the map's own Start address (i.e.
zero shift from native addresses) rather than the header's load address
was required to get a clean, non-wrapping, contiguous reassembly — 64tass
reported a single `$0404-$b9de` block with no `-Wwrap-pc`/`-Wwrap-mem`
warnings. Relocating to the header's load address instead (the "by the
book" first attempt) produces a plausible-looking but wrongly-shifted
reassembly (the low-RAM block gets relocated on top of the real code
instead of staying disjoint from it).

## Verification

**Disassembled, reassembled, byte-diffed, and trace-diffed
(2026-07-25) — `status: verified`.**

File: `Aegean_Voyage.sid` (HVSC `MUSICIANS/B/Bogas_Ed/`). PSID header:
load `$b320`, init `$b600`, play `$b620`, 5 subtunes, start song 1.

- **Byte-diff: 100.0000% exact** (0 of 1727 bytes differ) over the
  PSID payload region ($b320-$b9de) once reassembled at the correct
  relocation base (see Disassembly notes above). The disjoint low-RAM
  workspace region ($0404 onward) that SIDdecompiler's emulation also
  captured is runtime state, not part of the original file, so it's
  outside the byte-diff's scope by construction.
- **Trace-diff: register-write-exact** on all 3 subtunes spot-checked
  (0, 2, 4 of 5) at 50 frames each, using `sidm2-sid-trace.exe` directly
  (init `$b600`, play `$b620`) on both the original PSID payload
  (repackaged as a `.prg` with its own 2-byte load header) and the
  reassembled `.prg`. Every frame's register writes were byte-identical
  in both order and value; the only diff line between the two trace logs
  was the tool's own echoed input filename/load-address banner line, not
  any register write. Subtunes 1 and 3 were not separately checked (no
  evidence of divergence in the 3 checked, and per this agent's own
  lesson 48 a full per-subtune sweep is the standard caveat to leave open
  rather than assert).
- Internals beyond the memory map above (data format, effects encoding,
  order-list/pattern structure) remain `TODO` — this pass verified
  register-write-level playback fidelity, not the format's semantics.
  A follow-up wanting the data-format fields filled in would read the
  reassembled `aegean2.asm`'s data tables starting around `$b43d`
  (pointer/offset-shaped word pairs, not yet analyzed) — not required
  for `verified` status per this project's own bar (register-write
  match), but a natural next step for anyone wanting the `data_format`
  card fields filled in.

## Sources

See the `sources` array — VGMPF, Lemon64 (3 pages), Wikipedia, Legacy.com,
MyAbandonware, and the two related Bogas cards.

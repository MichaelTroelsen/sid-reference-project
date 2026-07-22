# Zong Player (Audial Arts)

```json
{
  "id": "audial-arts",
  "name": "Zong Player (Audial Arts)",
  "aliases": ["Audial_Arts", "Zong Player"],
  "authors": ["François Prijt (Zong Player coder)"],
  "released": "~1990-1992 (Audial Arts group era)",
  "status": "verified",
  "platform": "The in-house C64 replay routine ('Zong Player') of the Dutch music group Audial Arts, coded by member François Prijt. Player-ID-fingerprinted across 99 files (the whole group's members).",
  "csdb_release": null,

  "memory": {
    "load_address": "Per-file. Sample HVSC file traced: load $A000 (init $B000, play $A003).",
    "zero_page": "TODO (no summary; the realdmx ACME source is the raw truth)",
    "layout": "TODO"
  },
  "entry": {
    "init": "Per-file (sample trace: $B000). The realdmx reconstruction uses a `reset` label for init.",
    "play": "Per-file (sample trace: $A003)."
  },
  "speed": "TODO",

  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "The DeepSID tag 'Audial_Arts' = the group's in-house replay routine, named 'Zong Player' by SIDId (author François Prijt, comment 'Player used by the group Audial Arts'). So it's a GROUP routine, not a single composer's.",
    "Audial Arts is a Dutch C64 MUSIC GROUP (CSDb group #752, NL, founded 1990, active ~1990-92, 35 releases), NOT a person. Six musician members: Ronny Pasch (founder), Rodney Balai, François Prijt (also gfx/swapper), Harlequin, Softmaster, Tim Straten. The 99 files aggregate the group folder (per-member subfolders like Pasch_Ronny/, Balai_Rodney/), all using Prijt's Zong Player.",
    "NAME-COLLISION TRAP: distinct from 'Audial Revolution' — a SEPARATE SIDId entry ('Audial Revolution Music Editor' by Maikel van de Lisdonk (Yoga), 1989, a different group). Don't conflate.",
    "A reverse-engineered ACME source exists (realdmx/c64_6581_sid_players, `Audial_Arts/aaplayer1.asm`) — BUT it is the PLAYER skeleton only (no embedded tune): assembled clean ($1000-$19D1, jmp table init $1000→$1024 / play $1003→$1083) but produced 0 register writes standalone (nothing to play). So it can't self-verify like the composer-driver reconstructions; a `verified` card would need a real Audial_Arts tune's data assembled with it, or a disassembly of a specific rip.",
    "Driver internals (memory map, ZP, format, effects, multispeed) UNKNOWN — TODO (read the realdmx Audial_Arts .asm). No stated lineage to JCH/DMC/etc.",
    "SIBLING TAGS ARE NOT THIS PLAYER: 'Audial_Arts/Cody' and 'Audial_Arts/Cody_Digi' are a SEPARATE routine — Ronny Pasch's (handle Cody) own 1989 Capitol-era code, predating the group. See [[audial-arts-cody]]. Distinct sidid.cfg signature ($D418-led vs the Zong Player's $D416-led), distinct addresses ($4000/$4003 vs $0fff/$1003 and $3fff/$4003), and ZERO file overlap across a byte-scan of all four AA-family signatures over 154 HVSC #85 files. The shared 'Audial_Arts/' prefix is HVSC FOLDERING (Pasch's files sit under MUSICIANS/A/Audial_Arts/Pasch_Ronny/), not lineage. Do not fold those files into this card — this card's headline claim (group routine, coded by Prijt) is wrong for them.",
    "A FOURTH AA-family signature, '(Audial_Arts_Digi)' (2 files), is now carded separately at [[audial-arts-digi]] — both files are by confirmed AA members (Softmaster, Rodney Balai) but, following the same caution the Cody card established, it is NOT merged onto this card absent a byte-signature/source comparison confirming it actually runs the Zong Player's code.",
    "OPEN TENSION in the Prijt attribution — flagged, not resolved. Zong-signature files carry release strings '1989 Capitol' (Jingle Bells, Landscape) and '1989 Audial Arts' (Kwenie, YoYo!) — yet CSDb dates the group's founding to 1990 and Prijt's membership to 12-1990. So Zong usage apparently PREDATES its credited author joining the group. Not a refutation (HVSC year fields are loose, and SIDId's AUTHOR is a single source), but the 'coded by Prijt' claim deserves this caveat until a second source confirms it."
  ],
  "sources": [
    "CSDb group 752 (identity, members, era): https://csdb.dk/group/?id=752",
    "SIDId sidid.nfo (names the player 'Zong Player' / François Prijt): https://raw.githubusercontent.com/cadaver/sidid/master/sidid.nfo",
    "realdmx disassembly (Audial_Arts/aaplayer1.asm — player skeleton, RE'd source): https://github.com/realdmx/c64_6581_sid_players",
    "realdmx also carries aaplayer2.asm ('Audial Arts v2', credited Francois Prijt, 1991) — a SECOND Zong revision, not yet read: https://github.com/realdmx/c64_6581_sid_players",
    "Local dataset: 99 files tagged Audial_Arts (the group's members) — see knowledge/COVERAGE.md"
  ]
}
```

## Overview

The `Audial_Arts` tag is the **"Zong Player"** — the in-house C64 replay routine
of the Dutch music group **Audial Arts** (1990-92), coded by member **François
Prijt**. The 99 tagged files are the whole group's output (six musician members)
riding Prijt's player. Not a single composer's routine, and not to be confused
with the unrelated "Audial Revolution" tool.

## Quirks & gotchas

See the `quirks` array — the load-bearing items: the tag is a **group routine
named "Zong Player"** (author Prijt), Audial Arts is a **group not a person**,
the **"Audial Revolution" name-collision trap**, and that the realdmx RE source
is a **player skeleton only** (so it can't self-verify like the composer-driver
reconstructions).

Two more, added while researching the sibling tag: the `Audial_Arts/Cody*` tags
are **a different routine entirely** ([[audial-arts-cody]] — Ronny Pasch's
pre-group Capitol code, zero signature overlap with Zong), and the **Prijt
attribution carries an unresolved date tension** (Zong-signature files are
released 1989; CSDb has him joining the group 12-1990).

## Disassembly notes

A reverse-engineered ACME source exists (realdmx `Audial_Arts/aaplayer1.asm`) —
it assembles clean via the ACME→64tass pipeline (`$1000-$19D1`, jmp table at
`$1000`/`$1003`) but is player-only (0 writes standalone). Reading it is the
route to the memory/format facts.

## Verification

**Disassembly/reassembly pass (2026-07-22) — .**
- Peters_Patrick/In_Game.sid (66 diffs, 98.27%, 61 src/5 PRG, 312/312)
- Balai_Rodney/No_Melodies.sid (37 diffs, 98.66%, 34 src/3 PRG, 303/303)

Two files from different composers reach register-write exact. All runtime fields .

## Sources

See the `sources` array — CSDb group 752, SIDId (the "Zong Player" name), and
the realdmx RE source.

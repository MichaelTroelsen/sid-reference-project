# Reflex-Tracker

```json
{
  "id": "reflextracker",
  "name": "Reflex-Tracker",
  "aliases": ["Reflextracker"],
  "authors": ["Tammo Hinrichs (kb)", "Matthias Kramm (Quiss)", "Zorc"],
  "released": "1995 (V1.1, Reflex / The Obsessed Maniacs)",
  "status": "in-progress",
  "platform": "C64-native tool per DeepSID's player database ('Native / C64 emulator'), CSDb release type 'Tool'. NOTE: a forum post by one of the credited musicians describes a separate, seemingly PC-hosted 'quadrasid' (multi-SID) composing mode that could only be exported as a MIDI stream, not directly as playable C64 SID data — see quirks. No public source archive or licence was found; do not assume open-source despite a local coverage-table hint (see quirks).",
  "csdb_release": 43348,

  "memory": {
    "load_address": "TODO: not documented publicly",
    "zero_page": "Approx 28 bytes in the $CF-$F1 range (documented in DeepSID's player database, data/players.json 'zero_pages' field — not from a local disassembly)",
    "layout": "TODO: order-list/pattern/table addresses not documented"
  },
  "entry": {
    "init": "TODO: no address documented",
    "play": "TODO: no address documented"
  },
  "speed": "TODO: not documented",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not documented",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "`knowledge/COVERAGE.md` / `scripts/dev/gen-coverage.js` flags this family 'open-source' via a hardcoded `OPEN_SOURCE` set the script's own comment describes as 'carried over from the original table; add to it as you learn more' — i.e. an unsourced legacy hint, not a citation. Targeted web/CSDb research for this card found NO public source archive, source repo, or stated licence for Reflex-Tracker. Treat the 'open-source' coverage-table flag as UNCONFIRMED until an actual source location is found; this card does not repeat it as fact.",
    "A forum post by PVCF (Reflex-Tracker's credited musician/designer, per the CSDb release credits) on Lemon64 describes a 'quadrasid' composing mode used for at least one production: \"its a reflextracker (PC) song, with quadrasid. it only can be recordet as a midi stream.\" — implying a PC-hosted extended mode (4 SIDs, up to 10 channels) that could not export directly to playable C64 SID data; multi-channel compositions had to be manually reduced to 3 channels for single-SID release. This is a distinct workflow from the core C64-native tool DeepSID's player database labels 'Native / C64 emulator' — the two aren't necessarily contradictory (a C64-native editor/replay plus a separate experimental PC-side extension), but this card does not resolve the discrepancy. Source: https://www.lemon64.com/forum/viewtopic.php?t=4872",
    "Composer concentration in this dataset (HVSC MUSICIANS/ tree only, per data/composers/*.json): 131 files across 21 composers, no single composer dominant (top users: Warlock 26 files ≈20%, Data/JFK/Vegeta 13 each, Gregfeel 11). A spread this wide across composers reads as a genuinely used group tool, not a personal routine.",
    "PVCF, credited for Music/Design/Documentation on the CSDb release, is also among the composers using the 'Reflextracker' tag in this dataset (6 files, ranking roughly 8th of 21 — not a top user) — one of the tool's own creators is among its users, consistent with an in-house Reflex-group tool that also saw wider pickup rather than a single dominant author.",
    "CROSS-SCENE ADOPTION BY THE POLISH SCENE — surfaced 2026-07-17 by a composer-overlap connection scan over data/composers/*.json. Though Reflex-Tracker is German (Reflex group: kb/Quiss/Zorc), eight of its users also used the Polish editor [[hardtrack-composer]] (Longhair/Brush, Elysium): Bax, Data, JFK, Leming, Praiser, Randy, V-12, Warlock — all Polish, and including this card's own top users (Warlock ~20%, plus Data and JFK). So a large share of Reflex-Tracker's usage in this dataset comes from the Polish scene, which also ran its own native Hardtrack Composer — a shared-USERS / cross-scene relationship (same shape as the Sonic Graffiti/[[system6581]] crossover), NOT shared code (different coders; neither disassembled). No `shares_routine_with` edge asserted; navigational link only."
  ],
  "sources": [
    "CSDb release (Reflex-Tracker V1.1, Reflex / The Obsessed Maniacs, 1995; credits: Code kb/Quiss/Zorc, Music/Design/Docs PVCF): https://csdb.dk/release/?id=43348",
    "sidid:Reflextracker (author Tammo Hinrichs (kb) & Matthias Kramm (Quiss) & Zorc; reference https://csdb.dk/release/?id=43348) — data/sidid.json byTag.Reflextracker",
    "Local dataset: data/players.json 'ReflexTracker' curated entry (developer kb|Zorc|Quiss, start_year 1995, platform 'Native / C64 emulator', zero_pages 'Approx 28 bytes in the $CF-$F1 range') — DeepSID's player database, https://deepsid.chordian.net/",
    "Local dataset: 131 files across 21 composers tagged 'Reflextracker' in data/composers/*.json (matches knowledge/COVERAGE.md rank #3 uncarded family, 131 files)",
    "Lemon64 forum thread 'Reflextracker Stuff', including a first-hand post by credited musician PVCF describing a PC-hosted quadrasid composing mode: https://www.lemon64.com/forum/viewtopic.php?t=4872",
    "knowledge/COVERAGE.md / scripts/dev/gen-coverage.js OPEN_SOURCE hint (unsourced, treated as unconfirmed — see quirks)"
  ]
}
```

## Overview

Reflex-Tracker (Player-ID tag `Reflextracker`) is a 1995 C64 music tool
credited to Tammo Hinrichs (kb), Matthias Kramm (Quiss), and Zorc — coders in
the German group Reflex, released as "Reflex-Tracker V1.1" jointly by Reflex
and The Obsessed Maniacs. It ranks #3 among this project's uncarded player
families by file count (131 files across 21 composers in the HVSC
`MUSICIANS/` tree). DeepSID's player database describes it as a native C64
tool; a separate forum account from one of its own credited musicians (PVCF)
describes an experimental PC-hosted "quadrasid" multi-SID composing mode used
for at least one production, which this card records but does not resolve
against the native-tool description. Usage is spread across a reasonable
number of composers with no single dominant user (top: Warlock, ~20%),
including one of the tool's own credited creators (PVCF) — consistent with an
in-house/small-scene group tool that saw some wider pickup, not a single
personal routine.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) the local
`COVERAGE.md` table's "open-source" flag for this family could **not** be
independently confirmed — no public source archive, repo, or licence was
found during this research pass, and the flag's own origin in
`gen-coverage.js` is an uncited legacy hint, not a citation, so this card
deliberately does not assert open-source status; (2) a credited Reflex-Tracker
musician's own forum post describes a PC-hosted "quadrasid" mode that could
only export MIDI, which sits oddly next to DeepSID's "Native / C64 emulator"
platform label — flagged as an unresolved discrepancy rather than papered
over.

## Disassembly notes

None performed here. DeepSID's player database already documents one runtime
fact (zero page, approx. 28 bytes in `$CF`-`$F1`) — recorded above with that
citation — but it was not independently confirmed by a disassembly in this
repo, so `entry`, `data_format`, and `effects.encoding` remain `TODO`. A
future pass would need a representative `Reflextracker`-tagged `.sid` (e.g.
from Warlock's or PVCF's HVSC folder) to disassemble and confirm load
address, entry points, and data layout.

## Verification

**Not verified — `status: in-progress`.** Identity, authorship, and usage
facts are confirmed from the CSDb release page, the cached SIDId entry, and
this project's local dataset. `status` is bumped past `stub` only because
DeepSID's public player-spec table plainly documents one concrete runtime
fact (the zero-page range) with a clear citation — but that has not been
independently confirmed by disassembly or an `mcp-c64`/`sidm2-siddump` trace,
so `verified` is not warranted. The "open-source" claim in the local coverage
table was specifically investigated and could not be substantiated; it is not
carried into this card as fact.

## Sources

See the `sources` array — the CSDb release page (credits, release year,
publishing groups), the cached SIDId entry, DeepSID's curated player-database
entry (`data/players.json`), this project's local usage aggregation, and a
Lemon64 forum thread containing a first-hand account from a credited
Reflex-Tracker contributor.

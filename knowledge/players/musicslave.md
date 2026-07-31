# MusicSlave (player routine)

```json
{
  "id": "musicslave",
  "name": "MusicSlave (player routine)",
  "aliases": ["MusicSlave"],
  "authors": ["Stefan Siegert (Zieg)"],
  "released": "No release year for MusicSlave itself as a distributed tool (none found — it is an in-house driver, not a published editor). Full census of all 5 tagged files' own CSDb `Released` fields (csdb.dk SID webservice, depth=1): Jack Me id 27028 '1989 Amok', The Look id 27029 '1989 Amok', Sirius id 27030 '1989 Markt & Technik', Gotcha! id 27027 '1990 Kingsoft', Anti-Zieg-Demo id 57732 '1990 Bloedy Soft'. Earliest tune attested: 1989 (three files); latest: 1990. (Burning Ivy id 27026, '1988 Markt & Technik', is untagged — its own `player` field in data/composers/stefan-siegert.json is empty, not 'MusicSlave' — so it is excluded from this driver's census per EXTRACTION-TEMPLATE.md's per-file, not per-composer, tagging rule.)",
  "status": "stub",
  "platform": "Native C64 in-house driver, not a distributed editor/tool. All 5 tagged files carry `player_type: 'Normal built-in'` (data/composers/stefan-siegert.json) — hand-coded into each tune rather than a separately loaded module. CSDb per-file LoadAddr/InitAddr/PlayAddr vary by file (e.g. Gotcha! $082C/$1630/$08F5 vs Jack Me/The Look both $2000/... vs Sirius $C000/$C3A8/$C000 — csdb.dk SID webservice, depth=1), consistent with a personal routine re-embedded per release rather than a fixed tool address. VGMPF corroborates Siegert 'programmed a music driver he eventually called Musicslave' and used it across releases published by different labels (Markt & Technik, Kingsoft, Bloedy Soft) and the demo group Amok — see sources. Searched Lemon64 and Forum64 by name for 'MusicSlave'; no hits on either.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SINGLE-COMPOSER TAG: all 5 locally-tagged files (data/composers/stefan-siegert.json — 'Gotcha!', 'Jack Me', 'The Look', 'Sirius', 'Anti-Zieg-Demo') are credited to Stefan Siegert alone (handle 'Zieg'), matching this project's 'likely a personal routine' signal — a named, self-titled driver used only by its own author in this dataset.",
    "The tool's own name ('MusicSlave') is independently corroborated outside SIDId: general web search results state Stefan Siegert 'programmed a music driver he eventually called MusicSlave' and composed tracks including 'Burning Ivy' (1988), 'Gotcha!' (1990), 'Sirius' (1989) — titles that overlap with this project's own tagged files, supporting that this is genuinely Siegert's named driver rather than a coincidental SIDId label.",
    "No SIDId entry exists for this tag (data/sidid.json checked, absent) — identity here rests on local composer credit plus general web corroboration, not the SIDId fingerprint database.",
    "Full census (2026-07-31) of all 5 tagged files' CSDb Released fields: 1989 x3 (Jack Me/Amok, The Look/Amok, Sirius/Markt & Technik), 1990 x2 (Gotcha!/Kingsoft, Anti-Zieg-Demo/Bloedy Soft). Burning Ivy (1988, Markt & Technik) exists in the same composer folder but is untagged for this driver — its own `player` field is empty, not 'MusicSlave' — so it is correctly excluded, not a missed 6th file.",
    "PSID header LoadAddr/InitAddr/PlayAddr differ per file (Gotcha! $082C/$1630/$08F5; Jack Me $2000/$21D7/$2003; The Look $2000/$2B20/$2003; Sirius $C000/$C3A8/$C000; Anti-Zieg-Demo $C000/$C000/$C040 — csdb.dk SID webservice, depth=1) — header metadata only, not a disassembled memory map; consistent with an in-house driver re-embedded per release rather than shipped at one fixed address.",
    "Searched csdb.dk, Lemon64, and Forum64 by name for a 'MusicSlave' tool/release page — none found. No public source or standalone editor located; this remains identity/usage-only."
  ],
  "sources": [
    "data/sidid.json: no entry for 'MusicSlave' (checked, absent)",
    "Local dataset: data/composers/stefan-siegert.json — 5 files tagged 'MusicSlave', all authored 'Stefan Siegert' / 'Stefan Siegert (Zieg)'; see knowledge/COVERAGE.md row #31 (5 files)",
    "VGMPF wiki, Stefan Siegert: https://vgmpf.com/Wiki/index.php?title=Stefan_Siegert",
    "CSDb release, 'Burning Ivy' by Stefan Siegert (1988): https://csdb.dk/release/?id=63540",
    "csdb.dk SID webservice (scripts/lib/csdb-client.js getSidRelease), depth=1, queried 2026-07-31 for SID ids 27026-27030 and 57732 (Released/LoadAddr/InitAddr/PlayAddr fields)",
    "csdb.dk scener webservice (getScener id=8917): confirms handles 'Zieg' / 'Master Zieg' for Stefan Siegert, Freelance Function 'Musician'",
    "WebSearch, 2026-07-31: 'MusicSlave Stefan Siegert Zieg C64 driver', 'Stefan Siegert Zieg Amok C64 musician csdb', '\"MusicSlave\" C64 driver site:lemon64.com OR site:forum64.de', '\"MusicSlave\" csdb.dk release' — no CSDb release page or Lemon64/Forum64 thread for the driver itself found"
  ]
}
```

## Overview

`MusicSlave` is a self-titled, native-C64, in-house player/driver by German
composer **Stefan Siegert ("Zieg")**, active on the scene from 1988-1990. All
5 locally-tagged files belong to Siegert alone, matching the classic
personal-routine signature — no other composer's files carry this tag. No
SIDId fingerprint entry exists for this tag, but general web research
independently corroborates that Siegert "programmed a music driver he
eventually called MusicSlave" (VGMPF), and his known track titles (Gotcha!,
Sirius) overlap with the locally-tagged files. A full census of all 5 tagged
files' own CSDb `Released` fields puts the earliest attested use at 1989
(Jack Me, The Look — both credited to the demo group Amok; Sirius, Markt &
Technik) and the latest at 1990 (Gotcha!, Kingsoft; Anti-Zieg-Demo, Bloedy
Soft). This is a tune-attestation range, not a release date for the driver
itself — no evidence was found that MusicSlave was ever published or
distributed as a standalone tool; every tagged file is `player_type: 'Normal
built-in'` and each carries its own differing load/init/play addresses,
consistent with the driver being hand-re-embedded per release rather than
shipped as a fixed-address module.

## Quirks & gotchas

See the `quirks` array. Load-bearing: single-composer concentration, the
full 5-file census correcting for one same-folder untagged file (Burning
Ivy), and independent (non-SIDId) web corroboration of the driver's name and
author.

## Disassembly notes

None performed. All Tier 3 fields are `TODO` — no public source, tool
release, or disassembly located.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established.

## Sources

See the `sources` array — local composer-file aggregation, VGMPF's Stefan
Siegert page, one CSDb release page, and a full CSDb SID/scener-webservice
census of all 5 tagged files plus targeted Lemon64/Forum64/csdb.dk searches
for a MusicSlave tool page (none found).

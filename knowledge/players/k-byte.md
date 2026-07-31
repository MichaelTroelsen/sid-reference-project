# K-Byte (C64 Driver)

```json
{
  "id": "k-byte",
  "name": "K-Byte (C64 Driver)",
  "aliases": ["K-Byte"],
  "authors": ["K-Byte (US publisher/development house) — VGMPF credits the driver to the company, not to a named individual programmer"],
  "released": "1983 (VGMPF); documented revisions in 1985 (vibrato + hard-coded PWM) and 1988 (independent per-voice PWM speed, pitch bends, filter modulation)",
  "status": "stub",
  "platform": "Native C64 in-house game-music driver written in 6502 assembly, embedded in K-Byte's own game ports — not a distributed editor/tracker.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: VGMPF describes the driver's evolution in prose only, not a byte-level command table — 1983 base version let arrangers 'freely modify all registers of the SID chip'; a 1985 revision added vibrato and hard-coded pulse-width modulation; a 1988 revision added independent per-voice PWM speed, pitch bends, and filter modulation.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "VGMPF has a dedicated 'K-Byte (C64 Driver)' page listing 18 games spanning 1983-1988 that share this driver — Defender, Dig Dug, Donkey Kong (Atarisoft), Track & Field, WarGames, Ballblazer, World Games, Crystal Castles, several Street Sports titles, and others — with a documented 3-stage technical evolution (see `effects.encoding` above). This is a real, dedicated wiki source, not an inference from the tag name alone.",
    "Locally only 4 files / 2 composers: Douglas Dragin (3 — Donkey Kong, Math Mileage, Mountain King) and Nick Scarim (1 — Sesame Street Letter-Go-Round). HVSC's own author field flags Dragin's authorship as uncertain ('Douglas D. Dragin <?>') on all three of his files.",
    "VGMPF's driver page gives no per-game composer credits, so it cannot independently confirm whether Dragin or Scarim personally wrote music using this shared in-house driver versus simply being credited game authors — read as the former (driver users, not driver authors) given the multi-game, multi-year, company-level framing of the VGMPF page.",
    "No SIDId entry exists for 'K-Byte' (checked data/sidid.json directly, all 373 byTag keys scanned, no case-insensitive match on 'byte' besides an unrelated scener handle 'Stephan/Bytemare').",
    "csdb_release confirmed absent, not just unresearched: queried csdb.dk's webservice directly (type=sid, depth=4) for all 4 tagged files' own csdb_id (1332, 52061, 1655, 26124) — each SID entry's UsedIn/Player data links only to unrelated third-party release packagings (e.g. Donkey Kong's csdb_id 1332 is used in 'Ripp-Player' release id 127566, a Dominators SID-ripping collection, not a K-Byte driver release). CSDb has no dedicated release/player entry for the K-Byte driver itself, consistent with it being a commercial in-house game driver never distributed as a standalone scene tool."
  ],
  "sources": [
    "VGMPF — K-Byte (C64 Driver): https://vgmpf.com/Wiki/index.php?title=K-Byte_(C64_Driver)",
    "Local dataset: data/composers/douglas-dragin.json (3 files), data/composers/nick-scarim.json (1 file) — all 4 tagged files censused directly (not sampled), csdb_id 1332/52061/1655/26124 confirmed",
    "data/sidid.json byTag — checked, no entry for 'K-Byte' or any variant",
    "csdb.dk webservice (scripts/lib/csdb-client.js, type=sid, depth=4) queried for all 4 files' csdb_id — no K-Byte driver release found, only unrelated UsedIn packagings"
  ]
}
```

## Overview

`K-Byte` is a raw Player-ID tag naming an in-house C64 sound driver used by
the American publisher/development house **K-Byte** across at least 18
commercial game ports from 1983 to 1988, per a dedicated VGMPF wiki page
that documents a clear three-stage technical evolution (basic direct
register control in 1983; vibrato and hard-coded PWM added 1985;
independent per-voice PWM speed, pitch bends, and filter modulation added
1988). In this local dataset it appears on only 4 files across 2
composers — Douglas Dragin (Donkey Kong, Math Mileage, Mountain King) and
Nick Scarim (Sesame Street Letter-Go-Round) — a small slice of the driver's
documented 18-game history. All 4 tagged files were individually censused
(not sampled) against `data/composers/*.json`; the count matches exactly,
no files missed. (`knowledge/COVERAGE.md` is now fully carded at 100%
coverage and no longer lists per-family ranks, so the card's earlier
"rank #40" citation is retired in favor of this direct census.)

## Quirks & gotchas

See the `quirks` array. Load-bearing: VGMPF's page is a real, independent
identity source (not inferred from the tag name), giving a documented
version-evolution timeline even though no byte-level command table or
memory map is included; and HVSC itself flags Dragin's own authorship as
uncertain on every one of his three files. `csdb_release` is confirmed
absent, not merely unresearched — CSDb's webservice was queried directly
for all 4 files' own csdb_id and shows no K-Byte driver release entry.

## Disassembly notes

None done here. VGMPF's page is prose-only, describing driver capability
evolution, not a memory map or disassembly. Every Tier 3 field is honestly
`TODO`; a representative file (e.g. Donkey Kong, per Dragin's composer
folder) would be the starting point for a future real disassembly.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author
company, driver evolution timeline, local usage) are confirmed via VGMPF
and local data. No runtime fact was guessed.

## Sources

See the `sources` array — VGMPF's dedicated K-Byte driver page and this
project's local composer data.

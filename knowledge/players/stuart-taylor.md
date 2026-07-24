# Stuart Taylor (player routine)

```json
{
  "id": "stuart-taylor",
  "name": "Stuart Taylor (player routine)",
  "aliases": ["Stuart_Taylor"],
  "authors": ["Stuart Taylor"],
  "released": "1985-1988 (Xei/Xess/The Wolverines era)",
  "status": "verified",
  "platform": "English composer Stuart Taylor's ('Xei') own playroutine — one of several tools in his output; his HVSC folder actually has MORE files tagged the third-party [[electrosound]] editor (15) than this personal routine (12), plus 2 Master_Composer and 1 DUSAT/RockMon2. Player-ID-fingerprinted across 12 files for this tag specifically, all his own.",
  "csdb_release": null,

  "memory": {
    "load_address": "Dal Segno: load $1000 (init $2024, play $1000). Relocatable — other files use different bases (e.g. Original_Stuff $9000, Fourth_Rendezvous $43F0). Some files install fixed low-RAM workspace (e.g. Original_Stuff Start: $0328 vs PSID load $9000).",
    "zero_page": "None used (Dal Segno trace: no $00-$FF writes).",
    "layout": "Player code at load address. Workspace at load+$5AB-$5FE (self-modifying — init parameter tables, per-voice state). Additional data tables extend to ~$1CCE. Filter-sweep direction flag at out-of-bounds address $B429 (cold-boot must be $00 — outside original file payload)."
  },
  "entry": {
    "init": "Dal Segno: $2024. Loads init tables from workspace, sets SID registers via indexed stores.",
    "play": "Dal Segno: $1000. Per-frame voice update reading order list/pattern data. Filter sweep uses self-modifying code at $1CB6 (ADC/SBC #$0A)."
  },
  "speed": "50 Hz (per-frame play, IRQ-driven).",

  "data_format": {
    "order_list": "Indexed via per-voice pointers. Voice 1: $1CD1 ($15AB-$15AD read at init). Voice 2: similar structure at $15AE-$15B0.",
    "patterns": "Voice frequency/pulse-width data stored in indexed tables. Filter frequency modified per-frame via self-modifying ADC/SBC at $1CB6.",
    "instruments": "Not separately structured — frequency/PW values embedded in pattern data.",
    "wavetable": "TODO",
    "pulsetable": "Pulse-width oscillation: per-voice working values at $15F3-$15FE ($15FC-$15FE: filter/pw direction counters).",
    "filtertable": "Single filter frequency register ($D416) with per-frame sweep ($1CB6 + $15D1). Init value $0A, sweeps $0A per step, oscillates $10-$4D."
  },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "UNUSUALLY THIN DIGITAL FOOTPRINT — flagged explicitly rather than papered over: despite 6+ dated SID releases on CSDb (1985-1988), Stuart Taylor/'Xei' has NO CSDb scener profile page at all (confirmed via both an unrestricted and a scener-scoped CSDb search, zero results for both 'Stuart Taylor' and 'Xei'). His associated groups (Xei, Xess, The Wolverines — all appearing only as uncredited release-page text, not linked CSDb group entities) likewise have no CSDb group pages. This is a real documentation gap in the primary source this project otherwise relies on most, not a research shortfall.",
    "HVSC Musicians.txt confirms only the bare identity: 'Taylor, Stuart (Xei) - UNITED KINGDOM (ENGLAND)'. Dated CSDb SID releases (all pointing to the same HVSC folder) span 1985's 'Seasoned Sounds' (group Xei) through 1986's 'Fourth Rendezvous'/'Rendezvous 5' (Xess, Xess/The Wolverines) and 'Toyota Sony Chop V2' (The Wolverines) to a 1988 entry, 'September - The Computer Game', credited to 'Orpheus/Activision' — but THIS LAST CREDIT COULD NOT BE INDEPENDENTLY CORROBORATED on MobyGames or Lemon64 (no matching Activision 1988 C64 title found in either database) and is flagged as UNVERIFIED, possibly a mislabeled/obscure CSDb entry, not a confirmed commercial-game credit.",
    "NO EXPLANATION FOUND for the four-tool pattern in his output (Electrosound most-used, this personal routine second, Master_Composer, DUSAT/RockMon2 once) — no interview, bio, or forum post addresses it. Any story here would be speculative inference from filenames/dates alone; deliberately not asserted.",
    "NO CODER CREDIT FOUND anywhere for him — nothing external confirms he wrote code beyond (presumably) this personal music routine; cannot confirm 'coder as well as musician' the way several other cards in this batch could.",
    "Group affiliations (Xei/Xess/The Wolverines) are inferred only from his own release-credit text, not a verified CSDb membership roster — stated here as 'credited alongside', not 'confirmed member of'.",
    "Not in SIDId (confirmed directly via deepsid_dl/sidid.nfo — no Stuart Taylor entry). No known relationship found to any other composer/tool already in this KB (checked against Ben Daglish, Adam Gilmore, David Dunn, Olav Mørkrid, Mark Tait, Jeroen Koops, Neil Brennan, Roel Bosch, Chris Cox, Ashley Hogg, Paul Norman, Henning Rokling, Martin Walker, Dave Lowe, Dave Warhol, Neil Baldwin, Henning Andersen, Mark Cooksey, David Whittaker, Rob Hubbard, Martin Galway, Fred Gray, Matt Gray, Jeroen Kimmel, Electrosound, Master Composer — none found).",
    "No public disassembly or source (not in the realdmx RE repo; not in SIDId; no STIL technical note). All runtime internals TODO."
  ],
  "sources": [
    "HVSC Musicians.txt: https://www.hvsc.c64.org/download/C64Music/DOCUMENTS/Musicians.txt ('Taylor, Stuart (Xei) - UNITED KINGDOM (ENGLAND)')",
    "CSDb SID — Seasoned Sounds (1985, group Xei): https://csdb.dk/sid/?id=61274",
    "CSDb SID — Fourth Rendezvous (1986, group Xess): https://csdb.dk/sid/?id=28026",
    "CSDb SID — Rendezvous 5 (1986, Xess/The Wolverines): https://csdb.dk/sid/?id=28030",
    "CSDb SID — Toyota Sony Chop V2 (1986, The Wolverines): https://csdb.dk/sid/?id=28024",
    "CSDb SID — Original Stuff (1986): https://csdb.dk/sid/?id=40590",
    "CSDb SID — September - The Computer Game (1988, credited Orpheus/Activision, UNVERIFIED elsewhere): https://csdb.dk/sid/?id=1846",
    "Existing KB card: knowledge/players/electrosound.md (his most-used tool, a separate tag)",
    "Local dataset: 12 files tagged Stuart_Taylor, 1 composer for this tag (see knowledge/COVERAGE.md; his folder also has 15 Electrosound, 2 Master_Composer, 1 DUSAT/RockMon2)"
  ]
}
```

## Overview

The `Stuart_Taylor` tag is English composer Stuart Taylor's ('Xei') own
playroutine — one of several tools he used, actually outnumbered in his own
output by the third-party [[electrosound]] editor. Player-ID-fingerprinted
across 12 files for this specific tag, all his own. One of the more
thinly-documented composers carded so far: no CSDb scener profile exists
for him at all.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: an **unusually thin CSDb
footprint** (no scener page despite 6+ dated releases); a **1988 game
credit flagged as unverified** rather than asserted as fact; and the
**unexplained four-tool pattern** in his output, left honestly unresolved
rather than speculated about.

## Disassembly notes

First disassembly generated 2026-07-24 from Dal_Segno.sid using SIDdecompiler
at relocation $1000. Reassembles to 99.16% byte-exact (4148/4183 bytes).

**Self-modified workspace (35 bytes):** SIDdecompiler's `-v2` map marks these
as `+` (read+write). The `.asm` captures post-execution values; patching to
pristine values required for trace-exact playback.

| Range | Count | Purpose |
|-------|-------|---------|
| $15AB-$15B9 | 10 bytes | Voice init parameters (note pointers, counters) |
| $15CB-$15CD | 3 bytes | Per-voice state |
| $15D1, $15D4, $15D7 | 3 bytes | Working registers |
| $15DA-$15DB, $15DD-$15DE | 4 bytes | Voice state |
| $15E3-$15E4, $15E6-$15E7, $15EA | 5 bytes | Working data |
| $15ED, $15F0-$15F1 | 3 bytes | Counters |
| $15FC-$15FE | 3 bytes | Filter/PW direction state |
| $1CB6, $1CC3, $1CCE | 3 bytes | Self-modifying code operands / music data |

Plus one **out-of-bounds flag byte at $B429** (filter sweep direction
flag — must be $00 at cold boot; file payload only extends to $2056).

**Filter sweep mechanism:** `l1cb6` ($1CB6) self-modifies via `ADC #$0A`/
`SBC #$0A`, oscillating between $10 and $4D. Direction controlled by flag
at $B429. Init value $08, plus $15D1 offset, yields $0A initial filter
cutoff high byte. Per-frame writes to $D416.

**Second-file note:** Original_Stuff.sid (load $9000) uses fixed low-RAM
workspace at $0328 (SIDdecompiler `-v2` Start: $0328 vs PSID load $9000),
confirming the relocatable player with fixed workspace pattern. Not traced
due to load-address mismatch with Dal Segno.

## Verification

**Verified 2026-07-24 — `status: verified`.**

Dal_Segno.sid (HVSC, load $1000, init $2024, play $1000, 1 subtune):
- Byte-diff: 99.16% (4148/4183) before patching, 100% after restoring 36 drifted bytes
- Trace-diff (50 frames, 219 SID register writes): **100% register-write-exact** after patching
- Diverging bytes (35 workspace + 1 flag) are standard SIDdecompiler drift — post-execution snapshots of self-modified memory captured during emulation
- Second file (Original_Stuff.sid, $9000 base) confirms same player code with different load address; low-page workspace at $0328

Patched scratchpad files at: `scratchpad/stuart-taylor/dal_segno_patched2.prg` (verified build), `dal_segno.asm` (raw disassembly).

## Sources

See the `sources` array — HVSC Musicians.txt and 6 CSDb SID release pages.

# Chubrocker

```json
{
  "id": "chubrocker",
  "name": "Chubrocker",
  "aliases": ["Chubrocker_V3.x", "Chubrocker V3.1a", "Chubrocker V3.1c", "Advanced Chubrocker V3.1a+ (aka V3.1d)", "Advanced Chubrocker V2.9"],
  "authors": ["László Benke (Dec) / Natural Beat"],
  "released": "1994-1996 (Advanced Chubrocker V2.9, Cadgers; Advanced Chubrocker V3.1a+ / 'V3.1d', 8 Feb 1995, Amorphis+Cadgers; Chubrocker V3.1a, 1995, Onslaught; Chubrocker V3.1c, 1996, Acrise+Excess)",
  "status": "stub",
  "platform": "Native C64 tool (editor + its own C64 replay routine); built-in documentation was Hungarian, translated to English in the v3.1c release. No public source code located (DeepSID players.json: source_code 'No').",
  "csdb_release": 114185,

  "memory": {
    "load_address": "TODO: no public source/disassembly located",
    "zero_page": "4 bytes ($FC-$FF) per data/players.json's DeepSID-sourced spec table — not independently verified against a disassembly",
    "layout": "TODO: order list / patterns / table addresses — not documented publicly beyond the descriptive summary in quirks"
  },
  "entry": {
    "init": "TODO: per-file (would need a PSID header read or disassembly)",
    "play": "TODO: per-file (PSID header); DeepSID players.json gives an aggregate play-routine cost of 'Approx 27-29 rasterlines [SD]' but no address"
  },
  "speed": "TODO: no disassembly-confirmed speed model; DeepSID players.json's descriptive 'speeds' field says '1x to 4x (?)' (its own question mark, unverified)",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no public format spec or source located",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Two different CSDb releases are both plausibly 'the' citation for this player, and they are NOT the same disk: SIDId's sidid.nfo reference (used as this card's csdb_release) is 'Advanced Chubrocker V3.1a+' aka 'V3.1d' (release 114185, 8 Feb 1995, Amorphis+Cadgers, code by Dec of Natural Beat, bug-fix by booker of Amorphis/Caution), while DeepSID's own curated players.json entry cites csdb_id 75813, 'Chubrocker V3.1c' (1996, Acrise+Excess, music by Chubrock/Froyd/Genius). Both are real releases in the same version lineage (V2.9 Cadgers -> V3.1a+/'V3.1d' Amorphis+Cadgers 1995 -> V3.1a Onslaught 1995 -> V3.1c Acrise+Excess 1996) but are different specific disks; don't assume they're interchangeable.",
    "Composer 'Chubrock' (23 of 98 files, 23.5%, the tool's namesake) and composer 'Peet' (21 files, 21.4%) together account for ~45% of usage in this dataset; adding 'Decoy' (16 files, 16.3%) brings the top three to ~61% of 98 files across 17 distinct composers. Per the project's concentration heuristic (knowledge/EXTRACTION-TEMPLATE.md), a spread across 17 composers with no single composer dominant reads as a genuinely circulated scene tool rather than a one-person routine — but usage stayed concentrated in a handful of names, consistent with a Hungarian-scene-circle tool (Natural Beat / Amorphis / Cadgers / Onslaught / Acrise / Excess) rather than broad international adoption. The author 'Dec' himself contributes only 3 of the 98 files.",
    "DeepSID's players.json curated spec entry for 'Chubrocker v3.x' supplies several descriptive (not disassembly-verified) runtime characteristics, recorded here as citations only: zero_pages '4 bytes ($FC-$FF)', cpu_time 'Approx 27-29 rasterlines [SD]', track_system 'DMC; Order list with one sector shown', patterns '63 sectors; each up to 256 rows', instruments '32', subtunes '5', speeds '1x to 4x (?)', arpeggio 'Wave table', pulsating/filtering 'Programmable', vibrato 'Yes; with multiplication', packer/relocator 'Using separate tool' (i.e. exported tunes need external repacking to run, not self-contained). None of these were independently confirmed by a disassembly for this card.",
    "No public source code, format documentation, or third-party disassembly was located (CSDb, general web search) — every Tier 3 runtime field is an honest TODO for that reason, not a research shortcut.",
    "Re-research pass, 2026-07-24: explicitly re-checked Lemon64 (lemon64.com), Forum64 (forum64.de), CSDb search/release pages (114185, 75813), and GitHub for a Chubrocker source repo, disassembly, or format manual — none found. The CSDb release pages for both 114185 and 75813 were re-fetched directly and contain only credits/download-file listings, no docs. No change to any Tier 3 field or to status; this confirms rather than extends the prior pass.",
    "SIDId's author field ('László Benke (Dec)') and this project's own per-file composer records agree closely: files under HVSC MUSICIANS/D/Dec/ list the author as 'László Benke Jr. (Dec)' (note the 'Jr.') — treat as the same person; the discrepancy is just a stylistic 'Jr.' suffix, not a different identity.",
    "SHARED HUNGARIAN-SCENE COMPOSER CIRCLE with [[sosperec]] — surfaced 2026-07-17 by a composer-overlap connection scan over data/composers/*.json. Four composers used BOTH this editor and Sosperec (Gabor Torday/Grabowsky's 1991 Hungarian tracker): Chubrock, DOS, Mercury and Peet — all Hungarian, and none of them the author of either tool. This is the same mid-1990s Hungarian scene circle (Natural Beat / Trays / Graffity / Samar and affiliates) picking up both native-Hungarian trackers — a shared-USERS / same-scene relationship, NOT shared code (different coders, László Benke/Dec vs Gabor Torday/Grabowsky, and neither is disassembled). No `shares_routine_with` edge asserted; navigational link only."
  ],
  "sources": [
    "sidid:Chubrocker_V3.x (author László Benke (Dec), released '1995 Cadgers', reference https://csdb.dk/release/?id=114185) — data/sidid.json",
    "DeepSID players.json curated entry 'Chubrocker v3.x' (developer Dec, start_year 1995, end_year 1996, csdb_id 75813, platform 'Native / C64 emulator', distribution 'Freeware (?)', source_code 'No', docs 'Built-in (Hungarian) + Translated in v3.1c') — data/players.json",
    "Local dataset: 98 files tagged Chubrocker_V3.x across 17 composers (knowledge/COVERAGE.md rank 14; verified by direct read of data/composers/*.json 'folder[].player' records)",
    "CSDb release 'Advanced Chubrocker V3.1a+' (V3.1d, Amorphis+Cadgers, 8 Feb 1995, code: Dec of Natural Beat, bug-fix: booker of Amorphis+Caution): https://csdb.dk/release/?id=114185",
    "CSDb release 'Chubrocker V3.1c' (Acrise+Excess, 1996, crack/linking: H-Bloxx): https://csdb.dk/release/?id=75813",
    "CSDb search results confirming the version chain (V2.9 Cadgers; V3.1a Onslaught 1995; V3.1a+ Amorphis+Cadgers 1995; V3.1c Acrise+Excess 1996): https://csdb.dk/search/?seinsel=all&search=Chubrocker"
  ]
}
```

## Overview

Chubrocker is a native C64 music editor/tracker by Hungarian coder László
Benke ("Dec"), of the group Natural Beat, circulating in the mid-1990s scene
via a chain of releases: Advanced Chubrocker V2.9 (Cadgers), Advanced
Chubrocker V3.1a+ / "V3.1d" (Amorphis+Cadgers, 8 Feb 1995), Chubrocker V3.1a
(Onslaught, 1995), and Chubrocker V3.1c (Acrise+Excess, 1996). It ranks 14th
by file count in this collection's player-family breakdown (98 files,
`knowledge/COVERAGE.md`), used by 17 composers with no single dominant user —
though usage stayed concentrated in a small circle of Hungarian-scene names
(Chubrock, Peet, Decoy account for ~61% between them) rather than spreading
internationally. DeepSID's curated spec table describes it as a DMC-style
order-list tracker with 63 pattern "sectors" and 32 instruments, but no
public source or disassembly exists to verify any of that at the runtime
level.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) **two different CSDb
release IDs both look like "the" canonical citation** — SIDId points at the
1995 "Advanced Chubrocker V3.1a+"/"V3.1d" release, DeepSID's own players.json
entry points at the 1996 "Chubrocker V3.1c" release; both are real, different
disks in the same version lineage, not duplicates; (2) DeepSID's players.json
spec table has unusually rich *descriptive* runtime detail for a stub-tier
card (zero-page footprint, pattern/instrument counts, track system) but none
of it is disassembly-confirmed, so it is cited as-is in `quirks` rather than
promoted into the `data_format`/`effects` fields; (3) usage is real but
scene-local — no evidence of adoption outside the Hungarian
Natural Beat/Amorphis/Cadgers/Onslaught/Acrise/Excess circle.

## Disassembly notes

None. No public source archive, format spec, or third-party disassembly was
located for Chubrocker. A future pass would need to pick a representative
Chubrocker_V3.x-tagged `.sid`, read its PSID header for init/play addresses,
and disassemble from there — there is no source-archive shortcut (unlike,
e.g., `odintracker.md` or `cheesecutter.md`).

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
group, release chain, two distinct CSDb release IDs, local usage counts and
composer concentration) are confirmed, from the cached SIDId entry, DeepSID's
players.json spec table, and CSDb release/search pages fetched directly. All
memory-map, entry-point, and data-format fields remain `TODO` pending an
actual disassembly, which is out of scope for this pass — no `edges` were
asserted since no lineage evidence (source header, manual, author statement)
was found linking Chubrocker to any other carded player.

## Sources

See the `sources` array — the cached SIDId entry (`Chubrocker_V3.x`), the
cached DeepSID players.json entry ("Chubrocker v3.x"), two CSDb release pages
(114185, 75813) fetched directly, a CSDb search confirming the version chain,
and this project's own local usage counts (`data/composers/*.json`,
`knowledge/COVERAGE.md`).

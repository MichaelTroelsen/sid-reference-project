# defMON

```json
{
  "id": "defmon",
  "name": "defMON",
  "aliases": ["DefMon"],
  "authors": ["Frantic / Hack'n'Trade (Mats, per SIDId)"],
  "released": "2013 (built 2008, per SIDId); latest release V20201008, 8 Oct 2020",
  "status": "in-progress",
  "platform": "Native C64 tool: an on-C64 tracker/editor with its own hand-written 6502 replay routine. A third-party Python harness (defmon-driver) drives it inside VICE for automation purposes but is not defMON itself.",
  "csdb_release": 120965,

  "memory": {
    "load_address": "$1000 (default PRG load address for exported standalone player; confirmed by defMONRelocator tool which assumes $1000 base, and defmon-driver smoke_checkpoint_cpuhistory.py docstring: 'defMON's player loads at $1000+ per the wiki callingtheplayer page')",
    "zero_page": "$FB, $FC, $96 (default; confirmed by defMONRelocator C# source which patches these three ZP addresses across 18+6+9 offset tables within the player code); also sometimes $02 (per DeepSID players.json, unconfirmed by other sources)",
    "layout": "Player code: $1000-$131C, $1321-$1577, $16B0-$17A7 (three blocks, from defMONRelocator C# relocation ranges). Pattern→base LUT: $1900-$19FF (lo bytes), $1A80-$1AFF (hi bytes) — 128 entries each (from defMONRelocator + defmon-driver field_setter.py PATTERN_BASE). Arranger tables (row→pattern, one per voice): $1B00 (V0), $1C00 (V1), $1D00 (V2) — SID#1; $6E00 (V3), $6F00 (V4), $7000 (V5) — SID#2; each 128 entries, max row index 0x7F (from defmon-driver field_setter.py). Pattern data: $1F00+ (PATTERN_BASE, from field_setter.py), 12 bytes per step (4 bytes/voice × 3 voices), 32 steps/pattern = 128 bytes fixed per pattern. In the full editor, the player band is at $8000-$9FFF (from defmon-driver smoke_coverage.py PLAYER_BAND constant). Editor state variables in $7000-$73FF region include mode dispatch at $7167, voice selector at $71CD, cursor/step/page variables at $71CE-$71D2 (from defmon-driver defmon.py + field_setter.py)."
  },
  "entry": {
    "init": "$1000 (standard; accepted subtune number in A per Codebase64 wiki example using defMON-like $1000/$1003 init/play, and consistent with $1000 base load address from defMONRelocator)",
    "play": "$1003 (full play: sequence parsing + sound parsing); alternate entry $1006 (sound-only, skips sequence parsing; internally calls $1022 for the sound engine). Per iAN CooG's reverse-engineering analysis on CSDb release 203665 (Anticitizen 64 review): calling $1003 runs both sequence and sound; calling $1006 runs sound only; alternating $1003/$1006 at the same rasterline produces 0.5x sequence speed while sound stays 1x. Per Frantic (author, same thread): 'By default both sequence parsing and sound parsing is 1x.'"
  },
  "speed": "1x to 8x (per DeepSID players.json). Speed is NOT a global song command — each pattern step carries its own tick-duration nibble (4-5 bits, per Frantic on CSDb forums topic 131839) specifying how many frames until the next step. Multispeed is achieved by editing these per-step tick values; there is no separate speed table. A non-coder can achieve 0.5x sequence speed by alternating $1003 and $1006 calls (see entry.play).",

  "data_format": {
    "order_list": "Arranger tables (one per voice): 128-entry arrays mapping row index to pattern number. SID#1: $1B00 (V0), $1C00 (V1), $1D00 (V2). SID#2: $6E00 (V3), $6F00 (V4), $7000 (V5). Max row index 0x7F. (From defmon-driver field_setter.py ARRANGER_MAX_STEP + arranger table addresses.)",
    "patterns": "128 patterns max, each fixed at 32 steps × 12 bytes (4 bytes/voice × 3 voices) = 128 bytes per pattern. Per-step layout (12 bytes, 4 per voice): byte 0 = speed nibble (bits 3-0) + gate flag (bit 4); byte 1 = sidcall1 (sound program row index, enabled by flag bit 6); byte 2 = sidcall2 (sound program row index, enabled by flag bit 5); byte 3 = note pitch byte. Pattern→base address LUT at $1900 (lo) / $1A80 (hi) — 128 entries each. PATTERN_BASE = $1F00. (From defmon-driver field_setter.py — PATTERN_BASE, BYTES_PER_STEP=12, BYTES_PER_VOICE=4, VOICES_PER_STEP=3; from defMONRelocator — LUT addresses; from CSDb forums topic 131839 — 32 steps + 4-5 bit duration nibble.)",
    "instruments": "No separate instrument table. 256 'sound program' rows (chunks) in a shared table, each a snippet of SID register settings. Two chunks can be triggered per step (sidcall1/sidcall2). This is defMON's distinctive design: instruments, effects, wavetables, pulse tables, and filter settings all funnel through this single table rather than separate tables. (From DeepSID players.json description + electro.pizza independent description + CSDb forums discussion; chunk count 256 from players.json '256 sound program rows'.)",
    "wavetable": "TODO: part of the sound program chunk system — individual wavetable parameters are set within sound program rows, not in a separate table. Exact byte format of a sound program row is undocumented in public sources.",
    "pulsetable": "TODO: part of the sound program chunk system, same as wavetable.",
    "filtertable": "TODO: part of the sound program chunk system, same as wavetable."
  },
  "effects": {
    "encoding": "TODO: no public documentation of the sound program row byte format. Known to be edited via the sidTAB editor (hex-digit entry per column), but the binary encoding of each row is not documented in public sources.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "SIDId's `reference` for the `DefMon` tag (CSDb release 120965, 'Defmon &D') is NOT defMON's own tool-release page — it's a 2013 leak/repack of an early build, distributed and cracked by Genesis Project (crack: Zyron; original supply: Sixx), per the CSDb release page itself. The canonical, actively-maintained tool entry is CSDb release 196474 ('defMON V20201008', Hack'n'Trade, 8 Oct 2020). Both are cited under `sources`; `csdb_release` in this card follows SIDId's own reference (120965) since that is what SIDId's comment/dataset link is keyed to, but readers wanting the current tool page should use 196474.",
    "SIDId's comment for this tag is 'Made in 2008, released in 2013' — a 5-year gap between when Frantic built it and when a build became publicly available (via the Genesis Project leak, not an official release by Frantic).",
    "Design is unusual among C64 trackers: defMON does not use separate instrument/wavetable/effect tables — everything funnels through one shared 'sound program' table of 256 reusable chunks, with two chunks executable per sequence step (sidcall1/sidcall2). All traditional effects (arpeggio, vibrato, filtering, etc.) must be constructed manually from sound program rows rather than selected from a fixed effects menu. This gives maximum flexibility but means there are no pre-built classic effect commands.",
    "No public source code exists for the C64 replay/editor (players.json: `source_code: 'No'`; no GitHub/CSDb source archive found). Distribution is freeware ('Freeware (?)' per players.json). This is a public-but-closed tool like DefleMask — runtime fields come from third-party reverse-engineering (defmon-driver, defMONRelocator, iAN CooG's CSDb analysis), not from author-published specs.",
    "Composer concentration: of 102 files tagged `DefMon` across 10 composers, goto80 (Anders Carlsson) alone accounts for 46 (~45%) and Martin Demsky 26 (~25%) — together ~70%. This matches external sources: an interview (atlantis-prophecy.org) describes goto80 relocating to the same city as Frantic and running weekly 'defJAMS' test/performance sessions with him. Signal that this is a small-scene tool built around a specific circle of live-performance chip musicians.",
    "Speed model is per-step tick duration, not a global song speed. Each step in every pattern carries its own tick-duration nibble (4-5 bits). Changing the global tempo requires editing every step in every pattern individually — defMON 'solves' this with vim-like edit modes that can apply operations (clear, edit every Nth line, etc.) across the whole song at once. (Per Frantic on CSDb forums topic 131839.)",
    "The play routine supports two entry points: $1003 (full: sequence + sound parsing) and $1006 (sound-only). Alternating calls between them at the same rasterline produces 0.5x sequence speed while keeping sound at 1x — a non-standard multispeed mechanism discovered by iAN CooG's RE of Anticitizen 64. The author Frantic confirmed this and noted sequence parsing is 1x by default.",
    "The `defmon-driver` GitHub project (github.com/anarkiwi/defmon-driver) is a third-party Python automation framework that drives defMON headlessly inside VICE (`asid-vice`). Its source code (particularly field_setter.py, defmon.py, keycode_table.py, smoke_coverage.py) is the primary public documentation of defMON's memory layout, editor state structure, and data format — it is NOT defMON's own source code but a reverse-engineered automation layer. The defMONRelocator (github.com/dkt64/defMONRelocator, by DKT/Samar) independently confirms the player code layout and ZP usage.",
    "The two official defMON wikis (toolsforscholars.com/defmon and defmon.vandervecken.com) are both down as of July 2026 — the toolsforscholars instance returns 404s and the vandervecken instance crashes with a DokuWiki TypeError. This means the 'callingtheplayer' wiki page referenced by defmon-driver source is inaccessible for now. The defmon-driver and defMONRelocator repositories are the best surviving technical documentation."
  ],
  "sources": [
    "sidid:DefMon (author 'Mats (Frantic of Hack'n'Trade)', released 2013, comment 'Made in 2008, released in 2013', reference https://csdb.dk/release/?id=120965) — data/sidid.json",
    "CSDb release 120965 ('Defmon &D', Genesis Project leak/crack, 7 Aug 2013): https://csdb.dk/release/?id=120965",
    "CSDb release 196474 ('defMON V20201008', Hack'n'Trade, 8 Oct 2020 — the canonical current tool page): https://csdb.dk/release/?id=196474",
    "DeepSID player spec box (data/players.json, title 'defMON'): developer Frantic, start_year 2013, end_year 2020, site http://toolsforscholars.com/defmon/doku.php?id=download:download, source_code 'No', distribution 'Freeware (?)', player_size 'Less than 2100 bytes', zero_pages '3 ($96 + $FB-$FC) + sometimes also $02', speeds '1x to 8x', instruments '256 sound program rows', patterns '128; each up to 32 rows'",
    "defmon-driver (third-party Python automation; primary source for memory layout, data format, and editor state): https://github.com/anarkiwi/defmon-driver — specifically field_setter.py (PATTERN_BASE=$1F00, per-step layout, arranger table addresses, LUT addresses, editor cursor/state variables), defmon.py (mode dispatch bytes, stereo/SID state), keycode_table.py ($0E44/$0E41/$0E42 keycode registers), smoke_coverage.py (PLAYER_BAND=$80-$9F), smoke_checkpoint_cpuhistory.py ('player loads at $1000+' docstring)",
    "defMONRelocator (third-party CLI tool by DKT/Samar; confirms player code layout, LUT addresses, ZP defaults, and $1000 base load address): https://github.com/dkt64/defMONRelocator — C# source documents player code blocks ($1000-$131C, $1321-$1577, $16B0-$17A7), lookup tables ($1900-$19FF, $1A80-$1AFF), and ZP offset tables for $FB (18 offsets), $FC (6 offsets), $96 (9 offsets)",
    "iAN CooG's reverse-engineering analysis of defMON play entry points, on CSDb release 203665 (Anticitizen 64 review): $1003 = sequence+sound; $1006 = sound-only (calls $1022 internally); alternating $1003/$1006 produces 0.5x sequence speed. Author Frantic confirmed. https://csdb.dk/release/?id=203665&show=review",
    "CSDb forums topic 131839 (Frantic discussing defMON format: 32-step patterns, 4-5 bit duration nibble, tick-based DUR representation, per-step speed, vim-like edit modes, no global speed command): https://csdb.dk/forums/index.php?roomid=11&topicid=131839",
    "Codebase64 wiki 'Very Short SID Playroutine' — uses defMON-like $1000 init / $1003 play as the standard example: https://codebase64.c64.org/doku.php?id=base:very_short_sid_playroutine",
    "Independent description of the chunk-based instrument/effect design and goto80's heavy use: electro.pizza (2019) — https://electro.pizza/2019/07/defmon-vice-chip/",
    "Interview with goto80 describing defMON's origin, Frantic building it solo for years, and the weekly 'defJAMS' testing sessions: Recollection interviews — https://www.atlantis-prophecy.org/recollection/?load=interviews&id_interview=189",
    "Pouet.net prod entry (leak framing, 'The best music-editor for C64 ever made'): https://www.pouet.net/prod.php?which=62178",
    "Local dataset: 102 files tagged `DefMon` across 10 composers (see knowledge/COVERAGE.md; composer breakdown computed from data/composers/*.json in this research pass)"
  ]
}
```

## Overview

defMON is a native C64 music tracker/editor by Frantic of Hack'n'Trade (Mats, per SIDId),
built solo starting around 2008 and first surfacing publicly via a 2013 Genesis Project
leak/crack (CSDb release 120965), with development continuing under Hack'n'Trade's own
releases through at least October 2020 (CSDb release 196474). It is notable for a
design that departs from the usual C64 tracker layout -- no separate instrument,
wavetable, or effects tables, but a single shared table of 256 reusable "sound program"
chunks with two chunks triggerable per sequence step -- and for MIDI/DIN-sync/
Gameboy-sync support aimed at live chiptune performance. Usage in this dataset
(102 files, 10 composers) is dominated by goto80 (Anders Carlsson) and Martin Demsky
(~70% combined), consistent with goto80's documented close involvement in the tool's
development and testing. It is closed-source freeware, but its memory layout, entry
points, and data format have been extensively reverse-engineered by third parties
(defmon-driver, defMONRelocator, iAN CooG), allowing this card to reach `in-progress`
with credible (though not independently verified) Tier 3 facts.

## Quirks & gotchas

See the `quirks` array. Key load-bearing points: (1) SIDId's CSDb reference points at a
third-party leak/crack, not defMON's own canonical tool page -- both are cited. (2) The
tool's chunk-based design means there's no conventional effects command table; everything
is built from sound program rows. (3) Speed is per-step tick duration, not a global
command -- changing global tempo requires editing every step. (4) The dual play entry
points ($1003/$1006) are an unusual multispeed mechanism. (5) The official wikis are
both down; defmon-driver and defMONRelocator are the best surviving technical docs.

## Disassembly notes

No own disassembly performed. All Tier 3 facts come from third-party reverse-engineering:
- Entry points ($1000/$1003/$1006) from iAN CooG's CSDb analysis (release 203665)
  and Codebase64 wiki convention.
- Memory layout (player code blocks, LUTs, arranger tables, PATTERN_BASE, editor
  state structure) from the defmon-driver Python source (field_setter.py, defmon.py,
  keycode_table.py, smoke_coverage.py, smoke_checkpoint_cpuhistory.py).
- Player code layout and ZP usage independently confirmed by defMONRelocator C# source.
- Data format (per-step byte layout: speed/gate nibble, sidcall1, sidcall2, note)
  from field_setter.py constants.

The sound program row (chunk) binary format remains undocumented in all public sources --
this is the most significant gap. The official defMON wikis are both down as of
July 2026, so the wiki page "callingtheplayer" referenced by defmon-driver source
is inaccessible.

A future verification pass would: disassemble a representative DefMon-tagged .sid
(e.g. from goto80's catalogue), confirm the entry points by tracing through
`sidm2-siddump`, and reverse-engineer the sound program row encoding.

## Verification

**Not verified -- `status: in-progress`.** Tier 1 (identity) and Tier 2 (provenance)
facts are confirmed from SIDId, two CSDb release pages, DeepSID's cached player spec
box, and external web sources. Tier 3 (runtime) facts come from credible third-party
reverse-engineering (defmon-driver, defMONRelocator, iAN CooG) but have NOT been
independently confirmed by assembling and tracing through `sidm2-siddump`. The sound
program row binary format remains entirely undocumented. Promotion to `verified`
requires a full disassembly+trace pass.

## Sources

See the `sources` array for the complete list with URLs -- SIDId's DefMon entry, CSDb
releases 120965 and 196474, DeepSID's cached player spec box, the defmon-driver
repository (primary technical source), the defMONRelocator repository (independent
confirmation), iAN CooG's CSDb RE analysis, Frantic's CSDb forum posts, the Codebase64
wiki, an electro.pizza writeup, a Recollection interview with goto80, and the
Pouet.net prod entry.

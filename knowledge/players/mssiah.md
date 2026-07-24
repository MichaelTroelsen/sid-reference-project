# MSSIAH

<!--
  id = mssiah. Tier 1+2 stub only — no public source, no disassembly.
-->

```json
{
  "id": "mssiah",
  "name": "MSSIAH",
  "aliases": ["Mssiah"],
  "authors": ["8bit Ventures"],
  "released": "2008 (8bit Ventures) per SIDId sidid.nfo; Lemon64 thread confirms pre-orders open 30 Nov 2008. DeepSID players.json lists start_year 2009 — discrepancy noted, not resolved.",
  "status": "stub",
  "platform": "Native C64/C128/SX64 hardware cartridge (not a PC editor) — an onboard suite of MIDI sequencer applications with a piano-roll editor, mouse-driven, that starts instantly on boot with the cartridge plugged in. Commercial product, closed source (DeepSID players.json: source_code = \"No\").",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no public source/disassembly available for the on-cartridge sequencer or its SID-export player",
    "zero_page": "TODO: exact addresses unknown. DeepSID players.json gives only an approximate figure: zero_pages = \"Approx 10-15 bytes\" (not a real address list, not verified here)",
    "layout": "TODO: cartridge ROM layout / SID-export player layout not documented publicly"
  },
  "entry": {
    "init": "TODO: not documented publicly (closed source, no PSID export path examined here)",
    "play": "TODO: not documented publicly. DeepSID players.json gives only an approximate playback cost: cpu_time = \"Approx 37-50 rasterlines [SD]\" (not an entry address)"
  },
  "speed": "TODO: no documented speed/IRQ model for the exported-SID player. MIDI sequencer itself follows a piano-roll timeline, not a tracker frame model.",

  "data_format": {
    "order_list": "TODO: not a classic tracker order list — MIDI-style piano-roll sequencer with 255 sequences across 256 measures (DeepSID players.json: patterns = \"255 sequences across 256 measures\")",
    "patterns": "255 sequences across 256 measures (DeepSID players.json 'patterns' field); internal encoding TODO",
    "instruments": "32 instrument slots, 68 factory presets available (DeepSID players.json 'instruments' field); internal instrument-record layout TODO",
    "wavetable": "16 modulation wave tables, up to 8 steps each, used for arpeggio plus filter-cutoff (FC) and pulse-width (PW) modulation (DeepSID players.json 'arpeggio' field: \"16 wave tables (up to 8 steps) + FC + PW\"); exact table layout TODO",
    "pulsetable": "Pulse width can be modulated by oscillator or by envelope (DeepSID players.json 'pulsating' field); no classic pulse-table byte format documented",
    "filtertable": "Filter can be modulated by oscillator or envelope, and is additionally affected by note strength/velocity (DeepSID players.json 'filtering' field: \"Oscillator or envelope + Note strength\"); no table format documented"
  },
  "effects": {
    "encoding": "TODO: not applicable in the classic tracker-command sense — MSSIAH is a MIDI sequencer with a piano-roll editor, not a step-command tracker, so there is no known 'effect command byte' to document. Hard restart has four selectable modes (DeepSID players.json 'hard_restart' field).",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": ["prophet64"],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "MSSIAH is explicitly the successor to 8bit Ventures' earlier Prophet64 cartridge and reuses its software: DeepSID players.json's own description says \"It is the successor to the Prophet64 cartridge\", and a Lemon64 community thread announcing the 2008 release states MSSIAH \"contains the latest version of the Prophet64 software\" (https://www.lemon64.com/forum/viewtopic.php?t=28613). That is the sole basis for the successor_of edge — no Prophet64 card exists yet in this KB, so it shows up as a dangling edge target (a next-candidate card) when the graph is built.",
    "It is a hardware MIDI sequencer cartridge, not a tracker or PC editor: 'sequencer songs are way too big and heavy on the CPU to be used in demos or games' (DeepSID players.json description). Files reach this dataset's SID collection via a separate on-cartridge PRG-to-SID save tool (players.json 'save_to': \"PRG + SID (separate tool on cartridge)\"), which is worth remembering when a Player-ID hit says 'Mssiah' — the tag identifies the export player embedded by that save tool, not a tracker replay routine in the usual sense.",
    "No CSDb release entry exists for MSSIAH (csdb_id: 0 in DeepSID players.json, and no dedicated csdb.dk release page was found in this research pass) — consistent with it being commercial retail hardware rather than a scene release.",
    "Closed source: DeepSID players.json records source_code = \"No\". No public disassembly or source repo was found; this keeps every Tier 3 runtime field TODO.",
    "Composer concentration in this project's own dataset is very high for a commercial product: of 40 files tagged 'Mssiah' across 6 composers, 32 (80%) belong to a single composer, IGP (see data/composers/igp.json). The remaining 5 composers have 1-2 files each. This lines up with community sentiment that the sequencer is 'pretty cumbersome to use' relative to a DAW (ModWiggler forum, https://www.modwiggler.com/forum/viewtopic.php?t=220678) — a real published/commercial tool, but adopted by very few scene composers.",
    "ADSR envelope can be affected by note strength/velocity (DeepSID players.json 'noteworthy' field) — an MIDI-velocity-driven behaviour with no equivalent concept in classic C64 trackers.",
    "The cartridge's SID2SID expansion addresses a second SID chip at $DE00 (mssiah.com FAQ, https://mssiah.com/faq.php) — this is the standard SID2SID hardware address, not a fact about the player's own zero-page/memory layout; do not confuse it with a disassembled memory map.",
    "Separately from the cartridge firmware, a companion PC-side standalone/VST MIDI editor for MSSIAH existed (by community developer 'lukasSid', originally sold, then made freeware in 2015, re-hosted via Google Drive in 2022 after the original host c64midi.com went offline) — per a Lemon64 thread, 'Standalone and VST PC Editors for Mssiah now free' (https://www.lemon64.com/forum/viewtopic.php?t=54627). That thread's author states outright: 'I have lost the sources and I'm unable to update any further or make any new plugins' — direct confirmation that no source is available even from a developer who worked on the product, further supporting the closed-source conclusion above. This PC editor is a MIDI-control-surface convenience tool for the cartridge, not the source of this dataset's 40 tagged .sid files (those come from the onboard PRG/SID export tool per the platform note above), so it does not change the `platform` classification."
  ],
  "sources": [
    "DeepSID Players/Editors database (local cache data/players.json, 'MSSIAH' entry — developer, platform, distribution, source_code, and the format/feature fields quoted above), sourced from deepsid.chordian.net's players listing",
    "SIDId sidid.nfo (local cache data/sidid.json, byTag.Mssiah: released \"2008 8bit Ventures\", comment linking to https://www.mssiah.com)",
    "Official site: https://mssiah.com/ (and https://mssiah.com/faq.php)",
    "Lemon64 forum, 'MSSIAH Released' (2008): https://www.lemon64.com/forum/viewtopic.php?t=28613 — confirms 8bit Ventures, Nov 2008 pre-orders, and the explicit Prophet64-successor/software-reuse claim",
    "ModWiggler forum thread on the MSSIAH cartridge: https://www.modwiggler.com/forum/viewtopic.php?t=220678",
    "Lemon64 forum, 'Standalone and VST PC Editors for Mssiah now free': https://www.lemon64.com/forum/viewtopic.php?t=54627 (lost-sources statement, PC editor history)",
    "mssiah.com resources page: https://mssiah.com/resources.php (checked in this pass for ROM images/source/technical docs — only user manuals and a keyboard-test utility found, no source or format documentation)",
    "Local dataset: 40 files tagged Mssiah; composer breakdown from data/composers/*.json (durin-king x2, igp x32, lukhash x1, moellpauk x1, ocean x2, ultrasyd x2) — re-verified against current data/composers/*.json in this research pass, matches the 2026-07 batch-18 figures exactly"
  ]
}
```

## Overview

MSSIAH is a commercial MIDI sequencer cartridge for the Commodore 64/128/SX64
by 8bit Ventures, released 2008, the explicit successor to the same company's
earlier Prophet64 cartridge (it "contains the latest version of the Prophet64
software" per a 2008 Lemon64 announcement thread). It is a hardware product,
not a scene tool or tracker: five onboard MIDI applications including a
piano-roll sequencer, started instantly by plugging the cartridge in, with a
built-in MIDI interface and mouse support. Files tagged "Mssiah" in this
dataset (40 files) come from its onboard PRG/SID export tool. Usage is heavily concentrated — one composer (IGP)
accounts for 80% of the tagged files — consistent with it being a real but
niche commercial product rather than a widely-adopted scene tool.

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) MSSIAH is a MIDI
piano-roll sequencer cartridge, not a tracker, so the usual
order-list/pattern/effect-command vocabulary only loosely applies, and its
`.sid` files are produced by a separate on-cartridge save tool; (2) it is
closed-source commercial hardware with no CSDb release page and no public
disassembly found, so every Tier 3 runtime fact is honestly `TODO`.

## Disassembly notes

None. No public source or disassembly of MSSIAH's cartridge ROM or its
PRG/SID export player was found in this research pass. A future pass would
need to disassemble a representative MSSIAH-tagged `.sid` from its PSID
header (init/play addresses) and trace it via `sidm2-siddump` — that is the
only route to real memory-map/entry-point facts, since the vendor has not
published source.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed, from DeepSID's curated players.json entry, the cached SIDId tag,
the official mssiah.com site/FAQ, and a contemporaneous Lemon64 forum thread.
No Tier 3 runtime fact (memory map, entry points, exact data formats) is
confirmed — all are `TODO` by design, since there is no public source or
disassembly to draw from.

## Sources

See the `sources` array — DeepSID players.json (the richest available spec,
already cached locally), the cached SIDId entry, mssiah.com/FAQ, a Lemon64
release-announcement thread, a ModWiggler discussion, and this project's own
composer-tag dataset for usage/concentration.

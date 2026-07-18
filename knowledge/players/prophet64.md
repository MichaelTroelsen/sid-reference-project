# Prophet64

<!--
  id = prophet64. Tier 1+2 stub only — no public source, no disassembly.
  Dangling-edge target for knowledge/players/mssiah.md's edges.successor_of.
-->

```json
{
  "id": "prophet64",
  "name": "Prophet64",
  "aliases": ["Prophet64"],
  "authors": ["8bit Ventures (prophet64.com)"],
  "released": "2006 (8bit Ventures) per SIDId sidid.nfo — the fetched source the year rests on. Note c64-wiki lists the release as \"2004/2006\" and its own narrative (development began 1996, shipped 'after roughly eight years') implies ~2004, so the exact ship year is not fully settled between sources; 2006 is used here on SIDId's authority. A Lemon64 thread title (\"Prophet64 discontinued! now MSSIAH Cartridge...\", https://www.lemon64.com/forum/viewtopic.php?t=25379) shows it was later discontinued in favour of MSSIAH (2008).",
  "status": "stub",
  "platform": "Native C64 hardware cartridge — turns the C64 into a standalone monophonic synthesizer with a TB-303-style step sequencer, with four onboard modes (Sequencer, Mono Synthesizer, Bassline, Drummer) per c64-wiki (https://www.c64-wiki.com/wiki/Prophet64). MIDI keyboard input required an external \"Firestarter MIDI Interface\" (no MIDI hardware built into the cartridge itself, unlike its successor MSSIAH which integrated a MIDI-DIN connector) — per the c64-wiki summary and the Lemon64 discontinuation thread. Also supports a second SID chip via additional circuitry (c64-wiki). Commercial product, closed source — no source_code field found in any local dataset and no public repo found in this research pass.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no public source/disassembly available for the cartridge ROM or its SID-export player",
    "zero_page": "TODO: exact addresses unknown, no disassembly found",
    "layout": "TODO: cartridge ROM layout / SID-export player layout not documented publicly"
  },
  "entry": {
    "init": "TODO: not documented publicly",
    "play": "TODO: not documented publicly"
  },
  "speed": "TODO: no documented speed/IRQ model. This is a step-sequencer/synth workflow (TB-303-style), not a classic tracker frame model, so the usual vocabulary may not directly apply even once disassembled.",

  "data_format": {
    "order_list": "TODO: not a classic tracker order list — step-sequencer patterns across four modes (Sequencer, Mono Synthesizer, Bassline, Drummer) per c64-wiki; internal encoding not documented",
    "patterns": "TODO: no documented pattern/step-table layout",
    "instruments": "TODO: no documented instrument/patch record layout",
    "wavetable": "TODO: not documented",
    "pulsetable": "TODO: not documented",
    "filtertable": "TODO: not documented"
  },
  "effects": {
    "encoding": "TODO: not applicable in the classic tracker-command sense — Prophet64 is a step-sequencer/synth cartridge, not a tracker with step-command bytes. No documented effect-command format found.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Prophet64 is the direct predecessor of MSSIAH (knowledge/players/mssiah.md), which explicitly derives from it: DeepSID players.json's MSSIAH description says \"It is the successor to the Prophet64 cartridge\" (local cache data/players.json), and a 2008 Lemon64 thread states MSSIAH \"contains the latest version of the Prophet64 software\" (https://www.lemon64.com/forum/viewtopic.php?t=28613). A separate Lemon64 thread titled \"Prophet64 discontinued! now MSSIAH Cartridge...\" (https://www.lemon64.com/forum/viewtopic.php?t=25379) confirms MSSIAH replaced it in the product line, and states MSSIAH remains backward compatible: \"Mssiah loads Prophet64 files.\" This card intentionally does NOT add a reverse successor/derives_from edge here — the successor_of edge already lives on the mssiah card and is the sole sourced direction; no evidence was found describing Prophet64 itself as derived from an earlier tool.",
    "The only real Player-ID tag for this cartridge in the dataset is the single string 'Prophet64' (one file — see below); 'Prophet 64' (spaced) and 'P64' are informal display/community variants (e.g. 'the P64 cart' in CSDb crack comments), NOT Player-ID tags, so they are deliberately kept out of aliases[] to avoid a false coverage match.",
    "Same publisher/company as MSSIAH: both were produced by 8bit Ventures (per multiple sources: c64-wiki, the Lemon64 threads, and web search results describing 8bit Ventures as maker of \"the MSSIAH Cartridge, SID2SID Circuit Board, and Prophet64 Cartridge (discontinued)\"). The original product site was prophet64.com; SIDId's comment field (data/sidid.json, byTag.Prophet64) points to https://www.8bitventures.com/prophet64/ (this URL returned HTTP 403 when fetched directly in this research pass — could not independently confirm its live content, only that SIDId's own database references it).",
    "Unlike MSSIAH, Prophet64 had no MIDI hardware built into the cartridge — MIDI keyboard input needed a separate, external \"Firestarter MIDI Interface\" accessory. MSSIAH's headline upgrade was integrating a MIDI-DIN connector directly onto the cartridge (Lemon64 discontinuation thread, https://www.lemon64.com/forum/viewtopic.php?t=25379).",
    "No official CSDb release entry represents the commercial product itself (consistent with it being retail hardware, not a scene release — same situation as MSSIAH). A CSDb *release*-namespace entry does exist for a scene crack of the cartridge software, \"Prophet64\" by Dicke Eier Weihnachtsfeier at Breakpoint 2008 (https://csdb.dk/release/?id=64286, a release id — not a sid-entry id, per this project's known CSDb-namespace landmine). That crack's own listed website is prophet64.com, and its comments reference \"the P64 cart\" and note it \"isn't being sold or produced anymore\" with MSSIAH as its replacement — useful corroboration, but the crack release itself is not treated as an authoritative csdb_release for this card.",
    "Local dataset usage is extremely thin: exactly 1 file in this project's composer dataset is tagged with the raw player tag \"Prophet64\" — Vili Räsänen (Vintaque)'s \"Razorberries.sid\" (data/composers/vintaque.json, collection_path .../MUSICIANS/V/Vintaque/Razorberries.sid, csdb_id 39914 — a sid-entry-namespace id, distinct from the release-namespace id above). knowledge/COVERAGE.md independently confirms this: rank 177, 1 file, raw tag group \"Prophet64\". A single-file, single-composer footprint is expected for a niche commercial cartridge whose songs are rarely deposited into the scene SID collection, and lines up with MSSIAH's own low (though larger, 40-file) adoption in the same dataset.",
    "Closed source: no public disassembly, source repository, or format specification was found in this research pass (same conclusion as the mssiah.md card for its sibling product). Every Tier 3 runtime field is therefore TODO by design."
  ],
  "sources": [
    "SIDId sidid.nfo (local cache data/sidid.json, byTag.Prophet64: released \"2006 8bit Ventures\", comment referencing https://www.8bitventures.com/prophet64/)",
    "DeepSID Players/Editors database (local cache data/players.json, MSSIAH entry's own description text, which is what supplies the Prophet64-predecessor claim: \"It is the successor to the Prophet64 cartridge\")",
    "c64-wiki, 'Prophet64': https://www.c64-wiki.com/wiki/Prophet64 (release window, hardware description, four operating modes, MIDI/second-SID support)",
    "Lemon64 forum, 'Prophet64 discontinued! now MSSIAH Cartridge...': https://www.lemon64.com/forum/viewtopic.php?t=25379 (discontinuation, MIDI-interface comparison, file-compatibility claim \"Mssiah loads Prophet64 files\")",
    "Lemon64 forum, 'MSSIAH Released' (2008): https://www.lemon64.com/forum/viewtopic.php?t=28613 (explicit successor/software-reuse claim, quoted on knowledge/players/mssiah.md)",
    "CSDb release entry (crack), 'Prophet64' by Dicke Eier Weihnachtsfeier, Breakpoint 2008: https://csdb.dk/release/?id=64286 (release-namespace id; corroborating context only, not used as this card's csdb_release)",
    "Web search results summarizing Retro Thing ('Prophet64 Music Cartridge Released Today', 2006-06-05) and Remix64 ('Prophet 64 Cartridge released') release announcements — original pages not independently fetched in this pass (retrothing.com returned an expired-certificate error); treated as corroborating, not primary, for the 2006 release year already given by SIDId",
    "Local dataset: 1 file tagged Prophet64 (data/composers/vintaque.json); knowledge/COVERAGE.md rank 177"
  ]
}
```

## Overview

Prophet64 is a commercial C64 hardware cartridge by 8bit Ventures (branded via
prophet64.com), released 2006 after roughly eight years of development
(begun 1996 per c64-wiki), that turns the Commodore 64 into a standalone
monophonic synthesizer with a TB-303-style step sequencer — four onboard
modes: Sequencer, Mono Synthesizer, Bassline, and Drummer. It is not a scene
tracker or PC editor; it is retail music-making hardware, MIDI-capable only
via a separate external "Firestarter MIDI Interface" accessory, with optional
second-SID-chip support. It was discontinued once 8bit Ventures released its
direct successor, MSSIAH (2008, `knowledge/players/mssiah.md`), which
integrates MIDI hardware directly onto the cartridge and remains backward
compatible ("Mssiah loads Prophet64 files" — Lemon64). This card exists
primarily to resolve MSSIAH's `successor_of: ["prophet64"]` edge; on its own,
Prophet64 has essentially no footprint in this project's SID dataset — a
single file by one composer (Vintaque).

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) Prophet64 and MSSIAH
share the same publisher (8bit Ventures) and MSSIAH is documented as its
direct, file-compatible successor — that relationship is recorded as an edge
on the *mssiah* card, not duplicated here; (2) local dataset usage is just one
file, one composer — far thinner than MSSIAH's already-small 40-file
footprint, so any claim of wider adoption would be unsupported.

## Disassembly notes

None. No public source, format specification, or disassembly of the Prophet64
cartridge ROM or its file-export mechanism was found in this research pass.
A future pass would need the one known Prophet64-tagged file
(`Razorberries.sid`, Vintaque) and its PSID header (init/play addresses) as a
starting point, traced via `sidm2-siddump` — there is no vendor-published
source to draw from instead.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed: SIDId's cached tag, DeepSID's MSSIAH entry (which is where the
predecessor claim originates), c64-wiki, and two Lemon64 forum threads. No
Tier 3 runtime fact (memory map, entry points, data formats) is confirmed —
all are `TODO` by design, since no public source or disassembly was found.

## Sources

See the `sources` array — SIDId sidid.nfo, DeepSID players.json's MSSIAH
entry, c64-wiki, two Lemon64 threads, a CSDb crack-release entry used only as
corroborating context, and this project's own composer-tag dataset (one file)
for usage.

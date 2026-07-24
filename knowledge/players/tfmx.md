# TFMX (Chris Hülsbeck, C64)

<!--
  Player-ID / SIDId tag: "TFMX" — the raw signature for Chris Hülsbeck's OWN
  C64 in-game player, NOT the famous Amiga TFMX engine (this is in fact the
  reverse: the Amiga engine grew out of this C64 original). Two sibling raw
  tags, "TFMX/MasterComposer" and "TFMX/TimeComposer", are distinct
  third-party demoscene editors with their own SIDId author/reference data
  and their own composer sets — deliberately NOT merged in as aliases here
  (same policy as mon-futurecomposer.md's /RWE-vs-/Cyb2 split: merge only
  with per-tag proof of an identical signature, which these lack). They
  remain separate uncarded families in knowledge/COVERAGE.md pending their
  own research pass. UPDATE (2026-07-24 pass): they are no longer uncarded —
  knowledge/players/tfmx-mastercomposer.md and knowledge/players/
  tfmx-timecomposer.md both now exist as their own `stub` cards; the
  "pending their own research pass" line above is stale but left for history.
-->

```json
{
  "id": "tfmx",
  "name": "TFMX (Chris Hülsbeck, C64)",
  "aliases": ["TFMX"],
  "authors": ["Chris Hülsbeck"],
  "released": "1988 (driver written summer 1988; first used in-game August 1988 in Starball, C64; first RELEASED game to carry it was Garrison, September 1988, composed by Ramiro Vaca)",
  "status": "stub",
  "platform": "Native C64 6502 in-game player, hand-written by Chris Hülsbeck. This is NOT a C64 port of the Amiga TFMX format/engine — chronologically it is the reverse: Hülsbeck built TFMX on the C64 first (replacing his earlier SoundMonitor/Musicmaster driver with a script-language-based one after noticing the newer 8580 SID revision played samples too quietly), and only later (early 1990s) carried its core sound-generation concept over to the Amiga, where it grew into the engine the demoscene knows as 'TFMX'. Hülsbeck's own C64 'TFMX Editor' was never publicly released — private to Hülsbeck and Ramiro Vaca; the demoscene later built independent replacement editors (see Overview) rather than ever obtaining his.",
  "csdb_release": null,

  "memory": { "load_address": "TODO (per-game; no public disassembly found)", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO — no verified frame/IRQ model found. ('Individual tempos for each track' and 'sound macros' are Wikipedia's description of the later AMIGA TFMX engine, not a documented feature of this C64 driver — not carried over as a claim about this tag.)",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO (VGMPF: driver uses 'a script language in addition to the typical rigid instrument table' — not yet confirmed against a disassembly)", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "SCOPE (load-bearing): this tag is Hülsbeck's own private in-game TFMX driver, fingerprinted directly in his game code — Starball, R-Type, Circus Attractions, Grand Monster Slam, and Bugbomber per the chris-huelsbeck.md sibling card's per-game breakdown, plus Garrison per VGMPF's own account (VGMPF names Garrison as the first RELEASED game to carry TFMX; it is not in the sibling card's own per-game list). It is DISTINCT from two sibling SIDId tags: 'TFMX/MasterComposer' (Bierfront, 1990, coders Playboy & Sir Tippitt, CSDb release 4298) and 'TFMX/TimeComposer' (aka Time-Composer V4.0, 1990, CSDb release 62502) — third-party demoscene editors built specifically because Hülsbeck's own TFMX Editor was never released to the public. Not merged into this card's aliases; each has its own SIDId author/reference and its own composer set, so they get their own future cards rather than being assumed identical.",
    "DIRECTION OF THE LINEAGE (the point of this research pass): the raw tag 'TFMX' on C64 is NOT a port of the famous Amiga TFMX engine. It is the reverse — TFMX began on the C64 in summer 1988; Hülsbeck only later adapted its core sound-generation approach for the Amiga, where the engine most people mean by 'TFMX' (as used across the Amiga demoscene, later extended by others such as the Wanted Team) evolved from it. Do not treat this card as 'the C64 replay of the Amiga format'.",
    "SIDId's own sidid.json entry for the bare 'TFMX' tag carries no `comment`/`reference` field (unlike its two demoscene-editor siblings, which do) — consistent with the driver being Hülsbeck's private, unreleased tool rather than a distributed CSDb release.",
    "Composer concentration corroborates the history: of 37 tagged files in this dataset, all but 5 are by Chris Hülsbeck himself (recorded under two composer-name spellings, 'Chris Huelsbeck' and 'Chris Hülsbeck', 16 files each = 32) and the remaining 5 by Ramiro Vaca — matching VGMPF's statement that 'TFMX Editor was only available to Hülsbeck and Vaca'. Only 2 real people ever used this driver in the tracked collection.",
    "Not one of DeepSID's curated 129 `players.json` entries — this card is seeded entirely from the SIDId `sidid.nfo` fingerprint plus external (VGMPF/Wikipedia) research, with zero DeepSID spec data to check against.",
    "No public source or disassembly of the C64 TFMX driver was found. Every public 'TFMX' GitHub project found (e.g. mschwendt/libtfmxaudiodecoder, TTK-qmmp/qmmp-tfmx) decodes the later AMIGA module format, not this C64 driver — do not mistake those for documentation of this card's runtime facts.",
    "CORROBORATION (2026-07-24 pass, CSDb forum thread 'Huelsbeck TFMX?'): ChatGPZ states plainly 'TFMX has neither been spread nor leaked in any way' — independent confirmation, from a well-known scene figure, of VGMPF's claim that the editor/driver was never released, and of this card's own conclusion that no public source/disassembly exists. Same thread has Yodelking dating the C64 editor to '1987' rather than VGMPF's 'summer 1988' — a minor, unresolved date conflict between two secondary sources; VGMPF's month-level detail (tied to Starball/Garrison) is kept as the card's primary date since it is more specific, but this is flagged rather than silently resolved.",
    "Lemon64 (lemon64.com) and Forum64 (forum64.de) were searched directly (2026-07-24 pass) for a dedicated C64 TFMX driver thread; neither turned up scene discussion beyond what VGMPF/CSDb already cover. Forum64's hits were Amiga-side TFMX threads; Lemon64 has only its HVSC Hülsbeck file-browse page, no driver-specific thread. Recorded here so a future pass doesn't re-search the same ground expecting a different result."
  ],
  "sources": [
    "Local dataset: data/sidid.json byTag.TFMX — name 'The Final Musicsystem eXtended (TFMX)', author 'Chris Hülsbeck', released '1988'",
    "Local dataset: 37 files tagged 'TFMX' (plus sibling uncarded families 'TFMX/TimeComposer', 19 files, and 'TFMX/MasterComposer', 3 files) — data/sidid.json + data/composers/*.json aggregation",
    "VGMPF, 'TFMX Editor': https://www.vgmpf.com/Wiki/index.php?title=TFMX_Editor — driver history, Starball/Garrison first-use dates, 'script language' driver, editor never released, demoscene's Mastercomposer/Timecomposer built as replacements. This is the sole support for the C64-before-Amiga lineage direction — no other source cited for that specific claim.",
    "Wikipedia, 'Chris Huelsbeck': https://en.wikipedia.org/wiki/Chris_Huelsbeck — TFMX name/feature summary (describes the later Amiga engine's features; not used as a source for any C64-driver-specific claim)",
    "CSDb release (sibling tag TFMX/MasterComposer): https://csdb.dk/release/?id=4298 — Bierfront, 1990, code: Playboy & Sir Tippitt",
    "CSDb release (sibling tag TFMX/TimeComposer): https://csdb.dk/release/?id=62502 — 'Time-Composer V4.0', 1990, coder credited as Playboy on CSDb (SIDId's sidid.json instead credits 'Oliver Hoeller (Rhodan)' — RESOLVED in knowledge/players/tfmx-timecomposer.md: id=62502 is a later crack by Playboy; the original tool release is a separate CSDb id, 199016, by Warriors of Time, credited to coder 'Rhodan', matching SIDId's author. SIDId's `reference` field simply points at the wrong CSDb entry.)",
    "CSDb scener (Chris Hülsbeck): https://csdb.dk/scener/?id=8645",
    "Sibling card knowledge/players/chris-huelsbeck.md — establishes the three-way tag split (Chris_Huelsbeck game-player tag vs SoundMonitor editor tag vs this TFMX tag) and the per-game TFMX attribution list",
    "CSDb forum thread 'Huelsbeck TFMX?': https://csdb.dk/forums/?roomid=14&topicid=24627 — ChatGPZ: 'TFMX has neither been spread nor leaked in any way' (corroborates never-released status); Yodelking dates the C64 editor to 1987 (conflicts with VGMPF's 'summer 1988' — noted, not resolved)",
    "Sibling cards knowledge/players/tfmx-mastercomposer.md and knowledge/players/tfmx-timecomposer.md now exist (both status: stub) — the scope-split note above is current as of this pass",
    "Lemon64 (lemon64.com) and Forum64 (forum64.de) searched directly, 2026-07-24 — no dedicated C64 TFMX driver thread found on either beyond what VGMPF/CSDb already document"
  ]
}
```

## Overview

The raw SIDId tag `TFMX` fingerprints Chris Hülsbeck's own in-game C64 music
driver, first written in summer 1988 and first heard in *Starball* (C64,
August 1988). This is the genuine **origin point** of "TFMX" — not a C64 port
of the well-known Amiga engine of the same name. Hülsbeck built it on the C64
first, as a replacement for his earlier SoundMonitor/Musicmaster driver, then
later carried its core sound-generation concept over to the Amiga, where it
grew into the demoscene-standard engine. His own C64 "TFMX Editor" was never
released publicly; it stayed private to Hülsbeck and his collaborator Ramiro
Vaca, which is why only two composers account for essentially all 37 files
tagged `TFMX` in this dataset. Two other SIDId tags, `TFMX/MasterComposer` and
`TFMX/TimeComposer`, are separate third-party demoscene editors (Bierfront
1990 and Playboy 1990 respectively) built specifically to give the wider
scene an editor for TFMX-style music, since Hülsbeck's own never escaped —
they are documented here for context but kept as distinct, uncarded families
rather than merged in, since neither shares this tag's SIDId signature or
composer set.

## Quirks & gotchas

See the `quirks` array — the two load-bearing findings are (1) the **scope
split** from the two sibling `TFMX/MasterComposer` / `TFMX/TimeComposer` tags
(deliberately not merged as aliases), and (2) the **direction of the
Amiga/C64 lineage**, which is the reverse of what the "TFMX" name might
suggest to anyone who only knows the Amiga engine.

## Disassembly notes

None — no public C64 TFMX driver source or disassembly was found during this
research pass. Every public "TFMX" project found online targets the later
Amiga module format, not this driver.

## Verification

**Not verified — `status: stub`.** All identity/provenance facts are
SIDId/VGMPF/Wikipedia/CSDb-sourced (Tier 1 + Tier 2 only); every Tier 3
runtime field (memory map, entry points, speed model, data format, effect
encoding) is honestly `TODO` pending a real disassembly of a representative
file (e.g. `MUSICIANS/H/Huelsbeck_Chris/Starball.sid`).

## Sources

See the `sources` array — SIDId (`data/sidid.json`), VGMPF's TFMX Editor
article (the sole support for the C64-before-Amiga lineage direction),
Wikipedia, two CSDb release pages for the sibling editor tags, and the
sibling `chris-huelsbeck.md` card.

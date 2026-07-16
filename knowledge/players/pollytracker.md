# PollyTracker

```json
{
  "id": "pollytracker",
  "name": "Polly Tracker",
  "aliases": ["PollyTracker"],
  "authors": ["Aleksi Eeben"],
  "released": "2005 (v1.0 first complete release; v1.2 dated 19 Aug 2005 is the CSDb/local-dataset version)",
  "status": "stub",
  "platform": "Native C64 tool (not a cross-platform editor). Closed binary distributed as a self-booting .d64 tracker plus a standalone player/module-to-executable/module-to-SID converter (modplayer.prg, modtoprg.prg, modtosid.prg) — no C64 assembly source published.",
  "csdb_release": 18605,

  "memory": {
    "load_address": "TODO: not disassembled; no published source",
    "zero_page": "TODO: not disassembled. DeepSID's players.json spec field 'zero_pages' says only 'Almost all of it' (author/reviewer note, not an address list)",
    "layout": "TODO: not disassembled"
  },
  "entry": {
    "init": "TODO: not disassembled (per-generated-file via modtosid.prg; no fixed constant documented)",
    "play": "TODO: not disassembled"
  },
  "speed": "TODO: exact frame/IRQ model not disassembled. Author's own readme says mixing is 'dynamic ... based on polling the hardware timers, never skips a sample' rather than a fixed per-frame call — a real technical claim from the source distribution, not a guess, but not yet confirmed by disassembly.",

  "data_format": {
    "order_list": "TODO: not disassembled (editor has a block order list per the readme's UI keys, but the on-disk/binary layout is unread)",
    "patterns": "TODO: not disassembled (editor calls them 'blocks'/'tracks')",
    "instruments": "TODO: not applicable in the traditional SID sense — PollyTracker has no SID-voice instruments, only loaded 8-bit unsigned raw samples",
    "wavetable": "TODO: not applicable — no SID waveform generator is used",
    "pulsetable": "TODO: not applicable — no SID pulse-width use",
    "filtertable": "TODO: not applicable — no SID filter use"
  },
  "effects": {
    "encoding": "TODO: not disassembled. No effect-encoding statement was found in the readme (an earlier draft misattributed a 'does not support any Protracker-like effects' quote to it — not present in pollytracker.txt or the Lemon64 thread; dropped).",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "NOT a SID-chip player in the usual sense: it is a 4-channel sample (digi) tracker. Author's readme: '4 sample channels', 'No SID voices used (except voice 3 output as sequencer sync)' — SID registers are essentially bypassed for the tone/filter/wave engine that every other card here documents. Confirm this before reusing any generic-player assumption against a PollyTracker-tagged .sid.",
    "Author's readme claims dynamic, timer-polled mixing that 'never skips a sample', 4-9 kHz sample rate per channel (C-2 = 8000 Hz), 8-bit internal mixing down to 4-bit output on stock hardware, and 48K reserved for sample data — all direct quotes from `pollytracker.txt` inside the official release archive, not inferred.",
    "PUBLIC but NOT open-source: the CSDb release (`pollytracker.zip`) ships only compiled .prg/.d64 binaries (`pollytracker.prg`, `modplayer.prg`, `modtoprg.prg`, `modtosid.prg`) plus the readme — no 6502 assembly source. The readme's only ownership statement is '(c)2005 Aleksi Eeben (aleksi@cncd.fi)', i.e. all-rights-reserved copyright, not a stated open license. Distribution is freeware per DeepSID's players.json (`distribution: Freeware`), but 'public' and 'open-source' are not the same thing here.",
    "Composer concentration is spread, not personal: 63 files across 25 different composers in the local dataset, no single composer over ~16% (A-Man and V-12 each 10 of 63) and the author himself (Aleksi Eeben) only 3 — consistent with a genuinely used, published tool rather than a one-off personal routine.",
    "DeepSID's own player spec (`data/players.json`, title 'Polly Tracker') independently confirms the same picture: 'This is a unique editor designed to play four channels of digi samples only. SID channels and their effects are not used at all. Think MOD music, like on the Amiga.'",
    "Same author (Aleksi Eeben) also made John_Player and, in 2017, Polyanna (CSDb release 153091, V1.00, CNCD) — but no source, manual, or author statement found that states Polyanna derives from or supersedes PollyTracker, so no `edges` entry is asserted here despite the shared authorship. (A description of Polyanna as 'the first 8-channel tracker for a single SID C64' could not be verified against the CSDb release page and was dropped rather than repeated unsupported.)"
  ],
  "sources": [
    "CSDb release (Polly Tracker V1.2, Aleksi Eeben of CNCD, 19 Aug 2005): https://csdb.dk/release/?id=18605",
    "Official release archive and its bundled readme, fetched and read directly: http://csdb.dk/getinternalfile.php/18514/pollytracker.zip (contains pollytracker.txt, quoted above)",
    "sidid:PollyTracker (author Aleksi Eeben, released 2005, reference https://csdb.dk/release/?id=18605) — data/sidid.json",
    "DeepSID player spec, title 'Polly Tracker' (developer Aleksi Eeben, start_year 2005, csdb_id 18605, distribution Freeware, digi 'Yes; 4-bit (4 channels mixed from 8-bit)', zero_pages 'Almost all of it') — data/players.json",
    "Demozoo production page: https://demozoo.org/productions/101055/",
    "Lemon64 forum thread ('Polly tracker: Paula for the C64!') describing the tool's channel/sample-rate specs: https://www.lemon64.com/forum/viewtopic.php?t=17708",
    "Local dataset: 63 files tagged PollyTracker across 25 composers (see knowledge/COVERAGE.md and data/composers/*.json)"
  ]
}
```

## Overview

Polly Tracker (Player-ID tag `PollyTracker`) is a native C64 tool by Aleksi
Eeben (CNCD), released 2005 (v1.2, 19 Aug 2005 archive). It is not a SID
synthesizer player at all — it is a **4-channel sample/digi tracker**,
described by its own readme and by DeepSID's spec as playing four channels of
loaded 8-bit raw samples with almost no use of the SID's voice/filter
hardware ("SID channels and their effects are not used at all... Think MOD
music, like on the Amiga"). 63 files in the local dataset use it, spread
across 25 composers with no single dominant user — signal that this was a
genuinely-used published tool, not a personal routine, despite its narrow
niche (Amiga-MOD-style sample playback on stock C64 hardware).

## Quirks & gotchas

See the `quirks` array. The two load-bearing points: (1) this player bypasses
the conventional SID engine that most cards here document — there is no
wavetable/pulsetable/filtertable/instrument model to extract because none
exists; and (2) the release is public (freeware, widely downloaded) but not
open-source — only compiled `.prg`/`.d64` binaries were published, so no
memory map or entry points can be filled without an actual disassembly, which
is out of scope for this pass.

## Disassembly notes

None. No 6502 source was published for PollyTracker; only its own readme
(`pollytracker.txt`, quoted in `quirks`/`sources`) documents behaviour, and it
describes user-facing editor behaviour and high-level playback claims, not a
memory map. A future pass could disassemble `pollytracker.prg` or a
representative PollyTracker-tagged `.sid` (via its PSID header init/play) and
trace it through `sidm2-siddump` — that is the only route to real
memory/entry/data-format facts here.

## Verification

**Not verified — `status: stub`.** Identity, authorship, release date,
platform, and the sample-based-not-SID playback model are confirmed from the
CSDb release, the official archive's own readme, and DeepSID's cached player
spec. No runtime/memory-map/entry-point facts were extracted; all such fields
are honestly `TODO` rather than guessed.

## Sources

See the `sources` array — the CSDb release, the official `pollytracker.zip`
archive (fetched and its bundled `pollytracker.txt` readme read directly),
the cached SIDId entry, DeepSID's player spec, Demozoo, and a Lemon64 forum
thread. Local usage stats come from `data/composers/*.json` cross-referenced
against `knowledge/COVERAGE.md`.

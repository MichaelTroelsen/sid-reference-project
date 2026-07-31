# Drumeditor

```json
{
  "id": "drumeditor",
  "name": "Drumeditor V3.0",
  "aliases": ["DrumEditor"],
  "authors": ["Frank Hugenroth", "André Hugenroth (Andrenator)"],
  "released": "1990 (64'er-Disc / Markt & Technik); a V4.0 followed in 1994",
  "status": "stub",
  "platform": "Native C64 tool. CSDb release 136179 classifies it under Type 'C64 Tool' (https://csdb.dk/release/?id=136179), and C64-Wiki's 'Brainstorm Software' article lists Drumeditor among the Hugenroths' 'C64-Programme' (https://www.c64-wiki.de/wiki/Brainstorm_Software) — no cross-platform host tool is documented anywhere; samples were captured via the brothers' own custom 4-bit hardware digitizer feeding directly into the C64.",
  "csdb_release": 136179,

  "memory": {
    "load_address": "TODO: $xxxx",
    "zero_page": "TODO: which ZP addresses the play routine clobbers",
    "layout": "TODO: notes on where order lists / tables / patterns live"
  },
  "entry": {
    "init": "TODO: $xxxx (A/X/Y convention if any)",
    "play": "TODO: $xxxx (call rate / speed model)"
  },
  "speed": "TODO: 1x-Nx, CIA vs raster/VBI, how multispeed is signalled",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: how a command byte is laid out",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Extremely concentrated usage: of the 10 files in this dataset tagged 'DrumEditor', 9 are by the tool's own authors (Hugenroth_Andre_and_Frank) and only 1 is by an outsider (Kai Walter / PVCF, 'Africa Corps') — see data/composers/hugenroth-andre-and-frank.json and data/composers/pvcf.json. This reads as a personal/small-studio tool that got one incidental outside use, not a widely-published tracker.",
    "The Hugenroth brothers built their own custom 4-bit hardware digitizer to get sampled drum sounds into the C64 — the tool's name ('Drumeditor') reflects that it's built around sample/drum playback, not a conventional multi-voice music tracker. Source: C64-Wiki 'Brainstorm Software' article (https://www.c64-wiki.de/wiki/Brainstorm_Software).",
    "SIDId's 'DrumEditor' tag corresponds to V3.0 (1990); C64-Wiki separately documents a V4.0 (1994, both brothers credited for 'Code, Music') used for a 64'er magazine music course (issues 04/1993-10/1993 per C64-Wiki, i.e. straddling the V3/V4 line) — the two versions were NOT independently distinguished in this dataset (only one raw tag exists), so this card covers V3.0 as identified by SIDId and notes V4.0's existence without asserting it is the same signature.",
    "No public source code or format documentation was found for either version — the CSDb release is a distributable .d64 disk image only, not source. Every runtime field below is honestly TODO, not guessed.",
    "Census of all 10 files tagged 'DrumEditor' confirmed exactly: 9 in data/composers/hugenroth-andre-and-frank.json (Axel_F, Boom_end_sequence, Boom_title, Das_Omen, Populous_Tune, Funny_Fresh, Heavy_Hell, Smooth_Wings, Toggle_It) and 1 in data/composers/pvcf.json (Africa_Corps, Kai Walter) — matches the 9/1 split already recorded above, no correction needed."
  ],
  "sources": [
    "sidid:DrumEditor (name 'Drumeditor V3.0', authors Frank Hugenroth & André Hugenroth, released 1990 64'er-Disc/Markt & Technik, reference https://csdb.dk/release/?id=136179) — data/sidid.json",
    "CSDb release 136179, 'Drumeditor V3.0' / 'Drum_Editor_V3.d64', January 1990, code: Frank Hugenroth, music: Andrenator and Frank Hugenroth, 264 downloads, Type field 'C64 Tool' — https://csdb.dk/release/?id=136179",
    "C64-Wiki, 'Brainstorm Software' (the Hugenroth brothers' company, active 1989-1995, Ibbenbüren, Germany): confirms Frank Hugenroth = programmer, André Hugenroth ('Andrenator') = composer, credits a custom 4-bit digitizer they built themselves, and lists both Drumeditor V3.0 (1989/90) and V4.0 (1994) as separate tools — https://www.c64-wiki.de/wiki/Brainstorm_Software",
    "CSDb scener page (id 5802, The Hugenroth Brothers): confirms Drumeditor V4.0 (1994, both brothers credited 'Code, Music') vs V3.0 (1990, Frank Hugenroth credited 'Music') as distinct CSDb releases — https://csdb.dk/scener/?id=5802",
    "Local dataset: 10 files tagged DrumEditor across data/composers/*.json (9 by Hugenroth_Andre_and_Frank, 1 by PVCF); see knowledge/COVERAGE.md rank #29"
  ]
}
```

## Overview

Drumeditor V3.0 is a native C64 sample/drum-based music tool (confirmed by
CSDb's Type field "C64 Tool" on release 136179 and C64-Wiki's listing of it
among the Hugenroths' "C64-Programme" — no cross-platform host tool is
documented) by German brothers Frank Hugenroth (programming) and André
Hugenroth ("Andrenator", composition), released in 1990 on a 64'er-Disc
coverdisk (Markt & Technik). The pair, later
trading as "Brainstorm Software" (1989-1995), built their own custom 4-bit
hardware digitizer to get sampled drum sounds into the C64, and the tool
centers on that sample-playback workflow rather than a conventional
multi-voice tracker format. In this dataset it is a near-personal tool: 9 of
the 10 files tagged `DrumEditor` are by the Hugenroths themselves, with a
single outside use by Kai Walter (PVCF). A later Drumeditor V4.0 (1994) is
documented separately on CSDb/C64-Wiki but is not distinguished from V3.0 by
any raw player tag in this dataset, so this card covers V3.0 as identified by
SIDId.

## Quirks & gotchas

See the `quirks` array — concentrated authorship (9/10 files self-made), the
custom-hardware sample-digitizer angle, and the unresolved V3.0/V4.0 tag
ambiguity are the load-bearing facts here.

## Disassembly notes

None yet. No public source or format documentation was located — the only
CSDb artifact is a distributable `.d64` disk image, not source code or a
technical writeup. A representative file (e.g. `Axel_F.sid`, CSDb SID id
44016) would need to be pulled from HVSC and disassembled from scratch to
fill any Tier 3 field.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (authors,
release year/venue, CSDb release, usage concentration) are confirmed, all from
SIDId's cached entry, CSDb's release/scener pages, and C64-Wiki. No engine-level
facts (memory map, entry points, format) have been extracted; all such fields
are `TODO` pending a disassembly this pass deliberately did not attempt.

## Sources

See the `sources` array — SIDId's `DrumEditor` entry, CSDb release 136179 and
scener 5802, and the C64-Wiki "Brainstorm Software" article.

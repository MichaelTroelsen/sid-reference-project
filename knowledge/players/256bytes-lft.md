# 256bytes/LFT (player routine)

```json
{
  "id": "256bytes-lft",
  "name": "256bytes/LFT (player routine)",
  "aliases": ["256bytes/LFT"],
  "authors": ["Linus Åkesson (lft)"],
  "released": "2017 (Oldskool 4K Intro compo, Revision 2017 — 1st place)",
  "status": "in-progress",
  "platform": "Not a distributed tool or editor — a single, extreme-size-constrained (256-byte) C64 demo, 'A Mind Is Born', by Linus Åkesson (lft), in the same '256bytes/*' Player-ID tag family as the already-carded knowledge/players/agemixer-256bytes.md and knowledge/players/ice00-256bytes.md. Unlike those, this one is unusually well documented by the author himself (annotated hex dump + code snippets on his own site), which is why several runtime facts below are populated rather than left TODO.",
  "csdb_release": null,

  "memory": {
    "load_address": "$0801 (BASIC-line load address, compo-mandated) — per CSDb SID entry https://csdb.dk/sid/?id=54005 and author's own page.",
    "zero_page": "The entire 254-byte payload is copied into zero page ($00-$FD) by the init routine and executes from there for the rest of the run — confirmed by the author's own annotated listing: 'ldx #$fd / initloop / lda $802,x / sta $02,x / dex / bne initloop' (linusakesson.net/scene/a-mind-is-born/). No separate disassembly performed by this project.",
    "layout": "No order-list/pattern/instrument tables in the conventional tracker sense. The melody is generated in real time by an 8-bit linear-feedback shift register (LFSR) seeded at file offset $15 (seed value $41, retuned through the piece), whose output indexes a small frequency table; SID register values for the 3 voices (kick/bass, melody, ducking drone) are computed procedurally each frame rather than read from pattern data. Per the author's own technical writeup (see sources)."
  },
  "entry": {
    "init": "$08B2 (per CSDb SID entry https://csdb.dk/sid/?id=54005), reached via the BASIC bootstrap line '54271 SYS2225'; copies the program to zero page and sets up IRQ (per author's page).",
    "play": "$0000 (per CSDb SID entry) — the play routine itself lives in the relocated zero-page copy, called once per 60Hz (PAL) timer/raster interrupt tick per the author's page ('60 Hz timer interrupt', 112.5 BPM, 64 bars of 4/4). TODO: whether the IRQ source is CIA timer or raster-line was not confirmed from the sources checked in this pass."
  },
  "speed": "Single-speed, one play-routine call per 60Hz (PAL) interrupt tick per the author's page; CIA-vs-raster IRQ source unconfirmed (see entry.play). TODO: precise IRQ vector not verified by disassembly.",

  "data_format": {
    "order_list": "N/A — no order list; the piece has no song-position table at all, per the author's description of real-time LFSR-driven generation.",
    "patterns": "N/A — no pattern data; notes are generated algorithmically each frame rather than read from stored patterns.",
    "instruments": "TODO — no instrument-table concept found; SID envelope/pulse values appear to be computed procedurally rather than looked up (author's page discusses per-voice behaviour but no discrete 'instrument' data structure).",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "N/A — no command-byte effect system found; this is procedural/generative code, not a table-driven player. TODO if a future disassembly finds otherwise.",
    "commands": {}
  },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE '256 BYTES' LABEL IS ALMOST EXACTLY TRUE HERE (unlike the Ice00 sibling tag, where one of two files measured 263 bytes): CSDb lists this SID's data size as 254 ($00FE) bytes, and the production itself is a genuine 256-byte intro (the BASIC loader + 254-byte payload total 256 bytes) that won the Oldskool 4K Intro compo at Revision 2017. Source: https://csdb.dk/sid/?id=54005 and https://linusakesson.net/scene/a-mind-is-born/.",
    "THIS IS NOT THE SAME THING AS THE BARE 'LFT' TAG already carded at knowledge/players/lft.md. That card covers ~18 files of Åkesson's conventional (if hand-assembled) per-tune player routines from 2001-2014, predating his Blackbird tracker; this tag covers exactly 1 file — 'A Mind Is Born' (2017) — a fundamentally different kind of artifact: a competition-winning 256-byte demo whose 'player' is a real-time LFSR-driven procedural generator with no pattern data at all, executing entirely from zero page. lft.md's own quirks array already flagged this tag as out of scope for that card and pointed here.",
    "Music generation technique is genuinely notable and citable: melody comes from an 8-bit LFSR (not a composed sequence), voice 3 implements a sidechain-style 'ducking' drone that dips on every beat to mimic a compression effect, and the whole 254-byte payload relocates itself into zero page during init — all per the author's own annotated writeup, not assumed.",
    "Explicit license from the author: Creative Commons BY-NC-SA 4.0 ('For commercial use, please get in touch') — https://linusakesson.net/scene/a-mind-is-born/. No public disassembled/commented source (.asm) was published by the author; only the compiled .prg, an MP3, and the .sid file are offered for download. A third-party reconstructed assembly listing was referenced in that page's comments (external, unverified by this project).",
    "Extreme composer concentration: the sole locally-tagged file is by Lft himself (100%, 1/1), consistent with a personal, one-off, non-reusable size-coding entry rather than a shared tool.",
    "SIDId (data/sidid.json) has NO entry for '256bytes/LFT' — fingerprinted by this project's own Player-ID tooling only, same as the Agemixer and Ice00 sibling tags."
  ],
  "sources": [
    "Local dataset: data/composers/lft.json — 1 file tagged '256bytes/LFT' ('A Mind Is Born', csdb_id 54005); see knowledge/COVERAGE.md row #9 (1 file)",
    "data/sidid.json: no entry for '256bytes/LFT' (checked, absent)",
    "CSDb SID entry 54005 'A Mind Is Born': load $0801, init $08B2, play $0000, data size 254 ($00FE) bytes, SID model 8580, PAL, dated 2017: https://csdb.dk/sid/?id=54005",
    "Author's own technical writeup (annotated hex dump + code snippets: LFSR melody generation, zero-page relocation/execution, 60Hz timer-driven playback, CC BY-NC-SA 4.0 license): https://linusakesson.net/scene/a-mind-is-born/",
    "Hackaday coverage (2021-05-19), corroborates '256 bytes', 1st place at Revision 2017 Oldskool 4K Intro compo: https://hackaday.com/2021/05/19/linus-akessons-a-mind-is-born-commodore-64-demo-in-just-256-bytes/",
    "Boing Boing coverage (2017-04-21), contemporaneous coverage of the release: https://boingboing.net/2017/04/21/a-mind-is-born-computer-demo.html",
    "knowledge/players/lft.md — sibling card for the unrelated bare 'LFT' tag; its own quirks array already flags this '256bytes/LFT' tag as out of scope and points here (cited, not edited)",
    "knowledge/players/ice00-256bytes.md and knowledge/players/agemixer-256bytes.md — sibling '256bytes/*' cards establishing the tag-family evaluation methodology (cited, not edited)"
  ]
}
```

## Overview

`256bytes/LFT` is a Player-ID tag covering exactly one file in this dataset:
**"A Mind Is Born"**, Linus Åkesson's (lft) 256-byte C64 demo that won 1st
place in the Oldskool 4K Intro competition at Revision 2017. Unlike the bare
`LFT` tag (already carded at `knowledge/players/lft.md`, covering ~18 files of
conventional hand-assembled per-tune player routines from 2001-2014), this is
a fundamentally different artifact: a real-time, LFSR-driven procedural music
generator with no pattern data at all, whose entire 254-byte payload relocates
itself into and executes from zero page. It is unusually well documented for
a one-off size-coding entry — the author published an annotated hex dump and
technical breakdown of the melody-generation algorithm, memory layout, and
IRQ-driven playback — which is why this card reaches `status: in-progress`
rather than a bare identity stub.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is **not** the bare `LFT` tag
(different kind of artifact entirely — procedural/generative, not a
conventional player); the "256 bytes" label is essentially accurate here
(254-byte payload, unlike the Ice00 sibling tag where one file exceeded 256);
the melody is LFSR-generated, not composed/stored data; and the whole program
relocates to and runs from zero page after init.

## Disassembly notes

No disassembly performed by this project. All memory/entry/speed facts above
are sourced from the author's own annotated hex-dump writeup and from CSDb's
SID-entry metadata, not from an independent reassembly. `data_format` and
`effects` fields are marked N/A/TODO because the evidence indicates this is
procedural/generative code with no discrete pattern, instrument, or
effect-command tables — not because they weren't looked for.

## Verification

**Not verified — `status: in-progress`.** Several runtime facts (load/init/play
addresses, zero-page relocation, LFSR-based melody generation, 60Hz-driven
playback) are drawn directly from the author's own detailed technical
publication and from CSDb's SID-entry data, which is why this exceeds a bare
`stub`. No independent disassembly or `mcp-c64` trace has been performed, so
`status: verified` is not warranted.

## Sources

See the `sources` array — local composer-file aggregation, a CSDb SID-entry
lookup, the author's own annotated technical writeup, two contemporary press
pieces (Hackaday, Boing Boing), and the sibling `lft.md`/`ice00-256bytes.md`/
`agemixer-256bytes.md` cards (cited, not edited).

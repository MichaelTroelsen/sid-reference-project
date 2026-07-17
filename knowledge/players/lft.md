# LFT (Linus Åkesson hand-coded routines)

```json
{
  "id": "lft",
  "name": "LFT (Linus Åkesson hand-coded routines)",
  "aliases": ["LFT"],
  "authors": ["Linus Åkesson (lft)"],
  "released": "~2001-2014 in this dataset (per-tune hand-coded routines, predating Blackbird 2017; earliest dated file: 'Förklädd Gud (alpha)', 2001)",
  "status": "stub",
  "platform": "NOT a distributed tool or editor. Player-ID's bare 'LFT' tag fingerprints assorted per-tune, hand-written 6502 player routines that composer Linus Åkesson (lft) wrote for his own tunes before consolidating his workflow into the native tracker Blackbird (2017, see blackbird.md). The composer's own page states of Förklädd Gud (2001-2004 era): 'The parts are of course handcrafted in 6502 assembler.' Unlike Blackbird, there is no single fixed player binary — load/init/play addresses differ per file (see memory/entry below), consistent with ad hoc, tune-specific code rather than one reusable engine.",
  "csdb_release": null,

  "memory": {
    "load_address": "Varies per tune, NOT fixed — e.g. $4000 (Förklädd Gud (alpha), CSDb sid id 7493), $0817 (Summer Cloud, id 38178), $1000 (A Chipful of Love for You, id 48653; Specular Highlight, id 50400), $0900 (Scene Spirit, id 50759) — all read from each file's own CSDb/PSID header, not from a disassembly.",
    "zero_page": "TODO: no disassembly performed for this card.",
    "layout": "TODO: no order-list/pattern/table layout documented; these are hand-assembled per-tune, so there may be no shared layout at all."
  },
  "entry": {
    "init": "Varies per tune (from CSDb SID-entry pages, not a disassembly): $4000 (Förklädd Gud alpha), $152B (A Chipful of Love for You), $0900 (Scene Spirit), $1000 (Specular Highlight).",
    "play": "Varies per tune: $4003 (Förklädd Gud alpha), $0817 (Summer Cloud), $1200 (A Chipful of Love for You), $0903 (Scene Spirit), $1003 (Specular Highlight)."
  },
  "speed": "TODO: no CIA-vs-raster confirmation found; only load/init/play addresses were available from CSDb SID-entry pages, not a speed model.",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: no command-byte encoding documented. The composer's own page (linusakesson.net/music/sidstuff/forkladdgud.php) says of Förklädd Gud only that 'the envelope and timing of each note has been carefully tweaked' by hand, not that it uses a table-driven effect system.",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "This is almost certainly NOT the same thing as the 'Blackbird/LFT' tag already carded at knowledge/players/blackbird.md. Blackbird is a named, versioned, publicly released native tracker (CSDb releases 153555/161554, 2017-2018) with its own SIDId entry (name 'Blackbird 1.0', a reference URL, a comment). The bare 'LFT' tag's SIDId entry, by contrast, has ONLY an author field ('Linus Åkesson (LFT)') — no name, no release, no reference — consistent with Player-ID fingerprinting a family of unnamed, non-identical routines rather than one product. All 18 locally-tagged 'LFT' files date to CSDb release years 2001-2014 (Förklädd Gud alpha 2001, Summer Cloud 2007, A Chipful of Love for You 2013, Scene Spirit and Specular Highlight both 2014) — entirely BEFORE Blackbird's 2017 debut — and their load/init/play addresses are all different from each other, which a single distributed tool would not produce.",
    "This strongly matches Blackbird's own author description of his prior workflow: 'For some time, I've been making my C64 music using hacked-together cross-platform tools. Here the various features of those tools have been brought together into a polished native tracker' (quoted already in blackbird.md). No source or manual explicitly says 'the LFT tag = those prior tools', so per this project's edge-evidence rule this is recorded here as a strong circumstantial hypothesis, NOT as a `derives_from`/`successor_of` edge in the JSON — there is nothing citable connecting the two by name.",
    "Extreme composer concentration: all 18 locally-tagged files are by Lft himself (100%, 1/1 composers) — the tightest possible concentration, consistent with genuinely personal, uncirculated per-tune code rather than a tool anyone else could have adopted.",
    "Not open-source in any conventional sense — Förklädd Gud's source is offered as a personal download ('the seven individual SID tunes... with source code' per the composer's own page) but no license statement was found, and there is no single repository for an 'LFT player' as such since each tune's routine differs.",
    "A separate, unrelated raw tag '256bytes/LFT' (1 file in this dataset, not investigated for this card) also exists in knowledge/COVERAGE.md — almost certainly tied to Åkesson's 256-byte C64 demo work (e.g. 'A Mind Is Born', covered by Hackaday in 2021), not to music playback. Out of scope here; flagged so a future pass doesn't conflate it with this tag."
  ],
  "sources": [
    "sidid:LFT (author 'Linus Åkesson (LFT)', no name/released/reference fields) — data/sidid.json",
    "Local dataset: 18 files tagged 'LFT', all by composer 'Lft' (100% concentration) — aggregated from data/composers/Lft.json's folder[] records",
    "CSDb SID entry 7493 'Förklädd Gud (alpha)' (2001, load/init $4000, play $4003): https://csdb.dk/sid/?id=7493",
    "CSDb SID entry 38178 'Summer Cloud' (2007, load/play $0817): https://csdb.dk/sid/?id=38178",
    "CSDb SID entry 48653 'A Chipful of Love for You' (2013, load $1000, init $152B, play $1200): https://csdb.dk/sid/?id=48653",
    "CSDb SID entry 50759 'Scene Spirit' (2014, load/init $0900, play $0903): https://csdb.dk/sid/?id=50759",
    "CSDb SID entry 50400 'Specular Highlight' (2014, load/init $1000, play $1003): https://csdb.dk/sid/?id=50400",
    "Composer's own page on Förklädd Gud ('handcrafted in 6502 assembler', source available): https://www.linusakesson.net/music/sidstuff/forkladdgud.php",
    "Composer's SID music index (tune list, tools mentioned: Blackbird, Qwertuoso, Sidreloc): https://www.linusakesson.net/music/sidstuff/index.php",
    "Composer's software page (confirms Blackbird 2017 as his first named/released tracker; no earlier named music tool listed): https://www.linusakesson.net/software/",
    "knowledge/players/blackbird.md — sibling card for the later, named, publicly released tracker by the same author"
  ]
}
```

## Overview

"LFT" is a bare Player-ID tag that fingerprints a handful of **hand-written,
per-tune 6502 player routines** by C64 musician Linus Åkesson (lft), not a
distributed tool. In this dataset it covers 18 files, all by Lft himself
(100% concentration — the tightest possible), spanning CSDb release years
2001-2014, each with a different load/init/play address. That timeframe
predates Åkesson's first named, publicly released, versioned tracker,
**Blackbird** (2017 — already carded separately at `blackbird.md`), and his
own page on one of these tunes (Förklädd Gud) states the parts were
"handcrafted in 6502 assembler." This card treats "LFT" as the composer's
pre-Blackbird personal-routine family — distinct from, and very likely the
uncredited precursor to, Blackbird — rather than assuming the two tags name
the same thing.

## Quirks & gotchas

See the `quirks` array — the load-bearing points: this is **not** the
`Blackbird/LFT` tag already carded (different SIDId entry shape, different
years, no single fixed load address); it strongly resembles the "hacked-
together cross-platform tools" Blackbird's own description says it replaced,
but that connection is circumstantial and NOT asserted as a formal `edges`
relationship; and usage is **100% by the author himself** in this dataset.

## Disassembly notes

None performed. Every address in `memory`/`entry` above comes from each
individual file's own CSDb SID-entry page (which reflects that file's PSID
header), not from reading the code. Because the addresses differ file-to-file,
there may be no single shared routine to disassemble at all — this would need
per-file investigation, not one representative rip.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
per-file load/init/play addresses as published on CSDb, composer concentration,
the "handcrafted in 6502 assembler" quote, and the temporal relationship to
Blackbird) are confirmed. No memory map, data format, or effect encoding is
claimed for any single "LFT player" because the evidence suggests there isn't
one — each tune appears to have its own hand-assembled routine.

## Sources

See the `sources` array — SIDId (`data/sidid.json`), the local per-composer
file aggregation (`data/composers/Lft.json`), five individual CSDb SID-entry
pages, the composer's own site (music index and Förklädd Gud page), and the
sibling `blackbird.md` card.

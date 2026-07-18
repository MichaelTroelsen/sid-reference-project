# EMS (Electronic Music System)

```json
{
  "id": "ems-odie",
  "name": "EMS (Electronic Music System)",
  "aliases": ["EMS/Odie", "EMS_V7.03", "EMS_V9.x", "EMS_V10.x", "(EMS_V10.x)", "The Electronic Music System"],
  "authors": ["Sean Connolly (Odie)"],
  "released": "1997 (V7.03, 18 Jan 1997); V9.x / V10.x later",
  "status": "in-progress",
  "platform": "Native C64 music editor+replay. Open-source status unknown (Cosine site may host downloads).",
  "csdb_release": 4649,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "'EMS' = Electronic Music System (CSDb title 'The Electronic Music System V7.03'). Author Sean Connolly (handle 'Odie'), UK, of Cosine and Sonix Systems.",
    "Version line: V7.03 (18 Jan 1997, Cosine; music by Odie & Skywave, gfx by The Magic Roundabout), plus V9.x and V10.x (SIDId-indexed) — development continued past 1997; earlier versions implied by the '7.03' numbering.",
    "Open-source/docs UNKNOWN: Cosine maintains a live site (cosine.org.uk) that likely hosts EMS downloads, but its JS-rendered pages weren't fetchable during research — verify whether source is published (TODO).",
    "A search snippet claiming 'Meek worked on EMS from V4.3 onwards' is UNVERIFIED — not recorded.",
    "Replay internals all UNKNOWN — TODO. No SIDId technique comment. 197 files. (A c64.com Odie interview exists but was TLS-blocked during research — a lead for bio/lineage.)"
  ],
  "sources": [
    "CSDb EMS V7.03 (credits/date/group): https://csdb.dk/release/?id=4649",
    "sidid.nfo (author/tags): https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Demozoo scener (Odie): https://demozoo.org/sceners/50015/",
    "Cosine official site (dev's own; not fetchable via WebFetch, needs a browser): cosine.org.uk",
    "sidid:EMS/Odie (Sean Connolly (Odie))",
    "Local dataset: 197 files tagged EMS/Odie (see knowledge/COVERAGE.md)"
  ]
}
```

## Overview

EMS — "The Electronic Music System" — is a native C64 music editor+replay by
**Sean Connolly ("Odie")** of Cosine/Sonix Systems (UK). V7.03 shipped Jan 1997,
with later V9.x/V10.x. 197 files here.

## Quirks & gotchas

See the `quirks` array — an open lead is whether **Cosine's live site publishes
the source** (couldn't fetch its JS pages), and a rejected unverified
"Meek/V4.3" contributor claim. Internals `TODO`.

## Disassembly notes

None; internals undocumented. Disassemble an EMS-tagged `.sid`, or chase the
Cosine site / c64.com Odie interview (both blocked during research).

## Verification

**Playback + entry points LOCALLY CONFIRMED (2026-07-13) — `status: in-progress`.** Traced a real HVSC EMS/Odie `.sid` (load $7000, init $7000, play $7003, 356 register writes / 50 frames) — the replay runs; entry addresses are per-file. Author, name, and version line confirmed;
all runtime fields `TODO`.

## Sources

See the `sources` array — CSDb V7.03, SIDId, Demozoo, and the Cosine site lead.

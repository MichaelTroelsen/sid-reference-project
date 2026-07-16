# Virtuoso

```json
{
  "id": "virtuoso",
  "name": "Virtuoso",
  "aliases": ["Virtuoso"],
  "authors": ["Hein Holt (Hein / Vision)"],
  "released": "2015-2019 (V0.96 20 Jun 2015 -> V1.02 26 Jan 2019)",
  "status": "stub",
  "platform": "Native C64 tool (on-machine music editor/tracker with a live keyboard 'jam' mode), distributed as bootable .d64 disk images. No cross-platform/PC editor found.",
  "csdb_release": 139247,

  "memory": {
    "load_address": "TODO: $xxxx (no source/disassembly available)",
    "zero_page": "TODO: unknown; a CSDb comment from the author mentions a play-routine bug from 'a forgotten zp when optimizing the code' in V0.96->V0.97, but no addresses are given",
    "layout": "TODO"
  },
  "entry": {
    "init": "TODO",
    "play": "TODO"
  },
  "speed": "TODO",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "Composer concentration is heavy but not exclusive: of 61 tagged files in this dataset, 51 (~84%) are by the author Hein Holt himself; the remaining 10 spread across 4 other composers (NecroPolo, PSC64, Vincenzo, Viralbox) per `data/composers/*.json`. Reads as a personal tool that a handful of other scene musicians picked up, not a purely private routine.",
    "PUBLIC but source not found. Seven versioned releases exist on CSDb (V0.96 through V1.02, 2015-2019), each as a bootable .d64 disk image, but no 6502 source archive was located on CSDb or the web — treat as closed/undocumented at the engine level, same caveat as deflemask.md's 'public != open-source'.",
    "Has a live-performance 'jam' keyboard mode, called out favorably by users: 'Hein's Virtuoso also sports a keyboard to jam a bit' (Lemon64 forum) and CSDb commenters praised its 'layered jam mode'.",
    "V0.96 was explicitly released as a release-candidate before the author's holiday; V0.97 (12 Jul 2015) fixed an editing bug the author attributed to 'a forgotten zp when optimizing the code' — confirms zero-page-sensitive code exists, but no addresses are documented anywhere found.",
    "NTSC playback was reported broken by a user on the V0.96 CSDb comments; the author indicated NTSC support was not planned at the time."
  ],
  "sources": [
    "sidid:Virtuoso (author Hein Holt; released '2015 Vision'; reference https://csdb.dk/release/?id=139247) - deepsid_dl/sidid.nfo / data/sidid.json",
    "CSDb release, Virtuoso V0.96 (Vision, 20 Jun 2015), credits Code/Music/Graphics: Hein (Vision): https://csdb.dk/release/?id=139247",
    "CSDb release history (search results): Virtuoso V0.97 (12 Jul 2015), V0.98 (5 Mar 2016), V0.99 (12 Jul 2016), V1.00 (1 Mar 2017), V1.01 (20 May 2017), V1.02 (26 Jan 2019), all group Vision (VSN)",
    "Lemon64 forum, 'C64 music program' thread: quote 'Hein's Virtuoso also sports a keyboard to jam a bit' - https://www.lemon64.com/forum/viewtopic.php?t=70648",
    "Local dataset: 61 files tagged Virtuoso across 5 composers (see knowledge/COVERAGE.md and data/composers/{hein-holt,necropolo,psc64,vincenzo,viralbox}.json)"
  ]
}
```

## Overview

Virtuoso is a native Commodore 64 music editor/tracker written by Hein Holt
(Hein, of the group Vision) and released as a series of versioned, bootable
`.d64` disk images between 2015 and 2019 (V0.96 through at least V1.02). It is
notable in the scene for a live "jam" keyboard mode for real-time performance,
well-received on CSDb (9.9/10 user rating on the initial release). In this
dataset it is used by 61 files, 51 of them (~84%) by Holt himself and the rest
by four other composers (NecroPolo, PSC64, Vincenzo, Viralbox) — a personal
tool with modest but real outside adoption, not a purely private routine.

## Quirks & gotchas

See the `quirks` array. The load-bearing points: (1) composer concentration is
heavy (84% self-authored) but not total, so this reads as author-tool-with-
some-adoption rather than a one-off in-game routine; (2) despite being freely
downloadable across seven CSDb releases, no 6502 source was found anywhere —
this is a **public, not open-source** case like `deflemask.md`, so every
runtime field below stays `TODO`; (3) the author's own bug-fix comment
between V0.96 and V0.97 ("a forgotten zp when optimizing the code") confirms
zero-page-sensitive code exists in the play/edit routine, but gives no
addresses, so it is recorded only as a quirk, not in `memory.zero_page`.

## Disassembly notes

None performed. No public source or existing disassembly was found; the only
route to Tier 3 facts would be disassembling a Virtuoso-tagged `.sid`'s
init/play from its PSID header and tracing it through `sidm2-siddump`, which
is out of scope for this pass.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts are
confirmed, from the cached SIDId entry, the CSDb release page/history, and a
Lemon64 forum quote. No memory map, entry point, or data format has been
examined; all Tier 3 fields are honestly `TODO`.

## Sources

See the `sources` array — the cached SIDId entry, the CSDb release page for
V0.96 (id 139247) plus the release-history search results for V0.97-V1.02,
the Lemon64 forum thread, and the local per-composer file counts.

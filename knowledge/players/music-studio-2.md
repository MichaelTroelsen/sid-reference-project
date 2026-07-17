# Music Studio 2 (Element 114 Software / Martin Piper)

```json
{
  "id": "music-studio-2",
  "name": "Music Studio 2",
  "aliases": ["Element114Studio_2.0"],
  "authors": ["Martin Piper", "Simon White"],
  "released": "2010 (v2.0.0.16, 12 May 2010)",
  "status": "stub",
  "platform": "Cross-platform PC (Windows) editor producing C64 SID output via reSID-FP emulation — CSDb classifies the release itself as \"Other Platform C64 Tool\" (not a native C64 program). Successor to the native C64 tool \"Music Studio Plus\" (Element 114 Software) released one month earlier by the same author.",
  "csdb_release": 91544,

  "memory": {
    "load_address": "TODO: not applicable in the classic sense — this is a PC-hosted editor; a per-tune runtime SID player would need to be extracted/disassembled from an exported .sid",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
  },
  "speed": "TODO: not determined",

  "data_format": {
    "order_list": "TODO",
    "patterns": "TODO — CSDb user comments (Twoflower, 2010-05-13) describe pattern numbers and 'supercommands' (repeat, transpose, etc) mixed together in a single pattern list, with individually-settable pattern lengths",
    "instruments": "TODO",
    "wavetable": "TODO",
    "pulsetable": "TODO",
    "filtertable": "TODO"
  },
  "effects": {
    "encoding": "TODO: not disassembled. CSDb user comments describe 'supercommands (repeat, transpose, etc) mixed in the patternlist with the numbers of the patterns' as a source of interface confusion — see quirks",
    "commands": {}
  },

  "edges": {
    "derives_from": [],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "PLATFORM NUANCE: this is a Windows PC-native editor (VC2008-compiled, per the release's own troubleshooting comment about missing DLLs), not a C64 program — CSDb itself files the release under the 'Other Platform C64 Tool' category. It uses reSID-FP for accurate SID emulation while composing. Source: CSDb release page https://csdb.dk/release/?id=91544 (Type: 'Other Platform C64 Tool').",
    "LINEAGE LEAD, not asserted as an edge: a sibling raw tag 'Element114Studio_1.0' (16 files, SIDId name 'Music Studio Plus', authors Martin Piper & Alan Peters, 1992/2010 per two differently-dated SIDId records) and 'Element114Studio_1.2' (6 files) are NOT carded in this batch (out of scope per task instructions). CSDb confirms 'Music Studio Plus 1.2' (release 90404, 6 April 2010, type plain 'C64 Tool' i.e. NATIVE C64, credits: Alan Peters of DarkStar Systems Software + Martin Piper) was released exactly one month before this 'Music Studio 2.0.0.16' (91544, 12 May 2010, Martin Piper + Simon White, now 'Other Platform'). This strongly suggests Music Studio 2 is the direct successor of Music Studio Plus, with the same author (Martin Piper) moving the tool from native-C64 to PC-hosted between the two releases — but this card does not assert a formal `derives_from` edge because the 1.0/1.2 tag has no card yet to point at. Revisit when Element114Studio_1.0/1.2 gets its own card.",
    "SOURCE IS PUBLIC BUT NOT OPEN-SOURCE: Martin Piper's own site (wellytop.com/C64.html) states 'All of the source code is available from: ... C64.zip: All C64 related sources including Berzerk Redux and Music Studio', and the code also appears in his GitHub repo github.com/martinpiper/C64Public (folder `MusicStudio2`). However that repo's License.txt reads: 'All original code copyright Martin Piper (martin.piper@gmail.com) except some external libraries where code by others is included. Ask me before using it.' — i.e. visible/public but under an explicit ask-permission-first restriction, not a recognized open-source license (no MIT/GPL/etc). Do not treat as freely reusable.",
    "TOOL EVOLVED WELL BEYOND THIS TAGGED VERSION: later CSDb releases exist for Music Studio 2.1.0.7 (id 93693, 30 Aug 2010) and 2.2.0.3 (id 156437, 2017), and the tool is still distributed today (v2.2.0.9, March 2024) on martin-piper.itch.io/musicstudio, calling itself a 'Windows-based SID music creator' using RESID-FP with 6581/8580 emulation. Only v2.0.0.16 is fingerprinted by the 'Element114Studio_2.0' Player-ID tag in this dataset's files; later versions may carry different signatures not investigated here.",
    "COMPOSER CONCENTRATION: 20 files in this dataset tagged exactly 'Element114Studio_2.0', across only 4 composers — Richard Bayliss (10, 50%), NecroPolo (8, 40%), Chabee (1), and Martin Piper himself (1, the tool's own author). All three non-author composers (Chabee, NecroPolo, Richard/Bayliss) are also directly credited on the CSDb release as its music/test contributors — i.e. this Player-ID tag's usage in the wild is almost entirely the tool's own launch/beta test tunes, not independent adoption. Source: aggregated `player` tags across `data/composers/*.json`; credits cross-checked against CSDb release 91544.",
    "No public disassembly, format spec, or Codebase64/HVSC technical note found for the runtime engine. All Tier 3 fields are honestly TODO — this is an identity/provenance-only stub."
  ],
  "sources": [
    "sidid:Element114Studio_2.0 (name 'Music Studio 2', author Martin Piper, released 2010 Element 114 Software, reference https://csdb.dk/release/?id=91544)",
    "CSDb release 91544 — Music Studio 2.0.0.16, credits, type, downloads: https://csdb.dk/release/?id=91544",
    "CSDb release 90404 — Music Studio Plus 1.2 (predecessor, native C64 type, 6 April 2010): https://csdb.dk/release/?id=90404",
    "CSDb release 93693 — Music Studio 2.1.0.7 (next version, Sept 2010): https://csdb.dk/release/?id=93693",
    "CSDb release 156437 — Music Studio 2.2.0.3 (2017 version): https://csdb.dk/release/?id=156437",
    "Martin Piper's own site, confirms cross-platform PC editor + source availability statement: http://www.wellytop.com/C64.html",
    "GitHub — github.com/martinpiper/C64Public (folder MusicStudio2) and its License.txt (\"Ask me before using it\", no open-source license): https://github.com/martinpiper/C64Public",
    "itch.io — current distribution, describes tool as Windows-based SID music creator using RESID-FP: https://martin-piper.itch.io/musicstudio",
    "Local dataset: 20 files tagged Element114Studio_2.0 across 4 composers; 42 files across the whole Element114Studio_ family (3 raw tags) — see knowledge/COVERAGE.md and data/composers/*.json"
  ]
}
```

## Overview

`Element114Studio_2.0` is the Player-ID tag for **Music Studio 2** (v2.0.0.16,
12 May 2010), a Windows PC editor by Martin Piper (code) and Simon White
(HVSC Crew, code), which composes SID tunes using reSID-FP emulation. CSDb
itself categorizes the release as an "Other Platform C64 Tool" rather than a
native C64 program — it followed, one month after, Piper's native-C64 tool
"Music Studio Plus" (the uncarded sibling tags `Element114Studio_1.0`/`1.2`),
suggesting the tool moved from C64-native to PC-hosted between those two
releases. In this dataset it is used almost exclusively by the tool's own
launch-era contributors (Richard Bayliss, NecroPolo, Chabee — all three also
credited on the CSDb release itself) plus one tune by Piper, 20 files total
(42 across the whole `Element114Studio_` family of three raw tags). Source
code is publicly visible (Piper's own site, and GitHub `martinpiper/C64Public`)
but explicitly not open-source — its License.txt requires asking permission
first.

## Quirks & gotchas

See the `quirks` array — the load-bearing ones: this is a **cross-platform PC
editor, not a native C64 program** (CSDb's own "Other Platform" category);
its **predecessor "Music Studio Plus" is a real lineage lead but out of scope
for this card** (no `derives_from` edge asserted since the sibling tag has no
card to point at yet); the source is **public but not open-source**
(ask-permission-only license); and the tool **kept evolving well past this
tagged version** (still distributed today as v2.2.0.9).

## Disassembly notes

None performed. This is a PC-hosted composing tool, not a C64-resident
player in the classic sense — any Tier 3 runtime facts would require first
identifying what runtime player routine (if any) it embeds into an exported
`.sid`, then disassembling that. Not attempted in this pass.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release date, CSDb credits, platform classification, source-availability and
its restrictive license) were confirmed, from the cached SIDId entry and
direct CSDb/GitHub/author-site research. No runtime engine facts were
extracted or guessed.

## Sources

See the `sources` array — the cached SIDId entry, three CSDb release pages
(91544, 90404, 93693, 156437), Martin Piper's own site, his GitHub repo and
its license file, and the current itch.io distribution page.

# 4-Mat Tiny 2

```json
{
  "id": "4-mat-tiny-2",
  "name": "4-Mat Tiny 2",
  "aliases": ["4-Mat_tiny_2"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "No formal tool-release date found (not a titled/published tool). Earliest attested use: 2007 — 'And Again' (CSDb sid id 37628) Released='2007 Ate Bit'. Later files: 'Mus1k' (id 42580) Released='2008 Orb'; 'Spy vs. Spy 3 Cover' (id 42575) Released='2009 Ate Bit'. This is an earliest-attested-use range (2007-2009), not a release date. Source: CSDb webservice type=sid, ids 37628/42580/42575, via scripts/lib/csdb-client.js, checked 2026-07-31.",
  "status": "stub",
  "platform": "Native C64, in-house/experimental replay routine — not a distributed editor or named tool. None of this tag's 3 files' CSDb 'UsedIn' entries reference a player/tool release (checked via CSDb webservice, ids 37628/42580/42575, 2026-07-31); no entry in sidid.nfo either. This card's own web search of csdb.dk/lemon64.com/forum64.de could not be completed this session (WebSearch tool budget exhausted; CSDb HTML pages 503'd on direct fetch) so is not independently re-confirmed for this exact tag, but the sibling '4-Mat_tiny_1' card (same author, same 'tiny' naming family, researched with working web access) found no dedicated CSDb tool/release entry under '4-Mat_tiny' and no such credit on 4-Mat's CSDb scener page (https://csdb.dk/scener/?id=3913) — see knowledge/players/4-mat-tiny-1.md.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO",
    "zero_page": "TODO",
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
    "SIDId's sidid.nfo has NO entry for '4-Mat_tiny_2' (checked) — this is a Player-ID-only signature, not a documented/published tool.",
    "SIBLING TAG, kept SEPARATE: '4-Mat_tiny_1' is already carded at knowledge/players/4-mat-tiny-1.md (that card notes '4-Mat_tiny_2' as a sibling it found but did not investigate). This card is that follow-up. The two are numbered variants of a small family of 'tiny' routines by the same author — not proven to share code, so NOT merged into one card/alias set; each keeps its own id per this project's evidence rule.",
    "Also distinct from '4-Mat/MiniSeq' (knowledge/players/4-mat-miniseq.md) and '4-Mat/TEDplay' (knowledge/players/4-mat-tedplay.md), two further separately-tagged, separately-carded personal routines by the same author — no evidence connects any of these four tags to each other.",
    "Single-composer concentration: all 3 locally-tagged files are by 4-Mat himself, one of them ('And Again') titled plainly — consistent with a personal/experimental routine rather than a released, titled tool (per data/composers/4-mat.json).",
    "Full census of all 3 tagged files (CSDb sid ids in parens), read via CSDb webservice type=sid: 'And Again' (37628, 2007 Ate Bit), 'Mus1k' (42580, 2008 Orb, 4 subtunes), 'Spy vs. Spy 3 Cover' (42575, 2009 Ate Bit). Spans 2007-2009 attested use, not a single release.",
    "PSID header values are NOT consistent across the 3 tagged files (unlike the sibling '4-Mat_tiny_1' tag, which is uniform): 'And Again' has LoadAddr $1000/InitAddr $1000/PlayAddr $1003 (matching tiny_1's headers exactly); 'Spy vs. Spy 3 Cover' has LoadAddr $1000/InitAddr $1000 with no PlayAddr returned by the webservice; 'Mus1k' is completely different — LoadAddr $0400 (1024), InitAddr $0734 (1844), PlayAddr $03BD (957). This is header metadata only, not a disassembly fact — recorded here, not in memory/entry, which remain TODO. The divergence suggests 'Mus1k' may not actually share code with the other two despite carrying the same Player-ID tag (unconfirmed without disassembly).",
    "Tier 2 web research for this specific tag was not independently completed this session: WebSearch's tool budget was exhausted and direct WebFetch of csdb.dk pages returned HTTP 503 (a known intermittent CSDb HTML failure mode). The 'platform' field's provenance claim leans on the sibling '4-Mat_tiny_1' card's successful research instead — a future pass with a fresh search budget should re-attempt a dedicated lemon64.com/forum64.de/codebase64.org search for '4-Mat_tiny_2' specifically."
  ],
  "sources": [
    "sidid.nfo checked, no matching entry for '4-Mat_tiny_2': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "Local dataset: 3 files tagged 4-Mat_tiny_2, all by 4-Mat (Matt Simmonds) — data/composers/4-mat.json",
    "CSDb webservice (type=sid) records for all 3 files, ids 37628, 42580, 42575, fetched via scripts/lib/csdb-client.js on 2026-07-31 (csdb.dk/sid/?id=<id>)",
    "Sibling card knowledge/players/4-mat-tiny-1.md — first flagged this tag's existence, and its own web research (csdb.dk scener page, no dedicated tool entry) is cited by analogy since this session's web search budget was exhausted",
    "Sibling cards knowledge/players/4-mat-miniseq.md, knowledge/players/4-mat-tedplay.md — other separately-tagged personal routines by the same author"
  ]
}
```

## Overview

`4-Mat_tiny_2` is a raw Player-ID tag for one of several small, likely
experimental replay routines by **Matt Simmonds**, handle **4-Mat**, a
long-running UK SID composer. It is the numbered sibling of the already-carded
`4-Mat_tiny_1` (knowledge/players/4-mat-tiny-1.md), which flagged this tag's
existence but did not investigate it. All 3 locally-tagged files are by 4-Mat
himself. A full census of all 3 files (CSDb webservice `Released` fields)
shows attested use spanning 2007-2009, with no dedicated CSDb tool/release
page found under this name and no entry in sidid.nfo — consistent with a
native C64 in-house routine rather than a distributed editor, though this
session could not independently re-run the web search that established that
for the sibling tag (see quirks).

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has no entry for this tag at
all; (2) it is kept as a separate card from `4-Mat_tiny_1` despite the shared
naming scheme, since no evidence proves shared code between the two; (3) two
further distinct 4-Mat personal-routine tags exist in this project
(`4-Mat/MiniSeq`, `4-Mat/TEDplay`) with no known connection to this one;
(4) unlike `4-Mat_tiny_1`, this tag's own 3 files do NOT share consistent
PSID headers — one ('Mus1k') has a completely different load/init/play
address set than the other two, hinting the tag may cover more than one
actual routine; (5) this pass's own web research was blocked (WebSearch
budget exhausted, CSDb HTML 503s) and leans on the sibling card's findings
by analogy rather than a fresh independent check.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/4-mat.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb webservice
records for all 3 censused files, the local composer aggregation, and the
sibling `4-mat-tiny-1.md` card (cited by analogy for the platform claim,
since this pass's own web search budget was exhausted).

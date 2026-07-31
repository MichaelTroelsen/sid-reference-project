# 4-Mat Tiny 3

```json
{
  "id": "4-mat-tiny-3",
  "name": "4-Mat Tiny 3",
  "aliases": ["4-Mat_tiny_3"],
  "authors": ["Matt Simmonds (4-Mat)"],
  "released": "No formal tool-release date found (not a titled/published tool). Both of the 2 tagged files ('Type Mismatch', CSDb sid id 37627; 'Type Mismatch (Remix)', id 37626) carry the SAME CSDb Released field: '2007 Ate Bit'. Full census (2 of 2 files). This is an earliest/only-attested-use date, not a confirmed tool release date. Source: CSDb webservice type=sid, ids 37627/37626, via scripts/lib/csdb-client.js, checked 2026-07-31.",
  "status": "stub",
  "platform": "Native C64, likely in-house/experimental replay routine — not a distributed editor or named tool. Neither of the 2 tagged files' CSDb 'UsedIn' entries reference a player/tool release (both are demo/intro releases: 'Type Mismatch' 1K intro, and the Remix used in 6 later demos/intros 2011-2024) — checked via CSDb webservice, ids 37627/37626, 2026-07-31; no entry in sidid.nfo either. This session's own web research could not independently confirm the absence of a dedicated CSDb tool page for this exact tag: WebSearch returned 'session has used its web search budget (200 of 200)' and direct WebFetch of csdb.dk/scener/?id=3913 returned HTTP 503 (both attempted 2026-07-31). The claim leans on the sibling '4-Mat_tiny_1' card's successful, independently-run search (no dedicated CSDb tool/release entry under '4-Mat_tiny', no such credit on 4-Mat's CSDb scener page https://csdb.dk/scener/?id=3913) and the analogous, likewise-blocked '4-Mat_tiny_2' card — see knowledge/players/4-mat-tiny-1.md and knowledge/players/4-mat-tiny-2.md.",
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
    "SIDId's sidid.nfo has NO entry for '4-Mat_tiny_3' (checked) — this is a Player-ID-only signature, not a documented/published tool. Mirrors the already-carded sibling knowledge/players/4-mat-tiny-1.md, which found the same absence for '4-Mat_tiny_1' and '4-Mat_tiny_2'.",
    "Part of a small numbered family of 'tiny' routines by 4-Mat in the local dataset: 4-Mat_tiny_1 (5 files, carded separately), 4-Mat_tiny_2 (3 files: 'And Again', 'Mus1k', 'Spy vs. Spy 3 Cover' — NOT yet carded as of this pass), and this tag, 4-Mat_tiny_3 (2 files). Following the established precedent in knowledge/players/4-mat-tiny-1.md, each numbered variant is kept as a SEPARATE card rather than merged, since no evidence establishes whether they are the same code or genuinely distinct routines.",
    "100% single-composer concentration: both locally tagged files ('Type Mismatch', 'Type Mismatch (Remix)') belong to 4-Mat himself (data/composers/4-mat.json). 4-Mat is Matt Simmonds, a long-running, prolific UK SID composer also documented elsewhere in this dataset via GoatTracker, Music_Assembler, the separately-carded 4-Mat/MiniSeq (knowledge/players/4-mat-miniseq.md), and the Michael_Delaney driver (per knowledge/players/michael-delaney.md, which notes 4-Mat as one of its two credited users).",
    "'Type Mismatch' and its remix suggest a demo/compo-scene 4K- or size-limited context, consistent with the 'tiny' family being quick experimental/size-coding routines rather than a released, titled tool.",
    "Full census of BOTH tagged files (CSDb sid ids in parens), read via CSDb webservice type=sid: 'Type Mismatch' (37627, Released='2007 Ate Bit', used in the 1st-place 'Type Mismatch' C64 1K Intro at Forever 8 2007) and 'Type Mismatch (Remix)' (37626, Released='2007 Ate Bit', used in 6 later demos/intros spanning 2011-2024, e.g. 'Pimp My Snail', 'Zeptotro', 'Monotro 2', 'Replicate'). Unlike sibling _tiny_2, both files here agree on the same year (2007) — still not a formal tool-release date, since no dedicated CSDb tool/release page exists for this tag.",
    "PSID header values gathered during the census are NOT identical across the 2 files (header metadata only, not a disassembly fact — kept out of memory/entry, which remain TODO): 'Type Mismatch' has LoadAddr $0FF0 (4080) / InitAddr $0FF0, with no PlayAddr value returned by the webservice; 'Type Mismatch (Remix)' has LoadAddr $1000 (4096) / InitAddr $1000 / PlayAddr $1003 (4099) — the same $1000/$1000/$1003 pattern seen across all 5 censused '4-Mat_tiny_1' files. This divergence (mirroring the header inconsistency found within '4-Mat_tiny_2') hints the tag may not cover a single fixed routine, unconfirmed without disassembly.",
    "This session's independent web research was blocked: WebSearch's 200-call session budget was already exhausted, and direct WebFetch of csdb.dk/scener/?id=3913 returned HTTP 503 (a known intermittent CSDb HTML failure mode, also hit by the '4-Mat_tiny_2' pass). The 'platform' field therefore leans on the sibling '4-Mat_tiny_1' card's successful, independently-run search rather than a fresh check of this exact tag — a future pass with budget/HTML access should re-attempt a dedicated lemon64.com/forum64.de/codebase64.org search for '4-Mat_tiny_3' specifically."
  ],
  "sources": [
    "SIDId sidid.nfo checked, no matching entry for '4-Mat_tiny_3': https://github.com/cadaver/sidid/blob/master/sidid.nfo",
    "data/composers/4-mat.json (folder[] listing all 4-Mat_tiny_1/2/3 and other player tags for this composer)",
    "CSDb webservice (type=sid) records for both files, ids 37627 and 37626, fetched via scripts/lib/csdb-client.js on 2026-07-31 (csdb.dk/sid/?id=<id>)",
    "Sibling KB cards, cross-checked for precedent (separate-card-per-variant, no forced merge) and cited by analogy for the platform claim since this pass's own web search was blocked: knowledge/players/4-mat-tiny-1.md, knowledge/players/4-mat-tiny-2.md",
    "Local dataset: 2 files tagged 4-Mat_tiny_3, single composer (4-Mat) — see data/composers/4-mat.json folder[]"
  ]
}
```

## Overview

`4-Mat_tiny_3` is a raw Player-ID tag for one of several small, likely
experimental replay routines by **Matt Simmonds**, handle **4-Mat**, a
long-running UK SID composer. It is the third numbered variant found in
the local dataset, alongside `4-Mat_tiny_1` (5 files, carded as
[4-mat-tiny-1](4-mat-tiny-1.md)) and `4-Mat_tiny_2` (3 files, carded as
[4-mat-tiny-2](4-mat-tiny-2.md)). Both locally tagged files ("Type Mismatch"
and its remix) are 4-Mat's own — a full census (2 of 2 files) via the CSDb
webservice shows both share the same `Released` field, '2007 Ate Bit', with
no dedicated CSDb tool/release page found under this tag name and no
sidid.nfo entry.

## Quirks & gotchas

See the `quirks` array. Load-bearing: (1) SIDId has no entry for this tag
at all, matching both sibling `_tiny_1`/`_tiny_2` cards' findings; (2) this
is one of at least three numbered "tiny" variants, kept as separate cards
per the established precedent rather than merged without evidence; (3) do
not conflate with the separately-tagged `4-Mat/MiniSeq` or `Michael_Delaney`
tags also used by this composer; (4) the 2 censused files' PSID headers
diverge (one has no PlayAddr and a different load address than the other),
echoing the same-family inconsistency already seen in `4-Mat_tiny_2`; (5)
this pass's own web research was blocked (WebSearch session budget
exhausted at 200/200, CSDb HTML 503) and leans on the `_tiny_1`/`_tiny_2`
cards' findings by analogy rather than an independent fresh check.

## Disassembly notes

None done here. No memory map, entry points, or data format are known — all
Tier 3 fields are TODO.

## Verification

Not verified. This card is seeded entirely from cached local data
(`data/composers/4-mat.json`, `data/sidid.json`). `status: stub`.

## Sources

See the `sources` array — SIDId sidid.nfo (absence check), CSDb webservice
records for both censused files, the local composer aggregation, and the
sibling `4-mat-tiny-1`/`4-mat-tiny-2` cards (cited by analogy for the
platform claim, since this pass's own web search was blocked).

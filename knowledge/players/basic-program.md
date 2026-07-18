# Basic Program (HVSC `_BASIC` meta-tag — NOT a player routine)

```json
{
  "id": "basic-program",
  "name": "Basic Program (meta-tag, not a player)",
  "aliases": ["Basic_Program"],
  "authors": [],
  "released": "N/A — not a dated tool; a classification applied across many years and authors",
  "status": "stub",
  "platform": "NOT A PLAYER ROUTINE. 'Basic_Program' is Player-ID / HVSC's CLASSIFICATION for SID tunes whose playback is driven by an embedded BASIC program, not by a discrete machine-code player. This card exists to DOCUMENT that determination and remove the tag from the uncarded-player backlog — it is deliberately a documented exclusion, not a tool card.",
  "csdb_release": null,

  "memory": {
    "load_address": "N/A — no single routine; each tune is its own BASIC program",
    "zero_page": "N/A",
    "layout": "N/A"
  },
  "entry": {
    "init": "N/A — playback is BASIC-driven per-tune, not a shared init/play routine",
    "play": "N/A"
  },
  "speed": "N/A",

  "data_format": {
    "order_list": "N/A",
    "patterns": "N/A",
    "instruments": "N/A",
    "wavetable": "N/A",
    "pulsetable": "N/A",
    "filtertable": "N/A"
  },
  "effects": { "encoding": "N/A — no common format; each is a hand-written BASIC program", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "DETERMINATION (2026-07-18): 'Basic_Program' is a META-TAG, not an identifiable player family, and is treated as a PERMANENT EXCLUSION from the player-carding backlog. Three independent lines of evidence: (1) 100% of the 234 files tagged 'Basic_Program' in this dataset carry the HVSC '_BASIC' filename suffix (e.g. America_the_Beautiful_BASIC.sid, Crac_Mur_BASIC.sid) — HVSC's own convention for a tune played by a BASIC program rather than a machine-code driver; (2) the tag has NO entry in SIDId (data/sidid.json) — SIDId indexes actual player-routine byte-signatures, and a real discrete player would be expected to appear there; (3) usage is spread across 47 mostly-obscure, real-name (non-scene-handle) authors (Al Weseman, Alain Dubus, Alan Bond, Andrew Colin, Bob Kingham…) with no shared tool provenance — the shape of a language/container classification, not of one team's routine. Together these mean the 'player' here is BASIC itself, per-tune, so there is no single routine to disassemble or card.",
    "DECISIVE CORROBORATION (from the falsify pass): Player-ID DOES carve out a specifically-named BASIC routine when one exists — 'Basic/Jim_Butterfield' (30 files, also `_BASIC`-suffixed) sits right alongside 'Basic_Program' in the same dataset. That proves 'Basic_Program' is the GENERIC RESIDUAL BUCKET for BASIC-driven tunes not attributable to a named routine, not a discrete tool itself. Two more supporting facts: (a) the `_BASIC` suffix spans multiple tags (272 files total: Basic_Program 234, Basic/Jim_Butterfield 30, plus one-offs under RiffQuick / CheeseCutter / etc.) — a filename convention applied independently of the Player-ID tag; (b) even the dominant author under this tag (Alan Bond, 62 of 234 files, 26.5%) has HIS OWN `_BASIC` files split across several tags (Basic_Program, RiffQuick, empty), so there is no single routine even within the biggest user. This project's own legacy reference (docs/legacy/sid_reference.html) independently describes the technique: composers 'directly poking SID registers with BASIC DATA statements in a timing loop', whom DeepSID marks with a green 'B' focus icon.",
    "COUNT PRECISION: '47' is the number of distinct composer FOLDERS (data/composers/*.json) carrying the tag; distinct author strings are a few more (~49-53) due to handle variants of the same person. The 47-folder spread includes a couple of famous scene names with ONE file each (Jeroen Tel, Jens-Christian Huus/JCH) — which, far from indicating a shared tool, reinforces 'no shared provenance': unrelated people who each happened to author a single BASIC tune land in the same residual bucket.",
    "WHY IT WAS THE #1 UNCARDED 'FAMILY' FOR ~5 SESSIONS: at 234 files it topped scripts/dev/coverage.js's file-count ranking of uncarded tags, repeatedly reading as the single largest chunk of remaining coverage. coverage.js keys 'carded' off each card's aliases[] and has no separate exclusion mechanism, so the only way to stop a genuine non-tool meta-tag from perpetually heading the backlog is to claim it with a documenting card like this one. That is this card's entire purpose.",
    "SCOPE NOTE: this determination is about the Player-ID *tag* 'Basic_Program' as it appears in this project's dataset (all in HVSC MUSICIANS/, 0 in GAMES/). It is not a claim that no C64 music was ever meaningfully written in BASIC — only that this tag is a technique/container label, not a named tool with its own reverse-engineerable replay routine.",
    "DO NOT card sub-'families' of this tag or research a 'Basic_Program player' — there isn't one. If a future pass wants to reduce this bucket, the right move is per-file (identifying whether a specific _BASIC tune actually embeds a known small routine), not treating 'Basic_Program' as a tool."
  ],
  "sources": [
    "Local dataset: 234 files tagged 'Basic_Program' across 47 composers; 234/234 (100%) carry the HVSC '_BASIC' filename suffix; 0 in GAMES/ (aggregated from data/composers/*.json 'folder[].player' + 'collection_path')",
    "data/sidid.json — no byTag entry for 'Basic_Program' (checked directly): the tag has no SIDId player-routine signature",
    "HVSC naming convention: the '_BASIC' filename suffix marks a tune played by a BASIC program (High Voltage SID Collection documentation / file-naming practice)",
    "knowledge/COVERAGE.md — 'Basic_Program' had stood as the #1 uncarded family by file count (234 files) prior to this determination",
    "Contrast tag 'Basic/Jim_Butterfield' (30 files, also _BASIC-suffixed) — a SEPARATELY-named BASIC routine in the same dataset, proving Player-ID names a specific BASIC routine when one exists and that 'Basic_Program' is the residual bucket",
    "docs/legacy/sid_reference.html — describes the technique (composers 'directly poking SID registers with BASIC DATA statements in a timing loop', DeepSID's green 'B' focus icon), in-repo corroboration of the BASIC-driven classification"
  ]
}
```

## Overview

**`Basic_Program` is not a player and gets no player research.** It is
Player-ID / HVSC's classification for SID tunes whose music is produced by an
embedded **BASIC program** rather than a discrete machine-code replay routine.
This card is a *documented exclusion*: it records the determination and, by
claiming the `Basic_Program` tag in its `aliases`, removes it from
`scripts/dev/coverage.js`'s uncarded-player backlog — where, at 234 files, it
had stood as the nominal #1 "uncarded family" for roughly five sessions.

The determination rests on three independent facts: **100%** of the 234 tagged
files carry HVSC's `_BASIC` filename suffix; the tag has **no SIDId entry** (so
no player-routine byte-signature exists); and its 47 authors are mostly obscure
real names with no shared tool provenance — the profile of a language/container
label, not a team's routine. There is no single init/play to disassemble
because the "player" is BASIC, per tune.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a **meta-tag, treated as a
permanent exclusion** — do not try to research or card a "Basic_Program player,"
because none exists. The only meaningful future work would be per-file (does a
specific `_BASIC` tune embed a recognisable small routine?), not tool-level.

## Disassembly notes

None, and none applicable — there is no shared routine. Each `_BASIC` tune is
its own hand-written BASIC program; "disassembly" would be reading individual
BASIC listings one file at a time, which is outside the player-KB's remit.

## Verification

**Not a player — no verification applies.** The claim this card makes is a
*classification* claim (that `Basic_Program` is HVSC's `_BASIC` convention, not
a tool), and it is supported by the 100%-suffix match, the SIDId absence, and
the disparate authorship — all checked directly against the local dataset and
`data/sidid.json`. `status` is left `stub` only because the card schema requires
a status; it should not be read as "a player awaiting further research."

## Sources

See the `sources` array — the local-dataset aggregation (234 files, 100%
`_BASIC` suffix, 47 authors), the confirmed absence from `data/sidid.json`, the
HVSC `_BASIC` naming convention, and `knowledge/COVERAGE.md` (where it had been
the #1 uncarded family).

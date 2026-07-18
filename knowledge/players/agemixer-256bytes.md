# 256bytes/Agemixer

```json
{
  "id": "agemixer-256bytes",
  "name": "256bytes/Agemixer",
  "aliases": ["256bytes/Agemixer"],
  "authors": ["Ari Yliaho (Agemixer)"],
  "released": "2005 (per the CSDb SID entry for the one locally-tagged file)",
  "status": "stub",
  "platform": "Not a distributed tool — an extreme-size-constrained custom C64 player routine + data written by Finnish composer Ari Yliaho for size-limited demoscene intro competitions. Not a conventional tracker; Agemixer's other ~100 files in this dataset mostly use DMC, SynC, Music Assembler, Yip_MegaSound, Hermit/SidWizard, or JCH NewPlayer — this tag covers only his own ultra-compact one-off routine.",
  "csdb_release": null,

  "memory": { "load_address": "TODO", "zero_page": "TODO", "layout": "TODO" },
  "entry": { "init": "TODO", "play": "TODO" },
  "speed": "TODO",
  "data_format": { "order_list": "TODO", "patterns": "TODO", "instruments": "TODO", "wavetable": "TODO", "pulsetable": "TODO", "filtertable": "TODO" },
  "effects": { "encoding": "TODO", "commands": {} },

  "edges": { "derives_from": [], "successor_of": [], "shares_routine_with": [], "same_effect_encoding_as": [] },

  "quirks": [
    "THE '256bytes' IN THE TAG NAME IS REAL, MEASURED DATA, NOT A CATEGORY LABEL: the one locally-tagged file, 'Myblock... One Block' (data/composers/agemixer.json, CSDb sid id 6984), has a CSDb-listed SID data size of exactly 252 bytes ($00FC) — i.e. genuinely sub-256-byte music data, confirmed via the CSDb SID entry itself, not inferred from the tag name. This is the strongest possible case in this batch for the tag name being literally, numerically true rather than descriptive/suggestive.",
    "GENUINE REUSE ACROSS MULTIPLE SIZE-LIMITED PRODUCTIONS, not a single one-off: CSDb's release listing for this SID shows it was used across several different size-capped demoscene productions — categorized variously as '4K Intro,' '2kb,' and '1K Intro' releases — meaning Agemixer's tiny player+data combination was reused as a soundtrack across multiple of his own size-coding entries, not embedded in just one intro. This is why the card was kept as a NEW STUB rather than SKIPped as a pure one-off gimmick.",
    "SIDId (data/sidid.json) has NO entry for '256bytes/Agemixer' — fingerprinted by this project's own Player-ID tooling only.",
    "COMPOSER CONTEXT: Ari Yliaho (Agemixer) is a prolific Finnish scener (data/composers/agemixer.json, ~100+ locally-tagged files, active since the 1990s per DMC/Music_Assembler-era tunes through GoatTracker-era tunes in the 2020s) whose catalog is otherwise dominated by conventional trackers — this ultra-compact routine is a small, deliberate outlier consistent with size-coding competition entries (256-byte/1K/2K/4K intros are a distinct demoscene discipline from full trackable music), not a general-purpose music tool ever offered to other composers.",
    "NOT the same thing as a '_Digi' sample-playback tag despite superficially belonging to the same 'tiny/utility routine' category covered in this batch — no source describes this specifically as sample/digi playback; it reads as an extremely space-optimized conventional player+data pairing for a byte-limited coding challenge, not confirmed sample technique. Treated cautiously per this KB's 'digi by name is not evidence' rule (which applies equally to unverified technique claims of any kind, not just literal '_Digi' tags)."
  ],
  "sources": [
    "Local dataset: data/composers/agemixer.json — 1 file tagged 256bytes/Agemixer ('Myblock... One Block', csdb sid id 6984) out of Ari Yliaho's ~100+ total tagged files; see knowledge/COVERAGE.md row #134 (1 file)",
    "data/sidid.json: no entry for '256bytes/Agemixer' (checked, absent)",
    "CSDb SID entry https://csdb.dk/sid/?id=6984 — 'Myblock... One Block', author Ari Yliaho (Agemixer), released 2005 for the group Skalaria, data size 252 ($00FC) bytes, reused across '4K Intro', '2kb', and '1K Intro' category releases",
    "data/composers/agemixer.json profile: full_name Ari Yliaho, handle Agemixer, country Finland, csdb_id 301"
  ]
}
```

## Overview

`256bytes/Agemixer` is Finnish composer **Ari Yliaho**'s own ultra-compact
player+data routine, built for size-limited demoscene "intro" competitions.
The one locally-tagged file, "Myblock... One Block" (2005, group Skalaria),
genuinely measures 252 bytes of SID data per its CSDb entry — the tag name is
literal, measured fact, not a suggestive label. CSDb shows the same SID reused
across several of Agemixer's own size-capped productions (4K/2K/1K Intro
categories), so this is a real, reused routine rather than a single throwaway
gimmick — the reason this became a stub card instead of a SKIP. Agemixer's
much larger catalog otherwise runs on conventional trackers (DMC, SynC, Music
Assembler, Yip_MegaSound, Hermit/SidWizard, JCH NewPlayer, GoatTracker); this
tag is a small, deliberate outlier tied to size-coding, not a general-purpose
tool ever used by anyone else.

## Quirks & gotchas

See the `quirks` array. Load-bearing: the "256 bytes" claim is independently
confirmed by CSDb's own reported data size (252 bytes), not just parsed from
the tag string; and the routine was reused across multiple size-capped
releases, which is why this earned a stub card rather than being dismissed as
a one-off.

## Disassembly notes

None performed. All Tier 3 fields are `TODO`, not guessed — no public source
or disassembly of this routine was located. A 252-byte SID would be an
unusually small and tractable disassembly target for a future pass.

## Verification

**Not verified — `status: stub`.** Only identity/usage facts are established
(authorship, exact 1-file/1-composer local tagging, CSDb-sourced size and
reuse evidence). No SIDId entry exists for this tag. No runtime behaviour has
been confirmed.

## Sources

See the `sources` array — local dataset aggregation and one CSDb SID-entry
lookup.

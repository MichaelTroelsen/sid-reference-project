# Dane NewPlayer (JCH-Editor 3.1 + NP22-25)

```json
{
  "id": "dane-newplayer",
  "name": "Dane NewPlayer (JCH-Editor 3.1 + NP22-25)",
  "aliases": ["JCH/Dane_NewPlayer", "(Dane_NewPlayer)"],
  "authors": ["Stellan Andersson (Dane) / Booze Design"],
  "released": "2011 (CSDb release 100406, \"JCH-Editor 3.1 + NP22-25\", 6 June 2011); the raw tag JCH/Dane_NewPlayer also matches at least one earlier Dane file dated 2006 (Chronicles, csdb.dk/sid/?id=36908) — see quirks",
  "status": "stub",
  "platform": "Native C64 player routine, authored with a Dane-updated build of the JCH Editor (v3.1) — a fork/continuation of Jens-Christian Huus's (JCH) NewPlayer, per jch-newplayer.md's own naming convention (NP21 = Laxity/Glover, NP22-25 = Dane)",
  "csdb_release": 100406,

  "memory": {
    "load_address": "TODO: no disassembly performed. Per-file load addresses vary (CSDb header data on two sampled files: Dane_vs_Scortia.sid loads $1000; Chronicles.sid, an earlier 2006 file, loads $8F40 — likely relocated to fit its host demo) — not evidence of a fixed player load address.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
  },
  "speed": "TODO: not established. The bundled documentation (docs.doc in CSDb release 100406) reportedly describes MULTIPLE selectable player variants (NP22-25) with different raster-time/flexibility tradeoffs (\"Some players use only little raster-time but are not that flexible. Other players have more options but use more time.\") — i.e. speed/cost is a per-variant choice, not one fixed model, but the doc itself was not read directly (only summarized via a third-party site).",

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
    "derives_from": ["jch-newplayer"],
    "successor_of": [],
    "shares_routine_with": [],
    "same_effect_encoding_as": []
  },

  "quirks": [
    "TWO RAW TAGS, ONE COMPOSER, LIKELY ONE TOOL: the local dataset (data/composers/dane.json) has both `JCH/Dane_NewPlayer` (21 files) and `(Dane_NewPlayer)` (6 files) — knowledge/COVERAGE.md lists them as two separate uncarded families (rank 10 and rank 90) because its grouping logic only merges tags by stripping numeric version suffixes, which doesn't apply here. BOTH tags are used exclusively by Dane (Stellan Andersson) and nobody else in the whole dataset — 27/27 files, 100% one composer, the strongest possible 'personal/small-scene routine' signal per the extraction template's guidance. This card merges them under one id on that evidence; sidid.nfo documents only `(Dane_NewPlayer)` by name (\"JCH-editor 3.1 + NP22-25\", CSDb 100406) — `JCH/Dane_NewPlayer` has NO sidid.nfo entry at all, same situation as JCH NewPlayer's own undocumented `_Vn` sub-signatures (see jch-newplayer.md).",
    "THE TWO TAGS DO NOT CLEANLY SPLIT BY DATE, which argues against 'one is an earlier/later version of the other': sampled CSDb ids/dates show `JCH/Dane_NewPlayer` on files from 2006 (Chronicles, csdb_id 36908) through at least 2015 (Nine Lives, csdb_id 52847) and a much later csdb_id 62582 (Partly_Snowy), while `(Dane_NewPlayer)`-tagged files (csdb_id 54268-58857, e.g. Intertwined, Party Horse, The Coffee Zone, Last Night) sit chronologically INSIDE that same span rather than strictly after it. Whatever distinguishes the two raw tags, it is not a clean 'before/after the 2011 official release' split — plausibly a byte-signature-detection nuance (some tunes' data cleanly match the specific NP22-25 sub-signature, others only match the broader JCH/Dane-ambiguous one), analogous to the SidFactory_II/Laxity ambiguous-match pattern documented in this project's own CLAUDE.md — but this is NOT confirmed, only the safest reading of the evidence found.",
    "THE 2006 FILE PREDATES THE 2011 RELEASE BY 5 YEARS: Chronicles.sid (csdb_id 36908, 2006, Booze Design) is tagged JCH/Dane_NewPlayer and loads at $8F40 (vs $1000 for the 2011-era Dane_vs_Scortia.sid) — consistent with Dane already using a personally-adapted JCH-based player years before packaging and releasing 'JCH-Editor 3.1 + NP22-25' as a distributable tool in 2011. The timeline is further extended by a Lemon64 forum post from 16 November 2003 where Dane himself discusses 'my latest hack of the Newplayer' and plans for an 'updated packer and editor' with documentation — placing the fork's origins at least 8 years before the formal 2011 release. The load-address difference between files could simply reflect relocation inside a larger demo binary, not a different player version.",
    "CSDb release 100406 bundles a disk image (JCH 3.1+NP22-25.d64) and an English documentation file (NP22-25 docs.doc, 2185 downloads vs 1005 for the d64 — the docs alone were downloaded more than the tool) — no source code was found in this release or elsewhere on CSDb/GitHub during this pass. Treat as 'public binary tool with docs, source not found', not open-source.",
    "jch-newplayer.md's own quirks independently name this fork from the other side of the lineage: 'Widely forked: Laxity NewPlayer V21 (2006), Glover NewPlayer V21 (2000), Dane NewPlayer V22-25 (2011)' — the same JCH '21.Gn'-style version-numbering convention (V21 = Laxity/Glover, V22-25 = Dane) that motivates the derives_from edge here.",
    "Composer concentration: 27/27 files (100%) by a single composer, Dane/Stellan Andersson of Booze Design (Stockholm, Sweden) — a personal routine that was formally packaged and released once (2011) rather than a tool independently adopted by other composers, unlike the Glover NP21 fork (Glover was NOT even the top user of his own fork — see glover-newplayer.md)."
  ],
  "sources": [
    "sidid:(Dane_NewPlayer) — name 'JCH-editor 3.1 + NP22-25', author Stellan Andersson (Dane), released 2011, reference https://csdb.dk/release/?id=100406 — data/sidid.json / deepsid_dl/sidid.nfo lines 706-710",
    "CSDb release 100406, 'JCH-Editor 3.1 + NP22-25' (Booze Design, 6 June 2011; coder Dane of Booze Design; files JCH 3.1+NP22-25.d64 + NP22-25 docs.doc): https://csdb.dk/release/?id=100406",
    "CSDb webservice type=release id=100406 (file list + production notes/credits): https://csdb.dk/webservice/?type=release&id=100406",
    "vintageisthenewold.com summary of the release (multiple selectable player variants, raster-time/flexibility tradeoff, English docs): https://www.vintageisthenewold.com/jch-editor-3-1-np22-25",
    "CSDb sid entry 36908, 'Chronicles' (Dane, 2006, Booze Design; load $8F40): https://csdb.dk/sid/?id=36908",
    "CSDb sid entry 45677, 'Dane vs Scortia' (Dane, 2011, Booze Design; load $1000): https://csdb.dk/sid/?id=45677",
    "knowledge/players/jch-newplayer.md quirks — corroborating mention of 'Dane NewPlayer V22-25 (2011)' as a fork, from the JCH side of the lineage",
    "knowledge/COVERAGE.md (before this card existed) — families 'JCH/Dane_NewPlayer' (21 files) and '(Dane_NewPlayer)' (6 files), each its own uncarded family; both are now absent from that generated file since this card covers them",
    "Local dataset: data/composers/dane.json — 27 of 27 tagged files (JCH/Dane_NewPlayer 21 + (Dane_NewPlayer) 6) attributed to Dane alone, cross-checked against CSDb csdb_id per file",
    "Lemon64 forum post by Dane (16 Nov 2003, 'Seeking tutorial for JCH' thread) — Dane discusses 'my latest hack of the Newplayer' and plans for an updated packer/editor/docs, placing the fork's origins at least 8 years before the 2011 release: https://www.lemon64.com/forum/viewtopic.php?p=98706",
    "CSDb release 121437, 'NewPlayer Tools' (Crescent/Wisdom, 1 Sep 2013) — a post-release JCH packer/depacker/converter with source code; Dane commented 'This looks great. I will test it on my modified player,' confirming he was still actively maintaining his player fork through at least 2013: https://csdb.dk/release/?id=121437"
  ]
}
```

## Overview

Dane NewPlayer is Stellan Andersson's ("Dane" of Booze Design, Stockholm)
personal fork/continuation of Jens-Christian Huus's [JCH NewPlayer](jch-newplayer.md),
packaged and released as "JCH-Editor 3.1 + NP22-25" (CSDb release 100406,
6 June 2011) — an updated build of the JCH Editor bundled with a family of
NewPlayer variants numbered 22 through 25, continuing JCH's own `Vnn`
numbering past V21 (used by the Laxity and Glover forks). In the local
dataset it appears as two raw tags, `JCH/Dane_NewPlayer` (21 files) and
`(Dane_NewPlayer)` (6 files) — COVERAGE.md's mechanical grouping keeps them
as separate uncarded families, but both are used exclusively by Dane (27/27
files, 100% one composer) and are merged under this one card on that
evidence, since sidid.nfo documents `(Dane_NewPlayer)` by name and
jch-newplayer.md independently corroborates "Dane NewPlayer V22-25 (2011)"
as a fork of itself.

## Quirks & gotchas

See the `quirks` array — the two load-bearing ones: the **two raw tags don't
split cleanly by date** (dates/CSDb ids interleave rather than one preceding
the other), so treat the JCH/Dane vs (Dane) distinction as an open,
unconfirmed detection nuance rather than a version-order fact; and the
**2006 file predates the 2011 release by 5 years**, suggesting Dane had
already been using a personally-adapted JCH-based player well before
formally packaging and releasing it as a tool.

## Disassembly notes

None performed. CSDb release 100406 is a disk image (.d64) plus a
documentation file (.doc) — no source code was found on CSDb or GitHub during
this pass. A real disassembly would need to start from the d64's player
binary; per the bundled docs (read only via third-party summary, not
directly), it apparently contains multiple selectable player variants
(NP22-25) with different raster-time/flexibility tradeoffs, which would need
disentangling per-variant.

## Verification

**Not verified — `status: stub`.** Identity, authorship, release, and
composer-usage facts are confirmed from SIDId, CSDb, and this project's own
composer dataset. No runtime fact (memory map, entry points, data format,
effect encoding) has been established — all left honestly `TODO`, including
the two per-file load addresses noted in `memory.layout`, which are simple
CSDb header readings, not a disassembly-confirmed fixed player address.

## Sources

See the `sources` array — SIDId's `(Dane_NewPlayer)` entry, CSDb release
100406 and its webservice XML, two individual CSDb SID entries used to
cross-check dates/load addresses, a third-party summary of the release docs,
the corroborating mention in `jch-newplayer.md`, and this project's own
`data/composers/dane.json` for usage counts.

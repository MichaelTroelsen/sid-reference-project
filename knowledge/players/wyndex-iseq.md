# ISEQ (Wyndex)

```json
{
  "id": "wyndex-iseq",
  "name": "ISEQ (Wyndex)",
  "aliases": ["Wyndex/ISEQ"],
  "authors": ["Stephen L. Judd (Wyndex)"],
  "released": "2001 (SIDId); CSDb release 'Iseq' (id 113028) is dated 31 May 2002",
  "status": "stub",
  "platform": "Native C64 tool, confirmed by the author's own page: \"Iseq is, of course, a C64 music composition program, written totally from scratch (i.e. it isn't just a Tunesmith update).\" Not a cross-platform editor. Distinct from this same author's earlier 'Blahtune' (1997, see [[wyndex-blahtune]]) — different SIDId entry, different release year, different CSDb reference. No source states whether ISEQ shares any code with Blahtune's replay routine or is an unrelated, later tool.",
  "csdb_release": 113028,

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
    "SIDId carries 'Wyndex/ISEQ' as its OWN entry, separate from 'Wyndex/Blahtune' — different release year (2001/2002 vs 1997) and a different CSDb reference (113028 vs no CSDb entry for Blahtune, per wyndex-blahtune.md). DELIBERATELY NOT MERGED into [[wyndex-blahtune]] despite being the same author: this KB already applies the 'same author/name prefix is not evidence of one tool' caution elsewhere (e.g. antony-crowther vs antony-crowther-v3), and here SIDId itself treats them as two distinct signatures.",
    "Census of all 3 locally-tagged files (Commando Cover csdb_id 31354, Examples csdb_id 31356, Snood (Blockhead's Revenge) csdb_id 31364, from data/composers/wyndex.json) confirms all are by Wyndex himself, 100% — even narrower than Blahtune's 9-of-10 composer split (see [[wyndex-blahtune]]). CSDb's own release-page UsedSIDs list (id 113028) contains exactly these same 3 SIDs, corroborating the local dataset.",
    "CSDb classifies the release only as a generic 'C64 Tool'; the author's own page (http://www.ffd2.com/fridge/iseq/) supplies the real description: 'Iseq is, of course, a C64 music composition program, written totally from scratch (i.e. it isn't just a Tunesmith update).' It explicitly denies being an update/derivative of 'Tunesmith' (a separate editor, linked from the same author's site at ../meow/index.html) — a real disclaimer, not KB speculation, so no `derives_from` edge is asserted either way.",
    "CSDb's release date (31 May 2002) matches the author's own page, whose changelog reads '5/31/02 Page officialy [sic] goes online!' — this corroborates CSDb over SIDId's '2001', though `released` is left as originally recorded pending a full resolution of the discrepancy.",
    "Source code is NOT published in a public repo — the author's page states: 'The source is pretty big, so it might take a while to get up here. But if you email me I'd be happy to send it to you' (sjudd@ffd2.com). So this is 'available on request from the author', not open-source in the repo sense — distinct from a public GitHub/SourceForge release.",
    "Binary/docs ARE published: CSDb release 113028 links an 'ISEQ1.D64' disk image and an 'iseq10.zip' (program + docs + examples); the author's page separately links 'iseq.docs' (main documentation) and 'iseq.tutorial'. Neither doc file was read in this pass — Tier 3 fields remain TODO.",
    "PSID header metadata (not a disassembly fact) from CSDb for all 3 SIDs: load=$1000, init=$1000, play=$1003, SID model 8580, NTSC. Recorded here per the KB's rule that header values belong in quirks, never written into Tier 3 `entry`/`memory` fields."
  ],
  "sources": [
    "sidid:Wyndex/ISEQ (author Stephen L. Judd (Wyndex), released 2001, reference https://csdb.dk/release/?id=113028) — data/sidid.json",
    "CSDb release 113028 XML webservice ('Iseq', 31 May 2002, Type 'C64 Tool', Website http://www.ffd2.com/fridge/iseq/, UsedSIDs list, download links): https://csdb.dk/webservice/?type=release&id=113028 (HTML mirror https://csdb.dk/release/?id=113028)",
    "Author's own page (Stephen L. Judd / Wyndex): http://www.ffd2.com/fridge/iseq/ — platform description, changelog, source-on-request statement, doc/tutorial links",
    "Local dataset: data/composers/wyndex.json — 3 files (Commando Cover, Examples, Snood (Blockhead's Revenge)), all censused; knowledge/COVERAGE.md rank #59",
    "Sibling KB card: knowledge/players/wyndex-blahtune.md (same author, different SIDId entry, deliberately not merged)"
  ]
}
```

## Overview

`Wyndex/ISEQ` is a raw Player-ID / SIDId tag naming **Stephen L. Judd
(Wyndex)**'s tool "ISEQ", a native C64 music composition program "written
totally from scratch" per the author's own page
(http://www.ffd2.com/fridge/iseq/), released 2001-2002 per SIDId and a
dedicated CSDb release page (id 113028, dated 31 May 2002, matching the
author's own changelog). This is a DIFFERENT SIDId signature from the same
author's earlier, better-documented "Blahtune" (1997, already carded as
[[wyndex-blahtune]], sourced from the author's own published manual and
memory map) — no source states any relationship between the two, so this
card is kept separate rather than folded in. The author's page explicitly
disclaims ISEQ being derived from a separate editor called "Tunesmith".
Source is not publicly published but is offered "on request" by email.
In this dataset it is used exclusively by Wyndex himself: all 3 tagged
files censused, 100%.

## Quirks & gotchas

See the `quirks` array. Load-bearing: this is a genuinely distinct SIDId
entry from Blahtune (different year, different CSDb reference), so it is
NOT treated as an alias despite the shared author — consistent with this
KB's standing rule that name/author overlap alone isn't evidence of one
tool.

## Disassembly notes

None done here. The author's page links `iseq.docs`/`iseq.tutorial` and an
`iseq10.zip` (program + docs + examples), and offers source on request, but
none of these were read/disassembled in this pass — every Tier 3 field is
honestly `TODO`. PSID header addresses collected during this pass (load
$1000, init $1000, play $1003, all 3 files identical) are recorded only in
`quirks`, per this KB's rule that header metadata is not a disassembly fact.

## Verification

**Not verified — `status: stub`.** Only identity/provenance facts (author,
release year, CSDb reference, local usage) are confirmed via SIDId and
CSDb. No runtime fact was guessed.

## Sources

See the `sources` array — SIDId, the CSDb release XML webservice (id
113028), the author's own page (http://www.ffd2.com/fridge/iseq/), local
composer data (fully censused), and the sibling `wyndex-blahtune.md` card.

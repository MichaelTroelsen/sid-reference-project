# Dane (early/personal player routine, pre-2011)

```json
{
  "id": "dane",
  "name": "Dane (early/personal player routine, pre-2011)",
  "aliases": ["Dane"],
  "authors": ["Stellan Andersson (Dane) / Booze Design"],
  "released": "2004–2008 (earliest sampled files dated 29 Feb 2004; latest 25 Oct 2008 — all predate the 2011 \"JCH-Editor 3.1 + NP22-25\" release covered by dane-newplayer.md by 3–7 years)",
  "status": "stub",
  "platform": "TODO: not established — no packaged/distributed tool found (see quirks). Native C64 player code of some kind (plays back from real .sid files), but whether it is editor-authored or hand-coded is unconfirmed.",
  "csdb_release": null,

  "memory": {
    "load_address": "TODO: no disassembly performed. Per-file load addresses vary widely across the 8 sampled files ($1100, $1000, $2080, $083E, $E000 — see quirks) — not evidence of a fixed player load address; consistent with a routine relocated per host demo, same pattern noted for the pre-2011 Chronicles.sid in dane-newplayer.md.",
    "zero_page": "TODO: no disassembly performed",
    "layout": "TODO: no disassembly performed"
  },
  "entry": {
    "init": "TODO: no disassembly performed",
    "play": "TODO: no disassembly performed"
  },
  "speed": "TODO: not established",

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
    "NOT THE SAME CARD AS dane-newplayer.md, ON EVIDENCE, NOT JUST CAUTION: this card covers the bare raw tag `Dane` (8 files, data/composers/dane.json), which SIDId lists as its own signature with ONLY an `AUTHOR: Stellan Andersson (Dane)` line — no `NAME`, no `RELEASED`, no `REFERENCE`, no `COMMENT` (deepsid_dl/sidid.nfo line 270-271). Compare `(Dane_NewPlayer)` (sidid.nfo line 706-708), which has all four: NAME 'JCH-editor 3.1 + NP22-25', AUTHOR, and a CSDb REFERENCE (release 100406, 2011). SIDId's own scanner treats these as two distinct byte signatures, not two spellings of one tag.",
    "ALL 8 SAMPLED FILES PREDATE THE 2011 JCH-FORK RELEASE, AND BY A WIDE, CONSISTENT MARGIN: CSDb webservice lookups on all 8 csdb_ids in data/composers/dane.json give release dates of 29 Feb 2004 (Break_the_Cycle id 18459, Live_Forever id 18496, Naiv_Loop id 18508, Round_and_Round id 18522), 2005 (Gaijin id 18480, exact day unverified), 3 Aug 2008 (Pseudocode id 38904), and 25 Oct 2008 (Disgrace id 38901, Edge_of_Disgrace id 38902) — every file is 2004–2008, none post-2011. This is the opposite pattern from dane-newplayer.md's own tags, which straddle 2011 on both sides. Read together, the cleanest interpretation is that `Dane` is an EARLIER, pre-2011 player/coding routine Stellan Andersson used before he later built and packaged the JCH-based NewPlayer fork — not a mis-split of the same signature.",
    "CSDb's own scener profile for Dane (csdb.dk/scener/?id=435) lists his code/idea/docs credit on exactly ONE packaged tool release across his whole scene history: 'JCH-Editor 3.1 + NP22-25' (2011). His CSDb credits do also include one OTHER editor, 'JCH Editor V3.04', but in a Music (not Code) role — i.e. he's credited as a user of that earlier JCH editor, not its author. Narrowly: no OTHER tool/routine is credited to Dane as CODE author anywhere on CSDb found during this pass — the pre-2011 files were composed/played back some other way that never got named or packaged as a distributable tool by him, consistent with SIDId's sparse author-only signature entry.",
    "LOAD ADDRESSES ARE ALL OVER THE MAP, MUCH MORE SO THAN THE 2011 FORK: $1100 (Break_the_Cycle/Live_Forever, 2004 files, load 4352), $1000 (Naiv_Loop and Disgrace, load 4096), $2080 (Gaijin, load 8320), $083E (Edge_of_Disgrace, load 2110), $E000 (Pseudocode, load 57344). This spread across only 8 files strongly suggests the routine (whatever it is) gets relocated/reassembled per host demo rather than shipping as one fixed-address binary — a hand-integrated routine, not a standalone player loaded at a conventional address. Not a disassembly-confirmed conclusion, just what the header data shows.",
    "Composer concentration: 8/8 files (100%) by Stellan Andersson (Dane) alone — same 'personal routine, not a published tool' signal as the later JCH-fork tags in dane-newplayer.md, but here there is no CSDb release, no bundled docs, and no name at all, i.e. an even more purely personal/undocumented case than the packaged 2011 fork.",
    "UNCONFIRMED HYPOTHESIS, DELIBERATELY NOT ASSERTED AS AN EDGE: it is plausible this early routine is an ancestor/precursor of Dane's later JCH-based fork (same author, chronologically prior, no other tool credited to him) — but no source, manual, or disassembly states a derivation between the two, so no `edges` entry is asserted here per this project's evidence rule. Treat any lineage between `dane` and `dane-newplayer` as an open question for a future disassembly pass, not a fact."
  ],
  "sources": [
    "sidid:Dane — author Stellan Andersson (Dane), no name/released/reference/comment fields — data/sidid.json / deepsid_dl/sidid.nfo lines 270-271",
    "sidid:(Dane_NewPlayer) for comparison — name 'JCH-editor 3.1 + NP22-25', author, released 2011, CSDb reference 100406 — deepsid_dl/sidid.nfo lines 706-710 (see knowledge/players/dane-newplayer.md)",
    "Local dataset: data/composers/dane.json — 8 of 8 files tagged raw player `Dane`, all by Stellan Andersson (Dane), cross-checked by csdb_id",
    "CSDb webservice type=sid id=18459 'Break the Cycle' (29 Feb 2004, Booze Design, load $1100): https://csdb.dk/webservice/?type=sid&id=18459",
    "CSDb webservice type=sid id=18496 'Live Forever' (2004, Booze Design, load $1100): https://csdb.dk/webservice/?type=sid&id=18496",
    "CSDb webservice type=sid id=18508 'Naiv Loop' (29 Feb 2004, Booze Design, load $1000): https://csdb.dk/webservice/?type=sid&id=18508",
    "CSDb webservice type=sid id=18480 'Gaijin' (2005, load $2080 — exact release day not independently verified): https://csdb.dk/webservice/?type=sid&id=18480",
    "CSDb webservice type=sid id=18522 'Round and Round' (29 Feb 2004, load $1100): https://csdb.dk/webservice/?type=sid&id=18522",
    "CSDb webservice type=sid id=38901 'Disgrace' (25 Oct 2008, X'2008, load $1000): https://csdb.dk/webservice/?type=sid&id=38901",
    "CSDb webservice type=sid id=38902 'Edge of Disgrace' (25 Oct 2008, X'2008, load $083E): https://csdb.dk/webservice/?type=sid&id=38902",
    "CSDb webservice type=sid id=38904 'Pseudocode' (3 Aug 2008, St LCP 2008, load $E000): https://csdb.dk/webservice/?type=sid&id=38904",
    "CSDb scener profile, Dane/Booze Design (id 435) — only tool/code credit found is the 2011 JCH-Editor 3.1 + NP22-25 release: https://csdb.dk/scener/?id=435",
    "knowledge/COVERAGE.md (before this card existed) — family 'Dane', 8 files, rank 24, uncarded",
    "knowledge/players/dane-newplayer.md — sibling card for the 2011 JCH-based fork, used here only for date/tag contrast, not as an edge"
  ]
}
```

## Overview

The raw player tag `Dane` (8 files, all composed 2004–2008 by Stellan Andersson
"Dane" of Booze Design, HVSC path `MUSICIANS/M/Mitch_and_Dane/Dane/`) is a
**separate SIDId signature from `(Dane_NewPlayer)`/`JCH/Dane_NewPlayer`**
(covered by [`dane-newplayer.md`](dane-newplayer.md)), not another spelling of
the same tag. SIDId's entry for `Dane` carries only an author line — no
name, no CSDb reference, no release year, no technique comment — the
sparsest possible signature, and every one of the 8 sampled files predates by
years the 2011 CSDb release ("JCH-Editor 3.1 + NP22-25") that the other card
documents. Dane's own CSDb scener profile credits him with exactly one
tool/code release in his whole history, that same 2011 package — nothing
named or packaged corresponds to these earlier files. The evidence points to
this being an earlier, undocumented personal player/coding routine Dane used
before later building his JCH-based fork, rather than the same tool
mis-tagged, but no source states a derivation between the two, so no lineage
edge is asserted.

## Quirks & gotchas

See the `quirks` array. Load-bearing points: SIDId treats `Dane` and
`(Dane_NewPlayer)` as **distinct signatures**, not a version split (contrast
with the sibling card's `JCH/Dane_NewPlayer` vs `(Dane_NewPlayer)` split, which
*is* the same underlying tool per its own quirks); every sampled file here
predates the 2011 release cleanly (2004–2008, no overlap), unlike the
sibling card's tags which straddle 2011 on both sides; and load addresses vary
per file in a way consistent with an integrated/relocated routine rather than
a standalone distributed tool.

## Disassembly notes

None performed. No source, disk image, or documentation for a standalone
"Dane" player/tool was found on CSDb — only the individual .sid files
themselves and their CSDb metadata (load/init/play addresses, release dates).
A real disassembly would need to start from one of the 8 .sid files' player
code directly, since no distributable binary release exists to examine.

## Verification

**Not verified — `status: stub`.** Identity (author), usage (8/8 files one
composer), and chronology (all pre-2011) are confirmed from SIDId, this
project's own composer dataset, and CSDb webservice lookups on all 8 files.
No runtime fact (memory map, entry points, data format, effect encoding) has
been established. The relationship (if any) between this routine and the
later `dane-newplayer` fork is explicitly left as an open, unconfirmed
question — not asserted as an `edges` entry — since no source states a
derivation.

## Sources

See the `sources` array — SIDId's `Dane` and `(Dane_NewPlayer)` entries
(for contrast), this project's `data/composers/dane.json`, eight individual
CSDb `type=sid` webservice lookups (one per file) for release dates and load
addresses, and Dane's CSDb scener profile for his tool/code credit history.
